import Link from "next/link"
import {
  Mountain,
  Cog,
  Filter,
  Truck,
  PackageCheck,
  Wrench,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Mountain,
    title: "Exploitation de Carrières",
    description:
      "Extraction de matières premières dans nos carrières situées dans la région de Marrakech-Safi. Activité encadrée par les autorisations officielles.",
  },
  {
    icon: Cog,
    title: "Concassage",
    description:
      "Réduction granulométrique des roches grâce à des installations modernes pour produire des agrégats calibrés.",
  },
  {
    icon: Filter,
    title: "Broyage & Criblage",
    description:
      "Tri et calibrage des matériaux par tailles : sable, gravier 4/10, 10/20, 20/40, selon les besoins du chantier.",
  },
  {
    icon: PackageCheck,
    title: "Production Préfabriquée",
    description:
      "Fabrication en usine d'agglos, bordures, hourdis, pavés et poutrelles avec contrôle qualité rigoureux.",
  },
  {
    icon: Truck,
    title: "Livraison sur Chantier",
    description:
      "Flotte de camions dédiée pour assurer une livraison rapide et fiable sur vos chantiers dans toute la région.",
  },
  {
    icon: Wrench,
    title: "Négoce de Matériaux",
    description:
      "Vente de ciment et matériaux complémentaires pour répondre à tous vos besoins en un seul point.",
  },
]

export const metadata = {
  title: "Nos Services - CARRIPREFA",
  description:
    "Exploitation de carrières, concassage, broyage, production préfabriquée, livraison et négoce de matériaux.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-primary mb-2">EXPERTISE</div>
            <h1 className="text-4xl md:text-5xl font-bold">Nos Services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              De l'extraction à la livraison, CARRIPREFA maîtrise toute la chaîne
              de production des matériaux de construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-md hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-semibold text-primary mb-2">NOTRE PROCESSUS</div>
            <h2 className="text-3xl md:text-4xl font-bold">De la carrière au chantier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Extraction", d: "Extraction des matières premières en carrière." },
              { n: "02", t: "Transformation", d: "Concassage, broyage et criblage des matériaux." },
              { n: "03", t: "Préfabrication", d: "Fabrication des produits en béton en usine." },
              { n: "04", t: "Livraison", d: "Acheminement rapide sur votre chantier." },
            ].map((step) => (
              <div key={step.n} className="bg-background rounded-xl border border-border p-6">
                <div className="text-3xl font-bold text-primary mb-2">{step.n}</div>
                <div className="font-semibold">{step.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Discutons de votre projet</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Nos experts sont à votre écoute pour vous proposer la meilleure solution.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/commande">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
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
