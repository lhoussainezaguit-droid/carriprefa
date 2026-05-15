import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
                CP
              </div>
              <span className="text-lg font-bold">CARRIPREFA</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Filiale de SYAM Holding, CARRIPREFA est spécialisée dans la production
              de solutions préfabriquées en béton et l&apos;exploitation de carrières à
              Marrakech.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Accueil</Link></li>
              <li><Link href="/about" className="hover:text-foreground">À propos</Link></li>
              <li><Link href="/products" className="hover:text-foreground">Produits</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/commande" className="hover:text-foreground">Commander</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+212524013334" className="hover:text-foreground">
                  +212 524 013 334
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:contact@carriprefa.com" className="hover:text-foreground">
                  contact@carriprefa.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Route de Safi, Km 14, B.P. 12828, Marrakech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CARRIPREFA - SYAM Holding. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
