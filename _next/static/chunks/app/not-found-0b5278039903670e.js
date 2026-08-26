(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    5590: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 92416)),
        Promise.resolve().then(s.bind(s, 72384)),
        Promise.resolve().then(s.t.bind(s, 72972, 23));
    },
    92416: function (e, t, s) {
      "use strict";
      s.d(t, {
        MooCow: function () {
          return i;
        },
      });
      var r = s(57437),
        l = s(2265);
      function i(e) {
        let { className: t = "" } = e,
          s = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let e = s.current;
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
          (0, r.jsxs)("svg", {
            ref: s,
            viewBox: "0 0 520 640",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            className: t,
            "aria-hidden": !0,
            children: [
              (0, r.jsx)("ellipse", {
                cx: "260",
                cy: "612",
                rx: "130",
                ry: "18",
                fill: "#2A2434",
                opacity: "0.10",
              }),
              (0, r.jsxs)("g", {
                className: "moo-tail",
                children: [
                  (0, r.jsx)("path", {
                    d: "M398 420 C 452 448, 468 496, 452 540",
                    stroke: "#2A2434",
                    strokeWidth: "11",
                    strokeLinecap: "round",
                  }),
                  (0, r.jsx)("ellipse", {
                    cx: "450",
                    cy: "548",
                    rx: "15",
                    ry: "22",
                    fill: "#2A2434",
                    transform: "rotate(18 450 548)",
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                children: [
                  (0, r.jsxs)("g", {
                    children: [
                      (0, r.jsx)("rect", {
                        x: "158",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, r.jsx)("path", {
                        d: "M158 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("g", {
                    children: [
                      (0, r.jsx)("rect", {
                        x: "222",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, r.jsx)("path", {
                        d: "M222 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("g", {
                    children: [
                      (0, r.jsx)("rect", {
                        x: "286",
                        y: "516",
                        width: "42",
                        height: "78",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, r.jsx)("path", {
                        d: "M286 570 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("g", {
                    children: [
                      (0, r.jsx)("rect", {
                        x: "350",
                        y: "500",
                        width: "42",
                        height: "74",
                        rx: "21",
                        fill: "#FFF7E8",
                        stroke: "#2A2434",
                        strokeWidth: "9",
                      }),
                      (0, r.jsx)("path", {
                        d: "M350 550 h42 v3 a21 21 0 0 1 -42 0 z",
                        fill: "#2A2434",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("ellipse", {
                cx: "260",
                cy: "424",
                rx: "152",
                ry: "116",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, r.jsx)("path", {
                d: "M150 388 c -18 22 -10 52 14 60 c 26 9 50 -10 48 -36 c -2 -30 -42 -46 -62 -24 z",
                fill: "#2A2434",
              }),
              (0, r.jsx)("path", {
                d: "M320 470 c -14 16 -6 40 14 44 c 20 5 38 -10 34 -30 c -4 -24 -34 -32 -48 -14 z",
                fill: "#F3E3C3",
              }),
              (0, r.jsx)("path", {
                d: "M356 372 c -10 12 -4 30 10 33 c 15 4 28 -8 25 -22 c -3 -18 -25 -25 -35 -11 z",
                fill: "#2A2434",
                opacity: "0.9",
              }),
              (0, r.jsx)("path", {
                d: "M196 320 q 64 30 128 0 l 0 24 q -64 30 -128 0 z",
                fill: "#3B5A8C",
                stroke: "#2A2434",
                strokeWidth: "7",
              }),
              (0, r.jsxs)("g", {
                className: "moo-bell",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "260",
                    cy: "368",
                    r: "17",
                    fill: "#EEC25A",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                  }),
                  (0, r.jsx)("line", {
                    x1: "245",
                    y1: "368",
                    x2: "275",
                    y2: "368",
                    stroke: "#2A2434",
                    strokeWidth: "5",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "260",
                    cy: "379",
                    r: "4",
                    fill: "#2A2434",
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                className: "moo-ear",
                children: [
                  (0, r.jsx)("ellipse", {
                    cx: "112",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(-24 112 206)",
                  }),
                  (0, r.jsx)("ellipse", {
                    cx: "104",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(-24 104 208)",
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                children: [
                  (0, r.jsx)("ellipse", {
                    cx: "408",
                    cy: "206",
                    rx: "42",
                    ry: "26",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "9",
                    transform: "rotate(24 408 206)",
                  }),
                  (0, r.jsx)("ellipse", {
                    cx: "416",
                    cy: "208",
                    rx: "22",
                    ry: "12",
                    fill: "#E9A97D",
                    transform: "rotate(24 416 208)",
                  }),
                ],
              }),
              (0, r.jsx)("path", {
                d: "M206 124 c -34 0 -60 -20 -58 -48 26 -6 52 14 62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("path", {
                d: "M314 124 c 34 0 60 -20 58 -48 -26 -6 -52 14 -62 44 z",
                fill: "#EEC25A",
                stroke: "#2A2434",
                strokeWidth: "8",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("rect", {
                x: "148",
                y: "104",
                width: "224",
                height: "212",
                rx: "94",
                fill: "#FFF7E8",
                stroke: "#2A2434",
                strokeWidth: "10",
              }),
              (0, r.jsx)("path", {
                d: "M196 112 c 20 -10 44 -14 66 -14 22 0 44 4 62 12 10 5 18 13 22 22 -22 -10 -44 -14 -64 -14 -26 0 -56 6 -96 20 2 -12 5 -20 10 -26 z",
                fill: "#2A2434",
              }),
              (0, r.jsx)("path", {
                d: "M290 176 c -18 8 -22 34 -8 46 16 14 44 8 50 -12 7 -22 -18 -44 -42 -34 z",
                fill: "#F3E3C3",
              }),
              (0, r.jsx)("g", {
                className: "moo-eye",
                children: (0, r.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, r.jsx)("circle", {
                      cx: "212",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "215",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("g", {
                className: "moo-eye",
                children: (0, r.jsxs)("g", {
                  className: "moo-blink",
                  children: [
                    (0, r.jsx)("circle", {
                      cx: "308",
                      cy: "212",
                      r: "10",
                      fill: "#2A2434",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "311",
                      cy: "208",
                      r: "3.4",
                      fill: "#FFF7E8",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("ellipse", {
                cx: "180",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, r.jsx)("ellipse", {
                cx: "340",
                cy: "248",
                rx: "17",
                ry: "9",
                fill: "#E9A97D",
                opacity: "0.55",
              }),
              (0, r.jsx)("rect", {
                x: "188",
                y: "240",
                width: "144",
                height: "76",
                rx: "38",
                fill: "#E9A97D",
                stroke: "#2A2434",
                strokeWidth: "9",
              }),
              (0, r.jsx)("ellipse", {
                cx: "232",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, r.jsx)("ellipse", {
                cx: "288",
                cy: "276",
                rx: "7.5",
                ry: "10",
                fill: "#2A2434",
              }),
              (0, r.jsx)("path", {
                d: "M248 298 q 12 10 24 0",
                stroke: "#2A2434",
                strokeWidth: "6",
                strokeLinecap: "round",
              }),
              (0, r.jsxs)("g", {
                className: "moo-bubble",
                children: [
                  (0, r.jsx)("path", {
                    d: "M414 68 l -20 32 l 40 -8 z",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "7",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("rect", {
                    x: "382",
                    y: "2",
                    width: "126",
                    height: "64",
                    rx: "30",
                    fill: "#FFF7E8",
                    stroke: "#2A2434",
                    strokeWidth: "8",
                  }),
                  (0, r.jsx)("text", {
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
    72384: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Offscreen: function () {
            return i;
          },
        });
      var r = s(57437),
        l = s(2265);
      function i(e) {
        let { children: t, className: s = "" } = e,
          i = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
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
          (0, r.jsx)("div", { ref: i, className: s, children: t })
        );
      }
    },
    25523: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = s(47043)._(s(2265)).default.createContext(null);
    },
  },
  function (e) {
    e.O(0, [2972, 2971, 2117, 1744], function () {
      return e((e.s = 5590));
    }),
      (_N_E = e.O());
  },
]);
