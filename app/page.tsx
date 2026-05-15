import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, MapPin, Mail, Truck, Award, Factory, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://carriprefa.com/wp-content/uploads/2023/06/motif-cp.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:py-28 md:px-8">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              Filiale du Groupe SYAM Holding
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              CARRIPRÉFA
            </h1>
            <p className="mt-4 text-xl font-light text-blue-50 md:text-2xl">
              Solutions Préfabriquées en Béton & Carrières
            </p>
            <p className="mt-6 max-w-xl text-blue-100">
              Spécialiste de la préfabrication béton et de l'exploitation de carrières à Marrakech.
              Plus de 15 ans d'expérience au service de la construction au Maroc.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/commande">
                  Passer Commande <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700">
                <Link href="/products">Nos Produits</Link>
              </Button>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <img
              src="https://carriprefa.com/wp-content/uploads/2023/06/logo-cp.png"
              alt="CARRIPREFA logo"
              className="max-h-80 w-auto rounded-xl bg-white/95 p-8 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Award, title: "Qualité Certifiée", desc: "Normes marocaines strictes" },
              { icon: Factory, title: "Production Locale", desc: "Usine à Marrakech" },
              { icon: Truck, title: "Livraison Rapide", desc: "Toute la région" },
              { icon: Users, title: "Équipe Expérimentée", desc: "15+ ans d'expertise" },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  <f.icon className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="font-semibold text-blue-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-blue-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Nos Produits</h2>
            <p className="mt-3 text-slate-600">Une gamme complète de solutions préfabriquées en béton</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Agglos", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", desc: "Blocs en béton creux et pleins" },
              { name: "Agrégats", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80", desc: "Granulats de carrière" },
              { name: "Bordures", img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80", desc: "Bordures de trottoir" },
              { name: "Hourdis", img: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800&q=80", desc: "Éléments de plancher" },
              { name: "Pavés", img: "https://images.unsplash.com/photo-1597400154816-d34d52d2b07a?w=800&q=80", desc: "Pavés autobloquants" },
              { name: "Poutrelles", img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80", desc: "Poutrelles précontraintes" },
            ].map((p) => (
              <Card key={p.name} className="overflow-hidden border-blue-100 transition hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-blue-100">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-blue-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/products">Voir tous les produits <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Why */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Pourquoi CARRIPRÉFA ?</h2>
            <p className="mt-4 text-slate-600">
              CARRIPRÉFA, filiale du groupe SYAM Holding, est un acteur de référence dans la production
              de solutions préfabriquées en béton et l'exploitation de carrières à Marrakech.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Carrières propres à Marrakech",
                "Usine moderne de préfabrication",
                "Contrôle qualité rigoureux",
                "Livraison sur toute la région",
                "Devis personnalisés rapides",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-blue-700 hover:bg-blue-800">
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl bg-blue-100">
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80"
              alt="Usine CARRIPREFA"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Un projet ? Demandez votre devis</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Notre équipe est à votre écoute pour vous accompagner dans tous vos projets de construction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/commande">Commander maintenant</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 text-blue-50 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> +212 524 013 334
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" /> contact@carriprefa.com
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" /> Route de Safi Km 14, Marrakech
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
