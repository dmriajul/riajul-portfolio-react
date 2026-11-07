# Favicon set

All icons are generated from one photograph: **`src/assets/profile.jpeg`** (983 × 833).
The photograph is the source of truth and is never overwritten — every icon below is a
derived export.

## Design

- Square canvas, circular photo crop, transparent outside the circle.
- 1 px-equivalent forest ring (`#04110f`) followed by a hairline gold ring (`#c9a84c`),
  matching the site's forest-green + gold brand tokens.
- No gradients, no text, no lettering, no extra decoration.
- `apple-touch-icon.png` is the only opaque file (iOS renders transparency as black),
  so the same rings sit on a solid `#04110f` canvas.

## Files

| File | Size | Purpose |
| --- | --- | --- |
| `public/favicon.ico` | 16, 32, 48 | Legacy browsers, Windows shortcuts, RSS readers |
| `public/favicon-32x32.png` | 32 × 32 | Standard browser tab |
| `public/favicon-16x16.png` | 16 × 16 | Small browser tab / bookmarks bar |
| `public/apple-touch-icon.png` | 180 × 180 (opaque) | iOS home screen, Safari |
| `public/android-chrome-192x192.png` | 192 × 192 | Android home screen (via `site.webmanifest`) |
| `public/android-chrome-512x512.png` | 512 × 512 | Android splash / PWA install |

`index.html` links the ICO plus the two PNG tab icons, the Apple touch icon and the
manifest. The icons are **not** declared `purpose: maskable` on purpose: a maskable icon
is cropped to a much smaller safe zone, which would cut the face.

## Regenerating

Requires ImageMagick 6/7 (`convert`). Run from the repository root; `SIZE` is the output
size and `SS` is the supersampling factor.

```bash
# crop box 560x560+250+45 frames the head with headroom inside the circle
convert src/assets/profile.jpeg -crop 560x560+250+45 +repage \
  -resize "${DIAM}x${DIAM}^" -gravity center -extent "${DIAM}x${DIAM}" /tmp/photo.png
```

Geometry, as fractions of the canvas width `W`:

- photo circle radius `0.445 W` (centred, clipped with a circular alpha mask)
- gold ring radius `0.449 W`, stroke `0.011 W`, colour `#c9a84c`
- forest ring radius `0.478 W`, stroke `0.040 W`, colour `#04110f`

Each icon is rendered at `SIZE × SS` (512@4×, 180@8×, 48@24×, 32@24×, 16@40×), composed
in that order, then downscaled with a Lanczos filter and written as `PNG32:` so the
corners stay transparent. The ICO is built from the exported 16/32/48 PNGs:

```bash
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png public/favicon.ico
```

Always re-check the sizes (`identify public/favicon.ico` should list three frames) and
confirm the source photograph is still byte-identical.
