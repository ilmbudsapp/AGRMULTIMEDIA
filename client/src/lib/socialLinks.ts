/** Central social / entity URLs — keep in sync with Organization & Person JSON-LD sameAs. */
export const FACEBOOK_URL = "https://www.facebook.com/halidosmani74";
export const INSTAGRAM_URL = "https://www.instagram.com/agrondesign/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/agron-osmani-228947266/";
export const YOUTUBE_URL = "https://www.youtube.com/@AGRMultimedia";
export const WHATSAPP_URL = "https://wa.me/4915560873124";

export const PERSON_SAME_AS = [
  LINKEDIN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  WHATSAPP_URL,
] as const;

export const ORGANIZATION_SAME_AS = [
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  WHATSAPP_URL,
] as const;
