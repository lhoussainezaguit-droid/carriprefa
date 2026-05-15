"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/products", label: "Produits" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://carriprefa.com/wp-content/uploads/2023/06/logo-cp.png"
            alt="CARRIPREFA"
            className="h-12 w-auto"
          />
          <span className="hidden text-lg font-bold text-blue-900 sm:inline">
            CARRIPRÉFA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+212524013334"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            <Phone className="h-4 w-4" />
            +212 524 013 334
          </a>
          <Link
            href="/commande"
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800"
          >
            Commander
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-blue-700 hover:bg-blue-50 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-blue-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+212524013334"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
            >
              <Phone className="h-4 w-4" /> +212 524 013 334
            </a>
            <Link
              href="/commande"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white"
            >
              Commander
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
