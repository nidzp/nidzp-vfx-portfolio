"use client";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToContact = () => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#10152a] via-[#161e36] to-[#0d1b2a] px-3">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-16 pb-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-[#3ec6ff] tracking-tight">NIDZP.VFX</h1>
        <h2 className="text-xl md:text-2xl text-[#8fcbfc] font-semibold mb-4">VFX, Anime & AI video expert</h2>
        <p className="max-w-xl text-lg mb-7 text-[#e6f1fa] font-medium">
          Profesionalni editor sa <span className="text-[#21bfff] font-bold">6+ godina</span> u medijima Srbije i <span className="text-[#21bfff] font-bold">5+ godina</span> freelance na globalnoj sceni.
          <br />
          <span className="text-[#36d3fa]">Koristim AI workflow da snimim i editujem <b>10x brže</b> od proseka. Viralni klipovi za TikTok, YouTube, Instagram. Brendovi, muzičari, influenseri – vaša vizija, moj edit.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <SocialButton link="https://www.tiktok.com/@nidzp.vfx" label="TikTok" />
          <SocialButton link="https://www.instagram.com/nidzp.vfx/" label="Instagram" />
          <SocialButton link="https://www.youtube.com/@nidzp.vfx1337" label="YouTube" />
          <SocialButton link="https://www.upwork.com/freelancers/~0129a8584178754263" label="Upwork" />
        </div>
        <button onClick={scrollToContact} className="btn mt-3 mb-0">Kontakt</button>
      </section>

      {/* USLUGE */}
      <section className="max-w-5xl mx-auto pt-7 pb-10">
        <div className="section-title">Usluge</div>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Brzi VFX / Anime Edit"
            desc="Kratki TikTok, YT Shorts, Reels za klijente koji žele viralne klipove sa modernim efektima, captionima i AI overlayima."
          />
          <ServiceCard
            title="VFX Overlay & AI Pack"
            desc="Prodaja overlay, green screen efekata i AI templatea za editore, influensere, brendove i muzičare."
          />
          <ServiceCard
            title="Promo / Brending"
            desc="Intro, outro, brendirani promo za firme, kanale, brendove, muzičare."
          />
        </div>
      </section>

      {/* AI WORKFLOW */}
      <section className="max-w-4xl mx-auto pt-7 pb-10">
        <div className="section-title">AI Workflow</div>
        <ul className="mb-3 flex flex-col gap-3">
          <AiStep title="AI Scene" desc="Brzo generišem vizuelno moćne scene uz Sora, Kaiber, CapCut AI i Stable Diffusion." />
          <AiStep title="AI Effects" desc="Sve captions, overlay, meme i glitch efekti automatski uz AI workflow – nikad čekanje, uvek svetski izgled." />
          <AiStep title="Ultra-brza isporuka" desc="Automatizovani render & export, klijent uvek ima preview u roku od 30-60 minuta, isporuka isti dan." />
        </ul>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <LogoImg alt="Sora" src="https://assets-global.website-files.com/65d52e7b57a47d4c66b4c4af/65e0b98e40354e71e67bda8f_sora_ai_logo.png" />
          <LogoImg alt="Kaiber" src="https://kaiber.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.290c22b2.png&w=96&q=75" />
          <LogoImg alt="CapCut" src="https://seeklogo.com/images/C/capcut-logo-6A87D4E668-seeklogo.com.png" />
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="max-w-4xl mx-auto pt-7 pb-10">
        <div className="section-title">Showcase / Portfolio</div>
        <div className="flex flex-wrap justify-center gap-5">
          <ShowcaseCard title="TikTok Edits" url="https://www.tiktok.com/@nidzp.vfx" />
          <ShowcaseCard title="YouTube Shorts" url="https://www.youtube.com/@nidzp.vfx1337" />
          <ShowcaseCard title="Instagram Reels" url="https://www.instagram.com/nidzp.vfx/" />
        </div>
        <div className="text-[#5fc9f8] mt-3 text-center text-base">Klikni za moj rad i viralne primere</div>
      </section>

      {/* REFERENCE */}
      <section className="max-w-4xl mx-auto pt-7 pb-10">
        <div className="section-title">Reference</div>
        <div className="grid md:grid-cols-3 gap-5">
          <RefCard
            title="025.rs"
            url="https://www.025.rs/"
            desc="Medijski portal sa 1.5M+ pregleda – editovanje priloga, viral TikTok/YouTube klipovi."
          />
          <RefCard
            title="Upwork Top Rated"
            url="https://www.upwork.com/freelancers/~0129a8584178754263"
            desc="Stotine globalnih klijenata, 98% success rate."
          />
          <RefCard
            title="TikTok Viral"
            url="https://www.tiktok.com/@nidzp.vfx"
            desc="Viralni editovi, AI showcase, milioni pregleda na Balkanu i globalno."
          />
        </div>
      </section>

      {/* KONTAKT */}
      <section ref={contactRef} className="max-w-2xl mx-auto pt-7 pb-14 text-center">
        <div className="section-title">Kontakt</div>
        <div className="text-[#e6f1fa] text-lg mb-5">
          Otvoren za projekte, saradnje i konsultacije.<br />
          Piši mi na <a href="mailto:nikola.djokic10@gmail.com">nikola.djokic10@gmail.com</a> ili na društvenim mrežama.
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          <SocialButton link="https://www.tiktok.com/@nidzp.vfx" label="TikTok" />
          <SocialButton link="https://www.instagram.com/nidzp.vfx/" label="Instagram" />
          <SocialButton link="https://www.upwork.com/freelancers/~0129a8584178754263" label="Upwork" />
        </div>
      </section>

      <footer className="footer text-center">
        &copy; {new Date().getFullYear()} nidzp.vfx | All rights reserved
      </footer>
    </main>
  );
}

/* COMPONENTS */
function SocialButton({ link, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">{label}</a>
  );
}
function ServiceCard({ title, desc }) {
  return (
    <div className="card">
      <div className="text-lg font-bold text-[#34c5fd] mb-1">{title}</div>
      <div className="text-[#c2e9fa] text-base">{desc}</div>
    </div>
  );
}
function AiStep({ title, desc }) {
  return (
    <li className="card flex flex-col gap-1">
      <span className="font-semibold text-[#27c7f6]">{title}</span>
      <span className="text-[#a8e6ff] text-base">{desc}</span>
    </li>
  );
}
function LogoImg({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-10 w-auto rounded-xl bg-[#1a2746] p-1 shadow" style={{maxWidth:70}} />
  );
}
function ShowcaseCard({ title, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card w-52 h-28 flex flex-col justify-center items-center hover:bg-[#122441] transition">
      <div className="font-bold text-[#40bfff] mb-2">{title}</div>
      <div className="text-[#b0dffe] text-sm">Pogledaj</div>
    </a>
  );
}
function RefCard({ title, url, desc }) {
  return (
    <div className="card flex flex-col items-start">
      <div className="font-bold text-[#27c7f6] mb-1">{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#40bfff] underline mb-2 break-all">{url.replace("https://", "")}</a>
      <div className="text-[#9bdcfb] text-base">{desc}</div>
    </div>
  );
}
