var mp=Object.defineProperty;var gp=(n,e,t)=>e in n?mp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var _t=(n,e,t)=>gp(n,typeof e!="symbol"?e+"":e,t);import{r as $,j as T,c as vp,R as _p}from"./styles-CHVpM5-v.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="169",xp=0,fc=1,yp=2,Vh=1,Sp=2,gn=3,Hn=0,Pt=1,vn=2,Vn=0,Vi=1,ta=2,pc=3,mc=4,Mp=5,li=100,Ep=101,Tp=102,bp=103,Ap=104,wp=200,Rp=201,Cp=202,Pp=203,na=204,ia=205,Lp=206,Dp=207,Ip=208,Np=209,Up=210,Fp=211,Op=212,Bp=213,kp=214,sa=0,ra=1,oa=2,Gi=3,aa=4,la=5,ca=6,ua=7,zh=0,Vp=1,zp=2,zn=0,Hp=1,Gp=2,Wp=3,jp=4,Xp=5,qp=6,Yp=7,Hh=300,Wi=301,ji=302,ha=303,da=304,zr=306,fa=1e3,ui=1001,pa=1002,Xt=1003,$p=1004,Us=1005,Qt=1006,so=1007,hi=1008,wn=1009,Gh=1010,Wh=1011,xs=1012,hl=1013,mi=1014,xn=1015,Ts=1016,dl=1017,fl=1018,Xi=1020,jh=35902,Xh=1021,qh=1022,tn=1023,Yh=1024,$h=1025,zi=1026,qi=1027,Kh=1028,pl=1029,Zh=1030,ml=1031,gl=1033,mr=33776,gr=33777,vr=33778,_r=33779,ma=35840,ga=35841,va=35842,_a=35843,xa=36196,ya=37492,Sa=37496,Ma=37808,Ea=37809,Ta=37810,ba=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Na=37820,Ua=37821,xr=36492,Fa=36494,Oa=36495,Jh=36283,Ba=36284,ka=36285,Va=36286,Kp=3200,Zp=3201,Jp=0,Qp=1,kn="",nn="srgb",Xn="srgb-linear",vl="display-p3",Hr="display-p3-linear",Cr="linear",nt="srgb",Pr="rec709",Lr="p3",xi=7680,gc=519,em=512,tm=513,nm=514,Qh=515,im=516,sm=517,rm=518,om=519,vc=35044,_c="300 es",yn=2e3,Dr=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,za=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function am(n,e){return(n%e+e)%e}function oo(n,e,t){return(1-t)*n+t*e}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,s,r,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],f=s[6],E=s[1],x=s[4],S=s[7],P=s[2],R=s[5],w=s[8];return r[0]=o*v+a*E+l*P,r[3]=o*p+a*x+l*R,r[6]=o*f+a*S+l*w,r[1]=c*v+u*E+h*P,r[4]=c*p+u*x+h*R,r[7]=c*f+u*S+h*w,r[2]=d*v+m*E+g*P,r[5]=d*p+m*x+g*R,r[8]=d*f+m*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=t*h+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Ie;function ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lm(){const n=Ir("canvas");return n.style.display="block",n}const xc={};function yr(n){n in xc||(xc[n]=!0,console.warn(n))}function cm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function um(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yc=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sc=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[Xn]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[nn]:{transfer:nt,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hr]:{transfer:Cr,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Sc),fromReference:n=>n.applyMatrix3(yc)},[vl]:{transfer:nt,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sc),fromReference:n=>n.applyMatrix3(yc).convertLinearToSRGB()}},dm=new Set([Xn,Hr]),Xe={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=is[e].toReference,s=is[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return is[n].primaries},getTransfer:function(n){return n===kn?Cr:is[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(is[e].luminanceCoefficients)}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Ir("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pm=0;class td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(co(s[o].image)):r.push(co(s[o]))}else r=co(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mm=0;class Lt extends Ji{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=ui,s=ui,r=Qt,o=hi,a=tn,l=wn,c=Lt.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=bs(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Hh;Lt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(m+1)/2,P=(f+1)/2,R=(u+d)/4,w=(h+v)/4,D=(g+p)/4;return x>S&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=w/i):S>P?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=D/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=w/r,s=D/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-v)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gm extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends gm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nd extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vm extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==g){let p=1-a;const f=l*d+c*m+u*g+h*v,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,f*E);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const S=a*E;if(l=l*p+d*S,c=c*p+m*S,u=u*p+g*S,h=h*p+v*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new z,Mc=new As;class ws{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(r,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Os.subVectors(this.max,ss),Si.subVectors(e.a,ss),Mi.subVectors(e.b,ss),Ei.subVectors(e.c,ss),Dn.subVectors(Mi,Si),In.subVectors(Ei,Mi),Kn.subVectors(Si,Ei);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!ho(t,Si,Mi,Ei,Os)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,Si,Mi,Ei,Os))?!1:(Bs.crossVectors(Dn,In),t=[Bs.x,Bs.y,Bs.z],ho(t,Si,Mi,Ei,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new z,new z,new z,new z,new z,new z,new z,new z],$t=new z,Fs=new ws,Si=new z,Mi=new z,Ei=new z,Dn=new z,In=new z,Kn=new z,ss=new z,Os=new z,Bs=new z,Zn=new z;function ho(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zn.fromArray(n,r);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _m=new ws,rs=new z,fo=new z;let Gr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_m.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(fo)),this.expandByPoint(rs.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const dn=new z,po=new z,ks=new z,Nn=new z,mo=new z,Vs=new z,go=new z;class id{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){po.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(po);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Nn.dot(this.direction),l=-Nn.dot(ks),c=Nn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(po).addScaledVector(ks,d),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),s=dn.dot(dn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,s,r){mo.subVectors(t,e),Vs.subVectors(i,e),go.crossVectors(mo,Vs);let o=this.direction.dot(go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);const l=a*this.direction.dot(Vs.crossVectors(Nn,Vs));if(l<0)return null;const c=a*this.direction.dot(mo.cross(Nn));if(c<0||l+c>o)return null;const u=-a*Nn.dot(go);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,h,d,m,g,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,m,g,v,p)}set(e,t,i,s,r,o,a,l,c,u,h,d,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,ym)}lookAt(e,t,i){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Un.crossVectors(i,Ft),Un.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Un.crossVectors(i,Ft)),Un.normalize(),zs.crossVectors(Ft,Un),s[0]=Un.x,s[4]=zs.x,s[8]=Ft.x,s[1]=Un.y,s[5]=zs.y,s[9]=Ft.y,s[2]=Un.z,s[6]=zs.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],E=i[3],x=i[7],S=i[11],P=i[15],R=s[0],w=s[4],D=s[8],J=s[12],_=s[1],b=s[5],G=s[9],U=s[13],H=s[2],j=s[6],B=s[10],K=s[14],V=s[3],se=s[7],ie=s[11],me=s[15];return r[0]=o*R+a*_+l*H+c*V,r[4]=o*w+a*b+l*j+c*se,r[8]=o*D+a*G+l*B+c*ie,r[12]=o*J+a*U+l*K+c*me,r[1]=u*R+h*_+d*H+m*V,r[5]=u*w+h*b+d*j+m*se,r[9]=u*D+h*G+d*B+m*ie,r[13]=u*J+h*U+d*K+m*me,r[2]=g*R+v*_+p*H+f*V,r[6]=g*w+v*b+p*j+f*se,r[10]=g*D+v*G+p*B+f*ie,r[14]=g*J+v*U+p*K+f*me,r[3]=E*R+x*_+S*H+P*V,r[7]=E*w+x*b+S*j+P*se,r[11]=E*D+x*G+S*B+P*ie,r[15]=E*J+x*U+S*K+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+v*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],E=h*p*c-v*d*c+v*l*m-a*p*m-h*l*f+a*d*f,x=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,S=u*v*c-g*h*c+g*a*m-o*v*m-u*a*f+o*h*f,P=g*h*l-u*v*l-g*a*d+o*v*d+u*a*p-o*h*p,R=t*E+i*x+s*S+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(v*d*r-h*p*r-v*s*m+i*p*m+h*s*f-i*d*f)*w,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*f+i*l*f)*w,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*w,e[4]=x*w,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*f+t*d*f)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*w,e[8]=S*w,e[9]=(g*h*r-u*v*r-g*i*m+t*v*m+u*i*f-t*h*f)*w,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*w,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*w,e[12]=P*w,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*p+t*h*p)*w,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*w,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,g=r*h,v=o*u,p=o*h,f=a*h,E=l*c,x=l*u,S=l*h,P=i.x,R=i.y,w=i.z;return s[0]=(1-(v+f))*P,s[1]=(m+S)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-S)*R,s[5]=(1-(d+f))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(p-E)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,u=1/o,h=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=yn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,g;if(a===yn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Dr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,m=(i+s)*u;let g,v;if(a===yn)g=(o+r)*h,v=-2*h;else if(a===Dr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new z,Kt=new ct,xm=new z(0,0,0),ym=new z(1,1,1),Un=new z,zs=new z,Ft=new z,Ec=new ct,Tc=new As;class Rn{constructor(e=0,t=0,i=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sm=0;const bc=new z,bi=new As,fn=new ct,Hs=new z,os=new z,Mm=new z,Em=new As,Ac=new z(1,0,0),wc=new z(0,1,0),Rc=new z(0,0,1),Cc={type:"added"},Tm={type:"removed"},Ai={type:"childadded",child:null},vo={type:"childremoved",child:null};class Dt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new z,t=new Rn,i=new As,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(os,Hs,this.up):fn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(fn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tm),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new z,pn=new z,_o=new z,mn=new z,wi=new z,Ri=new z,Pc=new z,xo=new z,yo=new z,So=new z,Mo=new at,Eo=new at,To=new at;class en{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zt.subVectors(s,t),pn.subVectors(i,t),_o.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(pn),l=Zt.dot(_o),c=pn.dot(pn),u=pn.dot(_o),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Mo.setScalar(0),Eo.setScalar(0),To.setScalar(0),Mo.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,i),To.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(e,t,i,s){return Zt.subVectors(i,t),pn.subVectors(e,t),Zt.cross(pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Zt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,i),Ri.subVectors(r,i),xo.subVectors(e,i);const l=wi.dot(xo),c=Ri.dot(xo);if(l<=0&&c<=0)return t.copy(i);yo.subVectors(e,s);const u=wi.dot(yo),h=Ri.dot(yo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(wi,o);So.subVectors(e,r);const m=wi.dot(So),g=Ri.dot(So);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ri,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Pc.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Pc,a);const f=1/(p+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=am(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bo(o,r,e+1/3),this.g=bo(o,r,e),this.b=bo(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Xe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ct(yt.r*255,0,255))*65536+Math.round(Ct(yt.g*255,0,255))*256+Math.round(Ct(yt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,s=yt.g,r=yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=nn){Xe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,s=yt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Gs);const i=oo(Fn.h,Gs.h,t),s=oo(Fn.s,Gs.s,t),r=oo(Fn.l,Gs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new qe;qe.NAMES=rd;let bm=0;class Rs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Vi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class od extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,Ws=new Je;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class ad extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ld extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fi extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Am=0;const Vt=new ct,Ao=new Dt,Ci=new z,Ot=new ws,as=new ws,mt=new z;class Pn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?ld:ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ot.min,as.min),Ot.expandByPoint(mt),mt.addVectors(Ot.max,as.max),Ot.expandByPoint(mt)):(Ot.expandByPoint(as.min),Ot.expandByPoint(as.max))}Ot.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(e,c),mt.add(Ci)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new z,l[D]=new z;const c=new z,u=new z,h=new z,d=new Je,m=new Je,g=new Je,v=new z,p=new z;function f(D,J,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,J),h.fromBufferAttribute(i,_),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,J),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(b),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(b),a[D].add(v),a[J].add(v),a[_].add(v),l[D].add(p),l[J].add(p),l[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,J=E.length;D<J;++D){const _=E[D],b=_.start,G=_.count;for(let U=b,H=b+G;U<H;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new z,S=new z,P=new z,R=new z;function w(D){P.fromBufferAttribute(s,D),R.copy(P);const J=a[D];x.copy(J),x.sub(P.multiplyScalar(P.dot(J))).normalize(),S.crossVectors(R,J);const b=S.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,b)}for(let D=0,J=E.length;D<J;++D){const _=E[D],b=_.start,G=_.count;for(let U=b,H=b+G;U<H;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ct,Jn=new id,js=new Gr,Dc=new z,Xs=new z,qs=new z,Ys=new z,wo=new z,$s=new z,Ic=new z,Ks=new z;class Sn extends Dt{constructor(e=new Pn,t=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wo.fromBufferAttribute(h,e),o?$s.addScaledVector(wo,u):$s.addScaledVector(wo.sub(t),u))}t.add($s)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(js.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(js,Dc)===null||Jn.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Lc.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,P=x;S<P;S+=3){const R=a.getX(S),w=a.getX(S+1),D=a.getX(S+2);s=Zs(this,f,e,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const E=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=Zs(this,o,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,P=x;S<P;S+=3){const R=S,w=S+1,D=S+2;s=Zs(this,f,e,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const E=p,x=p+1,S=p+2;s=Zs(this,o,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function wm(n,e,t,i,s,r,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:n}}function Zs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Xs),n.getVertexPosition(l,qs),n.getVertexPosition(c,Ys);const u=wm(n,e,t,i,Xs,qs,Ys,Ic);if(u){const h=new z;en.getBarycoord(Ic,Xs,qs,Ys,h),s&&(u.uv=en.getInterpolatedAttribute(s,a,l,c,h,new Je)),r&&(u.uv1=en.getInterpolatedAttribute(r,a,l,c,h,new Je)),o&&(u.normal=en.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};en.getNormal(Xs,qs,Ys,d.normal),u.face=d,u.barycoord=h}return u}class Cs extends Pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(h,2));function g(v,p,f,E,x,S,P,R,w,D,J){const _=S/w,b=P/D,G=S/2,U=P/2,H=R/2,j=w+1,B=D+1;let K=0,V=0;const se=new z;for(let ie=0;ie<B;ie++){const me=ie*b-U;for(let Oe=0;Oe<j;Oe++){const Ye=Oe*_-G;se[v]=Ye*E,se[p]=me*x,se[f]=H,c.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[f]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(Oe/w),h.push(1-ie/D),K+=1}}for(let ie=0;ie<D;ie++)for(let me=0;me<w;me++){const Oe=d+me+j*ie,Ye=d+me+j*(ie+1),X=d+(me+1)+j*(ie+1),ee=d+(me+1)+j*ie;l.push(Oe,Ye,ee),l.push(Ye,X,ee),V+=6}a.addGroup(m,V,J),m+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const s in i)e[s]=i[s]}return e}function Rm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Cm={clone:Yi,merge:Tt};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ud extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new z,Nc=new Je,Uc=new Je;class Wt extends ud{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Uc),t.subVectors(Uc,Nc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class Dm extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hd extends Lt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Im extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cs(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new Sn(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Qt),new Dm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ro=new z,Nm=new z,Um=new Ie;class si{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ro.subVectors(i,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ro),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Um.getNormalMatrix(e),s=this.coplanarPoint(Ro).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Gr,Js=new z;class dd{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],E=s[13],x=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,p-m,S-f).normalize(),i[1].setComponents(l+r,d+c,p+m,S+f).normalize(),i[2].setComponents(l+o,d+u,p+g,S+E).normalize(),i[3].setComponents(l-o,d-u,p-g,S-E).normalize(),i[4].setComponents(l-a,d-h,p-v,S-x).normalize(),t===yn)i[5].setComponents(l+a,d+h,p+v,S+x).normalize();else if(t===Dr)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fm(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Wr extends Pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){const E=f*d-o;for(let x=0;x<c;x++){const S=x*h-r;g.push(S,-E,0),v.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const x=E+c*f,S=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;m.push(x,S,R),m.push(S,P,R)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(v,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,og=`#define PI 3.141592653589793
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`
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
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
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
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Ug=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
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
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sv=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Wv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:jm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:$m,iridescence_fragment:Km,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,cube_uv_reflection_fragment:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:ug,emissivemap_fragment:hg,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:vg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:Sg,fog_fragment:Mg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:bg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:wg,lights_pars_begin:Rg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Lg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:Bg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Gg,map_pars_fragment:Wg,map_particle_fragment:jg,map_particle_pars_fragment:Xg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:$g,morphcolor_vertex:Kg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Jg,morphtarget_vertex:Qg,normal_fragment_begin:ev,normal_fragment_maps:tv,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:sv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,opaque_fragment:uv,packing:hv,premultiplied_alpha_fragment:dv,project_vertex:fv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:xv,shadowmap_vertex:yv,shadowmask_pars_fragment:Sv,skinbase_vertex:Mv,skinning_pars_vertex:Ev,skinning_vertex:Tv,skinnormal_vertex:bv,specularmap_fragment:Av,specularmap_pars_fragment:wv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Cv,transmission_fragment:Pv,transmission_pars_fragment:Lv,uv_pars_fragment:Dv,uv_pars_vertex:Iv,uv_vertex:Nv,worldpos_vertex:Uv,background_vert:Fv,background_frag:Ov,backgroundCube_vert:Bv,backgroundCube_frag:kv,cube_vert:Vv,cube_frag:zv,depth_vert:Hv,depth_frag:Gv,distanceRGBA_vert:Wv,distanceRGBA_frag:jv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:$v,meshbasic_vert:Kv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:Qv,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:u_,points_frag:h_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},rn={basic:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Tt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Tt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Tt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Tt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Tt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Tt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Tt([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Tt([re.lights,re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};rn.physical={uniforms:Tt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Qs={r:0,b:0,g:0},ei=new Rn,g_=new ct;function v_(n,e,t,i,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const S=g(E);S===null?f(a,l):S&&S.isColor&&(f(S,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===zr)?(u===void 0&&(u=new Sn(new Cs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Yi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ei.copy(x.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(ei)),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(h!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Sn(new Wr(2,2),new Cn({name:"BackgroundMaterial",uniforms:Yi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB(Qs,cd(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:v,addToRenderList:p}}function __(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(_,b,G,U,H){let j=!1;const B=h(U,G,b);r!==B&&(r=B,c(r.object)),j=m(_,U,G,H),j&&g(_,U,G,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(_,b,G,U),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,b,G){const U=G.wireframe===!0;let H=i[_.id];H===void 0&&(H={},i[_.id]=H);let j=H[b.id];j===void 0&&(j={},H[b.id]=j);let B=j[U];return B===void 0&&(B=d(l()),j[U]=B),B}function d(_){const b=[],G=[],U=[];for(let H=0;H<t;H++)b[H]=0,G[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:U,object:_,attributes:{},index:null}}function m(_,b,G,U){const H=r.attributes,j=b.attributes;let B=0;const K=G.getAttributes();for(const V in K)if(K[V].location>=0){const ie=H[V];let me=j[V];if(me===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(_,b,G,U){const H={},j=b.attributes;let B=0;const K=G.getAttributes();for(const V in K)if(K[V].location>=0){let ie=j[V];ie===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),H[V]=me,B++}r.attributes=H,r.attributesNum=B,r.index=U}function v(){const _=r.newAttributes;for(let b=0,G=_.length;b<G;b++)_[b]=0}function p(_){f(_,0)}function f(_,b){const G=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;G[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),H[_]!==b&&(n.vertexAttribDivisor(_,b),H[_]=b)}function E(){const _=r.newAttributes,b=r.enabledAttributes;for(let G=0,U=b.length;G<U;G++)b[G]!==_[G]&&(n.disableVertexAttribArray(G),b[G]=0)}function x(_,b,G,U,H,j,B){B===!0?n.vertexAttribIPointer(_,b,G,H,j):n.vertexAttribPointer(_,b,G,U,H,j)}function S(_,b,G,U){v();const H=U.attributes,j=G.getAttributes(),B=b.defaultAttributeValues;for(const K in j){const V=j[K];if(V.location>=0){let se=H[K];if(se===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),se!==void 0){const ie=se.normalized,me=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const Ye=Oe.buffer,X=Oe.type,ee=Oe.bytesPerElement,ve=X===n.INT||X===n.UNSIGNED_INT||se.gpuType===hl;if(se.isInterleavedBufferAttribute){const he=se.data,Pe=he.stride,Te=se.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)f(V.location+Be,he.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Be=0;Be<V.locationSize;Be++)x(V.location+Be,me/V.locationSize,X,ie,Pe*ee,(Te+me/V.locationSize*Be)*ee,ve)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)f(V.location+he,se.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<V.locationSize;he++)p(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let he=0;he<V.locationSize;he++)x(V.location+he,me/V.locationSize,X,ie,me*ee,me/V.locationSize*he*ee,ve)}}else if(B!==void 0){const ie=B[K];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(V.location,ie);break;case 3:n.vertexAttrib3fv(V.location,ie);break;case 4:n.vertexAttrib4fv(V.location,ie);break;default:n.vertexAttrib1fv(V.location,ie)}}}}E()}function P(){D();for(const _ in i){const b=i[_];for(const G in b){const U=b[G];for(const H in U)u(U[H].object),delete U[H];delete b[G]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const b=i[_.id];for(const G in b){const U=b[G];for(const H in U)u(U[H].object),delete U[H];delete b[G]}delete i[_.id]}function w(_){for(const b in i){const G=i[b];if(G[_.id]===void 0)continue;const U=G[_.id];for(const H in U)u(U[H].object),delete U[H];delete G[_.id]}}function D(){J(),o=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:J,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function x_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==tn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==wn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function S_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new si,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const E=r?0:i,x=E*4;let S=f.clippingState||null;l.value=S,S=u(g,d,x,m);for(let P=0;P!==x;++P)S[P]=t[P];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,S=m;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function M_(n){let e=new WeakMap;function t(o,a){return a===ha?o.mapping=Wi:a===da&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ha||a===da)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Im(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class E_ extends ud{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Fc=[.125,.215,.35,.446,.526,.582],ci=20,Co=new E_,Oc=new qe;let Po=null,Lo=0,Do=0,Io=!1;const ri=(1+Math.sqrt(5))/2,Di=1/ri,Bc=[new z(-ri,Di,0),new z(ri,Di,0),new z(-Di,0,ri),new z(Di,0,ri),new z(0,ri,-Di),new z(0,ri,Di),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Lo,Do),this._renderer.xr.enabled=Io,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ts,format:tn,colorSpace:Xn,depthBuffer:!1},s=Vc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(r)),this._blurMaterial=b_(r,e,t)}return s}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,s){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Oc),u.toneMapping=zn,u.autoClear=!1;const m=new od({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Sn(new Cs,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Oc),v=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;er(s,E*x,f>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Wi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bc[(s-r-1)%Bc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const f=[];let E=0;for(let w=0;w<ci;++w){const D=w/v,J=Math.exp(-D*D/2);f.push(J),w===0?E+=J:w<p&&(E+=2*J)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[s],P=3*S*(s>x-Ni?s-x+Ni:0),R=4*(this._cubeSize-S);er(t,P,R,3*S,2*S),l.setRenderTarget(t),l.render(h,Co)}}function T_(n){const e=[],t=[],i=[];let s=n;const r=n-Ni+1+Fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ni?l=Fc[o-n+Ni-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,p=2,f=1,E=new Float32Array(v*g*m),x=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,D=R>2?0:-1,J=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];E.set(J,v*g*R),x.set(d,p*g*R);const _=[R,R,R,R,R,R];S.set(_,f*g*R)}const P=new Pn;P.setAttribute("position",new qt(E,v)),P.setAttribute("uv",new qt(x,p)),P.setAttribute("faceIndex",new qt(S,f)),e.push(P),s>Ni&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vc(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function b_(n,e,t){const i=new Float32Array(ci),s=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function zc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function A_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ha||l===da,u=l===Wi||l===ji;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new kc(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function w_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R_(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let x=0,S=E.length;x<S;x+=3){const P=E[x+0],R=E[x+1],w=E[x+2];d.push(P,R,R,w,w,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const P=x+0,R=x+1,w=x+2;d.push(P,R,R,w,w,P)}}else return;const p=new(ed(d)?ld:ad)(d,1);p.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function C_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function h(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<v.length;E++)t.update(f,i,v[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function P_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function L_(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let J=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let S=a.attributes.position.count*x,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*P*4*h),w=new nd(R,S,P,h);w.type=xn,w.needsUpdate=!0;const D=x*4;for(let _=0;_<h;_++){const b=p[_],G=f[_],U=E[_],H=S*P*4*_;for(let j=0;j<b.count;j++){const B=j*D;m===!0&&(s.fromBufferAttribute(b,j),R[H+B+0]=s.x,R[H+B+1]=s.y,R[H+B+2]=s.z,R[H+B+3]=0),g===!0&&(s.fromBufferAttribute(G,j),R[H+B+4]=s.x,R[H+B+5]=s.y,R[H+B+6]=s.z,R[H+B+7]=0),v===!0&&(s.fromBufferAttribute(U,j),R[H+B+8]=s.x,R[H+B+9]=s.y,R[H+B+10]=s.z,R[H+B+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Je(S,P)},i.set(a,d),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function D_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class pd extends Lt{constructor(e,t,i,s,r,o,a,l,c,u=zi){if(u!==zi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zi&&(i=mi),i===void 0&&u===qi&&(i=Xi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const md=new Lt,Gc=new pd(1,1),gd=new nd,vd=new vm,_d=new hd,Wc=[],jc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jr(n,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function O_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Yc.set(i),n.uniformMatrix2fv(this.addr,!1,Yc),pt(t,i)}}function B_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;qc.set(i),n.uniformMatrix3fv(this.addr,!1,qc),pt(t,i)}}function k_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Xc.set(i),n.uniformMatrix4fv(this.addr,!1,Xc),pt(t,i)}}function V_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function W_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=Qh,r=Gc):r=md,t.setTexture2D(e||r,s)}function $_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vd,s)}function K_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_d,s)}function Z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gd,s)}function J_(n){switch(n){case 5126:return I_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return k_;case 5124:case 35670:return V_;case 35667:case 35671:return z_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return j_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}function Q_(n,e){n.uniform1fv(this.addr,e)}function e0(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function t0(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function n0(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function i0(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s0(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r0(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o0(n,e){n.uniform1iv(this.addr,e)}function a0(n,e){n.uniform2iv(this.addr,e)}function l0(n,e){n.uniform3iv(this.addr,e)}function c0(n,e){n.uniform4iv(this.addr,e)}function u0(n,e){n.uniform1uiv(this.addr,e)}function h0(n,e){n.uniform2uiv(this.addr,e)}function d0(n,e){n.uniform3uiv(this.addr,e)}function f0(n,e){n.uniform4uiv(this.addr,e)}function p0(n,e,t){const i=this.cache,s=e.length,r=jr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||md,r[o])}function m0(n,e,t){const i=this.cache,s=e.length,r=jr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vd,r[o])}function g0(n,e,t){const i=this.cache,s=e.length,r=jr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_d,r[o])}function v0(n,e,t){const i=this.cache,s=e.length,r=jr(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gd,r[o])}function _0(n){switch(n){case 5126:return Q_;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}class x0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}}class y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}}class S0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function M0(n,e,t){const i=n.name,s=i.length;for(No.lastIndex=0;;){const r=No.exec(i),o=No.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$c(t,c===void 0?new x0(a,n,e):new y0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new S0(a),$c(t,h)),t=h}}}class Sr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);M0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Kc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const E0=37297;let T0=0;function b0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function A0(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===Lr&&t===Pr?i="LinearDisplayP3ToLinearSRGB":e===Pr&&t===Lr&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case Hr:return[i,"LinearTransferOETF"];case nn:case vl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+b0(n.getShaderSource(e),o)}else return s}function w0(n,e){const t=A0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function R0(n,e){let t;switch(e){case Hp:t="Linear";break;case Gp:t="Reinhard";break;case Wp:t="Cineon";break;case jp:t="ACESFilmic";break;case qp:t="AgX";break;case Yp:t="Neutral";break;case Xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tr=new z;function C0(){Xe.getLuminanceCoefficients(tr);const n=tr.x.toFixed(4),e=tr.y.toFixed(4),t=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function L0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hs(n){return n!==""}function Jc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(I0,U0)}const N0=new Map;function U0(n,e){let t=De[e];if(t===void 0){const i=N0.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(F0,O0)}function O0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function B0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case ji:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case zp:e="ENVMAP_BLENDING_ADD";break}return e}function H0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function G0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=B0(t),c=k0(t),u=V0(t),h=z0(t),d=H0(t),m=P0(t),g=L0(r),v=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?De.tonemapping_pars_fragment:"",t.toneMapping!==zn?R0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),C0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=Ha(o),o=Jc(o,t),o=Qc(o,t),a=Ha(a),a=Jc(a,t),a=Qc(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+p+o,S=E+f+a,P=Kc(s,s.VERTEX_SHADER,x),R=Kc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,P),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(b){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(R).trim();let j=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,R);else{const K=Zc(s,P,"vertex"),V=Zc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+K+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||H==="")&&(B=!1);B&&(b.diagnostics={runnable:j,programLog:G,vertexShader:{log:U,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(P),s.deleteShader(R),D=new Sr(s,v),J=D0(s,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let J;this.getAttributes=function(){return J===void 0&&w(this),J};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,E0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let W0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new X0(e),t.set(e,i)),i}}class X0{constructor(e){this.id=W0++,this.code=e,this.usedTimes=0}}function q0(n,e,t,i,s,r,o){const a=new sd,l=new j0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,b,G,U,H){const j=U.fog,B=H.geometry,K=_.isMeshStandardMaterial?U.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||K),se=V&&V.mapping===zr?V.image.height:null,ie=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Oe=me!==void 0?me.length:0;let Ye=0;B.morphAttributes.position!==void 0&&(Ye=1),B.morphAttributes.normal!==void 0&&(Ye=2),B.morphAttributes.color!==void 0&&(Ye=3);let X,ee,ve,he;if(ie){const At=rn[ie];X=At.vertexShader,ee=At.fragmentShader}else X=_.vertexShader,ee=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);const Pe=n.getRenderTarget(),Te=H.isInstancedMesh===!0,Be=H.isBatchedMesh===!0,Ke=!!_.map,ke=!!_.matcap,C=!!V,It=!!_.aoMap,Ue=!!_.lightMap,ze=!!_.bumpMap,Ae=!!_.normalMap,et=!!_.displacementMap,Ce=!!_.emissiveMap,A=!!_.metalnessMap,y=!!_.roughnessMap,F=_.anisotropy>0,Y=_.clearcoat>0,Q=_.dispersion>0,q=_.iridescence>0,xe=_.sheen>0,oe=_.transmission>0,de=F&&!!_.anisotropyMap,He=Y&&!!_.clearcoatMap,te=Y&&!!_.clearcoatNormalMap,fe=Y&&!!_.clearcoatRoughnessMap,we=q&&!!_.iridescenceMap,Re=q&&!!_.iridescenceThicknessMap,pe=xe&&!!_.sheenColorMap,Fe=xe&&!!_.sheenRoughnessMap,Le=!!_.specularMap,Qe=!!_.specularColorMap,L=!!_.specularIntensityMap,ce=oe&&!!_.transmissionMap,W=oe&&!!_.thicknessMap,Z=!!_.gradientMap,ae=!!_.alphaMap,ue=_.alphaTest>0,Ve=!!_.alphaHash,ut=!!_.extensions;let bt=zn;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Ge={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:ee,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Be,batchingColor:Be&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Xn,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:ke,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:se,aoMap:It,lightMap:Ue,bumpMap:ze,normalMap:Ae,displacementMap:m&&et,emissiveMap:Ce,normalMapObjectSpace:Ae&&_.normalMapType===Qp,normalMapTangentSpace:Ae&&_.normalMapType===Jp,metalnessMap:A,roughnessMap:y,anisotropy:F,anisotropyMap:de,clearcoat:Y,clearcoatMap:He,clearcoatNormalMap:te,clearcoatRoughnessMap:fe,dispersion:Q,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:Re,sheen:xe,sheenColorMap:pe,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:Qe,specularIntensityMap:L,transmission:oe,transmissionMap:ce,thicknessMap:W,gradientMap:Z,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ue,alphaHash:Ve,combine:_.combine,mapUv:Ke&&p(_.map.channel),aoMapUv:It&&p(_.aoMap.channel),lightMapUv:Ue&&p(_.lightMap.channel),bumpMapUv:ze&&p(_.bumpMap.channel),normalMapUv:Ae&&p(_.normalMap.channel),displacementMapUv:et&&p(_.displacementMap.channel),emissiveMapUv:Ce&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:de&&p(_.anisotropyMap.channel),clearcoatMapUv:He&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(_.sheenRoughnessMap.channel),specularMapUv:Le&&p(_.specularMap.channel),specularColorMapUv:Qe&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:ce&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:ae&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ae||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(Ke||ae),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Pt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function E(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)b.push(G),b.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(x(b,_),S(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const b=v[_.type];let G;if(b){const U=rn[b];G=Cm.clone(U.uniforms)}else G=_.uniforms;return G}function R(_,b){let G;for(let U=0,H=u.length;U<H;U++){const j=u[U];if(j.cacheKey===b){G=j,++G.usedTimes;break}}return G===void 0&&(G=new G0(n,b,_,r),u.push(G)),G}function w(_){if(--_.usedTimes===0){const b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function D(_){l.remove(_)}function J(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:J}}function Y0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function a(h,d,m,g,v,p){const f=o(h,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,g,v,p){const f=o(h,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||$0),i.length>1&&i.sort(d||nu),s.length>1&&s.sort(d||nu)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function K0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new qe};break;case"SpotLight":t={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function J0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Q0=0;function ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tx(n){const e=new Z0,t=J0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,E=0,x=0,S=0,P=0,R=0,w=0;c.sort(ex);for(let J=0,_=c.length;J<_;J++){const b=c[J],G=b.color,U=b.intensity,H=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=G.r*U,h+=G.g*U,d+=G.b*U;else if(b.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(b.sh.coefficients[B],U);w++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,V=t.get(b);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=b.shadow.matrix,E++}i.directional[m]=B,m++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(G).multiplyScalar(U),B.distance=H,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,i.spot[v]=B;const K=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,K.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[v]=K.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=j,S++}v++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(G).multiplyScalar(U),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=B,p++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const K=b.shadow,V=t.get(b);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=B,g++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(U),B.groundColor.copy(b.groundColor).multiplyScalar(U),i.hemi[f]=B,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==x||D.numSpotShadows!==S||D.numSpotMaps!==P||D.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=x,D.numSpotShadows=S,D.numSpotMaps=P,D.numLightProbes=w,i.version=Q0++)}function l(c,u){let h=0,d=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const x=c[f];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function su(n){const e=new tx(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new su(n),e.set(s,[a])):r>=o.length?(a=new su(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ix extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function ax(n,e,t){let i=new dd;const s=new Je,r=new Je,o=new at,a=new ix({depthPacking:Zp}),l=new sx,c={},u=t.maxTextureSize,h={[Hn]:Pt,[Pt]:Hn,[vn]:vn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let f=this.type;this.render=function(R,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const J=n.getRenderTarget(),_=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const U=f!==gn&&this.type===gn,H=f===gn&&this.type!==gn;for(let j=0,B=R.length;j<B;j++){const K=R[j],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||U===!0||H===!0){const me=this.type!==gn?{minFilter:Xt,magFilter:Xt}:{};V.map!==null&&V.map.dispose(),V.map=new gi(s.x,s.y,me),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ie=V.getViewportCount();for(let me=0;me<ie;me++){const Oe=V.getViewport(me);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),G.viewport(o),V.updateMatrices(K,me),i=V.getFrustum(),S(w,D,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&E(V,D),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(J,_,b)};function E(R,w){const D=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,D,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,D,m,v,null)}function x(R,w,D,J){let _=null;const b=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)_=b;else if(_=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=_.uuid,U=w.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let j=H[U];j===void 0&&(j=_.clone(),H[U]=j,w.addEventListener("dispose",P)),_=j}if(_.visible=w.visible,_.wireframe=w.wireframe,J===gn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=n.properties.get(_);G.light=D}return _}function S(R,w,D,J,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===gn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const U=e.update(R),H=R.material;if(Array.isArray(H)){const j=U.groups;for(let B=0,K=j.length;B<K;B++){const V=j[B],se=H[V.materialIndex];if(se&&se.visible){const ie=x(R,se,J,_);R.onBeforeShadow(n,R,w,D,U,ie,V),n.renderBufferDirect(D,null,U,ie,R,V),R.onAfterShadow(n,R,w,D,U,ie,V)}}}else if(H.visible){const j=x(R,H,J,_);R.onBeforeShadow(n,R,w,D,U,j,null),n.renderBufferDirect(D,null,U,j,R,null),R.onAfterShadow(n,R,w,D,U,j,null)}}const G=R.children;for(let U=0,H=G.length;U<H;U++)S(G[U],w,D,J,_)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const J=c[D],_=R.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}const lx={[sa]:ra,[oa]:ca,[aa]:ua,[Gi]:la,[ra]:sa,[ca]:oa,[ua]:aa,[la]:Gi};function cx(n){function e(){let L=!1;const ce=new at;let W=null;const Z=new at(0,0,0,0);return{setMask:function(ae){W!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){L=ae},setClear:function(ae,ue,Ve,ut,bt){bt===!0&&(ae*=ut,ue*=ut,Ve*=ut),ce.set(ae,ue,Ve,ut),Z.equals(ce)===!1&&(n.clearColor(ae,ue,Ve,ut),Z.copy(ce))},reset:function(){L=!1,W=null,Z.set(-1,0,0,0)}}}function t(){let L=!1,ce=!1,W=null,Z=null,ae=null;return{setReversed:function(ue){ce=ue},setTest:function(ue){ue?ve(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ue){W!==ue&&!L&&(n.depthMask(ue),W=ue)},setFunc:function(ue){if(ce&&(ue=lx[ue]),Z!==ue){switch(ue){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ue}},setLocked:function(ue){L=ue},setClear:function(ue){ae!==ue&&(n.clearDepth(ue),ae=ue)},reset:function(){L=!1,W=null,Z=null,ae=null}}}function i(){let L=!1,ce=null,W=null,Z=null,ae=null,ue=null,Ve=null,ut=null,bt=null;return{setTest:function(Ge){L||(Ge?ve(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ge){ce!==Ge&&!L&&(n.stencilMask(Ge),ce=Ge)},setFunc:function(Ge,At,un){(W!==Ge||Z!==At||ae!==un)&&(n.stencilFunc(Ge,At,un),W=Ge,Z=At,ae=un)},setOp:function(Ge,At,un){(ue!==Ge||Ve!==At||ut!==un)&&(n.stencilOp(Ge,At,un),ue=Ge,Ve=At,ut=un)},setLocked:function(Ge){L=Ge},setClear:function(Ge){bt!==Ge&&(n.clearStencil(Ge),bt=Ge)},reset:function(){L=!1,ce=null,W=null,Z=null,ae=null,ue=null,Ve=null,ut=null,bt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,E=null,x=null,S=null,P=null,R=new qe(0,0,0),w=0,D=!1,J=null,_=null,b=null,G=null,U=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=B>=2);let V=null,se={};const ie=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Oe=new at().fromArray(ie),Ye=new at().fromArray(me);function X(L,ce,W,Z){const ae=new Uint8Array(4),ue=n.createTexture();n.bindTexture(L,ue),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<W;Ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ce+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ue}const ee={};ee[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),r.setFunc(Gi),Ue(!1),ze(fc),ve(n.CULL_FACE),C(Vn);function ve(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function he(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Pe(L,ce){return u[L]!==ce?(n.bindFramebuffer(L,ce),u[L]=ce,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(L,ce){let W=d,Z=!1;if(L){W=h.get(ce),W===void 0&&(W=[],h.set(ce,W));const ae=L.textures;if(W.length!==ae.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ve=ae.length;ue<Ve;ue++)W[ue]=n.COLOR_ATTACHMENT0+ue;W.length=ae.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function Be(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Ke={[li]:n.FUNC_ADD,[Ep]:n.FUNC_SUBTRACT,[Tp]:n.FUNC_REVERSE_SUBTRACT};Ke[bp]=n.MIN,Ke[Ap]=n.MAX;const ke={[wp]:n.ZERO,[Rp]:n.ONE,[Cp]:n.SRC_COLOR,[na]:n.SRC_ALPHA,[Up]:n.SRC_ALPHA_SATURATE,[Ip]:n.DST_COLOR,[Lp]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[ia]:n.ONE_MINUS_SRC_ALPHA,[Np]:n.ONE_MINUS_DST_COLOR,[Dp]:n.ONE_MINUS_DST_ALPHA,[Fp]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Bp]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function C(L,ce,W,Z,ae,ue,Ve,ut,bt,Ge){if(L===Vn){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),L!==Mp){if(L!==v||Ge!==D){if((p!==li||x!==li)&&(n.blendEquation(n.FUNC_ADD),p=li,x=li),Ge)switch(L){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ta:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ta:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,E=null,S=null,P=null,R.set(0,0,0),w=0,v=L,D=Ge}return}ae=ae||ce,ue=ue||W,Ve=Ve||Z,(ce!==p||ae!==x)&&(n.blendEquationSeparate(Ke[ce],Ke[ae]),p=ce,x=ae),(W!==f||Z!==E||ue!==S||Ve!==P)&&(n.blendFuncSeparate(ke[W],ke[Z],ke[ue],ke[Ve]),f=W,E=Z,S=ue,P=Ve),(ut.equals(R)===!1||bt!==w)&&(n.blendColor(ut.r,ut.g,ut.b,bt),R.copy(ut),w=bt),v=L,D=!1}function It(L,ce){L.side===vn?he(n.CULL_FACE):ve(n.CULL_FACE);let W=L.side===Pt;ce&&(W=!W),Ue(W),L.blending===Vi&&L.transparent===!1?C(Vn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){J!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),J=L)}function ze(L){L!==xp?(ve(n.CULL_FACE),L!==_&&(L===fc?n.cullFace(n.BACK):L===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),_=L}function Ae(L){L!==b&&(j&&n.lineWidth(L),b=L)}function et(L,ce,W){L?(ve(n.POLYGON_OFFSET_FILL),(G!==ce||U!==W)&&(n.polygonOffset(ce,W),G=ce,U=W)):he(n.POLYGON_OFFSET_FILL)}function Ce(L){L?ve(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+H-1),V!==L&&(n.activeTexture(L),V=L)}function y(L,ce,W){W===void 0&&(V===null?W=n.TEXTURE0+H-1:W=V);let Z=se[W];Z===void 0&&(Z={type:void 0,texture:void 0},se[W]=Z),(Z.type!==L||Z.texture!==ce)&&(V!==W&&(n.activeTexture(W),V=W),n.bindTexture(L,ce||ee[L]),Z.type=L,Z.texture=ce)}function F(){const L=se[V];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){Oe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function pe(L){Ye.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function Fe(L,ce){let W=l.get(ce);W===void 0&&(W=new WeakMap,l.set(ce,W));let Z=W.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(ce,L.name),W.set(L,Z))}function Le(L,ce){const Z=l.get(ce).get(L);a.get(ce)!==Z&&(n.uniformBlockBinding(ce,Z,L.__bindingPointIndex),a.set(ce,Z))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,se={},u={},h=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,E=null,x=null,S=null,P=null,R=new qe(0,0,0),w=0,D=!1,J=null,_=null,b=null,G=null,U=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:he,bindFramebuffer:Pe,drawBuffers:Te,useProgram:Be,setBlending:C,setMaterial:It,setFlipSided:Ue,setCullFace:ze,setLineWidth:Ae,setPolygonOffset:et,setScissorTest:Ce,activeTexture:A,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:fe,texImage3D:we,updateUBOMapping:Fe,uniformBlockBinding:Le,texStorage2D:He,texStorage3D:te,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Re,viewport:pe,reset:Qe}}function ru(n,e,t,i){const s=ux(i);switch(t){case Xh:return n*e;case Yh:return n*e;case $h:return n*e*2;case Kh:return n*e/s.components*s.byteLength;case pl:return n*e/s.components*s.byteLength;case Zh:return n*e*2/s.components*s.byteLength;case ml:return n*e*2/s.components*s.byteLength;case qh:return n*e*3/s.components*s.byteLength;case tn:return n*e*4/s.components*s.byteLength;case gl:return n*e*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vr:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:case _a:return Math.max(n,16)*Math.max(e,8)/4;case ma:case va:return Math.max(n,8)*Math.max(e,8)/2;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xr:case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jh:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Va:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ux(n){switch(n){case wn:case Gh:return{byteLength:1,components:1};case xs:case Wh:case Ts:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case mi:case hl:case xn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return m?new OffscreenCanvas(A,y):Ir("canvas")}function v(A,y,F){let Y=1;const Q=Ce(A);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*Q.width),xe=Math.floor(Y*Q.height);h===void 0&&(h=g(q,xe));const oe=y?g(q,xe):h;return oe.width=q,oe.height=xe,oe.getContext("2d").drawImage(A,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+xe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Xt&&A.minFilter!==Qt}function f(A){n.generateMipmap(A)}function E(A,y,F,Y,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),y===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),y===n.RGBA){const xe=Q?Cr:Xe.getTransfer(Y);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=xe===nt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,y){let F;return A?y===null||y===mi||y===Xi?F=n.DEPTH24_STENCIL8:y===xn?F=n.DEPTH32F_STENCIL8:y===xs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Xi?F=n.DEPTH_COMPONENT24:y===xn?F=n.DEPTH_COMPONENT32F:y===xs&&(F=n.DEPTH_COMPONENT16),F}function S(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){const y=A.target;y.removeEventListener("dispose",P),w(y),y.isVideoTexture&&u.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),J(y)}function w(A){const y=i.get(A);if(y.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(Y).length===0&&d.delete(F)}i.remove(A)}function D(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const F=A.source,Y=d.get(F);delete Y[y.__cacheKey],o.memory.textures--}function J(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const q=i.get(F[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(A)}let _=0;function b(){_=0}function G(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function U(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function H(A,y){const F=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(F,A,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function j(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Ye(F,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function B(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Ye(F,A,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function K(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const V={[fa]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},se={[Xt]:n.NEAREST,[$p]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},ie={[em]:n.NEVER,[om]:n.ALWAYS,[tm]:n.LESS,[Qh]:n.LEQUAL,[nm]:n.EQUAL,[rm]:n.GEQUAL,[im]:n.GREATER,[sm]:n.NOTEQUAL};function me(A,y){if(y.type===xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===so||y.magFilter===Us||y.magFilter===hi||y.minFilter===Qt||y.minFilter===so||y.minFilter===Us||y.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,V[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,V[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,V[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,se[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==Us&&y.minFilter!==hi||y.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P));const Y=y.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=U(y);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;const xe=Q[A.__cacheKey];xe!==void 0&&(Q[A.__cacheKey].usedTimes--,xe.usedTimes===0&&D(y)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return F}function Ye(A,y,F){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Oe(A,y),q=y.source;t.bindTexture(Y,A.__webglTexture,n.TEXTURE0+F);const xe=i.get(q);if(q.version!==xe.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const oe=Xe.getPrimaries(Xe.workingColorSpace),de=y.colorSpace===kn?null:Xe.getPrimaries(y.colorSpace),He=y.colorSpace===kn||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let te=v(y.image,!1,s.maxTextureSize);te=et(y,te);const fe=r.convert(y.format,y.colorSpace),we=r.convert(y.type);let Re=E(y.internalFormat,fe,we,y.colorSpace,y.isVideoTexture);me(Y,y);let pe;const Fe=y.mipmaps,Le=y.isVideoTexture!==!0,Qe=xe.__version===void 0||Q===!0,L=q.dataReady,ce=S(y,te);if(y.isDepthTexture)Re=x(y.format===qi,y.type),Qe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,fe,we,null));else if(y.isDataTexture)if(Fe.length>0){Le&&Qe&&t.texStorage2D(n.TEXTURE_2D,ce,Re,Fe[0].width,Fe[0].height);for(let W=0,Z=Fe.length;W<Z;W++)pe=Fe[W],Le?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,we,pe.data):t.texImage2D(n.TEXTURE_2D,W,Re,pe.width,pe.height,0,fe,we,pe.data);y.generateMipmaps=!1}else Le?(Qe&&t.texStorage2D(n.TEXTURE_2D,ce,Re,te.width,te.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,fe,we,te.data)):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,fe,we,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Re,Fe[0].width,Fe[0].height,te.depth);for(let W=0,Z=Fe.length;W<Z;W++)if(pe=Fe[W],y.format!==tn)if(fe!==null)if(Le){if(L)if(y.layerUpdates.size>0){const ae=ru(pe.width,pe.height,y.format,y.type);for(const ue of y.layerUpdates){const Ve=pe.data.subarray(ue*ae/pe.data.BYTES_PER_ELEMENT,(ue+1)*ae/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ue,pe.width,pe.height,1,fe,Ve,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Re,pe.width,pe.height,te.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,we,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Re,pe.width,pe.height,te.depth,0,fe,we,pe.data)}else{Le&&Qe&&t.texStorage2D(n.TEXTURE_2D,ce,Re,Fe[0].width,Fe[0].height);for(let W=0,Z=Fe.length;W<Z;W++)pe=Fe[W],y.format!==tn?fe!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,we,pe.data):t.texImage2D(n.TEXTURE_2D,W,Re,pe.width,pe.height,0,fe,we,pe.data)}else if(y.isDataArrayTexture)if(Le){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Re,te.width,te.height,te.depth),L)if(y.layerUpdates.size>0){const W=ru(te.width,te.height,y.format,y.type);for(const Z of y.layerUpdates){const ae=te.data.subarray(Z*W/te.data.BYTES_PER_ELEMENT,(Z+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,fe,we,ae)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,we,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,fe,we,te.data);else if(y.isData3DTexture)Le?(Qe&&t.texStorage3D(n.TEXTURE_3D,ce,Re,te.width,te.height,te.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,we,te.data)):t.texImage3D(n.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,fe,we,te.data);else if(y.isFramebufferTexture){if(Qe)if(Le)t.texStorage2D(n.TEXTURE_2D,ce,Re,te.width,te.height);else{let W=te.width,Z=te.height;for(let ae=0;ae<ce;ae++)t.texImage2D(n.TEXTURE_2D,ae,Re,W,Z,0,fe,we,null),W>>=1,Z>>=1}}else if(Fe.length>0){if(Le&&Qe){const W=Ce(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Re,W.width,W.height)}for(let W=0,Z=Fe.length;W<Z;W++)pe=Fe[W],Le?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,fe,we,pe):t.texImage2D(n.TEXTURE_2D,W,Re,fe,we,pe);y.generateMipmaps=!1}else if(Le){if(Qe){const W=Ce(te);t.texStorage2D(n.TEXTURE_2D,ce,Re,W.width,W.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,we,te)}else t.texImage2D(n.TEXTURE_2D,0,Re,fe,we,te);p(y)&&f(Y),xe.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function X(A,y,F){if(y.image.length!==6)return;const Y=Oe(A,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const q=i.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const xe=Xe.getPrimaries(Xe.workingColorSpace),oe=y.colorSpace===kn?null:Xe.getPrimaries(y.colorSpace),de=y.colorSpace===kn||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!He&&!te?fe[Z]=v(y.image[Z],!0,s.maxCubemapSize):fe[Z]=te?y.image[Z].image:y.image[Z],fe[Z]=et(y,fe[Z]);const we=fe[0],Re=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),Fe=E(y.internalFormat,Re,pe,y.colorSpace),Le=y.isVideoTexture!==!0,Qe=q.__version===void 0||Y===!0,L=Q.dataReady;let ce=S(y,we);me(n.TEXTURE_CUBE_MAP,y);let W;if(He){Le&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,we.width,we.height);for(let Z=0;Z<6;Z++){W=fe[Z].mipmaps;for(let ae=0;ae<W.length;ae++){const ue=W[ae];y.format!==tn?Re!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ue.width,ue.height,Re,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ue.width,ue.height,Re,pe,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,ue.width,ue.height,0,Re,pe,ue.data)}}}else{if(W=y.mipmaps,Le&&Qe){W.length>0&&ce++;const Z=Ce(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Re,pe,fe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,fe[Z].width,fe[Z].height,0,Re,pe,fe[Z].data);for(let ae=0;ae<W.length;ae++){const Ve=W[ae].image[Z].image;Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Ve.width,Ve.height,Re,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,Ve.width,Ve.height,0,Re,pe,Ve.data)}}else{Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,pe,fe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Re,pe,fe[Z]);for(let ae=0;ae<W.length;ae++){const ue=W[ae];Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Re,pe,ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,Re,pe,ue.image[Z])}}}p(y)&&f(n.TEXTURE_CUBE_MAP),q.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,F,Y,Q,q){const xe=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),de=E(F.internalFormat,xe,oe,F.colorSpace);if(!i.get(y).__hasExternalTextures){const te=Math.max(1,y.width>>q),fe=Math.max(1,y.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,de,te,fe,y.depth,0,xe,oe,null):t.texImage2D(Q,q,de,te,fe,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ze(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,i.get(F).__webglTexture,0,Ue(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,i.get(F).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(A,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(y.stencilBuffer,Q),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ue(y);ze(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,q,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{const Y=y.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],xe=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),de=E(q.internalFormat,xe,oe,q.colorSpace),He=Ue(y);F&&ze(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,de,y.width,y.height):ze(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const Y=i.get(y.depthTexture).__webglTexture,Q=Ue(y);if(y.depthTexture.format===zi)ze(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===qi)ze(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const y=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");he(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),ve(y.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ve(y.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(A,y,F){const Y=i.get(A);y!==void 0&&ee(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pe(A)}function Be(A){const y=A.texture,F=i.get(A),Y=i.get(y);A.addEventListener("dispose",R);const Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let de=0;de<y.mipmaps.length;de++)F.__webglFramebuffer[oe][de]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,de=Q.length;oe<de;oe++){const He=i.get(Q[oe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ze(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const de=Q[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const He=r.convert(de.format,de.colorSpace),te=r.convert(de.type),fe=E(de.internalFormat,He,te,de.colorSpace,A.isXRRenderTarget===!0),we=Ue(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),me(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ee(F.__webglFramebuffer[oe][de],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ee(F.__webglFramebuffer[oe],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(y)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,de=Q.length;oe<de;oe++){const He=Q[oe],te=i.get(He);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),me(n.TEXTURE_2D,He),ee(F.__webglFramebuffer,A,He,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(He)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),me(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ee(F.__webglFramebuffer[de],A,y,n.COLOR_ATTACHMENT0,oe,de);else ee(F.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,oe,0);p(y)&&f(oe),t.unbindTexture()}A.depthBuffer&&Pe(A)}function Ke(A){const y=A.textures;for(let F=0,Y=y.length;F<Y;F++){const Q=y[F];if(p(Q)){const q=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(Q).__webglTexture;t.bindTexture(q,xe),f(q),t.unbindTexture()}}}const ke=[],C=[];function It(A){if(A.samples>0){if(ze(A)===!1){const y=A.textures,F=A.width,Y=A.height;let Q=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),oe=y.length>1;if(oe)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const He=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,n.NEAREST),l===!0&&(ke.length=0,C.length=0,ke.push(n.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const He=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ue(A){return Math.min(s.maxSamples,A.samples)}function ze(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function et(A,y){const F=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Xn&&F!==kn&&(Xe.getTransfer(F)===nt?(Y!==tn||Q!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ze}function dx(n,e){function t(i,s=kn){let r;const o=Xe.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===Xh)return n.ALPHA;if(i===qh)return n.RGB;if(i===tn)return n.RGBA;if(i===Yh)return n.LUMINANCE;if(i===$h)return n.LUMINANCE_ALPHA;if(i===zi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===mr||i===gr||i===vr||i===_r)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===va||i===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===ya||i===Sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xa||i===ya)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Ea||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Na||i===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xr||i===Fa||i===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xr)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jh||i===Ba||i===ka||i===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fx extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Ji{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const v=new vx,p=t.getContextAttributes();let f=null,E=null;const x=[],S=[],P=new Je;let R=null;const w=new Wt;w.layers.enable(1),w.viewport=new at;const D=new Wt;D.layers.enable(2),D.viewport=new at;const J=[w,D],_=new fx;_.layers.enable(1),_.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new Uo,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new Uo,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new Uo,x[X]=ee),ee.getHandSpace()};function U(X){const ee=S.indexOf(X.inputSource);if(ee===-1)return;const ve=x[ee];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let X=0;X<x.length;X++){const ee=S[X];ee!==null&&(S[X]=null,x[X].disconnect(ee))}b=null,G=null,v.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,E=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new gi(m.framebufferWidth,m.framebufferHeight,{format:tn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ve=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?qi:zi,ve=p.stencil?Xi:mi);const Pe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new gi(d.textureWidth,d.textureHeight,{format:tn,type:wn,depthTexture:new pd(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){const ve=X.removed[ee],he=S.indexOf(ve);he>=0&&(S[he]=null,x[he].disconnect(ve))}for(let ee=0;ee<X.added.length;ee++){const ve=X.added[ee];let he=S.indexOf(ve);if(he===-1){for(let Te=0;Te<x.length;Te++)if(Te>=S.length){S.push(ve),he=Te;break}else if(S[Te]===null){S[Te]=ve,he=Te;break}if(he===-1)break}const Pe=x[he];Pe&&Pe.connect(ve)}}const B=new z,K=new z;function V(X,ee,ve){B.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const he=B.distanceTo(K),Pe=ee.projectionMatrix.elements,Te=ve.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),Ke=Pe[14]/(Pe[10]+1),ke=(Pe[9]+1)/Pe[5],C=(Pe[9]-1)/Pe[5],It=(Pe[8]-1)/Pe[0],Ue=(Te[8]+1)/Te[0],ze=Be*It,Ae=Be*Ue,et=he/(-It+Ue),Ce=et*-It;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const A=Be+et,y=Ke+et,F=ze-Ce,Y=Ae+(he-Ce),Q=ke*Ke/y*A,q=C*Ke/y*A;X.projectionMatrix.makePerspective(F,Y,Q,q,A,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ee=X.near,ve=X.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),_.near=D.near=w.near=ee,_.far=D.far=w.far=ve,(b!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,G=_.far);const he=X.parent,Pe=_.cameras;se(_,he);for(let Te=0;Te<Pe.length;Te++)se(Pe[Te],he);Pe.length===2?V(_,w,D):_.projectionMatrix.copy(w.projectionMatrix),ie(X,_,he)};function ie(X,ee,ve){ve===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let me=null;function Oe(X,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let he=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let Te=0;Te<ve.length;Te++){const Be=ve[Te];let Ke=null;if(m!==null)Ke=m.getViewport(Be);else{const C=h.getViewSubImage(d,Be);Ke=C.viewport,Te===0&&(e.setRenderTargetTextures(E,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(E))}let ke=J[Te];ke===void 0&&(ke=new Wt,ke.layers.enable(Te),ke.viewport=new at,J[Te]=ke),ke.matrix.fromArray(Be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(_.matrix.copy(ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(ke)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Te=h.getDepthInformation(ve[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,s.renderState)}}for(let ve=0;ve<x.length;ve++){const he=S[ve],Pe=x[ve];he!==null&&Pe!==void 0&&Pe.update(he,ee,c||o)}me&&me(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ye=new fd;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const ti=new Rn,xx=new ct;function yx(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,cd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),x=E.envMap,S=E.envMapRotation;x&&(p.envMap.value=x,ti.copy(S),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(ti)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",p));const P=x.program;i.updateUBOMapping(E,P);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const x=h();E.__bindingPointIndex=x;const S=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=s[E.id],S=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,w=S.length;R<w;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let J=0,_=D.length;J<_;J++){const b=D[J];if(m(b,R,J,P)===!0){const G=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let j=0;j<U.length;j++){const B=U[j],K=v(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,G+H,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,S,P){const R=E.value,w=x+"_"+S;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const D=P[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(E){const x=E.uniforms;let S=0;const P=16;for(let w=0,D=x.length;w<D;w++){const J=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,b=J.length;_<b;_++){const G=J[_],U=Array.isArray(G.value)?G.value:[G.value];for(let H=0,j=U.length;H<j;H++){const B=U[H],K=v(B),V=S%P,se=V%K.boundary,ie=V+se;S+=se,ie!==0&&P-ie<K.storage&&(S+=P-ie),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}const R=S%P;return R>0&&(S+=P-R),E.__size=S,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Mx{constructor(e={}){const{canvas:t=lm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let S=!1,P=0,R=0,w=null,D=-1,J=null;const _=new at,b=new at;let G=null;const U=new qe(0);let H=0,j=t.width,B=t.height,K=1,V=null,se=null;const ie=new at(0,0,j,B),me=new at(0,0,j,B);let Oe=!1;const Ye=new dd;let X=!1,ee=!1;const ve=new ct,he=new ct,Pe=new z,Te=new at,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ke(){return w===null?K:1}let C=i;function It(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),C===null){const I="webgl2";if(C=It(I,M),C===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,ze,Ae,et,Ce,A,y,F,Y,Q,q,xe,oe,de,He,te,fe,we,Re,pe,Fe,Le,Qe,L;function ce(){Ue=new w_(C),Ue.init(),Le=new dx(C,Ue),ze=new y_(C,Ue,e,Le),Ae=new cx(C),ze.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),et=new P_(C),Ce=new Y0,A=new hx(C,Ue,Ae,Ce,ze,Le,et),y=new M_(x),F=new A_(x),Y=new Fm(C),Qe=new __(C,Y),Q=new R_(C,Y,et,Qe),q=new D_(C,Q,Y,et),Re=new L_(C,ze,A),te=new S_(Ce),xe=new q0(x,y,F,Ue,ze,Qe,te),oe=new yx(x,Ce),de=new K0,He=new nx(Ue),we=new v_(x,y,F,Ae,q,d,l),fe=new ax(x,q,ze),L=new Sx(C,et,ze,Ae),pe=new x_(C,Ue,et),Fe=new C_(C,Ue,et),et.programs=xe.programs,x.capabilities=ze,x.extensions=Ue,x.properties=Ce,x.renderLists=de,x.shadowMap=fe,x.state=Ae,x.info=et}ce();const W=new _x(x,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(j,B,!1))},this.getSize=function(M){return M.set(j,B)},this.setSize=function(M,I,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,B=I,t.width=Math.floor(M*K),t.height=Math.floor(I*K),O===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(j*K,B*K).floor()},this.setDrawingBufferSize=function(M,I,O){j=M,B=I,K=O,t.width=Math.floor(M*O),t.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(ie)},this.setViewport=function(M,I,O,k){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,I,O,k),Ae.viewport(_.copy(ie).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(me)},this.setScissor=function(M,I,O,k){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,I,O,k),Ae.scissor(b.copy(me).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(M){Ae.setScissorTest(Oe=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(M=!0,I=!0,O=!0){let k=0;if(M){let N=!1;if(w!==null){const ne=w.texture.format;N=ne===gl||ne===ml||ne===pl}if(N){const ne=w.texture.type,le=ne===wn||ne===mi||ne===xs||ne===Xi||ne===dl||ne===fl,ge=we.getClearColor(),_e=we.getClearAlpha(),Ee=ge.r,be=ge.g,ye=ge.b;le?(m[0]=Ee,m[1]=be,m[2]=ye,m[3]=_e,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Ee,g[1]=be,g[2]=ye,g[3]=_e,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}I&&(k|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),de.dispose(),He.dispose(),Ce.dispose(),y.dispose(),F.dispose(),q.dispose(),Qe.dispose(),L.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",rc),W.removeEventListener("sessionend",oc),$n.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=et.autoReset,I=fe.enabled,O=fe.autoUpdate,k=fe.needsUpdate,N=fe.type;ce(),et.autoReset=M,fe.enabled=I,fe.autoUpdate=O,fe.needsUpdate=k,fe.type=N}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const I=M.target;I.removeEventListener("dispose",Ve),ut(I)}function ut(M){bt(M),Ce.remove(M)}function bt(M){const I=Ce.get(M).programs;I!==void 0&&(I.forEach(function(O){xe.releaseProgram(O)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,k,N,ne){I===null&&(I=Be);const le=N.isMesh&&N.matrixWorld.determinant()<0,ge=hp(M,I,O,k,N);Ae.setMaterial(k,le);let _e=O.index,Ee=1;if(k.wireframe===!0){if(_e=Q.getWireframeAttribute(O),_e===void 0)return;Ee=2}const be=O.drawRange,ye=O.attributes.position;let $e=be.start*Ee,tt=(be.start+be.count)*Ee;ne!==null&&($e=Math.max($e,ne.start*Ee),tt=Math.min(tt,(ne.start+ne.count)*Ee)),_e!==null?($e=Math.max($e,0),tt=Math.min(tt,_e.count)):ye!=null&&($e=Math.max($e,0),tt=Math.min(tt,ye.count));const st=tt-$e;if(st<0||st===1/0)return;Qe.setup(N,k,ge,O,_e);let Nt,We=pe;if(_e!==null&&(Nt=Y.get(_e),We=Fe,We.setIndex(Nt)),N.isMesh)k.wireframe===!0?(Ae.setLineWidth(k.wireframeLinewidth*ke()),We.setMode(C.LINES)):We.setMode(C.TRIANGLES);else if(N.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),Ae.setLineWidth(Se*ke()),N.isLineSegments?We.setMode(C.LINES):N.isLineLoop?We.setMode(C.LINE_LOOP):We.setMode(C.LINE_STRIP)}else N.isPoints?We.setMode(C.POINTS):N.isSprite&&We.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)We.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))We.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,gt=N._multiDrawCounts,je=N._multiDrawCount,Yt=_e?Y.get(_e).bytesPerElement:1,_i=Ce.get(k).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)_i.setValue(C,"_gl_DrawID",Ut),We.render(Se[Ut]/Yt,gt[Ut])}else if(N.isInstancedMesh)We.renderInstances($e,st,N.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gt=Math.min(O.instanceCount,Se);We.renderInstances($e,st,gt)}else We.render($e,st)};function Ge(M,I,O){M.transparent===!0&&M.side===vn&&M.forceSinglePass===!1?(M.side=Pt,M.needsUpdate=!0,Ns(M,I,O),M.side=Hn,M.needsUpdate=!0,Ns(M,I,O),M.side=vn):Ns(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),p=He.get(O),p.init(I),E.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let le=0;le<ne.length;le++){const ge=ne[le];Ge(ge,O,N),k.add(ge)}else Ge(ne,O,N),k.add(ne)}),E.pop(),p=null,k},this.compileAsync=function(M,I,O=null){const k=this.compile(M,I,O);return new Promise(N=>{function ne(){if(k.forEach(function(le){Ce.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){N(M);return}setTimeout(ne,10)}Ue.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let At=null;function un(M){At&&At(M)}function rc(){$n.stop()}function oc(){$n.start()}const $n=new fd;$n.setAnimationLoop(un),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){At=M,W.setAnimationLoop(M),M===null?$n.stop():$n.start()},W.addEventListener("sessionstart",rc),W.addEventListener("sessionend",oc),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,w),p=He.get(M,E.length),p.init(I),E.push(p),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ye.setFromProjectionMatrix(he),ee=this.localClippingEnabled,X=te.init(this.clippingPlanes,ee),v=de.get(M,f.length),v.init(),f.push(v),W.enabled===!0&&W.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&eo(ne,I,-1/0,x.sortObjects)}eo(M,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,se),Ke=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ke&&we.addToRenderList(v,M),this.info.render.frame++,X===!0&&te.beginShadows();const O=p.state.shadowsArray;fe.render(O,M,I),X===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,N=v.transmissive;if(p.setupLights(),I.isArrayCamera){const ne=I.cameras;if(N.length>0)for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];lc(k,N,M,_e)}Ke&&we.render(M);for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];ac(v,M,_e,_e.viewport)}}else N.length>0&&lc(k,N,M,I),Ke&&we.render(M),ac(v,M,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,I),Qe.resetDefaultState(),D=-1,J=null,E.pop(),E.length>0?(p=E[E.length-1],X===!0&&te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function eo(M,I,O,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ye.intersectsSprite(M)){k&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const le=q.update(M),ge=M.material;ge.visible&&v.push(M,le,ge,O,Te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ye.intersectsObject(M))){const le=q.update(M),ge=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Te.copy(le.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(ge)){const _e=le.groups;for(let Ee=0,be=_e.length;Ee<be;Ee++){const ye=_e[Ee],$e=ge[ye.materialIndex];$e&&$e.visible&&v.push(M,le,$e,O,Te.z,ye)}}else ge.visible&&v.push(M,le,ge,O,Te.z,null)}}const ne=M.children;for(let le=0,ge=ne.length;le<ge;le++)eo(ne[le],I,O,k)}function ac(M,I,O,k){const N=M.opaque,ne=M.transmissive,le=M.transparent;p.setupLightsView(O),X===!0&&te.setGlobalState(x.clippingPlanes,O),k&&Ae.viewport(_.copy(k)),N.length>0&&Is(N,I,O),ne.length>0&&Is(ne,I,O),le.length>0&&Is(le,I,O),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function lc(M,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new gi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Ts:wn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ne=p.state.transmissionRenderTarget[k.id],le=k.viewport||_;ne.setSize(le.z,le.w);const ge=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(U),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&we.render(O);const _e=x.toneMapping;x.toneMapping=zn;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),X===!0&&te.setGlobalState(x.clippingPlanes,k),Is(M,O,k),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ye=0,$e=I.length;ye<$e;ye++){const tt=I[ye],st=tt.object,Nt=tt.geometry,We=tt.material,Se=tt.group;if(We.side===vn&&st.layers.test(k.layers)){const gt=We.side;We.side=Pt,We.needsUpdate=!0,cc(st,O,k,Nt,We,Se),We.side=gt,We.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}x.setRenderTarget(ge),x.setClearColor(U,H),Ee!==void 0&&(k.viewport=Ee),x.toneMapping=_e}function Is(M,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){const le=M[N],ge=le.object,_e=le.geometry,Ee=k===null?le.material:k,be=le.group;ge.layers.test(O.layers)&&cc(ge,I,O,_e,Ee,be)}}function cc(M,I,O,k,N,ne){M.onBeforeRender(x,I,O,k,N,ne),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,I,O,k,M,ne),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=Pt,N.needsUpdate=!0,x.renderBufferDirect(O,I,k,N,M,ne),N.side=Hn,N.needsUpdate=!0,x.renderBufferDirect(O,I,k,N,M,ne),N.side=vn):x.renderBufferDirect(O,I,k,N,M,ne),M.onAfterRender(x,I,O,k,N,ne)}function Ns(M,I,O){I.isScene!==!0&&(I=Be);const k=Ce.get(M),N=p.state.lights,ne=p.state.shadowsArray,le=N.state.version,ge=xe.getParameters(M,N.state,ne,I,O),_e=xe.getProgramCacheKey(ge);let Ee=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?F:y).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",Ve),Ee=new Map,k.programs=Ee);let be=Ee.get(_e);if(be!==void 0){if(k.currentProgram===be&&k.lightsStateVersion===le)return hc(M,ge),be}else ge.uniforms=xe.getUniforms(M),M.onBeforeCompile(ge,x),be=xe.acquireProgram(ge,_e),Ee.set(_e,be),k.uniforms=ge.uniforms;const ye=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ye.clippingPlanes=te.uniform),hc(M,ge),k.needsLights=fp(M),k.lightsStateVersion=le,k.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=be,k.uniformsList=null,be}function uc(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Sr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function hc(M,I){const O=Ce.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function hp(M,I,O,k,N){I.isScene!==!0&&(I=Be),A.resetTextureUnits();const ne=I.fog,le=k.isMeshStandardMaterial?I.environment:null,ge=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,_e=(k.isMeshStandardMaterial?F:y).get(k.envMap||le),Ee=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,be=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!O.morphAttributes.position,$e=!!O.morphAttributes.normal,tt=!!O.morphAttributes.color;let st=zn;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=x.toneMapping);const Nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,We=Nt!==void 0?Nt.length:0,Se=Ce.get(k),gt=p.state.lights;if(X===!0&&(ee===!0||M!==J)){const kt=M===J&&k.id===D;te.setState(k,M,kt)}let je=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==gt.state.version||Se.outputColorSpace!==ge||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==_e||k.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Ee||Se.vertexTangents!==be||Se.morphTargets!==ye||Se.morphNormals!==$e||Se.morphColors!==tt||Se.toneMapping!==st||Se.morphTargetsCount!==We)&&(je=!0):(je=!0,Se.__version=k.version);let Yt=Se.currentProgram;je===!0&&(Yt=Ns(k,I,N));let _i=!1,Ut=!1,to=!1;const rt=Yt.getUniforms(),Ln=Se.uniforms;if(Ae.useProgram(Yt.program)&&(_i=!0,Ut=!0,to=!0),k.id!==D&&(D=k.id,Ut=!0),_i||J!==M){ze.reverseDepthBuffer?(ve.copy(M.projectionMatrix),um(ve),hm(ve),rt.setValue(C,"projectionMatrix",ve)):rt.setValue(C,"projectionMatrix",M.projectionMatrix),rt.setValue(C,"viewMatrix",M.matrixWorldInverse);const kt=rt.map.cameraPosition;kt!==void 0&&kt.setValue(C,Pe.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Ut=!0,to=!0)}if(N.isSkinnedMesh){rt.setOptional(C,N,"bindMatrix"),rt.setOptional(C,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),rt.setValue(C,"boneTexture",kt.boneTexture,A))}N.isBatchedMesh&&(rt.setOptional(C,N,"batchingTexture"),rt.setValue(C,"batchingTexture",N._matricesTexture,A),rt.setOptional(C,N,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",N._indirectTexture,A),rt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",N._colorsTexture,A));const no=O.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&Re.update(N,O,Yt),(Ut||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,rt.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ln.envMap.value=_e,Ln.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Ln.envMapIntensity.value=I.environmentIntensity),Ut&&(rt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&dp(Ln,to),ne&&k.fog===!0&&oe.refreshFogUniforms(Ln,ne),oe.refreshMaterialUniforms(Ln,k,K,B,p.state.transmissionRenderTarget[M.id]),Sr.upload(C,uc(Se),Ln,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sr.upload(C,uc(Se),Ln,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(C,"center",N.center),rt.setValue(C,"modelViewMatrix",N.modelViewMatrix),rt.setValue(C,"normalMatrix",N.normalMatrix),rt.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const kt=k.uniformsGroups;for(let io=0,pp=kt.length;io<pp;io++){const dc=kt[io];L.update(dc,Yt),L.bind(dc,Yt)}}return Yt}function dp(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function fp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,O){Ce.get(M.texture).__webglTexture=I,Ce.get(M.depthTexture).__webglTexture=O;const k=Ce.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const O=Ce.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){w=M,P=I,R=O;let k=!0,N=null,ne=!1,le=!1;if(M){const _e=Ce.get(M);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(_e.__hasExternalTextures)A.rebindTextures(M,Ce.get(M.texture).__webglTexture,Ce.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ye=M.depthTexture;if(_e.__boundDepthTexture!==ye){if(ye!==null&&Ce.has(ye)&&(M.width!==ye.image.width||M.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);const be=Ce.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(be[I])?N=be[I][O]:N=be[I],ne=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?N=Ce.get(M).__webglMultisampledFramebuffer:Array.isArray(be)?N=be[O]:N=be,_.copy(M.viewport),b.copy(M.scissor),G=M.scissorTest}else _.copy(ie).multiplyScalar(K).floor(),b.copy(me).multiplyScalar(K).floor(),G=Oe;if(Ae.bindFramebuffer(C.FRAMEBUFFER,N)&&k&&Ae.drawBuffers(M,N),Ae.viewport(_),Ae.scissor(b),Ae.setScissorTest(G),ne){const _e=Ce.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,O)}else if(le){const _e=Ce.get(M.texture),Ee=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,O||0,Ee)}D=-1},this.readRenderTargetPixels=function(M,I,O,k,N,ne,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){Ae.bindFramebuffer(C.FRAMEBUFFER,ge);try{const _e=M.texture,Ee=_e.format,be=_e.type;if(!ze.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&O>=0&&O<=M.height-N&&C.readPixels(I,O,k,N,Le.convert(Ee),Le.convert(be),ne)}finally{const _e=w!==null?Ce.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,k,N,ne,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){const _e=M.texture,Ee=_e.format,be=_e.type;if(!ze.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&O>=0&&O<=M.height-N){Ae.bindFramebuffer(C.FRAMEBUFFER,ge);const ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(I,O,k,N,Le.convert(Ee),Le.convert(be),0);const $e=w!==null?Ce.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,$e);const tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await cm(C,tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer(ye),C.deleteSync(tt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,O=0){M.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-O),N=Math.floor(M.image.width*k),ne=Math.floor(M.image.height*k),le=I!==null?I.x:0,ge=I!==null?I.y:0;A.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,le,ge,N,ne),Ae.unbindTexture()},this.copyTextureToTexture=function(M,I,O=null,k=null,N=0){M.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],N=arguments[3]||0,O=null);let ne,le,ge,_e,Ee,be;O!==null?(ne=O.max.x-O.min.x,le=O.max.y-O.min.y,ge=O.min.x,_e=O.min.y):(ne=M.image.width,le=M.image.height,ge=0,_e=0),k!==null?(Ee=k.x,be=k.y):(Ee=0,be=0);const ye=Le.convert(I.format),$e=Le.convert(I.type);A.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const tt=C.getParameter(C.UNPACK_ROW_LENGTH),st=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nt=C.getParameter(C.UNPACK_SKIP_PIXELS),We=C.getParameter(C.UNPACK_SKIP_ROWS),Se=C.getParameter(C.UNPACK_SKIP_IMAGES),gt=M.isCompressedTexture?M.mipmaps[N]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,_e),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Ee,be,ne,le,ye,$e,gt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Ee,be,gt.width,gt.height,ye,gt.data):C.texSubImage2D(C.TEXTURE_2D,N,Ee,be,ne,le,ye,$e,gt),C.pixelStorei(C.UNPACK_ROW_LENGTH,tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,We),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se),N===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,k=null,N=0){M.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0);let ne,le,ge,_e,Ee,be,ye,$e,tt;const st=M.isCompressedTexture?M.mipmaps[N]:M.image;O!==null?(ne=O.max.x-O.min.x,le=O.max.y-O.min.y,ge=O.max.z-O.min.z,_e=O.min.x,Ee=O.min.y,be=O.min.z):(ne=st.width,le=st.height,ge=st.depth,_e=0,Ee=0,be=0),k!==null?(ye=k.x,$e=k.y,tt=k.z):(ye=0,$e=0,tt=0);const Nt=Le.convert(I.format),We=Le.convert(I.type);let Se;if(I.isData3DTexture)A.setTexture3D(I,0),Se=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Se=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const gt=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yt=C.getParameter(C.UNPACK_SKIP_PIXELS),_i=C.getParameter(C.UNPACK_SKIP_ROWS),Ut=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_e),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ee),C.pixelStorei(C.UNPACK_SKIP_IMAGES,be),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Se,N,ye,$e,tt,ne,le,ge,Nt,We,st.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Se,N,ye,$e,tt,ne,le,ge,Nt,st.data):C.texSubImage3D(Se,N,ye,$e,tt,ne,le,ge,Nt,We,st),C.pixelStorei(C.UNPACK_ROW_LENGTH,gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yt),C.pixelStorei(C.UNPACK_SKIP_ROWS,_i),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ut),N===0&&I.generateMipmaps&&C.generateMipmap(Se),Ae.unbindTexture()},this.initRenderTarget=function(M){Ce.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,Ae.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vl?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Hr?"display-p3":"srgb"}}class Ex extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tx extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ou=new ct,Ga=new id,nr=new Gr,ir=new z;class au extends Dt{constructor(e=new Pn,t=new Tx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;ou.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,v=m;g<v;g++){const p=c.getX(g);ir.fromBufferAttribute(h,p),lu(ir,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,v=m;g<v;g++)ir.fromBufferAttribute(h,g),lu(ir,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lu(n,e,t,i,s,r,o){const a=Ga.distanceSqToPoint(n);if(a<t){const l=new z;Ga.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);const Rt=n=>new qe(n),sr={idle:{rot:.1,breathAmp:.02,breathFreq:.8,wobble:.01,bright:1,inward:0,pulse:0,color:Rt("#7EC8FF"),glow:Rt("#2596FF"),spread:1},thinking:{rot:.45,breathAmp:.03,breathFreq:2.2,wobble:.03,bright:1.25,inward:0,pulse:0,color:Rt("#9AD6FF"),glow:Rt("#2596FF"),spread:1},speaking:{rot:.18,breathAmp:.04,breathFreq:3,wobble:.02,bright:1.15,inward:0,pulse:0,color:Rt("#7EC8FF"),glow:Rt("#2596FF"),spread:1},learning:{rot:.22,breathAmp:.025,breathFreq:1.4,wobble:.015,bright:1.1,inward:.16,pulse:0,color:Rt("#A6EBFF"),glow:Rt("#2FB6FF"),spread:1},sleeping:{rot:.03,breathAmp:.015,breathFreq:.35,wobble:.004,bright:.32,inward:0,pulse:0,color:Rt("#5F8FB8"),glow:Rt("#1B4F86"),spread:.92},error:{rot:.06,breathAmp:.025,breathFreq:.6,wobble:.012,bright:.75,inward:0,pulse:0,color:Rt("#E7A3AB"),glow:Rt("#B8535F"),spread:1.02},alert:{rot:.12,breathAmp:.03,breathFreq:1.3,wobble:.015,bright:1.2,inward:0,pulse:1,color:Rt("#F2B35E"),glow:Rt("#C9822B"),spread:1.03}},bx=`
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
  }`,Ax=`
  uniform vec3 uColor, uGlow; uniform float uBright, uBase;
  varying float vDepth, vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float soft = smoothstep(1.0, 0.0, d);
    soft *= soft;
    vec3 col = mix(uColor, uGlow, vDepth * 0.85);
    float a = clamp(soft * (1.0 - 0.6 * vDepth) * vTwinkle * uBright * uBase * 1.9, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
  }`;function cu(n,e,t){const i=new Float32Array(n*3),s=new Float32Array(n),r=Math.PI*(3-Math.sqrt(5));for(let a=0;a<n;a++){const l=1-a/(n-1)*2,c=Math.sqrt(1-l*l),u=r*a,h=e*(1+(Math.random()-.5)*t);i.set([Math.cos(u)*c*h,l*h,Math.sin(u)*c*h],a*3),s[a]=Math.random()}const o=new Pn;return o.setAttribute("position",new qt(i,3)),o.setAttribute("aSeed",new qt(s,1)),o}class wx{constructor(e,t=!1){_t(this,"renderer");_t(this,"scene",new Ex);_t(this,"camera",new Wt(40,1,.1,20));_t(this,"group",new ds);_t(this,"mats",[]);_t(this,"target","idle");_t(this,"cur",{...sr.idle,color:sr.idle.color.clone(),glow:sr.idle.glow.clone()});_t(this,"amp",0);_t(this,"ampTarget",0);_t(this,"raf",0);_t(this,"last",0);_t(this,"t",0);_t(this,"reduced",!1);_t(this,"running",!1);_t(this,"frame",e=>{if(!this.running)return;const t=Math.min(.05,(e-(this.last||e))/1e3);this.last=e,this.t+=t,this.ease(t);const i=this.cur,s=this.reduced?.15:1;this.group.rotation.y+=t*i.rot*s,this.group.rotation.x=Math.sin(this.t*.25)*.12*s,this.group.scale.setScalar(i.spread);for(const r of this.mats){const o=r.uniforms;o.uTime.value=this.t*s,o.uBreathAmp.value=i.breathAmp,o.uBreathFreq.value=i.breathFreq,o.uWobble.value=i.wobble,o.uInward.value=i.inward,o.uPulse.value=i.pulse,o.uBright.value=i.bright,o.uAmp.value=this.amp}this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.frame)});var r;this.canvas=e,this.renderer=new Mx({canvas:e,alpha:!0,antialias:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.75)),this.renderer.setClearColor(0,0),this.camera.position.z=4.1,this.reduced=((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;const[i,s]=t?[1400,500]:[2800,1100];for(const[o,a,l]of[[cu(i,1,.04),2.1,1],[cu(s,1.38,.18),1.5,.45]]){const c=new Cn({vertexShader:bx,fragmentShader:Ax,transparent:!0,depthWrite:!1,blending:ta,uniforms:{uTime:{value:0},uBreathAmp:{value:.02},uBreathFreq:{value:.8},uWobble:{value:.01},uInward:{value:0},uPulse:{value:0},uSize:{value:a},uAmp:{value:0},uPixel:{value:this.renderer.getPixelRatio()},uColor:{value:this.cur.color},uGlow:{value:this.cur.glow},uBright:{value:1},uBase:{value:l},uScale:{value:1}}});this.mats.push(c),this.group.add(new au(o,c))}this.scene.add(this.group)}setState(e){this.target=e}setAmplitude(e){this.ampTarget=Math.max(0,Math.min(1,e))}resize(e,t){const i=Math.max(1,Math.floor(Math.min(e,t)));this.renderer.setSize(i,i,!1),this.canvas.style.width=`${i}px`,this.canvas.style.height=`${i}px`,this.camera.aspect=1,this.camera.updateProjectionMatrix();for(const s of this.mats)s.uniforms.uScale.value=i/150}ease(e){const t=sr[this.target],i=1-Math.exp(-e*3.2),s=this.cur;s.rot+=(t.rot-s.rot)*i,s.breathAmp+=(t.breathAmp-s.breathAmp)*i,s.breathFreq+=(t.breathFreq-s.breathFreq)*i,s.wobble+=(t.wobble-s.wobble)*i,s.bright+=(t.bright-s.bright)*i,s.inward+=(t.inward-s.inward)*i,s.pulse+=(t.pulse-s.pulse)*i,s.spread+=(t.spread-s.spread)*i,s.color.lerp(t.color,i),s.glow.lerp(t.glow,i),this.amp+=(this.ampTarget-this.amp)*(1-Math.exp(-e*12))}start(){this.running||(this.running=!0,this.last=0,this.raf=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),this.group.traverse(e=>{e instanceof au&&e.geometry.dispose()}),this.mats.forEach(e=>e.dispose()),this.renderer.dispose()}}const Fo=440,uu=340;function Rx({state:n,amplitude:e=0,spot:t,low:i}){const s=$.useRef(null),r=$.useRef(null);$.useEffect(()=>{const a=s.current;if(!a)return;let l;try{l=new wx(a,i||(navigator.hardwareConcurrency??4)<=4)}catch{return}r.current=l,l.resize(uu,uu),l.setState(n),l.start();const c=()=>document.hidden?l.stop():l.start();return document.addEventListener("visibilitychange",c),()=>{document.removeEventListener("visibilitychange",c),l.dispose(),r.current=null}},[i]),$.useEffect(()=>{var a;(a=r.current)==null||a.setState(n)},[n]),$.useEffect(()=>{var a;(a=r.current)==null||a.setAmplitude(e)},[e]);const o=t.size/Fo;return T.jsxs("div",{className:`sphere sphere-${n}`,"aria-hidden":"true",style:{transform:`translate(${t.cx-t.size/2}px, ${t.cy-t.size/2}px) scale(${o})`},children:[T.jsxs("svg",{className:"rings",viewBox:"0 0 440 440",width:Fo,height:Fo,children:[T.jsx("circle",{className:"r-glow",cx:"220",cy:"220",r:"214"}),T.jsx("circle",{className:"r-ticks",cx:"220",cy:"220",r:"206"}),T.jsx("circle",{className:"r-arcs",cx:"220",cy:"220",r:"192"}),T.jsx("circle",{className:"r-thin",cx:"220",cy:"220",r:"176"}),T.jsx("circle",{className:"r-arcs2",cx:"220",cy:"220",r:"184"}),[0,90,180,270].map(a=>T.jsx("line",{className:"r-cross",x1:"220",y1:"2",x2:"220",y2:"16",transform:`rotate(${a} 220 220)`},a))]}),T.jsx("div",{className:"sphere-fallback"}),T.jsx("canvas",{ref:s})]})}const xd={idle:"Here",thinking:"Thinking",speaking:"Speaking",learning:"Learning",sleeping:"Resting",error:"Something went wrong",alert:"Concerned · watching"},hu=n=>n>=1e3?`${(n/1e3).toFixed(1)} Mb/s`:`${Math.round(n)} kb/s`,du=n=>T.jsx("i",{className:"bar",children:T.jsx("b",{style:{width:`${Math.min(100,Math.max(2,n))}%`}})});function Cx({tel:n}){return n?T.jsxs("div",{className:"readouts","aria-label":"System readouts",children:[T.jsxs("span",{className:"ro",children:[T.jsx("em",{children:"CPU"}),Math.round(n.cpu),"%",du(n.cpu)]}),T.jsxs("span",{className:"ro",children:[T.jsx("em",{children:"MEM"}),Math.round(n.mem),"%",du(n.mem)]}),T.jsxs("span",{className:"ro",children:[T.jsx("em",{children:"NET"}),"↓ ",hu(n.down)," ↑ ",hu(n.up)]}),T.jsxs("span",{className:"ro",children:[T.jsx("em",{children:"PROGRAMS"}),n.procs]}),n.battery?T.jsxs("span",{className:"ro",children:[T.jsx("em",{children:"POWER"}),n.battery.pct,"%",n.battery.plugged?" ⚡":""]}):null,n.app?T.jsxs("span",{className:"ro app",children:[T.jsx("em",{children:"FOCUS"}),n.app]}):null]}):null}const yd="vanta.layout",Px=8e3,Lx=()=>{try{const n=localStorage.getItem(yd);return n==="calm"||n==="hud"?n:"auto"}catch{return"auto"}},Dx=n=>{try{localStorage.setItem(yd,n)}catch{}};function Ix(n,e,t,i){if(n==="hud")return{hud:!0,until:t};if(n==="calm")return{hud:!1,until:0};const s=e?i+Px:t;return{hud:e||i<s,until:s}}function Nx(n,e){const[t,i]=$.useState(0),[,s]=$.useState(0),r=Ix(n,e,t,Date.now());return $.useEffect(()=>{r.until!==t&&i(r.until)},[r.until,t]),$.useEffect(()=>{if(n!=="auto"||e||!r.hud)return;const o=window.setTimeout(()=>s(a=>a+1),Math.max(50,t-Date.now()+20));return()=>window.clearTimeout(o)},[n,e,r.hud,t]),r.hud}const Sd="vanta.fx",Ux=()=>{try{return localStorage.getItem(Sd)==="low"?"low":"full"}catch{return"full"}},Fx=n=>{try{localStorage.setItem(Sd,n)}catch{}};function Ox(){const[n,e]=$.useState(Ux),[t,i]=$.useState(!1);return $.useEffect(()=>{document.documentElement.dataset.fx=n},[n]),$.useEffect(()=>{if(n==="low")return;let r=0,o=0,a=0,l=0,c=0,u=performance.now();const h=d=>{if(!document.hidden&&o){const m=d-o;if(m<250&&(l+=m,a++),d-u>3e3&&a>20&&(c=l/a>34?c+1:0,a=0,l=0,u=d,c>=2)){e("low"),i(!0);return}}o=d,r=requestAnimationFrame(h)};return r=requestAnimationFrame(h),()=>cancelAnimationFrame(r)},[n]),[n,r=>{Fx(r),i(!1),e(r)},t]}function Bx(n){const e=n.search(/```stage/i);return e===-1?n:n.slice(0,e).trimEnd()}function kx({messages:n,onOpenStage:e}){const t=$.useRef(null);return $.useEffect(()=>{var i;(i=t.current)==null||i.scrollIntoView({behavior:"smooth",block:"end"})},[n]),T.jsxs("div",{className:"chat",role:"log","aria-live":"polite",children:[n.length===0?T.jsx("div",{className:"empty-chat",children:"Ask me anything. I can read, build, check my own work, and keep an eye on this computer for you."}):T.jsx("div",{className:"chat-spacer"}),n.map(i=>T.jsxs("div",{className:`bubble ${i.role==="user"?"user":""} ${i.tag==="error"?"error":""}`,children:[i.tag==="heads-up"?T.jsxs("div",{className:"tag",children:[T.jsx("i",{}),"HEADS-UP"]}):null,i.tag==="error"?T.jsxs("div",{className:"tag",children:[T.jsx("i",{}),"HICCUP"]}):null,Bx(i.text),i.streaming?T.jsx("span",{className:"caret"}):null,i.stageId?T.jsx("div",{children:T.jsxs("button",{className:"stage-link",onClick:()=>e(i.stageId),children:["Open on stage: ",i.stageLabel]})}):null]},i.id)),T.jsx("div",{ref:t})]})}function Vx({onSend:n,onVoiceError:e,disabled:t,autoFocus:i,onActivity:s}){const[r,o]=$.useState(""),[a,l]=$.useState(!1),c=$.useRef(null),u=()=>{r.trim()&&(n(r),o(""))};async function h(){var d;if(a){(d=c.current)==null||d.stop();return}try{const m=await navigator.mediaDevices.getUserMedia({audio:!0}),g=new MediaRecorder(m),v=[];g.ondataavailable=p=>v.push(p.data),g.onstop=async()=>{m.getTracks().forEach(f=>f.stop()),l(!1);const p=new FormData;p.append("audio",new Blob(v,{type:g.mimeType||"audio/webm"}),"voice.webm");try{const E=await(await fetch("/transcribe",{method:"POST",body:p})).json();if(E.text)o(x=>(x?x+" ":"")+E.text);else throw new Error(E.error||"no text")}catch(f){e(String(f))}},c.current=g,g.start(),l(!0)}catch{e("microphone permission denied")}}return T.jsxs("div",{className:"composer",children:[T.jsx("input",{"aria-label":"Message VANTA",placeholder:"Ask VANTA anything",value:r,disabled:t,autoFocus:i,onChange:d=>{o(d.target.value),s==null||s()},onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),u())}}),T.jsx("button",{className:`btn icon mic ${a?"rec":""}`,"aria-label":a?"Stop recording":"Voice","aria-pressed":a,onClick:h,children:T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[T.jsx("rect",{x:"9",y:"3",width:"6",height:"12",rx:"3"}),T.jsx("path",{d:"M5 11a7 7 0 0 0 14 0M12 18v3"})]})}),T.jsx("button",{className:"btn icon send","aria-label":"Send",disabled:!r.trim(),onClick:u,children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#07111F",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:T.jsx("path",{d:"M4 12h16M14 6l6 6-6 6"})})})]})}function zx(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}function Xr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Wa=n=>Array.isArray(n);function Md(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function ys(n){return typeof n=="string"||Array.isArray(n)}function fu(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function xl(n,e,t,i){if(typeof e=="function"){const[s,r]=fu(i);e=e(t!==void 0?t:n.custom,s,r)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,r]=fu(i);e=e(t!==void 0?t:n.custom,s,r)}return e}function qr(n,e,t){const i=n.getProps();return xl(i,e,t!==void 0?t:i.custom,n)}const yl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sl=["initial",...yl],Ps=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set(Ps),En=n=>n*1e3,Tn=n=>n/1e3,Hx={type:"spring",stiffness:500,damping:25,restSpeed:10},Gx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Wx={type:"keyframes",duration:.8},jx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Xx=(n,{keyframes:e})=>e.length>2?Wx:vi.has(n)?n.startsWith("scale")?Gx(e[1]):Hx:jx;function Ml(n,e){return n?n[e]||n.default||n:void 0}const qx={useManualTiming:!1},Yx=n=>n!==null;function Yr(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(Yx),r=e&&t!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const Et=n=>n;function $x(n){let e=new Set,t=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const m=h&&i?e:t;return u&&r.add(c),m.has(c)||m.add(c),c},cancel:c=>{t.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[e,t]=[t,e],t.clear(),e.forEach(a),i=!1,s&&(s=!1,l.process(c))}};return l}const rr=["read","resolveKeyframes","update","preRender","render","postRender"],Kx=40;function Ed(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>t=!0,o=rr.reduce((f,E)=>(f[E]=$x(r),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,m=()=>{const f=performance.now();t=!1,s.delta=i?1e3/60:Math.max(Math.min(f-s.timestamp,Kx),1),s.timestamp=f,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),h.process(s),d.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(m))},g=()=>{t=!0,i=!0,s.isProcessing||n(m)};return{schedule:rr.reduce((f,E)=>{const x=o[E];return f[E]=(S,P=!1,R=!1)=>(t||g(),x.schedule(S,P,R)),f},{}),cancel:f=>{for(let E=0;E<rr.length;E++)o[rr[E]].cancel(f)},state:s,steps:o}}const{schedule:Ze,cancel:Gn,state:vt,steps:Oo}=Ed(typeof requestAnimationFrame<"u"?requestAnimationFrame:Et,!0),Td=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,Zx=1e-7,Jx=12;function Qx(n,e,t,i,s){let r,o,a=0;do o=e+(t-e)/2,r=Td(o,i,s)-n,r>0?t=o:e=o;while(Math.abs(r)>Zx&&++a<Jx);return o}function Ls(n,e,t,i){if(n===e&&t===i)return Et;const s=r=>Qx(r,0,1,n,t);return r=>r===0||r===1?r:Td(s(r),e,i)}const bd=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Ad=n=>e=>1-n(1-e),wd=Ls(.33,1.53,.69,.99),El=Ad(wd),Rd=bd(El),Cd=n=>(n*=2)<1?.5*El(n):.5*(2-Math.pow(2,-10*(n-1))),Tl=n=>1-Math.sin(Math.acos(n)),Pd=Ad(Tl),Ld=bd(Tl),Dd=n=>/^0[^.\s]+$/u.test(n);function ey(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Dd(n):!0}let Id=Et;const Nd=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Ud=n=>e=>typeof e=="string"&&e.startsWith(n),Fd=Ud("--"),ty=Ud("var(--"),bl=n=>ty(n)?ny.test(n.split("/*")[0].trim()):!1,ny=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,iy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sy(n){const e=iy.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function Od(n,e,t=1){const[i,s]=sy(n);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return Nd(o)?parseFloat(o):o}return bl(s)?Od(s,e,t+1):s}const Wn=(n,e,t)=>t>e?e:t<n?n:t,es={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ss={...es,transform:n=>Wn(0,1,n)},or={...es,default:1},Ds=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Bn=Ds("deg"),on=Ds("%"),Me=Ds("px"),ry=Ds("vh"),oy=Ds("vw"),pu={...on,parse:n=>on.parse(n)/100,transform:n=>on.transform(n*100)},ay=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),mu=n=>n===es||n===Me,gu=(n,e)=>parseFloat(n.split(", ")[e]),vu=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return gu(s[1],e);{const r=i.match(/^matrix\((.+)\)$/u);return r?gu(r[1],n):0}},ly=new Set(["x","y","z"]),cy=Ps.filter(n=>!ly.has(n));function uy(n){const e=[];return cy.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const $i={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:vu(4,13),y:vu(5,14)};$i.translateX=$i.x;$i.translateY=$i.y;const Bd=n=>e=>e.test(n),hy={test:n=>n==="auto",parse:n=>n},kd=[es,Me,on,Bn,oy,ry,hy],_u=n=>kd.find(Bd(n)),pi=new Set;let ja=!1,Xa=!1;function Vd(){if(Xa){const n=Array.from(pi).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=uy(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Xa=!1,ja=!1,pi.forEach(n=>n.complete()),pi.clear()}function zd(){pi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Xa=!0)})}function dy(){zd(),Vd()}class Al{constructor(e,t,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(pi.add(this),ja||(ja=!0,Ze.read(zd),Ze.resolveKeyframes(Vd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&t){const l=i.readValue(t,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&o===void 0&&s.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),pi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,pi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gs=n=>Math.round(n*1e5)/1e5,wl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fy(n){return n==null}const py=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rl=(n,e)=>t=>!!(typeof t=="string"&&py.test(t)&&t.startsWith(n)||e&&!fy(t)&&Object.prototype.hasOwnProperty.call(t,e)),Hd=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(wl);return{[n]:parseFloat(s),[e]:parseFloat(r),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},my=n=>Wn(0,255,n),Bo={...es,transform:n=>Math.round(my(n))},di={test:Rl("rgb","red"),parse:Hd("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Bo.transform(n)+", "+Bo.transform(e)+", "+Bo.transform(t)+", "+gs(Ss.transform(i))+")"};function gy(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const qa={test:Rl("#"),parse:gy,transform:di.transform},Ui={test:Rl("hsl","hue"),parse:Hd("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+on.transform(gs(e))+", "+on.transform(gs(t))+", "+gs(Ss.transform(i))+")"},St={test:n=>di.test(n)||qa.test(n)||Ui.test(n),parse:n=>di.test(n)?di.parse(n):Ui.test(n)?Ui.parse(n):qa.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?di.transform(n):Ui.transform(n)},vy=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function _y(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(wl))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(vy))===null||t===void 0?void 0:t.length)||0)>0}const Gd="number",Wd="color",xy="var",yy="var(",xu="${}",Sy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ms(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(Sy,l=>(St.test(l)?(i.color.push(r),s.push(Wd),t.push(St.parse(l))):l.startsWith(yy)?(i.var.push(r),s.push(xy),t.push(l)):(i.number.push(r),s.push(Gd),t.push(parseFloat(l))),++r,xu)).split(xu);return{values:t,split:a,indexes:i,types:s}}function jd(n){return Ms(n).values}function Xd(n){const{split:e,types:t}=Ms(n),i=e.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],s[o]!==void 0){const a=t[o];a===Gd?r+=gs(s[o]):a===Wd?r+=St.transform(s[o]):r+=s[o]}return r}}const My=n=>typeof n=="number"?0:n;function Ey(n){const e=jd(n);return Xd(n)(e.map(My))}const jn={test:_y,parse:jd,createTransformer:Xd,getAnimatableNone:Ey},Ty=new Set(["brightness","contrast","saturate","opacity"]);function by(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(wl)||[];if(!i)return n;const s=t.replace(i,"");let r=Ty.has(e)?1:0;return i!==t&&(r*=100),e+"("+r+s+")"}const Ay=/\b([a-z-]*)\(.*?\)/gu,Ya={...jn,getAnimatableNone:n=>{const e=n.match(Ay);return e?e.map(by).join(" "):n}},wy={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,radius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,backgroundPositionX:Me,backgroundPositionY:Me},Ry={rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scale:or,scaleX:or,scaleY:or,scaleZ:or,skew:Bn,skewX:Bn,skewY:Bn,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Ss,originX:pu,originY:pu,originZ:Me},yu={...es,transform:Math.round},Cl={...wy,...Ry,zIndex:yu,size:Me,fillOpacity:Ss,strokeOpacity:Ss,numOctaves:yu},Cy={...Cl,color:St,backgroundColor:St,outlineColor:St,fill:St,stroke:St,borderColor:St,borderTopColor:St,borderRightColor:St,borderBottomColor:St,borderLeftColor:St,filter:Ya,WebkitFilter:Ya},Pl=n=>Cy[n];function qd(n,e){let t=Pl(n);return t!==Ya&&(t=jn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Py=new Set(["auto","none","0"]);function Ly(n,e,t){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!Py.has(r)&&Ms(r).values.length&&(s=n[i]),i++}if(s&&t)for(const r of e)n[r]=qd(t,s)}class Yd extends Al{constructor(e,t,i,s,r){super(e,t,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),bl(c))){const u=Od(c,t.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!ay.has(i)||e.length!==2)return;const[s,r]=e,o=_u(s),a=_u(r);if(o!==a)if(mu(o)&&mu(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)ey(e[s])&&i.push(s);i.length&&Ly(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$i[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const r=t.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=$i[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Ll(n){return typeof n=="function"}let Mr;function Dy(){Mr=void 0}const an={now:()=>(Mr===void 0&&an.set(vt.isProcessing||qx.useManualTiming?vt.timestamp:performance.now()),Mr),set:n=>{Mr=n,queueMicrotask(Dy)}},Su=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(jn.test(n)||n==="0")&&!n.startsWith("url("));function Iy(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function Ny(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=n[n.length-1],o=Su(s,e),a=Su(r,e);return!o||!a?!1:Iy(n)||(t==="spring"||Ll(t))&&i}const Uy=40;class $d{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=an.now(),this.options={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Uy?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&dy(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=an.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Ny(e,i,s,r))if(o)this.options.duration=0;else{l==null||l(Yr(e,this.options,t)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,t);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function Kd(n,e){return e?n*(1e3/e):0}const Fy=5;function Zd(n,e,t){const i=Math.max(e-Fy,0);return Kd(t-n(i),e-i)}const ko=.001,Oy=.01,By=10,ky=.05,Vy=1;function zy({duration:n=800,bounce:e=.25,velocity:t=0,mass:i=1}){let s,r,o=1-e;o=Wn(ky,Vy,o),n=Wn(Oy,By,Tn(n)),o<1?(s=c=>{const u=c*o,h=u*n,d=u-t,m=$a(c,o),g=Math.exp(-h);return ko-d/m*g},r=c=>{const h=c*o*n,d=h*t+t,m=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-h),v=$a(Math.pow(c,2),o);return(-s(c)+ko>0?-1:1)*((d-m)*g)/v}):(s=c=>{const u=Math.exp(-c*n),h=(c-t)*n+1;return-ko+u*h},r=c=>{const u=Math.exp(-c*n),h=(t-c)*(n*n);return u*h});const a=5/n,l=Gy(s,r,a);if(n=En(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const Hy=12;function Gy(n,e,t){let i=t;for(let s=1;s<Hy;s++)i=i-n(i)/e(i);return i}function $a(n,e){return n*Math.sqrt(1-e*e)}const Wy=["duration","bounce"],jy=["stiffness","damping","mass"];function Mu(n,e){return e.some(t=>n[t]!==void 0)}function Xy(n){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!Mu(n,jy)&&Mu(n,Wy)){const t=zy(n);e={...e,...t,mass:1},e.isResolvedFromDuration=!0}return e}function Jd({keyframes:n,restDelta:e,restSpeed:t,...i}){const s=n[0],r=n[n.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=Xy({...i,velocity:-Tn(i.velocity||0)}),m=h||0,g=l/(2*Math.sqrt(a*c)),v=r-s,p=Tn(Math.sqrt(a/c)),f=Math.abs(v)<5;t||(t=f?.01:2),e||(e=f?.005:.5);let E;if(g<1){const x=$a(p,g);E=S=>{const P=Math.exp(-g*p*S);return r-P*((m+g*p*v)/x*Math.sin(x*S)+v*Math.cos(x*S))}}else if(g===1)E=x=>r-Math.exp(-p*x)*(v+(m+p*v)*x);else{const x=p*Math.sqrt(g*g-1);E=S=>{const P=Math.exp(-g*p*S),R=Math.min(x*S,300);return r-P*((m+g*p*v)*Math.sinh(R)+x*v*Math.cosh(R))/x}}return{calculatedDuration:d&&u||null,next:x=>{const S=E(x);if(d)o.done=x>=u;else{let P=0;g<1&&(P=x===0?En(m):Zd(E,x,S));const R=Math.abs(P)<=t,w=Math.abs(r-S)<=e;o.done=R&&w}return o.value=o.done?r:S,o}}}function Eu({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],d={done:!1,value:h},m=D=>a!==void 0&&D<a||l!==void 0&&D>l,g=D=>a===void 0?l:l===void 0||Math.abs(a-D)<Math.abs(l-D)?a:l;let v=t*e;const p=h+v,f=o===void 0?p:o(p);f!==p&&(v=f-h);const E=D=>-v*Math.exp(-D/i),x=D=>f+E(D),S=D=>{const J=E(D),_=x(D);d.done=Math.abs(J)<=c,d.value=d.done?f:_};let P,R;const w=D=>{m(d.value)&&(P=D,R=Jd({keyframes:[d.value,g(d.value)],velocity:Zd(x,D,d.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:D=>{let J=!1;return!R&&P===void 0&&(J=!0,S(D),w(D)),P!==void 0&&D>=P?R.next(D-P):(!J&&S(D),d)}}}const qy=Ls(.42,0,1,1),Yy=Ls(0,0,.58,1),Qd=Ls(.42,0,.58,1),$y=n=>Array.isArray(n)&&typeof n[0]!="number",Dl=n=>Array.isArray(n)&&typeof n[0]=="number",Ky={linear:Et,easeIn:qy,easeInOut:Qd,easeOut:Yy,circIn:Tl,circInOut:Ld,circOut:Pd,backIn:El,backInOut:Rd,backOut:wd,anticipate:Cd},Tu=n=>{if(Dl(n)){Id(n.length===4);const[e,t,i,s]=n;return Ls(e,t,i,s)}else if(typeof n=="string")return Ky[n];return n},Zy=(n,e)=>t=>e(n(t)),bn=(...n)=>n.reduce(Zy),Ki=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},it=(n,e,t)=>n+(e-n)*t;function Vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Jy({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,r=0,o=0;if(!e)s=r=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;s=Vo(l,a,n+1/3),r=Vo(l,a,n),o=Vo(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function Nr(n,e){return t=>t>0?e:n}const zo=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},Qy=[qa,di,Ui],eS=n=>Qy.find(e=>e.test(n));function bu(n){const e=eS(n);if(!e)return!1;let t=e.parse(n);return e===Ui&&(t=Jy(t)),t}const Au=(n,e)=>{const t=bu(n),i=bu(e);if(!t||!i)return Nr(n,e);const s={...t};return r=>(s.red=zo(t.red,i.red,r),s.green=zo(t.green,i.green,r),s.blue=zo(t.blue,i.blue,r),s.alpha=it(t.alpha,i.alpha,r),di.transform(s))},Ka=new Set(["none","hidden"]);function tS(n,e){return Ka.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function nS(n,e){return t=>it(n,e,t)}function Il(n){return typeof n=="number"?nS:typeof n=="string"?bl(n)?Nr:St.test(n)?Au:rS:Array.isArray(n)?ef:typeof n=="object"?St.test(n)?Au:iS:Nr}function ef(n,e){const t=[...n],i=t.length,s=n.map((r,o)=>Il(r)(r,e[o]));return r=>{for(let o=0;o<i;o++)t[o]=s[o](r);return t}}function iS(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=Il(n[s])(n[s],e[s]));return s=>{for(const r in i)t[r]=i[r](s);return t}}function sS(n,e){var t;const i=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=n.indexes[o][s[o]],l=(t=n.values[a])!==null&&t!==void 0?t:0;i[r]=l,s[o]++}return i}const rS=(n,e)=>{const t=jn.createTransformer(e),i=Ms(n),s=Ms(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Ka.has(n)&&!s.values.length||Ka.has(e)&&!i.values.length?tS(n,e):bn(ef(sS(i,s),s.values),t):Nr(n,e)};function tf(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?it(n,e,t):Il(n)(n,e)}function oS(n,e,t){const i=[],s=t||tf,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(e){const l=Array.isArray(e)?e[o]||Et:e;a=bn(l,a)}i.push(a)}return i}function aS(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const r=n.length;if(Id(r===e.length),r===1)return()=>e[0];if(r===2&&n[0]===n[1])return()=>e[1];n[0]>n[r-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=oS(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<n.length-2&&!(c<n[u+1]);u++);const h=Ki(n[u],n[u+1],c);return o[u](h)};return t?c=>l(Wn(n[0],n[r-1],c)):l}function lS(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=Ki(0,e,i);n.push(it(t,1,s))}}function cS(n){const e=[0];return lS(e,n.length-1),e}function uS(n,e){return n.map(t=>t*e)}function hS(n,e){return n.map(()=>e||Qd).splice(0,n.length-1)}function Ur({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=$y(i)?i.map(Tu):Tu(i),r={done:!1,value:e[0]},o=uS(t&&t.length===e.length?t:cS(e),n),a=aS(o,e,{ease:Array.isArray(s)?s:hS(e,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}const wu=2e4;function dS(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<wu;)e+=t,i=n.next(e);return e>=wu?1/0:e}const fS=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ze.update(e,!0),stop:()=>Gn(e),now:()=>vt.isProcessing?vt.timestamp:an.now()}},pS={decay:Eu,inertia:Eu,tween:Ur,keyframes:Ur,spring:Jd},mS=n=>n/100;class Nl extends $d{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:t,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Al,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,t,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=Ll(t)?t:pS[t]||Ur;let l,c;a!==Ur&&typeof e[0]!="number"&&(l=bn(mS,tf(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});r==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=dS(u));const{calculatedDuration:h}=u,d=h+s,m=d*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:D}=this.options;return{done:!0,value:D[D.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return r.next(0);const{delay:d,repeat:m,repeatType:g,repeatDelay:v,onUpdate:p}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),E=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let x=this.currentTime,S=r;if(m){const D=Math.min(this.currentTime,u)/h;let J=Math.floor(D),_=D%1;!_&&D>=1&&(_=1),_===1&&J--,J=Math.min(J,m+1),!!(J%2)&&(g==="reverse"?(_=1-_,v&&(_-=v/h)):g==="mirror"&&(S=o)),x=Wn(0,1,_)*h}const P=E?{done:!1,value:l[0]}:S.next(x);a&&(P.value=a(P.value));let{done:R}=P;!E&&c!==null&&(R=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return w&&s!==void 0&&(P.value=Yr(l,this.options,s)),p&&p(P.value),w&&this.finish(),P}get duration(){const{resolved:e}=this;return e?Tn(e.calculatedDuration):0}get time(){return Tn(this.currentTime)}set time(e){e=En(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Tn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=fS,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),t&&t();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const gS=new Set(["opacity","clipPath","filter","transform"]),vS=10,_S=(n,e)=>{let t="";const i=Math.max(Math.round(e/vS),2);for(let s=0;s<i;s++)t+=n(Ki(0,i-1,s))+", ";return`linear(${t.substring(0,t.length-2)})`};function Ul(n){let e;return()=>(e===void 0&&(e=n()),e)}const xS={linearEasing:void 0};function yS(n,e){const t=Ul(n);return()=>{var i;return(i=xS[e])!==null&&i!==void 0?i:t()}}const Fr=yS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function nf(n){return!!(typeof n=="function"&&Fr()||!n||typeof n=="string"&&(n in Za||Fr())||Dl(n)||Array.isArray(n)&&n.every(nf))}const fs=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fs([0,.65,.55,1]),circOut:fs([.55,0,1,.45]),backIn:fs([.31,.01,.66,-.59]),backOut:fs([.33,1.53,.69,.99])};function sf(n,e){if(n)return typeof n=="function"&&Fr()?_S(n,e):Dl(n)?fs(n):Array.isArray(n)?n.map(t=>sf(t,e)||Za.easeOut):Za[n]}function SS(n,e,t,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:t};l&&(c.offset=l);const u=sf(a,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Ru(n,e){n.timeline=e,n.onfinish=null}const MS=Ul(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Or=10,ES=2e4;function TS(n){return Ll(n.type)||n.type==="spring"||!nf(n.ease)}function bS(n,e){const t=new Nl({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<ES;)i=t.sample(r),s.push(i.value),r+=Or;return{times:void 0,keyframes:s,duration:r-Or,ease:"linear"}}const rf={anticipate:Cd,backInOut:Rd,circInOut:Ld};function AS(n){return n in rf}class Cu extends $d{constructor(e){super(e);const{name:t,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Yd(r,(o,a)=>this.onKeyframesResolved(o,a),t,i,s),this.resolver.scheduleResolve()}initPlayback(e,t){var i;let{duration:s=300,times:r,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Fr()&&AS(o)&&(o=rf[o]),TS(this.options)){const{onComplete:d,onUpdate:m,motionValue:g,element:v,...p}=this.options,f=bS(e,p);e=f.keyframes,e.length===1&&(e[1]=e[0]),s=f.duration,r=f.times,o=f.ease,a="keyframes"}const h=SS(l.owner.current,c,e,{...this.options,duration:s,times:r,ease:o});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?(Ru(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:d}=this.options;l.set(Yr(e,this.options,t)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:s,times:r,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Tn(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Tn(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=En(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Et;const{animation:i}=t;Ru(i,e)}return Et}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:s,type:r,ease:o,times:a}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...m}=this.options,g=new Nl({...m,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),v=En(this.time);c.setWithVelocity(g.sample(v-Or).value,g.sample(v).value,Or)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=e;return MS()&&i&&gS.has(i)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const wS=Ul(()=>window.ScrollTimeline!==void 0);class RS{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(s=>wS()&&s.attachTimeline?s.attachTimeline(e):t(s));return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function CS({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Fl=(n,e,t,i={},s,r)=>o=>{const a=Ml(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-En(l);let u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:e,element:r?void 0:s};CS(a)||(u={...u,...Xx(n,u)}),u.duration&&(u.duration=En(u.duration)),u.repeatDelay&&(u.repeatDelay=En(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!r&&e.get()!==void 0){const d=Yr(u.keyframes,a);if(d!==void 0)return Ze.update(()=>{u.onUpdate(d),u.onComplete()}),new RS([])}return!r&&Cu.supports(u)?new Cu(u):new Nl(u)},PS=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),LS=n=>Wa(n)?n[n.length-1]||0:n;function Ol(n,e){n.indexOf(e)===-1&&n.push(e)}function Bl(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class kl{constructor(){this.subscriptions=[]}add(e){return Ol(this.subscriptions,e),()=>Bl(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pu=30,DS=n=>!isNaN(parseFloat(n));class IS{constructor(e,t={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=an.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=an.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=DS(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new kl);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ze.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Pu)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Pu);return Kd(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Es(n,e){return new IS(n,e)}function NS(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Es(t))}function US(n,e){const t=qr(n,e);let{transitionEnd:i={},transition:s={},...r}=t||{};r={...r,...i};for(const o in r){const a=LS(r[o]);NS(n,o,a)}}const Vl=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),FS="framerAppearId",of="data-"+Vl(FS);function af(n){return n.props[of]}const Mt=n=>!!(n&&n.getVelocity);function OS(n){return!!(Mt(n)&&n.add)}function Ja(n,e){const t=n.getValue("willChange");if(OS(t))return t.add(e)}function BS({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function lf(n,e,{delay:t=0,transitionOverride:i,type:s}={}){var r;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const h in l){const d=n.getValue(h,(r=n.latestValues[h])!==null&&r!==void 0?r:null),m=l[h];if(m===void 0||u&&BS(u,h))continue;const g={delay:t,...Ml(o||{},h)};let v=!1;if(window.MotionHandoffAnimation){const f=af(n);if(f){const E=window.MotionHandoffAnimation(f,h,Ze);E!==null&&(g.startTime=E,v=!0)}}Ja(n,h),d.start(Fl(h,d,m,n.shouldReduceMotion&&vi.has(h)?{type:!1}:g,n,v));const p=d.animation;p&&c.push(p)}return a&&Promise.all(c).then(()=>{Ze.update(()=>{a&&US(n,a)})}),c}function Qa(n,e,t={}){var i;const s=qr(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(r=t.transitionOverride);const o=s?()=>Promise.all(lf(n,s,t)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=r;return kS(n,e,u+c,h,d,t)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(t.delay)])}function kS(n,e,t=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(VS).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Qa(c,e,{...r,delay:t+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function VS(n,e){return n.sortNodePosition(e)}function zS(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>Qa(n,r,t));i=Promise.all(s)}else if(typeof e=="string")i=Qa(n,e,t);else{const s=typeof e=="function"?qr(n,e,t.custom):e;i=Promise.all(lf(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const HS=Sl.length;function cf(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?cf(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<HS;t++){const i=Sl[t],s=n.props[i];(ys(s)||s===!1)&&(e[i]=s)}return e}const GS=[...yl].reverse(),WS=yl.length;function jS(n){return e=>Promise.all(e.map(({animation:t,options:i})=>zS(n,t,i)))}function XS(n){let e=jS(n),t=Lu(),i=!0;const s=l=>(c,u)=>{var h;const d=qr(n,u,l==="exit"?(h=n.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:m,transitionEnd:g,...v}=d;c={...c,...v,...g}}return c};function r(l){e=l(n)}function o(l){const{props:c}=n,u=cf(n.parent)||{},h=[],d=new Set;let m={},g=1/0;for(let p=0;p<WS;p++){const f=GS[p],E=t[f],x=c[f]!==void 0?c[f]:u[f],S=ys(x),P=f===l?E.isActive:null;P===!1&&(g=p);let R=x===u[f]&&x!==c[f]&&S;if(R&&i&&n.manuallyAnimateOnMount&&(R=!1),E.protectedKeys={...m},!E.isActive&&P===null||!x&&!E.prevProp||Xr(x)||typeof x=="boolean")continue;const w=qS(E.prevProp,x);let D=w||f===l&&E.isActive&&!R&&S||p>g&&S,J=!1;const _=Array.isArray(x)?x:[x];let b=_.reduce(s(f),{});P===!1&&(b={});const{prevResolvedValues:G={}}=E,U={...G,...b},H=K=>{D=!0,d.has(K)&&(J=!0,d.delete(K)),E.needsAnimating[K]=!0;const V=n.getValue(K);V&&(V.liveStyle=!1)};for(const K in U){const V=b[K],se=G[K];if(m.hasOwnProperty(K))continue;let ie=!1;Wa(V)&&Wa(se)?ie=!Md(V,se):ie=V!==se,ie?V!=null?H(K):d.add(K):V!==void 0&&d.has(K)?H(K):E.protectedKeys[K]=!0}E.prevProp=x,E.prevResolvedValues=b,E.isActive&&(m={...m,...b}),i&&n.blockInitialAnimation&&(D=!1),D&&(!(R&&w)||J)&&h.push(..._.map(K=>({animation:K,options:{type:f}})))}if(d.size){const p={};d.forEach(f=>{const E=n.getBaseTarget(f),x=n.getValue(f);x&&(x.liveStyle=!0),p[f]=E??null}),h.push({animation:p})}let v=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(h):Promise.resolve()}function a(l,c){var u;if(t[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),t[l].isActive=c;const h=o(l);for(const d in t)t[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>t,reset:()=>{t=Lu(),i=!0}}}function qS(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Md(e,n):!1}function ni(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lu(){return{animate:ni(!0),whileInView:ni(),whileHover:ni(),whileTap:ni(),whileDrag:ni(),whileFocus:ni(),exit:ni()}}class qn{constructor(e){this.isMounted=!1,this.node=e}update(){}}class YS extends qn{constructor(e){super(e),e.animationState||(e.animationState=XS(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Xr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let $S=0;class KS extends qn{constructor(){super(...arguments),this.id=$S++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const ZS={animation:{Feature:YS},exit:{Feature:KS}},uf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function $r(n,e="page"){return{point:{x:n[`${e}X`],y:n[`${e}Y`]}}}const JS=n=>e=>uf(e)&&n(e,$r(e));function Mn(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function An(n,e,t,i){return Mn(n,e,JS(t),i)}const Du=(n,e)=>Math.abs(n-e);function QS(n,e){const t=Du(n.x,e.x),i=Du(n.y,e.y);return Math.sqrt(t**2+i**2)}class hf{constructor(e,t,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Go(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=QS(h.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:g}=h,{timestamp:v}=vt;this.history.push({...g,timestamp:v});const{onStart:p,onMove:f}=this.handlers;d||(p&&p(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Ho(d,this.transformPagePoint),Ze.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:m,onSessionEnd:g,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Go(h.type==="pointercancel"?this.lastMoveEventInfo:Ho(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,p),g&&g(h,p)},!uf(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=i,this.contextWindow=s||window;const o=$r(e),a=Ho(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=vt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=t;u&&u(e,Go(a,this.history)),this.removeListeners=bn(An(this.contextWindow,"pointermove",this.handlePointerMove),An(this.contextWindow,"pointerup",this.handlePointerUp),An(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Gn(this.updatePoint)}}function Ho(n,e){return e?{point:e(n.point)}:n}function Iu(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Go({point:n},e){return{point:n,delta:Iu(n,df(e)),offset:Iu(n,eM(e)),velocity:tM(e,.1)}}function eM(n){return n[0]}function df(n){return n[n.length-1]}function tM(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=df(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>En(e)));)t--;if(!i)return{x:0,y:0};const r=Tn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ff(n){let e=null;return()=>{const t=()=>{e=null};return e===null?(e=n,t):!1}}const Nu=ff("dragHorizontal"),Uu=ff("dragVertical");function pf(n){let e=!1;if(n==="y")e=Uu();else if(n==="x")e=Nu();else{const t=Nu(),i=Uu();t&&i?e=()=>{t(),i()}:(t&&t(),i&&i())}return e}function mf(){const n=pf(!0);return n?(n(),!1):!0}function Fi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const gf=1e-4,nM=1-gf,iM=1+gf,vf=.01,sM=0-vf,rM=0+vf;function Bt(n){return n.max-n.min}function oM(n,e,t){return Math.abs(n-e)<=t}function Fu(n,e,t,i=.5){n.origin=i,n.originPoint=it(e.min,e.max,n.origin),n.scale=Bt(t)/Bt(e),n.translate=it(t.min,t.max,n.origin)-n.originPoint,(n.scale>=nM&&n.scale<=iM||isNaN(n.scale))&&(n.scale=1),(n.translate>=sM&&n.translate<=rM||isNaN(n.translate))&&(n.translate=0)}function vs(n,e,t,i){Fu(n.x,e.x,t.x,i?i.originX:void 0),Fu(n.y,e.y,t.y,i?i.originY:void 0)}function Ou(n,e,t){n.min=t.min+e.min,n.max=n.min+Bt(e)}function aM(n,e,t){Ou(n.x,e.x,t.x),Ou(n.y,e.y,t.y)}function Bu(n,e,t){n.min=e.min-t.min,n.max=n.min+Bt(e)}function _s(n,e,t){Bu(n.x,e.x,t.x),Bu(n.y,e.y,t.y)}function lM(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?it(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?it(t,n,i.max):Math.min(n,t)),n}function ku(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function cM(n,{top:e,left:t,bottom:i,right:s}){return{x:ku(n.x,t,s),y:ku(n.y,e,i)}}function Vu(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function uM(n,e){return{x:Vu(n.x,e.x),y:Vu(n.y,e.y)}}function hM(n,e){let t=.5;const i=Bt(n),s=Bt(e);return s>i?t=Ki(e.min,e.max-i,n.min):i>s&&(t=Ki(n.min,n.max-s,e.min)),Wn(0,1,t)}function dM(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const el=.35;function fM(n=el){return n===!1?n=0:n===!0&&(n=el),{x:zu(n,"left","right"),y:zu(n,"top","bottom")}}function zu(n,e,t){return{min:Hu(n,e),max:Hu(n,t)}}function Hu(n,e){return typeof n=="number"?n:n[e]||0}const Gu=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:Gu(),y:Gu()}),Wu=()=>({min:0,max:0}),ot=()=>({x:Wu(),y:Wu()});function Gt(n){return[n("x"),n("y")]}function _f({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function pM({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function mM(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Wo(n){return n===void 0||n===1}function tl({scale:n,scaleX:e,scaleY:t}){return!Wo(n)||!Wo(e)||!Wo(t)}function oi(n){return tl(n)||xf(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function xf(n){return ju(n.x)||ju(n.y)}function ju(n){return n&&n!=="0%"}function Br(n,e,t){const i=n-t,s=e*i;return t+s}function Xu(n,e,t,i,s){return s!==void 0&&(n=Br(n,s,i)),Br(n,t,i)+e}function nl(n,e=0,t=1,i,s){n.min=Xu(n.min,e,t,i,s),n.max=Xu(n.max,e,t,i,s)}function yf(n,{x:e,y:t}){nl(n.x,e.translate,e.scale,e.originPoint),nl(n.y,t.translate,t.scale,t.originPoint)}const qu=.999999999999,Yu=1.0000000000001;function gM(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=t[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&ki(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,yf(n,o)),i&&oi(r.latestValues)&&ki(n,r.latestValues))}e.x<Yu&&e.x>qu&&(e.x=1),e.y<Yu&&e.y>qu&&(e.y=1)}function Bi(n,e){n.min=n.min+e,n.max=n.max+e}function $u(n,e,t,i,s=.5){const r=it(n.min,n.max,s);nl(n,e,t,r,i)}function ki(n,e){$u(n.x,e.x,e.scaleX,e.scale,e.originX),$u(n.y,e.y,e.scaleY,e.scale,e.originY)}function Sf(n,e){return _f(mM(n.getBoundingClientRect(),e))}function vM(n,e,t){const i=Sf(n,t),{scroll:s}=e;return s&&(Bi(i.x,s.offset.x),Bi(i.y,s.offset.y)),i}const Mf=({current:n})=>n?n.ownerDocument.defaultView:null,_M=new WeakMap;class xM{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ot(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor($r(u,"page").point)},r=(u,h)=>{const{drag:d,dragPropagation:m,onDragStart:g}=this.getProps();if(d&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=pf(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(p=>{let f=this.getAxisMotionValue(p).get()||0;if(on.test(f)){const{projection:E}=this.visualElement;if(E&&E.layout){const x=E.layout.layoutBox[p];x&&(f=Bt(x)*(parseFloat(f)/100))}}this.originPoint[p]=f}),g&&Ze.postRender(()=>g(u,h)),Ja(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:g,onDrag:v}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:p}=h;if(m&&this.currentDirection===null){this.currentDirection=yM(p),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),v&&v(u,h)},a=(u,h)=>this.stop(u,h),l=()=>Gt(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new hf(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Mf(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Ze.postRender(()=>r(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!ar(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=lM(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;t&&Fi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=cM(s.layoutBox,t):this.constraints=!1,this.elastic=fM(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Gt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=dM(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Fi(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=vM(i,s.root,this.visualElement.getTransformPagePoint());let o=uM(s.layout.layoutBox,r);if(t){const a=t(pM(o));this.hasMutatedConstraints=!!a,a&&(o=_f(a))}return o}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Gt(u=>{if(!ar(u,t,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,m=s?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Ja(this.visualElement,e),i.start(Fl(e,i,0,t,this.visualElement,!1))}stopAnimation(){Gt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gt(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gt(t=>{const{drag:i}=this.getProps();if(!ar(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(t);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[t];r.set(e[t]-it(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Fi(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Gt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=hM({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gt(o=>{if(!ar(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(it(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;_M.set(this.visualElement,this);const e=this.visualElement.current,t=An(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Fi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Ze.read(i);const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gt(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),t(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=el,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function ar(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function yM(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class SM extends qn{constructor(e){super(e),this.removeGroupControls=Et,this.removeListeners=Et,this.controls=new xM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Et}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ku=n=>(e,t)=>{n&&Ze.postRender(()=>n(e,t))};class MM extends qn{constructor(){super(...arguments),this.removePointerDownListener=Et}onPointerDown(e){this.session=new hf(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Ku(e),onStart:Ku(t),onMove:i,onEnd:(r,o)=>{delete this.session,s&&Ze.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=An(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kr=$.createContext(null);function EM(){const n=$.useContext(Kr);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:i}=n,s=$.useId();$.useEffect(()=>i(s),[]);const r=$.useCallback(()=>t&&t(s),[s,t]);return!e&&t?[!1,r]:[!0]}const zl=$.createContext({}),Ef=$.createContext({}),Er={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zu(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ls={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Me.test(n))n=parseFloat(n);else return n;const t=Zu(n,e.target.x),i=Zu(n,e.target.y);return`${t}% ${i}%`}},TM={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=jn.parse(n);if(s.length>5)return i;const r=jn.createTransformer(n),o=typeof s[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=it(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}},kr={};function bM(n){Object.assign(kr,n)}const{schedule:Hl}=Ed(queueMicrotask,!1);class AM extends $.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;bM(wM),r&&(t.group&&t.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Er.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==t||t===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||Ze.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Hl.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Tf(n){const[e,t]=EM(),i=$.useContext(zl);return T.jsx(AM,{...n,layoutGroup:i,switchLayoutGroup:$.useContext(Ef),isPresent:e,safeToRemove:t})}const wM={borderRadius:{...ls,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ls,borderTopRightRadius:ls,borderBottomLeftRadius:ls,borderBottomRightRadius:ls,boxShadow:TM},bf=["TopLeft","TopRight","BottomLeft","BottomRight"],RM=bf.length,Ju=n=>typeof n=="string"?parseFloat(n):n,Qu=n=>typeof n=="number"||Me.test(n);function CM(n,e,t,i,s,r){s?(n.opacity=it(0,t.opacity!==void 0?t.opacity:1,PM(i)),n.opacityExit=it(e.opacity!==void 0?e.opacity:1,0,LM(i))):r&&(n.opacity=it(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let o=0;o<RM;o++){const a=`border${bf[o]}Radius`;let l=eh(e,a),c=eh(t,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Qu(l)===Qu(c)?(n[a]=Math.max(it(Ju(l),Ju(c),i),0),(on.test(c)||on.test(l))&&(n[a]+="%")):n[a]=c}(e.rotate||t.rotate)&&(n.rotate=it(e.rotate||0,t.rotate||0,i))}function eh(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const PM=Af(0,.5,Pd),LM=Af(.5,.95,Et);function Af(n,e,t){return i=>i<n?0:i>e?1:t(Ki(n,e,i))}function th(n,e){n.min=e.min,n.max=e.max}function zt(n,e){th(n.x,e.x),th(n.y,e.y)}function nh(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function ih(n,e,t,i,s){return n-=e,n=Br(n,1/t,i),s!==void 0&&(n=Br(n,1/s,i)),n}function DM(n,e=0,t=1,i=.5,s,r=n,o=n){if(on.test(e)&&(e=parseFloat(e),e=it(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=it(r.min,r.max,i);n===r&&(a-=e),n.min=ih(n.min,e,t,a,s),n.max=ih(n.max,e,t,a,s)}function sh(n,e,[t,i,s],r,o){DM(n,e[t],e[i],e[s],e.scale,r,o)}const IM=["x","scaleX","originX"],NM=["y","scaleY","originY"];function rh(n,e,t,i){sh(n.x,e,IM,t?t.x:void 0,i?i.x:void 0),sh(n.y,e,NM,t?t.y:void 0,i?i.y:void 0)}function oh(n){return n.translate===0&&n.scale===1}function wf(n){return oh(n.x)&&oh(n.y)}function ah(n,e){return n.min===e.min&&n.max===e.max}function UM(n,e){return ah(n.x,e.x)&&ah(n.y,e.y)}function lh(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Rf(n,e){return lh(n.x,e.x)&&lh(n.y,e.y)}function ch(n){return Bt(n.x)/Bt(n.y)}function uh(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class FM{constructor(){this.members=[]}add(e){Ol(this.members,e),e.scheduleRender()}remove(e){if(Bl(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function OM(n,e,t){let i="";const s=n.x.translate/e.x,r=n.y.translate/e.y,o=(t==null?void 0:t.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:m,skewY:g}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),m&&(i+=`skewX(${m}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*e.x,l=n.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const BM=(n,e)=>n.depth-e.depth;class kM{constructor(){this.children=[],this.isDirty=!1}add(e){Ol(this.children,e),this.isDirty=!0}remove(e){Bl(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(BM),this.isDirty=!1,this.children.forEach(e)}}function Tr(n){const e=Mt(n)?n.get():n;return PS(e)?e.toValue():e}function VM(n,e){const t=an.now(),i=({timestamp:s})=>{const r=s-t;r>=e&&(Gn(i),n(r-e))};return Ze.read(i,!0),()=>Gn(i)}function zM(n){return n instanceof SVGElement&&n.tagName!=="svg"}function HM(n,e,t){const i=Mt(n)?n:Es(n);return i.start(Fl("",i,e,t)),i.animation}const ai={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ps=typeof window<"u"&&window.MotionDebug!==void 0,jo=["","X","Y","Z"],GM={visibility:"hidden"},hh=1e3;let WM=0;function Xo(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Cf(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=af(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ze,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Cf(i)}function Pf({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=WM++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ps&&(ai.totalNodes=ai.resolvedTargetDeltas=ai.recalculatedProjection=0),this.nodes.forEach(qM),this.nodes.forEach(JM),this.nodes.forEach(QM),this.nodes.forEach(YM),ps&&window.MotionDebug.record(ai)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new kM)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new kl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=zM(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let h;const d=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=VM(d,250),Er.hasAnimatedSinceResize&&(Er.hasAnimatedSinceResize=!1,this.nodes.forEach(fh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:m,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||sE,{onLayoutAnimationStart:p,onLayoutAnimationComplete:f}=u.getProps(),E=!this.targetLayout||!Rf(this.targetLayout,g)||m,x=!d&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,x);const S={...Ml(v,"layout"),onPlay:p,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||fh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(eE),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Cf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dh);return}this.isUpdating||this.nodes.forEach(KM),this.isUpdating=!1,this.nodes.forEach(ZM),this.nodes.forEach(jM),this.nodes.forEach(XM),this.clearAllSnapshots();const a=an.now();vt.delta=Wn(0,1e3/60,a-vt.timestamp),vt.timestamp=a,vt.isProcessing=!0,Oo.update.process(vt),Oo.preRender.process(vt),Oo.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($M),this.sharedNodes.forEach(tE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!wf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||oi(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),rE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return ot();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(oE))){const{scroll:u}=this.root;u&&(Bi(l.x,u.offset.x),Bi(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=ot();if(zt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&zt(l,o),Bi(l.x,h.offset.x),Bi(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=ot();zt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ki(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),oi(u.latestValues)&&ki(l,u.latestValues)}return oi(this.latestValues)&&ki(l,this.latestValues),l}removeTransform(o){const a=ot();zt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!oi(c.latestValues))continue;tl(c.latestValues)&&c.updateSnapshot();const u=ot(),h=c.measurePageBox();zt(u,h),rh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return oi(this.latestValues)&&rh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=vt.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),_s(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ot(),this.targetWithTransforms=ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),yf(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),_s(this.relativeTargetOrigin,this.target,m.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ps&&ai.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||tl(this.parent.latestValues)||xf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;zt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;gM(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ot());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nh(this.prevProjectionDelta.x,this.projectionDelta.x),nh(this.prevProjectionDelta.y,this.projectionDelta.y)),vs(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!uh(this.projectionDelta.x,this.prevProjectionDelta.x)||!uh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ps&&ai.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ot(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,v=m!==g,p=this.getStack(),f=!p||p.members.length<=1,E=!!(v&&!f&&this.options.crossfade===!0&&!this.path.some(iE));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const P=S/1e3;ph(h.x,o.x,P),ph(h.y,o.y,P),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_s(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),nE(this.relativeTarget,this.relativeTargetOrigin,d,P),x&&UM(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ot()),zt(x,this.relativeTarget)),v&&(this.animationValues=u,CM(u,c,this.latestValues,P,E,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ze.update(()=>{Er.hasAnimatedSinceResize=!0,this.currentAnimation=HM(0,hh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Lf(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ot();const h=Bt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=Bt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}zt(a,l),ki(a,u),vs(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new FM),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Xo("z",o,c,this.animationValues);for(let u=0;u<jo.length;u++)Xo(`rotate${jo[u]}`,o,c,this.animationValues),Xo(`skew${jo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return GM;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Tr(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Tr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!oi(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=OM(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:m,y:g}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in kr){if(d[v]===void 0)continue;const{correct:p,applyTo:f}=kr[v],E=c.transform==="none"?d[v]:p(d[v],h);if(f){const x=f.length;for(let S=0;S<x;S++)c[f[S]]=E}else c[v]=E}return this.options.layoutId&&(c.pointerEvents=h===this?Tr(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(dh),this.root.sharedNodes.clear()}}}function jM(n){n.updateLayout()}function XM(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=t.source!==n.layout.source;r==="size"?Gt(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],m=Bt(d);d.min=i[h].min,d.max=d.min+m}):Lf(r,t.layoutBox,i)&&Gt(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],m=Bt(i[h]);d.max=d.min+m,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+m)});const a=Oi();vs(a,i,t.layoutBox);const l=Oi();o?vs(l,n.applyTransform(s,!0),t.measuredBox):vs(l,i,t.layoutBox);const c=!wf(a);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:m}=h;if(d&&m){const g=ot();_s(g,t.layoutBox,d.layoutBox);const v=ot();_s(v,i,m.layoutBox),Rf(g,v)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=v,n.relativeTargetOrigin=g,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function qM(n){ps&&ai.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function YM(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function $M(n){n.clearSnapshot()}function dh(n){n.clearMeasurements()}function KM(n){n.isLayoutDirty=!1}function ZM(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function fh(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function JM(n){n.resolveTargetDelta()}function QM(n){n.calcProjection()}function eE(n){n.resetSkewAndRotation()}function tE(n){n.removeLeadSnapshot()}function ph(n,e,t){n.translate=it(e.translate,0,t),n.scale=it(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function mh(n,e,t,i){n.min=it(e.min,t.min,i),n.max=it(e.max,t.max,i)}function nE(n,e,t,i){mh(n.x,e.x,t.x,i),mh(n.y,e.y,t.y,i)}function iE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const sE={duration:.45,ease:[.4,0,.1,1]},gh=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vh=gh("applewebkit/")&&!gh("chrome/")?Math.round:Et;function _h(n){n.min=vh(n.min),n.max=vh(n.max)}function rE(n){_h(n.x),_h(n.y)}function Lf(n,e,t){return n==="position"||n==="preserve-aspect"&&!oM(ch(e),ch(t),.2)}function oE(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const aE=Pf({attachResizeListener:(n,e)=>Mn(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qo={current:void 0},Df=Pf({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!qo.current){const n=new aE({});n.mount(window),n.setOptions({layoutScroll:!0}),qo.current=n}return qo.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),lE={pan:{Feature:MM},drag:{Feature:SM,ProjectionNode:Df,MeasureLayout:Tf}};function xh(n,e){const t=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",s=(r,o)=>{if(r.pointerType==="touch"||mf())return;const a=n.getProps();n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",e);const l=a[i];l&&Ze.postRender(()=>l(r,o))};return An(n.current,t,s,{passive:!n.getProps()[i]})}class cE extends qn{mount(){this.unmount=bn(xh(this.node,!0),xh(this.node,!1))}unmount(){}}class uE extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const If=(n,e)=>e?n===e?!0:If(n,e.parentElement):!1;function Yo(n,e){if(!e)return;const t=new PointerEvent("pointer"+n);e(t,$r(t))}class hE extends qn{constructor(){super(...arguments),this.removeStartListeners=Et,this.removeEndListeners=Et,this.removeAccessibleListeners=Et,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=An(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps(),d=!h&&!If(this.node.current,a.target)?u:c;d&&Ze.update(()=>d(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=An(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=bn(r,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Yo("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&Ze.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),Yo("down",(a,l)=>{this.startPress(a,l)})},t=Mn(this.node.current,"keydown",e),i=()=>{this.isPressing&&Yo("cancel",(r,o)=>this.cancelPress(r,o))},s=Mn(this.node.current,"blur",i);this.removeAccessibleListeners=bn(t,s)}}startPress(e,t){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Ze.postRender(()=>i(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!mf()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Ze.postRender(()=>i(e,t))}mount(){const e=this.node.getProps(),t=An(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bn(t,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const il=new WeakMap,$o=new WeakMap,dE=n=>{const e=il.get(n.target);e&&e(n)},fE=n=>{n.forEach(dE)};function pE({root:n,...e}){const t=n||document;$o.has(t)||$o.set(t,{});const i=$o.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(fE,{root:n,...e})),i[s]}function mE(n,e,t){const i=pE(e);return il.set(n,t),i.observe(n),()=>{il.delete(n),i.unobserve(n)}}const gE={some:0,all:1};class vE extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:r}=e,o={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:gE[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return mE(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(_E(e,t))&&this.startObserver()}unmount(){}}function _E({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const xE={inView:{Feature:vE},tap:{Feature:hE},focus:{Feature:uE},hover:{Feature:cE}},yE={layout:{ProjectionNode:Df,MeasureLayout:Tf}},Gl=$.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Zr=$.createContext({}),Wl=typeof window<"u",Nf=Wl?$.useLayoutEffect:$.useEffect,Uf=$.createContext({strict:!1});function SE(n,e,t,i,s){var r,o;const{visualElement:a}=$.useContext(Zr),l=$.useContext(Uf),c=$.useContext(Kr),u=$.useContext(Gl).reducedMotion,h=$.useRef();i=i||l.renderer,!h.current&&i&&(h.current=i(n,{visualState:e,parent:a,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,m=$.useContext(Ef);d&&!d.projection&&s&&(d.type==="html"||d.type==="svg")&&ME(h.current,t,s,m);const g=$.useRef(!1);$.useInsertionEffect(()=>{d&&g.current&&d.update(t,c)});const v=t[of],p=$.useRef(!!v&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,v))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,v)));return Nf(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Hl.render(d.render),p.current&&d.animationState&&d.animationState.animateChanges())}),$.useEffect(()=>{d&&(!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,v)}),p.current=!1))}),d}function ME(n,e,t,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ff(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Fi(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Ff(n){if(n)return n.options.allowProjection!==!1?n.projection:Ff(n.parent)}function EE(n,e,t){return $.useCallback(i=>{i&&n.mount&&n.mount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Fi(t)&&(t.current=i))},[e])}function Jr(n){return Xr(n.animate)||Sl.some(e=>ys(n[e]))}function Of(n){return!!(Jr(n)||n.variants)}function TE(n,e){if(Jr(n)){const{initial:t,animate:i}=n;return{initial:t===!1||ys(t)?t:void 0,animate:ys(i)?i:void 0}}return n.inherit!==!1?e:{}}function bE(n){const{initial:e,animate:t}=TE(n,$.useContext(Zr));return $.useMemo(()=>({initial:e,animate:t}),[yh(e),yh(t)])}function yh(n){return Array.isArray(n)?n.join(" "):n}const Sh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zi={};for(const n in Sh)Zi[n]={isEnabled:e=>Sh[n].some(t=>!!e[t])};function AE(n){for(const e in n)Zi[e]={...Zi[e],...n[e]}}const wE=Symbol.for("motionComponentSymbol");function RE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:s}){n&&AE(n);function r(a,l){let c;const u={...$.useContext(Gl),...a,layoutId:CE(a)},{isStatic:h}=u,d=bE(a),m=i(a,h);if(!h&&Wl){PE();const g=LE(u);c=g.MeasureLayout,d.visualElement=SE(s,m,u,e,g.ProjectionNode)}return T.jsxs(Zr.Provider,{value:d,children:[c&&d.visualElement?T.jsx(c,{visualElement:d.visualElement,...u}):null,t(s,a,EE(m,d.visualElement,l),m,h,d.visualElement)]})}const o=$.forwardRef(r);return o[wE]=s,o}function CE({layoutId:n}){const e=$.useContext(zl).id;return e&&n!==void 0?e+"-"+n:n}function PE(n,e){$.useContext(Uf).strict}function LE(n){const{drag:e,layout:t}=Zi;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const DE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jl(n){return typeof n!="string"||n.includes("-")?!1:!!(DE.indexOf(n)>-1||/[A-Z]/u.test(n))}function Bf(n,{style:e,vars:t},i,s){Object.assign(n.style,e,s&&s.getProjectionStyles(i));for(const r in t)n.style.setProperty(r,t[r])}const kf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vf(n,e,t,i){Bf(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(kf.has(s)?s:Vl(s),e.attrs[s])}function zf(n,{layout:e,layoutId:t}){return vi.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!kr[n]||n==="opacity")}function Xl(n,e,t){var i;const{style:s}=n,r={};for(const o in s)(Mt(s[o])||e.style&&Mt(e.style[o])||zf(o,n)||((i=t==null?void 0:t.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function Hf(n,e,t){const i=Xl(n,e,t);for(const s in n)if(Mt(n[s])||Mt(e[s])){const r=Ps.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function ql(n){const e=$.useRef(null);return e.current===null&&(e.current=n()),e.current}function IE({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},i,s,r){const o={latestValues:NE(i,s,r,n),renderState:e()};return t&&(o.mount=a=>t(i,a,o)),o}const Gf=n=>(e,t)=>{const i=$.useContext(Zr),s=$.useContext(Kr),r=()=>IE(n,e,i,s);return t?r():ql(r)};function NE(n,e,t,i){const s={},r=i(n,{});for(const d in r)s[d]=Tr(r[d]);let{initial:o,animate:a}=n;const l=Jr(n),c=Of(n);e&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=t?t.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Xr(h)){const d=Array.isArray(h)?h:[h];for(let m=0;m<d.length;m++){const g=xl(n,d[m]);if(g){const{transitionEnd:v,transition:p,...f}=g;for(const E in f){let x=f[E];if(Array.isArray(x)){const S=u?x.length-1:0;x=x[S]}x!==null&&(s[E]=x)}for(const E in v)s[E]=v[E]}}}return s}const Yl=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Wf=()=>({...Yl(),attrs:{}}),jf=(n,e)=>e&&typeof n=="number"?e.transform(n):n,UE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FE=Ps.length;function OE(n,e,t){let i="",s=!0;for(let r=0;r<FE;r++){const o=Ps[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||t){const c=jf(a,Cl[o]);if(!l){s=!1;const u=UE[o]||o;i+=`${u}(${c}) `}t&&(e[o]=c)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}function $l(n,e,t){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in e){const c=e[l];if(vi.has(l)){o=!0;continue}else if(Fd(l)){s[l]=c;continue}else{const u=jf(c,Cl[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(e.transform||(o||t?i.transform=OE(e,n.transform,t):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}function Mh(n,e,t){return typeof n=="string"?n:Me.transform(e+t*n)}function BE(n,e,t){const i=Mh(e,n.x,n.width),s=Mh(t,n.y,n.height);return`${i} ${s}`}const kE={offset:"stroke-dashoffset",array:"stroke-dasharray"},VE={offset:"strokeDashoffset",array:"strokeDasharray"};function zE(n,e,t=1,i=0,s=!0){n.pathLength=1;const r=s?kE:VE;n[r.offset]=Me.transform(-i);const o=Me.transform(e),a=Me.transform(t);n[r.array]=`${o} ${a}`}function Kl(n,{attrX:e,attrY:t,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if($l(n,c,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:m,dimensions:g}=n;d.transform&&(g&&(m.transform=d.transform),delete d.transform),g&&(s!==void 0||r!==void 0||m.transform)&&(m.transformOrigin=BE(g,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(d.x=e),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),o!==void 0&&zE(d,o,a,l,!1)}const Zl=n=>typeof n=="string"&&n.toLowerCase()==="svg",HE={useVisualState:Gf({scrapeMotionValuesFromProps:Hf,createRenderState:Wf,onMount:(n,e,{renderState:t,latestValues:i})=>{Ze.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),Ze.render(()=>{Kl(t,i,Zl(e.tagName),n.transformTemplate),Vf(e,t)})}})},GE={useVisualState:Gf({scrapeMotionValuesFromProps:Xl,createRenderState:Yl})};function Xf(n,e,t){for(const i in e)!Mt(e[i])&&!zf(i,t)&&(n[i]=e[i])}function WE({transformTemplate:n},e){return $.useMemo(()=>{const t=Yl();return $l(t,e,n),Object.assign({},t.vars,t.style)},[e])}function jE(n,e){const t=n.style||{},i={};return Xf(i,t,n),Object.assign(i,WE(n,e)),i}function XE(n,e){const t={},i=jE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const qE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||qE.has(n)}let qf=n=>!Vr(n);function YE(n){n&&(qf=e=>e.startsWith("on")?!Vr(e):n(e))}try{YE(require("@emotion/is-prop-valid").default)}catch{}function $E(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(qf(s)||t===!0&&Vr(s)||!e&&!Vr(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function KE(n,e,t,i){const s=$.useMemo(()=>{const r=Wf();return Kl(r,e,Zl(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(n.style){const r={};Xf(r,n.style,n),s.style={...r,...s.style}}return s}function ZE(n=!1){return(t,i,s,{latestValues:r},o)=>{const l=(jl(t)?KE:XE)(i,r,o,t),c=$E(i,typeof t=="string",n),u=t!==$.Fragment?{...c,...l,ref:s}:{},{children:h}=i,d=$.useMemo(()=>Mt(h)?h.get():h,[h]);return $.createElement(t,{...u,children:d})}}function JE(n,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...jl(i)?HE:GE,preloadedFeatures:n,useRender:ZE(s),createVisualElement:e,Component:i};return RE(o)}}const sl={current:null},Yf={current:!1};function QE(){if(Yf.current=!0,!!Wl)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>sl.current=n.matches;n.addListener(e),e()}else sl.current=!1}function eT(n,e,t){for(const i in e){const s=e[i],r=t[i];if(Mt(s))n.addValue(i,s);else if(Mt(r))n.addValue(i,Es(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,Es(o!==void 0?o:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Eh=new WeakMap,tT=[...kd,St,jn],nT=n=>tT.find(Bd(n)),Th=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class iT{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Al,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=an.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Ze.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=Jr(t),this.isVariantNode=Of(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in h){const m=h[d];l[d]!==void 0&&Mt(m)&&m.set(l[d],!1)}}mount(e){this.current=e,Eh.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),Yf.current||QE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:sl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Eh.delete(this.current),this.projection&&this.projection.unmount(),Gn(this.notifyUpdate),Gn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=vi.has(e),s=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ze.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),r(),o&&o(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Zi){const t=Zi[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Th.length;i++){const s=Th[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=e[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=eT(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Es(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Nd(s)||Dd(s))?s=parseFloat(s):!nT(s)&&jn.test(t)&&(s=qd(e,t)),this.setBaseTarget(e,Mt(s)?s.get():s)),Mt(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=xl(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);o&&(s=o[e])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Mt(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new kl),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class $f extends iT{constructor(){super(...arguments),this.KeyframeResolver=Yd}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}}function sT(n){return window.getComputedStyle(n)}class rT extends $f{constructor(){super(...arguments),this.type="html",this.renderInstance=Bf}readValueFromInstance(e,t){if(vi.has(t)){const i=Pl(t);return i&&i.default||0}else{const i=sT(e),s=(Fd(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Sf(e,t)}build(e,t,i){$l(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Xl(e,t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class oT extends $f{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ot}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(vi.has(t)){const i=Pl(t);return i&&i.default||0}return t=kf.has(t)?t:Vl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Hf(e,t,i)}build(e,t,i){Kl(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,s){Vf(e,t,i,s)}mount(e){this.isSVGTag=Zl(e.tagName),super.mount(e)}}const aT=(n,e)=>jl(n)?new oT(e):new rT(e,{allowProjection:n!==$.Fragment}),lT=JE({...ZS,...xE,...lE,...yE},aT),Jl=zx(lT);class cT extends $.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uT({children:n,isPresent:e}){const t=$.useId(),i=$.useRef(null),s=$.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=$.useContext(Gl);return $.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=t;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),T.jsx(cT,{isPresent:e,childRef:i,sizeRef:s,children:$.cloneElement(n,{ref:i})})}const hT=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=ql(dT),l=$.useId(),c=$.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=$.useMemo(()=>({id:l,initial:e,isPresent:t,custom:s,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),r?[Math.random(),c]:[t,c]);return $.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[t]),$.useEffect(()=>{!t&&!a.size&&i&&i()},[t]),o==="popLayout"&&(n=T.jsx(uT,{isPresent:t,children:n})),T.jsx(Kr.Provider,{value:u,children:n})};function dT(){return new Map}const lr=n=>n.key||"";function bh(n){const e=[];return $.Children.forEach(n,t=>{$.isValidElement(t)&&e.push(t)}),e}const Kf=({children:n,exitBeforeEnter:e,custom:t,initial:i=!0,onExitComplete:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=$.useMemo(()=>bh(n),[n]),l=a.map(lr),c=$.useRef(!0),u=$.useRef(a),h=ql(()=>new Map),[d,m]=$.useState(a),[g,v]=$.useState(a);Nf(()=>{c.current=!1,u.current=a;for(let E=0;E<g.length;E++){const x=lr(g[E]);l.includes(x)?h.delete(x):h.get(x)!==!0&&h.set(x,!1)}},[g,l.length,l.join("-")]);const p=[];if(a!==d){let E=[...a];for(let x=0;x<g.length;x++){const S=g[x],P=lr(S);l.includes(P)||(E.splice(x,0,S),p.push(S))}o==="wait"&&p.length&&(E=p),v(bh(E)),m(a);return}const{forceRender:f}=$.useContext(zl);return T.jsx(T.Fragment,{children:g.map(E=>{const x=lr(E),S=a===g||l.includes(x),P=()=>{if(h.has(x))h.set(x,!0);else return;let R=!0;h.forEach(w=>{w||(R=!1)}),R&&(f==null||f(),v(u.current),s&&s())};return T.jsx(hT,{isPresent:S,initial:!c.current||i?void 0:!1,custom:S?void 0:t,presenceAffectsLayout:r,mode:o,onExitComplete:S?void 0:P,children:E},x)})})},fT={proposed:"Asked you",approved:"You approved",denied:"You said no",done:"Done",failed:"Could not do it",expired:"Expired"},Ah=n=>new Date(n*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),wh=n=>n.split(/[\\/]/).pop()??n;function pT({projects:n,onSave:e,onRemove:t}){const[i,s]=$.useState(""),[r,o]=$.useState("");return T.jsxs(T.Fragment,{children:[T.jsx("p",{children:'What you are building. I read these folders (never change them) so I can answer "how is X going?"'}),n.map(a=>{var l,c;return T.jsxs("div",{className:"proj",children:[T.jsxs("div",{className:"proj-h",children:[T.jsx("b",{children:a.name}),T.jsx("span",{className:"chip",children:a.status})]}),a.summary?T.jsx("div",{className:"proj-s",children:a.summary}):null,T.jsx("div",{className:"proj-m",children:(l=a.health)!=null&&l.branch?`${a.health.branch} · ${a.health.uncommitted?`${a.health.uncommitted} unsaved change${a.health.uncommitted>1?"s":""}`:"all saved"} · ${a.health.last_commit}`:a.folder&&((c=a.health)==null?void 0:c.exists)===!1?"Folder not found on this computer":a.stack||""}),T.jsx("input",{className:"proj-in","aria-label":`Next step for ${a.name}`,placeholder:"Next step…",defaultValue:a.next_step,onBlur:u=>u.target.value!==a.next_step&&e({id:a.id,next_step:u.target.value})}),T.jsx("button",{className:"btn ghost sm",onClick:()=>t(a.id),children:"Remove"})]},a.id)}),n.length?null:T.jsx("p",{children:"No projects yet."}),T.jsxs("div",{className:"proj add",children:[T.jsx("input",{className:"proj-in","aria-label":"Project name",placeholder:"Project name",value:i,onChange:a=>s(a.target.value)}),T.jsx("input",{className:"proj-in","aria-label":"Folder path",placeholder:"Folder (optional), e.g. C:\\\\Users\\\\you\\\\vanta",value:r,onChange:a=>o(a.target.value)}),T.jsx("button",{className:"btn sm primary",disabled:!i.trim(),onClick:()=>{e({name:i,folder:r}),s(""),o("")},children:"Add project"})]})]})}function mT({g:n,onRestore:e}){return n?T.jsxs(T.Fragment,{children:[T.jsx("p",{children:"I never act on a threat without you pressing a button. Files go to a locked folder (never deleted). Everything is written here."}),T.jsx("div",{className:`chain ${n.chain_ok?"ok":"bad"}`,role:"status",children:n.chain_ok?"Log intact: nothing has been edited or removed.":"Warning: this log has been changed after the fact."}),T.jsx("h3",{children:"Quarantined files"}),n.quarantined.map(t=>T.jsxs("div",{className:"proj",children:[T.jsx("div",{className:"proj-h",children:T.jsx("b",{children:wh(t.original)})}),T.jsxs("div",{className:"proj-m",children:[t.original,T.jsx("br",{}),"Locked ",Ah(t.ts)]}),T.jsx("button",{className:"btn sm",onClick:()=>e(t.id),children:"Put it back"})]},t.id)),n.quarantined.length?null:T.jsx("p",{children:"Nothing quarantined."}),T.jsx("h3",{style:{marginTop:16},children:"Recent activity"}),n.audit.map(t=>{var i,s;return T.jsxs("div",{className:"log",children:[T.jsx("span",{children:Ah(t.ts)}),T.jsx("span",{children:fT[t.event]??t.event}),T.jsx("em",{children:String(((i=t.detail.target)==null?void 0:i.name)??wh(String(((s=t.detail.target)==null?void 0:s.path)??""))??"")})]},t.n)}),n.audit.length?null:T.jsx("p",{children:"No actions yet."})]}):T.jsx("p",{children:"Loading…"})}function gT({nudge:n,onAck:e}){return $.useEffect(()=>{if(!n)return;const t=setTimeout(()=>e(n.id),n.severity==="low"?9e3:3e4);return()=>clearTimeout(t)},[n,e]),T.jsx(Kf,{children:n?T.jsxs(Jl.div,{className:`toast ${n.severity}`,role:"status",initial:{y:80,opacity:0},animate:{y:0,opacity:1},exit:{y:80,opacity:0},children:[T.jsx("b",{children:n.title}),T.jsx("span",{children:n.message}),T.jsx("br",{}),T.jsx("button",{className:"btn sm",onClick:()=>e(n.id),children:"Got it"})]},n.id):null})}function vT({approval:n,onAnswer:e}){return n?T.jsx("div",{className:"scrim",role:"dialog","aria-modal":"true","aria-label":"Approval needed",children:T.jsxs("div",{className:"modal",children:[T.jsxs("h3",{children:["VANTA wants to: ",n.action]}),T.jsx("pre",{children:n.detail}),T.jsxs("div",{className:"row",children:[T.jsx("button",{className:"btn",onClick:()=>e(!1,n),children:"Deny"}),T.jsx("button",{className:"btn primary",autoFocus:!1,onClick:()=>e(!0,n),children:"Approve"})]})]})}):null}const _T=[{key:"window",label:"Windows and apps",hint:"Which app and window title you are using. Never keystrokes."},{key:"browser",label:"Browser pages",hint:"Page titles and visible text, through the Chrome extension. Never passwords."},{key:"process",label:"Running programs",hint:"Watches for unfamiliar or runaway programs."},{key:"screen",label:"Screen changes",hint:"Notices when the screen changes. Pixels are never saved."}],xT=[{v:"auto",label:"Auto"},{v:"calm",label:"Calm"},{v:"hud",label:"HUD"}];function yT({sync:n,onUnlock:e,onSyncNow:t}){const[i,s]=$.useState("");if(!n)return null;const r=n.last?new Date(n.last*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return T.jsxs(T.Fragment,{children:[T.jsx("h3",{style:{marginTop:22},children:"Phone sync"}),n.configured?n.unlocked?T.jsxs("p",{children:["Connected",r?` · last synced ${r}`:"",". Everything is scrambled on this laptop before it leaves.",T.jsx("button",{className:"btn ghost sm",onClick:t,children:"Sync now"})]}):T.jsxs(T.Fragment,{children:[T.jsx("p",{children:"Enter your vault passphrase to start syncing. It stays on this laptop and is never saved."}),T.jsxs("div",{className:"composer",style:{marginBottom:12},children:[T.jsx("input",{type:"password","aria-label":"Vault passphrase",placeholder:"Vault passphrase",value:i,onChange:o=>s(o.target.value),onKeyDown:o=>{o.key==="Enter"&&i&&(e(i),s(""))}}),T.jsx("button",{className:"btn sm primary",disabled:i.length<8,onClick:()=>{e(i),s("")},children:"Unlock"})]})]}):T.jsx("p",{children:'Not set up yet. See "Phone sync" in the README: it takes about five minutes.'}),n.error?T.jsx("p",{style:{color:"#E7A3AB"},children:n.error}):null]})}function ST({open:n,privacy:e,onSource:t,onClose:i,layout:s,onLayout:r,fx:o,fxAuto:a,onFx:l,sync:c,onUnlock:u,onSyncNow:h,projects:d,guardian:m,onSaveProject:g,onRemoveProject:v,onRestore:p,onOpenPanels:f}){const[E,x]=$.useState("privacy");return $.useEffect(()=>{n&&f()},[n]),T.jsx(Kf,{children:n?T.jsxs(Jl.aside,{className:"drawer",initial:{x:360},animate:{x:0},exit:{x:360},transition:{type:"tween",duration:.22},"aria-label":"Settings",children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsx("h3",{children:E==="privacy"?"What I can see":E==="projects"?"Projects":"Safety log"}),T.jsx("button",{className:"btn ghost sm",onClick:i,children:"Close"})]}),T.jsx("div",{className:"seg",role:"tablist","aria-label":"Settings sections",style:{margin:"10px 0 14px"},children:["privacy","projects","safety"].map(S=>T.jsx("button",{role:"tab","aria-checked":E===S,onClick:()=>x(S),children:S==="privacy"?"General":S==="projects"?"Projects":"Safety"},S))}),E==="projects"?T.jsx(pT,{projects:d,onSave:g,onRemove:v}):null,E==="safety"?T.jsx(mT,{g:m,onRestore:p}):null,E==="privacy"?T.jsxs(T.Fragment,{children:[T.jsx("p",{children:"You decide. Pausing stops everything at once. Password managers, private windows and banking pages are never read."}),_T.map(S=>T.jsxs("div",{className:"toggle",children:[T.jsxs("div",{children:[S.label,T.jsx("small",{children:S.hint})]}),T.jsx("button",{className:"switch",role:"switch","aria-label":S.label,"aria-checked":!!e.sources[S.key],onClick:()=>t(S.key,!e.sources[S.key])})]},S.key)),T.jsx("h3",{style:{marginTop:22},children:"How it looks"}),T.jsx("p",{children:"Auto keeps things calm while we chat and switches to the full HUD when there is something to show or I am working."}),T.jsx("div",{className:"seg",role:"radiogroup","aria-label":"Layout",children:xT.map(S=>T.jsx("button",{role:"radio","aria-checked":s===S.v,onClick:()=>r(S.v),children:S.label},S.v))}),T.jsxs("div",{className:"toggle",children:[T.jsxs("div",{children:["Light effects",T.jsx("small",{children:a?"Turned on because this screen was struggling.":"Fewer glows and animations. Easier on an older laptop."})]}),T.jsx("button",{className:"switch",role:"switch","aria-label":"Light effects","aria-checked":o==="low",onClick:()=>l(o==="low"?"full":"low")})]}),T.jsx(yT,{sync:c,onUnlock:u,onSyncNow:h}),T.jsxs("div",{className:"toggle",style:{marginTop:12},children:[T.jsxs("div",{children:["Sign out",T.jsx("small",{children:"Locks VANTA in this browser."})]}),T.jsx("a",{className:"btn sm",style:{display:"grid",placeItems:"center",textDecoration:"none"},href:"/logout",children:"Sign out"})]})]}):null]}):null})}const _n=24,cr=64,ii=24,MT=820,ET={text:150,node:84,news:150,chart:160,code:260,table:220,image:300,steps:200,svg:300,html:300,weather:140,recommendation:116},sn=n=>ET[n.type]??150,Ko=(n,e,t)=>Math.max(e,Math.min(t,n));function TT(n){var t;if(n.layout==="connected"||n.layout==="investigation")return"connected";if(n.layout)return"orbit";const e=n.blocks.filter(i=>i.type!=="recommendation");return(((t=n.links)==null?void 0:t.length)??0)>0&&e.length>1?"connected":"orbit"}function bT(n,e){const t=new Set(n.map(r=>r.id)),i=e.filter(r=>t.has(r.from)&&t.has(r.to)&&r.from!==r.to),s=Object.fromEntries(n.map(r=>[r.id,0]));for(let r=0;r<n.length;r++){let o=!1;for(const a of i)s[a.to]<s[a.from]+1&&s[a.from]+1<n.length&&(s[a.to]=s[a.from]+1,o=!0);if(!o)break}return s}function Rh(n,e,t,i,s){let r=i;for(const o of n){const a=o.type==="node"?Math.min(t,260):t;s[o.id]={x:o.type==="node"&&a<t?e+(t-a)/2:e,y:r,w:a,h:sn(o)},r+=sn(o)+_n}return r}function Zo(n,e,t,i,s){const r=Math.floor((e-_n*(t-1))/t);let o=i;for(let a=0;a<n.length;a+=t){const l=n.slice(a,a+t),c=Math.max(...l.map(sn));l.forEach((u,h)=>{s[u.id]={x:h*(r+_n),y:o,w:r,h:c}}),o+=c+_n}return o}function AT(n,e,t){const i=e<MT,s={},r=[],o=n?TT(n):"orbit",a=n?n.blocks.filter(p=>p.type!=="recommendation"):[],l=n?n.blocks.filter(p=>p.type==="recommendation"):[];if(i){const p={cx:e/2,cy:84,size:n?132:200};let f=p.cy+p.size/2+44;return f=Zo([...a,...l],e,1,f,s),{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,f),sphere:p}}if(o==="connected"&&n){const p={cx:ii+52,cy:ii+52,size:104},f=n.links??[],E=140,x=bT(a,f),S=new Set(f.flatMap(U=>[U.from,U.to])),P=a.filter(U=>S.has(U.id)),R=a.filter(U=>!S.has(U.id)),w=P.length?Math.max(...P.map(U=>x[U.id]))+1:1,D=Ko(Math.floor((e-cr*(w-1))/w),150,300),J=w*D+(w-1)*cr,_=Math.max(0,Math.round((e-J)/2)),b=Array(w).fill(E);for(const U of P){const H=x[U.id];s[U.id]={x:_+H*(D+cr),y:b[H],w:D,h:sn(U)},b[H]+=sn(U)+_n}let G=P.length?Math.max(...b):E;R.length&&(G=Zo(R,e,e>=900?2:1,G,s));for(const U of f){const H=s[U.from],j=s[U.to];if(!H||!j)continue;const B=j.x>H.x+H.w-1,K=B?H.x+H.w:H.x+H.w/2,V=B?H.y+H.h/2:H.y+H.h,se=B?j.x:j.x+j.w/2,ie=B?j.y+j.h/2:j.y,me=(K+se)/2,Oe=B?Math.abs(V-ie)<2?`M ${K} ${V} L ${se} ${ie}`:`M ${K} ${V} L ${me} ${V} L ${me} ${ie} L ${se} ${ie}`:`M ${K} ${V} L ${se} ${ie}`;r.push({from:U.from,to:U.to,d:Oe,label:U.label,dashed:U.style==="dashed",lx:B?se-cr/2:(K+se)/2,ly:B?ie-4:(V+ie)/2})}for(const U of l)s[U.id]={x:ii,y:G,w:e-ii*2,h:sn(U)},G+=sn(U)+_n;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,G),sphere:p}}const c=Ko(Math.min(e*.34,t*.52),200,360),u=e/2,h=Ko(t*.44,c/2+56,Math.max(c/2+56,t)),d=u-c/2-56-ii,m={cx:u,cy:h,size:c};if(!n||a.length===0)return{mode:o,stacked:i,boxes:s,arrows:r,height:t,sphere:m};let g;if(d<220){const p={cy:150,size:200};g=Zo(a,e,1,p.cy+p.size/2+40,s),m.cy=p.cy,m.size=p.size}else{const p=Math.min(400,d),f=[],E=[];a.forEach((w,D)=>(D%2===0?f:E).push(w));const x=w=>w.reduce((D,J)=>D+sn(J)+_n,-_n),S=w=>Math.max(48,Math.round(h-x(w)/2)),P=Rh(f,u+c/2+56,p,S(f),s),R=Rh(E,u-c/2-56-p,p,S(E),s);g=Math.max(P,R,h+c/2+56)}let v=Math.max(g,h+c/2+56);for(const p of l)s[p.id]={x:ii,y:v,w:e-ii*2,h:sn(p)},v+=sn(p)+_n;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(t,v),sphere:m}}const Yn=({kind:n,title:e,right:t})=>T.jsxs("div",{className:"block-head",children:[T.jsx("span",{className:"k",children:n}),T.jsx("span",{className:"t",children:e}),t]}),lt=n=>n==null?"":String(n);function wT({b:n}){const e=lt(n.data.body??n.data.text).split(/\n{2,}/).filter(Boolean);return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:lt(n.data.kind)||"note",title:n.title}),T.jsx("div",{className:"block-body",children:e.map((t,i)=>T.jsx("p",{style:{margin:i?"10px 0 0":0},children:t},i))})]})}function RT({b:n}){return T.jsx("div",{className:"block-body",children:T.jsxs("span",{children:[T.jsx("b",{children:n.title}),T.jsx("br",{}),lt(n.data.value??n.data.label)]})})}function CT({b:n}){return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"block-head",style:{borderBottom:0,paddingTop:12},children:[T.jsx("span",{className:"k2",style:{font:"500 11px var(--mono)",letterSpacing:".14em",color:"var(--accent)"},children:"NEWS"}),T.jsxs("span",{className:"t",style:{color:"var(--muted)",fontSize:12},children:[lt(n.data.source)," · ",lt(n.data.time)]})]}),T.jsxs("div",{className:"block-body news",style:{paddingTop:0},children:[T.jsx("div",{className:"headline",children:lt(n.data.headline??n.title)}),n.data.tag?T.jsx("div",{style:{marginTop:10},children:T.jsx("span",{className:"chip",children:lt(n.data.tag)})}):null]})]})}function PT({b:n}){const e=Array.isArray(n.data.values)?n.data.values.map(Number).filter(Number.isFinite):[],t=Math.max(1,...e),i=typeof n.data.highlightFrom=="number"?n.data.highlightFrom:1/0,s=408,r=70,o=Math.max(1,e.length),a=Math.max(3,Math.min(14,s/o*.62)),l=s/o;return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:"chart",title:n.title,right:n.data.note?T.jsx("span",{style:{font:"10px var(--mono)",color:"var(--muted)"},children:lt(n.data.note)}):null}),T.jsxs("div",{className:"block-body",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[T.jsx("svg",{viewBox:`0 0 ${s} ${r}`,width:"100%",height:r,preserveAspectRatio:"none",role:"img","aria-label":n.title||"chart",children:e.map((c,u)=>{const h=Math.max(3,c/t*(r-4));return T.jsx("rect",{x:u*l+(l-a)/2,y:r-h,width:a,height:h,rx:2,fill:u>=i?"#F2B35E":"#2A4A72"},u)})}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",font:"10px var(--mono)",color:"var(--muted)"},children:[T.jsx("span",{children:lt(n.data.from)}),T.jsx("span",{children:lt(n.data.to??"now")})]})]})]})}function LT({b:n}){const[e,t]=$.useState(!1),i=lt(n.data.code);return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:"code",title:lt(n.data.filename)||n.title,right:T.jsx("button",{className:"btn ghost sm",style:{height:28,padding:"0 8px"},onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(i).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},children:e?"Copied":"Copy"})}),T.jsx("div",{className:"block-body",children:T.jsx("pre",{className:"code",children:i})})]})}function DT({b:n}){const e=Array.isArray(n.data.columns)?n.data.columns.map(lt):[],t=Array.isArray(n.data.rows)?n.data.rows.slice(0,50):[];return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:"table",title:n.title}),T.jsx("div",{className:"block-body",children:T.jsxs("table",{className:"tbl",children:[T.jsx("thead",{children:T.jsx("tr",{children:e.map((i,s)=>T.jsx("th",{children:i},s))})}),T.jsx("tbody",{children:t.map((i,s)=>T.jsx("tr",{children:(Array.isArray(i)?i:[i]).map((r,o)=>T.jsx("td",{children:lt(r)},o))},s))})]})})]})}function IT({b:n}){const e=(Array.isArray(n.data.items)?n.data.items:[]).map(t=>typeof t=="string"?{label:t}:{label:lt(t.label),state:lt(t.state)});return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:"steps",title:n.title}),T.jsx("div",{className:"block-body",children:T.jsx("ul",{className:"steplist",children:e.map((t,i)=>T.jsxs("li",{className:t.state==="done"?"done":t.state==="active"?"active":t.state==="todo"?"todo":"",children:[T.jsx("span",{className:"m",children:t.state==="done"?"✓":""}),t.label]},i))})})]})}function NT({b:n}){const[e,t]=$.useState(null),i=Array.isArray(n.data.annotations)?n.data.annotations:[],s=lt(n.data.src);return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:lt(n.data.kind)||"image",title:n.title,right:i.length?T.jsx("span",{style:{fontSize:11,color:"var(--accent)",border:"1px solid var(--border-2)",borderRadius:999,padding:"2px 8px"},children:"annotated"}):null}),T.jsx("div",{className:"block-body flush",style:{display:"grid",placeItems:"center",background:"#0A1020"},children:s?T.jsxs("div",{className:"shot",style:{aspectRatio:e?String(e):void 0,width:e?void 0:"100%",height:"100%",maxWidth:"100%"},children:[T.jsx("img",{src:s,alt:n.title||"screenshot",onLoad:r=>t(r.currentTarget.naturalWidth/r.currentTarget.naturalHeight),style:{objectFit:"fill"}}),i.slice(0,6).map((r,o)=>T.jsxs("div",{children:[T.jsx("div",{className:`box ${o?"second":""}`,style:{left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.w*100}%`,height:`${r.h*100}%`}}),r.label?T.jsxs("div",{className:"badge",style:{left:`${r.x*100}%`,top:`${r.y*100}%`},children:[o+1," · ",String(r.label).slice(0,40)]}):null]},o))]}):T.jsx("span",{style:{color:"var(--muted)",fontSize:13},children:"No image"})})]})}function UT({b:n}){const t=`<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:;"><style>html,body{margin:0;height:100%;background:#0A1020;color:#E8EEF8;font:14px system-ui}svg{max-width:100%;max-height:100%}</style><body>${lt(n.data.markup)}</body>`;return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:n.type,title:n.title}),T.jsx("div",{className:"block-body flush",children:T.jsx("iframe",{className:"sandboxed",sandbox:"",referrerPolicy:"no-referrer",srcDoc:t,title:n.title||"visual"})})]})}function FT({b:n}){return T.jsxs(T.Fragment,{children:[T.jsx(Yn,{kind:"weather",title:n.title||lt(n.data.city)}),T.jsxs("div",{className:"block-body wx",children:[T.jsxs("b",{children:[Math.round(Number(n.data.temp)),"°"]}),T.jsx("span",{style:{color:"var(--muted)"},children:lt(n.data.condition)})]})]})}function OT({b:n}){switch(n.type){case"text":return T.jsx(wT,{b:n});case"node":return T.jsx(RT,{b:n});case"news":return T.jsx(CT,{b:n});case"chart":return T.jsx(PT,{b:n});case"code":return T.jsx(LT,{b:n});case"table":return T.jsx(DT,{b:n});case"steps":return T.jsx(IT,{b:n});case"image":return T.jsx(NT,{b:n});case"svg":case"html":return T.jsx(UT,{b:n});case"weather":return T.jsx(FT,{b:n});default:return null}}function BT(n){const[e,t]=$.useState({w:900,h:700});return $.useEffect(()=>{const i=n.current;if(!i)return;const s=()=>t({w:Math.floor(i.clientWidth),h:Math.floor(i.clientHeight)}),r=new ResizeObserver(s);return r.observe(i),s(),()=>r.disconnect()},[n]),e}const Ch=n=>new Date(n*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function kT(){return T.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#F2B35E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[T.jsx("path",{d:"M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"}),T.jsx("path",{d:"M12 9v4M12 16v.5"})]})}function VT({stage:n,history:e,pinned:t,sphere:i,amplitude:s,low:r,caption:o,footer:a,onOpen:l,onPin:c,onClear:u,onAction:h}){const d=$.useRef(null),{w:m,h:g}=BT(d),v=$.useMemo(()=>AT(n,Math.max(280,m-48),Math.max(360,g)),[n,m,g]),p=e.filter(S=>S.id!==(n==null?void 0:n.id)).slice(0,4),f=n==null?void 0:n.blocks.find(S=>S.type==="recommendation"),E=((n==null?void 0:n.actions)??[]).map(S=>T.jsx("button",{className:`btn ${S.kind??"secondary"}`,onClick:()=>n&&h(n.id,S),children:S.label},S.id)),x=v.sphere.cy+v.sphere.size/2+6;return T.jsxs("section",{className:`hud ${v.mode}`,"aria-label":"Stage","data-mode":v.mode,children:[T.jsxs("div",{className:"hud-head",children:[T.jsxs("div",{className:"hud-title",children:[T.jsx("span",{className:"k",children:v.mode==="connected"?"LINKED":"STAGE"}),T.jsx("h2",{children:(n==null?void 0:n.title)??"Standing by"}),n?T.jsx("span",{className:"time",children:Ch(n.ts)}):null]}),n?T.jsxs("div",{className:"hud-actions",children:[T.jsx("button",{className:"btn sm","aria-pressed":t,onClick:c,children:t?"Unpin":"Pin"}),T.jsx("button",{className:"btn sm",onClick:u,children:"Clear"})]}):null]}),T.jsx("div",{className:"hud-scroll",ref:d,children:T.jsxs("div",{className:"hud-field",style:{width:Math.max(280,m-48),height:v.height},children:[T.jsx(Rx,{state:i,amplitude:s,spot:v.sphere,low:r}),T.jsx("div",{className:`state-label ${i} ${v.mode==="connected"&&!v.stacked?"side":""}`,style:v.mode==="connected"&&!v.stacked?{left:v.sphere.cx+v.sphere.size/2+10,top:v.sphere.cy}:{left:v.sphere.cx,top:x},children:xd[i]}),n?null:T.jsxs("div",{className:"standing",style:{left:v.sphere.cx,top:x+40},children:["Nothing needs your attention.",T.jsx("br",{}),"Ask me to show you something and it appears here."]}),o&&!n?T.jsx("div",{className:"caption",style:{left:v.sphere.cx,top:x+110},children:o}):null,v.arrows.length>0&&T.jsxs("svg",{className:"arrows",width:Math.max(280,m-48),height:v.height,"aria-hidden":"true",children:[T.jsxs("defs",{children:[T.jsx("marker",{id:"ah",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:T.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#7EC8FF"})}),T.jsx("marker",{id:"ahd",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:T.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#F2B35E"})})]}),v.arrows.map((S,P)=>T.jsx("path",{className:S.dashed?"flow":"",d:S.d,fill:"none",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",stroke:S.dashed?"#F2B35E":"#7EC8FF",strokeDasharray:S.dashed?"6 6":void 0,markerEnd:`url(#${S.dashed?"ahd":"ah"})`},P))]}),v.arrows.filter(S=>S.label).map((S,P)=>T.jsx("div",{className:"arrow-label",style:{left:S.lx,top:S.ly},children:S.label},P)),n==null?void 0:n.blocks.map((S,P)=>{const R=v.boxes[S.id];if(!R)return null;const w=S.type==="recommendation";return T.jsx(Jl.div,{className:`block ${S.type} ${S.tone??""} ${w?"rec":""}`,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.35,delay:Math.min(P*.07,.35)},style:{left:R.x,top:R.y,width:R.w,height:R.h},children:w?T.jsxs(T.Fragment,{children:[T.jsx(kT,{}),T.jsxs("div",{className:"txt",children:[T.jsx("h3",{children:String(S.data.title??S.title??"")}),T.jsx("p",{children:String(S.data.reason??"")})]}),T.jsx("div",{className:"acts",children:E})]}):T.jsx(OT,{b:S})},S.id)})]})}),n&&!f&&E.length>0?T.jsx("div",{className:"hud-bar",children:E}):null,p.length>0?T.jsxs("div",{className:"earlier",children:[T.jsx("span",{className:"k",children:"EARLIER"}),p.map(S=>T.jsxs("button",{onClick:()=>l(S.id),children:[S.title," · ",Ch(S.ts)]},S.id))]}):null,a]})}const cn=Object.create(null);cn.open="0";cn.close="1";cn.ping="2";cn.pong="3";cn.message="4";cn.upgrade="5";cn.noop="6";const br=Object.create(null);Object.keys(cn).forEach(n=>{br[cn[n]]=n});const rl={type:"error",data:"parser error"},Zf=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Jf=typeof ArrayBuffer=="function",Qf=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Ql=({type:n,data:e},t,i)=>Zf&&e instanceof Blob?t?i(e):Ph(e,i):Jf&&(e instanceof ArrayBuffer||Qf(e))?t?i(e):Ph(new Blob([e]),i):i(cn[n]+(e||"")),Ph=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)};function Lh(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Jo;function zT(n,e){if(Zf&&n.data instanceof Blob)return n.data.arrayBuffer().then(Lh).then(e);if(Jf&&(n.data instanceof ArrayBuffer||Qf(n.data)))return e(Lh(n.data));Ql(n,!1,t=>{Jo||(Jo=new TextEncoder),e(Jo.encode(t))})}const Dh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ms=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Dh.length;n++)ms[Dh.charCodeAt(n)]=n;const HT=n=>{let e=n.length*.75,t=n.length,i,s=0,r,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(i=0;i<t;i+=4)r=ms[n.charCodeAt(i)],o=ms[n.charCodeAt(i+1)],a=ms[n.charCodeAt(i+2)],l=ms[n.charCodeAt(i+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},GT=typeof ArrayBuffer=="function",ec=(n,e)=>{if(typeof n!="string")return{type:"message",data:ep(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:WT(n.substring(1),e)}:br[t]?n.length>1?{type:br[t],data:n.substring(1)}:{type:br[t]}:rl},WT=(n,e)=>{if(GT){const t=HT(n);return ep(t,e)}else return{base64:!0,data:n}},ep=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},tp="",jT=(n,e)=>{const t=n.length,i=new Array(t);let s=0;n.forEach((r,o)=>{Ql(r,!1,a=>{i[o]=a,++s===t&&e(i.join(tp))})})},XT=(n,e)=>{const t=n.split(tp),i=[];for(let s=0;s<t.length;s++){const r=ec(t[s],e);if(i.push(r),r.type==="error")break}return i};function qT(){return new TransformStream({transform(n,e){zT(n,t=>{const i=t.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Qo;function ur(n){return n.reduce((e,t)=>e+t.length,0)}function hr(n,e){if(n[0].length===e)return n.shift();const t=new Uint8Array(e);let i=0;for(let s=0;s<e;s++)t[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),t}function YT(n,e){Qo||(Qo=new TextDecoder);const t=[];let i=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(i===0){if(ur(t)<1)break;const l=hr(t,1);r=(l[0]&128)===128,s=l[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(ur(t)<2)break;const l=hr(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(ur(t)<8)break;const l=hr(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(rl);break}s=u*Math.pow(2,32)+c.getUint32(4),i=3}else{if(ur(t)<s)break;const l=hr(t,s);a.enqueue(ec(r?l:Qo.decode(l),e)),i=0}if(s===0||s>n){a.enqueue(rl);break}}}})}const np=4;function dt(n){if(n)return $T(n)}function $T(n){for(var e in dt.prototype)n[e]=dt.prototype[e];return n}dt.prototype.on=dt.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};dt.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};dt.prototype.off=dt.prototype.removeListener=dt.prototype.removeAllListeners=dt.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<t.length;s++)if(i=t[s],i===e||i.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+n],this};dt.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,s=t.length;i<s;++i)t[i].apply(this,e)}return this};dt.prototype.emitReserved=dt.prototype.emit;dt.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};dt.prototype.hasListeners=function(n){return!!this.listeners(n).length};const jt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function ip(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const KT=jt.setTimeout,ZT=jt.clearTimeout;function Qr(n,e){e.useNativeTimers?(n.setTimeoutFn=KT.bind(jt),n.clearTimeoutFn=ZT.bind(jt)):(n.setTimeoutFn=jt.setTimeout.bind(jt),n.clearTimeoutFn=jt.clearTimeout.bind(jt))}const JT=1.33;function QT(n){return typeof n=="string"?eb(n):Math.ceil((n.byteLength||n.size)*JT)}function eb(n){let e=0,t=0;for(let i=0,s=n.length;i<s;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function tb(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function nb(n){let e={},t=n.split("&");for(let i=0,s=t.length;i<s;i++){let r=t[i].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class ib extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class tc extends dt{constructor(e){super(),this.writable=!1,Qr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new ib(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ec(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=tb(e);return t.length?"?"+t:""}}const sp="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ol=64,sb={};let Ih=0,dr=0,Nh;function Uh(n){let e="";do e=sp[n%ol]+e,n=Math.floor(n/ol);while(n>0);return e}function rp(){const n=Uh(+new Date);return n!==Nh?(Ih=0,Nh=n):n+"."+Uh(Ih++)}for(;dr<ol;dr++)sb[sp[dr]]=dr;let op=!1;try{op=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const rb=op;function ap(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||rb))return new XMLHttpRequest}catch{}if(!e)try{return new jt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function ob(){}const ab=function(){return new ap({xdomain:!1}).responseType!=null}();class lb extends tc{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=ab&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};XT(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,jT(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=rp()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new ln(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class ln extends dt{constructor(e,t){super(),Qr(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=ip(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const i=this.xhr=new ap(t);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=ln.requestsCount++,ln.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=ob,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ln.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ln.requestsCount=0;ln.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Fh);else if(typeof addEventListener=="function"){const n="onpagehide"in jt?"pagehide":"unload";addEventListener(n,Fh,!1)}}function Fh(){for(let n in ln.requests)ln.requests.hasOwnProperty(n)&&ln.requests[n].abort()}const nc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),fr=jt.WebSocket||jt.MozWebSocket,Oh=!0,cb="arraybuffer",Bh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ub extends tc{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=Bh?{}:ip(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=Oh&&!Bh?t?new fr(e,t):new fr(e):new fr(e,t,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;Ql(i,this.supportsBinary,r=>{const o={};try{Oh&&this.ws.send(r)}catch{}s&&nc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=rp()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!fr}}class hb extends tc{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=YT(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),s=qT();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const r=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;this.writer.write(i).then(()=>{s&&nc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const db={websocket:ub,webtransport:hb,polling:lb},fb=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,pb=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function al(n){if(n.length>2e3)throw"URI too long";const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let s=fb.exec(n||""),r={},o=14;for(;o--;)r[pb[o]]=s[o]||"";return t!=-1&&i!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=mb(r,r.path),r.queryKey=gb(r,r.query),r}function mb(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function gb(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(t[s]=r)}),t}let lp=class Ii extends dt{constructor(e,t={}){super(),this.binaryType=cb,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=al(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=al(t.host).host),Qr(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=nb(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=np,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new db[e](i)}open(){let e;if(this.opts.rememberUpgrade&&Ii.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;Ii.priorWebsocketSuccess=!1;const s=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!i)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ii.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){i||(i=!0,u(),t.close(),t=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(h){t&&h.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Ii.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(t+=QT(s)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,s){if(typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:e,data:t,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){Ii.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const s=e.length;for(;i<s;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};lp.protocol=np;function vb(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=al(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+e,i.href=i.protocol+"://"+r+(t&&t.port===i.port?"":":"+i.port),i}const _b=typeof ArrayBuffer=="function",xb=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,cp=Object.prototype.toString,yb=typeof Blob=="function"||typeof Blob<"u"&&cp.call(Blob)==="[object BlobConstructor]",Sb=typeof File=="function"||typeof File<"u"&&cp.call(File)==="[object FileConstructor]";function ic(n){return _b&&(n instanceof ArrayBuffer||xb(n))||yb&&n instanceof Blob||Sb&&n instanceof File}function Ar(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(Ar(n[t]))return!0;return!1}if(ic(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Ar(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Ar(n[t]))return!0;return!1}function Mb(n){const e=[],t=n.data,i=n;return i.data=wr(t,e),i.attachments=e.length,{packet:i,buffers:e}}function wr(n,e,t){if(!n)return n;if(ic(n)){const i={_placeholder:!0,num:e.length};return e.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=wr(n[s],e);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!t)return wr(n.toJSON(),e,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=wr(n[s],e));return i}return n}function Eb(n,e){return n.data=ll(n.data,e),delete n.attachments,n}function ll(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=ll(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=ll(n[t],e));return n}const Tb=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ne;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ne||(Ne={}));class bb{constructor(e){this.replacer=e}encode(e){return(e.type===Ne.EVENT||e.type===Ne.ACK)&&Ar(e)?this.encodeAsBinary({type:e.type===Ne.EVENT?Ne.BINARY_EVENT:Ne.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ne.BINARY_EVENT||e.type===Ne.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Mb(e),i=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(i),s}}class sc extends dt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===Ne.BINARY_EVENT;i||t.type===Ne.BINARY_ACK?(t.type=i?Ne.EVENT:Ne.ACK,this.reconstructor=new Ab(t)):super.emitReserved("decoded",t)}else if(ic(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(Ne[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ne.BINARY_EVENT||i.type===Ne.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!wb(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(r,t)}else i.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(sc.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ne.CONNECT:return kh(t);case Ne.DISCONNECT:return t===void 0;case Ne.CONNECT_ERROR:return typeof t=="string"||kh(t);case Ne.EVENT:case Ne.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Tb.indexOf(t[0])===-1);case Ne.ACK:case Ne.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ab{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Eb(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const wb=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function kh(n){return Object.prototype.toString.call(n)==="[object Object]"}const Rb=Object.freeze(Object.defineProperty({__proto__:null,Decoder:sc,Encoder:bb,get PacketType(){return Ne}},Symbol.toStringTag,{value:"Module"}));function Jt(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const Cb=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class up extends dt{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Jt(e,"open",this.onopen.bind(this)),Jt(e,"packet",this.onpacket.bind(this)),Jt(e,"error",this.onerror.bind(this)),Jt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Cb.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:Ne.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),i.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,r)=>{t.push((o,a)=>i?o?r(o):s(a):s(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ne.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ne.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ne.EVENT:case Ne.BINARY_EVENT:this.onevent(e);break;case Ne.ACK:case Ne.BINARY_ACK:this.onack(e);break;case Ne.DISCONNECT:this.ondisconnect();break;case Ne.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...s){i||(i=!0,t.packet({type:Ne.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ne.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function ts(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ts.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};ts.prototype.reset=function(){this.attempts=0};ts.prototype.setMin=function(n){this.ms=n};ts.prototype.setMax=function(n){this.max=n};ts.prototype.setJitter=function(n){this.jitter=n};class cl extends dt{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Qr(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ts({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||Rb;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new lp(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=Jt(t,"open",function(){i.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Jt(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Jt(e,"ping",this.onping.bind(this)),Jt(e,"data",this.ondata.bind(this)),Jt(e,"error",this.onerror.bind(this)),Jt(e,"close",this.onclose.bind(this)),Jt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){nc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new up(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const cs={};function Rr(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=vb(n,e.path||"/socket.io"),i=t.source,s=t.id,r=t.path,o=cs[s]&&r in cs[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new cl(i,e):(cs[s]||(cs[s]=new cl(i,e)),l=cs[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Rr,{Manager:cl,Socket:up,io:Rr,connect:Rr});const Pb=["text","node","news","chart","code","table","image","steps","svg","html","weather","recommendation"],Lb=["single","compact","investigation"],Db=["normal","warn","danger","good"],Ib=12,Nb=2e4,Ht=(n,e=400)=>typeof n=="string"?n.slice(0,e):n==null?"":String(n).slice(0,e),us=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);function ea(n){if(!us(n)||!Array.isArray(n.blocks))return null;const e=new Set,t=[];for(const r of n.blocks.slice(0,Ib)){if(!us(r)||!Pb.includes(r.type))continue;let o=Ht(r.id,40)||`b${t.length+1}`;e.has(o)&&(o=`${o}_${t.length}`),e.add(o);const a=us(r.data)?{...r.data}:{};(r.type==="svg"||r.type==="html")&&typeof a.markup=="string"&&(a.markup=a.markup.slice(0,Nb)),r.type==="image"&&typeof a.src=="string"&&!/^(data:image\/|https:\/\/|\/)/.test(a.src)&&(a.src=""),t.push({id:o,type:r.type,title:r.title?Ht(r.title,120):void 0,tone:Db.includes(r.tone)?r.tone:"normal",data:a})}if(!t.length)return null;const i=(Array.isArray(n.links)?n.links:[]).filter(us).filter(r=>e.has(Ht(r.from,40))&&e.has(Ht(r.to,40))).slice(0,24).map(r=>({from:Ht(r.from,40),to:Ht(r.to,40),label:r.label?Ht(r.label,40):void 0,style:r.style==="dashed"?"dashed":"solid"})),s=(Array.isArray(n.actions)?n.actions:[]).filter(us).slice(0,4).map(r=>({id:Ht(r.id,40),label:Ht(r.label,40),kind:["primary","secondary","ghost"].includes(r.kind)?r.kind:"secondary"})).filter(r=>r.id&&r.label);return{id:Ht(n.id,60)||`stage-${Date.now()}`,title:Ht(n.title,80)||"Stage",ts:typeof n.ts=="number"?n.ts:Date.now()/1e3,layout:Lb.includes(n.layout)?n.layout:void 0,blocks:t,links:i,actions:s,summary:n.summary?Ht(n.summary,300):void 0}}function Ub(n){const e=(n||"").toLowerCase(),t=n&&n.length>3?n.slice(0,240):void 0;return/429|rate.?limit|tokens per minute|too many requests|413|quota/.test(e)?{text:"My free providers are asking me to slow down. Give me a minute and try again.",detail:t}:/401|403|unauthor|invalid api key|authentication|forbidden/.test(e)?{text:"One of my providers refused the connection. The API key in your .env may be wrong or expired.",detail:t}:/timeout|timed out|network|connection|unreachable|dns|offline/.test(e)?{text:"I couldn't reach the network just now. I'll be fine once it's back.",detail:t}:/disabled|not approve|unsafe/.test(e)?{text:"I didn't do that, because it wasn't allowed or wasn't approved.",detail:t}:{text:"That didn't work, and I'm not sure why yet. Try again, or ask me to look into it.",detail:t}}const pr=()=>Math.random().toString(36).slice(2,9),Fb={conn:"connecting",status:"idle",statusText:"",messages:[],stages:[],activeStageId:null,pinned:!1,privacy:{paused:!1,watching:!0,sources:{}},nudge:null,approval:null,concernUntil:0,errorUntil:0,speaking:!1,workspace:null,tel:null,sync:null,projects:[],guardian:null};function Ob(n,e){switch(e.t){case"conn":return{...n,conn:e.v};case"status":{const t=e.state==="thinking"||e.state==="learning"?e.state:"idle";return{...n,status:t,statusText:t==="idle"?"":e.message??""}}case"user":return{...n,messages:[...n.messages,{id:pr(),role:"user",text:e.text}]};case"chunk":{const t=n.messages[n.messages.length-1];return t&&t.role==="vanta"&&t.streaming?{...n,speaking:!0,messages:[...n.messages.slice(0,-1),{...t,text:t.text+e.text}]}:{...n,speaking:!0,messages:[...n.messages,{id:pr(),role:"vanta",text:e.text,streaming:!0}]}}case"done":{const t=n.messages[n.messages.length-1],i=t!=null&&t.streaming?[...n.messages.slice(0,-1),{...t,streaming:!1}]:n.messages;return{...n,speaking:!1,messages:i}}case"say":return{...n,messages:[...n.messages,{id:pr(),role:"vanta",text:e.text,tag:e.tag,stageId:e.stageId,stageLabel:e.stageLabel}]};case"error":{const t=Ub(e.message);return{...n,speaking:!1,status:"idle",errorUntil:Date.now()+8e3,messages:[...n.messages.map(i=>({...i,streaming:!1})),{id:pr(),role:"vanta",text:t.text,tag:"error"}]}}case"stage":{const t=[e.stage,...n.stages.filter(s=>s.id!==e.stage.id)].slice(0,12),i=!n.pinned||n.activeStageId===e.stage.id||!n.activeStageId;return{...n,stages:t,activeStageId:i?e.stage.id:n.activeStageId}}case"open":return{...n,activeStageId:e.id};case"pin":return{...n,pinned:!n.pinned};case"clearStage":return{...n,activeStageId:null,pinned:!1};case"privacy":return{...n,privacy:e.v};case"nudge":return{...n,nudge:e.v};case"approval":return{...n,approval:e.v};case"concern":return{...n,concernUntil:Date.now()+e.ms};case"workspace":return{...n,workspace:e.v};case"sync":return{...n,sync:e.v};case"projects":return{...n,projects:Array.isArray(e.v)?e.v.slice(0,50):[]};case"guardian":return{...n,guardian:e.v};case"tel":{const t=e.v;if(!t||typeof t!="object")return n;const i=r=>typeof r=="number"&&isFinite(r)?r:0,s=t.battery&&typeof t.battery=="object"?{pct:i(t.battery.pct),plugged:!!t.battery.plugged}:null;return{...n,tel:{cpu:i(t.cpu),mem:i(t.mem),down:i(t.down),up:i(t.up),procs:i(t.procs),battery:s,idle:!!t.idle,app:typeof t.app=="string"?t.app.slice(0,40):void 0,title:typeof t.title=="string"?t.title.slice(0,80):void 0}}}}}function Bb(n,e=Date.now()){return n.conn!=="online"?"sleeping":n.errorUntil>e?"error":n.concernUntil>e?"alert":n.speaking?"speaking":n.status==="thinking"?"thinking":n.status==="learning"?"learning":"idle"}function kb(){const[n,e]=$.useReducer(Ob,Fb),t=$.useRef(null),[,i]=$.useReducer(o=>o+1,0);$.useEffect(()=>{const o=Rr({transports:["websocket","polling"]});t.current=o,o.on("connect",()=>{e({t:"conn",v:"online"}),o.emit("privacy_get"),o.emit("sync_get")}),o.on("disconnect",()=>e({t:"conn",v:"offline"})),o.on("connect_error",l=>{e({t:"conn",v:"offline"}),/xhr poll error|unauthor|403|401/i.test(String(l==null?void 0:l.message))&&!o.active&&(window.location.href="/login")}),o.on("status",l=>e({t:"status",state:l.state,message:l.message})),o.on("stream_chunk",l=>e({t:"chunk",text:l.chunk})),o.on("stream_done",()=>e({t:"done"})),o.on("response",l=>e({t:"say",text:l.text})),o.on("error",l=>e({t:"error",message:l.message})),o.on("privacy_state",l=>e({t:"privacy",v:l})),o.on("workspace_files",l=>e({t:"workspace",v:l})),o.on("projects",l=>e({t:"projects",v:l})),o.on("guardian_state",l=>e({t:"guardian",v:l})),o.on("sync_state",l=>e({t:"sync",v:l})),o.on("telemetry",l=>e({t:"tel",v:l})),o.on("nudge",l=>{e({t:"nudge",v:l}),l.severity!=="low"&&e({t:"concern",ms:12e3})}),o.on("approval_request",(l,c)=>e({t:"approval",v:{action:l.action,detail:l.detail,ack:c}})),o.on("stage",l=>{const c=ea(l);c&&(e({t:"stage",stage:c}),c.summary&&e({t:"say",text:c.summary,tag:c.blocks.some(u=>u.tone==="warn"||u.tone==="danger")?"heads-up":void 0,stageId:c.id,stageLabel:c.title}))}),o.on("alert",l=>{const c=ea({id:`alert-${Date.now()}`,title:String(l.title).slice(0,60),layout:"single",blocks:[{id:"what",type:"text",title:"What I noticed",tone:l.severity==="high"?"danger":"warn",data:{body:l.message}},{id:"rec",type:"recommendation",data:{title:"Worth a look",reason:"I haven't changed anything. Tell me if you want me to dig deeper."}}],actions:[{id:`ask:Explain what you noticed about: ${l.title}. Is it safe, and what should I do?`,label:"Show me why",kind:"primary"},{id:"dismiss",label:"Ignore once",kind:"ghost"}],summary:`${l.title}. I put what I found on the stage.`});c&&(e({t:"stage",stage:c}),e({t:"say",text:c.summary,tag:"heads-up",stageId:c.id,stageLabel:c.title}),e({t:"concern",ms:12e3}))}),o.on("weather_card",l=>{const c=ea({id:"weather",title:`Weather · ${l.city}`,blocks:[{id:"w",type:"weather",data:l}]});c&&e({t:"stage",stage:c})});const a=window.setInterval(()=>i(),1e3);return()=>{window.clearInterval(a),o.close()}},[]);const s=$.useCallback(o=>{var l;const a=o.trim();a&&(e({t:"user",text:a}),(l=t.current)==null||l.emit("chat",{message:a,think:!1}))},[]),r=$.useMemo(()=>({send:s,syncUnlock:o=>{var a;return(a=t.current)==null?void 0:a.emit("sync_unlock",{passphrase:o})},loadPanels:()=>{var o,a;(o=t.current)==null||o.emit("projects_get"),(a=t.current)==null||a.emit("guardian_get")},saveProject:o=>{var a;return(a=t.current)==null?void 0:a.emit("project_save",o)},removeProject:o=>{var a;return(a=t.current)==null?void 0:a.emit("project_remove",{id:o})},restore:o=>{var a;return(a=t.current)==null?void 0:a.emit("guardian_restore",{id:o})},syncNow:()=>{var o;return(o=t.current)==null?void 0:o.emit("sync_now")},pause:o=>{var a;return(a=t.current)==null?void 0:a.emit("privacy_pause",{paused:o})},setSource:(o,a)=>{var l;return(l=t.current)==null?void 0:l.emit("privacy_source",{name:o,enabled:a})},ackNudge:o=>{var a;(a=t.current)==null||a.emit("nudge_ack",{id:o}),e({t:"nudge",v:null})},answerApproval:(o,a)=>{a.ack({approved:o}),e({t:"approval",v:null})},openStage:o=>e({t:"open",id:o}),pinStage:()=>e({t:"pin"}),clearStage:()=>e({t:"clearStage"}),stageAction:(o,a)=>{var l;return(l=t.current)==null?void 0:l.emit("stage_action",{stage:o,action:a})},dispatch:e}),[s]);return{state:n,api:r}}const Vb={window:"windows",browser:"browser",process:"programs",screen:"screen"};function zb(){const n="(max-width: 819px)",[e,t]=$.useState(()=>window.matchMedia(n).matches);return $.useEffect(()=>{const i=window.matchMedia(n),s=()=>t(i.matches);return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]),e}function Hb(){var H;const{state:n,api:e}=kb(),t=zb(),[i,s]=$.useState("chat"),[r,o]=$.useState(!1),[a,l]=$.useState(!1),[c,u]=$.useState(Lx),[h,d,m]=Ox(),[g,v]=$.useState(!1),p=$.useRef(Date.now()),f=()=>{p.current=Date.now()},E=()=>{f(),v(!0)},x=j=>{Dx(j),u(j)},S=Bb(n),P=$.useMemo(()=>n.stages.find(j=>j.id===n.activeStageId)??null,[n.stages,n.activeStageId]),R=n.status!=="idle"||S==="alert"||S==="speaking",w=Nx(c,!!P||R),D=Object.entries(n.privacy.sources).filter(([,j])=>j).map(([j])=>Vb[j]??j),J=n.privacy.watching&&!n.privacy.paused,_=n.privacy.paused?"Paused":D.length?`Watching: ${D.join(", ")}`:"Not watching";$.useEffect(()=>{P&&i!=="stage"&&l(!0)},[P==null?void 0:P.id]),$.useEffect(()=>{i==="stage"&&l(!1)},[i]),$.useEffect(()=>{n.messages.length&&E()},[n.messages.length]),$.useEffect(()=>{if(!g)return;const j=window.setInterval(()=>{var K;!(((K=document.activeElement)==null?void 0:K.closest(".composer"))&&document.activeElement.value)&&!n.approval&&Date.now()-p.current>2e4&&v(!1)},2e3);return()=>window.clearInterval(j)},[g,n.approval]);const b=j=>{e.openStage(j),s("stage")},G=(j,B)=>{B.id.startsWith("ask:")?(e.send(B.id.slice(4)),s("chat")):B.id==="dismiss"?e.clearStage():e.stageAction(j,B.id)},U=`Senses: ${D.filter(j=>j!=="screen").join(" · ")||"none"}  |  Screen: ${n.privacy.sources.screen?"on":"off"}`;return T.jsxs("div",{className:"app","data-hud":w?"on":"off","data-rail":t||g?"open":"closed",children:[T.jsxs("header",{className:"topbar",children:[T.jsx("span",{className:"wordmark",children:"VANTA"}),T.jsxs("div",{className:"top-right",children:[T.jsxs("span",{className:`pill ${J?"on":""}`,role:"status",children:[T.jsx("span",{className:"dot"}),T.jsx("span",{className:"label-long",children:_}),T.jsx("span",{className:"label-short",style:{display:t?"inline":"none"},children:n.privacy.paused?"Paused":"Watching"})]}),T.jsx("button",{className:"btn",onClick:()=>e.pause(!n.privacy.paused),children:n.privacy.paused?"Resume":"Pause"}),T.jsx("button",{className:"btn icon","aria-label":"Settings",onClick:()=>o(j=>!j),children:T.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#8A9AB8",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[T.jsx("path",{d:"M4 7h10M18 7h2M4 17h2M10 17h10"}),T.jsx("circle",{cx:"16",cy:"7",r:"2"}),T.jsx("circle",{cx:"8",cy:"17",r:"2"})]})})]})]}),T.jsxs("aside",{className:"rail","data-hidden":t&&i!=="chat",onPointerDown:f,onKeyDown:f,children:[t?T.jsx("div",{className:`state-label ${S}`,children:xd[S]}):null,T.jsx("div",{className:"status-line",children:n.statusText}),T.jsx(kx,{messages:n.messages,onOpenStage:b}),T.jsx(Vx,{autoFocus:!t,onActivity:f,onSend:e.send,disabled:n.conn!=="online",onVoiceError:j=>e.dispatch({t:"error",message:j})}),T.jsx("div",{className:"senses",children:U})]}),T.jsx("div",{style:{gridArea:t?"main":"stage",display:t&&i!=="stage"?"none":"flex",minHeight:0,minWidth:0},children:T.jsx(VT,{stage:P,history:n.stages,pinned:n.pinned,sphere:S,amplitude:S==="speaking"?.5:0,low:h==="low",caption:w&&((H=n.tel)!=null&&H.app)?`Watching with you: ${n.tel.app}`:void 0,footer:w&&!t?T.jsx(Cx,{tel:n.tel}):null,onOpen:e.openStage,onPin:e.pinStage,onClear:e.clearStage,onAction:G})}),!t&&!g?T.jsx("button",{className:"dock",onClick:E,"aria-label":"Open chat",children:T.jsx("span",{children:"Ask VANTA…"})}):null,t&&T.jsxs("nav",{className:"tabs",role:"tablist",children:[T.jsx("button",{role:"tab","aria-selected":i==="chat",onClick:()=>s("chat"),children:"Chat"}),T.jsxs("button",{role:"tab","aria-selected":i==="stage",onClick:()=>s("stage"),children:["Stage",a?T.jsx("span",{className:"badge","aria-label":"new"}):null]})]}),n.conn==="offline"&&T.jsx("div",{className:"offline-bar",role:"status",children:"Reconnecting… I'll be right back."}),T.jsx(ST,{open:r,privacy:n.privacy,onSource:e.setSource,onClose:()=>o(!1),projects:n.projects,guardian:n.guardian,onSaveProject:e.saveProject,onRemoveProject:e.removeProject,onRestore:e.restore,onOpenPanels:e.loadPanels,sync:n.sync,onUnlock:e.syncUnlock,onSyncNow:e.syncNow,layout:c,onLayout:x,fx:h,fxAuto:m,onFx:d}),T.jsx(gT,{nudge:n.nudge,onAck:e.ackNudge}),T.jsx(vT,{approval:n.approval,onAnswer:e.answerApproval})]})}vp.createRoot(document.getElementById("root")).render(T.jsx(_p.StrictMode,{children:T.jsx(Hb,{})}));
