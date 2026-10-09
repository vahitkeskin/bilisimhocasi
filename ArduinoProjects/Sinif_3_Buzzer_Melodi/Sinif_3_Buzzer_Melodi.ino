/* ==============================================================================
 * PROJE ADI: 3. Sınıf - Buzzer ile Melodi ve Ritim (Sesli Geri Bildirim)
 * HEDEF SEVİYE: 3. Sınıf (8-9 Yaş / Müzik ve Kodlama Entegrasyonu)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, ses dalgalarının frekanslarını (Hertz cinsinden titreşim)
 * yazılımla kontrol ederek melodiler ve ritimler üretmeyi öğrenirler.
 * Arduino'nun "tone()" ve "noTone()" fonksiyonları ile sesli geri bildirim mantığı pekiştirilir.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Piezo buzzer içerisindeki kristal plaka, verilen frekansta saniyede yüzlerce kez titrer.
 * 2. Her müzik notasının kendine has bir frekansı vardır (Örn: Do=262Hz, Re=294Hz, Mi=330Hz).
 * 3. Dizi (Array) ve for döngüsü kullanılarak popüler çocuk şarkısı ("Daha Dün Annemizin")
 *    notaları ve süreleri sırayla çalınır.
 * 4. Şarkı bittikten sonra 3 saniye beklenir ve tekrar başa döner.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x Pasif Piezo Buzzer (Passive Buzzer)
 * - 1 x 100 Ohm Direnç (İsteğe bağlı, ses seviyesini yumuşatmak için)
 * - 2 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * Pin 8 (Dijital Çıkış)| Buzzer Artı (+) Bacağı | PWM veya dijital pin, ses çıkışı
 * GND (Toprak)       | Buzzer Eksi (-) Bacağı  | Toprak hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez (tone() yerleşik fonksiyondur).
 * ============================================================================== */

// Pin Tanımlaması
const int BUZZER_PIN = 8; // Buzzer bağlı olan dijital pin

// Nota Frekansları (Hertz / Hz cinsinden standart ses frekansları)
#define NOTE_C4 262 // Do
#define NOTE_D4 294 // Re
#define NOTE_E4 330 // Mi
#define NOTE_F4 349 // Fa
#define NOTE_G4 392 // Sol
#define NOTE_A4 440 // La
#define NOTE_B4 494 // Si
#define NOTE_C5 523 // İnce Do

// "Daha Dün Annemizin" Melodi Notaları Dizisi
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_G4, NOTE_G4, NOTE_A4, NOTE_A4, NOTE_G4,
  NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4, NOTE_D4, NOTE_C4,
  NOTE_G4, NOTE_G4, NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4,
  NOTE_G4, NOTE_G4, NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4,
  NOTE_C4, NOTE_C4, NOTE_G4, NOTE_G4, NOTE_A4, NOTE_A4, NOTE_G4,
  NOTE_F4, NOTE_F4, NOTE_E4, NOTE_E4, NOTE_D4, NOTE_D4, NOTE_C4
};

// Notaların Vuruş Süreleri (4 = Dörtlük nota, 2 = İkilik / uzun nota)
int noteDurations[] = {
  4, 4, 4, 4, 4, 4, 2,
  4, 4, 4, 4, 4, 4, 2,
  4, 4, 4, 4, 4, 4, 2,
  4, 4, 4, 4, 4, 4, 2,
  4, 4, 4, 4, 4, 4, 2,
  4, 4, 4, 4, 4, 4, 2
};

// Toplam nota sayısı
const int TOTAL_NOTES = sizeof(melody) / sizeof(melody[0]);

void setup() {
  // Buzzer pini çıkış olarak tanımlanır
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  // Bütün melodiyi sırayla for döngüsü ile çalıyoruz
  for (int thisNote = 0; thisNote < TOTAL_NOTES; thisNote++) {
    // 1 saniye (1000ms) üzerinden nota süresini milisaniyeye çeviriyoruz
    int durationMs = 1000 / noteDurations[thisNote];

    // Belirlenen frekans ve sürede sesi başlat
    tone(BUZZER_PIN, melody[thisNote], durationMs);

    // Notaların birbirine karışmaması için hafif bir duraklama payı (%30)
    int pauseBetweenNotes = durationMs * 1.30;
    delay(pauseBetweenNotes);

    // Bir sonraki notaya geçmeden önce sesi kes
    noTone(BUZZER_PIN);
  }

  // Şarkı tamamlandıktan sonra 3 saniye bekle, sonra tekrar çal
  delay(3000);
}
