const n="default",e="Default App Design",i="Clean and consistent with the main app design",o=!0,a="minimal",t=["clean","modern","app-style"],s=["name","breed","age","size","description","image","gallery","gallery[0]","gallery[1]","personality.friendly","personality.energetic","personality.social","medicalInfo.vaccinated"],r=`<div class="default-profile">
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

    <div class="content-section gallery-section">
      <h2 class="section-title">Photo Gallery</h2>
      <div class="gallery-grid">
        <img src="{gallery[0]}" alt="{name} photo 1" class="gallery-image" onerror="this.style.display='none'">
        <img src="{gallery[1]}" alt="{name} photo 2" class="gallery-image" onerror="this.style.display='none'">
        <img src="{gallery[2]}" alt="{name} photo 3" class="gallery-image" onerror="this.style.display='none'">
      </div>
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
</div>`,l=`.default-profile {
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

.gallery-section {
  margin: 2rem 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.gallery-image:hover {
  transform: scale(1.02);
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
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .gallery-image {
    height: 150px;
  }
}`,d={id:n,name:e,description:i,isDefault:!0,category:a,tags:t,requiredFields:s,html:r,css:l};export{a as category,l as css,d as default,i as description,r as html,n as id,o as isDefault,e as name,s as requiredFields,t as tags};
