import type { ReactNode } from "react";

type MetodoPago = {
  nombre: string;
  icono: ReactNode;
};

function IconoVisa() {
  return (
    <svg viewBox="0 0 48 16" className="h-4 w-auto" aria-hidden="true">
      <path
        fill="#1A1F71"
        d="M19.5 1.2 17 14.8h-3.2L16.3 1.2h3.2Zm11.2 9.3.6-3.4.4 3.4h-1Zm3.3 3.3h3l-2.8-13.6h-2.9c-.6 0-1.2.4-1.4 1l-4.9 12.6h3.4l.7-1.9h4.2l.4 1.9Zm-3.6-4.6 1.7-4.8.9 4.8h-2.6ZM15.2 1.2 11.6 10.2 11.2 7.8l-1.4-5.2c-.2-.8-.9-1.4-1.7-1.4H2.1L2 1.5c0 .1 1.5.3 2.9 1.3 1.4 1 1.9 2.3 2.2 3.7L8.5 14.8h3.4l5.3-13.6ZM39.5 1.2c-.6 0-1.2.3-1.5 1l-4.3 12.6h3.3l.6-1.7h4l.4 1.7H45L41.1 1.2h-1.6Zm-2.5 8.3 1.8-5.1.9 5.1h-2.7Z"
      />
    </svg>
  );
}

function IconoMastercard() {
  return (
    <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden="true">
      <circle cx="12" cy="10" r="7" fill="#EB001B" />
      <circle cx="20" cy="10" r="7" fill="#F79E1B" />
      <path
        fill="#FF5F00"
        d="M16 4.8a7 7 0 0 1 0 10.4A7 7 0 0 1 16 4.8Z"
      />
    </svg>
  );
}

function IconoAmex() {
  return (
    <svg viewBox="0 0 48 16" className="h-4 w-auto" aria-hidden="true">
      <rect width="48" height="16" rx="2" fill="#006FCF" />
      <path
        fill="#fff"
        d="M6.5 5.5h2.1l.6 1.5.6-1.5H12v5H10.5V7.2L9.5 10.5H8.8L7.8 7.2V10.5H6.5V5.5Zm5.5 0h3.8c1 0 1.7.7 1.7 1.6 0 .5-.2.9-.6 1.2.5.3.8.8.8 1.4 0 1-.8 1.8-1.9 1.8h-3.8V5.5Zm2.8 2.5c.5 0 .8-.3.8-.7 0-.4-.3-.7-.8-.7h-1.3v1.4h1.3Zm.1 2.5c.5 0 .9-.3.9-.8 0-.5-.4-.8-.9-.8h-1.4v1.6h1.4ZM20 5.5h4.2l.7 1.8.7-1.8H30v.9l-1.2 1.5L30 9.8v.7h-2.1l-.8-2-.8 2H24V5.5Zm3.5 2.2.9-1.1h-1.8l.9 1.1ZM33 5.5h3.5l1.2 5H35l-.2-.8h-1.8l-.2.8h-2.1l1.2-5Zm1.5 3 .5-2.1.5 2.1h-1Z"
      />
    </svg>
  );
}

function IconoPaypal() {
  return (
    <svg viewBox="0 0 48 16" className="h-4 w-auto" aria-hidden="true">
      <path
        fill="#003087"
        d="M17.8 2.5H12c-.5 0-.9.4-1 .9L9.2 12.1c0 .4.3.7.7.7h2.5l.6-4.1c.1-.5.5-.9 1-.9h1.6c3.1 0 4.9-1.5 5.4-4.5.2-1.3 0-2.3-.7-3-.7-.7-1.8-1-3.2-1h-.3Zm.4 4.4c-.3 1.9-1.7 1.9-3.1 1.9h-.8l.5-3.4h.8c.9 0 1.8 0 2.2.5.3.3.5.8.4 1Z"
      />
      <path
        fill="#009CDE"
        d="M28.5 2.5h-5.8c-.5 0-.9.4-1 .9L20 12.1c0 .4.3.7.7.7h2.8l.7-4.6h1.6c3.1 0 4.9-1.5 5.4-4.5.2-1.3 0-2.3-.7-3-.7-.7-1.8-1-3.2-1h-.2Zm.4 4.4c-.3 1.9-1.7 1.9-3.1 1.9h-.8l.5-3.4h.8c.9 0 1.8 0 2.2.5.3.3.5.8.4 1Z"
      />
    </svg>
  );
}

function IconoApplePay() {
  return (
    <svg viewBox="0 0 48 20" className="h-4 w-auto" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.2 3.8c-.6.7-1.6 1.3-2.6 1.2-.1-1 .4-2.1 1-2.8.6-.7 1.7-1.2 2.5-1.2.1 1-.3 2.1-.9 2.8Zm.9 1.5c-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.2 0 2-1 2.7-2 .8-1.2 1.2-2.4 1.2-2.4 0 0-2.4-.9-2.4-3.6 0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8ZM22.5 4.5v11.4h2.1V9.8c.5-1.3 1.7-2.1 3-2 .2 0 .5 0 .7.1V5.7c-.2 0-.4-.1-.6-.1-1.2 0-2.3.7-2.9 1.8l-.3-1.9h-2Zm8.2 7.9c-1.2 0-2-.9-2-2.2 0-1.3.8-2.2 2-2.2s2 .9 2 2.2c0 1.3-.8 2.2-2 2.2Zm0-5.5c-2.4 0-4 1.7-4 4.1 0 2.4 1.6 4.1 4 4.1 1.2 0 2.2-.5 2.8-1.3l-1.3-1c-.4.5-1 .8-1.6.8-1 0-1.7-.6-2-1.6h4.9v-.6c0-2.4-1.5-4.1-3.9-4.1ZM38.8 9.3c.8 0 1.5.4 1.8 1.1l1.8-.8c-.5-1.2-1.7-2-3.3-2-2.2 0-3.8 1.7-3.8 4.1 0 2.4 1.6 4.1 3.8 4.1 1.6 0 2.8-.8 3.3-2l-1.8-.8c-.3.7-1 1.1-1.8 1.1-1.2 0-2.1-.9-2.1-2.2s.9-2.2 2.1-2.2Z"
      />
    </svg>
  );
}

function IconoGooglePay() {
  return (
    <svg viewBox="0 0 48 20" className="h-4 w-auto" aria-hidden="true">
      <path fill="#5F6368" d="M21.2 10.1V12h6.8c-.3 1.6-1.2 2.9-2.5 3.8-1 .7-2.3 1.1-3.7 1.1-3.2 0-5.9-2.6-5.9-5.9S19.6 4.1 22.8 4.1c1.7 0 3.2.6 4.4 1.7l1.9-1.9C27.5 2.4 25.3 1.5 22.8 1.5 17.8 1.5 13.7 5.6 13.7 10.6s4.1 9.1 9.1 9.1c2.5 0 4.8-.9 6.5-2.5 1.7-1.7 2.6-4.1 2.5-6.8 0-.2 0-.4-.1-.6H21.2v.3Z" />
      <path fill="#4285F4" d="M4.5 10.1c0-.8.1-1.5.4-2.2L1.2 5.2C.4 6.8 0 8.4 0 10.1s.4 3.3 1.2 4.9l3.7-2.7c-.3-.7-.4-1.4-.4-2.2Z" />
      <path fill="#34A853" d="M10.1 4.1c1.4 0 2.6.5 3.6 1.4l2.7-2.7C14.8 1.4 12.5.5 10.1.5 6.4.5 3.2 2.7 1.2 5.2l3.7 2.7c1-2 3-3.4 5.2-3.4Z" />
      <path fill="#FBBC04" d="M10.1 15.6c-2.2 0-4.2-1.2-5.2-3l-3.7 2.7c2 2.5 5.2 4.1 8.9 4.1 2.4 0 4.7-.9 6.4-2.5l-2.7-2.1c-1.2.8-2.7 1.3-4.4 1.3Z" />
      <path fill="#EA4335" d="M21.2 7.4h9.9V4.5H21.2v2.9Z" />
    </svg>
  );
}

function IconoKlarna() {
  return (
    <svg viewBox="0 0 48 16" className="h-4 w-auto" aria-hidden="true">
      <rect width="48" height="16" rx="2" fill="#FFB3C7" />
      <path
        fill="#0A0B09"
        d="M8.5 4.5h2v7h-2v-7Zm4.5 0h2l2.2 4.5L19.2 4.5h2v7h-1.6V7.2l-2.1 4.3h-1.1l-2.1-4.3v4.3h-1.6v-7Zm9.5 0c2.2 0 3.5 1.4 3.5 3.5s-1.3 3.5-3.5 3.5h-2.5v-7h2.5Zm0 5.5c1.2 0 1.8-.7 1.8-2s-.6-2-1.8-2h-.5v4h.5Zm5.5-5.5h2v7h-2v-7Z"
      />
    </svg>
  );
}

function IconoMaestro() {
  return (
    <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden="true">
      <circle cx="11" cy="10" r="7" fill="#0099DF" />
      <circle cx="21" cy="10" r="7" fill="#ED0006" />
      <path fill="#6C6C6C" d="M16 4.8a7 7 0 0 1 0 10.4A7 7 0 0 1 16 4.8Z" />
    </svg>
  );
}

const METODOS: MetodoPago[] = [
  { nombre: "Visa", icono: <IconoVisa /> },
  { nombre: "Mastercard", icono: <IconoMastercard /> },
  { nombre: "American Express", icono: <IconoAmex /> },
  { nombre: "PayPal", icono: <IconoPaypal /> },
  { nombre: "Apple Pay", icono: <IconoApplePay /> },
  { nombre: "Google Pay", icono: <IconoGooglePay /> },
  { nombre: "Klarna", icono: <IconoKlarna /> },
  { nombre: "Maestro", icono: <IconoMaestro /> },
];

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
        {METODOS.map((metodo) => (
          <li
            key={metodo.nombre}
            className="flex h-9 min-w-[3.25rem] items-center justify-center rounded border border-border bg-background px-2.5 text-foreground"
            title={metodo.nombre}
          >
            {metodo.icono}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Pago seguro procesado por Stripe
      </p>
    </div>
  );
}
