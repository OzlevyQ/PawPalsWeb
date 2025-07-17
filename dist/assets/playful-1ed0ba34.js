const n="playful",e="Playful & Fun",a="Colorful and playful design",l=!1,i="fun",r=["colorful","playful","animated","fun"],t=["name","breed","age","size","description","image","gallery","gallery[0]","gallery[1]","personality.friendly","personality.energetic","personality.social","medicalInfo.vaccinated"],s=`<div class="playful-profile">
  <div class="rainbow-header">
    <div class="profile-circle">
      <img src="{image}" alt="{name}" class="round-image" onerror="this.src='https://via.placeholder.com/180x180?text=🐕'">
      <div class="paw-prints">🐾 🐾 🐾</div>
    </div>
    <h1 class="bouncy-title">{name}</h1>
    <div class="fun-info">
      <span class="info-bubble breed">{breed}</span>
      <span class="info-bubble age">{age} months</span>
      <span class="info-bubble size">{size}</span>
    </div>
  </div>
  
  <div class="fun-section">
    <h2 class="section-title">🎾 About Me</h2>
    <div class="story-bubble">
      <p>{description}</p>
    </div>
  </div>
  
  <div class="fun-section">
    <h2 class="section-title">📸 My Fun Photos</h2>
    <div class="fun-gallery">
      <div class="photo-frame">
        <img src="{gallery[0]}" alt="{name} photo 1" class="fun-photo" onerror="this.parentElement.style.display='none'">
      </div>
      <div class="photo-frame">
        <img src="{gallery[1]}" alt="{name} photo 2" class="fun-photo" onerror="this.parentElement.style.display='none'">
      </div>
      <div class="photo-frame">
        <img src="{gallery[2]}" alt="{name} photo 3" class="fun-photo" onerror="this.parentElement.style.display='none'">
      </div>
    </div>
  </div>
  
  <div class="fun-section">
    <h2 class="section-title">🌟 My Superpowers</h2>
    <div class="powers-grid">
      <div class="power-meter">
        <div class="power-label">💝 Friendliness</div>
        <div class="meter-container">
          <div class="meter-fill" style="width: calc({personality.friendly} * 20%)"></div>
        </div>
        <span class="power-score">{personality.friendly}/5</span>
      </div>
      <div class="power-meter">
        <div class="power-label">⚡ Energy Level</div>
        <div class="meter-container">
          <div class="meter-fill" style="width: calc({personality.energetic} * 20%)"></div>
        </div>
        <span class="power-score">{personality.energetic}/5</span>
      </div>
      <div class="power-meter">
        <div class="power-label">🎉 Social Skills</div>
        <div class="meter-container">
          <div class="meter-fill" style="width: calc({personality.social} * 20%)"></div>
        </div>
        <span class="power-score">{personality.social}/5</span>
      </div>
    </div>
  </div>
  
  <div class="fun-section">
    <h2 class="section-title">🏥 Health Badge</h2>
    <div class="health-badge {medicalInfo.vaccinated ? 'super-healthy' : 'needs-care'}">
      <span class="badge-icon">{medicalInfo.vaccinated ? '🏆' : '⏰'}</span>
      <span class="badge-text">{medicalInfo.vaccinated ? 'Super Healthy Champion!' : 'Getting Ready for Health Check'}</span>
    </div>
  </div>
</div>`,o=`.playful-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.rainbow-header {
  text-align: center;
  margin-bottom: 3rem;
  background: white;
  border-radius: 30px;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transform: rotate(-1deg);
}

.profile-circle {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.round-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #ff6b6b;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.paw-prints {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  animation: wiggle 1s ease-in-out infinite;
}

@keyframes wiggle {
  0%, 100% { transform: translateX(-50%) rotate(0deg); }
  25% { transform: translateX(-50%) rotate(5deg); }
  75% { transform: translateX(-50%) rotate(-5deg); }
}

.bouncy-title {
  font-size: 3rem;
  color: #ff6b6b;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: textBounce 3s ease-in-out infinite;
}

@keyframes textBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.fun-info {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.info-bubble {
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transform: rotate(1deg);
}

.info-bubble.breed { background: linear-gradient(45deg, #ff6b6b, #ee5a52); }
.info-bubble.age { background: linear-gradient(45deg, #4ecdc4, #44a08d); }
.info-bubble.size { background: linear-gradient(45deg, #45b7d1, #2196f3); }

.fun-section {
  background: white;
  border-radius: 25px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transform: rotate(0.5deg);
}

.fun-section:nth-child(even) {
  transform: rotate(-0.5deg);
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.story-bubble {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 1.5rem;
  border-left: 5px solid #4ecdc4;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.fun-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.photo-frame {
  position: relative;
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}

.photo-frame:nth-child(even) {
  transform: rotate(2deg);
}

.photo-frame:hover {
  transform: rotate(0deg) scale(1.05);
}

.fun-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  border: 8px solid white;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.powers-grid {
  display: grid;
  gap: 1.5rem;
}

.power-meter {
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 15px;
}

.power-label {
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
}

.meter-container {
  background: #e9ecef;
  border-radius: 10px;
  height: 20px;
  overflow: hidden;
  position: relative;
}

.meter-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.power-score {
  font-weight: bold;
  color: #ff6b6b;
  font-size: 1.2rem;
}

.health-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.health-badge.super-healthy {
  background: linear-gradient(45deg, #96ceb4, #85c1a3);
  color: #2d5a3d;
}

.health-badge.needs-care {
  background: linear-gradient(45deg, #ffb74d, #ffa726);
  color: #e65100;
}

.badge-icon {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 768px) {
  .fun-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .fun-photo {
    width: 150px;
    height: 150px;
  }
}`,d={id:n,name:e,description:a,isDefault:!1,category:i,tags:r,requiredFields:t,html:s,css:o};export{i as category,o as css,d as default,a as description,s as html,n as id,l as isDefault,e as name,t as requiredFields,r as tags};
