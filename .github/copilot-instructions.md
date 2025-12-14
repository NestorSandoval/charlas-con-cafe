# Instrucciones para asistentes de código (Copilot / agentes)

Breve, práctico y específico para el repo `charlas-con-cafe-akubica`.

1. Propósito del proyecto:
   - App web Next.js (App Router) para gestionar y mostrar "Charlas con Café".
   - Código en `src/` con rutas organizadas bajo `src/app` en dos secciones: `(admin)` y `(public)`.

2. Arquitectura y límites de responsabilidad:
   - Enrutamiento: usa Next.js App Router. Ejemplo: `src/app/(public)/calendario/page.tsx` es un *server component* (es `async` y obtiene datos en el servidor).
   - Componentes UI: `src/components/` contiene subcarpetas por dominio (e.g. `talks`, `rsvp`, `preferences`, `ui`). Prefiere reutilizar los primitives en `src/components/ui`.
   - Lógica de negocio / API: existe la carpeta `src/services/` para encapsular llamadas a la API. Varios archivos `*.service.ts` están presentes (algunos vacíos) — centraliza fetchs aquí.
   - Utilidades compartidas: `src/lib/` (ej. `cn` en `src/lib/utils.ts`). Usa el alias `@/` definido en `tsconfig.json`.

3. Convenciones importantes detectadas:
   - TypeScript con `strict: true` (ver `tsconfig.json`). Siempre tipar props y datos de la API.
   - TailwindCSS para estilos y `twMerge` + `clsx` para composición de clases (`src/lib/utils.ts` → `cn`).
   - Remote images: `next.config.ts` permite `images.unsplash.com`. Respeta `next/image` y `remotePatterns` cuando agregues orígenes.
   - Variables de entorno: la app usa `NEXT_PUBLIC_API_URL` (ejemplo en `src/app/(public)/calendario/page.tsx`) para construir llamadas al backend.
   - Fetch en server components: patrón observado en `page.tsx` → `fetch(url, { cache: 'no-store' })` y fallback a mock data si falla.

4. Flujo típico para agregar/consumir datos de la API:
   - Implementa un método en `src/services/<recurso>.service.ts` que construya URLs usando `process.env.NEXT_PUBLIC_API_URL`.
   - Exporta funciones que devuelvan tipos TS (defínelos en `src/types/index.ts` si falta).
   - En rutas/server components (`src/app/**/page.tsx`) importa el servicio y llama la función; evita lógica de fetch dispersa.

5. Developer workflows y comandos:
   - Desarrollo local: `npm run dev` (usa Next 15 / React 19 según `package.json`).
   - Build / producción: `npm run build` y `npm start`.
   - Linter: `npm run lint` (eslint). No hay tests automatizados detectables en el repo.

6. Patrones y ejemplos concretos (copiar/usar):
   - Server component que obtiene sesiones (ya implementado):
     - `src/app/(public)/calendario/page.tsx` — construye `from` y `to` con fechas ISO y llama la API.
   - Grid de sesiones: `src/components/talks/session-grid.tsx` mapea `sessions` a `SessionCard`.
   - Composición CSS: usa `cn(...)` desde `src/lib/utils.ts` para combinar clases Tailwind y `twMerge`.

7. Qué revisar antes de pedir cambios al repo:
   - ¿El cambio necesita ser un "client component"? Si usa hooks/handlers, añade `"use client"` arriba.
   - Si agregas imágenes remotas, actualiza `next.config.ts` si es necesario.
   - Mantén las rutas de archivos bajo `src/app` como server components cuando posible; client components sólo donde haya interactividad.

8. Integraciones y puntos externos:
   - Backend API: llamada basada en `NEXT_PUBLIC_API_URL`. Las rutas del servicio deben respetar paginación y filtros (ej. `?from=...&to=...&published=1`).
   - Imágenes: `images.unsplash.com` ya permitido.

9. Qué NO inventar (solo documentado):
   - No asumas tests o pipelines CI configurados — no se detectaron archivos `.github/workflows`.
   - No reescribir `src/components/ui` sin coordinar: son primitives compartidos.

10. Pistas para IA al proponer cambios:
   - Proponer modificaciones enfocadas y con un solo objetivo (e.g., "mover fetch a `talks.service.ts`").
   - Incluir el path del/los archivos a modificar y un patch de ejemplo (diff) cuando sea posible.
   - Fornecer tipos TS concretos cuando sugieras nuevos exports (ej. `type Talk = { id: string; title: string; startAt: string; ... }`).

Si quieres, aplico ahora una propuesta para:
- mover el fetch de `src/app/(public)/calendario/page.tsx` a `src/services/talks.service.ts` y
- agregar el tipo `Talk` en `src/types/index.ts`.

¿Te parece bien esa tarea de refactor? Indica si quieres que la haga y si debo crear tests o sólo actualizar código.
