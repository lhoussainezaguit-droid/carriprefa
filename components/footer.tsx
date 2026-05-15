import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="https://carriprefa.com/wp-content/uploads/2023/06/logo-cp.png"
                alt="CARRIPREFA"
                className="h-12 w-auto rounded bg-white/95 p-1"
              />
              <span className="text-lg font-bold text-white">CARRIPRÉFA</span>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              Filiale du Groupe SYAM Holding. Spécialiste de la préfabrication béton et de l'exploitation de carrières à Marrakech.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/products" className="hover:text-white">Produits</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Produits</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/products#agglos" className="hover:text-white">Agglos</Link></li>
              <li><Link href="/products#agregats" className="hover:text-white">Agrégats</Link></li>
              <li><Link href="/products#bordures" className="hover:text-white">Bordures</Link></li>
              <li><Link href="/products#hourdis" className="hover:text-white">Hourdis</Link></li>
              <li><Link href="/products#paves" className="hover:text-white">Pavés</Link></li>
              <li><Link href="/products#poutrelles" className="hover:text-white">Poutrelles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a href="tel:+212524013334" className="hover:text-white">+212 524 013 334</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@carriprefa.com" className="hover:text-white">contact@carriprefa.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Route de Safi Km 14, B.P. 12828, Marrakech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} CARRIPRÉFA - Filiale SYAM Holding. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
