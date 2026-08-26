"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4250],
  {
    24250: function (e, r, t) {
      t.d(r, {
        q: function () {
          return l;
        },
      });
      var o = t(81544),
        n = t(17057),
        s = t(77014),
        c = t(97564);
      let a = new (t(82061).k)(8192);
      var u = t(49287),
        i = t(31853),
        d = t(78217);
      function l(
        {
          key: e,
          methods: r,
          name: t,
          request: l,
          retryCount: b = 3,
          retryDelay: f = 150,
          timeout: h,
          type: p,
        },
        m
      ) {
        return {
          config: {
            key: e,
            methods: r,
            name: t,
            request: l,
            retryCount: b,
            retryDelay: f,
            timeout: h,
            type: p,
          },
          request: (function (e, r = {}) {
            return async (t, d = {}) => {
              let {
                  dedupe: l = !1,
                  methods: b,
                  retryDelay: f = 150,
                  retryCount: h = 3,
                  signal: p,
                  uid: m,
                } = { ...r, ...d },
                { method: w } = t;
              if (
                b?.exclude?.includes(w) ||
                (b?.include && !b.include.includes(w))
              )
                throw new s.gS(Error("method not supported"), { method: w });
              if (p?.aborted) throw (0, c.lR)(p);
              let g = l
                ? (function (e, r = 0) {
                    let t = 3735928559 ^ r,
                      o = 1103547991 ^ r;
                    for (let r = 0; r < e.length; r++) {
                      let n = e.charCodeAt(r);
                      (t = Math.imul(t ^ n, 2654435761)),
                        (o = Math.imul(o ^ n, 1597334677));
                    }
                    return (
                      (t =
                        Math.imul(t ^ (t >>> 16), 2246822507) ^
                        Math.imul(o ^ (o >>> 16), 3266489909)),
                      (
                        4294967296 *
                          (2097151 &
                            (o =
                              Math.imul(o ^ (o >>> 16), 2246822507) ^
                              Math.imul(t ^ (t >>> 16), 3266489909))) +
                        (t >>> 0)
                      ).toString(36)
                    );
                  })(`${m}.${(0, i.P)(t)}`)
                : void 0;
              return (function (e, { enabled: r = !0, id: t }) {
                if (!r || !t) return e();
                if (a.get(t)) return a.get(t);
                let o = e().finally(() => a.delete(t));
                return a.set(t, o), o;
              })(
                () =>
                  (0, u.J)(
                    async () => {
                      try {
                        return await e(t, p ? { signal: p } : void 0);
                      } catch (e) {
                        if (p?.aborted) throw (0, c.lR)(p);
                        if ((0, c.D_)(e)) throw e;
                        switch (e.code) {
                          case s.s7.code:
                            throw new s.s7(e);
                          case s.B.code:
                            throw new s.B(e);
                          case s.LX.code:
                            throw new s.LX(e, { method: t.method });
                          case s.nY.code:
                            throw new s.nY(e);
                          case s.XS.code:
                            throw new s.XS(e);
                          case s.yR.code:
                            throw new s.yR(e);
                          case s.Og.code:
                            throw new s.Og(e);
                          case s.pT.code:
                            throw new s.pT(e);
                          case s.KB.code:
                            throw new s.KB(e);
                          case s.gS.code:
                            throw new s.gS(e, { method: t.method });
                          case s.Pv.code:
                            throw new s.Pv(e);
                          case s.GD.code:
                            throw new s.GD(e);
                          case s.ab.code:
                            throw new s.ab(e);
                          case s.PE.code:
                            throw new s.PE(e);
                          case s.Ts.code:
                            throw new s.Ts(e);
                          case s.u5.code:
                            throw new s.u5(e);
                          case s.I0.code:
                            throw new s.I0(e);
                          case s.x3.code:
                            throw new s.x3(e);
                          case s.vl.code:
                            throw new s.vl(e);
                          case s.Uu.code:
                            throw new s.Uu(e);
                          case s.Nt.code:
                            throw new s.Nt(e);
                          case s.EJ.code:
                            throw new s.EJ(e);
                          case s.fl.code:
                            throw new s.fl(e);
                          case s.NO.code:
                            throw new s.NO(e);
                          case s.r0.code:
                            throw new s.r0(e);
                          case 5e3:
                            throw new s.ab(e);
                          case s.UF.code:
                            throw new s.UF(e);
                          default:
                            if (e instanceof o.G) throw e;
                            throw new s.ir(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: r }) => {
                        if (r && r instanceof n.Gg) {
                          let e = r?.headers?.get("Retry-After");
                          if (e?.match(/\d/))
                            return 1e3 * Number.parseInt(e, 10);
                        }
                        return ~~(1 << e) * f;
                      },
                      retryCount: h,
                      signal: p,
                      shouldRetry: ({ error: e }) =>
                        !(0, c.D_)(e) &&
                        ("code" in e && "number" == typeof e.code
                          ? -1 === e.code ||
                            e.code === s.Pv.code ||
                            e.code === s.XS.code ||
                            429 === e.code
                          : !(e instanceof n.Gg) ||
                            !e.status ||
                            403 === e.status ||
                            408 === e.status ||
                            413 === e.status ||
                            429 === e.status ||
                            500 === e.status ||
                            502 === e.status ||
                            503 === e.status ||
                            504 === e.status),
                    }
                  ),
                { enabled: l, id: g }
              );
            };
          })(l, { methods: r, retryCount: b, retryDelay: f, uid: (0, d.h)() }),
          value: m,
        };
      }
    },
    17057: function (e, r, t) {
      t.d(r, {
        Gg: function () {
          return c;
        },
        W5: function () {
          return i;
        },
        bs: function () {
          return u;
        },
        nv: function () {
          return a;
        },
      });
      var o = t(31853),
        n = t(81544),
        s = t(97564);
      class c extends n.G {
        constructor({
          body: e,
          cause: r,
          details: t,
          headers: n,
          status: c,
          url: a,
        }) {
          super("HTTP request failed.", {
            cause: r,
            details: t,
            metaMessages: [
              c && `Status: ${c}`,
              `URL: ${(0, s.Gr)(a)}`,
              e && `Request body: ${(0, o.P)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = n),
            (this.status = c),
            (this.url = a);
        }
      }
      class a extends n.G {
        constructor({ maxSize: e, size: r }) {
          super("HTTP response body exceeded the size limit.", {
            metaMessages: [`Max: ${e} bytes`, `Received: ${r} bytes`],
            name: "ResponseBodyTooLargeError",
          }),
            Object.defineProperty(this, "maxSize", {
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
            (this.maxSize = e),
            (this.size = r);
        }
      }
      class u extends n.G {
        constructor({ body: e, error: r, url: t }) {
          super("RPC Request failed.", {
            cause: r,
            details: r.message,
            metaMessages: [
              `URL: ${(0, s.Gr)(t)}`,
              `Request body: ${(0, o.P)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
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
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = r.code),
            (this.data = r.data),
            (this.url = t);
        }
      }
      class i extends n.G {
        constructor({ body: e, url: r }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, s.Gr)(r)}`,
              `Request body: ${(0, o.P)(e)}`,
            ],
            name: "TimeoutError",
          }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.url = r);
        }
      }
    },
    77014: function (e, r, t) {
      t.d(r, {
        B: function () {
          return u;
        },
        EJ: function () {
          return T;
        },
        GD: function () {
          return g;
        },
        I0: function () {
          return O;
        },
        KB: function () {
          return p;
        },
        LX: function () {
          return i;
        },
        NO: function () {
          return q;
        },
        Nt: function () {
          return j;
        },
        Og: function () {
          return f;
        },
        PE: function () {
          return y;
        },
        Pv: function () {
          return w;
        },
        Ts: function () {
          return P;
        },
        UF: function () {
          return N;
        },
        Uu: function () {
          return M;
        },
        XS: function () {
          return l;
        },
        ab: function () {
          return v;
        },
        fl: function () {
          return S;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return D;
        },
        nY: function () {
          return d;
        },
        pT: function () {
          return h;
        },
        r0: function () {
          return U;
        },
        s7: function () {
          return a;
        },
        u5: function () {
          return R;
        },
        vl: function () {
          return x;
        },
        x3: function () {
          return E;
        },
        yR: function () {
          return b;
        },
      });
      var o = t(81544),
        n = t(17057);
      class s extends o.G {
        constructor(
          e,
          { code: r, docsPath: t, metaMessages: o, name: s, shortMessage: c }
        ) {
          super(c, {
            cause: e,
            docsPath: t,
            metaMessages: o || e?.metaMessages,
            name: s || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = s || e.name),
            (this.code = e instanceof n.bs ? e.code : r ?? -1);
        }
      }
      class c extends s {
        constructor(e, r) {
          super(e, r),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = r.data);
        }
      }
      class a extends s {
        constructor(e) {
          super(e, {
            code: a.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(a, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class u extends s {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class i extends s {
        constructor(e, { method: r } = {}) {
          super(e, {
            code: i.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              r ? ` "${r}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class d extends s {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class l extends s {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class b extends s {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends s {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class h extends s {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class p extends s {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends s {
        constructor(e, { method: r } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${r ? ` "${r}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class w extends s {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends s {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends c {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class y extends c {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class P extends c {
        constructor(e, { method: r } = {}) {
          super(e, {
            code: P.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              r ? ` " ${r}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class R extends c {
        constructor(e) {
          super(e, {
            code: R.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(R, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class O extends c {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends c {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class x extends c {
        constructor(e) {
          super(e, {
            code: x.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class M extends c {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class j extends c {
        constructor(e) {
          super(e, {
            code: j.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(j, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class T extends c {
        constructor(e) {
          super(e, {
            code: T.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(T, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class S extends c {
        constructor(e) {
          super(e, {
            code: S.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(S, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class q extends c {
        constructor(e) {
          super(e, {
            code: q.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(q, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class U extends c {
        constructor(e) {
          super(e, {
            code: U.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(U, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class N extends c {
        constructor(e) {
          super(e, {
            code: N.code,
            name: "WalletConnectSessionSettlementError",
            shortMessage: "WalletConnect session settlement failed.",
          });
        }
      }
      Object.defineProperty(N, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 7e3,
      });
      class D extends s {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    97564: function (e, r, t) {
      t.d(r, {
        CR: function () {
          return o;
        },
        D_: function () {
          return s;
        },
        Gr: function () {
          return c;
        },
        lR: function () {
          return n;
        },
      });
      let o = (e) => e;
      function n(e) {
        if (e?.reason) return e.reason;
        if ("function" == typeof DOMException)
          return new DOMException("This operation was aborted", "AbortError");
        let r = Error("This operation was aborted");
        return (r.name = "AbortError"), r;
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "name" in e &&
          "AbortError" === e.name
        );
      }
      let c = (e) => {
        try {
          let r = new URL(e);
          if (!r.username && !r.password) return e;
          return (r.username = ""), (r.password = ""), r.toString();
        } catch {
          return e;
        }
      };
    },
    49287: function (e, r, t) {
      t.d(r, {
        J: function () {
          return s;
        },
      });
      var o = t(97564),
        n = t(33457);
      function s(
        e,
        {
          delay: r = 100,
          retryCount: t = 2,
          shouldRetry: s = () => !0,
          signal: c,
        } = {}
      ) {
        return new Promise((a, u) => {
          let i = async ({ count: d = 0 } = {}) => {
            if (c?.aborted) {
              u((0, o.lR)(c));
              return;
            }
            let l = async ({ error: e }) => {
              let t = "function" == typeof r ? r({ count: d, error: e }) : r;
              if (t)
                try {
                  await (0, n.D)(t, { signal: c });
                } catch (e) {
                  u(e);
                  return;
                }
              return i({ count: d + 1 });
            };
            try {
              let r = await e();
              a(r);
            } catch (e) {
              if (c?.aborted) {
                u((0, o.lR)(c));
                return;
              }
              if ((0, o.D_)(e)) {
                u(e);
                return;
              }
              if (d < t && (await s({ count: d, error: e })))
                return l({ error: e });
              u(e);
            }
          };
          i().catch(u);
        });
      }
    },
    31853: function (e, r, t) {
      t.d(r, {
        P: function () {
          return o;
        },
      });
      let o = (e, r, t) =>
        JSON.stringify(
          e,
          (e, t) => {
            let o = "bigint" == typeof t ? t.toString() : t;
            return "function" == typeof r ? r(e, o) : o;
          },
          t
        );
    },
    78217: function (e, r, t) {
      let o;
      t.d(r, {
        h: function () {
          return s;
        },
      });
      let n = 256;
      function s(e = 11) {
        if (!o || n + e > 512) {
          (o = ""), (n = 0);
          for (let e = 0; e < 256; e++)
            o += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return o.substring(n, n++ + e);
      }
    },
    33457: function (e, r, t) {
      t.d(r, {
        D: function () {
          return n;
        },
      });
      var o = t(97564);
      async function n(e, { signal: r } = {}) {
        return new Promise((t, n) => {
          if (r?.aborted) {
            n((0, o.lR)(r));
            return;
          }
          let s = () => r?.removeEventListener("abort", a),
            c = setTimeout(() => {
              s(), t();
            }, e),
            a = () => {
              clearTimeout(c), s(), n((0, o.lR)(r));
            };
          r?.addEventListener("abort", a, { once: !0 });
        });
      }
    },
  },
]);
