"use client";
import { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// --- Komponente ---
type SocialButtonProps = { link: string; label: string };
type ServiceCardProps = { title: string; desc: string };
type VideoCardProps = { title: string; desc: string; url: string; img: string };
type RefCardProps = { title: string; url: string; desc: string };
type TestimonialProps = { quote: string; name: string; role: string };

// Scroll animacija wrapper
function FadeInWhenVisible({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Meni za skrol (scroll down navbar)
function ScrollMenu() {
  const menu = [
    { label: "Hero", id: "hero" },
    { label: "Video", id: "video" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Timeline", id: "timeline" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed top-7 right-5 z-50 hidden md:flex flex-col gap-2 bg-[#111a2d]/90 rounded-2xl px-4 py-2 shadow-xl border border-[#2a3651]">
      {menu.map((item) => (
        <button
          key={item.id}
          className="text-[#36d3fa] font-semibold hover:text-white py-1 px-2 text-base transition"
          onClick={() => scrollTo(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const videoShowcase: VideoCardProps[] = [
    {
      title: "Anime x Solo Leveling – Tatiana Edit",
      desc: "Full AI+VFX video, viral TikTok style.",
      url: "https://www.youtube.com/embed/KE2SW7lD_8E",
      img: "https://i.imgur.com/5fktAvH.jpg",
    },
    {
      title: "Instagram Reels Cinematic",
      desc: "Brutal snimanje + editing. Click for IG Reel.",
      url: "https://www.instagram.com/reel/C7dzbzZi6br/",
      img: "https://i.imgur.com/6nfbzTT.jpg",
    },
  ];

  const services = [
    {
      title: "Ultra VFX/Anime Editing",
      desc: "Viral TikTok/Shorts/Reels. Glitch, AI, captions, custom SFX.",
    },
    {
      title: "Snimanje i Režija",
      desc: "Kamera i montaža short form, spotova, reels, brendova.",
    },
    {
      title: "Promo/Branded Content",
      desc: "Intro/outro, logo reveal, brendirani klipovi i reklame.",
    },
    {
      title: "Consulting & Coaching",
      desc: "Brzi rast, viral koncept, AI strategija, kreativni workflow.",
    },
  ];

  const portfolio = [
    {
      title: "TikTok VFX",
      url: "https://www.tiktok.com/@nidzp.vfx",
      img: "https://i.imgur.com/5fktAvH.jpg",
    },
    {
      title: "YouTube Shorts",
      url: "https://www.youtube.com/@nidzp.vfx1337",
      img: "https://i.imgur.com/0osSyqf.jpg",
    },
    {
      title: "Instagram Reels",
      url: "https://www.instagram.com/nidzp.vfx/",
      img: "https://i.imgur.com/6nfbzTT.jpg",
    },
  ];

  const testimonials: TestimonialProps[] = [
    {
      quote: "Nikola delivers the fastest and highest quality edits we've seen – true VFX master.",
      name: "Alex P.",
      role: "YouTube Creator (US)",
    },
    {
      quote: "Every viral TikTok we launched with his edits went 100K+. Instant delivery, pro quality.",
      name: "Milica V.",
      role: "Brand Social Manager",
    },
    {
      quote: "Ultra-fast, top-level communication and visuals. The best on Upwork.",
      name: "John S.",
      role: "Media Agency UK",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#10152a] via-[#161e36] to-[#0d1b2a] px-2 md:px-3 font-sans">
      <ScrollMenu />
      {/* HERO */}
      <section id="hero" className="relative flex flex-col items-center justify-center min-h-[80vh] text-center pt-20 pb-10">
        <FadeInWhenVisible>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-[#3ec6ff] tracking-tight drop-shadow-lg relative z-10">NIDZP.VFX</h1>
          <h2 className="text-xl md:text-2xl text-[#8fcbfc] font-semibold mb-4 bg-[#172d4a]/60 rounded-3xl px-7 py-2 shadow-lg inline-block">VFX • Anime • Snimanje • Edit</h2>
          <p className="max-w-xl text-lg mb-8 text-[#e6f1fa] font-medium mx-auto">
            6+ godina u medijima Srbije & 5+ globalnog freelance.  
            Viralni edit, snimanje, short form, AI VFX – najbrži delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <SocialButton link="https://www.tiktok.com/@nidzp.vfx" label="TikTok" />
            <SocialButton link="https://www.instagram.com/nidzp.vfx/" label="Instagram" />
            <SocialButton link="https://www.youtube.com/@nidzp.vfx1337" label="YouTube" />
            <SocialButton link="https://www.upwork.com/freelancers/~0129a8584178754263" label="Upwork" />
          </div>
          <div className="text-[#43e0ff] font-semibold text-lg">Kontakt: <a href="mailto:nikola.djokic10@gmail.com" className="underline">nikola.djokic10@gmail.com</a> | <a href="https://www.instagram.com/nidzp.vfx/" className="underline">Instagram DM</a> | WhatsApp <a href="tel:+381648568678" className="underline">+381648568678</a></div>
        </FadeInWhenVisible>
        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="text-[#31cbff] text-xl font-bold animate-bounce"
            onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
          >
            ↓ Scroll for showcase ↓
          </motion.button>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section id="video" className="max-w-3xl mx-auto pt-8 pb-20">
        <FadeInWhenVisible>
          <div className="section-title text-2xl mb-5">Showcase / Vaš Edit u Najboljem Svetlu</div>
          <div className="grid md:grid-cols-2 gap-8">
            {videoShowcase.map(({ title, desc, url, img }, idx) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-[#151e32] flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {url.includes("youtube") ? (
                  <iframe
                    src={url}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-64 md:h-72"
                  ></iframe>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={title} className="w-full h-64 md:h-72 object-cover transition" />
                  </a>
                )}
                <div className="p-4 flex flex-col gap-1">
                  <div className="text-[#3ec6ff] font-bold text-lg">{title}</div>
                  <div className="text-[#b2e5ff] text-base">{desc}</div>
                  {url.includes("instagram") && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#46e2fa] underline font-medium mt-2">Vidi na Instagramu</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-[#e6f1fa] text-center text-base">
            Svaki edit – custom. Snimam, režiram, editujem, isporuka isti dan.<br />
            Tvoj brend, tvoja priča, moj edit.<br />
            <span className="text-[#31cbff] font-bold">Poruči odmah!</span>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-5xl mx-auto pt-8 pb-14">
        <FadeInWhenVisible>
          <div className="section-title">Usluge</div>
          <div className="grid md:grid-cols-2 gap-7">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-4xl mx-auto pt-8 pb-14">
        <FadeInWhenVisible>
          <div className="section-title">Portfolio</div>
          <div className="flex flex-wrap gap-6 justify-center">
            {portfolio.map(({ title, url, img }) => (
              <a href={url} target="_blank" rel="noopener noreferrer" key={title}
                className="card w-52 h-32 flex flex-col justify-center items-center hover:bg-[#163859] transition group relative overflow-hidden shadow-lg rounded-2xl">
                <img src={img} alt={title} className="absolute w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-300 z-0" />
                <div className="z-10">
                  <div className="font-bold text-[#40bfff] mb-2 drop-shadow">{title}</div>
                  <div className="text-[#b0dffe] text-sm drop-shadow">Preview</div>
                </div>
              </a>
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="max-w-3xl mx-auto pt-8 pb-14">
        <FadeInWhenVisible>
          <div className="section-title">Timeline</div>
          <ol className="border-l-2 border-[#38d4f7] pl-5 flex flex-col gap-7">
            <li>
              <span className="font-bold text-[#38d4f7]">2018:</span> Start u medijima – TV, muzika, YouTube edits.
            </li>
            <li>
              <span className="font-bold text-[#38d4f7]">2020:</span> Prvi viralni TikTok/Shorts, anime edit eksplozija.
            </li>
            <li>
              <span className="font-bold text-[#38d4f7]">2022:</span> Advanced VFX, snimanje, AI, 100+ klijenata globalno.
            </li>
            <li>
              <span className="font-bold text-[#38d4f7]">2024–2025:</span> 5M+ pregleda, top rated na Upworku.
            </li>
          </ol>
        </FadeInWhenVisible>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-3xl mx-auto pt-8 pb-14">
        <FadeInWhenVisible>
          <div className="section-title">Testimonials</div>
          <div className="relative bg-[#1a2339]/90 p-7 rounded-2xl shadow-xl mb-2 flex flex-col items-center text-center">
            <div className="text-[#36d3fa] text-lg mb-2 font-semibold">&quot;{testimonials[testimonialIdx].quote}&quot;</div>
            <div className="text-[#b8eaff] text-base mb-1">{testimonials[testimonialIdx].name}</div>
            <div className="text-[#62e8fc] text-xs">{testimonials[testimonialIdx].role}</div>
            <div className="flex gap-2 mt-4">
              <button className="btn px-4 py-1" style={{fontSize:14}} onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}>&larr;</button>
              <button className="btn px-4 py-1" style={{fontSize:14}} onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}>&rarr;</button>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="max-w-2xl mx-auto pt-8 pb-16 text-center">
        <FadeInWhenVisible>
          <div className="section-title">Kontakt</div>
          <div className="text-[#e6f1fa] text-lg mb-5">
            Otvoren za projekte, saradnje i konsultacije.<br />
            <span className="block mt-2">
              <a href="mailto:nikola.djokic10@gmail.com" className="underline text-[#43e0ff]">nikola.djokic10@gmail.com</a>
            </span>
            <span className="block mt-1">
              WhatsApp/Telegram: <a href="tel:+381648568678" className="underline text-[#43e0ff]">+381648568678</a>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            <SocialButton link="https://www.tiktok.com/@nidzp.vfx" label="TikTok" />
            <SocialButton link="https://www.instagram.com/nidzp.vfx/" label="Instagram" />
            <SocialButton link="mailto:nikola.djokic10@gmail.com" label="Email" />
          </div>
        </FadeInWhenVisible>
      </section>
      <footer className="footer text-center">
        &copy; {new Date().getFullYear()} nidzp.vfx | All rights reserved
      </footer>
    </main>
  );
}

// --- Komponente ---
function SocialButton({ link, label }: SocialButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">{label}</a>
  );
}
function ServiceCard({ title, desc }: ServiceCardProps) {
  return (
    <div className="card p-6 rounded-xl shadow-xl bg-[#151e32]/70 border border-[#283d5a]/30">
      <div className="text-lg font-bold text-[#34c5fd] mb-1">{title}</div>
      <div className="text-[#c2e9fa] text-base">{desc}</div>
    </div>
  );
}
