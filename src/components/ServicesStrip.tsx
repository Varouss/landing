const services = [
  { icon: '👕', label: 'Remeras y Camisetas Personalizadas' },
  { icon: '🧑‍🍳', label: 'Cofias y Delantales' },
  { icon: '🧢', label: 'Gorras Personalizadas' },
  { icon: '🚩', label: 'Banderas Personalizadas' },
];

export default function ServicesStrip() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-varouss-black" />

      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-varouss-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-varouss-red/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section label */}
        <p className="font-montserrat text-[10px] sm:text-xs uppercase tracking-[0.4em] text-varouss-red/60 text-center mb-10 font-semibold">
          Lo que hacemos
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-varouss-dark/80 border border-varouss-gray/5 flex items-center justify-center transition-all duration-300 group-hover:border-varouss-red/30 group-hover:bg-varouss-red/5 group-hover:scale-110">
                <span className="text-2xl sm:text-3xl">{service.icon}</span>
              </div>
              <span className="font-montserrat text-[11px] sm:text-xs text-varouss-gray/50 text-center font-medium leading-tight group-hover:text-varouss-white/80 transition-colors duration-300 max-w-[120px]">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Y mucho más */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-varouss-gray/15" />
          <p className="font-montserrat text-sm sm:text-base text-varouss-white/60 font-semibold tracking-wide italic">
            Y mucho más...
          </p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-varouss-gray/15" />
        </div>
      </div>
    </section>
  );
}
