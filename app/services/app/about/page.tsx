import Link from "next/link"
import { Target, Heart, TrendingUp, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata = {
  title: "À propos - CARRIPREFA",
  description:
    "CARRIPREFA, filiale du groupe SYAM Holding, spécialiste de la préfabrication béton et de l'exploitation de carrières à Marrakech depuis plus de 15 ans.",
}

const values = [
  {
    icon: Target,
    title: "Qualité",
    description:
      "Nous appliquons des contrôles qualité rigoureux à chaque étape de production.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description:
      "Engagés envers nos clients, nos employés et le développement local.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Investissement continu dans nos installations pour rester à la pointe.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Une équipe à l'écoute pour accompagner chaque projet de nos clients.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-primary mb-2">QUI SOMMES-NOUS</div>
            <h1 className="text-4xl md:text-5xl font-bold">À propos de CARRIPREFA</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Filiale de SYAM Holding, CARRIPREFA SARL est une société marocaine
              implantée à Marrakech, spécialisée dans la production de solutions
              préfabriquées en béton et l'exploitation de carrières.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Usine CARRIPREFA"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Notre histoire</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  CARRIPREFA a été fondée pour répondre à la demande croissante en
                  matériaux de construction de qualité dans la région de
                  Marrakech-Safi. Adossée à SYAM Holding, l'entreprise s'appuie sur
                  l'expérience et la solidité financière d'un groupe reconnu.
                </p>
                <p>
                  Située à Km 14 sur la route de Safi, notre usine intègre une chaîne
                  complète : extraction en carrière, concassage, broyage, criblage,
                  et préfabrication d'éléments en béton.
                </p>
                <p>
                  Aujourd'hui, CARRIPREFA est un partenaire de référence pour les
                  professionnels du BTP au Maroc, livrant agglos, agrégats, bordures,
                  hourdis, pavés et poutrelles sur les chantiers publics et privés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "15+", l: "Années d'expérience" },
              { v: "6", l: "Catégories de produits" },
              { v: "6M+", l: "DHS Capital social" },
              { v: "100%", l: "Production locale" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-bold text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-semibold text-primary mb-2">NOS VALEURS</div>
            <h2 className="text-3xl md:text-4xl font-bold">Ce qui nous guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{v.title}</CardTitle>
                  <CardDescription>{v.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Rejoignez nos clients satisfaits</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">
            Discutons de votre projet et trouvons ensemble la meilleure solution.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/commande">
                Commander <ArrowRight className="h-4 w-4" />
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
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
