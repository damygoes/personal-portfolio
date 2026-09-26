import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./Gallery-ConyjsCR.js";
var r, i, a, o, s, c;
function l() {
  return (l = e(() => {
    (t(),
      (r = {
        _type: `gallery`,
        _key: `gallery-1`,
        layout: `grid`,
        showExif: !1,
        caption: `Frames from an evening walk.`,
        images: Array.from({ length: 6 }, (e, t) => ({
          src: `https://picsum.photos/seed/gallery-${t}/800/${600 + (t % 3) * 100}`,
          width: 800,
          height: 600 + (t % 3) * 100,
          alt: `Gallery photo ${t + 1}`,
        })),
      }),
      (i = {
        title: `RichText/Gallery`,
        component: n,
        tags: [`autodocs`],
        args: { block: r },
      }),
      (a = {}),
      (o = { args: { block: { ...r, layout: `masonry` } } }),
      (s = { args: { block: { ...r, layout: `carousel` } } }),
      (c = [`Grid`, `Masonry`, `Carousel`]));
  }))();
}
l();
export {
  s as Carousel,
  a as Grid,
  o as Masonry,
  c as __namedExportsOrder,
  i as default,
};
