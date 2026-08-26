(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    23740: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 81181)),
        Promise.resolve().then(n.bind(n, 15615)),
        Promise.resolve().then(n.bind(n, 98250)),
        Promise.resolve().then(n.bind(n, 53919)),
        Promise.resolve().then(n.bind(n, 19240)),
        Promise.resolve().then(n.bind(n, 91410)),
        Promise.resolve().then(n.bind(n, 48228)),
        Promise.resolve().then(n.bind(n, 46647)),
        Promise.resolve().then(n.bind(n, 33792)),
        Promise.resolve().then(n.bind(n, 43741)),
        Promise.resolve().then(n.bind(n, 92416)),
        Promise.resolve().then(n.bind(n, 72384)),
        Promise.resolve().then(n.bind(n, 31763)),
        Promise.resolve().then(n.bind(n, 60024)),
        Promise.resolve().then(n.bind(n, 58092)),
        Promise.resolve().then(n.bind(n, 51662)),
        Promise.resolve().then(n.bind(n, 22311)),
        Promise.resolve().then(n.bind(n, 66476)),
        Promise.resolve().then(n.bind(n, 61089)),
        Promise.resolve().then(n.bind(n, 75136)),
        Promise.resolve().then(n.t.bind(n, 65878, 23));
    },
    81181: function (e, t, n) {
      "use strict";
      n.d(t, {
        Barn: function () {
          return T;
        },
      });
      var a = n(57437),
        i = n(33145),
        s = n(2265),
        r = n(68768),
        l = n(93662),
        o = n(49891),
        d = n(97269),
        u = n(39759),
        p = n(50433),
        c = n(46039),
        m = n(74019),
        y = n(27323),
        f = n(46269);
      let h = { address: p.UB.auctionBarn, abi: p._A },
        x = { address: p.UB.mooSeats, abi: p.qz };
      var b = n(15615),
        v = n(98545),
        w = n(60024),
        g = n(66476);
      let j = { address: p.UB.auctionBarn, abi: p._A },
        k = { address: p.UB.mooSeats, abi: p.qz };
      function T() {
        return null;
        var e, t, n;
        let { address: i } = (0, l.m)(),
          {
            listings: r,
            total: c,
            loading: m,
            refetch: b,
          } = (function () {
            var e, t;
            let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 60,
              a = (0, y.u)({
                ...x,
                functionName: "totalSupply",
                query: { enabled: p.hr, refetchInterval: 2e4 },
              }),
              i = Math.min(
                Number(null !== (t = a.data) && void 0 !== t ? t : 0n),
                p.vn
              ),
              r = (0, s.useMemo)(
                () => Array.from({ length: i }, (e, t) => t + 1),
                [i]
              ),
              l = (0, f.N)({
                contracts: r.map((e) => ({
                  ...h,
                  functionName: "listings",
                  args: [BigInt(e)],
                })),
                query: { enabled: p.hr && i > 0, refetchInterval: 2e4 },
              }),
              o = [];
            return (
              null === (e = l.data) ||
                void 0 === e ||
                e.forEach((e, t) => {
                  let n = e.result;
                  n &&
                    n[0] !== p.r_ &&
                    o.push({ seatId: r[t], seller: n[0], price: n[1] });
                }),
              {
                listings: o.slice(0, n),
                total: o.length,
                loading: a.isLoading || l.isLoading,
                refetch: () => {
                  a.refetch(), l.refetch();
                },
              }
            );
          })(),
          T = (function () {
            let { address: e } = (0, l.m)(),
              t = (0, y.u)({
                ...x,
                functionName: "seatsOf",
                args: [null != e ? e : p.r_],
                query: { enabled: p.hr && !!e, refetchInterval: 2e4 },
              });
            return {
              ids: (0, s.useMemo)(() => {
                var e;
                return (null !== (e = t.data) && void 0 !== e ? e : []).map(
                  Number
                );
              }, [t.data]),
              loading: t.isLoading,
              refetch: () => void t.refetch(),
            };
          })(),
          I =
            null !==
              (n = (0, y.u)({
                ...h,
                functionName: "effectiveMinPrice",
                query: { enabled: p.hr },
              }).data) && void 0 !== n
              ? n
              : 0n,
          {
            writeContract: S,
            data: C,
            isPending: E,
            error: A,
            reset: O,
          } = (0, o.S)(),
          B = (0, d.A)({ hash: C });
        (0, s.useEffect)(() => {
          B.isSuccess && (b(), T.refetch(), O());
        }, [B.isSuccess]);
        let F = E || B.isLoading;
        return (0, a.jsxs)("section", {
          id: "barn",
          className: "relative overflow-hidden bg-ink text-milk",
          children: [
            (0, a.jsx)(v.A, {}),
            (0, a.jsxs)("div", {
              className:
                "relative mx-auto max-w-5xl px-4 py-28 sm:px-6 md:py-32",
              children: [
                (0, a.jsxs)(w.Reveal, {
                  children: [
                    (0, a.jsx)(g.SplitHeading, {
                      text: "the barn",
                      className:
                        "text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "mx-auto mt-4 max-w-md text-center text-lg font-bold text-milk/60",
                      children:
                        "seats trade here, in wCOIN. the bag rides along with the seat, and 2.5% of every sale feeds the pot.",
                    }),
                  ],
                }),
                p.hr
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(w.Reveal, {
                          delay: 120,
                          children: (0, a.jsx)(N, {
                            seats: T.ids,
                            floor: I,
                            busy: F,
                            onList: (e, t) => {
                              S({
                                ...j,
                                chainId: u.bo.id,
                                functionName: "list",
                                args: [BigInt(e), t],
                              });
                            },
                            onApprove: (e) => {
                              S({
                                ...k,
                                chainId: u.bo.id,
                                functionName: "approve",
                                args: [p.UB.auctionBarn, BigInt(e)],
                              });
                            },
                            connected: !!i,
                          }),
                        }),
                        (0, a.jsx)(w.Reveal, {
                          delay: 180,
                          children: (0, a.jsxs)("div", {
                            className: "mt-10",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-baseline justify-between gap-3",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "label-milk",
                                    children: "open listings",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "label-milk",
                                    children: m
                                      ? "reading"
                                      : "".concat(c, " on the block"),
                                  }),
                                ],
                              }),
                              m || 0 !== r.length
                                ? (0, a.jsx)("div", {
                                    className:
                                      "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                                    children: r.map((e) =>
                                      (0, a.jsx)(
                                        M,
                                        {
                                          seatId: e.seatId,
                                          seller: e.seller,
                                          price: e.price,
                                          mine:
                                            (null == i
                                              ? void 0
                                              : i.toLowerCase()) ===
                                            e.seller.toLowerCase(),
                                          busy: F,
                                          onBuy: () => {
                                            S({
                                              address: p.UB.wcoin,
                                              abi: p.Wo,
                                              chainId: u.bo.id,
                                              functionName: "approve",
                                              args: [p.UB.auctionBarn, e.price],
                                            });
                                          },
                                          onConfirmBuy: () => {
                                            S({
                                              ...j,
                                              chainId: u.bo.id,
                                              functionName: "buy",
                                              args: [BigInt(e.seatId), e.price],
                                            });
                                          },
                                          onDelist: () => {
                                            S({
                                              ...j,
                                              chainId: u.bo.id,
                                              functionName: "delist",
                                              args: [BigInt(e.seatId)],
                                            });
                                          },
                                        },
                                        e.seatId
                                      )
                                    ),
                                  })
                                : (0, a.jsx)("p", {
                                    className: "mt-6 font-bold text-milk/60",
                                    children:
                                      "nothing listed right now. the herd is holding.",
                                  }),
                            ],
                          }),
                        }),
                        A &&
                          (0, a.jsx)("p", {
                            className:
                              "mt-6 text-center text-sm font-bold text-berry",
                            children:
                              null !==
                                (t =
                                  null === (e = A.shortMessage) || void 0 === e
                                    ? void 0
                                    : e.toLowerCase()) && void 0 !== t
                                ? t
                                : "that did not go through.",
                          }),
                      ],
                    })
                  : (0, a.jsx)(w.Reveal, {
                      delay: 120,
                      children: (0, a.jsx)("p", {
                        className: "mt-10 text-center font-bold text-milk/60",
                        children:
                          "the barn opens with the contracts. nothing trades yet.",
                      }),
                    }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        var t;
        let {
            seats: n,
            floor: i,
            busy: l,
            connected: o,
            onList: d,
            onApprove: u,
          } = e,
          [p, m] = (0, s.useState)(null),
          [y, f] = (0, s.useState)(""),
          h = null !== (t = null != p ? p : n[0]) && void 0 !== t ? t : null,
          x =
            /^\d+(\.\d{1,18})?$/.test(y.trim()) &&
            (0, r.v)(y.trim() || "0", 18) >= i;
        return o
          ? 0 === n.length
            ? (0, a.jsx)("p", {
                className: "mt-10 text-center font-bold text-milk/60",
                children:
                  "no seats in this wallet to sell. buy one below, or mint when the gate opens.",
              })
            : (0, a.jsxs)("div", {
                className:
                  "mt-10 rounded-3xl border border-milk/15 bg-milk/5 p-6 backdrop-blur-sm",
                children: [
                  (0, a.jsx)("p", {
                    className: "label-milk",
                    children: "put a seat on the block",
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-4 flex flex-wrap items-center gap-2",
                    children: n.map((e) =>
                      (0, a.jsxs)(
                        "button",
                        {
                          onClick: () => m(e),
                          className:
                            "rounded-full px-4 py-2 font-body text-sm font-bold transition ".concat(
                              h === e
                                ? "bg-milk text-ink"
                                : "border-2 border-milk/20 text-milk/70 hover:border-milk/50"
                            ),
                          children: ["seat ", (0, c.xG)(e)],
                        },
                        e
                      )
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mt-4 flex flex-col gap-2 sm:flex-row sm:items-center",
                    children: [
                      (0, a.jsx)("input", {
                        value: y,
                        onChange: (e) => f(e.target.value),
                        inputMode: "decimal",
                        placeholder: "ask in wCOIN, at least ".concat(
                          (0, c.oe)(i)
                        ),
                        "aria-label": "ask price in wCOIN",
                        className:
                          "w-full min-w-0 rounded-full border-2 border-milk/20 bg-transparent px-4 py-2.5 font-body text-base font-bold text-milk outline-none placeholder:text-milk/40 focus:border-milk/60",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex shrink-0 gap-2",
                        children: [
                          (0, a.jsx)("button", {
                            onClick: () => h && u(h),
                            disabled: l || !h,
                            className: "btn-glass-sm",
                            children: "approve",
                          }),
                          (0, a.jsx)("button", {
                            onClick: () => h && d(h, (0, r.v)(y.trim(), 18)),
                            disabled: l || !x || !h,
                            className:
                              "btn-chunky-milk !px-6 !py-2.5 !text-base",
                            children: l ? "working" : "list it",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "mt-2 text-xs font-semibold text-milk/50",
                    children:
                      "approve the barn once per seat, then list. listing freezes the bag so a buyer gets exactly what they see, and any pending withdrawal is cancelled.",
                  }),
                ],
              })
          : (0, a.jsxs)("div", {
              className:
                "mt-10 flex flex-col items-center gap-4 rounded-3xl border border-milk/15 bg-milk/5 p-6 text-center backdrop-blur-sm",
              children: [
                (0, a.jsx)("p", {
                  className: "font-bold text-milk/70",
                  children: "connect to list a seat of your own.",
                }),
                (0, a.jsx)(b.ConnectButtonBrand, { glass: !0 }),
              ],
            });
      }
      function M(e) {
        let {
          seatId: t,
          seller: n,
          price: s,
          mine: r,
          busy: l,
          onBuy: o,
          onConfirmBuy: d,
          onDelist: u,
        } = e;
        return (0, a.jsxs)("div", {
          className:
            "overflow-hidden rounded-3xl border border-milk/15 bg-milk/5 backdrop-blur-sm",
          children: [
            (0, a.jsx)("div", {
              className:
                "notch-sm relative aspect-square w-full overflow-hidden",
              children: (0, a.jsx)(i.default, {
                src: (0, m.Ww)(t),
                alt: "",
                width: 512,
                height: 512,
                loading: "lazy",
                className: "h-full w-full",
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 p-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-baseline justify-between gap-2",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "font-display text-lg font-semibold text-milk",
                      children: ["seat ", (0, c.xG)(t)],
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        "font-display text-lg font-semibold text-butter",
                      children: [(0, c.oe)(s), " wCOIN"],
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: "text-xs font-semibold text-milk/50",
                  children: r ? "your listing" : "from ".concat((0, c.sC)(n)),
                }),
                r
                  ? (0, a.jsx)("button", {
                      onClick: u,
                      disabled: l,
                      className: "btn-glass-sm w-full",
                      children: "take it back",
                    })
                  : (0, a.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: o,
                          disabled: l,
                          className: "btn-glass-sm flex-1",
                          children: "approve",
                        }),
                        (0, a.jsx)("button", {
                          onClick: d,
                          disabled: l,
                          className:
                            "btn-chunky-milk flex-1 !px-4 !py-2.5 !text-base",
                          children: "buy",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
    },
    75725: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let {
            colors: t = ["#5FB860", "#EEC25A", "#E9A97D", "#3B5A8C", "#FFF7E8"],
            count: n = 26,
          } = e,
          [s, r] = (0, i.useState)([]);
        return ((0, i.useEffect)(() => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
          r(
            Array.from({ length: n }, () => ({
              left: 20 + 60 * Math.random(),
              dx: (Math.random() - 0.5) * 260,
              dy: -40 - 180 * Math.random(),
              rot: (Math.random() - 0.5) * 720,
              dur: 0.9 + 0.7 * Math.random(),
              color: t[Math.floor(Math.random() * t.length)],
              round: Math.random() > 0.5,
            }))
          );
          let e = window.setTimeout(() => r([]), 1800);
          return () => window.clearTimeout(e);
        }, []),
        0 === s.length)
          ? null
          : (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 overflow-visible",
              children: s.map((e, t) =>
                (0, a.jsx)(
                  "span",
                  {
                    className:
                      "confetti-bit absolute top-1/2 h-2.5 w-2.5 ".concat(
                        e.round ? "rounded-full" : "rounded-[2px]"
                      ),
                    style: {
                      left: "".concat(e.left, "%"),
                      backgroundColor: e.color,
                      "--dx": "".concat(e.dx, "px"),
                      "--dy": "".concat(e.dy, "px"),
                      "--rot": "".concat(e.rot, "deg"),
                      "--dur": "".concat(e.dur, "s"),
                    },
                  },
                  t
                )
              ),
            });
      }
    },
    20900: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { value: t, className: n = "" } = e,
          s = (0, i.useRef)(null),
          [r, l] = (0, i.useState)(0),
          o = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(() => {
            if (o.current) {
              l(t);
              return;
            }
            let e = s.current;
            if (!e || "undefined" == typeof IntersectionObserver) {
              (o.current = !0), l(t);
              return;
            }
            let n = new IntersectionObserver(
              (e) => {
                if (!e.some((e) => e.isIntersecting) || o.current) return;
                if (
                  ((o.current = !0),
                  n.disconnect(),
                  window.matchMedia("(prefers-reduced-motion: reduce)")
                    .matches || 0 === t)
                ) {
                  l(t);
                  return;
                }
                let a = performance.now(),
                  i = (e) => {
                    let n = Math.min(1, (e - a) / 1100);
                    l(Math.round(t * (1 - Math.pow(1 - n, 3)))),
                      n < 1 && requestAnimationFrame(i);
                  };
                requestAnimationFrame(i);
              },
              { threshold: 0.4 }
            );
            return n.observe(e), () => n.disconnect();
          }, [t]),
          (0, a.jsx)("span", {
            ref: s,
            className: n,
            children: r.toLocaleString("en-US"),
          })
        );
      }
    },
    98250: function (e, t, n) {
      "use strict";
      n.d(t, {
        CowMorph: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { children: t } = e,
          n = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = n.current;
            if (
              !e ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return;
            let t = 0,
              a = 0,
              i = !1,
              s = () => {
                if (window.scrollY > 4) return;
                let n = e.getBoundingClientRect();
                (t = n.left + n.width / 2),
                  (a = n.top + n.height / 2),
                  (i = !0);
              },
              r = 0,
              l = () => {
                cancelAnimationFrame(r),
                  (r = requestAnimationFrame(() => {
                    if ((i || s(), !i)) return;
                    let n = Math.max(
                      0,
                      Math.min(1, window.scrollY / (0.72 * window.innerHeight))
                    );
                    if (0 === n) {
                      (e.style.transform = ""), (e.style.opacity = "1");
                      return;
                    }
                    let r = document.querySelector("nav img"),
                      l = null == r ? void 0 : r.getBoundingClientRect(),
                      o = l ? l.left + l.width / 2 - t : -t + 60,
                      d = l ? l.top + l.height / 2 - a : -a + 46,
                      u = n * n * (3 - 2 * n);
                    (e.style.transform = "translate("
                      .concat((o * u).toFixed(1), "px, ")
                      .concat((d * u).toFixed(1), "px) scale(")
                      .concat((1 - 0.88 * u).toFixed(3), ")")),
                      (e.style.opacity =
                        n > 0.88 ? String(Math.max(0, (1 - n) / 0.12)) : "1");
                  }));
              };
            return (
              s(),
              l(),
              window.addEventListener("scroll", l, { passive: !0 }),
              window.addEventListener("resize", s, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", l),
                  window.removeEventListener("resize", s),
                  cancelAnimationFrame(r);
              }
            );
          }, []),
          (0, a.jsx)("div", { ref: n, children: t })
        );
      }
    },
    98545: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return l;
        },
      });
      var a = n(57437);
      function i(e) {
        let { opacity: t = 0.045 } = e;
        return (0, a.jsx)("div", {
          "aria-hidden": !0,
          className: "pointer-events-none absolute inset-0",
          style: {
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            opacity: t,
          },
        });
      }
      var s = n(72384);
      let r = [
        {
          c: "233,169,125",
          a: 0.18,
          css: "-left-32 top-16 h-[30rem] w-[30rem]",
          d: "0s",
          t: "16s",
        },
        {
          c: "233,169,125",
          a: 0.13,
          css: "right-0 top-1/3 h-[34rem] w-[34rem] translate-x-1/3",
          d: "-5s",
          t: "19s",
        },
        {
          c: "238,194,90",
          a: 0.13,
          css: "bottom-0 left-1/4 h-[26rem] w-[26rem]",
          d: "-9s",
          t: "22s",
        },
        {
          c: "233,169,125",
          a: 0.13,
          css: "bottom-1/4 right-1/4 h-[22rem] w-[22rem]",
          d: "-13s",
          t: "17s",
        },
      ];
      function l() {
        return (0, a.jsx)(s.Offscreen, {
          className: "pointer-events-none absolute inset-0 overflow-hidden",
          children: (0, a.jsxs)("div", {
            "aria-hidden": !0,
            className: "absolute inset-0",
            children: [
              (0, a.jsx)(i, { opacity: 0.07 }),
              r.map((e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "glow-breathe absolute rounded-full ".concat(
                      e.css
                    ),
                    style: {
                      background: "radial-gradient(circle, rgba("
                        .concat(e.c, ",")
                        .concat(e.a, ") 0%, rgba(")
                        .concat(e.c, ",")
                        .concat(0.55 * e.a, ") 38%, rgba(")
                        .concat(e.c, ",0) 70%)"),
                      animationDelay: e.d,
                      animationDuration: e.t,
                    },
                  },
                  t
                )
              ),
            ],
          }),
        });
      }
    },
    53919: function (e, t, n) {
      "use strict";
      n.d(t, {
        HerdDeck: function () {
          return I;
        },
      });
      var a = n(57437),
        i = n(33145),
        s = n(2265),
        r = n(93662),
        l = n(46269),
        o = n(50433),
        d = n(74019),
        u = n(63544),
        p = n(46039),
        c = n(20900),
        m = n(98545),
        y = n(48228),
        f = n(4814),
        h = n(60024),
        x = n(66476),
        b = n(97770),
        v = n(53174),
        w = n(35179),
        g = n(75136);
      function j(e) {
        var t, n, r, u, c, m;
        let {
            seatId: y,
            minted: h,
            mine: x,
            onClose: j,
            onPrev: N,
            onNext: M,
          } = e,
          I = (0, s.useRef)(null),
          [S, C] = (0, s.useState)(null),
          [E, A] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let e = !1;
          return (
            C(null),
            A(!1),
            b.Yg.getRep(y).then((t) => !e && C(t)),
            b.Yg.isVerified(y).then((t) => !e && A(t)),
            () => {
              e = !0;
            }
          );
        }, [y]),
          (0, s.useEffect)(() => {
            var e;
            let t = document.activeElement;
            return (
              null === (e = I.current) || void 0 === e || e.focus(),
              (document.body.style.overflow = "hidden"),
              () => {
                var e;
                (document.body.style.overflow = ""),
                  null == t ||
                    null === (e = t.focus) ||
                    void 0 === e ||
                    e.call(t);
              }
            );
          }, []),
          (0, s.useEffect)(() => {
            let e = (e) => {
              if (
                ("Escape" === e.key && j(),
                "ArrowLeft" === e.key && N(),
                "ArrowRight" === e.key && M(),
                "Tab" === e.key && I.current)
              ) {
                let t = I.current.querySelectorAll(
                  'button, a[href], input, [tabindex]:not([tabindex="-1"])'
                );
                if (0 === t.length) return;
                let n = t[0],
                  a = t[t.length - 1];
                e.shiftKey && document.activeElement === n
                  ? (e.preventDefault(), a.focus())
                  : e.shiftKey ||
                    document.activeElement !== a ||
                    (e.preventDefault(), n.focus());
              }
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [j, N, M]);
        let O = (0, l.N)({
            contracts: [
              {
                address: o.UB.mooSeats,
                abi: o.qz,
                functionName: "ownerOf",
                args: [BigInt(y)],
              },
              {
                address: o.UB.mooSeats,
                abi: o.qz,
                functionName: "selfPrice",
                args: [BigInt(y)],
              },
              {
                address: o.UB.milkhouse,
                abi: o.y_,
                functionName: "claimable",
                args: [BigInt(y)],
              },
            ],
            query: { enabled: o.hr && h },
          }),
          B =
            null === (n = O.data) || void 0 === n
              ? void 0
              : null === (t = n[0]) || void 0 === t
              ? void 0
              : t.result,
          F =
            null === (u = O.data) || void 0 === u
              ? void 0
              : null === (r = u[1]) || void 0 === r
              ? void 0
              : r.result,
          R =
            null === (m = O.data) || void 0 === m
              ? void 0
              : null === (c = m[2]) || void 0 === c
              ? void 0
              : c.result;
        return (0, a.jsxs)("div", {
          ref: I,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "seat ".concat((0, p.xG)(y)),
          tabIndex: -1,
          className: "fixed inset-0 z-50 outline-none",
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              onClick: j,
              className:
                "dialog-backdrop-in absolute inset-0 bg-ink/95 backdrop-blur-sm",
            }),
            (0, a.jsxs)("div", {
              className:
                "dialog-panel-in relative z-10 flex h-full flex-col overflow-y-auto md:flex-row md:items-center md:overflow-hidden",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex items-center justify-center p-6 pt-20 md:w-1/2 md:p-12 md:pt-12",
                  children: (0, a.jsx)("div", {
                    className:
                      "w-full max-w-md [filter:drop-shadow(0_24px_28px_rgba(0,0,0,0.5))]",
                    children: (0, a.jsx)(g.Tilt, {
                      max: 7,
                      className: "notch w-full",
                      children: (0, a.jsx)("div", {
                        className: "w-full overflow-hidden",
                        children: (0, a.jsx)(i.default, {
                          src: (0, d.Ww)(y),
                          alt: "seat ".concat((0, p.xG)(y), " artwork"),
                          width: (0, d.zu)(y) ? 768 : 512,
                          height: (0, d.zu)(y) ? 768 : 512,
                          priority: !0,
                          className: "h-auto w-full",
                        }),
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-center gap-6 p-6 pb-20 md:w-1/2 md:p-12 lg:p-16",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className: "label-milk",
                          children: "seat",
                        }),
                        (0, a.jsx)("h3", {
                          className:
                            "mt-2 font-display text-5xl font-bold text-milk sm:text-6xl",
                          children: (0, p.xG)(y),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        x &&
                          (0, a.jsx)(f.D, {
                            variant: "b20",
                            children: "yours",
                          }),
                        (0, a.jsx)(f.D, {
                          variant: h ? "minted" : "open",
                          children: h ? "minted" : "open",
                        }),
                        (0, d.zu)(y) &&
                          (0, a.jsxs)(f.D, {
                            variant: "solo",
                            children: ["1 of 1 \xb7 ", (0, d.Il)(y).name],
                          }),
                        E &&
                          (0, a.jsx)(f.D, {
                            variant: "b20",
                            children: "b20 verified",
                          }),
                      ],
                    }),
                    (0, a.jsxs)("dl", {
                      className:
                        "flex flex-col divide-y divide-milk/15 border-y border-milk/15",
                      children: [
                        (0, a.jsx)(k, {
                          label: "owner",
                          value: h
                            ? B
                              ? (0, p.sC)(B)
                              : (0, a.jsx)(w.b, { className: "h-5 w-24" })
                            : "nobody yet",
                        }),
                        (0, a.jsx)(k, {
                          label: "self price",
                          value: h
                            ? void 0 === F
                              ? (0, a.jsx)(w.b, { className: "h-5 w-20" })
                              : 0n === F
                              ? "not set"
                              : "".concat((0, p.oe)(F), " wCOIN")
                            : "set at mint",
                        }),
                        (0, a.jsx)(k, {
                          label: "claimable milk",
                          value: h
                            ? void 0 === R
                              ? (0, a.jsx)(w.b, { className: "h-5 w-20" })
                              : "".concat((0, p.oe)(R), " wCOIN")
                            : "0 wCOIN",
                        }),
                        (0, a.jsx)(k, {
                          label: "rep",
                          value: null === S ? b.fM : String(S),
                        }),
                      ],
                    }),
                    h && (0, a.jsx)(v.g, { seatId: y, dark: !0 }),
                    !h &&
                      (0, a.jsx)("a", {
                        href: "#token",
                        onClick: j,
                        className: "btn-chunky-milk w-fit",
                        children: "buy $MOO",
                      }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "absolute right-4 top-4 z-20 flex gap-2 md:right-6 md:top-6",
              children: [
                (0, a.jsx)(T, {
                  onClick: N,
                  label: "previous seat",
                  children: (0, a.jsx)("path", { d: "m15 6-6 6 6 6" }),
                }),
                (0, a.jsx)(T, {
                  onClick: M,
                  label: "next seat",
                  children: (0, a.jsx)("path", { d: "m9 6 6 6-6 6" }),
                }),
                (0, a.jsx)(T, {
                  onClick: j,
                  label: "close",
                  children: (0, a.jsx)("path", { d: "M6 6l12 12M18 6 6 18" }),
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { label: t, value: n, accent: i = !1 } = e;
        return (0, a.jsxs)("div", {
          className: "flex items-center justify-between gap-4 py-4",
          children: [
            (0, a.jsx)("dt", { className: "label-milk", children: t }),
            (0, a.jsx)("dd", {
              className: "font-display text-xl font-semibold ".concat(
                i ? "text-meadow" : "text-milk"
              ),
              children: n,
            }),
          ],
        });
      }
      function T(e) {
        let { onClick: t, label: n, children: i } = e;
        return (0, a.jsx)("button", {
          onClick: t,
          "aria-label": n,
          className:
            "flex h-11 w-11 items-center justify-center rounded-full border-2 border-milk/25 bg-ink/60 text-milk transition hover:border-milk hover:bg-milk/10",
          children: (0, a.jsx)("svg", {
            viewBox: "0 0 24 24",
            className: "h-5 w-5 fill-none stroke-current",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": !0,
            children: i,
          }),
        });
      }
      let N = Array.from({ length: o.vn }, (e, t) => t + 1),
        M = (e, t) => ((e % t) + t) % t;
      function I() {
        return null;
        var e, t, n;
        let { address: b } = (0, r.m)(),
          [v, w] = (0, s.useState)(N),
          [g, k] = (0, s.useState)(0),
          [T, I] = (0, s.useState)(null),
          [C, E] = (0, s.useState)(N),
          A = (0, s.useRef)(null),
          [O, B] = (0, s.useState)(1024);
        (0, s.useEffect)(() => {
          let e = A.current;
          if (!e) return;
          let t = new ResizeObserver((e) => {
            for (let t of e) B(t.contentRect.width);
          });
          return t.observe(e), () => t.disconnect();
        }, []);
        let F = Math.round(Math.min(340, Math.max(180, 0.28 * O))),
          R = Math.round(0.6 * F),
          L = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = A.current;
          if (!e || "undefined" == typeof IntersectionObserver) return;
          let t = new IntersectionObserver(
            (e) => {
              L.current = e.some((e) => e.isIntersecting);
            },
            { threshold: 0.2 }
          );
          return t.observe(e), () => t.disconnect();
        }, []),
          (0, s.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
              return;
            let e = window.setInterval(() => {
              var e, t;
              U.current ||
                "hidden" === document.visibilityState ||
                !L.current ||
                (null === (t = A.current) || void 0 === t
                  ? void 0
                  : null === (e = t.closest("section")) || void 0 === e
                  ? void 0
                  : e.contains(document.activeElement)) ||
                k((e) => M(e + 1, N.length));
            }, 3600);
            return () => window.clearInterval(e);
          }, []);
        let [P, _] = (0, s.useState)(!1),
          z = (0, s.useRef)(0),
          D = (0, s.useRef)(0),
          q = (0, s.useRef)(!1),
          W = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          W.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
        }, []);
        let U = (0, s.useRef)(!1),
          [Y, H] = (0, s.useState)(!1),
          $ = () => {
            (U.current = !0), H(!0);
          },
          G = (e) => {
            var t;
            null === (t = A.current) ||
              void 0 === t ||
              t.style.setProperty("--dragx", "".concat(e, "px"));
          },
          X = (0, s.useRef)(0),
          V = (0, s.useRef)(null),
          K = () => {
            if (!P) return;
            _(!1);
            let e =
              Math.abs(X.current) > 0.4 ? Math.round(-(2.2 * X.current)) : 0;
            (X.current = 0), (V.current = null);
            let t = Math.max(-5, Math.min(5, Math.round(-D.current / R) + e));
            (D.current = 0),
              G(0),
              0 !== t && ((0, u.$Q)(), k((e) => M(e + t, v.length))),
              q.current &&
                window.setTimeout(() => {
                  q.current = !1;
                }, 0);
          },
          Q = (0, l.N)({
            contracts: [
              {
                address: o.UB.mooSeats,
                abi: o.qz,
                functionName: "totalSupply",
              },
              {
                address: o.UB.mooSeats,
                abi: o.qz,
                functionName: "seatsOf",
                args: [null != b ? b : o.r_],
              },
            ],
            query: { enabled: o.hr, refetchInterval: 12e3 },
          }),
          Z = Number(
            null !==
              (n =
                null === (t = Q.data) || void 0 === t
                  ? void 0
                  : null === (e = t[0]) || void 0 === e
                  ? void 0
                  : e.result) && void 0 !== n
              ? n
              : 0n
          ),
          J = (0, s.useMemo)(() => {
            var e, t, n;
            return new Set(
              (null !==
                (n =
                  null === (t = Q.data) || void 0 === t
                    ? void 0
                    : null === (e = t[1]) || void 0 === e
                    ? void 0
                    : e.result) && void 0 !== n
                ? n
                : []
              ).map(Number)
            );
          }, [Q.data]),
          ee = v[M(g, v.length)],
          et = ee <= Z,
          en = (0, s.useCallback)((e, t) => {
            (U.current = !0), E(t.length > 0 ? t : N), I(e);
          }, []),
          ea = (0, s.useCallback)(
            (e) => {
              I((t) => {
                if (null === t) return t;
                let n = C.indexOf(t),
                  a = C[M((n < 0 ? 0 : n) + e, C.length)],
                  i = v.indexOf(a);
                return i >= 0 && k(i), a;
              });
            },
            [C, v]
          ),
          ei = (e) => {
            $();
            let t = v.indexOf(e);
            t >= 0 && k(t), en(e, v);
          },
          es = (e) => (J.has(e) ? "yours" : e <= Z ? "minted" : "open");
        return (0, a.jsxs)("section", {
          id: "herd",
          className: "relative overflow-hidden bg-ink text-milk",
          children: [
            (0, a.jsx)(m.A, {}),
            (0, a.jsx)("div", {
              className: "relative mx-auto max-w-7xl px-4 sm:px-6",
              children: (0, a.jsxs)("div", {
                className: "relative py-28 md:py-36",
                children: [
                  (0, a.jsxs)(h.Reveal, {
                    children: [
                      (0, a.jsx)(x.SplitHeading, {
                        text: "the herd",
                        className:
                          "text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "mx-auto mt-4 max-w-md text-center text-lg font-bold text-milk/60",
                        children:
                          "1,000 cows. every one a seat. drag the deck.",
                      }),
                      (0, a.jsxs)("p", {
                        className: "mt-3 text-center label-milk",
                        children: [
                          (0, a.jsx)(c.I, { value: Z }),
                          " seats \xb7 drag the deck",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    ref: A,
                    className:
                      "relative -mx-4 select-none overflow-hidden sm:-mx-8 ".concat(
                        P ? "cursor-grabbing" : "cursor-grab"
                      ),
                    style: {
                      height: F + 56,
                      touchAction: "pan-y",
                      perspective: 1400,
                    },
                    onPointerDown: (e) => {
                      0 === e.button &&
                        ($(),
                        _(!0),
                        (q.current = !1),
                        (z.current = e.clientX),
                        (D.current = 0));
                    },
                    onPointerMove: (e) => {
                      if (!P) return;
                      let t = e.clientX - z.current;
                      !q.current &&
                        Math.abs(t) > 8 &&
                        ((q.current = !0),
                        e.currentTarget.setPointerCapture(e.pointerId));
                      let n = performance.now();
                      if (V.current) {
                        let t = n - V.current.t;
                        t > 0 && (X.current = (e.clientX - V.current.x) / t);
                      }
                      V.current = { x: e.clientX, t: n };
                      let a = 5 * R;
                      (D.current = Math.max(-a, Math.min(a, t))), G(D.current);
                    },
                    onPointerUp: K,
                    onPointerCancel: K,
                    onPointerLeave: K,
                    onKeyDown: (e) => {
                      ("ArrowLeft" === e.key || "ArrowRight" === e.key) &&
                        (e.preventDefault(),
                        $(),
                        k((t) =>
                          M(t + ("ArrowRight" === e.key ? 1 : -1), v.length)
                        ));
                    },
                    children: [
                      (0, a.jsx)("svg", {
                        "aria-hidden": !0,
                        viewBox: "0 0 10 6",
                        className:
                          "absolute left-1/2 top-3 h-2 w-3 -translate-x-1/2 fill-milk/40",
                        children: (0, a.jsx)("path", { d: "M5 6 0 0h10z" }),
                      }),
                      (0, a.jsx)("svg", {
                        "aria-hidden": !0,
                        viewBox: "0 0 10 6",
                        className:
                          "absolute bottom-3 left-1/2 h-2 w-3 -translate-x-1/2 fill-milk/40",
                        children: (0, a.jsx)("path", { d: "M5 0 0 6h10z" }),
                      }),
                      Array.from({ length: 13 }, (e, t) => t - 6).map((e) => {
                        let t = M(g + e, v.length),
                          n = v[t],
                          s =
                            0 === e
                              ? 1
                              : Math.max(0.52, 1 - 0.11 * Math.abs(e)),
                          r =
                            0 === e
                              ? 0
                              : Math.min(0.6, 0.22 + 0.09 * Math.abs(e)),
                          l =
                            0 === e
                              ? 0
                              : -Math.sign(e) *
                                Math.min(34, 24 + 3 * Math.abs(e)),
                          o = -(55 * Math.min(Math.abs(e), 4));
                        return (0, a.jsx)(
                          "div",
                          {
                            className: "absolute left-1/2 top-1/2",
                            style: {
                              transform:
                                "translate(-50%, -50%) translateX(calc("
                                  .concat(
                                    e * R,
                                    "px + var(--dragx, 0px))) translateZ("
                                  )
                                  .concat(o, "px) rotateY(")
                                  .concat(l, "deg) scale(")
                                  .concat(s, ")"),
                              transformStyle: "preserve-3d",
                              zIndex: 40 - Math.abs(e),
                              transition:
                                P || W.current
                                  ? "none"
                                  : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                              width: F,
                              filter:
                                0 !== e || P
                                  ? void 0
                                  : "drop-shadow(0 20px 22px rgba(0, 0, 0, 0.45))",
                            },
                            children: (0, a.jsx)("button", {
                              onClick: () => {
                                q.current ||
                                  (0 === e ? en(n, v) : ((0, u.$Q)(), k(t)));
                              },
                              className: "block w-full cursor-pointer",
                              "aria-label": "seat "
                                .concat((0, p.xG)(n), ", ")
                                .concat(es(n))
                                .concat(0 === e ? ", inspect" : ""),
                              tabIndex: 0 === e ? 0 : -1,
                              children: (0, a.jsxs)("div", {
                                className:
                                  "notch relative aspect-square w-full overflow-hidden",
                                children: [
                                  (0, a.jsx)(i.default, {
                                    src: (0, d.Ww)(n),
                                    alt: "",
                                    width: 512,
                                    height: 512,
                                    loading: "lazy",
                                    draggable: !1,
                                    className: "h-full w-full",
                                  }),
                                  (0, d.zu)(n) &&
                                    (0, a.jsx)("span", {
                                      "aria-hidden": !0,
                                      className:
                                        "absolute right-0 top-0 bg-gradient-to-r from-butter to-peach px-2 py-1 font-body text-xs font-extrabold tracking-[0.14em] text-ink",
                                      children: "1/1",
                                    }),
                                  (0, a.jsx)("div", {
                                    "aria-hidden": !0,
                                    className:
                                      "absolute inset-0 bg-ink transition-opacity duration-500",
                                    style: { opacity: r },
                                  }),
                                ],
                              }),
                            }),
                          },
                          n
                        );
                      }),
                    ],
                  }),
                  (0, a.jsx)(h.Reveal, {
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-milk/15 pt-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, a.jsxs)("span", {
                              className:
                                "font-display text-2xl font-semibold sm:text-3xl",
                              children: ["seat ", (0, p.xG)(ee)],
                            }),
                            (0, a.jsx)("span", {
                              className: "sr-only",
                              "aria-live": "polite",
                              children: Y
                                ? "seat "
                                    .concat((0, p.xG)(ee), ", ")
                                    .concat(et ? "minted" : "open")
                                : "",
                            }),
                            J.has(ee) &&
                              (0, a.jsx)(f.D, {
                                variant: "b20",
                                children: "yours",
                              }),
                            (0, a.jsx)(f.D, {
                              variant: et ? "minted" : "open",
                              children: et ? "minted" : "open",
                            }),
                            (0, d.zu)(ee) &&
                              (0, a.jsxs)(f.D, {
                                variant: "solo",
                                children: ["1 of 1 \xb7 ", (0, d.Il)(ee).name],
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(S, {
                              onClick: () => {
                                $(), (0, u.$Q)(), k((e) => M(e - 1, v.length));
                              },
                              label: "previous seat",
                              children: (0, a.jsx)("path", {
                                d: "m15 6-6 6 6 6",
                              }),
                            }),
                            (0, a.jsx)(S, {
                              onClick: () => {
                                $(), (0, u.$Q)(), k((e) => M(e + 1, v.length));
                              },
                              label: "next seat",
                              children: (0, a.jsx)("path", {
                                d: "m9 6 6 6-6 6",
                              }),
                            }),
                            (0, a.jsx)(S, {
                              onClick: () => {
                                $(),
                                  w(
                                    (function (e) {
                                      let t = [...e];
                                      for (let e = t.length - 1; e > 0; e--) {
                                        let n = Math.floor(
                                          Math.random() * (e + 1)
                                        );
                                        [t[e], t[n]] = [t[n], t[e]];
                                      }
                                      return t;
                                    })(N)
                                  ),
                                  k(0);
                              },
                              label: "shuffle the deck",
                              children: (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("path", { d: "M16 3h5v5" }),
                                  (0, a.jsx)("path", { d: "M4 20 21 3" }),
                                  (0, a.jsx)("path", { d: "M21 16v5h-5" }),
                                  (0, a.jsx)("path", { d: "m15 15 6 6" }),
                                  (0, a.jsx)("path", { d: "M4 4l5 5" }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(y.Magnetic, {
                              children: (0, a.jsx)("button", {
                                onClick: () => en(ee, v),
                                className: "btn-glass-sm",
                                children: "inspect seat",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(h.Reveal, {
                    children: (0, a.jsxs)("div", {
                      className: "mt-20",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-wrap items-end justify-between gap-x-6 gap-y-2",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "font-display text-3xl font-bold sm:text-4xl",
                              children: "the 1/1s",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "max-w-md text-base font-semibold text-milk/60",
                              children:
                                "four seats carry art nobody else can hold. they mint the same seed, take the same milk share and carry the same vote as every other seat. the art is the only thing that is rare.",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
                          children: d.KK.map((e) => {
                            let t = (0, d.Il)(e);
                            return (0, a.jsxs)(
                              "button",
                              {
                                onClick: () => ei(e),
                                className: "group text-left",
                                "aria-label": "seat "
                                  .concat((0, p.xG)(e), ", ")
                                  .concat(t.name, ", one of one, inspect"),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "notch relative aspect-square w-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5",
                                    children: [
                                      (0, a.jsx)(i.default, {
                                        src: (0, d.Ww)(e),
                                        alt: "",
                                        width: 768,
                                        height: 768,
                                        loading: "lazy",
                                        draggable: !1,
                                        className: "h-full w-full",
                                      }),
                                      (0, a.jsx)("span", {
                                        "aria-hidden": !0,
                                        className:
                                          "absolute right-0 top-0 bg-gradient-to-r from-butter to-peach px-2 py-1 font-body text-xs font-extrabold tracking-[0.14em] text-ink",
                                        children: "1/1",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "mt-3 font-display text-lg font-semibold",
                                    children: t.name,
                                  }),
                                  (0, a.jsxs)("p", {
                                    className: "label-milk mt-1",
                                    children: [
                                      "seat ",
                                      (0, p.xG)(e),
                                      " \xb7 ",
                                      t.element,
                                    ],
                                  }),
                                ],
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            null !== T &&
              (0, a.jsx)(j, {
                seatId: T,
                minted: T <= Z,
                mine: J.has(T),
                onClose: () => I(null),
                onPrev: () => ea(-1),
                onNext: () => ea(1),
              }),
          ],
        });
      }
      function S(e) {
        let { onClick: t, label: n, children: i } = e;
        return (0, a.jsx)("button", {
          onClick: t,
          "aria-label": n,
          className:
            "flex h-11 w-11 items-center justify-center rounded-full border-2 border-milk/25 text-milk transition hover:border-milk hover:bg-milk/10",
          children: (0, a.jsx)("svg", {
            viewBox: "0 0 24 24",
            className: "h-5 w-5 fill-none stroke-current",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": !0,
            children: i,
          }),
        });
      }
    },
    19240: function (e, t, n) {
      "use strict";
      n.d(t, {
        HeroCow: function () {
          return o;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(63544);
      function r() {
        return (0, a.jsx)("div", {
          "aria-hidden": !0,
          className: "bee-orbit pointer-events-none absolute -inset-8",
          children: (0, a.jsxs)("svg", {
            viewBox: "0 0 40 36",
            className: "absolute left-1/2 top-0 w-7 -translate-x-1/2",
            children: [
              (0, a.jsx)("ellipse", {
                className: "bee-wing",
                cx: "16",
                cy: "10",
                rx: "7",
                ry: "5",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "2",
                opacity: "0.9",
              }),
              (0, a.jsx)("ellipse", {
                cx: "20",
                cy: "22",
                rx: "11",
                ry: "8.5",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "2.5",
              }),
              (0, a.jsx)("path", {
                d: "M16 14.5 v15 M22 14.5 v15.5",
                stroke: "#2A2434",
                strokeWidth: "3",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("circle", {
                cx: "30",
                cy: "20",
                r: "2",
                fill: "#2A2434",
              }),
              (0, a.jsx)("path", {
                d: "M33 22 q 4 1 4 4",
                stroke: "#2A2434",
                strokeWidth: "2",
                strokeLinecap: "round",
                fill: "none",
              }),
            ],
          }),
        });
      }
      var l = n(92416);
      function o() {
        let [e, t] = (0, i.useState)(!1),
          n = (0, i.useRef)(),
          o = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            var e;
            if (
              !window.matchMedia("(pointer: fine)").matches ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return;
            let t =
              null === (e = o.current) || void 0 === e
                ? void 0
                : e.querySelectorAll(".moo-eye");
            if (!t || 0 === t.length) return;
            let n = 0,
              a = (e) => {
                cancelAnimationFrame(n),
                  (n = requestAnimationFrame(() => {
                    var n;
                    let a =
                      null === (n = o.current) || void 0 === n
                        ? void 0
                        : n.getBoundingClientRect();
                    if (!a) return;
                    let i = e.clientX - (a.left + a.width / 2),
                      s = e.clientY - (a.top + 0.35 * a.height),
                      r = Math.hypot(i, s) || 1,
                      l = (i / r) * 6,
                      d = (s / r) * 5;
                    t.forEach((e) =>
                      e.setAttribute(
                        "transform",
                        "translate("
                          .concat(l.toFixed(1), ", ")
                          .concat(d.toFixed(1), ")")
                      )
                    );
                  }));
              };
            return (
              window.addEventListener("mousemove", a, { passive: !0 }),
              () => {
                window.removeEventListener("mousemove", a),
                  cancelAnimationFrame(n);
              }
            );
          }, []),
          (0, a.jsxs)("button", {
            ref: o,
            onClick: () => {
              (0, s.uD)(),
                window.clearTimeout(n.current),
                t(!1),
                requestAnimationFrame(() => t(!0)),
                (n.current = window.setTimeout(() => t(!1), 1400));
            },
            "aria-label": "poke the cow",
            className:
              "animate-float relative w-56 cursor-pointer outline-none sm:w-64 md:w-72",
            children: [
              (0, a.jsx)(r, {}),
              (0, a.jsx)("div", {
                className: e ? "moo-hop moo-show-bubble" : "",
                children: (0, a.jsx)(l.MooCow, { className: "h-auto w-full" }),
              }),
            ],
          })
        );
      }
    },
    91410: function (e, t, n) {
      "use strict";
      n.d(t, {
        Intro: function () {
          return o;
        },
      });
      var a = n(57437),
        i = n(33145),
        s = n(2265);
      let r = { logoMark: "/brand/logo_mark.svg" },
        l = "moo market".split("");
      function o() {
        let [e, t] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          if (
            sessionStorage.getItem("moo-intro") ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            t(!0);
            return;
          }
          document.body.style.overflow = "hidden";
          let e = window.setTimeout(() => {
            sessionStorage.setItem("moo-intro", "1"),
              t(!0),
              (document.body.style.overflow = "");
          }, 1900);
          return () => {
            window.clearTimeout(e), (document.body.style.overflow = "");
          };
        }, []),
        e)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("script", {
                  dangerouslySetInnerHTML: {
                    __html:
                      "try{if(sessionStorage.getItem('moo-intro'))document.documentElement.classList.add('intro-seen')}catch(e){}",
                  },
                }),
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  children: (0, a.jsxs)("div", {
                    className:
                      "intro-curtain fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-milk",
                    style: { opacity: 0.995 },
                    children: [
                      r.logoMark &&
                        (0, a.jsx)("div", {
                          className: "intro-pop",
                          children: (0, a.jsx)(i.default, {
                            src: r.logoMark,
                            alt: "",
                            width: 88,
                            height: 88,
                            priority: !0,
                          }),
                        }),
                      (0, a.jsx)("p", {
                        className:
                          "font-display font-bold lowercase leading-none text-ink text-[clamp(3rem,9vw,7rem)]",
                        children: l.map((e, t) =>
                          " " === e
                            ? (0, a.jsx)("span", { children: " " }, t)
                            : (0, a.jsx)(
                                "span",
                                {
                                  className: "intro-pop inline-block",
                                  style: {
                                    animationDelay: "".concat(
                                      120 + 55 * t,
                                      "ms"
                                    ),
                                  },
                                  children: e,
                                },
                                t
                              )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
    },
    48228: function (e, t, n) {
      "use strict";
      n.d(t, {
        Magnetic: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { children: t, strength: n = 0.3 } = e,
          s = (0, i.useRef)(null),
          [r, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            l(
              window.matchMedia("(pointer: fine)").matches &&
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
          }, []),
          (0, a.jsx)("div", {
            ref: s,
            onPointerMove: (e) => {
              let t = s.current;
              if (!t || !r) return;
              let a = t.getBoundingClientRect(),
                i = (e.clientX - a.left - a.width / 2) * n,
                l = (e.clientY - a.top - a.height / 2) * n;
              (t.style.transform = "translate("
                .concat(i.toFixed(1), "px, ")
                .concat(l.toFixed(1), "px)")),
                (t.style.transition = "transform 0.1s ease-out");
            },
            onPointerLeave: () => {
              let e = s.current;
              e &&
                ((e.style.transition =
                  "transform 0.45s cubic-bezier(0.22, 1.6, 0.36, 1)"),
                (e.style.transform = "translate(0, 0)"));
            },
            className: "inline-block",
            children: t,
          })
        );
      }
    },
    46647: function (e, t, n) {
      "use strict";
      n.d(t, {
        MilkhousePanel: function () {
          return w;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(93662),
        r = n(46269),
        l = n(49891),
        o = n(97269),
        d = n(39759),
        u = n(50433),
        p = n(46039),
        c = n(75725),
        m = n(4814);
      let y = { address: u.UB.milkhouse, abi: u.y_ };
      function f() {
        var e, t, n, s;
        let [, c] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          let e = window.setInterval(() => c((e) => e + 1), 3e4);
          return () => window.clearInterval(e);
        }, []);
        let m = (0, r.N)({
            contracts: [
              { ...y, functionName: "epochReadyAt" },
              { ...y, functionName: "unallocated" },
              { ...y, functionName: "tipBps" },
              { ...y, functionName: "tipCap" },
              { ...y, functionName: "currentEpoch" },
            ],
            query: { enabled: u.hr, refetchInterval: 15e3 },
          }),
          [f, h, x, b, v] =
            null !==
              (n =
                null === (e = m.data) || void 0 === e
                  ? void 0
                  : e.map((e) => e.result)) && void 0 !== n
              ? n
              : [],
          {
            writeContract: w,
            data: g,
            isPending: j,
            error: k,
            reset: T,
          } = (0, l.S)(),
          N = (0, o.A)({ hash: g });
        if (
          ((0, i.useEffect)(() => {
            N.isSuccess && (m.refetch(), T());
          }, [N.isSuccess]),
          !u.hr || "bigint" != typeof v || 0n === v)
        )
          return null;
        let { text: M, ready: I } = (function (e) {
            let t = Number(e) - Math.floor(Date.now() / 1e3);
            if (t <= 0) return { text: "the epoch is up", ready: !0 };
            let n = Math.floor(t / 86400),
              a = Math.floor((t % 86400) / 3600),
              i = Math.floor((t % 3600) / 60);
            return {
              text:
                n > 0
                  ? "".concat(n, "d ").concat(a, "h")
                  : a > 0
                  ? "".concat(a, "h ").concat(i, "m")
                  : "".concat(i, "m"),
              ready: !1,
            };
          })(null != f ? f : 0n),
          S = null != h ? h : 0n,
          C = (S * (null != x ? x : 0n)) / 10000n,
          E = null != b ? b : 0n,
          A = j || N.isLoading;
        return (0, a.jsxs)("div", {
          className:
            "card-day flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between",
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("p", {
                  className: "label",
                  children: "milking hour",
                }),
                (0, a.jsx)("p", {
                  className: "mt-1 font-display text-2xl font-semibold",
                  children: I ? "ready to ring" : "next epoch in ".concat(M),
                }),
                (0, a.jsx)("p", {
                  className: "mt-1 text-sm font-semibold text-ink/60",
                  children: I
                    ? "whoever rings it in earns ".concat(
                        (0, p.oe)(C > E ? E : C),
                        " wCOIN of this epoch"
                      )
                    : "anyone can ring the next epoch in once this one is up",
                }),
              ],
            }),
            (0, a.jsx)("button", {
              onClick: () =>
                w({ ...y, chainId: d.bo.id, functionName: "milkingHour" }),
              disabled: !I || A || 0n === S,
              className: "btn-chunky shrink-0",
              children: A ? "ringing" : "ring the bell",
            }),
            k &&
              (0, a.jsx)("p", {
                className: "text-sm font-bold text-berry",
                children:
                  null !==
                    (s =
                      null === (t = k.shortMessage) || void 0 === t
                        ? void 0
                        : t.toLowerCase()) && void 0 !== s
                    ? s
                    : "that did not go through.",
              }),
          ],
        });
      }
      var h = n(60024),
        x = n(66476),
        b = n(82338);
      let v = { address: u.UB.milkhouse, abi: u.y_ };
      function w() {
        return null;
        var e, t;
        let { address: n } = (0, s.m)(),
          y = (0, r.N)({
            contracts: [
              { ...v, functionName: "potBalance" },
              { ...v, functionName: "currentEpoch" },
              { ...v, functionName: "unallocated" },
            ],
            query: { enabled: u.hr, refetchInterval: 12e3 },
          }),
          [w, j, k] =
            null !==
              (t =
                null === (e = y.data) || void 0 === e
                  ? void 0
                  : e.map((e) => e.result)) && void 0 !== t
              ? t
              : [],
          T = (0, r.N)({
            contracts: [
              {
                address: u.UB.mooSeats,
                abi: u.qz,
                functionName: "seatsOf",
                args: [null != n ? n : u.r_],
              },
            ],
            query: { enabled: u.hr && !!n, refetchInterval: 12e3 },
          }),
          N = (0, i.useMemo)(() => {
            var e, t, n;
            return (
              null !==
                (n =
                  null === (t = T.data) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                    ? void 0
                    : e.result) && void 0 !== n
                ? n
                : []
            ).map(Number);
          }, [T.data]),
          M = (0, r.N)({
            contracts: N.map((e) => ({
              ...v,
              functionName: "claimable",
              args: [BigInt(e)],
            })),
            query: { enabled: u.hr && N.length > 0, refetchInterval: 12e3 },
          }),
          I = N.map((e, t) => {
            var n, a, i;
            return {
              id: e,
              claimable:
                null !==
                  (i =
                    null === (a = M.data) || void 0 === a
                      ? void 0
                      : null === (n = a[t]) || void 0 === n
                      ? void 0
                      : n.result) && void 0 !== i
                  ? i
                  : 0n,
            };
          }),
          S = I.reduce((e, t) => e + t.claimable, 0n),
          { writeContract: C, data: E, isPending: A } = (0, l.S)(),
          O = (0, o.A)({ hash: E });
        (0, i.useEffect)(() => {
          O.isSuccess && (y.refetch(), M.refetch());
        }, [O.isSuccess]);
        let B = (e) => {
            C({
              ...v,
              chainId: d.bo.id,
              functionName: "claimAll",
              args: [BigInt(e)],
            });
          },
          F = Number(null != j ? j : 0n),
          R = u.hr && F > 0;
        return (0, a.jsxs)("section", {
          id: "milkhouse",
          className: "relative overflow-hidden bg-oat",
          children: [
            (0, a.jsx)(b.r, {}),
            (0, a.jsxs)("div", {
              className:
                "relative mx-auto max-w-5xl px-4 py-28 sm:px-6 md:py-36",
              children: [
                (0, a.jsxs)(h.Reveal, {
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-4",
                      children: [
                        (0, a.jsx)(x.SplitHeading, {
                          text: "the milkhouse",
                          className:
                            "text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold",
                        }),
                        !R &&
                          (0, a.jsx)(m.D, {
                            variant: "soon",
                            children: "soon",
                          }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "mx-auto mt-4 max-w-md text-center text-lg font-bold text-ink/60",
                      children:
                        "the pot holds wCOIN and pays every seat, every epoch. pull up a stool.",
                    }),
                  ],
                }),
                (0, a.jsx)(h.Reveal, {
                  delay: 120,
                  children: (0, a.jsxs)("div", {
                    className: "mt-12 grid gap-5 sm:grid-cols-3",
                    children: [
                      (0, a.jsx)(g, {
                        label: "pot balance",
                        value: "bigint" == typeof w ? (0, p.oe)(w) : "0",
                        unit: "wCOIN",
                      }),
                      (0, a.jsx)(g, {
                        label: "current epoch",
                        value: R ? F.toLocaleString("en-US") : "not started",
                      }),
                      (0, a.jsx)(g, {
                        label: "unallocated",
                        value: "bigint" == typeof k ? (0, p.oe)(k) : "0",
                        unit: "wCOIN",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(h.Reveal, {
                  delay: 180,
                  children: (0, a.jsx)("div", {
                    className: "mt-6",
                    children: (0, a.jsx)(f, {}),
                  }),
                }),
                (0, a.jsx)(h.Reveal, {
                  delay: 200,
                  children: (0, a.jsxs)("div", {
                    className: "card-day relative mt-6 p-6 sm:p-8",
                    children: [
                      O.isSuccess &&
                        (0, a.jsx)(c.D, {
                          colors: ["#FFF7E8", "#F3E3C3", "#EEC25A"],
                          count: 18,
                        }),
                      u.hr && R
                        ? n
                          ? 0 === N.length
                            ? (0, a.jsx)("p", {
                                className: "text-center font-bold text-ink/70",
                                children:
                                  "no seats in this wallet. mint one to get milked in.",
                              })
                            : (0, a.jsxs)("div", {
                                className: "flex flex-col gap-5",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-wrap items-baseline justify-between gap-2",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "label",
                                        children: "your claimable",
                                      }),
                                      (0, a.jsxs)("span", {
                                        className:
                                          "font-display text-3xl font-semibold",
                                        children: [(0, p.oe)(S), " wCOIN"],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "flex flex-col divide-y divide-ink/10 border-t border-ink/10",
                                    children: I.map((e) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex flex-wrap items-center justify-between gap-3 py-4",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center gap-4",
                                              children: [
                                                (0, a.jsxs)(m.D, {
                                                  variant: "seat",
                                                  children: [
                                                    "seat ",
                                                    (0, p.xG)(e.id),
                                                  ],
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className:
                                                    "font-display text-lg font-semibold",
                                                  children: [
                                                    (0, p.oe)(e.claimable),
                                                    " wCOIN",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("button", {
                                              onClick: () => B(e.id),
                                              disabled:
                                                0n === e.claimable ||
                                                A ||
                                                O.isLoading,
                                              className: "btn-chunky-sm",
                                              children:
                                                A || O.isLoading
                                                  ? "milking"
                                                  : "milk",
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                    ),
                                  }),
                                  O.isSuccess &&
                                    (0, a.jsxs)("p", {
                                      className:
                                        "flex items-center gap-2 text-sm font-bold text-ink",
                                      children: [
                                        (0, a.jsx)("span", {
                                          "aria-hidden": !0,
                                          className:
                                            "h-2 w-2 rounded-full bg-meadow",
                                        }),
                                        "milked. wCOIN is in your wallet.",
                                      ],
                                    }),
                                ],
                              })
                          : (0, a.jsx)("p", {
                              className: "text-center font-bold text-ink/70",
                              children:
                                "connect a wallet to see your claimable milk.",
                            })
                        : (0, a.jsx)("p", {
                            className: "text-center font-bold text-ink/70",
                            children:
                              "the first epoch starts once the pot is funded. milk lands here.",
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { label: t, value: n, unit: i } = e;
        return (0, a.jsxs)("div", {
          className: "card-day px-6 py-7 text-center",
          children: [
            (0, a.jsx)("p", { className: "label", children: t }),
            (0, a.jsxs)("p", {
              className: "mt-2 font-display text-3xl font-bold",
              children: [
                n,
                i &&
                  (0, a.jsx)("span", {
                    className: "ml-2 text-lg font-semibold text-ink/50",
                    children: i,
                  }),
              ],
            }),
          ],
        });
      }
    },
    33792: function (e, t, n) {
      "use strict";
      n.d(t, {
        MintModule: function () {
          return R;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(93662),
        r = n(46269),
        l = n(49891),
        o = n(97269),
        d = n(39759),
        u = n(50433),
        p = n(46039),
        c = n(75725),
        m = n(33145),
        y = n(74019);
      function f(e) {
        let { seats: t, onClose: n } = e,
          [s, r] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            document.body.style.overflow = "hidden";
            let e = window.setTimeout(() => r(!0), 350),
              t = (e) => {
                "Escape" === e.key && n();
              };
            return (
              window.addEventListener("keydown", t),
              () => {
                window.clearTimeout(e),
                  window.removeEventListener("keydown", t),
                  (document.body.style.overflow = "");
              }
            );
          }, [n]),
          (0, a.jsxs)("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "welcome to the herd",
            className: "fixed inset-0 z-[90]",
            children: [
              (0, a.jsx)("div", {
                className: "absolute inset-0 bg-ink/90",
                onClick: n,
                "aria-hidden": !0,
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute left-1/2 top-1/2 w-[min(94vw,34rem)] -translate-x-1/2 -translate-y-1/2",
                children: (0, a.jsxs)("div", {
                  className:
                    "relative overflow-hidden rounded-3xl border-4 border-ink bg-milk p-8 text-center",
                  children: [
                    s && (0, a.jsx)(c.D, { count: 34 }),
                    (0, a.jsx)("p", {
                      className: "label",
                      children: "the gate opens",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "mt-2 font-display text-4xl font-bold text-ink",
                      children: "welcome to the herd",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "mt-6 flex flex-wrap items-center justify-center gap-4",
                      children: t.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "w-36",
                            children: [
                              (0, a.jsx)("div", {
                                className: "notch-sm overflow-hidden",
                                children: (0, a.jsx)(m.default, {
                                  src: (0, y.Ww)(e),
                                  alt: "seat ".concat((0, p.xG)(e), " artwork"),
                                  width: 512,
                                  height: 512,
                                  className: "h-auto w-full",
                                }),
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "mt-2 font-display text-base font-semibold text-ink",
                                children: ["seat ", (0, p.xG)(e)],
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                    (0, a.jsx)("p", {
                      className: "mt-5 text-sm font-bold text-ink/60",
                      children:
                        "your seat milks every epoch from here on. pull up a stool.",
                    }),
                    (0, a.jsx)("button", {
                      onClick: n,
                      className: "btn-chunky mt-6",
                      children: "into the pasture",
                    }),
                    (0, a.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "absolute inset-y-0 left-0 w-1/2 border-r-4 border-ink bg-oat transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ".concat(
                          s ? "-translate-x-full" : ""
                        ),
                      style: {
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent 0 46px, rgba(42,36,52,0.14) 46px 50px)",
                      },
                    }),
                    (0, a.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "absolute inset-y-0 right-0 w-1/2 border-l-4 border-ink bg-oat transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ".concat(
                          s ? "translate-x-full" : ""
                        ),
                      style: {
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent 0 46px, rgba(42,36,52,0.14) 46px 50px)",
                      },
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var h = n(15615),
        x = n(92416),
        b = n(35179),
        v = n(4814),
        w = n(60024),
        g = n(66476),
        j = n(68768),
        k = n(27323),
        T = n(97770),
        N = n(53174),
        M = n(82592);
      function I(e) {
        var t, n;
        let { seatId: s } = e,
          r = (0, M.s)(s),
          [c, m] = (0, i.useState)(""),
          [, y] = (0, i.useState)(0),
          {
            writeContract: f,
            data: h,
            isPending: x,
            error: b,
            reset: v,
          } = (0, l.S)(),
          w = (0, o.A)({ hash: h });
        if (
          ((0, i.useEffect)(() => {
            let e = window.setInterval(() => y((e) => e + 1), 3e4);
            return () => window.clearInterval(e);
          }, []),
          (0, i.useEffect)(() => {
            w.isSuccess && (r.refetch(), m(""), v());
          }, [w.isSuccess]),
          !r.vault)
        )
          return null;
        let g =
            /^\d+(\.\d{1,18})?$/.test(c.trim()) &&
            (0, j.v)(c.trim() || "0", 18) <= r.free,
          k = x || w.isLoading;
        return r.pending
          ? (0, a.jsxs)("div", {
              className:
                "flex flex-col gap-2 rounded-2xl border border-ink/15 bg-oat/40 p-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-baseline justify-between gap-3",
                  children: [
                    (0, a.jsx)("span", {
                      className: "label",
                      children: "withdrawing",
                    }),
                    (0, a.jsxs)("span", {
                      className: "font-display text-base font-semibold",
                      children: [(0, p.oe)(r.pending.amount), " wCOIN"],
                    }),
                  ],
                }),
                (0, a.jsx)("button", {
                  onClick: () =>
                    f({
                      address: r.vault,
                      abi: u.FE,
                      chainId: d.bo.id,
                      functionName: "executeWithdraw",
                    }),
                  disabled: !r.ready || k,
                  className: "btn-chunky-sm w-full",
                  children: k
                    ? "confirming"
                    : r.ready
                    ? "take it out"
                    : "ready in ".concat(
                        (function (e) {
                          let t = Number(e) - Math.floor(Date.now() / 1e3);
                          if (t <= 0) return "ready";
                          let n = Math.floor(t / 3600),
                            a = Math.floor((t % 3600) / 60);
                          return n > 0
                            ? "".concat(n, "h ").concat(a, "m")
                            : "".concat(a, "m");
                        })(r.pending.readyAt)
                      ),
                }),
                (0, a.jsx)("p", {
                  className: "text-xs font-semibold text-ink/60",
                  children:
                    "selling the seat before this lands cancels it, and the milk stays in the bag.",
                }),
              ],
            })
          : 0n === r.free
          ? null
          : (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)("input", {
                      value: c,
                      onChange: (e) => m(e.target.value),
                      inputMode: "decimal",
                      placeholder: "up to ".concat((0, p.oe)(r.free)),
                      "aria-label": "amount of free milk to withdraw",
                      className:
                        "w-full min-w-0 rounded-full border-2 border-ink/20 bg-milk px-4 py-2 font-body text-base font-bold outline-none placeholder:text-ink/40 focus:border-ink",
                    }),
                    (0, a.jsx)("button", {
                      onClick: () =>
                        f({
                          address: r.vault,
                          abi: u.FE,
                          chainId: d.bo.id,
                          functionName: "initiateWithdraw",
                          args: [(0, j.v)(c.trim(), 18)],
                        }),
                      disabled: !g || k || r.frozen,
                      className: "btn-chunky-sm shrink-0",
                      children: k ? "confirming" : "withdraw",
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: "text-xs font-semibold text-ink/50",
                  children: "takes 24 hours. the seed never moves.",
                }),
                b &&
                  (0, a.jsx)("p", {
                    className: "text-sm font-bold text-berry",
                    children:
                      null !==
                        (n =
                          null === (t = b.shortMessage) || void 0 === t
                            ? void 0
                            : t.toLowerCase()) && void 0 !== n
                        ? n
                        : "that did not go through.",
                  }),
              ],
            });
      }
      function S(e) {
        let { seatId: t } = e,
          [n, s] = (0, i.useState)(null),
          [r, c] = (0, i.useState)(!1),
          [f, h] = (0, i.useState)(!1),
          [x, w] = (0, i.useState)("");
        (0, i.useEffect)(() => {
          T.Yg.getRep(t).then(s), T.Yg.isVerified(t).then(c);
        }, [t]);
        let g = (0, k.u)({
            address: u.UB.mooSeats,
            abi: u.qz,
            functionName: "selfPrice",
            args: [BigInt(t)],
          }),
          { writeContract: M, data: S, isPending: C } = (0, l.S)(),
          E = (0, o.A)({ hash: S });
        (0, i.useEffect)(() => {
          E.isSuccess && (g.refetch(), h(!1));
        }, [E.isSuccess]);
        let A = /^\d+(\.\d{1,18})?$/.test(x.trim()),
          O = g.data;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-oat",
          children: [
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)(m.default, {
                  src: (0, y.Ww)(t),
                  alt: "seat ".concat((0, p.xG)(t), " artwork"),
                  width: 512,
                  height: 512,
                  className: "h-auto w-full",
                }),
                (0, a.jsxs)("div", {
                  className: "absolute left-3 top-3 flex flex-wrap gap-2",
                  children: [
                    (0, a.jsxs)(v.D, {
                      variant: "seat",
                      children: ["seat ", (0, p.xG)(t)],
                    }),
                    (0, y.zu)(t) &&
                      (0, a.jsxs)(v.D, {
                        variant: "solo",
                        children: ["1 of 1 \xb7 ", (0, y.Il)(t).name],
                      }),
                  ],
                }),
                r &&
                  (0, a.jsx)("div", {
                    className: "absolute right-3 top-3",
                    children: (0, a.jsx)(v.D, {
                      variant: "b20",
                      children: "b20",
                    }),
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-4 p-5",
              children: [
                (0, a.jsx)(N.g, { seatId: t }),
                (0, a.jsx)(I, { seatId: t }),
                (0, a.jsxs)("dl", {
                  className:
                    "flex flex-col divide-y divide-ink/15 border-y border-ink/15",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between gap-2 py-3",
                      children: [
                        (0, a.jsx)("dt", {
                          className: "label",
                          children: "self price",
                        }),
                        (0, a.jsx)("dd", {
                          className: "font-display text-lg font-semibold",
                          children:
                            void 0 === O
                              ? (0, a.jsx)(b.b, { className: "h-5 w-20" })
                              : 0n === O
                              ? "not set"
                              : "".concat((0, p.oe)(O), " wCOIN"),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between gap-2 py-3",
                      children: [
                        (0, a.jsx)("dt", {
                          className: "label",
                          children: "rep",
                        }),
                        (0, a.jsx)("dd", {
                          className:
                            "font-display text-lg font-semibold text-ink",
                          children: null != n ? n : T.fM,
                        }),
                      ],
                    }),
                  ],
                }),
                f
                  ? (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)("input", {
                          value: x,
                          onChange: (e) => w(e.target.value),
                          inputMode: "decimal",
                          placeholder: "price in wCOIN",
                          className:
                            "w-full min-w-0 rounded-full border-2 border-ink bg-milk px-4 py-2 font-body text-base font-bold outline-none placeholder:text-ink/40",
                        }),
                        (0, a.jsx)("button", {
                          onClick: () => {
                            A &&
                              M({
                                address: u.UB.mooSeats,
                                abi: u.qz,
                                chainId: d.bo.id,
                                functionName: "setSelfPrice",
                                args: [BigInt(t), (0, j.v)(x.trim(), 18)],
                              });
                          },
                          disabled: !A || C || E.isLoading,
                          className: "btn-chunky-sm shrink-0",
                          children: C || E.isLoading ? "saving" : "set",
                        }),
                      ],
                    })
                  : (0, a.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: () => h(!0),
                          className: "btn-chunky-sm",
                          children: "set self price",
                        }),
                        (0, a.jsx)(v.D, {
                          variant: "soon",
                          children: "takeover soon",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
      var C = n(82338),
        E = n(20900);
      function A(e) {
        let { children: t, bg: n } = e;
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 96 96",
          fill: "none",
          "aria-hidden": !0,
          className: "h-full w-full",
          children: [
            (0, a.jsx)("circle", {
              cx: "48",
              cy: "48",
              r: "40",
              fill: n,
              opacity: "0.25",
            }),
            t,
          ],
        });
      }
      function O() {
        return (0, a.jsxs)(A, {
          bg: "#E9A97D",
          children: [
            (0, a.jsx)("path", {
              d: "M40 22 h16 v8 l6 12 v28 a6 6 0 0 1 -6 6 h-16 a6 6 0 0 1 -6 -6 v-28 l6 -12 z",
              fill: "#FFF7E8",
              stroke: "#2A2434",
              strokeWidth: "5",
              strokeLinejoin: "round",
            }),
            (0, a.jsx)("path", {
              d: "M34 48 c 6 -5 16 5 22 0 v22 a6 6 0 0 1 -6 6 h-10 a6 6 0 0 1 -6 -6 z",
              fill: "#E9A97D",
              stroke: "#2A2434",
              strokeWidth: "4",
              strokeLinejoin: "round",
            }),
            (0, a.jsx)("rect", {
              x: "38",
              y: "18",
              width: "20",
              height: "8",
              rx: "3",
              fill: "#EEC25A",
              stroke: "#2A2434",
              strokeWidth: "4",
            }),
          ],
        });
      }
      function B(e) {
        let { supply: t } = e,
          n = Math.min(100, (t / u.vn) * 100);
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-baseline justify-between gap-3",
              children: [
                (0, a.jsxs)("span", {
                  className: "font-display text-3xl font-semibold sm:text-4xl",
                  children: [
                    (0, a.jsx)(E.I, { value: t }),
                    (0, a.jsx)("span", {
                      className: "text-ink/60",
                      children: " / 1,000",
                    }),
                  ],
                }),
                (0, a.jsxs)("span", {
                  className: "label",
                  children: [n.toFixed(1), "% of the herd"],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)("div", {
                  role: "progressbar",
                  "aria-label": "seats minted",
                  "aria-valuemin": 0,
                  "aria-valuemax": u.vn,
                  "aria-valuenow": t,
                  className:
                    "h-4 overflow-hidden rounded-full border-2 border-ink/25 bg-milk",
                  children: (0, a.jsx)("div", {
                    className:
                      "shimmer h-full rounded-full border-2 border-ink bg-butter transition-all duration-700",
                    style: {
                      width: "".concat(Math.max(n, t > 0 ? 3 : 0), "%"),
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "absolute -top-4 h-9 w-9 -translate-x-1/2 transition-all duration-700",
                  style: { left: "".concat(Math.max(n, t > 0 ? 3 : 0), "%") },
                  children: (0, a.jsx)(O, {}),
                }),
              ],
            }),
          ],
        });
      }
      let F = { address: u.UB.mooSeats, abi: u.qz };
      function R() {
        return null;
        let e = "0xb200000000000000000000716cb18cab70ff5f01",
          t = "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xb200000000000000000000716cb18cab70ff5f01",
          [n, s] = (0, i.useState)(!1);
        return (0, a.jsxs)("section", {
          id: "token",
          className: "scene-dawn relative overflow-hidden",
          children: [
            (0, a.jsx)(C.r, {}),
            (0, a.jsxs)("div", {
              className:
                "relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-36",
              children: [
                (0, a.jsxs)(w.Reveal, {
                  children: [
                    (0, a.jsx)(g.SplitHeading, {
                      text: "buy $MOO",
                      className:
                        "text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "mx-auto mt-4 max-w-md text-center text-lg font-bold text-ink/60",
                      children:
                        "$MOO is a normal token on base. trade it on uniswap.",
                    }),
                  ],
                }),
                (0, a.jsx)(w.Reveal, {
                  delay: 120,
                  children: (0, a.jsxs)("div", {
                    className: "relative mx-auto mt-12 max-w-xl",
                    children: [
                      (0, a.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "absolute -top-[3.2rem] right-4 hidden w-24 rotate-3 sm:-top-[4.3rem] sm:right-7 sm:block sm:w-28",
                        children: (0, a.jsx)(x.MooCow, {
                          className: "h-auto w-full",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "relative flex flex-col gap-6 rounded-3xl border-2 border-ink/10 bg-milk p-6 shadow-xl shadow-ink/5 sm:p-8",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: [
                              (0, a.jsx)("span", {
                                className: "chip-ink",
                                children: "chain \xb7 base",
                              }),
                              (0, a.jsx)("span", {
                                className: "chip-ink",
                                children: "type \xb7 erc-20",
                              }),
                              (0, a.jsx)("span", {
                                className: "chip-ink",
                                children: "trade \xb7 uniswap",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col items-center gap-4 border-t border-ink/10 pt-6 text-center",
                            children: [
                              (0, a.jsx)("p", {
                                className: "label",
                                children: "contract address",
                              }),
                              (0, a.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                  navigator.clipboard &&
                                    navigator.clipboard
                                      .writeText(e)
                                      .then(() => {
                                        s(!0),
                                          window.setTimeout(() => s(!1), 1600);
                                      });
                                },
                                className:
                                  "w-full break-all rounded-2xl border-2 border-ink/15 bg-oat/50 px-4 py-3 font-body text-sm font-bold text-ink transition hover:border-ink",
                                children: n ? "copied" : e,
                              }),
                              (0, a.jsx)("a", {
                                href: t,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn-chunky w-full text-center",
                                children: "buy $MOO",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { deployed: t, tokenSet: n } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col items-center gap-4 border-t border-ink/10 pt-6 text-center",
          children: [
            (0, a.jsx)(v.D, { variant: "soon", children: "soon" }),
            (0, a.jsx)("p", {
              className: "font-bold leading-relaxed text-ink/80",
              children: t
                ? n
                  ? "minting is not open yet. the gate lifts soon."
                  : "the $MOO token has not launched yet. minting opens after launch, gated on holding $MOO."
                : "the herd is getting ready. contracts land on base shortly.",
            }),
            (0, a.jsxs)("a", {
              href: "https://x.com/moomarket_HQ",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-chunky-sm",
              children: [
                (0, a.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-4 w-4",
                  fill: "currentColor",
                  "aria-hidden": !0,
                  children: (0, a.jsx)("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  }),
                }),
                "follow for the launch call",
              ],
            }),
          ],
        });
      }
      function P() {
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col items-center gap-3 border-t border-ink/10 pt-6 text-center",
          children: [
            (0, a.jsx)(v.D, { variant: "minted", children: "minted out" }),
            (0, a.jsx)("p", {
              className: "font-bold text-ink/80",
              children:
                "all 1,000 seats are taken. the herd is full. takeover bids arrive with the harberger update.",
            }),
          ],
        });
      }
    },
    31763: function (e, t, n) {
      "use strict";
      n.d(t, {
        Parallax: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { factor: t = 10, children: n } = e,
          s = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = s.current;
            if (
              !e ||
              !window.matchMedia("(pointer: fine)").matches ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return;
            let n = 0,
              a = (a) => {
                cancelAnimationFrame(n),
                  (n = requestAnimationFrame(() => {
                    let n = (a.clientX / window.innerWidth - 0.5) * 2,
                      i = (a.clientY / window.innerHeight - 0.5) * 2;
                    e.style.transform = "translate("
                      .concat(n * t, "px, ")
                      .concat(i * t, "px)");
                  }));
              };
            return (
              window.addEventListener("mousemove", a),
              () => {
                window.removeEventListener("mousemove", a),
                  cancelAnimationFrame(n);
              }
            );
          }, [t]),
          (0, a.jsx)("div", { ref: s, children: n })
        );
      }
    },
    4814: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return s;
        },
      });
      var a = n(57437);
      let i = {
        base: "bg-denim text-milk",
        wcoin: "bg-butter text-ink",
        b20: "bg-meadow text-ink",
        seat: "bg-milk text-ink border-2 border-ink",
        soon: "bg-ink/10 text-ink/70",
        ink: "bg-ink text-milk",
        minted: "bg-butter text-ink",
        open: "bg-milk/10 text-milk/70",
        solo: "bg-gradient-to-r from-butter to-peach text-ink",
      };
      function s(e) {
        let { variant: t = "seat", children: n, className: s = "" } = e;
        return (0, a.jsx)("span", {
          className:
            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 font-body text-sm font-bold "
              .concat(i[t], " ")
              .concat(s),
          children: n,
        });
      }
    },
    60024: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Reveal: function () {
            return s;
          },
        });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { children: t, className: n = "", delay: s = 0 } = e,
          r = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e;
            let t = r.current;
            if (!t) return;
            let n = 0,
              a = () => {
                t.classList.add("is-visible"),
                  null == e || e.disconnect(),
                  window.clearInterval(n);
              },
              i = () => {
                let e = t.getBoundingClientRect();
                return e.top < 0.9 * window.innerHeight && e.bottom > 0;
              };
            return (
              "undefined" != typeof IntersectionObserver &&
                (e = new IntersectionObserver(
                  (e) => e.some((e) => e.isIntersecting) && a(),
                  { threshold: 0.15 }
                )).observe(t),
              (n = window.setInterval(() => i() && a(), 800)),
              () => {
                null == e || e.disconnect(), window.clearInterval(n);
              }
            );
          }, []),
          (0, a.jsx)("div", {
            ref: r,
            className: "reveal ".concat(n),
            style: s ? { transitionDelay: "".concat(s, "ms") } : void 0,
            children: t,
          })
        );
      }
    },
    58092: function (e, t, n) {
      "use strict";
      n.d(t, {
        ScrollDrift: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { factor: t = 0.25, fade: n = !1, children: s } = e,
          r = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = r.current;
            if (
              !e ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return;
            let a = 0,
              i = () => {
                cancelAnimationFrame(a),
                  (a = requestAnimationFrame(() => {
                    let a = Math.min(window.scrollY, window.innerHeight);
                    (e.style.transform = "translateY(".concat(
                      (a * t).toFixed(1),
                      "px)"
                    )),
                      n &&
                        (e.style.opacity = String(
                          Math.max(0, 1 - a / (0.7 * window.innerHeight))
                        ));
                  }));
              };
            return (
              i(),
              window.addEventListener("scroll", i, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", i),
                  cancelAnimationFrame(a);
              }
            );
          }, [t, n]),
          (0, a.jsx)("div", { ref: r, children: s })
        );
      }
    },
    51662: function (e, t, n) {
      "use strict";
      n.d(t, {
        ScrollWords: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { tokens: t, className: n = "" } = e,
          s = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = s.current;
            if (!e) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              e.querySelectorAll(".scroll-word").forEach((e) =>
                e.classList.add("on")
              );
              return;
            }
            let t = Array.from(e.querySelectorAll(".scroll-word")),
              n = 0,
              a = () => {
                cancelAnimationFrame(n),
                  (n = requestAnimationFrame(() => {
                    let n = e.getBoundingClientRect(),
                      a = window.innerHeight,
                      i = Math.floor(
                        Math.max(
                          0,
                          Math.min(1, (0.85 * a - n.top) / (0.55 * a))
                        ) * t.length
                      );
                    t.forEach((e, t) => e.classList.toggle("on", t < i));
                  }));
              };
            return (
              a(),
              window.addEventListener("scroll", a, { passive: !0 }),
              window.addEventListener("resize", a, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", a),
                  window.removeEventListener("resize", a),
                  cancelAnimationFrame(n);
              }
            );
          }, []),
          (0, a.jsx)("p", {
            ref: s,
            className: n,
            children: t.map((e, t) =>
              (0, a.jsxs)(
                "span",
                {
                  children: [
                    (0, a.jsx)("span", {
                      className: "scroll-word ".concat(
                        "peach" === e.accent
                          ? "text-peach"
                          : "butter" === e.accent
                          ? "text-butter"
                          : ""
                      ),
                      children: e.text,
                    }),
                    " ",
                  ],
                },
                t
              )
            ),
          })
        );
      }
    },
    53174: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var a = n(57437),
        i = n(46039),
        s = n(82592),
        r = n(35179);
      function l(e) {
        let { seatId: t, dark: n = !1 } = e,
          l = (0, s.s)(t),
          o = n ? "text-milk/60" : "text-ink/60",
          d = n ? "text-milk" : "text-ink";
        if (!l.vault && !l.loading)
          return (0, a.jsx)("p", {
            className: "text-sm font-bold ".concat(o),
            children:
              "this seat has no bag yet. seats minted after the vaults ship carry one.",
          });
        let u = [
          {
            k: "seed",
            v: l.seed,
            note: "planted at mint, never leaves the seat",
          },
          ...(l.activation > 0n
            ? [
                {
                  k: "activation lock",
                  v: l.activation,
                  note: "on loan to the pot this epoch",
                },
              ]
            : []),
          { k: "free milk", v: l.free, note: "yours to withdraw" },
        ];
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-baseline justify-between gap-3",
              children: [
                (0, a.jsx)("span", {
                  className:
                    "font-body text-xs font-bold tracking-[0.18em] ".concat(o),
                  children: "the bag",
                }),
                (0, a.jsx)("span", {
                  className: "font-display text-xl font-semibold ".concat(d),
                  children: l.loading
                    ? (0, a.jsx)(r.b, { className: "h-5 w-20" })
                    : "".concat((0, i.oe)(l.total), " wCOIN"),
                }),
              ],
            }),
            (0, a.jsx)("dl", {
              className: "flex flex-col divide-y border-y ".concat(
                n
                  ? "divide-milk/15 border-milk/15"
                  : "divide-ink/10 border-ink/10"
              ),
              children: u.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "flex items-center justify-between gap-3 py-2.5",
                    children: [
                      (0, a.jsxs)("dt", {
                        className: "min-w-0",
                        children: [
                          (0, a.jsx)("span", {
                            className: "block text-sm font-bold ".concat(d),
                            children: e.k,
                          }),
                          e.note &&
                            (0, a.jsx)("span", {
                              className: "block text-xs font-semibold ".concat(
                                o
                              ),
                              children: e.note,
                            }),
                        ],
                      }),
                      (0, a.jsx)("dd", {
                        className:
                          "shrink-0 font-display text-base font-semibold ".concat(
                            d
                          ),
                        children: l.loading
                          ? (0, a.jsx)(r.b, { className: "h-4 w-16" })
                          : (0, i.oe)(e.v),
                      }),
                    ],
                  },
                  e.k
                )
              ),
            }),
            l.frozen &&
              (0, a.jsx)("p", {
                className: "text-xs font-bold ".concat(o),
                children:
                  "listed in the barn, so the bag is frozen. what a buyer sees is what they get.",
              }),
          ],
        });
      }
    },
    35179: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var a = n(57437);
      function i(e) {
        let { className: t = "" } = e;
        return (0, a.jsx)("span", {
          "aria-hidden": !0,
          className:
            "inline-block animate-pulse rounded-md bg-current opacity-20 align-middle ".concat(
              t
            ),
        });
      }
    },
    66476: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SplitHeading: function () {
            return s;
          },
        });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { text: t, className: n = "" } = e,
          s = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = s.current;
            if (!e) return;
            if ("undefined" == typeof IntersectionObserver) {
              e.classList.add("sh-visible");
              return;
            }
            let t = new IntersectionObserver(
              (n) => {
                n.some((e) => e.isIntersecting) &&
                  (e.classList.add("sh-visible"), t.disconnect());
              },
              { threshold: 0.5 }
            );
            t.observe(e);
            let n = window.setInterval(() => {
              let t = e.getBoundingClientRect();
              t.top < 0.9 * window.innerHeight &&
                t.bottom > 0 &&
                (e.classList.add("sh-visible"), window.clearInterval(n));
            }, 800);
            return () => {
              t.disconnect(), window.clearInterval(n);
            };
          }, []),
          (0, a.jsx)("h2", {
            ref: s,
            "aria-label": t,
            className: n,
            children: t
              .split("")
              .map((e, t) =>
                " " === e
                  ? (0, a.jsx)("span", { children: " " }, t)
                  : (0, a.jsx)(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "split-char",
                        style: { transitionDelay: "".concat(28 * t, "ms") },
                        children: e,
                      },
                      t
                    )
              ),
          })
        );
      }
    },
    82338: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var a = n(57437);
      function i(e) {
        let { dark: t = !1 } = e,
          n = t ? "#3A3348" : "#F3E3C3";
        return (0, a.jsxs)("svg", {
          "aria-hidden": !0,
          className: "pointer-events-none absolute inset-0 h-full w-full",
          preserveAspectRatio: "xMidYMid slice",
          viewBox: "0 0 1200 800",
          children: [
            (0, a.jsx)("path", {
              d: "M105 132c-38 12-52 58-28 88 22 28 68 26 88-4 22-33-14-96-60-84z",
              fill: n,
              opacity: "0.7",
            }),
            (0, a.jsx)("path", {
              d: "M1058 96c-30-22-76-8-84 30-7 34 24 64 58 58 38-7 56-64 26-88z",
              fill: n,
              opacity: "0.55",
            }),
            (0, a.jsx)("path", {
              d: "M918 622c-44 4-64 56-36 88 26 30 76 20 88-16 12-34-14-76-52-72z",
              fill: n,
              opacity: "0.6",
            }),
            (0, a.jsx)("path", {
              d: "M188 604c-26 16-28 54-4 72 26 20 64 6 68-26 4-34-34-64-64-46z",
              fill: n,
              opacity: "0.5",
            }),
            (0, a.jsx)("path", {
              d: "M622 726c-20 10-24 38-8 52 18 16 48 6 52-18 4-26-22-46-44-34z",
              fill: n,
              opacity: "0.45",
            }),
          ],
        });
      }
    },
    61089: function (e, t, n) {
      "use strict";
      n.d(t, {
        TapeTilt: function () {
          return s;
        },
      });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { children: t } = e,
          n = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = n.current;
            if (
              !e ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return;
            let t = window.scrollY,
              a = performance.now(),
              i = 0,
              s = 0,
              r = 0,
              l = () => {
                let e = performance.now(),
                  n = e - a;
                n > 0 &&
                  (s = Math.max(
                    -7,
                    Math.min(7, ((window.scrollY - t) / n) * 9)
                  )),
                  (t = window.scrollY),
                  (a = e);
              },
              o = () => {
                (s *= 0.92),
                  (i += (s - i) * 0.12),
                  (e.style.transform =
                    Math.abs(i) > 0.05
                      ? "skewX(".concat(i.toFixed(2), "deg)")
                      : ""),
                  (r = requestAnimationFrame(o));
              };
            return (
              (r = requestAnimationFrame(o)),
              window.addEventListener("scroll", l, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", l),
                  cancelAnimationFrame(r);
              }
            );
          }, []),
          (0, a.jsx)("div", { ref: n, className: "bg-ink", children: t })
        );
      }
    },
    75136: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Tilt: function () {
            return s;
          },
        });
      var a = n(57437),
        i = n(2265);
      function s(e) {
        let { children: t, max: n = 8, glare: s = !0, className: r = "" } = e,
          l = (0, i.useRef)(null),
          o = (0, i.useRef)(null),
          [d, u] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            u(
              window.matchMedia("(pointer: fine)").matches &&
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
          }, []),
          (0, a.jsxs)("div", {
            ref: l,
            onPointerMove: (e) => {
              let t = l.current;
              if (!t || !d) return;
              let a = t.getBoundingClientRect(),
                i = (e.clientX - a.left) / a.width - 0.5,
                s = (e.clientY - a.top) / a.height - 0.5;
              (t.style.transform = "perspective(900px) rotateX("
                .concat((-s * n).toFixed(2), "deg) rotateY(")
                .concat((i * n).toFixed(2), "deg) translateZ(0)")),
                (t.style.transition = "transform 0.06s linear"),
                o.current &&
                  ((o.current.style.opacity = "1"),
                  (o.current.style.background = "radial-gradient(circle at "
                    .concat(((i + 0.5) * 100).toFixed(1), "% ")
                    .concat(
                      ((s + 0.5) * 100).toFixed(1),
                      "%, rgba(255,247,232,0.28), transparent 55%)"
                    )));
            },
            onPointerLeave: () => {
              let e = l.current;
              e &&
                ((e.style.transition =
                  "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"),
                (e.style.transform =
                  "perspective(900px) rotateX(0deg) rotateY(0deg)"),
                o.current && (o.current.style.opacity = "0"));
            },
            className: "relative ".concat(r),
            style: { transformStyle: "preserve-3d" },
            children: [
              t,
              s &&
                d &&
                (0, a.jsx)("div", {
                  ref: o,
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300",
                }),
            ],
          })
        );
      }
    },
    50433: function (e, t, n) {
      "use strict";
      n.d(t, {
        vn: function () {
          return f;
        },
        r_: function () {
          return p;
        },
        UB: function () {
          return m;
        },
        _A: function () {
          return d;
        },
        Wo: function () {
          return u;
        },
        hr: function () {
          return y;
        },
        y_: function () {
          return l;
        },
        qz: function () {
          return r;
        },
        FE: function () {
          return o;
        },
      });
      let a = {
        8453: {
          MooSeats: "0x0000000000000000000000000000000000000000",
          Milkhouse: "0x0000000000000000000000000000000000000000",
          SeatLease: "0x0000000000000000000000000000000000000000",
          SeatVault: "0x0000000000000000000000000000000000000000",
          AuctionBarn: "0x0000000000000000000000000000000000000000",
          wCOIN: "0x0000000000000000000000000000000000000000",
          mooToken: "0x0000000000000000000000000000000000000000",
        },
        31337: {
          MooSeats: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
          Milkhouse: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
          SeatLease: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
          SeatVault: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
          AuctionBarn: "0x59b670e9fA9D0A427751Af201D676719a970857b",
          wCOIN: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
          mooToken: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
        },
        84532: {
          MooSeats: "0x0000000000000000000000000000000000000000",
          Milkhouse: "0x0000000000000000000000000000000000000000",
          SeatLease: "0x0000000000000000000000000000000000000000",
          SeatVault: "0x0000000000000000000000000000000000000000",
          AuctionBarn: "0x0000000000000000000000000000000000000000",
          wCOIN: "0x0000000000000000000000000000000000000000",
          mooToken: "0x0000000000000000000000000000000000000000",
        },
      };
      var i,
        s = n(39759);
      let r = [
          {
            type: "constructor",
            inputs: [
              {
                name: "initialOwner",
                type: "address",
                internalType: "address",
              },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "MAX_SUPPLY",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "approve",
            inputs: [
              { name: "to", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "balanceOf",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "barn",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "checkEligibility",
            inputs: [
              { name: "wallet", type: "address", internalType: "address" },
              { name: "quantity", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
              { name: "eligible", type: "bool", internalType: "bool" },
              { name: "reason", type: "string", internalType: "string" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "getApproved",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "isApprovedForAll",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
              { name: "operator", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "isLive",
            inputs: [],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "maxPerWallet",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "milkhouse",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "minMooBalance",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "mint",
            inputs: [
              { name: "quantity", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "mintOpen",
            inputs: [],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "mintedBy",
            inputs: [{ name: "", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "mooToken",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [{ name: "", type: "string", internalType: "string" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "nextTokenId",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "ownerOf",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
              { name: "from", type: "address", internalType: "address" },
              { name: "to", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
              { name: "from", type: "address", internalType: "address" },
              { name: "to", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "data", type: "bytes", internalType: "bytes" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "seatsOf",
            inputs: [
              { name: "wallet", type: "address", internalType: "address" },
            ],
            outputs: [
              { name: "", type: "uint256[]", internalType: "uint256[]" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "seedAmount",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "selfPrice",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "setApprovalForAll",
            inputs: [
              { name: "operator", type: "address", internalType: "address" },
              { name: "approved", type: "bool", internalType: "bool" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setBarn",
            inputs: [
              { name: "barn_", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setBaseURI",
            inputs: [
              { name: "baseURI_", type: "string", internalType: "string" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMaxPerWallet",
            inputs: [
              {
                name: "maxPerWallet_",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMinMooBalance",
            inputs: [
              {
                name: "minMooBalance_",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMintOpen",
            inputs: [{ name: "open", type: "bool", internalType: "bool" }],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMooToken",
            inputs: [
              { name: "mooToken_", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setSeedAmount",
            inputs: [
              { name: "seedAmount_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setSelfPrice",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              {
                name: "priceInWCOIN",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setVaultWiring",
            inputs: [
              { name: "wcoin_", type: "address", internalType: "address" },
              {
                name: "vaultImplementation_",
                type: "address",
                internalType: "address",
              },
              { name: "milkhouse_", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "supportsInterface",
            inputs: [
              { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [{ name: "", type: "string", internalType: "string" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "syncSelfPrice",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "price", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "tokenURI",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "string", internalType: "string" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "totalSupply",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "transferFrom",
            inputs: [
              { name: "from", type: "address", internalType: "address" },
              { name: "to", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "transferOwnership",
            inputs: [
              { name: "newOwner", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "vaultImplementation",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "vaultOf",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "wcoin",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "withdrawDelay",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "Approval",
            inputs: [
              {
                name: "owner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "approved",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "ApprovalForAll",
            inputs: [
              {
                name: "owner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "operator",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "approved",
                type: "bool",
                indexed: !1,
                internalType: "bool",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "BarnSet",
            inputs: [
              {
                name: "barn",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "BaseURISet",
            inputs: [
              {
                name: "baseURI",
                type: "string",
                indexed: !1,
                internalType: "string",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MaxPerWalletSet",
            inputs: [
              {
                name: "maxPerWallet",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MinMooBalanceSet",
            inputs: [
              {
                name: "minMooBalance",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MintOpenSet",
            inputs: [
              { name: "open", type: "bool", indexed: !1, internalType: "bool" },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MooTokenSet",
            inputs: [
              {
                name: "mooToken",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
              {
                name: "previousOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "newOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SeatMinted",
            inputs: [
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SeatVaultCreated",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "vault",
                type: "address",
                indexed: !1,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SeedAmountSet",
            inputs: [
              {
                name: "seedAmount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SelfPriceSet",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "priceInWCOIN",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "setter",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              {
                name: "from",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "error",
            name: "ERC721IncorrectOwner",
            inputs: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "owner", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721InsufficientApproval",
            inputs: [
              { name: "operator", type: "address", internalType: "address" },
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "ERC721InvalidApprover",
            inputs: [
              { name: "approver", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721InvalidOperator",
            inputs: [
              { name: "operator", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721InvalidOwner",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721InvalidReceiver",
            inputs: [
              { name: "receiver", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721InvalidSender",
            inputs: [
              { name: "sender", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC721NonexistentToken",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "FailedDeployment", inputs: [] },
          {
            type: "error",
            name: "InsufficientBalance",
            inputs: [
              { name: "balance", type: "uint256", internalType: "uint256" },
              { name: "needed", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "InsufficientMoo",
            inputs: [
              { name: "balance", type: "uint256", internalType: "uint256" },
              { name: "required", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "InvalidQuantity", inputs: [] },
          { type: "error", name: "MintAlreadyOpen", inputs: [] },
          { type: "error", name: "MintNotOpen", inputs: [] },
          { type: "error", name: "MooTokenNotSet", inputs: [] },
          { type: "error", name: "NotBarn", inputs: [] },
          {
            type: "error",
            name: "NotSeatOwner",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "OwnableInvalidOwner",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
              { name: "account", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
              { name: "token", type: "address", internalType: "address" },
            ],
          },
          { type: "error", name: "SeedFrozen", inputs: [] },
          { type: "error", name: "SoldOut", inputs: [] },
          { type: "error", name: "WCoinNotSet", inputs: [] },
          {
            type: "error",
            name: "WalletCapExceeded",
            inputs: [{ name: "cap", type: "uint256", internalType: "uint256" }],
          },
        ],
        l = [
          {
            type: "constructor",
            inputs: [
              { name: "wcoin_", type: "address", internalType: "address" },
              { name: "seats_", type: "address", internalType: "address" },
              {
                name: "initialOwner",
                type: "address",
                internalType: "address",
              },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "SEAT_COUNT",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "TIP_CAP_MAX",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "TIP_MAX_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "claim",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "epoch", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "claimAll",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "claimable",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
              { name: "total", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "claimed",
            inputs: [
              { name: "", type: "uint256", internalType: "uint256" },
              { name: "", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "currentEpoch",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "epochAmount",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "epochLength",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "epochPerSeat",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "epochReadyAt",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "epochSeatCount",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "fund",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "milkingHour",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "minSettleAmount",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "potBalance",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "reserved",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "seats",
            inputs: [],
            outputs: [
              { name: "", type: "address", internalType: "contract IERC721" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "setEpochLength",
            inputs: [
              {
                name: "epochLength_",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMinSettleAmount",
            inputs: [
              {
                name: "minSettleAmount_",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setTip",
            inputs: [
              { name: "tipBps_", type: "uint256", internalType: "uint256" },
              { name: "tipCap_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "startEpoch",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "tipBps",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "tipCap",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "transferOwnership",
            inputs: [
              { name: "newOwner", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "unallocated",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "wcoin",
            inputs: [],
            outputs: [
              { name: "", type: "address", internalType: "contract IERC20" },
            ],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "EpochLengthSet",
            inputs: [
              {
                name: "epochLength",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "EpochStarted",
            inputs: [
              {
                name: "epoch",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "perSeat",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Funded",
            inputs: [
              {
                name: "from",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Milked",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "epoch",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MilkingTipPaid",
            inputs: [
              {
                name: "epoch",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "caller",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "tip",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
              {
                name: "previousOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "newOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "TipSet",
            inputs: [
              {
                name: "tipBps",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "tipCap",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "error",
            name: "AlreadyClaimed",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "epoch", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "BadEpoch",
            inputs: [
              { name: "epoch", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "BelowMinSettle",
            inputs: [
              { name: "available", type: "uint256", internalType: "uint256" },
              { name: "required", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "EpochNotMature",
            inputs: [
              { name: "readyAt", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "FirstEpochOnly", inputs: [] },
          { type: "error", name: "NoEpochYet", inputs: [] },
          { type: "error", name: "NoSeatsYet", inputs: [] },
          {
            type: "error",
            name: "NotSeatOwner",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "NothingToAllocate", inputs: [] },
          {
            type: "error",
            name: "OwnableInvalidOwner",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
              { name: "account", type: "address", internalType: "address" },
            ],
          },
          { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
          {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
              { name: "token", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "SeatNotInEpoch",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "epoch", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "TipOutOfBounds", inputs: [] },
          { type: "error", name: "ZeroAmount", inputs: [] },
        ],
        o = [
          {
            type: "function",
            name: "activationEarmark",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "barn",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "cancelWithdraw",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "chainId",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "executeWithdraw",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "freeBalance",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "frozen",
            inputs: [],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "initialise",
            inputs: [
              { name: "chainId_", type: "uint256", internalType: "uint256" },
              { name: "seats_", type: "address", internalType: "address" },
              { name: "tokenId_", type: "uint256", internalType: "uint256" },
              { name: "wcoin_", type: "address", internalType: "address" },
              {
                name: "withdrawDelay_",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "initiateWithdraw",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "lockActivation",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "milkhouse",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "pending",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
              { name: "readyAt", type: "uint256", internalType: "uint256" },
              { name: "owner", type: "address", internalType: "address" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "plantSeed",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "releaseActivation",
            inputs: [
              { name: "to", type: "address", internalType: "address" },
              { name: "payOut", type: "bool", internalType: "bool" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "seats",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "seatsAuthority",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "seedEarmark",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "setFrozen",
            inputs: [{ name: "frozen_", type: "bool", internalType: "bool" }],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "token",
            inputs: [],
            outputs: [
              { name: "", type: "uint256", internalType: "uint256" },
              { name: "", type: "address", internalType: "address" },
              { name: "", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "tokenId",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "totalBalance",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "wcoin",
            inputs: [],
            outputs: [
              { name: "", type: "address", internalType: "contract IERC20" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "withdrawDelay",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "ActivationLocked",
            inputs: [
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "ActivationReleased",
            inputs: [
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SeedPlanted",
            inputs: [
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "WithdrawCancelled",
            inputs: [
              {
                name: "reason",
                type: "string",
                indexed: !1,
                internalType: "string",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "WithdrawExecuted",
            inputs: [
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "WithdrawInitiated",
            inputs: [
              {
                name: "owner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "readyAt",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AlreadyInitialised", inputs: [] },
          {
            type: "error",
            name: "ExceedsFree",
            inputs: [
              { name: "requested", type: "uint256", internalType: "uint256" },
              { name: "free", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "ListedFrozen", inputs: [] },
          { type: "error", name: "NoPendingWithdraw", inputs: [] },
          { type: "error", name: "NotAuthorised", inputs: [] },
          { type: "error", name: "NotSeatOwner", inputs: [] },
          {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
              { name: "token", type: "address", internalType: "address" },
            ],
          },
          { type: "error", name: "SeedAlreadyPlanted", inputs: [] },
          {
            type: "error",
            name: "TimelockNotElapsed",
            inputs: [
              { name: "readyAt", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "ZeroAmount", inputs: [] },
        ],
        d = [
          {
            type: "constructor",
            inputs: [
              { name: "seats_", type: "address", internalType: "address" },
              { name: "wcoin_", type: "address", internalType: "address" },
              { name: "milkhouse_", type: "address", internalType: "address" },
              {
                name: "initialOwner",
                type: "address",
                internalType: "address",
              },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "FEE_MAX_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "FEE_MIN_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "acceptOffer",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "offerId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "barnFeeBps",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "buy",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "maxPrice", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "delist",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "effectiveMinPrice",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "list",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "price", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "listings",
            inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            outputs: [
              { name: "seller", type: "address", internalType: "address" },
              { name: "price", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "makeOffer",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "price", type: "uint256", internalType: "uint256" },
              { name: "minBag", type: "uint256", internalType: "uint256" },
              { name: "duration", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
              { name: "offerId", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "milkhouse",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "minSalePrice",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "offerCount",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "offers",
            inputs: [
              { name: "", type: "uint256", internalType: "uint256" },
              { name: "", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
              { name: "offerer", type: "address", internalType: "address" },
              { name: "price", type: "uint256", internalType: "uint256" },
              { name: "minBag", type: "uint256", internalType: "uint256" },
              { name: "expiry", type: "uint256", internalType: "uint256" },
              { name: "settled", type: "bool", internalType: "bool" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "onERC721Received",
            inputs: [
              { name: "", type: "address", internalType: "address" },
              { name: "", type: "address", internalType: "address" },
              { name: "", type: "uint256", internalType: "uint256" },
              { name: "", type: "bytes", internalType: "bytes" },
            ],
            outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
            stateMutability: "pure",
          },
          {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "reclaimOffer",
            inputs: [
              { name: "tokenId", type: "uint256", internalType: "uint256" },
              { name: "offerId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "seats",
            inputs: [],
            outputs: [
              { name: "", type: "address", internalType: "contract ISeats" },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "setBarnFeeBps",
            inputs: [{ name: "bps", type: "uint256", internalType: "uint256" }],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "setMinSalePrice",
            inputs: [
              { name: "price", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "transferOwnership",
            inputs: [
              { name: "newOwner", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "wcoin",
            inputs: [],
            outputs: [
              { name: "", type: "address", internalType: "contract IERC20" },
            ],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "BarnFeeSet",
            inputs: [
              {
                name: "bps",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Delisted",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "seller",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Listed",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "seller",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "MinSalePriceSet",
            inputs: [
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OfferAccepted",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerer",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "fee",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OfferMade",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerer",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "minBag",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "expiry",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OfferReclaimed",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "offerer",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
              {
                name: "previousOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "newOwner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Sold",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "seller",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "buyer",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "fee",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AlreadyListed", inputs: [] },
          { type: "error", name: "ApproveTheBarnFirst", inputs: [] },
          { type: "error", name: "BadExpiry", inputs: [] },
          {
            type: "error",
            name: "BagBelowFloor",
            inputs: [
              { name: "free", type: "uint256", internalType: "uint256" },
              { name: "floor", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "BelowMinSalePrice",
            inputs: [
              { name: "price", type: "uint256", internalType: "uint256" },
              { name: "min", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "FeeOutOfBounds", inputs: [] },
          { type: "error", name: "NoSuchOffer", inputs: [] },
          { type: "error", name: "NotListed", inputs: [] },
          { type: "error", name: "NotSeatOwner", inputs: [] },
          { type: "error", name: "OfferExpired", inputs: [] },
          { type: "error", name: "OfferLive", inputs: [] },
          {
            type: "error",
            name: "OwnableInvalidOwner",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
              { name: "account", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "PriceAboveMax",
            inputs: [
              { name: "price", type: "uint256", internalType: "uint256" },
              { name: "maxPrice", type: "uint256", internalType: "uint256" },
            ],
          },
          { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
          {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
              { name: "token", type: "address", internalType: "address" },
            ],
          },
          { type: "error", name: "SelfDeal", inputs: [] },
        ],
        u = [
          {
            type: "constructor",
            inputs: [
              { name: "name_", type: "string", internalType: "string" },
              { name: "symbol_", type: "string", internalType: "string" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "allowance",
            inputs: [
              { name: "owner", type: "address", internalType: "address" },
              { name: "spender", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "approve",
            inputs: [
              { name: "spender", type: "address", internalType: "address" },
              { name: "value", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "balanceOf",
            inputs: [
              { name: "account", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "decimals",
            inputs: [],
            outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "faucet",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "mint",
            inputs: [
              { name: "to", type: "address", internalType: "address" },
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [{ name: "", type: "string", internalType: "string" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [{ name: "", type: "string", internalType: "string" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "totalSupply",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "transfer",
            inputs: [
              { name: "to", type: "address", internalType: "address" },
              { name: "value", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "transferFrom",
            inputs: [
              { name: "from", type: "address", internalType: "address" },
              { name: "to", type: "address", internalType: "address" },
              { name: "value", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
          },
          {
            type: "event",
            name: "Approval",
            inputs: [
              {
                name: "owner",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "spender",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "value",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              {
                name: "from",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "to",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "value",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "error",
            name: "ERC20InsufficientAllowance",
            inputs: [
              { name: "spender", type: "address", internalType: "address" },
              { name: "allowance", type: "uint256", internalType: "uint256" },
              { name: "needed", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "ERC20InsufficientBalance",
            inputs: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "balance", type: "uint256", internalType: "uint256" },
              { name: "needed", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            type: "error",
            name: "ERC20InvalidApprover",
            inputs: [
              { name: "approver", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC20InvalidReceiver",
            inputs: [
              { name: "receiver", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC20InvalidSender",
            inputs: [
              { name: "sender", type: "address", internalType: "address" },
            ],
          },
          {
            type: "error",
            name: "ERC20InvalidSpender",
            inputs: [
              { name: "spender", type: "address", internalType: "address" },
            ],
          },
        ],
        p = "0x0000000000000000000000000000000000000000",
        c = null !== (i = a[String(s.bo.id)]) && void 0 !== i ? i : a["84532"],
        m = {
          mooSeats: c.MooSeats,
          milkhouse: c.Milkhouse,
          seatLease: c.SeatLease,
          seatVault: c.SeatVault,
          auctionBarn: c.AuctionBarn,
          wcoin: c.wCOIN,
          mooToken: c.mooToken,
        },
        y = m.mooSeats !== p,
        f = 1e3;
    },
    74019: function (e, t, n) {
      "use strict";
      n.d(t, {
        Il: function () {
          return r;
        },
        KK: function () {
          return i;
        },
        Ww: function () {
          return l;
        },
        zu: function () {
          return s;
        },
      });
      let a = {
          250: { name: "the deep", element: "water", file: "one-of-one-01" },
          500: { name: "the champion", element: "sky", file: "one-of-one-02" },
          750: { name: "the blaze", element: "fire", file: "one-of-one-03" },
          1e3: { name: "the bedrock", element: "stone", file: "one-of-one-04" },
        },
        i = Object.keys(a)
          .map(Number)
          .sort((e, t) => e - t);
      function s(e) {
        return e in a;
      }
      function r(e) {
        return a[e];
      }
      function l(e) {
        let t;
        let n = a[e];
        if (n) return "/herd/".concat(n.file, ".webp");
        let i = ((t = ((t = 2654435761 * e) ^ (t >>> 16)) >>> 0) % 18) + 1;
        return "/herd/cow-".concat(String(i).padStart(2, "0"), ".webp");
      }
    },
    97770: function (e, t, n) {
      "use strict";
      n.d(t, {
        Yg: function () {
          return a;
        },
        fM: function () {
          return i;
        },
      });
      let a = { getRep: async () => null, isVerified: async () => !1 },
        i = "phase 2";
    },
    82592: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return r;
        },
      });
      var a = n(27323),
        i = n(46269),
        s = n(50433);
      function r(e) {
        var t, n, r;
        let l = (0, a.u)({
            address: s.UB.mooSeats,
            abi: s.qz,
            functionName: "vaultOf",
            args: [BigInt(null != e ? e : 0)],
            query: { enabled: s.hr && null !== e },
          }),
          o = l.data,
          d = !!o && o !== s.r_,
          u = (0, i.N)({
            contracts: [
              { address: o, abi: s.FE, functionName: "totalBalance" },
              { address: o, abi: s.FE, functionName: "freeBalance" },
              { address: o, abi: s.FE, functionName: "seedEarmark" },
              { address: o, abi: s.FE, functionName: "activationEarmark" },
              { address: o, abi: s.FE, functionName: "frozen" },
              { address: o, abi: s.FE, functionName: "pending" },
            ],
            query: { enabled: d, refetchInterval: 15e3 },
          }),
          [p, c, m, y, f, h] =
            null !==
              (n =
                null === (t = u.data) || void 0 === t
                  ? void 0
                  : t.map((e) => e.result)) && void 0 !== n
              ? n
              : [],
          x = null !== (r = null == h ? void 0 : h[0]) && void 0 !== r ? r : 0n;
        return {
          vault: d ? o : void 0,
          total: null != p ? p : 0n,
          free: null != c ? c : 0n,
          seed: null != m ? m : 0n,
          activation: null != y ? y : 0n,
          frozen: null != f && f,
          pending: x > 0n ? { amount: x, readyAt: h[1], owner: h[2] } : null,
          ready: x > 0n && 1e3 * Number(h[1]) <= Date.now(),
          loading: l.isLoading || u.isLoading,
          refetch: () => {
            l.refetch(), u.refetch();
          },
        };
      }
    },
  },
  function (e) {
    e.O(
      0,
      [7283, 6558, 4406, 4343, 4615, 4250, 7676, 4291, 2971, 2117, 1744],
      function () {
        return e((e.s = 23740));
      }
    ),
      (_N_E = e.O());
  },
]);
