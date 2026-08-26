"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7283],
  {
    1678: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(45841);
      function o(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, r.P)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, r.P)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, r.P)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, r.P)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, r.P)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    45841: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var r = n(64020);
      let o = /^tuple(?<array>(\[(\d*)\])*)$/;
      function i(e) {
        let t = "",
          n = e.length;
        for (let i = 0; i < n; i++)
          (t += (function e(t) {
            let n = t.type;
            if (o.test(t.type) && "components" in t) {
              n = "(";
              let i = t.components.length;
              for (let r = 0; r < i; r++)
                (n += e(t.components[r])), r < i - 1 && (n += ", ");
              let u = (0, r.Zw)(o, t.type);
              return (n += `)${u?.array || ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[i])),
            i !== n - 1 && (t += ", ");
        return t;
      }
    },
    64020: function (e, t, n) {
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, {
        Zw: function () {
          return r;
        },
        cN: function () {
          return u;
        },
        eL: function () {
          return o;
        },
        lh: function () {
          return i;
        },
      });
      let o = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        u = /^\(.+?\).*?$/;
    },
    65531: function (e, t, n) {
      n.d(t, {
        CI: function () {
          return B;
        },
        FM: function () {
          return m;
        },
        Gy: function () {
          return I;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return l;
        },
        MS: function () {
          return h;
        },
        MX: function () {
          return $;
        },
        Mi: function () {
          return S;
        },
        S4: function () {
          return A;
        },
        SM: function () {
          return E;
        },
        Zh: function () {
          return f;
        },
        cO: function () {
          return s;
        },
        dh: function () {
          return M;
        },
        eF: function () {
          return x;
        },
        fM: function () {
          return u;
        },
        fs: function () {
          return p;
        },
        gr: function () {
          return d;
        },
        hn: function () {
          return G;
        },
        lC: function () {
          return b;
        },
        mv: function () {
          return g;
        },
        wM: function () {
          return P;
        },
        wb: function () {
          return c;
        },
        xB: function () {
          return a;
        },
        xL: function () {
          return v;
        },
        yP: function () {
          return y;
        },
      });
      var r = n(7275),
        o = n(20556),
        i = n(81544);
      class u extends i.G {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class s extends i.G {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      class a extends i.G {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class c extends i.G {
        constructor({ cause: e } = {}) {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
            cause: e,
          });
        }
      }
      class d extends i.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class l extends i.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, o.d)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class p extends i.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class f extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class h extends i.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class y extends i.G {
        constructor(e, { docsPath: t, cause: n }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError", cause: n }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class m extends i.G {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class b extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends i.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends i.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class $ extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class A extends i.G {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.t)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.t)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class w extends i.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class E extends i.G {
        constructor({ abiItem: e, data: t, params: n, size: o }) {
          super(
            `Data size of ${o} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.h)(n, { includeName: !0 })})`,
                `Data:   ${t} (${o} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = o);
        }
      }
      class I extends i.G {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.t)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class M extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class B extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class G extends i.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class P extends i.G {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      class S extends i.G {
        constructor(e) {
          super(`Type "${e}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType",
          });
        }
      }
    },
    30056: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
        S: function () {
          return m;
        },
      });
      var r = n(65531),
        o = n(10052),
        i = n(81544),
        u = n(63152),
        s = n(4012),
        a = n(89256),
        c = n(8796),
        d = n(20556),
        l = n(69921),
        p = n(59455),
        f = n(23251);
      function h(e, t) {
        if (e.length !== t.length)
          throw new r.fs({ expectedLength: e.length, givenLength: t.length });
        return y(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let h = 0; h < e.length; h++)
              n.push(
                (function e({ param: t, value: n }) {
                  let h = m(t.type);
                  if (h) {
                    let [o, i] = h;
                    return (function (t, { length: n, param: o }) {
                      let i = null === n;
                      if (!Array.isArray(t)) throw new r.hn(t);
                      if (!i && t.length !== n)
                        throw new r.gr({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${o.type}[${n}]`,
                        });
                      let u =
                          0 === t.length &&
                          (function e(t) {
                            let { type: n } = t;
                            if (
                              "string" === n ||
                              "bytes" === n ||
                              n.endsWith("[]")
                            )
                              return !0;
                            if ("tuple" === n) return t.components.some(e);
                            let r = m(n);
                            return !!r && e({ ...t, type: r[1] });
                          })(o),
                        s = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: o, value: t[n] });
                        r.dynamic && (u = !0), s.push(r);
                      }
                      if (i || u) {
                        let e = y(s);
                        if (i) {
                          let t = (0, p.eC)(s.length, { size: 32 });
                          return { dynamic: !0, encoded: (0, a.SM)([t, e]) };
                        }
                        if (u) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, a.SM)(s.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: o, param: { ...t, type: i } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        o = [];
                      for (let i = 0; i < n.components.length; i++) {
                        let u = n.components[i],
                          s = Array.isArray(t) ? i : u.name,
                          a = e({ param: u, value: t[s] });
                        o.push(a), a.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? y(o)
                          : (0, a.SM)(o.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type)
                    return (function (e) {
                      if (!(0, s.U)(e)) throw new o.b({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e.toLowerCase()),
                      };
                    })(n);
                  if ("bool" === t.type)
                    return (function (e) {
                      if ("boolean" != typeof e)
                        throw new i.G(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, c.gc)((0, p.C4)(e)) };
                    })(n);
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , r = "256"] = f.lh.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          o = t ? -r - 1n : 0n;
                        if (e > r || e < o)
                          throw new u.J5({
                            max: r.toString(),
                            min: o.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, p.eC)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        o = (0, d.d)(e);
                      if (!n) {
                        let t = e;
                        return (
                          o % 32 != 0 &&
                            (t = (0, c.gc)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, a.SM)([
                              (0, c.gc)((0, p.eC)(o, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (o !== Number.parseInt(n, 10))
                        throw new r.M4({
                          expectedSize: Number.parseInt(n, 10),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type)
                    return (function (e) {
                      let t = (0, p.$G)(e),
                        n = Math.ceil((0, d.d)(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++)
                        r.push(
                          (0, c.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, a.SM)([
                          (0, c.gc)((0, p.eC)((0, d.d)(t), { size: 32 })),
                          ...r,
                        ]),
                      };
                    })(n);
                  throw new r.dh(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[h], value: t[h] })
              );
            return n;
          })({ params: e, values: t })
        );
      }
      function y(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: o } = e[n];
          r ? (t += 32) : (t += (0, d.d)(o));
        }
        let n = [],
          r = [],
          o = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: u, encoded: s } = e[i];
          u
            ? (n.push((0, p.eC)(t + o, { size: 32 })),
              r.push(s),
              (o += (0, d.d)(s)))
            : n.push(s);
        }
        return (0, a.SM)([...n, ...r]);
      }
      function m(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    17283: function (e, t, n) {
      n.d(t, {
        R: function () {
          return d;
        },
      });
      var r = n(89256),
        o = n(30056),
        i = n(65531),
        u = n(10464),
        s = n(7275),
        a = n(64043);
      let c = "/docs/contract/encodeFunctionData";
      function d(e) {
        let { args: t } = e,
          { abi: n, functionName: d } =
            1 === e.abi.length && e.functionName?.startsWith("0x")
              ? e
              : (function (e) {
                  let { abi: t, args: n, functionName: r } = e,
                    o = t[0];
                  if (r) {
                    let e = (0, a.mE)({ abi: t, args: n, name: r });
                    if (!e) throw new i.xL(r, { docsPath: c });
                    o = e;
                  }
                  if ("function" !== o.type)
                    throw new i.xL(void 0, { docsPath: c });
                  return { abi: [o], functionName: (0, u.C)((0, s.t)(o)) };
                })(e),
          l = n[0],
          p = "inputs" in l && l.inputs ? (0, o.E)(l.inputs, t ?? []) : void 0;
        return (0, r.SM)([d, p ?? "0x"]);
      }
    },
    7275: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
        t: function () {
          return o;
        },
      });
      var r = n(65531);
      function o(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.wM(e.type);
        return `${e.name}(${i(e.inputs, { includeName: t })})`;
      }
      function i(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${i(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    64043: function (e, t, n) {
      n.d(t, {
        mE: function () {
          return a;
        },
      });
      var r = n(65531),
        o = n(93610),
        i = n(4012),
        u = n(45392),
        s = n(10464);
      function a(e) {
        let t;
        let { abi: n, args: a = [], name: c } = e,
          d = (0, o.v)(c, { strict: !1 }),
          l = n.filter((e) =>
            d
              ? "function" === e.type
                ? (0, s.C)(e) === c
                : "event" === e.type && (0, u.n)(e) === c
              : "name" in e && e.name === c
          );
        if (0 !== l.length) {
          if (1 === l.length) return l[0];
          for (let e of l)
            if ("inputs" in e) {
              if (!a || 0 === a.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === a.length &&
                a.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        o = n.type;
                      switch (o) {
                        case "address":
                          return (0, i.U)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === o && "components" in n)
                            return Object.values(n.components).every(
                              (n, o) =>
                                "object" === r && e(Object.values(t)[o], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              o
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: o.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let o in t) {
                      let u = t[o],
                        s = n[o];
                      if (
                        "tuple" === u.type &&
                        "tuple" === s.type &&
                        "components" in u &&
                        "components" in s
                      )
                        return e(u.components, s.components, r[o]);
                      let a = [u.type, s.type];
                      if (
                        (a.includes("address") && a.includes("bytes20")) ||
                        (((a.includes("address") && a.includes("string")) ||
                          (a.includes("address") && a.includes("bytes"))) &&
                          (0, i.U)(r[o], { strict: !1 }))
                      )
                        return a;
                    }
                  })(e.inputs, t.inputs, a);
                  if (n)
                    throw new r.S4(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          return t || l[0];
        }
      }
    },
    45392: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = n(40176).r;
    },
    10464: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var r = n(69921),
        o = n(40176);
      let i = (e) => (0, r.tP)((0, o.r)(e), 0, 4);
    },
    40176: function (e, t, n) {
      n.d(t, {
        r: function () {
          return c;
        },
      });
      var r = n(44659),
        o = n(13169);
      let i = (e) => (0, o.w)((0, r.O0)(e));
      var u = n(1678),
        s = n(81544);
      let a = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            r = 0,
            o = "",
            i = !1;
          for (let u = 0; u < e.length; u++) {
            let s = e[u];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && r++,
              ")" === s && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === s && ["event", "function", ""].includes(o)) o = "";
                else if (((o += s), ")" === s)) {
                  i = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[u - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (o += s), (n += s);
            }
          }
          if (!i) throw new s.G("Unable to normalize signature.");
          return o;
        })("string" == typeof e ? e : (0, u.t)(e));
      function c(e) {
        return i(a(e));
      }
    },
    23251: function (e, t, n) {
      n.d(t, {
        Ow: function () {
          return r;
        },
        eL: function () {
          return o;
        },
        lh: function () {
          return i;
        },
      });
      let r = /^(.*)\[([0-9]*)\]$/,
        o = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
  },
]);
