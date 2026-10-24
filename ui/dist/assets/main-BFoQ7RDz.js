var fp=Object.defineProperty;var pp=(n,t,e)=>t in n?fp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ve=(n,t,e)=>pp(n,typeof t!="symbol"?t+"":t,e);import{r as K,j as b,c as mp,R as gp}from"./styles-DmkCGpOC.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="169",_p=0,fc=1,vp=2,Bh=1,xp=2,gn=3,Hn=0,Pe=1,_n=2,Vn=0,Vi=1,ea=2,pc=3,mc=4,yp=5,li=100,Sp=101,Mp=102,Ep=103,Tp=104,bp=200,Ap=201,wp=202,Rp=203,na=204,ia=205,Cp=206,Pp=207,Lp=208,Dp=209,Ip=210,Up=211,Np=212,Fp=213,Op=214,sa=0,ra=1,oa=2,Gi=3,aa=4,la=5,ca=6,ua=7,kh=0,Bp=1,kp=2,zn=0,Vp=1,zp=2,Hp=3,Gp=4,Wp=5,jp=6,Xp=7,Vh=300,Wi=301,ji=302,ha=303,da=304,zr=306,fa=1e3,ui=1001,pa=1002,Xe=1003,qp=1004,Ns=1005,Qe=1006,so=1007,hi=1008,wn=1009,zh=1010,Hh=1011,xs=1012,hl=1013,mi=1014,xn=1015,Ts=1016,dl=1017,fl=1018,Xi=1020,Gh=35902,Wh=1021,jh=1022,en=1023,Xh=1024,qh=1025,zi=1026,qi=1027,Yh=1028,pl=1029,$h=1030,ml=1031,gl=1033,mr=33776,gr=33777,_r=33778,vr=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,ya=37492,Sa=37496,Ma=37808,Ea=37809,Ta=37810,ba=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,xr=36492,Fa=36494,Oa=36495,Kh=36283,Ba=36284,ka=36285,Va=36286,Yp=3200,$p=3201,Kp=0,Zp=1,kn="",nn="srgb",Xn="srgb-linear",_l="display-p3",Hr="display-p3-linear",Cr="linear",ne="srgb",Pr="rec709",Lr="p3",xi=7680,gc=519,Jp=512,Qp=513,tm=514,Zh=515,em=516,nm=517,im=518,sm=519,_c=35044,vc="300 es",yn=2e3,Dr=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,za=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function rm(n,t){return(n%t+t)%t}function oo(n,t,e){return(1-e)*n+e*t}function ns(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(t=0,e=0){Jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,i,s,r,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],f=s[6],E=s[1],x=s[4],M=s[7],P=s[2],R=s[5],w=s[8];return r[0]=o*_+a*E+l*P,r[3]=o*p+a*x+l*R,r[6]=o*f+a*M+l*w,r[1]=c*_+u*E+h*P,r[4]=c*p+u*x+h*R,r[7]=c*f+u*M+h*w,r[2]=d*_+m*E+g*P,r[5]=d*p+m*x+g*R,r[8]=d*f+m*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=e*h+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new It;function Jh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function om(){const n=Ir("canvas");return n.style.display="block",n}const xc={};function yr(n){n in xc||(xc[n]=!0,console.warn(n))}function am(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function lm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yc=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sc=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[Xn]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[nn]:{transfer:ne,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hr]:{transfer:Cr,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Sc),fromReference:n=>n.applyMatrix3(yc)},[_l]:{transfer:ne,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sc),fromReference:n=>n.applyMatrix3(yc).convertLinearToSRGB()}},um=new Set([Xn,Hr]),Xt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!um.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=is[t].toReference,s=is[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return is[n].primaries},getTransfer:function(n){return n===kn?Cr:is[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(is[t].luminanceCoefficients)}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class hm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Ir("canvas")),yi.width=t.width,yi.height=t.height;const i=yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dm=0;class Qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(co(s[o].image)):r.push(co(s[o]))}else r=co(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class Le extends Ji{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=ui,s=ui,r=Qe,o=hi,a=en,l=wn,c=Le.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=bs(),this.name="",this.source=new Qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fa:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fa:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Vh;Le.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(m+1)/2,P=(f+1)/2,R=(u+d)/4,w=(h+_)/4,D=(g+p)/4;return x>M&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=w/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=D/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=w/r,s=D/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pm extends Ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Le(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends pm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class td extends Le{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mm extends Le{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let p=1-a;const f=l*d+c*m+u*g+h*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,f*E);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const M=a*E;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-a*m,t[e+2]=c*g+u*m+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new z,Mc=new As;class ws{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Os.subVectors(this.max,ss),Si.subVectors(t.a,ss),Mi.subVectors(t.b,ss),Ei.subVectors(t.c,ss),Dn.subVectors(Mi,Si),In.subVectors(Ei,Mi),Kn.subVectors(Si,Ei);let e=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!ho(e,Si,Mi,Ei,Os)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Si,Mi,Ei,Os))?!1:(Bs.crossVectors(Dn,In),e=[Bs.x,Bs.y,Bs.z],ho(e,Si,Mi,Ei,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new z,new z,new z,new z,new z,new z,new z,new z],$e=new z,Fs=new ws,Si=new z,Mi=new z,Ei=new z,Dn=new z,In=new z,Kn=new z,ss=new z,Os=new z,Bs=new z,Zn=new z;function ho(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zn.fromArray(n,r);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gm=new ws,rs=new z,fo=new z;let Gr=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(rs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(fo)),this.expandByPoint(rs.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const dn=new z,po=new z,ks=new z,Un=new z,mo=new z,Vs=new z,go=new z;class ed{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){po.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(po);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=Un.dot(this.direction),l=-Un.dot(ks),c=Un.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(po).addScaledVector(ks,d),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const i=dn.dot(this.direction),s=dn.dot(dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,s,r){mo.subVectors(e,t),Vs.subVectors(i,t),go.crossVectors(mo,Vs);let o=this.direction.dot(go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(Un,Vs));if(l<0)return null;const c=a*this.direction.dot(mo.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(go);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_m,t,vm)}lookAt(t,e,i){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Nn.crossVectors(i,Fe),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Nn.crossVectors(i,Fe)),Nn.normalize(),zs.crossVectors(Fe,Nn),s[0]=Nn.x,s[4]=zs.x,s[8]=Fe.x,s[1]=Nn.y,s[5]=zs.y,s[9]=Fe.y,s[2]=Nn.z,s[6]=zs.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],E=i[3],x=i[7],M=i[11],P=i[15],R=s[0],w=s[4],D=s[8],J=s[12],v=s[1],T=s[5],G=s[9],N=s[13],H=s[2],j=s[6],B=s[10],$=s[14],V=s[3],st=s[7],it=s[11],mt=s[15];return r[0]=o*R+a*v+l*H+c*V,r[4]=o*w+a*T+l*j+c*st,r[8]=o*D+a*G+l*B+c*it,r[12]=o*J+a*N+l*$+c*mt,r[1]=u*R+h*v+d*H+m*V,r[5]=u*w+h*T+d*j+m*st,r[9]=u*D+h*G+d*B+m*it,r[13]=u*J+h*N+d*$+m*mt,r[2]=g*R+_*v+p*H+f*V,r[6]=g*w+_*T+p*j+f*st,r[10]=g*D+_*G+p*B+f*it,r[14]=g*J+_*N+p*$+f*mt,r[3]=E*R+x*v+M*H+P*V,r[7]=E*w+x*T+M*j+P*st,r[11]=E*D+x*G+M*B+P*it,r[15]=E*J+x*N+M*$+P*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],E=h*p*c-_*d*c+_*l*m-a*p*m-h*l*f+a*d*f,x=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,M=u*_*c-g*h*c+g*a*m-o*_*m-u*a*f+o*h*f,P=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,R=e*E+i*x+s*M+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=E*w,t[1]=(_*d*r-h*p*r-_*s*m+i*p*m+h*s*f-i*d*f)*w,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*f+i*l*f)*w,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*w,t[4]=x*w,t[5]=(u*p*r-g*d*r+g*s*m-e*p*m-u*s*f+e*d*f)*w,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*w,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*m+e*l*m)*w,t[8]=M*w,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*f-e*h*f)*w,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*w,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*w,t[12]=P*w,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*p+e*h*p)*w,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*w,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,g=r*h,_=o*u,p=o*h,f=a*h,E=l*c,x=l*u,M=l*h,P=i.x,R=i.y,w=i.z;return s[0]=(1-(_+f))*P,s[1]=(m+M)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-M)*R,s[5]=(1-(d+f))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(p-E)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,u=1/o,h=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=h,Ke.elements[9]*=h,Ke.elements[10]*=h,e.setFromRotationMatrix(Ke),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=yn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let m,g;if(a===yn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Dr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,m=(i+s)*u;let g,_;if(a===yn)g=(o+r)*h,_=-2*h;else if(a===Dr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ti=new z,Ke=new ce,_m=new z(0,0,0),vm=new z(1,1,1),Nn=new z,zs=new z,Fe=new z,Ec=new ce,Tc=new As;class Rn{constructor(t=0,e=0,i=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xm=0;const bc=new z,bi=new As,fn=new ce,Hs=new z,os=new z,ym=new z,Sm=new As,Ac=new z(1,0,0),wc=new z(0,1,0),Rc=new z(0,0,1),Cc={type:"added"},Mm={type:"removed"},Ai={type:"childadded",child:null},_o={type:"childremoved",child:null};class De extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new z,e=new Rn,i=new As,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new It}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(os,Hs,this.up):fn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(fn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new z(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new z,pn=new z,vo=new z,mn=new z,wi=new z,Ri=new z,Pc=new z,xo=new z,yo=new z,So=new z,Mo=new ae,Eo=new ae,To=new ae;class tn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ze.subVectors(s,e),pn.subVectors(i,e),vo.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(pn),l=Ze.dot(vo),c=pn.dot(pn),u=pn.dot(vo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Mo.setScalar(0),Eo.setScalar(0),To.setScalar(0),Mo.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,i),To.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(t,e,i,s){return Ze.subVectors(i,e),pn.subVectors(t,e),Ze.cross(pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ze.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,i),Ri.subVectors(r,i),xo.subVectors(t,i);const l=wi.dot(xo),c=Ri.dot(xo);if(l<=0&&c<=0)return e.copy(i);yo.subVectors(t,s);const u=wi.dot(yo),h=Ri.dot(yo);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(wi,o);So.subVectors(t,r);const m=wi.dot(So),g=Ri.dot(So);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ri,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Pc.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(Pc,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Xt.workingColorSpace){if(t=rm(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const i=id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Xt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ce(ye.r*255,0,255))*65536+Math.round(Ce(ye.g*255,0,255))*256+Math.round(Ce(ye.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,s=ye.g,r=ye.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=nn){Xt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,s=ye.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Gs);const i=oo(Fn.h,Gs.h,e),s=oo(Fn.s,Gs.s,e),r=oo(Fn.l,Gs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new qt;qt.NAMES=id;let Em=0;class Rs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Vi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sd extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new z,Ws=new Jt;class qe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ns(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}}class rd extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class od extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fi extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Tm=0;const Ve=new ce,Ao=new De,Ci=new z,Oe=new ws,as=new ws,me=new z;class Pn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jh(t)?od:rd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,i){return Ve.makeTranslation(t,e,i),this.applyMatrix4(Ve),this}scale(t,e,i){return Ve.makeScale(t,e,i),this.applyMatrix4(Ve),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Oe.min,as.min),Oe.expandByPoint(me),me.addVectors(Oe.max,as.max),Oe.expandByPoint(me)):(Oe.expandByPoint(as.min),Oe.expandByPoint(as.max))}Oe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),me.add(Ci)),s=Math.max(s,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new z,l[D]=new z;const c=new z,u=new z,h=new z,d=new Jt,m=new Jt,g=new Jt,_=new z,p=new z;function f(D,J,v){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,J),h.fromBufferAttribute(i,v),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,J),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(T),a[D].add(_),a[J].add(_),a[v].add(_),l[D].add(p),l[J].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,J=E.length;D<J;++D){const v=E[D],T=v.start,G=v.count;for(let N=T,H=T+G;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new z,M=new z,P=new z,R=new z;function w(D){P.fromBufferAttribute(s,D),R.copy(P);const J=a[D];x.copy(J),x.sub(P.multiplyScalar(P.dot(J))).normalize(),M.crossVectors(R,J);const T=M.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,T)}for(let D=0,J=E.length;D<J;++D){const v=E[D],T=v.start,G=v.count;for(let N=T,H=T+G;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ce,Jn=new ed,js=new Gr,Dc=new z,Xs=new z,qs=new z,Ys=new z,wo=new z,$s=new z,Ic=new z,Ks=new z;class Sn extends De{constructor(t=new Pn,e=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wo.fromBufferAttribute(h,t),o?$s.addScaledVector(wo,u):$s.addScaledVector(wo.sub(e),u))}e.add($s)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(js.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(js,Dc)===null||Jn.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Lc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=x;M<P;M+=3){const R=a.getX(M),w=a.getX(M+1),D=a.getX(M+2);s=Zs(this,f,t,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=Zs(this,o,t,i,c,u,h,E,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=x;M<P;M+=3){const R=M,w=M+1,D=M+2;s=Zs(this,f,t,i,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,x=p+1,M=p+2;s=Zs(this,o,t,i,c,u,h,E,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function bm(n,t,e,i,s,r,o,a){let l;if(t.side===Pe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:n}}function Zs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Xs),n.getVertexPosition(l,qs),n.getVertexPosition(c,Ys);const u=bm(n,t,e,i,Xs,qs,Ys,Ic);if(u){const h=new z;tn.getBarycoord(Ic,Xs,qs,Ys,h),s&&(u.uv=tn.getInterpolatedAttribute(s,a,l,c,h,new Jt)),r&&(u.uv1=tn.getInterpolatedAttribute(r,a,l,c,h,new Jt)),o&&(u.normal=tn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};tn.getNormal(Xs,qs,Ys,d.normal),u.face=d,u.barycoord=h}return u}class Cs extends Pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(h,2));function g(_,p,f,E,x,M,P,R,w,D,J){const v=M/w,T=P/D,G=M/2,N=P/2,H=R/2,j=w+1,B=D+1;let $=0,V=0;const st=new z;for(let it=0;it<B;it++){const mt=it*T-N;for(let Ot=0;Ot<j;Ot++){const Yt=Ot*v-G;st[_]=Yt*E,st[p]=mt*x,st[f]=H,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[f]=R>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ot/w),h.push(1-it/D),$+=1}}for(let it=0;it<D;it++)for(let mt=0;mt<w;mt++){const Ot=d+mt+j*it,Yt=d+mt+j*(it+1),X=d+(mt+1)+j*(it+1),tt=d+(mt+1)+j*it;l.push(Ot,Yt,tt),l.push(Yt,X,tt),V+=6}a.addGroup(m,V,J),m+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Te(n){const t={};for(let e=0;e<n.length;e++){const i=Yi(n[e]);for(const s in i)t[s]=i[s]}return t}function Am(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ad(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const wm={clone:Yi,merge:Te};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ld extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new z,Uc=new Jt,Nc=new Jt;class We extends ld{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Nc),e.subVectors(Nc,Uc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class Pm extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new We(Pi,Li,t,e);r.layers=this.layers,this.add(r);const o=new We(Pi,Li,t,e);o.layers=this.layers,this.add(o);const a=new We(Pi,Li,t,e);a.layers=this.layers,this.add(a);const l=new We(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new We(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cd extends Le{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lm extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new cd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cs(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:Vn});r.uniforms.tEquirect.value=e;const o=new Sn(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=Qe),new Pm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ro=new z,Dm=new z,Im=new It;class si{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ro.subVectors(i,e).cross(Dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ro),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Im.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Gr,Js=new z;class ud{constructor(t=new si,e=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],E=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,p-m,M-f).normalize(),i[1].setComponents(l+r,d+c,p+m,M+f).normalize(),i[2].setComponents(l+o,d+u,p+g,M+E).normalize(),i[3].setComponents(l-o,d-u,p-g,M-E).normalize(),i[4].setComponents(l-a,d-h,p-_,M-x).normalize(),e===yn)i[5].setComponents(l+a,d+h,p+_,M+x).normalize();else if(e===Dr)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Um(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Wr extends Pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const E=f*d-o;for(let x=0;x<c;x++){const M=x*h-r;g.push(M,-E,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const x=E+c*f,M=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;m.push(x,M,R),m.push(M,P,R)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(_,3)),this.setAttribute("uv",new fi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sg=`#define PI 3.141592653589793
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,og=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`
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
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,Ig=`struct PhysicalMaterial {
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
}`,Ug=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
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
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,z_=`#if DEPTH_PACKING == 3200
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
}`,H_=`#define DISTANCE
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
}`,G_=`#define DISTANCE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,K_=`#define LAMBERT
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define MATCAP
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
}`,Q_=`#define MATCAP
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
}`,tv=`#define NORMAL
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
}`,ev=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,dv=`uniform float rotation;
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
}`,fv=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Nm,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:km,alphatest_pars_fragment:Vm,aomap_fragment:zm,aomap_pars_fragment:Hm,batching_pars_vertex:Gm,batching_vertex:Wm,begin_vertex:jm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:$m,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Qm,color_fragment:tg,color_pars_fragment:eg,color_pars_vertex:ng,color_vertex:ig,common:sg,cube_uv_reflection_fragment:rg,defaultnormal_vertex:og,displacementmap_pars_vertex:ag,displacementmap_vertex:lg,emissivemap_fragment:cg,emissivemap_pars_fragment:ug,colorspace_fragment:hg,colorspace_pars_fragment:dg,envmap_fragment:fg,envmap_common_pars_fragment:pg,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:wg,envmap_vertex:_g,fog_vertex:vg,fog_pars_vertex:xg,fog_fragment:yg,fog_pars_fragment:Sg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:bg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Ug,lights_fragment_maps:Ng,lights_fragment_end:Fg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Vg,map_fragment:zg,map_pars_fragment:Hg,map_particle_fragment:Gg,map_particle_pars_fragment:Wg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:Yg,morphnormal_vertex:$g,morphtarget_pars_vertex:Kg,morphtarget_vertex:Zg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:t_,normal_pars_vertex:e_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:l_,packing:c_,premultiplied_alpha_fragment:u_,project_vertex:h_,dithering_fragment:d_,dithering_pars_fragment:f_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:__,shadowmap_vertex:v_,shadowmask_pars_fragment:x_,skinbase_vertex:y_,skinning_pars_vertex:S_,skinning_vertex:M_,skinnormal_vertex:E_,specularmap_fragment:T_,specularmap_pars_fragment:b_,tonemapping_fragment:A_,tonemapping_pars_fragment:w_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:P_,uv_pars_vertex:L_,uv_vertex:D_,worldpos_vertex:I_,background_vert:U_,background_frag:N_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:k_,depth_vert:V_,depth_frag:z_,distanceRGBA_vert:H_,distanceRGBA_frag:G_,equirect_vert:W_,equirect_frag:j_,linedashed_vert:X_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:$_,meshlambert_vert:K_,meshlambert_frag:Z_,meshmatcap_vert:J_,meshmatcap_frag:Q_,meshnormal_vert:tv,meshnormal_frag:ev,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:lv,points_frag:cv,shadow_vert:uv,shadow_frag:hv,sprite_vert:dv,sprite_frag:fv},rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},rn={basic:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Te([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Te([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Te([rt.points,rt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Te([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Te([rt.common,rt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Te([rt.sprite,rt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Te([rt.common,rt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Te([rt.lights,rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};rn.physical={uniforms:Te([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Qs={r:0,b:0,g:0},ti=new Rn,pv=new ce;function mv(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const M=g(E);M===null?f(a,l):M&&M.isColor&&(f(M,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===zr)?(u===void 0&&(u=new Sn(new Cs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Yi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(ti)),u.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ne,(h!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Sn(new Wr(2,2),new Cn({name:"BackgroundMaterial",uniforms:Yi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB(Qs,ad(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:p}}function gv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(v,T,G,N,H){let j=!1;const B=h(N,G,T);r!==B&&(r=B,c(r.object)),j=m(v,N,G,H),j&&g(v,N,G,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(v,T,G,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,T,G){const N=G.wireframe===!0;let H=i[v.id];H===void 0&&(H={},i[v.id]=H);let j=H[T.id];j===void 0&&(j={},H[T.id]=j);let B=j[N];return B===void 0&&(B=d(l()),j[N]=B),B}function d(v){const T=[],G=[],N=[];for(let H=0;H<e;H++)T[H]=0,G[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:N,object:v,attributes:{},index:null}}function m(v,T,G,N){const H=r.attributes,j=T.attributes;let B=0;const $=G.getAttributes();for(const V in $)if($[V].location>=0){const it=H[V];let mt=j[V];if(mt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(v,T,G,N){const H={},j=T.attributes;let B=0;const $=G.getAttributes();for(const V in $)if($[V].location>=0){let it=j[V];it===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),H[V]=mt,B++}r.attributes=H,r.attributesNum=B,r.index=N}function _(){const v=r.newAttributes;for(let T=0,G=v.length;T<G;T++)v[T]=0}function p(v){f(v,0)}function f(v,T){const G=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;G[v]=1,N[v]===0&&(n.enableVertexAttribArray(v),N[v]=1),H[v]!==T&&(n.vertexAttribDivisor(v,T),H[v]=T)}function E(){const v=r.newAttributes,T=r.enabledAttributes;for(let G=0,N=T.length;G<N;G++)T[G]!==v[G]&&(n.disableVertexAttribArray(G),T[G]=0)}function x(v,T,G,N,H,j,B){B===!0?n.vertexAttribIPointer(v,T,G,H,j):n.vertexAttribPointer(v,T,G,N,H,j)}function M(v,T,G,N){_();const H=N.attributes,j=G.getAttributes(),B=T.defaultAttributeValues;for(const $ in j){const V=j[$];if(V.location>=0){let st=H[$];if(st===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const it=st.normalized,mt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const Yt=Ot.buffer,X=Ot.type,tt=Ot.bytesPerElement,_t=X===n.INT||X===n.UNSIGNED_INT||st.gpuType===hl;if(st.isInterleavedBufferAttribute){const ht=st.data,Pt=ht.stride,Tt=st.offset;if(ht.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)f(V.location+Bt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)p(V.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Bt=0;Bt<V.locationSize;Bt++)x(V.location+Bt,mt/V.locationSize,X,it,Pt*tt,(Tt+mt/V.locationSize*Bt)*tt,_t)}else{if(st.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)f(V.location+ht,st.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let ht=0;ht<V.locationSize;ht++)x(V.location+ht,mt/V.locationSize,X,it,mt*tt,mt/V.locationSize*ht*tt,_t)}}else if(B!==void 0){const it=B[$];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(V.location,it);break;case 3:n.vertexAttrib3fv(V.location,it);break;case 4:n.vertexAttrib4fv(V.location,it);break;default:n.vertexAttrib1fv(V.location,it)}}}}E()}function P(){D();for(const v in i){const T=i[v];for(const G in T){const N=T[G];for(const H in N)u(N[H].object),delete N[H];delete T[G]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const T=i[v.id];for(const G in T){const N=T[G];for(const H in N)u(N[H].object),delete N[H];delete T[G]}delete i[v.id]}function w(v){for(const T in i){const G=i[T];if(G[v.id]===void 0)continue;const N=G[v.id];for(const H in N)u(N[H].object),delete N[H];delete G[v.id]}}function D(){J(),o=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:J,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function _v(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==en&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==wn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function xv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new si,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const E=r?0:i,x=E*4;let M=f.clippingState||null;l.value=M,M=u(g,d,x,m);for(let P=0;P!==x;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function yv(n){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=Wi:a===da&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ha||a===da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Sv extends ld{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Fc=[.125,.215,.35,.446,.526,.582],ci=20,Co=new Sv,Oc=new qt;let Po=null,Lo=0,Do=0,Io=!1;const ri=(1+Math.sqrt(5))/2,Di=1/ri,Bc=[new z(-ri,Di,0),new z(ri,Di,0),new z(-Di,0,ri),new z(Di,0,ri),new z(0,ri,-Di),new z(0,ri,Di),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Po,Lo,Do),this._renderer.xr.enabled=Io,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ts,format:en,colorSpace:Xn,depthBuffer:!1},s=Vc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mv(r)),this._blurMaterial=Ev(r,t,e)}return s}_compileMaterial(t){const e=new Sn(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,i,s){const a=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Oc),u.toneMapping=zn,u.autoClear=!1;const m=new sd({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Sn(new Cs,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Oc),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;tr(s,E*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Wi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Co)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bc[(s-r-1)%Bc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const f=[];let E=0;for(let w=0;w<ci;++w){const D=w/_,J=Math.exp(-D*D/2);f.push(J),w===0?E+=J:w<p&&(E+=2*J)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const M=this._sizeLods[s],P=3*M*(s>x-Ui?s-x+Ui:0),R=4*(this._cubeSize-M);tr(e,P,R,3*M,2*M),l.setRenderTarget(e),l.render(h,Co)}}function Mv(n){const t=[],e=[],i=[];let s=n;const r=n-Ui+1+Fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ui?l=Fc[o-n+Ui-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,D=R>2?0:-1,J=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];E.set(J,_*g*R),x.set(d,p*g*R);const v=[R,R,R,R,R,R];M.set(v,f*g*R)}const P=new Pn;P.setAttribute("position",new qe(E,_)),P.setAttribute("uv",new qe(x,p)),P.setAttribute("faceIndex",new qe(M,f)),t.push(P),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vc(n,t,e){const i=new gi(n,t,e);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ev(n,t,e){const i=new Float32Array(ci),s=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function zc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function Tv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ha||l===da,u=l===Wi||l===ji;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new kc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new kc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Av(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,M=E.length;x<M;x+=3){const P=E[x+0],R=E[x+1],w=E[x+2];d.push(P,R,R,w,w,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,M=E.length/3-1;x<M;x+=3){const P=x+0,R=x+1,w=x+2;d.push(P,R,R,w,w,P)}}else return;const p=new(Jh(d)?od:rd)(d,1);p.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function h(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<_.length;E++)e.update(f,i,_[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cv(n,t,e){const i=new WeakMap,s=new ae;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let J=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,P=1;M>t.maxTextureSize&&(P=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const R=new Float32Array(M*P*4*h),w=new td(R,M,P,h);w.type=xn,w.needsUpdate=!0;const D=x*4;for(let v=0;v<h;v++){const T=p[v],G=f[v],N=E[v],H=M*P*4*v;for(let j=0;j<T.count;j++){const B=j*D;m===!0&&(s.fromBufferAttribute(T,j),R[H+B+0]=s.x,R[H+B+1]=s.y,R[H+B+2]=s.z,R[H+B+3]=0),g===!0&&(s.fromBufferAttribute(G,j),R[H+B+4]=s.x,R[H+B+5]=s.y,R[H+B+6]=s.z,R[H+B+7]=0),_===!0&&(s.fromBufferAttribute(N,j),R[H+B+8]=s.x,R[H+B+9]=s.y,R[H+B+10]=s.z,R[H+B+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Jt(M,P)},i.set(a,d),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Pv(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class dd extends Le{constructor(t,e,i,s,r,o,a,l,c,u=zi){if(u!==zi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zi&&(i=mi),i===void 0&&u===qi&&(i=Xi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fd=new Le,Gc=new dd(1,1),pd=new td,md=new mm,gd=new cd,Wc=[],jc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function Qi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function jr(n,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Lv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function Iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function Uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function Nv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Yc.set(i),n.uniformMatrix2fv(this.addr,!1,Yc),pe(e,i)}}function Fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;qc.set(i),n.uniformMatrix3fv(this.addr,!1,qc),pe(e,i)}}function Ov(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Xc.set(i),n.uniformMatrix4fv(this.addr,!1,Xc),pe(e,i)}}function Bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function Hv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function Xv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=Zh,r=Gc):r=fd,e.setTexture2D(t||r,s)}function qv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||md,s)}function Yv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gd,s)}function $v(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pd,s)}function Kv(n){switch(n){case 5126:return Lv;case 35664:return Dv;case 35665:return Iv;case 35666:return Uv;case 35674:return Nv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Gv;case 36295:return Wv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return $v}}function Zv(n,t){n.uniform1fv(this.addr,t)}function Jv(n,t){const e=Qi(t,this.size,2);n.uniform2fv(this.addr,e)}function Qv(n,t){const e=Qi(t,this.size,3);n.uniform3fv(this.addr,e)}function t0(n,t){const e=Qi(t,this.size,4);n.uniform4fv(this.addr,e)}function e0(n,t){const e=Qi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function n0(n,t){const e=Qi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function i0(n,t){const e=Qi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function s0(n,t){n.uniform1iv(this.addr,t)}function r0(n,t){n.uniform2iv(this.addr,t)}function o0(n,t){n.uniform3iv(this.addr,t)}function a0(n,t){n.uniform4iv(this.addr,t)}function l0(n,t){n.uniform1uiv(this.addr,t)}function c0(n,t){n.uniform2uiv(this.addr,t)}function u0(n,t){n.uniform3uiv(this.addr,t)}function h0(n,t){n.uniform4uiv(this.addr,t)}function d0(n,t,e){const i=this.cache,s=t.length,r=jr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fd,r[o])}function f0(n,t,e){const i=this.cache,s=t.length,r=jr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||md,r[o])}function p0(n,t,e){const i=this.cache,s=t.length,r=jr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gd,r[o])}function m0(n,t,e){const i=this.cache,s=t.length,r=jr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pd,r[o])}function g0(n){switch(n){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return o0;case 35669:case 35673:return a0;case 5125:return l0;case 36294:return c0;case 36295:return u0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}class _0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Kv(e.type)}}class v0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g0(e.type)}}class x0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function $c(n,t){n.seq.push(t),n.map[t.id]=t}function y0(n,t,e){const i=n.name,s=i.length;for(Uo.lastIndex=0;;){const r=Uo.exec(i),o=Uo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$c(e,c===void 0?new _0(a,n,t):new v0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new x0(a),$c(e,h)),e=h}}}class Sr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);y0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Kc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const S0=37297;let M0=0;function E0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function T0(n){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(n);let i;switch(t===e?i="":t===Lr&&e===Pr?i="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case Hr:return[i,"LinearTransferOETF"];case nn:case _l:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E0(n.getShaderSource(t),o)}else return s}function b0(n,t){const e=T0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function A0(n,t){let e;switch(t){case Vp:e="Linear";break;case zp:e="Reinhard";break;case Hp:e="Cineon";break;case Gp:e="ACESFilmic";break;case jp:e="AgX";break;case Xp:e="Neutral";break;case Wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new z;function w0(){Xt.getLuminanceCoefficients(er);const n=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function C0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function P0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function hs(n){return n!==""}function Jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(L0,I0)}const D0=new Map;function I0(n,t){let e=Dt[t];if(e===void 0){const i=D0.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(n){return n.replace(U0,N0)}function N0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case ji:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function k0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kh:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function V0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function z0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=F0(e),c=O0(e),u=B0(e),h=k0(e),d=V0(e),m=R0(e),g=C0(r),_=s.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==zn?A0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=Ha(o),o=Jc(o,e),o=Qc(o,e),a=Ha(a),a=Jc(a,e),a=Qc(a,e),o=tu(o),a=tu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+p+o,M=E+f+a,P=Kc(s,s.VERTEX_SHADER,x),R=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(T){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(R).trim();let j=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,R);else{const $=Zc(s,P,"vertex"),V=Zc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+$+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(N===""||H==="")&&(B=!1);B&&(T.diagnostics={runnable:j,programLog:G,vertexShader:{log:N,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(P),s.deleteShader(R),D=new Sr(s,_),J=P0(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let J;this.getAttributes=function(){return J===void 0&&w(this),J};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,S0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new W0(t),e.set(t,i)),i}}class W0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function j0(n,t,e,i,s,r,o){const a=new nd,l=new G0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,T,G,N,H){const j=N.fog,B=H.geometry,$=v.isMeshStandardMaterial?N.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),st=V&&V.mapping===zr?V.image.height:null,it=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ot=mt!==void 0?mt.length:0;let Yt=0;B.morphAttributes.position!==void 0&&(Yt=1),B.morphAttributes.normal!==void 0&&(Yt=2),B.morphAttributes.color!==void 0&&(Yt=3);let X,tt,_t,ht;if(it){const Ae=rn[it];X=Ae.vertexShader,tt=Ae.fragmentShader}else X=v.vertexShader,tt=v.fragmentShader,l.update(v),_t=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const Pt=n.getRenderTarget(),Tt=H.isInstancedMesh===!0,Bt=H.isBatchedMesh===!0,Kt=!!v.map,kt=!!v.matcap,C=!!V,Ie=!!v.aoMap,Nt=!!v.lightMap,zt=!!v.bumpMap,At=!!v.normalMap,te=!!v.displacementMap,Ct=!!v.emissiveMap,A=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,Y=v.clearcoat>0,Q=v.dispersion>0,q=v.iridescence>0,xt=v.sheen>0,ot=v.transmission>0,dt=F&&!!v.anisotropyMap,Ht=Y&&!!v.clearcoatMap,et=Y&&!!v.clearcoatNormalMap,ft=Y&&!!v.clearcoatRoughnessMap,wt=q&&!!v.iridescenceMap,Rt=q&&!!v.iridescenceThicknessMap,pt=xt&&!!v.sheenColorMap,Ft=xt&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,Qt=!!v.specularColorMap,L=!!v.specularIntensityMap,ct=ot&&!!v.transmissionMap,W=ot&&!!v.thicknessMap,Z=!!v.gradientMap,at=!!v.alphaMap,ut=v.alphaTest>0,Vt=!!v.alphaHash,ue=!!v.extensions;let be=zn;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(be=n.toneMapping);const Gt={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:tt,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&H._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&H.instanceColor!==null,instancingMorph:Tt&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pt===null?n.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Xn,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:kt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:st,aoMap:Ie,lightMap:Nt,bumpMap:zt,normalMap:At,displacementMap:m&&te,emissiveMap:Ct,normalMapObjectSpace:At&&v.normalMapType===Zp,normalMapTangentSpace:At&&v.normalMapType===Kp,metalnessMap:A,roughnessMap:y,anisotropy:F,anisotropyMap:dt,clearcoat:Y,clearcoatMap:Ht,clearcoatNormalMap:et,clearcoatRoughnessMap:ft,dispersion:Q,iridescence:q,iridescenceMap:wt,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Qt,specularIntensityMap:L,transmission:ot,transmissionMap:ct,thicknessMap:W,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ut,alphaHash:Vt,combine:v.combine,mapUv:Kt&&p(v.map.channel),aoMapUv:Ie&&p(v.aoMap.channel),lightMapUv:Nt&&p(v.lightMap.channel),bumpMapUv:zt&&p(v.bumpMap.channel),normalMapUv:At&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:Ct&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Ht&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(v.sheenRoughnessMap.channel),specularMapUv:Lt&&p(v.specularMap.channel),specularColorMapUv:Qt&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:ct&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:at&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(At||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(Kt||at),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===Pe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function E(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)T.push(G),T.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function P(v){const T=_[v.type];let G;if(T){const N=rn[T];G=wm.clone(N.uniforms)}else G=v.uniforms;return G}function R(v,T){let G;for(let N=0,H=u.length;N<H;N++){const j=u[N];if(j.cacheKey===T){G=j,++G.usedTimes;break}}return G===void 0&&(G=new z0(n,T,v,r),u.push(G)),G}function w(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function D(v){l.remove(v)}function J(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:J}}function X0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function q0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function nu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function iu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,m,g,_,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function a(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||q0),i.length>1&&i.sort(d||nu),s.length>1&&s.sort(d||nu)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Y0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function $0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function K0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Z0=0;function J0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Q0(n){const t=new $0,e=K0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ce,o=new ce;function a(c){let u=0,h=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,E=0,x=0,M=0,P=0,R=0,w=0;c.sort(J0);for(let J=0,v=c.length;J<v;J++){const T=c[J],G=T.color,N=T.intensity,H=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=G.r*N,h+=G.g*N,d+=G.b*N;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],N);w++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=T.shadow.matrix,E++}i.directional[m]=B,m++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(G).multiplyScalar(N),B.distance=H,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[_]=B;const $=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,$.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[_]=$.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=j,M++}_++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(G).multiplyScalar(N),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=B,p++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=B,g++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(N),B.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[f]=B,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==x||D.numSpotShadows!==M||D.numSpotMaps!==P||D.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=x,D.numSpotShadows=M,D.numSpotMaps=P,D.numLightProbes=w,i.version=Z0++)}function l(c,u){let h=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const x=c[f];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function su(n){const t=new Q0(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new su(n),t.set(s,[a])):r>=o.length?(a=new su(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ex extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function rx(n,t,e){let i=new ud;const s=new Jt,r=new Jt,o=new ae,a=new ex({depthPacking:$p}),l=new nx,c={},u=e.maxTextureSize,h={[Hn]:Pe,[Pe]:Hn,[_n]:_n},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let f=this.type;this.render=function(R,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const J=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=f!==gn&&this.type===gn,H=f===gn&&this.type!==gn;for(let j=0,B=R.length;j<B;j++){const $=R[j],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const st=V.getFrameExtents();if(s.multiply(st),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||N===!0||H===!0){const mt=this.type!==gn?{minFilter:Xe,magFilter:Xe}:{};V.map!==null&&V.map.dispose(),V.map=new gi(s.x,s.y,mt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const it=V.getViewportCount();for(let mt=0;mt<it;mt++){const Ot=V.getViewport(mt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),G.viewport(o),V.updateMatrices($,mt),i=V.getFrustum(),M(w,D,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&E(V,D),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(J,v,T)};function E(R,w){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,D,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,D,m,_,null)}function x(R,w,D,J){let v=null;const T=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)v=T;else if(v=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=v.uuid,N=w.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let j=H[N];j===void 0&&(j=v.clone(),H[N]=j,w.addEventListener("dispose",P)),v=j}if(v.visible=w.visible,v.wireframe=w.wireframe,J===gn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=n.properties.get(v);G.light=D}return v}function M(R,w,D,J,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===gn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const N=t.update(R),H=R.material;if(Array.isArray(H)){const j=N.groups;for(let B=0,$=j.length;B<$;B++){const V=j[B],st=H[V.materialIndex];if(st&&st.visible){const it=x(R,st,J,v);R.onBeforeShadow(n,R,w,D,N,it,V),n.renderBufferDirect(D,null,N,it,R,V),R.onAfterShadow(n,R,w,D,N,it,V)}}}else if(H.visible){const j=x(R,H,J,v);R.onBeforeShadow(n,R,w,D,N,j,null),n.renderBufferDirect(D,null,N,j,R,null),R.onAfterShadow(n,R,w,D,N,j,null)}}const G=R.children;for(let N=0,H=G.length;N<H;N++)M(G[N],w,D,J,v)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const J=c[D],v=R.target.uuid;v in J&&(J[v].dispose(),delete J[v])}}}const ox={[sa]:ra,[oa]:ca,[aa]:ua,[Gi]:la,[ra]:sa,[ca]:oa,[ua]:aa,[la]:Gi};function ax(n){function t(){let L=!1;const ct=new ae;let W=null;const Z=new ae(0,0,0,0);return{setMask:function(at){W!==at&&!L&&(n.colorMask(at,at,at,at),W=at)},setLocked:function(at){L=at},setClear:function(at,ut,Vt,ue,be){be===!0&&(at*=ue,ut*=ue,Vt*=ue),ct.set(at,ut,Vt,ue),Z.equals(ct)===!1&&(n.clearColor(at,ut,Vt,ue),Z.copy(ct))},reset:function(){L=!1,W=null,Z.set(-1,0,0,0)}}}function e(){let L=!1,ct=!1,W=null,Z=null,at=null;return{setReversed:function(ut){ct=ut},setTest:function(ut){ut?_t(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(ut){W!==ut&&!L&&(n.depthMask(ut),W=ut)},setFunc:function(ut){if(ct&&(ut=ox[ut]),Z!==ut){switch(ut){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ut}},setLocked:function(ut){L=ut},setClear:function(ut){at!==ut&&(n.clearDepth(ut),at=ut)},reset:function(){L=!1,W=null,Z=null,at=null}}}function i(){let L=!1,ct=null,W=null,Z=null,at=null,ut=null,Vt=null,ue=null,be=null;return{setTest:function(Gt){L||(Gt?_t(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(Gt){ct!==Gt&&!L&&(n.stencilMask(Gt),ct=Gt)},setFunc:function(Gt,Ae,un){(W!==Gt||Z!==Ae||at!==un)&&(n.stencilFunc(Gt,Ae,un),W=Gt,Z=Ae,at=un)},setOp:function(Gt,Ae,un){(ut!==Gt||Vt!==Ae||ue!==un)&&(n.stencilOp(Gt,Ae,un),ut=Gt,Vt=Ae,ue=un)},setLocked:function(Gt){L=Gt},setClear:function(Gt){be!==Gt&&(n.clearStencil(Gt),be=Gt)},reset:function(){L=!1,ct=null,W=null,Z=null,at=null,ut=null,Vt=null,ue=null,be=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,x=null,M=null,P=null,R=new qt(0,0,0),w=0,D=!1,J=null,v=null,T=null,G=null,N=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),j=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=B>=2);let V=null,st={};const it=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Ot=new ae().fromArray(it),Yt=new ae().fromArray(mt);function X(L,ct,W,Z){const at=new Uint8Array(4),ut=n.createTexture();n.bindTexture(L,ut),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<W;Vt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(ct+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ut}const tt={};tt[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),r.setFunc(Gi),Nt(!1),zt(fc),_t(n.CULL_FACE),C(Vn);function _t(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function ht(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Pt(L,ct){return u[L]!==ct?(n.bindFramebuffer(L,ct),u[L]=ct,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Tt(L,ct){let W=d,Z=!1;if(L){W=h.get(ct),W===void 0&&(W=[],h.set(ct,W));const at=L.textures;if(W.length!==at.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Vt=at.length;ut<Vt;ut++)W[ut]=n.COLOR_ATTACHMENT0+ut;W.length=at.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function Bt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Kt={[li]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[Mp]:n.FUNC_REVERSE_SUBTRACT};Kt[Ep]=n.MIN,Kt[Tp]=n.MAX;const kt={[bp]:n.ZERO,[Ap]:n.ONE,[wp]:n.SRC_COLOR,[na]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[ia]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function C(L,ct,W,Z,at,ut,Vt,ue,be,Gt){if(L===Vn){g===!0&&(ht(n.BLEND),g=!1);return}if(g===!1&&(_t(n.BLEND),g=!0),L!==yp){if(L!==_||Gt!==D){if((p!==li||x!==li)&&(n.blendEquation(n.FUNC_ADD),p=li,x=li),Gt)switch(L){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,E=null,M=null,P=null,R.set(0,0,0),w=0,_=L,D=Gt}return}at=at||ct,ut=ut||W,Vt=Vt||Z,(ct!==p||at!==x)&&(n.blendEquationSeparate(Kt[ct],Kt[at]),p=ct,x=at),(W!==f||Z!==E||ut!==M||Vt!==P)&&(n.blendFuncSeparate(kt[W],kt[Z],kt[ut],kt[Vt]),f=W,E=Z,M=ut,P=Vt),(ue.equals(R)===!1||be!==w)&&(n.blendColor(ue.r,ue.g,ue.b,be),R.copy(ue),w=be),_=L,D=!1}function Ie(L,ct){L.side===_n?ht(n.CULL_FACE):_t(n.CULL_FACE);let W=L.side===Pe;ct&&(W=!W),Nt(W),L.blending===Vi&&L.transparent===!1?C(Vn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){J!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),J=L)}function zt(L){L!==_p?(_t(n.CULL_FACE),L!==v&&(L===fc?n.cullFace(n.BACK):L===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),v=L}function At(L){L!==T&&(j&&n.lineWidth(L),T=L)}function te(L,ct,W){L?(_t(n.POLYGON_OFFSET_FILL),(G!==ct||N!==W)&&(n.polygonOffset(ct,W),G=ct,N=W)):ht(n.POLYGON_OFFSET_FILL)}function Ct(L){L?_t(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+H-1),V!==L&&(n.activeTexture(L),V=L)}function y(L,ct,W){W===void 0&&(V===null?W=n.TEXTURE0+H-1:W=V);let Z=st[W];Z===void 0&&(Z={type:void 0,texture:void 0},st[W]=Z),(Z.type!==L||Z.texture!==ct)&&(V!==W&&(n.activeTexture(W),V=W),n.bindTexture(L,ct||tt[L]),Z.type=L,Z.texture=ct)}function F(){const L=st[V];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function pt(L){Yt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function Ft(L,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let Z=W.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(ct,L.name),W.set(L,Z))}function Lt(L,ct){const Z=l.get(ct).get(L);a.get(ct)!==Z&&(n.uniformBlockBinding(ct,Z,L.__bindingPointIndex),a.set(ct,Z))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,st={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,x=null,M=null,P=null,R=new qt(0,0,0),w=0,D=!1,J=null,v=null,T=null,G=null,N=null,Ot.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_t,disable:ht,bindFramebuffer:Pt,drawBuffers:Tt,useProgram:Bt,setBlending:C,setMaterial:Ie,setFlipSided:Nt,setCullFace:zt,setLineWidth:At,setPolygonOffset:te,setScissorTest:Ct,activeTexture:A,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:ft,texImage3D:wt,updateUBOMapping:Ft,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:et,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:Qt}}function ru(n,t,e,i){const s=lx(i);switch(e){case Wh:return n*t;case Xh:return n*t;case qh:return n*t*2;case Yh:return n*t/s.components*s.byteLength;case pl:return n*t/s.components*s.byteLength;case $h:return n*t*2/s.components*s.byteLength;case ml:return n*t*2/s.components*s.byteLength;case jh:return n*t*3/s.components*s.byteLength;case en:return n*t*4/s.components*s.byteLength;case gl:return n*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ga:case va:return Math.max(n,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(n,8)*Math.max(t,8)/2;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xr:case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kh:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ka:case Va:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(n){switch(n){case wn:case zh:return{byteLength:1,components:1};case xs:case Hh:case Ts:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case mi:case hl:case xn:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return m?new OffscreenCanvas(A,y):Ir("canvas")}function _(A,y,F){let Y=1;const Q=Ct(A);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*Q.width),xt=Math.floor(Y*Q.height);h===void 0&&(h=g(q,xt));const ot=y?g(q,xt):h;return ot.width=q,ot.height=xt,ot.getContext("2d").drawImage(A,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+xt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Xe&&A.minFilter!==Qe}function f(A){n.generateMipmap(A)}function E(A,y,F,Y,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),y===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),y===n.RGBA){const xt=Q?Cr:Xt.getTransfer(Y);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=xt===ne?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,y){let F;return A?y===null||y===mi||y===Xi?F=n.DEPTH24_STENCIL8:y===xn?F=n.DEPTH32F_STENCIL8:y===xs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Xi?F=n.DEPTH_COMPONENT24:y===xn?F=n.DEPTH_COMPONENT32F:y===xs&&(F=n.DEPTH_COMPONENT16),F}function M(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==Qe?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){const y=A.target;y.removeEventListener("dispose",P),w(y),y.isVideoTexture&&u.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),J(y)}function w(A){const y=i.get(A);if(y.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(Y).length===0&&d.delete(F)}i.remove(A)}function D(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const F=A.source,Y=d.get(F);delete Y[y.__cacheKey],o.memory.textures--}function J(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const q=i.get(F[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(A)}let v=0;function T(){v=0}function G(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function N(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function H(A,y){const F=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(F,A,y);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function j(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Yt(F,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function B(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Yt(F,A,y);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function $(A,y){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const V={[fa]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},st={[Xe]:n.NEAREST,[qp]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},it={[Jp]:n.NEVER,[sm]:n.ALWAYS,[Qp]:n.LESS,[Zh]:n.LEQUAL,[tm]:n.EQUAL,[im]:n.GEQUAL,[em]:n.GREATER,[nm]:n.NOTEQUAL};function mt(A,y){if(y.type===xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Qe||y.magFilter===so||y.magFilter===Ns||y.magFilter===hi||y.minFilter===Qe||y.minFilter===so||y.minFilter===Ns||y.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,V[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,V[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,V[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,st[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==Ns&&y.minFilter!==hi||y.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ot(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P));const Y=y.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=N(y);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;const xt=Q[A.__cacheKey];xt!==void 0&&(Q[A.__cacheKey].usedTimes--,xt.usedTimes===0&&D(y)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return F}function Yt(A,y,F){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Ot(A,y),q=y.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+F);const xt=i.get(q);if(q.version!==xt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);const ot=Xt.getPrimaries(Xt.workingColorSpace),dt=y.colorSpace===kn?null:Xt.getPrimaries(y.colorSpace),Ht=y.colorSpace===kn||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let et=_(y.image,!1,s.maxTextureSize);et=te(y,et);const ft=r.convert(y.format,y.colorSpace),wt=r.convert(y.type);let Rt=E(y.internalFormat,ft,wt,y.colorSpace,y.isVideoTexture);mt(Y,y);let pt;const Ft=y.mipmaps,Lt=y.isVideoTexture!==!0,Qt=xt.__version===void 0||Q===!0,L=q.dataReady,ct=M(y,et);if(y.isDepthTexture)Rt=x(y.format===qi,y.type),Qt&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,wt,null));else if(y.isDataTexture)if(Ft.length>0){Lt&&Qt&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,Ft[0].width,Ft[0].height);for(let W=0,Z=Ft.length;W<Z;W++)pt=Ft[W],Lt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(n.TEXTURE_2D,W,Rt,pt.width,pt.height,0,ft,wt,pt.data);y.generateMipmaps=!1}else Lt?(Qt&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,et.width,et.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,ft,wt,et.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,wt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Lt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Rt,Ft[0].width,Ft[0].height,et.depth);for(let W=0,Z=Ft.length;W<Z;W++)if(pt=Ft[W],y.format!==en)if(ft!==null)if(Lt){if(L)if(y.layerUpdates.size>0){const at=ru(pt.width,pt.height,y.format,y.type);for(const ut of y.layerUpdates){const Vt=pt.data.subarray(ut*at/pt.data.BYTES_PER_ELEMENT,(ut+1)*at/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ut,pt.width,pt.height,1,ft,Vt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,et.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Rt,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,et.depth,ft,wt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Rt,pt.width,pt.height,et.depth,0,ft,wt,pt.data)}else{Lt&&Qt&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,Ft[0].width,Ft[0].height);for(let W=0,Z=Ft.length;W<Z;W++)pt=Ft[W],y.format!==en?ft!==null?Lt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(n.TEXTURE_2D,W,Rt,pt.width,pt.height,0,ft,wt,pt.data)}else if(y.isDataArrayTexture)if(Lt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Rt,et.width,et.height,et.depth),L)if(y.layerUpdates.size>0){const W=ru(et.width,et.height,y.format,y.type);for(const Z of y.layerUpdates){const at=et.data.subarray(Z*W/et.data.BYTES_PER_ELEMENT,(Z+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ft,wt,at)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,wt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,ft,wt,et.data);else if(y.isData3DTexture)Lt?(Qt&&e.texStorage3D(n.TEXTURE_3D,ct,Rt,et.width,et.height,et.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,wt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,ft,wt,et.data);else if(y.isFramebufferTexture){if(Qt)if(Lt)e.texStorage2D(n.TEXTURE_2D,ct,Rt,et.width,et.height);else{let W=et.width,Z=et.height;for(let at=0;at<ct;at++)e.texImage2D(n.TEXTURE_2D,at,Rt,W,Z,0,ft,wt,null),W>>=1,Z>>=1}}else if(Ft.length>0){if(Lt&&Qt){const W=Ct(Ft[0]);e.texStorage2D(n.TEXTURE_2D,ct,Rt,W.width,W.height)}for(let W=0,Z=Ft.length;W<Z;W++)pt=Ft[W],Lt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,ft,wt,pt):e.texImage2D(n.TEXTURE_2D,W,Rt,ft,wt,pt);y.generateMipmaps=!1}else if(Lt){if(Qt){const W=Ct(et);e.texStorage2D(n.TEXTURE_2D,ct,Rt,W.width,W.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,wt,et)}else e.texImage2D(n.TEXTURE_2D,0,Rt,ft,wt,et);p(y)&&f(Y),xt.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function X(A,y,F){if(y.image.length!==6)return;const Y=Ot(A,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const q=i.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const xt=Xt.getPrimaries(Xt.workingColorSpace),ot=y.colorSpace===kn?null:Xt.getPrimaries(y.colorSpace),dt=y.colorSpace===kn||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Ht&&!et?ft[Z]=_(y.image[Z],!0,s.maxCubemapSize):ft[Z]=et?y.image[Z].image:y.image[Z],ft[Z]=te(y,ft[Z]);const wt=ft[0],Rt=r.convert(y.format,y.colorSpace),pt=r.convert(y.type),Ft=E(y.internalFormat,Rt,pt,y.colorSpace),Lt=y.isVideoTexture!==!0,Qt=q.__version===void 0||Y===!0,L=Q.dataReady;let ct=M(y,wt);mt(n.TEXTURE_CUBE_MAP,y);let W;if(Ht){Lt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Ft,wt.width,wt.height);for(let Z=0;Z<6;Z++){W=ft[Z].mipmaps;for(let at=0;at<W.length;at++){const ut=W[at];y.format!==en?Rt!==null?Lt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ut.width,ut.height,Rt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ut.width,ut.height,Rt,pt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Ft,ut.width,ut.height,0,Rt,pt,ut.data)}}}else{if(W=y.mipmaps,Lt&&Qt){W.length>0&&ct++;const Z=Ct(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Ft,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Lt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Rt,pt,ft[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ft,ft[Z].width,ft[Z].height,0,Rt,pt,ft[Z].data);for(let at=0;at<W.length;at++){const Vt=W[at].image[Z].image;Lt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Vt.width,Vt.height,Rt,pt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Ft,Vt.width,Vt.height,0,Rt,pt,Vt.data)}}else{Lt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,pt,ft[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ft,Rt,pt,ft[Z]);for(let at=0;at<W.length;at++){const ut=W[at];Lt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Rt,pt,ut.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Ft,Rt,pt,ut.image[Z])}}}p(y)&&f(n.TEXTURE_CUBE_MAP),q.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function tt(A,y,F,Y,Q,q){const xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),dt=E(F.internalFormat,xt,ot,F.colorSpace);if(!i.get(y).__hasExternalTextures){const et=Math.max(1,y.width>>q),ft=Math.max(1,y.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,dt,et,ft,y.depth,0,xt,ot,null):e.texImage2D(Q,q,dt,et,ft,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),zt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,i.get(F).__webglTexture,0,Nt(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,i.get(F).__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(A,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(y.stencilBuffer,Q),xt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Nt(y);zt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,q,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,A)}else{const Y=y.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],xt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),dt=E(q.internalFormat,xt,ot,q.colorSpace),Ht=Nt(y);F&&zt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,dt,y.width,y.height):zt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht,dt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,dt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const Y=i.get(y.depthTexture).__webglTexture,Q=Nt(y);if(y.depthTexture.format===zi)zt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===qi)zt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const y=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ht(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),_t(y.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),_t(y.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(A,y,F){const Y=i.get(A);y!==void 0&&tt(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pt(A)}function Bt(A){const y=A.texture,F=i.get(A),Y=i.get(y);A.addEventListener("dispose",R);const Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let dt=0;dt<y.mipmaps.length;dt++)F.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ot=0,dt=Q.length;ot<dt;ot++){const Ht=i.get(Q[ot]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&zt(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const dt=Q[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Ht=r.convert(dt.format,dt.colorSpace),et=r.convert(dt.type),ft=E(dt.internalFormat,Ht,et,dt.colorSpace,A.isXRRenderTarget===!0),wt=Nt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),mt(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)tt(F.__webglFramebuffer[ot][dt],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else tt(F.__webglFramebuffer[ot],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,dt=Q.length;ot<dt;ot++){const Ht=Q[ot],et=i.get(Ht);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),mt(n.TEXTURE_2D,Ht),tt(F.__webglFramebuffer,A,Ht,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Ht)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),mt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)tt(F.__webglFramebuffer[dt],A,y,n.COLOR_ATTACHMENT0,ot,dt);else tt(F.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ot,0);p(y)&&f(ot),e.unbindTexture()}A.depthBuffer&&Pt(A)}function Kt(A){const y=A.textures;for(let F=0,Y=y.length;F<Y;F++){const Q=y[F];if(p(Q)){const q=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(Q).__webglTexture;e.bindTexture(q,xt),f(q),e.unbindTexture()}}}const kt=[],C=[];function Ie(A){if(A.samples>0){if(zt(A)===!1){const y=A.textures,F=A.width,Y=A.height;let Q=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(A),ot=y.length>1;if(ot)for(let dt=0;dt<y.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<y.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Ht=i.get(y[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,n.NEAREST),l===!0&&(kt.length=0,C.length=0,kt.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(kt.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<y.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Ht=i.get(y[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Nt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function te(A,y){const F=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Xn&&F!==kn&&(Xt.getTransfer(F)===ne?(Y!==en||Q!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=T,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Tt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=zt}function ux(n,t){function e(i,s=kn){let r;const o=Xt.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===jh)return n.RGB;if(i===en)return n.RGBA;if(i===Xh)return n.LUMINANCE;if(i===qh)return n.LUMINANCE_ALPHA;if(i===zi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===$h)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===vr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===_a||i===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===ya||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xa||i===ya)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Ea||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ma)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ua)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xr||i===Fa||i===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Ba||i===ka||i===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class hx extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ds extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`;class mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Cn({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new Wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gx extends Ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new mx,p=e.getContextAttributes();let f=null,E=null;const x=[],M=[],P=new Jt;let R=null;const w=new We;w.layers.enable(1),w.viewport=new ae;const D=new We;D.layers.enable(2),D.viewport=new ae;const J=[w,D],v=new hx;v.layers.enable(1),v.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=x[X];return tt===void 0&&(tt=new No,x[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=x[X];return tt===void 0&&(tt=new No,x[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=x[X];return tt===void 0&&(tt=new No,x[X]=tt),tt.getHandSpace()};function N(X){const tt=M.indexOf(X.inputSource);if(tt===-1)return;const _t=x[tt];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let X=0;X<x.length;X++){const tt=M[X];tt!==null&&(M[X]=null,x[X].disconnect(tt))}T=null,G=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,s=null,E=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new gi(m.framebufferWidth,m.framebufferHeight,{format:en,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?qi:zi,_t=p.stencil?Xi:mi);const Pt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new gi(d.textureWidth,d.textureHeight,{format:en,type:wn,depthTexture:new dd(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let tt=0;tt<X.removed.length;tt++){const _t=X.removed[tt],ht=M.indexOf(_t);ht>=0&&(M[ht]=null,x[ht].disconnect(_t))}for(let tt=0;tt<X.added.length;tt++){const _t=X.added[tt];let ht=M.indexOf(_t);if(ht===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=M.length){M.push(_t),ht=Tt;break}else if(M[Tt]===null){M[Tt]=_t,ht=Tt;break}if(ht===-1)break}const Pt=x[ht];Pt&&Pt.connect(_t)}}const B=new z,$=new z;function V(X,tt,_t){B.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);const ht=B.distanceTo($),Pt=tt.projectionMatrix.elements,Tt=_t.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),Kt=Pt[14]/(Pt[10]+1),kt=(Pt[9]+1)/Pt[5],C=(Pt[9]-1)/Pt[5],Ie=(Pt[8]-1)/Pt[0],Nt=(Tt[8]+1)/Tt[0],zt=Bt*Ie,At=Bt*Nt,te=ht/(-Ie+Nt),Ct=te*-Ie;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ct),X.translateZ(te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const A=Bt+te,y=Kt+te,F=zt-Ct,Y=At+(ht-Ct),Q=kt*Kt/y*A,q=C*Kt/y*A;X.projectionMatrix.makePerspective(F,Y,Q,q,A,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,_t=X.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=D.near=w.near=tt,v.far=D.far=w.far=_t,(T!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,G=v.far);const ht=X.parent,Pt=v.cameras;st(v,ht);for(let Tt=0;Tt<Pt.length;Tt++)st(Pt[Tt],ht);Pt.length===2?V(v,w,D):v.projectionMatrix.copy(w.projectionMatrix),it(X,v,ht)};function it(X,tt,_t){_t===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let mt=null;function Ot(X,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ht=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Tt=0;Tt<_t.length;Tt++){const Bt=_t[Tt];let Kt=null;if(m!==null)Kt=m.getViewport(Bt);else{const C=h.getViewSubImage(d,Bt);Kt=C.viewport,Tt===0&&(t.setRenderTargetTextures(E,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(E))}let kt=J[Tt];kt===void 0&&(kt=new We,kt.layers.enable(Tt),kt.viewport=new ae,J[Tt]=kt),kt.matrix.fromArray(Bt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Bt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Tt===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(kt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Tt=h.getDepthInformation(_t[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let _t=0;_t<x.length;_t++){const ht=M[_t],Pt=x[_t];ht!==null&&Pt!==void 0&&Pt.update(ht,tt,c||o)}mt&&mt(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new hd;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(X){mt=X},this.dispose=function(){}}}const ei=new Rn,_x=new ce;function vx(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ad(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),x=E.envMap,M=E.envMapRotation;x&&(p.envMap.value=x,ei.copy(M),ei.x*=-1,ei.y*=-1,ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),p.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(ei)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const M=x.program;i.uniformBlockBinding(E,M)}function c(E,x){let M=s[E.id];M===void 0&&(g(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",p));const P=x.program;i.updateUBOMapping(E,P);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const x=h();E.__bindingPointIndex=x;const M=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=s[E.id],M=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,w=M.length;R<w;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let J=0,v=D.length;J<v;J++){const T=D[J];if(m(T,R,J,P)===!0){const G=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let j=0;j<N.length;j++){const B=N[j],$=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,G+H,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,M,P){const R=E.value,w=x+"_"+M;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const D=P[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(E){const x=E.uniforms;let M=0;const P=16;for(let w=0,D=x.length;w<D;w++){const J=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,T=J.length;v<T;v++){const G=J[v],N=Array.isArray(G.value)?G.value:[G.value];for(let H=0,j=N.length;H<j;H++){const B=N[H],$=_(B),V=M%P,st=V%$.boundary,it=V+st;M+=st,it!==0&&P-it<$.storage&&(M+=P-it),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=$.storage}}}const R=M%P;return R>0&&(M+=P-R),E.__size=M,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class yx{constructor(t={}){const{canvas:e=om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let M=!1,P=0,R=0,w=null,D=-1,J=null;const v=new ae,T=new ae;let G=null;const N=new qt(0);let H=0,j=e.width,B=e.height,$=1,V=null,st=null;const it=new ae(0,0,j,B),mt=new ae(0,0,j,B);let Ot=!1;const Yt=new ud;let X=!1,tt=!1;const _t=new ce,ht=new ce,Pt=new z,Tt=new ae,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function kt(){return w===null?$:1}let C=i;function Ie(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const I="webgl2";if(C=Ie(I,S),C===null)throw Ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Nt,zt,At,te,Ct,A,y,F,Y,Q,q,xt,ot,dt,Ht,et,ft,wt,Rt,pt,Ft,Lt,Qt,L;function ct(){Nt=new bv(C),Nt.init(),Lt=new ux(C,Nt),zt=new vv(C,Nt,t,Lt),At=new ax(C),zt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),te=new Rv(C),Ct=new X0,A=new cx(C,Nt,At,Ct,zt,Lt,te),y=new yv(x),F=new Tv(x),Y=new Um(C),Qt=new gv(C,Y),Q=new Av(C,Y,te,Qt),q=new Pv(C,Q,Y,te),Rt=new Cv(C,zt,A),et=new xv(Ct),xt=new j0(x,y,F,Nt,zt,Qt,et),ot=new vx(x,Ct),dt=new Y0,Ht=new tx(Nt),wt=new mv(x,y,F,At,q,d,l),ft=new rx(x,q,zt),L=new xx(C,te,zt,At),pt=new _v(C,Nt,te),Ft=new wv(C,Nt,te),te.programs=xt.programs,x.capabilities=zt,x.extensions=Nt,x.properties=Ct,x.renderLists=dt,x.shadowMap=ft,x.state=At,x.info=te}ct();const W=new gx(x,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(j,B,!1))},this.getSize=function(S){return S.set(j,B)},this.setSize=function(S,I,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,B=I,e.width=Math.floor(S*$),e.height=Math.floor(I*$),O===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(j*$,B*$).floor()},this.setDrawingBufferSize=function(S,I,O){j=S,B=I,$=O,e.width=Math.floor(S*O),e.height=Math.floor(I*O),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(it)},this.setViewport=function(S,I,O,k){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,I,O,k),At.viewport(v.copy(it).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(mt)},this.setScissor=function(S,I,O,k){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,I,O,k),At.scissor(T.copy(mt).multiplyScalar($).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(S){At.setScissorTest(Ot=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(S=!0,I=!0,O=!0){let k=0;if(S){let U=!1;if(w!==null){const nt=w.texture.format;U=nt===gl||nt===ml||nt===pl}if(U){const nt=w.texture.type,lt=nt===wn||nt===mi||nt===xs||nt===Xi||nt===dl||nt===fl,gt=wt.getClearColor(),vt=wt.getClearAlpha(),Et=gt.r,bt=gt.g,yt=gt.b;lt?(m[0]=Et,m[1]=bt,m[2]=yt,m[3]=vt,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Et,g[1]=bt,g[2]=yt,g[3]=vt,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}I&&(k|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),dt.dispose(),Ht.dispose(),Ct.dispose(),y.dispose(),F.dispose(),q.dispose(),Qt.dispose(),L.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",rc),W.removeEventListener("sessionend",oc),$n.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=te.autoReset,I=ft.enabled,O=ft.autoUpdate,k=ft.needsUpdate,U=ft.type;ct(),te.autoReset=S,ft.enabled=I,ft.autoUpdate=O,ft.needsUpdate=k,ft.type=U}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Vt(S){const I=S.target;I.removeEventListener("dispose",Vt),ue(I)}function ue(S){be(S),Ct.remove(S)}function be(S){const I=Ct.get(S).programs;I!==void 0&&(I.forEach(function(O){xt.releaseProgram(O)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,O,k,U,nt){I===null&&(I=Bt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=cp(S,I,O,k,U);At.setMaterial(k,lt);let vt=O.index,Et=1;if(k.wireframe===!0){if(vt=Q.getWireframeAttribute(O),vt===void 0)return;Et=2}const bt=O.drawRange,yt=O.attributes.position;let $t=bt.start*Et,ee=(bt.start+bt.count)*Et;nt!==null&&($t=Math.max($t,nt.start*Et),ee=Math.min(ee,(nt.start+nt.count)*Et)),vt!==null?($t=Math.max($t,0),ee=Math.min(ee,vt.count)):yt!=null&&($t=Math.max($t,0),ee=Math.min(ee,yt.count));const se=ee-$t;if(se<0||se===1/0)return;Qt.setup(U,k,gt,O,vt);let Ue,Wt=pt;if(vt!==null&&(Ue=Y.get(vt),Wt=Ft,Wt.setIndex(Ue)),U.isMesh)k.wireframe===!0?(At.setLineWidth(k.wireframeLinewidth*kt()),Wt.setMode(C.LINES)):Wt.setMode(C.TRIANGLES);else if(U.isLine){let St=k.linewidth;St===void 0&&(St=1),At.setLineWidth(St*kt()),U.isLineSegments?Wt.setMode(C.LINES):U.isLineLoop?Wt.setMode(C.LINE_LOOP):Wt.setMode(C.LINE_STRIP)}else U.isPoints?Wt.setMode(C.POINTS):U.isSprite&&Wt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Wt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,ge=U._multiDrawCounts,jt=U._multiDrawCount,Ye=vt?Y.get(vt).bytesPerElement:1,vi=Ct.get(k).currentProgram.getUniforms();for(let Ne=0;Ne<jt;Ne++)vi.setValue(C,"_gl_DrawID",Ne),Wt.render(St[Ne]/Ye,ge[Ne])}else if(U.isInstancedMesh)Wt.renderInstances($t,se,U.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ge=Math.min(O.instanceCount,St);Wt.renderInstances($t,se,ge)}else Wt.render($t,se)};function Gt(S,I,O){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Pe,S.needsUpdate=!0,Us(S,I,O),S.side=Hn,S.needsUpdate=!0,Us(S,I,O),S.side=_n):Us(S,I,O)}this.compile=function(S,I,O=null){O===null&&(O=S),p=Ht.get(O),p.init(I),E.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const gt=nt[lt];Gt(gt,O,U),k.add(gt)}else Gt(nt,O,U),k.add(nt)}),E.pop(),p=null,k},this.compileAsync=function(S,I,O=null){const k=this.compile(S,I,O);return new Promise(U=>{function nt(){if(k.forEach(function(lt){Ct.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(S);return}setTimeout(nt,10)}Nt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ae=null;function un(S){Ae&&Ae(S)}function rc(){$n.stop()}function oc(){$n.start()}const $n=new hd;$n.setAnimationLoop(un),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){Ae=S,W.setAnimationLoop(S),S===null?$n.stop():$n.start()},W.addEventListener("sessionstart",rc),W.addEventListener("sessionend",oc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,w),p=Ht.get(S,E.length),p.init(I),E.push(p),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,X=et.init(this.clippingPlanes,tt),_=dt.get(S,f.length),_.init(),f.push(_),W.enabled===!0&&W.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&to(nt,I,-1/0,x.sortObjects)}to(S,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,st),Kt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Kt&&wt.addToRenderList(_,S),this.info.render.frame++,X===!0&&et.beginShadows();const O=p.state.shadowsArray;ft.render(O,S,I),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,U=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let lt=0,gt=nt.length;lt<gt;lt++){const vt=nt[lt];lc(k,U,S,vt)}Kt&&wt.render(S);for(let lt=0,gt=nt.length;lt<gt;lt++){const vt=nt[lt];ac(_,S,vt,vt.viewport)}}else U.length>0&&lc(k,U,S,I),Kt&&wt.render(S),ac(_,S,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,I),Qt.resetDefaultState(),D=-1,J=null,E.pop(),E.length>0?(p=E[E.length-1],X===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function to(S,I,O,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Yt.intersectsSprite(S)){k&&Tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);const lt=q.update(S),gt=S.material;gt.visible&&_.push(S,lt,gt,O,Tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Yt.intersectsObject(S))){const lt=q.update(S),gt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Tt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Tt.copy(lt.boundingSphere.center)),Tt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(gt)){const vt=lt.groups;for(let Et=0,bt=vt.length;Et<bt;Et++){const yt=vt[Et],$t=gt[yt.materialIndex];$t&&$t.visible&&_.push(S,lt,$t,O,Tt.z,yt)}}else gt.visible&&_.push(S,lt,gt,O,Tt.z,null)}}const nt=S.children;for(let lt=0,gt=nt.length;lt<gt;lt++)to(nt[lt],I,O,k)}function ac(S,I,O,k){const U=S.opaque,nt=S.transmissive,lt=S.transparent;p.setupLightsView(O),X===!0&&et.setGlobalState(x.clippingPlanes,O),k&&At.viewport(v.copy(k)),U.length>0&&Is(U,I,O),nt.length>0&&Is(nt,I,O),lt.length>0&&Is(lt,I,O),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function lc(S,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new gi(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Ts:wn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[k.id],lt=k.viewport||v;nt.setSize(lt.z,lt.w);const gt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(N),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&wt.render(O);const vt=x.toneMapping;x.toneMapping=zn;const Et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),X===!0&&et.setGlobalState(x.clippingPlanes,k),Is(S,O,k),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let yt=0,$t=I.length;yt<$t;yt++){const ee=I[yt],se=ee.object,Ue=ee.geometry,Wt=ee.material,St=ee.group;if(Wt.side===_n&&se.layers.test(k.layers)){const ge=Wt.side;Wt.side=Pe,Wt.needsUpdate=!0,cc(se,O,k,Ue,Wt,St),Wt.side=ge,Wt.needsUpdate=!0,bt=!0}}bt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}x.setRenderTarget(gt),x.setClearColor(N,H),Et!==void 0&&(k.viewport=Et),x.toneMapping=vt}function Is(S,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=S.length;U<nt;U++){const lt=S[U],gt=lt.object,vt=lt.geometry,Et=k===null?lt.material:k,bt=lt.group;gt.layers.test(O.layers)&&cc(gt,I,O,vt,Et,bt)}}function cc(S,I,O,k,U,nt){S.onBeforeRender(x,I,O,k,U,nt),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,I,O,k,S,nt),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,x.renderBufferDirect(O,I,k,U,S,nt),U.side=Hn,U.needsUpdate=!0,x.renderBufferDirect(O,I,k,U,S,nt),U.side=_n):x.renderBufferDirect(O,I,k,U,S,nt),S.onAfterRender(x,I,O,k,U,nt)}function Us(S,I,O){I.isScene!==!0&&(I=Bt);const k=Ct.get(S),U=p.state.lights,nt=p.state.shadowsArray,lt=U.state.version,gt=xt.getParameters(S,U.state,nt,I,O),vt=xt.getProgramCacheKey(gt);let Et=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?F:y).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",Vt),Et=new Map,k.programs=Et);let bt=Et.get(vt);if(bt!==void 0){if(k.currentProgram===bt&&k.lightsStateVersion===lt)return hc(S,gt),bt}else gt.uniforms=xt.getUniforms(S),S.onBeforeCompile(gt,x),bt=xt.acquireProgram(gt,vt),Et.set(vt,bt),k.uniforms=gt.uniforms;const yt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=et.uniform),hc(S,gt),k.needsLights=hp(S),k.lightsStateVersion=lt,k.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=bt,k.uniformsList=null,bt}function uc(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Sr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function hc(S,I){const O=Ct.get(S);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function cp(S,I,O,k,U){I.isScene!==!0&&(I=Bt),A.resetTextureUnits();const nt=I.fog,lt=k.isMeshStandardMaterial?I.environment:null,gt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,vt=(k.isMeshStandardMaterial?F:y).get(k.envMap||lt),Et=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,bt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!O.morphAttributes.position,$t=!!O.morphAttributes.normal,ee=!!O.morphAttributes.color;let se=zn;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(se=x.toneMapping);const Ue=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Wt=Ue!==void 0?Ue.length:0,St=Ct.get(k),ge=p.state.lights;if(X===!0&&(tt===!0||S!==J)){const ke=S===J&&k.id===D;et.setState(k,S,ke)}let jt=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ge.state.version||St.outputColorSpace!==gt||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==vt||k.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==bt||St.morphTargets!==yt||St.morphNormals!==$t||St.morphColors!==ee||St.toneMapping!==se||St.morphTargetsCount!==Wt)&&(jt=!0):(jt=!0,St.__version=k.version);let Ye=St.currentProgram;jt===!0&&(Ye=Us(k,I,U));let vi=!1,Ne=!1,eo=!1;const re=Ye.getUniforms(),Ln=St.uniforms;if(At.useProgram(Ye.program)&&(vi=!0,Ne=!0,eo=!0),k.id!==D&&(D=k.id,Ne=!0),vi||J!==S){zt.reverseDepthBuffer?(_t.copy(S.projectionMatrix),lm(_t),cm(_t),re.setValue(C,"projectionMatrix",_t)):re.setValue(C,"projectionMatrix",S.projectionMatrix),re.setValue(C,"viewMatrix",S.matrixWorldInverse);const ke=re.map.cameraPosition;ke!==void 0&&ke.setValue(C,Pt.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&re.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Ne=!0,eo=!0)}if(U.isSkinnedMesh){re.setOptional(C,U,"bindMatrix"),re.setOptional(C,U,"bindMatrixInverse");const ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),re.setValue(C,"boneTexture",ke.boneTexture,A))}U.isBatchedMesh&&(re.setOptional(C,U,"batchingTexture"),re.setValue(C,"batchingTexture",U._matricesTexture,A),re.setOptional(C,U,"batchingIdTexture"),re.setValue(C,"batchingIdTexture",U._indirectTexture,A),re.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(C,"batchingColorTexture",U._colorsTexture,A));const no=O.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&Rt.update(U,O,Ye),(Ne||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,re.setValue(C,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ln.envMap.value=vt,Ln.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Ln.envMapIntensity.value=I.environmentIntensity),Ne&&(re.setValue(C,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&up(Ln,eo),nt&&k.fog===!0&&ot.refreshFogUniforms(Ln,nt),ot.refreshMaterialUniforms(Ln,k,$,B,p.state.transmissionRenderTarget[S.id]),Sr.upload(C,uc(St),Ln,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sr.upload(C,uc(St),Ln,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&re.setValue(C,"center",U.center),re.setValue(C,"modelViewMatrix",U.modelViewMatrix),re.setValue(C,"normalMatrix",U.normalMatrix),re.setValue(C,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ke=k.uniformsGroups;for(let io=0,dp=ke.length;io<dp;io++){const dc=ke[io];L.update(dc,Ye),L.bind(dc,Ye)}}return Ye}function up(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function hp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,I,O){Ct.get(S.texture).__webglTexture=I,Ct.get(S.depthTexture).__webglTexture=O;const k=Ct.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const O=Ct.get(S);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,O=0){w=S,P=I,R=O;let k=!0,U=null,nt=!1,lt=!1;if(S){const vt=Ct.get(S);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(vt.__hasExternalTextures)A.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const yt=S.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&Ct.has(yt)&&(S.width!==yt.image.width||S.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(lt=!0);const bt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?U=bt[I][O]:U=bt[I],nt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?U=Ct.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?U=bt[O]:U=bt,v.copy(S.viewport),T.copy(S.scissor),G=S.scissorTest}else v.copy(it).multiplyScalar($).floor(),T.copy(mt).multiplyScalar($).floor(),G=Ot;if(At.bindFramebuffer(C.FRAMEBUFFER,U)&&k&&At.drawBuffers(S,U),At.viewport(v),At.scissor(T),At.setScissorTest(G),nt){const vt=Ct.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,vt.__webglTexture,O)}else if(lt){const vt=Ct.get(S.texture),Et=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,O||0,Et)}D=-1},this.readRenderTargetPixels=function(S,I,O,k,U,nt,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){At.bindFramebuffer(C.FRAMEBUFFER,gt);try{const vt=S.texture,Et=vt.format,bt=vt.type;if(!zt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&O>=0&&O<=S.height-U&&C.readPixels(I,O,k,U,Lt.convert(Et),Lt.convert(bt),nt)}finally{const vt=w!==null?Ct.get(w).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,I,O,k,U,nt,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const vt=S.texture,Et=vt.format,bt=vt.type;if(!zt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-k&&O>=0&&O<=S.height-U){At.bindFramebuffer(C.FRAMEBUFFER,gt);const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(I,O,k,U,Lt.convert(Et),Lt.convert(bt),0);const $t=w!==null?Ct.get(w).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,$t);const ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await am(C,ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(yt),C.deleteSync(ee),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,O=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-O),U=Math.floor(S.image.width*k),nt=Math.floor(S.image.height*k),lt=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,lt,gt,U,nt),At.unbindTexture()},this.copyTextureToTexture=function(S,I,O=null,k=null,U=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let nt,lt,gt,vt,Et,bt;O!==null?(nt=O.max.x-O.min.x,lt=O.max.y-O.min.y,gt=O.min.x,vt=O.min.y):(nt=S.image.width,lt=S.image.height,gt=0,vt=0),k!==null?(Et=k.x,bt=k.y):(Et=0,bt=0);const yt=Lt.convert(I.format),$t=Lt.convert(I.type);A.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const ee=C.getParameter(C.UNPACK_ROW_LENGTH),se=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ue=C.getParameter(C.UNPACK_SKIP_PIXELS),Wt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),ge=S.isCompressedTexture?S.mipmaps[U]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Et,bt,nt,lt,yt,$t,ge.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Et,bt,ge.width,ge.height,yt,ge.data):C.texSubImage2D(C.TEXTURE_2D,U,Et,bt,nt,lt,yt,$t,ge),C.pixelStorei(C.UNPACK_ROW_LENGTH,ee),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),U===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(S,I,O=null,k=null,U=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,lt,gt,vt,Et,bt,yt,$t,ee;const se=S.isCompressedTexture?S.mipmaps[U]:S.image;O!==null?(nt=O.max.x-O.min.x,lt=O.max.y-O.min.y,gt=O.max.z-O.min.z,vt=O.min.x,Et=O.min.y,bt=O.min.z):(nt=se.width,lt=se.height,gt=se.depth,vt=0,Et=0,bt=0),k!==null?(yt=k.x,$t=k.y,ee=k.z):(yt=0,$t=0,ee=0);const Ue=Lt.convert(I.format),Wt=Lt.convert(I.type);let St;if(I.isData3DTexture)A.setTexture3D(I,0),St=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const ge=C.getParameter(C.UNPACK_ROW_LENGTH),jt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ye=C.getParameter(C.UNPACK_SKIP_PIXELS),vi=C.getParameter(C.UNPACK_SKIP_ROWS),Ne=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bt),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(St,U,yt,$t,ee,nt,lt,gt,Ue,Wt,se.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(St,U,yt,$t,ee,nt,lt,gt,Ue,se.data):C.texSubImage3D(St,U,yt,$t,ee,nt,lt,gt,Ue,Wt,se),C.pixelStorei(C.UNPACK_ROW_LENGTH,ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,vi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne),U===0&&I.generateMipmaps&&C.generateMipmap(St),At.unbindTexture()},this.initRenderTarget=function(S){Ct.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,At.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_l?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Hr?"display-p3":"srgb"}}class Sx extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mx extends Rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ou=new ce,Ga=new ed,nr=new Gr,ir=new z;class au extends De{constructor(t=new Pn,e=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;ou.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);ir.fromBufferAttribute(h,p),lu(ir,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,_=m;g<_;g++)ir.fromBufferAttribute(h,g),lu(ir,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lu(n,t,e,i,s,r,o){const a=Ga.distanceSqToPoint(n);if(a<e){const l=new z;Ga.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);const Re=n=>new qt(n),sr={idle:{rot:.1,breathAmp:.02,breathFreq:.8,wobble:.01,bright:1,inward:0,pulse:0,color:Re("#7EC8FF"),glow:Re("#2596FF"),spread:1},thinking:{rot:.45,breathAmp:.03,breathFreq:2.2,wobble:.03,bright:1.25,inward:0,pulse:0,color:Re("#9AD6FF"),glow:Re("#2596FF"),spread:1},speaking:{rot:.18,breathAmp:.04,breathFreq:3,wobble:.02,bright:1.15,inward:0,pulse:0,color:Re("#7EC8FF"),glow:Re("#2596FF"),spread:1},learning:{rot:.22,breathAmp:.025,breathFreq:1.4,wobble:.015,bright:1.1,inward:.16,pulse:0,color:Re("#A6EBFF"),glow:Re("#2FB6FF"),spread:1},sleeping:{rot:.03,breathAmp:.015,breathFreq:.35,wobble:.004,bright:.32,inward:0,pulse:0,color:Re("#5F8FB8"),glow:Re("#1B4F86"),spread:.92},error:{rot:.06,breathAmp:.025,breathFreq:.6,wobble:.012,bright:.75,inward:0,pulse:0,color:Re("#E7A3AB"),glow:Re("#B8535F"),spread:1.02},alert:{rot:.12,breathAmp:.03,breathFreq:1.3,wobble:.015,bright:1.2,inward:0,pulse:1,color:Re("#F2B35E"),glow:Re("#C9822B"),spread:1.03}},Ex=`
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
  }`,Tx=`
  uniform vec3 uColor, uGlow; uniform float uBright, uBase;
  varying float vDepth, vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float soft = smoothstep(1.0, 0.0, d);
    soft *= soft;
    vec3 col = mix(uColor, uGlow, vDepth * 0.85);
    float a = clamp(soft * (1.0 - 0.6 * vDepth) * vTwinkle * uBright * uBase * 1.9, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
  }`;function cu(n,t,e){const i=new Float32Array(n*3),s=new Float32Array(n),r=Math.PI*(3-Math.sqrt(5));for(let a=0;a<n;a++){const l=1-a/(n-1)*2,c=Math.sqrt(1-l*l),u=r*a,h=t*(1+(Math.random()-.5)*e);i.set([Math.cos(u)*c*h,l*h,Math.sin(u)*c*h],a*3),s[a]=Math.random()}const o=new Pn;return o.setAttribute("position",new qe(i,3)),o.setAttribute("aSeed",new qe(s,1)),o}class bx{constructor(t,e=!1){ve(this,"renderer");ve(this,"scene",new Sx);ve(this,"camera",new We(40,1,.1,20));ve(this,"group",new ds);ve(this,"mats",[]);ve(this,"target","idle");ve(this,"cur",{...sr.idle,color:sr.idle.color.clone(),glow:sr.idle.glow.clone()});ve(this,"amp",0);ve(this,"ampTarget",0);ve(this,"raf",0);ve(this,"last",0);ve(this,"t",0);ve(this,"reduced",!1);ve(this,"running",!1);ve(this,"frame",t=>{if(!this.running)return;const e=Math.min(.05,(t-(this.last||t))/1e3);this.last=t,this.t+=e,this.ease(e);const i=this.cur,s=this.reduced?.15:1;this.group.rotation.y+=e*i.rot*s,this.group.rotation.x=Math.sin(this.t*.25)*.12*s,this.group.scale.setScalar(i.spread);for(const r of this.mats){const o=r.uniforms;o.uTime.value=this.t*s,o.uBreathAmp.value=i.breathAmp,o.uBreathFreq.value=i.breathFreq,o.uWobble.value=i.wobble,o.uInward.value=i.inward,o.uPulse.value=i.pulse,o.uBright.value=i.bright,o.uAmp.value=this.amp}this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.frame)});var r;this.canvas=t,this.renderer=new yx({canvas:t,alpha:!0,antialias:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:1.75)),this.renderer.setClearColor(0,0),this.camera.position.z=4.1,this.reduced=((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;const[i,s]=e?[1400,500]:[2800,1100];for(const[o,a,l]of[[cu(i,1,.04),2.1,1],[cu(s,1.38,.18),1.5,.45]]){const c=new Cn({vertexShader:Ex,fragmentShader:Tx,transparent:!0,depthWrite:!1,blending:ea,uniforms:{uTime:{value:0},uBreathAmp:{value:.02},uBreathFreq:{value:.8},uWobble:{value:.01},uInward:{value:0},uPulse:{value:0},uSize:{value:a},uAmp:{value:0},uPixel:{value:this.renderer.getPixelRatio()},uColor:{value:this.cur.color},uGlow:{value:this.cur.glow},uBright:{value:1},uBase:{value:l},uScale:{value:1}}});this.mats.push(c),this.group.add(new au(o,c))}this.scene.add(this.group)}setState(t){this.target=t}setAmplitude(t){this.ampTarget=Math.max(0,Math.min(1,t))}resize(t,e){const i=Math.max(1,Math.floor(Math.min(t,e)));this.renderer.setSize(i,i,!1),this.canvas.style.width=`${i}px`,this.canvas.style.height=`${i}px`,this.camera.aspect=1,this.camera.updateProjectionMatrix();for(const s of this.mats)s.uniforms.uScale.value=i/150}ease(t){const e=sr[this.target],i=1-Math.exp(-t*3.2),s=this.cur;s.rot+=(e.rot-s.rot)*i,s.breathAmp+=(e.breathAmp-s.breathAmp)*i,s.breathFreq+=(e.breathFreq-s.breathFreq)*i,s.wobble+=(e.wobble-s.wobble)*i,s.bright+=(e.bright-s.bright)*i,s.inward+=(e.inward-s.inward)*i,s.pulse+=(e.pulse-s.pulse)*i,s.spread+=(e.spread-s.spread)*i,s.color.lerp(e.color,i),s.glow.lerp(e.glow,i),this.amp+=(this.ampTarget-this.amp)*(1-Math.exp(-t*12))}start(){this.running||(this.running=!0,this.last=0,this.raf=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),this.group.traverse(t=>{t instanceof au&&t.geometry.dispose()}),this.mats.forEach(t=>t.dispose()),this.renderer.dispose()}}const Fo=440,uu=340;function Ax({state:n,amplitude:t=0,spot:e,low:i}){const s=K.useRef(null),r=K.useRef(null);K.useEffect(()=>{const a=s.current;if(!a)return;let l;try{l=new bx(a,i||(navigator.hardwareConcurrency??4)<=4)}catch{return}r.current=l,l.resize(uu,uu),l.setState(n),l.start();const c=()=>document.hidden?l.stop():l.start();return document.addEventListener("visibilitychange",c),()=>{document.removeEventListener("visibilitychange",c),l.dispose(),r.current=null}},[i]),K.useEffect(()=>{var a;(a=r.current)==null||a.setState(n)},[n]),K.useEffect(()=>{var a;(a=r.current)==null||a.setAmplitude(t)},[t]);const o=e.size/Fo;return b.jsxs("div",{className:`sphere sphere-${n}`,"aria-hidden":"true",style:{transform:`translate(${e.cx-e.size/2}px, ${e.cy-e.size/2}px) scale(${o})`},children:[b.jsxs("svg",{className:"rings",viewBox:"0 0 440 440",width:Fo,height:Fo,children:[b.jsx("circle",{className:"r-glow",cx:"220",cy:"220",r:"214"}),b.jsx("circle",{className:"r-ticks",cx:"220",cy:"220",r:"206"}),b.jsx("circle",{className:"r-arcs",cx:"220",cy:"220",r:"192"}),b.jsx("circle",{className:"r-thin",cx:"220",cy:"220",r:"176"}),b.jsx("circle",{className:"r-arcs2",cx:"220",cy:"220",r:"184"}),[0,90,180,270].map(a=>b.jsx("line",{className:"r-cross",x1:"220",y1:"2",x2:"220",y2:"16",transform:`rotate(${a} 220 220)`},a))]}),b.jsx("div",{className:"sphere-fallback"}),b.jsx("canvas",{ref:s})]})}const _d={idle:"Here",thinking:"Thinking",speaking:"Speaking",learning:"Learning",sleeping:"Resting",error:"Something went wrong",alert:"Concerned · watching"},hu=n=>n>=1e3?`${(n/1e3).toFixed(1)} Mb/s`:`${Math.round(n)} kb/s`,du=n=>b.jsx("i",{className:"bar",children:b.jsx("b",{style:{width:`${Math.min(100,Math.max(2,n))}%`}})});function wx({tel:n}){return n?b.jsxs("div",{className:"readouts","aria-label":"System readouts",children:[b.jsxs("span",{className:"ro",children:[b.jsx("em",{children:"CPU"}),Math.round(n.cpu),"%",du(n.cpu)]}),b.jsxs("span",{className:"ro",children:[b.jsx("em",{children:"MEM"}),Math.round(n.mem),"%",du(n.mem)]}),b.jsxs("span",{className:"ro",children:[b.jsx("em",{children:"NET"}),"↓ ",hu(n.down)," ↑ ",hu(n.up)]}),b.jsxs("span",{className:"ro",children:[b.jsx("em",{children:"PROGRAMS"}),n.procs]}),n.battery?b.jsxs("span",{className:"ro",children:[b.jsx("em",{children:"POWER"}),n.battery.pct,"%",n.battery.plugged?" ⚡":""]}):null,n.app?b.jsxs("span",{className:"ro app",children:[b.jsx("em",{children:"FOCUS"}),n.app]}):null]}):null}const vd="vanta.layout",Rx=8e3,Cx=()=>{try{const n=localStorage.getItem(vd);return n==="calm"||n==="hud"?n:"auto"}catch{return"auto"}},Px=n=>{try{localStorage.setItem(vd,n)}catch{}};function Lx(n,t,e,i){if(n==="hud")return{hud:!0,until:e};if(n==="calm")return{hud:!1,until:0};const s=t?i+Rx:e;return{hud:t||i<s,until:s}}function Dx(n,t){const[e,i]=K.useState(0),[,s]=K.useState(0),r=Lx(n,t,e,Date.now());return K.useEffect(()=>{r.until!==e&&i(r.until)},[r.until,e]),K.useEffect(()=>{if(n!=="auto"||t||!r.hud)return;const o=window.setTimeout(()=>s(a=>a+1),Math.max(50,e-Date.now()+20));return()=>window.clearTimeout(o)},[n,t,r.hud,e]),r.hud}const xd="vanta.fx",Ix=()=>{try{return localStorage.getItem(xd)==="low"?"low":"full"}catch{return"full"}},Ux=n=>{try{localStorage.setItem(xd,n)}catch{}};function Nx(){const[n,t]=K.useState(Ix),[e,i]=K.useState(!1);return K.useEffect(()=>{document.documentElement.dataset.fx=n},[n]),K.useEffect(()=>{if(n==="low")return;let r=0,o=0,a=0,l=0,c=0,u=performance.now();const h=d=>{if(!document.hidden&&o){const m=d-o;if(m<250&&(l+=m,a++),d-u>3e3&&a>20&&(c=l/a>34?c+1:0,a=0,l=0,u=d,c>=2)){t("low"),i(!0);return}}o=d,r=requestAnimationFrame(h)};return r=requestAnimationFrame(h),()=>cancelAnimationFrame(r)},[n]),[n,r=>{Ux(r),i(!1),t(r)},e]}function Fx(n){const t=n.search(/```stage/i);return t===-1?n:n.slice(0,t).trimEnd()}function Ox({messages:n,onOpenStage:t}){const e=K.useRef(null);return K.useEffect(()=>{var i;(i=e.current)==null||i.scrollIntoView({behavior:"smooth",block:"end"})},[n]),b.jsxs("div",{className:"chat",role:"log","aria-live":"polite",children:[n.length===0?b.jsx("div",{className:"empty-chat",children:"Ask me anything. I can read, build, check my own work, and keep an eye on this computer for you."}):b.jsx("div",{className:"chat-spacer"}),n.map(i=>b.jsxs("div",{className:`bubble ${i.role==="user"?"user":""} ${i.tag==="error"?"error":""}`,children:[i.tag==="heads-up"?b.jsxs("div",{className:"tag",children:[b.jsx("i",{}),"HEADS-UP"]}):null,i.tag==="error"?b.jsxs("div",{className:"tag",children:[b.jsx("i",{}),"HICCUP"]}):null,Fx(i.text),i.streaming?b.jsx("span",{className:"caret"}):null,i.stageId?b.jsx("div",{children:b.jsxs("button",{className:"stage-link",onClick:()=>t(i.stageId),children:["Open on stage: ",i.stageLabel]})}):null]},i.id)),b.jsx("div",{ref:e})]})}function Bx({onSend:n,onVoiceError:t,disabled:e,autoFocus:i,onActivity:s}){const[r,o]=K.useState(""),[a,l]=K.useState(!1),c=K.useRef(null),u=()=>{r.trim()&&(n(r),o(""))};async function h(){var d;if(a){(d=c.current)==null||d.stop();return}try{const m=await navigator.mediaDevices.getUserMedia({audio:!0}),g=new MediaRecorder(m),_=[];g.ondataavailable=p=>_.push(p.data),g.onstop=async()=>{m.getTracks().forEach(f=>f.stop()),l(!1);const p=new FormData;p.append("audio",new Blob(_,{type:g.mimeType||"audio/webm"}),"voice.webm");try{const E=await(await fetch("/transcribe",{method:"POST",body:p})).json();if(E.text)o(x=>(x?x+" ":"")+E.text);else throw new Error(E.error||"no text")}catch(f){t(String(f))}},c.current=g,g.start(),l(!0)}catch{t("microphone permission denied")}}return b.jsxs("div",{className:"composer",children:[b.jsx("input",{"aria-label":"Message VANTA",placeholder:"Ask VANTA anything",value:r,disabled:e,autoFocus:i,onChange:d=>{o(d.target.value),s==null||s()},onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),u())}}),b.jsx("button",{className:`btn icon mic ${a?"rec":""}`,"aria-label":a?"Stop recording":"Voice","aria-pressed":a,onClick:h,children:b.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[b.jsx("rect",{x:"9",y:"3",width:"6",height:"12",rx:"3"}),b.jsx("path",{d:"M5 11a7 7 0 0 0 14 0M12 18v3"})]})}),b.jsx("button",{className:"btn icon send","aria-label":"Send",disabled:!r.trim(),onClick:u,children:b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#07111F",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:b.jsx("path",{d:"M4 12h16M14 6l6 6-6 6"})})})]})}function kx(n){if(typeof Proxy>"u")return n;const t=new Map,e=(...i)=>n(...i);return new Proxy(e,{get:(i,s)=>s==="create"?n:(t.has(s)||t.set(s,n(s)),t.get(s))})}function Xr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Wa=n=>Array.isArray(n);function yd(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}function ys(n){return typeof n=="string"||Array.isArray(n)}function fu(n){const t=[{},{}];return n==null||n.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function xl(n,t,e,i){if(typeof t=="function"){const[s,r]=fu(i);t=t(e!==void 0?e:n.custom,s,r)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,r]=fu(i);t=t(e!==void 0?e:n.custom,s,r)}return t}function qr(n,t,e){const i=n.getProps();return xl(i,t,e!==void 0?e:i.custom,n)}const yl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sl=["initial",...yl],Ps=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_i=new Set(Ps),En=n=>n*1e3,Tn=n=>n/1e3,Vx={type:"spring",stiffness:500,damping:25,restSpeed:10},zx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Hx={type:"keyframes",duration:.8},Gx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Wx=(n,{keyframes:t})=>t.length>2?Hx:_i.has(n)?n.startsWith("scale")?zx(t[1]):Vx:Gx;function Ml(n,t){return n?n[t]||n.default||n:void 0}const jx={useManualTiming:!1},Xx=n=>n!==null;function Yr(n,{repeat:t,repeatType:e="loop"},i){const s=n.filter(Xx),r=t&&e!=="loop"&&t%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const Ee=n=>n;function qx(n){let t=new Set,e=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const m=h&&i?t:e;return u&&r.add(c),m.has(c)||m.add(c),c},cancel:c=>{e.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[t,e]=[e,t],e.clear(),t.forEach(a),i=!1,s&&(s=!1,l.process(c))}};return l}const rr=["read","resolveKeyframes","update","preRender","render","postRender"],Yx=40;function Sd(n,t){let e=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>e=!0,o=rr.reduce((f,E)=>(f[E]=qx(r),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,m=()=>{const f=performance.now();e=!1,s.delta=i?1e3/60:Math.max(Math.min(f-s.timestamp,Yx),1),s.timestamp=f,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),h.process(s),d.process(s),s.isProcessing=!1,e&&t&&(i=!1,n(m))},g=()=>{e=!0,i=!0,s.isProcessing||n(m)};return{schedule:rr.reduce((f,E)=>{const x=o[E];return f[E]=(M,P=!1,R=!1)=>(e||g(),x.schedule(M,P,R)),f},{}),cancel:f=>{for(let E=0;E<rr.length;E++)o[rr[E]].cancel(f)},state:s,steps:o}}const{schedule:Zt,cancel:Gn,state:_e,steps:Oo}=Sd(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ee,!0),Md=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,$x=1e-7,Kx=12;function Zx(n,t,e,i,s){let r,o,a=0;do o=t+(e-t)/2,r=Md(o,i,s)-n,r>0?e=o:t=o;while(Math.abs(r)>$x&&++a<Kx);return o}function Ls(n,t,e,i){if(n===t&&e===i)return Ee;const s=r=>Zx(r,0,1,n,e);return r=>r===0||r===1?r:Md(s(r),t,i)}const Ed=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,Td=n=>t=>1-n(1-t),bd=Ls(.33,1.53,.69,.99),El=Td(bd),Ad=Ed(El),wd=n=>(n*=2)<1?.5*El(n):.5*(2-Math.pow(2,-10*(n-1))),Tl=n=>1-Math.sin(Math.acos(n)),Rd=Td(Tl),Cd=Ed(Tl),Pd=n=>/^0[^.\s]+$/u.test(n);function Jx(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Pd(n):!0}let Ld=Ee;const Dd=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Id=n=>t=>typeof t=="string"&&t.startsWith(n),Ud=Id("--"),Qx=Id("var(--"),bl=n=>Qx(n)?ty.test(n.split("/*")[0].trim()):!1,ty=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ey=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ny(n){const t=ey.exec(n);if(!t)return[,];const[,e,i,s]=t;return[`--${e??i}`,s]}function Nd(n,t,e=1){const[i,s]=ny(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const o=r.trim();return Dd(o)?parseFloat(o):o}return bl(s)?Nd(s,t,e+1):s}const Wn=(n,t,e)=>e>t?t:e<n?n:e,ts={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ss={...ts,transform:n=>Wn(0,1,n)},or={...ts,default:1},Ds=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Bn=Ds("deg"),on=Ds("%"),Mt=Ds("px"),iy=Ds("vh"),sy=Ds("vw"),pu={...on,parse:n=>on.parse(n)/100,transform:n=>on.transform(n*100)},ry=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),mu=n=>n===ts||n===Mt,gu=(n,t)=>parseFloat(n.split(", ")[t]),_u=(n,t)=>(e,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return gu(s[1],t);{const r=i.match(/^matrix\((.+)\)$/u);return r?gu(r[1],n):0}},oy=new Set(["x","y","z"]),ay=Ps.filter(n=>!oy.has(n));function ly(n){const t=[];return ay.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t}const $i={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:_u(4,13),y:_u(5,14)};$i.translateX=$i.x;$i.translateY=$i.y;const Fd=n=>t=>t.test(n),cy={test:n=>n==="auto",parse:n=>n},Od=[ts,Mt,on,Bn,sy,iy,cy],vu=n=>Od.find(Fd(n)),pi=new Set;let ja=!1,Xa=!1;function Bd(){if(Xa){const n=Array.from(pi).filter(i=>i.needsMeasurement),t=new Set(n.map(i=>i.element)),e=new Map;t.forEach(i=>{const s=ly(i);s.length&&(e.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=e.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Xa=!1,ja=!1,pi.forEach(n=>n.complete()),pi.clear()}function kd(){pi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Xa=!0)})}function uy(){kd(),Bd()}class Al{constructor(t,e,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(pi.add(this),ja||(ja=!0,Zt.read(kd),Zt.resolveKeyframes(Bd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:i,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&e){const l=i.readValue(e,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),pi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,pi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gs=n=>Math.round(n*1e5)/1e5,wl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hy(n){return n==null}const dy=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rl=(n,t)=>e=>!!(typeof e=="string"&&dy.test(e)&&e.startsWith(n)||t&&!hy(e)&&Object.prototype.hasOwnProperty.call(e,t)),Vd=(n,t,e)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(wl);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},fy=n=>Wn(0,255,n),Bo={...ts,transform:n=>Math.round(fy(n))},di={test:Rl("rgb","red"),parse:Vd("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+Bo.transform(n)+", "+Bo.transform(t)+", "+Bo.transform(e)+", "+gs(Ss.transform(i))+")"};function py(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const qa={test:Rl("#"),parse:py,transform:di.transform},Ni={test:Rl("hsl","hue"),parse:Vd("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+on.transform(gs(t))+", "+on.transform(gs(e))+", "+gs(Ss.transform(i))+")"},Se={test:n=>di.test(n)||qa.test(n)||Ni.test(n),parse:n=>di.test(n)?di.parse(n):Ni.test(n)?Ni.parse(n):qa.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?di.transform(n):Ni.transform(n)},my=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gy(n){var t,e;return isNaN(n)&&typeof n=="string"&&(((t=n.match(wl))===null||t===void 0?void 0:t.length)||0)+(((e=n.match(my))===null||e===void 0?void 0:e.length)||0)>0}const zd="number",Hd="color",_y="var",vy="var(",xu="${}",xy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ms(n){const t=n.toString(),e=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(xy,l=>(Se.test(l)?(i.color.push(r),s.push(Hd),e.push(Se.parse(l))):l.startsWith(vy)?(i.var.push(r),s.push(_y),e.push(l)):(i.number.push(r),s.push(zd),e.push(parseFloat(l))),++r,xu)).split(xu);return{values:e,split:a,indexes:i,types:s}}function Gd(n){return Ms(n).values}function Wd(n){const{split:t,types:e}=Ms(n),i=t.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],s[o]!==void 0){const a=e[o];a===zd?r+=gs(s[o]):a===Hd?r+=Se.transform(s[o]):r+=s[o]}return r}}const yy=n=>typeof n=="number"?0:n;function Sy(n){const t=Gd(n);return Wd(n)(t.map(yy))}const jn={test:gy,parse:Gd,createTransformer:Wd,getAnimatableNone:Sy},My=new Set(["brightness","contrast","saturate","opacity"]);function Ey(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(wl)||[];if(!i)return n;const s=e.replace(i,"");let r=My.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const Ty=/\b([a-z-]*)\(.*?\)/gu,Ya={...jn,getAnimatableNone:n=>{const t=n.match(Ty);return t?t.map(Ey).join(" "):n}},by={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,radius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt},Ay={rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scale:or,scaleX:or,scaleY:or,scaleZ:or,skew:Bn,skewX:Bn,skewY:Bn,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:Ss,originX:pu,originY:pu,originZ:Mt},yu={...ts,transform:Math.round},Cl={...by,...Ay,zIndex:yu,size:Mt,fillOpacity:Ss,strokeOpacity:Ss,numOctaves:yu},wy={...Cl,color:Se,backgroundColor:Se,outlineColor:Se,fill:Se,stroke:Se,borderColor:Se,borderTopColor:Se,borderRightColor:Se,borderBottomColor:Se,borderLeftColor:Se,filter:Ya,WebkitFilter:Ya},Pl=n=>wy[n];function jd(n,t){let e=Pl(n);return e!==Ya&&(e=jn),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const Ry=new Set(["auto","none","0"]);function Cy(n,t,e){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!Ry.has(r)&&Ms(r).values.length&&(s=n[i]),i++}if(s&&e)for(const r of t)n[r]=jd(e,s)}class Xd extends Al{constructor(t,e,i,s,r){super(t,e,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),bl(c))){const u=Nd(c,e.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!ry.has(i)||t.length!==2)return;const[s,r]=t,o=vu(s),a=vu(r);if(o!==a)if(mu(o)&&mu(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,i=[];for(let s=0;s<t.length;s++)Jx(t[s])&&i.push(s);i.length&&Cy(t,i,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$i[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var t;const{element:e,name:i,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const r=e.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=$i[i](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Ll(n){return typeof n=="function"}let Mr;function Py(){Mr=void 0}const an={now:()=>(Mr===void 0&&an.set(_e.isProcessing||jx.useManualTiming?_e.timestamp:performance.now()),Mr),set:n=>{Mr=n,queueMicrotask(Py)}},Su=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(jn.test(n)||n==="0")&&!n.startsWith("url("));function Ly(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function Dy(n,t,e,i){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=n[n.length-1],o=Su(s,t),a=Su(r,t);return!o||!a?!1:Ly(n)||(e==="spring"||Ll(e))&&i}const Iy=40;class qd{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=an.now(),this.options={autoplay:t,delay:e,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Iy?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&uy(),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=an.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Dy(t,i,s,r))if(o)this.options.duration=0;else{l==null||l(Yr(t,this.options,e)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,e);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Yd(n,t){return t?n*(1e3/t):0}const Uy=5;function $d(n,t,e){const i=Math.max(t-Uy,0);return Yd(e-n(i),t-i)}const ko=.001,Ny=.01,Fy=10,Oy=.05,By=1;function ky({duration:n=800,bounce:t=.25,velocity:e=0,mass:i=1}){let s,r,o=1-t;o=Wn(Oy,By,o),n=Wn(Ny,Fy,Tn(n)),o<1?(s=c=>{const u=c*o,h=u*n,d=u-e,m=$a(c,o),g=Math.exp(-h);return ko-d/m*g},r=c=>{const h=c*o*n,d=h*e+e,m=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-h),_=$a(Math.pow(c,2),o);return(-s(c)+ko>0?-1:1)*((d-m)*g)/_}):(s=c=>{const u=Math.exp(-c*n),h=(c-e)*n+1;return-ko+u*h},r=c=>{const u=Math.exp(-c*n),h=(e-c)*(n*n);return u*h});const a=5/n,l=zy(s,r,a);if(n=En(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const Vy=12;function zy(n,t,e){let i=e;for(let s=1;s<Vy;s++)i=i-n(i)/t(i);return i}function $a(n,t){return n*Math.sqrt(1-t*t)}const Hy=["duration","bounce"],Gy=["stiffness","damping","mass"];function Mu(n,t){return t.some(e=>n[e]!==void 0)}function Wy(n){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!Mu(n,Gy)&&Mu(n,Hy)){const e=ky(n);t={...t,...e,mass:1},t.isResolvedFromDuration=!0}return t}function Kd({keyframes:n,restDelta:t,restSpeed:e,...i}){const s=n[0],r=n[n.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=Wy({...i,velocity:-Tn(i.velocity||0)}),m=h||0,g=l/(2*Math.sqrt(a*c)),_=r-s,p=Tn(Math.sqrt(a/c)),f=Math.abs(_)<5;e||(e=f?.01:2),t||(t=f?.005:.5);let E;if(g<1){const x=$a(p,g);E=M=>{const P=Math.exp(-g*p*M);return r-P*((m+g*p*_)/x*Math.sin(x*M)+_*Math.cos(x*M))}}else if(g===1)E=x=>r-Math.exp(-p*x)*(_+(m+p*_)*x);else{const x=p*Math.sqrt(g*g-1);E=M=>{const P=Math.exp(-g*p*M),R=Math.min(x*M,300);return r-P*((m+g*p*_)*Math.sinh(R)+x*_*Math.cosh(R))/x}}return{calculatedDuration:d&&u||null,next:x=>{const M=E(x);if(d)o.done=x>=u;else{let P=0;g<1&&(P=x===0?En(m):$d(E,x,M));const R=Math.abs(P)<=e,w=Math.abs(r-M)<=t;o.done=R&&w}return o.value=o.done?r:M,o}}}function Eu({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],d={done:!1,value:h},m=D=>a!==void 0&&D<a||l!==void 0&&D>l,g=D=>a===void 0?l:l===void 0||Math.abs(a-D)<Math.abs(l-D)?a:l;let _=e*t;const p=h+_,f=o===void 0?p:o(p);f!==p&&(_=f-h);const E=D=>-_*Math.exp(-D/i),x=D=>f+E(D),M=D=>{const J=E(D),v=x(D);d.done=Math.abs(J)<=c,d.value=d.done?f:v};let P,R;const w=D=>{m(d.value)&&(P=D,R=Kd({keyframes:[d.value,g(d.value)],velocity:$d(x,D,d.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:D=>{let J=!1;return!R&&P===void 0&&(J=!0,M(D),w(D)),P!==void 0&&D>=P?R.next(D-P):(!J&&M(D),d)}}}const jy=Ls(.42,0,1,1),Xy=Ls(0,0,.58,1),Zd=Ls(.42,0,.58,1),qy=n=>Array.isArray(n)&&typeof n[0]!="number",Dl=n=>Array.isArray(n)&&typeof n[0]=="number",Yy={linear:Ee,easeIn:jy,easeInOut:Zd,easeOut:Xy,circIn:Tl,circInOut:Cd,circOut:Rd,backIn:El,backInOut:Ad,backOut:bd,anticipate:wd},Tu=n=>{if(Dl(n)){Ld(n.length===4);const[t,e,i,s]=n;return Ls(t,e,i,s)}else if(typeof n=="string")return Yy[n];return n},$y=(n,t)=>e=>t(n(e)),bn=(...n)=>n.reduce($y),Ki=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i},ie=(n,t,e)=>n+(t-n)*e;function Vo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function Ky({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,o=0;if(!t)s=r=o=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;s=Vo(l,a,n+1/3),r=Vo(l,a,n),o=Vo(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function Ur(n,t){return e=>e>0?t:n}const zo=(n,t,e)=>{const i=n*n,s=e*(t*t-i)+i;return s<0?0:Math.sqrt(s)},Zy=[qa,di,Ni],Jy=n=>Zy.find(t=>t.test(n));function bu(n){const t=Jy(n);if(!t)return!1;let e=t.parse(n);return t===Ni&&(e=Ky(e)),e}const Au=(n,t)=>{const e=bu(n),i=bu(t);if(!e||!i)return Ur(n,t);const s={...e};return r=>(s.red=zo(e.red,i.red,r),s.green=zo(e.green,i.green,r),s.blue=zo(e.blue,i.blue,r),s.alpha=ie(e.alpha,i.alpha,r),di.transform(s))},Ka=new Set(["none","hidden"]);function Qy(n,t){return Ka.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function tS(n,t){return e=>ie(n,t,e)}function Il(n){return typeof n=="number"?tS:typeof n=="string"?bl(n)?Ur:Se.test(n)?Au:iS:Array.isArray(n)?Jd:typeof n=="object"?Se.test(n)?Au:eS:Ur}function Jd(n,t){const e=[...n],i=e.length,s=n.map((r,o)=>Il(r)(r,t[o]));return r=>{for(let o=0;o<i;o++)e[o]=s[o](r);return e}}function eS(n,t){const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=Il(n[s])(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}}function nS(n,t){var e;const i=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=n.indexes[o][s[o]],l=(e=n.values[a])!==null&&e!==void 0?e:0;i[r]=l,s[o]++}return i}const iS=(n,t)=>{const e=jn.createTransformer(t),i=Ms(n),s=Ms(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Ka.has(n)&&!s.values.length||Ka.has(t)&&!i.values.length?Qy(n,t):bn(Jd(nS(i,s),s.values),e):Ur(n,t)};function Qd(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?ie(n,t,e):Il(n)(n,t)}function sS(n,t,e){const i=[],s=e||Qd,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ee:t;a=bn(l,a)}i.push(a)}return i}function rS(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(Ld(r===t.length),r===1)return()=>t[0];if(r===2&&n[0]===n[1])return()=>t[1];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const o=sS(t,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<n.length-2&&!(c<n[u+1]);u++);const h=Ki(n[u],n[u+1],c);return o[u](h)};return e?c=>l(Wn(n[0],n[r-1],c)):l}function oS(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=Ki(0,t,i);n.push(ie(e,1,s))}}function aS(n){const t=[0];return oS(t,n.length-1),t}function lS(n,t){return n.map(e=>e*t)}function cS(n,t){return n.map(()=>t||Zd).splice(0,n.length-1)}function Nr({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=qy(i)?i.map(Tu):Tu(i),r={done:!1,value:t[0]},o=lS(e&&e.length===t.length?e:aS(t),n),a=rS(o,t,{ease:Array.isArray(s)?s:cS(t,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}const wu=2e4;function uS(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<wu;)t+=e,i=n.next(t);return t>=wu?1/0:t}const hS=n=>{const t=({timestamp:e})=>n(e);return{start:()=>Zt.update(t,!0),stop:()=>Gn(t),now:()=>_e.isProcessing?_e.timestamp:an.now()}},dS={decay:Eu,inertia:Eu,tween:Nr,keyframes:Nr,spring:Kd},fS=n=>n/100;class Ul extends qd{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:e,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Al,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,e,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=Ll(e)?e:dS[e]||Nr;let l,c;a!==Nr&&typeof t[0]!="number"&&(l=bn(fS,Qd(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=uS(u));const{calculatedDuration:h}=u,d=h+s,m=d*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,e=!1){const{resolved:i}=this;if(!i){const{keyframes:D}=this.options;return{done:!0,value:D[D.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return r.next(0);const{delay:d,repeat:m,repeatType:g,repeatDelay:_,onUpdate:p}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),E=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let x=this.currentTime,M=r;if(m){const D=Math.min(this.currentTime,u)/h;let J=Math.floor(D),v=D%1;!v&&D>=1&&(v=1),v===1&&J--,J=Math.min(J,m+1),!!(J%2)&&(g==="reverse"?(v=1-v,_&&(v-=_/h)):g==="mirror"&&(M=o)),x=Wn(0,1,v)*h}const P=E?{done:!1,value:l[0]}:M.next(x);a&&(P.value=a(P.value));let{done:R}=P;!E&&c!==null&&(R=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return w&&s!==void 0&&(P.value=Yr(l,this.options,s)),p&&p(P.value),w&&this.finish(),P}get duration(){const{resolved:t}=this;return t?Tn(t.calculatedDuration):0}get time(){return Tn(this.currentTime)}set time(t){t=En(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=Tn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=hS,onPlay:e,startTime:i}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),e&&e();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const pS=new Set(["opacity","clipPath","filter","transform"]),mS=10,gS=(n,t)=>{let e="";const i=Math.max(Math.round(t/mS),2);for(let s=0;s<i;s++)e+=n(Ki(0,i-1,s))+", ";return`linear(${e.substring(0,e.length-2)})`};function Nl(n){let t;return()=>(t===void 0&&(t=n()),t)}const _S={linearEasing:void 0};function vS(n,t){const e=Nl(n);return()=>{var i;return(i=_S[t])!==null&&i!==void 0?i:e()}}const Fr=vS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function tf(n){return!!(typeof n=="function"&&Fr()||!n||typeof n=="string"&&(n in Za||Fr())||Dl(n)||Array.isArray(n)&&n.every(tf))}const fs=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,Za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fs([0,.65,.55,1]),circOut:fs([.55,0,1,.45]),backIn:fs([.31,.01,.66,-.59]),backOut:fs([.33,1.53,.69,.99])};function ef(n,t){if(n)return typeof n=="function"&&Fr()?gS(n,t):Dl(n)?fs(n):Array.isArray(n)?n.map(e=>ef(e,t)||Za.easeOut):Za[n]}function xS(n,t,e,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:e};l&&(c.offset=l);const u=ef(a,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Ru(n,t){n.timeline=t,n.onfinish=null}const yS=Nl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Or=10,SS=2e4;function MS(n){return Ll(n.type)||n.type==="spring"||!tf(n.ease)}function ES(n,t){const e=new Ul({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<SS;)i=e.sample(r),s.push(i.value),r+=Or;return{times:void 0,keyframes:s,duration:r-Or,ease:"linear"}}const nf={anticipate:wd,backInOut:Ad,circInOut:Cd};function TS(n){return n in nf}class Cu extends qd{constructor(t){super(t);const{name:e,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Xd(r,(o,a)=>this.onKeyframesResolved(o,a),e,i,s),this.resolver.scheduleResolve()}initPlayback(t,e){var i;let{duration:s=300,times:r,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Fr()&&TS(o)&&(o=nf[o]),MS(this.options)){const{onComplete:d,onUpdate:m,motionValue:g,element:_,...p}=this.options,f=ES(t,p);t=f.keyframes,t.length===1&&(t[1]=t[0]),s=f.duration,r=f.times,o=f.ease,a="keyframes"}const h=xS(l.owner.current,c,t,{...this.options,duration:s,times:r,ease:o});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?(Ru(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:d}=this.options;l.set(Yr(t,this.options,e)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:s,times:r,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return Tn(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return Tn(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.currentTime=En(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:e}=this;if(!e)return Ee;const{animation:i}=e;Ru(i,t)}return Ee}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.playState==="finished"&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:i,duration:s,type:r,ease:o,times:a}=t;if(e.playState==="idle"||e.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...m}=this.options,g=new Ul({...m,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),_=En(this.time);c.setWithVelocity(g.sample(_-Or).value,g.sample(_).value,Or)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=t;return yS()&&i&&pS.has(i)&&e&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const bS=Nl(()=>window.ScrollTimeline!==void 0);class AS{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=e}attachTimeline(t,e){const i=this.animations.map(s=>bS()&&s.attachTimeline?s.attachTimeline(t):e(s));return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function wS({when:n,delay:t,delayChildren:e,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Fl=(n,t,e,i={},s,r)=>o=>{const a=Ml(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-En(l);let u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:t,element:r?void 0:s};wS(a)||(u={...u,...Wx(n,u)}),u.duration&&(u.duration=En(u.duration)),u.repeatDelay&&(u.repeatDelay=En(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!r&&t.get()!==void 0){const d=Yr(u.keyframes,a);if(d!==void 0)return Zt.update(()=>{u.onUpdate(d),u.onComplete()}),new AS([])}return!r&&Cu.supports(u)?new Cu(u):new Ul(u)},RS=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),CS=n=>Wa(n)?n[n.length-1]||0:n;function Ol(n,t){n.indexOf(t)===-1&&n.push(t)}function Bl(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}class kl{constructor(){this.subscriptions=[]}add(t){return Ol(this.subscriptions,t),()=>Bl(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pu=30,PS=n=>!isNaN(parseFloat(n));class LS{constructor(t,e={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=an.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=an.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=PS(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new kl);const i=this.events[t].add(e);return t==="change"?()=>{i(),Zt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){!e||!this.passiveEffect?this.updateAndNotify(t,e):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Pu)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,Pu);return Yd(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Es(n,t){return new LS(n,t)}function DS(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,Es(e))}function IS(n,t){const e=qr(n,t);let{transitionEnd:i={},transition:s={},...r}=e||{};r={...r,...i};for(const o in r){const a=CS(r[o]);DS(n,o,a)}}const Vl=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),US="framerAppearId",sf="data-"+Vl(US);function rf(n){return n.props[sf]}const Me=n=>!!(n&&n.getVelocity);function NS(n){return!!(Me(n)&&n.add)}function Ja(n,t){const e=n.getValue("willChange");if(NS(e))return e.add(t)}function FS({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function of(n,t,{delay:e=0,transitionOverride:i,type:s}={}){var r;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=t;i&&(o=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const h in l){const d=n.getValue(h,(r=n.latestValues[h])!==null&&r!==void 0?r:null),m=l[h];if(m===void 0||u&&FS(u,h))continue;const g={delay:e,...Ml(o||{},h)};let _=!1;if(window.MotionHandoffAnimation){const f=rf(n);if(f){const E=window.MotionHandoffAnimation(f,h,Zt);E!==null&&(g.startTime=E,_=!0)}}Ja(n,h),d.start(Fl(h,d,m,n.shouldReduceMotion&&_i.has(h)?{type:!1}:g,n,_));const p=d.animation;p&&c.push(p)}return a&&Promise.all(c).then(()=>{Zt.update(()=>{a&&IS(n,a)})}),c}function Qa(n,t,e={}){var i;const s=qr(n,t,e.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};e.transitionOverride&&(r=e.transitionOverride);const o=s?()=>Promise.all(of(n,s,e)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=r;return OS(n,t,u+c,h,d,e)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(e.delay)])}function OS(n,t,e=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(BS).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Qa(c,t,{...r,delay:e+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function BS(n,t){return n.sortNodePosition(t)}function kS(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>Qa(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=Qa(n,t,e);else{const s=typeof t=="function"?qr(n,t,e.custom):t;i=Promise.all(of(n,s,e))}return i.then(()=>{n.notify("AnimationComplete",t)})}const VS=Sl.length;function af(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?af(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<VS;e++){const i=Sl[e],s=n.props[i];(ys(s)||s===!1)&&(t[i]=s)}return t}const zS=[...yl].reverse(),HS=yl.length;function GS(n){return t=>Promise.all(t.map(({animation:e,options:i})=>kS(n,e,i)))}function WS(n){let t=GS(n),e=Lu(),i=!0;const s=l=>(c,u)=>{var h;const d=qr(n,u,l==="exit"?(h=n.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:m,transitionEnd:g,..._}=d;c={...c,..._,...g}}return c};function r(l){t=l(n)}function o(l){const{props:c}=n,u=af(n.parent)||{},h=[],d=new Set;let m={},g=1/0;for(let p=0;p<HS;p++){const f=zS[p],E=e[f],x=c[f]!==void 0?c[f]:u[f],M=ys(x),P=f===l?E.isActive:null;P===!1&&(g=p);let R=x===u[f]&&x!==c[f]&&M;if(R&&i&&n.manuallyAnimateOnMount&&(R=!1),E.protectedKeys={...m},!E.isActive&&P===null||!x&&!E.prevProp||Xr(x)||typeof x=="boolean")continue;const w=jS(E.prevProp,x);let D=w||f===l&&E.isActive&&!R&&M||p>g&&M,J=!1;const v=Array.isArray(x)?x:[x];let T=v.reduce(s(f),{});P===!1&&(T={});const{prevResolvedValues:G={}}=E,N={...G,...T},H=$=>{D=!0,d.has($)&&(J=!0,d.delete($)),E.needsAnimating[$]=!0;const V=n.getValue($);V&&(V.liveStyle=!1)};for(const $ in N){const V=T[$],st=G[$];if(m.hasOwnProperty($))continue;let it=!1;Wa(V)&&Wa(st)?it=!yd(V,st):it=V!==st,it?V!=null?H($):d.add($):V!==void 0&&d.has($)?H($):E.protectedKeys[$]=!0}E.prevProp=x,E.prevResolvedValues=T,E.isActive&&(m={...m,...T}),i&&n.blockInitialAnimation&&(D=!1),D&&(!(R&&w)||J)&&h.push(...v.map($=>({animation:$,options:{type:f}})))}if(d.size){const p={};d.forEach(f=>{const E=n.getBaseTarget(f),x=n.getValue(f);x&&(x.liveStyle=!0),p[f]=E??null}),h.push({animation:p})}let _=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(_=!1),i=!1,_?t(h):Promise.resolve()}function a(l,c){var u;if(e[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),e[l].isActive=c;const h=o(l);for(const d in e)e[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>e,reset:()=>{e=Lu(),i=!0}}}function jS(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!yd(t,n):!1}function ni(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lu(){return{animate:ni(!0),whileInView:ni(),whileHover:ni(),whileTap:ni(),whileDrag:ni(),whileFocus:ni(),exit:ni()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class XS extends qn{constructor(t){super(t),t.animationState||(t.animationState=WS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let qS=0;class YS extends qn{constructor(){super(...arguments),this.id=qS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);e&&!t&&s.then(()=>e(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const $S={animation:{Feature:XS},exit:{Feature:YS}},lf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function $r(n,t="page"){return{point:{x:n[`${t}X`],y:n[`${t}Y`]}}}const KS=n=>t=>lf(t)&&n(t,$r(t));function Mn(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}function An(n,t,e,i){return Mn(n,t,KS(e),i)}const Du=(n,t)=>Math.abs(n-t);function ZS(n,t){const e=Du(n.x,t.x),i=Du(n.y,t.y);return Math.sqrt(e**2+i**2)}class cf{constructor(t,e,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Go(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=ZS(h.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:g}=h,{timestamp:_}=_e;this.history.push({...g,timestamp:_});const{onStart:p,onMove:f}=this.handlers;d||(p&&p(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Ho(d,this.transformPagePoint),Zt.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:m,onSessionEnd:g,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Go(h.type==="pointercancel"?this.lastMoveEventInfo:Ho(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,p),g&&g(h,p)},!lf(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.contextWindow=s||window;const o=$r(t),a=Ho(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=_e;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=e;u&&u(t,Go(a,this.history)),this.removeListeners=bn(An(this.contextWindow,"pointermove",this.handlePointerMove),An(this.contextWindow,"pointerup",this.handlePointerUp),An(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Gn(this.updatePoint)}}function Ho(n,t){return t?{point:t(n.point)}:n}function Iu(n,t){return{x:n.x-t.x,y:n.y-t.y}}function Go({point:n},t){return{point:n,delta:Iu(n,uf(t)),offset:Iu(n,JS(t)),velocity:QS(t,.1)}}function JS(n){return n[0]}function uf(n){return n[n.length-1]}function QS(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=uf(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>En(t)));)e--;if(!i)return{x:0,y:0};const r=Tn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function hf(n){let t=null;return()=>{const e=()=>{t=null};return t===null?(t=n,e):!1}}const Uu=hf("dragHorizontal"),Nu=hf("dragVertical");function df(n){let t=!1;if(n==="y")t=Nu();else if(n==="x")t=Uu();else{const e=Uu(),i=Nu();e&&i?t=()=>{e(),i()}:(e&&e(),i&&i())}return t}function ff(){const n=df(!0);return n?(n(),!1):!0}function Fi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const pf=1e-4,tM=1-pf,eM=1+pf,mf=.01,nM=0-mf,iM=0+mf;function Be(n){return n.max-n.min}function sM(n,t,e){return Math.abs(n-t)<=e}function Fu(n,t,e,i=.5){n.origin=i,n.originPoint=ie(t.min,t.max,n.origin),n.scale=Be(e)/Be(t),n.translate=ie(e.min,e.max,n.origin)-n.originPoint,(n.scale>=tM&&n.scale<=eM||isNaN(n.scale))&&(n.scale=1),(n.translate>=nM&&n.translate<=iM||isNaN(n.translate))&&(n.translate=0)}function _s(n,t,e,i){Fu(n.x,t.x,e.x,i?i.originX:void 0),Fu(n.y,t.y,e.y,i?i.originY:void 0)}function Ou(n,t,e){n.min=e.min+t.min,n.max=n.min+Be(t)}function rM(n,t,e){Ou(n.x,t.x,e.x),Ou(n.y,t.y,e.y)}function Bu(n,t,e){n.min=t.min-e.min,n.max=n.min+Be(t)}function vs(n,t,e){Bu(n.x,t.x,e.x),Bu(n.y,t.y,e.y)}function oM(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?ie(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?ie(e,n,i.max):Math.min(n,e)),n}function ku(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function aM(n,{top:t,left:e,bottom:i,right:s}){return{x:ku(n.x,e,s),y:ku(n.y,t,i)}}function Vu(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function lM(n,t){return{x:Vu(n.x,t.x),y:Vu(n.y,t.y)}}function cM(n,t){let e=.5;const i=Be(n),s=Be(t);return s>i?e=Ki(t.min,t.max-i,n.min):i>s&&(e=Ki(n.min,n.max-s,t.min)),Wn(0,1,e)}function uM(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const tl=.35;function hM(n=tl){return n===!1?n=0:n===!0&&(n=tl),{x:zu(n,"left","right"),y:zu(n,"top","bottom")}}function zu(n,t,e){return{min:Hu(n,t),max:Hu(n,e)}}function Hu(n,t){return typeof n=="number"?n:n[t]||0}const Gu=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:Gu(),y:Gu()}),Wu=()=>({min:0,max:0}),oe=()=>({x:Wu(),y:Wu()});function Ge(n){return[n("x"),n("y")]}function gf({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function dM({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function fM(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function Wo(n){return n===void 0||n===1}function el({scale:n,scaleX:t,scaleY:e}){return!Wo(n)||!Wo(t)||!Wo(e)}function oi(n){return el(n)||_f(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _f(n){return ju(n.x)||ju(n.y)}function ju(n){return n&&n!=="0%"}function Br(n,t,e){const i=n-e,s=t*i;return e+s}function Xu(n,t,e,i,s){return s!==void 0&&(n=Br(n,s,i)),Br(n,e,i)+t}function nl(n,t=0,e=1,i,s){n.min=Xu(n.min,t,e,i,s),n.max=Xu(n.max,t,e,i,s)}function vf(n,{x:t,y:e}){nl(n.x,t.translate,t.scale,t.originPoint),nl(n.y,e.translate,e.scale,e.originPoint)}const qu=.999999999999,Yu=1.0000000000001;function pM(n,t,e,i=!1){const s=e.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=e[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&ki(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,vf(n,o)),i&&oi(r.latestValues)&&ki(n,r.latestValues))}t.x<Yu&&t.x>qu&&(t.x=1),t.y<Yu&&t.y>qu&&(t.y=1)}function Bi(n,t){n.min=n.min+t,n.max=n.max+t}function $u(n,t,e,i,s=.5){const r=ie(n.min,n.max,s);nl(n,t,e,r,i)}function ki(n,t){$u(n.x,t.x,t.scaleX,t.scale,t.originX),$u(n.y,t.y,t.scaleY,t.scale,t.originY)}function xf(n,t){return gf(fM(n.getBoundingClientRect(),t))}function mM(n,t,e){const i=xf(n,e),{scroll:s}=t;return s&&(Bi(i.x,s.offset.x),Bi(i.y,s.offset.y)),i}const yf=({current:n})=>n?n.ownerDocument.defaultView:null,gM=new WeakMap;class _M{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor($r(u,"page").point)},r=(u,h)=>{const{drag:d,dragPropagation:m,onDragStart:g}=this.getProps();if(d&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=df(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ge(p=>{let f=this.getAxisMotionValue(p).get()||0;if(on.test(f)){const{projection:E}=this.visualElement;if(E&&E.layout){const x=E.layout.layoutBox[p];x&&(f=Be(x)*(parseFloat(f)/100))}}this.originPoint[p]=f}),g&&Zt.postRender(()=>g(u,h)),Ja(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:g,onDrag:_}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:p}=h;if(m&&this.currentDirection===null){this.currentDirection=vM(p),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),_&&_(u,h)},a=(u,h)=>this.stop(u,h),l=()=>Ge(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new cf(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:yf(this.visualElement)})}stop(t,e){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=e;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Zt.postRender(()=>r(t,e))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!ar(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=oM(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:e,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;e&&Fi(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=aM(s.layoutBox,e):this.constraints=!1,this.elastic=hM(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Ge(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=uM(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Fi(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=mM(i,s.root,this.visualElement.getTransformPagePoint());let o=lM(s.layout.layoutBox,r);if(e){const a=e(dM(o));this.hasMutatedConstraints=!!a,a&&(o=gf(a))}return o}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ge(u=>{if(!ar(u,e,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,m=s?40:1e7,g={type:"inertia",velocity:i?t[u]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return Ja(this.visualElement,t),i.start(Fl(t,i,0,e,this.visualElement,!1))}stopAnimation(){Ge(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ge(t=>{var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.pause()})}getAnimationState(t){var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Ge(e=>{const{drag:i}=this.getProps();if(!ar(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[e];r.set(t[e]-ie(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!Fi(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ge(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=cM({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ge(o=>{if(!ar(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ie(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;gM.set(this.visualElement,this);const t=this.visualElement.current,e=An(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Fi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Zt.read(i);const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ge(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),e(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=tl,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function ar(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function vM(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class xM extends qn{constructor(t){super(t),this.removeGroupControls=Ee,this.removeListeners=Ee,this.controls=new _M(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ee}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ku=n=>(t,e)=>{n&&Zt.postRender(()=>n(t,e))};class yM extends qn{constructor(){super(...arguments),this.removePointerDownListener=Ee}onPointerDown(t){this.session=new cf(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yf(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Ku(t),onStart:Ku(e),onMove:i,onEnd:(r,o)=>{delete this.session,s&&Zt.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=An(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kr=K.createContext(null);function SM(){const n=K.useContext(Kr);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:e,register:i}=n,s=K.useId();K.useEffect(()=>i(s),[]);const r=K.useCallback(()=>e&&e(s),[s,e]);return!t&&e?[!1,r]:[!0]}const zl=K.createContext({}),Sf=K.createContext({}),Er={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zu(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const ls={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(Mt.test(n))n=parseFloat(n);else return n;const e=Zu(n,t.target.x),i=Zu(n,t.target.y);return`${e}% ${i}%`}},MM={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=jn.parse(n);if(s.length>5)return i;const r=jn.createTransformer(n),o=typeof s[0]!="number"?1:0,a=e.x.scale*t.x,l=e.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=ie(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}},kr={};function EM(n){Object.assign(kr,n)}const{schedule:Hl}=Sd(queueMicrotask,!1);class TM extends K.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;EM(bM),r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Er.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==e||e===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||Zt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Hl.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Mf(n){const[t,e]=SM(),i=K.useContext(zl);return b.jsx(TM,{...n,layoutGroup:i,switchLayoutGroup:K.useContext(Sf),isPresent:t,safeToRemove:e})}const bM={borderRadius:{...ls,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ls,borderTopRightRadius:ls,borderBottomLeftRadius:ls,borderBottomRightRadius:ls,boxShadow:MM},Ef=["TopLeft","TopRight","BottomLeft","BottomRight"],AM=Ef.length,Ju=n=>typeof n=="string"?parseFloat(n):n,Qu=n=>typeof n=="number"||Mt.test(n);function wM(n,t,e,i,s,r){s?(n.opacity=ie(0,e.opacity!==void 0?e.opacity:1,RM(i)),n.opacityExit=ie(t.opacity!==void 0?t.opacity:1,0,CM(i))):r&&(n.opacity=ie(t.opacity!==void 0?t.opacity:1,e.opacity!==void 0?e.opacity:1,i));for(let o=0;o<AM;o++){const a=`border${Ef[o]}Radius`;let l=th(t,a),c=th(e,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Qu(l)===Qu(c)?(n[a]=Math.max(ie(Ju(l),Ju(c),i),0),(on.test(c)||on.test(l))&&(n[a]+="%")):n[a]=c}(t.rotate||e.rotate)&&(n.rotate=ie(t.rotate||0,e.rotate||0,i))}function th(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const RM=Tf(0,.5,Rd),CM=Tf(.5,.95,Ee);function Tf(n,t,e){return i=>i<n?0:i>t?1:e(Ki(n,t,i))}function eh(n,t){n.min=t.min,n.max=t.max}function ze(n,t){eh(n.x,t.x),eh(n.y,t.y)}function nh(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function ih(n,t,e,i,s){return n-=t,n=Br(n,1/e,i),s!==void 0&&(n=Br(n,1/s,i)),n}function PM(n,t=0,e=1,i=.5,s,r=n,o=n){if(on.test(t)&&(t=parseFloat(t),t=ie(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=ie(r.min,r.max,i);n===r&&(a-=t),n.min=ih(n.min,t,e,a,s),n.max=ih(n.max,t,e,a,s)}function sh(n,t,[e,i,s],r,o){PM(n,t[e],t[i],t[s],t.scale,r,o)}const LM=["x","scaleX","originX"],DM=["y","scaleY","originY"];function rh(n,t,e,i){sh(n.x,t,LM,e?e.x:void 0,i?i.x:void 0),sh(n.y,t,DM,e?e.y:void 0,i?i.y:void 0)}function oh(n){return n.translate===0&&n.scale===1}function bf(n){return oh(n.x)&&oh(n.y)}function ah(n,t){return n.min===t.min&&n.max===t.max}function IM(n,t){return ah(n.x,t.x)&&ah(n.y,t.y)}function lh(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function Af(n,t){return lh(n.x,t.x)&&lh(n.y,t.y)}function ch(n){return Be(n.x)/Be(n.y)}function uh(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class UM{constructor(){this.members=[]}add(t){Ol(this.members,t),t.scheduleRender()}remove(t){if(Bl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(s=>t===s);if(e===0)return!1;let i;for(let s=e;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function NM(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y,o=(e==null?void 0:e.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:m,skewY:g}=e;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),m&&(i+=`skewX(${m}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*t.x,l=n.y.scale*t.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const FM=(n,t)=>n.depth-t.depth;class OM{constructor(){this.children=[],this.isDirty=!1}add(t){Ol(this.children,t),this.isDirty=!0}remove(t){Bl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(FM),this.isDirty=!1,this.children.forEach(t)}}function Tr(n){const t=Me(n)?n.get():n;return RS(t)?t.toValue():t}function BM(n,t){const e=an.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(Gn(i),n(r-t))};return Zt.read(i,!0),()=>Gn(i)}function kM(n){return n instanceof SVGElement&&n.tagName!=="svg"}function VM(n,t,e){const i=Me(n)?n:Es(n);return i.start(Fl("",i,t,e)),i.animation}const ai={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ps=typeof window<"u"&&window.MotionDebug!==void 0,jo=["","X","Y","Z"],zM={visibility:"hidden"},hh=1e3;let HM=0;function Xo(n,t,e,i){const{latestValues:s}=t;s[n]&&(e[n]=s[n],t.setStaticValue(n,0),i&&(i[n]=0))}function wf(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=rf(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",Zt,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&wf(i)}function Rf({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=HM++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ps&&(ai.totalNodes=ai.resolvedTargetDeltas=ai.recalculatedProjection=0),this.nodes.forEach(jM),this.nodes.forEach(KM),this.nodes.forEach(ZM),this.nodes.forEach(XM),ps&&window.MotionDebug.record(ai)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new OM)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new kl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=kM(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let h;const d=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=BM(d,250),Er.hasAnimatedSinceResize&&(Er.hasAnimatedSinceResize=!1,this.nodes.forEach(fh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:m,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||nE,{onLayoutAnimationStart:p,onLayoutAnimationComplete:f}=u.getProps(),E=!this.targetLayout||!Af(this.targetLayout,g)||m,x=!d&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,x);const M={...Ml(_,"layout"),onPlay:p,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else d||fh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JM),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dh);return}this.isUpdating||this.nodes.forEach(YM),this.isUpdating=!1,this.nodes.forEach($M),this.nodes.forEach(GM),this.nodes.forEach(WM),this.clearAllSnapshots();const a=an.now();_e.delta=Wn(0,1e3/60,a-_e.timestamp),_e.timestamp=a,_e.isProcessing=!0,Oo.update.process(_e),Oo.preRender.process(_e),Oo.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(qM),this.sharedNodes.forEach(QM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!bf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||oi(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),iE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return oe();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(sE))){const{scroll:u}=this.root;u&&(Bi(l.x,u.offset.x),Bi(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=oe();if(ze(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&ze(l,o),Bi(l.x,h.offset.x),Bi(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=oe();ze(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ki(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),oi(u.latestValues)&&ki(l,u.latestValues)}return oi(this.latestValues)&&ki(l,this.latestValues),l}removeTransform(o){const a=oe();ze(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!oi(c.latestValues))continue;el(c.latestValues)&&c.updateSnapshot();const u=oe(),h=c.measurePageBox();ze(u,h),rh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return oi(this.latestValues)&&rh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=_e.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),vs(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ze(this.target,this.layout.layoutBox),vf(this.target,this.targetDelta)):ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),vs(this.relativeTargetOrigin,this.target,m.target),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ps&&ai.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||el(this.parent.latestValues)||_f(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;ze(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;pM(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=oe());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nh(this.prevProjectionDelta.x,this.projectionDelta.x),nh(this.prevProjectionDelta.y,this.projectionDelta.y)),_s(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!uh(this.projectionDelta.x,this.prevProjectionDelta.x)||!uh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ps&&ai.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=oe(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=m!==g,p=this.getStack(),f=!p||p.members.length<=1,E=!!(_&&!f&&this.options.crossfade===!0&&!this.path.some(eE));this.animationProgress=0;let x;this.mixTargetDelta=M=>{const P=M/1e3;ph(h.x,o.x,P),ph(h.y,o.y,P),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vs(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tE(this.relativeTarget,this.relativeTargetOrigin,d,P),x&&IM(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=oe()),ze(x,this.relativeTarget)),_&&(this.animationValues=u,wM(u,c,this.latestValues,P,E,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Zt.update(()=>{Er.hasAnimatedSinceResize=!0,this.currentAnimation=VM(0,hh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Cf(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||oe();const h=Be(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=Be(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}ze(a,l),ki(a,u),_s(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new UM),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Xo("z",o,c,this.animationValues);for(let u=0;u<jo.length;u++)Xo(`rotate${jo[u]}`,o,c,this.animationValues),Xo(`skew${jo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return zM;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Tr(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Tr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!oi(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=NM(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:m,y:g}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const _ in kr){if(d[_]===void 0)continue;const{correct:p,applyTo:f}=kr[_],E=c.transform==="none"?d[_]:p(d[_],h);if(f){const x=f.length;for(let M=0;M<x;M++)c[f[M]]=E}else c[_]=E}return this.options.layoutId&&(c.pointerEvents=h===this?Tr(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(dh),this.root.sharedNodes.clear()}}}function GM(n){n.updateLayout()}function WM(n){var t;const e=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=e.source!==n.layout.source;r==="size"?Ge(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],m=Be(d);d.min=i[h].min,d.max=d.min+m}):Cf(r,e.layoutBox,i)&&Ge(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],m=Be(i[h]);d.max=d.min+m,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+m)});const a=Oi();_s(a,i,e.layoutBox);const l=Oi();o?_s(l,n.applyTransform(s,!0),e.measuredBox):_s(l,i,e.layoutBox);const c=!bf(a);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:m}=h;if(d&&m){const g=oe();vs(g,e.layoutBox,d.layoutBox);const _=oe();vs(_,i,m.layoutBox),Af(g,_)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=g,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function jM(n){ps&&ai.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function XM(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function qM(n){n.clearSnapshot()}function dh(n){n.clearMeasurements()}function YM(n){n.isLayoutDirty=!1}function $M(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function fh(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function KM(n){n.resolveTargetDelta()}function ZM(n){n.calcProjection()}function JM(n){n.resetSkewAndRotation()}function QM(n){n.removeLeadSnapshot()}function ph(n,t,e){n.translate=ie(t.translate,0,e),n.scale=ie(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function mh(n,t,e,i){n.min=ie(t.min,e.min,i),n.max=ie(t.max,e.max,i)}function tE(n,t,e,i){mh(n.x,t.x,e.x,i),mh(n.y,t.y,e.y,i)}function eE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const nE={duration:.45,ease:[.4,0,.1,1]},gh=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),_h=gh("applewebkit/")&&!gh("chrome/")?Math.round:Ee;function vh(n){n.min=_h(n.min),n.max=_h(n.max)}function iE(n){vh(n.x),vh(n.y)}function Cf(n,t,e){return n==="position"||n==="preserve-aspect"&&!sM(ch(t),ch(e),.2)}function sE(n){var t;return n!==n.root&&((t=n.scroll)===null||t===void 0?void 0:t.wasRoot)}const rE=Rf({attachResizeListener:(n,t)=>Mn(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qo={current:void 0},Pf=Rf({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!qo.current){const n=new rE({});n.mount(window),n.setOptions({layoutScroll:!0}),qo.current=n}return qo.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),oE={pan:{Feature:yM},drag:{Feature:xM,ProjectionNode:Pf,MeasureLayout:Mf}};function xh(n,t){const e=t?"pointerenter":"pointerleave",i=t?"onHoverStart":"onHoverEnd",s=(r,o)=>{if(r.pointerType==="touch"||ff())return;const a=n.getProps();n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",t);const l=a[i];l&&Zt.postRender(()=>l(r,o))};return An(n.current,e,s,{passive:!n.getProps()[i]})}class aE extends qn{mount(){this.unmount=bn(xh(this.node,!0),xh(this.node,!1))}unmount(){}}class lE extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Lf=(n,t)=>t?n===t?!0:Lf(n,t.parentElement):!1;function Yo(n,t){if(!t)return;const e=new PointerEvent("pointer"+n);t(e,$r(e))}class cE extends qn{constructor(){super(...arguments),this.removeStartListeners=Ee,this.removeEndListeners=Ee,this.removeAccessibleListeners=Ee,this.startPointerPress=(t,e)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=An(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps(),d=!h&&!Lf(this.node.current,a.target)?u:c;d&&Zt.update(()=>d(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=An(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=bn(r,o),this.startPress(t,e)},this.startAccessiblePress=()=>{const t=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Yo("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&Zt.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),Yo("down",(a,l)=>{this.startPress(a,l)})},e=Mn(this.node.current,"keydown",t),i=()=>{this.isPressing&&Yo("cancel",(r,o)=>this.cancelPress(r,o))},s=Mn(this.node.current,"blur",i);this.removeAccessibleListeners=bn(e,s)}}startPress(t,e){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Zt.postRender(()=>i(t,e))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ff()}cancelPress(t,e){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Zt.postRender(()=>i(t,e))}mount(){const t=this.node.getProps(),e=An(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bn(e,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const il=new WeakMap,$o=new WeakMap,uE=n=>{const t=il.get(n.target);t&&t(n)},hE=n=>{n.forEach(uE)};function dE({root:n,...t}){const e=n||document;$o.has(e)||$o.set(e,{});const i=$o.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(hE,{root:n,...t})),i[s]}function fE(n,t,e){const i=dE(t);return il.set(n,e),i.observe(n),()=>{il.delete(n),i.unobserve(n)}}const pE={some:0,all:1};class mE extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:pE[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return fE(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(gE(t,e))&&this.startObserver()}unmount(){}}function gE({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const _E={inView:{Feature:mE},tap:{Feature:cE},focus:{Feature:lE},hover:{Feature:aE}},vE={layout:{ProjectionNode:Pf,MeasureLayout:Mf}},Gl=K.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Zr=K.createContext({}),Wl=typeof window<"u",Df=Wl?K.useLayoutEffect:K.useEffect,If=K.createContext({strict:!1});function xE(n,t,e,i,s){var r,o;const{visualElement:a}=K.useContext(Zr),l=K.useContext(If),c=K.useContext(Kr),u=K.useContext(Gl).reducedMotion,h=K.useRef();i=i||l.renderer,!h.current&&i&&(h.current=i(n,{visualState:t,parent:a,props:e,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,m=K.useContext(Sf);d&&!d.projection&&s&&(d.type==="html"||d.type==="svg")&&yE(h.current,e,s,m);const g=K.useRef(!1);K.useInsertionEffect(()=>{d&&g.current&&d.update(e,c)});const _=e[sf],p=K.useRef(!!_&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return Df(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Hl.render(d.render),p.current&&d.animationState&&d.animationState.animateChanges())}),K.useEffect(()=>{d&&(!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,_)}),p.current=!1))}),d}function yE(n,t,e,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:Uf(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Fi(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Uf(n){if(n)return n.options.allowProjection!==!1?n.projection:Uf(n.parent)}function SE(n,t,e){return K.useCallback(i=>{i&&n.mount&&n.mount(i),t&&(i?t.mount(i):t.unmount()),e&&(typeof e=="function"?e(i):Fi(e)&&(e.current=i))},[t])}function Jr(n){return Xr(n.animate)||Sl.some(t=>ys(n[t]))}function Nf(n){return!!(Jr(n)||n.variants)}function ME(n,t){if(Jr(n)){const{initial:e,animate:i}=n;return{initial:e===!1||ys(e)?e:void 0,animate:ys(i)?i:void 0}}return n.inherit!==!1?t:{}}function EE(n){const{initial:t,animate:e}=ME(n,K.useContext(Zr));return K.useMemo(()=>({initial:t,animate:e}),[yh(t),yh(e)])}function yh(n){return Array.isArray(n)?n.join(" "):n}const Sh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zi={};for(const n in Sh)Zi[n]={isEnabled:t=>Sh[n].some(e=>!!t[e])};function TE(n){for(const t in n)Zi[t]={...Zi[t],...n[t]}}const bE=Symbol.for("motionComponentSymbol");function AE({preloadedFeatures:n,createVisualElement:t,useRender:e,useVisualState:i,Component:s}){n&&TE(n);function r(a,l){let c;const u={...K.useContext(Gl),...a,layoutId:wE(a)},{isStatic:h}=u,d=EE(a),m=i(a,h);if(!h&&Wl){RE();const g=CE(u);c=g.MeasureLayout,d.visualElement=xE(s,m,u,t,g.ProjectionNode)}return b.jsxs(Zr.Provider,{value:d,children:[c&&d.visualElement?b.jsx(c,{visualElement:d.visualElement,...u}):null,e(s,a,SE(m,d.visualElement,l),m,h,d.visualElement)]})}const o=K.forwardRef(r);return o[bE]=s,o}function wE({layoutId:n}){const t=K.useContext(zl).id;return t&&n!==void 0?t+"-"+n:n}function RE(n,t){K.useContext(If).strict}function CE(n){const{drag:t,layout:e}=Zi;if(!t&&!e)return{};const i={...t,...e};return{MeasureLayout:t!=null&&t.isEnabled(n)||e!=null&&e.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const PE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jl(n){return typeof n!="string"||n.includes("-")?!1:!!(PE.indexOf(n)>-1||/[A-Z]/u.test(n))}function Ff(n,{style:t,vars:e},i,s){Object.assign(n.style,t,s&&s.getProjectionStyles(i));for(const r in e)n.style.setProperty(r,e[r])}const Of=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bf(n,t,e,i){Ff(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(Of.has(s)?s:Vl(s),t.attrs[s])}function kf(n,{layout:t,layoutId:e}){return _i.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!kr[n]||n==="opacity")}function Xl(n,t,e){var i;const{style:s}=n,r={};for(const o in s)(Me(s[o])||t.style&&Me(t.style[o])||kf(o,n)||((i=e==null?void 0:e.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function Vf(n,t,e){const i=Xl(n,t,e);for(const s in n)if(Me(n[s])||Me(t[s])){const r=Ps.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function ql(n){const t=K.useRef(null);return t.current===null&&(t.current=n()),t.current}function LE({scrapeMotionValuesFromProps:n,createRenderState:t,onMount:e},i,s,r){const o={latestValues:DE(i,s,r,n),renderState:t()};return e&&(o.mount=a=>e(i,a,o)),o}const zf=n=>(t,e)=>{const i=K.useContext(Zr),s=K.useContext(Kr),r=()=>LE(n,t,i,s);return e?r():ql(r)};function DE(n,t,e,i){const s={},r=i(n,{});for(const d in r)s[d]=Tr(r[d]);let{initial:o,animate:a}=n;const l=Jr(n),c=Nf(n);t&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=e?e.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Xr(h)){const d=Array.isArray(h)?h:[h];for(let m=0;m<d.length;m++){const g=xl(n,d[m]);if(g){const{transitionEnd:_,transition:p,...f}=g;for(const E in f){let x=f[E];if(Array.isArray(x)){const M=u?x.length-1:0;x=x[M]}x!==null&&(s[E]=x)}for(const E in _)s[E]=_[E]}}}return s}const Yl=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Hf=()=>({...Yl(),attrs:{}}),Gf=(n,t)=>t&&typeof n=="number"?t.transform(n):n,IE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UE=Ps.length;function NE(n,t,e){let i="",s=!0;for(let r=0;r<UE;r++){const o=Ps[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||e){const c=Gf(a,Cl[o]);if(!l){s=!1;const u=IE[o]||o;i+=`${u}(${c}) `}e&&(t[o]=c)}}return i=i.trim(),e?i=e(t,s?"":i):s&&(i="none"),i}function $l(n,t,e){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in t){const c=t[l];if(_i.has(l)){o=!0;continue}else if(Ud(l)){s[l]=c;continue}else{const u=Gf(c,Cl[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(t.transform||(o||e?i.transform=NE(t,n.transform,e):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}function Mh(n,t,e){return typeof n=="string"?n:Mt.transform(t+e*n)}function FE(n,t,e){const i=Mh(t,n.x,n.width),s=Mh(e,n.y,n.height);return`${i} ${s}`}const OE={offset:"stroke-dashoffset",array:"stroke-dasharray"},BE={offset:"strokeDashoffset",array:"strokeDasharray"};function kE(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?OE:BE;n[r.offset]=Mt.transform(-i);const o=Mt.transform(t),a=Mt.transform(e);n[r.array]=`${o} ${a}`}function Kl(n,{attrX:t,attrY:e,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if($l(n,c,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:m,dimensions:g}=n;d.transform&&(g&&(m.transform=d.transform),delete d.transform),g&&(s!==void 0||r!==void 0||m.transform)&&(m.transformOrigin=FE(g,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(d.x=t),e!==void 0&&(d.y=e),i!==void 0&&(d.scale=i),o!==void 0&&kE(d,o,a,l,!1)}const Zl=n=>typeof n=="string"&&n.toLowerCase()==="svg",VE={useVisualState:zf({scrapeMotionValuesFromProps:Vf,createRenderState:Hf,onMount:(n,t,{renderState:e,latestValues:i})=>{Zt.read(()=>{try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}),Zt.render(()=>{Kl(e,i,Zl(t.tagName),n.transformTemplate),Bf(t,e)})}})},zE={useVisualState:zf({scrapeMotionValuesFromProps:Xl,createRenderState:Yl})};function Wf(n,t,e){for(const i in t)!Me(t[i])&&!kf(i,e)&&(n[i]=t[i])}function HE({transformTemplate:n},t){return K.useMemo(()=>{const e=Yl();return $l(e,t,n),Object.assign({},e.vars,e.style)},[t])}function GE(n,t){const e=n.style||{},i={};return Wf(i,e,n),Object.assign(i,HE(n,t)),i}function WE(n,t){const e={},i=GE(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=i,e}const jE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||jE.has(n)}let jf=n=>!Vr(n);function XE(n){n&&(jf=t=>t.startsWith("on")?!Vr(t):n(t))}try{XE(require("@emotion/is-prop-valid").default)}catch{}function qE(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(jf(s)||e===!0&&Vr(s)||!t&&!Vr(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function YE(n,t,e,i){const s=K.useMemo(()=>{const r=Hf();return Kl(r,t,Zl(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};Wf(r,n.style,n),s.style={...r,...s.style}}return s}function $E(n=!1){return(e,i,s,{latestValues:r},o)=>{const l=(jl(e)?YE:WE)(i,r,o,e),c=qE(i,typeof e=="string",n),u=e!==K.Fragment?{...c,...l,ref:s}:{},{children:h}=i,d=K.useMemo(()=>Me(h)?h.get():h,[h]);return K.createElement(e,{...u,children:d})}}function KE(n,t){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...jl(i)?VE:zE,preloadedFeatures:n,useRender:$E(s),createVisualElement:t,Component:i};return AE(o)}}const sl={current:null},Xf={current:!1};function ZE(){if(Xf.current=!0,!!Wl)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>sl.current=n.matches;n.addListener(t),t()}else sl.current=!1}function JE(n,t,e){for(const i in t){const s=t[i],r=e[i];if(Me(s))n.addValue(i,s);else if(Me(r))n.addValue(i,Es(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,Es(o!==void 0?o:s,{owner:n}))}}for(const i in e)t[i]===void 0&&n.removeValue(i);return t}const Eh=new WeakMap,QE=[...Od,Se,jn],tT=n=>QE.find(Fd(n)),Th=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class eT{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Al,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=an.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Zt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=Jr(e),this.isVariantNode=Nf(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const d in h){const m=h[d];l[d]!==void 0&&Me(m)&&m.set(l[d],!1)}}mount(t){this.current=t,Eh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,i)=>this.bindToMotionValue(i,e)),Xf.current||ZE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:sl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Eh.delete(this.current),this.projection&&this.projection.unmount(),Gn(this.notifyUpdate),Gn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=_i.has(t),s=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Zt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Zi){const e=Zi[t];if(!e)continue;const{isEnabled:i,Feature:s}=e;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<Th.length;i++){const s=Th[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=JE(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=Es(e===null?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){var i;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Dd(s)||Pd(s))?s=parseFloat(s):!tT(s)&&jn.test(e)&&(s=jd(t,e)),this.setBaseTarget(t,Me(s)?s.get():s)),Me(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=xl(this.props,i,(e=this.presenceContext)===null||e===void 0?void 0:e.custom);o&&(s=o[t])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Me(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new kl),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class qf extends eT{constructor(){super(...arguments),this.KeyframeResolver=Xd}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}}function nT(n){return window.getComputedStyle(n)}class iT extends qf{constructor(){super(...arguments),this.type="html",this.renderInstance=Ff}readValueFromInstance(t,e){if(_i.has(e)){const i=Pl(e);return i&&i.default||0}else{const i=nT(t),s=(Ud(e)?i.getPropertyValue(e):i[e])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return xf(t,e)}build(t,e,i){$l(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return Xl(t,e,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Me(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class sT extends qf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oe}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(_i.has(e)){const i=Pl(e);return i&&i.default||0}return e=Of.has(e)?e:Vl(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return Vf(t,e,i)}build(t,e,i){Kl(t,e,this.isSVGTag,i.transformTemplate)}renderInstance(t,e,i,s){Bf(t,e,i,s)}mount(t){this.isSVGTag=Zl(t.tagName),super.mount(t)}}const rT=(n,t)=>jl(n)?new sT(t):new iT(t,{allowProjection:n!==K.Fragment}),oT=KE({...$S,..._E,...oE,...vE},rT),Jl=kx(oT);class aT extends K.Component{getSnapshotBeforeUpdate(t){const e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=e.offsetHeight||0,i.width=e.offsetWidth||0,i.top=e.offsetTop,i.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function lT({children:n,isPresent:t}){const e=K.useId(),i=K.useRef(null),s=K.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=K.useContext(Gl);return K.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(t||!i.current||!o||!a)return;i.current.dataset.motionPopId=e;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.jsx(aT,{isPresent:t,childRef:i,sizeRef:s,children:K.cloneElement(n,{ref:i})})}const cT=({children:n,initial:t,isPresent:e,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=ql(uT),l=K.useId(),c=K.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=K.useMemo(()=>({id:l,initial:t,isPresent:e,custom:s,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),r?[Math.random(),c]:[e,c]);return K.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[e]),K.useEffect(()=>{!e&&!a.size&&i&&i()},[e]),o==="popLayout"&&(n=b.jsx(lT,{isPresent:e,children:n})),b.jsx(Kr.Provider,{value:u,children:n})};function uT(){return new Map}const lr=n=>n.key||"";function bh(n){const t=[];return K.Children.forEach(n,e=>{K.isValidElement(e)&&t.push(e)}),t}const Yf=({children:n,exitBeforeEnter:t,custom:e,initial:i=!0,onExitComplete:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=K.useMemo(()=>bh(n),[n]),l=a.map(lr),c=K.useRef(!0),u=K.useRef(a),h=ql(()=>new Map),[d,m]=K.useState(a),[g,_]=K.useState(a);Df(()=>{c.current=!1,u.current=a;for(let E=0;E<g.length;E++){const x=lr(g[E]);l.includes(x)?h.delete(x):h.get(x)!==!0&&h.set(x,!1)}},[g,l.length,l.join("-")]);const p=[];if(a!==d){let E=[...a];for(let x=0;x<g.length;x++){const M=g[x],P=lr(M);l.includes(P)||(E.splice(x,0,M),p.push(M))}o==="wait"&&p.length&&(E=p),_(bh(E)),m(a);return}const{forceRender:f}=K.useContext(zl);return b.jsx(b.Fragment,{children:g.map(E=>{const x=lr(E),M=a===g||l.includes(x),P=()=>{if(h.has(x))h.set(x,!0);else return;let R=!0;h.forEach(w=>{w||(R=!1)}),R&&(f==null||f(),_(u.current),s&&s())};return b.jsx(cT,{isPresent:M,initial:!c.current||i?void 0:!1,custom:M?void 0:e,presenceAffectsLayout:r,mode:o,onExitComplete:M?void 0:P,children:E},x)})})};function hT({nudge:n,onAck:t}){return K.useEffect(()=>{if(!n)return;const e=setTimeout(()=>t(n.id),n.severity==="low"?9e3:3e4);return()=>clearTimeout(e)},[n,t]),b.jsx(Yf,{children:n?b.jsxs(Jl.div,{className:`toast ${n.severity}`,role:"status",initial:{y:80,opacity:0},animate:{y:0,opacity:1},exit:{y:80,opacity:0},children:[b.jsx("b",{children:n.title}),b.jsx("span",{children:n.message}),b.jsx("br",{}),b.jsx("button",{className:"btn sm",onClick:()=>t(n.id),children:"Got it"})]},n.id):null})}function dT({approval:n,onAnswer:t}){return n?b.jsx("div",{className:"scrim",role:"dialog","aria-modal":"true","aria-label":"Approval needed",children:b.jsxs("div",{className:"modal",children:[b.jsxs("h3",{children:["VANTA wants to: ",n.action]}),b.jsx("pre",{children:n.detail}),b.jsxs("div",{className:"row",children:[b.jsx("button",{className:"btn",onClick:()=>t(!1,n),children:"Deny"}),b.jsx("button",{className:"btn primary",autoFocus:!1,onClick:()=>t(!0,n),children:"Approve"})]})]})}):null}const fT=[{key:"window",label:"Windows and apps",hint:"Which app and window title you are using. Never keystrokes."},{key:"browser",label:"Browser pages",hint:"Page titles and visible text, through the Chrome extension. Never passwords."},{key:"process",label:"Running programs",hint:"Watches for unfamiliar or runaway programs."},{key:"screen",label:"Screen changes",hint:"Notices when the screen changes. Pixels are never saved."}],pT=[{v:"auto",label:"Auto"},{v:"calm",label:"Calm"},{v:"hud",label:"HUD"}];function mT({sync:n,onUnlock:t,onSyncNow:e}){const[i,s]=K.useState("");if(!n)return null;const r=n.last?new Date(n.last*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return b.jsxs(b.Fragment,{children:[b.jsx("h3",{style:{marginTop:22},children:"Phone sync"}),n.configured?n.unlocked?b.jsxs("p",{children:["Connected",r?` · last synced ${r}`:"",". Everything is scrambled on this laptop before it leaves.",b.jsx("button",{className:"btn ghost sm",onClick:e,children:"Sync now"})]}):b.jsxs(b.Fragment,{children:[b.jsx("p",{children:"Enter your vault passphrase to start syncing. It stays on this laptop and is never saved."}),b.jsxs("div",{className:"composer",style:{marginBottom:12},children:[b.jsx("input",{type:"password","aria-label":"Vault passphrase",placeholder:"Vault passphrase",value:i,onChange:o=>s(o.target.value),onKeyDown:o=>{o.key==="Enter"&&i&&(t(i),s(""))}}),b.jsx("button",{className:"btn sm primary",disabled:i.length<8,onClick:()=>{t(i),s("")},children:"Unlock"})]})]}):b.jsx("p",{children:'Not set up yet. See "Phone sync" in the README: it takes about five minutes.'}),n.error?b.jsx("p",{style:{color:"#E7A3AB"},children:n.error}):null]})}function gT({open:n,privacy:t,onSource:e,onClose:i,layout:s,onLayout:r,fx:o,fxAuto:a,onFx:l,sync:c,onUnlock:u,onSyncNow:h}){return b.jsx(Yf,{children:n?b.jsxs(Jl.aside,{className:"drawer",initial:{x:360},animate:{x:0},exit:{x:360},transition:{type:"tween",duration:.22},"aria-label":"Settings",children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.jsx("h3",{children:"What I can see"}),b.jsx("button",{className:"btn ghost sm",onClick:i,children:"Close"})]}),b.jsx("p",{children:"You decide. Pausing stops everything at once. Password managers, private windows and banking pages are never read."}),fT.map(d=>b.jsxs("div",{className:"toggle",children:[b.jsxs("div",{children:[d.label,b.jsx("small",{children:d.hint})]}),b.jsx("button",{className:"switch",role:"switch","aria-label":d.label,"aria-checked":!!t.sources[d.key],onClick:()=>e(d.key,!t.sources[d.key])})]},d.key)),b.jsx("h3",{style:{marginTop:22},children:"How it looks"}),b.jsx("p",{children:"Auto keeps things calm while we chat and switches to the full HUD when there is something to show or I am working."}),b.jsx("div",{className:"seg",role:"radiogroup","aria-label":"Layout",children:pT.map(d=>b.jsx("button",{role:"radio","aria-checked":s===d.v,onClick:()=>r(d.v),children:d.label},d.v))}),b.jsxs("div",{className:"toggle",children:[b.jsxs("div",{children:["Light effects",b.jsx("small",{children:a?"Turned on because this screen was struggling.":"Fewer glows and animations. Easier on an older laptop."})]}),b.jsx("button",{className:"switch",role:"switch","aria-label":"Light effects","aria-checked":o==="low",onClick:()=>l(o==="low"?"full":"low")})]}),b.jsx(mT,{sync:c,onUnlock:u,onSyncNow:h}),b.jsxs("div",{className:"toggle",style:{marginTop:12},children:[b.jsxs("div",{children:["Sign out",b.jsx("small",{children:"Locks VANTA in this browser."})]}),b.jsx("a",{className:"btn sm",style:{display:"grid",placeItems:"center",textDecoration:"none"},href:"/logout",children:"Sign out"})]})]}):null})}const vn=24,cr=64,ii=24,_T=820,vT={text:150,node:84,news:150,chart:160,code:260,table:220,image:300,steps:200,svg:300,html:300,weather:140,recommendation:116},sn=n=>vT[n.type]??150,Ko=(n,t,e)=>Math.max(t,Math.min(e,n));function xT(n){var e;if(n.layout==="connected"||n.layout==="investigation")return"connected";if(n.layout)return"orbit";const t=n.blocks.filter(i=>i.type!=="recommendation");return(((e=n.links)==null?void 0:e.length)??0)>0&&t.length>1?"connected":"orbit"}function yT(n,t){const e=new Set(n.map(r=>r.id)),i=t.filter(r=>e.has(r.from)&&e.has(r.to)&&r.from!==r.to),s=Object.fromEntries(n.map(r=>[r.id,0]));for(let r=0;r<n.length;r++){let o=!1;for(const a of i)s[a.to]<s[a.from]+1&&s[a.from]+1<n.length&&(s[a.to]=s[a.from]+1,o=!0);if(!o)break}return s}function Ah(n,t,e,i,s){let r=i;for(const o of n){const a=o.type==="node"?Math.min(e,260):e;s[o.id]={x:o.type==="node"&&a<e?t+(e-a)/2:t,y:r,w:a,h:sn(o)},r+=sn(o)+vn}return r}function Zo(n,t,e,i,s){const r=Math.floor((t-vn*(e-1))/e);let o=i;for(let a=0;a<n.length;a+=e){const l=n.slice(a,a+e),c=Math.max(...l.map(sn));l.forEach((u,h)=>{s[u.id]={x:h*(r+vn),y:o,w:r,h:c}}),o+=c+vn}return o}function ST(n,t,e){const i=t<_T,s={},r=[],o=n?xT(n):"orbit",a=n?n.blocks.filter(p=>p.type!=="recommendation"):[],l=n?n.blocks.filter(p=>p.type==="recommendation"):[];if(i){const p={cx:t/2,cy:84,size:n?132:200};let f=p.cy+p.size/2+44;return f=Zo([...a,...l],t,1,f,s),{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(e,f),sphere:p}}if(o==="connected"&&n){const p={cx:ii+52,cy:ii+52,size:104},f=n.links??[],E=140,x=yT(a,f),M=new Set(f.flatMap(N=>[N.from,N.to])),P=a.filter(N=>M.has(N.id)),R=a.filter(N=>!M.has(N.id)),w=P.length?Math.max(...P.map(N=>x[N.id]))+1:1,D=Ko(Math.floor((t-cr*(w-1))/w),150,300),J=w*D+(w-1)*cr,v=Math.max(0,Math.round((t-J)/2)),T=Array(w).fill(E);for(const N of P){const H=x[N.id];s[N.id]={x:v+H*(D+cr),y:T[H],w:D,h:sn(N)},T[H]+=sn(N)+vn}let G=P.length?Math.max(...T):E;R.length&&(G=Zo(R,t,t>=900?2:1,G,s));for(const N of f){const H=s[N.from],j=s[N.to];if(!H||!j)continue;const B=j.x>H.x+H.w-1,$=B?H.x+H.w:H.x+H.w/2,V=B?H.y+H.h/2:H.y+H.h,st=B?j.x:j.x+j.w/2,it=B?j.y+j.h/2:j.y,mt=($+st)/2,Ot=B?Math.abs(V-it)<2?`M ${$} ${V} L ${st} ${it}`:`M ${$} ${V} L ${mt} ${V} L ${mt} ${it} L ${st} ${it}`:`M ${$} ${V} L ${st} ${it}`;r.push({from:N.from,to:N.to,d:Ot,label:N.label,dashed:N.style==="dashed",lx:B?st-cr/2:($+st)/2,ly:B?it-4:(V+it)/2})}for(const N of l)s[N.id]={x:ii,y:G,w:t-ii*2,h:sn(N)},G+=sn(N)+vn;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(e,G),sphere:p}}const c=Ko(Math.min(t*.34,e*.52),200,360),u=t/2,h=Ko(e*.44,c/2+56,Math.max(c/2+56,e)),d=u-c/2-56-ii,m={cx:u,cy:h,size:c};if(!n||a.length===0)return{mode:o,stacked:i,boxes:s,arrows:r,height:e,sphere:m};let g;if(d<220){const p={cy:150,size:200};g=Zo(a,t,1,p.cy+p.size/2+40,s),m.cy=p.cy,m.size=p.size}else{const p=Math.min(400,d),f=[],E=[];a.forEach((w,D)=>(D%2===0?f:E).push(w));const x=w=>w.reduce((D,J)=>D+sn(J)+vn,-vn),M=w=>Math.max(48,Math.round(h-x(w)/2)),P=Ah(f,u+c/2+56,p,M(f),s),R=Ah(E,u-c/2-56-p,p,M(E),s);g=Math.max(P,R,h+c/2+56)}let _=Math.max(g,h+c/2+56);for(const p of l)s[p.id]={x:ii,y:_,w:t-ii*2,h:sn(p)},_+=sn(p)+vn;return{mode:o,stacked:i,boxes:s,arrows:r,height:Math.max(e,_),sphere:m}}const Yn=({kind:n,title:t,right:e})=>b.jsxs("div",{className:"block-head",children:[b.jsx("span",{className:"k",children:n}),b.jsx("span",{className:"t",children:t}),e]}),le=n=>n==null?"":String(n);function MT({b:n}){const t=le(n.data.body??n.data.text).split(/\n{2,}/).filter(Boolean);return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:le(n.data.kind)||"note",title:n.title}),b.jsx("div",{className:"block-body",children:t.map((e,i)=>b.jsx("p",{style:{margin:i?"10px 0 0":0},children:e},i))})]})}function ET({b:n}){return b.jsx("div",{className:"block-body",children:b.jsxs("span",{children:[b.jsx("b",{children:n.title}),b.jsx("br",{}),le(n.data.value??n.data.label)]})})}function TT({b:n}){return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"block-head",style:{borderBottom:0,paddingTop:12},children:[b.jsx("span",{className:"k2",style:{font:"500 11px var(--mono)",letterSpacing:".14em",color:"var(--accent)"},children:"NEWS"}),b.jsxs("span",{className:"t",style:{color:"var(--muted)",fontSize:12},children:[le(n.data.source)," · ",le(n.data.time)]})]}),b.jsxs("div",{className:"block-body news",style:{paddingTop:0},children:[b.jsx("div",{className:"headline",children:le(n.data.headline??n.title)}),n.data.tag?b.jsx("div",{style:{marginTop:10},children:b.jsx("span",{className:"chip",children:le(n.data.tag)})}):null]})]})}function bT({b:n}){const t=Array.isArray(n.data.values)?n.data.values.map(Number).filter(Number.isFinite):[],e=Math.max(1,...t),i=typeof n.data.highlightFrom=="number"?n.data.highlightFrom:1/0,s=408,r=70,o=Math.max(1,t.length),a=Math.max(3,Math.min(14,s/o*.62)),l=s/o;return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:"chart",title:n.title,right:n.data.note?b.jsx("span",{style:{font:"10px var(--mono)",color:"var(--muted)"},children:le(n.data.note)}):null}),b.jsxs("div",{className:"block-body",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[b.jsx("svg",{viewBox:`0 0 ${s} ${r}`,width:"100%",height:r,preserveAspectRatio:"none",role:"img","aria-label":n.title||"chart",children:t.map((c,u)=>{const h=Math.max(3,c/e*(r-4));return b.jsx("rect",{x:u*l+(l-a)/2,y:r-h,width:a,height:h,rx:2,fill:u>=i?"#F2B35E":"#2A4A72"},u)})}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",font:"10px var(--mono)",color:"var(--muted)"},children:[b.jsx("span",{children:le(n.data.from)}),b.jsx("span",{children:le(n.data.to??"now")})]})]})]})}function AT({b:n}){const[t,e]=K.useState(!1),i=le(n.data.code);return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:"code",title:le(n.data.filename)||n.title,right:b.jsx("button",{className:"btn ghost sm",style:{height:28,padding:"0 8px"},onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(i).then(()=>{e(!0),setTimeout(()=>e(!1),1500)})},children:t?"Copied":"Copy"})}),b.jsx("div",{className:"block-body",children:b.jsx("pre",{className:"code",children:i})})]})}function wT({b:n}){const t=Array.isArray(n.data.columns)?n.data.columns.map(le):[],e=Array.isArray(n.data.rows)?n.data.rows.slice(0,50):[];return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:"table",title:n.title}),b.jsx("div",{className:"block-body",children:b.jsxs("table",{className:"tbl",children:[b.jsx("thead",{children:b.jsx("tr",{children:t.map((i,s)=>b.jsx("th",{children:i},s))})}),b.jsx("tbody",{children:e.map((i,s)=>b.jsx("tr",{children:(Array.isArray(i)?i:[i]).map((r,o)=>b.jsx("td",{children:le(r)},o))},s))})]})})]})}function RT({b:n}){const t=(Array.isArray(n.data.items)?n.data.items:[]).map(e=>typeof e=="string"?{label:e}:{label:le(e.label),state:le(e.state)});return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:"steps",title:n.title}),b.jsx("div",{className:"block-body",children:b.jsx("ul",{className:"steplist",children:t.map((e,i)=>b.jsxs("li",{className:e.state==="done"?"done":e.state==="active"?"active":e.state==="todo"?"todo":"",children:[b.jsx("span",{className:"m",children:e.state==="done"?"✓":""}),e.label]},i))})})]})}function CT({b:n}){const[t,e]=K.useState(null),i=Array.isArray(n.data.annotations)?n.data.annotations:[],s=le(n.data.src);return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:le(n.data.kind)||"image",title:n.title,right:i.length?b.jsx("span",{style:{fontSize:11,color:"var(--accent)",border:"1px solid var(--border-2)",borderRadius:999,padding:"2px 8px"},children:"annotated"}):null}),b.jsx("div",{className:"block-body flush",style:{display:"grid",placeItems:"center",background:"#0A1020"},children:s?b.jsxs("div",{className:"shot",style:{aspectRatio:t?String(t):void 0,width:t?void 0:"100%",height:"100%",maxWidth:"100%"},children:[b.jsx("img",{src:s,alt:n.title||"screenshot",onLoad:r=>e(r.currentTarget.naturalWidth/r.currentTarget.naturalHeight),style:{objectFit:"fill"}}),i.slice(0,6).map((r,o)=>b.jsxs("div",{children:[b.jsx("div",{className:`box ${o?"second":""}`,style:{left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.w*100}%`,height:`${r.h*100}%`}}),r.label?b.jsxs("div",{className:"badge",style:{left:`${r.x*100}%`,top:`${r.y*100}%`},children:[o+1," · ",String(r.label).slice(0,40)]}):null]},o))]}):b.jsx("span",{style:{color:"var(--muted)",fontSize:13},children:"No image"})})]})}function PT({b:n}){const e=`<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:;"><style>html,body{margin:0;height:100%;background:#0A1020;color:#E8EEF8;font:14px system-ui}svg{max-width:100%;max-height:100%}</style><body>${le(n.data.markup)}</body>`;return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:n.type,title:n.title}),b.jsx("div",{className:"block-body flush",children:b.jsx("iframe",{className:"sandboxed",sandbox:"",referrerPolicy:"no-referrer",srcDoc:e,title:n.title||"visual"})})]})}function LT({b:n}){return b.jsxs(b.Fragment,{children:[b.jsx(Yn,{kind:"weather",title:n.title||le(n.data.city)}),b.jsxs("div",{className:"block-body wx",children:[b.jsxs("b",{children:[Math.round(Number(n.data.temp)),"°"]}),b.jsx("span",{style:{color:"var(--muted)"},children:le(n.data.condition)})]})]})}function DT({b:n}){switch(n.type){case"text":return b.jsx(MT,{b:n});case"node":return b.jsx(ET,{b:n});case"news":return b.jsx(TT,{b:n});case"chart":return b.jsx(bT,{b:n});case"code":return b.jsx(AT,{b:n});case"table":return b.jsx(wT,{b:n});case"steps":return b.jsx(RT,{b:n});case"image":return b.jsx(CT,{b:n});case"svg":case"html":return b.jsx(PT,{b:n});case"weather":return b.jsx(LT,{b:n});default:return null}}function IT(n){const[t,e]=K.useState({w:900,h:700});return K.useEffect(()=>{const i=n.current;if(!i)return;const s=()=>e({w:Math.floor(i.clientWidth),h:Math.floor(i.clientHeight)}),r=new ResizeObserver(s);return r.observe(i),s(),()=>r.disconnect()},[n]),t}const wh=n=>new Date(n*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function UT(){return b.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#F2B35E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[b.jsx("path",{d:"M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"}),b.jsx("path",{d:"M12 9v4M12 16v.5"})]})}function NT({stage:n,history:t,pinned:e,sphere:i,amplitude:s,low:r,caption:o,footer:a,onOpen:l,onPin:c,onClear:u,onAction:h}){const d=K.useRef(null),{w:m,h:g}=IT(d),_=K.useMemo(()=>ST(n,Math.max(280,m-48),Math.max(360,g)),[n,m,g]),p=t.filter(M=>M.id!==(n==null?void 0:n.id)).slice(0,4),f=n==null?void 0:n.blocks.find(M=>M.type==="recommendation"),E=((n==null?void 0:n.actions)??[]).map(M=>b.jsx("button",{className:`btn ${M.kind??"secondary"}`,onClick:()=>n&&h(n.id,M),children:M.label},M.id)),x=_.sphere.cy+_.sphere.size/2+6;return b.jsxs("section",{className:`hud ${_.mode}`,"aria-label":"Stage","data-mode":_.mode,children:[b.jsxs("div",{className:"hud-head",children:[b.jsxs("div",{className:"hud-title",children:[b.jsx("span",{className:"k",children:_.mode==="connected"?"LINKED":"STAGE"}),b.jsx("h2",{children:(n==null?void 0:n.title)??"Standing by"}),n?b.jsx("span",{className:"time",children:wh(n.ts)}):null]}),n?b.jsxs("div",{className:"hud-actions",children:[b.jsx("button",{className:"btn sm","aria-pressed":e,onClick:c,children:e?"Unpin":"Pin"}),b.jsx("button",{className:"btn sm",onClick:u,children:"Clear"})]}):null]}),b.jsx("div",{className:"hud-scroll",ref:d,children:b.jsxs("div",{className:"hud-field",style:{width:Math.max(280,m-48),height:_.height},children:[b.jsx(Ax,{state:i,amplitude:s,spot:_.sphere,low:r}),b.jsx("div",{className:`state-label ${i} ${_.mode==="connected"&&!_.stacked?"side":""}`,style:_.mode==="connected"&&!_.stacked?{left:_.sphere.cx+_.sphere.size/2+10,top:_.sphere.cy}:{left:_.sphere.cx,top:x},children:_d[i]}),n?null:b.jsxs("div",{className:"standing",style:{left:_.sphere.cx,top:x+40},children:["Nothing needs your attention.",b.jsx("br",{}),"Ask me to show you something and it appears here."]}),o&&!n?b.jsx("div",{className:"caption",style:{left:_.sphere.cx,top:x+110},children:o}):null,_.arrows.length>0&&b.jsxs("svg",{className:"arrows",width:Math.max(280,m-48),height:_.height,"aria-hidden":"true",children:[b.jsxs("defs",{children:[b.jsx("marker",{id:"ah",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:b.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#7EC8FF"})}),b.jsx("marker",{id:"ahd",orient:"auto",markerWidth:"7",markerHeight:"7",refX:"6",refY:"3.5",children:b.jsx("path",{d:"M0 0 L7 3.5 L0 7 Z",fill:"#F2B35E"})})]}),_.arrows.map((M,P)=>b.jsx("path",{className:M.dashed?"flow":"",d:M.d,fill:"none",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",stroke:M.dashed?"#F2B35E":"#7EC8FF",strokeDasharray:M.dashed?"6 6":void 0,markerEnd:`url(#${M.dashed?"ahd":"ah"})`},P))]}),_.arrows.filter(M=>M.label).map((M,P)=>b.jsx("div",{className:"arrow-label",style:{left:M.lx,top:M.ly},children:M.label},P)),n==null?void 0:n.blocks.map((M,P)=>{const R=_.boxes[M.id];if(!R)return null;const w=M.type==="recommendation";return b.jsx(Jl.div,{className:`block ${M.type} ${M.tone??""} ${w?"rec":""}`,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.35,delay:Math.min(P*.07,.35)},style:{left:R.x,top:R.y,width:R.w,height:R.h},children:w?b.jsxs(b.Fragment,{children:[b.jsx(UT,{}),b.jsxs("div",{className:"txt",children:[b.jsx("h3",{children:String(M.data.title??M.title??"")}),b.jsx("p",{children:String(M.data.reason??"")})]}),b.jsx("div",{className:"acts",children:E})]}):b.jsx(DT,{b:M})},M.id)})]})}),n&&!f&&E.length>0?b.jsx("div",{className:"hud-bar",children:E}):null,p.length>0?b.jsxs("div",{className:"earlier",children:[b.jsx("span",{className:"k",children:"EARLIER"}),p.map(M=>b.jsxs("button",{onClick:()=>l(M.id),children:[M.title," · ",wh(M.ts)]},M.id))]}):null,a]})}const cn=Object.create(null);cn.open="0";cn.close="1";cn.ping="2";cn.pong="3";cn.message="4";cn.upgrade="5";cn.noop="6";const br=Object.create(null);Object.keys(cn).forEach(n=>{br[cn[n]]=n});const rl={type:"error",data:"parser error"},$f=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Kf=typeof ArrayBuffer=="function",Zf=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Ql=({type:n,data:t},e,i)=>$f&&t instanceof Blob?e?i(t):Rh(t,i):Kf&&(t instanceof ArrayBuffer||Zf(t))?e?i(t):Rh(new Blob([t]),i):i(cn[n]+(t||"")),Rh=(n,t)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function Ch(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Jo;function FT(n,t){if($f&&n.data instanceof Blob)return n.data.arrayBuffer().then(Ch).then(t);if(Kf&&(n.data instanceof ArrayBuffer||Zf(n.data)))return t(Ch(n.data));Ql(n,!1,e=>{Jo||(Jo=new TextEncoder),t(Jo.encode(e))})}const Ph="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ms=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Ph.length;n++)ms[Ph.charCodeAt(n)]=n;const OT=n=>{let t=n.length*.75,e=n.length,i,s=0,r,o,a,l;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(i=0;i<e;i+=4)r=ms[n.charCodeAt(i)],o=ms[n.charCodeAt(i+1)],a=ms[n.charCodeAt(i+2)],l=ms[n.charCodeAt(i+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},BT=typeof ArrayBuffer=="function",tc=(n,t)=>{if(typeof n!="string")return{type:"message",data:Jf(n,t)};const e=n.charAt(0);return e==="b"?{type:"message",data:kT(n.substring(1),t)}:br[e]?n.length>1?{type:br[e],data:n.substring(1)}:{type:br[e]}:rl},kT=(n,t)=>{if(BT){const e=OT(n);return Jf(e,t)}else return{base64:!0,data:n}},Jf=(n,t)=>{switch(t){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},Qf="",VT=(n,t)=>{const e=n.length,i=new Array(e);let s=0;n.forEach((r,o)=>{Ql(r,!1,a=>{i[o]=a,++s===e&&t(i.join(Qf))})})},zT=(n,t)=>{const e=n.split(Qf),i=[];for(let s=0;s<e.length;s++){const r=tc(e[s],t);if(i.push(r),r.type==="error")break}return i};function HT(){return new TransformStream({transform(n,t){FT(n,e=>{const i=e.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let Qo;function ur(n){return n.reduce((t,e)=>t+e.length,0)}function hr(n,t){if(n[0].length===t)return n.shift();const e=new Uint8Array(t);let i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function GT(n,t){Qo||(Qo=new TextDecoder);const e=[];let i=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(i===0){if(ur(e)<1)break;const l=hr(e,1);r=(l[0]&128)===128,s=l[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(ur(e)<2)break;const l=hr(e,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(ur(e)<8)break;const l=hr(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(rl);break}s=u*Math.pow(2,32)+c.getUint32(4),i=3}else{if(ur(e)<s)break;const l=hr(e,s);a.enqueue(tc(r?l:Qo.decode(l),t)),i=0}if(s===0||s>n){a.enqueue(rl);break}}}})}const tp=4;function de(n){if(n)return WT(n)}function WT(n){for(var t in de.prototype)n[t]=de.prototype[t];return n}de.prototype.on=de.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};de.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};de.prototype.off=de.prototype.removeListener=de.prototype.removeAllListeners=de.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};de.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};de.prototype.emitReserved=de.prototype.emit;de.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};de.prototype.hasListeners=function(n){return!!this.listeners(n).length};const je=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function ep(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}const jT=je.setTimeout,XT=je.clearTimeout;function Qr(n,t){t.useNativeTimers?(n.setTimeoutFn=jT.bind(je),n.clearTimeoutFn=XT.bind(je)):(n.setTimeoutFn=je.setTimeout.bind(je),n.clearTimeoutFn=je.clearTimeout.bind(je))}const qT=1.33;function YT(n){return typeof n=="string"?$T(n):Math.ceil((n.byteLength||n.size)*qT)}function $T(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function KT(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function ZT(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class JT extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}}class ec extends de{constructor(t){super(),this.writable=!1,Qr(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,e,i){return super.emitReserved("error",new JT(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=tc(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=KT(t);return e.length?"?"+e:""}}const np="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ol=64,QT={};let Lh=0,dr=0,Dh;function Ih(n){let t="";do t=np[n%ol]+t,n=Math.floor(n/ol);while(n>0);return t}function ip(){const n=Ih(+new Date);return n!==Dh?(Lh=0,Dh=n):n+"."+Ih(Lh++)}for(;dr<ol;dr++)QT[np[dr]]=dr;let sp=!1;try{sp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const tb=sp;function rp(n){const t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||tb))return new XMLHttpRequest}catch{}if(!t)try{return new je[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function eb(){}const nb=function(){return new rp({xdomain:!1}).responseType!=null}();class ib extends ec{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||s!==t.port}const e=t&&t.forceBase64;this.supportsBinary=nb&&!e,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};zT(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,VT(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=ip()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new ln(this.uri(),t)}doWrite(t,e){const i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}}class ln extends de{constructor(t,e){super(),Qr(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.data=e.data!==void 0?e.data:null,this.create()}create(){var t;const e=ep(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd;const i=this.xhr=new rp(e);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this.opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=ln.requestsCount++,ln.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=eb,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ln.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ln.requestsCount=0;ln.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Uh);else if(typeof addEventListener=="function"){const n="onpagehide"in je?"pagehide":"unload";addEventListener(n,Uh,!1)}}function Uh(){for(let n in ln.requests)ln.requests.hasOwnProperty(n)&&ln.requests[n].abort()}const nc=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),fr=je.WebSocket||je.MozWebSocket,Nh=!0,sb="arraybuffer",Fh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class rb extends ec{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,i=Fh?{}:ep(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=Nh&&!Fh?e?new fr(t,e):new fr(t):new fr(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;Ql(i,this.supportsBinary,r=>{const o={};try{Nh&&this.ws.send(r)}catch{}s&&nc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=ip()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}check(){return!!fr}}class ob extends ec{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(t=>{const e=GT(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=HT();s.readable.pipeTo(t.writable),this.writer=s.writable.getWriter();const r=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;this.writer.write(i).then(()=>{s&&nc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this.transport)===null||t===void 0||t.close()}}const ab={websocket:rb,webtransport:ob,polling:ib},lb=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,cb=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function al(n){if(n.length>2e3)throw"URI too long";const t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=lb.exec(n||""),r={},o=14;for(;o--;)r[cb[o]]=s[o]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=ub(r,r.path),r.queryKey=hb(r,r.query),r}function ub(n,t){const e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function hb(n,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}let op=class Ii extends de{constructor(t,e={}){super(),this.binaryType=sb,this.writeBuffer=[],t&&typeof t=="object"&&(e=t,t=null),t?(t=al(t),e.hostname=t.host,e.secure=t.protocol==="https"||t.protocol==="wss",e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=al(e.host).host),Qr(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ZT(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=tp,e.transport=t,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new ab[t](i)}open(){let t;if(this.opts.rememberUpgrade&&Ii.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",e=>this.onClose("transport close",e))}probe(t){let e=this.createTransport(t),i=!1;Ii.priorWebsocketSuccess=!1;const s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",h=>{if(!i)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Ii.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=e.name,this.emitReserved("upgradeError",d)}}))};function r(){i||(i=!0,u(),e.close(),e=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=e.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(h){e&&h.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onOpen(){if(this.readyState="open",Ii.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(e+=YT(s)),i>0&&e>this.maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}write(t,e,i){return this.sendPacket("message",t,e,i),this}send(t,e,i){return this.sendPacket("message",t,e,i),this}sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}onError(t){Ii.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let i=0;const s=t.length;for(;i<s;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}};op.protocol=tp;function db(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=al(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}const fb=typeof ArrayBuffer=="function",pb=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,ap=Object.prototype.toString,mb=typeof Blob=="function"||typeof Blob<"u"&&ap.call(Blob)==="[object BlobConstructor]",gb=typeof File=="function"||typeof File<"u"&&ap.call(File)==="[object FileConstructor]";function ic(n){return fb&&(n instanceof ArrayBuffer||pb(n))||mb&&n instanceof Blob||gb&&n instanceof File}function Ar(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(Ar(n[e]))return!0;return!1}if(ic(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Ar(n.toJSON(),!0);for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&Ar(n[e]))return!0;return!1}function _b(n){const t=[],e=n.data,i=n;return i.data=wr(e,t),i.attachments=t.length,{packet:i,buffers:t}}function wr(n,t,e){if(!n)return n;if(ic(n)){const i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=wr(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return wr(n.toJSON(),t,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=wr(n[s],t));return i}return n}function vb(n,t){return n.data=ll(n.data,t),delete n.attachments,n}function ll(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=ll(n[e],t);else if(typeof n=="object")for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=ll(n[e],t));return n}const xb=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ut;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ut||(Ut={}));class yb{constructor(t){this.replacer=t}encode(t){return(t.type===Ut.EVENT||t.type===Ut.ACK)&&Ar(t)?this.encodeAsBinary({type:t.type===Ut.EVENT?Ut.BINARY_EVENT:Ut.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Ut.BINARY_EVENT||t.type===Ut.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=_b(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}}class sc extends de{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const i=e.type===Ut.BINARY_EVENT;i||e.type===Ut.BINARY_ACK?(e.type=i?Ut.EVENT:Ut.ACK,this.reconstructor=new Sb(e)):super.emitReserved("decoded",e)}else if(ic(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const i={type:Number(t.charAt(0))};if(Ut[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ut.BINARY_EVENT||i.type===Ut.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Mb(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(sc.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Ut.CONNECT:return Oh(e);case Ut.DISCONNECT:return e===void 0;case Ut.CONNECT_ERROR:return typeof e=="string"||Oh(e);case Ut.EVENT:case Ut.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&xb.indexOf(e[0])===-1);case Ut.ACK:case Ut.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Sb{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=vb(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Mb=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function Oh(n){return Object.prototype.toString.call(n)==="[object Object]"}const Eb=Object.freeze(Object.defineProperty({__proto__:null,Decoder:sc,Encoder:yb,get PacketType(){return Ut}},Symbol.toStringTag,{value:"Module"}));function Je(n,t,e){return n.on(t,e),function(){n.off(t,e)}}const Tb=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class lp extends de{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Je(t,"open",this.onopen.bind(this)),Je(t,"packet",this.onpacket.bind(this)),Je(t,"error",this.onerror.bind(this)),Je(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(Tb.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const i={type:Ut.EVENT,data:e};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const o=this.ids++,a=e.pop();this._registerAckCallback(o,a),i.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(t,e){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===t&&this.sendBuffer.splice(o,1);e.call(this,new Error("operation has timed out"))},s);this.acks[t]=(...o)=>{this.io.clearTimeoutFn(r),e.apply(this,[null,...o])}}emitWithAck(t,...e){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,r)=>{e.push((o,a)=>i?o?r(o):s(a):s(o)),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Ut.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Ut.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ut.EVENT:case Ut.BINARY_EVENT:this.onevent(t);break;case Ut.ACK:case Ut.BINARY_ACK:this.onack(t);break;case Ut.DISCONNECT:this.ondisconnect();break;case Ut.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let i=!1;return function(...s){i||(i=!0,e.packet({type:Ut.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ut.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,t.data)}}}function es(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}es.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=Math.floor(t*10)&1?n+e:n-e}return Math.min(n,this.max)|0};es.prototype.reset=function(){this.attempts=0};es.prototype.setMin=function(n){this.ms=n};es.prototype.setMax=function(n){this.max=n};es.prototype.setJitter=function(n){this.jitter=n};class cl extends de{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Qr(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new es({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||Eb;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new op(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=Je(e,"open",function(){i.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=Je(e,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Je(t,"ping",this.onping.bind(this)),Je(t,"data",this.ondata.bind(this)),Je(t,"error",this.onerror.bind(this)),Je(t,"close",this.onclose.bind(this)),Je(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){nc(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new lp(this,t,e),this.nsps[t]=i),i}_destroy(t){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const cs={};function Rr(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};const e=db(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,o=cs[s]&&r in cs[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new cl(i,t):(cs[s]||(cs[s]=new cl(i,t)),l=cs[s]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(Rr,{Manager:cl,Socket:lp,io:Rr,connect:Rr});const bb=["text","node","news","chart","code","table","image","steps","svg","html","weather","recommendation"],Ab=["single","compact","investigation"],wb=["normal","warn","danger","good"],Rb=12,Cb=2e4,He=(n,t=400)=>typeof n=="string"?n.slice(0,t):n==null?"":String(n).slice(0,t),us=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);function ta(n){if(!us(n)||!Array.isArray(n.blocks))return null;const t=new Set,e=[];for(const r of n.blocks.slice(0,Rb)){if(!us(r)||!bb.includes(r.type))continue;let o=He(r.id,40)||`b${e.length+1}`;t.has(o)&&(o=`${o}_${e.length}`),t.add(o);const a=us(r.data)?{...r.data}:{};(r.type==="svg"||r.type==="html")&&typeof a.markup=="string"&&(a.markup=a.markup.slice(0,Cb)),r.type==="image"&&typeof a.src=="string"&&!/^(data:image\/|https:\/\/|\/)/.test(a.src)&&(a.src=""),e.push({id:o,type:r.type,title:r.title?He(r.title,120):void 0,tone:wb.includes(r.tone)?r.tone:"normal",data:a})}if(!e.length)return null;const i=(Array.isArray(n.links)?n.links:[]).filter(us).filter(r=>t.has(He(r.from,40))&&t.has(He(r.to,40))).slice(0,24).map(r=>({from:He(r.from,40),to:He(r.to,40),label:r.label?He(r.label,40):void 0,style:r.style==="dashed"?"dashed":"solid"})),s=(Array.isArray(n.actions)?n.actions:[]).filter(us).slice(0,4).map(r=>({id:He(r.id,40),label:He(r.label,40),kind:["primary","secondary","ghost"].includes(r.kind)?r.kind:"secondary"})).filter(r=>r.id&&r.label);return{id:He(n.id,60)||`stage-${Date.now()}`,title:He(n.title,80)||"Stage",ts:typeof n.ts=="number"?n.ts:Date.now()/1e3,layout:Ab.includes(n.layout)?n.layout:void 0,blocks:e,links:i,actions:s,summary:n.summary?He(n.summary,300):void 0}}function Pb(n){const t=(n||"").toLowerCase(),e=n&&n.length>3?n.slice(0,240):void 0;return/429|rate.?limit|tokens per minute|too many requests|413|quota/.test(t)?{text:"My free providers are asking me to slow down. Give me a minute and try again.",detail:e}:/401|403|unauthor|invalid api key|authentication|forbidden/.test(t)?{text:"One of my providers refused the connection. The API key in your .env may be wrong or expired.",detail:e}:/timeout|timed out|network|connection|unreachable|dns|offline/.test(t)?{text:"I couldn't reach the network just now. I'll be fine once it's back.",detail:e}:/disabled|not approve|unsafe/.test(t)?{text:"I didn't do that, because it wasn't allowed or wasn't approved.",detail:e}:{text:"That didn't work, and I'm not sure why yet. Try again, or ask me to look into it.",detail:e}}const pr=()=>Math.random().toString(36).slice(2,9),Lb={conn:"connecting",status:"idle",statusText:"",messages:[],stages:[],activeStageId:null,pinned:!1,privacy:{paused:!1,watching:!0,sources:{}},nudge:null,approval:null,concernUntil:0,errorUntil:0,speaking:!1,workspace:null,tel:null,sync:null};function Db(n,t){switch(t.t){case"conn":return{...n,conn:t.v};case"status":{const e=t.state==="thinking"||t.state==="learning"?t.state:"idle";return{...n,status:e,statusText:e==="idle"?"":t.message??""}}case"user":return{...n,messages:[...n.messages,{id:pr(),role:"user",text:t.text}]};case"chunk":{const e=n.messages[n.messages.length-1];return e&&e.role==="vanta"&&e.streaming?{...n,speaking:!0,messages:[...n.messages.slice(0,-1),{...e,text:e.text+t.text}]}:{...n,speaking:!0,messages:[...n.messages,{id:pr(),role:"vanta",text:t.text,streaming:!0}]}}case"done":{const e=n.messages[n.messages.length-1],i=e!=null&&e.streaming?[...n.messages.slice(0,-1),{...e,streaming:!1}]:n.messages;return{...n,speaking:!1,messages:i}}case"say":return{...n,messages:[...n.messages,{id:pr(),role:"vanta",text:t.text,tag:t.tag,stageId:t.stageId,stageLabel:t.stageLabel}]};case"error":{const e=Pb(t.message);return{...n,speaking:!1,status:"idle",errorUntil:Date.now()+8e3,messages:[...n.messages.map(i=>({...i,streaming:!1})),{id:pr(),role:"vanta",text:e.text,tag:"error"}]}}case"stage":{const e=[t.stage,...n.stages.filter(s=>s.id!==t.stage.id)].slice(0,12),i=!n.pinned||n.activeStageId===t.stage.id||!n.activeStageId;return{...n,stages:e,activeStageId:i?t.stage.id:n.activeStageId}}case"open":return{...n,activeStageId:t.id};case"pin":return{...n,pinned:!n.pinned};case"clearStage":return{...n,activeStageId:null,pinned:!1};case"privacy":return{...n,privacy:t.v};case"nudge":return{...n,nudge:t.v};case"approval":return{...n,approval:t.v};case"concern":return{...n,concernUntil:Date.now()+t.ms};case"workspace":return{...n,workspace:t.v};case"sync":return{...n,sync:t.v};case"tel":{const e=t.v;if(!e||typeof e!="object")return n;const i=r=>typeof r=="number"&&isFinite(r)?r:0,s=e.battery&&typeof e.battery=="object"?{pct:i(e.battery.pct),plugged:!!e.battery.plugged}:null;return{...n,tel:{cpu:i(e.cpu),mem:i(e.mem),down:i(e.down),up:i(e.up),procs:i(e.procs),battery:s,idle:!!e.idle,app:typeof e.app=="string"?e.app.slice(0,40):void 0,title:typeof e.title=="string"?e.title.slice(0,80):void 0}}}}}function Ib(n,t=Date.now()){return n.conn!=="online"?"sleeping":n.errorUntil>t?"error":n.concernUntil>t?"alert":n.speaking?"speaking":n.status==="thinking"?"thinking":n.status==="learning"?"learning":"idle"}function Ub(){const[n,t]=K.useReducer(Db,Lb),e=K.useRef(null),[,i]=K.useReducer(o=>o+1,0);K.useEffect(()=>{const o=Rr({transports:["websocket","polling"]});e.current=o,o.on("connect",()=>{t({t:"conn",v:"online"}),o.emit("privacy_get"),o.emit("sync_get")}),o.on("disconnect",()=>t({t:"conn",v:"offline"})),o.on("connect_error",l=>{t({t:"conn",v:"offline"}),/xhr poll error|unauthor|403|401/i.test(String(l==null?void 0:l.message))&&!o.active&&(window.location.href="/login")}),o.on("status",l=>t({t:"status",state:l.state,message:l.message})),o.on("stream_chunk",l=>t({t:"chunk",text:l.chunk})),o.on("stream_done",()=>t({t:"done"})),o.on("response",l=>t({t:"say",text:l.text})),o.on("error",l=>t({t:"error",message:l.message})),o.on("privacy_state",l=>t({t:"privacy",v:l})),o.on("workspace_files",l=>t({t:"workspace",v:l})),o.on("sync_state",l=>t({t:"sync",v:l})),o.on("telemetry",l=>t({t:"tel",v:l})),o.on("nudge",l=>{t({t:"nudge",v:l}),l.severity!=="low"&&t({t:"concern",ms:12e3})}),o.on("approval_request",(l,c)=>t({t:"approval",v:{action:l.action,detail:l.detail,ack:c}})),o.on("stage",l=>{const c=ta(l);c&&(t({t:"stage",stage:c}),c.summary&&t({t:"say",text:c.summary,tag:c.blocks.some(u=>u.tone==="warn"||u.tone==="danger")?"heads-up":void 0,stageId:c.id,stageLabel:c.title}))}),o.on("alert",l=>{const c=ta({id:`alert-${Date.now()}`,title:String(l.title).slice(0,60),layout:"single",blocks:[{id:"what",type:"text",title:"What I noticed",tone:l.severity==="high"?"danger":"warn",data:{body:l.message}},{id:"rec",type:"recommendation",data:{title:"Worth a look",reason:"I haven't changed anything. Tell me if you want me to dig deeper."}}],actions:[{id:`ask:Explain what you noticed about: ${l.title}. Is it safe, and what should I do?`,label:"Show me why",kind:"primary"},{id:"dismiss",label:"Ignore once",kind:"ghost"}],summary:`${l.title}. I put what I found on the stage.`});c&&(t({t:"stage",stage:c}),t({t:"say",text:c.summary,tag:"heads-up",stageId:c.id,stageLabel:c.title}),t({t:"concern",ms:12e3}))}),o.on("weather_card",l=>{const c=ta({id:"weather",title:`Weather · ${l.city}`,blocks:[{id:"w",type:"weather",data:l}]});c&&t({t:"stage",stage:c})});const a=window.setInterval(()=>i(),1e3);return()=>{window.clearInterval(a),o.close()}},[]);const s=K.useCallback(o=>{var l;const a=o.trim();a&&(t({t:"user",text:a}),(l=e.current)==null||l.emit("chat",{message:a,think:!1}))},[]),r=K.useMemo(()=>({send:s,syncUnlock:o=>{var a;return(a=e.current)==null?void 0:a.emit("sync_unlock",{passphrase:o})},syncNow:()=>{var o;return(o=e.current)==null?void 0:o.emit("sync_now")},pause:o=>{var a;return(a=e.current)==null?void 0:a.emit("privacy_pause",{paused:o})},setSource:(o,a)=>{var l;return(l=e.current)==null?void 0:l.emit("privacy_source",{name:o,enabled:a})},ackNudge:o=>{var a;(a=e.current)==null||a.emit("nudge_ack",{id:o}),t({t:"nudge",v:null})},answerApproval:(o,a)=>{a.ack({approved:o}),t({t:"approval",v:null})},openStage:o=>t({t:"open",id:o}),pinStage:()=>t({t:"pin"}),clearStage:()=>t({t:"clearStage"}),stageAction:(o,a)=>{var l;return(l=e.current)==null?void 0:l.emit("stage_action",{stage:o,action:a})},dispatch:t}),[s]);return{state:n,api:r}}const Nb={window:"windows",browser:"browser",process:"programs",screen:"screen"};function Fb(){const n="(max-width: 819px)",[t,e]=K.useState(()=>window.matchMedia(n).matches);return K.useEffect(()=>{const i=window.matchMedia(n),s=()=>e(i.matches);return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]),t}function Ob(){var H;const{state:n,api:t}=Ub(),e=Fb(),[i,s]=K.useState("chat"),[r,o]=K.useState(!1),[a,l]=K.useState(!1),[c,u]=K.useState(Cx),[h,d,m]=Nx(),[g,_]=K.useState(!1),p=K.useRef(Date.now()),f=()=>{p.current=Date.now()},E=()=>{f(),_(!0)},x=j=>{Px(j),u(j)},M=Ib(n),P=K.useMemo(()=>n.stages.find(j=>j.id===n.activeStageId)??null,[n.stages,n.activeStageId]),R=n.status!=="idle"||M==="alert"||M==="speaking",w=Dx(c,!!P||R),D=Object.entries(n.privacy.sources).filter(([,j])=>j).map(([j])=>Nb[j]??j),J=n.privacy.watching&&!n.privacy.paused,v=n.privacy.paused?"Paused":D.length?`Watching: ${D.join(", ")}`:"Not watching";K.useEffect(()=>{P&&i!=="stage"&&l(!0)},[P==null?void 0:P.id]),K.useEffect(()=>{i==="stage"&&l(!1)},[i]),K.useEffect(()=>{n.messages.length&&E()},[n.messages.length]),K.useEffect(()=>{if(!g)return;const j=window.setInterval(()=>{var $;!((($=document.activeElement)==null?void 0:$.closest(".composer"))&&document.activeElement.value)&&!n.approval&&Date.now()-p.current>2e4&&_(!1)},2e3);return()=>window.clearInterval(j)},[g,n.approval]);const T=j=>{t.openStage(j),s("stage")},G=(j,B)=>{B.id.startsWith("ask:")?(t.send(B.id.slice(4)),s("chat")):B.id==="dismiss"?t.clearStage():t.stageAction(j,B.id)},N=`Senses: ${D.filter(j=>j!=="screen").join(" · ")||"none"}  |  Screen: ${n.privacy.sources.screen?"on":"off"}`;return b.jsxs("div",{className:"app","data-hud":w?"on":"off","data-rail":e||g?"open":"closed",children:[b.jsxs("header",{className:"topbar",children:[b.jsx("span",{className:"wordmark",children:"VANTA"}),b.jsxs("div",{className:"top-right",children:[b.jsxs("span",{className:`pill ${J?"on":""}`,role:"status",children:[b.jsx("span",{className:"dot"}),b.jsx("span",{className:"label-long",children:v}),b.jsx("span",{className:"label-short",style:{display:e?"inline":"none"},children:n.privacy.paused?"Paused":"Watching"})]}),b.jsx("button",{className:"btn",onClick:()=>t.pause(!n.privacy.paused),children:n.privacy.paused?"Resume":"Pause"}),b.jsx("button",{className:"btn icon","aria-label":"Settings",onClick:()=>o(j=>!j),children:b.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#8A9AB8",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[b.jsx("path",{d:"M4 7h10M18 7h2M4 17h2M10 17h10"}),b.jsx("circle",{cx:"16",cy:"7",r:"2"}),b.jsx("circle",{cx:"8",cy:"17",r:"2"})]})})]})]}),b.jsxs("aside",{className:"rail","data-hidden":e&&i!=="chat",onPointerDown:f,onKeyDown:f,children:[e?b.jsx("div",{className:`state-label ${M}`,children:_d[M]}):null,b.jsx("div",{className:"status-line",children:n.statusText}),b.jsx(Ox,{messages:n.messages,onOpenStage:T}),b.jsx(Bx,{autoFocus:!e,onActivity:f,onSend:t.send,disabled:n.conn!=="online",onVoiceError:j=>t.dispatch({t:"error",message:j})}),b.jsx("div",{className:"senses",children:N})]}),b.jsx("div",{style:{gridArea:e?"main":"stage",display:e&&i!=="stage"?"none":"flex",minHeight:0,minWidth:0},children:b.jsx(NT,{stage:P,history:n.stages,pinned:n.pinned,sphere:M,amplitude:M==="speaking"?.5:0,low:h==="low",caption:w&&((H=n.tel)!=null&&H.app)?`Watching with you: ${n.tel.app}`:void 0,footer:w&&!e?b.jsx(wx,{tel:n.tel}):null,onOpen:t.openStage,onPin:t.pinStage,onClear:t.clearStage,onAction:G})}),!e&&!g?b.jsx("button",{className:"dock",onClick:E,"aria-label":"Open chat",children:b.jsx("span",{children:"Ask VANTA…"})}):null,e&&b.jsxs("nav",{className:"tabs",role:"tablist",children:[b.jsx("button",{role:"tab","aria-selected":i==="chat",onClick:()=>s("chat"),children:"Chat"}),b.jsxs("button",{role:"tab","aria-selected":i==="stage",onClick:()=>s("stage"),children:["Stage",a?b.jsx("span",{className:"badge","aria-label":"new"}):null]})]}),n.conn==="offline"&&b.jsx("div",{className:"offline-bar",role:"status",children:"Reconnecting… I'll be right back."}),b.jsx(gT,{open:r,privacy:n.privacy,onSource:t.setSource,onClose:()=>o(!1),sync:n.sync,onUnlock:t.syncUnlock,onSyncNow:t.syncNow,layout:c,onLayout:x,fx:h,fxAuto:m,onFx:d}),b.jsx(hT,{nudge:n.nudge,onAck:t.ackNudge}),b.jsx(dT,{approval:n.approval,onAnswer:t.answerApproval})]})}mp.createRoot(document.getElementById("root")).render(b.jsx(gp.StrictMode,{children:b.jsx(Ob,{})}));
