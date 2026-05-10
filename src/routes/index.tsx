import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX, Youtube, MessageCircle } from "lucide-react";
import bg1 from "@/assets/bg-1.png";
import bg2 from "@/assets/bg-2.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const TIKTOK_URL = "https://www.tiktok.com/@soaresbbr.ttk";
const YOUTUBE_URL = "https://www.youtube.com/@SOARESBBR";
const DISCORD_ID = "578959485260005381";
const MUSIC_VIDEO_ID = "OGWsd2KFFHE";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.6a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2-3H11v12.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .9.1V8.7a6 6 0 1 0 5.2 6V9.3a8.6 8.6 0 0 0 5.2 1.7V6.6Z"/>
    </svg>
  );
}

function Particles() {
  const dots = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 8 + Math.random() * 12;
        const size = 1 + Math.random() * 2.5;
        return (
          <span
            key={i}
            className="absolute block rounded-full bg-red-500/70"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              filter: "blur(0.5px)",
              animation: `rise ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>{`@keyframes rise { from { transform: translateY(0); opacity: 0;} 10%{opacity:1} to { transform: translateY(-110vh); opacity: 0;} }`}</style>
    </div>
  );
}

function Index() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const enter = () => {
    setEntered(true);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: next ? "mute" : "unMute", args: [] }),
      "*",
    );
  };

  useEffect(() => {
    if (!entered) return;
    const onClick = () => {
      const burst = document.createElement("div");
      burst.className = "fixed pointer-events-none z-[60]";
      burst.style.left = "50%";
      burst.style.top = "50%";
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 800);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [entered]);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <img src={bg1} alt="" className="absolute inset-0 h-full w-full object-cover bg-pan fade-slide" />
        <img src={bg2} alt="" className="absolute inset-0 h-full w-full object-cover bg-pan fade-slide-2" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.85)_100%)]" />
        {/* scanlines */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>

      {!entered ? (
        <div className="relative z-20 flex min-h-screen items-center justify-center">
          <button
            onClick={enter}
            className="group relative flex flex-col items-center gap-4 rounded-full border border-red-500/40 bg-black/40 px-10 py-6 backdrop-blur-md transition hover:bg-red-600/20 pulse-ring"
          >
            <Music2 className="h-8 w-8 text-red-400 transition group-hover:scale-110" />
            <span className="font-display text-2xl tracking-[0.3em] text-white/90">CLIQUE PARA ENTRAR</span>
            <span className="text-xs text-white/60">com som</span>
          </button>
        </div>
      ) : (
        <>
          <Particles />

          {/* Hidden YouTube audio player */}
          <iframe
            ref={iframeRef}
            title="bg-music"
            src={`https://www.youtube.com/embed/${MUSIC_VIDEO_ID}?autoplay=1&loop=1&playlist=${MUSIC_VIDEO_ID}&controls=0&modestbranding=1&enablejsapi=1`}
            allow="autoplay"
            className="pointer-events-none absolute -left-[9999px] h-1 w-1 opacity-0"
          />

          <section className="relative z-20 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
            <p className="float-up mb-4 text-xs uppercase tracking-[0.5em] text-red-400/90">
              · Brasil Capital · 2026 ·
            </p>

            <h1
              className="glitch font-display text-glow float-up text-6xl leading-none sm:text-8xl md:text-[10rem]"
              data-text="SOARES BBR"
              style={{ animationDelay: "0.1s" }}
            >
              SOARES BBR
            </h1>

            <div className="float-up mt-2 h-px w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent" style={{ animationDelay: "0.2s" }} />

            <p
              className="float-up mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Criador de conteúdo de FiveM e RP policial. Operações táticas, perseguições aéreas e a rotina da
              <span className="text-red-400"> Polícia Militar</span> dentro do mundo do roleplay. Bem-vindo ao
              meu submundo — entra no Discord, segue nas redes e cola na próxima missão.
            </p>

            <div
              className="float-up mt-10 grid w-full gap-3 sm:grid-cols-2"
              style={{ animationDelay: "0.45s" }}
            >
              <SocialLink
                href={YOUTUBE_URL}
                icon={<Youtube className="h-5 w-5" />}
                label="YouTube"
                handle="@SOARESBBR"
                accent="from-red-600 to-red-500"
              />
              <SocialLink
                href={TIKTOK_URL}
                icon={<TikTokIcon className="h-5 w-5" />}
                label="TikTok"
                handle="@soaresbbr.ttk"
                accent="from-zinc-800 to-zinc-600"
              />
              <SocialLink
                href={`https://discord.com/users/${DISCORD_ID}`}
                icon={<MessageCircle className="h-5 w-5" />}
                label="Discord"
                handle={DISCORD_ID}
                accent="from-indigo-600 to-indigo-500"
                copyText={DISCORD_ID}
                full
              />
            </div>

            <p
              className="float-up mt-10 text-[10px] uppercase tracking-[0.4em] text-white/40"
              style={{ animationDelay: "0.6s" }}
            >
              © Soares BBR — todos os direitos reservados
            </p>
          </section>

          <button
            onClick={toggleMute}
            aria-label={muted ? "Ativar som" : "Mutar"}
            className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur-md transition hover:border-red-500/60 hover:text-red-300"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {muted ? "Som off" : "Som on"}
          </button>
        </>
      )}
    </main>
  );
}

function SocialLink({
  href,
  icon,
  label,
  handle,
  accent,
  copyText,
  full,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
  accent: string;
  copyText?: string;
  full?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = (e: React.MouseEvent) => {
    if (!copyText) return;
    e.preventDefault();
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={copyText ? onCopy : undefined}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 ${full ? "sm:col-span-2" : ""}`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${accent} shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-display text-lg tracking-widest">{label}</div>
        <div className="text-xs text-white/60">{copied ? "ID copiado!" : handle}</div>
      </div>
      <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">→</span>
    </a>
  );
}
