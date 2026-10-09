/* ==============================================================================
 * PROJE ADI: 2. Sınıf - Trafik Işıkları Simülasyonu (Zamanlama ve Sıralı Mantık)
 * HEDEF SEVİYE: 2. Sınıf (7-8 Yaş / İlkokul Temel Algoritma)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, günlük hayatta sıkça karşılaştıkları akıllı trafik lambası
 * sistemini kodlayarak sıralı mantık (sequential execution) ve zamanlama (timing)
 * kavramlarını kavrarlar.
 * 
 * ÇALIŞMA MANTIĞI:
 * Gerçek trafik ışığı standardına uygun 4 fazlı sıra takip edilir:
 * 1. Faz: Yalnızca KIRMIZI ışık yanar (Araçlar DURUR) -> 5 saniye
 * 2. Faz: KIRMIZI ve SARI ışık birlikte yanar (HAZIRLAN) -> 2 saniye
 * 3. Faz: Kırmızı ve sarı söner, yalnızca YEŞİL ışık yanar (GEÇ) -> 5 saniye
 * 4. Faz: Yeşil söner, yalnızca SARI ışık yanar (DİKKAT / YAVAŞLA) -> 2 saniye
 * Bu döngü sürekli devam ederek güvenli trafik akışını simüle eder.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x Kırmızı LED (5mm)
 * - 1 x Sarı LED (5mm)
 * - 1 x Yeşil LED (5mm)
 * - 3 x 220 Ohm Direnç (Her LED için birer adet)
 * - 5 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı           | Açıklama / Not
 * -----------------------------------------------------------------------------
 * Pin 10 (Dijital)   | 220Ω -> Kırmızı LED Anot | Kırmızı ışık çıkışı (+)
 * Pin 9 (Dijital)    | 220Ω -> Sarı LED Anot    | Sarı ışık çıkışı (+)
 * Pin 8 (Dijital)    | 220Ω -> Yeşil LED Anot   | Yeşil ışık çıkışı (+)
 * GND (Toprak)       | Tüm LED Katotları (-)    | Breadboard mavi eksi hattında birleştirilir
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int RED_PIN    = 10; // Kırmızı LED pini
const int YELLOW_PIN = 9;  // Sarı LED pini
const int GREEN_PIN  = 8;  // Yeşil LED pini

void setup() {
  // Bütün LED pinlerini ÇIKIŞ (OUTPUT) moduna alıyoruz
  pinMode(RED_PIN, OUTPUT);
  pinMode(YELLOW_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);

  // Başlangıçta tüm ışıkları söndürerek temiz bir durum oluşturuyoruz
  digitalWrite(RED_PIN, LOW);
  digitalWrite(YELLOW_PIN, LOW);
  digitalWrite(GREEN_PIN, LOW);
}

void loop() {
  // -------------------------------------------------------
  // 1. FAZ: DUR! Yalnızca Kırmızı Işık Yanar
  // -------------------------------------------------------
  digitalWrite(RED_PIN, HIGH);
  digitalWrite(YELLOW_PIN, LOW);
  digitalWrite(GREEN_PIN, LOW);
  delay(5000); // 5 saniye kırmızıda bekle

  // -------------------------------------------------------
  // 2. FAZ: HAZIRLAN! Kırmızı ve Sarı Birlikte Yanar
  // -------------------------------------------------------
  digitalWrite(RED_PIN, HIGH);
  digitalWrite(YELLOW_PIN, HIGH);
  digitalWrite(GREEN_PIN, LOW);
  delay(2000); // 2 saniye hazır bekle

  // -------------------------------------------------------
  // 3. FAZ: GEÇ! Yalnızca Yeşil Işık Yanar
  // -------------------------------------------------------
  digitalWrite(RED_PIN, LOW);
  digitalWrite(YELLOW_PIN, LOW);
  digitalWrite(GREEN_PIN, HIGH);
  delay(5000); // 5 saniye yeşilde geçiş

  // -------------------------------------------------------
  // 4. FAZ: DİKKAT! Yalnızca Sarı Işık Yanar
  // -------------------------------------------------------
  digitalWrite(RED_PIN, LOW);
  digitalWrite(YELLOW_PIN, HIGH);
  digitalWrite(GREEN_PIN, LOW);
  delay(2000); // 2 saniye sarıda yavaşla
  
  // Sarı söner ve döngü otomatik olarak 1. Faza (Kırmızıya) geri döner.
}
