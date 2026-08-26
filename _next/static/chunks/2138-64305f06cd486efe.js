(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2138],
  {
    35294: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Fredoka_e862dc', '__Fredoka_Fallback_e862dc'",
          fontStyle: "normal",
        },
        className: "__className_e862dc",
        variable: "__variable_e862dc",
      };
    },
    61964: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Nunito_bbcc9b', '__Nunito_Fallback_bbcc9b'",
          fontStyle: "normal",
        },
        className: "__className_bbcc9b",
        variable: "__variable_bbcc9b",
      };
    },
    8028: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return u;
        },
        z: function () {
          return c;
        },
      });
      var n = i(45345),
        r = i(18238),
        s = i(11255),
        a = i(7989);
      function o(t, { pages: e, pageParams: i }) {
        let n = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[n], e, i[n], i) : void 0;
      }
      var u = class extends a.F {
        #t;
        #e;
        #i;
        #n;
        #r;
        #s;
        #a;
        #o;
        constructor(t) {
          super(),
            (this.#o = !1),
            (this.#a = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.#r = t.client),
            (this.#n = this.#r.getQueryCache()),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.#e = h(this.options)),
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
          return this.#s?.promise;
        }
        setOptions(t) {
          if (
            ((this.options = { ...this.#a, ...t }),
            t?._type && (this.#t = t._type),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let t = h(this.options);
            void 0 !== t.data &&
              (this.setState(l(t.data, t.dataUpdatedAt)), (this.#e = t));
          }
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.#n.remove(this);
        }
        setData(t, e) {
          let i = (0, n.oE)(this.state.data, t, this.options);
          return (
            this.#u({
              data: i,
              type: "success",
              dataUpdatedAt: e?.updatedAt,
              manual: e?.manual,
            }),
            i
          );
        }
        setState(t) {
          this.#u({ type: "setState", state: t });
        }
        cancel(t) {
          let e = this.#s?.promise;
          return (
            this.#s?.cancel(t), e ? e.then(n.ZT).catch(n.ZT) : Promise.resolve()
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
            (t) => !1 !== (0, n.TD)(t.options.enabled, this)
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === n.CN || !this.isFetched();
        }
        isFetched() {
          return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (t) => "static" === (0, n.KC)(t.options.staleTime, this)
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
                !(0, n.Kp)(this.state.dataUpdatedAt, t)))
          );
        }
        onFocus() {
          let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
          t?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
        }
        onOnline() {
          let t = this.observers.find((t) => t.shouldFetchOnReconnect());
          t?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.#n.notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((e) => e !== t)),
            this.observers.length ||
              (this.#s &&
                (this.#o || this.#c()
                  ? this.#s.cancel({ revert: !0 })
                  : this.#s.cancelRetry()),
              this.scheduleGc()),
            this.#n.notify({
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
          var i;
          if (
            "idle" !== this.state.fetchStatus &&
            this.#s?.status() !== "rejected"
          ) {
            if (void 0 !== this.state.data && e?.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            let t = this.observers.find((t) => t.options.queryFn);
            t && this.setOptions(t.options);
          }
          let r = new AbortController(),
            a = (t) => {
              Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => ((this.#o = !0), r.signal),
              });
            },
            u = () => {
              let t = (0, n.cG)(this.options, e),
                i = (() => {
                  let t = {
                    client: this.#r,
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return a(t), t;
                })();
              return ((this.#o = !1), this.options.persister)
                ? this.options.persister(t, i, this)
                : t(i);
            },
            c = (() => {
              let t = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#r,
                state: this.state,
                fetchFn: u,
              };
              return a(t), t;
            })(),
            l =
              "infinite" === this.#t
                ? ((i = this.options.pages),
                  {
                    onFetch: (t, e) => {
                      let r = t.options,
                        s = t.fetchOptions?.meta?.fetchMore?.direction,
                        a = t.state.data?.pages || [],
                        u = t.state.data?.pageParams || [],
                        c = { pages: [], pageParams: [] },
                        l = 0,
                        h = async () => {
                          let e = !1,
                            h = (i) => {
                              (0, n.I4)(
                                i,
                                () => t.signal,
                                () => (e = !0)
                              );
                            },
                            d = (0, n.cG)(t.options, t.fetchOptions),
                            f = async (i, r, s) => {
                              if (e) return Promise.reject(t.signal.reason);
                              if (null == r && i.pages.length)
                                return Promise.resolve(i);
                              let a = (() => {
                                  let e = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: r,
                                    direction: s ? "backward" : "forward",
                                    meta: t.options.meta,
                                  };
                                  return h(e), e;
                                })(),
                                o = await d(a),
                                { maxPages: u } = t.options,
                                c = s ? n.Ht : n.VX;
                              return {
                                pages: c(i.pages, o, u),
                                pageParams: c(i.pageParams, r, u),
                              };
                            };
                          if (s && a.length) {
                            let t = "backward" === s,
                              e = { pages: a, pageParams: u },
                              i = (
                                t
                                  ? function (t, { pages: e, pageParams: i }) {
                                      return e.length > 0
                                        ? t.getPreviousPageParam?.(
                                            e[0],
                                            e,
                                            i[0],
                                            i
                                          )
                                        : void 0;
                                    }
                                  : o
                              )(r, e);
                            c = await f(e, i, t);
                          } else {
                            let t = i ?? a.length;
                            do {
                              let t =
                                0 === l ? u[0] ?? r.initialPageParam : o(r, c);
                              if (l > 0 && null == t) break;
                              (c = await f(c, t)), l++;
                            } while (l < t);
                          }
                          return c;
                        };
                      t.options.persister
                        ? (t.fetchFn = () =>
                            t.options.persister?.(
                              h,
                              {
                                client: t.client,
                                queryKey: t.queryKey,
                                meta: t.options.meta,
                                signal: t.signal,
                              },
                              e
                            ))
                        : (t.fetchFn = h);
                    },
                  })
                : this.options.behavior;
          l?.onFetch(c, this),
            (this.#i = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !== c.fetchOptions?.meta) &&
              this.#u({ type: "fetch", meta: c.fetchOptions?.meta }),
            (this.#s = (0, s.Mz)({
              initialPromise: e?.initialPromise,
              fn: c.fetchFn,
              onCancel: (t) => {
                t instanceof s.p8 &&
                  t.revert &&
                  this.setState({ ...this.#i, fetchStatus: "idle" }),
                  r.abort();
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
            let t = await this.#s.start();
            if (void 0 === t)
              throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(t),
              this.#n.config.onSuccess?.(t, this),
              this.#n.config.onSettled?.(t, this.state.error, this),
              t
            );
          } catch (t) {
            if (t instanceof s.p8) {
              if (t.silent) return this.#s.promise;
              if (t.revert) {
                if (void 0 === this.state.data) throw t;
                return this.state.data;
              }
            }
            throw (
              (this.#u({ type: "error", error: t }),
              this.#n.config.onError?.(t, this),
              this.#n.config.onSettled?.(this.state.data, t, this),
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
                let i = {
                  ...e,
                  ...l(t.data, t.dataUpdatedAt),
                  dataUpdateCount: e.dataUpdateCount + 1,
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return (this.#i = t.manual ? i : void 0), i;
              case "error":
                let n = t.error;
                return {
                  ...e,
                  error: n,
                  errorUpdateCount: e.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: e.fetchFailureCount + 1,
                  fetchFailureReason: n,
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
            r.Vr.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate();
              }),
                this.#n.notify({ query: this, type: "updated", action: t });
            });
        }
      };
      function c(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, s.Kw)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
      function l(t, e) {
        return {
          data: t,
          dataUpdatedAt: e ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function h(t) {
        let e =
            "function" == typeof t.initialData
              ? t.initialData()
              : t.initialData,
          i = void 0 !== e,
          n = i
            ? "function" == typeof t.initialDataUpdatedAt
              ? t.initialDataUpdatedAt()
              : t.initialDataUpdatedAt
            : 0;
        return {
          data: e,
          dataUpdateCount: 0,
          dataUpdatedAt: i ? n ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: i ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    54114: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return f;
        },
      });
      var n = i(45345),
        r = i(8028),
        s = i(18238),
        a = i(24112),
        o = class extends a.l {
          constructor(t = {}) {
            super(), (this.config = t), (this.#l = new Map());
          }
          #l;
          build(t, e, i) {
            let s = e.queryKey,
              a = e.queryHash ?? (0, n.Rm)(s, e),
              o = this.get(a);
            return (
              o ||
                ((o = new r.A({
                  client: t,
                  queryKey: s,
                  queryHash: a,
                  options: t.defaultQueryOptions(e),
                  state: i,
                  defaultOptions: t.getQueryDefaults(s),
                })),
                this.add(o)),
              o
            );
          }
          add(t) {
            this.#l.has(t.queryHash) ||
              (this.#l.set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            let e = this.#l.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#l.delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            s.Vr.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#l.get(t);
          }
          getAll() {
            return [...this.#l.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, n._x)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0
              ? e.filter((e) => (0, n._x)(t, e))
              : e;
          }
          notify(t) {
            s.Vr.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            s.Vr.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            s.Vr.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        u = i(2894),
        c = class extends a.l {
          constructor(t = {}) {
            super(),
              (this.config = t),
              (this.#h = new Set()),
              (this.#d = new Map()),
              (this.#f = 0);
          }
          #h;
          #d;
          #f;
          build(t, e, i) {
            let n = new u.m({
              client: t,
              mutationCache: this,
              mutationId: ++this.#f,
              options: t.defaultMutationOptions(e),
              state: i,
            });
            return this.add(n), n;
          }
          add(t) {
            this.#h.add(t);
            let e = l(t);
            if ("string" == typeof e) {
              let i = this.#d.get(e);
              i ? i.push(t) : this.#d.set(e, [t]);
            }
            this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            if (this.#h.delete(t)) {
              let e = l(t);
              if ("string" == typeof e) {
                let i = this.#d.get(e);
                if (i) {
                  if (i.length > 1) {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1);
                  } else i[0] === t && this.#d.delete(e);
                }
              }
            }
            this.notify({ type: "removed", mutation: t });
          }
          canRun(t) {
            let e = l(t);
            if ("string" != typeof e) return !0;
            {
              let i = this.#d.get(e),
                n = i?.find((t) => "pending" === t.state.status);
              return !n || n === t;
            }
          }
          runNext(t) {
            let e = l(t);
            if ("string" != typeof e) return Promise.resolve();
            {
              let i = this.#d.get(e)?.find((e) => e !== t && e.state.isPaused);
              return i?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            s.Vr.batch(() => {
              this.#h.forEach((t) => {
                this.notify({ type: "removed", mutation: t });
              }),
                this.#h.clear(),
                this.#d.clear();
            });
          }
          getAll() {
            return Array.from(this.#h);
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, n.X7)(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => (0, n.X7)(t, e));
          }
          notify(t) {
            s.Vr.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return s.Vr.batch(() =>
              Promise.all(t.map((t) => t.continue().catch(n.ZT)))
            );
          }
        };
      function l(t) {
        return t.options.scope?.id;
      }
      var h = i(87045),
        d = i(57853),
        f = class {
          #p;
          #y;
          #a;
          #m;
          #g;
          #v;
          #b;
          #w;
          constructor(t = {}) {
            (this.#p = t.queryCache || new o()),
              (this.#y = t.mutationCache || new c()),
              (this.#a = t.defaultOptions || {}),
              (this.#m = new Map()),
              (this.#g = new Map()),
              (this.#v = 0);
          }
          mount() {
            this.#v++,
              1 === this.#v &&
                ((this.#b = h.j.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#p.onFocus());
                })),
                (this.#w = d.N.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#p.onOnline());
                })));
          }
          unmount() {
            this.#v--,
              0 === this.#v &&
                (this.#b?.(),
                (this.#b = void 0),
                this.#w?.(),
                (this.#w = void 0));
          }
          isFetching(t) {
            return this.#p.findAll({ ...t, fetchStatus: "fetching" }).length;
          }
          isMutating(t) {
            return this.#y.findAll({ ...t, status: "pending" }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#p.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.defaultQueryOptions(t),
              i = this.#p.build(this, e),
              r = i.state.data;
            return void 0 === r
              ? this.fetchQuery(t)
              : (t.revalidateIfStale &&
                  i.isStaleByTime((0, n.KC)(e.staleTime, i)) &&
                  this.prefetchQuery(e),
                Promise.resolve(r));
          }
          getQueriesData(t) {
            return this.#p
              .findAll(t)
              .map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, i) {
            let r = this.defaultQueryOptions({ queryKey: t }),
              s = this.#p.get(r.queryHash),
              a = s?.state.data,
              o = (0, n.SE)(e, a);
            if (void 0 !== o)
              return this.#p.build(this, r).setData(o, { ...i, manual: !0 });
          }
          setQueriesData(t, e, i) {
            return s.Vr.batch(() =>
              this.#p
                .findAll(t)
                .map(({ queryKey: t }) => [t, this.setQueryData(t, e, i)])
            );
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#p.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#p;
            s.Vr.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let i = this.#p;
            return s.Vr.batch(
              () => (
                i.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries({ type: "active", ...t }, e)
              )
            );
          }
          cancelQueries(t, e = {}) {
            let i = { revert: !0, ...e };
            return Promise.all(
              s.Vr.batch(() => this.#p.findAll(t).map((t) => t.cancel(i)))
            )
              .then(n.ZT)
              .catch(n.ZT);
          }
          invalidateQueries(t, e = {}) {
            return s.Vr.batch(() =>
              (this.#p.findAll(t).forEach((t) => {
                t.invalidate();
              }),
              t?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...t, type: t?.refetchType ?? t?.type ?? "active" },
                    e
                  )
            );
          }
          refetchQueries(t, e = {}) {
            let i = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
            return Promise.all(
              s.Vr.batch(() =>
                this.#p
                  .findAll(t)
                  .filter((t) => !t.isDisabled() && !t.isStatic())
                  .map((t) => {
                    let e = t.fetch(void 0, i);
                    return (
                      i.throwOnError || (e = e.catch(n.ZT)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  })
              )
            ).then(n.ZT);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let i = this.#p.build(this, e);
            return i.isStaleByTime((0, n.KC)(e.staleTime, i))
              ? i.fetch(e)
              : Promise.resolve(i.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(n.ZT).catch(n.ZT);
          }
          fetchInfiniteQuery(t) {
            return (t._type = "infinite"), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(n.ZT).catch(n.ZT);
          }
          ensureInfiniteQueryData(t) {
            return (t._type = "infinite"), this.ensureQueryData(t);
          }
          resumePausedMutations() {
            return d.N.isOnline()
              ? this.#y.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#p;
          }
          getMutationCache() {
            return this.#y;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(t) {
            this.#a = t;
          }
          setQueryDefaults(t, e) {
            this.#m.set((0, n.Ym)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#m.values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, n.to)(t, e.queryKey) && Object.assign(i, e.defaultOptions);
              }),
              i
            );
          }
          setMutationDefaults(t, e) {
            this.#g.set((0, n.Ym)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#g.values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, n.to)(t, e.mutationKey) &&
                  Object.assign(i, e.defaultOptions);
              }),
              i
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = {
              ...this.#a.queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, n.Rm)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
              e.queryFn === n.CN && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#a.mutations,
                  ...(t?.mutationKey &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#p.clear(), this.#y.clear();
          }
        };
    },
    79308: function (t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        _: function () {
          return C;
        },
      });
      var r = i(66188),
        s = i(82538);
      let a = (t) => (e, i, n) => {
          let r = n.subscribe;
          return (
            (n.subscribe = (t, e, i) => {
              let s = t;
              if (e) {
                let r = (null == i ? void 0 : i.equalityFn) || Object.is,
                  a = t(n.getState());
                (s = (i) => {
                  let n = t(i);
                  if (!r(a, n)) {
                    let t = a;
                    e((a = n), t);
                  }
                }),
                  (null == i ? void 0 : i.fireImmediately) && e(a, a);
              }
              return r(s);
            }),
            t(e, i, n)
          );
        },
        o = (t) => (e) => {
          try {
            let i = t(e);
            if (i instanceof Promise) return i;
            return {
              then: (t) => o(t)(i),
              catch(t) {
                return this;
              },
            };
          } catch (t) {
            return {
              then(t) {
                return this;
              },
              catch: (e) => o(e)(t),
            };
          }
        },
        u = (t, e) => (i, n, r) => {
          let s,
            a = {
              storage: (function (t, e) {
                let i;
                try {
                  i = t();
                } catch (t) {
                  return;
                }
                return {
                  getItem: (t) => {
                    var e;
                    let n = (t) => (null === t ? null : JSON.parse(t, void 0)),
                      r = null != (e = i.getItem(t)) ? e : null;
                    return r instanceof Promise ? r.then(n) : n(r);
                  },
                  setItem: (t, e) => i.setItem(t, JSON.stringify(e, void 0)),
                  removeItem: (t) => i.removeItem(t),
                };
              })(() => localStorage),
              partialize: (t) => t,
              version: 0,
              merge: (t, e) => ({ ...e, ...t }),
              ...e,
            },
            u = !1,
            c = new Set(),
            l = new Set(),
            h = a.storage;
          if (!h)
            return t(
              (...t) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  i(...t);
              },
              n,
              r
            );
          let d = () => {
              let t = a.partialize({ ...n() });
              return h.setItem(a.name, { state: t, version: a.version });
            },
            f = r.setState;
          r.setState = (t, e) => {
            f(t, e), d();
          };
          let p = t(
            (...t) => {
              i(...t), d();
            },
            n,
            r
          );
          r.getInitialState = () => p;
          let y = () => {
            var t, e;
            if (!h) return;
            (u = !1),
              c.forEach((t) => {
                var e;
                return t(null != (e = n()) ? e : p);
              });
            let r =
              (null == (e = a.onRehydrateStorage)
                ? void 0
                : e.call(a, null != (t = n()) ? t : p)) || void 0;
            return o(h.getItem.bind(h))(a.name)
              .then((t) => {
                if (t) {
                  if ("number" != typeof t.version || t.version === a.version)
                    return [!1, t.state];
                  if (a.migrate) return [!0, a.migrate(t.state, t.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((t) => {
                var e;
                let [r, o] = t;
                if ((i((s = a.merge(o, null != (e = n()) ? e : p)), !0), r))
                  return d();
              })
              .then(() => {
                null == r || r(s, void 0),
                  (s = n()),
                  (u = !0),
                  l.forEach((t) => t(s));
              })
              .catch((t) => {
                null == r || r(void 0, t);
              });
          };
          return (
            (r.persist = {
              setOptions: (t) => {
                (a = { ...a, ...t }), t.storage && (h = t.storage);
              },
              clearStorage: () => {
                null == h || h.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => y(),
              hasHydrated: () => u,
              onHydrate: (t) => (
                c.add(t),
                () => {
                  c.delete(t);
                }
              ),
              onFinishHydration: (t) => (
                l.add(t),
                () => {
                  l.delete(t);
                }
              ),
            }),
            a.skipHydration || y(),
            s || p
          );
        },
        c = (t) => {
          let e;
          let i = new Set(),
            n = (t, n) => {
              let r = "function" == typeof t ? t(e) : t;
              if (!Object.is(r, e)) {
                let t = e;
                (e = (null != n ? n : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, e, r)),
                  i.forEach((i) => i(e, t));
              }
            },
            r = () => e,
            s = {
              setState: n,
              getState: r,
              getInitialState: () => a,
              subscribe: (t) => (i.add(t), () => i.delete(t)),
            },
            a = (e = t(n, r, s));
          return s;
        },
        l = (t) => (t ? c(t) : c);
      var h = i(81467),
        d = i(87336);
      class f {
        constructor(t) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new d.v(),
            });
        }
        on(t, e) {
          this._emitter.on(t, e);
        }
        once(t, e) {
          this._emitter.once(t, e);
        }
        off(t, e) {
          this._emitter.off(t, e);
        }
        emit(t, ...e) {
          let i = e[0];
          this._emitter.emit(t, { uid: this.uid, ...i });
        }
        listenerCount(t) {
          return this._emitter.listenerCount(t);
        }
      }
      function p(t, e) {
        return JSON.parse(t, (t, i) => {
          let n = i;
          return (
            n?.__type === "bigint" && (n = BigInt(n.value)),
            n?.__type === "Map" && (n = new Map(n.value)),
            e?.(t, n) ?? n
          );
        });
      }
      function y(t, e) {
        return t.slice(0, e).join(".") || ".";
      }
      function m(t, e) {
        let { length: i } = t;
        for (let n = 0; n < i; ++n) if (t[n] === e) return n + 1;
        return 0;
      }
      function g(t, e, i, n) {
        return JSON.stringify(
          t,
          (function (t, e) {
            let i = "function" == typeof t,
              n = "function" == typeof e,
              r = [],
              s = [];
            return function (a, o) {
              if ("object" == typeof o) {
                if (r.length) {
                  let t = m(r, this);
                  0 === t ? (r[r.length] = this) : (r.splice(t), s.splice(t)),
                    (s[s.length] = a);
                  let i = m(r, o);
                  if (0 !== i)
                    return n ? e.call(this, a, o, y(s, i)) : `[ref=${y(s, i)}]`;
                } else (r[0] = o), (s[0] = a);
              }
              return i ? t.call(this, a, o) : o;
            };
          })((t, i) => {
            let n = i;
            return (
              "bigint" == typeof n &&
                (n = { __type: "bigint", value: i.toString() }),
              n instanceof Map &&
                (n = { __type: "Map", value: Array.from(i.entries()) }),
              e?.(t, n) ?? n
            );
          }, n),
          i ?? void 0
        );
      }
      let v = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var b = i(13102);
      let w = 256;
      var S = i(19676);
      function C(t) {
        let e;
        let {
            multiInjectedProviderDiscovery: i = !0,
            storage: o = (function (t) {
              let {
                deserialize: e = p,
                key: i = "wagmi",
                serialize: n = g,
                storage: r = v,
              } = t;
              function s(t) {
                return t instanceof Promise
                  ? t.then((t) => t).catch(() => null)
                  : t;
              }
              return {
                ...r,
                key: i,
                async getItem(t, n) {
                  let a = r.getItem(`${i}.${t}`),
                    o = await s(a);
                  return o ? e(o) ?? null : n ?? null;
                },
                async setItem(t, e) {
                  let a = `${i}.${t}`;
                  null === e
                    ? await s(r.removeItem(a))
                    : await s(r.setItem(a, n(e)));
                },
                async removeItem(t) {
                  await s(r.removeItem(`${i}.${t}`));
                },
              };
            })({
              storage: (function () {
                let t =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : v;
                return {
                  getItem: (e) => t.getItem(e),
                  removeItem(e) {
                    t.removeItem(e);
                  },
                  setItem(e, i) {
                    try {
                      t.setItem(e, i);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: c = !0,
            ssr: d = !1,
            ...y
          } = t,
          m =
            "undefined" != typeof window && i
              ? (function () {
                  let t = new Set(),
                    e = [],
                    i = () =>
                      (0, r.j)((i) => {
                        e.some(({ info: t }) => t.uuid === i.info.uuid) ||
                          ((e = [...e, i]),
                          t.forEach((t) => t(e, { added: [i] })));
                      }),
                    n = i();
                  return {
                    _listeners: () => t,
                    clear() {
                      t.forEach((t) => t([], { removed: [...e] })), (e = []);
                    },
                    destroy() {
                      this.clear(), t.clear(), n?.();
                    },
                    findProvider: ({ rdns: t }) =>
                      e.find((e) => e.info.rdns === t),
                    getProviders: () => e,
                    reset() {
                      this.clear(), n?.(), (n = i());
                    },
                    subscribe: (i, { emitImmediately: n } = {}) => (
                      t.add(i), n && i(e, { added: e }), () => t.delete(i)
                    ),
                  };
                })()
              : void 0,
          C = l(() => y.chains),
          O = l(() => {
            let t = [],
              e = new Set();
            for (let i of y.connectors ?? []) {
              let n = q(i);
              if ((t.push(n), !d && n.rdns))
                for (let t of "string" == typeof n.rdns ? [n.rdns] : n.rdns)
                  e.add(t);
            }
            if (!d && m)
              for (let i of m.getProviders())
                e.has(i.info.rdns) || t.push(q(I(i)));
            return t;
          });
        function q(t) {
          let e = new f(
              (function (t = 11) {
                if (!n || w + t > 512) {
                  (n = ""), (w = 0);
                  for (let t = 0; t < 256; t++)
                    n += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return n.substring(w, w++ + t);
              })()
            ),
            i = {
              ...t({
                emitter: e,
                chains: C.getState(),
                storage: o,
                transports: y.transports,
              }),
              emitter: e,
              uid: e.uid,
            };
          return e.on("connect", Q), i.setup?.(), i;
        }
        function I(t) {
          let { info: e } = t,
            i = t.provider;
          return (0, h.L)({ target: { ...e, id: e.rdns, provider: i } });
        }
        let _ = new Map();
        function P() {
          return {
            chainId: C.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let A = "0.0.0-canary-";
        e = S.i.startsWith(A)
          ? Number.parseInt(S.i.replace(A, ""), 10)
          : Number.parseInt(S.i.split(".")[0] ?? "0", 10);
        let F = l(
          a(
            o
              ? u(P, {
                  migrate(t, i) {
                    if (i === e) return t;
                    let n = P(),
                      r = M(t, n.chainId);
                    return { ...n, chainId: r };
                  },
                  name: "store",
                  partialize: (t) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(t.connections.entries()).map(
                        ([t, e]) => {
                          let { id: i, name: n, type: r, uid: s } = e.connector;
                          return [
                            t,
                            {
                              ...e,
                              connector: { id: i, name: n, type: r, uid: s },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: t.chainId,
                    current: t.current,
                  }),
                  merge(t, e) {
                    "object" == typeof t &&
                      t &&
                      "status" in t &&
                      delete t.status;
                    let i = M(t, e.chainId);
                    return { ...e, ...t, chainId: i };
                  },
                  skipHydration: d,
                  storage: o,
                  version: e,
                })
              : P
          )
        );
        function M(t, e) {
          return t &&
            "object" == typeof t &&
            "chainId" in t &&
            "number" == typeof t.chainId &&
            C.getState().some((e) => e.id === t.chainId)
            ? t.chainId
            : e;
        }
        function D(t) {
          F.setState((e) => {
            let i = e.connections.get(t.uid);
            return i
              ? {
                  ...e,
                  connections: new Map(e.connections).set(t.uid, {
                    accounts: t.accounts ?? i.accounts,
                    chainId: t.chainId ?? i.chainId,
                    connector: i.connector,
                  }),
                }
              : e;
          });
        }
        function Q(t) {
          "connecting" !== F.getState().status &&
            "reconnecting" !== F.getState().status &&
            F.setState((e) => {
              let i = O.getState().find((e) => e.uid === t.uid);
              return i
                ? (i.emitter.listenerCount("connect") &&
                    i.emitter.off("connect", D),
                  i.emitter.listenerCount("change") ||
                    i.emitter.on("change", D),
                  i.emitter.listenerCount("disconnect") ||
                    i.emitter.on("disconnect", E),
                  {
                    ...e,
                    connections: new Map(e.connections).set(t.uid, {
                      accounts: t.accounts,
                      chainId: t.chainId,
                      connector: i,
                    }),
                    current: t.uid,
                    status: "connected",
                  })
                : e;
            });
        }
        function E(t) {
          F.setState((e) => {
            let i = e.connections.get(t.uid);
            if (i) {
              let t = i.connector;
              t.emitter.listenerCount("change") &&
                i.connector.emitter.off("change", D),
                t.emitter.listenerCount("disconnect") &&
                  i.connector.emitter.off("disconnect", E),
                t.emitter.listenerCount("connect") ||
                  i.connector.emitter.on("connect", Q);
            }
            if ((e.connections.delete(t.uid), 0 === e.connections.size))
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let n = e.connections.values().next().value;
            return {
              ...e,
              connections: new Map(e.connections),
              current: n.connector.uid,
            };
          });
        }
        return (
          F.setState(P()),
          c &&
            F.subscribe(
              ({ connections: t, current: e }) =>
                e ? t.get(e)?.chainId : void 0,
              (t) => {
                if (C.getState().some((e) => e.id === t))
                  return F.setState((e) => ({ ...e, chainId: t ?? e.chainId }));
              }
            ),
          m?.subscribe((t) => {
            let e = new Set(),
              i = new Set();
            for (let t of O.getState())
              if ((e.add(t.id), t.rdns))
                for (let e of "string" == typeof t.rdns ? [t.rdns] : t.rdns)
                  i.add(e);
            let n = [];
            for (let r of t) {
              if (i.has(r.info.rdns)) continue;
              let t = q(I(r));
              e.has(t.id) || n.push(t);
            }
            (!o || F.persist.hasHydrated()) &&
              O.setState((t) => [...t, ...n], !0);
          }),
          {
            get chains() {
              return C.getState();
            },
            get connectors() {
              return O.getState();
            },
            storage: o,
            getClient: function (t = {}) {
              let e;
              let i = t.chainId ?? F.getState().chainId,
                n = C.getState().find((t) => t.id === i);
              if (t.chainId && !n) throw new b.X4();
              {
                let t = _.get(F.getState().chainId);
                if (t && !n) return t;
                if (!n) throw new b.X4();
              }
              {
                let t = _.get(i);
                if (t) return t;
              }
              if (y.client) e = y.client({ chain: n });
              else {
                let t = n.id,
                  i = C.getState().map((t) => t.id),
                  r = {};
                for (let [e, n] of Object.entries(y))
                  if (
                    "chains" !== e &&
                    "client" !== e &&
                    "connectors" !== e &&
                    "transports" !== e
                  ) {
                    if ("object" == typeof n) {
                      if (t in n) r[e] = n[t];
                      else {
                        if (i.some((t) => t in n)) continue;
                        r[e] = n;
                      }
                    } else r[e] = n;
                  }
                e = (0, s.eI)({
                  ...r,
                  chain: n,
                  batch: r.batch ?? { multicall: !0 },
                  transport: (e) => y.transports[t]({ ...e, connectors: O }),
                });
              }
              return _.set(i, e), e;
            },
            get state() {
              return F.getState();
            },
            setState(t) {
              let e;
              e = "function" == typeof t ? t(F.getState()) : t;
              let i = P();
              "object" != typeof e && (e = i),
                Object.keys(i).some((t) => !(t in e)) && (e = i),
                F.setState(e, !0);
            },
            subscribe: (t, e, i) =>
              F.subscribe(
                t,
                e,
                i ? { ...i, fireImmediately: i.emitImmediately } : void 0
              ),
            _internal: {
              mipd: m,
              async revalidate() {
                let t = F.getState(),
                  e = t.connections,
                  i = t.current;
                for (let [, t] of e) {
                  let n = t.connector;
                  (n.isAuthorized && (await n.isAuthorized())) ||
                    (e.delete(n.uid), i !== n.uid || (i = null));
                }
                F.setState((t) => ({ ...t, connections: e, current: i }));
              },
              store: F,
              ssr: !!d,
              syncConnectedChain: c,
              transports: y.transports,
              chains: {
                setState(t) {
                  let e = "function" == typeof t ? t(C.getState()) : t;
                  if (0 !== e.length) return C.setState(e, !0);
                },
                subscribe: (t) => C.subscribe(t),
              },
              connectors: {
                providerDetailToConnector: I,
                setup: q,
                setState: (t) =>
                  O.setState("function" == typeof t ? t(O.getState()) : t, !0),
                subscribe: (t) => O.subscribe(t),
              },
              events: { change: D, connect: Q, disconnect: E },
            },
          }
        );
      }
    },
    66188: function (t, e, i) {
      "use strict";
      function n(t) {
        let e = new CustomEvent("eip6963:announceProvider", {
          detail: Object.freeze(t),
        });
        window.dispatchEvent(e);
        let i = () => window.dispatchEvent(e);
        return (
          window.addEventListener("eip6963:requestProvider", i),
          () => window.removeEventListener("eip6963:requestProvider", i)
        );
      }
      function r(t) {
        if ("undefined" == typeof window) return;
        let e = (e) => t(e.detail);
        return (
          window.addEventListener("eip6963:announceProvider", e),
          window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
          () => window.removeEventListener("eip6963:announceProvider", e)
        );
      }
      i.d(e, {
        V: function () {
          return n;
        },
        j: function () {
          return r;
        },
      });
    },
    19775: function (t, e, i) {
      "use strict";
      function n(t) {
        return "string" == typeof t ? { address: t, type: "json-rpc" } : t;
      }
      i.d(e, {
        T: function () {
          return n;
        },
      });
    },
    82538: function (t, e, i) {
      "use strict";
      i.d(e, {
        eI: function () {
          return s;
        },
        xz: function () {
          return o;
        },
      });
      var n = i(19775),
        r = i(78217);
      function s(t) {
        let {
            batch: e,
            chain: i,
            ccipRead: s,
            dataSuffix: o,
            key: u = "base",
            name: c = "Base Client",
            tokens: l,
            type: h = "base",
          } = t,
          d =
            t.experimental_blockTag ??
            ("number" == typeof i?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          f = i?.blockTime ?? 12e3,
          p =
            t.pollingInterval ??
            Math.min(Math.max(Math.floor(f / 2), 500), 4e3),
          y = t.cacheTime ?? p,
          m = t.account ? (0, n.T)(t.account) : void 0,
          {
            config: g,
            request: v,
            value: b,
          } = t.transport({ account: m, chain: i, pollingInterval: p }),
          w = {
            account: m,
            batch: e,
            cacheTime: y,
            ccipRead: s,
            chain: i,
            dataSuffix: o,
            key: u,
            name: c,
            pollingInterval: p,
            request: v,
            tokens: l,
            transport: { ...g, ...b },
            type: h,
            uid: (0, r.h)(),
            ...(d ? { experimental_blockTag: d } : {}),
          };
        return Object.assign(w, {
          extend: (function t(e) {
            return (i) => {
              let n = i(e);
              for (let t in w) delete n[t];
              let r = { ...e, ...n };
              for (let t in n) {
                let i = e[t],
                  s = n[t];
                a(i) && a(s) && (r[t] = { ...i, ...s });
              }
              return Object.assign(r, { extend: t(r) });
            };
          })(w),
        });
      }
      function a(t) {
        if ("object" != typeof t || null === t) return !1;
        let e = Object.getPrototypeOf(t);
        return e === Object.prototype || null === e;
      }
      function o(t, e) {
        let i = (i = {}) => e(t, i);
        for (let n of [
          "call",
          "calls",
          "callWithPeriod",
          "estimateGas",
          "prepare",
          "prepareRecipient",
          "predict",
          "simulate",
        ])
          if (Object.hasOwn(e, n)) {
            let r = e[n];
            i[n] = (e = {}) => (1 === r.length ? r(e) : r(t, e));
          }
        for (let t of ["extractEvent", "extractEvents"])
          Object.hasOwn(e, t) && (i[t] = e[t]);
        return i;
      }
    },
    1626: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return h;
        },
      });
      var n = i(17057),
        r = i(81544);
      class s extends r.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = i(43226),
        o = i(80851),
        u = i(24250);
      let c = 0,
        l = new WeakMap();
      function h(t, e = {}) {
        let {
          batch: i,
          fetchFn: r,
          fetchOptions: h,
          key: d = "http",
          maxResponseBodySize: f,
          methods: p,
          name: y = "HTTP JSON-RPC",
          onFetchRequest: m,
          onFetchResponse: g,
          retryDelay: v,
          raw: b,
        } = e;
        return ({ chain: w, retryCount: S, timeout: C }) => {
          let { batchSize: O = 1e3, wait: q = 0 } =
              "object" == typeof i ? i : {},
            I = e.retryCount ?? S,
            _ = C ?? e.timeout ?? 1e4,
            P = t || w?.rpcUrls.default.http[0];
          if (!P) throw new s();
          let A = (0, o.x)(P, {
            fetchFn: r,
            fetchOptions: h,
            maxResponseBodySize: f,
            onRequest: m,
            onResponse: g,
            timeout: _,
          });
          return (0, u.q)(
            {
              key: d,
              methods: p,
              name: y,
              async request({ method: t, params: e }, r) {
                let s = { method: t, params: e },
                  o = r?.signal ? { signal: r.signal } : void 0,
                  { schedule: u } = (0, a.S)({
                    id: `${P}.${(function (t) {
                      if (!t) return "default";
                      let e = l.get(t);
                      if (void 0 !== e) return e;
                      let i = c++;
                      return l.set(t, i), i;
                    })(r?.signal)}`,
                    wait: q,
                    shouldSplitBatch: (t) => t.length > O,
                    fn: (t) => A.request({ body: t, fetchOptions: o }),
                    sort: (t, e) => t.id - e.id,
                  }),
                  h = async (t) =>
                    i ? u(t) : [await A.request({ body: t, fetchOptions: o })],
                  [{ error: d, result: f }] = await h(s);
                if (b) return { error: d, result: f };
                if (d) throw new n.bs({ body: s, error: d, url: P });
                return f;
              },
              retryCount: I,
              retryDelay: v,
              timeout: _,
              type: "http",
            },
            { fetchOptions: h, url: P }
          );
        };
      }
    },
    43226: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return s;
        },
      });
      var n = i(56921);
      let r = new Map();
      function s({ fn: t, id: e, shouldSplitBatch: i, wait: s = 0, sort: a }) {
        let o = async () => {
            let e = l();
            u();
            let i = e.map(({ args: t }) => t);
            0 !== i.length &&
              t(i)
                .then((t) => {
                  a && Array.isArray(t) && t.sort(a);
                  for (let i = 0; i < e.length; i++) {
                    let { resolve: n } = e[i];
                    n?.([t[i], t]);
                  }
                })
                .catch((t) => {
                  for (let i = 0; i < e.length; i++) {
                    let { reject: n } = e[i];
                    n?.(t);
                  }
                });
          },
          u = () => r.delete(e),
          c = () => l().map(({ args: t }) => t),
          l = () => r.get(e) || [],
          h = (t) => r.set(e, [...l(), t]);
        return {
          flush: u,
          async schedule(t) {
            let { promise: e, resolve: r, reject: a } = (0, n.n)();
            return (
              (i?.([...c(), t]) && o(), l().length > 0)
                ? h({ args: t, resolve: r, reject: a })
                : (h({ args: t, resolve: r, reject: a }), setTimeout(o, s)),
              e
            );
          },
        };
      }
    },
    56921: function (t, e, i) {
      "use strict";
      function n() {
        let t = () => void 0,
          e = () => void 0;
        return {
          promise: new Promise((i, n) => {
            (t = i), (e = n);
          }),
          resolve: t,
          reject: e,
        };
      }
      i.d(e, {
        n: function () {
          return n;
        },
      });
    },
  },
]);
