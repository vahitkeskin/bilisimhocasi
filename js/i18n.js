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
    'modal.units.title': {
      tr: '📚 Akademik Dönem Üniteleri ve Konu Başlıkları',
      en: '📚 Academic Term Units & Curriculum Topics',
      ar: '📚 وحدات الفصول الأكاديمية وموضوعات المنهج'
    },
    'modal.term1.title': {
      tr: '🍁 1. Dönem Üniteleri (Güz)',
      en: '🍁 Term 1 Units (Fall)',
      ar: '🍁 وحدات الفصل الدراسي الأول (الخريف)'
    },
    'modal.term2.title': {
      tr: '🌱 2. Dönem Üniteleri (Bahar)',
      en: '🌱 Term 2 Units (Spring)',
      ar: '🌱 وحدات الفصل الدراسي الثاني (الربيع)'
    },
    'modal.scope.label': {
      tr: 'Ders Kapsamı',
      en: 'Course Scope',
      ar: 'نطاق المادة'
    },
    'modal.stage.prefix': {
      tr: 'Aşama',
      en: 'Stage',
      ar: 'المرحلة'
    },
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
    "tr": {
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
    },
    "en": {
        "1": {
            "stage": "Stage 1 • Kindergarten - 2nd Grade",
            "title": "Introduction to IT & First Steps in the Digital World",
            "age": "Ages 4-8",
            "desc": "Provides students' first conscious contact with digital tools. Cognitive motor skills are developed with a creative and productive approach, away from screen addiction.",
            "grades": {
                "anasinifi": {
                    "tabTitle": "Kindergarten (Ages 4-5)",
                    "badge": "Preschool • Ages 4-5 • 1-2 Hours/Week",
                    "title": "Kindergarten: Unplugged Coding & Cognitive Foundations",
                    "age": "Ages 4 - 5",
                    "scope": "1-2 Hours/Week • Cognitive Development & Motor Coordination",
                    "desc": "Establishing orientation, sequencing, and cause-and-effect through tangible materials and game-based activities without screen dependency.",
                    "term1": [
                        {
                            "unit": "Unit 1: Discovering IT & Ergonomics",
                            "topics": "Digital tools in daily life, screen distance rule, posture and tech health."
                        },
                        {
                            "unit": "Unit 2: Directions & Spatial Orientation",
                            "topics": "Forward, backward, left, and right spatial concepts; maze grid navigation."
                        },
                        {
                            "unit": "Unit 3: Sequential Logic & Event Patterns",
                            "topics": "Daily life routines, pictorial event ordering, cause-and-effect relationship."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Screen-Free Unplugged Games",
                            "topics": "Floor mat coding games, shortest route planning with directional cards."
                        },
                        {
                            "unit": "Unit 5: Digital Shapes & Creative Drawing",
                            "topics": "Basic geometric shapes, color harmony, and creative composition with mouse and touch."
                        },
                        {
                            "unit": "Unit 6: Safe Digital Habits",
                            "topics": "Screen time management, authorized device usage, and basic digital cleanliness."
                        }
                    ],
                    "outcomes": [
                        "Accurately executing multi-step sequential instructions and directions",
                        "Distinguishing spatial directional concepts (left, right, forward, backward)",
                        "Adopting ergonomic sitting posture and screen time limits",
                        "Planning the optimal path to reach a target using coding cards"
                    ],
                    "tools": [
                        "Unplugged Coding Mat",
                        "Bee-Bot Simulator",
                        "Tux Paint",
                        "Visual Algorithm Cards"
                    ],
                    "project": "Colorful Maze Quest: Programmed Treasure Hunt with Bee-Bot"
                },
                "sinif1": {
                    "tabTitle": "1st Grade",
                    "badge": "Primary • Ages 6-7 • 1-2 Hours/Week",
                    "title": "1st Grade: Digital Literacy, Mouse/Keyboard Mastery & Visual Algorithms",
                    "age": "Ages 6 - 7",
                    "scope": "1-2 Hours/Week • Foundational IT Skills & Psychomotor Development",
                    "desc": "First structured digital interaction. Developing fine motor skills for mouse and keyboard while solving visual algorithm puzzles.",
                    "term1": [
                        {
                            "unit": "Unit 1: Understanding Computer Hardware",
                            "topics": "Monitor, CPU case, keyboard, mouse, headphones, and safe usage guidelines."
                        },
                        {
                            "unit": "Unit 2: Mouse Mastery & Hand-Eye Coordination",
                            "topics": "Pointing, single click, double click, drag-and-drop techniques."
                        },
                        {
                            "unit": "Unit 3: Exploring Keyboard Keys",
                            "topics": "Letters, digits, Spacebar, Enter, and Backspace functions."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Visual Algorithms with Code.org",
                            "topics": "Sequential command blocks, puzzle-solving, and introductory debugging."
                        },
                        {
                            "unit": "Unit 5: Digital Drawing & Creativity",
                            "topics": "Expressing imagination with Tux Paint brush, shape, and stamp tools."
                        },
                        {
                            "unit": "Unit 6: Digital Etiquette & Safety",
                            "topics": "Device care, respecting others' work, and elementary cyber hygiene."
                        }
                    ],
                    "outcomes": [
                        "Mastering precise drag-and-drop and double-click actions with the mouse",
                        "Typing personal name and numbers using correct keyboard layout",
                        "Arranging 3-5 command blocks in proper logical sequence",
                        "Identifying and correcting erroneous instructions (introductory debugging)"
                    ],
                    "tools": [
                        "Code.org Course A",
                        "Tux Paint",
                        "GCompris",
                        "Mouse Skills Jr"
                    ],
                    "project": "My Digital Art Gallery & 5-Step Algorithmic Story Card"
                },
                "sinif2": {
                    "tabTitle": "2nd Grade",
                    "badge": "Primary • Ages 7-8 • 2 Hours/Week",
                    "title": "2nd Grade: Sequential Logic, Loops & Interactive Tales with ScratchJr",
                    "age": "Ages 7 - 8",
                    "scope": "2 Hours/Week • Algorithmic Thinking & Block Coding Foundations",
                    "desc": "Introducing repetition loops and interactive animated stories in ScratchJr, enabling students to become creators rather than passive consumers.",
                    "term1": [
                        {
                            "unit": "Unit 1: Problem Decomposition",
                            "topics": "Analyzing tasks, breaking problems into manageable steps, creating step-by-step solutions."
                        },
                        {
                            "unit": "Unit 2: The Loop Concept",
                            "topics": "Identifying repetitive actions, optimizing command sequences with loop blocks."
                        },
                        {
                            "unit": "Unit 3: Basic Word Processing",
                            "topics": "Typing short sentences, formatting font size, color, and paragraph alignment."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: ScratchJr Character & Scene Design",
                            "topics": "Sprite selection, backdrop creation, motion blocks, and speech bubbles."
                        },
                        {
                            "unit": "Unit 5: Events & Character Communication",
                            "topics": "Green flag trigger, tap character event, and inter-character messaging."
                        },
                        {
                            "unit": "Unit 6: Digital Footprint & Privacy",
                            "topics": "Safeguarding personal data (full name, address, phone) online."
                        }
                    ],
                    "outcomes": [
                        "Simplifying code sequences using repetition loops",
                        "Programming dialogue between at least two ScratchJr sprites",
                        "Integrating event triggers (touch, start) into animation flows",
                        "Formatting text documents with basic digital typing tools"
                    ],
                    "tools": [
                        "ScratchJr",
                        "Code.org Course B",
                        "LightBot Jr",
                        "Google Docs Fundamentals"
                    ],
                    "project": "Animated Audio Storybook Narrated by Student via ScratchJr"
                }
            }
        },
        "2": {
            "stage": "Stage 2 • 3rd - 4th Grade",
            "title": "Block Coding & Design Your Own Game",
            "age": "Ages 8-10",
            "desc": "Refining block-based logical reasoning prior to text programming. Children establish game rules, variables, and interactive mechanics.",
            "grades": {
                "sinif3": {
                    "tabTitle": "3rd Grade",
                    "badge": "Primary • Ages 8-9 • 2 Hours/Week",
                    "title": "3rd Grade: Scratch 3.0 Environment, Coordinates & Decision Logic",
                    "age": "Ages 8 - 9",
                    "scope": "2 Hours/Week • Block Programming & Algorithmic Problem Solving",
                    "desc": "Exploring Scratch 3.0. Sprite motion on X-Y plane, sound synthesis, costume animations, and conditional statements (If-Then).",
                    "term1": [
                        {
                            "unit": "Unit 1: Scratch 3.0 Interface & Workspace",
                            "topics": "Stage, sprites, block categories, X-Y Cartesian coordinate system (X: -240..240, Y: -180..180)."
                        },
                        {
                            "unit": "Unit 2: Motion, Rotation & Sound Blocks",
                            "topics": "Steps, rotation angles, goto coordinates, sound playback, tempo controls."
                        },
                        {
                            "unit": "Unit 3: Loops & Conditionals (If-Then)",
                            "topics": "Forever loops, repeat N times, evaluating conditional criteria."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Costume Animation & Visual FX",
                            "topics": "Walk cycle animation, costume switching, color and ghost visual effects."
                        },
                        {
                            "unit": "Unit 5: Sensing Sensors & User Input",
                            "topics": "Touching mouse pointer, color detection, asking questions and storing replies."
                        },
                        {
                            "unit": "Unit 6: Digital Rights & Copyright Awareness",
                            "topics": "Copyright basics, credible information sourcing, strong password guidelines."
                        }
                    ],
                    "outcomes": [
                        "Controlling sprite movement precisely via X and Y coordinate parameters",
                        "Combining If-Then conditions with sensing blocks for real-time interactions",
                        "Creating fluid walking animations using costume loops",
                        "Identifying copyrighted media and applying proper citation rules"
                    ],
                    "tools": [
                        "MIT Scratch 3.0",
                        "Code.org Course C-D",
                        "Google Be Internet Awesome",
                        "Pixel Art Studio"
                    ],
                    "project": "Aquarium Ecosystem: Interactive Simulation with Feeding Fish"
                },
                "sinif4": {
                    "tabTitle": "4th Grade",
                    "badge": "Primary • Ages 9-10 • 2 Hours/Week",
                    "title": "4th Grade: 2D Game Architecture, Variables & Digital Citizenship",
                    "age": "Ages 9 - 10",
                    "scope": "2 Hours/Week • Advanced Block Coding & Game Mechanics",
                    "desc": "Game dynamics: Scoreboards, lives, timer systems, broadcasting messages across sprites, and multiplayer interactions.",
                    "term1": [
                        {
                            "unit": "Unit 1: Variables & Counters in Scratch",
                            "topics": "Initializing, incrementing, and resetting score, lives, and countdown timers."
                        },
                        {
                            "unit": "Unit 2: Message Broadcasting (Signals)",
                            "topics": "Inter-sprite communication, level transitions, game-over broadcast handlers."
                        },
                        {
                            "unit": "Unit 3: Mathematical & Boolean Operators",
                            "topics": "Random integer generation, comparison operators, AND/OR logic gates."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Building a Complete 2D Game",
                            "topics": "Maze navigation, collectible items, gravity physics, jumping mechanics."
                        },
                        {
                            "unit": "Unit 5: Extensions (Pen & Text-to-Speech)",
                            "topics": "Algorithmic geometry drawing via Pen extension; multilingual speech synthesis."
                        },
                        {
                            "unit": "Unit 6: Cyberbullying & Digital Reputation",
                            "topics": "Online netiquette, reporting abusive behavior, managing online presence."
                        }
                    ],
                    "outcomes": [
                        "Implementing win/loss game logic using score and health variables",
                        "Coordinating game states (start, level advance, game over) via broadcast messages",
                        "Programming precise collision detection with walls and moving hazards",
                        "Demonstrating appropriate responses and safety protocols against cyberbullying"
                    ],
                    "tools": [
                        "MIT Scratch 3.0",
                        "Canva for Education",
                        "Code.org Express",
                        "Pixel Art Studio"
                    ],
                    "project": "Save the Planet: Multi-Level Zero Waste 2D Platform Game"
                }
            }
        },
        "3": {
            "stage": "Stage 3 • 5th - 6th Grade",
            "title": "3D Design, Modeling & Hardware Architecture",
            "age": "Ages 10-12",
            "desc": "Transition from conceptual software to 3D spatial engineering. Computer anatomy, spreadsheet analytics, Tinkercad modeling, and 3D printing.",
            "grades": {
                "sinif5": {
                    "tabTitle": "5th Grade (National Curriculum)",
                    "badge": "Middle School • Ages 10-11 • 2 Hours/Week",
                    "title": "5th Grade: Information Technologies & Software Curriculum",
                    "age": "Ages 10 - 11",
                    "scope": "2 Hours/Week • Ministry of Education Grade 5 IT Curriculum Standards",
                    "desc": "Digital literacy, hardware-software anatomy, file structures, cyber hygiene, ethical communication, and algorithmic problem-solving.",
                    "term1": [
                        {
                            "unit": "Unit 1: Introduction to IT Systems",
                            "topics": "Hardware vs software, input/output peripherals, internal and external storage media."
                        },
                        {
                            "unit": "Unit 2: Operating Systems & File Organization",
                            "topics": "OS roles, folder hierarchy, extensions (.pdf, .docx, .png), compression, cloud storage."
                        },
                        {
                            "unit": "Unit 3: IT Ethics, Cybersecurity & Digital Citizenship",
                            "topics": "Malware types (viruses, trojans, worms), antivirus tools, strong encryption, digital footprints."
                        },
                        {
                            "unit": "Unit 4: Communication, Research & Collaboration",
                            "topics": "Search engine filters, email etiquette, evaluating credible online sources."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 5: Word Processing & Presentation Tools",
                            "topics": "Text formatting, structured tables, multimedia insertion, slide transition techniques."
                        },
                        {
                            "unit": "Unit 6: Problem-Solving Concepts & Algorithms",
                            "topics": "Deconstructing everyday problems into sequential algorithmic steps and decision points."
                        },
                        {
                            "unit": "Unit 7: Block-Based Programming Fundamentals",
                            "topics": "Algorithmic puzzle solving, sprite coordination, iteration loops, conditionals."
                        }
                    ],
                    "outcomes": [
                        "Classifying hardware components and explaining operating system responsibilities",
                        "Organizing digital files systematically and applying malware defense measures",
                        "Conducting academic research adhering to digital copyright standards",
                        "Formulating verbal and visual algorithm flows for complex real-world challenges"
                    ],
                    "tools": [
                        "Ministry EBA Portal",
                        "LibreOffice / Google Docs",
                        "MIT Scratch 3.0",
                        "Hardware Teardown Kit"
                    ],
                    "project": "Campus Cyber Safety Guide: Interactive Presentation & IT Quiz Game"
                },
                "sinif6": {
                    "tabTitle": "6th Grade (National Curriculum)",
                    "badge": "Middle School • Ages 11-12 • 2 Hours/Week",
                    "title": "6th Grade: Networking, Spreadsheets & Tinkercad 3D Design",
                    "age": "Ages 11 - 12",
                    "scope": "2 Hours/Week • Ministry of Education Grade 6 IT Curriculum Standards",
                    "desc": "Network topologies, spreadsheet data computations, and 3D geometric modeling with Autodesk Tinkercad for additive manufacturing.",
                    "term1": [
                        {
                            "unit": "Unit 1: Computer Networks & Internet Architecture",
                            "topics": "LAN, MAN, WAN topologies, client-server model, modems, routers, IP addressing."
                        },
                        {
                            "unit": "Unit 2: Cyber Crime, Intellectual Property & Licensing",
                            "topics": "Cyber law basics, open source licenses, Creative Commons, personal data privacy."
                        },
                        {
                            "unit": "Unit 3: Data Analytics with Spreadsheets",
                            "topics": "Cells, formulas (SUM, AVERAGE, IF), statistical sorting, charting dynamic data."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: 3D Spatial Modeling with Tinkercad",
                            "topics": "Workplane navigation, X-Y-Z axes, solid/hole Boolean operations, grouping, precision alignment."
                        },
                        {
                            "unit": "Unit 5: Additive Manufacturing & 3D Printing",
                            "topics": "FDM printer mechanics, PLA/ABS filaments, slicing software settings, layer heights."
                        },
                        {
                            "unit": "Unit 6: Advanced Modular Block Programming",
                            "topics": "Custom procedures ('Make a Block'), parameter passing, complex boolean conditions."
                        }
                    ],
                    "outcomes": [
                        "Performing calculations and data visualizations with spreadsheet formulas",
                        "Designing 3D geometric models using additive and subtractive modeling techniques",
                        "Explaining 3D printing parameters, slicing workflows, and material specifications",
                        "Creating modular custom function blocks to eliminate code redundancy"
                    ],
                    "tools": [
                        "Autodesk Tinkercad",
                        "UltiMaker Cura (Slicer)",
                        "Google Sheets / Excel",
                        "MIT Scratch 3.0"
                    ],
                    "project": "Personalized Ergonomic Desk Phone Stand for 3D Printing & Cost Analysis Sheet"
                }
            }
        },
        "4": {
            "stage": "Stage 4 • 7th - 8th Grade",
            "title": "Maker Movement, Physical Computing & Arduino World",
            "age": "Ages 12-14",
            "desc": "Bridging digital code with mechanical hardware. Solderless prototyping, environmental sensors, micro:bit wireless protocols, and Arduino robotics.",
            "grades": {
                "sinif7": {
                    "tabTitle": "7th Grade",
                    "badge": "Middle School • Ages 12-13 • 2 Hours/Week • micro:bit",
                    "title": "7th Grade: Physical Computing, Sensors & BBC micro:bit Ecosystem",
                    "age": "Ages 12 - 13",
                    "scope": "2 Hours/Week • Physical Computing, Sensor Architecture & Maker Culture",
                    "desc": "Bringing code to life. BBC micro:bit board, MakeCode visual blocks, onboard environmental sensors, and wireless mesh telemetry.",
                    "term1": [
                        {
                            "unit": "Unit 1: Introduction to Physical Computing & Circuits",
                            "topics": "Current, voltage, resistance, closed circuit rules, conductivity principles."
                        },
                        {
                            "unit": "Unit 2: BBC micro:bit Board & MakeCode Platform",
                            "topics": "5x5 LED matrix, A/B pushbuttons, I/O pin pinout (0, 1, 2, 3V, GND), firmware flashing."
                        },
                        {
                            "unit": "Unit 3: Integrated Environmental Sensor Telemetry",
                            "topics": "Temperature, ambient light sensing, 3-axis accelerometer gesture detection."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Radio Frequency Wireless Networking",
                            "topics": "Packet broadcasting between micro:bits, group channels, peer-to-peer data links."
                        },
                        {
                            "unit": "Unit 5: Actuators: Piezo Buzzer & Servo Motors",
                            "topics": "External pin interfacing, PWM servo angle positioning (0-180 deg), tone frequencies."
                        },
                        {
                            "unit": "Unit 6: Engineering Design Process & Prototyping",
                            "topics": "Problem formulation, hardware prototyping, field testing, iterative optimization."
                        }
                    ],
                    "outcomes": [
                        "Explaining electric circuit principles and physical computing architectures",
                        "Reading sensory data on micro:bit and visualizing live telemetry on LED matrix",
                        "Transmitting and parsing wireless data packets across multiple microcontrollers",
                        "Controlling robotic servo motors automatically based on sensor thresholds"
                    ],
                    "tools": [
                        "BBC micro:bit V2",
                        "Microsoft MakeCode",
                        "Tinkercad Circuits",
                        "Alligator Clips & Sensor Kit"
                    ],
                    "project": "Smart Greenhouse System: Automated Soil Moisture & Sunlight Irrigation Alarm"
                },
                "sinif8": {
                    "tabTitle": "8th Grade",
                    "badge": "Middle School • Ages 13-14 • 2 Hours/Week • Arduino",
                    "title": "8th Grade: Arduino UNO, Circuit Prototyping, Motors & Autonomous Robotics",
                    "age": "Ages 13 - 14",
                    "scope": "2 Hours/Week • Applied Robotics, Microcontrollers & Embedded Systems",
                    "desc": "Arduino UNO architecture, breadboard circuitry, analog sensor scaling, H-Bridge motor drivers, and obstacle-avoiding mobile robots.",
                    "term1": [
                        {
                            "unit": "Unit 1: Arduino Architecture & IDE Environment",
                            "topics": "ATmega328P microcontroller, Digital I/O, PWM channels, Analog pins, breadboard rails."
                        },
                        {
                            "unit": "Unit 2: Electronic Components & Ohm's Law",
                            "topics": "Resistor color bands, LED forward bias, pull-up/pull-down resistor circuits, debouncing."
                        },
                        {
                            "unit": "Unit 3: Analog Inputs & Sensory Interfaces",
                            "topics": "Potentiometers, LDR photocells, analogRead() resolution, and mathematical map() scaling."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 4: Ultrasonic Distance & Obstacle Detection",
                            "topics": "HC-SR04 sonar transducer principle, sonic velocity formula, millimetric measurements."
                        },
                        {
                            "unit": "Unit 5: Motor Drivers & Drive Mechanisms",
                            "topics": "L298N Dual H-Bridge module, DC motor directional polarity, PWM speed modulation."
                        },
                        {
                            "unit": "Unit 6: Autonomous Mobile Robot Integration",
                            "topics": "2WD chassis assembly, power regulation, sensor alignment, autonomous navigation logic."
                        }
                    ],
                    "outcomes": [
                        "Constructing clean, short-circuit-free circuits on solderless breadboards",
                        "Processing analog and digital sensor streams to actuate motors and buzzers",
                        "Calculating obstacle distances via ultrasonic sonar waveforms",
                        "Programming autonomous obstacle-avoidance logic for two-wheel-drive robots"
                    ],
                    "tools": [
                        "Arduino UNO R3",
                        "Arduino IDE / mBlock",
                        "Tinkercad Circuits",
                        "HC-SR04",
                        "L298N Motor Driver"
                    ],
                    "project": "Autonomous Obstacle-Avoiding Rover & Smart Ultrasonic Parking Sensor"
                }
            }
        },
        "5": {
            "stage": "Stage 5 • 9th - 10th Grade",
            "title": "Real-World Text-Based Programming: Python",
            "age": "Ages 14-16",
            "desc": "Professional software development with Python 3. Algorithm complexity, functional modularity, data structures, and foundational data science.",
            "grades": {
                "sinif9": {
                    "tabTitle": "9th Grade (Level 1)",
                    "badge": "High School • Ages 14-15 • 2 Hours/Week",
                    "title": "9th Grade: Computer Science Track 1: Algorithms & Python Fundamentals",
                    "age": "Ages 14 - 15",
                    "scope": "2 Hours/Week • Ministry Computer Science Track 1 Standards",
                    "desc": "Transitioning to professional text coding. Flowcharts, pseudocode, PEP 8 standards, and core Python data types and conditional branches.",
                    "term1": [
                        {
                            "unit": "Unit 1: Computer Science & Problem-Solving Strategies",
                            "topics": "Algorithm design, ISO flowchart symbols, structured pseudocode documentation."
                        },
                        {
                            "unit": "Unit 2: Introduction to Python Programming",
                            "topics": "Python interpreter, IDE configuration, PEP 8 code guidelines, print() and input() I/O."
                        },
                        {
                            "unit": "Unit 3: Variables, Data Types & Type Casting",
                            "topics": "int, float, str, bool; dynamic type casting via type(), int(), float(), str()."
                        },
                        {
                            "unit": "Unit 4: Arithmetic & Relational Operators",
                            "topics": "Operators (+, -, *, /, //, %, **); relational comparisons (==, !=, <, >, <=, >=)."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 5: Conditionals & Branching Structures",
                            "topics": "if, elif, else blocks; combining conditions with logical operators (and, or, not)."
                        },
                        {
                            "unit": "Unit 6: Nested Conditionals & Input Validation",
                            "topics": "Nested branching, validating and sanitizing user inputs from console."
                        },
                        {
                            "unit": "Unit 7: Algorithmic Graphics with Turtle Module",
                            "topics": "Turtle library, geometry coordinates, drawing fractals and repeating geometric patterns."
                        }
                    ],
                    "outcomes": [
                        "Modeling multi-branch computational problems with standard flowcharts and pseudocode",
                        "Writing clean Python code conforming to PEP 8 naming and formatting conventions",
                        "Implementing complex decision trees with if-elif-else statements and boolean logic",
                        "Developing dynamic console utility programs with input validation"
                    ],
                    "tools": [
                        "Python 3.12",
                        "VS Code / Thonny",
                        "Flowgorithm",
                        "Turtle Graphics"
                    ],
                    "project": "Interactive Student GPA & Academic Grade Calculation Console System"
                },
                "sinif10": {
                    "tabTitle": "10th Grade (Level 1 Advanced)",
                    "badge": "High School • Ages 15-16 • 2 Hours/Week",
                    "title": "10th Grade: Loops, Data Structures, Functions & File Management",
                    "age": "Ages 15 - 16",
                    "scope": "2 Hours/Week • Ministry Computer Science Track 1 Advanced Standards",
                    "desc": "Mastering iteration loops, Python collection structures (Lists, Tuples, Dictionaries), custom functions, and persistent file I/O operations.",
                    "term1": [
                        {
                            "unit": "Unit 1: Iteration Loops (For & While)",
                            "topics": "For and while loops, range() stepping, infinite loop safeguards."
                        },
                        {
                            "unit": "Unit 2: Loop Control Statements",
                            "topics": "break, continue, pass statements; nested loops and 2D matrix traversal."
                        },
                        {
                            "unit": "Unit 3: Python Collections: Lists",
                            "topics": "Zero-based indexing, slicing, methods (append, insert, pop, remove, sort)."
                        },
                        {
                            "unit": "Unit 4: Tuples & Sets",
                            "topics": "Immutable tuple records, set operations (union, intersection, symmetric difference)."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 5: Dictionaries & Key-Value Architecture",
                            "topics": "Key-value mapping, dict methods (keys, values, items, get), nested dictionaries."
                        },
                        {
                            "unit": "Unit 6: Functions & Modular Software Design",
                            "topics": "def keyword, positional/keyword arguments, default parameters, return outputs."
                        },
                        {
                            "unit": "Unit 7: Scope Resolution & Standard Modules",
                            "topics": "Local vs Global scope, importing and utilizing math, random, datetime modules."
                        },
                        {
                            "unit": "Unit 8: File I/O & Exception Handling",
                            "topics": "try-except defensive programming; opening modes ('r', 'w', 'a'), TXT and CSV persistence."
                        }
                    ],
                    "outcomes": [
                        "Iterating efficiently over structured collections with for and while loops",
                        "Modeling structured datasets using multi-dimensional lists and dictionaries",
                        "Building reusable modular functions with parameter validation and return values",
                        "Writing and parsing persistent data files (TXT and CSV) with exception handling"
                    ],
                    "tools": [
                        "Python 3.12",
                        "VS Code",
                        "Jupyter Notebook",
                        "PyCharm Community",
                        "GitHub Basics"
                    ],
                    "project": "Menu-Driven Persistent Library & Inventory Management Console Application"
                }
            }
        },
        "6": {
            "stage": "Stage 6 • 11th - 12th Grade",
            "title": "Future Technologies: AI, IoT & Cybersecurity",
            "age": "Ages 16-18",
            "desc": "University and tech industry preparation. Machine learning algorithms, full-stack web standards, SQL data pipelines, IoT hardware, and cybersecurity defense.",
            "grades": {
                "sinif11": {
                    "tabTitle": "11th Grade (Track 2 Web & SQL)",
                    "badge": "High School • Ages 16-17 • 2 Hours/Week",
                    "title": "11th Grade: Web Technologies (HTML5/CSS3/JS) & SQL Relational Databases",
                    "age": "Ages 16 - 17",
                    "scope": "2 Hours/Week • Ministry Computer Science Track 2 Standards",
                    "desc": "Modern web development architecture, responsive mobile layouts, object-oriented programming (OOP), and relational database modeling.",
                    "term1": [
                        {
                            "unit": "Unit 1: Web Architecture & Semantic HTML5",
                            "topics": "Client-Server model, HTTP/HTTPS protocols, semantic elements, forms, and web accessibility."
                        },
                        {
                            "unit": "Unit 2: Modern CSS3 & Responsive Design",
                            "topics": "Box model, Flexbox and CSS Grid layout engines, @media queries for mobile responsiveness."
                        },
                        {
                            "unit": "Unit 3: JavaScript Core & DOM Manipulation",
                            "topics": "Variables, event listeners (addEventListener), dynamically mutating DOM element styles."
                        },
                        {
                            "unit": "Unit 4: Object-Oriented Programming (OOP) Principles",
                            "topics": "Classes, objects, __init__ constructor, inheritance hierarchies, data encapsulation."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 5: Relational Database Architecture",
                            "topics": "Entity-Relationship modeling, primary keys, foreign keys, SQL data types."
                        },
                        {
                            "unit": "Unit 6: SQL Query Language Mastery",
                            "topics": "SELECT, WHERE, INSERT INTO, UPDATE, DELETE, ORDER BY, and aggregation commands."
                        },
                        {
                            "unit": "Unit 7: Python SQLite Database Integration",
                            "topics": "sqlite3 module, establishing connections, cursor execution, dynamic parameter queries."
                        },
                        {
                            "unit": "Unit 8: Web Security & REST API Basics",
                            "topics": "Form validation, SQL Injection awareness, querying JSON endpoints via Fetch API."
                        }
                    ],
                    "outcomes": [
                        "Authoring semantic, accessible, and responsive multi-page web layouts",
                        "Manipulating browser DOM dynamically with vanilla JavaScript event handlers",
                        "Designing object-oriented class hierarchies modeling real-world business entities",
                        "Executing full relational database CRUD operations using Python and SQLite"
                    ],
                    "tools": [
                        "VS Code",
                        "Chrome DevTools",
                        "DB Browser for SQLite",
                        "Git / GitHub",
                        "Figma"
                    ],
                    "project": "Personal Portfolio & Blog Web Application with SQLite Database Engine"
                },
                "sinif12": {
                    "tabTitle": "12th Grade (AI & Cybersecurity)",
                    "badge": "High School • Ages 17-18 • 2 Hours/Week",
                    "title": "12th Grade: Artificial Intelligence, IoT & Ethical Cybersecurity",
                    "age": "Ages 17 - 18",
                    "scope": "2 Hours/Week • Advanced Innovation, University & Career Readiness",
                    "desc": "Machine learning classifiers, ESP32 cloud telemetry, network packet sniffing, ethical cyber defense, and national competition project mentorship.",
                    "term1": [
                        {
                            "unit": "Unit 1: AI & Machine Learning Foundations",
                            "topics": "Supervised, unsupervised, and reinforcement paradigms; classification vs regression."
                        },
                        {
                            "unit": "Unit 2: Computer Vision & Real-Time Classification",
                            "topics": "OpenCV basics, Teachable Machine, image preprocessing, real-time webcam inference."
                        },
                        {
                            "unit": "Unit 3: Large Language Models (LLMs) & Prompt Engineering",
                            "topics": "Generative AI pipelines, prompt structure optimization, AI ethics and copyright."
                        },
                        {
                            "unit": "Unit 4: Internet of Things (IoT) & ESP32 Hardware",
                            "topics": "ESP32 Wi-Fi/Bluetooth stack, MQTT protocol, publishing telemetry to cloud brokers."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "Unit 5: Cybersecurity Fundamentals & Network Defense",
                            "topics": "CIA Triad (Confidentiality, Integrity, Availability), symmetric/asymmetric encryption, TLS/SSL."
                        },
                        {
                            "unit": "Unit 6: Threat Analysis & Defensive Tactics",
                            "topics": "Phishing detection, Man-in-the-Middle prevention, Wireshark packet capture analysis."
                        },
                        {
                            "unit": "Unit 7: Digital Footprints, GDPR & Tech Leadership",
                            "topics": "Deepfake forensics, personal data legislation, software engineering career trajectories."
                        },
                        {
                            "unit": "Unit 8: Senior Capstone Innovation Project",
                            "topics": "Agile sprint management, Git version control, technical reporting for competitions (TEKNOFEST)."
                        }
                    ],
                    "outcomes": [
                        "Training computer vision models and performing real-time inference via camera",
                        "Streaming live IoT sensor data to cloud telemetry dashboards using ESP32",
                        "Analyzing network packet traces and applying defensive cyber mitigation techniques",
                        "Documenting and presenting an end-to-end engineering capstone project for competitions"
                    ],
                    "tools": [
                        "Google Teachable Machine",
                        "ESP32 / Arduino Cloud",
                        "Wireshark",
                        "Python Scikit-Learn / OpenCV",
                        "Hugging Face"
                    ],
                    "project": "AI-Powered Smart Campus Safety & Environmental Energy Telemetry IoT System"
                }
            }
        }
    },
    "ar": {
        "1": {
            "stage": "المرحلة 1 • الروضة - الصف الثاني",
            "title": "التعرف على تكنولوجيا المعلومات والخطوات الأولى في العالم الرقمي",
            "age": "4 - 8 سنوات",
            "desc": "يوفر أول اتصال واعٍ للطلاب بالأدوات الرقمية بنهج إبداعي ومنتج بعيداً عن إدمان الشاشات، لتطوير المهارات الحركية والمعرفية.",
            "grades": {
                "anasinifi": {
                    "tabTitle": "الروضة (4-5 سنوات)",
                    "badge": "رياض الأطفال • 4-5 سنوات • 1-2 ساعة أسبوعياً",
                    "title": "الروضة: البرمجة غير المتصلة (Unplugged) والأسس المعرفية",
                    "age": "4 - 5 سنوات",
                    "scope": "1-2 ساعة أسبوعياً • التطور المعرفي والتنسيق الحركي",
                    "desc": "ترسيخ مفاهيم الاتجاهات والتسلسل وعلاقات السبب والنتيجة من خلال الأدوات الملموسة والأنشطة القائمة على اللعب دون شاشات.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: التعرف على عالم التقنية والصحة",
                            "topics": "أدوات تكنولوجيا المعلومات، قاعدة مسافة الشاشة، وضعية الجلوس الصحيحة وصحة الجسم."
                        },
                        {
                            "unit": "الوحدة 2: الاتجاهات وتحديد المواقع",
                            "topics": "مفاهيم الأمام والخلف واليمين واليسار، وتتبع التعليمات على شبكة المتاهة."
                        },
                        {
                            "unit": "الوحدة 3: المنطق المتسلسل وأنماط الأحداث",
                            "topics": "خوارزميات الحياة اليومية، ترتيب الأحداث بالبطاقات، وبناء رابط السبب والنتيجة."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: ألعاب البرمجة بدون شاشات",
                            "topics": "ألعاب البرمجة على سجادة الأرض، وتخطيط أقصر مسار للهدف ببطاقات الاتجاهات."
                        },
                        {
                            "unit": "الوحدة 5: الرسم الرقمي والأشكال الهندسية",
                            "topics": "الأشكال الأساسية وتناسق الألوان والتكوين الإبداعي باستخدام الفأرة واللمس."
                        },
                        {
                            "unit": "الوحدة 6: عادات الشاشة الآمنة",
                            "topics": "إدارة وقت الشاشة، استخدام الأجهزة بإذن مسبق، وقواعد النظافة الرقمية."
                        }
                    ],
                    "outcomes": [
                        "تنفيذ سلاسل التعليمات والأوامر المتسلسلة بدقة",
                        "التمييز بين مفاهيم الاتجاهات المكانية (يمين، يسار، أمام، خلف)",
                        "تبني وضعية جلوس صحية والالتزام بحدود وقت الشاشة",
                        "تخطيط أقصر مسار للوصول إلى الهدف باستخدام بطاقات الأوامر"
                    ],
                    "tools": [
                        "سجادة البرمجة غير المتصلة",
                        "محاكي Bee-Bot",
                        "Tux Paint",
                        "بطاقات الخوارزميات المرئية"
                    ],
                    "project": "مغامرة المتاهة الملونة: مسارات برمجية للوصول إلى الكنز مع Bee-Bot"
                },
                "sinif1": {
                    "tabTitle": "الصف الأول",
                    "badge": "ابتدائي • 6-7 سنوات • 1-2 ساعة أسبوعياً",
                    "title": "الصف الأول: محو الأمية الرقمية، إتقان الفأرة/لوحة المفاتيح والخوارزميات المرئية",
                    "age": "6 - 7 سنوات",
                    "scope": "1-2 ساعة أسبوعياً • المهارات الرقمية الأساسية والتطور الحركي",
                    "desc": "أول تفاعل رقمي واعٍ لطلابنا، ينمي المهارات الحركية للفأرة ولوحة المفاتيح مع غرس مبادئ التفكير الخوارزمي عبر الألغاز.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: التعرف على مكونات الحاسوب",
                            "topics": "الشاشة، صندوق الحاسوب، لوحة المفاتيح، الفأرة، السماعات وقواعد الاستخدام السليم."
                        },
                        {
                            "unit": "الوحدة 2: إتقان الفأرة والتنسيق الحركي",
                            "topics": "التأشير، النقر الفردي، النقر المزدوج، تقنيات السحب والإفلات وتنسيق اليد والعين."
                        },
                        {
                            "unit": "الوحدة 3: استكشاف مفاتيح لوحة المفاتيح",
                            "topics": "الحروف، الأرقام، مفتاح المسافة (Space)، الإدخال (Enter) ومفتاح الحذف."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: الخوارزميات المرئية مع Code.org",
                            "topics": "كتل الأوامر المتسلسلة، ألغاز الوصول إلى الهدف، والخطوات الأولى لاكتشاف الأخطاء."
                        },
                        {
                            "unit": "الوحدة 5: الرسم الرقمي والإبداع",
                            "topics": "التعبير عن الخيال باستخدام أدوات الفرشاة والأشكال والأختام في Tux Paint."
                        },
                        {
                            "unit": "الوحدة 6: اللباقة والسلامة الرقمية",
                            "topics": "العناية بالأجهزة، احترام أعمال الآخرين، والقواعد الأساسية للأمان الرقمي."
                        }
                    ],
                    "outcomes": [
                        "إتقان السحب والإفلات الدقيق والنقر المزدوج بالفأرة",
                        "كتابة الاسم والأرقام الأساسية باستخدام لوحة المفاتيح",
                        "ترتيب 3-5 كتل برمجية متسلسلة بتسلسل منطقي سليم",
                        "اكتشاف الأمر الخاطئ وتصحيحه (مهارة تصحيح الأخطاء الأولى)"
                    ],
                    "tools": [
                        "Code.org Course A",
                        "Tux Paint",
                        "GCompris",
                        "Mouse Skills Jr"
                    ],
                    "project": "معرض رسوماتي الرقمية وبطاقة قصة خوارزمية من 5 خطوات"
                },
                "sinif2": {
                    "tabTitle": "الصف الثاني",
                    "badge": "ابتدائي • 7-8 سنوات • ساعتان أسبوعياً",
                    "title": "الصف الثاني: المنطق المتسلسل، التكرار والحكايات التفاعلية مع ScratchJr",
                    "age": "7 - 8 سنوات",
                    "scope": "ساعتان أسبوعياً • التفكير الخوارزمي وأسس البرمجة بالكتل",
                    "desc": "استكشاف مفهوم التكرار (Loop) وإنشاء أول القصص التفاعلية في ScratchJr ليتحول الطلاب من مستهلكين إلى صانعي محتوى رقمي.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: حل المشكلات وتفكيك الخطوات",
                            "topics": "تحليل المشكلة، تقسيمها إلى أجزاء، وبناء خوارزمية حل خطوة بخطوة."
                        },
                        {
                            "unit": "الوحدة 2: منطق حلقات التكرار (Loop)",
                            "topics": "استكشاف الأفعال المتكررة وتجنب تكرار الكود باستخدام كتل التكرار."
                        },
                        {
                            "unit": "الوحدة 3: مهارات معالجة النصوص الأساسية",
                            "topics": "كتابة جمل قصيرة في معالج النصوص وضبط حجم ولون ومحاذاة الخط."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: تصميم الشخصيات والمشاهد في ScratchJr",
                            "topics": "اختيار الكائنات، رسم الخلفيات، كتل الحركة، وفقاعات الكلام."
                        },
                        {
                            "unit": "الوحدة 5: الأحداث (Events) والتواصل بين الشخصيات",
                            "topics": "بدء النقر على العلم الأخضر، لمس الشخصية، وإرسال الرسائل بين الكائنات."
                        },
                        {
                            "unit": "الوحدة 6: البصمة الرقمية والخصوصية",
                            "topics": "حماية المعلومات الشخصية (الاسم الكامل، العنوان، الهاتف) على الإنترنت."
                        }
                    ],
                    "outcomes": [
                        "تبسيط التعليمات البرمجية المتكررة باستخدام حلقات التكرار",
                        "برمجة حوار تفاعلي متسلسل بين شخصيتين على الأقل في ScratchJr",
                        "دمج محفزات الأحداث (اللمس، البداية) في مسار الحركة",
                        "تنسيق المستندات النصية البسيطة باستخدام أدوات الكتابة الرقمية"
                    ],
                    "tools": [
                        "ScratchJr",
                        "Code.org Course B",
                        "LightBot Jr",
                        "أساسيات مستندات Google"
                    ],
                    "project": "كتاب قصص متحرك وناطق بصوت الطالب عبر ScratchJr"
                }
            }
        },
        "2": {
            "stage": "المرحلة 2 • الصف الثالث - الرابع",
            "title": "البرمجة بالكتل وتصميم لعبتك الخاصة",
            "age": "8 - 10 سنوات",
            "desc": "إتقان التفكير المنطقي القائم على الكتل قبل الانتقال إلى البرمجة النصية، حيث يبني الأطفال قواعد ألعابهم الخاصة وميكانيكا تفاعلية.",
            "grades": {
                "sinif3": {
                    "tabTitle": "الصف الثالث",
                    "badge": "ابتدائي • 8-9 سنوات • ساعتان أسبوعياً",
                    "title": "الصف الثالث: مدخل إلى Scratch 3.0، الإحداثيات وهياكل اتخاذ القرار",
                    "age": "8 - 9 سنوات",
                    "scope": "ساعتان أسبوعياً • البرمجة بالكتل والتفكير الخوارزمي",
                    "desc": "استكشاف بيئة Scratch 3.0. حركة الشخصيات على المستوى الديكارتي X-Y، الأصوات، المؤثرات والشروط (إذا - فإن).",
                    "term1": [
                        {
                            "unit": "الوحدة 1: واجهة ومساحة عمل Scratch 3.0",
                            "topics": "المنصة، الكائنات، لوحات الكتل، ونظام الإحداثيات (X: -240..240, Y: -180..180)."
                        },
                        {
                            "unit": "الوحدة 2: كتل الحركة والدوران والأصوات",
                            "topics": "التحرك، التدوير بالدرجات، الذهاب للموقع، تشغيل الأصوات وضبط النغمات."
                        },
                        {
                            "unit": "الوحدة 3: التكرار وهياكل القرار (إذا - فإن)",
                            "topics": "التكرار المستمر، التكرار N مرة، ومنطق العبارات الشرطية."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: حركات المظاهر والمؤثرات البصرية",
                            "topics": "محاكاة دورة المشي، تبديل المظاهر، مؤثرات اللون والشفافية."
                        },
                        {
                            "unit": "الوحدة 5: كتل الاستشعار (Sensing) ومدخلات المستخدم",
                            "topics": "ملامسة مؤشر الفأرة، ملامسة اللون، طرح الأسئلة وتخزين الإجابة."
                        },
                        {
                            "unit": "الوحدة 6: الحقوق الرقمية والوعي بحقوق النشر",
                            "topics": "حقوق الملكية الفكرية، التحقق من مصادر المعلومات، واختيار كلمات مرور قوية."
                        }
                    ],
                    "outcomes": [
                        "برمجة حركة الكائنات بدقة استناداً إلى إحداثيات X و Y",
                        "دمج كتل الشروط مع كتل الاستشعار للتفاعل في الوقت الفعلي",
                        "إنشاء رسوم متحركة سلسة للمشي عبر تبديل المظاهر",
                        "التعرف على المواد المحمية بحقوق النشر وتطبيق قواعد الاستشهاد السليمة"
                    ],
                    "tools": [
                        "MIT Scratch 3.0",
                        "Code.org Course C-D",
                        "Google Be Internet Awesome",
                        "Pixel Art Studio"
                    ],
                    "project": "عالم حوض الأسماك: محاكاة تفاعلية للأسماك تبحث عن الطعام"
                },
                "sinif4": {
                    "tabTitle": "الصف الرابع",
                    "badge": "ابتدائي • 9-10 سنوات • ساعتان أسبوعياً",
                    "title": "الصف الرابع: تصميم ألعاب ثنائية الأبعاد، المتغيرات والمواطنة الرقمية",
                    "age": "9 - 10 سنوات",
                    "scope": "ساعتان أسبوعياً • البرمجة المتقدمة بالكتل وديناميكيات الألعاب",
                    "desc": "بناء ألعاب كاملة ثنائية الأبعاد: لوحات النتائج، عدادات الأرواح، المؤقتات الزمنية، وتبادل الرسائل والبث بين الكائنات.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: المتغيرات والعدادات في Scratch",
                            "topics": "إنشاء وزيادة وتصفير النقاط وعدادات الأرواح والمؤقتات التنازلية."
                        },
                        {
                            "unit": "الوحدة 2: بث الرسائل (Broadcast)",
                            "topics": "التواصل بين الكائنات، الانتقال بين المراحل، وشاشات نهاية اللعبة."
                        },
                        {
                            "unit": "الوحدة 3: المعاملات الرياضية والمنطقية",
                            "topics": "توليد الأرقام العشوائية، المقارنات (أكبر/أصغر)، وبوابات المنطق (و / أو)."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: بناء لعبة منصات ثنائية الأبعاد",
                            "topics": "متاهة كلاسيكية، جمع العناصر، محاكاة الجاذبية وميكانيكا القفز."
                        },
                        {
                            "unit": "الوحدة 5: ملحقات Scratch (القلم وتحويل النص لصوت)",
                            "topics": "الرسم الهندسي بملحق القلم؛ والنطق الآلي للنصوص بعدة لغات."
                        },
                        {
                            "unit": "الوحدة 6: التنمر الإلكتروني والسمعة الرقمية",
                            "topics": "آداب التواصل عبر الإنترنت (Netiquette)، الإبلاغ عن الإساءة وحماية السمعة الرقمية."
                        }
                    ],
                    "outcomes": [
                        "إدارة قواعد الفوز والخسارة في الألعاب باستخدام متغيرات النقاط والأرواح",
                        "ربط حالات اللعبة (البدء، المستوى التالي، النهاية) عبر رسائل البث",
                        "برمجة خوارزميات التصادم الدقيقة مع الجدران والعوائق",
                        "معرفة خطوات الحماية والإبلاغ الصحيحة في مواجهة التنمر الإلكتروني"
                    ],
                    "tools": [
                        "MIT Scratch 3.0",
                        "Canva for Education",
                        "Code.org Express",
                        "Pixel Art Studio"
                    ],
                    "project": "حماية البيئة: لعبة منصات متعددة المراحل بنقاط بموضوع صفر نفايات"
                }
            }
        },
        "3": {
            "stage": "المرحلة 3 • الصف الخامس - السادس",
            "title": "التصميم ثلاثي الأبعاد والنمذجة وهندسة الأجهزة",
            "age": "10 - 12 سنة",
            "desc": "الانتقال من التفكير المجرد إلى الإنتاج الملموس. تشريح الأجهزة، تحليل البيانات، نمذجة Tinkercad ثلاثية الأبعاد والطباعة ثلاثية الأبعاد.",
            "grades": {
                "sinif5": {
                    "tabTitle": "الصف الخامس (المنهج الوطني)",
                    "badge": "متوسط • 10-11 سنة • ساعتان أسبوعياً",
                    "title": "الصف الخامس: منهج تكنولوجيا المعلومات والبرمجيات المعتمد",
                    "age": "10 - 11 سنة",
                    "scope": "ساعتان أسبوعياً • معايير منهج تكنولوجيا المعلومات للصف الخامس",
                    "desc": "الثقافة الرقمية، تشريح المكونات المادية والبرمجية، إدارة الملفات، الأمان السيبراني، التواصل الأخلاقي وحل المشكلات خوارزمياً.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: مقدمة في أنظمة تكنولوجيا المعلومات",
                            "topics": "الفرق بين العتاد والبرمجيات، وحدات الإدخال والإخراج، وسائط التخزين الداخلية والخارجية."
                        },
                        {
                            "unit": "الوحدة 2: أنظمة التشغيل وإدارة الملفات",
                            "topics": "أنواع أنظمة التشغيل، التسلسل الهرمي للمجلدات، الامتدادات، الضغط والتخزين السحابي."
                        },
                        {
                            "unit": "الوحدة 3: أخلاقيات التقنية والأمن والمواطنة الرقمية",
                            "topics": "أنواع البرمجيات الخبيثة، برامج مكافحة الفيروسات، التشفير القوي والبصمة الرقمية."
                        },
                        {
                            "unit": "الوحدة 4: التواصل والبحث الرقمي والتعاون",
                            "topics": "عوامل تصفية محركات البحث، آداب البريد الإلكتروني، والتحقق من مصادر المعلومات."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 5: برامج معالجة النصوص والعروض التقديمية",
                            "topics": "تنسيق النصوص، الجداول المنظمة، إدراج الوسائط، وتقنيات العرض التقديمي الفعال."
                        },
                        {
                            "unit": "الوحدة 6: مفاهيم حل المشكلات والخوارزميات",
                            "topics": "تفكيك مشكلات الحياة اليومية إلى خطوات خوارزمية ونقاط اتخاذ القرار."
                        },
                        {
                            "unit": "الوحدة 7: أسس البرمجة القائمة على الكتل",
                            "topics": "حل المشكلات بالكتل، إدارة الكائنات، الحلقات الأساسية والعبارات الشرطية."
                        }
                    ],
                    "outcomes": [
                        "تصنيف مكونات الحاسوب العتادية وبيان وظائف أنظمة التشغيل",
                        "تنظيم الملفات الرقمية بفعالية واتباع سبل الحماية من الفيروسات",
                        "إعداد أبحاث وعروض رقمية تراعي حقوق النشر الفكرية بدقة",
                        "صياغة خوارزميات نصية ورسومية لحل المشكلات الحياتية المعقدة"
                    ],
                    "tools": [
                        "بوابة EBA التعليمية",
                        "LibreOffice / مستندات Google",
                        "MIT Scratch 3.0",
                        "حقيبة فك وتركيب الأجهزة"
                    ],
                    "project": "دليل الأمان الرقمي للحرم المدرسي: عرض تقديمي تفاعلي ومسابقة معلوماتية"
                },
                "sinif6": {
                    "tabTitle": "الصف السادس (المنهج الوطني)",
                    "badge": "متوسط • 11-12 سنة • ساعتان أسبوعياً",
                    "title": "الصف السادس: الشبكات، جداول البيانات وتصميم Tinkercad ثلاثي الأبعاد",
                    "age": "11 - 12 سنة",
                    "scope": "ساعتان أسبوعياً • معايير منهج تكنولوجيا المعلومات للصف السادس",
                    "desc": "بنية الشبكات، حقوق الملكية الرقمية، تحليل البيانات بالجداول الإلكترونية، والنمذجة ثلاثية الأبعاد للطباعة.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: شبكات الحاسوب وبنية الإنترنت",
                            "topics": "أنواع الشبكات (LAN, MAN, WAN)، نموذج العميل والخادم، المودم والموجهات وعناوين IP."
                        },
                        {
                            "unit": "الوحدة 2: الجرائم المعلوماتية وحقوق الملكية والتراخيص",
                            "topics": "قوانين الجرائم الإلكترونية، البرمجيات مفتوحة المصدر، رخص Creative Commons وحماية البيانات."
                        },
                        {
                            "unit": "الوحدة 3: تحليل البيانات عبر جداول البيانات",
                            "topics": "الخلايا، الصيغ الحسابية (SUM, AVERAGE, IF)، الفرز الإحصائي والرسم البياني."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: النمذجة ثلاثية الأبعاد باستخدام Tinkercad",
                            "topics": "مستوى العمل، محاور X-Y-Z، دمج الأشكال الصلبة والمجوفة، والمحاذاة المليمترية."
                        },
                        {
                            "unit": "الوحدة 5: التصنيع التراكمي وتقنيات الطباعة ثلاثية الأبعاد",
                            "topics": "آلية طابعات FDM، خيوط الطباعة (PLA/ABS)، برامج التقطيع (Slicers) وسماكة الطبقات."
                        },
                        {
                            "unit": "الوحدة 6: خوارزميات متقدمة والبرمجة المعيارية",
                            "topics": "كتل الدوال البرمجية الخاصة ('اصنع كتلة')، المعاملات، والشروط المنطقية المركبة."
                        }
                    ],
                    "outcomes": [
                        "إجراء العمليات الحسابية والرسوم البيانية بواسطة دوال الجداول الإلكترونية",
                        "تصميم نماذج هندسية ثلاثية الأبعاد بالتقنيات الإضافية والمجوفة بدقة",
                        "شرح خطوات ومعايير الطباعة ثلاثية الأبعاد وضبط برامج التقطيع",
                        "بناء دوال مخصصة برمجياً للقضاء على تكرار الأكواد في المشاريع"
                    ],
                    "tools": [
                        "Autodesk Tinkercad",
                        "UltiMaker Cura (Slicer)",
                        "جداول بيانات Google / Excel",
                        "MIT Scratch 3.0"
                    ],
                    "project": "حامل هاتف مكتبي مريح مخصص للطباعة ثلاثية الأبعاد مع جدول حساب التكلفة"
                }
            }
        },
        "4": {
            "stage": "المرحلة 4 • الصف السابع - الثامن",
            "title": "حركة الصانعين، البرمجة المادية وعالم أردوينو",
            "age": "12 - 14 سنة",
            "desc": "الربط بين الأكواد البرمجية والمكونات الميكانيكية. النماذج الأولية بدون لحام، المستشعرات البيئية، وبرمجة أردوينو والروبوتات.",
            "grades": {
                "sinif7": {
                    "tabTitle": "الصف السابع",
                    "badge": "متوسط • 12-13 سنة • ساعتان أسبوعياً • micro:bit",
                    "title": "الصف السابع: البرمجة المادية، المستشعرات وعالم BBC micro:bit",
                    "age": "12 - 13 سنة",
                    "scope": "ساعتان أسبوعياً • الحوسبة المادية، بنية المستشعرات وثقافة الصانعين",
                    "desc": "نقل البرمجة إلى الواقع الملموس. لوحة BBC micro:bit، منصة MakeCode، المستشعرات المدمجة والاتصال اللاسلكي بالراديو.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: مدخل إلى الحوسبة المادية والدوائر",
                            "topics": "مفاهيم التيار والجهد والمقاومة، قواعد الدائرة المغلقة ومبادئ التوصيل."
                        },
                        {
                            "unit": "الوحدة 2: لوحة BBC micro:bit ومنصة MakeCode",
                            "topics": "مصفوفة LED 5x5، الأزرار A/B، بنية المنافذ (0, 1, 2, 3V, GND)، ورفع الكود الأول."
                        },
                        {
                            "unit": "الوحدة 3: قراءة البيانات من المستشعرات المدمجة",
                            "topics": "مستشعرات درجة الحرارة، مستوى الإضاءة ومقياس التسارع لرصد الحركة والميلان."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: الاتصال اللاسلكي بترددات الراديو",
                            "topics": "إرسال واستقبال حزم البيانات بين اللوحات وتأسيس شبكة أجهزة متزامنة."
                        },
                        {
                            "unit": "الوحدة 5: المشغلات الخارجية: الجرس ومحرك السيرفو",
                            "topics": "توصيل المنافذ الخارجية، التحكم بزاوية محرك السيرفو (0-180 درجة) وتشغيل النغمات."
                        },
                        {
                            "unit": "الوحدة 6: دورة التصميم الهندسي والنماذج الأولية",
                            "topics": "تحديد المشكلة، تصميم النظام، بناء النموذج واختباره وتطويره."
                        }
                    ],
                    "outcomes": [
                        "توضيح مبادئ الدوائر الكهربائية وبنية الحوسبة المادية",
                        "قراءة بيانات المستشعرات وعرض القياسات المباشرة على شاشة micro:bit",
                        "نقل واستقبال حزم البيانات لاسلكياً بين عدة لوحات تحكم",
                        "التحكم التلقائي بزوايا دوران محركات السيرفو حسب شروط المستشعرات"
                    ],
                    "tools": [
                        "BBC micro:bit V2",
                        "Microsoft MakeCode",
                        "Tinkercad Circuits",
                        "أسلاك تمساح وحقيبة مستشعرات"
                    ],
                    "project": "مشروع الدفيئة الذكية: إنذار ري تلقائي يقيس رطوبة التربة وشدة الضوء"
                },
                "sinif8": {
                    "tabTitle": "الصف الثامن",
                    "badge": "متوسط • 13-14 سنة • ساعتان أسبوعياً • Arduino",
                    "title": "الصف الثامن: Arduino UNO، تصميم الدوائر، مشغلات المحركات والروبوتات المستقلة",
                    "age": "13 - 14 سنة",
                    "scope": "ساعتان أسبوعياً • الروبوتات التطبيقية، المتحكمات الدقيقة والأنظمة المدمجة",
                    "desc": "لوحة تطوير Arduino UNO، دوائر لوحة التجارب (Breadboard)، معالجة بيانات المستشعرات، ومتحكمات محركات DC للروبوتات المتنقلة.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: عتاد Arduino وبيئة التطوير البرمجية",
                            "topics": "متحكم ATmega328P، المنافذ الرقمية و PWM والمنافذ التناظرية وخطوط لوحة التجارب."
                        },
                        {
                            "unit": "الوحدة 2: المكونات الإلكترونية وقانون أوم",
                            "topics": "حساب قيم المقاومات، قطبية LED، مقاومات الرفع والخفض وقراءة المفاتيح."
                        },
                        {
                            "unit": "الوحدة 3: المدخلات التناظرية ومستشعرات البيئة",
                            "topics": "مقياس الجهد، مستشعر الضوء LDR، دالة analogRead() ومعادلات دالة map()."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 4: قياس المسافات ورصد العوائق",
                            "topics": "مستشعر الموجات فوق الصوتية HC-SR04، معادلة سرعة الصوت وحساب المسافة بدقة مليمترية."
                        },
                        {
                            "unit": "الوحدة 5: مشغلات المحركات وأنظمة الحركة",
                            "topics": "مشغل L298N المزدوج، قطبية محركات DC والتحكم بالسرعة بتقنية PWM."
                        },
                        {
                            "unit": "الوحدة 6: تكامل الروبوتات المتنقلة المستقلة",
                            "topics": "تركيب هيكل الروبوت ثنائي العجلات، إدارة الطاقة، وخوارزميات تجنب العوائق."
                        }
                    ],
                    "outcomes": [
                        "بناء دوائر إلكترونية آمنة وخالية من القصر الكهربائي على لوحة التجارب",
                        "معالجة إشارات المستشعرات لتشغيل المحركات والمؤشرات الصوتية والضوئية",
                        "حساب المسافات بدقة عبر ارتداد موجات السونار فوق الصوتية",
                        "برمجة منطق الحركة الذاتية وتفادي العوائق لروبوت ثنائي العجلات"
                    ],
                    "tools": [
                        "Arduino UNO R3",
                        "Arduino IDE / mBlock",
                        "Tinkercad Circuits",
                        "HC-SR04",
                        "مشغل المحركات L298N"
                    ],
                    "project": "روبوت جوال ذاتي القيادة يتجنب العوائق ونظام حساسات ركن ذكي"
                }
            }
        },
        "5": {
            "stage": "المرحلة 5 • الصف التاسع - العاشر",
            "title": "البرمجة النصية في العالم الحقيقي: بايثون",
            "age": "14 - 16 سنة",
            "desc": "تطوير البرمجيات الاحترافية مع بايثون 3. تعقيد الخوارزميات، الوحدات البرمجية، هياكل البيانات، ومقدمة في علم البيانات.",
            "grades": {
                "sinif9": {
                    "tabTitle": "الصف التاسع (المسار 1)",
                    "badge": "ثانوي • 14-15 سنة • ساعتان أسبوعياً",
                    "title": "الصف التاسع: علوم الحاسوب 1: حل المشكلات، الخوارزميات وأسس بايثون",
                    "age": "14 - 15 سنة",
                    "scope": "ساعتان أسبوعياً • معايير منهاج علوم الحاسوب للمرحلة الثانوية - المستوى 1",
                    "desc": "الانتقال الاحترافي للبرمجة النصية. المخططات الانسيابية، الكود الزائف، معايير PEP 8، والمتغيرات والشروط في لغة بايثون 3.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: علوم الحاسوب واستراتيجيات حل المشكلات",
                            "topics": "تصميم الخوارزميات، الرموز القياسية للمخططات الانسيابية، وكتابة الكود الزائف (Pseudocode)."
                        },
                        {
                            "unit": "الوحدة 2: مقدمة إلى لغة البرمجة بايثون",
                            "topics": "مفسر بايثون، بيئات التطوير، معايير PEP 8، ودوال print() و input()."
                        },
                        {
                            "unit": "الوحدة 3: المتغيرات، أنواع البيانات والتحويل",
                            "topics": "أنواع int و float و str و bool؛ والتحويل الديناميكي عبر type() و int() و str()."
                        },
                        {
                            "unit": "الوحدة 4: المعاملات الحسابية والمقارنات",
                            "topics": "المعاملات (+، -، *، /، //، %، **) ومعاملات المقارنة (==، !=، <، >، <=، >=)."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 5: الجمل الشرطية وبنية اتخاذ القرار",
                            "topics": "كتل if و elif و else؛ والربط بالمعاملات المنطقية (and, or, not) للقرارات المركبة."
                        },
                        {
                            "unit": "الوحدة 6: الشروط المتداخلة والتحقق من المدخلات",
                            "topics": "الشروط المتداخلة (Nested if)، تصفية مدخلات المستخدم ومنع المدخلات الخاطئة."
                        },
                        {
                            "unit": "الوحدة 7: النمذجة الرسومية البرمجية مع مكتبة Turtle",
                            "topics": "مكتبة الرسوميات Turtle، رياضيات الزوايا والمسافات، ورسم الأنماط الهندسية."
                        }
                    ],
                    "outcomes": [
                        "نمذجة المسائل البرمجية المتشعبة بالمخططات الانسيابية المعتمدة والكود الزائف",
                        "كتابة أكواد بايثون نظيفة تتوافق بدقة مع معايير PEP 8 الدولية",
                        "بناء أشجار اتخاذ القرار المعقدة عبر كتل if-elif-else والمنطق البولياني",
                        "تطوير برامج وحدة تحكم تفاعلية مع تدقيق صحة مدخلات المستخدمين"
                    ],
                    "tools": [
                        "Python 3.12",
                        "VS Code / Thonny",
                        "Flowgorithm",
                        "Turtle Graphics"
                    ],
                    "project": "نظام وحدة تحكم تفاعلي لحساب معدل درجات الطلاب والتقديرات الأكاديمية"
                },
                "sinif10": {
                    "tabTitle": "الصف العاشر (المسار 1 المتقدم)",
                    "badge": "ثانوي • 15-16 سنة • ساعتان أسبوعياً",
                    "title": "الصف العاشر: التكرار، هياكل البيانات، الدوال وإدارة الملفات",
                    "age": "15 - 16 سنة",
                    "scope": "ساعتان أسبوعياً • معايير منهاج علوم الحاسوب - المستوى 1 المتقدم",
                    "desc": "إتقان حلقات التكرار، هياكل المجموعات (القوائم، المجموعات، القواميس)، تصميم الدوال المعيارية وعمليات القراءة والكتابة في الملفات.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: حلقات التكرار (For & While)",
                            "topics": "ميكانيكا حلقات for و while، خطوات range()، وتدابير منع الحلقات اللانهائية."
                        },
                        {
                            "unit": "الوحدة 2: عبارات التحكم في التكرار",
                            "topics": "كلمات break و continue و pass؛ الحلقات المتداخلة والتعامل مع المصفوفات."
                        },
                        {
                            "unit": "الوحدة 3: مجموعات بايثون: القوائم (Lists)",
                            "topics": "الفهرسة، تقطيع القوائم (Slicing)، والدوال (append, insert, pop, remove, sort)."
                        },
                        {
                            "unit": "الوحدة 4: الصفوف (Tuples) والمجموعات (Sets)",
                            "topics": "السجلات غير القابلة للتعديل، وعمليات المجموعات (التقاطع، الاتحاد، الفرق)."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 5: القواميس وبنية المفتاح والقيمة",
                            "topics": "علاقة المفتاح والقيمة، دوال القواميس (keys, values, items, get)، والقواميس المتداخلة."
                        },
                        {
                            "unit": "الوحدة 6: الدوال والتصميم البرمجي المعياري",
                            "topics": "التعريف بكلمة def، المعاملات، القيم الافتراضية، وقيم الإرجاع (return)."
                        },
                        {
                            "unit": "الوحدة 7: نطاق المتغيرات والوحدات الجاهزة",
                            "topics": "النطاق المحلي مقابل العام، واستيراد وحدات math و random و datetime."
                        },
                        {
                            "unit": "الوحدة 8: إدارة الملفات ومعالجة الأخطاء (I/O)",
                            "topics": "كتل try-except لحماية الكود؛ أوضاع فتح الملفات ('r', 'w', 'a') وحفظ ملفات TXT و CSV."
                        }
                    ],
                    "outcomes": [
                        "التنقل الفعال عبر المجموعات وهياكل البيانات باستخدام حلقات for و while",
                        "نمذجة مجموعات البيانات الهيكلية المعقدة بالقوائم والقواميس متعددة الأبعاد",
                        "بناء دوال معيارية قابلة لإعادة الاستخدام مع التحقق من المعاملات",
                        "حفظ وقراءة البيانات الدائمة في ملفات TXT و CSV مع معالجة الاستثناءات"
                    ],
                    "tools": [
                        "Python 3.12",
                        "VS Code",
                        "Jupyter Notebook",
                        "PyCharm Community",
                        "أساسيات GitHub"
                    ],
                    "project": "تطبيق وحدة تحكم لإدارة وأرشفة سجلات المكتبة والمخزون مع حفظ الملفات"
                }
            }
        },
        "6": {
            "stage": "المرحلة 6 • الصف الحادي عشر - الثاني عشر",
            "title": "تقنيات المستقبل: الذكاء الاصطناعي وإنترنت الأشياء والأمن السيبراني",
            "age": "16 - 18 سنة",
            "desc": "الرؤية الجامعية والمهنية. خوارزميات تعلم الآلة، هندسة الويب الحديثة، قواعد بيانات SQL، أجهزة إنترنت الأشياء، والدفاع السيبراني الأخلاقي.",
            "grades": {
                "sinif11": {
                    "tabTitle": "الصف الحادي عشر (المسار 2 ويب و SQL)",
                    "badge": "ثانوي • 16-17 سنة • ساعتان أسبوعياً",
                    "title": "الصف الحادي عشر: تقنيات الويب (HTML5/CSS3/JS) وقواعد بيانات SQL",
                    "age": "16 - 17 سنة",
                    "scope": "ساعتان أسبوعياً • معايير منهاج علوم الحاسوب للمرحلة الثانوية - المسار 2",
                    "desc": "بنية تطوير الويب الحديثة، التصميم المتجاوب للهواتف، البرمجة كائنية التوجه (OOP)، وتكامل قواعد البيانات العلائقية (SQL).",
                    "term1": [
                        {
                            "unit": "الوحدة 1: بنية الويب ومعايير HTML5 الدلالية",
                            "topics": "نموذج العميل والخادم، بروتوكولات HTTP/HTTPS، وسوم HTML الدلالية، النماذج وإمكانية الوصول."
                        },
                        {
                            "unit": "الوحدة 2: CSS3 الحديث والتصميم المتجاوب",
                            "topics": "نموذج الصندوق، أنظمة Flexbox و Grid، واستعلامات الوسائط (@media) للتوافق مع الهواتف."
                        },
                        {
                            "unit": "الوحدة 3: أساسيات جافاسكريبت والتحكم في DOM",
                            "topics": "المتغيرات، الدوال، مستمعي الأحداث addEventListener، وتعديل عناصر DOM ديناميكياً."
                        },
                        {
                            "unit": "الوحدة 4: مبادئ البرمجة كائنية التوجه (OOP)",
                            "topics": "الفئات (Class)، الكائنات (Object)، دوال البناء __init__، الوراثة وتغليف البيانات."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 5: هندسة قواعد البيانات العلائقية",
                            "topics": "تصميم الجداول، المفتاح الأساسي (Primary Key)، المفتاح الأجنبي (Foreign Key) وأنواع البيانات."
                        },
                        {
                            "unit": "الوحدة 6: إتقان لغة استعلامات SQL",
                            "topics": "أوامر SELECT و WHERE و INSERT INTO و UPDATE و DELETE و ORDER BY."
                        },
                        {
                            "unit": "الوحدة 7: تكامل قاعدة بيانات SQLite مع بايثون",
                            "topics": "مكتبة sqlite3، إنشاء الاتصال، إدارة المؤشر (cursor)، والاستعلامات الديناميكية."
                        },
                        {
                            "unit": "الوحدة 8: أمان الويب والتكامل مع واجهات API",
                            "topics": "التحقق من النماذج، الوعي بهجمات حقن SQL، وجلب بيانات JSON عبر Fetch API."
                        }
                    ],
                    "outcomes": [
                        "تكويد صفحات ويب دلالية متعددة ومتوافقة بالكامل مع مختلف شاشات الهواتف",
                        "التحكم الديناميكي في عناصر متصفح DOM بأحداث جافاسكريبت المباشرة",
                        "تصميم هياكل فئات برمجية كائنية تمثل كيانات واقعية من الحياة اليومية",
                        "تنفيذ جميع عمليات CRUD لقواعد البيانات العلائقية باستخدام بايثون و SQLite"
                    ],
                    "tools": [
                        "VS Code",
                        "Chrome DevTools",
                        "DB Browser for SQLite",
                        "Git / GitHub",
                        "Figma"
                    ],
                    "project": "موقع ويب شخصي ومدونة متجاوبة مدعومة بمحرك قاعدة بيانات SQLite"
                },
                "sinif12": {
                    "tabTitle": "الصف الثاني عشر (ذكاء اصطناعي وأمن سيبراني)",
                    "badge": "ثانوي • 17-18 سنة • ساعتان أسبوعياً",
                    "title": "الصف الثاني عشر: الذكاء الاصطناعي، إنترنت الأشياء والأمن السيبراني الأخلاقي",
                    "age": "17 - 18 سنة",
                    "scope": "ساعتان أسبوعياً • الابتكار المتقدم، الاستعداد الجامعي والمسار الوظيفي",
                    "desc": "نماذج تعلم الآلة، نقل البيانات السحابي مع ESP32، تحليل حزم الشبكة، الدفاع السيبراني الأخلاقي، وتوجيه المشاريع للمسابقات الكبرى.",
                    "term1": [
                        {
                            "unit": "الوحدة 1: أسس الذكاء الاصطناعي (AI) وتعلم الآلة (ML)",
                            "topics": "التعلم الخاضع للإشراف، غير الخاضع للإشراف، والتعزيزي؛ التصنيف ونماذج الانحدار."
                        },
                        {
                            "unit": "الوحدة 2: الرؤية الحاسوبية ومعالجة الصور المباشرة",
                            "topics": "مكتبة OpenCV، أداة Teachable Machine، وتصنيف الأجسام عبر الكاميرا في الوقت الفعلي."
                        },
                        {
                            "unit": "الوحدة 3: النماذج اللغوية الكبيرة (LLMs) وهندسة التلقين",
                            "topics": "أدوات الذكاء الاصطناعي التوليدي، تحسين المطالبات، أخلاقيات التقنية وحقوق التأليف."
                        },
                        {
                            "unit": "الوحدة 4: إنترنت الأشياء (IoT) وعمارة ESP32",
                            "topics": "اتصال Wi-Fi/BLE في ESP32، بروتوكول MQTT، ونقل قياسات المستشعرات إلى السحابة."
                        }
                    ],
                    "term2": [
                        {
                            "unit": "الوحدة 5: أسس الأمن السيبراني والدفاع عن الشبكات",
                            "topics": "مثلث CIA (السرية، السلامة، التوفر)، خوارزميات التشفير (AES, RSA)، وبروتوكول TLS/SSL."
                        },
                        {
                            "unit": "الوحدة 6: تحليل التهديدات والدفاع الأخلاقي",
                            "topics": "كشف التصيد الاحتيالي، هجمات الوسيط، فحص حزم البيانات عبر Wireshark وسياسات الأمان."
                        },
                        {
                            "unit": "الوحدة 7: البصمة الرقمية والريادة التكنولوجية",
                            "topics": "كشف التزييف العميق (Deepfake)، قوانين حماية البيانات ومسارات الهندسة البرمجية."
                        },
                        {
                            "unit": "الوحدة 8: مشروع التخرج والابتكار السنوي",
                            "topics": "إدارة المشاريع الرشيقة (Agile)، توثيق GitHub، والتقارير الفنية لمسابقات الابتكار (TEKNOFEST)."
                        }
                    ],
                    "outcomes": [
                        "تدريب نماذج الرؤية الحاسوبية وتصنيف الأشياء في الوقت الفعلي عبر الكاميرا",
                        "بث القياسات الحية للمستشعرات إلى لوحات المراقبة السحابية باستخدام ESP32",
                        "تحليل حزم بيانات الشبكة وتطبيق آليات الدفاع والحماية ضد الهجمات الرقمية",
                        "توثيق وعرض مشروع هندسي شامل ومتكامل للمسابقات الوطنية والدولية"
                    ],
                    "tools": [
                        "Google Teachable Machine",
                        "ESP32 / Arduino Cloud",
                        "Wireshark",
                        "Python Scikit-Learn / OpenCV",
                        "Hugging Face"
                    ],
                    "project": "نظام ذكي متكامل للمراقبة البيئية وأمان الحرم المدرسي مدعوم بالذكاء الاصطناعي و IoT"
                }
            }
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
