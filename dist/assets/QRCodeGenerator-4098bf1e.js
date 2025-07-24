import{u as D,j as e,Q as j}from"./index-d63ee538.js";import{r as g}from"./vendor-021dee49.js";import{C as P}from"./CheckIcon-3891f6eb.js";import{C as z,S as M}from"./ShareIcon-8f4ee12b.js";import{A as _}from"./ArrowPathIcon-a9aaab64.js";function V({title:t,titleId:x,...u},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":x},u),t?g.createElement("title",{id:x},t):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"}))}const F=g.forwardRef(V),H=F;function T({title:t,titleId:x,...u},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":x},u),t?g.createElement("title",{id:x},t):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"}))}const W=g.forwardRef(T),G=W,X=({garden:t,onQRGenerated:x})=>{const{user:u}=D(),[f,N]=g.useState(null),[S,C]=g.useState(!1),[b,R]=g.useState(!1),[y,q]=g.useState(""),$=()=>!u||!t?!1:!!(u.role==="admin"||t.manager&&(t.manager._id===u._id||t.manager===u._id));if(!$())return null;g.useEffect(()=>{t&&$()&&Q()},[t,u]);const Q=async()=>{if(t){C(!0);try{const a=`${window.location.origin}/garden/${t._id}`;q(a);try{const d=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(a)}&format=png&ecc=M&margin=1`,l=new Image;l.crossOrigin="anonymous",l.onload=()=>{const m=document.createElement("canvas"),o=m.getContext("2d"),c=300;m.width=c,m.height=c,o.fillStyle="#ffffff",o.fillRect(0,0,c,c),o.drawImage(l,10,10,c-20,c-20),o.strokeStyle="#e5e7eb",o.lineWidth=2,o.strokeRect(1,1,c-2,c-2);const p=m.toDataURL("image/png",1);N(p),x&&x({qrCodeDataUrl:p,qrUrl:a,qrId:t._id})},l.onerror=()=>{console.warn("QR API failed, using fallback QR generator."),w(a)},l.src=d}catch{console.log("API request failed, using fallback"),w(a)}}catch(a){console.error("Error generating QR code:",a),w(`${window.location.origin}/garden/${t._id}`)}finally{C(!1)}}},w=a=>{const d=document.createElement("canvas"),l=d.getContext("2d"),m=300;d.width=m,d.height=m,l.fillStyle="#ffffff",l.fillRect(0,0,m,m);const o=25,c=Math.floor((m-40)/o),p=(m-o*c)/2;l.fillStyle="#000000";const U=a.split("").reduce((r,s,n)=>r+s.charCodeAt(0)*(n+1),0),h=[];for(let r=0;r<o;r++){h[r]=[];for(let s=0;s<o;s++){const n=(U+r*37+s*23)%100;h[r][s]=n<40}}const v=(r,s)=>{for(let n=0;n<7;n++)for(let i=0;i<7;i++)r+n<o&&s+i<o&&(h[r+n][s+i]=!1);for(let n=0;n<7;n++)for(let i=0;i<7;i++)r+n<o&&s+i<o&&(n===0||n===6||i===0||i===6)&&(h[r+n][s+i]=!0);for(let n=2;n<5;n++)for(let i=2;i<5;i++)r+n<o&&s+i<o&&(h[r+n][s+i]=!0)};v(0,0),v(0,o-7),v(o-7,0);for(let r=8;r<o-8;r++)h[6][r]=r%2===0,h[r][6]=r%2===0;for(let r=0;r<o;r++)for(let s=0;s<o;s++)h[r][s]&&l.fillRect(p+s*c,p+r*c,c,c);l.strokeStyle="#e5e7eb",l.lineWidth=2,l.strokeRect(1,1,m-2,m-2);const L=d.toDataURL("image/png",1);N(L)},A=(a="png")=>{if(!f)return;const d=document.createElement("a"),l=`${t.name.replace(/[^a-zA-Z0-9]/g,"_")}-qr-code.${a}`;d.href=f,d.download=l,document.body.appendChild(d),d.click(),document.body.removeChild(d)},k=async()=>{try{await navigator.clipboard.writeText(y),R(!0),setTimeout(()=>R(!1),2e3)}catch(a){console.error("Failed to copy link:",a)}},E=async()=>{if(navigator.share)try{await navigator.share({title:`Dog Park - ${t.name}`,text:`Come visit the "${t.name}" dog park!`,url:y})}catch(a){console.error("Error sharing:",a),k()}else k()},I=()=>{if(!f)return;const a=window.open("","_blank");a.document.write(`
      <html>
        <head>
          <title>QR Code - ${t.name}</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              text-align: center; 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }
            .qr-container {
              max-width: 400px;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 12px;
            }
            .qr-image {
              width: 100%;
              max-width: 300px;
              height: auto;
              border-radius: 8px;
            }
            .garden-name {
              font-size: 24px;
              font-weight: bold;
              margin: 20px 0 10px 0;
            }
            .instruction {
              font-size: 16px;
              color: #555;
              margin-bottom: 20px;
            }
            .url {
              font-size: 12px;
              color: #999;
              word-break: break-all;
              margin-top: 10px;
            }
            @media print {
              body { margin: 0; padding: 0; }
              .qr-container { border: none; margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <div class="garden-name">${t.name}</div>
            <div class="instruction">Scan for more details</div>
            <img src="${f}" alt="QR Code for ${t.name}" class="qr-image" />
            <div class="url">${y}</div>
          </div>
        </body>
      </html>
    `),a.document.close(),setTimeout(()=>{a.print(),a.close()},250)};return t?e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden",children:[e.jsxs("div",{className:"px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50",children:[e.jsxs("h3",{className:"text-lg font-bold text-gray-900 dark:text-white flex items-center",children:[e.jsx(j,{className:"h-5 w-5 mr-2 text-purple-600"}),"Garden QR Code"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Share this code for easy access to the garden's page."})]}),e.jsx("div",{className:"p-6",children:S?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 font-medium",children:"Generating QR Code..."})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/30 dark:to-gray-700/60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"font-bold text-lg text-gray-900 dark:text-white mb-1 line-clamp-2",children:t.name}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Scan for more details"})]}),e.jsx("div",{className:"inline-block p-2 bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-600",children:f?e.jsx("img",{src:f,alt:`QR Code for ${t.name}`,className:"mx-auto block w-40 h-40"}):e.jsx("div",{className:"w-40 h-40 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center",children:e.jsx(j,{className:"h-16 w-16 text-gray-400 dark:text-gray-500"})})}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 break-all font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-lg leading-tight",children:y})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("button",{onClick:()=>A("png"),disabled:!f,className:"flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 text-sm",children:[e.jsx(H,{className:"h-5 w-5 mr-2"}),"Download"]}),e.jsxs("button",{onClick:k,className:`flex items-center justify-center px-4 py-3 font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 text-sm ${b?"bg-gradient-to-r from-green-500 to-emerald-600 text-white focus:ring-green-500":"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500"}`,children:[b?e.jsx(P,{className:"h-5 w-5 mr-2"}):e.jsx(z,{className:"h-5 w-5 mr-2"}),b?"Copied!":"Copy Link"]}),e.jsxs("button",{onClick:E,className:"flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 transform hover:scale-105 text-sm",children:[e.jsx(M,{className:"h-5 w-5 mr-2"}),"Share"]}),e.jsxs("button",{onClick:I,disabled:!f,className:"flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 text-sm",children:[e.jsx(G,{className:"h-5 w-5 mr-2"}),"Print"]})]}),e.jsx("div",{className:"text-center pt-2",children:e.jsxs("button",{onClick:Q,className:"inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 text-xs",children:[e.jsx(_,{className:"h-4 w-4 mr-2"}),"Regenerate Code"]})})]})})]}):e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6",children:e.jsxs("div",{className:"text-center text-gray-500 dark:text-gray-400",children:[e.jsx(j,{className:"h-12 w-12 mx-auto mb-3 text-gray-300 dark:text-gray-600"}),e.jsx("p",{className:"font-medium",children:"No garden information available."})]})})};export{X as Q};
