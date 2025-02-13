(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 290881: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(621815);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var NI = __c.NI;
        var Jc = __c.Jc;
        var R = __c.R;
        var SI = __c.SI;
        var Gg = __c.Gg;
        var cv = __c.cv;
        var D = __c.D;
        var E = __c.E;
        var O = __c.O;
        var kz = __c.kz;
        var S4 = function () {
            const [a] = (0, __c.ec)(() => kz());
            return a;
          },
          nOb = function (a) {
            switch (a) {
              case 4:
                return O("9ND0kg");
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 3:
                return O("+IXmVg");
              default:
                throw new E(a);
            }
          },
          oOb = function (a, b, c) {
            const d = [a];
            for (; null != a && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          pOb = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          rOb = function (a) {
            var b,
              c = a.Oz,
              d = a.content;
            a = a.context;
            __c.B(
              "formula" ===
                (null === d || void 0 === d
                  ? void 0
                  : null === (b = d.tg) || void 0 === b
                  ? void 0
                  : b.type)
            );
            b = d.tg.value;
            switch (b.type) {
              case "invalid":
                b = b.Gca;
                break;
              case "canonical":
                b = b.hL;
                break;
              default:
                throw new E(b);
            }
            __c.B(b.startsWith("="));
            const e = d.Uo;
            b = { type: "dom", render: (h) => (h.innerText = "") };
            let f;
            switch (e.type) {
              case 8:
                f = b;
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 5:
              case 6:
              case 7:
                f = qOb(c, a, d.xA);
                break;
              case 0:
                f = {
                  type: "react",
                  node: T4(__c.qS, {
                    label: nOb(e.error),
                    children: T4(__c.oA, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: T4(__c.trb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(e);
            }
            if (!f) return b;
            c = __c.Yf(__c.BQ, a.attrs);
            d = __c.MI(a.attrs.textAlign, "formula", void 0, () => e.type);
            const g = {
              textAlign: __c.VFa(d, c.direction),
              justifyContent: __c.WFa(d),
              width: "100%",
            };
            switch (f.type) {
              case "dom":
                return {
                  type: "dom",
                  render: (h) => {
                    const k = document.createElement("div");
                    Object.assign(k.style, g);
                    f.render(k);
                    h.innerHTML = "";
                    h.appendChild(k);
                  },
                };
              case "react":
                return {
                  type: "react",
                  node: T4("div", { style: g, children: f.node }),
                };
              default:
                throw new E(f);
            }
          },
          qOb = function (a, b, c) {
            var d;
            return null === (d = a.bha) || void 0 === d
              ? void 0
              : d.call(a, { context: b, value: c });
          },
          uOb = function (a) {
            const b = a.Oz,
              c = a.pf;
            a = a.Nhb;
            b.bha = __c.gGa;
            b.lza = (d) => rOb({ ...d, Oz: b });
            b.mza = pOb(sOb({ pf: c, HP: void 0 }));
            b.oza = tOb(a);
            b.pza = pOb(U4);
          },
          vOb = function ({ label: a, width: b, height: c, scale: d, rCa: e }) {
            return T4("div", {
              style: { width: b, height: c, transform: `scale(${d})` },
              className: "bx74uQ",
              children: T4(__c.lA, {
                className: V4("ivlMMQ", W4(e)),
                size: "small",
                alignment: "center",
                children: a,
              }),
            });
          },
          W4 = function (a) {
            return {
              _2BX0vg: "primary-default" === a,
              JfW_Cg: "primary-low" === a,
              isMgNg: "primary-active" === a,
              xwWDeQ: "secondary-default" === a,
              w0EyUQ: "secondary-low" === a,
              _8p5AIA: "secondary-active" === a,
            };
          },
          xOb = function ({ Cd: a, oHa: b, scale: c, cp: d, ep: e, EUa: f }) {
            const g = X4(() => {
                const m = null === d || void 0 === d ? void 0 : d.get();
                if (null != m && 0 !== m.length) return new __c.tF(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return T4(__c.mA, {
              mq: "light",
              light: "light",
              kt: "light",
              dark: "light",
              children: (m) =>
                T4("div", {
                  className: V4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: T4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: V4("N7J3UA", l),
                    ref: null === g || void 0 === g ? void 0 : g.Vl,
                    children: T4(__c.wS, {
                      className: V4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: T4(wOb, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          zOb = function () {
            const a = new yOb(),
              b = new __c.OS(),
              c = Y4((f) => {
                const {
                    scale: g = 1,
                    jHa: h,
                    size: k = "small",
                    EUa: l = !0,
                  } = f,
                  m = Z4((n) => a.ep({ scale: n, size: k, tqa: h }), [k, h]);
                return T4(xOb, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Cd: "rtl" === f.sheet.direction,
                  oHa: null != f.selection && a.L8a(f.sheet, f.selection),
                  ep: m,
                  EUa: l,
                });
              }),
              d = Y4((f) => {
                const {
                    scale: g = 1,
                    jHa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    sfb: n,
                  } = f,
                  p = Z4((v) => a.ep({ scale: v, size: k, tqa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = Z4((v) => null != m && a.pua(m).has(v), [m]),
                  t = Z4((v) => null != m && a.I6a(l, m).has(v), [l, m]),
                  u = Z4(
                    (v) => {
                      const x =
                        null != n &&
                        0 <= l.layout.cols.Ne(v, n.Xb) &&
                        0 >= l.layout.cols.Ne(v, n.Kc);
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return T4($4, { ...f, Ed: g, Td: q, ep: p, EE: u, sF: b });
              }),
              e = Y4((f) => {
                const {
                    scale: g = 1,
                    jHa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    sfb: n,
                  } = f,
                  p = Z4((v) => a.ep({ scale: v, size: k, tqa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = Z4((v) => null != m && a.rua(m).has(v), [m]),
                  t = Z4((v) => null != m && a.J6a(l, m).has(v), [l, m]),
                  u = Z4(
                    (v) => {
                      const x =
                        null != n &&
                        0 <= l.layout.rows.Ne(v, n.bc) &&
                        0 >= l.layout.rows.Ne(v, n.ad);
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return T4(a5, { ...f, Ed: q, Td: g, ep: p, EE: u, sF: b });
              });
            return { gVa: c, fVa: d, hVa: e };
          },
          AOb = function (a) {
            const b = a.Vp,
              c = () => null;
            return __c.uz((d) => T4(b5, { ...d, Vp: b, ph: c }));
          },
          BOb = function ({ sheet: a, Y: b, range: c, Od: d }) {
            c5(
              () =>
                d5(() => {
                  if (null != d.current) {
                    var e,
                      f =
                        null !==
                          (e = null === b || void 0 === b ? void 0 : b.get()) &&
                        void 0 !== e
                          ? e
                          : 1;
                    e = "rtl" === a.direction;
                    e = c ? a.za(c.Xb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.Aa(c.bc) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          EOb = function ({ onScroll: a }) {
            const b = new COb(a);
            return {
              wC: b,
              Mga: Y4((c) =>
                T4(DOb, { sheet: c.sheet, wC: b, children: c.children })
              ),
            };
          },
          IOb = function (a) {
            const b = a.Vp,
              c = a.bf,
              d = a.vQa,
              e = ({ children: k }) => k,
              { wC: f, Mga: g } = EOb({ onScroll: a.onScroll });
            class h extends FOb {
              get PK() {
                const k = this.props.oa.WA;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.lQa(this.props.item, {
                  Sb: this.props.Sb,
                  oa: this.props.oa,
                });
              }
              componentWillUnmount() {
                d.s_a(this.props.item, {
                  Sb: this.props.Sb,
                  oa: this.props.oa,
                });
              }
              render() {
                d.lQa(this.props.item, {
                  Sb: this.props.Sb,
                  oa: this.props.oa,
                });
                return T4(GOb, {
                  ...this.props,
                  Y: this.Y,
                  Vp: b,
                  PK: this.PK,
                  ph: this.ph,
                  vQa: d,
                  wC: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.Y = e5(() => {
                  const l = this.props.item;
                  var m = this.props.oa,
                    n = m.WA;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return 1;
                    case "print":
                      n = d.Y5a(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.LF(l, n.Sb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.ph = Y4((l) =>
                  T4("div", {
                    className: "wKvivQ",
                    children: T4(HOb, { ...this.props, ...l, bf: c }),
                  })
                );
              }
            }
            return { aXa: h, wC: f };
          },
          JOb = function (a, b) {
            if (
              null != b &&
              null != b.Xb &&
              null != b.bc &&
              null != b.Kc &&
              null != b.ad
            ) {
              var c = a.za(b.Xb),
                d = a.Aa(b.bc),
                e = a.za(b.Kc) + b.Kc.width - c;
              a = a.Aa(b.ad) + b.ad.height - d;
              return __c.Bv({ top: d, left: c, width: e, height: a });
            }
          },
          LOb = function (a) {
            const b = a.Vp,
              c = () => null;
            return (d) => T4(KOb, { ...d, Vp: b, ph: c });
          },
          POb = function (a, b, c, d, e, f) {
            if (0 === d.length || 0 === e.length) return [];
            const g = MOb(b, c, d, e);
            f = NOb(b, c, d, e, f);
            const h = OOb(a, b, c, d, e),
              k = a.U5a(b),
              l = a.p5a(b),
              m = "rtl" === b.direction;
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.Vgb,
                  t = n.ama,
                  u = n.dPa;
                const v = n.color,
                  x = n.weight;
                n = n.kc;
                const y = m ? -1 : 1,
                  z =
                    null === (p = h.get(f5(r, u))) || void 0 === p
                      ? void 0
                      : p.Sa;
                p =
                  null === (q = h.get(f5(t, u))) || void 0 === q
                    ? void 0
                    : q.za;
                if (null != z && null != p) {
                  q = D(k.get(u.ua));
                  var A = D(l.get(r.column));
                  r = D(l.get(t.column));
                  u = "start" === u.boundary ? q.start : q.end;
                  q = A.start;
                  t = "start" === t.boundary ? r.start : r.end;
                  return {
                    color: v,
                    weight: x,
                    kc: n,
                    p1: new cv(q + z * y, u),
                    p2: new cv(t + p * y, u),
                    ...__c.UI((t - q) * y, n * x, z),
                  };
                }
              })
              .filter(__c.zb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.iCa,
                    t = n.dhb,
                    u = n.dma;
                  const v = n.color,
                    x = n.weight;
                  n = n.kc;
                  const y =
                    null === (p = h.get(f5(r, t))) || void 0 === p
                      ? void 0
                      : p.La;
                  p =
                    null === (q = h.get(f5(r, u))) || void 0 === q
                      ? void 0
                      : q.Aa;
                  if (null != y && null != p) {
                    q = D(l.get(r.column));
                    var z = D(k.get(t.ua));
                    t = D(k.get(u.ua));
                    r = "start" === r.boundary ? q.start : q.end;
                    q = z.start;
                    u = "start" === u.boundary ? t.start : t.end;
                    return {
                      color: v,
                      weight: x,
                      kc: n,
                      p1: new cv(r, q + y),
                      p2: new cv(r, u + p),
                      ...__c.UI(u - q, n * x, y),
                    };
                  }
                })
                .filter(__c.zb),
              ...a,
            ];
          },
          QOb = function (a) {
            const b = [];
            a = a.filter((c) => 0 !== c.weight && null != c.color);
            a = __c.nd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.nd(d, (e) => `${e.Sj}_${e.Tj}`);
              for (const [, e] of a) {
                const { Tj: f, Sj: g } = e[0];
                a = __c.nd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Sj: g, Tj: f });
              }
            }
            return b;
          },
          SOb = function (a, b, c, d) {
            var e = ROb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { ua: k, boundary: "start" },
                      { ua: k, boundary: "end" },
                    ]
                  : [{ ua: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.uQa.Qeb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = POb(e, a, h, f, g, d);
            return QOb(c);
          },
          MOb = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.ua;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  ("start" === k.boundary ? g.span.bc === c : g.span.ad === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      "start" === k.boundary
                        ? null === c || void 0 === c
                          ? void 0
                          : c.Aa
                        : null === c || void 0 === c
                        ? void 0
                        : c.La))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.ama),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.dPa),
                      (h = h.ua === k.ua && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.kc === c.kc &&
                    0 === g.kc
                      ? (g.ama = f)
                      : e.push({
                          dPa: k,
                          Vgb: l,
                          ama: f,
                          color: c.color,
                          weight: c.weight,
                          kc: c.kc,
                        });
                  }
              }
            return e;
          },
          NOb = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.ua,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  ("start" === l.boundary ? d.span.Xb === h : d.span.Kc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      "start" === l.boundary
                        ? null === d || void 0 === d
                          ? void 0
                          : d.za
                        : null === d || void 0 === d
                        ? void 0
                        : d.Sa) &&
                      ("start" !== l.boundary || 1 !== e(g, h)))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { ua: g, boundary: "start" }
                      : { ua: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.iCa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.dma),
                      (k = k.ua === m.ua && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.kc === d.kc &&
                    0 === h.kc
                      ? (h.dma = g)
                      : f.push({
                          iCa: l,
                          dhb: m,
                          dma: g,
                          color: d.color,
                          weight: d.weight,
                          kc: d.kc,
                        });
                  }
              }
            return f;
          },
          OOb = function (a, b, c, d, e) {
            const f = a.uQa.t0a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                u = f.get(r) || 0;
              return t <= u ? q : r;
            };
            const g = new Map();
            if (0 === d.length || 0 === e.length) return g;
            var h = [],
              k = b.layout.cols.Jc(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.Jc(d[0].ua)) &&
              e.push({ ua: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].ua)) &&
              e.push({ ua: d, boundary: "start" });
            for (const q of h) {
              h = (d = "start" === q.boundary ? q.column : void 0)
                ? b.layout.cols.Jc(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = "start" === r.boundary ? r.ua : void 0;
                k = l ? b.layout.rows.Jc(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  "end" === q.boundary
                    ? null === l || void 0 === l
                      ? void 0
                      : l.Sa
                    : null === m || void 0 === m
                    ? void 0
                    : m.za;
                m =
                  "end" === r.boundary
                    ? null === n || void 0 === n
                      ? void 0
                      : n.La
                    : null === m || void 0 === m
                    ? void 0
                    : m.Aa;
                n =
                  "end" === q.boundary
                    ? null === p || void 0 === p
                      ? void 0
                      : p.Sa
                    : null === n || void 0 === n
                    ? void 0
                    : n.za;
                l =
                  "end" === r.boundary
                    ? null === p || void 0 === p
                      ? void 0
                      : p.La
                    : null === l || void 0 === l
                    ? void 0
                    : l.Aa;
                p = __c.sGa({ Aa: n, La: k, za: l, Sa: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: u, width: v } =
                  1 === (null === t || void 0 === t ? void 0 : t.kc)
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (null === l || void 0 === l ? void 0 : l.weight) || 0,
                          (null === m || void 0 === m ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (null === n || void 0 === n ? void 0 : n.weight) || 0,
                          (null === k || void 0 === k ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(f5(q, r), __c.PI(p, u / 2, v / 2));
              }
            }
            return g;
          },
          g5 = function (a, b, c, d, e) {
            if (a && b) {
              var f = b.Rt ? (a.Rt ? void 0 : a) : b;
              return __c.RI(
                b.borderStyle,
                a.borderStyle,
                d,
                c,
                e,
                null === f || void 0 === f ? void 0 : f.borderStyle
              );
            }
            return null !==
              (f = null === a || void 0 === a ? void 0 : a.borderStyle) &&
              void 0 !== f
              ? f
              : null === b || void 0 === b
              ? void 0
              : b.borderStyle;
          },
          TOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ c6: void 0, AQ: void 0, g6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.nj.color, weight: a.nj.weight, kc: SI(a.nj.Yd) };
              if (!g) return a.Cm ? void 0 : { borderStyle: b, Rt: !0 };
              c = h5(g.c6);
              d = i5(g.AQ);
              g = j5(g.g6);
              return null == c && null == d && null == g
                ? a.Cm
                  ? void 0
                  : { borderStyle: b, Rt: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? SI(g) : b.kc,
                    },
                    Rt: !1,
                  };
            }
          },
          UOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ b6: void 0, zQ: void 0, f6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.nj.color, weight: a.nj.weight, kc: SI(a.nj.Yd) };
              if (!g) return a.Cm ? void 0 : { borderStyle: b, Rt: !0 };
              c = h5(g.b6);
              d = i5(g.zQ);
              g = j5(g.f6);
              return null == c && null == d && null == g
                ? a.Cm
                  ? void 0
                  : { borderStyle: b, Rt: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? SI(g) : b.kc,
                    },
                    Rt: !1,
                  };
            }
          },
          VOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ e6: void 0, CQ: void 0, j6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.nj.color, weight: a.nj.weight, kc: SI(a.nj.Yd) };
              if (!g) return a.Cm ? void 0 : { borderStyle: b, Rt: !0 };
              c = h5(g.e6);
              d = i5(g.CQ);
              g = j5(g.j6);
              return null == c && null == d && null == g
                ? a.Cm
                  ? void 0
                  : { borderStyle: b, Rt: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? SI(g) : b.kc,
                    },
                    Rt: !1,
                  };
            }
          },
          WOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ d6: void 0, BQ: void 0, i6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.nj.color, weight: a.nj.weight, kc: SI(a.nj.Yd) };
              if (!g) return a.Cm ? void 0 : { borderStyle: b, Rt: !0 };
              c = h5(g.d6);
              d = i5(g.BQ);
              g = j5(g.i6);
              return null == c && null == d && null == g
                ? a.Cm
                  ? void 0
                  : { borderStyle: b, Rt: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? SI(g) : b.kc,
                    },
                    Rt: !1,
                  };
            }
          },
          h5 = function (a) {
            return null == a || "inherit" === a ? void 0 : a;
          },
          i5 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : Number(a.split("px")[0]);
          },
          j5 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : a
                  .split(" ")
                  .map((b) => {
                    b = Number(b);
                    return 0 < b ? b : void 0;
                  })
                  .filter(__c.zb);
          },
          k5 = function (a, b, c) {
            let d = 0;
            for (; null != a && a !== b; ) (a = c.next(a)) && d++;
            return d;
          },
          XOb = function (a, b) {
            return (
              (null === a || void 0 === a ? void 0 : a.La) ===
                (null === b || void 0 === b ? void 0 : b.La) &&
              (null === a || void 0 === a ? void 0 : a.Aa) ===
                (null === b || void 0 === b ? void 0 : b.Aa) &&
              (null === a || void 0 === a ? void 0 : a.Sa) ===
                (null === b || void 0 === b ? void 0 : b.Sa) &&
              (null === a || void 0 === a ? void 0 : a.za) ===
                (null === b || void 0 === b ? void 0 : b.za)
            );
          },
          $Ob = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { IBa: b, wv: b, Ga: {}, xv: {} },
              d = l5(
                () => a.lG.style || c,
                (g) => {
                  var h;
                  Object.assign(a.I6.style, g.IBa);
                  Object.assign(a.MQ.style, g.wv);
                  Object.assign(a.tH.style, g.Ga);
                  Object.assign(a.SD.style, g.xv);
                  g =
                    null === g || void 0 === g
                      ? void 0
                      : null === (h = g.Ga) || void 0 === h
                      ? void 0
                      : h.textDecoration;
                  a.tH.classList.toggle("OQx3PQ", "underline" === g);
                  a.tH.classList.toggle("_99ezUA", "line-through" === g);
                  a.tH.classList.toggle(
                    "kppAqQ",
                    "underline line-through" === g
                  );
                },
                { fireImmediately: !0, equals: YOb }
              ),
              e = l5(
                () => a.q_ && a.FIa,
                (g) => {
                  a.tH.classList.toggle("_84KvRA", !g);
                  a.I6.classList.toggle("_84KvRA", !g);
                },
                { fireImmediately: !0 }
              ),
              f = l5(
                () => a.renderer,
                (g) => {
                  a.q7 &&
                  "react" !== (null === g || void 0 === g ? void 0 : g.type)
                    ? ((a.q7 = void 0), a.w1.remove())
                    : (a.SD.innerHTML = "");
                  switch (null === g || void 0 === g ? void 0 : g.type) {
                    case "react":
                      a.q7 = ZOb(g.node, a.w1);
                      a.SD.appendChild(a.w1);
                      break;
                    case "dom":
                      g.render(a.SD);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(g);
                  }
                  a.gra();
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
            };
          },
          YOb = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          bPb = function (a) {
            const b = a.Pz,
              c = a.eD,
              d = a.$Ta,
              e = new aPb(a.B2);
            return (f) =>
              T4(m5, {
                ...f,
                eD: c,
                Pz: b,
                Ooa: e,
                $Ta: null === d || void 0 === d ? void 0 : d.get(),
              });
          },
          sOb =
            ({ pf: a, HP: b }) =>
            (c) =>
              (0, __c.N)(__c.rkb, { ...c, pf: a, HP: b }),
          n5 = __webpack_require__(443763),
          cPb = n5.Fragment,
          T4 = n5.jsx,
          o5 = n5.jsxs;
        var Y4 = __webpack_require__(214645).Pi;
        var p5 = __webpack_require__(875604),
          q5 = p5.Component,
          FOb = p5.PureComponent,
          Z4 = p5.useCallback,
          dPb = p5.useDeferredValue,
          c5 = p5.useEffect,
          ePb = p5.useLayoutEffect,
          X4 = p5.useMemo,
          r5 = p5.useRef,
          fPb = p5.useState;
        var s5 = __webpack_require__(519427),
          t5 = s5.action,
          d5 = s5.autorun,
          u5 = s5.comparer,
          e5 = s5.computed,
          gPb = s5.createAtom,
          v5 = s5.observable,
          l5 = s5.reaction,
          hPb = s5.untracked;
        var w5 = __webpack_require__(46239).gn;
        var iPb = __webpack_require__,
          jPb = iPb(993864),
          V4 = iPb.n_x(jPb)();
        var kPb = __webpack_require__(358579).Z;
        var x5 = __webpack_require__(635872),
          y5 = x5.Om,
          z5 = x5.kq,
          lPb = x5.YN;
        var ZOb = __webpack_require__(204358).createPortal;
        var mPb = Y4((a) => {
            var b,
              c,
              d = "rtl" === a.sheet.direction;
            d = { H2wykw: !d, UweldA: d };
            const [e] = fPb(() => kz()),
              f = {
                get: Z4(() => {
                  var g;
                  const h =
                    null === e || void 0 === e
                      ? void 0
                      : null === (g = e.current) || void 0 === g
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      null !==
                        (k = null === h || void 0 === h ? void 0 : h.width) &&
                      void 0 !== k
                        ? k
                        : 0,
                    height:
                      null !==
                        (l = null === h || void 0 === h ? void 0 : h.height) &&
                      void 0 !== l
                        ? l
                        : 0,
                  };
                  return __c.Bv(g);
                }, [e]),
              };
            return o5("div", {
              className: V4("nMvVqA", d),
              children: [
                o5("div", {
                  ref: kPb(a.Od, e),
                  className: "_0YOFPg",
                  children: [
                    T4(a.Vp, { ...a, viewport: f }),
                    T4("div", {
                      className: V4("Gdl7fQ", d),
                      children:
                        null === (c = a.Hya) || void 0 === c
                          ? void 0
                          : null === (b = c.get()) || void 0 === b
                          ? void 0
                          : b.map((g, h) => T4(g, {}, h)),
                    }),
                  ],
                }),
                "visible" === a.Ktb &&
                  o5(cPb, {
                    children: [
                      T4("div", {
                        className: V4("_32sKQw", d),
                        children: T4(a.YWa, { ...a }),
                      }),
                      T4("div", {
                        className: V4("xdIsTQ", d),
                        children: T4(a.bXa, { ...a }),
                      }),
                      T4("div", {
                        className: V4("rsTRSA", d),
                        children: T4(a.$Wa, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          nPb = Y4((a) => {
            a = a.content;
            __c.w("text2" === a.type || "text3" === a.type);
            switch (a.type) {
              case "text2":
                return a.value.ba;
              case "text3":
                return __c.Xq.ra(a.value).cells.ba();
              default:
                throw new E(a);
            }
          });
        var tOb = (a) =>
            __c.TFa((b, c) => {
              const d = b.content;
              b = b.context;
              if (d.value.isEmpty) for (; c.lastChild; ) c.lastChild.remove();
              else
                ({ pi: b } = __c.Yf(__c.Fg, b.attrs)),
                  "wrap" === b &&
                    ((c = c.appendChild(document.createElement("div"))),
                    (c.className = "dt4Dlg")),
                  a.render({
                    container: c,
                    text: d.value,
                    Ma: void 0,
                    writingMode: 1,
                    Fd: "start",
                    qg: oPb(d, b),
                  });
            }),
          oPb = y5(
            (a, b) => {
              if ("wrap" === b) return [];
              a = a.value.ba.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: u5.structural }
          );
        var U4 = class extends q5 {
          static j(a) {
            R(a, { pi: e5 });
          }
          constructor(...a) {
            super(...a);
            U4.j(this);
          }
          get pi() {
            return __c.Yf(__c.Fg, this.props.context.attrs).pi;
          }
          render() {
            var a = this.props.content;
            const b = this.props.context;
            if (a.value.isEmpty) return null;
            a = T4(this.props.ph, {
              content: a,
              ua: b.container.ua,
              col: b.container.column,
              pi: this.pi,
            });
            return "wrap" === this.pi
              ? T4("div", { className: "dt4Dlg", children: a })
              : a;
          }
        };
        U4 = w5([Jc], U4);
        var yOb = class {
          ep({ size: a, scale: b, tqa: c }) {
            b = c ? Math.max(c, b) : b;
            return "large" === a ? __c.R_ * b : __c.DAb * b;
          }
          constructor() {
            this.L8a = y5((a, b) => {
              var c, d;
              b = b.get();
              return (
                null != b &&
                a.layout.rows.count() ===
                  ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  ((null === (d = b.columns) || void 0 === d
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.pua = z5(
              (a) => {
                var b;
                return new Set(
                  (null === (b = a.get()) || void 0 === b
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.es }
            );
            this.rua = z5(
              (a) => {
                var b;
                return new Set(
                  (null === (b = a.get()) || void 0 === b ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.es }
            );
            this.I6a = y5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (0 < this.rua(b).size) return new Set(a.layout.cols);
                b = this.pua(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ua, e.column);
                  for (const f of oOb(
                    c ? c.span.Xb : e.column,
                    c ? c.span.Kc : e.column,
                    a.layout.cols
                  ))
                    (0 === b.size || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.es }
            );
            this.J6a = y5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (0 < this.pua(b).size) return new Set(a.layout.rows);
                b = this.rua(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ua, e.column);
                  for (const f of oOb(
                    c ? c.span.bc : e.ua,
                    c ? c.span.ad : e.ua,
                    a.layout.rows
                  ))
                    (0 === b.size || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.es }
            );
          }
        };
        var pPb = parseInt("4px", 10) || 4,
          $4 = class extends q5 {
            static j(a) {
              R(a, { Cd: e5, Aq: e5, d3: e5 });
            }
            get Cd() {
              return "rtl" === this.props.sheet.direction;
            }
            get Aq() {
              var a;
              const b =
                null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
              if (null != b && 0 !== b.length) return new __c.tF(b);
            }
            get d3() {
              var a, b, c;
              return null === (b = (c = this.props).kna) || void 0 === b
                ? void 0
                : null === (a = b.call(c)) || void 0 === a
                ? void 0
                : a.get();
            }
            render() {
              return T4(__c.mA, {
                mq: "light",
                light: "light",
                kt: "light",
                dark: "light",
                children: this.H_a,
              });
            }
            constructor(...a) {
              super(...a);
              $4.j(this);
              this.onMouseMove = t5((b) => {
                const { onMouseMove: c, sheet: d, Ed: e = 1 } = this.props;
                null === c || void 0 === c ? void 0 : c(b, d, "column", e);
              });
              this.onMouseLeave = t5((b) => {
                var c, d;
                null === (c = (d = this.props).onMouseLeave) || void 0 === c
                  ? void 0
                  : c.call(d, b);
              });
              this.GOa = (b, c, d) => {
                const {
                    sheet: e,
                    ep: f,
                    EE: g,
                    Ed: h = 1,
                    Td: k = 1,
                  } = this.props,
                  l = { jNbTIg: !this.Cd, gtA7Dw: this.Cd },
                  m = (null === d || void 0 === d ? 0 : d.sticky)
                    ? this.Cd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var n;
                const p = (null === d || void 0 === d ? 0 : d.sticky)
                  ? null !== (n = this.d3) && void 0 !== n
                    ? n
                    : m
                  : void 0;
                let q = -1;
                return o5("div", {
                  style: p,
                  className: V4("Vt2_4w", l, {
                    Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    e.layout.cols.map((r) => {
                      q++;
                      if (
                        !(
                          (b && 0 > e.layout.cols.Ne(r, b)) ||
                          (c && 0 < e.layout.cols.Ne(r, c))
                        )
                      )
                        return T4(
                          qPb,
                          {
                            col: r,
                            label: __c.rC(q),
                            ep: f,
                            EE: g,
                            Ed: h,
                            Td: k,
                          },
                          r.id
                        );
                    }),
                    (null === d || void 0 === d ? void 0 : d.sticky) &&
                      T4("div", {
                        style: { width: pPb * h },
                        className: V4("HBvlug", "ru3tFQ", l),
                      }),
                  ],
                });
              };
              this.H_a = (b) => {
                var c;
                const d = this.props.sheet,
                  e = d.view.freeze.vH
                    ? d.layout.Hd.get(d.view.freeze.vH)
                    : void 0,
                  f = { jNbTIg: !this.Cd, gtA7Dw: this.Cd };
                return o5("div", {
                  ref: null === (c = this.Aq) || void 0 === c ? void 0 : c.Vl,
                  className: V4("xhBZaw", f, b.className),
                  children: [
                    e && this.GOa(void 0, e, { sticky: !0 }),
                    this.GOa(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          };
        $4 = w5([Jc], $4);
        var a5 = class extends q5 {
          static j(a) {
            R(a, { Cd: e5, Aq: e5, d3: e5 });
          }
          get Cd() {
            return "rtl" === this.props.sheet.direction;
          }
          get Aq() {
            var a;
            const b =
              null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
            if (null != b && 0 !== b.length) return new __c.tF(b);
          }
          get d3() {
            var a, b, c;
            return null === (b = (c = this.props).kna) || void 0 === b
              ? void 0
              : null === (a = b.call(c)) || void 0 === a
              ? void 0
              : a.get();
          }
          render() {
            return T4(__c.mA, {
              mq: "light",
              light: "light",
              kt: "light",
              dark: "light",
              children: this.ffb,
            });
          }
          constructor(...a) {
            super(...a);
            a5.j(this);
            this.onMouseMove = t5((b) => {
              const { onMouseMove: c, sheet: d, Td: e = 1 } = this.props;
              null === c || void 0 === c ? void 0 : c(b, d, "row", e);
            });
            this.onMouseLeave = t5((b) => {
              var c, d;
              null === (c = (d = this.props).onMouseLeave) || void 0 === c
                ? void 0
                : c.call(d, b);
            });
            this.KOa = (b, c, d) => {
              const {
                  sheet: e,
                  ep: f,
                  EE: g,
                  Ed: h = 1,
                  Td: k = 1,
                } = this.props,
                l = { jNbTIg: !this.Cd, gtA7Dw: this.Cd },
                m = (null === d || void 0 === d ? 0 : d.sticky)
                  ? { top: 0 }
                  : void 0;
              var n;
              const p = (null === d || void 0 === d ? 0 : d.sticky)
                ? null !== (n = this.d3) && void 0 !== n
                  ? n
                  : m
                : void 0;
              let q = -1;
              return o5("div", {
                style: p,
                className: V4("_93roJg", l, {
                  Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky,
                }),
                onMouseMove: this.onMouseMove,
                onMouseLeave: this.onMouseLeave,
                children: [
                  e.rows.map((r) => {
                    q++;
                    if (
                      !(
                        (b && 0 > e.rows.Ne(r, b)) ||
                        (c && 0 < e.rows.Ne(r, c))
                      )
                    )
                      return T4(
                        rPb,
                        {
                          ua: r,
                          label: `${q + 1}`,
                          EE: g,
                          ep: f,
                          Ed: h,
                          Td: k,
                        },
                        r.id
                      );
                  }),
                  (null === d || void 0 === d ? void 0 : d.sticky) &&
                    T4("div", {
                      style: { height: pPb * k },
                      className: V4("HBvlug", "koz2Hg"),
                    }),
                ],
              });
            };
            this.ffb = (b) => {
              var c;
              const d = this.props.sheet,
                e = d.view.freeze.BU
                  ? d.layout.Sd.get(d.view.freeze.BU)
                  : void 0,
                f = { jNbTIg: !this.Cd, gtA7Dw: this.Cd };
              return o5("div", {
                ref: null === (c = this.Aq) || void 0 === c ? void 0 : c.Vl,
                className: V4("An9VeA", f, b.className),
                children: [
                  e && this.KOa(void 0, e, { sticky: !0 }),
                  this.KOa(e ? d.rows.next(e) : void 0),
                ],
              });
            };
          }
        };
        a5 = w5([Jc], a5);
        var qPb = Y4((a) => {
            const b = a.label,
              c = a.col,
              d = a.EE,
              e = a.ep,
              f = a.Ed;
            a = a.Td;
            const g = e(a),
              h = lPb(() => d(c));
            return T4("div", {
              className: V4("_83Rssw", "d2uLIA", W4(h)),
              style: { width: c.width * f, height: g },
              children: T4(vOb, {
                label: b,
                width: c.width,
                height: e(1),
                scale: a,
                rCa: h,
              }),
            });
          }),
          rPb = Y4((a) => {
            const b = a.label,
              c = a.ua,
              d = a.ep,
              e = a.EE,
              f = a.Ed;
            a = a.Td;
            const g = d(f),
              h = lPb(() => e(c));
            return T4("div", {
              className: V4("_83Rssw", "JhBzyw", W4(h)),
              style: { width: g, height: c.height * a },
              children: T4(vOb, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                rCa: h,
              }),
            });
          });
        var sPb =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var tPb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var wOb = __c.jS({ uo: sPb, medium: tPb });
        var b5 = class extends q5 {
          static j(a) {
            R(a, { ae: e5.struct });
          }
          constructor(...a) {
            super(...a);
            b5.j(this);
          }
          render() {
            const a = this.props.element,
              b = this.props.cp,
              c = this.props.Lt,
              d = this.props.Nt,
              e = this.props.Y;
            return T4(this.props.Vp, {
              sheet: a.config,
              container: this.props.container.Fl(a),
              l6: "visible",
              cp: b,
              Lt: c,
              Nt: d,
              Y: e,
              ae: this.ae,
              ph: this.props.ph,
              UG: void 0,
            });
          }
          get ae() {
            return __c.hB(this.props.element.Za, this.props.Be);
          }
        };
        b5 = w5([Jc], b5);
        var uPb = class {
          constructor() {
            this.Ida = new WeakMap();
            this.Y5a = (a) => this.Ida.get(a);
            this.lQa = (a, b) => {
              this.Ida.set(a, b);
            };
            this.s_a = (a, b) => {
              const c = this.Ida.get(a);
              c && c.oa === b.oa && c.Sb === b.Sb && this.Ida.delete(a);
            };
          }
        };
        var HOb = Y4((a) => {
            const b = a.oa,
              c = a.item,
              d = a.Xf,
              e = a.Sb,
              f = a.bf,
              g = a.col,
              h = a.ua,
              k = a.content,
              l = a.pi;
            a = a.rw;
            __c.w("text3" === k.type);
            __c.IF(a, __c.Xq.ra(k.value), (p, q) => __c.Xq.domain.Ub(p, q));
            [a] = fPb(
              () =>
                new vPb(
                  c,
                  e,
                  e5(() => b.zoom)
                )
            );
            const m = X4(() => d.Gl(c), [d, c]),
              n = X4(() => m.Xua.Ad(g, h).WOa.Ad(k.value), [m, g, h, k.value]);
            return T4(f, {
              oa: { ...b, zoom: 1 },
              ih: n,
              text: k.value,
              Sb: a,
              qg: "wrap" === l ? "pre-wrap" : "nowrap",
            });
          }),
          vPb = class extends __c.BS {
            static j(a) {
              R(a, { width: v5.ref, iP: e5 });
            }
            get yx() {
              return this.Gda.yx;
            }
            get iP() {
              const a = (this.N_.width - this.Gda.width) / 2;
              return { left: -a, right: this.Gda.width + a };
            }
            constructor(a, b, c) {
              super();
              vPb.j(this);
              this.sheet = a;
              this.Gda = b;
              this.zoom = c;
              this.width = 0;
              this.marginWidth = void 0;
              this.N_ = new __c.LF(this.sheet, this.Gda, {
                zoom: this.zoom.get(),
              });
            }
          };
        var A5 = parseInt("4px", 10) || 4,
          wPb = Y4(({ sheet: a, Y: b, range: c, Lv: d, Mv: e }) => {
            if (null != c && (d || e)) {
              var f;
              b =
                null !== (f = null === b || void 0 === b ? void 0 : b.get()) &&
                void 0 !== f
                  ? f
                  : 1;
              if (d && e)
                return (
                  (d = a.Aa(c.ad) + c.ad.height),
                  (a = a.za(c.Kc) + c.Kc.width),
                  T4("div", {
                    style: { top: d * b, width: a * b, height: A5 * b },
                    className: V4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.za(c.Kc) + c.Kc.width),
                  T4("div", {
                    style: { left: c * b, width: A5 * b, height: a.height * b },
                    className: V4("aX8dhQ", "gl1RPg"),
                  })
                );
              if (e)
                return (
                  (c = a.Aa(c.ad) + c.ad.height),
                  T4("div", {
                    style: { top: c * b, width: a.width * b, height: A5 * b },
                    className: V4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var B5 = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = S4();
            BOb({ sheet: a, Y: c, range: b, Od: e });
            return T4("div", {
              ref: e,
              className: V4(
                "nstn2A",
                "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          xPb = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = S4();
            BOb({ sheet: a, Y: c, range: b, Od: e });
            a = "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ";
            return T4("div", {
              className: V4("nstn2A", a, "_9sodyg"),
              children: T4("div", {
                ref: e,
                className: V4("nstn2A", a),
                children: d,
              }),
            });
          };
        var DOb = Y4(({ sheet: a, children: b, wC: c }) => {
            const d = Z4(
                (f) => {
                  c.Lua(a, f);
                },
                [c, a]
              ),
              e = Z4(
                (f) => {
                  null != f ? c.yC.set(a, f) : c.yC.delete(a);
                },
                [c, a]
              );
            return T4(__c.xmb, {
              direction: "rtl" === a.config.direction ? "rtl" : "ltr",
              onScroll: d,
              Jw: e,
              children: b,
            });
          }),
          COb = class {
            Lua(a, b) {
              this.onScroll && this.onScroll(a);
              this.d2.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.yC = new WeakMap();
              this.d2 = v5.map(new Map(), { deep: !1 });
              this.scrollTo = t5((b, c) => {
                b = this.yC.get(b);
                null === b || void 0 === b
                  ? void 0
                  : b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var GOb = Y4((a) => {
          const b = a.item,
            c = a.cp,
            d = a.Xf,
            e = a.measureRef,
            f = a.Y,
            g = a.hIa,
            h = a.Sb,
            k = a.Lt,
            l = a.Nt,
            m = a.Vp,
            n = a.PK,
            p = a.ph,
            q = a.Be,
            r = a.wC;
          a = X4(() => __c.hB(b.Za, q), [b, q]);
          const t = X4(
            () =>
              Y4(({ sheet: u, range: v, Lv: x, Mv: y }) =>
                T4(B5, {
                  sheet: u,
                  range: v,
                  Y: f,
                  children: T4(wPb, { sheet: u, Y: f, range: v, Lv: x, Mv: y }),
                })
              ),
            [f]
          );
          c5(
            () =>
              d5(() => {
                var u = b.config.view.freeze.vH
                  ? b.config.layout.Hd.get(b.config.view.freeze.vH)
                  : void 0;
                if (null != u) {
                  var v = Math.min(h.width, b.F);
                  if (b.config.za(u) + u.width > v) {
                    if ((u = r.yC.get(b))) u.style.overflowX = "hidden";
                  } else if ((u = r.yC.get(b))) u.style.overflowX = "scroll";
                }
              }),
            [b, h.width, r]
          );
          return T4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: Math.min(h.width, b.F) },
            children: T4(n, {
              sheet: b,
              children: T4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: b.F, height: b.P },
                children: T4(m, {
                  container: d.Gl(b),
                  sheet: b.config,
                  l6: "visible",
                  cp: c,
                  Y: f,
                  Lt: k,
                  Nt: l,
                  ae: a,
                  ph: p,
                  UG: t,
                }),
              }),
            }),
          });
        });
        var yPb = Y4(({ page: a, range: b, oC: c }) => {
          const d = JOb(a.sheet, b);
          return T4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              null == d ? c(e, f) : __c.zv(__c.Bv(e)).Pq(d) && c(e, f)
            ),
          });
        });
        var zPb = new __c.OS(),
          C5 = (a) => __c.R_ * a,
          APb = () => "primary-default",
          KOb = Y4(
            ({
              container: a,
              cp: b,
              Lt: c,
              Nt: d,
              AZ: e,
              Y: f,
              viewport: g,
              Cgb: h,
              Vp: k,
              ph: l,
              oC: m,
              Uca: n,
              emb: p,
              dlb: q,
              clb: r,
            }) => {
              const t = a.page,
                u = X4(
                  () =>
                    Y4(({ sheet: v, range: x, Lv: y, Mv: z }) =>
                      o5(cPb, {
                        children: [
                          T4(B5, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: T4(wPb, {
                              sheet: v,
                              Y: f,
                              range: x,
                              Lv: y,
                              Mv: z,
                            }),
                          }),
                          o5(xPb, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: [
                              p && T4(p, {}),
                              m && T4(yPb, { page: t, oC: m, range: x }),
                              r && T4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            T4(B5, {
                              sheet: t.sheet,
                              range: x,
                              Y: f,
                              children: T4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? T4(BPb, {
                    container: a,
                    viewport: g,
                    Y: f,
                    cp: b,
                    Lt: c,
                    Nt: d,
                    Vp: k,
                    ph: l,
                    UG: u,
                  })
                : T4(k, {
                    sheet: t.sheet,
                    container: a,
                    l6: "hidden",
                    cp: b,
                    Lt: c,
                    Nt: d,
                    AZ: e,
                    Y: f,
                    viewport: g,
                    ph: l,
                    UG: u,
                  });
            }
          ),
          BPb = Y4((a) => {
            const b = a.container,
              c = a.Y,
              d = a.viewport,
              e = a.cp,
              f = a.Lt,
              g = a.Nt,
              h = a.Vp,
              k = a.ph;
            a = a.UG;
            const l = b.page,
              m = "rtl" === l.sheet.direction,
              n = r5(null),
              p = r5(null),
              q = r5(null);
            c5(() => {
              const y = D5({
                sheet: l.sheet,
                qea: !0,
                rea: !0,
                Y: c,
                viewport: d,
              });
              return l5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = n.current;
                  if (z && A) {
                    var C = "rtl" === l.sheet.direction,
                      F;
                    A.style.position =
                      null !== (F = z.position) && void 0 !== F ? F : "sticky";
                    var H;
                    A.style.top =
                      null !== (H = z.top) && void 0 !== H ? H : "0px";
                    var I, J;
                    C
                      ? (A.style.right =
                          null !== (I = z.right) && void 0 !== I ? I : "0px")
                      : (A.style.left =
                          null !== (J = z.left) && void 0 !== J ? J : "0px");
                    var L;
                    A.style.transform =
                      null !== (L = z.transform) && void 0 !== L ? L : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            c5(() => {
              const y = D5({
                sheet: l.sheet,
                qea: !1,
                rea: !0,
                Y: c,
                viewport: d,
              });
              return l5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = q.current;
                  if (z && A) {
                    var C;
                    A.style.position =
                      null !== (C = z.position) && void 0 !== C ? C : "sticky";
                    var F;
                    A.style.top =
                      null !== (F = z.top) && void 0 !== F ? F : "0px";
                    var H;
                    A.style.transform =
                      null !== (H = z.transform) && void 0 !== H ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            c5(() => {
              const y = D5({
                sheet: l.sheet,
                qea: !0,
                rea: !1,
                Y: c,
                viewport: d,
              });
              return l5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = p.current;
                  if (z && A) {
                    var C = "rtl" === l.sheet.direction,
                      F;
                    A.style.position =
                      null !== (F = z.position) && void 0 !== F ? F : "sticky";
                    var H, I;
                    C
                      ? (A.style.right =
                          null !== (H = z.right) && void 0 !== H ? H : "0px")
                      : (A.style.left =
                          null !== (I = z.left) && void 0 !== I ? I : "0px");
                    var J;
                    A.style.transform =
                      null !== (J = z.transform) && void 0 !== J ? J : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = Z4(
                (y, z, A) =>
                  D5({ sheet: y, qea: z, rea: A, Y: c, viewport: d }),
                [c, d]
              ),
              t = X4(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              u = X4(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var v;
            const x =
              null !== (v = null === c || void 0 === c ? void 0 : c.get()) &&
              void 0 !== v
                ? v
                : 1;
            return o5("div", {
              className: "OsKKIQ",
              children: [
                T4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: T4(xOb, { Cd: m, oHa: !1, ep: C5, scale: x }),
                }),
                T4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: T4($4, {
                    sheet: l.sheet,
                    Ed: x,
                    Td: x,
                    ep: C5,
                    EE: APb,
                    sF: zPb,
                    kna: t,
                  }),
                }),
                T4("div", {
                  ref: p,
                  className: "zm537g",
                  children: T4(a5, {
                    sheet: l.sheet,
                    Ed: x,
                    Td: x,
                    ep: C5,
                    EE: APb,
                    sF: zPb,
                    kna: u,
                  }),
                }),
                T4("div", {
                  className: "VDFv_A",
                  children: T4(h, {
                    sheet: l.sheet,
                    container: b,
                    l6: "hidden",
                    cp: e,
                    Lt: f,
                    Nt: g,
                    AZ: r,
                    Y: c,
                    viewport: d,
                    ph: k,
                    UG: a,
                  }),
                }),
              ],
            });
          }),
          D5 = ({ sheet: a, qea: b, rea: c, Y: d, viewport: e }) =>
            e5(() => {
              var f = null === e || void 0 === e ? void 0 : __c.Jv(e.get()),
                g;
              const h =
                null !== (g = null === d || void 0 === d ? void 0 : d.get()) &&
                void 0 !== g
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new cv(f.left, f.top);
              const k = "rtl" === a.direction;
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var f5 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
          DPb = class {
            constructor() {
              this.uQa = CPb;
              this.U5a = z5((a) => {
                const b = new Map();
                let c = 0;
                a.layout.rows.forEach((d) => {
                  const e = c,
                    f = e + d.height;
                  b.set(d, { start: e, end: f });
                  c = f;
                });
                return b;
              });
              this.p5a = z5((a) => {
                const b = new Map();
                var c = "rtl" === a.direction;
                const d = c ? -1 : 1;
                let e = 0;
                c &&
                  ((c = a.layout.cols.last()),
                  (e = null != c ? a.za(c) + c.width : 0));
                a.layout.cols.forEach((f) => {
                  const g = e,
                    h = g + f.width * d;
                  b.set(f, { start: g, end: h });
                  e = h;
                });
                return b;
              });
            }
          },
          EPb = class {
            constructor() {
              this.Qeb = y5(
                (a, b, c) => {
                  const d = a.layout.cells.get(c, b);
                  var e,
                    f,
                    g = k5(
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== e
                        ? e
                        : b,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Kc) &&
                        void 0 !== f
                        ? f
                        : b,
                      a.layout.cols
                    ),
                    h,
                    k;
                  e = k5(
                    null !==
                      (h = null === d || void 0 === d ? void 0 : d.span.bc) &&
                      void 0 !== h
                      ? h
                      : c,
                    null !==
                      (k = null === d || void 0 === d ? void 0 : d.span.ad) &&
                      void 0 !== k
                      ? k
                      : c,
                    a.layout.rows
                  );
                  var l = d ? c === d.span.bc : !0;
                  const m = d ? c === d.span.ad : !0,
                    n = d ? b === d.span.Xb : !0;
                  f = d ? b === d.span.Kc : !0;
                  if (n || f || l || m) {
                    h = {};
                    var p = a.layout.rows.Jc(c),
                      q = a.layout.rows.next(c),
                      r = a.layout.cols.Jc(b);
                    k = a.layout.cols.next(b);
                    if (l) {
                      l = TOb(a, b, c);
                      const Z = b && p && a.layout.cells.get(p, b);
                      p = b && p && UOb(a, b, p);
                      var t, u;
                      const ja = k5(
                        null !==
                          (t =
                            null === Z || void 0 === Z ? void 0 : Z.span.Xb) &&
                          void 0 !== t
                          ? t
                          : b,
                        null !==
                          (u =
                            null === Z || void 0 === Z ? void 0 : Z.span.Kc) &&
                          void 0 !== u
                          ? u
                          : b,
                        a.layout.cols
                      );
                      var v, x;
                      t = a.layout.cols.Ne(
                        null !==
                          (v =
                            null === d || void 0 === d ? void 0 : d.span.Xb) &&
                          void 0 !== v
                          ? v
                          : b,
                        null !==
                          (x =
                            null === Z || void 0 === Z ? void 0 : Z.span.Xb) &&
                          void 0 !== x
                          ? x
                          : b
                      );
                      h.Aa = g5(l, p, g, ja, t);
                    }
                    if (m) {
                      v = UOb(a, b, c);
                      x = b && q && a.layout.cells.get(q, b);
                      t = b && q && TOb(a, b, q);
                      var y, z;
                      u = k5(
                        null !==
                          (y =
                            null === x || void 0 === x ? void 0 : x.span.Xb) &&
                          void 0 !== y
                          ? y
                          : b,
                        null !==
                          (z =
                            null === x || void 0 === x ? void 0 : x.span.Kc) &&
                          void 0 !== z
                          ? z
                          : b,
                        a.layout.cols
                      );
                      var A, C;
                      y = a.layout.cols.Ne(
                        null !==
                          (A =
                            null === d || void 0 === d ? void 0 : d.span.Xb) &&
                          void 0 !== A
                          ? A
                          : b,
                        null !==
                          (C =
                            null === x || void 0 === x ? void 0 : x.span.Xb) &&
                          void 0 !== C
                          ? C
                          : b
                      );
                      h.La = g5(v, t, g, u, y);
                    }
                    if (n) {
                      g = VOb(a, b, c);
                      A = r && c && a.layout.cells.get(c, r);
                      C = r && c && WOb(a, r, c);
                      var F, H;
                      y = k5(
                        null !==
                          (F =
                            null === A || void 0 === A ? void 0 : A.span.bc) &&
                          void 0 !== F
                          ? F
                          : c,
                        null !==
                          (H =
                            null === A || void 0 === A ? void 0 : A.span.ad) &&
                          void 0 !== H
                          ? H
                          : c,
                        a.layout.rows
                      );
                      var I, J;
                      F = a.layout.rows.Ne(
                        null !==
                          (I =
                            null === d || void 0 === d ? void 0 : d.span.bc) &&
                          void 0 !== I
                          ? I
                          : c,
                        null !==
                          (J =
                            null === A || void 0 === A ? void 0 : A.span.bc) &&
                          void 0 !== J
                          ? J
                          : c
                      );
                      h.za = g5(g, C, e, y, F);
                    }
                    if (f) {
                      b = WOb(a, b, c);
                      I = k && c && a.layout.cells.get(c, k);
                      J = k && c && VOb(a, k, c);
                      var L, Q;
                      F = k5(
                        null !==
                          (L =
                            null === I || void 0 === I ? void 0 : I.span.bc) &&
                          void 0 !== L
                          ? L
                          : c,
                        null !==
                          (Q =
                            null === I || void 0 === I ? void 0 : I.span.ad) &&
                          void 0 !== Q
                          ? Q
                          : c,
                        a.layout.rows
                      );
                      var P, V;
                      a = a.layout.rows.Ne(
                        null !==
                          (P =
                            null === d || void 0 === d ? void 0 : d.span.bc) &&
                          void 0 !== P
                          ? P
                          : c,
                        null !==
                          (V =
                            null === I || void 0 === I ? void 0 : I.span.bc) &&
                          void 0 !== V
                          ? V
                          : c
                      );
                      h.Sa = g5(b, J, e, F, a);
                    }
                    return h;
                  }
                },
                { equals: XOb }
              );
              this.t0a = (a, b, c) => {
                const d = new Map();
                a.forEach(({ za: e, Aa: f, Sa: g, La: h }, k) => {
                  e && d.set(e.color, (d.get(e.color) || 0) + 1);
                  f && d.set(f.color, (d.get(f.color) || 0) + 1);
                  g &&
                    c &&
                    k.includes(c.id) &&
                    d.set(g.color, (d.get(g.color) || 0) + 1);
                  h &&
                    b &&
                    k.includes(b.id) &&
                    d.set(h.color, (d.get(h.color) || 0) + 1);
                });
                return d;
              };
            }
          },
          CPb = new EPb(),
          ROb = new DPb();
        var aPb = class {
          constructor(a) {
            this.B2 = a;
            this.e_a = __c.rU;
            this.E5a = y5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let p = 0; p < d.length; p++) {
                var g = d[p],
                  h = this.y5a(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[p + 1];
                      if (null == k || !NI(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[p + 1];
                      if (null == k || !NI(b, c, k)) continue;
                      k = d[p - 1];
                      if (null == k || !NI(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[p - 1];
                      if (null == k || !NI(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + ("center" === h ? 0 : this.e_a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.za(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.za(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.za(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); 0 <= l; l--) {
                        var m = d[l];
                        const q = 0 > l - 1 || NI(b, c, d[l - 1]);
                        var n;
                        if ((n = m === g || NI(b, c, m)))
                          (n = b.za(m)), (n = h < n && n < k);
                        if (n && q) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = NI(b, c, l)))
                          (m = b.za(l)), (m = h < m && m < k);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.y5a = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Ha.ref) &&
                g.span.bc === g.span.ad &&
                g.span.Xb === g.span.Kc
              ) {
                var { pi: h, textAlign: k } = __c.Yf(
                  __c.Fg,
                  b.layout.attrs.get(
                    Gg({ pi: void 0, textAlign: void 0 }),
                    c,
                    d
                  ) || {}
                );
                if ("overflow" === h) {
                  var l = this.B2.FE(b, c, d);
                  return __c.MI(
                    k,
                    null === (e = g.ref.content.ref) || void 0 === e
                      ? void 0
                      : e.type,
                    null === (f = g.ref.Ha.ref) || void 0 === f
                      ? void 0
                      : f.type,
                    l ? () => l.Uo.type : void 0
                  );
                }
              }
            };
          }
        };
        var FPb = Y4(function (a) {
          const b = a.sheet;
          var c = a.Sp;
          const d = a.Ijb,
            e = a.Y,
            f = a.Ooa,
            g = a.n5a;
          a = a.overflow;
          const h = S4();
          ePb(
            () =>
              d5(() => {
                const p = D(h.current);
                var q;
                const r =
                  null !==
                    (q = null === e || void 0 === e ? void 0 : e.get()) &&
                  void 0 !== q
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = Z4((p) => f.E5a(b, p, d, g), [f, b, d, g]);
          var l = Z4(
            (p, q) => {
              var r, t;
              return null !==
                (t = null === (r = k(p)) || void 0 === r ? void 0 : r.get(q)) &&
                void 0 !== t
                ? t
                : 0;
            },
            [k]
          );
          c = SOb(b, c, d, l);
          c = dPb(c);
          l = b.width;
          const m = b.height,
            n = "rtl" === b.direction;
          return T4("svg", {
            ref: h,
            role: "presentation",
            className: V4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: "visible" === a,
              JMH1ng: "hidden" === a,
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Sj: t, Tj: u }) =>
              T4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: u,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: v, p2: x }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${u}`
              )
            ),
          });
        });
        var GPb = class {
          get size() {
            return this.Tda;
          }
          get([a, b]) {
            return (a = this.bF.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.bF.get(a);
            return null == a ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.bF.get(a);
            null == d && ((d = new Map()), this.bF.set(a, d));
            d.set(b, c);
            this.Tda++;
            return this;
          }
          clear() {
            this.bF.clear();
            this.Tda = 0;
          }
          delete([a, b]) {
            const c = this.bF.get(a);
            if (null == c || !c.delete(b)) return !1;
            this.Tda--;
            0 === c.size && this.bF.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.bF) for (const [d, e] of c) a([b, d], e);
          }
          *[Symbol.iterator]() {
            for (const [a, b] of this.bF)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Tda = 0;
            this.bF = new Map();
          }
        };
        var F5 = class extends q5 {
          static j(a) {
            R(a, { D8: e5, wTa: e5 });
          }
          render() {
            var a;
            const { iZ: b, ...c } = this.props,
              d = this.props.sheet;
            return o5("div", {
              ref: this.xQa,
              className: V4(
                "ZTz_iA",
                "ltr" === d.direction ? "TA4X7w" : "WvuqMw"
              ),
              children: [
                (null === b || void 0 === b ? void 0 : b.ZAa) &&
                  T4(E5, {
                    ...c,
                    sheet: d,
                    range: b.ZAa.range,
                    Lv: !0,
                    Mv: !0,
                    className: "_0C8M3w",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.lUa) &&
                  T4(E5, {
                    ...c,
                    sheet: d,
                    range: b.lUa.range,
                    Lv: !1,
                    Mv: !0,
                    className: "_7n44yg",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.rHa) &&
                  T4(E5, {
                    ...c,
                    sheet: d,
                    range: b.rHa.range,
                    Lv: !0,
                    Mv: !1,
                    className: "fF5r6w",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.Mwa) &&
                  T4(E5, {
                    ...c,
                    sheet: d,
                    range:
                      null === b || void 0 === b
                        ? void 0
                        : null === (a = b.Mwa) || void 0 === a
                        ? void 0
                        : a.range,
                    Lv: !1,
                    Mv: !1,
                    className: "llILYw",
                    M6: this.wTa,
                  }),
              ],
            });
          }
          componentDidMount() {
            const a = d5(() => {
              var b = this.props,
                c = b.Y;
              b = b.sheet;
              const d = this.xQa.current;
              d &&
                ((c = c ? c.get() : 1),
                (d.style.width = `${b.width * c}px`),
                (d.style.height = `${b.height * c}px`));
            });
            __c.wc(this, [a]);
          }
          get D8() {
            return { type: "excluded" };
          }
          get wTa() {
            return { type: "hidden", isVisible: this.d_a };
          }
          constructor(...a) {
            super(...a);
            F5.j(this);
            this.xQa = kz();
            this.d_a = (b, c) => {
              var d;
              const e = this.props.sheet;
              var f = this.props.iZ;
              f =
                null === f || void 0 === f
                  ? void 0
                  : null === (d = f.Mwa) || void 0 === d
                  ? void 0
                  : d.range;
              return e.layout.cols.has(b) && e.layout.rows.has(c)
                ? null == f
                  ? !0
                  : 0 >= e.layout.cols.Ne(f.Xb, b) &&
                    0 >= e.layout.cols.Ne(b, f.Kc) &&
                    0 >= e.layout.rows.Ne(f.bc, c) &&
                    0 >= e.layout.rows.Ne(c, f.ad)
                : !1;
            };
          }
        };
        F5 = w5([Jc], F5);
        var E5 = class extends q5 {
          static j(a) {
            R(a, { Yua: e5, bounds: e5 });
          }
          get Yua() {
            const a = this.props.viewport,
              b = this.props.Lv,
              c = this.props.Mv;
            return null == a || (!b && !c)
              ? a
              : e5(() => {
                  const d = __c.Jv(a.get());
                  return __c.Bv({
                    top: c ? 0 : d.top,
                    left: b ? 0 : d.left,
                    width: d.width,
                    height: d.height,
                  });
                });
          }
          render() {
            const a = this.props.sheet,
              b = this.props.container,
              c = this.props.range,
              d = this.props.M6,
              e = this.props.UG,
              f = this.props.Lv,
              g = this.props.Mv;
            return o5("div", {
              ref: this.qsa,
              className: V4("i0YQww", this.props.className),
              children: [
                T4("div", {
                  ref: this.WMa,
                  className: "vUKoKg",
                  children: T4("div", {
                    ref: this.XMa,
                    children: T4(G5, {
                      sheet: a,
                      container: b,
                      bounds:
                        "hidden" ===
                        (null === d || void 0 === d ? void 0 : d.type)
                          ? void 0
                          : c,
                      q_:
                        "hidden" ===
                        (null === d || void 0 === d ? void 0 : d.type)
                          ? d.isVisible
                          : void 0,
                      cp: this.props.cp,
                      eD: this.props.eD,
                      ph: this.props.ph,
                      TX: this.props.TX,
                      Y: this.props.Y,
                      Sp: this.Sp,
                      Mfa: this.Mfa,
                      gR: this.gR,
                    }),
                  }),
                }),
                T4(this.Oga, {}),
                e && T4(e, { sheet: a, range: c, Lv: f, Mv: g }),
              ],
            });
          }
          componentDidMount() {
            const a = d5(() => {
                var g = this.props,
                  h = g.Y,
                  k = g.sheet;
                const l = g.range;
                var m = this.qsa.current;
                const n = this.WMa.current;
                g = this.XMa.current;
                h = h ? h.get() : 1;
                const p = l ? k.za(l.Kc) + l.Kc.width - k.za(l.Xb) : k.width,
                  q = l ? k.Aa(l.ad) + l.ad.height - k.Aa(l.bc) : k.height;
                m &&
                  ((m.style.width = `${p * h}px`),
                  (m.style.height = `${q * h}px`));
                n &&
                  ((n.style.width = `${p * h}px`),
                  (n.style.height = `${q * h}px`));
                m = "rtl" === k.direction;
                m = l ? k.za(l.Xb) * h * (m ? 1 : -1) : 0;
                k = l ? -k.Aa(l.bc) * h : 0;
                g && (g.style.transform = `translate(${m}px, ${k}px)`);
              }),
              b = this.props.sheet;
            var c = this.props.AZ;
            const d = this.props.Lv,
              e = this.props.Mv,
              f =
                d || e
                  ? null === c || void 0 === c
                    ? void 0
                    : c(b, d, e)
                  : void 0;
            c = d5(() => {
              const g = this.qsa.current;
              if (null != g) {
                var h = d || e ? "sticky" : "relative",
                  k = e ? "0px" : "unset",
                  l = d ? "0px" : "unset",
                  m = d ? "0px" : "unset",
                  n = "rtl" === b.direction;
                if (null == f)
                  (g.style.position = h),
                    (g.style.top = k),
                    (g.style.left = n ? "unset" : l),
                    (g.style.right = n ? m : "unset");
                else {
                  const v = f.get();
                  var p;
                  g.style.position =
                    null !== (p = v.position) && void 0 !== p ? p : h;
                  var q;
                  g.style.top = null !== (q = v.top) && void 0 !== q ? q : k;
                  var r;
                  g.style.left = n
                    ? "unset"
                    : null !== (r = v.left) && void 0 !== r
                    ? r
                    : l;
                  var t;
                  g.style.right = n
                    ? null !== (t = v.right) && void 0 !== t
                      ? t
                      : m
                    : "unset";
                  var u;
                  g.style.transform =
                    null !== (u = v.transform) && void 0 !== u ? u : "unset";
                }
              }
            });
            __c.wc(this, [a, c]);
          }
          get bounds() {
            const a = this.props.sheet,
              b = this.props.range;
            var c, d, e, f;
            return {
              Xb:
                null !== (c = null === b || void 0 === b ? void 0 : b.Xb) &&
                void 0 !== c
                  ? c
                  : a.layout.cols.first(),
              Kc:
                null !== (d = null === b || void 0 === b ? void 0 : b.Kc) &&
                void 0 !== d
                  ? d
                  : a.layout.cols.last(),
              bc:
                null !== (e = null === b || void 0 === b ? void 0 : b.bc) &&
                void 0 !== e
                  ? e
                  : a.layout.rows.first(),
              ad:
                null !== (f = null === b || void 0 === b ? void 0 : b.ad) &&
                void 0 !== f
                  ? f
                  : a.layout.rows.last(),
            };
          }
          constructor(...a) {
            super(...a);
            E5.j(this);
            this.qsa = kz();
            this.WMa = kz();
            this.XMa = kz();
            this.gR = new HPb();
            this.Kjb = e5(
              () =>
                [...this.Sp.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.rows.Ne(b, c)
                ),
              { equals: __c.hs() }
            );
            this.Hjb = e5(
              () =>
                [...this.Mfa.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.cols.Ne(b, c)
                ),
              { equals: __c.hs() }
            );
            this.Oga = Y4(() =>
              T4(this.props.XWa, {
                Sp: this.Kjb,
                Ijb: this.Hjb,
                n5a: this.gR.u5a,
                range: this.props.range,
              })
            );
            this.Sp = e5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.Y,
                  e =
                    null === (b = this.Yua) || void 0 === b ? void 0 : b.get();
                if (e && (0 >= e.height || 0 >= e.width)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.y - f : b.bc ? c.Aa(b.bc) : 0;
                e = e ? e.br.y + f : b.ad ? c.Aa(b.ad) + b.ad.height : 0;
                f = new Map();
                for (
                  let h = b.bc;
                  null != h && null != b.ad && 0 >= c.layout.rows.Ne(h, b.ad);
                  h = c.layout.rows.next(h)
                ) {
                  const k = c.Aa(h);
                  if (!(k + h.height < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: u5.shallow }
            );
            this.Mfa = e5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.Y,
                  e =
                    null === (b = this.Yua) || void 0 === b ? void 0 : b.get();
                if (e && (0 >= e.height || 0 >= e.width)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.x - f : b.Xb ? c.za(b.Xb) : 0;
                e = e ? e.br.x + f : b.Kc ? c.za(b.Kc) + b.Kc.width : 0;
                f = new Map();
                for (
                  let h = b.Xb;
                  null != h && null != b.Kc && 0 >= c.layout.cols.Ne(h, b.Kc);
                  h = c.layout.cols.next(h)
                ) {
                  const k = c.za(h);
                  if (!(k + h.width < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: u5.shallow }
            );
          }
        };
        E5 = w5([Jc], E5);
        var HPb = class {
            constructor() {
              this.cells = new GPb();
              this.wta = (a, b, c) => {
                let d = this.cells.get([a, b]);
                null == d &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.u5a = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                null == d &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return null === (c = d.get()) || void 0 === c ? void 0 : c.LCa;
              };
            }
          },
          G5 = class extends q5 {
            static j(a) {
              R(a, { vK: v5.shallow, Aq: e5, IAa: t5, u7: t5.bound });
            }
            get Aq() {
              var a;
              const b =
                null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
              if (null != b && 0 !== b.length) return new __c.tF(b);
            }
            render() {
              var a;
              return o5("div", {
                ref: kPb(
                  this.Od,
                  null === (a = this.Aq) || void 0 === a ? void 0 : a.Vl
                ),
                children: [
                  T4("div", { ref: this.uja, className: "_5YlOqQ" }),
                  T4("div", { ref: this.wja, className: "_XCmKw" }),
                  this.vK.map((b) => b.wdb),
                ],
              });
            }
            componentDidMount() {
              const a = l5(
                  () => [
                    this.props.sheet,
                    this.props.Mfa.get(),
                    this.props.Sp.get(),
                  ],
                  ([d, e, f], g) => {
                    [g] = g || [];
                    d !== g &&
                      ((d = D(this.uja.current)),
                      (g = D(this.wja.current)),
                      (d.innerHTML = ""),
                      (g.innerHTML = ""),
                      (this.qxa.length = 0),
                      (this.vK.length = 0));
                    this.IAa(e, f);
                  },
                  { fireImmediately: !0 }
                ),
                b = d5(() => {
                  var d = this.props,
                    e = d.Y;
                  d = d.sheet;
                  const f = this.Od.current;
                  f &&
                    ((e = e ? e.get() : 1),
                    (f.style.width = `${d.width * e}px`),
                    (f.style.height = `${d.height * e}px`));
                }),
                c = this.vK.map((d) => $Ob(d));
              __c.wc(this, [b, a, ...c]);
            }
            IAa(a, b) {
              const c = D(this.uja.current),
                d = D(this.wja.current),
                e = [],
                f = new Map();
              for (const g of this.qxa)
                b.has(g.ua) ? f.set(g.ua, g) : e.push(g);
              for (const [g, h] of b)
                (b = f.get(g) || e.pop()),
                  b ||
                    ((b = new IPb(this.u7, g)),
                    c.appendChild(b.J6),
                    d.appendChild(b.L6),
                    this.qxa.push(b)),
                  b.update(h, g, a);
              for (const g of e) g.hide();
            }
            u7(a, b) {
              const c = this.props.TX,
                d = this.props.sheet,
                e = this.props.container,
                f = this.props.q_,
                g = this.props.gR;
              a = new JPb(
                this.props.eD,
                this.props.ph,
                c(a, b),
                d,
                a,
                b,
                e,
                f,
                g.wta
              );
              __c.wc(this, $Ob(a));
              this.vK.push(a);
              return a;
            }
            constructor(...a) {
              super(...a);
              G5.j(this);
              this.Od = kz();
              this.uja = kz();
              this.wja = kz();
              this.qxa = [];
              this.vK = [];
            }
          };
        G5 = w5([Jc], G5);
        var IPb = class {
            static j(a) {
              R(a, { update: t5 });
            }
            update(a, b, c) {
              [this.J6, this.L6].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ua = b;
              for (const [d] of c)
                (c = this.vK.get(d)),
                  c ||
                    ((c = this.u7(d, b)),
                    this.vK.set(d, c),
                    this.J6.appendChild(c.I6),
                    this.L6.appendChild(c.MQ)),
                  c.update(b);
            }
            hide() {
              [this.J6, this.L6].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              IPb.j(this);
              this.u7 = a;
              this.ua = b;
              this.J6 = document.createElement("div");
              this.L6 = document.createElement("div");
              this.vK = new Map();
            }
          },
          JPb = class {
            static j(a) {
              R(a, {
                q7: v5.ref,
                ua: v5.ref,
                update: t5,
                yv: e5,
                attrs: e5.struct,
                q_: e5,
                FIa: e5,
                wv: e5,
                renderer: e5,
                LCa: e5.struct,
              });
            }
            update(a) {
              a !== this.ua &&
                ((this.ua = a),
                (this.lG.ua = a),
                this.sla && this.sla(),
                (this.sla = this.wta(this.ua, this.col, this)));
            }
            get wdb() {
              return this.q7;
            }
            get yv() {
              const a = this.sheet.layout.cells.get(this.ua, this.col);
              if (!a || (a.span.bc === this.ua && a.span.Xb === this.col))
                return a ? a.ref : void 0;
            }
            get attrs() {
              return (
                this.sheet.layout.attrs.get(
                  Gg({ pi: 0, textAlign: 0, direction: 0 }),
                  this.ua,
                  this.col
                ) || {}
              );
            }
            get q_() {
              return null != this.isVisible
                ? this.isVisible(this.col, this.ua)
                : !0;
            }
            get FIa() {
              const a = this.sheet.layout.cells.get(this.ua, this.col);
              return !a || (a.span.bc === this.ua && a.span.Xb === this.col);
            }
            get wv() {
              const a = this.sheet,
                b = this.ua,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ua: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.Kcb.Ad(c, b);
                case "sheet-item":
                  return this.container.Xua.Ad(c, b);
                case "sheet-element":
                  return this.container.ugb.Ad(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              if (this.q_) {
                var a = this.yv;
                if (a && (a.content.ref || a.Ha.ref))
                  return this.eD({
                    context: { container: this.wv, attrs: this.attrs },
                    rw: this.gra,
                    ph: this.ph,
                  });
              }
            }
            get LCa() {
              this.MCa.reportObserved();
              var a = hPb(() => this.renderer);
              if (
                a &&
                ((a = "react" === a.type ? this.w1 : this.SD),
                0 !== a.childNodes.length &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k) {
              JPb.j(this);
              var l, m, n, p, q, r;
              this.eD = a;
              this.lG = c;
              this.sheet = d;
              this.col = e;
              this.container = g;
              this.isVisible = h;
              this.wta = k;
              this.I6 = document.createElement("div");
              this.MQ = document.createElement("div");
              this.tH = document.createElement("div");
              this.SD = document.createElement("div");
              this.w1 = document.createElement("div");
              this.MCa = gPb("content size atom");
              this.gra = t5(() => this.MCa.reportChanged());
              this.ua = f;
              this.I6.className = "_2JFriw";
              this.MQ.className = "imy9ug";
              this.tH.className = V4("pDMp7w", {
                _0yZ6Qg:
                  "text3" !==
                  (null === (m = this.yv) || void 0 === m
                    ? void 0
                    : null === (l = m.content.ref) || void 0 === l
                    ? void 0
                    : l.type),
                qhF5uA:
                  "text3" !==
                    (null === (p = this.yv) || void 0 === p
                      ? void 0
                      : null === (n = p.content.ref) || void 0 === n
                      ? void 0
                      : n.type) &&
                  "text2" !==
                    (null === (r = this.yv) || void 0 === r
                      ? void 0
                      : null === (q = r.content.ref) || void 0 === q
                      ? void 0
                      : q.type),
              });
              this.SD.className = "_30B9pw";
              this.tH.appendChild(this.SD);
              this.MQ.appendChild(this.tH);
              this.w1.className = "G7zH2w";
              this.sla = k(this.ua, this.col, this);
              this.ph = (t) => T4(b, { ...t, rw: this.gra });
            }
          };
        var m5 = class extends q5 {
          static j(a) {
            R(a, { iZ: e5 });
          }
          render() {
            const {
              sheet: a,
              container: b,
              cp: c,
              AZ: d,
              eD: e,
              ae: f,
              ph: g,
              viewport: h,
              UG: k,
              $Ta: l = !1,
            } = this.props;
            return T4("div", {
              className: V4(
                "SNkrHw",
                "ltr" === a.direction ? "TA4X7w" : "WvuqMw",
                { RaA0Nw: l }
              ),
              ...f,
              children: T4(F5, {
                eD: e,
                ph: g,
                XWa: this.Oga,
                TX: this.TX,
                sheet: a,
                container: b,
                cp: c,
                AZ: d,
                Y: this.Y,
                viewport: h,
                UG: k,
                iZ: this.iZ,
              }),
            });
          }
          get iZ() {
            var a = this.props.sheet;
            const b = {},
              c = a.view.freeze.BU ? a.layout.Sd.get(a.view.freeze.BU) : void 0,
              d = a.view.freeze.vH ? a.layout.Hd.get(a.view.freeze.vH) : void 0,
              e = a.layout.rows.first(),
              f = a.layout.rows.last(),
              g = a.layout.cols.first(),
              h = a.layout.cols.last();
            if (null != e && null != f && null != g && null != h) {
              var k = d ? a.layout.cols.next(d) : g;
              a = c ? a.layout.rows.next(c) : e;
              c && d && (b.ZAa = { range: { Xb: g, bc: e, Kc: d, ad: c } });
              c && k && (b.lUa = { range: { Xb: k, bc: e, Kc: h, ad: c } });
              d && a && (b.rHa = { range: { Xb: g, bc: a, Kc: d, ad: f } });
              a && k && (b.Mwa = { range: { Xb: k, bc: a, Kc: h, ad: f } });
              return b;
            }
          }
          get Y() {
            return this.props.Y ? this.props.Y : e5(() => 1);
          }
          constructor(...a) {
            super(...a);
            m5.j(this);
            this.Oga = Y4((b) => {
              const { sheet: c, Ooa: d, Y: e, l6: f = "hidden" } = this.props;
              return T4(B5, {
                sheet: c,
                range: b.range,
                Y: e,
                children: T4(FPb, {
                  ...b,
                  sheet: c,
                  Y: this.Y,
                  Ooa: d,
                  overflow: f,
                }),
              });
            });
            this.TX = (b, c) =>
              new __c.kGa(
                this.props.Pz,
                this.props.sheet,
                b,
                c,
                this.Y,
                this.Lt,
                this.Nt
              );
            this.Lt = (b, c) => {
              var d, e;
              return null === (d = (e = this.props).Lt) || void 0 === d
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
            this.Nt = (b, c) => {
              var d, e;
              return null === (d = (e = this.props).Nt) || void 0 === d
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
          }
        };
        m5 = w5([Jc], m5);
        __c.qGa = {
          K7a: function (a) {
            const b = a.In,
              c = a.ye,
              d = a.fd,
              e = a.ho,
              f = a.B2,
              g = a.Pz,
              h = a.iW;
            uOb({ Oz: a.Oz, pf: a.pf, Nhb: a.nO });
            const k = bPb({ eD: h, B2: f, Pz: g });
            b.fha = LOb({ Vp: k });
            c.Pga = AOb({ Vp: k });
            ({ aXa: a } = IOb({ Vp: k, bf: e(), vQa: new uPb() }));
            d.eq.eha = a;
            const { gVa: l, hVa: m, fVa: n } = zOb();
            return {
              $ya: Y4((p) =>
                T4(mPb, {
                  ...p,
                  container: void 0,
                  Vp: k,
                  $Wa: l,
                  bXa: m,
                  YWa: n,
                  ph: nPb,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/1affc1a913e3c39c.js.map
