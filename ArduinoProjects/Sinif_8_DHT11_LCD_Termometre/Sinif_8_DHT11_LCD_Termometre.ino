/* ==============================================================================
 * PROJE ADI: 8. Sınıf - DHT11 ile Dijital Sıcaklık ve Nem Ölçer (LCD Ekranlı)
 * HEDEF SEVİYE: 8. Sınıf (13-14 Yaş / Ortaokul Mezuniyet - Meteoroloji & IoT)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, çevresel izleme istasyonlarında ve akıllı sera/tarım
 * uygulamalarında kullanılan dijital sıcaklık ve bağıl nem sensörünün (DHT11)
 * haberleşme mantığını çözer. Okunan veriler I2C 16x2 LCD ekranda görselleştirilir.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. DHT11 sensörü, tek hat (Single-Bus) dijital protokolü üzerinden Arduino'ya
 *    40 bitlik paketler halinde sıcaklık (°C) ve nem (% RH) bilgisi gönderir.
 * 2. Arduino DHT kütüphanesi bu veri paketini çözümler ve floating-point değerler üretir.
 * 3. Hata koruması (isnan kontrolü) ile sensör bağlantı kopuklukları denetlenir.
 * 4. Ölçülen değerler 16x2 LCD ekrana yazılır:
 *    - Satır 0: "Sicaklik: XX.X C"
 *    - Satır 1: "Bagil Nem: %XX"
 * 5. DHT11'in donanımsal örnekleme periyoduna saygı duyularak her 2 saniyede bir ölçüm yenilenir.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x DHT11 Sıcaklık ve Bağıl Nem Sensörü (Modüllü veya 3 bacaklı)
 * - 1 x 16x2 I2C Karakter LCD Ekran
 * - 8 x Erkek-Dişi / Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | DHT11 VCC & LCD VCC     | 5V besleme hattı
 * GND (Toprak)       | DHT11 GND & LCD GND     | Ortak toprak hattı
 * Pin 4 (Dijital)    | DHT11 DATA (Sinyal)     | Tek telli dijital veri hattı
 * A4 (SDA)           | LCD SDA                 | I2C Veri Hattı
 * A5 (SCL)           | LCD SCL                 | I2C Saat Hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * 1. DHT sensor library (Adafruit tarafından yazılmış)
 *    Kurulum: Arduino IDE -> Kütüphaneleri Yönet -> "DHT sensor library" ara ve kur
 *    (Bağımlılık olarak sorulan "Adafruit Unified Sensor" da kurulmalıdır).
 * 2. LiquidCrystal_I2C.h (Frank de Brabander sürümü)
 * 3. Wire.h (Yerleşik)
 * ============================================================================== */

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

// Pin ve Sensör Tipi Tanımlamaları
const int DHT_PIN = 4;     // DHT11 veri pini
#define DHTTYPE DHT11      // Sensör türümüz DHT11 (DHT22 için DHT22 yazılır)

// Nesnelerin başlatılması
DHT dht(DHT_PIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  // Seri portu başlat
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("DHT11 Dijital Termometre & Higrometre");
  Serial.println("=========================================");

  // LCD ekranı hazırla
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hava Istasyonu");
  lcd.setCursor(0, 1);
  lcd.print("Sensor Basliyor..");

  // DHT sensörünü aktif et
  dht.begin();
  delay(1500); // Sensörün kararlı hale gelmesi için ilk bekleme
  lcd.clear();
}

void loop() {
  // Nem ve sıcaklık değerlerini sensörden oku
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature(); // Santigrat (°C) cinsinden

  // Okuma hatası olup olmadığını kontrol et
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("HATA: DHT11 sensorunden veri okunamadi! Baglantilari kontrol ediniz.");
    lcd.setCursor(0, 0);
    lcd.print("Sensor Hatasi!  ");
    lcd.setCursor(0, 1);
    lcd.print("Kablolari Baksana");
    delay(2000);
    return;
  }

  // 1. Satır: Sıcaklık Gösterimi
  lcd.setCursor(0, 0);
  lcd.print("Sicaklik: ");
  lcd.print(temperature, 1); // 1 ondalık basamak
  lcd.print(" C ");

  // 2. Satır: Nem Gösterimi
  lcd.setCursor(0, 1);
  lcd.print("Bagil Nem: %");
  lcd.print((int)humidity);
  lcd.print("   ");

  // Seri porta detaylı telemetri çıktısı ver
  Serial.print("Sicaklik: ");
  Serial.print(temperature);
  Serial.print(" °C | Bagil Nem: %");
  Serial.println(humidity);

  // DHT11 donanımı saniyede en fazla bir ölçüm yapabilir.
  // Kararlı ve uzun ömürlü ölçüm için 2 saniye (2000ms) bekliyoruz.
  delay(2000);
}
