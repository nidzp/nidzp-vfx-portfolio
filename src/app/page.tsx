"use client";
import { useRef, useEffect, useState } from "react";

// Slovo-po-slovo animacija
function TypeWriter({ text, delay = 30, className = "" }: { text: string; delay?: number; className?: string }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setDisplay("");
    let i = 0;
    const intv = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(intv);
    }, delay);
    return () => clearInterval(intv);
  }, [text, delay]);
  return <span className={className}>{display}</span>;
}

export default function Home() {
  const [step, setStep] = useState(0);

  const sec1 = useRef<HTMLDivElement>(null);
  const sec2 = useRef<HTMLDivElement>(null);
  const sec3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (sec2.current && window.scrollY + window.innerHeight > sec2.current.offsetTop + 150) setStep(1);
      if (sec3.current && window.scrollY + window.innerHeight > sec3.current.offsetTop + 150) setStep(2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e5f6ff] px-2 md:px-0">

      {/* CV / O MENI */}
      <section ref={sec1} className="flex flex-col min-h-[90vh] justify-center items-center">
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#101828]/80 shadow-2xl backdrop-blur-lg">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#40bfff] tracking-tight drop-shadow-lg">
            <TypeWriter text="NIDZP | Elite Video Editor & Producer" delay={16} />
          </h1>
          <div className="mb-6 text-lg md:text-2xl font-semibold tracking-wide text-[#b7e5fc]">
            <TypeWriter
              text={`6+ years TV & Digital Media • 5+ years freelance • 200+ clients
Instant delivery | Serbian roots, global quality.
Editing, directing, full video production. No gimmicks, only results.
Brutal workflow, top speed. If you want cinematic, high-impact edits, let's talk.
`}
              delay={10}
            />
          </div>
          <ul className="mb-4 text-base md:text-lg text-[#77d9fa]">
            <li>- 2024: 5M+ views, 98% satisfaction, Balkan & global brands</li>
            <li>- Specialist for reels, shorts, promos, business content</li>
            <li>- All formats: TikTok, YouTube, Instagram, TV, campaigns</li>
            <li>- <span className="font-bold text-[#3ec6ff]">Speed: 3 full concepts & edits/hour. Final cut same day.</span></li>
          </ul>
          <div className="flex flex-wrap gap-3 mb-1">
            <a href="mailto:nikola.djokic10@gmail.com" className="btn">Email</a>
            <a href="https://www.tiktok.com/@nidzp.vfx" className="btn" target="_blank">TikTok</a>
            <a href="https://www.tiktok.com/@goatededits_nidzp" className="btn" target="_blank">GoatEdits TikTok</a>
            <a href="https://www.instagram.com/nidzp.vfx/" className="btn" target="_blank">Instagram</a>
            <a href="https://www.upwork.com/freelancers/~0129a8584178754263" className="btn" target="_blank">Upwork</a>
            <a href="https://www.youtube.com/@nidzp.vfx1337" className="btn" target="_blank">YouTube</a>
          </div>
        </div>
        <div className="mt-10 mb-10 text-center text-[#45d6ff] animate-bounce font-bold text-xl">▼ scroll ▼</div>
      </section>

      {/* WHY NIDZP */}
      <section className="flex flex-col justify-center items-center pt-12 pb-8">
        <div className="max-w-2xl mx-auto p-7 rounded-3xl bg-[#101828]/90 shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">Why NIDZP?</h2>
          <p className="text-lg md:text-xl text-[#b7e5fc] font-semibold mb-4">
            No generic edits. No slow replies.<br />
            Just <span className="text-[#43e0ff] font-bold">elite workflow</span>, brutal speed, and
            <span className="text-[#43e0ff] font-bold"> maximum impact</span>.<br />
            Most creators need a week. <span className="font-bold text-[#3ec6ff]">You get results in hours.</span>
          </p>
          <ul className="text-[#7ddff9] text-base font-medium">
            <li>• 6+ godina iskustva na TV, TikTok, YT, brendiranim kampanjama</li>
            <li>• 200+ klijenata, 98% zadržavanja</li>
            <li>• Najmoderniji workflow — snimanje, edit, export, svi formati</li>
            <li>• Instant DM & isporuka</li>
          </ul>
        </div>
      </section>

      {/* SHOWCASE #1 - VIDEO1 */}
      <section ref={sec2} className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-3 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="/video1.mp4"
            className="rounded-3xl shadow-2xl w-full max-w-md aspect-[9/16] border-2 border-[#39d0fc]/40"
            autoPlay
            muted
            loop
            playsInline
            style={{ boxShadow: "0 8px 48px #38d4f777" }}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-lg">
          {step >= 1 && (
            <>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">
                <TypeWriter text="From Idea to Viral. The Fastest Edit Delivery." delay={13} />
              </h2>
              <p className="text-lg md:text-xl text-[#e5f6ff] font-semibold">
                <TypeWriter
                  text="Send a concept – in minutes you get a viral video ready for TikTok, Instagram, or YT. Clean, sharp, with killer hooks. Your vision, my execution. No delays."
                  delay={9}
                />
              </p>
            </>
          )}
        </div>
      </section>

      {/* SHOWCASE #2 - VIDEO2 */}
      <section ref={sec3} className="flex flex-col md:flex-row-reverse items-center justify-center min-h-[70vh] px-3 gap-10 mt-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="/video2.mp4"
            className="rounded-3xl shadow-2xl w-full max-w-md aspect-[9/16] border-2 border-[#39d0fc]/40"
            autoPlay
            muted
            loop
            playsInline
            style={{ boxShadow: "0 8px 48px #38d4f777" }}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-lg">
          {step >= 2 && (
            <>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">
                <TypeWriter text="Complete Production: Shot, Directed & Edited by Me" delay={13} />
              </h2>
              <p className="text-lg md:text-xl text-[#e5f6ff] font-semibold">
                <TypeWriter
                  text="Full service – from shooting to final export. You get cinematic shots, top-tier sound, perfect pacing. All in-house, no outsourcers, zero compromise."
                  delay={9}
                />
              </p>
            </>
          )}
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="flex flex-col justify-center items-center pt-10 pb-8">
        <div className="max-w-xl mx-auto p-7 rounded-3xl bg-[#101828]/80 shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">Work Process</h2>
          <ol className="text-[#7ddff9] text-base font-medium text-left list-decimal ml-8">
            <li><span className="font-bold text-[#43e0ff]">You send idea/video</span> – DM, email ili upload</li>
            <li><span className="font-bold text-[#43e0ff]">Instant response</span> – dogovaramo stil i deadline</li>
            <li><span className="font-bold text-[#43e0ff]">Prvi edit za 30-90 min</span> – šaljem preview</li>
            <li><span className="font-bold text-[#43e0ff]">Finalni eksport + optimizacija</span> – spremno za upload</li>
            <li><span className="font-bold text-[#43e0ff]">Plaćanje posle isporuke</span> – full poverenje</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col justify-center items-center pt-10 pb-16">
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#122038]/95 shadow-xl text-center border-2 border-[#41c8fc]/20">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">Ready to Level Up?</h2>
          <p className="mb-4 text-lg font-semibold text-[#b7e5fc]">
            Book your edit or campaign today.<br />
            <span className="text-[#43e0ff] font-bold">DM, Email or WhatsApp</span> — instant response, 100% transparent process, zero hassle.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            <a href="mailto:nikola.djokic10@gmail.com" className="btn">Email</a>
            <a href="https://www.instagram.com/nidzp.vfx/" className="btn" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@nidzp.vfx" className="btn" target="_blank">TikTok</a>
            <a href="https://www.tiktok.com/@goatededits_nidzp" className="btn" target="_blank">GoatedEdits TikTok</a>
            <a href="tel:+381648568678" className="btn">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col justify-center items-center pt-10 pb-14">
        <div className="max-w-xl mx-auto p-7 rounded-3xl bg-[#101828]/80 shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#40bfff]">FAQ</h2>
          <div className="text-left">
            <p className="mb-2 text-[#43e0ff] font-bold">Q: Koliko brzo mogu dobiti gotov video?</p>
            <p className="mb-4">A: Prvi preview u roku od 1h, isporuka istog dana.</p>
            <p className="mb-2 text-[#43e0ff] font-bold">Q: Da li radite za firme/strance?</p>
            <p className="mb-4">A: Da, imam iskustvo i reference iz celog sveta, svi formati, svi jezici.</p>
            <p className="mb-2 text-[#43e0ff] font-bold">Q: Koji su načini plaćanja?</p>
            <p>A: PayPal, Revolut, Western Union, dinarski račun, dogovor po projektu.</p>
          </div>
        </div>
      </section>

      {/* KONTAKT SEKCIJA */}
      <section className="flex flex-col min-h-[60vh] justify-center items-center pt-20">
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#101828]/90 shadow-2xl text-center backdrop-blur-lg">
          <h2 className="text-2xl md:text-4xl font-black mb-3 text-[#40bfff]">Contact & Booking</h2>
          <p className="mb-6 text-[#b7e5fc] text-lg font-semibold">
            Fastest way to get your project started.<br />
            I answer DMs instantly.<br />
            <span className="text-[#31cbff] font-bold">Email: </span>
            <a href="mailto:nikola.djokic10@gmail.com" className="underline">nikola.djokic10@gmail.com</a>
            <br />
            <span className="text-[#31cbff] font-bold">WhatsApp: </span>
            <a href="tel:+381648568678" className="underline">+381648568678</a>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.tiktok.com/@nidzp.vfx" className="btn" target="_blank">TikTok</a>
            <a href="https://www.tiktok.com/@goatededits_nidzp" className="btn" target="_blank">GoatedEdits TikTok</a>
            <a href="https://www.instagram.com/nidzp.vfx/" className="btn" target="_blank">Instagram</a>
            <a href="https://www.upwork.com/freelancers/~0129a8584178754263" className="btn" target="_blank">Upwork</a>
            <a href="https://www.youtube.com/@nidzp.vfx1337" className="btn" target="_blank">YouTube</a>
          </div>
        </div>
        <footer className="footer text-center mt-10">
          &copy; {new Date().getFullYear()} nidzp.vfx | All rights reserved
        </footer>
      </section>
    </main>
  );
}
