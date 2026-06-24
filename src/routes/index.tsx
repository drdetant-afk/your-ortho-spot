import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Phone, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/logo-gold.png.asset.json";
import afficheAsset from "@/assets/affiche-orthodontie.png.asset.json";
import conseilsInconfortAsset from "@/assets/conseils-inconfort-v3.png.asset.json";
import exterieurAsset from "@/assets/exterieur-cabinet.jpg.asset.json";
import cabinet1 from "@/assets/cabinet-warm-1.jpg.asset.json";
import cabinet2 from "@/assets/cabinet-warm-2.jpg.asset.json";
import cabinet3 from "@/assets/cabinet-warm-3.jpg.asset.json";
import drDetantAsset from "@/assets/dr-detant-warm.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
});

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

function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-primary/95 text-primary-foreground border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Dr Détant Lucas" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gold">Dr Détant Lucas</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/70">Orthodontie · Bussac-Forêt</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#cabinet" className="hover:text-gold transition">Le cabinet</a>
            <a href="#specialite" className="hover:text-gold transition">Spécialité</a>
            <a href="#conseils" className="hover:text-gold transition">Fiches conseils</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
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
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-6">Spécialiste qualifié</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Orthodontie<br />
              <span className="text-gold italic">Dento-Faciale</span>
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
                href="#cabinet"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 hover:bg-gold/10 transition"
              >
                Découvrir le cabinet
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logoAsset.url}
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

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={drDetantAsset.url}
              alt="Dr Lucas Détant, spécialiste en orthodontie dento-faciale"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover ring-1 ring-gold/30"
            />
          </div>
          <div className="order-2 grid gap-5">
            {[
              { icon: GraduationCap, title: "Spécialiste qualifié", text: "Diplôme de spécialiste en Orthopédie Dento-Faciale (ODF). Ancien interne des Hôpitaux de Toulouse." },
              { icon: Sparkles, title: "Traitements modernes", text: "Multi-attaches, traitements interceptifs, fonctionnels et mécaniques." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold/50 transition group">
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

      <section id="cabinet" className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">Le cabinet</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">
              Un lieu calme & lumineux
            </h2>
            <GoldDivider />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[cabinet1, cabinet2, cabinet3].map((asset, i) => (
              <div key={i} className="overflow-hidden rounded-2xl group">
                <img
                  src={asset.url}
                  alt={`Cabinet du Dr Détant ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conseils" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gold tracking-[0.25em] uppercase text-xs">À découvrir</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-primary">Fiches conseils</h2>
            <GoldDivider />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des informations claires pour mieux comprendre l'orthodontie et préparer votre consultation.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8 items-start">
            <div className="block rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={afficheAsset.url} alt="L'Orthodontie : Consultation et Traitement" loading="lazy" className="w-full h-auto" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-primary">L'Orthodontie : Consultation et Traitement</h3>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex gap-3"><span className="text-gold mt-1">●</span><span><strong className="text-foreground">Début du traitement</strong> de 6 à 12 ans environ — l'âge idéal pour dépister et commencer.</span></li>
                <li className="flex gap-3"><span className="text-gold mt-1">●</span><span><strong className="text-foreground">Traitement interceptif (précoce)</strong> — agit sur la croissance osseuse pour éviter des problèmes majeurs.</span></li>
                <li className="flex gap-3"><span className="text-gold mt-1">●</span><span><strong className="text-foreground">Traitement correctif (adolescent)</strong> — aligne les dents permanentes une fois la croissance stable.</span></li>
                <li className="flex gap-3"><span className="text-gold mt-1">●</span><span>Les traitements doivent débuter <strong className="text-foreground">avant 16 ans</strong> pour une prise en charge par la Sécurité sociale.</span></li>
                <li className="flex gap-3"><span className="text-gold mt-1">●</span><span>Il n'est <strong className="text-foreground">pas nécessaire d'être adressé</strong> pour consulter un orthodontiste.</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-sm">
            <img src={conseilsInconfortAsset.url} alt="Conseils en cas d'inconfort ou de blessure" loading="lazy" className="w-full h-auto" />
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
                <span className="text-primary-foreground/70">Coordonnées disponibles sur Doctolib</span>
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
          <div className="rounded-2xl overflow-hidden border border-gold/20 min-h-[320px]">
            <iframe
              title="Carte du cabinet"
              src="https://www.google.com/maps?q=26+Place+du+Champ+de+Foire,+17210+Bussac-For%C3%AAt&output=embed"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 border-t border-gold/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-8 w-8 object-contain" />
            <span className="font-serif text-gold">Dr Détant Lucas</span>
          </div>
          <p>© {new Date().getFullYear()} Dr Lucas Détant — Spécialiste en Orthodontie Dento-Faciale</p>
        </div>
      </footer>
    </div>
  );
}
