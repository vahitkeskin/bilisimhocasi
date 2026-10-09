#!/usr/bin/env python3
import os
import json

BASE_DIR = "/Users/vahitkeskin/Documents/GitHub/Projects/bilisimhocasi"
ARDUINO_DIR = os.path.join(BASE_DIR, "ArduinoProjects")
JS_OUTPUT = os.path.join(BASE_DIR, "js/arduino-curriculum-data.js")

projects_meta = {
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Ana Programlanabilir Beyin", "spec": "ATmega328P, 5V Besleme, 14 Dijital Pin", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard (Devre Tahtası)", "qty": "1 Adet", "role": "Lehimsiz Geçici Devre Platformu", "spec": "400 Bağlantı Noktası, İletken Hatlar", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "5mm Kırmızı LED", "qty": "1 Adet", "role": "Işıklı Görsel Çıktı", "spec": "2.0V - 2.2V İleri Gerilim, 20mA Akım", "icon": "fas fa-lightbulb", "image": "assets/components/led_red.svg"},
            {"name": "220 Ohm Direnç", "qty": "1 Adet", "role": "LED Akım Sınırlayıcı", "spec": "1/4W Karbon Film (Kırmızı-Kırmızı-Kahverengi)", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Erkek-Erkek Jumper Kablo", "qty": "2 Adet", "role": "İletken Bağlantı Hattı", "spec": "20cm Esnek Bakır Tel", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "Pin 8 (Dijital)", "compPin": "220Ω Direnç -> LED Anot (+)", "desc": "Dijital Çıkış (5V / 0V Sinyali)"},
            {"pin": "GND (Toprak)", "compPin": "LED Katot (- / Düz Kenar)", "desc": "Toprak / Eksi Referans Hattı"}
        ],
        "breadboardGuide": "1. LED'in uzun bacağını (Anot +) breadboard üzerinde boş bir satıra, kısa bacağını (Katot -) mavi eksi hattına yerleştirin.\n2. 220Ω direncin bir ucunu LED'in anot satırına, diğer ucunu Arduino Pin 8'e bağlayın.\n3. Breadboard'un mavi eksi hattını Arduino GND pinine bağlayarak devreyi tamamlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Mikrodenetleyici Kartı", "spec": "ATmega328P, 16MHz Kristal", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Montaj Zemini", "spec": "400 Noktalı Lehimsiz", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "4 Bacaklı Push Buton", "qty": "1 Adet", "role": "Kullanıcı Girdi Elemanı", "spec": "Dokunmatik Yaylı Anahtar (Tactile Switch)", "icon": "fas fa-toggle-on", "image": "assets/components/push_button.svg"},
            {"name": "5mm Yeşil LED", "qty": "1 Adet", "role": "Görsel Çıktı Göstergesi", "spec": "2.2V İleri Gerilim", "icon": "fas fa-lightbulb", "image": "assets/components/led_green.svg"},
            {"name": "220 Ohm Direnç", "qty": "1 Adet", "role": "LED Akım Koruması", "spec": "1/4W Direnç", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Erkek-Erkek Jumper", "qty": "4 Adet", "role": "Devre Bağlantı Kabloları", "spec": "20cm Standart Jumper", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "Pin 2 (Giriş)", "compPin": "Buton 1. Bacağı", "desc": "Dahili INPUT_PULLUP Giriş Pini"},
            {"pin": "GND (Toprak)", "compPin": "Buton Çapraz Bacağı", "desc": "Butona basılınca sıfırlama hattı"},
            {"pin": "Pin 8 (Çıkış)", "compPin": "220Ω -> Yeşil LED Anot (+)", "desc": "LED Güç Çıkışı"},
            {"pin": "GND (Toprak)", "compPin": "Yeşil LED Katot (-)", "desc": "LED Toprak Hattı"}
        ],
        "breadboardGuide": "1. Butonu breadboard'un orta yarığının üzerine yerleştirin (iki bacak üstte, iki bacak altta).\n2. Butonun bir bacağını Arduino Pin 2'ye, çapraz bacağını Arduino GND'ye bağlayın.\n3. Yeşil LED'i 220Ω direnç üzerinden Pin 8'e, katot bacağını ise GND'ye bağlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Kontrol Ünitesi", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Tahtası", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "5mm Kırmızı LED", "qty": "1 Adet", "role": "Dur Sinyali", "spec": "2.0V Kırmızı LED", "icon": "fas fa-lightbulb", "image": "assets/components/led_red.svg"},
            {"name": "5mm Sarı LED", "qty": "1 Adet", "role": "Hazırlan/Yavaşla Sinyali", "spec": "2.1V Sarı LED", "icon": "fas fa-lightbulb", "image": "assets/components/led_yellow.svg"},
            {"name": "5mm Yeşil LED", "qty": "1 Adet", "role": "Geç Sinyali", "spec": "2.2V Yeşil LED", "icon": "fas fa-lightbulb", "image": "assets/components/led_green.svg"},
            {"name": "220 Ohm Direnç", "qty": "3 Adet", "role": "LED Akım Koruması", "spec": "1/4W Karbon Film", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Erkek-Erkek Jumper", "qty": "5 Adet", "role": "Haberleşme Telleri", "spec": "20cm", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "Pin 10 (Dijital)", "compPin": "220Ω -> Kırmızı LED (+)", "desc": "Kırmızı Işık Çıkışı"},
            {"pin": "Pin 9 (Dijital)", "compPin": "220Ω -> Sarı LED (+)", "desc": "Sarı Işık Çıkışı"},
            {"pin": "Pin 8 (Dijital)", "compPin": "220Ω -> Yeşil LED (+)", "desc": "Yeşil Işık Çıkışı"},
            {"pin": "GND (Toprak)", "compPin": "Tüm LED Katotları (-)", "desc": "Ortak Toprak Rayı"}
        ],
        "breadboardGuide": "1. Üç LED'i sırayla (Kırmızı, Sarı, Yeşil) breadboard'a dizin.\n2. Her LED'in anot bacağına birer adet 220Ω direnç takıp sırasıyla Pin 10, Pin 9 ve Pin 8'e bağlayın.\n3. Tüm LED'lerin katot (-) bacaklarını breadboard'un mavi eksi hattında toplayıp Arduino GND'ye verin.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Frekans Üreteci", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "Pasif Piezo Buzzer", "qty": "1 Adet", "role": "Sesli Akustik Çıktı", "spec": "Pasif Frekans Girişli, 5V", "icon": "fas fa-volume-up", "image": "assets/components/buzzer.svg"},
            {"name": "100 Ohm Direnç", "qty": "1 Adet", "role": "Ses Seviyesi Yumuşatıcı", "spec": "Opsiyonel ses dengeleyici", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Erkek-Erkek Jumper", "qty": "2 Adet", "role": "Bağlantı Hatları", "spec": "20cm", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "Pin 8 (PWM/Çıkış)", "compPin": "Buzzer Artı (+) Bacağı", "desc": "tone() Fonksiyonu Frekans Sinyali"},
            {"pin": "GND (Toprak)", "compPin": "Buzzer Eksi (-) Bacağı", "desc": "Toprak Hattı"}
        ],
        "breadboardGuide": "1. Buzzer'ın uzun veya üzerinde (+) işareti olan bacağını breadboard'da Pin 8'e giden hatta bağlayın.\n2. Kısa veya eksi bacağını doğrudan Arduino GND pinine bağlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Analog-Dijital Çevirici", "spec": "10-bit ADC Çözünürlüğü", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "LDR (Foto Direnç)", "qty": "1 Adet", "role": "Işığa Duyarlı Sensör", "spec": "5mm Kadmiyum Sülfit (CdS)", "icon": "fas fa-sun", "image": "assets/components/ldr_sensor.svg"},
            {"name": "10k Ohm Direnç", "qty": "1 Adet", "role": "Voltaj Bölücü Direnci", "spec": "Kahverengi-Siyah-Turuncu-Altın", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "5mm Beyaz LED", "qty": "1 Adet", "role": "Gece Lambası Aydınlatması", "spec": "3.0V Parlak Beyaz", "icon": "fas fa-lightbulb", "image": "assets/components/led_red.svg"},
            {"name": "220 Ohm Direnç", "qty": "1 Adet", "role": "LED Akım Koruması", "spec": "1/4W", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Erkek-Erkek Jumper", "qty": "5 Adet", "role": "Kablolar", "spec": "20cm", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "LDR 1. Bacağı", "desc": "Pozitif Referans Besleme"},
            {"pin": "A0 (Analog Giriş)", "compPin": "LDR ve 10kΩ Kesişim Noktası", "desc": "Voltaj Bölücü Ölçüm Sinyali"},
            {"pin": "GND (Toprak)", "compPin": "10kΩ Direncin Diğer Ucu", "desc": "Toprak Hattı"},
            {"pin": "Pin 9 (PWM/Çıkış)", "compPin": "220Ω -> Beyaz LED (+)", "desc": "Lamba Çıkışı"},
            {"pin": "GND (Toprak)", "compPin": "LED Katot (-)", "desc": "LED Toprak"}
        ],
        "breadboardGuide": "1. LDR'yi breadboard'a takın. Bir bacağını Arduino 5V pinine bağlayın.\n2. LDR'nin diğer bacağına 10kΩ direnç bağlayın ve kesişim noktasından Arduino A0 pinine bir jumper çekin.\n3. 10kΩ direncin boştaki bacağını Arduino GND pinine bağlayın.\n4. Beyaz LED'i 220Ω dirençle Pin 9 ve GND arasına bağlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Hareket Kontrolcüsü", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "TowerPro SG90 Mini Servo", "qty": "1 Adet", "role": "Hassas Açılı Aktüatör", "spec": "9g Ağırlık, 180° Dönüş Açısı, 5V", "icon": "fas fa-cogs", "image": "assets/components/servo_sg90.svg"},
            {"name": "10k Ohm Potansiyometre", "qty": "1 Adet", "role": "Açı Ayar Kolu", "spec": "Döner Ayarlı Direnç (Rotary)", "icon": "fas fa-sliders-h", "image": "assets/components/potentiometer.svg"},
            {"name": "Erkek-Erkek Jumper", "qty": "7 Adet", "role": "Kablolar", "spec": "20cm", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "Potansiyometre 1 & Servo Kırmızı", "desc": "5V Ortak Besleme"},
            {"pin": "GND (Toprak)", "compPin": "Potansiyometre 3 & Servo Kahverengi", "desc": "Ortak Toprak Hattı"},
            {"pin": "A0 (Analog Giriş)", "compPin": "Potansiyometre Orta Bacak", "desc": "Açı Ayar Voltajı (0-5V)"},
            {"pin": "Pin 9 (PWM)", "compPin": "Servo Turuncu/Sarı Kablo", "desc": "Servo PWM Sinyal Hattı"}
        ],
        "breadboardGuide": "1. Potansiyometrenin kenar bacaklarını breadboard üzerindeki 5V ve GND raylarına takın.\n2. Potansiyometrenin orta bacağını Arduino A0 pinine bağlayın.\n3. SG90 servonun kahverengi kablosunu GND'ye, kırmızı kablosunu 5V'a, turuncu sinyal kablosunu ise Pin 9'a bağlayın.",
        "libraries": [
            {"name": "Servo.h", "guide": "Arduino çekirdeğinde yerleşiktir, harici kurulum gerektirmez.", "isBuiltin": True}
        ]
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Mesafe Hesaplayıcı", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "HC-SR04 Ultrasonik Sensör", "qty": "1 Adet", "role": "Mesafe Algılayıcı", "spec": "2cm - 400cm Menzil, 40kHz Frekans", "icon": "fas fa-broadcast-tower", "image": "assets/components/ultrasonic_hcsr04.svg"},
            {"name": "Piezo Buzzer", "qty": "1 Adet", "role": "Sesli Park Uyarısı", "spec": "Sesli Bip İkazı", "icon": "fas fa-volume-up", "image": "assets/components/buzzer.svg"},
            {"name": "5mm Kırmızı LED", "qty": "1 Adet", "role": "Görsel Flaşör Uyarısı", "spec": "Kırmızı İkaz Işığı", "icon": "fas fa-lightbulb", "image": "assets/components/led_red.svg"},
            {"name": "220 Ohm Direnç", "qty": "1 Adet", "role": "LED Koruması", "spec": "1/4W", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Jumper Kablolar", "qty": "8 Adet", "role": "Kablolar", "spec": "Erkek-Erkek & Erkek-Dişi", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "HC-SR04 VCC", "desc": "Sensör Beslemesi"},
            {"pin": "GND (Toprak)", "compPin": "HC-SR04 GND & Buzzer(-) & LED(-)", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 9 (Çıkış)", "compPin": "HC-SR04 Trig", "desc": "Ses Dalgası Tetikleme Pini"},
            {"pin": "Pin 8 (Giriş)", "compPin": "HC-SR04 Echo", "desc": "Yankı Dinleme Pini"},
            {"pin": "Pin 7 (Çıkış)", "compPin": "Buzzer Artı (+)", "desc": "Sesli Uyarı Pini"},
            {"pin": "Pin 6 (Çıkış)", "compPin": "220Ω -> Kırmızı LED (+)", "desc": "Işıklı Flaşör Pini"}
        ],
        "breadboardGuide": "1. HC-SR04 sensörünün VCC bacağını 5V'a, GND bacağını GND'ye bağlayın.\n2. Trig bacağını Pin 9'a, Echo bacağını Pin 8'e bağlayın.\n3. Buzzer'ı Pin 7 ve GND'ye, Kırmızı LED'i ise 220Ω dirençle Pin 6 ve GND'ye bağlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Haberleşme Yöneticisi", "spec": "ATmega328P, I2C Master", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "16x2 Karakter LCD (I2C)", "qty": "1 Adet", "role": "Kullanıcı Bilgi Ekranı", "spec": "HD44780 + PCF8574 I2C Backpack (0x27 Adres)", "icon": "fas fa-desktop", "image": "assets/components/lcd_1602_i2c.svg"},
            {"name": "Push Buton", "qty": "1 Adet", "role": "Sayaç Artırma Tuşu", "spec": "4 Bacaklı Dokunmatik Düğme", "icon": "fas fa-toggle-on", "image": "assets/components/push_button.svg"},
            {"name": "Jumper Kablolar", "qty": "6 Adet", "role": "Kablolar", "spec": "Erkek-Dişi & Erkek-Erkek", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "LCD VCC", "desc": "LCD Beslemesi"},
            {"pin": "GND (Toprak)", "compPin": "LCD GND & Buton GND", "desc": "Ortak Toprak Hattı"},
            {"pin": "A4 (SDA)", "compPin": "LCD SDA", "desc": "I2C Seri Veri Hattı"},
            {"pin": "A5 (SCL)", "compPin": "LCD SCL", "desc": "I2C Seri Saat Hattı"},
            {"pin": "Pin 2 (Giriş)", "compPin": "Buton 1. Bacağı", "desc": "Dahili INPUT_PULLUP Sayaç Pini"}
        ],
        "breadboardGuide": "1. I2C LCD arkasındaki 4 pini Arduino'ya bağlayın: GND -> GND, VCC -> 5V, SDA -> A4, SCL -> A5.\n2. Push butonu Pin 2 ve GND arasına bağlayın.\n3. Arduino IDE'den I2C LCD kütüphanesini kurup kodu yükleyin.",
        "libraries": [
            {"name": "LiquidCrystal_I2C.h", "guide": "Arduino IDE Kütüphane Yöneticisinden 'LiquidCrystal I2C by Frank de Brabander' aratıp kurunuz.", "isBuiltin": False},
            {"name": "Wire.h", "guide": "Arduino I2C çekirdek kütüphanesi (Yerleşik).", "isBuiltin": True}
        ]
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Hava İstasyonu Beyni", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "DHT11 Sensörü", "qty": "1 Adet", "role": "Sıcaklık ve Nem Ölçer", "spec": "0-50°C (±2°C), %20-90 RH (±5%)", "icon": "fas fa-temperature-high", "image": "assets/components/dht11_sensor.svg"},
            {"name": "16x2 I2C LCD Ekran", "qty": "1 Adet", "role": "Telemetri Göstergesi", "spec": "16 Karakter x 2 Satır Mavi Arka Işık", "icon": "fas fa-desktop", "image": "assets/components/lcd_1602_i2c.svg"},
            {"name": "Jumper Kablolar", "qty": "8 Adet", "role": "Kablolar", "spec": "Erkek-Dişi & Erkek-Erkek", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "DHT11 VCC & LCD VCC", "desc": "5V Güç Hattı"},
            {"pin": "GND (Toprak)", "compPin": "DHT11 GND & LCD GND", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 4 (Dijital)", "compPin": "DHT11 DATA (Sinyal)", "desc": "Tek Tel Sayısal İletişim Hattı"},
            {"pin": "A4 (SDA)", "compPin": "LCD SDA", "desc": "I2C Veri Hattı"},
            {"pin": "A5 (SCL)", "compPin": "LCD SCL", "desc": "I2C Saat Hattı"}
        ],
        "breadboardGuide": "1. DHT11 modülünün VCC bacağını 5V'a, GND bacağını GND'ye, DATA bacağını Pin 4'e takın.\n2. I2C LCD ekranın SDA'sını A4'e, SCL'sini A5'e, güç pinlerini 5V ve GND'ye bağlayın.\n3. Adafruit DHT kütüphanesini kurup projeyi yükleyin.",
        "libraries": [
            {"name": "DHT.h (Adafruit)", "guide": "Kütüphane Yöneticisinden 'DHT sensor library by Adafruit' kurulmalıdır.", "isBuiltin": False},
            {"name": "LiquidCrystal_I2C.h", "guide": "I2C LCD kütüphanesi kurulmalıdır.", "isBuiltin": False},
            {"name": "Wire.h", "guide": "I2C çekirdek kütüphanesi (Yerleşik).", "isBuiltin": True}
        ]
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Güvenlik Santrali", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "HC-SR501 PIR Sensör", "qty": "1 Adet", "role": "Kızılötesi Hareket Dedektörü", "spec": "120° Açı, 7 Metre Menzil, Fresnel Mercek", "icon": "fas fa-running", "image": "assets/components/pir_sensor.svg"},
            {"name": "Buzzer", "qty": "1 Adet", "role": "Siren Ses Çıkışı", "spec": "Piezo Siren", "icon": "fas fa-volume-up", "image": "assets/components/buzzer.svg"},
            {"name": "5mm Kırmızı LED", "qty": "1 Adet", "role": "Alarm Işığı", "spec": "Flaşör Kırmızı", "icon": "fas fa-lightbulb", "image": "assets/components/led_red.svg"},
            {"name": "5mm Yeşil LED", "qty": "1 Adet", "role": "Sistem Hazır Işığı", "spec": "Güvenli Durum Yeşili", "icon": "fas fa-lightbulb", "image": "assets/components/led_green.svg"},
            {"name": "220 Ohm Direnç", "qty": "2 Adet", "role": "LED Koruması", "spec": "1/4W", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Jumper Kablolar", "qty": "8 Adet", "role": "Kablolar", "spec": "Erkek-Erkek & Erkek-Dişi", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "PIR VCC", "desc": "Sensör Beslemesi"},
            {"pin": "GND (Toprak)", "compPin": "PIR GND & LED Katotları & Buzzer(-)", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 2 (Giriş)", "compPin": "PIR OUT (Sinyal)", "desc": "Dijital Hareket Algılama Pini"},
            {"pin": "Pin 8 (Çıkış)", "compPin": "220Ω -> Kırmızı LED (+)", "desc": "Alarm Flaşör Çıkışı"},
            {"pin": "Pin 7 (Çıkış)", "compPin": "220Ω -> Yeşil LED (+)", "desc": "Sistem Devrede / Güvenli Göstergesi"},
            {"pin": "Pin 9 (Çıkış)", "compPin": "Buzzer Artı (+)", "desc": "Çift Ton Siren Çıkışı"}
        ],
        "breadboardGuide": "1. HC-SR501 PIR sensörünü 5V, GND ve Pin 2'ye bağlayın.\n2. Yeşil LED'i 220Ω dirençle Pin 7'ye, Kırmızı LED'i 220Ω dirençle Pin 8'e bağlayın.\n3. Buzzer'ı Pin 9 ve GND arasına takın. İlk 10 saniyelik sensör kalibrasyon süresini bekleyin.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "PWM Üreteci", "spec": "ATmega328P, 6x PWM Kanalı", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "2 Eksenli Joystick (KY-023)", "qty": "1 Adet", "role": "X/Y Analog Girdi", "spec": "Çift Potansiyometre + Buton, 5V", "icon": "fas fa-gamepad", "image": "assets/components/joystick.svg"},
            {"name": "RGB LED (Ortak Katot)", "qty": "1 Adet", "role": "Renk Tayfı Çıktısı", "spec": "4 Bacaklı Kırmızı-Yeşil-Mavi LED", "icon": "fas fa-palette", "image": "assets/components/led_rgb.svg"},
            {"name": "220 Ohm Direnç", "qty": "3 Adet", "role": "RGB Bacak Koruması", "spec": "1/4W", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Jumper Kablolar", "qty": "9 Adet", "role": "Kablolar", "spec": "Erkek-Erkek & Erkek-Dişi", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "Joystick VCC", "desc": "Joystick Beslemesi"},
            {"pin": "GND (Toprak)", "compPin": "Joystick GND & RGB Katot (-)", "desc": "Ortak Toprak Hattı"},
            {"pin": "A0 (Analog)", "compPin": "Joystick VRx", "desc": "X Ekseni Yatay Sinyal"},
            {"pin": "A1 (Analog)", "compPin": "Joystick VRy", "desc": "Y Ekseni Dikey Sinyal"},
            {"pin": "Pin 2 (Dijital)", "compPin": "Joystick SW (Buton)", "desc": "Dahili INPUT_PULLUP Tıklama Butonu"},
            {"pin": "Pin 9 (PWM)", "compPin": "220Ω -> RGB Kırmızı (R)", "desc": "Kırmızı Renk Kanalı (0-255)"},
            {"pin": "Pin 10 (PWM)", "compPin": "220Ω -> RGB Yeşil (G)", "desc": "Yeşil Renk Kanalı (0-255)"},
            {"pin": "Pin 11 (PWM)", "compPin": "220Ω -> RGB Mavi (B)", "desc": "Mavi Renk Kanalı (0-255)"}
        ],
        "breadboardGuide": "1. Joystick VRx'i A0'a, VRy'yi A1'e, SW'yi Pin 2'ye, VCC ve GND'yi ilgili hatlara bağlayın.\n2. RGB LED'in en uzun bacağını (Katot) GND'ye takın.\n3. Kırmızı, Yeşil ve Mavi bacakları birer 220Ω direnç üzerinden sırasıyla Pin 9, Pin 10 ve Pin 11 PWM pinlerine bağlayın.",
        "libraries": []
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "Erişim Kontrol Ünitesi", "spec": "ATmega328P, SPI Master", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "RC522 RFID Modülü", "qty": "1 Adet", "role": "Temassız Kart Okuyucu", "spec": "13.56 MHz, SPI Arayüzü (3.3V Gerilim)", "icon": "fas fa-id-card", "image": "assets/components/rfid_rc522.svg"},
            {"name": "TowerPro SG90 Servo", "qty": "1 Adet", "role": "Kapı Kilidi Mekanizması", "spec": "9g Açılı Servo Motor", "icon": "fas fa-door-open", "image": "assets/components/servo_sg90.svg"},
            {"name": "Yeşil & Kırmızı LED", "qty": "2 Adet", "role": "Geçiş Durumu Göstergesi", "spec": "5mm Yetkili/Yetkisiz Işıkları", "icon": "fas fa-traffic-light", "image": "assets/components/led_green.svg"},
            {"name": "Buzzer", "qty": "1 Adet", "role": "Sesli Doğrulama", "spec": "Onay ve Hata Sesleri", "icon": "fas fa-volume-up", "image": "assets/components/buzzer.svg"},
            {"name": "220 Ohm Direnç", "qty": "2 Adet", "role": "LED Koruması", "spec": "1/4W", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Jumper Kablolar", "qty": "10 Adet", "role": "Kablolar", "spec": "Erkek-Dişi & Erkek-Erkek", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "3.3V (DİKKAT!)", "compPin": "RC522 VCC (3.3V)", "desc": "KESİNLİKLE 5V VERİLMEMELİDİR!"},
            {"pin": "GND (Toprak)", "compPin": "RC522 GND & LED'ler & Buzzer & Servo", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 9 (Dijital)", "compPin": "RC522 RST", "desc": "Reset Pini"},
            {"pin": "Pin 10 (SS)", "compPin": "RC522 SDA", "desc": "SPI Slave Select Pini"},
            {"pin": "Pin 11 (MOSI)", "compPin": "RC522 MOSI", "desc": "Master Out Slave In"},
            {"pin": "Pin 12 (MISO)", "compPin": "RC522 MISO", "desc": "Master In Slave Out"},
            {"pin": "Pin 13 (SCK)", "compPin": "RC522 SCK", "desc": "SPI Seri Saat Sinyali"},
            {"pin": "Pin 5 (PWM)", "compPin": "SG90 Servo Sinyal", "desc": "Kapı Kilit Mandalı"},
            {"pin": "Pin 6 (Çıkış)", "compPin": "220Ω -> Yeşil LED (+)", "desc": "Yetkili Giriş Işığı"},
            {"pin": "Pin 7 (Çıkış)", "compPin": "220Ω -> Kırmızı LED (+)", "desc": "Hatalı Kart Işığı"},
            {"pin": "Pin 8 (Çıkış)", "compPin": "Buzzer Artı (+)", "desc": "Sesli Bildirim"}
        ],
        "breadboardGuide": "1. ÇOK ÖNEMLİ: RC522 VCC bacağını Arduino 3.3V pinine bağlayın (5V karta zarar verir).\n2. SPI bacaklarını bağlayın: RST->9, SDA->10, MOSI->11, MISO->12, SCK->13.\n3. Servoyu Pin 5'e, Yeşil LED'i Pin 6'ya, Kırmızı LED'i Pin 7'ye, Buzzer'ı Pin 8'e bağlayın.",
        "libraries": [
            {"name": "MFRC522.h", "guide": "Kütüphane Yöneticisinden 'MFRC522 by GithubCommunity' kurulmalıdır.", "isBuiltin": False},
            {"name": "SPI.h", "guide": "Arduino SPI haberleşme kütüphanesi (Yerleşik).", "isBuiltin": True},
            {"name": "Servo.h", "guide": "Arduino servo kütüphanesi (Yerleşik).", "isBuiltin": True}
        ]
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
            {"name": "Arduino Uno R3", "qty": "1 Adet", "role": "IoT Ana Kontrolcü", "spec": "ATmega328P", "icon": "fas fa-microchip", "image": "assets/components/arduino_uno.svg"},
            {"name": "Breadboard", "qty": "1 Adet", "role": "Devre Zemini", "spec": "400 Noktalı", "icon": "fas fa-border-all", "image": "assets/components/breadboard.svg"},
            {"name": "HC-05 / HC-06 Bluetooth", "qty": "1 Adet", "role": "Kablosuz SPP İletişim", "spec": "UART Seri Port, 2.4GHz Kablosuz", "icon": "fab fa-bluetooth-b", "image": "assets/components/bluetooth_hc05.svg"},
            {"name": "5V 1-Kanal Röle Modülü", "qty": "1 Adet", "role": "Yüksek Güç Anahtarlama", "spec": "Optokuplör Korumalı, 10A 250VAC / 30VDC", "icon": "fas fa-bolt", "image": "assets/components/relay_module.svg"},
            {"name": "Durum LED'i", "qty": "1 Adet", "role": "Görsel Yük Göstergesi", "spec": "5mm Mavi LED", "icon": "fas fa-lightbulb", "image": "assets/components/led_green.svg"},
            {"name": "Dirençler (1kΩ & 2kΩ & 220Ω)", "qty": "3 Adet", "role": "Voltaj Bölücü & LED Koruma", "spec": "HC-05 RX koruma dirençleri", "icon": "fas fa-wave-square", "image": "assets/components/resistor.svg"},
            {"name": "Jumper Kablolar", "qty": "10 Adet", "role": "Kablolar", "spec": "Erkek-Dişi & Erkek-Erkek", "icon": "fas fa-bezier-curve", "image": "assets/components/jumper_wires.svg"}
        ],
        "pinout": [
            {"pin": "5V (Güç)", "compPin": "HC-05 VCC & Röle VCC", "desc": "5V Ortak Güç Hattı"},
            {"pin": "GND (Toprak)", "compPin": "HC-05 GND & Röle GND & LED(-)", "desc": "Ortak Toprak Referansı"},
            {"pin": "Pin 2 (Soft RX)", "compPin": "HC-05 TXD", "desc": "Telefondan Gelen Veri Girişi"},
            {"pin": "Pin 3 (Soft TX)", "compPin": "1kΩ/2kΩ Bölücü -> HC-05 RXD", "desc": "Arduino'dan HC-05'e Güvenli 3.3V TX"},
            {"pin": "Pin 7 (Dijital)", "compPin": "Röle IN Sinyali", "desc": "Röle Bobin Tetikleme Pini"},
            {"pin": "Pin 8 (Dijital)", "compPin": "220Ω -> Durum LED (+)", "desc": "Röle Durum Göstergesi"}
        ],
        "breadboardGuide": "1. HC-05 modülünün TXD'sini Arduino Pin 2'ye bağlayın.\n2. Arduino Pin 3'ten gelen hattı 1kΩ ve 2kΩ gerilim bölücü ile 3.3V seviyesine düşürüp HC-05 RXD'ye bağlayın.\n3. Röle modülünün IN pinini Pin 7'ye, VCC ve GND'yi beslemeye bağlayın.\n4. Durum LED'ini Pin 8 ve GND arasına bağlayın.",
        "libraries": [
            {"name": "SoftwareSerial.h", "guide": "Arduino çekirdeğinde yerleşiktir (Pin 0/1 USB portunu meşgul etmez).", "isBuiltin": True}
        ]
    }
}

# Read code for each project directly from the file
for grade_id, meta in projects_meta.items():
    code_path = os.path.join(ARDUINO_DIR, meta["folder"], meta["file"])
    with open(code_path, "r", encoding="utf-8") as f:
        meta["code"] = f.read()

# Generate JavaScript file
js_content = "/**\n"
js_content += " * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ\n"
js_content += " * K-12 ARDUINO PROJELERİ & PEDAGOJİK DONANIM MÜFREDAT VERİTABANI\n"
js_content += " * 13 Kademe Eksiksiz Devre Şemaları, Bileşen Listeleri ve Kaynak Kodları\n"
js_content += " */\n\n"
js_content += "const ARDUINO_PROJECTS_DATA = " + json.dumps(projects_meta, ensure_ascii=False, indent=2) + ";\n\n"

# Automatic merging logic with existing curriculum database
js_content += """
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
"""

with open(JS_OUTPUT, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Basariyla olusturuldu: {JS_OUTPUT}")
print("13 sinifin Arduino projesi, devre semalari ve kaynak kodlari baglandi!")
