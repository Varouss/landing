export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-varouss-black border-t border-varouss-gray/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-px w-8 bg-varouss-red/30" />
          <span className="text-varouss-red text-sm">🧵</span>
          <span className="h-px w-8 bg-varouss-red/30" />
        </div>

        <p className="font-montserrat text-varouss-white/80 text-xs font-semibold tracking-widest uppercase mb-1">
          VAROUSS
        </p>
        <p className="font-opensans text-varouss-gray/30 text-[11px]">
          © {currentYear} Varouss — Todos los derechos reservados.
        </p>
        <p className="font-opensans text-varouss-gray/20 text-[10px] mt-1">
          Identidad que se lleva puesta.
        </p>
      </div>
    </footer>
  );
}
