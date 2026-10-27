# Guía del repositorio

- **Alcance:** este repositorio prepara un infográfico animado con Remotion. El README es la fuente de verdad del estado.
- **Formato:** vertical 1080×1920 a 30 fps. Todo contenido importante debe quedar dentro de las zonas seguras definidas en `src/styles/`.
- **Orden:** no animar una escena sin guion, locución y estilo definidos en `docs/`. Si falta información, preguntar o dejar una nota en el pull request; no inventarla.
- **Código:** una escena por archivo en `src/scenes/`, datos en `src/data/`, sin colores, medidas ni tiempos fijos en el código; usar `src/styles/`. Calcular frames como segundos × fps.
- **Recursos:** guardar en `public/`, registrar fuente y licencia en `docs/fuentes.md`, y no usar recursos sin licencia clara ni generadores de imágenes.
- **Validación:** ejecutar `npm run lint` antes de dar un cambio por terminado.
- **Renders:** guardar en `out/`; no subirlos a Git.
- **Sincronía:** mantener sincronizados `docs/`, el código y el README cuando algo cambie.
