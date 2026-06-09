import type { ReactNode } from "react";

// Fila de métodos de pago compatibles con Stripe (referencia visual).
// Pastillas uniformes con la marca de cada método.

function Pill({
  children,
  className = "bg-white",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li
      className={`flex h-8 w-12 items-center justify-center rounded-md border border-border ${className}`}
    >
      {children}
    </li>
  );
}

function Visa() {
  return (
    <Pill>
      <span className="text-[13px] font-extrabold italic leading-none tracking-tight text-[#1A1F71]">
        VISA
      </span>
    </Pill>
  );
}

function Mastercard() {
  return (
    <Pill>
      <svg viewBox="0 0 36 22" className="h-[18px] w-auto" aria-hidden="true">
        <circle cx="14" cy="11" r="7" fill="#EB001B" />
        <circle cx="22" cy="11" r="7" fill="#F79E1B" />
        <path
          d="M18 5.6a7 7 0 0 1 0 10.8 7 7 0 0 1 0-10.8Z"
          fill="#FF5F00"
        />
      </svg>
    </Pill>
  );
}

function Amex() {
  return (
    <Pill className="bg-[#1F72CD]">
      <span className="text-[8px] font-bold uppercase leading-none tracking-tight text-white">
        Amex
      </span>
    </Pill>
  );
}

function Paypal() {
  return (
    <Pill>
      <span className="text-[12px] font-extrabold italic leading-none">
        <span className="text-[#003087]">Pay</span>
        <span className="text-[#009CDE]">Pal</span>
      </span>
    </Pill>
  );
}

function ApplePay() {
  return (
    <Pill>
      <span className="flex items-center gap-0.5 leading-none text-black">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
          <path d="M16.36 1.43c0 1.14-.49 2.27-1.17 3.08-.74.9-1.99 1.57-2.99 1.49-.12-1.09.42-2.24 1.07-2.99.71-.84 1.99-1.47 2.96-1.51.02.14.13.28.13.43Zm.14 4.77c-1.65-.1-3.05.94-3.84.94-.79 0-2-.9-3.3-.87-1.7.03-3.27.99-4.14 2.52-1.77 3.07-.45 7.61 1.27 10.1.84 1.22 1.84 2.59 3.16 2.54 1.27-.05 1.75-.82 3.28-.82 1.53 0 1.96.82 3.3.79 1.36-.02 2.22-1.24 3.05-2.47.96-1.41 1.36-2.78 1.38-2.85-.03-.01-2.65-1.02-2.68-4.03-.02-2.52 2.06-3.72 2.15-3.78-1.18-1.73-3.01-1.92-3.65-1.96Z" />
        </svg>
        <span className="text-[11px] font-semibold">Pay</span>
      </span>
    </Pill>
  );
}

function GooglePay() {
  return (
    <Pill>
      <span className="flex items-center text-[11px] font-semibold leading-none">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#5F6368]">Pay</span>
      </span>
    </Pill>
  );
}

function Klarna() {
  return (
    <Pill className="bg-[#FFB3C7]">
      <span className="text-[9px] font-bold leading-none text-black">
        Klarna
      </span>
    </Pill>
  );
}

function Maestro() {
  return (
    <Pill>
      <svg viewBox="0 0 36 22" className="h-[18px] w-auto" aria-hidden="true">
        <circle cx="14" cy="11" r="7" fill="#0099DF" />
        <circle cx="22" cy="11" r="7" fill="#ED0006" />
        <path
          d="M18 5.6a7 7 0 0 1 0 10.8 7 7 0 0 1 0-10.8Z"
          fill="#6C6BBD"
        />
      </svg>
    </Pill>
  );
}

export function PaymentMethods() {
  return (
    <div className="mt-4">
      <p className="text-center text-xs text-muted-foreground">
        Más opciones de pago
      </p>
      <ul
        className="mt-3 flex flex-wrap items-center justify-center gap-2"
        aria-label="Métodos de pago aceptados"
      >
        <Visa />
        <Mastercard />
        <Amex />
        <Paypal />
        <ApplePay />
        <GooglePay />
        <Klarna />
        <Maestro />
      </ul>
      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Pago seguro procesado por Stripe
      </p>
    </div>
  );
}
