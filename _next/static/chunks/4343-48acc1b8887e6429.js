"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4343],
  {
    65878: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(47043),
        i = n(53099),
        o = n(57437),
        s = i._(n(2265)),
        u = r._(n(54887)),
        c = r._(n(38293)),
        a = n(55346),
        l = n(90128),
        d = n(62589);
      n(31765);
      let f = n(25523),
        h = r._(n(5084)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function g(e, t, n, r, i, o, s) {
        let u = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== u &&
          ((e["data-loaded-src"] = u),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function m(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, s.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: u,
          width: c,
          decoding: a,
          className: l,
          style: d,
          fetchPriority: f,
          placeholder: h,
          loading: p,
          unoptimized: v,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: S,
          setShowAltText: _,
          sizesInput: O,
          onLoad: j,
          onError: C,
          ...x
        } = e;
        return (0, o.jsx)("img", {
          ...x,
          ...m(f),
          loading: p,
          width: c,
          height: u,
          decoding: a,
          "data-nimg": y ? "fill" : "1",
          className: l,
          style: d,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, s.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (C && (e.src = e.src), e.complete && g(e, h, b, w, S, v, O));
            },
            [n, h, b, w, S, C, v, O, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, h, b, w, S, v, O);
          },
          onError: (e) => {
            _(!0), "empty" !== h && S(!0), C && C(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...m(n.fetchPriority),
          };
        return t && u.default.preload
          ? (u.default.preload(n.src, r), null)
          : (0, o.jsx)(c.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, s.forwardRef)((e, t) => {
        let n = (0, s.useContext)(f.RouterContext),
          r = (0, s.useContext)(d.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            var e;
            let t = p || r || l.imageConfigDefault,
              n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              i = t.deviceSizes.sort((e, t) => e - t),
              o = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: n, deviceSizes: i, qualities: o };
          }, [r]),
          { onLoad: u, onLoadingComplete: c } = e,
          g = (0, s.useRef)(u);
        (0, s.useEffect)(() => {
          g.current = u;
        }, [u]);
        let m = (0, s.useRef)(c);
        (0, s.useEffect)(() => {
          m.current = c;
        }, [c]);
        let [b, w] = (0, s.useState)(!1),
          [S, _] = (0, s.useState)(!1),
          { props: O, meta: j } = (0, a.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: i,
            blurComplete: b,
            showAltText: S,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...O,
              unoptimized: j.unoptimized,
              placeholder: j.placeholder,
              fill: j.fill,
              onLoadRef: g,
              onLoadingCompleteRef: m,
              setBlurComplete: w,
              setShowAltText: _,
              sizesInput: e.sizes,
              ref: t,
            }),
            j.priority
              ? (0, o.jsx)(y, { isAppRouter: !n, imgAttributes: O })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    91436: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(47043)._(n(2265)).default.createContext({});
    },
    23964: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    55346: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        n(31765);
      let r = n(96496),
        i = n(90128);
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function u(e, t) {
        var n, u;
        let c,
          a,
          l,
          {
            src: d,
            sizes: f,
            unoptimized: h = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: v,
            width: y,
            height: b,
            fill: w = !1,
            style: S,
            overrideSrc: _,
            onLoad: O,
            onLoadingComplete: j,
            placeholder: C = "empty",
            blurDataURL: x,
            fetchPriority: M,
            decoding: P = "async",
            layout: E,
            objectFit: I,
            objectPosition: R,
            lazyBoundary: z,
            lazyRoot: A,
            ...k
          } = e,
          { imgConf: D, showAltText: U, blurComplete: L, defaultLoader: W } = t,
          F = D || i.imageConfigDefault;
        if ("allSizes" in F) c = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t),
            r = null == (n = F.qualities) ? void 0 : n.sort((e, t) => e - t);
          c = { ...F, allSizes: e, deviceSizes: t, qualities: r };
        }
        if (void 0 === W)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let V = k.loader || W;
        delete k.loader, delete k.srcSet;
        let N = "__next_img_default" in V;
        if (N) {
          if ("custom" === c.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = V;
          V = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (E) {
          "fill" === E && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[E];
          e && (S = { ...S, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[E];
          t && !f && (f = t);
        }
        let q = "",
          T = s(y),
          K = s(b);
        if ("object" == typeof (u = d) && (o(u) || void 0 !== u.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (l = e.blurHeight),
            (x = x || e.blurDataURL),
            (q = e.src),
            !w)
          ) {
            if (T || K) {
              if (T && !K) {
                let t = T / e.width;
                K = Math.round(e.height * t);
              } else if (!T && K) {
                let t = K / e.height;
                T = Math.round(e.width * t);
              }
            } else (T = e.width), (K = e.height);
          }
        }
        let B = !p && ("lazy" === g || void 0 === g);
        (!(d = "string" == typeof d ? d : q) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((h = !0), (B = !1)),
          c.unoptimized && (h = !0),
          N && d.endsWith(".svg") && !c.dangerouslyAllowSVG && (h = !0),
          p && (M = "high");
        let G = s(v),
          Z = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: I,
                  objectPosition: R,
                }
              : {},
            U ? {} : { color: "transparent" },
            S
          ),
          Y =
            L || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: T,
                  heightInt: K,
                  blurWidth: a,
                  blurHeight: l,
                  blurDataURL: x || "",
                  objectFit: Z.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          H = Y
            ? {
                backgroundSize: Z.objectFit || "cover",
                backgroundPosition: Z.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: s,
              loader: u,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: c, kind: a } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, s),
              l = c.length - 1;
            return {
              sizes: s || "w" !== a ? s : "100vw",
              srcSet: c
                .map(
                  (e, r) =>
                    u({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === a ? e : r + 1) +
                    a
                )
                .join(", "),
              src: u({ config: t, src: n, quality: o, width: c[l] }),
            };
          })({
            config: c,
            src: d,
            unoptimized: h,
            width: T,
            quality: G,
            sizes: f,
            loader: V,
          });
        return {
          props: {
            ...k,
            loading: B ? "lazy" : g,
            fetchPriority: M,
            width: T,
            height: K,
            decoding: P,
            className: m,
            style: { ...Z, ...H },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: _ || $.src,
          },
          meta: { unoptimized: h, priority: p, placeholder: C, fill: w },
        };
      }
    },
    38293: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return d;
          },
        });
      let r = n(47043),
        i = n(53099),
        o = n(57437),
        s = i._(n(2265)),
        u = r._(n(17421)),
        c = n(91436),
        a = n(48701),
        l = n(23964);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(31765);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !s) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: r });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, s.useContext)(c.AmpStateContext),
          r = (0, s.useContext)(a.HeadManagerContext);
        return (0, o.jsx)(u.default, {
          reduceComponentsToState: p,
          headManager: r,
          inAmpMode: (0, l.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    96496: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: s,
          } = e,
          u = r ? 40 * r : t,
          c = i ? 40 * i : n,
          a = u && c ? "viewBox='0 0 " + u + " " + c + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          a +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (a
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    62589: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(47043)._(n(2265)),
        i = n(90128),
        o = r.default.createContext(i.imageConfigDefault);
    },
    90128: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    5084: function (e, t) {
      function n(e) {
        var t;
        let { config: n, src: r, width: i, quality: o } = e,
          s =
            o ||
            (null == (t = n.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          n.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          s +
          "&dpl=dpl_2RU2biqVLKmvwzY15guXWWmvnpWf"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    25523: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(47043)._(n(2265)).default.createContext(null);
    },
    17421: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : r.useLayoutEffect,
        s = i ? () => {} : r.useEffect;
      function u(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function u() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        if (i) {
          var c;
          null == t || null == (c = t.mountedInstances) || c.add(e.children),
            u();
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = u),
              () => {
                t && (t._pendingUpdate = u);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    24369: function (e, t, n) {
      var r = n(2265),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        s = r.useEffect,
        u = r.useLayoutEffect,
        c = r.useDebugValue;
      function a(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
              return (
                u(
                  function () {
                    (i.value = n), (i.getSnapshot = t), a(i) && l({ inst: i });
                  },
                  [e, n, t]
                ),
                s(
                  function () {
                    return (
                      a(i) && l({ inst: i }),
                      e(function () {
                        a(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    92860: function (e, t, n) {
      var r = n(2265),
        i = n(82558),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = i.useSyncExternalStore,
        u = r.useRef,
        c = r.useEffect,
        a = r.useMemo,
        l = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = u(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = s(
          e,
          (d = a(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (s = e), (e = r(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (u = t);
                  }
                  return (u = e);
                }
                if (((t = u), o(s, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n)
                  ? ((s = e), t)
                  : ((s = e), (u = n));
              }
              var s,
                u,
                c = !1,
                a = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === a
                  ? void 0
                  : function () {
                      return e(a());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    82558: function (e, t, n) {
      e.exports = n(24369);
    },
    35195: function (e, t, n) {
      e.exports = n(92860);
    },
    21770: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
      });
      var r = n(2265),
        i = n(2894),
        o = n(18238),
        s = n(24112),
        u = n(45345),
        c = class extends s.l {
          #e;
          #t = void 0;
          #n;
          #r;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, u.VS)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, u.Ym)(t.mutationKey) !== (0, u.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#i(), this.#o(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#i(),
              this.#o();
          }
          mutate(e, t) {
            return (
              (this.#r = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #i() {
            let e = this.#n?.state ?? (0, i.R)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #o(e) {
            o.Vr.batch(() => {
              if (this.#r && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context,
                  r = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                if (e?.type === "success") {
                  try {
                    this.#r.onSuccess?.(e.data, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#r.onSettled?.(e.data, null, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                } else if (e?.type === "error") {
                  try {
                    this.#r.onError?.(e.error, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#r.onSettled?.(void 0, e.error, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                }
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        a = n(29827);
      function l(e, t) {
        let n = (0, a.NL)(t),
          [i] = r.useState(() => new c(n, e));
        r.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let s = r.useSyncExternalStore(
            r.useCallback((e) => i.subscribe(o.Vr.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          l = r.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(u.ZT);
            },
            [i]
          );
        if (s.error && (0, u.L3)(i.options.throwOnError, [s.error]))
          throw s.error;
        return { ...s, mutate: l, mutateAsync: s.mutate };
      }
    },
    52123: function (e, t, n) {
      n.d(t, {
        v: function () {
          return function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (
                "function" == typeof t.valueOf &&
                t.valueOf !== Object.prototype.valueOf
              )
                return t.valueOf() === n.valueOf();
              if (
                "function" == typeof t.toString &&
                t.toString !== Object.prototype.toString
              )
                return t.toString() === n.toString();
              let o = Object.keys(t);
              if ((r = o.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; ) if (!Object.hasOwn(n, o[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = o[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          };
        },
      });
    },
    39502: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(68366);
      function i(e, t) {
        return r.WU(e, t);
      }
    },
    93662: function (e, t, n) {
      n.d(t, {
        m: function () {
          return a;
        },
      });
      var r = n(52123);
      function i(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          o = e.chains.find((e) => e.id === n?.chainId),
          s = e.state.status;
        switch (s) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: s,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: s,
            };
        }
      }
      var o = n(12364),
        s = n(2265),
        u = n(35195);
      let c = (e) => "object" == typeof e && !Array.isArray(e);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.Z)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : r.v,
            o = (0, s.useRef)([]),
            a = (0, u.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (c(e) && c(t) && o.current.length) {
                  for (let n of o.current) if (!i(e[n], t[n])) return !1;
                  return !0;
                }
                return i(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (c(a)) {
              let e = { ...a },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (o.current.includes(n) || o.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return a;
          }, [a]);
        })(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => i(e), n, {
                equalityFn(e, t) {
                  let { connector: n, ...i } = e,
                    { connector: o, ...s } = t;
                  return (0, r.v)(i, s) && n?.id === o?.id && n?.uid === o?.uid;
                },
              });
            })(t, { onChange: e }),
          () => i(t)
        );
      }
    },
    12364: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2265),
        i = n(10231),
        o = n(26129);
      let s = () => "wagmi@2.19.5";
      class u extends o.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return s();
        }
      }
      class c extends u {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function a() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            null !== (e = t.config) && void 0 !== e
              ? e
              : (0, r.useContext)(i.V);
        if (!n) throw new c();
        return n;
      }
    },
    60542: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(21770),
        i = n(13102);
      async function o(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.wi();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...i } = t,
            o = await n.connect(i);
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: i.withCapabilities
                  ? o.accounts.map((e) =>
                      "object" == typeof e ? e.address : e
                    )
                  : o.accounts,
                chainId: o.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            {
              accounts: i.withCapabilities
                ? o.accounts.map((e) =>
                    "object" == typeof e ? e : { address: e, capabilities: {} }
                  )
                : o.accounts,
              chainId: o.chainId,
            }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var s = n(2265),
        u = n(12364);
      let c = [];
      function a(e) {
        let t = e.connectors;
        return c.length === t.length && c.every((e, n) => e === t[n])
          ? c
          : ((c = t), t);
      }
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, u.Z)(e),
          {
            mutate: i,
            mutateAsync: c,
            ...l
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => o(n, e),
            mutationKey: ["connect"],
          });
        return (
          (0, s.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && l.reset();
                }
              ),
            [n, l.reset]
          ),
          {
            ...l,
            connect: i,
            connectAsync: c,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, u.Z)(e);
              return (0, s.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => a(t),
                () => a(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    99778: function (e, t, n) {
      n.d(t, {
        q: function () {
          return l;
        },
      });
      var r = n(21770);
      async function i(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var o = n(12364),
        s = n(52123);
      let u = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, s.v)(u, t)
          ? u
          : ((u = t), t);
      }
      var a = n(2265);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.Z)(e),
          {
            mutate: u,
            mutateAsync: l,
            ...d
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => i(n, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...d,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, o.Z)(e);
            return (0, a.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: s.v });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: l,
        };
      }
    },
    59233: function (e, t, n) {
      n.d(t, {
        o: function () {
          return f;
        },
      });
      var r = n(21770),
        i = n(13102),
        o = n(14478);
      async function s(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          s = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (s) {
          let e = s.connector;
          if (!e.switchChain) throw new o.O({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let u = e.chains.find((e) => e.id === r);
        if (!u) throw new i.X4();
        return e.setState((e) => ({ ...e, chainId: r })), u;
      }
      var u = n(52123);
      let c = [];
      function a(e) {
        let t = e.chains;
        return (0, u.v)(c, t) ? c : ((c = t), t);
      }
      var l = n(2265),
        d = n(12364);
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.Z)(e),
          {
            mutate: i,
            mutateAsync: o,
            ...u
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => s(n, e),
            mutationKey: ["switchChain"],
          });
        return {
          ...u,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.Z)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => a(t),
              () => a(t)
            );
          })({ config: n }),
          switchChain: i,
          switchChainAsync: o,
        };
      }
    },
  },
]);
