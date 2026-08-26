"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1865],
  {
    77625: function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function i() {}
      function r(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, i, o, a) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var s = new r(i, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function s() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            i,
            r = [];
          if (0 === this._eventsCount) return r;
          for (i in (e = this._events))
            t.call(e, i) && r.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var r = 0, o = i.length, a = Array(o); r < o; r++)
            a[r] = i[r].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (s.prototype.emit = function (e, t, i, r, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            h,
            l = this._events[s],
            u = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), u)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, i), !0;
              case 4:
                return l.fn.call(l.context, t, i, r), !0;
              case 5:
                return l.fn.call(l.context, t, i, r, o), !0;
              case 6:
                return l.fn.call(l.context, t, i, r, o, a), !0;
            }
            for (h = 1, c = Array(u - 1); h < u; h++) c[h - 1] = arguments[h];
            l.fn.apply(l.context, c);
          } else {
            var d,
              f = l.length;
            for (h = 0; h < f; h++)
              switch (
                (l[h].once && this.removeListener(e, l[h].fn, void 0, !0), u)
              ) {
                case 1:
                  l[h].fn.call(l[h].context);
                  break;
                case 2:
                  l[h].fn.call(l[h].context, t);
                  break;
                case 3:
                  l[h].fn.call(l[h].context, t, i);
                  break;
                case 4:
                  l[h].fn.call(l[h].context, t, i, r);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = Array(u - 1); d < u; d++)
                      c[d - 1] = arguments[d];
                  l[h].fn.apply(l[h].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, i, r) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (r && !s.once) ||
              (i && s.context !== i) ||
              a(this, o);
          else {
            for (var c = 0, h = [], l = s.length; c < l; c++)
              (s[c].fn !== t ||
                (r && !s[c].once) ||
                (i && s[c].context !== i)) &&
                h.push(s[c]);
            h.length
              ? (this._events[o] = 1 === h.length ? h[0] : h)
              : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    53738: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      function i(e) {
        return e;
      }
    },
    81467: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var i = n(31669),
        r = n(77014),
        o = n(39504),
        a = n(49287),
        s = n(59455),
        c = n(13102),
        h = n(14478),
        l = n(53738);
      function u(e = {}) {
        let t, n, w, p;
        let { shimDisconnect: m = !0, unstable_shimAsyncInject: v } = e;
        function g() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(d[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, l.K)((l) => ({
          get icon() {
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: u.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (w || ((w = this.onConnect.bind(this)), n.on("connect", w)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({
            chainId: o,
            isReconnecting: a,
            withCapabilities: s,
          } = {}) {
            let c = await this.getProvider();
            if (!c) throw new h.M();
            let u = [];
            if (a) u = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await c.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (u = e[0]?.caveats?.[0]?.value?.map((e) => i.K(e))).length >
                  0 && (u = await this.getAccounts());
              } catch (e) {
                if (e.code === r.ab.code) throw new r.ab(e);
                if (e.code === r.pT.code) throw e;
              }
            try {
              u?.length ||
                a ||
                (u = (await c.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, i.K)(e)
                )),
                w && (c.removeListener("connect", w), (w = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  c.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  c.on("chainChanged", n)),
                p ||
                  ((p = this.onDisconnect.bind(this)), c.on("disconnect", p));
              let h = await this.getChainId();
              if (o && h !== o) {
                let e = await this.switchChain({ chainId: o }).catch((e) => {
                  if (e.code === r.ab.code) throw e;
                  return { id: h };
                });
                h = e?.id ?? h;
              }
              return (
                m && (await l.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await l.storage?.setItem("injected.connected", !0)),
                {
                  accounts: s
                    ? u.map((e) => ({ address: e, capabilities: {} }))
                    : u,
                  chainId: h,
                }
              );
            } catch (e) {
              if (e.code === r.ab.code) throw new r.ab(e);
              if (e.code === r.pT.code) throw new r.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new h.M();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              p && (t.removeListener("disconnect", p), (p = void 0)),
              w || ((w = this.onConnect.bind(this)), t.on("connect", w));
            try {
              await (0, o.F)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await l.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await l.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new h.M();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, i.K)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new h.M();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = g();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? f(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await l.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await l.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== v && !1 !== v) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof v ? v : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new h.M();
              }
              return !!(await (0, a.J)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new h.M();
            let i = l.chains.find((e) => e.id === t);
            if (!i) throw new r.x3(new c.X4());
            let o = new Promise((e) => {
              let n = (i) => {
                "chainId" in i &&
                  i.chainId === t &&
                  (l.emitter.off("change", n), e());
              };
              l.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.eC)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        l.emitter.emit("change", { chainId: t });
                    }),
                  o,
                ]),
                i
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a, c;
                  let { default: h, ...u } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : h && (a = [h.url, ...Object.values(u).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let d = {
                    blockExplorerUrls: a,
                    chainId: (0, s.eC)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [d],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            l.emitter.emit("change", { chainId: t });
                          else
                            throw new r.ab(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      o,
                    ]),
                    i
                  );
                } catch (e) {
                  throw new r.ab(e);
                }
              if (a.code === r.ab.code) throw new r.ab(a);
              throw new r.x3(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (l.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await l.storage?.removeItem(`${this.id}.disconnected`));
            } else
              l.emitter.emit("change", { accounts: e.map((e) => (0, i.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            l.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let i = await this.getAccounts();
            if (0 === i.length) return;
            let r = Number(e.chainId);
            l.emitter.emit("connect", { accounts: i, chainId: r });
            let o = await this.getProvider();
            o &&
              (w && (o.removeListener("connect", w), (w = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              p || ((p = this.onDisconnect.bind(this)), o.on("disconnect", p)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (l.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                p && (t.removeListener("disconnect", p), (p = void 0)),
                w || ((w = this.onConnect.bind(this)), t.on("connect", w))));
          },
        }));
      }
      u.type = "injected";
      let d = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : f(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            f(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : f(e, "isPhantom"),
        },
      };
      function f(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let i = e.ethereum;
        return i?.providers
          ? i.providers.find((e) => n(e))
          : i && n(i)
          ? i
          : void 0;
      }
    },
    87336: function (e, t, n) {
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var i = n(77625);
    },
    39504: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
      });
      var i = n(97564);
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((o, a) => {
          (async () => {
            let s;
            let c = new AbortController();
            try {
              n > 0 &&
                (s = setTimeout(() => {
                  r ? c.abort() : a(t);
                }, n)),
                o(await e({ signal: c?.signal || null }));
            } catch (e) {
              if (c?.signal.aborted && (0, i.D_)(e)) {
                a(t);
                return;
              }
              a(e);
            } finally {
              clearTimeout(s);
            }
          })();
        });
      }
    },
    80851: function (e, t, n) {
      n.d(t, {
        x: function () {
          return c;
        },
      });
      var i = n(17057),
        r = n(97564),
        o = n(39504),
        a = n(31853);
      let s = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      function c(e, t = {}) {
        let { url: n, headers: c } = (function (e) {
          try {
            let t = new URL(e),
              n = (() => {
                if (t.username) {
                  let e = `${decodeURIComponent(
                    t.username
                  )}:${decodeURIComponent(t.password)}`;
                  return (
                    (t.username = ""),
                    (t.password = ""),
                    {
                      url: t.toString(),
                      headers: { Authorization: `Basic ${btoa(e)}` },
                    }
                  );
                }
              })();
            return { url: t.toString(), ...n };
          } catch {
            return { url: e };
          }
        })(e);
        return {
          async request(e) {
            let {
                body: l,
                fetchFn: u = t.fetchFn ?? fetch,
                maxResponseBodySize: d = t.maxResponseBodySize ?? 10485760,
                onRequest: f = t.onRequest,
                onResponse: w = t.onResponse,
                timeout: p = t.timeout ?? 1e4,
              } = e,
              m = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
              { headers: v, method: g, signal: y } = m;
            try {
              let e;
              let t = await (0, o.F)(
                async ({ signal: e }) => {
                  let t = {
                      ...m,
                      body: Array.isArray(l)
                        ? (0, a.P)(
                            l.map((e) => ({
                              jsonrpc: "2.0",
                              id: e.id ?? s.take(),
                              ...e,
                            }))
                          )
                        : (0, a.P)({
                            jsonrpc: "2.0",
                            id: l.id ?? s.take(),
                            ...l,
                          }),
                      headers: {
                        ...c,
                        "Content-Type": "application/json",
                        ...v,
                      },
                      method: g || "POST",
                      signal: y || (p > 0 ? e : null),
                    },
                    i = new Request(n, t),
                    r = (await f?.(i, t)) ?? { ...t, url: n };
                  return await u(r.url ?? n, r);
                },
                {
                  errorInstance: new i.W5({ body: l, url: n }),
                  timeout: p,
                  signal: !0,
                }
              );
              w && (await w(t));
              let r = await h(t, { maxResponseBodySize: d });
              if (t.headers.get("Content-Type")?.startsWith("application/json"))
                e = JSON.parse(r);
              else {
                e = r;
                try {
                  e = JSON.parse(e || "{}");
                } catch (n) {
                  if (t.ok) throw n;
                  e = { error: e };
                }
              }
              if (!t.ok) {
                if (
                  "number" == typeof e.error?.code &&
                  "string" == typeof e.error?.message
                )
                  return e;
                throw new i.Gg({
                  body: l,
                  details: (0, a.P)(e.error) || t.statusText,
                  headers: t.headers,
                  status: t.status,
                  url: n,
                });
              }
              return e;
            } catch (e) {
              if (y?.aborted) throw (0, r.lR)(y);
              if (
                (0, r.D_)(e) ||
                e instanceof i.Gg ||
                e instanceof i.nv ||
                e instanceof i.W5
              )
                throw e;
              throw new i.Gg({ body: l, cause: e, url: n });
            }
          },
        };
      }
      async function h(e, { maxResponseBodySize: t }) {
        if (!1 === t) return e.text();
        let n = e.headers.get("Content-Length");
        if (n) {
          let e = Number(n);
          if (e > t) throw new i.nv({ maxSize: t, size: e });
        }
        if (!e.body) {
          let n = await e.text(),
            r = new TextEncoder().encode(n).length;
          if (r > t) throw new i.nv({ maxSize: t, size: r });
          return n;
        }
        let r = e.body.getReader(),
          o = new TextDecoder(),
          a = "",
          s = 0;
        try {
          for (;;) {
            let { done: e, value: n } = await r.read();
            if (e) break;
            if ((s += n.byteLength) > t)
              throw (await r.cancel(), new i.nv({ maxSize: t, size: s }));
            a += o.decode(n, { stream: !0 });
          }
          return (a += o.decode());
        } finally {
          r.releaseLock();
        }
      }
    },
  },
]);
