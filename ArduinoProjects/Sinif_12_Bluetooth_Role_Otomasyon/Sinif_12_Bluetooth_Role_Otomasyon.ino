/* ==============================================================================
 * PROJE ADI: 12. Sınıf - Bluetooth (HC-05/06) Kontrollü Otomasyon & Röle ile Yüksek Güç Kontrolü
 * HEDEF SEVİYE: 12. Sınıf (17-18 Yaş / Lise Mezuniyet - IoT, Kablosuz İletişim & Endüstriyel Otomasyon)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler; Nesnelerin İnterneti (IoT), akıllı ev sistemleri ve endüstriyel
 * otomasyonun temelini oluşturan kablosuz UART haberleşmesini (Bluetooth) ve galvanik
 * optik yalıtımlı röle sürücülerini öğrenirler. Düşük gerilimli (5V) mikrodenetleyicilerle
 * yüksek voltajlı (220V AC şebeke veya 12V-24V DC motorlar) yüklerin güvenle nasıl
 * anahtarlandığı kavranır.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Akıllı telefon veya bilgisayardaki Bluetooth terminal uygulamasından komut gönderilir.
 * 2. HC-05/HC-06 Bluetooth modülü bu telsiz sinyali yakalar ve SoftwareSerial (Pin 2, Pin 3)
 *    üzerinden 9600 baud hızında Arduino'ya aktarır.
 * 3. Gelen komut karakterine göre eylem gerçekleştirilir:
 *    - '1' Komutu: Röleyi AÇAR (Devre kapanır, lamba/motor çalışır), Durum LED'i yanar.
 *                  Telefona "OK: YUK CALISTIRILDI" geri bildirimi döner.
 *    - '0' Komutu: Röleyi KAPATIR (Devre açılır, yük söner), Durum LED'i söner.
 *                  Telefona "OK: YUK DURDURULDU" geri bildirimi döner.
 *    - 'T' veya '?' Komutu: Güncel röle durumunu telefona raporlar.
 * 4. Röle üzerindeki dahili optokuplör sayesinde mikrodenetleyici kartı yüksek akım
 *    parazitlerinden ve şebeke dalgalanmalarından %100 izole edilir.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x HC-05 veya HC-06 Bluetooth SPP Seri Modülü
 * - 1 x 1 Kanallı 5V Röle Modülü (Optokuplör Korumalı)
 * - 1 x 5mm Mavi veya Yeşil Durum LED'i
 * - 1 x 220 Ohm Direnç (LED için)
 * - 1 x 1k Ohm ve 1 x 2k Ohm Direnç (HC-05 RX bacağı voltaj bölücü için)
 * - 10 x Erkek-Dişi / Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | HC-05 VCC & Röle VCC    | 5V ortak güç hattı
 * GND (Toprak)       | HC-05 GND & Röle GND    | Ortak toprak referans hattı
 * Pin 2 (Soft RX)    | HC-05 TXD               | Telefondan gelen veriyi okur
 * Pin 3 (Soft TX)    | 1kΩ & 2kΩ -> HC-05 RXD  | Voltaj bölücü ile 3.3V seviyesine düşürülür
 * Pin 7 (Dijital)    | Röle IN (Kontrol Girişi)| Röleyi tetikleyen kontrol pini
 * Pin 8 (Dijital)    | 220Ω -> Durum LED (+)   | Görsel geri bildirim LED'i
 * GND (Toprak)       | Durum LED Katot (-)     | LED toprak hattı
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - SoftwareSerial.h (Arduino çekirdeğinde yerleşik gelir, donanımsal Pin 0/1 USB portunu
 *   meşgul etmemek için yazılımsal seri port kullanılır).
 * 
 * GÜVENLİK UYARISI:
 * 220V AC şebeke gerilimi ile çalışırken kesinlikle çıplak kablolara dokunmayınız!
 * Okul ve sınıf ortamında rölenin kontaklarına 9V-12V DC fan veya LED şerit bağlayarak
 * güvenli deneyler yapılması pedagojik açıdan tavsiye edilir.
 * ============================================================================== */

#include <SoftwareSerial.h> // Yazılımsal Seri Haberleşme Kütüphanesi

// Pin Tanımlamaları
const int BT_RX_PIN  = 2; // Arduino RX (Bluetooth TX'e bağlanır)
const int BT_TX_PIN  = 3; // Arduino TX (Bluetooth RX'e voltaj bölücüyle gider)
const int RELAY_PIN  = 7; // Röle modülü kontrol sinyali
const int STATUS_LED = 8; // Durum gösterge LED'i

// Yazılımsal Bluetooth seri port nesnesi (RX, TX)
SoftwareSerial bluetooth(BT_RX_PIN, BT_TX_PIN);

// Çoğu 5V röle modülü "Low Level Trigger" (Aktif-LOW) mantığıyla çalışır.
// Röleyi açmak için LOW, kapatmak için HIGH verilir.
const int RELAY_ON  = LOW;  
const int RELAY_OFF = HIGH; 

bool isRelayActive = false; // Rölenin anlık durum bayrağı

void setup() {
  // Pin modları ayarlanıyor
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(STATUS_LED, OUTPUT);

  // Başlangıçta röleyi güvenli kapalı duruma getiriyoruz
  digitalWrite(RELAY_PIN, RELAY_OFF);
  digitalWrite(STATUS_LED, LOW);
  isRelayActive = false;

  // Bilgisayar Seri Portunu başlat (9600 baud)
  Serial.begin(9600);
  // Bluetooth Seri Portunu başlat (HC-05/06 varsayılan hızı 9600 baud)
  bluetooth.begin(9600);

  Serial.println("==================================================");
  Serial.println("12. Sinif Bluetooth Role Otomasyon Sistemi Hazir");
  Serial.println("Komutlar: [1] Ac | [0] Kapat | [T] Durum Oku");
  Serial.println("==================================================");
}

void loop() {
  // Bluetooth üzerinden telefondan gelen veri var mı?
  if (bluetooth.available() > 0) {
    char command = bluetooth.read(); // 1 karakter oku

    Serial.print("Bluetooth Gelen Komut: ");
    Serial.println(command);

    if (command == '1') {
      // YÜKÜ VE RÖLEYİ ÇALIŞTIR
      digitalWrite(RELAY_PIN, RELAY_ON);
      digitalWrite(STATUS_LED, HIGH);
      isRelayActive = true;

      // Telefondaki uygulamaya geri bildirim gönder
      bluetooth.println(">> BILGI: Role ve Yuk ACILDI (AKTIF).");
      Serial.println("[ISLEM] Role Acildi.");
    } 
    else if (command == '0') {
      // YÜKÜ VE RÖLEYİ KAPAT
      digitalWrite(RELAY_PIN, RELAY_OFF);
      digitalWrite(STATUS_LED, LOW);
      isRelayActive = false;

      // Telefondaki uygulamaya geri bildirim gönder
      bluetooth.println(">> BILGI: Role ve Yuk KAPATILDI (PASIF).");
      Serial.println("[ISLEM] Role Kapatildi.");
    } 
    else if (command == 'T' || command == 't' || command == '?') {
      // DURUM SORGULAMA
      if (isRelayActive) {
        bluetooth.println(">> DURUM: Su anda ACIK (ON).");
      } else {
        bluetooth.println(">> DURUM: Su anda KAPALI (OFF).");
      }
    }
    else {
      // GEÇERSİZ KOMUT
      bluetooth.println(">> HATA: Bilinmeyen komut! '1', '0' veya 'T' gonderiniz.");
    }
  }

  // Bilgisayar Seri Monitöründen Bluetooth'a manuel test komutu gönderme köprüsü
  if (Serial.available() > 0) {
    char pcCommand = Serial.read();
    bluetooth.write(pcCommand);
  }
}
