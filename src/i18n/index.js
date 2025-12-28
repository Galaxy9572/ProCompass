import { createI18n } from 'vue-i18n';
import zhHans from './locales/zh-Hans.json';
import zhHant from './locales/zh-Hant.json';
import en from './locales/en.json';
import ja from './locales/ja.json';

const messages = {
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  'en': en,
  'ja': ja,
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh-Hans',
  fallbackLocale: 'zh-Hans',
  messages,
});

export default i18n;
