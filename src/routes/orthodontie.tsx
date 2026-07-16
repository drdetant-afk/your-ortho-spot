import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DandelionSeeds } from "@/components/DandelionSeeds";
import { Calendar, MapPin, Phone, Mail, Car, GraduationCap, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import logoUrl from "@/assets/logo-gold.png";
import conseilsInconfortUrl from "@/assets/conseils-inconfort-v4.png";
import afficheUrl from "@/assets/affiche-orthodontie.png";
import drDetantUrl from "@/assets/dr-detant-warm.png";
import exterieurUrl from "@/assets/exterieur-cabinet.png";

const SITE_URL = "https://www.dentairebussacforet.fr";

export const Route = createFileRoute("/orthodontie")({
  head: () => ({
    meta: [
      { title: "Orthodontie — Dr Lucas Détant | Cabinet Dandelion, Bussac-Forêt" },
      { name: "description", content: "Spécialiste qualifié en Orthodontie, Orthopédie Dento-Faciale. Dr Lucas Détant vous accueille au Cabinet Dandelion à Bussac-Forêt (17210). Rendez-vous en ligne." },
      { property: "og:url", content: `${SITE_URL}/orthodontie` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/orthodontie` }],
  }),
  component: OrthodontiePage,
});

// Données structurées "orthodontiste" pour le référencement local
const ORTHO_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr Lucas Détant",
  url: `${SITE_URL}/orthodontie`,
  image: `${SITE_URL}/images/dr-detant-warm.png`,
  telephone: "+33546707287",
  medicalSpecialty: "Orthodontie — Orthopédie Dento-Faciale",
  address: {
    "@type": "PostalAddress",
    streetAddress: "26 Place du Champ de Foire",
    postalCode: "17210",
    addressLocality: "Bussac-Forêt",
    addressCountry: "FR",
  },
  parentOrganization: {
    "@type": "Dentist",
    name: "Cabinet Dentaire Dandelion",
    url: `${SITE_URL}/`,
  },
  sameAs: [
    "https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret",
  ],
};

const DOCTOLIB_URL =
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

function OrthodontiePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORTHO_JSONLD) }}
      />
      <div className="bg-secondary/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-9 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Cabinet Dandelion — page d'accueil
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur bg-primary/95 text-primary-foreground border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" title="Retour à l'accueil du Cabinet Dandelion">
            <img src={logoUrl} alt="Cabinet Dandelion" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gold">Dr Détant Lucas</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/70">Orthodontie · Bussac-Forêt</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="nav-link inline-flex items-center gap-1.5 hover:text-gold transition">
              <ArrowLeft className="w-3.5 h-3.5" />
              Accueil
            </Link>
            <a href="#specialite" className="nav-link hover:text-gold transition">Spécialité</a>
            <a href="#conseils" className="nav-link hover:text-gold transition">Fiches conseils</a>
            <a href="#contact" className="nav-link hover:text-gold transition">Contact</a>
          </nav>
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-primary text-sm font-medium hover:bg-gold-soft transition"
          >
            <Calendar className="w-4 h-4" />
            Doctolib
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 80% 30%, oklch(0.74 0.13 78 / 0.35), transparent 50%)",
        }} />
        <DandelionSeeds className="absolute inset-0 h-full w-full" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-6">Spécialiste qualifié</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Orthodontie<br />
              <span className="text-gold italic">Orthopédie Dento-Faciale</span>
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-lg font-light">
              Dr <strong className="font-medium">Lucas Détant</strong> vous accueille
              à Bussac-Forêt. Un suivi orthodontique attentif,
              pour enfants, adolescents et adultes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary font-medium hover:bg-gold-soft transition shadow-lg shadow-black/20"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <a
                href="#specialite"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 hover:bg-gold/10 transition"
              >
                Notre approche
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logoUrl}
              alt="Emblème Dr Détant Lucas"
              className="mx-auto w-full max-w-md drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </section>

      <section id="specialite" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold tracking-[0.25em] uppercase text-xs">Notre approche</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
            Une expertise dédiée à votre sourire
          </h2>
          <GoldDivider />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diplômé en Orthopédie Dento-Faciale, ancien interne des Hôpitaux de Toulouse,
            le Dr Détant met son expertise au service de tous les âges, avec des traitements
            adaptés et personnalisés.
          </p>
        </div>

        <div className="reveal max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={drDetantUrl}
              alt="Dr Lucas Détant, spécialiste en orthodontie dento-faciale"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover ring-1 ring-gold/30"
            />
          </div>
          <div className="order-2 grid gap-5">
            {[
              { icon: GraduationCap, title: "Spécialiste qualifié", text: "Diplôme de spécialiste en Orthopédie Dento-Faciale (ODF). Ancien interne des Hôpitaux de Toulouse." },
              { icon: Sparkles, title: "Traitements modernes", text: "Multi-attaches, traitements interceptifs, fonctionnels et mécaniques." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold/50 hover:-translate-y-1 hover:shadow-lg transition duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-gold/10 group-hover:text-gold transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl mt-6 text-primary">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conseils" className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">À découvrir</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">Fiches conseils</h2>
            <GoldDivider />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des informations claires pour mieux comprendre l'orthodontie et préparer votre consultation.
            </p>
          </div>

          <div className="reveal mt-14 max-w-2xl mx-auto">
            <Tabs defaultValue="demarrer" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="demarrer">Quand démarrer</TabsTrigger>
                <TabsTrigger value="urgence">Urgence</TabsTrigger>
              </TabsList>
              <TabsContent value="demarrer" className="data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-3 data-[state=active]:duration-500">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img src={afficheUrl} alt="L'Orthodontie : Consultation et Traitement" loading="lazy" className="w-full h-auto" />
                </div>
              </TabsContent>
              <TabsContent value="urgence" className="data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-3 data-[state=active]:duration-500">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img src={conseilsInconfortUrl} alt="Conseils en cas d'inconfort ou de blessure" loading="lazy" className="w-full h-auto" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs">Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Nous rendre visite</h2>
            <GoldDivider />
            <ul className="space-y-5 mt-8 text-primary-foreground/85">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span>26 Place du Champ de Foire<br />17210 Bussac-Forêt</span>
              </li>
              <li className="flex gap-4"><Calendar className="w-5 h-5 text-gold mt-1 shrink-0" />
                <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition underline-offset-4 hover:underline">
                  Prise de rendez-vous en ligne sur Doctolib
                </a>
              </li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <a href="tel:+33546707287" className="hover:text-gold transition">05 46 70 72 87</a>
              </li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                <a href="mailto:secretariat@dentairebussacforet.fr" className="hover:text-gold transition">secretariat@dentairebussacforet.fr</a>
              </li>
              <li className="flex gap-4"><Car className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span>Parking gratuit à proximité</span>
              </li>
            </ul>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary font-medium hover:bg-gold-soft transition mt-10"
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </a>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <img src={exterieurUrl} alt="Extérieur du cabinet du Dr Détant à Bussac-Forêt" loading="lazy" className="w-full h-56 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gold/20 min-h-[280px]">
              <iframe
                title="Carte du cabinet"
                src="https://www.google.com/maps?q=26+Place+du+Champ+de+Foire,+17210+Bussac-For%C3%AAt&output=embed"
                className="w-full h-full min-h-[280px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 border-t border-gold/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="" className="h-8 w-8 object-contain" />
            <span className="font-serif text-gold">Dr Détant Lucas</span>
          </div>
          <Link to="/" className="hover:text-gold transition">
            ← Retour au Cabinet Dandelion
          </Link>
          <p>© {new Date().getFullYear()} Dr Lucas Détant — Spécialiste en Orthopédie Dento-Faciale</p>
        </div>
      </footer>

      <a
        href="#top"
        aria-label="Retour en haut"
        className="group fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary border border-gold/30 shadow-2xl flex items-center justify-center overflow-hidden hover:bg-primary/90 transition"
      >
        <img
          src={logoUrl}
          alt="Dr Détant Lucas"
          className="h-10 w-10 object-contain transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
        />
      </a>
    </div>
  );
}
