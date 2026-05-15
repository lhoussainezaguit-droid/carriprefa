import Link from "next/link"
import {
  ArrowRight,
  Layers,
  Pickaxe,
  Square,
  Building2,
  Hammer,
  Construction,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const products = [
  {
    icon: Layers,
    name: "Agglos",
    tagline: "Blocs de béton creux et pleins",
    description:
      "Nos agglos en béton sont fabriqués selon les normes les plus strictes pour garantir une résistance optimale aux murs porteurs et de cloisonnement.",
    features: [
      "Différents formats disponibles (10, 15, 20 cm)",
      "Haute résistance mécanique",
      "Excellente isolation thermique",
      "Conforme aux normes marocaines",
    ],
  },
  {
    icon: Pickaxe,
    name: "Agrégats",
    tagline: "Sable, gravier et granulats",
    description:
      "Issus de nos propres carrières, nos agrégats sont lavés, criblés et calibrés pour répondre aux exigences de tous types de bétons et de chantiers BTP.",
    features: [
      "Sable 0/4 lavé",
      "Gravier 4/8, 8/15, 15/25",
      "Granulats concassés",
      "Livraison en vrac",
    ],
  },
  {
    icon: Square,
    name: "Bordures",
    tagline: "Aménagement urbain",
    description:
      "Bordures préfabriquées en béton vibré, parfaites pour la délimitation de trottoirs, chaussées, espaces verts et parkings.",
    features: [
      "Bordures T1, T2, T3, T4, A2",
      "Caniveaux CC1, CC2",
      "Résistance aux chocs",
      "Finition soignée",
    ],
  },
  {
    icon: Building2,
    name: "Hourdis",
    tagline: "Planchers légers et performants",
    description:
      "Nos hourdis en béton sont conçus pour la réalisation de planchers à corps creux, offrant légèreté, résistance et bonne isolation phonique.",
    features: [
      "Hourdis 12, 16, 20 cm",
      "Faible poids unitaire",
      "Isolation thermo-acoustique",
      "Pose rapide",
    ],
  },
  {
    icon: Hammer,
    name: "Pavés",
    tagline: "Pavés autobloquants décoratifs",
    description:
      "Pavés en béton résistants et esthétiques, disponibles en plusieurs formes et couleurs pour vos voiries, allées, parkings et espaces publics.",
    features: [
      "Plusieurs formes (rectangulaires, hexagonaux...)",
      "Plusieurs couleurs au choix",
      "Antidérapants",
      "Haute durabilité",
    ],
  },
  {
    icon: Construction,
    name: "Poutrelles",
    tagline: "Poutrelles précontraintes",
    description:
      "Poutrelles en béton précontraint pour planchers, fabriquées avec rigueur pour assurer sécurité et performance structurelle.",
    features: [
      "Différentes portées disponibles",
      "Béton précontraint à fils adhérents",
      "Conforme aux normes en vigueur",
      "Mise en œuvre simplifiée",
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-background border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-sm font-semibold text-primary mb-2">NOTRE CATALOGUE</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nos produits</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Une gamme complète de produits préfabriqués en béton pour tous vos chantiers,
            issue de notre propre exploitation de carrières à Marrakech.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((p) => (
              <Card key={p.name} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{p.name}</CardTitle>
                      <CardDescription>{p.tagline}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full" variant="outline">
                    <Link href="/commande">
                      Demander un devis <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Besoin d&apos;informations ou d&apos;un devis ?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Notre équipe commerciale est à votre disposition pour vous accompagner dans le choix
            des produits adaptés à votre projet.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/commande">Passer commande</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
