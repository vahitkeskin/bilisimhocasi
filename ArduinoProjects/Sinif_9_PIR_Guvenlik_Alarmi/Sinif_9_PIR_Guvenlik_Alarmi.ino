/* ==============================================================================
 * PROJE ADI: 9. Sınıf - PIR Hareket Sensörlü Güvenlik Alarm Sistemi
 * HEDEF SEVİYE: 9. Sınıf (14-15 Yaş / Lise Başlangıç - Güvenlik & Otomasyon Sistemleri)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, ev ve iş yeri güvenlik sistemlerinde kullanılan pasif kızılötesi
 * (PIR - Passive Infrared) teknolojisinin fiziğini ve dijital alarm mantığını öğrenirler.
 * Canlıların yaydığı vücut ısısı (kızılötesi ışınım) dalgalanmaları tespit edilerek
 * çok kanallı görsel ve işitsel bir güvenlik alarmı tetiklenir.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. HC-SR501 PIR sensörü, Fresnel merceği sayesinde ortamdaki ani kızılötesi ısı
 *    değişimlerini odaklar ve hareket algıladığında OUT pinine 3.3V (HIGH) verir.
 * 2. Arduino'nun 2 numaralı pini bu dijital sinyali dinler.
 * 3. Bekleme Modu (Güvenli): Yeşil durum LED'i yanar, ortam koruma altındadır.
 * 4. Alarm Modu (Tehlike): Hareket algılandığında yeşil LED söner, kırmızı flaşör LED'i
 *    yanıp söner, buzzer çift tonlu polis sireni üretir ve seri porta güvenlik uyarısı loglanır.
 * 5. Hareket sonlandığında sistem otomatik olarak güvenli moda geri döner.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x HC-SR501 PIR Hareket Sensörü
 * - 1 x Pasif / Aktif Buzzer
 * - 1 x 5mm Kırmızı LED (Alarm Lambası)
 * - 1 x 5mm Yeşil LED (Durum Lambası)
 * - 2 x 220 Ohm Direnç
 * - 8 x Erkek-Erkek / Dişi-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | PIR VCC                 | Sensör güç girişi (4.5V - 12V arası)
 * GND (Toprak)       | PIR GND                 | Ortak toprak hattı
 * Pin 2 (Giriş)      | PIR OUT (Sinyal)        | Dijital hareket algılama pini
 * Pin 8 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Alarm uyarısı çıkışı
 * Pin 7 (Çıkış)      | 220Ω -> Yeşil LED (+)   | Sistem aktif / güvenli durum çıkışı
 * Pin 9 (Çıkış)      | Buzzer Artı (+)         | Siren ses çıkışı
 * GND (Toprak)       | Tüm Katotlar & Buzzer(-)| Ortak toprak hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int PIR_PIN      = 2; // PIR sensör sinyal pini
const int RED_LED_PIN  = 8; // Kırmızı alarm LED'i
const int GREEN_LED_PIN= 7; // Yeşil sistem hazır LED'i
const int BUZZER_PIN   = 9; // Alarm sireni buzzer pini

void setup() {
  // Pin modları yapılandırılıyor
  pinMode(PIR_PIN, INPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  // Seri iletişimi başlatıyoruz
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("Guvenlik Sistemi Baslatiliyor...");
  Serial.println("PIR Sensoru Kalibre Ediliyor (10 sn)... Lutfen Hareket Etmeyiniz.");
  Serial.println("=========================================");

  // PIR sensörünün ortam sıcaklığına uyum sağlaması için 10 saniyelik ısınma süresi
  for (int i = 10; i > 0; i--) {
    digitalWrite(GREEN_LED_PIN, HIGH);
    delay(250);
    digitalWrite(GREEN_LED_PIN, LOW);
    delay(250);
    Serial.print(".");
  }
  
  digitalWrite(GREEN_LED_PIN, HIGH); // Kalibrasyon tamamlandı, yeşil sabit yansın
  Serial.println("\n>> SISTEM DEVREDE! Guvenlik Alarmi Aktif. <<");
}

// Siren sesi üreten yardımcı fonksiyon
void playSiren() {
  tone(BUZZER_PIN, 1200); // Tiz ton
  digitalWrite(RED_LED_PIN, HIGH);
  delay(120);
  
  tone(BUZZER_PIN, 800);  // Bas ton
  digitalWrite(RED_LED_PIN, LOW);
  delay(120);
}

void loop() {
  // PIR hareket durumunu oku (HIGH = Hareket var, LOW = Hareket yok)
  int motionDetected = digitalRead(PIR_PIN);

  if (motionDetected == HIGH) {
    // TEHLİKE / İHLAL DURUMU
    digitalWrite(GREEN_LED_PIN, LOW); // Güvenli ışığını söndür
    Serial.println("[UYARI!] IZINSIZ HAREKET ALGILANDI! Guvenlik ihlali!");
    
    // Siren çal ve kırmızı LED'i flaşör yap
    playSiren();
  } else {
    // GÜVENLİ / HAREKET YOK DURUMU
    digitalWrite(GREEN_LED_PIN, HIGH); // Sistem güvenli, yeşil yanar
    digitalWrite(RED_LED_PIN, LOW);   // Kırmızı kapalı
    noTone(BUZZER_PIN);               // Ses kapalı
    delay(50);
  }
}
