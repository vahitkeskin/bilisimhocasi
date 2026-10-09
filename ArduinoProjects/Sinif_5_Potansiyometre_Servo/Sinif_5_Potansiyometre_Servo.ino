/* ==============================================================================
 * PROJE ADI: 5. Sınıf - Potansiyometre ile Servo Motor Açısı Kontrolü
 * HEDEF SEVİYE: 5. Sınıf (10-11 Yaş / Ortaokul Başlangıç - Robotik Mekanizmalar)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, robotik kollarda ve yönlendirme sistemlerinde kullanılan
 * hassas açılı motorların (Servo Motor) çalışma prensibini öğrenirler. Bir döner
 * direnç (Potansiyometre) ile açı komutu verilerek matematiksel ölçekleme (map fonksiyonu)
 * pratiği yapılır.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Potansiyometre çevrildikçe A0 analog pinine 0V ile 5V arasında gerilim iletir.
 * 2. Arduino "analogRead(A0)" ile bu sinyali okur (0 - 1023 sayısal aralığı).
 * 3. "map()" matematiksel fonksiyonu kullanılarak 0-1023 aralığı, servonun dönüş
 *    kapasitesi olan 0 - 180 dereceye dönüştürülür.
 * 4. Servo kütüphanesi (Servo.h) vasıtasıyla Pin 9 üzerinden üretilen PWM sinyali ile
 *    motor milinin tam olarak istenilen açıya kilitlenmesi sağlanır.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x TowerPro SG90 Mini Servo Motor (9g)
 * - 1 x 10k Ohm Döner Potansiyometre
 * - 7 x Erkek-Erkek Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | Potansiyometre 1. Bacak | Potansiyometre pozitif besleme
 * A0 (Analog Giriş)  | Potansiyometre Orta Bacak| Ayarlanabilir voltaj çıkışı (Silecek)
 * GND (Toprak)       | Potansiyometre 3. Bacak | Potansiyometre toprak hattı
 * Pin 9 (PWM)        | Servo Sinyal Kablosu    | Turuncu veya Sarı renkli kablo
 * 5V (Güç)           | Servo Besleme Kablosu   | Kırmızı renkli orta kablo
 * GND (Toprak)       | Servo Toprak Kablosu    | Kahverengi veya Siyah kablo
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Servo.h (Arduino IDE içerisinde varsayılan olarak yüklü gelir, harici indirme gerekmez).
 * ============================================================================== */

#include <Servo.h> // Standart Arduino Servo kütüphanesini projeye dahil ediyoruz

// Pin Tanımlamaları
const int POT_PIN   = A0; // Potansiyometre analog okuma pini
const int SERVO_PIN = 9;  // Servo motor PWM sinyal pini

// Servo nesnesi oluşturuluyor
Servo myServo;

void setup() {
  // Servo motoru Pin 9'a bağlıyoruz
  myServo.attach(SERVO_PIN);

  // Bilgi amaçlı seri portu başlatıyoruz
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("Servo Motor Aci Kontrol Sistemi Hazir");
  Serial.println("=========================================");
}

void loop() {
  // 1. Adım: Potansiyometreden 0 ile 1023 arasındaki analog değeri oku
  int potValue = analogRead(POT_PIN);

  // 2. Adım: 0-1023 aralığındaki değeri 0-180 dereceye orantıla (map)
  int servoAngle = map(potValue, 0, 1023, 0, 180);

  // 3. Adım: Servo motoru hesaplanan açıya hareket ettir
  myServo.write(servoAngle);

  // 4. Adım: Seri porta anlık değerleri yazdır
  Serial.print("Potansiyometre Degeri: ");
  Serial.print(potValue);
  Serial.print("  -->  Hesaplanan Servo Acisi: ");
  Serial.print(servoAngle);
  Serial.println(" Derece");

  // Servonun mekanik olarak hedeflenen açıya ulaşması için kısa bir bekleme
  delay(15);
}
