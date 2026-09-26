import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { O as r, t as i } from "./src-3ugP8gNN.js";
function a({ block: e, playLabel: t = `Play video` }) {
  let [n, i] = (0, o.useState)(!1);
  if (n)
    return (0, s.jsx)(`div`, {
      "data-slot": `video-embed`,
      className: `relative aspect-video w-full overflow-hidden rounded-lg bg-black`,
      children: (0, s.jsx)(`iframe`, {
        src: c[e.provider](e.videoId),
        title: e.title,
        allow: `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,
        allowFullScreen: !0,
        className: `absolute inset-0 size-full`,
      }),
    });
  let a = l[e.provider](e.videoId);
  return (0, s.jsxs)(`button`, {
    type: `button`,
    "data-slot": `video-embed`,
    onClick: () => i(!0),
    className: `group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-secondary bg-cover bg-center`,
    style: a ? { backgroundImage: `url(${a})` } : void 0,
    children: [
      (0, s.jsx)(`span`, {
        className: `flex size-16 items-center justify-center rounded-full bg-background/90 transition-transform group-hover:scale-110`,
        children: (0, s.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          className: `ml-1 size-6`,
          "aria-hidden": `true`,
          children: (0, s.jsx)(`path`, { d: `M8 5v14l11-7z` }),
        }),
      }),
      (0, s.jsxs)(r, { children: [t, `: `, e.title] }),
    ],
  });
}
var o, s, c, l;
function u() {
  return (u = e(() => {
    (i(),
      (o = t()),
      (s = n()),
      (c = {
        youtube: (e) =>
          `https://www.youtube-nocookie.com/embed/${e}?autoplay=1`,
        vimeo: (e) => `https://player.vimeo.com/video/${e}?autoplay=1`,
      }),
      (l = {
        youtube: (e) => `https://i.ytimg.com/vi/${e}/hqdefault.jpg`,
        vimeo: () => ``,
      }),
      (a.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `VideoEmbed`,
        props: {
          block: {
            required: !0,
            tsType: { name: `VideoEmbedBlock` },
            description: ``,
          },
          playLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Play video"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { u as n, a as t };
