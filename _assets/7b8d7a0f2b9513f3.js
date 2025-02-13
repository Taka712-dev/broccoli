(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 62516: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(388770);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var R = __c.R;
        var jNb = function (a, b = "medium") {
            if (null !== a && void 0 !== a && a.length) {
              var c =
                ("number" === typeof b ? b : __c.nY[b]) *
                (window.devicePixelRatio || 1);
              return [...a].sort((d, e) => {
                d = d.width;
                e = e.width;
                return d > c && e < c
                  ? -1
                  : d < c && e > c
                  ? 1
                  : Math.abs(d - c) - Math.abs(e - c);
              })[0].url;
            }
          },
          pNb = function (a, b) {
            class c {
              static j(d) {
                R(d, { rf: E4, Kha: E4 });
              }
              get rf() {
                switch (this.Kha) {
                  case "date":
                    return new kNb(this.xv, b.language || "en-AU");
                  case "select":
                    return new lNb(this.xv);
                  case "mention":
                    return new mNb(this.xv);
                  case "embed":
                    return new nNb(this.xv);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new E(this.Kha);
                }
              }
              get Kha() {
                var d;
                return null === (d = this.xv.ZA) || void 0 === d
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                c.j(this);
                this.context = d;
                this.xv = __c.D(a.FE(d.sheet, d.ua, d.column));
              }
            }
            return oNb((d) => new c(d).rf);
          },
          rNb = function () {
            const a = F4(() => new Map(), []);
            return {
              R5a: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = qNb();
                a.set(b, c);
                return c;
              },
            };
          },
          sNb = function (a, b) {
            return F4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          zNb = function ({
            children: a,
            keyFrame: b,
            aRa: c,
            ariaLive: d,
            eJa: e = !1,
            qYa: f,
            gka: g,
            F2a: h,
            iqb: k,
            FCa: l,
            zEa: m,
            gqb: n,
            Lib: p,
          }) {
            const { R5a: q } = rNb(),
              { T4a: r, veb: t } = tNb(b, a),
              u = sNb(
                (v) => () => {
                  (!1 === e || ("function" === typeof e && !e(v))) && t(v);
                },
                [t, e]
              );
            return G4("div", {
              className: H4(g, "_9GxJfQ", {
                KwB0XQ: "hidden" === l,
                WV1Mmw: "fill-height" === c,
                _2uSJxw: "flex-grow" === c,
              }),
              children: G4("div", {
                className: H4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: v, element: x }) =>
                    G4(
                      uNb,
                      {
                        in: v === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(v),
                        onExited: u(v),
                        children: (y) =>
                          G4(vNb.Provider, {
                            value: y,
                            children: G4("div", {
                              className: H4("KxXR9g", n, {
                                KwB0XQ: "hidden" === m,
                              }),
                              ref: q(v),
                              "aria-hidden":
                                y === wNb || y === xNb || y === yNb,
                              children: v === b ? a : x,
                            }),
                          }),
                      },
                      v
                    )
                  ),
                  r.every((v) => v.key !== b) &&
                    G4(
                      uNb,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : u(b),
                        children: (v) =>
                          G4(vNb.Provider, {
                            value: v,
                            children: G4("div", {
                              className: H4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                v === wNb || v === xNb || v === yNb,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          tNb = function (a, b) {
            const [c, d] = ANb(() => [{ key: a, element: b }]);
            BNb(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = I4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { T4a: c, veb: e };
          },
          CNb = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new E(a);
            }
          },
          ENb = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return G4(DNb, { selected: !!b.aPa });
              default:
                throw new E(a);
            }
          },
          J4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? "Meta" === a.key || ["91", "224"].includes(a.code)
              : !1;
          },
          FNb = function (a) {
            __c.w(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          GNb = function (a, b, c) {
            if (c) {
              var d = jNb(c.images, "medium"),
                e = jNb(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = K4(() => a.d4.set(b, e));
                f.onerror = K4(() => a.d4.set(b, void 0));
                !f.complete && c.complete ? a.d4.set(b, d) : (c.src = "");
              }
            } else a.d4.set(b, void 0);
          },
          INb = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.wg
                  ? a.wg
                      .gtb(new HNb({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.hg.content.title;
                        h
                          ? (L4(() => a.lSa.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        L4(() => a.lSa.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          JNb = __webpack_require__(443763),
          G4 = JNb.jsx,
          KNb = JNb.jsxs;
        var M4 = __webpack_require__(214645).Pi;
        var N4 = __webpack_require__(875604),
          LNb = N4.createContext,
          qNb = N4.createRef,
          O4 = N4.memo,
          I4 = N4.useCallback,
          BNb = N4.useEffect,
          MNb = N4.useLayoutEffect,
          F4 = N4.useMemo,
          ANb = N4.useState;
        var P4 = __webpack_require__(519427),
          K4 = P4.action,
          NNb = P4.comparer,
          E4 = P4.computed,
          ONb = P4.observable,
          Q4 = P4.ObservableMap,
          L4 = P4.runInAction;
        var oNb = __webpack_require__(635872).Om;
        var PNb = __webpack_require__,
          QNb = PNb(993864),
          H4 = PNb.n_x(QNb)();
        var uNb = __webpack_require__(489212).Z;
        var R4 = __webpack_require__(92009),
          yNb = R4.Wj,
          wNb = R4.Ix,
          xNb = R4.$r;
        var RNb = class {
            static j(a) {
              R(a, { text: E4, user: E4, brand: E4 });
            }
            get text() {
              return this.rf.text;
            }
            get user() {
              return this.rf.user;
            }
            get brand() {
              return this.rf.brand;
            }
            constructor(a) {
              RNb.j(this);
              this.rf = a;
              this.type = "mention";
            }
          },
          SNb = class {
            static j(a) {
              R(a, { text: E4, url: E4 });
            }
            get text() {
              return this.rf.text;
            }
            get url() {
              return this.rf.url;
            }
            constructor(a) {
              SNb.j(this);
              this.rf = a;
              this.type = "embed";
            }
          },
          TNb = class {
            static j(a) {
              R(a, { text: E4, language: E4, style: E4, date: E4 });
            }
            get text() {
              return this.rf.text;
            }
            get language() {
              return this.rf.language;
            }
            get style() {
              return this.rf.style;
            }
            get date() {
              return this.rf.date;
            }
            constructor(a) {
              TNb.j(this);
              this.rf = a;
              this.type = "date";
            }
          },
          UNb = class {
            static j(a) {
              R(a, { text: E4, options: E4, lf: E4, YQ: E4 });
            }
            get text() {
              return this.rf.text;
            }
            get options() {
              return this.rf.options.map((a) => a);
            }
            get lf() {
              return this.rf.lf;
            }
            get YQ() {
              var a;
              return null ===
                (a = this.rf.options.first((b) => b.id === this.rf.lf)) ||
                void 0 === a
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              UNb.j(this);
              this.rf = a;
              this.type = "select";
            }
          },
          VNb = oNb((a) => {
            switch (a.type) {
              case "mention":
                return new RNb(a);
              case "embed":
                return new SNb(a);
              case "date":
                return new TNb(a);
              case "select":
                return new UNb(a);
              default:
                throw new E(a);
            }
          });
        var kNb = class {
            static j(a) {
              R(a, { style: E4, date: E4, text: E4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = 2 === this.Do.Uo.type ? this.Do.Uo.date : void 0) ||
                ((a = new Date()),
                (a = __c.tE(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  M6a: a.getHours(),
                  S$a: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.Do.xA;
            }
            constructor(a, b) {
              kNb.j(this);
              this.Do = a;
              this.language = b;
              this.type = "date";
            }
          },
          WNb = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          lNb = class {
            static j(a) {
              R(a, {
                options: E4,
                lf: E4,
                YQ: E4,
                text: E4,
                ZFa: E4({ equals: NNb.shallow }),
              });
            }
            get options() {
              return this.ZFa.map((a, b) => new WNb(a, b));
            }
            get lf() {
              var a;
              return null ===
                (a = this.options.find((b) => b.label === this.text)) ||
                void 0 === a
                ? void 0
                : a.id;
            }
            get YQ() {
              var a;
              return null ===
                (a = this.options.find((b) => b.id === this.lf)) || void 0 === a
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.Do.xA;
            }
            get ZFa() {
              var a, b;
              __c.B(
                "select" ===
                  (null === (a = this.Do.ZA) || void 0 === a ? void 0 : a.type)
              );
              return null === (b = this.Do.ZA) || void 0 === b
                ? void 0
                : b.options;
            }
            constructor(a) {
              lNb.j(this);
              this.Do = a;
              this.type = "select";
            }
          },
          mNb = class {
            static j(a) {
              R(a, { hM: E4 });
            }
            get text() {
              return this.hM ? this.hM.text : "";
            }
            get user() {
              return this.hM ? this.hM.user : "";
            }
            get brand() {
              return this.hM ? this.hM.brand : "";
            }
            get hM() {
              if (8 !== this.Do.Uo.type)
                return (
                  __c.B(6 === this.Do.Uo.type),
                  this.Do.Uo ? this.Do.Uo.value[0] : void 0
                );
            }
            constructor(a) {
              mNb.j(this);
              this.Do = a;
              this.type = "mention";
            }
          },
          nNb = class {
            static j(a) {
              R(a, { XY: E4 });
            }
            get text() {
              return this.XY ? this.XY.embed.text : "";
            }
            get url() {
              return this.XY ? this.XY.embed.url : "";
            }
            get XY() {
              if (8 !== this.Do.Uo.type)
                return (
                  __c.B(7 === this.Do.Uo.type),
                  this.Do.Uo ? this.Do.Uo.value[0] : void 0
                );
            }
            constructor(a) {
              nNb.j(this);
              this.Do = a;
              this.type = "embed";
            }
          };
        var XNb = class {
          rma(a) {
            this.yia.rma(a);
          }
          z2(a, b) {
            this.yia.z2(a, b);
          }
          qZ(a) {
            return this.yia.qZ(a);
          }
          oma(a) {
            this.CEa.oma(a);
          }
          constructor(a, b, c, d) {
            this.yia = a;
            this.CEa = b;
            this.xc = c;
            this.TH = d;
            this.axa = new __c.ulb();
            this.k5a = (e) => __c.REa(this.axa, e);
          }
        };
        var vNb = LNb(void 0);
        var YNb = Number.parseInt("300ms", 10),
          ZNb = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          $Nb = O4(function ({
            Qx: a = !1,
            children: b,
            keyFrame: c,
            aRa: d,
            FCa: e = "hidden",
            zEa: f = "hidden",
            ariaLive: g,
            eJa: h,
            Ltb: k = "none",
          }) {
            a = __c.tb() && !a;
            return zNb({
              children: b,
              keyFrame: c,
              aRa: d,
              ariaLive: g,
              FCa: e,
              zEa: f,
              eJa: h,
              qYa: a ? YNb : 0,
              F2a: H4({
                _1niDPQ: a,
                Q6kGbg: "none" === k,
                _9j7ODw: "layout" === k,
              }),
              Lib: ZNb,
            });
          });
        var aOb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var bOb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var cOb =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var dOb = O4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.YQ,
              f = a.Q1a,
              g = a.JWa,
              h = a.jXa,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = H4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: 0 < a.text.length });
            a = 0 < a.text.length ? a.text : "\ufeff";
            return KNb("span", {
              className: H4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                G4("span", {
                  className: H4("_2Lr6pQ", p),
                  children: G4("span", { className: "Z_WvzQ", children: a }),
                }),
                KNb("span", {
                  className: H4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    G4("span", {
                      className: H4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? G4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          eOb = O4((a) => {
            const b = a.backgroundColor,
              c = a.cr;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return G4($Nb, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? G4(__c.Cub, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    cr: c,
                    borderColor: c ? void 0 : b,
                  })
                : G4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: cOb },
                  }),
            });
          }),
          fOb = O4((a) => {
            a = a.icon;
            return G4($Nb, {
              keyFrame: a ? "favicon" : "placeholder",
              children: a
                ? G4("span", {
                    className: "_tFJqA",
                    children: G4("img", { src: a, className: "qpbYdw" }),
                  })
                : G4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: bOb },
                  }),
            });
          }),
          gOb = O4(() =>
            G4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: aOb },
            })
          ),
          DNb = O4(({ selected: a }) =>
            G4("div", {
              className: H4("whph4A", { zgzjww: a }),
              children: G4(__c.xM, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          hOb = M4((a) => {
            const {
              rf: b,
              aPa: c,
              Dsa: d,
              mode: e = "viewable",
              measureRef: f,
              rw: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = "embed" === b.type ? d.xc(b.url) : void 0,
              [l, m] = ANb(!1),
              n = I4((z) => m(J4(z)), [m]),
              p = I4((z) => m(!J4(z)), [m]),
              q = I4(
                (z) => {
                  m(J4(z.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = I4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            BNb(() => {
              L4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.rma(b.user);
                    break;
                  case "embed":
                    d.oma(b.url);
                }
              });
            }, [b, d]);
            MNb(() => {
              null === g || void 0 === g ? void 0 : g();
            }, [b.type, a, g]);
            var t = 0 === b.text.length,
              u = b.text || "",
              v = CNb(b),
              x = b.YQ;
            a: {
              switch (b.type) {
                case "mention":
                  var y = G4(eOb, {
                    cr: b.user ? d.qZ(b.user) : void 0,
                    text: b.text,
                    backgroundColor: b.user ? d.k5a(b.user).background : void 0,
                  });
                  break a;
                case "embed":
                  y = G4(fOb, { icon: d.CEa.BY.get(b.url) });
                  break a;
                case "date":
                  y = b.text ? void 0 : G4(gOb, {});
                  break a;
                case "select":
                  break;
                default:
                  throw new E(b);
              }
              y = void 0;
            }
            return G4(dOb, {
              text: a,
              link: "viewable" === e || l ? k : void 0,
              Q1a: t,
              ariaLabel: u,
              className: v,
              YQ: x,
              JWa: y,
              jXa: ENb(b, { aPa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: "embed" === b.type && "editable" === e ? q : void 0,
              onMouseLeave: "embed" === b.type && "editable" === e ? r : void 0,
            });
          });
        var iOb = __c.M(() => ({
          tub: __c.GN(11),
          mode: __c.G("A?", 1, "BY_USER_IDS"),
          pjb: __c.FN(1),
        }));
        var jOb = class {
            static j(a) {
              R(a, { eP: ONb.shallow, rFa: K4 });
            }
            qZ(a) {
              return this.VAa.qZ(a);
            }
            rma(a) {
              this.$wa.has(a) || this.eP.has(a) || (this.eP.add(a), this.t1a());
            }
            z2(a, b) {
              this.$wa.has(a) ||
                (this.$wa.set(a, b), this.eP.delete(a), GNb(this.VAa, a, b));
            }
            async rFa() {
              if (0 !== this.eP.size) {
                var a = [...this.eP.values()];
                this.eP.clear();
                if (this.WAa) {
                  var b = await this.WAa;
                  await Promise.all(
                    FNb(a).map(async (c) => {
                      const d = new iOb({ pjb: c }),
                        { snb: e } = await b.Jsb(d);
                      L4(() => c.forEach((f) => this.z2(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.z2(c));
              }
            }
            constructor(a, b) {
              jOb.j(this);
              this.WAa = a;
              this.$wa = new Q4();
              this.eP = new Set();
              this.VAa = new kOb();
              this.t1a = __c.Pc(() => this.rFa(), 200);
              L4(() => {
                null === b || void 0 === b
                  ? void 0
                  : b.forEach((c, d) => this.z2(d, c));
              });
            }
          },
          kOb = class {
            qZ(a) {
              return this.d4.get(a);
            }
            constructor() {
              this.d4 = new Q4();
            }
          };
        var HNb = __c.M(() => ({
          id: __c.W("id", 1),
          extension: __c.X("extension", 3),
          afb: __c.BN("revision", 5),
          version: __c.BN("version", 2),
          aub: __c.BN("imagesetsLimit", 6),
        }));
        var lOb = class {
          static j(a) {
            R(a, { e4a: K4 });
          }
          async e4a(a) {
            if (this.wg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                null == c || 2 > c.length
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await INb(this, { url: a, ...b });
            }
          }
          constructor(a) {
            lOb.j(this);
            this.wg = a;
            this.lSa = new Q4();
            this.promises = new Map();
          }
        };
        var mOb = class {
          static j(a) {
            R(a, { BY: ONb.shallow });
          }
          async oma(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await (null === (d = this.TH) || void 0 === d
                ? void 0
                : d.u5(a));
              c = null === e || void 0 === e ? void 0 : e.d4a;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = K4(() => this.BY.set(a, c))),
                (b.onerror = K4(() => this.BY.set(a, void 0))))
              : this.BY.set(a, void 0);
          }
          constructor(a) {
            mOb.j(this);
            this.TH = a;
            this.BY = new Map();
          }
        };
        __c.$Ba = {
          I7a: function (a) {
            const b = a.document,
              c = a.wg,
              d = a.xc,
              e = a.TH;
            var f = a.N5;
            const g = a.fd,
              h = a.Oz,
              k = a.KV;
            a = a.nub;
            f = new jOb(null === a || void 0 === a ? void 0 : a(), f);
            a = new mOb(e);
            new lOb(c);
            const l = new XNb(f, a, d, e),
              m = pNb(k, b);
            g.eq.aha = M4(({ item: p, measureRef: q }) => {
              const r = F4(() => VNb(p.rf), [p.rf]);
              return G4(hOb, { rf: r, Dsa: l, measureRef: q });
            });
            const n = M4(({ context: p, rw: q }) => {
              const r = F4(() => __c.D(m(p.container)), [p]);
              MNb(q, [q, p.container.column.width]);
              return G4(hOb, { rf: r, Dsa: l, rw: q });
            });
            h.nza = ({ context: p, rw: q }) => ({
              type: "react",
              node: G4(n, { context: p, rw: q }),
            });
            return { Dsa: l };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/7b8d7a0f2b9513f3.js.map
