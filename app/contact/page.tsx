"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // In production, send to your API or email service
    setTimeout(() => {
      setLoading(false)
      toast.success("Message envoyé avec succès. Nous vous recontacterons rapidement.")
      ;(e.target as HTMLFormElement).reset()
    }, 800)
  }

  return (
    <>
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-primary mb-2">CONTACT</div>
            <h1 className="text-4xl md:text-5xl font-bold">Contactez-nous</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Une question, un projet ? Notre équipe vous répond rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <CardTitle>Téléphone</CardTitle>
                  </div>
                  <a href="tel:+212524013334" className="text-muted-foreground hover:text-foreground">
                    +212 524 013 334
                  </a>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                  <a href="mailto:contact@carriprefa.com" className="text-muted-foreground hover:text-foreground">
                    contact@carriprefa.com
                  </a>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <CardTitle>Adresse</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Route de Safi, Km 14<br />
                    B.P. 12828<br />
                    Marrakech, Maroc
                  </p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <CardTitle>Horaires</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Lun - Ven : 08h00 - 18h30<br />
                    Samedi : 08h00 - 13h00<br />
                    Dimanche : Fermé
                  </p>
                </CardHeader>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input id="subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" rows={5} required />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.4!2d-8.05!3d31.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoute%20de%20Safi%20Km%2014%20Marrakech!5e0!3m2!1sfr!2sma!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation CARRIPREFA"
            />
          </div>
        </div>
      </section>
    </>
  )
}
