/**
 * UĞUR OKULLARI BİLİŞİM TEKNOLOJİLERİ
 * Internationalization (i18n) System
 * Supports: Türkçe (tr), English (en), العربية (ar)
 * - Auto-detects browser language
 * - Persists choice in localStorage
 * - Applies RTL/LTR direction based on language
 */

const I18N = (() => {
  'use strict';

  const STORAGE_KEY = 'ugur_site_lang';
  const SUPPORTED_LANGS = ['tr', 'en', 'ar'];
  const DEFAULT_LANG = 'tr';
  const RTL_LANGS = ['ar'];

  // ─── TRANSLATIONS ────────────────────────────────────────────────
  const translations = {
    // ── META / TITLE ──
    'meta.title': {
      tr: 'Uğur Okulları Viranşehir Kampüsü | Bilişim Teknolojileri Müfredatı',
      en: 'Uğur Schools Viranşehir Campus | IT Curriculum',
      ar: 'مدارس أوغور حرم فيران شهير | منهج تكنولوجيا المعلومات'
    },
    'meta.description': {
      tr: 'Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri K12 Akademik Müfredatı. Ana sınıfından 12. sınıfa kadar algoritmik düşünce, Scratch, 3D modelleme, Arduino, Python ve Yapay Zeka serüveni.',
      en: 'Uğur Schools Viranşehir Campus Information Technologies K12 Academic Curriculum. From kindergarten to 12th grade: algorithmic thinking, Scratch, 3D modeling, Arduino, Python, and AI journey.',
      ar: 'منهج تكنولوجيا المعلومات الأكاديمي K12 لمدارس أوغور حرم فيران شهير. من الروضة إلى الصف الثاني عشر: التفكير الخوارزمي، سكراتش، النمذجة ثلاثية الأبعاد، أردوينو، بايثون ورحلة الذكاء الاصطناعي.'
    },

    // ── NAVBAR ──
    'nav.home': {
      tr: 'ANA SAYFA',
      en: 'HOME',
      ar: 'الرئيسية'
    },
    'nav.services': {
      tr: 'HİZMETLER',
      en: 'SERVICES',
      ar: 'الخدمات'
    },
    'nav.curriculum': {
      tr: 'MÜFREDAT',
      en: 'CURRICULUM',
      ar: 'المنهج'
    },
    'nav.story': {
      tr: 'HİKAYEMİZ',
      en: 'OUR STORY',
      ar: 'قصتنا'
    },
    'nav.team': {
      tr: 'KADRO',
      en: 'TEAM',
      ar: 'الفريق'
    },
    'nav.contact': {
      tr: 'İLETİŞİM',
      en: 'CONTACT',
      ar: 'اتصل بنا'
    },

    // ── THEME DROPDOWN ──
    'theme.title': {
      tr: 'GÖRÜNÜM MODU',
      en: 'APPEARANCE MODE',
      ar: 'وضع المظهر'
    },
    'theme.light': {
      tr: 'Açık',
      en: 'Light',
      ar: 'فاتح'
    },
    'theme.dark': {
      tr: 'Kapalı',
      en: 'Dark',
      ar: 'داكن'
    },
    'theme.system': {
      tr: 'Sistem',
      en: 'System',
      ar: 'النظام'
    },
    'theme.label': {
      tr: 'Görünüm Modu:',
      en: 'Appearance:',
      ar: 'المظهر:'
    },

    // ── HERO / COVER ──
    'hero.title.line1': {
      tr: 'Uğur Okulları',
      en: 'Uğur Schools',
      ar: 'مدارس أوغور'
    },
    'hero.title.line2': {
      tr: 'Viranşehir Kampüsü',
      en: 'Viranşehir Campus',
      ar: 'حرم فيران شهير'
    },
    'hero.subtitle': {
      tr: 'Ana sınıfından 12. sınıfa kadar algoritmik düşünce, Scratch, 3D modelleme, Arduino robotik, Python ve yapay zeka ile <strong>kesintisiz K12 bilişim serüveni</strong>.',
      en: 'From kindergarten to 12th grade: algorithmic thinking, Scratch, 3D modeling, Arduino robotics, Python, and AI in a <strong>seamless K12 IT journey</strong>.',
      ar: 'من الروضة إلى الصف الثاني عشر: التفكير الخوارزمي، سكراتش، النمذجة ثلاثية الأبعاد، روبوتات أردوينو، بايثون والذكاء الاصطناعي في <strong>رحلة K12 متكاملة في تكنولوجيا المعلومات</strong>.'
    },
    'hero.cta.curriculum': {
      tr: 'MÜFREDATI KEŞFET',
      en: 'EXPLORE CURRICULUM',
      ar: 'استكشف المنهج'
    },
    'hero.cta.campus': {
      tr: 'KAMPÜS FOTOĞRAFI',
      en: 'CAMPUS PHOTO',
      ar: 'صورة الحرم'
    },
    'hero.scenic': {
      tr: '📍 Viranşehir Kampüsü • Yerleşke Detayları',
      en: '📍 Viranşehir Campus • Campus Details',
      ar: '📍 حرم فيران شهير • تفاصيل الحرم'
    },

    // ── SERVICES SECTION ──
    'services.title': {
      tr: 'HİZMETLERİMİZ & BİLİŞİM VİZYONUMUZ',
      en: 'OUR SERVICES & IT VISION',
      ar: 'خدماتنا ورؤيتنا في تكنولوجيا المعلومات'
    },
    'services.subtitle': {
      tr: '21. Yüzyıl Yetkinlikleri ve Teknoloji Odaklı Eğitim Anlayışımız',
      en: '21st Century Competencies and Our Technology-Focused Education Approach',
      ar: 'كفاءات القرن الحادي والعشرين ونهجنا التعليمي المرتكز على التكنولوجيا'
    },
    'services.pillar1.title': {
      tr: 'Kodlama & Algoritmik Düşünme',
      en: 'Coding & Algorithmic Thinking',
      ar: 'البرمجة والتفكير الخوارزمي'
    },
    'services.pillar1.desc': {
      tr: 'Erken yaşta blok tabanlı kodlama (Scratch) ile başlayan mantıksal problem çözme becerileri, ortaokul ve lisede Python ve nesne yönelimli programlama temellerine dönüşür.',
      en: 'Logical problem-solving skills that begin with block-based coding (Scratch) at an early age evolve into Python and object-oriented programming fundamentals in middle and high school.',
      ar: 'مهارات حل المشكلات المنطقية التي تبدأ بالبرمجة القائمة على الكتل (سكراتش) في سن مبكرة تتطور إلى أساسيات بايثون والبرمجة الكائنية في المرحلتين المتوسطة والثانوية.'
    },
    'services.pillar2.title': {
      tr: 'Robotik & Fiziksel Bilişim',
      en: 'Robotics & Physical Computing',
      ar: 'الروبوتات والحوسبة المادية'
    },
    'services.pillar2.desc': {
      tr: 'Arduino, mikrodenetleyiciler, sensör devreleri, Tinkercad ile 3D modelleme ve maker projeleriyle öğrencilerimiz teorik bilgiyi somut inovasyon ürünlerine dönüştürür.',
      en: 'With Arduino, microcontrollers, sensor circuits, 3D modeling with Tinkercad, and maker projects, our students transform theoretical knowledge into tangible innovation products.',
      ar: 'باستخدام أردوينو والمتحكمات الدقيقة ودوائر الاستشعار والنمذجة ثلاثية الأبعاد بـ Tinkercad ومشاريع الصانعين، يحول طلابنا المعرفة النظرية إلى منتجات ابتكارية ملموسة.'
    },
    'services.pillar3.title': {
      tr: 'Yapay Zeka & Siber Güvenlik',
      en: 'AI & Cybersecurity',
      ar: 'الذكاء الاصطناعي والأمن السيبراني'
    },
    'services.pillar3.desc': {
      tr: 'Üretken yapay zeka (GenAI) okuryazarlığı, makine öğrenmesi modelleri, veri etiği, dijital ayak izi yönetimi ve güvenli internet ekosistemi bilinci kazandırılır.',
      en: 'Students gain generative AI (GenAI) literacy, machine learning models, data ethics, digital footprint management, and safe internet ecosystem awareness.',
      ar: 'يكتسب الطلاب محو الأمية في الذكاء الاصطناعي التوليدي، ونماذج التعلم الآلي، وأخلاقيات البيانات، وإدارة البصمة الرقمية، والوعي بالنظام البيئي الآمن للإنترنت.'
    },

    // ── PORTFOLIO SECTION ──
    'portfolio.title': {
      tr: 'MÜFREDAT VE KADEMELERİMİZ',
      en: 'CURRICULUM & OUR STAGES',
      ar: 'المنهج ومراحلنا'
    },
    'portfolio.subtitle': {
      tr: 'Ana Sınıfından Liseye Adım Adım Bilişim Serüveni ve İnteraktif Video Dersleri',
      en: 'Step-by-Step IT Journey from Kindergarten to High School with Interactive Video Lessons',
      ar: 'رحلة تكنولوجيا المعلومات خطوة بخطوة من الروضة إلى الثانوية مع دروس فيديو تفاعلية'
    },
    'portfolio.filter.all': {
      tr: 'Tüm Kademeler (6)',
      en: 'All Stages (6)',
      ar: 'جميع المراحل (6)'
    },
    'portfolio.filter.preschool': {
      tr: 'Okul Öncesi',
      en: 'Preschool',
      ar: 'ما قبل المدرسة'
    },
    'portfolio.filter.primary': {
      tr: 'İlkokul (1-4)',
      en: 'Primary (1-4)',
      ar: 'الابتدائية (1-4)'
    },
    'portfolio.filter.middle': {
      tr: 'Ortaokul (5-8)',
      en: 'Middle (5-8)',
      ar: 'المتوسطة (5-8)'
    },
    'portfolio.filter.high': {
      tr: 'Lise (9-12)',
      en: 'High School (9-12)',
      ar: 'الثانوية (9-12)'
    },

    // ── CURRICULUM CARDS ──
    'card1.badge': {
      tr: '1. Aşama • 5-8 Yaş',
      en: 'Stage 1 • Ages 5-8',
      ar: 'المرحلة 1 • 5-8 سنوات'
    },
    'card1.title': {
      tr: 'Bilişimle Tanışma & İlk Adımlar',
      en: 'Introduction to IT & First Steps',
      ar: 'التعرف على تكنولوجيا المعلومات والخطوات الأولى'
    },
    'card1.subtitle': {
      tr: 'Ana Sınıfı - 2. Sınıf Kademesi',
      en: 'Kindergarten - 2nd Grade',
      ar: 'الروضة - الصف الثاني'
    },
    'card1.tag1': {
      tr: 'Fare ve Klavye Becerisi',
      en: 'Mouse & Keyboard Skills',
      ar: 'مهارات الفأرة ولوحة المفاتيح'
    },
    'card1.tag2': {
      tr: 'Sıralı Komutlar',
      en: 'Sequential Commands',
      ar: 'الأوامر المتسلسلة'
    },
    'card1.tag3': {
      tr: 'Ergonomi & Güvenlik',
      en: 'Ergonomics & Safety',
      ar: 'بيئة العمل والسلامة'
    },

    'card2.badge': {
      tr: '2. Aşama • 8-10 Yaş',
      en: 'Stage 2 • Ages 8-10',
      ar: 'المرحلة 2 • 8-10 سنوات'
    },
    'card2.title': {
      tr: 'Blok Kodlama & Oyun Tasarımı',
      en: 'Block Coding & Game Design',
      ar: 'البرمجة بالكتل وتصميم الألعاب'
    },
    'card2.subtitle': {
      tr: 'İlkokul 3. ve 4. Sınıf',
      en: 'Primary School 3rd & 4th Grade',
      ar: 'الصف الثالث والرابع الابتدائي'
    },
    'card2.tag1': {
      tr: 'Scratch 3.0',
      en: 'Scratch 3.0',
      ar: 'سكراتش 3.0'
    },
    'card2.tag2': {
      tr: 'Döngüler & Şartlar',
      en: 'Loops & Conditions',
      ar: 'الحلقات والشروط'
    },
    'card2.tag3': {
      tr: '2D Karakter Hareketi',
      en: '2D Character Movement',
      ar: 'حركة الشخصيات ثنائية الأبعاد'
    },

    'card3.badge': {
      tr: '3. Aşama • 10-12 Yaş',
      en: 'Stage 3 • Ages 10-12',
      ar: 'المرحلة 3 • 10-12 سنة'
    },
    'card3.title': {
      tr: '3D Tasarım & Donanım Mimarisi',
      en: '3D Design & Hardware Architecture',
      ar: 'التصميم ثلاثي الأبعاد وهندسة الأجهزة'
    },
    'card3.subtitle': {
      tr: 'Ortaokul 5. ve 6. Sınıf',
      en: 'Middle School 5th & 6th Grade',
      ar: 'الصف الخامس والسادس المتوسط'
    },
    'card3.tag1': {
      tr: 'Tinkercad 3D',
      en: 'Tinkercad 3D',
      ar: 'تينكركاد ثلاثي الأبعاد'
    },
    'card3.tag2': {
      tr: '3D Yazıcı Üretimi',
      en: '3D Printer Production',
      ar: 'إنتاج الطابعة ثلاثية الأبعاد'
    },
    'card3.tag3': {
      tr: 'Bilgisayar Donanımı',
      en: 'Computer Hardware',
      ar: 'أجهزة الحاسوب'
    },

    'card4.badge': {
      tr: '4. Aşama • 12-14 Yaş',
      en: 'Stage 4 • Ages 12-14',
      ar: 'المرحلة 4 • 12-14 سنة'
    },
    'card4.title': {
      tr: 'Maker & Arduino Dünyası',
      en: 'Maker & Arduino World',
      ar: 'عالم الصانعين وأردوينو'
    },
    'card4.subtitle': {
      tr: 'Ortaokul 7. ve 8. Sınıf',
      en: 'Middle School 7th & 8th Grade',
      ar: 'الصف السابع والثامن المتوسط'
    },
    'card4.tag1': {
      tr: 'Arduino UNO',
      en: 'Arduino UNO',
      ar: 'أردوينو أونو'
    },
    'card4.tag2': {
      tr: 'Sensör Devreleri',
      en: 'Sensor Circuits',
      ar: 'دوائر الاستشعار'
    },
    'card4.tag3': {
      tr: 'Servo Motor & Robotik',
      en: 'Servo Motor & Robotics',
      ar: 'محرك السيرفو والروبوتات'
    },

    'card5.badge': {
      tr: '5. Aşama • 14-16 Yaş',
      en: 'Stage 5 • Ages 14-16',
      ar: 'المرحلة 5 • 14-16 سنة'
    },
    'card5.title': {
      tr: 'Metin Tabanlı Kodlama: Python',
      en: 'Text-Based Coding: Python',
      ar: 'البرمجة النصية: بايثون'
    },
    'card5.subtitle': {
      tr: 'Lise 9. ve 10. Sınıf',
      en: 'High School 9th & 10th Grade',
      ar: 'الصف التاسع والعاشر الثانوي'
    },
    'card5.tag1': {
      tr: 'Python 3 Sözdizimi',
      en: 'Python 3 Syntax',
      ar: 'صياغة بايثون 3'
    },
    'card5.tag2': {
      tr: 'Fonksiyonlar & Listeler',
      en: 'Functions & Lists',
      ar: 'الدوال والقوائم'
    },
    'card5.tag3': {
      tr: 'Veri Analitiği Temeli',
      en: 'Data Analytics Basics',
      ar: 'أساسيات تحليل البيانات'
    },

    'card6.badge': {
      tr: '6. Aşama • 16-18 Yaş',
      en: 'Stage 6 • Ages 16-18',
      ar: 'المرحلة 6 • 16-18 سنة'
    },
    'card6.title': {
      tr: 'Yapay Zeka, IoT & Siber Güvenlik',
      en: 'AI, IoT & Cybersecurity',
      ar: 'الذكاء الاصطناعي وإنترنت الأشياء والأمن السيبراني'
    },
    'card6.subtitle': {
      tr: 'Lise 11. ve 12. Sınıf',
      en: 'High School 11th & 12th Grade',
      ar: 'الصف الحادي عشر والثاني عشر الثانوي'
    },
    'card6.tag1': {
      tr: 'Machine Learning',
      en: 'Machine Learning',
      ar: 'التعلم الآلي'
    },
    'card6.tag2': {
      tr: 'IoT & Bulut Sistemleri',
      en: 'IoT & Cloud Systems',
      ar: 'إنترنت الأشياء والأنظمة السحابية'
    },
    'card6.tag3': {
      tr: 'Siber Savunma Etiği',
      en: 'Cyber Defense Ethics',
      ar: 'أخلاقيات الدفاع السيبراني'
    },

    'card.details.btn': {
      tr: 'Müfredat Detayları',
      en: 'Curriculum Details',
      ar: 'تفاصيل المنهج'
    },

    // ── ABOUT US / TIMELINE ──
    'about.title': {
      tr: 'EĞİTİM YOLCULUĞUMUZ',
      en: 'OUR EDUCATIONAL JOURNEY',
      ar: 'رحلتنا التعليمية'
    },
    'about.subtitle': {
      tr: 'Ana Sınıfından Üniversite Kapısına Uzanan Teknoloji Basamakları',
      en: 'Technology Steps from Kindergarten to University',
      ar: 'خطوات التكنولوجيا من الروضة إلى الجامعة'
    },
    'about.m1.title': {
      tr: 'Okul Öncesi (4-6 Yaş)',
      en: 'Preschool (Ages 4-6)',
      ar: 'ما قبل المدرسة (4-6 سنوات)'
    },
    'about.m1.subtitle': {
      tr: 'Temellerin Atıldığı İlk Adım',
      en: 'The First Step Where Foundations Are Laid',
      ar: 'الخطوة الأولى لوضع الأساسيات'
    },
    'about.m1.desc': {
      tr: 'Bilgisayarsız kodlama (Unplugged Coding) oyunları, algoritma mantığı, yön kavramları ve güvenli dijital alışkanlıklarla teknolojiyi tüketen değil üreten birey olma yolunda ilk tohumlar atılır.',
      en: 'The first seeds are planted through unplugged coding games, algorithm logic, directional concepts, and safe digital habits towards becoming a technology creator rather than a consumer.',
      ar: 'تُزرع البذور الأولى من خلال ألعاب البرمجة بدون حاسوب، ومنطق الخوارزميات، ومفاهيم الاتجاهات، والعادات الرقمية الآمنة نحو أن يصبح الفرد منتجاً للتكنولوجيا لا مستهلكاً لها.'
    },
    'about.m2.title': {
      tr: 'İlkokul (1-4. Sınıf)',
      en: 'Primary School (Grades 1-4)',
      ar: 'المرحلة الابتدائية (الصفوف 1-4)'
    },
    'about.m2.subtitle': {
      tr: 'Yaratıcılığın Kodlanması',
      en: 'Coding Creativity',
      ar: 'ترميز الإبداع'
    },
    'about.m2.desc': {
      tr: 'Scratch ile kendi hikayelerini ve 2D oyunlarını kodlayan öğrencilerimiz, Tinkercad ile 3D modelleme yaparak hayal ettikleri nesneleri üretmenin ve somutlaştırmanın heyecanını yaşarlar.',
      en: 'Our students who code their own stories and 2D games with Scratch experience the excitement of producing and materializing the objects they imagine through 3D modeling with Tinkercad.',
      ar: 'يعيش طلابنا الذين يبرمجون قصصهم وألعابهم ثنائية الأبعاد بسكراتش حماس إنتاج وتجسيد الأشياء التي يتخيلونها من خلال النمذجة ثلاثية الأبعاد بـ Tinkercad.'
    },
    'about.m3.title': {
      tr: 'Ortaokul (5-8. Sınıf)',
      en: 'Middle School (Grades 5-8)',
      ar: 'المرحلة المتوسطة (الصفوف 5-8)'
    },
    'about.m3.subtitle': {
      tr: 'Robotik ve Mühendislik',
      en: 'Robotics and Engineering',
      ar: 'الروبوتات والهندسة'
    },
    'about.m3.desc': {
      tr: 'Elektronik devreler, sensörler, micro:bit ve Arduino ile fiziksel bilişim projeleri geliştirilir; blok tabanlı mantıktan metin tabanlı Python dünyasına ilk profesyonel adım atılır.',
      en: 'Physical computing projects are developed with electronic circuits, sensors, micro:bit and Arduino; the first professional step is taken from block-based logic to the text-based Python world.',
      ar: 'يتم تطوير مشاريع الحوسبة المادية بالدوائر الإلكترونية والمستشعرات و micro:bit وأردوينو؛ ويُتخذ أول خطوة مهنية من المنطق القائم على الكتل إلى عالم بايثون النصي.'
    },
    'about.m4.title': {
      tr: 'Lise (9-12. Sınıf)',
      en: 'High School (Grades 9-12)',
      ar: 'المرحلة الثانوية (الصفوف 9-12)'
    },
    'about.m4.subtitle': {
      tr: 'Geleceğin Yazılım Mühendisleri',
      en: 'Future Software Engineers',
      ar: 'مهندسو البرمجيات في المستقبل'
    },
    'about.m4.desc': {
      tr: 'Nesne yönelimli programlama, web teknolojileri (HTML/CSS/JS), yapay zeka algoritmaları ve veri analitiği ile üniversite ve uluslararası teknoloji kariyerine tam donanımlı hazırlık sağlanır.',
      en: 'Full preparation for university and international technology careers is provided with object-oriented programming, web technologies (HTML/CSS/JS), AI algorithms, and data analytics.',
      ar: 'يتم توفير إعداد كامل للجامعة والمسيرات المهنية الدولية في التكنولوجيا من خلال البرمجة الكائنية وتقنيات الويب (HTML/CSS/JS) وخوارزميات الذكاء الاصطناعي وتحليلات البيانات.'
    },
    'about.circle.line1': {
      tr: 'GELECEK',
      en: 'THE FUTURE',
      ar: 'المستقبل'
    },
    'about.circle.line2': {
      tr: 'BURADA',
      en: 'IS CODED',
      ar: 'يُبرمج'
    },
    'about.circle.line3': {
      tr: 'KODLANIYOR',
      en: 'HERE',
      ar: 'هنا'
    },

    // ── TEAM ──
    'team.title': {
      tr: 'BİLİŞİM & İNOVASYON KADROMUZ',
      en: 'OUR IT & INNOVATION TEAM',
      ar: 'فريق تكنولوجيا المعلومات والابتكار لدينا'
    },
    'team.subtitle': {
      tr: 'Geleceğin Teknolojisine Yön Veren ve Öğrencilerini İlhamla Büyüten Dinamik Kadromuz',
      en: 'Our Dynamic Team Guiding Future Technology and Inspiring Student Growth',
      ar: 'فريقنا الديناميكي الذي يوجه تكنولوجيا المستقبل ويلهم نمو الطلاب'
    },
    'team.member1.title': {
      tr: 'Bilişim Teknolojileri Zümresi',
      en: 'IT Department',
      ar: 'قسم تكنولوجيا المعلومات'
    },
    'team.member1.role': {
      tr: 'K12 Müfredat & Kodlama Koordinatörlüğü',
      en: 'K12 Curriculum & Coding Coordination',
      ar: 'تنسيق المنهج K12 والبرمجة'
    },
    'team.member2.title': {
      tr: 'Robotik & STEM Mentorluğu',
      en: 'Robotics & STEM Mentorship',
      ar: 'إرشاد الروبوتات و STEM'
    },
    'team.member2.role': {
      tr: 'Fiziksel Bilişim, Sensörler & Maker Lab',
      en: 'Physical Computing, Sensors & Maker Lab',
      ar: 'الحوسبة المادية والمستشعرات ومختبر الصانعين'
    },
    'team.member3.title': {
      tr: 'Yapay Zeka & İnovasyon Ekibi',
      en: 'AI & Innovation Team',
      ar: 'فريق الذكاء الاصطناعي والابتكار'
    },
    'team.member3.role': {
      tr: 'TEKNOFEST, Yarışmalar & Proje Yönetimi',
      en: 'TEKNOFEST, Competitions & Project Management',
      ar: 'تكنوفست والمسابقات وإدارة المشاريع'
    },
    'team.summary': {
      tr: 'Uğur Okulları Viranşehir Kampüsü olarak; öğrencilerimize sadece teknoloji tüketicisi olmayı değil, algoritmik düşünen, problem çözen, etik değerlerle donanmış ve geleceğin dijital dünyasını inşa eden liderler olma vizyonunu kazandırıyoruz.',
      en: 'At Uğur Schools Viranşehir Campus, we equip our students not just to be technology consumers, but to become leaders who think algorithmically, solve problems, are armed with ethical values, and build the digital world of the future.',
      ar: 'في مدارس أوغور حرم فيران شهير، نزود طلابنا ليس فقط ليكونوا مستهلكين للتكنولوجيا، بل ليصبحوا قادة يفكرون خوارزمياً ويحلون المشكلات ومسلحين بالقيم الأخلاقية ويبنون العالم الرقمي للمستقبل.'
    },

    // ── CONTACT ──
    'contact.title': {
      tr: 'BİZE ULAŞIN',
      en: 'CONTACT US',
      ar: 'اتصل بنا'
    },
    'contact.subtitle': {
      tr: 'Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri Bölümü İletişim Formu',
      en: 'Uğur Schools Viranşehir Campus IT Department Contact Form',
      ar: 'نموذج الاتصال بقسم تكنولوجيا المعلومات في مدارس أوغور حرم فيران شهير'
    },
    'contact.form.name': {
      tr: 'ADINIZ SOYADINIZ *',
      en: 'YOUR FULL NAME *',
      ar: '* الاسم الكامل'
    },
    'contact.form.email': {
      tr: 'E-POSTA ADRESİNİZ *',
      en: 'YOUR EMAIL ADDRESS *',
      ar: '* عنوان البريد الإلكتروني'
    },
    'contact.form.subject': {
      tr: 'KONU (Örn: Müfredat Bilgisi, Robotik Kulübü) *',
      en: 'SUBJECT (e.g., Curriculum Info, Robotics Club) *',
      ar: '* الموضوع (مثال: معلومات المنهج، نادي الروبوتات)'
    },
    'contact.form.message': {
      tr: 'MESAJINIZ *',
      en: 'YOUR MESSAGE *',
      ar: '* رسالتك'
    },
    'contact.form.submit': {
      tr: 'MESAJ GÖNDER',
      en: 'SEND MESSAGE',
      ar: 'إرسال الرسالة'
    },
    'contact.form.success': {
      tr: 'Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.',
      en: 'Your message has been sent successfully! We will contact you as soon as possible.',
      ar: 'تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت ممكن.'
    },
    'contact.address.title': {
      tr: 'Kampüs Adresi',
      en: 'Campus Address',
      ar: 'عنوان الحرم'
    },
    'contact.address.value': {
      tr: 'Viranşehir / Şanlıurfa',
      en: 'Viranşehir / Şanlıurfa',
      ar: 'فيران شهير / شانلي أورفا'
    },
    'contact.institution.title': {
      tr: 'Kurum',
      en: 'Institution',
      ar: 'المؤسسة'
    },
    'contact.institution.value': {
      tr: 'Uğur Okulları Viranşehir Kampüsü',
      en: 'Uğur Schools Viranşehir Campus',
      ar: 'مدارس أوغور حرم فيران شهير'
    },
    'contact.email.title': {
      tr: 'E-Posta',
      en: 'Email',
      ar: 'البريد الإلكتروني'
    },

    // ── FOOTER ──
    'footer.copyright': {
      tr: '© 2026 Uğur Okulları Viranşehir Kampüsü',
      en: '© 2026 Uğur Schools Viranşehir Campus',
      ar: '© 2026 مدارس أوغور حرم فيران شهير'
    },
    'footer.dept': {
      tr: 'Bilişim Teknolojileri ve İnovasyon',
      en: 'Information Technologies & Innovation',
      ar: 'تكنولوجيا المعلومات والابتكار'
    },

    // ── CAMPUS MODAL ──
    'campus.modal.title': {
      tr: 'Uğur Okulları Viranşehir Kampüsü Yerleşkesi',
      en: 'Uğur Schools Viranşehir Campus Grounds',
      ar: 'حرم مدارس أوغور فيران شهير'
    },
    'campus.modal.subtitle': {
      tr: 'Bilişim Teknolojileri, İnovasyon & Robotik Laboratuvarı Eğitim Binası (Tam Görünüm)',
      en: 'IT, Innovation & Robotics Lab Education Building (Full View)',
      ar: 'مبنى تعليم مختبر تكنولوجيا المعلومات والابتكار والروبوتات (عرض كامل)'
    },
    'campus.modal.location': {
      tr: '📍 Şanlıurfa / Viranşehir • K12 Tüm Kademeler',
      en: '📍 Şanlıurfa / Viranşehir • All K12 Stages',
      ar: '📍 شانلي أورفا / فيران شهير • جميع مراحل K12'
    },

    // ── MODAL DETAILS ──
    'modal.outcomes.title': {
      tr: '✦ Temel Öğrenme Kazanımları',
      en: '✦ Core Learning Outcomes',
      ar: '✦ نتائج التعلم الأساسية'
    },
    'modal.tools.title': {
      tr: '⚡ Kullanılan Yazılım ve Araçlar',
      en: '⚡ Software & Tools Used',
      ar: '⚡ البرامج والأدوات المستخدمة'
    },
    'modal.project.title': {
      tr: '🏆 Dönem Sonu Projesi',
      en: '🏆 End-of-Term Project',
      ar: '🏆 مشروع نهاية الفصل'
    },
    'modal.outcome.label': {
      tr: 'Öğrenme Çıktısı',
      en: 'Learning Outcome',
      ar: 'نتيجة التعلم'
    },

    // ── TOAST MESSAGES ──
    'toast.sound.on': {
      tr: 'Ses efektleri açıldı',
      en: 'Sound effects enabled',
      ar: 'تم تفعيل المؤثرات الصوتية'
    },
    'toast.sound.off': {
      tr: 'Ses efektleri kapatıldı',
      en: 'Sound effects disabled',
      ar: 'تم إيقاف المؤثرات الصوتية'
    },
    'toast.theme.light': {
      tr: 'Açık Mod aktif edildi',
      en: 'Light Mode activated',
      ar: 'تم تفعيل الوضع الفاتح'
    },
    'toast.theme.dark': {
      tr: 'Kapalı Mod aktif edildi',
      en: 'Dark Mode activated',
      ar: 'تم تفعيل الوضع الداكن'
    },
    'toast.theme.system': {
      tr: 'Sistem Modu aktif edildi (Otomatik)',
      en: 'System Mode activated (Auto)',
      ar: 'تم تفعيل وضع النظام (تلقائي)'
    },
    'toast.share': {
      tr: 'Müfredat bağlantısı paylaşıldı!',
      en: 'Curriculum link shared!',
      ar: 'تم مشاركة رابط المنهج!'
    },
    'toast.clipboard': {
      tr: 'Bağlantı panoya kopyalandı! 📋',
      en: 'Link copied to clipboard! 📋',
      ar: 'تم نسخ الرابط إلى الحافظة! 📋'
    },
    'toast.lang.tr': {
      tr: 'Dil Türkçe olarak değiştirildi',
      en: 'Language changed to Turkish',
      ar: 'تم تغيير اللغة إلى التركية'
    },
    'toast.lang.en': {
      tr: 'Language changed to English',
      en: 'Language changed to English',
      ar: 'تم تغيير اللغة إلى الإنجليزية'
    },
    'toast.lang.ar': {
      tr: 'تم تغيير اللغة إلى العربية',
      en: 'Language changed to Arabic',
      ar: 'تم تغيير اللغة إلى العربية'
    },

    // ── LANGUAGE SELECTOR ──
    'lang.label': {
      tr: 'DİL',
      en: 'LANGUAGE',
      ar: 'اللغة'
    },
    'lang.tr': {
      tr: 'Türkçe',
      en: 'Türkçe',
      ar: 'التركية'
    },
    'lang.en': {
      tr: 'English',
      en: 'English',
      ar: 'الإنجليزية'
    },
    'lang.ar': {
      tr: 'العربية',
      en: 'العربية',
      ar: 'العربية'
    },

    // ── TYPEWRITER DYNAMIC HEADLINES ──
    'typewriter.0': {
      tr: 'Yapay Zeka ve Geleceği Kodluyoruz',
      en: 'We Code AI and the Future',
      ar: 'نبرمج الذكاء الاصطناعي والمستقبل'
    },
    'typewriter.1': {
      tr: "Geleceğin Gücü Uğur'da Başlar",
      en: "The Power of Tomorrow Starts at Uğur",
      ar: 'قوة المستقبل تبدأ في أوغور'
    },
    'typewriter.2': {
      tr: "Viranşehir'de Başarıyı Zirveye Taşıyoruz",
      en: 'We Take Success to the Top in Viranşehir',
      ar: 'ننقل النجاح إلى القمة في فيران شهير'
    },
    'typewriter.3': {
      tr: 'Teknoloji ve İnovasyonun Öncüsü',
      en: 'Pioneer of Technology and Innovation',
      ar: 'رائد التكنولوجيا والابتكار'
    },
    'typewriter.4': {
      tr: "Siz Hayal Edin, Viranşehir Uğur'da Gerçekleştirelim",
      en: "You Dream It, We Build It at Viranşehir Uğur",
      ar: 'أنت تحلم، ونحن نحققه في أوغور فيران شهير'
    },

    // ── NAVBAR TOGGLER ──
    'nav.toggler.label': {
      tr: 'Gezinti Menüsünü Aç/Kapat',
      en: 'Toggle Navigation Menu',
      ar: 'تبديل قائمة التنقل'
    },
    'nav.brand.label': {
      tr: 'Uğur Okulları Viranşehir Kampüsü',
      en: 'Uğur Schools Viranşehir Campus',
      ar: 'مدارس أوغور حرم فيران شهير'
    },
    'nav.brand.name': {
      tr: 'UĞUR OKULLARI',
      en: 'UĞUR SCHOOLS',
      ar: 'مدارس أوغور'
    },
    'nav.brand.campus': {
      tr: 'Viranşehir Kampüsü',
      en: 'Viranşehir Campus',
      ar: 'حرم فيران شهير'
    }
  };

  // ─── TYPEWRITER HEADLINES PER LANGUAGE ──────────────────────────
  // (Used by typewriter controller to swap slogan text)
  function getTypewriterTexts(lang) {
    return [
      translations['typewriter.0'][lang] || translations['typewriter.0'].tr,
      translations['typewriter.1'][lang] || translations['typewriter.1'].tr,
      translations['typewriter.2'][lang] || translations['typewriter.2'].tr,
      translations['typewriter.3'][lang] || translations['typewriter.3'].tr,
      translations['typewriter.4'][lang] || translations['typewriter.4'].tr,
    ];
  }

  // ─── CURRICULUM MODAL DATA PER LANGUAGE ────────────────────────
  const curriculumDataI18n = {
    tr: {
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
    },
    en: {
      1: {
        stage: 'Stage 1 • Kindergarten - 2nd Grade',
        title: 'Introduction to IT & First Steps in the Digital World',
        age: 'Ages 5-8',
        desc: 'Provides students\' first conscious contact with digital tools. Cognitive motor skills are developed with a creative and productive approach, away from technology addiction.',
        outcomes: [
          'Mastering drag-and-drop, double-click, and pointing skills with the mouse',
          'Recognizing arrow keys, letters, and basic control keys on the keyboard',
          'Proper sitting posture (ergonomics) and screen time awareness',
          'Step-by-step algorithm and sequential command logic with Code.org visual puzzles',
          'Transferring imagination to screen with digital drawing and pixel painting tools'
        ],
        tools: ['Code.org Course A-B', 'Tux Paint', 'Mouse Skills Jr', 'LightBot Jr', 'Visual Algorithm Cards'],
        project: 'My First Digital Story & Coded Maze Adventure'
      },
      2: {
        stage: 'Stage 2 • 3rd - 4th Grade',
        title: 'Block Coding & Design Your Own Game',
        age: 'Ages 8-10',
        desc: 'Perfects block-based logical thinking before transitioning to text-based coding. Children write their own rules instead of just consuming their favorite games.',
        outcomes: [
          'Managing the Scratch 3.0 interface, scenes, costumes, and sound blocks',
          'Loops (Forever, Repeat 10) and Conditional Statements (If - Then)',
          'Broadcasting between characters and creating interactive dialogues',
          'Character movement and collision tests on the X-Y coordinate plane',
          'Digital citizenship, cyberbullying awareness, and creating secure passwords'
        ],
        tools: ['MIT Scratch 3.0', 'ScratchJr', 'Code.org Express', 'Google Be Internet Awesome', 'Pixel Art Studio'],
        project: 'Maze Escape & Environmental Awareness Interactive Platform Game'
      },
      3: {
        stage: 'Stage 3 • 5th - 6th Grade',
        title: '3D Design, Modeling & Hardware Architecture',
        age: 'Ages 10-12',
        desc: 'Transition from abstract thinking to tangible production. Students understand the internal anatomy of computers and produce objects they dream of through 3D spatial modeling.',
        outcomes: [
          'Combining geometric shapes, drilling holes, and grouping techniques with Tinkercad',
          'Dimensioning, millimetric alignment, and working on 3D space axes (X, Y, Z)',
          '3D Printer (FDM) working principle, filament types, and layered production logic',
          'Computer hardware architecture: Motherboard, CPU, RAM, GPU, Power Supply, and SSD',
          'Binary number system (0-1) and data storage unit conversions (Byte, KB, MB, GB, TB)'
        ],
        tools: ['Autodesk Tinkercad', 'UltiMaker Cura (Slicer)', 'Hardware Disassembly Kit', 'Canva for Education'],
        project: 'Customized 3D Keychain Design & Computer Assembly Simulation'
      },
      4: {
        stage: 'Stage 4 • 7th - 8th Grade',
        title: 'Maker Movement, Physical Programming & Arduino World',
        age: 'Ages 12-14',
        desc: 'Where software meets motors and sensors in the physical world. Problem-solving with maker culture, solder-free prototyping, and automation.',
        outcomes: [
          'Arduino UNO development board, microcontroller architecture, and pin structure (Digital & PWM & Analog)',
          'Breadboard internal conductor lines, resistance (Ohm), and LED polarity rules',
          'Ohm\'s Law basics and short circuit prevention principles',
          'Potentiometer, LDR (Light Sensor), and Ultrasonic Distance Sensor (HC-SR04) data reading',
          'Servo Motor angle control and creating mechanical movement with relays'
        ],
        tools: ['Arduino IDE', 'Tinkercad Circuits Simulator', 'Arduino UNO R3', 'Sensor Kit (LDR, Ultrasonic, Servo)'],
        project: 'Smart Home Automation: Light-Sensitive Night Lamp & Obstacle-Avoiding Robot Design'
      },
      5: {
        stage: 'Stage 5 • 9th - 10th Grade',
        title: 'Real-World Text-Based Programming: Python',
        age: 'Ages 14-16',
        desc: 'Professional software development fundamentals with the world\'s most popular language, Python. Algorithm complexity, functional modules, and data science preparation.',
        outcomes: [
          'Python 3 syntax, PEP 8 standards, variables, and data types (int, float, str, bool)',
          'Collection structures: Lists, Tuples, and Dictionaries',
          'Loops (for, while), conditional blocks (if-elif-else), and logical operators',
          'Function definition (def), arguments, return values, and local/global scope',
          'Error handling (Exception handling: try-except) and file I/O'
        ],
        tools: ['Python 3.12', 'VS Code / PyCharm Edu', 'Google Colab', 'Jupyter Notebook', 'Turtle Graphics'],
        project: 'Student Grade Automation & Mini Console Data Analytics Application'
      },
      6: {
        stage: 'Stage 6 • 11th - 12th Grade',
        title: 'Future Technologies: AI, IoT & Cybersecurity',
        age: 'Ages 16-18',
        desc: 'University and career vision. Machine learning algorithms, Internet of Things (IoT), ethical cyber defense strategies, and AI ethics.',
        outcomes: [
          'Conceptual distinction between AI vs Machine Learning (ML) vs Deep Learning (DL)',
          'Efficient problem-solving with Large Language Models (LLM) and Prompt Engineering',
          'Cybersecurity fundamentals: Encryption algorithms, Phishing defense, Network protocols (TCP/IP, HTTP/S)',
          'IoT and ESP32/Cloud architecture: Data transfer to cloud and remote telemetry',
          'AI ethics, copyright, Deepfake awareness, and responsible technology leadership'
        ],
        tools: ['TensorFlow Lite / Teachable Machine', 'Hugging Face API', 'Wireshark Basics', 'MQTT / Adafruit IO', 'Python Scikit-Learn'],
        project: 'Camera-Based Object Recognition Model & Secure Smart Campus IoT Simulation'
      }
    },
    ar: {
      1: {
        stage: 'المرحلة 1 • الروضة - الصف الثاني',
        title: 'التعرف على تكنولوجيا المعلومات والخطوات الأولى في العالم الرقمي',
        age: '5-8 سنوات',
        desc: 'يوفر أول اتصال واعٍ للطلاب بالأدوات الرقمية. يتم تطوير المهارات الحركية المعرفية بنهج إبداعي ومنتج، بعيداً عن إدمان التكنولوجيا.',
        outcomes: [
          'إتقان مهارات السحب والإفلات والنقر المزدوج والتأشير بالفأرة',
          'التعرف على مفاتيح الأسهم والحروف ومفاتيح التحكم الأساسية على لوحة المفاتيح',
          'وضعية الجلوس الصحيحة (بيئة العمل) والوعي بوقت الشاشة',
          'منطق الخوارزمية والأوامر المتسلسلة خطوة بخطوة مع ألغاز Code.org المرئية',
          'نقل الخيال إلى الشاشة باستخدام أدوات الرسم الرقمي وتلوين البكسل'
        ],
        tools: ['Code.org Course A-B', 'Tux Paint', 'Mouse Skills Jr', 'LightBot Jr', 'بطاقات الخوارزمية المرئية'],
        project: 'قصتي الرقمية الأولى ومغامرة المتاهة المبرمجة'
      },
      2: {
        stage: 'المرحلة 2 • الصف الثالث - الرابع',
        title: 'البرمجة بالكتل وتصميم لعبتك الخاصة',
        age: '8-10 سنوات',
        desc: 'إتقان التفكير المنطقي القائم على الكتل قبل الانتقال إلى البرمجة النصية. يكتب الأطفال قواعدهم الخاصة بدلاً من مجرد استهلاك ألعابهم المفضلة.',
        outcomes: [
          'إدارة واجهة سكراتش 3.0 والمشاهد والأزياء وكتل الصوت',
          'الحلقات (تكرار دائم، تكرار 10 مرات) والعبارات الشرطية (إذا - فإن)',
          'البث بين الشخصيات وإنشاء حوارات تفاعلية',
          'اختبارات حركة الشخصيات والتصادم على مستوى الإحداثيات X-Y',
          'المواطنة الرقمية والوعي بالتنمر الإلكتروني وإنشاء كلمات مرور آمنة'
        ],
        tools: ['MIT Scratch 3.0', 'ScratchJr', 'Code.org Express', 'Google Be Internet Awesome', 'Pixel Art Studio'],
        project: 'الهروب من المتاهة ولعبة منصة تفاعلية بموضوع الوعي البيئي'
      },
      3: {
        stage: 'المرحلة 3 • الصف الخامس - السادس',
        title: 'التصميم ثلاثي الأبعاد والنمذجة وهندسة الأجهزة',
        age: '10-12 سنة',
        desc: 'الانتقال من التفكير المجرد إلى الإنتاج الملموس. يفهم الطلاب التشريح الداخلي لأجهزة الكمبيوتر وينتجون الأشياء التي يحلمون بها من خلال النمذجة المكانية ثلاثية الأبعاد.',
        outcomes: [
          'تقنيات دمج الأشكال الهندسية وحفر الثقوب والتجميع باستخدام Tinkercad',
          'التحجيم والمحاذاة المليمترية والعمل على محاور الفضاء ثلاثي الأبعاد (X، Y، Z)',
          'مبدأ عمل الطابعة ثلاثية الأبعاد (FDM) وأنواع الخيوط ومنطق الإنتاج الطبقي',
          'هندسة أجهزة الكمبيوتر: اللوحة الأم، وحدة المعالجة المركزية، الذاكرة، بطاقة الرسومات، مصدر الطاقة و SSD',
          'نظام العد الثنائي (0-1) وتحويلات وحدات تخزين البيانات (بايت، كيلوبايت، ميغابايت، غيغابايت، تيرابايت)'
        ],
        tools: ['Autodesk Tinkercad', 'UltiMaker Cura (Slicer)', 'مجموعة تفكيك الأجهزة', 'Canva for Education'],
        project: 'تصميم سلسلة مفاتيح ثلاثية الأبعاد مخصصة ومحاكاة تجميع الكمبيوتر'
      },
      4: {
        stage: 'المرحلة 4 • الصف السابع - الثامن',
        title: 'حركة الصانعين والبرمجة المادية وعالم أردوينو',
        age: '12-14 سنة',
        desc: 'حيث يلتقي البرنامج بالمحركات والمستشعرات في العالم المادي. حل المشكلات مع ثقافة الصانعين، والنماذج الأولية بدون لحام، والأتمتة.',
        outcomes: [
          'لوحة تطوير Arduino UNO وهندسة المتحكم الدقيق وبنية الدبابيس (رقمي و PWM وتناظري)',
          'خطوط التوصيل الداخلية للوحة التجارب والمقاومة (أوم) وقواعد قطبية LED',
          'أساسيات قانون أوم ومبادئ منع الدوائر القصيرة',
          'قراءة بيانات مقياس الجهد ومستشعر الضوء (LDR) ومستشعر المسافة بالموجات فوق الصوتية (HC-SR04)',
          'التحكم في زاوية محرك السيرفو وإنشاء حركة ميكانيكية باستخدام المرحلات'
        ],
        tools: ['Arduino IDE', 'محاكي دوائر Tinkercad', 'Arduino UNO R3', 'مجموعة المستشعرات (LDR، فوق صوتي، سيرفو)'],
        project: 'أتمتة المنزل الذكي: مصباح ليلي حساس للضوء وتصميم روبوت يتجنب العوائق'
      },
      5: {
        stage: 'المرحلة 5 • الصف التاسع - العاشر',
        title: 'البرمجة النصية في العالم الحقيقي: بايثون',
        age: '14-16 سنة',
        desc: 'أساسيات تطوير البرمجيات المهنية مع أشهر لغة في العالم، بايثون. تعقيد الخوارزميات والوحدات الوظيفية والتحضير لعلم البيانات.',
        outcomes: [
          'صياغة بايثون 3 ومعايير PEP 8 والمتغيرات وأنواع البيانات (int، float، str، bool)',
          'هياكل المجموعات: القوائم (List) والمجموعات (Tuple) والقواميس (Dictionary)',
          'الحلقات (for، while) والكتل الشرطية (if-elif-else) والعوامل المنطقية',
          'تعريف الدوال (def) والمعاملات وقيم الإرجاع والنطاق المحلي/العالمي',
          'معالجة الأخطاء (try-except) وقراءة/كتابة الملفات (I/O)'
        ],
        tools: ['Python 3.12', 'VS Code / PyCharm Edu', 'Google Colab', 'Jupyter Notebook', 'Turtle Graphics'],
        project: 'أتمتة درجات الطلاب وتطبيق تحليل بيانات وحدة التحكم المصغرة'
      },
      6: {
        stage: 'المرحلة 6 • الصف الحادي عشر - الثاني عشر',
        title: 'تقنيات المستقبل: الذكاء الاصطناعي وإنترنت الأشياء والأمن السيبراني',
        age: '16-18 سنة',
        desc: 'رؤية الجامعة والمسيرة المهنية. خوارزميات التعلم الآلي وإنترنت الأشياء (IoT) واستراتيجيات الدفاع السيبراني الأخلاقية وأخلاقيات الذكاء الاصطناعي.',
        outcomes: [
          'التمييز المفاهيمي بين الذكاء الاصطناعي (AI) والتعلم الآلي (ML) والتعلم العميق (DL)',
          'حل المشكلات بكفاءة باستخدام نماذج اللغة الكبيرة (LLM) وهندسة المطالبات',
          'أساسيات الأمن السيبراني: خوارزميات التشفير والدفاع ضد التصيد وبروتوكولات الشبكات (TCP/IP، HTTP/S)',
          'هندسة إنترنت الأشياء و ESP32/السحابة: نقل البيانات إلى السحابة والقياس عن بعد',
          'أخلاقيات الذكاء الاصطناعي وحقوق النشر والوعي بالتزييف العميق (Deepfake) والقيادة التكنولوجية المسؤولة'
        ],
        tools: ['TensorFlow Lite / Teachable Machine', 'Hugging Face API', 'أساسيات Wireshark', 'MQTT / Adafruit IO', 'Python Scikit-Learn'],
        project: 'نموذج التعرف على الأشياء بالكاميرا ومحاكاة إنترنت الأشياء للحرم الذكي الآمن'
      }
    }
  };

  // ─── LANGUAGE DETECTION ──────────────────────────────────────────
  function detectLanguage() {
    // 1. Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }

    // 2. Check browser language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    // Match exact (e.g. "tr", "en", "ar") or prefix (e.g. "tr-TR", "en-US", "ar-SA")
    for (const lang of SUPPORTED_LANGS) {
      if (browserLang === lang || browserLang.startsWith(lang + '-')) {
        return lang;
      }
    }

    // 3. Default to Turkish
    return DEFAULT_LANG;
  }

  // ─── CURRENT LANGUAGE STATE ──────────────────────────────────────
  let currentLang = detectLanguage();

  // ─── TRANSLATE FUNCTION ──────────────────────────────────────────
  function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLang] || entry[DEFAULT_LANG] || key;
  }

  // ─── APPLY DIRECTION (RTL / LTR) ────────────────────────────────
  function applyDirection(lang) {
    const dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', dir);
  }

  // ─── APPLY ALL TRANSLATIONS ──────────────────────────────────────
  function applyTranslations() {
    // Set direction
    applyDirection(currentLang);

    // Update page title and meta
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translation);
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });

    // Translate title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });

    // Update current flag icon in navbar
    const flagMap = { tr: '🇹🇷', en: '🇬🇧', ar: '🇸🇦' };
    const currentFlagEl = document.getElementById('lang-current-flag');
    if (currentFlagEl) {
      currentFlagEl.textContent = flagMap[currentLang] || '🇹🇷';
    }

    // Update language dropdown and mobile switcher active state
    document.querySelectorAll('[data-lang-choice]').forEach(btn => {
      const lang = btn.getAttribute('data-lang-choice');
      if (lang === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update form submit handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.onsubmit = function (event) {
        event.preventDefault();
        alert(t('contact.form.success'));
      };
    }

    // Re-render modal if currently open
    if (window._reRenderModalIfOpen) {
      window._reRenderModalIfOpen();
    }
  }

  // ─── SET LANGUAGE ────────────────────────────────────────────────
  function setLanguage(lang, notify = true) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();

    // Play sound if available
    if (window._sfxPlayClick) {
      window._sfxPlayClick();
    }

    // Notify the typewriter system to restart with new language
    if (window._typewriterRestart) {
      window._typewriterRestart();
    }

    if (notify && window._showToastFn) {
      window._showToastFn(t('toast.lang.' + lang));
    }
  }

  // ─── UI CONTROLLER SETUP ─────────────────────────────────────────
  function init() {
    // Apply translations on load
    applyTranslations();

    const langBtn = document.getElementById('lang-menu-btn');
    const langDropdown = document.getElementById('lang-dropdown-menu');

    function toggleLangDropdown(show) {
      if (!langDropdown) return;
      if (show) {
        langDropdown.classList.add('show');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'true');
      } else {
        langDropdown.classList.remove('show');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      }
    }

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window._sfxPlayClick) window._sfxPlayClick();
        const isOpen = langDropdown.classList.contains('show');
        toggleLangDropdown(!isOpen);
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target) && e.target !== langBtn) {
          toggleLangDropdown(false);
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          toggleLangDropdown(false);
        }
      });
    }

    // Bind all language selection buttons (desktop dropdown & mobile segmented)
    document.querySelectorAll('[data-lang-choice]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const choice = btn.getAttribute('data-lang-choice');
        if (choice) {
          setLanguage(choice, true);
          toggleLangDropdown(false);
        }
      });
    });
  }

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ─── PUBLIC API ──────────────────────────────────────────────────
  const api = {
    t,
    currentLang: () => currentLang,
    setLanguage,
    applyTranslations,
    getTypewriterTexts,
    getCurriculumData: (stageId) => {
      const langData = curriculumDataI18n[currentLang] || curriculumDataI18n.tr;
      return langData[stageId];
    },
    SUPPORTED_LANGS,
    detectLanguage,
    init
  };

  window.I18N = api;
  return api;
})();
