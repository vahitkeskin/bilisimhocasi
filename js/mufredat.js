/**
 * UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ
 * 2026 MEB K12 Bilişim Teknolojileri & Bilgisayar Bilimi Müfredat Sayfası Kontrolcüsü
 * (mufredat.html Controller)
 * 3 Dil Desteği: Türkçe (tr), English (en), العربية (ar)
 */

(function () {
  'use strict';

  // State
  let activeGradeKey = 'anasinifi';
  let activeFilter = 'all';
  let quizScores = {}; // Keyed by question index

  // DOM Elements
  const breadcrumbCategoryEl = document.getElementById('breadcrumb-category');
  const breadcrumbGradeEl = document.getElementById('breadcrumb-grade');
  const stageTabButtons = document.querySelectorAll('.stage-tab-btn');
  const gradePillsList = document.getElementById('grade-pills-list');
  const activeGradeContainer = document.getElementById('active-grade-container');
  const overviewGradesGrid = document.getElementById('overview-grades-grid');

  /**
   * Helper: Get current active language code
   */
  function getCurrentLang() {
    return (window.I18N && typeof window.I18N.currentLang === 'function') ? window.I18N.currentLang() : 'tr';
  }

  /**
   * Helper: Translate key with fallback
   */
  function t(key, fallback = '') {
    if (window.I18N && typeof window.I18N.t === 'function') {
      const res = window.I18N.t(key);
      if (res && res !== key) return res;
    }
    return fallback || key;
  }

  /**
   * Helper: Get localized grade data for a given grade key
   */
  function getGradeData(key) {
    const lang = getCurrentLang();
    if (window.CURRICULUM_GRADES_DATA_I18N && window.CURRICULUM_GRADES_DATA_I18N[lang] && window.CURRICULUM_GRADES_DATA_I18N[lang][key]) {
      return window.CURRICULUM_GRADES_DATA_I18N[lang][key];
    }
    return (window.CURRICULUM_GRADES_DATA && window.CURRICULUM_GRADES_DATA[key]) || null;
  }

  /**
   * Helper: Get all localized grades for the current language
   */
  function getAllGrades() {
    const lang = getCurrentLang();
    if (window.CURRICULUM_GRADES_DATA_I18N && window.CURRICULUM_GRADES_DATA_I18N[lang]) {
      return window.CURRICULUM_GRADES_DATA_I18N[lang];
    }
    return window.CURRICULUM_GRADES_DATA || {};
  }

  /**
   * Determine initial grade and filter from URL search params
   */
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const sinifParam = params.get('sinif');
    const kademeParam = params.get('kademe');
    const allGrades = getAllGrades();

    if (sinifParam && allGrades[sinifParam]) {
      activeGradeKey = sinifParam;
      activeFilter = allGrades[sinifParam].category || 'all';
      return;
    }

    if (kademeParam && window.STAGE_TO_DEFAULT_GRADE && window.STAGE_TO_DEFAULT_GRADE[kademeParam]) {
      const defaultGrade = window.STAGE_TO_DEFAULT_GRADE[kademeParam];
      if (allGrades[defaultGrade]) {
        activeGradeKey = defaultGrade;
        activeFilter = allGrades[defaultGrade].category || 'all';
        return;
      }
    }

    // Default: Ana Sınıfı
    activeGradeKey = 'anasinifi';
    activeFilter = 'all';
  }

  /**
   * Switch active grade and update URL without full reload
   */
  function selectGrade(gradeKey, updateHistory = true, shouldScroll = false) {
    const gradeData = getGradeData(gradeKey);
    if (!gradeData) return;

    activeGradeKey = gradeKey;
    quizScores = {};

    // Update document title for SEO & bookmarking
    const campusTitle = t('nav.brand.name', 'Uğur Okulları');
    const campusSub = t('nav.brand.campus', 'Viranşehir Kampüsü');
    document.title = `${gradeData.gradeLabel} | ${campusTitle} ${campusSub}`;

    // Update URL query parameter
    if (updateHistory) {
      const currentL = getCurrentLang();
      const langParam = currentL && currentL !== 'tr' ? `&lang=${encodeURIComponent(currentL)}` : '';
      const newUrl = `${window.location.pathname}?sinif=${encodeURIComponent(gradeKey)}${langParam}`;
      window.history.pushState({ gradeKey }, '', newUrl);
    }

    // Render components
    renderBreadcrumbs(gradeData);
    renderGradePills();
    renderActiveGrade(gradeData);
    renderOverviewGrid();

    // Smooth scroll to showcase card if user explicitly clicked
    if (shouldScroll && activeGradeContainer) {
      const navOffset = 90;
      const elementPosition = activeGradeContainer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Filter stages (all, okuloncesi, ilkokul, ortaokul, lise)
   */
  function setStageFilter(filter) {
    activeFilter = filter;

    // Update filter buttons active state
    stageTabButtons.forEach(btn => {
      const btnFilter = btn.dataset.filter;
      if (btnFilter === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderGradePills();
    renderOverviewGrid();

    // If current grade doesn't match active filter, auto-select first matching grade
    if (filter !== 'all') {
      const allGrades = getAllGrades();
      const gradeData = allGrades[activeGradeKey];
      if (gradeData && gradeData.category !== filter) {
        const matchingKey = Object.keys(allGrades).find(
          key => allGrades[key].category === filter
        );
        if (matchingKey) {
          selectGrade(matchingKey, true, false);
        }
      }
    }
  }

  /**
   * Render breadcrumb elements
   */
  function renderBreadcrumbs(gradeData) {
    if (breadcrumbCategoryEl) {
      breadcrumbCategoryEl.textContent = gradeData.categoryLabel || 'K12';
    }
    if (breadcrumbGradeEl) {
      breadcrumbGradeEl.textContent = gradeData.shortLabel || gradeData.gradeLabel;
    }
  }

  /**
   * Render the 13 grade selector pills
   */
  function renderGradePills() {
    if (!gradePillsList) return;
    const allGrades = getAllGrades();

    gradePillsList.innerHTML = '';

    Object.keys(allGrades).forEach(key => {
      const grade = allGrades[key];
      const isVisible = activeFilter === 'all' || grade.category === activeFilter;

      if (!isVisible) return;

      const pill = document.createElement('a');
      pill.href = `?sinif=${encodeURIComponent(key)}`;
      pill.className = `grade-pill-item ${key === activeGradeKey ? 'active' : ''}`;
      pill.setAttribute('data-grade-key', key);
      pill.setAttribute('role', 'button');
      pill.setAttribute('aria-pressed', key === activeGradeKey ? 'true' : 'false');

      pill.innerHTML = `
        <i class="${grade.icon}"></i>
        <span>${grade.shortLabel}</span>
        <span class="grade-pill-age">${grade.age.replace(' Grubu', '')}</span>
      `;

      pill.addEventListener('click', (e) => {
        e.preventDefault();
        selectGrade(key, true, true);
      });

      gradePillsList.appendChild(pill);
    });
  }

  /**
   * Render Active Grade Complete View
   */
  function renderActiveGrade(grade) {
    if (!activeGradeContainer) return;
    const allGrades = getAllGrades();

    // Keys list for previous / next navigation
    const allKeys = Object.keys(allGrades);
    const currentIndex = allKeys.indexOf(grade.id);
    const prevKey = currentIndex > 0 ? allKeys[currentIndex - 1] : null;
    const nextKey = currentIndex < allKeys.length - 1 ? allKeys[currentIndex + 1] : null;

    const prevGrade = prevKey ? allGrades[prevKey] : null;
    const nextGrade = nextKey ? allGrades[nextKey] : null;

    // Build Term 1 Units HTML
    const term1UnitsHtml = (grade.term1 || []).map(u => `
      <div class="term-unit-item">
        <div class="unit-item-name">
          <i class="fas fa-bookmark"></i>
          <span>${u.unit}</span>
        </div>
        <p class="unit-item-topics">${u.topics}</p>
      </div>
    `).join('');

    // Build Term 2 Units HTML
    const term2UnitsHtml = (grade.term2 || []).map(u => `
      <div class="term-unit-item">
        <div class="unit-item-name">
          <i class="fas fa-bookmark"></i>
          <span>${u.unit}</span>
        </div>
        <p class="unit-item-topics">${u.topics}</p>
      </div>
    `).join('');

    // Build Learning Outcomes HTML
    const outcomesHtml = (grade.outcomes || []).map(out => `
      <div class="outcome-check-card">
        <div class="outcome-check-icon">
          <i class="fas fa-check"></i>
        </div>
        <p class="outcome-check-text">${out}</p>
      </div>
    `).join('');

    // Build Tools & Ecosystem HTML
    const toolsHtml = (grade.tools || []).map(tool => `
      <span class="tool-tag-pill">
        <i class="fas fa-microchip"></i>
        <span>${tool}</span>
      </span>
    `).join('');

    // Build Quiz Questions HTML
    const quizHtml = (grade.quiz || []).map((q, qIndex) => {
      const optionsHtml = q.options.map((opt, optIndex) => `
        <button type="button" class="quiz-option-btn" data-q-idx="${qIndex}" data-opt-idx="${optIndex}">
          <span class="badge badge-secondary mr-2">${String.fromCharCode(65 + optIndex)}</span>
          <span>${opt}</span>
        </button>
      `).join('');

      return `
        <div class="quiz-question-block" id="quiz-block-${qIndex}">
          <div class="quiz-question-title">
            <span class="quiz-q-num">${t('mufredat.quiz.question', 'Soru')} ${qIndex + 1}:</span>
            <span>${q.question}</span>
          </div>
          <div class="quiz-options-list">
            ${optionsHtml}
          </div>
          <div class="quiz-explanation-box" id="quiz-expl-${qIndex}">
            <strong><i class="fas fa-lightbulb text-warning mr-1"></i> ${t('mufredat.quiz.explanation', 'Açıklama:')}</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('');

    // Template assembly
    activeGradeContainer.innerHTML = `
      <div class="active-grade-card" style="border-top: 4px solid ${grade.themeColor};">
        
        <!-- Header -->
        <div class="active-grade-header">
          <div class="active-grade-header-top">
            <div class="active-grade-meta-badges">
              <span class="grade-badge-main" style="background: ${grade.themeColor};">
                <i class="${grade.icon} mr-1"></i> ${grade.categoryLabel}
              </span>
              <span class="grade-badge-outline">
                <i class="fas fa-user-clock mr-1"></i> ${grade.age}
              </span>
              <span class="grade-badge-outline">
                <i class="fas fa-clock mr-1"></i> ${grade.hours}
              </span>
              <span class="grade-badge-outline">
                <i class="fas fa-laptop-code mr-1"></i> ${grade.labType}
              </span>
            </div>

            <div class="active-grade-actions">
              <button type="button" class="grade-action-btn" id="btn-share-grade" title="${t('mufredat.action.share', 'Paylaş')}">
                <i class="fas fa-share-alt"></i>
                <span>${t('mufredat.action.share', 'Paylaş')}</span>
              </button>
              <button type="button" class="grade-action-btn" id="btn-print-grade" title="${t('mufredat.action.print', 'Yazdır / PDF')}">
                <i class="fas fa-print"></i>
                <span>${t('mufredat.action.print', 'Yazdır / PDF')}</span>
              </button>
            </div>
          </div>

          <!-- Sınıf Seviyesi Proje Görseli -->
          <div class="active-grade-hero-banner-wrap" role="button" tabindex="0" title="${t('mufredat.banner.zoom', 'Tam Boyut Görseli Aç')}" data-img="${grade.projectImage || 'assets/projects/' + grade.id + '.jpg'}" data-title="${grade.project}" data-desc="${grade.projectDesc}">
            <img src="${grade.projectImage || 'assets/projects/' + grade.id + '.jpg'}" alt="${grade.project} - ${grade.title}" class="active-grade-hero-banner-img" loading="eager">
            <div class="active-grade-hero-banner-overlay">
              <div class="hero-banner-badge">
                <i class="fas fa-trophy mr-1"></i> ${grade.shortLabel} ${t('mufredat.banner.levelProject', 'Seviye Projesi:')} <strong>${grade.project}</strong>
              </div>
              <span class="hero-banner-zoom-pill">
                <i class="fas fa-search-plus mr-1"></i> ${t('mufredat.banner.zoom', 'Tam Boyut Görseli Aç')}
              </span>
            </div>
          </div>

          <h2 class="active-grade-title">${grade.title}</h2>
          <div class="active-grade-scope-line">
            <i class="fas fa-shield-alt mr-1"></i> ${grade.scope}
          </div>
          <p class="active-grade-desc">${grade.desc}</p>
        </div>

        <!-- Body -->
        <div class="active-grade-body">

          <!-- 1. ve 2. Dönem Üniteleri -->
          <div class="mufredat-section-heading">
            <i class="fas fa-calendar-alt"></i>
            <span>${t('mufredat.section.academicUnits', 'Akademik Dönem Üniteleri ve Haftalık İçerikler')}</span>
          </div>

          <div class="terms-plan-grid">
            <!-- 1. Dönem -->
            <div class="term-column-card">
              <div class="term-column-title">
                <i class="fas fa-leaf"></i>
                <span>${t('mufredat.term1.title', '1. Dönem (Güz Yarıyılı) Müfredatı')}</span>
              </div>
              ${term1UnitsHtml}
            </div>

            <!-- 2. Dönem -->
            <div class="term-column-card">
              <div class="term-column-title">
                <i class="fas fa-seedling"></i>
                <span>${t('mufredat.term2.title', '2. Dönem (Bahar Yarıyılı) Müfredatı')}</span>
              </div>
              ${term2UnitsHtml}
            </div>
          </div>

          <!-- MEB Öğrenme Kazanımları -->
          <div class="mufredat-section-heading">
            <i class="fas fa-check-double"></i>
            <span>${t('mufredat.section.outcomes', '2026 MEB Temel Öğrenme Kazanımları')}</span>
          </div>
          <div class="outcomes-cards-grid">
            ${outcomesHtml}
          </div>

          <!-- Kullanılan Teknolojiler & Donanım -->
          <div class="mufredat-section-heading">
            <i class="fas fa-tools"></i>
            <span>${t('mufredat.section.tools', 'Laboratuvar Yazılım ve Donanım Ekosistemi')}</span>
          </div>
          <div class="tools-tags-container">
            ${toolsHtml}
          </div>

          <!-- Dönem Sonu Başarı Projesi -->
          <div class="capstone-project-card">
            <div class="row align-items-center">
              <div class="col-lg-7">
                <div class="capstone-badge">
                  <i class="fas fa-trophy mr-1"></i> ${t('mufredat.capstone.badge', 'Dönem Sonu Başarı Projesi (Capstone)')}
                </div>
                <h3 class="capstone-title">${grade.project}</h3>
                <p class="capstone-desc">${grade.projectDesc}</p>
                <div class="capstone-meta-tags mt-3">
                  <span class="capstone-tag"><i class="fas fa-laptop-code mr-1"></i> ${grade.shortLabel} ${t('mufredat.banner.levelProject', 'Seviye Projesi:')}</span>
                  <span class="capstone-tag"><i class="fas fa-layer-group mr-1"></i> ${grade.categoryLabel}</span>
                  <span class="capstone-tag"><i class="fas fa-calendar-check mr-1"></i> ${t('mufredat.capstone.termEnd', '2. Dönem Sonu')}</span>
                </div>
              </div>
              <div class="col-lg-5 mt-4 mt-lg-0">
                <div class="capstone-image-wrapper" role="button" tabindex="0" title="${t('mufredat.capstone.zoom', 'Projeyi Tam Boyut İncele')}" data-img="${grade.projectImage || 'assets/projects/' + grade.id + '.jpg'}" data-title="${grade.project}" data-desc="${grade.projectDesc}">
                  <img src="${grade.projectImage || 'assets/projects/' + grade.id + '.jpg'}" alt="${grade.project}" class="capstone-project-img" loading="lazy">
                  <div class="capstone-img-overlay">
                    <span class="capstone-img-zoom-btn">
                      <i class="fas fa-search-plus mr-1"></i> ${t('mufredat.capstone.zoom', 'Projeyi Tam Boyut İncele')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ders Videosu & İnteraktif Atölye -->
          <div class="curriculum-video-box">
            <div class="video-box-left">
              <div class="video-box-play-icon">
                <i class="fas fa-play"></i>
              </div>
              <div>
                <h4 class="video-box-title">${grade.videoTitle}</h4>
                <p class="video-box-subtitle">${t('mufredat.video.subtitle', 'MEB ve Uğur Okulları standartlarında hazırlanmış uygulamalı örnek video dersi')}</p>
              </div>
            </div>
            <a href="${grade.videoUrl}" target="_blank" rel="noopener noreferrer" class="video-box-btn">
              <i class="fab fa-youtube mr-1"></i>
              <span>${t('mufredat.video.btn', 'Ders Videosunu İzle')}</span>
            </a>
          </div>

          <!-- İnteraktif 3 Soruluk Mini Bilgi Testi -->
          <div class="curriculum-quiz-card">
            <div class="quiz-card-header">
              <div class="mufredat-section-heading mb-0">
                <i class="fas fa-brain"></i>
                <span>${grade.shortLabel} ${t('mufredat.quiz.titleSuffix', 'İnteraktif Mini Bilgi Testi')}</span>
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="quiz-score-badge" id="quiz-score-display">0 / 3 ${t('mufredat.quiz.correct', 'Doğru')}</span>
                <button type="button" class="quiz-reset-btn ml-2" id="btn-reset-quiz">
                  <i class="fas fa-redo-alt mr-1"></i> ${t('mufredat.quiz.reset', 'Sıfırla')}
                </button>
              </div>
            </div>

            <div class="quiz-questions-wrapper">
              ${quizHtml}
            </div>
          </div>

          <!-- Önceki / Sonraki Sınıf Gezinme Çubuğu -->
          <div class="grade-nav-footer">
            ${prevGrade ? `
              <button type="button" class="grade-nav-footer-btn" id="btn-prev-grade">
                <i class="fas fa-arrow-left mr-2"></i>
                <span>${t('mufredat.nav.prev', 'Önceki:')} ${prevGrade.shortLabel}</span>
              </button>
            ` : `
              <span class="grade-nav-footer-btn disabled">
                <i class="fas fa-arrow-left mr-2"></i>
                <span>${t('mufredat.nav.first', 'İlk Sınıf Kademesi')}</span>
              </span>
            `}

            <div class="text-center font-weight-bold" style="color: var(--text-muted); font-size: 13px;">
              ${currentIndex + 1} / ${allKeys.length} ${t('mufredat.nav.level', 'Seviye')}
            </div>

            ${nextGrade ? `
              <button type="button" class="grade-nav-footer-btn" id="btn-next-grade">
                <span>${t('mufredat.nav.next', 'Sonraki:')} ${nextGrade.shortLabel}</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </button>
            ` : `
              <span class="grade-nav-footer-btn disabled">
                <span>${t('mufredat.nav.last', 'Son Sınıf Kademesi (12. Sınıf)')}</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </span>
            `}
          </div>

        </div>
      </div>
    `;

    // Wire up events inside the active grade card
    attachActiveGradeEvents(grade, prevKey, nextKey);
  }

  /**
   * Attach event listeners for actions inside the rendered active grade
   */
  function attachActiveGradeEvents(grade, prevKey, nextKey) {
    // Share Button
    const shareBtn = document.getElementById('btn-share-grade');
    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const url = window.location.href;
        const text = `${grade.gradeLabel} - ${t('mufredat.share.title', 'Uğur Okulları Viranşehir Kampüsü K12 Bilişim Müfredatı')}`;
        if (navigator.share) {
          try {
            await navigator.share({ title: text, text, url });
          } catch (err) {
            // Cancelled or unsupported
          }
        } else {
          // Fallback to clipboard
          navigator.clipboard.writeText(url).then(() => {
            const originalHtml = shareBtn.innerHTML;
            shareBtn.innerHTML = `<i class="fas fa-check text-success"></i> <span>${t('mufredat.share.copied', 'Kopyalandı!')}</span>`;
            setTimeout(() => { shareBtn.innerHTML = originalHtml; }, 2000);
          }).catch(() => {
            prompt(t('mufredat.share.title', 'Müfredat Bağlantısı:'), url);
          });
        }
      });
    }

    // Print Button
    const printBtn = document.getElementById('btn-print-grade');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Hero Banner Image Click for Full-Res Lightbox
    const heroBannerWrapper = document.querySelector('.active-grade-hero-banner-wrap');
    if (heroBannerWrapper) {
      heroBannerWrapper.addEventListener('click', () => {
        const imgUrl = grade.projectImage || `assets/projects/${grade.id}.jpg`;
        openProjectModal(imgUrl, grade.project, grade.projectDesc);
      });
      heroBannerWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const imgUrl = grade.projectImage || `assets/projects/${grade.id}.jpg`;
          openProjectModal(imgUrl, grade.project, grade.projectDesc);
        }
      });
    }

    // Capstone Image Click for Full-Res Lightbox
    const capstoneImgWrapper = document.querySelector('.capstone-image-wrapper');
    if (capstoneImgWrapper) {
      capstoneImgWrapper.addEventListener('click', () => {
        const imgUrl = grade.projectImage || `assets/projects/${grade.id}.jpg`;
        openProjectModal(imgUrl, grade.project, grade.projectDesc);
      });
      capstoneImgWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const imgUrl = grade.projectImage || `assets/projects/${grade.id}.jpg`;
          openProjectModal(imgUrl, grade.project, grade.projectDesc);
        }
      });
    }

    // Previous Grade Button
    const prevBtn = document.getElementById('btn-prev-grade');
    if (prevBtn && prevKey) {
      prevBtn.addEventListener('click', () => {
        selectGrade(prevKey, true, true);
      });
    }

    // Next Grade Button
    const nextBtn = document.getElementById('btn-next-grade');
    if (nextBtn && nextKey) {
      nextBtn.addEventListener('click', () => {
        selectGrade(nextKey, true, true);
      });
    }

    // Quiz Options Click Listeners
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.qIdx, 10);
        const optIdx = parseInt(btn.dataset.optIdx, 10);
        handleQuizAnswer(grade, qIdx, optIdx);
      });
    });

    // Quiz Reset Button
    const resetQuizBtn = document.getElementById('btn-reset-quiz');
    if (resetQuizBtn) {
      resetQuizBtn.addEventListener('click', () => {
        quizScores = {};
        renderActiveGrade(grade);
      });
    }
  }

  /**
   * Project Lightbox Modal Handlers
   */
  const projectModal = document.getElementById('project-modal');
  const projectModalImg = document.getElementById('project-modal-img');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalDesc = document.getElementById('project-modal-desc');
  const projectModalCloseBtn = document.getElementById('project-modal-close-btn');

  function openProjectModal(imgUrl, title, desc) {
    if (!projectModal) return;
    if (projectModalImg) {
      projectModalImg.src = imgUrl;
      projectModalImg.alt = title;
    }
    if (projectModalTitle) projectModalTitle.textContent = title;
    if (projectModalDesc) projectModalDesc.textContent = desc;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /**
   * Interactive Quiz Evaluation
   */
  function handleQuizAnswer(grade, qIdx, optIdx) {
    const question = grade.quiz[qIdx];
    if (!question) return;

    const block = document.getElementById(`quiz-block-${qIdx}`);
    if (!block) return;

    const buttons = block.querySelectorAll('.quiz-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.answer) {
        btn.classList.add('correct');
      } else if (idx === optIdx && optIdx !== question.answer) {
        btn.classList.add('wrong');
      }
    });

    // Show explanation box
    const explBox = document.getElementById(`quiz-expl-${qIdx}`);
    if (explBox) {
      explBox.classList.add('show');
    }

    // Save score
    quizScores[qIdx] = (optIdx === question.answer) ? 1 : 0;

    // Update total score display
    const scoreDisplay = document.getElementById('quiz-score-display');
    if (scoreDisplay) {
      const totalCorrect = Object.values(quizScores).reduce((a, b) => a + b, 0);
      if (totalCorrect === 3) {
        scoreDisplay.textContent = `3 / 3 🏆`;
        scoreDisplay.style.color = '#10B981';
      } else {
        scoreDisplay.textContent = `${totalCorrect} / 3 ${t('mufredat.quiz.correct', 'Doğru')}`;
      }
    }
  }

  /**
   * Render the 13 grades bottom overview grid with project images
   */
  function renderOverviewGrid() {
    if (!overviewGradesGrid) return;
    const allGrades = getAllGrades();

    overviewGradesGrid.innerHTML = '';

    Object.keys(allGrades).forEach(key => {
      const grade = allGrades[key];
      const isVisible = activeFilter === 'all' || grade.category === activeFilter;

      if (!isVisible) return;

      const card = document.createElement('a');
      card.href = `?sinif=${encodeURIComponent(key)}`;
      card.className = `overview-grade-mini-card ${key === activeGradeKey ? 'active' : ''}`;
      card.setAttribute('data-grade-key', key);

      const projImg = grade.projectImage || `assets/projects/${key}.jpg`;

      card.innerHTML = `
        <div class="overview-mini-card-img-wrap">
          <img src="${projImg}" alt="${grade.project}" class="overview-mini-card-img" loading="lazy">
          <span class="overview-mini-card-badge-floating">${grade.categoryLabel}</span>
        </div>
        <div class="mini-card-top">
          <div class="mini-card-icon" style="background: ${grade.themeColor};">
            <i class="${grade.icon}"></i>
          </div>
          <span class="mini-card-badge">${grade.age}</span>
        </div>
        <h4 class="mini-card-title">${grade.shortLabel}</h4>
        <p class="mini-card-sub">${grade.project}</p>
        <div class="mini-card-footer">
          <span><i class="fas fa-trophy mr-1"></i> ${t('mufredat.capstone.badge', 'Dönem Projesi')}</span>
          <span>${t('mufredat.grid.btn', 'Müfredatı İncele')} <i class="fas fa-arrow-right ml-1"></i></span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        e.preventDefault();
        selectGrade(key, true, true);
      });

      overviewGradesGrid.appendChild(card);
    });
  }

  /**
   * Initialize Controller
   */
  function init() {
    // Parse URL params (?sinif= or ?kademe=)
    parseUrlParams();

    // Bind Stage Tab Buttons (All, Okul Öncesi, İlkokul, Ortaokul, Lise)
    stageTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter) setStageFilter(filter);
      });
    });

    // Initial render of the active grade
    selectGrade(activeGradeKey, false, false);

    // Sync Stage Filter UI
    const allGrades = getAllGrades();
    const initialGrade = allGrades[activeGradeKey];
    if (initialGrade && activeFilter !== 'all') {
      setStageFilter(initialGrade.category);
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      parseUrlParams();
      selectGrade(activeGradeKey, false, true);
    });

    // Project Lightbox Modal Close Listeners
    if (projectModalCloseBtn) {
      projectModalCloseBtn.addEventListener('click', closeProjectModal);
    }
    if (projectModal) {
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
          closeProjectModal();
        }
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
        closeProjectModal();
      }
    });

    // Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
      }, { passive: true });
    }

    // Reactive Language Change Listener
    window.addEventListener('languageChanged', () => {
      const gradeData = getGradeData(activeGradeKey);
      if (gradeData) {
        const campusTitle = t('nav.brand.name', 'Uğur Okulları');
        const campusSub = t('nav.brand.campus', 'Viranşehir Kampüsü');
        document.title = `${gradeData.gradeLabel} | ${campusTitle} ${campusSub}`;
        renderBreadcrumbs(gradeData);
        renderGradePills();
        renderActiveGrade(gradeData);
        renderOverviewGrid();
      }
    });
  }

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
