import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./LocaleLink-DhmEOy5A.js";
function i({ alternates: e, current: t, localeLabels: n = o }) {
  return (0, a.jsx)(`ul`, {
    "data-slot": `locale-switcher`,
    className: `flex items-center gap-2`,
    children: e.map((e, i) =>
      (0, a.jsxs)(
        `li`,
        {
          className: `flex items-center gap-2`,
          children: [
            i > 0 &&
              (0, a.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `text-muted-foreground`,
                children: `/`,
              }),
            (0, a.jsx)(r, {
              locale: e.locale,
              href: e.href,
              label: n[e.locale],
              active: e.locale === t,
            }),
          ],
        },
        e.locale,
      ),
    ),
  });
}
var a, o;
function s() {
  return (s = e(() => {
    (n(),
      (a = t()),
      (o = { en: `EN`, de: `DE` }),
      (i.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `LocaleSwitcher`,
        props: {
          alternates: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `Alternate` }],
              raw: `Alternate[]`,
            },
            description: ``,
          },
          current: {
            required: !0,
            tsType: { name: `Locale` },
            description: ``,
          },
          localeLabels: {
            required: !1,
            tsType: {
              name: `Record`,
              elements: [{ name: `Locale` }, { name: `string` }],
              raw: `Record<Locale, string>`,
            },
            description: ``,
            defaultValue: { value: `{ en: "EN", de: "DE" }`, computed: !1 },
          },
        },
      }));
  }))();
}
export { s as n, i as t };
