import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { CocheFoto } from "@/lib/cars";

// Imagen de coche servida desde Sanity (con next/image).
export function CarImage({
  foto,
  alt,
  sizes,
  className = "object-cover",
  priority = false,
}: {
  foto: CocheFoto;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const src = urlForImage(foto).width(1000).quality(80).url();

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 1024px) 100vw, 33vw"}
      className={className}
      priority={priority}
    />
  );
}
