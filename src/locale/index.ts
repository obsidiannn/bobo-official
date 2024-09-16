import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en_US.json';
import zhCN from './zh_CN.json';

const resources = {
  'en-US': {
    translation: enUS,
  },
  'zh-CN': {
    translation: zhCN,
  },
};

export const options = [
  { k: 'en-US', v: 'English' },
  { k: 'zh-CN', v: '简体中文' }
]

i18n.use(initReactI18next).init({
  resources,
  // lng: 'zh-CN',
  lng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
