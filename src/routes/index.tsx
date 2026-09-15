import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroPortrait from "@/assets/photos/red-lehenga.jpeg";
import redSaree from "@/assets/photos/red-saree.jpeg";
import blue1 from "@/assets/photos/blue-jumpsuit-1.jpeg";
import blue2 from "@/assets/photos/blue-jumpsuit-2.jpeg";
import extra1 from "@/assets/photos/extra-1.jpeg";
import extra2 from "@/assets/photos/extra-2.jpeg";
import extra3 from "@/assets/photos/extra-3.jpeg";

export const Route = createFileRoute("/")({ component: Index });

const NAV = [
  { id: "about", label: "About" },
  { id: "journey", label: "Bharatanatyam" },
  { id: "acting", label: "Acting" },
  { id: "theater", label: "Theater" },
  { id: "csr", label: "CSR" },
  { id: "gallery", label: "Gallery" },
  { id: "awards", label: "Awards" },
  { id: "press", label: "Press" },
  { id: "contact", label: "Contact" },
];

const HIGHLIGHTS = [
  { n: "15+", l: "Years of Training" },
  { n: "100+", l: "Stage Performances" },
  { n: "1", l: "TV Lead Debut — Shambavi" },
  { n: "10+", l: "Theater Productions" },
  { n: "5+", l: "CSR Initiatives" },
];

const TIMELINE = [
  { y: "2009", t: "Began Bharatanatyam training under classical gurus" },
  { y: "2013", t: "First solo stage performance — Arangetram preparation" },
  { y: "2017", t: "Major temple and festival recitals across India" },
  { y: "2021", t: "Entered theater — multiple lead roles" },
  { y: "2024", t: "Launched community CSR initiatives" },
  { y: "2026", t: "Television debut — Lead role in Shambavi" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl tracking-wide">
          Sameeksha<span className="text-primary">.</span>
        </a>
        <nav className="hidden lg:flex gap-7 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90">Book Sameeksha</a>
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="menu">≡</button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-1">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-[0.35em] uppercase text-primary mb-6">Bharatanatyam · Television · Theater</p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Sameeksha
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl font-light">
            Bharatanatyam artist · Actress · Performer · Social contributor.
            Currently making her television debut as the lead in <span className="text-foreground font-medium italic">Shambavi</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#gallery" className="px-7 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">View Portfolio</a>
            <a href="#contact" className="px-7 py-3 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition">Contact Me</a>
            <a href="#journey" className="px-7 py-3 rounded-full text-primary hover:underline underline-offset-4">Watch Performances →</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
          <img src={heroPortrait} alt="Sameeksha in classical red attire" className="relative rounded-[2rem] shadow-2xl object-cover w-full max-h-[640px]" />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border px-5 py-3 rounded-xl shadow-lg">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Debut Serial</p>
            <p className="font-serif text-xl">Shambavi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="py-20 border-y border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {HIGHLIGHTS.map((h) => (
          <div key={h.l}>
            <div className="font-serif text-4xl md:text-5xl text-primary">{h.n}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{h.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-primary">{kicker}</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="About" title="A storyteller in rhythm and expression">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>Sameeksha is a classically trained Bharatanatyam artist whose journey began in childhood under the guidance of revered gurus. Her dance is rooted in tradition yet shaped by a contemporary sensibility — blending precise <em>nritta</em> with deeply expressive <em>abhinaya</em>.</p>
          <p>Beyond the dance floor, she has earned recognition on stage and screen — making her television lead debut in <span className="text-foreground font-medium">Shambavi</span>, and performing principal roles in theater productions across the country.</p>
          <p>Her practice is grounded in service. Through community workshops and NGO collaborations, Sameeksha uses art as a tool for awareness and upliftment.</p>
        </div>
        <div className="space-y-4">
          <img src={blue2} alt="Sameeksha portrait" className="rounded-2xl w-full object-cover aspect-[3/4]" />
          <p className="text-sm italic text-muted-foreground">“Dance is not what I do — it is the language I think in.”</p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-serif text-2xl mb-8">Timeline</h3>
        <ol className="relative border-l border-primary/30 ml-2">
          {TIMELINE.map((t) => (
            <li key={t.y} className="mb-8 ml-6">
              <span className="absolute -left-2 w-4 h-4 rounded-full bg-primary" />
              <h4 className="font-serif text-xl">{t.y}</h4>
              <p className="text-muted-foreground">{t.t}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Journey() {
  const items = [
    { t: "Training", d: "Over a decade of rigorous Bharatanatyam training in the Pandanallur and Vazhuvoor traditions." },
    { t: "Gurus & Mentors", d: "Shaped by senior gurus who instilled discipline, devotion, and adavu precision." },
    { t: "Major Performances", d: "Solo recitals at temple festivals, classical sabhas, and cultural events." },
    { t: "Repertoire", d: "Margam — Alarippu, Jathiswaram, Shabdam, Varnam, Padams, Thillana." },
    { t: "Workshops", d: "Conducts beginner and intermediate workshops for young aspiring dancers." },
    { t: "Achievements", d: "Recognised at state level dance competitions and cultural festivals." },
  ];
  return (
    <Section id="journey" kicker="Bharatanatyam" title="The classical journey">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.t} className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition group">
            <h3 className="font-serif text-2xl text-primary group-hover:translate-x-1 transition">{i.t}</h3>
            <p className="mt-3 text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Acting() {
  const shows = [
    { name: "Shambavi", role: "Shambavi (Lead)", year: "2026", note: "Television debut — playing the spirited titular character.", img: redSaree, lead: true },
  ];
  return (
    <Section id="acting" kicker="Acting" title="On screen">
      <div className="grid lg:grid-cols-2 gap-10">
        {shows.map((s) => (
          <div key={s.name} className="rounded-3xl overflow-hidden border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              {s.lead && <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1 rounded-full">Debut · Lead</span>}
            </div>
            <div className="p-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.year}</p>
              <h3 className="font-serif text-3xl mt-1">{s.name}</h3>
              <p className="mt-1 text-primary">{s.role}</p>
              <p className="mt-3 text-muted-foreground">{s.note}</p>
            </div>
          </div>
        ))}
        <div className="rounded-3xl border border-dashed border-border p-10 flex flex-col justify-center">
          <h3 className="font-serif text-2xl mb-3">More projects coming soon</h3>
          <p className="text-muted-foreground">New roles, behind-the-scenes glimpses and trailer drops will be announced here.</p>
          <a href="#contact" className="mt-6 text-primary hover:underline">For casting inquiries →</a>
        </div>
      </div>
    </Section>
  );
}

function Theater() {
  const plays = [
    { name: "Antarmukhi", role: "Lead", director: "—", venue: "Ravindra Bharathi", year: "2024" },
    { name: "Maitri", role: "Supporting", director: "—", venue: "Prithvi Theatre", year: "2023" },
    { name: "Stree", role: "Lead", director: "—", venue: "Cultural Centre", year: "2022" },
  ];
  return (
    <Section id="theater" kicker="Theater" title="On stage">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-xs uppercase tracking-widest text-muted-foreground border-b border-border">
            <tr><th className="py-3">Play</th><th>Role</th><th>Director</th><th>Venue</th><th>Year</th></tr>
          </thead>
          <tbody className="font-serif text-lg">
            {plays.map((p) => (
              <tr key={p.name} className="border-b border-border/60 hover:bg-secondary/40 transition">
                <td className="py-5 text-primary">{p.name}</td>
                <td>{p.role}</td>
                <td>{p.director}</td>
                <td>{p.venue}</td>
                <td>{p.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function CSR() {
  const items = [
    { t: "Arts for Underserved Kids", d: "Free Bharatanatyam workshops for children in rural districts." },
    { t: "Women Safety Campaigns", d: "Performance-led awareness drives with partner NGOs." },
    { t: "Education Drives", d: "Fundraisers for school supplies and scholarships." },
    { t: "Cultural Heritage", d: "Preservation events celebrating Indian classical traditions." },
  ];
  return (
    <Section id="csr" kicker="CSR & Social" title="Art with purpose">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((i) => (
          <div key={i.t} className="p-7 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 border border-border">
            <h3 className="font-serif text-2xl">{i.t}</h3>
            <p className="mt-2 text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const imgs = [heroPortrait, redSaree, blue1, blue2, extra1, extra2, extra3];
  return (
    <Section id="gallery" kicker="Gallery" title="Moments in motion">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {imgs.map((src, i) => (
          <div key={i} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl group">
            <img src={src} alt={`Sameeksha ${i + 1}`} loading="lazy" className="w-full object-cover group-hover:scale-105 transition duration-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Awards() {
  const items = [
    "Best Classical Dancer — State Cultural Festival",
    "Young Artist Recognition — Sangeet Sabha",
    "Theater Excellence Award",
    "Featured in regional dailies for Shambavi debut",
  ];
  return (
    <Section id="awards" kicker="Awards" title="Recognition">
      <ul className="grid md:grid-cols-2 gap-5">
        {items.map((i) => (
          <li key={i} className="flex gap-4 p-6 rounded-xl border border-border bg-card">
            <span className="text-accent text-2xl">✦</span>
            <span className="text-lg">{i}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Press() {
  const items = [
    { src: "Times Cultural", t: "“A debut to watch” — feature on Shambavi" },
    { src: "Classical Today", t: "Interview: Tradition meets television" },
    { src: "Stage Daily", t: "Review of recent theater outing" },
  ];
  return (
    <Section id="press" kicker="Media & Press" title="In the press">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <article key={i.t} className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition">
            <p className="text-xs uppercase tracking-widest text-primary">{i.src}</p>
            <p className="mt-3 font-serif text-xl">{i.t}</p>
            <p className="mt-4 text-sm text-muted-foreground">Read article →</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Let's collaborate">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">For event bookings, acting opportunities, dance performances and collaborations.</p>
          <div className="space-y-3 text-lg">
            <p><span className="text-muted-foreground">Email · </span>sameekshakp5@gmail.com</p>
            <p><span className="text-muted-foreground">Phone · </span>+91 93531 01818</p>
          </div>
          <div className="flex gap-3 pt-2">
            {["Instagram", "YouTube", "Facebook"].map((s) => (
              <a key={s} href="#" className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition text-sm">{s}</a>
            ))}
          </div>
        </div>
        <form className="space-y-4 p-8 rounded-2xl bg-card border border-border" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Sameeksha's team will reach out shortly."); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded-lg border border-border bg-background" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-border bg-background" />
          </div>
          <input placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
          <select className="w-full px-4 py-3 rounded-lg border border-border bg-background">
            <option>Event booking</option>
            <option>Acting opportunity</option>
            <option>Dance performance</option>
            <option>Collaboration</option>
          </select>
          <textarea required placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
          <button className="w-full py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Send message</button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sameeksha. All rights reserved.</p>
        <p className="font-serif italic">Bharatanatyam · Television · Theater · Service</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Journey />
        <Acting />
        <Theater />
        <CSR />
        <Gallery />
        <Awards />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
