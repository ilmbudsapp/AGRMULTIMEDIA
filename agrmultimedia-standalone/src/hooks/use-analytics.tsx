import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';
import { hasAnalyticsConsent } from '../lib/consent';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      if (hasAnalyticsConsent()) trackPageView(location);
      prevLocationRef.current = location;
    }
  }, [location]);
};
