# VANTA UI (React + TypeScript)

The built app lives in `ui/dist` and is served by Flask at `/` (the old interface is still at `/classic`).
You only need Node if you want to change the UI:

    cd ui
    npm install
    npm run dev      # hot reload on :3000, talks to Flask on :5000
    npm run build    # rebuilds ui/dist (commit it so VANTA works without Node)
    npm test         # layout, sanitizer, state tests

Stage payloads (what VANTA puts on the stage) are described in `src/types.ts`; everything arriving on the stage
is re-validated by `src/stage/sanitize.ts`, and free-form SVG/HTML runs in a locked iframe with no scripts.
