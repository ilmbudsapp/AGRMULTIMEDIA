import type { ServiceLang } from "@/lib/servicePageI18n";

const B = "/portfolio/movie-poster";

export const moviePosterGalleryByLang: Record<ServiceLang, { src: string; alt: string }[]> = {
  en: [
    { src: `${B}/01-rruga-e-drites.png`, alt: "Movie poster design “Rruga e Dritës” — winter portrait with title treatment and billing block." },
    { src: `${B}/02-robin-hood.png`, alt: "Movie poster design “Robin Hood” — archer in rain, gold title, cinematic layout." },
    { src: `${B}/03-war.png`, alt: "Movie poster design “War” — soldier portrait on a smoky battlefield with title and credits." },
    { src: `${B}/04-buz-kader.png`, alt: "Poster design “Buz Kader” — figure in a snowy forest, episode title typography." },
    { src: `${B}/05-chicago-1920.png`, alt: "Movie poster design “Chicago 1920” — 1920s gangster on a misty cobblestone street with Tommy gun." },
  ],
  de: [
    { src: `${B}/01-rruga-e-drites.png`, alt: "Filmplakat „Rruga e Dritës“ — Winterportrait, Titelschrift und Abspann." },
    { src: `${B}/02-robin-hood.png`, alt: "Filmplakat „Robin Hood“ — Bogenschütze im Regen, goldener Titel." },
    { src: `${B}/03-war.png`, alt: "Filmplakat „War“ — Soldat auf rauchigem Schlachtfeld mit Abspann." },
    { src: `${B}/04-buz-kader.png`, alt: "Poster „Buz Kader“ — Figur im Schneewald, Episodentitel." },
    { src: `${B}/05-chicago-1920.png`, alt: "Filmplakat „Chicago 1920“ — Gangster der 1920er auf nebliger Kopfsteinpflasterstraße." },
  ],
  it: [
    { src: `${B}/01-rruga-e-drites.png`, alt: "Locandina “Rruga e Dritës” — ritratto invernale con titolo e crediti." },
    { src: `${B}/02-robin-hood.png`, alt: "Locandina “Robin Hood” — arciere nella pioggia, titolo dorato." },
    { src: `${B}/03-war.png`, alt: "Locandina “War” — soldato su campo di battaglia fumoso." },
    { src: `${B}/04-buz-kader.png`, alt: "Poster “Buz Kader” — figura in foresta innevata, episodio 34." },
    { src: `${B}/05-chicago-1920.png`, alt: "Locandina “Chicago 1920” — gangster anni ’20 in strada lastricata." },
  ],
  sr: [
    { src: `${B}/01-rruga-e-drites.png`, alt: "Dizajn filmskog postera „Rruga e Dritës“ — zimski portret sa naslovom i kreditima." },
    { src: `${B}/02-robin-hood.png`, alt: "Dizajn postera „Robin Hood“ — strelac na kiši, zlatni naslov." },
    { src: `${B}/03-war.png`, alt: "Dizajn postera „War“ — vojnik na zadimljenom bojnom polju." },
    { src: `${B}/04-buz-kader.png`, alt: "Poster „Buz Kader“ — figura u snežnoj šumi, naslov epizode." },
    { src: `${B}/05-chicago-1920.png`, alt: "Dizajn postera „Chicago 1920“ — gangster iz 1920-ih na maglovitoj kaldrmi." },
  ],
  al: [
    { src: `${B}/01-rruga-e-drites.png`, alt: "Dizajn posteri filmi “Rruga e Dritës” — portret dimëror me titull dhe kredite." },
    { src: `${B}/02-robin-hood.png`, alt: "Poster “Robin Hood” — harkëtar në shi, titull i artë." },
    { src: `${B}/03-war.png`, alt: "Poster “War” — ushtar në fushëbetejë me tym." },
    { src: `${B}/04-buz-kader.png`, alt: "Poster “Buz Kader” — figurë në pyll me borë, episod." },
    { src: `${B}/05-chicago-1920.png`, alt: "Poster “Chicago 1920” — gangster i viteve 1920 në rrugë kalldrëmi me mjegull." },
  ],
};
