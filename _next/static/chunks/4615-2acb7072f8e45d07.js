"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4615],
  {
    6458: function (e, t, a) {
      a.d(t, {
        C: function () {
          return l;
        },
        X: function () {
          return c;
        },
      });
      var n = a(4496),
        r = a(82645),
        i = a(96174),
        o = a(74587),
        s = a(25283);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let {
            block: a,
            chain: c = e.chain,
            request: l,
            type: u = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: a, client: e, request: l })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new n.Fz();
        let f = 10 ** (d.toString().split(".")[1]?.length ?? 0),
          h = (e) => (e * BigInt(Math.round(d * f))) / BigInt(f),
          p = a || (await (0, r.s)(e, o.Q, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: a,
            client: e,
            multiply: h,
            request: l,
            type: u,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === u) {
          if ("bigint" != typeof p.baseFeePerGas) throw new n.e5();
          let t =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await (0, i.h)(e, { block: p, chain: c, request: l }),
            a = h(p.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? a + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? h(await (0, r.s)(e, s.o, "getGasPrice")({})),
        };
      }
    },
    8741: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return b;
        },
      });
      var n = a(19775),
        r = a(81544),
        i = a(55834),
        o = a(59455),
        s = a(71282),
        c = a(29707),
        l = a(63228);
      class u extends r.G {
        constructor(
          e,
          {
            account: t,
            docsPath: a,
            chain: n,
            data: r,
            gas: i,
            gasPrice: o,
            maxFeePerGas: u,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: a,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, l.xr)({
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, s.d)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: r,
                gas: i,
                gasPrice: void 0 !== o && `${(0, c.o)(o)} gwei`,
                maxFeePerGas: void 0 !== u && `${(0, c.o)(u)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.o)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
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
      var d = a(78125),
        f = a(18856),
        h = a(70878),
        p = a(92614),
        m = a(77911),
        y = a(54605),
        g = a(34467);
      async function b(e, t) {
        let { account: a = e.account, prepare: s = !0 } = t,
          c = a ? (0, n.T)(a) : void 0,
          l = Array.isArray(s)
            ? s
            : c?.type !== "local"
            ? ["blobVersionedHashes"]
            : void 0;
        try {
          let a = await (async () =>
              t.to
                ? t.to
                : t.authorizationList && t.authorizationList.length > 0
                ? await (0, i.z)({
                    authorization: t.authorizationList[0],
                  }).catch(() => {
                    throw new r.G(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)(),
            {
              accessList: n,
              authorizationList: u,
              blobs: d,
              blobVersionedHashes: f,
              blockNumber: b,
              blockTag: w,
              data: P,
              gas: v,
              gasPrice: F,
              maxFeePerBlobGas: k,
              maxFeePerGas: x,
              maxPriorityFeePerGas: G,
              nonce: T,
              value: B,
              stateOverride: N,
              ...A
            } = s ? await (0, g.ZE)(e, { ...t, parameters: l, to: a }) : t;
          if (v && t.gas !== v) return v;
          let q = ("bigint" == typeof b ? (0, o.eC)(b) : void 0) || w,
            S = (0, m.mF)(N);
          (0, y.F)(t);
          let E = e.chain?.formatters?.transactionRequest?.format,
            _ = (E || p.tG)(
              {
                ...(0, h.K)(A, { format: E }),
                account: c,
                accessList: n,
                authorizationList: u,
                blobs: d,
                blobVersionedHashes: f,
                data: P,
                gasPrice: F,
                maxFeePerBlobGas: k,
                maxFeePerGas: x,
                maxPriorityFeePerGas: G,
                nonce: T,
                to: a,
                value: B,
              },
              "estimateGas"
            );
          return BigInt(
            await e.request({
              method: "eth_estimateGas",
              params: S
                ? [_, q ?? e.experimental_blockTag ?? "latest", S]
                : q
                ? [_, q]
                : [_],
            })
          );
        } catch (a) {
          throw (function (e, { docsPath: t, ...a }) {
            return new u(
              (() => {
                let t = (0, f.k)(e, a);
                return t instanceof d.cj ? e : t;
              })(),
              { docsPath: t, ...a }
            );
          })(a, { ...t, account: c, chain: e.chain });
        }
      }
    },
    96174: function (e, t, a) {
      a.d(t, {
        _: function () {
          return c;
        },
        h: function () {
          return l;
        },
      });
      var n = a(4496),
        r = a(72932),
        i = a(82645),
        o = a(74587),
        s = a(25283);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let { block: a, chain: c = e.chain, request: l } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = a || (await (0, i.s)(e, o.Q, "getBlock")({})),
              r = await t({ block: n, client: e, request: l });
            if (null === r) throw Error();
            return r;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, r.y_)(n);
        } catch {
          let [t, r] = await Promise.all([
            a ? Promise.resolve(a) : (0, i.s)(e, o.Q, "getBlock")({}),
            (0, i.s)(e, s.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.e5();
          let c = r - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    332: function (e, t, a) {
      a.d(t, {
        b: function () {
          return p;
        },
      });
      var n = a(19775),
        r = a(4496),
        i = a(63228),
        o = a(93606),
        s = a(70878),
        c = a(27481),
        l = a(92614),
        u = a(82645),
        d = a(54605),
        f = a(74587),
        h = a(12363);
      async function p(e, t) {
        let {
            account: a = e.account,
            accessList: p,
            authorizationList: m,
            chain: y = e.chain,
            blobVersionedHashes: g,
            blobs: b,
            data: w,
            gas: P,
            gasPrice: v,
            maxFeePerBlobGas: F,
            maxFeePerGas: k,
            maxPriorityFeePerGas: x,
            nonce: G,
            nonceManager: T,
            to: B,
            type: N,
            value: A,
            ...q
          } = t,
          S = await (async () => {
            if (!a || !T || void 0 !== G) return G;
            let t = (0, n.T)(a),
              r = y ? y.id : await (0, u.s)(e, h.L, "getChainId")({});
            return await T.consume({
              address: t.address,
              chainId: r,
              client: e,
            });
          })();
        (0, d.F)(t);
        let E = y?.formatters?.transactionRequest?.format,
          _ = (E || l.tG)(
            {
              ...(0, s.K)(q, { format: E }),
              account: a ? (0, n.T)(a) : void 0,
              accessList: p,
              authorizationList: m,
              blobs: b,
              blobVersionedHashes: g,
              data: w,
              gas: P,
              gasPrice: v,
              maxFeePerBlobGas: F,
              maxFeePerGas: k,
              maxPriorityFeePerGas: x,
              nonce: S,
              to: B,
              type: N,
              value: A,
            },
            "fillTransaction"
          );
        try {
          let a = await e.request({
              method: "eth_fillTransaction",
              params: [_],
            }),
            n = (y?.formatters?.transaction?.format || c.Tr)(a.tx);
          delete n.blockHash,
            delete n.blockNumber,
            delete n.r,
            delete n.s,
            delete n.transactionIndex,
            delete n.v,
            delete n.yParity,
            (n.data = n.input);
          let o =
            void 0 !== n.feePayerSignature && null !== n.feePayerSignature;
          if (o && void 0 !== S && n.nonce !== S)
            throw new i.xf({ filledNonce: n.nonce, requestedNonce: S });
          if (!o) {
            n.gas && (n.gas = t.gas ?? n.gas),
              n.gasPrice && (n.gasPrice = t.gasPrice ?? n.gasPrice),
              n.maxFeePerBlobGas &&
                (n.maxFeePerBlobGas = t.maxFeePerBlobGas ?? n.maxFeePerBlobGas),
              n.maxFeePerGas &&
                (n.maxFeePerGas = t.maxFeePerGas ?? n.maxFeePerGas),
              n.maxPriorityFeePerGas &&
                (n.maxPriorityFeePerGas =
                  t.maxPriorityFeePerGas ?? n.maxPriorityFeePerGas),
              void 0 !== n.nonce && (n.nonce = t.nonce ?? n.nonce);
            let a = await (async () => {
              if ("function" == typeof y?.fees?.baseFeeMultiplier) {
                let a = await (0, u.s)(e, f.Q, "getBlock")({});
                return y.fees.baseFeeMultiplier({
                  block: a,
                  client: e,
                  request: t,
                });
              }
              return y?.fees?.baseFeeMultiplier ?? 1.2;
            })();
            if (a < 1) throw new r.Fz();
            let i = a.toString().split(".")[1]?.length ?? 0,
              o = 10 ** i,
              s = (e) => (e * BigInt(Math.round(a * o))) / BigInt(o);
            n.maxFeePerGas &&
              !t.maxFeePerGas &&
              (n.maxFeePerGas = s(n.maxFeePerGas)),
              n.gasPrice && !t.gasPrice && (n.gasPrice = s(n.gasPrice));
          }
          return {
            raw: a.raw,
            transaction: { from: _.from, ...n },
            ...(a.capabilities ? { capabilities: a.capabilities } : {}),
          };
        } catch (a) {
          throw (0, o.$)(a, { ...t, chain: e.chain });
        }
      }
    },
    74587: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return o;
        },
      });
      var n = a(12197),
        r = a(59455),
        i = a(59069);
      async function o(
        e,
        {
          blockHash: t,
          blockNumber: a,
          blockTag: o = e.experimental_blockTag ?? "latest",
          includeTransactions: s,
        } = {}
      ) {
        let c = s ?? !1,
          l = void 0 !== a ? (0, r.eC)(a) : void 0,
          u = null;
        if (
          !(u = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, c] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [l || o, c] },
                { dedupe: !!l }
              ))
        )
          throw new n.f({ blockHash: t, blockNumber: a });
        return (e.chain?.formatters?.block?.format || i.Z)(u, "getBlock");
      }
    },
    79508: function (e, t, a) {
      a.d(t, {
        z: function () {
          return i;
        },
      });
      var n = a(45543);
      let r = (e) => `blockNumber.${e}`;
      async function i(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await (0, n.DN)(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: r(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    12363: function (e, t, a) {
      a.d(t, {
        L: function () {
          return r;
        },
      });
      var n = a(72932);
      async function r(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ly)(t);
      }
    },
    25283: function (e, t, a) {
      a.d(t, {
        o: function () {
          return n;
        },
      });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    39277: function (e, t, a) {
      a.d(t, {
        f: function () {
          return o;
        },
      });
      var n = a(63228),
        r = a(59455),
        i = a(27481);
      async function o(
        e,
        {
          blockHash: t,
          blockNumber: a,
          blockTag: o,
          hash: s,
          index: c,
          sender: l,
          nonce: u,
        }
      ) {
        let d = o || "latest",
          f = void 0 !== a ? (0, r.eC)(a) : void 0,
          h = null;
        if (
          (s
            ? (h = await e.request(
                { method: "eth_getTransactionByHash", params: [s] },
                { dedupe: !0 }
              ))
            : t
            ? (h = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, r.eC)(c)],
                },
                { dedupe: !0 }
              ))
            : (f || d) && "number" == typeof c
            ? (h = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [f || d, (0, r.eC)(c)],
                },
                { dedupe: !!f }
              ))
            : l &&
              "number" == typeof u &&
              (h = await e.request(
                {
                  method: "eth_getTransactionBySenderAndNonce",
                  params: [l, (0, r.eC)(u)],
                },
                { dedupe: !0 }
              )),
          !h)
        )
          throw new n.Bh({
            blockHash: t,
            blockNumber: a,
            blockTag: d,
            hash: s,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.Tr)(
          h,
          "getTransaction"
        );
      }
    },
    16689: function (e, t, a) {
      a.d(t, {
        K: function () {
          return i;
        },
      });
      var n = a(98193),
        r = a(72932);
      async function i(
        e,
        {
          address: t,
          blockHash: a,
          blockNumber: i,
          blockTag: o = "latest",
          requireCanonical: s,
        }
      ) {
        let c = (0, n.G)({
            blockHash: a,
            blockNumber: i,
            blockTag: o,
            requireCanonical: s,
          }),
          l = await e.request(
            { method: "eth_getTransactionCount", params: [t, c] },
            { dedupe: "bigint" == typeof i || void 0 !== a }
          );
        return (0, r.ly)(l);
      }
    },
    78526: function (e, t, a) {
      a.d(t, {
        a: function () {
          return i;
        },
      });
      var n = a(63228),
        r = a(13550);
      async function i(e, { hash: t }) {
        let a = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!a) throw new n.Yb({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || r.fA)(
          a,
          "getTransactionReceipt"
        );
      }
    },
    94797: function (e, t, a) {
      a.d(t, {
        A: function () {
          return y;
        },
      });
      var n = a(98158),
        r = a(45434),
        i = a(65531),
        o = a(81544),
        s = a(20010),
        c = a(65436),
        l = a(17283),
        u = a(93627),
        d = a(34180),
        f = a(82645),
        h = a(43226),
        p = a(31853),
        m = a(28766);
      async function y(e, t) {
        let {
            account: a,
            authorizationList: h,
            allowFailure: p = !0,
            blockHash: y,
            blockNumber: b,
            blockOverrides: w,
            blockTag: P,
            requireCanonical: v,
            stateOverride: F,
          } = t,
          k = t.contracts,
          x = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          G = t.batchSize ?? x.batchSize ?? 1024,
          T = t.deployless ?? x.deployless ?? !1,
          B = (() => {
            if (t.multicallAddress) return t.multicallAddress;
            if (T) return null;
            if (e.chain)
              return (0, u.L)({
                blockNumber: b,
                chain: e.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          N = [[]],
          A = 0,
          q = 0;
        for (let e = 0; e < k.length; e++) {
          let { abi: t, address: n, args: r, functionName: i } = k[e];
          try {
            let e = (0, l.R)({ abi: t, args: r, functionName: i });
            (q += (e.length - 2) / 2),
              G > 0 &&
                q > G &&
                N[A].length > 0 &&
                (A++, (q = (e.length - 2) / 2), (N[A] = [])),
              (N[A] = [...N[A], { allowFailure: !0, callData: e, target: n }]);
          } catch (o) {
            let e = (0, d.S)(o, {
              abi: t,
              address: n,
              args: r,
              docsPath: "/docs/contract/multicall",
              functionName: i,
              sender: a,
            });
            if (!p) throw e;
            N[A] = [...N[A], { allowFailure: !0, callData: "0x", target: n }];
          }
        }
        let S = !!e.batch?.multicall,
          E = S ? N.flatMap((e) => e.map((e) => [e])) : N,
          _ = await Promise.allSettled(
            E.map((t) =>
              S
                ? g(e, {
                    account: a,
                    authorizationList: h,
                    batchSize: G,
                    blockHash: y,
                    blockNumber: b,
                    blockOverrides: w,
                    blockTag: P,
                    call: t[0],
                    multicallAddress: B,
                    requireCanonical: v,
                    stateOverride: F,
                  }).then((e) => [e])
                : (0, f.s)(
                    e,
                    m.L,
                    "readContract"
                  )({
                    ...(null === B ? { code: r.xd } : { address: B }),
                    abi: n.F8,
                    account: a,
                    args: [t],
                    authorizationList: h,
                    blockHash: y,
                    blockNumber: b,
                    blockOverrides: w,
                    blockTag: P,
                    functionName: "aggregate3",
                    requireCanonical: v,
                    stateOverride: F,
                  })
            )
          ),
          I = [];
        for (let e = 0; e < _.length; e++) {
          let t = _[e];
          if ("rejected" === t.status) {
            if (!p) throw t.reason;
            for (let a = 0; a < E[e].length; a++)
              I.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let a = t.value;
          for (let t = 0; t < a.length; t++) {
            let { returnData: n, success: r } = a[t],
              { callData: o } = E[e][t],
              { abi: l, address: u, functionName: f, args: h } = k[I.length];
            try {
              if ("0x" === o) throw new i.wb();
              if (!r) throw new s.VQ({ data: n });
              let e = (0, c.k)({ abi: l, args: h, data: n, functionName: f });
              I.push(p ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, d.S)(t, {
                abi: l,
                address: u,
                args: h,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!p) throw e;
              I.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (I.length !== k.length) throw new o.G("multicall results mismatch");
        return I;
      }
      async function g(e, t) {
        let { batchSize: a, call: i, multicallAddress: o, ...s } = t,
          { wait: c = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          { schedule: l } = (0, h.S)({
            id: (0, p.P)(["multicall", e.uid, a, o, s]),
            wait: c,
            shouldSplitBatch: (e) =>
              0 !== a &&
              e.reduce((e, { callData: t }) => e + (t.length - 2) / 2, 0) > a,
            fn: (t) =>
              (0, f.s)(
                e,
                m.L,
                "readContract"
              )({
                ...(null === o ? { code: r.xd } : { address: o }),
                ...s,
                abi: n.F8,
                args: [t],
                functionName: "aggregate3",
              }),
          }),
          [u] = await l(i);
        return u;
      }
    },
    67348: function (e, t, a) {
      a.d(t, {
        e: function () {
          return p;
        },
      });
      var n = a(12197),
        r = a(63228),
        i = a(82645),
        o = a(36478),
        s = a(56921),
        c = a(49287),
        l = a(31853),
        u = a(74587),
        d = a(39277),
        f = a(78526),
        h = a(99376);
      async function p(e, t) {
        let a, p, m, y, g;
        let {
            checkReplacement: b = e.chain
              ?.supportsTransactionReplacementDetection ?? !0,
            confirmations: w = 1,
            hash: P,
            onReplaced: v,
            retryCount: F = 6,
            retryDelay: k = ({ count: e }) => 200 * ~~(1 << e),
            timeout: x = 18e4,
          } = t,
          G = (0, l.P)(["waitForTransactionReceipt", e.uid, P]),
          T = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          B = !1,
          { promise: N, resolve: A, reject: q } = (0, s.n)(),
          S = x
            ? setTimeout(() => {
                g?.(), y?.(), q(new r.mc({ hash: P }));
              }, x)
            : void 0;
        return (
          (y = (0, o.N7)(
            G,
            { onReplaced: v, resolve: A, reject: q },
            async (t) => {
              if (
                (m = await (0, i.s)(
                  e,
                  f.a,
                  "getTransactionReceipt"
                )({ hash: P }).catch(() => void 0)) &&
                w <= 1
              ) {
                clearTimeout(S), t.resolve(m), y?.();
                return;
              }
              g = (0, i.s)(
                e,
                h.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: T,
                async onBlockNumber(o) {
                  let s = (e) => {
                      clearTimeout(S), g?.(), e(), y?.();
                    },
                    l = o;
                  if (!B)
                    try {
                      if (m) {
                        if (
                          w > 1 &&
                          (!m.blockNumber || l - m.blockNumber + 1n < w)
                        )
                          return;
                        s(() => t.resolve(m));
                        return;
                      }
                      if (
                        (b &&
                          !a &&
                          ((B = !0),
                          await (0, c.J)(
                            async () => {
                              (a = await (0, i.s)(
                                e,
                                d.f,
                                "getTransaction"
                              )({ hash: P })).blockNumber &&
                                (l = a.blockNumber);
                            },
                            { delay: k, retryCount: F }
                          ),
                          (B = !1)),
                        (m = await (0, i.s)(
                          e,
                          f.a,
                          "getTransactionReceipt"
                        )({ hash: P })),
                        w > 1 && (!m.blockNumber || l - m.blockNumber + 1n < w))
                      )
                        return;
                      s(() => t.resolve(m));
                    } catch (o) {
                      if (o instanceof r.Bh || o instanceof r.Yb) {
                        if (!a) {
                          B = !1;
                          return;
                        }
                        try {
                          (p = a), (B = !0);
                          let r = await (0, c.J)(
                            () =>
                              (0, i.s)(
                                e,
                                u.Q,
                                "getBlock"
                              )({ blockNumber: l, includeTransactions: !0 }),
                            {
                              delay: k,
                              retryCount: F,
                              shouldRetry: ({ error: e }) => e instanceof n.f,
                            }
                          );
                          B = !1;
                          let o = r.transactions.find(
                            ({ from: e, nonce: t }) =>
                              e === p.from && t === p.nonce
                          );
                          if (
                            !o ||
                            ((m = await (0, i.s)(
                              e,
                              f.a,
                              "getTransactionReceipt"
                            )({ hash: o.hash })),
                            w > 1 &&
                              (!m.blockNumber || l - m.blockNumber + 1n < w))
                          )
                            return;
                          let d = "replaced";
                          o.to === p.to &&
                          o.value === p.value &&
                          o.input === p.input
                            ? (d = "repriced")
                            : o.from === o.to &&
                              0n === o.value &&
                              (d = "cancelled"),
                            s(() => {
                              t.onReplaced?.({
                                reason: d,
                                replacedTransaction: p,
                                transaction: o,
                                transactionReceipt: m,
                              }),
                                t.resolve(m);
                            });
                        } catch (e) {
                          s(() => t.reject(e));
                        }
                      } else s(() => t.reject(o));
                    }
                },
              });
            }
          )),
          N
        );
      }
    },
    99376: function (e, t, a) {
      a.d(t, {
        q: function () {
          return l;
        },
      });
      var n = a(72932),
        r = a(82645),
        i = a(36478),
        o = a(41495),
        s = a(31853),
        c = a(79508);
      function l(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: a = !1,
          onBlockNumber: l,
          onError: u,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let h;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let n = (0, s.P)(["watchBlockNumber", e.uid, t, a, f]);
              return (0, i.N7)(n, { onBlockNumber: l, onError: u }, (n) =>
                (0, o.$)(
                  async () => {
                    try {
                      let t = await (0, r.s)(
                        e,
                        c.z,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (void 0 !== h) {
                        if (t === h) return;
                        if (t - h > 1 && a)
                          for (let e = h + 1n; e < t; e++)
                            n.onBlockNumber(e, h), (h = e);
                      }
                      (void 0 === h || t > h) &&
                        (n.onBlockNumber(t, h), (h = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: f }
                )
              );
            })()
          : (() => {
              let r = (0, s.P)(["watchBlockNumber", e.uid, t, a]);
              return (0, i.N7)(r, { onBlockNumber: l, onError: u }, (t) => {
                let a = !0,
                  r = () => (a = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: o } = await i.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!a) return;
                            let r = (0, n.y_)(e.result?.number);
                            t.onBlockNumber(r, h), (h = r);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (r = o), a || r();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  () => r()
                );
              });
            })();
      }
    },
    34467: function (e, t, a) {
      a.d(t, {
        QZ: function () {
          return P;
        },
        ZE: function () {
          return k;
        },
      });
      var n = a(19775),
        r = a(6458),
        i = a(8741),
        o = a(74587),
        s = a(16689),
        c = a(4496),
        l = a(63228),
        u = a(63563),
        d = a(67496),
        f = a(98328),
        h = a(10932),
        p = a(82645),
        m = a(82061),
        y = a(54605),
        g = a(90683),
        b = a(332),
        w = a(12363);
      let P = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        v = new Map(),
        F = new m.k(128);
      async function k(e, t) {
        let a,
          m,
          k = t;
        (k.account ??= e.account), (k.parameters ??= P);
        let {
            account: x,
            chain: G = e.chain,
            nonceManager: T,
            parameters: B,
          } = k,
          N =
            "function" == typeof G?.prepareTransactionRequest
              ? {
                  fn: G.prepareTransactionRequest,
                  runAt: ["beforeFillTransaction"],
                }
              : Array.isArray(G?.prepareTransactionRequest)
              ? {
                  fn: G.prepareTransactionRequest[0],
                  runAt: G.prepareTransactionRequest[1].runAt,
                }
              : void 0;
        async function A() {
          return (
            a ||
            (void 0 !== k.chainId
              ? k.chainId
              : G
              ? G.id
              : (a = await (0, p.s)(e, w.L, "getChainId")({})))
          );
        }
        let q = x ? (0, n.T)(x) : x,
          S = k.nonce;
        if (N?.fn && N.runAt?.includes("beforeFillTransaction")) {
          (k = await N.fn(
            { ...k, chain: G },
            { client: e, phase: "beforeFillTransaction" }
          )),
            (S ??= k.nonce);
          let t = k.account ?? k.from;
          q = t ? (0, n.T)(t) : void 0;
        }
        if (B.includes("nonce") && void 0 === S && q && T) {
          let t = await A();
          S = await T.consume({ address: q.address, chainId: t, client: e });
        }
        let E =
          (!(B.includes("blobVersionedHashes") || B.includes("sidecars")) ||
            !k.kzg ||
            !k.blobs) &&
          ((B.length > 0 &&
            "feePayer" in k &&
            k.feePayer &&
            !("feePayerSignature" in k && k.feePayerSignature)) ||
            (!1 !== F.get(e.uid) &&
              ["fees", "gas"].some((e) => B.includes(e)) &&
              ((B.includes("chainId") && "number" != typeof k.chainId) ||
                (B.includes("nonce") && "number" != typeof S) ||
                (B.includes("fees") &&
                  "bigint" != typeof k.gasPrice &&
                  ("bigint" != typeof k.maxFeePerGas ||
                    "bigint" != typeof k.maxPriorityFeePerGas)) ||
                (B.includes("gas") && "bigint" != typeof k.gas))))
            ? await (0, p.s)(
                e,
                b.b,
                "fillTransaction"
              )({ ...k, nonce: S })
                .then((t) => {
                  let {
                      chainId: a,
                      from: n,
                      gas: r,
                      gasPrice: i,
                      nonce: o,
                      maxFeePerBlobGas: s,
                      maxFeePerGas: c,
                      maxPriorityFeePerGas: l,
                      type: u,
                      ...d
                    } = t.transaction,
                    f = "feeToken" in d ? d.feeToken : void 0,
                    h =
                      "feePayerSignature" in d &&
                      null !== d.feePayerSignature &&
                      void 0 !== d.feePayerSignature,
                    p = null != f && (!("feeToken" in k) || h);
                  return (
                    F.set(e.uid, !0),
                    {
                      ...k,
                      ...(n ? { from: n } : {}),
                      ...(u && !k.type ? { type: u } : {}),
                      ...(void 0 !== a ? { chainId: a } : {}),
                      ...(void 0 !== r ? { gas: r } : {}),
                      ...(void 0 !== i ? { gasPrice: i } : {}),
                      ...(void 0 !== o ? { nonce: o } : {}),
                      ...(void 0 !== s &&
                      "legacy" !== k.type &&
                      "eip2930" !== k.type
                        ? { maxFeePerBlobGas: s }
                        : {}),
                      ...(void 0 !== c &&
                      "legacy" !== k.type &&
                      "eip2930" !== k.type
                        ? { maxFeePerGas: c }
                        : {}),
                      ...(void 0 !== l &&
                      "legacy" !== k.type &&
                      "eip2930" !== k.type
                        ? { maxPriorityFeePerGas: l }
                        : {}),
                      ...("nonceKey" in d && void 0 !== d.nonceKey
                        ? { nonceKey: d.nonceKey }
                        : {}),
                      ...("keyAuthorization" in d &&
                      void 0 !== d.keyAuthorization &&
                      null !== d.keyAuthorization &&
                      !("keyAuthorization" in k)
                        ? { keyAuthorization: d.keyAuthorization }
                        : {}),
                      ...("feePayerSignature" in d &&
                      void 0 !== d.feePayerSignature &&
                      null !== d.feePayerSignature
                        ? { feePayerSignature: d.feePayerSignature }
                        : {}),
                      ...(p ? { feeToken: f } : {}),
                      ...(t.capabilities
                        ? { _capabilities: t.capabilities }
                        : {}),
                    }
                  );
                })
                .catch((t) => {
                  if ("TransactionExecutionError" !== t.name) return k;
                  if (
                    t.walk?.((e) => e instanceof l.xf) ||
                    t.walk?.((e) => "ExecutionRevertedError" === e.name)
                  )
                    throw t;
                  return (
                    t.walk?.(
                      (e) =>
                        "MethodNotFoundRpcError" === e.name ||
                        "MethodNotSupportedRpcError" === e.name ||
                        e.message?.includes(
                          "eth_fillTransaction is not available"
                        )
                    ) && F.set(e.uid, !1),
                    k
                  );
                })
            : k;
        S ??= E.nonce;
        let {
          blobs: _,
          gas: I,
          kzg: C,
          type: R,
        } = (k = {
          ...E,
          ...(q ? { from: q?.address } : {}),
          ...(void 0 !== S ? { nonce: S } : {}),
        });
        async function z() {
          return (
            m ||
            (m = await (0, p.s)(e, o.Q, "getBlock")({ blockTag: "latest" }))
          );
        }
        if (
          (N?.fn &&
            N.runAt?.includes("beforeFillParameters") &&
            (k = await N.fn(
              { ...k, chain: G },
              { client: e, phase: "beforeFillParameters" }
            )),
          B.includes("nonce") &&
            void 0 === S &&
            q &&
            !T &&
            (k.nonce = await (0, p.s)(
              e,
              s.K,
              "getTransactionCount"
            )({ address: q.address, blockTag: "pending" })),
          (B.includes("blobVersionedHashes") || B.includes("sidecars")) &&
            _ &&
            C)
        ) {
          let e = (0, u.P)({ blobs: _, kzg: C });
          if (B.includes("blobVersionedHashes")) {
            let t = (0, f.C)({ commitments: e, to: "hex" });
            k.blobVersionedHashes = t;
          }
          if (B.includes("sidecars")) {
            let t = (0, d.y)({ blobs: _, commitments: e, kzg: C }),
              a = (0, h.j)({ blobs: _, commitments: e, proofs: t, to: "hex" });
            k.sidecars = a;
          }
        }
        if (
          (B.includes("chainId") && (k.chainId = await A()),
          (B.includes("fees") || B.includes("type")) && void 0 === R)
        )
          try {
            k.type = (0, g.l)(k);
          } catch {
            let t = v.get(e.uid);
            if (void 0 === t) {
              let a = await z();
              (t = "bigint" == typeof a?.baseFeePerGas), v.set(e.uid, t);
            }
            k.type = t ? "eip1559" : "legacy";
          }
        if (B.includes("fees")) {
          if ("legacy" !== k.type && "eip2930" !== k.type) {
            if (
              void 0 === k.maxFeePerGas ||
              void 0 === k.maxPriorityFeePerGas
            ) {
              let t = await z(),
                { maxFeePerGas: a, maxPriorityFeePerGas: n } = await (0, r.C)(
                  e,
                  { block: t, chain: G, request: k }
                );
              if (
                void 0 === k.maxPriorityFeePerGas &&
                k.maxFeePerGas &&
                k.maxFeePerGas < n
              )
                throw new c.ld({ maxPriorityFeePerGas: n });
              (k.maxPriorityFeePerGas = n), (k.maxFeePerGas = a);
            }
          } else {
            if (void 0 !== k.maxFeePerGas || void 0 !== k.maxPriorityFeePerGas)
              throw new c.e5();
            if (void 0 === k.gasPrice) {
              let t = await z(),
                { gasPrice: a } = await (0, r.C)(e, {
                  block: t,
                  chain: G,
                  request: k,
                  type: "legacy",
                });
              k.gasPrice = a;
            }
          }
        }
        return (
          B.includes("gas") &&
            void 0 === I &&
            (k.gas = await (0, p.s)(
              e,
              i.Q,
              "estimateGas"
            )({
              ...k,
              account: q,
              prepare: q?.type === "local" ? [] : ["blobVersionedHashes"],
            })),
          N?.fn &&
            N.runAt?.includes("afterFillParameters") &&
            (k = await N.fn(
              { ...k, chain: G },
              { client: e, phase: "afterFillParameters" }
            )),
          (0, y.F)(k),
          delete k.parameters,
          k
        );
      }
    },
    9769: function (e, t, a) {
      a.d(t, {
        p: function () {
          return n;
        },
      });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    65704: function (e, t, a) {
      a.d(t, {
        Y: function () {
          return i;
        },
        o: function () {
          return r;
        },
      });
      var n = a(81544);
      class r extends n.G {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class i extends n.G {
        constructor({ docsPath: e, metaMessages: t, type: a }) {
          super(`Account type "${a}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    12197: function (e, t, a) {
      a.d(t, {
        f: function () {
          return r;
        },
      });
      var n = a(81544);
      class r extends n.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let a = "Block";
          e && (a = `Block at hash "${e}"`),
            t && (a = `Block at number "${t}"`),
            super(`${a} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    4496: function (e, t, a) {
      a.d(t, {
        Fz: function () {
          return i;
        },
        e5: function () {
          return o;
        },
        ld: function () {
          return s;
        },
      });
      var n = a(29707),
        r = a(81544);
      class i extends r.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class o extends r.G {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class s extends r.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.o)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    93606: function (e, t, a) {
      a.d(t, {
        $: function () {
          return o;
        },
      });
      var n = a(78125),
        r = a(63228),
        i = a(18856);
      function o(e, { docsPath: t, ...a }) {
        let o = (() => {
          let t = (0, i.k)(e, a);
          return t instanceof n.cj ? e : t;
        })();
        return new r.mk(o, { docsPath: t, ...a });
      }
    },
  },
]);
