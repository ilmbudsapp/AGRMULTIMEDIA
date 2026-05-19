import type { ServiceLang } from "@/lib/servicePageI18n";

export const REINIGUNG_ASSET_BASE = "/portfolio/reinigung";
export const REINIGUNG_HERO_IMG = `${REINIGUNG_ASSET_BASE}/07-in-arbeit.jpg`;

const PHOTO_FILES = [
  "01-vorher-nachher.jpg",
  "02-vorher-nachher.jpg",
  "03-reinigungsprodukte.jpg",
  "04-teppich-vorher-nachher.jpg",
  "05-autositz-vorher-nachher.jpg",
  "06-sofa-wohnung.jpg",
] as const;

const VIDEO_FILES = [
  { file: "video-01-teppich-polster.mp4", key: "v1" },
  { file: "video-02-moebel-auto.mp4", key: "v2" },
  { file: "video-03-vorher-nachher.mp4", key: "v3" },
] as const;

type PhotoAlts = Record<(typeof PHOTO_FILES)[number], Record<ServiceLang, string>>;
type VideoAlts = Record<(typeof VIDEO_FILES)[number]["key"], Record<ServiceLang, string>>;

const photoAlts: PhotoAlts = {
  "01-vorher-nachher.jpg": {
    en: "Before and after — professional deep cleaning",
    de: "Vorher und nachher — professionelle Tiefenreinigung",
    it: "Prima e dopo — pulizia profonda professionale",
    sr: "Pre i posle — profesionalno dubinsko čišćenje",
    al: "Para dhe pas — pastrim profesional i thellë",
  },
  "02-vorher-nachher.jpg": {
    en: "Before and after — thorough interior cleaning",
    de: "Vorher und nachher — gründliche Innenreinigung",
    it: "Prima e dopo — pulizia interna accurata",
    sr: "Pre i posle — temeljno unutrašnje čišćenje",
    al: "Para dhe pas — pastrim i plotë i brendshëm",
  },
  "03-reinigungsprodukte.jpg": {
    en: "Professional cleaning products in use",
    de: "Professionelle Reinigungsprodukte im Einsatz",
    it: "Prodotti professionali per la pulizia in uso",
    sr: "Profesionalni proizvodi za čišćenje u upotrebi",
    al: "Produkte profesionale pastrimi në përdorim",
  },
  "04-teppich-vorher-nachher.jpg": {
    en: "Carpet cleaning — before and after",
    de: "Teppichreinigung — Vorher und Nachher",
    it: "Pulizia tappeti — prima e dopo",
    sr: "Čišćenje tepiha — pre i posle",
    al: "Pastrim qilimash — para dhe pas",
  },
  "05-autositz-vorher-nachher.jpg": {
    en: "Car seat cleaning — before and after",
    de: "Autositz-Reinigung — Vorher und Nachher",
    it: "Pulizia sedili auto — prima e dopo",
    sr: "Čišćenje auto sedišta — pre i posle",
    al: "Pastrim sediljesh auto — para dhe pas",
  },
  "06-sofa-wohnung.jpg": {
    en: "Sofa and home interior cleaning",
    de: "Reinigung von Sofa und Wohnung",
    it: "Pulizia divano e ambiente domestico",
    sr: "Čišćenje sofe i stana",
    al: "Pastrim divani dhe ambientit të shtëpisë",
  },
};

const videoAlts: VideoAlts = {
  v1: {
    en: "Professional carpet and upholstery cleaning",
    de: "Professionelle Reinigung von Teppichen & Polstermöbeln",
    it: "Pulizia professionale di tappeti e tessuti",
    sr: "Profesionalno čišćenje tepiha i tapaciranog nameštaja",
    al: "Pastrim profesional i qilimave dhe tapicerisë",
  },
  v2: {
    en: "Furniture and car interior — like new again",
    de: "Möbel und Auto wieder wie neu",
    it: "Mobili e auto di nuovo come nuovi",
    sr: "Nameštaj i auto — ponovo kao novi",
    al: "Mobilje dhe auto — sërish si të reja",
  },
  v3: {
    en: "Before and after — video",
    de: "Vorher und nachher — Video",
    it: "Prima e dopo — video",
    sr: "Pre i posle — video",
    al: "Para dhe pas — video",
  },
};

export type PortfolioMediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string; poster?: string };

export function reinigungPortfolioMediaByLang(lang: ServiceLang): PortfolioMediaItem[] {
  const photos: PortfolioMediaItem[] = PHOTO_FILES.map((file) => ({
    kind: "image" as const,
    src: `${REINIGUNG_ASSET_BASE}/${file}`,
    alt: photoAlts[file][lang],
  }));

  const videos: PortfolioMediaItem[] = VIDEO_FILES.map(({ file, key }) => ({
    kind: "video" as const,
    src: `${REINIGUNG_ASSET_BASE}/${file}`,
    alt: videoAlts[key][lang],
  }));

  return [...photos, ...videos];
}

export const reinigungHeroAltByLang: Record<ServiceLang, string> = {
  en: "Professional deep cleaning in action — upholstery steam cleaning",
  de: "Professionelle Tiefenreinigung in Aktion — Polster mit Dampfreiniger",
  it: "Pulizia profonda professionale in azione — tessuti con vapore",
  sr: "Profesionalno dubinsko čišćenje u toku — parom na tapaciranom nameštaju",
  al: "Pastrim profesional në veprim — tapiceri me avull",
};
