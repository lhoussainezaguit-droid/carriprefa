import Link from "next/link"
import { CheckCircle2, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Nos Produits - CARRIPREFA",
  description: "Découvrez notre gamme complète : Agglos, Agrégats, Bordures, Hourdis, Pavés, Poutrelles - Préfabriqué béton à Marrakech.",
}

const products = [
  {
    id: "agglos",
    name: "Agglos",
    tagline: "Blocs en béton creux et pleins",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    description:
      "Nos agglos sont fabriqués selon les normes marocaines les plus strictes. Idéaux pour les murs porteurs, cloisons et façades.",
    features: [
      "Haute résistance mécanique",
      "Excellente isolation thermique",
      "Conformes aux normes NM 10.1.041",
      "Disponibles en plusieurs épaisseurs",
    ],
    types: [
      { name: "Aggloméré creux 7×20×50", desc: "Cloisons légères et doublages" },
      { name: "Aggloméré creux 10×20×50", desc: "Cloisons intérieures" },
      { name: "Aggloméré creux 15×20×50", desc: "Murs porteurs et façades" },
      { name: "Aggloméré creux 20×20×50", desc: "Murs porteurs renforcés" },
      { name: "Aggloméré plein 15×20×50", desc: "Soubassements et fondations" },
      { name: "Aggloméré plein 20×20×50", desc: "Murs de soutènement" },
    ],
  },
  {
    id: "agregats",
    name: "Agrégats",
    tagline: "Granulats issus de nos carrières",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80",
    description:
      "Granulats de haute qualité issus directement de nos carrières à Marrakech. Calibrés selon les exigences du BTP.",
    features: [
      "Roche locale sélectionnée",
      "Granulométrie contrôlée",
      "Livraison en vrac ou en sacs",
      "Adaptés au béton et aux fondations",
    ],
    types: [
      { name: "Sable 0/4", desc: "Mortiers, enduits, chapes" },
      { name: "Gravette 4/10", desc: "Béton fin et dallage" },
      { name: "Gravier 10/20", desc: "Béton de structure" },
      { name: "Gravier 20/40", desc: "Fondations et gros œuvre" },
      { name: "Tout-venant 0/40", desc: "Remblais et plateformes" },
      { name: "Concassé 40/70", desc: "Sous-couches routières" },
    ],
  },
  {
    id: "bordures",
    name: "Bordures",
    tagline: "Bordures de trottoir et caniveaux",
    img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=1200&q=80",
    description:
      "Bordures préfabriquées en béton vibré pour l'aménagement urbain, voiries et espaces verts.",
    features: [
      "Béton vibré haute résistance",
      "Finition lisse ou bouchardée",
      "Pose facile et rapide",
      "Conformes aux normes routières",
    ],
    types: [
      { name: "Bordure T1", desc: "Trottoirs piétonniers" },
      { name: "Bordure T2", desc: "Voies de desserte" },
      { name: "Bordure T3", desc: "Voies principales" },
      { name: "Bordure T4", desc: "Voies à fort trafic" },
      { name: "Bordurette P1", desc: "Espaces verts et parkings" },
      { name: "Caniveau CS1/CS2", desc: "Évacuation des eaux pluviales" },
    ],
  },
  {
    id: "hourdis",
    name: "Hourdis",
    tagline: "Éléments de plancher préfabriqués",
    img: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=1200&q=80",
    description:
      "Hourdis en béton pour planchers à poutrelles, alliant légèreté et performance structurelle.",
    features: [
      "Léger et facile à poser",
      "Bonne isolation phonique",
      "Compatibles avec nos poutrelles",
      "Économise du béton de coulage",
    ],
    types: [
      { name: "Hourdis 12×20×53", desc: "Planchers résidentiels" },
      { name: "Hourdis 16×20×53", desc: "Planchers standards" },
      { name: "Hourdis 20×20×53", desc: "Planchers à forte portée" },
      { name: "Hourdis 25×20×53", desc: "Bâtiments à étages" },
    ],
  },
  {
    id: "paves",
    name: "Pavés",
    tagline: "Pavés autobloquants pour aménagement",
    img: "https://images.unsplash.com/photo-1597400154816-d34d52d2b07a?w=1200&q=80",
    description:
      "Pavés en béton de haute qualité pour l'aménagement extérieur : allées, parkings, places publiques.",
    features: [
      "Très haute résistance à la compression",
      "Résistants au gel et aux UV",
      "Plusieurs coloris disponibles",
      "Pose autobloquante simple",
    ],
    types: [
      { name: "Pavé I 22×11×6", desc: "Trottoirs et allées" },
      { name: "Pavé I 22×11×8", desc: "Parkings véhicules légers" },
      { name: "Pavé H 22×11×10", desc: "Voies à trafic moyen" },
      { name: "Pavé Carré 20×20", desc: "Aménagement décoratif" },
      { name: "Pavé Rectangulaire 30×20", desc: "Places et esplanades" },
      { name: "Bordurette Pavé", desc: "Finition et délimitation" },
    ],
  },
  {
    id: "poutrelles",
    name: "Poutrelles",
    tagline: "Poutrelles précontraintes en béton",
    img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&q=80",
    description:
      "Poutrelles précontraintes pour planchers, garantissant solidité et portée maximale.",
    features: [
      "Acier à haute adhérence",
      "Précontraintes en usine",
      "Grandes portées possibles",
      "Compatible avec nos hourdis",
    ],
    types: [
      { name: "Poutrelle 12 cm", desc: "Portée jusqu'à 4.5 m" },
      { name: "Poutrelle 16 cm", desc: "Portée jusqu'à 5.5 m" },
      { name: "Poutrelle 20 cm", desc: "Portée jusqu'à 6.5 m" },
      { name: "Poutrelle 25 cm", desc: "Portée jusqu'à 7.5 m" },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Nos Produits</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Une gamme complète de solutions préfabriquées en béton et de granulats de carrière,
            fabriqués selon les normes marocaines les plus strictes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-3 text-center text-sm font-medium text-blue-800 transition hover:bg-blue-100">
                {p.name}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {products.map((p, idx) => (
              <div key={p.id} id={p.id} className={`grid items-center gap-10 md:grid-cols-2 ${idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl bg-blue-100 shadow-lg">
                  <img src={p.img} alt={p.name} className="aspect-[4/3] h-full w-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">{p.name}</h2>
                  <p className="mt-1 text-blue-600">{p.tagline}</p>
                  <p className="mt-4 text-slate-600">{p.description}</p>

                  <h3 className="mt-6 text-lg font-semibold text-blue-900">Caractéristiques :</h3>
                  <ul className="mt-2 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-6 bg-blue-700 hover:bg-blue-800">
                    <Link href={`/commande?product=${p.id}`}>
                      Commander <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="md:col-span-2">
                  <h3 className="mb-4 text-xl font-bold text-blue-900">Types & Dimensions disponibles</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {p.types.map((t) => (
                      <Card key={t.name} className="border-blue-100">
                        <CardContent className="p-4">
                          <div className="font-semibold text-blue-900">{t.name}</div>
                          <div className="mt-1 text-sm text-slate-600">{t.desc}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Besoin d'un produit spécifique ?</h2>
          <p className="mt-3 text-blue-100">Contactez-nous pour un devis personnalisé.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/commande">Passer commande</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700">
              <a href="tel:+212524013334"><Phone className="mr-2 h-4 w-4" />+212 524 013 334</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
