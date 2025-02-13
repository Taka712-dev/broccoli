(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    f,
    s = {},
    i = {};
  function c(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = (i[e] = { id: e, loaded: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, c), (t.loaded = !0), t.exports;
  }
  (c.m = s),
    (c.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (c.amdO = {}),
    (e = []),
    (c.O = (r, t, n, f) => {
      if (!t) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, n, f] = e[d], i = !0, a = 0; a < t.length; a++)
            if (
              (!1 & f || s >= f) &&
              Object.keys(c.O).every((e) => c.O[e](t[a]))
            )
              t.splice(a--, 1);
            else if (((i = !1), f < s)) s = f;
          if (i) {
            e.splice(d--, 1);
            var u = n();
            if (void 0 !== u) r = u;
          }
        }
        return r;
      } else {
        f = f || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > f; d--) e[d] = e[d - 1];
        e[d] = [t, n, f];
      }
    }),
    (c.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return c.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, n) {
      if (1 & n) e = this(e);
      if (8 & n) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      c.r(f);
      var s = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var i = 2 & n && e; "object" == typeof i && !~r.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((r) => (s[r] = () => e[r]));
      return (s.default = () => e), c.d(f, s), f;
    }),
    (c.d = (e, r) => {
      for (var t in r)
        if (c.o(r, t) && !c.o(e, t))
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((r, t) => (c.f[t](e, r), r), []))),
    (c.u = (e) => {
      if (1587 === e) return "0be04f80b1f59ebf.js";
      if (50869 === e) return "b5610739b7c9e840.js";
      if (8269 === e) return "c571a99a3a0c8cf8.vendor.js";
      if (79648 === e) return "2945e4594ee37c80.vendor.js";
      if (25486 === e) return "6906b56d2aa70105.js";
      if (68772 === e) return "7d7a4c96d5ccebb4.vendor.js";
      if (60336 === e) return "264a88d384875908.js";
      if (97703 === e) return "c53c5f9b13a4fee3.js";
      if (4667 === e) return "59397f6f76df59b1.js";
      if (23286 === e) return "31631691f1496a3d.js";
      if (32447 === e) return "d5282d613eaca54d.js";
      if (34874 === e) return "127da3e7d9104e1e.js";
      if (7090 === e) return "fa6f43b8e5259b3d.js";
      if (89047 === e) return "706334a1d654bd87.js";
      if (74734 === e) return "1321126c7d73419e.js";
      if (5366 === e) return "95b906cf85e266d5.js";
      if (31485 === e) return "96d7538c32362167.js";
      if (41379 === e) return "c9c4a9997a593cae.js";
      if (52053 === e) return "b170b4379d7b8459.js";
      if (983 === e) return "73234721966b5b79.js";
      if (48357 === e) return "ff9b79ae6a6783d7.js";
      if (94465 === e) return "c63d15fe4c2d176b.js";
      if (10947 === e) return "e3330794e6d574c1.js";
      if (71854 === e) return "864e8159efc0eadb.js";
      if (11628 === e) return "228b9aec99ec443f.js";
      if (45858 === e) return "90b583dc7a323565.js";
      if (9961 === e) return "cd1a7f2567075a40.js";
      if (6505 === e) return "95b4cd5aa3be2cd3.js";
      if (64378 === e) return "497e665af0a8536c.js";
      if (97607 === e) return "9e5bfa523a8977db.js";
      if (72246 === e) return "e50871ad0daff995.js";
      if (18801 === e) return "d13ce792cbbb06af.js";
      if (44138 === e) return "474db51ef325daf7.js";
      if (16576 === e) return "9ade9531166d9ff9.js";
      if (72677 === e) return "d7dc56478082c4dd.js";
      if (56971 === e) return "65e7abfe531a4d73.js";
      if (2758 === e) return "aef85d29c3754752.js";
      if (88706 === e) return "735a301bf7fa6b25.js";
      if (82872 === e) return "ac54831ec792dee6.js";
      if (39368 === e) return "0956abcdca032b71.js";
      if (38829 === e) return "b6136d407fc1052a.js";
      if (46061 === e) return "969d8a191e02c0d1.js";
      if (47972 === e) return "3cd09207677be278.js";
      if (33939 === e) return "be919feec22d0223.js";
      if (31601 === e) return "40abaa63a8c38d4a.js";
      if (47628 === e) return "917eced304ae8b66.js";
      if (89717 === e) return "bf1869eddfa34469.js";
      if (30781 === e) return "7fa3f242ad435923.js";
      if (24087 === e) return "7f56ab48555e328e.js";
      if (54194 === e) return "4c4251079e6f6b38.js";
      if (57717 === e) return "259ee0b8ad20d31f.js";
      if (8229 === e) return "5a378bef019f2315.js";
      if (71481 === e) return "f29cba9de69d5a16.js";
      if (98272 === e) return "8f6fa5db3c603e78.js";
      if (53508 === e) return "12e34814e10d1818.js";
      if (50205 === e) return "7213d1ed846aad19.vendor.js";
      if (83851 === e) return "b7d57da64cafba23.js";
      if (79262 === e) return "4af79bc129730425.vendor.js";
      if (41500 === e) return "cff336219ae0ef26.js";
      if (77330 === e) return "f65aa83e7adbd161.vendor.js";
      if (51277 === e) return "dc403475aee3a931.js";
      if (46405 === e) return "1eda2e45f2a49f60.js";
      if (57406 === e) return "4cafc43d0f823537.js";
      if (80368 === e) return "9818f4540752d14a.js";
      if (71132 === e) return "3813edd40d4ede91.js";
      if (24698 === e) return "644aea74fc91e19b.js";
      if (79395 === e) return "8b1745f9a4403529.js";
      if (92780 === e) return "c43c94cd4190428e.js";
      if (96923 === e) return "c44b1fe3bca55081.js";
      if (35024 === e) return "1affc1a913e3c39c.js";
      if (66966 === e) return "5ca945a5b0c39893.js";
      if (20382 === e) return "360990536d8fcc6a.js";
      if (47798 === e) return "c8149d947a11d81b.js";
      if (87717 === e) return "fa8b67e47576b34d.vendor.js";
      if (14408 === e) return "19024ebeaeef022c.js";
      if (91969 === e) return "7dcd214200c3d55e.js";
      if (26489 === e) return "b51d27e8f5e8db6f.js";
      if (4143 === e) return "7b8d7a0f2b9513f3.js";
      if (31898 === e) return "fcfbab59760d865d.js";
      if (55447 === e) return "278528f03b92553e.js";
      if (6566 === e) return "eb451c27c9d9cdad.js";
      if (2142 === e) return "41ce289a06943691.js";
      if (49222 === e) return "b34bed3c149d4a6a.js";
      if (53684 === e) return "06924e7e30e74a48.js";
      if (95665 === e) return "bfc9c38fb6ba6224.js";
      if (67766 === e) return "d8776b05c827ae5b.vendor.js";
      if (6908 === e) return "72389f87ab195773.js";
      if (68275 === e) return "f2cfa5c5e2305399.js";
      if (12220 === e) return "21f377c708879e2b.js";
      if (14700 === e) return "5eba33a5a03d7ada.js";
      if (69091 === e) return "1f451589d1e091b7.js";
      if (4492 === e) return "1a635fddd9c81000.js";
      if (27406 === e) return "40ecaf3a418a6d9d.js";
      if (22543 === e) return "68bde30759f96a70.js";
      if (84283 === e) return "10b97896f6eb9280.js";
      if (50854 === e) return "68017200afbc4fae.js";
      if (23731 === e) return "c2b9408a20a5a490.js";
      if (81615 === e) return "69153f76472068a0.vendor.js";
      if (21354 === e) return "a27df9568b39f076.js";
      if (38701 === e) return "3b33a8d98fe94a1b.js";
      if (4411 === e) return "a272e3415f10bb1c.js";
      if (80781 === e) return "508b89af8752e8e6.js";
      if (71327 === e) return "62c519efaac27b3d.js";
      if (38226 === e) return "f9e1f1ef43735ad3.js";
      if (4450 === e) return "9274dbc13172cdeb.js";
      if (42911 === e) return "701ee84327e91dd7.js";
      if (22104 === e) return "63815084335d3320.js";
      if (59927 === e) return "7705edd75c7b45f7.js";
      if (16674 === e) return "43009283d94e91e6.js";
      if (419 === e) return "2690d090f863c8db.js";
      if (83828 === e) return "b09c4217c289a71e.js";
      if (20631 === e) return "d5dab9e461b3533a.js";
      if (28595 === e) return "5f688bae1acff436.vendor.js";
      if (15706 === e) return "f7b87b50f581ab62.js";
      if (81869 === e) return "6d6a30e55ce0248a.js";
      if (49189 === e) return "deb437bfbbed1e2e.js";
      if (23441 === e) return "80cbafa01274cf5d.js";
      if (31923 === e) return "df9b08a509c6de56.js";
      if (78889 === e) return "74dfe63d25cdc45c.js";
      if (39482 === e) return "fb229290a23c568f.js";
      if (21904 === e) return "a152364773226003.js";
      if (57437 === e) return "2555a6b3915fb45d.js";
      if (27013 === e) return "fdedeedff2edc1a8.js";
      if (71078 === e) return "ec369bd7d1c87718.js";
      if (67592 === e) return "9a519aef35d75f60.js";
      if (46763 === e) return "fdff98d4190bce86.js";
      if (20371 === e) return "3625521d3b1ecb7a.js";
      if (83103 === e) return "52cf773645e853be.js";
      if (53607 === e) return "850a35d02361012c.js";
      if (12188 === e) return "8647188784f673da.js";
      if (90364 === e) return "77a8932a1d5ab83d.js";
      if (76420 === e) return "f016a97584c10c7e.js";
      if (69552 === e) return "d5a9617765b772ab.js";
      if (34161 === e) return "0b4bee17b5a80b39.js";
      if (29443 === e) return "62f080666d285363.js";
      if (47831 === e) return "7b19342444264f8e.js";
      if (73962 === e) return "65b8571af6d91010.js";
      if (32758 === e) return "41158a64b5d950af.js";
      if (77533 === e) return "28820a7d18b15121.js";
      if (76889 === e) return "c86448029f37e550.js";
      if (23496 === e) return "a0c7d0e68613e263.js";
      if (16069 === e) return "3645d2e864f87cc1.js";
      if (81597 === e) return "9b6a08a7167bbc4f.js";
    }),
    (c.miniCssF = (e) => {
      if (1587 === e) return "2e93ea3975d28fba.ltr.css";
      if (50869 === e) return "d7cf0aba64e1b2d4.ltr.css";
      if (
        {
          8269: 1,
          79648: 1,
          68772: 1,
          50205: 1,
          79262: 1,
          77330: 1,
          87717: 1,
          67766: 1,
          81615: 1,
          28595: 1,
        }[e]
      )
        return "ef46db3751d8e999.vendor.ltr.css";
      if (
        {
          25486: 1,
          60336: 1,
          97703: 1,
          4667: 1,
          23286: 1,
          32447: 1,
          34874: 1,
          7090: 1,
          89047: 1,
          74734: 1,
          5366: 1,
          41379: 1,
          52053: 1,
          983: 1,
          48357: 1,
          10947: 1,
          71854: 1,
          11628: 1,
          45858: 1,
          9961: 1,
          6505: 1,
          64378: 1,
          97607: 1,
          72246: 1,
          18801: 1,
          44138: 1,
          16576: 1,
          72677: 1,
          56971: 1,
          2758: 1,
          88706: 1,
          82872: 1,
          39368: 1,
          46061: 1,
          47972: 1,
          33939: 1,
          31601: 1,
          47628: 1,
          89717: 1,
          30781: 1,
          24087: 1,
          54194: 1,
          57717: 1,
          8229: 1,
          83851: 1,
          41500: 1,
          51277: 1,
          46405: 1,
          80368: 1,
          71132: 1,
          24698: 1,
          79395: 1,
          92780: 1,
          96923: 1,
          66966: 1,
          47798: 1,
          31898: 1,
          55447: 1,
          6566: 1,
          2142: 1,
          49222: 1,
          53684: 1,
          95665: 1,
          6908: 1,
          68275: 1,
          14700: 1,
          69091: 1,
          4492: 1,
          27406: 1,
          22543: 1,
          84283: 1,
          50854: 1,
          21354: 1,
          4411: 1,
          80781: 1,
          38226: 1,
          4450: 1,
          42911: 1,
          22104: 1,
          59927: 1,
          16674: 1,
          419: 1,
          83828: 1,
          20631: 1,
          49189: 1,
          23441: 1,
          31923: 1,
          78889: 1,
          39482: 1,
          21904: 1,
          57437: 1,
          71078: 1,
          67592: 1,
          46763: 1,
          20371: 1,
          83103: 1,
          53607: 1,
          12188: 1,
          90364: 1,
          76420: 1,
          69552: 1,
          34161: 1,
          29443: 1,
          47831: 1,
          73962: 1,
          32758: 1,
          77533: 1,
          76889: 1,
          23496: 1,
          16069: 1,
          81597: 1,
        }[e]
      )
        return "ef46db3751d8e999.ltr.css";
      if (31485 === e) return "5f1d4839e07de62c.ltr.css";
      if (94465 === e) return "c9bf091720f7f1c3.ltr.css";
      if (38829 === e) return "71dec1f5d11e3f66.ltr.css";
      if (71481 === e) return "f8678f5d2a496896.ltr.css";
      if (98272 === e) return "aed61a49fdfc513b.ltr.css";
      if (53508 === e) return "ca10385ab7f3657c.ltr.css";
      if (57406 === e) return "5b2241d885919c07.ltr.css";
      if (35024 === e) return "aa07baa25cbb803f.ltr.css";
      if (20382 === e) return "5b7fe8f909b06739.ltr.css";
      if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
      if (91969 === e) return "924c43291449318d.ltr.css";
      if (26489 === e) return "5eb15c719412ac66.ltr.css";
      if (4143 === e) return "fbdc2fa6da953cbd.ltr.css";
      if (12220 === e) return "638e8938c76a575e.ltr.css";
      if (23731 === e) return "ebb4caa493e8fb61.ltr.css";
      if (38701 === e) return "befbfecf54293560.ltr.css";
      if (71327 === e) return "d3f86e5edcfa2e81.ltr.css";
      if (15706 === e) return "2ce5153862ce83bc.ltr.css";
      if (81869 === e) return "da210214fd5a61ff.ltr.css";
      if (27013 === e) return "13d99414f410f430.ltr.css";
    }),
    (c.miniCssFRtl = (e) => {
      if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
      if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
      if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
      if (21389 === e) return "7c4bdd391864e154.rtl.css";
      if (1587 === e) return "35e15520bdbbc6fc.rtl.css";
      if (50869 === e) return "cb3538416979fc60.rtl.css";
      if (
        {
          8269: 1,
          79648: 1,
          68772: 1,
          50205: 1,
          79262: 1,
          77330: 1,
          87717: 1,
          67766: 1,
          81615: 1,
          28595: 1,
        }[e]
      )
        return "c166e5d20ad58f4e.vendor.rtl.css";
      if (
        {
          25486: 1,
          60336: 1,
          97703: 1,
          4667: 1,
          23286: 1,
          32447: 1,
          34874: 1,
          7090: 1,
          89047: 1,
          74734: 1,
          5366: 1,
          41379: 1,
          52053: 1,
          983: 1,
          48357: 1,
          10947: 1,
          71854: 1,
          11628: 1,
          45858: 1,
          9961: 1,
          6505: 1,
          64378: 1,
          97607: 1,
          72246: 1,
          18801: 1,
          44138: 1,
          16576: 1,
          72677: 1,
          56971: 1,
          2758: 1,
          88706: 1,
          82872: 1,
          39368: 1,
          46061: 1,
          47972: 1,
          33939: 1,
          31601: 1,
          47628: 1,
          89717: 1,
          30781: 1,
          24087: 1,
          54194: 1,
          57717: 1,
          8229: 1,
          83851: 1,
          41500: 1,
          51277: 1,
          46405: 1,
          80368: 1,
          71132: 1,
          24698: 1,
          79395: 1,
          92780: 1,
          96923: 1,
          66966: 1,
          47798: 1,
          31898: 1,
          55447: 1,
          6566: 1,
          2142: 1,
          49222: 1,
          53684: 1,
          95665: 1,
          6908: 1,
          68275: 1,
          14700: 1,
          69091: 1,
          4492: 1,
          27406: 1,
          22543: 1,
          84283: 1,
          50854: 1,
          21354: 1,
          4411: 1,
          80781: 1,
          38226: 1,
          4450: 1,
          42911: 1,
          22104: 1,
          59927: 1,
          16674: 1,
          419: 1,
          83828: 1,
          20631: 1,
          49189: 1,
          23441: 1,
          31923: 1,
          78889: 1,
          39482: 1,
          21904: 1,
          57437: 1,
          71078: 1,
          67592: 1,
          46763: 1,
          20371: 1,
          83103: 1,
          53607: 1,
          12188: 1,
          90364: 1,
          76420: 1,
          69552: 1,
          34161: 1,
          29443: 1,
          47831: 1,
          73962: 1,
          32758: 1,
          77533: 1,
          76889: 1,
          23496: 1,
          16069: 1,
          81597: 1,
        }[e]
      )
        return "c166e5d20ad58f4e.rtl.css";
      if (31485 === e) return "b4bd268b7e5afaa4.rtl.css";
      if (94465 === e) return "49dcf4c456be0dd9.rtl.css";
      if (38829 === e) return "7cf7805937173758.rtl.css";
      if (71481 === e) return "29bdbb1d75c8c7a3.rtl.css";
      if (98272 === e) return "7dac84e36568326f.rtl.css";
      if (53508 === e) return "be92cdc2c813e15f.rtl.css";
      if (57406 === e) return "3759df5a77daebac.rtl.css";
      if (35024 === e) return "9afc09ee64fd4c3d.rtl.css";
      if (20382 === e) return "b197b394e4f55ce1.rtl.css";
      if (14408 === e) return "918171a1aa694966.rtl.css";
      if (91969 === e) return "d41a1c13df702638.rtl.css";
      if (26489 === e) return "a7d46e6bdaad0422.rtl.css";
      if (4143 === e) return "624e4ad1fb844a15.rtl.css";
      if (12220 === e) return "1e246b15020f607d.rtl.css";
      if (23731 === e) return "2d3ff0ee8f3a43d8.rtl.css";
      if (38701 === e) return "7de857cf6a584993.rtl.css";
      if (71327 === e) return "834bca050b750fa4.rtl.css";
      if (15706 === e) return "b7f7194441bb238d.rtl.css";
      if (81869 === e) return "dd4f397bdc4982dc.rtl.css";
      if (27013 === e) return "b9ec1237e067a990.rtl.css";
    }),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.hmd = (e) => {
      if (!(e = Object.create(e)).children) e.children = [];
      return (
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (n = {}),
    (f = "@canva/web:"),
    (c.l = (e, r, t, s) => {
      if (!n[e]) {
        var i, a;
        if (void 0 !== t)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var o = u[d];
            if (
              o.getAttribute("src") == e ||
              o.getAttribute("data-webpack") == f + t
            ) {
              i = o;
              break;
            }
          }
        if (!i) {
          if (
            ((a = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            c.nc)
          )
            i.setAttribute("nonce", c.nc);
          i.setAttribute("data-webpack", f + t), (i.src = e);
        }
        n[e] = [r];
        var l = (r, t) => {
            (i.onerror = i.onload = null), clearTimeout(b);
            var f = n[e];
            if (
              (delete n[e],
              i.parentNode && i.parentNode.removeChild(i),
              f && f.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          b = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = l.bind(null, i.onerror)),
          (i.onload = l.bind(null, i.onload)),
          a && document.head.appendChild(i);
      } else n[e].push(r);
    }),
    (c.r = (e) => {
      if ("undefined" != typeof Symbol && Symbol.toStringTag)
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => {
      if (((e.paths = []), !e.children)) e.children = [];
      return e;
    }),
    (() => {
      const e = c.e,
        r = function e(r, t, n) {
          return r().catch(function (f) {
            return 0 === n
              ? Promise.reject(f)
              : ((s = t),
                new Promise(function (e) {
                  setTimeout(e, s);
                })).then(function () {
                  return e(r, t, n - 1);
                });
            var s;
          });
        };
      c.e = function (t) {
        return r(
          function () {
            return e(t);
          },
          1e3,
          5
        );
      };
    })(),
    (c.p = ""),
    (() => {
      if (self.__batch_chunks__)
        !(function (e, r, t, n, f, s, i, c, a) {
          const u = e.l;
          let d = [],
            o = [];
          const l = [];
          for (const O of document.head.querySelectorAll(
            'link[rel="prefetch"][href]'
          )) {
            const e = O.getAttribute("href");
            e && l.push(e);
          }
          let b = (e) => document.head.appendChild(e);
          (e.l = function (e, r, f, i) {
            for (let t = 0; t < l.length; t++)
              if (l[t].endsWith(e)) return l.splice(t, 1), u(e, r, f, i);
            if (t) {
              if (0 === d.length)
                Promise.resolve().then(() => {
                  k(d, p), (d = []), (h = 0);
                });
              const r = y(e);
              if ((d.length >= 1 && h + r > s) || d.length >= n)
                k(d, p), (d = []), (h = 0);
              h += r;
            } else {
              if (j++ < 10) return u(e, r, f, i);
              if (0 === d.length) setTimeout(() => w(d, p), 1);
            }
            d.push({
              src: e,
              callback: function (t) {
                if ("load" === t.type) r(t);
                else u(e, r, f, i);
              },
              originalLoad: () => {
                u(e, r, f, i);
              },
            });
          }),
            (e.loadCss = function (e, r) {
              const f = e.getAttribute("href");
              if (((b = r || b), t)) {
                if (0 === o.length)
                  Promise.resolve().then(() => {
                    k(o, v), (o = []), (g = 0);
                  });
                const e = y(f);
                if ((o.length >= 1 && g + e > s) || o.length >= n)
                  k(o, v), (o = []), (g = 0);
                g += e;
              } else {
                if (m++ < 15) return r(e);
                if (0 === o.length) setTimeout(() => w(o, v), 1);
              }
              o.push({
                src: f,
                callback: (t) => {
                  if ("load" === t.type) e.onload && e.onload(t);
                  else r(e);
                },
                originalLoad: () => {
                  r(e);
                },
              });
            });
          let j = 0,
            h = 0;
          function p(e, t) {
            const n = document.createElement("script");
            let f;
            const s = (e) => {
              (n.onerror = n.onload = null),
                clearTimeout(f),
                n.parentNode && n.parentNode.removeChild(n),
                t("string" == typeof e ? { type: "error", target: {} } : e);
            };
            (n.onload = n.onerror = s),
              (n.src = e),
              (n.async = !1),
              (f = setTimeout(() => s({ type: "timeout", target: n }), r)),
              document.head.appendChild(n);
          }
          let m = 0,
            g = 0;
          function v(e, r) {
            const t = document.createElement("link");
            (t.onload = t.onerror = (e) => r(e)),
              (t.href = e),
              (t.rel = "stylesheet"),
              b(t);
          }
          function y(e) {
            const r = f(),
              t = e.substring(r.length);
            return t ? i[t] || 0 : 0;
          }
          function _() {
            const e = f(),
              r = new URL(window.location.href);
            if (null == e ? void 0 : e.startsWith("http")) {
              const { protocol: r, host: t } = new URL(e);
              return `${r}//chunk-composing.${t
                .split(".")
                .slice(-2)
                .join(".")}`;
            } else if (
              ["localhost", "127.0.0.1"].includes(r.hostname) &&
              r.searchParams.get("pageLoadWorkerUrl")
            )
              return r.searchParams.get("pageLoadWorkerUrl");
            else return r.origin;
          }
          async function w(e, r) {
            const t = f();
            let u,
              d = 0,
              o = [];
            try {
              u = self.navigator.serviceWorker;
            } catch {}
            const l =
              c && (null == u ? void 0 : u.controller)
                ? await (async function (e) {
                    const r = await caches.open(a),
                      t = [];
                    for (const n of e)
                      if (await r.match(n.src)) n.originalLoad();
                      else t.push(n);
                    return t;
                  })(e)
                : e;
            for (const f of l) {
              const e = f.src.substring(t.length),
                r = e ? i[e] || 0 : 0;
              if ((o.length >= 1 && d + r > s) || o.length >= n)
                b(o), (o = []), (d = 0);
              o.push(f), (d += r);
            }
            function b(e) {
              if (1 === e.length) return void e[0].originalLoad();
              const n = _(),
                f = e.map(({ src: e }) => e.substring(t.length)).join("+");
              r(`${n}/chunk-batch/${f}`, (r) => {
                for (const { callback: t, src: n } of e)
                  t({ type: r.type, target: { src: n, href: n } });
              });
            }
            o.length && b(o), (e.length = 0);
          }
          function k(e, r) {
            if (0 === e.length) return;
            const t = f();
            if (1 !== e.length)
              r(
                `${_()}/chunk-batch/${e
                  .map(({ src: e }) => e.substring(t.length))
                  .join("+")}`,
                (r) => {
                  for (const { callback: t, src: n } of e)
                    t({ type: r.type, target: { src: n, href: n } });
                }
              );
            else e[0].originalLoad();
          }
        })(
          c,
          12e4,
          self.__sync_batch_chunks__,
          40,
          () => c.p,
          10485760,
          {
            "0c3fa5d16578bb33.ltr.css": 467763,
            "635b4064e47cb3d8.js": 15404263,
            "7c4bdd391864e154.rtl.css": 467783,
            "1f023a67f73b3d5a.runtime.js": 73694,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "c1a234f6b2c871b3.vendor.js": 2091752,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "6b0b6cd7b4380852.i3d79q.vendor.js": 703374,
            "2e93ea3975d28fba.ltr.css": 356,
            "0be04f80b1f59ebf.js": 20213,
            "35e15520bdbbc6fc.rtl.css": 356,
            "d7cf0aba64e1b2d4.ltr.css": 248,
            "b5610739b7c9e840.js": 5431,
            "cb3538416979fc60.rtl.css": 248,
            "c571a99a3a0c8cf8.vendor.js": 158499,
            "2945e4594ee37c80.vendor.js": 85008,
            "6906b56d2aa70105.js": 88160,
            "7d7a4c96d5ccebb4.vendor.js": 125594,
            "264a88d384875908.js": 70259,
            "c53c5f9b13a4fee3.js": 25048,
            "59397f6f76df59b1.js": 229074,
            "31631691f1496a3d.js": 53594,
            "d5282d613eaca54d.js": 89772,
            "127da3e7d9104e1e.js": 136565,
            "706334a1d654bd87.js": 57396,
            "fa6f43b8e5259b3d.js": 872,
            "1321126c7d73419e.js": 13033,
            "95b906cf85e266d5.js": 5599,
            "5f1d4839e07de62c.ltr.css": 2196,
            "96d7538c32362167.js": 24403,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "c9c4a9997a593cae.js": 107321,
            "b170b4379d7b8459.js": 16086,
            "73234721966b5b79.js": 21543,
            "ff9b79ae6a6783d7.js": 76853,
            "9ade9531166d9ff9.js": 180406,
            "c9bf091720f7f1c3.ltr.css": 233,
            "c63d15fe4c2d176b.js": 249480,
            "49dcf4c456be0dd9.rtl.css": 233,
            "71dec1f5d11e3f66.ltr.css": 360,
            "b6136d407fc1052a.js": 684678,
            "7cf7805937173758.rtl.css": 360,
            "497e665af0a8536c.js": 87145,
            "474db51ef325daf7.js": 1435,
            "aef85d29c3754752.js": 265691,
            "cd1a7f2567075a40.js": 41299,
            "90b583dc7a323565.js": 155709,
            "e3330794e6d574c1.js": 20366,
            "65e7abfe531a4d73.js": 2161,
            "d13ce792cbbb06af.js": 5147,
            "0956abcdca032b71.js": 89030,
            "228b9aec99ec443f.js": 6322,
            "864e8159efc0eadb.js": 10148,
            "ac54831ec792dee6.js": 27325,
            "735a301bf7fa6b25.js": 10854,
            "969d8a191e02c0d1.js": 118204,
            "95b4cd5aa3be2cd3.js": 1103,
            "9e5bfa523a8977db.js": 24581,
            "3cd09207677be278.js": 150132,
            "be919feec22d0223.js": 148542,
            "40abaa63a8c38d4a.js": 96192,
            "917eced304ae8b66.js": 267551,
            "7fa3f242ad435923.js": 934,
            "259ee0b8ad20d31f.js": 339820,
            "7f56ab48555e328e.js": 8299,
            "4c4251079e6f6b38.js": 91718,
            "bf1869eddfa34469.js": 7765,
            "f8678f5d2a496896.ltr.css": 355,
            "f29cba9de69d5a16.js": 288953,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "5a378bef019f2315.js": 76841,
            "aed61a49fdfc513b.ltr.css": 355,
            "8f6fa5db3c603e78.js": 305981,
            "7dac84e36568326f.rtl.css": 355,
            "ca10385ab7f3657c.ltr.css": 354,
            "12e34814e10d1818.js": 66847,
            "be92cdc2c813e15f.rtl.css": 354,
            "b7d57da64cafba23.js": 3440,
            "cff336219ae0ef26.js": 219782,
            "7213d1ed846aad19.vendor.js": 12754,
            "4af79bc129730425.vendor.js": 18823,
            "dc403475aee3a931.js": 222034,
            "f65aa83e7adbd161.vendor.js": 13455,
            "1eda2e45f2a49f60.js": 411442,
            "5b2241d885919c07.ltr.css": 360,
            "4cafc43d0f823537.js": 191820,
            "3759df5a77daebac.rtl.css": 360,
            "9818f4540752d14a.js": 261809,
            "3813edd40d4ede91.js": 64008,
            "644aea74fc91e19b.js": 12244,
            "8b1745f9a4403529.js": 40240,
            "aa07baa25cbb803f.ltr.css": 11199,
            "1affc1a913e3c39c.js": 660123,
            "9afc09ee64fd4c3d.rtl.css": 11199,
            "c44b1fe3bca55081.js": 1285,
            "5ca945a5b0c39893.js": 40935,
            "5b7fe8f909b06739.ltr.css": 913,
            "360990536d8fcc6a.js": 60937,
            "b197b394e4f55ce1.rtl.css": 913,
            "fa8b67e47576b34d.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "19024ebeaeef022c.js": 20142,
            "918171a1aa694966.rtl.css": 446,
            "c8149d947a11d81b.js": 43952,
            "924c43291449318d.ltr.css": 263,
            "7dcd214200c3d55e.js": 10573,
            "d41a1c13df702638.rtl.css": 263,
            "5eb15c719412ac66.ltr.css": 3164,
            "b51d27e8f5e8db6f.js": 72024,
            "a7d46e6bdaad0422.rtl.css": 3164,
            "fbdc2fa6da953cbd.ltr.css": 5920,
            "7b8d7a0f2b9513f3.js": 231321,
            "624e4ad1fb844a15.rtl.css": 5920,
            "278528f03b92553e.js": 233574,
            "fcfbab59760d865d.js": 11182,
            "eb451c27c9d9cdad.js": 85345,
            "b34bed3c149d4a6a.js": 176836,
            "bfc9c38fb6ba6224.js": 481943,
            "06924e7e30e74a48.js": 30115,
            "d8776b05c827ae5b.vendor.js": 919496,
            "638e8938c76a575e.ltr.css": 412,
            "21f377c708879e2b.js": 67911,
            "1e246b15020f607d.rtl.css": 414,
            "1f451589d1e091b7.js": 16940,
            "f2cfa5c5e2305399.js": 38841,
            "72389f87ab195773.js": 17237,
            "5eba33a5a03d7ada.js": 45946,
            "1a635fddd9c81000.js": 9255,
            "40ecaf3a418a6d9d.js": 3575,
            "10b97896f6eb9280.js": 70586,
            "d5dab9e461b3533a.js": 9883,
            "b09c4217c289a71e.js": 10222,
            "68017200afbc4fae.js": 14492,
            "69153f76472068a0.vendor.js": 29676,
            "befbfecf54293560.ltr.css": 127814,
            "3b33a8d98fe94a1b.js": 3070608,
            "7de857cf6a584993.rtl.css": 127825,
            "ebb4caa493e8fb61.ltr.css": 2422,
            "c2b9408a20a5a490.js": 284901,
            "2d3ff0ee8f3a43d8.rtl.css": 2422,
            "a27df9568b39f076.js": 37311,
            "5f688bae1acff436.vendor.js": 92098,
            "2ce5153862ce83bc.ltr.css": 27282,
            "f7b87b50f581ab62.js": 414113,
            "b7f7194441bb238d.rtl.css": 27282,
            "da210214fd5a61ff.ltr.css": 9349,
            "6d6a30e55ce0248a.js": 234870,
            "dd4f397bdc4982dc.rtl.css": 9349,
            "13d99414f410f430.ltr.css": 319,
            "fdedeedff2edc1a8.js": 5625,
            "b9ec1237e067a990.rtl.css": 319,
            "ec369bd7d1c87718.js": 209141,
            "9a519aef35d75f60.js": 3316,
            "fdff98d4190bce86.js": 68023,
            "3625521d3b1ecb7a.js": 229737,
            "52cf773645e853be.js": 299029,
            "850a35d02361012c.js": 102754,
            "8647188784f673da.js": 561089,
            "77a8932a1d5ab83d.js": 46329,
            "f016a97584c10c7e.js": 214698,
            "d5a9617765b772ab.js": 4456,
            "0b4bee17b5a80b39.js": 2785,
            "62f080666d285363.js": 1496,
            "7b19342444264f8e.js": 3787,
            "65b8571af6d91010.js": 2749,
            "41158a64b5d950af.js": 2614,
            "28820a7d18b15121.js": 2048,
            "c86448029f37e550.js": 2759,
            "a0c7d0e68613e263.js": 3036,
            "3645d2e864f87cc1.js": 4016,
            "9b6a08a7167bbc4f.js": 6118,
            "deb437bfbbed1e2e.js": 2854,
            "80cbafa01274cf5d.js": 4390,
            "df9b08a509c6de56.js": 4851,
            "74dfe63d25cdc45c.js": 3101,
            "fb229290a23c568f.js": 11030,
            "a272e3415f10bb1c.js": 11265,
            "508b89af8752e8e6.js": 34831,
            "d3f86e5edcfa2e81.ltr.css": 6124,
            "62c519efaac27b3d.js": 63241,
            "834bca050b750fa4.rtl.css": 6124,
            "f9e1f1ef43735ad3.js": 59859,
            "9274dbc13172cdeb.js": 1945,
            "701ee84327e91dd7.js": 203667,
            "a152364773226003.js": 6517,
            "2555a6b3915fb45d.js": 38347,
            "63815084335d3320.js": 1428,
          },
          self.__check_cache_batch_chunks__,
          "assets-2"
        );
    })(),
    (() => {
      const e = JSON.parse(
          '{"2372":81869,"6948":80368,"20467":48357,"22335":34874,"32282":49222,"37489":60336,"38429":74734,"43459":4492,"61228":47972,"62516":4143,"64790":57406,"83205":78889,"84304":34161,"96803":39482,"106951":31923,"107274":53607,"111592":69552,"130253":21904,"134787":419,"136050":41500,"141620":5366,"144616":68772,"160813":84283,"166767":66966,"201096":8269,"204610":67592,"208016":20382,"216266":51277,"218500":22104,"244978":21354,"260806":89047,"261460":97703,"262921":98272,"271969":42911,"275857":23731,"290881":35024,"290924":92780,"315983":50854,"336019":71078,"341476":76889,"343957":52053,"349411":57717,"351398":31485,"399074":15706,"400461":49189,"422959":12188,"429172":69091,"432464":80781,"438339":47831,"449347":73962,"464338":90364,"474513":16674,"519428":25486,"537666":95665,"551499":4411,"552476":71481,"573584":38701,"577944":4450,"603425":6566,"617548":23286,"627433":28595,"629131":79395,"659396":23496,"661584":77533,"662806":47628,"666116":41379,"676145":46061,"688883":91969,"694036":46763,"701273":71132,"707304":32758,"710996":55447,"731709":83103,"735386":20371,"740421":20631,"768853":76420,"772794":57437,"777826":4667,"788691":46405,"814689":38226,"836330":50869,"848004":71327,"881919":16069,"888869":14408,"900828":29443,"907554":67766,"926002":23441,"959334":81597,"989577":983,"998639":59927}'
        ),
        r = JSON.parse(
          '{"419":[],"983":[],"1587":[],"2142":[],"2758":[18801,44138,45858,7090],"4143":[26489],"4411":[],"4450":[],"4492":[],"4667":[],"5366":[],"6505":[],"6566":[31898],"6908":[],"7090":[],"8229":[10947,97607],"8269":[],"9961":[48357,94465],"10947":[94465],"11628":[71854],"12188":[27013],"12220":[6908],"14408":[47798,87717],"14700":[68275],"15706":[12220,26489,38701],"16069":[],"16576":[71854,94465],"16674":[],"18801":[],"20371":[27013],"20382":[],"20631":[83828],"21354":[],"21389":[],"21904":[42911],"22104":[],"22543":[],"23286":[],"23441":[],"23496":[],"23731":[96923],"24087":[],"24698":[],"25436":[],"25486":[79648],"26489":[],"27013":[87717],"27406":[],"28595":[],"29443":[],"30781":[45858,88706,89717],"31485":[],"31601":[33939],"31898":[],"31923":[],"32447":[],"32758":[],"33939":[94465],"34161":[],"34874":[23286,32447],"35024":[96923],"38226":[],"38701":[1587,21354,22543,23731,27406,53684,81615],"38829":[11628,16576,2758,39368,56971,6505,72246,72677,82872,88706,97607,9961],"39368":[94465],"39482":[],"41379":[],"41500":[18801,41379,53508,54194,56971,79262,83851],"42911":[],"44138":[],"45858":[10947],"46061":[38829],"46405":[11628,16576,45858,54194,64378,82872,83851,88706,9961],"46763":[27013],"47628":[10947,16576,31601,44138,56971,97607],"47798":[],"47831":[],"47972":[38829],"48357":[],"49189":[],"49222":[2142],"50205":[],"50854":[27406],"50869":[1587],"51277":[18801,41379,53508,54194,56971,77330,83851],"52053":[],"53508":[11628,94465,983],"53607":[27013],"53684":[],"54194":[33939],"55447":[31898],"56971":[],"57406":[2758,39368,56971,6505,71854,72677,88706,9961],"57437":[],"57717":[16576,24087,2758,30781,39368,54194,56971,64378,72246,72677,9961],"59927":[],"60336":[],"64378":[],"66966":[24698],"67592":[],"67766":[],"68275":[6908],"68772":[],"69091":[12220,14700],"69552":[],"69588":[],"71078":[27013],"71132":[2758,31601,56971,89717,97607,9961],"71327":[],"71481":[16576,24087,2758,39368,56971,6505,72677,8229,89717,9961],"71854":[],"72246":[94465],"72677":[],"73962":[],"74734":[],"76420":[27013],"76889":[],"77330":[50205],"77533":[],"78889":[],"79262":[50205],"79395":[24698],"79648":[],"80368":[16576,18801,30781,39368,44138,56971,7090,8229],"80781":[],"81597":[],"81615":[],"81869":[12220,14700,38701,83828],"82872":[94465],"83103":[27013],"83828":[68275],"83851":[],"84283":[22543,27406],"87717":[],"88706":[],"89047":[7090],"89717":[],"90364":[27013],"91969":[47798,87717],"92780":[],"94465":[32447],"95665":[2142,53684],"96923":[],"97607":[64378,94465],"97703":[],"98272":[16576,24087,2758,39368,56971,6505,72677,8229,89717,9961]}'
        ),
        t = (e, n, f) => {
          if (!f.has(e))
            return f.add(e), r[e].forEach((e) => t(e, n, f)), n.push(e), n;
        };
      c.me = function (r) {
        const n = e[r];
        if (null == n) return Promise.resolve(c(r));
        const f = t(n, [], new Set());
        return Promise.all(f.map((e) => c.e(e))).then(() => c(r));
      };
    })(),
    (() => {
      const e = {};
      c.f.locale = function (r, t) {
        !(function (e, r, t) {
          if (null == r[e]) {
            const t = self.cmsg;
            if (!t || !t.assets) return;
            const n = t.loaded,
              f = t.locale || "en";
            if (n && n[e + "_" + f]) return;
            const s = t.assets[f] && t.assets[f][e] && t.assets[f][e].js;
            if (!s) return;
            r[e] = Promise.all(
              s.map(
                (t) =>
                  new Promise((n, f) => {
                    const s = c.p + t;
                    c.l(
                      s,
                      (s) => {
                        if ("load" === s.type) (r[e] = 0), n();
                        else
                          delete r[e],
                            f(new Error(`Fail to load message files@${t}`));
                      },
                      "ensure-locale-" + e,
                      e
                    );
                  })
              )
            );
          }
          const n = r[e];
          if (n) t.push(n);
        })(r, e, t);
      };
    })(),
    (() => {
      let e =
        "undefined" != typeof self && void 0 !== self.document
          ? self.document.body.parentElement.getAttribute("dir")
          : "ltr";
      if ("ltr" !== e && "rtl" !== e)
        console.warn(
          "Could not determine the direction of text, please check that the dir attribute is set on the html tag"
        ),
          (e = "ltr");
      if ("rtl" === e) c.miniCssF = c.miniCssFRtl;
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((r, t) => {
              var n = c.miniCssF(e),
                f = c.p + n;
              if (
                ((e, r) => {
                  for (
                    var t = document.getElementsByTagName("link"), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var f =
                      (i = t[n]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (f === e || f === r))
                      return i;
                  }
                  var s = document.getElementsByTagName("style");
                  for (n = 0; n < s.length; n++) {
                    var i;
                    if (
                      (f = (i = s[n]).getAttribute("data-href")) === e ||
                      f === r
                    )
                      return i;
                  }
                })(n, f)
              )
                return r();
              ((e, r, t, n, f) => {
                var s = document.createElement("link");
                (s.rel = "stylesheet"),
                  (s.type = "text/css"),
                  (s.onerror = s.onload =
                    (t) => {
                      if (((s.onerror = s.onload = null), "load" === t.type))
                        n();
                      else {
                        var i = t && ("load" === t.type ? "missing" : t.type),
                          c = (t && t.target && t.target.href) || r,
                          a = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                          );
                        if (
                          ((a.code = "CSS_CHUNK_LOAD_FAILED"),
                          (a.type = i),
                          (a.request = c),
                          s.parentNode)
                        )
                          s.parentNode.removeChild(s);
                        f(a);
                      }
                    }),
                  (s.href = r),
                  (function (e) {
                    const r = (e) => {
                      document.head.appendChild(e);
                    };
                    if (c.loadCss) c.loadCss(e, r);
                    else r(e);
                  })(s);
              })(e, f, 0, r, t);
            }),
          r = { 98581: 0 };
        c.f.miniCss = (t, n) => {
          if (r[t]) n.push(r[t]);
          else if (
            0 !== r[t] &&
            {
              1587: 1,
              4143: 1,
              12220: 1,
              14408: 1,
              15706: 1,
              20382: 1,
              23731: 1,
              26489: 1,
              27013: 1,
              31485: 1,
              35024: 1,
              38701: 1,
              38829: 1,
              50869: 1,
              53508: 1,
              57406: 1,
              71327: 1,
              71481: 1,
              81869: 1,
              91969: 1,
              94465: 1,
              98272: 1,
            }[t]
          )
            n.push(
              (r[t] = e(t).then(
                () => {
                  r[t] = 0;
                },
                (e) => {
                  throw (delete r[t], e);
                }
              ))
            );
        };
      }
    })(),
    (() => {
      var e = { 98581: 0 };
      (c.f.j = (r, t) => {
        var n = c.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (98581 != r) {
            var f = new Promise((t, f) => (n = e[r] = [t, f]));
            t.push((n[2] = f));
            var s = c.p + c.u(r),
              i = new Error();
            c.l(
              s,
              (t) => {
                if (c.o(e, r)) {
                  if (0 !== (n = e[r])) e[r] = void 0;
                  if (n) {
                    var f = t && ("load" === t.type ? "missing" : t.type),
                      s = t && t.target && t.target.src;
                    (i.message =
                      "Loading chunk " +
                      r +
                      " failed.\n(" +
                      f +
                      ": " +
                      s +
                      ")"),
                      (i.name = "ChunkLoadError"),
                      (i.type = f),
                      (i.request = s),
                      n[1](i);
                  }
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (c.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var n,
            f,
            [s, i, a] = t,
            u = 0;
          if (s.some((r) => 0 !== e[r])) {
            for (n in i) if (c.o(i, n)) c.m[n] = i[n];
            if (a) var d = a(c);
          }
          if (r) r(t);
          for (; u < s.length; u++) {
            if (((f = s[u]), c.o(e, f) && e[f])) e[f][0]();
            e[f] = 0;
          }
          return c.O(d);
        },
        t = (self.webpackChunk_canva_web = self.webpackChunk_canva_web || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
//# sourceMappingURL=sourcemaps/1f023a67f73b3d5a.runtime.js.map
