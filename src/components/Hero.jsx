import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Spline 3D animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for a calming vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/40 via-sky-900/10 to-sky-900/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.12),transparent)]" />

      {/* Infinite subtle zoom effect for depth */}
      <div className="absolute inset-0 scale-100 animate-[pulseZoom_18s_ease-in-out_infinite]" aria-hidden />

      {/* Centered calming headline */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-sm">
            Drift into calm
          </h1>
          <p className="mt-4 text-sky-100/90 text-lg md:text-xl leading-relaxed">
            A tranquil ocean-inspired backdrop with gentle motion and a sense of endless depth.
          </p>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="relative z-10 absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-100/70 text-sm">
        Breathe in. Breathe out.
      </div>

      {/* Keyframes for the subtle infinite zoom */}
      <style>{`
        @keyframes pulseZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }
      `}</style>
    </section>
  );
}
