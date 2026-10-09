/* ==============================================================================
 * PROJE ADI: 10. Sınıf - RGB LED ve Joystick ile Renk/Yön Mikseri
 * HEDEF SEVİYE: 10. Sınıf (15-16 Yaş / Lise - Oyun Kontrolcüleri & PWM Renk Teorisi)
 * 
 * PROJENİN AMACI VE ÇALIŞMA MANTIĞI:
 * Bu projede öğrenciler, endüstriyel kumandalarda ve oyun kollarında (gamepad)
 * kullanılan iki eksenli analog joystick mekanizmasını ve ışık tayfı renk teorisini
 * (RGB Eklemeli Renk Karışımı - Additive Color Model) öğrenirler. Mikrodenetleyicinin
 * Donanımsal Pals Genişlik Modülasyonu (PWM) kanalları kullanılarak 16 milyon renk
 * kombinasyonunun temeli atılır.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. Joystick, birbirine dik iki potansiyometreden oluşur (X ve Y eksenleri).
 * 2. X ekseni (A0) okuması Kırmızı (Red) kanalının yoğunluğunu belirler.
 * 3. Y ekseni (A1) okuması Mavi (Blue) kanalının yoğunluğunu belirler.
 * 4. İki eksenin vektörel bileşkesi veya ortalaması Yeşil (Green) kanalını besler.
 * 5. Okunan 0-1023 analog veriler "map()" ile 8-bitlik PWM aralığına (0-255) dönüştürülür.
 * 6. "analogWrite()" ile LED bacaklarına gerilim darbesi gönderilerek ışık karıştırılır.
 * 7. Joystick butonuna (SW - Pin 2) tıklandığında anında tam güç BEYAZ IŞIK modu aktif edilir.
 * 
 * GEREKLİ DEVRE ELEMANLARI LİSTESİ:
 * - 1 x Arduino Uno R3
 * - 1 x Breadboard
 * - 1 x 2 Eksenli Analog Joystick Modülü (KY-023)
 * - 1 x RGB LED (4 Bacaklı - Ortak Katot)
 * - 3 x 220 Ohm Direnç (R, G, B bacakları için)
 * - 9 x Erkek-Erkek / Erkek-Dişi Jumper Kablo
 * - 1 x USB Tip-B Kablo
 * 
 * DETAYLI PİN BAĞLANTI TABLOSU:
 * -----------------------------------------------------------------------------
 * Arduino Pini       | Bileşen Bacağı          | Açıklama / Not
 * -----------------------------------------------------------------------------
 * 5V (Güç)           | Joystick VCC            | Joystick beslemesi
 * GND (Toprak)       | Joystick GND & RGB Katot| Ortak toprak hattı
 * A0 (Analog)        | Joystick VRx            | X ekseni yatay hareket (0-1023)
 * A1 (Analog)        | Joystick VRy            | Y ekseni dikey hareket (0-1023)
 * Pin 2 (Dijital)    | Joystick SW (Buton)     | Dahili INPUT_PULLUP ile buton
 * Pin 9 (PWM ~)      | 220Ω -> RGB Kırmızı (R) | Kırmızı renk PWM kontrolü (0-255)
 * Pin 10 (PWM ~)     | 220Ω -> RGB Yeşil (G)   | Yeşil renk PWM kontrolü (0-255)
 * Pin 11 (PWM ~)     | 220Ω -> RGB Mavi (B)    | Mavi renk PWM kontrolü (0-255)
 * -----------------------------------------------------------------------------
 * 
 * GEREKLİ KÜTÜPHANELER:
 * - Harici kütüphane gerektirmez.
 * ============================================================================== */

// Pin Tanımlamaları
const int JOY_X_PIN  = A0; // Joystick X ekseni (Analog)
const int JOY_Y_PIN  = A1; // Joystick Y ekseni (Analog)
const int JOY_SW_PIN = 2;  // Joystick basma butonu (Dijital)

const int RED_PIN    = 9;  // Kırmızı LED (PWM Pini)
const int GREEN_PIN  = 10; // Yeşil LED (PWM Pini)
const int BLUE_PIN   = 11; // Mavi LED (PWM Pini)

void setup() {
  // RGB LED pinlerini çıkış yapıyoruz
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);

  // Joystick butonunu dahili dirençle dinliyoruz
  pinMode(JOY_SW_PIN, INPUT_PULLUP);

  // Seri iletişimi başlatıyoruz
  Serial.begin(9600);
  Serial.println("=========================================");
  Serial.println("Joystick RGB Renk Mikseri Baslatildi");
  Serial.println("=========================================");
}

// Renk uygulama yardımcı fonksiyonu (Ortak Katot LED için 0=Sönük, 255=Maksimum Parlak)
void setColor(int redVal, int greenVal, int blueVal) {
  analogWrite(RED_PIN, redVal);
  analogWrite(GREEN_PIN, greenVal);
  analogWrite(BLUE_PIN, blueVal);
}

void loop() {
  // Joystick analog verilerini oku (0 - 1023)
  int xVal = analogRead(JOY_X_PIN);
  int yVal = analogRead(JOY_Y_PIN);
  int btnState = digitalRead(JOY_SW_PIN);

  // Butona basılmışsa (SW == LOW): Özel Flaşör / Beyaz Işık Modu
  if (btnState == LOW) {
    setColor(255, 255, 255); // Tam güç Beyaz Işık
    Serial.println("[MOD] Joystick Butonuna Basildi -> Tam Güç BEYAZ Renk!");
    delay(100);
    return;
  }

  // Analog okumaları 8-bit PWM parlaklığına (0 - 255) dönüştür
  int redBrightness   = map(xVal, 0, 1023, 0, 255);
  int blueBrightness  = map(yVal, 0, 1023, 0, 255);
  // Yeşil kanalı iki eksenin dengeli harmanlanmasıyla elde edilir
  int greenBrightness = map((xVal + yVal) / 2, 0, 1023, 255, 0);

  // LED'lere yeni renk voltajlarını uygula
  setColor(redBrightness, greenBrightness, blueBrightness);

  // Değerleri seri porttan gözlemle
  Serial.print("X: ");
  Serial.print(xVal);
  Serial.print(" | Y: ");
  Serial.print(yVal);
  Serial.print("  -->  RGB=(");
  Serial.print(redBrightness);
  Serial.print(", ");
  Serial.print(greenBrightness);
  Serial.print(", ");
  Serial.print(blueBrightness);
  Serial.println(")");

  delay(30); // Akıcı renk geçişi için küçük gecikme
}
