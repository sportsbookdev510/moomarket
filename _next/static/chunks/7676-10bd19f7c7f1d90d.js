"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7676],
  {
    33145: function (t, e, r) {
      r.d(e, {
        default: function () {
          return s.a;
        },
      });
      var i = r(48461),
        s = r.n(i);
    },
    48461: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return o;
          },
        });
      let i = r(47043),
        s = r(55346),
        n = r(65878),
        a = i._(r(5084));
      function o(t) {
        let { props: e } = (0, s.getImgProps)(t, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
        return { props: e };
      }
      let u = n.Image;
    },
    8028: function (t, e, r) {
      r.d(e, {
        A: function () {
          return u;
        },
        z: function () {
          return c;
        },
      });
      var i = r(45345),
        s = r(18238),
        n = r(11255),
        a = r(7989);
      function o(t, { pages: e, pageParams: r }) {
        let i = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0;
      }
      var u = class extends a.F {
        #t;
        #e;
        #r;
        #i;
        #s;
        #n;
        #a;
        #o;
        constructor(t) {
          super(),
            (this.#o = !1),
            (this.#a = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.#s = t.client),
            (this.#i = this.#s.getQueryCache()),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.#e = l(this.options)),
            (this.state = t.state ?? this.#e),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get queryType() {
          return this.#t;
        }
        get promise() {
          return this.#n?.promise;
        }
        setOptions(t) {
          if (
            ((this.options = { ...this.#a, ...t }),
            t?._type && (this.#t = t._type),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let t = l(this.options);
            void 0 !== t.data &&
              (this.setState(h(t.data, t.dataUpdatedAt)), (this.#e = t));
          }
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.#i.remove(this);
        }
        setData(t, e) {
          let r = (0, i.oE)(this.state.data, t, this.options);
          return (
            this.#u({
              data: r,
              type: "success",
              dataUpdatedAt: e?.updatedAt,
              manual: e?.manual,
            }),
            r
          );
        }
        setState(t) {
          this.#u({ type: "setState", state: t });
        }
        cancel(t) {
          let e = this.#n?.promise;
          return (
            this.#n?.cancel(t), e ? e.then(i.ZT).catch(i.ZT) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        get resetState() {
          return this.#e;
        }
        reset() {
          this.destroy(), this.setState(this.resetState);
        }
        isActive() {
          return this.observers.some(
            (t) => !1 !== (0, i.TD)(t.options.enabled, this)
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === i.CN || !this.isFetched();
        }
        isFetched() {
          return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (t) => "static" === (0, i.KC)(t.options.staleTime, this)
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(t = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== t &&
              (!!this.state.isInvalidated ||
                !(0, i.Kp)(this.state.dataUpdatedAt, t)))
          );
        }
        onFocus() {
          let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
          t?.refetch({ cancelRefetch: !1 }), this.#n?.continue();
        }
        onOnline() {
          let t = this.observers.find((t) => t.shouldFetchOnReconnect());
          t?.refetch({ cancelRefetch: !1 }), this.#n?.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.#i.notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((e) => e !== t)),
            this.observers.length ||
              (this.#n &&
                (this.#o || this.#c()
                  ? this.#n.cancel({ revert: !0 })
                  : this.#n.cancelRetry()),
              this.scheduleGc()),
            this.#i.notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        #c() {
          return (
            "paused" === this.state.fetchStatus &&
            "pending" === this.state.status
          );
        }
        invalidate() {
          this.state.isInvalidated || this.#u({ type: "invalidate" });
        }
        async fetch(t, e) {
          var r;
          if (
            "idle" !== this.state.fetchStatus &&
            this.#n?.status() !== "rejected"
          ) {
            if (void 0 !== this.state.data && e?.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.#n) return this.#n.continueRetry(), this.#n.promise;
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            let t = this.observers.find((t) => t.options.queryFn);
            t && this.setOptions(t.options);
          }
          let s = new AbortController(),
            a = (t) => {
              Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => ((this.#o = !0), s.signal),
              });
            },
            u = () => {
              let t = (0, i.cG)(this.options, e),
                r = (() => {
                  let t = {
                    client: this.#s,
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return a(t), t;
                })();
              return ((this.#o = !1), this.options.persister)
                ? this.options.persister(t, r, this)
                : t(r);
            },
            c = (() => {
              let t = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#s,
                state: this.state,
                fetchFn: u,
              };
              return a(t), t;
            })(),
            h =
              "infinite" === this.#t
                ? ((r = this.options.pages),
                  {
                    onFetch: (t, e) => {
                      let s = t.options,
                        n = t.fetchOptions?.meta?.fetchMore?.direction,
                        a = t.state.data?.pages || [],
                        u = t.state.data?.pageParams || [],
                        c = { pages: [], pageParams: [] },
                        h = 0,
                        l = async () => {
                          let e = !1,
                            l = (r) => {
                              (0, i.I4)(
                                r,
                                () => t.signal,
                                () => (e = !0)
                              );
                            },
                            d = (0, i.cG)(t.options, t.fetchOptions),
                            f = async (r, s, n) => {
                              if (e) return Promise.reject(t.signal.reason);
                              if (null == s && r.pages.length)
                                return Promise.resolve(r);
                              let a = (() => {
                                  let e = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: s,
                                    direction: n ? "backward" : "forward",
                                    meta: t.options.meta,
                                  };
                                  return l(e), e;
                                })(),
                                o = await d(a),
                                { maxPages: u } = t.options,
                                c = n ? i.Ht : i.VX;
                              return {
                                pages: c(r.pages, o, u),
                                pageParams: c(r.pageParams, s, u),
                              };
                            };
                          if (n && a.length) {
                            let t = "backward" === n,
                              e = { pages: a, pageParams: u },
                              r = (
                                t
                                  ? function (t, { pages: e, pageParams: r }) {
                                      return e.length > 0
                                        ? t.getPreviousPageParam?.(
                                            e[0],
                                            e,
                                            r[0],
                                            r
                                          )
                                        : void 0;
                                    }
                                  : o
                              )(s, e);
                            c = await f(e, r, t);
                          } else {
                            let t = r ?? a.length;
                            do {
                              let t =
                                0 === h ? u[0] ?? s.initialPageParam : o(s, c);
                              if (h > 0 && null == t) break;
                              (c = await f(c, t)), h++;
                            } while (h < t);
                          }
                          return c;
                        };
                      t.options.persister
                        ? (t.fetchFn = () =>
                            t.options.persister?.(
                              l,
                              {
                                client: t.client,
                                queryKey: t.queryKey,
                                meta: t.options.meta,
                                signal: t.signal,
                              },
                              e
                            ))
                        : (t.fetchFn = l);
                    },
                  })
                : this.options.behavior;
          h?.onFetch(c, this),
            (this.#r = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !== c.fetchOptions?.meta) &&
              this.#u({ type: "fetch", meta: c.fetchOptions?.meta }),
            (this.#n = (0, n.Mz)({
              initialPromise: e?.initialPromise,
              fn: c.fetchFn,
              onCancel: (t) => {
                t instanceof n.p8 &&
                  t.revert &&
                  this.setState({ ...this.#r, fetchStatus: "idle" }),
                  s.abort();
              },
              onFail: (t, e) => {
                this.#u({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#u({ type: "pause" });
              },
              onContinue: () => {
                this.#u({ type: "continue" });
              },
              retry: c.options.retry,
              retryDelay: c.options.retryDelay,
              networkMode: c.options.networkMode,
              canRun: () => !0,
            }));
          try {
            let t = await this.#n.start();
            if (void 0 === t)
              throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(t),
              this.#i.config.onSuccess?.(t, this),
              this.#i.config.onSettled?.(t, this.state.error, this),
              t
            );
          } catch (t) {
            if (t instanceof n.p8) {
              if (t.silent) return this.#n.promise;
              if (t.revert) {
                if (void 0 === this.state.data) throw t;
                return this.state.data;
              }
            }
            throw (
              (this.#u({ type: "error", error: t }),
              this.#i.config.onError?.(t, this),
              this.#i.config.onSettled?.(this.state.data, t, this),
              t)
            );
          } finally {
            this.scheduleGc();
          }
        }
        #u(t) {
          (this.state = ((e) => {
            switch (t.type) {
              case "failed":
                return {
                  ...e,
                  fetchFailureCount: t.failureCount,
                  fetchFailureReason: t.error,
                };
              case "pause":
                return { ...e, fetchStatus: "paused" };
              case "continue":
                return { ...e, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...e,
                  ...c(e.data, this.options),
                  fetchMeta: t.meta ?? null,
                };
              case "success":
                let r = {
                  ...e,
                  ...h(t.data, t.dataUpdatedAt),
                  dataUpdateCount: e.dataUpdateCount + 1,
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return (this.#r = t.manual ? r : void 0), r;
              case "error":
                let i = t.error;
                return {
                  ...e,
                  error: i,
                  errorUpdateCount: e.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: e.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                  isInvalidated: !0,
                };
              case "invalidate":
                return { ...e, isInvalidated: !0 };
              case "setState":
                return { ...e, ...t.state };
            }
          })(this.state)),
            s.Vr.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate();
              }),
                this.#i.notify({ query: this, type: "updated", action: t });
            });
        }
      };
      function c(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.Kw)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
      function h(t, e) {
        return {
          data: t,
          dataUpdatedAt: e ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function l(t) {
        let e =
            "function" == typeof t.initialData
              ? t.initialData()
              : t.initialData,
          r = void 0 !== e,
          i = r
            ? "function" == typeof t.initialDataUpdatedAt
              ? t.initialDataUpdatedAt()
              : t.initialDataUpdatedAt
            : 0;
        return {
          data: e,
          dataUpdateCount: 0,
          dataUpdatedAt: r ? i ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: r ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    37691: function (t, e, r) {
      r.d(e, {
        L: function () {
          return n;
        },
      });
      var i = r(28766),
        s = r(44199);
      function n(t, e) {
        let { chainId: r, ...n } = e,
          a = t.getClient({ chainId: r });
        return (0, s.s)(a, i.L, "readContract")(n);
      }
    },
    27534: function (t, e, r) {
      r.d(e, {
        OP: function () {
          return o;
        },
        if: function () {
          return s;
        },
        kq: function () {
          return n;
        },
      });
      var i = r(45345);
      function s(t, e) {
        return (0, i.Q$)(t, e);
      }
      function n(t) {
        return JSON.stringify(t, (t, e) =>
          !(function (t) {
            if (!a(t)) return !1;
            let e = t.constructor;
            if (void 0 === e) return !0;
            let r = e.prototype;
            return !!(a(r) && r.hasOwnProperty("isPrototypeOf"));
          })(e)
            ? "bigint" == typeof e
              ? e.toString()
              : e
            : Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
        );
      }
      function a(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function o(t) {
        let {
          _defaulted: e,
          behavior: r,
          gcTime: i,
          initialData: s,
          initialDataUpdatedAt: n,
          maxPages: a,
          meta: o,
          networkMode: u,
          queryFn: c,
          queryHash: h,
          queryKey: l,
          queryKeyHashFn: d,
          retry: f,
          retryDelay: p,
          structuralSharing: y,
          getPreviousPageParam: v,
          getNextPageParam: m,
          initialPageParam: g,
          _optimisticResults: b,
          enabled: w,
          notifyOnChangeProps: R,
          placeholderData: C,
          refetchInterval: S,
          refetchIntervalInBackground: I,
          refetchOnMount: O,
          refetchOnReconnect: T,
          refetchOnWindowFocus: P,
          retryOnMount: F,
          select: Q,
          staleTime: q,
          suspense: D,
          throwOnError: E,
          config: x,
          connector: U,
          query: M,
          ...k
        } = t;
        return k;
      }
    },
    44199: function (t, e, r) {
      r.d(e, {
        s: function () {
          return i;
        },
      });
      function i(t, e, r) {
        let i = t[e.name];
        if ("function" == typeof i) return i;
        let s = t[r];
        return "function" == typeof s ? s : (r) => e(t, r);
      }
    },
    93715: function (t, e, r) {
      r.d(e, {
        P: function () {
          return s;
        },
      });
      var i = r(24250);
      function s(t, e = {}) {
        let {
          key: r = "custom",
          methods: s,
          name: n = "Custom Provider",
          retryDelay: a,
        } = e;
        return ({ retryCount: o }) =>
          (0, i.q)({
            key: r,
            methods: s,
            name: n,
            request: t.request.bind(t),
            retryCount: e.retryCount ?? o,
            retryDelay: a,
            type: "custom",
          });
      }
    },
    68768: function (t, e, r) {
      r.d(e, {
        v: function () {
          return s;
        },
      });
      var i = r(68366);
      function s(t, e) {
        return i.Dp(t, e);
      }
    },
    44005: function (t, e, r) {
      function i(t) {
        return t.state.chainId;
      }
      r.d(e, {
        x: function () {
          return a;
        },
      });
      var s = r(2265),
        n = r(12364);
      function a() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, n.Z)(t);
        return (0, s.useSyncExternalStore)(
          (t) =>
            (function (t, e) {
              let { onChange: r } = e;
              return t.subscribe((t) => t.chainId, r);
            })(e, { onChange: t }),
          () => i(e),
          () => i(e)
        );
      }
    },
    27323: function (t, e, r) {
      r.d(e, {
        u: function () {
          return u;
        },
      });
      var i = r(37691),
        s = r(27534),
        n = r(97074),
        a = r(44005),
        o = r(12364);
      function u() {
        var t, e, r;
        let u =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: c, address: h, functionName: l, query: d = {} } = u,
          f = u.code,
          p = (0, o.Z)(u),
          y = (0, a.x)({ config: p }),
          v = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let s = e.abi;
                if (!s) throw Error("abi is required");
                let { functionName: n, scopeKey: a, ...o } = r[1],
                  u = (() => {
                    let t = r[1];
                    if (t.address) return { address: t.address };
                    if (t.code) return { code: t.code };
                    throw Error("address or code is required");
                  })();
                if (!n) throw Error("functionName is required");
                return (0, i.L)(t, {
                  abi: s,
                  functionName: n,
                  args: o.args,
                  ...u,
                  ...o,
                });
              },
              queryKey: (function (t = {}) {
                let { abi: e, ...r } = t;
                return ["readContract", (0, s.OP)(r)];
              })(e),
            };
          })(p, {
            ...u,
            chainId: null !== (t = u.chainId) && void 0 !== t ? t : y,
          }),
          m = !!(
            (h || f) &&
            c &&
            l &&
            (null === (e = d.enabled) || void 0 === e || e)
          );
        return (0, n.aM)({
          ...d,
          ...v,
          enabled: m,
          structuralSharing:
            null !== (r = d.structuralSharing) && void 0 !== r ? r : s.if,
        });
      }
    },
    46269: function (t, e, r) {
      r.d(e, {
        N: function () {
          return p;
        },
      });
      var i = r(20010),
        s = r(94797),
        n = r(44199);
      async function a(t, e) {
        let { allowFailure: r = !0, chainId: i, contracts: a, ...o } = e,
          u = t.getClient({ chainId: i });
        return (0, n.s)(
          u,
          s.A,
          "multicall"
        )({ allowFailure: r, contracts: a, ...o });
      }
      var o = r(37691);
      async function u(t, e) {
        let { allowFailure: r = !0, blockNumber: s, blockTag: n, ...u } = e,
          c = e.contracts;
        try {
          let e = {};
          for (let [r, i] of c.entries()) {
            let s = i.chainId ?? t.state.chainId;
            e[s] || (e[s] = []), e[s]?.push({ contract: i, index: r });
          }
          let i = (
              await Promise.all(
                Object.entries(e).map(([e, i]) =>
                  a(t, {
                    ...u,
                    allowFailure: r,
                    blockNumber: s,
                    blockTag: n,
                    chainId: Number.parseInt(e, 10),
                    contracts: i.map(({ contract: t }) => t),
                  })
                )
              )
            ).flat(),
            o = Object.values(e).flatMap((t) => t.map(({ index: t }) => t));
          return i.reduce((t, e, r) => (t && (t[o[r]] = e), t), []);
        } catch (a) {
          if (a instanceof i.uq) throw a;
          let e = () =>
            c.map((e) => (0, o.L)(t, { ...e, blockNumber: s, blockTag: n }));
          if (r)
            return (await Promise.allSettled(e())).map((t) =>
              "fulfilled" === t.status
                ? { result: t.value, status: "success" }
                : { error: t.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(e());
        }
      }
      var c = r(27534),
        h = r(2265),
        l = r(97074),
        d = r(44005),
        f = r(12364);
      function p() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: r = [], query: i = {} } = e,
          s = (0, f.Z)(e),
          n = (0, d.x)({ config: s }),
          a = (0, h.useMemo)(() => {
            if (0 === r.length) return;
            let t = r[0].chainId;
            if (r.every((e) => e.chainId === t)) return t;
          }, [r]),
          o = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let i = [],
                  s = r[1].contracts.length;
                for (let t = 0; t < s; t++) {
                  let s = r[1].contracts[t],
                    n = (e.contracts?.[t]).abi;
                  i.push({ ...s, abi: n });
                }
                let { scopeKey: n, ...a } = r[1];
                return u(t, { ...a, contracts: i });
              },
              queryKey: (function (t = {}) {
                let e = [];
                for (let r of t.contracts ?? []) {
                  let { abi: i, ...s } = r;
                  e.push({ ...s, chainId: s.chainId ?? t.chainId });
                }
                return ["readContracts", (0, c.OP)({ ...t, contracts: e })];
              })(e),
            };
          })(s, { ...e, chainId: null != a ? a : n }),
          p = (0, h.useMemo)(() => {
            var t;
            let e = !1;
            for (let t of r) {
              let { abi: r, address: i, functionName: s } = t;
              if (!r || !i || !s) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (null === (t = i.enabled) || void 0 === t || t));
          }, [r, i.enabled]);
        return (0, l.aM)({
          ...o,
          ...i,
          enabled: p,
          structuralSharing:
            null !== (t = i.structuralSharing) && void 0 !== t ? t : c.if,
        });
      }
    },
    97269: function (t, e, r) {
      r.d(e, {
        A: function () {
          return f;
        },
      });
      var i = r(72932),
        s = r(67348),
        n = r(39277),
        a = r(50550),
        o = r(44199);
      async function u(t, e) {
        let { chainId: r, timeout: u = 0, ...c } = e,
          h = t.getClient({ chainId: r }),
          l = (0, o.s)(h, s.e, "waitForTransactionReceipt"),
          d = await l({ ...c, timeout: u });
        if ("reverted" === d.status) {
          let t = (0, o.s)(h, n.f, "getTransaction"),
            { from: e, ...r } = await t({ hash: d.transactionHash }),
            s = (0, o.s)(h, a.R, "call"),
            u = await s({
              ...r,
              account: e,
              data: r.input,
              gasPrice: "eip1559" !== r.type ? r.gasPrice : void 0,
              maxFeePerGas: "eip1559" === r.type ? r.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === r.type ? r.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            u?.data ? (0, i.rR)(`0x${u.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...d, chainId: h.chain.id };
      }
      var c = r(27534),
        h = r(97074),
        l = r(44005),
        d = r(12364);
      function f() {
        var t, e;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: i, query: s = {} } = r,
          n = (0, d.Z)(r),
          a = (0, l.x)({ config: n }),
          o = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let { hash: i, ...s } = r[1];
                if (!i) throw Error("hash is required");
                return u(t, { ...s, onReplaced: e.onReplaced, hash: i });
              },
              queryKey: (function (t = {}) {
                let { onReplaced: e, ...r } = t;
                return ["waitForTransactionReceipt", (0, c.OP)(r)];
              })(e),
            };
          })(n, {
            ...r,
            chainId: null !== (t = r.chainId) && void 0 !== t ? t : a,
          }),
          f = !!(i && (null === (e = s.enabled) || void 0 === e || e));
        return (0, h.aM)({ ...s, ...o, enabled: f });
      }
    },
    49891: function (t, e, r) {
      r.d(e, {
        S: function () {
          return E;
        },
      });
      var i = r(21770),
        s = r(19775),
        n = r(65704),
        a = r(17283),
        o = r(34180),
        u = r(82645),
        c = r(81544),
        h = r(55834),
        l = r(35586),
        d = r(89256),
        f = r(93606),
        p = r(70878),
        y = r(92614),
        v = r(82061),
        m = r(54605),
        g = r(12363),
        b = r(34467),
        w = r(9769);
      let R = new v.k(128);
      async function C(t, e) {
        let r;
        let {
          account: i = t.account,
          assertChainId: a = !0,
          chain: o = t.chain,
          accessList: v,
          authorizationList: C,
          blobs: S,
          data: I,
          dataSuffix: O = "string" == typeof t.dataSuffix
            ? t.dataSuffix
            : t.dataSuffix?.value,
          gas: T,
          gasPrice: P,
          maxFeePerBlobGas: F,
          maxFeePerGas: Q,
          maxPriorityFeePerGas: q,
          nonce: D,
          type: E,
          value: x,
          ...U
        } = e;
        if (void 0 === i)
          throw new n.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let M = i ? (0, s.T)(i) : null;
        try {
          (0, m.F)(e);
          let i = await (async () =>
            e.to
              ? e.to
              : null !== e.to && C && C.length > 0
              ? await (0, h.z)({ authorization: C[0] }).catch(() => {
                  throw new c.G(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (M?.type === "json-rpc" || null === M) {
            let e;
            null !== o &&
              ((e = await (0, u.s)(t, g.L, "getChainId")({})),
              a &&
                (function ({ chain: t, currentChainId: e }) {
                  if (!t) throw new l.Bk();
                  if (e !== t.id)
                    throw new l.Yl({ chain: t, currentChainId: e });
                })({ currentChainId: e, chain: o }));
            let r = t.chain?.formatters?.transactionRequest?.format,
              s = (r || y.tG)(
                {
                  ...(0, p.K)(U, { format: r }),
                  accessList: v,
                  account: M,
                  authorizationList: C,
                  blobs: S,
                  chainId: e,
                  data: O ? (0, d.zo)([I ?? "0x", O]) : I,
                  gas: T,
                  gasPrice: P,
                  maxFeePerBlobGas: F,
                  maxFeePerGas: Q,
                  maxPriorityFeePerGas: q,
                  nonce: D,
                  to: i,
                  type: E,
                  value: x,
                },
                "sendTransaction"
              ),
              n = R.get(t.uid);
            try {
              return await t.request(
                {
                  method: n ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [s],
                },
                { retryCount: 0 }
              );
            } catch (e) {
              if (!1 === n) throw e;
              if (
                "InvalidInputRpcError" === e.name ||
                "InvalidParamsRpcError" === e.name ||
                "MethodNotFoundRpcError" === e.name ||
                "MethodNotSupportedRpcError" === e.name
              )
                return await t
                  .request(
                    { method: "wallet_sendTransaction", params: [s] },
                    { retryCount: 0 }
                  )
                  .then((e) => (R.set(t.uid, !0), e))
                  .catch((r) => {
                    if (
                      "MethodNotFoundRpcError" === r.name ||
                      "MethodNotSupportedRpcError" === r.name
                    )
                      throw (R.set(t.uid, !1), e);
                    throw r;
                  });
              throw e;
            }
          }
          if (M?.type === "local") {
            let e = (() => {
                if (!M.nonceManager || void 0 !== D) return M.nonceManager;
                let t = M.nonceManager;
                return {
                  consume: (e) => (
                    (r = { address: e.address, chainId: e.chainId }),
                    t.consume(e)
                  ),
                  get: (e) => t.get(e),
                  increment: (e) => t.increment(e),
                  reset: (e) => t.reset(e),
                };
              })(),
              s = await (0, u.s)(
                t,
                b.ZE,
                "prepareTransactionRequest"
              )({
                account: M,
                accessList: v,
                authorizationList: C,
                blobs: S,
                chain: o,
                data: O ? (0, d.zo)([I ?? "0x", O]) : I,
                gas: T,
                gasPrice: P,
                maxFeePerBlobGas: F,
                maxFeePerGas: Q,
                maxPriorityFeePerGas: q,
                nonce: D,
                nonceManager: e,
                parameters: [...b.QZ, "sidecars"],
                type: E,
                value: x,
                ...U,
                to: i,
              }),
              n = o?.serializers?.transaction,
              a = await M.signTransaction(s, { serializer: n });
            return await (0, u.s)(
              t,
              w.p,
              "sendRawTransaction"
            )({ serializedTransaction: a });
          }
          if (M?.type === "smart")
            throw new n.Y({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new n.Y({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: M?.type,
          });
        } catch (t) {
          if (t instanceof n.Y) throw t;
          throw (
            (r && M?.nonceManager?.reset(r),
            (0, f.$)(t, { ...e, account: M, chain: e.chain || void 0 }))
          );
        }
      }
      async function S(t, e) {
        return S.internal(t, C, "sendTransaction", e);
      }
      !(function (t) {
        async function e(t, e, r, i) {
          let {
            abi: c,
            account: h = t.account,
            address: l,
            args: d,
            functionName: f,
            ...p
          } = i;
          if (void 0 === h)
            throw new n.o({ docsPath: "/docs/contract/writeContract" });
          let y = h ? (0, s.T)(h) : null,
            v = (0, a.R)({ abi: c, args: d, functionName: f });
          try {
            return await (0, u.s)(
              t,
              e,
              r
            )({ data: v, to: l, account: y, ...p });
          } catch (t) {
            throw (0, o.S)(t, {
              abi: c,
              address: l,
              args: d,
              docsPath: "/docs/contract/writeContract",
              functionName: f,
              sender: y?.address,
            });
          }
        }
        t.internal = e;
      })(S || (S = {}));
      var I = r(44199),
        O = r(82538),
        T = r(93715),
        P = r(31669),
        F = r(13102);
      async function Q(t, e = {}) {
        let r;
        let { assertChainId: i = !0 } = e;
        if (e.connector) {
          let { connector: i } = e;
          if (
            "reconnecting" === t.state.status &&
            !i.getAccounts &&
            !i.getChainId
          )
            throw new F.$S({ connector: i });
          let [s, n] = await Promise.all([
            i.getAccounts().catch((t) => {
              if (null === e.account) return [];
              throw t;
            }),
            i.getChainId(),
          ]);
          r = { accounts: s, chainId: n, connector: i };
        } else r = t.state.connections.get(t.state.current);
        if (!r) throw new F.aH();
        let n = e.chainId ?? r.chainId,
          a = await r.connector.getChainId();
        if (i && a !== n)
          throw new F.XZ({ connectionChainId: n, connectorChainId: a });
        let o = r.connector;
        if (o.getClient) return o.getClient({ chainId: n });
        let u = (0, s.T)(e.account ?? r.accounts[0]);
        if (
          (u && (u.address = (0, P.K)(u.address)),
          e.account &&
            !r.accounts.some(
              (t) => t.toLowerCase() === u.address.toLowerCase()
            ))
        )
          throw new F.JK({ address: u.address, connector: o });
        let c = t.chains.find((t) => t.id === n),
          h = await r.connector.getProvider({ chainId: n });
        return (0, O.eI)({
          account: u,
          chain: c,
          name: "Connector Client",
          transport: (t) => (0, T.P)(h)({ ...t, retryCount: 0 }),
        });
      }
      async function q(t, e) {
        let r;
        let { account: i, chainId: s, connector: n, ...a } = e;
        r =
          "object" == typeof i && i?.type === "local"
            ? t.getClient({ chainId: s })
            : await Q(t, {
                account: i ?? void 0,
                assertChainId: !1,
                chainId: s,
                connector: n,
              });
        let o = (0, I.s)(r, S, "writeContract");
        return await o({
          ...a,
          ...(i ? { account: i } : {}),
          chain: s ? { id: s } : null,
        });
      }
      var D = r(12364);
      function E() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: r } = e,
          s =
            ((t = (0, D.Z)(e)),
            { mutationFn: (e) => q(t, e), mutationKey: ["writeContract"] }),
          { mutate: n, mutateAsync: a, ...o } = (0, i.D)({ ...r, ...s });
        return { ...o, writeContract: n, writeContractAsync: a };
      }
    },
    97074: function (t, e, r) {
      let i;
      r.d(e, {
        aM: function () {
          return D;
        },
      });
      var s = r(87045),
        n = r(73252),
        a = r(18238),
        o = r(8028),
        u = r(24112),
        c = r(16803),
        h = r(45345),
        l = r(84554),
        d = class extends u.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#s = t),
              (this.#h = null),
              (this.#l = (0, c.O)()),
              this.bindMethods(),
              this.setOptions(e);
          }
          #s;
          #d = void 0;
          #f = void 0;
          #p = void 0;
          #y;
          #v;
          #l;
          #h;
          #m;
          #g;
          #b;
          #w;
          #R;
          #C;
          #S = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#d.addObserver(this),
              f(this.#d, this.options) ? this.#I() : this.updateResult(),
              this.#O());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return p(this.#d, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return p(this.#d, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#T(),
              this.#P(),
              this.#d.removeObserver(this);
          }
          setOptions(t) {
            let e = this.options,
              r = this.#d;
            if (
              ((this.options = this.#s.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, h.TD)(this.options.enabled, this.#d))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#F(),
              this.#d.setOptions(this.options),
              e._defaulted &&
                !(0, h.VS)(this.options, e) &&
                this.#s
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#d,
                    observer: this,
                  });
            let i = this.hasListeners();
            i && y(this.#d, r, this.options, e) && this.#I(),
              this.updateResult(),
              i &&
                (this.#d !== r ||
                  (0, h.TD)(this.options.enabled, this.#d) !==
                    (0, h.TD)(e.enabled, this.#d) ||
                  (0, h.KC)(this.options.staleTime, this.#d) !==
                    (0, h.KC)(e.staleTime, this.#d)) &&
                this.#Q();
            let s = this.#q();
            i &&
              (this.#d !== r ||
                (0, h.TD)(this.options.enabled, this.#d) !==
                  (0, h.TD)(e.enabled, this.#d) ||
                s !== this.#C) &&
              this.#D(s);
          }
          getOptimisticResult(t) {
            let e = this.#s.getQueryCache().build(this.#s, t),
              r = this.createResult(e, t);
            return (
              (0, h.VS)(this.getCurrentResult(), r) ||
                ((this.#p = r),
                (this.#v = this.options),
                (this.#y = this.#d.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#p;
          }
          trackResult(t, e) {
            return new Proxy(t, {
              get: (t, r) => (
                this.trackProp(r),
                e?.(r),
                "promise" !== r ||
                  (this.trackProp("data"),
                  this.options.experimental_prefetchInRender ||
                    "pending" !== this.#l.status ||
                    this.#l.reject(
                      Error(
                        "experimental_prefetchInRender feature flag is not enabled"
                      )
                    )),
                Reflect.get(t, r)
              ),
            });
          }
          trackProp(t) {
            this.#S.add(t);
          }
          getCurrentQuery() {
            return this.#d;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#s.defaultQueryOptions(t),
              r = this.#s.getQueryCache().build(this.#s, e);
            return r.fetch().then(() => this.createResult(r, e));
          }
          fetch(t) {
            return this.#I({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#p)
            );
          }
          #I(t) {
            this.#F();
            let e = this.#d.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(h.ZT)), e;
          }
          #Q() {
            this.#T();
            let t = (0, h.KC)(this.options.staleTime, this.#d);
            if (n.m.isServer() || this.#p.isStale || !(0, h.PN)(t)) return;
            let e = (0, h.Kp)(this.#p.dataUpdatedAt, t);
            this.#w = l.mr.setTimeout(() => {
              this.#p.isStale || this.updateResult();
            }, e + 1);
          }
          #q() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#d)
                : this.options.refetchInterval) ?? !1
            );
          }
          #D(t) {
            this.#P(),
              (this.#C = t),
              !n.m.isServer() &&
                !1 !== (0, h.TD)(this.options.enabled, this.#d) &&
                (0, h.PN)(this.#C) &&
                0 !== this.#C &&
                (this.#R = l.mr.setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    s.j.isFocused()) &&
                    this.#I();
                }, this.#C));
          }
          #O() {
            this.#Q(), this.#D(this.#q());
          }
          #T() {
            void 0 !== this.#w &&
              (l.mr.clearTimeout(this.#w), (this.#w = void 0));
          }
          #P() {
            void 0 !== this.#R &&
              (l.mr.clearInterval(this.#R), (this.#R = void 0));
          }
          createResult(t, e) {
            let r;
            let i = this.#d,
              s = this.options,
              n = this.#p,
              a = this.#y,
              u = this.#v,
              l = t !== i ? t.state : this.#f,
              { state: d } = t,
              p = { ...d },
              m = !1;
            if (e._optimisticResults) {
              let r = this.hasListeners(),
                n = !r && f(t, e),
                a = r && y(t, i, e, s);
              (n || a) && (p = { ...p, ...(0, o.z)(d.data, t.options) }),
                "isRestoring" === e._optimisticResults &&
                  (p.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: b, status: w } = p;
            r = p.data;
            let R = !1;
            if (
              void 0 !== e.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let t;
              n?.isPlaceholderData && e.placeholderData === u?.placeholderData
                ? ((t = n.data), (R = !0))
                : (t =
                    "function" == typeof e.placeholderData
                      ? e.placeholderData(this.#b?.state.data, this.#b)
                      : e.placeholderData),
                void 0 !== t &&
                  ((w = "success"), (r = (0, h.oE)(n?.data, t, e)), (m = !0));
            }
            if (e.select && void 0 !== r && !R) {
              if (n && r === a?.data && e.select === this.#m) r = this.#g;
              else
                try {
                  (this.#m = e.select),
                    (r = e.select(r)),
                    (r = (0, h.oE)(n?.data, r, e)),
                    (this.#g = r),
                    (this.#h = null);
                } catch (t) {
                  this.#h = t;
                }
            }
            this.#h &&
              ((g = this.#h), (r = this.#g), (b = Date.now()), (w = "error"));
            let C = "fetching" === p.fetchStatus,
              S = "pending" === w,
              I = "error" === w,
              O = S && C,
              T = void 0 !== r,
              P = {
                status: w,
                fetchStatus: p.fetchStatus,
                isPending: S,
                isSuccess: "success" === w,
                isError: I,
                isInitialLoading: O,
                isLoading: O,
                data: r,
                dataUpdatedAt: p.dataUpdatedAt,
                error: g,
                errorUpdatedAt: b,
                failureCount: p.fetchFailureCount,
                failureReason: p.fetchFailureReason,
                errorUpdateCount: p.errorUpdateCount,
                isFetched: t.isFetched(),
                isFetchedAfterMount:
                  p.dataUpdateCount > l.dataUpdateCount ||
                  p.errorUpdateCount > l.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !S,
                isLoadingError: I && !T,
                isPaused: "paused" === p.fetchStatus,
                isPlaceholderData: m,
                isRefetchError: I && T,
                isStale: v(t, e),
                refetch: this.refetch,
                promise: this.#l,
                isEnabled: !1 !== (0, h.TD)(e.enabled, t),
              };
            if (this.options.experimental_prefetchInRender) {
              let e = void 0 !== P.data,
                r = "error" === P.status && !e,
                s = (t) => {
                  r ? t.reject(P.error) : e && t.resolve(P.data);
                },
                n = () => {
                  s((this.#l = P.promise = (0, c.O)()));
                },
                a = this.#l;
              switch (a.status) {
                case "pending":
                  t.queryHash === i.queryHash && s(a);
                  break;
                case "fulfilled":
                  (r || P.data !== a.value) && n();
                  break;
                case "rejected":
                  (r && P.error === a.reason) || n();
              }
            }
            return P;
          }
          updateResult() {
            let t = this.#p,
              e = this.createResult(this.#d, this.options);
            (this.#y = this.#d.state),
              (this.#v = this.options),
              void 0 !== this.#y.data && (this.#b = this.#d),
              (0, h.VS)(e, t) ||
                ((this.#p = e),
                this.#E({
                  listeners: (() => {
                    if (!t) return !0;
                    let { notifyOnChangeProps: e } = this.options,
                      r = "function" == typeof e ? e() : e;
                    if ("all" === r || (!r && !this.#S.size)) return !0;
                    let i = new Set(r ?? this.#S);
                    return (
                      this.options.throwOnError && i.add("error"),
                      Object.keys(this.#p).some(
                        (e) => this.#p[e] !== t[e] && i.has(e)
                      )
                    );
                  })(),
                }));
          }
          #F() {
            let t = this.#s.getQueryCache().build(this.#s, this.options);
            if (t === this.#d) return;
            let e = this.#d;
            (this.#d = t),
              (this.#f = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#O();
          }
          #E(t) {
            a.Vr.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#p);
                }),
                this.#s
                  .getQueryCache()
                  .notify({ query: this.#d, type: "observerResultsUpdated" });
            });
          }
        };
      function f(t, e) {
        return (
          (!1 !== (0, h.TD)(e.enabled, t) &&
            void 0 === t.state.data &&
            !(
              "error" === t.state.status && !1 === (0, h.TD)(e.retryOnMount, t)
            )) ||
          (void 0 !== t.state.data && p(t, e, e.refetchOnMount))
        );
      }
      function p(t, e, r) {
        if (
          !1 !== (0, h.TD)(e.enabled, t) &&
          "static" !== (0, h.KC)(e.staleTime, t)
        ) {
          let i = "function" == typeof r ? r(t) : r;
          return "always" === i || (!1 !== i && v(t, e));
        }
        return !1;
      }
      function y(t, e, r, i) {
        return (
          (t !== e || !1 === (0, h.TD)(i.enabled, t)) &&
          (!r.suspense || "error" !== t.state.status) &&
          v(t, r)
        );
      }
      function v(t, e) {
        return (
          !1 !== (0, h.TD)(e.enabled, t) &&
          t.isStaleByTime((0, h.KC)(e.staleTime, t))
        );
      }
      var m = r(2265),
        g = r(29827);
      r(57437);
      var b = m.createContext(
          ((i = !1),
          {
            clearReset: () => {
              i = !1;
            },
            reset: () => {
              i = !0;
            },
            isReset: () => i,
          })
        ),
        w = () => m.useContext(b),
        R = (t, e, r) => {
          let i =
            (null == r ? void 0 : r.state.error) &&
            "function" == typeof t.throwOnError
              ? (0, h.L3)(t.throwOnError, [r.state.error, r])
              : t.throwOnError;
          (t.suspense || t.experimental_prefetchInRender || i) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        C = (t) => {
          m.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        S = (t) => {
          let {
            result: e,
            errorResetBoundary: r,
            throwOnError: i,
            query: s,
            suspense: n,
          } = t;
          return (
            e.isError &&
            !r.isReset() &&
            !e.isFetching &&
            s &&
            ((n && void 0 === e.data) || (0, h.L3)(i, [e.error, s]))
          );
        },
        I = m.createContext(!1),
        O = () => m.useContext(I);
      I.Provider;
      var T = (t) => {
          if (t.suspense) {
            let e = (t) => ("static" === t ? t : Math.max(t ?? 1e3, 1e3)),
              r = t.staleTime;
            (t.staleTime =
              "function" == typeof r ? (...t) => e(r(...t)) : e(r)),
              "number" == typeof t.gcTime &&
                (t.gcTime = Math.max(t.gcTime, 1e3));
          }
        },
        P = (t, e) => t.isLoading && t.isFetching && !e,
        F = (t, e) => t?.suspense && e.isPending,
        Q = (t, e, r) =>
          e.fetchOptimistic(t).catch(() => {
            r.clearReset();
          }),
        q = r(27534);
      function D(t) {
        let e = (function (t, e, r) {
          var i, s, o, u;
          let c = O(),
            l = w(),
            d = (0, g.NL)(r),
            f = d.defaultQueryOptions(t);
          null === (s = d.getDefaultOptions().queries) ||
            void 0 === s ||
            null === (i = s._experimental_beforeQuery) ||
            void 0 === i ||
            i.call(s, f);
          let p = d.getQueryCache().get(f.queryHash),
            y = !1 !== t.subscribed;
          (f._optimisticResults = c
            ? "isRestoring"
            : y
            ? "optimistic"
            : void 0),
            T(f),
            R(f, l, p),
            C(l);
          let v = !d.getQueryCache().get(f.queryHash),
            [b] = m.useState(() => new e(d, f)),
            I = b.getOptimisticResult(f),
            q = !c && y;
          if (
            (m.useSyncExternalStore(
              m.useCallback(
                (t) => {
                  let e = q ? b.subscribe(a.Vr.batchCalls(t)) : h.ZT;
                  return b.updateResult(), e;
                },
                [b, q]
              ),
              () => b.getCurrentResult(),
              () => b.getCurrentResult()
            ),
            m.useEffect(() => {
              b.setOptions(f);
            }, [f, b]),
            F(f, I))
          )
            throw Q(f, b, l);
          if (
            S({
              result: I,
              errorResetBoundary: l,
              throwOnError: f.throwOnError,
              query: p,
              suspense: f.suspense,
            })
          )
            throw I.error;
          if (
            (null === (u = d.getDefaultOptions().queries) ||
              void 0 === u ||
              null === (o = u._experimental_afterQuery) ||
              void 0 === o ||
              o.call(u, f, I),
            f.experimental_prefetchInRender && !n.m.isServer() && P(I, c))
          ) {
            let t = v ? Q(f, b, l) : null == p ? void 0 : p.promise;
            null == t ||
              t.catch(h.ZT).finally(() => {
                b.updateResult();
              });
          }
          return f.notifyOnChangeProps ? I : b.trackResult(I);
        })({ ...t, queryKeyHashFn: q.kq }, d, void 0);
        return (e.queryKey = t.queryKey), e;
      }
    },
  },
]);
