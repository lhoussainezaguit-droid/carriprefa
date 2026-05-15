import Link from "next/link"
import {
  Layers,
  Pickaxe,
  Square,
  Building2,
  Hammer,
  Construction,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    id: "agglos",
    icon: Layers,
    name: "Agglos",
    tagline: "Blocs de béton creux et pleins",
    description:
      "Nos agglos en béton sont fabriqués selon les normes les plus strictes. Disponibles en plusieurs dimensions, ils sont parfaits pour les murs porteurs, cloisons et fondations.",
    features: [
      "Dimensions standards : 20×20×50, 15×20×50, 10×20×50",
      "Haute résistance mécanique",
      "Isolation thermique optimisée",
      "Production en série",
    ],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
  },
  {
    id: "agregats",
    icon: Pickaxe,
    name: "Agrégats",
    tagline: "Sable, gravier et granulats",
    description:
      "Issus de nos propres carrières, nos agrégats sont concassés et criblés sur place. Granulométrie maîtrisée pour tous types de béton et travaux BTP.",
    features: [
      "Sable 0/4 et 0/6",
      "Gravier 4/10, 10/20, 20/40",
      "Granulats lavés et criblés",
      "Approvisionnement régulier",
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
  },
  {
    id: "bordures",
    icon: Square,
    name: "Bordures",
    tagline: "Aménagement urbain et voirie",
    description:
      "Bordures en béton préfabriquées pour la délimitation de routes, trottoirs, espaces verts et parkings. Conformes aux normes NM.",
    features: [
      "Bordures T1, T2, T3, T4",
      "Bordures basses et hautes",
      "Caniveaux CS1, CS2",
      "Finition soignée",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: "hourdis",
    icon: Building2,
    name: "Hourdis",
    tagline: "Planchers légers et résistants",
    description:
      "Nos hourdis en béton offrent une excellente résistance et une bonne isolation. Idéals pour la construction de planchers économiques et performants.",
    features: [
      "Hourdis 12, 16, 20, 25 cm",
      "Compatible poutrelles précontraintes",
      "Légèreté et mise en œuvre rapide",
      "Bon isolant thermique",
    ],
    image: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800&q=80",
  },
  {
    id: "paves",
    icon: Hammer,
    name: "Pavés",
    tagline: "Espaces extérieurs décoratifs",
    description:
      "Pavés autobloquants pour allées, parkings, places et terrasses. Plusieurs formes et couleurs disponibles pour personnaliser vos espaces.",
    features: [
      "Pavés autobloquants 6 cm et 8 cm",
      "Plusieurs coloris au choix",
      "Résistants au gel et aux charges",
      "Pose facile et durable",
    ],
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  },
  {
    id: "poutrelles",
    icon: Construction,
    name: "Poutrelles",
    tagline: "Poutrelles précontraintes",
    description:
      "Poutrelles en béton précontraint pour planchers résidentiels et tertiaires. Fabriquées dans notre usine avec un contrôle qualité strict.",
    features: [
      "Longueurs sur mesure",
      "Précontrainte par fils adhérents",
      "Conformes NM 10.1.008",
      "Livraison sur chantier",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
]

export const metadata = {
  title: "Nos Produits - CARRIPREFA",
  description:
    "Découvrez notre gamme complète : agglos, agrégats, bordures, hourdis, pavés et poutrelles préfabriqués en béton.",
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-primary mb-2">CATALOGUE</div>
            <h1 className="text-4xl md:text-5xl font-bold">Nos Produits</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Une gamme complète de solutions préfabriquées en béton pour les
              professionnels du bâtiment et des travaux publics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {products.map((p, idx) => (
            <div
              key={p.id}
              id={p.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-secondary">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {p.tagline}
                  </div>
                </div>
                <h2 className="text-3xl font-bold">{p.name}</h2>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
                <ul className="mt-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href={`/commande?product=${p.id}`}>
                      Commander {p.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Besoin d&apos;un devis personnalisé ?</h2>
          <p className="mt-3 text-primary-foreground/90">
            Notre équipe est à votre disposition pour étudier votre projet.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/commande">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
import Link from "next/link"
import {
  Pickaxe,
  Factory,
  Truck,
  Sparkles,
  ShoppingBag,
  Wrench,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Pickaxe,
    title: "Exploitation de carrières",
    description:
      "Exploitation de carrières d'agrégats à Marrakech, dans le respect des normes environnementales et de sécurité.",
  },
  {
    icon: Wrench,
    title: "Concassage & criblage",
    description:
      "Opérations de concassage, broyage et criblage de matériaux pour produire des agrégats de différentes granulométries.",
  },
  {
    icon: Factory,
    title: "Production préfabriquée",
    description:
      "Fabrication industrielle d'agglos, hourdis, bordures, pavés, poutrelles dans notre usine moderne.",
  },
  {
    icon: ShoppingBag,
    title: "Négoce de ciment",
    description:
      "Vente de ciment et matériaux de construction auprès des professionnels et particuliers.",
  },
  {
    icon: Truck,
    title: "Livraison sur chantier",
    description:
      "Flotte de camions dédiée pour la livraison rapide et sécurisée de vos commandes sur tout chantier.",
  },
  {
    icon: Sparkles,
    title: "Conseil & accompagnement",
    description:
      "Accompagnement technique et commercial pour choisir les produits adaptés à votre projet.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-background border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-sm font-semibold text-primary mb-2">NOS SERVICES</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            De l&apos;exploitation de carrières à la livraison sur chantier, CARRIPREFA
            maîtrise toute la chaîne de valeur du préfabriqué béton au Maroc.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-md hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Une expertise au service de votre chantier</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
            Filiale de SYAM Holding, CARRIPREFA met son savoir-faire à votre disposition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/commande">
                Passer commande <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
