#!/usr/bin/env python3
import os

COMPONENTS_DIR = "/Users/vahitkeskin/Documents/GitHub/Projects/bilisimhocasi/assets/components"
os.makedirs(COMPONENTS_DIR, exist_ok=True)

svgs = {
    "arduino_uno.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <linearGradient id="pcb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#008184"/>
      <stop offset="100%" stop-color="#005C5E"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E0E0E0"/>
      <stop offset="100%" stop-color="#9E9E9E"/>
    </linearGradient>
  </defs>
  <!-- Board PCB -->
  <rect x="15" y="15" width="170" height="120" rx="8" fill="url(#pcb)" stroke="#004D40" stroke-width="2"/>
  <!-- Mounting Holes -->
  <circle cx="25" cy="25" r="4" fill="#ffffff" opacity="0.8"/>
  <circle cx="175" cy="25" r="4" fill="#ffffff" opacity="0.8"/>
  <circle cx="175" cy="125" r="4" fill="#ffffff" opacity="0.8"/>
  <!-- USB Port -->
  <rect x="8" y="32" width="28" height="24" rx="2" fill="url(#metal)" stroke="#616161"/>
  <!-- DC Jack -->
  <rect x="8" y="90" width="32" height="28" rx="2" fill="#212121"/>
  <circle cx="20" cy="104" r="6" fill="#424242"/>
  <!-- ATmega328P DIP Chip -->
  <rect x="85" y="60" width="70" height="24" rx="2" fill="#1C1B1F" stroke="#333333"/>
  <circle cx="89" cy="72" r="2" fill="#666666"/>
  <!-- Pin Headers Top (Digital) -->
  <rect x="55" y="16" width="120" height="12" fill="#212121" rx="1"/>
  <g fill="#FFD54F">
    <circle cx="62" cy="22" r="1.5"/><circle cx="70" cy="22" r="1.5"/><circle cx="78" cy="22" r="1.5"/>
    <circle cx="86" cy="22" r="1.5"/><circle cx="94" cy="22" r="1.5"/><circle cx="102" cy="22" r="1.5"/>
    <circle cx="110" cy="22" r="1.5"/><circle cx="118" cy="22" r="1.5"/><circle cx="126" cy="22" r="1.5"/>
    <circle cx="134" cy="22" r="1.5"/><circle cx="142" cy="22" r="1.5"/><circle cx="150" cy="22" r="1.5"/>
    <circle cx="158" cy="22" r="1.5"/><circle cx="166" cy="22" r="1.5"/>
  </g>
  <!-- Pin Headers Bottom (Power & Analog) -->
  <rect x="65" y="122" width="105" height="12" fill="#212121" rx="1"/>
  <g fill="#FFD54F">
    <circle cx="72" cy="128" r="1.5"/><circle cx="80" cy="128" r="1.5"/><circle cx="88" cy="128" r="1.5"/>
    <circle cx="96" cy="128" r="1.5"/><circle cx="104" cy="128" r="1.5"/><circle cx="112" cy="128" r="1.5"/>
    <circle cx="120" cy="128" r="1.5"/><circle cx="128" cy="128" r="1.5"/><circle cx="136" cy="128" r="1.5"/>
    <circle cx="144" cy="128" r="1.5"/><circle cx="152" cy="128" r="1.5"/><circle cx="160" cy="128" r="1.5"/>
  </g>
  <!-- Text Label -->
  <text x="120" y="52" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ARDUINO UNO</text>
  <text x="120" y="102" fill="#80CBC4" font-family="system-ui, sans-serif" font-size="7" text-anchor="middle">ATmega328P • R3</text>
  <!-- Crystal Oscillator -->
  <rect x="65" y="66" width="12" height="6" rx="2" fill="url(#metal)"/>
  <!-- Reset Button -->
  <rect x="42" y="24" width="8" height="8" rx="1" fill="#D32F2F"/>
</svg>""",

    "breadboard.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <linearGradient id="bb-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FAFAFA"/>
      <stop offset="100%" stop-color="#ECEFF1"/>
    </linearGradient>
  </defs>
  <!-- Breadboard Body -->
  <rect x="15" y="20" width="170" height="110" rx="6" fill="url(#bb-bg)" stroke="#B0BEC5" stroke-width="2"/>
  <!-- Power Rail Lines -->
  <line x1="25" y1="28" x2="175" y2="28" stroke="#EF5350" stroke-width="2"/>
  <line x1="25" y1="36" x2="175" y2="36" stroke="#42A5F5" stroke-width="2"/>
  <line x1="25" y1="114" x2="175" y2="114" stroke="#42A5F5" stroke-width="2"/>
  <line x1="25" y1="122" x2="175" y2="122" stroke="#EF5350" stroke-width="2"/>
  <!-- Center Notch Divider -->
  <rect x="25" y="72" width="150" height="6" fill="#CFD8DC"/>
  <!-- Pin Tie Holes -->
  <g fill="#37474F">
    <!-- Top Terminal Area -->
    <circle cx="35" cy="48" r="1.5"/><circle cx="50" cy="48" r="1.5"/><circle cx="65" cy="48" r="1.5"/><circle cx="80" cy="48" r="1.5"/><circle cx="95" cy="48" r="1.5"/><circle cx="110" cy="48" r="1.5"/><circle cx="125" cy="48" r="1.5"/><circle cx="140" cy="48" r="1.5"/><circle cx="155" cy="48" r="1.5"/>
    <circle cx="35" cy="56" r="1.5"/><circle cx="50" cy="56" r="1.5"/><circle cx="65" cy="56" r="1.5"/><circle cx="80" cy="56" r="1.5"/><circle cx="95" cy="56" r="1.5"/><circle cx="110" cy="56" r="1.5"/><circle cx="125" cy="56" r="1.5"/><circle cx="140" cy="56" r="1.5"/><circle cx="155" cy="56" r="1.5"/>
    <circle cx="35" cy="64" r="1.5"/><circle cx="50" cy="64" r="1.5"/><circle cx="65" cy="64" r="1.5"/><circle cx="80" cy="64" r="1.5"/><circle cx="95" cy="64" r="1.5"/><circle cx="110" cy="64" r="1.5"/><circle cx="125" cy="64" r="1.5"/><circle cx="140" cy="64" r="1.5"/><circle cx="155" cy="64" r="1.5"/>
    <!-- Bottom Terminal Area -->
    <circle cx="35" cy="86" r="1.5"/><circle cx="50" cy="86" r="1.5"/><circle cx="65" cy="86" r="1.5"/><circle cx="80" cy="86" r="1.5"/><circle cx="95" cy="86" r="1.5"/><circle cx="110" cy="86" r="1.5"/><circle cx="125" cy="86" r="1.5"/><circle cx="140" cy="86" r="1.5"/><circle cx="155" cy="86" r="1.5"/>
    <circle cx="35" cy="94" r="1.5"/><circle cx="50" cy="94" r="1.5"/><circle cx="65" cy="94" r="1.5"/><circle cx="80" cy="94" r="1.5"/><circle cx="95" cy="94" r="1.5"/><circle cx="110" cy="94" r="1.5"/><circle cx="125" cy="94" r="1.5"/><circle cx="140" cy="94" r="1.5"/><circle cx="155" cy="94" r="1.5"/>
    <circle cx="35" cy="102" r="1.5"/><circle cx="50" cy="102" r="1.5"/><circle cx="65" cy="102" r="1.5"/><circle cx="80" cy="102" r="1.5"/><circle cx="95" cy="102" r="1.5"/><circle cx="110" cy="102" r="1.5"/><circle cx="125" cy="102" r="1.5"/><circle cx="140" cy="102" r="1.5"/><circle cx="155" cy="102" r="1.5"/>
  </g>
  <text x="100" y="77" fill="#78909C" font-family="monospace" font-size="5" text-anchor="middle">BREADBOARD 400 TIE-POINT</text>
</svg>""",

    "led_red.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <radialGradient id="glow-red" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FF8A80"/>
      <stop offset="60%" stop-color="#D50000"/>
      <stop offset="100%" stop-color="#8E0000"/>
    </radialGradient>
  </defs>
  <!-- Leads -->
  <line x1="88" y1="95" x2="88" y2="135" stroke="#9E9E9E" stroke-width="4" stroke-linecap="round"/>
  <line x1="112" y1="95" x2="112" y2="145" stroke="#BDBDBD" stroke-width="4" stroke-linecap="round"/>
  <!-- Rim -->
  <path d="M 70 95 L 130 95 A 4 4 0 0 1 130 102 L 70 102 A 4 4 0 0 1 70 95 Z" fill="#B71C1C"/>
  <!-- Dome -->
  <path d="M 75 95 C 75 40, 125 40, 125 95 Z" fill="url(#glow-red)"/>
  <!-- Highlight -->
  <ellipse cx="88" cy="62" rx="7" ry="14" fill="#ffffff" opacity="0.5" transform="rotate(-20 88 62)"/>
  <text x="100" y="24" fill="#E53935" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">5mm KIRMIZI LED</text>
</svg>""",

    "led_green.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <radialGradient id="glow-green" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#B9F6CA"/>
      <stop offset="60%" stop-color="#00C853"/>
      <stop offset="100%" stop-color="#00600F"/>
    </radialGradient>
  </defs>
  <line x1="88" y1="95" x2="88" y2="135" stroke="#9E9E9E" stroke-width="4" stroke-linecap="round"/>
  <line x1="112" y1="95" x2="112" y2="145" stroke="#BDBDBD" stroke-width="4" stroke-linecap="round"/>
  <path d="M 70 95 L 130 95 A 4 4 0 0 1 130 102 L 70 102 A 4 4 0 0 1 70 95 Z" fill="#007E33"/>
  <path d="M 75 95 C 75 40, 125 40, 125 95 Z" fill="url(#glow-green)"/>
  <ellipse cx="88" cy="62" rx="7" ry="14" fill="#ffffff" opacity="0.5" transform="rotate(-20 88 62)"/>
  <text x="100" y="24" fill="#00C853" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">5mm YEŞİL LED</text>
</svg>""",

    "led_yellow.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <radialGradient id="glow-yellow" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFFF8D"/>
      <stop offset="60%" stop-color="#FFD600"/>
      <stop offset="100%" stop-color="#F57F17"/>
    </radialGradient>
  </defs>
  <line x1="88" y1="95" x2="88" y2="135" stroke="#9E9E9E" stroke-width="4" stroke-linecap="round"/>
  <line x1="112" y1="95" x2="112" y2="145" stroke="#BDBDBD" stroke-width="4" stroke-linecap="round"/>
  <path d="M 70 95 L 130 95 A 4 4 0 0 1 130 102 L 70 102 A 4 4 0 0 1 70 95 Z" fill="#FF8F00"/>
  <path d="M 75 95 C 75 40, 125 40, 125 95 Z" fill="url(#glow-yellow)"/>
  <ellipse cx="88" cy="62" rx="7" ry="14" fill="#ffffff" opacity="0.5" transform="rotate(-20 88 62)"/>
  <text x="100" y="24" fill="#FFB300" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">5mm SARI LED</text>
</svg>""",

    "led_rgb.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <linearGradient id="rgb-rainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF5252"/>
      <stop offset="50%" stop-color="#69F0AE"/>
      <stop offset="100%" stop-color="#448AFF"/>
    </linearGradient>
  </defs>
  <!-- 4 Leads: R, Anode/Cathode, G, B -->
  <line x1="75" y1="95" x2="75" y2="140" stroke="#E57373" stroke-width="3"/>
  <line x1="90" y1="95" x2="90" y2="148" stroke="#757575" stroke-width="3.5"/>
  <line x1="108" y1="95" x2="108" y2="138" stroke="#81C784" stroke-width="3"/>
  <line x1="125" y1="95" x2="125" y2="135" stroke="#64B5F6" stroke-width="3"/>
  <path d="M 65 95 L 135 95 A 4 4 0 0 1 135 102 L 65 102 A 4 4 0 0 1 65 95 Z" fill="#9E9E9E"/>
  <path d="M 70 95 C 70 38, 130 38, 130 95 Z" fill="url(#rgb-rainbow)" opacity="0.9"/>
  <ellipse cx="85" cy="60" rx="6" ry="14" fill="#ffffff" opacity="0.6" transform="rotate(-20 85 60)"/>
  <text x="100" y="24" fill="#7C4DFF" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">RGB LED (4 Bacak)</text>
</svg>""",

    "resistor.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Leads -->
  <line x1="15" y1="75" x2="60" y2="75" stroke="#9E9E9E" stroke-width="4" stroke-linecap="round"/>
  <line x1="140" y1="75" x2="185" y2="75" stroke="#9E9E9E" stroke-width="4" stroke-linecap="round"/>
  <!-- Body -->
  <rect x="60" y="58" width="80" height="34" rx="10" fill="#EAD2AC" stroke="#C59B27" stroke-width="1.5"/>
  <!-- Color Bands (220 Ohm: Red, Red, Brown, Gold) -->
  <rect x="74" y="58" width="6" height="34" fill="#D32F2F"/>
  <rect x="88" y="58" width="6" height="34" fill="#D32F2F"/>
  <rect x="102" y="58" width="6" height="34" fill="#5D4037"/>
  <rect x="122" y="58" width="5" height="34" fill="#FFD700"/>
  <text x="100" y="35" fill="#3E2723" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">220Ω / 10kΩ DİRENÇ</text>
  <text x="100" y="118" fill="#795548" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">Akım Sınırlayıcı / Voltaj Bölücü</text>
</svg>""",

    "push_button.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Leads -->
  <line x1="55" y1="90" x2="40" y2="125" stroke="#9E9E9E" stroke-width="4"/>
  <line x1="145" y1="90" x2="160" y2="125" stroke="#9E9E9E" stroke-width="4"/>
  <!-- Base Body -->
  <rect x="55" y="45" width="90" height="60" rx="6" fill="#212121" stroke="#424242" stroke-width="2"/>
  <!-- Round Actuator -->
  <circle cx="100" cy="75" r="22" fill="#D32F2F"/>
  <circle cx="100" cy="75" r="16" fill="#F44336"/>
  <!-- Metallic corners -->
  <rect x="60" y="50" width="6" height="6" fill="#B0BEC5"/>
  <rect x="134" y="50" width="6" height="6" fill="#B0BEC5"/>
  <rect x="60" y="94" width="6" height="6" fill="#B0BEC5"/>
  <rect x="134" y="94" width="6" height="6" fill="#B0BEC5"/>
  <text x="100" y="25" fill="#D32F2F" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">PUSH BUTON (Düğme)</text>
</svg>""",

    "buzzer.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Leads -->
  <line x1="88" y1="105" x2="88" y2="140" stroke="#757575" stroke-width="4"/>
  <line x1="112" y1="105" x2="112" y2="140" stroke="#BDBDBD" stroke-width="4"/>
  <!-- Cylindrical Body -->
  <circle cx="100" cy="65" r="45" fill="#212121" stroke="#424242" stroke-width="2"/>
  <circle cx="100" cy="65" r="40" fill="#303030"/>
  <!-- Sound Hole -->
  <circle cx="100" cy="65" r="8" fill="#121212"/>
  <!-- Polarity (+) marker -->
  <text x="125" y="55" fill="#EF5350" font-family="sans-serif" font-size="14" font-weight="bold">+</text>
  <text x="100" y="130" fill="#424242" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">PİEZO BUZZER</text>
</svg>""",

    "ldr_sensor.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Leads -->
  <line x1="90" y1="90" x2="90" y2="135" stroke="#9E9E9E" stroke-width="4"/>
  <line x1="110" y1="90" x2="110" y2="135" stroke="#9E9E9E" stroke-width="4"/>
  <!-- Ceramic Body -->
  <circle cx="100" cy="60" r="30" fill="#FFE0B2" stroke="#FFB74D" stroke-width="2"/>
  <!-- Cadmium Sulfide Track (Serpentine Pattern) -->
  <path d="M 85 45 Q 115 45 115 52 Q 85 52 85 60 Q 115 60 115 68 Q 85 68 85 75" fill="none" stroke="#D84315" stroke-width="3" stroke-linecap="round"/>
  <text x="100" y="22" fill="#E65100" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">LDR (Foto Direnç)</text>
</svg>""",

    "servo_sg90.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <defs>
    <linearGradient id="servo-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E88E5"/>
      <stop offset="100%" stop-color="#0D47A1"/>
    </linearGradient>
  </defs>
  <!-- Cables (Orange, Red, Brown) -->
  <path d="M 50 110 Q 30 130 15 135" stroke="#FF9800" stroke-width="3" fill="none"/>
  <path d="M 50 114 Q 30 134 15 139" stroke="#F44336" stroke-width="3" fill="none"/>
  <path d="M 50 118 Q 30 138 15 143" stroke="#795548" stroke-width="3" fill="none"/>
  <!-- Main Blue Body -->
  <rect x="50" y="45" width="100" height="70" rx="5" fill="url(#servo-blue)"/>
  <!-- Mounting Flanges -->
  <rect x="35" y="65" width="15" height="15" fill="#1565C0"/>
  <rect x="150" y="65" width="15" height="15" fill="#1565C0"/>
  <circle cx="42" cy="72" r="3" fill="#ffffff"/>
  <circle cx="158" cy="72" r="3" fill="#ffffff"/>
  <!-- Gear Shaft Top -->
  <rect x="120" y="32" width="22" height="15" rx="2" fill="#E0E0E0"/>
  <circle cx="131" cy="28" r="14" fill="#ffffff" stroke="#BDBDBD" stroke-width="2"/>
  <!-- Servo Horn (White Arm) -->
  <path d="M 131 28 L 180 20 A 8 8 0 0 1 180 36 Z" fill="#EEEEEE" stroke="#9E9E9E"/>
  <circle cx="150" cy="26" r="2" fill="#424242"/>
  <circle cx="165" cy="27" r="2" fill="#424242"/>
  <circle cx="178" cy="28" r="2" fill="#424242"/>
  <text x="100" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">SG90 9g SERVO</text>
</svg>""",

    "potentiometer.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Leads -->
  <line x1="75" y1="105" x2="60" y2="135" stroke="#9E9E9E" stroke-width="4"/>
  <line x1="100" y1="105" x2="100" y2="140" stroke="#9E9E9E" stroke-width="4"/>
  <line x1="125" y1="105" x2="140" y2="135" stroke="#9E9E9E" stroke-width="4"/>
  <!-- Body -->
  <circle cx="100" cy="65" r="40" fill="#1B5E20" stroke="#004D40" stroke-width="2"/>
  <!-- Metallic Collar -->
  <circle cx="100" cy="65" r="22" fill="#B0BEC5"/>
  <!-- D-Shaft / Knob -->
  <circle cx="100" cy="65" r="14" fill="#CFD8DC"/>
  <line x1="100" y1="51" x2="100" y2="65" stroke="#37474F" stroke-width="3"/>
  <text x="100" y="20" fill="#2E7D32" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">10kΩ POTANSİYOMETRE</text>
</svg>""",

    "ultrasonic_hcsr04.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Blue PCB -->
  <rect x="25" y="35" width="150" height="75" rx="5" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
  <!-- Left Transducer (Transmitter T) -->
  <circle cx="65" cy="70" r="26" fill="#B0BEC5" stroke="#78909C" stroke-width="3"/>
  <circle cx="65" cy="70" r="18" fill="#37474F"/>
  <text x="65" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">T</text>
  <!-- Right Transducer (Receiver R) -->
  <circle cx="135" cy="70" r="26" fill="#B0BEC5" stroke="#78909C" stroke-width="3"/>
  <circle cx="135" cy="70" r="18" fill="#37474F"/>
  <text x="135" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">R</text>
  <!-- 4-pin Header at bottom -->
  <rect x="85" y="105" width="30" height="10" fill="#212121"/>
  <g stroke="#FFD54F" stroke-width="2.5">
    <line x1="90" y1="115" x2="90" y2="135"/>
    <line x1="97" y1="115" x2="97" y2="135"/>
    <line x1="103" y1="115" x2="103" y2="135"/>
    <line x1="110" y1="115" x2="110" y2="135"/>
  </g>
  <!-- Crystal Oscillator -->
  <rect x="94" y="55" width="12" height="6" rx="2" fill="#CFD8DC"/>
  <text x="100" y="24" fill="#1976D2" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">HC-SR04 ULTRASONİK</text>
</svg>""",

    "lcd_1602_i2c.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- PCB Frame -->
  <rect x="15" y="25" width="170" height="95" rx="4" fill="#2E7D32" stroke="#1B5E20" stroke-width="2"/>
  <!-- Bezel -->
  <rect x="25" y="35" width="150" height="65" rx="3" fill="#212121"/>
  <!-- LCD Screen Area (Blue Backlight) -->
  <rect x="35" y="45" width="130" height="45" rx="2" fill="#0277BD"/>
  <!-- Character Simulation Matrix Lines -->
  <text x="42" y="62" fill="#ffffff" font-family="monospace" font-size="10" font-weight="bold">Bilisim Atolyesi</text>
  <text x="42" y="78" fill="#81D4FA" font-family="monospace" font-size="10">Sicaklik: 24.5C</text>
  <!-- I2C Backpack on rear simulation pins -->
  <rect x="175" y="50" width="10" height="30" fill="#1B1B1B"/>
  <g fill="#FFD54F">
    <circle cx="180" cy="56" r="1.5"/>
    <circle cx="180" cy="64" r="1.5"/>
    <circle cx="180" cy="72" r="1.5"/>
    <circle cx="180" cy="78" r="1.5"/>
  </g>
  <text x="100" y="135" fill="#388E3C" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">16x2 I2C KARAKTER LCD</text>
</svg>""",

    "dht11_sensor.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Blue Ventilated Case -->
  <rect x="65" y="30" width="70" height="75" rx="6" fill="#0288D1" stroke="#01579B" stroke-width="2"/>
  <!-- Ventilation Grids -->
  <g fill="#01579B">
    <rect x="75" y="42" width="10" height="8" rx="1"/>
    <rect x="95" y="42" width="10" height="8" rx="1"/>
    <rect x="115" y="42" width="10" height="8" rx="1"/>
    <rect x="75" y="58" width="10" height="8" rx="1"/>
    <rect x="95" y="58" width="10" height="8" rx="1"/>
    <rect x="115" y="58" width="10" height="8" rx="1"/>
    <rect x="75" y="74" width="10" height="8" rx="1"/>
    <rect x="95" y="74" width="10" height="8" rx="1"/>
    <rect x="115" y="74" width="10" height="8" rx="1"/>
  </g>
  <!-- Pins (VCC, DATA, NC/GND) -->
  <g stroke="#9E9E9E" stroke-width="3.5">
    <line x1="80" y1="105" x2="80" y2="135"/>
    <line x1="93" y1="105" x2="93" y2="135"/>
    <line x1="107" y1="105" x2="107" y2="135"/>
    <line x1="120" y1="105" x2="120" y2="135"/>
  </g>
  <text x="100" y="20" fill="#0277BD" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">DHT11 SICAKLIK &amp; NEM</text>
</svg>""",

    "pir_sensor.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Green PCB -->
  <rect x="35" y="50" width="130" height="60" rx="4" fill="#2E7D32" stroke="#1B5E20" stroke-width="2"/>
  <!-- White Dome (Fresnel Lens) -->
  <circle cx="100" cy="70" r="34" fill="#FAFAFA" stroke="#E0E0E0" stroke-width="2"/>
  <!-- Fresnel Ring Segment Lines -->
  <circle cx="100" cy="70" r="24" fill="none" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,2"/>
  <circle cx="100" cy="70" r="14" fill="none" stroke="#BDBDBD" stroke-width="1.5"/>
  <!-- Potentiometers on board -->
  <circle cx="50" cy="65" r="7" fill="#FFB300"/>
  <circle cx="50" cy="85" r="7" fill="#FFB300"/>
  <!-- 3-Pin Header -->
  <g stroke="#FFD54F" stroke-width="3">
    <line x1="140" y1="110" x2="140" y2="135"/>
    <line x1="148" y1="110" x2="148" y2="135"/>
    <line x1="156" y1="110" x2="156" y2="135"/>
  </g>
  <text x="100" y="25" fill="#388E3C" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">HC-SR501 PIR HAREKET</text>
</svg>""",

    "joystick.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Black PCB Base -->
  <rect x="40" y="35" width="120" height="85" rx="6" fill="#212121" stroke="#424242" stroke-width="2"/>
  <!-- Outer Ring -->
  <circle cx="100" cy="75" r="32" fill="#37474F"/>
  <!-- Thumb Stick Hat -->
  <circle cx="100" cy="75" r="22" fill="#263238" stroke="#455A64" stroke-width="3"/>
  <circle cx="100" cy="75" r="14" fill="#1C1B1F"/>
  <!-- 5-Pin Header -->
  <g stroke="#FFD54F" stroke-width="2.5">
    <line x1="160" y1="50" x2="185" y2="50"/>
    <line x1="160" y1="62" x2="185" y2="62"/>
    <line x1="160" y1="75" x2="185" y2="75"/>
    <line x1="160" y1="88" x2="185" y2="88"/>
    <line x1="160" y1="100" x2="185" y2="100"/>
  </g>
  <text x="100" y="22" fill="#607D8B" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">2 EKSENLİ JOYSTICK</text>
</svg>""",

    "rfid_rc522.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Blue PCB -->
  <rect x="25" y="20" width="150" height="110" rx="6" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
  <!-- PCB Antenna Spiral Tracks -->
  <rect x="35" y="30" width="85" height="90" rx="4" fill="none" stroke="#FFD54F" stroke-width="2"/>
  <rect x="40" y="35" width="75" height="80" rx="3" fill="none" stroke="#FFD54F" stroke-width="1.5"/>
  <!-- RC522 Chip -->
  <rect x="135" y="55" width="28" height="28" rx="2" fill="#212121"/>
  <!-- 8-Pin Header -->
  <g fill="#FFD54F">
    <circle cx="158" cy="30" r="1.5"/><circle cx="158" cy="36" r="1.5"/>
    <circle cx="158" cy="42" r="1.5"/><circle cx="158" cy="48" r="1.5"/>
    <circle cx="158" cy="95" r="1.5"/><circle cx="158" cy="101" r="1.5"/>
    <circle cx="158" cy="107" r="1.5"/><circle cx="158" cy="113" r="1.5"/>
  </g>
  <text x="77" y="78" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">RFID 13.56 MHz</text>
  <text x="100" y="142" fill="#64B5F6" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">RC522 SPI Modülü</text>
</svg>""",

    "bluetooth_hc05.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Base Board Blue -->
  <rect x="35" y="30" width="130" height="90" rx="5" fill="#1976D2" stroke="#0D47A1" stroke-width="2"/>
  <!-- Daughterboard Module with antenna -->
  <rect x="45" y="40" width="100" height="55" rx="3" fill="#0D47A1"/>
  <!-- Meander Line Antenna (Gold on PCB) -->
  <path d="M 50 48 L 70 48 L 70 52 L 50 52 L 50 56 L 70 56" fill="none" stroke="#FFD54F" stroke-width="2"/>
  <!-- CSR Main Chip -->
  <rect x="85" y="50" width="25" height="25" rx="2" fill="#212121"/>
  <!-- Status LED -->
  <circle cx="130" cy="48" r="3" fill="#D32F2F"/>
  <!-- 6-Pin Bottom Header -->
  <g stroke="#FFD54F" stroke-width="3">
    <line x1="55" y1="120" x2="55" y2="140"/>
    <line x1="72" y1="120" x2="72" y2="140"/>
    <line x1="90" y1="120" x2="90" y2="140"/>
    <line x1="108" y1="120" x2="108" y2="140"/>
    <line x1="125" y1="120" x2="125" y2="140"/>
    <line x1="142" y1="120" x2="142" y2="140"/>
  </g>
  <text x="100" y="20" fill="#1976D2" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">HC-05 BLUETOOTH SPP</text>
</svg>""",

    "relay_module.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Blue PCB -->
  <rect x="25" y="25" width="150" height="100" rx="6" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
  <!-- Songle Blue Relay Cube -->
  <rect x="40" y="38" width="75" height="75" rx="4" fill="#0288D1" stroke="#01579B" stroke-width="1.5"/>
  <text x="77" y="70" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">5V RELAY</text>
  <text x="77" y="84" fill="#E1F5FE" font-family="sans-serif" font-size="7" text-anchor="middle">10A 250VAC</text>
  <!-- Screw Terminal Block (High Voltage) -->
  <rect x="125" y="45" width="35" height="60" rx="3" fill="#2E7D32"/>
  <circle cx="142" cy="58" r="4" fill="#CFD8DC"/>
  <circle cx="142" cy="75" r="4" fill="#CFD8DC"/>
  <circle cx="142" cy="92" r="4" fill="#CFD8DC"/>
  <!-- Input Pins Header -->
  <g fill="#FFD54F">
    <circle cx="32" cy="55" r="2"/>
    <circle cx="32" cy="75" r="2"/>
    <circle cx="32" cy="95" r="2"/>
  </g>
  <text x="100" y="140" fill="#0288D1" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">5V 1-KANAL RÖLE MODÜLÜ</text>
</svg>""",

    "jumper_wires.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%">
  <!-- Red Wire -->
  <path d="M 20 50 Q 100 20 180 50" fill="none" stroke="#E53935" stroke-width="5" stroke-linecap="round"/>
  <!-- Black Wire -->
  <path d="M 20 75 Q 100 45 180 75" fill="none" stroke="#212121" stroke-width="5" stroke-linecap="round"/>
  <!-- Blue Wire -->
  <path d="M 20 100 Q 100 70 180 100" fill="none" stroke="#1E88E5" stroke-width="5" stroke-linecap="round"/>
  <!-- Male Pin Heads -->
  <rect x="15" y="46" width="12" height="8" rx="2" fill="#424242"/>
  <rect x="173" y="46" width="12" height="8" rx="2" fill="#424242"/>
  <line x1="8" y1="50" x2="15" y2="50" stroke="#FFD54F" stroke-width="3"/>
  <line x1="185" y1="50" x2="192" y2="50" stroke="#FFD54F" stroke-width="3"/>

  <rect x="15" y="71" width="12" height="8" rx="2" fill="#424242"/>
  <rect x="173" y="71" width="12" height="8" rx="2" fill="#424242"/>
  <line x1="8" y1="75" x2="15" y2="75" stroke="#FFD54F" stroke-width="3"/>
  <line x1="185" y1="75" x2="192" y2="75" stroke="#FFD54F" stroke-width="3"/>

  <rect x="15" y="96" width="12" height="8" rx="2" fill="#424242"/>
  <rect x="173" y="96" width="12" height="8" rx="2" fill="#424242"/>
  <line x1="8" y1="100" x2="15" y2="100" stroke="#FFD54F" stroke-width="3"/>
  <line x1="185" y1="100" x2="192" y2="100" stroke="#FFD54F" stroke-width="3"/>

  <text x="100" y="135" fill="#546E7A" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">JUMPER BAĞLANTI KABLOLARI</text>
</svg>"""
}

for name, content in svgs.items():
    filepath = os.path.join(COMPONENTS_DIR, name)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Olusturuldu: {name}")

print(f"Toplam {len(svgs)} bilesen SVG dosyasi basariyla olusturuldu.")
