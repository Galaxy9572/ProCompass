<template>
  <div class="privacy-page">
    <!-- Header -->
    <header class="header">
      <div class="title">
        <h1>{{ $t('header.title') }}</h1>
        <p class="subtitle">{{ $t('header.lastUpdated') }}</p>
      </div>
      <div class="controls">
        <div class="theme-selector">
          <label class="theme-label">{{ $t('header.themeLabel') }}</label>
          <button
            class="theme-toggle"
            @click="$emit('toggle-theme')"
            :aria-label="$t('header.themeToggle')"
            :title="getThemeLabel()"
          >
            <svg v-if="theme === 'light'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg v-else-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              <path d="M12 8v8"/>
            </svg>
            <span class="theme-label-text">{{ getThemeLabel() }}</span>
          </button>
        </div>
        <div class="lang-selector">
          <label for="lang-select" class="lang-label">{{ $t('header.languageLabel') }}</label>
          <select id="lang-select" v-model="$i18n.locale" class="lang-select">
            <option value="zh-Hans">简体中文</option>
            <option value="zh-Hant">繁體中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </header>

    <!-- Main Content Layout -->
    <div class="content-layout">
      <!-- Table of Contents -->
      <aside class="toc">
        <p class="toc-title">{{ $t('toc.title') }}</p>
        <ul class="toc-list">
          <li><a href="#collection">{{ $t('toc.links.collection') }}</a></li>
          <li><a href="#usage">{{ $t('toc.links.usage') }}</a></li>
          <li><a href="#thirdParty">{{ $t('toc.links.thirdParty') }}</a></li>
          <li><a href="#permissions">{{ $t('toc.links.permissions') }}</a></li>
          <li><a href="#security">{{ $t('toc.links.security') }}</a></li>
          <li><a href="#choices">{{ $t('toc.links.choices') }}</a></li>
          <li><a href="#children">{{ $t('toc.links.children') }}</a></li>
          <li><a href="#updates">{{ $t('toc.links.updates') }}</a></li>
          <li><a href="#contact">{{ $t('toc.links.contact') }}</a></li>
        </ul>
      </aside>

      <!-- Content Card -->
      <main class="content-wrapper">
        <article class="card">
          <p class="intro">{{ $t('content.intro') }}</p>

          <!-- Section 1: Data Collection -->
          <section id="collection" class="section">
            <h2>{{ $t('content.sections.collection.title') }}</h2>

            <h3>{{ $t('content.sections.collection.device.title') }}</h3>
            <ul>
              <li>{{ $t('content.sections.collection.device.items[0]') }}</li>
              <li>{{ $t('content.sections.collection.device.items[1]') }}</li>
            </ul>

            <h3>{{ $t('content.sections.collection.location.title') }}</h3>
            <ul>
              <li>{{ $t('content.sections.collection.location.items[0]') }}</li>
              <li>{{ $t('content.sections.collection.location.items[1]') }}</li>
            </ul>

            <h3>{{ $t('content.sections.collection.sensor.title') }}</h3>
            <ul>
              <li>{{ $t('content.sections.collection.sensor.items[0]') }}</li>
            </ul>

            <h3>{{ $t('content.sections.collection.ads.title') }}</h3>
            <ul>
              <li>{{ $t('content.sections.collection.ads.items[0]') }}</li>
              <li>{{ $t('content.sections.collection.ads.items[1]') }}</li>
            </ul>
          </section>

          <!-- Section 2: Data Usage -->
          <section id="usage" class="section">
            <h2>{{ $t('content.sections.usage.title') }}</h2>
            <ul>
              <li>{{ $t('content.sections.usage.items[0]') }}</li>
              <li>{{ $t('content.sections.usage.items[1]') }}</li>
              <li>{{ $t('content.sections.usage.items[2]') }}</li>
            </ul>
          </section>

          <!-- Section 3: Third Party -->
          <section id="thirdParty" class="section">
            <h2>{{ $t('content.sections.thirdParty.title') }}</h2>
            <p>{{ $t('content.sections.thirdParty.intro') }}</p>
            <ul>
              <li>{{ $t('content.sections.thirdParty.services[0]') }}</li>
              <li>{{ $t('content.sections.thirdParty.services[1]') }}</li>
            </ul>
            <p>
              {{ $t('content.sections.thirdParty.privacyLink') }}
              <a :href="$t('content.sections.thirdParty.privacyUrl')" target="_blank" rel="noopener">
                {{ $t('content.sections.thirdParty.privacyUrl') }}
              </a>
            </p>
          </section>

          <!-- Section 4: Permissions -->
          <section id="permissions" class="section">
            <h2>{{ $t('content.sections.permissions.title') }}</h2>
            <ul>
              <li>{{ $t('content.sections.permissions.items[0]') }}</li>
              <li>{{ $t('content.sections.permissions.items[1]') }}</li>
              <li>{{ $t('content.sections.permissions.items[2]') }}</li>
            </ul>
          </section>

          <!-- Section 5: Security -->
          <section id="security" class="section">
            <h2>{{ $t('content.sections.security.title') }}</h2>
            <p>{{ $t('content.sections.security.text') }}</p>
          </section>

          <!-- Section 6: Choices -->
          <section id="choices" class="section">
            <h2>{{ $t('content.sections.choices.title') }}</h2>
            <ul>
              <li>{{ $t('content.sections.choices.items[0]') }}</li>
              <li>{{ $t('content.sections.choices.items[1]') }}</li>
            </ul>
          </section>

          <!-- Section 7: Children -->
          <section id="children" class="section">
            <h2>{{ $t('content.sections.children.title') }}</h2>
            <p>{{ $t('content.sections.children.text') }}</p>
          </section>

          <!-- Section 8: Updates -->
          <section id="updates" class="section">
            <h2>{{ $t('content.sections.updates.title') }}</h2>
            <p>{{ $t('content.sections.updates.text') }}</p>
          </section>

          <!-- Section 9: Contact -->
          <section id="contact" class="section">
            <h2>{{ $t('content.sections.contact.title') }}</h2>
            <p>{{ $t('content.sections.contact.intro') }}</p>
            <ul>
              <li>{{ $t('content.sections.contact.operator') }}{{ $t('contact.name') }}</li>
              <li>{{ $t('content.sections.contact.email') }}{{ $t('contact.email') }}</li>
            </ul>
          </section>

          <footer class="footer">
            <p>{{ $t('footer.copyright') }}</p>
          </footer>
        </article>
      </main>
    </div>

    <!-- Back to Top Button -->
    <button
      class="back-to-top"
      :class="{ visible: showBackToTop }"
      :aria-label="$t('backToTop')"
      @click="scrollToTop"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Props
const props = defineProps({
  theme: {
    type: String,
    default: 'auto'
  }
});

// Emits
defineEmits(['toggle-theme']);

const showBackToTop = ref(false);

// Get theme label
function getThemeLabel() {
  if (props.theme === 'light') {
    return t('header.themeModes.light');
  } else if (props.theme === 'dark') {
    return t('header.themeModes.dark');
  } else {
    return t('header.themeModes.auto');
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleAnchorClick);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleAnchorClick);
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle scroll for back to top button
function handleScroll() {
  showBackToTop.value = window.pageYOffset > 300;
}

// Smooth scroll to anchor
function handleAnchorClick(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
</script>

<style scoped>
.privacy-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px 80px;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Header */
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.title {
  flex: 1;
  line-height: 1.3;
  min-width: 0;
}

.title h1 {
  font-size: clamp(24px, 5vw, 36px);
  margin: 0 0 8px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.subtitle {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}

.controls {
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: flex-start;
  flex-shrink: 0;
}

.theme-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-label {
  font-size: 14px;
  font-weight: 500;
}

.theme-toggle {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink-1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: var(--shadow);
  transition: all 200ms ease;
  font-size: 14px;
  min-width: 110px;
}

.theme-label-text {
  white-space: nowrap;
}

.theme-toggle:hover {
  border-color: var(--accent);
}

.theme-toggle:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.theme-toggle:active {
  transform: scale(0.98);
}

.lang-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-label {
  font-size: 14px;
  font-weight: 500;
}

.lang-select {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--card);
  font-size: 14px;
  color: var(--ink-1);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 200ms ease;
}

.lang-select:hover {
  border-color: var(--accent);
}

.lang-select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

/* Main Content Layout */
.content-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* Table of Contents */
.toc {
  flex-shrink: 0;
  width: 200px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px;
  position: sticky;
  top: 24px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}

.toc-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.toc-list a {
  font-size: 13px;
  color: var(--accent);
  text-decoration: none;
  transition: opacity 200ms;
  display: block;
  padding: 4px 0;
}

.toc-list a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Content Card */
.content-wrapper {
  flex: 1;
  min-width: 0;
}

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 28px;
}

.intro {
  margin-bottom: 24px;
  line-height: 1.7;
}

.section {
  margin-top: 24px;
}

h2 {
  margin: 0 0 12px;
  font-size: 20px;
  letter-spacing: 0.2px;
}

h3 {
  margin: 18px 0 8px;
  font-size: 16px;
}

p {
  margin: 8px 0 0;
  line-height: 1.7;
}

ul {
  margin: 8px 0 0;
  padding-left: 18px;
  line-height: 1.7;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.footer {
  margin-top: 28px;
  font-size: 12px;
  opacity: 0.8;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  border: none;
  box-shadow: var(--shadow);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;
  z-index: 100;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 900px) {
  .content-layout {
    flex-direction: column;
  }

  .toc {
    width: 100%;
    position: static;
    max-height: none;
    margin-bottom: 24px;
  }

  .toc-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 16px;
  }
}

@media (max-width: 720px) {
  .card { padding: 22px; }
  .controls {
    width: 100%;
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  .theme-selector,
  .lang-selector {
    justify-content: center;
  }
  .theme-toggle {
    width: 100%;
  }
  .title h1 { font-size: clamp(20px, 6vw, 28px); }
  .back-to-top { bottom: 16px; right: 16px; }
}

@media (min-width: 1024px) {
  .header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  .controls { align-self: flex-end; }
  .title h1 { font-size: clamp(28px, 3vw, 36px); }
}

/* Print Styles */
@media print {
  .controls, .toc, .back-to-top { display: none !important; }
  .card { border: none; box-shadow: none; padding: 0; }
  a { color: black; text-decoration: underline; }
  .privacy-page { padding: 0; }
  .content-layout { display: block; }
}
</style>
