import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { n as r, t as i } from "./cn-DT5hf25b.js";
import { n as a, t as o } from "./ProseBlock-Dm3lbwo5.js";
import { n as s, t as c } from "./Callout--KCseKeO.js";
import { n as l, t as u } from "./CodeBlock-B_AKcPZq.js";
import { n as d, t as f } from "./Figure-Bq7y1_kW.js";
import { n as p, t as ee } from "./Gallery-ConyjsCR.js";
import { n as te, t as ne } from "./ProseHeading-BvAXbDOc.js";
import { n as re, t as ie } from "./VideoEmbed-Bu2OytS-.js";
function m(e, t, n) {
  function r(n, r) {
    if (
      (n._zod ||
        Object.defineProperty(n, "_zod", {
          value: { def: r, constr: o, traits: new Set() },
          enumerable: !1,
        }),
      n._zod.traits.has(e))
    )
      return;
    (n._zod.traits.add(e), t(n, r));
    let i = o.prototype,
      a = Object.keys(i);
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      t in n || (n[t] = i[t].bind(n));
    }
  }
  let i = n?.Parent ?? Object;
  class a extends i {}
  Object.defineProperty(a, "name", { value: e });
  function o(e) {
    var t;
    let i = n?.Parent ? new a() : this;
    (r(i, e), (t = i._zod).deferred ?? (t.deferred = []));
    for (let e of i._zod.deferred) e();
    return i;
  }
  return (
    Object.defineProperty(o, "init", { value: r }),
    Object.defineProperty(o, Symbol.hasInstance, {
      value: (t) =>
        n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e),
    }),
    Object.defineProperty(o, "name", { value: e }),
    o
  );
}
function h(e) {
  return (e && Object.assign(se, e), se);
}
var ae, g, oe, se;
function _() {
  return (_ = e(() => {
    ((g = class extends Error {
      constructor() {
        super(
          `Encountered Promise during synchronous parse. Use .parseAsync() instead.`,
        );
      }
    }),
      (oe = class extends Error {
        constructor(e) {
          (super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = `ZodEncodeError`));
        }
      }),
      (ae = globalThis).__zod_globalConfig ?? (ae.__zod_globalConfig = {}),
      (se = globalThis.__zod_globalConfig));
  }))();
}
function ce(e) {
  let t = Object.values(e).filter((e) => typeof e == `number`);
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
function le(e, t) {
  return typeof t == `bigint` ? t.toString() : t;
}
function ue(e) {
  return {
    get value() {
      {
        let t = e();
        return (Object.defineProperty(this, "value", { value: t }), t);
      }
    },
  };
}
function de(e) {
  return e == null;
}
function fe(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function pe(e, t) {
  let n = e / t,
    r = Math.round(n),
    i = 2 ** -52 * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < i ? 0 : n - r;
}
function v(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Me) return (r === void 0 && ((r = Me), (r = n())), r);
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function y(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function b(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function me(e) {
  return JSON.stringify(e);
}
function he(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
function ge(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function _e(e) {
  if (ge(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return (
    ge(n) !== !1 &&
    Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) !== !1
  );
}
function ve(e) {
  return _e(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
function x(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function S(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function C(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == `string` ? { ...t, error: () => t.error } : t
  );
}
function ye(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`,
  );
}
function be(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.pick() cannot be used on object schemas containing refinements`,
    );
  return S(
    e,
    b(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (y(this, `shape`, e), e);
      },
      checks: [],
    }),
  );
}
function xe(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.omit() cannot be used on object schemas containing refinements`,
    );
  return S(
    e,
    b(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (y(this, `shape`, r), r);
      },
      checks: [],
    }),
  );
}
function Se(e, t) {
  if (!_e(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return S(
    e,
    b(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (y(this, `shape`, n), n);
      },
    }),
  );
}
function Ce(e, t) {
  if (!_e(t))
    throw Error(`Invalid input to safeExtend: expected a plain object`);
  return S(
    e,
    b(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (y(this, `shape`, n), n);
      },
    }),
  );
}
function we(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  return S(
    e,
    b(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (y(this, `shape`, n), n);
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: t._zod.def.checks ?? [],
    }),
  );
}
function Te(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0)
    throw Error(
      `.partial() cannot be used on object schemas containing refinements`,
    );
  return S(
    t,
    b(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] &&
              (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else
          for (let t in r)
            i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (y(this, `shape`, i), i);
      },
      checks: [],
    }),
  );
}
function Ee(e, t, n) {
  return S(
    t,
    b(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else
          for (let t in r)
            i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (y(this, `shape`, i), i);
      },
    }),
  );
}
function w(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function De(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1) return !0;
  return !1;
}
function Oe(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function ke(e) {
  return typeof e == `string` ? e : e?.message;
}
function T(e, t, n) {
  let r = e.message
      ? e.message
      : (ke(e.inst?._zod.def?.error?.(e)) ??
        ke(t?.error?.(e)) ??
        ke(n.customError?.(e)) ??
        ke(n.localeError?.(e)) ??
        `Invalid input`),
    { inst: i, continue: a, input: o, ...s } = e;
  return ((s.path ??= []), (s.message = r), t?.reportInput && (s.input = o), s);
}
function Ae(e) {
  return Array.isArray(e)
    ? `array`
    : typeof e == `string`
      ? `string`
      : `unknown`;
}
function je(...e) {
  let [t, n, r] = e;
  return typeof t == `string`
    ? { message: t, code: `custom`, input: n, inst: r }
    : { ...t };
}
var Me, Ne, Pe, Fe, Ie;
function E() {
  return (E = e(() => {
    (_(),
      (Me = Symbol(`evaluating`)),
      (Ne =
        `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {}),
      (Pe = ue(() => {
        if (
          se.jitless ||
          (typeof navigator < `u` &&
            navigator?.userAgent?.includes(`Cloudflare`))
        )
          return !1;
        try {
          return (Function(``), !0);
        } catch {
          return !1;
        }
      })),
      (Fe = new Set([`string`, `number`, `symbol`])),
      (Ie = {
        safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      }));
  }))();
}
function Le(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0
      ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
      : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function Re(e, t = (e) => e.message) {
  let n = { _errors: [] },
    r = (e, i = []) => {
      for (let a of e.issues)
        if (a.code === `invalid_union` && a.errors.length)
          a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
        else if (a.code === `invalid_key`)
          r({ issues: a.issues }, [...i, ...a.path]);
        else if (a.code === `invalid_element`)
          r({ issues: a.issues }, [...i, ...a.path]);
        else {
          let e = [...i, ...a.path];
          if (e.length === 0) n._errors.push(t(a));
          else {
            let r = n,
              i = 0;
            for (; i < e.length;) {
              let n = e[i];
              (i === e.length - 1
                ? ((r[n] = r[n] || { _errors: [] }), r[n]._errors.push(t(a)))
                : (r[n] = r[n] || { _errors: [] }),
                (r = r[n]),
                i++);
            }
          }
        }
    };
  return (r(e), n);
}
var ze, Be, Ve;
function He() {
  return (He = e(() => {
    (_(),
      E(),
      (ze = (e, t) => {
        ((e.name = `$ZodError`),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, le, 2)),
          Object.defineProperty(e, "toString", {
            value: () => e.message,
            enumerable: !1,
          }));
      }),
      (Be = m(`$ZodError`, ze)),
      (Ve = m(`$ZodError`, ze, { Parent: Error })));
  }))();
}
var Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt;
function rt() {
  return (rt = e(() => {
    (_(),
      He(),
      E(),
      (Ue = (e) => (t, n, r, i) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new g();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => T(e, a, h())));
          throw (Ne(t, i?.callee), t);
        }
        return o.value;
      }),
      (We = (e) => async (t, n, r, i) => {
        let a = r ? { ...r, async: !0 } : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => T(e, a, h())));
          throw (Ne(t, i?.callee), t);
        }
        return o.value;
      }),
      (Ge = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new g();
        return a.issues.length
          ? {
              success: !1,
              error: new (e ?? Be)(a.issues.map((e) => T(e, i, h()))),
            }
          : { success: !0, data: a.value };
      }),
      (Ke = Ge(Ve)),
      (qe = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => T(e, i, h()))) }
            : { success: !0, data: a.value }
        );
      }),
      (Je = qe(Ve)),
      (Ye = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ue(e)(t, n, i);
      }),
      (Xe = (e) => (t, n, r) => Ue(e)(t, n, r)),
      (Ze = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return We(e)(t, n, i);
      }),
      (Qe = (e) => async (t, n, r) => We(e)(t, n, r)),
      ($e = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ge(e)(t, n, i);
      }),
      (et = (e) => (t, n, r) => Ge(e)(t, n, r)),
      (tt = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return qe(e)(t, n, i);
      }),
      (nt = (e) => async (t, n, r) => qe(e)(t, n, r)));
  }))();
}
function it() {
  return new RegExp(vt, `u`);
}
function at(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ot(e) {
  return RegExp(`^${at(e)}$`);
}
function st(e) {
  let t = at({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``),
    e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${Dt}T(?:${r})$`);
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt;
function Ft() {
  return (Ft = e(() => {
    ((ct = /^[cC][0-9a-z]{6,}$/),
      (lt = /^[0-9a-z]+$/),
      (ut = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      (dt = /^[0-9a-vA-V]{20}$/),
      (ft = /^[A-Za-z0-9]{27}$/),
      (pt = /^[a-zA-Z0-9_-]{21}$/),
      (mt =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      (ht =
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      (gt = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (_t =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (vt = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`),
      (yt =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (bt =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (xt =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (St =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (Ct =
        /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (wt = /^[A-Za-z0-9_-]*$/),
      (Tt = /^https?$/),
      (Et = /^\+[1-9]\d{6,14}$/),
      (Dt = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`),
      (Ot = RegExp(`^${Dt}$`)),
      (kt = (e) => {
        let t = e
          ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}`
          : `[\\s\\S]*`;
        return RegExp(`^${t}$`);
      }),
      (At = /^-?\d+$/),
      (jt = /^-?\d+(?:\.\d+)?$/),
      (Mt = /^(?:true|false)$/i),
      (Nt = /^[^A-Z]*$/),
      (Pt = /^[^a-z]*$/));
  }))();
}
var D, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    (_(),
      Ft(),
      E(),
      (D = m(`$ZodCheck`, (e, t) => {
        var n;
        ((e._zod ??= {}),
          (e._zod.def = t),
          (n = e._zod).onattach ?? (n.onattach = []));
      })),
      (It = { number: `number`, bigint: `bigint`, object: `date` }),
      (Lt = m(`$ZodCheckLessThan`, (e, t) => {
        D.init(e, t);
        let n = It[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
          t.value < r &&
            (t.inclusive
              ? (n.maximum = t.value)
              : (n.exclusiveMaximum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value <= t.value : r.value < t.value) ||
              r.issues.push({
                origin: n,
                code: `too_big`,
                maximum:
                  typeof t.value == `object` ? t.value.getTime() : t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Rt = m(`$ZodCheckGreaterThan`, (e, t) => {
        D.init(e, t);
        let n = It[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
          t.value > r &&
            (t.inclusive
              ? (n.minimum = t.value)
              : (n.exclusiveMinimum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value >= t.value : r.value > t.value) ||
              r.issues.push({
                origin: n,
                code: `too_small`,
                minimum:
                  typeof t.value == `object` ? t.value.getTime() : t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (zt = m(`$ZodCheckMultipleOf`, (e, t) => {
        (D.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error(`Cannot mix number and bigint in multiple_of check.`);
            (typeof n.value == `bigint`
              ? n.value % t.value === BigInt(0)
              : pe(n.value, t.value) === 0) ||
              n.issues.push({
                origin: typeof n.value,
                code: `not_multiple_of`,
                divisor: t.value,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Bt = m(`$ZodCheckNumberFormat`, (e, t) => {
        (D.init(e, t), (t.format = t.format || `float64`));
        let n = t.format?.includes(`int`),
          r = n ? `int` : `number`,
          [i, a] = Ie[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format),
            (r.minimum = i),
            (r.maximum = a),
            n && (r.pattern = At));
        }),
          (e._zod.check = (o) => {
            let s = o.value;
            if (n) {
              if (!Number.isInteger(s)) {
                o.issues.push({
                  expected: r,
                  format: t.format,
                  code: `invalid_type`,
                  continue: !1,
                  input: s,
                  inst: e,
                });
                return;
              }
              if (!Number.isSafeInteger(s)) {
                s > 0
                  ? o.issues.push({
                      input: s,
                      code: `too_big`,
                      maximum: 2 ** 53 - 1,
                      note: `Integers must be within the safe integer range.`,
                      inst: e,
                      origin: r,
                      inclusive: !0,
                      continue: !t.abort,
                    })
                  : o.issues.push({
                      input: s,
                      code: `too_small`,
                      minimum: -(2 ** 53 - 1),
                      note: `Integers must be within the safe integer range.`,
                      inst: e,
                      origin: r,
                      inclusive: !0,
                      continue: !t.abort,
                    });
                return;
              }
            }
            (s < i &&
              o.issues.push({
                origin: `number`,
                input: s,
                code: `too_small`,
                minimum: i,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              s > a &&
                o.issues.push({
                  origin: `number`,
                  input: s,
                  code: `too_big`,
                  maximum: a,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }));
          }));
      })),
      (Vt = m(`$ZodCheckMaxLength`, (e, t) => {
        var n;
        (D.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !de(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < n && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length <= t.maximum) return;
            let i = Ae(r);
            n.issues.push({
              origin: i,
              code: `too_big`,
              maximum: t.maximum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (Ht = m(`$ZodCheckMinLength`, (e, t) => {
        var n;
        (D.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !de(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > n && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length >= t.minimum) return;
            let i = Ae(r);
            n.issues.push({
              origin: i,
              code: `too_small`,
              minimum: t.minimum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (Ut = m(`$ZodCheckLengthEquals`, (e, t) => {
        var n;
        (D.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !de(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.length),
              (n.maximum = t.length),
              (n.length = t.length));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.length;
            if (i === t.length) return;
            let a = Ae(r),
              o = i > t.length;
            n.issues.push({
              origin: a,
              ...(o
                ? { code: `too_big`, maximum: t.length }
                : { code: `too_small`, minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (Wt = m(`$ZodCheckStringFormat`, (e, t) => {
        var n, r;
        (D.init(e, t),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.format = t.format),
              t.pattern &&
                ((n.patterns ??= new Set()), n.patterns.add(t.pattern)));
          }),
          t.pattern
            ? ((n = e._zod).check ??
              (n.check = (n) => {
                ((t.pattern.lastIndex = 0),
                  !t.pattern.test(n.value) &&
                    n.issues.push({
                      origin: `string`,
                      code: `invalid_format`,
                      format: t.format,
                      input: n.value,
                      ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                      inst: e,
                      continue: !t.abort,
                    }));
              }))
            : ((r = e._zod).check ?? (r.check = () => {})));
      })),
      (Gt = m(`$ZodCheckRegex`, (e, t) => {
        (Wt.init(e, t),
          (e._zod.check = (n) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(n.value) &&
                n.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: `regex`,
                  input: n.value,
                  pattern: t.pattern.toString(),
                  inst: e,
                  continue: !t.abort,
                }));
          }));
      })),
      (Kt = m(`$ZodCheckLowerCase`, (e, t) => {
        ((t.pattern ??= Nt), Wt.init(e, t));
      })),
      (qt = m(`$ZodCheckUpperCase`, (e, t) => {
        ((t.pattern ??= Pt), Wt.init(e, t));
      })),
      (Jt = m(`$ZodCheckIncludes`, (e, t) => {
        D.init(e, t);
        let n = x(t.includes),
          r = new RegExp(
            typeof t.position == `number` ? `^.{${t.position}}${n}` : n,
          );
        ((t.pattern = r),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(r));
          }),
          (e._zod.check = (n) => {
            n.value.includes(t.includes, t.position) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `includes`,
                includes: t.includes,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Yt = m(`$ZodCheckStartsWith`, (e, t) => {
        D.init(e, t);
        let n = RegExp(`^${x(t.prefix)}.*`);
        ((t.pattern ??= n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.startsWith(t.prefix) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `starts_with`,
                prefix: t.prefix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Xt = m(`$ZodCheckEndsWith`, (e, t) => {
        D.init(e, t);
        let n = RegExp(`.*${x(t.suffix)}$`);
        ((t.pattern ??= n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.endsWith(t.suffix) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `ends_with`,
                suffix: t.suffix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Zt = m(`$ZodCheckOverwrite`, (e, t) => {
        (D.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      })));
  }))();
}
var $t;
function en() {
  return (en = e(() => {
    $t = class {
      constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
      }
      indented(e) {
        ((this.indent += 1), e(this), --this.indent);
      }
      write(e) {
        if (typeof e == `function`) {
          (e(this, { execution: `sync` }), e(this, { execution: `async` }));
          return;
        }
        let t = e
            .split(
              `
`,
            )
            .filter((e) => e),
          n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
          r = t
            .map((e) => e.slice(n))
            .map((e) => ` `.repeat(this.indent * 2) + e);
        for (let e of r) this.content.push(e);
      }
      compile() {
        let e = Function,
          t = this?.args,
          n = [...(this?.content ?? [``]).map((e) => `  ${e}`)];
        return new e(
          ...t,
          n.join(`
`),
        );
      }
    };
  }))();
}
var tn;
function nn() {
  return (nn = e(() => {
    tn = { major: 4, minor: 4, patch: 3 };
  }))();
}
function rn(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
function an(e) {
  if (!wt.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return rn(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
function on(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !(
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && (!(`alg` in i) || i.alg !== t))
    );
  } catch {
    return !1;
  }
}
function sn(e, t, n) {
  (e.issues.length && t.issues.push(...Oe(n, e.issues)),
    (t.value[n] = e.value));
}
function cn(e, t, n, r, i, a) {
  let o = n in r;
  if (e.issues.length) {
    if (i && a && !o) return;
    t.issues.push(...Oe(n, e.issues));
  }
  if (!o && !i) {
    e.issues.length ||
      t.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: void 0,
        path: [n],
      });
    return;
  }
  e.value === void 0 ? o && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function ln(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = ye(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n),
  };
}
function un(e, t, n, r, i, a) {
  let o = [],
    s = i.keySet,
    c = i.catchall._zod,
    l = c.def.type,
    u = c.optin === `optional`,
    d = c.optout === `optional`;
  for (let i in t) {
    if (i === `__proto__` || s.has(i)) continue;
    if (l === `never`) {
      o.push(i);
      continue;
    }
    let a = c.run({ value: t[i], issues: [] }, r);
    a instanceof Promise
      ? e.push(a.then((e) => cn(e, n, i, t, u, d)))
      : cn(a, n, i, t, u, d);
  }
  return (
    o.length &&
      n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
function dn(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !w(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => T(e, r, h()))),
      }),
      t);
}
function fn(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (_e(e) && _e(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = fn(e[n], t[n]);
      if (!r.valid)
        return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = fn(i, a);
      if (!o.valid)
        return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function pn(e, t, n) {
  let r = new Map(),
    i;
  for (let n of t.issues)
    if (n.code === `unrecognized_keys`) {
      i ??= n;
      for (let e of n.keys) (r.has(e) || r.set(e, {}), (r.get(e).l = !0));
    } else e.issues.push(n);
  for (let t of n.issues)
    if (t.code === `unrecognized_keys`)
      for (let e of t.keys) (r.has(e) || r.set(e, {}), (r.get(e).r = !0));
    else e.issues.push(t);
  let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if ((a.length && i && e.issues.push({ ...i, keys: a }), w(e))) return e;
  let o = fn(t.value, n.value);
  if (!o.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`,
    );
  return ((e.value = o.data), e);
}
function mn(e, t) {
  return t === void 0 && (e.issues.length || e.fallback)
    ? { issues: [], value: void 0 }
    : e;
}
function hn(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
function gn(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: e.value,
        inst: t,
      }),
    e
  );
}
function _n(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
function vn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
function yn(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(je(e)));
  }
}
var O,
  bn,
  k,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr;
function pr() {
  return (pr = e(() => {
    (Qt(),
      _(),
      en(),
      rt(),
      Ft(),
      E(),
      nn(),
      (O = m(`$ZodType`, (e, t) => {
        var n;
        ((e ??= {}),
          (e._zod.def = t),
          (e._zod.bag = e._zod.bag || {}),
          (e._zod.version = tn));
        let r = [...(e._zod.def.checks ?? [])];
        e._zod.traits.has(`$ZodCheck`) && r.unshift(e);
        for (let t of r) for (let n of t._zod.onattach) n(e);
        if (r.length === 0)
          ((n = e._zod).deferred ?? (n.deferred = []),
            e._zod.deferred?.push(() => {
              e._zod.run = e._zod.parse;
            }));
        else {
          let t = (e, t, n) => {
              let r = w(e),
                i;
              for (let a of t) {
                if (a._zod.def.when) {
                  if (De(e) || !a._zod.def.when(e)) continue;
                } else if (r) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && n?.async === !1) throw new g();
                if (i || o instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (r ||= w(e, t)));
                  });
                else {
                  if (e.issues.length === t) continue;
                  r ||= w(e, t);
                }
              }
              return i ? i.then(() => e) : e;
            },
            n = (n, i, a) => {
              if (w(n)) return ((n.aborted = !0), n);
              let o = t(i, r, a);
              if (o instanceof Promise) {
                if (a.async === !1) throw new g();
                return o.then((t) => e._zod.parse(t, a));
              }
              return e._zod.parse(o, a);
            };
          e._zod.run = (i, a) => {
            if (a.skipChecks) return e._zod.parse(i, a);
            if (a.direction === `backward`) {
              let t = e._zod.parse(
                { value: i.value, issues: [] },
                { ...a, skipChecks: !0 },
              );
              return t instanceof Promise
                ? t.then((e) => n(e, i, a))
                : n(t, i, a);
            }
            let o = e._zod.parse(i, a);
            if (o instanceof Promise) {
              if (a.async === !1) throw new g();
              return o.then((e) => t(e, r, a));
            }
            return t(o, r, a);
          };
        }
        v(e, `~standard`, () => ({
          validate: (t) => {
            try {
              let n = Ke(e, t);
              return n.success
                ? { value: n.data }
                : { issues: n.error?.issues };
            } catch {
              return Je(e, t).then((e) =>
                e.success ? { value: e.data } : { issues: e.error?.issues },
              );
            }
          },
          vendor: `zod`,
          version: 1,
        }));
      })),
      (bn = m(`$ZodString`, (e, t) => {
        (O.init(e, t),
          (e._zod.pattern =
            [...(e?._zod.bag?.patterns ?? [])].pop() ?? kt(e._zod.bag)),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = String(n.value);
              } catch {}
            return (
              typeof n.value == `string` ||
                n.issues.push({
                  expected: `string`,
                  code: `invalid_type`,
                  input: n.value,
                  inst: e,
                }),
              n
            );
          }));
      })),
      (k = m(`$ZodStringFormat`, (e, t) => {
        (Wt.init(e, t), bn.init(e, t));
      })),
      (xn = m(`$ZodGUID`, (e, t) => {
        ((t.pattern ??= ht), k.init(e, t));
      })),
      (Sn = m(`$ZodUUID`, (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
            t.version
          ];
          if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ??= gt(e);
        } else t.pattern ??= gt();
        k.init(e, t);
      })),
      (Cn = m(`$ZodEmail`, (e, t) => {
        ((t.pattern ??= _t), k.init(e, t));
      })),
      (wn = m(`$ZodURL`, (e, t) => {
        (k.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim();
              if (
                !t.normalize &&
                t.protocol?.source === Tt.source &&
                !/^https?:\/\//i.test(r)
              ) {
                n.issues.push({
                  code: `invalid_format`,
                  format: `url`,
                  note: `Invalid URL format`,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
                return;
              }
              let i = new URL(r);
              (t.hostname &&
                ((t.hostname.lastIndex = 0),
                t.hostname.test(i.hostname) ||
                  n.issues.push({
                    code: `invalid_format`,
                    format: `url`,
                    note: `Invalid hostname`,
                    pattern: t.hostname.source,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })),
                t.protocol &&
                  ((t.protocol.lastIndex = 0),
                  t.protocol.test(
                    i.protocol.endsWith(`:`)
                      ? i.protocol.slice(0, -1)
                      : i.protocol,
                  ) ||
                    n.issues.push({
                      code: `invalid_format`,
                      format: `url`,
                      note: `Invalid protocol`,
                      pattern: t.protocol.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                (n.value = t.normalize ? i.href : r));
              return;
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (Tn = m(`$ZodEmoji`, (e, t) => {
        ((t.pattern ??= it()), k.init(e, t));
      })),
      (En = m(`$ZodNanoID`, (e, t) => {
        ((t.pattern ??= pt), k.init(e, t));
      })),
      (Dn = m(`$ZodCUID`, (e, t) => {
        ((t.pattern ??= ct), k.init(e, t));
      })),
      (On = m(`$ZodCUID2`, (e, t) => {
        ((t.pattern ??= lt), k.init(e, t));
      })),
      (kn = m(`$ZodULID`, (e, t) => {
        ((t.pattern ??= ut), k.init(e, t));
      })),
      (An = m(`$ZodXID`, (e, t) => {
        ((t.pattern ??= dt), k.init(e, t));
      })),
      (jn = m(`$ZodKSUID`, (e, t) => {
        ((t.pattern ??= ft), k.init(e, t));
      })),
      (Mn = m(`$ZodISODateTime`, (e, t) => {
        ((t.pattern ??= st(t)), k.init(e, t));
      })),
      (Nn = m(`$ZodISODate`, (e, t) => {
        ((t.pattern ??= Ot), k.init(e, t));
      })),
      (Pn = m(`$ZodISOTime`, (e, t) => {
        ((t.pattern ??= ot(t)), k.init(e, t));
      })),
      (Fn = m(`$ZodISODuration`, (e, t) => {
        ((t.pattern ??= mt), k.init(e, t));
      })),
      (In = m(`$ZodIPv4`, (e, t) => {
        ((t.pattern ??= yt), k.init(e, t), (e._zod.bag.format = `ipv4`));
      })),
      (Ln = m(`$ZodIPv6`, (e, t) => {
        ((t.pattern ??= bt),
          k.init(e, t),
          (e._zod.bag.format = `ipv6`),
          (e._zod.check = (n) => {
            try {
              new URL(`http://[${n.value}]`);
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `ipv6`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (Rn = m(`$ZodCIDRv4`, (e, t) => {
        ((t.pattern ??= xt), k.init(e, t));
      })),
      (zn = m(`$ZodCIDRv6`, (e, t) => {
        ((t.pattern ??= St),
          k.init(e, t),
          (e._zod.check = (n) => {
            let r = n.value.split(`/`);
            try {
              if (r.length !== 2) throw Error();
              let [e, t] = r;
              if (!t) throw Error();
              let n = Number(t);
              if (`${n}` !== t || n < 0 || n > 128) throw Error();
              new URL(`http://[${e}]`);
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `cidrv6`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (Bn = m(`$ZodBase64`, (e, t) => {
        ((t.pattern ??= Ct),
          k.init(e, t),
          (e._zod.bag.contentEncoding = `base64`),
          (e._zod.check = (n) => {
            rn(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Vn = m(`$ZodBase64URL`, (e, t) => {
        ((t.pattern ??= wt),
          k.init(e, t),
          (e._zod.bag.contentEncoding = `base64url`),
          (e._zod.check = (n) => {
            an(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Hn = m(`$ZodE164`, (e, t) => {
        ((t.pattern ??= Et), k.init(e, t));
      })),
      (Un = m(`$ZodJWT`, (e, t) => {
        (k.init(e, t),
          (e._zod.check = (n) => {
            on(n.value, t.alg) ||
              n.issues.push({
                code: `invalid_format`,
                format: `jwt`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Wn = m(`$ZodNumber`, (e, t) => {
        (O.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? jt),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = Number(n.value);
              } catch {}
            let i = n.value;
            if (typeof i == `number` && !Number.isNaN(i) && Number.isFinite(i))
              return n;
            let a =
              typeof i == `number`
                ? Number.isNaN(i)
                  ? `NaN`
                  : Number.isFinite(i)
                    ? void 0
                    : `Infinity`
                : void 0;
            return (
              n.issues.push({
                expected: `number`,
                code: `invalid_type`,
                input: i,
                inst: e,
                ...(a ? { received: a } : {}),
              }),
              n
            );
          }));
      })),
      (Gn = m(`$ZodNumberFormat`, (e, t) => {
        (Bt.init(e, t), Wn.init(e, t));
      })),
      (Kn = m(`$ZodBoolean`, (e, t) => {
        (O.init(e, t),
          (e._zod.pattern = Mt),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = !!n.value;
              } catch {}
            let i = n.value;
            return (
              typeof i == `boolean` ||
                n.issues.push({
                  expected: `boolean`,
                  code: `invalid_type`,
                  input: i,
                  inst: e,
                }),
              n
            );
          }));
      })),
      (qn = m(`$ZodUnknown`, (e, t) => {
        (O.init(e, t), (e._zod.parse = (e) => e));
      })),
      (Jn = m(`$ZodNever`, (e, t) => {
        (O.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({
              expected: `never`,
              code: `invalid_type`,
              input: t.value,
              inst: e,
            }),
            t
          )));
      })),
      (Yn = m(`$ZodArray`, (e, t) => {
        (O.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (
                n.issues.push({
                  expected: `array`,
                  code: `invalid_type`,
                  input: i,
                  inst: e,
                }),
                n
              );
            n.value = Array(i.length);
            let a = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                s = t.element._zod.run({ value: o, issues: [] }, r);
              s instanceof Promise
                ? a.push(s.then((t) => sn(t, n, e)))
                : sn(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Xn = m(`$ZodObject`, (e, t) => {
        if ((O.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let n = { ...e };
              return (Object.defineProperty(t, "shape", { value: n }), n);
            },
          });
        }
        let n = ue(() => ln(t));
        v(e._zod, `propValues`, () => {
          let e = t.shape,
            n = {};
          for (let t in e) {
            let r = e[t]._zod;
            if (r.values) {
              n[t] ?? (n[t] = new Set());
              for (let e of r.values) n[t].add(e);
            }
          }
          return n;
        });
        let r = ge,
          i = t.catchall,
          a;
        e._zod.parse = (t, o) => {
          a ??= n.value;
          let s = t.value;
          if (!r(s))
            return (
              t.issues.push({
                expected: `object`,
                code: `invalid_type`,
                input: s,
                inst: e,
              }),
              t
            );
          t.value = {};
          let c = [],
            l = a.shape;
          for (let e of a.keys) {
            let n = l[e],
              r = n._zod.optin === `optional`,
              i = n._zod.optout === `optional`,
              a = n._zod.run({ value: s[e], issues: [] }, o);
            a instanceof Promise
              ? c.push(a.then((n) => cn(n, t, e, s, r, i)))
              : cn(a, t, e, s, r, i);
          }
          return i
            ? un(c, s, t, o, n.value, e)
            : c.length
              ? Promise.all(c).then(() => t)
              : t;
        };
      })),
      (Zn = m(`$ZodObjectJIT`, (e, t) => {
        Xn.init(e, t);
        let n = e._zod.parse,
          r = ue(() => ln(t)),
          i = (e) => {
            let t = new $t([`shape`, `payload`, `ctx`]),
              n = r.value,
              i = (e) => {
                let t = me(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
              };
            t.write(`const input = payload.value;`);
            let a = Object.create(null),
              o = 0;
            for (let e of n.keys) a[e] = `key_${o++}`;
            t.write(`const newResult = {};`);
            for (let r of n.keys) {
              let n = a[r],
                o = me(r),
                s = e[r],
                c = s?._zod?.optin === `optional`,
                l = s?._zod?.optout === `optional`;
              (t.write(`const ${n} = ${i(r)};`),
                c && l
                  ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                  : c
                    ? t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                    : t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `));
            }
            (t.write(`payload.value = newResult;`), t.write(`return payload;`));
            let s = t.compile();
            return (t, n) => s(e, t, n);
          },
          a,
          o = ge,
          s = !se.jitless,
          c = s && Pe.value,
          l = t.catchall,
          u;
        e._zod.parse = (d, f) => {
          u ??= r.value;
          let p = d.value;
          return o(p)
            ? s && c && f?.async === !1 && f.jitless !== !0
              ? ((a ||= i(t.shape)),
                (d = a(d, f)),
                l ? un([], p, d, f, u, e) : d)
              : n(d, f)
            : (d.issues.push({
                expected: `object`,
                code: `invalid_type`,
                input: p,
                inst: e,
              }),
              d);
        };
      })),
      (Qn = m(`$ZodUnion`, (e, t) => {
        (O.init(e, t),
          v(e._zod, `optin`, () =>
            t.options.some((e) => e._zod.optin === `optional`)
              ? `optional`
              : void 0,
          ),
          v(e._zod, `optout`, () =>
            t.options.some((e) => e._zod.optout === `optional`)
              ? `optional`
              : void 0,
          ),
          v(e._zod, `values`, () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(
                t.options.flatMap((e) => Array.from(e._zod.values)),
              );
          }),
          v(e._zod, `pattern`, () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return RegExp(`^(${e.map((e) => fe(e.source)).join(`|`)})$`);
            }
          }));
        let n = t.options.length === 1 ? t.options[0]._zod.run : null;
        e._zod.parse = (r, i) => {
          if (n) return n(r, i);
          let a = !1,
            o = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: r.value, issues: [] }, i);
            if (t instanceof Promise) (o.push(t), (a = !0));
            else {
              if (t.issues.length === 0) return t;
              o.push(t);
            }
          }
          return a
            ? Promise.all(o).then((t) => dn(t, r, e, i))
            : dn(o, r, e, i);
        };
      })),
      ($n = m(`$ZodIntersection`, (e, t) => {
        (O.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => pn(e, t, n))
              : pn(e, i, a);
          }));
      })),
      (er = m(`$ZodEnum`, (e, t) => {
        O.init(e, t);
        let n = ce(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => Fe.has(typeof e))
              .map((e) => (typeof e == `string` ? x(e) : e.toString()))
              .join(`|`)})$`,
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (
              r.has(a) ||
                t.issues.push({
                  code: `invalid_value`,
                  values: n,
                  input: a,
                  inst: e,
                }),
              t
            );
          }));
      })),
      (tr = m(`$ZodLiteral`, (e, t) => {
        if ((O.init(e, t), t.values.length === 0))
          throw Error(`Cannot create literal schema with no valid values`);
        let n = new Set(t.values);
        ((e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => (typeof e == `string` ? x(e) : e ? x(e.toString()) : String(e))).join(`|`)})$`,
          )),
          (e._zod.parse = (r, i) => {
            let a = r.value;
            return (
              n.has(a) ||
                r.issues.push({
                  code: `invalid_value`,
                  values: t.values,
                  input: a,
                  inst: e,
                }),
              r
            );
          }));
      })),
      (nr = m(`$ZodTransform`, (e, t) => {
        (O.init(e, t),
          (e._zod.optin = `optional`),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new oe(e.constructor.name);
            let i = t.transform(n.value, n);
            if (r.async)
              return (i instanceof Promise ? i : Promise.resolve(i)).then(
                (e) => ((n.value = e), (n.fallback = !0), n),
              );
            if (i instanceof Promise) throw new g();
            return ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (rr = m(`$ZodOptional`, (e, t) => {
        (O.init(e, t),
          (e._zod.optin = `optional`),
          (e._zod.optout = `optional`),
          v(e._zod, `values`, () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, void 0])
              : void 0,
          ),
          v(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${fe(e.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if (t.innerType._zod.optin === `optional`) {
              let r = e.value,
                i = t.innerType._zod.run(e, n);
              return i instanceof Promise ? i.then((e) => mn(e, r)) : mn(i, r);
            }
            return e.value === void 0 ? e : t.innerType._zod.run(e, n);
          }));
      })),
      (ir = m(`$ZodExactOptional`, (e, t) => {
        (rr.init(e, t),
          v(e._zod, `values`, () => t.innerType._zod.values),
          v(e._zod, `pattern`, () => t.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
      })),
      (ar = m(`$ZodNullable`, (e, t) => {
        (O.init(e, t),
          v(e._zod, `optin`, () => t.innerType._zod.optin),
          v(e._zod, `optout`, () => t.innerType._zod.optout),
          v(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${fe(e.source)}|null)$`) : void 0;
          }),
          v(e._zod, `values`, () =>
            t.innerType._zod.values
              ? new Set([...t.innerType._zod.values, null])
              : void 0,
          ),
          (e._zod.parse = (e, n) =>
            e.value === null ? e : t.innerType._zod.run(e, n)));
      })),
      (or = m(`$ZodDefault`, (e, t) => {
        (O.init(e, t),
          (e._zod.optin = `optional`),
          v(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            if (e.value === void 0) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => hn(e, t)) : hn(r, t);
          }));
      })),
      (sr = m(`$ZodPrefault`, (e, t) => {
        (O.init(e, t),
          (e._zod.optin = `optional`),
          v(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            n.direction === `backward` ||
              (e.value === void 0 && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      })),
      (cr = m(`$ZodNonOptional`, (e, t) => {
        (O.init(e, t),
          v(e._zod, `values`, () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => gn(t, e)) : gn(i, e);
          }));
      })),
      (lr = m(`$ZodCatch`, (e, t) => {
        (O.init(e, t),
          (e._zod.optin = `optional`),
          v(e._zod, `optout`, () => t.innerType._zod.optout),
          v(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise
              ? r.then(
                  (r) => (
                    (e.value = r.value),
                    r.issues.length &&
                      ((e.value = t.catchValue({
                        ...e,
                        error: { issues: r.issues.map((e) => T(e, n, h())) },
                        input: e.value,
                      })),
                      (e.issues = []),
                      (e.fallback = !0)),
                    e
                  ),
                )
              : ((e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: r.issues.map((e) => T(e, n, h())) },
                    input: e.value,
                  })),
                  (e.issues = []),
                  (e.fallback = !0)),
                e);
          }));
      })),
      (ur = m(`$ZodPipe`, (e, t) => {
        (O.init(e, t),
          v(e._zod, `values`, () => t.in._zod.values),
          v(e._zod, `optin`, () => t.in._zod.optin),
          v(e._zod, `optout`, () => t.out._zod.optout),
          v(e._zod, `propValues`, () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => _n(e, t.in, n))
                : _n(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise
              ? r.then((e) => _n(e, t.out, n))
              : _n(r, t.out, n);
          }));
      })),
      (dr = m(`$ZodReadonly`, (e, t) => {
        (O.init(e, t),
          v(e._zod, `propValues`, () => t.innerType._zod.propValues),
          v(e._zod, `values`, () => t.innerType._zod.values),
          v(e._zod, `optin`, () => t.innerType?._zod?.optin),
          v(e._zod, `optout`, () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(vn) : vn(r);
          }));
      })),
      (fr = m(`$ZodCustom`, (e, t) => {
        (D.init(e, t),
          O.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => yn(t, n, r, e));
            yn(i, n, r, e);
          }));
      })));
  }))();
}
function mr() {
  return new gr();
}
var hr, gr, A;
function _r() {
  return (_r = e(() => {
    ((gr = class {
      constructor() {
        ((this._map = new WeakMap()), (this._idmap = new Map()));
      }
      add(e, ...t) {
        let n = t[0];
        return (
          this._map.set(e, n),
          n && typeof n == `object` && `id` in n && this._idmap.set(n.id, e),
          this
        );
      }
      clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
      }
      remove(e) {
        let t = this._map.get(e);
        return (
          t && typeof t == `object` && `id` in t && this._idmap.delete(t.id),
          this._map.delete(e),
          this
        );
      }
      get(e) {
        let t = e._zod.parent;
        if (t) {
          let n = { ...(this.get(t) ?? {}) };
          delete n.id;
          let r = { ...n, ...this._map.get(e) };
          return Object.keys(r).length ? r : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
    }),
      (hr = globalThis).__zod_globalRegistry ??
        (hr.__zod_globalRegistry = mr()),
      (A = globalThis.__zod_globalRegistry));
  }))();
}
function vr(e, t) {
  return new e({ type: `string`, ...C(t) });
}
function yr(e, t) {
  return new e({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function br(e, t) {
  return new e({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function xr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Sr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...C(t),
  });
}
function Cr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...C(t),
  });
}
function wr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...C(t),
  });
}
function Tr(e, t) {
  return new e({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Er(e, t) {
  return new e({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Dr(e, t) {
  return new e({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Or(e, t) {
  return new e({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function kr(e, t) {
  return new e({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Ar(e, t) {
  return new e({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function jr(e, t) {
  return new e({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Mr(e, t) {
  return new e({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Nr(e, t) {
  return new e({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Pr(e, t) {
  return new e({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Fr(e, t) {
  return new e({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Ir(e, t) {
  return new e({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Lr(e, t) {
  return new e({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Rr(e, t) {
  return new e({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function zr(e, t) {
  return new e({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Br(e, t) {
  return new e({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ...C(t),
  });
}
function Vr(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...C(t),
  });
}
function Hr(e, t) {
  return new e({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ...C(t),
  });
}
function Ur(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...C(t),
  });
}
function Wr(e, t) {
  return new e({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ...C(t),
  });
}
function Gr(e, t) {
  return new e({ type: `number`, checks: [], ...C(t) });
}
function Kr(e, t) {
  return new e({
    type: `number`,
    check: `number_format`,
    abort: !1,
    format: `safeint`,
    ...C(t),
  });
}
function qr(e, t) {
  return new e({ type: `boolean`, ...C(t) });
}
function Jr(e) {
  return new e({ type: `unknown` });
}
function Yr(e, t) {
  return new e({ type: `never`, ...C(t) });
}
function Xr(e, t) {
  return new Lt({ check: `less_than`, ...C(t), value: e, inclusive: !1 });
}
function Zr(e, t) {
  return new Lt({ check: `less_than`, ...C(t), value: e, inclusive: !0 });
}
function Qr(e, t) {
  return new Rt({ check: `greater_than`, ...C(t), value: e, inclusive: !1 });
}
function $r(e, t) {
  return new Rt({ check: `greater_than`, ...C(t), value: e, inclusive: !0 });
}
function ei(e, t) {
  return new zt({ check: `multiple_of`, ...C(t), value: e });
}
function ti(e, t) {
  return new Vt({ check: `max_length`, ...C(t), maximum: e });
}
function ni(e, t) {
  return new Ht({ check: `min_length`, ...C(t), minimum: e });
}
function ri(e, t) {
  return new Ut({ check: `length_equals`, ...C(t), length: e });
}
function ii(e, t) {
  return new Gt({
    check: `string_format`,
    format: `regex`,
    ...C(t),
    pattern: e,
  });
}
function ai(e) {
  return new Kt({ check: `string_format`, format: `lowercase`, ...C(e) });
}
function oi(e) {
  return new qt({ check: `string_format`, format: `uppercase`, ...C(e) });
}
function si(e, t) {
  return new Jt({
    check: `string_format`,
    format: `includes`,
    ...C(t),
    includes: e,
  });
}
function ci(e, t) {
  return new Yt({
    check: `string_format`,
    format: `starts_with`,
    ...C(t),
    prefix: e,
  });
}
function li(e, t) {
  return new Xt({
    check: `string_format`,
    format: `ends_with`,
    ...C(t),
    suffix: e,
  });
}
function j(e) {
  return new Zt({ check: `overwrite`, tx: e });
}
function ui(e) {
  return j((t) => t.normalize(e));
}
function di() {
  return j((e) => e.trim());
}
function fi() {
  return j((e) => e.toLowerCase());
}
function pi() {
  return j((e) => e.toUpperCase());
}
function mi() {
  return j((e) => he(e));
}
function hi(e, t, n) {
  return new e({ type: `array`, element: t, ...C(n) });
}
function gi(e, t, n) {
  let r = C(n);
  return (
    (r.abort ??= !0),
    new e({ type: `custom`, check: `custom`, fn: t, ...r })
  );
}
function _i(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...C(n) });
}
function vi(e, t) {
  let n = yi(
    (t) => (
      (t.addIssue = (e) => {
        if (typeof e == `string`) t.issues.push(je(e, t.value, n._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= t.value),
            (r.inst ??= n),
            (r.continue ??= !n._zod.def.abort),
            t.issues.push(je(r)));
        }
      }),
      e(t.value, t)
    ),
    t,
  );
  return n;
}
function yi(e, t) {
  let n = new D({ check: `custom`, ...C(t) });
  return ((n._zod.check = e), n);
}
function bi() {
  return (bi = e(() => {
    (Qt(), E());
  }))();
}
function xi(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? A,
      target: t,
      unrepresentable: e?.unrepresentable ?? `throw`,
      override: e?.override ?? (() => {}),
      io: e?.io ?? `output`,
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? `ref`,
      reused: e?.reused ?? `inline`,
      external: e?.external ?? void 0,
    }
  );
}
function M(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  let i = e._zod.def,
    a = t.seen.get(e);
  if (a)
    return (
      a.count++,
      n.schemaPath.includes(e) && (a.cycle = n.path),
      a.schema
    );
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o);
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
  else {
    let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
    else {
      let n = o.schema,
        a = t.processors[i.type];
      if (!a)
        throw Error(
          `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
        );
      a(e, t, n, r);
    }
    let a = e._zod.parent;
    a && ((o.ref ||= a), M(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` &&
      N(e) &&
      (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function Si(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = new Map();
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0])?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0])
        throw Error(
          `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      r.set(n, t[0]);
    }
  }
  let i = (t) => {
      let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (e.external) {
        let n = e.external.registry.get(t[0])?.id,
          i = e.external.uri ?? ((e) => e);
        if (n) return { ref: i(n) };
        let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
        return (
          (t[1].defId = a),
          { defId: a, ref: `${i(`__shared`)}#/${r}/${a}` }
        );
      }
      if (t[1] === n) return { ref: `#` };
      let i = `#/${r}/`,
        a = t[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: a, ref: i + a };
    },
    a = (e) => {
      if (e[1].schema.$ref) return;
      let t = e[1],
        { ref: n, defId: r } = i(e);
      ((t.def = { ...t.schema }), r && (t.defId = r));
      let a = t.schema;
      for (let e in a) delete a[e];
      a.$ref = n;
    };
  if (e.cycles === `throw`)
    for (let t of e.seen.entries()) {
      let e = t[1];
      if (e.cycle)
        throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) {
      a(n);
      continue;
    }
    if (e.external) {
      let r = e.external.registry.get(n[0])?.id;
      if (t !== n[0] && r) {
        a(n);
        continue;
      }
    }
    if (e.metadataRegistry.get(n[0])?.id) {
      a(n);
      continue;
    }
    if (r.cycle) {
      a(n);
      continue;
    }
    if (r.count > 1 && e.reused === `ref`) {
      a(n);
      continue;
    }
  }
}
function Ci(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = (t) => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
      a = { ...i },
      o = n.ref;
    if (((n.ref = null), o)) {
      r(o);
      let n = e.seen.get(o),
        s = n.schema;
      if (
        (s.$ref &&
        (e.target === `draft-07` ||
          e.target === `draft-04` ||
          e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : Object.assign(i, s),
        Object.assign(i, a),
        t._zod.parent === o)
      )
        for (let e in i)
          e !== `$ref` && e !== `allOf` && (e in a || delete i[e]);
      if (s.$ref && n.def)
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in n.def &&
            JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
            delete i[e];
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in t.def &&
            JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
            delete i[e];
    }
    e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
  };
  for (let t of [...e.seen.entries()].reverse()) r(t[0]);
  let i = {};
  if (
    (e.target === `draft-2020-12`
      ? (i.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : e.target === `draft-07`
        ? (i.$schema = `http://json-schema.org/draft-07/schema#`)
        : e.target === `draft-04`
          ? (i.$schema = `http://json-schema.org/draft-04/schema#`)
          : e.target,
    e.external?.uri)
  ) {
    let n = e.external.registry.get(t)?.id;
    if (!n) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(n);
  }
  Object.assign(i, n.def ?? n.schema);
  let a = e.metadataRegistry.get(t)?.id;
  a !== void 0 && i.id === a && delete i.id;
  let o = e.external?.defs ?? {};
  for (let t of e.seen.entries()) {
    let e = t[1];
    e.def &&
      e.defId &&
      (e.def.id === e.defId && delete e.def.id, (o[e.defId] = e.def));
  }
  e.external ||
    (Object.keys(o).length > 0 &&
      (e.target === `draft-2020-12` ? (i.$defs = o) : (i.definitions = o)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, "~standard", {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: Ti(t, `input`, e.processors),
            output: Ti(t, `output`, e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      n
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function N(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return N(r.element, n);
  if (r.type === `set`) return N(r.valueType, n);
  if (r.type === `lazy`) return N(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault`
  )
    return N(r.innerType, n);
  if (r.type === `intersection`) return N(r.left, n) || N(r.right, n);
  if (r.type === `record` || r.type === `map`)
    return N(r.keyType, n) || N(r.valueType, n);
  if (r.type === `pipe`)
    return e._zod.traits.has(`$ZodCodec`) ? !0 : N(r.in, n) || N(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (N(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (N(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (N(e, n)) return !0;
    return !!(r.rest && N(r.rest, n));
  }
  return !1;
}
var wi, Ti;
function Ei() {
  return (Ei = e(() => {
    (_r(),
      (wi =
        (e, t = {}) =>
        (n) => {
          let r = xi({ ...n, processors: t });
          return (M(e, r), Si(r, e), Ci(r, e));
        }),
      (Ti =
        (e, t, n = {}) =>
        (r) => {
          let { libraryOptions: i, target: a } = r ?? {},
            o = xi({ ...(i ?? {}), target: a, io: t, processors: n });
          return (M(e, o), Si(o, e), Ci(o, e));
        }));
  }))();
}
var Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji;
function Yi() {
  return (Yi = e(() => {
    (Ei(),
      E(),
      (Di = {
        guid: `uuid`,
        url: `uri`,
        datetime: `date-time`,
        json_string: `json-string`,
        regex: ``,
      }),
      (Oi = (e, t, n, r) => {
        let i = n;
        i.type = `string`;
        let {
          minimum: a,
          maximum: o,
          format: s,
          patterns: c,
          contentEncoding: l,
        } = e._zod.bag;
        if (
          (typeof a == `number` && (i.minLength = a),
          typeof o == `number` && (i.maxLength = o),
          s &&
            ((i.format = Di[s] ?? s),
            i.format === `` && delete i.format,
            s === `time` && delete i.format),
          l && (i.contentEncoding = l),
          c && c.size > 0)
        ) {
          let e = [...c];
          e.length === 1
            ? (i.pattern = e[0].source)
            : e.length > 1 &&
              (i.allOf = [
                ...e.map((e) => ({
                  ...(t.target === `draft-07` ||
                  t.target === `draft-04` ||
                  t.target === `openapi-3.0`
                    ? { type: `string` }
                    : {}),
                  pattern: e.source,
                })),
              ]);
        }
      }),
      (ki = (e, t, n, r) => {
        let i = n,
          {
            minimum: a,
            maximum: o,
            format: s,
            multipleOf: c,
            exclusiveMaximum: l,
            exclusiveMinimum: u,
          } = e._zod.bag;
        i.type =
          typeof s == `string` && s.includes(`int`) ? `integer` : `number`;
        let d = typeof u == `number` && u >= (a ?? -1 / 0),
          f = typeof l == `number` && l <= (o ?? 1 / 0),
          p = t.target === `draft-04` || t.target === `openapi-3.0`;
        (d
          ? p
            ? ((i.minimum = u), (i.exclusiveMinimum = !0))
            : (i.exclusiveMinimum = u)
          : typeof a == `number` && (i.minimum = a),
          f
            ? p
              ? ((i.maximum = l), (i.exclusiveMaximum = !0))
              : (i.exclusiveMaximum = l)
            : typeof o == `number` && (i.maximum = o),
          typeof c == `number` && (i.multipleOf = c));
      }),
      (Ai = (e, t, n, r) => {
        n.type = `boolean`;
      }),
      (ji = (e, t, n, r) => {
        n.not = {};
      }),
      (Mi = (e, t, n, r) => {}),
      (Ni = (e, t, n, r) => {
        let i = e._zod.def,
          a = ce(i.entries);
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          (n.enum = a));
      }),
      (Pi = (e, t, n, r) => {
        let i = e._zod.def,
          a = [];
        for (let e of i.values)
          if (e === void 0) {
            if (t.unrepresentable === `throw`)
              throw Error(
                "Literal `undefined` cannot be represented in JSON Schema",
              );
          } else if (typeof e == `bigint`) {
            if (t.unrepresentable === `throw`)
              throw Error(
                `BigInt literals cannot be represented in JSON Schema`,
              );
            a.push(Number(e));
          } else a.push(e);
        if (a.length !== 0) {
          if (a.length === 1) {
            let e = a[0];
            ((n.type = e === null ? `null` : typeof e),
              t.target === `draft-04` || t.target === `openapi-3.0`
                ? (n.enum = [e])
                : (n.const = e));
          } else
            (a.every((e) => typeof e == `number`) && (n.type = `number`),
              a.every((e) => typeof e == `string`) && (n.type = `string`),
              a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
              a.every((e) => e === null) && (n.type = `null`),
              (n.enum = a));
        }
      }),
      (Fi = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Custom types cannot be represented in JSON Schema`);
      }),
      (Ii = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Transforms cannot be represented in JSON Schema`);
      }),
      (Li = (e, t, n, r) => {
        let i = n,
          a = e._zod.def,
          { minimum: o, maximum: s } = e._zod.bag;
        (typeof o == `number` && (i.minItems = o),
          typeof s == `number` && (i.maxItems = s),
          (i.type = `array`),
          (i.items = M(a.element, t, { ...r, path: [...r.path, `items`] })));
      }),
      (Ri = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        ((i.type = `object`), (i.properties = {}));
        let o = a.shape;
        for (let e in o)
          i.properties[e] = M(o[e], t, {
            ...r,
            path: [...r.path, `properties`, e],
          });
        let s = new Set(Object.keys(o)),
          c = new Set(
            [...s].filter((e) => {
              let n = a.shape[e]._zod;
              return t.io === `input`
                ? n.optin === void 0
                : n.optout === void 0;
            }),
          );
        (c.size > 0 && (i.required = Array.from(c)),
          a.catchall?._zod.def.type === `never`
            ? (i.additionalProperties = !1)
            : a.catchall
              ? a.catchall &&
                (i.additionalProperties = M(a.catchall, t, {
                  ...r,
                  path: [...r.path, `additionalProperties`],
                }))
              : t.io === `output` && (i.additionalProperties = !1));
      }),
      (zi = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.inclusive === !1,
          o = i.options.map((e, n) =>
            M(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }),
          );
        a ? (n.oneOf = o) : (n.anyOf = o);
      }),
      (Bi = (e, t, n, r) => {
        let i = e._zod.def,
          a = M(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
          o = M(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
          s = (e) => `allOf` in e && Object.keys(e).length === 1;
        n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
      }),
      (Vi = (e, t, n, r) => {
        let i = e._zod.def,
          a = M(i.innerType, t, r),
          o = t.seen.get(e);
        t.target === `openapi-3.0`
          ? ((o.ref = i.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: `null` }]);
      }),
      (Hi = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }),
      (Ui = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Wi = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          t.io === `input` &&
            (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Gi = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
        let o;
        try {
          o = i.catchValue(void 0);
        } catch {
          throw Error(`Dynamic catch values are not supported in JSON Schema`);
        }
        n.default = o;
      }),
      (Ki = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.in._zod.traits.has(`$ZodTransform`),
          o = t.io === `input` ? (a ? i.out : i.in) : i.out;
        M(o, t, r);
        let s = t.seen.get(e);
        s.ref = o;
      }),
      (qi = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.readOnly = !0));
      }),
      (Ji = (e, t, n, r) => {
        let i = e._zod.def;
        M(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }));
  }))();
}
function Xi(e) {
  return Vr(ea, e);
}
function Zi(e) {
  return Hr(ta, e);
}
function Qi(e) {
  return Ur(na, e);
}
function $i(e) {
  return Wr(ra, e);
}
var ea, ta, na, ra;
function ia() {
  return (ia = e(() => {
    (_(),
      pr(),
      bi(),
      W(),
      (ea = m(`ZodISODateTime`, (e, t) => {
        (Mn.init(e, t), U.init(e, t));
      })),
      (ta = m(`ZodISODate`, (e, t) => {
        (Nn.init(e, t), U.init(e, t));
      })),
      (na = m(`ZodISOTime`, (e, t) => {
        (Pn.init(e, t), U.init(e, t));
      })),
      (ra = m(`ZodISODuration`, (e, t) => {
        (Fn.init(e, t), U.init(e, t));
      })));
  }))();
}
var aa, P;
function oa() {
  return (oa = e(() => {
    (He(),
      _(),
      E(),
      (aa = (e, t) => {
        (Be.init(e, t),
          (e.name = `ZodError`),
          Object.defineProperties(e, {
            format: { value: (t) => Re(e, t) },
            flatten: { value: (t) => Le(e, t) },
            addIssue: {
              value: (t) => {
                (e.issues.push(t),
                  (e.message = JSON.stringify(e.issues, le, 2)));
              },
            },
            addIssues: {
              value: (t) => {
                (e.issues.push(...t),
                  (e.message = JSON.stringify(e.issues, le, 2)));
              },
            },
            isEmpty: {
              get() {
                return e.issues.length === 0;
              },
            },
          }));
      }),
      (P = m(`ZodError`, aa, { Parent: Error })));
  }))();
}
var sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va;
function ya() {
  return (ya = e(() => {
    (rt(),
      oa(),
      (sa = Ue(P)),
      (ca = We(P)),
      (la = Ge(P)),
      (ua = qe(P)),
      (da = Ye(P)),
      (fa = Xe(P)),
      (pa = Ze(P)),
      (ma = Qe(P)),
      (ha = $e(P)),
      (ga = et(P)),
      (_a = tt(P)),
      (va = nt(P)));
  }))();
}
function ba(e, t, n) {
  let r = Object.getPrototypeOf(e),
    i = za.get(r);
  if ((i || ((i = new Set()), za.set(r, i)), !i.has(t))) {
    i.add(t);
    for (let e in n) {
      let t = n[e];
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !1,
        get() {
          let n = t.bind(this);
          return (
            Object.defineProperty(this, e, {
              configurable: !0,
              writable: !0,
              enumerable: !0,
              value: n,
            }),
            n
          );
        },
        set(t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: t,
          });
        },
      });
    }
  }
}
function F(e) {
  return vr(Va, e);
}
function I(e) {
  return Gr(so, e);
}
function xa(e) {
  return Kr(co, e);
}
function L(e) {
  return qr(lo, e);
}
function Sa() {
  return Jr(uo);
}
function Ca(e) {
  return Yr(fo, e);
}
function R(e, t) {
  return hi(po, e, t);
}
function z(e, t) {
  let n = { type: `object`, shape: e ?? {}, ...C(t) };
  return new mo(n);
}
function wa(e, t) {
  return new ho({ type: `union`, options: e, ...C(t) });
}
function Ta(e, t) {
  return new go({ type: `intersection`, left: e, right: t });
}
function B(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new _o({ type: `enum`, entries: n, ...C(t) });
}
function V(e, t) {
  return new vo({
    type: `literal`,
    values: Array.isArray(e) ? e : [e],
    ...C(t),
  });
}
function Ea(e) {
  return new yo({ type: `transform`, transform: e });
}
function Da(e) {
  return new bo({ type: `optional`, innerType: e });
}
function Oa(e) {
  return new xo({ type: `optional`, innerType: e });
}
function ka(e) {
  return new So({ type: `nullable`, innerType: e });
}
function Aa(e, t) {
  return new Co({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ve(t);
    },
  });
}
function ja(e, t) {
  return new wo({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ve(t);
    },
  });
}
function Ma(e, t) {
  return new To({ type: `nonoptional`, innerType: e, ...C(t) });
}
function Na(e, t) {
  return new Eo({
    type: `catch`,
    innerType: e,
    catchValue: typeof t == `function` ? t : () => t,
  });
}
function Pa(e, t) {
  return new Do({ type: `pipe`, in: e, out: t });
}
function Fa(e) {
  return new Oo({ type: `readonly`, innerType: e });
}
function Ia(e, t) {
  return gi(ko, e ?? (() => !0), t);
}
function La(e, t = {}) {
  return _i(ko, e, t);
}
function Ra(e, t) {
  return vi(e, t);
}
var za,
  H,
  Ba,
  Va,
  U,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko;
function W() {
  return (W = e(() => {
    (_(),
      pr(),
      E(),
      _r(),
      bi(),
      Yi(),
      Ei(),
      ia(),
      ya(),
      (za = new WeakMap()),
      (H = m(
        `ZodType`,
        (e, t) => (
          O.init(e, t),
          Object.assign(e[`~standard`], {
            jsonSchema: { input: Ti(e, `input`), output: Ti(e, `output`) },
          }),
          (e.toJSONSchema = wi(e, {})),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, "_def", { value: t }),
          (e.parse = (t, n) => sa(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => la(e, t, n)),
          (e.parseAsync = async (t, n) =>
            ca(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => ua(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => da(e, t, n)),
          (e.decode = (t, n) => fa(e, t, n)),
          (e.encodeAsync = async (t, n) => pa(e, t, n)),
          (e.decodeAsync = async (t, n) => ma(e, t, n)),
          (e.safeEncode = (t, n) => ha(e, t, n)),
          (e.safeDecode = (t, n) => ga(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => _a(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => va(e, t, n)),
          ba(e, `ZodType`, {
            check(...e) {
              let t = this.def;
              return this.clone(
                b(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...e.map((e) =>
                      typeof e == `function`
                        ? {
                            _zod: {
                              check: e,
                              def: { check: `custom` },
                              onattach: [],
                            },
                          }
                        : e,
                    ),
                  ],
                }),
                { parent: !0 },
              );
            },
            with(...e) {
              return this.check(...e);
            },
            clone(e, t) {
              return S(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return (e.add(this, t), this);
            },
            refine(e, t) {
              return this.check(La(e, t));
            },
            superRefine(e, t) {
              return this.check(Ra(e, t));
            },
            overwrite(e) {
              return this.check(j(e));
            },
            optional() {
              return Da(this);
            },
            exactOptional() {
              return Oa(this);
            },
            nullable() {
              return ka(this);
            },
            nullish() {
              return Da(ka(this));
            },
            nonoptional(e) {
              return Ma(this, e);
            },
            array() {
              return R(this);
            },
            or(e) {
              return wa([this, e]);
            },
            and(e) {
              return Ta(this, e);
            },
            transform(e) {
              return Pa(this, Ea(e));
            },
            default(e) {
              return Aa(this, e);
            },
            prefault(e) {
              return ja(this, e);
            },
            catch(e) {
              return Na(this, e);
            },
            pipe(e) {
              return Pa(this, e);
            },
            readonly() {
              return Fa(this);
            },
            describe(e) {
              let t = this.clone();
              return (A.add(t, { description: e }), t);
            },
            meta(...e) {
              if (e.length === 0) return A.get(this);
              let t = this.clone();
              return (A.add(t, e[0]), t);
            },
            isOptional() {
              return this.safeParse(void 0).success;
            },
            isNullable() {
              return this.safeParse(null).success;
            },
            apply(e) {
              return e(this);
            },
          }),
          Object.defineProperty(e, "description", {
            get() {
              return A.get(e)?.description;
            },
            configurable: !0,
          }),
          e
        ),
      )),
      (Ba = m(`_ZodString`, (e, t) => {
        (bn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          ba(e, `_ZodString`, {
            regex(...e) {
              return this.check(ii(...e));
            },
            includes(...e) {
              return this.check(si(...e));
            },
            startsWith(...e) {
              return this.check(ci(...e));
            },
            endsWith(...e) {
              return this.check(li(...e));
            },
            min(...e) {
              return this.check(ni(...e));
            },
            max(...e) {
              return this.check(ti(...e));
            },
            length(...e) {
              return this.check(ri(...e));
            },
            nonempty(...e) {
              return this.check(ni(1, ...e));
            },
            lowercase(e) {
              return this.check(ai(e));
            },
            uppercase(e) {
              return this.check(oi(e));
            },
            trim() {
              return this.check(di());
            },
            normalize(...e) {
              return this.check(ui(...e));
            },
            toLowerCase() {
              return this.check(fi());
            },
            toUpperCase() {
              return this.check(pi());
            },
            slugify() {
              return this.check(mi());
            },
          }));
      })),
      (Va = m(`ZodString`, (e, t) => {
        (bn.init(e, t),
          Ba.init(e, t),
          (e.email = (t) => e.check(yr(Ha, t))),
          (e.url = (t) => e.check(Tr(Ga, t))),
          (e.jwt = (t) => e.check(Br(oo, t))),
          (e.emoji = (t) => e.check(Er(Ka, t))),
          (e.guid = (t) => e.check(br(Ua, t))),
          (e.uuid = (t) => e.check(xr(Wa, t))),
          (e.uuidv4 = (t) => e.check(Sr(Wa, t))),
          (e.uuidv6 = (t) => e.check(Cr(Wa, t))),
          (e.uuidv7 = (t) => e.check(wr(Wa, t))),
          (e.nanoid = (t) => e.check(Dr(qa, t))),
          (e.guid = (t) => e.check(br(Ua, t))),
          (e.cuid = (t) => e.check(Or(Ja, t))),
          (e.cuid2 = (t) => e.check(kr(Ya, t))),
          (e.ulid = (t) => e.check(Ar(Xa, t))),
          (e.base64 = (t) => e.check(Lr(ro, t))),
          (e.base64url = (t) => e.check(Rr(io, t))),
          (e.xid = (t) => e.check(jr(Za, t))),
          (e.ksuid = (t) => e.check(Mr(Qa, t))),
          (e.ipv4 = (t) => e.check(Nr($a, t))),
          (e.ipv6 = (t) => e.check(Pr(eo, t))),
          (e.cidrv4 = (t) => e.check(Fr(to, t))),
          (e.cidrv6 = (t) => e.check(Ir(no, t))),
          (e.e164 = (t) => e.check(zr(ao, t))),
          (e.datetime = (t) => e.check(Xi(t))),
          (e.date = (t) => e.check(Zi(t))),
          (e.time = (t) => e.check(Qi(t))),
          (e.duration = (t) => e.check($i(t))));
      })),
      (U = m(`ZodStringFormat`, (e, t) => {
        (k.init(e, t), Ba.init(e, t));
      })),
      (Ha = m(`ZodEmail`, (e, t) => {
        (Cn.init(e, t), U.init(e, t));
      })),
      (Ua = m(`ZodGUID`, (e, t) => {
        (xn.init(e, t), U.init(e, t));
      })),
      (Wa = m(`ZodUUID`, (e, t) => {
        (Sn.init(e, t), U.init(e, t));
      })),
      (Ga = m(`ZodURL`, (e, t) => {
        (wn.init(e, t), U.init(e, t));
      })),
      (Ka = m(`ZodEmoji`, (e, t) => {
        (Tn.init(e, t), U.init(e, t));
      })),
      (qa = m(`ZodNanoID`, (e, t) => {
        (En.init(e, t), U.init(e, t));
      })),
      (Ja = m(`ZodCUID`, (e, t) => {
        (Dn.init(e, t), U.init(e, t));
      })),
      (Ya = m(`ZodCUID2`, (e, t) => {
        (On.init(e, t), U.init(e, t));
      })),
      (Xa = m(`ZodULID`, (e, t) => {
        (kn.init(e, t), U.init(e, t));
      })),
      (Za = m(`ZodXID`, (e, t) => {
        (An.init(e, t), U.init(e, t));
      })),
      (Qa = m(`ZodKSUID`, (e, t) => {
        (jn.init(e, t), U.init(e, t));
      })),
      ($a = m(`ZodIPv4`, (e, t) => {
        (In.init(e, t), U.init(e, t));
      })),
      (eo = m(`ZodIPv6`, (e, t) => {
        (Ln.init(e, t), U.init(e, t));
      })),
      (to = m(`ZodCIDRv4`, (e, t) => {
        (Rn.init(e, t), U.init(e, t));
      })),
      (no = m(`ZodCIDRv6`, (e, t) => {
        (zn.init(e, t), U.init(e, t));
      })),
      (ro = m(`ZodBase64`, (e, t) => {
        (Bn.init(e, t), U.init(e, t));
      })),
      (io = m(`ZodBase64URL`, (e, t) => {
        (Vn.init(e, t), U.init(e, t));
      })),
      (ao = m(`ZodE164`, (e, t) => {
        (Hn.init(e, t), U.init(e, t));
      })),
      (oo = m(`ZodJWT`, (e, t) => {
        (Un.init(e, t), U.init(e, t));
      })),
      (so = m(`ZodNumber`, (e, t) => {
        (Wn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ki(e, t, n, r)),
          ba(e, `ZodNumber`, {
            gt(e, t) {
              return this.check(Qr(e, t));
            },
            gte(e, t) {
              return this.check($r(e, t));
            },
            min(e, t) {
              return this.check($r(e, t));
            },
            lt(e, t) {
              return this.check(Xr(e, t));
            },
            lte(e, t) {
              return this.check(Zr(e, t));
            },
            max(e, t) {
              return this.check(Zr(e, t));
            },
            int(e) {
              return this.check(xa(e));
            },
            safe(e) {
              return this.check(xa(e));
            },
            positive(e) {
              return this.check(Qr(0, e));
            },
            nonnegative(e) {
              return this.check($r(0, e));
            },
            negative(e) {
              return this.check(Xr(0, e));
            },
            nonpositive(e) {
              return this.check(Zr(0, e));
            },
            multipleOf(e, t) {
              return this.check(ei(e, t));
            },
            step(e, t) {
              return this.check(ei(e, t));
            },
            finite() {
              return this;
            },
          }));
        let n = e._zod.bag;
        ((e.minValue =
          Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
          (e.maxValue =
            Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
          (e.isInt =
            (n.format ?? ``).includes(`int`) ||
            Number.isSafeInteger(n.multipleOf ?? 0.5)),
          (e.isFinite = !0),
          (e.format = n.format ?? null));
      })),
      (co = m(`ZodNumberFormat`, (e, t) => {
        (Gn.init(e, t), so.init(e, t));
      })),
      (lo = m(`ZodBoolean`, (e, t) => {
        (Kn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ai(e, t, n, r)));
      })),
      (uo = m(`ZodUnknown`, (e, t) => {
        (qn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Mi(e, t, n, r)));
      })),
      (fo = m(`ZodNever`, (e, t) => {
        (Jn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ji(e, t, n, r)));
      })),
      (po = m(`ZodArray`, (e, t) => {
        (Yn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Li(e, t, n, r)),
          (e.element = t.element),
          ba(e, `ZodArray`, {
            min(e, t) {
              return this.check(ni(e, t));
            },
            nonempty(e) {
              return this.check(ni(1, e));
            },
            max(e, t) {
              return this.check(ti(e, t));
            },
            length(e, t) {
              return this.check(ri(e, t));
            },
            unwrap() {
              return this.element;
            },
          }));
      })),
      (mo = m(`ZodObject`, (e, t) => {
        (Zn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ri(e, t, n, r)),
          v(e, `shape`, () => t.shape),
          ba(e, `ZodObject`, {
            keyof() {
              return B(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: Sa() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: Sa() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: Ca() });
            },
            strip() {
              return this.clone({ ...this._zod.def, catchall: void 0 });
            },
            extend(e) {
              return Se(this, e);
            },
            safeExtend(e) {
              return Ce(this, e);
            },
            merge(e) {
              return we(this, e);
            },
            pick(e) {
              return be(this, e);
            },
            omit(e) {
              return xe(this, e);
            },
            partial(...e) {
              return Te(bo, this, e[0]);
            },
            required(...e) {
              return Ee(To, this, e[0]);
            },
          }));
      })),
      (ho = m(`ZodUnion`, (e, t) => {
        (Qn.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => zi(e, t, n, r)),
          (e.options = t.options));
      })),
      (go = m(`ZodIntersection`, (e, t) => {
        ($n.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Bi(e, t, n, r)));
      })),
      (_o = m(`ZodEnum`, (e, t) => {
        (er.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ni(e, t, n, r)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries)));
        let n = new Set(Object.keys(t.entries));
        ((e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new _o({ ...t, checks: [], ...C(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new _o({ ...t, checks: [], ...C(r), entries: i });
          }));
      })),
      (vo = m(`ZodLiteral`, (e, t) => {
        (tr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Pi(e, t, n, r)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw Error(
                  "This schema contains multiple valid literal values. Use `.values` instead.",
                );
              return t.values[0];
            },
          }));
      })),
      (yo = m(`ZodTransform`, (e, t) => {
        (nr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ii(e, t, n, r)),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new oe(e.constructor.name);
            n.addIssue = (r) => {
              if (typeof r == `string`) n.issues.push(je(r, n.value, t));
              else {
                let t = r;
                (t.fatal && (t.continue = !1),
                  (t.code ??= `custom`),
                  (t.input ??= n.value),
                  (t.inst ??= e),
                  n.issues.push(je(t)));
              }
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise
              ? i.then((e) => ((n.value = e), (n.fallback = !0), n))
              : ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (bo = m(`ZodOptional`, (e, t) => {
        (rr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ji(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (xo = m(`ZodExactOptional`, (e, t) => {
        (ir.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ji(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (So = m(`ZodNullable`, (e, t) => {
        (ar.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Co = m(`ZodDefault`, (e, t) => {
        (or.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ui(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap));
      })),
      (wo = m(`ZodPrefault`, (e, t) => {
        (sr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Wi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (To = m(`ZodNonOptional`, (e, t) => {
        (cr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Hi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Eo = m(`ZodCatch`, (e, t) => {
        (lr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Gi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap));
      })),
      (Do = m(`ZodPipe`, (e, t) => {
        (ur.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ki(e, t, n, r)),
          (e.in = t.in),
          (e.out = t.out));
      })),
      (Oo = m(`ZodReadonly`, (e, t) => {
        (dr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => qi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (ko = m(`ZodCustom`, (e, t) => {
        (fr.init(e, t),
          H.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Fi(e, t, n, r)));
      })));
  }))();
}
var Ao, G, K, q, jo, Mo, No, Po, Fo, Io, J, Lo, Y;
function X() {
  return (X = e(() => {
    (W(),
      (Ao = B([`en`, `de`])),
      (G = F().optional()),
      (K = F()),
      (q = z({
        src: F(),
        width: I().int(),
        height: I().int(),
        alt: F(),
        caption: F().optional(),
        lqip: F().optional(),
        focalPoint: z({ x: I(), y: I() }).optional(),
        editTarget: G,
      })),
      (jo = z({
        camera: F().optional(),
        lens: F().optional(),
        focalLength: F().optional(),
        aperture: F().optional(),
        shutterSpeed: F().optional(),
        iso: I().int().optional(),
        takenAt: K.optional(),
      })),
      (Mo = q.extend({ exif: jo.optional() })),
      (No = z({ label: F(), href: F(), external: L() })),
      (Po = B([`linkedin`, `github`, `other`])),
      (Fo = z({ platform: Po, label: F(), href: F() })),
      (Io = z({ locale: Ao, href: F() })),
      (J = z({
        title: F(),
        description: F(),
        canonicalUrl: F(),
        ogImage: q.optional(),
        noIndex: L(),
        alternates: R(Io),
      })),
      (Lo = z({ start: K, end: K.nullable(), isCurrent: L() })),
      (Y = z({ title: F(), href: F() })));
  }))();
}
var Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo;
function Z() {
  return (Z = e(() => {
    (W(),
      X(),
      (Ro = (e) => typeof e == `object` && !!e && e._type === `block`),
      (zo = Ia(Ro, { message: `Expected a Portable Text block` })),
      (Bo = z({
        _type: V(`figure`),
        _key: F(),
        image: Mo,
        size: B([`inline`, `wide`, `fullBleed`]),
        showExif: L(),
      })),
      (Vo = z({
        _type: V(`gallery`),
        _key: F(),
        layout: B([`grid`, `masonry`, `carousel`]),
        caption: F().optional(),
        showExif: L(),
        images: R(Mo).min(2),
      })),
      (Ho = z({
        _type: V(`code`),
        _key: F(),
        language: F(),
        code: F(),
        filename: F().optional(),
        highlightedLines: R(I().int()),
      })),
      (Uo = z({
        _type: V(`callout`),
        _key: F(),
        tone: B([`info`, `tip`, `warning`]),
        body: R(zo),
      })),
      (Wo = z({
        _type: V(`videoEmbed`),
        _key: F(),
        provider: B([`youtube`, `vimeo`]),
        videoId: F(),
        title: F(),
      })),
      (Go = wa([zo, Bo, Vo, Ho, Uo, Wo])),
      (Ko = R(Go)),
      (qo = z({ id: F(), text: F(), level: wa([V(2), V(3)]) })),
      (Jo = (e) => e._type === `figure`),
      (Yo = (e) => e._type === `gallery`));
  }))();
}
var Xo, Zo, Qo;
function $o() {
  return ($o = e(() => {
    (W(),
      X(),
      (Xo = B([`about`, `experience`, `work`, `skills`, `contact`])),
      (Zo = B([`about`, `experience`, `work`, `skills`, `contact`, `blog`])),
      (Qo = z({ key: Zo, href: F(), index: F().optional() })),
      z({
        locale: Ao,
        siteName: F(),
        siteUrl: F(),
        defaultDescription: F(),
        defaultOgImage: q.optional(),
        owner: z({ name: F(), email: F() }),
        socials: R(Fo),
        cv: z({ href: F(), fileName: F() }).optional(),
        nav: R(Qo),
        footer: z({ tagline: F(), copyrightYear: I().int() }),
        legalLinks: R(z({ title: F(), href: F() })),
      }));
  }))();
}
var es, ts, ns;
function rs() {
  return (rs = e(() => {
    (W(),
      X(),
      Z(),
      (es = B([`live`, `inDevelopment`, `archived`])),
      (ts = z({
        kind: B([`live`, `repository`, `appStore`, `playStore`, `other`]),
        href: F(),
      })),
      (ns = z({
        id: F(),
        index: F(),
        title: F(),
        summary: F(),
        cover: q,
        tech: R(F()),
        href: F(),
        editTarget: G,
      })),
      ns
        .omit({ index: !0 })
        .extend({
          slug: F(),
          role: F(),
          period: Lo,
          status: es,
          links: R(ts),
          body: Ko,
          toc: R(qo),
          seo: J,
          previous: Y.optional(),
          next: Y.optional(),
        }));
  }))();
}
var is, Q, as, os, ss, cs, ls, us, ds;
function fs() {
  return (fs = e(() => {
    (W(),
      X(),
      Z(),
      rs(),
      $o(),
      (is = z({
        name: F(),
        facts: z({ location: F(), role: F(), yearsOfExperience: I().int() }),
        intro: F(),
        primaryCta: No,
        editTarget: G,
      })),
      (Q = z({ id: Xo, index: F(), heading: F(), editTarget: G })),
      (as = Q.extend({ portrait: q, body: Ko })),
      (os = z({
        id: F(),
        role: F(),
        company: z({ name: F(), url: F().optional() }),
        location: F(),
        workMode: B([`onsite`, `hybrid`, `remote`]),
        period: Lo,
        summary: F(),
        highlights: R(F()),
        editTarget: G,
      })),
      (ss = Q.extend({ items: R(os) })),
      (cs = Q.extend({ intro: F().optional(), projects: R(ns) })),
      (ls = z({ title: F(), skills: R(F()), editTarget: G })),
      (us = Q.extend({ marqueeRows: R(R(F())), groups: R(ls) })),
      (ds = Q.extend({
        body: F(),
        cta: z({ label: F(), email: F() }),
        socials: R(Fo),
      })),
      z({
        seo: J,
        hero: is,
        about: as.optional(),
        experience: ss.optional(),
        work: cs.optional(),
        skills: us.optional(),
        contact: ds.optional(),
      }));
  }))();
}
var ps, ms, hs, gs, _s;
function vs() {
  return (vs = e(() => {
    (W(),
      X(),
      Z(),
      (ps = z({
        slug: F(),
        title: F(),
        description: F().optional(),
        href: F(),
      })),
      (ms = B([`standard`, `photoEssay`])),
      (hs = z({
        id: F(),
        slug: F(),
        href: F(),
        title: F(),
        excerpt: F(),
        cover: Mo,
        categories: R(ps).min(1),
        publishedAt: K,
        readingTimeMinutes: I().int().min(1),
        layout: ms,
        editTarget: G,
      })),
      hs.extend({
        updatedAt: K.optional(),
        body: Ko,
        toc: R(qo),
        seo: J,
        photoSummary: z({
          photoCount: I().int(),
          cameras: R(F()),
          lenses: R(F()),
        }).optional(),
        related: R(hs).max(3),
        previous: Y.optional(),
        next: Y.optional(),
      }),
      (gs = ps.extend({ postCount: I().int(), active: L() })),
      (_s = z({
        page: I().int().min(1),
        totalPages: I().int().min(1),
        previousHref: F().optional(),
        nextHref: F().optional(),
      })),
      z({
        heading: F(),
        intro: F().optional(),
        activeCategory: ps.optional(),
        categories: R(gs),
        posts: R(hs),
        pagination: _s,
        seo: J,
      }));
  }))();
}
function ys() {
  return (ys = e(() => {
    (W(), X(), Z(), z({ title: F(), body: Ko, updatedAt: K, seo: J }));
  }))();
}
function bs() {
  return (bs = e(() => {
    (X(), Z(), $o(), fs(), rs(), vs(), ys());
  }))();
}
function xs(e) {
  let t = [];
  for (let n of e) {
    if (ws(n) && n.listItem) {
      let e = t[t.length - 1];
      if (e && `list` in e && e.list === n.listItem) {
        e.items.push(n);
        continue;
      }
      t.push({ list: n.listItem, items: [n] });
      continue;
    }
    t.push(n);
  }
  return t;
}
function Ss({ value: e, variant: t = `article`, codeHtml: n = {}, labels: r }) {
  let a = xs(e);
  return (0, $.jsx)(`div`, {
    "data-slot": `rich-text-renderer`,
    className: i(Ts[t]),
    children: a.map((e, t) => {
      if (`list` in e) {
        let n = e.list === `number` ? `ol` : `ul`;
        return (0, $.jsx)(
          n,
          {
            className: i(
              e.list === `number` ? `list-decimal` : `list-disc`,
              `flex flex-col gap-1 pl-5`,
            ),
            children: e.items.map((e) => (0, $.jsx)(o, { block: e }, e._key)),
          },
          t,
        );
      }
      let a = e;
      return ws(a)
        ? a.style === `h2` || a.style === `h3`
          ? (0, $.jsx)(ne, { block: a }, a._key)
          : (0, $.jsx)(o, { block: a }, a._key)
        : Jo(a)
          ? (0, $.jsx)(f, { block: a, exifLabels: r?.exif }, a._key)
          : Yo(a)
            ? (0, $.jsx)(ee, { block: a }, a._key)
            : a._type === `code`
              ? (0, $.jsx)(
                  u,
                  {
                    block: a,
                    html: n[a._key] ?? ``,
                    copyLabel: r?.copyLabel,
                    copiedLabel: r?.copiedLabel,
                  },
                  a._key,
                )
              : a._type === `callout`
                ? (0, $.jsx)(c, { block: a }, a._key)
                : a._type === `videoEmbed`
                  ? (0, $.jsx)(
                      ie,
                      { block: a, playLabel: r?.playVideoLabel },
                      a._key,
                    )
                  : (0, $.jsx)(Cs.Fragment, {}, t);
    }),
  });
}
var Cs, $, ws, Ts;
function Es() {
  return (Es = e(() => {
    (bs(),
      r(),
      (Cs = t()),
      s(),
      l(),
      d(),
      p(),
      a(),
      te(),
      re(),
      ($ = n()),
      (ws = (e) => e._type === `block`),
      (Ts = {
        article: `flex flex-col gap-6 [&_h2]:mt-4 [&_h3]:mt-2`,
        photoEssay: `flex flex-col gap-12`,
        compact: `flex flex-col gap-4 text-sm`,
      }),
      (Ss.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `RichTextRenderer`,
        props: {
          value: {
            required: !0,
            tsType: { name: `RichText` },
            description: ``,
          },
          variant: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"article" | "photoEssay" | "compact"`,
              elements: [
                { name: `literal`, value: `"article"` },
                { name: `literal`, value: `"photoEssay"` },
                { name: `literal`, value: `"compact"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"article"`, computed: !1 },
          },
          codeHtml: {
            required: !1,
            tsType: {
              name: `Record`,
              elements: [{ name: `string` }, { name: `string` }],
              raw: `Record<string, string>`,
            },
            description:
              "`_key` of each `code` block → its Shiki-highlighted HTML, resolved server-side via `highlightCode`.",
            defaultValue: { value: `{}`, computed: !1 },
          },
          labels: {
            required: !1,
            tsType: { name: `RichTextLabels` },
            description: ``,
          },
        },
      }));
  }))();
}
export { Es as n, Ss as t };
