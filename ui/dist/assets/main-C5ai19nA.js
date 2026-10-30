var Rp=Object.defineProperty;var Cp=(n,e,t)=>e in n?Rp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var _t=(n,e,t)=>Cp(n,typeof e!="symbol"?e+"":e,t);import{r as W,j as m,c as Pp,R as Lp}from"./styles-DhCaa1vk.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="169",Dp=0,yc=1,Np=2,Jh=1,Ip=2,vn=3,Gn=0,Pt=1,_n=2,zn=0,zi=1,aa=2,Sc=3,Mc=4,Up=5,ci=100,Fp=101,Op=102,Bp=103,kp=104,Vp=200,zp=201,Hp=202,Gp=203,la=204,ca=205,jp=206,Wp=207,Xp=208,qp=209,$p=210,Yp=211,Kp=212,Zp=213,Jp=214,ua=0,ha=1,da=2,ji=3,fa=4,pa=5,ma=6,ga=7,Qh=0,Qp=1,em=2,Hn=0,tm=1,nm=2,im=3,sm=4,rm=5,om=6,am=7,ed=300,Wi=301,Xi=302,va=303,_a=304,Wr=306,xa=1e3,hi=1001,ya=1002,Xt=1003,lm=1004,Os=1005,en=1006,lo=1007,di=1008,Rn=1009,td=1010,nd=1011,Ss=1012,vl=1013,gi=1014,yn=1015,As=1016,_l=1017,xl=1018,qi=1020,id=35902,sd=1021,rd=1022,nn=1023,od=1024,ad=1025,Hi=1026,$i=1027,ld=1028,yl=1029,cd=1030,Sl=1031,Ml=1033,_r=33776,xr=33777,yr=33778,Sr=33779,Sa=35840,Ma=35841,Ea=35842,ba=35843,Ta=36196,Aa=37492,wa=37496,Ra=37808,Ca=37809,Pa=37810,La=37811,Da=37812,Na=37813,Ia=37814,Ua=37815,Fa=37816,Oa=37817,Ba=37818,ka=37819,Va=37820,za=37821,Mr=36492,Ha=36494,Ga=36495,ud=36283,ja=36284,Wa=36285,Xa=36286,cm=3200,um=3201,hm=0,dm=1,Vn="",sn="srgb",qn="srgb-linear",El="display-p3",Xr="display-p3-linear",Nr="linear",nt="srgb",Ir="rec709",Ur="p3",yi=7680,Ec=519,fm=512,pm=513,mm=514,hd=515,gm=516,vm=517,_m=518,xm=519,bc=35044,Tc="300 es",Sn=2e3,Fr=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,qa=180/Math.PI;function ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function ym(n,e){return(n%e+e)%e}function uo(n,e,t){return(1-t)*n+t*e}function is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,s,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],g=i[5],_=i[8],y=s[0],f=s[3],p=s[6],b=s[1],v=s[4],T=s[7],D=s[2],R=s[5],w=s[8];return r[0]=o*y+a*b+l*D,r[3]=o*f+a*v+l*R,r[6]=o*p+a*T+l*w,r[1]=c*y+u*b+h*D,r[4]=c*f+u*v+h*R,r[7]=c*p+u*T+h*w,r[2]=d*y+g*b+_*D,r[5]=d*f+g*v+_*R,r[8]=d*p+g*T+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,g=c*r-o*l,_=t*h+i*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=g*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new Ne;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sm(){const n=Or("canvas");return n.style.display="block",n}const Ac={};function Er(n){n in Ac||(Ac[n]=!0,console.warn(n))}function Mm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Em(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wc=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rc=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[qn]:{transfer:Nr,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sn]:{transfer:nt,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xr]:{transfer:Nr,primaries:Ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(wc)},[El]:{transfer:nt,primaries:Ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(wc).convertLinearToSRGB()}},Tm=new Set([qn,Xr]),Xe={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Tm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ss[e].toReference,s=ss[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ss[n].primaries},getTransfer:function(n){return n===Vn?Nr:ss[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ss[e].luminanceCoefficients)}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class Am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Or("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wm=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(po(s[o].image)):r.push(po(s[o]))}else r=po(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Am.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Lt extends Qi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=hi,s=hi,r=en,o=di,a=nn,l=Rn,c=Lt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ws(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ed;Lt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],_=l[9],y=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+f)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(g+1)/2,D=(p+1)/2,R=(u+d)/4,w=(h+y)/4,P=(_+f)/4;return v>T&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=w/i):T>D?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=P/r),this.set(i,s,r,t),this}let b=Math.sqrt((f-_)*(f-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-_)/b,this.y=(h-y)/b,this.z=(d-u)/b,this.w=Math.acos((c+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==d||c!==g||u!==_){let f=1-a;const p=l*d+c*g+u*_+h*y,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const D=Math.sqrt(v),R=Math.atan2(D,p*b);f=Math.sin(f*R)/D,a=Math.sin(a*R)/D}const T=a*b;if(l=l*f+d*T,c=c*f+g*T,u=u*f+_*T,h=h*f+y*T,f===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],g=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*g-c*d,e[t+1]=l*_+u*d+c*h-a*g,e[t+2]=c*_+u*g+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h-d*g*_;break;case"YXZ":this._x=d*u*h+c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h+d*g*_;break;case"ZXY":this._x=d*u*h-c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h-d*g*_;break;case"ZYX":this._x=d*u*h-c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h+d*g*_;break;case"YZX":this._x=d*u*h+c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h-d*g*_;break;case"XZY":this._x=d*u*h-c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new G,Cc=new Rs;class Cs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(r,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bs.copy(i.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),ks.subVectors(this.max,rs),Mi.subVectors(e.a,rs),Ei.subVectors(e.b,rs),bi.subVectors(e.c,rs),Nn.subVectors(Ei,Mi),In.subVectors(bi,Ei),Zn.subVectors(Mi,bi);let t=[0,-Nn.z,Nn.y,0,-In.z,In.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,In.z,0,-In.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-In.y,In.x,0,-Zn.y,Zn.x,0];return!go(t,Mi,Ei,bi,ks)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Mi,Ei,bi,ks))?!1:(Vs.crossVectors(Nn,In),t=[Vs.x,Vs.y,Vs.z],go(t,Mi,Ei,bi,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new G,new G,new G,new G,new G,new G,new G,new G],Yt=new G,Bs=new Cs,Mi=new G,Ei=new G,bi=new G,Nn=new G,In=new G,Zn=new G,rs=new G,ks=new G,Vs=new G,Jn=new G;function go(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Jn.fromArray(n,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lm=new Cs,os=new G,vo=new G;let qr=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(vo)),this.expandByPoint(os.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const fn=new G,_o=new G,zs=new G,Un=new G,xo=new G,Hs=new G,yo=new G;class md{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_o.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=Un.dot(this.direction),l=-Un.dot(zs),c=Un.lengthSq(),u=Math.abs(1-o*o);let h,d,g,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const y=1/u;h*=y,d*=y,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_o).addScaledVector(zs,d),g}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),s=fn.dot(fn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,s,r){xo.subVectors(t,e),Hs.subVectors(i,e),yo.crossVectors(xo,Hs);let o=this.direction.dot(yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(Hs.crossVectors(Un,Hs));if(l<0)return null;const c=a*this.direction.dot(xo.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(yo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,h,d,g,_,y,f){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,g,_,y,f)}set(e,t,i,s,r,o,a,l,c,u,h,d,g,_,y,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=g,p[7]=_,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,g=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+_*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,g=l*h,_=c*u,y=c*h;t[0]=d+y*a,t[4]=_*a-g,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-_,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,g=l*h,_=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,g=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=_*c-g,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=g*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=_*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*h+_,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,g=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=g*h-_,t[2]=_*h-g,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Nm)}lookAt(e,t,i){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Fn.crossVectors(i,Ft),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Fn.crossVectors(i,Ft)),Fn.normalize(),Gs.crossVectors(Ft,Fn),s[0]=Fn.x,s[4]=Gs.x,s[8]=Ft.x,s[1]=Fn.y,s[5]=Gs.y,s[9]=Ft.y,s[2]=Fn.z,s[6]=Gs.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],g=i[13],_=i[2],y=i[6],f=i[10],p=i[14],b=i[3],v=i[7],T=i[11],D=i[15],R=s[0],w=s[4],P=s[8],Y=s[12],x=s[1],E=s[5],I=s[9],F=s[13],B=s[2],Z=s[6],O=s[10],K=s[14],H=s[3],se=s[7],J=s[11],ce=s[15];return r[0]=o*R+a*x+l*B+c*H,r[4]=o*w+a*E+l*Z+c*se,r[8]=o*P+a*I+l*O+c*J,r[12]=o*Y+a*F+l*K+c*ce,r[1]=u*R+h*x+d*B+g*H,r[5]=u*w+h*E+d*Z+g*se,r[9]=u*P+h*I+d*O+g*J,r[13]=u*Y+h*F+d*K+g*ce,r[2]=_*R+y*x+f*B+p*H,r[6]=_*w+y*E+f*Z+p*se,r[10]=_*P+y*I+f*O+p*J,r[14]=_*Y+y*F+f*K+p*ce,r[3]=b*R+v*x+T*B+D*H,r[7]=b*w+v*E+T*Z+D*se,r[11]=b*P+v*I+T*O+D*J,r[15]=b*Y+v*F+T*K+D*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],_=e[3],y=e[7],f=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*g-i*l*g)+y*(+t*l*g-t*c*d+r*o*d-s*o*g+s*c*u-r*l*u)+f*(+t*c*h-t*a*g-r*o*h+i*o*g+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],_=e[12],y=e[13],f=e[14],p=e[15],b=h*f*c-y*d*c+y*l*g-a*f*g-h*l*p+a*d*p,v=_*d*c-u*f*c-_*l*g+o*f*g+u*l*p-o*d*p,T=u*y*c-_*h*c+_*a*g-o*y*g-u*a*p+o*h*p,D=_*h*l-u*y*l-_*a*d+o*y*d+u*a*f-o*h*f,R=t*b+i*v+s*T+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(y*d*r-h*f*r-y*s*g+i*f*g+h*s*p-i*d*p)*w,e[2]=(a*f*r-y*l*r+y*s*c-i*f*c-a*s*p+i*l*p)*w,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*g-i*l*g)*w,e[4]=v*w,e[5]=(u*f*r-_*d*r+_*s*g-t*f*g-u*s*p+t*d*p)*w,e[6]=(_*l*r-o*f*r-_*s*c+t*f*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*g+t*l*g)*w,e[8]=T*w,e[9]=(_*h*r-u*y*r-_*i*g+t*y*g+u*i*p-t*h*p)*w,e[10]=(o*y*r-_*a*r+_*i*c-t*y*c-o*i*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*g-t*a*g)*w,e[12]=D*w,e[13]=(u*y*s-_*h*s+_*i*d-t*y*d-u*i*f+t*h*f)*w,e[14]=(_*a*s-o*y*s-_*i*l+t*y*l+o*i*f-t*a*f)*w,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,g=r*u,_=r*h,y=o*u,f=o*h,p=a*h,b=l*c,v=l*u,T=l*h,D=i.x,R=i.y,w=i.z;return s[0]=(1-(y+p))*D,s[1]=(g+T)*D,s[2]=(_-v)*D,s[3]=0,s[4]=(g-T)*R,s[5]=(1-(d+p))*R,s[6]=(f+b)*R,s[7]=0,s[8]=(_+v)*w,s[9]=(f-b)*w,s[10]=(1-(d+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,u=1/o,h=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Sn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Sn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,g=(i+s)*u;let _,y;if(a===Sn)_=(o+r)*h,y=-2*h;else if(a===Fr)_=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new G,Kt=new ct,Dm=new G(0,0,0),Nm=new G(1,1,1),Fn=new G,Gs=new G,Ft=new G,Pc=new ct,Lc=new Rs;class Cn{constructor(e=0,t=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Im=0;const Dc=new G,Ai=new Rs,pn=new ct,js=new G,as=new G,Um=new G,Fm=new Rs,Nc=new G(1,0,0),Ic=new G(0,1,0),Uc=new G(0,0,1),Fc={type:"added"},Om={type:"removed"},wi={type:"childadded",child:null},So={type:"childremoved",child:null};class Dt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new G,t=new Cn,i=new Rs,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ne}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?js.copy(e):js.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(as,js,this.up):pn.lookAt(js,as,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(pn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new G(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new G,mn=new G,Mo=new G,gn=new G,Ri=new G,Ci=new G,Oc=new G,Eo=new G,bo=new G,To=new G,Ao=new at,wo=new at,Ro=new at;class tn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zt.subVectors(s,t),mn.subVectors(i,t),Mo.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(mn),l=Zt.dot(Mo),c=mn.dot(mn),u=mn.dot(Mo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-g-_,_,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ao.setScalar(0),wo.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,i),Ro.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ao,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(e,t,i,s){return Zt.subVectors(i,t),mn.subVectors(e,t),Zt.cross(mn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Zt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ri.subVectors(s,i),Ci.subVectors(r,i),Eo.subVectors(e,i);const l=Ri.dot(Eo),c=Ci.dot(Eo);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,s);const u=Ri.dot(bo),h=Ci.dot(bo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ri,o);To.subVectors(e,r);const g=Ri.dot(To),_=Ci.dot(To);if(_>=0&&g<=_)return t.copy(r);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ci,a);const f=u*_-g*h;if(f<=0&&h-u>=0&&g-_>=0)return Oc.subVectors(r,s),a=(h-u)/(h-u+(g-_)),t.copy(s).addScaledVector(Oc,a);const p=1/(f+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=ym(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Co(o,r,e+1/3),this.g=Co(o,r,e),this.b=Co(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Xe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ct(yt.r*255,0,255))*65536+Math.round(Ct(yt.g*255,0,255))*256+Math.round(Ct(yt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,s=yt.g,r=yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=sn){Xe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,s=yt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Ws);const i=uo(On.h,Ws.h,t),s=uo(On.s,Ws.s,t),r=uo(On.l,Ws.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new qe;qe.NAMES=vd;let Bm=0;class Ps extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=zi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _d extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new G,Xs=new Je;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}}class xd extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yd extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let km=0;const Vt=new ct,Po=new Dt,Pi=new G,Ot=new Cs,ls=new Cs,mt=new G;class Ln extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?yd:xd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ot.min,ls.min),Ot.expandByPoint(mt),mt.addVectors(Ot.max,ls.max),Ot.expandByPoint(mt)):(Ot.expandByPoint(ls.min),Ot.expandByPoint(ls.max))}Ot.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),mt.add(Pi)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new G,l[P]=new G;const c=new G,u=new G,h=new G,d=new Je,g=new Je,_=new Je,y=new G,f=new G;function p(P,Y,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,Y),h.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,x),u.sub(c),h.sub(c),g.sub(d),_.sub(d);const E=1/(g.x*_.y-_.x*g.y);isFinite(E)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(E),f.copy(h).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(E),a[P].add(y),a[Y].add(y),a[x].add(y),l[P].add(f),l[Y].add(f),l[x].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,Y=b.length;P<Y;++P){const x=b[P],E=x.start,I=x.count;for(let F=E,B=E+I;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new G,T=new G,D=new G,R=new G;function w(P){D.fromBufferAttribute(s,P),R.copy(D);const Y=a[P];v.copy(Y),v.sub(D.multiplyScalar(D.dot(Y))).normalize(),T.crossVectors(R,Y);const E=T.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,Y=b.length;P<Y;++P){const x=b[P],E=x.start,I=x.count;for(let F=E,B=E+I;F<B;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,_=0;for(let y=0,f=l.length;y<f;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*u;for(let p=0;p<u;p++)d[_++]=c[g++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new ct,Qn=new md,qs=new qr,kc=new G,$s=new G,Ys=new G,Ks=new G,Lo=new G,Zs=new G,Vc=new G,Js=new G;class Mn extends Dt{constructor(e=new Ln,t=new _d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Lo.fromBufferAttribute(h,e),o?Zs.addScaledVector(Lo,u):Zs.addScaledVector(Lo.sub(t),u))}t.add(Zs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(qs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(qs,kc)===null||Qn.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const f=d[_],p=o[f.materialIndex],b=Math.max(f.start,g.start),v=Math.min(a.count,Math.min(f.start+f.count,g.start+g.count));for(let T=b,D=v;T<D;T+=3){const R=a.getX(T),w=a.getX(T+1),P=a.getX(T+2);s=Qs(this,p,e,i,c,u,h,R,w,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let f=_,p=y;f<p;f+=3){const b=a.getX(f),v=a.getX(f+1),T=a.getX(f+2);s=Qs(this,o,e,i,c,u,h,b,v,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const f=d[_],p=o[f.materialIndex],b=Math.max(f.start,g.start),v=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let T=b,D=v;T<D;T+=3){const R=T,w=T+1,P=T+2;s=Qs(this,p,e,i,c,u,h,R,w,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let f=_,p=y;f<p;f+=3){const b=f,v=f+1,T=f+2;s=Qs(this,o,e,i,c,u,h,b,v,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Vm(n,e,t,i,s,r,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:n}}function Qs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,$s),n.getVertexPosition(l,Ys),n.getVertexPosition(c,Ks);const u=Vm(n,e,t,i,$s,Ys,Ks,Vc);if(u){const h=new G;tn.getBarycoord(Vc,$s,Ys,Ks,h),s&&(u.uv=tn.getInterpolatedAttribute(s,a,l,c,h,new Je)),r&&(u.uv1=tn.getInterpolatedAttribute(r,a,l,c,h,new Je)),o&&(u.normal=tn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};tn.getNormal($s,Ys,Ks,d.normal),u.face=d,u.barycoord=h}return u}class Ls extends Ln{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(h,2));function _(y,f,p,b,v,T,D,R,w,P,Y){const x=T/w,E=D/P,I=T/2,F=D/2,B=R/2,Z=w+1,O=P+1;let K=0,H=0;const se=new G;for(let J=0;J<O;J++){const ce=J*E-F;for(let Ie=0;Ie<Z;Ie++){const $e=Ie*x-I;se[y]=$e*b,se[f]=ce*v,se[p]=B,c.push(se.x,se.y,se.z),se[y]=0,se[f]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ie/w),h.push(1-J/P),K+=1}}for(let J=0;J<P;J++)for(let ce=0;ce<w;ce++){const Ie=d+ce+Z*J,$e=d+ce+Z*(J+1),X=d+(ce+1)+Z*(J+1),te=d+(ce+1)+Z*J;l.push(Ie,$e,te),l.push($e,X,te),H+=6}a.addGroup(g,H,Y),g+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const s in i)e[s]=i[s]}return e}function zm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Hm={clone:Yi,merge:bt};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Md extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new G,zc=new Je,Hc=new Je;class jt extends Md{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Hc),t.subVectors(Hc,zc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class Wm extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Li,Di,e,t);s.layers=this.layers,this.add(s);const r=new jt(Li,Di,e,t);r.layers=this.layers,this.add(r);const o=new jt(Li,Di,e,t);o.layers=this.layers,this.add(o);const a=new jt(Li,Di,e,t);a.layers=this.layers,this.add(a);const l=new jt(Li,Di,e,t);l.layers=this.layers,this.add(l);const c=new jt(Li,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ed extends Lt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ed(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:zn});r.uniforms.tEquirect.value=t;const o=new Mn(s,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=en),new Wm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Do=new G,qm=new G,$m=new Ne;class ri{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Do.subVectors(i,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Do),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$m.getNormalMatrix(e),s=this.coplanarPoint(Do).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new qr,er=new G;class bd{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],g=s[8],_=s[9],y=s[10],f=s[11],p=s[12],b=s[13],v=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,f-g,T-p).normalize(),i[1].setComponents(l+r,d+c,f+g,T+p).normalize(),i[2].setComponents(l+o,d+u,f+_,T+b).normalize(),i[3].setComponents(l-o,d-u,f-_,T-b).normalize(),i[4].setComponents(l-a,d-h,f-y,T-v).normalize(),t===Sn)i[5].setComponents(l+a,d+h,f+y,T+v).normalize();else if(t===Fr)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(er.x=s.normal.x>0?e.max.x:e.min.x,er.y=s.normal.y>0?e.max.y:e.min.y,er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ym(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<h.length;g++){const _=h[d],y=h[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let g=0,_=h.length;g<_;g++){const y=h[g];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class $r extends Ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,g=[],_=[],y=[],f=[];for(let p=0;p<u;p++){const b=p*d-o;for(let v=0;v<c;v++){const T=v*h-r;_.push(T,-b,0),y.push(0,0,1),f.push(v/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const v=b+c*p,T=b+c*(p+1),D=b+1+c*(p+1),R=b+1+c*p;g.push(v,T,R),g.push(T,D,R)}this.setIndex(g),this.setAttribute("position",new pi(_,3)),this.setAttribute("normal",new pi(y,3)),this.setAttribute("uv",new pi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$g=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:vg,color_vertex:_g,common:xg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Eg,emissivemap_fragment:bg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:wg,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Ng,fog_pars_vertex:Ig,fog_fragment:Ug,fog_pars_fragment:Fg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Vg,lights_pars_begin:zg,lights_toon_fragment:Gg,lights_toon_pars_fragment:jg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:$g,lights_fragment_begin:Yg,lights_fragment_maps:Kg,lights_fragment_end:Zg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:ev,logdepthbuf_vertex:tv,map_fragment:nv,map_pars_fragment:iv,map_particle_fragment:sv,map_particle_pars_fragment:rv,metalnessmap_fragment:ov,metalnessmap_pars_fragment:av,morphinstance_vertex:lv,morphcolor_vertex:cv,morphnormal_vertex:uv,morphtarget_pars_vertex:hv,morphtarget_vertex:dv,normal_fragment_begin:fv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:vv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Mv,opaque_fragment:Ev,packing:bv,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:wv,dithering_pars_fragment:Rv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Iv,skinbase_vertex:Uv,skinning_pars_vertex:Fv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:kv,specularmap_pars_fragment:Vv,tonemapping_fragment:zv,tonemapping_pars_fragment:Hv,transmission_fragment:Gv,transmission_pars_fragment:jv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:qv,worldpos_vertex:$v,background_vert:Yv,background_frag:Kv,backgroundCube_vert:Zv,backgroundCube_frag:Jv,cube_vert:Qv,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:s_,equirect_vert:r_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:u_,meshlambert_vert:h_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:v_,meshphong_frag:__,meshphysical_vert:x_,meshphysical_frag:y_,meshtoon_vert:S_,meshtoon_frag:M_,points_vert:E_,points_frag:b_,shadow_vert:T_,shadow_frag:A_,sprite_vert:w_,sprite_frag:R_},re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},on={basic:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:bt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:bt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:bt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:bt([re.common,re.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:bt([re.lights,re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};on.physical={uniforms:bt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const tr={r:0,b:0,g:0},ti=new Cn,C_=new ct;function P_(n,e,t,i,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,g=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function y(b){let v=!1;const T=_(b);T===null?p(a,l):T&&T.isColor&&(p(T,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(b,v){const T=_(v);T&&(T.isCubeTexture||T.mapping===Wr)?(u===void 0&&(u=new Mn(new Ls(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Yi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ti.copy(v.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(ti)),u.material.toneMapped=Xe.getTransfer(T.colorSpace)!==nt,(h!==T||d!==T.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,g=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Mn(new $r(2,2),new Pn({name:"BackgroundMaterial",uniforms:Yi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(T.colorSpace)!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,g=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(tr,Sd(n)),i.buffers.color.setClear(tr.r,tr.g,tr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:f}}function L_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,E,I,F,B){let Z=!1;const O=h(F,I,E);r!==O&&(r=O,c(r.object)),Z=g(x,F,I,B),Z&&_(x,F,I,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,T(x,E,I,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,E,I){const F=I.wireframe===!0;let B=i[x.id];B===void 0&&(B={},i[x.id]=B);let Z=B[E.id];Z===void 0&&(Z={},B[E.id]=Z);let O=Z[F];return O===void 0&&(O=d(l()),Z[F]=O),O}function d(x){const E=[],I=[],F=[];for(let B=0;B<t;B++)E[B]=0,I[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:F,object:x,attributes:{},index:null}}function g(x,E,I,F){const B=r.attributes,Z=E.attributes;let O=0;const K=I.getAttributes();for(const H in K)if(K[H].location>=0){const J=B[H];let ce=Z[H];if(ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function _(x,E,I,F){const B={},Z=E.attributes;let O=0;const K=I.getAttributes();for(const H in K)if(K[H].location>=0){let J=Z[H];J===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),B[H]=ce,O++}r.attributes=B,r.attributesNum=O,r.index=F}function y(){const x=r.newAttributes;for(let E=0,I=x.length;E<I;E++)x[E]=0}function f(x){p(x,0)}function p(x,E){const I=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;I[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),B[x]!==E&&(n.vertexAttribDivisor(x,E),B[x]=E)}function b(){const x=r.newAttributes,E=r.enabledAttributes;for(let I=0,F=E.length;I<F;I++)E[I]!==x[I]&&(n.disableVertexAttribArray(I),E[I]=0)}function v(x,E,I,F,B,Z,O){O===!0?n.vertexAttribIPointer(x,E,I,B,Z):n.vertexAttribPointer(x,E,I,F,B,Z)}function T(x,E,I,F){y();const B=F.attributes,Z=I.getAttributes(),O=E.defaultAttributeValues;for(const K in Z){const H=Z[K];if(H.location>=0){let se=B[K];if(se===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const J=se.normalized,ce=se.itemSize,Ie=e.get(se);if(Ie===void 0)continue;const $e=Ie.buffer,X=Ie.type,te=Ie.bytesPerElement,ve=X===n.INT||X===n.UNSIGNED_INT||se.gpuType===vl;if(se.isInterleavedBufferAttribute){const de=se.data,Pe=de.stride,be=se.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,de.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<H.locationSize;Be++)f(H.location+Be);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Be=0;Be<H.locationSize;Be++)v(H.location+Be,ce/H.locationSize,X,J,Pe*te,(be+ce/H.locationSize*Be)*te,ve)}else{if(se.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)p(H.location+de,se.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let de=0;de<H.locationSize;de++)f(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let de=0;de<H.locationSize;de++)v(H.location+de,ce/H.locationSize,X,J,ce*te,ce/H.locationSize*de*te,ve)}}else if(O!==void 0){const J=O[K];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(H.location,J);break;case 3:n.vertexAttrib3fv(H.location,J);break;case 4:n.vertexAttrib4fv(H.location,J);break;default:n.vertexAttrib1fv(H.location,J)}}}}b()}function D(){P();for(const x in i){const E=i[x];for(const I in E){const F=E[I];for(const B in F)u(F[B].object),delete F[B];delete E[I]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const I in E){const F=E[I];for(const B in F)u(F[B].object),delete F[B];delete E[I]}delete i[x.id]}function w(x){for(const E in i){const I=i[E];if(I[x.id]===void 0)continue;const F=I[x.id];for(const B in F)u(F[B].object),delete F[B];delete I[x.id]}}function P(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:f,disableUnusedAttributes:b}}function D_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];t.update(g,i,1)}function l(c,u,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y];for(let y=0;y<d.length;y++)t.update(_,i,d[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yn&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:T,vertexTextures:D,maxSamples:R}}function I_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ri,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||s;return s=d,i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){const _=h.clippingPlanes,y=h.clipIntersection,f=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{const b=r?0:i,v=b*4;let T=p.clippingState||null;l.value=T,T=u(_,d,v,g);for(let D=0;D!==v;++D)T[D]=t[D];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,g,_){const y=h!==null?h.length:0;let f=null;if(y!==0){if(f=l.value,_!==!0||f===null){const p=g+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,T=g;v!==y;++v,T+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function U_(n){let e=new WeakMap;function t(o,a){return a===va?o.mapping=Wi:a===_a&&(o.mapping=Xi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===va||a===_a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class F_ extends Md{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Gc=[.125,.215,.35,.446,.526,.582],ui=20,No=new F_,jc=new qe;let Io=null,Uo=0,Fo=0,Oo=!1;const oi=(1+Math.sqrt(5))/2,Ni=1/oi,Wc=[new G(-oi,Ni,0),new G(oi,Ni,0),new G(-Ni,0,oi),new G(Ni,0,oi),new G(0,oi,-Ni),new G(0,oi,Ni),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Uo,Fo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:As,format:nn,colorSpace:qn,depthBuffer:!1},s=qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=B_(r,e,t)}return s}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,s){const a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(jc),u.toneMapping=Hn,u.autoClear=!1;const g=new _d({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new Mn(new Ls,g);let y=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,y=!0):(g.color.copy(jc),y=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;nr(s,b*v,p>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Wi||e.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wc[(s-r-1)%Wc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ui-1),y=r/_,f=isFinite(r)?1+Math.floor(u*y):ui;f>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ui}`);const p=[];let b=0;for(let w=0;w<ui;++w){const P=w/y,Y=Math.exp(-P*P/2);p.push(Y),w===0?b+=Y:w<f&&(b+=2*Y)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const T=this._sizeLods[s],D=3*T*(s>v-Ui?s-v+Ui:0),R=4*(this._cubeSize-T);nr(t,D,R,3*T,2*T),l.setRenderTarget(t),l.render(h,No)}}function O_(n){const e=[],t=[],i=[];let s=n;const r=n-Ui+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ui?l=Gc[o-n+Ui-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,_=6,y=3,f=2,p=1,b=new Float32Array(y*_*g),v=new Float32Array(f*_*g),T=new Float32Array(p*_*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,P=R>2?0:-1,Y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];b.set(Y,y*_*R),v.set(d,f*_*R);const x=[R,R,R,R,R,R];T.set(x,p*_*R)}const D=new Ln;D.setAttribute("position",new qt(b,y)),D.setAttribute("uv",new qt(v,f)),D.setAttribute("faceIndex",new qt(T,p)),e.push(D),s>Ui&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qc(n,e,t){const i=new vi(n,e,t);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function B_(n,e,t){const i=new Float32Array(ui),s=new G(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $c(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===va||l===_a,u=l===Wi||l===Xi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Xc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&s(g)?(t===null&&(t=new Xc(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function V_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function z_(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let f=0,p=y.length;f<p;f++)e.remove(y[f])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(e.remove(g),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const y=g[_];for(let f=0,p=y.length;f<p;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,_=h.attributes.position;let y=0;if(g!==null){const b=g.array;y=g.version;for(let v=0,T=b.length;v<T;v+=3){const D=b[v+0],R=b[v+1],w=b[v+2];d.push(D,R,R,w,w,D)}}else if(_!==void 0){const b=_.array;y=_.version;for(let v=0,T=b.length/3-1;v<T;v+=3){const D=v+0,R=v+1,w=v+2;d.push(D,R,R,w,w,D)}}else return;const f=new(dd(d)?yd:xd)(d,1);f.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function H_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,g){n.drawElements(i,g,r,d*o),t.update(g,i,1)}function c(d,g,_){_!==0&&(n.drawElementsInstanced(i,g,r,d*o,_),t.update(g,i,_))}function u(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,d,0,_);let f=0;for(let p=0;p<_;p++)f+=g[p];t.update(f,i,1)}function h(d,g,_,y){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,g[p],y[p]);else{f.multiDrawElementsInstancedWEBGL(i,g,0,r,d,0,y,0,_);let p=0;for(let b=0;b<_;b++)p+=g[b];for(let b=0;b<y.length;b++)t.update(p,i,y[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function j_(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let Y=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),y===!0&&(v=3);let T=a.attributes.position.count*v,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*D*4*h),w=new pd(R,T,D,h);w.type=yn,w.needsUpdate=!0;const P=v*4;for(let x=0;x<h;x++){const E=f[x],I=p[x],F=b[x],B=T*D*4*x;for(let Z=0;Z<E.count;Z++){const O=Z*P;g===!0&&(s.fromBufferAttribute(E,Z),R[B+O+0]=s.x,R[B+O+1]=s.y,R[B+O+2]=s.z,R[B+O+3]=0),_===!0&&(s.fromBufferAttribute(I,Z),R[B+O+4]=s.x,R[B+O+5]=s.y,R[B+O+6]=s.z,R[B+O+7]=0),y===!0&&(s.fromBufferAttribute(F,Z),R[B+O+8]=s.x,R[B+O+9]=s.y,R[B+O+10]=s.z,R[B+O+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Je(T,D)},i.set(a,d),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function W_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ad extends Lt{constructor(e,t,i,s,r,o,a,l,c,u=Hi){if(u!==Hi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hi&&(i=gi),i===void 0&&u===$i&&(i=qi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wd=new Lt,Kc=new Ad(1,1),Rd=new pd,Cd=new Pm,Pd=new Ed,Zc=[],Jc=[],Qc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yr(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function X_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function K_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),pt(t,i)}}function Z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),pt(t,i)}}function J_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),pt(t,i)}}function Q_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function a0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kc.compareFunction=hd,r=Kc):r=wd,t.setTexture2D(e||r,s)}function l0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cd,s)}function c0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pd,s)}function u0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rd,s)}function h0(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return $_;case 35666:return Y_;case 35674:return K_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(n,e){n.uniform1fv(this.addr,e)}function f0(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v0(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _0(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x0(n,e){n.uniform1iv(this.addr,e)}function y0(n,e){n.uniform2iv(this.addr,e)}function S0(n,e){n.uniform3iv(this.addr,e)}function M0(n,e){n.uniform4iv(this.addr,e)}function E0(n,e){n.uniform1uiv(this.addr,e)}function b0(n,e){n.uniform2uiv(this.addr,e)}function T0(n,e){n.uniform3uiv(this.addr,e)}function A0(n,e){n.uniform4uiv(this.addr,e)}function w0(n,e,t){const i=this.cache,s=e.length,r=Yr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wd,r[o])}function R0(n,e,t){const i=this.cache,s=e.length,r=Yr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cd,r[o])}function C0(n,e,t){const i=this.cache,s=e.length,r=Yr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pd,r[o])}function P0(n,e,t){const i=this.cache,s=e.length,r=Yr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rd,r[o])}function L0(n){switch(n){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return S0;case 35669:case 35673:return M0;case 5125:return E0;case 36294:return b0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}}class N0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function nu(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){const i=n.name,s=i.length;for(Bo.lastIndex=0;;){const r=Bo.exec(i),o=Bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nu(t,c===void 0?new D0(a,n,e):new N0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new I0(a),nu(t,h)),t=h}}}class br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);U0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const F0=37297;let O0=0;function B0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function k0(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===Ur&&t===Ir?i="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Ur&&(i="LinearSRGBToLinearDisplayP3"),n){case qn:case Xr:return[i,"LinearTransferOETF"];case sn:case El:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B0(n.getShaderSource(e),o)}else return s}function V0(n,e){const t=k0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function z0(n,e){let t;switch(e){case tm:t="Linear";break;case nm:t="Reinhard";break;case im:t="Cineon";break;case sm:t="ACESFilmic";break;case om:t="AgX";break;case am:t="Neutral";break;case rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new G;function H0(){Xe.getLuminanceCoefficients(ir);const n=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function j0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fs(n){return n!==""}function ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(X0,$0)}const q0=new Map;function $0(n,e){let t=De[e];if(t===void 0){const i=q0.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(Y0,K0)}function K0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function J0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function ex(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case em:e="ENVMAP_BLENDING_ADD";break}return e}function tx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Z0(t),c=J0(t),u=Q0(t),h=ex(t),d=tx(t),g=G0(t),_=j0(r),y=s.createProgram();let f,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fs).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(f=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?De.tonemapping_pars_fragment:"",t.toneMapping!==Hn?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),o=$a(o),o=ru(o,t),o=ou(o,t),a=$a(a),a=ru(a,t),a=ou(a,t),o=au(o),a=au(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+f+o,T=b+p+a,D=iu(s,s.VERTEX_SHADER,v),R=iu(s,s.FRAGMENT_SHADER,T);s.attachShader(y,D),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(E){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(D).trim(),B=s.getShaderInfoLog(R).trim();let Z=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,D,R);else{const K=su(s,D,"vertex"),H=su(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+K+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||B==="")&&(O=!1);O&&(E.diagnostics={runnable:Z,programLog:I,vertexShader:{log:F,prefix:f},fragmentShader:{log:B,prefix:p}})}s.deleteShader(D),s.deleteShader(R),P=new br(s,y),Y=W0(s,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let Y;this.getAttributes=function(){return Y===void 0&&w(this),Y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,F0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=R,this}let ix=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rx(e),t.set(e,i)),i}}class rx{constructor(e){this.id=ix++,this.code=e,this.usedTimes=0}}function ox(n,e,t,i,s,r,o){const a=new gd,l=new sx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,g=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,I,F,B){const Z=F.fog,O=B.geometry,K=x.isMeshStandardMaterial?F.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),se=H&&H.mapping===Wr?H.image.height:null,J=y[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ie=ce!==void 0?ce.length:0;let $e=0;O.morphAttributes.position!==void 0&&($e=1),O.morphAttributes.normal!==void 0&&($e=2),O.morphAttributes.color!==void 0&&($e=3);let X,te,ve,de;if(J){const At=on[J];X=At.vertexShader,te=At.fragmentShader}else X=x.vertexShader,te=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const Pe=n.getRenderTarget(),be=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,Ke=!!x.map,ke=!!x.matcap,C=!!H,Nt=!!x.aoMap,Fe=!!x.lightMap,ze=!!x.bumpMap,Ae=!!x.normalMap,et=!!x.displacementMap,Ce=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,k=x.anisotropy>0,$=x.clearcoat>0,ee=x.dispersion>0,q=x.iridescence>0,xe=x.sheen>0,oe=x.transmission>0,fe=k&&!!x.anisotropyMap,He=$&&!!x.clearcoatMap,ne=$&&!!x.clearcoatNormalMap,pe=$&&!!x.clearcoatRoughnessMap,we=q&&!!x.iridescenceMap,Re=q&&!!x.iridescenceThicknessMap,me=xe&&!!x.sheenColorMap,Oe=xe&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Qe=!!x.specularColorMap,L=!!x.specularIntensityMap,ue=oe&&!!x.transmissionMap,j=oe&&!!x.thicknessMap,Q=!!x.gradientMap,ae=!!x.alphaMap,he=x.alphaTest>0,Ve=!!x.alphaHash,ut=!!x.extensions;let Tt=Hn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const Ge={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:te,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:qn,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:ke,envMap:C,envMapMode:C&&H.mapping,envMapCubeUVHeight:se,aoMap:Nt,lightMap:Fe,bumpMap:ze,normalMap:Ae,displacementMap:g&&et,emissiveMap:Ce,normalMapObjectSpace:Ae&&x.normalMapType===dm,normalMapTangentSpace:Ae&&x.normalMapType===hm,metalnessMap:A,roughnessMap:S,anisotropy:k,anisotropyMap:fe,clearcoat:$,clearcoatMap:He,clearcoatNormalMap:ne,clearcoatRoughnessMap:pe,dispersion:ee,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:Re,sheen:xe,sheenColorMap:me,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Qe,specularIntensityMap:L,transmission:oe,transmissionMap:ue,thicknessMap:j,gradientMap:Q,opaque:x.transparent===!1&&x.blending===zi&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Ve,combine:x.combine,mapUv:Ke&&f(x.map.channel),aoMapUv:Nt&&f(x.aoMap.channel),lightMapUv:Fe&&f(x.lightMap.channel),bumpMapUv:ze&&f(x.bumpMap.channel),normalMapUv:Ae&&f(x.normalMap.channel),displacementMapUv:et&&f(x.displacementMap.channel),emissiveMapUv:Ce&&f(x.emissiveMap.channel),metalnessMapUv:A&&f(x.metalnessMap.channel),roughnessMapUv:S&&f(x.roughnessMap.channel),anisotropyMapUv:fe&&f(x.anisotropyMap.channel),clearcoatMapUv:He&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&f(x.sheenRoughnessMap.channel),specularMapUv:Le&&f(x.specularMap.channel),specularColorMapUv:Qe&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:ue&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:ae&&f(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ae||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Ke||ae),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:$e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Pt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function b(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(E,x),T(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function T(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function D(x){const E=y[x.type];let I;if(E){const F=on[E];I=Hm.clone(F.uniforms)}else I=x.uniforms;return I}function R(x,E){let I;for(let F=0,B=u.length;F<B;F++){const Z=u[F];if(Z.cacheKey===E){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new nx(n,E,x,r),u.push(I)),I}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:D,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:Y}}function ax(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,g,_,y,f){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:g,groupOrder:_,renderOrder:h.renderOrder,z:y,group:f},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=g,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=y,p.group=f),e++,p}function a(h,d,g,_,y,f){const p=o(h,d,g,_,y,f);g.transmission>0?i.push(p):g.transparent===!0?s.push(p):t.push(p)}function l(h,d,g,_,y,f){const p=o(h,d,g,_,y,f);g.transmission>0?i.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||lx),i.length>1&&i.sort(d||cu),s.length>1&&s.sort(d||cu)}function u(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new uu,n.set(i,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function hx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dx=0;function fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function px(n){const e=new ux,t=hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let g=0,_=0,y=0,f=0,p=0,b=0,v=0,T=0,D=0,R=0,w=0;c.sort(fx);for(let Y=0,x=c.length;Y<x;Y++){const E=c[Y],I=E.color,F=E.intensity,B=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(E.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(E.sh.coefficients[O],F);w++}else if(E.isDirectionalLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const K=E.shadow,H=t.get(E);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=E.shadow.matrix,b++}i.directional[g]=O,g++}else if(E.isSpotLight){const O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(I).multiplyScalar(F),O.distance=B,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,i.spot[y]=O;const K=E.shadow;if(E.map&&(i.spotLightMap[D]=E.map,D++,K.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[y]=K.matrix,E.castShadow){const H=t.get(E);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Z,T++}y++}else if(E.isRectAreaLight){const O=e.get(E);O.color.copy(I).multiplyScalar(F),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),i.rectArea[f]=O,f++}else if(E.isPointLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const K=E.shadow,H=t.get(E);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=E.shadow.matrix,v++}i.point[_]=O,_++}else if(E.isHemisphereLight){const O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(F),O.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[p]=O,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==f||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==v||P.numSpotShadows!==T||P.numSpotMaps!==D||P.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=f,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,P.directionalLength=g,P.pointLength=_,P.spotLength=y,P.rectAreaLength=f,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=v,P.numSpotShadows=T,P.numSpotMaps=D,P.numLightProbes=w,i.version=dx++)}function l(c,u){let h=0,d=0,g=0,_=0,y=0;const f=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const v=c[p];if(v.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(v.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(v.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),y++}}}return{setup:a,setupView:l,state:i}}function hu(n){const e=new px(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hu(n),e.set(s,[a])):r>=o.length?(a=new hu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gx extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yx(n,e,t){let i=new bd;const s=new Je,r=new Je,o=new at,a=new gx({depthPacking:um}),l=new vx,c={},u=t.maxTextureSize,h={[Gn]:Pt,[Pt]:Gn,[_n]:_n},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ln;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(R,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const Y=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),I=n.state;I.setBlending(zn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==vn&&this.type===vn,B=p===vn&&this.type!==vn;for(let Z=0,O=R.length;Z<O;Z++){const K=R[Z],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();if(s.multiply(se),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||F===!0||B===!0){const ce=this.type!==vn?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new vi(s.x,s.y,ce),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const J=H.getViewportCount();for(let ce=0;ce<J;ce++){const Ie=H.getViewport(ce);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),I.viewport(o),H.updateMatrices(K,ce),i=H.getFrustum(),T(w,P,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&b(H,P),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(Y,x,E)};function b(R,w){const P=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,P,d,y,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,P,g,y,null)}function v(R,w,P,Y){let x=null;const E=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=x.uuid,F=w.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let Z=B[F];Z===void 0&&(Z=x.clone(),B[F]=Z,w.addEventListener("dispose",D)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,Y===vn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=n.properties.get(x);I.light=P}return x}function T(R,w,P,Y,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===vn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),B=R.material;if(Array.isArray(B)){const Z=F.groups;for(let O=0,K=Z.length;O<K;O++){const H=Z[O],se=B[H.materialIndex];if(se&&se.visible){const J=v(R,se,Y,x);R.onBeforeShadow(n,R,w,P,F,J,H),n.renderBufferDirect(P,null,F,J,R,H),R.onAfterShadow(n,R,w,P,F,J,H)}}}else if(B.visible){const Z=v(R,B,Y,x);R.onBeforeShadow(n,R,w,P,F,Z,null),n.renderBufferDirect(P,null,F,Z,R,null),R.onAfterShadow(n,R,w,P,F,Z,null)}}const I=R.children;for(let F=0,B=I.length;F<B;F++)T(I[F],w,P,Y,x)}function D(R){R.target.removeEventListener("dispose",D);for(const P in c){const Y=c[P],x=R.target.uuid;x in Y&&(Y[x].dispose(),delete Y[x])}}}const Sx={[ua]:ha,[da]:ma,[fa]:ga,[ji]:pa,[ha]:ua,[ma]:da,[ga]:fa,[pa]:ji};function Mx(n){function e(){let L=!1;const ue=new at;let j=null;const Q=new at(0,0,0,0);return{setMask:function(ae){j!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){L=ae},setClear:function(ae,he,Ve,ut,Tt){Tt===!0&&(ae*=ut,he*=ut,Ve*=ut),ue.set(ae,he,Ve,ut),Q.equals(ue)===!1&&(n.clearColor(ae,he,Ve,ut),Q.copy(ue))},reset:function(){L=!1,j=null,Q.set(-1,0,0,0)}}}function t(){let L=!1,ue=!1,j=null,Q=null,ae=null;return{setReversed:function(he){ue=he},setTest:function(he){he?ve(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(he){j!==he&&!L&&(n.depthMask(he),j=he)},setFunc:function(he){if(ue&&(he=Sx[he]),Q!==he){switch(he){case ua:n.depthFunc(n.NEVER);break;case ha:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=he}},setLocked:function(he){L=he},setClear:function(he){ae!==he&&(n.clearDepth(he),ae=he)},reset:function(){L=!1,j=null,Q=null,ae=null}}}function i(){let L=!1,ue=null,j=null,Q=null,ae=null,he=null,Ve=null,ut=null,Tt=null;return{setTest:function(Ge){L||(Ge?ve(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!L&&(n.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,At,hn){(j!==Ge||Q!==At||ae!==hn)&&(n.stencilFunc(Ge,At,hn),j=Ge,Q=At,ae=hn)},setOp:function(Ge,At,hn){(he!==Ge||Ve!==At||ut!==hn)&&(n.stencilOp(Ge,At,hn),he=Ge,Ve=At,ut=hn)},setLocked:function(Ge){L=Ge},setClear:function(Ge){Tt!==Ge&&(n.clearStencil(Ge),Tt=Ge)},reset:function(){L=!1,ue=null,j=null,Q=null,ae=null,he=null,Ve=null,ut=null,Tt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],g=null,_=!1,y=null,f=null,p=null,b=null,v=null,T=null,D=null,R=new qe(0,0,0),w=0,P=!1,Y=null,x=null,E=null,I=null,F=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,O=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=O>=2);let H=null,se={};const J=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Ie=new at().fromArray(J),$e=new at().fromArray(ce);function X(L,ue,j,Q){const ae=new Uint8Array(4),he=n.createTexture();n.bindTexture(L,he),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<j;Ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ue+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return he}const te={};te[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),r.setFunc(ji),Fe(!1),ze(yc),ve(n.CULL_FACE),C(zn);function ve(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function de(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Pe(L,ue){return u[L]!==ue?(n.bindFramebuffer(L,ue),u[L]=ue,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(L,ue){let j=d,Q=!1;if(L){j=h.get(ue),j===void 0&&(j=[],h.set(ue,j));const ae=L.textures;if(j.length!==ae.length||j[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ve=ae.length;he<Ve;he++)j[he]=n.COLOR_ATTACHMENT0+he;j.length=ae.length,Q=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Q=!0);Q&&n.drawBuffers(j)}function Be(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Ke={[ci]:n.FUNC_ADD,[Fp]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};Ke[Bp]=n.MIN,Ke[kp]=n.MAX;const ke={[Vp]:n.ZERO,[zp]:n.ONE,[Hp]:n.SRC_COLOR,[la]:n.SRC_ALPHA,[$p]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[jp]:n.DST_ALPHA,[Gp]:n.ONE_MINUS_SRC_COLOR,[ca]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[Kp]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Jp]:n.ONE_MINUS_CONSTANT_ALPHA};function C(L,ue,j,Q,ae,he,Ve,ut,Tt,Ge){if(L===zn){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),L!==Up){if(L!==y||Ge!==P){if((f!==ci||v!==ci)&&(n.blendEquation(n.FUNC_ADD),f=ci,v=ci),Ge)switch(L){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case aa:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case aa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,b=null,T=null,D=null,R.set(0,0,0),w=0,y=L,P=Ge}return}ae=ae||ue,he=he||j,Ve=Ve||Q,(ue!==f||ae!==v)&&(n.blendEquationSeparate(Ke[ue],Ke[ae]),f=ue,v=ae),(j!==p||Q!==b||he!==T||Ve!==D)&&(n.blendFuncSeparate(ke[j],ke[Q],ke[he],ke[Ve]),p=j,b=Q,T=he,D=Ve),(ut.equals(R)===!1||Tt!==w)&&(n.blendColor(ut.r,ut.g,ut.b,Tt),R.copy(ut),w=Tt),y=L,P=!1}function Nt(L,ue){L.side===_n?de(n.CULL_FACE):ve(n.CULL_FACE);let j=L.side===Pt;ue&&(j=!j),Fe(j),L.blending===zi&&L.transparent===!1?C(zn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){Y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),Y=L)}function ze(L){L!==Dp?(ve(n.CULL_FACE),L!==x&&(L===yc?n.cullFace(n.BACK):L===Np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),x=L}function Ae(L){L!==E&&(Z&&n.lineWidth(L),E=L)}function et(L,ue,j){L?(ve(n.POLYGON_OFFSET_FILL),(I!==ue||F!==j)&&(n.polygonOffset(ue,j),I=ue,F=j)):de(n.POLYGON_OFFSET_FILL)}function Ce(L){L?ve(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+B-1),H!==L&&(n.activeTexture(L),H=L)}function S(L,ue,j){j===void 0&&(H===null?j=n.TEXTURE0+B-1:j=H);let Q=se[j];Q===void 0&&(Q={type:void 0,texture:void 0},se[j]=Q),(Q.type!==L||Q.texture!==ue)&&(H!==j&&(n.activeTexture(j),H=j),n.bindTexture(L,ue||te[L]),Q.type=L,Q.texture=ue)}function k(){const L=se[H];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){Ie.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function me(L){$e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$e.copy(L))}function Oe(L,ue){let j=l.get(ue);j===void 0&&(j=new WeakMap,l.set(ue,j));let Q=j.get(L);Q===void 0&&(Q=n.getUniformBlockIndex(ue,L.name),j.set(L,Q))}function Le(L,ue){const Q=l.get(ue).get(L);a.get(ue)!==Q&&(n.uniformBlockBinding(ue,Q,L.__bindingPointIndex),a.set(ue,Q))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,se={},u={},h=new WeakMap,d=[],g=null,_=!1,y=null,f=null,p=null,b=null,v=null,T=null,D=null,R=new qe(0,0,0),w=0,P=!1,Y=null,x=null,E=null,I=null,F=null,Ie.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:de,bindFramebuffer:Pe,drawBuffers:be,useProgram:Be,setBlending:C,setMaterial:Nt,setFlipSided:Fe,setCullFace:ze,setLineWidth:Ae,setPolygonOffset:et,setScissorTest:Ce,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:pe,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Le,texStorage2D:He,texStorage3D:ne,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Re,viewport:me,reset:Qe}}function du(n,e,t,i){const s=Ex(i);switch(t){case sd:return n*e;case od:return n*e;case ad:return n*e*2;case ld:return n*e/s.components*s.byteLength;case yl:return n*e/s.components*s.byteLength;case cd:return n*e*2/s.components*s.byteLength;case Sl:return n*e*2/s.components*s.byteLength;case rd:return n*e*3/s.components*s.byteLength;case nn:return n*e*4/s.components*s.byteLength;case Ml:return n*e*4/s.components*s.byteLength;case _r:case xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yr:case Sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mr:case Ha:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ud:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ex(n){switch(n){case Rn:case td:return{byteLength:1,components:1};case Ss:case nd:case As:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case gi:case vl:case yn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return g?new OffscreenCanvas(A,S):Or("canvas")}function y(A,S,k){let $=1;const ee=Ce(A);if((ee.width>k||ee.height>k)&&($=k/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor($*ee.width),xe=Math.floor($*ee.height);h===void 0&&(h=_(q,xe));const oe=S?_(q,xe):h;return oe.width=q,oe.height=xe,oe.getContext("2d").drawImage(A,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+xe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function f(A){return A.generateMipmaps&&A.minFilter!==Xt&&A.minFilter!==en}function p(A){n.generateMipmap(A)}function b(A,S,k,$,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),S===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),S===n.RGBA){const xe=ee?Nr:Xe.getTransfer($);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=xe===nt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(A,S){let k;return A?S===null||S===gi||S===qi?k=n.DEPTH24_STENCIL8:S===yn?k=n.DEPTH32F_STENCIL8:S===Ss&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===qi?k=n.DEPTH_COMPONENT24:S===yn?k=n.DEPTH_COMPONENT32F:S===Ss&&(k=n.DEPTH_COMPONENT16),k}function T(A,S){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function D(A){const S=A.target;S.removeEventListener("dispose",D),w(S),S.isVideoTexture&&u.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),Y(S)}function w(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,$=d.get(k);if($){const ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(A),Object.keys($).length===0&&d.delete(k)}i.remove(A)}function P(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const k=A.source,$=d.get(k);delete $[S.__cacheKey],o.memory.textures--}function Y(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let $=0,ee=k.length;$<ee;$++){const q=i.get(k[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(A)}let x=0;function E(){x=0}function I(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function B(A,S){const k=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(k,A,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function Z(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){$e(k,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function O(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){$e(k,A,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function K(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){X(k,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const H={[xa]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},se={[Xt]:n.NEAREST,[lm]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},J={[fm]:n.NEVER,[xm]:n.ALWAYS,[pm]:n.LESS,[hd]:n.LEQUAL,[mm]:n.EQUAL,[_m]:n.GEQUAL,[gm]:n.GREATER,[vm]:n.NOTEQUAL};function ce(A,S){if(S.type===yn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===lo||S.magFilter===Os||S.magFilter===di||S.minFilter===en||S.minFilter===lo||S.minFilter===Os||S.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,H[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,H[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,H[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,se[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Os&&S.minFilter!==di||S.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",D));const $=S.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const q=F(S);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[q].usedTimes++;const xe=ee[A.__cacheKey];xe!==void 0&&(ee[A.__cacheKey].usedTimes--,xe.usedTimes===0&&P(S)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return k}function $e(A,S,k){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const ee=Ie(A,S),q=S.source;t.bindTexture($,A.__webglTexture,n.TEXTURE0+k);const xe=i.get(q);if(q.version!==xe.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const oe=Xe.getPrimaries(Xe.workingColorSpace),fe=S.colorSpace===Vn?null:Xe.getPrimaries(S.colorSpace),He=S.colorSpace===Vn||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=y(S.image,!1,s.maxTextureSize);ne=et(S,ne);const pe=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let Re=b(S.internalFormat,pe,we,S.colorSpace,S.isVideoTexture);ce($,S);let me;const Oe=S.mipmaps,Le=S.isVideoTexture!==!0,Qe=xe.__version===void 0||ee===!0,L=q.dataReady,ue=T(S,ne);if(S.isDepthTexture)Re=v(S.format===$i,S.type),Qe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,pe,we,null));else if(S.isDataTexture)if(Oe.length>0){Le&&Qe&&t.texStorage2D(n.TEXTURE_2D,ue,Re,Oe[0].width,Oe[0].height);for(let j=0,Q=Oe.length;j<Q;j++)me=Oe[j],Le?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,j,Re,me.width,me.height,0,pe,we,me.data);S.generateMipmaps=!1}else Le?(Qe&&t.texStorage2D(n.TEXTURE_2D,ue,Re,ne.width,ne.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,we,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,pe,we,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Re,Oe[0].width,Oe[0].height,ne.depth);for(let j=0,Q=Oe.length;j<Q;j++)if(me=Oe[j],S.format!==nn)if(pe!==null)if(Le){if(L)if(S.layerUpdates.size>0){const ae=du(me.width,me.height,S.format,S.type);for(const he of S.layerUpdates){const Ve=me.data.subarray(he*ae/me.data.BYTES_PER_ELEMENT,(he+1)*ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,he,me.width,me.height,1,pe,Ve,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ne.depth,pe,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Re,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ne.depth,pe,we,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Re,me.width,me.height,ne.depth,0,pe,we,me.data)}else{Le&&Qe&&t.texStorage2D(n.TEXTURE_2D,ue,Re,Oe[0].width,Oe[0].height);for(let j=0,Q=Oe.length;j<Q;j++)me=Oe[j],S.format!==nn?pe!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,j,Re,me.width,me.height,0,pe,we,me.data)}else if(S.isDataArrayTexture)if(Le){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Re,ne.width,ne.height,ne.depth),L)if(S.layerUpdates.size>0){const j=du(ne.width,ne.height,S.format,S.type);for(const Q of S.layerUpdates){const ae=ne.data.subarray(Q*j/ne.data.BYTES_PER_ELEMENT,(Q+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,pe,we,ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,we,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,pe,we,ne.data);else if(S.isData3DTexture)Le?(Qe&&t.texStorage3D(n.TEXTURE_3D,ue,Re,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,we,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,pe,we,ne.data);else if(S.isFramebufferTexture){if(Qe)if(Le)t.texStorage2D(n.TEXTURE_2D,ue,Re,ne.width,ne.height);else{let j=ne.width,Q=ne.height;for(let ae=0;ae<ue;ae++)t.texImage2D(n.TEXTURE_2D,ae,Re,j,Q,0,pe,we,null),j>>=1,Q>>=1}}else if(Oe.length>0){if(Le&&Qe){const j=Ce(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ue,Re,j.width,j.height)}for(let j=0,Q=Oe.length;j<Q;j++)me=Oe[j],Le?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe,we,me):t.texImage2D(n.TEXTURE_2D,j,Re,pe,we,me);S.generateMipmaps=!1}else if(Le){if(Qe){const j=Ce(ne);t.texStorage2D(n.TEXTURE_2D,ue,Re,j.width,j.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,we,ne)}else t.texImage2D(n.TEXTURE_2D,0,Re,pe,we,ne);f(S)&&p($),xe.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function X(A,S,k){if(S.image.length!==6)return;const $=Ie(A,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const q=i.get(ee);if(ee.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const xe=Xe.getPrimaries(Xe.workingColorSpace),oe=S.colorSpace===Vn?null:Xe.getPrimaries(S.colorSpace),fe=S.colorSpace===Vn||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Q=0;Q<6;Q++)!He&&!ne?pe[Q]=y(S.image[Q],!0,s.maxCubemapSize):pe[Q]=ne?S.image[Q].image:S.image[Q],pe[Q]=et(S,pe[Q]);const we=pe[0],Re=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Oe=b(S.internalFormat,Re,me,S.colorSpace),Le=S.isVideoTexture!==!0,Qe=q.__version===void 0||$===!0,L=ee.dataReady;let ue=T(S,we);ce(n.TEXTURE_CUBE_MAP,S);let j;if(He){Le&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,we.width,we.height);for(let Q=0;Q<6;Q++){j=pe[Q].mipmaps;for(let ae=0;ae<j.length;ae++){const he=j[ae];S.format!==nn?Re!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Oe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,he.width,he.height,Re,me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Oe,he.width,he.height,0,Re,me,he.data)}}}else{if(j=S.mipmaps,Le&&Qe){j.length>0&&ue++;const Q=Ce(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe[Q].width,pe[Q].height,Re,me,pe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,pe[Q].width,pe[Q].height,0,Re,me,pe[Q].data);for(let ae=0;ae<j.length;ae++){const Ve=j[ae].image[Q].image;Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,Ve.width,Ve.height,Re,me,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Oe,Ve.width,Ve.height,0,Re,me,Ve.data)}}else{Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,me,pe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,Re,me,pe[Q]);for(let ae=0;ae<j.length;ae++){const he=j[ae];Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,Re,me,he.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Oe,Re,me,he.image[Q])}}}f(S)&&p(n.TEXTURE_CUBE_MAP),q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,k,$,ee,q){const xe=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),fe=b(k.internalFormat,xe,oe,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>q),pe=Math.max(1,S.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,fe,ne,pe,S.depth,0,xe,oe,null):t.texImage2D(ee,q,fe,ne,pe,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,i.get(k).__webglTexture,0,Fe(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,i.get(k).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(A,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=v(S.stencilBuffer,ee),xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Fe(S);ze(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,q,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{const $=S.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],xe=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),fe=b(q.internalFormat,xe,oe,q.colorSpace),He=Fe(S);k&&ze(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,fe,S.width,S.height):ze(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const $=i.get(S.depthTexture).__webglTexture,ee=Fe(S);if(S.depthTexture.format===Hi)ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(S.depthTexture.format===$i)ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[$],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(A,S,k){const $=i.get(A);S!==void 0&&te($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Pe(A)}function Be(A){const S=A.texture,k=i.get(A),$=i.get(S);A.addEventListener("dispose",R);const ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else k.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)k.__webglFramebuffer[oe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,fe=ee.length;oe<fe;oe++){const He=i.get(ee[oe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ze(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const fe=ee[oe];k.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const He=r.convert(fe.format,fe.colorSpace),ne=r.convert(fe.type),pe=b(fe.internalFormat,He,ne,fe.colorSpace,A.isXRRenderTarget===!0),we=Fe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ce(n.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)te(k.__webglFramebuffer[oe][fe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else te(k.__webglFramebuffer[oe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,fe=ee.length;oe<fe;oe++){const He=ee[oe],ne=i.get(He);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),ce(n.TEXTURE_2D,He),te(k.__webglFramebuffer,A,He,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),f(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),ce(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)te(k.__webglFramebuffer[fe],A,S,n.COLOR_ATTACHMENT0,oe,fe);else te(k.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,oe,0);f(S)&&p(oe),t.unbindTexture()}A.depthBuffer&&Pe(A)}function Ke(A){const S=A.textures;for(let k=0,$=S.length;k<$;k++){const ee=S[k];if(f(ee)){const q=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(ee).__webglTexture;t.bindTexture(q,xe),p(q),t.unbindTexture()}}}const ke=[],C=[];function Nt(A){if(A.samples>0){if(ze(A)===!1){const S=A.textures,k=A.width,$=A.height;let ee=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),oe=S.length>1;if(oe)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const He=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,ee,n.NEAREST),l===!0&&(ke.length=0,C.length=0,ke.push(n.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const He=i.get(S[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Fe(A){return Math.min(s.maxSamples,A.samples)}function ze(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function et(A,S){const k=A.colorSpace,$=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==qn&&k!==Vn&&(Xe.getTransfer(k)===nt?($!==nn||ee!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=be,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ze}function Tx(n,e){function t(i,s=Vn){let r;const o=Xe.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===vl)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===As)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===rd)return n.RGB;if(i===nn)return n.RGBA;if(i===od)return n.LUMINANCE;if(i===ad)return n.LUMINANCE_ALPHA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===ld)return n.RED;if(i===yl)return n.RED_INTEGER;if(i===cd)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===Ml)return n.RGBA_INTEGER;if(i===_r||i===xr||i===yr||i===Sr)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ma||i===Ea||i===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===Aa||i===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ta||i===Aa)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Na||i===Ia||i===Ua||i===Fa||i===Oa||i===Ba||i===ka||i===Va||i===za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ra)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===za)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mr||i===Ha||i===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mr)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===ja||i===Wa||i===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ax extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wx={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,i),p=this._getHandJoint(c,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new $r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lx extends Qi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,_=null;const y=new Px,f=t.getContextAttributes();let p=null,b=null;const v=[],T=[],D=new Je;let R=null;const w=new jt;w.layers.enable(1),w.viewport=new at;const P=new jt;P.layers.enable(2),P.viewport=new at;const Y=[w,P],x=new Ax;x.layers.enable(1),x.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new ko,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new ko,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new ko,v[X]=te),te.getHandSpace()};function F(X){const te=T.indexOf(X.inputSource);if(te===-1)return;const ve=v[te];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<v.length;X++){const te=T[X];te!==null&&(T[X]=null,v[X].disconnect(te))}E=null,I=null,y.reset(),e.setRenderTarget(p),g=null,d=null,h=null,s=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new vi(g.framebufferWidth,g.framebufferHeight,{format:nn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,ve=null,de=null;f.depth&&(de=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?$i:Hi,ve=f.stencil?qi:gi);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new vi(d.textureWidth,d.textureHeight,{format:nn,type:Rn,depthTexture:new Ad(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(X){for(let te=0;te<X.removed.length;te++){const ve=X.removed[te],de=T.indexOf(ve);de>=0&&(T[de]=null,v[de].disconnect(ve))}for(let te=0;te<X.added.length;te++){const ve=X.added[te];let de=T.indexOf(ve);if(de===-1){for(let be=0;be<v.length;be++)if(be>=T.length){T.push(ve),de=be;break}else if(T[be]===null){T[be]=ve,de=be;break}if(de===-1)break}const Pe=v[de];Pe&&Pe.connect(ve)}}const O=new G,K=new G;function H(X,te,ve){O.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const de=O.distanceTo(K),Pe=te.projectionMatrix.elements,be=ve.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),Ke=Pe[14]/(Pe[10]+1),ke=(Pe[9]+1)/Pe[5],C=(Pe[9]-1)/Pe[5],Nt=(Pe[8]-1)/Pe[0],Fe=(be[8]+1)/be[0],ze=Be*Nt,Ae=Be*Fe,et=de/(-Nt+Fe),Ce=et*-Nt;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=Be+et,S=Ke+et,k=ze-Ce,$=Ae+(de-Ce),ee=ke*Ke/S*A,q=C*Ke/S*A;X.projectionMatrix.makePerspective(k,$,ee,q,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let te=X.near,ve=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=P.near=w.near=te,x.far=P.far=w.far=ve,(E!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,I=x.far);const de=X.parent,Pe=x.cameras;se(x,de);for(let be=0;be<Pe.length;be++)se(Pe[be],de);Pe.length===2?H(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),J(X,x,de)};function J(X,te,ve){ve===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ce=null;function Ie(X,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const ve=u.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let de=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let be=0;be<ve.length;be++){const Be=ve[be];let Ke=null;if(g!==null)Ke=g.getViewport(Be);else{const C=h.getViewSubImage(d,Be);Ke=C.viewport,be===0&&(e.setRenderTargetTextures(b,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(b))}let ke=Y[be];ke===void 0&&(ke=new jt,ke.layers.enable(be),ke.viewport=new at,Y[be]=ke),ke.matrix.fromArray(Be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),be===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(ke)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const be=h.getDepthInformation(ve[0]);be&&be.isValid&&be.texture&&y.init(e,be,s.renderState)}}for(let ve=0;ve<v.length;ve++){const de=T[ve],Pe=v[ve];de!==null&&Pe!==void 0&&Pe.update(de,te,c||o)}ce&&ce(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const $e=new Td;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(X){ce=X},this.dispose=function(){}}}const ni=new Cn,Dx=new ct;function Nx(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Sd(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,b,v,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&g(f,p,T)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,b,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Pt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Pt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,T=b.envMapRotation;v&&(f.envMap.value=v,ni.copy(T),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),f.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(ni)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,b,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function g(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){const b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ix(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const T=v.program;i.uniformBlockBinding(b,T)}function c(b,v){let T=s[b.id];T===void 0&&(_(b),T=u(b),s[b.id]=T,b.addEventListener("dispose",f));const D=v.program;i.updateUBOMapping(b,D);const R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){const v=h();b.__bindingPointIndex=v;const T=n.createBuffer(),D=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=s[b.id],T=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,w=T.length;R<w;R++){const P=Array.isArray(T[R])?T[R]:[T[R]];for(let Y=0,x=P.length;Y<x;Y++){const E=P[Y];if(g(E,R,Y,D)===!0){const I=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let Z=0;Z<F.length;Z++){const O=F[Z],K=y(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,I+B,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,v,T,D){const R=b.value,w=v+"_"+T;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const P=D[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return D[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(b){const v=b.uniforms;let T=0;const D=16;for(let w=0,P=v.length;w<P;w++){const Y=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,E=Y.length;x<E;x++){const I=Y[x],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,Z=F.length;B<Z;B++){const O=F[B],K=y(O),H=T%D,se=H%K.boundary,J=H+se;T+=se,J!==0&&D-J<K.storage&&(T+=D-J),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=K.storage}}}const R=T%D;return R>0&&(T+=D-R),b.__size=T,b.__cache={},this}function y(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function f(b){const v=b.target;v.removeEventListener("dispose",f);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ux{constructor(e={}){const{canvas:t=Sm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,f=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Hn,this.toneMappingExposure=1;const v=this;let T=!1,D=0,R=0,w=null,P=-1,Y=null;const x=new at,E=new at;let I=null;const F=new qe(0);let B=0,Z=t.width,O=t.height,K=1,H=null,se=null;const J=new at(0,0,Z,O),ce=new at(0,0,Z,O);let Ie=!1;const $e=new bd;let X=!1,te=!1;const ve=new ct,de=new ct,Pe=new G,be=new at,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ke(){return w===null?K:1}let C=i;function Nt(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),C===null){const N="webgl2";if(C=Nt(N,M),C===null)throw Nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,ze,Ae,et,Ce,A,S,k,$,ee,q,xe,oe,fe,He,ne,pe,we,Re,me,Oe,Le,Qe,L;function ue(){Fe=new V_(C),Fe.init(),Le=new Tx(C,Fe),ze=new N_(C,Fe,e,Le),Ae=new Mx(C),ze.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),et=new G_(C),Ce=new ax,A=new bx(C,Fe,Ae,Ce,ze,Le,et),S=new U_(v),k=new k_(v),$=new Ym(C),Qe=new L_(C,$),ee=new z_(C,$,et,Qe),q=new W_(C,ee,$,et),Re=new j_(C,ze,A),ne=new I_(Ce),xe=new ox(v,S,k,Fe,ze,Qe,ne),oe=new Nx(v,Ce),fe=new cx,He=new mx(Fe),we=new P_(v,S,k,Ae,q,d,l),pe=new yx(v,q,ze),L=new Ix(C,et,ze,Ae),me=new D_(C,Fe,et),Oe=new H_(C,Fe,et),et.programs=xe.programs,v.capabilities=ze,v.extensions=Fe,v.properties=Ce,v.renderLists=fe,v.shadowMap=pe,v.state=Ae,v.info=et}ue();const j=new Lx(v,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(Z,O,!1))},this.getSize=function(M){return M.set(Z,O)},this.setSize=function(M,N,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,O=N,t.width=Math.floor(M*K),t.height=Math.floor(N*K),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*K,O*K).floor()},this.setDrawingBufferSize=function(M,N,V){Z=M,O=N,K=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,N,V,z){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,N,V,z),Ae.viewport(x.copy(J).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,N,V,z){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,N,V,z),Ae.scissor(E.copy(ce).multiplyScalar(K).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){Ae.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(M=!0,N=!0,V=!0){let z=0;if(M){let U=!1;if(w!==null){const ie=w.texture.format;U=ie===Ml||ie===Sl||ie===yl}if(U){const ie=w.texture.type,le=ie===Rn||ie===gi||ie===Ss||ie===qi||ie===_l||ie===xl,ge=we.getClearColor(),_e=we.getClearAlpha(),Ee=ge.r,Te=ge.g,ye=ge.b;le?(g[0]=Ee,g[1]=Te,g[2]=ye,g[3]=_e,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ee,_[1]=Te,_[2]=ye,_[3]=_e,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),He.dispose(),Ce.dispose(),S.dispose(),k.dispose(),q.dispose(),Qe.dispose(),L.dispose(),xe.dispose(),j.dispose(),j.removeEventListener("sessionstart",dc),j.removeEventListener("sessionend",fc),Kn.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=et.autoReset,N=pe.enabled,V=pe.autoUpdate,z=pe.needsUpdate,U=pe.type;ue(),et.autoReset=M,pe.enabled=N,pe.autoUpdate=V,pe.needsUpdate=z,pe.type=U}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const N=M.target;N.removeEventListener("dispose",Ve),ut(N)}function ut(M){Tt(M),Ce.remove(M)}function Tt(M){const N=Ce.get(M).programs;N!==void 0&&(N.forEach(function(V){xe.releaseProgram(V)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,z,U,ie){N===null&&(N=Be);const le=U.isMesh&&U.matrixWorld.determinant()<0,ge=bp(M,N,V,z,U);Ae.setMaterial(z,le);let _e=V.index,Ee=1;if(z.wireframe===!0){if(_e=ee.getWireframeAttribute(V),_e===void 0)return;Ee=2}const Te=V.drawRange,ye=V.attributes.position;let Ye=Te.start*Ee,tt=(Te.start+Te.count)*Ee;ie!==null&&(Ye=Math.max(Ye,ie.start*Ee),tt=Math.min(tt,(ie.start+ie.count)*Ee)),_e!==null?(Ye=Math.max(Ye,0),tt=Math.min(tt,_e.count)):ye!=null&&(Ye=Math.max(Ye,0),tt=Math.min(tt,ye.count));const st=tt-Ye;if(st<0||st===1/0)return;Qe.setup(U,z,ge,V,_e);let It,je=me;if(_e!==null&&(It=$.get(_e),je=Oe,je.setIndex(It)),U.isMesh)z.wireframe===!0?(Ae.setLineWidth(z.wireframeLinewidth*ke()),je.setMode(C.LINES)):je.setMode(C.TRIANGLES);else if(U.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),Ae.setLineWidth(Se*ke()),U.isLineSegments?je.setMode(C.LINES):U.isLineLoop?je.setMode(C.LINE_LOOP):je.setMode(C.LINE_STRIP)}else U.isPoints?je.setMode(C.POINTS):U.isSprite&&je.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,gt=U._multiDrawCounts,We=U._multiDrawCount,$t=_e?$.get(_e).bytesPerElement:1,xi=Ce.get(z).currentProgram.getUniforms();for(let Ut=0;Ut<We;Ut++)xi.setValue(C,"_gl_DrawID",Ut),je.render(Se[Ut]/$t,gt[Ut])}else if(U.isInstancedMesh)je.renderInstances(Ye,st,U.count);else if(V.isInstancedBufferGeometry){const Se=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,Se);je.renderInstances(Ye,st,gt)}else je.render(Ye,st)};function Ge(M,N,V){M.transparent===!0&&M.side===_n&&M.forceSinglePass===!1?(M.side=Pt,M.needsUpdate=!0,Fs(M,N,V),M.side=Gn,M.needsUpdate=!0,Fs(M,N,V),M.side=_n):Fs(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),f=He.get(V),f.init(N),b.push(f),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==V&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const ge=ie[le];Ge(ge,V,U),z.add(ge)}else Ge(ie,V,U),z.add(ie)}),b.pop(),f=null,z},this.compileAsync=function(M,N,V=null){const z=this.compile(M,N,V);return new Promise(U=>{function ie(){if(z.forEach(function(le){Ce.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){U(M);return}setTimeout(ie,10)}Fe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let At=null;function hn(M){At&&At(M)}function dc(){Kn.stop()}function fc(){Kn.start()}const Kn=new Td;Kn.setAnimationLoop(hn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){At=M,j.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},j.addEventListener("sessionstart",dc),j.addEventListener("sessionend",fc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,w),f=He.get(M,b.length),f.init(N),b.push(f),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$e.setFromProjectionMatrix(de),te=this.localClippingEnabled,X=ne.init(this.clippingPlanes,te),y=fe.get(M,p.length),y.init(),p.push(y),j.enabled===!0&&j.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&so(ie,N,-1/0,v.sortObjects)}so(M,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(H,se),Ke=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ke&&we.addToRenderList(y,M),this.info.render.frame++,X===!0&&ne.beginShadows();const V=f.state.shadowsArray;pe.render(V,M,N),X===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,U=y.transmissive;if(f.setupLights(),N.isArrayCamera){const ie=N.cameras;if(U.length>0)for(let le=0,ge=ie.length;le<ge;le++){const _e=ie[le];mc(z,U,M,_e)}Ke&&we.render(M);for(let le=0,ge=ie.length;le<ge;le++){const _e=ie[le];pc(y,M,_e,_e.viewport)}}else U.length>0&&mc(z,U,M,N),Ke&&we.render(M),pc(y,M,N);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,N),Qe.resetDefaultState(),P=-1,Y=null,b.pop(),b.length>0?(f=b[b.length-1],X===!0&&ne.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function so(M,N,V,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){z&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const le=q.update(M),ge=M.material;ge.visible&&y.push(M,le,ge,V,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){const le=q.update(M),ge=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),be.copy(le.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(de)),Array.isArray(ge)){const _e=le.groups;for(let Ee=0,Te=_e.length;Ee<Te;Ee++){const ye=_e[Ee],Ye=ge[ye.materialIndex];Ye&&Ye.visible&&y.push(M,le,Ye,V,be.z,ye)}}else ge.visible&&y.push(M,le,ge,V,be.z,null)}}const ie=M.children;for(let le=0,ge=ie.length;le<ge;le++)so(ie[le],N,V,z)}function pc(M,N,V,z){const U=M.opaque,ie=M.transmissive,le=M.transparent;f.setupLightsView(V),X===!0&&ne.setGlobalState(v.clippingPlanes,V),z&&Ae.viewport(x.copy(z)),U.length>0&&Us(U,N,V),ie.length>0&&Us(ie,N,V),le.length>0&&Us(le,N,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function mc(M,N,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new vi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?As:Rn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=f.state.transmissionRenderTarget[z.id],le=z.viewport||x;ie.setSize(le.z,le.w);const ge=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(F),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&we.render(V);const _e=v.toneMapping;v.toneMapping=Hn;const Ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),X===!0&&ne.setGlobalState(v.clippingPlanes,z),Us(M,V,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ye=0,Ye=N.length;ye<Ye;ye++){const tt=N[ye],st=tt.object,It=tt.geometry,je=tt.material,Se=tt.group;if(je.side===_n&&st.layers.test(z.layers)){const gt=je.side;je.side=Pt,je.needsUpdate=!0,gc(st,V,z,It,je,Se),je.side=gt,je.needsUpdate=!0,Te=!0}}Te===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}v.setRenderTarget(ge),v.setClearColor(F,B),Ee!==void 0&&(z.viewport=Ee),v.toneMapping=_e}function Us(M,N,V){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ie=M.length;U<ie;U++){const le=M[U],ge=le.object,_e=le.geometry,Ee=z===null?le.material:z,Te=le.group;ge.layers.test(V.layers)&&gc(ge,N,V,_e,Ee,Te)}}function gc(M,N,V,z,U,ie){M.onBeforeRender(v,N,V,z,U,ie),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,N,V,z,M,ie),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,v.renderBufferDirect(V,N,z,U,M,ie),U.side=Gn,U.needsUpdate=!0,v.renderBufferDirect(V,N,z,U,M,ie),U.side=_n):v.renderBufferDirect(V,N,z,U,M,ie),M.onAfterRender(v,N,V,z,U,ie)}function Fs(M,N,V){N.isScene!==!0&&(N=Be);const z=Ce.get(M),U=f.state.lights,ie=f.state.shadowsArray,le=U.state.version,ge=xe.getParameters(M,U.state,ie,N,V),_e=xe.getProgramCacheKey(ge);let Ee=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?k:S).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",Ve),Ee=new Map,z.programs=Ee);let Te=Ee.get(_e);if(Te!==void 0){if(z.currentProgram===Te&&z.lightsStateVersion===le)return _c(M,ge),Te}else ge.uniforms=xe.getUniforms(M),M.onBeforeCompile(ge,v),Te=xe.acquireProgram(ge,_e),Ee.set(_e,Te),z.uniforms=ge.uniforms;const ye=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ye.clippingPlanes=ne.uniform),_c(M,ge),z.needsLights=Ap(M),z.lightsStateVersion=le,z.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Te,z.uniformsList=null,Te}function vc(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=br.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function _c(M,N){const V=Ce.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function bp(M,N,V,z,U){N.isScene!==!0&&(N=Be),A.resetTextureUnits();const ie=N.fog,le=z.isMeshStandardMaterial?N.environment:null,ge=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,_e=(z.isMeshStandardMaterial?k:S).get(z.envMap||le),Ee=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Te=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!V.morphAttributes.position,Ye=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color;let st=Hn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=v.toneMapping);const It=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,je=It!==void 0?It.length:0,Se=Ce.get(z),gt=f.state.lights;if(X===!0&&(te===!0||M!==Y)){const kt=M===Y&&z.id===P;ne.setState(z,M,kt)}let We=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==gt.state.version||Se.outputColorSpace!==ge||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==_e||z.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ne.numPlanes||Se.numIntersection!==ne.numIntersection)||Se.vertexAlphas!==Ee||Se.vertexTangents!==Te||Se.morphTargets!==ye||Se.morphNormals!==Ye||Se.morphColors!==tt||Se.toneMapping!==st||Se.morphTargetsCount!==je)&&(We=!0):(We=!0,Se.__version=z.version);let $t=Se.currentProgram;We===!0&&($t=Fs(z,N,U));let xi=!1,Ut=!1,ro=!1;const rt=$t.getUniforms(),Dn=Se.uniforms;if(Ae.useProgram($t.program)&&(xi=!0,Ut=!0,ro=!0),z.id!==P&&(P=z.id,Ut=!0),xi||Y!==M){ze.reverseDepthBuffer?(ve.copy(M.projectionMatrix),Em(ve),bm(ve),rt.setValue(C,"projectionMatrix",ve)):rt.setValue(C,"projectionMatrix",M.projectionMatrix),rt.setValue(C,"viewMatrix",M.matrixWorldInverse);const kt=rt.map.cameraPosition;kt!==void 0&&kt.setValue(C,Pe.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,Ut=!0,ro=!0)}if(U.isSkinnedMesh){rt.setOptional(C,U,"bindMatrix"),rt.setOptional(C,U,"bindMatrixInverse");const kt=U.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),rt.setValue(C,"boneTexture",kt.boneTexture,A))}U.isBatchedMesh&&(rt.setOptional(C,U,"batchingTexture"),rt.setValue(C,"batchingTexture",U._matricesTexture,A),rt.setOptional(C,U,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",U._indirectTexture,A),rt.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",U._colorsTexture,A));const oo=V.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0)&&Re.update(U,V,$t),(Ut||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,rt.setValue(C,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Dn.envMap.value=_e,Dn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Dn.envMapIntensity.value=N.environmentIntensity),Ut&&(rt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&Tp(Dn,ro),ie&&z.fog===!0&&oe.refreshFogUniforms(Dn,ie),oe.refreshMaterialUniforms(Dn,z,K,O,f.state.transmissionRenderTarget[M.id]),br.upload(C,vc(Se),Dn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(br.upload(C,vc(Se),Dn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(C,"center",U.center),rt.setValue(C,"modelViewMatrix",U.modelViewMatrix),rt.setValue(C,"normalMatrix",U.normalMatrix),rt.setValue(C,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let ao=0,wp=kt.length;ao<wp;ao++){const xc=kt[ao];L.update(xc,$t),L.bind(xc,$t)}}return $t}function Tp(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ap(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,N,V){Ce.get(M.texture).__webglTexture=N,Ce.get(M.depthTexture).__webglTexture=V;const z=Ce.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const V=Ce.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){w=M,D=N,R=V;let z=!0,U=null,ie=!1,le=!1;if(M){const _e=Ce.get(M);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(_e.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(_e.__hasExternalTextures)A.rebindTextures(M,Ce.get(M.texture).__webglTexture,Ce.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ye=M.depthTexture;if(_e.__boundDepthTexture!==ye){if(ye!==null&&Ce.has(ye)&&(M.width!==ye.image.width||M.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);const Te=Ce.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?U=Te[N][V]:U=Te[N],ie=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=Ce.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[V]:U=Te,x.copy(M.viewport),E.copy(M.scissor),I=M.scissorTest}else x.copy(J).multiplyScalar(K).floor(),E.copy(ce).multiplyScalar(K).floor(),I=Ie;if(Ae.bindFramebuffer(C.FRAMEBUFFER,U)&&z&&Ae.drawBuffers(M,U),Ae.viewport(x),Ae.scissor(E),Ae.setScissorTest(I),ie){const _e=Ce.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(le){const _e=Ce.get(M.texture),Ee=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,V||0,Ee)}P=-1},this.readRenderTargetPixels=function(M,N,V,z,U,ie,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){Ae.bindFramebuffer(C.FRAMEBUFFER,ge);try{const _e=M.texture,Ee=_e.format,Te=_e.type;if(!ze.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&V>=0&&V<=M.height-U&&C.readPixels(N,V,z,U,Le.convert(Ee),Le.convert(Te),ie)}finally{const _e=w!==null?Ce.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,z,U,ie,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){const _e=M.texture,Ee=_e.format,Te=_e.type;if(!ze.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-z&&V>=0&&V<=M.height-U){Ae.bindFramebuffer(C.FRAMEBUFFER,ge);const ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),C.readPixels(N,V,z,U,Le.convert(Ee),Le.convert(Te),0);const Ye=w!==null?Ce.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,Ye);const tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mm(C,tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie),C.deleteBuffer(ye),C.deleteSync(tt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,V=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-V),U=Math.floor(M.image.width*z),ie=Math.floor(M.image.height*z),le=N!==null?N.x:0,ge=N!==null?N.y:0;A.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,le,ge,U,ie),Ae.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,z=null,U=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let ie,le,ge,_e,Ee,Te;V!==null?(ie=V.max.x-V.min.x,le=V.max.y-V.min.y,ge=V.min.x,_e=V.min.y):(ie=M.image.width,le=M.image.height,ge=0,_e=0),z!==null?(Ee=z.x,Te=z.y):(Ee=0,Te=0);const ye=Le.convert(N.format),Ye=Le.convert(N.type);A.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=C.getParameter(C.UNPACK_ROW_LENGTH),st=C.getParameter(C.UNPACK_IMAGE_HEIGHT),It=C.getParameter(C.UNPACK_SKIP_PIXELS),je=C.getParameter(C.UNPACK_SKIP_ROWS),Se=C.getParameter(C.UNPACK_SKIP_IMAGES),gt=M.isCompressedTexture?M.mipmaps[U]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,_e),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Ee,Te,ie,le,ye,Ye,gt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Ee,Te,gt.width,gt.height,ye,gt.data):C.texSubImage2D(C.TEXTURE_2D,U,Ee,Te,ie,le,ye,Ye,gt),C.pixelStorei(C.UNPACK_ROW_LENGTH,tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se),U===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V=null,z=null,U=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,z=arguments[1]||null,M=arguments[2],N=arguments[3],U=arguments[4]||0);let ie,le,ge,_e,Ee,Te,ye,Ye,tt;const st=M.isCompressedTexture?M.mipmaps[U]:M.image;V!==null?(ie=V.max.x-V.min.x,le=V.max.y-V.min.y,ge=V.max.z-V.min.z,_e=V.min.x,Ee=V.min.y,Te=V.min.z):(ie=st.width,le=st.height,ge=st.depth,_e=0,Ee=0,Te=0),z!==null?(ye=z.x,Ye=z.y,tt=z.z):(ye=0,Ye=0,tt=0);const It=Le.convert(N.format),je=Le.convert(N.type);let Se;if(N.isData3DTexture)A.setTexture3D(N,0),Se=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Se=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const gt=C.getParameter(C.UNPACK_ROW_LENGTH),We=C.getParameter(C.UNPACK_IMAGE_HEIGHT),$t=C.getParameter(C.UNPACK_SKIP_PIXELS),xi=C.getParameter(C.UNPACK_SKIP_ROWS),Ut=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_e),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ee),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Se,U,ye,Ye,tt,ie,le,ge,It,je,st.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Se,U,ye,Ye,tt,ie,le,ge,It,st.data):C.texSubImage3D(Se,U,ye,Ye,tt,ie,le,ge,It,je,st),C.pixelStorei(C.UNPACK_ROW_LENGTH,gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We),C.pixelStorei(C.UNPACK_SKIP_PIXELS,$t),C.pixelStorei(C.UNPACK_SKIP_ROWS,xi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ut),U===0&&N.generateMipmaps&&C.generateMipmap(Se),Ae.unbindTexture()},this.initRenderTarget=function(M){Ce.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){D=0,R=0,w=null,Ae.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===El?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Xr?"display-p3":"srgb"}}class Fx extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ox extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fu=new ct,Ya=new md,sr=new qr,rr=new G;class pu extends Dt{constructor(e=new Ln,t=new Ox){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;fu.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=d,y=g;_<y;_++){const f=c.getX(_);rr.fromBufferAttribute(h,f),mu(rr,f,l,s,e,t,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,y=g;_<y;_++)rr.fromBufferAttribute(h,_),mu(rr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mu(n,e,t,i,s,r,o){const a=Ya.distanceSqToPoint(n);if(a<t){const l=new G;Ya.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const Rt=n=>new qe(n),or={idle:{rot:.1,breathAmp:.02,breathFreq:.8,wobble:.01,bright:1,inward:0,pulse:0,color:Rt("#7EC8FF"),glow:Rt("#2596FF"),spread:1},thinking:{rot:.45,breathAmp:.03,breathFreq:2.2,wobble:.03,bright:1.25,inward:0,pulse:0,color:Rt("#9AD6FF"),glow:Rt("#2596FF"),spread:1},speaking:{rot:.18,breathAmp:.04,breathFreq:3,wobble:.02,bright:1.15,inward:0,pulse:0,color:Rt("#7EC8FF"),glow:Rt("#2596FF"),spread:1},learning:{rot:.22,breathAmp:.025,breathFreq:1.4,wobble:.015,bright:1.1,inward:.16,pulse:0,color:Rt("#A6EBFF"),glow:Rt("#2FB6FF"),spread:1},sleeping:{rot:.03,breathAmp:.015,breathFreq:.35,wobble:.004,bright:.32,inward:0,pulse:0,color:Rt("#5F8FB8"),glow:Rt("#1B4F86"),spread:.92},error:{rot:.06,breathAmp:.025,breathFreq:.6,wobble:.012,bright:.75,inward:0,pulse:0,color:Rt("#E7A3AB"),glow:Rt("#B8535F"),spread:1.02},alert:{rot:.12,breathAmp:.03,breathFreq:1.3,wobble:.015,bright:1.2,inward:0,pulse:1,color:Rt("#F2B35E"),glow:Rt("#C9822B"),spread:1.03}},Bx=`
  uniform float uTime, uBreathAmp, uBreathFreq, uWobble, uInward, uPulse, uSize, uAmp, uPixel, uScale;
  attribute float aSeed;
  varying float vDepth, vTwinkle;
  void main() {
    vec3 p = position;
    float t = uTime;
    float wob = sin(t * 1.3 + aSeed * 40.0) * uWobble + sin(t * 0.7 + aSeed * 90.0) * uWobble * 0.6;
    float breath = 1.0 + sin(t * uBreathFreq) * uBreathAmp + uAmp * 0.10;
    float inward = fract(t * 0.18 + aSeed) * uInward;
    float ring = uPulse * 0.035 * sin(length(p) * 9.0 - t * 2.4);
    p *= (breath + wob + ring) * (1.0 - inward);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = clamp((-mv.z - 2.2) / 2.6, 0.0, 1.0);          // 0 = front, 1 = back
    vTwinkle = 0.75 + 0.25 * sin(t * 2.0 + aSeed * 120.0);
    gl_PointSize = uSize * uPixel * uScale * (1.0 - 0.4 * vDepth) * (4.1 / max(0.5, -mv.z)) * 1.35;
    gl_Position = projectionMatrix * mv;
  }`,kx=`
  uniform vec3 uColor, uGlow; uniform float uBright, uBase;
  varying float vDepth, vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float soft = smoothstep(1.0, 0.0, d);
    soft *= soft;
    vec3 col = mix(uColor, uGlow, vDepth * 0.85);
    float a = clamp(soft * (1.0 - 0.6 * vDepth) * vTwinkle * uBright * uBase * 1.9, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
  }`;function gu(n,e,t){const i=new Float32Array(n*3),s=new Float32Array(n),r=Math.PI*(3-Math.sqrt(5));for(let a=0;a<n;a++){const l=1-a/(n-1)*2,c=Math.sqrt(1-l*l),u=r*a,h=e*(1+(Math.random()-.5)*t);i.set([Math.cos(u)*c*h,l*h,Math.sin(u)*c*h],a*3),s[a]=Math.random()}const o=new Ln;return o.setAttribute("position",new qt(i,3)),o.setAttribute("aSeed",new qt(s,1)),o}class Vx{constructor(e,t=!1){_t(this,"renderer");_t(this,"scene",new Fx);_t(this,"camera",new jt(40,1,.1,20));_t(this,"group",new ps);_t(this,"mats",[]);_t(this,"target","idle");_t(this,"cur",{...or.idle,color:or.idle.color.clone(),glow:or.idle.glow.clone()});_t(this,"amp",0);_t(this,"ampTarget",0);_t(this,"raf",0);_t(this,"last",0);_t(this,"t",0);_t(this,"reduced",!1);_t(this,"running",!1);_t(this,"frame",e=>{if(!this.running)return;const t=Math.min(.05,(e-(this.last||e))/1e3);this.last=e,this.t+=t,this.ease(t);const i=this.cur,s=this.reduced?.15:1;this.group.rotation.y+=t*i.rot*s,this.group.rotation.x=Math.sin(this.t*.25)*.12*s,this.group.scale.setScalar(i.spread);for(const r of this.mats){const o=r.uniforms;o.uTime.value=this.t*s,o.uBreathAmp.value=i.breathAmp,o.uBreathFreq.value=i.breathFreq,o.uWobble.value=i.wobble,o.uInward.value=i.inward,o.uPulse.value=i.pulse,o.uBright.value=i.bright,o.uAmp.value=this.amp}this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.frame)});var r;this.canvas=e,this.renderer=new Ux({canvas:e,alpha:!0,antialias:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.75)),this.renderer.setClearColor(0,0),this.camera.position.z=4.1,this.reduced=((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;const[i,s]=t?[1400,500]:[2800,1100];for(const[o,a,l]of[[gu(i,1,.04),2.1,1],[gu(s,1.38,.18),1.5,.45]]){const c=new Pn({vertexShader:Bx,fragmentShader:kx,transparent:!0,depthWrite:!1,blending:aa,uniforms:{uTime:{value:0},uBreathAmp:{value:.02},uBreathFreq:{value:.8},uWobble:{value:.01},uInward:{value:0},uPulse:{value:0},uSize:{value:a},uAmp:{value:0},uPixel:{value:this.renderer.getPixelRatio()},uColor:{value:this.cur.color},uGlow:{value:this.cur.glow},uBright:{value:1},uBase:{value:l},uScale:{value:1}}});this.mats.push(c),this.group.add(new pu(o,c))}this.scene.add(this.group)}setState(e){this.target=e}setAmplitude(e){this.ampTarget=Math.max(0,Math.min(1,e))}resize(e,t){const i=Math.max(1,Math.floor(Math.min(e,t)));this.renderer.setSize(i,i,!1),this.canvas.style.width=`${i}px`,this.canvas.style.height=`${i}px`,this.camera.aspect=1,this.camera.updateProjectionMatrix();for(const s of this.mats)s.uniforms.uScale.value=i/150}ease(e){const t=or[this.target],i=1-Math.exp(-e*3.2),s=this.cur;s.rot+=(t.rot-s.rot)*i,s.breathAmp+=(t.breathAmp-s.breathAmp)*i,s.breathFreq+=(t.breathFreq-s.breathFreq)*i,s.wobble+=(t.wobble-s.wobble)*i,s.bright+=(t.bright-s.bright)*i,s.inward+=(t.inward-s.inward)*i,s.pulse+=(t.pulse-s.pulse)*i,s.spread+=(t.spread-s.spread)*i,s.color.lerp(t.color,i),s.glow.lerp(t.glow,i),this.amp+=(this.ampTarget-this.amp)*(1-Math.exp(-e*12))}start(){this.running||(this.running=!0,this.last=0,this.raf=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),this.group.traverse(e=>{e instanceof pu&&e.geometry.dispose()}),this.mats.forEach(e=>e.dispose()),this.renderer.dispose()}}const Vo=440,vu=340;function Ld({state:n,amplitude:e=0,spot:t,low:i}){const s=W.useRef(null),r=W.useRef(null),[o,a]=W.useState(!1);W.useEffect(()=>{const c=s.current;if(!c)return;let u;try{u=new Vx(c,i||(navigator.hardwareConcurrency??4)<=4)}catch{a(!0);return}r.current=u,u.resize(vu,vu),u.setState(n),u.start();const h=()=>document.hidden?u.stop():u.start();return document.addEventListener("visibilitychange",h),()=>{document.removeEventListener("visibilitychange",h),u.dispose(),r.current=null}},[i]),W.useEffect(()=>{var c;(c=r.current)==null||c.setState(n)},[n]),W.useEffect(()=>{var c;(c=r.current)==null||c.setAmplitude(e)},[e]);const l=t.size/Vo;return m.jsxs("div",{className:`sphere sphere-${n}`,"aria-hidden":"true",style:{transform:`translate(${t.cx-t.size/2}px, ${t.cy-t.size/2}px) scale(${l})`},children:[m.jsxs("svg",{className:"rings",viewBox:"0 0 440 440",width:Vo,height:Vo,children:[m.jsx("circle",{className:"r-glow",cx:"220",cy:"220",r:"214"}),m.jsx("circle",{className:"r-ticks",cx:"220",cy:"220",r:"206"}),m.jsx("circle",{className:"r-arcs",cx:"220",cy:"220",r:"192"}),m.jsx("circle",{className:"r-thin",cx:"220",cy:"220",r:"176"}),m.jsx("circle",{className:"r-arcs2",cx:"220",cy:"220",r:"184"}),[0,90,180,270].map(c=>m.jsx("line",{className:"r-cross",x1:"220",y1:"2",x2:"220",y2:"16",transform:`rotate(${c} 220 220)`},c))]}),o?m.jsx("div",{className:"sphere-fallback"}):null,m.jsx("canvas",{ref:s})]})}const Tl={idle:"Here",thinking:"Thinking",speaking:"Speaking",learning:"Learning",sleeping:"Resting",error:"Something went wrong",alert:"Concerned · watching"},_u=n=>n>=1e3?`${(n/1e3).toFixed(1)} Mb/s`:`${Math.round(n)} kb/s`,xu=n=>m.jsx("i",{className:"bar",children:m.jsx("b",{style:{width:`${Math.min(100,Math.max(2,n))}%`}})});function zx({tel:n}){return n?m.jsxs("div",{className:"readouts","aria-label":"System readouts",children:[m.jsxs("span",{className:"ro",children:[m.jsx("em",{children:"CPU"}),Math.round(n.cpu),"%",xu(n.cpu)]}),m.jsxs("span",{className:"ro",children:[m.jsx("em",{children:"MEM"}),Math.round(n.mem),"%",xu(n.mem)]}),m.jsxs("span",{className:"ro",children:[m.jsx("em",{children:"NET"}),"↓ ",_u(n.down)," ↑ ",_u(n.up)]}),m.jsxs("span",{className:"ro",children:[m.jsx("em",{children:"PROGRAMS"}),n.procs]}),n.battery?m.jsxs("span",{className:"ro",children:[m.jsx("em",{children:"POWER"}),n.battery.pct,"%",n.battery.plugged?" ⚡":""]}):null,n.app?m.jsxs("span",{className:"ro app",children:[m.jsx("em",{children:"FOCUS"}),n.app]}):null]}):null}const Dd="vanta.layout",Hx=8e3,Gx=()=>{try{const n=localStorage.getItem(Dd);return n==="calm"||n==="hud"?n:"auto"}catch{return"auto"}},jx=n=>{try{localStorage.setItem(Dd,n)}catch{}};function Wx(n,e,t,i){if(n==="hud")return{hud:!0,until:t};if(n==="calm")return{hud:!1,until:0};const s=e?i+Hx:t;return{hud:e||i<s,until:s}}function Xx(n,e){const[t,i]=W.useState(0),[,s]=W.useState(0),r=Wx(n,e,t,Date.now());return W.useEffect(()=>{r.until!==t&&i(r.until)},[r.until,t]),W.useEffect(()=>{if(n!=="auto"||e||!r.hud)return;const o=window.setTimeout(()=>s(a=>a+1),Math.max(50,t-Date.now()+20));return()=>window.clearTimeout(o)},[n,e,r.hud,t]),r.hud}const Nd="vanta.view",qx=()=>{try{return localStorage.getItem(Nd)==="pages"?"pages":"drawer"}catch{return"drawer"}},$x=n=>{try{localStorage.setItem(Nd,n)}catch{}},Id="vanta.fx",Yx=()=>{try{return localStorage.getItem(Id)==="low"?"low":"full"}catch{return"full"}},Kx=n=>{try{localStorage.setItem(Id,n)}catch{}};function Zx(){const[n,e]=W.useState(Yx),[t,i]=W.useState(!1);return W.useEffect(()=>{document.documentElement.dataset.fx=n},[n]),W.useEffect(()=>{if(n==="low")return;let r=0,o=0,a=0,l=0,c=0,u=performance.now();const h=d=>{if(!document.hidden&&o){const g=d-o;if(g<250&&(l+=g,a++),d-u>3e3&&a>20&&(c=l/a>34?c+1:0,a=0,l=0,u=d,c>=2)){e("low"),i(!0);return}}o=d,r=requestAnimationFrame(h)};return r=requestAnimationFrame(h),()=>cancelAnimationFrame(r)},[n]),[n,r=>{Kx(r),i(!1),e(r)},t]}function Jx(n){const e=n.search(/```stage/i);return e===-1?n:n.slice(0,e).trimEnd()}function Qx({messages:n,onOpenStage:e}){const t=W.useRef(null);return W.useEffect(()=>{var i;(i=t.current)==null||i.scrollIntoView({behavior:"smooth",block:"end"})},[n]),m.jsxs("div",{className:"chat",role:"log","aria-live":"polite",children:[n.length===0?m.jsx("div",{className:"empty-chat",children:"Ask me anything. I can read, build, check my own work, and keep an eye on this computer for you."}):m.jsx("div",{className:"chat-spacer"}),n.map(i=>m.jsxs("div",{className:`bubble ${i.role==="user"?"user":""} ${i.tag==="error"?"error":""}`,children:[i.tag==="heads-up"?m.jsxs("div",{className:"tag",children:[m.jsx("i",{}),"HEADS-UP"]}):null,i.tag==="error"?m.jsxs("div",{className:"tag",children:[m.jsx("i",{}),"HICCUP"]}):null,Jx(i.text),i.streaming?m.jsx("span",{className:"caret"}):null,i.stageId?m.jsx("div",{children:m.jsxs("button",{className:"stage-link",onClick:()=>e(i.stageId),children:["Open on stage: ",i.stageLabel]})}):null]},i.id)),m.jsx("div",{ref:t})]})}function ey({onSend:n,onVoiceError:e,disabled:t,autoFocus:i,onActivity:s}){const[r,o]=W.useState(""),[a,l]=W.useState(!1),c=W.useRef(null),u=()=>{r.trim()&&(n(r),o(""))};async function h(){var d;if(a){(d=c.current)==null||d.stop();return}try{const g=await navigator.mediaDevices.getUserMedia({audio:!0}),_=new MediaRecorder(g),y=[];_.ondataavailable=f=>y.push(f.data),_.onstop=async()=>{g.getTracks().forEach(p=>p.stop()),l(!1);const f=new FormData;f.append("audio",new Blob(y,{type:_.mimeType||"audio/webm"}),"voice.webm");try{const b=await(await fetch("/transcribe",{method:"POST",body:f})).json();if(b.text)o(v=>(v?v+" ":"")+b.text);else throw new Error(b.error||"no text")}catch(p){e(String(p))}},c.current=_,_.start(),l(!0)}catch{e("microphone permission denied")}}return m.jsxs("div",{className:"composer",children:[m.jsx("input",{"aria-label":"Message VANTA",placeholder:"Ask VANTA anything",value:r,disabled:t,autoFocus:i,onChange:d=>{o(d.target.value),s==null||s()},onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),u())}}),m.jsx("button",{className:`btn icon mic ${a?"rec":""}`,"aria-label":a?"Stop recording":"Voice","aria-pressed":a,onClick:h,children:m.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[m.jsx("rect",{x:"9",y:"3",width:"6",height:"12",rx:"3"}),m.jsx("path",{d:"M5 11a7 7 0 0 0 14 0M12 18v3"})]})}),m.jsx("button",{className:"btn icon send","aria-label":"Send",disabled:!r.trim(),onClick:u,children:m.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#07111F",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:m.jsx("path",{d:"M4 12h16M14 6l6 6-6 6"})})})]})}function ty(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}function Kr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Ka=n=>Array.isArray(n);function Ud(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function Ms(n){return typeof n=="string"||Array.isArray(n)}function yu(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function Al(n,e,t,i){if(typeof e=="function"){const[s,r]=yu(i);e=e(t!==void 0?t:n.custom,s,r)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,r]=yu(i);e=e(t!==void 0?t:n.custom,s,r)}return e}function Zr(n,e,t){const i=n.getProps();return Al(i,e,t!==void 0?t:i.custom,n)}const wl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rl=["initial",...wl],Ds=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_i=new Set(Ds),bn=n=>n*1e3,Tn=n=>n/1e3,ny={type:"spring",stiffness:500,damping:25,restSpeed:10},iy=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),sy={type:"keyframes",duration:.8},ry={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oy=(n,{keyframes:e})=>e.length>2?sy:_i.has(n)?n.startsWith("scale")?iy(e[1]):ny:ry;function Cl(n,e){return n?n[e]||n.default||n:void 0}const ay={useManualTiming:!1},ly=n=>n!==null;function Jr(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(ly),r=e&&t!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const Et=n=>n;function cy(n){let e=new Set,t=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const g=h&&i?e:t;return u&&r.add(c),g.has(c)||g.add(c),c},cancel:c=>{t.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[e,t]=[t,e],t.clear(),e.forEach(a),i=!1,s&&(s=!1,l.process(c))}};return l}const ar=["read","resolveKeyframes","update","preRender","render","postRender"],uy=40;function Fd(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>t=!0,o=ar.reduce((p,b)=>(p[b]=cy(r),p),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,g=()=>{const p=performance.now();t=!1,s.delta=i?1e3/60:Math.max(Math.min(p-s.timestamp,uy),1),s.timestamp=p,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),h.process(s),d.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(g))},_=()=>{t=!0,i=!0,s.isProcessing||n(g)};return{schedule:ar.reduce((p,b)=>{const v=o[b];return p[b]=(T,D=!1,R=!1)=>(t||_(),v.schedule(T,D,R)),p},{}),cancel:p=>{for(let b=0;b<ar.length;b++)o[ar[b]].cancel(p)},state:s,steps:o}}const{schedule:Ze,cancel:jn,state:vt,steps:zo}=Fd(typeof requestAnimationFrame<"u"?requestAnimationFrame:Et,!0),Od=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,hy=1e-7,dy=12;function fy(n,e,t,i,s){let r,o,a=0;do o=e+(t-e)/2,r=Od(o,i,s)-n,r>0?t=o:e=o;while(Math.abs(r)>hy&&++a<dy);return o}function Ns(n,e,t,i){if(n===e&&t===i)return Et;const s=r=>fy(r,0,1,n,t);return r=>r===0||r===1?r:Od(s(r),e,i)}const Bd=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,kd=n=>e=>1-n(1-e),Vd=Ns(.33,1.53,.69,.99),Pl=kd(Vd),zd=Bd(Pl),Hd=n=>(n*=2)<1?.5*Pl(n):.5*(2-Math.pow(2,-10*(n-1))),Ll=n=>1-Math.sin(Math.acos(n)),Gd=kd(Ll),jd=Bd(Ll),Wd=n=>/^0[^.\s]+$/u.test(n);function py(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Wd(n):!0}let Xd=Et;const qd=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),$d=n=>e=>typeof e=="string"&&e.startsWith(n),Yd=$d("--"),my=$d("var(--"),Dl=n=>my(n)?gy.test(n.split("/*")[0].trim()):!1,gy=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _y(n){const e=vy.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function Kd(n,e,t=1){const[i,s]=_y(n);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return qd(o)?parseFloat(o):o}return Dl(s)?Kd(s,e,t+1):s}const Wn=(n,e,t)=>t>e?e:t<n?n:t,ts={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Es={...ts,transform:n=>Wn(0,1,n)},lr={...ts,default:1},Is=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),kn=Is("deg"),an=Is("%"),Me=Is("px"),xy=Is("vh"),yy=Is("vw"),Su={...an,parse:n=>an.parse(n)/100,transform:n=>an.transform(n*100)},Sy=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Mu=n=>n===ts||n===Me,Eu=(n,e)=>parseFloat(n.split(", ")[e]),bu=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return Eu(s[1],e);{const r=i.match(/^matrix\((.+)\)$/u);return r?Eu(r[1],n):0}},My=new Set(["x","y","z"]),Ey=Ds.filter(n=>!My.has(n));function by(n){const e=[];return Ey.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Ki={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:bu(4,13),y:bu(5,14)};Ki.translateX=Ki.x;Ki.translateY=Ki.y;const Zd=n=>e=>e.test(n),Ty={test:n=>n==="auto",parse:n=>n},Jd=[ts,Me,an,kn,yy,xy,Ty],Tu=n=>Jd.find(Zd(n)),mi=new Set;let Za=!1,Ja=!1;function Qd(){if(Ja){const n=Array.from(mi).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=by(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ja=!1,Za=!1,mi.forEach(n=>n.complete()),mi.clear()}function ef(){mi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ja=!0)})}function Ay(){ef(),Qd()}class Nl{constructor(e,t,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(mi.add(this),Za||(Za=!0,Ze.read(ef),Ze.resolveKeyframes(Qd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&t){const l=i.readValue(t,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&o===void 0&&s.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),mi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,mi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _s=n=>Math.round(n*1e5)/1e5,Il=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wy(n){return n==null}const Ry=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ul=(n,e)=>t=>!!(typeof t=="string"&&Ry.test(t)&&t.startsWith(n)||e&&!wy(t)&&Object.prototype.hasOwnProperty.call(t,e)),tf=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(Il);return{[n]:parseFloat(s),[e]:parseFloat(r),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Cy=n=>Wn(0,255,n),Ho={...ts,transform:n=>Math.round(Cy(n))},fi={test:Ul("rgb","red"),parse:tf("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Ho.transform(n)+", "+Ho.transform(e)+", "+Ho.transform(t)+", "+_s(Es.transform(i))+")"};function Py(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Qa={test:Ul("#"),parse:Py,transform:fi.transform},Fi={test:Ul("hsl","hue"),parse:tf("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+an.transform(_s(e))+", "+an.transform(_s(t))+", "+_s(Es.transform(i))+")"},St={test:n=>fi.test(n)||Qa.test(n)||Fi.test(n),parse:n=>fi.test(n)?fi.parse(n):Fi.test(n)?Fi.parse(n):Qa.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?fi.transform(n):Fi.transform(n)},Ly=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Dy(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Il))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(Ly))===null||t===void 0?void 0:t.length)||0)>0}const nf="number",sf="color",Ny="var",Iy="var(",Au="${}",Uy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bs(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(Uy,l=>(St.test(l)?(i.color.push(r),s.push(sf),t.push(St.parse(l))):l.startsWith(Iy)?(i.var.push(r),s.push(Ny),t.push(l)):(i.number.push(r),s.push(nf),t.push(parseFloat(l))),++r,Au)).split(Au);return{values:t,split:a,indexes:i,types:s}}function rf(n){return bs(n).values}function of(n){const{split:e,types:t}=bs(n),i=e.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],s[o]!==void 0){const a=t[o];a===nf?r+=_s(s[o]):a===sf?r+=St.transform(s[o]):r+=s[o]}return r}}const Fy=n=>typeof n=="number"?0:n;function Oy(n){const e=rf(n);return of(n)(e.map(Fy))}const Xn={test:Dy,parse:rf,createTransformer:of,getAnimatableNone:Oy},By=new Set(["brightness","contrast","saturate","opacity"]);function ky(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Il)||[];if(!i)return n;const s=t.replace(i,"");let r=By.has(e)?1:0;return i!==t&&(r*=100),e+"("+r+s+")"}const Vy=/\b([a-z-]*)\(.*?\)/gu,el={...Xn,getAnimatableNone:n=>{const e=n.match(Vy);return e?e.map(ky).join(" "):n}},zy={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,radius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,backgroundPositionX:Me,backgroundPositionY:Me},Hy={rotate:kn,rotateX:kn,rotateY:kn,rotateZ:kn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:kn,skewX:kn,skewY:kn,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Es,originX:Su,originY:Su,originZ:Me},wu={...ts,transform:Math.round},Fl={...zy,...Hy,zIndex:wu,size:Me,fillOpacity:Es,strokeOpacity:Es,numOctaves:wu},Gy={...Fl,color:St,backgroundColor:St,outlineColor:St,fill:St,stroke:St,borderColor:St,borderTopColor:St,borderRightColor:St,borderBottomColor:St,borderLeftColor:St,filter:el,WebkitFilter:el},Ol=n=>Gy[n];function af(n,e){let t=Ol(n);return t!==el&&(t=Xn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const jy=new Set(["auto","none","0"]);function Wy(n,e,t){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!jy.has(r)&&bs(r).values.length&&(s=n[i]),i++}if(s&&t)for(const r of e)n[r]=af(t,s)}class lf extends Nl{constructor(e,t,i,s,r){super(e,t,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Dl(c))){const u=Kd(c,t.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Sy.has(i)||e.length!==2)return;const[s,r]=e,o=Tu(s),a=Tu(r);if(o!==a)if(Mu(o)&&Mu(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)py(e[s])&&i.push(s);i.length&&Wy(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ki[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const r=t.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=Ki[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Bl(n){return typeof n=="function"}let Tr;function Xy(){Tr=void 0}const ln={now:()=>(Tr===void 0&&ln.set(vt.isProcessing||ay.useManualTiming?vt.timestamp:performance.now()),Tr),set:n=>{Tr=n,queueMicrotask(Xy)}},Ru=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xn.test(n)||n==="0")&&!n.startsWith("url("));function qy(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function $y(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=n[n.length-1],o=Ru(s,e),a=Ru(r,e);return!o||!a?!1:qy(n)||(t==="spring"||Bl(t))&&i}const Yy=40;class cf{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ln.now(),this.options={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Yy?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Ay(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ln.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!$y(e,i,s,r))if(o)this.options.duration=0;else{l==null||l(Jr(e,this.options,t)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,t);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function uf(n,e){return e?n*(1e3/e):0}const Ky=5;function hf(n,e,t){const i=Math.max(e-Ky,0);return uf(t-n(i),e-i)}const Go=.001,Zy=.01,Jy=10,Qy=.05,eS=1;function tS({duration:n=800,bounce:e=.25,velocity:t=0,mass:i=1}){let s,r,o=1-e;o=Wn(Qy,eS,o),n=Wn(Zy,Jy,Tn(n)),o<1?(s=c=>{const u=c*o,h=u*n,d=u-t,g=tl(c,o),_=Math.exp(-h);return Go-d/g*_},r=c=>{const h=c*o*n,d=h*t+t,g=Math.pow(o,2)*Math.pow(c,2)*n,_=Math.exp(-h),y=tl(Math.pow(c,2),o);return(-s(c)+Go>0?-1:1)*((d-g)*_)/y}):(s=c=>{const u=Math.exp(-c*n),h=(c-t)*n+1;return-Go+u*h},r=c=>{const u=Math.exp(-c*n),h=(t-c)*(n*n);return u*h});const a=5/n,l=iS(s,r,a);if(n=bn(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const nS=12;function iS(n,e,t){let i=t;for(let s=1;s<nS;s++)i=i-n(i)/e(i);return i}function tl(n,e){return n*Math.sqrt(1-e*e)}const sS=["duration","bounce"],rS=["stiffness","damping","mass"];function Cu(n,e){return e.some(t=>n[t]!==void 0)}function oS(n){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!Cu(n,rS)&&Cu(n,sS)){const t=tS(n);e={...e,...t,mass:1},e.isResolvedFromDuration=!0}return e}function df({keyframes:n,restDelta:e,restSpeed:t,...i}){const s=n[0],r=n[n.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=oS({...i,velocity:-Tn(i.velocity||0)}),g=h||0,_=l/(2*Math.sqrt(a*c)),y=r-s,f=Tn(Math.sqrt(a/c)),p=Math.abs(y)<5;t||(t=p?.01:2),e||(e=p?.005:.5);let b;if(_<1){const v=tl(f,_);b=T=>{const D=Math.exp(-_*f*T);return r-D*((g+_*f*y)/v*Math.sin(v*T)+y*Math.cos(v*T))}}else if(_===1)b=v=>r-Math.exp(-f*v)*(y+(g+f*y)*v);else{const v=f*Math.sqrt(_*_-1);b=T=>{const D=Math.exp(-_*f*T),R=Math.min(v*T,300);return r-D*((g+_*f*y)*Math.sinh(R)+v*y*Math.cosh(R))/v}}return{calculatedDuration:d&&u||null,next:v=>{const T=b(v);if(d)o.done=v>=u;else{let D=0;_<1&&(D=v===0?bn(g):hf(b,v,T));const R=Math.abs(D)<=t,w=Math.abs(r-T)<=e;o.done=R&&w}return o.value=o.done?r:T,o}}}function Pu({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],d={done:!1,value:h},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,_=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=t*e;const f=h+y,p=o===void 0?f:o(f);p!==f&&(y=p-h);const b=P=>-y*Math.exp(-P/i),v=P=>p+b(P),T=P=>{const Y=b(P),x=v(P);d.done=Math.abs(Y)<=c,d.value=d.done?p:x};let D,R;const w=P=>{g(d.value)&&(D=P,R=df({keyframes:[d.value,_(d.value)],velocity:hf(v,P,d.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:P=>{let Y=!1;return!R&&D===void 0&&(Y=!0,T(P),w(P)),D!==void 0&&P>=D?R.next(P-D):(!Y&&T(P),d)}}}const aS=Ns(.42,0,1,1),lS=Ns(0,0,.58,1),ff=Ns(.42,0,.58,1),cS=n=>Array.isArray(n)&&typeof n[0]!="number",kl=n=>Array.isArray(n)&&typeof n[0]=="number",uS={linear:Et,easeIn:aS,easeInOut:ff,easeOut:lS,circIn:Ll,circInOut:jd,circOut:Gd,backIn:Pl,backInOut:zd,backOut:Vd,anticipate:Hd},Lu=n=>{if(kl(n)){Xd(n.length===4);const[e,t,i,s]=n;return Ns(e,t,i,s)}else if(typeof n=="string")return uS[n];return n},hS=(n,e)=>t=>e(n(t)),An=(...n)=>n.reduce(hS),Zi=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},it=(n,e,t)=>n+(e-n)*t;function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function dS({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,r=0,o=0;if(!e)s=r=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;s=jo(l,a,n+1/3),r=jo(l,a,n),o=jo(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function Br(n,e){return t=>t>0?e:n}const Wo=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},fS=[Qa,fi,Fi],pS=n=>fS.find(e=>e.test(n));function Du(n){const e=pS(n);if(!e)return!1;let t=e.parse(n);return e===Fi&&(t=dS(t)),t}const Nu=(n,e)=>{const t=Du(n),i=Du(e);if(!t||!i)return Br(n,e);const s={...t};return r=>(s.red=Wo(t.red,i.red,r),s.green=Wo(t.green,i.green,r),s.blue=Wo(t.blue,i.blue,r),s.alpha=it(t.alpha,i.alpha,r),fi.transform(s))},nl=new Set(["none","hidden"]);function mS(n,e){return nl.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function gS(n,e){return t=>it(n,e,t)}function Vl(n){return typeof n=="number"?gS:typeof n=="string"?Dl(n)?Br:St.test(n)?Nu:xS:Array.isArray(n)?pf:typeof n=="object"?St.test(n)?Nu:vS:Br}function pf(n,e){const t=[...n],i=t.length,s=n.map((r,o)=>Vl(r)(r,e[o]));return r=>{for(let o=0;o<i;o++)t[o]=s[o](r);return t}}function vS(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=Vl(n[s])(n[s],e[s]));return s=>{for(const r in i)t[r]=i[r](s);return t}}function _S(n,e){var t;const i=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=n.indexes[o][s[o]],l=(t=n.values[a])!==null&&t!==void 0?t:0;i[r]=l,s[o]++}return i}const xS=(n,e)=>{const t=Xn.createTransformer(e),i=bs(n),s=bs(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?nl.has(n)&&!s.values.length||nl.has(e)&&!i.values.length?mS(n,e):An(pf(_S(i,s),s.values),t):Br(n,e)};function mf(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?it(n,e,t):Vl(n)(n,e)}function yS(n,e,t){const i=[],s=t||mf,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(e){const l=Array.isArray(e)?e[o]||Et:e;a=An(l,a)}i.push(a)}return i}function SS(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const r=n.length;if(Xd(r===e.length),r===1)return()=>e[0];if(r===2&&n[0]===n[1])return()=>e[1];n[0]>n[r-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=yS(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<n.length-2&&!(c<n[u+1]);u++);const h=Zi(n[u],n[u+1],c);return o[u](h)};return t?c=>l(Wn(n[0],n[r-1],c)):l}function MS(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=Zi(0,e,i);n.push(it(t,1,s))}}function ES(n){const e=[0];return MS(e,n.length-1),e}function bS(n,e){return n.map(t=>t*e)}function TS(n,e){return n.map(()=>e||ff).splice(0,n.length-1)}function kr({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=cS(i)?i.map(Lu):Lu(i),r={done:!1,value:e[0]},o=bS(t&&t.length===e.length?t:ES(e),n),a=SS(o,e,{ease:Array.isArray(s)?s:TS(e,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}const Iu=2e4;function AS(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Iu;)e+=t,i=n.next(e);return e>=Iu?1/0:e}const wS=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ze.update(e,!0),stop:()=>jn(e),now:()=>vt.isProcessing?vt.timestamp:ln.now()}},RS={decay:Pu,inertia:Pu,tween:kr,keyframes:kr,spring:df},CS=n=>n/100;class zl extends cf{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:t,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Nl,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,t,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=Bl(t)?t:RS[t]||kr;let l,c;a!==kr&&typeof e[0]!="number"&&(l=An(CS,mf(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});r==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=AS(u));const{calculatedDuration:h}=u,d=h+s,g=d*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return r.next(0);const{delay:d,repeat:g,repeatType:_,repeatDelay:y,onUpdate:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),b=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let v=this.currentTime,T=r;if(g){const P=Math.min(this.currentTime,u)/h;let Y=Math.floor(P),x=P%1;!x&&P>=1&&(x=1),x===1&&Y--,Y=Math.min(Y,g+1),!!(Y%2)&&(_==="reverse"?(x=1-x,y&&(x-=y/h)):_==="mirror"&&(T=o)),v=Wn(0,1,x)*h}const D=b?{done:!1,value:l[0]}:T.next(v);a&&(D.value=a(D.value));let{done:R}=D;!b&&c!==null&&(R=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return w&&s!==void 0&&(D.value=Jr(l,this.options,s)),f&&f(D.value),w&&this.finish(),D}get duration(){const{resolved:e}=this;return e?Tn(e.calculatedDuration):0}get time(){return Tn(this.currentTime)}set time(e){e=bn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Tn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=wS,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),t&&t();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const PS=new Set(["opacity","clipPath","filter","transform"]),LS=10,DS=(n,e)=>{let t="";const i=Math.max(Math.round(e/LS),2);for(let s=0;s<i;s++)t+=n(Zi(0,i-1,s))+", ";return`linear(${t.substring(0,t.length-2)})`};function Hl(n){let e;return()=>(e===void 0&&(e=n()),e)}const NS={linearEasing:void 0};function IS(n,e){const t=Hl(n);return()=>{var i;return(i=NS[e])!==null&&i!==void 0?i:t()}}const Vr=IS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function gf(n){return!!(typeof n=="function"&&Vr()||!n||typeof n=="string"&&(n in il||Vr())||kl(n)||Array.isArray(n)&&n.every(gf))}const ms=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,il={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ms([0,.65,.55,1]),circOut:ms([.55,0,1,.45]),backIn:ms([.31,.01,.66,-.59]),backOut:ms([.33,1.53,.69,.99])};function vf(n,e){if(n)return typeof n=="function"&&Vr()?DS(n,e):kl(n)?ms(n):Array.isArray(n)?n.map(t=>vf(t,e)||il.easeOut):il[n]}function US(n,e,t,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:t};l&&(c.offset=l);const u=vf(a,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Uu(n,e){n.timeline=e,n.onfinish=null}const FS=Hl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zr=10,OS=2e4;function BS(n){return Bl(n.type)||n.type==="spring"||!gf(n.ease)}function kS(n,e){const t=new zl({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<OS;)i=t.sample(r),s.push(i.value),r+=zr;return{times:void 0,keyframes:s,duration:r-zr,ease:"linear"}}const _f={anticipate:Hd,backInOut:zd,circInOut:jd};function VS(n){return n in _f}class Fu extends cf{constructor(e){super(e);const{name:t,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new lf(r,(o,a)=>this.onKeyframesResolved(o,a),t,i,s),this.resolver.scheduleResolve()}initPlayback(e,t){var i;let{duration:s=300,times:r,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Vr()&&VS(o)&&(o=_f[o]),BS(this.options)){const{onComplete:d,onUpdate:g,motionValue:_,element:y,...f}=this.options,p=kS(e,f);e=p.keyframes,e.length===1&&(e[1]=e[0]),s=p.duration,r=p.times,o=p.ease,a="keyframes"}const h=US(l.owner.current,c,e,{...this.options,duration:s,times:r,ease:o});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?(Uu(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:d}=this.options;l.set(Jr(e,this.options,t)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:s,times:r,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Tn(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Tn(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=bn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Et;const{animation:i}=t;Uu(i,e)}return Et}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:s,type:r,ease:o,times:a}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...g}=this.options,_=new zl({...g,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),y=bn(this.time);c.setWithVelocity(_.sample(y-zr).value,_.sample(y).value,zr)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=e;return FS()&&i&&PS.has(i)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const zS=Hl(()=>window.ScrollTimeline!==void 0);class HS{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(s=>zS()&&s.attachTimeline?s.attachTimeline(e):t(s));return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function GS({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Gl=(n,e,t,i={},s,r)=>o=>{const a=Cl(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-bn(l);let u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:e,element:r?void 0:s};GS(a)||(u={...u,...oy(n,u)}),u.duration&&(u.duration=bn(u.duration)),u.repeatDelay&&(u.repeatDelay=bn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!r&&e.get()!==void 0){const d=Jr(u.keyframes,a);if(d!==void 0)return Ze.update(()=>{u.onUpdate(d),u.onComplete()}),new HS([])}return!r&&Fu.supports(u)?new Fu(u):new zl(u)},jS=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),WS=n=>Ka(n)?n[n.length-1]||0:n;function jl(n,e){n.indexOf(e)===-1&&n.push(e)}function Wl(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Xl{constructor(){this.subscriptions=[]}add(e){return jl(this.subscriptions,e),()=>Wl(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ou=30,XS=n=>!isNaN(parseFloat(n));class qS{constructor(e,t={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=ln.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ln.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=XS(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Xl);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ze.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ln.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ou)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Ou);return uf(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ts(n,e){return new qS(n,e)}function $S(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ts(t))}function YS(n,e){const t=Zr(n,e);let{transitionEnd:i={},transition:s={},...r}=t||{};r={...r,...i};for(const o in r){const a=WS(r[o]);$S(n,o,a)}}const ql=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),KS="framerAppearId",xf="data-"+ql(KS);function yf(n){return n.props[xf]}const Mt=n=>!!(n&&n.getVelocity);function ZS(n){return!!(Mt(n)&&n.add)}function sl(n,e){const t=n.getValue("willChange");if(ZS(t))return t.add(e)}function JS({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function Sf(n,e,{delay:t=0,transitionOverride:i,type:s}={}){var r;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const h in l){const d=n.getValue(h,(r=n.latestValues[h])!==null&&r!==void 0?r:null),g=l[h];if(g===void 0||u&&JS(u,h))continue;const _={delay:t,...Cl(o||{},h)};let y=!1;if(window.MotionHandoffAnimation){const p=yf(n);if(p){const b=window.MotionHandoffAnimation(p,h,Ze);b!==null&&(_.startTime=b,y=!0)}}sl(n,h),d.start(Gl(h,d,g,n.shouldReduceMotion&&_i.has(h)?{type:!1}:_,n,y));const f=d.animation;f&&c.push(f)}return a&&Promise.all(c).then(()=>{Ze.update(()=>{a&&YS(n,a)})}),c}function rl(n,e,t={}){var i;const s=Zr(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(r=t.transitionOverride);const o=s?()=>Promise.all(Sf(n,s,t)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=r;return QS(n,e,u+c,h,d,t)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(t.delay)])}function QS(n,e,t=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(eM).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(rl(c,e,{...r,delay:t+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function eM(n,e){return n.sortNodePosition(e)}function tM(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>rl(n,r,t));i=Promise.all(s)}else if(typeof e=="string")i=rl(n,e,t);else{const s=typeof e=="function"?Zr(n,e,t.custom):e;i=Promise.all(Sf(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const nM=Rl.length;function Mf(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Mf(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<nM;t++){const i=Rl[t],s=n.props[i];(Ms(s)||s===!1)&&(e[i]=s)}return e}const iM=[...wl].reverse(),sM=wl.length;function rM(n){return e=>Promise.all(e.map(({animation:t,options:i})=>tM(n,t,i)))}function oM(n){let e=rM(n),t=Bu(),i=!0;const s=l=>(c,u)=>{var h;const d=Zr(n,u,l==="exit"?(h=n.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:g,transitionEnd:_,...y}=d;c={...c,...y,..._}}return c};function r(l){e=l(n)}function o(l){const{props:c}=n,u=Mf(n.parent)||{},h=[],d=new Set;let g={},_=1/0;for(let f=0;f<sM;f++){const p=iM[f],b=t[p],v=c[p]!==void 0?c[p]:u[p],T=Ms(v),D=p===l?b.isActive:null;D===!1&&(_=f);let R=v===u[p]&&v!==c[p]&&T;if(R&&i&&n.manuallyAnimateOnMount&&(R=!1),b.protectedKeys={...g},!b.isActive&&D===null||!v&&!b.prevProp||Kr(v)||typeof v=="boolean")continue;const w=aM(b.prevProp,v);let P=w||p===l&&b.isActive&&!R&&T||f>_&&T,Y=!1;const x=Array.isArray(v)?v:[v];let E=x.reduce(s(p),{});D===!1&&(E={});const{prevResolvedValues:I={}}=b,F={...I,...E},B=K=>{P=!0,d.has(K)&&(Y=!0,d.delete(K)),b.needsAnimating[K]=!0;const H=n.getValue(K);H&&(H.liveStyle=!1)};for(const K in F){const H=E[K],se=I[K];if(g.hasOwnProperty(K))continue;let J=!1;Ka(H)&&Ka(se)?J=!Ud(H,se):J=H!==se,J?H!=null?B(K):d.add(K):H!==void 0&&d.has(K)?B(K):b.protectedKeys[K]=!0}b.prevProp=v,b.prevResolvedValues=E,b.isActive&&(g={...g,...E}),i&&n.blockInitialAnimation&&(P=!1),P&&(!(R&&w)||Y)&&h.push(...x.map(K=>({animation:K,options:{type:p}})))}if(d.size){const f={};d.forEach(p=>{const b=n.getBaseTarget(p),v=n.getValue(p);v&&(v.liveStyle=!0),f[p]=b??null}),h.push({animation:f})}let y=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(h):Promise.resolve()}function a(l,c){var u;if(t[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(d=>{var g;return(g=d.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),t[l].isActive=c;const h=o(l);for(const d in t)t[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>t,reset:()=>{t=Bu(),i=!0}}}function aM(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Ud(e,n):!1}function ii(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Bu(){return{animate:ii(!0),whileInView:ii(),whileHover:ii(),whileTap:ii(),whileDrag:ii(),whileFocus:ii(),exit:ii()}}class $n{constructor(e){this.isMounted=!1,this.node=e}update(){}}class lM extends $n{constructor(e){super(e),e.animationState||(e.animationState=oM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Kr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let cM=0;class uM extends $n{constructor(){super(...arguments),this.id=cM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const hM={animation:{Feature:lM},exit:{Feature:uM}},Ef=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function Qr(n,e="page"){return{point:{x:n[`${e}X`],y:n[`${e}Y`]}}}const dM=n=>e=>Ef(e)&&n(e,Qr(e));function En(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function wn(n,e,t,i){return En(n,e,dM(t),i)}const ku=(n,e)=>Math.abs(n-e);function fM(n,e){const t=ku(n.x,e.x),i=ku(n.y,e.y);return Math.sqrt(t**2+i**2)}class bf{constructor(e,t,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=qo(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,g=fM(h.offset,{x:0,y:0})>=3;if(!d&&!g)return;const{point:_}=h,{timestamp:y}=vt;this.history.push({..._,timestamp:y});const{onStart:f,onMove:p}=this.handlers;d||(f&&f(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Xo(d,this.transformPagePoint),Ze.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:g,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=qo(h.type==="pointercancel"?this.lastMoveEventInfo:Xo(d,this.transformPagePoint),this.history);this.startEvent&&g&&g(h,f),_&&_(h,f)},!Ef(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=i,this.contextWindow=s||window;const o=Qr(e),a=Xo(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=vt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=t;u&&u(e,qo(a,this.history)),this.removeListeners=An(wn(this.contextWindow,"pointermove",this.handlePointerMove),wn(this.contextWindow,"pointerup",this.handlePointerUp),wn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),jn(this.updatePoint)}}function Xo(n,e){return e?{point:e(n.point)}:n}function Vu(n,e){return{x:n.x-e.x,y:n.y-e.y}}function qo({point:n},e){return{point:n,delta:Vu(n,Tf(e)),offset:Vu(n,pM(e)),velocity:mM(e,.1)}}function pM(n){return n[0]}function Tf(n){return n[n.length-1]}function mM(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=Tf(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>bn(e)));)t--;if(!i)return{x:0,y:0};const r=Tn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Af(n){let e=null;return()=>{const t=()=>{e=null};return e===null?(e=n,t):!1}}const zu=Af("dragHorizontal"),Hu=Af("dragVertical");function wf(n){let e=!1;if(n==="y")e=Hu();else if(n==="x")e=zu();else{const t=zu(),i=Hu();t&&i?e=()=>{t(),i()}:(t&&t(),i&&i())}return e}function Rf(){const n=wf(!0);return n?(n(),!1):!0}function Oi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Cf=1e-4,gM=1-Cf,vM=1+Cf,Pf=.01,_M=0-Pf,xM=0+Pf;function Bt(n){return n.max-n.min}function yM(n,e,t){return Math.abs(n-e)<=t}function Gu(n,e,t,i=.5){n.origin=i,n.originPoint=it(e.min,e.max,n.origin),n.scale=Bt(t)/Bt(e),n.translate=it(t.min,t.max,n.origin)-n.originPoint,(n.scale>=gM&&n.scale<=vM||isNaN(n.scale))&&(n.scale=1),(n.translate>=_M&&n.translate<=xM||isNaN(n.translate))&&(n.translate=0)}function xs(n,e,t,i){Gu(n.x,e.x,t.x,i?i.originX:void 0),Gu(n.y,e.y,t.y,i?i.originY:void 0)}function ju(n,e,t){n.min=t.min+e.min,n.max=n.min+Bt(e)}function SM(n,e,t){ju(n.x,e.x,t.x),ju(n.y,e.y,t.y)}function Wu(n,e,t){n.min=e.min-t.min,n.max=n.min+Bt(e)}function ys(n,e,t){Wu(n.x,e.x,t.x),Wu(n.y,e.y,t.y)}function MM(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?it(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?it(t,n,i.max):Math.min(n,t)),n}function Xu(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function EM(n,{top:e,left:t,bottom:i,right:s}){return{x:Xu(n.x,t,s),y:Xu(n.y,e,i)}}function qu(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function bM(n,e){return{x:qu(n.x,e.x),y:qu(n.y,e.y)}}function TM(n,e){let t=.5;const i=Bt(n),s=Bt(e);return s>i?t=Zi(e.min,e.max-i,n.min):i>s&&(t=Zi(n.min,n.max-s,e.min)),Wn(0,1,t)}function AM(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const ol=.35;function wM(n=ol){return n===!1?n=0:n===!0&&(n=ol),{x:$u(n,"left","right"),y:$u(n,"top","bottom")}}function $u(n,e,t){return{min:Yu(n,e),max:Yu(n,t)}}function Yu(n,e){return typeof n=="number"?n:n[e]||0}const Ku=()=>({translate:0,scale:1,origin:0,originPoint:0}),Bi=()=>({x:Ku(),y:Ku()}),Zu=()=>({min:0,max:0}),ot=()=>({x:Zu(),y:Zu()});function Gt(n){return[n("x"),n("y")]}function Lf({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function RM({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function CM(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function $o(n){return n===void 0||n===1}function al({scale:n,scaleX:e,scaleY:t}){return!$o(n)||!$o(e)||!$o(t)}function ai(n){return al(n)||Df(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Df(n){return Ju(n.x)||Ju(n.y)}function Ju(n){return n&&n!=="0%"}function Hr(n,e,t){const i=n-t,s=e*i;return t+s}function Qu(n,e,t,i,s){return s!==void 0&&(n=Hr(n,s,i)),Hr(n,t,i)+e}function ll(n,e=0,t=1,i,s){n.min=Qu(n.min,e,t,i,s),n.max=Qu(n.max,e,t,i,s)}function Nf(n,{x:e,y:t}){ll(n.x,e.translate,e.scale,e.originPoint),ll(n.y,t.translate,t.scale,t.originPoint)}const eh=.999999999999,th=1.0000000000001;function PM(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=t[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Vi(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Nf(n,o)),i&&ai(r.latestValues)&&Vi(n,r.latestValues))}e.x<th&&e.x>eh&&(e.x=1),e.y<th&&e.y>eh&&(e.y=1)}function ki(n,e){n.min=n.min+e,n.max=n.max+e}function nh(n,e,t,i,s=.5){const r=it(n.min,n.max,s);ll(n,e,t,r,i)}function Vi(n,e){nh(n.x,e.x,e.scaleX,e.scale,e.originX),nh(n.y,e.y,e.scaleY,e.scale,e.originY)}function If(n,e){return Lf(CM(n.getBoundingClientRect(),e))}function LM(n,e,t){const i=If(n,t),{scroll:s}=e;return s&&(ki(i.x,s.offset.x),ki(i.y,s.offset.y)),i}const Uf=({current:n})=>n?n.ownerDocument.defaultView:null,DM=new WeakMap;class NM{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ot(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Qr(u,"page").point)},r=(u,h)=>{const{drag:d,dragPropagation:g,onDragStart:_}=this.getProps();if(d&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=wf(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(f=>{let p=this.getAxisMotionValue(f).get()||0;if(an.test(p)){const{projection:b}=this.visualElement;if(b&&b.layout){const v=b.layout.layoutBox[f];v&&(p=Bt(v)*(parseFloat(p)/100))}}this.originPoint[f]=p}),_&&Ze.postRender(()=>_(u,h)),sl(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:g,onDirectionLock:_,onDrag:y}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:f}=h;if(g&&this.currentDirection===null){this.currentDirection=IM(f),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",h.point,f),this.updateAxis("y",h.point,f),this.visualElement.render(),y&&y(u,h)},a=(u,h)=>this.stop(u,h),l=()=>Gt(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new bf(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Uf(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Ze.postRender(()=>r(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!cr(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=MM(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;t&&Oi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=EM(s.layoutBox,t):this.constraints=!1,this.elastic=wM(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Gt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=AM(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Oi(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=LM(i,s.root,this.visualElement.getTransformPagePoint());let o=bM(s.layout.layoutBox,r);if(t){const a=t(RM(o));this.hasMutatedConstraints=!!a,a&&(o=Lf(a))}return o}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Gt(u=>{if(!cr(u,t,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,g=s?40:1e7,_={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(a)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return sl(this.visualElement,e),i.start(Gl(e,i,0,t,this.visualElement,!1))}stopAnimation(){Gt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gt(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gt(t=>{const{drag:i}=this.getProps();if(!cr(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(t);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[t];r.set(e[t]-it(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Oi(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Gt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=TM({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gt(o=>{if(!cr(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(it(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;DM.set(this.visualElement,this);const e=this.visualElement.current,t=wn(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Oi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Ze.read(i);const o=En(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gt(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),t(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=ol,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function cr(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function IM(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class UM extends $n{constructor(e){super(e),this.removeGroupControls=Et,this.removeListeners=Et,this.controls=new NM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Et}unmount(){this.removeGroupControls(),this.removeListeners()}}const ih=n=>(e,t)=>{n&&Ze.postRender(()=>n(e,t))};class FM extends $n{constructor(){super(...arguments),this.removePointerDownListener=Et}onPointerDown(e){this.session=new bf(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Uf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ih(e),onStart:ih(t),onMove:i,onEnd:(r,o)=>{delete this.session,s&&Ze.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=wn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const eo=W.createContext(null);function OM(){const n=W.useContext(eo);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:i}=n,s=W.useId();W.useEffect(()=>i(s),[]);const r=W.useCallback(()=>t&&t(s),[s,t]);return!e&&t?[!1,r]:[!0]}const $l=W.createContext({}),Ff=W.createContext({}),Ar={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sh(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const cs={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Me.test(n))n=parseFloat(n);else return n;const t=sh(n,e.target.x),i=sh(n,e.target.y);return`${t}% ${i}%`}},BM={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=Xn.parse(n);if(s.length>5)return i;const r=Xn.createTransformer(n),o=typeof s[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=it(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}},Gr={};function kM(n){Object.assign(Gr,n)}const{schedule:Yl}=Fd(queueMicrotask,!1);class VM extends W.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;kM(zM),r&&(t.group&&t.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Ar.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==t||t===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||Ze.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Yl.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Of(n){const[e,t]=OM(),i=W.useContext($l);return m.jsx(VM,{...n,layoutGroup:i,switchLayoutGroup:W.useContext(Ff),isPresent:e,safeToRemove:t})}const zM={borderRadius:{...cs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomLeftRadius:cs,borderBottomRightRadius:cs,boxShadow:BM},Bf=["TopLeft","TopRight","BottomLeft","BottomRight"],HM=Bf.length,rh=n=>typeof n=="string"?parseFloat(n):n,oh=n=>typeof n=="number"||Me.test(n);function GM(n,e,t,i,s,r){s?(n.opacity=it(0,t.opacity!==void 0?t.opacity:1,jM(i)),n.opacityExit=it(e.opacity!==void 0?e.opacity:1,0,WM(i))):r&&(n.opacity=it(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let o=0;o<HM;o++){const a=`border${Bf[o]}Radius`;let l=ah(e,a),c=ah(t,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||oh(l)===oh(c)?(n[a]=Math.max(it(rh(l),rh(c),i),0),(an.test(c)||an.test(l))&&(n[a]+="%")):n[a]=c}(e.rotate||t.rotate)&&(n.rotate=it(e.rotate||0,t.rotate||0,i))}function ah(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const jM=kf(0,.5,Gd),WM=kf(.5,.95,Et);function kf(n,e,t){return i=>i<n?0:i>e?1:t(Zi(n,e,i))}function lh(n,e){n.min=e.min,n.max=e.max}function zt(n,e){lh(n.x,e.x),lh(n.y,e.y)}function ch(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function uh(n,e,t,i,s){return n-=e,n=Hr(n,1/t,i),s!==void 0&&(n=Hr(n,1/s,i)),n}function XM(n,e=0,t=1,i=.5,s,r=n,o=n){if(an.test(e)&&(e=parseFloat(e),e=it(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=it(r.min,r.max,i);n===r&&(a-=e),n.min=uh(n.min,e,t,a,s),n.max=uh(n.max,e,t,a,s)}function hh(n,e,[t,i,s],r,o){XM(n,e[t],e[i],e[s],e.scale,r,o)}const qM=["x","scaleX","originX"],$M=["y","scaleY","originY"];function dh(n,e,t,i){hh(n.x,e,qM,t?t.x:void 0,i?i.x:void 0),hh(n.y,e,$M,t?t.y:void 0,i?i.y:void 0)}function fh(n){return n.translate===0&&n.scale===1}function Vf(n){return fh(n.x)&&fh(n.y)}function ph(n,e){return n.min===e.min&&n.max===e.max}function YM(n,e){return ph(n.x,e.x)&&ph(n.y,e.y)}function mh(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function zf(n,e){return mh(n.x,e.x)&&mh(n.y,e.y)}function gh(n){return Bt(n.x)/Bt(n.y)}function vh(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class KM{constructor(){this.members=[]}add(e){jl(this.members,e),e.scheduleRender()}remove(e){if(Wl(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ZM(n,e,t){let i="";const s=n.x.translate/e.x,r=n.y.translate/e.y,o=(t==null?void 0:t.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:g,skewY:_}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),g&&(i+=`skewX(${g}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=n.x.scale*e.x,l=n.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const JM=(n,e)=>n.depth-e.depth;class QM{constructor(){this.children=[],this.isDirty=!1}add(e){jl(this.children,e),this.isDirty=!0}remove(e){Wl(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JM),this.isDirty=!1,this.children.forEach(e)}}function wr(n){const e=Mt(n)?n.get():n;return jS(e)?e.toValue():e}function eE(n,e){const t=ln.now(),i=({timestamp:s})=>{const r=s-t;r>=e&&(jn(i),n(r-e))};return Ze.read(i,!0),()=>jn(i)}function tE(n){return n instanceof SVGElement&&n.tagName!=="svg"}function nE(n,e,t){const i=Mt(n)?n:Ts(n);return i.start(Gl("",i,e,t)),i.animation}const li={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},gs=typeof window<"u"&&window.MotionDebug!==void 0,Yo=["","X","Y","Z"],iE={visibility:"hidden"},_h=1e3;let sE=0;function Ko(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Hf(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=yf(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ze,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Hf(i)}function Gf({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=sE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,gs&&(li.totalNodes=li.resolvedTargetDeltas=li.recalculatedProjection=0),this.nodes.forEach(aE),this.nodes.forEach(dE),this.nodes.forEach(fE),this.nodes.forEach(lE),gs&&window.MotionDebug.record(li)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new QM)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Xl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tE(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let h;const d=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=eE(d,250),Ar.hasAnimatedSinceResize&&(Ar.hasAnimatedSinceResize=!1,this.nodes.forEach(yh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||_E,{onLayoutAnimationStart:f,onLayoutAnimationComplete:p}=u.getProps(),b=!this.targetLayout||!zf(this.targetLayout,_)||g,v=!d&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||d&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,v);const T={...Cl(y,"layout"),onPlay:f,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T)}else d||yh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pE),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Hf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xh);return}this.isUpdating||this.nodes.forEach(uE),this.isUpdating=!1,this.nodes.forEach(hE),this.nodes.forEach(rE),this.nodes.forEach(oE),this.clearAllSnapshots();const a=ln.now();vt.delta=Wn(0,1e3/60,a-vt.timestamp),vt.timestamp=a,vt.isProcessing=!0,zo.update.process(vt),zo.preRender.process(vt),zo.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cE),this.sharedNodes.forEach(mE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Vf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ai(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),xE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return ot();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(yE))){const{scroll:u}=this.root;u&&(ki(l.x,u.offset.x),ki(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=ot();if(zt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&zt(l,o),ki(l.x,h.offset.x),ki(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=ot();zt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Vi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ai(u.latestValues)&&Vi(l,u.latestValues)}return ai(this.latestValues)&&Vi(l,this.latestValues),l}removeTransform(o){const a=ot();zt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ai(c.latestValues))continue;al(c.latestValues)&&c.updateSnapshot();const u=ot(),h=c.measurePageBox();zt(u,h),dh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ai(this.latestValues)&&dh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=vt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),ys(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ot(),this.targetWithTransforms=ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),SM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),Nf(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),ys(this.relativeTargetOrigin,this.target,g.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}gs&&li.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||al(this.parent.latestValues)||Df(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;zt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,g=this.treeScale.y;PM(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ot());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ch(this.prevProjectionDelta.x,this.projectionDelta.x),ch(this.prevProjectionDelta.y,this.projectionDelta.y)),xs(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==g||!vh(this.projectionDelta.x,this.prevProjectionDelta.x)||!vh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),gs&&li.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Bi(),this.projectionDelta=Bi(),this.projectionDeltaWithTransform=Bi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Bi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ot(),g=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=g!==_,f=this.getStack(),p=!f||f.members.length<=1,b=!!(y&&!p&&this.options.crossfade===!0&&!this.path.some(vE));this.animationProgress=0;let v;this.mixTargetDelta=T=>{const D=T/1e3;Sh(h.x,o.x,D),Sh(h.y,o.y,D),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ys(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gE(this.relativeTarget,this.relativeTargetOrigin,d,D),v&&YM(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=ot()),zt(v,this.relativeTarget)),y&&(this.animationValues=u,GM(u,c,this.latestValues,D,b,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(jn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ze.update(()=>{Ar.hasAnimatedSinceResize=!0,this.currentAnimation=nE(0,_h,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_h),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&jf(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ot();const h=Bt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=Bt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}zt(a,l),Vi(a,u),xs(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new KM),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Ko("z",o,c,this.animationValues);for(let u=0;u<Yo.length;u++)Ko(`rotate${Yo[u]}`,o,c,this.animationValues),Ko(`skew${Yo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return iE;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=wr(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=wr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ai(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=ZM(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Gr){if(d[y]===void 0)continue;const{correct:f,applyTo:p}=Gr[y],b=c.transform==="none"?d[y]:f(d[y],h);if(p){const v=p.length;for(let T=0;T<v;T++)c[p[T]]=b}else c[y]=b}return this.options.layoutId&&(c.pointerEvents=h===this?wr(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xh),this.root.sharedNodes.clear()}}}function rE(n){n.updateLayout()}function oE(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=t.source!==n.layout.source;r==="size"?Gt(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],g=Bt(d);d.min=i[h].min,d.max=d.min+g}):jf(r,t.layoutBox,i)&&Gt(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],g=Bt(i[h]);d.max=d.min+g,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+g)});const a=Bi();xs(a,i,t.layoutBox);const l=Bi();o?xs(l,n.applyTransform(s,!0),t.measuredBox):xs(l,i,t.layoutBox);const c=!Vf(a);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:g}=h;if(d&&g){const _=ot();ys(_,t.layoutBox,d.layoutBox);const y=ot();ys(y,i,g.layoutBox),zf(_,y)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=_,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function aE(n){gs&&li.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function lE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function cE(n){n.clearSnapshot()}function xh(n){n.clearMeasurements()}function uE(n){n.isLayoutDirty=!1}function hE(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function yh(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function dE(n){n.resolveTargetDelta()}function fE(n){n.calcProjection()}function pE(n){n.resetSkewAndRotation()}function mE(n){n.removeLeadSnapshot()}function Sh(n,e,t){n.translate=it(e.translate,0,t),n.scale=it(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Mh(n,e,t,i){n.min=it(e.min,t.min,i),n.max=it(e.max,t.max,i)}function gE(n,e,t,i){Mh(n.x,e.x,t.x,i),Mh(n.y,e.y,t.y,i)}function vE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const _E={duration:.45,ease:[.4,0,.1,1]},Eh=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),bh=Eh("applewebkit/")&&!Eh("chrome/")?Math.round:Et;function Th(n){n.min=bh(n.min),n.max=bh(n.max)}function xE(n){Th(n.x),Th(n.y)}function jf(n,e,t){return n==="position"||n==="preserve-aspect"&&!yM(gh(e),gh(t),.2)}function yE(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const SE=Gf({attachResizeListener:(n,e)=>En(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zo={current:void 0},Wf=Gf({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Zo.current){const n=new SE({});n.mount(window),n.setOptions({layoutScroll:!0}),Zo.current=n}return Zo.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ME={pan:{Feature:FM},drag:{Feature:UM,ProjectionNode:Wf,MeasureLayout:Of}};function Ah(n,e){const t=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",s=(r,o)=>{if(r.pointerType==="touch"||Rf())return;const a=n.getProps();n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",e);const l=a[i];l&&Ze.postRender(()=>l(r,o))};return wn(n.current,t,s,{passive:!n.getProps()[i]})}class EE extends $n{mount(){this.unmount=An(Ah(this.node,!0),Ah(this.node,!1))}unmount(){}}class bE extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=An(En(this.node.current,"focus",()=>this.onFocus()),En(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Xf=(n,e)=>e?n===e?!0:Xf(n,e.parentElement):!1;function Jo(n,e){if(!e)return;const t=new PointerEvent("pointer"+n);e(t,Qr(t))}class TE extends $n{constructor(){super(...arguments),this.removeStartListeners=Et,this.removeEndListeners=Et,this.removeAccessibleListeners=Et,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=wn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps(),d=!h&&!Xf(this.node.current,a.target)?u:c;d&&Ze.update(()=>d(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=wn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=An(r,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Jo("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&Ze.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=En(this.node.current,"keyup",o),Jo("down",(a,l)=>{this.startPress(a,l)})},t=En(this.node.current,"keydown",e),i=()=>{this.isPressing&&Jo("cancel",(r,o)=>this.cancelPress(r,o))},s=En(this.node.current,"blur",i);this.removeAccessibleListeners=An(t,s)}}startPress(e,t){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Ze.postRender(()=>i(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Rf()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Ze.postRender(()=>i(e,t))}mount(){const e=this.node.getProps(),t=wn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=En(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=An(t,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const cl=new WeakMap,Qo=new WeakMap,AE=n=>{const e=cl.get(n.target);e&&e(n)},wE=n=>{n.forEach(AE)};function RE({root:n,...e}){const t=n||document;Qo.has(t)||Qo.set(t,{});const i=Qo.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(wE,{root:n,...e})),i[s]}function CE(n,e,t){const i=RE(e);return cl.set(n,t),i.observe(n),()=>{cl.delete(n),i.unobserve(n)}}const PE={some:0,all:1};class LE extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:r}=e,o={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:PE[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return CE(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(DE(e,t))&&this.startObserver()}unmount(){}}function DE({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const NE={inView:{Feature:LE},tap:{Feature:TE},focus:{Feature:bE},hover:{Feature:EE}},IE={layout:{ProjectionNode:Wf,MeasureLayout:Of}},Kl=W.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),to=W.createContext({}),Zl=typeof window<"u",qf=Zl?W.useLayoutEffect:W.useEffect,$f=W.createContext({strict:!1});function UE(n,e,t,i,s){var r,o;const{visualElement:a}=W.useContext(to),l=W.useContext($f),c=W.useContext(eo),u=W.useContext(Kl).reducedMotion,h=W.useRef();i=i||l.renderer,!h.current&&i&&(h.current=i(n,{visualState:e,parent:a,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,g=W.useContext(Ff);d&&!d.projection&&s&&(d.type==="html"||d.type==="svg")&&FE(h.current,t,s,g);const _=W.useRef(!1);W.useInsertionEffect(()=>{d&&_.current&&d.update(t,c)});const y=t[xf],f=W.useRef(!!y&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return qf(()=>{d&&(_.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Yl.render(d.render),f.current&&d.animationState&&d.animationState.animateChanges())}),W.useEffect(()=>{d&&(!f.current&&d.animationState&&d.animationState.animateChanges(),f.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,y)}),f.current=!1))}),d}function FE(n,e,t,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Yf(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Oi(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Yf(n){if(n)return n.options.allowProjection!==!1?n.projection:Yf(n.parent)}function OE(n,e,t){return W.useCallback(i=>{i&&n.mount&&n.mount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Oi(t)&&(t.current=i))},[e])}function no(n){return Kr(n.animate)||Rl.some(e=>Ms(n[e]))}function Kf(n){return!!(no(n)||n.variants)}function BE(n,e){if(no(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Ms(t)?t:void 0,animate:Ms(i)?i:void 0}}return n.inherit!==!1?e:{}}function kE(n){const{initial:e,animate:t}=BE(n,W.useContext(to));return W.useMemo(()=>({initial:e,animate:t}),[wh(e),wh(t)])}function wh(n){return Array.isArray(n)?n.join(" "):n}const Rh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ji={};for(const n in Rh)Ji[n]={isEnabled:e=>Rh[n].some(t=>!!e[t])};function VE(n){for(const e in n)Ji[e]={...Ji[e],...n[e]}}const zE=Symbol.for("motionComponentSymbol");function HE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:s}){n&&VE(n);function r(a,l){let c;const u={...W.useContext(Kl),...a,layoutId:GE(a)},{isStatic:h}=u,d=kE(a),g=i(a,h);if(!h&&Zl){jE();const _=WE(u);c=_.MeasureLayout,d.visualElement=UE(s,g,u,e,_.ProjectionNode)}return m.jsxs(to.Provider,{value:d,children:[c&&d.visualElement?m.jsx(c,{visualElement:d.visualElement,...u}):null,t(s,a,OE(g,d.visualElement,l),g,h,d.visualElement)]})}const o=W.forwardRef(r);return o[zE]=s,o}function GE({layoutId:n}){const e=W.useContext($l).id;return e&&n!==void 0?e+"-"+n:n}function jE(n,e){W.useContext($f).strict}function WE(n){const{drag:e,layout:t}=Ji;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const XE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jl(n){return typeof n!="string"||n.includes("-")?!1:!!(XE.indexOf(n)>-1||/[A-Z]/u.test(n))}function Zf(n,{style:e,vars:t},i,s){Object.assign(n.style,e,s&&s.getProjectionStyles(i));for(const r in t)n.style.setProperty(r,t[r])}const Jf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qf(n,e,t,i){Zf(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(Jf.has(s)?s:ql(s),e.attrs[s])}function ep(n,{layout:e,layoutId:t}){return _i.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Gr[n]||n==="opacity")}function Ql(n,e,t){var i;const{style:s}=n,r={};for(const o in s)(Mt(s[o])||e.style&&Mt(e.style[o])||ep(o,n)||((i=t==null?void 0:t.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function tp(n,e,t){const i=Ql(n,e,t);for(const s in n)if(Mt(n[s])||Mt(e[s])){const r=Ds.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function ec(n){const e=W.useRef(null);return e.current===null&&(e.current=n()),e.current}function qE({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},i,s,r){const o={latestValues:$E(i,s,r,n),renderState:e()};return t&&(o.mount=a=>t(i,a,o)),o}const np=n=>(e,t)=>{const i=W.useContext(to),s=W.useContext(eo),r=()=>qE(n,e,i,s);return t?r():ec(r)};function $E(n,e,t,i){const s={},r=i(n,{});for(const d in r)s[d]=wr(r[d]);let{initial:o,animate:a}=n;const l=no(n),c=Kf(n);e&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=t?t.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Kr(h)){const d=Array.isArray(h)?h:[h];for(let g=0;g<d.length;g++){const _=Al(n,d[g]);if(_){const{transitionEnd:y,transition:f,...p}=_;for(const b in p){let v=p[b];if(Array.isArray(v)){const T=u?v.length-1:0;v=v[T]}v!==null&&(s[b]=v)}for(const b in y)s[b]=y[b]}}}return s}const tc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),ip=()=>({...tc(),attrs:{}}),sp=(n,e)=>e&&typeof n=="number"?e.transform(n):n,YE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KE=Ds.length;function ZE(n,e,t){let i="",s=!0;for(let r=0;r<KE;r++){const o=Ds[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||t){const c=sp(a,Fl[o]);if(!l){s=!1;const u=YE[o]||o;i+=`${u}(${c}) `}t&&(e[o]=c)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}function nc(n,e,t){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in e){const c=e[l];if(_i.has(l)){o=!0;continue}else if(Yd(l)){s[l]=c;continue}else{const u=sp(c,Fl[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(e.transform||(o||t?i.transform=ZE(e,n.transform,t):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}function Ch(n,e,t){return typeof n=="string"?n:Me.transform(e+t*n)}function JE(n,e,t){const i=Ch(e,n.x,n.width),s=Ch(t,n.y,n.height);return`${i} ${s}`}const QE={offset:"stroke-dashoffset",array:"stroke-dasharray"},eb={offset:"strokeDashoffset",array:"strokeDasharray"};function tb(n,e,t=1,i=0,s=!0){n.pathLength=1;const r=s?QE:eb;n[r.offset]=Me.transform(-i);const o=Me.transform(e),a=Me.transform(t);n[r.array]=`${o} ${a}`}function ic(n,{attrX:e,attrY:t,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if(nc(n,c,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:g,dimensions:_}=n;d.transform&&(_&&(g.transform=d.transform),delete d.transform),_&&(s!==void 0||r!==void 0||g.transform)&&(g.transformOrigin=JE(_,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(d.x=e),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),o!==void 0&&tb(d,o,a,l,!1)}const sc=n=>typeof n=="string"&&n.toLowerCase()==="svg",nb={useVisualState:np({scrapeMotionValuesFromProps:tp,createRenderState:ip,onMount:(n,e,{renderState:t,latestValues:i})=>{Ze.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),Ze.render(()=>{ic(t,i,sc(e.tagName),n.transformTemplate),Qf(e,t)})}})},ib={useVisualState:np({scrapeMotionValuesFromProps:Ql,createRenderState:tc})};function rp(n,e,t){for(const i in e)!Mt(e[i])&&!ep(i,t)&&(n[i]=e[i])}function sb({transformTemplate:n},e){return W.useMemo(()=>{const t=tc();return nc(t,e,n),Object.assign({},t.vars,t.style)},[e])}function rb(n,e){const t=n.style||{},i={};return rp(i,t,n),Object.assign(i,sb(n,e)),i}function ob(n,e){const t={},i=rb(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const ab=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||ab.has(n)}let op=n=>!jr(n);function lb(n){n&&(op=e=>e.startsWith("on")?!jr(e):n(e))}try{lb(require("@emotion/is-prop-valid").default)}catch{}function cb(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(op(s)||t===!0&&jr(s)||!e&&!jr(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function ub(n,e,t,i){const s=W.useMemo(()=>{const r=ip();return ic(r,e,sc(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(n.style){const r={};rp(r,n.style,n),s.style={...r,...s.style}}return s}function hb(n=!1){return(t,i,s,{latestValues:r},o)=>{const l=(Jl(t)?ub:ob)(i,r,o,t),c=cb(i,typeof t=="string",n),u=t!==W.Fragment?{...c,...l,ref:s}:{},{children:h}=i,d=W.useMemo(()=>Mt(h)?h.get():h,[h]);return W.createElement(t,{...u,children:d})}}function db(n,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...Jl(i)?nb:ib,preloadedFeatures:n,useRender:hb(s),createVisualElement:e,Component:i};return HE(o)}}const ul={current:null},ap={current:!1};function fb(){if(ap.current=!0,!!Zl)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ul.current=n.matches;n.addListener(e),e()}else ul.current=!1}function pb(n,e,t){for(const i in e){const s=e[i],r=t[i];if(Mt(s))n.addValue(i,s);else if(Mt(r))n.addValue(i,Ts(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,Ts(o!==void 0?o:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Ph=new WeakMap,mb=[...Jd,St,Xn],gb=n=>mb.find(Zd(n)),Lh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class vb{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=ln.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Ze.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=no(t),this.isVariantNode=Kf(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in h){const g=h[d];l[d]!==void 0&&Mt(g)&&g.set(l[d],!1)}}mount(e){this.current=e,Ph.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),ap.current||fb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ul.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ph.delete(this.current),this.projection&&this.projection.unmount(),jn(this.notifyUpdate),jn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=_i.has(e),s=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ze.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),r(),o&&o(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ji){const t=Ji[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Lh.length;i++){const s=Lh[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=e[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=pb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Ts(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(qd(s)||Wd(s))?s=parseFloat(s):!gb(s)&&Xn.test(t)&&(s=af(e,t)),this.setBaseTarget(e,Mt(s)?s.get():s)),Mt(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=Al(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);o&&(s=o[e])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Mt(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Xl),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class lp extends vb{constructor(){super(...arguments),this.KeyframeResolver=lf}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}}function _b(n){return window.getComputedStyle(n)}class xb extends lp{constructor(){super(...arguments),this.type="html",this.renderInstance=Zf}readValueFromInstance(e,t){if(_i.has(t)){const i=Ol(t);return i&&i.default||0}else{const i=_b(e),s=(Yd(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return If(e,t)}build(e,t,i){nc(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Ql(e,t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class yb extends lp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ot}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(_i.has(t)){const i=Ol(t);return i&&i.default||0}return t=Jf.has(t)?t:ql(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return tp(e,t,i)}build(e,t,i){ic(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,s){Qf(e,t,i,s)}mount(e){this.isSVGTag=sc(e.tagName),super.mount(e)}}const Sb=(n,e)=>Jl(n)?new yb(e):new xb(e,{allowProjection:n!==W.Fragment}),Mb=db({...hM,...NE,...ME,...IE},Sb),rc=ty(Mb);class Eb extends W.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function bb({children:n,isPresent:e}){const t=W.useId(),i=W.useRef(null),s=W.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=W.useContext(Kl);return W.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=t;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),m.jsx(Eb,{isPresent:e,childRef:i,sizeRef:s,children:W.cloneElement(n,{ref:i})})}const Tb=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=ec(Ab),l=W.useId(),c=W.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=W.useMemo(()=>({id:l,initial:e,isPresent:t,custom:s,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),r?[Math.random(),c]:[t,c]);return W.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[t]),W.useEffect(()=>{!t&&!a.size&&i&&i()},[t]),o==="popLayout"&&(n=m.jsx(bb,{isPresent:t,children:n})),m.jsx(eo.Provider,{value:u,children:n})};function Ab(){return new Map}const ur=n=>n.key||"";function Dh(n){const e=[];return W.Children.forEach(n,t=>{W.isValidElement(t)&&e.push(t)}),e}const cp=({children:n,exitBeforeEnter:e,custom:t,initial:i=!0,onExitComplete:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=W.useMemo(()=>Dh(n),[n]),l=a.map(ur),c=W.useRef(!0),u=W.useRef(a),h=ec(()=>new Map),[d,g]=W.useState(a),[_,y]=W.useState(a);qf(()=>{c.current=!1,u.current=a;for(let b=0;b<_.length;b++){const v=ur(_[b]);l.includes(v)?h.delete(v):h.get(v)!==!0&&h.set(v,!1)}},[_,l.length,l.join("-")]);const f=[];if(a!==d){let b=[...a];for(let v=0;v<_.length;v++){const T=_[v],D=ur(T);l.includes(D)||(b.splice(v,0,T),f.push(T))}o==="wait"&&f.length&&(b=f),y(Dh(b)),g(a);return}const{forceRender:p}=W.useContext($l);return m.jsx(m.Fragment,{children:_.map(b=>{const v=ur(b),T=a===_||l.includes(v),D=()=>{if(h.has(v))h.set(v,!0);else return;let R=!0;h.forEach(w=>{w||(R=!1)}),R&&(p==null||p(),y(u.current),s&&s())};return m.jsx(Tb,{isPresent:T,initial:!c.current||i?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:r,mode:o,onExitComplete:T?void 0:D,children:b},v)})})},wb={proposed:"Asked you",mode_changed:"Autopilot changed",emergency_changed:"Emergency stop changed",project_checked:"Checked a project",agent_run:"Agent task",agent_undo:"Undid agent changes",build_run:"Built a project",build_undo:"Undid a build",project_fix_applied:"Applied a fix",approved:"You approved",denied:"You said no",done:"Done",failed:"Could not do it",expired:"Expired"},Nh=n=>new Date(n*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),Ih=n=>n.split(/[\\/]/).pop()??n;function Rb({projects:n,onSave:e,onRemove:t,onCheck:i}){const[s,r]=W.useState(""),[o,a]=W.useState("");return m.jsxs(m.Fragment,{children:[m.jsx("p",{children:'What you are building. I read these folders (never change them) so I can answer "how is X going?"'}),n.map(l=>{var c,u;return m.jsxs("div",{className:"proj",children:[m.jsxs("div",{className:"proj-h",children:[m.jsx("b",{children:l.name}),m.jsx("span",{className:"chip",children:l.status})]}),l.summary?m.jsx("div",{className:"proj-s",children:l.summary}):null,m.jsx("div",{className:"proj-m",children:(c=l.health)!=null&&c.branch?`${l.health.branch} · ${l.health.uncommitted?`${l.health.uncommitted} unsaved change${l.health.uncommitted>1?"s":""}`:"all saved"} · ${l.health.last_commit}`:l.folder&&((u=l.health)==null?void 0:u.exists)===!1?"Folder not found on this computer":l.stack||""}),m.jsx("input",{className:"proj-in","aria-label":`Next step for ${l.name}`,placeholder:"Next step…",defaultValue:l.next_step,onBlur:h=>h.target.value!==l.next_step&&e({id:l.id,next_step:h.target.value})}),m.jsxs("div",{style:{display:"flex",gap:8},children:[l.folder?m.jsx("button",{className:"btn sm",onClick:()=>i(l.id),children:"Test and fix"}):null,m.jsx("button",{className:"btn ghost sm",onClick:()=>t(l.id),children:"Remove"})]})]},l.id)}),n.length?null:m.jsx("p",{children:"No projects yet."}),m.jsxs("div",{className:"proj add",children:[m.jsx("input",{className:"proj-in","aria-label":"Project name",placeholder:"Project name",value:s,onChange:l=>r(l.target.value)}),m.jsx("input",{className:"proj-in","aria-label":"Folder path",placeholder:"Folder (optional), e.g. C:\\\\Users\\\\you\\\\vanta",value:o,onChange:l=>a(l.target.value)}),m.jsx("button",{className:"btn sm primary",disabled:!s.trim(),onClick:()=>{e({name:s,folder:o}),r(""),a("")},children:"Add project"})]})]})}function Cb({s:n,onSet:e,onFast:t}){return n?m.jsxs(m.Fragment,{children:[m.jsx("h3",{children:"How VANTA works"}),m.jsx("p",{children:'Pick a setup. You can switch any time, even in the middle of a chat. You can also just say "switch to think mode".'}),m.jsx("div",{className:"setups",role:"radiogroup","aria-label":"Setup",children:n.profiles.map(i=>m.jsxs("button",{className:"setup-opt",role:"radio","aria-checked":n.current===i.id,onClick:()=>e(i.id),children:[m.jsx("b",{children:i.label}),m.jsx("small",{children:i.desc})]},i.id))}),n.current==="builder"?m.jsxs("div",{className:"toggle",style:{display:"block"},children:[m.jsxs("div",{children:["The fast brain runs on",m.jsx("small",{children:"Free cloud is quicker. This laptop keeps the building private but is slower."})]}),m.jsx("div",{className:"seg",role:"radiogroup","aria-label":"Fast brain",style:{gridTemplateColumns:"repeat(2, 1fr)",marginTop:8},children:[["cloud","Free cloud"],["local","This laptop"]].map(([i,s])=>m.jsx("button",{role:"radio","aria-checked":n.builder_fast===i,onClick:()=>t(i),children:s},i))})]}):null,n.current==="offline"||n.current==="builder"&&n.builder_fast==="local"?m.jsx("p",{children:n.local_ready?"A local model is running here.":"No local model found yet. Install Ollama (ollama.com), then run: ollama pull qwen2.5:3b"}):null]}):null}function Pb({s:n,onSet:e}){const[t,i]=W.useState(!1);if(!n)return null;const s=n.profiles.find(r=>r.id===n.current);return m.jsxs("div",{className:"setup-chip",onKeyDown:r=>{r.key==="Escape"&&i(!1)},children:[t?m.jsx("div",{className:"setup-pop",role:"radiogroup","aria-label":"Setup",children:n.profiles.map(r=>m.jsxs("button",{role:"radio","aria-checked":n.current===r.id,onClick:()=>{e(r.id),i(!1)},children:[m.jsx("b",{children:r.label}),m.jsx("small",{children:r.desc})]},r.id))}):null,m.jsx("button",{className:"chip","aria-haspopup":"true","aria-expanded":t,onClick:()=>i(!t),children:(s==null?void 0:s.label)??n.current})]})}function Lb({g:n,onRestore:e,onMode:t,scans:i,onScan:s,onEmergency:r,onPurge:o,onAgentMode:a}){const[l,c]=W.useState("");return n?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"toggle",style:{borderTop:0},children:[m.jsxs("div",{children:["Let VANTA act on its own",m.jsx("small",{children:n.mode==="auto"?`On. When I find a threat I wait ${n.veto??30} seconds so you can press Stop, then deal with it (up to ${n.max_per_hour??3} times an hour).`:"Off. I ask you every time."})]}),m.jsx("button",{className:"switch",role:"switch","aria-label":"Let VANTA act on its own","aria-checked":n.mode==="auto",onClick:()=>{(n.mode==="auto"||window.confirm(`Let VANTA end programs and quarantine files by itself?

It waits 30 seconds first so you can stop it, never deletes anything, and you can undo file moves. Ending a program loses anything unsaved in it.`))&&t(n.mode==="auto"?"ask":"auto")}})]}),m.jsxs("div",{className:"toggle",children:[m.jsxs("div",{children:["Stop confirmed malware immediately",m.jsx("small",{children:n.emergency===!1?"Off. I will only warn you.":"On. When I confirm a file is malware (any type), or see files being locked fast, I end it and quarantine it straight away, without asking. Programs I am only unsure about, verified apps, and ones you trust are never touched without your say-so."})]}),m.jsx("button",{className:"switch",role:"switch","aria-label":"Emergency stop","aria-checked":n.emergency!==!1,onClick:()=>r(n.emergency===!1)})]}),m.jsx("p",{children:"Files go to a locked folder. Everything is written here."}),m.jsx("div",{className:`chain ${n.chain_ok?"ok":"bad"}`,role:"status",children:n.chain_ok?"Log intact: nothing has been edited or removed.":"Warning: this log has been changed after the fact."}),m.jsx("h3",{children:"Agent permissions"}),m.jsx("p",{children:'For "/agent do something" tasks. It looks, plans, changes files and runs checks, and you can undo everything afterwards.'}),m.jsx("div",{className:"seg",role:"radiogroup","aria-label":"Agent permissions",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:[["plan","Look only"],["ask","Ask me"],["accept_edits","Edit freely"],["auto","Auto"]].map(([u,h])=>m.jsx("button",{role:"radio","aria-checked":(n.agent_mode??"ask")===u,onClick:()=>a(u),children:h},u))}),m.jsx("h3",{children:"Recent scans"}),m.jsx("p",{children:"I check every download and every running program, reading what's inside without running it. Only a file's fingerprint is ever sent out, and only if you add a VirusTotal key."}),m.jsxs("div",{className:"composer",style:{marginBottom:10},children:[m.jsx("input",{"aria-label":"File to scan",placeholder:"Scan a file: paste its path",value:l,onChange:u=>c(u.target.value),onKeyDown:u=>{u.key==="Enter"&&l.trim()&&(s(l.trim()),c(""))}}),m.jsx("button",{className:"btn sm primary",disabled:!l.trim(),onClick:()=>{s(l.trim()),c("")},children:"Scan"})]}),i.slice(0,12).map(u=>m.jsxs("div",{className:"proj",children:[m.jsxs("div",{className:"proj-h",children:[m.jsx("b",{style:{overflowWrap:"anywhere"},children:u.name}),m.jsx("span",{className:`chip scan-${u.label}`,children:u.family?u.family.family:u.label})]}),u.family?m.jsx("div",{className:"proj-s",children:u.family.does}):null,u.about?m.jsx("div",{className:"proj-s",children:u.about}):null,m.jsxs("div",{className:"proj-m",children:[[...u.reasons,...u.vouched].slice(0,3).join(" · ")||"Nothing unusual found.",u.publisher?` · ${u.publisher}`:""]})]},u.sha256)),i.length?null:m.jsx("p",{children:"Nothing scanned yet."}),m.jsx("h3",{style:{marginTop:16},children:"Quarantined files"}),n.quarantined.map(u=>m.jsxs("div",{className:"proj",children:[m.jsx("div",{className:"proj-h",children:m.jsx("b",{children:Ih(u.original)})}),m.jsxs("div",{className:"proj-m",children:[u.original,m.jsx("br",{}),"Locked ",Nh(u.ts)]}),m.jsxs("div",{style:{display:"flex",gap:8},children:[m.jsx("button",{className:"btn sm",onClick:()=>e(u.id),children:"Put it back"}),m.jsx("button",{className:"btn sm ghost",onClick:()=>{window.confirm("Delete this file permanently? This cannot be undone.")&&o(u.id)},children:"Delete for good"})]})]},u.id)),n.quarantined.length?null:m.jsx("p",{children:"Nothing quarantined."}),m.jsx("h3",{style:{marginTop:16},children:"Recent activity"}),n.audit.map(u=>{var h,d;return m.jsxs("div",{className:"log",children:[m.jsx("span",{children:Nh(u.ts)}),m.jsx("span",{children:wb[u.event]??u.event}),m.jsx("em",{children:String(((h=u.detail.target)==null?void 0:h.name)??Ih(String(((d=u.detail.target)==null?void 0:d.path)??""))??"")})]},u.n)}),n.audit.length?null:m.jsx("p",{children:"No actions yet."})]}):m.jsx("p",{children:"Loading…"})}function Db({nudge:n,onAck:e}){return W.useEffect(()=>{if(!n)return;const t=setTimeout(()=>e(n.id),n.severity==="low"?9e3:3e4);return()=>clearTimeout(t)},[n,e]),m.jsx(cp,{children:n?m.jsxs(rc.div,{className:`toast ${n.severity}`,role:"status",initial:{y:80,opacity:0},animate:{y:0,opacity:1},exit:{y:80,opacity:0},children:[m.jsx("b",{children:n.title}),m.jsx("span",{children:n.message}),m.jsx("br",{}),m.jsx("button",{className:"btn sm",onClick:()=>e(n.id),children:"Got it"})]},n.id):null})}function Nb({approval:n,onAnswer:e}){return n?m.jsx("div",{className:"scrim",role:"dialog","aria-modal":"true","aria-label":"Approval needed",children:m.jsxs("div",{className:"modal",children:[m.jsxs("h3",{children:["VANTA wants to: ",n.action]}),m.jsx("pre",{children:n.detail}),m.jsxs("div",{className:"row",children:[m.jsx("button",{className:"btn",onClick:()=>e(!1,n),children:"Deny"}),m.jsx("button",{className:"btn primary",autoFocus:!1,onClick:()=>e(!0,n),children:"Approve"})]})]})}):null}const Ib=[{key:"window",label:"Windows and apps",hint:"Which app and window title you are using. Never keystrokes."},{key:"browser",label:"Browser pages",hint:"Page titles and visible text, through the Chrome extension. Never passwords."},{key:"process",label:"Running programs",hint:"Watches for unfamiliar or runaway programs."},{key:"screen",label:"Screen changes",hint:"Notices when the screen changes. Pixels are never saved."}],Ub=[{v:"auto",label:"Auto"},{v:"calm",label:"Calm"},{v:"hud",label:"HUD"}];function Fb({sync:n,onUnlock:e,onSyncNow:t}){const[i,s]=W.useState("");if(!n)return null;const r=n.last?new Date(n.last*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return m.jsxs(m.Fragment,{children:[m.jsx("h3",{style:{marginTop:22},children:"Phone sync"}),n.configured?n.unlocked?m.jsxs("p",{children:["Connected",r?` · last synced ${r}`:"",". Everything is scrambled on this laptop before it leaves.",m.jsx("button",{className:"btn ghost sm",onClick:t,children:"Sync now"})]}):m.jsxs(m.Fragment,{children:[m.jsx("p",{children:"Enter your vault passphrase to start syncing. It stays on this laptop and is never saved."}),m.jsxs("div",{className:"composer",style:{marginBottom:12},children:[m.jsx("input",{type:"password","aria-label":"Vault passphrase",placeholder:"Vault passphrase",value:i,onChange:o=>s(o.target.value),onKeyDown:o=>{o.key==="Enter"&&i&&(e(i),s(""))}}),m.jsx("button",{className:"btn sm primary",disabled:i.length<8,onClick:()=>{e(i),s("")},children:"Unlock"})]})]}):m.jsx("p",{children:'Not set up yet. See "Phone sync" in the README: it takes about five minutes.'}),n.error?m.jsx("p",{style:{color:"#E7A3AB"},children:n.error}):null]})}function Ob({open:n,privacy:e,onSource:t,onClose:i,layout:s,onLayout:r,view:o,onView:a,fx:l,fxAuto:c,onFx:u,sync:h,onUnlock:d,onSyncNow:g,projects:_,guardian:y,onSaveProject:f,onRemoveProject:p,onRestore:b,onOpenPanels:v,onGuardMode:T,scans:D,onScan:R,onEmergency:w,onPurge:P,onCheckProject:Y,onAgentMode:x,setup:E,onSetup:I,onBuilderFast:F}){const[B,Z]=W.useState("privacy");return W.useEffect(()=>{n&&v()},[n]),m.jsx(cp,{children:n?m.jsxs(rc.aside,{className:"drawer",initial:{x:360},animate:{x:0},exit:{x:360},transition:{type:"tween",duration:.22},"aria-label":"Settings",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("h3",{children:B==="privacy"?"What I can see":B==="projects"?"Projects":"Safety log"}),m.jsx("button",{className:"btn ghost sm",onClick:i,children:"Close"})]}),m.jsx("div",{className:"seg",role:"tablist","aria-label":"Settings sections",style:{margin:"10px 0 14px"},children:["privacy","projects","safety"].map(O=>m.jsx("button",{role:"tab","aria-checked":B===O,onClick:()=>Z(O),children:O==="privacy"?"General":O==="projects"?"Projects":"Safety"},O))}),B==="projects"?m.jsx(Rb,{projects:_,onSave:f,onRemove:p,onCheck:Y}):null,B==="safety"?m.jsx(Lb,{g:y,onRestore:b,onMode:T,scans:D,onScan:R,onEmergency:w,onPurge:P,onAgentMode:x}):null,B==="privacy"?m.jsxs(m.Fragment,{children:[m.jsx(Cb,{s:E,onSet:I,onFast:F}),m.jsx("p",{children:"You decide. Pausing stops everything at once. Password managers, private windows and banking pages are never read."}),Ib.map(O=>m.jsxs("div",{className:"toggle",children:[m.jsxs("div",{children:[O.label,m.jsx("small",{children:O.hint})]}),m.jsx("button",{className:"switch",role:"switch","aria-label":O.label,"aria-checked":!!e.sources[O.key],onClick:()=>t(O.key,!e.sources[O.key])})]},O.key)),m.jsx("h3",{style:{marginTop:22},children:"How it looks"}),m.jsx("p",{children:"Auto keeps things calm while we chat and switches to the full HUD when there is something to show or I am working."}),m.jsx("div",{className:"seg",role:"radiogroup","aria-label":"Layout",children:Ub.map(O=>m.jsx("button",{role:"radio","aria-checked":s===O.v,onClick:()=>r(O.v),children:O.label},O.v))}),m.jsx("h3",{style:{marginTop:22},children:"Dashboard and chat"}),m.jsx("p",{children:"Chat drawer keeps the dashboard on screen and slides the chat over it. Separate pages gives each its own full screen."}),m.jsxs("div",{className:"seg",role:"radiogroup","aria-label":"Dashboard and chat",children:[m.jsx("button",{role:"radio","aria-checked":o==="drawer",onClick:()=>a("drawer"),children:"Chat drawer"}),m.jsx("button",{role:"radio","aria-checked":o==="pages",onClick:()=>a("pages"),children:"Separate pages"})]}),m.jsxs("div",{className:"toggle",children:[m.jsxs("div",{children:["Light effects",m.jsx("small",{children:c?"Turned on because this screen was struggling.":"Fewer glows and animations. Easier on an older laptop."})]}),m.jsx("button",{className:"switch",role:"switch","aria-label":"Light effects","aria-checked":l==="low",onClick:()=>u(l==="low"?"full":"low")})]}),m.jsx(Fb,{sync:h,onUnlock:d,onSyncNow:g}),m.jsxs("div",{className:"toggle",style:{marginTop:12},children:[m.jsxs("div",{children:["Sign out",m.jsx("small",{children:"Locks VANTA in this browser."})]}),m.jsx("a",{className:"btn sm",style:{display:"grid",placeItems:"center",textDecoration:"none"},href:"/logout",children:"Sign out"})]})]}):null]}):null})}const xn=24,hr=64,si=24,Bb=820,kb={text:150,node:84,news:150,chart:160,code:260,table:220,image:300,steps:200,svg:300,html:300,weather:140,recommendation:116},rn=n=>kb[n.type]??150,ea=(n,e,t)=>Math.max(e,Math.min(t,n));function Vb(n){var t;if(n.layout==="connected"||n.layout==="investigation")return"connected";if(n.layout)return"orbit";const e=n.blocks.filter(i=>i.type!=="recommendation");return(((t=n.links)==null?void 0:t.length)??0)>0&&e.length>1?"connected":"orbit"}function zb(n,e){const t=new Set(n.map(r=>r.id)),i=e.filter(r=>t.has(r.from)&&t.has(r.to)&&r.from!==r.to),s=Object.fromEntries(n.map(r=>[r.id,0]));for(let r=0;r<n.length;r++){let o=!1;for(const a of i)s[a.to]<s[a.from]+1&&s[a.from]+1<n.length&&(s[a.to]=s[a.from]+1,o=!0);if(!o)break}return s}function Uh(n,e,t,i,s){let r=i;for(const o of n){const a=o.type==="node"?Math.min(t,260):t;s[o.id]={x:o.type==="node"&&a<t?e+(t-a)/2:e,y:r,w:a,h:rn(o)},r+=rn(o)+xn}return r}function ta(n,e,t,i,s){const r=Math.floor((e-xn*(t-1))/t);let o=i;for(let a=0;a<n.length;a+=t){const l=n.slice(a,a+t),c=Math.max(...l.map(rn));l.forEach((u,h)=>{s[u.id]={x:h*(r+xn),y:o,w:r,h:c}}),o+=c+xn}return o}function Hb(n,e,t){const i=e<Bb,s={},r=[],o=n?Vb(n):"orbit",a=n?n.blocks.filter(f=>f.type!=="recommendation"):[],l=n?n.blocks.filter(f=>f.type==="recommendation"):[];if(i){const f={cx:e/2,cy:84,size:n?132:200};let p=f.cy+f.size/2+44;return p=ta([...a,...l],e,1,p,s),{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,p),sphere:f}}if(o==="connected"&&n){const f={cx:si+52,cy:si+52,size:104},p=n.links??[],b=140,v=zb(a,p),T=new Set(p.flatMap(F=>[F.from,F.to])),D=a.filter(F=>T.has(F.id)),R=a.filter(F=>!T.has(F.id)),w=D.length?Math.max(...D.map(F=>v[F.id]))+1:1,P=ea(Math.floor((e-hr*(w-1))/w),150,300),Y=w*P+(w-1)*hr,x=Math.max(0,Math.round((e-Y)/2)),E=Array(w).fill(b);for(const F of D){const B=v[F.id];s[F.id]={x:x+B*(P+hr),y:E[B],w:P,h:rn(F)},E[B]+=rn(F)+xn}let I=D.length?Math.max(...E):b;R.length&&(I=ta(R,e,e>=900?2:1,I,s));for(const F of p){const B=s[F.from],Z=s[F.to];if(!B||!Z)continue;const O=Z.x>B.x+B.w-1,K=O?B.x+B.w:B.x+B.w/2,H=O?B.y+B.h/2:B.y+B.h,se=O?Z.x:Z.x+Z.w/2,J=O?Z.y+Z.h/2:Z.y,ce=(K+se)/2,Ie=O?Math.abs(H-J)<2?`M ${K} ${H} L ${se} ${J}`:`M ${K} ${H} L ${ce} ${H} L ${ce} ${J} L ${se} ${J}`:`M ${K} ${H} L ${se} ${J}`;r.push({from:F.from,to:F.to,d:Ie,label:F.label,dashed:F.style==="dashed",lx:O?se-hr/2:(K+se)/2,ly:O?J-4:(H+J)/2})}for(const F of l)s[F.id]={x:si,y:I,w:e-si*2,h:rn(F)},I+=rn(F)+xn;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,I),sphere:f}}const c=ea(Math.min(e*.34,t*.52),200,360),u=e/2,h=ea(t*.44,c/2+56,Math.max(c/2+56,t)),d=u-c/2-56-si,g={cx:u,cy:h,size:c};if(!n||a.length===0)return{mode:o,stacked:i,boxes:s,arrows:r,height:t,sphere:g};let _;if(d<220){const f={cy:150,size:200};_=ta(a,e,1,f.cy+f.size/2+40,s),g.cy=f.cy,g.size=f.size}else{const f=Math.min(400,d),p=[],b=[];a.forEach((w,P)=>(P%2===0?p:b).push(w));const v=w=>w.reduce((P,Y)=>P+rn(Y)+xn,-xn),T=w=>Math.max(48,Math.round(h-v(w)/2)),D=Uh(p,u+c/2+56,f,T(p),s),R=Uh(b,u-c/2-56-f,f,T(b),s);_=Math.max(D,R,h+c/2+56)}let y=Math.max(_,h+c/2+56);for(const f of l)s[f.id]={x:si,y,w:e-si*2,h:rn(f)},y+=rn(f)+xn;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,y),sphere:g}}const Yn=({kind:n,title:e,right:t})=>m.jsxs("div",{className:"block-head",children:[m.jsx("span",{className:"k",children:n}),m.jsx("span",{className:"t",children:e}),t]}),lt=n=>n==null?"":String(n);function Gb({b:n}){const e=lt(n.data.body??n.data.text).split(/\n{2,}/).filter(Boolean);return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:lt(n.data.kind)||"note",title:n.title}),m.jsx("div",{className:"block-body",children:e.map((t,i)=>m.jsx("p",{style:{margin:i?"10px 0 0":0},children:t},i))})]})}function jb({b:n}){return m.jsx("div",{className:"block-body",children:m.jsxs("span",{children:[m.jsx("b",{children:n.title}),m.jsx("br",{}),lt(n.data.value??n.data.label)]})})}function Wb({b:n}){return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"block-head",style:{borderBottom:0,paddingTop:12},children:[m.jsx("span",{className:"k2",style:{font:"500 11px var(--mono)",letterSpacing:".14em",color:"var(--accent)"},children:"NEWS"}),m.jsxs("span",{className:"t",style:{color:"var(--muted)",fontSize:12},children:[lt(n.data.source)," · ",lt(n.data.time)]})]}),m.jsxs("div",{className:"block-body news",style:{paddingTop:0},children:[m.jsx("div",{className:"headline",children:lt(n.data.headline??n.title)}),n.data.tag?m.jsx("div",{style:{marginTop:10},children:m.jsx("span",{className:"chip",children:lt(n.data.tag)})}):null]})]})}function Xb({b:n}){const e=Array.isArray(n.data.values)?n.data.values.map(Number).filter(Number.isFinite):[],t=Math.max(1,...e),i=typeof n.data.highlightFrom=="number"?n.data.highlightFrom:1/0,s=408,r=70,o=Math.max(1,e.length),a=Math.max(3,Math.min(14,s/o*.62)),l=s/o;return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:"chart",title:n.title,right:n.data.note?m.jsx("span",{style:{font:"10px var(--mono)",color:"var(--muted)"},children:lt(n.data.note)}):null}),m.jsxs("div",{className:"block-body",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[m.jsx("svg",{viewBox:`0 0 ${s} ${r}`,width:"100%",height:r,preserveAspectRatio:"none",role:"img","aria-label":n.title||"chart",children:e.map((c,u)=>{const h=Math.max(3,c/t*(r-4));return m.jsx("rect",{x:u*l+(l-a)/2,y:r-h,width:a,height:h,rx:2,fill:u>=i?"#F2B35E":"#2A4A72"},u)})}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",font:"10px var(--mono)",color:"var(--muted)"},children:[m.jsx("span",{children:lt(n.data.from)}),m.jsx("span",{children:lt(n.data.to??"now")})]})]})]})}function qb({b:n}){const[e,t]=W.useState(!1),i=lt(n.data.code);return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:"code",title:lt(n.data.filename)||n.title,right:m.jsx("button",{className:"btn ghost sm",style:{height:28,padding:"0 8px"},onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(i).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},children:e?"Copied":"Copy"})}),m.jsx("div",{className:"block-body",children:m.jsx("pre",{className:"code",children:i})})]})}function $b({b:n}){const e=Array.isArray(n.data.columns)?n.data.columns.map(lt):[],t=Array.isArray(n.data.rows)?n.data.rows.slice(0,50):[];return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:"table",title:n.title}),m.jsx("div",{className:"block-body",children:m.jsxs("table",{className:"tbl",children:[m.jsx("thead",{children:m.jsx("tr",{children:e.map((i,s)=>m.jsx("th",{children:i},s))})}),m.jsx("tbody",{children:t.map((i,s)=>m.jsx("tr",{children:(Array.isArray(i)?i:[i]).map((r,o)=>m.jsx("td",{children:lt(r)},o))},s))})]})})]})}function Yb({b:n}){const e=(Array.isArray(n.data.items)?n.data.items:[]).map(t=>typeof t=="string"?{label:t}:{label:lt(t.label),state:lt(t.state)});return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:"steps",title:n.title}),m.jsx("div",{className:"block-body",children:m.jsx("ul",{className:"steplist",children:e.map((t,i)=>m.jsxs("li",{className:t.state==="done"?"done":t.state==="active"?"active":t.state==="todo"?"todo":"",children:[m.jsx("span",{className:"m",children:t.state==="done"?"✓":""}),t.label]},i))})})]})}function Kb({b:n}){const[e,t]=W.useState(null),i=Array.isArray(n.data.annotations)?n.data.annotations:[],s=lt(n.data.src);return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:lt(n.data.kind)||"image",title:n.title,right:i.length?m.jsx("span",{style:{fontSize:11,color:"var(--accent)",border:"1px solid var(--border-2)",borderRadius:999,padding:"2px 8px"},children:"annotated"}):null}),m.jsx("div",{className:"block-body flush",style:{display:"grid",placeItems:"center",background:"#0A1020"},children:s?m.jsxs("div",{className:"shot",style:{aspectRatio:e?String(e):void 0,width:e?void 0:"100%",height:"100%",maxWidth:"100%"},children:[m.jsx("img",{src:s,alt:n.title||"screenshot",onLoad:r=>t(r.currentTarget.naturalWidth/r.currentTarget.naturalHeight),style:{objectFit:"fill"}}),i.slice(0,6).map((r,o)=>m.jsxs("div",{children:[m.jsx("div",{className:`box ${o?"second":""}`,style:{left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.w*100}%`,height:`${r.h*100}%`}}),r.label?m.jsxs("div",{className:"badge",style:{left:`${r.x*100}%`,top:`${r.y*100}%`},children:[o+1," · ",String(r.label).slice(0,40)]}):null]},o))]}):m.jsx("span",{style:{color:"var(--muted)",fontSize:13},children:"No image"})})]})}function Zb({b:n}){const t=`<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:;"><style>html,body{margin:0;height:100%;background:#0A1020;color:#E8EEF8;font:14px system-ui}svg{max-width:100%;max-height:100%}</style><body>${lt(n.data.markup)}</body>`;return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:n.type,title:n.title}),m.jsx("div",{className:"block-body flush",children:m.jsx("iframe",{className:"sandboxed",sandbox:"",referrerPolicy:"no-referrer",srcDoc:t,title:n.title||"visual"})})]})}function Jb({b:n}){return m.jsxs(m.Fragment,{children:[m.jsx(Yn,{kind:"weather",title:n.title||lt(n.data.city)}),m.jsxs("div",{className:"block-body wx",children:[m.jsxs("b",{children:[Math.round(Number(n.data.temp)),"°"]}),m.jsx("span",{style:{color:"var(--muted)"},children:lt(n.data.condition)})]})]})}function Qb({b:n}){switch(n.type){case"text":return m.jsx(Gb,{b:n});case"node":return m.jsx(jb,{b:n});case"news":return m.jsx(Wb,{b:n});case"chart":return m.jsx(Xb,{b:n});case"code":return m.jsx(qb,{b:n});case"table":return m.jsx($b,{b:n});case"steps":return m.jsx(Yb,{b:n});case"image":return m.jsx(Kb,{b:n});case"svg":case"html":return m.jsx(Zb,{b:n});case"weather":return m.jsx(Jb,{b:n});default:return null}}const Fh=n=>n>=1e3?`${(n/1e3).toFixed(1)} Mb/s`:`${Math.round(n)} kb/s`,Oh=n=>n>=1024?`${(n/1024).toFixed(1)} MB/s`:`${Math.round(n)} KB/s`,Bh=n=>n>=1024?`${(n/1024).toFixed(1)} GB`:`${n} MB`,eT=n=>{if(n==null)return"";const e=Math.floor(n/86400),t=Math.floor(n%86400/3600),i=Math.floor(n%3600/60);return e?`${e}d ${t}h`:t?`${t}h ${i}m`:`${i}m`},Rr=n=>n>=90?"hot":n>=70?"warm":"cool",tT=n=>n>=90?"hot":n>=80?"warm":"cool";function nT(n,e,t,i){if(n.length<2)return"";const s=Math.max(i??0,...n,1);return n.map((r,o)=>`${(o/(n.length-1)*e).toFixed(1)},${(t-Math.max(0,r)/s*(t-2)-1).toFixed(1)}`).join(" ")}function iT(n){return n.some(e=>e.level==="warn")?{text:"Needs attention",tone:"warn"}:n.length?{text:"Worth a look",tone:"note"}:{text:"All calm",tone:"ok"}}const dr=["weather","files","cpu","mem","disks","heat","programs","network","security","installed"];function sT(n,e){const t={weather:0,files:0,cpu:0,mem:0,disks:0,heat:0,programs:0,network:0,security:0,installed:0};t.cpu=n.cpu.pct>=90?80:n.cpu.pct>=70?40:0,t.mem=n.mem.pct>=90?90:n.mem.pct>=80?50:0,t.disks=Math.max(0,...n.disks.map(a=>a.pct>=95?85:a.pct>=88?55:0));const i=n.cpu.temp;t.heat=i!=null?i>=90?95:i>=80?60:0:0;const s=n.programs.find(a=>!a.protected);t.programs=s&&s.cpu>=50?65:0,t.security=n.network.security.some(a=>a.state==="off")?100:0,t.network=n.network.listening.some(a=>a.risk&&a.scope==="everyone")?90:n.network.connected.some(a=>a.outside>=25)?30:0;const r=[...dr].sort((a,l)=>t[l]-t[a]||dr.indexOf(a)-dr.indexOf(l)),o=new Set(dr.filter(a=>t[a]>=55));return e&&(r.splice(r.indexOf(e),1),r.unshift(e)),{order:r,alert:o}}const rT=n=>n>=1048576?`${(n/1048576).toFixed(1)} MB`:n>=1024?`${Math.round(n/1024)} KB`:`${n} B`;function kh({pct:n,label:e,sub:t,big:i}){const r=2*Math.PI*42,o=Rr(n);return m.jsxs("svg",{className:`ring ${o} ${i?"big":""}`,viewBox:"0 0 100 100",role:"img","aria-label":`${e} ${Math.round(n)} percent`,children:[m.jsx("circle",{cx:"50",cy:"50",r:42,className:"track"}),m.jsx("circle",{cx:"50",cy:"50",r:42,className:"arc",strokeDasharray:`${Math.min(100,n)/100*r} ${r}`,transform:"rotate(-90 50 50)"}),m.jsxs("text",{x:"50",y:t?49:55,className:"num",children:[Math.round(n),m.jsx("tspan",{className:"pc",children:"%"})]}),t?m.jsx("text",{x:"50",y:"66",className:"sub",children:t}):null]})}function us({values:n,max:e,cls:t}){const i=nT(n,160,34,e);return i?m.jsxs("svg",{className:`spark ${t??""}`,viewBox:"0 0 160 34",preserveAspectRatio:"none","aria-hidden":"true",children:[m.jsx("polyline",{points:`0,34 ${i} 160,34`,className:"fill"}),m.jsx("polyline",{points:i,className:"line"})]}):m.jsx("div",{className:"spark empty"})}const Vh={clear:"M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1",cloud:"M7 18a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 18z",rain:"M7 14a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 14zM8 17l-1 3M12 17l-1 3M16 17l-1 3",storm:"M7 13a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 13zM12 13l-2 4h3l-2 4",fog:"M5 9h14M3 13h18M6 17h12",snow:"M12 2v20M4 7l16 10M20 7L4 17",moon:"M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"};function na({kind:n,night:e,big:t}){const i=e&&n==="clear"?"moon":n;return m.jsx("svg",{className:`sky ${i} ${t?"big":""}`,viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{d:Vh[i]??Vh.cloud})})}function oT({w:n,rank:e,onCity:t}){const[i,s]=W.useState("");return m.jsxs(Jt,{id:"weather",rank:e,title:"WEATHER",aside:n&&!n.error?`${n.city}${n.country?", "+n.country:""}`:void 0,wide:!0,children:[n?n.error?m.jsx("p",{className:"hint",children:n.error}):m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"wx-now",children:[m.jsx(na,{kind:n.icon,night:n.night,big:!0}),m.jsxs("div",{children:[m.jsxs("b",{className:"wx-temp",children:[n.temp,"°"]}),m.jsxs("span",{children:[n.desc," · feels ",n.feels,"° · ",n.humidity,"% humid · wind ",n.wind," km/h"]}),n.hint?m.jsx("em",{className:"wx-hint",children:n.hint}):null]})]}),m.jsx("div",{className:"wx-hours","aria-label":"Next hours",children:n.hours.slice(0,8).map((r,o)=>m.jsxs("div",{children:[m.jsx("span",{children:o===0?"Now":r.label}),m.jsx(na,{kind:r.icon}),m.jsxs("b",{children:[r.temp,"°"]}),r.rain>=30?m.jsxs("em",{children:[r.rain,"%"]}):m.jsx("em",{})]},o))}),m.jsx("div",{className:"wx-days",children:n.days.map((r,o)=>m.jsxs("div",{children:[m.jsx("span",{children:o===0?"Today":r.label}),m.jsx(na,{kind:r.icon}),m.jsx("em",{children:r.rain>=30?`${r.rain}%`:""}),m.jsxs("b",{children:[r.hi,"°"]}),m.jsxs("span",{className:"lo",children:[r.lo,"°"]})]},o))})]}):m.jsx("p",{className:"hint",children:"Looking at the sky…"}),m.jsx("form",{className:"wx-city",onSubmit:r=>{r.preventDefault(),i.trim()&&(t(i.trim()),s(""))},children:m.jsx("input",{className:"search",placeholder:"Another city",value:i,onChange:r=>s(r.target.value),"aria-label":"Another city"})})]})}function aT({f:n,rank:e}){return m.jsx(Jt,{id:"files",rank:e,title:"MY FILES",aside:n?`${n.files.length}`:void 0,children:!n||!n.files.length?m.jsxs("p",{className:"hint",children:["Files VANTA makes for you appear here with a download button. They are saved in your VANTA folder",n?`: ${n.folder}`:"","."]}):m.jsx("div",{className:"flist",children:n.files.slice(0,8).map(t=>m.jsxs("div",{className:"frow",children:[m.jsx("span",{className:"pname",children:t.name}),m.jsx("span",{className:"pmem",children:rT(t.size)}),m.jsx("a",{className:"btn sm",href:`/files/${encodeURIComponent(t.name)}`,download:!0,children:"Download"})]},t.name))})})}function Jt({id:n,rank:e,title:t,aside:i,children:s,wide:r}){return m.jsxs("section",{className:`bcard ${r?"wide":""} ${e!=null&&e.alert.has(n)?"alert":""}`,style:{order:e?e.order.indexOf(n):0},children:[m.jsxs("header",{children:[m.jsx("span",{className:"k",children:t}),i?m.jsx("span",{className:"aside",children:i}):null]}),s]})}function lT({hw:n,weather:e,files:t,onCity:i,focus:s,sphere:r,amplitude:o,low:a,onEnd:l,onUninstall:c,onAsk:u}){var b;const[h,d]=W.useState(""),[g,_]=W.useState(!1),y=W.useMemo(()=>n?sT(n,s):null,[n,s]),f=n?iT(n.findings):null,p=W.useMemo(()=>((n==null?void 0:n.installed)??[]).filter(v=>v.name.toLowerCase().includes(h.toLowerCase())).slice(0,40),[n==null?void 0:n.installed,h]);return m.jsxs("div",{className:"board",children:[m.jsxs("div",{className:"board-hero",children:[m.jsx("div",{className:"hero-sphere",children:m.jsx(Ld,{state:r,amplitude:o,spot:{cx:70,cy:70,size:132},low:a})}),m.jsxs("div",{className:"hero-text",children:[m.jsx("span",{className:"k",children:Tl[r]}),m.jsx("h3",{className:(f==null?void 0:f.tone)??"",children:f?f.text:"Reading your computer…"}),m.jsx("p",{children:n?((b=n.findings[0])==null?void 0:b.text)??`Everything looks normal. Up for ${eT(n.uptime)}.`:"Give me a second."})]}),m.jsxs("div",{className:"hero-ask",children:[m.jsx("button",{className:"chip",onClick:()=>u("how is my laptop doing"),children:"Explain it"}),m.jsx("button",{className:"chip",onClick:()=>u("what is slowing my computer down"),children:"Why slow?"})]})]}),n?m.jsxs(m.Fragment,{children:[n.findings.length>1?m.jsx(Jt,{id:"installed",rank:null,title:"THINGS I NOTICED",wide:!0,children:m.jsx("ul",{className:"finds",children:n.findings.map((v,T)=>m.jsxs("li",{className:v.level,children:[m.jsx("i",{}),v.text]},T))})}):null,m.jsxs("div",{className:"bgrid",children:[m.jsx(oT,{w:e??null,rank:y,onCity:i??(()=>{})}),m.jsx(aT,{f:t??null,rank:y}),m.jsx(Jt,{id:"cpu",rank:y,title:"PROCESSOR",aside:n.cpu.freq?`${(n.cpu.freq.mhz/1e3).toFixed(1)} GHz`:void 0,children:m.jsxs("div",{className:"gauge-row",children:[m.jsx(kh,{pct:n.cpu.pct,label:"Processor",sub:n.cpu.temp!=null?`${Math.round(n.cpu.temp)}°C`:`${n.cpu.count} cores`}),m.jsxs("div",{className:"gauge-side",children:[m.jsx(us,{values:n.history.cpu,max:100}),m.jsx("div",{className:"cores","aria-label":"Per core load",children:n.cpu.cores.map((v,T)=>m.jsx("i",{className:Rr(v),title:`Core ${T+1}: ${Math.round(v)}%`,children:m.jsx("b",{style:{height:`${Math.max(6,v)}%`}})},T))})]})]})}),m.jsx(Jt,{id:"mem",rank:y,title:"MEMORY",aside:`${n.mem.used} / ${n.mem.total} GB`,children:m.jsxs("div",{className:"gauge-row",children:[m.jsx(kh,{pct:n.mem.pct,label:"Memory",sub:n.mem.swap.total?`swap ${Math.round(n.mem.swap.pct)}%`:void 0}),m.jsxs("div",{className:"gauge-side",children:[m.jsx(us,{values:n.history.mem,max:100}),m.jsx("p",{className:"hint",children:n.mem.pct>=85?"Tight. Close something heavy.":"Plenty of room."})]})]})}),m.jsxs(Jt,{id:"disks",rank:y,title:"DRIVES",aside:`↓ ${Oh(n.disk_io.read)}  ↑ ${Oh(n.disk_io.write)}`,children:[n.disks.length?n.disks.map(v=>m.jsxs("div",{className:"drive",children:[m.jsxs("div",{className:"drow",children:[m.jsx("span",{children:v.mount}),m.jsxs("em",{children:[v.free," GB free of ",v.total]})]}),m.jsx("i",{className:`meter ${Rr(v.pct)}`,children:m.jsx("b",{style:{width:`${v.pct}%`}})})]},v.mount)):m.jsx("p",{className:"hint",children:"No drives reported."}),m.jsx(us,{values:n.history.disk,cls:"alt"})]}),m.jsxs(Jt,{id:"heat",rank:y,title:"HEAT & FANS",wide:!(n.thermal.temps.length||n.thermal.fans.length),aside:n.thermal.source!=="none"?n.thermal.source:void 0,children:[n.thermal.temps.length||n.thermal.fans.length?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"temps",children:n.thermal.temps.slice(0,6).map((v,T)=>m.jsxs("div",{className:`temp ${tT(v.c)}`,children:[m.jsxs("b",{children:[Math.round(v.c),"°"]}),m.jsx("span",{children:v.label})]},T))}),n.thermal.fans.length?m.jsx("div",{className:"fans",children:n.thermal.fans.map((v,T)=>m.jsxs("span",{className:"fan",children:[m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:m.jsx("path",{d:"M12 12c0-4 2-6 5-6-.5 3-2 5-5 6zm0 0c4 0 6 2 6 5-3-.5-5-2-6-5zm0 0c0 4-2 6-5 6 .5-3 2-5 5-6zm0 0c-4 0-6-2-6-5 3 .5 5 2 6 5z",fill:"currentColor"})}),v.rpm," rpm"]},T))}):null]}):m.jsx("p",{className:"hint",children:"Windows doesn't share temperature or fan speed with programs. Run the free LibreHardwareMonitor app, switch on its web server, and these appear here."}),n.battery?m.jsxs("div",{className:"batt",children:[m.jsx("i",{className:"meter cool",children:m.jsx("b",{style:{width:`${n.battery.pct}%`}})}),m.jsxs("span",{children:["Battery ",n.battery.pct,"%",n.battery.plugged?" · charging":n.battery.mins?` · ${Math.floor(n.battery.mins/60)}h ${n.battery.mins%60}m left`:""]})]}):null]}),m.jsx(Jt,{id:"programs",rank:y,title:"PROGRAMS",aside:`${n.programs.length} busiest`,wide:!0,children:m.jsxs("div",{className:"ptable",role:"table",children:[m.jsxs("div",{className:"prow phead",role:"row",children:[m.jsx("span",{children:"Program"}),m.jsx("span",{children:"Processor"}),m.jsx("span",{children:"Memory"}),m.jsx("span",{})]}),n.programs.slice(0,9).map(v=>m.jsxs("div",{className:"prow",role:"row",children:[m.jsxs("span",{className:"pname",children:[v.name,v.count>1?m.jsxs("em",{children:[" ×",v.count]}):null]}),m.jsxs("span",{children:[m.jsx("i",{className:`meter thin ${Rr(v.cpu*2)}`,children:m.jsx("b",{style:{width:`${Math.min(100,v.cpu)}%`}})}),m.jsxs("em",{children:[v.cpu.toFixed(0),"%"]})]}),m.jsx("span",{className:"pmem",children:Bh(v.mem)}),m.jsx("span",{children:v.protected?m.jsx("em",{className:"lock",title:"Part of the system, VANTA won't stop it",children:"system"}):m.jsx("button",{className:"btn sm",onClick:()=>l(v.pid),children:"End"})})]},v.name))]})}),m.jsxs(Jt,{id:"network",rank:y,title:"NETWORK",aside:`↓ ${Fh(n.net.down)}  ↑ ${Fh(n.net.up)}`,children:[m.jsxs("div",{className:"sparks",children:[m.jsx(us,{values:n.history.down}),m.jsx(us,{values:n.history.up,cls:"alt"})]}),n.network.interfaces.map(v=>m.jsxs("div",{className:"kv",children:[m.jsx("span",{children:v.name}),m.jsxs("em",{children:[v.ip,v.speed?` · ${v.speed} Mb/s`:""]})]},v.name)),n.network.connected.slice(0,4).map(v=>m.jsxs("div",{className:"kv",children:[m.jsx("span",{children:v.program}),m.jsxs("em",{children:[v.count," connections",v.outside?` · ${v.outside} to the internet`:""]})]},v.program))]}),m.jsxs(Jt,{id:"security",rank:y,title:"SECURITY",aside:n.network.limited?"limited view":void 0,children:[m.jsx("div",{className:"sec",children:n.network.security.map(v=>m.jsxs("div",{className:`secrow ${v.state}`,children:[m.jsx("i",{}),m.jsxs("div",{children:[m.jsxs("b",{children:[v.name,": ",v.state==="unknown"?"not checked":v.state]}),m.jsx("span",{children:v.note})]})]},v.name))}),m.jsxs("div",{className:"doors",children:[m.jsx("span",{className:"k",children:"OPEN DOORS"}),n.network.listening.filter(v=>v.scope!=="this computer only").slice(0,5).map((v,T)=>m.jsxs("div",{className:`kv ${v.risk?"risk":""}`,children:[m.jsx("span",{children:v.program}),m.jsxs("em",{children:["port ",v.port," · ",v.scope,v.risk?` · ${v.risk}`:""]})]},T)),n.network.listening.some(v=>v.scope!=="this computer only")?null:m.jsx("p",{className:"hint",children:"Nothing is open to other computers."})]})]}),m.jsx(Jt,{id:"installed",rank:y,title:"INSTALLED PROGRAMS",aside:n.can_uninstall?`${n.installed.length}`:void 0,wide:!0,children:n.can_uninstall?m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"btn sm","aria-expanded":g,onClick:()=>_(v=>!v),children:g?"Hide list":"Show list"}),g?m.jsxs(m.Fragment,{children:[m.jsx("input",{className:"search",placeholder:"Find a program",value:h,onChange:v=>d(v.target.value),"aria-label":"Find a program"}),m.jsx("div",{className:"ilist",children:p.map(v=>m.jsxs("div",{className:"irow",children:[m.jsxs("span",{className:"pname",children:[v.name,m.jsx("em",{children:v.version?` ${v.version}`:""})]}),m.jsx("span",{className:"pmem",children:v.mb?Bh(v.mb):""}),v.protected?m.jsx("em",{className:"lock",title:"Windows or a driver needs this",children:"system"}):m.jsx("button",{className:"btn sm danger",onClick:()=>c(v.id),children:"Uninstall"})]},v.id))}),m.jsx("p",{className:"hint",children:"VANTA asks you first, then starts the program's own uninstaller. You get its confirmation window too."})]}):null]}):m.jsx("p",{className:"hint",children:"Listing installed programs works on Windows. You can still tell me what to remove."})})]})]}):m.jsx("div",{className:"board-wait",children:"Waiting for the first reading…"})]})}function cT(n){const[e,t]=W.useState({w:900,h:700});return W.useEffect(()=>{const i=n.current;if(!i)return;const s=()=>t({w:Math.floor(i.clientWidth),h:Math.floor(i.clientHeight)}),r=new ResizeObserver(s);return r.observe(i),s(),()=>r.disconnect()},[n]),e}const ia=n=>new Date(n*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function uT(){return m.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#F2B35E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[m.jsx("path",{d:"M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"}),m.jsx("path",{d:"M12 9v4M12 16v.5"})]})}function hT({stage:n,history:e,pinned:t,sphere:i,amplitude:s,low:r,caption:o,footer:a,hw:l,weather:c,files:u,onCity:h,focus:d,onEnd:g,onUninstall:_,onAsk:y,onOpen:f,onPin:p,onClear:b,onAction:v}){const T=W.useRef(null),{w:D,h:R}=cT(T),w=W.useMemo(()=>Hb(n,Math.max(280,D-48),Math.max(360,R)),[n,D,R]),P=e.filter(I=>I.id!==(n==null?void 0:n.id)).slice(0,4),Y=n==null?void 0:n.blocks.find(I=>I.type==="recommendation"),x=((n==null?void 0:n.actions)??[]).map(I=>m.jsx("button",{className:`btn ${I.kind??"secondary"}`,onClick:()=>n&&v(n.id,I),children:I.label},I.id)),E=w.sphere.cy+w.sphere.size/2+6;return!n&&g&&_&&y?m.jsxs("section",{className:"hud board-mode","aria-label":"System board",children:[m.jsx("div",{className:"hud-head",children:m.jsxs("div",{className:"hud-title",children:[m.jsx("span",{className:"k",children:"SYSTEM"}),m.jsx("h2",{children:"This computer"})]})}),m.jsx("div",{className:"hud-scroll",children:m.jsx(lT,{hw:l??null,weather:c,files:u,onCity:h,focus:d??null,sphere:i,amplitude:s,low:r,onEnd:g,onUninstall:_,onAsk:y})}),P.length>0?m.jsxs("div",{className:"earlier",children:[m.jsx("span",{className:"k",children:"EARLIER"}),P.map(I=>m.jsxs("button",{onClick:()=>f(I.id),children:[I.title," · ",ia(I.ts)]},I.id))]}):null]}):m.jsxs("section",{className:`hud ${w.mode}`,"aria-label":"Stage","data-mode":w.mode,children:[m.jsxs("div",{className:"hud-head",children:[m.jsxs("div",{className:"hud-title",children:[m.jsx("span",{className:"k",children:w.mode==="connected"?"LINKED":"STAGE"}),m.jsx("h2",{children:(n==null?void 0:n.title)??"Standing by"}),n?m.jsx("span",{className:"time",children:ia(n.ts)}):null]}),n?m.jsxs("div",{className:"hud-actions",children:[m.jsx("button",{className:"btn sm","aria-pressed":t,onClick:p,children:t?"Unpin":"Pin"}),m.jsx("button",{className:"btn sm",onClick:b,children:"Clear"})]}):null]}),m.jsx("div",{className:"hud-scroll",ref:T,children:m.jsxs("div",{className:"hud-field",style:{width:Math.max(280,D-48),height:w.height},children:[m.jsx(Ld,{state:i,amplitude:s,spot:w.sphere,low:r}),m.jsx("div",{className:`state-label ${i} ${w.mode==="connected"&&!w.stacked?"side":""}`,style:w.mode==="connected"&&!w.stacked?{left:w.sphere.cx+w.sphere.size/2+10,top:w.sphere.cy}:{left:w.sphere.cx,top:E},children:Tl[i]}),n?null:m.jsxs("div",{className:"standing",style:{left:w.sphere.cx,top:E+40},children:["Nothing needs your attention.",m.jsx("br",{}),"Ask me to show you something and it appears here."]}),o&&!n?m.jsx("div",{className:"caption",style:{left:w.sphere.cx,top:E+110},children:o}):null,w.arrows.length>0&&m.jsxs("svg",{className:"arrows",width:Math.max(280,D-48),height:w.height,"aria-hidden":"true",children:[m.jsxs("defs",{children:[m.jsx("marker",{id:"ah",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:m.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#7EC8FF"})}),m.jsx("marker",{id:"ahd",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:m.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#F2B35E"})})]}),w.arrows.map((I,F)=>m.jsx("path",{className:I.dashed?"flow":"",d:I.d,fill:"none",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",stroke:I.dashed?"#F2B35E":"#7EC8FF",strokeDasharray:I.dashed?"6 6":void 0,markerEnd:`url(#${I.dashed?"ahd":"ah"})`},F))]}),w.arrows.filter(I=>I.label).map((I,F)=>m.jsx("div",{className:"arrow-label",style:{left:I.lx,top:I.ly},children:I.label},F)),n==null?void 0:n.blocks.map((I,F)=>{const B=w.boxes[I.id];if(!B)return null;const Z=I.type==="recommendation";return m.jsx(rc.div,{className:`block ${I.type} ${I.tone??""} ${Z?"rec":""}`,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.35,delay:Math.min(F*.07,.35)},style:{left:B.x,top:B.y,width:B.w,height:B.h},children:Z?m.jsxs(m.Fragment,{children:[m.jsx(uT,{}),m.jsxs("div",{className:"txt",children:[m.jsx("h3",{children:String(I.data.title??I.title??"")}),m.jsx("p",{children:String(I.data.reason??"")})]}),m.jsx("div",{className:"acts",children:x})]}):m.jsx(Qb,{b:I})},I.id)})]})}),n&&!Y&&x.length>0?m.jsx("div",{className:"hud-bar",children:x}):null,P.length>0?m.jsxs("div",{className:"earlier",children:[m.jsx("span",{className:"k",children:"EARLIER"}),P.map(I=>m.jsxs("button",{onClick:()=>f(I.id),children:[I.title," · ",ia(I.ts)]},I.id))]}):null,a]})}const un=Object.create(null);un.open="0";un.close="1";un.ping="2";un.pong="3";un.message="4";un.upgrade="5";un.noop="6";const Cr=Object.create(null);Object.keys(un).forEach(n=>{Cr[un[n]]=n});const hl={type:"error",data:"parser error"},up=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",hp=typeof ArrayBuffer=="function",dp=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,oc=({type:n,data:e},t,i)=>up&&e instanceof Blob?t?i(e):zh(e,i):hp&&(e instanceof ArrayBuffer||dp(e))?t?i(e):zh(new Blob([e]),i):i(un[n]+(e||"")),zh=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)};function Hh(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let sa;function dT(n,e){if(up&&n.data instanceof Blob)return n.data.arrayBuffer().then(Hh).then(e);if(hp&&(n.data instanceof ArrayBuffer||dp(n.data)))return e(Hh(n.data));oc(n,!1,t=>{sa||(sa=new TextEncoder),e(sa.encode(t))})}const Gh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Gh.length;n++)vs[Gh.charCodeAt(n)]=n;const fT=n=>{let e=n.length*.75,t=n.length,i,s=0,r,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(i=0;i<t;i+=4)r=vs[n.charCodeAt(i)],o=vs[n.charCodeAt(i+1)],a=vs[n.charCodeAt(i+2)],l=vs[n.charCodeAt(i+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},pT=typeof ArrayBuffer=="function",ac=(n,e)=>{if(typeof n!="string")return{type:"message",data:fp(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:mT(n.substring(1),e)}:Cr[t]?n.length>1?{type:Cr[t],data:n.substring(1)}:{type:Cr[t]}:hl},mT=(n,e)=>{if(pT){const t=fT(n);return fp(t,e)}else return{base64:!0,data:n}},fp=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},pp="",gT=(n,e)=>{const t=n.length,i=new Array(t);let s=0;n.forEach((r,o)=>{oc(r,!1,a=>{i[o]=a,++s===t&&e(i.join(pp))})})},vT=(n,e)=>{const t=n.split(pp),i=[];for(let s=0;s<t.length;s++){const r=ac(t[s],e);if(i.push(r),r.type==="error")break}return i};function _T(){return new TransformStream({transform(n,e){dT(n,t=>{const i=t.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let ra;function fr(n){return n.reduce((e,t)=>e+t.length,0)}function pr(n,e){if(n[0].length===e)return n.shift();const t=new Uint8Array(e);let i=0;for(let s=0;s<e;s++)t[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),t}function xT(n,e){ra||(ra=new TextDecoder);const t=[];let i=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(i===0){if(fr(t)<1)break;const l=pr(t,1);r=(l[0]&128)===128,s=l[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(fr(t)<2)break;const l=pr(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(fr(t)<8)break;const l=pr(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(hl);break}s=u*Math.pow(2,32)+c.getUint32(4),i=3}else{if(fr(t)<s)break;const l=pr(t,s);a.enqueue(ac(r?l:ra.decode(l),e)),i=0}if(s===0||s>n){a.enqueue(hl);break}}}})}const mp=4;function dt(n){if(n)return yT(n)}function yT(n){for(var e in dt.prototype)n[e]=dt.prototype[e];return n}dt.prototype.on=dt.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};dt.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};dt.prototype.off=dt.prototype.removeListener=dt.prototype.removeAllListeners=dt.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<t.length;s++)if(i=t[s],i===e||i.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+n],this};dt.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,s=t.length;i<s;++i)t[i].apply(this,e)}return this};dt.prototype.emitReserved=dt.prototype.emit;dt.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};dt.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Wt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function gp(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const ST=Wt.setTimeout,MT=Wt.clearTimeout;function io(n,e){e.useNativeTimers?(n.setTimeoutFn=ST.bind(Wt),n.clearTimeoutFn=MT.bind(Wt)):(n.setTimeoutFn=Wt.setTimeout.bind(Wt),n.clearTimeoutFn=Wt.clearTimeout.bind(Wt))}const ET=1.33;function bT(n){return typeof n=="string"?TT(n):Math.ceil((n.byteLength||n.size)*ET)}function TT(n){let e=0,t=0;for(let i=0,s=n.length;i<s;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function AT(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function wT(n){let e={},t=n.split("&");for(let i=0,s=t.length;i<s;i++){let r=t[i].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class RT extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class lc extends dt{constructor(e){super(),this.writable=!1,io(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new RT(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ac(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=AT(e);return t.length?"?"+t:""}}const vp="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),dl=64,CT={};let jh=0,mr=0,Wh;function Xh(n){let e="";do e=vp[n%dl]+e,n=Math.floor(n/dl);while(n>0);return e}function _p(){const n=Xh(+new Date);return n!==Wh?(jh=0,Wh=n):n+"."+Xh(jh++)}for(;mr<dl;mr++)CT[vp[mr]]=mr;let xp=!1;try{xp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const PT=xp;function yp(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||PT))return new XMLHttpRequest}catch{}if(!e)try{return new Wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function LT(){}const DT=function(){return new yp({xdomain:!1}).responseType!=null}();class NT extends lc{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=DT&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};vT(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,gT(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=_p()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new cn(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class cn extends dt{constructor(e,t){super(),io(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=gp(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const i=this.xhr=new yp(t);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=cn.requestsCount++,cn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=LT,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete cn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}cn.requestsCount=0;cn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",qh);else if(typeof addEventListener=="function"){const n="onpagehide"in Wt?"pagehide":"unload";addEventListener(n,qh,!1)}}function qh(){for(let n in cn.requests)cn.requests.hasOwnProperty(n)&&cn.requests[n].abort()}const cc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),gr=Wt.WebSocket||Wt.MozWebSocket,$h=!0,IT="arraybuffer",Yh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class UT extends lc{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=Yh?{}:gp(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=$h&&!Yh?t?new gr(e,t):new gr(e):new gr(e,t,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;oc(i,this.supportsBinary,r=>{const o={};try{$h&&this.ws.send(r)}catch{}s&&cc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=_p()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!gr}}class FT extends lc{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=xT(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),s=_T();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const r=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;this.writer.write(i).then(()=>{s&&cc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const OT={websocket:UT,webtransport:FT,polling:NT},BT=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,kT=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function fl(n){if(n.length>2e3)throw"URI too long";const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let s=BT.exec(n||""),r={},o=14;for(;o--;)r[kT[o]]=s[o]||"";return t!=-1&&i!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=VT(r,r.path),r.queryKey=zT(r,r.query),r}function VT(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function zT(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(t[s]=r)}),t}let Sp=class Ii extends dt{constructor(e,t={}){super(),this.binaryType=IT,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=fl(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=fl(t.host).host),io(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=wT(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=mp,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new OT[e](i)}open(){let e;if(this.opts.rememberUpgrade&&Ii.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;Ii.priorWebsocketSuccess=!1;const s=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!i)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ii.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){i||(i=!0,u(),t.close(),t=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(h){t&&h.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Ii.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(t+=bT(s)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,s){if(typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:e,data:t,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){Ii.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const s=e.length;for(;i<s;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};Sp.protocol=mp;function HT(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=fl(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+e,i.href=i.protocol+"://"+r+(t&&t.port===i.port?"":":"+i.port),i}const GT=typeof ArrayBuffer=="function",jT=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Mp=Object.prototype.toString,WT=typeof Blob=="function"||typeof Blob<"u"&&Mp.call(Blob)==="[object BlobConstructor]",XT=typeof File=="function"||typeof File<"u"&&Mp.call(File)==="[object FileConstructor]";function uc(n){return GT&&(n instanceof ArrayBuffer||jT(n))||WT&&n instanceof Blob||XT&&n instanceof File}function Pr(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(Pr(n[t]))return!0;return!1}if(uc(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Pr(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Pr(n[t]))return!0;return!1}function qT(n){const e=[],t=n.data,i=n;return i.data=Lr(t,e),i.attachments=e.length,{packet:i,buffers:e}}function Lr(n,e,t){if(!n)return n;if(uc(n)){const i={_placeholder:!0,num:e.length};return e.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=Lr(n[s],e);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!t)return Lr(n.toJSON(),e,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=Lr(n[s],e));return i}return n}function $T(n,e){return n.data=pl(n.data,e),delete n.attachments,n}function pl(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=pl(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=pl(n[t],e));return n}const YT=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ue;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ue||(Ue={}));class KT{constructor(e){this.replacer=e}encode(e){return(e.type===Ue.EVENT||e.type===Ue.ACK)&&Pr(e)?this.encodeAsBinary({type:e.type===Ue.EVENT?Ue.BINARY_EVENT:Ue.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ue.BINARY_EVENT||e.type===Ue.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=qT(e),i=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(i),s}}class hc extends dt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===Ue.BINARY_EVENT;i||t.type===Ue.BINARY_ACK?(t.type=i?Ue.EVENT:Ue.ACK,this.reconstructor=new ZT(t)):super.emitReserved("decoded",t)}else if(uc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(Ue[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ue.BINARY_EVENT||i.type===Ue.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!JT(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(r,t)}else i.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(hc.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ue.CONNECT:return Kh(t);case Ue.DISCONNECT:return t===void 0;case Ue.CONNECT_ERROR:return typeof t=="string"||Kh(t);case Ue.EVENT:case Ue.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&YT.indexOf(t[0])===-1);case Ue.ACK:case Ue.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ZT{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=$T(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const JT=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function Kh(n){return Object.prototype.toString.call(n)==="[object Object]"}const QT=Object.freeze(Object.defineProperty({__proto__:null,Decoder:hc,Encoder:KT,get PacketType(){return Ue}},Symbol.toStringTag,{value:"Module"}));function Qt(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const eA=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ep extends dt{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Qt(e,"open",this.onopen.bind(this)),Qt(e,"packet",this.onpacket.bind(this)),Qt(e,"error",this.onerror.bind(this)),Qt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(eA.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:Ue.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),i.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,r)=>{t.push((o,a)=>i?o?r(o):s(a):s(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ue.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ue.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ue.EVENT:case Ue.BINARY_EVENT:this.onevent(e);break;case Ue.ACK:case Ue.BINARY_ACK:this.onack(e);break;case Ue.DISCONNECT:this.ondisconnect();break;case Ue.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...s){i||(i=!0,t.packet({type:Ue.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ue.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function ns(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ns.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};ns.prototype.reset=function(){this.attempts=0};ns.prototype.setMin=function(n){this.ms=n};ns.prototype.setMax=function(n){this.max=n};ns.prototype.setJitter=function(n){this.jitter=n};class ml extends dt{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,io(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ns({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||QT;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Sp(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=Qt(t,"open",function(){i.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Qt(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Qt(e,"ping",this.onping.bind(this)),Qt(e,"data",this.ondata.bind(this)),Qt(e,"error",this.onerror.bind(this)),Qt(e,"close",this.onclose.bind(this)),Qt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){cc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new Ep(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const hs={};function Dr(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=HT(n,e.path||"/socket.io"),i=t.source,s=t.id,r=t.path,o=hs[s]&&r in hs[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new ml(i,e):(hs[s]||(hs[s]=new ml(i,e)),l=hs[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Dr,{Manager:ml,Socket:Ep,io:Dr,connect:Dr});const oa=(n,e)=>typeof n=="string"?n.slice(0,e):"";function tA(n){if(!n||typeof n!="object")return null;const e=n,t=(Array.isArray(e.profiles)?e.profiles:[]).slice(0,8).map(s=>s&&typeof s=="object"?{id:oa(s.id,24),label:oa(s.label,32),desc:oa(s.desc,160)}:null).filter(s=>!!s&&!!s.id&&!!s.label);return t.length?{current:t.some(s=>s.id===e.current)?String(e.current):t[0].id,builder_fast:e.builder_fast==="local"?"local":"cloud",local_ready:e.local_ready===!0,profiles:t}:null}const nA=["text","node","news","chart","code","table","image","steps","svg","html","weather","recommendation"],iA=["single","compact","investigation"],sA=["normal","warn","danger","good"],rA=12,oA=2e4,Ht=(n,e=400)=>typeof n=="string"?n.slice(0,e):n==null?"":String(n).slice(0,e),ds=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);function Zh(n){if(!ds(n)||!Array.isArray(n.blocks))return null;const e=new Set,t=[];for(const r of n.blocks.slice(0,rA)){if(!ds(r)||!nA.includes(r.type))continue;let o=Ht(r.id,40)||`b${t.length+1}`;e.has(o)&&(o=`${o}_${t.length}`),e.add(o);const a=ds(r.data)?{...r.data}:{};(r.type==="svg"||r.type==="html")&&typeof a.markup=="string"&&(a.markup=a.markup.slice(0,oA)),r.type==="image"&&typeof a.src=="string"&&!/^(data:image\/|https:\/\/|\/)/.test(a.src)&&(a.src=""),t.push({id:o,type:r.type,title:r.title?Ht(r.title,120):void 0,tone:sA.includes(r.tone)?r.tone:"normal",data:a})}if(!t.length)return null;const i=(Array.isArray(n.links)?n.links:[]).filter(ds).filter(r=>e.has(Ht(r.from,40))&&e.has(Ht(r.to,40))).slice(0,24).map(r=>({from:Ht(r.from,40),to:Ht(r.to,40),label:r.label?Ht(r.label,40):void 0,style:r.style==="dashed"?"dashed":"solid"})),s=(Array.isArray(n.actions)?n.actions:[]).filter(ds).slice(0,4).map(r=>({id:Ht(r.id,40),label:Ht(r.label,40),kind:["primary","secondary","ghost"].includes(r.kind)?r.kind:"secondary"})).filter(r=>r.id&&r.label);return{id:Ht(n.id,60)||`stage-${Date.now()}`,title:Ht(n.title,80)||"Stage",ts:typeof n.ts=="number"?n.ts:Date.now()/1e3,layout:iA.includes(n.layout)?n.layout:void 0,blocks:t,links:i,actions:s,summary:n.summary?Ht(n.summary,300):void 0}}function aA(n){const e=(n||"").toLowerCase(),t=n&&n.length>3?n.slice(0,240):void 0;return/429|rate.?limit|tokens per minute|too many requests|413|quota/.test(e)?{text:"My free providers are asking me to slow down. Give me a minute and try again.",detail:t}:/401|403|unauthor|invalid api key|authentication|forbidden/.test(e)?{text:"One of my providers refused the connection. The API key in your .env may be wrong or expired.",detail:t}:/timeout|timed out|network|connection|unreachable|dns|offline/.test(e)?{text:"I couldn't reach the network just now. I'll be fine once it's back.",detail:t}:/disabled|not approve|unsafe/.test(e)?{text:"I didn't do that, because it wasn't allowed or wasn't approved.",detail:t}:{text:"That didn't work, and I'm not sure why yet. Try again, or ask me to look into it.",detail:t}}const vr=()=>Math.random().toString(36).slice(2,9),lA={conn:"connecting",status:"idle",statusText:"",messages:[],stages:[],activeStageId:null,pinned:!1,privacy:{paused:!1,watching:!0,sources:{}},nudge:null,approval:null,concernUntil:0,errorUntil:0,speaking:!1,workspace:null,tel:null,hw:null,focus:null,weather:null,files:null,sync:null,projects:[],guardian:null,scans:[],setup:null};function cA(n,e){switch(e.t){case"conn":return{...n,conn:e.v};case"status":{const t=e.state==="thinking"||e.state==="learning"?e.state:"idle";return{...n,status:t,statusText:t==="idle"?"":e.message??""}}case"user":return{...n,messages:[...n.messages,{id:vr(),role:"user",text:e.text}]};case"chunk":{const t=n.messages[n.messages.length-1];return t&&t.role==="vanta"&&t.streaming?{...n,speaking:!0,messages:[...n.messages.slice(0,-1),{...t,text:t.text+e.text}]}:{...n,speaking:!0,messages:[...n.messages,{id:vr(),role:"vanta",text:e.text,streaming:!0}]}}case"done":{const t=n.messages[n.messages.length-1],i=t!=null&&t.streaming?[...n.messages.slice(0,-1),{...t,streaming:!1}]:n.messages;return{...n,speaking:!1,messages:i}}case"say":return{...n,messages:[...n.messages,{id:vr(),role:"vanta",text:e.text,tag:e.tag,stageId:e.stageId,stageLabel:e.stageLabel}]};case"error":{const t=aA(e.message);return{...n,speaking:!1,status:"idle",errorUntil:Date.now()+8e3,messages:[...n.messages.map(i=>({...i,streaming:!1})),{id:vr(),role:"vanta",text:t.text,tag:"error"}]}}case"stage":{const t=[e.stage,...n.stages.filter(s=>s.id!==e.stage.id)].slice(0,12),i=!n.pinned||n.activeStageId===e.stage.id||!n.activeStageId;return{...n,stages:t,activeStageId:i?e.stage.id:n.activeStageId}}case"open":return{...n,activeStageId:e.id};case"pin":return{...n,pinned:!n.pinned};case"clearStage":return{...n,activeStageId:null,pinned:!1};case"hw":return{...n,hw:e.v};case"weather":return{...n,weather:e.v};case"files":return{...n,files:e.v};case"focus":return{...n,focus:e.card,activeStageId:e.card?null:n.activeStageId,pinned:e.card?!1:n.pinned};case"privacy":return{...n,privacy:e.v};case"nudge":return{...n,nudge:e.v};case"approval":return{...n,approval:e.v};case"concern":return{...n,concernUntil:Date.now()+e.ms};case"workspace":return{...n,workspace:e.v};case"sync":return{...n,sync:e.v};case"projects":return{...n,projects:Array.isArray(e.v)?e.v.slice(0,50):[]};case"guardian":return{...n,guardian:e.v};case"setup":return{...n,setup:tA(e.v)??n.setup};case"scans":return{...n,scans:Array.isArray(e.v)?e.v.slice(0,30):[]};case"scan":return{...n,scans:[e.v,...n.scans.filter(t=>t.sha256!==e.v.sha256)].slice(0,30)};case"tel":{const t=e.v;if(!t||typeof t!="object")return n;const i=r=>typeof r=="number"&&isFinite(r)?r:0,s=t.battery&&typeof t.battery=="object"?{pct:i(t.battery.pct),plugged:!!t.battery.plugged}:null;return{...n,tel:{cpu:i(t.cpu),mem:i(t.mem),down:i(t.down),up:i(t.up),procs:i(t.procs),battery:s,idle:!!t.idle,app:typeof t.app=="string"?t.app.slice(0,40):void 0,title:typeof t.title=="string"?t.title.slice(0,80):void 0}}}}}function uA(n,e=Date.now()){return n.conn!=="online"?"sleeping":n.errorUntil>e?"error":n.concernUntil>e?"alert":n.speaking?"speaking":n.status==="thinking"?"thinking":n.status==="learning"?"learning":"idle"}function hA(){const[n,e]=W.useReducer(cA,lA),t=W.useRef(null),[,i]=W.useReducer(o=>o+1,0);W.useEffect(()=>{const o=Dr({transports:["websocket","polling"]});t.current=o,o.on("connect",()=>{e({t:"conn",v:"online"}),o.emit("privacy_get"),o.emit("sync_get"),o.emit("hw_watch",{on:!0}),o.emit("weather_get",{}),o.emit("files_get")}),o.on("disconnect",()=>e({t:"conn",v:"offline"})),o.on("connect_error",l=>{e({t:"conn",v:"offline"}),/xhr poll error|unauthor|403|401/i.test(String(l==null?void 0:l.message))&&!o.active&&(window.location.href="/login")}),o.on("status",l=>e({t:"status",state:l.state,message:l.message})),o.on("stream_chunk",l=>e({t:"chunk",text:l.chunk})),o.on("stream_done",()=>e({t:"done"})),o.on("response",l=>e({t:"say",text:l.text})),o.on("error",l=>e({t:"error",message:l.message})),o.on("privacy_state",l=>e({t:"privacy",v:l})),o.on("workspace_files",l=>e({t:"workspace",v:l})),o.on("scans",l=>e({t:"scans",v:l})),o.on("scan_result",l=>e({t:"scan",v:l})),o.on("projects",l=>e({t:"projects",v:l})),o.on("guardian_state",l=>e({t:"guardian",v:l})),o.on("setup_state",l=>e({t:"setup",v:l})),o.on("sync_state",l=>e({t:"sync",v:l})),o.on("hw_focus",l=>e({t:"focus",card:l.card})),o.on("weather_state",l=>e({t:"weather",v:l})),o.on("files_state",l=>e({t:"files",v:l})),o.on("hw_state",l=>e({t:"hw",v:l})),o.on("telemetry",l=>e({t:"tel",v:l})),o.on("nudge",l=>{e({t:"nudge",v:l}),l.severity!=="low"&&e({t:"concern",ms:12e3})}),o.on("approval_request",(l,c)=>e({t:"approval",v:{action:l.action,detail:l.detail,ack:c}})),o.on("stage",l=>{const c=Zh(l);c&&(e({t:"stage",stage:c}),c.summary&&e({t:"say",text:c.summary,tag:c.blocks.some(u=>u.tone==="warn"||u.tone==="danger")?"heads-up":void 0,stageId:c.id,stageLabel:c.title}))}),o.on("alert",l=>{const c=Zh({id:`alert-${Date.now()}`,title:String(l.title).slice(0,60),layout:"single",blocks:[{id:"what",type:"text",title:"What I noticed",tone:l.severity==="high"?"danger":"warn",data:{body:l.message}},{id:"rec",type:"recommendation",data:{title:"Worth a look",reason:"I haven't changed anything. Tell me if you want me to dig deeper."}}],actions:[{id:`ask:Explain what you noticed about: ${l.title}. Is it safe, and what should I do?`,label:"Show me why",kind:"primary"},{id:"dismiss",label:"Ignore once",kind:"ghost"}],summary:`${l.title}. I put what I found on the stage.`});c&&(e({t:"stage",stage:c}),e({t:"say",text:c.summary,tag:"heads-up",stageId:c.id,stageLabel:c.title}),e({t:"concern",ms:12e3}))});const a=window.setInterval(()=>i(),1e3);return()=>{window.clearInterval(a),o.close()}},[]);const s=W.useCallback(o=>{var l;const a=o.trim();a&&(e({t:"user",text:a}),(l=t.current)==null||l.emit("chat",{message:a,think:!1}))},[]),r=W.useMemo(()=>({send:s,syncUnlock:o=>{var a;return(a=t.current)==null?void 0:a.emit("sync_unlock",{passphrase:o})},loadPanels:()=>{var o,a,l;(o=t.current)==null||o.emit("projects_get"),(a=t.current)==null||a.emit("guardian_get"),(l=t.current)==null||l.emit("scans_get")},scanFile:o=>{var a;return(a=t.current)==null?void 0:a.emit("scan_file",{path:o})},checkProject:o=>{var a;return(a=t.current)==null?void 0:a.emit("project_check",{id:o})},saveProject:o=>{var a;return(a=t.current)==null?void 0:a.emit("project_save",o)},removeProject:o=>{var a;return(a=t.current)==null?void 0:a.emit("project_remove",{id:o})},setSetup:o=>{var a;return(a=t.current)==null?void 0:a.emit("setup_set",{id:o})},setBuilderFast:o=>{var a;return(a=t.current)==null?void 0:a.emit("setup_builder_fast",{where:o})},setGuardMode:o=>{var a;return(a=t.current)==null?void 0:a.emit("guardian_mode",{mode:o})},setAgentMode:o=>{var a;return(a=t.current)==null?void 0:a.emit("agent_mode",{mode:o})},setEmergency:o=>{var a;return(a=t.current)==null?void 0:a.emit("guardian_emergency",{on:o})},purge:o=>{var a;return(a=t.current)==null?void 0:a.emit("guardian_purge",{id:o})},restore:o=>{var a;return(a=t.current)==null?void 0:a.emit("guardian_restore",{id:o})},syncNow:()=>{var o;return(o=t.current)==null?void 0:o.emit("sync_now")},pause:o=>{var a;return(a=t.current)==null?void 0:a.emit("privacy_pause",{paused:o})},setSource:(o,a)=>{var l;return(l=t.current)==null?void 0:l.emit("privacy_source",{name:o,enabled:a})},ackNudge:o=>{var a;(a=t.current)==null||a.emit("nudge_ack",{id:o}),e({t:"nudge",v:null})},answerApproval:(o,a)=>{a.ack({approved:o}),e({t:"approval",v:null})},openStage:o=>e({t:"open",id:o}),pinStage:()=>e({t:"pin"}),clearStage:()=>e({t:"clearStage"}),stageAction:(o,a)=>{var l;return(l=t.current)==null?void 0:l.emit("stage_action",{stage:o,action:a})},getWeather:o=>{var a;return(a=t.current)==null?void 0:a.emit("weather_get",{city:o})},getFiles:()=>{var o;return(o=t.current)==null?void 0:o.emit("files_get")},hwEnd:o=>{var a;return(a=t.current)==null?void 0:a.emit("hw_end",{pid:o})},hwUninstall:o=>{var a;return(a=t.current)==null?void 0:a.emit("hw_uninstall",{id:o})},dispatch:e}),[s]);return{state:n,api:r}}const dA={window:"windows",browser:"browser",process:"programs",screen:"screen"};function fA(){const n="(max-width: 819px)",[e,t]=W.useState(()=>window.matchMedia(n).matches);return W.useEffect(()=>{const i=window.matchMedia(n),s=()=>t(i.matches);return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]),e}function pA(){var se;const{state:n,api:e}=hA(),i=fA(),[s,r]=W.useState(qx),o=J=>{$x(J),r(J)},a=i||s==="pages",[l,c]=W.useState(()=>window.matchMedia("(max-width: 819px)").matches?"chat":"stage"),[u,h]=W.useState(!1),[d,g]=W.useState(!1),[_,y]=W.useState(Gx),[f,p,b]=Zx(),[v,T]=W.useState(!1),D=W.useRef(Date.now()),R=()=>{D.current=Date.now()},w=()=>{R(),T(!0)},P=J=>{jx(J),y(J)},Y=uA(n),x=W.useMemo(()=>n.stages.find(J=>J.id===n.activeStageId)??null,[n.stages,n.activeStageId]),E=n.status!=="idle"||Y==="alert"||Y==="speaking",I=Xx(_,!!x||E),F=Object.entries(n.privacy.sources).filter(([,J])=>J).map(([J])=>dA[J]??J),B=n.privacy.watching&&!n.privacy.paused,Z=n.privacy.paused?"Paused":F.length?`Watching: ${F.join(", ")}`:"Not watching";W.useEffect(()=>{x&&l!=="stage"&&g(!0)},[x==null?void 0:x.id]),W.useEffect(()=>{l==="stage"&&g(!1)},[l]),W.useEffect(()=>{const J=window.setInterval(()=>{document.hidden||(e.getWeather(),e.getFiles())},12e4);return()=>window.clearInterval(J)},[e]),W.useEffect(()=>{n.messages.length&&w()},[n.messages.length]),W.useEffect(()=>{if(!v)return;const J=window.setInterval(()=>{var Ie;!(((Ie=document.activeElement)==null?void 0:Ie.closest(".composer"))&&document.activeElement.value)&&!n.approval&&Date.now()-D.current>2e4&&T(!1)},2e3);return()=>window.clearInterval(J)},[v,n.approval]);const O=J=>{e.openStage(J),c("stage")},K=(J,ce)=>{ce.id.startsWith("ask:")?(e.send(ce.id.slice(4)),c("chat")):ce.id==="dismiss"?e.clearStage():e.stageAction(J,ce.id)},H=`Senses: ${F.filter(J=>J!=="screen").join(" · ")||"none"}  |  Screen: ${n.privacy.sources.screen?"on":"off"}`;return m.jsxs("div",{className:"app","data-hud":I?"on":"off","data-view":s,"data-rail":a||v?"open":"closed",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("span",{className:"wordmark",children:"VANTA"}),!i&&s==="pages"?m.jsxs("nav",{className:"pages",role:"tablist","aria-label":"Pages",children:[m.jsxs("button",{role:"tab","aria-selected":l==="stage",onClick:()=>c("stage"),children:["Dashboard",d?m.jsx("span",{className:"badge","aria-label":"new"}):null]}),m.jsx("button",{role:"tab","aria-selected":l==="chat",onClick:()=>c("chat"),children:"Chat"})]}):null,m.jsxs("div",{className:"top-right",children:[m.jsxs("span",{className:`pill ${B?"on":""}`,role:"status",children:[m.jsx("span",{className:"dot"}),m.jsx("span",{className:"label-long",children:Z}),m.jsx("span",{className:"label-short",style:{display:i?"inline":"none"},children:n.privacy.paused?"Paused":"Watching"})]}),m.jsx("button",{className:"btn",onClick:()=>e.pause(!n.privacy.paused),children:n.privacy.paused?"Resume":"Pause"}),m.jsx("button",{className:"btn icon","aria-label":"Settings",onClick:()=>h(J=>!J),children:m.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#8A9AB8",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[m.jsx("path",{d:"M4 7h10M18 7h2M4 17h2M10 17h10"}),m.jsx("circle",{cx:"16",cy:"7",r:"2"}),m.jsx("circle",{cx:"8",cy:"17",r:"2"})]})})]})]}),m.jsxs("aside",{className:"rail","data-hidden":a&&l!=="chat",onPointerDown:R,onKeyDown:R,children:[i?m.jsx("div",{className:`state-label ${Y}`,children:Tl[Y]}):null,m.jsx("div",{className:"status-line",children:n.statusText}),m.jsx(Qx,{messages:n.messages,onOpenStage:O}),m.jsx(ey,{autoFocus:!i,onActivity:R,onSend:e.send,disabled:n.conn!=="online",onVoiceError:J=>e.dispatch({t:"error",message:J})}),m.jsx("div",{className:"senses",children:H})]}),m.jsx("div",{style:{gridArea:i?"main":"stage",display:a&&l!=="stage"?"none":"flex",minHeight:0,minWidth:0},children:m.jsx(hT,{stage:x,history:n.stages,pinned:n.pinned,sphere:Y,amplitude:Y==="speaking"?.5:0,low:f==="low",hw:n.hw,weather:n.weather,files:n.files,onCity:e.getWeather,focus:n.focus,onEnd:e.hwEnd,onUninstall:e.hwUninstall,onAsk:J=>{e.send(J),c("chat")},caption:I&&((se=n.tel)!=null&&se.app)?`Watching with you: ${n.tel.app}`:void 0,footer:I&&!i?m.jsx(zx,{tel:n.tel}):null,onOpen:e.openStage,onPin:e.pinStage,onClear:e.clearStage,onAction:K})}),m.jsx(Pb,{s:n.setup,onSet:e.setSetup}),!a&&!v?m.jsx("button",{className:"dock",onClick:w,"aria-label":"Open chat",children:m.jsx("span",{children:"Ask VANTA…"})}):null,i&&m.jsxs("nav",{className:"tabs",role:"tablist",children:[m.jsx("button",{role:"tab","aria-selected":l==="chat",onClick:()=>c("chat"),children:"Chat"}),m.jsxs("button",{role:"tab","aria-selected":l==="stage",onClick:()=>c("stage"),children:["Stage",d?m.jsx("span",{className:"badge","aria-label":"new"}):null]})]}),n.conn==="offline"&&m.jsx("div",{className:"offline-bar",role:"status",children:"Reconnecting… I'll be right back."}),m.jsx(Ob,{open:u,privacy:n.privacy,onSource:e.setSource,onClose:()=>h(!1),projects:n.projects,guardian:n.guardian,onSaveProject:e.saveProject,onRemoveProject:e.removeProject,onRestore:e.restore,onGuardMode:e.setGuardMode,scans:n.scans,onScan:e.scanFile,onEmergency:e.setEmergency,onCheckProject:e.checkProject,onAgentMode:e.setAgentMode,setup:n.setup,onSetup:e.setSetup,onBuilderFast:e.setBuilderFast,onPurge:e.purge,onOpenPanels:e.loadPanels,sync:n.sync,onUnlock:e.syncUnlock,onSyncNow:e.syncNow,layout:_,onLayout:P,view:s,onView:o,fx:f,fxAuto:b,onFx:p}),m.jsx(Db,{nudge:n.nudge,onAck:e.ackNudge}),m.jsx(Nb,{approval:n.approval,onAnswer:e.answerApproval})]})}Pp.createRoot(document.getElementById("root")).render(m.jsx(Lp.StrictMode,{children:m.jsx(pA,{})}));
