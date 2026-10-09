/**
 * ============================================================================
 * CAMPUS VIEWPAGER CONTROLLER & INSTAGRAM-STYLE DYNAMIC DOT INDICATOR
 * Uğur Okulları Viranşehir Kampüsü
 * Reference: dotexampel.gif (Sliding dynamic 5-dot window with scale transitions)
 * ============================================================================
 */

(function () {
  'use strict';

  // 14 Slides Data (Campus Overview + Kindergarten to 12th Grade)
  const CAMPUS_SLIDES = [
    {
      id: 'campus',
      image: 'assets/schoolfullimagehd.jpg',
      alt: 'Uğur Okulları Viranşehir Kampüsü Tam Görünüm',
      width: 3480,
      height: 1867,
      badge: {
        tr: '📍 Viranşehir Kampüsü • Ana Yerleşke',
        en: '📍 Viranşehir Campus • Main Grounds',
        ar: '📍 حرم فيران شهير • الحرم الرئيسي'
      },
      title: {
        tr: 'Uğur Okulları Viranşehir Kampüsü Yerleşkesi',
        en: 'Uğur Okulları Viranşehir Campus Grounds',
        ar: 'مقر Uğur Okulları - حرم فيران شهير'
      },
      subtitle: {
        tr: 'Bilişim Teknolojileri, İnovasyon & Robotik Laboratuvarı Eğitim Binası (Tam Görünüm)',
        en: 'IT, Innovation & Robotics Lab Education Building (Full View)',
        ar: 'مبنى تعليم مختبر تكنولوجيا المعلومات والابتكار والروبوتات (عرض كامل)'
      },
      location: {
        tr: '📍 Şanlıurfa / Viranşehir • K12 Tüm Kademeler',
        en: '📍 Şanlıurfa / Viranşehir • All K12 Stages',
        ar: '📍 شانلي أورفا / فيران شهير • جميع مراحل K12'
      },
      curriculumUrl: null
    },
    {
      id: 'anasinifi',
      image: 'assets/projects/anasinifi.jpg',
      alt: 'Ana Sınıfı Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Okul Öncesi (4-5 Yaş) • Ana Sınıfı',
        en: 'Kindergarten (Age 4-5)',
        ar: 'مرحلة الروضة (4-5 سنوات)'
      },
      title: {
        tr: 'Ana Sınıfı Bilişim ve Kodlama Laboratuvarı',
        en: 'Kindergarten IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للروضة'
      },
      subtitle: {
        tr: 'Bilgisayarsız Kodlama (Unplugged), Yön Algoritmaları & Bilişsel Temeller',
        en: 'Unplugged Coding, Direction Algorithms & Cognitive Foundations',
        ar: 'البرمجة بدون حاسوب وخوارزميات الاتجاه والأسس المعرفية'
      },
      location: {
        tr: '📍 Okul Öncesi Kademesi • Ana Sınıfı',
        en: '📍 Kindergarten Stage • Preschool',
        ar: '📍 مرحلة الروضة'
      },
      curriculumUrl: 'mufredat.html?sinif=anasinifi'
    },
    {
      id: 'sinif1',
      image: 'assets/projects/sinif1.jpg',
      alt: '1. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'İlkokul Kademesi • 1. Sınıf',
        en: 'Primary School • 1st Grade',
        ar: 'المرحلة الابتدائية • الصف الأول'
      },
      title: {
        tr: '1. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '1st Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف الأول'
      },
      subtitle: {
        tr: 'Algoritmik Düşünceye Giriş, Blok Kodlama Temelleri & Kodable',
        en: 'Introduction to Algorithmic Thinking, Block Coding & Kodable',
        ar: 'مقدمة في التفكير الخوارزمي وأساسيات البرمجة الكتلية'
      },
      location: {
        tr: '📍 İlkokul Kademesi • 1. Sınıf',
        en: '📍 Primary School • 1st Grade',
        ar: '📍 المرحلة الابتدائية • الصف الأول'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif1'
    },
    {
      id: 'sinif2',
      image: 'assets/projects/sinif2.jpg',
      alt: '2. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'İlkokul Kademesi • 2. Sınıf',
        en: 'Primary School • 2nd Grade',
        ar: 'المرحلة الابتدائية • الصف الثاني'
      },
      title: {
        tr: '2. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '2nd Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف الثاني'
      },
      subtitle: {
        tr: 'ScratchJr ile Görsel Blok Kodlama, Dijital Hikaye Anlatıcılığı & Animasyon',
        en: 'Visual Block Coding with ScratchJr, Digital Storytelling & Animation',
        ar: 'البرمجة المرئية مع سكراتش جونيور ورواية القصص الرقمية والرسوم المتحركة'
      },
      location: {
        tr: '📍 İlkokul Kademesi • 2. Sınıf',
        en: '📍 Primary School • 2nd Grade',
        ar: '📍 المرحلة الابتدائية • الصف الثاني'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif2'
    },
    {
      id: 'sinif3',
      image: 'assets/projects/sinif3.jpg',
      alt: '3. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'İlkokul Kademesi • 3. Sınıf',
        en: 'Primary School • 3rd Grade',
        ar: 'المرحلة الابتدائية • الصف الثالث'
      },
      title: {
        tr: '3. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '3rd Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف الثالث'
      },
      subtitle: {
        tr: 'Scratch 3.0 ile Blok Tabanlı Oyun Geliştirme & Olay Tabanlı Programlama',
        en: 'Game Development with Scratch 3.0 & Event-Driven Programming',
        ar: 'تطوير الألعاب مع سكراتش 3.0 والبرمجة الموجهة بالأحداث'
      },
      location: {
        tr: '📍 İlkokul Kademesi • 3. Sınıf',
        en: '📍 Primary School • 3rd Grade',
        ar: '📍 المرحلة الابتدائية • الصف الثالث'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif3'
    },
    {
      id: 'sinif4',
      image: 'assets/projects/sinif4.jpg',
      alt: '4. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'İlkokul Kademesi • 4. Sınıf',
        en: 'Primary School • 4th Grade',
        ar: 'المرحلة الابتدائية • الصف الرابع'
      },
      title: {
        tr: '4. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '4th Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرmجة للصف الرابع'
      },
      subtitle: {
        tr: 'Tinkercad ile 3D Tasarım & Model Oluşturma, Dijital Yurttaşlık & Siber Güvenlik',
        en: '3D Design & Modeling with Tinkercad, Digital Citizenship & Cyber Safety',
        ar: 'التصميم ثلاثي الأبعاد مع تنكركاد والمواطنة الرقمية والأمن السيبراني'
      },
      location: {
        tr: '📍 İlkokul Kademesi • 4. Sınıf',
        en: '📍 Primary School • 4th Grade',
        ar: '📍 المرحلة الابتدائية • الصف الرابع'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif4'
    },
    {
      id: 'sinif5',
      image: 'assets/projects/sinif5.jpg',
      alt: '5. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Ortaokul Kademesi • 5. Sınıf',
        en: 'Middle School • 5th Grade',
        ar: 'المرحلة الإعدادية • الصف الخامس'
      },
      title: {
        tr: '5. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '5th Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف الخامس'
      },
      subtitle: {
        tr: 'Bilişim Teknolojileri ve Yazılım, Problem Çözme & Algoritmalar, Scratch Projeleri',
        en: 'Information Technologies & Software, Problem Solving & Algorithms, Scratch',
        ar: 'تكنولوجيا المعلومات والبرمجيات وحل المشكلات والخوارزميات'
      },
      location: {
        tr: '📍 Ortaokul Kademesi • 5. Sınıf',
        en: '📍 Middle School • 5th Grade',
        ar: '📍 المرحلة الإعدادية • الصف الخامس'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif5'
    },
    {
      id: 'sinif6',
      image: 'assets/projects/sinif6.jpg',
      alt: '6. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Ortaokul Kademesi • 6. Sınıf',
        en: 'Middle School • 6th Grade',
        ar: 'المرحلة الإعدادية • الصف السادس'
      },
      title: {
        tr: '6. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '6th Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف السادس'
      },
      subtitle: {
        tr: 'Robotik Kodlama, Arduino & Sensör Devreleri, mBlock ve Fiziksel Bilişim',
        en: 'Robotics Coding, Arduino & Sensor Circuits, mBlock & Physical Computing',
        ar: 'البرمجة الروبوتية ودوائر أردوينو والحساسات وتطبيق إم بلوك'
      },
      location: {
        tr: '📍 Ortaokul Kademesi • 6. Sınıf',
        en: '📍 Middle School • 6th Grade',
        ar: '📍 المرحلة الإعدادية • الصف السادس'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif6'
    },
    {
      id: 'sinif7',
      image: 'assets/projects/sinif7.jpg',
      alt: '7. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Ortaokul Kademesi • 7. Sınıf',
        en: 'Middle School • 7th Grade',
        ar: 'المرحلة الإعدادية • الصف السابع'
      },
      title: {
        tr: '7. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '7th Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف السابع'
      },
      subtitle: {
        tr: 'Mobil Uygulama Geliştirme (App Inventor) & Akıllı Cihaz Programlama',
        en: 'Mobile App Development (MIT App Inventor) & Smart Device Programming',
        ar: 'تطوير تطبيقات الهواتف الذكية وبرمجة الأجهزة الذكية'
      },
      location: {
        tr: '📍 Ortaokul Kademesi • 7. Sınıf',
        en: '📍 Middle School • 7th Grade',
        ar: '📍 المرحلة الإعدادية • الصف السابع'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif7'
    },
    {
      id: 'sinif8',
      image: 'assets/projects/sinif8.jpg',
      alt: '8. Sınıf Bilişim ve Kodlama Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Ortaokul Kademesi • 8. Sınıf',
        en: 'Middle School • 8th Grade',
        ar: 'المرحلة الإعدادية • الصف الثامن'
      },
      title: {
        tr: '8. Sınıf Bilişim ve Kodlama Laboratuvarı',
        en: '8th Grade IT & Coding Lab',
        ar: 'مختبر تكنولوجيا المعلومات والبرمجة للصف الثامن'
      },
      subtitle: {
        tr: 'Python ile Metin Tabanlı Programlamaya Giriş & Veri Yapıları',
        en: 'Introduction to Text-Based Programming with Python & Data Structures',
        ar: 'مقدمة في البرمجة النصية بلغة بايثون وهياكل البيانات'
      },
      location: {
        tr: '📍 Ortaokul Kademesi • 8. Sınıf',
        en: '📍 Middle School • 8th Grade',
        ar: '📍 المرحلة الإعدادية • الصف الثامن'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif8'
    },
    {
      id: 'sinif9',
      image: 'assets/projects/sinif9.jpg',
      alt: '9. Sınıf Bilgisayar Bilimi Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Anadolu Lisesi Kademesi • 9. Sınıf',
        en: 'Anatolian High School • 9th Grade',
        ar: 'المرحلة الثانوية • الصف التاسع'
      },
      title: {
        tr: '9. Sınıf Bilgisayar Bilimi Laboratuvarı',
        en: '9th Grade Computer Science Lab',
        ar: 'مختبر علوم الحاسوب للصف التاسع'
      },
      subtitle: {
        tr: 'Bilgisayar Bilimi Kuramları, Python ile Algoritma Tasarımı & Fonksiyonel Kodlama',
        en: 'Computer Science Theory, Algorithm Design with Python & Functional Coding',
        ar: 'نظريات علوم الحاسوب وتصميم الخوارزميات بلغة بايثون'
      },
      location: {
        tr: '📍 Anadolu Lisesi Kademesi • 9. Sınıf',
        en: '📍 Anatolian High School • 9th Grade',
        ar: '📍 المرحلة الثانوية • الصف التاسع'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif9'
    },
    {
      id: 'sinif10',
      image: 'assets/projects/sinif10.jpg',
      alt: '10. Sınıf Bilgisayar Bilimi Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Anadolu Lisesi Kademesi • 10. Sınıf',
        en: 'Anatolian High School • 10th Grade',
        ar: 'المرحلة الثانوية • الصف العاشر'
      },
      title: {
        tr: '10. Sınıf Bilgisayar Bilimi Laboratuvarı',
        en: '10th Grade Computer Science Lab',
        ar: 'مختبر علوم الحاسوب للصف العاشر'
      },
      subtitle: {
        tr: 'Nesne Yönelimli Programlama (OOP), Pygame ile Oyun Motoru Geliştirme',
        en: 'Object-Oriented Programming (OOP) & 2D Game Development with Pygame',
        ar: 'البرمجة كائنية التوجه وتطوير الألعاب باستخدام باي جيم'
      },
      location: {
        tr: '📍 Anadolu Lisesi Kademesi • 10. Sınıf',
        en: '📍 Anatolian High School • 10th Grade',
        ar: '📍 المرحلة الثانوية • الصف العاشر'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif10'
    },
    {
      id: 'sinif11',
      image: 'assets/projects/sinif11.jpg',
      alt: '11. Sınıf Bilgisayar Bilimi Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Anadolu Lisesi Kademesi • 11. Sınıf',
        en: 'Anatolian High School • 11th Grade',
        ar: 'المرحلة الثانوية • الصف الحادي عشر'
      },
      title: {
        tr: '11. Sınıf Bilgisayar Bilimi Laboratuvarı',
        en: '11th Grade Computer Science Lab',
        ar: 'مختبر علوم الحاسوب للصف الحادي عشر'
      },
      subtitle: {
        tr: 'Web Teknolojileri (HTML5/CSS3/JS), Veri Tabanı Yönetimi & SQL Sistemleri',
        en: 'Web Technologies (HTML5/CSS3/JS), Database Management & SQL Systems',
        ar: 'تقنيات الويب وإدارة قواعد البيانات وأنظمة إس كيو إل'
      },
      location: {
        tr: '📍 Anadolu Lisesi Kademesi • 11. Sınıf',
        en: '📍 Anatolian High School • 11th Grade',
        ar: '📍 المرحلة الثانوية • الصف الحادي عشر'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif11'
    },
    {
      id: 'sinif12',
      image: 'assets/projects/sinif12.jpg',
      alt: '12. Sınıf Bilgisayar Bilimi Laboratuvarı',
      width: 1376,
      height: 768,
      badge: {
        tr: 'Anadolu Lisesi Kademesi • 12. Sınıf',
        en: 'Anatolian High School • 12th Grade',
        ar: 'المرحلة الثانوية • الصف الثاني عشر'
      },
      title: {
        tr: '12. Sınıf Bilgisayar Bilimi Laboratuvarı',
        en: '12th Grade Computer Science Lab',
        ar: 'مختبر علوم الحاسوب للصف الثاني عشر'
      },
      subtitle: {
        tr: 'Yapay Zeka (AI), Makine Öğrenmesi, Veri Bilimi & Bitirme Projesi Sergisi',
        en: 'Artificial Intelligence (AI), Machine Learning, Data Science & Capstone Projects',
        ar: 'الذكاء الاصطناعي وتعلم الآلة وعلم البيانات ومشاريع التخرج'
      },
      location: {
        tr: '📍 Anadolu Lisesi Kademesi • 12. Sınıf',
        en: '📍 Anatolian High School • 12th Grade',
        ar: '📍 المرحلة الثانوية • الصف الثاني عشر'
      },
      curriculumUrl: 'mufredat.html?sinif=sinif12'
    }
  ];

  class CampusViewPager {
    constructor() {
      this.slides = CAMPUS_SLIDES;
      this.total = this.slides.length;
      this.currentIndex = 0;
      this.visibleDots = 5;
      this.dotPitch = 19; // 19px center-to-center pitch as in dotexampel.gif

      // Drag / Swipe State
      this.isDragging = false;
      this.startX = 0;
      this.currentX = 0;
      this.deltaX = 0;
      this.containerWidth = 0;

      // DOM Elements
      this.modalEl = document.getElementById('campus-modal');
      this.viewpagerEl = document.getElementById('campus-viewpager');
      this.trackContainerEl = document.getElementById('campus-vp-track-container');
      this.trackEl = document.getElementById('campus-vp-track');
      this.dotsTrackEl = document.getElementById('campus-vp-dots-track');
      this.prevBtn = document.getElementById('campus-vp-prev-btn');
      this.nextBtn = document.getElementById('campus-vp-next-btn');

      // Overlay text elements
      this.badgeTextEl = document.getElementById('campus-vp-badge-text');
      this.currentNumEl = document.getElementById('campus-vp-current-num');
      this.totalNumEl = document.getElementById('campus-vp-total-num');
      this.headerTitleEl = document.getElementById('campus-modal-title');
      this.headerSubtitleEl = document.getElementById('campus-modal-subtitle');
      this.footerBadgeEl = document.getElementById('campus-modal-location-text');
      this.curriculumLinkEl = document.getElementById('campus-modal-curriculum-link');

      this.dotElements = [];

      this.init();
    }

    init() {
      if (!this.viewpagerEl || !this.trackEl) return;

      this.renderDots();
      this.bindEvents();
      this.updateSlide(0, false);

      // Listen for language change events
      window.addEventListener('languageChanged', () => {
        this.updateTexts();
      });
    }

    renderDots() {
      if (!this.dotsTrackEl) return;
      this.dotsTrackEl.innerHTML = '';
      this.dotElements = [];

      for (let i = 0; i < this.total; i++) {
        const slot = document.createElement('div');
        slot.className = 'campus-vp-dot-slot';

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'campus-vp-dot is-hidden';
        dot.setAttribute('aria-label', `Görsel ${i + 1}`);
        dot.setAttribute('data-index', i);

        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          this.goToSlide(i);
        });

        slot.appendChild(dot);
        this.dotsTrackEl.appendChild(slot);
        this.dotElements.push(dot);
      }
    }

    getLang() {
      if (window.I18N && typeof window.I18N.currentLang === 'function') {
        return window.I18N.currentLang();
      }
      return 'tr';
    }

    getText(obj) {
      if (!obj) return '';
      const lang = this.getLang();
      return obj[lang] || obj['tr'] || '';
    }

    updateTexts() {
      const slide = this.slides[this.currentIndex];
      if (!slide) return;

      if (this.badgeTextEl) {
        this.badgeTextEl.textContent = this.getText(slide.badge);
      }
      if (this.currentNumEl) {
        this.currentNumEl.textContent = (this.currentIndex + 1);
      }
      if (this.totalNumEl) {
        this.totalNumEl.textContent = this.total;
      }
      if (this.headerTitleEl) {
        this.headerTitleEl.textContent = this.getText(slide.title);
      }
      if (this.headerSubtitleEl) {
        this.headerSubtitleEl.textContent = this.getText(slide.subtitle);
      }
      if (this.footerBadgeEl) {
        this.footerBadgeEl.textContent = this.getText(slide.location);
      }
      if (this.curriculumLinkEl) {
        if (slide.curriculumUrl) {
          this.curriculumLinkEl.href = slide.curriculumUrl;
          this.curriculumLinkEl.style.display = 'inline-flex';
          const curriculumLabel = this.getLang() === 'en' ? 'View Curriculum' :
                                  this.getLang() === 'ar' ? 'عرض المنهج' : 'Müfredatı İncele';
          const linkText = this.curriculumLinkEl.querySelector('.curriculum-link-text');
          if (linkText) linkText.textContent = curriculumLabel;
        } else {
          this.curriculumLinkEl.style.display = 'none';
        }
      }
    }

    /**
     * Instagram-Style Dynamic Dots Sliding Window Engine (dotexampel.gif)
     * Window shows exactly 5 dot positions at any time.
     * When index <= 2: Window anchored at 0.
     * When index >= total - 3: Window anchored at total - 5.
     * Otherwise: Window centers on index (windowStart = index - 2).
     */
    updateDots(index) {
      if (!this.dotsTrackEl || this.dotElements.length === 0) return;

      const N = this.total;
      const visible = this.visibleDots; // 5

      let windowStart = 0;
      if (N <= visible) {
        windowStart = 0;
      } else if (index <= 2) {
        windowStart = 0;
      } else if (index >= N - 3) {
        windowStart = N - visible;
      } else {
        windowStart = index - 2;
      }

      const windowEnd = windowStart + visible - 1; // inclusive index

      // Smoothly translate track
      const trackOffset = - (windowStart * this.dotPitch);
      this.dotsTrackEl.style.transform = `translateX(${trackOffset}px)`;

      // Update scale and classes for each dot
      for (let j = 0; j < N; j++) {
        const dot = this.dotElements[j];
        if (!dot) continue;

        if (j === index) {
          // Active dot: Large Pink (#F23A7A)
          dot.className = 'campus-vp-dot is-active';
        } else if (j < windowStart - 1 || j > windowEnd + 1) {
          // Beyond outer margin: completely hidden
          dot.className = 'campus-vp-dot is-hidden';
        } else if ((j === windowStart && windowStart > 0) || (j === windowEnd && windowEnd < N - 1)) {
          // Edge dot of window when more items exist outside: Tiny
          dot.className = 'campus-vp-dot is-tiny';
        } else if (j >= windowStart && j <= windowEnd) {
          // Inside window: Medium
          dot.className = 'campus-vp-dot is-medium';
        } else {
          // Just outside boundary: Tiny/fading
          dot.className = 'campus-vp-dot is-hidden';
        }
      }
    }

    updateSlide(index, animate = true) {
      if (index < 0) index = 0;
      if (index >= this.total) index = this.total - 1;

      this.currentIndex = index;

      if (!animate && this.trackEl) {
        this.trackEl.classList.add('no-transition');
      } else if (this.trackEl) {
        this.trackEl.classList.remove('no-transition');
      }

      if (this.trackEl) {
        this.trackEl.style.transform = `translate3d(-${this.currentIndex * 100}%, 0, 0)`;
      }

      if (!animate && this.trackEl) {
        // Force reflow
        void this.trackEl.offsetHeight;
        this.trackEl.classList.remove('no-transition');
      }

      // Update Prev / Next Buttons state
      if (this.prevBtn) {
        this.prevBtn.disabled = (this.currentIndex === 0);
        this.prevBtn.classList.toggle('is-disabled', this.currentIndex === 0);
      }
      if (this.nextBtn) {
        this.nextBtn.disabled = (this.currentIndex === this.total - 1);
        this.nextBtn.classList.toggle('is-disabled', this.currentIndex === this.total - 1);
      }

      this.updateDots(this.currentIndex);
      this.updateTexts();
    }

    goToSlide(index) {
      this.updateSlide(index, true);
    }

    nextSlide() {
      if (this.currentIndex < this.total - 1) {
        this.goToSlide(this.currentIndex + 1);
      }
    }

    prevSlide() {
      if (this.currentIndex > 0) {
        this.goToSlide(this.currentIndex - 1);
      }
    }

    bindEvents() {
      // Prev / Next button clicks
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.prevSlide();
        });
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.nextSlide();
        });
      }

      // Keyboard navigation (ArrowLeft / ArrowRight)
      window.addEventListener('keydown', (e) => {
        if (!this.modalEl || !this.modalEl.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      });

      // Touch events (Mobile swipe)
      if (this.trackContainerEl) {
        this.trackContainerEl.addEventListener('touchstart', (e) => {
          if (e.touches.length !== 1) return;
          this.isDragging = true;
          this.startX = e.touches[0].clientX;
          this.currentX = this.startX;
          this.deltaX = 0;
          this.containerWidth = this.trackContainerEl.clientWidth || 1;
          this.trackEl.classList.add('no-transition');
        }, { passive: true });

        this.trackContainerEl.addEventListener('touchmove', (e) => {
          if (!this.isDragging) return;
          this.currentX = e.touches[0].clientX;
          this.deltaX = this.currentX - this.startX;

          // Apply resistance at edges
          let effectiveDelta = this.deltaX;
          if ((this.currentIndex === 0 && this.deltaX > 0) ||
              (this.currentIndex === this.total - 1 && this.deltaX < 0)) {
            effectiveDelta = this.deltaX * 0.35;
          }

          const basePercent = -this.currentIndex * 100;
          const dragPercent = (effectiveDelta / this.containerWidth) * 100;
          this.trackEl.style.transform = `translate3d(${basePercent + dragPercent}%, 0, 0)`;
        }, { passive: true });

        const endTouch = () => {
          if (!this.isDragging) return;
          this.isDragging = false;
          this.trackEl.classList.remove('no-transition');

          const threshold = Math.min(60, this.containerWidth * 0.15);
          if (this.deltaX < -threshold && this.currentIndex < this.total - 1) {
            this.nextSlide();
          } else if (this.deltaX > threshold && this.currentIndex > 0) {
            this.prevSlide();
          } else {
            // Snap back
            this.updateSlide(this.currentIndex, true);
          }
          this.deltaX = 0;
        };

        this.trackContainerEl.addEventListener('touchend', endTouch);
        this.trackContainerEl.addEventListener('touchcancel', endTouch);

        // Mouse Drag events (Desktop)
        this.trackContainerEl.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return; // Only left mouse button
          this.isDragging = true;
          this.startX = e.clientX;
          this.currentX = this.startX;
          this.deltaX = 0;
          this.containerWidth = this.trackContainerEl.clientWidth || 1;
          this.trackContainerEl.classList.add('is-dragging');
          this.trackEl.classList.add('no-transition');
          e.preventDefault();
        });

        window.addEventListener('mousemove', (e) => {
          if (!this.isDragging) return;
          this.currentX = e.clientX;
          this.deltaX = this.currentX - this.startX;

          let effectiveDelta = this.deltaX;
          if ((this.currentIndex === 0 && this.deltaX > 0) ||
              (this.currentIndex === this.total - 1 && this.deltaX < 0)) {
            effectiveDelta = this.deltaX * 0.35;
          }

          const basePercent = -this.currentIndex * 100;
          const dragPercent = (effectiveDelta / this.containerWidth) * 100;
          this.trackEl.style.transform = `translate3d(${basePercent + dragPercent}%, 0, 0)`;
        });

        const endMouseDrag = () => {
          if (!this.isDragging) return;
          this.isDragging = false;
          this.trackContainerEl.classList.remove('is-dragging');
          this.trackEl.classList.remove('no-transition');

          const threshold = Math.min(70, this.containerWidth * 0.15);
          if (this.deltaX < -threshold && this.currentIndex < this.total - 1) {
            this.nextSlide();
          } else if (this.deltaX > threshold && this.currentIndex > 0) {
            this.prevSlide();
          } else {
            this.updateSlide(this.currentIndex, true);
          }
          this.deltaX = 0;
        };

        window.addEventListener('mouseup', endMouseDrag);
      }

      // Reset to slide 0 whenever campus modal is opened
      const openTriggers = document.querySelectorAll('#hero-campus-photo-btn, #scenic-pill-click');
      openTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
          this.updateSlide(0, false);
        });
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.campusViewPager = new CampusViewPager();
    });
  } else {
    window.campusViewPager = new CampusViewPager();
  }
})();
