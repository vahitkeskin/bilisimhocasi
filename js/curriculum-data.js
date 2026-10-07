/**
 * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ
 * 2026 MEB K12 Bilişim Teknolojileri ve Yazılım / Bilgisayar Bilimi Müfredat Veritabanı
 * Ana Sınıfından 12. Sınıfa Kadar 13 Seviye Tam Kapsamlı Akademik Program
 */

const CURRICULUM_GRADES_DATA = {
  "anasinifi": {
    id: "anasinifi",
    projectImage: "assets/projects/anasinifi.jpg",
    stage: 1,
    category: "okuloncesi",
    categoryLabel: "Okul Öncesi",
    gradeLabel: "Ana Sınıfı (4-5 Yaş)",
    shortLabel: "Ana Sınıfı",
    order: 0,
    badge: "Okul Öncesi • 4-5 Yaş • Haftalık 1-2 Saat • MEB Bilişsel Gelişim",
    title: "Ana Sınıfı: Bilgisayarsız Kodlama (Unplugged), Yön Algoritmaları & Bilişsel Temeller",
    age: "4 - 5 Yaş Grubu",
    hours: "Haftalık 1 - 2 Ders Saati",
    scope: "MEB Okul Öncesi Bilişsel Gelişim Alanı • Erken Çocukluk Algoritmik Düşünce Çerçevesi",
    labType: "Robotik & Unplugged Oyun Halısı Atölyesi",
    themeColor: "#EC4899",
    themeGradient: "linear-gradient(135deg, #EC4899 0%, #8F489C 100%)",
    icon: "fas fa-shapes",
    desc: "Ekran bağımlılığı oluşturmadan; oyun halıları, ahşap yön blokları ve robotik sevimli arılar (Bee-Bot) ile problem çözme, yönerge takip etme, neden-sonuç kurma ve uzamsal yön algısı geliştirilir.",
    term1: [
      { unit: "1. Ünite: Bilişim Dünyasıyla Tanışıyorum & Teknoloji Sağlığı", topics: "Bilişim araçları (bilgisayar, tablet, akıllı tahta), doğru oturma duruşu, ekran mesafesi (20-20 kuralı) ve cihaz kullanım kuralları." },
      { unit: "2. Ünite: Mekansal Yönler ve Konumlandırma", topics: "İleri, geri, sağa dön, sola dön yönergeleri; labirentler ve kareli zemin üzerinde hedefe adım adım ilerleme." },
      { unit: "3. Ünite: Sıralı Mantık & Olay Örüntüleri", topics: "Günlük yaşam algoritmaları (diş fırçalama adımları, mont giyme sırası), hikaye kartlarını kronolojik sıraya dizme." }
    ],
    term2: [
      { unit: "4. Ünite: Bilgisayarsız Kodlama Oyunları (Unplugged)", topics: "Sınıf içi kodlama matı üzerinde öğrenci robot oyunu; yön ok kartlarıyla hazineye ulaşan en kısa yolu kurgulama." },
      { unit: "5. Ünite: Sevimli Robotlar ile İlk Temas (Bee-Bot)", topics: "Bee-Bot tuşları (GO, CLEAR, Yön Tuşları); robotu belirlenen hedefe hatasız gönderme görevleri." },
      { unit: "6. Ünite: Dijital Çizim ve Güvenli Ekran Alışkanlıkları", topics: "Dokunmatik ekran ve fareyle temel geometrik şekiller çizme, renkleri eşleme, ekran süresi sınırlaması bilinci." }
    ],
    outcomes: [
      "Yönerge ve sıralı komut zincirlerini hatasız takip edip uygulayabilme",
      "Mekansal yön kavramlarını (sağ, sol, ileri, geri) ayırt edebilme ve yönlendirebilme",
      "Bir hedefe ulaşmak için gereken adımları zihninde kurgulayıp kartlarla modelleyebilme",
      "Ekran karşısında doğru oturuş ergonomisini ve izinli teknoloji kullanım sınırını kavrama"
    ],
    tools: ["Unplugged Kodlama Halısı", "Bee-Bot Robotik Arı", "Tux Paint", "Ahşap Algoritma Blokları", "Görsel Sıralama Kartları"],
    project: "Renkli Labirent Macerası: Bee-Bot ile Çiçek Bahçesindeki Kovanına Ulaşan Bal Arısı Rotası",
    projectDesc: "Öğrenciler 4x4 kareli halı üzerinde yön ok kartlarını dizerek arı robotun engellere çarpmadan kovanına ulaşmasını sağlayan kod dizilimini fiziksel olarak tamamlar.",
    videoTitle: "Ana Sınıfı Bee-Bot ile Kodlama & Labirent Macerası",
    videoUrl: "https://www.youtube.com/results?search_query=okul+oncesi+bilgisayarsiz+kodlama+beebot",
    quiz: [
      {
        question: "Bee-Bot arı robotumuzun bir adım ileri gitmesi için hangi tuşa basmalıyız?",
        options: ["Yukarı / İleri Ok Tuşu", "Geri Ok Tuşu", "Çarpı Tuşu", "Kırmızı Tuş"],
        answer: 0,
        explanation: "Harika! Yukarı yön oku robotumuza tam 1 adım ileri gitme komutu verir."
      },
      {
        question: "Bilgisayar başında otururken ekranla gözümüz arasındaki mesafe yaklaşık ne kadar olmalıdır?",
        options: ["Bir kol boyu mesafe (50-60 cm)", "Burnumuz ekrana değecek kadar yakın", "10 metre uzaktan", "Ekranı arkamıza almalıyız"],
        answer: 0,
        explanation: "Doğru! Göz sağlığımız için ekranla aramızda en az bir kol boyu (yaklaşık 50 cm) mesafe bulunmalıdır."
      },
      {
        question: "Günlük hayatta sabah uyanınca hangisini İLK SIRADA yaparız?",
        options: ["Yataktan kalkmak", "Ayakkabımızı giymek", "Okula gitmek", "Akşam yemeği yemek"],
        answer: 0,
        explanation: "Süper mantık! Algoritmada olaylar sırayla gerçekleşir; ilk adım yataktan kalkmaktır."
      }
    ]
  },

  "sinif1": {
    id: "sinif1",
    projectImage: "assets/projects/sinif1.jpg",
    stage: 1,
    category: "ilkokul",
    categoryLabel: "İlkokul",
    gradeLabel: "1. Sınıf (6-7 Yaş)",
    shortLabel: "1. Sınıf",
    order: 1,
    badge: "İlkokul • 6-7 Yaş • Haftalık 1-2 Saat • MEB Temel Bilişim",
    title: "1. Sınıf: Dijital Okuryazarlık, Fare/Klavye Psikomotor Hakimiyeti & Görsel Algoritmalar",
    age: "6 - 7 Yaş Grubu",
    hours: "Haftalık 1 - 2 Ders Saati",
    scope: "MEB İlkokul Bilişim Becerileri • Psikomotor Koordinasyon ve Algoritmik Temeller",
    labType: "İlkokul Bilişim & Multimedya Laboratuvarı",
    themeColor: "#3B82F6",
    themeGradient: "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
    icon: "fas fa-mouse",
    desc: "Öğrencilerimiz bilgisayar donanım bileşenlerini tanır; fare (mouse) işaretleme, tıklama ve sürükle-bırak koordinasyonunu kazanırken klavye harf/rakam tuşlarıyla ilk dijital üretimlerini gerçekleştirir.",
    term1: [
      { unit: "1. Ünite: Bilgisayarımın Parçaları", topics: "Kasa, monitör, klavye, fare, kulaklık ve hoparlör işlevleri; doğru açma/kapatma prosedürü." },
      { unit: "2. Ünite: Fare (Mouse) ile Tanışma ve El-Göz Koordinasyonu", topics: "Fareyi doğru tutuş, sol tık (işaretleme), çift tık (açma), sağ tık (menü) ve sürükle-bırak (drag-drop) egzersizleri." },
      { unit: "3. Ünite: Klavye Tuşlarını Keşfediyorum", topics: "Harf tuşları, rakamlar, boşluk tuşu (Space), Enter ve silme tuşunu (Backspace) amaca uygun kullanma." }
    ],
    term2: [
      { unit: "4. Ünite: Dijital Boyama ve Çizim Atölyesi", topics: "Fırça, boya kovası, çizgi ve geometrik şekil araçlarıyla resim yapma; eseri dijital ortamda kaydetme." },
      { unit: "5. Ünite: Görsel Algoritmik Bulmacalar", topics: "Code.org Kurs 1 başlangıç seviyesi; Angry Birds ve Scrat karakterlerini fındığa ulaştıran blok sıralamaları." },
      { unit: "6. Ünite: Dijital Ayak İzi & Güvenli İnternet", topics: "Şifre kavramı, yabancılarla bilgi paylaşmama, ekran süresi ve dijital görgü kuralları." }
    ],
    outcomes: [
      "Bilgisayar donanım bileşenlerini görsel olarak tanıyıp adlandırabilme",
      "Fare işaretçisini ekranda hassas şekilde yönlendirip sürükle-bırak işlemlerini tamamlayabilme",
      "Klavye üzerinde harf ve rakam tuşlarını bularak kendi adını ve kısa sözcükleri yazabilme",
      "Basit görsel blokları ardışık dizerek karakteri hedefe ulaştırabilme"
    ],
    tools: ["Tux Paint / Paint", "Code.org Kurs 1", "RapidTyping Çocuk Klavye Çalışması", "EBA Bilişim Araçları"],
    project: "Benim Dijital Şehrim: Çizim Programında Geometrik Şekillerle Ev ve Park Tasarımı",
    projectDesc: "Öğrenciler fare koordinasyonunu kullanarak kare, üçgen ve daire araçlarıyla ev, ağaç ve güneş çizer; klavye ile adını ve sınıfını yazarak dosyayı kaydeder.",
    videoTitle: "1. Sınıf Fare ve Klavye Kullanımı & İlk Çizim Dersi",
    videoUrl: "https://www.youtube.com/results?search_query=1.+sinif+bilisim+fare+klavye+egitimi",
    quiz: [
      {
        question: "Bilgisayarda bir resmi veya nesneyi bir yerden başka bir yere taşımak için farenin hangi hareketini yaparız?",
        options: ["Sürükle ve Bırak (Drag & Drop)", "Ekrana dokunup beklemek", "Klavye fişini çekmek", "Ekranı kapatıp açmak"],
        answer: 0,
        explanation: "Tebrikler! Sol tuşa basılı tutup sürükleyerek istediğimiz yere bırakırız."
      },
      {
        question: "Klavyede kelimeler arasına boşluk bırakmak için kullanılan en uzun tuş hangisidir?",
        options: ["Space (Boşluk Tuşu)", "Enter Tuşu", "Esc Tuşu", "Shift Tuşu"],
        answer: 0,
        explanation: "Harika! En altta bulunan uzun Space tuşu kelimeler arasına boşluk koyar."
      },
      {
        question: "İnternette oyun oynarken birisi bizden ev adresimizi veya telefonumuzu isterse ne yapmalıyız?",
        options: ["Asla vermeyip hemen öğretmenimize veya ailemize haber vermeliyiz", "Hemen vermeliyiz", "Arkadaşımızın adresini vermeliyiz", "Bilgisayarı çöpe atmalıyız"],
        answer: 0,
        explanation: "Çok doğru! Kişisel bilgilerimizi yabancılarla asla paylaşmamalı, büyüklerimize söylemeliyiz."
      }
    ]
  },

  "sinif2": {
    id: "sinif2",
    projectImage: "assets/projects/sinif2.jpg",
    stage: 1,
    category: "ilkokul",
    categoryLabel: "İlkokul",
    gradeLabel: "2. Sınıf (7-8 Yaş)",
    shortLabel: "2. Sınıf",
    order: 2,
    badge: "İlkokul • 7-8 Yaş • Haftalık 1-2 Saat • MEB Kodlama",
    title: "2. Sınıf: Görsel Akış Şemaları, Sıralı Mantık, ScratchJr & Code.org ile Erken Kodlama",
    age: "7 - 8 Yaş Grubu",
    hours: "Haftalık 1 - 2 Ders Saati",
    scope: "MEB İlkokul Kodlama Programı • Blok Tabanlı Erken Programlama & Hikaye Tasarımı",
    labType: "İlkokul Robotik & Kodlama Laboratuvarı",
    themeColor: "#10B981",
    themeGradient: "linear-gradient(135deg, #10B981 0%, #8F489C 100%)",
    icon: "fas fa-puzzle-piece",
    desc: "ScratchJr tablet/bilgisayar arayüzü ile tanışma; karakter oluşturma, arka plan sahnesi seçme, hareket ve konuşma bloklarını birbirine bağlayarak interaktif animasyonlu masallar kurgulama.",
    term1: [
      { unit: "1. Ünite: Algoritma ve Günlük Yaşam Planları", topics: "Girdi-işlem-çıktı mantığı, algoritma adımlarını numaralandırma, hata ayıklama (debug) kavramı." },
      { unit: "2. Ünite: Code.org ile Labirent Bulmacaları", topics: "İleri git, sağa dön, sola dön blokları; gereksiz komutları tespit edip kod optimizasyonu yapma." },
      { unit: "3. Ünite: ScratchJr Dünyasına Giriş", topics: "Kedi karakteri, sahne paleti, yeşil bayrakla başlatma ve kırmızı durdurma blokları." }
    ],
    term2: [
      { unit: "4. Ünite: ScratchJr Hareket ve Ses Blokları", topics: "Adım sayısı, zıplama, dönme blokları; kendi sesini mikrofona kaydedip karaktere seslendirme ekleme." },
      { unit: "5. Ünite: Çoklu Karakter ve Mesajlaşma Blokları", topics: "İki karakterin birbiriyle selamlaşması, sarı zarf (mesaj gönder/al) tetikleyici bloğu." },
      { unit: "6. Ünite: Dijital Hikaye ve Güvenli Paylaşım", topics: "Karakterlerin konuştuğu 2 sahneli masal kurgulama; dijital nezaket kuralları." }
    ],
    outcomes: [
      "Bir algoritmadaki hatalı adımı (bug) fark edip düzeltebilme (debugging)",
      "ScratchJr üzerinde sahneye birden fazla karakter ekleyip farklı komutlar atayabilme",
      "Karakterler arasında zamanlama ve diyalog sırasını doğru planlayabilme",
      "Kendi ses kaydını ve animasyon hareketlerini birleştirerek interaktif hikaye üretebilme"
    ],
    tools: ["ScratchJr Desktop / Tablet", "Code.org Kurs 2", "LightBot", "Paint 3D"],
    project: "Orman Macerası: Konuşan Hayvanlar ve İnteraktif Masal Animasyonu",
    projectDesc: "Öğrenciler ScratchJr'da aslan ve tavşan karakterlerine sahne tasarlar; yeşil bayrağa basıldığında karakterler sırayla selamlaşır, yürür ve sesli diyalog kurar.",
    videoTitle: "2. Sınıf ScratchJr ile İnteraktif Çizgi Film Yapımı",
    videoUrl: "https://www.youtube.com/results?search_query=scratchjr+dersleri+ilkokul",
    quiz: [
      {
        question: "ScratchJr programında kodlarımızın çalışmaya başlaması için en başa hangi blok konur?",
        options: ["Yeşil Bayrak Bloğu", "Kırmızı Dur Butonu", "Boya Kovası", "Çöp Kutusu Bloğu"],
        answer: 0,
        explanation: "Harika! Yeşil bayrak bloğu animasyonumuzu başlatan ana tetikleyicidir."
      },
      {
        question: "Karakterimizin 3 adım ileri gitmesini istiyorsak mavi hareket bloğunun altındaki sayıyı ne yapmalıyız?",
        options: ["3 yazmalıyız", "0 yazmalıyız", "Boş bırakmalıyız", "Eksi 5 yazmalıyız"],
        answer: 0,
        explanation: "Tebrikler! Blokların altındaki sayı parametresini 3 yaparak tam 3 adım gitmesini sağlarız."
      },
      {
        question: "Kodumuz çalışırken bir hata fark edip o hatayı düzeltmeye bilişimde ne ad verilir?",
        options: ["Hata Ayıklama (Debugging)", "Ekranı silmek", "Bilgisayarı kapatmak", "Oyundan çıkmak"],
        answer: 0,
        explanation: "Süper! Hataları bulup düzeltme işlemine 'Debug' (Hata Ayıklama) denir."
      }
    ]
  },

  "sinif3": {
    id: "sinif3",
    projectImage: "assets/projects/sinif3.jpg",
    stage: 2,
    category: "ilkokul",
    categoryLabel: "İlkokul",
    gradeLabel: "3. Sınıf (8-9 Yaş)",
    shortLabel: "3. Sınıf",
    order: 3,
    badge: "İlkokul • 8-9 Yaş • Haftalık 1-2 Saat • MIT Scratch 3.0",
    title: "3. Sınıf: MIT Scratch 3.0 ile Blok Kodlama, 2D Oyun Programlama, Döngüler & Şartlar",
    age: "8 - 9 Yaş Grubu",
    hours: "Haftalık 1 - 2 Ders Saati",
    scope: "MEB Bilişim & Algoritma Programı • Blok Tabanlı 2D Oyun Motoru Temelleri",
    labType: "Robotik & Kodlama Laboratuvarı",
    themeColor: "#F59E0B",
    themeGradient: "linear-gradient(135deg, #F59E0B 0%, #8F489C 100%)",
    icon: "fas fa-gamepad",
    desc: "MIT Scratch 3.0 tam sürümüne geçiş; sahne ve kostüm kütüphanesi, sürekli tekrarla (infinite loop) ve 10 defa tekrarla döngüleri, klavye ok tuşlarıyla karakter kontrolü ve elma toplama oyunu mekanikleri.",
    term1: [
      { unit: "1. Ünite: Scratch 3.0 Arayüzü & Koordinat Düzlemi", topics: "Sahne koordinatları (X yatay, Y dikey eksen), merkez nokta (0,0), kostüm değiştirme ve animasyon akışı." },
      { unit: "2. Ünite: Olaylar & Hareket Blokları", topics: "Boşluk tuşuna basılınca, yeşil bayrağa tıklanınca, 10 adım git, X ve Y konumunu değiştir blokları." },
      { unit: "3. Ünite: Döngü Yapıları (Loops)", topics: "'Sürekli tekrarla' ve '... defa tekrarla' blokları arasındaki fark; yürüyen karakter döngüsü." }
    ],
    term2: [
      { unit: "4. Ünite: Koşullu Durumlar (Eğer - İse)", topics: "Algılama blokları; 'Fare imlecine değdi mi?', 'Kenara geldiyse sek', renk algılama mantığı." },
      { unit: "5. Ünite: Ses ve Görsel Efektler", topics: "Puan kazanma sesleri, karakter boyutunu değiştirme, hayalet ve renk efektleri." },
      { unit: "6. Ünite: İlk 2D Yakalama Oyunu Tasarımı", topics: "Yukarıdan düşen elmaları sepetle yakalama oyunu; skor tablosu kurgusu." }
    ],
    outcomes: [
      "Scratch 3.0 sahnesinde X ve Y koordinat mantığını anlayıp karakteri istenilen noktaya ışınlayabilme",
      "Sürekli döngü (forever loop) kullanarak akıcı karakter animasyonu ve klavye kontrolü kodlayabilme",
      "Eğer-İse (if-then) şart bloklarıyla iki nesnenin çarpışmasını (collision detection) algılayabilme",
      "Basit bir 2D oyun prototipini baştan sona tasarlayıp çalıştırabilme"
    ],
    tools: ["MIT Scratch 3.0", "Code.org Kurs 3", "Scratch Kütüphanesi", "Pixel Art Çizim"],
    project: "Elma Toplama Oyunu: Sepeti Klavye ile Yönlendirip Ağaçtan Düşen Meyveleri Yakalama",
    projectDesc: "Kullanıcı sağ-sol ok tuşlarıyla sepeti hareket ettirir; ağaçtan rastgele düşen elmalar sepete değdiğinde ses çalar ve skor değişkeni 1 artar.",
    videoTitle: "3. Sınıf Scratch 3.0 Sıfırdan Elma Toplama Oyunu Dersi",
    videoUrl: "https://www.youtube.com/results?search_query=scratch+3.0+elma+toplama+oyunu+dersi",
    quiz: [
      {
        question: "Scratch sahnesinde karakterimizin SAĞA doğru gitmesi için hangi koordinat eksenini artırmalıyız?",
        options: ["X eksenini (X konumunu +10 değiştir)", "Y eksenini", "Z eksenini", "Ses düzeyini"],
        answer: 0,
        explanation: "Harika! X ekseni yatay hareketi (sağ-sol), Y ekseni ise dikey hareketi (yukarı-aşağı) kontrol eder."
      },
      {
        question: "Bir kod bloğunun oyun boyunca HİÇ DURMADAN sürekli çalışması için hangi bloğun içine koymalıyız?",
        options: ["Sürekli Tekrarla (Forever)", "1 defa bekle", "Eğer ise bloğu", "Durdur hepsi"],
        answer: 0,
        explanation: "Tebrikler! 'Sürekli Tekrarla' bloğu içindeki komutları oyun açık kaldığı sürece sonsuz döngüde çalıştırır."
      },
      {
        question: "Karakterimizin kenara çarptığında sahneden kaybolmaması için hangi hazır bloğu kullanırız?",
        options: ["Kenara geldiyse sek", "Görünmez ol", "X konumunu sıfırla", "Dönüş stilini kapat"],
        answer: 0,
        explanation: "Çok doğru! 'Kenara geldiyse sek' bloğu karakterin ekrandan çıkıp gitmesini engeller."
      }
    ]
  },

  "sinif4": {
    id: "sinif4",
    projectImage: "assets/projects/sinif4.jpg",
    stage: 2,
    category: "ilkokul",
    categoryLabel: "İlkokul",
    gradeLabel: "4. Sınıf (9-10 Yaş)",
    shortLabel: "4. Sınıf",
    order: 4,
    badge: "İlkokul • 9-10 Yaş • Haftalık 1-2 Saat • İleri Blok Kodlama",
    title: "4. Sınıf: İleri Blok Kodlama, Değişkenler, Çoklu Sahneler, Yerli Oyun Tasarımı & Dijital Vatandaşlık",
    age: "9 - 10 Yaş Grubu",
    hours: "Haftalık 1 - 2 Ders Saati",
    scope: "MEB İlkokul 4. Sınıf Bilişim & Değişken Mantığı • Çok Düzeyli Oyun Kurgusu",
    labType: "Robotik & Kodlama Laboratuvarı",
    themeColor: "#8B5CF6",
    themeGradient: "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
    icon: "fas fa-layer-group",
    desc: "Değişkenler (Variables - Skor, Can, Süre), klonlama (ikizini yarat), çoklu arka plan sahneleri (Giriş, Oyun, Tebrikler, Kaybettin ekranı), sayaçlar ve akıllı labirent oyunu mimarisi.",
    term1: [
      { unit: "1. Ünite: Değişken (Variable) Kavramı ve Matematiksel Operatörler", topics: "Değişken oluşturma; 'Skor', 'Kalan Can', 'Geri Sayım Sayacı'; büyük/küçük/eşit mantıksal operatörleri." },
      { unit: "2. Ünite: Çoklu Sahneler ve Oyun Durumları", topics: "Menü sahnesi, Bölüm 1, Bölüm 2, 'Game Over' ve 'Kazandınız' dekorları arası geçiş haberleşmesi." },
      { unit: "3. Ünite: Klonlama (İkizini Yarat) Mantığı", topics: "Tek bir mermi veya elma kuklasından yüzlerce kopyayı belleği yormadan üretme ve yok etme." }
    ],
    term2: [
      { unit: "4. Ünite: Akıllı Labirent ve Engel Tasarımı", topics: "Duvara çarpınca başa dönme, hareketli düşman devriyeleri, gizli anahtarı bulunca açılan kapılar." },
      { unit: "5. Ünite: Çift Oyunculu (2 Player) Oyun Mimarisi", topics: "W-A-S-D ve Ok tuşlarıyla aynı klavyede oynanabilen iki oyunculu yarış veya tenis oyunu." },
      { unit: "6. Ünite: Dijital Ayak İzi, Siber Zorbalık ve KVKK Bilinci", topics: "Telif hakları, açık kaynak felsefesi, internette saygılı iletişim ve siber güvenlik temelleri." }
    ],
    outcomes: [
      "Oyunlarda Skor, Can ve Süre değişkenlerini doğru zamanlarda artırıp azaltabilme",
      "Haber sal (broadcast message) bloğu ile sahneler ve karakterler arası tetikleyici iletişim kurabilme",
      "Klon (ikiz) bloklarıyla dinamik nesne üretimi ve imhasını kodlayabilme",
      "Siber zorbalığa karşı doğru tutum sergileyip dijital etik kurallarını savunabilme"
    ],
    tools: ["MIT Scratch 3.0", "Code.org Kurs 4", "Canva Çocuk Sunum Aracı", "TypingClub"],
    project: "Piksel Labirent Muhafızı: Süreli, Canlı ve Çok Seviyeli 2D Macera Oyunu",
    projectDesc: "Oyuncu labirentte hareket eder; can değişkeni 3'tür, tuzaklara çarptığında can 1 azalır; anahtarı toplayıp çıkış kapısına ulaştığında sonraki bölüme geçer.",
    videoTitle: "4. Sınıf Scratch Değişkenler & Skor Tablolu Labirent Oyunu",
    videoUrl: "https://www.youtube.com/results?search_query=scratch+degiskenler+ve+labirent+oyunu",
    quiz: [
      {
        question: "Bir oyunda oyuncunun puanını veya kalan canını hafızada tutmak için hangisini kullanırız?",
        options: ["Değişken (Variable)", "Sadece boya kovası", "Monitör fişi", "Ses kaydı"],
        answer: 0,
        explanation: "Harika! Değişkenler oyun esnasında değişebilen verileri (puan, can, süre) saklayan bellek kutularıdır."
      },
      {
        question: "Scratch'te bir olay olduğunda (örneğin anahtar alınınca) diğer kuklalara haber vermek için hangi blok kullanılır?",
        options: ["... Haberini Sal (Broadcast)", "Hepsini sil", "Kenara geldiyse sek", "Ses çal"],
        answer: 0,
        explanation: "Tebrikler! 'Haberini Sal' bloğu kuklalar ve sahneler arasında telsiz gibi haberleşmeyi sağlar."
      },
      {
        question: "İnternette bir arkadaşımızın bizimle dalga geçtiği veya bizi üzen mesajlar yazdığı duruma ne denir?",
        options: ["Siber Zorbalık", "Hızlı internet", "Yazılım güncellemesi", "Veri tabanı"],
        answer: 0,
        explanation: "Çok doğru! Dijital ortamda yapılan bu tür davranışlara siber zorbalık denir ve asla sessiz kalınmamalıdır."
      }
    ]
  },

  "sinif5": {
    id: "sinif5",
    projectImage: "assets/projects/sinif5.jpg",
    stage: 3,
    category: "ortaokul",
    categoryLabel: "Ortaokul",
    gradeLabel: "5. Sınıf (10-11 Yaş)",
    shortLabel: "5. Sınıf",
    order: 5,
    badge: "Ortaokul • 10-11 Yaş • Haftalık 2 Saat • MEB Zorunlu Müfredat",
    title: "5. Sınıf: MEB Bilişim Teknolojileri ve Yazılım Dersi Müfredatı",
    age: "10 - 11 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati (Zorunlu)",
    scope: "MEB Talim ve Terbiye Kurulu 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı",
    labType: "Bilişim Teknolojileri ve Ağ Laboratuvarı",
    themeColor: "#059669",
    themeGradient: "linear-gradient(135deg, #059669 0%, #8F489C 100%)",
    icon: "fas fa-laptop",
    desc: "Bilişim okuryazarlığı, donanım-yazılım anatomisi, işletim sistemleri, dosya hiyerarşisi ve uzantıları (.pdf, .docx, .png, .mp4), güvenli şifreleme, bilişim etiği, zararlı yazılımlar ve problem çözme algoritmaları.",
    term1: [
      { unit: "1. Ünite: Bilişim Teknolojileri ile Tanışıyorum", topics: "Bilişim kavramı, donanım-yazılım ayrımı, dahili donanımlar (anakart, işlemci, RAM, sabit disk) ve harici birimler." },
      { unit: "2. Ünite: İşletim Sistemleri ve Dosya Yönetimi", topics: "Windows, Linux (Pardus), macOS, Android işletim sistemleri; dosya uzantıları, klasör ağacı, sıkıştırma (ZIP) ve bulut depolama." },
      { unit: "3. Ünite: Bilişim Etiği, Güvenlik ve Dijital Yurttaşlık", topics: "Telif hakları, açık lisanslar (Creative Commons), güçlü şifre kurgusu, iki faktörlü doğrulama (2FA), siber zorbalık." },
      { unit: "4. Ünite: İletişim, Araştırma ve İş Birliği", topics: "Arama motoru sorgu filtreleri (tırnak içi arama, site:gov.tr), e-posta nezaketi, dijital bilgi kaynaklarını doğrulama." }
    ],
    term2: [
      { unit: "5. Ünite: Kelime İşlemci ve Sunum Programları", topics: "Biçimlendirme, tablolar, görsel ekleme, sayfa düzeni, etkili sunum tasarımı ve hitabet ilkeleri." },
      { unit: "6. Ünite: Problem Çözme Kavramları ve Algoritmalar", topics: "Problemi alt parçalara ayrıştırma, sözel algoritma adımları, akış şeması simgeleri (başla, karar, işlem, giriş/çıkış)." },
      { unit: "7. Ünite: Blok Tabanlı Kodlama ile Problem Çözme", topics: "Scratch ile matematiksel problem çözümleri, asal sayı kontrol simülasyonu, döngüler ve şartlı kararlar." }
    ],
    outcomes: [
      "Bilgisayarın iç donanım parçalarını (İşlemci/CPU, RAM Bellek, Sabit Disk) ve rollerini doğru sınıflandırabilme",
      "Farklı dosya türlerini uzantılarından (.docx, .jpg, .mp3, .py) tanıyıp düzenli klasör yapısında yönetebilme",
      "Kişisel verilerini zararlı yazılımlara (virüs, truva atı, fidye yazılımı) karşı güvenli şifreleme ve yedekleme ile koruyabilme",
      "Verilen bir problemi akış şeması standart sembolleriyle görsel algoritma modeline dönüştürebilme"
    ],
    tools: ["Pardus / Windows", "LibreOffice / Google Dokümanlar", "MIT Scratch 3.0", "Donanım Sök-Tak Kiti", "EBA Bilişim"],
    project: "Okulumuzun Dijital Güvenlik Kılavuzu & E-Dergisi",
    projectDesc: "Öğrenciler kelime işlemci programında siber güvenlik, güçlü şifreleme ve telif haklarını anlatan resimli, tablolu ve profesyonel bir dijital okul e-bülteni hazırlar.",
    videoTitle: "5. Sınıf MEB Bilişim: Donanım Parçaları & Dosya Uzantıları Konu Anlatımı",
    videoUrl: "https://www.youtube.com/results?search_query=5.+sinif+bilisim+teknolojileri+dersi+konu+anlatimi",
    quiz: [
      {
        question: "Bilgisayarda geçici bellek olarak çalışan ve elektrik kesildiğinde üzerindeki bilgileri kaybeden donanım hangisidir?",
        options: ["RAM (Geçici Bellek)", "Hard Disk (Sabit Disk)", "Güç Kaynağı", "Klavye"],
        answer: 0,
        explanation: "Doğru! RAM geçici bellektir; kalıcı depolama ise Sabit Disk (HDD/SSD) üzerinde yapılır."
      },
      {
        question: "Akış şemalarında KARAR ve KARŞILAŞTIRMA (Evet / Hayır) adımları için hangi geometrik şekil kullanılır?",
        options: ["Eşkenar Dörtgen (Baklava Dilimi)", "Daire", "Dikdörtgen", "Elips"],
        answer: 0,
        explanation: "Harika! Eşkenar dörtgen (baklava dilimi) şartlı karar durumlarını temsil eder."
      },
      {
        question: "Aşağıdaki dosya uzantılarından hangisi bir VİDEO dosyasına aittir?",
        options: [".mp4", ".mp3", ".docx", ".pdf"],
        answer: 0,
        explanation: "Tebrikler! .mp4 video dosyasıdır; .mp3 ses, .docx metin, .pdf ise belge dosyasıdır."
      }
    ]
  },

  "sinif6": {
    id: "sinif6",
    projectImage: "assets/projects/sinif6.jpg",
    stage: 3,
    category: "ortaokul",
    categoryLabel: "Ortaokul",
    gradeLabel: "6. Sınıf (11-12 Yaş)",
    shortLabel: "6. Sınıf",
    order: 6,
    badge: "Ortaokul • 11-12 Yaş • Haftalık 2 Saat • MEB Zorunlu Müfredat",
    title: "6. Sınıf: MEB Bilişim Teknolojileri ve Yazılım: 3D Tasarım (Tinkercad), 3D Yazıcı & Kodlama",
    age: "11 - 12 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati (Zorunlu)",
    scope: "MEB 6. Sınıf Bilişim Teknolojileri Öğretim Programı • 3 Boyutlu Katmanlı Üretim & Yazılım",
    labType: "3D Tasarım & İnovasyon Maker Laboratuvarı",
    themeColor: "#0284C7",
    themeGradient: "linear-gradient(135deg, #0284C7 0%, #8F489C 100%)",
    icon: "fas fa-cube",
    desc: "Uzamsal 3 boyutlu düşünme becerileri, Autodesk Tinkercad ile 3D modelleme, delik-katı gruplama, STL dosya formatı ve 3D yazıcı katmanlı üretim teknolojisi; karmaşık algoritmalar ve metin tabanlı kodlama hazırlığı.",
    term1: [
      { unit: "1. Ünite: Bilişim ile Değişen Dünya ve Ağ Teknolojileri", topics: "Ağ türleri (LAN, WAN, WLAN), modem, router, IP adresi, MAC adresi ve internet veri iletim protokolleri." },
      { unit: "2. Ünite: Elektronik Tablolama (Hesap Tablosu) Programları", topics: "Hücreler (A1, B2), formüller (=TOPLA, =ORTALAMA, =EĞER), grafik oluşturma ve veri filtreleme." },
      { unit: "3. Ünite: Sayısal Görsel İşleme ve Ses Düzenleme", topics: "Vektör ve piksel görsel farkı, katmanlar (layers), arka plan temizleme ve podcast ses kaydı montajı." }
    ],
    term2: [
      { unit: "4. Ünite: 3 Boyutlu Tasarıma Giriş (Tinkercad)", topics: "Çalışma düzlemi, X-Y-Z uzamsal eksenleri, temel katı formlar, boyutlandırma ve açısal döndürme." },
      { unit: "5. Ünite: Katmanlı Üretim ve 3D Yazıcı Teknolojileri", topics: "Katı nesneleri delik nesnelerle gruplama, STL dosya ihracı, dilimleme (slicing) yazılımları ve filament türleri (PLA)." },
      { unit: "6. Ünite: İleri Algoritmalar ve Metin Tabanlı Kodlamaya Geçiş", topics: "Değişken tipleri (tamsayı, metin, mantıksal), mantık kapıları (VE, VEYA, DEĞİL), Python sözdizimine ilk bakış." }
    ],
    outcomes: [
      "Yerel ağ (LAN) ve geniş ağ (WAN) arasındaki topoloji ve donanım farklarını açıklayabilme",
      "Hesap tablosunda matematiksel formüllerle veri analizi yapıp grafik olarak raporlayabilme",
      "Tinkercad üzerinde 3 boyutlu özgün bir ürün modelleyip 3D yazıcı için STL formatında dışa aktarabilme",
      "Karmaşık algoritmalarda mantık operatörlerini (VE, VEYA) karar süreçlerinde hatasız kullanabilme"
    ],
    tools: ["Autodesk Tinkercad 3D", "3D Yazıcı (Creality / Ultimaker)", "Cura Dilimleme Yazılımı", "LibreOffice Calc / Excel"],
    project: "Akıllı Kampüs Anahtarlığı & Masaüstü Düzenleyici 3D Üretim Projesi",
    projectDesc: "Öğrenciler Tinkercad üzerinde okul logolu ve kendi adlarının yazdığı ergonomik bir anahtarlık ve masaüstü kalemlik modeller; dilimleme programından geçirip 3D yazıcıda PLA filament ile üretir.",
    videoTitle: "6. Sınıf Tinkercad Sıfırdan 3D Tasarım & Yazıcı Baskı Süreci",
    videoUrl: "https://www.youtube.com/results?search_query=6.+sinif+tinkercad+3d+tasarim+dersi",
    quiz: [
      {
        question: "3D yazıcıların baskı alabilmesi için 3 boyutlu modelimizi hangi dosya formatında kaydederiz?",
        options: [".STL", ".MP3", ".DOCX", ".TXT"],
        answer: 0,
        explanation: "Doğru! 3D yazıcılar için evrensel model dosya formatı .STL veya .OBJ formatıdır."
      },
      {
        question: "Hesap tablosunda (Excel/Calc) A1 hücresinden A10 hücresine kadar olan sayıları toplamak için hangi formül yazılır?",
        options: ["=TOPLA(A1:A10)", "=ÇIKAR(A1-A10)", "=SAY(A1)", "=METİN(A1)"],
        answer: 0,
        explanation: "Tebrikler! =TOPLA(A1:A10) formülü belirtilen aralıktaki tüm hücreleri otomatik toplar."
      },
      {
        question: "Tinkercad programında bir nesnenin içine oyuk veya delik açmak için nesnenin hangi özelliği seçilir?",
        options: ["Delik (Hole)", "Katı (Solid)", "Görünmez", "Kilitli"],
        answer: 0,
        explanation: "Süper! Bir şekli 'Delik' yapıp katı şekille grupladığımızda oyuk açılmış olur."
      }
    ]
  },

  "sinif7": {
    id: "sinif7",
    projectImage: "assets/projects/sinif7.jpg",
    stage: 4,
    category: "ortaokul",
    categoryLabel: "Ortaokul",
    gradeLabel: "7. Sınıf (12-13 Yaş)",
    shortLabel: "7. Sınıf",
    order: 7,
    badge: "Ortaokul • 12-13 Yaş • Haftalık 2 Saat • Fiziksel Bilişim",
    title: "7. Sınıf: Fiziksel Bilişim, Sensörler, Elektronik Devreler & Tinkercad Circuits Simülasyonu",
    age: "12 - 13 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB Robotik & Kodlama Alanı • Elektronik Devre Kurulumu & Blok/Metin Kod Entegrasyonu",
    labType: "Robotik & Fiziksel Bilişim Atölyesi",
    themeColor: "#6366F1",
    themeGradient: "linear-gradient(135deg, #6366F1 0%, #8F489C 100%)",
    icon: "fas fa-microchip",
    desc: "Ekrandan somut devre dünyasına geçiş; breadboard devre tahtası, LED diyotlar, dirençler, LDR ışık sensörü, ultrasonik mesafe sensörü (HC-SR04), buzzer ve Tinkercad Circuits üzerinde sanal devre simülasyonları.",
    term1: [
      { unit: "1. Ünite: Elektrik ve Temel Devre Elemanları", topics: "Akım, gerilim, direnç kavramları (Ohm Kanunu); LED, direnç renk kodları, buton ve breadboard iç yapısı." },
      { unit: "2. Ünite: Tinkercad Circuits ile Sanal Devre Tasarımı", topics: "Parçaları yakmadan sanal ortamda devre kurma, multimetre ile voltaj ölçümü, seri ve paralel devreler." },
      { unit: "3. Ünite: Mikrodenetleyiciye Giriş (Arduino Mimarisi)", topics: "Arduino UNO pinleri (Dijital pinler, Analog pinler, 5V, GND); 'Blink' (LED yakıp söndürme) kodu." }
    ],
    term2: [
      { unit: "4. Ünite: Çevresel Sensörler ile Veri Okuma", topics: "LDR (Foto Direnç) ile ışık şiddeti ölçme; potansiyometre ile analog veri okuma ve LED parlaklığı ayarlama (PWM)." },
      { unit: "5. Ünite: Ultrasonik Mesafe Sensörü ve Akıllı Sistemler", topics: "HC-SR04 ultrasonik sensör; ses dalgalarıyla mesafe hesaplama, buzzer sesli uyarı sistemi." },
      { unit: "6. Ünite: Akıllı Sokak Lambası ve Park Sensörü Projesi", topics: "Hava kararınca otomatik yanan lamba; engele yaklaştıkça hızlanan araç park sensörü algoritması." }
    ],
    outcomes: [
      "Elektronik devre elemanlarını (direnç, LED, sensör) breadboard üzerine doğru polariteyle bağlayabilme",
      "Arduino dijital ve analog giriş/çıkış pinlerinin kullanım amaçlarını ayırt edebilme",
      "Sensörlerden gelen çevresel verileri (ışık, mesafe) algılayıp buna göre aktüatörleri tetikleyebilme",
      "Tinkercad Circuits ortamında kurduğu simülasyon devresini fiziksel bileşenlerle gerçeğe dönüştürebilme"
    ],
    tools: ["Arduino UNO Kiti", "Tinkercad Circuits", "mBlock 5", "Elektronik Sensör Seti", "Breadboard"],
    project: "Akıllı Ev Güvenlik & Otomatik Aydınlatma Maketi",
    projectDesc: "Öğrenciler LDR ışık sensörü ile gece otomatik yanan aydınlatma ve ultrasonik sensörle kapıya yaklaşan kişiyi algılayıp alarm çalan entegre akıllı ev prototipi üretir.",
    videoTitle: "7. Sınıf Arduino & Tinkercad Circuits ile Devre Simülasyonu",
    videoUrl: "https://www.youtube.com/results?search_query=7.+sinif+arduino+tinkercad+circuits+dersleri",
    quiz: [
      {
        question: "Bir LED diyotu devreye bağlarken patlamasını önlemek ve akımı sınırlamak için hangi eleman kullanılır?",
        options: ["Direnç (Resistor)", "Sadece tel", "Pil", "Hoparlör"],
        answer: 0,
        explanation: "Doğru! Direnç LED'e gelen aşırı akımı sınırlayarak LED'in yanıp bozulmasını önler."
      },
      {
        question: "Havadaki ışık miktarını ölçerek hava karardığında değerini değiştiren sensör hangisidir?",
        options: ["LDR (Işık Sensörü / Foto Direnç)", "Termometre", "Buton", "Buzzer"],
        answer: 0,
        explanation: "Tebrikler! LDR ortamdaki ışık şiddetine göre direnci değişen ışığa duyarlı sensördür."
      },
      {
        question: "Arduino kartında elektrik akımının devreyi tamamlayıp toprağa dönmesini sağlayan eksi (-) uç pin hangisidir?",
        options: ["GND", "5V", "AREF", "VIN"],
        answer: 0,
        explanation: "Harika! GND (Ground) eksi kutup / toprak hattıdır."
      }
    ]
  },

  "sinif8": {
    id: "sinif8",
    projectImage: "assets/projects/sinif8.jpg",
    stage: 4,
    category: "ortaokul",
    categoryLabel: "Ortaokul",
    gradeLabel: "8. Sınıf (13-14 Yaş)",
    shortLabel: "8. Sınıf",
    order: 8,
    badge: "Ortaokul • 13-14 Yaş • Haftalık 2 Saat • Robotik İnovasyon",
    title: "8. Sınıf: Arduino ile Akıllı Sistemler, Robotik Proje Tasarımı & LGS Bilişimsel Düşünce",
    age: "13 - 14 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB Robotik Kodlama • İleri Seviye Otonom Robotik Sistemler & Analitik Problem Çözme",
    labType: "İnovasyon & Robotik Mekatronik Laboratuvarı",
    themeColor: "#D97706",
    themeGradient: "linear-gradient(135deg, #D97706 0%, #8F489C 100%)",
    icon: "fas fa-robot",
    desc: "Servo ve DC motor kontrolü, motor sürücü entegreleri (L298N), Bluetooth/Kızılötesi iletişim, çizgi izleyen ve engelden kaçan otonom mobil robot prototipleri; LGS sürecinde analitik düşünmeyi destekleyen mantıksal problem çözme.",
    term1: [
      { unit: "1. Ünite: Motor Teknolojileri ve Hareket Sistemleri", topics: "Servo motor açısal kontrolü (0-180 derece), DC motor çalışma prensibi ve L298N motor sürücü kartı." },
      { unit: "2. Ünite: Mobil Robot Şasisi ve Mekanik Montaj", topics: "Tekerlekler, redüktörlü motorlar, pil kutuları ve robot gövdesinin fiziksel montajı." },
      { unit: "3. Ünite: Kızılötesi (IR) Sensörler ve Çizgi Takip Algoritması", topics: "Siyah ve beyaz zemin yansıma farkı; 2'li TCRT5000 çizgi sensörüyle otonom rota takibi." }
    ],
    term2: [
      { unit: "4. Ünite: Engelden Kaçan Otonom Robot Yazılımı", topics: "Ultrasonik sensörü servo üzerine monte ederek sağa-sola bakıp en açık yolu seçen otonom karar ağacı." },
      { unit: "5. Ünite: Bluetooth ile Uzaktan Kumanda Edilen Robot", topics: "HC-06 Bluetooth modülü; akıllı telefon uygulamasıyla kablosuz robot yönlendirme." },
      { unit: "6. Ünite: TÜBİTAK ve TEKNOFEST Proje Metodolojisi", topics: "Proje raporu yazma, bilimsel araştırma etiği, problem tespiti ve inovatif çözüm prototipleme." }
    ],
    outcomes: [
      "Motor sürücü kartlarını mikrodenetleyiciye bağlayıp yön ve hız (PWM) kontrolünü sağlayabilme",
      "Çizgi izleyen veya engelden kaçan otonom bir mobil robotun mekanik ve yazılımsal entegrasyonunu yapabilme",
      "Kablosuz haberleşme modülleriyle (Bluetooth) cihazlar arası veri transferi gerçekleştirebilme",
      "Bir mühendislik problemini bilimsel araştırma basamaklarıyla ele alıp prototip ürün geliştirebilme"
    ],
    tools: ["Arduino Robot Şasisi", "L298N Sürücü", "HC-SR04", "HC-06 Bluetooth", "Arduino IDE / mBlock"],
    project: "Engelden Kaçan & Bluetooth Kontrollü Hibrit Arama-Kurtarma Robotu",
    projectDesc: "Öğrenciler 2 tekerlekli robot şasisi üzerine ultrasonik sensör ve Bluetooth modülü yerleştirir; robot hem otonom engelden kaçar hem de telefon üzerinden kumanda edilebilir.",
    videoTitle: "8. Sınıf Arduino ile Engelden Kaçan Robot Yapımı",
    videoUrl: "https://www.youtube.com/results?search_query=arduino+engelden+kacan+robot+yapimi",
    quiz: [
      {
        question: "Belirli bir açıya (örneğin 0 ile 180 derece arasına) hassas şekilde dönebilen motor türü hangisidir?",
        options: ["Servo Motor", "DC Motor", "Step Motor", "Jeneratör"],
        answer: 0,
        explanation: "Doğru! Servo motorlar istenen dereceye (açıya) hassas kilitlenebilen motorlardır."
      },
      {
        question: "Robotumuzun önündeki engelleri görüp çarpmadan durması için hangi sensörü kullanırız?",
        options: ["Ultrasonik Mesafe Sensörü", "Termometre", "Mikrofon", "Nem Sensörü"],
        answer: 0,
        explanation: "Tebrikler! Ultrasonik sensör ses dalgalarıyla engelin mesafesini santimetre cinsinden ölçer."
      },
      {
        question: "Arduino kartı ile akıllı telefon arasında kablosuz veri iletişimi kurmak için hangi modül tercih edilir?",
        options: ["Bluetooth Modülü (HC-05/06)", "USB Kablosu", "HDMI Kablosu", "VGA Çevirici"],
        answer: 0,
        explanation: "Harika! HC-05 veya HC-06 Bluetooth modülü telefonla kablosuz bağlantı sağlar."
      }
    ]
  },

  "sinif9": {
    id: "sinif9",
    projectImage: "assets/projects/sinif9.jpg",
    stage: 5,
    category: "lise",
    categoryLabel: "Lise",
    gradeLabel: "9. Sınıf (14-15 Yaş)",
    shortLabel: "9. Sınıf",
    order: 9,
    badge: "Lise • 14-15 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 1",
    title: "9. Sınıf: MEB Bilgisayar Bilimi Kur 1: Python ile Algoritmik Problem Çözme & Veri Yapıları",
    age: "14 - 15 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 1 Öğretim Programı • Metin Tabanlı Programlama",
    labType: "Lise İleri Yazılım & Python Laboratuvarı",
    themeColor: "#3B82F6",
    themeGradient: "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
    icon: "fab fa-python",
    desc: "Bloklardan profesyonel kodlamaya geçiş. Dünyanın en popüler dili Python ile sözdizimi (syntax), veri tipleri (str, int, float, bool), kullanıcıdan girdi alma (input), if-elif-else koşulları, for/while döngüleri ve modüler fonksiyonlar (def).",
    term1: [
      { unit: "1. Ünite: Bilgisayar Bilimi ve Algoritmik Düşünme Temelleri", topics: "Algoritma karmaşıklığı (Big-O girişi), akış şemaları, Python kurulumu, IDE seçimi (VS Code / PyCharm / IDLE)." },
      { unit: "2. Ünite: Python Temel Sözdizimi ve Veri Tipleri", topics: "Değişken tanımlama kuralları, string, integer, float, boolean tipleri; tip dönüşümleri (type casting), print() ve input()." },
      { unit: "3. Ünite: Aritmetik, İlişkisel ve Mantıksal Operatörler", topics: "Matematiksel operatörler (+, -, *, /, //, %, **); karşılaştırma (==, !=, <, >) ve mantıksal bağlaçlar (and, or, not)." }
    ],
    term2: [
      { unit: "4. Ünite: Karar Yapıları ve Koşullu İfadeler", topics: "if, elif, else blokları; girinti (indentation) kuralı; iç içe (nested) koşullu yapılar ile karar algoritmaları." },
      { unit: "5. Ünite: Döngü Yapıları (Loops)", topics: "for döngüsü, range() fonksiyonu, while döngüsü; break, continue ifadeleri; sonsuz döngüden kaçınma yöntemleri." },
      { unit: "6. Ünite: Modüler Programlama ve Fonksiyonlar", topics: "def ile parametreli ve return değerli fonksiyon yazımı; yerleşik modüller (math, random, time); ilk konsol mini uygulaması." }
    ],
    outcomes: [
      "Python dilinin sözdizim kurallarını ve girintileme (indentation) standartlarını hatasız uygulayabilme",
      "Kullanıcı girdilerini doğru veri tiplerine dönüştürerek matematiksel ve mantıksal hesaplamalar yapabilme",
      "Karmaşık iş kurallarını if-elif-else karar ağaçları ve döngüler ile algoritmaya dökebilme",
      "Kod tekrarını önlemek için fonksiyonlar (def) tanımlayıp parametre ve dönüş değerleriyle çağırabilme"
    ],
    tools: ["Python 3.12", "Visual Studio Code", "PyCharm Community", "Jupyter Notebook", "GitHub"],
    project: "Akıllı Öğrenci Not Takip & İstatistik Konsol Uygulaması",
    projectDesc: "Öğrencinin yazılı ve performans notlarını alarak ortalama hesaplayan, harf notunu (AA, BA, FF) belirleyen, sınıf ortalaması ve başarı istatistiklerini raporlayan fonksiyonel Python programı.",
    videoTitle: "9. Sınıf Python ile Sıfırdan Programlama & Algoritma Dersi",
    videoUrl: "https://www.youtube.com/results?search_query=9.+sinif+bilgisayar+bilimi+python+dersleri",
    quiz: [
      {
        question: "Python'da kullanıcıdan konsol üzerinden klavye girdisi almak için hangi fonksiyon kullanılır?",
        options: ["input()", "print()", "scanf()", "read()"],
        answer: 0,
        explanation: "Doğru! input() fonksiyonu kullanıcının yazdığı metni string olarak programa aktarır."
      },
      {
        question: "Python'da bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
        options: ["def", "function", "fun", "void"],
        answer: 0,
        explanation: "Harika! Python'da fonksiyonlar 'def fonksiyon_adi():' şeklinde tanımlanır."
      },
      {
        question: "Python'da 15 // 2 işleminin (tamsayı bölme) sonucu nedir?",
        options: ["7", "7.5", "1", "8"],
        answer: 0,
        explanation: "Tebrikler! // operatörü ondalık kısmı atarak tamsayı bölme yapar (15 // 2 = 7)."
      }
    ]
  },

  "sinif10": {
    id: "sinif10",
    projectImage: "assets/projects/sinif10.jpg",
    stage: 5,
    category: "lise",
    categoryLabel: "Lise",
    gradeLabel: "10. Sınıf (15-16 Yaş)",
    shortLabel: "10. Sınıf",
    order: 10,
    badge: "Lise • 15-16 Yaş • Haftalık 2 Saat • Nesne Yönelimli Python",
    title: "10. Sınıf: Python ile Nesne Yönelimli Programlama (OOP), Veri Yapıları & Dosya Yönetimi",
    age: "15 - 16 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB Bilgisayar Bilimi Kur 1 İleri Seviye • OOP Mimarisi, Modüller & Veri Yapıları",
    labType: "Lise İleri Yazılım & Python Laboratuvarı",
    themeColor: "#14B8A6",
    themeGradient: "linear-gradient(135deg, #14B8A6 0%, #8F489C 100%)",
    icon: "fas fa-cubes",
    desc: "Gelişmiş veri yapıları (Listeler, Demetler, Sözlükler, Kümeler), Nesne Yönelimli Programlama (OOP - Sınıflar, Nesneler, Kalıtım/Inheritance, Kapsülleme), Dosya Giriş/Çıkış işlemleri (.txt, .csv, .json) ve Hata Yönetimi (try-except).",
    term1: [
      { unit: "1. Ünite: Gelişmiş Veri Yapıları (Collections)", topics: "Listeler (append, remove, pop, sort), List Comprehension, Demetler (Tuples), Kümeler (Sets) ve Sözlükler (Dictionaries - Key/Value)." },
      { unit: "2. Ünite: Karakter Dizileri (Strings) İleri Metotları", topics: "Dilimleme (slicing), split, join, replace, formatlama (f-strings) ve düzenli ifadeler (Regex temelleri)." },
      { unit: "3. Ünite: Hata Yakalama ve İstisnalar (Exception Handling)", topics: "try, except, else, finally blokları; IndexError, ValueError, ZeroDivisionError hatalarını güvenle yönetme." }
    ],
    term2: [
      { unit: "4. Ünite: Dosya İşlemleri ve Kalıcı Depolama", topics: "open() fonksiyonu, modlar (r, w, a), dosya okuma/yazma, with context manager, CSV ve JSON formatında veri saklama." },
      { unit: "5. Ünite: Nesne Yönelimli Programlama (OOP) Temelleri", topics: "class, object, __init__ yapıcı metodu, self parametresi, örnek nitelikleri ve metotları." },
      { unit: "6. Ünite: İleri OOP: Kalıtım (Inheritance) & Polimorfizm", topics: "Üst sınıf / alt sınıf ilişkisi (super()), metot ezme (override) ve modüler paket yapısı oluşturma." }
    ],
    outcomes: [
      "Karmaşık verileri Sözlük (Dictionary) ve Liste yapılarıyla verimli şekilde modelleyebilme",
      "Kullanıcı hatalarını ve çalışma zamanı çökmelerini try-except ile yakalayıp güvenli kod yazabilme",
      "Uygulama verilerini harici dosyalara (.txt, .json) kalıcı olarak kaydedip geri okuyabilme",
      "Sınıf (Class) ve Nesne (Object) mimarisiyle sürdürülebilir, modüler ve nesne yönelimli yazılım geliştirebilme"
    ],
    tools: ["Python 3.12", "VS Code", "Git / GitHub", "JSON Tools", "Tkinter Arayüz Kütüphanesi"],
    project: "Nesne Yönelimli Kütüphane / Kitap Takip & Ödünç Verme Otomasyonu",
    projectDesc: "Kitap, Öğrenci ve Kütüphane sınıfları içeren; JSON dosyasına kitapları kaydedip ödünç alma durumunu güncelleyen, arama ve filtreleme yapabilen OOP tabanlı masaüstü sistemi.",
    videoTitle: "10. Sınıf Python Nesne Yönelimli Programlama (OOP) Sınıflar & Nesneler",
    videoUrl: "https://www.youtube.com/results?search_query=python+oop+nesne+yonelimli+programlama+dersleri",
    quiz: [
      {
        question: "Python'da bir sınıfın (class) yapıcı kurucu metodu hangisidir?",
        options: ["__init__()", "__start__()", "__build__()", "__create__()"],
        answer: 0,
        explanation: "Doğru! __init__() metodu bir sınıftan nesne üretildiğinde ilk çalışan yapıcı metottur."
      },
      {
        question: "Python'da anahtar-değer (Key-Value) çiftleriyle veri saklayan veri yapısı hangisidir?",
        options: ["Sözlük (Dictionary)", "Liste (List)", "Demet (Tuple)", "Tamsayı (Integer)"],
        answer: 0,
        explanation: "Tebrikler! Sözlükler {'ad': 'Ali', 'yas': 16} şeklinde key-value çiftleri tutar."
      },
      {
        question: "Python'da dosya açma işlemlerinde dosyanın otomatik ve güvenli kapanmasını sağlayan yapı hangisidir?",
        options: ["with open(...) as f:", "try open:", "file.start()", "loop open:"],
        answer: 0,
        explanation: "Süper! 'with open' bağlam yöneticisi iş bitince dosyayı otomatik kapatır."
      }
    ]
  },

  "sinif11": {
    id: "sinif11",
    projectImage: "assets/projects/sinif11.jpg",
    stage: 6,
    category: "lise",
    categoryLabel: "Lise",
    gradeLabel: "11. Sınıf (16-17 Yaş)",
    shortLabel: "11. Sınıf",
    order: 11,
    badge: "Lise • 16-17 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 2",
    title: "11. Sınıf: MEB Bilgisayar Bilimi Kur 2: Web Teknolojileri (HTML5/CSS3/JS) & SQL Veritabanı",
    age: "16 - 17 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 2 • Web Mimarisi & İlişkisel Veritabanları",
    labType: "Lise Web Geliştirme & Veritabanı Laboratuvarı",
    themeColor: "#8B5CF6",
    themeGradient: "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
    icon: "fas fa-code",
    desc: "İnternet mimarisi ve istemci-sunucu (Client-Server) modeli; semantik HTML5, modern CSS3 (Flexbox/Grid, Responsive tasarım), temel JavaScript DOM manipülasyonu ve ilişkisel veritabanı yönetim sistemi (SQL / SQLite).",
    term1: [
      { unit: "1. Ünite: Web Mimarisi ve Semantik HTML5", topics: "DNS, IP, HTTP/HTTPS protokolleri; header, nav, section, article, footer etiketleri; form elemanları ve tablolar." },
      { unit: "2. Ünite: Modern CSS3 Tasarımı ve Responsive Düzen", topics: "Seçiciler, Kutu Modeli (Box Model), Flexbox ve CSS Grid, medya sorguları (@media) ile mobil uyumluluk." },
      { unit: "3. Ünite: İstemci Taraflı JavaScript ve DOM Manipülasyonu", topics: "Değişkenler (let, const), olay dinleyiciler (addEventListener), DOM elemanı seçme ve dinamik içerik güncelleme." }
    ],
    term2: [
      { unit: "4. Ünite: Veritabanı Temelleri ve İlişkisel Veri Modeli", topics: "Veritabanı kavramı, tablolar, birincil anahtar (Primary Key), yabancı anahtar (Foreign Key), veri türleri." },
      { unit: "5. Ünite: SQL ile Veri Yönetimi (CRUD İşlemleri)", topics: "SELECT, INSERT INTO, UPDATE, DELETE sorguları; WHERE filtreleme, ORDER BY ve GROUP BY." },
      { unit: "6. Ünite: Çoklu Tablolar ve Veri Bütünlüğü (JOIN)", topics: "INNER JOIN, LEFT JOIN sorguları; Python ile SQLite veritabanı bağlantısı ve web formu entegrasyonu." }
    ],
    outcomes: [
      "Semantik HTML5 ve modern CSS3 standartlarıyla mobil uyumlu (responsive) web sayfaları kodlayabilme",
      "JavaScript ile web sayfası kullanıcı etkileşimlerini (tıklama, form doğrulama) yönetebilme",
      "İlişkisel veritabanı şeması tasarlayıp tablolar arası ilişkileri (Primary/Foreign Key) kurabilme",
      "SQL diliyle veritabanı üzerinde sorgulama, ekleme, güncelleme ve silme (CRUD) işlemlerini gerçekleştirebilme"
    ],
    tools: ["Visual Studio Code", "HTML5 & CSS3", "JavaScript (ES6+)", "SQLite / DB Browser", "Bootstrap 4/5"],
    project: "Dinamik E-Ticaret Ürün Kataloğu & SQL Veritabanı Yönetim Paneli",
    projectDesc: "Öğrenciler HTML5/CSS3 ile responsive bir ürün listeleme arayüzü kodlar; SQLite veritabanındaki ürünleri JavaScript ile ekrana çeker, filtreleme ve arama yapar.",
    videoTitle: "11. Sınıf Web Geliştirme HTML5/CSS3 & SQL Veritabanı Temelleri",
    videoUrl: "https://www.youtube.com/results?search_query=html5+css3+javascript+sql+dersleri",
    quiz: [
      {
        question: "Bir web sayfasında kullanıcı tıkladığında arka plan rengini veya yazıyı değiştirmek için hangi dil kullanılır?",
        options: ["JavaScript", "HTML", "CSS", "SQL"],
        answer: 0,
        explanation: "Doğru! HTML iskeleti, CSS görünümü, JavaScript ise etkileşimi ve mantığı yönetir."
      },
      {
        question: "SQL dilinde bir tablodaki verileri seçip listelemek için hangi komut kullanılır?",
        options: ["SELECT", "INSERT", "UPDATE", "DROP"],
        answer: 0,
        explanation: "Harika! SELECT sorgusu veritabanındaki kayıtları filtreleyip listelemek için kullanılır."
      },
      {
        question: "Web sayfalarının hem masaüstü hem de cep telefonlarında düzgün görünmesini sağlayan CSS tekniğine ne ad verilir?",
        options: ["Responsive (Duyarlı) Tasarım", "Statik Tasarım", "Monolitik Tasarım", "Tablo Tasarımı"],
        answer: 0,
        explanation: "Tebrikler! Medya sorguları ile ekran boyutuna göre şekil alan tasarıma Responsive Tasarım denir."
      }
    ]
  },

  "sinif12": {
    id: "sinif12",
    projectImage: "assets/projects/sinif12.jpg",
    stage: 6,
    category: "lise",
    categoryLabel: "Lise",
    gradeLabel: "12. Sınıf (17-18 Yaş)",
    shortLabel: "12. Sınıf",
    order: 12,
    badge: "Lise • 17-18 Yaş • Haftalık 2 Saat • İleri Teknoloji & Kariyer",
    title: "12. Sınıf: Geleceğin Teknolojileri: Yapay Zeka (AI), Nesnelerin İnterneti (IoT) & Siber Güvenlik",
    age: "17 - 18 Yaş Grubu",
    hours: "Haftalık 2 Ders Saati",
    scope: "MEB İleri Bilişim & İnovasyon • Yapay Zeka, Bulut Bilişim ve Üniversite/Kariyer Hazırlığı",
    labType: "Yapay Zeka, IoT & Siber Güvenlik İleri Araştırma Laboratuvarı",
    themeColor: "#6366F1",
    themeGradient: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
    icon: "fas fa-brain",
    desc: "Yapay zeka modelleri (Makine Öğrenmesi, Denetimli/Denetimsiz Öğrenme, Görüntü İşleme, Büyük Dil Modelleri/LLM ve Üretken Yapay Zeka), IoT ekosistemi ve ESP32 bulut entegrasyonu, etik siber güvenlik, KVKK ve üniversite bilişim kariyer rehberliği.",
    term1: [
      { unit: "1. Ünite: Yapay Zeka (AI) ve Makine Öğrenmesi Mimarisi", topics: "Yapay zeka türleri (Dar AI, Genel AI), denetimli (supervised) ve denetimsiz (unsupervised) öğrenme; veri seti hazırlama ve model eğitimi." },
      { unit: "2. Ünite: Bilgisayarlı Görü ve Görüntü İşleme", topics: "OpenCV kütüphanesi; kamera görüntüsünden yüz algılama, el hareketleri takibi ve nesne sınıflandırma modelleri." },
      { unit: "3. Ünite: Büyük Dil Modelleri (LLM) ve Üretken Yapay Zeka", topics: "Prompt mühendisliği, transformer mimarisi, etik yapay zeka kullanımı, veri telifleri ve yapay zeka halüsinasyonu." }
    ],
    term2: [
      { unit: "4. Ünite: Nesnelerin İnterneti (IoT) ve Akıllı Sistemler", topics: "ESP32 Wi-Fi mikrodenetleyicisi, MQTT protokolü, bulut IoT panoları (ThingSpeak, Adafruit IO) üzerinden canlı veri izleme." },
      { unit: "5. Ünite: Siber Güvenlik Temelleri ve Savunma Stratejileri", topics: "Ağ saldırı türleri (Phishing, DDoS, Man-in-the-middle), şifreleme algoritmaları (AES, RSA), sızma testi etiği ve KVKK." },
      { unit: "6. Ünite: Dijital Portfolyo ve Bilişim Kariyer Haritası", topics: "GitHub profili oluşturma, açık kaynak projelere katkı, yazılım mühendisliği, yapay zeka uzmanlığı ve siber savunma kariyer yolları." }
    ],
    outcomes: [
      "Makine öğrenmesi modellerinin eğitim ve test aşamalarını kavrayıp görsel sınıflandırma projesi geliştirebilme",
      "IoT cihazlarını bulut platformlarına bağlayarak sensör verilerini uzaktan izleyip kontrol edebilme",
      "Temel ağ protokollerini analiz edip siber saldırı vektörlerine karşı savunma mekanizmalarını uygulayabilme",
      "Bir yazılım projesini baştan sona dokümante edip ulusal/uluslararası yarışmalara ve üniversite kariyerine hazırlayabilme"
    ],
    tools: ["Google Teachable Machine", "Python OpenCV / Scikit-Learn", "ESP32 IoT Kiti", "Wireshark", "Hugging Face"],
    project: "Yapay Zeka Destekli Akıllı Kampüs Güvenlik & Enerji İzleme IoT Sistemi",
    projectDesc: "Kamera görüntüsünden yüz/kart algılayıp giriş izni veren yapay zeka modeli ile sınıflardaki sıcaklık/ışık verilerini buluta aktarıp enerji tasarrufu sağlayan ESP32 tabanlı entegre IoT platformu.",
    videoTitle: "12. Sınıf Yapay Zeka & Makine Öğrenmesi Teachable Machine Eğitimi",
    videoUrl: "https://www.youtube.com/results?search_query=yapay+zeka+makine+ogrenmesi+teachable+machine+dersi",
    quiz: [
      {
        question: "Bir bilgisayarın etiketlenmiş verilerden (örneğin kedi ve köpek fotoğraflarından) öğrenmesine ne ad verilir?",
        options: ["Denetimli Öğrenme (Supervised Learning)", "Denetimsiz Öğrenme", "Donanım Biçimlendirme", "Siber Saldırı"],
        answer: 0,
        explanation: "Doğru! Önceden etiketlenmiş girdi ve çıktılarla model eğitmeye 'Denetimli Öğrenme' denir."
      },
      {
        question: "Nesnelerin İnterneti (IoT) projelerinde Wi-Fi ve Bluetooth bağlantısıyla verileri buluta aktaran popüler kart hangisidir?",
        options: ["ESP32", "Sadece pil", "Flash Bellek", "Klavye"],
        answer: 0,
        explanation: "Tebrikler! ESP32 üzerinde dahili Wi-Fi ve Bluetooth bulunduran güçlü bir IoT mikrodenetleyicisidir."
      },
      {
        question: "Yapay zekanın kendisine verilen prompt (komut) doğrultusunda yeni metin, kod veya görsel üretmesine ne denir?",
        options: ["Üretken Yapay Zeka (Generative AI)", "Sadece Veri Tabanı", "Hesap Makinesi", "İşletim Sistemi"],
        answer: 0,
        explanation: "Harika! Yeni ve özgün içerik üretebilen yapay zeka sistemlerine Üretken Yapay Zeka (GenAI) denir."
      }
    ]
  }
};

// Stage ID to default grade key mapping
const STAGE_TO_DEFAULT_GRADE = {
  "1": "anasinifi",
  "2": "sinif3",
  "3": "sinif5",
  "4": "sinif7",
  "5": "sinif9",
  "6": "sinif11"
};

// Stage definitions
const STAGE_DEFINITIONS = [
  { id: 1, name: "1. Aşama", grade: "Ana Sınıfı - 2. Sınıf", age: "4 - 8 Yaş", defaultGrade: "anasinifi", category: "okuloncesi", color: "#EC4899", icon: "fas fa-shapes" },
  { id: 2, name: "2. Aşama", grade: "3. ve 4. Sınıf", age: "8 - 10 Yaş", defaultGrade: "sinif3", category: "ilkokul", color: "#F59E0B", icon: "fas fa-gamepad" },
  { id: 3, name: "3. Aşama", grade: "5. ve 6. Sınıf", age: "10 - 12 Yaş", defaultGrade: "sinif5", category: "ortaokul", color: "#059669", icon: "fas fa-cube" },
  { id: 4, name: "4. Aşama", grade: "7. ve 8. Sınıf", age: "12 - 14 Yaş", defaultGrade: "sinif7", category: "ortaokul", color: "#6366F1", icon: "fas fa-robot" },
  { id: 5, name: "5. Aşama", grade: "9. ve 10. Sınıf", age: "14 - 16 Yaş", defaultGrade: "sinif9", category: "lise", color: "#3B82F6", icon: "fab fa-python" },
  { id: 6, name: "6. Aşama", grade: "11. ve 12. Sınıf", age: "16 - 18 Yaş", defaultGrade: "sinif11", category: "lise", color: "#8B5CF6", icon: "fas fa-brain" }
];

if (typeof window !== "undefined") {
  window.CURRICULUM_GRADES_DATA = CURRICULUM_GRADES_DATA;
  window.STAGE_TO_DEFAULT_GRADE = STAGE_TO_DEFAULT_GRADE;
  window.STAGE_DEFINITIONS = STAGE_DEFINITIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CURRICULUM_GRADES_DATA, STAGE_TO_DEFAULT_GRADE, STAGE_DEFINITIONS };
}
