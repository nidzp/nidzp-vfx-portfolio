"use client";

import { useState } from "react";

const text = {
  en: {
    headline: "NDZP.VFX — Professional Visual Effects",
    sub: "VFX · Creative Editing · Branded Content",
    about: "Elite post-production. Speed. Precision. 200+ satisfied clients. Viral. Global.",
    contact: "Contact",
    works: "Works",
    results: "Results & References",
    resultsList: [
      "2024: 5M+ views – YouTube, TikTok, TV, brand campaigns",
      "Reels, commercials, viral edits",
      "Clients: Balkan, Europe, USA, worldwide",
      "Avg delivery: 24h"
    ],
    why: "Why NDZP?",
    whyList: [
      "Ultra-fast workflow, top quality",
      "Direct, 0 delay communication",
      "Creative control: directing, editing, VFX",
      "Every project: unique, no copy-paste"
    ],
    showcase: "Showcase",
    addYourReel: "Add your best edits and showreel here.",
    footer: "NDZP.VFX © " + new Date().getFullYear() + " — Brutal Standards Only.",
    srpski: "Српски"
  },
  sr: {
    headline: "NDZP.VFX — Profesionalni Vizuelni Efekti",
    sub: "VFX · Kreativna Montaža · Brendirani Sadržaj",
    about: "Elitna postprodukcija. Brzina. Preciznost. 200+ zadovoljnih klijenata. Viralno. Globalno.",
    contact: "Kontakt",
    works: "Radovi",
    results: "Rezultati & Reference",
    resultsList: [
      "2024: 5M+ pregleda — YouTube, TikTok, TV, brend kampanje",
      "Reels, reklame, viralni editovi",
      "Klijenti: Balkan, Evropa, SAD, svet",
      "Prosečna isporuka: 24h"
    ],
    why: "Zašto NDZP?",
    whyList: [
      "Ultra-brz workflow, top kvalitet",
      "Direktna komunikacija, 0 čekanja",
      "Kreativna kontrola: režija, montaža, VFX",
      "Svaki projekat: unikatan, bez kopiranja"
    ],
    showcase: "Showcase",
    addYourReel: "Dodaj najbolje editove i showreel ovde.",
    footer: "NDZP.VFX © " + new Date().getFullYear() + " — Brutalni Standardi.",
    srpski: "English"
  }
};

const links = [
  { name: "TikTok (Goated Edits)", url: "https://www.tiktok.com/@nidzp.vfx" },
  { name: "Goated Edits TikTok", url: "https://www.tiktok.com/@goated.edits" },
  { name: "Instagram (Edits + Live Shoots)", url: "https://www.instagram.com/nidzp.vfx/" },
  { name: "YouTube", url: "https://www.youtube.com/@nidzp" },
  { name: "Linktree", url: "https://linktr.ee/nidzp" },
  { name: "Email", url: "mailto:nikola.djokic10@gmail.com" }
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "sr">("en");

  return (
    <main className="min-h-screen bg-bg text-main font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full bg-bg/90 backdrop-blur border-b border-border flex items-center justify-between px-5 py-3">
        <span className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase select-none">
          NDZP.VFX
        </span>
        <nav className="flex items-center gap-8 text-base">
          <a href="#works" className="hover:text-accent transition">{text[lang].works}</a>
          <a href="#contact" className="hover:text-accent transition">{text[lang].contact}</a>
          <button
            className="ml-5 px-4 py-1 border border-accent rounded-lg text-accent font-bold hover:bg-bg2 transition"
            onClick={() => setLang(lang === "en" ? "sr" : "en")}
          >
            {text[lang].srpski}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center mt-20 mb-8 px-2">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight uppercase">{text[lang].headline}</h1>
        <div className="text-xl md:text-2xl text-accent mb-2 font-medium tracking-wide">{text[lang].sub}</div>
        <p className="max-w-xl text-lg md:text-xl text-desc mb-8">{text[lang].about}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl border-2 border-accent text-accent font-bold hover:bg-bg2 hover:text-accent2 transition shadow"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="w-full max-w-3xl mx-auto mb-10 px-3" id="results">
        <h2 className="text-2xl font-bold mb-3">{text[lang].results}</h2>
        <ul className="text-base md:text-lg space-y-1 text-desc">
          {text[lang].resultsList.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </section>

      {/* Why */}
      <section className="w-full max-w-3xl mx-auto mb-10 px-3">
        <h2 className="text-2xl font-bold mb-3">{text[lang].why}</h2>
        <ul className="text-base md:text-lg space-y-1 text-desc">
          {text[lang].whyList.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
      </section>

      {/* Showcase */}
      <section className="w-full max-w-5xl mx-auto mb-14 px-3" id="works">
        <h3 className="text-xl font-bold mb-6 text-center">{text[lang].showcase}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Primer 1 */}
          <div className="rounded-2xl shadow-2xl bg-bg2 overflow-hidden p-4 flex flex-col items-center">
            <video
              className="rounded-xl w-full mb-3"
              controls
              poster="/poster.jpg"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Showreel
            </video>
            <span className="text-lg font-bold text-accent">Showreel 2024</span>
          </div>
          {/* Primer 2 */}
          <div className="rounded-2xl shadow-2xl bg-bg2 overflow-hidden p-4 flex flex-col items-center">
            <video
              className="rounded-xl w-full mb-3"
              controls
              poster="/poster.jpg"
            >
              <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
              Client Edit
            </video>
            <span className="text-lg font-bold text-accent">Brand Edit Example</span>
          </div>
        </div>
        <div className="text-xs text-accent2 mt-4 text-center">
          {text[lang].addYourReel}
        </div>
      </section>

      {/* Kontakt / Footer */}
      <footer id="contact" className="w-full py-6 text-center text-sm text-accent2 border-t border-border mt-auto">
        {text[lang].footer}
      </footer>
    </main>
  );
}
