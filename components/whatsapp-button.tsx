import Link from "next/link"

export function WhatsAppButton() {
  const phone = "212524013334"
  const message = encodeURIComponent(
    "Bonjour CARRIPREFA, je souhaite passer une commande / obtenir des informations."
  )
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter CARRIPREFA sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 hover:bg-[#1ebe57] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.49-.971-2.832-.143-.187-.36-.245-.575-.245-.157 0-.444.014-.687.014-.215 0-.42.027-.617.106-.502.202-1.245 1.36-1.245 2.633 0 .56.108 1.124.31 1.65.66 1.762 1.737 3.36 3.183 4.595 1.345 1.146 2.93 2.018 4.66 2.347.262.05.526.07.79.07.6 0 1.157-.157 1.523-.46.487-.4.943-1.06.943-1.78 0-.13-.013-.244-.04-.358-.143-.502-2.135-1.36-2.482-1.36zM16 .25C7.301.25.25 7.301.25 16c0 2.838.762 5.616 2.198 8.05L.25 31.75l7.928-2.078C10.516 30.97 13.226 31.75 16 31.75 24.699 31.75 31.75 24.699 31.75 16S24.699.25 16 .25zm0 28.65c-2.422 0-4.808-.65-6.9-1.879l-.494-.293-5.158 1.352 1.376-5.024-.323-.514A12.7 12.7 0 0 1 3.1 16C3.1 8.875 8.875 3.1 16 3.1S28.9 8.875 28.9 16 23.125 28.9 16 28.9z" />
      </svg>
    </Link>
  )
}
