/**
 * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ
 * K-12 ARDUINO PROJELERİ & PEDAGOJİK DONANIM MÜFREDAT VERİTABANI
 * 13 Kademe Eksiksiz Devre Şemaları, Bileşen Listeleri ve Kaynak Kodları
 */

const ARDUINO_PROJECTS_DATA = {
  "anasinifi": {
    "folder": "Sinif_0_Anasinifi_Blink_LED",
    "file": "Sinif_0_Anasinifi_Blink_LED.ino",
    "title": "Ana Sınıfı: Temel Giriş - Tek LED Yakma & Söndürme (Blink)",
    "shortTitle": "Blink LED (Göz Kırpan Lamba)",
    "gradeLabel": "Ana Sınıfı (4-5 Yaş)",
    "badge": "Erken Çocukluk • Temel Seviye • 1/13",
    "objective": "Minik öğrencilerin fiziksel programlama dünyasına ilk adımı. Bir mikrodenetleyicinin elektrik akımını açıp kapatarak (Dijital Çıkış) ışık üretebileceğini somut ve duyusal olarak keşfetme.",
    "principle": "Arduino Pin 8'e bağlı LED'e 5V elektrik vererek (HIGH) ışığı yakar, delay(1000) ile 1 saniye bekler. Ardından elektriği keserek (LOW) LED'i söndürür ve 1 saniye daha bekler. Bu ritmik döngü sonsuz kez tekrarlanır.",
    "difficulty": "Başlangıç Seviyesi (Level 1)",
    "duration": "20-30 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Ana Programlanabilir Beyin",
        "spec": "ATmega328P, 5V Besleme, 14 Dijital Pin",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard (Devre Tahtası)",
        "qty": "1 Adet",
        "role": "Lehimsiz Geçici Devre Platformu",
        "spec": "400 Bağlantı Noktası, İletken Hatlar",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "5mm Kırmızı LED",
        "qty": "1 Adet",
        "role": "Işıklı Görsel Çıktı",
        "spec": "2.0V - 2.2V İleri Gerilim, 20mA Akım",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_red.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "1 Adet",
        "role": "LED Akım Sınırlayıcı",
        "spec": "1/4W Karbon Film (Kırmızı-Kırmızı-Kahverengi)",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Erkek-Erkek Jumper Kablo",
        "qty": "2 Adet",
        "role": "İletken Bağlantı Hattı",
        "spec": "20cm Esnek Bakır Tel",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "Pin 8 (Dijital)",
        "compPin": "220Ω Direnç -> LED Anot (+)",
        "desc": "Dijital Çıkış (5V / 0V Sinyali)"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "LED Katot (- / Düz Kenar)",
        "desc": "Toprak / Eksi Referans Hattı"
      }
    ],
    "breadboardGuide": "1. LED'in uzun bacağını (Anot +) breadboard üzerinde boş bir satıra, kısa bacağını (Katot -) mavi eksi hattına yerleştirin.\n2. 220Ω direncin bir ucunu LED'in anot satırına, diğer ucunu Arduino Pin 8'e bağlayın.\n3. Breadboard'un mavi eksi hattını Arduino GND pinine bağlayarak devreyi tamamlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: Anasınıfı - Temel Giriş: Tek LED Yakma & Söndürme (Blink)\n * HEDEF SEVİYE: Ana Sınıfı (4-5 Yaş / Erken Çocukluk)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu proje, minik öğrencilerin fiziksel programlama dünyasına ilk adımıdır.\n * Bir mikrodenetleyicinin (Arduino Uno) elektrik akımını açıp kapatarak (Dijital Çıkış)\n * ışık üretebileceğini somut olarak gösterir.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Arduino dijital 8 numaralı pine bağlı olan LED'e 5V elektrik verir (HIGH / 1).\n * 2. 1000 milisaniye (1 saniye) boyunca ışık açık bekler.\n * 3. Ardından elektrik kesilir (LOW / 0) ve LED söner.\n * 4. 1000 milisaniye (1 saniye) boyunca ışık kapalı bekler.\n * 5. Bu döngü sonsuz kez tekrarlanarak \"göz kırpan\" (blink) lamba etkisi oluşturur.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3 (veya uyumlu geliştirme kartı)\n * - 1 x Breadboard (Devre Tahtası)\n * - 1 x 5mm Kırmızı LED (veya istenen renkte LED)\n * - 1 x 220 Ohm Direnç (Renk Kodları: Kırmızı - Kırmızı - Kahverengi - Altın)\n * - 2 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Programlama Kablosu\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * Pin 8 (Dijital)    | 220Ω Direnç -> LED Anot | LED'in uzun bacağına (+) direnç üzerinden\n * GND (Toprak)       | LED Katot (-)           | LED'in kısa bacağına (düz kenar) doğrudan\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez (Arduino çekirdek fonksiyonları kullanılır).\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int LED_PIN = 8; // LED'in bağlı olduğu dijital çıkış pini\n\n// Kurulum Fonksiyonu: Arduino ilk açıldığında veya resetlendiğinde 1 kez çalışır\nvoid setup() {\n  // LED pinini elektrik gönderecek bir ÇIKIŞ (OUTPUT) olarak ayarlıyoruz\n  pinMode(LED_PIN, OUTPUT);\n}\n\n// Ana Döngü: setup() bittikten sonra güç kesilene kadar sürekli tekrarlanır\nvoid loop() {\n  // 1. Adım: LED'e elektrik ver (5V) -> LED Yanar\n  digitalWrite(LED_PIN, HIGH);\n  \n  // 2. Adım: 1000 milisaniye (1 saniye) boyunca bu durumda bekle\n  delay(1000);\n  \n  // 3. Adım: LED'e giden elektriği kes (0V) -> LED Söner\n  digitalWrite(LED_PIN, LOW);\n  \n  // 4. Adım: 1000 milisaniye (1 saniye) boyunca karanlıkta bekle\n  delay(1000);\n  \n  // loop() bittiğinde otomatik olarak başa döner ve LED tekrar yanar.\n}\n"
  },
  "sinif1": {
    "folder": "Sinif_1_Buton_LED",
    "file": "Sinif_1_Buton_LED.ino",
    "title": "1. Sınıf: Buton ile LED Kontrolü (Giriş/Çıkış Mantığı)",
    "shortTitle": "Buton & LED Kontrolü",
    "gradeLabel": "1. Sınıf (6-7 Yaş)",
    "badge": "İlkokul Başlangıç • İnteraktif Giriş • 2/13",
    "objective": "Girdi (Input) ve Çıktı (Output) kavramlarının somutlaştırılması. Fiziksel bir butona basılma eyleminin (Kullanıcı Girdisi) mikrodenetleyici tarafından algılanarak anında bir LED ışığına (Çıktı) dönüştürülmesi.",
    "principle": "Arduino Pin 2'ye bağlı butonu INPUT_PULLUP moduyla sürekli dinler. Butona basılmadığında pin HIGH (5V) seviyesindedir. Basıldığında devre GND'ye tamamlanır ve LOW (0V) olur. if/else şartıyla butona basılınca LED yakılır, bırakılınca söndürülür.",
    "difficulty": "Temel Seviye (Level 2)",
    "duration": "30-40 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Mikrodenetleyici Kartı",
        "spec": "ATmega328P, 16MHz Kristal",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Montaj Zemini",
        "spec": "400 Noktalı Lehimsiz",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "4 Bacaklı Push Buton",
        "qty": "1 Adet",
        "role": "Kullanıcı Girdi Elemanı",
        "spec": "Dokunmatik Yaylı Anahtar (Tactile Switch)",
        "icon": "fas fa-toggle-on",
        "image": "assets/components/push_button.svg"
      },
      {
        "name": "5mm Yeşil LED",
        "qty": "1 Adet",
        "role": "Görsel Çıktı Göstergesi",
        "spec": "2.2V İleri Gerilim",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_green.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "1 Adet",
        "role": "LED Akım Koruması",
        "spec": "1/4W Direnç",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Erkek-Erkek Jumper",
        "qty": "4 Adet",
        "role": "Devre Bağlantı Kabloları",
        "spec": "20cm Standart Jumper",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "Pin 2 (Giriş)",
        "compPin": "Buton 1. Bacağı",
        "desc": "Dahili INPUT_PULLUP Giriş Pini"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Buton Çapraz Bacağı",
        "desc": "Butona basılınca sıfırlama hattı"
      },
      {
        "pin": "Pin 8 (Çıkış)",
        "compPin": "220Ω -> Yeşil LED Anot (+)",
        "desc": "LED Güç Çıkışı"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Yeşil LED Katot (-)",
        "desc": "LED Toprak Hattı"
      }
    ],
    "breadboardGuide": "1. Butonu breadboard'un orta yarığının üzerine yerleştirin (iki bacak üstte, iki bacak altta).\n2. Butonun bir bacağını Arduino Pin 2'ye, çapraz bacağını Arduino GND'ye bağlayın.\n3. Yeşil LED'i 220Ω direnç üzerinden Pin 8'e, katot bacağını ise GND'ye bağlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 1. Sınıf - Buton ile LED Kontrolü (Giriş / Çıkış Mantığı)\n * HEDEF SEVİYE: 1. Sınıf (6-7 Yaş / İlkokul Başlangıç)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler \"Giriş\" (Input) ve \"Çıkış\" (Output) kavramlarını öğrenir.\n * Fiziksel bir düğmeye basılma eylemi (Kullanıcı Girdisi), Arduino tarafından algılanır\n * ve anında bir eyleme (LED Işığı Çıktısı) dönüştürülür.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Arduino, dahili PULL-UP direnci aktif edilmiş 2 numaralı butonu sürekli dinler.\n * 2. Butona basılmadığında pin 5V (HIGH) seviyesindedir.\n * 3. Butona basıldığında devre GND'ye tamamlanır ve pin 0V (LOW) değerini alır.\n * 4. Şartlı mantık (if / else) kullanılarak:\n *    - Eğer butona basılmışsa (LOW) -> LED YANAR (HIGH).\n *    - Eğer butona basılmamışsa (HIGH) -> LED SÖNER (LOW).\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x 4 Bacaklı Push Buton (Dokunmatik Düğme)\n * - 1 x 5mm Yeşil LED\n * - 1 x 220 Ohm Direnç (LED koruması için)\n * - 4 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * Pin 2 (Dijital Giriş) | Buton 1. Bacağı       | INPUT_PULLUP ile yapılandırılır\n * GND (Toprak)       | Buton Çapraz Bacağı     | Butona basılınca GND'ye bağlanır\n * Pin 8 (Dijital Çıkış)| 220Ω Direnç -> LED Anot | LED'in uzun (+) bacağına dirençle\n * GND (Toprak)       | LED Katot (-)           | LED'in kısa (-) bacağına doğrudan\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int BUTTON_PIN = 2; // Butonun bağlı olduğu dijital giriş pini\nconst int LED_PIN    = 8; // LED'in bağlı olduğu dijital çıkış pini\n\nvoid setup() {\n  // LED pinini ÇIKIŞ (OUTPUT) olarak tanımlıyoruz\n  pinMode(LED_PIN, OUTPUT);\n\n  // Buton pinini dahili direnci aktif ederek INPUT_PULLUP olarak ayarlıyoruz.\n  // Bu sayede harici direnç takmaya gerek kalmaz; basılmadığında HIGH, basıldığında LOW okur.\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n}\n\nvoid loop() {\n  // Butonun mevcut durumunu oku (HIGH veya LOW)\n  int buttonState = digitalRead(BUTTON_PIN);\n\n  // INPUT_PULLUP modunda butona basıldığında GND'ye bağlanır ve değer LOW olur.\n  if (buttonState == LOW) {\n    // Butona basıldı: LED'i YAK\n    digitalWrite(LED_PIN, HIGH);\n  } else {\n    // Butona basılmıyor: LED'i SÖNDÜR\n    digitalWrite(LED_PIN, LOW);\n  }\n\n  // Kararlı okuma için kısa bir mikro gecikme (debouncing / ark önleme)\n  delay(10);\n}\n"
  },
  "sinif2": {
    "folder": "Sinif_2_Trafik_Isiklari",
    "file": "Sinif_2_Trafik_Isiklari.ino",
    "title": "2. Sınıf: Trafik Işıkları Simülasyonu (Zamanlama ve Sıralı Mantık)",
    "shortTitle": "Akıllı Trafik Işıkları",
    "gradeLabel": "2. Sınıf (7-8 Yaş)",
    "badge": "İlkokul • Algoritma & Sıralı Mantık • 3/13",
    "objective": "Günlük hayatın en somut algoritması olan trafik ışıklarının modellenmesi. Sıralı mantık (sequential flow), zaman yönetimi ve çoklu çıkış pinlerinin senkronize kontrolünün öğrenilmesi.",
    "principle": "4 aşamalı uluslararası trafik döngüsü işletilir: 1. Kırmızı yanar (5 sn - DUR), 2. Kırmızı ve Sarı birlikte yanar (2 sn - HAZIRLAN), 3. Yalnızca Yeşil yanar (5 sn - GEÇ), 4. Yalnızca Sarı yanar (2 sn - YAVAŞLA). Sıra sürekli yinelenir.",
    "difficulty": "Temel Seviye (Level 3)",
    "duration": "40 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Kontrol Ünitesi",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Tahtası",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "5mm Kırmızı LED",
        "qty": "1 Adet",
        "role": "Dur Sinyali",
        "spec": "2.0V Kırmızı LED",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_red.svg"
      },
      {
        "name": "5mm Sarı LED",
        "qty": "1 Adet",
        "role": "Hazırlan/Yavaşla Sinyali",
        "spec": "2.1V Sarı LED",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_yellow.svg"
      },
      {
        "name": "5mm Yeşil LED",
        "qty": "1 Adet",
        "role": "Geç Sinyali",
        "spec": "2.2V Yeşil LED",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_green.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "3 Adet",
        "role": "LED Akım Koruması",
        "spec": "1/4W Karbon Film",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Erkek-Erkek Jumper",
        "qty": "5 Adet",
        "role": "Haberleşme Telleri",
        "spec": "20cm",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "Pin 10 (Dijital)",
        "compPin": "220Ω -> Kırmızı LED (+)",
        "desc": "Kırmızı Işık Çıkışı"
      },
      {
        "pin": "Pin 9 (Dijital)",
        "compPin": "220Ω -> Sarı LED (+)",
        "desc": "Sarı Işık Çıkışı"
      },
      {
        "pin": "Pin 8 (Dijital)",
        "compPin": "220Ω -> Yeşil LED (+)",
        "desc": "Yeşil Işık Çıkışı"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Tüm LED Katotları (-)",
        "desc": "Ortak Toprak Rayı"
      }
    ],
    "breadboardGuide": "1. Üç LED'i sırayla (Kırmızı, Sarı, Yeşil) breadboard'a dizin.\n2. Her LED'in anot bacağına birer adet 220Ω direnç takıp sırasıyla Pin 10, Pin 9 ve Pin 8'e bağlayın.\n3. Tüm LED'lerin katot (-) bacaklarını breadboard'un mavi eksi hattında toplayıp Arduino GND'ye verin.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 2. Sınıf - Trafik Işıkları Simülasyonu (Zamanlama ve Sıralı Mantık)\n * HEDEF SEVİYE: 2. Sınıf (7-8 Yaş / İlkokul Temel Algoritma)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, günlük hayatta sıkça karşılaştıkları akıllı trafik lambası\n * sistemini kodlayarak sıralı mantık (sequential execution) ve zamanlama (timing)\n * kavramlarını kavrarlar.\n * \n * ÇALIŞMA MANTIĞI:\n * Gerçek trafik ışığı standardına uygun 4 fazlı sıra takip edilir:\n * 1. Faz: Yalnızca KIRMIZI ışık yanar (Araçlar DURUR) -> 5 saniye\n * 2. Faz: KIRMIZI ve SARI ışık birlikte yanar (HAZIRLAN) -> 2 saniye\n * 3. Faz: Kırmızı ve sarı söner, yalnızca YEŞİL ışık yanar (GEÇ) -> 5 saniye\n * 4. Faz: Yeşil söner, yalnızca SARI ışık yanar (DİKKAT / YAVAŞLA) -> 2 saniye\n * Bu döngü sürekli devam ederek güvenli trafik akışını simüle eder.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x Kırmızı LED (5mm)\n * - 1 x Sarı LED (5mm)\n * - 1 x Yeşil LED (5mm)\n * - 3 x 220 Ohm Direnç (Her LED için birer adet)\n * - 5 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı           | Açıklama / Not\n * -----------------------------------------------------------------------------\n * Pin 10 (Dijital)   | 220Ω -> Kırmızı LED Anot | Kırmızı ışık çıkışı (+)\n * Pin 9 (Dijital)    | 220Ω -> Sarı LED Anot    | Sarı ışık çıkışı (+)\n * Pin 8 (Dijital)    | 220Ω -> Yeşil LED Anot   | Yeşil ışık çıkışı (+)\n * GND (Toprak)       | Tüm LED Katotları (-)    | Breadboard mavi eksi hattında birleştirilir\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int RED_PIN    = 10; // Kırmızı LED pini\nconst int YELLOW_PIN = 9;  // Sarı LED pini\nconst int GREEN_PIN  = 8;  // Yeşil LED pini\n\nvoid setup() {\n  // Bütün LED pinlerini ÇIKIŞ (OUTPUT) moduna alıyoruz\n  pinMode(RED_PIN, OUTPUT);\n  pinMode(YELLOW_PIN, OUTPUT);\n  pinMode(GREEN_PIN, OUTPUT);\n\n  // Başlangıçta tüm ışıkları söndürerek temiz bir durum oluşturuyoruz\n  digitalWrite(RED_PIN, LOW);\n  digitalWrite(YELLOW_PIN, LOW);\n  digitalWrite(GREEN_PIN, LOW);\n}\n\nvoid loop() {\n  // -------------------------------------------------------\n  // 1. FAZ: DUR! Yalnızca Kırmızı Işık Yanar\n  // -------------------------------------------------------\n  digitalWrite(RED_PIN, HIGH);\n  digitalWrite(YELLOW_PIN, LOW);\n  digitalWrite(GREEN_PIN, LOW);\n  delay(5000); // 5 saniye kırmızıda bekle\n\n  // -------------------------------------------------------\n  // 2. FAZ: HAZIRLAN! Kırmızı ve Sarı Birlikte Yanar\n  // -------------------------------------------------------\n  digitalWrite(RED_PIN, HIGH);\n  digitalWrite(YELLOW_PIN, HIGH);\n  digitalWrite(GREEN_PIN, LOW);\n  delay(2000); // 2 saniye hazır bekle\n\n  // -------------------------------------------------------\n  // 3. FAZ: GEÇ! Yalnızca Yeşil Işık Yanar\n  // -------------------------------------------------------\n  digitalWrite(RED_PIN, LOW);\n  digitalWrite(YELLOW_PIN, LOW);\n  digitalWrite(GREEN_PIN, HIGH);\n  delay(5000); // 5 saniye yeşilde geçiş\n\n  // -------------------------------------------------------\n  // 4. FAZ: DİKKAT! Yalnızca Sarı Işık Yanar\n  // -------------------------------------------------------\n  digitalWrite(RED_PIN, LOW);\n  digitalWrite(YELLOW_PIN, HIGH);\n  digitalWrite(GREEN_PIN, LOW);\n  delay(2000); // 2 saniye sarıda yavaşla\n  \n  // Sarı söner ve döngü otomatik olarak 1. Faza (Kırmızıya) geri döner.\n}\n"
  },
  "sinif3": {
    "folder": "Sinif_3_Buzzer_Melodi",
    "file": "Sinif_3_Buzzer_Melodi.ino",
    "title": "3. Sınıf: Buzzer ile Melodi ve Ritim (Sesli Geri Bildirim)",
    "shortTitle": "Buzzer ile Müzik & Ritim",
    "gradeLabel": "3. Sınıf (8-9 Yaş)",
    "badge": "İlkokul • Ses Dalgaları & Diziler • 4/13",
    "objective": "Müzik ve kodlama entegrasyonu. Ses frekanslarının (Hz), piezo titreşim fiziğinin, tone() fonksiyonunun ve dizi (Array) veri yapılarının for döngüsü ile melodiler üretmek için kullanılması.",
    "principle": "Piezo kristali verilen Hertz frekansında saniyede yüzlerce kez titreşerek ses dalgası yayar. Kod içerisinde tanımlı frekans dizisi (Do=262Hz, Sol=392Hz vb.) ve vuruş süreleri döngüyle okunarak 'Daha Dün Annemizin' çocuk şarkısı icra edilir.",
    "difficulty": "Orta Başlangıç (Level 4)",
    "duration": "40-45 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Frekans Üreteci",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "Pasif Piezo Buzzer",
        "qty": "1 Adet",
        "role": "Sesli Akustik Çıktı",
        "spec": "Pasif Frekans Girişli, 5V",
        "icon": "fas fa-volume-up",
        "image": "assets/components/buzzer.svg"
      },
      {
        "name": "100 Ohm Direnç",
        "qty": "1 Adet",
        "role": "Ses Seviyesi Yumuşatıcı",
        "spec": "Opsiyonel ses dengeleyici",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Erkek-Erkek Jumper",
        "qty": "2 Adet",
        "role": "Bağlantı Hatları",
        "spec": "20cm",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "Pin 8 (PWM/Çıkış)",
        "compPin": "Buzzer Artı (+) Bacağı",
        "desc": "tone() Fonksiyonu Frekans Sinyali"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Buzzer Eksi (-) Bacağı",
        "desc": "Toprak Hattı"
      }
    ],
    "breadboardGuide": "1. Buzzer'ın uzun veya üzerinde (+) işareti olan bacağını breadboard'da Pin 8'e giden hatta bağlayın.\n2. Kısa veya eksi bacağını doğrudan Arduino GND pinine bağlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 3. Sınıf - Buzzer ile Melodi ve Ritim (Sesli Geri Bildirim)\n * HEDEF SEVİYE: 3. Sınıf (8-9 Yaş / Müzik ve Kodlama Entegrasyonu)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, ses dalgalarının frekanslarını (Hertz cinsinden titreşim)\n * yazılımla kontrol ederek melodiler ve ritimler üretmeyi öğrenirler.\n * Arduino'nun \"tone()\" ve \"noTone()\" fonksiyonları ile sesli geri bildirim mantığı pekiştirilir.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Piezo buzzer içerisindeki kristal plaka, verilen frekansta saniyede yüzlerce kez titrer.\n * 2. Her müzik notasının kendine has bir frekansı vardır (Örn: Do=262Hz, Re=294Hz, Mi=330Hz).\n * 3. Dizi (Array) ve for döngüsü kullanılarak popüler çocuk şarkısı (\"Daha Dün Annemizin\")\n *    notaları ve süreleri sırayla çalınır.\n * 4. Şarkı bittikten sonra 3 saniye beklenir ve tekrar başa döner.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x Pasif Piezo Buzzer (Passive Buzzer)\n * - 1 x 100 Ohm Direnç (İsteğe bağlı, ses seviyesini yumuşatmak için)\n * - 2 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * Pin 8 (Dijital Çıkış)| Buzzer Artı (+) Bacağı | PWM veya dijital pin, ses çıkışı\n * GND (Toprak)       | Buzzer Eksi (-) Bacağı  | Toprak hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez (tone() yerleşik fonksiyondur).\n * ============================================================================== */\n\n// Pin Tanımlaması\nconst int BUZZER_PIN = 8; // Buzzer bağlı olan dijital pin\n\n// Nota Frekansları (Hertz / Hz cinsinden standart ses frekansları)\n#define NOTE_C4 262 // Do\n#define NOTE_D4 294 // Re\n#define NOTE_E4 330 // Mi\n#define NOTE_F4 349 // Fa\n#define NOTE_G4 392 // Sol\n#define NOTE_A4 440 // La\n#define NOTE_B4 494 // Si\n#define NOTE_C5 523 // İnce Do\n\n// \"Daha Dün Annemizin\" Melodi Notaları Dizisi\nint melody[] = {\n  NOTE_C4, NOTE_C4, NOTE_G4, NOTE_G4, NOTE_A4, NOTE_A4, NOTE_G4,\n  NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4, NOTE_D4, NOTE_C4,\n  NOTE_G4, NOTE_G4, NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4,\n  NOTE_G4, NOTE_G4, NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4,\n  NOTE_C4, NOTE_C4, NOTE_G4, NOTE_G4, NOTE_A4, NOTE_A4, NOTE_G4,\n  NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4, NOTE_D4, NOTE_C4\n};\n\n// Notaların Vuruş Süreleri (4 = Dörtlük nota, 2 = İkilik / uzun nota)\nint noteDurations[] = {\n  4, 4, 4, 4, 4, 4, 2,\n  4, 4, 4, 4, 4, 4, 2,\n  4, 4, 4, 4, 4, 4, 2,\n  4, 4, 4, 4, 4, 4, 2,\n  4, 4, 4, 4, 4, 4, 2,\n  4, 4, 4, 4, 4, 4, 2\n};\n\n// Toplam nota sayısı\nconst int TOTAL_NOTES = sizeof(melody) / sizeof(melody[0]);\n\nvoid setup() {\n  // Buzzer pini çıkış olarak tanımlanır\n  pinMode(BUZZER_PIN, OUTPUT);\n}\n\nvoid loop() {\n  // Bütün melodiyi sırayla for döngüsü ile çalıyoruz\n  for (int thisNote = 0; thisNote < TOTAL_NOTES; thisNote++) {\n    // 1 saniye (1000ms) üzerinden nota süresini milisaniyeye çeviriyoruz\n    int durationMs = 1000 / noteDurations[thisNote];\n\n    // Belirlenen frekans ve sürede sesi başlat\n    tone(BUZZER_PIN, melody[thisNote], durationMs);\n\n    // Notaların birbirine karışmaması için hafif bir duraklama payı (%30)\n    int pauseBetweenNotes = durationMs * 1.30;\n    delay(pauseBetweenNotes);\n\n    // Bir sonraki notaya geçmeden önce sesi kes\n    noTone(BUZZER_PIN);\n  }\n\n  // Şarkı tamamlandıktan sonra 3 saniye bekle, sonra tekrar çal\n  delay(3000);\n}\n"
  },
  "sinif4": {
    "folder": "Sinif_4_LDR_Akilli_Gece_Lambasi",
    "file": "Sinif_4_LDR_Akilli_Gece_Lambasi.ino",
    "title": "4. Sınıf: LDR ile Akıllı Gece Lambası (Analog Sensör Mantığı)",
    "shortTitle": "LDR Akıllı Gece Lambası",
    "gradeLabel": "4. Sınıf (9-10 Yaş)",
    "badge": "İlkokul Mezuniyet • Analog Sensör • 5/13",
    "objective": "Çevresel faktörleri algılayan analog sensörlerin dünyasına giriş. Işık seviyesinin gerilime, gerilimin ise 0-1023 sayısal verisine (ADC) dönüştürülmesi; akıllı sokak lambaları mantığının kodlanması.",
    "principle": "LDR ışık aldıkça direnci düşer. 10kΩ direnç ile kurulan voltaj bölücü sayesinde A0 pinine 0-5V arası gerilim gelir. analogRead(A0) ile değer okunur; belirlenen eşik değerin altına düşünce (hava kararınca) LED otomatik yanar, aydınlıkta söner.",
    "difficulty": "Orta Seviye (Level 5)",
    "duration": "45 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Analog-Dijital Çevirici",
        "spec": "10-bit ADC Çözünürlüğü",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "LDR (Foto Direnç)",
        "qty": "1 Adet",
        "role": "Işığa Duyarlı Sensör",
        "spec": "5mm Kadmiyum Sülfit (CdS)",
        "icon": "fas fa-sun",
        "image": "assets/components/ldr_sensor.svg"
      },
      {
        "name": "10k Ohm Direnç",
        "qty": "1 Adet",
        "role": "Voltaj Bölücü Direnci",
        "spec": "Kahverengi-Siyah-Turuncu-Altın",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "5mm Beyaz LED",
        "qty": "1 Adet",
        "role": "Gece Lambası Aydınlatması",
        "spec": "3.0V Parlak Beyaz",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_red.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "1 Adet",
        "role": "LED Akım Koruması",
        "spec": "1/4W",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Erkek-Erkek Jumper",
        "qty": "5 Adet",
        "role": "Kablolar",
        "spec": "20cm",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "LDR 1. Bacağı",
        "desc": "Pozitif Referans Besleme"
      },
      {
        "pin": "A0 (Analog Giriş)",
        "compPin": "LDR ve 10kΩ Kesişim Noktası",
        "desc": "Voltaj Bölücü Ölçüm Sinyali"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "10kΩ Direncin Diğer Ucu",
        "desc": "Toprak Hattı"
      },
      {
        "pin": "Pin 9 (PWM/Çıkış)",
        "compPin": "220Ω -> Beyaz LED (+)",
        "desc": "Lamba Çıkışı"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "LED Katot (-)",
        "desc": "LED Toprak"
      }
    ],
    "breadboardGuide": "1. LDR'yi breadboard'a takın. Bir bacağını Arduino 5V pinine bağlayın.\n2. LDR'nin diğer bacağına 10kΩ direnç bağlayın ve kesişim noktasından Arduino A0 pinine bir jumper çekin.\n3. 10kΩ direncin boştaki bacağını Arduino GND pinine bağlayın.\n4. Beyaz LED'i 220Ω dirençle Pin 9 ve GND arasına bağlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 4. Sınıf - LDR ile Akıllı Gece Lambası (Analog Sensör Mantığı)\n * HEDEF SEVİYE: 4. Sınıf (9-10 Yaş / İlkokul Bitiş - Sensör Temelleri)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, çevresel verileri (ışık yoğunluğu) algılayan analog sensörleri\n * ve mikrodenetleyicinin bu sürekli veriyi nasıl sayısal değerlere (0-1023) dönüştürdüğünü\n * (ADC - Analog Dijital Çevirici) öğrenirler. Sokak lambalarının hava kararınca otomatik\n * yanma prensibi modellenir.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. LDR (Işığa Duyarlı Direnç), üzerine düşen ışık arttıkça direncini düşürür.\n * 2. 10kΩ sabit direnç ile oluşturulan voltaj bölücü devresi sayesinde A0 pinine\n *    0V ile 5V arasında değişen bir gerilim gelir.\n * 3. Arduino \"analogRead(A0)\" ile bu gerilimi 0 ile 1023 arasında bir tam sayıya çevirir.\n * 4. Belirlenen eşik değerin (THRESHOLD = 450) altına düşüldüğünde (hava karardığında):\n *    - Akıllı gece lambası LED'i otomatik olarak YANAR.\n *    - Gün ışığında ise enerji tasarrufu için LED SÖNER.\n * 5. Ölçülen ışık değeri Seri Port Ekranı'na (Serial Monitor) anlık yazdırılır.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x LDR (Işığa Duyarlı Foto Direnç)\n * - 1 x 10k Ohm Direnç (Kahverengi - Siyah - Turuncu - Altın) -> Voltaj Bölücü\n * - 1 x 5mm Beyaz veya Mavi LED\n * - 1 x 220 Ohm Direnç -> LED Koruma\n * - 5 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | LDR 1. Bacağı           | LDR'ye besleme verilir\n * A0 (Analog Giriş)  | LDR 2. Bacak & 10kΩ Kesişimi | Gerilim bölücü orta sinyal hattı\n * GND (Toprak)       | 10kΩ Direncin Diğer Ucu | Voltaj bölücü toprak hattı\n * Pin 9 (Dijital/PWM)| 220Ω Direnç -> LED Anot | LED pozitif (+) besleme hattı\n * GND (Toprak)       | LED Katot (-)           | LED negatif (-) toprak hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int LDR_PIN = A0; // LDR sensörünün bağlı olduğu analog giriş pini\nconst int LED_PIN = 9;  // Gece lambası LED'inin bağlı olduğu çıkış pini\n\n// Işık Eşik Değeri: Ortamın aydınlık/karanlık sınırını belirler.\n// 0 (Zifiri Karanlık) ile 1023 (Çok Parlak Işık) arasındadır.\nconst int LIGHT_THRESHOLD = 450;\n\nvoid setup() {\n  // LED pinini ÇIKIŞ olarak ayarlıyoruz\n  pinMode(LED_PIN, OUTPUT);\n\n  // Seri haberleşmeyi 9600 baud hızında başlatıyoruz (Sensör değerlerini izlemek için)\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"Akilli Gece Lambasi Sistemi Baslatildi\");\n  Serial.println(\"=========================================\");\n}\n\nvoid loop() {\n  // A0 pininden analog ışık seviyesini oku (0 - 1023)\n  int lightLevel = analogRead(LDR_PIN);\n\n  // Değeri seri port ekranına yazdır\n  Serial.print(\"Ortam Isik Seviyesi: \");\n  Serial.print(lightLevel);\n\n  // Eğer ışık seviyesi eşiğin altındaysa -> HAVA KARANLIK\n  if (lightLevel < LIGHT_THRESHOLD) {\n    digitalWrite(LED_PIN, HIGH); // Lambayı aç\n    Serial.println(\" -> [DURUM: KARANLIK - Lamba YANDI]\");\n  } else {\n    digitalWrite(LED_PIN, LOW);  // Lambayı kapat\n    Serial.println(\" -> [DURUM: AYDINLIK - Lamba SÖNDÜ]\");\n  }\n\n  // Ölçümler arasında 250 milisaniye bekle\n  delay(250);\n}\n"
  },
  "sinif5": {
    "folder": "Sinif_5_Potansiyometre_Servo",
    "file": "Sinif_5_Potansiyometre_Servo.ino",
    "title": "5. Sınıf: Potansiyometre ile Servo Motor Açısı Kontrolü",
    "shortTitle": "Potansiyometre & Servo Kol",
    "gradeLabel": "5. Sınıf (10-11 Yaş)",
    "badge": "Ortaokul Başlangıç • Robotik Mekanizma • 6/13",
    "objective": "Hassas açılı motor kontrolü ve robotik kolların temeli. Döner potansiyometreden gelen analog gerilimin matematiksel oranlama (map fonksiyonu) ile 0-180 derece mekanik dönüşe dönüştürülmesi.",
    "principle": "Potansiyometre A0 pinine 0-1023 arası analog değer üretir. map() fonksiyonu bu değeri servo motorun dönebileceği 0-180 derece açıya dönüştürür. Servo.h kütüphanesi Pin 9 üzerinden pals genişliği modülasyonu üreterek motor milini tam istenen dereceye kilitler.",
    "difficulty": "Orta Seviye (Level 6)",
    "duration": "45-50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Hareket Kontrolcüsü",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "TowerPro SG90 Mini Servo",
        "qty": "1 Adet",
        "role": "Hassas Açılı Aktüatör",
        "spec": "9g Ağırlık, 180° Dönüş Açısı, 5V",
        "icon": "fas fa-cogs",
        "image": "assets/components/servo_sg90.svg"
      },
      {
        "name": "10k Ohm Potansiyometre",
        "qty": "1 Adet",
        "role": "Açı Ayar Kolu",
        "spec": "Döner Ayarlı Direnç (Rotary)",
        "icon": "fas fa-sliders-h",
        "image": "assets/components/potentiometer.svg"
      },
      {
        "name": "Erkek-Erkek Jumper",
        "qty": "7 Adet",
        "role": "Kablolar",
        "spec": "20cm",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "Potansiyometre 1 & Servo Kırmızı",
        "desc": "5V Ortak Besleme"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Potansiyometre 3 & Servo Kahverengi",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "A0 (Analog Giriş)",
        "compPin": "Potansiyometre Orta Bacak",
        "desc": "Açı Ayar Voltajı (0-5V)"
      },
      {
        "pin": "Pin 9 (PWM)",
        "compPin": "Servo Turuncu/Sarı Kablo",
        "desc": "Servo PWM Sinyal Hattı"
      }
    ],
    "breadboardGuide": "1. Potansiyometrenin kenar bacaklarını breadboard üzerindeki 5V ve GND raylarına takın.\n2. Potansiyometrenin orta bacağını Arduino A0 pinine bağlayın.\n3. SG90 servonun kahverengi kablosunu GND'ye, kırmızı kablosunu 5V'a, turuncu sinyal kablosunu ise Pin 9'a bağlayın.",
    "libraries": [
      {
        "name": "Servo.h",
        "guide": "Arduino çekirdeğinde yerleşiktir, harici kurulum gerektirmez.",
        "isBuiltin": true
      }
    ],
    "code": "/* ==============================================================================\n * PROJE ADI: 5. Sınıf - Potansiyometre ile Servo Motor Açısı Kontrolü\n * HEDEF SEVİYE: 5. Sınıf (10-11 Yaş / Ortaokul Başlangıç - Robotik Mekanizmalar)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, robotik kollarda ve yönlendirme sistemlerinde kullanılan\n * hassas açılı motorların (Servo Motor) çalışma prensibini öğrenirler. Bir döner\n * direnç (Potansiyometre) ile açı komutu verilerek matematiksel ölçekleme (map fonksiyonu)\n * pratiği yapılır.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Potansiyometre çevrildikçe A0 analog pinine 0V ile 5V arasında gerilim iletir.\n * 2. Arduino \"analogRead(A0)\" ile bu sinyali okur (0 - 1023 sayısal aralığı).\n * 3. \"map()\" matematiksel fonksiyonu kullanılarak 0-1023 aralığı, servonun dönüş\n *    kapasitesi olan 0 - 180 dereceye dönüştürülür.\n * 4. Servo kütüphanesi (Servo.h) vasıtasıyla Pin 9 üzerinden üretilen PWM sinyali ile\n *    motor milinin tam olarak istenilen açıya kilitlenmesi sağlanır.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x TowerPro SG90 Mini Servo Motor (9g)\n * - 1 x 10k Ohm Döner Potansiyometre\n * - 7 x Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | Potansiyometre 1. Bacak | Potansiyometre pozitif besleme\n * A0 (Analog Giriş)  | Potansiyometre Orta Bacak| Ayarlanabilir voltaj çıkışı (Silecek)\n * GND (Toprak)       | Potansiyometre 3. Bacak | Potansiyometre toprak hattı\n * Pin 9 (PWM)        | Servo Sinyal Kablosu    | Turuncu veya Sarı renkli kablo\n * 5V (Güç)           | Servo Besleme Kablosu   | Kırmızı renkli orta kablo\n * GND (Toprak)       | Servo Toprak Kablosu    | Kahverengi veya Siyah kablo\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Servo.h (Arduino IDE içerisinde varsayılan olarak yüklü gelir, harici indirme gerekmez).\n * ============================================================================== */\n\n#include <Servo.h> // Standart Arduino Servo kütüphanesini projeye dahil ediyoruz\n\n// Pin Tanımlamaları\nconst int POT_PIN   = A0; // Potansiyometre analog okuma pini\nconst int SERVO_PIN = 9;  // Servo motor PWM sinyal pini\n\n// Servo nesnesi oluşturuluyor\nServo myServo;\n\nvoid setup() {\n  // Servo motoru Pin 9'a bağlıyoruz\n  myServo.attach(SERVO_PIN);\n\n  // Bilgi amaçlı seri portu başlatıyoruz\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"Servo Motor Aci Kontrol Sistemi Hazir\");\n  Serial.println(\"=========================================\");\n}\n\nvoid loop() {\n  // 1. Adım: Potansiyometreden 0 ile 1023 arasındaki analog değeri oku\n  int potValue = analogRead(POT_PIN);\n\n  // 2. Adım: 0-1023 aralığındaki değeri 0-180 dereceye orantıla (map)\n  int servoAngle = map(potValue, 0, 1023, 0, 180);\n\n  // 3. Adım: Servo motoru hesaplanan açıya hareket ettir\n  myServo.write(servoAngle);\n\n  // 4. Adım: Seri porta anlık değerleri yazdır\n  Serial.print(\"Potansiyometre Degeri: \");\n  Serial.print(potValue);\n  Serial.print(\"  -->  Hesaplanan Servo Acisi: \");\n  Serial.print(servoAngle);\n  Serial.println(\" Derece\");\n\n  // Servonun mekanik olarak hedeflenen açıya ulaşması için kısa bir bekleme\n  delay(15);\n}\n"
  },
  "sinif6": {
    "folder": "Sinif_6_HCSR04_Park_Sensoru",
    "file": "Sinif_6_HCSR04_Park_Sensoru.ino",
    "title": "6. Sınıf: HC-SR04 Ultrasonik Sensör ile Sesli/Işıklı Park Sensörü",
    "shortTitle": "Akıllı Araç Park Sensörü",
    "gradeLabel": "6. Sınıf (11-12 Yaş)",
    "badge": "Ortaokul • Mesafe Fiziği & Otomotiv • 7/13",
    "objective": "Otomobillerdeki geri görüş ve park asistanı sistemlerinin modellenmesi. Ses dalgalarının havada yayılma hızı (ekolokasyon fiziği), süre ölçümü (pulseIn) ve mesafeye göre kademeli alarm tasarımı.",
    "principle": "Trig pininden 10µs süreyle 40kHz ultrasonik ses dalgası fırlatılır. Engele çarpıp dönen dalga Echo piniyle algılanır. Sesin gidiş-dönüş süresi ölçülerek formülle mesafeye (cm) çevrilir: Mesafe = (Sure / 2) * 0.0343. Yaklaştıkça buzzer ve LED daha sık öter ve yanıp söner.",
    "difficulty": "Orta-İleri (Level 7)",
    "duration": "50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Mesafe Hesaplayıcı",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "HC-SR04 Ultrasonik Sensör",
        "qty": "1 Adet",
        "role": "Mesafe Algılayıcı",
        "spec": "2cm - 400cm Menzil, 40kHz Frekans",
        "icon": "fas fa-broadcast-tower",
        "image": "assets/components/ultrasonic_hcsr04.svg"
      },
      {
        "name": "Piezo Buzzer",
        "qty": "1 Adet",
        "role": "Sesli Park Uyarısı",
        "spec": "Sesli Bip İkazı",
        "icon": "fas fa-volume-up",
        "image": "assets/components/buzzer.svg"
      },
      {
        "name": "5mm Kırmızı LED",
        "qty": "1 Adet",
        "role": "Görsel Flaşör Uyarısı",
        "spec": "Kırmızı İkaz Işığı",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_red.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "1 Adet",
        "role": "LED Koruması",
        "spec": "1/4W",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "8 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Erkek & Erkek-Dişi",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "HC-SR04 VCC",
        "desc": "Sensör Beslemesi"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "HC-SR04 GND & Buzzer(-) & LED(-)",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "Pin 9 (Çıkış)",
        "compPin": "HC-SR04 Trig",
        "desc": "Ses Dalgası Tetikleme Pini"
      },
      {
        "pin": "Pin 8 (Giriş)",
        "compPin": "HC-SR04 Echo",
        "desc": "Yankı Dinleme Pini"
      },
      {
        "pin": "Pin 7 (Çıkış)",
        "compPin": "Buzzer Artı (+)",
        "desc": "Sesli Uyarı Pini"
      },
      {
        "pin": "Pin 6 (Çıkış)",
        "compPin": "220Ω -> Kırmızı LED (+)",
        "desc": "Işıklı Flaşör Pini"
      }
    ],
    "breadboardGuide": "1. HC-SR04 sensörünün VCC bacağını 5V'a, GND bacağını GND'ye bağlayın.\n2. Trig bacağını Pin 9'a, Echo bacağını Pin 8'e bağlayın.\n3. Buzzer'ı Pin 7 ve GND'ye, Kırmızı LED'i ise 220Ω dirençle Pin 6 ve GND'ye bağlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 6. Sınıf - HC-SR04 Ultrasonik Sensör ile Sesli/Işıklı Park Sensörü\n * HEDEF SEVİYE: 6. Sınıf (11-12 Yaş / Otomotiv ve Akıllı Araç Teknolojileri)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, modern otomobillerde arka tamponda yer alan geri görüş\n * ve park sensörlerinin çalışma mantığını modeller. Ses dalgalarının yankılanma\n * (ekolokasyon / yarasa prensibi) fiziği, matematiksel formülle mesafeye dönüştürülür.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Arduino, HC-SR04 sensörünün Trig (Tetikleyici) pininden 10 mikrosaniyelik\n *    yüksek frekanslı (40 kHz) ses dalgası fırlatır.\n * 2. Ses dalgası bir engele çarpıp geri döner ve Echo (Yankı) pini tarafından yakalanır.\n * 3. \"pulseIn()\" fonksiyonu sesin havada gidiş-dönüş süresini (mikrosaniye) ölçer.\n * 4. Ses hızı (343 m/s = 0.0343 cm/µs) formülüyle mesafe hesaplanır:\n *    Mesafe (cm) = (Sure / 2) * 0.0343\n * 5. Kademeli geri bildirim:\n *    - 30 cm'den uzak: Güvenli bölge (Sessiz, LED kapalı)\n *    - 15 - 30 cm: Dikkat (Aralıklı sesli bip ve flaşör)\n *    - 5 - 15 cm: Yakın engel (Hızlı bip ve hızlı flaşör)\n *    - 5 cm'den yakın: Tehlike / Acil Dur (Sürekli alarm ve kesintisiz ışık)\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x HC-SR04 Ultrasonik Mesafe Sensörü\n * - 1 x Pasif veya Aktif Buzzer\n * - 1 x 5mm Kırmızı LED\n * - 1 x 220 Ohm Direnç\n * - 8 x Erkek-Erkek veya Erkek-Dişi Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | HC-SR04 VCC             | Sensör beslemesi\n * GND (Toprak)       | HC-SR04 GND             | Sensör toprak hattı\n * Pin 9 (Çıkış)      | HC-SR04 Trig            | Ses dalgası tetikleme pini\n * Pin 8 (Giriş)      | HC-SR04 Echo            | Ses yankı algılama pini\n * Pin 7 (Çıkış)      | Buzzer Artı (+)         | Sesli uyarı çıkışı\n * GND (Toprak)       | Buzzer Eksi (-)         | Buzzer toprak hattı\n * Pin 6 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Görsel uyarı çıkışı\n * GND (Toprak)       | Kırmızı LED Katot (-)   | LED toprak hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int TRIG_PIN   = 9; // Ses fırlatma pini\nconst int ECHO_PIN   = 8; // Yankı dinleme pini\nconst int BUZZER_PIN = 7; // Sesli uyarı pini\nconst int LED_PIN    = 6; // Işıklı uyarı pini\n\nvoid setup() {\n  // Pin modları yapılandırılıyor\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  pinMode(BUZZER_PIN, OUTPUT);\n  pinMode(LED_PIN, OUTPUT);\n\n  // Seri ekranı başlatıyoruz\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"HC-SR04 Akilli Park Sensoru Baslatildi\");\n  Serial.println(\"=========================================\");\n}\n\n// Mesafeyi santimetre olarak ölçen yardımcı fonksiyon\nlong measureDistance() {\n  // Temiz bir sinyal için Trig pinini önce LOW yapıyoruz\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n\n  // 10 mikrosaniyelik ultrasonik ses dalgası gönder\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n\n  // Echo pininden dalganın gidiş-dönüş süresini oku (mikrosaniye)\n  long duration = pulseIn(ECHO_PIN, HIGH);\n\n  // Sesin havadaki yayılma hızı: 343 m/s = 0.0343 cm/mikrosaniye\n  // Gidiş ve geliş olduğu için 2'ye bölüyoruz\n  long distanceCm = (duration / 2) * 0.0343;\n\n  return distanceCm;\n}\n\nvoid loop() {\n  // Güncel mesafeyi ölç\n  long distance = measureDistance();\n\n  // Seri porta yazdır\n  Serial.print(\"Engel Mesafesi: \");\n  Serial.print(distance);\n  Serial.println(\" cm\");\n\n  // Mesafe durumuna göre kademeli tepki\n  if (distance <= 0 || distance > 40) {\n    // 40 cm'den uzakta veya geçersiz: Güvenli\n    digitalWrite(LED_PIN, LOW);\n    noTone(BUZZER_PIN);\n    delay(100);\n  } \n  else if (distance <= 5) {\n    // 5 cm veya daha yakın: KRİTİK TEHLİKE (Sürekli alarm)\n    digitalWrite(LED_PIN, HIGH);\n    tone(BUZZER_PIN, 1000); // Sürekli 1000Hz öt\n    delay(100);\n  } \n  else if (distance <= 15) {\n    // 5-15 cm arası: ÇOK YAKIN (Hızlı bip)\n    digitalWrite(LED_PIN, HIGH);\n    tone(BUZZER_PIN, 800);\n    delay(60);\n    digitalWrite(LED_PIN, LOW);\n    noTone(BUZZER_PIN);\n    delay(60);\n  } \n  else if (distance <= 30) {\n    // 15-30 cm arası: DİKKAT (Orta hızda bip)\n    digitalWrite(LED_PIN, HIGH);\n    tone(BUZZER_PIN, 600);\n    delay(150);\n    digitalWrite(LED_PIN, LOW);\n    noTone(BUZZER_PIN);\n    delay(150);\n  } \n  else {\n    // 30-40 cm arası: UZAK (Yavaş bip)\n    digitalWrite(LED_PIN, HIGH);\n    tone(BUZZER_PIN, 500);\n    delay(300);\n    digitalWrite(LED_PIN, LOW);\n    noTone(BUZZER_PIN);\n    delay(300);\n  }\n}\n"
  },
  "sinif7": {
    "folder": "Sinif_7_I2C_LCD_Sayac",
    "file": "Sinif_7_I2C_LCD_Sayac.ino",
    "title": "7. Sınıf: 2x16 I2C LCD Ekranda Sayaç ve Metin Gösterimi",
    "shortTitle": "I2C LCD Dijital Sayaç",
    "gradeLabel": "7. Sınıf (12-13 Yaş)",
    "badge": "Ortaokul • I2C Endüstriyel Haberleşme • 8/13",
    "objective": "Endüstri standardı I2C iki telli seri haberleşme protokolü ile ekran arayüzü tasarımı. 16 pinlik karmaşık ekranların SDA ve SCL pinleri üzerinden pratik kullanımı ve buton arkı önleme (debouncing) mantığı.",
    "principle": "Arduino, I2C bus üzerinden 0x27 adresindeki PCF8574 modülüne komut yollar. Ekranın 1. satırına 'Bilisim Atolyesi' başlığı, 2. satırına 'Ziyaretci: XX' sayaç bilgisi yazılır. Butona her basıldığında sayaç 1 artırılır ve ekran titreşimsiz güncellenir.",
    "difficulty": "İleri Orta (Level 8)",
    "duration": "50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Haberleşme Yöneticisi",
        "spec": "ATmega328P, I2C Master",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "16x2 Karakter LCD (I2C)",
        "qty": "1 Adet",
        "role": "Kullanıcı Bilgi Ekranı",
        "spec": "HD44780 + PCF8574 I2C Backpack (0x27 Adres)",
        "icon": "fas fa-desktop",
        "image": "assets/components/lcd_1602_i2c.svg"
      },
      {
        "name": "Push Buton",
        "qty": "1 Adet",
        "role": "Sayaç Artırma Tuşu",
        "spec": "4 Bacaklı Dokunmatik Düğme",
        "icon": "fas fa-toggle-on",
        "image": "assets/components/push_button.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "6 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Dişi & Erkek-Erkek",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "LCD VCC",
        "desc": "LCD Beslemesi"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "LCD GND & Buton GND",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "A4 (SDA)",
        "compPin": "LCD SDA",
        "desc": "I2C Seri Veri Hattı"
      },
      {
        "pin": "A5 (SCL)",
        "compPin": "LCD SCL",
        "desc": "I2C Seri Saat Hattı"
      },
      {
        "pin": "Pin 2 (Giriş)",
        "compPin": "Buton 1. Bacağı",
        "desc": "Dahili INPUT_PULLUP Sayaç Pini"
      }
    ],
    "breadboardGuide": "1. I2C LCD arkasındaki 4 pini Arduino'ya bağlayın: GND -> GND, VCC -> 5V, SDA -> A4, SCL -> A5.\n2. Push butonu Pin 2 ve GND arasına bağlayın.\n3. Arduino IDE'den I2C LCD kütüphanesini kurup kodu yükleyin.",
    "libraries": [
      {
        "name": "LiquidCrystal_I2C.h",
        "guide": "Arduino IDE Kütüphane Yöneticisinden 'LiquidCrystal I2C by Frank de Brabander' aratıp kurunuz.",
        "isBuiltin": false
      },
      {
        "name": "Wire.h",
        "guide": "Arduino I2C çekirdek kütüphanesi (Yerleşik).",
        "isBuiltin": true
      }
    ],
    "code": "/* ==============================================================================\n * PROJE ADI: 7. Sınıf - 2x16 I2C LCD Ekranda Sayaç ve Metin Gösterimi\n * HEDEF SEVİYE: 7. Sınıf (12-13 Yaş / Endüstriyel Haberleşme & Arayüzler)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, projelerine kullanıcı arayüzü (UI) kazandırmak amacıyla\n * endüstri standardı I2C (Inter-Integrated Circuit) iki telli seri haberleşme protokolünü\n * öğrenirler. Normalde 16 pin gerektiren bir LCD ekranı, I2C sürücü modülü sayesinde\n * sadece 2 haberleşme pini (SDA ve SCL) ile kontrol ederler.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Arduino, I2C bus üzerinden 0x27 adresindeki LCD entegresine komut gönderir.\n * 2. 1. Satırda sabit karşılama başlığı (\"Bilisim Atolyesi\") gösterilir.\n * 3. 2. Satırda butona basılma sayısını tutan dinamik bir sayaç (\"Ziyaretci: XX\") yer alır.\n * 4. Butona her basıldığında (yazılımsal ark önleme / debounce ile) sayaç bir artar\n *    ve LCD ekran temizlenmeden sadece ilgili koordinat güncellenerek titreşimsiz yazılır.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x 16x2 Karakter LCD Ekran (Arkasına Lehimli I2C Modüllü - PCF8574)\n * - 1 x 4 Bacaklı Push Buton\n * - 6 x Erkek-Dişi ve Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | LCD VCC                 | LCD ekran arka ışık ve mantık beslemesi\n * GND (Toprak)       | LCD GND                 | Ortak toprak hattı\n * A4 (SDA)           | LCD SDA                 | I2C Seri Veri Hattı (Serial Data)\n * A5 (SCL)           | LCD SCL                 | I2C Seri Saat Hattı (Serial Clock)\n * Pin 2 (Dijital)    | Buton 1. Bacağı         | Dahili INPUT_PULLUP kullanılır\n * GND (Toprak)       | Buton Çapraz Bacağı     | Butona basılınca sıfırlama hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * 1. Wire.h (Arduino çekirdeğinde yerleşik - I2C iletişimi için)\n * 2. LiquidCrystal_I2C.h\n *    Kurulum: Arduino IDE -> Araçlar -> Kütüphaneleri Yönet ->\n *    Arama kutusuna \"LiquidCrystal I2C\" yazıp \"Frank de Brabander\" sürümünü kurunuz.\n * ============================================================================== */\n\n#include <Wire.h>              // I2C iletişim kütüphanesi\n#include <LiquidCrystal_I2C.h> // I2C LCD kütüphanesi\n\n// Pin Tanımlamaları\nconst int BUTTON_PIN = 2; // Sayacı artıracak buton pini\n\n// LCD Yapılandırması: (I2C Adresi, Sütun Sayısı, Satır Sayısı)\n// Yaygın I2C adresleri 0x27 veya 0x3F'tir. Ekranınız yanmıyorsa adresi 0x3F deneyiniz.\nLiquidCrystal_I2C lcd(0x27, 16, 2);\n\n// Sayaç ve Buton Kontrol Değişkenleri\nint counter = 0;\nint lastButtonState = HIGH; // PULLUP modunda basılmadığında HIGH'dır\n\nvoid setup() {\n  // Buton pinini dahili dirençle giriş olarak tanımlıyoruz\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n\n  // LCD ekranı başlatıyoruz\n  lcd.init();\n  lcd.backlight(); // Arka ışığı (mavi/yeşil LED) aç\n\n  // 1. Satıra Hoş Geldiniz Başlığı (0. sütun, 0. satır)\n  lcd.setCursor(0, 0);\n  lcd.print(\"Bilisim Atolyesi\");\n\n  // 2. Satıra İlk Sayaç Değerini Yazdır (0. sütun, 1. satır)\n  lcd.setCursor(0, 1);\n  lcd.print(\"Ziyaretci: 0   \");\n\n  // Seri portu bilgilendirme için aç\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"I2C LCD Sayac Sistemi Basariyla Baslatildi\");\n  Serial.println(\"=========================================\");\n}\n\nvoid loop() {\n  // Butonun anlık durumunu oku\n  int currentButtonState = digitalRead(BUTTON_PIN);\n\n  // Buton durumundaki değişimi yakala (HIGH'dan LOW'a geçiş anı = Butona basıldı)\n  if (lastButtonState == HIGH && currentButtonState == LOW) {\n    // Sayacı 1 artır\n    counter++;\n\n    // LCD 2. satırındaki sayıyı güncelle\n    lcd.setCursor(11, 1);\n    lcd.print(counter);\n    lcd.print(\"   \"); // Eski basamak artıklarını temizlemek için boşluk\n\n    // Seri porta da log düş\n    Serial.print(\"Yeni Sayac Degeri: \");\n    Serial.println(counter);\n\n    // Buton arkını (sıçrama / bouncing) önlemek için 200 ms bekleme\n    delay(200);\n  }\n\n  // Son durumu güncelle\n  lastButtonState = currentButtonState;\n}\n"
  },
  "sinif8": {
    "folder": "Sinif_8_DHT11_LCD_Termometre",
    "file": "Sinif_8_DHT11_LCD_Termometre.ino",
    "title": "8. Sınıf: DHT11 ile Dijital Sıcaklık ve Nem Ölçer (LCD Ekranlı)",
    "shortTitle": "Dijital Hava İstasyonu",
    "gradeLabel": "8. Sınıf (13-14 Yaş)",
    "badge": "Ortaokul Mezuniyet • Meteoroloji & IoT • 9/13",
    "objective": "Çevresel telemetri ve akıllı tarım istasyonlarının tasarımı. Tek hat (Single-Bus) dijital sensör protokolü ile bağıl nem (% RH) ve sıcaklık (°C) verilerinin okunup 16x2 LCD ekranda görselleştirilmesi.",
    "principle": "DHT11 sensörü tek bir dijital pin üzerinden mikrodenetleyiciye 40 bitlik veri paketi aktarır. Adafruit DHT kütüphanesi bu veriyi sıcaklık ve neme dönüştürür. isnan() ile hata denetimi yapılır ve 2 saniyede bir LCD ekranda hava istasyonu değerleri güncellenir.",
    "difficulty": "İleri Düzey (Level 9)",
    "duration": "50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Hava İstasyonu Beyni",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "DHT11 Sensörü",
        "qty": "1 Adet",
        "role": "Sıcaklık ve Nem Ölçer",
        "spec": "0-50°C (±2°C), %20-90 RH (±5%)",
        "icon": "fas fa-temperature-high",
        "image": "assets/components/dht11_sensor.svg"
      },
      {
        "name": "16x2 I2C LCD Ekran",
        "qty": "1 Adet",
        "role": "Telemetri Göstergesi",
        "spec": "16 Karakter x 2 Satır Mavi Arka Işık",
        "icon": "fas fa-desktop",
        "image": "assets/components/lcd_1602_i2c.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "8 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Dişi & Erkek-Erkek",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "DHT11 VCC & LCD VCC",
        "desc": "5V Güç Hattı"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "DHT11 GND & LCD GND",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "Pin 4 (Dijital)",
        "compPin": "DHT11 DATA (Sinyal)",
        "desc": "Tek Tel Sayısal İletişim Hattı"
      },
      {
        "pin": "A4 (SDA)",
        "compPin": "LCD SDA",
        "desc": "I2C Veri Hattı"
      },
      {
        "pin": "A5 (SCL)",
        "compPin": "LCD SCL",
        "desc": "I2C Saat Hattı"
      }
    ],
    "breadboardGuide": "1. DHT11 modülünün VCC bacağını 5V'a, GND bacağını GND'ye, DATA bacağını Pin 4'e takın.\n2. I2C LCD ekranın SDA'sını A4'e, SCL'sini A5'e, güç pinlerini 5V ve GND'ye bağlayın.\n3. Adafruit DHT kütüphanesini kurup projeyi yükleyin.",
    "libraries": [
      {
        "name": "DHT.h (Adafruit)",
        "guide": "Kütüphane Yöneticisinden 'DHT sensor library by Adafruit' kurulmalıdır.",
        "isBuiltin": false
      },
      {
        "name": "LiquidCrystal_I2C.h",
        "guide": "I2C LCD kütüphanesi kurulmalıdır.",
        "isBuiltin": false
      },
      {
        "name": "Wire.h",
        "guide": "I2C çekirdek kütüphanesi (Yerleşik).",
        "isBuiltin": true
      }
    ],
    "code": "/* ==============================================================================\n * PROJE ADI: 8. Sınıf - DHT11 ile Dijital Sıcaklık ve Nem Ölçer (LCD Ekranlı)\n * HEDEF SEVİYE: 8. Sınıf (13-14 Yaş / Ortaokul Mezuniyet - Meteoroloji & IoT)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, çevresel izleme istasyonlarında ve akıllı sera/tarım\n * uygulamalarında kullanılan dijital sıcaklık ve bağıl nem sensörünün (DHT11)\n * haberleşme mantığını çözer. Okunan veriler I2C 16x2 LCD ekranda görselleştirilir.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. DHT11 sensörü, tek hat (Single-Bus) dijital protokolü üzerinden Arduino'ya\n *    40 bitlik paketler halinde sıcaklık (°C) ve nem (% RH) bilgisi gönderir.\n * 2. Arduino DHT kütüphanesi bu veri paketini çözümler ve floating-point değerler üretir.\n * 3. Hata koruması (isnan kontrolü) ile sensör bağlantı kopuklukları denetlenir.\n * 4. Ölçülen değerler 16x2 LCD ekrana yazılır:\n *    - Satır 0: \"Sicaklik: XX.X C\"\n *    - Satır 1: \"Bagil Nem: %XX\"\n * 5. DHT11'in donanımsal örnekleme periyoduna saygı duyularak her 2 saniyede bir ölçüm yenilenir.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x DHT11 Sıcaklık ve Bağıl Nem Sensörü (Modüllü veya 3 bacaklı)\n * - 1 x 16x2 I2C Karakter LCD Ekran\n * - 8 x Erkek-Dişi / Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | DHT11 VCC & LCD VCC     | 5V besleme hattı\n * GND (Toprak)       | DHT11 GND & LCD GND     | Ortak toprak hattı\n * Pin 4 (Dijital)    | DHT11 DATA (Sinyal)     | Tek telli dijital veri hattı\n * A4 (SDA)           | LCD SDA                 | I2C Veri Hattı\n * A5 (SCL)           | LCD SCL                 | I2C Saat Hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * 1. DHT sensor library (Adafruit tarafından yazılmış)\n *    Kurulum: Arduino IDE -> Kütüphaneleri Yönet -> \"DHT sensor library\" ara ve kur\n *    (Bağımlılık olarak sorulan \"Adafruit Unified Sensor\" da kurulmalıdır).\n * 2. LiquidCrystal_I2C.h (Frank de Brabander sürümü)\n * 3. Wire.h (Yerleşik)\n * ============================================================================== */\n\n#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n#include <DHT.h>\n\n// Pin ve Sensör Tipi Tanımlamaları\nconst int DHT_PIN = 4;     // DHT11 veri pini\n#define DHTTYPE DHT11      // Sensör türümüz DHT11 (DHT22 için DHT22 yazılır)\n\n// Nesnelerin başlatılması\nDHT dht(DHT_PIN, DHTTYPE);\nLiquidCrystal_I2C lcd(0x27, 16, 2);\n\nvoid setup() {\n  // Seri portu başlat\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"DHT11 Dijital Termometre & Higrometre\");\n  Serial.println(\"=========================================\");\n\n  // LCD ekranı hazırla\n  lcd.init();\n  lcd.backlight();\n  lcd.setCursor(0, 0);\n  lcd.print(\"Hava Istasyonu\");\n  lcd.setCursor(0, 1);\n  lcd.print(\"Sensor Basliyor..\");\n\n  // DHT sensörünü aktif et\n  dht.begin();\n  delay(1500); // Sensörün kararlı hale gelmesi için ilk bekleme\n  lcd.clear();\n}\n\nvoid loop() {\n  // Nem ve sıcaklık değerlerini sensörden oku\n  float humidity = dht.readHumidity();\n  float temperature = dht.readTemperature(); // Santigrat (°C) cinsinden\n\n  // Okuma hatası olup olmadığını kontrol et\n  if (isnan(humidity) || isnan(temperature)) {\n    Serial.println(\"HATA: DHT11 sensorunden veri okunamadi! Baglantilari kontrol ediniz.\");\n    lcd.setCursor(0, 0);\n    lcd.print(\"Sensor Hatasi!  \");\n    lcd.setCursor(0, 1);\n    lcd.print(\"Kablolari Baksana\");\n    delay(2000);\n    return;\n  }\n\n  // 1. Satır: Sıcaklık Gösterimi\n  lcd.setCursor(0, 0);\n  lcd.print(\"Sicaklik: \");\n  lcd.print(temperature, 1); // 1 ondalık basamak\n  lcd.print(\" C \");\n\n  // 2. Satır: Nem Gösterimi\n  lcd.setCursor(0, 1);\n  lcd.print(\"Bagil Nem: %\");\n  lcd.print((int)humidity);\n  lcd.print(\"   \");\n\n  // Seri porta detaylı telemetri çıktısı ver\n  Serial.print(\"Sicaklik: \");\n  Serial.print(temperature);\n  Serial.print(\" °C | Bagil Nem: %\");\n  Serial.println(humidity);\n\n  // DHT11 donanımı saniyede en fazla bir ölçüm yapabilir.\n  // Kararlı ve uzun ömürlü ölçüm için 2 saniye (2000ms) bekliyoruz.\n  delay(2000);\n}\n"
  },
  "sinif9": {
    "folder": "Sinif_9_PIR_Guvenlik_Alarmi",
    "file": "Sinif_9_PIR_Guvenlik_Alarmi.ino",
    "title": "9. Sınıf: PIR Hareket Sensörlü Güvenlik Alarm Sistemi",
    "shortTitle": "PIR Akıllı Güvenlik Alarmı",
    "gradeLabel": "9. Sınıf (14-15 Yaş)",
    "badge": "Lise Başlangıç • Güvenlik & Kızılötesi • 10/13",
    "objective": "Güvenlik otomasyonu ve pasif kızılötesi (PIR) teknolojisinin kavranması. Canlıların yaydığı vücut ısısı dalgalanmalarının Fresnel merceğiyle odaklanıp siber/fiziksel güvenlik alarmına dönüştürülmesi.",
    "principle": "HC-SR501 sensörü ortamın kızılötesi profilini öğrenir. İnsan veya canlı hareketi olduğunda OUT pini 3.3V (HIGH) verir. Normalde yeşil durum LED'i yanarken, ihlal durumunda yeşil söner, kırmızı LED flaşör yapar, çift tonlu polis sireni çalar ve seri porta uyarı loglanır.",
    "difficulty": "Lise Seviyesi (Level 10)",
    "duration": "50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Güvenlik Santrali",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "HC-SR501 PIR Sensör",
        "qty": "1 Adet",
        "role": "Kızılötesi Hareket Dedektörü",
        "spec": "120° Açı, 7 Metre Menzil, Fresnel Mercek",
        "icon": "fas fa-running",
        "image": "assets/components/pir_sensor.svg"
      },
      {
        "name": "Buzzer",
        "qty": "1 Adet",
        "role": "Siren Ses Çıkışı",
        "spec": "Piezo Siren",
        "icon": "fas fa-volume-up",
        "image": "assets/components/buzzer.svg"
      },
      {
        "name": "5mm Kırmızı LED",
        "qty": "1 Adet",
        "role": "Alarm Işığı",
        "spec": "Flaşör Kırmızı",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_red.svg"
      },
      {
        "name": "5mm Yeşil LED",
        "qty": "1 Adet",
        "role": "Sistem Hazır Işığı",
        "spec": "Güvenli Durum Yeşili",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_green.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "2 Adet",
        "role": "LED Koruması",
        "spec": "1/4W",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "8 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Erkek & Erkek-Dişi",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "PIR VCC",
        "desc": "Sensör Beslemesi"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "PIR GND & LED Katotları & Buzzer(-)",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "Pin 2 (Giriş)",
        "compPin": "PIR OUT (Sinyal)",
        "desc": "Dijital Hareket Algılama Pini"
      },
      {
        "pin": "Pin 8 (Çıkış)",
        "compPin": "220Ω -> Kırmızı LED (+)",
        "desc": "Alarm Flaşör Çıkışı"
      },
      {
        "pin": "Pin 7 (Çıkış)",
        "compPin": "220Ω -> Yeşil LED (+)",
        "desc": "Sistem Devrede / Güvenli Göstergesi"
      },
      {
        "pin": "Pin 9 (Çıkış)",
        "compPin": "Buzzer Artı (+)",
        "desc": "Çift Ton Siren Çıkışı"
      }
    ],
    "breadboardGuide": "1. HC-SR501 PIR sensörünü 5V, GND ve Pin 2'ye bağlayın.\n2. Yeşil LED'i 220Ω dirençle Pin 7'ye, Kırmızı LED'i 220Ω dirençle Pin 8'e bağlayın.\n3. Buzzer'ı Pin 9 ve GND arasına takın. İlk 10 saniyelik sensör kalibrasyon süresini bekleyin.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 9. Sınıf - PIR Hareket Sensörlü Güvenlik Alarm Sistemi\n * HEDEF SEVİYE: 9. Sınıf (14-15 Yaş / Lise Başlangıç - Güvenlik & Otomasyon Sistemleri)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, ev ve iş yeri güvenlik sistemlerinde kullanılan pasif kızılötesi\n * (PIR - Passive Infrared) teknolojisinin fiziğini ve dijital alarm mantığını öğrenirler.\n * Canlıların yaydığı vücut ısısı (kızılötesi ışınım) dalgalanmaları tespit edilerek\n * çok kanallı görsel ve işitsel bir güvenlik alarmı tetiklenir.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. HC-SR501 PIR sensörü, Fresnel merceği sayesinde ortamdaki ani kızılötesi ısı\n *    değişimlerini odaklar ve hareket algıladığında OUT pinine 3.3V (HIGH) verir.\n * 2. Arduino'nun 2 numaralı pini bu dijital sinyali dinler.\n * 3. Bekleme Modu (Güvenli): Yeşil durum LED'i yanar, ortam koruma altındadır.\n * 4. Alarm Modu (Tehlike): Hareket algılandığında yeşil LED söner, kırmızı flaşör LED'i\n *    yanıp söner, buzzer çift tonlu polis sireni üretir ve seri porta güvenlik uyarısı loglanır.\n * 5. Hareket sonlandığında sistem otomatik olarak güvenli moda geri döner.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x HC-SR501 PIR Hareket Sensörü\n * - 1 x Pasif / Aktif Buzzer\n * - 1 x 5mm Kırmızı LED (Alarm Lambası)\n * - 1 x 5mm Yeşil LED (Durum Lambası)\n * - 2 x 220 Ohm Direnç\n * - 8 x Erkek-Erkek / Dişi-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | PIR VCC                 | Sensör güç girişi (4.5V - 12V arası)\n * GND (Toprak)       | PIR GND                 | Ortak toprak hattı\n * Pin 2 (Giriş)      | PIR OUT (Sinyal)        | Dijital hareket algılama pini\n * Pin 8 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Alarm uyarısı çıkışı\n * Pin 7 (Çıkış)      | 220Ω -> Yeşil LED (+)   | Sistem aktif / güvenli durum çıkışı\n * Pin 9 (Çıkış)      | Buzzer Artı (+)         | Siren ses çıkışı\n * GND (Toprak)       | Tüm Katotlar & Buzzer(-)| Ortak toprak hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int PIR_PIN      = 2; // PIR sensör sinyal pini\nconst int RED_LED_PIN  = 8; // Kırmızı alarm LED'i\nconst int GREEN_LED_PIN= 7; // Yeşil sistem hazır LED'i\nconst int BUZZER_PIN   = 9; // Alarm sireni buzzer pini\n\nvoid setup() {\n  // Pin modları yapılandırılıyor\n  pinMode(PIR_PIN, INPUT);\n  pinMode(RED_LED_PIN, OUTPUT);\n  pinMode(GREEN_LED_PIN, OUTPUT);\n  pinMode(BUZZER_PIN, OUTPUT);\n\n  // Seri iletişimi başlatıyoruz\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"Guvenlik Sistemi Baslatiliyor...\");\n  Serial.println(\"PIR Sensoru Kalibre Ediliyor (10 sn)... Lutfen Hareket Etmeyiniz.\");\n  Serial.println(\"=========================================\");\n\n  // PIR sensörünün ortam sıcaklığına uyum sağlaması için 10 saniyelik ısınma süresi\n  for (int i = 10; i > 0; i--) {\n    digitalWrite(GREEN_LED_PIN, HIGH);\n    delay(250);\n    digitalWrite(GREEN_LED_PIN, LOW);\n    delay(250);\n    Serial.print(\".\");\n  }\n  \n  digitalWrite(GREEN_LED_PIN, HIGH); // Kalibrasyon tamamlandı, yeşil sabit yansın\n  Serial.println(\"\\n>> SISTEM DEVREDE! Guvenlik Alarmi Aktif. <<\");\n}\n\n// Siren sesi üreten yardımcı fonksiyon\nvoid playSiren() {\n  tone(BUZZER_PIN, 1200); // Tiz ton\n  digitalWrite(RED_LED_PIN, HIGH);\n  delay(120);\n  \n  tone(BUZZER_PIN, 800);  // Bas ton\n  digitalWrite(RED_LED_PIN, LOW);\n  delay(120);\n}\n\nvoid loop() {\n  // PIR hareket durumunu oku (HIGH = Hareket var, LOW = Hareket yok)\n  int motionDetected = digitalRead(PIR_PIN);\n\n  if (motionDetected == HIGH) {\n    // TEHLİKE / İHLAL DURUMU\n    digitalWrite(GREEN_LED_PIN, LOW); // Güvenli ışığını söndür\n    Serial.println(\"[UYARI!] IZINSIZ HAREKET ALGILANDI! Guvenlik ihlali!\");\n    \n    // Siren çal ve kırmızı LED'i flaşör yap\n    playSiren();\n  } else {\n    // GÜVENLİ / HAREKET YOK DURUMU\n    digitalWrite(GREEN_LED_PIN, HIGH); // Sistem güvenli, yeşil yanar\n    digitalWrite(RED_LED_PIN, LOW);   // Kırmızı kapalı\n    noTone(BUZZER_PIN);               // Ses kapalı\n    delay(50);\n  }\n}\n"
  },
  "sinif10": {
    "folder": "Sinif_10_Joystick_RGB_Mikser",
    "file": "Sinif_10_Joystick_RGB_Mikser.ino",
    "title": "10. Sınıf: RGB LED ve Joystick ile Renk/Yön Mikseri",
    "shortTitle": "Joystick & RGB Renk Mikseri",
    "gradeLabel": "10. Sınıf (15-16 Yaş)",
    "badge": "Lise • Oyun Kontrolcüleri & PWM Renk • 11/13",
    "objective": "Oyun kollarında ve endüstriyel konsollarda kullanılan 2 eksenli analog joystick kontrolü. Eklemeli renk teorisi (Additive Color Model - RGB) ile 3 kanallı donanımsal PWM modülasyonu.",
    "principle": "Joystick X (A0) ve Y (A1) analog gerilimleri okunur (0-1023). Bu değerler map() ile 8-bitlik PWM değerlerine (0-255) dönüştürülüp analogWrite() ile RGB LED bacaklarına uygulanır. Joystick butonuna basıldığında (SW - Pin 2) tam güç beyaz ışık modu devreye girer.",
    "difficulty": "Lise Seviyesi (Level 11)",
    "duration": "50 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "PWM Üreteci",
        "spec": "ATmega328P, 6x PWM Kanalı",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "2 Eksenli Joystick (KY-023)",
        "qty": "1 Adet",
        "role": "X/Y Analog Girdi",
        "spec": "Çift Potansiyometre + Buton, 5V",
        "icon": "fas fa-gamepad",
        "image": "assets/components/joystick.svg"
      },
      {
        "name": "RGB LED (Ortak Katot)",
        "qty": "1 Adet",
        "role": "Renk Tayfı Çıktısı",
        "spec": "4 Bacaklı Kırmızı-Yeşil-Mavi LED",
        "icon": "fas fa-palette",
        "image": "assets/components/led_rgb.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "3 Adet",
        "role": "RGB Bacak Koruması",
        "spec": "1/4W",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "9 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Erkek & Erkek-Dişi",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "Joystick VCC",
        "desc": "Joystick Beslemesi"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "Joystick GND & RGB Katot (-)",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "A0 (Analog)",
        "compPin": "Joystick VRx",
        "desc": "X Ekseni Yatay Sinyal"
      },
      {
        "pin": "A1 (Analog)",
        "compPin": "Joystick VRy",
        "desc": "Y Ekseni Dikey Sinyal"
      },
      {
        "pin": "Pin 2 (Dijital)",
        "compPin": "Joystick SW (Buton)",
        "desc": "Dahili INPUT_PULLUP Tıklama Butonu"
      },
      {
        "pin": "Pin 9 (PWM)",
        "compPin": "220Ω -> RGB Kırmızı (R)",
        "desc": "Kırmızı Renk Kanalı (0-255)"
      },
      {
        "pin": "Pin 10 (PWM)",
        "compPin": "220Ω -> RGB Yeşil (G)",
        "desc": "Yeşil Renk Kanalı (0-255)"
      },
      {
        "pin": "Pin 11 (PWM)",
        "compPin": "220Ω -> RGB Mavi (B)",
        "desc": "Mavi Renk Kanalı (0-255)"
      }
    ],
    "breadboardGuide": "1. Joystick VRx'i A0'a, VRy'yi A1'e, SW'yi Pin 2'ye, VCC ve GND'yi ilgili hatlara bağlayın.\n2. RGB LED'in en uzun bacağını (Katot) GND'ye takın.\n3. Kırmızı, Yeşil ve Mavi bacakları birer 220Ω direnç üzerinden sırasıyla Pin 9, Pin 10 ve Pin 11 PWM pinlerine bağlayın.",
    "libraries": [],
    "code": "/* ==============================================================================\n * PROJE ADI: 10. Sınıf - RGB LED ve Joystick ile Renk/Yön Mikseri\n * HEDEF SEVİYE: 10. Sınıf (15-16 Yaş / Lise - Oyun Kontrolcüleri & PWM Renk Teorisi)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler, endüstriyel kumandalarda ve oyun kollarında (gamepad)\n * kullanılan iki eksenli analog joystick mekanizmasını ve ışık tayfı renk teorisini\n * (RGB Eklemeli Renk Karışımı - Additive Color Model) öğrenirler. Mikrodenetleyicinin\n * Donanımsal Pals Genişlik Modülasyonu (PWM) kanalları kullanılarak 16 milyon renk\n * kombinasyonunun temeli atılır.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Joystick, birbirine dik iki potansiyometreden oluşur (X ve Y eksenleri).\n * 2. X ekseni (A0) okuması Kırmızı (Red) kanalının yoğunluğunu belirler.\n * 3. Y ekseni (A1) okuması Mavi (Blue) kanalının yoğunluğunu belirler.\n * 4. İki eksenin vektörel bileşkesi veya ortalaması Yeşil (Green) kanalını besler.\n * 5. Okunan 0-1023 analog veriler \"map()\" ile 8-bitlik PWM aralığına (0-255) dönüştürülür.\n * 6. \"analogWrite()\" ile LED bacaklarına gerilim darbesi gönderilerek ışık karıştırılır.\n * 7. Joystick butonuna (SW - Pin 2) tıklandığında anında tam güç BEYAZ IŞIK modu aktif edilir.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x 2 Eksenli Analog Joystick Modülü (KY-023)\n * - 1 x RGB LED (4 Bacaklı - Ortak Katot)\n * - 3 x 220 Ohm Direnç (R, G, B bacakları için)\n * - 9 x Erkek-Erkek / Erkek-Dişi Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | Joystick VCC            | Joystick beslemesi\n * GND (Toprak)       | Joystick GND & RGB Katot| Ortak toprak hattı\n * A0 (Analog)        | Joystick VRx            | X ekseni yatay hareket (0-1023)\n * A1 (Analog)        | Joystick VRy            | Y ekseni dikey hareket (0-1023)\n * Pin 2 (Dijital)    | Joystick SW (Buton)     | Dahili INPUT_PULLUP ile buton\n * Pin 9 (PWM ~)      | 220Ω -> RGB Kırmızı (R) | Kırmızı renk PWM kontrolü (0-255)\n * Pin 10 (PWM ~)     | 220Ω -> RGB Yeşil (G)   | Yeşil renk PWM kontrolü (0-255)\n * Pin 11 (PWM ~)     | 220Ω -> RGB Mavi (B)    | Mavi renk PWM kontrolü (0-255)\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - Harici kütüphane gerektirmez.\n * ============================================================================== */\n\n// Pin Tanımlamaları\nconst int JOY_X_PIN  = A0; // Joystick X ekseni (Analog)\nconst int JOY_Y_PIN  = A1; // Joystick Y ekseni (Analog)\nconst int JOY_SW_PIN = 2;  // Joystick basma butonu (Dijital)\n\nconst int RED_PIN    = 9;  // Kırmızı LED (PWM Pini)\nconst int GREEN_PIN  = 10; // Yeşil LED (PWM Pini)\nconst int BLUE_PIN   = 11; // Mavi LED (PWM Pini)\n\nvoid setup() {\n  // RGB LED pinlerini çıkış yapıyoruz\n  pinMode(RED_PIN, OUTPUT);\n  pinMode(GREEN_PIN, OUTPUT);\n  pinMode(BLUE_PIN, OUTPUT);\n\n  // Joystick butonunu dahili dirençle dinliyoruz\n  pinMode(JOY_SW_PIN, INPUT_PULLUP);\n\n  // Seri iletişimi başlatıyoruz\n  Serial.begin(9600);\n  Serial.println(\"=========================================\");\n  Serial.println(\"Joystick RGB Renk Mikseri Baslatildi\");\n  Serial.println(\"=========================================\");\n}\n\n// Renk uygulama yardımcı fonksiyonu (Ortak Katot LED için 0=Sönük, 255=Maksimum Parlak)\nvoid setColor(int redVal, int greenVal, int blueVal) {\n  analogWrite(RED_PIN, redVal);\n  analogWrite(GREEN_PIN, greenVal);\n  analogWrite(BLUE_PIN, blueVal);\n}\n\nvoid loop() {\n  // Joystick analog verilerini oku (0 - 1023)\n  int xVal = analogRead(JOY_X_PIN);\n  int yVal = analogRead(JOY_Y_PIN);\n  int btnState = digitalRead(JOY_SW_PIN);\n\n  // Butona basılmışsa (SW == LOW): Özel Flaşör / Beyaz Işık Modu\n  if (btnState == LOW) {\n    setColor(255, 255, 255); // Tam güç Beyaz Işık\n    Serial.println(\"[MOD] Joystick Butonuna Basildi -> Tam Güç BEYAZ Renk!\");\n    delay(100);\n    return;\n  }\n\n  // Analog okumaları 8-bit PWM parlaklığına (0 - 255) dönüştür\n  int redBrightness   = map(xVal, 0, 1023, 0, 255);\n  int blueBrightness  = map(yVal, 0, 1023, 0, 255);\n  // Yeşil kanalı iki eksenin dengeli harmanlanmasıyla elde edilir\n  int greenBrightness = map((xVal + yVal) / 2, 0, 1023, 255, 0);\n\n  // LED'lere yeni renk voltajlarını uygula\n  setColor(redBrightness, greenBrightness, blueBrightness);\n\n  // Değerleri seri porttan gözlemle\n  Serial.print(\"X: \");\n  Serial.print(xVal);\n  Serial.print(\" | Y: \");\n  Serial.print(yVal);\n  Serial.print(\"  -->  RGB=(\");\n  Serial.print(redBrightness);\n  Serial.print(\", \");\n  Serial.print(greenBrightness);\n  Serial.print(\", \");\n  Serial.print(blueBrightness);\n  Serial.println(\")\");\n\n  delay(30); // Akıcı renk geçişi için küçük gecikme\n}\n"
  },
  "sinif11": {
    "folder": "Sinif_11_RFID_Kapi_Gecis",
    "file": "Sinif_11_RFID_Kapi_Gecis.ino",
    "title": "11. Sınıf: RC522 RFID Modülü ile Akıllı Kapı Geçiş Kontrolü",
    "shortTitle": "RFID Akıllı Kapı Geçiş Kontrolü",
    "gradeLabel": "11. Sınıf (16-17 Yaş)",
    "badge": "Lise İleri Düzey • SPI & Kimlik Doğrulama • 12/13",
    "objective": "Temassız akıllı kartlar, turnike geçiş ve otel kapı sistemlerinin tasarımı. 13.56MHz radyo frekanslı kimlik doğrulama, yüksek hızlı SPI veri yolu ve servo kilit otomasyonu.",
    "principle": "RC522 modülü elektromanyetik indüksiyonla pasif kartı uyandırır ve SPI üzerinden kartın 4 baytlık benzersiz UID numarasını okur. Kodda tanımlı yetkili UID ile eşleşirse yeşil LED yanar, melodi çalar ve servo motor 90° dönerek kapıyı açar (3 sn sonra kilitlenir). Yetkisiz kartta alarm verilir.",
    "difficulty": "İleri Düzey (Level 12)",
    "duration": "55 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "Erişim Kontrol Ünitesi",
        "spec": "ATmega328P, SPI Master",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "RC522 RFID Modülü",
        "qty": "1 Adet",
        "role": "Temassız Kart Okuyucu",
        "spec": "13.56 MHz, SPI Arayüzü (3.3V Gerilim)",
        "icon": "fas fa-id-card",
        "image": "assets/components/rfid_rc522.svg"
      },
      {
        "name": "TowerPro SG90 Servo",
        "qty": "1 Adet",
        "role": "Kapı Kilidi Mekanizması",
        "spec": "9g Açılı Servo Motor",
        "icon": "fas fa-door-open",
        "image": "assets/components/servo_sg90.svg"
      },
      {
        "name": "Yeşil & Kırmızı LED",
        "qty": "2 Adet",
        "role": "Geçiş Durumu Göstergesi",
        "spec": "5mm Yetkili/Yetkisiz Işıkları",
        "icon": "fas fa-traffic-light",
        "image": "assets/components/led_green.svg"
      },
      {
        "name": "Buzzer",
        "qty": "1 Adet",
        "role": "Sesli Doğrulama",
        "spec": "Onay ve Hata Sesleri",
        "icon": "fas fa-volume-up",
        "image": "assets/components/buzzer.svg"
      },
      {
        "name": "220 Ohm Direnç",
        "qty": "2 Adet",
        "role": "LED Koruması",
        "spec": "1/4W",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "10 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Dişi & Erkek-Erkek",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "3.3V (DİKKAT!)",
        "compPin": "RC522 VCC (3.3V)",
        "desc": "KESİNLİKLE 5V VERİLMEMELİDİR!"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "RC522 GND & LED'ler & Buzzer & Servo",
        "desc": "Ortak Toprak Hattı"
      },
      {
        "pin": "Pin 9 (Dijital)",
        "compPin": "RC522 RST",
        "desc": "Reset Pini"
      },
      {
        "pin": "Pin 10 (SS)",
        "compPin": "RC522 SDA",
        "desc": "SPI Slave Select Pini"
      },
      {
        "pin": "Pin 11 (MOSI)",
        "compPin": "RC522 MOSI",
        "desc": "Master Out Slave In"
      },
      {
        "pin": "Pin 12 (MISO)",
        "compPin": "RC522 MISO",
        "desc": "Master In Slave Out"
      },
      {
        "pin": "Pin 13 (SCK)",
        "compPin": "RC522 SCK",
        "desc": "SPI Seri Saat Sinyali"
      },
      {
        "pin": "Pin 5 (PWM)",
        "compPin": "SG90 Servo Sinyal",
        "desc": "Kapı Kilit Mandalı"
      },
      {
        "pin": "Pin 6 (Çıkış)",
        "compPin": "220Ω -> Yeşil LED (+)",
        "desc": "Yetkili Giriş Işığı"
      },
      {
        "pin": "Pin 7 (Çıkış)",
        "compPin": "220Ω -> Kırmızı LED (+)",
        "desc": "Hatalı Kart Işığı"
      },
      {
        "pin": "Pin 8 (Çıkış)",
        "compPin": "Buzzer Artı (+)",
        "desc": "Sesli Bildirim"
      }
    ],
    "breadboardGuide": "1. ÇOK ÖNEMLİ: RC522 VCC bacağını Arduino 3.3V pinine bağlayın (5V karta zarar verir).\n2. SPI bacaklarını bağlayın: RST->9, SDA->10, MOSI->11, MISO->12, SCK->13.\n3. Servoyu Pin 5'e, Yeşil LED'i Pin 6'ya, Kırmızı LED'i Pin 7'ye, Buzzer'ı Pin 8'e bağlayın.",
    "libraries": [
      {
        "name": "MFRC522.h",
        "guide": "Kütüphane Yöneticisinden 'MFRC522 by GithubCommunity' kurulmalıdır.",
        "isBuiltin": false
      },
      {
        "name": "SPI.h",
        "guide": "Arduino SPI haberleşme kütüphanesi (Yerleşik).",
        "isBuiltin": true
      },
      {
        "name": "Servo.h",
        "guide": "Arduino servo kütüphanesi (Yerleşik).",
        "isBuiltin": true
      }
    ],
    "code": "/* ==============================================================================\n * PROJE ADI: 11. Sınıf - RC522 RFID Modülü ile Akıllı Kapı Geçiş Kontrolü\n * HEDEF SEVİYE: 11. Sınıf (16-17 Yaş / Lise İleri Düzey - Kimlik Doğrulama & SPI Protokolü)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler; kurumsal bina girişlerinde, metro turnikelerinde ve otel\n * kapı kilitlerinde kullanılan Radyo Frekansı ile Tanımlama (RFID) teknolojisini\n * ve yüksek hızlı SPI (Serial Peripheral Interface) veri yolunu öğrenirler.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. RC522 modülü 13.56 MHz elektromanyetik alan yayar.\n * 2. Pasif RFID kart veya anahtarlık bu alana girdiğinde indüksiyonla beslenir\n *    ve içindeki benzersiz seri numarasını (UID - Unique Identifier) telsizle yayınlar.\n * 3. Arduino SPI protokolü üzerinden kartın 4 baytlık UID kodunu okur.\n * 4. Hafızadaki yetkili UID ile karşılaştırma yapılır:\n *    - YETKİLİ KART: Yeşil LED yanar, onay melodisi çalar, servo motor 90 derece\n *      açılarak kapı kilidini açar. 3 saniye sonra otomatik kilitlenir.\n *    - YETKİSİZ KART: Kırmızı LED yanar, kalın hata tonu çalar, kilit açılmaz\n *      ve seri porta güvenlik alarm kaydı düşülür.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x RC522 13.56 MHz RFID Okuyucu Modülü\n * - 1 x TowerPro SG90 Mini Servo Motor (Kilit Mekanizması)\n * - 1 x 5mm Yeşil LED (Yetkili Giriş)\n * - 1 x 5mm Kırmızı LED (Geçersiz Kart)\n * - 1 x Piezo Buzzer\n * - 2 x 220 Ohm Direnç\n * - 1 x 13.56 MHz RFID Kart veya Mavi Anahtarlık\n * - 10 x Erkek-Dişi / Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 3.3V (DİKKAT!)     | RC522 3.3V (VCC)        | KESİNLİKLE 5V BAĞLAMAYINIZ! (Modül bozulur)\n * GND (Toprak)       | RC522 GND               | Ortak toprak hattı\n * Pin 9 (Dijital)    | RC522 RST (Reset)       | Modül donanımsal resetleme pini\n * Pin 10 (SS / SDA)  | RC522 SDA (Slave Select)| SPI Seçim Hattı\n * Pin 11 (MOSI)      | RC522 MOSI              | Master Out Slave In hattı\n * Pin 12 (MISO)      | RC522 MISO              | Master In Slave Out hattı\n * Pin 13 (SCK)       | RC522 SCK               | SPI Seri Saat Hattı\n * Pin 5 (PWM)        | SG90 Servo Sinyal       | Kapı mandalını çeviren servo\n * Pin 6 (Çıkış)      | 220Ω -> Yeşil LED (+)   | Yetkili geçiş ışığı\n * Pin 7 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Hatalı kart ışığı\n * Pin 8 (Çıkış)      | Buzzer (+)              | Sesli bildirim\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * 1. SPI.h (Yerleşik)\n * 2. MFRC522.h\n *    Kurulum: Arduino IDE -> Kütüphaneleri Yönet -> \"MFRC522 by GithubCommunity\" kurunuz.\n * 3. Servo.h (Yerleşik)\n * ============================================================================== */\n\n#include <SPI.h>\n#include <MFRC522.h>\n#include <Servo.h>\n\n// Pin Yapılandırması\nconst int RST_PIN     = 9;\nconst int SS_PIN      = 10;\nconst int SERVO_PIN   = 5;\nconst int GREEN_LED   = 6;\nconst int RED_LED     = 7;\nconst int BUZZER_PIN  = 8;\n\n// Donanım Nesneleri\nMFRC522 mfrc522(SS_PIN, RST_PIN);\nServo lockServo;\n\n// Tanımlı Yetkili Kartın UID Kodu (Kendi kartınızın kodunu seri porttan okuyup buraya yazınız!)\n// Örnek format: \"A1 B2 C3 D4\"\nString authorizedUID = \"D3 7A 54 1B\"; \n\nvoid setup() {\n  // Pin modları\n  pinMode(GREEN_LED, OUTPUT);\n  pinMode(RED_LED, OUTPUT);\n  pinMode(BUZZER_PIN, OUTPUT);\n\n  // Servo motoru başlangıçta kapalı (kilitli = 0 derece) pozisyonuna al\n  lockServo.attach(SERVO_PIN);\n  lockServo.write(0);\n\n  // Seri portu başlat\n  Serial.begin(9600);\n  SPI.begin();         // SPI veri yolunu başlat\n  mfrc522.PCD_Init();  // RC522 RFID okuyucuyu başlat\n\n  Serial.println(\"=========================================\");\n  Serial.println(\"RFID Akilli Kapi Gecis Sistemi Devrede\");\n  Serial.println(\"Lutfen Karti Okuyucuya Yaklastiriniz...\");\n  Serial.println(\"=========================================\");\n}\n\n// Onay Sesi ve Melodisi\nvoid playSuccess() {\n  tone(BUZZER_PIN, 1000, 100);\n  delay(120);\n  tone(BUZZER_PIN, 1500, 150);\n}\n\n// Hata Sesi\nvoid playError() {\n  tone(BUZZER_PIN, 300, 400);\n  delay(400);\n}\n\nvoid loop() {\n  // Yeni bir kart yaklaştı mı kontrol et\n  if (!mfrc522.PICC_IsNewCardPresent()) {\n    return;\n  }\n\n  // Kartın seri numarası (UID) başarıyla okundu mu?\n  if (!mfrc522.PICC_ReadCardSerial()) {\n    return;\n  }\n\n  // Okunan UID'yi String formatına dönüştür\n  String readUID = \"\";\n  for (byte i = 0; i < mfrc522.uid.size; i++) {\n    readUID += (mfrc522.uid.uidByte[i] < 0x10 ? \"0\" : \"\");\n    readUID += String(mfrc522.uid.uidByte[i], HEX);\n    if (i < mfrc522.uid.size - 1) readUID += \" \";\n  }\n  readUID.toUpperCase(); // Harfleri büyük yap\n\n  Serial.print(\"Okunan Kart UID: [ \");\n  Serial.print(readUID);\n  Serial.print(\" ] --> \");\n\n  // Kart Yetki Kontrolü\n  if (readUID == authorizedUID) {\n    Serial.println(\"DURUM: YETKILI KART! Kapi Aciliyor...\");\n    \n    // Yeşil LED yak & Başarı sesi çal\n    digitalWrite(GREEN_LED, HIGH);\n    playSuccess();\n\n    // Servoyu 90 derece çevirerek kapı mandalını aç\n    lockServo.write(90);\n    delay(3000); // 3 saniye boyunca kapıyı açık tut\n\n    // Kilit tekrar kapansın\n    lockServo.write(0);\n    digitalWrite(GREEN_LED, LOW);\n    Serial.println(\"Kapi Otomatik Olarak Kilitlendi.\");\n  } else {\n    Serial.println(\"DURUM: YETKISIZ KART! Erisim Reddedildi!\");\n    \n    // Kırmızı LED yak & Hata tonu çal\n    digitalWrite(RED_LED, HIGH);\n    playError();\n    digitalWrite(RED_LED, LOW);\n  }\n\n  // Kart okumayı sonlandır\n  mfrc522.PICC_HaltA();\n  mfrc522.PCD_StopCrypto1();\n  delay(1000); // Çift okumayı önlemek için 1 saniye bekle\n}\n"
  },
  "sinif12": {
    "folder": "Sinif_12_Bluetooth_Role_Otomasyon",
    "file": "Sinif_12_Bluetooth_Role_Otomasyon.ino",
    "title": "12. Sınıf: Bluetooth (HC-05/06) Kontrollü Otomasyon & Röle ile Yüksek Güç Kontrolü",
    "shortTitle": "Bluetooth & Röle Otomasyonu",
    "gradeLabel": "12. Sınıf (17-18 Yaş)",
    "badge": "Lise Mezuniyet • IoT & Endüstriyel Otomasyon • 13/13",
    "objective": "Nesnelerin İnterneti (IoT), akıllı ev sistemleri ve endüstriyel anahtarlama. Mobil telefon üzerinden kablosuz UART Bluetooth iletişimi ve optokuplör galvanik izolasyonlu röle ile yüksek güç kontrolü.",
    "principle": "Akıllı telefon Bluetooth terminalinden '1' veya '0' karakterleri gönderilir. HC-05 modülü bu sinyali yakalayıp SoftwareSerial ile Arduino'ya iletir. Mikrodenetleyici optik yalıtımlı röleyi tetikleyerek yüksek voltajlı yükü (lamba/motor) açıp kapatır ve durum raporunu telefona geri yollar.",
    "difficulty": "Mezuniyet / Profesyonel (Level 13)",
    "duration": "60 Dakika",
    "components": [
      {
        "name": "Arduino Uno R3",
        "qty": "1 Adet",
        "role": "IoT Ana Kontrolcü",
        "spec": "ATmega328P",
        "icon": "fas fa-microchip",
        "image": "assets/components/arduino_uno.svg"
      },
      {
        "name": "Breadboard",
        "qty": "1 Adet",
        "role": "Devre Zemini",
        "spec": "400 Noktalı",
        "icon": "fas fa-border-all",
        "image": "assets/components/breadboard.svg"
      },
      {
        "name": "HC-05 / HC-06 Bluetooth",
        "qty": "1 Adet",
        "role": "Kablosuz SPP İletişim",
        "spec": "UART Seri Port, 2.4GHz Kablosuz",
        "icon": "fab fa-bluetooth-b",
        "image": "assets/components/bluetooth_hc05.svg"
      },
      {
        "name": "5V 1-Kanal Röle Modülü",
        "qty": "1 Adet",
        "role": "Yüksek Güç Anahtarlama",
        "spec": "Optokuplör Korumalı, 10A 250VAC / 30VDC",
        "icon": "fas fa-bolt",
        "image": "assets/components/relay_module.svg"
      },
      {
        "name": "Durum LED'i",
        "qty": "1 Adet",
        "role": "Görsel Yük Göstergesi",
        "spec": "5mm Mavi LED",
        "icon": "fas fa-lightbulb",
        "image": "assets/components/led_green.svg"
      },
      {
        "name": "Dirençler (1kΩ & 2kΩ & 220Ω)",
        "qty": "3 Adet",
        "role": "Voltaj Bölücü & LED Koruma",
        "spec": "HC-05 RX koruma dirençleri",
        "icon": "fas fa-wave-square",
        "image": "assets/components/resistor.svg"
      },
      {
        "name": "Jumper Kablolar",
        "qty": "10 Adet",
        "role": "Kablolar",
        "spec": "Erkek-Dişi & Erkek-Erkek",
        "icon": "fas fa-bezier-curve",
        "image": "assets/components/jumper_wires.svg"
      }
    ],
    "pinout": [
      {
        "pin": "5V (Güç)",
        "compPin": "HC-05 VCC & Röle VCC",
        "desc": "5V Ortak Güç Hattı"
      },
      {
        "pin": "GND (Toprak)",
        "compPin": "HC-05 GND & Röle GND & LED(-)",
        "desc": "Ortak Toprak Referansı"
      },
      {
        "pin": "Pin 2 (Soft RX)",
        "compPin": "HC-05 TXD",
        "desc": "Telefondan Gelen Veri Girişi"
      },
      {
        "pin": "Pin 3 (Soft TX)",
        "compPin": "1kΩ/2kΩ Bölücü -> HC-05 RXD",
        "desc": "Arduino'dan HC-05'e Güvenli 3.3V TX"
      },
      {
        "pin": "Pin 7 (Dijital)",
        "compPin": "Röle IN Sinyali",
        "desc": "Röle Bobin Tetikleme Pini"
      },
      {
        "pin": "Pin 8 (Dijital)",
        "compPin": "220Ω -> Durum LED (+)",
        "desc": "Röle Durum Göstergesi"
      }
    ],
    "breadboardGuide": "1. HC-05 modülünün TXD'sini Arduino Pin 2'ye bağlayın.\n2. Arduino Pin 3'ten gelen hattı 1kΩ ve 2kΩ gerilim bölücü ile 3.3V seviyesine düşürüp HC-05 RXD'ye bağlayın.\n3. Röle modülünün IN pinini Pin 7'ye, VCC ve GND'yi beslemeye bağlayın.\n4. Durum LED'ini Pin 8 ve GND arasına bağlayın.",
    "libraries": [
      {
        "name": "SoftwareSerial.h",
        "guide": "Arduino çekirdeğinde yerleşiktir (Pin 0/1 USB portunu meşgul etmez).",
        "isBuiltin": true
      }
    ],
    "code": "/* ==============================================================================\n * PROJE ADI: 12. Sınıf - Bluetooth (HC-05/06) Kontrollü Otomasyon & Röle ile Yüksek Güç Kontrolü\n * HEDEF SEVİYE: 12. Sınıf (17-18 Yaş / Lise Mezuniyet - IoT, Kablosuz İletişim & Endüstriyel Otomasyon)\n * \n * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:\n * Bu projede öğrenciler; Nesnelerin İnterneti (IoT), akıllı ev sistemleri ve endüstriyel\n * otomasyonun temelini oluşturan kablosuz UART haberleşmesini (Bluetooth) ve galvanik\n * optik yalıtımlı röle sürücülerini öğrenirler. Düşük gerilimli (5V) mikrodenetleyicilerle\n * yüksek voltajlı (220V AC şebeke veya 12V-24V DC motorlar) yüklerin güvenle nasıl\n * anahtarlandığı kavranır.\n * \n * ÇALIŞMA MANTIĞI:\n * 1. Akıllı telefon veya bilgisayardaki Bluetooth terminal uygulamasından komut gönderilir.\n * 2. HC-05/HC-06 Bluetooth modülü bu telsiz sinyali yakalar ve SoftwareSerial (Pin 2, Pin 3)\n *    üzerinden 9600 baud hızında Arduino'ya aktarır.\n * 3. Gelen komut karakterine göre eylem gerçekleştirilir:\n *    - '1' Komutu: Röleyi AÇAR (Devre kapanır, lamba/motor çalışır), Durum LED'i yanar.\n *                  Telefona \"OK: YUK CALISTIRILDI\" geri bildirimi döner.\n *    - '0' Komutu: Röleyi KAPATIR (Devre açılır, yük söner), Durum LED'i söner.\n *                  Telefona \"OK: YUK DURDURULDU\" geri bildirimi döner.\n *    - 'T' veya '?' Komutu: Güncel röle durumunu telefona raporlar.\n * 4. Röle üzerindeki dahili optokuplör sayesinde mikrodenetleyici kartı yüksek akım\n *    parazitlerinden ve şebeke dalgalanmalarından %100 izole edilir.\n * \n * GEREKLİ DEVRE ELEMANLARI LİSTESİ:\n * - 1 x Arduino Uno R3\n * - 1 x Breadboard\n * - 1 x HC-05 veya HC-06 Bluetooth SPP Seri Modülü\n * - 1 x 1 Kanallı 5V Röle Modülü (Optokuplör Korumalı)\n * - 1 x 5mm Mavi veya Yeşil Durum LED'i\n * - 1 x 220 Ohm Direnç (LED için)\n * - 1 x 1k Ohm ve 1 x 2k Ohm Direnç (HC-05 RX bacağı voltaj bölücü için)\n * - 10 x Erkek-Dişi / Erkek-Erkek Jumper Kablo\n * - 1 x USB Tip-B Kablo\n * \n * DETAYLI PİN BAĞLANTI TABLOSU:\n * -----------------------------------------------------------------------------\n * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not\n * -----------------------------------------------------------------------------\n * 5V (Güç)           | HC-05 VCC & Röle VCC    | 5V ortak güç hattı\n * GND (Toprak)       | HC-05 GND & Röle GND    | Ortak toprak referans hattı\n * Pin 2 (Soft RX)    | HC-05 TXD               | Telefondan gelen veriyi okur\n * Pin 3 (Soft TX)    | 1kΩ & 2kΩ -> HC-05 RXD  | Voltaj bölücü ile 3.3V seviyesine düşürülür\n * Pin 7 (Dijital)    | Röle IN (Kontrol Girişi)| Röleyi tetikleyen kontrol pini\n * Pin 8 (Dijital)    | 220Ω -> Durum LED (+)   | Görsel geri bildirim LED'i\n * GND (Toprak)       | Durum LED Katot (-)     | LED toprak hattı\n * -----------------------------------------------------------------------------\n * \n * GEREKLİ KÜTÜPHANELER:\n * - SoftwareSerial.h (Arduino çekirdeğinde yerleşik gelir, donanımsal Pin 0/1 USB portunu\n *   meşgul etmemek için yazılımsal seri port kullanılır).\n * \n * GÜVENLİK UYARISI:\n * 220V AC şebeke gerilimi ile çalışırken kesinlikle çıplak kablolara dokunmayınız!\n * Okul ve sınıf ortamında rölenin kontaklarına 9V-12V DC fan veya LED şerit bağlayarak\n * güvenli deneyler yapılması pedagojik açıdan tavsiye edilir.\n * ============================================================================== */\n\n#include <SoftwareSerial.h> // Yazılımsal Seri Haberleşme Kütüphanesi\n\n// Pin Tanımlamaları\nconst int BT_RX_PIN  = 2; // Arduino RX (Bluetooth TX'e bağlanır)\nconst int BT_TX_PIN  = 3; // Arduino TX (Bluetooth RX'e voltaj bölücüyle gider)\nconst int RELAY_PIN  = 7; // Röle modülü kontrol sinyali\nconst int STATUS_LED = 8; // Durum gösterge LED'i\n\n// Yazılımsal Bluetooth seri port nesnesi (RX, TX)\nSoftwareSerial bluetooth(BT_RX_PIN, BT_TX_PIN);\n\n// Çoğu 5V röle modülü \"Low Level Trigger\" (Aktif-LOW) mantığıyla çalışır.\n// Röleyi açmak için LOW, kapatmak için HIGH verilir.\nconst int RELAY_ON  = LOW;  \nconst int RELAY_OFF = HIGH; \n\nbool isRelayActive = false; // Rölenin anlık durum bayrağı\n\nvoid setup() {\n  // Pin modları ayarlanıyor\n  pinMode(RELAY_PIN, OUTPUT);\n  pinMode(STATUS_LED, OUTPUT);\n\n  // Başlangıçta röleyi güvenli kapalı duruma getiriyoruz\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  digitalWrite(STATUS_LED, LOW);\n  isRelayActive = false;\n\n  // Bilgisayar Seri Portunu başlat (9600 baud)\n  Serial.begin(9600);\n  // Bluetooth Seri Portunu başlat (HC-05/06 varsayılan hızı 9600 baud)\n  bluetooth.begin(9600);\n\n  Serial.println(\"==================================================\");\n  Serial.println(\"12. Sinif Bluetooth Role Otomasyon Sistemi Hazir\");\n  Serial.println(\"Komutlar: [1] Ac | [0] Kapat | [T] Durum Oku\");\n  Serial.println(\"==================================================\");\n}\n\nvoid loop() {\n  // Bluetooth üzerinden telefondan gelen veri var mı?\n  if (bluetooth.available() > 0) {\n    char command = bluetooth.read(); // 1 karakter oku\n\n    Serial.print(\"Bluetooth Gelen Komut: \");\n    Serial.println(command);\n\n    if (command == '1') {\n      // YÜKÜ VE RÖLEYİ ÇALIŞTIR\n      digitalWrite(RELAY_PIN, RELAY_ON);\n      digitalWrite(STATUS_LED, HIGH);\n      isRelayActive = true;\n\n      // Telefondaki uygulamaya geri bildirim gönder\n      bluetooth.println(\">> BILGI: Role ve Yuk ACILDI (AKTIF).\");\n      Serial.println(\"[ISLEM] Role Acildi.\");\n    } \n    else if (command == '0') {\n      // YÜKÜ VE RÖLEYİ KAPAT\n      digitalWrite(RELAY_PIN, RELAY_OFF);\n      digitalWrite(STATUS_LED, LOW);\n      isRelayActive = false;\n\n      // Telefondaki uygulamaya geri bildirim gönder\n      bluetooth.println(\">> BILGI: Role ve Yuk KAPATILDI (PASIF).\");\n      Serial.println(\"[ISLEM] Role Kapatildi.\");\n    } \n    else if (command == 'T' || command == 't' || command == '?') {\n      // DURUM SORGULAMA\n      if (isRelayActive) {\n        bluetooth.println(\">> DURUM: Su anda ACIK (ON).\");\n      } else {\n        bluetooth.println(\">> DURUM: Su anda KAPALI (OFF).\");\n      }\n    }\n    else {\n      // GEÇERSİZ KOMUT\n      bluetooth.println(\">> HATA: Bilinmeyen komut! '1', '0' veya 'T' gonderiniz.\");\n    }\n  }\n\n  // Bilgisayar Seri Monitöründen Bluetooth'a manuel test komutu gönderme köprüsü\n  if (Serial.available() > 0) {\n    char pcCommand = Serial.read();\n    bluetooth.write(pcCommand);\n  }\n}\n"
  }
};


// Global export ve CURRICULUM_GRADES_DATA_I18N ile otomatik birleştirme
(function() {
  if (typeof window !== 'undefined') {
    window.ARDUINO_PROJECTS_DATA = ARDUINO_PROJECTS_DATA;

    // Eğer CURRICULUM_GRADES_DATA_I18N tanımlıysa, her kademeye arduinoProject alanını doğrudan bağla
    if (window.CURRICULUM_GRADES_DATA_I18N) {
      const langs = ['tr', 'en', 'ar'];
      langs.forEach(lang => {
        if (window.CURRICULUM_GRADES_DATA_I18N[lang]) {
          Object.keys(ARDUINO_PROJECTS_DATA).forEach(gradeKey => {
            if (window.CURRICULUM_GRADES_DATA_I18N[lang][gradeKey]) {
              window.CURRICULUM_GRADES_DATA_I18N[lang][gradeKey].arduinoProject = ARDUINO_PROJECTS_DATA[gradeKey];
            }
          });
        }
      });
    }

    if (window.CURRICULUM_GRADES_DATA) {
      Object.keys(ARDUINO_PROJECTS_DATA).forEach(gradeKey => {
        if (window.CURRICULUM_GRADES_DATA[gradeKey]) {
          window.CURRICULUM_GRADES_DATA[gradeKey].arduinoProject = ARDUINO_PROJECTS_DATA[gradeKey];
        }
      });
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ARDUINO_PROJECTS_DATA };
  }
})();
