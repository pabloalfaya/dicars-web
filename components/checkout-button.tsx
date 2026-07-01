"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type CheckoutButtonProps = {
  className?: string;
  children: ReactNode;
};

export function CheckoutButton({ className = "", children }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "No se pudo iniciar el pago");
      }

      // Redirigimos al Checkout hospedado por Stripe.
      window.location.href = data.url;
    } catch (checkoutError) {
      console.error("[checkout-button]", checkoutError);
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Error al iniciar el pago",
      );
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={className}
      >
        {loading ? "Redirigiendo a Stripe..." : children}
      </button>
      {error && (
        <p className="text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
