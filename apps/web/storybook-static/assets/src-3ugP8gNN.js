import { a as e, n as t } from "./rolldown-runtime-DkW27tQK.js";
import { n } from "./iframe-BESghBLE.js";
import { t as r } from "./jsx-runtime-DeHZSEgm.js";
import { i, n as a, r as o, t as s } from "./cn-DT5hf25b.js";
import { t as c } from "./react-dom-DmLsvaDm.js";
function l() {
  return typeof window < `u`;
}
function u(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function d(e) {
  return l() ? e instanceof HTMLElement || e instanceof u(e).HTMLElement : !1;
}
function f() {
  return (f = t(() => {}))();
}
var p, m;
function h() {
  return (h = t(() => {
    ((p = e(n(), 1)), (m = { ...p }));
  }))();
}
function g(e, t) {
  let n = _.useRef(v);
  return (n.current === v && (n.current = e(t)), n);
}
var _, v;
function y() {
  return (y = t(() => {
    ((_ = e(n(), 1)), (v = {}));
  }))();
}
function b(e) {
  let t = g(x).current;
  return ((t.next = e), w(t.effect), t.trampoline);
}
function x() {
  let e = {
    next: void 0,
    callback: S,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    },
  };
  return e;
}
function S() {}
var C, w;
function T() {
  return (T = t(() => {
    (h(),
      y(),
      (C = m.useInsertionEffect),
      (w = C && C !== m.useLayoutEffect ? C : (e) => e()));
  }))();
}
var E, D, O;
function k() {
  return (k = t(() => {
    ((E = e(n(), 1)),
      (D = () => {}),
      (O = typeof document < `u` ? E.useLayoutEffect : D));
  }))();
}
function A(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e || t) return { ...e, ...t };
}
function j(e, t, n, r, i) {
  if (!n && !r && !i && !e) return N(t);
  let a = N(e);
  return (
    t && (a = P(a, t)),
    n && (a = P(a, n)),
    r && (a = P(a, r)),
    i && (a = P(a, i)),
    a
  );
}
function M(e) {
  if (e.length === 0) return ue;
  if (e.length === 1) return N(e[0]);
  let t = N(e[0]);
  for (let n = 1; n < e.length; n += 1) t = P(t, e[n]);
  return t;
}
function N(e) {
  return re(e) ? { ...ie(e, ue) } : ee(e);
}
function P(e, t) {
  return re(t) ? ie(t, e) : te(e, t);
}
function ee(e) {
  let t = { ...e };
  for (let e in t) {
    let n = t[e];
    ne(e, n) && (t[e] = oe(n));
  }
  return t;
}
function te(e, t) {
  if (!t) return e;
  for (let n in t) {
    let r = t[n];
    switch (n) {
      case `style`:
        e[n] = A(e.style, r);
        break;
      case `className`:
        e[n] = ce(e.className, r);
        break;
      default:
        e[n] = ne(n, r) ? ae(e[n], r) : r;
    }
  }
  return e;
}
function ne(e, t) {
  let n = e.charCodeAt(0),
    r = e.charCodeAt(1),
    i = e.charCodeAt(2);
  return (
    n === 111 &&
    r === 110 &&
    i >= 65 &&
    i <= 90 &&
    (typeof t == `function` || t === void 0)
  );
}
function re(e) {
  return typeof e == `function`;
}
function ie(e, t) {
  return re(e) ? e(t) : (e ?? ue);
}
function ae(e, t) {
  return t
    ? e
      ? (...n) => {
          let r = n[0];
          if (le(r)) {
            let i = r;
            se(i);
            let a = t(...n);
            return (i.baseUIHandlerPrevented || e?.(...n), a);
          }
          let i = t(...n);
          return (e?.(...n), i);
        }
      : oe(t)
    : e;
}
function oe(e) {
  return (
    e &&
    ((...t) => {
      let n = t[0];
      return (le(n) && se(n), e(...t));
    })
  );
}
function se(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0;
    }),
    e
  );
}
function ce(e, t) {
  return t ? (e ? t + ` ` + e : t) : e;
}
function le(e) {
  return typeof e == `object` && !!e && `nativeEvent` in e;
}
var ue;
function de() {
  return (de = t(() => {
    ue = {};
  }))();
}
function fe(e, t) {
  return function (n, ...r) {
    let i = new URL(e);
    return (
      i.searchParams.set(`code`, n.toString()),
      r.forEach((e) => i.searchParams.append(`args[]`, e)),
      `${t} error #${n}; visit ${i} for the full message.`
    );
  };
}
var pe;
function me() {
  return (me = t(() => {
    pe = fe(`https://base-ui.com/production-error`, `Base UI`);
  }))();
}
function he(e = !1) {
  let t = ge.useContext(_e);
  if (t === void 0 && !e) throw Error(pe(16));
  return t;
}
var ge, _e;
function ve() {
  return (ve = t(() => {
    (me(), (ge = e(n(), 1)), (_e = ge.createContext(void 0)));
  }))();
}
function ye(e) {
  let {
      focusableWhenDisabled: t,
      disabled: n,
      composite: r = !1,
      tabIndex: i = 0,
      isNativeButton: a,
    } = e,
    o = r && t !== !1,
    s = r && t === !1;
  return {
    props: be.useMemo(() => {
      let e = {
        onKeyDown(e) {
          n && t && e.key !== `Tab` && e.preventDefault();
        },
      };
      return (
        r || ((e.tabIndex = i), !a && n && (e.tabIndex = t ? i : -1)),
        ((a && (t || o)) || (!a && n)) && (e[`aria-disabled`] = n),
        a && (!t || s) && (e.disabled = n),
        e
      );
    }, [r, n, t, o, s, a, i]),
  };
}
var be;
function xe() {
  return (xe = t(() => {
    be = e(n(), 1);
  }))();
}
function Se(e, t, { detail: n = 0 } = {}) {
  e.dispatchEvent(
    new (u(e).PointerEvent)(`click`, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: n,
      shiftKey: t.shiftKey,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      metaKey: t.metaKey,
    }),
  );
}
function Ce() {
  return (Ce = t(() => {
    f();
  }))();
}
function we(e = {}) {
  let {
      disabled: t = !1,
      focusableWhenDisabled: n,
      tabIndex: r = 0,
      native: i = !0,
      composite: a,
    } = e,
    o = F.useRef(null),
    s = he(!0),
    c = a ?? s !== void 0,
    { props: l } = ye({
      focusableWhenDisabled: n,
      disabled: t,
      composite: c,
      tabIndex: r,
      isNativeButton: i,
    }),
    u = F.useCallback(() => {
      let e = o.current;
      Te(e) &&
        c &&
        t &&
        l.disabled === void 0 &&
        e.disabled &&
        (e.disabled = !1);
    }, [t, l.disabled, c]);
  return (
    O(u, [u]),
    {
      getButtonProps: F.useCallback(
        (e = {}) => {
          let {
            onClick: n,
            onMouseDown: r,
            onKeyUp: a,
            onKeyDown: o,
            onPointerDown: s,
            ...u
          } = e;
          return j(
            {
              onClick(e) {
                if (t) {
                  e.preventDefault();
                  return;
                }
                n?.(e);
              },
              onMouseDown(e) {
                t || r?.(e);
              },
              onKeyDown(e) {
                if (t || (se(e), o?.(e), e.baseUIHandlerPrevented)) return;
                let n = e.target === e.currentTarget,
                  r = e.currentTarget,
                  a = Te(r),
                  s = !i && Ee(r),
                  l = n && (i ? a : !s),
                  u = e.key === `Enter`,
                  d = e.key === ` `,
                  f = r.getAttribute(`role`),
                  p =
                    f?.startsWith(`menuitem`) ||
                    f === `option` ||
                    f === `gridcell`;
                if (n && c && d) {
                  if (e.defaultPrevented && p) return;
                  (e.preventDefault(),
                    (!i || a) && (e.preventBaseUIHandler(), Se(r, e)));
                  return;
                }
                if (!l || i || (!d && !u)) {
                  n && s && d && e.preventDefault();
                  return;
                }
                e.defaultPrevented ||
                  (e.preventDefault(),
                  u && (e.preventBaseUIHandler(), Se(r, e)));
              },
              onKeyUp(e) {
                if (!t) {
                  if (
                    (se(e),
                    a?.(e),
                    e.target === e.currentTarget &&
                      i &&
                      c &&
                      Te(e.currentTarget) &&
                      e.key === ` `)
                  ) {
                    e.preventDefault();
                    return;
                  }
                  e.baseUIHandlerPrevented ||
                    (e.target === e.currentTarget &&
                      !i &&
                      !c &&
                      !e.defaultPrevented &&
                      e.key === ` ` &&
                      (e.preventBaseUIHandler(), Se(e.currentTarget, e)));
                }
              },
              onPointerDown(e) {
                if (t) {
                  e.preventDefault();
                  return;
                }
                s?.(e);
              },
            },
            i ? { type: `button` } : { role: `button` },
            l,
            u,
          );
        },
        [t, l, c, i],
      ),
      buttonRef: b((e) => {
        ((o.current = e), u());
      }),
    }
  );
}
function Te(e) {
  return d(e) && e.tagName === `BUTTON`;
}
function Ee(e) {
  return d(e) && e.tagName === `A` && !!e.href;
}
var F;
function De() {
  return (De = t(() => {
    ((F = e(n(), 1)), f(), T(), k(), de(), ve(), xe(), Ce());
  }))();
}
function Oe(e, t, n, r) {
  let i = g(Ae).current;
  return (je(i, e, t, n, r) && Ne(i, [e, t, n, r]), i.callback);
}
function ke(e) {
  let t = g(Ae).current;
  return (Me(t, e) && Ne(t, e), t.callback);
}
function Ae() {
  return { callback: null, cleanup: null, refs: [] };
}
function je(e, t, n, r, i) {
  return (
    e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i
  );
}
function Me(e, t) {
  return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function Ne(e, t) {
  if (((e.refs = t), t.every((e) => e == null))) {
    e.callback = null;
    return;
  }
  e.callback = (n) => {
    if (((e.cleanup &&= (e.cleanup(), null)), n != null)) {
      let r = Array(t.length).fill(null);
      for (let e = 0; e < t.length; e += 1) {
        let i = t[e];
        if (i != null)
          switch (typeof i) {
            case `function`: {
              let t = i(n);
              typeof t == `function` && (r[e] = t);
              break;
            }
            case `object`:
              i.current = n;
          }
      }
      e.cleanup = () => {
        for (let e = 0; e < t.length; e += 1) {
          let n = t[e];
          if (n != null)
            switch (typeof n) {
              case `function`: {
                let t = r[e];
                typeof t == `function` ? t() : n(null);
                break;
              }
              case `object`:
                n.current = null;
            }
        }
      };
    }
  };
}
function Pe() {
  return (Pe = t(() => {
    y();
  }))();
}
function Fe(e) {
  return Ie >= e;
}
var Ie;
function Le() {
  return (Le = t(() => {
    (n(), (Ie = 19));
  }))();
}
function Re(e) {
  if (!ze.isValidElement(e)) return null;
  let t = e,
    n = t.props;
  return (Fe(19) ? n?.ref : t.ref) ?? null;
}
var ze;
function Be() {
  return (Be = t(() => {
    ((ze = e(n(), 1)), Le());
  }))();
}
var Ve, I;
function L() {
  return (L = t(() => {
    ((Ve = Object.freeze([])), (I = Object.freeze({})));
  }))();
}
function He(e, t) {
  let n = {};
  for (let r in e) {
    let i = e[r];
    if (t?.hasOwnProperty(r)) {
      let e = t[r](i);
      e != null && Object.assign(n, e);
      continue;
    }
    i === !0
      ? (n[`data-${r.toLowerCase()}`] = ``)
      : i && (n[`data-${r.toLowerCase()}`] = i.toString());
  }
  return n;
}
function Ue(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function We(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function R(e, t, n = {}) {
  let r = t.render;
  n.enabled !== !1 && (r = qe(r));
  let i = Ge(t, n, r);
  if (n.enabled === !1) return null;
  let a = n.state ?? I;
  return Je(e, r, i, a);
}
function Ge(e, t, n) {
  let { className: r, style: i } = e,
    {
      state: a = I,
      ref: o,
      props: s,
      stateAttributesMapping: c,
      enabled: l = !0,
    } = t,
    u = l ? Ue(r, a) : void 0,
    d = l ? We(i, a) : void 0,
    f = l ? He(a, c) : I,
    p = l && s ? Ke(s) : void 0,
    m = l ? (A(f, p) ?? {}) : I;
  return (
    typeof document < `u` &&
      (l
        ? (m.ref = Array.isArray(o)
            ? ke([m.ref, Re(n), ...o])
            : Oe(m.ref, Re(n), o))
        : Oe(null, null)),
    l
      ? (u !== void 0 && (m.className = ce(m.className, u)),
        d !== void 0 && (m.style = A(m.style, d)),
        m)
      : I
  );
}
function Ke(e) {
  return Array.isArray(e) ? M(e) : j(void 0, e);
}
function qe(e) {
  if (e?.$$typeof !== Ze) return e;
  let t = z.Children.toArray(e)[0];
  return z.isValidElement(t) ? t : e;
}
function Je(e, t, n, r) {
  if (t) {
    if (typeof t == `function`) return t(n, r);
    let e = j(n, t.props);
    return ((e.ref = n.ref), z.cloneElement(t, e));
  }
  if (e && typeof e == `string`) return Ye(e, n);
  throw Error(pe(8));
}
function Ye(e, t) {
  return e === `button`
    ? (0, Xe.createElement)(`button`, { type: `button`, ...t, key: t.key })
    : e === `img`
      ? (0, Xe.createElement)(`img`, { alt: ``, ...t, key: t.key })
      : z.createElement(e, t);
}
var z, Xe, Ze;
function B() {
  return (B = t(() => {
    (me(),
      (z = e(n(), 1)),
      Pe(),
      Be(),
      L(),
      de(),
      (Xe = n()),
      (Ze = Symbol.for(`react.lazy`)));
  }))();
}
var Qe, $e;
function et() {
  return (et = t(() => {
    ((Qe = e(n(), 1)),
      De(),
      B(),
      ($e = Qe.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            disabled: i = !1,
            focusableWhenDisabled: a = !1,
            nativeButton: o = !0,
            style: s,
            ...c
          } = e,
          { getButtonProps: l, buttonRef: u } = we({
            disabled: i,
            focusableWhenDisabled: a,
            native: o,
          });
        return R(`button`, e, {
          state: { disabled: i },
          ref: [t, u],
          props: [c, l],
        });
      })));
  }))();
}
var tt, nt, V;
function H() {
  return (H = t(() => {
    (i(),
      (tt = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e)),
      (nt = o),
      (V = (e, t) => (n) => {
        if (t?.variants == null) return nt(e, n?.class, n?.className);
        let { variants: r, defaultVariants: i } = t,
          a = Object.keys(r).map((e) => {
            let t = n?.[e],
              a = i?.[e];
            if (t === null) return null;
            let o = tt(t) || tt(a);
            return r[e][o];
          }),
          o =
            n &&
            Object.entries(n).reduce((e, t) => {
              let [n, r] = t;
              return (r === void 0 || (e[n] = r), e);
            }, {}),
          s = t?.compoundVariants?.reduce((e, t) => {
            let { class: n, className: r, ...a } = t;
            return Object.entries(a).every((e) => {
              let [t, n] = e;
              return Array.isArray(n)
                ? n.includes({ ...i, ...o }[t])
                : { ...i, ...o }[t] === n;
            })
              ? [...e, n, r]
              : e;
          }, []);
        return nt(e, a, s, n?.class, n?.className);
      }));
  }))();
}
var rt, it, at;
function ot() {
  return (ot = t(() => {
    ((rt = n()),
      (it = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
      }),
      (at = (0, rt.forwardRef)(
        (
          {
            color: e = `currentColor`,
            size: t = 24,
            strokeWidth: n,
            absoluteStrokeWidth: r = !1,
            className: i = ``,
            altIcon: a,
            showAlt: o = !1,
            icon: s,
            primaryColor: c,
            secondaryColor: l,
            disableSecondaryOpacity: u = !1,
            ...d
          },
          f,
        ) => {
          let p = n === void 0 ? void 0 : r ? (Number(n) * 24) / Number(t) : n,
            m = p === void 0 ? {} : { strokeWidth: p, stroke: `currentColor` },
            h = {
              ref: f,
              ...it,
              width: t,
              height: t,
              color: c || e,
              className: i,
              ...m,
              ...d,
            },
            g = [...(o && a ? a : s)]
              .sort(([, e], [, t]) => {
                let n = e.opacity !== void 0;
                return t.opacity === void 0 ? (n ? -1 : 0) : 1;
              })
              .map(([t, n]) => {
                let r = n.opacity !== void 0,
                  i = r && !u ? n.opacity : void 0,
                  a = l
                    ? {
                        ...(n.stroke === void 0
                          ? { fill: r ? l : c || e }
                          : { stroke: r ? l : c || e }),
                      }
                    : {};
                return (0, rt.createElement)(t, {
                  ...n,
                  ...m,
                  ...a,
                  opacity: i,
                  key: n.key,
                });
              });
          return (0, rt.createElement)(`svg`, h, g);
        },
      )),
      (at.displayName = `HugeiconsIcon`));
  }))();
}
var st;
function ct() {
  return (ct = t(() => {
    st = [
      [
        `path`,
        {
          d: `M15.8667 3.7804C16.7931 3.03188 17.8307 2.98644 18.9644 3.00233C19.5508 3.01055 19.844 3.01467 20.0792 3.10588C20.4524 3.2506 20.7494 3.54764 20.8941 3.92081C20.9853 4.15601 20.9894 4.4492 20.9977 5.03557C21.0136 6.16926 20.9681 7.20686 20.2196 8.13326C19.5893 8.91337 18.5059 9.32101 17.9846 10.1821C17.5866 10.8395 17.772 11.5203 17.943 12.2209L19.2228 17.4662C19.4779 18.5115 19.2838 19.1815 18.5529 19.9124C18.164 20.3013 17.8405 20.2816 17.5251 19.779L13.6627 13.6249L11.8181 15.0911C11.1493 15.6228 10.8149 15.8886 10.6392 16.2627C10.2276 17.1388 10.4889 18.4547 10.5022 19.4046C10.5096 19.9296 10.0559 20.9644 9.41391 20.9993C9.01756 21.0209 8.88283 20.5468 8.75481 20.2558L7.52234 17.4544C7.2276 16.7845 7.21552 16.7724 6.54556 16.4777L3.74415 15.2452C3.45318 15.1172 2.97914 14.9824 3.00071 14.5861C3.03565 13.9441 4.07036 13.4904 4.59536 13.4978C5.54532 13.5111 6.86122 13.7724 7.73734 13.3608C8.11142 13.1851 8.37724 12.8507 8.90888 12.1819L10.3751 10.3373L4.22103 6.47489C3.71845 6.15946 3.69872 5.83597 4.08755 5.44715C4.8185 4.7162 5.48851 4.52214 6.53377 4.77718L11.7791 6.05703C12.4797 6.22798 13.1605 6.41343 13.8179 6.0154C14.679 5.49411 15.0866 4.41074 15.8667 3.7804Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var lt;
function ut() {
  return (ut = t(() => {
    lt = [
      [
        `path`,
        {
          d: `M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12 17V13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var dt;
function ft() {
  return (ft = t(() => {
    dt = [
      [
        `path`,
        {
          d: `M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var pt;
function mt() {
  return (mt = t(() => {
    pt = [
      [
        `path`,
        {
          d: `M19 9H6.65856C5.65277 9 5.14987 9 5.02472 8.69134C4.89957 8.38268 5.25517 8.01942 5.96637 7.29289L8.21091 5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M5 15H17.3414C18.3472 15 18.8501 15 18.9753 15.3087C19.1004 15.6173 18.7448 15.9806 18.0336 16.7071L15.7891 19`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var ht;
function gt() {
  return (gt = t(() => {
    ht = [
      [
        `path`,
        {
          d: `M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var _t;
function vt() {
  return (vt = t(() => {
    _t = [
      [
        `path`,
        {
          d: `M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var yt;
function bt() {
  return (bt = t(() => {
    yt = [
      [
        `path`,
        {
          d: `M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var xt;
function St() {
  return (St = t(() => {
    xt = [
      [
        `path`,
        {
          d: `M18.5 12L4.99997 12`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Ct;
function wt() {
  return (wt = t(() => {
    Ct = [
      [
        `path`,
        {
          d: `M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Tt;
function Et() {
  return (Et = t(() => {
    Tt = [
      [
        `path`,
        {
          d: `M15.6 8.40033V12.9003C15.6 14.3915 16.8088 15.6003 18.3 15.6003C19.7912 15.6003 21 14.3915 21 12.9003V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.0265 21 15.8965 20.3302 17.4009 19.2M15.6 12.0003C15.6 13.9886 13.9882 15.6003 12 15.6003C10.0118 15.6003 8.4 13.9886 8.4 12.0003C8.4 10.0121 10.0118 8.40033 12 8.40033C13.9882 8.40033 15.6 10.0121 15.6 12.0003Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Dt;
function Ot() {
  return (Ot = t(() => {
    Dt = [
      [
        `path`,
        {
          d: `M7.99978 3.5H6.60021C4.43183 3.5 3.34764 3.5 2.67399 4.17362C2.00034 4.84724 2.00029 5.93144 2.00021 8.09982L2 13.3998C1.99992 15.5684 1.99987 16.6526 2.67353 17.3263C3.34719 18 4.43146 18 6.6 18H8.95042C10.4329 18 11.7092 19.0464 11.9999 20.5V5.5C11.0556 4.24097 9.99989 3.5 7.99978 3.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M16.0001 3.5H17.3997C19.5681 3.5 20.6523 3.5 21.3259 4.17362C21.9996 4.84724 21.9996 5.93144 21.9997 8.09982L21.9999 13.3998C22 15.5684 22 16.6526 21.3264 17.3263C20.6527 18 19.5684 18 17.3999 18H15.0495C13.567 18 12.2907 19.0464 12 20.5V5.5C12.9443 4.24097 14 3.5 16.0001 3.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var kt;
function At() {
  return (At = t(() => {
    kt = [
      [
        `path`,
        {
          d: `M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        { d: `M4 7H20`, stroke: `currentColor`, strokeWidth: `1.5`, key: `1` },
      ],
    ];
  }))();
}
var jt;
function Mt() {
  return (Mt = t(() => {
    jt = [
      [
        `path`,
        {
          d: `M16 2V6M8 2V6`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M3 10H21`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var Nt;
function Pt() {
  return (Pt = t(() => {
    Nt = [
      [
        `path`,
        {
          d: `M12.6974 3.5H11.303C10.5884 3.5 10.2311 3.5 9.91067 3.612C9.71499 3.68039 9.53113 3.77879 9.36568 3.90367C9.09474 4.10816 8.89655 4.40544 8.50018 5L8.50017 5.00001C8.29717 5.30453 7.99794 5.75337 7.87867 5.87871C7.58314 6.18927 7.19563 6.39666 6.77329 6.47029C6.60284 6.5 6.41985 6.5 6.05387 6.5C5.07379 6.5 4.58376 6.5 4.18307 6.61342C3.18074 6.89716 2.39734 7.68055 2.1136 8.68289C2.00018 9.08357 2.00018 9.57361 2.00018 10.5537V14.5C2.00018 17.3284 2.00018 18.7426 2.87886 19.6213C3.75754 20.5 5.17176 20.5 8.00018 20.5H16.0002C18.8286 20.5 20.2428 20.5 21.1215 19.6213C22.0002 18.7426 22.0002 17.3284 22.0002 14.5V10.5537C22.0002 9.57361 22.0002 9.08357 21.8868 8.68289C21.603 7.68055 20.8196 6.89716 19.8173 6.61342C19.4166 6.5 18.9266 6.5 17.9465 6.5C17.5805 6.5 17.3975 6.5 17.2271 6.47029C16.8047 6.39666 16.4172 6.18927 16.1217 5.87871C16.0024 5.75336 15.7032 5.30451 15.5002 5C15.1038 4.40544 14.9056 4.10816 14.6347 3.90367C14.4692 3.77879 14.2854 3.68039 14.0897 3.612C13.7693 3.5 13.412 3.5 12.6974 3.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M16.0002 13C16.0002 15.2091 14.2093 17 12.0002 17C9.79104 17 8.00018 15.2091 8.00018 13C8.00018 10.7909 9.79104 9 12.0002 9C14.2093 9 16.0002 10.7909 16.0002 13Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M19.1252 9.5H19.0002M19.2502 9.5C19.2502 9.63807 19.1383 9.75 19.0002 9.75C18.8621 9.75 18.7502 9.63807 18.7502 9.5C18.7502 9.36193 18.8621 9.25 19.0002 9.25C19.1383 9.25 19.2502 9.36193 19.2502 9.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var Ft;
function It() {
  return (It = t(() => {
    Ft = [
      [
        `path`,
        {
          d: `M5.43212 18.5679C6.00828 19.144 6.94243 19.144 7.51859 18.5679L12.0003 14.0863L16.4814 18.5672C17.0573 19.1431 17.9909 19.1434 18.5672 18.5679C19.144 17.9919 19.1443 17.0573 18.5679 16.4809L14.0868 12L18.5679 7.51913C19.1438 6.94326 19.1441 6.0097 18.5686 5.43346C17.9925 4.85669 17.0578 4.85638 16.4814 5.43278L12.0003 9.91365L7.51859 5.4321C6.94243 4.85597 6.00828 4.85597 5.43212 5.4321C4.85596 6.00823 4.85596 6.94232 5.43212 7.51845L9.91387 12L5.43212 16.4816C4.85596 17.0577 4.85596 17.9918 5.43212 18.5679Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Lt;
function Rt() {
  return (Rt = t(() => {
    Lt = [
      [
        `path`,
        {
          d: `M7.5 14.5C7.5 11.2002 7.5 9.55025 8.52513 8.52513C9.55025 7.5 11.2002 7.5 14.5 7.5C17.7998 7.5 19.4497 7.5 20.4749 8.52513C21.5 9.55025 21.5 11.2002 21.5 14.5C21.5 17.7998 21.5 19.4497 20.4749 20.4749C19.4497 21.5 17.7998 21.5 14.5 21.5C11.2002 21.5 9.55025 21.5 8.52513 20.4749C7.5 19.4497 7.5 17.7998 7.5 14.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M7.5 16.5C6.10355 16.5 5.40533 16.5 4.84402 16.3036C3.83866 15.9518 3.0482 15.1613 2.69641 14.156C2.5 13.5947 2.5 12.8964 2.5 11.5V9.5C2.5 6.20017 2.5 4.55025 3.52513 3.52513C4.55025 2.5 6.20017 2.5 9.5 2.5H11.5C12.8964 2.5 13.5947 2.5 14.156 2.69641C15.1613 3.0482 15.9518 3.83866 16.3036 4.84402C16.5 5.40533 16.5 6.10355 16.5 7.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var zt;
function Bt() {
  return (Bt = t(() => {
    zt = [
      [
        `path`,
        {
          d: `M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M10 16H11.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M14.5 16L18 16`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M2 9H22`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var Vt;
function Ht() {
  return (Ht = t(() => {
    Vt = [
      [
        `path`,
        {
          d: `M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M9.5 16.5L9.5 10.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M14.5 16.5L14.5 10.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var Ut;
function Wt() {
  return (Wt = t(() => {
    Ut = [
      [
        `path`,
        {
          d: `M16.9504 12.1817C17.1981 12.814 16.5076 13.5726 15.1267 15.0899C13.6702 16.6902 12.9201 17.4904 12 17.5C11.0799 17.4904 10.3298 16.6902 8.87331 15.0899C7.49239 13.5726 6.80193 12.814 7.04964 12.1817C7.05868 12.1586 7.06851 12.1359 7.0791 12.1135C7.34928 11.542 8.24477 11.5029 10 11.5002V4.99998C10 4.53501 10 4.30253 10.0511 4.11179C10.1898 3.59414 10.5941 3.1898 11.1118 3.05111C11.3025 3 11.535 3 12 3C12.4649 3 12.6974 3 12.8882 3.05111C13.4058 3.1898 13.8102 3.59414 13.9489 4.11179C14 4.30253 14 4.53501 14 4.99998V11.5002C15.7552 11.5029 16.6507 11.542 16.9209 12.1135C16.9315 12.1359 16.9413 12.1586 16.9504 12.1817Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M5.00006 21H19.0001`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Gt;
function Kt() {
  return (Kt = t(() => {
    Gt = [
      [
        `path`,
        {
          d: `M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var qt;
function Jt() {
  return (Jt = t(() => {
    qt = [
      [
        `path`,
        {
          d: `M6.43385 6.51953C4.22009 7.89049 2.93281 9.86457 2.31858 11.0339C2.10621 11.4382 2.00003 11.6403 2 12.0082C1.99997 12.3761 2.10584 12.5777 2.3176 12.981C3.32862 14.9066 6.16702 19.0195 11.9669 19.0195C14.2454 19.0195 16.0669 18.3848 17.5 17.4972`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M9.87868 9.87868C9.33579 10.4216 9 11.1716 9 12C9 13.6569 10.3431 15 12 15C12.8284 15 13.5784 14.6642 14.1213 14.1213`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M2 2L22 22`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M10 5.14847C10.5934 5.05255 11.224 5 11.8936 5C17.7747 5 20.6528 9.05385 21.6779 10.9517C21.8927 11.3492 22 11.548 22 11.9106C22 12.2733 21.8921 12.4727 21.6765 12.8717C21.3678 13.4428 20.8916 14.2085 20.2167 15`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var Yt;
function Xt() {
  return (Xt = t(() => {
    Yt = [
      [
        `path`,
        {
          d: `M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var Zt;
function Qt() {
  return (Qt = t(() => {
    Zt = [
      [
        `path`,
        {
          d: `M12 2V4`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12 8V10`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M17 12H22`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M7 12H2`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
      [
        `path`,
        {
          d: `M12 14V16`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `4`,
        },
      ],
      [
        `path`,
        {
          d: `M12 20V22`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `5`,
        },
      ],
      [
        `path`,
        {
          d: `M5.00002 15C5.00002 15 7.99999 12.7905 8 12C8.00001 11.2094 5 9 5 9`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `6`,
        },
      ],
      [
        `path`,
        {
          d: `M19 15C19 15 16 12.7905 16 12C16 11.2094 19 9 19 9`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `7`,
        },
      ],
    ];
  }))();
}
var $t;
function en() {
  return (en = t(() => {
    $t = [
      [
        `path`,
        {
          d: `M12.5 19L12.5 22`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M10.5 22H14.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `circle`,
        {
          cx: `7`,
          cy: `7`,
          r: `7`,
          transform: `matrix(-1 0 0 1 20.5 2)`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M8.5 4C9.15431 4.0385 9.49236 4.35899 10.0735 4.97301C11.1231 6.08206 12.1727 6.1746 12.8724 5.80492C13.922 5.2504 13.04 4.35221 14.2719 3.86409C15.0748 3.54595 15.1868 2.68026 14.7399 2`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
      [
        `path`,
        {
          d: `M20 10C18.5 10 18.2338 11.2468 17 11C14.5 10.5 13.7916 11.0589 13.7916 12.2511C13.7916 13.4432 13.7916 13.4432 13.2717 14.3373C12.9335 14.9189 12.8153 15.5004 13.4894 16`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `4`,
        },
      ],
      [
        `path`,
        {
          d: `M6.5 2C4.64864 3.79995 3.5 6.3082 3.5 9.08251C3.5 14.5598 7.97715 19 13.5 19C16.2255 19 18.6962 17.9187 20.5 16.165`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `5`,
        },
      ],
    ];
  }))();
}
var tn;
function nn() {
  return (nn = t(() => {
    tn = [
      [
        `circle`,
        {
          cx: `12`,
          cy: `12`,
          r: `10`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var rn;
function an() {
  return (an = t(() => {
    rn = [
      [
        `path`,
        {
          d: `M3.49744 5H7.99744M7.99744 5H13.4974M7.99744 5V3.5M4.99744 13.5C7.49744 11.5 10.4974 7.5 10.9974 5M6.49744 7.5C6.99744 9 8.99744 11.5 9.99744 12`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M4.99744 13.5C7.49744 11.5 10.4974 7.5 10.9974 5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M11.4974 20.5005L14.1591 14.2898C14.9451 12.456 15.338 11.5391 15.9974 11.5391C16.6568 11.5391 17.0498 12.456 17.8357 14.2898L20.4974 20.5005`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M13.4974 16.5H18.4974`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var on;
function sn() {
  return (sn = t(() => {
    on = [
      [
        `path`,
        {
          d: `M3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M2.5 9L21.5 9`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M8 21.5L8 9`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var cn;
function ln() {
  return (ln = t(() => {
    cn = [
      [
        `path`,
        {
          d: `M10 11.6273L5.07498 17.4215C4.41411 18.199 3.23201 18.2464 2.51138 17.5241C1.79074 16.8019 1.83795 15.6172 2.61376 14.9549L8.3953 10.019`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M18 10.0667L13.0476 15.03M9.95238 2.00146L5 6.96472M9.33337 2.62183L5.61908 6.34428C5.61908 6.34428 7.47622 8.82591 9.33337 10.6871C11.1905 12.5484 13.6667 14.4096 13.6667 14.4096L17.381 10.6871C17.381 10.6871 15.5238 8.2055 13.6667 6.34428C11.8096 4.48306 9.33337 2.62183 9.33337 2.62183Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M20 11.659L22 10.019M20 14.9389L22 16.0322`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M11.002 21.9988H20.9998M12.2267 21.9988C12.7782 21.0113 13.19 19.1216 15.142 19.0158C15.7218 18.9843 16.3117 18.9843 16.8914 19.0158C18.8434 19.1216 19.2572 21.0113 19.8087 21.9988`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var un;
function dn() {
  return (dn = t(() => {
    un = [
      [
        `path`,
        {
          d: `M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M11.3333 10.6667C12.3883 11.7216 13.7778 12.7937 13.7778 12.7937L15.6825 10.8889C15.6825 10.8889 14.6105 9.49939 13.5556 8.44444C12.5006 7.3895 11.1111 6.31746 11.1111 6.31746L9.20635 8.22222C9.20635 8.22222 10.2784 9.61172 11.3333 10.6667ZM11.3333 10.6667L8 14M16 10.5714L13.4603 13.1111M11.4286 6L8.88889 8.53968`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M8 18H16`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var fn;
function pn() {
  return (pn = t(() => {
    fn = [
      [
        `path`,
        {
          d: `M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var mn;
function hn() {
  return (hn = t(() => {
    mn = [
      [
        `path`,
        {
          d: `M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 13L12 16`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var gn;
function _n() {
  return (_n = t(() => {
    gn = [
      [
        `path`,
        {
          d: `M15.5 8.04045C15.4588 6.87972 15.3216 6.15451 14.8645 5.58671C14.2114 4.77536 13.0944 4.52064 10.8605 4.01121L9.85915 3.78286C6.4649 3.00882 4.76777 2.6218 3.63388 3.51317C2.5 4.40454 2.5 6.1257 2.5 9.56803V14.432C2.5 17.8743 2.5 19.5955 3.63388 20.4868C4.76777 21.3782 6.4649 20.9912 9.85915 20.2171L10.8605 19.9888C13.0944 19.4794 14.2114 19.2246 14.8645 18.4133C15.3216 17.8455 15.4588 17.1203 15.5 15.9595`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M18.5 9.01172C18.5 9.01172 21.5 11.2212 21.5 12.0117C21.5 12.8023 18.5 15.0117 18.5 15.0117M21 12.0117H8.49998`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var vn;
function yn() {
  return (yn = t(() => {
    vn = [
      [
        `path`,
        {
          d: `M15 6.5H9C6.17157 6.5 4.75736 6.5 3.87868 7.37868C3 8.25736 3 9.67157 3 12.5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V12.5C21 9.67157 21 8.25736 20.1213 7.37868C19.2426 6.5 17.8284 6.5 15 6.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M9 6.5V6C9 4.58579 9 3.87868 9.43934 3.43934C9.87868 3 10.5858 3 12 3C13.4142 3 14.1213 3 14.5607 3.43934C15 3.87868 15 4.58579 15 6V6.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M7 6.5V21`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M17 6.5V21`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var bn;
function xn() {
  return (xn = t(() => {
    bn = [
      [
        `path`,
        {
          d: `M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Sn;
function Cn() {
  return (Cn = t(() => {
    Sn = [
      [
        `path`,
        {
          d: `M5.25345 4.19584L4.02558 4.90813C3.03739 5.48137 2.54329 5.768 2.27164 6.24483C2 6.72165 2 7.30233 2 8.46368V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.8856 21 20.8284 21 21.4142 20.4013C22 19.8026 22 18.8389 22 16.9117V10.1715C22 8.24423 22 7.2806 21.4142 6.68188C20.8284 6.08316 19.8856 6.08316 18 6.08316H15.9214C15.004 6.08316 14.9964 6.08139 14.1715 5.6712L10.8399 4.01463C9.44884 3.32297 8.75332 2.97714 8.01238 3.00117C7.27143 3.02521 6.59877 3.41542 5.25345 4.19584Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M8 3L8 17.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M15 6.5L15 20.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var wn;
function Tn() {
  return (Tn = t(() => {
    wn = [
      [
        `path`,
        {
          d: `M4 5L20 5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M4 12L20 12`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M4 19L20 19`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var En;
function Dn() {
  return (Dn = t(() => {
    En = [
      [
        `path`,
        {
          d: `M20 12L4 12`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var On;
function kn() {
  return (kn = t(() => {
    On = [
      [
        `path`,
        {
          d: `M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var An;
function jn() {
  return (jn = t(() => {
    An = [
      [
        `path`,
        {
          d: `M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Mn;
function Nn() {
  return (Nn = t(() => {
    Mn = [
      [
        `path`,
        {
          d: `M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M18.6461 4.52795C18.2489 4.89346 18 5.41766 18 6C18 7.10457 18.8954 8 20 8C20.3793 8 20.7339 7.89441 21.0361 7.71103C21.6139 7.36038 22 6.72527 22 6C22 4.89543 21.1046 4 20 4C19.4778 4 19.0023 4.20016 18.6461 4.52795ZM18.6461 4.52795C16.8794 2.95541 14.5513 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6625 21.9833 11.3289 21.9506 11`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Pn;
function Fn() {
  return (Fn = t(() => {
    Pn = [
      [
        `path`,
        {
          d: `M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `circle`,
        {
          cx: `9.5`,
          cy: `8.5`,
          r: `1.5`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `circle`,
        {
          cx: `16.5`,
          cy: `9.5`,
          r: `1.5`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
      [
        `path`,
        {
          d: `M7.125 15H7M7.25 15C7.25 15.1381 7.13807 15.25 7 15.25C6.86193 15.25 6.75 15.1381 6.75 15C6.75 14.8619 6.86193 14.75 7 14.75C7.13807 14.75 7.25 14.8619 7.25 15Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `3`,
        },
      ],
    ];
  }))();
}
var In;
function Ln() {
  return (Ln = t(() => {
    In = [
      [
        `path`,
        {
          d: `M13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M9 3V21`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Rn;
function zn() {
  return (zn = t(() => {
    Rn = [
      [
        `path`,
        {
          d: `M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M11 20H17`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Bn;
function Vn() {
  return (Vn = t(() => {
    Bn = [
      [
        `path`,
        {
          d: `M17.9405 12.4311C17.7073 13.3831 16.4665 14.0669 13.9848 15.4344C11.2857 16.9217 9.93612 17.6654 8.84297 17.3789C8.47274 17.2819 8.13174 17.1112 7.84541 16.8797C7 16.1963 7 14.7773 7 11.9394C7 9.10157 7 7.68264 7.84541 6.99915C8.13174 6.76766 8.47274 6.59704 8.84297 6.5C9.93612 6.21349 11.2857 6.95715 13.9848 8.44448C16.4665 9.81199 17.7073 10.4957 17.9405 11.4478C18.0198 11.7717 18.0198 12.1072 17.9405 12.4311Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M8 17L16 9.61432M8 7L16 14.3857`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var Hn;
function Un() {
  return (Un = t(() => {
    Hn = [
      [
        `path`,
        {
          d: `M12 4V20M20 12H4`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Wn;
function Gn() {
  return (Gn = t(() => {
    Wn = [
      [
        `path`,
        {
          d: `M9.39584 4.5H8.35417C5.40789 4.5 3.93475 4.5 3.01946 5.37868C2.10417 6.25736 2.10417 7.67157 2.10417 10.5V14.5C2.10417 17.3284 2.10417 18.7426 3.01946 19.6213C3.93475 20.5 5.40789 20.5 8.35417 20.5H12.5608C15.5071 20.5 16.9802 20.5 17.8955 19.6213C18.4885 19.052 18.6973 18.2579 18.7708 17`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M16.1667 7V3.85355C16.1667 3.65829 16.3316 3.5 16.535 3.5C16.6326 3.5 16.7263 3.53725 16.7954 3.60355L21.5275 8.14645C21.7634 8.37282 21.8958 8.67986 21.8958 9C21.8958 9.32014 21.7634 9.62718 21.5275 9.85355L16.7954 14.3964C16.7263 14.4628 16.6326 14.5 16.535 14.5C16.3316 14.5 16.1667 14.3417 16.1667 14.1464V11H13.1157C8.875 11 7.3125 14.5 7.3125 14.5V12C7.3125 9.23858 9.64435 7 12.5208 7H16.1667Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Kn;
function qn() {
  return (qn = t(() => {
    Kn = [
      [
        `path`,
        {
          d: `M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371L21 7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var Jn;
function Yn() {
  return (Yn = t(() => {
    Jn = [
      [
        `path`,
        {
          d: `M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var Xn;
function Zn() {
  return (Zn = t(() => {
    Xn = [
      [
        `path`,
        {
          d: `M20.7275 14.365C21 14.8998 21 15.5999 21 17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21C15.5999 21 14.8998 21 14.365 20.7275C13.8946 20.4878 13.5122 20.1054 13.2725 19.635C13 19.1002 13 18.4001 13 17C13 15.5999 13 14.8998 13.2725 14.365C13.5122 13.8946 13.8946 13.5122 14.365 13.2725C14.8998 13 15.5999 13 17 13C18.4001 13 19.1002 13 19.635 13.2725C20.1054 13.5122 20.4878 13.8946 20.7275 14.365Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M15.9235 10C15.8832 9.75397 15.8216 9.54965 15.7275 9.36502C15.4878 8.89462 15.1054 8.51217 14.635 8.27248C14.1002 8 13.4001 8 12 8C10.5999 8 9.8998 8 9.36502 8.27248C8.89462 8.51217 8.51217 8.89462 8.27248 9.36502C8 9.8998 8 10.5999 8 12C8 13.4001 8 14.1002 8.27248 14.635C8.51217 15.1054 8.89462 15.4878 9.36502 15.7275C9.54965 15.8216 9.75397 15.8832 10 15.9235`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
      [
        `path`,
        {
          d: `M10.9235 5C10.8832 4.75397 10.8216 4.54965 10.7275 4.36502C10.4878 3.89462 10.1054 3.51217 9.63498 3.27248C9.1002 3 8.40013 3 7 3C5.59987 3 4.8998 3 4.36502 3.27248C3.89462 3.51217 3.51217 3.89462 3.27248 4.36502C3 4.8998 3 5.59987 3 7C3 8.40013 3 9.1002 3.27248 9.63498C3.51217 10.1054 3.89462 10.4878 4.36502 10.7275C4.54965 10.8216 4.75397 10.8832 5 10.9235`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `2`,
        },
      ],
    ];
  }))();
}
var Qn;
function $n() {
  return ($n = t(() => {
    Qn = [
      [
        `path`,
        {
          d: `M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var er;
function tr() {
  return (tr = t(() => {
    er = [
      [
        `path`,
        {
          d: `M21.8606 5.39176C22.2875 6.49635 21.6888 7.2526 20.5301 7.99754C19.5951 8.5986 18.4039 9.24975 17.1417 10.363C15.9044 11.4543 14.6968 12.7687 13.6237 14.0625C12.5549 15.351 11.6465 16.586 11.0046 17.5005C10.5898 18.0914 10.011 18.9729 10.011 18.9729C9.60281 19.6187 8.86895 20.0096 8.08206 19.9998C7.295 19.99 6.57208 19.5812 6.18156 18.9251C5.18328 17.248 4.41296 16.5857 4.05891 16.3478C3.11158 15.7112 2 15.6171 2 14.1335C2 12.9554 2.99489 12.0003 4.22216 12.0003C5.08862 12.0323 5.89398 12.373 6.60756 12.8526C7.06369 13.1591 7.54689 13.5645 8.04948 14.0981C8.63934 13.2936 9.35016 12.3653 10.147 11.4047C11.3042 10.0097 12.6701 8.51309 14.1349 7.22116C15.5748 5.95115 17.2396 4.76235 19.0042 4.13381C20.1549 3.72397 21.4337 4.28718 21.8606 5.39176Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
    ];
  }))();
}
var nr;
function rr() {
  return (rr = t(() => {
    nr = [
      [
        `path`,
        {
          d: `M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var ir;
function ar() {
  return (ar = t(() => {
    ir = [
      [
        `circle`,
        {
          cx: `12`,
          cy: `7`,
          r: `4`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `0`,
        },
      ],
      [
        `path`,
        {
          d: `M12 14C7 14 4 16.5 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.5 17 14 12 14Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.5`,
          key: `1`,
        },
      ],
    ];
  }))();
}
var or;
function sr() {
  return (sr = t(() => {
    (ct(),
      ut(),
      ft(),
      mt(),
      gt(),
      vt(),
      bt(),
      St(),
      wt(),
      Et(),
      Ot(),
      At(),
      Mt(),
      Pt(),
      It(),
      Rt(),
      Bt(),
      Ht(),
      Wt(),
      Kt(),
      Xt(),
      Jt(),
      Qt(),
      en(),
      nn(),
      an(),
      sn(),
      ln(),
      dn(),
      pn(),
      hn(),
      _n(),
      yn(),
      xn(),
      Cn(),
      Tn(),
      Dn(),
      kn(),
      jn(),
      Nn(),
      Fn(),
      Ln(),
      zn(),
      Vn(),
      Un(),
      Gn(),
      qn(),
      Yn(),
      Zn(),
      $n(),
      tr(),
      rr(),
      ar(),
      (or = {
        alert: lt,
        apple: dt,
        "arrow-right": xt,
        at: Tt,
        "book-open": Dt,
        bookmark: kt,
        calendar: jt,
        camera: Nt,
        check: er,
        delete: Vt,
        download: Ut,
        chevronDown: ht,
        "chevron-left": _t,
        "chevron-right": yt,
        "chevron-up": Ct,
        "chevron-up-down": nr,
        close: Ft,
        copy: Lt,
        "credit-card": zt,
        document: un,
        edit: Rn,
        "external-link": Gt,
        eye: Yt,
        "eye-off": qt,
        fold: Zt,
        globe: $t,
        help: tn,
        languages: rn,
        layout: on,
        legal: cn,
        loading: Mn,
        location: fn,
        lock: mn,
        logout: gn,
        luggage: vn,
        mail: bn,
        map: Sn,
        menu: wn,
        minus: En,
        moon: On,
        more: An,
        palette: Pn,
        "panel-left": In,
        plane: st,
        "play-store": Bn,
        plus: Hn,
        "photo-stack": Xn,
        share: Wn,
        shield: Kn,
        sparkles: Jn,
        sun: Qn,
        swap: pt,
        user: ir,
      }),
      Object.keys(or));
  }))();
}
var cr, lr, ur, dr, U;
function W() {
  return (W = t(() => {
    (ot(),
      (cr = n()),
      sr(),
      (lr = r()),
      (ur = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 28,
        "2xl": 32,
        "3xl": 40,
        "4xl": 48,
        "5xl": 56,
      }),
      (dr = {
        xs: 1.5,
        sm: 1.5,
        md: 1.5,
        lg: 1.5,
        xl: 1.5,
        "2xl": 1.5,
        "3xl": 2,
        "4xl": 2,
        "5xl": 2,
      }),
      (U = (0, cr.forwardRef)(
        (
          {
            name: e,
            size: t = `md`,
            color: n = `currentColor`,
            strokeWidth: r,
            className: i,
            ...a
          },
          o,
        ) => {
          let s = or[e];
          if (!s) return null;
          let c = ur[t],
            l = r ?? dr[t];
          return (0, lr.jsx)(at, {
            ref: o,
            icon: s,
            size: c,
            color: n,
            strokeWidth: l,
            className: i,
            ...a,
          });
        },
      )),
      (U.displayName = `Icon`),
      (U.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Icon`,
        props: {
          name: { required: !0, tsType: { name: `unknown` }, description: `` },
          size: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,
              elements: [
                { name: `literal`, value: `"xs"` },
                { name: `literal`, value: `"sm"` },
                { name: `literal`, value: `"md"` },
                { name: `literal`, value: `"lg"` },
                { name: `literal`, value: `"xl"` },
                { name: `literal`, value: `"2xl"` },
                { name: `literal`, value: `"3xl"` },
                { name: `literal`, value: `"4xl"` },
                { name: `literal`, value: `"5xl"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"md"`, computed: !1 },
          },
          color: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"currentColor"`, computed: !1 },
          },
          strokeWidth: {
            required: !1,
            tsType: { name: `number` },
            description: ``,
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function fr({
  className: e,
  variant: t = `default`,
  size: n = `default`,
  icon: r,
  iconSize: i,
  iconPosition: a = `start`,
  iconProps: o,
  isLoading: c = !1,
  disabled: l,
  children: u,
  nativeButton: d,
  render: f,
  ...p
}) {
  let m = n ?? `default`,
    h = i ?? mr[m],
    g = c || !!r,
    _ = m.startsWith(`icon`) && g,
    v = g ? (c ? `loading` : (r ?? null)) : null,
    y = (e) =>
      v
        ? (0, G.jsx)(`span`, {
            "data-icon": e,
            className: s(c && `animate-spin`),
            children: (0, G.jsx)(U, {
              name: v,
              size: h,
              "aria-hidden": `true`,
              ...o,
            }),
          })
        : null;
  return (0, G.jsx)($e, {
    "data-slot": `button`,
    "data-variant": t,
    "data-size": m,
    className: s(pr({ variant: t, size: m, className: e })),
    disabled: l || c,
    "aria-busy": c,
    render: f,
    nativeButton: d ?? !f,
    ...p,
    children: _
      ? y(`start`)
      : (0, G.jsxs)(G.Fragment, {
          children: [
            a === `start` && y(`start`),
            u,
            a === `end` && !c && y(`end`),
          ],
        }),
  });
}
var G, pr, mr;
function hr() {
  return (hr = t(() => {
    (et(),
      H(),
      n(),
      a(),
      W(),
      (G = r()),
      (pr = V(
        `group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-md font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-[0.98] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_[data-icon=inline-end]]:transition-transform hover:[&_[data-icon=inline-end]]:translate-x-0.5 motion-reduce:hover:[&_[data-icon=inline-end]]:translate-x-0`,
        {
          variants: {
            variant: {
              default: `bg-primary text-primary-foreground hover:bg-primary/80`,
              outline: `border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:hover:bg-input/50`,
              secondary: `bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
              ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
              destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
              link: `text-primary underline-offset-4 hover:underline`,
            },
            size: {
              default: `h-12 gap-1.5 px-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
              xs: `h-8 gap-1 px-3 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,
              sm: `h-10 gap-1 px-6 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,
              lg: `h-14 gap-1.5 px-12 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
              icon: `size-8`,
              "icon-xs": `size-6 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,
              "icon-sm": `size-7 in-data-[slot=button-group]:rounded-lg`,
              "icon-lg": `size-9`,
            },
          },
          defaultVariants: { variant: `default`, size: `default` },
        },
      )),
      (mr = {
        xs: `xs`,
        sm: `xs`,
        default: `sm`,
        lg: `sm`,
        icon: `sm`,
        "icon-xs": `xs`,
        "icon-sm": `sm`,
        "icon-lg": `sm`,
      }),
      (fr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Button`,
        props: {
          icon: { required: !1, tsType: { name: `unknown` }, description: `` },
          iconPosition: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"start" | "end"`,
              elements: [
                { name: `literal`, value: `"start"` },
                { name: `literal`, value: `"end"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"start"`, computed: !1 },
          },
          iconSize: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,
              elements: [
                { name: `literal`, value: `"xs"` },
                { name: `literal`, value: `"sm"` },
                { name: `literal`, value: `"md"` },
                { name: `literal`, value: `"lg"` },
                { name: `literal`, value: `"xl"` },
                { name: `literal`, value: `"2xl"` },
                { name: `literal`, value: `"3xl"` },
                { name: `literal`, value: `"4xl"` },
                { name: `literal`, value: `"5xl"` },
              ],
            },
            description: ``,
          },
          iconProps: {
            required: !1,
            tsType: {
              name: `Omit`,
              elements: [
                {
                  name: `ReactComponentProps`,
                  raw: `React.ComponentProps<typeof Icon>`,
                  elements: [{ name: `Icon` }],
                },
                {
                  name: `union`,
                  raw: `"name" | "size" | "aria-hidden"`,
                  elements: [
                    { name: `literal`, value: `"name"` },
                    { name: `literal`, value: `"size"` },
                    { name: `literal`, value: `"aria-hidden"` },
                  ],
                },
              ],
              raw: `Omit<
  React.ComponentProps<typeof Icon>,
  "name" | "size" | "aria-hidden"
>`,
            },
            description: ``,
          },
          isLoading: {
            required: !1,
            tsType: { name: `boolean` },
            description: ``,
            defaultValue: { value: `false`, computed: !1 },
          },
          variant: {
            defaultValue: { value: `"default"`, computed: !1 },
            required: !1,
          },
          size: {
            defaultValue: { value: `"default"`, computed: !1 },
            required: !1,
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
var gr, _r, vr;
function yr() {
  return (yr = t(() => {
    (H(),
      (gr = n()),
      a(),
      (_r = V(``, {
        variants: {
          size: {
            "2xs": `text-2xs`,
            xs: `text-xs`,
            sm: `text-sm`,
            base: `text-base`,
            lg: `text-lg`,
            xl: `text-xl`,
            "2xl": `text-2xl`,
            "3xl": `text-3xl`,
            "4xl": `text-4xl`,
            "5xl": `text-5xl`,
            "6xl": `text-6xl`,
            "7xl": `text-7xl`,
          },
          tone: { default: `text-foreground`, muted: `text-muted-foreground` },
          weight: {
            normal: `font-normal`,
            medium: `font-medium`,
            semibold: `font-semibold`,
            bold: `font-bold`,
          },
        },
        defaultVariants: { size: `base`, tone: `default`, weight: `normal` },
      })),
      (vr = (0, gr.forwardRef)(
        ({ as: e = `p`, className: t, size: n, tone: r, weight: i, ...a }, o) =>
          (0, gr.createElement)(e, {
            ref: o,
            "data-slot": `text`,
            className: s(_r({ size: n, tone: r, weight: i, className: t })),
            ...a,
          }),
      )),
      (vr.displayName = `Text`),
      (vr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Text`,
        props: {
          as: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"p" | "span" | "div" | "label" | "strong" | "em" | "small"`,
              elements: [
                { name: `literal`, value: `"p"` },
                { name: `literal`, value: `"span"` },
                { name: `literal`, value: `"div"` },
                { name: `literal`, value: `"label"` },
                { name: `literal`, value: `"strong"` },
                { name: `literal`, value: `"em"` },
                { name: `literal`, value: `"small"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"p"`, computed: !1 },
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
var br, xr, Sr, Cr, wr;
function Tr() {
  return (Tr = t(() => {
    (H(),
      (br = n()),
      a(),
      (xr = V(`font-display`, {
        variants: {
          size: {
            sm: `text-lg font-bold`,
            md: `text-xl font-bold`,
            lg: `text-2xl font-bold`,
            xl: `text-3xl font-bold`,
            "2xl": `text-4xl font-bold`,
            "display-sm": `text-display-sm`,
            "display-md": `text-display-md`,
            "display-lg": `text-display-lg`,
            "display-hero": `text-display-hero`,
          },
        },
      })),
      (Sr = { 1: `h1`, 2: `h2`, 3: `h3`, 4: `h4` }),
      (Cr = { 1: `2xl`, 2: `xl`, 3: `lg`, 4: `md` }),
      (wr = (0, br.forwardRef)(({ level: e, size: t, className: n, ...r }, i) =>
        (0, br.createElement)(Sr[e], {
          ref: i,
          "data-slot": `heading`,
          "data-level": e,
          className: s(xr({ size: t ?? Cr[e], className: n })),
          ...r,
        }),
      )),
      (wr.displayName = `Heading`),
      (wr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Heading`,
        props: {
          level: {
            required: !0,
            tsType: {
              name: `union`,
              raw: `1 | 2 | 3 | 4`,
              elements: [
                { name: `literal`, value: `1` },
                { name: `literal`, value: `2` },
                { name: `literal`, value: `3` },
                { name: `literal`, value: `4` },
              ],
            },
            description: ``,
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
function Er(e) {
  return R(e.defaultTagName ?? `div`, e, e);
}
function Dr() {
  return (Dr = t(() => {
    B();
  }))();
}
function Or({
  href: e,
  external: t = !1,
  underline: n,
  render: r,
  className: i,
  ref: a,
  ...o
}) {
  return Er({
    render: r ?? (0, kr.jsx)(`a`, {}),
    ref: a,
    state: { external: t },
    props: {
      href: e,
      target: t ? `_blank` : void 0,
      rel: t ? `noopener` : void 0,
      "data-slot": `link`,
      className: s(Ar({ underline: n, className: i })),
      ...o,
    },
    defaultTagName: `a`,
  });
}
var kr, Ar;
function jr() {
  return (jr = t(() => {
    (Dr(),
      H(),
      a(),
      (kr = r()),
      (Ar = V(`text-primary transition-colors`, {
        variants: {
          underline: {
            always: `underline underline-offset-4`,
            hover: `no-underline hover:underline underline-offset-4`,
            none: `no-underline`,
          },
        },
        defaultVariants: { underline: `hover` },
      })));
  }))();
}
var Mr, Nr, Pr;
function Fr() {
  return (Fr = t(() => {
    (H(),
      (Mr = n()),
      a(),
      (Nr = V(`mx-auto w-full px-gutter-sm sm:px-gutter-md`, {
        variants: {
          size: {
            prose: `max-w-reading`,
            default: `max-w-content`,
            wide: `max-w-wide`,
            full: `max-w-none`,
          },
        },
        defaultVariants: { size: `default` },
      })),
      (Pr = (0, Mr.forwardRef)(
        ({ as: e = `div`, size: t, className: n, ...r }, i) =>
          (0, Mr.createElement)(e, {
            ref: i,
            "data-slot": `container`,
            className: s(Nr({ size: t, className: n })),
            ...r,
          }),
      )),
      (Pr.displayName = `Container`),
      (Pr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Container`,
        props: {
          as: {
            required: !1,
            tsType: { name: `ReactElementType`, raw: `React.ElementType` },
            description: ``,
            defaultValue: { value: `"div"`, computed: !1 },
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
function Ir(e) {
  return Lr[e];
}
var Lr;
function Rr() {
  return (Rr = t(() => {
    Lr = {
      0: `gap-0`,
      0.5: `gap-0.5`,
      1: `gap-1`,
      1.5: `gap-1.5`,
      2: `gap-2`,
      3: `gap-3`,
      4: `gap-4`,
      5: `gap-5`,
      6: `gap-6`,
      8: `gap-8`,
      10: `gap-10`,
      12: `gap-12`,
    };
  }))();
}
var zr, Br, Vr;
function Hr() {
  return (Hr = t(() => {
    (H(),
      (zr = n()),
      a(),
      Rr(),
      (Br = V(`flex`, {
        variants: {
          direction: { row: `flex-row`, column: `flex-col` },
          align: {
            start: `items-start`,
            center: `items-center`,
            end: `items-end`,
            stretch: `items-stretch`,
            baseline: `items-baseline`,
          },
        },
        defaultVariants: { direction: `column`, align: `stretch` },
      })),
      (Vr = (0, zr.forwardRef)(
        (
          {
            as: e = `div`,
            direction: t,
            align: n,
            gap: r = 4,
            className: i,
            ...a
          },
          o,
        ) =>
          (0, zr.createElement)(e, {
            ref: o,
            "data-slot": `stack`,
            className: s(Br({ direction: t, align: n, className: i }), Ir(r)),
            ...a,
          }),
      )),
      (Vr.displayName = `Stack`),
      (Vr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Stack`,
        props: {
          gap: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `keyof typeof gapClassNames`,
              elements: [
                { name: `literal`, value: `0` },
                { name: `literal`, value: `0.5` },
                { name: `literal`, value: `1` },
                { name: `literal`, value: `1.5` },
                { name: `literal`, value: `2` },
                { name: `literal`, value: `3` },
                { name: `literal`, value: `4` },
                { name: `literal`, value: `5` },
                { name: `literal`, value: `6` },
                { name: `literal`, value: `8` },
                { name: `literal`, value: `10` },
                { name: `literal`, value: `12` },
              ],
            },
            description: ``,
            defaultValue: { value: `4`, computed: !1 },
          },
          as: {
            required: !1,
            tsType: { name: `ReactElementType`, raw: `React.ElementType` },
            description: ``,
            defaultValue: { value: `"div"`, computed: !1 },
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
function Ur(e) {
  if (e !== void 0)
    return typeof e == `number`
      ? Wr.base[e]
      : Object.keys(e)
          .map((t) => {
            let n = e[t];
            return n === void 0 ? void 0 : Wr[t][n];
          })
          .filter(Boolean)
          .join(` `);
}
var Wr;
function Gr() {
  return (Gr = t(() => {
    Wr = {
      base: {
        1: `grid-cols-1`,
        2: `grid-cols-2`,
        3: `grid-cols-3`,
        4: `grid-cols-4`,
        5: `grid-cols-5`,
        6: `grid-cols-6`,
        7: `grid-cols-7`,
        8: `grid-cols-8`,
        9: `grid-cols-9`,
        10: `grid-cols-10`,
        11: `grid-cols-11`,
        12: `grid-cols-12`,
      },
      sm: {
        1: `sm:grid-cols-1`,
        2: `sm:grid-cols-2`,
        3: `sm:grid-cols-3`,
        4: `sm:grid-cols-4`,
        5: `sm:grid-cols-5`,
        6: `sm:grid-cols-6`,
        7: `sm:grid-cols-7`,
        8: `sm:grid-cols-8`,
        9: `sm:grid-cols-9`,
        10: `sm:grid-cols-10`,
        11: `sm:grid-cols-11`,
        12: `sm:grid-cols-12`,
      },
      md: {
        1: `md:grid-cols-1`,
        2: `md:grid-cols-2`,
        3: `md:grid-cols-3`,
        4: `md:grid-cols-4`,
        5: `md:grid-cols-5`,
        6: `md:grid-cols-6`,
        7: `md:grid-cols-7`,
        8: `md:grid-cols-8`,
        9: `md:grid-cols-9`,
        10: `md:grid-cols-10`,
        11: `md:grid-cols-11`,
        12: `md:grid-cols-12`,
      },
      lg: {
        1: `lg:grid-cols-1`,
        2: `lg:grid-cols-2`,
        3: `lg:grid-cols-3`,
        4: `lg:grid-cols-4`,
        5: `lg:grid-cols-5`,
        6: `lg:grid-cols-6`,
        7: `lg:grid-cols-7`,
        8: `lg:grid-cols-8`,
        9: `lg:grid-cols-9`,
        10: `lg:grid-cols-10`,
        11: `lg:grid-cols-11`,
        12: `lg:grid-cols-12`,
      },
      xl: {
        1: `xl:grid-cols-1`,
        2: `xl:grid-cols-2`,
        3: `xl:grid-cols-3`,
        4: `xl:grid-cols-4`,
        5: `xl:grid-cols-5`,
        6: `xl:grid-cols-6`,
        7: `xl:grid-cols-7`,
        8: `xl:grid-cols-8`,
        9: `xl:grid-cols-9`,
        10: `xl:grid-cols-10`,
        11: `xl:grid-cols-11`,
        12: `xl:grid-cols-12`,
      },
      "2xl": {
        1: `2xl:grid-cols-1`,
        2: `2xl:grid-cols-2`,
        3: `2xl:grid-cols-3`,
        4: `2xl:grid-cols-4`,
        5: `2xl:grid-cols-5`,
        6: `2xl:grid-cols-6`,
        7: `2xl:grid-cols-7`,
        8: `2xl:grid-cols-8`,
        9: `2xl:grid-cols-9`,
        10: `2xl:grid-cols-10`,
        11: `2xl:grid-cols-11`,
        12: `2xl:grid-cols-12`,
      },
    };
  }))();
}
var Kr, qr, Jr;
function Yr() {
  return (Yr = t(() => {
    ((Kr = n()),
      a(),
      Rr(),
      Gr(),
      (qr = r()),
      (Jr = (0, Kr.forwardRef)(
        ({ cols: e, gap: t = 4, className: n, ...r }, i) =>
          (0, qr.jsx)(`div`, {
            ref: i,
            "data-slot": `grid`,
            className: s(`grid`, Ir(t), Ur(e), n),
            ...r,
          }),
      )),
      (Jr.displayName = `Grid`),
      (Jr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Grid`,
        props: {
          cols: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `GridCols | Partial<Record<GridBreakpoint, GridCols>>`,
              elements: [
                { name: `unknown` },
                {
                  name: `Partial`,
                  elements: [
                    {
                      name: `Record`,
                      elements: [
                        {
                          name: `union`,
                          raw: `keyof typeof gridColsClassNames`,
                          elements: [
                            { name: `literal`, value: `base` },
                            { name: `literal`, value: `sm` },
                            { name: `literal`, value: `md` },
                            { name: `literal`, value: `lg` },
                            { name: `literal`, value: `xl` },
                            { name: `literal`, value: `"2xl"` },
                          ],
                        },
                        { name: `unknown` },
                      ],
                      raw: `Record<GridBreakpoint, GridCols>`,
                    },
                  ],
                  raw: `Partial<Record<GridBreakpoint, GridCols>>`,
                },
              ],
            },
            description: ``,
          },
          gap: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `keyof typeof gapClassNames`,
              elements: [
                { name: `literal`, value: `0` },
                { name: `literal`, value: `0.5` },
                { name: `literal`, value: `1` },
                { name: `literal`, value: `1.5` },
                { name: `literal`, value: `2` },
                { name: `literal`, value: `3` },
                { name: `literal`, value: `4` },
                { name: `literal`, value: `5` },
                { name: `literal`, value: `6` },
                { name: `literal`, value: `8` },
                { name: `literal`, value: `10` },
                { name: `literal`, value: `12` },
              ],
            },
            description: ``,
            defaultValue: { value: `4`, computed: !1 },
          },
        },
      }));
  }))();
}
var Xr, Zr, Qr;
function $r() {
  return ($r = t(() => {
    ((Xr = n()),
      a(),
      (Zr = r()),
      (Qr = (0, Xr.forwardRef)(({ className: e, ...t }, n) =>
        (0, Zr.jsx)(`span`, {
          ref: n,
          "data-slot": `visually-hidden`,
          className: s(`sr-only`, e),
          ...t,
        }),
      )),
      (Qr.displayName = `VisuallyHidden`),
      (Qr.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `VisuallyHidden`,
        props: {
          children: {
            required: !0,
            tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
            description: ``,
          },
        },
      }));
  }))();
}
var ei, ti;
function ni() {
  return (ni = t(() => {
    ((ei = e(n(), 1)),
      B(),
      (ti = ei.forwardRef(function (e, t) {
        let {
          className: n,
          render: r,
          orientation: i = `horizontal`,
          style: a,
          ...o
        } = e;
        return R(`div`, e, {
          state: { orientation: i },
          ref: t,
          props: [{ role: `separator`, "aria-orientation": i }, o],
        });
      })));
  }))();
}
function ri({ className: e, spacing: t, ...n }) {
  return (0, ii.jsx)(ti, {
    "data-slot": `divider`,
    className: s(ai({ spacing: t, className: e })),
    ...n,
  });
}
var ii, ai;
function oi() {
  return (oi = t(() => {
    (ni(),
      H(),
      a(),
      (ii = r()),
      (ai = V(
        `shrink-0 bg-divider data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
        {
          variants: {
            spacing: {
              none: ``,
              sm: `my-2 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-2`,
              md: `my-4 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-4`,
              lg: `my-6 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-6`,
            },
          },
          defaultVariants: { spacing: `md` },
        },
      )),
      (ri.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Divider`,
        composes: [`VariantProps`],
      }));
  }))();
}
function si({ controlled: e, default: t, name: n, state: r = `value` }) {
  let { current: i } = ci.useRef(e !== void 0),
    [a, o] = ci.useState(t);
  return [
    i && e !== void 0 ? e : a,
    ci.useCallback((e) => {
      i || o(e);
    }, []),
  ];
}
var ci;
function li() {
  return (li = t(() => {
    ci = e(n(), 1);
  }))();
}
function ui(e, t = `mui`) {
  let [n, r] = fi.useState(e),
    i = e || n;
  return (
    fi.useEffect(() => {
      n ?? ((pi += 1), r(`${t}-${pi}`));
    }, [n, t]),
    i
  );
}
function di(e, t) {
  if (mi !== void 0) {
    let n = mi();
    return e ?? (t ? `${t}-${n}` : n);
  }
  return ui(e, t);
}
var fi, pi, mi;
function hi() {
  return (hi = t(() => {
    ((fi = e(n(), 1)), h(), (pi = 0), (mi = m.useId));
  }))();
}
function gi(e) {
  return di(e, `base-ui`);
}
function _i() {
  return (_i = t(() => {
    hi();
  }))();
}
var vi, yi;
function bi() {
  return (bi = t(() => {
    ((vi = `none`), (yi = `trigger-press`));
  }))();
}
function xi(e, t, n, r) {
  let i = !1,
    a = !1,
    o = r ?? I;
  return {
    reason: e,
    event: t ?? new Event(`base-ui`),
    cancel() {
      i = !0;
    },
    allowPropagation() {
      a = !0;
    },
    get isCanceled() {
      return i;
    },
    get isPropagationAllowed() {
      return a;
    },
    trigger: n,
    ...o,
  };
}
function Si() {
  return (Si = t(() => {
    L();
  }))();
}
function Ci(e) {
  wi.useEffect(e, Ve);
}
var wi;
function Ti() {
  return (Ti = t(() => {
    ((wi = e(n(), 1)), L());
  }))();
}
function Ei() {
  let e = g(J.create).current;
  return (Ci(e.disposeEffect), e);
}
var K, Di, q, J;
function Oi() {
  return (Oi = t(() => {
    (y(),
      Ti(),
      (K = null),
      globalThis.requestAnimationFrame,
      (Di = class {
        callbacks = [];
        callbacksCount = 0;
        nextId = 1;
        startId = 1;
        isScheduled = !1;
        tick = (e) => {
          this.isScheduled = !1;
          let t = this.callbacks,
            n = this.callbacksCount;
          if (
            ((this.callbacks = []),
            (this.callbacksCount = 0),
            (this.startId = this.nextId),
            n > 0)
          )
            for (let n = 0; n < t.length; n += 1) t[n]?.(e);
        };
        request(e) {
          let t = this.nextId;
          return (
            (this.nextId += 1),
            this.callbacks.push(e),
            (this.callbacksCount += 1),
            (this.isScheduled ||= (requestAnimationFrame(this.tick), !0)),
            t
          );
        }
        cancel(e) {
          let t = e - this.startId;
          t < 0 ||
            t >= this.callbacks.length ||
            (this.callbacks[t] !== null &&
              ((this.callbacks[t] = null), --this.callbacksCount));
        }
      }),
      (q = new Di()),
      (J = class e {
        static create() {
          return new e();
        }
        static request(e) {
          return q.request(e);
        }
        static cancel(e) {
          return q.cancel(e);
        }
        currentId = K;
        request(e) {
          (this.cancel(),
            (this.currentId = q.request(() => {
              ((this.currentId = K), e());
            })));
        }
        cancel = () => {
          this.currentId !== K &&
            (q.cancel(this.currentId), (this.currentId = K));
        };
        disposeEffect = () => this.cancel;
      }));
  }))();
}
function ki(e, t = !1, n = !1, r = !1) {
  let [i, a] = Ai.useState(e && t ? `idle` : void 0),
    [o, s] = Ai.useState(e && !r);
  return (
    e && !o && (s(!0), a(`starting`)),
    !e && o && i !== `ending` && !n && a(`ending`),
    !e && !o && i === `ending` && a(void 0),
    O(() => {
      if (!e && o && i !== `ending` && n) {
        let e = J.request(() => {
          a(`ending`);
        });
        return () => {
          J.cancel(e);
        };
      }
    }, [e, o, i, n]),
    O(() => {
      if (!e || t) return;
      let n = J.request(() => {
        a(void 0);
      });
      return () => {
        J.cancel(n);
      };
    }, [t, e]),
    O(() => {
      if (!e || !t) return;
      e && o && i !== `idle` && a(`starting`);
      let n = J.request(() => {
        a(`idle`);
      });
      return () => {
        J.cancel(n);
      };
    }, [t, e, o, i]),
    { mounted: o, setMounted: s, transitionStatus: i }
  );
}
var Ai;
function ji() {
  return (ji = t(() => {
    ((Ai = e(n(), 1)), k(), Oi());
  }))();
}
function Mi(e) {
  let { open: t, defaultOpen: n = !1, onOpenChange: r, disabled: i } = e,
    [a, o] = si({
      controlled: t,
      default: n,
      name: `Collapsible`,
      state: `open`,
    }),
    { mounted: s, setMounted: c, transitionStatus: l } = ki(a, !0, !0),
    u = gi(),
    [d, f] = Ni.useState(),
    p = d === null ? void 0 : (d ?? u),
    m = b((e) => {
      let t = !a,
        n = xi(yi, e.nativeEvent);
      (r(t, n), !n.isCanceled && o(t));
    });
  return Ni.useMemo(
    () => ({
      defaultPanelId: u,
      disabled: i,
      handleTrigger: m,
      mounted: s,
      open: a,
      panelId: p,
      setMounted: c,
      setOpen: o,
      setPanelIdState: f,
      transitionStatus: l,
    }),
    [u, i, m, s, a, p, c, o, f, l],
  );
}
var Ni;
function Pi() {
  return (Pi = t(() => {
    ((Ni = e(n(), 1)), li(), T(), _i(), Si(), bi(), ji());
  }))();
}
function Fi() {
  let e = Ii.useContext(Li);
  if (e === void 0) throw Error(pe(15));
  return e;
}
var Ii, Li;
function Ri() {
  return (Ri = t(() => {
    (me(), (Ii = e(n(), 1)), (Li = Ii.createContext(void 0)));
  }))();
}
var zi, Bi;
function Vi() {
  return (Vi = t(() => {
    ((zi = `data-starting-style`), (Bi = `data-ending-style`));
  }))();
}
var Hi, Ui, Wi;
function Gi() {
  return (Gi = t(() => {
    (Vi(),
      (Hi = { [zi]: `` }),
      (Ui = { [Bi]: `` }),
      (Wi = {
        transitionStatus(e) {
          return e === `starting` ? Hi : e === `ending` ? Ui : null;
        },
      }));
  }))();
}
var Ki, qi, Ji;
function Yi() {
  return (Yi = t(() => {
    (Gi(), (Ki = `data-open`), (qi = `data-closed`), (Ji = zi));
  }))();
}
var Xi;
function Zi() {
  return (Zi = t(() => {
    Xi = `data-panel-open`;
  }))();
}
var Qi, $i, ea, ta;
function na() {
  return (na = t(() => {
    (Yi(),
      Zi(),
      (Qi = { [Ki]: `` }),
      ($i = { [qi]: `` }),
      (ea = {
        open(e) {
          return e ? { [Xi]: `` } : null;
        },
      }),
      (ta = {
        open(e) {
          return e ? Qi : $i;
        },
      }));
  }))();
}
var ra;
function ia() {
  return (ia = t(() => {
    (na(), Gi(), (ra = { ...ta, ...Wi }));
  }))();
}
var aa, oa, sa;
function ca() {
  return (ca = t(() => {
    ((aa = e(n(), 1)),
      T(),
      B(),
      Pi(),
      Ri(),
      ia(),
      (oa = r()),
      (sa = aa.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            defaultOpen: i = !1,
            disabled: a = !1,
            onOpenChange: o,
            open: s,
            style: c,
            ...l
          } = e,
          u = b(o),
          d = Mi({ open: s, defaultOpen: i, onOpenChange: u, disabled: a }),
          f = aa.useMemo(
            () => ({
              open: d.open,
              disabled: d.disabled,
              transitionStatus: d.transitionStatus,
            }),
            [d.open, d.disabled, d.transitionStatus],
          ),
          p = aa.useMemo(
            () => ({ ...d, onOpenChange: u, state: f }),
            [d, u, f],
          ),
          m = R(`div`, e, {
            state: f,
            ref: t,
            props: l,
            stateAttributesMapping: ra,
          });
        return (0, oa.jsx)(Li.Provider, { value: p, children: m });
      })));
  }))();
}
var la, ua, da;
function fa() {
  return (fa = t(() => {
    ((la = e(n(), 1)),
      na(),
      Gi(),
      B(),
      De(),
      Ri(),
      (ua = { ...ea, ...Wi }),
      (da = la.forwardRef(function (e, t) {
        let {
            panelId: n,
            open: r,
            handleTrigger: i,
            state: a,
            disabled: o,
          } = Fi(),
          {
            className: s,
            disabled: c = o,
            render: l,
            nativeButton: u = !0,
            style: d,
            ...f
          } = e,
          { getButtonProps: p, buttonRef: m } = we({
            disabled: c,
            focusableWhenDisabled: !0,
            native: u,
          });
        return R(`button`, e, {
          state: a,
          ref: [t, m],
          props: [
            { "aria-controls": r ? n : void 0, "aria-expanded": r, onClick: i },
            f,
            p,
          ],
          stateAttributesMapping: ua,
        });
      })));
  }))();
}
function pa(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function ma(e) {
  let t = g(ha, e).current;
  return ((t.next = e), O(t.effect), t);
}
function ha(e) {
  let t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    },
  };
  return t;
}
function ga() {
  return (ga = t(() => {
    (k(), y());
  }))();
}
function _a(e) {
  return e == null ? e : `current` in e ? e.current : e;
}
function va(e) {
  if (!Y) {
    let e = [];
    ((Y = e),
      queueMicrotask(() => {
        ((Y = null),
          ba.flushSync(() => {
            for (let t of e) t();
          }));
      }));
  }
  Y.push(e);
}
function ya(e, t = !1, n = !1) {
  let r = Ei();
  return b((i, a = null) => {
    r.cancel();
    let o = _a(e);
    if (o == null) return;
    let s = o,
      c = () => {
        if (!n) {
          ba.flushSync(i);
          return;
        }
        va(() => {
          a?.aborted || i();
        });
      };
    if (
      typeof s.getAnimations != `function` ||
      globalThis.BASE_UI_ANIMATIONS_DISABLED
    ) {
      i();
      return;
    }
    function l() {
      Promise.all(s.getAnimations().map((e) => e.finished)).then(
        () => {
          a?.aborted || c();
        },
        () => {
          if (!a?.aborted) {
            if (
              s
                .getAnimations()
                .some((e) => e.pending || e.playState !== `finished`)
            ) {
              l();
              return;
            }
            c();
          }
        },
      );
    }
    if (t) {
      let e = zi;
      if (!s.hasAttribute(e)) {
        r.request(l);
        return;
      }
      let t = new MutationObserver(() => {
        s.hasAttribute(e) || (t.disconnect(), l());
      });
      (t.observe(s, { attributes: !0, attributeFilter: [e] }),
        a?.addEventListener(`abort`, () => t.disconnect(), { once: !0 }));
      return;
    }
    r.request(l);
  });
}
var ba, Y;
function xa() {
  return (xa = t(() => {
    ((ba = e(c(), 1)), Oi(), T(), Vi(), (Y = null));
  }))();
}
function Sa(e) {
  let { enabled: t = !0, open: n, ref: r, batch: i = !1, onComplete: a } = e,
    o = b(a),
    s = ya(r, n, i);
  Ca.useEffect(() => {
    if (!t) return;
    let e = new AbortController();
    return (
      s(o, e.signal),
      () => {
        e.abort();
      }
    );
  }, [t, n, o, s]);
}
var Ca;
function wa() {
  return (wa = t(() => {
    ((Ca = e(n(), 1)), T(), xa());
  }))();
}
function Ta(e) {
  let {
      externalRef: t,
      hiddenUntilFound: n,
      id: r,
      keepMounted: i,
      mounted: a,
      onOpenChange: o,
      open: s,
      setMounted: c,
      setOpen: l,
      transitionStatus: u,
    } = e,
    d = Z.useRef(null),
    f = Z.useRef(null),
    [p, m] = Z.useState(Q),
    h = Z.useRef(Q),
    g = Z.useRef(!1),
    _ = Z.useRef(s),
    v = Z.useRef(!1),
    [y, x] = Z.useState(!1),
    S = Z.useRef(null),
    C = Oe(t, d),
    w = ma(s),
    T = ya(d),
    E = !s && !a,
    D = y ? `idle` : u,
    k = s && (_.current || v.current),
    A =
      !s &&
      a &&
      f.current === `css-animation` &&
      p.height === void 0 &&
      p.width === void 0
        ? h.current
        : p,
    j = n && E && f.current !== `css-animation`,
    M = b((e, t = !0) => {
      (t && (h.current = e), m(e));
    }),
    N = b(() => {
      (S.current?.(), (S.current = null));
    }),
    P = b((e) => {
      (N(),
        (S.current = () => {
          ((S.current = null), e());
        }));
    }),
    ee = b(() => {
      s && a && f.current === `css-animation` && (v.current = !0);
    });
  (O(() => {
    y && u !== `starting` && x(!1);
  }, [y, u]),
    Z.useEffect(
      () => () => {
        (ee(), N());
      },
      [ee, N],
    ),
    O(() => {
      let e = d.current;
      if (!e) return;
      !s && S.current && N();
      let t = Ea(e, k);
      if (
        ((f.current = t),
        s && u === `idle` && _.current && t === `css-animation`)
      ) {
        h.current = X(e);
        return;
      }
      if (s && u === `starting`) {
        let n = g.current;
        if (((g.current = !1), t === `none`)) {
          (M(X(e)), x(!0));
          return;
        }
        if (t === `css-transition`) {
          let t = ka(e);
          if ((M(X(e)), !n)) return t;
          let r = Oa(e, `transition-duration`, `0s`);
          return (P(r), x(!0), t);
        }
        M(X(e));
        let r = Oa(e, `animation-name`, `none`);
        if (!n) {
          r();
          return;
        }
        let i = Oa(e, `animation-duration`, `0s`);
        (r(), P(i), x(!0));
        return;
      }
      if (!s && a && (u === `idle` || u === `starting`)) {
        if (((_.current = !1), (v.current = !1), t === `none`)) {
          (M(Q, !1), c(!1));
          return;
        }
        M(X(e));
        return;
      }
      if (u !== `ending`) return;
      if (t === `none`) {
        c(!1);
        return;
      }
      let n = X(e);
      if (!(n.height > 0 || n.width > 0)) {
        c(!1);
        return;
      }
      (M(n), t === `css-animation` && Oa(e, `animation-name`, `none`)());
    }, [a, s, N, M, c, P, k, u]),
    Sa({
      enabled: s && a && D === `idle`,
      open: !0,
      ref: d,
      onComplete() {
        s && M(Q, !1);
      },
    }),
    Z.useEffect(() => {
      if (s || !a || D !== `ending` || !d.current) return;
      let e = new AbortController(),
        t = -1;
      function n() {
        w.current || (c(!1), M(Q, !1));
      }
      return (
        (t = J.request(() => {
          T(n, e.signal);
        })),
        () => {
          (J.cancel(t), e.abort());
        }
      );
    }, [w, a, s, D, T, M, c]),
    O(() => {
      let e = d.current;
      e && n && E && e.setAttribute(`hidden`, `until-found`);
    }, [E, n]),
    Z.useEffect(
      function () {
        let e = d.current;
        if (!e) return;
        function t(e) {
          let t = xi(vi, e);
          (o(!0, t), !t.isCanceled && ((g.current = !0), l(!0)));
        }
        return pa(e, `beforematch`, t);
      },
      [o, l],
    ));
  let te = i || n || a || s;
  return {
    height: A.height,
    props: { ...(j ? { [Ji]: `` } : void 0), hidden: E, id: r },
    ref: C,
    shouldPreventOpenAnimation: k,
    shouldRender: te,
    transitionStatus: D,
    width: A.width,
  };
}
function X(e) {
  return { height: e.scrollHeight, width: e.scrollWidth };
}
function Ea(e, t) {
  let n = u(e).getComputedStyle(e),
    r =
      (n.animationName
        .split(`,`)
        .map((e) => e.trim())
        .some((e) => e !== `` && e !== `none`) ||
        t) &&
      Da(n.animationDuration),
    i = Da(n.transitionDuration);
  return (r && i) || i ? `css-transition` : r ? `css-animation` : `none`;
}
function Da(e) {
  return e
    .split(`,`)
    .map((e) => e.trim())
    .some((e) => e !== `` && Number.parseFloat(e) > 0);
}
function Oa(e, t, n) {
  let r = e.style.getPropertyValue(t),
    i = e.style.getPropertyPriority(t);
  return (
    e.style.setProperty(t, n),
    () => {
      if (r === ``) {
        e.style.removeProperty(t);
        return;
      }
      e.style.setProperty(t, r, i);
    }
  );
}
function ka(e) {
  let t = {
    "justify-content": e.style.justifyContent,
    "align-items": e.style.alignItems,
    "align-content": e.style.alignContent,
    "justify-items": e.style.justifyItems,
  };
  Object.keys(t).forEach((t) => {
    e.style.setProperty(t, `initial`, `important`);
  });
  function n() {
    Object.entries(t).forEach(([t, n]) => {
      if (n === ``) {
        e.style.removeProperty(t);
        return;
      }
      e.style.setProperty(t, n);
    });
  }
  let r = J.request(n);
  return () => {
    (J.cancel(r), n());
  };
}
var Z, Q;
function Aa() {
  return (Aa = t(() => {
    ((Z = e(n(), 1)),
      k(),
      Pe(),
      Oi(),
      T(),
      ga(),
      f(),
      Si(),
      bi(),
      wa(),
      xa(),
      Yi(),
      (Q = { height: void 0, width: void 0 }));
  }))();
}
var ja, Ma;
function Na() {
  return (Na = t(() => {
    ((ja = `--collapsible-panel-height`), (Ma = `--collapsible-panel-width`));
  }))();
}
var Pa, Fa;
function Ia() {
  return (Ia = t(() => {
    ((Pa = e(n(), 1)),
      k(),
      B(),
      Ri(),
      ia(),
      Aa(),
      Na(),
      (Fa = Pa.forwardRef(function (e, t) {
        let {
            className: n,
            hiddenUntilFound: r,
            keepMounted: i,
            render: a,
            id: o,
            style: s,
            ...c
          } = e,
          {
            defaultPanelId: l,
            mounted: u,
            onOpenChange: d,
            open: f,
            setMounted: p,
            setPanelIdState: m,
            setOpen: h,
            state: g,
            transitionStatus: _,
          } = Fi(),
          v = r ?? !1,
          y = i ?? !1,
          b = o || void 0,
          x = b ?? l;
        O(
          () => (
            m((e) => b ?? (e === null ? void 0 : e)),
            () => {
              m((e) => (e === b ? null : e));
            }
          ),
          [b, m],
        );
        let {
            height: S,
            props: C,
            ref: w,
            shouldPreventOpenAnimation: T,
            shouldRender: E,
            transitionStatus: D,
            width: k,
          } = Ta({
            externalRef: t,
            hiddenUntilFound: v,
            id: x,
            keepMounted: y,
            mounted: u,
            onOpenChange: d,
            open: f,
            setMounted: p,
            setOpen: h,
            transitionStatus: _,
          }),
          A = { ...g, transitionStatus: D },
          j = We(s, A),
          M = R(
            `div`,
            { ...e, style: void 0 },
            {
              state: A,
              ref: w,
              props: [
                C,
                {
                  style: {
                    [ja]: S === void 0 ? `auto` : `${S}px`,
                    [Ma]: k === void 0 ? `auto` : `${k}px`,
                  },
                },
                c,
                j ? { style: j } : void 0,
                T ? { style: { animationName: `none` } } : void 0,
              ],
              stateAttributesMapping: ra,
            },
          );
        return E ? M : null;
      })));
  }))();
}
function La({
  open: e,
  defaultOpen: t,
  onOpenChange: n,
  disabled: r,
  trigger: i,
  children: a,
  className: o,
}) {
  return (0, $.jsxs)(sa, {
    "data-slot": `disclosure`,
    open: e,
    defaultOpen: t,
    onOpenChange: n,
    disabled: r,
    className: s(o),
    children: [
      (0, $.jsxs)(da, {
        "data-slot": `disclosure-trigger`,
        className: `group flex w-full items-center justify-between gap-2 text-left`,
        children: [
          i,
          (0, $.jsx)(U, {
            name: `chevronDown`,
            size: `sm`,
            "aria-hidden": `true`,
            className: `shrink-0 transition-transform group-data-[panel-open]:rotate-180`,
          }),
        ],
      }),
      (0, $.jsx)(Fa, {
        "data-slot": `disclosure-panel`,
        className: `h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-(--duration-base) ease-(--ease-standard)`,
        children: a,
      }),
    ],
  });
}
var $;
function Ra() {
  return (Ra = t(() => {
    (ca(),
      fa(),
      Ia(),
      a(),
      W(),
      ($ = r()),
      (La.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Disclosure`,
        props: {
          open: { required: !1, tsType: { name: `boolean` }, description: `` },
          defaultOpen: {
            required: !1,
            tsType: { name: `boolean` },
            description: ``,
          },
          onOpenChange: {
            required: !1,
            tsType: {
              name: `signature`,
              type: `function`,
              raw: `(
  open: boolean,
  eventDetails: Collapsible.Root.ChangeEventDetails,
) => void`,
              signature: {
                arguments: [
                  { type: { name: `boolean` }, name: `open` },
                  {
                    type: { name: `Collapsible.Root.ChangeEventDetails` },
                    name: `eventDetails`,
                  },
                ],
                return: { name: `void` },
              },
            },
            description: ``,
          },
          disabled: {
            required: !1,
            tsType: { name: `boolean` },
            description: ``,
          },
          trigger: {
            required: !0,
            tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
            description: ``,
          },
          children: {
            required: !0,
            tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
            description: ``,
          },
          className: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
function za({
  src: e,
  alt: t,
  blurDataURL: n,
  objectPosition: r,
  fill: i = !1,
  priority: a = !1,
  className: o,
  style: c,
  ...l
}) {
  let u = (0, Ba.jsx)(`img`, {
    "data-slot": `img`,
    src: e,
    alt: t,
    loading: a ? `eager` : `lazy`,
    fetchPriority: a ? `high` : void 0,
    decoding: `async`,
    className: s(
      i && `absolute inset-0 size-full`,
      (i || r) && `object-cover`,
      o,
    ),
    style: { objectPosition: r, ...c },
    ...l,
  });
  return n
    ? (0, Ba.jsx)(`span`, {
        "data-slot": `img-wrapper`,
        className: s(
          `relative block overflow-hidden bg-cover bg-center`,
          i && `absolute inset-0 size-full`,
        ),
        style: { backgroundImage: `url(${n})`, backgroundPosition: r },
        children: u,
      })
    : u;
}
var Ba;
function Va() {
  return (Va = t(() => {
    (a(),
      (Ba = r()),
      (za.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Img`,
        props: {
          src: { required: !0, tsType: { name: `string` }, description: `` },
          alt: { required: !0, tsType: { name: `string` }, description: `` },
          blurDataURL: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          objectPosition: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          fill: {
            required: !1,
            tsType: { name: `boolean` },
            description: ``,
            defaultValue: { value: `false`, computed: !1 },
          },
          priority: {
            required: !1,
            tsType: { name: `boolean` },
            description: ``,
            defaultValue: { value: `false`, computed: !1 },
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function Ha({ index: e, className: t, ...n }) {
  return (0, Ua.jsxs)(`span`, {
    "data-slot": `section-index`,
    className: s(
      `font-mono text-sm tracking-tight text-muted-foreground tabular-nums`,
      t,
    ),
    ...n,
    children: [`(`, e, `)`],
  });
}
var Ua;
function Wa() {
  return (Wa = t(() => {
    (a(),
      (Ua = r()),
      (Ha.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SectionIndex`,
        props: {
          index: { required: !0, tsType: { name: `string` }, description: `` },
        },
      }));
  }))();
}
function Ga({ items: e, separator: t = `·`, className: n, ...r }) {
  return (0, Ka.jsx)(`ul`, {
    "data-slot": `fact-list`,
    className: s(
      `flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground`,
      n,
    ),
    ...r,
    children: e.map((e, n) =>
      (0, Ka.jsxs)(
        `li`,
        {
          className: `flex items-center gap-x-2`,
          children: [
            n > 0 &&
              (0, Ka.jsx)(`span`, { "aria-hidden": `true`, children: t }),
            e,
          ],
        },
        n,
      ),
    ),
  });
}
var Ka;
function qa() {
  return (qa = t(() => {
    (a(),
      (Ka = r()),
      (Ga.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `FactList`,
        props: {
          items: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `string` }],
              raw: `string[]`,
            },
            description: ``,
          },
          separator: {
            required: !1,
            tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
            description: ``,
            defaultValue: { value: `"·"`, computed: !1 },
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function Ja({ label: e, href: t, active: n, size: r, className: i }) {
  let a = s(Xa({ size: r, active: n }), i);
  return t
    ? (0, Ya.jsx)(Or, {
        href: t,
        underline: `none`,
        "data-slot": `chip`,
        "aria-current": n ? `true` : void 0,
        className: a,
        children: e,
      })
    : (0, Ya.jsx)(`span`, { "data-slot": `chip`, className: a, children: e });
}
var Ya, Xa;
function Za() {
  return (Za = t(() => {
    (H(),
      a(),
      jr(),
      (Ya = r()),
      (Xa = V(
        `inline-flex items-center rounded-full border border-transparent font-medium whitespace-nowrap transition-colors`,
        {
          variants: {
            size: { sm: `px-2.5 py-1 text-xs`, md: `px-3 py-1.5 text-sm` },
            active: {
              true: `bg-primary text-primary-foreground`,
              false: `bg-secondary text-secondary-foreground`,
            },
          },
          compoundVariants: [
            { active: !1, class: `hover:bg-muted hover:text-foreground` },
          ],
          defaultVariants: { size: `sm`, active: !1 },
        },
      )),
      (Ja.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Chip`,
        props: {
          label: { required: !0, tsType: { name: `string` }, description: `` },
          href: { required: !1, tsType: { name: `string` }, description: `` },
          className: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
        composes: [`VariantProps`],
      }));
  }))();
}
function Qa({
  value: e,
  label: t = `Copy`,
  copiedLabel: n = `Copied`,
  resetAfterMs: r = 2e3,
  variant: i = `ghost`,
  size: a = `icon-sm`,
  ...o
}) {
  let [s, c] = (0, $a.useState)(!1);
  return (0, eo.jsx)(fr, {
    type: `button`,
    "data-slot": `copy-button`,
    variant: i,
    size: a,
    icon: s ? `check` : `copy`,
    "aria-label": s ? n : t,
    onClick: async () => {
      try {
        (await navigator.clipboard.writeText(e),
          c(!0),
          window.setTimeout(() => c(!1), r));
      } catch {}
    },
    ...o,
  });
}
var $a, eo;
function to() {
  return (to = t(() => {
    (($a = n()),
      hr(),
      (eo = r()),
      (Qa.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CopyButton`,
        props: {
          value: { required: !0, tsType: { name: `string` }, description: `` },
          label: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Copy"`, computed: !1 },
          },
          copiedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Copied"`, computed: !1 },
          },
          resetAfterMs: {
            required: !1,
            tsType: { name: `number` },
            description: ``,
            defaultValue: { value: `2000`, computed: !1 },
          },
          variant: {
            defaultValue: { value: `"ghost"`, computed: !1 },
            required: !1,
          },
          size: {
            defaultValue: { value: `"icon-sm"`, computed: !1 },
            required: !1,
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function no({ label: e = `Scroll`, className: t, ...n }) {
  return (0, ro.jsxs)(`span`, {
    "data-slot": `scroll-hint`,
    className: s(`text-xs tracking-widest text-muted-foreground uppercase`, t),
    ...n,
    children: [`(`, e, `)`],
  });
}
var ro;
function io() {
  return (io = t(() => {
    (a(),
      (ro = r()),
      (no.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ScrollHint`,
        props: {
          label: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Scroll"`, computed: !1 },
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function ao({
  start: e,
  end: t,
  locale: n,
  presentLabel: r = `Present`,
  options: i = so,
  className: a,
  ...o
}) {
  let c = new Intl.DateTimeFormat(n, i),
    l = c.format(new Date(e));
  return (0, oo.jsxs)(`span`, {
    "data-slot": `date-range`,
    className: s(a),
    ...o,
    children: [
      (0, oo.jsx)(`time`, { dateTime: e, children: l }),
      ` – `,
      t
        ? (0, oo.jsx)(`time`, { dateTime: t, children: c.format(new Date(t)) })
        : r,
    ],
  });
}
var oo, so;
function co() {
  return (co = t(() => {
    (a(),
      (oo = r()),
      (so = { month: `short`, year: `numeric` }),
      (ao.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `DateRange`,
        props: {
          start: { required: !0, tsType: { name: `string` }, description: `` },
          end: {
            required: !0,
            tsType: {
              name: `union`,
              raw: `string | null`,
              elements: [{ name: `string` }, { name: `null` }],
            },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          presentLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Present"`, computed: !1 },
          },
          options: {
            required: !1,
            tsType: { name: `Intl.DateTimeFormatOptions` },
            description: ``,
            defaultValue: {
              value: `{
  month: "short",
  year: "numeric",
}`,
              computed: !1,
            },
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function lo({ date: e, locale: t, options: n = fo, className: r, ...i }) {
  let a = new Intl.DateTimeFormat(t, n).format(new Date(e));
  return (0, uo.jsx)(`time`, {
    "data-slot": `formatted-date`,
    dateTime: e,
    className: s(r),
    ...i,
    children: a,
  });
}
var uo, fo;
function po() {
  return (po = t(() => {
    (a(),
      (uo = r()),
      (fo = { year: `numeric`, month: `long`, day: `numeric` }),
      (lo.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `FormattedDate`,
        props: {
          date: { required: !0, tsType: { name: `string` }, description: `` },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          options: {
            required: !1,
            tsType: { name: `Intl.DateTimeFormatOptions` },
            description: ``,
            defaultValue: {
              value: `{
  year: "numeric",
  month: "long",
  day: "numeric",
}`,
              computed: !1,
            },
          },
        },
        composes: [`Omit`],
      }));
  }))();
}
function mo({ minutes: e, label: t, className: n, ...r }) {
  return (0, ho.jsx)(`span`, {
    "data-slot": `reading-time`,
    "data-minutes": e,
    className: s(`text-sm text-muted-foreground`, n),
    ...r,
    children: t,
  });
}
var ho;
function go() {
  return (go = t(() => {
    (a(),
      (ho = r()),
      (mo.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ReadingTime`,
        props: {
          minutes: {
            required: !0,
            tsType: { name: `number` },
            description: ``,
          },
          label: { required: !0, tsType: { name: `string` }, description: `` },
        },
        composes: [`Omit`],
      }));
  }))();
}
function _o({ mode: e, label: t, className: n, ...r }) {
  return (0, vo.jsxs)(`span`, {
    "data-slot": `work-mode-badge`,
    "data-mode": e,
    className: s(
      `inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground`,
      n,
    ),
    ...r,
    children: [
      (0, vo.jsx)(U, { name: yo[e], size: `xs`, "aria-hidden": `true` }),
      t,
    ],
  });
}
var vo, yo;
function bo() {
  return (bo = t(() => {
    (a(),
      W(),
      (vo = r()),
      (yo = { onsite: `location`, hybrid: `swap`, remote: `globe` }),
      (_o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `WorkModeBadge`,
        props: {
          mode: {
            required: !0,
            tsType: {
              name: `union`,
              raw: `"onsite" | "hybrid" | "remote"`,
              elements: [
                { name: `literal`, value: `"onsite"` },
                { name: `literal`, value: `"hybrid"` },
                { name: `literal`, value: `"remote"` },
              ],
            },
            description: ``,
          },
          label: { required: !0, tsType: { name: `string` }, description: `` },
        },
        composes: [`Omit`],
      }));
  }))();
}
function xo({ status: e, label: t, className: n, ...r }) {
  let i = To[e] ?? `muted`;
  return (0, So.jsxs)(`span`, {
    "data-slot": `status-badge`,
    "data-status": e,
    className: s(Co({ tone: i }), n),
    ...r,
    children: [
      (0, So.jsx)(`span`, {
        "aria-hidden": `true`,
        className: s(`size-1.5 rounded-full`, wo[i]),
      }),
      t,
    ],
  });
}
var So, Co, wo, To;
function Eo() {
  return (Eo = t(() => {
    (H(),
      a(),
      (So = r()),
      (Co = V(
        `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`,
        {
          variants: {
            tone: {
              success: `bg-success-muted text-success`,
              warning: `bg-warning-muted text-warning`,
              muted: `bg-secondary text-muted-foreground`,
            },
          },
          defaultVariants: { tone: `muted` },
        },
      )),
      (wo = {
        success: `bg-success`,
        warning: `bg-warning`,
        muted: `bg-muted-foreground`,
      }),
      (To = { live: `success`, inDevelopment: `warning`, archived: `muted` }),
      (xo.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `StatusBadge`,
        props: {
          status: { required: !0, tsType: { name: `string` }, description: `` },
          label: { required: !0, tsType: { name: `string` }, description: `` },
        },
        composes: [`Omit`],
      }));
  }))();
}
function Do() {
  return (Do = t(() => {
    (hr(),
      W(),
      yr(),
      Tr(),
      jr(),
      Fr(),
      Hr(),
      Yr(),
      $r(),
      oi(),
      Ra(),
      Va(),
      Wa(),
      qa(),
      Za(),
      to(),
      io(),
      co(),
      po(),
      go(),
      bo(),
      Eo());
  }))();
}
export {
  Jr as A,
  vr as B,
  Va as C,
  oi as D,
  ri as E,
  Fr as F,
  W as G,
  fr as H,
  Or as I,
  jr as L,
  Vr as M,
  Hr as N,
  Qr as O,
  Pr as P,
  wr as R,
  za as S,
  Ra as T,
  hr as U,
  yr as V,
  U as W,
  Za as _,
  bo as a,
  Ha as b,
  lo as c,
  co as d,
  no as f,
  Ja as g,
  to as h,
  _o as i,
  Yr as j,
  $r as k,
  po as l,
  Qa as m,
  xo as n,
  mo as o,
  io as p,
  Eo as r,
  go as s,
  Do as t,
  ao as u,
  Ga as v,
  La as w,
  Wa as x,
  qa as y,
  Tr as z,
};
