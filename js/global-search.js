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

  // --- TÜRKÇE, İNGİLİZCE & ARAPÇA EVRENSEL KARAKTER NORMALİZASYONU ---
  function normalizeSearchText(text) {
    if (!text) return '';
    let str = String(text);

    // 1. Arapça Tashkeel / Harakat ve Tatweel temizliği
    str = str.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
    str = str.replace(/\u0640/g, '');

    // 2. Arapça Harf Varyasyonları Eşitleme
    str = str.replace(/[أإآٱ]/g, 'ا');
    str = str.replace(/ة/g, 'ه');
    str = str.replace(/[ىئ]/g, 'ي');
    str = str.replace(/ؤ/g, 'و');
    str = str.replace(/ك/g, 'ك').replace(/ک/g, 'ك');

    // 3. Doğu Arap Rakamları -> Batı Rakamları (٠-٩ -> 0-9)
    const arDigits = ['\u0660','\u0661','\u0662','\u0663','\u0664','\u0665','\u0666','\u0667','\u0668','\u0669'];
    for (let i = 0; i < 10; i++) {
      str = str.replace(new RegExp(arDigits[i], 'g'), String(i));
    }

    // 4. Türkçe & İngilizce Büyük/Küçük Harf ve i/ı Katlama (Case & Diacritic Folding)
    // 'İ', 'I', 'ı', 'î' harflerinin tamamı standart 'i' haline getirilerek androID, SINIF, sınıf, Arduino tam eşleşir
    str = str.replace(/İ/g, 'i').replace(/I/g, 'i').replace(/ı/g, 'i').replace(/î/g, 'i').replace(/Î/g, 'i');
    str = str.toLowerCase();
    str = str.replace(/ç/g, 'c')
             .replace(/ğ/g, 'g')
             .replace(/ö/g, 'o')
             .replace(/ş/g, 's')
             .replace(/ü/g, 'u');

    // 5. Latin Aksanları Temizliği (NFD)
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 6. Noktalama işaretleri ve boşluk standardizasyonu
    str = str.replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

    return str;
  }

  // Harf ve aksan duyarsız esnek regex örüntüsü oluşturucu (TR, EN, AR)
  function buildFlexibleRegexPattern(token) {
    if (!token) return '';
    const charMap = {
      'i': '[iIıİîÎ\\u0130\\u0131]',
      'c': '[cCçÇ]',
      'g': '[gGğĞ]',
      'o': '[oOöÖôÔ]',
      'u': '[uUüÜûÛ]',
      's': '[sSşŞ]',
      'a': '[aAâÂáÁàÀäÄãÃ]',
      'e': '[eEéÉèÈêÊëË]',
      'ا': '[اأإآٱ]',
      'ه': '[هة]',
      'ي': '[يىئ]',
      'و': '[وؤ]',
      '0': '[0٠]',
      '1': '[1١]',
      '2': '[2٢]',
      '3': '[3٣]',
      '4': '[4٤]',
      '5': '[5٥]',
      '6': '[6٦]',
      '7': '[7٧]',
      '8': '[8٨]',
      '9': '[9٩]'
    };
    const arHarakat = '[\\u064B-\\u065F\\u0670]*';
    let pattern = '';
    for (const ch of token) {
      if (charMap[ch]) {
        pattern += charMap[ch] + arHarakat;
      } else {
        pattern += ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + arHarakat;
      }
    }
    return pattern;
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

    // 1. ANA SAYFA BÖLÜMLERİ VE ATÖLYE HİZMETLERİ (Çok Dilli Başlık & İçerik)
    const staticSectionData = [
      {
        id: 'sec-cover',
        type: 'section',
        url: 'index.html#cover',
        targetId: 'cover',
        badgeClass: 'badge-sec',
        icon: 'fas fa-home',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#F5A623',
        titles: {
          tr: 'Ana Sayfa — Viranşehir Kampüsü Bilişim & İnovasyon',
          en: 'Home — Viranşehir Campus IT & Innovation',
          ar: 'الصفحة الرئيسية — تكنولوجيا المعلومات والابتكار'
        },
        categories: {
          tr: 'Sayfa Bölümü',
          en: 'Page Section',
          ar: 'قسم الصفحة'
        },
        keywords: 'ana sayfa cover giris ugur okullari viransehir kampusu inovasyon vitrin robotik video home welcome campus education innovation الرئيسية فيرانشهير ابتكار',
        contents: {
          tr: 'Uğur Okulları Viranşehir Kampüsü K-12 Bilişim Teknolojileri, Bilgisayar Bilimi ve Robotik Kodlama laboratuvarı.',
          en: 'Uğur Schools Viranşehir Campus K-12 Information Technologies, Computer Science and Robotics Coding Lab.',
          ar: 'مدارس أوغور مجمع فيرانشهير K-12 تكنولوجيا المعلومات وعلوم الحاسوب ومختبر البرمجة والروبوتات.'
        }
      },
      {
        id: 'sec-services',
        type: 'section',
        url: 'index.html#services',
        targetId: 'services',
        badgeClass: 'badge-sec',
        icon: 'fas fa-cogs',
        iconBg: 'rgba(124, 77, 255, 0.2)',
        iconColor: '#B388FF',
        titles: {
          tr: 'Bilişim & Robotik Atölyeleri (8 Uzmanlık Alanı)',
          en: 'IT & Robotics Workshops (8 Specialty Disciplines)',
          ar: 'ورش عمل الروبوتات وتكنولوجيا المعلومات (8 تخصصات)'
        },
        categories: {
          tr: 'Atölye & Hizmet',
          en: 'Workshops & Services',
          ar: 'الورش والخدمات'
        },
        keywords: 'hizmetler atolyeler egitim alanlari dersler robotik kodlama yapay zeka siber guvenlik 3d tasarim mobil uygulama android ios flutter react native mobile app services workshops coding artificial intelligence cyber security ورش عمل روبوتات ذكاء اصطناعي تطبيقات الجوال أندرويد برمجة',
        contents: {
          tr: 'Robotik Kodlama, Yapay Zeka, 3D Tasarım & Üretim, Siber Güvenlik, Mobil Uygulama (Android & iOS), Web Yazılım, IoT Gömülü Sistemler, İnovasyon.',
          en: 'Robotics Coding, Artificial Intelligence, 3D Design & Printing, Cyber Security, Mobile Application (Android & iOS), Web Development, IoT Embedded Systems.',
          ar: 'البرمجة والروبوتات، الذكاء الاصطناعي، التصميم والطباعة ثلاثية الأبعاد، الأمن السيبراني، تطبيقات الهواتف المحمولة (Android أندرويد و iOS)، تطوير الويب، وإنترنت الأشياء.'
        }
      },
      {
        id: 'sec-robotics-showcase',
        type: 'section',
        url: 'index.html#robotics-showcase',
        targetId: 'robotics-showcase',
        badgeClass: 'badge-ard',
        icon: 'fas fa-robot',
        iconBg: 'rgba(0, 151, 157, 0.2)',
        iconColor: '#4DD0E1',
        titles: {
          tr: 'Robotik Donanım & Ventuno Ticari Vitrini',
          en: 'Robotics Hardware & Ventuno Commercial Showcase',
          ar: 'معرض أجهزة الروبوتات وفينتونو'
        },
        categories: {
          tr: 'Robotik Vitrini',
          en: 'Robotics Showcase',
          ar: 'معرض الروبوتات'
        },
        keywords: 'robotik vitrin ventuno video donanim arduino sensor motor ticari video atolye robot robotics hardware showcase commercial روبوت فينتونو عتاد',
        contents: {
          tr: 'Sonsuz döngülü sessiz Ventuno robotik ticari tanıtım videosu, atölye ekipmanları ve canlı donanım vitrini.',
          en: 'Continuous looping Ventuno robotics commercial video, laboratory hardware equipment and live showcases.',
          ar: 'فيديو تجاري توضيحي لروبوت فينتونو ومعدات الورش ومختبر الأجهزة الحية.'
        }
      },
      {
        id: 'sec-portfolio',
        type: 'section',
        url: 'index.html#portfolio',
        targetId: 'portfolio',
        badgeClass: 'badge-muf',
        icon: 'fas fa-graduation-cap',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#FFD54F',
        titles: {
          tr: 'K-12 Müfredat Kademeleri Vitrini',
          en: 'K-12 Curriculum Showcase',
          ar: 'بوابة المناهج الدراسية K-12'
        },
        categories: {
          tr: 'Müfredat Portalı',
          en: 'Curriculum Portal',
          ar: 'بوابة المناهج'
        },
        keywords: 'mufredat kademeler genel bakis okul oncesi ilkokul ortaokul lise meb 2026 curriculum showcase grades preschool primary middle high school المناهج الدراسية روضة ابتدائي متوسط ثانوي',
        contents: {
          tr: '13 sınıf kademesi için MEB 2026 standartlarında bilişim, kodlama ve teknoloji eğitim aşamaları.',
          en: 'Curriculum stages for 13 grade levels matching national educational standards in IT and coding.',
          ar: 'مراحل تعليم تكنولوجيا المعلومات والبرمجة لـ 13 مرحلة دراسية وفق المعايير المعتمدة.'
        }
      },
      {
        id: 'sec-aboutUs',
        type: 'section',
        url: 'index.html#aboutUs',
        targetId: 'aboutUs',
        badgeClass: 'badge-sec',
        icon: 'fas fa-book-open',
        iconBg: 'rgba(68, 138, 255, 0.2)',
        iconColor: '#82B1FF',
        titles: {
          tr: 'Hikayemiz & Pedagojik Vizyonumuz',
          en: 'Our Story & Pedagogical Vision',
          ar: 'رؤيتنا وفلسفتنا التعليمية'
        },
        categories: {
          tr: 'Kurumsal',
          en: 'About Us',
          ar: 'من نحن'
        },
        keywords: 'hikayemiz hakkimizda vizyon misyon ugur okullari viransehir egitim felsefesi story vision mission philosophy our story من نحن رؤيتنا رسالتنا',
        contents: {
          tr: 'Geleceğin liderlerini, yazılımcılarını ve mühendislerini yetiştiren Viranşehir Kampüsü eğitim vizyonu.',
          en: 'Educational vision educating future software engineers, scientists and leaders.',
          ar: 'رؤية مجمع فيرانشهير لإعداد قادة ومبرمجي ومهندسي المستقبل.'
        }
      },
      {
        id: 'sec-team',
        type: 'section',
        url: 'index.html#team',
        targetId: 'team',
        badgeClass: 'badge-sec',
        icon: 'fas fa-users',
        iconBg: 'rgba(0, 200, 83, 0.2)',
        iconColor: '#69F0AE',
        titles: {
          tr: 'Eğitmen & Uzman Kadromuz',
          en: 'Our Instructors & Expert Team',
          ar: 'كادر المدربين والخبراء'
        },
        categories: {
          tr: 'Eğitim Kadrosu',
          en: 'Faculty Team',
          ar: 'الكادر التعليمي'
        },
        keywords: 'kadro ogretmenler egitmenler uzmanlar vahit keskin bilisim hocasi mentorler teachers instructors faculty mentors team كادر المعلمين المدربين',
        contents: {
          tr: 'Alanında uzman bilişim teknolojileri öğretmenleri, robotik mentörleri ve akademisyen danışmanlar.',
          en: 'Expert IT instructors, robotics mentors and academic technology consultants.',
          ar: 'معلمو تكنولوجيا معلومات متخصصون ومرشدون روبوتيون ومستشارون أكاديميون.'
        }
      },
      {
        id: 'sec-contact',
        type: 'section',
        url: 'index.html#contact',
        targetId: 'contact',
        badgeClass: 'badge-sec',
        icon: 'fas fa-paper-plane',
        iconBg: 'rgba(255, 82, 82, 0.2)',
        iconColor: '#FF8A80',
        titles: {
          tr: 'İletişim & Atölye Randevu Formu',
          en: 'Contact & Workshop Appointment Form',
          ar: 'نموذج الاتصال وحجز موعد الورشة'
        },
        categories: {
          tr: 'İletişim',
          en: 'Contact',
          ar: 'اتصل بنا'
        },
        keywords: 'iletisim randevu form mesaj telefon email adres basvuru kayit contact message appointment form phone email اتصل بنا حجز موعد استفسار',
        contents: {
          tr: 'Viranşehir Kampüsü bilişim atölyesi ziyaret randevusu, veli bilgilendirme ve doğrudan iletişim kanalları.',
          en: 'Campus visit appointments, parental information and direct communication lines.',
          ar: 'حجز مواعيد زيارة ورش العمل وقنوات التواصل المباشر.'
        }
      },
      {
        id: 'sec-location',
        type: 'section',
        url: 'index.html#location',
        targetId: 'location',
        badgeClass: 'badge-sec',
        icon: 'fas fa-map-marker-alt',
        iconBg: 'rgba(255, 152, 0, 0.2)',
        iconColor: '#FFB74D',
        titles: {
          tr: 'Kampüs Konumu & Harita',
          en: 'Campus Location & Map',
          ar: 'موقع الحرم المدرسي والخريطة'
        },
        categories: {
          tr: 'Ulaşım',
          en: 'Location',
          ar: 'الموقع'
        },
        keywords: 'konum harita viransehir sanliurfa adres ulasim yol tarifi servis campus location map directions address navigation الموقع الخريطة العنوان',
        contents: {
          tr: 'Uğur Okulları Viranşehir Kampüsü yerleşkesi, Google Haritalar navigasyonu ve ulaşım bilgileri.',
          en: 'Campus location map, Google Maps navigation route and transport details.',
          ar: 'موقع مجمع مدارس أوغور فيرانشهير عبر خرائط جوجل وتفاصيل الوصول.'
        }
      }
    ];

    staticSectionData.forEach(sec => {
      const title = (sec.titles && sec.titles[lang]) || sec.titles.tr;
      const category = (sec.categories && sec.categories[lang]) || sec.categories.tr;
      const content = (sec.contents && sec.contents[lang]) || sec.contents.tr;

      items.push({
        id: sec.id,
        type: sec.type,
        title: title,
        category: category,
        badgeClass: sec.badgeClass,
        icon: sec.icon,
        iconBg: sec.iconBg,
        iconColor: sec.iconColor,
        url: sec.url,
        targetId: sec.targetId,
        keywords: sec.keywords,
        content: content,
        _normTitle: normalizeSearchText(title),
        _normCategory: normalizeSearchText(category),
        _normKeywords: normalizeSearchText(sec.keywords),
        _normContent: normalizeSearchText(content)
      });
    });

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

      const title = `${g.gradeLabel || g.shortLabel}: ${g.project || 'Bilişim Müfredatı'}`;
      const category = `Müfredat (${g.categoryLabel || g.category || 'K-12'})`;
      const keywords = `${gradeKey} ${g.shortLabel || ''} ${g.gradeLabel || ''} ${g.category || ''} ${tools} ${g.project || ''} mufredat unite konu kazanim curriculum unit topic grade class منهج وحدة دراسية موضوع`;
      const content = `${g.summary || ''} [1. Dönem: ${term1Topics}] [2. Dönem: ${term2Topics}] [Araçlar: ${tools}] [Kazanımlar: ${outcomes}]`;

      items.push({
        id: `muf-${gradeKey}`,
        type: 'mufredat',
        gradeKey: gradeKey,
        title: title,
        category: category,
        badgeClass: 'badge-muf',
        icon: g.icon || 'fas fa-laptop-code',
        iconBg: 'rgba(245, 166, 35, 0.2)',
        iconColor: '#F5A623',
        url: `mufredat.html?sinif=${encodeURIComponent(gradeKey)}`,
        targetId: `grade-item-${gradeKey}`,
        keywords: keywords,
        content: content,
        _normTitle: normalizeSearchText(title),
        _normCategory: normalizeSearchText(category),
        _normKeywords: normalizeSearchText(keywords),
        _normContent: normalizeSearchText(content)
      });
    });

    // 3. ARDUINO & IoT DONANIM PROJELERİ (13 SINIF)
    const arduinoData = window.ARDUINO_PROJECTS_DATA || {};
    Object.keys(arduinoData).forEach(gradeKey => {
      const p = arduinoData[gradeKey];
      if (!p) return;

      const compNames = (p.components || []).map(c => `${c.name} (${c.role})`).join(', ');
      const pinoutInfo = (p.pinout || []).map(pin => `${pin.pin}: ${pin.compPin}`).join(', ');

      const title = `Arduino: ${p.shortTitle || p.title}`;
      const category = `Arduino Donanım (${p.gradeLabel || ''})`;
      const keywords = `arduino ${gradeKey} ${p.folder || ''} ${p.shortTitle || ''} ${p.title || ''} ${compNames} ${pinoutInfo} fritzing breadboard devre sema pin port hardware circuit project sensor اردوينو عتاد دارة مشروع مستشعر`;
      const content = `${p.objective || ''} Çalışma Mantığı: ${p.principle || ''} Bileşenler: ${compNames}. Bağlantılar: ${pinoutInfo}. ${p.circuitDesc || ''}`;

      items.push({
        id: `ard-${gradeKey}`,
        type: 'arduino',
        gradeKey: gradeKey,
        title: title,
        category: category,
        badgeClass: 'badge-ard',
        icon: 'fas fa-microchip',
        iconBg: 'rgba(0, 151, 157, 0.22)',
        iconColor: '#00E5FF',
        url: `mufredat.html?sinif=${encodeURIComponent(gradeKey)}#arduino-project-${encodeURIComponent(gradeKey)}`,
        targetId: `arduino-project-${gradeKey}`,
        keywords: keywords,
        content: content,
        _normTitle: normalizeSearchText(title),
        _normCategory: normalizeSearchText(category),
        _normKeywords: normalizeSearchText(keywords),
        _normContent: normalizeSearchText(content)
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
      const normTitle = item._normTitle || normalizeSearchText(item.title);
      const normKeywords = item._normKeywords || normalizeSearchText(item.keywords);
      const normContent = item._normContent || normalizeSearchText(item.content);
      const normCategory = item._normCategory || normalizeSearchText(item.category);

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

  // Eşleşen kelimeleri <mark> ile vurgula (Büyük/küçük harf ve dil varyasyonlarını koruyarak)
  function highlightMatches(text, tokens) {
    if (!text) return '';
    let result = text;
    tokens.forEach(tok => {
      if (!tok || tok.length < 2) return;
      try {
        const pattern = buildFlexibleRegexPattern(tok);
        const regex = new RegExp(`(${pattern})`, 'gi');
        result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
      } catch (e) {
        const safe = escapeRegExp(tok);
        const regex = new RegExp(`(${safe})`, 'gi');
        result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
      }
    });
    return result;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // İlk eşleşen kelimenin etrafından ~90 karakterlik temiz bir kesit al
  function createSnippet(content, tokens) {
    if (!content) return '';
    let firstIndex = -1;
    let matchLength = 0;

    for (let tok of tokens) {
      if (!tok || tok.length < 2) continue;
      try {
        const pattern = buildFlexibleRegexPattern(tok);
        const regex = new RegExp(pattern, 'i');
        const match = regex.exec(content);
        if (match && (firstIndex === -1 || match.index < firstIndex)) {
          firstIndex = match.index;
          matchLength = match[0].length;
        }
      } catch (e) {}
    }

    if (firstIndex === -1) {
      return content.length > 95 ? content.substring(0, 92) + '...' : content;
    }

    const start = Math.max(0, firstIndex - 25);
    const end = Math.min(content.length, firstIndex + matchLength + 65);
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
          <div class="search-empty-icon-wrap">
            <i class="fas fa-search-minus search-empty-icon"></i>
          </div>
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
          <i class="fas fa-layer-group search-header-icon"></i>
          <span class="search-count-num">${results.length}</span>
          <span class="search-count-label">${t('search.count.found', 'Sonuç Bulundu')}</span>
        </span>
        ${results.length > 3 ? `
          <span class="search-scroll-hint">
            <i class="fas fa-arrows-alt-v mr-1"></i> ${t('search.scroll.hint', 'İlk 3 görünür • Aşağı kaydırın ↓')}
          </span>
        ` : `
          <span class="search-scroll-hint">
            <i class="fas fa-check-circle mr-1 text-success"></i> ${t('search.all.listed', 'Tüm sonuçlar listelendi')}
          </span>
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

  // --- TOPBAR ALTI ARAMA PANELİ (SLIDE-DOWN FLYOUT) AÇMA / KAPATMA ---
  function openSearchFlyout() {
    const flyout = document.getElementById('topbar-search-flyout');
    const backdrop = document.getElementById('topbar-search-backdrop');
    const flyoutInput = document.getElementById('global-search-flyout-input');
    const flyoutDropdown = document.getElementById('flyout-search-dropdown');
    const flyoutClear = document.getElementById('global-search-flyout-clear');

    if (flyout) {
      flyout.classList.add('active');
      flyout.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
      backdrop.classList.add('active');
    }

    if (flyoutInput) {
      setTimeout(() => {
        flyoutInput.focus();
        flyoutInput.select();
        const query = flyoutInput.value.trim();
        if (flyoutClear) {
          flyoutClear.style.display = query.length > 0 ? 'flex' : 'none';
        }
        if (query.length >= 2 && flyoutDropdown) {
          const results = executeSearch(query);
          renderSearchResults(flyoutDropdown, results, query);
        }
      }, 50);
    }
  }

  function closeSearchFlyout() {
    const flyout = document.getElementById('topbar-search-flyout');
    const backdrop = document.getElementById('topbar-search-backdrop');
    const flyoutDropdown = document.getElementById('flyout-search-dropdown');
    const flyoutInput = document.getElementById('global-search-flyout-input');

    if (flyout) {
      flyout.classList.remove('active');
      flyout.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
      backdrop.classList.remove('active');
    }
    if (flyoutDropdown) {
      flyoutDropdown.classList.remove('active');
      flyoutDropdown.innerHTML = '';
    }
    if (flyoutInput) {
      flyoutInput.blur();
    }

    document.querySelectorAll('.global-search-dropdown').forEach(d => {
      d.classList.remove('active');
      d.innerHTML = '';
    });
  }

  function closeAllSearchDropdowns() {
    closeSearchFlyout();
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
          closeSearchFlyout();
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
        closeSearchFlyout();
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

    // 1. Topbar Altına Açılan Arama Paneli (Slide-Down Flyout)
    const flyoutInput = document.getElementById('global-search-flyout-input');
    const flyoutClear = document.getElementById('global-search-flyout-clear');
    const flyoutDropdown = document.getElementById('flyout-search-dropdown');
    const flyoutClose = document.getElementById('global-search-flyout-close');
    const searchBackdrop = document.getElementById('topbar-search-backdrop');

    if (flyoutInput && flyoutDropdown) {
      setupSearchInstance(flyoutInput, flyoutClear, flyoutDropdown);
    }

    // Masaüstü Title Bar Tetikleyici Pill Butonu (#nav-search-trigger-btn)
    const navSearchTriggerBtn = document.getElementById('nav-search-trigger-btn');
    if (navSearchTriggerBtn) {
      navSearchTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const flyout = document.getElementById('topbar-search-flyout');
        if (flyout && flyout.classList.contains('active')) {
          closeSearchFlyout();
        } else {
          openSearchFlyout();
        }
      });
    }

    // Mobil Arama Aç/Kapat Butonu (#mobile-search-toggle-btn)
    const mobileToggleBtn = document.getElementById('mobile-search-toggle-btn');
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const flyout = document.getElementById('topbar-search-flyout');
        if (flyout && flyout.classList.contains('active')) {
          closeSearchFlyout();
        } else {
          openSearchFlyout();
        }
      });
    }

    // Kapat (ESC / Vazgeç) Butonu
    if (flyoutClose) {
      flyoutClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeSearchFlyout();
      });
    }

    // Arka Plan Karartmasına Tıklayınca Kapat
    if (searchBackdrop) {
      searchBackdrop.addEventListener('click', (e) => {
        e.preventDefault();
        closeSearchFlyout();
      });
    }

    // 2. Mobil Çekmece Menü İçi Arama Kutusu (Drawer Search)
    const mobileInput = document.getElementById('global-search-mobile-input');
    const mobileClear = document.getElementById('global-search-mobile-clear');
    const mobileDropdown = document.getElementById('mobile-search-dropdown');
    if (mobileInput && mobileDropdown) {
      setupSearchInstance(mobileInput, mobileClear, mobileDropdown);
    }

    // Dışarı tıklanınca arama menüsünü kapat
    document.addEventListener('click', (e) => {
      const isSearchContainer = e.target.closest('.topbar-search-flyout') ||
                                e.target.closest('#nav-search-trigger-btn') ||
                                e.target.closest('#mobile-search-toggle-btn') ||
                                e.target.closest('.mobile-search-section') ||
                                e.target.closest('.topbar-search-backdrop');
      if (!isSearchContainer) {
        closeSearchFlyout();
      }
    });

    // Global Klavye Kısayolu: Cmd+K / Ctrl+K veya "/"
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        const flyout = document.getElementById('topbar-search-flyout');
        if (flyout && flyout.classList.contains('active')) {
          closeSearchFlyout();
        } else {
          openSearchFlyout();
        }
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearchFlyout();
      } else if (e.key === 'Escape') {
        closeSearchFlyout();
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
