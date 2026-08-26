(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    64787: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 49294)),
        Promise.resolve().then(r.bind(r, 31859)),
        Promise.resolve().then(r.bind(r, 36410)),
        Promise.resolve().then(r.t.bind(r, 35294, 23)),
        Promise.resolve().then(r.t.bind(r, 61964, 23)),
        Promise.resolve().then(r.t.bind(r, 47960, 23));
    },
    49294: function (e, t, r) {
      "use strict";
      r.d(t, {
        Providers: function () {
          return f;
        },
      });
      var s = r(57437),
        i = r(54114),
        n = r(29827),
        l = r(2265),
        o = r(79308),
        c = r(1626),
        a = r(10231),
        d = r(81467),
        x = r(39759);
      let h = (0, o._)({
        chains: [x.bo],
        connectors: [(0, d.L)()],
        transports: {
          8453: (0, c.d)(x.oy),
          84532: (0, c.d)(x.oy),
          31337: (0, c.d)(x.oy),
        },
        ssr: !0,
      });
      function f(e) {
        let { children: t } = e,
          [r] = (0, l.useState)(() => new i.S());
        return (0, s.jsx)(a.F, {
          config: h,
          children: (0, s.jsx)(n.aH, { client: r, children: t }),
        });
      }
    },
    92416: function (e, t, r) {
      "use strict";
      r.d(t, {
        MooCow: function () {
          return n;
        },
      });
      var s = r(57437),
        i = r(2265);
      function n(e) {
        let { className: t = "" } = e,
          r = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = r.current;
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
          (0, s.jsxs)("svg", {
            ref: r,
            viewBox: "0 0 520 640",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            className: t,
            "aria-hidden": !0,
            children: [
              (0, s.jsx)("ellipse", {
                cx: "260",
                cy: "612",
                rx: "130",
                ry: "18",
                fill: "#2A2434",
                opacity: "0.10",
              }),
              (0, s.jsxs)("g", {
                className: "moo-tail",
                children: [
                  (0, s.jsx)("path", {
                    d: "M398 420 C 452 448, 468 496, 452 540",
                    stroke: "#2A2434",
                    strokeWidth: "11",
                    strokeLinecap: "round",
                  }),
                  (0, s.jsx)("ellipse", {
                    cx: "450",
                    cy: "548",
                    rx: "15",
                    ry: "22",
                    fill: "#2A2434",
                    transform: "rotate(18 450 548)",
                  }),
                ],
              }),
              (0, s.jsxs)("g", {
                children: [
                  (0, s.jsxs)("g", {
                    children: [
                      (0, s.jsx)("rect", {
                        x: "158",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, s.jsx)("path", {
                        d: "M158 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    children: [
                      (0, s.jsx)("rect", {
                        x: "222",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, s.jsx)("path", {
                        d: "M222 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    children: [
                      (0, s.jsx)("rect", {
                        x: "286",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, s.jsx)("path", {
                        d: "M286 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    children: [
                      (0, s.jsx)("rect", {
                        x: "350",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, s.jsx)("path", {
                        d: "M350 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("ellipse", {
                cx: "260",
                cy: "424",
                rx: "152",
                ry: "116",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, s.jsx)("path", {
                d: "M150 388 c -18 22 -10 52 14 60 c 26 9 50 -10 48 -36 c -2 -30 -42 -46 -62 -24 z",
                fill: "#2A2434",
              }),
              (0, s.jsx)("path", {
                d: "M320 470 c -14 16 -6 40 14 44 c 20 5 38 -10 34 -30 c -4 -24 -34 -32 -48 -14 z",
                fill: "#F3E3C3",
              }),
              (0, s.jsx)("path", {
                d: "M356 372 c -10 12 -4 30 10 33 c 15 4 28 -8 25 -22 c -3 -18 -25 -25 -35 -11 z",
                fill: "#2A2434",
                opacity: "0.9",
              }),
              (0, s.jsx)("path", {
                d: "M196 320 q 64 30 128 0 l 0 24 q -64 30 -128 0 z",
                fill: "#3B5A8C",
                stroke: "#2A2434",
                strokeWidth: "7",
              }),
              (0, s.jsxs)("g", {
                className: "moo-bell",
                children: [
                  (0, s.jsx)("circle", {
                    cx: "260",
                    cy: "368",
                    r: "17",
                    fill: "#EEC25A",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                  }),
                  (0, s.jsx)("line", {
                    x1: "245",
                    y1: "368",
                    x2: "275",
                    y2: "368",
                    stroke: "#2A2434",
                    strokeWidth: "5",
                  }),
                  (0, s.jsx)("circle", {
                    cx: "260",
                    cy: "379",
                    r: "4",
                    fill: "#2A2434",
                  }),
                ],
              }),
              (0, s.jsxs)("g", {
                className: "moo-ear",
                children: [
                  (0, s.jsx)("ellipse", {
                    cx: "112",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(-24 112 206)",
                  }),
                  (0, s.jsx)("ellipse", {
                    cx: "104",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(-24 104 208)",
                  }),
                ],
              }),
              (0, s.jsxs)("g", {
                children: [
                  (0, s.jsx)("ellipse", {
                    cx: "408",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(24 408 206)",
                  }),
                  (0, s.jsx)("ellipse", {
                    cx: "416",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(24 416 208)",
                  }),
                ],
              }),
              (0, s.jsx)("path", {
                d: "M206 124 c -34 0 -60 -20 -58 -48 26 -6 52 14 62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M314 124 c 34 0 60 -20 58 -48 -26 -6 -52 14 -62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("rect", {
                x: "148",
                y: "104",
                width: "224",
                height: "212",
                rx: "94",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, s.jsx)("path", {
                d: "M196 112 c 20 -10 44 -14 66 -14 22 0 44 4 62 12 10 5 18 13 22 22 -22 -10 -44 -14 -64 -14 -26 0 -56 6 -96 20 2 -12 5 -20 10 -26 z",
                fill: "#2A2434",
              }),
              (0, s.jsx)("path", {
                d: "M290 176 c -18 8 -22 34 -8 46 16 14 44 8 50 -12 7 -22 -18 -44 -42 -34 z",
                fill: "#F3E3C3",
              }),
              (0, s.jsx)("g", {
                className: "moo-eye",
                children: (0, s.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, s.jsx)("circle", {
                      cx: "212",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "215",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("g", {
                className: "moo-eye",
                children: (0, s.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, s.jsx)("circle", {
                      cx: "308",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "311",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("ellipse", {
                cx: "180",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, s.jsx)("ellipse", {
                cx: "340",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, s.jsx)("rect", {
                x: "188",
                y: "240",
                width: "144",
                height: "76",
                rx: "38",
                fill: "#E9A97D",
                stroke: "#2A2434",
                strokeWidth: "9",
              }),
              (0, s.jsx)("ellipse", {
                cx: "232",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, s.jsx)("ellipse", {
                cx: "288",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, s.jsx)("path", {
                d: "M248 298 q 12 10 24 0",
                stroke: "#2A2434",
                strokeWidth: "6",
                strokeLinecap: "round",
              }),
              (0, s.jsxs)("g", {
                className: "moo-bubble",
                children: [
                  (0, s.jsx)("path", {
                    d: "M414 68 l -20 32 l 40 -8 z",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                    strokeLinejoin: "round",
                  }),
                  (0, s.jsx)("rect", {
                    x: "382",
                    y: "2",
                    width: "126",
                    height: "64",
                    rx: "30",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "8",
                  }),
                  (0, s.jsx)("text", {
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
    31859: function (e, t, r) {
      "use strict";
      r.d(t, {
        MooEgg: function () {
          return l;
        },
      });
      var s = r(57437),
        i = r(2265),
        n = r(92416);
      function l() {
        let [e, t] = (0, i.useState)([]);
        return ((0, i.useEffect)(() => {
          let e = "",
            r = (r) => {
              let s = r.target;
              if (
                (!s ||
                  ("INPUT" !== s.tagName &&
                    "TEXTAREA" !== s.tagName &&
                    !s.isContentEditable)) &&
                1 === r.key.length &&
                "moo" === (e = (e + r.key.toLowerCase()).slice(-3))
              ) {
                if (
                  ((e = ""),
                  window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                )
                  return;
                t(
                  Array.from({ length: 10 }, () => ({
                    top: 8 + 74 * Math.random(),
                    size: 44 + 56 * Math.random(),
                    dur: 1.7 + 1.5 * Math.random(),
                    delay: 0.9 * Math.random(),
                  }))
                ),
                  window.setTimeout(() => t([]), 4200);
              }
            };
          return (
            window.addEventListener("keydown", r),
            () => window.removeEventListener("keydown", r)
          );
        }, []),
        0 === e.length)
          ? null
          : (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none fixed inset-0 z-[95] overflow-hidden",
              children: e.map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: "stampede-cow absolute",
                    style: {
                      top: "".concat(e.top, "%"),
                      width: e.size,
                      animationDuration: "".concat(e.dur, "s"),
                      animationDelay: "".concat(e.delay, "s"),
                    },
                    children: (0, s.jsx)(n.MooCow, {
                      className: "h-auto w-full",
                    }),
                  },
                  t
                )
              ),
            });
      }
    },
    36410: function (e, t, r) {
      "use strict";
      r.d(t, {
        Progress: function () {
          return n;
        },
      });
      var s = r(57437),
        i = r(2265);
      function n() {
        let e = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = 0,
              s = () => {
                cancelAnimationFrame(r),
                  (r = requestAnimationFrame(() => {
                    let e =
                        document.documentElement.scrollHeight -
                        window.innerHeight,
                      r = e > 0 ? window.scrollY / e : 0;
                    t.style.transform = "scaleX(".concat(r, ")");
                  }));
              };
            return (
              s(),
              window.addEventListener("scroll", s, { passive: !0 }),
              window.addEventListener("resize", s, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", s),
                  window.removeEventListener("resize", s),
                  cancelAnimationFrame(r);
              }
            );
          }, []),
          (0, s.jsx)("div", {
            ref: e,
            "aria-hidden": !0,
            className: "fixed inset-x-0 top-0 z-[95] h-1 origin-left bg-butter",
            style: { transform: "scaleX(0)" },
          })
        );
      }
    },
    39759: function (e, t, r) {
      "use strict";
      r.d(t, {
        bo: function () {
          return l;
        },
        oy: function () {
          return o;
        },
      });
      var s = r(90713),
        i = (r(81460), r(90328)),
        n = r(40257);
      (0, i.a)({
        id: 31337,
        name: "anvil",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
      });
      let l = s.u,
        o = n.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org";
    },
    47960: function () {},
  },
  function (e) {
    e.O(0, [390, 6558, 4250, 1865, 2138, 2971, 2117, 1744], function () {
      return e((e.s = 64787));
    }),
      (_N_E = e.O());
  },
]);
