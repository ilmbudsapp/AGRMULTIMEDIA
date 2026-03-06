import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { Language, getTranslations, Translations } from '@/lib/i18n';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('sr');

  useEffect(() => {
    try {
      // Load language from localStorage or browser preference
      const saved = localStorage.getItem('preferred-language') as Language;
      if (saved && ['sr', 'en', 'de', 'sq', 'it'].includes(saved)) {
        setCurrentLanguage(saved);
      } else {
        // Try to detect from browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('en')) setCurrentLanguage('en');
        else if (browserLang.includes('de')) setCurrentLanguage('de');
        else if (browserLang.includes('it')) setCurrentLanguage('it');
        else if (browserLang.includes('sq')) setCurrentLanguage('sq');
        else setCurrentLanguage('sr'); // Default fallback
      }
    } catch (error) {
      console.warn('Error loading language preference:', error);
      setCurrentLanguage('sr');
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    try {
      setCurrentLanguage(lang);
      localStorage.setItem('preferred-language', lang);
      
      // Update HTML lang attribute for accessibility and SEO
      document.documentElement.lang = lang;
    } catch (error) {
      console.warn('Error setting language:', error);
    }
  }, []);

  const t = useMemo(() => getTranslations(currentLanguage), [currentLanguage]);

  const contextValue = useMemo(() => ({
    currentLanguage,
    setLanguage,
    t
  }), [currentLanguage, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Standard function export for better HMR compatibility
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Also export the context for advanced use cases
export { LanguageContext };