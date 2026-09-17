import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Phone } from "lucide-react";
import { DandelionSeeds } from "@/components/DandelionSeeds";
import {
  DOCTOLIB_ORTHO_URL,
  ArcadeDentaire,
  Fiche,
  Planche,
  MAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  SiteFooter,
  SiteHeader,
  Tirage,
  btn,
} from "@/components/site";
import logoUrl from "@/assets/logo-gold.png";
import drDetantUrl from "@/assets/dr-detant-warm.png";
import exterieurUrl from "@/assets/exterieur-cabinet.png";

export const Route = createFileRoute("/orthodontie")({
  head: () => ({
    meta: [
      { title: "Orthodontie — Dr Lucas Détant | Cabinet Dandelion, Bussac-Forêt" },
      {
        name: "description",
        content:
          "Spécialiste qualifié en Orthodontie, Orthopédie Dento-Faciale. Dr Lucas Détant vous accueille au Cabinet Dandelion à Bussac-Forêt (17210). Rendez-vous en ligne.",
      },
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
  sameAs: ["https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret"],
};

const TRAITEMENTS = [
  {
    n: "I",
    title: "Interceptif",
    text: "Chez l'enfant, corriger tôt un décalage qui s'installe, pour éviter un traitement plus long ensuite.",
  },
  {
    n: "II",
    title: "Fonctionnel",
    text: "Accompagner la croissance et les fonctions (respiration, langue, déglutition) qui façonnent les mâchoires.",
  },
  {
    n: "III",
    title: "Multi-attaches",
    text: "Les bagues, pour aligner les dents et régler l'engrènement, chez l'adolescent comme chez l'adulte.",
  },
  {
    n: "IV",
    title: "Aligneurs",
    text: "Des gouttières transparentes et amovibles, quand la situation s'y prête.",
  },
];

function OrthodontiePage() {
  return (
    <div className="min-h-screen bg-forest text-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORTHO_JSONLD) }}
      />
      <SiteHeader subtitle="Orthodontie · Dr Lucas Détant" />

      {/* ───── Bandeau ───── */}
      <section id="top" className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-8 md:pb-28">
        <DandelionSeeds className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-[80rem]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 py-2 text-sm text-lichen transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Cabinet Dandelion
          </Link>
          <div className="mt-4 border border-gold/45 px-6 py-10 outline outline-1 outline-offset-[6px] outline-gold/20 sm:px-10 md:px-14 md:py-14">
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs uppercase tracking-[0.24em] text-lichen">
              <span className="font-semibold text-gold">Planche I — Orthodontie</span>
              <span>Spécialiste qualifié</span>
            </div>
            <div className="mt-10 grid items-center gap-12 md:grid-cols-12">
              <div className="md:col-span-8">
                <h1 className="font-serif text-[3.2rem] leading-[0.98] text-ivory sm:text-7xl lg:text-[5.25rem]">
                  Orthodontie et orthopédie{" "}
                  <em className="whitespace-nowrap text-gold">dento-faciale</em>
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-parchment">
                  Le Dr Lucas Détant, spécialiste qualifié, reçoit les enfants, les adolescents et
                  les adultes au 26 place du Champ de Foire.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href={DOCTOLIB_ORTHO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn.gold}
                  >
                    <Calendar className="h-4 w-4" />
                    Prendre rendez-vous
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="border-b border-gold/60 py-2 font-serif text-2xl text-gold transition hover:border-gold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <img
                src={logoUrl}
                alt=""
                aria-hidden="true"
                className="hidden w-full max-w-[260px] justify-self-end md:col-span-4 md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Le praticien ───── */}
      <section id="specialite" className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Tirage
              src={drDetantUrl}
              alt="Dr Lucas Détant, spécialiste en orthopédie dento-faciale"
              legende="Dr Lucas Détant"
              numero="1"
              tilt={-2}
              ratio="4 / 5"
              imgClassName="object-top"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Planche numero="II">Le praticien</Planche>
            <h2 className="mt-5 font-serif text-4xl text-ivory md:text-5xl">Dr Lucas Détant</h2>
            <div className="mt-8">
              <Fiche
                rows={[
                  { label: "Diplôme", value: "Spécialiste qualifié en orthopédie dento-faciale" },
                  { label: "Parcours", value: "Ancien interne des Hôpitaux de Toulouse" },
                  { label: "Patients", value: "Enfants, adolescents et adultes" },
                  {
                    label: "Traitements",
                    value: "Interceptifs, fonctionnels, multi-attaches, aligneurs",
                  },
                  {
                    label: "Rendez-vous",
                    value: "En ligne sur Doctolib, ou par téléphone au secrétariat",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Premier bilan ───── */}
      <section className="px-6 pb-28">
        <div className="reveal mx-auto grid max-w-6xl items-center gap-8 rounded-[1.75rem] bg-sand px-8 py-12 text-ink md:grid-cols-12 md:px-14">
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-[1.08] md:text-5xl">
              Pour un enfant, le premier bilan se fait vers 7 ou 8 ans
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              C'est l'âge où l'on voit arriver les décalages, et où une correction simple évite un
              traitement long plus tard. Pas besoin d'être adressé par un dentiste : vous pouvez
              prendre rendez-vous directement.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-10 md:justify-self-end">
            <a
              href={DOCTOLIB_ORTHO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.forest}
            >
              Demander un bilan
            </a>
          </div>
        </div>
      </section>

      {/* ───── Traitements ───── */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Planche numero="III">Traitements</Planche>
            <h2 className="mt-5 font-serif text-5xl leading-[1] text-ivory">
              Adaptés à <em className="text-gold">chaque âge</em>
            </h2>
            <ArcadeDentaire fig="3" className="mt-12" />
          </div>
          <ol className="reveal m-0 list-none border-t border-line p-0 md:col-span-8">
            {TRAITEMENTS.map((t) => (
              <li
                key={t.title}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[4rem_14rem_1fr] sm:gap-6"
              >
                <span className="font-serif text-2xl italic text-gold">{t.n}.</span>
                <h3 className="font-serif text-3xl leading-tight text-ivory">{t.title}</h3>
                <p className="col-start-2 text-parchment sm:col-start-3 sm:pt-1.5">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="bg-forest-deep px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Planche numero="IV">Rendez-vous</Planche>
            <h2 className="mt-5 font-serif text-5xl leading-[1] text-ivory md:text-6xl">
              Nous rendre <em className="text-gold">visite</em>
            </h2>
            <p className="mt-6 max-w-md text-parchment">
              Ce rendez-vous concerne une consultation d'orthodontie. Pour des soins dentaires,
              contactez le secrétariat.
            </p>
            <div className="mt-10">
              <Fiche
                rows={[
                  {
                    label: "Adresse",
                    value: (
                      <>
                        26 place du Champ de Foire
                        <br />
                        17210 Bussac-Forêt
                      </>
                    ),
                  },
                  {
                    label: "Téléphone",
                    value: (
                      <a href={PHONE_TEL} className="hover:text-gold">
                        {PHONE_DISPLAY}
                      </a>
                    ),
                  },
                  {
                    label: "E-mail",
                    value: (
                      <a href={`mailto:${MAIL}`} className="break-all hover:text-gold">
                        {MAIL}
                      </a>
                    ),
                  },
                  { label: "Accès", value: "Parking gratuit à proximité" },
                ]}
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={DOCTOLIB_ORTHO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.gold}
              >
                <Calendar className="h-4 w-4" />
                Réserver sur Doctolib
              </a>
              <a href={PHONE_TEL} className={btn.ghostOnForest}>
                <Phone className="h-4 w-4" />
                Appeler
              </a>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Tirage
              src={exterieurUrl}
              alt="Extérieur du cabinet du Dr Détant à Bussac-Forêt"
              legende="Place du Champ de Foire"
              numero="2"
              tilt={2}
              ratio="4 / 3"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border-b border-gold/60 py-2 font-serif text-xl text-gold transition hover:border-gold"
            >
              Ouvrir l'itinéraire <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter signature="Dr Lucas Détant — Orthopédie dento-faciale" />
    </div>
  );
}
