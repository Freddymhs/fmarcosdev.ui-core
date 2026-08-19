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

## Publishing

Releases son automáticos via GitHub Actions + [semantic-release](https://github.com/semantic-release/semantic-release).

Cada push a `master` con commits [Conventional Commits](https://www.conventionalcommits.org/) dispara:

| prefijo | bump |
|---|---|
| `feat:` | minor (`0.1.2` → `0.2.0`) |
| `fix:` | patch (`0.1.2` → `0.1.3`) |
| `feat!:` o `BREAKING CHANGE:` | major (`0.1.2` → `1.0.0`) |
| `chore:`, `docs:`, etc. | sin release |

El workflow corre `npm run build`, analiza commits, actualiza `package.json`, `CHANGELOG.md`, crea tag y GitHub Release, y publica a npm via [Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC, sin tokens persistentes).
