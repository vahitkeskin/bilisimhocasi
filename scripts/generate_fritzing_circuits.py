#!/usr/bin/env python3
import os
import subprocess
import html

def xml_esc(s):
    if not isinstance(s, str):
        return "" if s is None else str(s)
    return html.escape(s)

BASE_DIR = "/Users/vahitkeskin/Documents/GitHub/Projects/bilisimhocasi"
ARDUINO_DIR = os.path.join(BASE_DIR, "ArduinoProjects")
ASSETS_CIRCUITS_DIR = os.path.join(BASE_DIR, "assets/circuits")
os.makedirs(ASSETS_CIRCUITS_DIR, exist_ok=True)

# Common SVG Defs
SVG_DEFS = """
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#232736" stroke-width="0.75"/>
    </pattern>
    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#32384A"/>
    </pattern>
    <linearGradient id="ard-pcb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#008D91"/>
      <stop offset="50%" stop-color="#006C6F"/>
      <stop offset="100%" stop-color="#004D50"/>
    </linearGradient>
    <linearGradient id="metal-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#CFD8DC"/>
      <stop offset="100%" stop-color="#90A4AE"/>
    </linearGradient>
    <linearGradient id="bb-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#ECEFF1"/>
    </linearGradient>
    <radialGradient id="glow-red" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FF8A80"/><stop offset="70%" stop-color="#D50000"/><stop offset="100%" stop-color="#8E0000"/>
    </radialGradient>
    <radialGradient id="glow-green" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#B9F6CA"/><stop offset="70%" stop-color="#00C853"/><stop offset="100%" stop-color="#00600F"/>
    </radialGradient>
    <radialGradient id="glow-yellow" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFFF8D"/><stop offset="70%" stop-color="#FFD600"/><stop offset="100%" stop-color="#FF6F00"/>
    </radialGradient>
    <radialGradient id="glow-white" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF"/><stop offset="70%" stop-color="#E0F7FA"/><stop offset="100%" stop-color="#80DEEA"/>
    </radialGradient>
    <linearGradient id="rainbow-rgb" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF5252"/><stop offset="50%" stop-color="#69F0AE"/><stop offset="100%" stop-color="#448AFF"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="115%" height="115%">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>
"""

def draw_header(title, grade_label, level_badge):
    t_esc = xml_esc(title)
    g_esc = xml_esc(grade_label)
    l_esc = xml_esc(level_badge)
    return f"""
  <rect width="1060" height="720" fill="#141620"/>
  <rect width="1060" height="720" fill="url(#grid)"/>
  <rect width="1060" height="720" fill="url(#dots)"/>

  <!-- Top Banner -->
  <rect x="0" y="0" width="1060" height="66" fill="#1A1C28" stroke="#2E3346" stroke-width="1"/>
  <rect x="0" y="64" width="1060" height="2" fill="#00979D"/>
  
  <g transform="translate(25, 20)">
    <rect x="0" y="0" width="34" height="28" rx="6" fill="#00979D"/>
    <text x="17" y="19" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle">∞</text>
    <text x="44" y="14" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="15">UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ</text>
    <text x="44" y="27" fill="#00BCD4" font-family="system-ui, sans-serif" font-weight="600" font-size="10.5">BİLİŞİM TEKNOLOJİLERİ VE ROBOTİK KODLAMA ATÖLYESİ</text>
  </g>

  <g transform="translate(680, 16)">
    <rect x="0" y="0" width="160" height="34" rx="8" fill="#222634" stroke="#00979D" stroke-width="1"/>
    <text x="80" y="22" fill="#E0F7FA" font-family="system-ui, sans-serif" font-weight="700" font-size="11.5" text-anchor="middle">{g_esc}</text>
    <rect x="170" y="0" width="180" height="34" rx="8" fill="#00979D"/>
    <text x="260" y="22" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="11.5" text-anchor="middle">FRITZING SİMÜLASYONU</text>
  </g>

  <!-- Project Title Sub-bar -->
  <rect x="25" y="78" width="1010" height="40" rx="8" fill="#1E2230" stroke="#2C3244" stroke-width="1"/>
  <circle cx="44" cy="98" r="5" fill="#00E676"/>
  <text x="58" y="103" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="14.5">{t_esc}</text>
  <rect x="880" y="85" width="140" height="26" rx="6" fill="rgba(0,151,157,0.18)" stroke="#00979D" stroke-width="1"/>
  <text x="950" y="102" fill="#4DD0E1" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">{l_esc}</text>
"""

def draw_arduino(ax=55, ay=140):
    return f"""
  <!-- ARDUINO UNO R3 -->
  <g id="arduino-uno" filter="url(#shadow)">
    <path d="M {ax+15} {ay} L {ax+310} {ay} A 10 10 0 0 1 {ax+320} {ay+10} L {ax+320} {ay+230} A 10 10 0 0 1 {ax+310} {ay+240} L {ax+15} {ay+240} A 10 10 0 0 1 {ax+5} {ay+230} L {ax+5} {ay+10} A 10 10 0 0 1 {ax+15} {ay} Z" fill="url(#ard-pcb)" stroke="#00383A" stroke-width="2.5"/>
    <circle cx="{ax+22}" cy="{ay+18}" r="5" fill="#13151D" stroke="#004D50" stroke-width="2"/>
    <circle cx="{ax+305}" cy="{ay+20}" r="5" fill="#13151D" stroke="#004D50" stroke-width="2"/>
    <circle cx="{ax+305}" cy="{ay+225}" r="5" fill="#13151D" stroke="#004D50" stroke-width="2"/>

    <!-- USB Port -->
    <rect x="{ax-10}" y="{ay+30}" width="42" height="34" rx="3" fill="url(#metal-grad)" stroke="#546E7A" stroke-width="1.5"/>
    <line x1="{ax-10}" y1="{ay+47}" x2="{ax+32}" y2="{ay+47}" stroke="#90A4AE" stroke-width="1"/>
    
    <!-- DC Jack -->
    <rect x="{ax-10}" y="{ay+160}" width="48" height="42" rx="3" fill="#1E222A" stroke="#37474F" stroke-width="2"/>
    <circle cx="{ax+10}" cy="{ay+181}" r="9" fill="#2E3440" stroke="#4C566A" stroke-width="2"/>
    <circle cx="{ax+10}" cy="{ay+181}" r="4" fill="#0E1116"/>

    <!-- ATmega328P DIP IC -->
    <rect x="{ax+125}" y="{ay+100}" width="115" height="36" rx="3" fill="#1C1E24" stroke="#2E3440" stroke-width="2"/>
    <circle cx="{ax+133}" cy="{ay+118}" r="3" fill="#3B4252"/>
    <text x="{ax+182}" y="{ay+122}" fill="#ECEFF4" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">ATMEGA328P-PU</text>

    <!-- 16MHz Crystal -->
    <rect x="{ax+88}" y="{ay+108}" width="20" height="10" rx="3" fill="url(#metal-grad)" stroke="#78909C"/>
    <text x="{ax+98}" y="{ay+116}" fill="#37474F" font-family="monospace" font-size="6" text-anchor="middle">16.000</text>

    <!-- Reset Button -->
    <rect x="{ax+52}" y="{ay+15}" width="16" height="16" rx="3" fill="#D32F2F" stroke="#B71C1C" stroke-width="1"/>
    <circle cx="{ax+60}" cy="{ay+23}" r="4" fill="#F44336"/>

    <!-- Silk Branding -->
    <text x="{ax+185}" y="{ay+62}" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="900" font-size="16" letter-spacing="0.5">ARDUINO</text>
    <text x="{ax+265}" y="{ay+62}" fill="#80DEEA" font-family="system-ui, sans-serif" font-weight="700" font-size="11">UNO</text>
    <text x="{ax+185}" y="{ay+77}" fill="#80CBC4" font-family="system-ui, sans-serif" font-weight="600" font-size="8">ATmega328P • R3</text>

    <!-- TOP HEADERS -->
    <rect x="{ax+110}" y="{ay+5}" width="195" height="18" fill="#1C1E24" stroke="#2C3244" stroke-width="1.5" rx="2"/>
    <g fill="#FFD54F" stroke="#212121" stroke-width="0.5">
      {"".join([f'<circle cx="{ax+120 + i*11.6}" cy="{ay+14}" r="2.2"/>' for i in range(16)])}
    </g>
    <g fill="#ECEFF4" font-family="monospace" font-size="7" font-weight="bold">
      <text x="{ax+120}" y="{ay+32}">SCL</text>
      <text x="{ax+132}" y="{ay+32}">SDA</text>
      <text x="{ax+144}" y="{ay+32}">ARF</text>
      <text x="{ax+155}" y="{ay+32}">GND</text>
      <text x="{ax+167}" y="{ay+32}">13</text>
      <text x="{ax+179}" y="{ay+32}">12</text>
      <text x="{ax+190}" y="{ay+32}">~11</text>
      <text x="{ax+202}" y="{ay+32}">~10</text>
      <text x="{ax+213}" y="{ay+32}">~9</text>
      <text x="{ax+225}" y="{ay+32}">8</text>
      <text x="{ax+237}" y="{ay+32}">7</text>
      <text x="{ax+249}" y="{ay+32}">~6</text>
      <text x="{ax+260}" y="{ay+32}">~5</text>
      <text x="{ax+272}" y="{ay+32}">4</text>
      <text x="{ax+284}" y="{ay+32}">~3</text>
      <text x="{ax+295}" y="{ay+32}">2</text>
    </g>

    <!-- BOTTOM HEADERS -->
    <rect x="{ax+125}" y="{ay+217}" width="95" height="18" fill="#1C1E24" stroke="#2C3244" stroke-width="1.5" rx="2"/>
    <g fill="#FFD54F" stroke="#212121" stroke-width="0.5">
      {"".join([f'<circle cx="{ax+133 + i*11.2}" cy="{ay+226}" r="2.2"/>' for i in range(8)])}
    </g>
    <rect x="{ax+235}" y="{ay+217}" width="70" height="18" fill="#1C1E24" stroke="#2C3244" stroke-width="1.5" rx="2"/>
    <g fill="#FFD54F" stroke="#212121" stroke-width="0.5">
      {"".join([f'<circle cx="{ax+242 + i*11.2}" cy="{ay+226}" r="2.2"/>' for i in range(6)])}
    </g>
    <g fill="#ECEFF4" font-family="monospace" font-size="7" font-weight="bold">
      <text x="{ax+133}" y="{ay+210}">IOREF</text>
      <text x="{ax+144}" y="{ay+210}">RST</text>
      <text x="{ax+155}" y="{ay+210}">3.3V</text>
      <text x="{ax+167}" y="{ay+210}">5V</text>
      <text x="{ax+178}" y="{ay+210}">GND</text>
      <text x="{ax+189}" y="{ay+210}">GND</text>
      <text x="{ax+200}" y="{ay+210}">VIN</text>

      <text x="{ax+242}" y="{ay+210}">A0</text>
      <text x="{ax+253}" y="{ay+210}">A1</text>
      <text x="{ax+264}" y="{ay+210}">A2</text>
      <text x="{ax+275}" y="{ay+210}">A3</text>
      <text x="{ax+286}" y="{ay+210}">A4</text>
      <text x="{ax+297}" y="{ay+210}">A5</text>
    </g>
  </g>
"""

def draw_breadboard(bx=430, by=135, bw=590, bh=330):
    holes = ""
    for c in range(26):
        cx = bx + 45 + c * 20
        # Power rails top
        holes += f'<circle cx="{cx}" cy="{by+26}" r="2.2" fill="#37474F"/>'
        holes += f'<circle cx="{cx}" cy="{by+42}" r="2.2" fill="#37474F"/>'
        # A-E rows
        for r in range(5):
            holes += f'<circle cx="{cx}" cy="{by+75 + r*15}" r="2.2" fill="#37474F"/>'
        # F-J rows
        for r in range(5):
            holes += f'<circle cx="{cx}" cy="{by+185 + r*15}" r="2.2" fill="#37474F"/>'
        # Power rails bottom
        holes += f'<circle cx="{cx}" cy="{by+275}" r="2.2" fill="#37474F"/>'
        holes += f'<circle cx="{cx}" cy="{by+291}" r="2.2" fill="#37474F"/>'

    return f"""
  <g id="breadboard" filter="url(#shadow)">
    <rect x="{bx}" y="{by}" width="{bw}" height="{bh}" rx="12" fill="url(#bb-body)" stroke="#B0BEC5" stroke-width="2.5"/>
    <line x1="{bx+35}" y1="{by+18}" x2="{bx+bw-35}" y2="{by+18}" stroke="#EF5350" stroke-width="2.5"/>
    <text x="{bx+18}" y="{by+22}" fill="#EF5350" font-family="sans-serif" font-size="14" font-weight="bold">+</text>
    <line x1="{bx+35}" y1="{by+50}" x2="{bx+bw-35}" y2="{by+50}" stroke="#1E88E5" stroke-width="2.5"/>
    <text x="{bx+20}" y="{by+54}" fill="#1E88E5" font-family="sans-serif" font-size="16" font-weight="bold">-</text>

    <line x1="{bx+35}" y1="{by+267}" x2="{bx+bw-35}" y2="{by+267}" stroke="#1E88E5" stroke-width="2.5"/>
    <text x="{bx+20}" y="{by+271}" fill="#1E88E5" font-family="sans-serif" font-size="16" font-weight="bold">-</text>
    <line x1="{bx+35}" y1="{by+299}" x2="{bx+bw-35}" y2="{by+299}" stroke="#EF5350" stroke-width="2.5"/>
    <text x="{bx+18}" y="{by+303}" fill="#EF5350" font-family="sans-serif" font-size="14" font-weight="bold">+</text>

    <rect x="{bx+30}" y="{by+155}" width="{bw-60}" height="14" fill="#CFD8DC" rx="2"/>
    <text x="{bx+bw/2}" y="{by+165}" fill="#78909C" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">400 TIE-POINT SOLDERLESS BREADBOARD</text>
    {holes}
  </g>
"""

def draw_wire(x1, y1, x2, y2, color, curve_y=None, width=4):
    if curve_y is None:
        curve_y = min(y1, y2) - 40
    cx1 = x1 + (x2 - x1) * 0.25
    cx2 = x1 + (x2 - x1) * 0.75
    return f"""
    <path d="M {x1} {y1} C {cx1} {curve_y}, {cx2} {curve_y}, {x2} {y2}" fill="none" stroke="#000000" stroke-width="{width+2}" opacity="0.35" stroke-linecap="round"/>
    <path d="M {x1} {y1} C {cx1} {curve_y}, {cx2} {curve_y}, {x2} {y2}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>
    <circle cx="{x1}" cy="{y1}" r="3.5" fill="#FFE082" stroke="#212121" stroke-width="1.5"/>
    <circle cx="{x2}" cy="{y2}" r="3.5" fill="#FFE082" stroke="#212121" stroke-width="1.5"/>
"""

def draw_callout(x, y, text, color="#00E5FF", text_color="#101216"):
    t_esc = xml_esc(text)
    w = len(text) * 7.5 + 16
    return f"""
    <g transform="translate({x - w/2}, {y - 12})">
      <rect x="0" y="0" width="{w}" height="24" rx="6" fill="{color}" filter="url(#shadow)"/>
      <text x="{w/2}" y="16" fill="{text_color}" font-family="system-ui, sans-serif" font-weight="800" font-size="11" text-anchor="middle">{t_esc}</text>
    </g>
"""

def draw_legend(items):
    return draw_pinout_legend_box(items)

def draw_pinout_legend_box(items, lx=25, ly=490, lw=1010, lh=205):
    cards_html = ""
    cols = 4
    col_w = (lw - 40) / cols
    row_h = 42
    
    for i, it in enumerate(items):
        r = i // cols
        c = i % cols
        cx = lx + 20 + c * col_w
        cy = ly + 45 + r * row_h
        pin_bg = "#00979D" if "GND" not in it['pin'] and "5V" not in it['pin'] and "3.3V" not in it['pin'] else ("#E53935" if "5V" in it['pin'] else ("#FF9800" if "3.3V" in it['pin'] else "#37474F"))
        pin_esc = xml_esc(it['pin'])
        comp_esc = xml_esc(it['comp'])
        desc_esc = xml_esc(it['desc'])
        cards_html += f"""
        <g transform="translate({cx}, {cy})">
          <rect x="0" y="0" width="{col_w-10}" height="36" rx="6" fill="#1E2230" stroke="#2D3346" stroke-width="1"/>
          <rect x="6" y="6" width="62" height="24" rx="4" fill="{pin_bg}"/>
          <text x="37" y="22" fill="#FFFFFF" font-family="monospace" font-weight="bold" font-size="10.5" text-anchor="middle">{pin_esc}</text>
          <text x="76" y="17" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="10.5">{comp_esc}</text>
          <text x="76" y="28" fill="#80DEEA" font-family="system-ui, sans-serif" font-weight="500" font-size="9">{desc_esc}</text>
        </g>
        """

    return f"""
  <!-- BOTTOM PORT CONNECTION MATRIX -->
  <g id="pinout-matrix">
    <rect x="{lx}" y="{ly}" width="{lw}" height="{lh}" rx="10" fill="#161922" stroke="#262B3C" stroke-width="1.5"/>
    <rect x="{lx}" y="{ly}" width="{lw}" height="34" rx="10" fill="#1C202C"/>
    <text x="{lx+20}" y="{ly+22}" fill="#00E5FF" font-family="system-ui, sans-serif" font-weight="800" font-size="13">
      ⚡ DEVRE BAĞLANTI &amp; PORT ÇIKIŞLARI MATRİSİ (PINOUT GUIDE)
    </text>
    <text x="{lx+lw-20}" y="{ly+22}" fill="#90A4AE" font-family="monospace" font-size="10" text-anchor="end">
      ARDUINO UNO R3 &lt;---&gt; BREADBOARD ELEMANLARI
    </text>
    {cards_html}
  </g>
"""

# Projects configuration
circuits_data = [
    {
        "id": "sinif0",
        "folder": "Sinif_0_Anasinifi_Blink_LED",
        "title": "Ana Sınıfı: Temel Giriş - Tek LED Yakma & Söndürme (Blink)",
        "gradeLabel": "Ana Sınıfı (4-5 Yaş)",
        "levelBadge": "Kademe 1 / 13",
        "pins": [
            {"pin": "Pin 8", "comp": "220Ω -> LED Anot (+)", "desc": "Dijital Çıkış (5V/0V Sinyali)"},
            {"pin": "GND", "comp": "LED Katot (-)", "desc": "Toprak Hattı (Devre Tamamlama)"}
        ],
        "render_extra": lambda: f"""
          <!-- 220 Ohm Resistor -->
          <g transform="translate(600, 240)">
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#B0BEC5" stroke-width="3"/>
            <rect x="-18" y="-7" width="36" height="14" rx="4" fill="#D7CCC8" stroke="#8D6E63"/>
            <rect x="-12" y="-7" width="3" height="14" fill="#D32F2F"/>
            <rect x="-4" y="-7" width="3" height="14" fill="#D32F2F"/>
            <rect x="4" y="-7" width="3" height="14" fill="#5D4037"/>
            <rect x="12" y="-7" width="2" height="14" fill="#FFD700"/>
          </g>
          <!-- 5mm Red LED -->
          <g transform="translate(680, 230)">
            <path d="M 0 10 C -15 10, -15 -25, 0 -25 C 15 -25, 15 10, 0 10 Z" fill="url(#glow-red)" stroke="#B71C1C" stroke-width="1.5"/>
            <rect x="-14" y="8" width="28" height="4" fill="#B71C1C"/>
            <line x1="-6" y1="12" x2="-6" y2="30" stroke="#90A4AE" stroke-width="3"/>
            <line x1="6" y1="12" x2="6" y2="40" stroke="#90A4AE" stroke-width="3"/>
          </g>
          <!-- Wires -->
          {draw_wire(280, 154, 570, 240, "#29B6F6", 110)}
          {draw_wire(630, 240, 674, 242, "#E0E0E0", 210, 2.5)}
          {draw_wire(686, 242, 686, 185, "#212121", 170)}
          {draw_wire(686, 185, 233, 366, "#212121", 440)}
          <!-- Callouts -->
          {draw_callout(280, 130, "Arduino Pin 8 (Dijital Çıkış)")}
          {draw_callout(233, 400, "Arduino GND (Toprak)")}
          {draw_callout(600, 215, "220Ω Direnç")}
          {draw_callout(710, 210, "5mm Kırmızı LED (+/-)")}
        """
    },
    {
        "id": "sinif1",
        "folder": "Sinif_1_Buton_LED",
        "title": "1. Sınıf: Buton ile LED Kontrolü (Giriş/Çıkış Mantığı)",
        "gradeLabel": "1. Sınıf (6-7 Yaş)",
        "levelBadge": "Kademe 2 / 13",
        "pins": [
            {"pin": "Pin 2", "comp": "Push Buton 1. Bacağı", "desc": "INPUT_PULLUP Giriş Dinleme"},
            {"pin": "GND", "comp": "Buton Çapraz Bacağı", "desc": "Tıklamada GND'ye Çekme"},
            {"pin": "Pin 8", "comp": "220Ω -> Yeşil LED (+)", "desc": "Dijital Çıkış (LED Kontrolü)"},
            {"pin": "GND", "comp": "Yeşil LED Katot (-)", "desc": "Ortak Toprak Hattı"}
        ],
        "render_extra": lambda: f"""
          <!-- Push Button -->
          <g transform="translate(580, 240)">
            <rect x="-18" y="-18" width="36" height="36" rx="4" fill="#212121" stroke="#424242"/>
            <circle cx="0" cy="0" r="11" fill="#E53935"/>
          </g>
          <!-- Resistor -->
          <g transform="translate(710, 240)">
            <line x1="-25" y1="0" x2="25" y2="0" stroke="#B0BEC5" stroke-width="3"/>
            <rect x="-16" y="-6" width="32" height="12" rx="3" fill="#D7CCC8" stroke="#8D6E63"/>
            <rect x="-10" y="-6" width="3" height="12" fill="#D32F2F"/>
            <rect x="-2" y="-6" width="3" height="12" fill="#D32F2F"/>
            <rect x="6" y="-6" width="3" height="12" fill="#5D4037"/>
          </g>
          <!-- Green LED -->
          <g transform="translate(780, 230)">
            <path d="M 0 10 C -15 10, -15 -25, 0 -25 C 15 -25, 15 10, 0 10 Z" fill="url(#glow-green)" stroke="#007E33" stroke-width="1.5"/>
            <rect x="-14" y="8" width="28" height="4" fill="#007E33"/>
          </g>
          <!-- Wires -->
          {draw_wire(350, 154, 562, 230, "#AB47BC", 110)}
          {draw_wire(598, 250, 598, 410, "#212121", 330)}
          {draw_wire(598, 410, 233, 366, "#212121", 430)}
          {draw_wire(280, 154, 685, 240, "#4CAF50", 120)}
          {draw_wire(735, 240, 774, 242, "#E0E0E0", 220, 2.5)}
          {draw_wire(786, 242, 786, 410, "#212121", 330)}
          <!-- Callouts -->
          {draw_callout(350, 130, "Pin 2 (Buton Giriş)")}
          {draw_callout(280, 130, "Pin 8 (LED Çıkış)")}
          {draw_callout(580, 205, "4 Bacaklı Push Buton")}
          {draw_callout(780, 205, "5mm Yeşil LED")}
        """
    },
    {
        "id": "sinif2",
        "folder": "Sinif_2_Trafik_Isiklari",
        "title": "2. Sınıf: Trafik Işıkları Simülasyonu (Zamanlama ve Sıralı Mantık)",
        "gradeLabel": "2. Sınıf (7-8 Yaş)",
        "levelBadge": "Kademe 3 / 13",
        "pins": [
            {"pin": "Pin 10", "comp": "220Ω -> Kırmızı LED (+)", "desc": "1. Faz: Dur Işığı (5 sn)"},
            {"pin": "Pin 9", "comp": "220Ω -> Sarı LED (+)", "desc": "2. ve 4. Faz: Hazırlan/Yavaşla"},
            {"pin": "Pin 8", "comp": "220Ω -> Yeşil LED (+)", "desc": "3. Faz: Geç Işığı (5 sn)"},
            {"pin": "GND", "comp": "Tüm LED Katotları (-)", "desc": "Ortak Toprak Hattı"}
        ],
        "render_extra": lambda: f"""
          <!-- Red, Yellow, Green LEDs -->
          <g transform="translate(620, 230)">
            <path d="M 0 10 C -14 10, -14 -24, 0 -24 C 14 -24, 14 10, 0 10 Z" fill="url(#glow-red)" stroke="#B71C1C"/>
          </g>
          <g transform="translate(700, 230)">
            <path d="M 0 10 C -14 10, -14 -24, 0 -24 C 14 -24, 14 10, 0 10 Z" fill="url(#glow-yellow)" stroke="#FF8F00"/>
          </g>
          <g transform="translate(780, 230)">
            <path d="M 0 10 C -14 10, -14 -24, 0 -24 C 14 -24, 14 10, 0 10 Z" fill="url(#glow-green)" stroke="#007E33"/>
          </g>
          <!-- Resistors -->
          <rect x="615" y="248" width="10" height="26" rx="2" fill="#D7CCC8" stroke="#8D6E63"/>
          <rect x="695" y="248" width="10" height="26" rx="2" fill="#D7CCC8" stroke="#8D6E63"/>
          <rect x="775" y="248" width="10" height="26" rx="2" fill="#D7CCC8" stroke="#8D6E63"/>
          <!-- Wires -->
          {draw_wire(257, 154, 620, 275, "#E53935", 100)}
          {draw_wire(268, 154, 700, 275, "#FDD835", 115)}
          {draw_wire(280, 154, 780, 275, "#43A047", 130)}
          {draw_wire(625, 235, 625, 410, "#212121", 330)}
          {draw_wire(705, 235, 705, 410, "#212121", 330)}
          {draw_wire(785, 235, 785, 410, "#212121", 330)}
          {draw_wire(625, 410, 233, 366, "#212121", 440)}
          <!-- Callouts -->
          {draw_callout(257, 130, "Pin 10 (Kırmızı)")}
          {draw_callout(268, 105, "Pin 9 (Sarı)")}
          {draw_callout(280, 130, "Pin 8 (Yeşil)")}
          {draw_callout(700, 185, "Trafik Işıkları LED Grubu")}
        """
    },
    {
        "id": "sinif3",
        "folder": "Sinif_3_Buzzer_Melodi",
        "title": "3. Sınıf: Buzzer ile Melodi ve Ritim (Sesli Geri Bildirim)",
        "gradeLabel": "3. Sınıf (8-9 Yaş)",
        "levelBadge": "Kademe 4 / 13",
        "pins": [
            {"pin": "Pin 8", "comp": "Buzzer Artı (+) Bacağı", "desc": "tone() Fonksiyonu Frekans Sinyali"},
            {"pin": "GND", "comp": "Buzzer Eksi (-) Bacağı", "desc": "Toprak Hattı"}
        ],
        "render_extra": lambda: f"""
          <!-- Buzzer -->
          <g transform="translate(680, 240)" filter="url(#shadow)">
            <circle cx="0" cy="0" r="38" fill="#212121" stroke="#424242" stroke-width="2"/>
            <circle cx="0" cy="0" r="32" fill="#303030"/>
            <circle cx="0" cy="0" r="7" fill="#121212"/>
            <text x="18" y="-12" fill="#EF5350" font-family="sans-serif" font-size="14" font-weight="bold">+</text>
            <text x="0" y="22" fill="#9E9E9E" font-family="monospace" font-size="8" text-anchor="middle">BUZZER</text>
          </g>
          <!-- Wires -->
          {draw_wire(280, 154, 698, 230, "#29B6F6", 110)}
          {draw_wire(662, 250, 662, 410, "#212121", 330)}
          {draw_wire(662, 410, 233, 366, "#212121", 440)}
          <!-- Callouts -->
          {draw_callout(280, 130, "Pin 8 (Frekans Ses Çıkışı)")}
          {draw_callout(233, 400, "Arduino GND")}
          {draw_callout(680, 180, "Pasif Piezo Buzzer (262-523 Hz)")}
        """
    },
    {
        "id": "sinif4",
        "folder": "Sinif_4_LDR_Akilli_Gece_Lambasi",
        "title": "4. Sınıf: LDR ile Akıllı Gece Lambası (Analog Sensör Mantığı)",
        "gradeLabel": "4. Sınıf (9-10 Yaş)",
        "levelBadge": "Kademe 5 / 13",
        "pins": [
            {"pin": "5V", "comp": "LDR 1. Bacağı", "desc": "Işık Sensörü Beslemesi"},
            {"pin": "A0", "comp": "LDR & 10kΩ Kesişim Noktası", "desc": "Analog Işık Seviyesi (0-1023)"},
            {"pin": "GND", "comp": "10kΩ Direnç Sonu & LED(-)", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 9", "comp": "220Ω -> Beyaz LED (+)", "desc": "Otomatik Lamba Çıkışı"}
        ],
        "render_extra": lambda: f"""
          <!-- LDR Sensor -->
          <g transform="translate(580, 230)">
            <circle cx="0" cy="0" r="16" fill="#FFE0B2" stroke="#FFB74D" stroke-width="2"/>
            <path d="M -8 -6 Q 8 -6 8 0 Q -8 0 -8 6 Q 8 6 8 10" fill="none" stroke="#D84315" stroke-width="2"/>
          </g>
          <!-- 10k Resistor -->
          <g transform="translate(580, 290)">
            <rect x="-6" y="-14" width="12" height="28" rx="3" fill="#D7CCC8" stroke="#8D6E63"/>
            <rect x="-6" y="-8" width="12" height="3" fill="#5D4037"/>
            <rect x="-6" y="-2" width="12" height="3" fill="#212121"/>
            <rect x="-6" y="4" width="12" height="3" fill="#FF9800"/>
          </g>
          <!-- White LED -->
          <g transform="translate(740, 230)">
            <path d="M 0 10 C -14 10, -14 -24, 0 -24 C 14 -24, 14 10, 0 10 Z" fill="url(#glow-white)" stroke="#80DEEA"/>
          </g>
          <!-- 220 Ohm LED Resistor -->
          <rect x="735" y="260" width="10" height="24" rx="2" fill="#D7CCC8" stroke="#8D6E63"/>
          <!-- Wires -->
          {draw_wire(222, 366, 570, 220, "#E53935", 410)}
          {draw_wire(297, 366, 590, 245, "#FDD835", 390)}
          {draw_wire(580, 310, 580, 410, "#212121", 370)}
          {draw_wire(580, 410, 233, 366, "#212121", 440)}
          {draw_wire(268, 154, 740, 290, "#00BCD4", 110)}
          {draw_wire(745, 235, 745, 410, "#212121", 330)}
          <!-- Callouts -->
          {draw_callout(297, 400, "A0 (Analog Giriş)")}
          {draw_callout(268, 130, "Pin 9 (Gece Lambası)")}
          {draw_callout(580, 190, "LDR Sensörü")}
          {draw_callout(740, 190, "Beyaz Aydınlatma LED'i")}
        """
    },
    {
        "id": "sinif5",
        "folder": "Sinif_5_Potansiyometre_Servo",
        "title": "5. Sınıf: Potansiyometre ile Servo Motor Açısı Kontrolü",
        "gradeLabel": "5. Sınıf (10-11 Yaş)",
        "levelBadge": "Kademe 6 / 13",
        "pins": [
            {"pin": "5V", "comp": "Pot 1. Bacak & Servo Kırmızı", "desc": "5V Ortak Güç Rayı"},
            {"pin": "GND", "comp": "Pot 3. Bacak & Servo Kahverengi", "desc": "Ortak Toprak Rayı"},
            {"pin": "A0", "comp": "Potansiyometre Orta Bacak", "desc": "Açı Ayar Voltajı (0-1023)"},
            {"pin": "Pin 9", "comp": "Servo Sinyal (Turuncu)", "desc": "PWM Servo Sürücü (0-180°)"}
        ],
        "render_extra": lambda: f"""
          <!-- Potentiometer -->
          <g transform="translate(560, 240)">
            <circle cx="0" cy="0" r="28" fill="#1B5E20" stroke="#004D40" stroke-width="2"/>
            <circle cx="0" cy="0" r="16" fill="#CFD8DC"/>
            <circle cx="0" cy="0" r="10" fill="#ECEFF1"/>
            <line x1="0" y1="-10" x2="0" y2="0" stroke="#37474F" stroke-width="3"/>
          </g>
          <!-- SG90 Servo Motor -->
          <g transform="translate(760, 220)" filter="url(#shadow)">
            <rect x="0" y="0" width="90" height="60" rx="4" fill="#1E88E5" stroke="#0D47A1" stroke-width="2"/>
            <circle cx="70" cy="30" r="15" fill="#FFFFFF" stroke="#B0BEC5"/>
            <!-- Servo Arm -->
            <path d="M 70 30 L 120 22 A 6 6 0 0 1 120 38 Z" fill="#ECEFF1" stroke="#90A4AE"/>
            <circle cx="95" cy="28" r="2" fill="#37474F"/>
            <circle cx="110" cy="29" r="2" fill="#37474F"/>
            <text x="40" y="35" fill="#FFFFFF" font-family="system-ui" font-weight="bold" font-size="9" text-anchor="middle">SG90 9g</text>
          </g>
          <!-- Wires -->
          {draw_wire(222, 366, 540, 160, "#E53935", 420)}
          {draw_wire(233, 366, 580, 185, "#212121", 440)}
          {draw_wire(297, 366, 560, 275, "#FDD835", 380)}
          {draw_wire(268, 154, 760, 270, "#FF9800", 110)}
          {draw_wire(540, 160, 775, 270, "#E53935", 130)}
          {draw_wire(580, 185, 790, 270, "#795548", 150)}
          <!-- Callouts -->
          {draw_callout(297, 400, "A0 (Potansiyometre Açı)")}
          {draw_callout(268, 130, "Pin 9 (PWM Servo)")}
          {draw_callout(560, 190, "10kΩ Potansiyometre")}
          {draw_callout(810, 190, "SG90 Mini Servo Motor")}
        """
    },
    {
        "id": "sinif6",
        "folder": "Sinif_6_HCSR04_Park_Sensoru",
        "title": "6. Sınıf: HC-SR04 Ultrasonik Sensör ile Sesli/Işıklı Park Sensörü",
        "gradeLabel": "6. Sınıf (11-12 Yaş)",
        "levelBadge": "Kademe 7 / 13",
        "pins": [
            {"pin": "5V", "comp": "HC-SR04 VCC", "desc": "Sensör Beslemesi"},
            {"pin": "GND", "comp": "HC-SR04 GND & Buzzer(-) & LED(-)", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 9", "comp": "HC-SR04 Trig", "desc": "Ses Dalgası Tetikleme (10µs)"},
            {"pin": "Pin 8", "comp": "HC-SR04 Echo", "desc": "Yankı Dinleme (pulseIn)"},
            {"pin": "Pin 7", "comp": "Buzzer (+)", "desc": "Kademeli Sesli Alarm"},
            {"pin": "Pin 6", "comp": "220Ω -> Kırmızı LED (+)", "desc": "Kademeli Görsel Flaşör"}
        ],
        "render_extra": lambda: f"""
          <!-- HC-SR04 Sensor -->
          <g transform="translate(560, 200)" filter="url(#shadow)">
            <rect x="0" y="0" width="120" height="60" rx="4" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
            <circle cx="32" cy="30" r="20" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/>
            <circle cx="32" cy="30" r="14" fill="#37474F"/>
            <text x="32" y="34" fill="#FFF" font-size="8" font-weight="bold" text-anchor="middle">T</text>
            <circle cx="88" cy="30" r="20" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/>
            <circle cx="88" cy="30" r="14" fill="#37474F"/>
            <text x="88" y="34" fill="#FFF" font-size="8" font-weight="bold" text-anchor="middle">R</text>
          </g>
          <!-- Buzzer -->
          <circle cx="760" cy="240" r="22" fill="#212121" stroke="#424242"/>
          <!-- LED -->
          <circle cx="830" cy="240" r="10" fill="url(#glow-red)" stroke="#B71C1C"/>
          <!-- Wires -->
          {draw_wire(222, 366, 575, 265, "#E53935", 420)}
          {draw_wire(233, 366, 665, 265, "#212121", 440)}
          {draw_wire(268, 154, 605, 265, "#29B6F6", 110)}
          {draw_wire(280, 154, 635, 265, "#FDD835", 125)}
          {draw_wire(291, 154, 760, 220, "#AB47BC", 140)}
          {draw_wire(303, 154, 830, 225, "#43A047", 155)}
          <!-- Callouts -->
          {draw_callout(268, 130, "Pin 9 (Trig)")}
          {draw_callout(280, 105, "Pin 8 (Echo)")}
          {draw_callout(291, 130, "Pin 7 (Buzzer)")}
          {draw_callout(303, 105, "Pin 6 (LED)")}
          {draw_callout(620, 165, "HC-SR04 Ultrasonik Mesafe")}
        """
    },
    {
        "id": "sinif7",
        "folder": "Sinif_7_I2C_LCD_Sayac",
        "title": "7. Sınıf: 2x16 I2C LCD Ekranda Sayaç ve Metin Gösterimi",
        "gradeLabel": "7. Sınıf (12-13 Yaş)",
        "levelBadge": "Kademe 8 / 13",
        "pins": [
            {"pin": "5V", "comp": "LCD VCC", "desc": "5V LCD Beslemesi"},
            {"pin": "GND", "comp": "LCD GND & Buton GND", "desc": "Ortak Toprak"},
            {"pin": "A4", "comp": "LCD SDA", "desc": "I2C Seri Veri Hattı"},
            {"pin": "A5", "comp": "LCD SCL", "desc": "I2C Seri Saat Hattı"},
            {"pin": "Pin 2", "comp": "Buton Sinyal", "desc": "INPUT_PULLUP Sayaç Artırma"}
        ],
        "render_extra": lambda: f"""
          <!-- 16x2 I2C LCD Screen -->
          <g transform="translate(600, 190)" filter="url(#shadow)">
            <rect x="0" y="0" width="220" height="95" rx="5" fill="#2E7D32" stroke="#1B5E20" stroke-width="2"/>
            <rect x="15" y="12" width="190" height="70" rx="3" fill="#212121"/>
            <rect x="25" y="20" width="170" height="54" rx="2" fill="#0277BD"/>
            <text x="35" y="42" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold">Bilisim Atolyesi</text>
            <text x="35" y="60" fill="#81D4FA" font-family="monospace" font-size="11">Ziyaretci: 12</text>
          </g>
          <!-- Button -->
          <g transform="translate(520, 240)">
            <rect x="-16" y="-16" width="32" height="32" rx="4" fill="#212121"/>
            <circle cx="0" cy="0" r="10" fill="#E53935"/>
          </g>
          <!-- Wires -->
          {draw_wire(222, 366, 615, 290, "#E53935", 410)}
          {draw_wire(233, 366, 630, 290, "#212121", 430)}
          {draw_wire(341, 366, 645, 290, "#43A047", 380)}
          {draw_wire(352, 366, 660, 290, "#FDD835", 360)}
          {draw_wire(350, 154, 520, 220, "#AB47BC", 110)}
          <!-- Callouts -->
          {draw_callout(341, 400, "A4 (I2C SDA)")}
          {draw_callout(352, 425, "A5 (I2C SCL)")}
          {draw_callout(350, 130, "Pin 2 (Buton)")}
          {draw_callout(710, 165, "16x2 Karakter LCD (I2C PCF8574)")}
        """
    },
    {
        "id": "sinif8",
        "folder": "Sinif_8_DHT11_LCD_Termometre",
        "title": "8. Sınıf: DHT11 ile Dijital Sıcaklık ve Nem Ölçer (LCD Ekranlı)",
        "gradeLabel": "8. Sınıf (13-14 Yaş)",
        "levelBadge": "Kademe 9 / 13",
        "pins": [
            {"pin": "5V", "comp": "DHT11 VCC & LCD VCC", "desc": "Sensör ve Ekran Besleme"},
            {"pin": "GND", "comp": "DHT11 GND & LCD GND", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 4", "comp": "DHT11 DATA", "desc": "Tek Hat Dijital Telemetri"},
            {"pin": "A4", "comp": "LCD SDA", "desc": "I2C Veri İletişimi"},
            {"pin": "A5", "comp": "LCD SCL", "desc": "I2C Saat Senkronizasyonu"}
        ],
        "render_extra": lambda: f"""
          <!-- DHT11 Sensor -->
          <g transform="translate(520, 210)" filter="url(#shadow)">
            <rect x="0" y="0" width="50" height="65" rx="5" fill="#0288D1" stroke="#01579B" stroke-width="2"/>
            <rect x="8" y="10" width="8" height="6" fill="#01579B"/>
            <rect x="22" y="10" width="8" height="6" fill="#01579B"/>
            <rect x="36" y="10" width="8" height="6" fill="#01579B"/>
            <rect x="8" y="22" width="8" height="6" fill="#01579B"/>
            <rect x="22" y="22" width="8" height="6" fill="#01579B"/>
            <rect x="36" y="22" width="8" height="6" fill="#01579B"/>
          </g>
          <!-- 16x2 LCD Screen -->
          <g transform="translate(630, 190)" filter="url(#shadow)">
            <rect x="0" y="0" width="220" height="95" rx="5" fill="#2E7D32" stroke="#1B5E20" stroke-width="2"/>
            <rect x="15" y="12" width="190" height="70" rx="3" fill="#212121"/>
            <rect x="25" y="20" width="170" height="54" rx="2" fill="#0277BD"/>
            <text x="35" y="42" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold">Sicaklik: 24.5 C</text>
            <text x="35" y="60" fill="#81D4FA" font-family="monospace" font-size="11">Bagil Nem: %52</text>
          </g>
          <!-- Wires -->
          {draw_wire(222, 366, 530, 280, "#E53935", 420)}
          {draw_wire(233, 366, 555, 280, "#212121", 440)}
          {draw_wire(327, 154, 542, 280, "#FF9800", 110)}
          {draw_wire(341, 366, 675, 290, "#43A047", 380)}
          {draw_wire(352, 366, 690, 290, "#FDD835", 360)}
          <!-- Callouts -->
          {draw_callout(327, 130, "Pin 4 (DHT11 Veri)")}
          {draw_callout(341, 400, "A4 (SDA)")}
          {draw_callout(352, 425, "A5 (SCL)")}
          {draw_callout(545, 185, "DHT11 Sensör")}
          {draw_callout(740, 165, "I2C LCD Telemetri Göstergesi")}
        """
    },
    {
        "id": "sinif9",
        "folder": "Sinif_9_PIR_Guvenlik_Alarmi",
        "title": "9. Sınıf: PIR Hareket Sensörlü Güvenlik Alarm Sistemi",
        "gradeLabel": "9. Sınıf (14-15 Yaş)",
        "levelBadge": "Kademe 10 / 13",
        "pins": [
            {"pin": "5V", "comp": "PIR VCC", "desc": "Kızılötesi Sensör Gücü"},
            {"pin": "GND", "comp": "PIR GND & Buzzer & LED'ler", "desc": "Ortak Toprak Hattı"},
            {"pin": "Pin 2", "comp": "PIR OUT", "desc": "Dijital Hareket Tetikleme (3.3V/0V)"},
            {"pin": "Pin 8", "comp": "220Ω -> Kırmızı LED", "desc": "Alarm Flaşör Işığı"},
            {"pin": "Pin 7", "comp": "220Ω -> Yeşil LED", "desc": "Sistem Devrede / Güvenli"},
            {"pin": "Pin 9", "comp": "Buzzer (+)", "desc": "Çift Ton Polis Sireni"}
        ],
        "render_extra": lambda: f"""
          <!-- PIR Motion Sensor -->
          <g transform="translate(560, 200)" filter="url(#shadow)">
            <rect x="0" y="0" width="80" height="60" rx="4" fill="#2E7D32" stroke="#1B5E20"/>
            <circle cx="40" cy="30" r="22" fill="#FAFAFA" stroke="#E0E0E0"/>
            <circle cx="40" cy="30" r="14" fill="none" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="3,2"/>
          </g>
          <!-- Buzzer, Red & Green LEDs -->
          <circle cx="720" cy="240" r="20" fill="#212121" stroke="#424242"/>
          <circle cx="780" cy="240" r="10" fill="url(#glow-red)" stroke="#B71C1C"/>
          <circle cx="830" cy="240" r="10" fill="url(#glow-green)" stroke="#007E33"/>
          <!-- Wires -->
          {draw_wire(222, 366, 575, 265, "#E53935", 420)}
          {draw_wire(233, 366, 625, 265, "#212121", 440)}
          {draw_wire(350, 154, 600, 265, "#FDD835", 110)}
          {draw_wire(268, 154, 720, 220, "#AB47BC", 125)}
          {draw_wire(280, 154, 780, 225, "#E53935", 140)}
          {draw_wire(291, 154, 830, 225, "#43A047", 155)}
          <!-- Callouts -->
          {draw_callout(350, 130, "Pin 2 (PIR OUT)")}
          {draw_callout(268, 130, "Pin 9 (Siren)")}
          {draw_callout(280, 105, "Pin 8 (Kırmızı)")}
          {draw_callout(291, 130, "Pin 7 (Yeşil)")}
          {draw_callout(600, 165, "HC-SR501 PIR Sensör")}
        """
    },
    {
        "id": "sinif10",
        "folder": "Sinif_10_Joystick_RGB_Mikser",
        "title": "10. Sınıf: RGB LED ve Joystick ile Renk/Yön Mikseri",
        "gradeLabel": "10. Sınıf (15-16 Yaş)",
        "levelBadge": "Kademe 11 / 13",
        "pins": [
            {"pin": "A0", "comp": "Joystick VRx", "desc": "X Ekseni Analog Sinyal"},
            {"pin": "A1", "comp": "Joystick VRy", "desc": "Y Ekseni Analog Sinyal"},
            {"pin": "Pin 2", "comp": "Joystick SW", "desc": "INPUT_PULLUP Tıklama Butonu"},
            {"pin": "Pin 9", "comp": "220Ω -> RGB Kırmızı", "desc": "PWM Red Kanalı (0-255)"},
            {"pin": "Pin 10", "comp": "220Ω -> RGB Yeşil", "desc": "PWM Green Kanalı (0-255)"},
            {"pin": "Pin 11", "comp": "220Ω -> RGB Mavi", "desc": "PWM Blue Kanalı (0-255)"}
        ],
        "render_extra": lambda: f"""
          <!-- Joystick Module -->
          <g transform="translate(560, 210)" filter="url(#shadow)">
            <rect x="0" y="0" width="70" height="70" rx="6" fill="#212121" stroke="#424242"/>
            <circle cx="35" cy="35" r="22" fill="#37474F"/>
            <circle cx="35" cy="35" r="14" fill="#263238" stroke="#546E7A" stroke-width="2"/>
          </g>
          <!-- RGB LED -->
          <g transform="translate(760, 230)">
            <path d="M 0 10 C -15 10, -15 -25, 0 -25 C 15 -25, 15 10, 0 10 Z" fill="url(#rainbow-rgb)"/>
          </g>
          <!-- Wires -->
          {draw_wire(297, 366, 630, 235, "#FDD835", 380)}
          {draw_wire(308, 366, 630, 250, "#43A047", 360)}
          {draw_wire(350, 154, 630, 265, "#AB47BC", 110)}
          {draw_wire(246, 154, 745, 240, "#448AFF", 125)}
          {draw_wire(257, 154, 760, 240, "#69F0AE", 140)}
          {draw_wire(268, 154, 775, 240, "#FF5252", 155)}
          <!-- Callouts -->
          {draw_callout(297, 400, "A0 (VRx)")}
          {draw_callout(308, 425, "A1 (VRy)")}
          {draw_callout(350, 130, "Pin 2 (SW)")}
          {draw_callout(257, 105, "Pin 9,10,11 (PWM RGB)")}
          {draw_callout(595, 175, "2 Eksenli Joystick")}
          {draw_callout(760, 185, "RGB LED (4 Bacak)")}
        """
    },
    {
        "id": "sinif11",
        "folder": "Sinif_11_RFID_Kapi_Gecis",
        "title": "11. Sınıf: RC522 RFID Modülü ile Akıllı Kapı Geçiş Kontrolü",
        "gradeLabel": "11. Sınıf (16-17 Yaş)",
        "levelBadge": "Kademe 12 / 13",
        "pins": [
            {"pin": "3.3V", "comp": "RC522 VCC (DİKKAT!)", "desc": "KESİNLİKLE 5V VERİLMEZ!"},
            {"pin": "Pin 10", "comp": "RC522 SDA (SS)", "desc": "SPI Slave Select"},
            {"pin": "Pin 11", "comp": "RC522 MOSI", "desc": "Master Out Slave In"},
            {"pin": "Pin 12", "comp": "RC522 MISO", "desc": "Master In Slave Out"},
            {"pin": "Pin 13", "comp": "RC522 SCK", "desc": "SPI Seri Saat Sinyali"},
            {"pin": "Pin 9", "comp": "RC522 RST", "desc": "Donanımsal Reset Hattı"},
            {"pin": "Pin 5", "comp": "SG90 Servo Sinyal", "desc": "Kapı Kilit Mandalı (90°)"}
        ],
        "render_extra": lambda: f"""
          <!-- RC522 RFID Module -->
          <g transform="translate(540, 190)" filter="url(#shadow)">
            <rect x="0" y="0" width="100" height="90" rx="5" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
            <rect x="10" y="10" width="55" height="70" rx="3" fill="none" stroke="#FFD54F" stroke-width="1.5"/>
            <text x="37" y="48" fill="#FFF" font-size="8" font-weight="bold" text-anchor="middle">RFID 13.56M</text>
            <rect x="75" y="30" width="20" height="20" fill="#212121"/>
          </g>
          <!-- Mini Servo -->
          <rect x="740" y="220" width="70" height="45" rx="3" fill="#1E88E5"/>
          <!-- Wires -->
          {draw_wire(210, 366, 545, 275, "#FF9800", 430)}
          {draw_wire(233, 366, 560, 275, "#212121", 450)}
          {draw_wire(268, 154, 575, 275, "#FDD835", 110)}
          {draw_wire(257, 154, 590, 275, "#ECEFF1", 125)}
          {draw_wire(246, 154, 605, 275, "#29B6F6", 140)}
          {draw_wire(234, 154, 620, 275, "#AB47BC", 155)}
          {draw_wire(222, 154, 635, 275, "#43A047", 170)}
          {draw_wire(315, 154, 740, 250, "#FF9800", 95)}
          <!-- Callouts -->
          {draw_callout(210, 400, "3.3V (DİKKAT! RFID Güç)")}
          {draw_callout(246, 105, "SPI Portları (10,11,12,13)")}
          {draw_callout(315, 130, "Pin 5 (Servo Mandal)")}
          {draw_callout(590, 165, "RC522 13.56MHz RFID Okuyucu")}
        """
    },
    {
        "id": "sinif12",
        "folder": "Sinif_12_Bluetooth_Role_Otomasyon",
        "title": "12. Sınıf: Bluetooth (HC-05/06) Kontrollü Otomasyon & Röle ile Yüksek Güç Kontrolü",
        "gradeLabel": "12. Sınıf (17-18 Yaş)",
        "levelBadge": "Kademe 13 / 13",
        "pins": [
            {"pin": "5V", "comp": "HC-05 VCC & Röle VCC", "desc": "5V Ortak Besleme"},
            {"pin": "GND", "comp": "HC-05 GND & Röle GND", "desc": "Ortak Toprak Referansı"},
            {"pin": "Pin 2", "comp": "HC-05 TXD (Soft RX)", "desc": "Telefondan Gelen Komutlar"},
            {"pin": "Pin 3", "comp": "1kΩ/2kΩ -> HC-05 RXD", "desc": "3.3V Düşürülmüş Güvenli TX"},
            {"pin": "Pin 7", "comp": "Röle IN Tetik", "desc": "Optokuplör Yüksek Güç Sürücü"},
            {"pin": "Pin 8", "comp": "220Ω -> Durum LED", "desc": "Röle Açık/Kapalı Göstergesi"}
        ],
        "render_extra": lambda: f"""
          <!-- HC-05 Bluetooth Module -->
          <g transform="translate(540, 195)" filter="url(#shadow)">
            <rect x="0" y="0" width="85" height="55" rx="4" fill="#1976D2" stroke="#0D47A1" stroke-width="2"/>
            <path d="M 8 10 L 25 10 L 25 14 L 8 14" fill="none" stroke="#FFD54F" stroke-width="2"/>
            <text x="50" y="32" fill="#FFF" font-size="8" font-weight="bold" text-anchor="middle">HC-05 BT</text>
          </g>
          <!-- Relay Module -->
          <g transform="translate(720, 190)" filter="url(#shadow)">
            <rect x="0" y="0" width="110" height="75" rx="5" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>
            <rect x="15" y="10" width="55" height="55" rx="3" fill="#0288D1"/>
            <text x="42" y="38" fill="#FFF" font-size="8" font-weight="bold" text-anchor="middle">RELAY 5V</text>
            <rect x="80" y="15" width="22" height="45" rx="2" fill="#2E7D32"/>
            <circle cx="91" cy="25" r="3" fill="#ECEFF1"/>
            <circle cx="91" cy="37" r="3" fill="#ECEFF1"/>
            <circle cx="91" cy="49" r="3" fill="#ECEFF1"/>
          </g>
          <!-- Wires -->
          {draw_wire(222, 366, 550, 250, "#E53935", 420)}
          {draw_wire(233, 366, 565, 250, "#212121", 440)}
          {draw_wire(350, 154, 580, 250, "#FDD835", 110)}
          {draw_wire(338, 154, 595, 250, "#29B6F6", 125)}
          {draw_wire(291, 154, 725, 250, "#AB47BC", 140)}
          {draw_wire(280, 154, 800, 250, "#43A047", 155)}
          <!-- Callouts -->
          {draw_callout(350, 130, "Pin 2 (Soft RX)")}
          {draw_callout(338, 105, "Pin 3 (Soft TX)")}
          {draw_callout(291, 130, "Pin 7 (Röle IN)")}
          {draw_callout(280, 105, "Pin 8 (Durum LED)")}
          {draw_callout(582, 170, "HC-05 Bluetooth SPP")}
          {draw_callout(775, 165, "Optokuplörlü 5V Röle Modülü")}
        """
    }
]

print("13 sınıf için Fritzing simülasyon grafikleri oluşturuluyor...")

for cdata in circuits_data:
    svg_code = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 720" width="1060" height="720">
  {SVG_DEFS}
  {draw_header(cdata['title'], cdata['gradeLabel'], cdata['levelBadge'])}
  {draw_arduino()}
  {draw_breadboard()}
  {cdata['render_extra']()}
  {draw_legend(cdata['pins'])}
</svg>"""

    # 1. Save SVG in assets/circuits/
    asset_svg_path = os.path.join(ASSETS_CIRCUITS_DIR, f"circuit_{cdata['id']}.svg")
    with open(asset_svg_path, "w", encoding="utf-8") as f:
        f.write(svg_code.strip() + "\n")

    # 2. Save SVG in ArduinoProjects class folder
    proj_dir = os.path.join(ARDUINO_DIR, cdata['folder'])
    proj_svg_path = os.path.join(proj_dir, "circuit_diagram.svg")
    with open(proj_svg_path, "w", encoding="utf-8") as f:
        f.write(svg_code.strip() + "\n")

    # 3. Convert SVG to PNG using rsvg-convert (2x high-resolution)
    asset_png_path = os.path.join(ASSETS_CIRCUITS_DIR, f"circuit_{cdata['id']}.png")
    proj_png_path = os.path.join(proj_dir, "circuit_diagram.png")
    
    cmd1 = ["rsvg-convert", "-z", "2", asset_svg_path, "-o", asset_png_path]
    subprocess.run(cmd1, check=True)
    
    cmd2 = ["rsvg-convert", "-z", "2", proj_svg_path, "-o", proj_png_path]
    subprocess.run(cmd2, check=True)

    # 4. Generate README.md inside the class folder
    pinout_table_md = "| Arduino Pini | Bileşen Bacağı | Görev / Açıklama |\n|:---|:---|:---|\n"
    for p in cdata['pins']:
        pinout_table_md += f"| **`{p['pin']}`** | {p['comp']} | {p['desc']} |\n"

    readme_content = f"""# 🤖 {cdata['title']}
**Uğur Okulları Viranşehir Kampüsü — K-12 Bilişim & Robotik Kodlama Atölyesi**
*Düzey:* {cdata['gradeLabel']} | *Seviye:* {cdata['levelBadge']}

---

## 📸 Fritzing Devre & Breadboard Simülasyon Şeması

Aşağıdaki şema, projenin breadboard ve Arduino Uno üzerindeki tam kablo ve pin bağlantılarını göstermektedir:

![Fritzing Devre Şeması](circuit_diagram.png)

*(Vektörel SVG formatı için: [circuit_diagram.svg](circuit_diagram.svg))*

---

## 🔌 Detaylı Port Bağlantı Tablosu (Pinout)

{pinout_table_md}

---

## 📁 Proje Dosyaları
- **Kaynak Kod:** [`{cdata['folder']}.ino`]({cdata['folder']}.ino)
- **Devre Şeması (PNG):** [`circuit_diagram.png`](circuit_diagram.png)
- **Vektörel Şema (SVG):** [`circuit_diagram.svg`](circuit_diagram.svg)

---
*Uğur Okulları Viranşehir Kampüsü Bilişim Teknolojileri ve İnovasyon Laboratuvarı*
"""
    readme_path = os.path.join(proj_dir, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(readme_content.strip() + "\n")

    print(f"✓ Başarıyla üretildi: {cdata['id']} ({cdata['folder']}) -> SVG & PNG")

print("\nTüm 13 kademenin Fritzing simülasyon görselleri ve README.md dosyaları eksiksiz oluşturuldu!")
