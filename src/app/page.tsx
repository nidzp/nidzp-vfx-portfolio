export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10 fade-in">
      {/* SRPSKI */}
      <section className="mb-14">
        <h1 className="text-center text-3xl font-black mb-1 text-blue-400 drop-shadow-xl">NDZP.VFX</h1>
        <h2 className="text-center text-xl font-bold mb-3 text-blue-200">VFX, Anime & AI video expert</h2>
        <p className="text-center text-blue-300 mb-3">
          Profesionalni editor sa <b>6+ godina</b> u medijima Srbije i <b>5+ godina</b> freelance na globalnoj sceni.<br />
          Koristim AI workflow da snimim i editujem <b>10x brže</b> od proseka. Viralni klipovi za TikTok, YouTube, Instagram. Brendovi, muzičari, influenseri – <b>vaša vizija, moj edit</b>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a href="https://tiktok.com/@nidzp.vfx" target="_blank" className="btn">TikTok</a>
          <a href="https://instagram.com/nidzp.vfx" target="_blank" className="btn">Instagram</a>
          <a href="https://youtube.com/@nidzp" target="_blank" className="btn">YouTube</a>
          <a href="https://upwork.com/freelancers/~nidzp" target="_blank" className="btn">Upwork</a>
          <a href="mailto:ndzpgoat@gmail.com" className="btn">Kontakt</a>
        </div>
      </section>

      {/* ENGLISH */}
      <section className="mb-14">
        <h1 className="text-center text-3xl font-black mb-1 text-blue-400 drop-shadow-xl">NDZP.VFX</h1>
        <h2 className="text-center text-xl font-bold mb-3 text-blue-200">VFX, Anime & AI video expert</h2>
        <p className="text-center text-blue-300 mb-3">
          Professional editor with <b>6+ years</b> in Serbian media and <b>5+ years</b> freelancing globally.<br />
          Using AI workflow, I shoot & edit videos <b>10x faster</b> than average. Viral edits for TikTok, YouTube, Instagram. Brands, musicians, influencers — <b>your vision, my edit</b>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a href="https://tiktok.com/@nidzp.vfx" target="_blank" className="btn">TikTok</a>
          <a href="https://instagram.com/nidzp.vfx" target="_blank" className="btn">Instagram</a>
          <a href="https://youtube.com/@nidzp" target="_blank" className="btn">YouTube</a>
          <a href="https://upwork.com/freelancers/~nidzp" target="_blank" className="btn">Upwork</a>
          <a href="mailto:ndzpgoat@gmail.com" className="btn">Contact</a>
        </div>
      </section>

      {/* Usluge / Services */}
      <section className="mb-10">
        <h2 className="text-blue-400 font-bold text-2xl mb-4">Usluge / Services</h2>
        <div className="card mb-5">
          <h3 className="font-bold mb-1 text-blue-300">Brzi VFX / Anime Edit</h3>
          <p>
            Kratki TikTok, YT Shorts, Reels za klijente koji žele viralne klipove sa modernim efektima, captionima i AI overlayima.<br />
            <span className="text-blue-200/90 block mt-1">
              Short TikToks, YouTube Shorts, Reels with viral effects, captions & AI overlays.
            </span>
          </p>
        </div>
        <div className="card mb-5">
          <h3 className="font-bold mb-1 text-blue-300">VFX Overlay & AI Pack</h3>
          <p>
            Prodaja overlay, green screen efekata i AI templatea za editore, influensere, brendove i muzičare.<br />
            <span className="text-blue-200/90 block mt-1">
              Overlays, green screen effects, and AI templates for editors, influencers, brands, and musicians.
            </span>
          </p>
        </div>
        <div className="card">
          <h3 className="font-bold mb-1 text-blue-300">Promo / Brending</h3>
          <p>
            Intro, outro, brendirani promo za firme, kanale, brendove, muzičare.<br />
            <span className="text-blue-200/90 block mt-1">
              Intros, outros, branded promo videos for companies, channels, brands, musicians.
            </span>
          </p>
        </div>
      </section>

      {/* AI Workflow */}
      <section>
        <h2 className="text-blue-400 font-bold text-2xl mb-4">AI Workflow</h2>
        <div className="card mb-5">
          <h3 className="font-bold mb-1 text-blue-300">AI Scene</h3>
          <p>
            Brzo generišem vizuelno moćne scene uz Sora, Kaiber, CapCut AI i Stable Diffusion.<br />
            <span className="text-blue-200/90 block mt-1">
              Rapid AI scene generation with Sora, Kaiber, CapCut AI, Stable Diffusion.
            </span>
          </p>
        </div>
        <div className="card mb-5">
          <h3 className="font-bold mb-1 text-blue-300">AI Voice, Sync & Effects</h3>
          <p>
            AI voiceover, sinkronizacija i efekti za ekstra moćan sadržaj.<br />
            <span className="text-blue-200/90 block mt-1">
              AI voiceover, sync and effects for next-level content.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
