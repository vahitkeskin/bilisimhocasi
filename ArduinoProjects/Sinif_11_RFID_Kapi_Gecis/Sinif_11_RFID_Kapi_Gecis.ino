/* ==============================================================================
 * PROJE ADI: 11. Sınıf - RC522 RFID Modülü ile Akıllı Kapı Geçiş Kontrolü
 * HEDEF SEVİYE: 11. Sınıf (16-17 Yaş / Lise İleri Düzey - Kimlik Doğrulama & SPI Protokolü)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler; kurumsal bina girişlerinde, metro turnikelerinde ve otel
 * kapı kilitlerinde kullanılan Radyo Frekansı ile Tanımlama (RFID) teknolojisini
 * ve yüksek hızlı SPI (Serial Peripheral Interface) veri yolunu öğrenirler.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. RC522 modülü 13.56 MHz elektromanyetik alan yayar.
 * 2. Pasif RFID kart veya anahtarlık bu alana girdiğinde indüksiyonla beslenir
 *    ve içindeki benzersiz seri numarasını (UID - Unique Identifier) telsizle yayınlar.
 * 3. Arduino SPI protokolü üzerinden kartın 4 baytlık UID kodunu okur.
 * 4. Hafızadaki yetkili UID ile karşılaştırma yapılır:
 *    - YETKİLİ KART: Yeşil LED yanar, onay melodisi çalar, servo motor 90 derece
 *      açılarak kapı kilidini açar. 3 saniye sonra otomatik kilitlenir.
 *    - YETKİSİZ KART: Kırmızı LED yanar, kalın hata tonu çalar, kilit açılmaz
 *      ve seri porta güvenlik alarm kaydı düşülür.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x RC522 13.56 MHz RFID Okuyucu Modülü
 * - 1 x TowerPro SG90 Mini Servo Motor (Kilit Mekanizması)
 * - 1 x 5mm Yeşil LED (Yetkili Giriş)
 * - 1 x 5mm Kırmızı LED (Geçersiz Kart)
 * - 1 x Piezo Buzzer
 * - 2 x 220 Ohm Direnç
 * - 1 x 13.56 MHz RFID Kart veya Mavi Anahtarlık
 * - 10 x Erkek-Dişi / Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 3.3V (DİKKAT!)     | RC522 3.3V (VCC)        | KESİNLİKLE 5V BAĞLAMAYINIZ! (Modül bozulur)
 * GND (Toprak)       | RC522 GND               | Ortak toprak hattı
 * Pin 9 (Dijital)    | RC522 RST (Reset)       | Modül donanımsal resetleme pini
 * Pin 10 (SS / SDA)  | RC522 SDA (Slave Select)| SPI Seçim Hattı
 * Pin 11 (MOSI)      | RC522 MOSI              | Master Out Slave In hattı
 * Pin 12 (MISO)      | RC522 MISO              | Master In Slave Out hattı
 * Pin 13 (SCK)       | RC522 SCK               | SPI Seri Saat Hattı
 * Pin 5 (PWM)        | SG90 Servo Sinyal       | Kapı mandalını çeviren servo
 * Pin 6 (Çıkış)      | 220Ω -> Yeşil LED (+)   | Yetkili geçiş ışığı
 * Pin 7 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Hatalı kart ışığı
 * Pin 8 (Çıkış)      | Buzzer (+)              | Sesli bildirim
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * 1. SPI.h (Yerleşik)
 * 2. MFRC522.h
 *    Kurulum: Arduino IDE -> Kütüphaneleri Yönet -> "MFRC522 by GithubCommunity" kurunuz.
 * 3. Servo.h (Yerleşik)
 * ============================================================================== */

#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>

// Pin Yapılandırması
const int RST_PIN     = 9;
const int SS_PIN      = 10;
const int SERVO_PIN   = 5;
const int GREEN_LED   = 6;
const int RED_LED     = 7;
const int BUZZER_PIN  = 8;

// Donanım Nesneleri
MFRC522 mfrc522(SS_PIN, RST_PIN);
Servo lockServo;

// Tanımlı Yetkili Kartın UID Kodu (Kendi kartınızın kodunu seri porttan okuyup buraya yazınız!)
// Örnek format: "A1 B2 C3 D4"
String authorizedUID = "D3 7A 54 1B"; 

void setup() {
  // Pin modları
  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  // Servo motoru başlangıçta kapalı (kilitli = 0 derece) pozisyonuna al
  lockServo.attach(SERVO_PIN);
  lockServo.write(0);

  // Seri portu başlat
  Serial.begin(9600);
  SPI.begin();         // SPI veri yolunu başlat
  mfrc522.PCD_Init();  // RC522 RFID okuyucuyu başlat

  Serial.println("=========================================");
  Serial.println("RFID Akilli Kapi Gecis Sistemi Devrede");
  Serial.println("Lutfen Karti Okuyucuya Yaklastiriniz...");
  Serial.println("=========================================");
}

// Onay Sesi ve Melodisi
void playSuccess() {
  tone(BUZZER_PIN, 1000, 100);
  delay(120);
  tone(BUZZER_PIN, 1500, 150);
}

// Hata Sesi
void playError() {
  tone(BUZZER_PIN, 300, 400);
  delay(400);
}

void loop() {
  // Yeni bir kart yaklaştı mı kontrol et
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  // Kartın seri numarası (UID) başarıyla okundu mu?
  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  // Okunan UID'yi String formatına dönüştür
  String readUID = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    readUID += (mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
    readUID += String(mfrc522.uid.uidByte[i], HEX);
    if (i < mfrc522.uid.size - 1) readUID += " ";
  }
  readUID.toUpperCase(); // Harfleri büyük yap

  Serial.print("Okunan Kart UID: [ ");
  Serial.print(readUID);
  Serial.print(" ] --> ");

  // Kart Yetki Kontrolü
  if (readUID == authorizedUID) {
    Serial.println("DURUM: YETKILI KART! Kapi Aciliyor...");
    
    // Yeşil LED yak & Başarı sesi çal
    digitalWrite(GREEN_LED, HIGH);
    playSuccess();

    // Servoyu 90 derece çevirerek kapı mandalını aç
    lockServo.write(90);
    delay(3000); // 3 saniye boyunca kapıyı açık tut

    // Kilit tekrar kapansın
    lockServo.write(0);
    digitalWrite(GREEN_LED, LOW);
    Serial.println("Kapi Otomatik Olarak Kilitlendi.");
  } else {
    Serial.println("DURUM: YETKISIZ KART! Erisim Reddedildi!");
    
    // Kırmızı LED yak & Hata tonu çal
    digitalWrite(RED_LED, HIGH);
    playError();
    digitalWrite(RED_LED, LOW);
  }

  // Kart okumayı sonlandır
  mfrc522.PICC_HaltA();
  mfrc522.PCD_StopCrypto1();
  delay(1000); // Çift okumayı önlemek için 1 saniye bekle
}
