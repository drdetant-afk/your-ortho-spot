import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Phone } from "lucide-react";
import { DandelionSeeds } from "@/components/DandelionSeeds";
import {
  DOCTOLIB_ORTHO_URL,
  ArcadeDentaire,
  Fiche,
  BordDeckle,
  CulDeLampe,
  FicheClinique,
  Filigrane,
  HORAIRES,
  HORAIRES_JSONLD,
  MAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  MolaireAnnotee,
  Planche,
  SiteFooter,
  SiteHeader,
  Tirage,
  Tooth,
  btn,
  type ToothKind,
} from "@/components/site";
import logoUrl from "@/assets/logo-gold.png";
import salleAttenteUrl from "@/assets/salle-attente.jpg";
import salleSoins1Url from "@/assets/salle-soins-1.jpg";
import salleSoins2Url from "@/assets/salle-soins-2.jpg";
import couloirUrl from "@/assets/couloir.jpg";
import sterilisationUrl from "@/assets/sterilisation.jpg";
import radiologieUrl from "@/assets/radiologie.jpg";
import facadeUrl from "@/assets/facade.jpg";
import drDetantUrl from "@/assets/dr-detant.jpg";
import drJustineYeUrl from "@/assets/dr-justine-ye-portrait.jpg";
import equipeUrl from "@/assets/equipe-cabinet.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cabinet dentaire Dandelion — Dentiste & Orthodontiste à Bussac-Forêt" },
      {
        name: "description",
        content:
          "Cabinet dentaire Dandelion à Bussac-Forêt (17210) : dentisterie générale et orthodontie. Une équipe à votre écoute pour toute la famille.",
      },
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
  image: `${SITE_URL}/images/facade.jpg`,
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
  openingHoursSpecification: HORAIRES_JSONLD,
  sameAs: [
    "https://www.doctolib.fr/orthodontiste/bussac-foret/lucas-detant-bussac-foret",
    "https://www.pagesjaunes.fr/pros/64559455",
  ],
};

// Chaque soin est repéré par un numéro de dent (numérotation dentaire internationale).
const SOINS: { dent: string; kind: ToothKind; title: string; text: string }[] = [
  {
    dent: "16",
    kind: "molaire",
    title: "Dentisterie générale",
    text: "Soins conservateurs, détartrage, prévention et suivi régulier.",
  },
  {
    dent: "13",
    kind: "canine",
    title: "Orthodontie",
    text: "Traitements pour enfants, adolescents et adultes, avec le Dr Détant.",
  },
  {
    dent: "41",
    kind: "gencive",
    title: "Parodontie",
    text: "Prévention et traitement des maladies des gencives et des tissus de soutien.",
  },
];

function CabinetHomePage() {
  return (
    <div className="min-h-screen bg-forest text-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CABINET_JSONLD) }}
      />
      <SiteHeader />

      {/* ───── Planche I — Accueil ───── */}
      <section id="top" className="relative overflow-hidden px-4 py-8 sm:px-8 md:py-12">
        <DandelionSeeds className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-[80rem] border border-gold/45 px-6 py-10 outline outline-1 outline-offset-[6px] outline-gold/20 sm:px-10 md:px-14 md:py-14">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs uppercase tracking-[0.24em] text-lichen">
            <span className="font-semibold text-gold">Planche I</span>
            <span className="hidden sm:inline">Atlas du Cabinet dentaire Dandelion</span>
            <span>Bussac-Forêt · 17210</span>
          </div>

          <div className="mt-10 grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-6">
              <h1 className="font-serif text-[2.9rem] leading-[1] text-ivory sm:text-6xl lg:text-[4.9rem]">
                Un cabinet dentaire familial, <em className="text-gold">au cœur de Bussac-Forêt</em>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-parchment">
                Le Dr Justine Ye, chirurgien-dentiste, et le Dr Lucas Détant, orthodontiste, vous
                reçoivent place du Champ de Foire. Soins, prévention et orthodontie : des enfants
                aux adultes, tout le suivi se fait au même endroit.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={PHONE_TEL} className={btn.gold}>
                  <Phone className="h-4 w-4" />
                  Appeler le secrétariat
                </a>
                <Link
                  to="/orthodontie"
                  className="inline-flex items-center gap-2 border-b border-gold/60 py-2 font-serif text-xl text-gold transition hover:border-gold"
                >
                  Orthodontie <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <MolaireAnnotee className="mt-14 hidden sm:flex" />
            </div>
            <div className="parallax-slow md:col-span-5 md:col-start-8">
              <Tirage
                src={facadeUrl}
                alt="Façade du Cabinet dentaire Dandelion, place du Champ de Foire à Bussac-Forêt"
                legende="La façade, place du Champ de Foire"
                numero="1"
                tilt={-2}
                ratio="16 / 10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Encart orthodontie ───── */}
      <div className="px-4 pb-6 sm:px-8">
        <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between gap-6 rounded-[1.25rem] bg-sand px-8 py-8 text-ink sm:flex-row sm:items-center md:px-12">
          <div className="flex items-center gap-6">
            <Tooth kind="canine" className="hidden h-16 w-10 shrink-0 text-[#8a6b2c] sm:block" />
            <div>
              <p className="font-serif text-2xl text-ink md:text-[1.75rem]">
                Traitement orthodontique en cours ou à prévoir ?
              </p>
              <p className="mt-1 text-[17px] text-ink-soft">
                Toutes les informations du Dr Lucas Détant sont sur sa page dédiée.
              </p>
            </div>
          </div>
          <Link to="/orthodontie" className={`${btn.forest} shrink-0`}>
            Page orthodontie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ───── Planche II — Le cabinet ───── */}
      <section id="cabinet" className="relative overflow-hidden px-6 py-28">
        <Filigrane numero="II" className="-right-8 top-10 hidden lg:block" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Planche numero="II">Le cabinet</Planche>
              <h2 className="mt-5 font-serif text-5xl leading-[1] text-ivory md:text-6xl">
                Un lieu calme <em className="text-gold">&amp; lumineux</em>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-parchment md:col-span-5 md:col-start-8">
              Le cabinet vous accueille de plain-pied, dans un cadre pensé pour votre confort,
              équipé pour des soins dentaires modernes et rassurants, pour les enfants comme pour
              les adultes.
            </p>
          </div>

          <div className="reveal mt-20 grid items-start gap-12 md:grid-cols-12 md:gap-6">
            <Tirage
              src={salleSoins1Url}
              alt="Salle de soins du Cabinet dentaire Dandelion"
              legende="Une salle de soins"
              numero="2"
              tilt={-2}
              className="md:col-span-5"
            />
            <Tirage
              src={couloirUrl}
              alt="Couloir menant à l'accueil du Cabinet dentaire Dandelion"
              legende="Le couloir, vers l'accueil"
              numero="3"
              tilt={1.5}
              ratio="4 / 5"
              className="md:col-span-3 md:mt-24"
            />
            <Tirage
              src={sterilisationUrl}
              alt="Salle de stérilisation du Cabinet dentaire Dandelion"
              legende="La salle de stérilisation"
              numero="4"
              tilt={-1}
              className="md:col-span-4 md:mt-8"
            />
            <Tirage
              src={radiologieUrl}
              alt="Appareil de radiographie panoramique du cabinet"
              legende="La radiologie"
              numero="5"
              tilt={2}
              ratio="4 / 5"
              className="md:col-span-3 md:-mt-4"
            />
            <Tirage
              src={salleAttenteUrl}
              alt="Salle d'attente du Cabinet dentaire Dandelion"
              legende="La salle d'attente"
              numero="6"
              tilt={-1.5}
              ratio="4 / 5"
              className="md:col-span-3 md:mt-10"
            />
            <div className="flex flex-col gap-8 md:col-span-5 md:col-start-8 md:mt-2">
              <Tirage
                src={salleSoins2Url}
                alt="Seconde salle de soins, lumineuse, du Cabinet dentaire Dandelion"
                legende="Une seconde salle de soins"
                numero="7"
                tilt={1}
              />
              <p className="border-t border-line pt-4 font-serif text-[17px] italic leading-relaxed text-lichen">
                Légende. — Rez-de-chaussée, entrée accessible, parking gratuit à proximité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Planche III — L'équipe ───── */}
      <BordDeckle />
      <section
        id="equipe"
        className="trame relative overflow-hidden bg-sand px-6 pb-28 pt-20 text-ink"
      >
        <Filigrane numero="III" tone="light" className="-left-10 top-16 hidden lg:block" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <Planche numero="III" tone="light">
              L'équipe
            </Planche>
            <h2 className="mt-4 font-serif text-5xl leading-[1] md:text-6xl">
              Deux expertises <em className="text-[#8a6b2c]">complémentaires</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Une chirurgienne-dentiste généraliste et un orthodontiste, pour un suivi dentaire
              complet, du plus jeune au plus âgé.
            </p>
          </div>

          <div className="reveal mt-16 grid gap-8 lg:grid-cols-2">
            <FicheClinique
              numero="01"
              discipline="Orthodontie"
              photo={drDetantUrl}
              nom="Dr Lucas Détant"
              rows={[
                { label: "Spécialité", value: "Orthopédie dento-faciale" },
                { label: "Parcours", value: "Ancien interne des Hôpitaux de Toulouse" },
                { label: "Patients", value: "Enfants, adolescents et adultes" },
              ]}
            >
              <Link
                to="/orthodontie"
                className="inline-flex items-center gap-2 self-start py-2 font-semibold text-ink underline decoration-[#8a6b2c]/50 underline-offset-4 hover:decoration-[#8a6b2c]"
              >
                Découvrir l'orthodontie <ArrowRight className="h-4 w-4" />
              </Link>
            </FicheClinique>

            <FicheClinique
              numero="02"
              discipline="Omnipratique"
              photo={drJustineYeUrl}
              nom="Dr Justine Ye"
              rows={[
                { label: "Exercice", value: "Chirurgien-dentiste généraliste" },
                {
                  label: "Parcours",
                  value: "Diplôme d'État de docteur en chirurgie dentaire — Université de Bordeaux",
                },
                {
                  label: "Soins",
                  value: "Conservateurs, prévention, parodontie, esthétique dentaire",
                },
              ]}
            />
          </div>

          <div className="reveal mx-auto mt-20 max-w-xl">
            <Tirage
              src={equipeUrl}
              alt="L'équipe du Cabinet dentaire Dandelion à l'accueil"
              legende="Toute l'équipe, à l'accueil"
              numero="8"
              tilt={1.5}
              ratio="534 / 510"
            />
          </div>
        </div>
      </section>

      <BordDeckle position="bas" />

      {/* ───── Planche IV — Nos soins ───── */}
      <section className="relative overflow-hidden px-6 py-28">
        <Filigrane numero="IV" className="-left-10 bottom-4 hidden lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Planche numero="IV">Nos soins</Planche>
            <h2 className="mt-5 font-serif text-5xl leading-[1] text-ivory">
              Un suivi dentaire <em className="text-gold">complet</em>
            </h2>
            <p className="mt-6 font-serif text-[17px] italic leading-relaxed text-lichen">
              Chaque soin est repéré par un numéro de dent, selon la numérotation dentaire
              internationale.
            </p>
          </div>
          <ol className="reveal m-0 list-none border-t border-line p-0 md:col-span-7 md:col-start-6">
            {SOINS.map((s) => (
              <li
                key={s.title}
                className="grid grid-cols-[3rem_2.5rem_1fr] items-center gap-x-4 gap-y-2 border-b border-line py-7 sm:grid-cols-[3.5rem_3rem_14.5rem_1fr] sm:gap-x-5"
              >
                <span className="font-serif text-3xl text-gold">{s.dent}</span>
                <Tooth kind={s.kind} className="h-12 w-10 text-gold" />
                <h3 className="font-serif text-[1.65rem] font-normal leading-tight text-ivory">
                  {s.title}
                </h3>
                <p className="col-span-3 text-parchment sm:col-span-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CulDeLampe className="pb-16" />

      {/* ───── Planche V — Rendez-vous orthodontie ───── */}
      <section className="px-6 pb-28">
        <div className="reveal relative mx-auto max-w-6xl rounded-[1.75rem] border-[1.5px] border-dashed border-gold/60 px-8 py-14 md:px-16">
          <span className="absolute -top-3 left-8 bg-forest px-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold md:left-12">
            Planche V — Rendez-vous orthodontie
          </span>
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="font-serif text-5xl leading-[1] text-ivory md:text-6xl">
                Consultation <em className="text-gold">d'orthodontie</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-parchment">
                Avec le Dr Lucas Détant. Ce rendez-vous concerne uniquement l'orthodontie : pour des
                soins dentaires, contactez le secrétariat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DOCTOLIB_ORTHO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.gold}
                >
                  <Calendar className="h-4 w-4" />
                  Réserver sur Doctolib
                </a>
                <Link to="/orthodontie" className={btn.ghostOnForest}>
                  En savoir plus
                </Link>
              </div>
            </div>
            <ArcadeDentaire fig="9" className="md:col-span-6" />
          </div>
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="bg-forest-deep px-6 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Planche numero="VI">Contact</Planche>
            <h2 className="mt-5 font-serif text-5xl leading-[1] text-ivory md:text-6xl">
              Nous rendre <em className="text-gold">visite</em>
            </h2>
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
                  {
                    label: "Horaires",
                    value: (
                      <span className="block space-y-1">
                        {HORAIRES.map((h) => (
                          <span key={h.jours} className="block">
                            <span className="text-lichen">{h.jours} : </span>
                            {h.heures}
                          </span>
                        ))}
                      </span>
                    ),
                  },
                  { label: "Accès", value: "Parking gratuit à proximité" },
                ]}
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_TEL} className={btn.gold}>
                <Phone className="h-4 w-4" />
                Appeler le secrétariat
              </a>
              {/* Lien vers Google Maps plutôt qu'une iframe : aucun cookie Google
                  n'est déposé tant que le visiteur ne clique pas (RGPD/CNIL) */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.ghostOnForest}
              >
                Itinéraire <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <figure className="m-0 md:col-span-5 md:col-start-8">
            <div className="mx-auto flex aspect-square max-w-[460px] flex-col items-center justify-center gap-5 border border-gold/35 outline outline-1 outline-offset-8 outline-gold/15">
              <img
                src={logoUrl}
                alt="Logo du Cabinet dentaire Dandelion"
                loading="lazy"
                className="w-3/5"
              />
            </div>
            <figcaption className="mt-6 text-center font-serif text-lg italic text-lichen">
              Ex-libris du Cabinet dentaire Dandelion
            </figcaption>
          </figure>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
