/**
 * UĞUR OKULLARI BİLİŞİM TEKNOLOJİLERİ
 * Main Application Logic & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Dynamic Year for Copyright
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Sound and notification features disabled per user request
  window._sfxPlayClick = () => {};
  window._showToastFn = () => {};

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

      // 5. Reapply theme tooltip when language changes
      window.addEventListener('languageChanged', () => {
        this.applyTheme(this.currentMode, false);
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
        const getT = (key, fallback) => (window.I18N && typeof window.I18N.t === 'function' ? window.I18N.t(key) : fallback);
        if (mode === 'light') {
          this.activeIcon.className = 'fas fa-sun';
          if (this.menuBtn) this.menuBtn.title = getT('theme.light.title', 'Tema: Açık Mod');
        } else if (mode === 'dark') {
          this.activeIcon.className = 'fas fa-moon';
          if (this.menuBtn) this.menuBtn.title = getT('theme.dark.title', 'Tema: Kapalı Mod');
        } else {
          this.activeIcon.className = 'fas fa-desktop';
          if (this.menuBtn) this.menuBtn.title = getT('theme.system.title', 'Tema: Sistem Modu (Otomatik)');
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
  const filterButtons = document.querySelectorAll('.filter-btn, .filter-pill-btn');
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

  // --- CURRICULUM DETAILS MODAL DATA (100% MEB & K12 13-GRADE ALIGNED) ---
  const curriculumDetailsData = {
    "1": {
        "stage": "1. Aşama • Ana Sınıfı - 2. Sınıf",
        "title": "Bilişimle Tanışma & Dijital Dünyanın İlk Adımları",
        "age": "4 - 8 Yaş Grubu",
        "desc": "Öğrencilerimizin dijital araçlarla ilk bilinçli temasını sağlar. Teknoloji bağımlılığından uzak, yaratıcı ve üretken bir yaklaşımla bilişsel motor becerileri geliştirilir.",
        "grades": {
            "anasinifi": {
                "tabTitle": "Ana Sınıfı (4-5 Yaş)",
                "badge": "Okul Öncesi • 4-5 Yaş • Haftalık 1-2 Saat",
                "title": "Ana Sınıfı: Bilgisayarsız Kodlama (Unplugged) & Bilişsel Temeller",
                "age": "4 - 5 Yaş Grubu",
                "scope": "Haftalık 1-2 Ders Saati • MEB Okul Öncesi Bilişsel Gelişim Alanı",
                "desc": "Somut materyaller ve oyun temelli etkinliklerle yön, sıralama ve neden-sonuç ilişkisi kurma. Bilgisayar ekranına bağımlı olmadan algoritmik düşünce tohumları atılır.",
                "term1": [
                    {
                        "unit": "1. Ünite: Bilişim Dünyasını Tanıyorum & Ergonomi",
                        "topics": "Bilişim araçları, ekran mesafesi kuralı, doğru oturuş duruşu ve teknoloji sağlığı."
                    },
                    {
                        "unit": "2. Ünite: Yönler ve Konumlandırma",
                        "topics": "İleri, geri, sağ ve sol yön kavramları, kareli zemin ve labirent üzerinde yönerge takibi."
                    },
                    {
                        "unit": "3. Ünite: Sıralı Mantık & Olay Örüntüleri",
                        "topics": "Günlük yaşam algoritmaları, kartlarla olay sıralama, neden-sonuç bağı kurma."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Bilgisayarsız Kodlama Oyunları",
                        "topics": "Halı matı üzerinde kodlama oyunu, yön okları ile hedefe ulaşan en kısa rota planı."
                    },
                    {
                        "unit": "5. Ünite: Dijital Çizim ve Şekiller",
                        "topics": "Fare ve dokunmatik ekranla temel geometrik şekiller, renk uyumu ve yaratıcı kompozisyon."
                    },
                    {
                        "unit": "6. Ünite: Güvenli Ekran Alışkanlıkları",
                        "topics": "Süre sınırlaması, izinli cihaz kullanımı ve dijital hijyen kuralları."
                    }
                ],
                "outcomes": [
                    "Yönerge ve komut zincirlerini sıralı olarak hatasız uygulayabilme",
                    "Mekansal yön kavramlarını (sağ, sol, ileri, geri) ayırt edebilme",
                    "Ekran karşısında sağlıklı oturma duruşunu ve süre sınırlarını içselleştirme",
                    "Kod blokları ile basit bir hedefe ulaşacak en kısa rotayı planlayabilme"
                ],
                "tools": [
                    "Unplugged Kodlama Matı",
                    "Bee-Bot Simülatörü",
                    "Tux Paint",
                    "Görsel Algoritma Kartları"
                ],
                "project": "Renkli Labirent Macerası: Bee-Bot ile Hazineye Ulaşan Kod Rotaları"
            },
            "sinif1": {
                "tabTitle": "1. Sınıf",
                "badge": "İlkokul • 6-7 Yaş • Haftalık 1-2 Saat",
                "title": "1. Sınıf: Dijital Okuryazarlık, Fare/Klavye Hakimiyeti & Görsel Algoritmalar",
                "age": "6 - 7 Yaş Grubu",
                "scope": "Haftalık 1-2 Ders Saati • MEB Temel Bilişim Becerileri ve Psikomotor Gelişim",
                "desc": "Öğrencilerimizin dijital araçlarla ilk bilinçli teması. Fare ve klavye motor becerileri geliştirilirken görsel bulmacalarla algoritmik düşünce temelleri atılır.",
                "term1": [
                    {
                        "unit": "1. Ünite: Bilgisayar Donanımını Tanıyorum",
                        "topics": "Monitör, kasa, klavye, fare, kulaklık parçaları ve doğru kullanım kuralları."
                    },
                    {
                        "unit": "2. Ünite: Fare (Mouse) Hakimiyeti ve Koordinasyon",
                        "topics": "İşaretleme, tek tık, çift tık, sürükle-bırak teknikleri ve el-göz koordinasyonu."
                    },
                    {
                        "unit": "3. Ünite: Klavye Tuşlarını Keşfetme",
                        "topics": "Harfler, rakamlar, boşluk tuşu (Space), Enter ve silme tuşlarını amaca uygun kullanma."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Code.org ile Görsel Algoritmalar",
                        "topics": "Sıralı komut blokları, hedefe ulaşma bulmacaları ve ilk hata ayıklama (debugging)."
                    },
                    {
                        "unit": "5. Ünite: Dijital Resim ve Yaratıcılık",
                        "topics": "Tux Paint ve Paint ile fırça, şekil, damga araçlarıyla hayal gücünü ekrana yansıtma."
                    },
                    {
                        "unit": "6. Ünite: Dijital Nezaket ve Güvenlik",
                        "topics": "Cihazlara özen gösterme, başkalarının çalışmalarına saygı ve temel dijital güvenlik."
                    }
                ],
                "outcomes": [
                    "Fare ile nesneleri hassas sürükleyip bırakabilme ve çift tıklama eylemlerini yönetme",
                    "Klavye tuş düzenini tanıyarak kendi adını ve temel sayıları yazabilme",
                    "3-5 adımdan oluşan sıralı kod bloklarını mantıksal sıraya dizebilme",
                    "Hatalı verilen komutu fark edip düzeltebilme (ilk hata ayıklama yetisi)"
                ],
                "tools": [
                    "Code.org Course A",
                    "Tux Paint",
                    "GCompris",
                    "Mouse Skills Jr"
                ],
                "project": "Benim Dijital Resim Sergim & 5 Adımlı Algoritmik Hikaye Kartı"
            },
            "sinif2": {
                "tabTitle": "2. Sınıf",
                "badge": "İlkokul • 7-8 Yaş • Haftalık 2 Saat",
                "title": "2. Sınıf: Sıralı Mantık, Döngüler & ScratchJr ile İnteraktif Masallar",
                "age": "7 - 8 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Algoritmik Düşünce ve Blok Kodlama Temelleri",
                "desc": "Döngü (Loop) kavramı ve ScratchJr ile ilk etkileşimli hikayeler. Çocuklar dijital dünyada pasif tüketici olmaktan çıkıp ilk dijital hikaye anlatıcıları olurlar.",
                "term1": [
                    {
                        "unit": "1. Ünite: Problem Çözme ve Adımlara Ayırma",
                        "topics": "Problemi analiz etme, alt parçalara bölme ve adım adım çözüm algoritması üretme."
                    },
                    {
                        "unit": "2. Ünite: Döngü (Loop) Mantığı",
                        "topics": "Tekrarlayan eylemleri keşfetme, döngü bloğu ile kod tekrarını önleme."
                    },
                    {
                        "unit": "3. Ünite: Temel Kelime İşlem Becerileri",
                        "topics": "Kelime işlemcide kısa cümleler yazma, yazı tipi boyutu ve rengi düzenleme."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: ScratchJr ile Karakter ve Sahne Tasarımı",
                        "topics": "Kukla seçme, arka plan çizme, hareket blokları ve konuşma balonları."
                    },
                    {
                        "unit": "5. Ünite: Olaylar (Events) ve Karakter İletişimi",
                        "topics": "Yeşil bayrağa tıklama, karaktere dokunma ve karakterler arası mesajlaşma."
                    },
                    {
                        "unit": "6. Ünite: Dijital Ayak İzi ve Gizlilik",
                        "topics": "Kişisel bilgileri (ad, soyad, adres, telefon) internet ortamında koruma bilinci."
                    }
                ],
                "outcomes": [
                    "Tekrarlanan komut dizilerinde döngü yapılarını kullanarak kodu sadeleştirebilme",
                    "ScratchJr sahnesinde en az iki karakteri konuşturup sıralı diyalog oluşturabilme",
                    "Olay tetikleyicilerini (dokunma, başlama) komut akışına entegre edebilme",
                    "Temel dijital metin düzenleme araçlarını kullanarak kısa cümleler yazabilme"
                ],
                "tools": [
                    "ScratchJr",
                    "Code.org Course B",
                    "LightBot Jr",
                    "Google Dokümanlar Temelleri"
                ],
                "project": "ScratchJr ile Kendi Sesimden Hareketli ve Sesli Masal Kitabı"
            }
        }
    },
    "2": {
        "stage": "2. Aşama • 3. Sınıf - 4. Sınıf",
        "title": "Bloklarla Kodlama & Kendi Oyununu Tasarla",
        "age": "8 - 10 Yaş Grubu",
        "desc": "Metin tabanlı kodlamaya geçiş öncesinde blok tabanlı mantıksal düşünmeyi mükemmelleştirir. Çocuklar sevdikleri oyunları tüketmek yerine kendi kurallarını yazarlar.",
        "grades": {
            "sinif3": {
                "tabTitle": "3. Sınıf",
                "badge": "İlkokul • 8-9 Yaş • Haftalık 2 Saat",
                "title": "3. Sınıf: Scratch 3.0 Dünyasına Giriş, Koordinatlar & Karar Yapıları",
                "age": "8 - 9 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Blok Tabanlı Programlama ve Algoritma Eğitimi",
                "desc": "Scratch 3.0'ın zengin dünyasıyla tanışma. X-Y koordinat sistemi üzerinde karakter hareketleri, sesler, animasyonlar ve karar blokları (Eğer-İse).",
                "term1": [
                    {
                        "unit": "1. Ünite: Scratch 3.0 Arayüzü ve Çalışma Alanı",
                        "topics": "Sahneler, kuklalar, kod blok paletleri ve koordinat düzlemi (X: -240..240, Y: -180..180)."
                    },
                    {
                        "unit": "2. Ünite: Hareket, Dönüş ve Ses Blokları",
                        "topics": "Adım git, derece dön, konuma git, ses çal, ses tonu ve tempo ayarlama."
                    },
                    {
                        "unit": "3. Ünite: Döngüler ve Karar Yapıları (Eğer-İse)",
                        "topics": "Sürekli tekrarla, 10 defa tekrarla, Eğer ... İse koşullu durumlarının mantığı."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Kostüm Animasyonları ve Görsel Efektler",
                        "topics": "Karakter yürüme simülasyonu, kostüm geçişleri, renk ve parlaklık efektleri."
                    },
                    {
                        "unit": "5. Ünite: Algılama (Sensing) Sensör Blokları",
                        "topics": "Fare imlecine değdi mi, renge dokundu mu, soru sor ve cevabı değişkene aktar."
                    },
                    {
                        "unit": "6. Ünite: Dijital Haklar ve Telif Bilinci",
                        "topics": "Telif hakkı kavramı, internette doğru bilgiye ulaşma ve güvenli parola seçimi."
                    }
                ],
                "outcomes": [
                    "Scratch 3.0 arayüzünde kuklaları X ve Y koordinatlarına göre programlayabilme",
                    "Eğer ... ise koşul bloklarını algılama sensörleriyle birleştirip etkileşim kurabilme",
                    "Kostüm değiştirme döngüleriyle akıcı karakter yürüyüş animasyonu oluşturabilme",
                    "İnternette telifli görselleri ve kaynak gösterme kurallarını ayırt edebilme"
                ],
                "tools": [
                    "MIT Scratch 3.0",
                    "Code.org Course C-D",
                    "Google Be Internet Awesome",
                    "Pixel Art Studio"
                ],
                "project": "Akvaryum Dünyası: Balıkların Yem Peşinde Koştuğu İnteraktif Simülasyon"
            },
            "sinif4": {
                "tabTitle": "4. Sınıf",
                "badge": "İlkokul • 9-10 Yaş • Haftalık 2 Saat",
                "title": "4. Sınıf: Scratch ile 2D Oyun Tasarımı, Değişkenler & Dijital Vatandaşlık",
                "age": "9 - 10 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB İleri Blok Kodlama ve Oyun Tasarım Dinamikleri",
                "desc": "Değişkenler, skor tabloları, can sistemleri ve karakterler arası mesajlaşma (Broadcast) ile tam teşekküllü 2 boyutlu oyun geliştirme.",
                "term1": [
                    {
                        "unit": "1. Ünite: Scratch'te Değişkenler (Variables)",
                        "topics": "Skor, can, sayaç ve süre mekanizmalarını oluşturma, artırma ve sıfırlama."
                    },
                    {
                        "unit": "2. Ünite: Haber Salma (Broadcast / Mesajlaşma)",
                        "topics": "Karakterler arası sinyal gönderme, bölüm geçişleri ve oyun sonu ekranları."
                    },
                    {
                        "unit": "3. Ünite: Matematiksel ve Mantıksal Operatörler",
                        "topics": "Rastgele sayı üretme (pick random), büyüktür/küçüktür, VE/VEYA operatörleri."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Kendi 2D Oyununu Geliştirme",
                        "topics": "Labirent oyunu, elma toplama, yerçekimi ve zıplama mekaniklerinin kodlanması."
                    },
                    {
                        "unit": "5. Ünite: Eklentiler (Pen & Text-to-Speech)",
                        "topics": "Kalem eklentisiyle çizim yapma, metinden sese eklentisi ile seslendirme."
                    },
                    {
                        "unit": "6. Ünite: Siber Zorbalık ve Dijital İtibar",
                        "topics": "Çevrim içi nezaket kuralları (Netiquette), güçlü şifreleme ve dijital ayak izi."
                    }
                ],
                "outcomes": [
                    "Değişken (skor/can) ve sayaç mantığını kurup oyun içi kazanma-kaybetme kurallarını yönetebilme",
                    "Haber salma (Broadcast) bloklarıyla oyun başlangıcı, seviye atlama ve oyun sonu ekranlarını bağlayabilme",
                    "Çarpışma algoritmalarını (duvara çarpma, nesneye değme) pürüzsüz kodlayabilme",
                    "Siber zorbalık karşısında doğru bildirim ve korunma adımlarını uygulayabilme"
                ],
                "tools": [
                    "MIT Scratch 3.0",
                    "Canva for Education",
                    "Code.org Express",
                    "Pixel Art Studio"
                ],
                "project": "Doğayı Koru: Sıfır Atık Temalı Çok Seviyeli Puanlı Platform Oyunu"
            }
        }
    },
    "3": {
        "stage": "3. Aşama • 5. Sınıf - 6. Sınıf",
        "title": "3D Tasarım, Modelleme ve Donanım Mimarisi",
        "age": "10 - 12 Yaş Grubu",
        "desc": "Soyut düşünceden somut üretime geçiş. Öğrenciler bilgisayarın iç anatomisini kavrar ve 3 boyutlu uzamsal modelleme ile hayallerindeki nesneleri 3D yazıcı için üretir.",
        "grades": {
            "sinif5": {
                "tabTitle": "5. Sınıf (MEB)",
                "badge": "Ortaokul • 10-11 Yaş • Haftalık 2 Saat • MEB Müfredatı",
                "title": "5. Sınıf: MEB Bilişim Teknolojileri ve Yazılım Dersi Müfredatı",
                "age": "10 - 11 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Talim ve Terbiye Kurulu 5. Sınıf Öğretim Programı",
                "desc": "Bilişim okuryazarlığı, donanım-yazılım anatomisi, dosya hiyerarşisi, internet etiği ve algoritmik problem çözme temelleri.",
                "term1": [
                    {
                        "unit": "1. Ünite: Bilişim Teknolojileri ile Tanışıyorum",
                        "topics": "Donanım ve yazılım kavramları, giriş-çıkış birimleri, dahili ve harici depolama aygıtları."
                    },
                    {
                        "unit": "2. Ünite: İşletim Sistemleri ve Dosya Yönetimi",
                        "topics": "İşletim sistemi türleri, dosya hiyerarşisi, dosya uzantıları (.pdf, .docx, .png, .mp4), sıkıştırma ve bulut depolama."
                    },
                    {
                        "unit": "3. Ünite: Bilişim Etiği, Güvenlik ve Dijital Yurttaşlık",
                        "topics": "Zararlı yazılımlar (virüs, solucan, truva atı), antivirüs kullanımı, güçlü şifreleme ve dijital ayak izi."
                    },
                    {
                        "unit": "4. Ünite: İletişim, Araştırma ve İş Birliği",
                        "topics": "Arama motoru filtreleme teknikleri, e-posta nezaketi, güvenilir bilgi kaynaklarını doğrulama."
                    }
                ],
                "term2": [
                    {
                        "unit": "5. Ünite: Kelime İşlemci ve Sunum Programları",
                        "topics": "Metin biçimlendirme, tablolar, görsel ekleme, slayt tasarımı ve etkili sunum teknikleri."
                    },
                    {
                        "unit": "6. Ünite: Problem Çözme Kavramları ve Algoritmalar",
                        "topics": "Günlük hayat problemlerini algoritma adımlarına dönüştürme, karar noktaları ve akış."
                    },
                    {
                        "unit": "7. Ünite: Blok Tabanlı Kodlama Temelleri",
                        "topics": "Bloklarla problem çözme, kukla yönetimi, temel döngüler ve koşullu ifadeler."
                    }
                ],
                "outcomes": [
                    "Bilgisayar donanım bileşenlerini (dahili/harici) ve işletim sistemi rollerini doğru sınıflandırabilme",
                    "Dijital dosya organizasyonu yapabilme ve zararlı yazılımlardan (virüs, truva atı) korunma yollarını bilme",
                    "Bilgiye erişimde telif haklarına riayet ederek akademik araştırma ve sunum hazırlayabilme",
                    "Bir problemi alt adımlara ayrıştırıp sözel ve görsel algoritmasını yazabilme"
                ],
                "tools": [
                    "MEB EBA Bilişim Portalı",
                    "LibreOffice / Google Dokümanlar",
                    "MIT Scratch 3.0",
                    "Donanım Sök-Tak Kiti"
                ],
                "project": "Kampüs Güvenli İnternet Rehberi: İnteraktif Dijital Sunum & Bilişim Bilgi Yarışması"
            },
            "sinif6": {
                "tabTitle": "6. Sınıf (MEB)",
                "badge": "Ortaokul • 11-12 Yaş • Haftalık 2 Saat • MEB Müfredatı",
                "title": "6. Sınıf: MEB Bilişim Müfredatı, Elektronik Tablolar & Tinkercad 3D Tasarım",
                "age": "11 - 12 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Talim ve Terbiye Kurulu 6. Sınıf Öğretim Programı",
                "desc": "Ağ mimarisi, telif hukuku, tablolama ile veri analizi ve Autodesk Tinkercad ile 3D modelleme ve 3D yazıcı üretim süreçleri.",
                "term1": [
                    {
                        "unit": "1. Ünite: Bilişim Teknolojileri ve Ağlar",
                        "topics": "Ağ türleri (LAN, MAN, WAN), istemci-sunucu yapısı, modem, yönlendirici ve IP adresi kavramları."
                    },
                    {
                        "unit": "2. Ünite: Bilişim Suçları, Telif Hakları ve Lisanslar",
                        "topics": "Bilişim suçları mevzuatı, açık kaynak yazılımlar, Creative Commons ve KVKK temelleri."
                    },
                    {
                        "unit": "3. Ünite: Elektronik Tablolar ile Veri Analizi",
                        "topics": "Hücreler, satırlar, sütunlar; matematiksel formüller (TOPLA, ORTALAMA, EĞER) ve grafikler."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Tinkercad ile 3 Boyutlu Tasarım & Modelleme",
                        "topics": "Çalışma düzlemi, X-Y-Z eksenleri, katı ve delik şekiller, gruplama ve milimetrik hizalama."
                    },
                    {
                        "unit": "5. Ünite: Katmanlı Üretim ve 3D Yazıcı Teknolojileri",
                        "topics": "FDM 3D yazıcı mekaniği, filament türleri (PLA/ABS), dilimleme (slicing) ve katman kalınlığı."
                    },
                    {
                        "unit": "6. Ünite: İleri Algoritmalar ve Modüler Kodlama",
                        "topics": "Fonksiyon blokları ('Kendi Bloğunu Yap'), karmaşık mantıksal operatörler ve değişkenler."
                    }
                ],
                "outcomes": [
                    "Elektronik tablolarda formüller ve mantıksal fonksiyonlarla veri hesaplayıp grafiklendirebilme",
                    "3 boyutlu uzamda geometrik formları milimetrik birleştirip oyuk/delik teknikleriyle özgün modeller tasarlayabilme",
                    "Katmanlı imalat (3D baskı) prensiplerini ve dilimleme parametrelerini açıklayabilme",
                    "Kendi fonksiyon bloklarını tanımlayarak (modüler programlama) kod tekrarını önleyebilme"
                ],
                "tools": [
                    "Autodesk Tinkercad",
                    "UltiMaker Cura (Slicer)",
                    "Google E-Tablolar / Excel",
                    "MEB Scratch 3.0"
                ],
                "project": "3D Yazıcı için İsme Özel Ergonomik Masaüstü Telefon Standı & Maliyet Analiz Tablosu"
            }
        }
    },
    "4": {
        "stage": "4. Aşama • 7. Sınıf - 8. Sınıf",
        "title": "Maker Hareketi, Fiziksel Programlama & Arduino Dünyası",
        "age": "12 - 14 Yaş Grubu",
        "desc": "Yazılımın fiziksel dünyadaki motorlar ve sensörlerle buluştuğu nokta. Maker kültürü ile problem çözme, lehimleme gerektirmeyen prototipleme ve otomasyon.",
        "grades": {
            "sinif7": {
                "tabTitle": "7. Sınıf",
                "badge": "Ortaokul • 12-13 Yaş • Haftalık 2 Saat • Maker & micro:bit",
                "title": "7. Sınıf: Fiziksel Programlama, Sensörler & BBC micro:bit Dünyası",
                "age": "12 - 13 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • Fiziksel Bilişim, Sensör Mimarisi ve Maker Kültürü",
                "desc": "Yazılımın somut dünyaya taşındığı nokta. BBC micro:bit kartı, MakeCode blokları, entegre sensörler ve kablosuz radyo iletişimi.",
                "term1": [
                    {
                        "unit": "1. Ünite: Fiziksel Bilişime Giriş & Temel Devre Bilgisi",
                        "topics": "Akım, gerilim, direnç kavramları, açık/kapalı devre ve iletkenlik prensipleri."
                    },
                    {
                        "unit": "2. Ünite: BBC micro:bit Kartı ve MakeCode Arayüzü",
                        "topics": "5x5 LED matrisi, butonlar A/B, pin yapısı (0, 1, 2, 3V, GND) ve ilk kod yükleme."
                    },
                    {
                        "unit": "3. Ünite: Entegre Çevre Sensörleri ile Veri Okuma",
                        "topics": "Sıcaklık, ışık seviyesi ve ivmeölçer (sarsıntı, eğim, serbest düşüş) verilerinin işlenmesi."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Radyo Frekansı ile Kablosuz İletişim",
                        "topics": "micro:bit kartları arasında veri paketleri gönderme/alma ve çoklu cihaz ağı kurma."
                    },
                    {
                        "unit": "5. Ünite: Harici Aktüatörler: Buzzer & Servo Motor",
                        "topics": "Harici pin bağlantıları, açısal servo motor kontrolü (0-180 derece) ve melodi çalma."
                    },
                    {
                        "unit": "6. Ünite: Mühendislik Tasarım Döngüsü ve Prototipleme",
                        "topics": "Problem tanımlama, sistem tasarımı, prototip üretimi ve test süreci."
                    }
                ],
                "outcomes": [
                    "Elektrik devresi elemanlarını ve temel fiziksel bilişim mantığını açıklayabilme",
                    "MakeCode ortamında micro:bit sensörlerinden veri okuyup LED ekranında görselleştirebilme",
                    "İki mikrodenetleyici arasında radyo frekansıyla kablosuz veri aktarımı yapabilme",
                    "Servo motorların dönüş açılarını ortam verisine göre otomatik tetikleyebilme"
                ],
                "tools": [
                    "BBC micro:bit V2",
                    "Microsoft MakeCode",
                    "Tinkercad Circuits",
                    "Krokodil Kablo & Sensör Kiti"
                ],
                "project": "Akıllı Sera Projesi: Toprak Nemi ve Işık Değerlerini Ölçen Otomatik Sulama Alarmı"
            },
            "sinif8": {
                "tabTitle": "8. Sınıf",
                "badge": "Ortaokul • 13-14 Yaş • Haftalık 2 Saat • Arduino Robotik",
                "title": "8. Sınıf: Arduino UNO, Devre Tasarımı, Motor Sürücüler & Otonom Robotik",
                "age": "13 - 14 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • Uygulamalı Robotik Kodlama ve Gömülü Sistemler",
                "desc": "Arduino UNO geliştirme kartı, Breadboard devreleri, sensör veri işleme, DC motor kontrolü ve engellerden kaçan otonom mobil robot projesi.",
                "term1": [
                    {
                        "unit": "1. Ünite: Arduino Donanımı ve Geliştirme Ortamı",
                        "topics": "ATmega328P mikrodenetleyicisi, Dijital I/O, PWM pinleri, Analog pinler ve Breadboard iletken hatları."
                    },
                    {
                        "unit": "2. Ünite: Elektronik Komponentler ve Ohm Kanunu",
                        "topics": "Direnç hesaplama (renk kodları), LED polaritesi, pull-up/pull-down dirençler ve buton okuma."
                    },
                    {
                        "unit": "3. Ünite: Analog Girişler ve Ortam Sensörleri",
                        "topics": "Potansiyometre, LDR (Işık sensörü), analogRead() fonksiyonu ve map() ölçekleme matematiği."
                    }
                ],
                "term2": [
                    {
                        "unit": "4. Ünite: Mesafe Ölçümü ve Engel Algılama",
                        "topics": "HC-SR04 ultrasonik sensör çalışma prensibi, ses dalgasıyla milimetrik mesafe hesaplama."
                    },
                    {
                        "unit": "5. Ünite: Motor Sürücüler ve Hareket Sistemleri",
                        "topics": "L298N çift H-Köprüsü motor sürücüsü, DC motor yön ve PWM ile hız kontrolü."
                    },
                    {
                        "unit": "6. Ünite: Otonom Robotik Sistem Entegrasyonu",
                        "topics": "2WD robot şasisi montajı, güç yönetimi, sensör kalibrasyonu ve otonom rota algoritmaları."
                    }
                ],
                "outcomes": [
                    "Breadboard üzerinde şemaya uygun, kısa devresiz elektronik devre kurabilme",
                    "Analog ve dijital sensör verilerini işleyip aktüatörleri (LED, buzzer, motor) yönlendirebilme",
                    "Ultrasonik ses dalgalarıyla milimetrik mesafe ölçüp mantıksal karar algoritmaları yazabilme",
                    "İki tekerlekten tahrikli bir robot şasisine engel tanıma ve kaçma otonomisi kazandırabilme"
                ],
                "tools": [
                    "Arduino UNO R3",
                    "Arduino IDE / mBlock",
                    "Tinkercad Circuits",
                    "HC-SR04",
                    "L298N Motor Sürücü"
                ],
                "project": "Engellerden Kaçan Otonom Gezgin Robot & Akıllı Park Mesafe Uyarı Sistemi"
            }
        }
    },
    "5": {
        "stage": "5. Aşama • 9. Sınıf - 10. Sınıf",
        "title": "Gerçek Dünyada Metin Tabanlı Programlama: Python",
        "age": "14 - 16 Yaş Grubu",
        "desc": "Dünyanın en popüler dili Python ile profesyonel yazılım geliştirme temelleri. Algoritma karmaşıklığı, fonksiyonel modüller ve veri bilimi hazırlığı.",
        "grades": {
            "sinif9": {
                "tabTitle": "9. Sınıf (MEB Kur 1)",
                "badge": "Lise • 14-15 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 1",
                "title": "9. Sınıf: MEB Bilgisayar Bilimi Kur 1: Problem Çözme, Algoritmalar & Python Temelleri",
                "age": "14 - 15 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 1 Öğretim Programı",
                "desc": "Metin tabanlı programlamaya profesyonel geçiş. Algoritmik modelleme, akış şemaları ve Python 3 diliyle değişkenler, veri tipleri ve koşullu durumlar.",
                "term1": [
                    {
                        "unit": "1. Ünite: Bilgisayar Bilimi ve Problem Çözme Stratejileri",
                        "topics": "Algoritma tasarımı, akış şeması standart sembolleri, sözde kod (pseudocode) yazımı."
                    },
                    {
                        "unit": "2. Ünite: Python Programlama Diline Giriş",
                        "topics": "Python yorumlayıcısı, IDE kurulumu, PEP 8 kod standartları, print() ve input() fonksiyonları."
                    },
                    {
                        "unit": "3. Ünite: Değişkenler, Veri Tipleri ve Tip Dönüşümleri",
                        "topics": "int, float, str, bool türleri; type(), int(), float(), str() dinamik tip dönüşümleri."
                    },
                    {
                        "unit": "4. Ünite: Aritmetiksel ve Karşılaştırma Operatörleri",
                        "topics": "+, -, *, /, // (tam bölme), % (mod), ** (üs alma); ==, !=, <, >, <=, >= operatörleri."
                    }
                ],
                "term2": [
                    {
                        "unit": "5. Ünite: Koşullu Durumlar ve Karar Yapıları",
                        "topics": "if, elif, else blokları; mantıksal operatörler (and, or, not) ile karmaşık karar ağaçları."
                    },
                    {
                        "unit": "6. Ünite: İç İçe Koşullar ve Temel Hata Yönetimi",
                        "topics": "Nested if-else mantığı, geçersiz kullanıcı girdilerini denetleme ve filtreleme."
                    },
                    {
                        "unit": "7. Ünite: Turtle Modülü ile Kodla Görsel Modelleme",
                        "topics": "Turtle grafik kütüphanesi, açı ve mesafe matematiği, döngülerle geometrik desenler."
                    }
                ],
                "outcomes": [
                    "Verilen karmaşık problemleri standart akış şemaları (flowchart) ve sözde kodlarla modelleyebilme",
                    "Python sözdizimi ve PEP 8 temiz kod kurallarına uygun değişken ve ifadeler tanımlayabilme",
                    "Çok dallı koşullu durumları (if-elif-else) mantıksal operatörlerle hatasız kurgulayabilme",
                    "Konsol üzerinden kullanıcı girdilerini doğrulayarak dinamik hesaplama programları geliştirebilme"
                ],
                "tools": [
                    "Python 3.12",
                    "VS Code / Thonny IDE",
                    "Flowgorithm",
                    "Turtle Graphics"
                ],
                "project": "Öğrenci Not Ortalaması ve Harf Notu Hesaplayan İnteraktif Konsol Sistemi"
            },
            "sinif10": {
                "tabTitle": "10. Sınıf (MEB Kur 1 İleri)",
                "badge": "Lise • 15-16 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 1 İleri",
                "title": "10. Sınıf: MEB Bilgisayar Bilimi Kur 1: Döngüler, Veri Yapıları, Fonksiyonlar & Dosya Yönetimi",
                "age": "15 - 16 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 1 İleri Programı",
                "desc": "Döngüler, Python veri yapıları (Listeler, Demetler, Sözlükler), modüler fonksiyonlar ve kalıcı dosya okuma-yazma operasyonları.",
                "term1": [
                    {
                        "unit": "1. Ünite: Döngü Yapıları (For & While)",
                        "topics": "For ve while döngü mekanikleri, range() adımları, sonsuz döngüden kaçınma stratejileri."
                    },
                    {
                        "unit": "2. Ünite: Döngü Kontrol İfadeleri",
                        "topics": "break, continue, pass anahtar kelimeleri; iç içe döngüler ve matris mantığı."
                    },
                    {
                        "unit": "3. Ünite: Python Koleksiyonları: Listeler (Lists)",
                        "topics": "İndeksleme, dilimleme (slicing), list metodları (append, insert, pop, remove, sort)."
                    },
                    {
                        "unit": "4. Ünite: Demetler (Tuples) ve Kümeler (Sets)",
                        "topics": "Değiştirilemez (immutable) veri yapıları, küme işlemleri (kesişim, birleşim, fark)."
                    }
                ],
                "term2": [
                    {
                        "unit": "5. Ünite: Sözlükler (Dictionaries) ve Key-Value Mimarisi",
                        "topics": "Anahtar-değer ilişkisi, sözlük metodları (keys, values, items, get), iç içe sözlükler."
                    },
                    {
                        "unit": "6. Ünite: Fonksiyonlar ve Modüler Kod Tasarımı",
                        "topics": "def ile fonksiyon tanımlama, parametreler, varsayılan argümanlar, return değerleri."
                    },
                    {
                        "unit": "7. Ünite: Kapsam (Scope) ve Hazır Modüller",
                        "topics": "Local vs Global kapsam, math, random, datetime modüllerini içe aktarma ve kullanma."
                    },
                    {
                        "unit": "8. Ünite: Dosya Yönetimi ve Hata Yakalama (I/O)",
                        "topics": "try-except hata yakalama blokları; dosya açma modları ('r', 'w', 'a'), TXT ve CSV kayıt."
                    }
                ],
                "outcomes": [
                    "For ve while döngülerini liste ve sözlük yapıları üzerinde gezinti (iteration) için etkin kullanabilme",
                    "Çok boyutlu listeler ve sözlükler ile yapılandırılmış veri tablosu modelleyebilme",
                    "Tekrar kullanılabilir, modüler fonksiyonlar yazıp parametre ve dönüş değerlerini yönetebilme",
                    "Metin ve CSV dosyalarına veri yazıp okuyarak veriyi kalıcı olarak saklayabilme"
                ],
                "tools": [
                    "Python 3.12",
                    "VS Code",
                    "Jupyter Notebook",
                    "PyCharm Community",
                    "GitHub Temelleri"
                ],
                "project": "Dosya Kayıtlı & Menülü Kütüphane / Envanter Takip Konsol Otomasyonu"
            }
        }
    },
    "6": {
        "stage": "6. Aşama • 11. Sınıf - 12. Sınıf",
        "title": "Geleceğin Teknolojileri: Yapay Zeka, IoT ve Siber Güvenlik",
        "age": "16 - 18 Yaş Grubu",
        "desc": "Üniversite ve kariyer vizyonu. Makine öğrenmesi algoritmaları, akıllı nesnelerin interneti (IoT), etik siber savunma stratejileri ve yapay zeka etiği.",
        "grades": {
            "sinif11": {
                "tabTitle": "11. Sınıf (MEB Kur 2)",
                "badge": "Lise • 16-17 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 2",
                "title": "11. Sınıf: MEB Bilgisayar Bilimi Kur 2: Web Teknolojileri (HTML5/CSS3/JS) & SQL Veri Tabanı",
                "age": "16 - 17 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 2 Öğretim Programı",
                "desc": "Modern web geliştirme mimarisi, nesne yönelimli programlama (OOP) ve ilişkisel veritabanı (SQL) entegrasyonu.",
                "term1": [
                    {
                        "unit": "1. Ünite: Web Mimarisi ve Semantik HTML5",
                        "topics": "İstemci-Sunucu modeli, HTTP/HTTPS protokolleri, semantik HTML etiketleri, formlar ve erişilebilirlik."
                    },
                    {
                        "unit": "2. Ünite: Modern CSS3 ve Responsive Tasarım",
                        "topics": "Kutu modeli (box-model), Flexbox ve Grid düzen sistemleri, medya sorguları (@media) ile mobil uyum."
                    },
                    {
                        "unit": "3. Ünite: JavaScript Temelleri ve DOM Manipülasyonu",
                        "topics": "Değişkenler, fonksiyonlar, addEventListener olay dinleyicileri, DOM elemanlarını dinamik değiştirme."
                    },
                    {
                        "unit": "4. Ünite: Nesne Yönelimli Programlama (OOP) İlkeleri",
                        "topics": "Sınıflar (Class), Nesneler (Object), __init__ yapıcı metodlar, kalıtım (inheritance) ve kapsülleme."
                    }
                ],
                "term2": [
                    {
                        "unit": "5. Ünite: İlişkisel Veritabanı Mimarisi ve Modelleme",
                        "topics": "Tablo yapısı, birincil anahtar (Primary Key), yabancı anahtar (Foreign Key), veri tipleri."
                    },
                    {
                        "unit": "6. Ünite: SQL Sorgu Dili Temelleri",
                        "topics": "SELECT, WHERE, INSERT INTO, UPDATE, DELETE, ORDER BY ve GROUP BY komutları."
                    },
                    {
                        "unit": "7. Ünite: Python ile SQLite Veritabanı Entegrasyonu",
                        "topics": "sqlite3 kütüphanesi, veritabanı bağlantısı, imleç (cursor) yönetimi ve dinamik sorgulama."
                    },
                    {
                        "unit": "8. Ünite: Web Güvenliği ve Temel API Entegrasyonu",
                        "topics": "Form doğrulama, SQL Enjeksiyonu farkındalığı, Fetch API ile JSON veri çekme."
                    }
                ],
                "outcomes": [
                    "Modern web standartlarına uygun semantik ve mobil uyumlu çok sayfalı web arayüzleri kodlayabilme",
                    "JavaScript ile web sayfalarına dinamik etkileşimler ve form doğrulama mantığı ekleyebilme",
                    "Nesne yönelimli programlama felsefesiyle gerçek hayat varlıklarını sınıflarla modelleyebilme",
                    "SQL sorguları ile ilişkisel veritabanı CRUD (Oluştur, Oku, Güncelle, Sil) işlemlerini Python üzerinden çalıştırabilme"
                ],
                "tools": [
                    "VS Code",
                    "Chrome DevTools",
                    "DB Browser for SQLite",
                    "Git / GitHub",
                    "Figma"
                ],
                "project": "SQLite Veritabanı Destekli & Duyarlı Tasarımlı Kişisel Portfolyo / Blog Web Sitesi"
            },
            "sinif12": {
                "tabTitle": "12. Sınıf (Yapay Zeka & Siber Güvenlik)",
                "badge": "Lise • 17-18 Yaş • Haftalık 2 Saat • İleri Teknoloji & Kariyer",
                "title": "12. Sınıf: Geleceğin Teknolojileri: Yapay Zeka, Nesnelerin İnterneti (IoT) & Siber Güvenlik",
                "age": "17 - 18 Yaş Grubu",
                "scope": "Haftalık 2 Ders Saati • İleri İnovasyon, Üniversiteye ve Teknoloji Kariyerine Hazırlık",
                "desc": "Makine öğrenmesi modelleri, ESP32 ile bulut IoT mimarisi, etik siber güvenlik stratejileri ve TEKNOFEST/TÜBİTAK vizyonu.",
                "term1": [
                    {
                        "unit": "1. Ünite: Yapay Zeka (AI) ve Makine Öğrenmesi (ML) Esasları",
                        "topics": "Gözetimli, gözetimsiz ve pekiştirmeli öğrenme; sınıflandırma ve regresyon modelleri."
                    },
                    {
                        "unit": "2. Ünite: Bilgisayarlı Görü ve Görüntü İşleme Temelleri",
                        "topics": "OpenCV, Teachable Machine, görüntü etiketleme ve kamera ile gerçek zamanlı nesne tespiti."
                    },
                    {
                        "unit": "3. Ünite: Büyük Dil Modelleri (LLM) & Prompt Mühendisliği",
                        "topics": "Üretken yapay zeka araçları, prompt optimizasyonu, yapay zeka etiği ve telif hakları."
                    },
                    {
                        "unit": "4. Ünite: Nesnelerin İnterneti (IoT) ve ESP32 Mimarisi",
                        "topics": "ESP32 Wi-Fi/BLE bağlantısı, MQTT protokolü, sensör telemetrisini buluta (Adafruit IO) aktarma."
                    }
                ],
                "term2": [
                    {
                        "unit": "5. Ünite: Siber Güvenlik Temelleri ve Ağ Savunması",
                        "topics": "CIA üçgeni (Gizlilik, Bütünlük, Erişilebilirlik), şifreleme algoritmaları (AES, RSA), TLS/SSL."
                    },
                    {
                        "unit": "6. Ünite: Tehdit Analizi ve Etik Savunma",
                        "topics": "Phishing (Oltalama), Man-in-the-Middle, Wireshark ile paket analizi ve güvenli parola politikaları."
                    },
                    {
                        "unit": "7. Ünite: Dijital Ayak İzi, KVKK & Teknoloji Liderliği",
                        "topics": "Derin sahte (Deepfake) farkındalığı, veri mahremiyeti ve yazılım mühendisliği kariyer patikaları."
                    },
                    {
                        "unit": "8. Ünite: Yıl Sonu Bitirme Projesi & Sunum",
                        "topics": "Agile proje yönetimi, GitHub sürüm kontrolü, teknik raporlama ve TEKNOFEST standartları."
                    }
                ],
                "outcomes": [
                    "Makine öğrenmesi modeli eğitip kamera girdisiyle gerçek zamanlı nesne/jest tanıma yapabilme",
                    "IoT modülleri ile toplanan çevresel sensör verilerini bulut panolarına (Cloud Dashboard) aktarabilme",
                    "Temel ağ protokollerini analiz edip siber saldırı vektörlerine karşı savunma mekanizmalarını uygulayabilme",
                    "Bir yazılım projesini baştan sona dokümante edip ulusal/uluslararası yarışmalara hazırlayabilme"
                ],
                "tools": [
                    "Google Teachable Machine",
                    "ESP32 / Arduino Cloud",
                    "Wireshark",
                    "Python Scikit-Learn / OpenCV",
                    "Hugging Face"
                ],
                "project": "Yapay Zeka Destekli Akıllı Kampüs Güvenlik & Enerji İzleme IoT Sistemi"
            }
        }
    }
};

  // --- MODAL DIALOG CONTROLLER ---
  const modalBackdrop = document.getElementById('curriculum-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalStageEl = document.getElementById('modal-stage-pill');
  const modalTitleEl = document.getElementById('modal-title');
  const modalAgeEl = document.getElementById('modal-age');
  const modalGradeTabsEl = document.getElementById('modal-grade-tabs');
  const modalGradeScopeEl = document.getElementById('modal-grade-scope');
  const modalDescEl = document.getElementById('modal-desc');
  const modalTermsContainerEl = document.getElementById('modal-terms-container');
  const modalOutcomesListEl = document.getElementById('modal-outcomes-list');
  const modalToolsListEl = document.getElementById('modal-tools-list');
  const modalProjectEl = document.getElementById('modal-project');

  let currentOpenStageId = null;
  let currentOpenGradeKey = null;

  function renderGradeContent(stageData, gradeKey) {
    if (!stageData) return;
    const stageId = currentOpenStageId;
    const grades = stageData.grades;

    let gradeData = null;
    if (grades && Object.keys(grades).length > 0) {
      if (gradeKey && grades[gradeKey]) {
        currentOpenGradeKey = gradeKey;
        gradeData = grades[gradeKey];
      } else {
        const firstKey = Object.keys(grades)[0];
        currentOpenGradeKey = firstKey;
        gradeData = grades[firstKey];
      }
    } else {
      currentOpenGradeKey = null;
      gradeData = stageData;
    }

    // 1. Stage Dot Indicators (1-6)
    document.querySelectorAll('[data-stage-jump]').forEach((dot) => {
      if (dot.dataset.stageJump === String(stageId)) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // 2. Grade Navigation Tabs
    if (modalGradeTabsEl) {
      if (grades && Object.keys(grades).length > 1) {
        modalGradeTabsEl.style.display = 'flex';
        modalGradeTabsEl.innerHTML = Object.keys(grades)
          .map((k) => {
            const g = grades[k];
            const isActive = k === currentOpenGradeKey;
            return `<button type="button" class="modal-grade-tab-btn ${isActive ? 'active' : ''}" data-grade-tab="${k}">
              <i class="fas fa-graduation-cap"></i> ${g.tabTitle || g.title}
            </button>`;
          })
          .join('');

        modalGradeTabsEl.querySelectorAll('[data-grade-tab]').forEach((tabBtn) => {
          tabBtn.addEventListener('click', (e) => {
            e.stopPropagation();
              const targetKey = tabBtn.dataset.gradeTab;
            renderGradeContent(stageData, targetKey);
          });
        });
      } else {
        modalGradeTabsEl.innerHTML = '';
        modalGradeTabsEl.style.display = 'none';
      }
    }

    // 3. Header Texts & Badges
    if (modalStageEl) modalStageEl.textContent = gradeData.badge || stageData.stage;
    if (modalTitleEl) modalTitleEl.textContent = gradeData.title || stageData.title;
    if (modalAgeEl) modalAgeEl.textContent = gradeData.age || stageData.age;

    // 4. Grade Scope / Weekly Hours Badge
    if (modalGradeScopeEl) {
      if (gradeData.scope) {
        modalGradeScopeEl.innerHTML = `<span style="display:inline-flex; align-items:center; gap:6px; background:rgba(143,72,156,0.18); border:1px solid rgba(143,72,156,0.4); padding:6px 14px; border-radius:20px; font-size:12px; font-weight:700; color:var(--primary-gold);"><i class="fas fa-check-circle"></i> ${gradeData.scope}</span>`;
        modalGradeScopeEl.style.display = 'block';
      } else {
        modalGradeScopeEl.innerHTML = '';
        modalGradeScopeEl.style.display = 'none';
      }
    }

    // 5. Detailed Description
    if (modalDescEl) modalDescEl.textContent = gradeData.desc || stageData.desc;

    // 6. Term 1 and Term 2 Breakdown
    if (modalTermsContainerEl) {
      const term1Title = (window.I18N && window.I18N.t('modal.term1.title')) || '🍁 1. Dönem Üniteleri (Güz)';
      const term2Title = (window.I18N && window.I18N.t('modal.term2.title')) || '🌱 2. Dönem Üniteleri (Bahar)';

      const renderTermList = (units) => {
        if (!units || !units.length) return '<p style="font-size:13px; color:var(--text-muted);">-</p>';
        return `<ul class="modal-unit-list">
          ${units
            .map(
              (u) => `
            <li class="modal-unit-item">
              <span class="modal-unit-bullet">✦</span>
              <div>
                <strong style="color:#FFFFFF; font-weight:700;">${u.unit}:</strong>
                <span style="opacity:0.9;"> ${u.topics}</span>
              </div>
            </li>
          `
            )
            .join('')}
        </ul>`;
      };

      modalTermsContainerEl.innerHTML = `
        <div class="modal-term-box">
          <div class="modal-term-header">
            <i class="fas fa-calendar-alt"></i> ${term1Title}
          </div>
          ${renderTermList(gradeData.term1)}
        </div>
        <div class="modal-term-box">
          <div class="modal-term-header">
            <i class="fas fa-calendar-check"></i> ${term2Title}
          </div>
          ${renderTermList(gradeData.term2)}
        </div>
      `;
    }

    // 7. Core Outcomes
    const outcomeHeader = (window.I18N && window.I18N.t('modal.outcome.label')) || 'Öğrenme Çıktısı';
    if (modalOutcomesListEl) {
      const outcomes = gradeData.outcomes || stageData.outcomes || [];
      modalOutcomesListEl.innerHTML = outcomes
        .map(
          (item) => `
          <div class="outcome-item-card">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span style="color:var(--primary-gold); font-weight:bold;">✦</span>
              <strong style="color:#ffffff; font-size:0.875rem;">${outcomeHeader}</strong>
            </div>
            <div>${item}</div>
          </div>
        `
        )
        .join('');
    }

    // 8. Software & Tools
    if (modalToolsListEl) {
      const tools = gradeData.tools || stageData.tools || [];
      modalToolsListEl.innerHTML = tools
        .map((t) => `<span class="tool-tag">⚡ ${t}</span>`)
        .join('');
    }

    // 9. Capstone Project
    if (modalProjectEl) {
      modalProjectEl.textContent = gradeData.project || stageData.project;
    }
  }

  function openCurriculumModal(stageId, gradeKey = null) {
    currentOpenStageId = stageId;
    const stageData = (window.I18N && window.I18N.getCurriculumData(stageId)) || curriculumDetailsData[stageId];
    if (!stageData) return;

    renderGradeContent(stageData, gradeKey);

    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCurriculumModal() {
    currentOpenStageId = null;
    currentOpenGradeKey = null;
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Re-render modal in real-time if language changes while open
  window._reRenderModalIfOpen = () => {
    if (currentOpenStageId && modalBackdrop && modalBackdrop.classList.contains('open')) {
      const stageData = (window.I18N && window.I18N.getCurriculumData(currentOpenStageId)) || curriculumDetailsData[currentOpenStageId];
      if (stageData) {
        renderGradeContent(stageData, currentOpenGradeKey);
      }
    }
  };

  // Quick Stage Jump Indicators inside modal (1-6)
  document.querySelectorAll('[data-stage-jump]').forEach((jumpBtn) => {
    jumpBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetStage = jumpBtn.dataset.stageJump;
      openCurriculumModal(targetStage);
    });
  });

  // Bind all entire curriculum cards to navigate to dedicated full-page endpoint
  document.querySelectorAll('.curriculum-card').forEach((card) => {
    card.addEventListener('click', () => {
      const grade = card.dataset.grade;
      const stage = card.dataset.stage;
      if (grade) {
        window.location.href = `mufredat.html?sinif=${encodeURIComponent(grade)}`;
      } else if (stage) {
        window.location.href = `mufredat.html?kademe=${encodeURIComponent(stage)}`;
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const grade = card.dataset.grade;
        const stage = card.dataset.stage;
        if (grade) {
          window.location.href = `mufredat.html?sinif=${encodeURIComponent(grade)}`;
        } else if (stage) {
          window.location.href = `mufredat.html?kademe=${encodeURIComponent(stage)}`;
        }
      }
    });
  });

  // Also bind all detail buttons inside cards (stop propagation and navigate to endpoint)
  document.querySelectorAll('.open-details-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const grade = btn.dataset.grade;
      const stage = btn.dataset.stage;
      if (grade) {
        window.location.href = `mufredat.html?sinif=${encodeURIComponent(grade)}`;
      } else if (stage) {
        window.location.href = `mufredat.html?kademe=${encodeURIComponent(stage)}`;
      }
    });
  });

  // Support redirecting legacy modal query (?modal=4) to full page
  const urlParams = new URLSearchParams(window.location.search);
  const modalParam = urlParams.get('modal');
  if (modalParam) {
    window.location.href = `mufredat.html?kademe=${encodeURIComponent(modalParam)}`;
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
      const shareTitle = window.I18N ? window.I18N.t('meta.title') : 'Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri Müfredatı';
      const shareData = {
        title: shareTitle,
        text: shareTitle,
        url: window.location.href
      };

      if (navigator.share && window.isSecureContext) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // Fallback to clipboard
          copyToClipboard(window.location.href);
        }
      } else {
        copyToClipboard(window.location.href);
      }
    });
  }

  // --- MOBILE SHARE BUTTON HOOK ---
  const mobileShareBtn = document.getElementById('mobile-share-page-btn');
  if (mobileShareBtn && shareBtn) {
    mobileShareBtn.addEventListener('click', () => {
      shareBtn.click();
    });
  }

  // --- AUTO-CLOSE MOBILE MENU ON NAV-LINK CLICK ---
  const navBarCollapse = document.getElementById('navbarNav');
  if (navBarCollapse) {
    navBarCollapse.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && window.jQuery && window.jQuery(navBarCollapse).hasClass('show')) {
          window.jQuery(navBarCollapse).collapse('hide');
        }
      });
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  }

  // --- COPY CODE SNIPPET (Stage 5 Python preview) ---
  const copyCodeBtn = document.getElementById('copy-code-btn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
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
        "Teknoloji ve İnovasyonun Öncüsü, Geleceğin Gücü Uğur'da Başlar",
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

