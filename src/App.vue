<template>
  <div id="app" :data-theme="theme">
    <PrivacyView :theme="theme" @toggle-theme="toggleTheme" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import PrivacyView from './components/PrivacyView.vue';

// Theme state: 'light', 'dark', or 'auto'
const theme = ref('auto');

// Initialize theme from localStorage or default to auto
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
    theme.value = savedTheme;
  } else {
    theme.value = 'auto';
  }
  applyTheme();
});

// Watch for theme changes
watch(theme, () => {
  localStorage.setItem('theme', theme.value);
  applyTheme();
});

// Toggle theme
function toggleTheme() {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else if (theme.value === 'dark') {
    theme.value = 'auto';
  } else {
    theme.value = 'light';
  }
}

// Apply theme to document
function applyTheme() {
  const root = document.documentElement;

  if (theme.value === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme.value);
  }
}
</script>

<style>
/* Light Mode (Default) */
:root {
  --bg-1: #f4f7fb;
  --bg-2: #eef2f8;
  --ink-1: #1f2a33;
  --ink-2: #4b5a67;
  --accent: #2f7f7a;
  --accent-soft: #e4f2f1;
  --card: #ffffff;
  --line: #e5e9f0;
  --shadow: 0 12px 30px rgba(28, 38, 45, 0.08);
  --bg-gradient-1: #e7f1ff;
  --bg-gradient-2: #e7f7f4;
}

/* Dark Mode (System Preference) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-1: #1a1f2e;
    --bg-2: #121620;
    --ink-1: #e4e9f0;
    --ink-2: #a0aab8;
    --accent: #4db8b3;
    --accent-soft: #1a3a38;
    --card: #242936;
    --line: #3a4050;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    --bg-gradient-1: #1a2a3a;
    --bg-gradient-2: #1a3a35;
  }
}

/* Dark Mode (Manual) */
:root[data-theme="dark"] {
  --bg-1: #1a1f2e;
  --bg-2: #121620;
  --ink-1: #e4e9f0;
  --ink-2: #a0aab8;
  --accent: #4db8b3;
  --accent-soft: #1a3a38;
  --card: #242936;
  --line: #3a4050;
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  --bg-gradient-1: #1a2a3a;
  --bg-gradient-2: #1a3a35;
}

/* Light Mode (Manual Override) */
:root[data-theme="light"] {
  --bg-1: #f4f7fb;
  --bg-2: #eef2f8;
  --ink-1: #1f2a33;
  --ink-2: #4b5a67;
  --accent: #2f7f7a;
  --accent-soft: #e4f2f1;
  --card: #ffffff;
  --line: #e5e9f0;
  --shadow: 0 12px 30px rgba(28, 38, 45, 0.08);
  --bg-gradient-1: #e7f1ff;
  --bg-gradient-2: #e7f7f4;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", sans-serif;
  color: var(--ink-1);
  background: radial-gradient(1200px 600px at 10% -20%, var(--bg-gradient-1) 0%, transparent 55%),
              radial-gradient(900px 500px at 100% 0%, var(--bg-gradient-2) 0%, transparent 60%),
              linear-gradient(180deg, var(--bg-1), var(--bg-2));
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
}
</style>
