import type { Language } from "@/lib/i18n";

export type ThearRealmCaseCopy = {
  /** Outer section name */
  caseStudioHeading: string;
  /** Intro under Case Studio */
  materialsIntro: string;
  /** Inner subsection title */
  innerSectionHeading: string;
  intro: string;
  clientLinkLabel: string;
  toolsClosing: string;
  videoAriaLabel: string;
};

const sr: ThearRealmCaseCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekti koje sam uradio za klijente od materijala koji mi je dostavljen.",
  innerSectionHeading: "PROJEKAT ZA THEAR REALM TV",
  intro:
    "Radio sam kratak video klip za klijenta koji je prikupljao donacije na Kickstarter platformi. Reč je o web televiziji THEAR REALM TV — televiziji koja se brine o mačkama lutalicama: tim putuje zemljama trećeg sveta, pronalazi mačke lutalice i zbrinjava ih hranom, lekovima i smeštajem. Od dostavljenih fotografija mačaka kreirao sam video klip za web televiziju THEAR REALM TV. Ovaj klip je 50% uticao, pa je klijent prikupio potrebne donacije na Kickstarteru da realizuje svoj projekat.",
  clientLinkLabel: "KLIJENT IZ WEB TV : THEAR REALM TV",
  toolsClosing:
    "Ovo je rezultat mog rada u Adobe Premiere Pro, After Effects i Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — video klip za Kickstarter kampanju",
};

const en: ThearRealmCaseCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro: "Projects I created for clients using the materials they provided.",
  innerSectionHeading: "PROJECT FOR THEAR REALM TV",
  intro:
    "I produced a short video for a client raising donations on Kickstarter. THEAR REALM TV is a web television dedicated to stray cats: the team travels through developing countries, finds strays, and cares for them with food, medicine, and shelter. Using the cat photos provided by the client, I created this video clip for the THEAR REALM TV web television. This clip contributed about 50% to the outcome: the client raised the donations needed on Kickstarter to deliver the project.",
  clientLinkLabel: "WEB TV CLIENT: THEAR REALM TV",
  toolsClosing:
    "This is the outcome of my work in Adobe Premiere Pro, After Effects, and Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — Kickstarter campaign video clip",
};

const de: ThearRealmCaseCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekte, die ich für Kunden aus den mir bereitgestellten Materialien umgesetzt habe.",
  innerSectionHeading: "PROJEKT FÜR THEAR REALM TV",
  intro:
    "Ich habe einen kurzen Videoclip für einen Kunden erstellt, der auf Kickstarter Spenden sammelte. THEAR REALM TV ist ein Web-TV mit Fokus auf streunende Katzen: Das Team reist durch Länder des globalen Südens, findet Streunerkatzen und versorgt sie mit Futter, Medikamenten und Unterkunft. Aus den zur Verfügung gestellten Katzenfotos entstand dieser Videoclip für das Web-TV THEAR REALM TV. Dieser Clip trug zu etwa 50 % bei: Der Kunde sammelte auf Kickstarter die nötigen Spenden, um sein Projekt umzusetzen.",
  clientLinkLabel: "WEB-TV-KUNDE: THEAR REALM TV",
  toolsClosing:
    "Das ist das Ergebnis meiner Arbeit mit Adobe Premiere Pro, After Effects und Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — Videoclip für die Kickstarter-Kampagne",
};

const it: ThearRealmCaseCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Progetti realizzati per i clienti a partire dal materiale che mi è stato fornito.",
  innerSectionHeading: "PROGETTO PER THEAR REALM TV",
  intro:
    "Ho realizzato un breve video per un cliente che raccoglieva donazioni su Kickstarter. THEAR REALM TV è una web television dedicata ai gatti randagi: il team viaggia nei Paesi in via di sviluppo, trova i gatti e li assiste con cibo, medicine e alloggio. Dalle foto dei gatti fornite dal cliente ho creato questo video per la web TV THEAR REALM TV. Questo clip ha inciso per circa il 50%: il cliente ha raccolto su Kickstarter le donazioni necessarie per realizzare il proprio progetto.",
  clientLinkLabel: "CLIENTE WEB TV: THEAR REALM TV",
  toolsClosing:
    "Questo è il risultato del mio lavoro con Adobe Premiere Pro, After Effects e Adobe Photoshop.",
  videoAriaLabel: "THEAR REALM TV — video per la campagna Kickstarter",
};

const al: ThearRealmCaseCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekte që kam realizuar për klientët duke përdorur materialet që më janë dhënë.",
  innerSectionHeading: "PROJEKT PËR THEAR REALM TV",
  intro:
    "Krijova një klip të shkurtër video për një klient që mblidhte donacione në Kickstarter. THEAR REALM TV është një televizion në internet për macet endacake: stafi udhëton në vendet në zhvillim, i gjen macet dhe i përkujdeset me ushqim, ilaçe dhe strehim. Nga fotografitë e macave që më dhanë, krijova këtë klip për televizionin në internet THEAR REALM TV. Ky klip pati rreth 50% ndikim, dhe klienti mblodhi donacionet e nevojshme në Kickstarter për të realizuar projektin e vet.",
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
