import type { Language } from "@/lib/i18n";

export type ThearRealmCaseCopy = {
  /** Main section title — shown in ALL CAPS */
  caseStudioHeading: string;
  /** Intro line: client work from supplied materials */
  materialsIntro: string;
  projectEyebrow: string;
  sectionTitle: string;
  intro: string;
  /** Clickable client strip — scrolls to gallery + video */
  clientLinkLabel: string;
  toolsClosing: string;
  videoAriaLabel: string;
};

const sr: ThearRealmCaseCopy = {
  caseStudioHeading: "CASE STUDIO",
  materialsIntro:
    "Projekti koje sam uradio za klijente od materijala koji mi je dostavljen.",
  projectEyebrow: "Istaknuti projekat",
  sectionTitle: "THEAR REALM TV — od fotografija do promotivnog video klipa",
  intro:
    "Radio sam kratak video klip za klijenta koji je prikupljao donacije na Kickstarter platformi. Reč je o web televiziji THEAR REALM TV — televiziji koja se brine o mačkama lutalicama: tim putuje zemljama trećeg sveta, pronalazi mačke lutalice i zbrinjava ih hranom, lekovima i smeštajem. Od dostavljenih fotografija mačaka kreirao sam video klip za web televiziju THEAR REALM TV.",
  clientLinkLabel: "KLIJENT IZ WEB TV : THEAR REALM TV",
  toolsClosing:
    "Ovo je rezultat mog rada u Adobe Premiere Pro, After Effects i Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — video klip za Kickstarter kampanju",
};

const en: ThearRealmCaseCopy = {
  caseStudioHeading: "CASE STUDIO",
  materialsIntro: "Projects I created for clients using the materials they provided.",
  projectEyebrow: "Featured project",
  sectionTitle: "THEAR REALM TV — from photos to a promotional video clip",
  intro:
    "I produced a short video for a client raising donations on Kickstarter. THEAR REALM TV is a web television dedicated to stray cats: the team travels through developing countries, finds strays, and cares for them with food, medicine, and shelter. Using the cat photos provided by the client, I created this video clip for the THEAR REALM TV web television.",
  clientLinkLabel: "WEB TV CLIENT: THEAR REALM TV",
  toolsClosing:
    "This is the outcome of my work in Adobe Premiere Pro, After Effects, and Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — Kickstarter campaign video clip",
};

const de: ThearRealmCaseCopy = {
  caseStudioHeading: "CASE STUDIO",
  materialsIntro:
    "Projekte, die ich für Kunden aus den mir bereitgestellten Materialien umgesetzt habe.",
  projectEyebrow: "Hervorgehobenes Projekt",
  sectionTitle: "THEAR REALM TV — von Fotos zum Werbevideo",
  intro:
    "Ich habe einen kurzen Videoclip für einen Kunden erstellt, der auf Kickstarter Spenden sammelte. THEAR REALM TV ist ein Web-TV mit Fokus auf streunende Katzen: Das Team reist durch Länder des globalen Südens, findet Streunerkatzen und versorgt sie mit Futter, Medikamenten und Unterkunft. Aus den zur Verfügung gestellten Katzenfotos entstand dieser Videoclip für das Web-TV THEAR REALM TV.",
  clientLinkLabel: "WEB-TV-KUNDE: THEAR REALM TV",
  toolsClosing:
    "Das ist das Ergebnis meiner Arbeit mit Adobe Premiere Pro, After Effects und Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — Videoclip für die Kickstarter-Kampagne",
};

const it: ThearRealmCaseCopy = {
  caseStudioHeading: "CASE STUDIO",
  materialsIntro:
    "Progetti realizzati per i clienti a partire dal materiale che mi è stato fornito.",
  projectEyebrow: "Progetto in evidenza",
  sectionTitle: "THEAR REALM TV — dalle foto al video promozionale",
  intro:
    "Ho realizzato un breve video per un cliente che raccoglieva donazioni su Kickstarter. THEAR REALM TV è una web television dedicata ai gatti randagi: il team viaggia nei Paesi in via di sviluppo, trova i gatti e li assiste con cibo, medicine e alloggio. Dalle foto dei gatti fornite dal cliente ho creato questo video per la web TV THEAR REALM TV.",
  clientLinkLabel: "CLIENTE WEB TV: THEAR REALM TV",
  toolsClosing:
    "Questo è il risultato del mio lavoro con Adobe Premiere Pro, After Effects e Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — video per la campagna Kickstarter",
};

const al: ThearRealmCaseCopy = {
  caseStudioHeading: "CASE STUDIO",
  materialsIntro:
    "Projekte që kam realizuar për klientët duke përdorur materialet që më janë dhënë.",
  projectEyebrow: "Projekt i veçuar",
  sectionTitle: "THEAR REALM TV — nga fotot në klip promovues",
  intro:
    "Krijova një klip të shkurtër video për një klient që mblidhte donacione në Kickstarter. THEAR REALM TV është një televizion në internet për macet endacake: stafi udhëton në vendet në zhvillim, i gjen macet dhe i përkujdeset me ushqim, ilaçe dhe strehim. Nga fotografitë e macave që më dhanë, krijova këtë klip për televizionin në internet THEAR REALM TV.",
  clientLinkLabel: "KLIENT NGA WEB TV: THEAR REALM TV",
  toolsClosing:
    "Ky është rezultati i punës time në Adobe Premiere Pro, After Effects dhe Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — klip video për fushatën Kickstarter",
};

const byLang: Record<string, ThearRealmCaseCopy> = {
  sr,
  en,
  de,
  it,
  al,
  sq: al,
};

export function getThearRealmCaseCopy(language: Language): ThearRealmCaseCopy {
  return byLang[language] ?? en;
}
