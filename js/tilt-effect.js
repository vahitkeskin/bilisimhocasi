/**
 * UĞUR OKULLARI BİLİŞİM TEKNOLOJİLERİ
 * Apple VisionOS / iOS 3D Card Tilt & Specular Light Engine
 */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Only apply tilt on fine pointer devices (desktops/laptops with mouse/trackpad)
  if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  const cards = document.querySelectorAll('.glass-curriculum-card');

  cards.forEach((card) => {
    let bounds;

    function onPointerEnter() {
      bounds = card.getBoundingClientRect();
      document.addEventListener('pointermove', onPointerMove);
    }

    function onPointerMove(e) {
      if (!bounds) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      // Set specular radial gradient coordinates
      card.style.setProperty('--mouse-x', `${leftX}px`);
      card.style.setProperty('--mouse-y', `${topY}px`);

      // Gentle realistic 3D tilt calculation
      const maxRotation = 4.5; // degrees
      const rotateX = (-center.y / (bounds.height / 2)) * maxRotation;
      const rotateY = (center.x / (bounds.width / 2)) * maxRotation;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.008)`;
    }

    function onPointerLeave() {
      document.removeEventListener('pointermove', onPointerMove);
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    }

    card.addEventListener('pointerenter', onPointerEnter);
    card.addEventListener('pointerleave', onPointerLeave);
  });
})();
