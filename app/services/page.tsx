import Link from "next/link"
import { Pickaxe, Hammer, Filter, Package, Truck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Nos Services - CARRIPREFA",
  description: "Exploitation de carrières, concassage, broyage, criblage, négoce de ciment et livraison à Marrakech.",
}

const services = [
  {
    icon: Pickaxe,
    title: "Exploitation de carrières",
    desc: "Extraction de matière première dans nos carrières de Marrakech avec respect des normes environnementales.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1000&q=80",
  },
  {
    icon: Hammer,
    title: "Concassage",
    desc: "Concassage de roche en granulats de différentes granulométries adaptées à tous types de travaux.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1000&q=80",
  },
  {
    icon: Filter,
    title: "Broyage & Criblage",
    desc: "Traitement et tri des granulats selon des calibres précis pour répondre aux exigences techniques.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80",
  },
  {
    icon: Package,
    title: "Négoce de ciment",
    desc: "Distribution de ciment de qualité, partenaire des grandes cimenteries marocaines.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80",
  },
  {
    icon: Truck,
    title: "Livraison",
    desc: "Service de livraison rapide sur l'ensemble de la région de Marrakech et au-delà.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000&q=80",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Nos Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            De l'extraction à la livraison, nous maîtrisons toute la chaîne de valeur des matériaux de construction.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="overflow-hidden border-blue-100 transition hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-blue-100">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <s.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold">Un service sur mesure</h2>
          <p className="mt-4 text-blue-100">Nous vous accompagnons à chaque étape de votre projet.</p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">Demander un devis <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
