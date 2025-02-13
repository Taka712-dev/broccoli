(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 388770: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var nub = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.Kt(a),
                d = c instanceof __c.vt ? c.Dr() : c;
              return __c.Ps(b, (e) => {
                e = __c.Kt(e);
                e = e instanceof __c.vt ? __c.DI(e, d) : e;
                return Math.abs(__c.eu(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          oub = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.Wu(b)[0])
              .join("");
          },
          rub = function (a = "") {
            a = pub(a);
            a = Math.floor(a() * qub.length);
            return qub[a];
          },
          sub = __webpack_require__(875604),
          tub = sub.memo,
          uub = sub.useId;
        var pub = __webpack_require__(503216);
        var vub = __webpack_require__(443763),
          lY = vub.jsx,
          wub = vub.jsxs;
        var xub = __webpack_require__,
          yub = xub(993864),
          mY = xub.n_x(yub)();
        __c.nY = {
          xxsmall: 16,
          xsmall: 24,
          small: 32,
          medium: 40,
          large: 48,
          xlarge: 64,
          xxlarge: 80,
          xxxlarge: 160,
        };
        var qub = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.Ct(__c.Bt(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var zub = tub((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            uQ: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          d
            ? ((a = __c.Kt(d)),
              (a = a instanceof __c.vt ? __c.Gt(a) : __c.Ct(a)))
            : (a = e ? rub(e) : "#8e8e8e");
          var n = uub();
          let p;
          switch (l) {
            case "circle":
              p = lY("defs", {
                children: lY("clipPath", {
                  id: n,
                  children: lY("circle", {
                    id: `${n}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              p = lY("defs", {
                children: lY("clipPath", {
                  id: n,
                  children: lY("rect", {
                    id: `${n}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          switch (l) {
            case "circle":
              n = lY("circle", {
                cx: "50%",
                cy: "50%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: mY("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              n = lY("rect", {
                width: "100%",
                height: "100%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: mY("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          return lY("span", {
            role: f,
            "aria-label": g,
            className: mY("VaW8_A", { cUFFRA: "square" === l }),
            ...m,
            children: wub("svg", {
              className: h,
              style: k,
              children: [
                p,
                n,
                lY("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: nub(a),
                  fontWeight: "500",
                  fontSize: "50%",
                  children: lY("tspan", {
                    dy: "0.36em",
                    letterSpacing: "0.01rem",
                    children: oub(b).toUpperCase(),
                  }),
                }),
              ],
            }),
          });
        });
        var Aub =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var Bub = ({
          borderColor: a,
          oNa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          lY("span", {
            className: mY(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": "img" === f ? c : void 0,
            ...g,
          });
        __c.Cub = ({
          name: a,
          FYa: b,
          ariaLabel: c,
          uQ: d,
          backgroundColor: e,
          borderColor: f,
          cr: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = mY("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: "square" === l });
          b = b || "presentation";
          return g
            ? lY(Bub, {
                className: h,
                style: k,
                borderColor: f,
                oNa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? lY(zub, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                uQ: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : lY(Bub, {
                className: h,
                style: k,
                borderColor: f,
                oNa: Aub,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b51d27e8f5e8db6f.js.map
