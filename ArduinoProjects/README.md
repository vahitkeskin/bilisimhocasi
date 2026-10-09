# 🤖 K-12 Arduino Projeleri & Pedagojik Donanım Müfredat Arşivi
**Uğur Okulları Viranşehir Kampüsü — Bilişim Teknolojileri ve Robotik Kodlama Bölümü**

Bu dizin, **Ana Sınıfından 12. Sınıfa kadar (toplam 13 kademe)** MEB Bilişim Teknolojileri ve Yazılım / Bilgisayar Bilimi müfredatına tam uyumlu, pedagojik gelişim düzeyine göre sıralanmış Arduino kaynak kodlarını (`.ino`), devre şemalarını ve donanım bileşen yönergelerini içermektedir.

---

## 📚 Müfredat ve Kademe İndeksi

| Kademe | Sınıf Seviyesi | Proje Adı | Temel Konu & Kavram | Gerekli Kütüphaneler |
|:---:|:---|:---|:---|:---|
| **0** | **Ana Sınıfı** | [Blink LED](Sinif_0_Anasinifi_Blink_LED/Sinif_0_Anasinifi_Blink_LED.ino) | Dijital Çıkış (HIGH/LOW), Devre Tamamlama, 1 sn Zamanlama | Yok (Yerleşik) |
| **1** | **1. Sınıf** | [Buton ile LED Kontrolü](Sinif_1_Buton_LED/Sinif_1_Buton_LED.ino) | Dijital Giriş/Çıkış, INPUT_PULLUP, if/else Karar Yapısı | Yok (Yerleşik) |
| **2** | **2. Sınıf** | [Trafik Işıkları Simülasyonu](Sinif_2_Trafik_Isiklari/Sinif_2_Trafik_Isiklari.ino) | Sıralı Mantık (Sequential Logic), 4 Fazlı Zamanlama, LED Matrisi | Yok (Yerleşik) |
| **3** | **3. Sınıf** | [Buzzer Melodi & Ritim](Sinif_3_Buzzer_Melodi/Sinif_3_Buzzer_Melodi.ino) | Ses Frekansları (Hz), tone(), Dizi (Array) ve Döngüler | Yok (Yerleşik) |
| **4** | **4. Sınıf** | [LDR Akıllı Gece Lambası](Sinif_4_LDR_Akilli_Gece_Lambasi/Sinif_4_LDR_Akilli_Gece_Lambasi.ino) | Analog Giriş (ADC 0-1023), Voltaj Bölücü, Eşik Değer Algısı | Yok (Yerleşik) |
| **5** | **5. Sınıf** | [Potansiyometre & Servo](Sinif_5_Potansiyometre_Servo/Sinif_5_Potansiyometre_Servo.ino) | Açısal Konumlandırma (0-180°), PWM, map() Fonksiyonu | `<Servo.h>` |
| **6** | **6. Sınıf** | [HC-SR04 Park Sensörü](Sinif_6_HCSR04_Park_Sensoru/Sinif_6_HCSR04_Park_Sensoru.ino) | Ultrasonik Ekolokasyon, pulseIn(), Kademeli Ses & Işık Alarmı | Yok (Yerleşik) |
| **7** | **7. Sınıf** | [I2C 16x2 LCD Sayaç](Sinif_7_I2C_LCD_Sayac/Sinif_7_I2C_LCD_Sayac.ino) | I2C Haberleşme (SDA/SCL), Tuş Arkı Önleme (Debouncing) | `<Wire.h>`, `<LiquidCrystal_I2C.h>` |
| **8** | **8. Sınıf** | [DHT11 Dijital Termometre](Sinif_8_DHT11_LCD_Termometre/Sinif_8_DHT11_LCD_Termometre.ino) | Tek Tel Sayısal Protokol, Sıcaklık/Nem Algılama, LCD Raporlama | `<DHT.h>`, `<LiquidCrystal_I2C.h>` |
| **9** | **9. Sınıf** | [PIR Güvenlik Alarmı](Sinif_9_PIR_Guvenlik_Alarmi/Sinif_9_PIR_Guvenlik_Alarmi.ino) | Pasif Kızılötesi Algılama, Sensör Kalibrasyonu, Çift Ton Siren | Yok (Yerleşik) |
| **10** | **10. Sınıf** | [Joystick RGB Renk Mikseri](Sinif_10_Joystick_RGB_Mikser/Sinif_10_Joystick_RGB_Mikser.ino) | Çift Eksenli Analog Okuma, RGB Eklemeli Renk Teorisi, 3 Kanal PWM | Yok (Yerleşik) |
| **11** | **11. Sınıf** | [RC522 RFID Akıllı Kapı](Sinif_11_RFID_Kapi_Gecis/Sinif_11_RFID_Kapi_Gecis.ino) | 13.56MHz Radyo Frekansı, SPI Protokolü, UID Kimlik Doğrulama | `<SPI.h>`, `<MFRC522.h>`, `<Servo.h>` |
| **12** | **12. Sınıf** | [Bluetooth Röle Otomasyonu](Sinif_12_Bluetooth_Role_Otomasyon/Sinif_12_Bluetooth_Role_Otomasyon.ino) | UART Kablosuz Seri İletişim, Optokuplör İzolasyonu, Yüksek Güç Anahtarlama | `<SoftwareSerial.h>` |

---

## ⚙️ Donanım Standartları ve Güvenlik Kuralları
1. **Voltaj Seviyelerine Dikkat:**
   - RC522 RFID modülünün VCC pini mutlaka **3.3V** hattına bağlanmalıdır. 5V verilmesi entegrenin hasar görmesine yol açar.
   - HC-05 Bluetooth modülünün RX bacağına giden sinyal, 1kΩ ve 2kΩ dirençlerle oluşturulan gerilim bölücüyle 3.3V seviyesine düşürülmelidir.
2. **Kısa Devre ve LED Koruması:**
   - 5V ile beslenen hiçbir LED doğrudan Arduino pinine bağlanmamalıdır; mutlaka **220Ω** akım sınırlayıcı direnç kullanılmalıdır.
3. **Yüksek Gerilim İzolasyonu:**
   - 12. Sınıf röle projesinde sınıf ortamında 220V şebeke elektriği yerine **12V DC motor, LED şerit veya fan** kullanılması iş güvenliği açısından tavsiye edilir.

---

## 🛠️ Arduino IDE Kütüphane Kurulumları
Harici kütüphaneler için Arduino IDE menüsünden:
`Araçlar` -> `Kütüphaneleri Yönet...` (Ctrl+Shift+I / Cmd+Shift+I) sekmesine gidip şu paketleri kurunuz:
1. **LiquidCrystal I2C**: `Frank de Brabander` sürümü
2. **DHT sensor library**: `Adafruit` sürümü (Adafruit Unified Sensor ile birlikte)
3. **MFRC522**: `GithubCommunity` sürümü
