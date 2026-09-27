/**
 * Rajasthani Wedding Invitation - Priyansh & Shreya
 * Master Interactive Controller & Motion Engine
 * Default Language: Gujarati (ગુજરાતી)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Default language is Gujarati as requested
  let currentLang = "gu";

  // Cache DOM Elements
  const entranceSection = document.getElementById("royal-entrance");
  const stampBtn = document.getElementById("royal-stamp-trigger");
  const doorsPortal = document.querySelector(".palace-doors-portal");
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const replayEntranceBtn = document.getElementById("replay-entrance-btn");
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenuLinks = document.getElementById("nav-menu-links");
  const copyAddressBtn = document.getElementById("copy-address-btn");
  const stampBtnAction = document.getElementById("stamp-btn-action");

  // =========================================================================
  // 1. OPENING EXPERIENCE — PALACE ENTRY INTERACTION
  // =========================================================================
  let isEntering = false;

  function triggerPalaceEntrance() {
    if (isEntering) return;
    isEntering = true;

    // Optional audio chime / start
    if (window.royalAudio) {
      window.royalAudio.initWebAudio();
      window.royalAudio.playTempleBell();
    }

    // Add opening state to entrance section and doors
    if (entranceSection) entranceSection.classList.add("doors-opening");
    if (doorsPortal) doorsPortal.classList.add("doors-opening");
    if (stampBtn) stampBtn.classList.add("stamp-activated");

    // Camera move & doors swing open
    setTimeout(() => {
      if (entranceSection) entranceSection.classList.add("entrance-unlocked");
      document.body.style.overflowY = "auto";
    }, 2000);

    // Auto-start ambient music softly
    setTimeout(() => {
      if (window.royalAudio && !window.royalAudio.isPlaying) {
        window.royalAudio.play();
      }
    }, 2600);
  }

  if (stampBtn) {
    stampBtn.addEventListener("click", triggerPalaceEntrance);
    stampBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerPalaceEntrance();
      }
    });
  }

  if (stampBtnAction) {
    stampBtnAction.addEventListener("click", triggerPalaceEntrance);
  }

  // Re-experience entrance
  if (replayEntranceBtn) {
    replayEntranceBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        isEntering = false;
        if (entranceSection) {
          entranceSection.classList.remove("doors-opening");
          entranceSection.classList.remove("entrance-unlocked");
        }
        if (doorsPortal) doorsPortal.classList.remove("doors-opening");
        if (stampBtn) stampBtn.classList.remove("stamp-activated");
      }, 500);
    });
  }

  // =========================================================================
  // 2. LANGUAGE SWITCHER (GUJARATI DEFAULT <-> ENGLISH)
  // =========================================================================
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];

    // Update document title
    document.title = t.metaTitle;

    // Update Language Toggle Button Text
    if (langToggleBtn) {
      langToggleBtn.innerHTML = `<span>❖</span> <span>${t.langToggle}</span>`;
    }

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.style.opacity = "0";
        setTimeout(() => {
          el.innerHTML = t[key];
          el.style.opacity = "1";
        }, 150);
      }
    });

    // Re-render Dynamic Sections
    renderCeremonies();
    renderCountdownLabels();

    // Update Audio Label
    if (window.royalAudio) {
      window.royalAudio.updateUI();
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "gu" ? "en" : "gu";
      setLanguage(nextLang);
    });
  }

  // =========================================================================
  // 3. RENDER CEREMONIES SECTION (WITHOUT "ADD TO CALENDAR")
  // =========================================================================
  function renderCeremonies() {
    const container = document.getElementById("ceremonies-container");
    if (!container) return;

    container.innerHTML = weddingData.ceremonies.map((ceremony, idx) => {
      const isReverse = idx % 2 !== 0 ? "reverse" : "";
      return `
        <article class="ceremony-card-item ${isReverse}" id="${ceremony.id}">
          <div class="ceremony-visual-wrap">
            <img src="${ceremony.image}" alt="${ceremony.name[currentLang]}" loading="lazy">
            <div class="ceremony-symbol-badge">${ceremony.symbol}</div>
          </div>
          <div class="ceremony-details-col">
            <span class="ceremony-tagline">${ceremony.tagline[currentLang]}</span>
            <h3 class="ceremony-name">${ceremony.name[currentLang]}</h3>
            <div class="ceremony-time-badge">
              <span class="ceremony-date-text">📅 ${ceremony.date[currentLang]}</span>
              <span class="ceremony-hour-text">⏰ ${ceremony.time[currentLang]}</span>
            </div>
            ${ceremony.address ? `
            <div class="ceremony-venue-badge">
              <span class="ceremony-venue-icon">📍</span>
              <span class="ceremony-venue-text">${ceremony.address[currentLang]}</span>
            </div>` : ''}
            <p class="ceremony-desc-text">${ceremony.description[currentLang]}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  // =========================================================================
  // 4. WEDDING COUNTDOWN TIMER (22 NOVEMBER 2026)
  // =========================================================================
  const weddingTime = new Date("2026-11-22T09:30:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingTime - now;

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minutesEl = document.getElementById("cd-minutes");
    const secondsEl = document.getElementById("cd-seconds");
    const bannerEl = document.getElementById("cd-live-banner");

    if (distance < 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (bannerEl) bannerEl.textContent = translations[currentLang].countdownLive;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  function renderCountdownLabels() {
    const t = translations[currentLang];
    const lblDays = document.getElementById("lbl-days");
    const lblHours = document.getElementById("lbl-hours");
    const lblMinutes = document.getElementById("lbl-minutes");
    const lblSeconds = document.getElementById("lbl-seconds");
    if (lblDays) lblDays.textContent = t.days;
    if (lblHours) lblHours.textContent = t.hours;
    if (lblMinutes) lblMinutes.textContent = t.minutes;
    if (lblSeconds) lblSeconds.textContent = t.seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // =========================================================================
  // 5. VENUE ACTIONS (COPY ADDRESS & GOOGLE MAPS)
  // =========================================================================
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", () => {
      const addr = weddingData.venue.address[currentLang];
      navigator.clipboard.writeText(addr).then(() => {
        const orig = copyAddressBtn.textContent;
        copyAddressBtn.textContent = translations[currentLang].addressCopied;
        setTimeout(() => {
          copyAddressBtn.textContent = orig;
        }, 2500);
      });
    });
  }

  // =========================================================================
  // 6. MUSIC TOGGLE CONTROLLER
  // =========================================================================
  if (musicToggleBtn && window.royalAudio) {
    musicToggleBtn.addEventListener("click", () => {
      window.royalAudio.toggle();
    });
  }

  // =========================================================================
  // 7. MOBILE NAVIGATION DRAWER
  // =========================================================================
  if (mobileNavToggle && navMenuLinks) {
    mobileNavToggle.addEventListener("click", () => {
      navMenuLinks.classList.toggle("mobile-open");
    });
    navMenuLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenuLinks.classList.remove("mobile-open");
      });
    });
  }

  // =========================================================================
  // 8. PARTICLE CANVASES (GOLD DUST & ROSE PETALS)
  // =========================================================================
  initParticleCanvases();

  // Initial Render in Gujarati
  setLanguage("gu");
});

// ===========================================================================
// PARTICLE ANIMATION ENGINE (GOLD DUST & FLOATING PETALS)
// ===========================================================================
function initParticleCanvases() {
  const dustCanvas = document.getElementById("gold-dust-canvas");
  const petalsCanvas = document.getElementById("petals-canvas");
  if (!dustCanvas || !petalsCanvas) return;

  const dustCtx = dustCanvas.getContext("2d");
  const petalCtx = petalsCanvas.getContext("2d");

  let w = (dustCanvas.width = petalsCanvas.width = window.innerWidth);
  let h = (dustCanvas.height = petalsCanvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = dustCanvas.width = petalsCanvas.width = window.innerWidth;
    h = dustCanvas.height = petalsCanvas.height = window.innerHeight;
  });

  // Gold dust particles
  const dustParticles = [];
  const dustCount = window.innerWidth < 768 ? 25 : 45;
  for (let i = 0; i < dustCount; i++) {
    dustParticles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.2
    });
  }

  // Rose & Marigold petals
  const petals = [];
  const petalCount = window.innerWidth < 768 ? 12 : 24;
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 9 + 6,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.6 - 0.3,
      angle: Math.random() * 360,
      spin: Math.random() * 1.5 - 0.75,
      isMarigold: Math.random() > 0.6
    });
  }

  function animate() {
    dustCtx.clearRect(0, 0, w, h);
    petalCtx.clearRect(0, 0, w, h);

    // Draw Dust
    dustParticles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * 0.002 + p.x) * 0.01;

      if (p.y < 0) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }

      dustCtx.beginPath();
      dustCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      dustCtx.fillStyle = `rgba(247, 228, 168, ${Math.max(0.1, Math.min(0.9, p.alpha))})`;
      dustCtx.shadowColor = "#e4be5d";
      dustCtx.shadowBlur = 6;
      dustCtx.fill();
    });

    // Draw Petals
    petals.forEach(pt => {
      pt.y += pt.speedY;
      pt.x += pt.speedX + Math.sin(pt.y * 0.01) * 0.5;
      pt.angle += pt.spin;

      if (pt.y > h + 20) {
        pt.y = -20;
        pt.x = Math.random() * w;
      }

      petalCtx.save();
      petalCtx.translate(pt.x, pt.y);
      petalCtx.rotate((pt.angle * Math.PI) / 180);

      petalCtx.beginPath();
      petalCtx.ellipse(0, 0, pt.size * 0.6, pt.size, 0, 0, Math.PI * 2);
      if (pt.isMarigold) {
        petalCtx.fillStyle = "rgba(245, 175, 25, 0.75)";
      } else {
        petalCtx.fillStyle = "rgba(180, 20, 45, 0.8)";
      }
      petalCtx.fill();
      petalCtx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
