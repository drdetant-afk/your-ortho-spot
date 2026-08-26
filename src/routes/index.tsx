import { createFileRoute, Link } from "@tanstack/react-router";
import { DandelionSeeds } from "@/components/DandelionSeeds";
import { Statement, KeyFigures } from "@/components/Statement";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Car,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import logoUrl from "@/assets/logo-gold.png";
import cabinet1 from "@/assets/cabinet-warm-1.png";
import cabinet2 from "@/assets/cabinet-warm-2.png";
import cabinet3 from "@/assets/cabinet-warm-3.png";
import drDetantUrl from "@/assets/dr-detant-warm.png";
import exterieurUrl from "@/assets/exterieur-cabinet.png";
import afficheUrl from "@/assets/affiche-orthodontie.png";
import drJustineYeUrl from "@/assets/dr-justine-ye.jpg";
import equipeUrl from "@/assets/equipe-cabinet.webp";

const SITE_URL = "https://www.dentairebussacforet.fr";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cabinet Dandelion — Dentiste & Orthodontiste à Bussac-Forêt" },
      { name: "description", content: "Cabinet dentaire Dandelion à Bussac-Forêt (17210) : dentisterie générale et orthodontie. Une équipe à votre écoute pour toute la famille." },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: CabinetHomePage,
});

// Données structurées "cabinet dentaire" pour le référencement local
const CABINET_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Cabinet Dentaire Dandelion",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/exterieur-cabinet.png`,
  logo: `${SITE_URL}/images/logo-gold.png`,
  telephone: "+33546707287",
  email: "secretariat@dentairebussacforet.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "26 Place du Champ de Foire",
    postalCode: "17210",
    addressLocality: "Bussac-Forêt",
    addressCountry: "FR",
  },
  employee: [
    {
      "@type": "Person",
      name: "Dr Lucas Détant",
      jobTitle: "Orthodontiste — Spécialiste en Orthopédie Dento-Faciale",
    },
    {
      "@type": "Person",
      name: "Dr Justine Ye",
      jobTitle: "Chirurgien-dentiste généraliste",
    },
  ],
  sameAs: [
    "https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret",
    "https://www.pagesjaunes.fr/pros/64559455",
  ],
};

// Numéro du secrétariat, partagé par les deux praticiens du cabinet.
const PHONE_DISPLAY = "05 46 70 72 87";
const PHONE_TEL = "tel:+33546707287";
const MAIL = "secretariat@dentairebussacforet.fr";
const DOCTOLIB_ORTHO_URL =
  "https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret";

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <span className="h-px w-12 bg-gold/60" />
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}

function CabinetHomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CABINET_JSONLD) }}
      />
      <header className="sticky top-0 z-40 backdrop-blur bg-primary/95 text-primary-foreground border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoUrl} alt="Cabinet Dandelion" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gold">Cabinet Dandelion</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/70">
                Chirurgiens-dentistes · Bussac-Forêt
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#cabinet" className="nav-link hover:text-gold transition">Le cabinet</a>
            <a href="#equipe" className="nav-link hover:text-gold transition">L'équipe</a>
            <Link to="/orthodontie" className="nav-link hover:text-gold transition">Orthodontie</Link>
            <a href="#contact" className="nav-link hover:text-gold transition">Contact</a>
          </nav>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-primary text-sm font-medium hover:bg-gold-soft transition"
          >
            <Phone className="w-4 h-4" />
            Nous appeler
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, oklch(0.74 0.13 78 / 0.35), transparent 50%)",
          }}
        />
        <DandelionSeeds className="absolute inset-0 h-full w-full" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-6">
              Cabinet dentaire
            </p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Cabinet Dandelion
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-lg font-light">
              Un cabinet dentaire familial à <strong className="font-medium">Bussac-Forêt</strong>,
              réunissant dentisterie générale et orthodontie pour prendre soin du sourire
              de toute la famille, à chaque étape de la vie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary font-medium hover:bg-gold-soft transition shadow-lg shadow-black/20"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <Link
                to="/orthodontie"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 hover:bg-gold/10 transition"
              >
                Découvrir l'orthodontie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="parallax-slow relative">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={exterieurUrl}
              alt="Façade du Cabinet Dandelion à Bussac-Forêt"
              className="relative w-full rounded-3xl shadow-xl object-cover ring-1 ring-gold/30 max-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Bandeau de mise en avant de l'orthodontie */}
      <section className="py-6 px-6 bg-secondary/60 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">Traitement orthodontique en cours ou à prévoir ?</span>{" "}
            Retrouvez toutes les informations du Dr Lucas Détant sur sa page dédiée.
          </p>
          <Link
            to="/orthodontie"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground text-sm font-medium hover:bg-primary/90 transition shrink-0"
          >
            Page Orthodontie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Statement
        eyebrow="Notre engagement"
        lines={[
          <>Prendre soin de votre</>,
          <><em>sourire</em>, simplement.</>,
        ]}
      />

      <section id="cabinet" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold tracking-[0.25em] uppercase text-xs">Le cabinet</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
            Un lieu calme & lumineux
          </h2>
          <GoldDivider />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Situé au cœur de Bussac-Forêt, le Cabinet Dandelion vous accueille dans un
            cadre pensé pour votre confort, équipé des outils nécessaires à des soins
            dentaires modernes et rassurants, pour les enfants comme pour les adultes.
          </p>
        </div>

        <div className="reveal max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-5">
          {[cabinet1, cabinet2, cabinet3].map((asset, i) => (
            <div key={i} className="overflow-hidden rounded-2xl group">
              <img
                src={asset}
                alt={`Cabinet Dandelion — vue ${i + 1}`}
                loading="lazy"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      <KeyFigures
        figures={[
          { value: "2", label: "praticiens, généraliste et orthodontiste" },
          { value: "3", label: "salles de soins équipées" },
          { value: "2025", label: "un cabinet ouvert et pensé pour votre confort" },
          { value: "0 €", label: "parking gratuit à deux pas" },
        ]}
      />

      <section id="equipe" className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">L'équipe</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
              Deux expertises complémentaires
            </h2>
            <GoldDivider />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Le Cabinet Dandelion réunit une chirurgienne-dentiste généraliste et un
              orthodontiste, pour un suivi dentaire complet, du plus jeune au plus âgé.
            </p>
          </div>

          <div className="reveal mt-14 grid md:grid-cols-2 gap-8">
            {/* Dr Lucas Détant — Orthodontiste */}
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center hover:border-gold/50 hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <img
                src={drDetantUrl}
                alt="Dr Lucas Détant"
                className="w-40 h-40 rounded-full object-cover ring-2 ring-gold/40"
              />
              <h3 className="font-serif text-2xl mt-6 text-primary">Dr Lucas Détant</h3>
              <p className="text-gold text-sm tracking-wide uppercase mt-1">
                Orthodontiste — Orthopédie Dento-Faciale
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Spécialiste qualifié en Orthopédie Dento-Faciale, ancien interne des
                Hôpitaux de Toulouse. Suivi orthodontique pour enfants, adolescents et adultes.
              </p>
              <Link
                to="/orthodontie"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-primary text-sm font-medium hover:bg-primary/5 transition"
              >
                Voir la page Orthodontie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Dr Justine Ye — Chirurgien-dentiste généraliste */}
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center hover:border-gold/50 hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <img
                src={drJustineYeUrl}
                alt="Dr Justine Ye"
                className="w-40 h-40 rounded-full object-cover ring-2 ring-gold/40"
              />
              <h3 className="font-serif text-2xl mt-6 text-primary">
                Dr Justine Ye
              </h3>
              <p className="text-gold text-sm tracking-wide uppercase mt-1">
                Chirurgien-dentiste généraliste
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Soins conservateurs, prévention, parodontie et esthétique dentaire.
              </p>
            </div>
          </div>

          <div className="reveal mt-14 relative">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={equipeUrl}
              alt="L'équipe du Cabinet Dandelion à l'accueil"
              loading="lazy"
              className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-xl object-cover ring-1 ring-gold/30"
            />
            <p className="relative text-center text-sm text-muted-foreground mt-5">
              Toute l'équipe du Cabinet Dandelion vous accueille à Bussac-Forêt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">Nos soins</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
              Un suivi dentaire complet
            </h2>
            <GoldDivider />
          </div>
          <div className="reveal mt-14 grid md:grid-cols-4 gap-5">
            {[
              { icon: Stethoscope, title: "Dentisterie générale", text: "Soins conservateurs, détartrage, prévention et suivi régulier." },
              { icon: Sparkles, title: "Orthodontie", text: "Traitements pour enfants, adolescents et adultes, avec le Dr Détant." },
              { icon: Smile, title: "Esthétique dentaire", text: "Des solutions pour retrouver confiance dans votre sourire." },
              { icon: ShieldCheck, title: "Parodontie", text: "Prévention et traitement des maladies de gencives et des tissus de soutien des dents." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:border-gold/50 hover:-translate-y-1 hover:shadow-lg transition duration-300 group">
                <div className="w-11 h-11 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-gold/10 group-hover:text-gold transition">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl mt-5 text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={afficheUrl}
              alt="L'orthodontie au Cabinet Dandelion"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover ring-1 ring-gold/30"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">Focus</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
              L'orthodontie chez Dandelion
            </h2>
            <GoldDivider />
            <p className="text-muted-foreground leading-relaxed">
              Le Dr Lucas Détant, spécialiste qualifié en Orthopédie Dento-Faciale,
              consulte au sein du Cabinet Dandelion. Retrouvez sa présentation complète,
              ses traitements et la prise de rendez-vous en ligne sur sa page dédiée.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/orthodontie"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
              >
                Découvrir la page Orthodontie
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={DOCTOLIB_ORTHO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-primary text-sm font-medium hover:bg-primary/5 transition"
              >
                <Calendar className="w-4 h-4" />
                Rendez-vous en orthodontie
              </a>
            </div>
          </div>
        </div>
      </section>

      <Statement
        tone="light"
        eyebrow="Votre rendez-vous"
        lines={[
          <>Un cabinet neuf,</>,
          <>une équipe <em>proche</em>.</>,
        ]}
        footer={
          <>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={DOCTOLIB_ORTHO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-primary font-medium hover:bg-primary/5 transition"
            >
              <Calendar className="w-5 h-5" />
              RDV orthodontie
            </a>
          </>
        }
      />

      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs">Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Nous rendre visite</h2>
            <GoldDivider />
            <ul className="space-y-5 mt-8 text-primary-foreground/85">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span>26 Place du Champ de Foire<br />17210 Bussac-Forêt</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <a href={PHONE_TEL} className="hover:text-gold transition">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                <a href={`mailto:${MAIL}`} className="hover:text-gold transition">{MAIL}</a>
              </li>
              <li className="flex gap-4">
                <Car className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span>Parking gratuit à proximité</span>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary font-medium hover:bg-gold-soft transition"
              >
                <Phone className="w-5 h-5" />
                Appeler le secrétariat
              </a>
              <a
                href={DOCTOLIB_ORTHO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 hover:bg-gold/10 transition"
              >
                <Calendar className="w-5 h-5" />
                RDV orthodontie (Doctolib)
              </a>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <img
                src={exterieurUrl}
                alt="Extérieur du Cabinet Dandelion à Bussac-Forêt"
                loading="lazy"
                className="w-full h-56 object-cover"
              />
            </div>
            {/* Lien vers Google Maps plutôt qu'une iframe : aucun cookie Google
                n'est déposé tant que le visiteur ne clique pas (RGPD/CNIL) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=26+Place+du+Champ+de+Foire%2C+17210+Bussac-For%C3%AAt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gold/20 min-h-[280px] flex flex-col items-center justify-center gap-4 text-center px-6 hover:border-gold/50 hover:bg-gold/5 transition group"
            >
              <MapPin className="w-10 h-10 text-gold" />
              <div>
                <p className="font-serif text-2xl text-gold">Nous trouver</p>
                <p className="mt-2 text-primary-foreground/80 text-sm">
                  26 Place du Champ de Foire<br />17210 Bussac-Forêt
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm border border-gold/40 rounded-full px-5 py-2.5 group-hover:bg-gold/10 transition">
                Ouvrir l'itinéraire dans Google Maps
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 border-t border-gold/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="" className="h-8 w-8 object-contain" />
            <span className="font-serif text-gold">Cabinet Dandelion</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/orthodontie" className="hover:text-gold transition">Orthodontie</Link>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
            <Link to="/mentions-legales" className="hover:text-gold transition">Mentions légales</Link>
          </nav>
          <p>© {new Date().getFullYear()} Cabinet Dandelion — Bussac-Forêt</p>
        </div>
      </footer>

      <a
        href="#top"
        aria-label="Retour en haut"
        className="group fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary border border-gold/30 shadow-2xl flex items-center justify-center overflow-hidden hover:bg-primary/90 transition"
      >
        <img src={logoUrl} alt="Cabinet Dandelion" className="h-10 w-10 object-contain transition-transform duration-700 ease-out group-hover:rotate-[360deg]" />
      </a>
    </div>
  );
}
