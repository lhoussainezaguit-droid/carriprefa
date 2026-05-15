"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ShoppingCart, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const productList = [
  { id: "agglos", name: "Agglos" },
  { id: "agregats", name: "Agrégats" },
  { id: "bordures", name: "Bordures" },
  { id: "hourdis", name: "Hourdis" },
  { id: "paves", name: "Pavés" },
  { id: "poutrelles", name: "Poutrelles" },
]

function CommandeForm() {
  const searchParams = useSearchParams()
  const preselected = searchParams.get("product") || ""
  const [loading, setLoading] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    preselected ? [preselected] : []
  )

  function toggleProduct(id: string) {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selectedProducts.length === 0) {
      toast.error("Veuillez sélectionner au moins un produit.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success(
        "Demande de commande envoyée. Notre équipe vous contactera sous 24h."
      )
      ;(e.target as HTMLFormElement).reset()
      setSelectedProducts([])
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">1. Sélectionnez vos produits *</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {productList.map((p) => {
            const active = selectedProducts.includes(p.id)
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => toggleProduct(p.id)}
                className={`relative rounded-lg border p-4 text-sm font-medium transition-all ${
                  active
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-background hover:border-primary/40"
                }`}
              >
                {active && (
                  <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-primary" />
                )}
                {p.name}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">2. Vos coordonnées</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Société / Chantier</Label>
            <Input id="company" name="company" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">3. Détails de la commande</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ville de livraison *</Label>
              <Input id="city" name="city" placeholder="Marrakech" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date souhaitée</Label>
              <Input id="date" name="date" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresse de livraison *</Label>
            <Input id="address" name="address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">
              Quantités et détails (dimensions, références, etc.) *
            </Label>
            <Textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Exemple : 1000 agglos 20×20×50, 5 m³ de gravier 4/10..."
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  )
}

export default function CommandePage() {
  return (
    <>
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-2">
              <ShoppingCart className="h-4 w-4" />
              PASSER COMMANDE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Demande de commande</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Remplissez ce formulaire et notre équipe commerciale vous contactera
              sous 24h pour finaliser votre commande et établir un devis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Votre demande</CardTitle>
                  <CardDescription>
                    Tous les champs marqués d'un * sont obligatoires.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Chargement...</div>}>
                    <CommandeForm />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comment ça marche ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {[
                    { n: "1", t: "Vous remplissez le formulaire" },
                    { n: "2", t: "Nous vous contactons sous 24h" },
                    { n: "3", t: "Établissement du devis personnalisé" },
                    { n: "4", t: "Livraison sur votre chantier" },
                  ].map((s) => (
                    <div key={s.n} className="flex items-start gap-3">
                      <div className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {s.n}
                      </div>
                      <div className="pt-0.5">{s.t}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact direct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Préférez nous joindre directement ?</p>
                  <a
                    href="tel:+212524013334"
                    className="block font-semibold text-foreground hover:text-primary"
                  >
                    +212 524 013 334
                  </a>
                  <a
                    href="mailto:contact@carriprefa.com"
                    className="block font-semibold text-foreground hover:text-primary"
                  >
                    contact@carriprefa.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
