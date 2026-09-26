import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./Figure-Bq7y1_kW.js";
var r, i, a, o;
function s() {
  return (s = e(() => {
    (t(),
      (r = {
        title: `RichText/Figure`,
        component: n,
        tags: [`autodocs`],
        args: {
          block: {
            _type: `figure`,
            _key: `figure-1`,
            size: `wide`,
            showExif: !1,
            image: {
              src: `https://picsum.photos/seed/figure/1200/800`,
              width: 1200,
              height: 800,
              alt: `A quiet street in Berlin at dusk`,
              caption: `A quiet street in Berlin, September 2025.`,
            },
          },
        },
      }),
      (i = {}),
      (a = {
        args: {
          block: {
            _type: `figure`,
            _key: `figure-2`,
            size: `fullBleed`,
            showExif: !0,
            image: {
              src: `https://picsum.photos/seed/figure-exif/1200/800`,
              width: 1200,
              height: 800,
              alt: `A quiet street in Berlin at dusk`,
              exif: {
                camera: `Fujifilm X100V`,
                aperture: `f/2.8`,
                shutterSpeed: `1/125s`,
                iso: 400,
              },
            },
          },
        },
      }),
      (o = [`Wide`, `WithExif`]));
  }))();
}
s();
export { i as Wide, a as WithExif, o as __namedExportsOrder, r as default };
