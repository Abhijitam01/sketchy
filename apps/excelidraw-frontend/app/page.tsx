import Link from "next/link"
import { ArrowRight, Users, Zap, Shapes } from "lucide-react"
import { DrawingCanvas } from "@/components/landing/DrawingCanvas"
import { FeatureCards } from "@/components/landing/FeatureCards"

const demoEnabled = process.env.NEXT_PUBLIC_ENABLE_LIVE_DEMO !== "false"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0b0f] text-white selection:bg-indigo-500/30">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0b0f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 18 C4 18 8 10 11 8 C14 6 18 10 18 14" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" fill="none"
                strokeDasharray="50" strokeDashoffset="50">
                <animate attributeName="stroke-dashoffset" from="50" to="0" dur="1.2s" fill="freeze"
                  calcMode="spline" keySplines="0.4 0 0.2 1" />
              </path>
              <path d="M7 15 C7 15 9 12 11 11 C13 10 15 12 15 14" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" fill="none"
                strokeDasharray="40" strokeDashoffset="40">
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" begin="0.4s" fill="freeze"
                  calcMode="spline" keySplines="0.4 0 0.2 1" />
              </path>
            </svg>
            <span className="text-[15px] font-semibold tracking-tight">Sketchy</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/50 sm:flex">
            <Link href="#features" className="transition hover:text-white/80">Features</Link>
            <Link href="#how-it-works" className="transition hover:text-white/80">How it works</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/signin"
              className="rounded-lg px-3.5 py-1.5 text-sm text-white/50 transition hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-500"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        {/* Top edge glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
        />
        {/* Radial background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Live badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </span>
            Real-time multiplayer whiteboard
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Draw together,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #38bdf8 100%)" }}
            >
              in real time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/45">
            Sketchy is a minimal multiplayer whiteboard. Open a room, share a link,
            and your whole team is drawing together&nbsp;— instantly.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              Start drawing free
              <ArrowRight className="h-4 w-4" />
            </Link>
            {demoEnabled ? (
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                Try live demo
              </Link>
            ) : (
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                Open dashboard
              </Link>
            )}
          </div>

          <p className="mt-5 text-xs text-white/25">No credit card required&ensp;·&ensp;Free to use</p>
        </div>

        {/* Hero canvas mockup */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Glow behind canvas */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 scale-95 rounded-2xl opacity-40 blur-2xl"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(167,139,250,0.3), rgba(56,189,248,0.2))" }}
          />

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12141c] shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <div className="ml-auto flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#0d0e14] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/60" />
                <span className="text-[10px] text-white/25">sketchy.app/room/team-flow</span>
              </div>
            </div>

            {/* Pixel-reveal canvas */}
            <DrawingCanvas />
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-y border-white/[0.05] bg-white/[0.015]">
        <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-white/[0.05]">
          {[
            { value: "< 50ms", label: "sync latency" },
            { value: "∞", label: "shapes per canvas" },
            { value: "0", label: "setup required" },
          ].map(({ value, label }) => (
            <div key={label} className="px-8 py-8 text-center">
              <div className="text-3xl font-bold tracking-tight text-white/90">{value}</div>
              <div className="mt-1 text-xs text-white/25">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need.{" "}
              <span className="text-white/35">Nothing you don&apos;t.</span>
            </h2>
            <p className="mt-3 text-sm text-white/30">
              Built for speed. Designed to disappear so your ideas take center stage.
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Up and running in&nbsp;30&nbsp;seconds</h2>
            <p className="mt-3 text-sm text-white/30">Three steps. No more.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Create a room",
                body: "Click \"New room\" from your dashboard. Your canvas is live instantly — no templates, no wizard.",
                color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
                icon: <Shapes className="h-4 w-4" />,
              },
              {
                step: "02",
                title: "Share the link",
                body: "Send the room URL to anyone on your team. They join with one click — no account required.",
                color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
                icon: <Users className="h-4 w-4" />,
              },
              {
                step: "03",
                title: "Draw together",
                body: "See everyone's cursors in real time. Every stroke and shape syncs instantly across every tab.",
                color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
                icon: <Zap className="h-4 w-4" />,
              },
            ].map(({ step, title, body, color, icon }) => (
              <div key={step} className="flex gap-5">
                <div className="flex-shrink-0 pt-0.5">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${color}`}>
                    {icon}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-6 py-5 flex-1">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/20">{step}</div>
                  <h3 className="font-semibold text-white/90">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/35">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-28 pt-4">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-indigo-600/10 to-transparent p-14 text-center">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 65%)" }}
          />

          {/* Animated SVG rings */}
          <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-[0.12]" width="420" height="180" viewBox="0 0 420 180" fill="none">
            <ellipse cx="210" cy="0" rx="170" ry="60" stroke="#6366f1" strokeWidth="1">
              <animate attributeName="rx" values="170;185;170" dur="4s" repeatCount="indefinite"
                calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="opacity" values="1;0.4;1" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="210" cy="0" rx="120" ry="44" stroke="#a78bfa" strokeWidth="1">
              <animate attributeName="rx" values="120;132;120" dur="3s" repeatCount="indefinite"
                calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="210" cy="0" rx="70" ry="28" stroke="#38bdf8" strokeWidth="0.8">
              <animate attributeName="rx" values="70;80;70" dur="2.5s" repeatCount="indefinite"
                calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
          </svg>

          <h2 className="relative text-3xl font-bold tracking-tight">Ready to draw together?</h2>
          <p className="relative mt-3 text-sm text-white/35">
            Free forever for small teams. No credit card. No setup.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/35"
            >
              Create your canvas
              <ArrowRight className="h-4 w-4" />
            </Link>
            {demoEnabled && (
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-white/55 transition hover:border-white/20 hover:text-white"
              >
                Watch it work
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.05] px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-white/25">
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path d="M4 18 C4 18 8 10 11 8 C14 6 18 10 18 14" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M7 15 C7 15 9 12 11 11 C13 10 15 12 15 14" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            © {new Date().getFullYear()} Sketchy — multiplayer drawing for teams
          </div>
          <div className="flex items-center gap-5 text-xs text-white/20">
            <Link href="/signin" className="transition hover:text-white/45">Sign in</Link>
            <Link href="/signup" className="transition hover:text-white/45">Sign up</Link>
            {demoEnabled && <Link href="/demo" className="transition hover:text-white/45">Demo</Link>}
          </div>
        </div>
      </footer>

    </main>
  )
}
