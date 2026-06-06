import Link from "next/link";

const ministryPreviews = [
  { name: "Youth Ministry", commitment: "Weekly", spots: 3, tag: "Faith Formation" },
  { name: "Food Pantry", commitment: "Monthly", spots: 5, tag: "Outreach" },
  { name: "Easter Sunday Setup", commitment: "One-time", spots: 8, tag: "Hospitality" },
];

const features = [
  {
    icon: "🤝",
    title: "Connect",
    body: "Browse open volunteer opportunities across every ministry in your church, all in one place.",
  },
  {
    icon: "📋",
    title: "Apply",
    body: "Express your interest in a few clicks. Organizers review and respond so nothing falls through the cracks.",
  },
  {
    icon: "✨",
    title: "Serve",
    body: "Show up, make a difference, and help grow a lasting culture of service in your parish.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf7]">

      {/* Nav */}
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-display)" }}>S</span>
          </div>
          <span className="text-xl font-black text-stone-900" style={{ fontFamily: "var(--font-display)" }}>
            ServeKin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors px-3 py-2"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-md"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Open opportunities across 15+ ministries
            </div>

            <h1
              className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-stone-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Willing hearts,{" "}
              <span className="text-amber-500 italic">meaningful</span>{" "}
              work.
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed max-w-md">
              ServeKin helps churches connect with their community through meaningful volunteer opportunities — from discovery to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start volunteering →
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#f3e8c8] hover:border-amber-300 text-stone-700 font-semibold text-base px-8 py-4 rounded-2xl transition-all"
              >
                Sign in
              </Link>
            </div>

            <p className="text-sm text-stone-400 font-medium">
              Free to join · No membership required
            </p>
          </div>

          {/* Right — decorative ministry card preview */}
          <div className="hidden md:flex flex-col gap-4 relative py-4">
            {/* Ambient blobs */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -bottom-12 -left-8 w-52 h-52 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            {ministryPreviews.map((m, i) => (
              <div
                key={m.name}
                className="relative bg-white border border-[#f3e8c8] rounded-2xl p-5 transition-all hover:-translate-y-0.5"
                style={{
                  boxShadow: "var(--shadow-warm-md)",
                  transform: `translateX(${i === 1 ? "28px" : "0px"})`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                        {m.commitment}
                      </span>
                      <span className="text-xs text-stone-400">·</span>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                        {m.tag}
                      </span>
                    </div>
                    <h3
                      className="text-base font-bold text-stone-800"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.name}
                    </h3>
                    <p className="text-sm text-stone-400">
                      {m.spots} spots available
                    </p>
                  </div>
                  <button className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#fef9ec] border-t border-[#f3e8c8] px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-black text-stone-800 mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-3">
                <span className="text-4xl">{f.icon}</span>
                <h3
                  className="text-xl font-bold text-stone-800"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 px-6 md:px-12 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl md:text-3xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to find your calling?
            </h2>
            <p className="text-amber-100 mt-1">
              Join hundreds of volunteers already serving their community.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-amber-600 font-bold text-base px-8 py-4 rounded-2xl hover:bg-amber-50 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Create your account →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fffdf7] border-t border-[#f3e8c8] px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-black text-stone-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ServeKin
          </span>
          <span className="text-sm text-stone-400">
            © 2026 ServeKin · Built for the parish.
          </span>
        </div>
      </footer>
    </div>
  );
}
