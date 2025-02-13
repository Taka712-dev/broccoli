(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 32282: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(999741);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var B = __c.B;
        var PPb = function (a, b, c, d) {
            c = new OPb(c, d);
            B(1 === a.count(), "Only single widget root element is supported");
            a = a.first();
            B(
              null != a && "layout" === a.type,
              `Unexpected widget root found: ${
                null === a || void 0 === a ? void 0 : a.type
              }`
            );
            c.Ofa(a, b);
          },
          RPb = function (a) {
            return {
              ...__c.ux,
              ...H5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Jfa.width,
                height: a.Jfa.height,
              },
              yb: a.yb.map(QPb),
            };
          },
          SPb = function (a) {
            switch (a.pG) {
              case 0:
                var b = __c.Aj.Nc().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? 1e3 * a.lineHeight : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Qg("color", a.color);
                b = b
                  .zc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.SL,
                  ...I5,
                  ...H5,
                  Pa: null !== (c = a.Pa) && void 0 !== c ? c : 0,
                  text: b,
                  rh: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.SL, ...I5, ...H5, text: b, rh: 2 }
                );
              default:
                throw new E(a);
            }
          },
          M5 = function ({ content: a, fill: b, border: c, V: d }) {
            b = { ...__c.E8a, fill: J5(b), border: K5(c), V: L5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: RPb(a) };
              case "text":
                return { ...b, element: SPb(a) };
              case "layout":
                return { ...b, element: TPb(a) };
              default:
                throw new E(a);
            }
          },
          TPb = function ({
            cells: a,
            border: b,
            fill: c,
            V: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.F8a,
              ...I5,
              ...H5,
              F: I5.width,
              P: I5.height,
              fill: J5(c),
              border: K5(b),
              direction: 1,
              V: L5(d),
              cells: new Map(a.map((k) => [k.id, M5(k)])),
              behavior: {
                rules: [
                  {
                    Fg: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: null !== g && void 0 !== g ? g : 0,
                      rowGap: null !== h && void 0 !== h ? h : 0,
                      Rg: UPb(a),
                    },
                  },
                ],
              },
              Lf: void 0,
            };
          },
          UPb = function (a) {
            return new Map(a.map((b) => [b.id, VPb(b)]));
          },
          VPb = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.gya,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.GR,
                ...(null != b ? ("number" === typeof b ? { all: b } : b) : {}),
              },
            };
          },
          K5 = function (a) {
            var b;
            const c =
              null !== (b = null === a || void 0 === a ? void 0 : a.color) &&
              void 0 !== b
                ? b
                : "#000000";
            var d;
            return {
              ...__c.iF,
              all: a
                ? {
                    ...__c.wR,
                    weight: null !== (d = a.weight) && void 0 !== d ? d : 1,
                    color: c,
                    xf: !0,
                  }
                : void 0,
            };
          },
          L5 = function (a) {
            return {
              ...__c.FR,
              ...(null != a ? ("number" === typeof a ? { all: a } : a) : {}),
            };
          },
          QPb = function (a) {
            return { ...__c.vx, ...a, fill: J5(a.fill), stroke: WPb(a.stroke) };
          },
          WPb = function (a) {
            return a ? { ...__c.wR, color: a.color, weight: a.weight } : void 0;
          },
          J5 = function (a) {
            var b;
            const c = {
              ...__c.wx,
              Pa:
                null !== (b = null === a || void 0 === a ? void 0 : a.Pa) &&
                void 0 !== b
                  ? b
                  : 0,
            };
            switch (null === a || void 0 === a ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, pb: a.pb };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          bQb = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            XPb(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                YPb(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, M5(f));
                  g = !0;
                });
                g ||
                  (N5(e.fill, f.fill), ZPb(e.border, f.border), $Pb(e.V, f.V));
              },
              (e) => M5(e)
            );
            aQb(a.behavior, b, c);
            N5(a.fill, b.fill);
            $Pb(a.V, b.V);
            ZPb(a.border, b.border);
            var d;
            a.Pa = null !== (d = b.Pa) && void 0 !== d ? d : 0;
          },
          aQb = function (a, b, c) {
            O5(
              a.rules,
              [b],
              (d) => {
                cQb(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                cQb(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                var f;
                d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                XPb(
                  d.grid.Rg,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    "number" === typeof k && g.padding.all !== k
                      ? (g.padding.all = k)
                      : "number" !== typeof k &&
                        ((g.padding.Aa =
                          null === k || void 0 === k ? void 0 : k.Aa),
                        (g.padding.La =
                          null === k || void 0 === k ? void 0 : k.La),
                        (g.padding.za =
                          null === k || void 0 === k ? void 0 : k.za),
                        (g.padding.Sa =
                          null === k || void 0 === k ? void 0 : k.Sa));
                    g.alignSelf = p;
                  },
                  (g) => VPb(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Fg: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                    Rg: UPb(d.cells),
                  },
                };
              }
            );
          },
          dQb = function (a, b) {
            O5(
              a.yb,
              b.yb,
              (e, f) => {
                e.d = f.d;
                N5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(WPb(f.stroke));
              },
              (e) => QPb(e)
            );
            const { viewBox: c, width: d } = RPb(b);
            a.width = d;
            __c.Bv(a.viewBox).equals(__c.Bv(c)) || (a.viewBox = c);
          },
          YPb = function (a, b, c) {
            switch (b.type) {
              case "shape":
                "shape" === a.type ? dQb(a, b) : c();
                break;
              case "text":
                ("text" === a.type &&
                  __c.Aj.domain.Ub(__c.Aj.ra(a.text), SPb(b).text)) ||
                  c();
                break;
              case "layout":
                "layout" === a.type ? bQb(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          XPb = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          O5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          N5 = function (a, b) {
            switch (null === b || void 0 === b ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.pb.set(void 0);
                var c;
                a.Pa = null !== (c = b.Pa) && void 0 !== c ? c : 0;
                break;
              case "gradient":
                if (a.pb.ref && __c.KYa.domain.Ub(a.pb.ref, b.pb)) break;
                a.color = void 0;
                a.pb.set(b.pb);
                var d;
                a.Pa = null !== (d = b.Pa) && void 0 !== d ? d : 0;
                break;
              default:
                (a.color = void 0), a.pb.set(void 0);
            }
          },
          $Pb = function (a, b) {
            b = L5(b);
            a.all = b.all;
            a.KD = b.KD;
            a.ID = b.ID;
            a.JD = b.JD;
            a.HD = b.HD;
          },
          ZPb = function (a, b) {
            b = K5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.jF.domain.Ub(__c.jF.ra(c), b) : !c && !b));
            c && a.all.set(b);
          },
          cQb = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          fQb = function (a, b, c, d) {
            let e = a.IOa.get(b);
            if (e) return e;
            e = {
              Px: new eQb(c.Iz, b, d, c.uoa),
              BAa: void 0,
              WJa: void 0,
              MKa: __c.YV.mode,
            };
            a.IOa.set(b, e);
            return e;
          },
          hQb = function (a, b, c, d, e) {
            var f, g;
            e = fQb(a, c, b, e);
            const h = e.Px,
              k = e.WJa,
              l = e.BAa,
              m = e.MKa;
            c = __c.MQ.ra(c);
            const n =
              (null === (f = (g = a.jA).BGa) || void 0 === f
                ? void 0
                : f.call(g, d)) || __c.YV;
            (h.Hm === k && gQb.structural(c, l) && n.mode === m) ||
              ((e.BAa = c),
              (e.WJa = h.Hm),
              (e.MKa = n.mode),
              (b = b.render(h, n)),
              a.X$a.update(d, b),
              PPb(
                d,
                b,
                (p, q) => a.hP.Koa.set(p, q),
                (p, q, r) => a.hP.refs.set(p, { ref: q, key: r })
              ));
          },
          kQb = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.Gab());
            c.push(
              iQb(
                () => {
                  a: {
                    var e = new jQb();
                    for (const f of b)
                      if ((e.kP(f), e.zma)) {
                        e = e.zma;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.jc.isLoaded(e) || a.Fpa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) B("layout" === f.type), a.Bj.Lca(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          lQb = function (a, b) {
            return {
              kR: ({ zl: c }) => {
                var d;
                const { Px: e } = fQb(a.renderer, c, b, a.f0),
                  f = __c.OQ.create([]),
                  g = [];
                g.push(kQb(a.H4a, f));
                g.push(
                  iQb(
                    () => {
                      var k, l;
                      return [
                        null === (k = (l = a.jA).BGa) || void 0 === k
                          ? void 0
                          : k.call(l, f),
                        __c.MQ.ra(c),
                        e.Hm,
                      ];
                    },
                    () => {
                      hQb(a.renderer, b, c, f, a.f0);
                    },
                    { fireImmediately: !0, equals: gQb.structural }
                  )
                );
                const h =
                  null === (d = b.Xqa) || void 0 === d
                    ? void 0
                    : d.call(b, { Px: e });
                h && g.push(h);
                return {
                  sb: f,
                  tw: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          nQb = function (a, b) {
            let c = a.C5.get(b);
            c || ((c = mQb("weakKey")), a.C5.set(b, c));
            c.reportObserved();
          },
          P5 = __webpack_require__(519427),
          gQb = P5.comparer,
          oQb = P5.computed,
          mQb = P5.createAtom,
          Q5 = P5.observable,
          iQb = P5.reaction,
          pQb = P5.runInAction;
        var qQb = class {
          static j(a) {
            __c.R(a, { kcb: Q5.ref, L5a: Q5.ref });
          }
          constructor() {
            qQb.j(this);
          }
        };
        var rQb = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          eQb = class {
            static j(a) {
              __c.R(a, { Xe: oQb });
            }
            get XJa() {
              var a = this.f0,
                b = this.zl,
                c = this.uoa;
              let d = a.sources.get(b);
              d || ((d = Q5.box(c)), a.sources.set(b, d));
              return d;
            }
            get Hm() {
              return this.XJa.get();
            }
            get Xe() {
              return this.Iz.Lu({ type: "dict", value: this.zl });
            }
            Ul(a) {
              this.XJa.set(
                a instanceof Function
                  ? { ...this.Hm, ...a() }
                  : { ...this.Hm, ...a }
              );
            }
            constructor(a, b, c, d) {
              eQb.j(this);
              this.Iz = a;
              this.zl = b;
              this.f0 = c;
              this.uoa = d;
            }
          };
        var OPb = class {
          t4(a, b) {
            this.zOa(a, b);
            b.ref && this.xta(a, b.ref, b.key);
          }
          oP(a, b) {
            b.ref && this.xta(a.text, b.ref, b.key);
          }
          Cxa(a, b) {
            switch (b.content.type) {
              case "shape":
                B("shape" === a.element.type);
                this.t4(a.element, b.content);
                break;
              case "text":
                B("text" === a.element.type);
                this.oP(a.element, b.content);
                break;
              case "layout":
                B("layout" === a.element.type);
                this.Ofa(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          Ofa(a, b) {
            this.zOa(a, b);
            b.ref && this.xta(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                B(!!d && !!a),
                this.Cxa(d, a);
          }
          constructor(a, b) {
            this.zOa = a;
            this.xta = b;
          }
        };
        var H5 = { locked: !0, Bo: { LX: !1, fV: !1 }, zj: !0 },
          I5 = { top: 0, left: 0, width: 1, height: 1 };
        var sQb = class {
          constructor(a) {
            this.Bj = a;
            this.update = (b, c) => {
              O5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      bQb(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...TPb(d),
                        ...H5,
                        width: d.minWidth,
                        height: d.minHeight,
                        F: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                B("layout" === d.type),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.F = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.Bj.Lca(d);
            };
          }
        };
        var tQb = class {
          constructor(a, b, c) {
            this.X$a = a;
            this.hP = b;
            this.jA = c;
            this.IOa = new WeakMap();
          }
        };
        var uQb = class {
            static j(a) {
              __c.R(a, { Fpa: Q5.shallow });
            }
            constructor(a, b) {
              uQb.j(this);
              this.jc = a;
              this.Bj = b;
              this.Fpa = new Set();
              this.Kma = new Set();
              this.Gab = () => {
                this.b9 ||
                  (this.b9 = __c.Hua(this.jc).subscribe((d) => {
                    pQb(() => {
                      this.Fpa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Kma.add(c);
                return () => {
                  this.Kma.delete(c);
                  0 >= this.Kma.size &&
                    this.b9 &&
                    (this.b9.unsubscribe(), (this.b9 = void 0));
                };
              };
            }
          },
          jQb = class extends __c.zD {
            kP(a, b) {
              this.zma || super.kP(a, b);
            }
            oP(a) {
              this.zma =
                (a = a.text
                  .qy("font-family")
                  ["font-family"].values()
                  .next().value) && __c.oB(a).id;
            }
          };
        var vQb = !1,
          wQb = class {
            register(a, b) {
              this.RD.has(a) ||
                (this.RD.set(a, b),
                vQb || (__c.NQ.set(a, lQb(this, b)), (vQb = !0)));
            }
            get(a) {
              return this.RD.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.f0 = b;
              this.jA = c;
              this.jc = d;
              this.Bj = e;
              this.RD = new Map();
              this.H4a = new uQb(this.jc, this.Bj);
            }
          };
        var xQb = class {
          delete(a) {
            var b;
            const c = this.map.delete(a);
            c &&
              (null === (b = this.C5.get(a)) || void 0 === b
                ? void 0
                : b.reportChanged());
            return c;
          }
          get(a) {
            nQb(this, a);
            return this.map.get(a);
          }
          has(a) {
            nQb(this, a);
            return this.map.has(a);
          }
          set(a, b) {
            if (!this.map.has(a) || this.map.get(a) !== b) {
              var c;
              this.map.set(a, b);
              null === (c = this.C5.get(a)) || void 0 === c
                ? void 0
                : c.reportChanged();
            }
            return this;
          }
          constructor() {
            this.C5 = new WeakMap();
            this.map = new WeakMap();
          }
        };
        var yQb = class {
            constructor() {
              this.Koa = new xQb();
              this.refs = new xQb();
            }
          },
          zQb = class {
            getContext(a) {
              return this.hP.refs.get(a);
            }
            pM(a) {
              return this.hP.Koa.get(a);
            }
            constructor(a, b, c) {
              this.hP = a;
              this.f0 = b;
              this.renderer = c;
            }
          };
        __c.OLa = {
          O7a: function (a) {
            const b = new qQb(),
              c = new yQb(),
              d = new tQb(new sQb(a.Bj), c, b),
              e = new rQb();
            a = new wQb(d, e, b, a.jc, a.Bj);
            return { jA: b, nCb: new zQb(c, e, d), $jb: a, hP: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b34bed3c149d4a6a.js.map
