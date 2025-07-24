import{x as E,j as e,A,y as L,b as B}from"./index-d63ee538.js";import{r as i,R as U}from"./vendor-021dee49.js";import{E as Y}from"./EyeSlashIcon-3abbdbae.js";import{E as W}from"./EyeIcon-6ff4a41f.js";function J({title:p,titleId:g,...x},h){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:h,"aria-labelledby":g},x),p?i.createElement("title",{id:g},p):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"}))}const K=i.forwardRef(J),Q=K,X=async()=>{try{const[p,g,x,h]=await Promise.all([E(()=>import("./default-2043f5ca.js"),[]),E(()=>import("./modern-ad3a2ca6.js"),[]),E(()=>import("./playful-1ed0ba34.js"),[]),E(()=>import("./elegant-195ff9bd.js"),[])]);return[p.default,g.default,x.default,h.default]}catch(p){return console.error("Error loading templates:",p),Z()}},Z=()=>[{id:"default",name:"Default App Design",description:"Clean and consistent with the main app design",isDefault:!0,category:"minimal",tags:["clean","modern","app-style"],html:`<div class="default-profile">
        <div class="profile-header">
          <div class="profile-image-wrapper">
            <img src="{image}" alt="{name}" class="profile-image" onerror="this.src='https://via.placeholder.com/200x200?text=🐕'">
          </div>
          <div class="profile-info">
            <h1 class="profile-name">{name}</h1>
            <div class="profile-details">
              <span class="detail-item">{breed}</span>
              <span class="detail-separator">•</span>
              <span class="detail-item">{age} months old</span>
              <span class="detail-separator">•</span>
              <span class="detail-item">{size} size</span>
            </div>
          </div>
        </div>
        <div class="profile-content">
          <div class="content-section">
            <h2 class="section-title">About {name}</h2>
            <p class="section-text">{description}</p>
          </div>
          <div class="content-section">
            <h2 class="section-title">Personality Traits</h2>
            <div class="traits-grid">
              <div class="trait-item">
                <div class="trait-header">
                  <span class="trait-label">Friendly</span>
                  <span class="trait-score">{personality.friendly}/5</span>
                </div>
                <div class="trait-bar">
                  <div class="trait-fill" style="width: calc({personality.friendly} * 20%)"></div>
                </div>
              </div>
              <div class="trait-item">
                <div class="trait-header">
                  <span class="trait-label">Energetic</span>
                  <span class="trait-score">{personality.energetic}/5</span>
                </div>
                <div class="trait-bar">
                  <div class="trait-fill" style="width: calc({personality.energetic} * 20%)"></div>
                </div>
              </div>
              <div class="trait-item">
                <div class="trait-header">
                  <span class="trait-label">Social</span>
                  <span class="trait-score">{personality.social}/5</span>
                </div>
                <div class="trait-bar">
                  <div class="trait-fill" style="width: calc({personality.social} * 20%)"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-section">
            <h2 class="section-title">Health Information</h2>
            <div class="health-status {medicalInfo.vaccinated ? 'healthy' : 'pending'}">
              <div class="health-icon">
                {medicalInfo.vaccinated ? '✅' : '⏳'}
              </div>
              <div class="health-text">
                {medicalInfo.vaccinated ? 'Fully Vaccinated' : 'Vaccination Pending'}
              </div>
            </div>
          </div>
        </div>
      </div>`,css:`.default-profile {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background: #f9fafb;
        min-height: 100vh;
        color: #111827;
      }
      
      .profile-header {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      
      .profile-image-wrapper {
        flex-shrink: 0;
      }
      
      .profile-image {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #e5e7eb;
      }
      
      .profile-info {
        flex: 1;
      }
      
      .profile-name {
        font-size: 2.25rem;
        font-weight: 700;
        color: #111827;
        margin: 0 0 1rem 0;
        line-height: 1.2;
      }
      
      .profile-details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.125rem;
        color: #6b7280;
      }
      
      .detail-item {
        font-weight: 500;
      }
      
      .detail-separator {
        color: #d1d5db;
      }
      
      .profile-content {
        display: grid;
        gap: 2rem;
      }
      
      .content-section {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #111827;
        margin: 0 0 1.5rem 0;
        border-bottom: 2px solid #f3f4f6;
        padding-bottom: 0.5rem;
      }
      
      .section-text {
        font-size: 1rem;
        line-height: 1.6;
        color: #4b5563;
        margin: 0;
      }
      
      .traits-grid {
        display: grid;
        gap: 1.5rem;
      }
      
      .trait-item {
        display: grid;
        gap: 0.75rem;
      }
      
      .trait-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .trait-label {
        font-weight: 500;
        color: #374151;
        font-size: 1rem;
      }
      
      .trait-score {
        font-weight: 600;
        color: #3b82f6;
        font-size: 0.875rem;
      }
      
      .trait-bar {
        height: 8px;
        background: #f3f4f6;
        border-radius: 4px;
        overflow: hidden;
      }
      
      .trait-fill {
        height: 100%;
        background: linear-gradient(90deg, #3b82f6, #1d4ed8);
        border-radius: 4px;
        transition: width 0.5s ease;
      }
      
      .health-status {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 8px;
        border: 2px solid;
      }
      
      .health-status.healthy {
        background: #f0fdf4;
        border-color: #22c55e;
        color: #166534;
      }
      
      .health-status.pending {
        background: #fefce8;
        border-color: #eab308;
        color: #a16207;
      }
      
      .health-icon {
        font-size: 1.5rem;
      }
      
      .health-text {
        font-weight: 500;
        font-size: 1rem;
      }
      
      @media (max-width: 768px) {
        .default-profile {
          padding: 1rem;
        }
        
        .profile-header {
          flex-direction: column;
          text-align: center;
          gap: 1.5rem;
        }
        
        .profile-name {
          font-size: 1.875rem;
        }
        
        .profile-details {
          justify-content: center;
          flex-wrap: wrap;
        }
      }`}],ne=({initialHtml:p="",initialCss:g="",onSave:x,requiredFields:h=[],type:ee="dog"})=>{const[o,R]=i.useState(p),[u,k]=i.useState(g),[w,F]=i.useState(!1),[I,D]=i.useState(!1),[H,T]=i.useState(!1),[S,_]=i.useState([]),[V,P]=i.useState(!0),b=U.useMemo(()=>{const s=localStorage.getItem("currentDogData");if(s)try{const t=JSON.parse(s);return{name:t.name||"Buddy",breed:t.breed||"Golden Retriever",age:t.age||24,size:t.size||"large",description:t.description||"A friendly and energetic dog who loves to play fetch and swim.",image:t.image||(t.gallery&&t.gallery.length>0?t.gallery[0]:"https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face"),gallery:t.gallery||[],personality:t.personality||{friendly:5,energetic:4,social:5},medicalInfo:t.medicalInfo||{vaccinated:!0}}}catch(t){console.error("Error parsing dog data:",t)}return{name:"Buddy",breed:"Golden Retriever",age:24,size:"large",description:"A friendly and energetic dog who loves to play fetch and swim. Great with kids and other dogs.",image:"https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",gallery:["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face","https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop&crop=face"],personality:{friendly:5,energetic:4,social:5},medicalInfo:{vaccinated:!0}}},[]),j=(s,t=b)=>{var f,N,v;let a=s;a=a.replace(/{name}/g,t.name||""),a=a.replace(/{breed}/g,t.breed||""),a=a.replace(/{age}/g,t.age||""),a=a.replace(/{size}/g,t.size||""),a=a.replace(/{description}/g,t.description||"No description available"),a=a.replace(/{image}/g,t.image||y);const m=t.gallery||[];for(let r=0;r<=10;r++){const l=new RegExp(`\\{gallery\\[${r}\\]\\}`,"g");a=a.replace(l,m[r]||"")}for(let r=0;r<=10;r++){const l=new RegExp(`\\{gallery\\.${r}\\}`,"g");a=a.replace(l,m[r]||"")}return a=a.replace(/{gallery}/g,m[0]||""),t.personality&&(a=a.replace(/{personality\.friendly}/g,t.personality.friendly||3),a=a.replace(/{personality\.energetic}/g,t.personality.energetic||3),a=a.replace(/{personality\.social}/g,t.personality.social||3)),t.medicalInfo&&(a=a.replace(/{medicalInfo\.vaccinated}/g,t.medicalInfo.vaccinated||!1)),a=a.replace(/{medicalInfo\.vaccinated \? '([^']+)' : '([^']+)'}/g,(r,l,c)=>{var d;return(d=t.medicalInfo)!=null&&d.vaccinated?l:c}),a=a.replace(/{personality\.friendly >= (\d+) \? '([^']+)' : '([^']*)'}/g,(r,l,c,d)=>{var n;return(((n=t.personality)==null?void 0:n.friendly)||0)>=parseInt(l)?c:d}),a=a.replace(/{personality\.energetic >= (\d+) \? '([^']+)' : '([^']*)'}/g,(r,l,c,d)=>{var n;return(((n=t.personality)==null?void 0:n.energetic)||0)>=parseInt(l)?c:d}),a=a.replace(/{personality\.social >= (\d+) \? '([^']+)' : '([^']*)'}/g,(r,l,c,d)=>{var n;return(((n=t.personality)==null?void 0:n.social)||0)>=parseInt(l)?c:d}),a=a.replace(/calc\(\{personality\.friendly\} \* 20%\)/g,`${(((f=t.personality)==null?void 0:f.friendly)||0)*20}%`),a=a.replace(/calc\(\{personality\.energetic\} \* 20%\)/g,`${(((N=t.personality)==null?void 0:N.energetic)||0)*20}%`),a=a.replace(/calc\(\{personality\.social\} \* 20%\)/g,`${(((v=t.personality)==null?void 0:v.social)||0)*20}%`),a};i.useEffect(()=>{(async()=>{try{P(!0);const t=await X();_(t)}catch(t){console.error("Error loading templates:",t),_([])}finally{P(!1)}})()},[]);const M=s=>{R(s.html),k(s.css),T(!1)},O=()=>{window.history.back()},q=()=>{const s=S.find(t=>t.isDefault);s&&(R(s.html),k(s.css))},G=async()=>{D(!0);try{await x({html:o,css:u,enabled:!0})}catch(s){console.error("Error saving:",s)}finally{D(!1)}},C=(()=>h.filter(t=>{if(t.startsWith("gallery")){if(!b.gallery||!Array.isArray(b.gallery)||b.gallery.length===0)return!1;if(t.includes("[")&&t.includes("]")){const $=t.match(/\[(\d+)\]/);if($&&parseInt($[1])>=b.gallery.length)return!1}}const a=t.replace(/\./g,"\\.").replace(/\[/g,"\\[").replace(/\]/g,"\\]");if(o.includes(`{${t}}`))return!1;const m=`\\{[^}]*${a}[^}]*\\?[^}]*\\}`;if(new RegExp(m,"g").test(o))return!1;const N=`calc\\(\\s*\\{\\s*${a}\\s*\\}`,v=new RegExp(N,"g");if(v.test(u)||v.test(o))return!1;const r=`width:\\s*calc\\(\\s*\\{\\s*${a}\\s*\\}`;if(new RegExp(r,"g").test(o))return!1;const c=`class="[^"]*\\{[^}]*${a}[^}]*\\?[^}]*\\}[^"]*"`;if(new RegExp(c,"g").test(o))return!1;const n=a,z=new RegExp(n,"g");return!(z.test(o)||z.test(u))}))();return H?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("button",{onClick:()=>T(!1),className:"inline-flex items-center mb-6 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 bg-white rounded-lg shadow-sm hover:shadow-md transition-all",children:[e.jsx(A,{className:"h-4 w-4 mr-2"}),"Back to Editor"]}),e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Choose Your Profile Template"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Select a design template that best represents your dog's personality and style"})]}),V?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Loading templates..."})]}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:S.map(s=>{var m;const t=j(s.html),a=j(s.css);return e.jsxs("div",{className:`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${s.isDefault?"ring-4 ring-blue-500 ring-opacity-50":""}`,children:[s.isDefault&&e.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-center",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-semibold",children:"Default App Design"})]})}),e.jsxs("div",{className:"h-72 overflow-hidden bg-gray-100 relative",children:[e.jsx("iframe",{srcDoc:`
                          <html>
                            <head>
                              <style>${a}</style>
                            </head>
                            <body style="margin:0;transform:scale(0.25);transform-origin:top left;width:400%;">${t}</body>
                          </html>
                        `,className:"w-full h-full border-none pointer-events-none",title:s.name}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:s.name}),e.jsx("p",{className:"text-gray-600 mb-4",children:s.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(m=s.tags)==null?void 0:m.map(f=>e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium",children:f},f))}),e.jsxs("button",{onClick:()=>M(s),className:"w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105",children:[e.jsx(B,{className:"h-5 w-5 inline mr-2"}),"Use This Template"]})]})]},s.id)})}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-100",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:"📝 Required Variables"}),e.jsx("p",{className:"text-gray-600 text-lg",children:"Your custom profile must include these placeholders to work properly"})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:h.map(s=>e.jsx("code",{className:"px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-xl text-sm font-mono font-semibold text-center border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-200",children:`{${s}}`},s))})]})]})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[e.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-6 mb-8",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[e.jsxs("button",{onClick:O,className:"inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all",children:[e.jsx(A,{className:"h-4 w-4 mr-2"}),"Back to App Design"]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Custom Profile Editor"}),e.jsx("p",{className:"text-gray-600 mt-1",children:"Design a unique profile for your dog"})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-3",children:[e.jsxs("button",{onClick:()=>T(!0),className:"inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all",children:[e.jsx(B,{className:"h-4 w-4 mr-2"}),"Choose Template"]}),e.jsxs("button",{onClick:q,className:"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all",children:[e.jsx(L,{className:"h-4 w-4 mr-2"}),"Reset to Default"]}),e.jsxs("button",{onClick:()=>F(!w),className:"inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all",children:[w?e.jsx(Y,{className:"h-4 w-4 mr-2"}):e.jsx(W,{className:"h-4 w-4 mr-2"}),w?"Edit":"Preview"]}),e.jsx("button",{onClick:G,disabled:I||C.length>0,className:"inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:I?"Saving...":"Save Profile"})]})]})}),C.length>0&&e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:[e.jsx("h4",{className:"text-red-800 font-medium mb-2",children:"⚠️ Missing Required Fields"}),e.jsx("p",{className:"text-red-700 mb-3",children:"Your template must include these variables to work properly:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:C.map(s=>e.jsx("code",{className:"px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-mono",children:`{${s}}`},s))})]}),e.jsx("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden mb-6",children:w?e.jsx("div",{className:"h-96",children:e.jsx("iframe",{srcDoc:`
                  <html>
                    <head>
                      <style>${j(u)}</style>
                    </head>
                    <body style="margin:0;">${j(o)}</body>
                  </html>
                `,className:"w-full h-full border-none",title:"Profile Preview"})}):e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 h-96",children:[e.jsxs("div",{className:"border-r border-gray-200",children:[e.jsx("div",{className:"p-4 border-b border-gray-200 bg-gray-50",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{className:"h-5 w-5 text-gray-600"}),e.jsx("h3",{className:"font-semibold text-gray-900",children:"HTML Template"})]})}),e.jsx("textarea",{value:o,onChange:s=>R(s.target.value),className:"w-full h-full p-4 font-mono text-sm resize-none border-none focus:outline-none",placeholder:"Enter your HTML template here..."})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-4 border-b border-gray-200 bg-gray-50",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-600 font-bold",children:"CSS"}),e.jsx("h3",{className:"font-semibold text-gray-900",children:"Styles"})]})}),e.jsx("textarea",{value:u,onChange:s=>k(s.target.value),className:"w-full h-full p-4 font-mono text-sm resize-none border-none focus:outline-none",placeholder:"Enter your CSS styles here..."})]})]})})]})})};export{ne as C};
