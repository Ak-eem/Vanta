// ─────────────────────────────────────────────────────────────────────────────
// VANTA HUD v3 — Quantum Reactor
// Boot animation | Dashboard | Socket.IO | Voice PTT | Orchestration
// ─────────────────────────────────────────────────────────────────────────────

import * as THREE from 'three';
import { EffectComposer }  from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }      from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// ── Constants ─────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 5000;
const CYAN  = 0x00d4ff;
const WHITE = 0xffffff;
const AGENT_NAME = document.body.dataset.agent || 'Vanta';

// ── State ─────────────────────────────────────────────────────────────────────
let currentMode      = 'typing';
let orchestrateMode  = false;
let thinkMode        = false;
let dashReactor      = null;

// ── Utility: smooth opacity fade ──────────────────────────────────────────────
function fadeTo(mat, target, ms = 1000) {
    const start = mat.opacity, t0 = performance.now();
    const tick = () => {
        const p = Math.min((performance.now() - t0) / ms, 1);
        mat.opacity = start + (target - start) * (1 - Math.pow(1 - p, 3));
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

function fadeAll(mats, target, ms = 1000) {
    [mats].flat().forEach(m => fadeTo(m, target, ms));
}

// ── Time-based greeting ───────────────────────────────────────────────────────
function timeGreeting() {
    const h = new Date().getHours();
    const salutation = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
    return `${salutation}, ${AGENT_NAME}.`;
}

// ── Custom cursor ─────────────────────────────────────────────────────────────
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function cursorLoop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    if (cursor)   { cursor.style.left   = mx + 'px'; cursor.style.top   = my + 'px'; }
    if (follower) { follower.style.left = fx + 'px'; follower.style.top = fy + 'px'; }
    requestAnimationFrame(cursorLoop);
})();

document.querySelectorAll('button, input, a').forEach(el => {
    el.addEventListener('mouseenter', () => { follower?.classList.add('hover');    cursor?.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { follower?.classList.remove('hover'); cursor?.classList.remove('hover'); });
});


// ─────────────────────────────────────────────────────────────────────────────
// ██  QUANTUM REACTOR
// ─────────────────────────────────────────────────────────────────────────────
class QuantumReactor {
    constructor(canvas) {
        this.canvas  = canvas;
        this.W       = canvas.clientWidth  || canvas.offsetWidth  || 600;
        this.H       = canvas.clientHeight || canvas.offsetHeight || 600;
        this.time    = 0;
        this.raf     = null;
        this.state   = 'sleeping';
        this._sCfg   = null;          // current state config
        this._arcsOn = false;

        // Particle state
        this.pPos   = null;           // Float32Array positions
        this.pPhase = 'edge';         // 'edge' | 'converging' | 'orbiting'

        this._initRenderer();
        this._initScene();
        this._initObjects();
    }

    // ── Renderer + Bloom ──────────────────────────────────────────────────────
    _initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.renderer.setSize(this.W, this.H, false);
        this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ReinhardToneMapping;
        this.renderer.toneMappingExposure = 1.2;
    }

    _initScene() {
        this.scene  = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, this.W / this.H, 0.1, 200);
        this.camera.position.z = 7;

        this.composer  = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        this.bloom = new UnrealBloomPass(new THREE.Vector2(this.W, this.H), 1.6, 0.4, 0.1);
        this.composer.addPass(this.bloom);
    }

    // ── All 3-D objects ───────────────────────────────────────────────────────
    _initObjects() {
        // Nucleus — white-hot center
        this.nucleus = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 32, 32),
            new THREE.MeshBasicMaterial({ color: WHITE, transparent: true, opacity: 0 })
        );
        this.scene.add(this.nucleus);

        // Energy sphere — cyan inner glow
        this.energy = new THREE.Mesh(
            new THREE.SphereGeometry(0.45, 32, 32),
            new THREE.MeshBasicMaterial({
                color: 0x00e8ff, transparent: true, opacity: 0,
                blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false,
            })
        );
        this.scene.add(this.energy);

        // Corona — three fake-bloom layers
        this.coronas = [
            { r: 0.65, color: 0x00c8f0, max: 0.38 },
            { r: 1.05, color: 0x0099cc, max: 0.16 },
            { r: 1.60, color: 0x005577, max: 0.07 },
        ].map(cfg => {
            const m = new THREE.Mesh(
                new THREE.SphereGeometry(cfg.r, 32, 32),
                new THREE.MeshBasicMaterial({
                    color: cfg.color, transparent: true, opacity: 0,
                    blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false,
                })
            );
            m.userData.max = cfg.max;
            this.scene.add(m);
            return m;
        });

        // Three rings — different radii, tilts, directions
        this.rings = [
            { r: 1.4, tube: 0.012, spd:  0.006, rx: 0.50, rz: 0.30 },
            { r: 2.0, tube: 0.009, spd: -0.004, rx: 1.10, rz: 0.90 },
            { r: 2.8, tube: 0.007, spd:  0.003, rx: 0.20, rz: 1.55 },
        ].map(cfg => {
            const m = new THREE.Mesh(
                new THREE.TorusGeometry(cfg.r, cfg.tube, 16, 200),
                new THREE.MeshBasicMaterial({
                    color: CYAN, transparent: true, opacity: 0,
                    blending: THREE.AdditiveBlending, depthWrite: false,
                })
            );
            m.rotation.x = cfg.rx;
            m.rotation.z = cfg.rz;
            m.userData.spd = cfg.spd;
            this.scene.add(m);
            return m;
        });

        // 5000 particles — start at screen edges
        this.pPos = new Float32Array(PARTICLE_COUNT * 3);
        this._edgeScatter();

        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
        this.particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
            color: CYAN, size: 0.045, transparent: true, opacity: 0,
            blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        this.scene.add(this.particles);

        // Neural links — dynamic line segments
        const MAX_L = 250;
        this.linkPos = new Float32Array(MAX_L * 6);
        const lGeo   = new THREE.BufferGeometry();
        lGeo.setAttribute('position', new THREE.BufferAttribute(this.linkPos, 3));
        this.links = new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({
            color: CYAN, transparent: true, opacity: 0,
            blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        this.scene.add(this.links);

        // Electric arcs — 8 zig-zag lines
        this.arcs = Array.from({ length: 8 }, () => {
            const pts = new Float32Array(10 * 3);
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
            const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
                color: 0x88eeff, transparent: true, opacity: 0,
                blending: THREE.AdditiveBlending, depthWrite: false,
            }));
            this.scene.add(line);
            return { line, life: 0, maxLife: 0.3, pts };
        });

        // Orbiting satellites — 7 small spheres
        this.sats = Array.from({ length: 7 }, (_, i) => {
            const m = new THREE.Mesh(
                new THREE.SphereGeometry(0.035, 8, 8),
                new THREE.MeshBasicMaterial({
                    color: WHITE, transparent: true, opacity: 0,
                    blending: THREE.AdditiveBlending,
                })
            );
            m.userData = {
                angle: (i / 7) * Math.PI * 2,
                r:     1.3 + (i % 3) * 0.55,
                spd:   0.004 + i * 0.0009,
                inc:   (i / 7) * Math.PI * 0.65,
            };
            this.scene.add(m);
            return m;
        });
    }

    // ── Particle helpers ──────────────────────────────────────────────────────
    _edgeScatter() {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const θ = Math.random() * Math.PI * 2;
            const φ = Math.acos(2 * Math.random() - 1);
            const r = 13 + Math.random() * 7;
            this.pPos[i*3]   = r * Math.sin(φ) * Math.cos(θ);
            this.pPos[i*3+1] = r * Math.sin(φ) * Math.sin(θ);
            this.pPos[i*3+2] = r * Math.cos(φ);
        }
    }

    _orbitScatter(i) {
        const θ = Math.random() * Math.PI * 2;
        const φ = Math.acos(2 * Math.random() - 1);
        const r = 1.5 + Math.random() * 2.5;
        this.pPos[i*3]   = r * Math.sin(φ) * Math.cos(θ);
        this.pPos[i*3+1] = r * Math.sin(φ) * Math.sin(θ);
        this.pPos[i*3+2] = r * Math.cos(φ);
    }

    // ── Boot phase methods ────────────────────────────────────────────────────
    showSeed() {
        this._startLoop();
        fadeTo(this.nucleus.material, 0.12, 800);
        fadeTo(this.coronas[0].material, 0.04, 1000);
    }

    growSeed() {
        fadeTo(this.nucleus.material, 0.50, 600);
        fadeTo(this.energy.material,  0.12, 700);
        fadeTo(this.coronas[0].material, 0.10, 600);
    }

    assembleReactor() {
        fadeTo(this.nucleus.material, 1.0, 800);
        fadeTo(this.energy.material,  0.5, 800);
        this.coronas.forEach(c => fadeTo(c.material, c.userData.max, 900));
        fadeAll(this.sats.map(s => s.material), 0.55, 1200);
    }

    materializeRings() {
        this.rings.forEach((r, i) =>
            setTimeout(() => fadeTo(r.material, 0.75, 900), i * 280));
    }

    launchParticles() {
        this.pPhase = 'converging';
        fadeTo(this.particles.material, 0.50, 600);
    }

    enableLinks() { fadeTo(this.links.material, 0.22, 800); }
    enableArcs()  { this._arcsOn = true; }

    bloom() {
        this.bloom.strength = 2.2;
        this.coronas.forEach(c => fadeTo(c.material, c.userData.max * 1.8, 700));
    }

    // ── State machine ─────────────────────────────────────────────────────────
    setState(newState) {
        if (this.state === newState) return;
        this.state = newState;
        window.dispatchEvent(new CustomEvent(`vanta_${newState}`));

        const map = {
            idle:     { pOp: 0.45, lOp: 0.20, bl: 1.6, rm: 1.0 },
            thinking: { pOp: 0.75, lOp: 0.45, bl: 2.4, rm: 2.5 },
            speaking: { pOp: 0.60, lOp: 0.30, bl: 2.0, rm: 1.5 },
            learning: { pOp: 0.90, lOp: 0.60, bl: 2.8, rm: 1.8 },
            sleeping: { pOp: 0.10, lOp: 0.03, bl: 0.7, rm: 0.3 },
            error:    { pOp: 0.55, lOp: 0.25, bl: 2.0, rm: 3.0 },
        };
        this._sCfg = map[newState] ?? map.idle;

        fadeTo(this.particles.material, this._sCfg.pOp, 1000);
        fadeTo(this.links.material,     this._sCfg.lOp, 1000);
        this.bloom.strength = this._sCfg.bl;

        if (newState === 'error') {
            this.nucleus.material.color.set(0xff5500);
            this.energy.material.color.set(0xff2200);
            this.rings.forEach(r => r.material.color.set(0xff6600));
            setTimeout(() => {
                this.nucleus.material.color.set(WHITE);
                this.energy.material.color.set(0x00e8ff);
                this.rings.forEach(r => r.material.color.set(CYAN));
            }, 3000);
        }

        if (newState === 'learning') this._learningPulse();
    }

    _learningPulse() {
        // Scatter 600 particles back to edges for the incoming-stream effect
        for (let i = 0; i < 600; i++) {
            const idx = Math.floor(Math.random() * PARTICLE_COUNT);
            const θ   = Math.random() * Math.PI * 2;
            const r   = 11 + Math.random() * 5;
            this.pPos[idx*3]   = Math.cos(θ) * r;
            this.pPos[idx*3+1] = (Math.random() - 0.5) * 3;
            this.pPos[idx*3+2] = Math.sin(θ) * r;
        }
        if (this.pPhase === 'orbiting') this.pPhase = 'converging';
        setTimeout(() => { if (this.state === 'learning') this.pPhase = 'orbiting'; }, 4500);
    }

    // Drive speaking pulsation from mic amplitude (0–1)
    setSpeakAmplitude(amp) {
        if (this.state !== 'speaking') return;
        const s = 1 + amp * 0.55;
        this.nucleus.scale.setScalar(s);
        this.energy.scale.setScalar(s * 1.12);
        this.bloom.strength = 2.0 + amp * 1.8;
    }

    // ── Per-frame subsystems ─────────────────────────────────────────────────
    _updateParticles() {
        if (this.pPhase === 'edge') return;
        const p   = this.pPos;
        const rm  = this._sCfg?.rm ?? 1;

        if (this.pPhase === 'converging') {
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = p[i*3], y = p[i*3+1], z = p[i*3+2];
                const d = Math.sqrt(x*x + y*y + z*z);
                if (d > 1.3) {
                    // Gravity-like pull + spiral component
                    const spd  = Math.max(0.02, 0.75 / Math.max(d, 2)) * rm;
                    const spiral = 0.006;
                    p[i*3]   += (-x/d) * spd + (-y * spiral);
                    p[i*3+1] += (-y/d) * spd + ( x * spiral);
                    p[i*3+2] += (-z/d) * spd;
                } else {
                    this._orbitScatter(i);
                }
            }
            this.particles.geometry.attributes.position.needsUpdate = true;

        } else if (this.pPhase === 'orbiting') {
            const orb = 0.003 * rm;
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = p[i*3], y = p[i*3+1], z = p[i*3+2];
                const d2 = x*x + y*y + z*z;
                p[i*3]   += (-y * orb - x * 0.0008);
                p[i*3+1] += ( x * orb - y * 0.0008);
                p[i*3+2] += Math.sin(this.time + i * 0.001) * 0.0014;
                if (d2 < 0.81)  this._orbitScatter(i);
                if (d2 > 30.25) { p[i*3]*=0.97; p[i*3+1]*=0.97; p[i*3+2]*=0.97; }
            }
            this.particles.geometry.attributes.position.needsUpdate = true;
        }
    }

    _updateLinks() {
        if (this.links.material.opacity < 0.01) return;
        const p = this.pPos, lp = this.linkPos;
        const R2   = 6.25;  // 2.5²
        const STEP = 20;
        const MAX  = 250;
        let   cnt  = 0;

        outer:
        for (let i = 0; i < PARTICLE_COUNT; i += STEP) {
            for (let j = i + STEP; j < PARTICLE_COUNT; j += STEP) {
                const dx = p[i*3]-p[j*3], dy = p[i*3+1]-p[j*3+1], dz = p[i*3+2]-p[j*3+2];
                if (dx*dx + dy*dy + dz*dz < R2 && Math.random() > 0.62) {
                    lp[cnt*6]   = p[i*3];   lp[cnt*6+1] = p[i*3+1]; lp[cnt*6+2] = p[i*3+2];
                    lp[cnt*6+3] = p[j*3];   lp[cnt*6+4] = p[j*3+1]; lp[cnt*6+5] = p[j*3+2];
                    if (++cnt >= MAX) break outer;
                }
            }
        }
        lp.fill(0, cnt * 6);
        this.links.geometry.attributes.position.needsUpdate = true;
    }

    _updateArcs() {
        if (!this._arcsOn) return;
        const p = this.pPos, rm = this._sCfg?.rm ?? 1;

        this.arcs.forEach(arc => {
            arc.life -= 0.016;

            if (arc.life <= 0) {
                arc.line.material.opacity = 0;
                // Spawn probability increases with ring-speed multiplier
                if (Math.random() > (0.78 - rm * 0.05)) {
                    const ai = Math.floor(Math.random() * PARTICLE_COUNT);
                    const bi = Math.floor(Math.random() * PARTICLE_COUNT);
                    const ax = p[ai*3], ay = p[ai*3+1], az = p[ai*3+2];
                    const bx = p[bi*3], by = p[bi*3+1], bz = p[bi*3+2];
                    const dx = bx-ax, dy = by-ay, dz = bz-az;
                    const d  = Math.sqrt(dx*dx + dy*dy + dz*dz);

                    if (d < 2.8 && d > 0.4) {
                        const SEGS = 9, pts = arc.pts;
                        for (let k = 0; k <= SEGS; k++) {
                            const t      = k / SEGS;
                            const jitter = Math.sin(t * Math.PI) * 0.18;
                            pts[k*3]   = ax + dx*t + (Math.random()-0.5)*jitter;
                            pts[k*3+1] = ay + dy*t + (Math.random()-0.5)*jitter;
                            pts[k*3+2] = az + dz*t + (Math.random()-0.5)*jitter;
                        }
                        arc.line.geometry.attributes.position.needsUpdate = true;
                        arc.line.material.opacity = 0.30 + Math.random() * 0.35;
                        arc.life    = 0.08 + Math.random() * 0.24;
                        arc.maxLife = arc.life;
                    }
                }
            } else {
                arc.line.material.opacity = (arc.life / arc.maxLife) * 0.65;
            }
        });
    }

    _updateSatellites() {
        const rm = this._sCfg?.rm ?? 1;
        this.sats.forEach(s => {
            s.userData.angle += s.userData.spd * rm;
            const { angle, r, inc } = s.userData;
            s.position.set(
                Math.cos(angle) * r,
                Math.sin(angle) * r * Math.sin(inc),
                Math.sin(angle) * r * Math.cos(inc)
            );
        });
    }

    // ── Main animation loop ───────────────────────────────────────────────────
    _startLoop() {
        const loop = () => {
            this.raf  = requestAnimationFrame(loop);
            this.time += 0.016;

            const rm    = this._sCfg?.rm ?? 1;
            const sleepy = this.state === 'sleeping';
            const breath = 1 + Math.sin(this.time * (sleepy ? 0.4 : 0.9)) * 0.07;

            // Nucleus / energy breathing
            this.nucleus.scale.setScalar(breath);
            this.energy.scale.setScalar(breath * 1.10);
            this.coronas[0].scale.setScalar(breath);

            // Ring rotation
            this.rings.forEach(r => { r.rotation.y += r.userData.spd * rm; });

            // Subsystems
            this._updateParticles();
            this._updateSatellites();
            // Links + arcs every 3rd frame
            if (Math.round(this.time * 60) % 3 === 0) this._updateLinks();
            this._updateArcs();

            this.composer.render();
        };
        loop();
    }

    destroy() {
        if (this.raf) cancelAnimationFrame(this.raf);
        this.renderer.dispose();
    }

    onResize(w, h) {
        this.W = w; this.H = h;
        this.renderer.setSize(w, h, false);
        this.composer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// ██  BOOT SEQUENCE
// ─────────────────────────────────────────────────────────────────────────────
const bootOverlay  = document.getElementById('bootOverlay');
const bootCanvas   = document.getElementById('bootCanvas');
const initText     = document.getElementById('initText');
const greetingText = document.getElementById('greetingText');
const diagnostics  = document.getElementById('diagnostics');
const energyWave   = document.getElementById('energyWave');

// Size boot canvas to full window
bootCanvas.width  = window.innerWidth;
bootCanvas.height = window.innerHeight;

const bootReactor = new QuantumReactor(bootCanvas);

const BOOT_TIMELINE = [
    [  500, () => bootReactor.showSeed()          ],
    [ 1000, () => bootReactor.growSeed()          ],
    [ 2000, () => bootReactor.assembleReactor()   ],
    [ 2500, () => bootReactor.materializeRings()  ],
    [ 3000, () => bootReactor.launchParticles()   ],
    [ 3500, () => bootReactor.enableLinks()       ],
    [ 4000, () => bootReactor.enableArcs()        ],
    [ 4500, () => initText.classList.add('show')  ],
    [ 5000, () => { diagnostics.classList.add('show'); runDiagBars(); } ],
    [ 6500, () => { greetingText.textContent = timeGreeting(); greetingText.classList.add('show'); } ],
    [ 7000, () => bootReactor.bloom()             ],
    [ 7500, () => energyWave.classList.add('expand') ],
    [ 8200, () => transitionToDashboard()         ],
];

BOOT_TIMELINE.forEach(([t, fn]) => setTimeout(fn, t));

function runDiagBars() {
    document.querySelectorAll('.diag-fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('run'), i * 220);
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// ██  DASHBOARD TRANSITION
// ─────────────────────────────────────────────────────────────────────────────
function transitionToDashboard() {
    // Fade out boot overlay
    bootOverlay.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)';
    bootOverlay.style.opacity = '0';

    // Slide in UI chrome
    const topbar      = document.getElementById('topbar');
    const bottomPanel = document.getElementById('bottomPanel');
    const core        = document.getElementById('coreContainer');

    topbar.classList.add('slide-in');
    setTimeout(() => bottomPanel.classList.add('slide-in'), 160);
    setTimeout(() => core.classList.add('show'), 420);

    // Init the dashboard reactor
    setTimeout(() => {
        const dashCanvas = document.getElementById('reactorCanvas');
        // Size to container
        const rect = dashCanvas.parentElement.getBoundingClientRect();
        dashCanvas.width  = rect.width  || 500;
        dashCanvas.height = rect.height || 500;

        dashReactor = new QuantumReactor(dashCanvas);
        // Assemble instantly — it's already "running" when dashboard appears
        dashReactor.assembleReactor();
        dashReactor.materializeRings();
        setTimeout(() => {
            dashReactor.pPhase = 'orbiting';
            dashReactor.particles.material.opacity = 0.45;
            dashReactor.enableLinks();
            dashReactor.enableArcs();
            dashReactor.setState('idle');
        }, 400);
    }, 500);

    // Destroy boot reactor after transition
    setTimeout(() => {
        bootReactor.destroy();
        bootOverlay.remove();
    }, 1600);
}

window.addEventListener('resize', () => {
    bootCanvas.width  = window.innerWidth;
    bootCanvas.height = window.innerHeight;
    bootReactor.onResize(window.innerWidth, window.innerHeight);

    if (dashReactor) {
        const rect = document.getElementById('reactorCanvas').parentElement.getBoundingClientRect();
        dashReactor.onResize(rect.width, rect.height);
    }
});


// ─────────────────────────────────────────────────────────────────────────────
// ██  SOCKET.IO
// ─────────────────────────────────────────────────────────────────────────────
const socket = io();

const statusDot    = document.getElementById('statusDot');
const statusLabel  = document.getElementById('statusLabel');
const coreLabel    = document.getElementById('coreStateLabel');
const dashAgent    = document.getElementById('dashAgent');
const dashWorkspace= document.getElementById('dashWorkspace');
const dashWeb      = document.getElementById('dashWeb');
const dashLog      = document.getElementById('dashLog');

const STATE_LABELS = {
    idle: 'IDLE', thinking: 'THINKING', speaking: 'SPEAKING',
    learning: 'LEARNING', sleeping: 'SLEEPING', error: 'ERROR',
};

socket.on('status', ({ state, message, model }) => {
    const label = STATE_LABELS[state] || state.toUpperCase();
    if (statusLabel)  statusLabel.textContent  = label;
    if (coreLabel)    coreLabel.textContent     = label;
    if (dashAgent)    dashAgent.textContent     = label;
    if (statusDot)    statusDot.className = `status-dot ${state}`;
    if (model && document.getElementById('dashModel'))
        document.getElementById('dashModel').textContent = model;

    if (dashReactor) dashReactor.setState(state);

    if (message && dashLog) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = `▸ ${message}`;
        dashLog.prepend(entry);
        if (dashLog.children.length > 20) dashLog.lastChild.remove();
    }
});

socket.on('workspace', ({ path }) => {
    if (dashWorkspace) dashWorkspace.textContent = path.split(/[\\/]/).pop() || path;
    const wl = document.getElementById('workspaceLabel');
    if (wl) wl.textContent = path.split(/[\\/]/).pop() || path;
});

socket.on('response', ({ text, html, model }) => {
    appendMsg('vanta', html || text, model);
    if (dashReactor) dashReactor.setState('idle');
});

socket.on('stream_chunk', ({ chunk }) => {
    appendStreamChunk(chunk);
});

socket.on('stream_done', ({ model }) => {
    // Finalise the streaming bubble — remove the blinking cursor class
    const streaming = chatMessages.querySelector('.msg.streaming');
    if (streaming) streaming.classList.remove('streaming');
    streamTarget = null;
    if (dashReactor) dashReactor.setState('idle');
});

// Thought process — Vanta's reasoning pass, shown in a collapsible panel
// above the answer. Off by default, toggled via the 🧠 THINK button.
socket.on('thinking_start', () => {
    startThoughtPanel();
});

socket.on('thinking_chunk', ({ chunk }) => {
    appendThoughtChunk(chunk);
});

socket.on('thinking_done', () => {
    finalizeThoughtPanel();
});

// Orchestration events
socket.on('orchestration_update', ({ step, model, status, result }) => {
    const panel  = document.getElementById('orchestrationPanel');
    const log    = document.getElementById('orchLog');
    if (!panel || !log) return;
    panel.style.display = 'block';
    const entry = document.createElement('div');
    entry.className = `orch-entry ${status}`;
    entry.innerHTML = `<span class="orch-model">${model}</span> <span class="orch-step">${step}</span> <span class="orch-status">${status}</span>`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
});

socket.on('orchestration_done', ({ merged }) => {
    appendMsg('vanta', merged, 'Multi-Model');
    const panel = document.getElementById('orchestrationPanel');
    if (panel) setTimeout(() => panel.style.display = 'none', 4000);
    if (dashReactor) dashReactor.setState('idle');
});

socket.on('google_context', () => {
    // Silent — retrieval is invisible to the user by design
});

socket.on('error', ({ message }) => {
    appendMsg('vanta', `⚠ ${message}`, null, true);
    if (dashReactor) dashReactor.setState('error');
});


// ─────────────────────────────────────────────────────────────────────────────
// ██  CHAT UI
// ─────────────────────────────────────────────────────────────────────────────
const chatMessages = document.getElementById('chatMessages');
const chatInput    = document.getElementById('chatInput');
const sendBtn      = document.getElementById('sendBtn');
let   streamTarget = null;

function appendMsg(role, content, model, isError = false) {
    streamTarget = null;
    const wrap = document.createElement('div');
    wrap.className = `msg ${role}${isError ? ' error' : ''}`;
    if (role === 'vanta') {
        const label = document.createElement('span');
        label.className = 'msg-label';
        label.textContent = model ? `VANTA (${model})` : 'VANTA';
        wrap.appendChild(label);
    }
    const body = document.createElement('div');
    body.className = 'msg-body';
    body.innerHTML = content;
    wrap.appendChild(body);
    chatMessages.appendChild(wrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendStreamChunk(chunk) {
    if (!streamTarget) {
        const wrap = document.createElement('div');
        wrap.className = 'msg vanta streaming';
        // No model label during streaming — appears naturally, feels native
        const body = document.createElement('div');
        body.className = 'msg-body';
        wrap.appendChild(body);
        chatMessages.appendChild(wrap);
        streamTarget = body;
    }
    // Append as text to avoid XSS from raw HTML concatenation
    streamTarget.textContent += chunk;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ── Thought process panel ───────────────────────────────────────────────────
// Minimal styling on purpose — this gets reskinned when the new UI lands.
// Structure/behavior is the part that matters right now.
let thoughtWrap   = null;
let thoughtBody   = null;
let thoughtTimer  = null;

function startThoughtPanel() {
    thoughtWrap = document.createElement('div');
    thoughtWrap.className = 'thought-panel';
    thoughtWrap.innerHTML =
        '<button class="thought-toggle" type="button">' +
            '<span class="thought-chevron">▸</span>' +
            '<span class="thought-label">Thinking…</span>' +
            '<span class="thought-timer">0.0s</span>' +
        '</button>' +
        '<div class="thought-body"></div>';
    chatMessages.appendChild(thoughtWrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    thoughtBody = thoughtWrap.querySelector('.thought-body');
    const toggle  = thoughtWrap.querySelector('.thought-toggle');
    const chevron = thoughtWrap.querySelector('.thought-chevron');

    toggle.addEventListener('click', () => {
        thoughtWrap.classList.toggle('open');
        chevron.textContent = thoughtWrap.classList.contains('open') ? '▾' : '▸';
    });
    // Open by default while streaming so you can watch it happen
    thoughtWrap.classList.add('open');
    chevron.textContent = '▾';

    const t0 = performance.now();
    thoughtTimer = setInterval(() => {
        const el = thoughtWrap.querySelector('.thought-timer');
        if (el) el.textContent = ((performance.now() - t0) / 1000).toFixed(1) + 's';
    }, 100);
}

function appendThoughtChunk(chunk) {
    if (!thoughtBody) startThoughtPanel();
    thoughtBody.textContent += chunk;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function finalizeThoughtPanel() {
    if (thoughtWrap) {
        clearInterval(thoughtTimer);
        thoughtWrap.classList.add('done');
        thoughtWrap.classList.remove('open');
        const chevron = thoughtWrap.querySelector('.thought-chevron');
        if (chevron) chevron.textContent = '▸';
        const label = thoughtWrap.querySelector('.thought-label');
        if (label) label.textContent = 'Thought process';
    }
    thoughtWrap  = null;
    thoughtBody  = null;
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMsg('user', text);
    chatInput.value = '';

    if (orchestrateMode) {
        socket.emit('orchestrate', { message: text });
        if (dashReactor) dashReactor.setState('thinking');
        const panel = document.getElementById('orchestrationPanel');
        if (panel) { panel.style.display = 'block'; document.getElementById('orchLog').innerHTML = ''; }
    } else {
        socket.emit('chat', { message: text, think: thinkMode });
        if (dashReactor) dashReactor.setState('thinking');
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) sendMessage(); });

// Orchestrate button toggle
const orchestrateBtn = document.getElementById('orchestrateBtn');
orchestrateBtn?.addEventListener('click', () => {
    orchestrateMode = !orchestrateMode;
    orchestrateBtn.classList.toggle('active', orchestrateMode);
    orchestrateBtn.textContent = orchestrateMode ? '⚡ ORCHESTRATING' : '⚡ ORCHESTRATE';
});

// Think button toggle
const thinkBtn = document.getElementById('thinkBtn');
thinkBtn?.addEventListener('click', () => {
    thinkMode = !thinkMode;
    thinkBtn.classList.toggle('active', thinkMode);
});


// ─────────────────────────────────────────────────────────────────────────────
// ██  MODE TOGGLE
// ─────────────────────────────────────────────────────────────────────────────
const btnTyping = document.getElementById('btnTyping');
const btnVoice  = document.getElementById('btnVoice');
const pttCont   = document.getElementById('pttContainer');
const inputRow  = document.querySelector('.chat-input-row');
const voiceDash = document.getElementById('voiceDashboard');

btnTyping?.addEventListener('click', () => {
    currentMode = 'typing';
    btnTyping.classList.add('active'); btnVoice.classList.remove('active');
    if (pttCont)  pttCont.style.display  = 'none';
    if (inputRow) inputRow.style.display = 'flex';
    if (voiceDash) voiceDash.classList.remove('active');
});

btnVoice?.addEventListener('click', () => {
    currentMode = 'voice';
    btnVoice.classList.add('active'); btnTyping.classList.remove('active');
    if (pttCont)  pttCont.style.display  = 'flex';
    if (inputRow) inputRow.style.display = 'none';
    if (voiceDash) voiceDash.classList.add('active');
});


// ─────────────────────────────────────────────────────────────────────────────
// ██  PUSH-TO-TALK (fixed — uses /transcribe endpoint)
// ─────────────────────────────────────────────────────────────────────────────
const pttBtn = document.getElementById('pttBtn');
let mediaRecorder = null;
let audioChunks   = [];
let analyser      = null;
let micStream     = null;
let speakAnim     = null;

async function startRecording() {
    try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
        appendMsg('vanta', '⚠ Microphone permission denied.', null, true);
        return;
    }

    // Set up analyser for speaking amplitude
    const ctx = new AudioContext();
    const src = ctx.createMediaStreamSource(micStream);
    analyser  = ctx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    const buf = new Uint8Array(analyser.frequencyBinCount);

    speakAnim = setInterval(() => {
        analyser.getByteFrequencyData(buf);
        const avg = buf.reduce((a, b) => a + b, 0) / buf.length / 255;
        if (dashReactor) dashReactor.setSpeakAmplitude(avg);
    }, 50);

    audioChunks   = [];
    mediaRecorder = new MediaRecorder(micStream);
    mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
    mediaRecorder.start();

    pttBtn.classList.add('recording');
    document.querySelector('.ptt-text').textContent = 'RECORDING...';
    if (dashReactor) dashReactor.setState('speaking');
}

async function stopRecording() {
    if (!mediaRecorder || mediaRecorder.state === 'inactive') return;

    clearInterval(speakAnim);
    if (dashReactor) dashReactor.setSpeakAmplitude(0);

    mediaRecorder.stop();
    micStream.getTracks().forEach(t => t.stop());
    pttBtn.classList.remove('recording');
    document.querySelector('.ptt-text').textContent = 'HOLD TO SPEAK';
    if (dashReactor) dashReactor.setState('thinking');

    await new Promise(res => mediaRecorder.addEventListener('stop', res, { once: true }));

    const blob    = new Blob(audioChunks, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', blob, 'recording.webm');

    try {
        const res  = await fetch('/transcribe', { method: 'POST', body: formData });
        const data = await res.json();
        const text = data.text?.trim();
        if (text) {
            appendMsg('user', text);
            socket.emit('chat', { message: text });
        } else {
            appendMsg('vanta', '⚠ No speech detected.', null, true);
            if (dashReactor) dashReactor.setState('idle');
        }
    } catch {
        appendMsg('vanta', '⚠ Transcription failed.', null, true);
        if (dashReactor) dashReactor.setState('error');
    }
}

pttBtn?.addEventListener('pointerdown', startRecording);
pttBtn?.addEventListener('pointerup',   stopRecording);
pttBtn?.addEventListener('pointerleave', stopRecording);
