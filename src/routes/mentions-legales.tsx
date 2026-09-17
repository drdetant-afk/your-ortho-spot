import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SITE_URL, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Cabinet Dandelion, Bussac-Forêt" },
      {
        name: "description",
        content: "Mentions légales du site du Cabinet Dentaire Dandelion à Bussac-Forêt (17210).",
      },
      { property: "og:url", content: `${SITE_URL}/mentions-legales` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/mentions-legales` }],
  }),
  component: MentionsLegalesPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-forest/15 pt-10">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-[#8a6b2c]/50 [&_a]:underline-offset-4 [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-2 text-sm text-[#6b5a35] hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>
        <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#8a6b2c]">
          Informations réglementaires
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">Mentions légales</h1>

        <Section title="Éditeur du site">
          <p>
            <strong>Cabinet Dentaire Dandelion</strong>, société civile de moyens au capital de 1
            000 €, immatriculée sous le numéro SIREN 991 284 415 (SIRET du siège : 991 284 415
            00015).
          </p>
          <p>
            Siège social : 26 Place du Champ de Foire, 17210 Bussac-Forêt, France
            <br />
            Téléphone : <a href="tel:+33546707287">05 46 70 72 87</a>
            <br />
            E-mail :{" "}
            <a href="mailto:secretariat@dentairebussacforet.fr">
              secretariat@dentairebussacforet.fr
            </a>
          </p>
          <p>Directeurs de la publication : Dr Lucas Détant et Dr Justine Ye.</p>
        </Section>

        <Section title="Professions réglementées">
          <p>
            Le Dr Lucas Détant (orthodontiste, spécialiste qualifié en Orthopédie Dento-Faciale) et
            le Dr Justine Ye (chirurgien-dentiste) sont inscrits au tableau de l'Ordre national des
            chirurgiens-dentistes (Conseil départemental de la Charente-Maritime —
            <a
              href="https://www.ordre-chirurgiens-dentistes.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ordre-chirurgiens-dentistes.fr
            </a>
            ). Titre professionnel délivré en France.
          </p>
        </Section>

        <Section title="Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            .
          </p>
        </Section>

        <Section title="Données personnelles et cookies">
          <p>
            Ce site est un site d'information : il ne collecte aucune donnée personnelle, ne
            comporte aucun formulaire et ne dépose aucun cookie de suivi ou de mesure d'audience.
            Les polices de caractères sont hébergées sur le site même ; aucune ressource n'est
            chargée depuis des serveurs tiers lors de la consultation.
          </p>
          <p>
            La prise de rendez-vous en ligne s'effectue sur le site de Doctolib, qui applique sa
            propre politique de confidentialité. L'itinéraire vers le cabinet ouvre le site Google
            Maps uniquement si vous cliquez sur le lien correspondant.
          </p>
          <p>
            Pour toute question relative à vos données (notamment celles traitées dans le cadre des
            soins), vous pouvez contacter le cabinet à l'adresse{" "}
            <a href="mailto:secretariat@dentairebussacforet.fr">
              secretariat@dentairebussacforet.fr
            </a>
            . Conformément au RGPD et à la loi Informatique et Libertés, vous disposez de droits
            d'accès, de rectification et d'effacement, et pouvez saisir la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              cnil.fr
            </a>
            ).
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble des contenus de ce site (textes, photographies, logo, charte graphique) est
            la propriété du Cabinet Dentaire Dandelion, sauf mention contraire. Toute reproduction,
            même partielle, est soumise à autorisation préalable.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
