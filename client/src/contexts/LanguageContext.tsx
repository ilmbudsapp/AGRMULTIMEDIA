import { createContext, useContext, useState, useEffect } from 'react';
import { Language, getTranslations, Translations } from '@/lib/i18n';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('sr');

  useEffect(() => {
    // Load language from localStorage or browser preference
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && ['sr', 'en', 'de', 'sq'].includes(saved)) {
      setCurrentLanguage(saved);
    } else {
      // Try to detect from browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes('en')) setCurrentLanguage('en');
      else if (browserLang.includes('de')) setCurrentLanguage('de');
      else if (browserLang.includes('sq')) setCurrentLanguage('sq');
      else setCurrentLanguage('sr'); // Default fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = lang;
  };

  const t = getTranslations(currentLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}