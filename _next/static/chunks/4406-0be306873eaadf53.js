"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4406],
  {
    18049: function (e, t, n) {
      n.d(t, {
        G: function () {
          return r;
        },
      });
      class r extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof r
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof r && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(a ? [`Docs: https://abitype.dev${a}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.2.3",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    21669: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        Hk: function () {
          return o;
        },
        a_: function () {
          return a;
        },
      });
      var r = n(18049);
      class a extends r.G {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class i extends r.G {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class o extends r.G {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    70945: function (e, t, n) {
      n.d(t, {
        $r: function () {
          return a;
        },
        TT: function () {
          return o;
        },
        _D: function () {
          return f;
        },
        aZ: function () {
          return u;
        },
        jO: function () {
          return i;
        },
        zL: function () {
          return s;
        },
      });
      var r = n(18049);
      class a extends r.G {
        constructor({ params: e }) {
          super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiparameters-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParametersError",
            });
        }
      }
      class i extends r.G {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class o extends r.G {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class s extends r.G {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class f extends r.G {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class u extends r.G {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    68937: function (e, t, n) {
      n.d(t, {
        H6: function () {
          return o;
        },
        Vs: function () {
          return i;
        },
        wn: function () {
          return a;
        },
      });
      var r = n(18049);
      class a extends r.G {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class i extends r.G {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class o extends r.G {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    97542: function (e, t, n) {
      n.d(t, {
        V: function () {
          return o;
        },
      });
      var r = n(26588),
        a = n(79223),
        i = n(91465);
      function o(e) {
        let t = (0, a.D)(e),
          n = [],
          o = e.length;
        for (let a = 0; a < o; a++) {
          let o = e[a];
          (0, r.N0)(o) || n.push((0, i.cK)(o, t));
        }
        return n;
      }
    },
    26588: function (e, t, n) {
      n.d(t, {
        Dt: function () {
          return j;
        },
        EC: function () {
          return v;
        },
        LY: function () {
          return M;
        },
        N0: function () {
          return p;
        },
        PI: function () {
          return g;
        },
        QM: function () {
          return P;
        },
        SA: function () {
          return o;
        },
        Wg: function () {
          return O;
        },
        _c: function () {
          return i;
        },
        a4: function () {
          return h;
        },
        c3: function () {
          return f;
        },
        g1: function () {
          return y;
        },
        l$: function () {
          return d;
        },
        qm: function () {
          return x;
        },
        rh: function () {
          return b;
        },
        wA: function () {
          return u;
        },
      });
      var r = n(64020);
      let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function i(e) {
        return a.test(e);
      }
      function o(e) {
        return (0, r.Zw)(a, e);
      }
      let s = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function f(e) {
        return s.test(e);
      }
      function u(e) {
        return (0, r.Zw)(s, e);
      }
      let c =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function b(e) {
        return c.test(e);
      }
      function d(e) {
        return (0, r.Zw)(c, e);
      }
      let l =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return l.test(e);
      }
      function y(e) {
        return (0, r.Zw)(l, e);
      }
      let m =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function h(e) {
        return m.test(e);
      }
      function g(e) {
        return (0, r.Zw)(m, e);
      }
      let w = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function v(e) {
        return w.test(e);
      }
      function x(e) {
        return (0, r.Zw)(w, e);
      }
      let $ = /^receive\(\) external payable$/;
      function P(e) {
        return $.test(e);
      }
      let M = new Set(["memory", "indexed", "storage", "calldata"]),
        O = new Set(["indexed"]),
        j = new Set(["calldata", "memory", "storage"]);
    },
    79223: function (e, t, n) {
      n.d(t, {
        D: function () {
          return b;
        },
      });
      var r = n(64020),
        a = n(21669),
        i = n(70945),
        o = n(68937),
        s = n(18049);
      class f extends s.G {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var u = n(26588),
        c = n(91465);
      function b(e) {
        let t = {},
          n = e.length;
        for (let r = 0; r < n; r++) {
          let n = e[r];
          if (!(0, u.N0)(n)) continue;
          let a = (0, u.g1)(n);
          if (!a) throw new o.wn({ signature: n, type: "struct" });
          let i = a.properties.split(";"),
            s = [],
            f = i.length;
          for (let e = 0; e < f; e++) {
            let t = i[e].trim();
            if (!t) continue;
            let n = (0, c.C$)(t, { type: "struct" });
            s.push(n);
          }
          if (!s.length) throw new o.H6({ signature: n });
          t[a.name] = s;
        }
        let s = {},
          b = Object.entries(t),
          l = b.length;
        for (let e = 0; e < l; e++) {
          let [n, o] = b[e];
          s[n] = (function e(t = [], n = {}, o = new Set()) {
            let s = [],
              u = t.length;
            for (let b = 0; b < u; b++) {
              let u = t[b];
              if (r.cN.test(u.type)) s.push(u);
              else {
                let t = (0, r.Zw)(d, u.type);
                if (!t?.type) throw new i.aZ({ abiParameter: u });
                let { array: b, type: l } = t;
                if (l in n) {
                  if (o.has(l)) throw new f({ type: l });
                  s.push({
                    ...u,
                    type: `tuple${b ?? ""}`,
                    components: e(n[l], n, new Set([...o, l])),
                  });
                } else if ((0, c.uN)(l)) s.push(u);
                else throw new a.F({ type: l });
              }
            }
            return s;
          })(o, t);
        }
        return s;
      }
      let d = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    91465: function (e, t, n) {
      n.d(t, {
        uN: function () {
          return h;
        },
        C$: function () {
          return y;
        },
        cK: function () {
          return b;
        },
        Q4: function () {
          return m;
        },
      });
      var r = n(64020),
        a = n(21669),
        i = n(70945),
        o = n(68937),
        s = n(18049);
      class f extends s.G {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let u = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var c = n(26588);
      function b(e, t = {}) {
        if ((0, c.rh)(e))
          return (function (e, t = {}) {
            let n = (0, c.l$)(e);
            if (!n) throw new o.wn({ signature: e, type: "function" });
            let r = m(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(
                y(r[e], { modifiers: c.Dt, structs: t, type: "function" })
              );
            let s = [];
            if (n.returns) {
              let e = m(n.returns),
                r = e.length;
              for (let n = 0; n < r; n++)
                s.push(
                  y(e[n], { modifiers: c.Dt, structs: t, type: "function" })
                );
            }
            return {
              name: n.name,
              type: "function",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: a,
              outputs: s,
            };
          })(e, t);
        if ((0, c.c3)(e))
          return (function (e, t = {}) {
            let n = (0, c.wA)(e);
            if (!n) throw new o.wn({ signature: e, type: "event" });
            let r = m(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(y(r[e], { modifiers: c.Wg, structs: t, type: "event" }));
            return { name: n.name, type: "event", inputs: a };
          })(e, t);
        if ((0, c._c)(e))
          return (function (e, t = {}) {
            let n = (0, c.SA)(e);
            if (!n) throw new o.wn({ signature: e, type: "error" });
            let r = m(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(y(r[e], { structs: t, type: "error" }));
            return { name: n.name, type: "error", inputs: a };
          })(e, t);
        if ((0, c.a4)(e))
          return (function (e, t = {}) {
            let n = (0, c.PI)(e);
            if (!n) throw new o.wn({ signature: e, type: "constructor" });
            let r = m(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(y(r[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: a,
            };
          })(e, t);
        if ((0, c.EC)(e))
          return (function (e) {
            let t = (0, c.qm)(e);
            if (!t) throw new o.wn({ signature: e, type: "fallback" });
            return {
              type: "fallback",
              stateMutability: t.stateMutability ?? "nonpayable",
            };
          })(e);
        if ((0, c.QM)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new o.Vs({ signature: e });
      }
      let d =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        l =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function y(e, t) {
        var n, o;
        let s;
        let f = (function (e, t, n) {
          let r = "";
          if (n)
            for (let e of Object.entries(n)) {
              if (!e) continue;
              let t = "";
              for (let n of e[1])
                t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
              r += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${r}` : `${e}${r}`;
        })(e, t?.type, t?.structs);
        if (u.has(f)) return u.get(f);
        let b = r.cN.test(e),
          w = (0, r.Zw)(b ? l : d, e);
        if (!w) throw new i.jO({ param: e });
        if (
          w.name &&
          ("address" === (n = w.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            r.eL.test(n) ||
            r.lh.test(n) ||
            g.test(n))
        )
          throw new i.TT({ param: e, name: w.name });
        let v = w.name ? { name: w.name } : {},
          x = "indexed" === w.modifier ? { indexed: !0 } : {},
          $ = t?.structs ?? {},
          P = {};
        if (b) {
          s = "tuple";
          let e = m(w.type),
            t = [],
            n = e.length;
          for (let r = 0; r < n; r++) t.push(y(e[r], { structs: $ }));
          P = { components: t };
        } else if (w.type in $) (s = "tuple"), (P = { components: $[w.type] });
        else if (p.test(w.type)) s = `${w.type}256`;
        else if ("address payable" === w.type) s = "address";
        else if (((s = w.type), t?.type !== "struct" && !h(s)))
          throw new a.Hk({ type: s });
        if (w.modifier) {
          if (!t?.modifiers?.has?.(w.modifier))
            throw new i.zL({ param: e, type: t?.type, modifier: w.modifier });
          if (
            c.Dt.has(w.modifier) &&
            ((o = s),
            !w.array && "bytes" !== o && "string" !== o && "tuple" !== o)
          )
            throw new i._D({ param: e, type: t?.type, modifier: w.modifier });
        }
        let M = { type: `${s}${w.array ?? ""}`, ...v, ...x, ...P };
        return u.set(f, M), M;
      }
      function m(e, t = [], n = "", r = 0) {
        let a = e.trim().length;
        for (let i = 0; i < a; i++) {
          let a = e[i],
            o = e.slice(i + 1);
          switch (a) {
            case ",":
              return 0 === r ? m(o, [...t, n.trim()]) : m(o, t, `${n}${a}`, r);
            case "(":
              return m(o, t, `${n}${a}`, r + 1);
            case ")":
              return m(o, t, `${n}${a}`, r - 1);
            default:
              return m(o, t, `${n}${a}`, r);
          }
        }
        if ("" === n) return t;
        if (0 !== r) throw new f({ current: n, depth: r });
        return t.push(n.trim()), t;
      }
      function h(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          r.eL.test(e) ||
          r.lh.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    63063: function (e, t, n) {
      n.d(t, {
        o: function () {
          return i;
        },
      });
      var r = n(19586);
      function a(e) {
        return {
          address: e.address,
          amount: r.xS(e.amount),
          index: r.xS(e.index),
          validatorIndex: r.xS(e.validatorIndex),
        };
      }
      function i(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: r.xS(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: r.xS(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: r.xS(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: r.xS(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: r.xS(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: r.xS(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(a) }),
        };
      }
    },
    71725: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
      });
      var r = n(41380);
      class a extends Error {
        static setStaticOptions(e) {
          (a.prototype.docsOrigin = e.docsOrigin),
            (a.prototype.showVersion = e.showVersion),
            (a.prototype.version = e.version);
        }
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof a) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            r = (t.cause instanceof a && t.cause.docsPath) || t.docsPath,
            i = t.docsOrigin ?? a.prototype.docsOrigin,
            o = `${i}${r ?? ""}`,
            s = !!(t.version ?? a.prototype.showVersion),
            f = t.version ?? a.prototype.version;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || r || s
                ? [
                    "",
                    n ? `Details: ${n}` : void 0,
                    r ? `See: ${o}` : void 0,
                    s ? `Version: ${f}` : void 0,
                  ]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsOrigin", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "showVersion", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = o),
            (this.docsOrigin = i),
            (this.docsPath = r),
            (this.shortMessage = e),
            (this.showVersion = s),
            (this.version = f);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      Object.defineProperty(a, "defaultStaticOptions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          docsOrigin: "https://oxlib.sh",
          showVersion: !1,
          version: `ox@${(0, r.bo)()}`,
        },
      }),
        a.setStaticOptions(a.defaultStaticOptions);
    },
    19586: function (e, t, n) {
      n.d(t, {
        $s: function () {
          return j;
        },
        Dp: function () {
          return u;
        },
        Gh: function () {
          return g;
        },
        Gu: function () {
          return v;
        },
        He: function () {
          return w;
        },
        J5: function () {
          return x;
        },
        M6: function () {
          return M;
        },
        O3: function () {
          return c;
        },
        Q_: function () {
          return p;
        },
        dp: function () {
          return h;
        },
        eh: function () {
          return y;
        },
        mL: function () {
          return l;
        },
        mV: function () {
          return O;
        },
        tP: function () {
          return m;
        },
        xS: function () {
          return d;
        },
        xv: function () {
          return b;
        },
        zo: function () {
          return f;
        },
      });
      var r = n(71725),
        a = n(82543),
        i = n(56535);
      let o = new TextEncoder(),
        s = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function f(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function u(e) {
        return e instanceof Uint8Array
          ? b(e)
          : Array.isArray(e)
          ? b(new Uint8Array(e))
          : e;
      }
      function c(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size ? (a.Yf(n, t.size), p(n, t.size)) : n;
      }
      function b(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += s[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (a.Yf(r, t.size), y(r, t.size)) : r;
      }
      function d(e, t = {}) {
        let n;
        let { signed: r, size: a } = t,
          i = BigInt(e);
        a
          ? (n = r
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && i > n) || i < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new x({
            max: n ? `${n}${t}` : void 0,
            min: `${o}${t}`,
            signed: r,
            size: a,
            value: `${e}${t}`,
          });
        }
        let s = (r && i < 0 ? BigInt.asUintN(8 * a, BigInt(i)) : i).toString(
            16
          ),
          f = `0x${s}`;
        return a ? p(f, a) : f;
      }
      function l(e, t = {}) {
        return b(o.encode(e), t);
      }
      function p(e, t) {
        return a.vk(e, { dir: "left", size: t });
      }
      function y(e, t) {
        return a.vk(e, { dir: "right", size: t });
      }
      function m(e, t, n, r = {}) {
        let { strict: i } = r;
        a.EM(e, t);
        let o = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return i && a.Ro(o, t, n), o;
      }
      function h(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function g(e, t = {}) {
        let { signed: n } = t;
        t.size && a.Yf(e, t.size);
        let r = BigInt(e);
        if (!n) return r;
        let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
        return r <= i >> 1n ? r : r - i - 1n;
      }
      function w(e, t = {}) {
        let { signed: n, size: r } = t;
        return n || r ? Number(g(e, t)) : Number(e);
      }
      function v(e, t = {}) {
        let { strict: n = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: n = !1 } = t;
              if (!e || "string" != typeof e) throw new $(e);
              if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new P(e);
            })(e, { strict: n }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class x extends r.G {
        constructor({ max: e, min: t, signed: n, size: r, value: a }) {
          super(
            `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class $ extends r.G {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? i.Pz(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class P extends r.G {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class M extends r.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class O extends r.G {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class j extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    56535: function (e, t, n) {
      n.d(t, {
        Pz: function () {
          return r;
        },
      });
      function r(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
    },
    41380: function (e, t, n) {
      function r() {
        return "0.1.1";
      }
      function a(e) {
        if (!e) return "";
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      n.d(t, {
        bo: function () {
          return r;
        },
        xr: function () {
          return a;
        },
      });
    },
    82543: function (e, t, n) {
      n.d(t, {
        EM: function () {
          return i;
        },
        Ro: function () {
          return o;
        },
        Yf: function () {
          return a;
        },
        vk: function () {
          return s;
        },
      });
      var r = n(19586);
      function a(e, t) {
        if (r.dp(e) > t) throw new r.M6({ givenSize: r.dp(e), maxSize: t });
      }
      function i(e, t) {
        if ("number" == typeof t && t > 0 && t > r.dp(e) - 1)
          throw new r.mV({ offset: t, position: "start", size: r.dp(e) });
      }
      function o(e, t, n) {
        if ("number" == typeof t && "number" == typeof n && r.dp(e) !== n - t)
          throw new r.mV({ offset: n, position: "end", size: r.dp(e) });
      }
      function s(e, t = {}) {
        let { dir: n, size: a = 32 } = t;
        if (0 === a) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * a)
          throw new r.$s({
            size: Math.ceil(i.length / 2),
            targetSize: a,
            type: "Hex",
          });
        return `0x${i["right" === n ? "padEnd" : "padStart"](2 * a, "0")}`;
      }
    },
    19775: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        },
      });
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    50550: function (e, t, n) {
      n.d(t, {
        R: function () {
          return M;
        },
      });
      var r = n(97542),
        a = n(63063),
        i = n(19775),
        o = n(98158),
        s = n(45434),
        f = n(81544),
        u = n(35586),
        c = n(20010),
        b = n(97564),
        d = n(65436),
        l = n(23010),
        p = n(17283),
        y = n(93637),
        m = n(98193),
        h = n(93627),
        g = n(14015),
        w = n(70878),
        v = n(92614),
        x = n(43226),
        $ = n(77911),
        P = n(54605);
      async function M(e, t) {
        let {
            account: o = e.account,
            authorizationList: d,
            batch: p = !!e.batch?.multicall,
            blockHash: h,
            blockNumber: x,
            blockTag: M = e.experimental_blockTag ?? "latest",
            requireCanonical: O,
            accessList: j,
            blobs: I,
            blockOverrides: z,
            code: E,
            data: C,
            factory: k,
            factoryData: _,
            gas: F,
            gasPrice: B,
            maxFeePerBlobGas: N,
            maxFeePerGas: R,
            maxPriorityFeePerGas: T,
            nonce: D,
            requestOptions: Z,
            to: L,
            value: V,
            stateOverride: H,
            ...U
          } = t,
          W = o ? (0, i.T)(o) : void 0;
        if (E && (k || _))
          throw new f.G(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (E && L)
          throw new f.G("Cannot provide both `code` & `to` as parameters.");
        let q = E && C,
          Y = k && _ && L && C,
          J = q || Y,
          Q = q
            ? S({ code: E, data: C })
            : Y
            ? (function (e) {
                let { data: t, factory: n, factoryData: a, to: i } = e;
                return (0, l.w)({
                  abi: (0, r.V)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: s.pG,
                  args: [i, t, n, a],
                });
              })({ data: C, factory: k, factoryData: _, to: L })
            : C;
        try {
          (0, P.F)(t);
          let n = (0, m.G)({
              blockHash: h,
              blockNumber: x,
              blockTag: M,
              requireCanonical: O,
            }),
            r = z ? a.o(z) : void 0,
            i = (0, $.mF)(H),
            o = e.chain?.formatters?.transactionRequest?.format,
            s = (o || v.tG)(
              {
                ...(0, w.K)(U, { format: o }),
                accessList: j,
                account: W,
                authorizationList: d,
                blobs: I,
                data: Q,
                gas: F,
                gasPrice: B,
                maxFeePerBlobGas: N,
                maxFeePerGas: R,
                maxPriorityFeePerGas: T,
                nonce: D,
                to: J ? void 0 : L,
                value: V,
              },
              "call"
            );
          if (
            p &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: s }) &&
            !r &&
            void 0 === h
          )
            try {
              let { deployless: t = !1 } =
                  "object" == typeof e.batch?.multicall
                    ? e.batch.multicall
                    : {},
                n = G(e, { blockNumber: x, deployless: t });
              if (!n || !(i && Object.keys(i).some((e) => (0, y.E)(e, n))))
                return await A(e, {
                  ...s,
                  blockHash: h,
                  blockNumber: x,
                  blockTag: M,
                  multicallAddress: n,
                  requestOptions: Z,
                  requireCanonical: O,
                  rpcStateOverride: i,
                });
            } catch (e) {
              if (!(e instanceof u.pZ) && !(e instanceof u.mm)) throw e;
            }
          let f = (() => {
              let e = [s, n];
              return i && r
                ? [...e, i, r]
                : i
                ? [...e, i]
                : r
                ? [...e, {}, r]
                : e;
            })(),
            c = await e.request({ method: "eth_call", params: f }, Z);
          if ("0x" === c) return { data: void 0 };
          return { data: c };
        } catch (o) {
          if (Z?.signal?.aborted) throw (0, b.lR)(Z.signal);
          if ((0, b.D_)(o)) throw o;
          let r = (function (e) {
              if (!(e instanceof f.G)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(o),
            { offchainLookup: a, offchainLookupSignature: i } = await n
              .e(1735)
              .then(n.bind(n, 71735));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === i && L)
            return { data: await a(e, { data: r, requestOptions: Z, to: L }) };
          if (J && r?.slice(0, 10) === "0x101bb98d")
            throw new c.Mo({ factory: k });
          throw (0, g.P)(o, { ...t, account: W, chain: e.chain });
        }
      }
      let O = 0,
        j = new WeakMap();
      async function A(e, t) {
        let {
            batchSize: n = 1024,
            deployless: r = !1,
            wait: a = 0,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockHash: i,
            blockNumber: f,
            blockTag: u = e.experimental_blockTag ?? "latest",
            requireCanonical: b,
            data: l,
            multicallAddress: y,
            requestOptions: h,
            rpcStateOverride: g,
            to: w,
          } = t,
          v = void 0 !== y ? y : G(e, { blockNumber: f, deployless: r }),
          $ = (0, m.G)({
            blockHash: i,
            blockNumber: f,
            blockTag: u,
            requireCanonical: b,
          }),
          P = "string" == typeof $ ? $ : JSON.stringify($),
          M = g ? `.${JSON.stringify(g)}` : "",
          { schedule: A } = (0, x.S)({
            id: `${e.uid}.${P}.${(function (e) {
              if (!e) return "default";
              let t = j.get(e);
              if (void 0 !== t) return t;
              let n = O++;
              return j.set(e, n), n;
            })(h)}${M}`,
            wait: a,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, p.R)({
                  abi: o.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                a = {
                  ...(null === v
                    ? { data: S({ code: s.xd, data: r }) }
                    : { to: v, data: r }),
                },
                i = await e.request(
                  { method: "eth_call", params: g ? [a, $, g] : [a, $] },
                  h
                );
              return (0, d.k)({
                abi: o.F8,
                args: [n],
                functionName: "aggregate3",
                data: i || "0x",
              });
            },
          }),
          [{ returnData: I, success: z }] = await A({ data: l, to: w });
        if (!z) throw new c.VQ({ data: I });
        return "0x" === I ? { data: void 0 } : { data: I };
      }
      function G(e, t) {
        let { blockNumber: n, deployless: r } = t;
        if (r) return null;
        if (e.chain)
          return (0, h.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "multicall3",
          });
        throw new u.pZ();
      }
      function S(e) {
        let { code: t, data: n } = e;
        return (0, l.w)({
          abi: (0, r.V)(["constructor(bytes, bytes)"]),
          bytecode: s.NO,
          args: [t, n],
        });
      }
    },
    28766: function (e, t, n) {
      n.d(t, {
        L: function () {
          return f;
        },
      });
      var r = n(65436),
        a = n(17283),
        i = n(34180),
        o = n(82645),
        s = n(50550);
      async function f(e, t) {
        let { abi: n, address: f, args: u, functionName: c, ...b } = t,
          d = (0, a.R)({ abi: n, args: u, functionName: c });
        try {
          let { data: t } = await (0, o.s)(
            e,
            s.R,
            "call"
          )({ ...b, data: d, to: f });
          return (0, r.k)({
            abi: n,
            args: u,
            functionName: c,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, i.S)(e, {
            abi: n,
            address: f,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: c,
          });
        }
      }
    },
    82538: function (e, t, n) {
      n.d(t, {
        eI: function () {
          return i;
        },
        xz: function () {
          return s;
        },
      });
      var r = n(19775),
        a = n(78217);
      function i(e) {
        let {
            batch: t,
            chain: n,
            ccipRead: i,
            dataSuffix: s,
            key: f = "base",
            name: u = "Base Client",
            tokens: c,
            type: b = "base",
          } = e,
          d =
            e.experimental_blockTag ??
            ("number" == typeof n?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          l = n?.blockTime ?? 12e3,
          p =
            e.pollingInterval ??
            Math.min(Math.max(Math.floor(l / 2), 500), 4e3),
          y = e.cacheTime ?? p,
          m = e.account ? (0, r.T)(e.account) : void 0,
          {
            config: h,
            request: g,
            value: w,
          } = e.transport({ account: m, chain: n, pollingInterval: p }),
          v = {
            account: m,
            batch: t,
            cacheTime: y,
            ccipRead: i,
            chain: n,
            dataSuffix: s,
            key: f,
            name: u,
            pollingInterval: p,
            request: g,
            tokens: c,
            transport: { ...h, ...w },
            type: b,
            uid: (0, a.h)(),
            ...(d ? { experimental_blockTag: d } : {}),
          };
        return Object.assign(v, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in v) delete r[e];
              let a = { ...t, ...r };
              for (let e in r) {
                let n = t[e],
                  i = r[e];
                o(n) && o(i) && (a[e] = { ...n, ...i });
              }
              return Object.assign(a, { extend: e(a) });
            };
          })(v),
        });
      }
      function o(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      }
      function s(e, t) {
        let n = (n = {}) => t(e, n);
        for (let r of [
          "call",
          "calls",
          "callWithPeriod",
          "estimateGas",
          "prepare",
          "prepareRecipient",
          "predict",
          "simulate",
        ])
          if (Object.hasOwn(t, r)) {
            let a = t[r];
            n[r] = (t = {}) => (1 === a.length ? a(t) : a(e, t));
          }
        for (let e of ["extractEvent", "extractEvents"])
          Object.hasOwn(t, e) && (n[e] = t[e]);
        return n;
      }
    },
    98158: function (e, t, n) {
      n.d(t, {
        F8: function () {
          return r;
        },
        MR: function () {
          return b;
        },
        Wo: function () {
          return d;
        },
        X$: function () {
          return u;
        },
        Yi: function () {
          return a;
        },
        _A: function () {
          return c;
        },
        du: function () {
          return s;
        },
        k3: function () {
          return o;
        },
        nZ: function () {
          return f;
        },
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "addr", type: "address" }],
            name: "getEthBalance",
            outputs: [{ name: "balance", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        a = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        i = [
          {
            inputs: [{ name: "dns", type: "bytes" }],
            name: "DNSDecodingFailed",
            type: "error",
          },
          {
            inputs: [{ name: "ens", type: "string" }],
            name: "DNSEncodingFailed",
            type: "error",
          },
          { inputs: [], name: "EmptyAddress", type: "error" },
          {
            inputs: [
              { name: "status", type: "uint16" },
              { name: "message", type: "string" },
            ],
            name: "HttpError",
            type: "error",
          },
          { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
          {
            inputs: [{ name: "errorData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              { name: "name", type: "bytes" },
              { name: "resolver", type: "address" },
            ],
            name: "ResolverNotContract",
            type: "error",
          },
          {
            inputs: [{ name: "name", type: "bytes" }],
            name: "ResolverNotFound",
            type: "error",
          },
          {
            inputs: [
              { name: "primary", type: "string" },
              { name: "primaryAddress", type: "bytes" },
            ],
            name: "ReverseAddressMismatch",
            type: "error",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "selector", type: "bytes4" },
            ],
            name: "UnsupportedResolverProfile",
            type: "error",
          },
        ],
        o = [
          ...i,
          {
            name: "resolveWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        s = [
          ...i,
          {
            name: "reverseWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "uint256", name: "coinType" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolver" },
              { type: "address", name: "reverseResolver" },
            ],
          },
        ],
        f = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        u = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        c = [
          {
            name: "isValidSignature",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            outputs: [{ name: "", type: "bytes4" }],
          },
        ],
        b = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        d = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    45434: function (e, t, n) {
      n.d(t, {
        NO: function () {
          return r;
        },
        de: function () {
          return i;
        },
        pG: function () {
          return a;
        },
        xd: function () {
          return o;
        },
      });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        a =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        i =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        o =
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
    },
    55246: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
        Up: function () {
          return a;
        },
        hZ: function () {
          return i;
        },
      });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        a = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        i = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    20010: function (e, t, n) {
      n.d(t, {
        cg: function () {
          return h;
        },
        uq: function () {
          return g;
        },
        Lu: function () {
          return w;
        },
        Dk: function () {
          return v;
        },
        Mo: function () {
          return x;
        },
        VQ: function () {
          return $;
        },
      });
      var r = n(19775),
        a = n(55246),
        i = n(33591),
        o = n(7275),
        s = n(31853);
      function f({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.P)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var u = n(64043),
        c = n(71282),
        b = n(29707),
        d = n(65531),
        l = n(81544),
        p = n(29625),
        y = n(63228),
        m = n(97564);
      class h extends l.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: i,
            gas: o,
            gasPrice: s,
            maxFeePerGas: f,
            maxPriorityFeePerGas: u,
            nonce: d,
            to: l,
            value: m,
            stateOverride: h,
          }
        ) {
          let g = t ? (0, r.T)(t) : void 0,
            w = (0, y.xr)({
              from: g?.address,
              to: l,
              value:
                void 0 !== m &&
                `${(0, c.d)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: i,
              gas: o,
              gasPrice: void 0 !== s && `${(0, b.o)(s)} gwei`,
              maxFeePerGas: void 0 !== f && `${(0, b.o)(f)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, b.o)(u)} gwei`,
              nonce: d,
            });
          h &&
            (w += `
${(0, p.Bj)(h)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends l.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: a,
            functionName: i,
            sender: s,
          }
        ) {
          let c = (0, u.mE)({ abi: t, args: n, name: i }),
            b = c
              ? f({
                  abiItem: c,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            d = c ? (0, o.t)(c, { includeName: !0 }) : void 0,
            l = (0, y.xr)({
              address: r && (0, m.CR)(r),
              function: d,
              args:
                b &&
                "()" !== b &&
                `${[...Array(i?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${b}`,
              sender: s,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                l && "Contract Call:",
                l,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = i),
            (this.sender = s);
        }
      }
      class w extends l.G {
        constructor({
          abi: e,
          data: t,
          functionName: n,
          message: r,
          cause: s,
        }) {
          let u, c, b, l, p;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: u,
              } = (c = (0, i.p)({ abi: e, data: t, cause: s }));
              if ("Error" === r) l = u[0];
              else if ("Panic" === r) {
                let [e] = u;
                l = a.$[e];
              } else {
                let e = n ? (0, o.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && u
                      ? f({
                          abiItem: n,
                          args: u,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                b = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              u = e;
            }
          else r && (l = r);
          u instanceof d.yP &&
            ((p = u.signature),
            (b = [
              `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${p}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || p
                ? [
                    `The contract function "${n}" reverted with the following ${
                      p ? "signature" : "reason"
                    }:`,
                    l || p,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: u ?? s,
                metaMessages: b,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = c),
            (this.raw = t),
            (this.reason = l),
            (this.signature = p);
        }
      }
      class v extends l.G {
        constructor({ functionName: e, cause: t }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
            cause: t,
          });
        }
      }
      class x extends l.G {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class $ extends l.G {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    29625: function (e, t, n) {
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return a;
        },
        Z8: function () {
          return i;
        },
      });
      var r = n(81544);
      class a extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class i extends r.G {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function o(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && (r += "      state:\n" + o(n.state)),
              n.stateDiff && (r += "      stateDiff:\n" + o(n.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    2742: function (e, t, n) {
      n.d(t, {
        r: function () {
          return y;
        },
      });
      var r = n(65531),
        a = n(31669),
        i = n(46033),
        o = n(20556),
        s = n(69921),
        f = n(63152),
        u = n(36826),
        c = n(72932),
        b = n(59455);
      function d(e, t = {}) {
        void 0 !== t.size && (0, c.Yf)(e, { size: t.size });
        let n = (0, b.ci)(e);
        return (0, c.ly)(n, t);
      }
      var l = n(44659),
        p = n(30056);
      function y(e, t) {
        let n = "string" == typeof t ? (0, l.nr)(t) : t,
          y = (0, i.q)(n);
        if (0 === (0, o.d)(n) && e.length > 0) throw new r.wb();
        if ((0, o.d)(t) && 32 > (0, o.d)(t))
          throw new r.xB({
            data: "string" == typeof t ? t : (0, b.ci)(t),
            params: e,
            size: (0, o.d)(t),
          });
        let h = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let i = e[t];
          h < n.length && y.setPosition(h);
          let [o, l] = (function e(t, n, { staticPosition: i }) {
            let o = (0, p.S)(n.type);
            if (o) {
              let [r, a] = o;
              return (function (t, n, { length: r, staticPosition: a }) {
                if (null === r) {
                  let r = a + d(t.readBytes(32)),
                    i = r + 32;
                  t.setPosition(r);
                  let o = d(t.readBytes(32)),
                    s = m(n),
                    f = 0,
                    u = [];
                  for (let r = 0; r < o; ++r) {
                    t.setPosition(i + (s ? 32 * r : f));
                    let [a, o] = e(t, n, { staticPosition: i });
                    (f += o),
                      u.push(a),
                      0 === o && (t.assertReadLimit(), t._touch());
                  }
                  return t.setPosition(a + 32), [u, 32];
                }
                if (m(n)) {
                  let i = a + d(t.readBytes(32)),
                    o = [];
                  for (let a = 0; a < r; ++a) {
                    t.setPosition(i + 32 * a);
                    let [r] = e(t, n, { staticPosition: i });
                    o.push(r);
                  }
                  return t.setPosition(a + 32), [o, 32];
                }
                let i = 0,
                  o = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: a + i });
                  (i += s),
                    o.push(r),
                    0 === s && (t.assertReadLimit(), t._touch());
                }
                return [o, i];
              })(t, { ...n, type: a }, { length: r, staticPosition: i });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let a =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  i = a ? [] : {},
                  o = 0;
                if (m(n)) {
                  let s = r + d(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let f = n.components[r];
                    t.setPosition(s + o);
                    let [u, c] = e(t, f, { staticPosition: s });
                    (o += c), (i[a ? r : f?.name] = u);
                  }
                  return t.setPosition(r + 32), [i, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let f = n.components[s],
                    [u, c] = e(t, f, { staticPosition: r });
                  (i[a ? s : f?.name] = u), (o += c);
                }
                return [i, o];
              })(t, n, { staticPosition: i });
            if ("address" === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, a.x)((0, b.ci)((0, s.T4)(t, -20))), 32];
              })(t);
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, c.Yf)(n, { size: t.size }), (n = (0, u.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new f.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, a] = t.type.split("bytes");
                if (!a) {
                  let t = d(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = d(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let a = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, b.ci)(a), 32];
                }
                return [(0, b.ci)(e.readBytes(Number.parseInt(a, 10), 32)), 32];
              })(t, n, { staticPosition: i });
            if (n.type.startsWith("uint") || n.type.startsWith("int"))
              return (function (e, t) {
                let n = t.type.startsWith("int"),
                  r = Number.parseInt(t.type.split("int")[1] || "256", 10),
                  a = e.readBytes(32);
                return [
                  r > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, c.Yf)(e, { size: t.size });
                        let n = (0, b.ci)(e);
                        return (0, c.y_)(n, t);
                      })(a, { signed: n })
                    : d(a, { signed: n }),
                  32,
                ];
              })(t, n);
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = d(e.readBytes(32));
                e.setPosition(t + n);
                let r = d(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let a = (function (e, t = {}) {
                  let n = e;
                  return (
                    void 0 !== t.size &&
                      ((0, c.Yf)(n, { size: t.size }),
                      (n = (0, u.f)(n, { dir: "right" }))),
                    new TextDecoder().decode(n)
                  );
                })(e.readBytes(r, 32));
                return e.setPosition(t + 32), [a, 32];
              })(t, { staticPosition: i });
            throw new r.CI(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(y, i, { staticPosition: 0 });
          (h += l), g.push(o);
        }
        return g;
      }
      function m(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(m);
        let n = (0, p.S)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    33591: function (e, t, n) {
      n.d(t, {
        p: function () {
          return u;
        },
      });
      var r = n(55246),
        a = n(65531),
        i = n(69921),
        o = n(10464),
        s = n(2742),
        f = n(7275);
      function u(e) {
        let { abi: t, data: n, cause: u } = e,
          c = (0, i.tP)(n, 0, 4);
        if ("0x" === c) throw new a.wb({ cause: u });
        let b = [...(t || []), r.Up, r.hZ].find(
          (e) => "error" === e.type && c === (0, o.C)((0, f.t)(e))
        );
        if (!b)
          throw new a.yP(c, {
            docsPath: "/docs/contract/decodeErrorResult",
            cause: u,
          });
        return {
          abiItem: b,
          args:
            "inputs" in b && b.inputs && b.inputs.length > 0
              ? (0, s.r)(b.inputs, (0, i.tP)(n, 4))
              : void 0,
          errorName: b.name,
        };
      }
    },
    65436: function (e, t, n) {
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(65531),
        a = n(2742),
        i = n(64043);
      let o = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: f } = e,
          u = t[0];
        if (s) {
          let e = (0, i.mE)({ abi: t, args: n, name: s });
          if (!e) throw new r.xL(s, { docsPath: o });
          u = e;
        }
        if ("function" !== u.type) throw new r.xL(void 0, { docsPath: o });
        if (!u.outputs) throw new r.MX(u.name, { docsPath: o });
        let c = (0, a.r)(u.outputs, f);
        return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
      }
    },
    23010: function (e, t, n) {
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(65531),
        a = n(89256),
        i = n(30056);
      let o = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let f = t.find((e) => "type" in e && "constructor" === e.type);
        if (!f) throw new r.fM({ docsPath: o });
        if (!("inputs" in f) || !f.inputs || 0 === f.inputs.length)
          throw new r.cO({ docsPath: o });
        let u = (0, i.E)(f.inputs, n);
        return (0, a.SM)([s, u]);
      }
    },
    93637: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(10052),
        a = n(4012);
      function i(e, t) {
        if (!(0, a.U)(e, { strict: !1 })) throw new r.b({ address: e });
        if (!(0, a.U)(t, { strict: !1 })) throw new r.b({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    55834: function (e, t, n) {
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(69021),
        a = n(89256),
        i = n(44659),
        o = n(59455),
        s = n(70044),
        f = n(13169);
      async function u(e) {
        let { authorization: t, signature: n } = e;
        return (0, r.R)({
          hash: (function (e) {
            let { chainId: t, nonce: n, to: r } = e,
              u = e.contractAddress ?? e.address,
              c = (0, f.w)(
                (0, a.SM)([
                  "0x05",
                  (0, s.LV)([
                    t ? (0, o.eC)(t) : "0x",
                    u,
                    n ? (0, o.eC)(n) : "0x",
                  ]),
                ])
              );
            return "bytes" === r ? (0, i.nr)(c) : c;
          })(t),
          signature: n ?? t,
        });
      }
    },
    98193: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(81544),
        a = n(59455);
      function i(e) {
        let {
          blockHash: t,
          blockNumber: n,
          blockTag: i,
          requireCanonical: o,
        } = e;
        if (void 0 !== o && !t)
          throw new r.G(
            "`requireCanonical` can only be provided when `blockHash` is set."
          );
        return t
          ? o
            ? { blockHash: t, requireCanonical: o }
            : { blockHash: t }
          : "bigint" == typeof n
          ? (0, a.eC)(n)
          : i ?? "latest";
      }
    },
    93627: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(35586);
      function a({ blockNumber: e, chain: t, contract: n }) {
        let a = t?.contracts?.[n];
        if (!a) throw new r.mm({ chain: t, contract: { name: n } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new r.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    14015: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
      });
      var r = n(20010),
        a = n(78125),
        i = n(18856);
      function o(e, { docsPath: t, ...n }) {
        let o = (() => {
          let t = (0, i.k)(e, n);
          return t instanceof a.cj ? e : t;
        })();
        return new r.cg(o, { docsPath: t, ...n });
      }
    },
    34180: function (e, t, n) {
      n.d(t, {
        S: function () {
          return f;
        },
      });
      var r = n(65531),
        a = n(81544),
        i = n(20010),
        o = n(17057),
        s = n(77014);
      function f(
        e,
        { abi: t, address: n, args: f, docsPath: u, functionName: c, sender: b }
      ) {
        let d =
            e instanceof i.VQ
              ? e
              : e instanceof a.G
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: l, data: p, details: y, message: m, shortMessage: h } = d,
          g =
            e instanceof r.wb
              ? new i.Dk({ functionName: c, cause: e })
              : ([3, s.XS.code].includes(l) && (p || y || m || h)) ||
                (l === s.yR.code && "execution reverted" === y && p)
              ? new i.Lu({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: c,
                  message: d instanceof o.bs ? y : h ?? m,
                  cause: e,
                })
              : e;
        return new i.uq(g, {
          abi: t,
          args: f,
          contractAddress: n,
          docsPath: u,
          functionName: c,
          sender: b,
        });
      }
    },
    18856: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(81544),
        a = n(78125);
      function i(e, t) {
        let n = (e.details || "").toLowerCase(),
          i = e instanceof r.G ? e.walk((e) => e?.code === a.M_.code) : e;
        return i instanceof r.G
          ? new a.M_({ cause: e, message: i.details })
          : a.M_.nodeMessage.test(n)
          ? new a.M_({ cause: e, message: e.details })
          : a.Hh.nodeMessage.test(n)
          ? new a.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.G$.nodeMessage.test(n)
          ? new a.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.ZI.nodeMessage.test(n)
          ? new a.ZI({ cause: e, nonce: t?.nonce })
          : a.vU.nodeMessage.test(n)
          ? new a.vU({ cause: e, nonce: t?.nonce })
          : a.se.nodeMessage.test(n)
          ? new a.se({ cause: e, nonce: t?.nonce })
          : a.C_.nodeMessage.test(n)
          ? new a.C_({ cause: e })
          : a.WF.nodeMessage.test(n)
          ? new a.WF({ cause: e, gas: t?.gas })
          : a.dR.nodeMessage.test(n)
          ? new a.dR({ cause: e, gas: t?.gas })
          : a.pZ.nodeMessage.test(n)
          ? new a.pZ({ cause: e })
          : a.cs.nodeMessage.test(n)
          ? new a.cs({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.cj({ cause: e });
      }
    },
    70878: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let a of Object.keys(r))
              a in e && (n[a] = e[a]),
                r[a] &&
                  "object" == typeof r[a] &&
                  !Array.isArray(r[a]) &&
                  t(r[a]);
          })(t(e || {})),
          n
        );
      }
    },
    92614: function (e, t, n) {
      n.d(t, {
        iy: function () {
          return s;
        },
        tG: function () {
          return o;
        },
      });
      var r = n(59455),
        a = n(94870);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(e, t) {
        let n = {};
        return (
          void 0 !== e.authorizationList &&
            (n.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.eC)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.eC)(BigInt(e.s)) : e.s,
              chainId: (0, r.eC)(e.chainId),
              nonce: (0, r.eC)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.eC)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.eC)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (n.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (n.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (n.blobs = e.blobs.map((e) => (0, r.ci)(e)))
              : (n.blobs = e.blobs)),
          void 0 !== e.data && (n.data = e.data),
          e.account && (n.from = e.account.address),
          void 0 !== e.from && (n.from = e.from),
          void 0 !== e.gas && (n.gas = (0, r.eC)(e.gas)),
          void 0 !== e.gasPrice && (n.gasPrice = (0, r.eC)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (n.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (n.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (n.nonce = (0, r.eC)(e.nonce)),
          void 0 !== e.to && (n.to = e.to),
          void 0 !== e.type && (n.type = i[e.type]),
          void 0 !== e.value && (n.value = (0, r.eC)(e.value)),
          n
        );
      }
      let s = (0, a.$)("transactionRequest", o);
    },
    82645: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let a = e[n];
        return "function" == typeof a ? a : (n) => t(e, n);
      }
    },
    36478: function (e, t, n) {
      n.d(t, {
        N7: function () {
          return o;
        },
      });
      let r = new Map(),
        a = new Map(),
        i = 0;
      function o(e, t, n) {
        let o = ++i,
          s = () => r.get(e) || [],
          f = () => {
            let t = s().filter((e) => e.id !== o);
            if (0 === t.length) {
              r.delete(e), a.delete(e);
              return;
            }
            r.set(e, t);
          },
          u = () => {
            let t = s();
            if (!t.some((e) => e.id === o)) return;
            let n = a.get(e);
            if (1 === t.length && n) {
              let e = n();
              e instanceof Promise && e.catch(() => {});
            }
            f();
          },
          c = s();
        if ((r.set(e, [...c, { id: o, fns: t }]), c && c.length > 0)) return u;
        let b = {};
        for (let e in t)
          b[e] = (...t) => {
            let n = s();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let d = n(b);
        return "function" == typeof d && a.set(e, d), u;
      }
    },
    41495: function (e, t, n) {
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var r = n(33457);
      function a(e, { emitOnBegin: t, initialWaitTime: n, interval: a }) {
        let i = !0,
          o = () => (i = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: o }));
            let f = (await n?.(s)) ?? a;
            await (0, r.D)(f);
            let u = async () => {
              i && (await e({ unpoll: o }), await (0, r.D)(a), u());
            };
            u();
          })(),
          o
        );
      }
    },
    43226: function (e, t, n) {
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(56921);
      let a = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: n, wait: i = 0, sort: o }) {
        let s = async () => {
            let t = c();
            f();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let n = 0; n < t.length; n++) {
                    let { resolve: r } = t[n];
                    r?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { reject: r } = t[n];
                    r?.(e);
                  }
                });
          },
          f = () => a.delete(t),
          u = () => c().map(({ args: e }) => e),
          c = () => a.get(t) || [],
          b = (e) => a.set(t, [...c(), e]);
        return {
          flush: f,
          async schedule(e) {
            let { promise: t, resolve: a, reject: o } = (0, r.n)();
            return (
              (n?.([...u(), e]) && s(), c().length > 0)
                ? b({ args: e, resolve: a, reject: o })
                : (b({ args: e, resolve: a, reject: o }), setTimeout(s, i)),
              t
            );
          },
        };
      }
    },
    45543: function (e, t, n) {
      n.d(t, {
        DN: function () {
          return i;
        },
      });
      let r = new Map(),
        a = new Map();
      async function i(
        e,
        { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, r),
              i = t(e, a);
            return {
              clear: () => {
                n.clear(), i.clear();
              },
              promise: n,
              response: i,
            };
          })(t),
          o = i.response.get();
        if (o && n > 0 && Date.now() - o.created.getTime() < n) return o.data;
        let s = i.promise.get();
        s || ((s = e()), i.promise.set(s));
        try {
          let e = await s;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
    },
    56921: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      function r() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    69021: function (e, t, n) {
      n.d(t, {
        R: function () {
          return b;
        },
      });
      var r = n(31669),
        a = n(13169),
        i = n(93610),
        o = n(20556),
        s = n(72932),
        f = n(59455);
      async function u({ hash: e, signature: t }) {
        let r = (0, i.v)(e) ? e : (0, f.NC)(e),
          { secp256k1: a } = await n.e(1919).then(n.bind(n, 91919)),
          u = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: r, yParity: i } = t,
                o = c(Number(i ?? r));
              return new a.Signature((0, s.y_)(e), (0, s.y_)(n)).addRecoveryBit(
                o
              );
            }
            let e = (0, i.v)(t) ? t : (0, f.NC)(t);
            if (65 !== (0, o.d)(e)) throw Error("invalid signature length");
            let n = c((0, s.ly)(`0x${e.slice(130)}`));
            return a.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function c(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function b({ hash: e, signature: t }) {
        return (function (e) {
          let t = (0, a.w)(`0x${e.substring(4)}`).substring(26);
          return (0, r.x)(`0x${t}`);
        })(await u({ hash: e, signature: t }));
      }
    },
    77911: function (e, t, n) {
      n.d(t, {
        mF: function () {
          return u;
        },
      });
      var r = n(10052),
        a = n(47116),
        i = n(29625),
        o = n(4012),
        s = n(59455);
      function f(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new a.W_({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new a.W_({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...a } of e) {
          if (!(0, o.U)(n, { strict: !1 })) throw new r.b({ address: n });
          if (t[n]) throw new i.Nc({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: a, code: o } = e,
              u = {};
            if (
              (void 0 !== o && (u.code = o),
              void 0 !== t && (u.balance = (0, s.eC)(t)),
              void 0 !== n && (u.nonce = (0, s.eC)(n)),
              void 0 !== r && (u.state = f(r)),
              void 0 !== a)
            ) {
              if (u.state) throw new i.Z8();
              u.stateDiff = f(a);
            }
            return u;
          })(a);
        }
        return t;
      }
    },
    54605: function (e, t, n) {
      n.d(t, {
        F: function () {
          return f;
        },
      });
      var r = n(19775),
        a = n(75018),
        i = n(10052),
        o = n(78125),
        s = n(4012);
      function f(e) {
        let { account: t, maxFeePerGas: n, maxPriorityFeePerGas: f, to: u } = e,
          c = t ? (0, r.T)(t) : void 0;
        if (c && !(0, s.U)(c.address)) throw new i.b({ address: c.address });
        if (u && !(0, s.U)(u)) throw new i.b({ address: u });
        if (n && n > a.zL) throw new o.Hh({ maxFeePerGas: n });
        if (f && n && f > n)
          throw new o.cs({ maxFeePerGas: n, maxPriorityFeePerGas: f });
      }
    },
  },
]);
