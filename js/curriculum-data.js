/**
 * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ
 * 2026 MEB K12 Bilişim Teknolojileri ve Yazılım / Bilgisayar Bilimi Müfredat Veritabanı
 * Ana Sınıfından 12. Sınıfa Kadar 13 Seviye Tam Kapsamlı Akademik Program
 * 3 Dil Desteği: Türkçe (tr), English (en), العربية (ar)
 */

const CURRICULUM_GRADES_DATA_I18N = {
  "tr": {
    "anasinifi": {
      "id": "anasinifi",
      "projectImage": "assets/projects/anasinifi.jpg",
      "stage": 1,
      "category": "okuloncesi",
      "categoryLabel": "Okul Öncesi",
      "gradeLabel": "Ana Sınıfı (4-5 Yaş)",
      "shortLabel": "Ana Sınıfı",
      "order": 0,
      "badge": "Okul Öncesi • 4-5 Yaş • Haftalık 1-2 Saat • MEB Bilişsel Gelişim",
      "title": "Ana Sınıfı: Bilgisayarsız Kodlama (Unplugged), Yön Algoritmaları & Bilişsel Temeller",
      "age": "4 - 5 Yaş Grubu",
      "hours": "Haftalık 1 - 2 Ders Saati",
      "scope": "MEB Okul Öncesi Bilişsel Gelişim Alanı • Erken Çocukluk Algoritmik Düşünce Çerçevesi",
      "labType": "Robotik & Unplugged Oyun Halısı Atölyesi",
      "themeColor": "#EC4899",
      "themeGradient": "linear-gradient(135deg, #EC4899 0%, #8F489C 100%)",
      "icon": "fas fa-shapes",
      "desc": "Ekran bağımlılığı oluşturmadan; oyun halıları, ahşap yön blokları ve robotik sevimli arılar (Bee-Bot) ile problem çözme, yönerge takip etme, neden-sonuç kurma ve uzamsal yön algısı geliştirilir.",
      "term1": [
        {
          "unit": "1. Ünite: Bilişim Dünyasıyla Tanışıyorum & Teknoloji Sağlığı",
          "topics": "Bilişim araçları (bilgisayar, tablet, akıllı tahta), doğru oturma duruşu, ekran mesafesi (20-20 kuralı) ve cihaz kullanım kuralları."
        },
        {
          "unit": "2. Ünite: Mekansal Yönler ve Konumlandırma",
          "topics": "İleri, geri, sağa dön, sola dön yönergeleri; labirentler ve kareli zemin üzerinde hedefe adım adım ilerleme."
        },
        {
          "unit": "3. Ünite: Sıralı Mantık & Olay Örüntüleri",
          "topics": "Günlük yaşam algoritmaları (diş fırçalama adımları, mont giyme sırası), hikaye kartlarını kronolojik sıraya dizme."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Bilgisayarsız Kodlama Oyunları (Unplugged)",
          "topics": "Sınıf içi kodlama matı üzerinde öğrenci robot oyunu; yön ok kartlarıyla hazineye ulaşan en kısa yolu kurgulama."
        },
        {
          "unit": "5. Ünite: Sevimli Robotlar ile İlk Temas (Bee-Bot)",
          "topics": "Bee-Bot tuşları (GO, CLEAR, Yön Tuşları); robotu belirlenen hedefe hatasız gönderme görevleri."
        },
        {
          "unit": "6. Ünite: Dijital Çizim ve Güvenli Ekran Alışkanlıkları",
          "topics": "Dokunmatik ekran ve fareyle temel geometrik şekiller çizme, renkleri eşleme, ekran süresi sınırlaması bilinci."
        }
      ],
      "outcomes": [
        "Yönerge ve sıralı komut zincirlerini hatasız takip edip uygulayabilme",
        "Mekansal yön kavramlarını (sağ, sol, ileri, geri) ayırt edebilme ve yönlendirebilme",
        "Bir hedefe ulaşmak için gereken adımları zihninde kurgulayıp kartlarla modelleyebilme",
        "Ekran karşısında doğru oturuş ergonomisini ve izinli teknoloji kullanım sınırını kavrama"
      ],
      "tools": [
        "Unplugged Kodlama Halısı",
        "Bee-Bot Robotik Arı",
        "Tux Paint",
        "Ahşap Algoritma Blokları",
        "Görsel Sıralama Kartları"
      ],
      "project": "Renkli Labirent Macerası: Bee-Bot ile Çiçek Bahçesindeki Kovanına Ulaşan Bal Arısı Rotası",
      "projectDesc": "Öğrenciler 4x4 kareli halı üzerinde yön ok kartlarını dizerek arı robotun engellere çarpmadan kovanına ulaşmasını sağlayan kod dizilimini fiziksel olarak tamamlar.",
      "videoTitle": "Ana Sınıfı Bee-Bot ile Kodlama & Labirent Macerası",
      "videoUrl": "https://www.youtube.com/results?search_query=okul+oncesi+bilgisayarsiz+kodlama+beebot",
      "quiz": [
        {
          "question": "Bee-Bot arı robotumuzun bir adım ileri gitmesi için hangi tuşa basmalıyız?",
          "options": [
            "Yukarı / İleri Ok Tuşu",
            "Geri Ok Tuşu",
            "Çarpı Tuşu",
            "Kırmızı Tuş"
          ],
          "answer": 0,
          "explanation": "Harika! Yukarı yön oku robotumuza tam 1 adım ileri gitme komutu verir."
        },
        {
          "question": "Bilgisayar başında otururken ekranla gözümüz arasındaki mesafe yaklaşık ne kadar olmalıdır?",
          "options": [
            "Bir kol boyu mesafe (50-60 cm)",
            "Burnumuz ekrana değecek kadar yakın",
            "10 metre uzaktan",
            "Ekranı arkamıza almalıyız"
          ],
          "answer": 0,
          "explanation": "Doğru! Göz sağlığımız için ekranla aramızda en az bir kol boyu (yaklaşık 50 cm) mesafe bulunmalıdır."
        },
        {
          "question": "Günlük hayatta sabah uyanınca hangisini İLK SIRADA yaparız?",
          "options": [
            "Yataktan kalkmak",
            "Ayakkabımızı giymek",
            "Okula gitmek",
            "Akşam yemeği yemek"
          ],
          "answer": 0,
          "explanation": "Süper mantık! Algoritmada olaylar sırayla gerçekleşir; ilk adım yataktan kalkmaktır."
        }
      ]
    },
    "sinif1": {
      "id": "sinif1",
      "projectImage": "assets/projects/sinif1.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "İlkokul",
      "gradeLabel": "1. Sınıf (6-7 Yaş)",
      "shortLabel": "1. Sınıf",
      "order": 1,
      "badge": "İlkokul • 6-7 Yaş • Haftalık 1-2 Saat • MEB Temel Bilişim",
      "title": "1. Sınıf: Dijital Okuryazarlık, Fare/Klavye Psikomotor Hakimiyeti & Görsel Algoritmalar",
      "age": "6 - 7 Yaş Grubu",
      "hours": "Haftalık 1 - 2 Ders Saati",
      "scope": "MEB İlkokul Bilişim Becerileri • Psikomotor Koordinasyon ve Algoritmik Temeller",
      "labType": "İlkokul Bilişim & Multimedya Laboratuvarı",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fas fa-mouse",
      "desc": "Öğrencilerimiz bilgisayar donanım bileşenlerini tanır; fare (mouse) işaretleme, tıklama ve sürükle-bırak koordinasyonunu kazanırken klavye harf/rakam tuşlarıyla ilk dijital üretimlerini gerçekleştirir.",
      "term1": [
        {
          "unit": "1. Ünite: Bilgisayarımın Parçaları",
          "topics": "Kasa, monitör, klavye, fare, kulaklık ve hoparlör işlevleri; doğru açma/kapatma prosedürü."
        },
        {
          "unit": "2. Ünite: Fare (Mouse) ile Tanışma ve El-Göz Koordinasyonu",
          "topics": "Fareyi doğru tutuş, sol tık (işaretleme), çift tık (açma), sağ tık (menü) ve sürükle-bırak (drag-drop) egzersizleri."
        },
        {
          "unit": "3. Ünite: Klavye Tuşlarını Keşfediyorum",
          "topics": "Harf tuşları, rakamlar, boşluk tuşu (Space), Enter ve silme tuşunu (Backspace) amaca uygun kullanma."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Dijital Boyama ve Çizim Atölyesi",
          "topics": "Fırça, boya kovası, çizgi ve geometrik şekil araçlarıyla resim yapma; eseri dijital ortamda kaydetme."
        },
        {
          "unit": "5. Ünite: Görsel Algoritmik Bulmacalar",
          "topics": "Code.org Kurs 1 başlangıç seviyesi; Angry Birds ve Scrat karakterlerini fındığa ulaştıran blok sıralamaları."
        },
        {
          "unit": "6. Ünite: Dijital Ayak İzi & Güvenli İnternet",
          "topics": "Şifre kavramı, yabancılarla bilgi paylaşmama, ekran süresi ve dijital görgü kuralları."
        }
      ],
      "outcomes": [
        "Bilgisayar donanım bileşenlerini görsel olarak tanıyıp adlandırabilme",
        "Fare işaretçisini ekranda hassas şekilde yönlendirip sürükle-bırak işlemlerini tamamlayabilme",
        "Klavye üzerinde harf ve rakam tuşlarını bularak kendi adını ve kısa sözcükleri yazabilme",
        "Basit görsel blokları ardışık dizerek karakteri hedefe ulaştırabilme"
      ],
      "tools": [
        "Tux Paint / Paint",
        "Code.org Kurs 1",
        "RapidTyping Çocuk Klavye Çalışması",
        "EBA Bilişim Araçları"
      ],
      "project": "Benim Dijital Şehrim: Çizim Programında Geometrik Şekillerle Ev ve Park Tasarımı",
      "projectDesc": "Öğrenciler fare koordinasyonunu kullanarak kare, üçgen ve daire araçlarıyla ev, ağaç ve güneş çizer; klavye ile adını ve sınıfını yazarak dosyayı kaydeder.",
      "videoTitle": "1. Sınıf Fare ve Klavye Kullanımı & İlk Çizim Dersi",
      "videoUrl": "https://www.youtube.com/results?search_query=1.+sinif+bilisim+fare+klavye+egitimi",
      "quiz": [
        {
          "question": "Bilgisayarda bir resmi veya nesneyi bir yerden başka bir yere taşımak için farenin hangi hareketini yaparız?",
          "options": [
            "Sürükle ve Bırak (Drag & Drop)",
            "Ekrana dokunup beklemek",
            "Klavye fişini çekmek",
            "Ekranı kapatıp açmak"
          ],
          "answer": 0,
          "explanation": "Tebrikler! Sol tuşa basılı tutup sürükleyerek istediğimiz yere bırakırız."
        },
        {
          "question": "Klavyede kelimeler arasına boşluk bırakmak için kullanılan en uzun tuş hangisidir?",
          "options": [
            "Space (Boşluk Tuşu)",
            "Enter Tuşu",
            "Esc Tuşu",
            "Shift Tuşu"
          ],
          "answer": 0,
          "explanation": "Harika! En altta bulunan uzun Space tuşu kelimeler arasına boşluk koyar."
        },
        {
          "question": "İnternette oyun oynarken birisi bizden ev adresimizi veya telefonumuzu isterse ne yapmalıyız?",
          "options": [
            "Asla vermeyip hemen öğretmenimize veya ailemize haber vermeliyiz",
            "Hemen vermeliyiz",
            "Arkadaşımızın adresini vermeliyiz",
            "Bilgisayarı çöpe atmalıyız"
          ],
          "answer": 0,
          "explanation": "Çok doğru! Kişisel bilgilerimizi yabancılarla asla paylaşmamalı, büyüklerimize söylemeliyiz."
        }
      ]
    },
    "sinif2": {
      "id": "sinif2",
      "projectImage": "assets/projects/sinif2.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "İlkokul",
      "gradeLabel": "2. Sınıf (7-8 Yaş)",
      "shortLabel": "2. Sınıf",
      "order": 2,
      "badge": "İlkokul • 7-8 Yaş • Haftalık 1-2 Saat • MEB Kodlama",
      "title": "2. Sınıf: Görsel Akış Şemaları, Sıralı Mantık, ScratchJr & Code.org ile Erken Kodlama",
      "age": "7 - 8 Yaş Grubu",
      "hours": "Haftalık 1 - 2 Ders Saati",
      "scope": "MEB İlkokul Kodlama Programı • Blok Tabanlı Erken Programlama & Hikaye Tasarımı",
      "labType": "İlkokul Robotik & Kodlama Laboratuvarı",
      "themeColor": "#10B981",
      "themeGradient": "linear-gradient(135deg, #10B981 0%, #8F489C 100%)",
      "icon": "fas fa-puzzle-piece",
      "desc": "ScratchJr tablet/bilgisayar arayüzü ile tanışma; karakter oluşturma, arka plan sahnesi seçme, hareket ve konuşma bloklarını birbirine bağlayarak interaktif animasyonlu masallar kurgulama.",
      "term1": [
        {
          "unit": "1. Ünite: Algoritma ve Günlük Yaşam Planları",
          "topics": "Girdi-işlem-çıktı mantığı, algoritma adımlarını numaralandırma, hata ayıklama (debug) kavramı."
        },
        {
          "unit": "2. Ünite: Code.org ile Labirent Bulmacaları",
          "topics": "İleri git, sağa dön, sola dön blokları; gereksiz komutları tespit edip kod optimizasyonu yapma."
        },
        {
          "unit": "3. Ünite: ScratchJr Dünyasına Giriş",
          "topics": "Kedi karakteri, sahne paleti, yeşil bayrakla başlatma ve kırmızı durdurma blokları."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: ScratchJr Hareket ve Ses Blokları",
          "topics": "Adım sayısı, zıplama, dönme blokları; kendi sesini mikrofona kaydedip karaktere seslendirme ekleme."
        },
        {
          "unit": "5. Ünite: Çoklu Karakter ve Mesajlaşma Blokları",
          "topics": "İki karakterin birbiriyle selamlaşması, sarı zarf (mesaj gönder/al) tetikleyici bloğu."
        },
        {
          "unit": "6. Ünite: Dijital Hikaye ve Güvenli Paylaşım",
          "topics": "Karakterlerin konuştuğu 2 sahneli masal kurgulama; dijital nezaket kuralları."
        }
      ],
      "outcomes": [
        "Bir algoritmadaki hatalı adımı (bug) fark edip düzeltebilme (debugging)",
        "ScratchJr üzerinde sahneye birden fazla karakter ekleyip farklı komutlar atayabilme",
        "Karakterler arasında zamanlama ve diyalog sırasını doğru planlayabilme",
        "Kendi ses kaydını ve animasyon hareketlerini birleştirerek interaktif hikaye üretebilme"
      ],
      "tools": [
        "ScratchJr Desktop / Tablet",
        "Code.org Kurs 2",
        "LightBot",
        "Paint 3D"
      ],
      "project": "Orman Macerası: Konuşan Hayvanlar ve İnteraktif Masal Animasyonu",
      "projectDesc": "Öğrenciler ScratchJr'da aslan ve tavşan karakterlerine sahne tasarlar; yeşil bayrağa basıldığında karakterler sırayla selamlaşır, yürür ve sesli diyalog kurar.",
      "videoTitle": "2. Sınıf ScratchJr ile İnteraktif Çizgi Film Yapımı",
      "videoUrl": "https://www.youtube.com/results?search_query=scratchjr+dersleri+ilkokul",
      "quiz": [
        {
          "question": "ScratchJr programında kodlarımızın çalışmaya başlaması için en başa hangi blok konur?",
          "options": [
            "Yeşil Bayrak Bloğu",
            "Kırmızı Dur Butonu",
            "Boya Kovası",
            "Çöp Kutusu Bloğu"
          ],
          "answer": 0,
          "explanation": "Harika! Yeşil bayrak bloğu animasyonumuzu başlatan ana tetikleyicidir."
        },
        {
          "question": "Karakterimizin 3 adım ileri gitmesini istiyorsak mavi hareket bloğunun altındaki sayıyı ne yapmalıyız?",
          "options": [
            "3 yazmalıyız",
            "0 yazmalıyız",
            "Boş bırakmalıyız",
            "Eksi 5 yazmalıyız"
          ],
          "answer": 0,
          "explanation": "Tebrikler! Blokların altındaki sayı parametresini 3 yaparak tam 3 adım gitmesini sağlarız."
        },
        {
          "question": "Kodumuz çalışırken bir hata fark edip o hatayı düzeltmeye bilişimde ne ad verilir?",
          "options": [
            "Hata Ayıklama (Debugging)",
            "Ekranı silmek",
            "Bilgisayarı kapatmak",
            "Oyundan çıkmak"
          ],
          "answer": 0,
          "explanation": "Süper! Hataları bulup düzeltme işlemine 'Debug' (Hata Ayıklama) denir."
        }
      ]
    },
    "sinif3": {
      "id": "sinif3",
      "projectImage": "assets/projects/sinif3.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "İlkokul",
      "gradeLabel": "3. Sınıf (8-9 Yaş)",
      "shortLabel": "3. Sınıf",
      "order": 3,
      "badge": "İlkokul • 8-9 Yaş • Haftalık 1-2 Saat • MIT Scratch 3.0",
      "title": "3. Sınıf: MIT Scratch 3.0 ile Blok Kodlama, 2D Oyun Programlama, Döngüler & Şartlar",
      "age": "8 - 9 Yaş Grubu",
      "hours": "Haftalık 1 - 2 Ders Saati",
      "scope": "MEB Bilişim & Algoritma Programı • Blok Tabanlı 2D Oyun Motoru Temelleri",
      "labType": "Robotik & Kodlama Laboratuvarı",
      "themeColor": "#F59E0B",
      "themeGradient": "linear-gradient(135deg, #F59E0B 0%, #8F489C 100%)",
      "icon": "fas fa-gamepad",
      "desc": "MIT Scratch 3.0 tam sürümüne geçiş; sahne ve kostüm kütüphanesi, sürekli tekrarla (infinite loop) ve 10 defa tekrarla döngüleri, klavye ok tuşlarıyla karakter kontrolü ve elma toplama oyunu mekanikleri.",
      "term1": [
        {
          "unit": "1. Ünite: Scratch 3.0 Arayüzü & Koordinat Düzlemi",
          "topics": "Sahne koordinatları (X yatay, Y dikey eksen), merkez nokta (0,0), kostüm değiştirme ve animasyon akışı."
        },
        {
          "unit": "2. Ünite: Olaylar & Hareket Blokları",
          "topics": "Boşluk tuşuna basılınca, yeşil bayrağa tıklanınca, 10 adım git, X ve Y konumunu değiştir blokları."
        },
        {
          "unit": "3. Ünite: Döngü Yapıları (Loops)",
          "topics": "'Sürekli tekrarla' ve '... defa tekrarla' blokları arasındaki fark; yürüyen karakter döngüsü."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Koşullu Durumlar (Eğer - İse)",
          "topics": "Algılama blokları; 'Fare imlecine değdi mi?', 'Kenara geldiyse sek', renk algılama mantığı."
        },
        {
          "unit": "5. Ünite: Ses ve Görsel Efektler",
          "topics": "Puan kazanma sesleri, karakter boyutunu değiştirme, hayalet ve renk efektleri."
        },
        {
          "unit": "6. Ünite: İlk 2D Yakalama Oyunu Tasarımı",
          "topics": "Yukarıdan düşen elmaları sepetle yakalama oyunu; skor tablosu kurgusu."
        }
      ],
      "outcomes": [
        "Scratch 3.0 sahnesinde X ve Y koordinat mantığını anlayıp karakteri istenilen noktaya ışınlayabilme",
        "Sürekli döngü (forever loop) kullanarak akıcı karakter animasyonu ve klavye kontrolü kodlayabilme",
        "Eğer-İse (if-then) şart bloklarıyla iki nesnenin çarpışmasını (collision detection) algılayabilme",
        "Basit bir 2D oyun prototipini baştan sona tasarlayıp çalıştırabilme"
      ],
      "tools": [
        "MIT Scratch 3.0",
        "Code.org Kurs 3",
        "Scratch Kütüphanesi",
        "Pixel Art Çizim"
      ],
      "project": "Elma Toplama Oyunu: Sepeti Klavye ile Yönlendirip Ağaçtan Düşen Meyveleri Yakalama",
      "projectDesc": "Kullanıcı sağ-sol ok tuşlarıyla sepeti hareket ettirir; ağaçtan rastgele düşen elmalar sepete değdiğinde ses çalar ve skor değişkeni 1 artar.",
      "videoTitle": "3. Sınıf Scratch 3.0 Sıfırdan Elma Toplama Oyunu Dersi",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+3.0+elma+toplama+oyunu+dersi",
      "quiz": [
        {
          "question": "Scratch sahnesinde karakterimizin SAĞA doğru gitmesi için hangi koordinat eksenini artırmalıyız?",
          "options": [
            "X eksenini (X konumunu +10 değiştir)",
            "Y eksenini",
            "Z eksenini",
            "Ses düzeyini"
          ],
          "answer": 0,
          "explanation": "Harika! X ekseni yatay hareketi (sağ-sol), Y ekseni ise dikey hareketi (yukarı-aşağı) kontrol eder."
        },
        {
          "question": "Bir kod bloğunun oyun boyunca HİÇ DURMADAN sürekli çalışması için hangi bloğun içine koymalıyız?",
          "options": [
            "Sürekli Tekrarla (Forever)",
            "1 defa bekle",
            "Eğer ise bloğu",
            "Durdur hepsi"
          ],
          "answer": 0,
          "explanation": "Tebrikler! 'Sürekli Tekrarla' bloğu içindeki komutları oyun açık kaldığı sürece sonsuz döngüde çalıştırır."
        },
        {
          "question": "Karakterimizin kenara çarptığında sahneden kaybolmaması için hangi hazır bloğu kullanırız?",
          "options": [
            "Kenara geldiyse sek",
            "Görünmez ol",
            "X konumunu sıfırla",
            "Dönüş stilini kapat"
          ],
          "answer": 0,
          "explanation": "Çok doğru! 'Kenara geldiyse sek' bloğu karakterin ekrandan çıkıp gitmesini engeller."
        }
      ]
    },
    "sinif4": {
      "id": "sinif4",
      "projectImage": "assets/projects/sinif4.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "İlkokul",
      "gradeLabel": "4. Sınıf (9-10 Yaş)",
      "shortLabel": "4. Sınıf",
      "order": 4,
      "badge": "İlkokul • 9-10 Yaş • Haftalık 1-2 Saat • İleri Blok Kodlama",
      "title": "4. Sınıf: İleri Blok Kodlama, Değişkenler, Çoklu Sahneler, Yerli Oyun Tasarımı & Dijital Vatandaşlık",
      "age": "9 - 10 Yaş Grubu",
      "hours": "Haftalık 1 - 2 Ders Saati",
      "scope": "MEB İlkokul 4. Sınıf Bilişim & Değişken Mantığı • Çok Düzeyli Oyun Kurgusu",
      "labType": "Robotik & Kodlama Laboratuvarı",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-layer-group",
      "desc": "Değişkenler (Variables - Skor, Can, Süre), klonlama (ikizini yarat), çoklu arka plan sahneleri (Giriş, Oyun, Tebrikler, Kaybettin ekranı), sayaçlar ve akıllı labirent oyunu mimarisi.",
      "term1": [
        {
          "unit": "1. Ünite: Değişken (Variable) Kavramı ve Matematiksel Operatörler",
          "topics": "Değişken oluşturma; 'Skor', 'Kalan Can', 'Geri Sayım Sayacı'; büyük/küçük/eşit mantıksal operatörleri."
        },
        {
          "unit": "2. Ünite: Çoklu Sahneler ve Oyun Durumları",
          "topics": "Menü sahnesi, Bölüm 1, Bölüm 2, 'Game Over' ve 'Kazandınız' dekorları arası geçiş haberleşmesi."
        },
        {
          "unit": "3. Ünite: Klonlama (İkizini Yarat) Mantığı",
          "topics": "Tek bir mermi veya elma kuklasından yüzlerce kopyayı belleği yormadan üretme ve yok etme."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Akıllı Labirent ve Engel Tasarımı",
          "topics": "Duvara çarpınca başa dönme, hareketli düşman devriyeleri, gizli anahtarı bulunca açılan kapılar."
        },
        {
          "unit": "5. Ünite: Çift Oyunculu (2 Player) Oyun Mimarisi",
          "topics": "W-A-S-D ve Ok tuşlarıyla aynı klavyede oynanabilen iki oyunculu yarış veya tenis oyunu."
        },
        {
          "unit": "6. Ünite: Dijital Ayak İzi, Siber Zorbalık ve KVKK Bilinci",
          "topics": "Telif hakları, açık kaynak felsefesi, internette saygılı iletişim ve siber güvenlik temelleri."
        }
      ],
      "outcomes": [
        "Oyunlarda Skor, Can ve Süre değişkenlerini doğru zamanlarda artırıp azaltabilme",
        "Haber sal (broadcast message) bloğu ile sahneler ve karakterler arası tetikleyici iletişim kurabilme",
        "Klon (ikiz) bloklarıyla dinamik nesne üretimi ve imhasını kodlayabilme",
        "Siber zorbalığa karşı doğru tutum sergileyip dijital etik kurallarını savunabilme"
      ],
      "tools": [
        "MIT Scratch 3.0",
        "Code.org Kurs 4",
        "Canva Çocuk Sunum Aracı",
        "TypingClub"
      ],
      "project": "Piksel Labirent Muhafızı: Süreli, Canlı ve Çok Seviyeli 2D Macera Oyunu",
      "projectDesc": "Oyuncu labirentte hareket eder; can değişkeni 3'tür, tuzaklara çarptığında can 1 azalır; anahtarı toplayıp çıkış kapısına ulaştığında sonraki bölüme geçer.",
      "videoTitle": "4. Sınıf Scratch Değişkenler & Skor Tablolu Labirent Oyunu",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+degiskenler+ve+labirent+oyunu",
      "quiz": [
        {
          "question": "Bir oyunda oyuncunun puanını veya kalan canını hafızada tutmak için hangisini kullanırız?",
          "options": [
            "Değişken (Variable)",
            "Sadece boya kovası",
            "Monitör fişi",
            "Ses kaydı"
          ],
          "answer": 0,
          "explanation": "Harika! Değişkenler oyun esnasında değişebilen verileri (puan, can, süre) saklayan bellek kutularıdır."
        },
        {
          "question": "Scratch'te bir olay olduğunda (örneğin anahtar alınınca) diğer kuklalara haber vermek için hangi blok kullanılır?",
          "options": [
            "... Haberini Sal (Broadcast)",
            "Hepsini sil",
            "Kenara geldiyse sek",
            "Ses çal"
          ],
          "answer": 0,
          "explanation": "Tebrikler! 'Haberini Sal' bloğu kuklalar ve sahneler arasında telsiz gibi haberleşmeyi sağlar."
        },
        {
          "question": "İnternette bir arkadaşımızın bizimle dalga geçtiği veya bizi üzen mesajlar yazdığı duruma ne denir?",
          "options": [
            "Siber Zorbalık",
            "Hızlı internet",
            "Yazılım güncellemesi",
            "Veri tabanı"
          ],
          "answer": 0,
          "explanation": "Çok doğru! Dijital ortamda yapılan bu tür davranışlara siber zorbalık denir ve asla sessiz kalınmamalıdır."
        }
      ]
    },
    "sinif5": {
      "id": "sinif5",
      "projectImage": "assets/projects/sinif5.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "Ortaokul",
      "gradeLabel": "5. Sınıf (10-11 Yaş)",
      "shortLabel": "5. Sınıf",
      "order": 5,
      "badge": "Ortaokul • 10-11 Yaş • Haftalık 2 Saat • MEB Zorunlu Müfredat",
      "title": "5. Sınıf: MEB Bilişim Teknolojileri ve Yazılım Dersi Müfredatı",
      "age": "10 - 11 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati (Zorunlu)",
      "scope": "MEB Talim ve Terbiye Kurulu 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı",
      "labType": "Bilişim Teknolojileri ve Ağ Laboratuvarı",
      "themeColor": "#059669",
      "themeGradient": "linear-gradient(135deg, #059669 0%, #8F489C 100%)",
      "icon": "fas fa-laptop",
      "desc": "Bilişim okuryazarlığı, donanım-yazılım anatomisi, işletim sistemleri, dosya hiyerarşisi ve uzantıları (.pdf, .docx, .png, .mp4), güvenli şifreleme, bilişim etiği, zararlı yazılımlar ve problem çözme algoritmaları.",
      "term1": [
        {
          "unit": "1. Ünite: Bilişim Teknolojileri ile Tanışıyorum",
          "topics": "Bilişim kavramı, donanım-yazılım ayrımı, dahili donanımlar (anakart, işlemci, RAM, sabit disk) ve harici birimler."
        },
        {
          "unit": "2. Ünite: İşletim Sistemleri ve Dosya Yönetimi",
          "topics": "Windows, Linux (Pardus), macOS, Android işletim sistemleri; dosya uzantıları, klasör ağacı, sıkıştırma (ZIP) ve bulut depolama."
        },
        {
          "unit": "3. Ünite: Bilişim Etiği, Güvenlik ve Dijital Yurttaşlık",
          "topics": "Telif hakları, açık lisanslar (Creative Commons), güçlü şifre kurgusu, iki faktörlü doğrulama (2FA), siber zorbalık."
        },
        {
          "unit": "4. Ünite: İletişim, Araştırma ve İş Birliği",
          "topics": "Arama motoru sorgu filtreleri (tırnak içi arama, site:gov.tr), e-posta nezaketi, dijital bilgi kaynaklarını doğrulama."
        }
      ],
      "term2": [
        {
          "unit": "5. Ünite: Kelime İşlemci ve Sunum Programları",
          "topics": "Biçimlendirme, tablolar, görsel ekleme, sayfa düzeni, etkili sunum tasarımı ve hitabet ilkeleri."
        },
        {
          "unit": "6. Ünite: Problem Çözme Kavramları ve Algoritmalar",
          "topics": "Problemi alt parçalara ayrıştırma, sözel algoritma adımları, akış şeması simgeleri (başla, karar, işlem, giriş/çıkış)."
        },
        {
          "unit": "7. Ünite: Blok Tabanlı Kodlama ile Problem Çözme",
          "topics": "Scratch ile matematiksel problem çözümleri, asal sayı kontrol simülasyonu, döngüler ve şartlı kararlar."
        }
      ],
      "outcomes": [
        "Bilgisayarın iç donanım parçalarını (İşlemci/CPU, RAM Bellek, Sabit Disk) ve rollerini doğru sınıflandırabilme",
        "Farklı dosya türlerini uzantılarından (.docx, .jpg, .mp3, .py) tanıyıp düzenli klasör yapısında yönetebilme",
        "Kişisel verilerini zararlı yazılımlara (virüs, truva atı, fidye yazılımı) karşı güvenli şifreleme ve yedekleme ile koruyabilme",
        "Verilen bir problemi akış şeması standart sembolleriyle görsel algoritma modeline dönüştürebilme"
      ],
      "tools": [
        "Pardus / Windows",
        "LibreOffice / Google Dokümanlar",
        "MIT Scratch 3.0",
        "Donanım Sök-Tak Kiti",
        "EBA Bilişim"
      ],
      "project": "Okulumuzun Dijital Güvenlik Kılavuzu & E-Dergisi",
      "projectDesc": "Öğrenciler kelime işlemci programında siber güvenlik, güçlü şifreleme ve telif haklarını anlatan resimli, tablolu ve profesyonel bir dijital okul e-bülteni hazırlar.",
      "videoTitle": "5. Sınıf MEB Bilişim: Donanım Parçaları & Dosya Uzantıları Konu Anlatımı",
      "videoUrl": "https://www.youtube.com/results?search_query=5.+sinif+bilisim+teknolojileri+dersi+konu+anlatimi",
      "quiz": [
        {
          "question": "Bilgisayarda geçici bellek olarak çalışan ve elektrik kesildiğinde üzerindeki bilgileri kaybeden donanım hangisidir?",
          "options": [
            "RAM (Geçici Bellek)",
            "Hard Disk (Sabit Disk)",
            "Güç Kaynağı",
            "Klavye"
          ],
          "answer": 0,
          "explanation": "Doğru! RAM geçici bellektir; kalıcı depolama ise Sabit Disk (HDD/SSD) üzerinde yapılır."
        },
        {
          "question": "Akış şemalarında KARAR ve KARŞILAŞTIRMA (Evet / Hayır) adımları için hangi geometrik şekil kullanılır?",
          "options": [
            "Eşkenar Dörtgen (Baklava Dilimi)",
            "Daire",
            "Dikdörtgen",
            "Elips"
          ],
          "answer": 0,
          "explanation": "Harika! Eşkenar dörtgen (baklava dilimi) şartlı karar durumlarını temsil eder."
        },
        {
          "question": "Aşağıdaki dosya uzantılarından hangisi bir VİDEO dosyasına aittir?",
          "options": [
            ".mp4",
            ".mp3",
            ".docx",
            ".pdf"
          ],
          "answer": 0,
          "explanation": "Tebrikler! .mp4 video dosyasıdır; .mp3 ses, .docx metin, .pdf ise belge dosyasıdır."
        }
      ]
    },
    "sinif6": {
      "id": "sinif6",
      "projectImage": "assets/projects/sinif6.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "Ortaokul",
      "gradeLabel": "6. Sınıf (11-12 Yaş)",
      "shortLabel": "6. Sınıf",
      "order": 6,
      "badge": "Ortaokul • 11-12 Yaş • Haftalık 2 Saat • MEB Zorunlu Müfredat",
      "title": "6. Sınıf: MEB Bilişim Teknolojileri ve Yazılım: 3D Tasarım (Tinkercad), 3D Yazıcı & Kodlama",
      "age": "11 - 12 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati (Zorunlu)",
      "scope": "MEB 6. Sınıf Bilişim Teknolojileri Öğretim Programı • 3 Boyutlu Katmanlı Üretim & Yazılım",
      "labType": "3D Tasarım & İnovasyon Maker Laboratuvarı",
      "themeColor": "#0284C7",
      "themeGradient": "linear-gradient(135deg, #0284C7 0%, #8F489C 100%)",
      "icon": "fas fa-cube",
      "desc": "Uzamsal 3 boyutlu düşünme becerileri, Autodesk Tinkercad ile 3D modelleme, delik-katı gruplama, STL dosya formatı ve 3D yazıcı katmanlı üretim teknolojisi; karmaşık algoritmalar ve metin tabanlı kodlama hazırlığı.",
      "term1": [
        {
          "unit": "1. Ünite: Bilişim ile Değişen Dünya ve Ağ Teknolojileri",
          "topics": "Ağ türleri (LAN, WAN, WLAN), modem, router, IP adresi, MAC adresi ve internet veri iletim protokolleri."
        },
        {
          "unit": "2. Ünite: Elektronik Tablolama (Hesap Tablosu) Programları",
          "topics": "Hücreler (A1, B2), formüller (=TOPLA, =ORTALAMA, =EĞER), grafik oluşturma ve veri filtreleme."
        },
        {
          "unit": "3. Ünite: Sayısal Görsel İşleme ve Ses Düzenleme",
          "topics": "Vektör ve piksel görsel farkı, katmanlar (layers), arka plan temizleme ve podcast ses kaydı montajı."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: 3 Boyutlu Tasarıma Giriş (Tinkercad)",
          "topics": "Çalışma düzlemi, X-Y-Z uzamsal eksenleri, temel katı formlar, boyutlandırma ve açısal döndürme."
        },
        {
          "unit": "5. Ünite: Katmanlı Üretim ve 3D Yazıcı Teknolojileri",
          "topics": "Katı nesneleri delik nesnelerle gruplama, STL dosya ihracı, dilimleme (slicing) yazılımları ve filament türleri (PLA)."
        },
        {
          "unit": "6. Ünite: İleri Algoritmalar ve Metin Tabanlı Kodlamaya Geçiş",
          "topics": "Değişken tipleri (tamsayı, metin, mantıksal), mantık kapıları (VE, VEYA, DEĞİL), Python sözdizimine ilk bakış."
        }
      ],
      "outcomes": [
        "Yerel ağ (LAN) ve geniş ağ (WAN) arasındaki topoloji ve donanım farklarını açıklayabilme",
        "Hesap tablosunda matematiksel formüllerle veri analizi yapıp grafik olarak raporlayabilme",
        "Tinkercad üzerinde 3 boyutlu özgün bir ürün modelleyip 3D yazıcı için STL formatında dışa aktarabilme",
        "Karmaşık algoritmalarda mantık operatörlerini (VE, VEYA) karar süreçlerinde hatasız kullanabilme"
      ],
      "tools": [
        "Autodesk Tinkercad 3D",
        "3D Yazıcı (Creality / Ultimaker)",
        "Cura Dilimleme Yazılımı",
        "LibreOffice Calc / Excel"
      ],
      "project": "Akıllı Kampüs Anahtarlığı & Masaüstü Düzenleyici 3D Üretim Projesi",
      "projectDesc": "Öğrenciler Tinkercad üzerinde okul logolu ve kendi adlarının yazdığı ergonomik bir anahtarlık ve masaüstü kalemlik modeller; dilimleme programından geçirip 3D yazıcıda PLA filament ile üretir.",
      "videoTitle": "6. Sınıf Tinkercad Sıfırdan 3D Tasarım & Yazıcı Baskı Süreci",
      "videoUrl": "https://www.youtube.com/results?search_query=6.+sinif+tinkercad+3d+tasarim+dersi",
      "quiz": [
        {
          "question": "3D yazıcıların baskı alabilmesi için 3 boyutlu modelimizi hangi dosya formatında kaydederiz?",
          "options": [
            ".STL",
            ".MP3",
            ".DOCX",
            ".TXT"
          ],
          "answer": 0,
          "explanation": "Doğru! 3D yazıcılar için evrensel model dosya formatı .STL veya .OBJ formatıdır."
        },
        {
          "question": "Hesap tablosunda (Excel/Calc) A1 hücresinden A10 hücresine kadar olan sayıları toplamak için hangi formül yazılır?",
          "options": [
            "=TOPLA(A1:A10)",
            "=ÇIKAR(A1-A10)",
            "=SAY(A1)",
            "=METİN(A1)"
          ],
          "answer": 0,
          "explanation": "Tebrikler! =TOPLA(A1:A10) formülü belirtilen aralıktaki tüm hücreleri otomatik toplar."
        },
        {
          "question": "Tinkercad programında bir nesnenin içine oyuk veya delik açmak için nesnenin hangi özelliği seçilir?",
          "options": [
            "Delik (Hole)",
            "Katı (Solid)",
            "Görünmez",
            "Kilitli"
          ],
          "answer": 0,
          "explanation": "Süper! Bir şekli 'Delik' yapıp katı şekille grupladığımızda oyuk açılmış olur."
        }
      ]
    },
    "sinif7": {
      "id": "sinif7",
      "projectImage": "assets/projects/sinif7.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "Ortaokul",
      "gradeLabel": "7. Sınıf (12-13 Yaş)",
      "shortLabel": "7. Sınıf",
      "order": 7,
      "badge": "Ortaokul • 12-13 Yaş • Haftalık 2 Saat • Fiziksel Bilişim",
      "title": "7. Sınıf: Fiziksel Bilişim, Sensörler, Elektronik Devreler & Tinkercad Circuits Simülasyonu",
      "age": "12 - 13 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB Robotik & Kodlama Alanı • Elektronik Devre Kurulumu & Blok/Metin Kod Entegrasyonu",
      "labType": "Robotik & Fiziksel Bilişim Atölyesi",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #8F489C 100%)",
      "icon": "fas fa-microchip",
      "desc": "Ekrandan somut devre dünyasına geçiş; breadboard devre tahtası, LED diyotlar, dirençler, LDR ışık sensörü, ultrasonik mesafe sensörü (HC-SR04), buzzer ve Tinkercad Circuits üzerinde sanal devre simülasyonları.",
      "term1": [
        {
          "unit": "1. Ünite: Elektrik ve Temel Devre Elemanları",
          "topics": "Akım, gerilim, direnç kavramları (Ohm Kanunu); LED, direnç renk kodları, buton ve breadboard iç yapısı."
        },
        {
          "unit": "2. Ünite: Tinkercad Circuits ile Sanal Devre Tasarımı",
          "topics": "Parçaları yakmadan sanal ortamda devre kurma, multimetre ile voltaj ölçümü, seri ve paralel devreler."
        },
        {
          "unit": "3. Ünite: Mikrodenetleyiciye Giriş (Arduino Mimarisi)",
          "topics": "Arduino UNO pinleri (Dijital pinler, Analog pinler, 5V, GND); 'Blink' (LED yakıp söndürme) kodu."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Çevresel Sensörler ile Veri Okuma",
          "topics": "LDR (Foto Direnç) ile ışık şiddeti ölçme; potansiyometre ile analog veri okuma ve LED parlaklığı ayarlama (PWM)."
        },
        {
          "unit": "5. Ünite: Ultrasonik Mesafe Sensörü ve Akıllı Sistemler",
          "topics": "HC-SR04 ultrasonik sensör; ses dalgalarıyla mesafe hesaplama, buzzer sesli uyarı sistemi."
        },
        {
          "unit": "6. Ünite: Akıllı Sokak Lambası ve Park Sensörü Projesi",
          "topics": "Hava kararınca otomatik yanan lamba; engele yaklaştıkça hızlanan araç park sensörü algoritması."
        }
      ],
      "outcomes": [
        "Elektronik devre elemanlarını (direnç, LED, sensör) breadboard üzerine doğru polariteyle bağlayabilme",
        "Arduino dijital ve analog giriş/çıkış pinlerinin kullanım amaçlarını ayırt edebilme",
        "Sensörlerden gelen çevresel verileri (ışık, mesafe) algılayıp buna göre aktüatörleri tetikleyebilme",
        "Tinkercad Circuits ortamında kurduğu simülasyon devresini fiziksel bileşenlerle gerçeğe dönüştürebilme"
      ],
      "tools": [
        "Arduino UNO Kiti",
        "Tinkercad Circuits",
        "mBlock 5",
        "Elektronik Sensör Seti",
        "Breadboard"
      ],
      "project": "Akıllı Ev Güvenlik & Otomatik Aydınlatma Maketi",
      "projectDesc": "Öğrenciler LDR ışık sensörü ile gece otomatik yanan aydınlatma ve ultrasonik sensörle kapıya yaklaşan kişiyi algılayıp alarm çalan entegre akıllı ev prototipi üretir.",
      "videoTitle": "7. Sınıf Arduino & Tinkercad Circuits ile Devre Simülasyonu",
      "videoUrl": "https://www.youtube.com/results?search_query=7.+sinif+arduino+tinkercad+circuits+dersleri",
      "quiz": [
        {
          "question": "Bir LED diyotu devreye bağlarken patlamasını önlemek ve akımı sınırlamak için hangi eleman kullanılır?",
          "options": [
            "Direnç (Resistor)",
            "Sadece tel",
            "Pil",
            "Hoparlör"
          ],
          "answer": 0,
          "explanation": "Doğru! Direnç LED'e gelen aşırı akımı sınırlayarak LED'in yanıp bozulmasını önler."
        },
        {
          "question": "Havadaki ışık miktarını ölçerek hava karardığında değerini değiştiren sensör hangisidir?",
          "options": [
            "LDR (Işık Sensörü / Foto Direnç)",
            "Termometre",
            "Buton",
            "Buzzer"
          ],
          "answer": 0,
          "explanation": "Tebrikler! LDR ortamdaki ışık şiddetine göre direnci değişen ışığa duyarlı sensördür."
        },
        {
          "question": "Arduino kartında elektrik akımının devreyi tamamlayıp toprağa dönmesini sağlayan eksi (-) uç pin hangisidir?",
          "options": [
            "GND",
            "5V",
            "AREF",
            "VIN"
          ],
          "answer": 0,
          "explanation": "Harika! GND (Ground) eksi kutup / toprak hattıdır."
        }
      ]
    },
    "sinif8": {
      "id": "sinif8",
      "projectImage": "assets/projects/sinif8.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "Ortaokul",
      "gradeLabel": "8. Sınıf (13-14 Yaş)",
      "shortLabel": "8. Sınıf",
      "order": 8,
      "badge": "Ortaokul • 13-14 Yaş • Haftalık 2 Saat • Robotik İnovasyon",
      "title": "8. Sınıf: Arduino ile Akıllı Sistemler, Robotik Proje Tasarımı & LGS Bilişimsel Düşünce",
      "age": "13 - 14 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB Robotik Kodlama • İleri Seviye Otonom Robotik Sistemler & Analitik Problem Çözme",
      "labType": "İnovasyon & Robotik Mekatronik Laboratuvarı",
      "themeColor": "#D97706",
      "themeGradient": "linear-gradient(135deg, #D97706 0%, #8F489C 100%)",
      "icon": "fas fa-robot",
      "desc": "Servo ve DC motor kontrolü, motor sürücü entegreleri (L298N), Bluetooth/Kızılötesi iletişim, çizgi izleyen ve engelden kaçan otonom mobil robot prototipleri; LGS sürecinde analitik düşünmeyi destekleyen mantıksal problem çözme.",
      "term1": [
        {
          "unit": "1. Ünite: Motor Teknolojileri ve Hareket Sistemleri",
          "topics": "Servo motor açısal kontrolü (0-180 derece), DC motor çalışma prensibi ve L298N motor sürücü kartı."
        },
        {
          "unit": "2. Ünite: Mobil Robot Şasisi ve Mekanik Montaj",
          "topics": "Tekerlekler, redüktörlü motorlar, pil kutuları ve robot gövdesinin fiziksel montajı."
        },
        {
          "unit": "3. Ünite: Kızılötesi (IR) Sensörler ve Çizgi Takip Algoritması",
          "topics": "Siyah ve beyaz zemin yansıma farkı; 2'li TCRT5000 çizgi sensörüyle otonom rota takibi."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Engelden Kaçan Otonom Robot Yazılımı",
          "topics": "Ultrasonik sensörü servo üzerine monte ederek sağa-sola bakıp en açık yolu seçen otonom karar ağacı."
        },
        {
          "unit": "5. Ünite: Bluetooth ile Uzaktan Kumanda Edilen Robot",
          "topics": "HC-06 Bluetooth modülü; akıllı telefon uygulamasıyla kablosuz robot yönlendirme."
        },
        {
          "unit": "6. Ünite: TÜBİTAK ve TEKNOFEST Proje Metodolojisi",
          "topics": "Proje raporu yazma, bilimsel araştırma etiği, problem tespiti ve inovatif çözüm prototipleme."
        }
      ],
      "outcomes": [
        "Motor sürücü kartlarını mikrodenetleyiciye bağlayıp yön ve hız (PWM) kontrolünü sağlayabilme",
        "Çizgi izleyen veya engelden kaçan otonom bir mobil robotun mekanik ve yazılımsal entegrasyonunu yapabilme",
        "Kablosuz haberleşme modülleriyle (Bluetooth) cihazlar arası veri transferi gerçekleştirebilme",
        "Bir mühendislik problemini bilimsel araştırma basamaklarıyla ele alıp prototip ürün geliştirebilme"
      ],
      "tools": [
        "Arduino Robot Şasisi",
        "L298N Sürücü",
        "HC-SR04",
        "HC-06 Bluetooth",
        "Arduino IDE / mBlock"
      ],
      "project": "Engelden Kaçan & Bluetooth Kontrollü Hibrit Arama-Kurtarma Robotu",
      "projectDesc": "Öğrenciler 2 tekerlekli robot şasisi üzerine ultrasonik sensör ve Bluetooth modülü yerleştirir; robot hem otonom engelden kaçar hem de telefon üzerinden kumanda edilebilir.",
      "videoTitle": "8. Sınıf Arduino ile Engelden Kaçan Robot Yapımı",
      "videoUrl": "https://www.youtube.com/results?search_query=arduino+engelden+kacan+robot+yapimi",
      "quiz": [
        {
          "question": "Belirli bir açıya (örneğin 0 ile 180 derece arasına) hassas şekilde dönebilen motor türü hangisidir?",
          "options": [
            "Servo Motor",
            "DC Motor",
            "Step Motor",
            "Jeneratör"
          ],
          "answer": 0,
          "explanation": "Doğru! Servo motorlar istenen dereceye (açıya) hassas kilitlenebilen motorlardır."
        },
        {
          "question": "Robotumuzun önündeki engelleri görüp çarpmadan durması için hangi sensörü kullanırız?",
          "options": [
            "Ultrasonik Mesafe Sensörü",
            "Termometre",
            "Mikrofon",
            "Nem Sensörü"
          ],
          "answer": 0,
          "explanation": "Tebrikler! Ultrasonik sensör ses dalgalarıyla engelin mesafesini santimetre cinsinden ölçer."
        },
        {
          "question": "Arduino kartı ile akıllı telefon arasında kablosuz veri iletişimi kurmak için hangi modül tercih edilir?",
          "options": [
            "Bluetooth Modülü (HC-05/06)",
            "USB Kablosu",
            "HDMI Kablosu",
            "VGA Çevirici"
          ],
          "answer": 0,
          "explanation": "Harika! HC-05 veya HC-06 Bluetooth modülü telefonla kablosuz bağlantı sağlar."
        }
      ]
    },
    "sinif9": {
      "id": "sinif9",
      "projectImage": "assets/projects/sinif9.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "Lise",
      "gradeLabel": "9. Sınıf (14-15 Yaş)",
      "shortLabel": "9. Sınıf",
      "order": 9,
      "badge": "Lise • 14-15 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 1",
      "title": "9. Sınıf: MEB Bilgisayar Bilimi Kur 1: Python ile Algoritmik Problem Çözme & Veri Yapıları",
      "age": "14 - 15 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 1 Öğretim Programı • Metin Tabanlı Programlama",
      "labType": "Lise İleri Yazılım & Python Laboratuvarı",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fab fa-python",
      "desc": "Bloklardan profesyonel kodlamaya geçiş. Dünyanın en popüler dili Python ile sözdizimi (syntax), veri tipleri (str, int, float, bool), kullanıcıdan girdi alma (input), if-elif-else koşulları, for/while döngüleri ve modüler fonksiyonlar (def).",
      "term1": [
        {
          "unit": "1. Ünite: Bilgisayar Bilimi ve Algoritmik Düşünme Temelleri",
          "topics": "Algoritma karmaşıklığı (Big-O girişi), akış şemaları, Python kurulumu, IDE seçimi (VS Code / PyCharm / IDLE)."
        },
        {
          "unit": "2. Ünite: Python Temel Sözdizimi ve Veri Tipleri",
          "topics": "Değişken tanımlama kuralları, string, integer, float, boolean tipleri; tip dönüşümleri (type casting), print() ve input()."
        },
        {
          "unit": "3. Ünite: Aritmetik, İlişkisel ve Mantıksal Operatörler",
          "topics": "Matematiksel operatörler (+, -, *, /, //, %, **); karşılaştırma (==, !=, <, >) ve mantıksal bağlaçlar (and, or, not)."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Karar Yapıları ve Koşullu İfadeler",
          "topics": "if, elif, else blokları; girinti (indentation) kuralı; iç içe (nested) koşullu yapılar ile karar algoritmaları."
        },
        {
          "unit": "5. Ünite: Döngü Yapıları (Loops)",
          "topics": "for döngüsü, range() fonksiyonu, while döngüsü; break, continue ifadeleri; sonsuz döngüden kaçınma yöntemleri."
        },
        {
          "unit": "6. Ünite: Modüler Programlama ve Fonksiyonlar",
          "topics": "def ile parametreli ve return değerli fonksiyon yazımı; yerleşik modüller (math, random, time); ilk konsol mini uygulaması."
        }
      ],
      "outcomes": [
        "Python dilinin sözdizim kurallarını ve girintileme (indentation) standartlarını hatasız uygulayabilme",
        "Kullanıcı girdilerini doğru veri tiplerine dönüştürerek matematiksel ve mantıksal hesaplamalar yapabilme",
        "Karmaşık iş kurallarını if-elif-else karar ağaçları ve döngüler ile algoritmaya dökebilme",
        "Kod tekrarını önlemek için fonksiyonlar (def) tanımlayıp parametre ve dönüş değerleriyle çağırabilme"
      ],
      "tools": [
        "Python 3.12",
        "Visual Studio Code",
        "PyCharm Community",
        "Jupyter Notebook",
        "GitHub"
      ],
      "project": "Akıllı Öğrenci Not Takip & İstatistik Konsol Uygulaması",
      "projectDesc": "Öğrencinin yazılı ve performans notlarını alarak ortalama hesaplayan, harf notunu (AA, BA, FF) belirleyen, sınıf ortalaması ve başarı istatistiklerini raporlayan fonksiyonel Python programı.",
      "videoTitle": "9. Sınıf Python ile Sıfırdan Programlama & Algoritma Dersi",
      "videoUrl": "https://www.youtube.com/results?search_query=9.+sinif+bilgisayar+bilimi+python+dersleri",
      "quiz": [
        {
          "question": "Python'da kullanıcıdan konsol üzerinden klavye girdisi almak için hangi fonksiyon kullanılır?",
          "options": [
            "input()",
            "print()",
            "scanf()",
            "read()"
          ],
          "answer": 0,
          "explanation": "Doğru! input() fonksiyonu kullanıcının yazdığı metni string olarak programa aktarır."
        },
        {
          "question": "Python'da bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
          "options": [
            "def",
            "function",
            "fun",
            "void"
          ],
          "answer": 0,
          "explanation": "Harika! Python'da fonksiyonlar 'def fonksiyon_adi():' şeklinde tanımlanır."
        },
        {
          "question": "Python'da 15 // 2 işleminin (tamsayı bölme) sonucu nedir?",
          "options": [
            "7",
            "7.5",
            "1",
            "8"
          ],
          "answer": 0,
          "explanation": "Tebrikler! // operatörü ondalık kısmı atarak tamsayı bölme yapar (15 // 2 = 7)."
        }
      ]
    },
    "sinif10": {
      "id": "sinif10",
      "projectImage": "assets/projects/sinif10.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "Lise",
      "gradeLabel": "10. Sınıf (15-16 Yaş)",
      "shortLabel": "10. Sınıf",
      "order": 10,
      "badge": "Lise • 15-16 Yaş • Haftalık 2 Saat • Nesne Yönelimli Python",
      "title": "10. Sınıf: Python ile Nesne Yönelimli Programlama (OOP), Veri Yapıları & Dosya Yönetimi",
      "age": "15 - 16 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB Bilgisayar Bilimi Kur 1 İleri Seviye • OOP Mimarisi, Modüller & Veri Yapıları",
      "labType": "Lise İleri Yazılım & Python Laboratuvarı",
      "themeColor": "#14B8A6",
      "themeGradient": "linear-gradient(135deg, #14B8A6 0%, #8F489C 100%)",
      "icon": "fas fa-cubes",
      "desc": "Gelişmiş veri yapıları (Listeler, Demetler, Sözlükler, Kümeler), Nesne Yönelimli Programlama (OOP - Sınıflar, Nesneler, Kalıtım/Inheritance, Kapsülleme), Dosya Giriş/Çıkış işlemleri (.txt, .csv, .json) ve Hata Yönetimi (try-except).",
      "term1": [
        {
          "unit": "1. Ünite: Gelişmiş Veri Yapıları (Collections)",
          "topics": "Listeler (append, remove, pop, sort), List Comprehension, Demetler (Tuples), Kümeler (Sets) ve Sözlükler (Dictionaries - Key/Value)."
        },
        {
          "unit": "2. Ünite: Karakter Dizileri (Strings) İleri Metotları",
          "topics": "Dilimleme (slicing), split, join, replace, formatlama (f-strings) ve düzenli ifadeler (Regex temelleri)."
        },
        {
          "unit": "3. Ünite: Hata Yakalama ve İstisnalar (Exception Handling)",
          "topics": "try, except, else, finally blokları; IndexError, ValueError, ZeroDivisionError hatalarını güvenle yönetme."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Dosya İşlemleri ve Kalıcı Depolama",
          "topics": "open() fonksiyonu, modlar (r, w, a), dosya okuma/yazma, with context manager, CSV ve JSON formatında veri saklama."
        },
        {
          "unit": "5. Ünite: Nesne Yönelimli Programlama (OOP) Temelleri",
          "topics": "class, object, __init__ yapıcı metodu, self parametresi, örnek nitelikleri ve metotları."
        },
        {
          "unit": "6. Ünite: İleri OOP: Kalıtım (Inheritance) & Polimorfizm",
          "topics": "Üst sınıf / alt sınıf ilişkisi (super()), metot ezme (override) ve modüler paket yapısı oluşturma."
        }
      ],
      "outcomes": [
        "Karmaşık verileri Sözlük (Dictionary) ve Liste yapılarıyla verimli şekilde modelleyebilme",
        "Kullanıcı hatalarını ve çalışma zamanı çökmelerini try-except ile yakalayıp güvenli kod yazabilme",
        "Uygulama verilerini harici dosyalara (.txt, .json) kalıcı olarak kaydedip geri okuyabilme",
        "Sınıf (Class) ve Nesne (Object) mimarisiyle sürdürülebilir, modüler ve nesne yönelimli yazılım geliştirebilme"
      ],
      "tools": [
        "Python 3.12",
        "VS Code",
        "Git / GitHub",
        "JSON Tools",
        "Tkinter Arayüz Kütüphanesi"
      ],
      "project": "Nesne Yönelimli Kütüphane / Kitap Takip & Ödünç Verme Otomasyonu",
      "projectDesc": "Kitap, Öğrenci ve Kütüphane sınıfları içeren; JSON dosyasına kitapları kaydedip ödünç alma durumunu güncelleyen, arama ve filtreleme yapabilen OOP tabanlı masaüstü sistemi.",
      "videoTitle": "10. Sınıf Python Nesne Yönelimli Programlama (OOP) Sınıflar & Nesneler",
      "videoUrl": "https://www.youtube.com/results?search_query=python+oop+nesne+yonelimli+programlama+dersleri",
      "quiz": [
        {
          "question": "Python'da bir sınıfın (class) yapıcı kurucu metodu hangisidir?",
          "options": [
            "__init__()",
            "__start__()",
            "__build__()",
            "__create__()"
          ],
          "answer": 0,
          "explanation": "Doğru! __init__() metodu bir sınıftan nesne üretildiğinde ilk çalışan yapıcı metottur."
        },
        {
          "question": "Python'da anahtar-değer (Key-Value) çiftleriyle veri saklayan veri yapısı hangisidir?",
          "options": [
            "Sözlük (Dictionary)",
            "Liste (List)",
            "Demet (Tuple)",
            "Tamsayı (Integer)"
          ],
          "answer": 0,
          "explanation": "Tebrikler! Sözlükler {'ad': 'Ali', 'yas': 16} şeklinde key-value çiftleri tutar."
        },
        {
          "question": "Python'da dosya açma işlemlerinde dosyanın otomatik ve güvenli kapanmasını sağlayan yapı hangisidir?",
          "options": [
            "with open(...) as f:",
            "try open:",
            "file.start()",
            "loop open:"
          ],
          "answer": 0,
          "explanation": "Süper! 'with open' bağlam yöneticisi iş bitince dosyayı otomatik kapatır."
        }
      ]
    },
    "sinif11": {
      "id": "sinif11",
      "projectImage": "assets/projects/sinif11.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "Lise",
      "gradeLabel": "11. Sınıf (16-17 Yaş)",
      "shortLabel": "11. Sınıf",
      "order": 11,
      "badge": "Lise • 16-17 Yaş • Haftalık 2 Saat • MEB Bilgisayar Bilimi Kur 2",
      "title": "11. Sınıf: MEB Bilgisayar Bilimi Kur 2: Web Teknolojileri (HTML5/CSS3/JS) & SQL Veritabanı",
      "age": "16 - 17 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB Ortaöğretim Bilgisayar Bilimi Dersi Kur 2 • Web Mimarisi & İlişkisel Veritabanları",
      "labType": "Lise Web Geliştirme & Veritabanı Laboratuvarı",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-code",
      "desc": "İnternet mimarisi ve istemci-sunucu (Client-Server) modeli; semantik HTML5, modern CSS3 (Flexbox/Grid, Responsive tasarım), temel JavaScript DOM manipülasyonu ve ilişkisel veritabanı yönetim sistemi (SQL / SQLite).",
      "term1": [
        {
          "unit": "1. Ünite: Web Mimarisi ve Semantik HTML5",
          "topics": "DNS, IP, HTTP/HTTPS protokolleri; header, nav, section, article, footer etiketleri; form elemanları ve tablolar."
        },
        {
          "unit": "2. Ünite: Modern CSS3 Tasarımı ve Responsive Düzen",
          "topics": "Seçiciler, Kutu Modeli (Box Model), Flexbox ve CSS Grid, medya sorguları (@media) ile mobil uyumluluk."
        },
        {
          "unit": "3. Ünite: İstemci Taraflı JavaScript ve DOM Manipülasyonu",
          "topics": "Değişkenler (let, const), olay dinleyiciler (addEventListener), DOM elemanı seçme ve dinamik içerik güncelleme."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Veritabanı Temelleri ve İlişkisel Veri Modeli",
          "topics": "Veritabanı kavramı, tablolar, birincil anahtar (Primary Key), yabancı anahtar (Foreign Key), veri türleri."
        },
        {
          "unit": "5. Ünite: SQL ile Veri Yönetimi (CRUD İşlemleri)",
          "topics": "SELECT, INSERT INTO, UPDATE, DELETE sorguları; WHERE filtreleme, ORDER BY ve GROUP BY."
        },
        {
          "unit": "6. Ünite: Çoklu Tablolar ve Veri Bütünlüğü (JOIN)",
          "topics": "INNER JOIN, LEFT JOIN sorguları; Python ile SQLite veritabanı bağlantısı ve web formu entegrasyonu."
        }
      ],
      "outcomes": [
        "Semantik HTML5 ve modern CSS3 standartlarıyla mobil uyumlu (responsive) web sayfaları kodlayabilme",
        "JavaScript ile web sayfası kullanıcı etkileşimlerini (tıklama, form doğrulama) yönetebilme",
        "İlişkisel veritabanı şeması tasarlayıp tablolar arası ilişkileri (Primary/Foreign Key) kurabilme",
        "SQL diliyle veritabanı üzerinde sorgulama, ekleme, güncelleme ve silme (CRUD) işlemlerini gerçekleştirebilme"
      ],
      "tools": [
        "Visual Studio Code",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "SQLite / DB Browser",
        "Bootstrap 4/5"
      ],
      "project": "Dinamik E-Ticaret Ürün Kataloğu & SQL Veritabanı Yönetim Paneli",
      "projectDesc": "Öğrenciler HTML5/CSS3 ile responsive bir ürün listeleme arayüzü kodlar; SQLite veritabanındaki ürünleri JavaScript ile ekrana çeker, filtreleme ve arama yapar.",
      "videoTitle": "11. Sınıf Web Geliştirme HTML5/CSS3 & SQL Veritabanı Temelleri",
      "videoUrl": "https://www.youtube.com/results?search_query=html5+css3+javascript+sql+dersleri",
      "quiz": [
        {
          "question": "Bir web sayfasında kullanıcı tıkladığında arka plan rengini veya yazıyı değiştirmek için hangi dil kullanılır?",
          "options": [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
          ],
          "answer": 0,
          "explanation": "Doğru! HTML iskeleti, CSS görünümü, JavaScript ise etkileşimi ve mantığı yönetir."
        },
        {
          "question": "SQL dilinde bir tablodaki verileri seçip listelemek için hangi komut kullanılır?",
          "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DROP"
          ],
          "answer": 0,
          "explanation": "Harika! SELECT sorgusu veritabanındaki kayıtları filtreleyip listelemek için kullanılır."
        },
        {
          "question": "Web sayfalarının hem masaüstü hem de cep telefonlarında düzgün görünmesini sağlayan CSS tekniğine ne ad verilir?",
          "options": [
            "Responsive (Duyarlı) Tasarım",
            "Statik Tasarım",
            "Monolitik Tasarım",
            "Tablo Tasarımı"
          ],
          "answer": 0,
          "explanation": "Tebrikler! Medya sorguları ile ekran boyutuna göre şekil alan tasarıma Responsive Tasarım denir."
        }
      ]
    },
    "sinif12": {
      "id": "sinif12",
      "projectImage": "assets/projects/sinif12.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "Lise",
      "gradeLabel": "12. Sınıf (17-18 Yaş)",
      "shortLabel": "12. Sınıf",
      "order": 12,
      "badge": "Lise • 17-18 Yaş • Haftalık 2 Saat • İleri Teknoloji & Kariyer",
      "title": "12. Sınıf: Geleceğin Teknolojileri: Yapay Zeka (AI), Nesnelerin İnterneti (IoT) & Siber Güvenlik",
      "age": "17 - 18 Yaş Grubu",
      "hours": "Haftalık 2 Ders Saati",
      "scope": "MEB İleri Bilişim & İnovasyon • Yapay Zeka, Bulut Bilişim ve Üniversite/Kariyer Hazırlığı",
      "labType": "Yapay Zeka, IoT & Siber Güvenlik İleri Araştırma Laboratuvarı",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      "icon": "fas fa-brain",
      "desc": "Yapay zeka modelleri (Makine Öğrenmesi, Denetimli/Denetimsiz Öğrenme, Görüntü İşleme, Büyük Dil Modelleri/LLM ve Üretken Yapay Zeka), IoT ekosistemi ve ESP32 bulut entegrasyonu, etik siber güvenlik, KVKK ve üniversite bilişim kariyer rehberliği.",
      "term1": [
        {
          "unit": "1. Ünite: Yapay Zeka (AI) ve Makine Öğrenmesi Mimarisi",
          "topics": "Yapay zeka türleri (Dar AI, Genel AI), denetimli (supervised) ve denetimsiz (unsupervised) öğrenme; veri seti hazırlama ve model eğitimi."
        },
        {
          "unit": "2. Ünite: Bilgisayarlı Görü ve Görüntü İşleme",
          "topics": "OpenCV kütüphanesi; kamera görüntüsünden yüz algılama, el hareketleri takibi ve nesne sınıflandırma modelleri."
        },
        {
          "unit": "3. Ünite: Büyük Dil Modelleri (LLM) ve Üretken Yapay Zeka",
          "topics": "Prompt mühendisliği, transformer mimarisi, etik yapay zeka kullanımı, veri telifleri ve yapay zeka halüsinasyonu."
        }
      ],
      "term2": [
        {
          "unit": "4. Ünite: Nesnelerin İnterneti (IoT) ve Akıllı Sistemler",
          "topics": "ESP32 Wi-Fi mikrodenetleyicisi, MQTT protokolü, bulut IoT panoları (ThingSpeak, Adafruit IO) üzerinden canlı veri izleme."
        },
        {
          "unit": "5. Ünite: Siber Güvenlik Temelleri ve Savunma Stratejileri",
          "topics": "Ağ saldırı türleri (Phishing, DDoS, Man-in-the-middle), şifreleme algoritmaları (AES, RSA), sızma testi etiği ve KVKK."
        },
        {
          "unit": "6. Ünite: Dijital Portfolyo ve Bilişim Kariyer Haritası",
          "topics": "GitHub profili oluşturma, açık kaynak projelere katkı, yazılım mühendisliği, yapay zeka uzmanlığı ve siber savunma kariyer yolları."
        }
      ],
      "outcomes": [
        "Makine öğrenmesi modellerinin eğitim ve test aşamalarını kavrayıp görsel sınıflandırma projesi geliştirebilme",
        "IoT cihazlarını bulut platformlarına bağlayarak sensör verilerini uzaktan izleyip kontrol edebilme",
        "Temel ağ protokollerini analiz edip siber saldırı vektörlerine karşı savunma mekanizmalarını uygulayabilme",
        "Bir yazılım projesini baştan sona dokümante edip ulusal/uluslararası yarışmalara ve üniversite kariyerine hazırlayabilme"
      ],
      "tools": [
        "Google Teachable Machine",
        "Python OpenCV / Scikit-Learn",
        "ESP32 IoT Kiti",
        "Wireshark",
        "Hugging Face"
      ],
      "project": "Yapay Zeka Destekli Akıllı Kampüs Güvenlik & Enerji İzleme IoT Sistemi",
      "projectDesc": "Kamera görüntüsünden yüz/kart algılayıp giriş izni veren yapay zeka modeli ile sınıflardaki sıcaklık/ışık verilerini buluta aktarıp enerji tasarrufu sağlayan ESP32 tabanlı entegre IoT platformu.",
      "videoTitle": "12. Sınıf Yapay Zeka & Makine Öğrenmesi Teachable Machine Eğitimi",
      "videoUrl": "https://www.youtube.com/results?search_query=yapay+zeka+makine+ogrenmesi+teachable+machine+dersi",
      "quiz": [
        {
          "question": "Bir bilgisayarın etiketlenmiş verilerden (örneğin kedi ve köpek fotoğraflarından) öğrenmesine ne ad verilir?",
          "options": [
            "Denetimli Öğrenme (Supervised Learning)",
            "Denetimsiz Öğrenme",
            "Donanım Biçimlendirme",
            "Siber Saldırı"
          ],
          "answer": 0,
          "explanation": "Doğru! Önceden etiketlenmiş girdi ve çıktılarla model eğitmeye 'Denetimli Öğrenme' denir."
        },
        {
          "question": "Nesnelerin İnterneti (IoT) projelerinde Wi-Fi ve Bluetooth bağlantısıyla verileri buluta aktaran popüler kart hangisidir?",
          "options": [
            "ESP32",
            "Sadece pil",
            "Flash Bellek",
            "Klavye"
          ],
          "answer": 0,
          "explanation": "Tebrikler! ESP32 üzerinde dahili Wi-Fi ve Bluetooth bulunduran güçlü bir IoT mikrodenetleyicisidir."
        },
        {
          "question": "Yapay zekanın kendisine verilen prompt (komut) doğrultusunda yeni metin, kod veya görsel üretmesine ne denir?",
          "options": [
            "Üretken Yapay Zeka (Generative AI)",
            "Sadece Veri Tabanı",
            "Hesap Makinesi",
            "İşletim Sistemi"
          ],
          "answer": 0,
          "explanation": "Harika! Yeni ve özgün içerik üretebilen yapay zeka sistemlerine Üretken Yapay Zeka (GenAI) denir."
        }
      ]
    }
  },
  "en": {
    "anasinifi": {
      "id": "anasinifi",
      "projectImage": "assets/projects/anasinifi.jpg",
      "stage": 1,
      "category": "okuloncesi",
      "categoryLabel": "Preschool",
      "gradeLabel": "Kindergarten (Ages 4-5)",
      "shortLabel": "Kindergarten",
      "order": 0,
      "badge": "Preschool • Ages 4-5 • 1-2 Hours/Week",
      "title": "Kindergarten: Unplugged Coding & Cognitive Foundations",
      "age": "Ages 4 - 5",
      "hours": "1 - 2 Hours / Week",
      "scope": "1-2 Hours/Week • Cognitive Development & Motor Coordination",
      "labType": "Robotics & Unplugged Play Mat Workshop",
      "themeColor": "#EC4899",
      "themeGradient": "linear-gradient(135deg, #EC4899 0%, #8F489C 100%)",
      "icon": "fas fa-shapes",
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
      "project": "Colorful Maze Quest: Programmed Treasure Hunt with Bee-Bot",
      "projectDesc": "Establishing orientation, sequencing, and cause-and-effect through tangible materials and game-based activities without screen dependency.",
      "videoTitle": "Kindergarten - Colorful Maze Quest: Programmed Treasure Hunt with Bee-Bot",
      "videoUrl": "https://www.youtube.com/results?search_query=okul+oncesi+bilgisayarsiz+kodlama+beebot",
      "quiz": [
        {
          "question": "Which button should we press to make our Bee-Bot robot move one step forward?",
          "options": [
            "Up / Forward Arrow Key",
            "Back Arrow Key",
            "Cancel Key",
            "Red Button"
          ],
          "answer": 0,
          "explanation": "Awesome! The up arrow key sends a command to our robot to move exactly 1 step forward."
        },
        {
          "question": "When sitting at the computer, approximately how much distance should there be between eyes and screen?",
          "options": [
            "One arm length distance (50-60 cm)",
            "Close enough for our nose to touch",
            "10 meters away",
            "We should place the screen behind us"
          ],
          "answer": 0,
          "explanation": "Correct! For eye health, there should be at least an arm length (around 50 cm) distance from the screen."
        },
        {
          "question": "In daily morning routine, what do we do FIRST after waking up?",
          "options": [
            "Get out of bed",
            "Put on our shoes",
            "Go to school",
            "Eat dinner"
          ],
          "answer": 0,
          "explanation": "Super logic! In algorithms, steps happen in sequence; the first step is getting out of bed."
        }
      ]
    },
    "sinif1": {
      "id": "sinif1",
      "projectImage": "assets/projects/sinif1.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "Primary School",
      "gradeLabel": "1st Grade (Ages 6-7)",
      "shortLabel": "1st Grade",
      "order": 1,
      "badge": "Primary • Ages 6-7 • 1-2 Hours/Week",
      "title": "1st Grade: Digital Literacy, Mouse/Keyboard Mastery & Visual Algorithms",
      "age": "Ages 6 - 7",
      "hours": "1 - 2 Hours / Week",
      "scope": "1-2 Hours/Week • Foundational IT Skills & Psychomotor Development",
      "labType": "Primary IT & Multimedia Lab",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fas fa-mouse",
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
      "project": "My Digital Art Gallery & 5-Step Algorithmic Story Card",
      "projectDesc": "First structured digital interaction. Developing fine motor skills for mouse and keyboard while solving visual algorithm puzzles.",
      "videoTitle": "1st Grade - My Digital Art Gallery & 5-Step Algorithmic Story Card",
      "videoUrl": "https://www.youtube.com/results?search_query=1.+sinif+bilisim+fare+klavye+egitimi",
      "quiz": [
        {
          "question": "Which computer part shows us pictures, videos, and game screens?",
          "options": [
            "Monitor (Display Screen)",
            "Mouse",
            "Keyboard",
            "Microphone"
          ],
          "answer": 0,
          "explanation": "Great! The monitor displays all visuals, text, and games."
        },
        {
          "question": "Which mouse action do we use to open an application or file on desktop?",
          "options": [
            "Double Click with Left Button",
            "Hold Mouse in Air",
            "Press Right Click 10 Times",
            "Turn Mouse Upside Down"
          ],
          "answer": 0,
          "explanation": "Correct! A quick double click with the left mouse button opens files and folders."
        },
        {
          "question": "Which keyboard key is the longest key used to leave a space between words?",
          "options": [
            "Space Bar",
            "Enter Key",
            "Esc Key",
            "Number 1 Key"
          ],
          "answer": 0,
          "explanation": "Super! The Space bar is the longest key on the keyboard, creating blank spaces between words."
        }
      ]
    },
    "sinif2": {
      "id": "sinif2",
      "projectImage": "assets/projects/sinif2.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "Primary School",
      "gradeLabel": "2nd Grade (Ages 7-8)",
      "shortLabel": "2nd Grade",
      "order": 2,
      "badge": "Primary • Ages 7-8 • 2 Hours/Week",
      "title": "2nd Grade: Sequential Logic, Loops & Interactive Tales with ScratchJr",
      "age": "Ages 7 - 8",
      "hours": "1 - 2 Hours / Week",
      "scope": "2 Hours/Week • Algorithmic Thinking & Block Coding Foundations",
      "labType": "Coding & Digital Animation Lab",
      "themeColor": "#10B981",
      "themeGradient": "linear-gradient(135deg, #10B981 0%, #8F489C 100%)",
      "icon": "fas fa-puzzle-piece",
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
      "project": "Animated Audio Storybook Narrated by Student via ScratchJr",
      "projectDesc": "Introducing repetition loops and interactive animated stories in ScratchJr, enabling students to become creators rather than passive consumers.",
      "videoTitle": "2nd Grade - Animated Audio Storybook Narrated by Student via ScratchJr",
      "videoUrl": "https://www.youtube.com/results?search_query=scratchjr+dersleri+ilkokul",
      "quiz": [
        {
          "question": "In ScratchJr, which block is placed at the very beginning to start our code running?",
          "options": [
            "Green Flag Block",
            "Red Stop Button",
            "Paint Bucket",
            "Trash Can Block"
          ],
          "answer": 0,
          "explanation": "Awesome! The green flag block is the main trigger that starts our animation."
        },
        {
          "question": "If we want our character to move 3 steps forward, what number should we set under the blue motion block?",
          "options": [
            "Set to 3",
            "Set to 0",
            "Leave blank",
            "Set to -5"
          ],
          "answer": 0,
          "explanation": "Congratulations! Setting the parameter to 3 makes it advance exactly 3 steps."
        },
        {
          "question": "What is the computing term for identifying and fixing an error in our running code?",
          "options": [
            "Debugging",
            "Erasing screen",
            "Turning off PC",
            "Exiting game"
          ],
          "answer": 0,
          "explanation": "Super! The process of finding and fixing errors is called \"Debugging\"."
        }
      ]
    },
    "sinif3": {
      "id": "sinif3",
      "projectImage": "assets/projects/sinif3.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "Primary School",
      "gradeLabel": "3rd Grade (Ages 8-9)",
      "shortLabel": "3rd Grade",
      "order": 3,
      "badge": "Primary • Ages 8-9 • 2 Hours/Week",
      "title": "3rd Grade: Scratch 3.0 Environment, Coordinates & Decision Logic",
      "age": "Ages 8 - 9",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Block Programming & Algorithmic Problem Solving",
      "labType": "Game Development & Logic Lab",
      "themeColor": "#F59E0B",
      "themeGradient": "linear-gradient(135deg, #F59E0B 0%, #8F489C 100%)",
      "icon": "fas fa-gamepad",
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
      "project": "Aquarium Ecosystem: Interactive Simulation with Feeding Fish",
      "projectDesc": "Exploring Scratch 3.0. Sprite motion on X-Y plane, sound synthesis, costume animations, and conditional statements (If-Then).",
      "videoTitle": "3rd Grade - Aquarium Ecosystem: Interactive Simulation with Feeding Fish",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+3.0+elma+toplama+oyunu+dersi",
      "quiz": [
        {
          "question": "To move a character to the RIGHT on the Scratch stage, which coordinate axis value do we increase?",
          "options": [
            "X axis (change x by +10)",
            "Y axis",
            "Z axis",
            "Volume level"
          ],
          "answer": 0,
          "explanation": "Great! X controls horizontal motion (left-right), while Y controls vertical motion (up-down)."
        },
        {
          "question": "Which block makes a piece of code run continuously without stopping during the game?",
          "options": [
            "Forever Loop Block",
            "Wait 1 sec Block",
            "If-Then Block",
            "Stop All Block"
          ],
          "answer": 0,
          "explanation": "Congratulations! The Forever block repeats the enclosed commands continuously."
        },
        {
          "question": "Which block prevents our character from vanishing when hitting the stage edge?",
          "options": [
            "If on edge, bounce",
            "Hide",
            "Reset x to 0",
            "Set rotation style off"
          ],
          "answer": 0,
          "explanation": "Awesome! \"If on edge, bounce\" turns the character around when touching screen borders."
        }
      ]
    },
    "sinif4": {
      "id": "sinif4",
      "projectImage": "assets/projects/sinif4.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "Primary School",
      "gradeLabel": "4th Grade (Ages 9-10)",
      "shortLabel": "4th Grade",
      "order": 4,
      "badge": "Primary • Ages 9-10 • 2 Hours/Week",
      "title": "4th Grade: 2D Game Architecture, Variables & Digital Citizenship",
      "age": "Ages 9 - 10",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Advanced Block Coding & Game Mechanics",
      "labType": "Advanced Algorithm & Software Lab",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-layer-group",
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
      "project": "Save the Planet: Multi-Level Zero Waste 2D Platform Game",
      "projectDesc": "Game dynamics: Scoreboards, lives, timer systems, broadcasting messages across sprites, and multiplayer interactions.",
      "videoTitle": "4th Grade - Save the Planet: Multi-Level Zero Waste 2D Platform Game",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+degiskenler+ve+labirent+oyunu",
      "quiz": [
        {
          "question": "Which structure in Scratch is used to store and update changing values like game score or timer?",
          "options": [
            "Variable",
            "Costume",
            "Sound Block",
            "Backdrop"
          ],
          "answer": 0,
          "explanation": "Awesome! Variables store data values in memory that can be changed during game execution."
        },
        {
          "question": "If we want game-over to trigger when remaining lives drop to zero, which condition is used?",
          "options": [
            "If lives = 0 then Game Over",
            "If lives > 10 then Game Over",
            "Wait 10 seconds",
            "Change color by 25"
          ],
          "answer": 0,
          "explanation": "Super! The condition \"lives = 0\" accurately triggers the end of the game."
        },
        {
          "question": "Which mechanism allows one sprite to trigger actions in other sprites simultaneously?",
          "options": [
            "Broadcast message (Send & Receive)",
            "Turn off monitor",
            "Delete sprite",
            "Stop project"
          ],
          "answer": 0,
          "explanation": "Correct! Broadcasting messages coordinates event-driven behaviors across sprites."
        }
      ]
    },
    "sinif5": {
      "id": "sinif5",
      "projectImage": "assets/projects/sinif5.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "Middle School",
      "gradeLabel": "5th Grade (Ages 10-11)",
      "shortLabel": "5th Grade",
      "order": 5,
      "badge": "Middle School • Ages 10-11 • 2 Hours/Week",
      "title": "5th Grade: Information Technologies & Software Curriculum",
      "age": "Ages 10 - 11",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Ministry of Education Grade 5 IT Curriculum Standards",
      "labType": "Computer Architecture & Network Lab",
      "themeColor": "#059669",
      "themeGradient": "linear-gradient(135deg, #059669 0%, #8F489C 100%)",
      "icon": "fas fa-laptop",
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
      "project": "Campus Cyber Safety Guide: Interactive Presentation & IT Quiz Game",
      "projectDesc": "Digital literacy, hardware-software anatomy, file structures, cyber hygiene, ethical communication, and algorithmic problem-solving.",
      "videoTitle": "5th Grade - Campus Cyber Safety Guide: Interactive Presentation & IT Quiz Game",
      "videoUrl": "https://www.youtube.com/results?search_query=5.+sinif+bilisim+teknolojileri+dersi+konu+anlatimi",
      "quiz": [
        {
          "question": "Which core computer component is known as the \"Brain of the Computer\" that processes instructions?",
          "options": [
            "CPU (Central Processing Unit)",
            "Mouse Pad",
            "Monitor Glass",
            "Cooling Fan"
          ],
          "answer": 0,
          "explanation": "Correct! The CPU performs all calculations and controls system operations."
        },
        {
          "question": "What type of memory is volatile and loses its contents when the computer is powered off?",
          "options": [
            "RAM (Random Access Memory)",
            "SSD / Hard Disk",
            "USB Flash Drive",
            "Optical DVD"
          ],
          "answer": 0,
          "explanation": "Awesome! RAM is temporary memory cleared upon reboot or power-down."
        },
        {
          "question": "Which of the following is considered a strong, secure password practice?",
          "options": [
            "12+ characters with upper/lowercase, numbers, and symbols",
            "Your birthday (123456)",
            "Your pet name only",
            "Writing \"password\""
          ],
          "answer": 0,
          "explanation": "Super! Complex passwords with mixed case, digits, and special symbols resist brute force."
        }
      ]
    },
    "sinif6": {
      "id": "sinif6",
      "projectImage": "assets/projects/sinif6.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "Middle School",
      "gradeLabel": "6th Grade (Ages 11-12)",
      "shortLabel": "6th Grade",
      "order": 6,
      "badge": "Middle School • Ages 11-12 • 2 Hours/Week",
      "title": "6th Grade: Networking, Spreadsheets & Tinkercad 3D Design",
      "age": "Ages 11 - 12",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Ministry of Education Grade 6 IT Curriculum Standards",
      "labType": "3D Design & Maker Lab",
      "themeColor": "#0284C7",
      "themeGradient": "linear-gradient(135deg, #0284C7 0%, #8F489C 100%)",
      "icon": "fas fa-cube",
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
      "project": "Personalized Ergonomic Desk Phone Stand for 3D Printing & Cost Analysis Sheet",
      "projectDesc": "Network topologies, spreadsheet data computations, and 3D geometric modeling with Autodesk Tinkercad for additive manufacturing.",
      "videoTitle": "6th Grade - Personalized Ergonomic Desk Phone Stand for 3D Printing & Cost Analysis Sheet",
      "videoUrl": "https://www.youtube.com/results?search_query=6.+sinif+tinkercad+3d+tasarim+dersi",
      "quiz": [
        {
          "question": "In Tinkercad 3D modeling, which 3 axes are used to determine height, width, and depth?",
          "options": [
            "X (width), Y (depth), Z (height)",
            "Only X and Y",
            "A, B, and C lines",
            "North, South, and West"
          ],
          "answer": 0,
          "explanation": "Awesome! In 3D space, X, Y, and Z define 3D coordinates."
        },
        {
          "question": "To carve a hole through a 3D solid object in Tinkercad, what property is given to the cutting shape?",
          "options": [
            "Hole (Transparent Cutout) property",
            "Solid color yellow",
            "Double size",
            "Hide object"
          ],
          "answer": 0,
          "explanation": "Correct! Marking an object as a \"Hole\" and grouping it subtracts its volume."
        },
        {
          "question": "In flowchart diagrams, which shape represents a decision or condition point (Yes/No)?",
          "options": [
            "Diamond shape (Rhombus)",
            "Rectangle",
            "Oval / Rounded rectangle",
            "Circle"
          ],
          "answer": 0,
          "explanation": "Super! The diamond symbol represents decision logic in flowcharts."
        }
      ]
    },
    "sinif7": {
      "id": "sinif7",
      "projectImage": "assets/projects/sinif7.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "Middle School",
      "gradeLabel": "7th Grade (Ages 12-13)",
      "shortLabel": "7th Grade",
      "order": 7,
      "badge": "Middle School • Ages 12-13 • 2 Hours/Week • micro:bit",
      "title": "7th Grade: Physical Computing, Sensors & BBC micro:bit Ecosystem",
      "age": "Ages 12 - 13",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Physical Computing, Sensor Architecture & Maker Culture",
      "labType": "Electronics & Physical Computing Lab",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #8F489C 100%)",
      "icon": "fas fa-microchip",
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
      "project": "Smart Greenhouse System: Automated Soil Moisture & Sunlight Irrigation Alarm",
      "projectDesc": "Bringing code to life. BBC micro:bit board, MakeCode visual blocks, onboard environmental sensors, and wireless mesh telemetry.",
      "videoTitle": "7th Grade - Smart Greenhouse System: Automated Soil Moisture & Sunlight Irrigation Alarm",
      "videoUrl": "https://www.youtube.com/results?search_query=7.+sinif+arduino+tinkercad+circuits+dersleri",
      "quiz": [
        {
          "question": "Which sensor in Arduino circuits is used to detect ambient light levels?",
          "options": [
            "LDR (Light Dependent Resistor)",
            "Ultrasonic Distance Sensor",
            "Buzzer Speaker",
            "Servo Motor"
          ],
          "answer": 0,
          "explanation": "Awesome! An LDR changes its electrical resistance based on light falling on it."
        },
        {
          "question": "Why must a 220 or 330 ohm resistor be connected in series with an LED on a breadboard?",
          "options": [
            "To limit current and prevent burning out the LED",
            "To change LED color",
            "To make sound louder",
            "To save battery power"
          ],
          "answer": 0,
          "explanation": "Correct! Resistors protect LEDs from excessive current."
        },
        {
          "question": "In an Arduino C++ program, which function runs continuously in an endless loop?",
          "options": [
            "void loop()",
            "void setup()",
            "int main()",
            "void exit()"
          ],
          "answer": 0,
          "explanation": "Super! \"void loop()\" executes its body continuously as long as Arduino has power."
        }
      ]
    },
    "sinif8": {
      "id": "sinif8",
      "projectImage": "assets/projects/sinif8.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "Middle School",
      "gradeLabel": "8th Grade (Ages 13-14)",
      "shortLabel": "8th Grade",
      "order": 8,
      "badge": "Middle School • Ages 13-14 • 2 Hours/Week • Arduino",
      "title": "8th Grade: Arduino UNO, Circuit Prototyping, Motors & Autonomous Robotics",
      "age": "Ages 13 - 14",
      "hours": "2 Hours / Week",
      "scope": "2 Hours/Week • Applied Robotics, Microcontrollers & Embedded Systems",
      "labType": "Robotics & Autonomous Systems Lab",
      "themeColor": "#D97706",
      "themeGradient": "linear-gradient(135deg, #D97706 0%, #8F489C 100%)",
      "icon": "fas fa-robot",
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
      "project": "Autonomous Obstacle-Avoiding Rover & Smart Ultrasonic Parking Sensor",
      "projectDesc": "Arduino UNO architecture, breadboard circuitry, analog sensor scaling, H-Bridge motor drivers, and obstacle-avoiding mobile robots.",
      "videoTitle": "8th Grade - Autonomous Obstacle-Avoiding Rover & Smart Ultrasonic Parking Sensor",
      "videoUrl": "https://www.youtube.com/results?search_query=arduino+engelden+kacan+robot+yapimi",
      "quiz": [
        {
          "question": "How does an HC-SR04 ultrasonic sensor measure distance to an obstacle?",
          "options": [
            "By emitting high-frequency sound waves and measuring reflection time",
            "Using camera vision",
            "Through magnetic resonance",
            "By temperature sensing"
          ],
          "answer": 0,
          "explanation": "Awesome! It emits a 40kHz ultrasound pulse and computes distance from echo return duration."
        },
        {
          "question": "Which component is required between an Arduino and DC motors to supply higher current and voltage?",
          "options": [
            "Motor Driver Module (e.g., L298N)",
            "Direct USB Cable",
            "A small LED diode",
            "A 10k resistor only"
          ],
          "answer": 0,
          "explanation": "Correct! Motor drivers provide sufficient external current without overloading microcontroller pins."
        },
        {
          "question": "What type of motor allows precise angle positioning (between 0 and 180 degrees)?",
          "options": [
            "Servo Motor",
            "Standard DC Motor",
            "Vibration Motor",
            "AC Fan Motor"
          ],
          "answer": 0,
          "explanation": "Super! Servo motors rotate to precise angular positions using PWM feedback signals."
        }
      ]
    },
    "sinif9": {
      "id": "sinif9",
      "projectImage": "assets/projects/sinif9.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "High School",
      "gradeLabel": "9th Grade (Ages 14-15)",
      "shortLabel": "9th Grade",
      "order": 9,
      "badge": "High School • Ages 14-15 • 2 Hours/Week • MoNE Computer Science Track 1",
      "title": "9th Grade: MoNE Computer Science Track 1: Algorithmic Problem Solving & Data Structures with Python",
      "age": "Ages 14 - 15",
      "hours": "2 Hours / Week",
      "scope": "MoNE Secondary Computer Science Curriculum Track 1 • Text-Based Programming",
      "labType": "High School Advanced Software & Python Lab",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fab fa-python",
      "desc": "Transitioning from blocks to professional coding. Core syntax, data types (str, int, float, bool), console user inputs, if-elif-else branching conditions, for/while iteration loops, and modular functions (def) in Python 3.",
      "term1": [
        {
          "unit": "Unit 1: Computer Science & Foundations of Algorithmic Thinking",
          "topics": "Algorithm complexity (intro to Big-O), flowcharts, Python installation, IDE setup (VS Code / PyCharm / IDLE)."
        },
        {
          "unit": "Unit 2: Python Core Syntax & Data Types",
          "topics": "Variable naming rules, string, integer, float, boolean types; type casting, print() and input()."
        },
        {
          "unit": "Unit 3: Arithmetic, Relational & Logical Operators",
          "topics": "Mathematical operators (+, -, *, /, //, %, **); relational comparisons (==, !=, <, >) and logical operators (and, or, not)."
        }
      ],
      "term2": [
        {
          "unit": "Unit 4: Decision Structures & Conditional Statements",
          "topics": "if, elif, else blocks; nested conditionals, logical branching algorithms, and debugging techniques."
        },
        {
          "unit": "Unit 5: Loop Structures (Loops)",
          "topics": "for loops, range() function, while loops; counter pattern, infinite loops, and break/continue statements."
        },
        {
          "unit": "Unit 6: Modular Programming & Functions",
          "topics": "Function definition with def, parameters and arguments, return statement; built-in functions and math/random modules."
        }
      ],
      "outcomes": [
        "Mastering text-based programming fundamentals and writing syntax-compliant Python code",
        "Constructing robust decision trees using if-elif-else statements and logical operators",
        "Optimizing repetitive computational problems with for and while loop constructs",
        "Designing clean, modular and reusable software architectures using def functions"
      ],
      "tools": [
        "Python 3.12",
        "VS Code / Thonny",
        "Flowgorithm",
        "Turtle Graphics"
      ],
      "project": "Interactive Console-Based Student Grade Tracking & Statistics Calculator",
      "projectDesc": "A Python console application that accepts user grades, determines letter marks with conditionals, calculates class averages with loops, and outputs structured reports via modular functions.",
      "videoTitle": "9th Grade - Algorithmic Problem Solving & Console Application with Python",
      "videoUrl": "https://www.youtube.com/results?search_query=9.+sinif+bilgisayar+bilimi+python+dersleri",
      "quiz": [
        {
          "question": "In Python, which function is used to display output on the screen console?",
          "options": [
            "print()",
            "echo()",
            "console.log()",
            "output()"
          ],
          "answer": 0,
          "explanation": "Awesome! The built-in print() function outputs strings and data to terminal."
        },
        {
          "question": "What is the correct syntax for a conditional check in Python?",
          "options": [
            "if x > 10:",
            "if (x > 10) then",
            "if x > 10;",
            "when x > 10 do"
          ],
          "answer": 0,
          "explanation": "Correct! Python uses \"if condition:\" followed by an indented block."
        },
        {
          "question": "Which data type is used to store whole integers like 42 in Python?",
          "options": [
            "int",
            "float",
            "str",
            "bool"
          ],
          "answer": 0,
          "explanation": "Super! Integer numbers without decimal fractions belong to the \"int\" type."
        }
      ]
    },
    "sinif10": {
      "id": "sinif10",
      "projectImage": "assets/projects/sinif10.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "High School",
      "gradeLabel": "10th Grade (Ages 15-16)",
      "shortLabel": "10th Grade",
      "order": 10,
      "badge": "High School • Ages 15-16 • 2 Hours/Week • Object-Oriented Python",
      "title": "10th Grade: Object-Oriented Programming (OOP) in Python, Data Structures & File Management",
      "age": "Ages 15 - 16",
      "hours": "2 Hours / Week",
      "scope": "MoNE Computer Science Track 1 Advanced Level • OOP Architecture, Modules & Data Structures",
      "labType": "High School Advanced Software & Python Lab",
      "themeColor": "#14B8A6",
      "themeGradient": "linear-gradient(135deg, #14B8A6 0%, #8F489C 100%)",
      "icon": "fas fa-cubes",
      "desc": "Advanced data structures (Lists, Tuples, Dictionaries, Sets), Object-Oriented Programming (OOP - Classes, Objects, Inheritance, Encapsulation), File Input/Output (.txt, .csv, .json), and Exception Handling (try-except).",
      "term1": [
        {
          "unit": "Unit 1: Advanced Data Structures (Collections)",
          "topics": "Lists (append, remove, pop, sort), List Comprehension, Tuples, Sets, and Dictionaries (Key/Value architecture)."
        },
        {
          "unit": "Unit 2: Advanced String Manipulation & Methods",
          "topics": "String slicing, split, join, replace, string formatting (f-strings), and fundamentals of regular expressions (Regex)."
        },
        {
          "unit": "Unit 3: Exception Handling & Robust Code Design",
          "topics": "try, except, else, finally blocks; safely handling IndexError, ValueError, and ZeroDivisionError runtime faults."
        }
      ],
      "term2": [
        {
          "unit": "Unit 4: File Operations & Persistent Storage",
          "topics": "open() function, file access modes (r, w, a), file I/O with 'with' context manager, persisting data in CSV and JSON formats."
        },
        {
          "unit": "Unit 5: Object-Oriented Programming (OOP) Fundamentals",
          "topics": "Classes, objects, __init__ constructor method, 'self' parameter, instance attributes and methods."
        },
        {
          "unit": "Unit 6: Advanced OOP: Inheritance & Polymorphism",
          "topics": "Superclass/subclass hierarchy with super(), method overriding, encapsulation, and modular package architecture."
        }
      ],
      "outcomes": [
        "Modeling structured datasets efficiently using Dictionaries and multi-dimensional Lists",
        "Writing safe, fault-tolerant code by handling runtime exceptions via try-except blocks",
        "Persisting and retrieving application states across external storage files (.txt, .json)",
        "Engineering sustainable, modular applications following Object-Oriented Principles (OOP)"
      ],
      "tools": [
        "Python 3.12",
        "Visual Studio Code",
        "Jupyter Notebook",
        "GitHub Desktop"
      ],
      "project": "Object-Oriented School Library & Book Lending Management System",
      "projectDesc": "A comprehensive Python software system featuring Book and Student classes (OOP), handling loan and return transactions, with permanent JSON data storage.",
      "videoTitle": "10th Grade - Python Object-Oriented Programming (OOP) & File Management",
      "videoUrl": "https://www.youtube.com/results?search_query=python+oop+nesne+yonelimli+programlama+dersleri",
      "quiz": [
        {
          "question": "In Object-Oriented Programming (OOP), what is a blueprint template used to create objects called?",
          "options": [
            "Class",
            "Function",
            "Variable",
            "Module"
          ],
          "answer": 0,
          "explanation": "Awesome! A class defines attributes and methods that instantiated objects possess."
        },
        {
          "question": "In Python classes, which special method is called automatically during object construction?",
          "options": [
            "__init__()",
            "__main__()",
            "__start__()",
            "__create__()"
          ],
          "answer": 0,
          "explanation": "Correct! The constructor method __init__ initializes instance attributes upon creation."
        },
        {
          "question": "Which keyword is used to gracefully catch runtime exceptions in Python?",
          "options": [
            "try ... except",
            "catch ... throw",
            "if ... error",
            "test ... fail"
          ],
          "answer": 0,
          "explanation": "Super! A try-except block prevents program crashes when runtime errors occur."
        }
      ]
    },
    "sinif11": {
      "id": "sinif11",
      "projectImage": "assets/projects/sinif11.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "High School",
      "gradeLabel": "11th Grade (Ages 16-17)",
      "shortLabel": "11th Grade",
      "order": 11,
      "badge": "High School • Ages 16-17 • 2 Hours/Week • MoNE Computer Science Track 2",
      "title": "11th Grade: MoNE Computer Science Track 2: Web Technologies (HTML5/CSS3/JS) & SQL Databases",
      "age": "Ages 16 - 17",
      "hours": "2 Hours / Week",
      "scope": "MoNE Secondary Computer Science Curriculum Track 2 • Web Architecture & Relational Databases",
      "labType": "High School Web Development & Database Lab",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-code",
      "desc": "Internet architecture and Client-Server paradigm; semantic HTML5, modern CSS3 (Flexbox/Grid, Responsive design), client-side JavaScript DOM manipulation, and relational database systems (SQL / SQLite).",
      "term1": [
        {
          "unit": "Unit 1: Web Architecture & Semantic HTML5",
          "topics": "DNS, IP, HTTP/HTTPS protocols; semantic tags (header, nav, section, article, footer); web forms and tables."
        },
        {
          "unit": "Unit 2: Modern CSS3 Design & Responsive Layouts",
          "topics": "CSS selectors, the Box Model, Flexbox and CSS Grid layouts, responsive media queries (@media) for mobile optimization."
        },
        {
          "unit": "Unit 3: Client-Side JavaScript & DOM Manipulation",
          "topics": "Variables (let, const), event listeners (addEventListener), selecting DOM elements, and real-time interactive UI updates."
        }
      ],
      "term2": [
        {
          "unit": "Unit 4: Database Foundations & Relational Data Model",
          "topics": "Database architecture, tables, Primary Key, Foreign Key relationships, and relational data types."
        },
        {
          "unit": "Unit 5: Data Management with SQL (CRUD Operations)",
          "topics": "SELECT, INSERT INTO, UPDATE, DELETE queries; conditional WHERE clauses, ORDER BY sorting, and GROUP BY aggregation."
        },
        {
          "unit": "Unit 6: Multi-Table Queries & Data Integrity (JOIN)",
          "topics": "INNER JOIN and LEFT JOIN queries; connecting Python with SQLite database engines and integrating with web forms."
        }
      ],
      "outcomes": [
        "Authoring accessible and responsive multi-page web layouts using semantic HTML5 and modern CSS3",
        "Manipulating browser DOM dynamically with vanilla JavaScript event handlers and client validation",
        "Designing relational database schemas establishing Primary and Foreign Key integrity",
        "Executing complete database CRUD operations with SQL and integrating via Python SQLite engines"
      ],
      "tools": [
        "Visual Studio Code",
        "HTML5 / CSS3 / JavaScript",
        "SQLite / DB Browser",
        "Bootstrap 5",
        "GitHub Pages"
      ],
      "project": "Dynamic Product Showcase & SQLite Integrated Web Portal",
      "projectDesc": "A modern web portal built with HTML5, CSS Grid and JavaScript, backed by Python-SQLite for real-time inventory querying, filtering, and database persistence.",
      "videoTitle": "11th Grade - Web Development (HTML5, CSS3, JS) & SQL Database Integration",
      "videoUrl": "https://www.youtube.com/results?search_query=html5+css3+javascript+sql+dersleri",
      "quiz": [
        {
          "question": "Which trio represents the foundational triad of front-end web development?",
          "options": [
            "HTML (Structure), CSS (Styling), JavaScript (Interactivity)",
            "C++, Java, Fortran",
            "Python, Assembly, Perl",
            "SQL, PHP, Linux"
          ],
          "answer": 0,
          "explanation": "Awesome! HTML provides structure, CSS handles aesthetics, and JS drives dynamic behavior."
        },
        {
          "question": "In relational databases (SQL), which command retrieves records from a table?",
          "options": [
            "SELECT",
            "FETCH_ALL",
            "GET",
            "DISPLAY"
          ],
          "answer": 0,
          "explanation": "Correct! \"SELECT * FROM table\" queries and extracts rows from relational tables."
        },
        {
          "question": "What does DOM stand for in client-side web technologies?",
          "options": [
            "Document Object Model",
            "Data Operation Module",
            "Digital Online Manager",
            "Database Object Mapping"
          ],
          "answer": 0,
          "explanation": "Super! The DOM is the in-memory tree representation of the webpage manipulated by JS."
        }
      ]
    },
    "sinif12": {
      "id": "sinif12",
      "projectImage": "assets/projects/sinif12.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "High School",
      "gradeLabel": "12th Grade (Ages 17-18)",
      "shortLabel": "12th Grade",
      "order": 12,
      "badge": "High School • Ages 17-18 • 2 Hours/Week • Advanced Tech & Career",
      "title": "12th Grade: Future Technologies: Artificial Intelligence (AI), Internet of Things (IoT) & Cybersecurity",
      "age": "Ages 17 - 18",
      "hours": "2 Hours / Week",
      "scope": "MoNE Advanced IT & Innovation • AI, Cloud Computing & College/Career Readiness",
      "labType": "AI, IoT & Cyber Defense Advanced Research Lab",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      "icon": "fas fa-brain",
      "desc": "Artificial Intelligence architectures (Machine Learning, Supervised/Unsupervised models, Computer Vision, LLMs and Generative AI), IoT hardware and ESP32 cloud connectivity, ethical cybersecurity defense, and university engineering pathways.",
      "term1": [
        {
          "unit": "Unit 1: Artificial Intelligence (AI) & Machine Learning Architecture",
          "topics": "AI categories (Narrow AI, General AI), supervised and unsupervised learning algorithms; dataset curation and model training."
        },
        {
          "unit": "Unit 2: Computer Vision & Image Processing",
          "topics": "OpenCV library; real-time facial detection from camera feed, hand gesture tracking, and object classification models."
        },
        {
          "unit": "Unit 3: Large Language Models (LLMs) & Generative AI",
          "topics": "Prompt engineering, transformer architecture, ethical AI practices, copyright considerations, and mitigating hallucinations."
        }
      ],
      "term2": [
        {
          "unit": "Unit 4: Internet of Things (IoT) & Smart Connected Systems",
          "topics": "ESP32 Wi-Fi microcontroller, MQTT protocol, live sensor telemetry streaming to cloud dashboards (ThingSpeak, Adafruit IO)."
        },
        {
          "unit": "Unit 5: Cybersecurity Fundamentals & Defense Strategies",
          "topics": "Network attack vectors (Phishing, DDoS, Man-in-the-Middle), cryptography algorithms (AES, RSA), ethical penetration testing, and data privacy."
        },
        {
          "unit": "Unit 6: Digital Portfolio & Tech Career Roadmap",
          "topics": "Professional GitHub profiles, open-source contributions, career trajectories in software engineering, AI engineering, and cybersecurity."
        }
      ],
      "outcomes": [
        "Training computer vision models and performing real-time inference via camera video feeds",
        "Streaming live IoT sensor telemetry to cloud dashboards using ESP32 Wi-Fi microcontrollers",
        "Analyzing network packets and applying defensive cybersecurity mechanisms against attack vectors",
        "Documenting and presenting an end-to-end engineering capstone project for national and university competitions"
      ],
      "tools": [
        "Google Teachable Machine",
        "Python OpenCV / Scikit-Learn",
        "ESP32 IoT Kit",
        "Wireshark",
        "Hugging Face"
      ],
      "project": "AI-Powered Smart Campus Safety & Environmental Energy Telemetry IoT System",
      "projectDesc": "An integrated platform featuring a computer vision model that verifies campus access via camera feed, paired with ESP32 sensors transmitting environmental metrics to cloud dashboards.",
      "videoTitle": "12th Grade - AI, Internet of Things (IoT) & Cyber Defense Capstone Project",
      "videoUrl": "https://www.youtube.com/results?search_query=yapay+zeka+makine+ogrenmesi+teachable+machine+dersi",
      "quiz": [
        {
          "question": "Which open-source computer vision library is widely utilized for image and object detection in AI?",
          "options": [
            "OpenCV",
            "Pandas",
            "Matplotlib",
            "Jupyter"
          ],
          "answer": 0,
          "explanation": "Awesome! OpenCV is the industry-standard computer vision library."
        },
        {
          "question": "What microcontroller with built-in Wi-Fi and Bluetooth is popular for IoT sensor stations?",
          "options": [
            "ESP32",
            "Standard 555 Timer",
            "74HC595 Register",
            "Classic Arduino Uno without Shield"
          ],
          "answer": 0,
          "explanation": "Correct! ESP32 combines low cost, dual-core processing, Wi-Fi, and BLE connectivity."
        },
        {
          "question": "In modern cybersecurity, what does \"Defense in Depth\" signify?",
          "options": [
            "Layering multiple redundant security controls to protect digital assets",
            "Using only one firewall",
            "Changing password once every 5 years",
            "Turning off antivirus"
          ],
          "answer": 0,
          "explanation": "Super! Layered defense ensures that if one defense layer fails, others continue safeguarding the system."
        }
      ]
    }
  },
  "ar": {
    "anasinifi": {
      "id": "anasinifi",
      "projectImage": "assets/projects/anasinifi.jpg",
      "stage": 1,
      "category": "okuloncesi",
      "categoryLabel": "ما قبل المدرسة",
      "gradeLabel": "مرحلة الروضة (4-5 سنوات)",
      "shortLabel": "الروضة",
      "order": 0,
      "badge": "رياض الأطفال • 4-5 سنوات • 1-2 ساعة أسبوعياً",
      "title": "الروضة: البرمجة غير المتصلة (Unplugged) والأسس المعرفية",
      "age": "4 - 5 سنوات",
      "hours": "1 - 2 ساعة دراسية أسبوعيًا",
      "scope": "1-2 ساعة أسبوعياً • التطور المعرفي والتنسيق الحركي",
      "labType": "ورشة الروبوتات وسجادة اللعب غير المتصلة",
      "themeColor": "#EC4899",
      "themeGradient": "linear-gradient(135deg, #EC4899 0%, #8F489C 100%)",
      "icon": "fas fa-shapes",
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
      "project": "مغامرة المتاهة الملونة: مسارات برمجية للوصول إلى الكنز مع Bee-Bot",
      "projectDesc": "ترسيخ مفاهيم الاتجاهات والتسلسل وعلاقات السبب والنتيجة من خلال الأدوات الملموسة والأنشطة القائمة على اللعب دون شاشات.",
      "videoTitle": "الروضة - مغامرة المتاهة الملونة: مسارات برمجية للوصول إلى الكنز مع Bee-Bot",
      "videoUrl": "https://www.youtube.com/results?search_query=okul+oncesi+bilgisayarsiz+kodlama+beebot",
      "quiz": [
        {
          "question": "أي زر يجب أن نضغط عليه ليتحرك روبوت Bee-Bot خطوة واحدة للأمام؟",
          "options": [
            "سهم للأعلى / للأمام",
            "سهم للخلف",
            "زر الإلغاء",
            "الزر الأحمر"
          ],
          "answer": 0,
          "explanation": "رائع! سهم للأعلى يعطي أمرًا للروبوت بالتحرك خطوة واحدة للأمام."
        },
        {
          "question": "عند الجلوس أمام الحاسوب، ما المسافة التقريبية التي يجب أن تفصل بين العين والشاشة؟",
          "options": [
            "مسافة ذراع واحدة (50-60 سم)",
            "قريب جدًا حتى يلمس الأنف الشاشة",
            "من مسافة 10 أمتار",
            "وضع الشاشة خلفنا"
          ],
          "answer": 0,
          "explanation": "صحيح! لصحة العين، يجب أن تكون هناك مسافة ذراع واحدة على الأقل (حوالي 50 سم) من الشاشة."
        },
        {
          "question": "في الروتين الصباحي، ما الذي نفعله أولاً بعد الاستيقاظ؟",
          "options": [
            "النهوض من السرير",
            "ارتداء الحذاء",
            "الذهاب إلى المدرسة",
            "تناول العشاء"
          ],
          "answer": 0,
          "explanation": "منطق ممتاز! في الخوارزميات تحدث الأحداث بالتسلسل؛ الخطوة الأولى هي النهوض من السرير."
        }
      ]
    },
    "sinif1": {
      "id": "sinif1",
      "projectImage": "assets/projects/sinif1.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "المرحلة الابتدائية",
      "gradeLabel": "الصف الأول (6-7 سنوات)",
      "shortLabel": "الصف الأول",
      "order": 1,
      "badge": "ابتدائي • 6-7 سنوات • 1-2 ساعة أسبوعياً",
      "title": "الصف الأول: محو الأمية الرقمية، إتقان الفأرة/لوحة المفاتيح والخوارزميات المرئية",
      "age": "6 - 7 سنوات",
      "hours": "1 - 2 ساعة دراسية أسبوعيًا",
      "scope": "1-2 ساعة أسبوعياً • المهارات الرقمية الأساسية والتطور الحركي",
      "labType": "مختبر تكنولوجيا المعلومات والوسائط المتعددة للابتدائي",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fas fa-mouse",
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
      "project": "معرض رسوماتي الرقمية وبطاقة قصة خوارزمية من 5 خطوات",
      "projectDesc": "أول تفاعل رقمي واعٍ لطلابنا، ينمي المهارات الحركية للفأرة ولوحة المفاتيح مع غرس مبادئ التفكير الخوارزمي عبر الألغاز.",
      "videoTitle": "الصف الأول - معرض رسوماتي الرقمية وبطاقة قصة خوارزمية من 5 خطوات",
      "videoUrl": "https://www.youtube.com/results?search_query=1.+sinif+bilisim+fare+klavye+egitimi",
      "quiz": [
        {
          "question": "أي جزء من الحاسوب يعرض لنا الصور والفيديوهات وشاشات الألعاب؟",
          "options": [
            "الشاشة (المراقب)",
            "الفأرة",
            "لوحة المفاتيح",
            "الميكروفون"
          ],
          "answer": 0,
          "explanation": "رائع! تعرض الشاشة جميع العناصر المرئية والنصوص والألعاب."
        },
        {
          "question": "أي إجراء بالفأرة نستخدمه لفتح تطبيق أو ملف على سطح المكتب؟",
          "options": [
            "النقر المزدوج بالزر الأيسر",
            "رفع الفأرة في الهواء",
            "النقر بالزر الأيمن 10 مرات",
            "قلب الفأرة رأسًا على عقب"
          ],
          "answer": 0,
          "explanation": "صحيح! النقر المزدوج السريع بالزر الأيسر يفتح الملفات والمجلدات."
        },
        {
          "question": "أي مفتاح على لوحة المفاتيح هو الأطول ويُستخدم لترك مسافة بين الكلمات؟",
          "options": [
            "مفتاح المسافة (Space)",
            "مفتاح Enter",
            "مفتاح Esc",
            "مفتاح الرقم 1"
          ],
          "answer": 0,
          "explanation": "ممتاز! مفتاح المسافة هو الأطول على لوحة المفاتيح، ويترك مسافات بين الكلمات."
        }
      ]
    },
    "sinif2": {
      "id": "sinif2",
      "projectImage": "assets/projects/sinif2.jpg",
      "stage": 1,
      "category": "ilkokul",
      "categoryLabel": "المرحلة الابتدائية",
      "gradeLabel": "الصف الثاني (7-8 سنوات)",
      "shortLabel": "الصف الثاني",
      "order": 2,
      "badge": "ابتدائي • 7-8 سنوات • ساعتان أسبوعياً",
      "title": "الصف الثاني: المنطق المتسلسل، التكرار والحكايات التفاعلية مع ScratchJr",
      "age": "7 - 8 سنوات",
      "hours": "1 - 2 ساعة دراسية أسبوعيًا",
      "scope": "ساعتان أسبوعياً • التفكير الخوارزمي وأسس البرمجة بالكتل",
      "labType": "مختبر البرمجة والرسوم المتحركة الرقمية",
      "themeColor": "#10B981",
      "themeGradient": "linear-gradient(135deg, #10B981 0%, #8F489C 100%)",
      "icon": "fas fa-puzzle-piece",
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
      "project": "كتاب قصص متحرك وناطق بصوت الطالب عبر ScratchJr",
      "projectDesc": "استكشاف مفهوم التكرار (Loop) وإنشاء أول القصص التفاعلية في ScratchJr ليتحول الطلاب من مستهلكين إلى صانعي محتوى رقمي.",
      "videoTitle": "الصف الثاني - كتاب قصص متحرك وناطق بصوت الطالب عبر ScratchJr",
      "videoUrl": "https://www.youtube.com/results?search_query=scratchjr+dersleri+ilkokul",
      "quiz": [
        {
          "question": "في برنامج ScratchJr، ما الكتلة التي توضع في البداية لبدء تشغيل البرنامج؟",
          "options": [
            "كتلة العلم الأخضر",
            "زر التوقف الأحمر",
            "دلو الطلاء",
            "كتلة سلة المهملات"
          ],
          "answer": 0,
          "explanation": "رائع! كتلة العلم الأخضر هي المشغل الرئيسي لبدء الرسوم المتحركة."
        },
        {
          "question": "إذا أردنا أن تتقدم الشخصية 3 خطوات للأمام، فما الرقم الذي نضعه أسفل كتلة الحركة الزرقاء؟",
          "options": [
            "نكتب الرقم 3",
            "نكتب الرقم 0",
            "نتركه فارغًا",
            "نكتب سالب 5"
          ],
          "answer": 0,
          "explanation": "تهانينا! ضبط المعامل على الرقم 3 يجعل الشخصية تتقدم 3 خطوات بالضبط."
        },
        {
          "question": "ماذا يُطلق في المعلوماتية على عملية اكتشاف خطأ في الكود البرمجي وإصلاحه؟",
          "options": [
            "تصحيح الأخطاء (Debugging)",
            "مسح الشاشة",
            "إيقاف تشغيل الحاسوب",
            "الخروج من اللعبة"
          ],
          "answer": 0,
          "explanation": "ممتاز! تسمى عملية العثور على الأخطاء وإصلاحها \"Debugging\"."
        }
      ]
    },
    "sinif3": {
      "id": "sinif3",
      "projectImage": "assets/projects/sinif3.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "المرحلة الابتدائية",
      "gradeLabel": "الصف الثالث (8-9 سنوات)",
      "shortLabel": "الصف الثالث",
      "order": 3,
      "badge": "ابتدائي • 8-9 سنوات • ساعتان أسبوعياً",
      "title": "الصف الثالث: مدخل إلى Scratch 3.0، الإحداثيات وهياكل اتخاذ القرار",
      "age": "8 - 9 سنوات",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • البرمجة بالكتل والتفكير الخوارزمي",
      "labType": "مختبر تطوير الألعاب والتفكير المنطقي",
      "themeColor": "#F59E0B",
      "themeGradient": "linear-gradient(135deg, #F59E0B 0%, #8F489C 100%)",
      "icon": "fas fa-gamepad",
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
      "project": "عالم حوض الأسماك: محاكاة تفاعلية للأسماك تبحث عن الطعام",
      "projectDesc": "استكشاف بيئة Scratch 3.0. حركة الشخصيات على المستوى الديكارتي X-Y، الأصوات، المؤثرات والشروط (إذا - فإن).",
      "videoTitle": "الصف الثالث - عالم حوض الأسماك: محاكاة تفاعلية للأسماك تبحث عن الطعام",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+3.0+elma+toplama+oyunu+dersi",
      "quiz": [
        {
          "question": "لتحريك شخصية نحو اليمين في مسرح Scratch، أي محور إحداثي يجب زيادته؟",
          "options": [
            "المحور X (تغيير موضع x بمقدار +10)",
            "المحور Y",
            "المحور Z",
            "مستوى الصوت"
          ],
          "answer": 0,
          "explanation": "رائع! يتحكم المحور X في الحركة الأفقية (يمين-يسار)، بينما يتحكم المحور Y في الحركة الرأسية."
        },
        {
          "question": "أي كتلة تجعل الكود البرمجي يعمل باستمرار وبدون توقف طوال فترة اللعبة؟",
          "options": [
            "كتلة كرر باستمرار (Forever)",
            "انتظر ثانية واحدة",
            "كتلة إذا - فإن",
            "أوقف الكل"
          ],
          "answer": 0,
          "explanation": "تهانينا! كتلة \"كرر باستمرار\" تنفذ الأوامر في حلقة لا نهائية طالما كانت اللعبة قيد التشغيل."
        },
        {
          "question": "أي كتلة جاهزة نستخدمها لمنع الشخصية من الاختفاء عند اصطدامها بحافة المسرح؟",
          "options": [
            "ارتد إذا كنت عند الحافة",
            "اختفِ",
            "تصفير موضع X",
            "إيقاف نمط الدوران"
          ],
          "answer": 0,
          "explanation": "رائع! كتلة \"ارتد إذا كنت عند الحافة\" تحافظ على الشخصية داخل حدود الشاشة."
        }
      ]
    },
    "sinif4": {
      "id": "sinif4",
      "projectImage": "assets/projects/sinif4.jpg",
      "stage": 2,
      "category": "ilkokul",
      "categoryLabel": "المرحلة الابتدائية",
      "gradeLabel": "الصف الرابع (9-10 سنوات)",
      "shortLabel": "الصف الرابع",
      "order": 4,
      "badge": "ابتدائي • 9-10 سنوات • ساعتان أسبوعياً",
      "title": "الصف الرابع: تصميم ألعاب ثنائية الأبعاد، المتغيرات والمواطنة الرقمية",
      "age": "9 - 10 سنوات",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • البرمجة المتقدمة بالكتل وديناميكيات الألعاب",
      "labType": "مختبر الخوارزميات المتقدمة والبرمجيات",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-layer-group",
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
      "project": "حماية البيئة: لعبة منصات متعددة المراحل بنقاط بموضوع صفر نفايات",
      "projectDesc": "بناء ألعاب كاملة ثنائية الأبعاد: لوحات النتائج، عدادات الأرواح، المؤقتات الزمنية، وتبادل الرسائل والبث بين الكائنات.",
      "videoTitle": "الصف الرابع - حماية البيئة: لعبة منصات متعددة المراحل بنقاط بموضوع صفر نفايات",
      "videoUrl": "https://www.youtube.com/results?search_query=scratch+degiskenler+ve+labirent+oyunu",
      "quiz": [
        {
          "question": "ما الهيكل المستخدم في Scratch لتخزين وتحديث القيم المتغيرة مثل النقاط أو الوقت؟",
          "options": [
            "المتغير (Variable)",
            "المظهر",
            "كتلة الصوت",
            "الخلفية"
          ],
          "answer": 0,
          "explanation": "رائع! تُستخدم المتغيرات لتخزين البيانات التي تتغير أثناء تشغيل اللعبة."
        },
        {
          "question": "إذا أردنا إنهاء اللعبة عند وصول عدد المحاولات إلى الصفر، أي شرط نستخدم؟",
          "options": [
            "إذا كانت المحاولات = 0 إذن انتهت اللعبة",
            "إذا كانت المحاولات > 10",
            "انتظر 10 ثوانٍ",
            "تغيير تأثير اللون"
          ],
          "answer": 0,
          "explanation": "ممتاز! الشرط \"المحاولات = 0\" يحدد بدقة لحظة انتهاء اللعبة."
        },
        {
          "question": "أي آلية تسمح لكائن بإرسال إشارة لبدء حركة في كائنات أخرى في نفس الوقت؟",
          "options": [
            "بث رسالة (إرسال واستقبال الرسائل)",
            "إغلاق الشاشة",
            "حذف الكائن",
            "إيقاف المشروع"
          ],
          "answer": 0,
          "explanation": "صحيح! آلية بث الرسائل تسمح بالتنسيق التفاعلي بين عدة كائنات."
        }
      ]
    },
    "sinif5": {
      "id": "sinif5",
      "projectImage": "assets/projects/sinif5.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "المرحلة المتوسطة",
      "gradeLabel": "الصف الخامس (10-11 سنة)",
      "shortLabel": "الصف الخامس",
      "order": 5,
      "badge": "متوسط • 10-11 سنة • ساعتان أسبوعياً",
      "title": "الصف الخامس: منهج تكنولوجيا المعلومات والبرمجيات المعتمد",
      "age": "10 - 11 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • معايير منهج تكنولوجيا المعلومات للصف الخامس",
      "labType": "مختبر هندسة الحاسوب والشبكات",
      "themeColor": "#059669",
      "themeGradient": "linear-gradient(135deg, #059669 0%, #8F489C 100%)",
      "icon": "fas fa-laptop",
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
      "project": "دليل الأمان الرقمي للحرم المدرسي: عرض تقديمي تفاعلي ومسابقة معلوماتية",
      "projectDesc": "الثقافة الرقمية، تشريح المكونات المادية والبرمجية، إدارة الملفات، الأمان السيبراني، التواصل الأخلاقي وحل المشكلات خوارزمياً.",
      "videoTitle": "الصف الخامس - دليل الأمان الرقمي للحرم المدرسي: عرض تقديمي تفاعلي ومسابقة معلوماتية",
      "videoUrl": "https://www.youtube.com/results?search_query=5.+sinif+bilisim+teknolojileri+dersi+konu+anlatimi",
      "quiz": [
        {
          "question": "أي مكوّن أساسي يُعرف بـ \"عقل الحاسوب\" ويقوم بمعالجة جميع البيانات والتعليمات؟",
          "options": [
            "المعالج (CPU)",
            "لوحة الفأرة",
            "شاشة العرض",
            "مروحة التبريد"
          ],
          "answer": 0,
          "explanation": "صحيح! وحدة المعالجة المركزية (CPU) هي المسؤولة عن معالجة كافة الأوامر."
        },
        {
          "question": "أي نوع من الذاكرة يعتبر مؤقتًا ويفقد بياناته بمجرد إيقاف تشغيل الحاسوب؟",
          "options": [
            "ذاكرة الوصول العشوائي (RAM)",
            "القرص الصلب SSD",
            "فلاش ميموري USB",
            "القرص المدمج DVD"
          ],
          "answer": 0,
          "explanation": "رائع! ذاكرة RAM ذاكرة متطايرة ومؤقتة تُمسح عند إيقاف تشغيل الجهاز."
        },
        {
          "question": "أي مما يلي يُعد ممارسة آمنة لإنشاء كلمة مرور قوية؟",
          "options": [
            "12+ حرفًا تحتوي حروفًا كبيرة وصغيرة وأرقامًا ورموزًا",
            "تاريخ الميلاد (123456)",
            "اسم حيوانك الأليف فقط",
            "كتابة كلمة \"password\""
          ],
          "answer": 0,
          "explanation": "ممتاز! كلمات المرور المركبة والمعقدة توفر أقصى درجات الأمان الرقمي."
        }
      ]
    },
    "sinif6": {
      "id": "sinif6",
      "projectImage": "assets/projects/sinif6.jpg",
      "stage": 3,
      "category": "ortaokul",
      "categoryLabel": "المرحلة المتوسطة",
      "gradeLabel": "الصف السادس (11-12 سنة)",
      "shortLabel": "الصف السادس",
      "order": 6,
      "badge": "متوسط • 11-12 سنة • ساعتان أسبوعياً",
      "title": "الصف السادس: الشبكات، جداول البيانات وتصميم Tinkercad ثلاثي الأبعاد",
      "age": "11 - 12 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • معايير منهج تكنولوجيا المعلومات للصف السادس",
      "labType": "مختبر التصميم ثلاثي الأبعاد وصناع الابتكار",
      "themeColor": "#0284C7",
      "themeGradient": "linear-gradient(135deg, #0284C7 0%, #8F489C 100%)",
      "icon": "fas fa-cube",
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
      "project": "حامل هاتف مكتبي مريح مخصص للطباعة ثلاثية الأبعاد مع جدول حساب التكلفة",
      "projectDesc": "بنية الشبكات، حقوق الملكية الرقمية، تحليل البيانات بالجداول الإلكترونية، والنمذجة ثلاثية الأبعاد للطباعة.",
      "videoTitle": "الصف السادس - حامل هاتف مكتبي مريح مخصص للطباعة ثلاثية الأبعاد مع جدول حساب التكلفة",
      "videoUrl": "https://www.youtube.com/results?search_query=6.+sinif+tinkercad+3d+tasarim+dersi",
      "quiz": [
        {
          "question": "في برنامج Tinkercad للتصميم ثلاثي الأبعاد، ما هي المحاور الثلاثة لتحديد الأبعاد؟",
          "options": [
            "X (العرض)، Y (العمق)، Z (الارتفاع)",
            "فقط X و Y",
            "المحاور A و B و C",
            "الشمال والجنوب والغرب"
          ],
          "answer": 0,
          "explanation": "رائع! في الفضاء ثلاثي الأبعاد تحدد المحاور X و Y و Z الأبعاد الثلاثية."
        },
        {
          "question": "لحفر ثقب أو تجويف داخل مجسم في Tinkercad، ما الخاصية التي نمنحها للشكل القاطع؟",
          "options": [
            "خاصية التجويف (Hole)",
            "تلوينه بلون صلب",
            "مضاعفة الحجم",
            "إخفاء العنصر"
          ],
          "answer": 0,
          "explanation": "صحيح! تحديد الشكل كـ \"Hole\" ودمجه يؤدي إلى تفريغ كتلته من المجسم."
        },
        {
          "question": "في مخططات سير العمليات (Flowchart)، أي شكل يمثل نقطة اتخاذ القرار (نعم / لا)؟",
          "options": [
            "شكل المعين (Diamond)",
            "المستطيل",
            "الشكل البيضاوي",
            "الدائرة"
          ],
          "answer": 0,
          "explanation": "ممتاز! يمثل المعين شرطًا أو قرارًا منطقيًا يتفرع منه مساران."
        }
      ]
    },
    "sinif7": {
      "id": "sinif7",
      "projectImage": "assets/projects/sinif7.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "المرحلة المتوسطة",
      "gradeLabel": "الصف السابع (12-13 سنة)",
      "shortLabel": "الصف السابع",
      "order": 7,
      "badge": "متوسط • 12-13 سنة • ساعتان أسبوعياً • micro:bit",
      "title": "الصف السابع: البرمجة المادية، المستشعرات وعالم BBC micro:bit",
      "age": "12 - 13 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • الحوسبة المادية، بنية المستشعرات وثقافة الصانعين",
      "labType": "مختبر الإلكترونيات والحوسبة المادية",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #8F489C 100%)",
      "icon": "fas fa-microchip",
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
      "project": "مشروع الدفيئة الذكية: إنذار ري تلقائي يقيس رطوبة التربة وشدة الضوء",
      "projectDesc": "نقل البرمجة إلى الواقع الملموس. لوحة BBC micro:bit، منصة MakeCode، المستشعرات المدمجة والاتصال اللاسلكي بالراديو.",
      "videoTitle": "الصف السابع - مشروع الدفيئة الذكية: إنذار ري تلقائي يقيس رطوبة التربة وشدة الضوء",
      "videoUrl": "https://www.youtube.com/results?search_query=7.+sinif+arduino+tinkercad+circuits+dersleri",
      "quiz": [
        {
          "question": "أي مستشعر في دوائر أردوينو يُستخدم لقياس شدة الضوء المحيط؟",
          "options": [
            "مستشعر الضوء LDR",
            "مستشعر الموجات فوق الصوتية",
            "مكبر الصوت Buzzer",
            "محرك السيرفو"
          ],
          "answer": 0,
          "explanation": "رائع! تتغير المقاومة الكهربائية لمستشعر LDR بناءً على شدة الإضاءة الساقطة عليه."
        },
        {
          "question": "لماذا يجب توصيل مقاومة كهربائية (220 أوم) على التوالي مع الصمام الثنائي الباعث للضوء (LED)؟",
          "options": [
            "للحد من شدة التيار وحماية الـ LED من الاحتراق",
            "لتغيير لون الضوء",
            "لرفع مستوى الصوت",
            "لتوفير البطارية"
          ],
          "answer": 0,
          "explanation": "صحيح! المقاومات تحمي مصابيح LED من التلف الناتج عن التيارات الزائدة."
        },
        {
          "question": "في بنية برنامج أردوينو، ما الدالة التي تتكرر أوامرها باستمرار في حلقة لا نهائية؟",
          "options": [
            "الدالة void loop()",
            "الدالة void setup()",
            "الدالة int main()",
            "الدالة void exit()"
          ],
          "answer": 0,
          "explanation": "ممتاز! تنفذ دالة loop() تعليماتها بشكل مستمر طالما اللوحة موصولة بالطاقة."
        }
      ]
    },
    "sinif8": {
      "id": "sinif8",
      "projectImage": "assets/projects/sinif8.jpg",
      "stage": 4,
      "category": "ortaokul",
      "categoryLabel": "المرحلة المتوسطة",
      "gradeLabel": "الصف الثامن (13-14 سنة)",
      "shortLabel": "الصف الثامن",
      "order": 8,
      "badge": "متوسط • 13-14 سنة • ساعتان أسبوعياً • Arduino",
      "title": "الصف الثامن: Arduino UNO، تصميم الدوائر، مشغلات المحركات والروبوتات المستقلة",
      "age": "13 - 14 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "ساعتان أسبوعياً • الروبوتات التطبيقية، المتحكمات الدقيقة والأنظمة المدمجة",
      "labType": "مختبر الروبوتات والأنظمة الذاتية",
      "themeColor": "#D97706",
      "themeGradient": "linear-gradient(135deg, #D97706 0%, #8F489C 100%)",
      "icon": "fas fa-robot",
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
      "project": "روبوت جوال ذاتي القيادة يتجنب العوائق ونظام حساسات ركن ذكي",
      "projectDesc": "لوحة تطوير Arduino UNO، دوائر لوحة التجارب (Breadboard)، معالجة بيانات المستشعرات، ومتحكمات محركات DC للروبوتات المتنقلة.",
      "videoTitle": "الصف الثامن - روبوت جوال ذاتي القيادة يتجنب العوائق ونظام حساسات ركن ذكي",
      "videoUrl": "https://www.youtube.com/results?search_query=arduino+engelden+kacan+robot+yapimi",
      "quiz": [
        {
          "question": "كيف يقيس مستشعر الموجات فوق الصوتية HC-SR04 المسافة إلى العوائق؟",
          "options": [
            "بإرسال موجات صوتية عالية التردد وقياس زمن ارتدادها",
            "عبر كاميرا ذكية",
            "بالرنين المغناطيسي",
            "بقياس درجة الحرارة"
          ],
          "answer": 0,
          "explanation": "رائع! يرسل المستشعر نبضة فوق صوتية ويحسب المسافة بناءً على سرعة وزمن ارتداد الصدى."
        },
        {
          "question": "ما المكوّن الضروري لتوصيله بين أردوينو ومحركات التيار المستمر لتوفير طاقة كافية؟",
          "options": [
            "مشغل المحركات (مثل L298N)",
            "كابل USB المباشر",
            "مصباح LED صغير",
            "مقاومة 10k فقط"
          ],
          "answer": 0,
          "explanation": "صحيح! وحدات قيادة المحركات توفر تيارًا عاليًا دون إتلاف منافذ المتحكم."
        },
        {
          "question": "أي محرك يتميز بإمكانية التحكم الدقيق بزاوية دورانه (بين 0 و 180 درجة)؟",
          "options": [
            "محرك السيرفو (Servo Motor)",
            "محرك DC عادي",
            "محرك اهتزاز",
            "محرك مروحة AC"
          ],
          "answer": 0,
          "explanation": "ممتاز! تمكن محركات السيرفو من ضبط زوايا ميكانيكية دقيقة بواسطة إشارات PWM."
        }
      ]
    },
    "sinif9": {
      "id": "sinif9",
      "projectImage": "assets/projects/sinif9.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "المرحلة الثانوية",
      "gradeLabel": "الصف التاسع (14-15 سنة)",
      "shortLabel": "الصف التاسع",
      "order": 9,
      "badge": "المرحلة الثانوية • 14-15 سنة • ساعتان أسبوعياً • معايير منهاج علوم الحاسوب 1",
      "title": "الصف التاسع: علوم الحاسوب 1: حل المشكلات البرمجية، الخوارزميات وهياكل البيانات بلغة بايثون",
      "age": "14 - 15 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "برنامج علوم الحاسوب للمرحلة الثانوية - المستوى 1 • البرمجة النصية",
      "labType": "مختبر البرمجيات المتقدمة وبايثون للمرحلة الثانوية",
      "themeColor": "#3B82F6",
      "themeGradient": "linear-gradient(135deg, #3B82F6 0%, #8F489C 100%)",
      "icon": "fab fa-python",
      "desc": "الانتقال من البرمجة الكتلية إلى الاحترافية النصية. القواعد التركيبية للغة بايثون، أنواع البيانات (str, int, float, bool)، استقبال مدخلات المستخدم، جمل اتخاذ القرار if-elif-else، حلقات التكرار for/while، والدوال المعيارية (def).",
      "term1": [
        {
          "unit": "الوحدة 1: علوم الحاسوب وأسس التفكير الخوارزمي",
          "topics": "تعقيد الخوارزميات (مقدمة Big-O)، المخططات الانسيابية، تثبيت بايثون، وإعداد بيئات التطوير (VS Code / PyCharm / IDLE)."
        },
        {
          "unit": "الوحدة 2: القواعد الأساسية للغة بايثون وأنواع البيانات",
          "topics": "قواعد تسمية المتغيرات، النصوص، الأعداد الصحيحة، العشرية والمنطقية؛ تحويل الأنواع ودوال print() و input()."
        },
        {
          "unit": "الوحدة 3: المعاملات الحسابية والعلائقية والمنطقية",
          "topics": "المعاملات الرياضية (+, -, *, /, //, %, **)، المقارنات (==, !=, <, >) والروابط المنطقية (and, or, not)."
        }
      ],
      "term2": [
        {
          "unit": "الوحدة 4: بنى اتخاذ القرار والجمل الشرطية",
          "topics": "جمل if و elif و else؛ الشروط المتداخلة، خوارزميات اتخاذ القرار المنطقي وتصحيح الأخطاء (debugging)."
        },
        {
          "unit": "الوحدة 5: بنيات التكرار (الحلقات Loops)",
          "topics": "حلقة for، دالة range()، حلقة while؛ منطق العداد، الحلقات اللانهائية وتعليمات break و continue."
        },
        {
          "unit": "الوحدة 6: البرمجة المعيارية والدوال",
          "topics": "تعريف الدوال باستخدام def، المعاملات والوسائط، تعليمة return؛ الدوال المضمنة ومكتبات math و random."
        }
      ],
      "outcomes": [
        "استيعاب مبادئ البرمجة النصية وتطبيق قواعد لغة بايثون بدقة وخلو من الأخطاء",
        "بناء آليات اتخاذ القرار المعقدة باستخدام كتل if-elif-else والمعاملات المنطقية",
        "تحسين وتكرار حلول المسائل الحسابية عبر حلقات التكرار for و while",
        "تصميم هياكل برمجية نظيفة وقابلة لإعادة الاستخدام عبر تعريف الدوال المعيارية (def)"
      ],
      "tools": [
        "Python 3.12",
        "Visual Studio Code",
        "PyCharm Community",
        "IDLE & Terminal"
      ],
      "project": "برنامج وحدة تحكم تفاعلي لحساب الدرجات والإحصاءات الأكاديمية للطلاب",
      "projectDesc": "تطبيق بايثون عبر موجه الأوامر يستقبل درجات الطلاب، يحدد التقديرات الحرفية بالجمل الشرطية، يحسب معدل الفصل بحلقات التكرار، ويولد تقارير عبر الدوال المعيارية.",
      "videoTitle": "الصف التاسع - حل المشكلات الخوارزمية وتطبيقات وحدة التحكم مع بايثون",
      "videoUrl": "https://www.youtube.com/results?search_query=9.+sinif+bilgisayar+bilimi+python+dersleri",
      "quiz": [
        {
          "question": "في لغة بايثون (Python)، ما الدالة المستخدمة لطباعة المخرجات على الشاشة؟",
          "options": [
            "الدالة print()",
            "الدالة echo()",
            "الدالة console.log()",
            "الدالة output()"
          ],
          "answer": 0,
          "explanation": "رائع! الدالة print() هي المسؤولة عن طباعة النصوص والبيانات في بايثون."
        },
        {
          "question": "ما هي الصيغة الصحيحة لكتابة جملة شرطية في بايثون؟",
          "options": [
            "if x > 10:",
            "if (x > 10) then",
            "if x > 10;",
            "when x > 10 do"
          ],
          "answer": 0,
          "explanation": "صحيح! تستخدم لغة بايثون النقطتين الرأسيتين (:) متبوعة بإزاحة بادئة (Indentation)."
        },
        {
          "question": "أي نوع بيانات يُستخدم لتخزين الأعداد الصحيحة (مثل 42) في بايثون؟",
          "options": [
            "int (عدد صحيح)",
            "float (عدد عشري)",
            "str (نص)",
            "bool (منطقي)"
          ],
          "answer": 0,
          "explanation": "ممتاز! الأعداد الصحيحة بدون كسور تنتمي إلى النوع int."
        }
      ]
    },
    "sinif10": {
      "id": "sinif10",
      "projectImage": "assets/projects/sinif10.jpg",
      "stage": 5,
      "category": "lise",
      "categoryLabel": "المرحلة الثانوية",
      "gradeLabel": "الصف العاشر (15-16 سنة)",
      "shortLabel": "الصف العاشر",
      "order": 10,
      "badge": "المرحلة الثانوية • 15-16 سنة • ساعتان أسبوعياً • بايثون كائني التوجه (OOP)",
      "title": "الصف العاشر: البرمجة كائنية التوجه (OOP) ببايثون، هياكل البيانات وإدارة الملفات",
      "age": "15 - 16 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "برنامج علوم الحاسوب للمرحلة الثانوية المستوى 1 المتقدم • بنية OOP والوحدات وهياكل البيانات",
      "labType": "مختبر البرمجيات المتقدمة وبايثون للمرحلة الثانوية",
      "themeColor": "#14B8A6",
      "themeGradient": "linear-gradient(135deg, #14B8A6 0%, #8F489C 100%)",
      "icon": "fas fa-cubes",
      "desc": "هياكل البيانات المتقدمة (القوائم، الصفوف، القواميس، المجموعات)، البرمجة كائنية التوجه (OOP - الفئات، الكائنات، الوراثة، التغليف)، عمليات الملفات (.txt, .csv, .json) وإدارة الاستثناءات (try-except).",
      "term1": [
        {
          "unit": "الوحدة 1: هياكل البيانات المتقدمة (المجموعات Collections)",
          "topics": "القوائم (append, remove, pop, sort)، توليد القوائم (List Comprehension)، الصفوف (Tuples)، المجموعات (Sets) والقواميس (Dictionaries - مفتاح/قيمة)."
        },
        {
          "unit": "الوحدة 2: الطرق المتقدمة للسلاسل النصية (Strings)",
          "topics": "تقطيع النصوص (slicing)، split، join، replace، تنسيق النصوص (f-strings) وأسس التعبيرات النمطية (Regex)."
        },
        {
          "unit": "الوحدة 3: معالجة الأخطاء والاستثناءات (Exception Handling)",
          "topics": "كتل try و except و else و finally؛ إدارة أخطاء IndexError و ValueError و ZeroDivisionError بأمان."
        }
      ],
      "term2": [
        {
          "unit": "الوحدة 4: إدارة الملفات والتخزين الدائم",
          "topics": "دالة open()، أوضاع الملفات (r, w, a)، القراءة والكتابة مع مدير السياق with، وتخزين البيانات بتنسيقات CSV و JSON."
        },
        {
          "unit": "الوحدة 5: أسس البرمجة كائنية التوجه (OOP)",
          "topics": "الفئات (Class)، الكائنات (Object)، دالة البناء __init__، المعامل self، خصائص وطرائق النسخ (Instances)."
        },
        {
          "unit": "الوحدة 6: البرمجة كائنية التوجه المتقدمة: الوراثة وتعدد الأشكال",
          "topics": "علاقة الفئة العليا والفرعية باستخدام super()، إعادة تعريف الطرائق (override)، وهندسة الحزم المعيارية."
        }
      ],
      "outcomes": [
        "نمذجة مجموعات البيانات الهيكلية المعقدة بالقواميس والقوائم متعددة الأبعاد بكفاءة",
        "كتابة أكواد آمنة عبر التعامل الذكي مع استثناءات التشغيل بكتل try-except",
        "حفظ بيانات التطبيقات واستعادتها بشكل دائم في ملفات خارجية (.txt, .json)",
        "تطوير برمجيات مستدامة ومعيارية باستخدام معمارية الفئات (Class) والكائنات (Object)"
      ],
      "tools": [
        "Python 3.12",
        "Visual Studio Code",
        "Jupyter Notebook",
        "GitHub Desktop"
      ],
      "project": "نظام كائني التوجه لإدارة مكتبة المدرسة واستعارة الكتب",
      "projectDesc": "برنامج بايثون متكامل يضم فئات الكتاب والطالب (OOP)، يدير عمليات الإعارة والاسترجاع ويخزن كافة السجلات في ملفات JSON بشكل دائم.",
      "videoTitle": "الصف العاشر - البرمجة كائنية التوجه (OOP) وإدارة الملفات بلغة بايثون",
      "videoUrl": "https://www.youtube.com/results?search_query=python+oop+nesne+yonelimli+programlama+dersleri",
      "quiz": [
        {
          "question": "في البرمجة كائنية التوجه (OOP)، ماذا يُسمى النموذج المرجعي المستخدم لإنشاء الكائنات؟",
          "options": [
            "الفئة / الصنف (Class)",
            "الدالة (Function)",
            "المتغير (Variable)",
            "الوحدة (Module)"
          ],
          "answer": 0,
          "explanation": "رائع! يحدد الـ Class الخصائص والوظائف التي سيرثها كل كائن مشتق منه."
        },
        {
          "question": "في كلاسات بايثون، ما الدالة الخاصة التي تُستدعى تلقائيًا عند إنشاء كائن جديد؟",
          "options": [
            "الدالة __init__()",
            "الدالة __main__()",
            "الدالة __start__()",
            "الدالة __create__()"
          ],
          "answer": 0,
          "explanation": "صحيح! الدالة البنائية __init__ تهيئ متغيرات الكائن لحظة إنشائه."
        },
        {
          "question": "أي هيكل برمجي يُستخدم لمعالجة الأخطاء الاستثنائية دون انهيار البرنامج في بايثون؟",
          "options": [
            "كتلة try ... except",
            "كتلة catch ... throw",
            "كتلة if ... error",
            "كتلة test ... fail"
          ],
          "answer": 0,
          "explanation": "ممتاز! كتلة try-except تلتقط الأخطاء البرمجية أثناء التشغيل وتضمن استقرار النظام."
        }
      ]
    },
    "sinif11": {
      "id": "sinif11",
      "projectImage": "assets/projects/sinif11.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "المرحلة الثانوية",
      "gradeLabel": "الصف الحادي عشر (16-17 سنة)",
      "shortLabel": "الصف الحادي عشر",
      "order": 11,
      "badge": "المرحلة الثانوية • 16-17 سنة • ساعتان أسبوعياً • منهاج علوم الحاسوب 2",
      "title": "الصف الحادي عشر: علوم الحاسوب 2: تقنيات الويب (HTML5/CSS3/JS) وقواعد بيانات SQL",
      "age": "16 - 17 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "برنامج علوم الحاسوب للمرحلة الثانوية - المسار 2 • بنية الويب وقواعد البيانات العلائقية",
      "labType": "مختبر تطوير الويب وقواعد البيانات للمرحلة الثانوية",
      "themeColor": "#8B5CF6",
      "themeGradient": "linear-gradient(135deg, #8B5CF6 0%, #8F489C 100%)",
      "icon": "fas fa-code",
      "desc": "بنية الإنترنت ونموذج العميل-الخادم (Client-Server)؛ HTML5 الدلالية، CSS3 الحديثة (Flexbox/Grid، التصميم المتجاوب)، جافاسكريبت للتحكم في DOM ونظم إدارة قواعد البيانات العلائقية (SQL / SQLite).",
      "term1": [
        {
          "unit": "الوحدة 1: هندسة الويب ومعايير HTML5 الدلالية",
          "topics": "بروتوكولات DNS و IP و HTTP/HTTPS؛ الوسوم الدلالية (header, nav, section, article, footer)؛ النماذج والجداول."
        },
        {
          "unit": "الوحدة 2: تصميم CSS3 الحديث والتخطيط المتجاوب",
          "topics": "المحددات، نموذج الصندوق (Box Model)، أنظمة Flexbox و CSS Grid، واستعلامات الوسائط (@media) للتوافق مع الجوال."
        },
        {
          "unit": "الوحدة 3: جافاسكريبت من جانب العميل والتحكم في DOM",
          "topics": "المتغيرات (let, const)، مستمعو الأحداث (addEventListener)، اختيار عناصر DOM وتحديث المحتوى التفاعلي."
        }
      ],
      "term2": [
        {
          "unit": "الوحدة 4: أسس قواعد البيانات والنموذج العلائقي",
          "topics": "مفهوم قواعد البيانات، الجداول، المفتاح الأساسي (Primary Key)، المفتاح الأجنبي (Foreign Key) وأنواع البيانات."
        },
        {
          "unit": "الوحدة 5: إدارة البيانات باستخدام SQL (عمليات CRUD)",
          "topics": "استعلامات SELECT و INSERT INTO و UPDATE و DELETE؛ التصفية بـ WHERE، والترتيب بـ ORDER BY والتجميع بـ GROUP BY."
        },
        {
          "unit": "الوحدة 6: استعلامات الجداول المتعددة وسلامة البيانات (JOIN)",
          "topics": "استعلامات INNER JOIN و LEFT JOIN؛ ربط بايثون بقاعدة بيانات SQLite والتكامل مع نماذج الويب."
        }
      ],
      "outcomes": [
        "برمجة صفحات ويب متجاوبة مع الأجهزة الذكية وفق معايير HTML5 و CSS3 الحديثة",
        "إدارة تفاعلات المستخدمين في صفحات الويب والتحقق من صحة المدخلات عبر جافاسكريبت",
        "تصميم مخطط قاعدة بيانات علائقية وإنشاء العلاقات السليمة بين الجداول",
        "تنفيذ عمليات الاستعلام والإضافة والتعديل والحذف (CRUD) بلغة SQL وربطها ببايثون"
      ],
      "tools": [
        "Visual Studio Code",
        "HTML5 / CSS3 / JavaScript",
        "SQLite / DB Browser",
        "Bootstrap 5",
        "GitHub Pages"
      ],
      "project": "بوابة ويب لكتالوج المنتجات متكاملة مع قاعدة بيانات SQLite",
      "projectDesc": "تطبيق ويب متكامل مصمم بواجهة حديثة باستخدام HTML5 و CSS Grid وجافاسكريبت، مرتبط بقاعدة بيانات SQLite عبر بايثون لتصفية وإدارة المنتجات في الوقت الفعلي.",
      "videoTitle": "الصف الحادي عشر - تطوير الويب (HTML5, CSS3, JS) وتكامل قواعد بيانات SQL",
      "videoUrl": "https://www.youtube.com/results?search_query=html5+css3+javascript+sql+dersleri",
      "quiz": [
        {
          "question": "ما هو الثلاثي الأساسي لتطوير واجهات الويب (Front-End)؟",
          "options": [
            "HTML (الهيكل)، CSS (التصميم)، JavaScript (التفاعل)",
            "C++، Java، Fortran",
            "Python، Assembly، Perl",
            "SQL، PHP، Linux"
          ],
          "answer": 0,
          "explanation": "رائع! تبني HTML الهيكل، وتنسق CSS المظهر، بينما تدير JavaScript التفاعل."
        },
        {
          "question": "في قواعد البيانات العلائقية (SQL)، أي أمر يُستخدم لاسترجاع البيانات من جدول؟",
          "options": [
            "الأمر SELECT",
            "الأمر FETCH_ALL",
            "الأمر GET",
            "الأمر DISPLAY"
          ],
          "answer": 0,
          "explanation": "صحيح! يُستخدم أمر SELECT للاستعلام واستخراج السجلات من قواعد البيانات."
        },
        {
          "question": "ماذا يعني الاختصار DOM في تقنيات المتصفح وتطوير الويب؟",
          "options": [
            "Document Object Model (نموذج كائن المستند)",
            "Data Operation Module",
            "Digital Online Manager",
            "Database Object Mapping"
          ],
          "answer": 0,
          "explanation": "ممتاز! الـ DOM هو تمثيل شجري لعناصر الصفحة يتيح لـ JavaScript التعديل عليها ديناميكيًا."
        }
      ]
    },
    "sinif12": {
      "id": "sinif12",
      "projectImage": "assets/projects/sinif12.jpg",
      "stage": 6,
      "category": "lise",
      "categoryLabel": "المرحلة الثانوية",
      "gradeLabel": "الصف الثاني عشر (17-18 سنة)",
      "shortLabel": "الصف الثاني عشر",
      "order": 12,
      "badge": "المرحلة الثانوية • 17-18 سنة • ساعتان أسبوعياً • التكنولوجيا المتقدمة والمسار المهني",
      "title": "الصف الثاني عشر: تكنولوجيات المستقبل: الذكاء الاصطناعي (AI)، إنترنت الأشياء (IoT) والأمن السيبراني",
      "age": "17 - 18 سنة",
      "hours": "ساعتان دراسيتان أسبوعيًا",
      "scope": "برنامج تكنولوجيا المعلومات المتقدمة والابتكار • الذكاء الاصطناعي والحوسبة السحابية والاستعداد الجامعي والمهني",
      "labType": "مختبر البحوث المتقدمة في الذكاء الاصطناعي و IoT والأمن السيبراني",
      "themeColor": "#6366F1",
      "themeGradient": "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      "icon": "fas fa-brain",
      "desc": "نماذج الذكاء الاصطناعي (تعلم الآلة، التعلم الخاضع وغير الخاضع للإشراف، الرؤية الحاسوبية، النماذج اللغوية الكبيرة LLM والذكاء الاصطناعي التوليدي)، إنترنت الأشياء وربط ESP32 بالسحابة، الدفاع السيبراني الأخلاقي والإرشاد المهني الجامعي.",
      "term1": [
        {
          "unit": "الوحدة 1: هندسة الذكاء الاصطناعي (AI) وتعلم الآلة (ML)",
          "topics": "أنواع الذكاء الاصطناعي (الضيق والعام)، التعلم الخاضع للإشراف وغير الخاضع للإشراف؛ إعداد مجموعات البيانات وتدريب النماذج."
        },
        {
          "unit": "الوحدة 2: الرؤية الحاسوبية ومعالجة الصور",
          "topics": "مكتبة OpenCV؛ التعرف على الوجوه من بث الكاميرا، تتبع حركات اليد ونماذج تصنيف الكائنات في الوقت الفعلي."
        },
        {
          "unit": "الوحدة 3: النماذج اللغوية الكبيرة (LLMs) والذكاء الاصطناعي التوليدي",
          "topics": "هندسة التلقين (Prompt Engineering)، بنية المحولات (Transformers)، الاستخدام الأخلاقي للذكاء الاصطناعي، حقوق البيانات والهلوسة."
        }
      ],
      "term2": [
        {
          "unit": "الوحدة 4: إنترنت الأشياء (IoT) والأنظمة الذكية",
          "topics": "متحكم ESP32 المزود بـ Wi-Fi، بروتوكول MQTT، ومراقبة البيانات الحية عبر لوحات التحكم السحابية (ThingSpeak, Adafruit IO)."
        },
        {
          "unit": "الوحدة 5: أسس الأمن السيبراني واستراتيجيات الدفاع",
          "topics": "هجمات الشبكة (التصيد الاحتيالي Phishing, DDoS, Man-in-the-middle)، خوارزميات التشفير (AES, RSA)، أخلاقيات اختبار الاختراق وحماية البيانات."
        },
        {
          "unit": "الوحدة 6: المحفظة الرقمية وخريطة المسار المهني التكنولوجي",
          "topics": "إنشاء ملف احترافي على GitHub، المساهمة في البرمجيات مفتوحة المصدر، ومسارات هندسة البرمجيات والذكاء الاصطناعي والدفاع السيبراني."
        }
      ],
      "outcomes": [
        "استيعاب مراحل تدريب واختبار نماذج تعلم الآلة وتطوير مشروع تصنيف بصري عبر الكاميرا",
        "ربط أجهزة إنترنت الأشياء بالسحابة لمراقبة بيانات الحساسات والتحكم بها عن بعد عبر ESP32",
        "تحليل بروتوكولات الشبكات وتطبيق آليات الدفاع ضد هجمات الاختراق السيبراني",
        "توثيق وعرض مشروع تخرج تقني متكامل من البداية حتى النهاية للمسابقات الوطنية والمسار الجامعي"
      ],
      "tools": [
        "Google Teachable Machine",
        "Python OpenCV / Scikit-Learn",
        "ESP32 IoT Kit",
        "Wireshark",
        "Hugging Face"
      ],
      "project": "نظام ذكي متكامل للمراقبة البيئية وأمان الحرم المدرسي مدعوم بالذكاء الاصطناعي و IoT",
      "projectDesc": "منصة متكاملة بنموذج رؤية حاسوبية يتعرف على الوجوه لمنح أذونات الدخول، مع حساسات ESP32 تنقل بيانات درجات الحرارة والإضاءة إلى السحابة لتوفير الطاقة.",
      "videoTitle": "الصف الثاني عشر - مشروع التخرج: الذكاء الاصطناعي وإنترنت الأشياء (IoT) والأمن السيبراني",
      "videoUrl": "https://www.youtube.com/results?search_query=yapay+zeka+makine+ogrenmesi+teachable+machine+dersi",
      "quiz": [
        {
          "question": "أي مكتبة مفتوحة المصدر مشهورة في معالجة الصور والرؤية الحاسوبية (Computer Vision)؟",
          "options": [
            "مكتبة OpenCV",
            "مكتبة Pandas",
            "مكتبة Matplotlib",
            "بيئة Jupyter"
          ],
          "answer": 0,
          "explanation": "رائع! مكتبة OpenCV هي المعيار العالمي لتطبيقات التعرف على الصور والكائنات."
        },
        {
          "question": "أي شريحة إلكترونية تحتوي على Wi-Fi و Bluetooth مدمجين وتُستخدم بكثرة في محطات إنترنت الأشياء (IoT)؟",
          "options": [
            "شريحة ESP32",
            "مؤقت 555 الكلاسيكي",
            "مسجل الإزاحة 74HC595",
            "لوحة Uno القديمة بدون ملحق"
          ],
          "answer": 0,
          "explanation": "صحيح! توفر شريحة ESP32 اتصالاً لاسلكيًا قويًا لمعالجة بيانات أجهزة IoT السحابية."
        },
        {
          "question": "في الأمن السيبراني الحديث، ماذا يعني مفهوم \"الدفاع في العمق\" (Defense in Depth)؟",
          "options": [
            "تطبيق طبقات أمنية متعددة ومتتالية لحماية الأصول الرقمية",
            "الاعتماد على جدار ناري واحد فقط",
            "تغيير كلمة المرور مرة كل 5 سنوات",
            "إيقاف برامج مكافحة الفيروسات"
          ],
          "answer": 0,
          "explanation": "ممتاز! استراتيجية الدفاع المتعدد تضمن حماية النظام حتى في حال اختراق إحدى الطبقات."
        }
      ]
    }
  }
};

// Default active data pointing to Turkish dataset for backward compatibility
const CURRICULUM_GRADES_DATA = CURRICULUM_GRADES_DATA_I18N.tr;

// Kademe varsayılan sınıf eşleştirmesi
const STAGE_TO_DEFAULT_GRADE = {
  okuloncesi: 'anasinifi',
  ilkokul: 'sinif1',
  ortaokul: 'sinif5',
  lise: 'sinif9'
};

// Global export
if (typeof window !== 'undefined') {
  window.CURRICULUM_GRADES_DATA_I18N = CURRICULUM_GRADES_DATA_I18N;
  window.CURRICULUM_GRADES_DATA = CURRICULUM_GRADES_DATA;
  window.STAGE_TO_DEFAULT_GRADE = STAGE_TO_DEFAULT_GRADE;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_GRADES_DATA_I18N, CURRICULUM_GRADES_DATA, STAGE_TO_DEFAULT_GRADE };
}
