/**
 * Márgenes reservados para evitar que la interfaz de las redes sociales tape
 * texto, datos o subtítulos: encabezado arriba y descripción/botones abajo.
 * La guía visual se activa con showSafeZones, pero está desactivada por defecto.
 */
export const SAFE_ZONES = {
  top: 250,
  bottom: 320,
  horizontal: 80,
} as const;
