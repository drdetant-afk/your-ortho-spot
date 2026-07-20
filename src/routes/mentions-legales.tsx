import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@/assets/logo-gold.png";

const SITE_URL = "https://www.dentairebussacforet.fr";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Cabinet Dandelion, Bussac-Forêt" },
      { name: "description", content: "Mentions légales du site du Cabinet Dentaire Dandelion à Bussac-Forêt (17210)." },
      { property: "og:url", content: `${SITE_URL}/mentions-legales` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/mentions-legales` }],
  }),
  component: MentionsLegalesPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl text-primary">{title}</h2>
      <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-primary/95 text-primary-foreground border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" title="Retour à l'accueil">
            <img src={logoUrl} alt="Cabinet Dandelion" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gold">Cabinet Dandelion</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/70">
                Chirurgiens-dentistes · Bussac-Forêt
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm hover:bg-gold/10 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gold tracking-[0.25em] uppercase text-xs">Informations réglementaires</p>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 text-primary">Mentions légales</h1>

        <Section title="Éditeur du site">
          <p>
            <strong className="text-primary">Cabinet Dentaire Dandelion</strong>, société civile de
            moyens au capital de 1 000 €, immatriculée sous le numéro SIREN 991 284 415
            (SIRET du siège : 991 284 415 00015).
          </p>
          <p>
            Siège social : 26 Place du Champ de Foire, 17210 Bussac-Forêt, France<br />
            Téléphone : <a href="tel:+33546707287" className="text-primary hover:text-gold transition">05 46 70 72 87</a><br />
            E-mail : <a href="mailto:secretariat@dentairebussacforet.fr" className="text-primary hover:text-gold transition">secretariat@dentairebussacforet.fr</a>
          </p>
          <p>Directeurs de la publication : Dr Lucas Détant et Dr Justine Ye.</p>
        </Section>

        <Section title="Professions réglementées">
          <p>
            Le Dr Lucas Détant (orthodontiste, spécialiste qualifié en Orthopédie Dento-Faciale)
            et le Dr Justine Ye (chirurgien-dentiste) sont inscrits au tableau de l'Ordre
            national des chirurgiens-dentistes (Conseil départemental de la Charente-Maritime —
            <a href="https://www.ordre-chirurgiens-dentistes.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition"> ordre-chirurgiens-dentistes.fr</a>).
            Titre professionnel délivré en France.
          </p>
        </Section>

        <Section title="Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition">vercel.com</a>.
          </p>
        </Section>

        <Section title="Données personnelles et cookies">
          <p>
            Ce site est un site d'information : il ne collecte aucune donnée personnelle,
            ne comporte aucun formulaire et ne dépose aucun cookie de suivi ou de mesure
            d'audience. Les polices de caractères sont hébergées sur le site même ; aucune
            ressource n'est chargée depuis des serveurs tiers lors de la consultation.
          </p>
          <p>
            La prise de rendez-vous en ligne s'effectue sur le site de Doctolib, qui applique
            sa propre politique de confidentialité. L'itinéraire vers le cabinet ouvre le site
            Google Maps uniquement si vous cliquez sur le lien correspondant.
          </p>
          <p>
            Pour toute question relative à vos données (notamment celles traitées dans le cadre
            des soins), vous pouvez contacter le cabinet à l'adresse
            {" "}<a href="mailto:secretariat@dentairebussacforet.fr" className="text-primary hover:text-gold transition">secretariat@dentairebussacforet.fr</a>.
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez de droits
            d'accès, de rectification et d'effacement, et pouvez saisir la CNIL
            (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition">cnil.fr</a>).
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble des contenus de ce site (textes, photographies, logo, charte graphique)
            est la propriété du Cabinet Dentaire Dandelion, sauf mention contraire. Toute
            reproduction, même partielle, est soumise à autorisation préalable.
          </p>
        </Section>
      </main>

      <footer className="bg-primary text-primary-foreground/70 border-t border-gold/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="" className="h-8 w-8 object-contain" />
            <span className="font-serif text-gold">Cabinet Dandelion</span>
          </div>
          <Link to="/" className="hover:text-gold transition">← Retour à l'accueil</Link>
          <p>© {new Date().getFullYear()} Cabinet Dandelion — Bussac-Forêt</p>
        </div>
      </footer>
    </div>
  );
}
