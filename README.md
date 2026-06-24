# @fmarcosdev/ui-core

Librería de componentes React mínima para compartir UI entre proyectos (ej. `fmarcosdev.app.web`).

## Uso local (ruta `file:`)

En `fmarcosdev.app.web/package.json`, añade:

```json
"dependencies": {
  "@fmarcosdev/ui-core": "file:../fmarcosdev.ui-core"
}
```

luego instala:

```bash
cd ../fmarcosdev.app.web
npm install
```

Ejemplo de uso:

```tsx
import { DailyFocusPill } from "@fmarcosdev/ui-core";

<DailyFocusPill
  study="Claude Code"
  project="Curso Python"
  nextValue="AWS · Loans"
/>;
```

## Scripts

- `npm run build` — empaqueta ESM+CJS y tipos a `dist/` (tsup).
- `npm run dev` — watch.
- `npm run lint` — chequea `src/**` con ESLint (flat config).

React/ReactDOM son peer dependencies (no se incluyen). Ajusta los estilos en el componente si quieres otro theme; las CSS vars están inline.
