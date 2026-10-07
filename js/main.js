/**
 * UĞUR OKULLARI BİLİŞİM TEKNOLOJİLERİ
 * Main Application Logic & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- AUDIO SYNTHESIZER (WEB AUDIO API - ZERO ASSETS NEEDED) ---
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('ugur_sound_muted') === 'true';
      this.updateToggleButton();
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
    }

    playClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {
        // Audio policy ignore
      }
    }

    playChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      try {
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

          gain.gain.setValueAtTime(0.05, this.ctx.currentTime + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.25);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + idx * 0.06);
          osc.stop(this.ctx.currentTime + idx * 0.06 + 0.25);
        });
      } catch (e) {
        // Audio policy ignore
      }
    }

    toggle() {
      this.muted = !this.muted;
      localStorage.setItem('ugur_sound_muted', this.muted);
      this.updateToggleButton();
      const msg = window.I18N
        ? window.I18N.t(this.muted ? 'toast.sound.off' : 'toast.sound.on')
        : (this.muted ? 'Ses efektleri kapatıldı' : 'Ses efektleri açıldı');
      showToast(msg);
      if (!this.muted) this.playChime();
    }

    updateToggleButton() {
      const btn = document.getElementById('sound-toggle-btn');
      if (btn) {
        btn.setAttribute('aria-label', this.muted ? 'Sesi Aç' : 'Sesi Kapat');
        btn.innerHTML = this.muted
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
      }
    }
  }

  const sfx = new SoundFX();
  window._sfxPlayClick = () => sfx.playClick();

  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => sfx.toggle());
  }

  // --- TOAST NOTIFICATION UTILITY ---
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'glass-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F489C" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${message}`;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  window._showToastFn = showToast;

  // --- THEME MODE CONTROLLER (Açık, Kapalı, Sistem - Memory Persisted) ---
  class ThemeController {
    constructor() {
      this.STORAGE_KEY = 'ugur_theme_mode';
      this.currentMode = localStorage.getItem(this.STORAGE_KEY) || 'system'; // Default: 'system'
      this.mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

      this.menuBtn = document.getElementById('theme-menu-btn');
      this.dropdown = document.getElementById('theme-dropdown-menu');
      this.activeIcon = document.getElementById('theme-current-icon');
      this.choiceButtons = document.querySelectorAll('[data-theme-choice]');

      this.init();
    }

    init() {
      // 1. Synchronize UI & apply theme
      this.applyTheme(this.currentMode, false);

      // 2. React dynamically if OS theme changes while in system mode
      if (this.mediaQuery && this.mediaQuery.addEventListener) {
        this.mediaQuery.addEventListener('change', () => {
          if (this.currentMode === 'system') {
            this.applyTheme('system', false);
          }
        });
      }

      // 3. Dropdown button toggle
      if (this.menuBtn && this.dropdown) {
        this.menuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          sfx.playClick();
          const isOpen = this.dropdown.classList.contains('show');
          this.toggleDropdown(!isOpen);
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
          if (this.dropdown && !this.dropdown.contains(e.target) && e.target !== this.menuBtn) {
            this.toggleDropdown(false);
          }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            this.toggleDropdown(false);
          }
        });
      }

      // 4. Choice buttons click listeners (both dropdown and mobile segmented)
      this.choiceButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const choice = btn.getAttribute('data-theme-choice');
          if (choice) {
            this.setTheme(choice);
            this.toggleDropdown(false);
          }
        });
      });
    }

    toggleDropdown(show) {
      if (!this.dropdown) return;
      if (show) {
        this.dropdown.classList.add('show');
        if (this.menuBtn) this.menuBtn.setAttribute('aria-expanded', 'true');
      } else {
        this.dropdown.classList.remove('show');
        if (this.menuBtn) this.menuBtn.setAttribute('aria-expanded', 'false');
      }
    }

    setTheme(mode) {
      sfx.playClick();
      this.currentMode = mode;
      localStorage.setItem(this.STORAGE_KEY, mode);
      this.applyTheme(mode, true);
    }

    applyTheme(mode, notifyUser = false) {
      let isDark = false;
      if (mode === 'dark') {
        isDark = true;
      } else if (mode === 'light') {
        isDark = false;
      } else {
        // system mode
        isDark = this.mediaQuery ? this.mediaQuery.matches : false;
      }

      // Update HTML root attributes
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme-mode', mode);

      // Update main icon & aria-label
      if (this.activeIcon) {
        if (mode === 'light') {
          this.activeIcon.className = 'fas fa-sun';
          if (this.menuBtn) this.menuBtn.title = 'Tema: Açık Mod';
        } else if (mode === 'dark') {
          this.activeIcon.className = 'fas fa-moon';
          if (this.menuBtn) this.menuBtn.title = 'Tema: Kapalı Mod';
        } else {
          this.activeIcon.className = 'fas fa-desktop';
          if (this.menuBtn) this.menuBtn.title = 'Tema: Sistem Modu (Otomatik)';
        }
      }

      // Synchronize active classes on all buttons with data-theme-choice
      this.choiceButtons.forEach((btn) => {
        const choice = btn.getAttribute('data-theme-choice');
        if (choice === mode) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // User notification toast
      if (notifyUser) {
        const themeKey = 'toast.theme.' + mode;
        const msg = window.I18N ? window.I18N.t(themeKey) : (
          mode === 'light' ? 'Açık Mod aktif edildi' :
          mode === 'dark' ? 'Kapalı Mod aktif edildi' :
          'Sistem Modu aktif edildi (Otomatik)'
        );
        showToast(msg);
      }
    }
  }

  const themeController = new ThemeController();

  // --- SCROLL PROGRESS & NAVBAR STYLE ---
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navbar = document.querySelector('.glass-navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      sfx.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- MOBILE MENU TOGGLE ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close when clicking on any link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // --- FILTERING & SEARCH CONTROLLER ---
  const filterButtons = document.querySelectorAll('.filter-pill-btn');
  const searchInput = document.getElementById('curriculum-search');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const cardWrappers = document.querySelectorAll('.curriculum-card-wrapper');
  const resultsCountEl = document.getElementById('results-count');
  const noResultsBox = document.getElementById('no-results-state');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function applyFilters() {
    let visibleCount = 0;
    const query = currentSearchQuery.trim().toLowerCase();

    cardWrappers.forEach((wrapper) => {
      const category = wrapper.dataset.category;
      const textContent = wrapper.textContent.toLowerCase();

      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = query === '' || textContent.includes(query);

      if (matchesCategory && matchesSearch) {
        wrapper.classList.remove('hidden');
        wrapper.style.display = 'block';
        visibleCount++;
      } else {
        wrapper.classList.add('hidden');
        wrapper.style.display = 'none';
      }
    });

    if (resultsCountEl) {
      resultsCountEl.textContent = visibleCount;
    }

    if (noResultsBox) {
      if (visibleCount === 0) {
        noResultsBox.style.display = 'block';
      } else {
        noResultsBox.style.display = 'none';
      }
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (clearSearchBtn) {
        if (currentSearchQuery.length > 0) {
          clearSearchBtn.classList.add('visible');
        } else {
          clearSearchBtn.classList.remove('visible');
        }
      }
      applyFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        clearSearchBtn.classList.remove('visible');
        searchInput.focus();
        applyFilters();
      }
    });
  }

  // --- CURRICULUM DETAILS MODAL DATA ---
  const curriculumDetailsData = {
    1: {
      stage: '1. Aşama • Ana Sınıfı - 2. Sınıf',
      title: 'Bilişimle Tanışma & Dijital Dünyanın İlk Adımları',
      age: '5 - 8 Yaş Grubu',
      desc: 'Öğrencilerimizin dijital araçlarla ilk bilinçli temasını sağlar. Teknoloji bağımlılığından uzak, yaratıcı ve üretken bir yaklaşımla bilişsel motor becerileri geliştirilir.',
      outcomes: [
        'Fare ile sürükle-bırak, çift tıklama ve işaretleme becerilerini pekiştirme',
        'Klavye üzerindeki yön tuşları, harfler ve temel kontrol tuşlarını tanıma',
        'Ekran başında doğru oturuş pozisyonu (ergonomi) ve süre sınırlaması bilinci',
        'Code.org görsel bulmacaları ile adım adım algoritma ve sıralı komut mantığı',
        'Dijital çizim ve piksel boyama araçlarıyla hayal gücünü ekrana aktarma'
      ],
      tools: ['Code.org Course A-B', 'Tux Paint', 'Mouse Skills Jr', 'LightBot Jr', 'Görsel Algoritma Kartları'],
      project: 'Benim İlk Dijital Hikayem & Kodlamalı Labirent Macerası'
    },
    2: {
      stage: '2. Aşama • 3. Sınıf - 4. Sınıf',
      title: 'Bloklarla Kodlama & Kendi Oyununu Tasarla',
      age: '8 - 10 Yaş Grubu',
      desc: 'Metin tabanlı kodlamaya geçiş öncesinde blok tabanlı mantıksal düşünmeyi mükemmelleştirir. Çocuklar sevdikleri oyunları tüketmek yerine kendi kurallarını yazarlar.',
      outcomes: [
        'Scratch 3.0 arayüzü, sahneler, kostümler ve ses bloklarını yönetme',
        'Döngüler (Sürekli Tekrarla, 10 Defa Tekrarla) ve Koşul İfadeleri (Eğer - İse)',
        'Karakterler arası haber salma (Broadcast) ve etkileşimli diyaloglar oluşturma',
        'X-Y koordinat düzlemi üzerinde karakter hareket ve çarpışma testleri',
        'Dijital vatandaşlık, siber zorbalık farkındalığı ve güvenli şifre oluşturma'
      ],
      tools: ['MIT Scratch 3.0', 'ScratchJr', 'Code.org Express', 'Google Be Internet Awesome', 'Pixel Art Studio'],
      project: 'Labirentten Kaçış & Çevre Bilinci Temalı İnteraktif Platform Oyunu'
    },
    3: {
      stage: '3. Aşama • 5. Sınıf - 6. Sınıf',
      title: '3D Tasarım, Modelleme ve Donanım Mimarisi',
      age: '10 - 12 Yaş Grubu',
      desc: 'Soyut düşünceden somut üretime geçiş. Öğrenciler bilgisayarın iç anatomisini kavrar ve 3 boyutlu uzamsal modelleme ile hayallerindeki nesneleri 3D yazıcı için üretir.',
      outcomes: [
        'Tinkercad ile geometrik şekilleri birleştirme, delik açma ve gruplama teknikleri',
        'Ölçülendirme, milimetrik hizalama ve 3D uzay eksenlerinde (X, Y, Z) çalışma',
        '3D Yazıcı (FDM) çalışma prensibi, filament türleri ve katmanlı üretim mantığı',
        'Bilgisayar donanım mimarisi: Anakart, CPU, RAM, GPU, Güç Kaynağı ve SSD',
        'İkili sayı sistemi (Binary 0-1) ve veri depolama birimlerinin (Byte, KB, MB, GB, TB) dönüşümü'
      ],
      tools: ['Autodesk Tinkercad', 'UltiMaker Cura (Slicer)', 'Donanım Sök-Tak Kiti', 'Canva for Education'],
      project: 'Özelleştirilmiş 3 Boyutlu Anahtarlık Tasarımı & Bilgisayar Montaj Simülasyonu'
    },
    4: {
      stage: '4. Aşama • 7. Sınıf - 8. Sınıf',
      title: 'Maker Hareketi, Fiziksel Programlama & Arduino Dünyası',
      age: '12 - 14 Yaş Grubu',
      desc: 'Yazılımın fiziksel dünyadaki motorlar ve sensörlerle buluştuğu nokta. Maker kültürü ile problem çözme, lehimleme gerektirmeyen prototipleme ve otomasyon.',
      outcomes: [
        'Arduino UNO geliştirme kartı, mikrodenetleyici mimarisi ve pin yapısı (Dijital & PWM & Analog)',
        'Breadboard (Devre Tahtası) iç iletken hatları, direnç (Ohm) ve LED polarite kuralları',
        'Ohm Yasası temelleri ve kısa devre önleme prensipleri',
        'Potansiyometre, LDR (Işık Sensörü) ve Ultrasonik Mesafe Sensörü (HC-SR04) veri okuma',
        'Servo Motor açı kontrolü ve röleler ile mekanik hareket oluşturma'
      ],
      tools: ['Arduino IDE', 'Tinkercad Circuits Devre Simülatörü', 'Arduino UNO R3', 'Sensör Kiti (LDR, Ultrasonik, Servo)'],
      project: 'Akıllı Ev Otomasyonu: Işığa Duyarlı Gece Lambası & Engellerden Kaçan Robot Tasarımı'
    },
    5: {
      stage: '5. Aşama • 9. Sınıf - 10. Sınıf',
      title: 'Gerçek Dünyada Metin Tabanlı Programlama: Python',
      age: '14 - 16 Yaş Grubu',
      desc: 'Dünyanın en popüler dili Python ile profesyonel yazılım geliştirme temelleri. Algoritma karmaşıklığı, fonksiyonel modüller ve veri bilimi hazırlığı.',
      outcomes: [
        'Python 3 sözdizimi, PEP 8 standartları, değişkenler ve veri tipleri (int, float, str, bool)',
        'Koleksiyon yapıları: Listeler (List), Demetler (Tuple) ve Sözlükler (Dictionary)',
        'Döngüler (for, while), koşullu bloklar (if-elif-else) ve mantıksal operatörler',
        'Fonksiyon tanımlama (def), argümanlar, return değerleri ve yerel/küresel kapsam',
        'Hata ayıklama (Exception handling: try-except) ve dosya okuma/yazma (I/O)'
      ],
      tools: ['Python 3.12', 'VS Code / PyCharm Edu', 'Google Colab', 'Jupyter Notebook', 'Turtle Graphics'],
      project: 'Öğrenci Not Otomasyonu & Mini Konsol Veri Analitiği Uygulaması'
    },
    6: {
      stage: '6. Aşama • 11. Sınıf - 12. Sınıf',
      title: 'Geleceğin Teknolojileri: Yapay Zeka, IoT ve Siber Güvenlik',
      age: '16 - 18 Yaş Grubu',
      desc: 'Üniversite ve kariyer vizyonu. Makine öğrenmesi algoritmaları, akıllı nesnelerin interneti (IoT), etik siber savunma stratejileri ve yapay zeka etiği.',
      outcomes: [
        'Yapay zeka (AI) vs Makine Öğrenmesi (ML) vs Derin Öğrenme (DL) kavramsal ayrımı',
        'Büyük Dil Modelleri (LLM) ve Prompt Mühendisliği ile verimli problem çözme',
        'Siber Güvenlik temelleri: Şifreleme algoritmaları, Phishing savunması, Ağ protokolleri (TCP/IP, HTTP/S)',
        'IoT ve ESP32/Cloud mimarisi: Buluta veri aktarımı ve uzaktan telemetri',
        'Yapay zeka etiği, telif hakları, derin sahte (Deepfake) farkındalığı ve sorumlu teknoloji liderliği'
      ],
      tools: ['TensorFlow Lite / Teachable Machine', 'Hugging Face API', 'Wireshark Temelleri', 'MQTT / Adafruit IO', 'Python Scikit-Learn'],
      project: 'Kamera Tabanlı Nesne Tanıma Modeli & Güvenli Akıllı Kampüs IoT Simülasyonu'
    }
  };

  // --- MODAL DIALOG CONTROLLER ---
  const modalBackdrop = document.getElementById('curriculum-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalStageEl = document.getElementById('modal-stage-pill');
  const modalTitleEl = document.getElementById('modal-title');
  const modalAgeEl = document.getElementById('modal-age');
  const modalDescEl = document.getElementById('modal-desc');
  const modalOutcomesListEl = document.getElementById('modal-outcomes-list');
  const modalToolsListEl = document.getElementById('modal-tools-list');
  const modalProjectEl = document.getElementById('modal-project');

  let currentOpenStageId = null;

  function openCurriculumModal(stageId) {
    currentOpenStageId = stageId;
    const data = (window.I18N && window.I18N.getCurriculumData(stageId)) || curriculumDetailsData[stageId];
    if (!data) return;

    if (modalStageEl) modalStageEl.textContent = data.stage;
    if (modalTitleEl) modalTitleEl.textContent = data.title;
    if (modalAgeEl) modalAgeEl.textContent = data.age;
    if (modalDescEl) modalDescEl.textContent = data.desc;

    const outcomeHeader = (window.I18N && window.I18N.t('modal.outcome.label')) || 'Öğrenme Çıktısı';

    if (modalOutcomesListEl) {
      modalOutcomesListEl.innerHTML = data.outcomes
        .map(
          (item) => `
          <div class="outcome-item-card">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span style="color:var(--ugur-cyan); font-weight:bold;">✦</span>
              <strong style="color:#ffffff; font-size:0.875rem;">${outcomeHeader}</strong>
            </div>
            <div>${item}</div>
          </div>
        `
        )
        .join('');
    }

    if (modalToolsListEl) {
      modalToolsListEl.innerHTML = data.tools
        .map((t) => `<span class="tool-tag">⚡ ${t}</span>`)
        .join('');
    }

    if (modalProjectEl) {
      modalProjectEl.textContent = data.project;
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      sfx.playChime();
    }
  }

  function closeCurriculumModal() {
    currentOpenStageId = null;
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      sfx.playClick();
    }
  }

  // Re-render modal in real-time if language changes while open
  window._reRenderModalIfOpen = () => {
    if (currentOpenStageId && modalBackdrop && modalBackdrop.classList.contains('open')) {
      openCurriculumModal(currentOpenStageId);
    }
  };

  // Bind all detail buttons
  document.querySelectorAll('.open-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const stage = btn.dataset.stage;
      openCurriculumModal(stage);
    });
  });

  // Support deep linking to specific stage modal via URL query (?modal=4)
  const urlParams = new URLSearchParams(window.location.search);
  const modalParam = urlParams.get('modal');
  if (modalParam && curriculumDetailsData[modalParam]) {
    setTimeout(() => {
      openCurriculumModal(modalParam);
    }, 400);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCurriculumModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeCurriculumModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeCurriculumModal();
    }
  });

  // --- SHARE & COPY LINK BUTTONS ---
  const shareBtn = document.getElementById('share-page-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      sfx.playClick();
      const shareTitle = window.I18N ? window.I18N.t('meta.title') : 'Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri Müfredatı';
      const shareData = {
        title: shareTitle,
        text: shareTitle,
        url: window.location.href
      };

      if (navigator.share && window.isSecureContext) {
        try {
          await navigator.share(shareData);
          showToast(window.I18N ? window.I18N.t('toast.share') : 'Müfredat bağlantısı paylaşıldı!');
        } catch (err) {
          // Fallback to clipboard
          copyToClipboard(window.location.href);
        }
      } else {
        copyToClipboard(window.location.href);
      }
    });
  }

  function copyToClipboard(text) {
    const successMsg = window.I18N ? window.I18N.t('toast.clipboard') : 'Bağlantı panoya kopyalandı! 📋';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      });
    } else {
      showToast(successMsg);
    }
  }

  // --- COPY CODE SNIPPET (Stage 5 Python preview) ---
  const copyCodeBtn = document.getElementById('copy-code-btn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      sfx.playClick();
      const snippet = `# Uğur Okulları Viranşehir Kampüsü • Bilişim Teknolojileri
def ugur_gelecege_hazirlik(ogrenci):
    yetenekler = ["Algoritmik Düşünce", "Python", "Robotik", "Yapay Zeka"]
    print(f"Tebrikler {ogrenci}! Geleceğin mimarısın.")
    return [beceri.upper() for beceri in yetenekler]

ugur_gelecege_hazirlik("Uğurlu Öğrenci")`;
      copyToClipboard(snippet);
    });
  }
  // --- TYPEWRITER HEADLINE CONTROLLER (Character-by-Character Dynamic Slogans) ---
  const cuteRobotSvg = `<svg class="cute-robot-icon" viewBox="0 0 36 36" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g class="cute-bot-inner">
      <path d="M18 4V8" stroke="#8F489C" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="18" cy="3.5" r="2.5" fill="#8F489C"/>
      <rect x="5.5" y="8" width="25" height="21" rx="6.5" fill="#111827" stroke="#8F489C" stroke-width="2"/>
      <rect x="2.5" y="14" width="3" height="8" rx="1.5" fill="#8F489C"/>
      <rect x="30.5" y="14" width="3" height="8" rx="1.5" fill="#8F489C"/>
      <rect x="8.5" y="11" width="19" height="15" rx="4" fill="#030712"/>
      <ellipse cx="13.5" cy="16.5" rx="2.8" ry="3.2" fill="#00e5ff"/>
      <circle cx="14.3" cy="15.2" r="1.1" fill="#ffffff"/>
      <ellipse cx="22.5" cy="16.5" rx="2.8" ry="3.2" fill="#00e5ff"/>
      <circle cx="23.3" cy="15.2" r="1.1" fill="#ffffff"/>
      <circle cx="11" cy="21.5" r="1.5" fill="#ff7675" opacity="0.85"/>
      <circle cx="25" cy="21.5" r="1.5" fill="#ff7675" opacity="0.85"/>
      <path d="M15.5 21.5 Q 18 24.5 20.5 21.5" stroke="#8F489C" stroke-width="2" stroke-linecap="round" fill="none"/>
    </g>
  </svg>`;

  function getDynamicItems() {
    const lang = (window.I18N && window.I18N.currentLang) ? window.I18N.currentLang() : 'tr';
    const texts = (window.I18N && window.I18N.getTypewriterTexts)
      ? window.I18N.getTypewriterTexts(lang)
      : [
        'Yapay Zeka ve Geleceği Kodluyoruz',
        "Geleceğin Gücü Uğur'da Başlar",
        "Viranşehir'de Başarıyı Zirveye Taşıyoruz",
        'Teknoloji ve İnovasyonun Öncüsü',
        "Siz Hayal Edin, Viranşehir Uğur'da Gerçekleştirelim"
      ];

    return [
      {
        leftHtml: cuteRobotSvg,
        rightIcon: 'fas fa-brain',
        text: texts[0]
      },
      {
        leftIcon: 'fas fa-bolt',
        rightIcon: 'fas fa-fire',
        text: texts[1]
      },
      {
        leftIcon: 'fas fa-chart-line',
        rightIcon: 'fas fa-trophy',
        text: texts[2]
      },
      {
        leftIcon: 'fas fa-laptop-code',
        rightIcon: 'fas fa-microchip',
        text: texts[3]
      },
      {
        leftIcon: 'fas fa-school',
        rightIcon: 'fas fa-rocket',
        text: texts[4]
      }
    ];
  }

  let dynamicItems = getDynamicItems();

  const middleTextEl = document.getElementById('headline-text-middle');
  const leftIconEl = document.getElementById('headline-icon-left');
  const rightIconEl = document.getElementById('headline-icon-right');
  const cardContainer = document.getElementById('dynamic-headline-container');
  const cursorEl = document.getElementById('typewriter-cursor');

  if (middleTextEl && leftIconEl && rightIconEl) {
    let itemIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingTimeout = null;

    function applyIcons(item) {
      if (item.leftHtml) {
        leftIconEl.innerHTML = item.leftHtml;
      } else {
        leftIconEl.innerHTML = `<i class="${item.leftIcon}" aria-hidden="true"></i>`;
      }

      if (item.rightHtml) {
        rightIconEl.innerHTML = item.rightHtml;
      } else {
        rightIconEl.innerHTML = `<i class="${item.rightIcon}" aria-hidden="true"></i>`;
      }

      // Pop animation on badges
      leftIconEl.classList.remove('badge-pop');
      rightIconEl.classList.remove('badge-pop');
      void leftIconEl.offsetWidth; // Reflow
      void rightIconEl.offsetWidth;
      leftIconEl.classList.add('badge-pop');
      rightIconEl.classList.add('badge-pop');
    }

    // Auto-detect multi-line vs single-line layout
    function checkMultilineLayout() {
      if (!cardContainer || !middleTextEl) return;
      const textWrapper = middleTextEl.parentElement;
      if (!textWrapper) return;
      if (textWrapper.clientHeight > 48) {
        cardContainer.classList.add('is-multiline');
      } else {
        cardContainer.classList.remove('is-multiline');
      }
    }

    window.addEventListener('resize', checkMultilineLayout);

    function typeTick() {
      const current = dynamicItems[itemIdx];
      if (!current) return;
      const targetText = current.text;

      if (!isDeleting) {
        // TYPING FORWARD (harf harf yazma)
        charIdx++;
        middleTextEl.textContent = targetText.slice(0, charIdx);
        checkMultilineLayout();

        if (charIdx >= targetText.length) {
          // Finished typing sentence: pause to let user read
          if (cursorEl) cursorEl.classList.add('paused');
          typingTimeout = setTimeout(() => {
            if (cursorEl) cursorEl.classList.remove('paused');
            isDeleting = true;
            typeTick();
          }, 2800);
          return;
        }

        // Realistic typing speed with subtle variation
        const speed = 48 + Math.floor(Math.random() * 22);
        typingTimeout = setTimeout(typeTick, speed);
      } else {
        // ERASING BACKWARD (harf harf silme)
        charIdx--;
        middleTextEl.textContent = targetText.slice(0, charIdx);
        checkMultilineLayout();

        if (charIdx <= 0) {
          // Erased completely: switch to next slogan
          isDeleting = false;
          itemIdx = (itemIdx + 1) % dynamicItems.length;
          applyIcons(dynamicItems[itemIdx]);

          typingTimeout = setTimeout(typeTick, 380);
          return;
        }

        const eraseSpeed = 22;
        typingTimeout = setTimeout(typeTick, eraseSpeed);
      }
    }

    // Dynamic typewriter restart when language switches
    window._typewriterRestart = () => {
      clearTimeout(typingTimeout);
      dynamicItems = getDynamicItems();
      itemIdx = 0;
      charIdx = 0;
      isDeleting = false;
      middleTextEl.textContent = '';
      applyIcons(dynamicItems[0]);
      checkMultilineLayout();
      typingTimeout = setTimeout(typeTick, 200);
    };

    // Initial setup: start typing immediately
    middleTextEl.textContent = '';
    applyIcons(dynamicItems[0]);
    setTimeout(typeTick, 350);
  }
});

