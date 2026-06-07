export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-varouss-black" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/images/texture-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Red glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-varouss-red/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-varouss-gray/15 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="mb-6">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-varouss-red/10 border border-varouss-red/20 mb-2">
            <span className="text-3xl">🖼️</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-varouss-white tracking-wider mb-4 leading-none">
          CONOCÉ TODO LO QUE
          <span className="block text-varouss-red">PODEMOS HACER POR VOS</span>
        </h2>

        {/* Description */}
        <p className="font-opensans text-varouss-gray/60 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Descubrí nuestro catálogo completo, proyectos realizados y todos los servicios que tenemos para transformar tu marca. Tu próximo paso está acá. 💥
        </p>

        {/* CTA Button */}
        <a
          href="#" // Placeholder - el usuario proporcionará el link
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative inline-flex items-center gap-3
            px-10 py-4 sm:px-14 sm:py-5
            bg-varouss-red text-varouss-white
            font-montserrat font-bold text-sm sm:text-base uppercase tracking-widest
            rounded-full
            transition-all duration-500 ease-out
            hover:bg-varouss-red-light hover:scale-105
            animate-pulse-glow
            cursor-pointer
          "
        >
          <span>Visitá nuestra web</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

        {/* Sub-text */}
        <p className="font-opensans text-varouss-gray/30 text-xs mt-6">
          www.varouss.com
        </p>
      </div>
    </section>
  );
}
