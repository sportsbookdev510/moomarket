"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4291],
  {
    15615: function (e, t, n) {
      n.d(t, {
        ConnectButtonBrand: function () {
          return f;
        },
      });
      var l = n(57437),
        s = n(2265),
        i = n(93662),
        r = n(99778),
        o = n(59233),
        a = n(39759),
        c = n(46039),
        d = n(60542);
      let u = n(40257).env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";
      function x(e) {
        let { id: t } = e;
        return "coinbase" === t
          ? (0, l.jsxs)("svg", {
              viewBox: "0 0 24 24",
              className: "h-6 w-6",
              "aria-hidden": !0,
              children: [
                (0, l.jsx)("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  fill: "#3B5A8C",
                }),
                (0, l.jsx)("rect", {
                  x: "8.5",
                  y: "8.5",
                  width: "7",
                  height: "7",
                  rx: "1.5",
                  fill: "#FFF7E8",
                }),
              ],
            })
          : "walletconnect" === t
          ? (0, l.jsx)("svg", {
              viewBox: "0 0 24 24",
              className: "h-6 w-6 fill-none stroke-denim",
              strokeWidth: "2.2",
              strokeLinecap: "round",
              "aria-hidden": !0,
              children: (0, l.jsx)("path", {
                d: "M5 10.5c4-3.8 10-3.8 14 0M8 13.5c2.3-2.2 5.7-2.2 8 0",
              }),
            })
          : (0, l.jsxs)("svg", {
              viewBox: "0 0 24 24",
              className: "h-6 w-6 fill-none stroke-ink",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": !0,
              children: [
                (0, l.jsx)("path", {
                  d: "M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z",
                }),
                (0, l.jsx)("path", {
                  d: "M15 12.5h5v3h-5a1.5 1.5 0 0 1 0-3z",
                  fill: "#EEC25A",
                }),
              ],
            });
      }
      function h(e) {
        var t;
        let { onClose: i } = e,
          {
            connect: r,
            connectAsync: o,
            connectors: a,
            isPending: c,
            error: h,
          } = (0, d.$)(),
          f = (0, s.useRef)(null),
          [m, k] = (0, s.useState)(null),
          [p, b] = (0, s.useState)("");
        (0, s.useEffect)(() => {
          var e;
          let t = document.activeElement;
          null === (e = f.current) || void 0 === e || e.focus(),
            (document.body.style.overflow = "hidden");
          let n = (e) => {
            "Escape" === e.key && i();
          };
          return (
            window.addEventListener("keydown", n),
            () => {
              var e;
              window.removeEventListener("keydown", n),
                (document.body.style.overflow = ""),
                null == t ||
                  null === (e = t.focus) ||
                  void 0 === e ||
                  e.call(t);
            }
          );
        }, [i]);
        let j = a[0],
          y = async (e) => {
            k(e), b("");
            try {
              let t = await Promise.all([n.e(4250), n.e(1865), n.e(7963)]).then(
                  n.bind(n, 87963)
                ),
                l =
                  "coinbase" === e
                    ? t.coinbaseWallet({ appName: "moo market" })
                    : t.walletConnect({ projectId: u, showQrModal: !0 });
              await o({ connector: l }), i();
            } catch (e) {
              var t;
              b(
                (null !== (t = e.shortMessage) && void 0 !== t
                  ? t
                  : "the connection did not go through. try again."
                ).toLowerCase()
              );
            } finally {
              k(null);
            }
          },
          w =
            "flex items-center gap-3.5 rounded-2xl border-2 border-ink/15 bg-oat/40 px-4 py-3.5 text-left transition hover:border-ink disabled:opacity-50";
        return (0, l.jsxs)("div", {
          ref: f,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "connect a wallet",
          tabIndex: -1,
          className: "fixed inset-0 z-[80] outline-none",
          children: [
            (0, l.jsx)("div", {
              "aria-hidden": !0,
              onClick: i,
              className:
                "dialog-backdrop-in absolute inset-0 bg-ink/80 backdrop-blur-sm",
            }),
            (0, l.jsxs)("div", {
              className:
                "dialog-panel-in absolute left-1/2 top-1/2 w-[min(92vw,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-ink bg-milk p-6",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    (0, l.jsx)("h2", {
                      className: "font-display text-2xl font-bold text-ink",
                      children: "connect a wallet",
                    }),
                    (0, l.jsx)("button", {
                      onClick: i,
                      "aria-label": "close",
                      className:
                        "flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 text-ink transition hover:border-ink",
                      children: (0, l.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-4 w-4 fill-none stroke-current",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        "aria-hidden": !0,
                        children: (0, l.jsx)("path", {
                          d: "M6 6l12 12M18 6 6 18",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "mt-5 flex flex-col gap-2.5",
                  children: [
                    j &&
                      (0, l.jsxs)("button", {
                        onClick: () => r({ connector: j }, { onSuccess: i }),
                        disabled: c || null !== m,
                        className: w,
                        children: [
                          (0, l.jsx)(x, { id: "injected" }),
                          (0, l.jsxs)("span", {
                            className: "min-w-0 flex-1",
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "block font-display text-base font-semibold text-ink",
                                children: c
                                  ? "check your wallet"
                                  : "browser wallet",
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "block truncate text-xs font-bold text-ink/50",
                                children:
                                  "metamask, rabby, or any injected wallet",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, l.jsxs)("button", {
                      onClick: () => y("coinbase"),
                      disabled: c || null !== m,
                      className: w,
                      children: [
                        (0, l.jsx)(x, { id: "coinbase" }),
                        (0, l.jsxs)("span", {
                          className: "min-w-0 flex-1",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "block font-display text-base font-semibold text-ink",
                              children:
                                "coinbase" === m
                                  ? "check your wallet"
                                  : "coinbase wallet",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "block truncate text-xs font-bold text-ink/50",
                              children: "app or extension",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("button", {
                      onClick: () => y("walletconnect"),
                      disabled: c || null !== m || !u,
                      className: w,
                      children: [
                        (0, l.jsx)(x, { id: "walletconnect" }),
                        (0, l.jsxs)("span", {
                          className: "min-w-0 flex-1",
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "block font-display text-base font-semibold text-ink",
                              children:
                                "walletconnect" === m
                                  ? "scan the code"
                                  : "walletconnect",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "block truncate text-xs font-bold text-ink/50",
                              children: u
                                ? "scan with any mobile wallet"
                                : "comes online at launch",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (h || p) &&
                  (0, l.jsx)("p", {
                    className: "mt-4 text-sm font-bold text-berry",
                    children:
                      p ||
                      (null == h
                        ? void 0
                        : null === (t = h.shortMessage) || void 0 === t
                        ? void 0
                        : t.toLowerCase()) ||
                      "the connection did not go through. try again.",
                  }),
                (0, l.jsx)("p", {
                  className: "mt-4 text-xs font-bold text-ink/40",
                  children:
                    "by connecting you agree this is experimental software. no wallet? seats can wait.",
                }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { size: t = "sm", glass: n = !1 } = e,
          w = n
            ? "pill-glass !gap-2 font-display text-base font-semibold transition hover:bg-ink/80"
            : "lg" === t
            ? "btn-chunky"
            : "btn-chunky-sm";
        return (0, l.jsx)("a", {
          href: "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
          target: "_blank",
          rel: "noopener noreferrer",
          className: w,
          children: "buy $MOO",
        });
      }
    },
    43741: function (e, t, n) {
      n.d(t, {
        MobileMenu: function () {
          return o;
        },
      });
      var l = n(57437),
        s = n(2265),
        i = n(54887);
      let r = [
        { href: "/#token", label: "$MOO" },
        { href: "/#milkhouse", label: "milkhouse" },
        { href: "/#herd", label: "the herd" },
        { href: "/#barn", label: "the barn" },
        { href: "/#faq", label: "faq" },
        { href: "/docs", label: "docs" },
        { href: "/whitepaper", label: "whitepaper" },
      ];
      function o() {
        let [e, t] = (0, s.useState)(!1),
          [n, o] = (0, s.useState)(!1),
          a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => o(!0), []),
          (0, s.useEffect)(() => {
            var n;
            if (!e) return;
            let l = document.activeElement;
            null === (n = a.current) || void 0 === n || n.focus(),
              (document.body.style.overflow = "hidden");
            let s = (e) => {
              "Escape" === e.key && t(!1);
            };
            return (
              window.addEventListener("keydown", s),
              () => {
                var e;
                window.removeEventListener("keydown", s),
                  (document.body.style.overflow = ""),
                  null == l ||
                    null === (e = l.focus) ||
                    void 0 === e ||
                    e.call(l);
              }
            );
          }, [e]),
          (0, l.jsxs)("div", {
            className: "md:hidden",
            children: [
              (0, l.jsx)("button", {
                onClick: () => t(!0),
                "aria-expanded": e,
                "aria-label": "open the menu",
                className:
                  "flex h-8 w-8 items-center justify-center rounded-full text-milk/70 transition hover:text-milk",
                children: (0, l.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-5 w-5 fill-none stroke-current",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  "aria-hidden": !0,
                  children: (0, l.jsx)("path", {
                    d: "M4 7h16M4 12h16M4 17h16",
                  }),
                }),
              }),
              e &&
                n &&
                (0, i.createPortal)(
                  (0, l.jsxs)("div", {
                    ref: a,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "menu",
                    tabIndex: -1,
                    className: "fixed inset-0 z-[120] outline-none",
                    children: [
                      (0, l.jsx)("div", {
                        "aria-hidden": !0,
                        onClick: () => t(!1),
                        className:
                          "dialog-backdrop-in absolute inset-0 bg-ink/95 backdrop-blur-sm",
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "dialog-panel-in relative flex h-full flex-col p-6",
                        children: [
                          (0, l.jsx)("div", {
                            className: "flex justify-end",
                            children: (0, l.jsx)("button", {
                              onClick: () => t(!1),
                              "aria-label": "close the menu",
                              className:
                                "flex h-11 w-11 items-center justify-center rounded-full border-2 border-milk/25 text-milk transition hover:border-milk",
                              children: (0, l.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5 fill-none stroke-current",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                "aria-hidden": !0,
                                children: (0, l.jsx)("path", {
                                  d: "M6 6l12 12M18 6 6 18",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)("nav", {
                            className: "mt-6 flex flex-col gap-1",
                            children: r.map((e) =>
                              (0, l.jsx)(
                                "a",
                                {
                                  href: e.href,
                                  onClick: () => t(!1),
                                  className:
                                    "rounded-2xl px-4 py-3.5 font-display text-3xl font-semibold lowercase text-milk transition hover:bg-milk/10",
                                  children: e.label,
                                },
                                e.href
                              )
                            ),
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "mt-auto px-4 text-sm font-bold text-milk/50",
                            children:
                              "stocks are onchain. the market isn't. moo.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  document.body
                ),
            ],
          })
        );
      }
    },
    92416: function (e, t, n) {
      n.d(t, {
        MooCow: function () {
          return i;
        },
      });
      var l = n(57437),
        s = n(2265);
      function i(e) {
        let { className: t = "" } = e,
          n = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = n.current;
            if (!e || "undefined" == typeof IntersectionObserver) return;
            let t = new IntersectionObserver(
              (t) =>
                e.classList.toggle(
                  "anims-off",
                  !t.some((e) => e.isIntersecting)
                ),
              { rootMargin: "120px 0px" }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, l.jsxs)("svg", {
            ref: n,
            viewBox: "0 0 520 640",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            className: t,
            "aria-hidden": !0,
            children: [
              (0, l.jsx)("ellipse", {
                cx: "260",
                cy: "612",
                rx: "130",
                ry: "18",
                fill: "#2A2434",
                opacity: "0.10",
              }),
              (0, l.jsxs)("g", {
                className: "moo-tail",
                children: [
                  (0, l.jsx)("path", {
                    d: "M398 420 C 452 448, 468 496, 452 540",
                    stroke: "#2A2434",
                    strokeWidth: "11",
                    strokeLinecap: "round",
                  }),
                  (0, l.jsx)("ellipse", {
                    cx: "450",
                    cy: "548",
                    rx: "15",
                    ry: "22",
                    fill: "#2A2434",
                    transform: "rotate(18 450 548)",
                  }),
                ],
              }),
              (0, l.jsxs)("g", {
                children: [
                  (0, l.jsxs)("g", {
                    children: [
                      (0, l.jsx)("rect", {
                        x: "158",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, l.jsx)("path", {
                        d: "M158 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("g", {
                    children: [
                      (0, l.jsx)("rect", {
                        x: "222",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, l.jsx)("path", {
                        d: "M222 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("g", {
                    children: [
                      (0, l.jsx)("rect", {
                        x: "286",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, l.jsx)("path", {
                        d: "M286 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("g", {
                    children: [
                      (0, l.jsx)("rect", {
                        x: "350",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, l.jsx)("path", {
                        d: "M350 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("ellipse", {
                cx: "260",
                cy: "424",
                rx: "152",
                ry: "116",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, l.jsx)("path", {
                d: "M150 388 c -18 22 -10 52 14 60 c 26 9 50 -10 48 -36 c -2 -30 -42 -46 -62 -24 z",
                fill: "#2A2434",
              }),
              (0, l.jsx)("path", {
                d: "M320 470 c -14 16 -6 40 14 44 c 20 5 38 -10 34 -30 c -4 -24 -34 -32 -48 -14 z",
                fill: "#F3E3C3",
              }),
              (0, l.jsx)("path", {
                d: "M356 372 c -10 12 -4 30 10 33 c 15 4 28 -8 25 -22 c -3 -18 -25 -25 -35 -11 z",
                fill: "#2A2434",
                opacity: "0.9",
              }),
              (0, l.jsx)("path", {
                d: "M196 320 q 64 30 128 0 l 0 24 q -64 30 -128 0 z",
                fill: "#3B5A8C",
                stroke: "#2A2434",
                strokeWidth: "7",
              }),
              (0, l.jsxs)("g", {
                className: "moo-bell",
                children: [
                  (0, l.jsx)("circle", {
                    cx: "260",
                    cy: "368",
                    r: "17",
                    fill: "#EEC25A",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                  }),
                  (0, l.jsx)("line", {
                    x1: "245",
                    y1: "368",
                    x2: "275",
                    y2: "368",
                    stroke: "#2A2434",
                    strokeWidth: "5",
                  }),
                  (0, l.jsx)("circle", {
                    cx: "260",
                    cy: "379",
                    r: "4",
                    fill: "#2A2434",
                  }),
                ],
              }),
              (0, l.jsxs)("g", {
                className: "moo-ear",
                children: [
                  (0, l.jsx)("ellipse", {
                    cx: "112",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(-24 112 206)",
                  }),
                  (0, l.jsx)("ellipse", {
                    cx: "104",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(-24 104 208)",
                  }),
                ],
              }),
              (0, l.jsxs)("g", {
                children: [
                  (0, l.jsx)("ellipse", {
                    cx: "408",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(24 408 206)",
                  }),
                  (0, l.jsx)("ellipse", {
                    cx: "416",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(24 416 208)",
                  }),
                ],
              }),
              (0, l.jsx)("path", {
                d: "M206 124 c -34 0 -60 -20 -58 -48 26 -6 52 14 62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, l.jsx)("path", {
                d: "M314 124 c 34 0 60 -20 58 -48 -26 -6 -52 14 -62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, l.jsx)("rect", {
                x: "148",
                y: "104",
                width: "224",
                height: "212",
                rx: "94",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, l.jsx)("path", {
                d: "M196 112 c 20 -10 44 -14 66 -14 22 0 44 4 62 12 10 5 18 13 22 22 -22 -10 -44 -14 -64 -14 -26 0 -56 6 -96 20 2 -12 5 -20 10 -26 z",
                fill: "#2A2434",
              }),
              (0, l.jsx)("path", {
                d: "M290 176 c -18 8 -22 34 -8 46 16 14 44 8 50 -12 7 -22 -18 -44 -42 -34 z",
                fill: "#F3E3C3",
              }),
              (0, l.jsx)("g", {
                className: "moo-eye",
                children: (0, l.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, l.jsx)("circle", {
                      cx: "212",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, l.jsx)("circle", {
                      cx: "215",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("g", {
                className: "moo-eye",
                children: (0, l.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, l.jsx)("circle", {
                      cx: "308",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, l.jsx)("circle", {
                      cx: "311",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("ellipse", {
                cx: "180",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, l.jsx)("ellipse", {
                cx: "340",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, l.jsx)("rect", {
                x: "188",
                y: "240",
                width: "144",
                height: "76",
                rx: "38",
                fill: "#E9A97D",
                stroke: "#2A2434",
                strokeWidth: "9",
              }),
              (0, l.jsx)("ellipse", {
                cx: "232",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, l.jsx)("ellipse", {
                cx: "288",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, l.jsx)("path", {
                d: "M248 298 q 12 10 24 0",
                stroke: "#2A2434",
                strokeWidth: "6",
                strokeLinecap: "round",
              }),
              (0, l.jsxs)("g", {
                className: "moo-bubble",
                children: [
                  (0, l.jsx)("path", {
                    d: "M414 68 l -20 32 l 40 -8 z",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                    strokeLinejoin: "round",
                  }),
                  (0, l.jsx)("rect", {
                    x: "382",
                    y: "2",
                    width: "126",
                    height: "64",
                    rx: "30",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "8",
                  }),
                  (0, l.jsx)("text", {
                    x: "445",
                    y: "45",
                    textAnchor: "middle",
                    fontWeight: "700",
                    fontSize: "34",
                    style: { fontFamily: "var(--font-fredoka), sans-serif" },
                    fill: "#2A2434",
                    children: "moo.",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    72384: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Offscreen: function () {
            return i;
          },
        });
      var l = n(57437),
        s = n(2265);
      function i(e) {
        let { children: t, className: n = "" } = e,
          i = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = i.current;
            if (!e || "undefined" == typeof IntersectionObserver) return;
            let t = new IntersectionObserver(
              (t) => {
                e.classList.toggle(
                  "anims-off",
                  !t.some((e) => e.isIntersecting)
                );
              },
              { rootMargin: "100px 0px" }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, l.jsx)("div", { ref: i, className: n, children: t })
        );
      }
    },
    22311: function (e, t, n) {
      n.d(t, {
        SoundToggle: function () {
          return r;
        },
      });
      var l = n(57437),
        s = n(2265),
        i = n(63544);
      function r() {
        let [e, t] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => t((0, i._I)()), []),
          (0, l.jsx)("button", {
            onClick: () => {
              let n = !e;
              t(n), (0, i.KB)(n), n && (0, i.$Q)();
            },
            "aria-pressed": e,
            "aria-label": e ? "turn sound off" : "turn sound on",
            title: e ? "sound on" : "sound off",
            className:
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-milk/60 transition hover:text-milk",
            children: e
              ? (0, l.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-4.5 w-4.5 fill-none stroke-current",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": !0,
                  children: (0, l.jsx)("path", {
                    d: "M4 9.5v5h3.5L12 18V6L7.5 9.5zM15.5 9c1.4 1.7 1.4 4.3 0 6M18 6.8c2.6 3 2.6 7.4 0 10.4",
                  }),
                })
              : (0, l.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-4.5 w-4.5 fill-none stroke-current",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": !0,
                  children: (0, l.jsx)("path", {
                    d: "M4 9.5v5h3.5L12 18V6L7.5 9.5zM16 9.5l5 5M21 9.5l-5 5",
                  }),
                }),
          })
        );
      }
    },
    39759: function (e, t, n) {
      n.d(t, {
        bo: function () {
          return r;
        },
        oy: function () {
          return o;
        },
      });
      var l = n(90713),
        s = (n(81460), n(90328)),
        i = n(40257);
      (0, s.a)({
        id: 31337,
        name: "anvil",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
      });
      let r = l.u,
        o = i.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org";
    },
    46039: function (e, t, n) {
      n.d(t, {
        oe: function () {
          return i;
        },
        sC: function () {
          return r;
        },
        xG: function () {
          return s;
        },
      });
      var l = n(39502);
      function s(e) {
        return "#".concat(e.toString().padStart(4, "0"));
      }
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          s = (0, l.b)(e, t),
          i = Number(s);
        return Number.isNaN(i)
          ? s
          : 0 !== i && Math.abs(i) < 1 / 10 ** n
          ? "<".concat((1 / 10 ** n).toFixed(n))
          : i.toLocaleString("en-US", { maximumFractionDigits: n });
      }
      function r(e) {
        return "".concat(e.slice(0, 6), "...").concat(e.slice(-4));
      }
    },
    63544: function (e, t, n) {
      n.d(t, {
        $Q: function () {
          return o;
        },
        KB: function () {
          return i;
        },
        _I: function () {
          return s;
        },
        uD: function () {
          return a;
        },
      });
      let l = null;
      function s() {
        try {
          return "1" === localStorage.getItem("moo-sound");
        } catch (e) {
          return !1;
        }
      }
      function i(e) {
        try {
          localStorage.setItem("moo-sound", e ? "1" : "0");
        } catch (e) {}
      }
      function r() {
        if (!l) {
          var e;
          let t =
            null !== (e = window.AudioContext) && void 0 !== e
              ? e
              : window.webkitAudioContext;
          if (!t) return null;
          l = new t();
        }
        return "suspended" === l.state && l.resume(), l;
      }
      function o() {
        if (!s()) return;
        let e = r();
        if (!e) return;
        let t = e.createOscillator(),
          n = e.createGain();
        (t.type = "sine"),
          t.frequency.setValueAtTime(430, e.currentTime),
          t.frequency.exponentialRampToValueAtTime(240, e.currentTime + 0.07),
          n.gain.setValueAtTime(0.09, e.currentTime),
          n.gain.exponentialRampToValueAtTime(0.001, e.currentTime + 0.09),
          t.connect(n).connect(e.destination),
          t.start(),
          t.stop(e.currentTime + 0.1);
      }
      function a() {
        if (!s()) return;
        let e = r();
        if (!e) return;
        let t = e.createGain(),
          n = e.createBiquadFilter();
        (n.type = "lowpass"),
          (n.frequency.value = 420),
          t.gain.setValueAtTime(1e-4, e.currentTime),
          t.gain.exponentialRampToValueAtTime(0.12, e.currentTime + 0.06),
          t.gain.exponentialRampToValueAtTime(0.001, e.currentTime + 0.55);
        let l = e.createOscillator();
        (l.type = "sawtooth"),
          l.frequency.setValueAtTime(165, e.currentTime),
          l.frequency.exponentialRampToValueAtTime(112, e.currentTime + 0.5);
        let i = e.createOscillator();
        (i.type = "sine"),
          i.frequency.setValueAtTime(84, e.currentTime),
          i.frequency.exponentialRampToValueAtTime(58, e.currentTime + 0.5),
          l.connect(n),
          i.connect(n),
          n.connect(t).connect(e.destination),
          l.start(),
          i.start(),
          l.stop(e.currentTime + 0.58),
          i.stop(e.currentTime + 0.58);
      }
    },
  },
]);
