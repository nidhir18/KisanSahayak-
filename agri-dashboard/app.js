/**
 * KisaanSahayak - Core Application Controller & Modular Page Router
 * Single Page Architecture with strict view isolation and reactive telemetry.
 */

// Application Global State
const STATE = {
  currentLang: localStorage.getItem('kisaan_lang') || 'en',
  currentView: 'view-home',
  selectedHotspotId: 'hotspot-1',
  selectedSpecimenId: null,
  activeOutbreakSeverity: 'all',
  activeCropCategory: 'all',
  activeWeatherDistrict: 'ludhiana',
  selectedAcreage: 2.5,
  leafletMap: null,
  mapMarkers: {},
  chatHistory: []
};

// Translation Helper
function t(key, fallback = '') {
  const dict = TRANSLATIONS[STATE.currentLang] || TRANSLATIONS['en'];
  return dict[key] || TRANSLATIONS['en'][key] || fallback || key;
}

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSelector();
  setupHashRouting();
  renderHotspotsGrid();
  renderSpecimensPresets();
  setupDropzone();
  renderWeatherView();
  renderMandiCards();
  renderNgoCards();
  renderSchemes();
  
  // Set initial view based on hash or default to home
  const initialHash = window.location.hash.replace('#', '');
  const viewMap = {
    'home': 'view-home',
    'disease-map': 'view-disease-map',
    'crop-doctor': 'view-crop-doctor',
    'weather': 'view-weather',
    'mandi-rates': 'view-mandi-rates',
    'ngo-gov': 'view-ngo-gov'
  };

  if (viewMap[initialHash]) {
    navigateTo(viewMap[initialHash], false);
  } else {
    navigateTo('view-home', false);
  }

  // Update initial translation
  applyTranslations();
});

/* ==========================================================================
   ROUTING & VIEW MANAGEMENT (Strict Single-Section Display)
   ========================================================================== */
function navigateTo(viewId, updateHash = true) {
  const allViews = document.querySelectorAll('.page-view');
  allViews.forEach(view => {
    view.classList.remove('active-view');
  });

  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active-view');
    STATE.currentView = viewId;
  }

  // Update navigation pill active state
  const navBtns = document.querySelectorAll('.nav-pill-btn');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update URL hash
  if (updateHash) {
    const hashLookup = {
      'view-home': 'home',
      'view-disease-map': 'disease-map',
      'view-crop-doctor': 'crop-doctor',
      'view-weather': 'weather',
      'view-mandi-rates': 'mandi-rates',
      'view-ngo-gov': 'ngo-gov'
    };
    window.location.hash = hashLookup[viewId] || 'home';
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If entering disease map, initialize or invalidate Leaflet size
  if (viewId === 'view-disease-map') {
    setTimeout(() => {
      initOrRefreshMap();
      renderOutbreakDossier(STATE.selectedHotspotId);
    }, 100);
  }
}

function setupHashRouting() {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    const viewMap = {
      'home': 'view-home',
      'disease-map': 'view-disease-map',
      'crop-doctor': 'view-crop-doctor',
      'weather': 'view-weather',
      'mandi-rates': 'view-mandi-rates',
      'ngo-gov': 'view-ngo-gov'
    };
    if (viewMap[hash] && viewMap[hash] !== STATE.currentView) {
      navigateTo(viewMap[hash], false);
    }
  });
}

/* ==========================================================================
   LANGUAGE & LOCALIZATION
   ========================================================================== */
function setupLanguageSelector() {
  const langSelect = document.getElementById('global-lang-select');
  if (!langSelect) return;
  langSelect.value = STATE.currentLang;
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  STATE.currentLang = lang;
  localStorage.setItem('kisaan_lang', lang);
  document.documentElement.lang = lang;

  applyTranslations();
  renderWeatherView();
  renderMandiCards();
  renderNgoCards();
  renderHotspotsGrid();
  if (STATE.selectedSpecimenId) {
    renderDiagnosisResult(STATE.selectedSpecimenId);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
}

/* ==========================================================================
   MODULE 1: DISEASE OUTBREAK MAP & LEAFLET ENGINE
   ========================================================================== */
function initOrRefreshMap() {
  const mapContainer = document.getElementById('india-leaflet-map');
  if (!mapContainer) return;

  if (!STATE.leafletMap) {
    // Center of India coordinates
    STATE.leafletMap = L.map('india-leaflet-map', {
      center: [22.5937, 78.9629],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Clean CartoDB Positron / OSM tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(STATE.leafletMap);

    // Plot initial hotspots
    plotHotspotMarkers();
  } else {
    STATE.leafletMap.invalidateSize();
  }
}

function resetMapCenter() {
  if (STATE.leafletMap) {
    STATE.leafletMap.setView([22.5937, 78.9629], 5);
  }
}

function plotHotspotMarkers() {
  if (!STATE.leafletMap) return;

  // Clear existing markers
  Object.values(STATE.mapMarkers).forEach(m => STATE.leafletMap.removeLayer(m));
  STATE.mapMarkers = {};

  APP_DATA.hotspots.forEach(hotspot => {
    const color = hotspot.severity === 'severe' ? '#dc2626' : '#ea580c';
    const radius = hotspot.severity === 'severe' ? 14 : 11;

    // Create marker with glowing circle
    const marker = L.circleMarker([hotspot.lat, hotspot.lng], {
      radius: radius,
      fillColor: color,
      color: '#ffffff',
      weight: 2.5,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(STATE.leafletMap);

    marker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <div style="font-weight: 800; font-size: 0.95rem; color: #0f172a; margin-bottom: 2px;">${hotspot.name}</div>
        <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 6px;">📍 ${hotspot.region} • ${hotspot.crop}</div>
        <div style="font-size: 0.75rem; margin-bottom: 8px;"><strong>Affected:</strong> ${hotspot.affectedArea} | <strong style="color:${color}">${hotspot.spreadVelocity}</strong></div>
        <button onclick="selectHotspot('${hotspot.id}')" style="background:#047857; color:#fff; font-size:0.75rem; font-weight:700; border:none; padding:4px 10px; border-radius:4px; cursor:pointer;">
          Open Dossier →
        </button>
      </div>
    `);

    marker.on('click', () => {
      selectHotspot(hotspot.id);
    });

    STATE.mapMarkers[hotspot.id] = marker;
  });
}

function selectHotspot(hotspotId) {
  STATE.selectedHotspotId = hotspotId;
  const hotspot = APP_DATA.hotspots.find(h => h.id === hotspotId);
  if (!hotspot) return;

  renderOutbreakDossier(hotspotId);
  highlightHotspotCard(hotspotId);

  if (STATE.leafletMap) {
    STATE.leafletMap.flyTo([hotspot.lat, hotspot.lng], 7, { duration: 1.2 });
    if (STATE.mapMarkers[hotspotId]) {
      STATE.mapMarkers[hotspotId].openPopup();
    }
  }
}

function renderOutbreakDossier(hotspotId) {
  const container = document.getElementById('dossier-content-body');
  const severityTag = document.getElementById('dossier-severity-tag');
  if (!container) return;

  const hotspot = APP_DATA.hotspots.find(h => h.id === hotspotId) || APP_DATA.hotspots[0];

  if (severityTag) {
    severityTag.textContent = `${hotspot.severityLabel} INTENSITY`;
    severityTag.style.background = hotspot.severity === 'severe' ? '#fee2e2' : '#ffedd5';
    severityTag.style.color = hotspot.severity === 'severe' ? '#dc2626' : '#ea580c';
  }

  container.innerHTML = `
    <div style="margin-bottom: 0.85rem;">
      <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--text-dark);">${hotspot.name}</h3>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">📍 ${hotspot.region} • ${hotspot.crop}</div>
    </div>

    <div style="margin-bottom: 0.85rem; font-size: 0.85rem; line-height: 1.45;">
      <span style="color:var(--accent-red); font-weight:700;">● Yield Loss Risk:</span> ${hotspot.yieldLossRisk}
    </div>

    <div class="dossier-section-title title-bio">
      <span>🌱</span> <span data-i18n="dossier_bio_heading">${t('dossier_bio_heading', 'BIO & ORGANIC MANAGEMENT (RECOMMENDED)')}</span>
    </div>
    <ul class="dossier-list">
      ${hotspot.bioRemedies.map(r => `<li><span class="bullet bullet-bio">✓</span><span>${r}</span></li>`).join('')}
    </ul>

    <div class="dossier-section-title title-chem">
      <span>🧪</span> <span data-i18n="dossier_chem_heading">${t('dossier_chem_heading', 'EMERGENCY CHEMICAL CONTROL & DOSAGE')}</span>
    </div>
    <ul class="dossier-list">
      ${hotspot.chemicalRemedies.map(r => `<li><span class="bullet bullet-chem">⚡</span><span>${r}</span></li>`).join('')}
    </ul>

    <div class="nodal-advisory-box">
      <div class="nodal-title">
        <span>📞</span> <span>${t('dossier_nodal_desk', 'Nodal Advisory Desk')}: ${hotspot.advisoryHead}</span>
      </div>
      <div class="nodal-hotline">
        Direct Hot-line: <strong><a href="tel:${hotspot.advisoryHotline.replace(/[^0-9]/g, '')}" style="color:var(--primary-dark); text-decoration:none;">${hotspot.advisoryHotline}</a></strong>
      </div>
    </div>
  `;
}

function renderHotspotsGrid() {
  const container = document.getElementById('hotspots-cards-container');
  if (!container) return;

  const filtered = APP_DATA.hotspots.filter(h => {
    const matchSev = STATE.activeOutbreakSeverity === 'all' || h.severity === STATE.activeOutbreakSeverity;
    const matchCrop = STATE.activeCropCategory === 'all' || h.cropCategory === STATE.activeCropCategory;
    return matchSev && matchCrop;
  });

  container.innerHTML = filtered.map(h => `
    <div class="hotspot-card ${h.id === STATE.selectedHotspotId ? 'selected-hotspot' : ''}" id="hotspot-card-${h.id}">
      <div class="hotspot-card-header">
        <h3 class="hotspot-title">${h.name}</h3>
        <div class="hotspot-location">
          <span>📍</span> <span>${h.region} • ${h.crop}</span>
        </div>
      </div>

      <div>
        <span class="pill-badge ${h.severity === 'severe' ? 'badge-red' : 'badge-red'}" style="margin-bottom:0.5rem; display:inline-block;">
          ${h.severityLabel}
        </span>
        <div class="hotspot-metrics-row">
          <div>Affected Area <strong>${h.affectedArea}</strong></div>
          <div class="${h.severity === 'severe' ? 'velocity-text-severe' : 'velocity-text-high'}">
            Spread Velocity ${h.spreadVelocity}
          </div>
        </div>
        <p class="hotspot-symptoms-snippet">${h.symptoms}</p>
        <div class="hotspot-advisory-sub">Advisory: ${h.advisoryHead.split('(')[0]}</div>
      </div>

      <button class="btn-open-dossier" onclick="selectHotspot('${h.id}')">
        ${t('open_dossier', 'Open Detailed Dossier →')}
      </button>
    </div>
  `).join('');
}

function highlightHotspotCard(hotspotId) {
  document.querySelectorAll('.hotspot-card').forEach(card => card.classList.remove('selected-hotspot'));
  const card = document.getElementById(`hotspot-card-${hotspotId}`);
  if (card) card.classList.add('selected-hotspot');
}

function filterHotspotsBySeverity(sev) {
  STATE.activeOutbreakSeverity = sev;
  document.querySelectorAll('#outbreak-severity-filters .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-severity') === sev);
  });
  renderHotspotsGrid();
}

function filterHotspotsByCrop(category) {
  STATE.activeCropCategory = category;
  renderHotspotsGrid();
}

function broadcastEarlyWarning() {
  const hotspot = APP_DATA.hotspots.find(h => h.id === STATE.selectedHotspotId) || APP_DATA.hotspots[0];
  alert(`📢 Broadcast Alert Dispatched!\n\nSMS & Push Notifications sent to 14,280 registered farmers in ${hotspot.region} for immediate containment of ${hotspot.name}.`);
}

function downloadStateBulletin() {
  const hotspot = APP_DATA.hotspots.find(h => h.id === STATE.selectedHotspotId) || APP_DATA.hotspots[0];
  alert(`📄 Downloading Official ICAR Bulletin: ${hotspot.bulletinPdf}\n\nPrescription contains certified chemical dosages, drone spraying protocols, and seed treatment recommendations.`);
}

/* ==========================================================================
   MODULE 2: AI CROP DOCTOR (INTEGRATED & DEDICATED)
   ========================================================================== */
function renderSpecimensPresets() {
  const container = document.getElementById('specimens-presets-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.specimens.map(s => `
    <div class="preset-card ${s.id === STATE.selectedSpecimenId ? 'active-preset' : ''}" onclick="selectSpecimen('${s.id}')">
      <div class="preset-top">
        <span style="font-size: 1.35rem;">${s.cropIcon}</span>
        <span class="preset-match-badge">${s.matchPercentage}</span>
      </div>
      <div>
        <div class="preset-name">${s.name}</div>
        <div class="preset-crop">Crop: ${s.crop}</div>
      </div>
    </div>
  `).join('');
}

function selectSpecimen(specimenId) {
  STATE.selectedSpecimenId = specimenId;
  renderSpecimensPresets();
  renderDiagnosisResult(specimenId);
}

function renderDiagnosisResult(specimenId) {
  const specimen = APP_DATA.specimens.find(s => s.id === specimenId) || APP_DATA.specimens[0];
  const emptyState = document.getElementById('doctor-empty-state');
  const resultContainer = document.getElementById('doctor-result-container');

  if (emptyState) emptyState.style.display = 'none';
  if (resultContainer) {
    resultContainer.classList.add('active-result');
    resultContainer.style.display = 'block';

    const calc = specimen.sprayCalcDefaults;
    const totalChem = (calc.chemicalPerAcre * STATE.selectedAcreage).toFixed(1);
    const totalWater = (calc.waterPerAcre * STATE.selectedAcreage).toFixed(0);
    const estCost = (calc.costPerAcre * STATE.selectedAcreage).toLocaleString('en-IN');

    resultContainer.innerHTML = `
      <!-- Header Diagnostics Card -->
      <div class="diagnostic-header-card">
        <div>
          <div class="diag-pathogen-title">${specimen.name}</div>
          <div class="diag-scientific-name">${specimen.scientificName}</div>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
            <strong>${t('diag_affected_crop', 'Cultivated Host Crop')}:</strong> ${specimen.crop}
          </div>
        </div>
        <div style="text-align: right;">
          <span class="diag-confidence-pill">${specimen.matchPercentage}</span>
          <div style="margin-top:6px;">
            <span class="pill-badge badge-red" style="font-size:0.72rem;">${specimen.severity}</span>
          </div>
        </div>
      </div>

      <!-- Pathology Analysis & Symptoms -->
      <div style="background:#f8fafc; border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1rem; margin-bottom:1rem; font-size:0.85rem; line-height:1.45;">
        <strong style="color:var(--text-dark);">🧠 Neural Vision Finding:</strong> ${specimen.pathologyAnalysis}
      </div>

      <div class="diag-section-heading">
        <span>🌱</span> <span>${t('diag_organic_remedies', 'Step-by-Step Bio & Organic Protocols')}</span>
      </div>
      <ul class="dossier-list" style="margin-bottom:1rem;">
        ${specimen.bioRemedies.map(r => `<li><span class="bullet bullet-bio">✓</span><span>${r}</span></li>`).join('')}
      </ul>

      <div class="diag-section-heading">
        <span>🧪</span> <span>${t('diag_chemical_dosage', 'Emergency Chemical Dosages & Interval')}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.25rem;">
        ${specimen.chemicalRemedies.map(c => `
          <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.82rem;">
            <div style="font-weight:700; color:#0369a1;">⚡ ${c.name}</div>
            <div style="color:var(--text-body); margin-top:2px;">Dosage: <strong>${c.dosage}</strong> | ${c.interval}</div>
          </div>
        `).join('')}
      </div>

      <!-- Interactive Spray Dosage Calculator -->
      <div class="spray-calc-box">
        <div style="font-family:var(--font-heading); font-size:0.88rem; font-weight:800; color:var(--text-dark); margin-bottom:0.5rem;">
          📊 ${t('diag_calc_title', 'Interactive Farm Spray Dosage Calculator')}
        </div>
        <div class="calc-input-row">
          <label style="font-size:0.82rem; font-weight:700; color:var(--text-dark);" data-i18n="diag_calc_acres">Enter Farm Land Size (Acres):</label>
          <input type="number" id="calc-acres-input" min="0.5" max="100" step="0.5" value="${STATE.selectedAcreage}" class="form-input-text" style="width:90px; padding:0.35rem 0.6rem;" oninput="updateSprayCalc('${specimen.id}', this.value)">
        </div>

        <div class="calc-results-grid">
          <div class="calc-stat-tile">
            <div class="calc-stat-label">${t('diag_calc_total_chem', 'Total Chemical')}</div>
            <div class="calc-stat-val" id="calc-res-chem">${totalChem} ${calc.unit}</div>
          </div>
          <div class="calc-stat-tile">
            <div class="calc-stat-label">${t('diag_calc_total_water', 'Total Water')}</div>
            <div class="calc-stat-val" id="calc-res-water">${totalWater} L</div>
          </div>
          <div class="calc-stat-tile">
            <div class="calc-stat-label">${t('diag_calc_est_cost', 'Est. Cost')}</div>
            <div class="calc-stat-val" id="calc-res-cost">₹${estCost}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:1.25rem; display:flex; gap:0.75rem;">
        <button class="btn-primary" style="flex-grow:1; justify-content:center;" onclick="downloadDoctorRx('${specimen.name}')">
          <span>📄</span> <span data-i18n="btn_download_rx">Download Agronomist Rx (PDF)</span>
        </button>
      </div>
    `;
  }
}

function updateSprayCalc(specimenId, acresVal) {
  const acres = parseFloat(acresVal) || 1;
  STATE.selectedAcreage = acres;
  const specimen = APP_DATA.specimens.find(s => s.id === specimenId) || APP_DATA.specimens[0];
  const calc = specimen.sprayCalcDefaults;

  const totalChem = (calc.chemicalPerAcre * acres).toFixed(1);
  const totalWater = (calc.waterPerAcre * acres).toFixed(0);
  const estCost = (calc.costPerAcre * acres).toLocaleString('en-IN');

  const elChem = document.getElementById('calc-res-chem');
  const elWater = document.getElementById('calc-res-water');
  const elCost = document.getElementById('calc-res-cost');

  if (elChem) elChem.textContent = `${totalChem} ${calc.unit}`;
  if (elWater) elWater.textContent = `${totalWater} L`;
  if (elCost) elCost.textContent = `₹${estCost}`;
}

function setupDropzone() {
  const dropzone = document.getElementById('leaf-image-dropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processImageFile(files[0]);
    }
  });
}

function handleImageUpload(event) {
  const files = event.target.files;
  if (files.length > 0) {
    processImageFile(files[0]);
  }
}

function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const previewWrapper = document.getElementById('uploaded-preview-wrapper');
    const previewImg = document.getElementById('uploaded-leaf-preview');
    if (previewImg && previewWrapper) {
      previewImg.src = e.target.result;
      previewWrapper.style.display = 'block';
    }

    // Trigger diagnosis for Cotton Pink Bollworm / Yellow Rust
    selectSpecimen('specimen-cotton-pink-bollworm');
  };
  reader.readAsDataURL(file);
}

function clearUploadedImage(e) {
  e.stopPropagation();
  const previewWrapper = document.getElementById('uploaded-preview-wrapper');
  const fileInput = document.getElementById('leaf-file-input');
  if (previewWrapper) previewWrapper.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

function downloadDoctorRx(diseaseName) {
  alert(`📄 Generating Digital Agronomist Rx for: ${diseaseName}\n\nPrescription has been created with verified ICAR application schedules and safety intervals.`);
}

/* ==========================================================================
   MODULE 3: WEATHER & AGRO-ADVISORY ENGINE
   ========================================================================== */
function renderWeatherView() {
  const districtSelect = document.getElementById('weather-district-select');
  if (districtSelect && districtSelect.children.length === 0) {
    districtSelect.innerHTML = APP_DATA.weatherData.districts.map(d => `
      <option value="${d.id}" ${d.id === STATE.activeWeatherDistrict ? 'selected' : ''}>${d.name}</option>
    `).join('');
  }

  const w = APP_DATA.weatherData;
  const currDistrict = w.districts.find(d => d.id === STATE.activeWeatherDistrict) || w.districts[0];

  // Update Hero Card
  const heroTemp = document.getElementById('hero-temp-num');
  const heroCond = document.getElementById('hero-condition-text');
  const heroFeels = document.getElementById('hero-feels-like');
  const heroHum = document.getElementById('hero-humidity');
  const heroWind = document.getElementById('hero-wind');
  const heroRain = document.getElementById('hero-rain');
  const heroRainProb = document.getElementById('hero-rain-prob');

  if (heroTemp) heroTemp.textContent = currDistrict.temp;
  if (heroCond) heroCond.textContent = currDistrict.condition;
  if (heroFeels) heroFeels.textContent = `Feels like 39°C • Location: ${currDistrict.name.split(' - ')[0]}`;
  if (heroHum) heroHum.textContent = currDistrict.humidity;
  if (heroWind) heroWind.textContent = currDistrict.wind;
  if (heroRain) heroRain.textContent = currDistrict.rain;
  if (heroRainProb) heroRainProb.textContent = currDistrict.rainProb;

  // Render Advisories
  const advContainer = document.getElementById('weather-advisories-grid');
  if (advContainer) {
    const borderClasses = ['adv-border-info', 'adv-border-warning', 'adv-border-success', 'adv-border-caution'];
    const badgeColors = [
      'background:#e0f2fe; color:#0284c7;',
      'background:#fee2e2; color:#dc2626;',
      'background:#ecfdf5; color:#047857;',
      'background:#ffedd5; color:#ea580c;'
    ];

    advContainer.innerHTML = w.advisories.map((adv, idx) => `
      <div class="weather-adv-card ${borderClasses[idx % 4]}">
        <div>
          <span class="adv-badge" style="${badgeColors[idx % 4]}">${adv.tag}</span>
          <h3 class="adv-title">${adv.title}</h3>
          <p class="adv-desc">${adv.desc}</p>
        </div>
        <div class="adv-action-box">
          📌 Action: ${adv.action}
        </div>
      </div>
    `).join('');
  }

  // Render 7-Day Forecast
  const forecastRow = document.getElementById('forecast-days-row');
  if (forecastRow) {
    forecastRow.innerHTML = w.forecast7Days.map(day => `
      <div class="forecast-day-card ${day.active ? 'active-forecast-day' : ''}">
        <div class="forecast-day-name">${day.day}</div>
        <div class="forecast-day-icon">${day.icon}</div>
        <div class="forecast-day-temps">${day.maxTemp} <span>/ ${day.minTemp}</span></div>
        <div class="forecast-day-rain">💧 ${day.rainProb} rain</div>
      </div>
    `).join('');
  }
}

function changeWeatherDistrict(districtId) {
  STATE.activeWeatherDistrict = districtId;
  renderWeatherView();
}

function useGpsLocation() {
  alert('📍 GPS Location Acquired: Ludhiana Agromet Station (30.9010° N, 75.8573° E). Telemetry synced with nearest IMD radar tower.');
  changeWeatherDistrict('ludhiana');
}

function refreshWeatherTelemetry() {
  const ts = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const tsEl = document.getElementById('weather-timestamp-text');
  if (tsEl) {
    tsEl.textContent = `Live Synced: ${ts} IST (Station: Ludhiana (Punjab))`;
  }
  renderWeatherView();
  alert('🔄 Weather Telemetry refreshed successfully from IMD satellite feeds.');
}

/* ==========================================================================
   MODULE 4: LIVE APMC MANDI PRICES
   ========================================================================== */
function renderMandiCards() {
  const container = document.getElementById('mandi-cards-container');
  if (!container) return;

  const searchVal = (document.getElementById('mandi-search-input')?.value || '').toLowerCase();
  const stateVal = document.getElementById('mandi-state-filter')?.value || 'all';
  const catVal = document.getElementById('mandi-category-filter')?.value || 'all';

  const filtered = APP_DATA.mandiData.filter(m => {
    const matchSearch = m.commodity.toLowerCase().includes(searchVal) || m.mandiName.toLowerCase().includes(searchVal) || m.district.toLowerCase().includes(searchVal);
    const matchState = stateVal === 'all' || m.state === stateVal;
    const matchCat = catVal === 'all' || m.category === catVal;
    return matchSearch && matchState && matchCat;
  });

  container.innerHTML = filtered.map(m => {
    const trendClass = m.trendType === 'up' ? 'trend-up' : (m.trendType === 'down' ? 'trend-down' : 'trend-neutral');
    const trendIcon = m.trendType === 'up' ? '▲' : (m.trendType === 'down' ? '▼' : '—');
    
    return `
      <div class="mandi-commodity-card">
        <div>
          <div class="mandi-card-top-row">
            <span class="category-tag">${m.category}</span>
            <span class="price-trend-tag ${trendClass}">${m.priceTrend}</span>
          </div>

          <h3 class="mandi-commodity-name">${m.commodity}</h3>
          <div class="mandi-location-text">📍 ${m.mandiName} • ${m.district}, ${m.state}</div>

          <div class="modal-price-display">
            <span class="modal-price-num">₹ ${m.modalPrice.toLocaleString('en-IN')}</span>
            <span class="modal-price-unit">/ Quintal</span>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;" data-i18n="modal_price_label">
              ${t('modal_price_label', 'MODAL / PREVAILING PRICE')}
            </div>
          </div>

          <div class="min-max-price-row">
            <div>${t('min_price_label', 'Min Price')}: <strong>₹${m.minPrice.toLocaleString('en-IN')}</strong></div>
            <div>${t('max_price_label', 'Max Price')}: <strong>₹${m.maxPrice.toLocaleString('en-IN')}</strong></div>
          </div>

          <div class="variety-arrivals-row">
            <div>🌾 <strong>${t('variety_label', 'Variety:')}</strong> ${m.variety}</div>
            <div>📦 <strong>${t('arrivals_label', 'Arrivals:')}</strong> ${m.arrivals}</div>
          </div>

          ${m.officialMsp ? `
            <div class="msp-status-pill">
              🏛️ Official MSP: ₹${m.officialMsp.toLocaleString('en-IN')} | <strong>${m.mspComparison}</strong>
            </div>
          ` : `
            <div class="msp-status-commercial">
              📊 ${m.mspComparison}
            </div>
          `}
        </div>

        <div class="mandi-card-footer">
          <span class="sync-time-text">⏱️ Sync: ${m.lastBiddingSync}</span>
          <button class="btn-secondary" style="padding:0.35rem 0.85rem; font-size:0.8rem;" onclick="openPriceAnalysisModal('${m.id}')">
            ${t('btn_price_analysis', 'Price Analysis ↗')}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filterMandiCards() {
  renderMandiCards();
}

function refreshMandiPrices() {
  alert('🔄 APMC Mandi spot rates refreshed with latest e-NAM bidding cycles.');
  renderMandiCards();
}

function openPriceAnalysisModal(mandiId) {
  const m = APP_DATA.mandiData.find(item => item.id === mandiId);
  if (!m) return;

  const modal = document.getElementById('price-analysis-modal');
  const title = document.getElementById('analysis-commodity-title');
  const sub = document.getElementById('analysis-commodity-sub');
  const body = document.getElementById('analysis-modal-body');

  if (title) title.textContent = `📈 ${m.commodity} - Market Analytics`;
  if (sub) sub.textContent = `${m.mandiName} (${m.state})`;

  if (body) {
    body.innerHTML = `
      <div style="background:#f8fafc; border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1rem; margin-bottom:1rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
          <span>Current Modal Price:</span>
          <strong style="color:var(--primary-dark); font-size:1.1rem;">₹ ${m.modalPrice.toLocaleString('en-IN')} / Q</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
          <span>30-Day Moving Average:</span>
          <strong>₹ ${m.thirtyDayAvg.toLocaleString('en-IN')} / Q</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span>Daily Market Arrival Volume:</span>
          <strong>${m.arrivals}</strong>
        </div>
      </div>

      <div style="background:#ecfdf5; border:1px solid var(--primary-border); border-radius:var(--radius-md); padding:1rem; margin-bottom:1rem;">
        <strong style="color:var(--primary-deep);">💡 Liquidation & Trading Advisory:</strong>
        <p style="font-size:0.88rem; color:var(--text-body); margin-top:4px;">${m.forecastAdvice}</p>
      </div>

      <button class="btn-primary" style="width:100%; justify-content:center;" onclick="closePriceAnalysisModal()">
        Close Analysis Window
      </button>
    `;
  }

  if (modal) modal.classList.add('modal-active');
}

function closePriceAnalysisModal() {
  const modal = document.getElementById('price-analysis-modal');
  if (modal) modal.classList.remove('modal-active');
}

/* ==========================================================================
   MODULE 5: NGO & GOVERNMENT SUPPORT HUB
   ========================================================================== */
function renderNgoCards() {
  const container = document.getElementById('ngos-cards-container');
  if (!container) return;

  const searchVal = (document.getElementById('ngo-search-input')?.value || '').toLowerCase();
  const stateVal = document.getElementById('ngo-state-filter')?.value || 'all';
  const catVal = document.getElementById('ngo-category-filter')?.value || 'all';

  const filtered = APP_DATA.ngos.filter(ngo => {
    const matchSearch = ngo.name.toLowerCase().includes(searchVal) || ngo.desc.toLowerCase().includes(searchVal) || ngo.coverage.toLowerCase().includes(searchVal);
    const matchState = stateVal === 'all' || ngo.headquarters.includes(stateVal) || ngo.coverage.includes(stateVal);
    const matchCat = catVal === 'all' || ngo.category.includes(catVal);
    return matchSearch && matchState && matchCat;
  });

  container.innerHTML = filtered.map(n => `
    <div class="ngo-card">
      <div>
        <div class="ngo-header-row">
          <div class="ngo-initial-box">${n.initial}</div>
          <div class="ngo-title-info">
            <div class="ngo-title">
              <span>${n.name}</span>
              ${n.verified ? '<span class="ngo-verified-badge">✓ Govt Verified</span>' : ''}
            </div>
            <div class="ngo-rating-sub">
              <strong>${n.category}</strong> • ⭐ ${n.rating} • ${n.estd}
            </div>
          </div>
        </div>

        <p class="ngo-desc-text">${n.desc}</p>

        <div class="ngo-address-box">
          <div style="font-weight:700; color:var(--text-dark); margin-bottom:2px;">📍 ${n.headquarters}</div>
          <div style="color:var(--text-muted);">${n.address}</div>
          <div style="color:var(--primary-dark); font-weight:600; margin-top:4px;">Coverage: ${n.coverage}</div>
        </div>

        <div class="ngo-contacts-grid">
          <div>📞 <strong>Phone:</strong> ${n.phone}</div>
          <div>☎️ <strong>Toll-Free:</strong> ${n.tollFree}</div>
          <div>✉️ <strong>Email:</strong> ${n.email}</div>
          <div>🌐 <strong><a href="${n.portal}" target="_blank" style="color:var(--primary-dark); text-decoration:none;">Visit Portal ↗</a></strong></div>
        </div>

        <div class="ngo-leadership-strip">
          <div><strong>Head:</strong> ${n.head}</div>
          <div><strong>Field:</strong> ${n.fieldOfficer}</div>
        </div>

        <div style="font-weight:800; font-size:0.78rem; color:var(--text-muted); margin-bottom:0.35rem;" data-i18n="core_services">
          ${t('core_services', 'CORE SUPPORT SERVICES:')}
        </div>
        <ul class="ngo-services-list">
          ${n.services.map(s => `<li><span style="color:var(--primary); font-weight:800;">✓</span><span>${s}</span></li>`).join('')}
        </ul>

        <div class="ngo-grant-alert">
          🎁 Active Grant: ${n.activeGrant}
        </div>
      </div>

      <div class="ngo-action-buttons-row">
        <button class="btn-ngo-action btn-ngo-connect" onclick="connectNgo('${n.name}', '${n.phone}')">
          ⚡ ${t('btn_connect_directly', 'Connect Directly')}
        </button>
        <button class="btn-ngo-action btn-ngo-whatsapp" onclick="openWhatsApp('${n.whatsappNumber}', '${n.name}')">
          💬 ${t('btn_whatsapp', 'WhatsApp')}
        </button>
        <button class="btn-ngo-action" onclick="bookNgoVisit('${n.name}')">
          🗓️ ${t('btn_book_visit', 'Book On-Field Visit')}
        </button>
        <button class="btn-ngo-action" style="background:#fef3c7; color:#92400e; border-color:#fde68a;" onclick="applyNgoGrant('${n.name}', '${n.activeGrant}')">
          🎁 ${t('btn_apply_grant', 'Apply Aid Grant')}
        </button>
      </div>
    </div>
  `).join('');
}

function filterNgos() {
  renderNgoCards();
}

function switchNgoTab(tabName) {
  document.querySelectorAll('.ngo-tab-btn').forEach(btn => {
    btn.classList.toggle('active-tab', btn.getAttribute('data-tab') === tabName);
  });

  const ngosContainer = document.getElementById('ngos-cards-container');
  const ngoFilterRow = document.getElementById('ngo-filter-row');
  const schemesContainer = document.getElementById('schemes-tab-container');
  const helplinesContainer = document.getElementById('helplines-tab-container');

  if (tabName === 'ngos') {
    if (ngosContainer) ngosContainer.style.display = 'grid';
    if (ngoFilterRow) ngoFilterRow.style.display = 'flex';
    if (schemesContainer) schemesContainer.style.display = 'none';
    if (helplinesContainer) helplinesContainer.style.display = 'none';
  } else if (tabName === 'schemes') {
    if (ngosContainer) ngosContainer.style.display = 'none';
    if (ngoFilterRow) ngoFilterRow.style.display = 'none';
    if (schemesContainer) schemesContainer.style.display = 'block';
    if (helplinesContainer) helplinesContainer.style.display = 'none';
  } else if (tabName === 'helplines') {
    if (ngosContainer) ngosContainer.style.display = 'none';
    if (ngoFilterRow) ngoFilterRow.style.display = 'none';
    if (schemesContainer) schemesContainer.style.display = 'none';
    if (helplinesContainer) helplinesContainer.style.display = 'block';
  }
}

function renderSchemes() {
  const container = document.getElementById('schemes-cards-container');
  if (!container) return;

  container.innerHTML = APP_DATA.schemes.map(s => `
    <div class="ngo-card">
      <div>
        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--text-dark); margin-bottom:0.25rem;">
          🏛️ ${s.name}
        </h3>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.85rem;">${s.ministry}</div>

        <div style="background:#ecfdf5; border:1px solid var(--primary-border); padding:0.85rem; border-radius:var(--radius-md); margin-bottom:0.75rem;">
          <strong style="color:var(--primary-dark);">Benefit:</strong>
          <div style="font-size:0.85rem; color:var(--text-body); margin-top:2px;">${s.benefit}</div>
        </div>

        <div style="background:#f8fafc; border:1px solid var(--border-light); padding:0.85rem; border-radius:var(--radius-md); font-size:0.85rem; margin-bottom:1rem;">
          <strong>Eligibility:</strong> ${s.eligibility}
        </div>
      </div>

      <a href="${s.link}" target="_blank" class="btn-primary" style="justify-content:center; text-decoration:none;">
        Apply on DBT Portal ↗
      </a>
    </div>
  `).join('');
}

function connectNgo(name, phone) {
  alert(`⚡ Direct Connect Initiated with ${name} Helpdesk.\n\nDialing: ${phone}`);
}

function openWhatsApp(number, name) {
  window.open(`https://wa.me/${number}?text=Hello%20${encodeURIComponent(name)},%20I%20am%20contacting%20you%20from%20KisaanSahayak%20portal%20for%20farming%20assistance.`, '_blank');
}

function bookNgoVisit(name) {
  alert(`🗓️ On-Field Agronomist Visit Scheduled with ${name}.\nA verified field officer will contact you within 24 hours to inspect your farm.`);
}

function applyNgoGrant(name, grantTitle) {
  alert(`🎁 Subsidy Grant Application Submitted for:\n"${grantTitle}" via ${name}.\nYour application tracking ID is #KS-GRANT-${Math.floor(100000 + Math.random() * 900000)}.`);
}

/* ==========================================================================
   MODALS & FLOATING WIDGET ACTIONS
   ========================================================================== */
function openReportModal() {
  const modal = document.getElementById('report-outbreak-modal');
  if (modal) modal.classList.add('modal-active');
}

function closeReportModal() {
  const modal = document.getElementById('report-outbreak-modal');
  if (modal) modal.classList.remove('modal-active');
}

function handleReportOutbreakSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rep-name').value;
  const crop = document.getElementById('rep-crop').value;
  const state = document.getElementById('rep-state').value;
  const district = document.getElementById('rep-district').value;
  const symptoms = document.getElementById('rep-symptoms').value;

  const newId = `hotspot-custom-${Date.now()}`;
  const newHotspot = {
    id: newId,
    name: `${crop} Field Outbreak (${district})`,
    region: `${state} (${district})`,
    state: state,
    district: district,
    crop: `${crop}`,
    cropCategory: "cereals",
    severity: "severe",
    severityLabel: "NEW ALERT",
    affectedArea: "Local Cluster",
    spreadVelocity: "Active Onset",
    intensity: 80,
    lat: 28.6139 + (Math.random() - 0.5) * 6,
    lng: 77.2090 + (Math.random() - 0.5) * 6,
    symptoms: symptoms,
    yieldLossRisk: "Early detection reported by farmer. Immediate scouting recommended.",
    bioRemedies: ["Apply 5% Neem Kernel Extract", "Isolate infected plants"],
    chemicalRemedies: ["Consult local KVK scientist before foliar spray"],
    advisoryHead: `Reported by ${name} (KVK Notification Active)`,
    advisoryHotline: "1800-180-1551",
    bulletinPdf: "Farmer_Reported_Incident.pdf"
  };

  APP_DATA.hotspots.unshift(newHotspot);
  closeReportModal();
  document.getElementById('report-outbreak-form').reset();

  renderHotspotsGrid();
  plotHotspotMarkers();
  navigateTo('view-disease-map');
  selectHotspot(newId);

  alert(`✅ Alert Published Successfully!\n\nField report recorded. Nearby registered farmers and district KVK have been alerted on map.`);
}

function triggerCallCenter() {
  window.location.href = 'tel:18001801551';
}

function toggleChatDrawer() {
  const drawer = document.getElementById('chat-drawer');
  if (drawer) {
    drawer.classList.toggle('drawer-open');
  }
}

function sendQuickPrompt(text) {
  const input = document.getElementById('chat-input-field');
  if (input) {
    input.value = text;
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-input-field');
  const container = document.getElementById('chat-messages-container');
  if (!input || !container || !input.value.trim()) return;

  const userText = input.value.trim();
  input.value = '';

  // Add User message
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg msg-user';
  userMsgEl.textContent = userText;
  container.appendChild(userMsgEl);

  // Generate AI Response
  setTimeout(() => {
    let aiResponse = "I have analyzed your query. For best yield and pest control, ensure proper spacing, use certified bio-inputs, and follow ICAR-recommended spray windows during dry weather.";
    
    const lower = userText.toLowerCase();
    if (lower.includes('yellow rust') || lower.includes('rust')) {
      aiResponse = "⚠️ Wheat Yellow Rust Alert: Spray Propiconazole 25% EC @ 200 ml in 200 liters of water per acre immediately. For organic treatment, use 5% NSKE neem spray + fermented buttermilk solution.";
    } else if (lower.includes('basmati') || lower.includes('mandi') || lower.includes('karnal')) {
      aiResponse = "🌾 Basmati 1121 Pusa is currently trading at ₹ 3,950 / Quintal in Karnal New Grain Market with strong export demand.";
    } else if (lower.includes('rain') || lower.includes('weather') || lower.includes('ludhiana')) {
      aiResponse = "🌦️ Ludhiana forecast: Significant rain (14.7 mm) predicted over next 48 hours. Pause irrigation and delay foliar pesticide sprays to prevent wash-off.";
    }

    const aiMsgEl = document.createElement('div');
    aiMsgEl.className = 'chat-msg msg-ai';
    aiMsgEl.textContent = aiResponse;
    container.appendChild(aiMsgEl);

    container.scrollTop = container.scrollHeight;
  }, 400);
}
