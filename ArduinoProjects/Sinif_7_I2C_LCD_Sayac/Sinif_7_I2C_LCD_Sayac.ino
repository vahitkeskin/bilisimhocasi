/* ==============================================================================
 * PROJE ADI: 7. Sınıf - 2x16 I2C LCD Ekranda Sayaç ve Metin Gösterimi
 * HEDEF SEVİYE: 7. Sınıf (12-13 Yaş / Endüstriyel Haberleşme & Arayüzler)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, projelerine kullanıcı arayüzü (UI) kazandırmak amacıyla
 * endüstri standardı I2C (Inter-Integrated Circuit) iki telli seri haberleşme protokolünü
 * öğrenirler. Normalde 16 pin gerektiren bir LCD ekranı, I2C sürücü modülü sayesinde
 * sadece 2 haberleşme pini (SDA ve SCL) ile kontrol ederler.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Arduino, I2C bus üzerinden 0x27 adresindeki LCD entegresine komut gönderir.
 * 2. 1. Satırda sabit karşılama başlığı ("Bilisim Atolyesi") gösterilir.
 * 3. 2. Satırda butona basılma sayısını tutan dinamik bir sayaç ("Ziyaretci: XX") yer alır.
 * 4. Butona her basıldığında (yazılımsal ark önleme / debounce ile) sayaç bir artar
 *    ve LCD ekran temizlenmeden sadece ilgili koordinat güncellenerek titreşimsiz yazılır.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x 16x2 Karakter LCD Ekran (Arkasına Lehimli I2C Modüllü - PCF8574)
 * - 1 x 4 Bacaklı Push Buton
 * - 6 x Erkek-Dişi ve Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | LCD VCC                 | LCD ekran arka ışık ve mantık beslemesi
 * GND (Toprak)       | LCD GND                 | Ortak toprak hattı
 * A4 (SDA)           | LCD SDA                 | I2C Seri Veri Hattı (Serial Data)
 * A5 (SCL)           | LCD SCL                 | I2C Seri Saat Hattı (Serial Clock)
 * Pin 2 (Dijital)    | Buton 1. Bacağı         | Dahili INPUT_PULLUP kullanılır
 * GND (Toprak)       | Buton Çapraz Bacağı     | Butona basılınca sıfırlama hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * 1. Wire.h (Arduino çekirdeğinde yerleşik - I2C iletişimi için)
 * 2. LiquidCrystal_I2C.h
 *    Kurulum: Arduino IDE -> Araçlar -> Kütüphaneleri Yönet ->
 *    Arama kutusuna "LiquidCrystal I2C" yazıp "Frank de Brabander" sürümünü kurunuz.
 * ============================================================================== */

#include <Wire.h>              // I2C iletişim kütüphanesi
#include <LiquidCrystal_I2C.h> // I2C LCD kütüphanesi

// Pin Tanımlamaları
const int BUTTON_PIN = 2; // Sayacı artıracak buton pini

// LCD Yapılandırması: (I2C Adresi, Sütun Sayısı, Satır Sayısı)
// Yaygın I2C adresleri 0x27 veya 0x3F'tir. Ekranınız yanmıyorsa adresi 0x3F deneyiniz.
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Sayaç ve Buton Kontrol Değişkenleri
int counter = 0;
int lastButtonState = HIGH; // PULLUP modunda basılmadığında HIGH'dır

void setup() {
  // Buton pinini dahili dirençle giriş olarak tanımlıyoruz
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // LCD ekranı başlatıyoruz
  lcd.init();
  lcd.backlight(); // Arka ışığı (mavi/yeşil LED) aç

  // 1. Satıra Hoş Geldiniz Başlığı (0. sütun, 0. satır)
  lcd.setCursor(0, 0);
  lcd.print("Bilisim Atolyesi");

  // 2. Satıra İlk Sayaç Değerini Yazdır (0. sütun, 1. satır)
  lcd.setCursor(0, 1);
  lcd.print("Ziyaretci: 0   ");

  // Seri portu bilgilendirme için aç
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("I2C LCD Sayac Sistemi Basariyla Baslatildi");
  Serial.println("=========================================");
}

void loop() {
  // Butonun anlık durumunu oku
  int currentButtonState = digitalRead(BUTTON_PIN);

  // Buton durumundaki değişimi yakala (HIGH'dan LOW'a geçiş anı = Butona basıldı)
  if (lastButtonState == HIGH && currentButtonState == LOW) {
    // Sayacı 1 artır
    counter++;

    // LCD 2. satırındaki sayıyı güncelle
    lcd.setCursor(11, 1);
    lcd.print(counter);
    lcd.print("   "); // Eski basamak artıklarını temizlemek için boşluk

    // Seri porta da log düş
    Serial.print("Yeni Sayac Degeri: ");
    Serial.println(counter);

    // Buton arkını (sıçrama / bouncing) önlemek için 200 ms bekleme
    delay(200);
  }

  // Son durumu güncelle
  lastButtonState = currentButtonState;
}
