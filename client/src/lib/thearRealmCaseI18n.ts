import type { Language } from "@/lib/i18n";

export type CaseStudioProjectBlock = {
  innerSectionHeading: string;
  intro: string;
  /** Optional strip linking to anchor below */
  clientLinkLabel?: string;
  toolsClosing: string;
  videoAriaLabel: string;
};

export type ComingSoonProjectBlock = CaseStudioProjectBlock & {
  /** Line above source gallery */
  materialsCaption: string;
};

export type CaseStudioCopy = {
  caseStudioHeading: string;
  materialsIntro: string;
  /** Which fonts the site uses (Inter from Google Fonts) */
  fontsNote: string;
  thearRealm: CaseStudioProjectBlock & { clientLinkLabel: string };
  comingSoon: ComingSoonProjectBlock;
};

const sr: CaseStudioCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekti koje sam uradio za klijente od materijala koji mi je dostavljen.",
  fontsNote:
    "Fontovi na ovom sajtu: Inter (Google Fonts), uz rezervu system-ui / sans-serif.",
  thearRealm: {
    innerSectionHeading: "PROJEKAT ZA THEAR REALM TV",
    intro:
      "Radio sam kratak video klip za klijenta koji je prikupljao donacije na Kickstarter platformi. Reč je o web televiziji THEAR REALM TV — televiziji koja se brine o mačkama lutalicama: tim putuje zemljama trećeg sveta, pronalazi mačke lutalice i zbrinjava ih hranom, lekovima i smeštajem. Od dostavljenih fotografija mačaka kreirao sam video klip za web televiziju THEAR REALM TV. Ovaj klip je 50% uticao, pa je klijent prikupio potrebne donacije na Kickstarteru da realizuje svoj projekat.",
    clientLinkLabel: "KLIJENT IZ WEB TV : THEAR REALM TV",
    toolsClosing:
      "Ovo je rezultat mog rada u Adobe Premiere Pro, After Effects i Adobe Photoshop.",
    videoAriaLabel: "THEAR REALM TV — video klip za Kickstarter kampanju",
  },
  comingSoon: {
    innerSectionHeading: "COMING SOON Intro video",
    intro:
      "Coming Soon intro video klip kreiran za klijenta koji peva islamske duhovne pesme (ilahije). Klijent je bio veoma zadovoljan, jer je finalni video spot koji sam i ja uradio dostigao više od 500.000 pregleda na YouTube-u.",
    materialsCaption: "Ovo je materijal koji sam koristio da kreiram ovaj video klip.",
    toolsClosing:
      "Ovo je rezultat mog rada u Adobe Premiere Pro, After Effects i Adobe Photoshop.",
    videoAriaLabel: "Coming Soon intro — ilahije, izvorni materijal i finalni klip",
  },
};

const en: CaseStudioCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro: "Projects I created for clients using the materials they provided.",
  fontsNote: "Site typography uses Inter (Google Fonts), with system-ui / sans-serif as fallback.",
  thearRealm: {
    innerSectionHeading: "PROJECT FOR THEAR REALM TV",
    intro:
      "I produced a short video for a client raising donations on Kickstarter. THEAR REALM TV is a web television dedicated to stray cats: the team travels through developing countries, finds strays, and cares for them with food, medicine, and shelter. Using the cat photos provided by the client, I created this video clip for the THEAR REALM TV web television. This clip contributed about 50% to the outcome: the client raised the donations needed on Kickstarter to deliver the project.",
    clientLinkLabel: "WEB TV CLIENT: THEAR REALM TV",
    toolsClosing:
      "This is the outcome of my work in Adobe Premiere Pro, After Effects, and Adobe Photoshop.",
    videoAriaLabel: "THEAR REALM TV — Kickstarter campaign video clip",
  },
  comingSoon: {
    innerSectionHeading: "COMING SOON Intro video",
    intro:
      "A Coming Soon intro video for a client who performs Islamic spiritual songs (ilahiye). The client was very satisfied: the final music video — which I also produced — passed 500,000 views on YouTube.",
    materialsCaption: "Below is the source material I used to create this video.",
    toolsClosing:
      "This is the outcome of my work in Adobe Premiere Pro, After Effects, and Adobe Photoshop.",
    videoAriaLabel: "Coming Soon intro — ilahiye, source material and final clip",
  },
};

const de: CaseStudioCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekte, die ich für Kunden aus den mir bereitgestellten Materialien umgesetzt habe.",
  fontsNote:
    "Typografie der Website: Inter (Google Fonts), mit system-ui / sans-serif als Fallback.",
  thearRealm: {
    innerSectionHeading: "PROJEKT FÜR THEAR REALM TV",
    intro:
      "Ich habe einen kurzen Videoclip für einen Kunden erstellt, der auf Kickstarter Spenden sammelte. THEAR REALM TV ist ein Web-TV mit Fokus auf streunende Katzen: Das Team reist durch Länder des globalen Südens, findet Streunerkatzen und versorgt sie mit Futter, Medikamenten und Unterkunft. Aus den zur Verfügung gestellten Katzenfotos entstand dieser Videoclip für das Web-TV THEAR REALM TV. Dieser Clip trug zu etwa 50 % bei: Der Kunde sammelte auf Kickstarter die nötigen Spenden, um sein Projekt umzusetzen.",
    clientLinkLabel: "WEB-TV-KUNDE: THEAR REALM TV",
    toolsClosing:
      "Das ist das Ergebnis meiner Arbeit mit Adobe Premiere Pro, After Effects und Adobe Photoshop.",
    videoAriaLabel: "THEAR REALM TV — Videoclip für die Kickstarter-Kampagne",
  },
  comingSoon: {
    innerSectionHeading: "COMING SOON Intro-Video",
    intro:
      "Ein Coming-Soon-Intro-Video für einen Kunden, der islamische spirituelle Lieder (Ilahije) singt. Der Kunde war sehr zufrieden: Das finale Musikvideo — ebenfalls von mir umgesetzt — erreichte über 500.000 Aufrufe auf YouTube.",
    materialsCaption: "Das ist das Ausgangsmaterial, mit dem ich dieses Video erstellt habe.",
    toolsClosing:
      "Das ist das Ergebnis meiner Arbeit mit Adobe Premiere Pro, After Effects und Adobe Photoshop.",
    videoAriaLabel: "Coming Soon Intro — Ilahije, Ausgangsmaterial und finaler Clip",
  },
};

const it: CaseStudioCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Progetti realizzati per i clienti a partire dal materiale che mi è stato fornito.",
  fontsNote:
    "Tipografia del sito: Inter (Google Fonts), con fallback system-ui / sans-serif.",
  thearRealm: {
    innerSectionHeading: "PROGETTO PER THEAR REALM TV",
    intro:
      "Ho realizzato un breve video per un cliente che raccoglieva donazioni su Kickstarter. THEAR REALM TV è una web television dedicata ai gatti randagi: il team viaggia nei Paesi in via di sviluppo, trova i gatti e li assiste con cibo, medicine e alloggio. Dalle foto dei gatti fornite dal cliente ho creato questo video per la web TV THEAR REALM TV. Questo clip ha inciso per circa il 50%: il cliente ha raccolto su Kickstarter le donazioni necessarie per realizzare il proprio progetto.",
    clientLinkLabel: "CLIENTE WEB TV: THEAR REALM TV",
    toolsClosing:
      "Questo è il risultato del mio lavoro con Adobe Premiere Pro, After Effects e Adobe Photoshop.",
    videoAriaLabel: "THEAR REALM TV — video per la campagna Kickstarter",
  },
  comingSoon: {
    innerSectionHeading: "COMING SOON Intro video",
    intro:
      "Intro video «Coming Soon» per un cliente che canta canti spirituali islamici (ilahiye). Il cliente era molto soddisfatto: il videoclip finale — realizzato anche da me — ha superato 500.000 visualizzazioni su YouTube.",
    materialsCaption: "Ecco il materiale sorgente che ho usato per creare questo video.",
    toolsClosing:
      "Questo è il risultato del mio lavoro con Adobe Premiere Pro, After Effects e Adobe Photoshop.",
    videoAriaLabel: "Coming Soon intro — ilahiye, materiale sorgente e clip finale",
  },
};

const al: CaseStudioCopy = {
  caseStudioHeading: "Case Studio",
  materialsIntro:
    "Projekte që kam realizuar për klientët duke përdorur materialet që më janë dhënë.",
  fontsNote:
    "Tipografia e sajtit: Inter (Google Fonts), me rezervë system-ui / sans-serif.",
  thearRealm: {
    innerSectionHeading: "PROJEKT PËR THEAR REALM TV",
    intro:
      "Krijova një klip të shkurtër video për një klient që mblidhte donacione në Kickstarter. THEAR REALM TV është një televizion në internet për macet endacake: stafi udhëton në vendet në zhvillim, i gjen macet dhe i përkujdeset me ushqim, ilaçe dhe strehim. Nga fotografitë e macave që më dhanë, krijova këtë klip për televizionin në internet THEAR REALM TV. Ky klip pati rreth 50% ndikim, dhe klienti mblodhi donacionet e nevojshme në Kickstarter për të realizuar projektin e vet.",
    clientLinkLabel: "KLIENT NGA WEB TV: THEAR REALM TV",
    toolsClosing:
      "Ky është rezultati i punës time në Adobe Premiere Pro, After Effects dhe Adobe Photoshop.",
    videoAriaLabel: "THEAR REALM TV — klip video për fushatën Kickstarter",
  },
  comingSoon: {
    innerSectionHeading: "COMING SOON Intro video",
    intro:
      "Një klip intro «Coming Soon» për një klient që këndon këngë frymërore islame (ilahije). Klienti ishte shumë i kënaqur: videospoti përfundimtar — që realizova edhe unë — kaloi 500.000 shikime në YouTube.",
    materialsCaption: "Këtu është materiali burimor që përdora për të krijuar këtë video.",
    toolsClosing:
      "Ky është rezultati i punës time në Adobe Premiere Pro, After Effects dhe Adobe Photoshop.",
    videoAriaLabel: "Coming Soon intro — ilahije, material burimor dhe klipi final",
  },
};

const byLang: Record<string, CaseStudioCopy> = {
  sr,
  en,
  de,
  it,
  al,
  sq: al,
};

export function getCaseStudioCopy(language: Language): CaseStudioCopy {
  return byLang[language] ?? en;
}

/** @deprecated use getCaseStudioCopy */
export function getThearRealmCaseCopy(language: Language): CaseStudioCopy {
  return getCaseStudioCopy(language);
}
