/* ==============================================================================
 * PROJE ADI: 6. Sınıf - HC-SR04 Ultrasonik Sensör ile Sesli/Işıklı Park Sensörü
 * HEDEF SEVİYE: 6. Sınıf (11-12 Yaş / Otomotiv ve Akıllı Araç Teknolojileri)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, modern otomobillerde arka tamponda yer alan geri görüş
 * ve park sensörlerinin çalışma mantığını modeller. Ses dalgalarının yankılanma
 * (ekolokasyon / yarasa prensibi) fiziği, matematiksel formülle mesafeye dönüştürülür.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Arduino, HC-SR04 sensörünün Trig (Tetikleyici) pininden 10 mikrosaniyelik
 *    yüksek frekanslı (40 kHz) ses dalgası fırlatır.
 * 2. Ses dalgası bir engele çarpıp geri döner ve Echo (Yankı) pini tarafından yakalanır.
 * 3. "pulseIn()" fonksiyonu sesin havada gidiş-dönüş süresini (mikrosaniye) ölçer.
 * 4. Ses hızı (343 m/s = 0.0343 cm/µs) formülüyle mesafe hesaplanır:
 *    Mesafe (cm) = (Sure / 2) * 0.0343
 * 5. Kademeli geri bildirim:
 *    - 30 cm'den uzak: Güvenli bölge (Sessiz, LED kapalı)
 *    - 15 - 30 cm: Dikkat (Aralıklı sesli bip ve flaşör)
 *    - 5 - 15 cm: Yakın engel (Hızlı bip ve hızlı flaşör)
 *    - 5 cm'den yakın: Tehlike / Acil Dur (Sürekli alarm ve kesintisiz ışık)
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x HC-SR04 Ultrasonik Mesafe Sensörü
 * - 1 x Pasif veya Aktif Buzzer
 * - 1 x 5mm Kırmızı LED
 * - 1 x 220 Ohm Direnç
 * - 8 x Erkek-Erkek veya Erkek-Dişi Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | HC-SR04 VCC             | Sensör beslemesi
 * GND (Toprak)       | HC-SR04 GND             | Sensör toprak hattı
 * Pin 9 (Çıkış)      | HC-SR04 Trig            | Ses dalgası tetikleme pini
 * Pin 8 (Giriş)      | HC-SR04 Echo            | Ses yankı algılama pini
 * Pin 7 (Çıkış)      | Buzzer Artı (+)         | Sesli uyarı çıkışı
 * GND (Toprak)       | Buzzer Eksi (-)         | Buzzer toprak hattı
 * Pin 6 (Çıkış)      | 220Ω -> Kırmızı LED (+) | Görsel uyarı çıkışı
 * GND (Toprak)       | Kırmızı LED Katot (-)   | LED toprak hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int TRIG_PIN   = 9; // Ses fırlatma pini
const int ECHO_PIN   = 8; // Yankı dinleme pini
const int BUZZER_PIN = 7; // Sesli uyarı pini
const int LED_PIN    = 6; // Işıklı uyarı pini

void setup() {
  // Pin modları yapılandırılıyor
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);

  // Seri ekranı başlatıyoruz
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("HC-SR04 Akilli Park Sensoru Baslatildi");
  Serial.println("=========================================");
}

// Mesafeyi santimetre olarak ölçen yardımcı fonksiyon
long measureDistance() {
  // Temiz bir sinyal için Trig pinini önce LOW yapıyoruz
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  // 10 mikrosaniyelik ultrasonik ses dalgası gönder
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Echo pininden dalganın gidiş-dönüş süresini oku (mikrosaniye)
  long duration = pulseIn(ECHO_PIN, HIGH);

  // Sesin havadaki yayılma hızı: 343 m/s = 0.0343 cm/mikrosaniye
  // Gidiş ve geliş olduğu için 2'ye bölüyoruz
  long distanceCm = (duration / 2) * 0.0343;

  return distanceCm;
}

void loop() {
  // Güncel mesafeyi ölç
  long distance = measureDistance();

  // Seri porta yazdır
  Serial.print("Engel Mesafesi: ");
  Serial.print(distance);
  Serial.println(" cm");

  // Mesafe durumuna göre kademeli tepki
  if (distance <= 0 || distance > 40) {
    // 40 cm'den uzakta veya geçersiz: Güvenli
    digitalWrite(LED_PIN, LOW);
    noTone(BUZZER_PIN);
    delay(100);
  } 
  else if (distance <= 5) {
    // 5 cm veya daha yakın: KRİTİK TEHLİKE (Sürekli alarm)
    digitalWrite(LED_PIN, HIGH);
    tone(BUZZER_PIN, 1000); // Sürekli 1000Hz öt
    delay(100);
  } 
  else if (distance <= 15) {
    // 5-15 cm arası: ÇOK YAKIN (Hızlı bip)
    digitalWrite(LED_PIN, HIGH);
    tone(BUZZER_PIN, 800);
    delay(60);
    digitalWrite(LED_PIN, LOW);
    noTone(BUZZER_PIN);
    delay(60);
  } 
  else if (distance <= 30) {
    // 15-30 cm arası: DİKKAT (Orta hızda bip)
    digitalWrite(LED_PIN, HIGH);
    tone(BUZZER_PIN, 600);
    delay(150);
    digitalWrite(LED_PIN, LOW);
    noTone(BUZZER_PIN);
    delay(150);
  } 
  else {
    // 30-40 cm arası: UZAK (Yavaş bip)
    digitalWrite(LED_PIN, HIGH);
    tone(BUZZER_PIN, 500);
    delay(300);
    digitalWrite(LED_PIN, LOW);
    noTone(BUZZER_PIN);
    delay(300);
  }
}
