// Placeholder visual de foto de coche para la Fase 1.
// En la Fase 2 se sustituye por <Image> de next/image con las fotos de Sanity.

const GRADIENTES = [
  "from-slate-700 to-slate-900",
  "from-blue-700 to-slate-900",
  "from-sky-700 to-blue-900",
  "from-slate-600 to-blue-900",
  "from-blue-800 to-slate-800",
];

function elegirGradiente(semilla: string): string {
  let suma = 0;
  for (let i = 0; i < semilla.length; i++) suma += semilla.charCodeAt(i);
  return GRADIENTES[suma % GRADIENTES.length];
}

export function CarThumb({
  marca,
  modelo,
  className = "",
}: {
  marca: string;
  modelo: string;
  className?: string;
}) {
  const gradiente = elegirGradiente(marca + modelo);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradiente} ${className}`}
      role="img"
      aria-label={`Foto de muestra de ${marca} ${modelo}`}
    >
      <svg
        viewBox="0 0 120 48"
        className="w-2/3 max-w-[180px] text-white/80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 34h104M18 34c0-3.3 2.7-6 6-6s6 2.7 6 6M90 34c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 34c-3 0-5-2-5-5v-4c0-2 1-3 3-4l10-3 8-6c2-1.5 4-2 7-2h20c3 0 5 1 7 3l6 7 14 2c4 .6 7 2 9 5 1 1.5 1.5 3 1.5 5 0 1.6-1.3 3-3 3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-wide text-white/60">
        Foto de muestra
      </span>
    </div>
  );
}
