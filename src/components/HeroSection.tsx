export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/texture-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-varouss-black/80 via-varouss-black/70 to-varouss-black/95" />

      {/* Decorative red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-varouss-red to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-varouss-gray/20 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in-up mb-6">
          <img
            src="/images/varouss-logo.png"
            alt="VAROUSS Logo"
            className="mx-auto w-48 sm:w-56 md:w-64 h-auto drop-shadow-[0_0_30px_rgba(213,41,41,0.3)]"
          />
        </div>

        {/* Brand Name */}
        <h1
          className="animate-fade-in-up delay-200 opacity-0 font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-varouss-white leading-none mb-4"
          style={{ textShadow: '0 0 60px rgba(213, 41, 41, 0.2)' }}
        >
          VAROUSS
        </h1>

        {/* Divider */}
        <div className="animate-fade-in-up delay-300 opacity-0 flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-varouss-red" />
          <span className="text-varouss-red text-lg">🧵</span>
          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-varouss-red" />
        </div>

        {/* Slogan */}
        <p className="animate-fade-in-up delay-400 opacity-0 font-montserrat text-lg sm:text-xl md:text-2xl text-varouss-white/90 font-medium tracking-wide mb-3">
          Diseñamos tu marca. Vestimos tu idea.
        </p>

        {/* Description */}
        <p className="animate-fade-in-up delay-500 opacity-0 font-opensans text-sm sm:text-base text-varouss-gray/70 max-w-xl mx-auto leading-relaxed">
          Somos un estudio creativo especializado en diseño gráfico, branding e impresión textil.
          Transformamos tu visión en piezas únicas que comunican, impactan y representan tu identidad.
        </p>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-700 opacity-0 mt-12 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="font-montserrat text-xs text-varouss-gray/40 uppercase tracking-widest">Explorá más</span>
            <svg className="w-5 h-5 text-varouss-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
