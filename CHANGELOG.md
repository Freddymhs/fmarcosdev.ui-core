# [0.2.0](https://github.com/Freddymhs/fmarcosdev.ui-core/compare/v0.1.3...v0.2.0) (2026-08-20)


### Bug Fixes

* **deps:** override @semantic-release/npm to ^13.1.0 for OIDC support ([4a94b51](https://github.com/Freddymhs/fmarcosdev.ui-core/commit/4a94b51b6d687cc7bc52f5f76d4271b3cd6beea5))
* **publishConfig:** add trailing slash to registry URL ([ad62626](https://github.com/Freddymhs/fmarcosdev.ui-core/commit/ad626268cf9b8473b9bb95f6d2c7828affa3ce37))


### Features

* export LIB_VERSION constant for runtime feature detection ([553fb9b](https://github.com/Freddymhs/fmarcosdev.ui-core/commit/553fb9bf4ff2bf55f99530ab5c5774176dd5e723))

# Changelog

## [0.1.3] - 2026-08-19
### Changed
- manual publish via `npm publish` + WebAuthn 2FA (state-sync with npm registry; no functional changes)

## [0.1.2] - 2026-06-24
### Added
- `DailyFocusPill` component (initial release as `@fmarcosdev/ui-core`)
- flat ESLint config + `npm run lint` script
- release automation setup (GitHub Actions + semantic-release)
