"use client";

import { useEffect } from "react";

export default function Home() {
  // Fade-in efekt kad se loaduje
  useEffect(() => {
    document.querySelectorAll('.section-fade').forEach((el) => {
      el.classList.add('visible');
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-3 md:px-0 fade-in">
      {/* Glitch headline */}
      <section className="section-fade w-full flex flex-col items-center text-center mt-16 mb-6">
        <div className="relative inline-block mb-4">
          <span className="text-4xl md:text-6xl font-black tracking-tight glitch" data-text="NDZP">
            NDZP
          </span>
          <span className="block mt-1 text-lg md:text-xl font-bold tracking-widest text-blue-300/80 drop-shadow">
            ELITE VFX & VIDEO PRODUCTION
          </span>
          <span className="block mt-1 text-sm md:text-base font-semibold text-slate-300 tracking-widest">
            Cinematic. Viral. Legendary.
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-slate-200/80 text-lg md:text-xl leading-snug mb-1 mt-3">
          <span className="text-blue-400 font-bold">Brutal workflow</span>.<br />
          TV, TikTok, YouTube, global kampanje. 200+ klijenata, <span className="text-blue-200 font-semibold">98% retention</span>.
        </p>
        <p className="max-w-xl mx-auto text-slate-300/80 text-base mt-1 mb-2">
          Od Balkana do svetskih brendova. Nema čekanja — <b>instant delivery</b>.<br />
          Samo elitni rezultati. Samo <span className="text-blue-400 font-bold">NDZP</span>.
        </p>
        {/* CTA */}
        <div className="flex flex-wrap gap-4 justify-center mt-6 mb-3">
          <a href="mailto:ndzpgoat@gmail.com" className="btn animate-pulse">📩 Kontaktiraj</a>
          <a href="https://tiktok.com/@nidzp.vfx" target="_blank" className="btn">TikTok</a>
          <a href="https://www.youtube.com/@nidzp" target="_blank" className="btn">YouTube</a>
        </div>
      </section>

      {/* Top Impact blok */}
      <section className="section-fade w-full max-w-3xl mt-4 card text-center fade-in">
        <h2 className="mb-2">⚡️ Rezultati & Reference</h2>
        <ul>
          <li>2024: 5M+ pregleda, Balkan & global clients</li>
          <li>Reels, shorts, viral edits, business video</li>
          <li>Brutal brzina: 3+ edit koncepta na dan</li>
          <li>TV, TikTok, Instagram, YouTube, brand kampanje</li>
        </ul>
        <p className="mt-2 text-blue-300/90 font-semibold text-lg">
          <span className="text-blue-400">Level up</span> svoj brend ili content — <span className="underline underline-offset-4">pobednici biraju NDZP.</span>
        </p>
      </section>

      {/* Why NDZP */}
      <section className="section-fade w-full max-w-3xl mt-7 card fade-in">
        <h2>Zašto NDZP?</h2>
        <ul>
          <li>Elite workflow, <b>brutal speed</b>, max impact</li>
          <li>Nema generičkih editova, nema čekanja</li>
          <li>Instant DM, isporuka isti dan</li>
          <li>Samostalno snimanje, directing, full edit</li>
        </ul>
        <p className="mt-3 text-slate-200/90">
          Većina kreatora radi <b>nedeljama</b>. Sa NDZP rezultat stiže za <span className="font-bold text-blue-300">sate</span>.<br />
          Izaberi ligu šampiona. Ostalo je <span className="italic text-slate-400">prošlost</span>.
        </p>
      </section>

      {/* Video showcase */}
      <section className="section-fade w-full max-w-2xl mt-8 mb-10 flex flex-col items-center fade-in">
        <h3 className="mb-1 text-center">🔥 Brutal Showcase</h3>
        <video className="showcase-video" controls poster="/poster.jpg">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Tvoj brutalni showreel ide ovde!
        </video>
        <span className="block text-xs text-blue-200/70 mt-2 mb-3">
          * Dodaj još brutalnijih klipova, klijentskih reklama, TikTok viral edita...
        </span>
      </section>

      {/* Footer */}
      <footer className="w-full py-5 text-center text-xs text-slate-500 tracking-wide fade-in">
        NDZP © {new Date().getFullYear()} | Powered by <span className="text-blue-400 font-bold">brutal discipline</span>
      </footer>

      {/* GLITCH efekat za logo — style inline za instant */}
      <style>{`
        .glitch {
          position: relative;
          color: #60a5fa;
        }
        .glitch:before, .glitch:after {
          content: attr(data-text);
          position: absolute;
          left: 0; width: 100%; opacity: .7;
        }
        .glitch:before {
          color: #00ffd0;
          z-index: -1;
          animation: glitchTop 1.2s infinite linear alternate-reverse;
        }
        .glitch:after {
          color: #f472b6;
          z-index: -2;
          animation: glitchBot 1.2s infinite linear alternate-reverse;
        }
        @keyframes glitchTop {
          0% { transform: translate(1px,0); }
          25% { transform: translate(-2px,-3px); }
          50% { transform: translate(2px,2px); }
          75% { transform: translate(-1px,-1px); }
          100% { transform: translate(1px,0); }
        }
        @keyframes glitchBot {
          0% { transform: translate(-1px,0); }
          20% { transform: translate(2px,3px); }
          50% { transform: translate(-2px,-2px); }
          80% { transform: translate(1px,2px); }
          100% { transform: translate(-1px,0); }
        }
      `}</style>
    </main>
  );
}
