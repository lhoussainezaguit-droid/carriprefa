import Link from "next/link"
import { Target, Heart, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata = {
  title: "À propos - CARRIPREFA",
  description: "CARRIPREFA, filiale du groupe SYAM Holding, spécialiste de la préfabrication béton à Marrakech depuis plus de 15 ans.",
}

const values = [
  { icon: Target, title: "Qualité", desc: "Contrôles qualité rigoureux à chaque étape de production." },
  { icon: Heart, title: "Engagement", desc: "Envers nos clients, nos employés et le développement local." },
  { icon: TrendingUp, title: "Innovation", desc: "Amélioration continue de nos processus et équipements." },
  { icon: Users, title: "Équipe", desc: "Plus de 100 collaborateurs passionnés et qualifiés." },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">À propos de CARRIPRÉFA</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Filiale du groupe SYAM Holding, acteur de référence dans la préfabrication béton et l'exploitation de carrières.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80"
              alt="Carrière CARRIPREFA"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Notre histoire</h2>
            <p className="mt-4 text-slate-600">
              CARRIPRÉFA a vu le jour pour répondre aux besoins croissants du marché marocain en matière de matériaux de construction préfabriqués et de granulats. Depuis sa création, l'entreprise n'a cessé de se développer pour devenir un partenaire de confiance des professionnels du BTP à Marrakech et dans toute la région.
            </p>
            <p className="mt-4 text-slate-600">
              Adossée au groupe SYAM Holding, nous bénéficions d'une solidité financière et industrielle qui nous permet d'investir continuellement dans des équipements modernes et dans la formation de nos équipes.
            </p>
            <ul className="mt-6 space-y-2">
              {["15+ ans d'expérience", "Carrières propres à Marrakech", "Usine moderne de préfabrication", "Plus de 100 collaborateurs"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/40 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Nos Valeurs</h2>
            <p className="mt-3 text-slate-600">Ce qui guide notre action chaque jour</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="border-blue-100 text-center">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <v.icon className="h-7 w-7 text-blue-700" />
                  </div>
                  <CardTitle className="text-blue-900">{v.title}</CardTitle>
                  <CardDescription>{v.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold">Travaillons ensemble</h2>
          <p className="mt-4 text-blue-100">Découvrez nos produits et services ou contactez-nous directement.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/products">Voir nos produits <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
