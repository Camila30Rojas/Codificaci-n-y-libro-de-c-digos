# Infográfico vertical con Remotion

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Formato de salida](#2-formato-de-salida)
3. [Estado actual y próxima iteración](#3-estado-actual-y-próxima-iteración)
4. [Requisitos](#4-requisitos)
5. [Instalación y comandos](#5-instalación-y-comandos)
6. [Estructura del repositorio](#6-estructura-del-repositorio)
7. [Flujo de producción](#7-flujo-de-producción)
8. [Documentación de preproducción](#8-documentación-de-preproducción)
9. [Renders y entregables](#9-renders-y-entregables)
10. [Créditos, fuentes y licencias](#10-créditos-fuentes-y-licencias)

## 1. Descripción del proyecto

Plantilla base para un infográfico animado vertical. **Tema por definir.**

## 2. Formato de salida

La composición `Infografico` está preparada para 1080×1920 píxeles, relación 9:16 y 30 fps. Las plataformas de destino están por definir.

## 3. Estado actual y próxima iteración

La estructura técnica y las plantillas de preproducción están listas. En la próxima iteración se definirán el tema, el guion, la locución, el estilo, los datos y la animación.

## 4. Requisitos

- Node.js LTS 22.x (también indicado en `.nvmrc`).
- npm 10.x o posterior.

## 5. Instalación y comandos

```bash
npm install
npm run dev
npm run render
npm run lint
```

`npm run dev` abre Remotion Studio. `npm run render` genera el MP4 en `out/`.

## 6. Estructura del repositorio

```text
docs/       Documentación de preproducción
src/        Composición, escenas, componentes, datos y estilos
public/     Audio, imágenes y fuentes con licencia registrada
out/        Renders locales (no se sube a Git)
```

## 7. Flujo de producción

Tema → guion → locución → estilo → storyboard → animación → render.

## 8. Documentación de preproducción

- [Tema](docs/01-tema.md)
- [Guion](docs/02-guion.md)
- [Locución](docs/03-locucion.md)
- [Estilo](docs/04-estilo.md)
- [Storyboard](docs/05-storyboard.md)
- [Fuentes](docs/fuentes.md)

## 9. Renders y entregables

Los renders finales serán MP4 H.264 con audio AAC y se guardarán en `out/`. Esa carpeta no se sube a Git.

## 10. Créditos, fuentes y licencias

Las fuentes de datos y la licencia de cada recurso se registrarán en [docs/fuentes.md](docs/fuentes.md). No se incorporarán recursos sin licencia clara.
