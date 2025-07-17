const n="elegant",e="Elegant Minimal",a="Clean and sophisticated design",l=!1,i="elegant",t=["elegant","minimal","sophisticated","serif"],r=["name","breed","age","size","description","image","gallery","gallery[0]","gallery[1]","personality.friendly","personality.energetic","personality.social","medicalInfo.vaccinated"],s=`<div class="elegant-profile">
  <header class="profile-header">
    <div class="image-container">
      <img src="{image}" alt="{name}" class="profile-photo" onerror="this.src='https://via.placeholder.com/200x200?text=🐕'">
    </div>
    <div class="header-content">
      <h1 class="dog-name">{name}</h1>
      <p class="dog-subtitle">{breed} • {age} months • {size} size</p>
      <div class="divider"></div>
    </div>
  </header>
  
  <main class="profile-content">
    <section class="about-section">
      <h2 class="section-heading">About</h2>
      <p class="about-text">{description}</p>
    </section>
    
    <section class="gallery-section">
      <h2 class="section-heading">Gallery</h2>
      <div class="elegant-gallery">
        <img src="{gallery[0]}" alt="{name} photo 1" class="gallery-item" onerror="this.style.display='none'">
        <img src="{gallery[1]}" alt="{name} photo 2" class="gallery-item" onerror="this.style.display='none'">
        <img src="{gallery[2]}" alt="{name} photo 3" class="gallery-item" onerror="this.style.display='none'">
      </div>
    </section>
    
    <section class="personality-section">
      <h2 class="section-heading">Personality Traits</h2>
      <div class="traits-container">
        <div class="trait">
          <span class="trait-label">Friendly</span>
          <div class="trait-bar">
            <div class="trait-progress" style="width: calc({personality.friendly} * 20%)"></div>
          </div>
          <span class="trait-number">{personality.friendly}</span>
        </div>
        <div class="trait">
          <span class="trait-label">Energetic</span>
          <div class="trait-bar">
            <div class="trait-progress" style="width: calc({personality.energetic} * 20%)"></div>
          </div>
          <span class="trait-number">{personality.energetic}</span>
        </div>
        <div class="trait">
          <span class="trait-label">Social</span>
          <div class="trait-bar">
            <div class="trait-progress" style="width: calc({personality.social} * 20%)"></div>
          </div>
          <span class="trait-number">{personality.social}</span>
        </div>
      </div>
    </section>
    
    <section class="health-section">
      <h2 class="section-heading">Health Information</h2>
      <div class="health-indicator {medicalInfo.vaccinated ? 'vaccinated' : 'unvaccinated'}">
        <div class="health-icon">{medicalInfo.vaccinated ? '✓' : '○'}</div>
        <span class="health-label">{medicalInfo.vaccinated ? 'Vaccinated' : 'Vaccination Required'}</span>
      </div>
    </section>
  </main>
</div>`,o=`.elegant-profile {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Georgia', serif;
  background: #fafafa;
  min-height: 100vh;
  color: #2c3e50;
}

.profile-header {
  text-align: center;
  margin-bottom: 4rem;
  background: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.image-container {
  margin-bottom: 2rem;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ecf0f1;
  filter: grayscale(10%);
}

.dog-name {
  font-size: 2.5rem;
  font-weight: 300;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  letter-spacing: 1px;
}

.dog-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 0 0 1.5rem 0;
  font-style: italic;
}

.divider {
  width: 60px;
  height: 2px;
  background: #3498db;
  margin: 0 auto;
}

.profile-content {
  display: grid;
  gap: 3rem;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 400;
  color: #2c3e50;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.about-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.gallery-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.elegant-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(20%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.gallery-item:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.personality-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.traits-container {
  display: grid;
  gap: 1.5rem;
}

.trait {
  display: grid;
  grid-template-columns: 100px 1fr 30px;
  align-items: center;
  gap: 1rem;
}

.trait-label {
  font-weight: 500;
  color: #2c3e50;
}

.trait-bar {
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.trait-progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 4px;
  transition: width 0.8s ease;
}

.trait-number {
  font-weight: 600;
  color: #3498db;
  text-align: center;
}

.health-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.health-indicator {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  border: 2px solid;
}

.health-indicator.vaccinated {
  border-color: #27ae60;
  background: #d5f4e6;
  color: #27ae60;
}

.health-indicator.unvaccinated {
  border-color: #e67e22;
  background: #fdf2e9;
  color: #e67e22;
}

.health-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.health-label {
  font-weight: 500;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .elegant-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .gallery-item {
    height: 150px;
  }
}`,d={id:n,name:e,description:a,isDefault:!1,category:i,tags:t,requiredFields:r,html:s,css:o};export{i as category,o as css,d as default,a as description,s as html,n as id,l as isDefault,e as name,r as requiredFields,t as tags};
