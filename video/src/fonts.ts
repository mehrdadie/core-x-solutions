/**
 * Fonts are bundled from node_modules rather than fetched from Google, so a
 * render needs no network — which is what makes it safe to run on a CI runner
 * or behind a proxy. Weights are pinned to only what the scenes use.
 */
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/700.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/jetbrains-mono/400.css";

export const display = "Archivo";
export const sans = "Instrument Sans";
export const mono = "JetBrains Mono";
