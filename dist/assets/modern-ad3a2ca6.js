const n="modern",a="Modern Card",e="Clean and modern design with cards",o=!1,s="modern",i=["modern","cards","gradient","professional"],r=["name","breed","age","size","description","image","gallery","gallery[0]","gallery[1]","personality.friendly","personality.energetic","personality.social","medicalInfo.vaccinated"],t=`<div class="profile-container">
  <div class="header-card">
    <div class="profile-image-container">
      <img src="{image}" alt="{name}" class="profile-image" onerror="this.src='https://via.placeholder.com/150x150?text=🐕'">
      <div class="status-badge">Available for playdates!</div>
    </div>
    <div class="header-info">
      <h1 class="dog-name">{name}</h1>
      <p class="breed-info">{breed} • {age} months old</p>
      <p class="size-badge">{size} size</p>
    </div>
  </div>
  
  <div class="content-grid">
    <div class="info-card">
      <h2>About Me</h2>
      <p class="description">{description}</p>
    </div>
    
    <div class="info-card gallery-card">
      <h2>My Photos</h2>
      <div class="photo-gallery">
        <img src="{gallery[0]}" alt="{name} photo 1" class="gallery-photo" onerror="this.style.display='none'">
        <img src="{gallery[1]}" alt="{name} photo 2" class="gallery-photo" onerror="this.style.display='none'">
        <img src="{gallery[2]}" alt="{name} photo 3" class="gallery-photo" onerror="this.style.display='none'">
      </div>
    </div>
    
    <div class="info-card">
      <h2>My Personality</h2>
      <div class="personality-grid">
        <div class="trait-item">
          <span class="trait-icon">🐕</span>
          <span class="trait-name">Friendly</span>
          <div class="trait-rating">
            <div class="stars">
              <span class="star {personality.friendly >= 1 ? 'filled' : ''}">★</span>
              <span class="star {personality.friendly >= 2 ? 'filled' : ''}">★</span>
              <span class="star {personality.friendly >= 3 ? 'filled' : ''}">★</span>
              <span class="star {personality.friendly >= 4 ? 'filled' : ''}">★</span>
              <span class="star {personality.friendly >= 5 ? 'filled' : ''}">★</span>
            </div>
            <span class="trait-value">{personality.friendly}/5</span>
          </div>
        </div>
        <div class="trait-item">
          <span class="trait-icon">⚡</span>
          <span class="trait-name">Energetic</span>
          <div class="trait-rating">
            <div class="stars">
              <span class="star {personality.energetic >= 1 ? 'filled' : ''}">★</span>
              <span class="star {personality.energetic >= 2 ? 'filled' : ''}">★</span>
              <span class="star {personality.energetic >= 3 ? 'filled' : ''}">★</span>
              <span class="star {personality.energetic >= 4 ? 'filled' : ''}">★</span>
              <span class="star {personality.energetic >= 5 ? 'filled' : ''}">★</span>
            </div>
            <span class="trait-value">{personality.energetic}/5</span>
          </div>
        </div>
        <div class="trait-item">
          <span class="trait-icon">👥</span>
          <span class="trait-name">Social</span>
          <div class="trait-rating">
            <div class="stars">
              <span class="star {personality.social >= 1 ? 'filled' : ''}">★</span>
              <span class="star {personality.social >= 2 ? 'filled' : ''}">★</span>
              <span class="star {personality.social >= 3 ? 'filled' : ''}">★</span>
              <span class="star {personality.social >= 4 ? 'filled' : ''}">★</span>
              <span class="star {personality.social >= 5 ? 'filled' : ''}">★</span>
            </div>
            <span class="trait-value">{personality.social}/5</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="info-card health-card">
      <h2>Health Status</h2>
      <div class="health-status {medicalInfo.vaccinated ? 'vaccinated' : 'not-vaccinated'}">
        <span class="health-icon">{medicalInfo.vaccinated ? '✅' : '⚠️'}</span>
        <span class="health-text">{medicalInfo.vaccinated ? 'Fully Vaccinated' : 'Vaccination Pending'}</span>
      </div>
    </div>
  </div>
</div>`,l=`.profile-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.header-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-image-container {
  position: relative;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #667eea;
}

.status-badge {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.dog-name {
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.breed-info {
  font-size: 1.2rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
}

.size-badge {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
}

.content-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.info-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.info-card h2 {
  font-size: 1.5rem;
  color: #374151;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.description {
  color: #6b7280;
  line-height: 1.6;
}

.gallery-card {
  grid-column: 1 / -1;
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-photo:hover {
  transform: scale(1.05);
}

.personality-grid {
  display: grid;
  gap: 1rem;
}

.trait-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
}

.trait-icon {
  font-size: 1.5rem;
}

.trait-name {
  font-weight: 600;
  color: #374151;
  min-width: 80px;
}

.trait-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #d1d5db;
  font-size: 1.2rem;
}

.star.filled {
  color: #fbbf24;
}

.trait-value {
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
}

.health-card {
  grid-column: 1 / -1;
}

.health-status {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
}

.health-status.vaccinated {
  background: #d1fae5;
  color: #065f46;
}

.health-status.not-vaccinated {
  background: #fef3c7;
  color: #92400e;
}

.health-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .header-card {
    flex-direction: column;
    text-align: center;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .photo-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .gallery-photo {
    height: 150px;
  }
}`,d={id:n,name:a,description:e,isDefault:!1,category:s,tags:i,requiredFields:r,html:t,css:l};export{s as category,l as css,d as default,e as description,t as html,n as id,o as isDefault,a as name,r as requiredFields,i as tags};
