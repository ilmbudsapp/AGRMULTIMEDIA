import type { ServiceLang } from "@/lib/servicePageI18n";

const B = "/portfolio/retush-radovi";

export const retushRadoviGalleryByLang: Record<ServiceLang, { src: string; alt: string }[]> = {
  en: [
    { src: `${B}/01-military-portrait-restoration.png`, alt: "Before and after: vintage military portrait restored, colorized, and damage removed." },
    { src: `${B}/02-vintage-portrait-restoration.png`, alt: "Before and after: damaged sepia portrait cleaned, restored, and colorized on blue background." },
    { src: `${B}/03-wedding-photo-colorization.png`, alt: "Before and after: wedding couple photo colorized and enhanced from black-and-white original." },
    { src: `${B}/04-military-tear-repair.png`, alt: "Before and after: horizontal tear on military portrait repaired and image colorized." },
    { src: `${B}/05-beauty-skin-retouch.png`, alt: "Before and after: beauty retouch — skin smoothing, color correction, and portrait enhancement." },
  ],
  de: [
    { src: `${B}/01-military-portrait-restoration.png`, alt: "Vorher/Nachher: altes Militärportrait restauriert, koloriert und beschädigte Stellen entfernt." },
    { src: `${B}/02-vintage-portrait-restoration.png`, alt: "Vorher/Nachher: beschädigtes Sepia-Porträt aufbereitet und koloriert." },
    { src: `${B}/03-wedding-photo-colorization.png`, alt: "Vorher/Nachher: Hochzeitsfoto von SW zu Farbe koloriert und geschärft." },
    { src: `${B}/04-military-tear-repair.png`, alt: "Vorher/Nachher: Riss im Militärportrait repariert und Bild koloriert." },
    { src: `${B}/05-beauty-skin-retouch.png`, alt: "Vorher/Nachher: Beauty-Retusche — Haut, Farben und Portrait optimiert." },
  ],
  it: [
    { src: `${B}/01-military-portrait-restoration.png`, alt: "Prima e dopo: ritratto militare d’epoca restaurato, colorato e danneggiamenti rimossi." },
    { src: `${B}/02-vintage-portrait-restoration.png`, alt: "Prima e dopo: ritratto seppiato danneggiato pulito, restaurato e colorato." },
    { src: `${B}/03-wedding-photo-colorization.png`, alt: "Prima e dopo: foto di matrimonio colorata e migliorata dal bianco e nero." },
    { src: `${B}/04-military-tear-repair.png`, alt: "Prima e dopo: strappo orizzontale riparato e immagine militare colorata." },
    { src: `${B}/05-beauty-skin-retouch.png`, alt: "Prima e dopo: ritocco beauty — pelle, colore e ritratto." },
  ],
  sr: [
    { src: `${B}/01-military-portrait-restoration.png`, alt: "Pre i posle: restauracija i kolorizacija starog vojnog portreta, uklonjena oštećenja." },
    { src: `${B}/02-vintage-portrait-restoration.png`, alt: "Pre i posle: oštećen sepija portret očišćen, restauriran i kolorisan." },
    { src: `${B}/03-wedding-photo-colorization.png`, alt: "Pre i posle: venčano foto kolorisano i poboljšano iz crno-belog originala." },
    { src: `${B}/04-military-tear-repair.png`, alt: "Pre i posle: popravka horizontalnog puknuća na vojnom portretu i kolorizacija." },
    { src: `${B}/05-beauty-skin-retouch.png`, alt: "Pre i posle: beauty retuš — koža, boje i portret." },
  ],
  al: [
    { src: `${B}/01-military-portrait-restoration.png`, alt: "Para dhe pas: portret ushtarak i vjetër i restauruar, me ngjyra dhe pa dëmtime." },
    { src: `${B}/02-vintage-portrait-restoration.png`, alt: "Para dhe pas: portret sepia i dëmtuar i pastruar, restauruar dhe me ngjyra." },
    { src: `${B}/03-wedding-photo-colorization.png`, alt: "Para dhe pas: foto dasme me ngjyra dhe përmirësuar nga origjinali bardhë e zi." },
    { src: `${B}/04-military-tear-repair.png`, alt: "Para dhe pas: riparim çarjeje në portret ushtarak dhe kolorizim." },
    { src: `${B}/05-beauty-skin-retouch.png`, alt: "Para dhe pas: retush bukurie — lëkurë, ngjyra dhe portret." },
  ],
};
