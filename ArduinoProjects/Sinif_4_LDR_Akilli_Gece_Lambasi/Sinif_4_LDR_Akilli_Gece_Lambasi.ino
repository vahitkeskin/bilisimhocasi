/* ==============================================================================
 * PROJE ADI: 4. Sınıf - LDR ile Akıllı Gece Lambası (Analog Sensör Mantığı)
 * HEDEF SEVİYE: 4. Sınıf (9-10 Yaş / İlkokul Bitiş - Sensör Temelleri)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, çevresel verileri (ışık yoğunluğu) algılayan analog sensörleri
 * ve mikrodenetleyicinin bu sürekli veriyi nasıl sayısal değerlere (0-1023) dönüştürdüğünü
 * (ADC - Analog Dijital Çevirici) öğrenirler. Sokak lambalarının hava kararınca otomatik
 * yanma prensibi modellenir.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. LDR (Işığa Duyarlı Direnç), üzerine düşen ışık arttıkça direncini düşürür.
 * 2. 10kΩ sabit direnç ile oluşturulan voltaj bölücü devresi sayesinde A0 pinine
 *    0V ile 5V arasında değişen bir gerilim gelir.
 * 3. Arduino "analogRead(A0)" ile bu gerilimi 0 ile 1023 arasında bir tam sayıya çevirir.
 * 4. Belirlenen eşik değerin (THRESHOLD = 450) altına düşüldüğünde (hava karardığında):
 *    - Akıllı gece lambası LED'i otomatik olarak YANAR.
 *    - Gün ışığında ise enerji tasarrufu için LED SÖNER.
 * 5. Ölçülen ışık değeri Seri Port Ekranı'na (Serial Monitor) anlık yazdırılır.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x LDR (Işığa Duyarlı Foto Direnç)
 * - 1 x 10k Ohm Direnç (Kahverengi - Siyah - Turuncu - Altın) -> Voltaj Bölücü
 * - 1 x 5mm Beyaz veya Mavi LED
 * - 1 x 220 Ohm Direnç -> LED Koruma
 * - 5 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | LDR 1. Bacağı           | LDR'ye besleme verilir
 * A0 (Analog Giriş)  | LDR 2. Bacak & 10kΩ Kesişimi | Gerilim bölücü orta sinyal hattı
 * GND (Toprak)       | 10kΩ Direncin Diğer Ucu | Voltaj bölücü toprak hattı
 * Pin 9 (Dijital/PWM)| 220Ω Direnç -> LED Anot | LED pozitif (+) besleme hattı
 * GND (Toprak)       | LED Katot (-)           | LED negatif (-) toprak hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int LDR_PIN = A0; // LDR sensörünün bağlı olduğu analog giriş pini
const int LED_PIN = 9;  // Gece lambası LED'inin bağlı olduğu çıkış pini

// Işık Eşik Değeri: Ortamın aydınlık/karanlık sınırını belirler.
// 0 (Zifiri Karanlık) ile 1023 (Çok Parlak Işık) arasındadır.
const int LIGHT_THRESHOLD = 450;

void setup() {
  // LED pinini ÇIKIŞ olarak ayarlıyoruz
  pinMode(LED_PIN, OUTPUT);

  // Seri haberleşmeyi 9600 baud hızında başlatıyoruz (Sensör değerlerini izlemek için)
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("Akilli Gece Lambasi Sistemi Baslatildi");
  Serial.println("=========================================");
}

void loop() {
  // A0 pininden analog ışık seviyesini oku (0 - 1023)
  int lightLevel = analogRead(LDR_PIN);

  // Değeri seri port ekranına yazdır
  Serial.print("Ortam Isik Seviyesi: ");
  Serial.print(lightLevel);

  // Eğer ışık seviyesi eşiğin altındaysa -> HAVA KARANLIK
  if (lightLevel < LIGHT_THRESHOLD) {
    digitalWrite(LED_PIN, HIGH); // Lambayı aç
    Serial.println(" -> [DURUM: KARANLIK - Lamba YANDI]");
  } else {
    digitalWrite(LED_PIN, LOW);  // Lambayı kapat
    Serial.println(" -> [DURUM: AYDINLIK - Lamba SÖNDÜ]");
  }

  // Ölçümler arasında 250 milisaniye bekle
  delay(250);
}
