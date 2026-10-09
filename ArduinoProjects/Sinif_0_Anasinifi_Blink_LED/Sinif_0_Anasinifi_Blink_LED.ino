/* ==============================================================================
 * PROJE ADI: Anasınıfı - Temel Giriş: Tek LED Yakma & Söndürme (Blink)
 * HEDEF SEVİYE: Ana Sınıfı (4-5 Yaş / Erken Çocukluk)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu proje, minik öğrencilerin fiziksel programlama dünyasına ilk adımıdır.
 * Bir mikrodenetleyicinin (Arduino Uno) elektrik akımını açıp kapatarak (Dijital Çıkış)
 * ışık üretebileceğini somut olarak gösterir.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Arduino dijital 8 numaralı pine bağlı olan LED'e 5V elektrik verir (HIGH / 1).
 * 2. 1000 milisaniye (1 saniye) boyunca ışık açık bekler.
 * 3. Ardından elektrik kesilir (LOW / 0) ve LED söner.
 * 4. 1000 milisaniye (1 saniye) boyunca ışık kapalı bekler.
 * 5. Bu döngü sonsuz kez tekrarlanarak "göz kırpan" (blink) lamba etkisi oluşturur.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3 (veya uyumlu geliştirme kartı)
 * - 1 x Breadboard (Devre Tahtası)
 * - 1 x 5mm Kırmızı LED (veya istenen renkte LED)
 * - 1 x 220 Ohm Direnç (Renk Kodları: Kırmızı - Kırmızı - Kahverengi - Altın)
 * - 2 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Programlama Kablosu
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * Pin 8 (Dijital)    | 220Ω Direnç -> LED Anot | LED'in uzun bacağına (+) direnç üzerinden
 * GND (Toprak)       | LED Katot (-)           | LED'in kısa bacağına (düz kenar) doğrudan
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez (Arduino çekirdek fonksiyonları kullanılır).
 * ============================================================================== */

// Pin Tanımlamaları
const int LED_PIN = 8; // LED'in bağlı olduğu dijital çıkış pini

// Kurulum Fonksiyonu: Arduino ilk açıldığında veya resetlendiğinde 1 kez çalışır
void setup() {
  // LED pinini elektrik gönderecek bir ÇIKIŞ (OUTPUT) olarak ayarlıyoruz
  pinMode(LED_PIN, OUTPUT);
}

// Ana Döngü: setup() bittikten sonra güç kesilene kadar sürekli tekrarlanır
void loop() {
  // 1. Adım: LED'e elektrik ver (5V) -> LED Yanar
  digitalWrite(LED_PIN, HIGH);
  
  // 2. Adım: 1000 milisaniye (1 saniye) boyunca bu durumda bekle
  delay(1000);
  
  // 3. Adım: LED'e giden elektriği kes (0V) -> LED Söner
  digitalWrite(LED_PIN, LOW);
  
  // 4. Adım: 1000 milisaniye (1 saniye) boyunca karanlıkta bekle
  delay(1000);
  
  // loop() bittiğinde otomatik olarak başa döner ve LED tekrar yanar.
}
