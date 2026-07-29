/**
 * Verified-style Google Maps quotes for the homepage Bewertungen block.
 * Bodies stay in the clients’ original wording (mostly German).
 */
/**
 * Official Google Business Profile (place) URL for citations and CTA.
 * Tracking query params (?entry=, g_ep=) omitted for cleaner sharing.
 */
export const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/AGR+Multimedia+%7C+Webdesign+%26+AI+Marketing/@48.6217874,9.8433275,17z/data=!3m1!4b1!4m6!3m5!1s0x47990bb63e9699f3:0xd611239686a8c092!8m2!3d48.6217839!4d9.8459024!16s%2Fg%2F11nc1f71_v";

/** @deprecated Use GOOGLE_MAPS_PLACE_URL — kept as alias for blockquote `cite` + JSON-LD */
export const GOOGLE_MAPS_REVIEWS_CITE = GOOGLE_MAPS_PLACE_URL;

export interface AgrGoogleReview {
  author: string;
  text: string;
  rating: number;
  platform: "Google Maps";
}

export const AGR_GOOGLE_REVIEWS: AgrGoogleReview[] = [
  {
    author: "Toni's Autopflege - Göppingen",
    text: "Sehr sehr sehr sehr zufrieden Leute ich kann echt vom Herzen weiterempfehlen 5 vom 5",
    rating: 5,
    platform: "Google Maps",
  },
  {
    author: "Shopping Deals",
    text:
      "Ich war bei Agron Multimedia und hatte ein sehr angenehmes und produktives Gespräch. Wir haben über kommende Projekte gesprochen und bereits konkrete Pläne für meine Webseite festgelegt. Die Beratung war professionell, verständlich und genau auf meine Wünsche abgestimmt. Ich kann Agron Multimedia auf jeden Fall weiterempfehlen und freue mich auf die kommende Zusammenarbeit.",
    rating: 5,
    platform: "Google Maps",
  },
  {
    author: "theirrealmtv CAT",
    text:
      "AGRMULTIMEDIA hat uns in sehr kurzer Zeit ein wunderschönes Video für unsere Kickstarter-Kampagne erstellt. Sehr kosteneffizient. Eine klare Empfehlung für Geislingen und Umgebung.",
    rating: 5,
    platform: "Google Maps",
  },
];
