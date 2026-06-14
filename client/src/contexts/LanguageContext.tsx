import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { Language, getTranslations, Translations } from '@/lib/i18n';
import { getSpecTranslations, SpecTranslations } from '@/lib/specTranslations';

const SUPPORTED_LANGS: Language[] = ['de', 'en'];

function normalizeLang(raw: string | null): Language {
  if (raw === 'en') return 'en';
  return 'de';
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  tSpec: SpecTranslations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('de');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const paramLang = params.get('lang');
      if (paramLang) {
        const lang = normalizeLang(paramLang);
        if (paramLang !== lang) {
          params.set('lang', lang);
          const next = `${window.location.pathname}${params.toString() ? `?${params}` : ''}${window.location.hash}`;
          window.history.replaceState({}, '', next);
        }
        setCurrentLanguage(lang);
        return;
      }

      const saved = localStorage.getItem('preferred-language');
      if (saved && SUPPORTED_LANGS.includes(saved as Language)) {
        setCurrentLanguage(saved as Language);
      } else {
        const browserLang = navigator.language.toLowerCase();
        setCurrentLanguage(browserLang.startsWith('en') ? 'en' : 'de');
      }
    } catch (error) {
      console.warn('Error loading language preference:', error);
      setCurrentLanguage('de');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = useCallback((lang: Language) => {
    try {
      setCurrentLanguage(lang);
      localStorage.setItem('preferred-language', lang);
      document.documentElement.lang = lang;
    } catch (error) {
      console.warn('Error setting language:', error);
    }
  }, []);

  const t = useMemo(() => getTranslations(currentLanguage), [currentLanguage]);
  const tSpec = useMemo(() => getSpecTranslations(currentLanguage), [currentLanguage]);

  const contextValue = useMemo(() => ({
    currentLanguage,
    setLanguage,
    t,
    tSpec
  }), [currentLanguage, setLanguage, t, tSpec]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { LanguageContext };
