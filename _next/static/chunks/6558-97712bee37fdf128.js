(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6558],
  {
    40257: function (e, t, n) {
      "use strict";
      var r, i;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(44227);
    },
    44227: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                i = (e.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function o() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (e) {
                  n = o;
                }
              })();
              var u = [],
                c = !1,
                l = -1;
              function h() {
                c &&
                  r &&
                  ((c = !1),
                  r.length ? (u = r.concat(u)) : (l = -1),
                  u.length && f());
              }
              function f() {
                if (!c) {
                  var e = a(h);
                  c = !0;
                  for (var t = u.length; t; ) {
                    for (r = u, u = []; ++l < t; ) r && r[l].run();
                    (l = -1), (t = u.length);
                  }
                  (r = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === o || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                u.push(new d(e, t)), 1 !== u.length || c || a(f);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var s = (n[e] = { exports: {} }),
            o = !0;
          try {
            t[e](s, s.exports, r), (o = !1);
          } finally {
            o && delete n[e];
          }
          return s.exports;
        }
        r.ab = "//";
        var i = r(229);
        e.exports = i;
      })();
    },
    16177: function (e, t, n) {
      "use strict";
      n.d(t, {
        $p: function () {
          return h;
        },
        EP: function () {
          return f;
        },
        FL: function () {
          return l;
        },
        Fn: function () {
          return y;
        },
        IH: function () {
          return m;
        },
        Iq: function () {
          return a;
        },
        NI: function () {
          return o;
        },
        Ou: function () {
          return c;
        },
        SD: function () {
          return p;
        },
        Vl: function () {
          return s;
        },
        Xb: function () {
          return v;
        },
        ac: function () {
          return g;
        },
        gm: function () {
          return d;
        },
        m_: function () {
          return u;
        },
        mk: function () {
          return b;
        },
        pp: function () {
          return $;
        },
        u8: function () {
          return x;
        },
        zP: function () {
          return w;
        },
      });
      let r = BigInt(4294967296 - 1),
        i = BigInt(32);
      function s(e, t = !1) {
        let n = e.length,
          s = new Uint32Array(n),
          o = new Uint32Array(n);
        for (let a = 0; a < n; a++) {
          let { h: n, l: u } = (function (e, t = !1) {
            return t
              ? { h: Number(e & r), l: Number((e >> i) & r) }
              : { h: 0 | Number((e >> i) & r), l: 0 | Number(e & r) };
          })(e[a], t);
          [s[a], o[a]] = [n, u];
        }
        return [s, o];
      }
      let o = (e, t, n) => e >>> n,
        a = (e, t, n) => (e << (32 - n)) | (t >>> n),
        u = (e, t, n) => (e >>> n) | (t << (32 - n)),
        c = (e, t, n) => (e << (32 - n)) | (t >>> n),
        l = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        h = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        f = (e, t, n) => (e << n) | (t >>> (32 - n)),
        d = (e, t, n) => (t << n) | (e >>> (32 - n)),
        p = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        b = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function m(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 4294967296) | 0)) | 0, l: 0 | i };
      }
      let g = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        y = (e, t, n, r) => (t + n + r + ((e / 4294967296) | 0)) | 0,
        v = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        x = (e, t, n, r, i) => (t + n + r + i + ((e / 4294967296) | 0)) | 0,
        w = (e, t, n, r, i) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        $ = (e, t, n, r, i, s) =>
          (t + n + r + i + s + ((e / 4294967296) | 0)) | 0;
    },
    68553: function (e, t, n) {
      "use strict";
      n.d(t, {
        JQ: function () {
          return v;
        },
        iC: function () {
          return w;
        },
        o: function () {
          return x;
        },
      });
      var r = n(25884);
      class i extends r.kb {
        constructor(e, t, n, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, r.GL)(this.buffer));
        }
        update(e) {
          (0, r.$h)(this), (e = (0, r.O0)(e)), (0, r.gk)(e);
          let { view: t, buffer: n, blockLen: i } = this,
            s = e.length;
          for (let o = 0; o < s; ) {
            let a = Math.min(i - this.pos, s - o);
            if (a === i) {
              let t = (0, r.GL)(e);
              for (; i <= s - o; o += i) this.process(t, o);
              continue;
            }
            n.set(e.subarray(o, o + a), this.pos),
              (this.pos += a),
              (o += a),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.$h)(this), (0, r.eB)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: i, isLE: s } = this,
            { pos: o } = this;
          (t[o++] = 128),
            (0, r.ru)(this.buffer.subarray(o)),
            this.padOffset > i - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < i; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let i = BigInt(32),
              s = BigInt(4294967295),
              o = Number((n >> i) & s),
              a = Number(n & s),
              u = r ? 4 : 0,
              c = r ? 0 : 4;
            e.setUint32(t + u, o, r), e.setUint32(t + c, a, r);
          })(n, i - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          let a = (0, r.GL)(e),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = u / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) a.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.destroyed = s),
            (e.finished = i),
            (e.length = r),
            (e.pos = o),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let s = Uint32Array.from([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        o = Uint32Array.from([
          3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
          355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
          3675008525, 1694076839, 1203062813, 3204075428,
        ]),
        a = Uint32Array.from([
          1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
          4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
          2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
        ]);
      var u = n(16177);
      let c = Uint32Array.from([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        l = new Uint32Array(64);
      class h extends i {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: i, F: s, G: o, H: a } = this;
          return [e, t, n, r, i, s, o, a];
        }
        set(e, t, n, r, i, s, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) l[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = l[e - 15],
              n = l[e - 2],
              i = (0, r.np)(t, 7) ^ (0, r.np)(t, 18) ^ (t >>> 3),
              s = (0, r.np)(n, 17) ^ (0, r.np)(n, 19) ^ (n >>> 10);
            l[e] = (s + l[e - 7] + i + l[e - 16]) | 0;
          }
          let { A: n, B: i, C: s, D: o, E: a, F: u, G: h, H: f } = this;
          for (let e = 0; e < 64; e++) {
            var d, p, b, m;
            let t =
                (f +
                  ((0, r.np)(a, 6) ^ (0, r.np)(a, 11) ^ (0, r.np)(a, 25)) +
                  (((d = a) & u) ^ (~d & h)) +
                  c[e] +
                  l[e]) |
                0,
              g =
                (((0, r.np)(n, 2) ^ (0, r.np)(n, 13) ^ (0, r.np)(n, 22)) +
                  (((p = n) & (b = i)) ^ (p & (m = s)) ^ (b & m))) |
                0;
            (f = h),
              (h = u),
              (u = a),
              (a = (o + t) | 0),
              (o = s),
              (s = i),
              (i = n),
              (n = (t + g) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (o = (o + this.D) | 0),
            (a = (a + this.E) | 0),
            (u = (u + this.F) | 0),
            (h = (h + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(n, i, s, o, a, u, h, f);
        }
        roundClean() {
          (0, r.ru)(l);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, r.ru)(this.buffer);
        }
      }
      let f = u.Vl(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        d = f[0],
        p = f[1],
        b = new Uint32Array(80),
        m = new Uint32Array(80);
      class g extends i {
        constructor(e = 64) {
          super(128, e, 16, !1),
            (this.Ah = 0 | a[0]),
            (this.Al = 0 | a[1]),
            (this.Bh = 0 | a[2]),
            (this.Bl = 0 | a[3]),
            (this.Ch = 0 | a[4]),
            (this.Cl = 0 | a[5]),
            (this.Dh = 0 | a[6]),
            (this.Dl = 0 | a[7]),
            (this.Eh = 0 | a[8]),
            (this.El = 0 | a[9]),
            (this.Fh = 0 | a[10]),
            (this.Fl = 0 | a[11]),
            (this.Gh = 0 | a[12]),
            (this.Gl = 0 | a[13]),
            (this.Hh = 0 | a[14]),
            (this.Hl = 0 | a[15]);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: n,
            Bl: r,
            Ch: i,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: u,
            El: c,
            Fh: l,
            Fl: h,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, n, r, i, s, o, a, u, c, l, h, f, d, p, b];
        }
        set(e, t, n, r, i, s, o, a, u, c, l, h, f, d, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | c),
            (this.Fh = 0 | l),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4)
            (b[n] = e.getUint32(t)), (m[n] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | b[e - 15],
              n = 0 | m[e - 15],
              r = u.m_(t, n, 1) ^ u.m_(t, n, 8) ^ u.NI(t, n, 7),
              i = u.Ou(t, n, 1) ^ u.Ou(t, n, 8) ^ u.Iq(t, n, 7),
              s = 0 | b[e - 2],
              o = 0 | m[e - 2],
              a = u.m_(s, o, 19) ^ u.FL(s, o, 61) ^ u.NI(s, o, 6),
              c = u.Ou(s, o, 19) ^ u.$p(s, o, 61) ^ u.Iq(s, o, 6),
              l = u.Xb(i, c, m[e - 7], m[e - 16]),
              h = u.u8(l, r, a, b[e - 7], b[e - 16]);
            (b[e] = 0 | h), (m[e] = 0 | l);
          }
          let {
            Ah: n,
            Al: r,
            Bh: i,
            Bl: s,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: f,
            Fh: g,
            Fl: y,
            Gh: v,
            Gl: x,
            Hh: w,
            Hl: $,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = u.m_(h, f, 14) ^ u.m_(h, f, 18) ^ u.FL(h, f, 41),
              P = u.Ou(h, f, 14) ^ u.Ou(h, f, 18) ^ u.$p(h, f, 41),
              C = (h & g) ^ (~h & v),
              I = (f & y) ^ (~f & x),
              E = u.zP($, P, I, p[e], m[e]),
              G = u.pp(E, w, t, C, d[e], b[e]),
              T = 0 | E,
              B = u.m_(n, r, 28) ^ u.FL(n, r, 34) ^ u.FL(n, r, 39),
              U = u.Ou(n, r, 28) ^ u.$p(n, r, 34) ^ u.$p(n, r, 39),
              F = (n & i) ^ (n & o) ^ (i & o),
              O = (r & s) ^ (r & a) ^ (s & a);
            (w = 0 | v),
              ($ = 0 | x),
              (v = 0 | g),
              (x = 0 | y),
              (g = 0 | h),
              (y = 0 | f),
              ({ h: h, l: f } = u.IH(0 | c, 0 | l, 0 | G, 0 | T)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | i),
              (a = 0 | s),
              (i = 0 | n),
              (s = 0 | r);
            let k = u.ac(T, U, O);
            (n = u.Fn(k, G, B, F)), (r = 0 | k);
          }
          ({ h: n, l: r } = u.IH(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: i, l: s } = u.IH(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)),
            ({ h: o, l: a } = u.IH(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = u.IH(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: f } = u.IH(0 | this.Eh, 0 | this.El, 0 | h, 0 | f)),
            ({ h: g, l: y } = u.IH(0 | this.Fh, 0 | this.Fl, 0 | g, 0 | y)),
            ({ h: v, l: x } = u.IH(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | x)),
            ({ h: w, l: $ } = u.IH(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | $)),
            this.set(n, r, i, s, o, a, c, l, h, f, g, y, v, x, w, $);
        }
        roundClean() {
          (0, r.ru)(b, m);
        }
        destroy() {
          (0, r.ru)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class y extends g {
        constructor() {
          super(48),
            (this.Ah = 0 | o[0]),
            (this.Al = 0 | o[1]),
            (this.Bh = 0 | o[2]),
            (this.Bl = 0 | o[3]),
            (this.Ch = 0 | o[4]),
            (this.Cl = 0 | o[5]),
            (this.Dh = 0 | o[6]),
            (this.Dl = 0 | o[7]),
            (this.Eh = 0 | o[8]),
            (this.El = 0 | o[9]),
            (this.Fh = 0 | o[10]),
            (this.Fl = 0 | o[11]),
            (this.Gh = 0 | o[12]),
            (this.Gl = 0 | o[13]),
            (this.Hh = 0 | o[14]),
            (this.Hl = 0 | o[15]);
        }
      }
      let v = (0, r.V1)(() => new h()),
        x = (0, r.V1)(() => new g()),
        w = (0, r.V1)(() => new y());
    },
    29272: function (e, t, n) {
      "use strict";
      n.d(t, {
        JQ: function () {
          return r;
        },
      });
      let r = n(68553).JQ;
    },
    92530: function (e, t, n) {
      "use strict";
      n.d(t, {
        fr: function () {
          return x;
        },
      });
      var r = n(16177),
        i = n(25884);
      let s = BigInt(0),
        o = BigInt(1),
        a = BigInt(2),
        u = BigInt(7),
        c = BigInt(256),
        l = BigInt(113),
        h = [],
        f = [],
        d = [];
      for (let e = 0, t = o, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          h.push(2 * (5 * r + n)),
          f.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = s;
        for (let e = 0; e < 7; e++)
          (t = ((t << o) ^ ((t >> u) * l)) % c) & a &&
            (i ^= o << ((o << BigInt(e)) - o));
        d.push(i);
      }
      let p = (0, r.Vl)(d, !0),
        b = p[0],
        m = p[1],
        g = (e, t, n) => (n > 32 ? (0, r.SD)(e, t, n) : (0, r.EP)(e, t, n)),
        y = (e, t, n) => (n > 32 ? (0, r.mk)(e, t, n) : (0, r.gm)(e, t, n));
      class v extends i.kb {
        constructor(e, t, n, r = !1, s = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = s),
            (0, i.k8)(n),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.Jq)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, i.Ux)(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    i = (t + 2) % 10,
                    s = n[i],
                    o = n[i + 1],
                    a = g(s, o, 1) ^ n[r],
                    u = y(s, o, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[t + n] ^= a), (e[t + n + 1] ^= u);
                }
                let t = e[2],
                  i = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = f[n],
                    s = g(t, i, r),
                    o = y(t, i, r),
                    a = h[n];
                  (t = e[a]), (i = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= b[r]), (e[1] ^= m[r]);
              }
              (0, i.ru)(n);
            })(this.state32, this.rounds),
            (0, i.Ux)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, i.$h)(this), (e = (0, i.O0)(e)), (0, i.gk)(e);
          let { blockLen: t, state: n } = this,
            r = e.length;
          for (let i = 0; i < r; ) {
            let s = Math.min(t - this.pos, r - i);
            for (let t = 0; t < s; t++) n[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, i.$h)(this, !1), (0, i.gk)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + s), r),
              (this.posOut += s),
              (r += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, i.k8)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, i.eB)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, i.ru)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new v(t, n, r, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let x = (0, i.V1)(() => new v(136, 1, 32));
    },
    25884: function (e, t, n) {
      "use strict";
      n.d(t, {
        kb: function () {
          return m;
        },
        gk: function () {
          return s;
        },
        $h: function () {
          return a;
        },
        z3: function () {
          return o;
        },
        k8: function () {
          return i;
        },
        eB: function () {
          return u;
        },
        ru: function () {
          return l;
        },
        eV: function () {
          return b;
        },
        V1: function () {
          return g;
        },
        GL: function () {
          return h;
        },
        O6: function () {
          return y;
        },
        np: function () {
          return f;
        },
        Ux: function () {
          return d;
        },
        O0: function () {
          return p;
        },
        Jq: function () {
          return c;
        },
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function o(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        i(e.outputLen), i(e.blockLen);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function u(e, t) {
        s(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      function c(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function l(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function h(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function f(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let d =
        68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]
          ? (e) => e
          : function (e) {
              for (let n = 0; n < e.length; n++) {
                var t;
                e[n] =
                  (((t = e[n]) << 24) & 4278190080) |
                  ((t << 8) & 16711680) |
                  ((t >>> 8) & 65280) |
                  ((t >>> 24) & 255);
              }
              return e;
            };
      function p(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s(e),
          e
        );
      }
      function b(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          s(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      class m {}
      function g(e) {
        let t = (t) => e().update(p(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function y(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes)
          return Uint8Array.from(r.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    73252: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var i = n(45345),
        s =
          ((r = () => i.sk),
          {
            isServer: () => r(),
            setIsServer(e) {
              r = e;
            },
          });
    },
    87045: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      var r = n(24112),
        i = new (class extends r.l {
          #e;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if ("undefined" != typeof window && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    2894: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return a;
        },
        m: function () {
          return o;
        },
      });
      var r = n(18238),
        i = n(7989),
        s = n(11255),
        o = class extends i.F {
          #r;
          #i;
          #s;
          #o;
          constructor(e) {
            super(),
              (this.#r = e.client),
              (this.mutationId = e.mutationId),
              (this.#s = e.mutationCache),
              (this.#i = []),
              (this.state = e.state || a()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#i.includes(e) ||
              (this.#i.push(e),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#i = this.#i.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#s.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#i.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#s.remove(this));
          }
          continue() {
            return this.#o?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
                this.#a({ type: "continue" });
              },
              n = {
                client: this.#r,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#o = (0, s.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#a({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#a({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#s.canRun(this),
            });
            let r = "pending" === this.state.status,
              i = !this.#o.canStart();
            try {
              if (r) t();
              else {
                this.#a({ type: "pending", variables: e, isPaused: i }),
                  this.#s.config.onMutate &&
                    (await this.#s.config.onMutate(e, this, n));
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context &&
                  this.#a({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let s = await this.#o.start();
              return (
                await this.#s.config.onSuccess?.(
                  s,
                  e,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(s, e, this.state.context, n),
                await this.#s.config.onSettled?.(
                  s,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  s,
                  null,
                  e,
                  this.state.context,
                  n
                ),
                this.#a({ type: "success", data: s }),
                s
              );
            } catch (t) {
              try {
                await this.#s.config.onError?.(
                  t,
                  e,
                  this.state.context,
                  this,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onError?.(t, e, this.state.context, n);
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.#s.config.onSettled?.(
                  void 0,
                  t,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onSettled?.(
                  void 0,
                  t,
                  e,
                  this.state.context,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              throw (this.#a({ type: "error", error: t }), t);
            } finally {
              this.#s.runNext(this);
            }
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.Vr.batch(() => {
                this.#i.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#s.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function a() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    18238: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vr: function () {
          return i;
        },
      });
      var r = n(84554).Hp,
        i = (function () {
          let e = [],
            t = 0,
            n = (e) => {
              e();
            },
            i = (e) => {
              e();
            },
            s = r,
            o = (r) => {
              t
                ? e.push(r)
                : s(() => {
                    n(r);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  s(() => {
                    i(() => {
                      t.forEach((e) => {
                        n(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let n;
              t++;
              try {
                n = e();
              } finally {
                --t || a();
              }
              return n;
            },
            batchCalls:
              (e) =>
              (...t) => {
                o(() => {
                  e(...t);
                });
              },
            schedule: o,
            setNotifyFunction: (e) => {
              n = e;
            },
            setBatchNotifyFunction: (e) => {
              i = e;
            },
            setScheduler: (e) => {
              s = e;
            },
          };
        })();
    },
    57853: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return i;
        },
      });
      var r = n(24112),
        i = new (class extends r.l {
          #u = !0;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if ("undefined" != typeof window && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#u !== e &&
              ((this.#u = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#u;
          }
        })();
    },
    7989: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
      });
      var r = n(84554),
        i = n(73252),
        s = n(45345),
        o = class {
          #c;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, s.PN)(this.gcTime) &&
                (this.#c = r.mr.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(
              this.gcTime || 0,
              e ?? (i.m.isServer() ? 1 / 0 : 3e5)
            );
          }
          clearGcTimeout() {
            void 0 !== this.#c &&
              (r.mr.clearTimeout(this.#c), (this.#c = void 0));
          }
        };
    },
    11255: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kw: function () {
          return c;
        },
        Mz: function () {
          return h;
        },
        p8: function () {
          return l;
        },
      });
      var r = n(87045),
        i = n(57853),
        s = n(16803),
        o = n(73252),
        a = n(45345);
      function u(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.N.isOnline();
      }
      var l = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function h(e) {
        let t,
          n = !1,
          h = 0,
          f = (0, s.O)(),
          d = () => "pending" !== f.status,
          p = () =>
            r.j.isFocused() &&
            ("always" === e.networkMode || i.N.isOnline()) &&
            e.canRun(),
          b = () => c(e.networkMode) && e.canRun(),
          m = (e) => {
            d() || (t?.(), f.resolve(e));
          },
          g = (e) => {
            d() || (t?.(), f.reject(e));
          },
          y = () =>
            new Promise((n) => {
              (t = (e) => {
                (d() || p()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d() || e.onContinue?.();
            }),
          v = () => {
            let t;
            if (d()) return;
            let r = 0 === h ? e.initialPromise : void 0;
            try {
              t = r ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(m)
              .catch((t) => {
                if (d()) return;
                let r = e.retry ?? (o.m.isServer() ? 0 : 3),
                  i = e.retryDelay ?? u,
                  s = "function" == typeof i ? i(h, t) : i,
                  c =
                    !0 === r ||
                    ("number" == typeof r && h < r) ||
                    ("function" == typeof r && r(h, t));
                if (n || !c) {
                  g(t);
                  return;
                }
                h++,
                  e.onFail?.(h, t),
                  (0, a._v)(s)
                    .then(() => (p() ? void 0 : y()))
                    .then(() => {
                      n ? g(t) : v();
                    });
              });
          };
        return {
          promise: f,
          status: () => f.status,
          cancel: (t) => {
            if (!d()) {
              let n = new l(t);
              g(n), e.onCancel?.(n);
            }
          },
          continue: () => (t?.(), f),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: b,
          start: () => (b() ? v() : y().then(v), f),
        };
      }
    },
    24112: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return r;
        },
      });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    16803: function (e, t, n) {
      "use strict";
      function r() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        function r(e) {
          Object.assign(n, e), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (t) => {
            r({ status: "fulfilled", value: t }), e(t);
          }),
          (n.reject = (e) => {
            r({ status: "rejected", reason: e }), t(e);
          }),
          n
        );
      }
      n.d(t, {
        O: function () {
          return r;
        },
      });
    },
    84554: function (e, t, n) {
      "use strict";
      n.d(t, {
        Hp: function () {
          return s;
        },
        mr: function () {
          return i;
        },
      });
      var r = {
          setTimeout: (e, t) => setTimeout(e, t),
          clearTimeout: (e) => clearTimeout(e),
          setInterval: (e, t) => setInterval(e, t),
          clearInterval: (e) => clearInterval(e),
        },
        i = new (class {
          #l = r;
          #h = !1;
          setTimeoutProvider(e) {
            this.#l = e;
          }
          setTimeout(e, t) {
            return this.#l.setTimeout(e, t);
          }
          clearTimeout(e) {
            this.#l.clearTimeout(e);
          }
          setInterval(e, t) {
            return this.#l.setInterval(e, t);
          }
          clearInterval(e) {
            this.#l.clearInterval(e);
          }
        })();
      function s(e) {
        setTimeout(e, 0);
      }
    },
    45345: function (e, t, n) {
      "use strict";
      n.d(t, {
        CN: function () {
          return E;
        },
        Ht: function () {
          return I;
        },
        I4: function () {
          return B;
        },
        KC: function () {
          return c;
        },
        Kp: function () {
          return u;
        },
        L3: function () {
          return T;
        },
        PN: function () {
          return a;
        },
        Q$: function () {
          return g;
        },
        Rm: function () {
          return d;
        },
        SE: function () {
          return o;
        },
        TD: function () {
          return l;
        },
        VS: function () {
          return y;
        },
        VX: function () {
          return C;
        },
        X7: function () {
          return f;
        },
        Ym: function () {
          return p;
        },
        ZT: function () {
          return s;
        },
        _v: function () {
          return $;
        },
        _x: function () {
          return h;
        },
        cG: function () {
          return G;
        },
        oE: function () {
          return P;
        },
        sk: function () {
          return i;
        },
        to: function () {
          return b;
        },
      });
      var r = n(84554),
        i = "undefined" == typeof window || "Deno" in globalThis;
      function s() {}
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function u(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function h(e, t) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: s,
          queryKey: o,
          stale: a,
        } = e;
        if (o) {
          if (r) {
            if (t.queryHash !== d(o, t.options)) return !1;
          } else if (!b(t.queryKey, o)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof a || t.isStale() === a) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function f(e, t) {
        let { exact: n, status: r, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (p(t.options.mutationKey) !== p(s)) return !1;
          } else if (!b(t.options.mutationKey, s)) return !1;
        }
        return (!r || t.state.status === r) && (!i || !!i(t));
      }
      function d(e, t) {
        return (t?.queryKeyHashFn || p)(e);
      }
      function p(e) {
        return JSON.stringify(e, (e, t) =>
          x(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function b(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          if (Array.isArray(e) && Array.isArray(t)) {
            for (let n = 0; n < t.length; n++) if (!b(e[n], t[n])) return !1;
            return !0;
          }
          for (let n of Object.keys(t)) if (!b(e[n], t[n])) return !1;
          return !0;
        }
        return !1;
      }
      var m = Object.prototype.hasOwnProperty;
      function g(e, t, n = 0) {
        if (e === t) return e;
        if (n > 500) return t;
        let r = v(e) && v(t);
        if (!r && !(x(e) && x(t))) return t;
        let i = (r ? e : Object.keys(e)).length,
          s = r ? t : Object.keys(t),
          o = s.length,
          a = r ? Array(o) : {},
          u = 0;
        for (let c = 0; c < o; c++) {
          let o = r ? c : s[c],
            l = e[o],
            h = t[o];
          if (l === h) {
            (a[o] = l), (r ? c < i : m.call(e, o)) && u++;
            continue;
          }
          if (
            null === l ||
            null === h ||
            "object" != typeof l ||
            "object" != typeof h
          ) {
            a[o] = h;
            continue;
          }
          let f = g(l, h, n + 1);
          (a[o] = f), f === l && u++;
        }
        return i === o && u === i ? e : a;
      }
      function y(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function v(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function x(e) {
        if (!w(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!(w(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function w(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function $(e) {
        return new Promise((t) => {
          r.mr.setTimeout(t, e);
        });
      }
      function P(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? g(e, t)
          : t;
      }
      function C(e, t, n = 0) {
        let r = [...e, t];
        return n && r.length > n ? r.slice(1) : r;
      }
      function I(e, t, n = 0) {
        let r = [t, ...e];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var E = Symbol();
      function G(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== E
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function T(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function B(e, t, n) {
        let r,
          i = !1;
        return (
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (
              (r ??= t()),
              i ||
                ((i = !0),
                r.aborted ? n() : r.addEventListener("abort", n, { once: !0 })),
              r
            ),
          }),
          e
        );
      }
    },
    29827: function (e, t, n) {
      "use strict";
      n.d(t, {
        NL: function () {
          return o;
        },
        aH: function () {
          return a;
        },
      });
      var r = n(2265),
        i = n(57437),
        s = r.createContext(void 0),
        o = (e) => {
          let t = r.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        a = (e) => {
          let { client: t, children: n } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(s.Provider, { value: t, children: n })
          );
        };
    },
    26129: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return u;
        },
      });
      var r,
        i,
        s = n(19676);
      let o = () => `@wagmi/core@${s.i}`;
      var a = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class u extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return o();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
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
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof u
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof u && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return a(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? a(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    13102: function (e, t, n) {
      "use strict";
      n.d(t, {
        $S: function () {
          return c;
        },
        JK: function () {
          return a;
        },
        X4: function () {
          return i;
        },
        XZ: function () {
          return u;
        },
        aH: function () {
          return o;
        },
        wi: function () {
          return s;
        },
      });
      var r = n(26129);
      class i extends r.G {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class s extends r.G {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      class a extends r.G {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class u extends r.G {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class c extends r.G {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    14478: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
        O: function () {
          return s;
        },
      });
      var r = n(26129);
      class i extends r.G {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class s extends r.G {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    19676: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "2.22.1";
    },
    90713: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return i;
        },
      });
      var r = n(73918);
      let i = (0, n(90328).a)({
        ...r.i,
        id: 8453,
        name: "Base",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api",
          },
        },
        contracts: {
          ...r.i.contracts,
          disputeGameFactory: {
            1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
          },
          l2OutputOracle: {
            1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022,
          },
          portal: {
            1: {
              address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
              blockCreated: 17482143,
            },
          },
          l1StandardBridge: {
            1: {
              address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
              blockCreated: 17482143,
            },
          },
        },
        sourceId: 1,
      });
      ({ ...i });
    },
    81460: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(73918);
      let i = (0, n(90328).a)({
        ...r.i,
        id: 84532,
        network: "base-sepolia",
        name: "Base Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://sepolia.basescan.org",
            apiUrl: "https://api-sepolia.basescan.org/api",
          },
        },
        contracts: {
          ...r.i.contracts,
          disputeGameFactory: {
            11155111: { address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1" },
          },
          l2OutputOracle: {
            11155111: { address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254" },
          },
          portal: {
            11155111: {
              address: "0x49f53e41452c74589e85ca1677426ba426459e85",
              blockCreated: 4446677,
            },
          },
          l1StandardBridge: {
            11155111: {
              address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
              blockCreated: 4446677,
            },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 1059647,
          },
        },
        testnet: !0,
        sourceId: 11155111,
      });
      ({ ...i });
    },
    43188: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return r;
        },
      });
      let r = 1;
    },
    75018: function (e, t, n) {
      "use strict";
      n.d(t, {
        zL: function () {
          return r;
        },
      });
      let r = 2n ** 256n - 1n;
    },
    10052: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(81544);
      class i extends r.G {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    81544: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return s;
        },
      });
      let r = "2.55.19",
        i = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) =>
            t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${r}`,
        };
      class s extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o = (t.cause instanceof s && t.cause.docsPath) || t.docsPath,
            a = i.getDocsUrl?.({ ...t, docsPath: o });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(a ? [`Docs: ${a}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
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
            Object.defineProperty(this, "version", {
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
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    48073: function (e, t, n) {
      "use strict";
      n.d(t, {
        RX: function () {
          return o;
        },
        cJ: function () {
          return u;
        },
        m7: function () {
          return s;
        },
        xd: function () {
          return a;
        },
      });
      var r = n(43188),
        i = n(81544);
      class s extends i.G {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class o extends i.G {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class a extends i.G {
        constructor({ hash: e, size: t }) {
          super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${t}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class u extends i.G {
        constructor({ hash: e, version: t }) {
          super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: [`Expected: ${r.l}`, `Received: ${t}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
    },
    35586: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bk: function () {
          return o;
        },
        Yl: function () {
          return s;
        },
        hJ: function () {
          return u;
        },
        mm: function () {
          return i;
        },
        pZ: function () {
          return a;
        },
      });
      var r = n(81544);
      class i extends r.G {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class s extends r.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class o extends r.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class a extends r.G {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class u extends r.G {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? `Chain ID "${e}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    33630: function (e, t, n) {
      "use strict";
      n.d(t, {
        KD: function () {
          return o;
        },
        T_: function () {
          return i;
        },
        lQ: function () {
          return s;
        },
      });
      var r = n(81544);
      class i extends r.G {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class s extends r.G {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class o extends r.G {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    47116: function (e, t, n) {
      "use strict";
      n.d(t, {
        $s: function () {
          return s;
        },
        W_: function () {
          return o;
        },
        mV: function () {
          return i;
        },
      });
      var r = n(81544);
      class i extends r.G {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class s extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class o extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    63152: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cd: function () {
          return o;
        },
        J5: function () {
          return i;
        },
        M6: function () {
          return a;
        },
        yr: function () {
          return s;
        },
      });
      var r = n(81544);
      class i extends r.G {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class s extends r.G {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class o extends r.G {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      class a extends r.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    78125: function (e, t, n) {
      "use strict";
      n.d(t, {
        C_: function () {
          return h;
        },
        G$: function () {
          return a;
        },
        Hh: function () {
          return o;
        },
        M_: function () {
          return s;
        },
        WF: function () {
          return f;
        },
        ZI: function () {
          return u;
        },
        cj: function () {
          return m;
        },
        cs: function () {
          return b;
        },
        dR: function () {
          return d;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return l;
        },
        vU: function () {
          return c;
        },
      });
      var r = n(29707),
        i = n(81544);
      class s extends i.G {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted|gas required exceeds allowance/,
        });
      class o extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class a extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class u extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class c extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class h extends i.G {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class f extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class d extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends i.G {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.o)(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends i.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    63228: function (e, t, n) {
      "use strict";
      n.d(t, {
        A3: function () {
          return p;
        },
        Bh: function () {
          return f;
        },
        JC: function () {
          return l;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return c;
        },
        mc: function () {
          return b;
        },
        mk: function () {
          return h;
        },
        vl: function () {
          return u;
        },
        xf: function () {
          return a;
        },
        xr: function () {
          return o;
        },
      });
      var r = n(71282),
        i = n(29707),
        s = n(81544);
      function o(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class a extends s.G {
        constructor({ filledNonce: e, requestedNonce: t }) {
          super(
            "The filled transaction nonce does not match the requested nonce.",
            {
              metaMessages: [`Requested Nonce: ${t}`, `Filled Nonce: ${e}`],
              name: "FeePayerNonceMismatchError",
            }
          );
        }
      }
      class u extends s.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class c extends s.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              o(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class l extends s.G {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (e.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class h extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: s,
            data: a,
            gas: u,
            gasPrice: c,
            maxFeePerGas: l,
            maxPriorityFeePerGas: h,
            nonce: f,
            to: d,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              o({
                chain: s && `${s?.name} (id: ${s?.id})`,
                from: t?.address,
                to: d,
                value:
                  void 0 !== p &&
                  `${(0, r.d)(p)} ${s?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: u,
                gasPrice: void 0 !== c && `${(0, i.o)(c)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, i.o)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== h && `${(0, i.o)(h)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
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
      class f extends s.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: i,
        }) {
          let s = "Transaction";
          n &&
            void 0 !== i &&
            (s = `Transaction at block time "${n}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (s = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (s = `Transaction at block number "${t}" at index "${i}"`),
            r && (s = `Transaction with hash "${r}"`),
            super(`${s} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends s.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class p extends s.G {
        constructor({ receipt: e }) {
          super(`Transaction with hash "${e.transactionHash}" reverted.`, {
            metaMessages: [
              'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
              " ",
              "You can attempt to extract the revert reason by:",
              "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
              "- using the `call` Action with raw `data`",
            ],
            name: "TransactionReceiptRevertedError",
          }),
            Object.defineProperty(this, "receipt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.receipt = e);
        }
      }
      class b extends s.G {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    73918: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(17467),
        i = n(72932),
        s = n(59069),
        o = n(27481),
        a = n(13550);
      let u = {
        block: (0, s.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = o.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? i.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, o.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, i.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, a.dI)({
          format: (e) => ({
            ...(e.depositNonce
              ? { depositNonce: (0, i.y_)(e.depositNonce) }
              : {}),
            ...(e.depositReceiptVersion
              ? { depositReceiptVersion: (0, i.ly)(e.depositReceiptVersion) }
              : {}),
            l1GasPrice: e.l1GasPrice ? (0, i.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, i.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, i.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var c = n(81273);
      let l = {
        blockTime: 2e3,
        contracts: r.r,
        formatters: u,
        serializers: c.fE,
      };
    },
    17467: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return r;
        },
      });
      let r = {
        gasPriceOracle: {
          address: "0x420000000000000000000000000000000000000F",
        },
        l1Block: { address: "0x4200000000000000000000000000000000000015" },
        l2CrossDomainMessenger: {
          address: "0x4200000000000000000000000000000000000007",
        },
        l2Erc721Bridge: {
          address: "0x4200000000000000000000000000000000000014",
        },
        l2StandardBridge: {
          address: "0x4200000000000000000000000000000000000010",
        },
        l2ToL1MessagePasser: {
          address: "0x4200000000000000000000000000000000000016",
        },
      };
    },
    81273: function (e, t, n) {
      "use strict";
      n.d(t, {
        DO: function () {
          return c;
        },
        fE: function () {
          return l;
        },
      });
      var r = n(10052),
        i = n(4012),
        s = n(89256),
        o = n(59455),
        a = n(70044),
        u = n(81723);
      function c(e, t) {
        return "deposit" === e.type || void 0 !== e.sourceHash
          ? (function (e) {
              !(function (e) {
                let { from: t, to: n } = e;
                if (t && !(0, i.U)(t)) throw new r.b({ address: t });
                if (n && !(0, i.U)(n)) throw new r.b({ address: n });
              })(e);
              let {
                  sourceHash: t,
                  data: n,
                  from: u,
                  gas: c,
                  isSystemTx: l,
                  mint: h,
                  to: f,
                  value: d,
                } = e,
                p = [
                  t,
                  u,
                  f ?? "0x",
                  h ? (0, o.NC)(h) : "0x",
                  d ? (0, o.NC)(d) : "0x",
                  c ? (0, o.NC)(c) : "0x",
                  l ? "0x1" : "0x",
                  n ?? "0x",
                ];
              return (0, s.SM)(["0x7e", (0, a.LV)(p)]);
            })(e)
          : (0, u.D)(e, t);
      }
      let l = { transaction: c };
    },
    31669: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return l;
        },
        x: function () {
          return c;
        },
      });
      var r = n(10052),
        i = n(44659),
        s = n(13169),
        o = n(82061),
        a = n(4012);
      let u = new o.k(8192);
      function c(e, t) {
        if (u.has(`${e}.${t}`)) return u.get(`${e}.${t}`);
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, s.w)((0, i.qX)(n), "bytes"),
          o = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              o[e + 1] &&
              (o[e + 1] = o[e + 1].toUpperCase());
        let a = `0x${o.join("")}`;
        return u.set(`${e}.${t}`, a), a;
      }
      function l(e, t) {
        if (!(0, a.U)(e, { strict: !1 })) throw new r.b({ address: e });
        return c(e, t);
      }
    },
    4012: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var r = n(82061),
        i = n(31669);
      let s = /^0x[a-fA-F0-9]{40}$/,
        o = new r.k(8192);
      function a(e, t) {
        let { strict: n = !0 } = t ?? {},
          r = `${e}.${n}`;
        if (o.has(r)) return o.get(r);
        let a =
          !!s.test(e) && (e.toLowerCase() === e || !n || (0, i.x)(e) === e);
        return o.set(r, a), a;
      }
    },
    63563: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return s;
        },
      });
      var r = n(44659),
        i = n(59455);
      function s(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          s =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, r.nr)(e))
              : e.blobs,
          o = [];
        for (let e of s) o.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? o : o.map((e) => (0, i.ci)(e));
      }
    },
    67496: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return s;
        },
      });
      var r = n(44659),
        i = n(59455);
      function s(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          s =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, r.nr)(e))
              : e.blobs,
          o =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, r.nr)(e))
              : e.commitments,
          a = [];
        for (let e = 0; e < s.length; e++) {
          let n = s[e],
            r = o[e];
          a.push(Uint8Array.from(t.computeBlobKzgProof(n, r)));
        }
        return "bytes" === n ? a : a.map((e) => (0, i.ci)(e));
      }
    },
    98328: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return a;
        },
      });
      var r = n(59455),
        i = n(29272),
        s = n(93610),
        o = n(44659);
      function a(e) {
        let { commitments: t, version: n } = e,
          a = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
          u = [];
        for (let e of t)
          u.push(
            (function (e) {
              let { commitment: t, version: n = 1 } = e,
                a = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                u = (function (e, t) {
                  let n = (0, i.JQ)(
                    (0, s.v)(e, { strict: !1 }) ? (0, o.O0)(e) : e
                  );
                  return "bytes" === (t || "hex") ? n : (0, r.NC)(n);
                })(t, "bytes");
              return u.set([n], 0), "bytes" === a ? u : (0, r.ci)(u);
            })({ commitment: e, to: a, version: n })
          );
        return u;
      }
    },
    10932: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return l;
        },
      });
      var r = n(63563),
        i = n(67496),
        s = n(48073),
        o = n(46033),
        a = n(20556),
        u = n(44659),
        c = n(59455);
      function l(e) {
        let { data: t, kzg: n, to: l } = e,
          h =
            e.blobs ??
            (function (e) {
              let t = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                n = "string" == typeof e.data ? (0, u.nr)(e.data) : e.data,
                r = (0, a.d)(n);
              if (!r) throw new s.RX();
              if (r > 761855) throw new s.m7({ maxSize: 761855, size: r });
              let i = [],
                l = !0,
                h = 0;
              for (; l; ) {
                let e = (0, o.q)(new Uint8Array(131072)),
                  t = 0;
                for (; t < 4096; ) {
                  let r = n.slice(h, h + 31);
                  if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                    e.pushByte(128), (l = !1);
                    break;
                  }
                  t++, (h += 31);
                }
                i.push(e);
              }
              return "bytes" === t
                ? i.map((e) => e.bytes)
                : i.map((e) => (0, c.ci)(e.bytes));
            })({ data: t, to: l }),
          f = e.commitments ?? (0, r.P)({ blobs: h, kzg: n, to: l }),
          d = e.proofs ?? (0, i.y)({ blobs: h, commitments: f, kzg: n, to: l }),
          p = [];
        for (let e = 0; e < h.length; e++)
          p.push({ blob: h[e], commitment: f[e], proof: d[e] });
        return p;
      }
    },
    90328: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
        return Object.assign(t, {
          extend: (function e(t) {
            return (n) => {
              let r = "function" == typeof n ? n(t) : n,
                i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(t),
        });
      }
      n.d(t, {
        a: function () {
          return r;
        },
      });
    },
    46033: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var r = n(33630);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function s(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(i);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(
            e.buffer ?? e,
            e.byteOffset,
            e.byteLength
          )),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    89256: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, {
        SM: function () {
          return i;
        },
        zo: function () {
          return r;
        },
      });
    },
    93610: function (e, t, n) {
      "use strict";
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, {
        v: function () {
          return r;
        },
      });
    },
    8796: function (e, t, n) {
      "use strict";
      n.d(t, {
        gc: function () {
          return s;
        },
        vk: function () {
          return i;
        },
      });
      var r = n(47116);
      function i(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? s(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.$s({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let s = "right" === t;
                i[s ? r : n - r - 1] = e[s ? r : e.length - r - 1];
              }
              return i;
            })(e, { dir: t, size: n });
      }
      function s(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * n)
          throw new r.$s({
            size: Math.ceil(i.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    20556: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(93610);
      function i(e) {
        return (0, r.v)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    69921: function (e, t, n) {
      "use strict";
      n.d(t, {
        T4: function () {
          return c;
        },
        p5: function () {
          return l;
        },
        tP: function () {
          return o;
        },
      });
      var r = n(47116),
        i = n(93610),
        s = n(20556);
      function o(e, t, n, { strict: r } = {}) {
        return (0, i.v)(e, { strict: !1 })
          ? l(e, t, n, { strict: r })
          : c(e, t, n, { strict: r });
      }
      function a(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, s.d)(e) - 1)
          throw new r.mV({ offset: t, position: "start", size: (0, s.d)(e) });
      }
      function u(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, s.d)(e) !== n - t
        )
          throw new r.mV({ offset: n, position: "end", size: (0, s.d)(e) });
      }
      function c(e, t, n, { strict: r } = {}) {
        a(e, t);
        let i = e.slice(t, n);
        return r && u(i, t, n), i;
      }
      function l(e, t, n, { strict: r } = {}) {
        a(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return r && u(i, t, n), i;
      }
    },
    36826: function (e, t, n) {
      "use strict";
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          r = 0;
        for (
          let e = 0;
          e < n.length - 1 &&
          "0" === n["left" === t ? e : n.length - e - 1].toString();
          e++
        )
          r++;
        return ((n = "left" === t ? n.slice(r) : n.slice(0, n.length - r)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
      n.d(t, {
        f: function () {
          return r;
        },
      });
    },
    72932: function (e, t, n) {
      "use strict";
      n.d(t, {
        H_: function () {
          return u;
        },
        XA: function () {
          return l;
        },
        Yf: function () {
          return a;
        },
        ly: function () {
          return h;
        },
        rR: function () {
          return f;
        },
        y_: function () {
          return c;
        },
      });
      var r = n(63152),
        i = n(20556),
        s = n(36826),
        o = n(44659);
      function a(e, { size: t }) {
        if ((0, i.d)(e) > t)
          throw new r.M6({ givenSize: (0, i.d)(e), maxSize: t });
      }
      function u(e, t) {
        let n = "string" == typeof t ? { to: t } : t,
          r = n.to;
        return "number" === r
          ? h(e, n)
          : "bigint" === r
          ? c(e, n)
          : "string" === r
          ? f(e, n)
          : "boolean" === r
          ? l(e, n)
          : (0, o.nr)(e, n);
      }
      function c(e, t = {}) {
        let { signed: n } = t;
        t.size && a(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function l(e, t = {}) {
        let n = e;
        if (
          (t.size && (a(n, { size: t.size }), (n = (0, s.f)(n))),
          "0x00" === (0, s.f)(n))
        )
          return !1;
        if ("0x01" === (0, s.f)(n)) return !0;
        throw new r.Cd(n);
      }
      function h(e, t = {}) {
        let n = c(e, t),
          i = Number(n);
        if (!Number.isSafeInteger(i))
          throw new r.J5({
            max: `${Number.MAX_SAFE_INTEGER}`,
            min: `${Number.MIN_SAFE_INTEGER}`,
            signed: t.signed,
            size: t.size,
            value: `${n}n`,
          });
        return i;
      }
      function f(e, t = {}) {
        let n = (0, o.nr)(e);
        return (
          t.size &&
            (a(n, { size: t.size }), (n = (0, s.f)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    44659: function (e, t, n) {
      "use strict";
      n.d(t, {
        O0: function () {
          return c;
        },
        nr: function () {
          return f;
        },
        qX: function () {
          return d;
        },
      });
      var r = n(81544),
        i = n(93610),
        s = n(8796),
        o = n(72932),
        a = n(59455);
      let u = new TextEncoder();
      function c(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? f((0, a.eC)(e, t))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, o.Yf)(n, { size: t.size }),
                  (0, s.vk)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, i.v)(e)
          ? f(e, t)
          : d(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function f(e, t = {}) {
        let n = e;
        t.size &&
          ((0, o.Yf)(n, { size: t.size }),
          (n = (0, s.vk)(n, { dir: "right", size: t.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let a = i.length / 2,
          u = new Uint8Array(a);
        for (let e = 0, t = 0; e < a; e++) {
          let n = h(i.charCodeAt(t++)),
            s = h(i.charCodeAt(t++));
          if (void 0 === n || void 0 === s)
            throw new r.G(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          u[e] = 16 * n + s;
        }
        return u;
      }
      function d(e, t = {}) {
        let n = u.encode(e);
        return "number" == typeof t.size
          ? ((0, o.Yf)(n, { size: t.size }),
            (0, s.vk)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    59455: function (e, t, n) {
      "use strict";
      n.d(t, {
        $G: function () {
          return f;
        },
        C4: function () {
          return u;
        },
        NC: function () {
          return a;
        },
        ci: function () {
          return c;
        },
        eC: function () {
          return l;
        },
      });
      var r = n(63152),
        i = n(8796),
        s = n(72932);
      let o = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function a(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? f(e, t)
          : "boolean" == typeof e
          ? u(e, t)
          : c(e, t);
      }
      function u(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(n, { size: t.size }), (0, i.vk)(n, { size: t.size }))
          : n;
      }
      function c(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += o[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(r, { size: t.size }),
            (0, i.vk)(r, { dir: "right", size: t.size }))
          : r;
      }
      function l(e, t = {}) {
        let n;
        let { signed: s, size: o } = t,
          a = BigInt(e);
        o
          ? (n = s
              ? (1n << (8n * BigInt(o) - 1n)) - 1n
              : 2n ** (8n * BigInt(o)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let u = "bigint" == typeof n && s ? -n - 1n : 0;
        if ((n && a > n) || a < u) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.J5({
            max: n ? `${n}${t}` : void 0,
            min: `${u}${t}`,
            signed: s,
            size: o,
            value: `${e}${t}`,
          });
        }
        let c = `0x${(s && a < 0
          ? (1n << BigInt(8 * o)) + BigInt(a)
          : a
        ).toString(16)}`;
        return o ? (0, i.vk)(c, { size: o }) : c;
      }
      let h = new TextEncoder();
      function f(e, t = {}) {
        return c(h.encode(e), t);
      }
    },
    70044: function (e, t, n) {
      "use strict";
      n.d(t, {
        LV: function () {
          return a;
        },
      });
      var r = n(81544),
        i = n(46033),
        s = n(44659),
        o = n(59455);
      function a(e, t = "hex") {
        let n = (function e(t) {
            return Array.isArray(t)
              ? (function (e) {
                  let t = e.reduce((e, t) => e + t.length, 0),
                    n = u(t);
                  return {
                    length: t <= 55 ? 1 + t : 1 + n + t,
                    encode(r) {
                      for (let { encode: i } of (t <= 55
                        ? r.pushByte(192 + t)
                        : (r.pushByte(247 + n),
                          1 === n
                            ? r.pushUint8(t)
                            : 2 === n
                            ? r.pushUint16(t)
                            : 3 === n
                            ? r.pushUint24(t)
                            : r.pushUint32(t)),
                      e))
                        i(r);
                    },
                  };
                })(t.map((t) => e(t)))
              : (function (e) {
                  let t = "string" == typeof e ? (0, s.nr)(e) : e,
                    n = u(t.length);
                  return {
                    length:
                      1 === t.length && t[0] < 128
                        ? 1
                        : t.length <= 55
                        ? 1 + t.length
                        : 1 + n + t.length,
                    encode(e) {
                      (1 === t.length && t[0] < 128) ||
                        (t.length <= 55
                          ? e.pushByte(128 + t.length)
                          : (e.pushByte(183 + n),
                            1 === n
                              ? e.pushUint8(t.length)
                              : 2 === n
                              ? e.pushUint16(t.length)
                              : 3 === n
                              ? e.pushUint24(t.length)
                              : e.pushUint32(t.length))),
                        e.pushBytes(t);
                    },
                  };
                })(t);
          })(e),
          r = (0, i.q)(new Uint8Array(n.length));
        return (n.encode(r), "hex" === t) ? (0, o.ci)(r.bytes) : r.bytes;
      }
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 16777216) return 3;
        if (e < 4294967296) return 4;
        throw new r.G("Length is too large.");
      }
    },
    59069: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var r = n(94870),
        i = n(27481);
      function s(e, t) {
        let n = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, i.Tr)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: n,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      let o = (0, r.$)("block", s);
    },
    94870: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return ({ exclude: n, format: r }) => ({
          exclude: n,
          format: (e, i) => {
            let s = t(e, i);
            if (n) for (let e of n) delete s[e];
            return { ...s, ...r(e, i) };
          },
          type: e,
        });
      }
      n.d(t, {
        $: function () {
          return r;
        },
      });
    },
    55668: function (e, t, n) {
      "use strict";
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          blockTimestamp: e.blockTimestamp
            ? BigInt(e.blockTimestamp)
            : null === e.blockTimestamp
            ? null
            : void 0,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, {
        U: function () {
          return r;
        },
      });
    },
    27481: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return s;
        },
        y_: function () {
          return a;
        },
      });
      var r = n(72932),
        i = n(94870);
      let s = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function o(e, t) {
        let n = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          ...(null != e.blockTimestamp && {
            blockTimestamp: BigInt(e.blockTimestamp),
          }),
          chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (n.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (n.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof n.v) {
              if (0n === n.v || 27n === n.v) return 0;
              if (1n === n.v || 28n === n.v) return 1;
              if (n.v >= 35n) return n.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === n.type &&
            (delete n.accessList,
            delete n.maxFeePerBlobGas,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.yParity),
          "eip2930" === n.type &&
            (delete n.maxFeePerBlobGas,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas),
          "eip1559" === n.type && delete n.maxFeePerBlobGas,
          n
        );
      }
      let a = (0, i.$)("transaction", o);
    },
    13550: function (e, t, n) {
      "use strict";
      n.d(t, {
        dI: function () {
          return c;
        },
        ew: function () {
          return a;
        },
        fA: function () {
          return u;
        },
      });
      var r = n(72932),
        i = n(94870),
        s = n(55668),
        o = n(27481);
      let a = { "0x0": "reverted", "0x1": "success" };
      function u(e, t) {
        let n = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, s.U)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, r.ly)(e.transactionIndex)
            : null,
          status: e.status ? a[e.status] : null,
          type: e.type ? o.c8[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)),
          n
        );
      }
      let c = (0, i.$)("transactionReceipt", u);
    },
    13169: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(92530),
        i = n(93610),
        s = n(44659),
        o = n(59455);
      function a(e, t) {
        let n = (0, r.fr)((0, i.v)(e, { strict: !1 }) ? (0, s.O0)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, o.NC)(n);
      }
    },
    82061: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return r;
        },
      });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return super.has(e) && (super.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if (
            (super.has(e) && super.delete(e),
            super.set(e, t),
            this.maxSize && this.size > this.maxSize)
          ) {
            let e = super.keys().next().value;
            void 0 !== e && super.delete(e);
          }
          return this;
        }
      }
    },
    90683: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var r = n(63228);
      function i(e) {
        if (e.type) return e.type;
        if (void 0 !== e.authorizationList) return "eip7702";
        if (
          void 0 !== e.blobs ||
          void 0 !== e.blobVersionedHashes ||
          void 0 !== e.maxFeePerBlobGas ||
          void 0 !== e.sidecars
        )
          return "eip4844";
        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== e.gasPrice)
          return void 0 !== e.accessList ? "eip2930" : "legacy";
        throw new r.j3({ transaction: e });
      }
    },
    14791: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return o;
        },
      });
      var r = n(10052),
        i = n(63228),
        s = n(4012);
      function o(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: o, storageKeys: a } = e[n];
          for (let e = 0; e < a.length; e++)
            if (a[e].length - 2 != 64) throw new i.JC({ storageKey: a[e] });
          if (!(0, s.U)(o, { strict: !1 })) throw new r.b({ address: o });
          t.push([o, a]);
        }
        return t;
      }
    },
    81723: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return E;
        },
        d: function () {
          return G;
        },
      });
      var r = n(63228),
        i = n(59455),
        s = n(63563),
        o = n(67496),
        a = n(98328),
        u = n(10932),
        c = n(89256),
        l = n(36826),
        h = n(70044),
        f = n(43188),
        d = n(75018),
        p = n(10052),
        b = n(81544),
        m = n(48073),
        g = n(35586),
        y = n(78125),
        v = n(4012),
        x = n(20556),
        w = n(69921),
        $ = n(72932);
      function P(e) {
        let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: i } = e;
        if (t <= 0) throw new g.hJ({ chainId: t });
        if (i && !(0, v.U)(i)) throw new p.b({ address: i });
        if (r && r > d.zL) throw new y.Hh({ maxFeePerGas: r });
        if (n && r && n > r)
          throw new y.cs({ maxFeePerGas: r, maxPriorityFeePerGas: n });
      }
      var C = n(90683),
        I = n(14791);
      function E(e, t) {
        let n = (0, C.l)(e);
        return "eip1559" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: s,
                to: o,
                value: a,
                maxFeePerGas: u,
                maxPriorityFeePerGas: l,
                accessList: f,
                data: d,
              } = e;
              P(e);
              let p = (0, I.g)(f),
                b = [
                  (0, i.eC)(n),
                  s ? (0, i.eC)(s) : "0x",
                  l ? (0, i.eC)(l) : "0x",
                  u ? (0, i.eC)(u) : "0x",
                  r ? (0, i.eC)(r) : "0x",
                  o ?? "0x",
                  a ? (0, i.eC)(a) : "0x",
                  d ?? "0x",
                  p,
                  ...G(e, t),
                ];
              return (0, c.SM)(["0x02", (0, h.LV)(b)]);
            })(e, t)
          : "eip2930" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                data: s,
                nonce: o,
                to: a,
                value: u,
                accessList: l,
                gasPrice: f,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: i,
                  to: s,
                } = e;
                if (t <= 0) throw new g.hJ({ chainId: t });
                if (s && !(0, v.U)(s)) throw new p.b({ address: s });
                if (n || i)
                  throw new b.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                  );
                if (r && r > d.zL) throw new y.Hh({ maxFeePerGas: r });
              })(e);
              let m = (0, I.g)(l),
                x = [
                  (0, i.eC)(n),
                  o ? (0, i.eC)(o) : "0x",
                  f ? (0, i.eC)(f) : "0x",
                  r ? (0, i.eC)(r) : "0x",
                  a ?? "0x",
                  u ? (0, i.eC)(u) : "0x",
                  s ?? "0x",
                  m,
                  ...G(e, t),
                ];
              return (0, c.SM)(["0x01", (0, h.LV)(x)]);
            })(e, t)
          : "eip4844" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: l,
                to: d,
                value: p,
                maxFeePerBlobGas: b,
                maxFeePerGas: g,
                maxPriorityFeePerGas: y,
                accessList: v,
                data: C,
              } = e;
              !(function (e) {
                let { blobVersionedHashes: t } = e;
                if (t) {
                  if (0 === t.length) throw new m.RX();
                  for (let e of t) {
                    let t = (0, x.d)(e),
                      n = (0, $.ly)((0, w.tP)(e, 0, 1));
                    if (32 !== t) throw new m.xd({ hash: e, size: t });
                    if (n !== f.l) throw new m.cJ({ hash: e, version: n });
                  }
                }
                P(e);
              })(e);
              let E = e.blobVersionedHashes,
                T = e.sidecars;
              if (e.blobs && (void 0 === E || void 0 === T)) {
                let t =
                    "string" == typeof e.blobs[0]
                      ? e.blobs
                      : e.blobs.map((e) => (0, i.ci)(e)),
                  n = e.kzg,
                  r = (0, s.P)({ blobs: t, kzg: n });
                if (
                  (void 0 === E && (E = (0, a.C)({ commitments: r })),
                  void 0 === T)
                ) {
                  let e = (0, o.y)({ blobs: t, commitments: r, kzg: n });
                  T = (0, u.j)({ blobs: t, commitments: r, proofs: e });
                }
              }
              let B = (0, I.g)(v),
                U = [
                  (0, i.eC)(n),
                  l ? (0, i.eC)(l) : "0x",
                  y ? (0, i.eC)(y) : "0x",
                  g ? (0, i.eC)(g) : "0x",
                  r ? (0, i.eC)(r) : "0x",
                  d ?? "0x",
                  p ? (0, i.eC)(p) : "0x",
                  C ?? "0x",
                  B,
                  b ? (0, i.eC)(b) : "0x",
                  E ?? [],
                  ...G(e, t),
                ],
                F = [],
                O = [],
                k = [];
              if (T)
                for (let e = 0; e < T.length; e++) {
                  let { blob: t, commitment: n, proof: r } = T[e];
                  F.push(t), O.push(n), k.push(r);
                }
              return (0, c.SM)([
                "0x03",
                T ? (0, h.LV)([U, F, O, k]) : (0, h.LV)(U),
              ]);
            })(e, t)
          : "eip7702" === n
          ? (function (e, t) {
              let {
                authorizationList: n,
                chainId: r,
                gas: s,
                nonce: o,
                to: a,
                value: u,
                maxFeePerGas: l,
                maxPriorityFeePerGas: f,
                accessList: d,
                data: b,
              } = e;
              !(function (e) {
                let { authorizationList: t } = e;
                if (t)
                  for (let e of t) {
                    let { chainId: t } = e,
                      n = e.address;
                    if (!(0, v.U)(n)) throw new p.b({ address: n });
                    if (t < 0) throw new g.hJ({ chainId: t });
                  }
                P(e);
              })(e);
              let m = (0, I.g)(d),
                y = (function (e) {
                  if (!e || 0 === e.length) return [];
                  let t = [];
                  for (let n of e) {
                    let { chainId: e, nonce: r, ...s } = n,
                      o = n.address;
                    t.push([
                      e ? (0, i.NC)(e) : "0x",
                      o,
                      r ? (0, i.NC)(r) : "0x",
                      ...G({}, s),
                    ]);
                  }
                  return t;
                })(n);
              return (0, c.SM)([
                "0x04",
                (0, h.LV)([
                  (0, i.eC)(r),
                  o ? (0, i.eC)(o) : "0x",
                  f ? (0, i.eC)(f) : "0x",
                  l ? (0, i.eC)(l) : "0x",
                  s ? (0, i.eC)(s) : "0x",
                  a ?? "0x",
                  u ? (0, i.eC)(u) : "0x",
                  b ?? "0x",
                  m,
                  y,
                  ...G(e, t),
                ]),
              ]);
            })(e, t)
          : (function (e, t) {
              let {
                chainId: n = 0,
                gas: s,
                data: o,
                nonce: a,
                to: u,
                value: c,
                gasPrice: f,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: i,
                  to: s,
                } = e;
                if (s && !(0, v.U)(s)) throw new p.b({ address: s });
                if (void 0 !== t && t <= 0) throw new g.hJ({ chainId: t });
                if (n || i)
                  throw new b.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                  );
                if (r && r > d.zL) throw new y.Hh({ maxFeePerGas: r });
              })(e);
              let m = [
                a ? (0, i.eC)(a) : "0x",
                f ? (0, i.eC)(f) : "0x",
                s ? (0, i.eC)(s) : "0x",
                u ?? "0x",
                c ? (0, i.eC)(c) : "0x",
                o ?? "0x",
              ];
              if (t) {
                let e = (() => {
                    if (t.v >= 35n)
                      return (t.v - 35n) / 2n > 0
                        ? t.v
                        : 27n + (35n === t.v ? 0n : 1n);
                    if (n > 0) return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                    let e = 27n + (27n === t.v ? 0n : 1n);
                    if (t.v !== e) throw new r.vl({ v: t.v });
                    return e;
                  })(),
                  s = (0, l.f)(t.r),
                  o = (0, l.f)(t.s);
                m = [
                  ...m,
                  (0, i.eC)(e),
                  "0x00" === s ? "0x" : s,
                  "0x00" === o ? "0x" : o,
                ];
              } else n > 0 && (m = [...m, (0, i.eC)(n), "0x", "0x"]);
              return (0, h.LV)(m);
            })(e, t);
      }
      function G(e, t) {
        let n = t ?? e,
          { v: r, yParity: s } = n;
        if (void 0 === n.r || void 0 === n.s || (void 0 === r && void 0 === s))
          return [];
        let o = (0, l.f)(n.r),
          a = (0, l.f)(n.s);
        return [
          "number" == typeof s
            ? s
              ? (0, i.eC)(1)
              : "0x"
            : 0n === r
            ? "0x"
            : 1n === r
            ? (0, i.eC)(1)
            : 27n === r
            ? "0x"
            : (0, i.eC)(1),
          "0x00" === o ? "0x" : o,
          "0x00" === a ? "0x" : a,
        ];
      }
    },
    68366: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dp: function () {
          return a;
        },
        WU: function () {
          return i;
        },
        dF: function () {
          return s;
        },
        oJ: function () {
          return o;
        },
      });
      let r = { wei: 0, gwei: 9, szabo: 12, finney: 15, ether: 18 };
      function i(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new c({ decimals: t });
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, s] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
        );
      }
      function s(e, t = "wei") {
        return i(e, r.ether - r[t]);
      }
      function o(e, t = "wei") {
        return i(e, r.gwei - r[t]);
      }
      function a(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new c({ decimals: t });
        if (!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(e))
          throw new u({ value: e });
        let [n = "", r = "0"] = e.split("."),
          i = n.startsWith("-");
        if (
          (i && (n = n.slice(1)),
          "" === n && (n = "0"),
          (r = r.replace(/(0+)$/, "")),
          0 === t)
        )
          r.length > 0 &&
            Number.parseInt(r[0], 10) >= 5 &&
            (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let e = r.slice(0, t);
          if (Number.parseInt(r.slice(t, t + 1), 10) >= 5) {
            let i = (function (e) {
              let t = e.split(""),
                n = t.length - 1;
              for (; n >= 0; ) {
                let e = Number.parseInt(t[n], 10) + 1;
                if (e < 10) return (t[n] = String(e)), t.join("");
                (t[n] = "0"), n--;
              }
              return `1${t.join("")}`;
            })(e);
            i.length > t
              ? ((r = i.slice(1)), (n = `${BigInt(n) + 1n}`))
              : (r = i);
          } else r = e;
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
      class u extends Error {
        constructor({ value: e }) {
          super(`Value \`${e}\` is not a valid decimal number.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalNumberError",
            });
        }
      }
      class c extends Error {
        constructor({ decimals: e }) {
          super(`\`decimals\` must be a non-negative integer. Got \`${e}\`.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalsError",
            });
        }
      }
    },
    71282: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(68366);
      function i(e, t = "wei") {
        return r.dF(e, t);
      }
    },
    29707: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return i;
        },
      });
      var r = n(68366);
      function i(e, t = "wei") {
        return r.oJ(e, t);
      }
    },
    10231: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return a;
        },
        F: function () {
          return u;
        },
      });
      var r = n(2265);
      let i = !1;
      async function s(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let s = {};
        for (let [, t] of e.state.connections) s[t.connector.id] = 1;
        n && (s[n] = 0);
        let o =
            Object.keys(s).length > 0
              ? [...r].sort((e, t) => (s[e.id] ?? 10) - (s[t.id] ?? 10))
              : r,
          a = !1,
          u = [],
          c = [];
        for (let t of o) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || c.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(a ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: a ? e.current : t.uid, connections: n };
            }),
            u.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            c.push(n),
            (a = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (a
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (i = !1),
          u
        );
      }
      function o(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: o = !0,
          } = e,
          { onMount: a } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let i =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            s = e._internal.connectors.setup(i);
                          r.push(s);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? s(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: o });
        n._internal.ssr || a();
        let u = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (u.current && n._internal.ssr)
              return (
                a(),
                () => {
                  u.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let a = (0, r.createContext)(void 0);
      function u(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          o,
          e,
          (0, r.createElement)(a.Provider, { value: n }, t)
        );
      }
    },
  },
]);
