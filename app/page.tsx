import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  Factory,
  Award,
  Building2,
  Pickaxe,
  Layers,
  Square,
  Hammer,
  Construction,
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
    description:
      "Blocs de béton de haute qualité, idéaux pour la construction de murs porteurs et de cloisons.",
  },
  {
    icon: Pickaxe,
    name: "Agrégats",
    description:
      "Sable, gravier et granulats issus de nos carrières pour tous types de chantiers BTP.",
  },
  {
    icon: Square,
    name: "Bordures",
    description:
      "Bordures en béton préfabriquées pour aménagement urbain, voirie et trottoirs.",
  },
  {
    icon: Building2,
    name: "Hourdis",
    description:
      "Hourdis en béton pour planchers, alliant légèreté, résistance et isolation.",
  },
  {
    icon: Hammer,
    name: "Pavés",
    description:
      "Pavés autobloquants décoratifs et résistants pour vos espaces extérieurs.",
  },
  {
    icon: Construction,
    name: "Poutrelles",
    description:
      "Poutrelles précontraintes pour planchers, conformes aux normes en vigueur.",
  },
]

const features = [
  {
    icon: ShieldCheck,
    title: "Qualité Certifiée",
    description: "Produits conformes aux normes marocaines et internationales.",
  },
  {
    icon: Factory,
    title: "Production Locale",
    description: "Usine moderne à Marrakech, capacité de production élevée.",
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Flotte dédiée pour livrer vos chantiers dans les délais.",
  },
  {
    icon: Award,
    title: "Filiale SYAM Holding",
    description: "Adossée à un groupe solide avec expérience reconnue.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Filiale de SYAM Holding · Marrakech
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Solutions <span className="text-primary">préfabriquées</span> en béton & carrières
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                CARRIPREFA est spécialisée dans la production d&apos;agglos, agrégats,
                bordures, hourdis, pavés et poutrelles pour les professionnels du BTP au Maroc.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/commande">
                    Passer commande <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">Voir nos produits</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <a href="tel:+212524013334" className="flex items-center gap-2 hover:text-foreground">
                  <Phone className="h-4 w-4" /> +212 524 013 334
                </a>
                <a href="mailto:contact@carriprefa.com" className="flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> contact@carriprefa.com
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
                  alt="Construction préfabriquée"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Usine moderne</div>
                  <div className="text-xs text-muted-foreground">Km 14, Route de Safi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-semibold text-primary mb-2">NOS PRODUITS</div>
            <h2 className="text-3xl md:text-4xl font-bold">Une gamme complète de préfabriqués</h2>
            <p className="mt-4 text-muted-foreground">
              Découvrez notre catalogue de produits en béton pour tous vos projets de construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Card key={p.name} className="hover:shadow-md hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                Tous nos produits <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Un projet ? Demandez votre devis</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
            Contactez notre équipe pour un accompagnement personnalisé et un devis adapté à votre chantier.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/commande">Commander maintenant</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="font-semibold">Téléphone</div>
              <div className="text-sm text-muted-foreground">+212 524 013 334</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">contact@carriprefa.com</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="font-semibold">Adresse</div>
              <div className="text-sm text-muted-foreground">Route de Safi, Km 14, Marrakech</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
