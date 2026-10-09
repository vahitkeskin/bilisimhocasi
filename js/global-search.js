/**
 * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ
 * PROJE GENELİ AKILLI GLOBAL ARAMA MOTORU (SITE-WIDE SEARCH CONTROLLER)
 * 
 * Özellikler:
 * - K-12 13 Kademe Müfredat veritabanı (üniteler, konular, kazanımlar)
 * - 13 Arduino & IoT Donanım Projeleri (bileşenler, pinout, devre şemaları)
 * - Ana Sayfa Bölümleri ve 8 Atölye Alanı
 * - Türkçe karakter ve büyük/küçük harf duyarsız arama
 * - Tam 3 görünür sonuç + yumuşak kaydırma (scroll) desteği
 * - Masaüstü, Mobil, Tablet ve TV tam uyumlu
 * - Klavye kısayolları (Ctrl/Cmd+K, Yukarı/Aşağı Ok, Enter, Esc)
 */

(function () {
  'use strict';

  // --- TÜRKÇE & ÇOK DİLLİ KARAKTER NORMALİZASYONU ---
  function normalizeSearchText(text) {
    if (!text) return '';
    return String(text)
      .replace(/İ/g, 'i')
      .replace(/I/g, 'ı')
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[\s\-_.,;:/\\()\[\]]+/g, ' ')
      .trim();
  }

  function getLang() {
    try {
      if (window.I18N && typeof window.I18N.currentLang === 'function') {
        return window.I18N.currentLang();
      }
      const stored = localStorage.getItem('ugur_site_lang');
      if (stored) return stored;
    } catch (e) {}
    return 'tr';
  }

  // --- STATİK VE DİNAMİK ARAMA DİZİNİ (SITE SEARCH INDEX) ---
  let searchIndex = [];

  function buildSearchIndex() {
    const items = [];
    const lang = getLang();

    // 1. ANA SAYFA BÖLÜMLERİ VE ATÖLYE HİZMETLERİ
    const staticSections = [
      {
        id: 'sec-cover',
        type: 'section',
        title: 'Ana Sayfa — Viranşehir Kampüsü Bilişim & İnovasyon',
        category: 'Sayfa Bölümü',
        badgeClass: 'badge-sec',
        icon: 'fas fa-home',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#F5A623',
        url: 'index.html#cover',
        targetId: 'cover',
        keywords: 'ana sayfa cover giris ugur okullari viransehir kampusu inovasyon vitrin robotik video',
        content: 'Uğur Okulları Viranşehir Kampüsü K-12 Bilişim Teknolojileri, Bilgisayar Bilimi ve Robotik Kodlama laboratuvarı.'
      },
      {
        id: 'sec-services',
        type: 'section',
        title: 'Bilişim & Robotik Atölyeleri (8 Uzmanlık Alanı)',
        category: 'Atölye & Hizmet',
        badgeClass: 'badge-sec',
        icon: 'fas fa-cogs',
        iconBg: 'rgba(124, 77, 255, 0.2)',
        iconColor: '#B388FF',
        url: 'index.html#services',
        targetId: 'services',
        keywords: 'hizmetler atolyeler egitim alanlari dersler robotik kodlama yapay zeka siber guvenlik 3d tasarim',
        content: 'Robotik Kodlama, Yapay Zeka, 3D Tasarım & Üretim, Siber Güvenlik, Mobil Uygulama, Web Yazılım, IoT Gömülü Sistemler, İnovasyon.'
      },
      {
        id: 'sec-robotics-showcase',
        type: 'section',
        title: 'Robotik Donanım & Ventuno Ticari Vitrini',
        category: 'Robotik Vitrini',
        badgeClass: 'badge-ard',
        icon: 'fas fa-robot',
        iconBg: 'rgba(0, 151, 157, 0.2)',
        iconColor: '#4DD0E1',
        url: 'index.html#robotics-showcase',
        targetId: 'robotics-showcase',
        keywords: 'robotik vitrin ventuno video donanim arduino sensor motor ticari video atolye robot',
        content: 'Sonsuz döngülü sessiz Ventuno robotik ticari tanıtım videosu, atölye ekipmanları ve canlı donanım vitrini.'
      },
      {
        id: 'sec-portfolio',
        type: 'section',
        title: 'K-12 Müfredat Kademeleri Vitrini',
        category: 'Müfredat Portalı',
        badgeClass: 'badge-muf',
        icon: 'fas fa-graduation-cap',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#FFD54F',
        url: 'index.html#portfolio',
        targetId: 'portfolio',
        keywords: 'mufredat kademeler genel bakis okul oncesi ilkokul ortaokul lise meb 2026',
        content: '13 sınıf kademesi için MEB 2026 standartlarında bilişim, kodlama ve teknoloji eğitim aşamaları.'
      },
      {
        id: 'sec-aboutUs',
        type: 'section',
        title: 'Hikayemiz & Pedagojik Vizyonumuz',
        category: 'Kurumsal',
        badgeClass: 'badge-sec',
        icon: 'fas fa-book-open',
        iconBg: 'rgba(68, 138, 255, 0.2)',
        iconColor: '#82B1FF',
        url: 'index.html#aboutUs',
        targetId: 'aboutUs',
        keywords: 'hikayemiz hakkimizda vizyon misyon ugur okullari viransehir egitim felsefesi',
        content: 'Geleceğin liderlerini, yazılımcılarını ve mühendislerini yetiştiren Viranşehir Kampüsü eğitim vizyonu.'
      },
      {
        id: 'sec-team',
        type: 'section',
        title: 'Eğitmen & Uzman Kadromuz',
        category: 'Eğitim Kadrosu',
        badgeClass: 'badge-sec',
        icon: 'fas fa-users',
        iconBg: 'rgba(0, 200, 83, 0.2)',
        iconColor: '#69F0AE',
        url: 'index.html#team',
        targetId: 'team',
        keywords: 'kadro ogretmenler egitmenler uzmanlar vahit keskin bilisim hocasi mentorler',
        content: 'Alanında uzman bilişim teknolojileri öğretmenleri, robotik mentörleri ve akademisyen danışmanlar.'
      },
      {
        id: 'sec-contact',
        type: 'section',
        title: 'İletişim & Atölye Randevu Formu',
        category: 'İletişim',
        badgeClass: 'badge-sec',
        icon: 'fas fa-paper-plane',
        iconBg: 'rgba(255, 82, 82, 0.2)',
        iconColor: '#FF8A80',
        url: 'index.html#contact',
        targetId: 'contact',
        keywords: 'iletisim randevu form mesaj telefon email adres basvuru kayit',
        content: 'Viranşehir Kampüsü bilişim atölyesi ziyaret randevusu, veli bilgilendirme ve doğrudan iletişim kanalları.'
      },
      {
        id: 'sec-location',
        type: 'section',
        title: 'Kampüs Konumu & Harita',
        category: 'Ulaşım',
        badgeClass: 'badge-sec',
        icon: 'fas fa-map-marker-alt',
        iconBg: 'rgba(255, 152, 0, 0.2)',
        iconColor: '#FFB74D',
        url: 'index.html#location',
        targetId: 'location',
        keywords: 'konum harita viransehir sanliurfa adres ulasim yol tarifi servis',
        content: 'Uğur Okulları Viranşehir Kampüsü yerleşkesi, Google Haritalar navigasyonu ve ulaşım bilgileri.'
      }
    ];

    items.push(...staticSections);

    // 2. K-12 MÜFREDAT KADEMELERİ (13 SINIF)
    let gradesData = {};
    if (window.CURRICULUM_GRADES_DATA_I18N && window.CURRICULUM_GRADES_DATA_I18N[lang]) {
      gradesData = window.CURRICULUM_GRADES_DATA_I18N[lang];
    } else if (window.CURRICULUM_GRADES_DATA) {
      gradesData = window.CURRICULUM_GRADES_DATA;
    }

    Object.keys(gradesData).forEach(gradeKey => {
      const g = gradesData[gradeKey];
      if (!g) return;

      const term1Topics = (g.term1 || []).map(u => `${u.unit}: ${u.topics}`).join(' | ');
      const term2Topics = (g.term2 || []).map(u => `${u.unit}: ${u.topics}`).join(' | ');
      const outcomes = (g.outcomes || []).join(', ');
      const tools = (g.tools || []).join(', ');

      items.push({
        id: `muf-${gradeKey}`,
        type: 'mufredat',
        gradeKey: gradeKey,
        title: `${g.gradeLabel || g.shortLabel}: ${g.project || 'Bilişim Müfredatı'}`,
        category: `Müfredat (${g.categoryLabel || g.category || 'K-12'})`,
        badgeClass: 'badge-muf',
        icon: g.icon || 'fas fa-laptop-code',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#F5A623',
        url: `mufredat.html?sinif=${encodeURIComponent(gradeKey)}`,
        targetId: `grade-item-${gradeKey}`,
        keywords: `${gradeKey} ${g.shortLabel} ${g.gradeLabel} ${g.category} ${tools} ${g.project} mufredat unite konu kazanim`,
        content: `${g.summary || ''} [1. Dönem: ${term1Topics}] [2. Dönem: ${term2Topics}] [Araçlar: ${tools}] [Kazanımlar: ${outcomes}]`
      });
    });

    // 3. ARDUINO & IoT DONANIM PROJELERİ (13 SINIF)
    const arduinoData = window.ARDUINO_PROJECTS_DATA || {};
    Object.keys(arduinoData).forEach(gradeKey => {
      const p = arduinoData[gradeKey];
      if (!p) return;

      const compNames = (p.components || []).map(c => `${c.name} (${c.role})`).join(', ');
      const pinoutInfo = (p.pinout || []).map(pin => `${pin.pin}: ${pin.compPin}`).join(', ');

      items.push({
        id: `ard-${gradeKey}`,
        type: 'arduino',
        gradeKey: gradeKey,
        title: `Arduino: ${p.shortTitle || p.title}`,
        category: `Arduino Donanım (${p.gradeLabel || ''})`,
        badgeClass: 'badge-ard',
        icon: 'fas fa-microchip',
        iconBg: 'rgba(0, 151, 157, 0.22)',
        iconColor: '#00E5FF',
        url: `mufredat.html?sinif=${encodeURIComponent(gradeKey)}#arduino-project-${encodeURIComponent(gradeKey)}`,
        targetId: `arduino-project-${gradeKey}`,
        keywords: `arduino ${gradeKey} ${p.folder} ${p.shortTitle} ${p.title} ${compNames} ${pinoutInfo} fritzing breadboard devre sema pin port`,
        content: `${p.objective || ''} Çalışma Mantığı: ${p.principle || ''} Bileşenler: ${compNames}. Bağlantılar: ${pinoutInfo}.`
      });
    });

    searchIndex = items;
  }

  // --- ARAMA PUANLAMA & FİLTRELEME MOTORU ---
  function executeSearch(query) {
    if (!searchIndex.length) {
      buildSearchIndex();
    }

    const cleanQuery = normalizeSearchText(query);
    if (!cleanQuery || cleanQuery.length < 2) {
      return [];
    }

    const queryTokens = cleanQuery.split(' ').filter(t => t.length > 0);
    const results = [];

    searchIndex.forEach(item => {
      const normTitle = normalizeSearchText(item.title);
      const normKeywords = normalizeSearchText(item.keywords);
      const normContent = normalizeSearchText(item.content);
      const normCategory = normalizeSearchText(item.category);

      let score = 0;
      let allTokensMatch = true;

      // Her arama kelimesinin içerikte veya başlıkta geçmesi gerekir
      for (let token of queryTokens) {
        let tokenFound = false;

        if (normTitle.includes(token)) {
          score += 60;
          if (normTitle.startsWith(token)) score += 30;
          tokenFound = true;
        }
        if (normKeywords.includes(token)) {
          score += 40;
          tokenFound = true;
        }
        if (normCategory.includes(token)) {
          score += 30;
          tokenFound = true;
        }
        if (normContent.includes(token)) {
          score += 20;
          tokenFound = true;
        }

        if (!tokenFound) {
          allTokensMatch = false;
          break;
        }
      }

      if (allTokensMatch && score > 0) {
        // Tam eşleşme bonusu
        if (normTitle === cleanQuery) score += 100;
        else if (normTitle.includes(cleanQuery)) score += 50;

        // Vurgulu Başlık ve İçerik Parçası Üret
        const highlightedTitle = highlightMatches(item.title, queryTokens);
        const snippet = createSnippet(item.content, queryTokens);
        const highlightedSnippet = highlightMatches(snippet, queryTokens);

        results.push({
          ...item,
          score,
          highlightedTitle,
          highlightedSnippet
        });
      }
    });

    // En yüksek puana göre sırala
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  // Eşleşen kelimeleri <mark> ile vurgula
  function highlightMatches(text, tokens) {
    if (!text) return '';
    let result = text;
    tokens.forEach(tok => {
      if (tok.length < 2) return;
      const regex = new RegExp(`(${escapeRegExp(tok)})`, 'gi');
      result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
    });
    return result;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // İlk eşleşen kelimenin etrafından ~90 karakterlik temiz bir kesit al
  function createSnippet(content, tokens) {
    if (!content) return '';
    const norm = normalizeSearchText(content);
    let firstIndex = -1;

    for (let tok of tokens) {
      const idx = norm.indexOf(tok);
      if (idx !== -1 && (firstIndex === -1 || idx < firstIndex)) {
        firstIndex = idx;
      }
    }

    if (firstIndex === -1) {
      return content.length > 95 ? content.substring(0, 92) + '...' : content;
    }

    const start = Math.max(0, firstIndex - 25);
    const end = Math.min(content.length, firstIndex + 75);
    let snippet = content.substring(start, end).trim();
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    return snippet;
  }

  // --- ARAMA SONUCUNA YÖNLENDİRME / SAYFA İÇİ AKILLI KAYDIRMA ---
  function navigateToResult(item) {
    const isMufredatPage = window.location.pathname.includes('mufredat.html');
    const isIndexPage = !isMufredatPage;

    // 1. Müfredat Kademesi Tıklandı
    if (item.type === 'mufredat') {
      if (isMufredatPage && typeof window.selectCurriculumGrade === 'function') {
        window.selectCurriculumGrade(item.gradeKey, true, true);
        closeAllSearchDropdowns();
        return;
      } else {
        window.location.href = `mufredat.html?sinif=${encodeURIComponent(item.gradeKey)}`;
        return;
      }
    }

    // 2. Arduino Donanım Projesi Tıklandı
    if (item.type === 'arduino') {
      if (isMufredatPage && typeof window.selectCurriculumGrade === 'function') {
        window.selectCurriculumGrade(item.gradeKey, true, false);
        closeAllSearchDropdowns();
        setTimeout(() => {
          const el = document.getElementById(`arduino-project-${item.gradeKey}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('search-highlight-pulse');
            setTimeout(() => el.classList.remove('search-highlight-pulse'), 2500);
          }
        }, 150);
        return;
      } else {
        window.location.href = `mufredat.html?sinif=${encodeURIComponent(item.gradeKey)}#arduino-project-${encodeURIComponent(item.gradeKey)}`;
        return;
      }
    }

    // 3. Ana Sayfa Bölümü Tıklandı
    if (item.type === 'section') {
      if (isIndexPage && item.targetId) {
        const el = document.getElementById(item.targetId);
        if (el) {
          closeAllSearchDropdowns();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('search-highlight-pulse');
          setTimeout(() => el.classList.remove('search-highlight-pulse'), 2500);
          try {
            history.pushState(null, '', `#${item.targetId}`);
          } catch (e) {}
          return;
        }
      }
      window.location.href = item.url;
      return;
    }

    // Varsayılan yönlendirme
    window.location.href = item.url;
  }

  // --- DROPDOWN RENDERLEME & TAM 3 SONUÇ + KAYDIRMA MEKANİZMASI ---
  function t(key, fallback = '') {
    if (window.I18N && typeof window.I18N.t === 'function') {
      const res = window.I18N.t(key);
      if (res && res !== key) return res;
    }
    return fallback || key;
  }

  function renderSearchResults(dropdownEl, results, query) {
    if (!dropdownEl) return;

    if (!query || query.trim().length < 2) {
      dropdownEl.innerHTML = '';
      dropdownEl.classList.remove('active');
      return;
    }

    // Sonuç bulunamadı
    if (results.length === 0) {
      dropdownEl.innerHTML = `
        <div class="search-empty-state">
          <i class="fas fa-search-minus search-empty-icon"></i>
          <p class="search-empty-text">"<strong>${escapeHtml(query)}</strong>${t('search.empty.prefix', '" için sonuç bulunamadı.')}</p>
          <span class="search-empty-sub">${t('search.empty.sub', 'Farklı anahtar kelimeler deneyebilirsiniz (Örn: Arduino, Python, Robotik, LCD, 7. Sınıf).')}</span>
        </div>
      `;
      dropdownEl.classList.add('active');
      return;
    }

    // Başlık ve Kaydırma Bilgilendirme Bandı
    const headerHtml = `
      <div class="search-dropdown-header">
        <span class="search-count-badge">
          <i class="fas fa-bolt mr-1 text-warning"></i> ${results.length} ${t('search.count.found', 'Sonuç Bulundu')}
        </span>
        ${results.length > 3 ? `
          <span class="search-scroll-hint">
            <i class="fas fa-arrows-alt-v mr-1"></i> ${t('search.scroll.hint', 'İlk 3 görünür • Aşağı kaydırın ↓')}
          </span>
        ` : `
          <span class="search-scroll-hint">${t('search.all.listed', 'Tüm sonuçlar listelendi')}</span>
        `}
      </div>
    `;

    // Sonuç Kartları (global-search-results-list içinde 3'er 3'er kaydırılır)
    const itemsHtml = results.map((item, idx) => `
      <div class="search-result-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}" role="option" tabindex="0">
        <div class="search-item-icon" style="background: ${item.iconBg}; color: ${item.iconColor};">
          <i class="${item.icon}"></i>
        </div>
        <div class="search-item-content">
          <div class="search-item-header">
            <h5 class="search-item-title">${item.highlightedTitle}</h5>
            <span class="search-item-badge ${item.badgeClass}">${item.category}</span>
          </div>
          <p class="search-item-snippet">${item.highlightedSnippet}</p>
        </div>
        <div class="search-item-arrow" title="${t('mufredat.grid.btn', 'Sayfaya Git')}">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `).join('');

    // Alt Klavye İpuçları Bandı
    const footerHtml = `
      <div class="search-dropdown-footer">
        <span class="search-kbd-hint"><kbd>↑</kbd><kbd>↓</kbd> ${t('search.kbd.nav', 'Gezin')}</span>
        <span class="search-kbd-hint"><kbd>↵</kbd> ${t('search.kbd.select', 'Seç')}</span>
        <span class="search-kbd-hint"><kbd>ESC</kbd> ${t('search.kbd.close', 'Kapat')}</span>
      </div>
    `;

    dropdownEl.innerHTML = `
      ${headerHtml}
      <div class="global-search-results-list" role="listbox">
        ${itemsHtml}
      </div>
      ${footerHtml}
    `;

    dropdownEl.classList.add('active');

    // Tıklama olaylarını bağla
    const itemEls = dropdownEl.querySelectorAll('.search-result-item');
    itemEls.forEach(el => {
      const idx = parseInt(el.dataset.idx, 10);
      const targetItem = results[idx];

      el.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToResult(targetItem);
      });

      el.addEventListener('mouseenter', () => {
        itemEls.forEach(i => i.classList.remove('active'));
        el.classList.add('active');
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function closeAllSearchDropdowns() {
    document.querySelectorAll('.global-search-dropdown').forEach(d => {
      d.classList.remove('active');
      d.innerHTML = '';
    });
    const quickBar = document.getElementById('mobile-quick-search-bar');
    if (quickBar) quickBar.classList.remove('active');
  }

  // --- ARAMA KUTULARINI BAĞLAMA VE KLAVYE DİNLENMESİ ---
  function setupSearchInstance(inputEl, clearBtnEl, dropdownEl) {
    if (!inputEl || !dropdownEl) return;

    let activeIndex = 0;
    let currentResults = [];

    const handleInput = () => {
      const query = inputEl.value.trim();
      if (clearBtnEl) {
        clearBtnEl.style.display = query.length > 0 ? 'flex' : 'none';
      }

      if (query.length < 2) {
        currentResults = [];
        dropdownEl.classList.remove('active');
        dropdownEl.innerHTML = '';
        return;
      }

      currentResults = executeSearch(query);
      activeIndex = 0;
      renderSearchResults(dropdownEl, currentResults, query);
    };

    inputEl.addEventListener('input', handleInput);

    inputEl.addEventListener('focus', () => {
      if (inputEl.value.trim().length >= 2) {
        handleInput();
      }
    });

    if (clearBtnEl) {
      clearBtnEl.addEventListener('click', () => {
        inputEl.value = '';
        clearBtnEl.style.display = 'none';
        currentResults = [];
        dropdownEl.classList.remove('active');
        dropdownEl.innerHTML = '';
        inputEl.focus();
      });
    }

    // Klavye Yön Tuşları ile Gezinme
    inputEl.addEventListener('keydown', (e) => {
      if (!dropdownEl.classList.contains('active') || currentResults.length === 0) {
        if (e.key === 'Escape') {
          closeAllSearchDropdowns();
          inputEl.blur();
        }
        return;
      }

      const itemEls = dropdownEl.querySelectorAll('.search-result-item');
      if (!itemEls.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % itemEls.length;
        updateActiveItem(itemEls, activeIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + itemEls.length) % itemEls.length;
        updateActiveItem(itemEls, activeIndex);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentResults[activeIndex]) {
          navigateToResult(currentResults[activeIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeAllSearchDropdowns();
        inputEl.blur();
      }
    });
  }

  function updateActiveItem(itemEls, activeIndex) {
    itemEls.forEach((el, idx) => {
      if (idx === activeIndex) {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  // --- TÜM BİLEŞENLERİN BAŞLATILMASI (INIT) ---
  function initGlobalSearch() {
    buildSearchIndex();

    // 1. Masaüstü Arama Kutusu (Title Bar)
    const desktopInput = document.getElementById('global-search-desktop-input');
    const desktopClear = document.getElementById('global-search-desktop-clear');
    const desktopDropdown = document.getElementById('desktop-search-dropdown');
    if (desktopInput && desktopDropdown) {
      setupSearchInstance(desktopInput, desktopClear, desktopDropdown);
    }

    // 2. Mobil Hızlı Arama Kutusu (Slide-Down Bar)
    const quickInput = document.getElementById('global-search-quick-input');
    const quickClear = document.getElementById('mobile-quick-search-clear');
    const quickDropdown = document.getElementById('quick-search-dropdown');
    if (quickInput && quickDropdown) {
      setupSearchInstance(quickInput, quickClear, quickDropdown);
    }

    // 3. Mobil Çekmece Menü İçi Arama Kutusu
    const mobileInput = document.getElementById('global-search-mobile-input');
    const mobileClear = document.getElementById('global-search-mobile-clear');
    const mobileDropdown = document.getElementById('mobile-search-dropdown');
    if (mobileInput && mobileDropdown) {
      setupSearchInstance(mobileInput, mobileClear, mobileDropdown);
    }

    // Mobil Arama Aç/Kapat Butonu
    const mobileToggleBtn = document.getElementById('mobile-search-toggle-btn');
    const mobileQuickBar = document.getElementById('mobile-quick-search-bar');
    const mobileQuickClose = document.getElementById('mobile-quick-search-close');

    if (mobileToggleBtn && mobileQuickBar) {
      mobileToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileQuickBar.classList.toggle('active');
        if (mobileQuickBar.classList.contains('active')) {
          setTimeout(() => {
            if (quickInput) quickInput.focus();
          }, 100);
        } else {
          closeAllSearchDropdowns();
        }
      });
    }

    if (mobileQuickClose && mobileQuickBar) {
      mobileQuickClose.addEventListener('click', (e) => {
        e.preventDefault();
        mobileQuickBar.classList.remove('active');
        closeAllSearchDropdowns();
      });
    }

    // Dışarı tıklanınca arama menüsünü kapat
    document.addEventListener('click', (e) => {
      const isSearchContainer = e.target.closest('.global-search-container') ||
                                e.target.closest('.mobile-quick-search-bar') ||
                                e.target.closest('.mobile-search-section') ||
                                e.target.closest('#mobile-search-toggle-btn');
      if (!isSearchContainer) {
        closeAllSearchDropdowns();
      }
    });

    // Global Klavye Kısayolu: Cmd+K / Ctrl+K veya "/"
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        const activeBar = (window.innerWidth < 1200) ? quickInput : desktopInput;
        if (activeBar) {
          if (window.innerWidth < 1200 && mobileQuickBar) {
            mobileQuickBar.classList.add('active');
          }
          activeBar.focus();
          activeBar.select();
        }
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const activeBar = (window.innerWidth < 1200) ? quickInput : desktopInput;
        if (activeBar) {
          if (window.innerWidth < 1200 && mobileQuickBar) {
            mobileQuickBar.classList.add('active');
          }
          activeBar.focus();
        }
      }
    });

    // Dil değiştiğinde arama indeksini yeniden derle
    window.addEventListener('languageChanged', () => {
      buildSearchIndex();
    });
  }

  // DOM hazır olduğunda başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalSearch);
  } else {
    initGlobalSearch();
  }

})();
