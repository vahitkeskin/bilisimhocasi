# 🎓 Uğur Okulları Viranşehir Kampüsü | Bilişim Teknolojileri Müfredatı

![Uğur Okulları Banner](https://img.shields.io/badge/Uğur%20Okulları-Viranşehir%20Kampüsü-8F489C?style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

Modern eğitim yaklaşımları ve yeni nesil teknolojiler ışığında, **Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri** bölümü için geliştirilmiş; profesyonel, ultra-duyarlı (responsive) ve etkileşimli K-12 akademik müfredat portalıdır.

## 🌟 Proje Özeti (Proje Vizyonu)

Bu web tabanlı portal, ana sınıfından (4-5 yaş) 12. sınıfa kadar tüm eğitim kademelerinin bilişim serüvenini sunar. **Glassmorphism** (cam efekti), **premium karanlık/aydınlık tema** geçişleri ve **Apple arayüz** standartlarında derinlik, gölge ve bulanıklık hissiyatı ile tasarlanmıştır.

Kullanıcıyı sadece bir eğitim içeriğine değil; algoritmik düşünme, Scratch ile blok kodlama, Tinkercad ile 3D tasarım, Arduino, Python ve Siber Güvenlik/Yapay Zeka odaklı dijital geleceğe adım atacağı bir teknoloji serüvenine davet eder.

---

## 🚀 Öne Çıkan Özellikler

- **🎨 Dinamik Tema Motoru (Light / Dark / System):** 
  Sistem tercihine entegre olabilen, kullanıcı seçimine göre tarayıcı önbelleğinde saklanan (localStorage) mükemmel kalibre edilmiş Gece/Gündüz modu. Her kart, ikon, input ve metin temaya duyarlıdır.
- **🌍 Çoklu Dil Desteği (i18n):**
  Türkçe (TR), İngilizce (EN) ve Arapça (AR - RTL Desteği ile) olmak üzere dinamik dil seçimi.
- **📱 Kesin (Pixel-Perfect) Responsive Tasarım:**
  Bootstrap GRID altyapısı üzerine eklenen özel medya sorguları (Media Queries) ile **360px** eski model akıllı telefonlardan **4K / 8K Akıllı Televizyonlara** kadar her ekranda ideal okunabilirlik.
- **📚 Kapsamlı Müfredat Modülleri:**
  - Ana Sınıfı - 2. Sınıf: Bilişimle Tanışma
  - 3. Sınıf - 4. Sınıf: Bloklarla Kodlama
  - 5. Sınıf - 6. Sınıf: 3D Tasarım ve Donanım
  - 7. Sınıf - 8. Sınıf: Maker Ruhu ve Arduino Dünyası
  - 9. Sınıf - 10. Sınıf: Gerçek Dünyada Programlama (Python)
  - 11. Sınıf - 12. Sınıf: Geleceğin Teknolojileri (AI & Cyber Security)
- **⚙️ Etkileşimli Arayüzler:** 
  Modern Contact (İletişim) formları, entegre Google Haritalar, Video Eğitim modülleri (YouTube Embed), detaylı eğitim müfredatı sayfaları (`mufredat.html`).

---

## 📂 Dosya & Dizin Yapısı

```text
bilisimhocasi/
├── index.html          # Ana Sayfa (Landing Page, Vizyon, İletişim, Portfolyo vb.)
├── mufredat.html       # Dinamik K-12 Detaylı Müfredat Sayfası
├── README.md           # Proje Dokümantasyonu (Bu dosya)
├── css/
│   └── style.css       # Tüm UI, Glassmorphism, Theme ve Responsive kuralları
├── js/
│   ├── main.js         # Tema geçişi, form kontrolü, mobil menü vb. interaktif mantık
│   ├── i18n.js         # TR, EN ve AR dilleri için JSON sözlük & i18n motoru
│   └── mufredat.js     # Sınıf bazlı müfredat veritabanı ve mufredat.html iş mantığı
└── img/
    └── (Proje görselleri, logo vb.)
```

---

## 💻 Kurulum ve Çalıştırma

Proje statik (HTML/CSS/JS) olarak inşa edildiği için herhangi bir paket yöneticisi (`npm`, `yarn`) veya arka plan sunucusu gerektirmez.

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/vahitkeskin/bilisimhocasi.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd bilisimhocasi
   ```
3. Dosyayı tarayıcınızda açın (Veya Live Server eklentisini kullanın):
   - VS Code ortamında **Live Server** eklentisi ile `index.html` dosyasına sağ tıklayıp "Open with Live Server" demeniz tavsiye edilir.

---

## 🎨 Tasarım Standartları & Teknolojiler

- **Vanilla HTML5 & CSS3:** Özelleştirilmiş `--css-variables` kullanımı, Flexbox/CSS Grid mimarisi.
- **Bootstrap v4.3.1:** Hızlı yerleşim, modal'lar ve mobil uyumlu navigasyon menüsü için kullanıldı. (Özelleştirilmiş kart tasarımları ile override edildi.)
- **FontAwesome v5.7.2:** Vektörel grafikler ve eğitim kademesi ikonları.
- **Tasarım Motifleri:** `backdrop-filter: blur()`, rgba(transparent) backgroundlar, kurumsal **Uğur Okulları** renkleri (Altın/Gold detaylı Lacivert/Bordo).

---

## 📝 Lisans ve Haklar
Tüm hakları saklıdır. **© <span id="readme-year"></span> Uğur Okulları Viranşehir Kampüsü**
*(Bu yazılım ve içerikler eğitim tanıtımı amaçlı projelendirilmiştir.)*