/* ==============================================================================
 * PROJE ADI: 1. Sınıf - Buton ile LED Kontrolü (Giriş / Çıkış Mantığı)
 * HEDEF SEVİYE: 1. Sınıf (6-7 Yaş / İlkokul Başlangıç)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler "Giriş" (Input) ve "Çıkış" (Output) kavramlarını öğrenir.
 * Fiziksel bir düğmeye basılma eylemi (Kullanıcı Girdisi), Arduino tarafından algılanır
 * ve anında bir eyleme (LED Işığı Çıktısı) dönüştürülür.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Arduino, dahili PULL-UP direnci aktif edilmiş 2 numaralı butonu sürekli dinler.
 * 2. Butona basılmadığında pin 5V (HIGH) seviyesindedir.
 * 3. Butona basıldığında devre GND'ye tamamlanır ve pin 0V (LOW) değerini alır.
 * 4. Şartlı mantık (if / else) kullanılarak:
 *    - Eğer butona basılmışsa (LOW) -> LED YANAR (HIGH).
 *    - Eğer butona basılmamışsa (HIGH) -> LED SÖNER (LOW).
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x 4 Bacaklı Push Buton (Dokunmatik Düğme)
 * - 1 x 5mm Yeşil LED
 * - 1 x 220 Ohm Direnç (LED koruması için)
 * - 4 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * Pin 2 (Dijital Giriş) | Buton 1. Bacağı       | INPUT_PULLUP ile yapılandırılır
 * GND (Toprak)       | Buton Çapraz Bacağı     | Butona basılınca GND'ye bağlanır
 * Pin 8 (Dijital Çıkış)| 220Ω Direnç -> LED Anot | LED'in uzun (+) bacağına dirençle
 * GND (Toprak)       | LED Katot (-)           | LED'in kısa (-) bacağına doğrudan
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int BUTTON_PIN = 2; // Butonun bağlı olduğu dijital giriş pini
const int LED_PIN    = 8; // LED'in bağlı olduğu dijital çıkış pini

void setup() {
  // LED pinini ÇIKIŞ (OUTPUT) olarak tanımlıyoruz
  pinMode(LED_PIN, OUTPUT);

  // Buton pinini dahili direnci aktif ederek INPUT_PULLUP olarak ayarlıyoruz.
  // Bu sayede harici direnç takmaya gerek kalmaz; basılmadığında HIGH, basıldığında LOW okur.
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  // Butonun mevcut durumunu oku (HIGH veya LOW)
  int buttonState = digitalRead(BUTTON_PIN);

  // INPUT_PULLUP modunda butona basıldığında GND'ye bağlanır ve değer LOW olur.
  if (buttonState == LOW) {
    // Butona basıldı: LED'i YAK
    digitalWrite(LED_PIN, HIGH);
  } else {
    // Butona basılmıyor: LED'i SÖNDÜR
    digitalWrite(LED_PIN, LOW);
  }

  // Kararlı okuma için kısa bir mikro gecikme (debouncing / ark önleme)
  delay(10);
}
