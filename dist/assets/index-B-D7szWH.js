var s0 = Object.defineProperty;
var u0 = (e, t, n) =>
  t in e
    ? s0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Os = (e, t, n) => (u0(e, typeof t != 'symbol' ? t + '' : t, n), n);
function $m(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Dd =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Ql(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Vm = { exports: {} },
  Xl = {},
  Wm = { exports: {} },
  de = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo = Symbol.for('react.element'),
  c0 = Symbol.for('react.portal'),
  f0 = Symbol.for('react.fragment'),
  d0 = Symbol.for('react.strict_mode'),
  p0 = Symbol.for('react.profiler'),
  h0 = Symbol.for('react.provider'),
  m0 = Symbol.for('react.context'),
  g0 = Symbol.for('react.forward_ref'),
  y0 = Symbol.for('react.suspense'),
  v0 = Symbol.for('react.memo'),
  w0 = Symbol.for('react.lazy'),
  Md = Symbol.iterator;
function x0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Md && e[Md]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ym = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qm = Object.assign,
  Km = {};
function Ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Km),
    (this.updater = n || Ym);
}
Ii.prototype.isReactComponent = {};
Ii.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ii.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Qm() {}
Qm.prototype = Ii.prototype;
function Jc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Km),
    (this.updater = n || Ym);
}
var Zc = (Jc.prototype = new Qm());
Zc.constructor = Jc;
qm(Zc, Ii.prototype);
Zc.isPureReactComponent = !0;
var Fd = Array.isArray,
  Xm = Object.prototype.hasOwnProperty,
  ef = { current: null },
  Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Xm.call(t, r) && !Gm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Jo,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: ef.current,
  };
}
function k0(e, t) {
  return {
    $$typeof: Jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function tf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jo;
}
function S0(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jd = /\/+/g;
function _s(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? S0('' + e.key)
    : t.toString(36);
}
function Xa(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Jo:
          case c0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + _s(a, 0) : r),
      Fd(i)
        ? ((n = ''),
          e != null && (n = e.replace(jd, '$&/') + '/'),
          Xa(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (tf(i) &&
            (i = k0(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(jd, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Fd(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + _s(o, l);
      a += Xa(o, t, n, s, i);
    }
  else if (((s = x0(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + _s(o, l++)), (a += Xa(o, t, n, s, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return a;
}
function ka(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Xa(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function E0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var mt = { current: null },
  Ga = { transition: null },
  b0 = {
    ReactCurrentDispatcher: mt,
    ReactCurrentBatchConfig: Ga,
    ReactCurrentOwner: ef,
  };
function Zm() {
  throw Error('act(...) is not supported in production builds of React.');
}
de.Children = {
  map: ka,
  forEach: function (e, t, n) {
    ka(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ka(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ka(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!tf(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
de.Component = Ii;
de.Fragment = f0;
de.Profiler = p0;
de.PureComponent = Jc;
de.StrictMode = d0;
de.Suspense = y0;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b0;
de.act = Zm;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = qm({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = ef.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Xm.call(t, s) &&
        !Gm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Jo, type: e.type, key: i, ref: o, props: r, _owner: a };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: m0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: h0, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = Jm;
de.createFactory = function (e) {
  var t = Jm.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: g0, render: e };
};
de.isValidElement = tf;
de.lazy = function (e) {
  return { $$typeof: w0, _payload: { _status: -1, _result: e }, _init: E0 };
};
de.memo = function (e, t) {
  return { $$typeof: v0, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = Ga.transition;
  Ga.transition = {};
  try {
    e();
  } finally {
    Ga.transition = t;
  }
};
de.unstable_act = Zm;
de.useCallback = function (e, t) {
  return mt.current.useCallback(e, t);
};
de.useContext = function (e) {
  return mt.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return mt.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return mt.current.useEffect(e, t);
};
de.useId = function () {
  return mt.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return mt.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return mt.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return mt.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return mt.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return mt.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return mt.current.useRef(e);
};
de.useState = function (e) {
  return mt.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return mt.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return mt.current.useTransition();
};
de.version = '18.3.1';
Wm.exports = de;
var A = Wm.exports;
const Gl = Ql(A),
  C0 = $m({ __proto__: null, default: Gl }, [A]); /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P0 = A,
  T0 = Symbol.for('react.element'),
  R0 = Symbol.for('react.fragment'),
  O0 = Object.prototype.hasOwnProperty,
  _0 = P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  L0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function eg(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) O0.call(t, r) && !L0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: T0,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: _0.current,
  };
}
Xl.Fragment = R0;
Xl.jsx = eg;
Xl.jsxs = eg;
Vm.exports = Xl;
var Y = Vm.exports,
  Cu = {},
  tg = { exports: {} },
  Lt = {},
  ng = { exports: {} },
  rg = {}; /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(N, K) {
    var w = N.length;
    N.push(K);
    e: for (; 0 < w; ) {
      var ae = (w - 1) >>> 1,
        ue = N[ae];
      if (0 < i(ue, K)) (N[ae] = K), (N[w] = ue), (w = ae);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var K = N[0],
      w = N.pop();
    if (w !== K) {
      N[0] = w;
      e: for (var ae = 0, ue = N.length, k = ue >>> 1; ae < k; ) {
        var be = 2 * (ae + 1) - 1,
          Fe = N[be],
          he = be + 1,
          Ke = N[he];
        if (0 > i(Fe, w))
          he < ue && 0 > i(Ke, Fe)
            ? ((N[ae] = Ke), (N[he] = w), (ae = he))
            : ((N[ae] = Fe), (N[be] = w), (ae = be));
        else if (he < ue && 0 > i(Ke, w)) (N[ae] = Ke), (N[he] = w), (ae = he);
        else break e;
      }
    }
    return K;
  }
  function i(N, K) {
    var w = N.sortIndex - K.sortIndex;
    return w !== 0 ? w : N.id - K.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    g = !1,
    v = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var K = n(u); K !== null; ) {
      if (K.callback === null) r(u);
      else if (K.startTime <= N)
        r(u), (K.sortIndex = K.expirationTime), t(s, K);
      else break;
      K = n(u);
    }
  }
  function C(N) {
    if (((v = !1), y(N), !g))
      if (n(s) !== null) (g = !0), Ee(T);
      else {
        var K = n(u);
        K !== null && we(C, K.startTime - N);
      }
  }
  function T(N, K) {
    (g = !1), v && ((v = !1), h(L), (L = -1)), (p = !0);
    var w = d;
    try {
      for (
        y(K), f = n(s);
        f !== null && (!(f.expirationTime > K) || (N && !U()));
      ) {
        var ae = f.callback;
        if (typeof ae == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var ue = ae(f.expirationTime <= K);
          (K = e.unstable_now()),
            typeof ue == 'function' ? (f.callback = ue) : f === n(s) && r(s),
            y(K);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var k = !0;
      else {
        var be = n(u);
        be !== null && we(C, be.startTime - K), (k = !1);
      }
      return k;
    } finally {
      (f = null), (d = w), (p = !1);
    }
  }
  var S = !1,
    x = null,
    L = -1,
    M = 5,
    z = -1;
  function U() {
    return !(e.unstable_now() - z < M);
  }
  function B() {
    if (x !== null) {
      var N = e.unstable_now();
      z = N;
      var K = !0;
      try {
        K = x(!0, N);
      } finally {
        K ? X() : ((S = !1), (x = null));
      }
    } else S = !1;
  }
  var X;
  if (typeof m == 'function')
    X = function () {
      m(B);
    };
  else if (typeof MessageChannel < 'u') {
    var se = new MessageChannel(),
      ee = se.port2;
    (se.port1.onmessage = B),
      (X = function () {
        ee.postMessage(null);
      });
  } else
    X = function () {
      b(B, 0);
    };
  function Ee(N) {
    (x = N), S || ((S = !0), X());
  }
  function we(N, K) {
    L = b(function () {
      N(e.unstable_now());
    }, K);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), Ee(T));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (M = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = d;
      }
      var w = d;
      d = K;
      try {
        return N();
      } finally {
        d = w;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, K) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var w = d;
      d = N;
      try {
        return K();
      } finally {
        d = w;
      }
    }),
    (e.unstable_scheduleCallback = function (N, K, w) {
      var ae = e.unstable_now();
      switch (
        (typeof w == 'object' && w !== null
          ? ((w = w.delay), (w = typeof w == 'number' && 0 < w ? ae + w : ae))
          : (w = ae),
        N)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = w + ue),
        (N = {
          id: c++,
          callback: K,
          priorityLevel: N,
          startTime: w,
          expirationTime: ue,
          sortIndex: -1,
        }),
        w > ae
          ? ((N.sortIndex = w),
            t(u, N),
            n(s) === null &&
              N === n(u) &&
              (v ? (h(L), (L = -1)) : (v = !0), we(C, w - ae)))
          : ((N.sortIndex = ue), t(s, N), g || p || ((g = !0), Ee(T))),
        N
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (N) {
      var K = d;
      return function () {
        var w = d;
        d = K;
        try {
          return N.apply(this, arguments);
        } finally {
          d = w;
        }
      };
    });
})(rg);
ng.exports = rg;
var N0 = ng.exports; /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A0 = A,
  _t = N0;
function I(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ig = new Set(),
  Po = {};
function $r(e, t) {
  Ci(e, t), Ci(e + 'Capture', t);
}
function Ci(e, t) {
  for (Po[e] = t, e = 0; e < t.length; e++) ig.add(t[e]);
}
var Pn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Pu = Object.prototype.hasOwnProperty,
  I0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ud = {},
  Bd = {};
function z0(e) {
  return Pu.call(Bd, e)
    ? !0
    : Pu.call(Ud, e)
      ? !1
      : I0.test(e)
        ? (Bd[e] = !0)
        : ((Ud[e] = !0), !1);
}
function D0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function M0(e, t, n, r) {
  if (t === null || typeof t > 'u' || D0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function gt(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var rt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    rt[e] = new gt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new gt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  rt[e] = new gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  rt[e] = new gt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    rt[e] = new gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  rt[e] = new gt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  rt[e] = new gt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  rt[e] = new gt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  rt[e] = new gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nf = /[\-:]([a-z])/g;
function rf(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nf, rf);
    rt[t] = new gt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nf, rf);
    rt[t] = new gt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(nf, rf);
  rt[t] = new gt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  rt[e] = new gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new gt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  rt[e] = new gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function of(e, t, n, r) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (M0(t, n, i, r) && (n = null),
    r || i === null
      ? z0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var In = A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sa = Symbol.for('react.element'),
  ei = Symbol.for('react.portal'),
  ti = Symbol.for('react.fragment'),
  af = Symbol.for('react.strict_mode'),
  Tu = Symbol.for('react.profiler'),
  og = Symbol.for('react.provider'),
  ag = Symbol.for('react.context'),
  lf = Symbol.for('react.forward_ref'),
  Ru = Symbol.for('react.suspense'),
  Ou = Symbol.for('react.suspense_list'),
  sf = Symbol.for('react.memo'),
  Wn = Symbol.for('react.lazy'),
  lg = Symbol.for('react.offscreen'),
  Hd = Symbol.iterator;
function Yi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hd && e[Hd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ze = Object.assign,
  Ls;
function ao(e) {
  if (Ls === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ls = (t && t[1]) || '';
    }
  return (
    `
` +
    Ls +
    e
  );
}
var Ns = !1;
function As(e, t) {
  if (!e || Ns) return '';
  Ns = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];
      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ns = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ao(e) : '';
}
function F0(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type);
    case 16:
      return ao('Lazy');
    case 13:
      return ao('Suspense');
    case 19:
      return ao('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = As(e.type, !1)), e;
    case 11:
      return (e = As(e.type.render, !1)), e;
    case 1:
      return (e = As(e.type, !0)), e;
    default:
      return '';
  }
}
function _u(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ti:
      return 'Fragment';
    case ei:
      return 'Portal';
    case Tu:
      return 'Profiler';
    case af:
      return 'StrictMode';
    case Ru:
      return 'Suspense';
    case Ou:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ag:
        return (e.displayName || 'Context') + '.Consumer';
      case og:
        return (e._context.displayName || 'Context') + '.Provider';
      case lf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case sf:
        return (
          (t = e.displayName || null), t !== null ? t : _u(e.type) || 'Memo'
        );
      case Wn:
        (t = e._payload), (e = e._init);
        try {
          return _u(e(t));
        } catch {}
    }
  return null;
}
function j0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return _u(t);
    case 8:
      return t === af ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function or(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function sg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function U0(e) {
  var t = sg(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = '' + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ea(e) {
  e._valueTracker || (e._valueTracker = U0(e));
}
function ug(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = sg(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lu(e, t) {
  var n = t.checked;
  return ze({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $d(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = or(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function cg(e, t) {
  (t = t.checked), t != null && of(e, 'checked', t, !1);
}
function Nu(e, t) {
  cg(e, t);
  var n = or(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Au(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Au(e, t.type, or(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vd(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Au(e, t, n) {
  (t !== 'number' || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var lo = Array.isArray;
function gi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + or(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ze({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Wd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (lo(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: or(n) };
}
function fg(e, t) {
  var n = or(t.value),
    r = or(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Yd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function dg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function zu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? dg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var ba,
  pg = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ba = ba || document.createElement('div'),
          ba.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ba.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function To(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  B0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fo).forEach(function (e) {
  B0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fo[t] = fo[e]);
  });
});
function hg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fo.hasOwnProperty(e) && fo[e])
      ? ('' + t).trim()
      : t + 'px';
}
function mg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = hg(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var H0 = ze(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Du(e, t) {
  if (t) {
    if (H0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(I(62));
  }
}
function Mu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Fu = null;
function uf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ju = null,
  yi = null,
  vi = null;
function qd(e) {
  if ((e = ta(e))) {
    if (typeof ju != 'function') throw Error(I(280));
    var t = e.stateNode;
    t && ((t = ns(t)), ju(e.stateNode, e.type, t));
  }
}
function gg(e) {
  yi ? (vi ? vi.push(e) : (vi = [e])) : (yi = e);
}
function yg() {
  if (yi) {
    var e = yi,
      t = vi;
    if (((vi = yi = null), qd(e), t)) for (e = 0; e < t.length; e++) qd(t[e]);
  }
}
function vg(e, t) {
  return e(t);
}
function wg() {}
var Is = !1;
function xg(e, t, n) {
  if (Is) return e(t, n);
  Is = !0;
  try {
    return vg(e, t, n);
  } finally {
    (Is = !1), (yi !== null || vi !== null) && (wg(), yg());
  }
}
function Ro(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ns(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(I(231, t, typeof n));
  return n;
}
var Uu = !1;
if (Pn)
  try {
    var qi = {};
    Object.defineProperty(qi, 'passive', {
      get: function () {
        Uu = !0;
      },
    }),
      window.addEventListener('test', qi, qi),
      window.removeEventListener('test', qi, qi);
  } catch {
    Uu = !1;
  }
function $0(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var po = !1,
  ml = null,
  gl = !1,
  Bu = null,
  V0 = {
    onError: function (e) {
      (po = !0), (ml = e);
    },
  };
function W0(e, t, n, r, i, o, a, l, s) {
  (po = !1), (ml = null), $0.apply(V0, arguments);
}
function Y0(e, t, n, r, i, o, a, l, s) {
  if ((W0.apply(this, arguments), po)) {
    if (po) {
      var u = ml;
      (po = !1), (ml = null);
    } else throw Error(I(198));
    gl || ((gl = !0), (Bu = u));
  }
}
function Vr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kd(e) {
  if (Vr(e) !== e) throw Error(I(188));
}
function q0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vr(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Kd(i), e;
        if (o === r) return Kd(i), t;
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Sg(e) {
  return (e = q0(e)), e !== null ? Eg(e) : null;
}
function Eg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bg = _t.unstable_scheduleCallback,
  Qd = _t.unstable_cancelCallback,
  K0 = _t.unstable_shouldYield,
  Q0 = _t.unstable_requestPaint,
  je = _t.unstable_now,
  X0 = _t.unstable_getCurrentPriorityLevel,
  cf = _t.unstable_ImmediatePriority,
  Cg = _t.unstable_UserBlockingPriority,
  yl = _t.unstable_NormalPriority,
  G0 = _t.unstable_LowPriority,
  Pg = _t.unstable_IdlePriority,
  Jl = null,
  vn = null;
function J0(e) {
  if (vn && typeof vn.onCommitFiberRoot == 'function')
    try {
      vn.onCommitFiberRoot(Jl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : tw,
  Z0 = Math.log,
  ew = Math.LN2;
function tw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Z0(e) / ew) | 0)) | 0;
}
var Ca = 64,
  Pa = 4194304;
function so(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = so(l)) : ((o &= a), o !== 0 && (r = so(o)));
  } else (a = n & ~i), a !== 0 ? (r = so(a)) : o !== 0 && (r = so(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function nw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var a = 31 - nn(o),
      l = 1 << a,
      s = i[a];
    s === -1
      ? (!(l & n) || l & r) && (i[a] = nw(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Hu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tg() {
  var e = Ca;
  return (Ca <<= 1), !(Ca & 4194240) && (Ca = 64), e;
}
function zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function iw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - nn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ff(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ve = 0;
function Rg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Og,
  df,
  _g,
  Lg,
  Ng,
  $u = !1,
  Ta = [],
  Gn = null,
  Jn = null,
  Zn = null,
  Oo = new Map(),
  _o = new Map(),
  qn = [],
  ow =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Xd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Gn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Jn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Zn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      _o.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ta(t)), t !== null && df(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function aw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Gn = Ki(Gn, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Jn = Ki(Jn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Zn = Ki(Zn, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Oo.set(o, Ki(Oo.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), _o.set(o, Ki(_o.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ag(e) {
  var t = Er(e.target);
  if (t !== null) {
    var n = Vr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kg(n)), t !== null)) {
          (e.blockedOn = t),
            Ng(e.priority, function () {
              _g(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ja(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fu = r), n.target.dispatchEvent(r), (Fu = null);
    } else return (t = ta(n)), t !== null && df(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gd(e, t, n) {
  Ja(e) && n.delete(t);
}
function lw() {
  ($u = !1),
    Gn !== null && Ja(Gn) && (Gn = null),
    Jn !== null && Ja(Jn) && (Jn = null),
    Zn !== null && Ja(Zn) && (Zn = null),
    Oo.forEach(Gd),
    _o.forEach(Gd);
}
function Qi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $u ||
      (($u = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, lw)));
}
function Lo(e) {
  function t(i) {
    return Qi(i, e);
  }
  if (0 < Ta.length) {
    Qi(Ta[0], e);
    for (var n = 1; n < Ta.length; n++) {
      var r = Ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gn !== null && Qi(Gn, e),
      Jn !== null && Qi(Jn, e),
      Zn !== null && Qi(Zn, e),
      Oo.forEach(t),
      _o.forEach(t),
      n = 0;
    n < qn.length;
    n++
  )
    (r = qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qn.length && ((n = qn[0]), n.blockedOn === null); )
    Ag(n), n.blockedOn === null && qn.shift();
}
var wi = In.ReactCurrentBatchConfig,
  wl = !0;
function sw(e, t, n, r) {
  var i = ve,
    o = wi.transition;
  wi.transition = null;
  try {
    (ve = 1), pf(e, t, n, r);
  } finally {
    (ve = i), (wi.transition = o);
  }
}
function uw(e, t, n, r) {
  var i = ve,
    o = wi.transition;
  wi.transition = null;
  try {
    (ve = 4), pf(e, t, n, r);
  } finally {
    (ve = i), (wi.transition = o);
  }
}
function pf(e, t, n, r) {
  if (wl) {
    var i = Vu(e, t, n, r);
    if (i === null) Ws(e, t, r, xl, n), Xd(e, r);
    else if (aw(i, e, t, n, r)) r.stopPropagation();
    else if ((Xd(e, r), t & 4 && -1 < ow.indexOf(e))) {
      for (; i !== null; ) {
        var o = ta(i);
        if (
          (o !== null && Og(o),
          (o = Vu(e, t, n, r)),
          o === null && Ws(e, t, r, xl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ws(e, t, r, null, n);
  }
}
var xl = null;
function Vu(e, t, n, r) {
  if (((xl = null), (e = uf(r)), (e = Er(e)), e !== null))
    if (((t = Vr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xl = e), null;
}
function Ig(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (X0()) {
        case cf:
          return 1;
        case Cg:
          return 4;
        case yl:
        case G0:
          return 16;
        case Pg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qn = null,
  hf = null,
  Za = null;
function zg() {
  if (Za) return Za;
  var e,
    t = hf,
    n = t.length,
    r,
    i = 'value' in Qn ? Qn.value : Qn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Za = i.slice(e, 1 < r ? 1 - r : void 0));
}
function el(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ra() {
  return !0;
}
function Jd() {
  return !1;
}
function Nt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null
          ? o.defaultPrevented
          : o.returnValue === !1
      )
        ? Ra
        : Jd),
      (this.isPropagationStopped = Jd),
      this
    );
  }
  return (
    ze(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ra));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ra));
      },
      persist: function () {},
      isPersistent: Ra,
    }),
    t
  );
}
var zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mf = Nt(zi),
  ea = ze({}, zi, { view: 0, detail: 0 }),
  cw = Nt(ea),
  Ds,
  Ms,
  Xi,
  Zl = ze({}, ea, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Xi &&
            (Xi && e.type === 'mousemove'
              ? ((Ds = e.screenX - Xi.screenX), (Ms = e.screenY - Xi.screenY))
              : (Ms = Ds = 0),
            (Xi = e)),
          Ds);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ms;
    },
  }),
  Zd = Nt(Zl),
  fw = ze({}, Zl, { dataTransfer: 0 }),
  dw = Nt(fw),
  pw = ze({}, ea, { relatedTarget: 0 }),
  Fs = Nt(pw),
  hw = ze({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mw = Nt(hw),
  gw = ze({}, zi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yw = Nt(gw),
  vw = ze({}, zi, { data: 0 }),
  ep = Nt(vw),
  ww = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  xw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  kw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Sw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kw[e]) ? !!t[e] : !1;
}
function gf() {
  return Sw;
}
var Ew = ze({}, ea, {
    key: function (e) {
      if (e.key) {
        var t = ww[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = el(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? xw[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gf,
    charCode: function (e) {
      return e.type === 'keypress' ? el(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? el(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  bw = Nt(Ew),
  Cw = ze({}, Zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tp = Nt(Cw),
  Pw = ze({}, ea, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gf,
  }),
  Tw = Nt(Pw),
  Rw = ze({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ow = Nt(Rw),
  _w = ze({}, Zl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Lw = Nt(_w),
  Nw = [9, 13, 27, 32],
  yf = Pn && 'CompositionEvent' in window,
  ho = null;
Pn && 'documentMode' in document && (ho = document.documentMode);
var Aw = Pn && 'TextEvent' in window && !ho,
  Dg = Pn && (!yf || (ho && 8 < ho && 11 >= ho)),
  np = ' ',
  rp = !1;
function Mg(e, t) {
  switch (e) {
    case 'keyup':
      return Nw.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Fg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ni = !1;
function Iw(e, t) {
  switch (e) {
    case 'compositionend':
      return Fg(t);
    case 'keypress':
      return t.which !== 32 ? null : ((rp = !0), np);
    case 'textInput':
      return (e = t.data), e === np && rp ? null : e;
    default:
      return null;
  }
}
function zw(e, t) {
  if (ni)
    return e === 'compositionend' || (!yf && Mg(e, t))
      ? ((e = zg()), (Za = hf = Qn = null), (ni = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Dg && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Dw = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ip(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Dw[e.type] : t === 'textarea';
}
function jg(e, t, n, r) {
  gg(r),
    (t = kl(t, 'onChange')),
    0 < t.length &&
      ((n = new mf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mo = null,
  No = null;
function Mw(e) {
  Xg(e, 0);
}
function es(e) {
  var t = oi(e);
  if (ug(t)) return e;
}
function Fw(e, t) {
  if (e === 'change') return t;
}
var Ug = !1;
if (Pn) {
  var js;
  if (Pn) {
    var Us = 'oninput' in document;
    if (!Us) {
      var op = document.createElement('div');
      op.setAttribute('oninput', 'return;'),
        (Us = typeof op.oninput == 'function');
    }
    js = Us;
  } else js = !1;
  Ug = js && (!document.documentMode || 9 < document.documentMode);
}
function ap() {
  mo && (mo.detachEvent('onpropertychange', Bg), (No = mo = null));
}
function Bg(e) {
  if (e.propertyName === 'value' && es(No)) {
    var t = [];
    jg(t, No, e, uf(e)), xg(Mw, t);
  }
}
function jw(e, t, n) {
  e === 'focusin'
    ? (ap(), (mo = t), (No = n), mo.attachEvent('onpropertychange', Bg))
    : e === 'focusout' && ap();
}
function Uw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return es(No);
}
function Bw(e, t) {
  if (e === 'click') return es(t);
}
function Hw(e, t) {
  if (e === 'input' || e === 'change') return es(t);
}
function $w(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var an = typeof Object.is == 'function' ? Object.is : $w;
function Ao(e, t) {
  if (an(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Pu.call(t, i) || !an(e[i], t[i])) return !1;
  }
  return !0;
}
function lp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sp(e, t) {
  var n = lp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lp(n);
  }
}
function Hg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Hg(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $g() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function vf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Vw(e) {
  var t = $g(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = sp(n, o));
        var a = sp(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ww = Pn && 'documentMode' in document && 11 >= document.documentMode,
  ri = null,
  Wu = null,
  go = null,
  Yu = !1;
function up(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yu ||
    ri == null ||
    ri !== hl(r) ||
    ((r = ri),
    'selectionStart' in r && vf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (go && Ao(go, r)) ||
      ((go = r),
      (r = kl(Wu, 'onSelect')),
      0 < r.length &&
        ((t = new mf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ri))));
}
function Oa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ii = {
    animationend: Oa('Animation', 'AnimationEnd'),
    animationiteration: Oa('Animation', 'AnimationIteration'),
    animationstart: Oa('Animation', 'AnimationStart'),
    transitionend: Oa('Transition', 'TransitionEnd'),
  },
  Bs = {},
  Vg = {};
Pn &&
  ((Vg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ii.animationend.animation,
    delete ii.animationiteration.animation,
    delete ii.animationstart.animation),
  'TransitionEvent' in window || delete ii.transitionend.transition);
function ts(e) {
  if (Bs[e]) return Bs[e];
  if (!ii[e]) return e;
  var t = ii[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vg) return (Bs[e] = t[n]);
  return e;
}
var Wg = ts('animationend'),
  Yg = ts('animationiteration'),
  qg = ts('animationstart'),
  Kg = ts('transitionend'),
  Qg = new Map(),
  cp =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function cr(e, t) {
  Qg.set(e, t), $r(t, [e]);
}
for (var Hs = 0; Hs < cp.length; Hs++) {
  var $s = cp[Hs],
    Yw = $s.toLowerCase(),
    qw = $s[0].toUpperCase() + $s.slice(1);
  cr(Yw, 'on' + qw);
}
cr(Wg, 'onAnimationEnd');
cr(Yg, 'onAnimationIteration');
cr(qg, 'onAnimationStart');
cr('dblclick', 'onDoubleClick');
cr('focusin', 'onFocus');
cr('focusout', 'onBlur');
cr(Kg, 'onTransitionEnd');
Ci('onMouseEnter', ['mouseout', 'mouseover']);
Ci('onMouseLeave', ['mouseout', 'mouseover']);
Ci('onPointerEnter', ['pointerout', 'pointerover']);
Ci('onPointerLeave', ['pointerout', 'pointerover']);
$r(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
$r(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
$r('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
$r(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
$r(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
$r(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var uo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Kw = new Set('cancel close invalid load scroll toggle'.split(' ').concat(uo));
function fp(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Y0(r, t, void 0, e), (e.currentTarget = null);
}
function Xg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          fp(i, l, u), (o = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          fp(i, l, u), (o = s);
        }
    }
  }
  if (gl) throw ((e = Bu), (gl = !1), (Bu = null), e);
}
function Ce(e, t) {
  var n = t[Gu];
  n === void 0 && (n = t[Gu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Gg(t, e, 2, !1), n.add(r));
}
function Vs(e, t, n) {
  var r = 0;
  t && (r |= 4), Gg(n, e, r, t);
}
var _a = '_reactListening' + Math.random().toString(36).slice(2);
function Io(e) {
  if (!e[_a]) {
    (e[_a] = !0),
      ig.forEach(function (n) {
        n !== 'selectionchange' && (Kw.has(n) || Vs(n, !1, e), Vs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_a] || ((t[_a] = !0), Vs('selectionchange', !1, t));
  }
}
function Gg(e, t, n, r) {
  switch (Ig(t)) {
    case 1:
      var i = sw;
      break;
    case 4:
      i = uw;
      break;
    default:
      i = pf;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Uu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Ws(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Er(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  xg(function () {
    var u = o,
      c = uf(n),
      f = [];
    e: {
      var d = Qg.get(e);
      if (d !== void 0) {
        var p = mf,
          g = e;
        switch (e) {
          case 'keypress':
            if (el(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = bw;
            break;
          case 'focusin':
            (g = 'focus'), (p = Fs);
            break;
          case 'focusout':
            (g = 'blur'), (p = Fs);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = Fs;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = Zd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = dw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = Tw;
            break;
          case Wg:
          case Yg:
          case qg:
            p = mw;
            break;
          case Kg:
            p = Ow;
            break;
          case 'scroll':
            p = cw;
            break;
          case 'wheel':
            p = Lw;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = yw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = tp;
        }
        var v = (t & 4) !== 0,
          b = !v && e === 'scroll',
          h = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var C = y.stateNode;
          if (
            (y.tag === 5 &&
              C !== null &&
              ((y = C),
              h !== null && ((C = Ro(m, h)), C != null && v.push(zo(m, C, y)))),
            b)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((d = new p(d, g, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Fu &&
            (g = n.relatedTarget || n.fromElement) &&
            (Er(g) || g[Tn]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? Er(g) : null),
              g !== null &&
                ((b = Vr(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((v = Zd),
            (C = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = tp),
              (C = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (m = 'pointer')),
            (b = p == null ? d : oi(p)),
            (y = g == null ? d : oi(g)),
            (d = new v(C, m + 'leave', p, n, c)),
            (d.target = b),
            (d.relatedTarget = y),
            (C = null),
            Er(c) === u &&
              ((v = new v(h, m + 'enter', g, n, c)),
              (v.target = y),
              (v.relatedTarget = b),
              (C = v)),
            (b = C),
            p && g)
          )
            t: {
              for (v = p, h = g, m = 0, y = v; y; y = Gr(y)) m++;
              for (y = 0, C = h; C; C = Gr(C)) y++;
              for (; 0 < m - y; ) (v = Gr(v)), m--;
              for (; 0 < y - m; ) (h = Gr(h)), y--;
              for (; m--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Gr(v)), (h = Gr(h));
              }
              v = null;
            }
          else v = null;
          p !== null && dp(f, d, p, v, !1),
            g !== null && b !== null && dp(f, b, g, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? oi(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && d.type === 'file'))
        )
          var T = Fw;
        else if (ip(d))
          if (Ug) T = Hw;
          else {
            T = Uw;
            var S = jw;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (T = Bw);
        if (T && (T = T(e, u))) {
          jg(f, T, n, c);
          break e;
        }
        S && S(e, d, u),
          e === 'focusout' &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === 'number' &&
            Au(d, 'number', d.value);
      }
      switch (((S = u ? oi(u) : window), e)) {
        case 'focusin':
          (ip(S) || S.contentEditable === 'true') &&
            ((ri = S), (Wu = u), (go = null));
          break;
        case 'focusout':
          go = Wu = ri = null;
          break;
        case 'mousedown':
          Yu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Yu = !1), up(f, n, c);
          break;
        case 'selectionchange':
          if (Ww) break;
        case 'keydown':
        case 'keyup':
          up(f, n, c);
      }
      var x;
      if (yf)
        e: {
          switch (e) {
            case 'compositionstart':
              var L = 'onCompositionStart';
              break e;
            case 'compositionend':
              L = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              L = 'onCompositionUpdate';
              break e;
          }
          L = void 0;
        }
      else
        ni
          ? Mg(e, n) && (L = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (L = 'onCompositionStart');
      L &&
        (Dg &&
          n.locale !== 'ko' &&
          (ni || L !== 'onCompositionStart'
            ? L === 'onCompositionEnd' && ni && (x = zg())
            : ((Qn = c),
              (hf = 'value' in Qn ? Qn.value : Qn.textContent),
              (ni = !0))),
        (S = kl(u, L)),
        0 < S.length &&
          ((L = new ep(L, e, null, n, c)),
          f.push({ event: L, listeners: S }),
          x ? (L.data = x) : ((x = Fg(n)), x !== null && (L.data = x)))),
        (x = Aw ? Iw(e, n) : zw(e, n)) &&
          ((u = kl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new ep('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    Xg(f, t);
  });
}
function zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ro(e, n)),
      o != null && r.unshift(zo(e, o, i)),
      (o = Ro(e, t)),
      o != null && r.push(zo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dp(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Ro(n, o)), s != null && a.unshift(zo(n, s, l)))
        : i || ((s = Ro(n, o)), s != null && a.push(zo(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Qw = /\r\n?/g,
  Xw = /\u0000|\uFFFD/g;
function pp(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Qw,
      `
`,
    )
    .replace(Xw, '');
}
function La(e, t, n) {
  if (((t = pp(t)), pp(e) !== t && n)) throw Error(I(425));
}
function Sl() {}
var qu = null,
  Ku = null;
function Qu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  hp = typeof Promise == 'function' ? Promise : void 0,
  Jw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof hp < 'u'
        ? function (e) {
            return hp.resolve(null).then(e).catch(Zw);
          }
        : Xu;
function Zw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ys(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Lo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Lo(t);
}
function er(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function mp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Di = Math.random().toString(36).slice(2),
  mn = '__reactFiber$' + Di,
  Do = '__reactProps$' + Di,
  Tn = '__reactContainer$' + Di,
  Gu = '__reactEvents$' + Di,
  ex = '__reactListeners$' + Di,
  tx = '__reactHandles$' + Di;
function Er(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tn] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = mp(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = mp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ta(e) {
  return (
    (e = e[mn] || e[Tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function ns(e) {
  return e[Do] || null;
}
var Ju = [],
  ai = -1;
function fr(e) {
  return { current: e };
}
function Te(e) {
  0 > ai || ((e.current = Ju[ai]), (Ju[ai] = null), ai--);
}
function ke(e, t) {
  ai++, (Ju[ai] = e.current), (e.current = t);
}
var ar = {},
  ut = fr(ar),
  xt = fr(!1),
  Ir = ar;
function Pi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function kt(e) {
  return (e = e.childContextTypes), e != null;
}
function El() {
  Te(xt), Te(ut);
}
function gp(e, t, n) {
  if (ut.current !== ar) throw Error(I(168));
  ke(ut, t), ke(xt, n);
}
function Jg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, j0(e) || 'Unknown', i));
  return ze({}, n, r);
}
function bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ar),
    (Ir = ut.current),
    ke(ut, e),
    ke(xt, xt.current),
    !0
  );
}
function yp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Jg(e, t, Ir)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Te(xt),
      Te(ut),
      ke(ut, e))
    : Te(xt),
    ke(xt, n);
}
var kn = null,
  rs = !1,
  qs = !1;
function Zg(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function nx(e) {
  (rs = !0), Zg(e);
}
function dr() {
  if (!qs && kn !== null) {
    qs = !0;
    var e = 0,
      t = ve;
    try {
      var n = kn;
      for (ve = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kn = null), (rs = !1);
    } catch (i) {
      throw (kn !== null && (kn = kn.slice(e + 1)), bg(cf, dr), i);
    } finally {
      (ve = t), (qs = !1);
    }
  }
  return null;
}
var li = [],
  si = 0,
  Cl = null,
  Pl = 0,
  jt = [],
  Ut = 0,
  zr = null,
  Sn = 1,
  En = '';
function xr(e, t) {
  (li[si++] = Pl), (li[si++] = Cl), (Cl = e), (Pl = t);
}
function ey(e, t, n) {
  (jt[Ut++] = Sn), (jt[Ut++] = En), (jt[Ut++] = zr), (zr = e);
  var r = Sn;
  e = En;
  var i = 32 - nn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - nn(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Sn = (1 << (32 - nn(t) + i)) | (n << i) | r),
      (En = o + e);
  } else (Sn = (1 << o) | (n << i) | r), (En = e);
}
function wf(e) {
  e.return !== null && (xr(e, 1), ey(e, 1, 0));
}
function xf(e) {
  for (; e === Cl; )
    (Cl = li[--si]), (li[si] = null), (Pl = li[--si]), (li[si] = null);
  for (; e === zr; )
    (zr = jt[--Ut]),
      (jt[Ut] = null),
      (En = jt[--Ut]),
      (jt[Ut] = null),
      (Sn = jt[--Ut]),
      (jt[Ut] = null);
}
var Ot = null,
  Tt = null,
  Le = !1,
  en = null;
function ty(e, t) {
  var n = $t(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (Tt = er(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (Tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zr !== null ? { id: Sn, overflow: En } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ot = e),
            (Tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ec(e) {
  if (Le) {
    var t = Tt;
    if (t) {
      var n = t;
      if (!vp(e, t)) {
        if (Zu(e)) throw Error(I(418));
        t = er(n.nextSibling);
        var r = Ot;
        t && vp(e, t)
          ? ty(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (Ot = e));
      }
    } else {
      if (Zu(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Le = !1), (Ot = e);
    }
  }
}
function wp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}
function Na(e) {
  if (e !== Ot) return !1;
  if (!Le) return wp(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Qu(e.type, e.memoizedProps))),
    t && (t = Tt))
  ) {
    if (Zu(e)) throw (ny(), Error(I(418)));
    for (; t; ) ty(e, t), (t = er(t.nextSibling));
  }
  if ((wp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Tt = er(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else Tt = Ot ? er(e.stateNode.nextSibling) : null;
  return !0;
}
function ny() {
  for (var e = Tt; e; ) e = er(e.nextSibling);
}
function Ti() {
  (Tt = Ot = null), (Le = !1);
}
function kf(e) {
  en === null ? (en = [e]) : en.push(e);
}
var rx = In.ReactCurrentBatchConfig;
function Gi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Aa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function xp(e) {
  var t = e._init;
  return t(e._payload);
}
function ry(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function i(h, m) {
    return (h = ir(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, m, y, C) {
    return m === null || m.tag !== 6
      ? ((m = eu(y, h.mode, C)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function s(h, m, y, C) {
    var T = y.type;
    return T === ti
      ? c(h, m, y.props.children, C, y.key)
      : m !== null &&
          (m.elementType === T ||
            (typeof T == 'object' &&
              T !== null &&
              T.$$typeof === Wn &&
              xp(T) === m.type))
        ? ((C = i(m, y.props)), (C.ref = Gi(h, m, y)), (C.return = h), C)
        : ((C = ll(y.type, y.key, y.props, null, h.mode, C)),
          (C.ref = Gi(h, m, y)),
          (C.return = h),
          C);
  }
  function u(h, m, y, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = tu(y, h.mode, C)), (m.return = h), m)
      : ((m = i(m, y.children || [])), (m.return = h), m);
  }
  function c(h, m, y, C, T) {
    return m === null || m.tag !== 7
      ? ((m = Lr(y, h.mode, C, T)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function f(h, m, y) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = eu('' + m, h.mode, y)), (m.return = h), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Sa:
          return (
            (y = ll(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = Gi(h, null, m)),
            (y.return = h),
            y
          );
        case ei:
          return (m = tu(m, h.mode, y)), (m.return = h), m;
        case Wn:
          var C = m._init;
          return f(h, C(m._payload), y);
      }
      if (lo(m) || Yi(m))
        return (m = Lr(m, h.mode, y, null)), (m.return = h), m;
      Aa(h, m);
    }
    return null;
  }
  function d(h, m, y, C) {
    var T = m !== null ? m.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return T !== null ? null : l(h, m, '' + y, C);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Sa:
          return y.key === T ? s(h, m, y, C) : null;
        case ei:
          return y.key === T ? u(h, m, y, C) : null;
        case Wn:
          return (T = y._init), d(h, m, T(y._payload), C);
      }
      if (lo(y) || Yi(y)) return T !== null ? null : c(h, m, y, C, null);
      Aa(h, y);
    }
    return null;
  }
  function p(h, m, y, C, T) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (h = h.get(y) || null), l(m, h, '' + C, T);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case Sa:
          return (h = h.get(C.key === null ? y : C.key) || null), s(m, h, C, T);
        case ei:
          return (h = h.get(C.key === null ? y : C.key) || null), u(m, h, C, T);
        case Wn:
          var S = C._init;
          return p(h, m, y, S(C._payload), T);
      }
      if (lo(C) || Yi(C)) return (h = h.get(y) || null), c(m, h, C, T, null);
      Aa(m, C);
    }
    return null;
  }
  function g(h, m, y, C) {
    for (
      var T = null, S = null, x = m, L = (m = 0), M = null;
      x !== null && L < y.length;
      L++
    ) {
      x.index > L ? ((M = x), (x = null)) : (M = x.sibling);
      var z = d(h, x, y[L], C);
      if (z === null) {
        x === null && (x = M);
        break;
      }
      e && x && z.alternate === null && t(h, x),
        (m = o(z, m, L)),
        S === null ? (T = z) : (S.sibling = z),
        (S = z),
        (x = M);
    }
    if (L === y.length) return n(h, x), Le && xr(h, L), T;
    if (x === null) {
      for (; L < y.length; L++)
        (x = f(h, y[L], C)),
          x !== null &&
            ((m = o(x, m, L)), S === null ? (T = x) : (S.sibling = x), (S = x));
      return Le && xr(h, L), T;
    }
    for (x = r(h, x); L < y.length; L++)
      (M = p(x, h, L, y[L], C)),
        M !== null &&
          (e && M.alternate !== null && x.delete(M.key === null ? L : M.key),
          (m = o(M, m, L)),
          S === null ? (T = M) : (S.sibling = M),
          (S = M));
    return (
      e &&
        x.forEach(function (U) {
          return t(h, U);
        }),
      Le && xr(h, L),
      T
    );
  }
  function v(h, m, y, C) {
    var T = Yi(y);
    if (typeof T != 'function') throw Error(I(150));
    if (((y = T.call(y)), y == null)) throw Error(I(151));
    for (
      var S = (T = null), x = m, L = (m = 0), M = null, z = y.next();
      x !== null && !z.done;
      L++, z = y.next()
    ) {
      x.index > L ? ((M = x), (x = null)) : (M = x.sibling);
      var U = d(h, x, z.value, C);
      if (U === null) {
        x === null && (x = M);
        break;
      }
      e && x && U.alternate === null && t(h, x),
        (m = o(U, m, L)),
        S === null ? (T = U) : (S.sibling = U),
        (S = U),
        (x = M);
    }
    if (z.done) return n(h, x), Le && xr(h, L), T;
    if (x === null) {
      for (; !z.done; L++, z = y.next())
        (z = f(h, z.value, C)),
          z !== null &&
            ((m = o(z, m, L)), S === null ? (T = z) : (S.sibling = z), (S = z));
      return Le && xr(h, L), T;
    }
    for (x = r(h, x); !z.done; L++, z = y.next())
      (z = p(x, h, L, z.value, C)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? L : z.key),
          (m = o(z, m, L)),
          S === null ? (T = z) : (S.sibling = z),
          (S = z));
    return (
      e &&
        x.forEach(function (B) {
          return t(h, B);
        }),
      Le && xr(h, L),
      T
    );
  }
  function b(h, m, y, C) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === ti &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Sa:
          e: {
            for (var T = y.key, S = m; S !== null; ) {
              if (S.key === T) {
                if (((T = y.type), T === ti)) {
                  if (S.tag === 7) {
                    n(h, S.sibling),
                      (m = i(S, y.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  S.elementType === T ||
                  (typeof T == 'object' &&
                    T !== null &&
                    T.$$typeof === Wn &&
                    xp(T) === S.type)
                ) {
                  n(h, S.sibling),
                    (m = i(S, y.props)),
                    (m.ref = Gi(h, S, y)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, S);
                break;
              } else t(h, S);
              S = S.sibling;
            }
            y.type === ti
              ? ((m = Lr(y.props.children, h.mode, C, y.key)),
                (m.return = h),
                (h = m))
              : ((C = ll(y.type, y.key, y.props, null, h.mode, C)),
                (C.ref = Gi(h, m, y)),
                (C.return = h),
                (h = C));
          }
          return a(h);
        case ei:
          e: {
            for (S = y.key; m !== null; ) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(h, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = tu(y, h.mode, C)), (m.return = h), (h = m);
          }
          return a(h);
        case Wn:
          return (S = y._init), b(h, m, S(y._payload), C);
      }
      if (lo(y)) return g(h, m, y, C);
      if (Yi(y)) return v(h, m, y, C);
      Aa(h, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = eu(y, h.mode, C)), (m.return = h), (h = m)),
        a(h))
      : n(h, m);
  }
  return b;
}
var Ri = ry(!0),
  iy = ry(!1),
  Tl = fr(null),
  Rl = null,
  ui = null,
  Sf = null;
function Ef() {
  Sf = ui = Rl = null;
}
function bf(e) {
  var t = Tl.current;
  Te(Tl), (e._currentValue = t);
}
function tc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xi(e, t) {
  (Rl = e),
    (Sf = ui = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (wt = !0), (e.firstContext = null));
}
function Yt(e) {
  var t = e._currentValue;
  if (Sf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ui === null)) {
      if (Rl === null) throw Error(I(308));
      (ui = e), (Rl.dependencies = { lanes: 0, firstContext: e });
    } else ui = ui.next = e;
  return t;
}
var br = null;
function Cf(e) {
  br === null ? (br = [e]) : br.push(e);
}
function oy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Cf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rn(e, r)
  );
}
function Rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function Pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ay(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), me & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Rn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Cf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rn(e, n)
  );
}
function tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ff(e, n);
  }
}
function kp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ol(e, t, n, r) {
  var i = e.updateQueue;
  Yn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (o = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (c = u = s = null), (l = o);
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            v = l;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                f = g.call(p, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (d = typeof g == 'function' ? g.call(p, f, d) : g),
                d == null)
              )
                break e;
              f = ze({}, f, d);
              break e;
            case 2:
              Yn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (s = f)) : (c = c.next = p),
          (a |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Mr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function Sp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var na = {},
  wn = fr(na),
  Mo = fr(na),
  Fo = fr(na);
function Cr(e) {
  if (e === na) throw Error(I(174));
  return e;
}
function Tf(e, t) {
  switch ((ke(Fo, t), ke(Mo, e), ke(wn, na), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zu(t, e));
  }
  Te(wn), ke(wn, t);
}
function Oi() {
  Te(wn), Te(Mo), Te(Fo);
}
function ly(e) {
  Cr(Fo.current);
  var t = Cr(wn.current),
    n = zu(t, e.type);
  t !== n && (ke(Mo, e), ke(wn, n));
}
function Rf(e) {
  Mo.current === e && (Te(wn), Te(Mo));
}
var Ae = fr(0);
function _l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ks = [];
function Of() {
  for (var e = 0; e < Ks.length; e++)
    Ks[e]._workInProgressVersionPrimary = null;
  Ks.length = 0;
}
var nl = In.ReactCurrentDispatcher,
  Qs = In.ReactCurrentBatchConfig,
  Dr = 0,
  Ie = null,
  We = null,
  Xe = null,
  Ll = !1,
  yo = !1,
  jo = 0,
  ix = 0;
function ot() {
  throw Error(I(321));
}
function _f(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!an(e[n], t[n])) return !1;
  return !0;
}
function Lf(e, t, n, r, i, o) {
  if (
    ((Dr = o),
    (Ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? sx : ux),
    (e = n(r, i)),
    yo)
  ) {
    o = 0;
    do {
      if (((yo = !1), (jo = 0), 25 <= o)) throw Error(I(301));
      (o += 1),
        (Xe = We = null),
        (t.updateQueue = null),
        (nl.current = cx),
        (e = n(r, i));
    } while (yo);
  }
  if (
    ((nl.current = Nl),
    (t = We !== null && We.next !== null),
    (Dr = 0),
    (Xe = We = Ie = null),
    (Ll = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Nf() {
  var e = jo !== 0;
  return (jo = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Xe === null ? (Ie.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
}
function qt() {
  if (We === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = We.next;
  var t = Xe === null ? Ie.memoizedState : Xe.next;
  if (t !== null) (Xe = t), (We = e);
  else {
    if (e === null) throw Error(I(310));
    (We = e),
      (e = {
        memoizedState: We.memoizedState,
        baseState: We.baseState,
        baseQueue: We.baseQueue,
        queue: We.queue,
        next: null,
      }),
      Xe === null ? (Ie.memoizedState = Xe = e) : (Xe = Xe.next = e);
  }
  return Xe;
}
function Uo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Xs(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = We,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((Dr & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (a = r)) : (s = s.next = f),
          (Ie.lanes |= c),
          (Mr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (a = r) : (s.next = l),
      an(r, t.memoizedState) || (wt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ie.lanes |= o), (Mr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gs(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    an(o, t.memoizedState) || (wt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function sy() {}
function uy(e, t) {
  var n = Ie,
    r = qt(),
    i = t(),
    o = !an(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (wt = !0)),
    (r = r.queue),
    Af(dy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Xe !== null && Xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Bo(9, fy.bind(null, n, r, i, t), void 0, null),
      Ge === null)
    )
      throw Error(I(349));
    Dr & 30 || cy(n, t, i);
  }
  return i;
}
function cy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), py(t) && hy(e);
}
function dy(e, t, n) {
  return n(function () {
    py(t) && hy(e);
  });
}
function py(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function hy(e) {
  var t = Rn(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function Ep(e) {
  var t = dn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lx.bind(null, Ie, e)),
    [t.memoizedState, e]
  );
}
function Bo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function my() {
  return qt().memoizedState;
}
function rl(e, t, n, r) {
  var i = dn();
  (Ie.flags |= e),
    (i.memoizedState = Bo(1 | t, n, void 0, r === void 0 ? null : r));
}
function is(e, t, n, r) {
  var i = qt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (We !== null) {
    var a = We.memoizedState;
    if (((o = a.destroy), r !== null && _f(r, a.deps))) {
      i.memoizedState = Bo(t, n, o, r);
      return;
    }
  }
  (Ie.flags |= e), (i.memoizedState = Bo(1 | t, n, o, r));
}
function bp(e, t) {
  return rl(8390656, 8, e, t);
}
function Af(e, t) {
  return is(2048, 8, e, t);
}
function gy(e, t) {
  return is(4, 2, e, t);
}
function yy(e, t) {
  return is(4, 4, e, t);
}
function vy(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), is(4, 4, vy.bind(null, t, e), n)
  );
}
function If() {}
function xy(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _f(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ky(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _f(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sy(e, t, n) {
  return Dr & 21
    ? (an(n, t) || ((n = Tg()), (Ie.lanes |= n), (Mr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
}
function ox(e, t) {
  var n = ve;
  (ve = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qs.transition;
  Qs.transition = {};
  try {
    e(!1), t();
  } finally {
    (ve = n), (Qs.transition = r);
  }
}
function Ey() {
  return qt().memoizedState;
}
function ax(e, t, n) {
  var r = rr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    by(e))
  )
    Cy(t, n);
  else if (((n = oy(e, t, n, r)), n !== null)) {
    var i = ht();
    rn(n, e, r, i), Py(n, t, r);
  }
}
function lx(e, t, n) {
  var r = rr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (by(e)) Cy(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), an(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Cf(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = oy(e, t, i, r)),
      n !== null && ((i = ht()), rn(n, e, r, i), Py(n, t, r));
  }
}
function by(e) {
  var t = e.alternate;
  return e === Ie || (t !== null && t === Ie);
}
function Cy(e, t) {
  yo = Ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Py(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ff(e, n);
  }
}
var Nl = {
    readContext: Yt,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useInsertionEffect: ot,
    useLayoutEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useMutableSource: ot,
    useSyncExternalStore: ot,
    useId: ot,
    unstable_isNewReconciler: !1,
  },
  sx = {
    readContext: Yt,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Yt,
    useEffect: bp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        rl(4194308, 4, vy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ax.bind(null, Ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ep,
    useDebugValue: If,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = Ep(!1),
        t = e[0];
      return (e = ox.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ie,
        i = dn();
      if (Le) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Ge === null)) throw Error(I(349));
        Dr & 30 || cy(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        bp(dy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Bo(9, fy.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = Ge.identifierPrefix;
      if (Le) {
        var n = En,
          r = Sn;
        (n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = jo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = ix++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ux = {
    readContext: Yt,
    useCallback: xy,
    useContext: Yt,
    useEffect: Af,
    useImperativeHandle: wy,
    useInsertionEffect: gy,
    useLayoutEffect: yy,
    useMemo: ky,
    useReducer: Xs,
    useRef: my,
    useState: function () {
      return Xs(Uo);
    },
    useDebugValue: If,
    useDeferredValue: function (e) {
      var t = qt();
      return Sy(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = Xs(Uo)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: sy,
    useSyncExternalStore: uy,
    useId: Ey,
    unstable_isNewReconciler: !1,
  },
  cx = {
    readContext: Yt,
    useCallback: xy,
    useContext: Yt,
    useEffect: Af,
    useImperativeHandle: wy,
    useInsertionEffect: gy,
    useLayoutEffect: yy,
    useMemo: ky,
    useReducer: Gs,
    useRef: my,
    useState: function () {
      return Gs(Uo);
    },
    useDebugValue: If,
    useDeferredValue: function (e) {
      var t = qt();
      return We === null ? (t.memoizedState = e) : Sy(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = Gs(Uo)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: sy,
    useSyncExternalStore: uy,
    useId: Ey,
    unstable_isNewReconciler: !1,
  };
function Gt(e, t) {
  if (e && e.defaultProps) {
    (t = ze({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ze({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var os = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ht(),
      i = rr(e),
      o = bn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = tr(e, o, i)),
      t !== null && (rn(t, e, i, r), tl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ht(),
      i = rr(e),
      o = bn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = tr(e, o, i)),
      t !== null && (rn(t, e, i, r), tl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ht(),
      r = rr(e),
      i = bn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = tr(e, i, r)),
      t !== null && (rn(t, e, r, n), tl(t, e, r));
  },
};
function Cp(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ao(n, r) || !Ao(i, o)
        : !0
  );
}
function Ty(e, t, n) {
  var r = !1,
    i = ar,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Yt(o))
      : ((i = kt(t) ? Ir : ut.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pi(e, i) : ar)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = os),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Pp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && os.enqueueReplaceState(t, t.state, null);
}
function rc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Pf(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Yt(o))
    : ((o = kt(t) ? Ir : ut.current), (i.context = Pi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (nc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && os.enqueueReplaceState(i, i.state, null),
      Ol(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _i(e, t) {
  try {
    var n = '',
      r = t;
    do (n += F0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ic(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fx = typeof WeakMap == 'function' ? WeakMap : Map;
function Ry(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Il || ((Il = !0), (hc = r)), ic(e, t);
    }),
    n
  );
}
function Oy(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ic(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ic(e, t),
          typeof r != 'function' &&
            (nr === null ? (nr = new Set([this])) : nr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Tp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Cx.bind(null, e, t, n)), t.then(e, e));
}
function Rp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Op(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bn(-1, 1)), (t.tag = 2), tr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dx = In.ReactCurrentOwner,
  wt = !1;
function pt(e, t, n, r) {
  t.child = e === null ? iy(t, null, n, r) : Ri(t, e.child, n, r);
}
function _p(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    xi(t, i),
    (r = Lf(e, t, n, r, o, i)),
    (n = Nf()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        On(e, t, i))
      : (Le && n && wf(t), (t.flags |= 1), pt(e, t, r, i), t.child)
  );
}
function Lp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Hf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), _y(e, t, o, r, i))
      : ((e = ll(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ao), n(a, r) && e.ref === t.ref)
    )
      return On(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ir(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _y(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ao(o, r) && e.ref === t.ref)
      if (((wt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (wt = !0);
      else return (t.lanes = e.lanes), On(e, t, i);
  }
  return oc(e, t, n, r, i);
}
function Ly(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(fi, Pt),
        (Pt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ke(fi, Pt),
          (Pt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ke(fi, Pt),
        (Pt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ke(fi, Pt),
      (Pt |= r);
  return pt(e, t, i, n), t.child;
}
function Ny(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function oc(e, t, n, r, i) {
  var o = kt(n) ? Ir : ut.current;
  return (
    (o = Pi(t, o)),
    xi(t, i),
    (n = Lf(e, t, n, r, o, i)),
    (r = Nf()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        On(e, t, i))
      : (Le && r && wf(t), (t.flags |= 1), pt(e, t, n, i), t.child)
  );
}
function Np(e, t, n, r, i) {
  if (kt(n)) {
    var o = !0;
    bl(t);
  } else o = !1;
  if ((xi(t, i), t.stateNode === null))
    il(e, t), Ty(t, n, r), rc(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Yt(u))
      : ((u = kt(n) ? Ir : ut.current), (u = Pi(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Pp(t, a, r, u)),
      (Yn = !1);
    var d = t.memoizedState;
    (a.state = d),
      Ol(t, r, a, i),
      (s = t.memoizedState),
      l !== r || d !== s || xt.current || Yn
        ? (typeof c == 'function' && (nc(t, n, c, r), (s = t.memoizedState)),
          (l = Yn || Cp(t, n, l, r, d, s, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      ay(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Gt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Yt(s))
        : ((s = kt(n) ? Ir : ut.current), (s = Pi(t, s)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== s) && Pp(t, a, r, s)),
      (Yn = !1),
      (d = t.memoizedState),
      (a.state = d),
      Ol(t, r, a, i);
    var g = t.memoizedState;
    l !== f || d !== g || xt.current || Yn
      ? (typeof p == 'function' && (nc(t, n, p, r), (g = t.memoizedState)),
        (u = Yn || Cp(t, n, u, r, d, g, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, g, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, g, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ac(e, t, n, r, o, i);
}
function ac(e, t, n, r, i, o) {
  Ny(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && yp(t, n, !1), On(e, t, o);
  (r = t.stateNode), (dx.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ri(t, e.child, null, o)), (t.child = Ri(t, null, l, o)))
      : pt(e, t, l, o),
    (t.memoizedState = r.state),
    i && yp(t, n, !0),
    t.child
  );
}
function Ay(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gp(e, t.context, !1),
    Tf(e, t.containerInfo);
}
function Ap(e, t, n, r, i) {
  return Ti(), kf(i), (t.flags |= 256), pt(e, t, n, r), t.child;
}
var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
function sc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Iy(e, t, n) {
  var r = t.pendingProps,
    i = Ae.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ke(Ae, i & 1),
    e === null)
  )
    return (
      ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = ss(a, r, 0, null)),
              (e = Lr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = sc(n)),
              (t.memoizedState = lc),
              e)
            : zf(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return px(e, t, a, r, l, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ir(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = ir(l, o)) : ((o = Lr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? sc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = lc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ir(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zf(e, t) {
  return (
    (t = ss({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ia(e, t, n, r) {
  return (
    r !== null && kf(r),
    Ri(t, e.child, null, n),
    (e = zf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function px(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Js(Error(I(422)))), Ia(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ss({ mode: 'visible', children: r.children }, i, 0, null)),
          (o = Lr(o, i, a, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Ri(t, e.child, null, a),
          (t.child.memoizedState = sc(a)),
          (t.memoizedState = lc),
          o);
  if (!(t.mode & 1)) return Ia(e, t, a, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(I(419))), (r = Js(o, r, void 0)), Ia(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), wt || l)) {
    if (((r = Ge), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Rn(e, i), rn(r, e, i, -1));
    }
    return Bf(), (r = Js(Error(I(421)))), Ia(e, t, a, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Px.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Tt = er(i.nextSibling)),
      (Ot = t),
      (Le = !0),
      (en = null),
      e !== null &&
        ((jt[Ut++] = Sn),
        (jt[Ut++] = En),
        (jt[Ut++] = zr),
        (Sn = e.id),
        (En = e.overflow),
        (zr = t)),
      (t = zf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ip(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), tc(e.return, t, n);
}
function Zs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function zy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((pt(e, t, r.children, n), (r = Ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ip(e, n, t);
        else if (e.tag === 19) Ip(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ke(Ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Zs(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _l(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Zs(t, !0, n, null, o);
        break;
      case 'together':
        Zs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function On(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ir(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      (e = e.sibling), (n = n.sibling = ir(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hx(e, t, n) {
  switch (t.tag) {
    case 3:
      Ay(t), Ti();
      break;
    case 5:
      ly(t);
      break;
    case 1:
      kt(t.type) && bl(t);
      break;
    case 4:
      Tf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ke(Tl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(Ae, Ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Iy(e, t, n)
            : (ke(Ae, Ae.current & 1),
              (e = On(e, t, n)),
              e !== null ? e.sibling : null);
      ke(Ae, Ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ke(Ae, Ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ly(e, t, n);
  }
  return On(e, t, n);
}
var Dy, uc, My, Fy;
Dy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
uc = function () {};
My = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Cr(wn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = Lu(e, i)), (r = Lu(e, r)), (o = []);
        break;
      case 'select':
        (i = ze({}, i, { value: void 0 })),
          (r = ze({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Iu(e, i)), (r = Iu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Sl);
    }
    Du(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Po.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (o = o || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Po.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && Ce('scroll', e),
                    o || l === s || (o = []))
                  : (o = o || []).push(u, s));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ji(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function at(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mx(e, t, n) {
  var r = t.pendingProps;
  switch ((xf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return at(t), null;
    case 1:
      return kt(t.type) && El(), at(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Oi(),
        Te(xt),
        Te(ut),
        Of(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Na(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), en !== null && (yc(en), (en = null)))),
        uc(e, t),
        at(t),
        null
      );
    case 5:
      Rf(t);
      var i = Cr(Fo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        My(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return at(t), null;
        }
        if (((e = Cr(wn.current)), Na(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[mn] = t), (r[Do] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ce('cancel', r), Ce('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ce('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < uo.length; i++) Ce(uo[i], r);
              break;
            case 'source':
              Ce('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ce('error', r), Ce('load', r);
              break;
            case 'details':
              Ce('toggle', r);
              break;
            case 'input':
              $d(r, o), Ce('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Ce('invalid', r);
              break;
            case 'textarea':
              Wd(r, o), Ce('invalid', r);
          }
          Du(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      La(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      La(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Po.hasOwnProperty(a) &&
                  l != null &&
                  a === 'onScroll' &&
                  Ce('scroll', r);
            }
          switch (n) {
            case 'input':
              Ea(r), Vd(r, o, !0);
              break;
            case 'textarea':
              Ea(r), Yd(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Sl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = dg(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[mn] = t),
            (e[Do] = r),
            Dy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Mu(n, r)), n)) {
              case 'dialog':
                Ce('cancel', e), Ce('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ce('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < uo.length; i++) Ce(uo[i], e);
                i = r;
                break;
              case 'source':
                Ce('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ce('error', e), Ce('load', e), (i = r);
                break;
              case 'details':
                Ce('toggle', e), (i = r);
                break;
              case 'input':
                $d(e, r), (i = Lu(e, r)), Ce('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ze({}, r, { value: void 0 })),
                  Ce('invalid', e);
                break;
              case 'textarea':
                Wd(e, r), (i = Iu(e, r)), Ce('invalid', e);
                break;
              default:
                i = r;
            }
            Du(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === 'style'
                  ? mg(e, s)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && pg(e, s))
                    : o === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && To(e, s)
                        : typeof s == 'number' && To(e, '' + s)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Po.hasOwnProperty(o)
                          ? s != null && o === 'onScroll' && Ce('scroll', e)
                          : s != null && of(e, o, s, a));
              }
            switch (n) {
              case 'input':
                Ea(e), Vd(e, r, !1);
                break;
              case 'textarea':
                Ea(e), Yd(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + or(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? gi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      gi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Sl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return at(t), null;
    case 6:
      if (e && t.stateNode != null) Fy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(I(166));
        if (((n = Cr(Fo.current)), Cr(wn.current), Na(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (o = r.nodeValue !== n) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                La(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  La(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return at(t), null;
    case 13:
      if (
        (Te(Ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Le && Tt !== null && t.mode & 1 && !(t.flags & 128))
          ny(), Ti(), (t.flags |= 98560), (o = !1);
        else if (((o = Na(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(I(317));
            o[mn] = t;
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          at(t), (o = !1);
        } else en !== null && (yc(en), (en = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ae.current & 1 ? Ye === 0 && (Ye = 3) : Bf())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null);
    case 4:
      return (
        Oi(), uc(e, t), e === null && Io(t.stateNode.containerInfo), at(t), null
      );
    case 10:
      return bf(t.type._context), at(t), null;
    case 17:
      return kt(t.type) && El(), at(t), null;
    case 19:
      if ((Te(Ae), (o = t.memoizedState), o === null)) return at(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Ji(o, !1);
        else {
          if (Ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = _l(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ji(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ke(Ae, (Ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            je() > Li &&
            ((t.flags |= 128), (r = !0), Ji(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ji(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !Le)
            )
              return at(t), null;
          } else
            2 * je() - o.renderingStartTime > Li &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ji(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = je()),
          (t.sibling = null),
          (n = Ae.current),
          ke(Ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null);
    case 22:
    case 23:
      return (
        Uf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pt & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function gx(e, t) {
  switch ((xf(t), t.tag)) {
    case 1:
      return (
        kt(t.type) && El(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Oi(),
        Te(xt),
        Te(ut),
        Of(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Rf(t), null;
    case 13:
      if (
        (Te(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Te(Ae), null;
    case 4:
      return Oi(), null;
    case 10:
      return bf(t.type._context), null;
    case 22:
    case 23:
      return Uf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var za = !1,
  st = !1,
  yx = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function cc(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var zp = !1;
function vx(e, t) {
  if (((qu = wl), (e = $g()), vf(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;
            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = a),
                d === o && ++c === r && (s = a),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ku = { focusedElem: e, selectionRange: n }, wl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    b = g.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Gt(t.type, v),
                      b,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (C) {
          De(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (g = zp), (zp = !1), g;
}
function vo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && cc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function as(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function jy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[Do], delete t[Gu], delete t[ex], delete t[tx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dc(e, t, n), e = e.sibling; e !== null; ) dc(e, t, n), (e = e.sibling);
}
function pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pc(e, t, n), e = e.sibling; e !== null; ) pc(e, t, n), (e = e.sibling);
}
var tt = null,
  Jt = !1;
function Un(e, t, n) {
  for (n = n.child; n !== null; ) By(e, t, n), (n = n.sibling);
}
function By(e, t, n) {
  if (vn && typeof vn.onCommitFiberUnmount == 'function')
    try {
      vn.onCommitFiberUnmount(Jl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || ci(n, t);
    case 6:
      var r = tt,
        i = Jt;
      (tt = null),
        Un(e, t, n),
        (tt = r),
        (Jt = i),
        tt !== null &&
          (Jt
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (Jt
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ys(e.parentNode, n)
              : e.nodeType === 1 && Ys(e, n),
            Lo(e))
          : Ys(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (i = Jt),
        (tt = n.stateNode.containerInfo),
        (Jt = !0),
        Un(e, t, n),
        (tt = r),
        (Jt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && cc(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Un(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (ci(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          De(n, t, l);
        }
      Un(e, t, n);
      break;
    case 21:
      Un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), Un(e, t, n), (st = r))
        : Un(e, t, n);
      break;
    default:
      Un(e, t, n);
  }
}
function Mp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yx()),
      t.forEach(function (r) {
        var i = Tx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (tt = l.stateNode), (Jt = !1);
              break e;
            case 3:
              (tt = l.stateNode.containerInfo), (Jt = !0);
              break e;
            case 4:
              (tt = l.stateNode.containerInfo), (Jt = !0);
              break e;
          }
          l = l.return;
        }
        if (tt === null) throw Error(I(160));
        By(o, a, i), (tt = null), (Jt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        De(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hy(t, e), (t = t.sibling);
}
function Hy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), fn(e), r & 4)) {
        try {
          vo(3, e, e.return), as(3, e);
        } catch (v) {
          De(e, e.return, v);
        }
        try {
          vo(5, e, e.return);
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 1:
      Xt(t, e), fn(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (
        (Xt(t, e),
        fn(e),
        r & 512 && n !== null && ci(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          To(i, '');
        } catch (v) {
          De(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && cg(i, o),
              Mu(l, a);
            var u = Mu(l, o);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                f = s[a + 1];
              c === 'style'
                ? mg(i, f)
                : c === 'dangerouslySetInnerHTML'
                  ? pg(i, f)
                  : c === 'children'
                    ? To(i, f)
                    : of(i, c, f, u);
            }
            switch (l) {
              case 'input':
                Nu(i, o);
                break;
              case 'textarea':
                fg(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? gi(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? gi(i, !!o.multiple, o.defaultValue, !0)
                      : gi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Do] = o;
          } catch (v) {
            De(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Xt(t, e), fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Xt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lo(t.containerInfo);
        } catch (v) {
          De(e, e.return, v);
        }
      break;
    case 4:
      Xt(t, e), fn(e);
      break;
    case 13:
      Xt(t, e),
        fn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ff = je())),
        r & 4 && Mp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((st = (u = st) || c), Xt(t, e), (st = u)) : Xt(t, e),
        fn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (f = $ = c; $ !== null; ) {
              switch (((d = $), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, d, d.return);
                  break;
                case 1:
                  ci(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      De(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ci(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    jp(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), ($ = p)) : jp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = hg('display', a)));
              } catch (v) {
                De(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                De(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Xt(t, e), fn(e), r & 4 && Mp(e);
      break;
    case 21:
      break;
    default:
      Xt(t, e), fn(e);
  }
}
function fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (To(i, ''), (r.flags &= -33));
          var o = Dp(e);
          pc(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Dp(e);
          dc(e, l, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (s) {
      De(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wx(e, t, n) {
  ($ = e), $y(e);
}
function $y(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || za;
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || st;
        l = za;
        var u = st;
        if (((za = a), (st = s) && !u))
          for ($ = i; $ !== null; )
            (a = $),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Up(i)
                : s !== null
                  ? ((s.return = a), ($ = s))
                  : Up(i);
        for (; o !== null; ) ($ = o), $y(o), (o = o.sibling);
        ($ = i), (za = l), (st = u);
      }
      Fp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), ($ = o)) : Fp(e);
  }
}
function Fp(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || as(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Sp(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sp(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Lo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        st || (t.flags & 512 && fc(t));
      } catch (d) {
        De(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function jp(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Up(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            as(4, t);
          } catch (s) {
            De(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              De(t, i, s);
            }
          }
          var o = t.return;
          try {
            fc(t);
          } catch (s) {
            De(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            fc(t);
          } catch (s) {
            De(t, a, s);
          }
      }
    } catch (s) {
      De(t, t.return, s);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), ($ = l);
      break;
    }
    $ = t.return;
  }
}
var xx = Math.ceil,
  Al = In.ReactCurrentDispatcher,
  Df = In.ReactCurrentOwner,
  Vt = In.ReactCurrentBatchConfig,
  me = 0,
  Ge = null,
  Ve = null,
  nt = 0,
  Pt = 0,
  fi = fr(0),
  Ye = 0,
  Ho = null,
  Mr = 0,
  ls = 0,
  Mf = 0,
  wo = null,
  vt = null,
  Ff = 0,
  Li = 1 / 0,
  xn = null,
  Il = !1,
  hc = null,
  nr = null,
  Da = !1,
  Xn = null,
  zl = 0,
  xo = 0,
  mc = null,
  ol = -1,
  al = 0;
function ht() {
  return me & 6 ? je() : ol !== -1 ? ol : (ol = je());
}
function rr(e) {
  return e.mode & 1
    ? me & 2 && nt !== 0
      ? nt & -nt
      : rx.transition !== null
        ? (al === 0 && (al = Tg()), al)
        : ((e = ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ig(e.type))),
          e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < xo) throw ((xo = 0), (mc = null), Error(I(185)));
  Zo(e, n, r),
    (!(me & 2) || e !== Ge) &&
      (e === Ge && (!(me & 2) && (ls |= n), Ye === 4 && Kn(e, nt)),
      St(e, r),
      n === 1 && me === 0 && !(t.mode & 1) && ((Li = je() + 500), rs && dr()));
}
function St(e, t) {
  var n = e.callbackNode;
  rw(e, t);
  var r = vl(e, e === Ge ? nt : 0);
  if (r === 0)
    n !== null && Qd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qd(n), t === 1))
      e.tag === 0 ? nx(Bp.bind(null, e)) : Zg(Bp.bind(null, e)),
        Jw(function () {
          !(me & 6) && dr();
        }),
        (n = null);
    else {
      switch (Rg(r)) {
        case 1:
          n = cf;
          break;
        case 4:
          n = Cg;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = Pg;
          break;
        default:
          n = yl;
      }
      n = Gy(n, Vy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vy(e, t) {
  if (((ol = -1), (al = 0), me & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (ki() && e.callbackNode !== n) return null;
  var r = vl(e, e === Ge ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
  else {
    t = r;
    var i = me;
    me |= 2;
    var o = Yy();
    (Ge !== e || nt !== t) && ((xn = null), (Li = je() + 500), _r(e, t));
    do
      try {
        Ex();
        break;
      } catch (l) {
        Wy(e, l);
      }
    while (!0);
    Ef(),
      (Al.current = o),
      (me = i),
      Ve !== null ? (t = 0) : ((Ge = null), (nt = 0), (t = Ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hu(e)), i !== 0 && ((r = i), (t = gc(e, i)))), t === 1)
    )
      throw ((n = Ho), _r(e, 0), Kn(e, r), St(e, je()), n);
    if (t === 6) Kn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !kx(i) &&
          ((t = Dl(e, r)),
          t === 2 && ((o = Hu(e)), o !== 0 && ((r = o), (t = gc(e, o)))),
          t === 1))
      )
        throw ((n = Ho), _r(e, 0), Kn(e, r), St(e, je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          kr(e, vt, xn);
          break;
        case 3:
          if (
            (Kn(e, r), (r & 130023424) === r && ((t = Ff + 500 - je()), 10 < t))
          ) {
            if (vl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ht(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Xu(kr.bind(null, e, vt, xn), t);
            break;
          }
          kr(e, vt, xn);
          break;
        case 4:
          if ((Kn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - nn(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * xx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xu(kr.bind(null, e, vt, xn), r);
            break;
          }
          kr(e, vt, xn);
          break;
        case 5:
          kr(e, vt, xn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return St(e, je()), e.callbackNode === n ? Vy.bind(null, e) : null;
}
function gc(e, t) {
  var n = wo;
  return (
    e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256),
    (e = Dl(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && yc(t)),
    e
  );
}
function yc(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function kx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!an(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kn(e, t) {
  for (
    t &= ~Mf,
      t &= ~ls,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - nn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bp(e) {
  if (me & 6) throw Error(I(327));
  ki();
  var t = vl(e, 0);
  if (!(t & 1)) return St(e, je()), null;
  var n = Dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && ((t = r), (n = gc(e, r)));
  }
  if (n === 1) throw ((n = Ho), _r(e, 0), Kn(e, t), St(e, je()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kr(e, vt, xn),
    St(e, je()),
    null
  );
}
function jf(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    (me = n), me === 0 && ((Li = je() + 500), rs && dr());
  }
}
function Fr(e) {
  Xn !== null && Xn.tag === 0 && !(me & 6) && ki();
  var t = me;
  me |= 1;
  var n = Vt.transition,
    r = ve;
  try {
    if (((Vt.transition = null), (ve = 1), e)) return e();
  } finally {
    (ve = r), (Vt.transition = n), (me = t), !(me & 6) && dr();
  }
}
function Uf() {
  (Pt = fi.current), Te(fi);
}
function _r(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gw(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch ((xf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && El();
          break;
        case 3:
          Oi(), Te(xt), Te(ut), Of();
          break;
        case 5:
          Rf(r);
          break;
        case 4:
          Oi();
          break;
        case 13:
          Te(Ae);
          break;
        case 19:
          Te(Ae);
          break;
        case 10:
          bf(r.type._context);
          break;
        case 22:
        case 23:
          Uf();
      }
      n = n.return;
    }
  if (
    ((Ge = e),
    (Ve = e = ir(e.current, null)),
    (nt = Pt = t),
    (Ye = 0),
    (Ho = null),
    (Mf = ls = Mr = 0),
    (vt = wo = null),
    br !== null)
  ) {
    for (t = 0; t < br.length; t++)
      if (((n = br[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    br = null;
  }
  return e;
}
function Wy(e, t) {
  do {
    var n = Ve;
    try {
      if ((Ef(), (nl.current = Nl), Ll)) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ll = !1;
      }
      if (
        ((Dr = 0),
        (Xe = We = Ie = null),
        (yo = !1),
        (jo = 0),
        (Df.current = null),
        n === null || n.return === null)
      ) {
        (Ye = 1), (Ho = t), (Ve = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = nt),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Rp(a);
          if (p !== null) {
            (p.flags &= -257),
              Op(p, a, l, o, t),
              p.mode & 1 && Tp(o, u, t),
              (t = p),
              (s = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Tp(o, u, t), Bf();
              break e;
            }
            s = Error(I(426));
          }
        } else if (Le && l.mode & 1) {
          var b = Rp(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Op(b, a, l, o, t),
              kf(_i(s, l));
            break e;
          }
        }
        (o = s = _i(s, l)),
          Ye !== 4 && (Ye = 2),
          wo === null ? (wo = [o]) : wo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Ry(o, s, t);
              kp(o, h);
              break e;
            case 1:
              l = s;
              var m = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (nr === null || !nr.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Oy(o, l, t);
                kp(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ky(n);
    } catch (T) {
      (t = T), Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yy() {
  var e = Al.current;
  return (Al.current = Nl), e === null ? Nl : e;
}
function Bf() {
  (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
    Ge === null || (!(Mr & 268435455) && !(ls & 268435455)) || Kn(Ge, nt);
}
function Dl(e, t) {
  var n = me;
  me |= 2;
  var r = Yy();
  (Ge !== e || nt !== t) && ((xn = null), _r(e, t));
  do
    try {
      Sx();
      break;
    } catch (i) {
      Wy(e, i);
    }
  while (!0);
  if ((Ef(), (me = n), (Al.current = r), Ve !== null)) throw Error(I(261));
  return (Ge = null), (nt = 0), Ye;
}
function Sx() {
  for (; Ve !== null; ) qy(Ve);
}
function Ex() {
  for (; Ve !== null && !K0(); ) qy(Ve);
}
function qy(e) {
  var t = Xy(e.alternate, e, Pt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ky(e) : (Ve = t),
    (Df.current = null);
}
function Ky(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gx(n, t)), n !== null)) {
        (n.flags &= 32767), (Ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ye = 6), (Ve = null);
        return;
      }
    } else if (((n = mx(n, t, Pt)), n !== null)) {
      Ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Ye === 0 && (Ye = 5);
}
function kr(e, t, n) {
  var r = ve,
    i = Vt.transition;
  try {
    (Vt.transition = null), (ve = 1), bx(e, t, n, r);
  } finally {
    (Vt.transition = i), (ve = r);
  }
  return null;
}
function bx(e, t, n, r) {
  do ki();
  while (Xn !== null);
  if (me & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (iw(e, o),
    e === Ge && ((Ve = Ge = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Da ||
      ((Da = !0),
      Gy(yl, function () {
        return ki(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Vt.transition), (Vt.transition = null);
    var a = ve;
    ve = 1;
    var l = me;
    (me |= 4),
      (Df.current = null),
      vx(e, n),
      Hy(n, e),
      Vw(Ku),
      (wl = !!qu),
      (Ku = qu = null),
      (e.current = n),
      wx(n),
      Q0(),
      (me = l),
      (ve = a),
      (Vt.transition = o);
  } else e.current = n;
  if (
    (Da && ((Da = !1), (Xn = e), (zl = i)),
    (o = e.pendingLanes),
    o === 0 && (nr = null),
    J0(n.stateNode),
    St(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Il) throw ((Il = !1), (e = hc), (hc = null), e);
  return (
    zl & 1 && e.tag !== 0 && ki(),
    (o = e.pendingLanes),
    o & 1 ? (e === mc ? xo++ : ((xo = 0), (mc = e))) : (xo = 0),
    dr(),
    null
  );
}
function ki() {
  if (Xn !== null) {
    var e = Rg(zl),
      t = Vt.transition,
      n = ve;
    try {
      if (((Vt.transition = null), (ve = 16 > e ? 16 : e), Xn === null))
        var r = !1;
      else {
        if (((e = Xn), (Xn = null), (zl = 0), me & 6)) throw Error(I(331));
        var i = me;
        for (me |= 4, $ = e.current; $ !== null; ) {
          var o = $,
            a = o.child;
          if ($.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), ($ = f);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        p = c.return;
                      if ((jy(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), ($ = d);
                        break;
                      }
                      $ = p;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              $ = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), ($ = a);
          else
            e: for (; $ !== null; ) {
              if (((o = $), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), ($ = h);
                break e;
              }
              $ = o.return;
            }
        }
        var m = e.current;
        for ($ = m; $ !== null; ) {
          a = $;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), ($ = y);
          else
            e: for (a = m; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(9, l);
                  }
                } catch (T) {
                  De(l, l.return, T);
                }
              if (l === a) {
                $ = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), ($ = C);
                break e;
              }
              $ = l.return;
            }
        }
        if (
          ((me = i), dr(), vn && typeof vn.onPostCommitFiberRoot == 'function')
        )
          try {
            vn.onPostCommitFiberRoot(Jl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ve = n), (Vt.transition = t);
    }
  }
  return !1;
}
function Hp(e, t, n) {
  (t = _i(n, t)),
    (t = Ry(e, t, 1)),
    (e = tr(e, t, 1)),
    (t = ht()),
    e !== null && (Zo(e, 1, t), St(e, t));
}
function De(e, t, n) {
  if (e.tag === 3) Hp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (nr === null || !nr.has(r)))
        ) {
          (e = _i(n, e)),
            (e = Oy(t, e, 1)),
            (t = tr(t, e, 1)),
            (e = ht()),
            t !== null && (Zo(t, 1, e), St(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Cx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ht()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ge === e &&
      (nt & n) === n &&
      (Ye === 4 || (Ye === 3 && (nt & 130023424) === nt && 500 > je() - Ff)
        ? _r(e, 0)
        : (Mf |= n)),
    St(e, t);
}
function Qy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pa), (Pa <<= 1), !(Pa & 130023424) && (Pa = 4194304))
      : (t = 1));
  var n = ht();
  (e = Rn(e, t)), e !== null && (Zo(e, t, n), St(e, n));
}
function Px(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qy(e, n);
}
function Tx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Qy(e, n);
}
var Xy;
Xy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), hx(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else (wt = !1), Le && t.flags & 1048576 && ey(t, Pl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      il(e, t), (e = t.pendingProps);
      var i = Pi(t, ut.current);
      xi(t, n), (i = Lf(null, t, r, e, i, n));
      var o = Nf();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            kt(r) ? ((o = !0), bl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Pf(t),
            (i.updater = os),
            (t.stateNode = i),
            (i._reactInternals = t),
            rc(t, r, e, n),
            (t = ac(null, t, r, !0, o, n)))
          : ((t.tag = 0), Le && o && wf(t), pt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (il(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ox(r)),
          (e = Gt(r, e)),
          i)
        ) {
          case 0:
            t = oc(null, t, r, e, n);
            break e;
          case 1:
            t = Np(null, t, r, e, n);
            break e;
          case 11:
            t = _p(null, t, r, e, n);
            break e;
          case 14:
            t = Lp(null, t, r, Gt(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        oc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        Np(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ay(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ay(e, t),
          Ol(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = _i(Error(I(423)), t)), (t = Ap(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = _i(Error(I(424)), t)), (t = Ap(e, t, r, n, i));
            break e;
          } else
            for (
              Tt = er(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Le = !0,
                en = null,
                n = iy(t, null, r, n),
                t.child = n;
              n;
            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ti(), r === i)) {
            t = On(e, t, n);
            break e;
          }
          pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ly(t),
        e === null && ec(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Qu(r, i) ? (a = null) : o !== null && Qu(r, o) && (t.flags |= 32),
        Ny(e, t),
        pt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ec(t), null;
    case 13:
      return Iy(e, t, n);
    case 4:
      return (
        Tf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ri(t, null, r, n)) : pt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        _p(e, t, r, i, n)
      );
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ke(Tl, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (an(o.value, a)) {
            if (o.children === i.children && !xt.current) {
              t = On(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = bn(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      tc(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(I(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  tc(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        pt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xi(t, n),
        (i = Yt(i)),
        (r = r(i)),
        (t.flags |= 1),
        pt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Gt(r, t.pendingProps)),
        (i = Gt(r.type, i)),
        Lp(e, t, r, i, n)
      );
    case 15:
      return _y(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        il(e, t),
        (t.tag = 1),
        kt(r) ? ((e = !0), bl(t)) : (e = !1),
        xi(t, n),
        Ty(t, r, i),
        rc(t, r, i, n),
        ac(null, t, r, !0, e, n)
      );
    case 19:
      return zy(e, t, n);
    case 22:
      return Ly(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Gy(e, t) {
  return bg(e, t);
}
function Rx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $t(e, t, n, r) {
  return new Rx(e, t, n, r);
}
function Hf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ox(e) {
  if (typeof e == 'function') return Hf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lf)) return 11;
    if (e === sf) return 14;
  }
  return 2;
}
function ir(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ll(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Hf(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case ti:
        return Lr(n.children, i, o, t);
      case af:
        (a = 8), (i |= 8);
        break;
      case Tu:
        return (
          (e = $t(12, n, t, i | 2)), (e.elementType = Tu), (e.lanes = o), e
        );
      case Ru:
        return (e = $t(13, n, t, i)), (e.elementType = Ru), (e.lanes = o), e;
      case Ou:
        return (e = $t(19, n, t, i)), (e.elementType = Ou), (e.lanes = o), e;
      case lg:
        return ss(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case og:
              a = 10;
              break e;
            case ag:
              a = 9;
              break e;
            case lf:
              a = 11;
              break e;
            case sf:
              a = 14;
              break e;
            case Wn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $t(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lr(e, t, n, r) {
  return (e = $t(7, e, r, t)), (e.lanes = n), e;
}
function ss(e, t, n, r) {
  return (
    (e = $t(22, e, r, t)),
    (e.elementType = lg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function eu(e, t, n) {
  return (e = $t(6, e, null, t)), (e.lanes = n), e;
}
function tu(e, t, n) {
  return (
    (t = $t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _x(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zs(0)),
    (this.expirationTimes = zs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function $f(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new _x(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = $t(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pf(o),
    e
  );
}
function Lx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ei,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jy(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if (Vr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (kt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (kt(n)) return Jg(e, n, t);
  }
  return t;
}
function Zy(e, t, n, r, i, o, a, l, s) {
  return (
    (e = $f(n, r, !0, e, i, o, a, l, s)),
    (e.context = Jy(null)),
    (n = e.current),
    (r = ht()),
    (i = rr(n)),
    (o = bn(r, i)),
    (o.callback = t ?? null),
    tr(n, o, i),
    (e.current.lanes = i),
    Zo(e, i, r),
    St(e, r),
    e
  );
}
function us(e, t, n, r) {
  var i = t.current,
    o = ht(),
    a = rr(i);
  return (
    (n = Jy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tr(i, t, a)),
    e !== null && (rn(e, i, a, o), tl(e, i, a)),
    a
  );
}
function Ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $p(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vf(e, t) {
  $p(e, t), (e = e.alternate) && $p(e, t);
}
function Nx() {
  return null;
}
var ev =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wf(e) {
  this._internalRoot = e;
}
cs.prototype.render = Wf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  us(e, t, null, null);
};
cs.prototype.unmount = Wf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fr(function () {
      us(null, e, null, null);
    }),
      (t[Tn] = null);
  }
};
function cs(e) {
  this._internalRoot = e;
}
cs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++);
    qn.splice(n, 0, e), n === 0 && Ag(e);
  }
};
function Yf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Vp() {}
function Ax(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = Ml(a);
        o.call(u);
      };
    }
    var a = Zy(t, r, e, 0, null, !1, !1, '', Vp);
    return (
      (e._reactRootContainer = a),
      (e[Tn] = a.current),
      Io(e.nodeType === 8 ? e.parentNode : e),
      Fr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = Ml(s);
      l.call(u);
    };
  }
  var s = $f(e, 0, !1, null, null, !1, !1, '', Vp);
  return (
    (e._reactRootContainer = s),
    (e[Tn] = s.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    Fr(function () {
      us(t, s, n, r);
    }),
    s
  );
}
function ds(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var s = Ml(a);
        l.call(s);
      };
    }
    us(t, a, e, i);
  } else a = Ax(n, t, e, i, r);
  return Ml(a);
}
Og = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = so(t.pendingLanes);
        n !== 0 &&
          (ff(t, n | 1), St(t, je()), !(me & 6) && ((Li = je() + 500), dr()));
      }
      break;
    case 13:
      Fr(function () {
        var r = Rn(e, 1);
        if (r !== null) {
          var i = ht();
          rn(r, e, 1, i);
        }
      }),
        Vf(e, 1);
  }
};
df = function (e) {
  if (e.tag === 13) {
    var t = Rn(e, 134217728);
    if (t !== null) {
      var n = ht();
      rn(t, e, 134217728, n);
    }
    Vf(e, 134217728);
  }
};
_g = function (e) {
  if (e.tag === 13) {
    var t = rr(e),
      n = Rn(e, t);
    if (n !== null) {
      var r = ht();
      rn(n, e, t, r);
    }
    Vf(e, t);
  }
};
Lg = function () {
  return ve;
};
Ng = function (e, t) {
  var n = ve;
  try {
    return (ve = e), t();
  } finally {
    ve = n;
  }
};
ju = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Nu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ns(r);
            if (!i) throw Error(I(90));
            ug(r), Nu(r, i);
          }
        }
      }
      break;
    case 'textarea':
      fg(e, n);
      break;
    case 'select':
      (t = n.value), t != null && gi(e, !!n.multiple, t, !1);
  }
};
vg = jf;
wg = Fr;
var Ix = { usingClientEntryPoint: !1, Events: [ta, oi, ns, gg, yg, jf] },
  Zi = {
    findFiberByHostInstance: Er,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  zx = {
    bundleType: Zi.bundleType,
    version: Zi.version,
    rendererPackageName: Zi.rendererPackageName,
    rendererConfig: Zi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: In.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zi.findFiberByHostInstance || Nx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ma.isDisabled && Ma.supportsFiber)
    try {
      (Jl = Ma.inject(zx)), (vn = Ma);
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ix;
Lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yf(t)) throw Error(I(200));
  return Lx(e, t, null, n);
};
Lt.createRoot = function (e, t) {
  if (!Yf(e)) throw Error(I(299));
  var n = !1,
    r = '',
    i = ev;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = $f(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tn] = t.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    new Wf(t)
  );
};
Lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(I(188))
      : ((e = Object.keys(e).join(',')), Error(I(268, e)));
  return (e = Sg(t)), (e = e === null ? null : e.stateNode), e;
};
Lt.flushSync = function (e) {
  return Fr(e);
};
Lt.hydrate = function (e, t, n) {
  if (!fs(t)) throw Error(I(200));
  return ds(null, e, t, !0, n);
};
Lt.hydrateRoot = function (e, t, n) {
  if (!Yf(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = ev;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Zy(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Tn] = t.current),
    Io(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new cs(t);
};
Lt.render = function (e, t, n) {
  if (!fs(t)) throw Error(I(200));
  return ds(null, e, t, !1, n);
};
Lt.unmountComponentAtNode = function (e) {
  if (!fs(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Fr(function () {
        ds(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tn] = null);
        });
      }),
      !0)
    : !1;
};
Lt.unstable_batchedUpdates = jf;
Lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!fs(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return ds(e, t, n, !1, r);
};
Lt.version = '18.3.1-next-f1338f8080-20240426';
function tv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv);
    } catch (e) {
      console.error(e);
    }
}
tv(), (tg.exports = Lt);
var qf = tg.exports;
const Dx = Ql(qf),
  Mx = $m({ __proto__: null, default: Dx }, [qf]);
var Wp = qf;
(Cu.createRoot = Wp.createRoot), (Cu.hydrateRoot = Wp.hydrateRoot); /**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ne.apply(this, arguments)
  );
}
var $e;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})($e || ($e = {}));
const Yp = 'popstate';
function Fx(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location;
    return $o(
      '',
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : jr(i);
  }
  return Ux(t, n, null, e);
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ni(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jx() {
  return Math.random().toString(36).substr(2, 8);
}
function qp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function $o(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ne(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? pr(t) : t,
      { state: n, key: (t && t.key) || r || jx() },
    )
  );
}
function jr(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function pr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ux(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = $e.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Ne({}, a.state, { idx: u }), ''));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = $e.Pop;
    let b = c(),
      h = b == null ? null : b - u;
    (u = b), s && s({ action: l, location: v.location, delta: h });
  }
  function d(b, h) {
    l = $e.Push;
    let m = $o(v.location, b, h);
    u = c() + 1;
    let y = qp(m, u),
      C = v.createHref(m);
    try {
      a.pushState(y, '', C);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      i.location.assign(C);
    }
    o && s && s({ action: l, location: v.location, delta: 1 });
  }
  function p(b, h) {
    l = $e.Replace;
    let m = $o(v.location, b, h);
    u = c();
    let y = qp(m, u),
      C = v.createHref(m);
    a.replaceState(y, '', C),
      o && s && s({ action: l, location: v.location, delta: 0 });
  }
  function g(b) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      m = typeof b == 'string' ? b : jr(b);
    return (
      (m = m.replace(/ $/, '%20')),
      fe(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          m,
      ),
      new URL(m, h)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(b) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(Yp, f),
        (s = b),
        () => {
          i.removeEventListener(Yp, f), (s = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: g,
    encodeLocation(b) {
      let h = g(b);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: p,
    go(b) {
      return a.go(b);
    },
  };
  return v;
}
var _e;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(_e || (_e = {}));
const Bx = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Hx(e) {
  return e.index === !0;
}
function vc(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        l = typeof i.id == 'string' ? i.id : a.join('-');
      if (
        (fe(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route',
        ),
        fe(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Hx(i))
      ) {
        let s = Ne({}, i, t(i), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Ne({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = s), i.children && (s.children = vc(i.children, t, a, r)), s
        );
      }
    })
  );
}
function di(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? pr(t) : t,
    i = Mi(r.pathname || '/', n);
  if (i == null) return null;
  let o = nv(e);
  Vx(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let s = nk(i);
    a = Zx(o[l], s);
  }
  return a;
}
function $x(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function nv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || '' : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (fe(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Cn([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (fe(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      nv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Gx(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, a);
      else for (let s of rv(o.path)) i(o, a, s);
    }),
    t
  );
}
function rv(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let a = rv(r.join('/')),
    l = [];
  return (
    l.push(...a.map((s) => (s === '' ? o : [o, s].join('/')))),
    i && l.push(...a),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Vx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Jx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Wx = /^:[\w-]+$/,
  Yx = 3,
  qx = 2,
  Kx = 1,
  Qx = 10,
  Xx = -2,
  Kp = (e) => e === '*';
function Gx(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Kp) && (r += Xx),
    t && (r += qx),
    n
      .filter((i) => !Kp(i))
      .reduce((i, o) => i + (Wx.test(o) ? Yx : o === '' ? Kx : Qx), r)
  );
}
function Jx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Zx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = ek(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: Cn([i, c.pathname]),
      pathnameBase: ok(Cn([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (i = Cn([i, c.pathnameBase]));
  }
  return o;
}
function ek(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = tk(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: p } = c;
      if (d === '*') {
        let v = l[f] || '';
        a = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const g = l[f];
      return (
        p && !g ? (u[d] = void 0) : (u[d] = (g || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function tk(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ni(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function nk(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ni(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Mi(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function rk(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? pr(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : ik(n, t)) : t,
    search: ak(r),
    hash: lk(i),
  };
}
function ik(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function nu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Kf(e, t) {
  let n = iv(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = pr(e))
    : ((i = Ne({}, e)),
      fe(
        !i.pathname || !i.pathname.includes('?'),
        nu('?', 'pathname', 'search', i),
      ),
      fe(
        !i.pathname || !i.pathname.includes('#'),
        nu('#', 'pathname', 'hash', i),
      ),
      fe(!i.search || !i.search.includes('#'), nu('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    a = o ? '/' : i.pathname,
    l;
  if (a == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith('..')) {
      let d = a.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      i.pathname = d.join('/');
    }
    l = f >= 0 ? t[f] : '/';
  }
  let s = rk(i, l),
    u = a && a !== '/' && a.endsWith('/'),
    c = (o || a === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s;
}
const Cn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  ok = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ak = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  lk = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Xf {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Gf(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const ov = ['post', 'put', 'patch', 'delete'],
  sk = new Set(ov),
  uk = ['get', ...ov],
  ck = new Set(uk),
  fk = new Set([301, 302, 303, 307, 308]),
  dk = new Set([307, 308]),
  ru = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  pk = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  eo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Jf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hk = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  av = 'remix-router-transitions';
function mk(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  fe(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let E = e.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: E(P) });
  } else i = hk;
  let o = {},
    a = vc(e.routes, i, void 0, o),
    l,
    s = e.basename || '/',
    u = e.unstable_dataStrategy || wk,
    c = Ne(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    f = null,
    d = new Set(),
    p = null,
    g = null,
    v = null,
    b = e.hydrationData != null,
    h = di(a, e.history.location, s),
    m = null;
  if (h == null) {
    let E = Ft(404, { pathname: e.history.location.pathname }),
      { matches: P, route: _ } = ih(a);
    (h = P), (m = { [_.id]: E });
  }
  let y,
    C = h.some((E) => E.route.lazy),
    T = h.some((E) => E.route.loader);
  if (C) y = !1;
  else if (!T) y = !0;
  else if (c.v7_partialHydration) {
    let E = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null,
      _ = (F) =>
        F.route.loader
          ? typeof F.route.loader == 'function' && F.route.loader.hydrate === !0
            ? !1
            : (E && E[F.route.id] !== void 0) || (P && P[F.route.id] !== void 0)
          : !0;
    if (P) {
      let F = h.findIndex((V) => P[V.route.id] !== void 0);
      y = h.slice(0, F + 1).every(_);
    } else y = h.every(_);
  } else y = e.hydrationData != null;
  let S,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: y,
      navigation: ru,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = $e.Pop,
    M = !1,
    z,
    U = !1,
    B = new Map(),
    X = null,
    se = !1,
    ee = !1,
    Ee = [],
    we = [],
    N = new Map(),
    K = 0,
    w = -1,
    ae = new Map(),
    ue = new Set(),
    k = new Map(),
    be = new Map(),
    Fe = new Set(),
    he = new Map(),
    Ke = new Map(),
    It = !1;
  function Dn() {
    if (
      ((f = e.history.listen((E) => {
        let { action: P, location: _, delta: F } = E;
        if (It) {
          It = !1;
          return;
        }
        Ni(
          Ke.size === 0 || F != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let V = Dt({
          currentLocation: x.location,
          nextLocation: _,
          historyAction: P,
        });
        if (V && F != null) {
          (It = !0),
            e.history.go(F * -1),
            Qt(V, {
              state: 'blocked',
              location: _,
              proceed() {
                Qt(V, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(F);
              },
              reset() {
                let ne = new Map(x.blockers);
                ne.set(V, eo), ft({ blockers: ne });
              },
            });
          return;
        }
        return sn(P, _);
      })),
      n)
    ) {
      Lk(t, B);
      let E = () => Nk(t, B);
      t.addEventListener('pagehide', E),
        (X = () => t.removeEventListener('pagehide', E));
    }
    return x.initialized || sn($e.Pop, x.location, { initialHydration: !0 }), S;
  }
  function Mn() {
    f && f(),
      X && X(),
      d.clear(),
      z && z.abort(),
      x.fetchers.forEach((E, P) => le(P)),
      x.blockers.forEach((E, P) => it(P));
  }
  function qr(E) {
    return d.add(E), () => d.delete(E);
  }
  function ft(E, P) {
    P === void 0 && (P = {}), (x = Ne({}, x, E));
    let _ = [],
      F = [];
    c.v7_fetcherPersist &&
      x.fetchers.forEach((V, ne) => {
        V.state === 'idle' && (Fe.has(ne) ? F.push(ne) : _.push(ne));
      }),
      [...d].forEach((V) =>
        V(x, {
          deletedFetchers: F,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (_.forEach((V) => x.fetchers.delete(V)), F.forEach((V) => le(V)));
  }
  function gr(E, P, _) {
    var F, V;
    let { flushSync: ne } = _ === void 0 ? {} : _,
      Q =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        Zt(x.navigation.formMethod) &&
        x.navigation.state === 'loading' &&
        ((F = E.state) == null ? void 0 : F._isRedirect) !== !0,
      W;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (W = P.actionData)
        : (W = null)
      : Q
        ? (W = x.actionData)
        : (W = null);
    let oe = P.loaderData
        ? nh(x.loaderData, P.loaderData, P.matches || [], P.errors)
        : x.loaderData,
      te = x.blockers;
    te.size > 0 && ((te = new Map(te)), te.forEach((Z, Oe) => te.set(Oe, eo)));
    let Je =
      M === !0 ||
      (x.navigation.formMethod != null &&
        Zt(x.navigation.formMethod) &&
        ((V = E.state) == null ? void 0 : V._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      se ||
        L === $e.Pop ||
        (L === $e.Push
          ? e.history.push(E, E.state)
          : L === $e.Replace && e.history.replace(E, E.state));
    let Ze;
    if (L === $e.Pop) {
      let Z = B.get(x.location.pathname);
      Z && Z.has(E.pathname)
        ? (Ze = { currentLocation: x.location, nextLocation: E })
        : B.has(E.pathname) &&
          (Ze = { currentLocation: E, nextLocation: x.location });
    } else if (U) {
      let Z = B.get(x.location.pathname);
      Z
        ? Z.add(E.pathname)
        : ((Z = new Set([E.pathname])), B.set(x.location.pathname, Z)),
        (Ze = { currentLocation: x.location, nextLocation: E });
    }
    ft(
      Ne({}, P, {
        actionData: W,
        loaderData: oe,
        historyAction: L,
        location: E,
        initialized: !0,
        navigation: ru,
        revalidation: 'idle',
        restoreScrollPosition: Id(E, P.matches || x.matches),
        preventScrollReset: Je,
        blockers: te,
      }),
      { viewTransitionOpts: Ze, flushSync: ne === !0 },
    ),
      (L = $e.Pop),
      (M = !1),
      (U = !1),
      (se = !1),
      (ee = !1),
      (Ee = []),
      (we = []);
  }
  async function da(E, P) {
    if (typeof E == 'number') {
      e.history.go(E);
      return;
    }
    let _ = wc(
        x.location,
        x.matches,
        s,
        c.v7_prependBasename,
        E,
        c.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative,
      ),
      {
        path: F,
        submission: V,
        error: ne,
      } = Qp(c.v7_normalizeFormMethod, !1, _, P),
      Q = x.location,
      W = $o(x.location, F, P && P.state);
    W = Ne({}, W, e.history.encodeLocation(W));
    let oe = P && P.replace != null ? P.replace : void 0,
      te = $e.Push;
    oe === !0
      ? (te = $e.Replace)
      : oe === !1 ||
        (V != null &&
          Zt(V.formMethod) &&
          V.formAction === x.location.pathname + x.location.search &&
          (te = $e.Replace));
    let Je =
        P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0,
      Ze = (P && P.unstable_flushSync) === !0,
      Z = Dt({ currentLocation: Q, nextLocation: W, historyAction: te });
    if (Z) {
      Qt(Z, {
        state: 'blocked',
        location: W,
        proceed() {
          Qt(Z, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: W,
          }),
            da(E, P);
        },
        reset() {
          let Oe = new Map(x.blockers);
          Oe.set(Z, eo), ft({ blockers: Oe });
        },
      });
      return;
    }
    return await sn(te, W, {
      submission: V,
      pendingError: ne,
      preventScrollReset: Je,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: Ze,
    });
  }
  function pa() {
    if (
      ($i(),
      ft({ revalidation: 'loading' }),
      x.navigation.state !== 'submitting')
    ) {
      if (x.navigation.state === 'idle') {
        sn(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      sn(L || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation,
      });
    }
  }
  async function sn(E, P, _) {
    z && z.abort(),
      (z = null),
      (L = E),
      (se = (_ && _.startUninterruptedRevalidation) === !0),
      o0(x.location, x.matches),
      (M = (_ && _.preventScrollReset) === !0),
      (U = (_ && _.enableViewTransition) === !0);
    let F = l || a,
      V = _ && _.overrideNavigation,
      ne = di(F, P, s),
      Q = (_ && _.flushSync) === !0;
    if (!ne) {
      let Z = Ft(404, { pathname: P.pathname }),
        { matches: Oe, route: Qe } = ih(F);
      Rs(),
        gr(
          P,
          { matches: Oe, loaderData: {}, errors: { [Qe.id]: Z } },
          { flushSync: Q },
        );
      return;
    }
    if (
      x.initialized &&
      !ee &&
      Ck(x.location, P) &&
      !(_ && _.submission && Zt(_.submission.formMethod))
    ) {
      gr(P, { matches: ne }, { flushSync: Q });
      return;
    }
    z = new AbortController();
    let W = Jr(e.history, P, z.signal, _ && _.submission),
      oe;
    if (_ && _.pendingError)
      oe = [ko(ne).route.id, { type: _e.error, error: _.pendingError }];
    else if (_ && _.submission && Zt(_.submission.formMethod)) {
      let Z = await ha(W, P, _.submission, ne, {
        replace: _.replace,
        flushSync: Q,
      });
      if (Z.shortCircuited) return;
      (oe = Z.pendingActionResult),
        (V = iu(P, _.submission)),
        (Q = !1),
        (W = Jr(e.history, W.url, W.signal));
    }
    let {
      shortCircuited: te,
      loaderData: Je,
      errors: Ze,
    } = await Ps(
      W,
      P,
      ne,
      V,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      Q,
      oe,
    );
    te ||
      ((z = null),
      gr(P, Ne({ matches: ne }, rh(oe), { loaderData: Je, errors: Ze })));
  }
  async function ha(E, P, _, F, V) {
    V === void 0 && (V = {}), $i();
    let ne = Ok(P, _);
    ft({ navigation: ne }, { flushSync: V.flushSync === !0 });
    let Q,
      W = kc(F, P);
    if (!W.route.action && !W.route.lazy)
      Q = {
        type: _e.error,
        error: Ft(405, {
          method: E.method,
          pathname: P.pathname,
          routeId: W.route.id,
        }),
      };
    else if (((Q = (await vr('action', E, [W], F))[0]), E.signal.aborted))
      return { shortCircuited: !0 };
    if (Tr(Q)) {
      let oe;
      return (
        V && V.replace != null
          ? (oe = V.replace)
          : (oe =
              Zp(Q.response.headers.get('Location'), new URL(E.url), s) ===
              x.location.pathname + x.location.search),
        await yr(E, Q, { submission: _, replace: oe }),
        { shortCircuited: !0 }
      );
    }
    if (Pr(Q)) throw Ft(400, { type: 'defer-action' });
    if (Bt(Q)) {
      let oe = ko(F, W.route.id);
      return (
        (V && V.replace) !== !0 && (L = $e.Push),
        { pendingActionResult: [oe.route.id, Q] }
      );
    }
    return { pendingActionResult: [W.route.id, Q] };
  }
  async function Ps(E, P, _, F, V, ne, Q, W, oe, te) {
    let Je = F || iu(P, V),
      Ze = V || ne || lh(Je),
      Z = l || a,
      [Oe, Qe] = Xp(
        e.history,
        x,
        _,
        Ze,
        P,
        c.v7_partialHydration && W === !0,
        c.unstable_skipActionErrorRevalidation,
        ee,
        Ee,
        we,
        Fe,
        k,
        ue,
        Z,
        s,
        te,
      );
    if (
      (Rs(
        (pe) =>
          !(_ && _.some((dt) => dt.route.id === pe)) ||
          (Oe && Oe.some((dt) => dt.route.id === pe)),
      ),
      (w = ++K),
      Oe.length === 0 && Qe.length === 0)
    ) {
      let pe = zt();
      return (
        gr(
          P,
          Ne(
            {
              matches: _,
              loaderData: {},
              errors: te && Bt(te[1]) ? { [te[0]]: te[1].error } : null,
            },
            rh(te),
            pe ? { fetchers: new Map(x.fetchers) } : {},
          ),
          { flushSync: oe },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!se && (!c.v7_partialHydration || !W)) {
      Qe.forEach((dt) => {
        let Mt = x.fetchers.get(dt.key),
          et = to(void 0, Mt ? Mt.data : void 0);
        x.fetchers.set(dt.key, et);
      });
      let pe;
      te && !Bt(te[1])
        ? (pe = { [te[0]]: te[1].data })
        : x.actionData &&
          (Object.keys(x.actionData).length === 0
            ? (pe = null)
            : (pe = x.actionData)),
        ft(
          Ne(
            { navigation: Je },
            pe !== void 0 ? { actionData: pe } : {},
            Qe.length > 0 ? { fetchers: new Map(x.fetchers) } : {},
          ),
          { flushSync: oe },
        );
    }
    Qe.forEach((pe) => {
      N.has(pe.key) && Be(pe.key),
        pe.controller && N.set(pe.key, pe.controller);
    });
    let Vi = () => Qe.forEach((pe) => Be(pe.key));
    z && z.signal.addEventListener('abort', Vi);
    let { loaderResults: jn, fetcherResults: Kr } = await ya(
      x.matches,
      _,
      Oe,
      Qe,
      E,
    );
    if (E.signal.aborted) return { shortCircuited: !0 };
    z && z.signal.removeEventListener('abort', Vi),
      Qe.forEach((pe) => N.delete(pe.key));
    let Qr = oh([...jn, ...Kr]);
    if (Qr) {
      if (Qr.idx >= Oe.length) {
        let pe = Qe[Qr.idx - Oe.length].key;
        ue.add(pe);
      }
      return await yr(E, Qr.result, { replace: Q }), { shortCircuited: !0 };
    }
    let { loaderData: Xr, errors: cn } = th(x, _, Oe, jn, te, Qe, Kr, he);
    he.forEach((pe, dt) => {
      pe.subscribe((Mt) => {
        (Mt || pe.done) && he.delete(dt);
      });
    }),
      c.v7_partialHydration &&
        W &&
        x.errors &&
        Object.entries(x.errors)
          .filter((pe) => {
            let [dt] = pe;
            return !Oe.some((Mt) => Mt.route.id === dt);
          })
          .forEach((pe) => {
            let [dt, Mt] = pe;
            cn = Object.assign(cn || {}, { [dt]: Mt });
          });
    let va = zt(),
      wa = Fn(w),
      xa = va || wa || Qe.length > 0;
    return Ne(
      { loaderData: Xr, errors: cn },
      xa ? { fetchers: new Map(x.fetchers) } : {},
    );
  }
  function ma(E, P, _, F) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    N.has(E) && Be(E);
    let V = (F && F.unstable_flushSync) === !0,
      ne = l || a,
      Q = wc(
        x.location,
        x.matches,
        s,
        c.v7_prependBasename,
        _,
        c.v7_relativeSplatPath,
        P,
        F == null ? void 0 : F.relative,
      ),
      W = di(ne, Q, s);
    if (!W) {
      j(E, P, Ft(404, { pathname: Q }), { flushSync: V });
      return;
    }
    let {
      path: oe,
      submission: te,
      error: Je,
    } = Qp(c.v7_normalizeFormMethod, !0, Q, F);
    if (Je) {
      j(E, P, Je, { flushSync: V });
      return;
    }
    let Ze = kc(W, oe);
    if (((M = (F && F.preventScrollReset) === !0), te && Zt(te.formMethod))) {
      ga(E, P, oe, Ze, W, V, te);
      return;
    }
    k.set(E, { routeId: P, path: oe }), Ts(E, P, oe, Ze, W, V, te);
  }
  async function ga(E, P, _, F, V, ne, Q) {
    if (($i(), k.delete(E), !F.route.action && !F.route.lazy)) {
      let et = Ft(405, { method: Q.formMethod, pathname: _, routeId: P });
      j(E, P, et, { flushSync: ne });
      return;
    }
    let W = x.fetchers.get(E);
    O(E, _k(Q, W), { flushSync: ne });
    let oe = new AbortController(),
      te = Jr(e.history, _, oe.signal, Q);
    N.set(E, oe);
    let Je = K,
      Z = (await vr('action', te, [F], V))[0];
    if (te.signal.aborted) {
      N.get(E) === oe && N.delete(E);
      return;
    }
    if (c.v7_fetcherPersist && Fe.has(E)) {
      if (Tr(Z) || Bt(Z)) {
        O(E, Vn(void 0));
        return;
      }
    } else {
      if (Tr(Z))
        if ((N.delete(E), w > Je)) {
          O(E, Vn(void 0));
          return;
        } else
          return ue.add(E), O(E, to(Q)), yr(te, Z, { fetcherSubmission: Q });
      if (Bt(Z)) {
        j(E, P, Z.error);
        return;
      }
    }
    if (Pr(Z)) throw Ft(400, { type: 'defer-action' });
    let Oe = x.navigation.location || x.location,
      Qe = Jr(e.history, Oe, oe.signal),
      Vi = l || a,
      jn =
        x.navigation.state !== 'idle'
          ? di(Vi, x.navigation.location, s)
          : x.matches;
    fe(jn, "Didn't find any matches after fetcher action");
    let Kr = ++K;
    ae.set(E, Kr);
    let Qr = to(Q, Z.data);
    x.fetchers.set(E, Qr);
    let [Xr, cn] = Xp(
      e.history,
      x,
      jn,
      Q,
      Oe,
      !1,
      c.unstable_skipActionErrorRevalidation,
      ee,
      Ee,
      we,
      Fe,
      k,
      ue,
      Vi,
      s,
      [F.route.id, Z],
    );
    cn
      .filter((et) => et.key !== E)
      .forEach((et) => {
        let Wi = et.key,
          zd = x.fetchers.get(Wi),
          l0 = to(void 0, zd ? zd.data : void 0);
        x.fetchers.set(Wi, l0),
          N.has(Wi) && Be(Wi),
          et.controller && N.set(Wi, et.controller);
      }),
      ft({ fetchers: new Map(x.fetchers) });
    let va = () => cn.forEach((et) => Be(et.key));
    oe.signal.addEventListener('abort', va);
    let { loaderResults: wa, fetcherResults: xa } = await ya(
      x.matches,
      jn,
      Xr,
      cn,
      Qe,
    );
    if (oe.signal.aborted) return;
    oe.signal.removeEventListener('abort', va),
      ae.delete(E),
      N.delete(E),
      cn.forEach((et) => N.delete(et.key));
    let pe = oh([...wa, ...xa]);
    if (pe) {
      if (pe.idx >= Xr.length) {
        let et = cn[pe.idx - Xr.length].key;
        ue.add(et);
      }
      return yr(Qe, pe.result);
    }
    let { loaderData: dt, errors: Mt } = th(
      x,
      x.matches,
      Xr,
      wa,
      void 0,
      cn,
      xa,
      he,
    );
    if (x.fetchers.has(E)) {
      let et = Vn(Z.data);
      x.fetchers.set(E, et);
    }
    Fn(Kr),
      x.navigation.state === 'loading' && Kr > w
        ? (fe(L, 'Expected pending action'),
          z && z.abort(),
          gr(x.navigation.location, {
            matches: jn,
            loaderData: dt,
            errors: Mt,
            fetchers: new Map(x.fetchers),
          }))
        : (ft({
            errors: Mt,
            loaderData: nh(x.loaderData, dt, jn, Mt),
            fetchers: new Map(x.fetchers),
          }),
          (ee = !1));
  }
  async function Ts(E, P, _, F, V, ne, Q) {
    let W = x.fetchers.get(E);
    O(E, to(Q, W ? W.data : void 0), { flushSync: ne });
    let oe = new AbortController(),
      te = Jr(e.history, _, oe.signal);
    N.set(E, oe);
    let Je = K,
      Z = (await vr('loader', te, [F], V))[0];
    if (
      (Pr(Z) && (Z = (await cv(Z, te.signal, !0)) || Z),
      N.get(E) === oe && N.delete(E),
      !te.signal.aborted)
    ) {
      if (Fe.has(E)) {
        O(E, Vn(void 0));
        return;
      }
      if (Tr(Z))
        if (w > Je) {
          O(E, Vn(void 0));
          return;
        } else {
          ue.add(E), await yr(te, Z);
          return;
        }
      if (Bt(Z)) {
        j(E, P, Z.error);
        return;
      }
      fe(!Pr(Z), 'Unhandled fetcher deferred data'), O(E, Vn(Z.data));
    }
  }
  async function yr(E, P, _) {
    let {
      submission: F,
      fetcherSubmission: V,
      replace: ne,
    } = _ === void 0 ? {} : _;
    P.response.headers.has('X-Remix-Revalidate') && (ee = !0);
    let Q = P.response.headers.get('Location');
    fe(Q, 'Expected a Location header on the redirect Response'),
      (Q = Zp(Q, new URL(E.url), s));
    let W = $o(x.location, Q, { _isRedirect: !0 });
    if (n) {
      let Oe = !1;
      if (P.response.headers.has('X-Remix-Reload-Document')) Oe = !0;
      else if (Jf.test(Q)) {
        const Qe = e.history.createURL(Q);
        Oe = Qe.origin !== t.location.origin || Mi(Qe.pathname, s) == null;
      }
      if (Oe) {
        ne ? t.location.replace(Q) : t.location.assign(Q);
        return;
      }
    }
    z = null;
    let oe = ne === !0 ? $e.Replace : $e.Push,
      { formMethod: te, formAction: Je, formEncType: Ze } = x.navigation;
    !F && !V && te && Je && Ze && (F = lh(x.navigation));
    let Z = F || V;
    if (dk.has(P.response.status) && Z && Zt(Z.formMethod))
      await sn(oe, W, {
        submission: Ne({}, Z, { formAction: Q }),
        preventScrollReset: M,
      });
    else {
      let Oe = iu(W, F);
      await sn(oe, W, {
        overrideNavigation: Oe,
        fetcherSubmission: V,
        preventScrollReset: M,
      });
    }
  }
  async function vr(E, P, _, F) {
    try {
      let V = await xk(u, E, P, _, F, o, i);
      return await Promise.all(
        V.map((ne, Q) => {
          if (Pk(ne)) {
            let W = ne.result;
            return {
              type: _e.redirect,
              response: Ek(W, P, _[Q].route.id, F, s, c.v7_relativeSplatPath),
            };
          }
          return Sk(ne);
        }),
      );
    } catch (V) {
      return _.map(() => ({ type: _e.error, error: V }));
    }
  }
  async function ya(E, P, _, F, V) {
    let [ne, ...Q] = await Promise.all([
      _.length ? vr('loader', V, _, P) : [],
      ...F.map((W) => {
        if (W.matches && W.match && W.controller) {
          let oe = Jr(e.history, W.path, W.controller.signal);
          return vr('loader', oe, [W.match], W.matches).then((te) => te[0]);
        } else
          return Promise.resolve({
            type: _e.error,
            error: Ft(404, { pathname: W.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        ah(
          E,
          _,
          ne,
          ne.map(() => V.signal),
          !1,
          x.loaderData,
        ),
        ah(
          E,
          F.map((W) => W.match),
          Q,
          F.map((W) => (W.controller ? W.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: ne, fetcherResults: Q }
    );
  }
  function $i() {
    (ee = !0),
      Ee.push(...Rs()),
      k.forEach((E, P) => {
        N.has(P) && (we.push(P), Be(P));
      });
  }
  function O(E, P, _) {
    _ === void 0 && (_ = {}),
      x.fetchers.set(E, P),
      ft(
        { fetchers: new Map(x.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function j(E, P, _, F) {
    F === void 0 && (F = {});
    let V = ko(x.matches, P);
    le(E),
      ft(
        { errors: { [V.route.id]: _ }, fetchers: new Map(x.fetchers) },
        { flushSync: (F && F.flushSync) === !0 },
      );
  }
  function J(E) {
    return (
      c.v7_fetcherPersist &&
        (be.set(E, (be.get(E) || 0) + 1), Fe.has(E) && Fe.delete(E)),
      x.fetchers.get(E) || pk
    );
  }
  function le(E) {
    let P = x.fetchers.get(E);
    N.has(E) && !(P && P.state === 'loading' && ae.has(E)) && Be(E),
      k.delete(E),
      ae.delete(E),
      ue.delete(E),
      Fe.delete(E),
      x.fetchers.delete(E);
  }
  function ye(E) {
    if (c.v7_fetcherPersist) {
      let P = (be.get(E) || 0) - 1;
      P <= 0 ? (be.delete(E), Fe.add(E)) : be.set(E, P);
    } else le(E);
    ft({ fetchers: new Map(x.fetchers) });
  }
  function Be(E) {
    let P = N.get(E);
    fe(P, 'Expected fetch controller: ' + E), P.abort(), N.delete(E);
  }
  function un(E) {
    for (let P of E) {
      let _ = J(P),
        F = Vn(_.data);
      x.fetchers.set(P, F);
    }
  }
  function zt() {
    let E = [],
      P = !1;
    for (let _ of ue) {
      let F = x.fetchers.get(_);
      fe(F, 'Expected fetcher: ' + _),
        F.state === 'loading' && (ue.delete(_), E.push(_), (P = !0));
    }
    return un(E), P;
  }
  function Fn(E) {
    let P = [];
    for (let [_, F] of ae)
      if (F < E) {
        let V = x.fetchers.get(_);
        fe(V, 'Expected fetcher: ' + _),
          V.state === 'loading' && (Be(_), ae.delete(_), P.push(_));
      }
    return un(P), P.length > 0;
  }
  function wr(E, P) {
    let _ = x.blockers.get(E) || eo;
    return Ke.get(E) !== P && Ke.set(E, P), _;
  }
  function it(E) {
    x.blockers.delete(E), Ke.delete(E);
  }
  function Qt(E, P) {
    let _ = x.blockers.get(E) || eo;
    fe(
      (_.state === 'unblocked' && P.state === 'blocked') ||
        (_.state === 'blocked' && P.state === 'blocked') ||
        (_.state === 'blocked' && P.state === 'proceeding') ||
        (_.state === 'blocked' && P.state === 'unblocked') ||
        (_.state === 'proceeding' && P.state === 'unblocked'),
      'Invalid blocker state transition: ' + _.state + ' -> ' + P.state,
    );
    let F = new Map(x.blockers);
    F.set(E, P), ft({ blockers: F });
  }
  function Dt(E) {
    let { currentLocation: P, nextLocation: _, historyAction: F } = E;
    if (Ke.size === 0) return;
    Ke.size > 1 && Ni(!1, 'A router only supports one blocker at a time');
    let V = Array.from(Ke.entries()),
      [ne, Q] = V[V.length - 1],
      W = x.blockers.get(ne);
    if (
      !(W && W.state === 'proceeding') &&
      Q({ currentLocation: P, nextLocation: _, historyAction: F })
    )
      return ne;
  }
  function Rs(E) {
    let P = [];
    return (
      he.forEach((_, F) => {
        (!E || E(F)) && (_.cancel(), P.push(F), he.delete(F));
      }),
      P
    );
  }
  function i0(E, P, _) {
    if (((p = E), (v = P), (g = _ || null), !b && x.navigation === ru)) {
      b = !0;
      let F = Id(x.location, x.matches);
      F != null && ft({ restoreScrollPosition: F });
    }
    return () => {
      (p = null), (v = null), (g = null);
    };
  }
  function Ad(E, P) {
    return (
      (g &&
        g(
          E,
          P.map((F) => $x(F, x.loaderData)),
        )) ||
      E.key
    );
  }
  function o0(E, P) {
    if (p && v) {
      let _ = Ad(E, P);
      p[_] = v();
    }
  }
  function Id(E, P) {
    if (p) {
      let _ = Ad(E, P),
        F = p[_];
      if (typeof F == 'number') return F;
    }
    return null;
  }
  function a0(E) {
    (o = {}), (l = vc(E, i, void 0, o));
  }
  return (
    (S = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return x;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Dn,
      subscribe: qr,
      enableScrollRestoration: i0,
      navigate: da,
      fetch: ma,
      revalidate: pa,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: J,
      deleteFetcher: ye,
      dispose: Mn,
      getBlocker: wr,
      deleteBlocker: it,
      _internalFetchControllers: N,
      _internalActiveDeferreds: he,
      _internalSetRoutes: a0,
    }),
    S
  );
}
function gk(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function wc(e, t, n, r, i, o, a, l) {
  let s, u;
  if (a) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === a)) {
        u = f;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = Qf(i || '.', Kf(s, o), Mi(e.pathname, n) || e.pathname, l === 'path');
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !Zf(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (c.pathname = c.pathname === '/' ? n : Cn([n, c.pathname])),
    jr(c)
  );
}
function Qp(e, t, n, r) {
  if (!r || !gk(r)) return { path: n };
  if (r.formMethod && !Rk(r.formMethod))
    return { path: n, error: Ft(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Ft(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    a = e ? o.toUpperCase() : o.toLowerCase(),
    l = sv(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!Zt(a)) return i();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((p, g) => {
                let [v, b] = g;
                return (
                  '' +
                  p +
                  v +
                  '=' +
                  b +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!Zt(a)) return i();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  fe(
    typeof FormData == 'function',
    'FormData is not available in this environment',
  );
  let s, u;
  if (r.formData) (s = xc(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = xc(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = eh(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = eh(s));
    } catch {
      return i();
    }
  let c = {
    formMethod: a,
    formAction: l,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Zt(c.formMethod)) return { path: n, submission: c };
  let f = pr(n);
  return (
    t && f.search && Zf(f.search) && s.append('index', ''),
    (f.search = '?' + s),
    { path: jr(f), submission: c }
  );
}
function yk(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Xp(e, t, n, r, i, o, a, l, s, u, c, f, d, p, g, v) {
  let b = v ? (Bt(v[1]) ? v[1].error : v[1].data) : void 0,
    h = e.createURL(t.location),
    m = e.createURL(i),
    y = v && Bt(v[1]) ? v[0] : void 0,
    C = y ? yk(n, y) : n,
    T = v ? v[1].statusCode : void 0,
    S = a && T && T >= 400,
    x = C.filter((M, z) => {
      let { route: U } = M;
      if (U.lazy) return !0;
      if (U.loader == null) return !1;
      if (o)
        return typeof U.loader != 'function' || U.loader.hydrate
          ? !0
          : t.loaderData[U.id] === void 0 &&
              (!t.errors || t.errors[U.id] === void 0);
      if (
        vk(t.loaderData, t.matches[z], M) ||
        s.some((se) => se === M.route.id)
      )
        return !0;
      let B = t.matches[z],
        X = M;
      return Gp(
        M,
        Ne(
          {
            currentUrl: h,
            currentParams: B.params,
            nextUrl: m,
            nextParams: X.params,
          },
          r,
          {
            actionResult: b,
            unstable_actionStatus: T,
            defaultShouldRevalidate: S
              ? !1
              : l ||
                h.pathname + h.search === m.pathname + m.search ||
                h.search !== m.search ||
                lv(B, X),
          },
        ),
      );
    }),
    L = [];
  return (
    f.forEach((M, z) => {
      if (o || !n.some((ee) => ee.route.id === M.routeId) || c.has(z)) return;
      let U = di(p, M.path, g);
      if (!U) {
        L.push({
          key: z,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let B = t.fetchers.get(z),
        X = kc(U, M.path),
        se = !1;
      d.has(z)
        ? (se = !1)
        : u.includes(z)
          ? (se = !0)
          : B && B.state !== 'idle' && B.data === void 0
            ? (se = l)
            : (se = Gp(
                X,
                Ne(
                  {
                    currentUrl: h,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: m,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: b,
                    unstable_actionStatus: T,
                    defaultShouldRevalidate: S ? !1 : l,
                  },
                ),
              )),
        se &&
          L.push({
            key: z,
            routeId: M.routeId,
            path: M.path,
            matches: U,
            match: X,
            controller: new AbortController(),
          });
    }),
    [x, L]
  );
}
function vk(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function lv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Gp(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Jp(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  fe(i, 'No route found in manifest');
  let o = {};
  for (let a in r) {
    let s = i[a] !== void 0 && a !== 'hasErrorBoundary';
    Ni(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !s && !Bx.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Ne({}, t(i), { lazy: void 0 }));
}
function wk(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function xk(e, t, n, r, i, o, a, l) {
  let s = r.reduce((f, d) => f.add(d.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: i.map((f) => {
        let d = s.has(f.route.id);
        return Ne({}, f, {
          shouldLoad: d,
          resolve: (g) => (
            u.add(f.route.id),
            d
              ? kk(t, n, f, o, a, g, l)
              : Promise.resolve({ type: _e.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: l,
    });
  return (
    i.forEach((f) =>
      fe(
        u.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    c.filter((f, d) => s.has(i[d].route.id))
  );
}
async function kk(e, t, n, r, i, o, a) {
  let l,
    s,
    u = (c) => {
      let f,
        d = new Promise((v, b) => (f = b));
      (s = () => f()), t.signal.addEventListener('abort', s);
      let p = (v) =>
          typeof c != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']'),
                ),
              )
            : c(
                { request: t, params: n.params, context: a },
                ...(v !== void 0 ? [v] : []),
              ),
        g;
      return (
        o
          ? (g = o((v) => p(v)))
          : (g = (async () => {
              try {
                return { type: 'data', result: await p() };
              } catch (v) {
                return { type: 'error', result: v };
              }
            })()),
        Promise.race([g, d])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let f,
          [d] = await Promise.all([
            u(c).catch((p) => {
              f = p;
            }),
            Jp(n.route, i, r),
          ]);
        if (f !== void 0) throw f;
        l = d;
      } else if ((await Jp(n.route, i, r), (c = n.route[e]), c)) l = await u(c);
      else if (e === 'action') {
        let f = new URL(t.url),
          d = f.pathname + f.search;
        throw Ft(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: _e.data, result: void 0 };
    else if (c) l = await u(c);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw Ft(404, { pathname: d });
    }
    fe(
      l.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (c) {
    return { type: _e.error, result: c };
  } finally {
    s && t.signal.removeEventListener('abort', s);
  }
  return l;
}
async function Sk(e) {
  let { result: t, type: n, status: r } = e;
  if (uv(t)) {
    let a;
    try {
      let l = t.headers.get('Content-Type');
      l && /\bapplication\/json\b/.test(l)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (l) {
      return { type: _e.error, error: l };
    }
    return n === _e.error
      ? {
          type: _e.error,
          error: new Xf(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: _e.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (n === _e.error)
    return { type: _e.error, error: t, statusCode: Gf(t) ? t.status : r };
  if (Tk(t)) {
    var i, o;
    return {
      type: _e.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: _e.data, data: t, statusCode: r };
}
function Ek(e, t, n, r, i, o) {
  let a = e.headers.get('Location');
  if (
    (fe(
      a,
      'Redirects returned/thrown from loaders/actions must have a Location header',
    ),
    !Jf.test(a))
  ) {
    let l = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (a = wc(new URL(t.url), l, i, !0, a, o)), e.headers.set('Location', a);
  }
  return e;
}
function Zp(e, t, n) {
  if (Jf.test(e)) {
    let r = e,
      i = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      o = Mi(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Jr(e, t, n, r) {
  let i = e.createURL(sv(t)).toString(),
    o = { signal: n };
  if (r && Zt(r.formMethod)) {
    let { formMethod: a, formEncType: l } = r;
    (o.method = a.toUpperCase()),
      l === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': l })),
          (o.body = JSON.stringify(r.json)))
        : l === 'text/plain'
          ? (o.body = r.text)
          : l === 'application/x-www-form-urlencoded' && r.formData
            ? (o.body = xc(r.formData))
            : (o.body = r.formData);
  }
  return new Request(i, o);
}
function xc(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function eh(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function bk(e, t, n, r, i, o) {
  let a = {},
    l = null,
    s,
    u = !1,
    c = {},
    f = r && Bt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((d, p) => {
      let g = t[p].route.id;
      if (
        (fe(!Tr(d), 'Cannot handle redirect results in processLoaderData'),
        Bt(d))
      ) {
        let v = d.error;
        f !== void 0 && ((v = f), (f = void 0)), (l = l || {});
        {
          let b = ko(e, g);
          l[b.route.id] == null && (l[b.route.id] = v);
        }
        (a[g] = void 0),
          u || ((u = !0), (s = Gf(d.error) ? d.error.status : 500)),
          d.headers && (c[g] = d.headers);
      } else
        Pr(d)
          ? (i.set(g, d.deferredData),
            (a[g] = d.deferredData.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !u &&
              (s = d.statusCode),
            d.headers && (c[g] = d.headers))
          : ((a[g] = d.data),
            d.statusCode && d.statusCode !== 200 && !u && (s = d.statusCode),
            d.headers && (c[g] = d.headers));
    }),
    f !== void 0 && r && ((l = { [r[0]]: f }), (a[r[0]] = void 0)),
    { loaderData: a, errors: l, statusCode: s || 200, loaderHeaders: c }
  );
}
function th(e, t, n, r, i, o, a, l) {
  let { loaderData: s, errors: u } = bk(t, n, r, i, l);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: d, controller: p } = o[c];
    fe(
      a !== void 0 && a[c] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let g = a[c];
    if (!(p && p.signal.aborted))
      if (Bt(g)) {
        let v = ko(e.matches, d == null ? void 0 : d.route.id);
        (u && u[v.route.id]) || (u = Ne({}, u, { [v.route.id]: g.error })),
          e.fetchers.delete(f);
      } else if (Tr(g)) fe(!1, 'Unhandled fetcher revalidation redirect');
      else if (Pr(g)) fe(!1, 'Unhandled fetcher deferred data');
      else {
        let v = Vn(g.data);
        e.fetchers.set(f, v);
      }
  }
  return { loaderData: s, errors: u };
}
function nh(e, t, n, r) {
  let i = Ne({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function rh(e) {
  return e
    ? Bt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ko(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function ih(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ft(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i && n && r
          ? (l =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
            ? (l = 'defer() is not supported in actions')
            : o === 'invalid-body' && (l = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'),
          (l = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            i && n && r
              ? (l =
                  'You made a ' +
                  i.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Xf(e || 500, a, new Error(l), !0)
  );
}
function oh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Tr(n)) return { result: n, idx: t };
  }
}
function sv(e) {
  let t = typeof e == 'string' ? pr(e) : e;
  return jr(Ne({}, t, { hash: '' }));
}
function Ck(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Pk(e) {
  return uv(e.result) && fk.has(e.result.status);
}
function Pr(e) {
  return e.type === _e.deferred;
}
function Bt(e) {
  return e.type === _e.error;
}
function Tr(e) {
  return (e && e.type) === _e.redirect;
}
function Tk(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function uv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Rk(e) {
  return ck.has(e.toLowerCase());
}
function Zt(e) {
  return sk.has(e.toLowerCase());
}
async function ah(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((f) => f.route.id === s.route.id),
      c = u != null && !lv(u, s) && (o && o[s.route.id]) !== void 0;
    if (Pr(l) && (i || c)) {
      let f = r[a];
      fe(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await cv(l, f, i).then((d) => {
          d && (n[a] = d || n[a]);
        });
    }
  }
}
async function cv(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: _e.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: _e.error, error: i };
      }
    return { type: _e.data, data: e.deferredData.data };
  }
}
function Zf(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function kc(e, t) {
  let n = typeof t == 'string' ? pr(t).search : t.search;
  if (e[e.length - 1].route.index && Zf(n || '')) return e[e.length - 1];
  let r = iv(e);
  return r[r.length - 1];
}
function lh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function iu(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ok(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function to(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function _k(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Vn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Lk(e, t) {
  try {
    let n = e.sessionStorage.getItem(av);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Nk(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(av, JSON.stringify(n));
    } catch (r) {
      Ni(
        !1,
        'Failed to save applied view transitions in sessionStorage (' +
          r +
          ').',
      );
    }
  }
} /**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Fl() {
  return (
    (Fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fl.apply(this, arguments)
  );
}
const ps = A.createContext(null),
  fv = A.createContext(null),
  Wr = A.createContext(null),
  ed = A.createContext(null),
  hr = A.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  dv = A.createContext(null);
function Ak(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ra() || fe(!1);
  let { basename: r, navigator: i } = A.useContext(Wr),
    { hash: o, pathname: a, search: l } = hv(e, { relative: n }),
    s = a;
  return (
    r !== '/' && (s = a === '/' ? r : Cn([r, a])),
    i.createHref({ pathname: s, search: l, hash: o })
  );
}
function ra() {
  return A.useContext(ed) != null;
}
function ia() {
  return ra() || fe(!1), A.useContext(ed).location;
}
function pv(e) {
  A.useContext(Wr).static || A.useLayoutEffect(e);
}
function Ik() {
  let { isDataRoute: e } = A.useContext(hr);
  return e ? Kk() : zk();
}
function zk() {
  ra() || fe(!1);
  let e = A.useContext(ps),
    { basename: t, future: n, navigator: r } = A.useContext(Wr),
    { matches: i } = A.useContext(hr),
    { pathname: o } = ia(),
    a = JSON.stringify(Kf(i, n.v7_relativeSplatPath)),
    l = A.useRef(!1);
  return (
    pv(() => {
      l.current = !0;
    }),
    A.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = Qf(u, JSON.parse(a), o, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Cn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, a, o, e],
    )
  );
}
const Dk = A.createContext(null);
function Mk(e) {
  let t = A.useContext(hr).outlet;
  return t && A.createElement(Dk.Provider, { value: e }, t);
}
function hv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = A.useContext(Wr),
    { matches: i } = A.useContext(hr),
    { pathname: o } = ia(),
    a = JSON.stringify(Kf(i, r.v7_relativeSplatPath));
  return A.useMemo(() => Qf(e, JSON.parse(a), o, n === 'path'), [e, a, o, n]);
}
function Fk(e, t, n, r) {
  ra() || fe(!1);
  let { navigator: i } = A.useContext(Wr),
    { matches: o } = A.useContext(hr),
    a = o[o.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : '/';
  a && a.route;
  let u = ia(),
    c;
  c = u;
  let f = c.pathname || '/',
    d = f;
  if (s !== '/') {
    let v = s.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let p = di(e, { pathname: d });
  return $k(
    p &&
      p.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, l, v.params),
          pathname: Cn([
            s,
            i.encodeLocation
              ? i.encodeLocation(v.pathname).pathname
              : v.pathname,
          ]),
          pathnameBase:
            v.pathnameBase === '/'
              ? s
              : Cn([
                  s,
                  i.encodeLocation
                    ? i.encodeLocation(v.pathnameBase).pathname
                    : v.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  );
}
function jk() {
  let e = qk(),
    t = Gf(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return A.createElement(
    A.Fragment,
    null,
    A.createElement('h2', null, 'Unexpected Application Error!'),
    A.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? A.createElement('pre', { style: i }, n) : null,
    null,
  );
}
const Uk = A.createElement(jk, null);
class Bk extends A.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? A.createElement(
          hr.Provider,
          { value: this.props.routeContext },
          A.createElement(dv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Hk(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = A.useContext(ps);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    A.createElement(hr.Provider, { value: t }, r)
  );
}
function $k(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = a.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
    );
    c >= 0 || fe(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let f = a[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: p } = n,
          g =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || g) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, f, d) => {
    let p,
      g = !1,
      v = null,
      b = null;
    n &&
      ((p = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || Uk),
      s &&
        (u < 0 && d === 0
          ? (Qk('route-fallback'), (g = !0), (b = null))
          : u === d &&
            ((g = !0), (b = f.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, d + 1)),
      m = () => {
        let y;
        return (
          p
            ? (y = v)
            : g
              ? (y = b)
              : f.route.Component
                ? (y = A.createElement(f.route.Component, null))
                : f.route.element
                  ? (y = f.route.element)
                  : (y = c),
          A.createElement(Hk, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? A.createElement(Bk, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var mv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(mv || {}),
  jl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(jl || {});
function Vk(e) {
  let t = A.useContext(ps);
  return t || fe(!1), t;
}
function Wk(e) {
  let t = A.useContext(fv);
  return t || fe(!1), t;
}
function Yk(e) {
  let t = A.useContext(hr);
  return t || fe(!1), t;
}
function gv(e) {
  let t = Yk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || fe(!1), n.route.id;
}
function qk() {
  var e;
  let t = A.useContext(dv),
    n = Wk(jl.UseRouteError),
    r = gv(jl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Kk() {
  let { router: e } = Vk(mv.UseNavigateStable),
    t = gv(jl.UseNavigateStable),
    n = A.useRef(!1);
  return (
    pv(() => {
      n.current = !0;
    }),
    A.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Fl({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const sh = {};
function Qk(e, t, n) {
  sh[e] || (sh[e] = !0);
}
function Xk(e) {
  return Mk(e.context);
}
function Gk(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = $e.Pop,
    navigator: o,
    static: a = !1,
    future: l,
  } = e;
  ra() && fe(!1);
  let s = t.replace(/^\/*/, '/'),
    u = A.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: a,
        future: Fl({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, o, a],
    );
  typeof r == 'string' && (r = pr(r));
  let {
      pathname: c = '/',
      search: f = '',
      hash: d = '',
      state: p = null,
      key: g = 'default',
    } = r,
    v = A.useMemo(() => {
      let b = Mi(c, s);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: d, state: p, key: g },
            navigationType: i,
          };
    }, [s, c, f, d, p, g, i]);
  return v == null
    ? null
    : A.createElement(
        Wr.Provider,
        { value: u },
        A.createElement(ed.Provider, { children: n, value: v }),
      );
}
new Promise(() => {});
function Jk(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: A.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: A.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: A.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
} /**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function Zk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function eS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tS(e, t) {
  return e.button === 0 && (!t || t === '_self') && !eS(e);
}
const nS = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  rS = '6';
try {
  window.__reactRouterVersion = rS;
} catch {}
function iS(e, t) {
  return mk({
    basename: void 0,
    future: Vo({}, void 0, { v7_prependBasename: !0 }),
    history: Fx({ window: void 0 }),
    hydrationData: oS(),
    routes: e,
    mapRouteProperties: Jk,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function oS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Vo({}, t, { errors: aS(t.errors) })), t;
}
function aS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new Xf(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == 'function')
          try {
            let a = new o(i.message);
            (a.stack = ''), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const lS = A.createContext({ isTransitioning: !1 }),
  sS = A.createContext(new Map()),
  uS = 'startTransition',
  uh = C0[uS],
  cS = 'flushSync',
  ch = Mx[cS];
function fS(e) {
  uh ? uh(e) : e();
}
function no(e) {
  ch ? ch(e) : e();
}
class dS {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function pS(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = A.useState(n.state),
    [a, l] = A.useState(),
    [s, u] = A.useState({ isTransitioning: !1 }),
    [c, f] = A.useState(),
    [d, p] = A.useState(),
    [g, v] = A.useState(),
    b = A.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    m = A.useCallback(
      (x) => {
        h ? fS(x) : x();
      },
      [h],
    ),
    y = A.useCallback(
      (x, L) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: z,
          unstable_viewTransitionOpts: U,
        } = L;
        M.forEach((X) => b.current.delete(X)),
          x.fetchers.forEach((X, se) => {
            X.data !== void 0 && b.current.set(se, X.data);
          });
        let B =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!U || B) {
          z ? no(() => o(x)) : m(() => o(x));
          return;
        }
        if (z) {
          no(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: U.currentLocation,
                nextLocation: U.nextLocation,
              });
          });
          let X = n.window.document.startViewTransition(() => {
            no(() => o(x));
          });
          X.finished.finally(() => {
            no(() => {
              f(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            no(() => p(X));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            v({
              state: x,
              currentLocation: U.currentLocation,
              nextLocation: U.nextLocation,
            }))
          : (l(x),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: U.currentLocation,
              nextLocation: U.nextLocation,
            }));
      },
      [n.window, d, c, b, m],
    );
  A.useLayoutEffect(() => n.subscribe(y), [n, y]),
    A.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new dS());
    }, [s]),
    A.useEffect(() => {
      if (c && a && n.window) {
        let x = a,
          L = c.promise,
          M = n.window.document.startViewTransition(async () => {
            m(() => o(x)), await L;
          });
        M.finished.finally(() => {
          f(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          p(M);
      }
    }, [m, a, c, n.window]),
    A.useEffect(() => {
      c && a && i.location.key === a.location.key && c.resolve();
    }, [c, d, i.location, a]),
    A.useEffect(() => {
      !s.isTransitioning &&
        g &&
        (l(g.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        v(void 0));
    }, [s.isTransitioning, g]),
    A.useEffect(() => {}, []);
  let C = A.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, L, M) =>
          n.navigate(x, {
            state: L,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (x, L, M) =>
          n.navigate(x, {
            replace: !0,
            state: L,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n],
    ),
    T = n.basename || '/',
    S = A.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: T }),
      [n, C, T],
    );
  return A.createElement(
    A.Fragment,
    null,
    A.createElement(
      ps.Provider,
      { value: S },
      A.createElement(
        fv.Provider,
        { value: i },
        A.createElement(
          sS.Provider,
          { value: b.current },
          A.createElement(
            lS.Provider,
            { value: s },
            A.createElement(
              Gk,
              {
                basename: T,
                location: i.location,
                navigationType: i.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? A.createElement(hS, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function hS(e) {
  let { routes: t, future: n, state: r } = e;
  return Fk(t, void 0, r, n);
}
const mS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  gS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  yS = A.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = Zk(t, nS),
      { basename: p } = A.useContext(Wr),
      g,
      v = !1;
    if (typeof u == 'string' && gS.test(u) && ((g = u), mS))
      try {
        let y = new URL(window.location.href),
          C = u.startsWith('//') ? new URL(y.protocol + u) : new URL(u),
          T = Mi(C.pathname, p);
        C.origin === y.origin && T != null
          ? (u = T + C.search + C.hash)
          : (v = !0);
      } catch {}
    let b = Ak(u, { relative: i }),
      h = vS(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || h(y);
    }
    return A.createElement(
      'a',
      Vo({}, d, { href: g || b, onClick: v || o ? r : m, ref: n, target: s }),
    );
  });
var fh;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(fh || (fh = {}));
var dh;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(dh || (dh = {}));
function vS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    s = Ik(),
    u = ia(),
    c = hv(e, { relative: a });
  return A.useCallback(
    (f) => {
      if (tS(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : jr(u) === jr(c);
        s(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, s, c, r, i, n, e, o, a, l],
  );
}
function wS() {
  return Y.jsx(Y.Fragment, {
    children: Y.jsx('div', { className: 'wrapper', children: Y.jsx(Xk, {}) }),
  });
}
const xS = '/CoverNew.jpg';
function kS() {
  return Y.jsx('img', { src: xS, alt: '' });
}
function SS(e) {
  const t = new Date(e),
    n = new Date(),
    r = n.getTime() - t.getTime(),
    i = Math.floor(r / (1e3 * 60)),
    o = Math.floor(r / (1e3 * 60 * 60)),
    a = Math.floor(r / (1e3 * 60 * 60 * 24)),
    l = n.getFullYear() - t.getFullYear(),
    s = l * 12 + (n.getMonth() - t.getMonth());
  return l > 0
    ? `${l} Y ago`
    : s > 0
      ? `${s} M ago`
      : a > 0
        ? `${a} d ago`
        : o > 0
          ? `${o} h ago`
          : i > 0
            ? `${i} min ago`
            : 'just now';
}
class lt {
  constructor(t, n) {
    Os(this, 'text');
    Os(this, 'markdown');
    (this.text = t), (this.markdown = n);
  }
  static createStringFromMarkdown(t) {
    const n = lt.converter(t);
    return new lt(n, t);
  }
  static converter(t) {
    let n = t;
    return (
      (n = lt.removeMarkdownLinks(n)),
      (n = lt.removeMarkdownImages(n)),
      (n = lt.removeBoldAndItalic(n)),
      (n = lt.removeInlineCode(n)),
      (n = lt.removeCodeBlocks(n)),
      (n = lt.removeHeadings(n)),
      (n = lt.removeHorizontalRules(n)),
      (n = lt.removeBlockquotes(n)),
      (n = lt.removeStrikethroughs(n)),
      (n = lt.removeListMarkers(n)),
      (n = lt.removeExtraNewlines(n)),
      n
    );
  }
  static removeMarkdownLinks(t) {
    return t.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  }
  static removeMarkdownImages(t) {
    return t.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '');
  }
  static removeBoldAndItalic(t) {
    let n = t.replace(/(\*\*|__)(.*?)\1/g, '$2');
    return (n = t.replace(/(\*|_)(.*?)\1/g, '$2')), n;
  }
  static removeInlineCode(t) {
    return t.replace(/`(.*?)`/g, '$1');
  }
  static removeCodeBlocks(t) {
    return t.replace(/```[\s\S]*?```/g, '');
  }
  static removeHeadings(t) {
    return t.replace(/^(#+)\s+(.*)/gm, '$2');
  }
  static removeHorizontalRules(t) {
    return t.replace(/^-{3,}/g, '');
  }
  static removeBlockquotes(t) {
    return t.replace(/^\s*>+\s?/gm, '');
  }
  static removeStrikethroughs(t) {
    return t.replace(/~~(.*?)~~/g, '$1');
  }
  static removeListMarkers(t) {
    let n = t.replace(/^\s*[-+*]\s+/gm, '');
    return (n = t.replace(/^\s*\d+\.\s+/gm, '')), n;
  }
  static removeExtraNewlines(t) {
    return t.replace(
      /\n{2,}/g,
      `

`,
    );
  }
}
function ES({ item: e }) {
  let t;
  (t = lt.createStringFromMarkdown('')),
    e.body && (t = lt.createStringFromMarkdown(e.body));
  const n = `/post/${e.number}`;
  return Y.jsxs(
    'div',
    {
      className: 'post-container',
      children: [
        Y.jsxs('header', {
          className: 'post-header',
          children: [
            Y.jsx(yS, {
              to: n,
              state: e,
              children: Y.jsx('h1', { children: e.title }),
            }),
            Y.jsx('span', { children: SS(e.created_at) }),
          ],
        }),
        Y.jsx('div', {
          className: 'post-body',
          children: e.body
            ? Y.jsx('p', { children: t.text })
            : Y.jsx('p', { children: 'test' }),
        }),
      ],
    },
    e.number,
  );
}
function bS({ items: e }) {
  return Y.jsx('div', {
    className: 'posts-wrapper',
    children: e.map((t) => Y.jsx(ES, { item: t }, t.number)),
  });
}
var CS = {
    prefix: 'fab',
    iconName: 'square-github',
    icon: [
      448,
      512,
      ['github-square'],
      'f092',
      'M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z',
    ],
  },
  PS = CS,
  TS = {
    prefix: 'fab',
    iconName: 'linkedin',
    icon: [
      448,
      512,
      [],
      'f08c',
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    ],
  },
  RS = {
    prefix: 'far',
    iconName: 'envelope',
    icon: [
      512,
      512,
      [128386, 9993, 61443],
      'f0e0',
      'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
    ],
  };
function ph(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ph(Object(n), !0).forEach(function (r) {
          qe(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ph(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ul(e) {
  '@babel/helpers - typeof';
  return (
    (Ul =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ul(e)
  );
}
function OS(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function _S(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function LS(e, t, n) {
  return (
    t && _S(e.prototype, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function qe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function td(e, t) {
  return AS(e) || zS(e, t) || yv(e, t) || MS();
}
function oa(e) {
  return NS(e) || IS(e) || yv(e) || DS();
}
function NS(e) {
  if (Array.isArray(e)) return Sc(e);
}
function AS(e) {
  if (Array.isArray(e)) return e;
}
function IS(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function zS(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (o = !0), (l = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return r;
  }
}
function yv(e, t) {
  if (e) {
    if (typeof e == 'string') return Sc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Sc(e, t);
  }
}
function Sc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function DS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var hh = function () {},
  nd = {},
  vv = {},
  wv = null,
  xv = { mark: hh, measure: hh };
try {
  typeof window < 'u' && (nd = window),
    typeof document < 'u' && (vv = document),
    typeof MutationObserver < 'u' && (wv = MutationObserver),
    typeof performance < 'u' && (xv = performance);
} catch {}
var FS = nd.navigator || {},
  mh = FS.userAgent,
  gh = mh === void 0 ? '' : mh,
  lr = nd,
  Re = vv,
  yh = wv,
  Fa = xv;
lr.document;
var zn =
    !!Re.documentElement &&
    !!Re.head &&
    typeof Re.addEventListener == 'function' &&
    typeof Re.createElement == 'function',
  kv = ~gh.indexOf('MSIE') || ~gh.indexOf('Trident/'),
  ja,
  Ua,
  Ba,
  Ha,
  $a,
  _n = '___FONT_AWESOME___',
  Ec = 16,
  Sv = 'fa',
  Ev = 'svg-inline--fa',
  Ur = 'data-fa-i2svg',
  bc = 'data-fa-pseudo-element',
  jS = 'data-fa-pseudo-element-pending',
  rd = 'data-prefix',
  id = 'data-icon',
  vh = 'fontawesome-i2svg',
  US = 'async',
  BS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  bv = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  Pe = 'classic',
  Me = 'sharp',
  od = [Pe, Me];
function aa(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[Pe];
    },
  });
}
var Wo = aa(
    ((ja = {}),
    qe(ja, Pe, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit',
    }),
    qe(ja, Me, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    }),
    ja),
  ),
  Yo = aa(
    ((Ua = {}),
    qe(Ua, Pe, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    qe(Ua, Me, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Ua),
  ),
  qo = aa(
    ((Ba = {}),
    qe(Ba, Pe, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    qe(Ba, Me, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin',
    }),
    Ba),
  ),
  HS = aa(
    ((Ha = {}),
    qe(Ha, Pe, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    qe(Ha, Me, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    }),
    Ha),
  ),
  $S = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Cv = 'fa-layers-text',
  VS =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  WS = aa(
    (($a = {}),
    qe($a, Pe, {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    }),
    qe($a, Me, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    $a),
  ),
  Pv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  YS = Pv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  qS = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Rr = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Ko = new Set();
Object.keys(Yo[Pe]).map(Ko.add.bind(Ko));
Object.keys(Yo[Me]).map(Ko.add.bind(Ko));
var KS = []
    .concat(od, oa(Ko), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Rr.GROUP,
      Rr.SWAP_OPACITY,
      Rr.PRIMARY,
      Rr.SECONDARY,
    ])
    .concat(
      Pv.map(function (e) {
        return ''.concat(e, 'x');
      }),
    )
    .concat(
      YS.map(function (e) {
        return 'w-'.concat(e);
      }),
    ),
  So = lr.FontAwesomeConfig || {};
function QS(e) {
  var t = Re.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function XS(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (Re && typeof Re.querySelector == 'function') {
  var GS = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ];
  GS.forEach(function (e) {
    var t = td(e, 2),
      n = t[0],
      r = t[1],
      i = XS(QS(n));
    i != null && (So[r] = i);
  });
}
var Tv = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Sv,
  replacementClass: Ev,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
So.familyPrefix && (So.cssPrefix = So.familyPrefix);
var Ai = H(H({}, Tv), So);
Ai.autoReplaceSvg || (Ai.observeMutations = !1);
var q = {};
Object.keys(Tv).forEach(function (e) {
  Object.defineProperty(q, e, {
    enumerable: !0,
    set: function (n) {
      (Ai[e] = n),
        Eo.forEach(function (r) {
          return r(q);
        });
    },
    get: function () {
      return Ai[e];
    },
  });
});
Object.defineProperty(q, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    (Ai.cssPrefix = t),
      Eo.forEach(function (n) {
        return n(q);
      });
  },
  get: function () {
    return Ai.cssPrefix;
  },
});
lr.FontAwesomeConfig = q;
var Eo = [];
function JS(e) {
  return (
    Eo.push(e),
    function () {
      Eo.splice(Eo.indexOf(e), 1);
    }
  );
}
var Bn = Ec,
  yn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function ZS(e) {
  if (!(!e || !zn)) {
    var t = Re.createElement('style');
    t.setAttribute('type', 'text/css'), (t.innerHTML = e);
    for (var n = Re.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i],
        a = (o.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(a) > -1 && (r = o);
    }
    return Re.head.insertBefore(t, r), e;
  }
}
var eE = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Qo() {
  for (var e = 12, t = ''; e-- > 0; ) t += eE[(Math.random() * 62) | 0];
  return t;
}
function Fi(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function ad(e) {
  return e.classList
    ? Fi(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function Rv(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function tE(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(Rv(e[n]), '" ');
    }, '')
    .trim();
}
function hs(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function ld(e) {
  return (
    e.size !== yn.size ||
    e.x !== yn.x ||
    e.y !== yn.y ||
    e.rotate !== yn.rotate ||
    e.flipX ||
    e.flipY
  );
}
function nE(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(n / 2, ' 256)') },
    o = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    a = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    l = 'rotate('.concat(t.rotate, ' 0 0)'),
    s = { transform: ''.concat(o, ' ').concat(a, ' ').concat(l) },
    u = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: s, path: u };
}
function rE(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Ec : n,
    i = e.height,
    o = i === void 0 ? Ec : i,
    a = e.startCentered,
    l = a === void 0 ? !1 : a,
    s = '';
  return (
    l && kv
      ? (s += 'translate('
          .concat(t.x / Bn - r / 2, 'em, ')
          .concat(t.y / Bn - o / 2, 'em) '))
      : l
        ? (s += 'translate(calc(-50% + '
            .concat(t.x / Bn, 'em), calc(-50% + ')
            .concat(t.y / Bn, 'em)) '))
        : (s += 'translate('.concat(t.x / Bn, 'em, ').concat(t.y / Bn, 'em) ')),
    (s += 'scale('
      .concat((t.size / Bn) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / Bn) * (t.flipY ? -1 : 1), ') ')),
    (s += 'rotate('.concat(t.rotate, 'deg) ')),
    s
  );
}
var iE = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Ov() {
  var e = Sv,
    t = Ev,
    n = q.cssPrefix,
    r = q.replacementClass,
    i = iE;
  if (n !== e || r !== t) {
    var o = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      a = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      l = new RegExp('\\.'.concat(t), 'g');
    i = i
      .replace(o, '.'.concat(n, '-'))
      .replace(a, '--'.concat(n, '-'))
      .replace(l, '.'.concat(r));
  }
  return i;
}
var wh = !1;
function ou() {
  q.autoAddCss && !wh && (ZS(Ov()), (wh = !0));
}
var oE = {
    mixout: function () {
      return { dom: { css: Ov, insertCss: ou } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ou();
        },
        beforeI2svg: function () {
          ou();
        },
      };
    },
  },
  Ln = lr || {};
Ln[_n] || (Ln[_n] = {});
Ln[_n].styles || (Ln[_n].styles = {});
Ln[_n].hooks || (Ln[_n].hooks = {});
Ln[_n].shims || (Ln[_n].shims = []);
var tn = Ln[_n],
  _v = [],
  aE = function e() {
    Re.removeEventListener('DOMContentLoaded', e),
      (Bl = 1),
      _v.map(function (t) {
        return t();
      });
  },
  Bl = !1;
zn &&
  ((Bl = (Re.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Re.readyState,
  )),
  Bl || Re.addEventListener('DOMContentLoaded', aE));
function lE(e) {
  zn && (Bl ? setTimeout(e, 0) : _v.push(e));
}
function la(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? Rv(e)
    : '<'
        .concat(t, ' ')
        .concat(tE(r), '>')
        .concat(o.map(la).join(''), '</')
        .concat(t, '>');
}
function xh(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var au = function (t, n, r, i) {
  var o = Object.keys(t),
    a = o.length,
    l = n,
    s,
    u,
    c;
  for (r === void 0 ? ((s = 1), (c = t[o[0]])) : ((s = 0), (c = r)); s < a; s++)
    (u = o[s]), (c = l(c, t[u], u, t));
  return c;
};
function sE(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Cc(e) {
  var t = sE(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function uE(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function kh(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Pc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = kh(t);
  typeof tn.hooks.addPack == 'function' && !i
    ? tn.hooks.addPack(e, kh(t))
    : (tn.styles[e] = H(H({}, tn.styles[e] || {}), o)),
    e === 'fas' && Pc('fa', t);
}
var Va,
  Wa,
  Ya,
  pi = tn.styles,
  cE = tn.shims,
  fE =
    ((Va = {}),
    qe(Va, Pe, Object.values(qo[Pe])),
    qe(Va, Me, Object.values(qo[Me])),
    Va),
  sd = null,
  Lv = {},
  Nv = {},
  Av = {},
  Iv = {},
  zv = {},
  dE =
    ((Wa = {}),
    qe(Wa, Pe, Object.keys(Wo[Pe])),
    qe(Wa, Me, Object.keys(Wo[Me])),
    Wa);
function pE(e) {
  return ~KS.indexOf(e);
}
function hE(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !pE(i) ? i : null;
}
var Dv = function () {
  var t = function (o) {
    return au(
      pi,
      function (a, l, s) {
        return (a[s] = au(l, o, {})), a;
      },
      {},
    );
  };
  (Lv = t(function (i, o, a) {
    if ((o[3] && (i[o[3]] = a), o[2])) {
      var l = o[2].filter(function (s) {
        return typeof s == 'number';
      });
      l.forEach(function (s) {
        i[s.toString(16)] = a;
      });
    }
    return i;
  })),
    (Nv = t(function (i, o, a) {
      if (((i[a] = a), o[2])) {
        var l = o[2].filter(function (s) {
          return typeof s == 'string';
        });
        l.forEach(function (s) {
          i[s] = a;
        });
      }
      return i;
    })),
    (zv = t(function (i, o, a) {
      var l = o[2];
      return (
        (i[a] = a),
        l.forEach(function (s) {
          i[s] = a;
        }),
        i
      );
    }));
  var n = 'far' in pi || q.autoFetchSvg,
    r = au(
      cE,
      function (i, o) {
        var a = o[0],
          l = o[1],
          s = o[2];
        return (
          l === 'far' && !n && (l = 'fas'),
          typeof a == 'string' && (i.names[a] = { prefix: l, iconName: s }),
          typeof a == 'number' &&
            (i.unicodes[a.toString(16)] = { prefix: l, iconName: s }),
          i
        );
      },
      { names: {}, unicodes: {} },
    );
  (Av = r.names),
    (Iv = r.unicodes),
    (sd = ms(q.styleDefault, { family: q.familyDefault }));
};
JS(function (e) {
  sd = ms(e.styleDefault, { family: q.familyDefault });
});
Dv();
function ud(e, t) {
  return (Lv[e] || {})[t];
}
function mE(e, t) {
  return (Nv[e] || {})[t];
}
function Or(e, t) {
  return (zv[e] || {})[t];
}
function Mv(e) {
  return Av[e] || { prefix: null, iconName: null };
}
function gE(e) {
  var t = Iv[e],
    n = ud('fas', e);
  return (
    t ||
    (n ? { prefix: 'fas', iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function sr() {
  return sd;
}
var cd = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function ms(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? Pe : n,
    i = Wo[r][e],
    o = Yo[r][e] || Yo[r][i],
    a = e in tn.styles ? e : null;
  return o || a || null;
}
var Sh =
  ((Ya = {}),
  qe(Ya, Pe, Object.keys(qo[Pe])),
  qe(Ya, Me, Object.keys(qo[Me])),
  Ya);
function gs(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    o =
      ((t = {}),
      qe(t, Pe, ''.concat(q.cssPrefix, '-').concat(Pe)),
      qe(t, Me, ''.concat(q.cssPrefix, '-').concat(Me)),
      t),
    a = null,
    l = Pe;
  (e.includes(o[Pe]) ||
    e.some(function (u) {
      return Sh[Pe].includes(u);
    })) &&
    (l = Pe),
    (e.includes(o[Me]) ||
      e.some(function (u) {
        return Sh[Me].includes(u);
      })) &&
      (l = Me);
  var s = e.reduce(function (u, c) {
    var f = hE(q.cssPrefix, c);
    if (
      (pi[c]
        ? ((c = fE[l].includes(c) ? HS[l][c] : c), (a = c), (u.prefix = c))
        : dE[l].indexOf(c) > -1
          ? ((a = c), (u.prefix = ms(c, { family: l })))
          : f
            ? (u.iconName = f)
            : c !== q.replacementClass &&
              c !== o[Pe] &&
              c !== o[Me] &&
              u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var d = a === 'fa' ? Mv(u.iconName) : {},
        p = Or(u.prefix, u.iconName);
      d.prefix && (a = null),
        (u.iconName = d.iconName || p || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === 'far' &&
          !pi.far &&
          pi.fas &&
          !q.autoFetchSvg &&
          (u.prefix = 'fas');
    }
    return u;
  }, cd());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
    !s.prefix &&
      l === Me &&
      (pi.fass || q.autoFetchSvg) &&
      ((s.prefix = 'fass'),
      (s.iconName = Or(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === 'fa' || a === 'fa') && (s.prefix = sr() || 'fas'),
    s
  );
}
var yE = (function () {
    function e() {
      OS(this, e), (this.definitions = {});
    }
    return (
      LS(e, [
        {
          key: 'add',
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), o = 0;
              o < r;
              o++
            )
              i[o] = arguments[o];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (l) {
              (n.definitions[l] = H(H({}, n.definitions[l] || {}), a[l])),
                Pc(l, a[l]);
              var s = qo[Pe][l];
              s && Pc(s, a[l]), Dv();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (o) {
                var a = i[o],
                  l = a.prefix,
                  s = a.iconName,
                  u = a.icon,
                  c = u[2];
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == 'string' && (n[l][f] = u);
                    }),
                  (n[l][s] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Eh = [],
  hi = {},
  Si = {},
  vE = Object.keys(Si);
function wE(e, t) {
  var n = t.mixoutsTo;
  return (
    (Eh = e),
    (hi = {}),
    Object.keys(Si).forEach(function (r) {
      vE.indexOf(r) === -1 && delete Si[r];
    }),
    Eh.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == 'function' && (n[a] = i[a]),
            Ul(i[a]) === 'object' &&
              Object.keys(i[a]).forEach(function (l) {
                n[a] || (n[a] = {}), (n[a][l] = i[a][l]);
              });
        }),
        r.hooks)
      ) {
        var o = r.hooks();
        Object.keys(o).forEach(function (a) {
          hi[a] || (hi[a] = []), hi[a].push(o[a]);
        });
      }
      r.provides && r.provides(Si);
    }),
    n
  );
}
function Tc(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var o = hi[e] || [];
  return (
    o.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function Br(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = hi[e] || [];
  i.forEach(function (o) {
    o.apply(null, n);
  });
}
function Nn() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Si[e] ? Si[e].apply(null, t) : void 0;
}
function Rc(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || sr();
  if (t)
    return (t = Or(n, t) || t), xh(Fv.definitions, n, t) || xh(tn.styles, n, t);
}
var Fv = new yE(),
  xE = function () {
    (q.autoReplaceSvg = !1), (q.observeMutations = !1), Br('noAuto');
  },
  kE = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return zn
        ? (Br('beforeI2svg', t), Nn('pseudoElements2svg', t), Nn('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      q.autoReplaceSvg === !1 && (q.autoReplaceSvg = !0),
        (q.observeMutations = !0),
        lE(function () {
          EE({ autoReplaceSvgRoot: n }), Br('watch', t);
        });
    },
  },
  SE = {
    icon: function (t) {
      if (t === null) return null;
      if (Ul(t) === 'object' && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Or(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = ms(t[0]);
        return { prefix: r, iconName: Or(r, n) || n };
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(q.cssPrefix, '-')) > -1 || t.match($S))
      ) {
        var i = gs(t.split(' '), { skipLookups: !0 });
        return {
          prefix: i.prefix || sr(),
          iconName: Or(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == 'string') {
        var o = sr();
        return { prefix: o, iconName: Or(o, t) || t };
      }
    },
  },
  At = {
    noAuto: xE,
    config: q,
    dom: kE,
    parse: SE,
    library: Fv,
    findIconDefinition: Rc,
    toHtml: la,
  },
  EE = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? Re : n;
    (Object.keys(tn.styles).length > 0 || q.autoFetchSvg) &&
      zn &&
      q.autoReplaceSvg &&
      At.dom.i2svg({ node: r });
  };
function ys(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return la(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (zn) {
          var r = Re.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function bE(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform;
  if (ld(a) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 };
    i.style = hs(
      H(
        H({}, o),
        {},
        {
          'transform-origin': ''
            .concat(u.x + a.x / 16, 'em ')
            .concat(u.y + a.y / 16, 'em'),
        },
      ),
    );
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function CE(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    o = e.symbol,
    a = o === !0 ? ''.concat(t, '-').concat(q.cssPrefix, '-').concat(n) : o;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [
        { tag: 'symbol', attributes: H(H({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function fd(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    o = e.iconName,
    a = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    p = d === void 0 ? !1 : d,
    g = r.found ? r : n,
    v = g.width,
    b = g.height,
    h = i === 'fak',
    m = [q.replacementClass, o ? ''.concat(q.cssPrefix, '-').concat(o) : '']
      .filter(function (M) {
        return f.classes.indexOf(M) === -1;
      })
      .filter(function (M) {
        return M !== '' || !!M;
      })
      .concat(f.classes)
      .join(' '),
    y = {
      children: [],
      attributes: H(
        H({}, f.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': o,
          class: m,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(v, ' ').concat(b),
        },
      ),
    },
    C =
      h && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((v / b) * 16 * 0.0625, 'em') }
        : {};
  p && (y.attributes[Ur] = ''),
    s &&
      (y.children.push({
        tag: 'title',
        attributes: {
          id: y.attributes['aria-labelledby'] || 'title-'.concat(c || Qo()),
        },
        children: [s],
      }),
      delete y.attributes.title);
  var T = H(
      H({}, y),
      {},
      {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: l,
        styles: H(H({}, C), f.styles),
      },
    ),
    S =
      r.found && n.found
        ? Nn('generateAbstractMask', T) || { children: [], attributes: {} }
        : Nn('generateAbstractIcon', T) || { children: [], attributes: {} },
    x = S.children,
    L = S.attributes;
  return (T.children = x), (T.attributes = L), l ? CE(T) : bE(T);
}
function bh(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    o = e.title,
    a = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = H(
      H(H({}, a.attributes), o ? { title: o } : {}),
      {},
      { class: a.classes.join(' ') },
    );
  s && (u[Ur] = '');
  var c = H({}, a.styles);
  ld(i) &&
    ((c.transform = rE({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c['-webkit-transform'] = c.transform));
  var f = hs(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    o &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    d
  );
}
function PE(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = H(
      H(H({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') },
    ),
    o = hs(r.styles);
  o.length > 0 && (i.style = o);
  var a = [];
  return (
    a.push({ tag: 'span', attributes: i, children: [t] }),
    n &&
      a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    a
  );
}
var lu = tn.styles;
function Oc(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = td(r, 1),
    o = i[0],
    a = null;
  return (
    Array.isArray(o)
      ? (a = {
          tag: 'g',
          attributes: { class: ''.concat(q.cssPrefix, '-').concat(Rr.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(q.cssPrefix, '-').concat(Rr.SECONDARY),
                fill: 'currentColor',
                d: o[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(q.cssPrefix, '-').concat(Rr.PRIMARY),
                fill: 'currentColor',
                d: o[1],
              },
            },
          ],
        })
      : (a = { tag: 'path', attributes: { fill: 'currentColor', d: o } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var TE = { found: !1, width: 512, height: 512 };
function RE(e, t) {
  !bv &&
    !q.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
    );
}
function _c(e, t) {
  var n = t;
  return (
    t === 'fa' && q.styleDefault !== null && (t = sr()),
    new Promise(function (r, i) {
      if ((Nn('missingIconAbstract'), n === 'fa')) {
        var o = Mv(e) || {};
        (e = o.iconName || e), (t = o.prefix || t);
      }
      if (e && t && lu[t] && lu[t][e]) {
        var a = lu[t][e];
        return r(Oc(a));
      }
      RE(e, t),
        r(
          H(
            H({}, TE),
            {},
            {
              icon:
                q.showMissingIcons && e ? Nn('missingIconAbstract') || {} : {},
            },
          ),
        );
    })
  );
}
var Ch = function () {},
  Lc =
    q.measurePerformance && Fa && Fa.mark && Fa.measure
      ? Fa
      : { mark: Ch, measure: Ch },
  co = 'FA "6.5.2"',
  OE = function (t) {
    return (
      Lc.mark(''.concat(co, ' ').concat(t, ' begins')),
      function () {
        return jv(t);
      }
    );
  },
  jv = function (t) {
    Lc.mark(''.concat(co, ' ').concat(t, ' ends')),
      Lc.measure(
        ''.concat(co, ' ').concat(t),
        ''.concat(co, ' ').concat(t, ' begins'),
        ''.concat(co, ' ').concat(t, ' ends'),
      );
  },
  dd = { begin: OE, end: jv },
  sl = function () {};
function Ph(e) {
  var t = e.getAttribute ? e.getAttribute(Ur) : null;
  return typeof t == 'string';
}
function _E(e) {
  var t = e.getAttribute ? e.getAttribute(rd) : null,
    n = e.getAttribute ? e.getAttribute(id) : null;
  return t && n;
}
function LE(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(q.replacementClass)
  );
}
function NE() {
  if (q.autoReplaceSvg === !0) return ul.replace;
  var e = ul[q.autoReplaceSvg];
  return e || ul.replace;
}
function AE(e) {
  return Re.createElementNS('http://www.w3.org/2000/svg', e);
}
function IE(e) {
  return Re.createElement(e);
}
function Uv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? AE : IE) : n;
  if (typeof e == 'string') return Re.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var o = e.children || [];
  return (
    o.forEach(function (a) {
      i.appendChild(Uv(a, { ceFn: r }));
    }),
    i
  );
}
function zE(e) {
  var t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var ul = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Uv(i), n);
        }),
        n.getAttribute(Ur) === null && q.keepOriginalSource)
      ) {
        var r = Re.createComment(zE(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~ad(n).indexOf(q.replacementClass)) return ul.replace(t);
    var i = new RegExp(''.concat(q.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var o = r[0].attributes.class.split(' ').reduce(
        function (l, s) {
          return (
            s === q.replacementClass || s.match(i)
              ? l.toSvg.push(s)
              : l.toNode.push(s),
            l
          );
        },
        { toNode: [], toSvg: [] },
      );
      (r[0].attributes.class = o.toSvg.join(' ')),
        o.toNode.length === 0
          ? n.removeAttribute('class')
          : n.setAttribute('class', o.toNode.join(' '));
    }
    var a = r
      .map(function (l) {
        return la(l);
      })
      .join(`
`);
    n.setAttribute(Ur, ''), (n.innerHTML = a);
  },
};
function Th(e) {
  e();
}
function Bv(e, t) {
  var n = typeof t == 'function' ? t : sl;
  if (e.length === 0) n();
  else {
    var r = Th;
    q.mutateApproach === US && (r = lr.requestAnimationFrame || Th),
      r(function () {
        var i = NE(),
          o = dd.begin('mutate');
        e.map(i), o(), n();
      });
  }
}
var pd = !1;
function Hv() {
  pd = !0;
}
function Nc() {
  pd = !1;
}
var Hl = null;
function Rh(e) {
  if (yh && q.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? sl : t,
      r = e.nodeCallback,
      i = r === void 0 ? sl : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? sl : o,
      l = e.observeMutationsRoot,
      s = l === void 0 ? Re : l;
    (Hl = new yh(function (u) {
      if (!pd) {
        var c = sr();
        Fi(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !Ph(f.addedNodes[0]) &&
              (q.searchPseudoElements && a(f.target), n(f.target)),
            f.type === 'attributes' &&
              f.target.parentNode &&
              q.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === 'attributes' &&
              Ph(f.target) &&
              ~qS.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && _E(f.target)) {
              var d = gs(ad(f.target)),
                p = d.prefix,
                g = d.iconName;
              f.target.setAttribute(rd, p || c),
                g && f.target.setAttribute(id, g);
            } else LE(f.target) && i(f.target);
        });
      }
    })),
      zn &&
        Hl.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function DE() {
  Hl && Hl.disconnect();
}
function ME(e) {
  var t = e.getAttribute('style'),
    n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (r, i) {
        var o = i.split(':'),
          a = o[0],
          l = o.slice(1);
        return a && l.length > 0 && (r[a] = l.join(':').trim()), r;
      }, {})),
    n
  );
}
function FE(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = gs(ad(e));
  return (
    i.prefix || (i.prefix = sr()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          mE(i.prefix, e.innerText) || ud(i.prefix, Cc(e.innerText))),
      !i.iconName &&
        q.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function jE(e) {
  var t = Fi(e.attributes).reduce(function (i, o) {
      return (
        i.name !== 'class' && i.name !== 'style' && (i[o.name] = o.value), i
      );
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    q.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(q.replacementClass, '-title-')
            .concat(r || Qo()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function UE() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: yn,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Oh(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = FE(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = jE(e),
    l = Tc('parseNodeAttributes', {}, e),
    s = t.styleParser ? ME(e) : [];
  return H(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: yn,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: s, attributes: a },
    },
    l,
  );
}
var BE = tn.styles;
function $v(e) {
  var t = q.autoReplaceSvg === 'nest' ? Oh(e, { styleParser: !1 }) : Oh(e);
  return ~t.extra.classes.indexOf(Cv)
    ? Nn('generateLayersText', e, t)
    : Nn('generateSvgReplacementMutation', e, t);
}
var ur = new Set();
od.map(function (e) {
  ur.add('fa-'.concat(e));
});
Object.keys(Wo[Pe]).map(ur.add.bind(ur));
Object.keys(Wo[Me]).map(ur.add.bind(ur));
ur = oa(ur);
function _h(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!zn) return Promise.resolve();
  var n = Re.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(vh, '-').concat(f));
    },
    i = function (f) {
      return n.remove(''.concat(vh, '-').concat(f));
    },
    o = q.autoFetchSvg
      ? ur
      : od
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys(BE));
  o.includes('fa') || o.push('fa');
  var a = ['.'.concat(Cv, ':not([').concat(Ur, '])')]
    .concat(
      o.map(function (c) {
        return '.'.concat(c, ':not([').concat(Ur, '])');
      }),
    )
    .join(', ');
  if (a.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = Fi(e.querySelectorAll(a));
  } catch {}
  if (l.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var s = dd.begin('onTree'),
    u = l.reduce(function (c, f) {
      try {
        var d = $v(f);
        d && c.push(d);
      } catch (p) {
        bv || (p.name === 'MissingIcon' && console.error(p));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        Bv(d, function () {
          r('active'),
            r('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            s(),
            c();
        });
      })
      .catch(function (d) {
        s(), f(d);
      });
  });
}
function HE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  $v(e).then(function (n) {
    n && Bv([n], t);
  });
}
function $E(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Rc(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : Rc(i || {})),
      e(r, H(H({}, n), {}, { mask: i }))
    );
  };
}
var VE = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? yn : r,
      o = n.symbol,
      a = o === void 0 ? !1 : o,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      d = f === void 0 ? null : f,
      p = n.titleId,
      g = p === void 0 ? null : p,
      v = n.classes,
      b = v === void 0 ? [] : v,
      h = n.attributes,
      m = h === void 0 ? {} : h,
      y = n.styles,
      C = y === void 0 ? {} : y;
    if (t) {
      var T = t.prefix,
        S = t.iconName,
        x = t.icon;
      return ys(H({ type: 'icon' }, t), function () {
        return (
          Br('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          q.autoA11y &&
            (d
              ? (m['aria-labelledby'] = ''
                  .concat(q.replacementClass, '-title-')
                  .concat(g || Qo()))
              : ((m['aria-hidden'] = 'true'), (m.focusable = 'false'))),
          fd({
            icons: {
              main: Oc(x),
              mask: s
                ? Oc(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: T,
            iconName: S,
            transform: H(H({}, yn), i),
            symbol: a,
            title: d,
            maskId: c,
            titleId: g,
            extra: { attributes: m, styles: C, classes: b },
          })
        );
      });
    }
  },
  WE = {
    mixout: function () {
      return { icon: $E(VE) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = _h), (n.nodeCallback = HE), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Re : r,
          o = n.callback,
          a = o === void 0 ? function () {} : o;
        return _h(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            o = r.title,
            a = r.titleId,
            l = r.prefix,
            s = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (p, g) {
            Promise.all([
              _c(i, l),
              c.iconName
                ? _c(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (v) {
                var b = td(v, 2),
                  h = b[0],
                  m = b[1];
                p([
                  n,
                  fd({
                    icons: { main: h, mask: m },
                    prefix: l,
                    iconName: i,
                    transform: s,
                    symbol: u,
                    maskId: f,
                    title: o,
                    titleId: a,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(g);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            o = n.main,
            a = n.transform,
            l = n.styles,
            s = hs(l);
          s.length > 0 && (i.style = s);
          var u;
          return (
            ld(a) &&
              (u = Nn('generateAbstractTransformGrouping', {
                main: o,
                transform: a,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            r.push(u || o.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  YE = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            o = i === void 0 ? [] : i;
          return ys({ type: 'layer' }, function () {
            Br('beforeDOMElementCreation', { assembler: n, params: r });
            var a = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      a = a.concat(s.abstract);
                    })
                  : (a = a.concat(l.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(q.cssPrefix, '-layers')]
                      .concat(oa(o))
                      .join(' '),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  qE = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            o = i === void 0 ? null : i,
            a = r.classes,
            l = a === void 0 ? [] : a,
            s = r.attributes,
            u = s === void 0 ? {} : s,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return ys({ type: 'counter', content: n }, function () {
            return (
              Br('beforeDOMElementCreation', { content: n, params: r }),
              PE({
                content: n.toString(),
                title: o,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(q.cssPrefix, '-layers-counter')].concat(
                    oa(l),
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  KE = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            o = i === void 0 ? yn : i,
            a = r.title,
            l = a === void 0 ? null : a,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            p = d === void 0 ? {} : d;
          return ys({ type: 'text', content: n }, function () {
            return (
              Br('beforeDOMElementCreation', { content: n, params: r }),
              bh({
                content: n,
                transform: H(H({}, yn), o),
                title: l,
                extra: {
                  attributes: f,
                  styles: p,
                  classes: [''.concat(q.cssPrefix, '-layers-text')].concat(
                    oa(u),
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          o = r.transform,
          a = r.extra,
          l = null,
          s = null;
        if (kv) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (l = c.width / u), (s = c.height / u);
        }
        return (
          q.autoA11y && !i && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            bh({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: o,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  QE = new RegExp('"', 'ug'),
  Lh = [1105920, 1112319];
function XE(e) {
  var t = e.replace(QE, ''),
    n = uE(t, 0),
    r = n >= Lh[0] && n <= Lh[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Cc(i ? t[0] : t), isSecondary: r || i };
}
function Nh(e, t) {
  var n = ''.concat(jS).concat(t.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var o = Fi(e.children),
      a = o.filter(function (x) {
        return x.getAttribute(bc) === t;
      })[0],
      l = lr.getComputedStyle(e, t),
      s = l.getPropertyValue('font-family').match(VS),
      u = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content');
    if (a && !s) return e.removeChild(a), r();
    if (s && c !== 'none' && c !== '') {
      var f = l.getPropertyValue('content'),
        d = ~['Sharp'].indexOf(s[2]) ? Me : Pe,
        p = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(s[2])
          ? Yo[d][s[2].toLowerCase()]
          : WS[d][u],
        g = XE(f),
        v = g.value,
        b = g.isSecondary,
        h = s[0].startsWith('FontAwesome'),
        m = ud(p, v),
        y = m;
      if (h) {
        var C = gE(v);
        C.iconName && C.prefix && ((m = C.iconName), (p = C.prefix));
      }
      if (
        m &&
        !b &&
        (!a || a.getAttribute(rd) !== p || a.getAttribute(id) !== y)
      ) {
        e.setAttribute(n, y), a && e.removeChild(a);
        var T = UE(),
          S = T.extra;
        (S.attributes[bc] = t),
          _c(m, p)
            .then(function (x) {
              var L = fd(
                  H(
                    H({}, T),
                    {},
                    {
                      icons: { main: x, mask: cd() },
                      prefix: p,
                      iconName: y,
                      extra: S,
                      watchable: !0,
                    },
                  ),
                ),
                M = Re.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before'
                ? e.insertBefore(M, e.firstChild)
                : e.appendChild(M),
                (M.outerHTML = L.map(function (z) {
                  return la(z);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function GE(e) {
  return Promise.all([Nh(e, '::before'), Nh(e, '::after')]);
}
function JE(e) {
  return (
    e.parentNode !== document.head &&
    !~BS.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(bc) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function Ah(e) {
  if (zn)
    return new Promise(function (t, n) {
      var r = Fi(e.querySelectorAll('*')).filter(JE).map(GE),
        i = dd.begin('searchPseudoElements');
      Hv(),
        Promise.all(r)
          .then(function () {
            i(), Nc(), t();
          })
          .catch(function () {
            i(), Nc(), n();
          });
    });
}
var ZE = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Ah), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Re : r;
        q.searchPseudoElements && Ah(i);
      };
    },
  },
  Ih = !1,
  e2 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Hv(), (Ih = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Rh(Tc('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          DE();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Ih
            ? Nc()
            : Rh(Tc('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  zh = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var o = i.toLowerCase().split('-'),
          a = o[0],
          l = o.slice(1).join('-');
        if (a && l === 'h') return (r.flipX = !0), r;
        if (a && l === 'v') return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (a) {
          case 'grow':
            r.size = r.size + l;
            break;
          case 'shrink':
            r.size = r.size - l;
            break;
          case 'left':
            r.x = r.x - l;
            break;
          case 'right':
            r.x = r.x + l;
            break;
          case 'up':
            r.y = r.y - l;
            break;
          case 'down':
            r.y = r.y + l;
            break;
          case 'rotate':
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  t2 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return zh(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (n.transform = zh(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          o = n.containerWidth,
          a = n.iconWidth,
          l = { transform: 'translate('.concat(o / 2, ' 256)') },
          s = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          u = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          f = { transform: ''.concat(s, ' ').concat(u, ' ').concat(c) },
          d = { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
          p = { outer: l, inner: f, path: d };
        return {
          tag: 'g',
          attributes: H({}, p.outer),
          children: [
            {
              tag: 'g',
              attributes: H({}, p.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: H(H({}, r.icon.attributes), p.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  su = { x: 0, y: 0, width: '100%', height: '100%' };
function Dh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
function n2(e) {
  return e.tag === 'g' ? e.children : [e];
}
var r2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            o = i
              ? gs(
                  i.split(' ').map(function (a) {
                    return a.trim();
                  }),
                )
              : cd();
          return (
            o.prefix || (o.prefix = sr()),
            (n.mask = o),
            (n.maskId = r.getAttribute('data-fa-mask-id')),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          o = n.main,
          a = n.mask,
          l = n.maskId,
          s = n.transform,
          u = o.width,
          c = o.icon,
          f = a.width,
          d = a.icon,
          p = nE({ transform: s, containerWidth: f, iconWidth: u }),
          g = { tag: 'rect', attributes: H(H({}, su), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(Dh) } : {},
          b = {
            tag: 'g',
            attributes: H({}, p.inner),
            children: [
              Dh(
                H(
                  { tag: c.tag, attributes: H(H({}, c.attributes), p.path) },
                  v,
                ),
              ),
            ],
          },
          h = { tag: 'g', attributes: H({}, p.outer), children: [b] },
          m = 'mask-'.concat(l || Qo()),
          y = 'clip-'.concat(l || Qo()),
          C = {
            tag: 'mask',
            attributes: H(
              H({}, su),
              {},
              {
                id: m,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              },
            ),
            children: [g, h],
          },
          T = {
            tag: 'defs',
            children: [
              { tag: 'clipPath', attributes: { id: y }, children: n2(d) },
              C,
            ],
          };
        return (
          r.push(T, {
            tag: 'rect',
            attributes: H(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(y, ')'),
                mask: 'url(#'.concat(m, ')'),
              },
              su,
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  i2 = {
    provides: function (t) {
      var n = !1;
      lr.matchMedia &&
        (n = lr.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            o = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          r.push({
            tag: 'path',
            attributes: H(
              H({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              },
            ),
          });
          var a = H(H({}, o), {}, { attributeName: 'opacity' }),
            l = {
              tag: 'circle',
              attributes: H(H({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: 'animate',
                  attributes: H(
                    H({}, o),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' },
                  ),
                },
                {
                  tag: 'animate',
                  attributes: H(H({}, a), {}, { values: '1;0;1;1;0;1;' }),
                },
              ),
            r.push(l),
            r.push({
              tag: 'path',
              attributes: H(
                H({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                },
              ),
              children: n
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: H(H({}, a), {}, { values: '1;0;0;0;0;1;' }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: H(
                  H({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  },
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: H(H({}, a), {}, { values: '0;0;1;1;0;0;' }),
                  },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          );
        });
    },
  },
  o2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-symbol'),
            o = i === null ? !1 : i === '' ? !0 : i;
          return (n.symbol = o), n;
        },
      };
    },
  },
  a2 = [oE, WE, YE, qE, KE, ZE, e2, t2, r2, i2, o2];
wE(a2, { mixoutsTo: At });
At.noAuto;
At.config;
At.library;
At.dom;
var Ac = At.parse;
At.findIconDefinition;
At.toHtml;
var l2 = At.icon;
At.layer;
At.text;
At.counter;
var Vv = { exports: {} },
  s2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  u2 = s2,
  c2 = u2;
function Wv() {}
function Yv() {}
Yv.resetWarningCache = Wv;
var f2 = function () {
  function e(r, i, o, a, l, s) {
    if (s !== c2) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Yv,
    resetWarningCache: Wv,
  };
  return (n.PropTypes = n), n;
};
Vv.exports = f2();
var d2 = Vv.exports;
const ce = Ql(d2);
function Mh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mh(Object(n), !0).forEach(function (r) {
          mi(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mh(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function $l(e) {
  '@babel/helpers - typeof';
  return (
    ($l =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    $l(e)
  );
}
function mi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function p2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function h2(e, t) {
  if (e == null) return {};
  var n = p2(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Ic(e) {
  return m2(e) || g2(e) || y2(e) || v2();
}
function m2(e) {
  if (Array.isArray(e)) return zc(e);
}
function g2(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function y2(e, t) {
  if (e) {
    if (typeof e == 'string') return zc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zc(e, t);
  }
}
function zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function v2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w2(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    o = e.bounce,
    a = e.shake,
    l = e.flash,
    s = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    p = e.inverse,
    g = e.border,
    v = e.listItem,
    b = e.flip,
    h = e.size,
    m = e.rotation,
    y = e.pull,
    C =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': o,
        'fa-shake': a,
        'fa-flash': l,
        'fa-spin': s,
        'fa-spin-reverse': c,
        'fa-spin-pulse': u,
        'fa-pulse': f,
        'fa-fw': d,
        'fa-inverse': p,
        'fa-border': g,
        'fa-li': v,
        'fa-flip': b === !0,
        'fa-flip-horizontal': b === 'horizontal' || b === 'both',
        'fa-flip-vertical': b === 'vertical' || b === 'both',
      }),
      mi(t, 'fa-'.concat(h), typeof h < 'u' && h !== null),
      mi(t, 'fa-rotate-'.concat(m), typeof m < 'u' && m !== null && m !== 0),
      mi(t, 'fa-pull-'.concat(y), typeof y < 'u' && y !== null),
      mi(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(C)
    .map(function (T) {
      return C[T] ? T : null;
    })
    .filter(function (T) {
      return T;
    });
}
function x2(e) {
  return (e = e - 0), e === e;
}
function qv(e) {
  return x2(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var k2 = ['style'];
function S2(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function E2(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = qv(n.slice(0, r)),
        o = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[S2(i)] = o) : (t[i] = o), t;
    }, {});
}
function Kv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (s) {
      return Kv(e, s);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u];
        switch (u) {
          case 'class':
            (s.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            s.attrs.style = E2(c);
            break;
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[qv(u)] = c);
        }
        return s;
      },
      { attrs: {} },
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    l = h2(n, k2);
  return (
    (i.attrs.style = hn(hn({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, hn(hn({}, i.attrs), l)].concat(Ic(r)))
  );
}
var Qv = !1;
try {
  Qv = !0;
} catch {}
function b2() {
  if (!Qv && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fh(e) {
  if (e && $l(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (Ac.icon) return Ac.icon(e);
  if (e === null) return null;
  if (e && $l(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function uu(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? mi({}, e, t)
    : {};
}
var jh = {
    border: !1,
    className: '',
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Nr = Gl.forwardRef(function (e, t) {
    var n = hn(hn({}, jh), e),
      r = n.icon,
      i = n.mask,
      o = n.symbol,
      a = n.className,
      l = n.title,
      s = n.titleId,
      u = n.maskId,
      c = Fh(r),
      f = uu('classes', [].concat(Ic(w2(n)), Ic((a || '').split(' ')))),
      d = uu(
        'transform',
        typeof n.transform == 'string'
          ? Ac.transform(n.transform)
          : n.transform,
      ),
      p = uu('mask', Fh(i)),
      g = l2(
        c,
        hn(
          hn(hn(hn({}, f), d), p),
          {},
          { symbol: o, title: l, titleId: s, maskId: u },
        ),
      );
    if (!g) return b2('Could not find icon', c), null;
    var v = g.abstract,
      b = { ref: t };
    return (
      Object.keys(n).forEach(function (h) {
        jh.hasOwnProperty(h) || (b[h] = n[h]);
      }),
      C2(v[0], b)
    );
  });
Nr.displayName = 'FontAwesomeIcon';
Nr.propTypes = {
  beat: ce.bool,
  border: ce.bool,
  beatFade: ce.bool,
  bounce: ce.bool,
  className: ce.string,
  fade: ce.bool,
  flash: ce.bool,
  mask: ce.oneOfType([ce.object, ce.array, ce.string]),
  maskId: ce.string,
  fixedWidth: ce.bool,
  inverse: ce.bool,
  flip: ce.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: ce.oneOfType([ce.object, ce.array, ce.string]),
  listItem: ce.bool,
  pull: ce.oneOf(['right', 'left']),
  pulse: ce.bool,
  rotation: ce.oneOf([0, 90, 180, 270]),
  shake: ce.bool,
  size: ce.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: ce.bool,
  spinPulse: ce.bool,
  spinReverse: ce.bool,
  symbol: ce.oneOfType([ce.bool, ce.string]),
  title: ce.string,
  titleId: ce.string,
  transform: ce.oneOfType([ce.string, ce.object]),
  swapOpacity: ce.bool,
};
var C2 = Kv.bind(null, Gl.createElement);
function P2({ userInfo: e }) {
  const t = '#AFC2D4';
  return Y.jsx('div', {
    className: 'profile-wrapper',
    children: Y.jsxs('div', {
      className: 'profile-container',
      children: [
        Y.jsx('img', { src: e.avatar_url, alt: 'github profile icon' }),
        Y.jsxs('div', {
          className: 'content-wrapper',
          children: [
            Y.jsxs('div', {
              className: 'content',
              children: [Y.jsx('h1', { children: e.name }), e.bio],
            }),
            Y.jsxs('nav', {
              className: 'user-links',
              children: [
                Y.jsx('span', {
                  className: 'link',
                  children: Y.jsx('a', {
                    href: 'https://www.linkedin.com/in/matheus-basso-5a2194223/',
                    children: Y.jsx(Nr, {
                      size: '2x',
                      icon: TS,
                      style: { color: t },
                    }),
                  }),
                }),
                Y.jsx('span', {
                  className: 'link',
                  children: Y.jsxs('a', {
                    href: e.html_url,
                    children: [
                      Y.jsx(Nr, { size: '2x', icon: PS, style: { color: t } }),
                      Y.jsx('p', { children: e.login }),
                    ],
                  }),
                }),
                Y.jsxs('span', {
                  children: [
                    Y.jsx(Nr, { size: '2x', icon: RS, style: { color: t } }),
                    Y.jsx('p', { children: 'matheusbasso@protonmail.com' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Xv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: T2 } = Object.prototype,
  { getPrototypeOf: hd } = Object,
  vs = ((e) => (t) => {
    const n = T2.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ln = (e) => ((e = e.toLowerCase()), (t) => vs(t) === e),
  ws = (e) => (t) => typeof t === e,
  { isArray: ji } = Array,
  Xo = ws('undefined');
function R2(e) {
  return (
    e !== null &&
    !Xo(e) &&
    e.constructor !== null &&
    !Xo(e.constructor) &&
    Wt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Gv = ln('ArrayBuffer');
function O2(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Gv(e.buffer)),
    t
  );
}
const _2 = ws('string'),
  Wt = ws('function'),
  Jv = ws('number'),
  xs = (e) => e !== null && typeof e == 'object',
  L2 = (e) => e === !0 || e === !1,
  cl = (e) => {
    if (vs(e) !== 'object') return !1;
    const t = hd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  N2 = ln('Date'),
  A2 = ln('File'),
  I2 = ln('Blob'),
  z2 = ln('FileList'),
  D2 = (e) => xs(e) && Wt(e.pipe),
  M2 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Wt(e.append) &&
          ((t = vs(e)) === 'formdata' ||
            (t === 'object' &&
              Wt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  F2 = ln('URLSearchParams'),
  [j2, U2, B2, H2] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ln,
  ),
  $2 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function sa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, i;
  if ((typeof e != 'object' && (e = [e]), ji(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = o.length;
    let l;
    for (r = 0; r < a; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Zv(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const e1 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  t1 = (e) => !Xo(e) && e !== e1;
function Dc() {
  const { caseless: e } = (t1(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Zv(t, i)) || i;
      cl(t[o]) && cl(r)
        ? (t[o] = Dc(t[o], r))
        : cl(r)
          ? (t[o] = Dc({}, r))
          : ji(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && sa(arguments[r], n);
  return t;
}
const V2 = (e, t, n, { allOwnKeys: r } = {}) => (
    sa(
      t,
      (i, o) => {
        n && Wt(i) ? (e[o] = Xv(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  W2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Y2 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  q2 = (e, t, n, r) => {
    let i, o, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (a = i[o]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && hd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  K2 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Q2 = (e) => {
    if (!e) return null;
    if (ji(e)) return e;
    let t = e.length;
    if (!Jv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  X2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && hd(Uint8Array)),
  G2 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  J2 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Z2 = ln('HTMLFormElement'),
  eb = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Uh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  tb = ln('RegExp'),
  n1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    sa(n, (i, o) => {
      let a;
      (a = t(i, o, e)) !== !1 && (r[o] = a || i);
    }),
      Object.defineProperties(e, r);
  },
  nb = (e) => {
    n1(e, (t, n) => {
      if (Wt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Wt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  rb = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return ji(e) ? r(e) : r(String(e).split(t)), n;
  },
  ib = () => {},
  ob = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  cu = 'abcdefghijklmnopqrstuvwxyz',
  Bh = '0123456789',
  r1 = { DIGIT: Bh, ALPHA: cu, ALPHA_DIGIT: cu + cu.toUpperCase() + Bh },
  ab = (e = 16, t = r1.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function lb(e) {
  return !!(
    e &&
    Wt(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const sb = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (xs(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[i] = r;
            const o = ji(r) ? [] : {};
            return (
              sa(r, (a, l) => {
                const s = n(a, i + 1);
                !Xo(s) && (o[l] = s);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  ub = ln('AsyncFunction'),
  cb = (e) => e && (xs(e) || Wt(e)) && Wt(e.then) && Wt(e.catch),
  R = {
    isArray: ji,
    isArrayBuffer: Gv,
    isBuffer: R2,
    isFormData: M2,
    isArrayBufferView: O2,
    isString: _2,
    isNumber: Jv,
    isBoolean: L2,
    isObject: xs,
    isPlainObject: cl,
    isReadableStream: j2,
    isRequest: U2,
    isResponse: B2,
    isHeaders: H2,
    isUndefined: Xo,
    isDate: N2,
    isFile: A2,
    isBlob: I2,
    isRegExp: tb,
    isFunction: Wt,
    isStream: D2,
    isURLSearchParams: F2,
    isTypedArray: X2,
    isFileList: z2,
    forEach: sa,
    merge: Dc,
    extend: V2,
    trim: $2,
    stripBOM: W2,
    inherits: Y2,
    toFlatObject: q2,
    kindOf: vs,
    kindOfTest: ln,
    endsWith: K2,
    toArray: Q2,
    forEachEntry: G2,
    matchAll: J2,
    isHTMLForm: Z2,
    hasOwnProperty: Uh,
    hasOwnProp: Uh,
    reduceDescriptors: n1,
    freezeMethods: nb,
    toObjectSet: rb,
    toCamelCase: eb,
    noop: ib,
    toFiniteNumber: ob,
    findKey: Zv,
    global: e1,
    isContextDefined: t1,
    ALPHABET: r1,
    generateString: ab,
    isSpecCompliantForm: lb,
    toJSONObject: sb,
    isAsyncFn: ub,
    isThenable: cb,
  };
function ie(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
R.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const i1 = ie.prototype,
  o1 = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  o1[e] = { value: e };
});
Object.defineProperties(ie, o1);
Object.defineProperty(i1, 'isAxiosError', { value: !0 });
ie.from = (e, t, n, r, i, o) => {
  const a = Object.create(i1);
  return (
    R.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== 'isAxiosError',
    ),
    ie.call(a, e.message, t, n, r, i),
    (a.cause = e),
    (a.name = e.name),
    o && Object.assign(a, o),
    a
  );
};
const fb = null;
function Mc(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function a1(e) {
  return R.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Hh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = a1(i)), !n && o ? '[' + i + ']' : i;
        })
        .join(n ? '.' : '')
    : t;
}
function db(e) {
  return R.isArray(e) && !e.some(Mc);
}
const pb = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ks(e, t, n) {
  if (!R.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = R.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, b) {
        return !R.isUndefined(b[v]);
      },
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    a = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && R.isSpecCompliantForm(t);
  if (!R.isFunction(i)) throw new TypeError('visitor must be a function');
  function u(g) {
    if (g === null) return '';
    if (R.isDate(g)) return g.toISOString();
    if (!s && R.isBlob(g))
      throw new ie('Blob is not supported. Use a Buffer instead.');
    return R.isArrayBuffer(g) || R.isTypedArray(g)
      ? s && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, v, b) {
    let h = g;
    if (g && !b && typeof g == 'object') {
      if (R.endsWith(v, '{}'))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (R.isArray(g) && db(g)) ||
        ((R.isFileList(g) || R.endsWith(v, '[]')) && (h = R.toArray(g)))
      )
        return (
          (v = a1(v)),
          h.forEach(function (y, C) {
            !(R.isUndefined(y) || y === null) &&
              t.append(
                a === !0 ? Hh([v], C, o) : a === null ? v : v + '[]',
                u(y),
              );
          }),
          !1
        );
    }
    return Mc(g) ? !0 : (t.append(Hh(b, v, o), u(g)), !1);
  }
  const f = [],
    d = Object.assign(pb, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Mc,
    });
  function p(g, v) {
    if (!R.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + v.join('.'));
      f.push(g),
        R.forEach(g, function (h, m) {
          (!(R.isUndefined(h) || h === null) &&
            i.call(t, h, R.isString(m) ? m.trim() : m, v, d)) === !0 &&
            p(h, v ? v.concat(m) : [m]);
        }),
        f.pop();
    }
  }
  if (!R.isObject(e)) throw new TypeError('data must be an object');
  return p(e), t;
}
function $h(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function md(e, t) {
  (this._pairs = []), e && ks(e, this, t);
}
const l1 = md.prototype;
l1.append = function (t, n) {
  this._pairs.push([t, n]);
};
l1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, $h);
      }
    : $h;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1]);
    }, '')
    .join('&');
};
function hb(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function s1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || hb,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = R.isURLSearchParams(t) ? t.toString() : new md(t, n).toString(r)),
    o)
  ) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class Vh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const u1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  mb = typeof URLSearchParams < 'u' ? URLSearchParams : md,
  gb = typeof FormData < 'u' ? FormData : null,
  yb = typeof Blob < 'u' ? Blob : null,
  vb = {
    isBrowser: !0,
    classes: { URLSearchParams: mb, FormData: gb, Blob: yb },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  gd = typeof window < 'u' && typeof document < 'u',
  wb = ((e) => gd && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  xb =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  kb = (gd && window.location.href) || 'http://localhost',
  Sb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: gd,
        hasStandardBrowserEnv: wb,
        hasStandardBrowserWebWorkerEnv: xb,
        origin: kb,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  on = { ...Sb, ...vb };
function Eb(e, t) {
  return ks(
    e,
    new on.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return on.isNode && R.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function bb(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function Cb(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function c1(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    if (a === '__proto__') return !0;
    const l = Number.isFinite(+a),
      s = o >= n.length;
    return (
      (a = !a && R.isArray(i) ? i.length : a),
      s
        ? (R.hasOwnProp(i, a) ? (i[a] = [i[a], r]) : (i[a] = r), !l)
        : ((!i[a] || !R.isObject(i[a])) && (i[a] = []),
          t(n, r, i[a], o) && R.isArray(i[a]) && (i[a] = Cb(i[a])),
          !l)
    );
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {};
    return (
      R.forEachEntry(e, (r, i) => {
        t(bb(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Pb(e, t, n) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const ua = {
  transitional: u1,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        i = r.indexOf('application/json') > -1,
        o = R.isObject(t);
      if ((o && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t)))
        return i ? JSON.stringify(c1(t)) : t;
      if (
        R.isArrayBuffer(t) ||
        R.isBuffer(t) ||
        R.isStream(t) ||
        R.isFile(t) ||
        R.isBlob(t) ||
        R.isReadableStream(t)
      )
        return t;
      if (R.isArrayBufferView(t)) return t.buffer;
      if (R.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Eb(t, this.formSerializer).toString();
        if ((l = R.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return ks(
            l ? { 'files[]': t } : t,
            s && new s(),
            this.formSerializer,
          );
        }
      }
      return o || i ? (n.setContentType('application/json', !1), Pb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ua.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === 'json';
      if (R.isResponse(t) || R.isReadableStream(t)) return t;
      if (t && R.isString(t) && ((r && !this.responseType) || i)) {
        const a = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === 'SyntaxError'
              ? ie.from(l, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: on.classes.FormData, Blob: on.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
R.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ua.headers[e] = {};
});
const Tb = R.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Rb = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(`
`)
          .forEach(function (a) {
            (i = a.indexOf(':')),
              (n = a.substring(0, i).trim().toLowerCase()),
              (r = a.substring(i + 1).trim()),
              !(!n || (t[n] && Tb[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Wh = Symbol('internals');
function ro(e) {
  return e && String(e).trim().toLowerCase();
}
function fl(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(fl) : String(e);
}
function Ob(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const _b = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fu(e, t, n, r, i) {
  if (R.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!R.isString(t))) {
    if (R.isString(r)) return t.indexOf(r) !== -1;
    if (R.isRegExp(r)) return r.test(t);
  }
}
function Lb(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Nb(e, t) {
  const n = R.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, a) {
        return this[r].call(this, t, i, o, a);
      },
      configurable: !0,
    });
  });
}
class Et {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, s, u) {
      const c = ro(s);
      if (!c) throw new Error('header name must be a non-empty string');
      const f = R.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || s] = fl(l));
    }
    const a = (l, s) => R.forEach(l, (u, c) => o(u, c, s));
    if (R.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (R.isString(t) && (t = t.trim()) && !_b(t)) a(Rb(t), n);
    else if (R.isHeaders(t)) for (const [l, s] of t.entries()) o(s, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ro(t)), t)) {
      const r = R.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Ob(i);
        if (R.isFunction(n)) return n.call(this, i, r);
        if (R.isRegExp(n)) return n.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = ro(t)), t)) {
      const r = R.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (((a = ro(a)), a)) {
        const l = R.findKey(r, a);
        l && (!n || fu(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return R.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || fu(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      R.forEach(this, (i, o) => {
        const a = R.findKey(r, o);
        if (a) {
          (n[a] = fl(i)), delete n[o];
          return;
        }
        const l = t ? Lb(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = fl(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      R.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && R.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, n]) => t + ': ' + n)
      .join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Wh] = this[Wh] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(a) {
      const l = ro(a);
      r[l] || (Nb(i, a), (r[l] = !0));
    }
    return R.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Et.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
R.reduceDescriptors(Et.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
R.freezeMethods(Et);
function du(e, t) {
  const n = this || ua,
    r = t || n,
    i = Et.from(r.headers);
  let o = r.data;
  return (
    R.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function f1(e) {
  return !!(e && e.__CANCEL__);
}
function Ui(e, t, n) {
  ie.call(this, e ?? 'canceled', ie.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
R.inherits(Ui, ie, { __CANCEL__: !0 });
function d1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ie(
          'Request failed with status code ' + n.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function Ab(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Ib(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[o];
      a || (a = u), (n[i] = s), (r[i] = u);
      let f = o,
        d = 0;
      for (; f !== i; ) (d += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - a < t)) return;
      const p = c && u - c;
      return p ? Math.round((d * 1e3) / p) : void 0;
    }
  );
}
function zb(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const a = this === !0,
      l = Date.now();
    if (a || l - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n),
      ));
  };
}
const Vl = (e, t, n = 3) => {
    let r = 0;
    const i = Ib(50, 250);
    return zb((o) => {
      const a = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        s = a - r,
        u = i(s),
        c = a <= l;
      r = a;
      const f = {
        loaded: a,
        total: l,
        progress: l ? a / l : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && l && c ? (l - a) / u : void 0,
        event: o,
        lengthComputable: l != null,
      };
      (f[t ? 'download' : 'upload'] = !0), e(f);
    }, n);
  },
  Db = on.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a');
        let r;
        function i(o) {
          let a = o;
          return (
            t && (n.setAttribute('href', a), (a = n.href)),
            n.setAttribute('href', a),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (a) {
            const l = R.isString(a) ? i(a) : a;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Mb = on.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const a = [e + '=' + encodeURIComponent(t)];
          R.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
            R.isString(r) && a.push('path=' + r),
            R.isString(i) && a.push('domain=' + i),
            o === !0 && a.push('secure'),
            (document.cookie = a.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Fb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jb(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function p1(e, t) {
  return e && !Fb(t) ? jb(e, t) : t;
}
const Yh = (e) => (e instanceof Et ? { ...e } : e);
function Hr(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return R.isPlainObject(u) && R.isPlainObject(c)
      ? R.merge.call({ caseless: f }, u, c)
      : R.isPlainObject(c)
        ? R.merge({}, c)
        : R.isArray(c)
          ? c.slice()
          : c;
  }
  function i(u, c, f) {
    if (R.isUndefined(c)) {
      if (!R.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function o(u, c) {
    if (!R.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (R.isUndefined(c)) {
      if (!R.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, c) => i(Yh(u), Yh(c), !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = s[c] || i,
        d = f(e[c], t[c], c);
      (R.isUndefined(d) && f !== l) || (n[c] = d);
    }),
    n
  );
}
const h1 = (e) => {
    const t = Hr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: a,
      auth: l,
    } = t;
    (t.headers = a = Et.from(a)),
      (t.url = s1(p1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        a.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : ''),
            ),
        );
    let s;
    if (R.isFormData(n)) {
      if (on.hasStandardBrowserEnv || on.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if ((s = a.getContentType()) !== !1) {
        const [u, ...c] = s
          ? s
              .split(';')
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        a.setContentType([u || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      on.hasStandardBrowserEnv &&
      (r && R.isFunction(r) && (r = r(t)), r || (r !== !1 && Db(t.url)))
    ) {
      const u = i && o && Mb.read(o);
      u && a.set(i, u);
    }
    return t;
  },
  Ub = typeof XMLHttpRequest < 'u',
  Bb =
    Ub &&
    function (e) {
      return new Promise(function (n, r) {
        const i = h1(e);
        let o = i.data;
        const a = Et.from(i.headers).normalize();
        let { responseType: l } = i,
          s;
        function u() {
          i.cancelToken && i.cancelToken.unsubscribe(s),
            i.signal && i.signal.removeEventListener('abort', s);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function f() {
          if (!c) return;
          const p = Et.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
            ),
            v = {
              data:
                !l || l === 'text' || l === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: p,
              config: e,
              request: c,
            };
          d1(
            function (h) {
              n(h), u();
            },
            function (h) {
              r(h), u();
            },
            v,
          ),
            (c = null);
        }
        'onloadend' in c
          ? (c.onloadend = f)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f);
            }),
          (c.onabort = function () {
            c &&
              (r(new ie('Request aborted', ie.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new ie('Network Error', ie.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const v = i.transitional || u1;
            i.timeoutErrorMessage && (g = i.timeoutErrorMessage),
              r(
                new ie(
                  g,
                  v.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  i,
                  c,
                ),
              ),
              (c = null);
          }),
          o === void 0 && a.setContentType(null),
          'setRequestHeader' in c &&
            R.forEach(a.toJSON(), function (g, v) {
              c.setRequestHeader(v, g);
            }),
          R.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          l && l !== 'json' && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Vl(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Vl(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((s = (p) => {
              c &&
                (r(!p || p.type ? new Ui(null, e, c) : p),
                c.abort(),
                (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(s),
            i.signal &&
              (i.signal.aborted ? s() : i.signal.addEventListener('abort', s)));
        const d = Ab(i.url);
        if (d && on.protocols.indexOf(d) === -1) {
          r(new ie('Unsupported protocol ' + d + ':', ie.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Hb = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (s) {
      if (!r) {
        (r = !0), a();
        const u = s instanceof Error ? s : this.reason;
        n.abort(
          u instanceof ie ? u : new Ui(u instanceof Error ? u.message : u),
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new ie(`timeout ${t} of ms exceeded`, ie.ETIMEDOUT));
      }, t);
    const a = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((s) => {
          s &&
            (s.removeEventListener
              ? s.removeEventListener('abort', i)
              : s.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((s) => s && s.addEventListener && s.addEventListener('abort', i));
    const { signal: l } = n;
    return (
      (l.unsubscribe = a),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  $b = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Vb = async function* (e, t, n) {
    for await (const r of e)
      yield* $b(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  qh = (e, t, n, r, i) => {
    const o = Vb(e, t, i);
    let a = 0;
    return new ReadableStream(
      {
        type: 'bytes',
        async pull(l) {
          const { done: s, value: u } = await o.next();
          if (s) {
            l.close(), r();
            return;
          }
          let c = u.byteLength;
          n && n((a += c)), l.enqueue(new Uint8Array(u));
        },
        cancel(l) {
          return r(l), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Kh = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Ss =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  m1 = Ss && typeof ReadableStream == 'function',
  Fc =
    Ss &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Wb =
    m1 &&
    (() => {
      let e = !1;
      const t = new Request(on.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    })(),
  Qh = 64 * 1024,
  jc =
    m1 &&
    !!(() => {
      try {
        return R.isReadableStream(new Response('').body);
      } catch {}
    })(),
  Wl = { stream: jc && ((e) => e.body) };
Ss &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Wl[t] &&
        (Wl[t] = R.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ie(
                `Response type '${t}' is not supported`,
                ie.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const Yb = async (e) => {
    if (e == null) return 0;
    if (R.isBlob(e)) return e.size;
    if (R.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (R.isArrayBufferView(e)) return e.byteLength;
    if ((R.isURLSearchParams(e) && (e = e + ''), R.isString(e)))
      return (await Fc(e)).byteLength;
  },
  qb = async (e, t) => {
    const n = R.toFiniteNumber(e.getContentLength());
    return n ?? Yb(t);
  },
  Kb =
    Ss &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: a,
        onDownloadProgress: l,
        onUploadProgress: s,
        responseType: u,
        headers: c,
        withCredentials: f = 'same-origin',
        fetchOptions: d,
      } = h1(e);
      u = u ? (u + '').toLowerCase() : 'text';
      let [p, g] = i || o || a ? Hb([i, o], a) : [],
        v,
        b;
      const h = () => {
        !v &&
          setTimeout(() => {
            p && p.unsubscribe();
          }),
          (v = !0);
      };
      let m;
      try {
        if (
          s &&
          Wb &&
          n !== 'get' &&
          n !== 'head' &&
          (m = await qb(c, r)) !== 0
        ) {
          let S = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            x;
          R.isFormData(r) &&
            (x = S.headers.get('content-type')) &&
            c.setContentType(x),
            S.body && (r = qh(S.body, Qh, Kh(m, Vl(s)), null, Fc));
        }
        R.isString(f) || (f = f ? 'cors' : 'omit'),
          (b = new Request(t, {
            ...d,
            signal: p,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: 'half',
            withCredentials: f,
          }));
        let y = await fetch(b);
        const C = jc && (u === 'stream' || u === 'response');
        if (jc && (l || C)) {
          const S = {};
          ['status', 'statusText', 'headers'].forEach((L) => {
            S[L] = y[L];
          });
          const x = R.toFiniteNumber(y.headers.get('content-length'));
          y = new Response(
            qh(y.body, Qh, l && Kh(x, Vl(l, !0)), C && h, Fc),
            S,
          );
        }
        u = u || 'text';
        let T = await Wl[R.findKey(Wl, u) || 'text'](y, e);
        return (
          !C && h(),
          g && g(),
          await new Promise((S, x) => {
            d1(S, x, {
              data: T,
              headers: Et.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: b,
            });
          })
        );
      } catch (y) {
        throw (
          (h(),
          y && y.name === 'TypeError' && /fetch/i.test(y.message)
            ? Object.assign(new ie('Network Error', ie.ERR_NETWORK, e, b), {
                cause: y.cause || y,
              })
            : ie.from(y, y && y.code, e, b))
        );
      }
    }),
  Uc = { http: fb, xhr: Bb, fetch: Kb };
R.forEach(Uc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Xh = (e) => `- ${e}`,
  Qb = (e) => R.isFunction(e) || e === null || e === !1,
  g1 = {
    getAdapter: (e) => {
      e = R.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let a;
        if (
          ((r = n),
          !Qb(n) && ((r = Uc[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ie(`Unknown adapter '${a}'`);
        if (r) break;
        i[a || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, s]) =>
            `adapter ${l} ` +
            (s === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let a = t
          ? o.length > 1
            ? `since :
` +
              o.map(Xh).join(`
`)
            : ' ' + Xh(o[0])
          : 'as no adapter specified';
        throw new ie(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: Uc,
  };
function pu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ui(null, e);
}
function Gh(e) {
  return (
    pu(e),
    (e.headers = Et.from(e.headers)),
    (e.data = du.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    g1
      .getAdapter(e.adapter || ua.adapter)(e)
      .then(
        function (r) {
          return (
            pu(e),
            (r.data = du.call(e, e.transformResponse, r)),
            (r.headers = Et.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            f1(r) ||
              (pu(e),
              r &&
                r.response &&
                ((r.response.data = du.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = Et.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const y1 = '1.7.2',
  yd = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    yd[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Jh = {};
yd.transitional = function (t, n, r) {
  function i(o, a) {
    return (
      '[Axios v' +
      y1 +
      "] Transitional option '" +
      o +
      "'" +
      a +
      (r ? '. ' + r : '')
    );
  }
  return (o, a, l) => {
    if (t === !1)
      throw new ie(
        i(a, ' has been removed' + (n ? ' in ' + n : '')),
        ie.ERR_DEPRECATED,
      );
    return (
      n &&
        !Jh[a] &&
        ((Jh[a] = !0),
        console.warn(
          i(
            a,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(o, a, l) : !0
    );
  };
};
function Xb(e, t, n) {
  if (typeof e != 'object')
    throw new ie('options must be an object', ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      a = t[o];
    if (a) {
      const l = e[o],
        s = l === void 0 || a(l, o, e);
      if (s !== !0)
        throw new ie('option ' + o + ' must be ' + s, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ie('Unknown option ' + o, ie.ERR_BAD_OPTION);
  }
}
const Bc = { assertOptions: Xb, validators: yd },
  Hn = Bc.validators;
class Ar {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Vh(), response: new Vh() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Hr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Bc.assertOptions(
        r,
        {
          silentJSONParsing: Hn.transitional(Hn.boolean),
          forcedJSONParsing: Hn.transitional(Hn.boolean),
          clarifyTimeoutError: Hn.transitional(Hn.boolean),
        },
        !1,
      ),
      i != null &&
        (R.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Bc.assertOptions(
              i,
              { encode: Hn.function, serialize: Hn.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let a = o && R.merge(o.common, o[n.method]);
    o &&
      R.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (g) => {
          delete o[g];
        },
      ),
      (n.headers = Et.concat(a, o));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      d;
    if (!s) {
      const g = [Gh.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, u),
          d = g.length,
          c = Promise.resolve(n);
        f < d;
      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    d = l.length;
    let p = n;
    for (f = 0; f < d; ) {
      const g = l[f++],
        v = l[f++];
      try {
        p = g(p);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      c = Gh.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Hr(this.defaults, t);
    const n = p1(t.baseURL, t.url);
    return s1(n, t.params, t.paramsSerializer);
  }
}
R.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ar.prototype[t] = function (n, r) {
    return this.request(
      Hr(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
R.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, a, l) {
      return this.request(
        Hr(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: a,
        }),
      );
    };
  }
  (Ar.prototype[t] = n()), (Ar.prototype[t + 'Form'] = n(!0));
});
class vd {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const a = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (a.cancel = function () {
            r.unsubscribe(o);
          }),
          a
        );
      }),
      t(function (o, a, l) {
        r.reason || ((r.reason = new Ui(o, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new vd(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function Gb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Jb(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Hc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Hc).forEach(([e, t]) => {
  Hc[t] = e;
});
function v1(e) {
  const t = new Ar(e),
    n = Xv(Ar.prototype.request, t);
  return (
    R.extend(n, Ar.prototype, t, { allOwnKeys: !0 }),
    R.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return v1(Hr(e, i));
    }),
    n
  );
}
const Ue = v1(ua);
Ue.Axios = Ar;
Ue.CanceledError = Ui;
Ue.CancelToken = vd;
Ue.isCancel = f1;
Ue.VERSION = y1;
Ue.toFormData = ks;
Ue.AxiosError = ie;
Ue.Cancel = Ue.CanceledError;
Ue.all = function (t) {
  return Promise.all(t);
};
Ue.spread = Gb;
Ue.isAxiosError = Jb;
Ue.mergeConfig = Hr;
Ue.AxiosHeaders = Et;
Ue.formToJSON = (e) => c1(R.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = g1.getAdapter;
Ue.HttpStatusCode = Hc;
Ue.default = Ue;
const w1 = 'https://api.github.com';
async function Zb(e) {
  return (await Ue.get(`${w1}/users/${e}`)).data;
}
async function eC(e) {
  const t = `repo:${e}`,
    n = await Ue.get(`${w1}/search/issues`, { params: { q: t } });
  return console.log(n), n.data.items;
}
const tC = (e) => {
    const [t, n] = A.useState(),
      [r, i] = A.useState(!0);
    async function o() {
      try {
        const a = await eC(e);
        n(a);
      } catch {
        throw new Error();
      } finally {
        i(!1);
      }
    }
    return (
      A.useEffect(() => {
        o();
      }, []),
      { issueList: t, isLoading: r }
    );
  },
  nC = (e) => {
    const [t, n] = A.useState(),
      [r, i] = A.useState(!0);
    async function o() {
      try {
        const a = await Zb(e);
        console.log(a), n(a);
      } catch {
        throw new Error();
      } finally {
        i(!1);
      }
    }
    return (
      A.useEffect(() => {
        o();
      }, []),
      { profileData: t, isLoading: r }
    );
  };
function rC() {
  const e = 'MTBasso',
    { profileData: t, isLoading: n } = nC(e),
    { issueList: r } = tC(`${e}/issues`);
  return !n && t
    ? Y.jsxs('div', {
        className: 'home-wrapper',
        children: [Y.jsx(P2, { userInfo: t }), r && Y.jsx(bS, { items: r })],
      })
    : Y.jsx('h1', { children: 'Loading...' });
}
function iC(e, t) {
  const n = {};
  return (e[e.length - 1] === '' ? [...e, ''] : e)
    .join((n.padRight ? ' ' : '') + ',' + (n.padLeft === !1 ? '' : ' '))
    .trim();
}
const oC = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  aC = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  lC = {};
function Zh(e, t) {
  return (lC.jsx ? aC : oC).test(e);
}
const sC = /[ \t\n\f\r]/g;
function uC(e) {
  return typeof e == 'object' ? (e.type === 'text' ? em(e.value) : !1) : em(e);
}
function em(e) {
  return e.replace(sC, '') === '';
}
class ca {
  constructor(t, n, r) {
    (this.property = t), (this.normal = n), r && (this.space = r);
  }
}
ca.prototype.property = {};
ca.prototype.normal = {};
ca.prototype.space = null;
function x1(e, t) {
  const n = {},
    r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new ca(n, r, t);
}
function $c(e) {
  return e.toLowerCase();
}
class Kt {
  constructor(t, n) {
    (this.property = t), (this.attribute = n);
  }
}
Kt.prototype.space = null;
Kt.prototype.boolean = !1;
Kt.prototype.booleanish = !1;
Kt.prototype.overloadedBoolean = !1;
Kt.prototype.number = !1;
Kt.prototype.commaSeparated = !1;
Kt.prototype.spaceSeparated = !1;
Kt.prototype.commaOrSpaceSeparated = !1;
Kt.prototype.mustUseProperty = !1;
Kt.prototype.defined = !1;
let cC = 0;
const re = Yr(),
  He = Yr(),
  k1 = Yr(),
  D = Yr(),
  xe = Yr(),
  Ei = Yr(),
  Ct = Yr();
function Yr() {
  return 2 ** ++cC;
}
const Vc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: re,
        booleanish: He,
        commaOrSpaceSeparated: Ct,
        commaSeparated: Ei,
        number: D,
        overloadedBoolean: k1,
        spaceSeparated: xe,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  hu = Object.keys(Vc);
class wd extends Kt {
  constructor(t, n, r, i) {
    let o = -1;
    if ((super(t, n), tm(this, 'space', i), typeof r == 'number'))
      for (; ++o < hu.length; ) {
        const a = hu[o];
        tm(this, hu[o], (r & Vc[a]) === Vc[a]);
      }
  }
}
wd.prototype.defined = !0;
function tm(e, t, n) {
  n && (e[t] = n);
}
const fC = {}.hasOwnProperty;
function Bi(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (fC.call(e.properties, r)) {
      const i = e.properties[r],
        o = new wd(r, e.transform(e.attributes || {}, r), i, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (o.mustUseProperty = !0),
        (t[r] = o),
        (n[$c(r)] = r),
        (n[$c(o.attribute)] = r);
    }
  return new ca(t, n, e.space);
}
const S1 = Bi({
    space: 'xlink',
    transform(e, t) {
      return 'xlink:' + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  E1 = Bi({
    space: 'xml',
    transform(e, t) {
      return 'xml:' + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function b1(e, t) {
  return t in e ? e[t] : t;
}
function C1(e, t) {
  return b1(e, t.toLowerCase());
}
const P1 = Bi({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: C1,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  T1 = Bi({
    transform(e, t) {
      return t === 'role' ? t : 'aria-' + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: He,
      ariaAutoComplete: null,
      ariaBusy: He,
      ariaChecked: He,
      ariaColCount: D,
      ariaColIndex: D,
      ariaColSpan: D,
      ariaControls: xe,
      ariaCurrent: null,
      ariaDescribedBy: xe,
      ariaDetails: null,
      ariaDisabled: He,
      ariaDropEffect: xe,
      ariaErrorMessage: null,
      ariaExpanded: He,
      ariaFlowTo: xe,
      ariaGrabbed: He,
      ariaHasPopup: null,
      ariaHidden: He,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: xe,
      ariaLevel: D,
      ariaLive: null,
      ariaModal: He,
      ariaMultiLine: He,
      ariaMultiSelectable: He,
      ariaOrientation: null,
      ariaOwns: xe,
      ariaPlaceholder: null,
      ariaPosInSet: D,
      ariaPressed: He,
      ariaReadOnly: He,
      ariaRelevant: null,
      ariaRequired: He,
      ariaRoleDescription: xe,
      ariaRowCount: D,
      ariaRowIndex: D,
      ariaRowSpan: D,
      ariaSelected: He,
      ariaSetSize: D,
      ariaSort: null,
      ariaValueMax: D,
      ariaValueMin: D,
      ariaValueNow: D,
      ariaValueText: null,
      role: null,
    },
  }),
  dC = Bi({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: C1,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Ei,
      acceptCharset: xe,
      accessKey: xe,
      action: null,
      allow: null,
      allowFullScreen: re,
      allowPaymentRequest: re,
      allowUserMedia: re,
      alt: null,
      as: null,
      async: re,
      autoCapitalize: null,
      autoComplete: xe,
      autoFocus: re,
      autoPlay: re,
      blocking: xe,
      capture: null,
      charSet: null,
      checked: re,
      cite: null,
      className: xe,
      cols: D,
      colSpan: null,
      content: null,
      contentEditable: He,
      controls: re,
      controlsList: xe,
      coords: D | Ei,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: re,
      defer: re,
      dir: null,
      dirName: null,
      disabled: re,
      download: k1,
      draggable: He,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: re,
      formTarget: null,
      headers: xe,
      height: D,
      hidden: re,
      high: D,
      href: null,
      hrefLang: null,
      htmlFor: xe,
      httpEquiv: xe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: re,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: re,
      itemId: null,
      itemProp: xe,
      itemRef: xe,
      itemScope: re,
      itemType: xe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: re,
      low: D,
      manifest: null,
      max: null,
      maxLength: D,
      media: null,
      method: null,
      min: null,
      minLength: D,
      multiple: re,
      muted: re,
      name: null,
      nonce: null,
      noModule: re,
      noValidate: re,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: re,
      optimum: D,
      pattern: null,
      ping: xe,
      placeholder: null,
      playsInline: re,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: re,
      referrerPolicy: null,
      rel: xe,
      required: re,
      reversed: re,
      rows: D,
      rowSpan: D,
      sandbox: xe,
      scope: null,
      scoped: re,
      seamless: re,
      selected: re,
      shadowRootClonable: re,
      shadowRootDelegatesFocus: re,
      shadowRootMode: null,
      shape: null,
      size: D,
      sizes: null,
      slot: null,
      span: D,
      spellCheck: He,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: D,
      step: null,
      style: null,
      tabIndex: D,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: re,
      useMap: null,
      value: He,
      width: D,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: xe,
      axis: null,
      background: null,
      bgColor: null,
      border: D,
      borderColor: null,
      bottomMargin: D,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: re,
      declare: re,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: D,
      leftMargin: D,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: D,
      marginWidth: D,
      noResize: re,
      noHref: re,
      noShade: re,
      noWrap: re,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: D,
      rules: null,
      scheme: null,
      scrolling: He,
      standby: null,
      summary: null,
      text: null,
      topMargin: D,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: D,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: re,
      disableRemotePlayback: re,
      prefix: null,
      property: null,
      results: D,
      security: null,
      unselectable: null,
    },
  }),
  pC = Bi({
    space: 'svg',
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    transform: b1,
    properties: {
      about: Ct,
      accentHeight: D,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: D,
      amplitude: D,
      arabicForm: null,
      ascent: D,
      attributeName: null,
      attributeType: null,
      azimuth: D,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: D,
      by: null,
      calcMode: null,
      capHeight: D,
      className: xe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: D,
      diffuseConstant: D,
      direction: null,
      display: null,
      dur: null,
      divisor: D,
      dominantBaseline: null,
      download: re,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: D,
      enableBackground: null,
      end: null,
      event: null,
      exponent: D,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: D,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Ei,
      g2: Ei,
      glyphName: Ei,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: D,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: D,
      horizOriginX: D,
      horizOriginY: D,
      id: null,
      ideographic: D,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: D,
      k: D,
      k1: D,
      k2: D,
      k3: D,
      k4: D,
      kernelMatrix: Ct,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: D,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: D,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: D,
      overlineThickness: D,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: D,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: xe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: D,
      pointsAtY: D,
      pointsAtZ: D,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ct,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ct,
      rev: Ct,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ct,
      requiredFeatures: Ct,
      requiredFonts: Ct,
      requiredFormats: Ct,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: D,
      specularExponent: D,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: D,
      strikethroughThickness: D,
      string: null,
      stroke: null,
      strokeDashArray: Ct,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: D,
      strokeOpacity: D,
      strokeWidth: null,
      style: null,
      surfaceScale: D,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ct,
      tabIndex: D,
      tableValues: null,
      target: null,
      targetX: D,
      targetY: D,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ct,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: D,
      underlineThickness: D,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: D,
      values: null,
      vAlphabetic: D,
      vMathematical: D,
      vectorEffect: null,
      vHanging: D,
      vIdeographic: D,
      version: null,
      vertAdvY: D,
      vertOriginX: D,
      vertOriginY: D,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: D,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  hC = /^data[-\w.:]+$/i,
  nm = /-[a-z]/g,
  mC = /[A-Z]/g;
function gC(e, t) {
  const n = $c(t);
  let r = t,
    i = Kt;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === 'data' && hC.test(t)) {
    if (t.charAt(4) === '-') {
      const o = t.slice(5).replace(nm, vC);
      r = 'data' + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!nm.test(o)) {
        let a = o.replace(mC, yC);
        a.charAt(0) !== '-' && (a = '-' + a), (t = 'data' + a);
      }
    }
    i = wd;
  }
  return new i(r, t);
}
function yC(e) {
  return '-' + e.toLowerCase();
}
function vC(e) {
  return e.charAt(1).toUpperCase();
}
const wC = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  xC = x1([E1, S1, P1, T1, dC], 'html'),
  xd = x1([E1, S1, P1, T1, pC], 'svg');
function kC(e) {
  return e.join(' ').trim();
}
var R1 = {},
  rm = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  SC = /\n/g,
  EC = /^\s*/,
  bC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  CC = /^:\s*/,
  PC = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  TC = /^[;\s]*/,
  RC = /^\s+|\s+$/g,
  OC = `
`,
  im = '/',
  om = '*',
  Sr = '',
  _C = 'comment',
  LC = 'declaration',
  NC = function (e, t) {
    if (typeof e != 'string')
      throw new TypeError('First argument must be a string');
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(g) {
      var v = g.match(SC);
      v && (n += v.length);
      var b = g.lastIndexOf(OC);
      r = ~b ? g.length - b : r + g.length;
    }
    function o() {
      var g = { line: n, column: r };
      return function (v) {
        return (v.position = new a(g)), u(), v;
      };
    }
    function a(g) {
      (this.start = g),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    a.prototype.content = e;
    function l(g) {
      var v = new Error(t.source + ':' + n + ':' + r + ': ' + g);
      if (
        ((v.reason = g),
        (v.filename = t.source),
        (v.line = n),
        (v.column = r),
        (v.source = e),
        !t.silent)
      )
        throw v;
    }
    function s(g) {
      var v = g.exec(e);
      if (v) {
        var b = v[0];
        return i(b), (e = e.slice(b.length)), v;
      }
    }
    function u() {
      s(EC);
    }
    function c(g) {
      var v;
      for (g = g || []; (v = f()); ) v !== !1 && g.push(v);
      return g;
    }
    function f() {
      var g = o();
      if (!(im != e.charAt(0) || om != e.charAt(1))) {
        for (
          var v = 2;
          Sr != e.charAt(v) && (om != e.charAt(v) || im != e.charAt(v + 1));
        )
          ++v;
        if (((v += 2), Sr === e.charAt(v - 1)))
          return l('End of comment missing');
        var b = e.slice(2, v - 2);
        return (
          (r += 2),
          i(b),
          (e = e.slice(v)),
          (r += 2),
          g({ type: _C, comment: b })
        );
      }
    }
    function d() {
      var g = o(),
        v = s(bC);
      if (v) {
        if ((f(), !s(CC))) return l("property missing ':'");
        var b = s(PC),
          h = g({
            type: LC,
            property: am(v[0].replace(rm, Sr)),
            value: b ? am(b[0].replace(rm, Sr)) : Sr,
          });
        return s(TC), h;
      }
    }
    function p() {
      var g = [];
      c(g);
      for (var v; (v = d()); ) v !== !1 && (g.push(v), c(g));
      return g;
    }
    return u(), p();
  };
function am(e) {
  return e ? e.replace(RC, Sr) : Sr;
}
var AC =
  (Dd && Dd.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(R1, '__esModule', { value: !0 });
var IC = AC(NC);
function zC(e, t) {
  var n = null;
  if (!e || typeof e != 'string') return n;
  var r = (0, IC.default)(e),
    i = typeof t == 'function';
  return (
    r.forEach(function (o) {
      if (o.type === 'declaration') {
        var a = o.property,
          l = o.value;
        i ? t(a, l, o) : l && ((n = n || {}), (n[a] = l));
      }
    }),
    n
  );
}
var lm = (R1.default = zC);
const DC = lm.default || lm,
  O1 = _1('end'),
  kd = _1('start');
function _1(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == 'number' &&
      r.line > 0 &&
      typeof r.column == 'number' &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == 'number' && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function MC(e) {
  const t = kd(e),
    n = O1(e);
  if (t && n) return { start: t, end: n };
}
function bo(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
      ? sm(e.position)
      : 'start' in e || 'end' in e
        ? sm(e)
        : 'line' in e || 'column' in e
          ? Wc(e)
          : '';
}
function Wc(e) {
  return um(e && e.line) + ':' + um(e && e.column);
}
function sm(e) {
  return Wc(e && e.start) + '-' + Wc(e && e.end);
}
function um(e) {
  return e && typeof e == 'number' ? e : 1;
}
class ct extends Error {
  constructor(t, n, r) {
    super(), typeof n == 'string' && ((r = n), (n = void 0));
    let i = '',
      o = {},
      a = !1;
    if (
      (n &&
        ('line' in n && 'column' in n
          ? (o = { place: n })
          : 'start' in n && 'end' in n
            ? (o = { place: n })
            : 'type' in n
              ? (o = { ancestors: [n], place: n.position })
              : (o = { ...n })),
      typeof t == 'string'
        ? (i = t)
        : !o.cause && t && ((a = !0), (i = t.message), (o.cause = t)),
      !o.ruleId && !o.source && typeof r == 'string')
    ) {
      const s = r.indexOf(':');
      s === -1
        ? (o.ruleId = r)
        : ((o.source = r.slice(0, s)), (o.ruleId = r.slice(s + 1)));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const l = o.place && 'start' in o.place ? o.place.start : o.place;
    (this.ancestors = o.ancestors || void 0),
      (this.cause = o.cause || void 0),
      (this.column = l ? l.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = l ? l.line : void 0),
      (this.name = bo(o.place) || '1:1'),
      (this.place = o.place || void 0),
      (this.reason = this.message),
      (this.ruleId = o.ruleId || void 0),
      (this.source = o.source || void 0),
      (this.stack =
        a && o.cause && typeof o.cause.stack == 'string' ? o.cause.stack : ''),
      this.actual,
      this.expected,
      this.note,
      this.url;
  }
}
ct.prototype.file = '';
ct.prototype.name = '';
ct.prototype.reason = '';
ct.prototype.message = '';
ct.prototype.stack = '';
ct.prototype.column = void 0;
ct.prototype.line = void 0;
ct.prototype.ancestors = void 0;
ct.prototype.cause = void 0;
ct.prototype.fatal = void 0;
ct.prototype.place = void 0;
ct.prototype.ruleId = void 0;
ct.prototype.source = void 0;
const Sd = {}.hasOwnProperty,
  FC = new Map(),
  jC = /[A-Z]/g,
  UC = /-([a-z])/g,
  BC = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  HC = new Set(['td', 'th']),
  L1 = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function $C(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError('Expected `Fragment` in options');
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != 'function')
      throw new TypeError(
        'Expected `jsxDEV` in options when `development: true`',
      );
    r = GC(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != 'function')
      throw new TypeError('Expected `jsx` in production options');
    if (typeof t.jsxs != 'function')
      throw new TypeError('Expected `jsxs` in production options');
    r = XC(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || 'react',
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === 'svg' ? xd : xC,
      stylePropertyNameCase: t.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    o = N1(i, e, void 0);
  return o && typeof o != 'string'
    ? o
    : i.create(e, i.Fragment, { children: o || void 0 }, void 0);
}
function N1(e, t, n) {
  if (t.type === 'element') return VC(e, t, n);
  if (t.type === 'mdxFlowExpression' || t.type === 'mdxTextExpression')
    return WC(e, t);
  if (t.type === 'mdxJsxFlowElement' || t.type === 'mdxJsxTextElement')
    return qC(e, t, n);
  if (t.type === 'mdxjsEsm') return YC(e, t);
  if (t.type === 'root') return KC(e, t, n);
  if (t.type === 'text') return QC(e, t);
}
function VC(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === 'svg' &&
    r.space === 'html' &&
    ((i = xd), (e.schema = i)),
    e.ancestors.push(t);
  const o = I1(e, t.tagName, !1),
    a = JC(e, t);
  let l = bd(e, t);
  return (
    BC.has(t.tagName) &&
      (l = l.filter(function (s) {
        return typeof s == 'string' ? !uC(s) : !0;
      })),
    A1(e, a, o, t),
    Ed(a, l),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, a, n)
  );
}
function WC(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, e.evaluater.evaluateExpression(r.expression);
  }
  Go(e, t.position);
}
function YC(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  Go(e, t.position);
}
function qC(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === 'svg' && r.space === 'html' && ((i = xd), (e.schema = i)),
    e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : I1(e, t.name, !0),
    a = ZC(e, t),
    l = bd(e, t);
  return (
    A1(e, a, o, t),
    Ed(a, l),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, a, n)
  );
}
function KC(e, t, n) {
  const r = {};
  return Ed(r, bd(e, t)), e.create(t, e.Fragment, r, n);
}
function QC(e, t) {
  return t.value;
}
function A1(e, t, n, r) {
  typeof n != 'string' && n !== e.Fragment && e.passNode && (t.node = r);
}
function Ed(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function XC(e, t, n) {
  return r;
  function r(i, o, a, l) {
    const u = Array.isArray(a.children) ? n : t;
    return l ? u(o, a, l) : u(o, a);
  }
}
function GC(e, t) {
  return n;
  function n(r, i, o, a) {
    const l = Array.isArray(o.children),
      s = kd(r);
    return t(
      i,
      o,
      a,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0,
      },
      void 0,
    );
  }
}
function JC(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== 'children' && Sd.call(t.properties, i)) {
      const o = eP(e, i, t.properties[i]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle &&
        a === 'align' &&
        typeof l == 'string' &&
        HC.has(t.tagName)
          ? (r = l)
          : (n[a] = l);
      }
    }
  if (r) {
    const o = n.style || (n.style = {});
    o[e.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = r;
  }
  return n;
}
function ZC(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === 'mdxJsxExpressionAttribute')
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const l = a.properties[0];
        l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
      } else Go(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == 'object')
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, (o = e.evaluater.evaluateExpression(l.expression));
        } else Go(e, t.position);
      else o = r.value === null ? !0 : r.value;
      n[i] = o;
    }
  return n;
}
function bd(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : FC;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const s =
        o.type === 'element'
          ? o.tagName
          : o.type === 'mdxJsxFlowElement' || o.type === 'mdxJsxTextElement'
            ? o.name
            : void 0;
      if (s) {
        const u = i.get(s) || 0;
        (a = s + '-' + u), i.set(s, u + 1);
      }
    }
    const l = N1(e, o, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function eP(e, t, n) {
  const r = gC(e.schema, t);
  if (!(n == null || (typeof n == 'number' && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? iC(n) : kC(n)),
      r.property === 'style')
    ) {
      let i = typeof n == 'object' ? n : tP(e, String(n));
      return e.stylePropertyNameCase === 'css' && (i = nP(i)), ['style', i];
    }
    return [
      e.elementAttributeNameCase === 'react' && r.space
        ? wC[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function tP(e, t) {
  const n = {};
  try {
    DC(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = i,
        a = new ct('Cannot parse `style` attribute', {
          ancestors: e.ancestors,
          cause: o,
          ruleId: 'style',
          source: 'hast-util-to-jsx-runtime',
        });
      throw (
        ((a.file = e.filePath || void 0),
        (a.url = L1 + '#cannot-parse-style-attribute'),
        a)
      );
    }
  }
  return n;
  function r(i, o) {
    let a = i;
    a.slice(0, 2) !== '--' &&
      (a.slice(0, 4) === '-ms-' && (a = 'ms-' + a.slice(4)),
      (a = a.replace(UC, iP))),
      (n[a] = o);
  }
}
function I1(e, t, n) {
  let r;
  if (!n) r = { type: 'Literal', value: t };
  else if (t.includes('.')) {
    const i = t.split('.');
    let o = -1,
      a;
    for (; ++o < i.length; ) {
      const l = Zh(i[o])
        ? { type: 'Identifier', name: i[o] }
        : { type: 'Literal', value: i[o] };
      a = a
        ? {
            type: 'MemberExpression',
            object: a,
            property: l,
            computed: !!(o && l.type === 'Literal'),
            optional: !1,
          }
        : l;
    }
    r = a;
  } else
    r =
      Zh(t) && !/^[a-z]/.test(t)
        ? { type: 'Identifier', name: t }
        : { type: 'Literal', value: t };
  if (r.type === 'Literal') {
    const i = r.value;
    return Sd.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  Go(e);
}
function Go(e, t) {
  const n = new ct('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: e.ancestors,
    place: t,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    ((n.file = e.filePath || void 0),
    (n.url = L1 + '#cannot-handle-mdx-estrees-without-createevaluater'),
    n)
  );
}
function nP(e) {
  const t = {};
  let n;
  for (n in e) Sd.call(e, n) && (t[rP(n)] = e[n]);
  return t;
}
function rP(e) {
  let t = e.replace(jC, oP);
  return t.slice(0, 3) === 'ms-' && (t = '-' + t), t;
}
function iP(e, t) {
  return t.toUpperCase();
}
function oP(e) {
  return '-' + e.toLowerCase();
}
const mu = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: [
      'audio',
      'embed',
      'iframe',
      'img',
      'input',
      'script',
      'source',
      'track',
      'video',
    ],
  },
  aP = {};
function lP(e, t) {
  const n = aP,
    r = typeof n.includeImageAlt == 'boolean' ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == 'boolean' ? n.includeHtml : !0;
  return z1(e, r, i);
}
function z1(e, t, n) {
  if (sP(e)) {
    if ('value' in e) return e.type === 'html' && !n ? '' : e.value;
    if (t && 'alt' in e && e.alt) return e.alt;
    if ('children' in e) return cm(e.children, t, n);
  }
  return Array.isArray(e) ? cm(e, t, n) : '';
}
function cm(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = z1(e[i], t, n);
  return r.join('');
}
function sP(e) {
  return !!(e && typeof e == 'object');
}
const fm = document.createElement('i');
function Cd(e) {
  const t = '&' + e + ';';
  fm.innerHTML = t;
  const n = fm.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== 'semi') || n === t
    ? !1
    : n;
}
function An(e, t, n, r) {
  const i = e.length;
  let o = 0,
    a;
  if (
    (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (a = Array.from(r)), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      (a = r.slice(o, o + 1e4)),
        a.unshift(t, 0),
        e.splice(...a),
        (o += 1e4),
        (t += 1e4);
}
function Ht(e, t) {
  return e.length > 0 ? (An(e, e.length, 0, t), e) : t;
}
const dm = {}.hasOwnProperty;
function uP(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) cP(t, e[n]);
  return t;
}
function cP(e, t) {
  let n;
  for (n in t) {
    const i = (dm.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n];
    let a;
    if (o)
      for (a in o) {
        dm.call(i, a) || (i[a] = []);
        const l = o[a];
        fP(i[a], Array.isArray(l) ? l : l ? [l] : []);
      }
  }
}
function fP(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === 'after' ? e : r).push(t[n]);
  An(e, 0, 0, r);
}
function D1(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? '�'
    : String.fromCodePoint(n);
}
function bi(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const gn = mr(/[A-Za-z]/),
  Rt = mr(/[\dA-Za-z]/),
  dP = mr(/[#-'*+\--9=?A-Z^-~]/);
function Yc(e) {
  return e !== null && (e < 32 || e === 127);
}
const qc = mr(/\d/),
  pP = mr(/[\dA-Fa-f]/),
  hP = mr(/[!-/:-@[-`{-~]/);
function G(e) {
  return e !== null && e < -2;
}
function bt(e) {
  return e !== null && (e < 0 || e === 32);
}
function ge(e) {
  return e === -2 || e === -1 || e === 32;
}
const mP = mr(new RegExp('\\p{P}|\\p{S}', 'u')),
  gP = mr(/\s/);
function mr(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Hi(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = '';
    if (o === 37 && Rt(e.charCodeAt(n + 1)) && Rt(e.charCodeAt(n + 2))) i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
        (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const l = e.charCodeAt(n + 1);
      o < 56320 && l > 56319 && l < 57344
        ? ((a = String.fromCharCode(o, l)), (i = 1))
        : (a = '�');
    } else a = String.fromCharCode(o);
    a &&
      (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + i + 1), (a = '')),
      i && ((n += i), (i = 0));
  }
  return t.join('') + e.slice(r);
}
function Se(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(s) {
    return ge(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return ge(s) && o++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const yP = { tokenize: vP };
function vP(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(l),
      e.exit('lineEnding'),
      Se(e, t, 'linePrefix')
    );
  }
  function i(l) {
    return e.enter('paragraph'), o(l);
  }
  function o(l) {
    const s = e.enter('chunkText', { contentType: 'text', previous: n });
    return n && (n.next = s), (n = s), a(l);
  }
  function a(l) {
    if (l === null) {
      e.exit('chunkText'), e.exit('paragraph'), e.consume(l);
      return;
    }
    return G(l) ? (e.consume(l), e.exit('chunkText'), o) : (e.consume(l), a);
  }
}
const wP = { tokenize: xP },
  pm = { tokenize: kP };
function xP(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    o,
    a;
  return l;
  function l(y) {
    if (r < n.length) {
      const C = n[r];
      return (t.containerState = C[1]), e.attempt(C[0].continuation, s, u)(y);
    }
    return u(y);
  }
  function s(y) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && m();
      const C = t.events.length;
      let T = C,
        S;
      for (; T--; )
        if (t.events[T][0] === 'exit' && t.events[T][1].type === 'chunkFlow') {
          S = t.events[T][1].end;
          break;
        }
      h(r);
      let x = C;
      for (; x < t.events.length; )
        (t.events[x][1].end = Object.assign({}, S)), x++;
      return (
        An(t.events, T + 1, 0, t.events.slice(C)), (t.events.length = x), u(y)
      );
    }
    return l(y);
  }
  function u(y) {
    if (r === n.length) {
      if (!i) return d(y);
      if (i.currentConstruct && i.currentConstruct.concrete) return g(y);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(pm, c, f)(y);
  }
  function c(y) {
    return i && m(), h(r), d(y);
  }
  function f(y) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (a = t.now().offset), g(y)
    );
  }
  function d(y) {
    return (t.containerState = {}), e.attempt(pm, p, g)(y);
  }
  function p(y) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(y);
  }
  function g(y) {
    if (y === null) {
      i && m(), h(0), e.consume(y);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter('chunkFlow', { contentType: 'flow', previous: o, _tokenizer: i }),
      v(y)
    );
  }
  function v(y) {
    if (y === null) {
      b(e.exit('chunkFlow'), !0), h(0), e.consume(y);
      return;
    }
    return G(y)
      ? (e.consume(y),
        b(e.exit('chunkFlow')),
        (r = 0),
        (t.interrupt = void 0),
        l)
      : (e.consume(y), v);
  }
  function b(y, C) {
    const T = t.sliceStream(y);
    if (
      (C && T.push(null),
      (y.previous = o),
      o && (o.next = y),
      (o = y),
      i.defineSkip(y.start),
      i.write(T),
      t.parser.lazy[y.start.line])
    ) {
      let S = i.events.length;
      for (; S--; )
        if (
          i.events[S][1].start.offset < a &&
          (!i.events[S][1].end || i.events[S][1].end.offset > a)
        )
          return;
      const x = t.events.length;
      let L = x,
        M,
        z;
      for (; L--; )
        if (t.events[L][0] === 'exit' && t.events[L][1].type === 'chunkFlow') {
          if (M) {
            z = t.events[L][1].end;
            break;
          }
          M = !0;
        }
      for (h(r), S = x; S < t.events.length; )
        (t.events[S][1].end = Object.assign({}, z)), S++;
      An(t.events, L + 1, 0, t.events.slice(x)), (t.events.length = S);
    }
  }
  function h(y) {
    let C = n.length;
    for (; C-- > y; ) {
      const T = n[C];
      (t.containerState = T[1]), T[0].exit.call(t, e);
    }
    n.length = y;
  }
  function m() {
    i.write([null]),
      (o = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function kP(e, t, n) {
  return Se(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
function hm(e) {
  if (e === null || bt(e) || gP(e)) return 1;
  if (mP(e)) return 2;
}
function Pd(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && ((t = o(t, n)), r.push(o));
  }
  return t;
}
const Kc = { name: 'attention', tokenize: EP, resolveAll: SP };
function SP(e, t) {
  let n = -1,
    r,
    i,
    o,
    a,
    l,
    s,
    u,
    c;
  for (; ++n < e.length; )
    if (
      e[n][0] === 'enter' &&
      e[n][1].type === 'attentionSequence' &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === 'exit' &&
          e[r][1].type === 'attentionSequence' &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const f = Object.assign({}, e[r][1].end),
            d = Object.assign({}, e[n][1].start);
          mm(f, -s),
            mm(d, s),
            (a = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: f,
              end: Object.assign({}, e[r][1].end),
            }),
            (l = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: Object.assign({}, e[n][1].start),
              end: d,
            }),
            (o = {
              type: s > 1 ? 'strongText' : 'emphasisText',
              start: Object.assign({}, e[r][1].end),
              end: Object.assign({}, e[n][1].start),
            }),
            (i = {
              type: s > 1 ? 'strong' : 'emphasis',
              start: Object.assign({}, a.start),
              end: Object.assign({}, l.end),
            }),
            (e[r][1].end = Object.assign({}, a.start)),
            (e[n][1].start = Object.assign({}, l.end)),
            (u = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (u = Ht(u, [
                ['enter', e[r][1], t],
                ['exit', e[r][1], t],
              ])),
            (u = Ht(u, [
              ['enter', i, t],
              ['enter', a, t],
              ['exit', a, t],
              ['enter', o, t],
            ])),
            (u = Ht(
              u,
              Pd(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t),
            )),
            (u = Ht(u, [
              ['exit', o, t],
              ['enter', l, t],
              ['exit', l, t],
              ['exit', i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((c = 2),
                (u = Ht(u, [
                  ['enter', e[n][1], t],
                  ['exit', e[n][1], t],
                ])))
              : (c = 0),
            An(e, r - 1, n - r + 3, u),
            (n = r + u.length - c - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === 'attentionSequence' && (e[n][1].type = 'data');
  return e;
}
function EP(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = hm(r);
  let o;
  return a;
  function a(s) {
    return (o = s), e.enter('attentionSequence'), l(s);
  }
  function l(s) {
    if (s === o) return e.consume(s), l;
    const u = e.exit('attentionSequence'),
      c = hm(s),
      f = !c || (c === 2 && i) || n.includes(s),
      d = !i || (i === 2 && c) || n.includes(r);
    return (
      (u._open = !!(o === 42 ? f : f && (i || !d))),
      (u._close = !!(o === 42 ? d : d && (c || !f))),
      t(s)
    );
  }
}
function mm(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const bP = { name: 'autolink', tokenize: CP };
function CP(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(p),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      o
    );
  }
  function o(p) {
    return gn(p) ? (e.consume(p), a) : p === 64 ? n(p) : u(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Rt(p) ? ((r = 1), l(p)) : u(p);
  }
  function l(p) {
    return p === 58
      ? (e.consume(p), (r = 0), s)
      : (p === 43 || p === 45 || p === 46 || Rt(p)) && r++ < 32
        ? (e.consume(p), l)
        : ((r = 0), u(p));
  }
  function s(p) {
    return p === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(p),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        t)
      : p === null || p === 32 || p === 60 || Yc(p)
        ? n(p)
        : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : dP(p) ? (e.consume(p), u) : n(p);
  }
  function c(p) {
    return Rt(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46
      ? (e.consume(p), (r = 0), c)
      : p === 62
        ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
          e.enter('autolinkMarker'),
          e.consume(p),
          e.exit('autolinkMarker'),
          e.exit('autolink'),
          t)
        : d(p);
  }
  function d(p) {
    if ((p === 45 || Rt(p)) && r++ < 63) {
      const g = p === 45 ? d : f;
      return e.consume(p), g;
    }
    return n(p);
  }
}
const Es = { tokenize: PP, partial: !0 };
function PP(e, t, n) {
  return r;
  function r(o) {
    return ge(o) ? Se(e, i, 'linePrefix')(o) : i(o);
  }
  function i(o) {
    return o === null || G(o) ? t(o) : n(o);
  }
}
const M1 = {
  name: 'blockQuote',
  tokenize: TP,
  continuation: { tokenize: RP },
  exit: OP,
};
function TP(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const l = r.containerState;
      return (
        l.open || (e.enter('blockQuote', { _container: !0 }), (l.open = !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(a),
        e.exit('blockQuoteMarker'),
        o
      );
    }
    return n(a);
  }
  function o(a) {
    return ge(a)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(a),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        t)
      : (e.exit('blockQuotePrefix'), t(a));
  }
}
function RP(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ge(a)
      ? Se(
          e,
          o,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(a)
      : o(a);
  }
  function o(a) {
    return e.attempt(M1, t, n)(a);
  }
}
function OP(e) {
  e.exit('blockQuote');
}
const F1 = { name: 'characterEscape', tokenize: _P };
function _P(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(o),
      e.exit('escapeMarker'),
      i
    );
  }
  function i(o) {
    return hP(o)
      ? (e.enter('characterEscapeValue'),
        e.consume(o),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        t)
      : n(o);
  }
}
const j1 = { name: 'characterReference', tokenize: LP };
function LP(e, t, n) {
  const r = this;
  let i = 0,
    o,
    a;
  return l;
  function l(f) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(f),
      e.exit('characterReferenceMarker'),
      s
    );
  }
  function s(f) {
    return f === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(f),
        e.exit('characterReferenceMarkerNumeric'),
        u)
      : (e.enter('characterReferenceValue'), (o = 31), (a = Rt), c(f));
  }
  function u(f) {
    return f === 88 || f === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(f),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (o = 6),
        (a = pP),
        c)
      : (e.enter('characterReferenceValue'), (o = 7), (a = qc), c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit('characterReferenceValue');
      return a === Rt && !Cd(r.sliceSerialize(d))
        ? n(f)
        : (e.enter('characterReferenceMarker'),
          e.consume(f),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          t);
    }
    return a(f) && i++ < o ? (e.consume(f), c) : n(f);
  }
}
const gm = { tokenize: AP, partial: !0 },
  ym = { name: 'codeFenced', tokenize: NP, concrete: !0 };
function NP(e, t, n) {
  const r = this,
    i = { tokenize: T, partial: !0 };
  let o = 0,
    a = 0,
    l;
  return s;
  function s(S) {
    return u(S);
  }
  function u(S) {
    const x = r.events[r.events.length - 1];
    return (
      (o =
        x && x[1].type === 'linePrefix'
          ? x[2].sliceSerialize(x[1], !0).length
          : 0),
      (l = S),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      c(S)
    );
  }
  function c(S) {
    return S === l
      ? (a++, e.consume(S), c)
      : a < 3
        ? n(S)
        : (e.exit('codeFencedFenceSequence'),
          ge(S) ? Se(e, f, 'whitespace')(S) : f(S));
  }
  function f(S) {
    return S === null || G(S)
      ? (e.exit('codeFencedFence'), r.interrupt ? t(S) : e.check(gm, v, C)(S))
      : (e.enter('codeFencedFenceInfo'),
        e.enter('chunkString', { contentType: 'string' }),
        d(S));
  }
  function d(S) {
    return S === null || G(S)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), f(S))
      : ge(S)
        ? (e.exit('chunkString'),
          e.exit('codeFencedFenceInfo'),
          Se(e, p, 'whitespace')(S))
        : S === 96 && S === l
          ? n(S)
          : (e.consume(S), d);
  }
  function p(S) {
    return S === null || G(S)
      ? f(S)
      : (e.enter('codeFencedFenceMeta'),
        e.enter('chunkString', { contentType: 'string' }),
        g(S));
  }
  function g(S) {
    return S === null || G(S)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), f(S))
      : S === 96 && S === l
        ? n(S)
        : (e.consume(S), g);
  }
  function v(S) {
    return e.attempt(i, C, b)(S);
  }
  function b(S) {
    return e.enter('lineEnding'), e.consume(S), e.exit('lineEnding'), h;
  }
  function h(S) {
    return o > 0 && ge(S) ? Se(e, m, 'linePrefix', o + 1)(S) : m(S);
  }
  function m(S) {
    return S === null || G(S)
      ? e.check(gm, v, C)(S)
      : (e.enter('codeFlowValue'), y(S));
  }
  function y(S) {
    return S === null || G(S)
      ? (e.exit('codeFlowValue'), m(S))
      : (e.consume(S), y);
  }
  function C(S) {
    return e.exit('codeFenced'), t(S);
  }
  function T(S, x, L) {
    let M = 0;
    return z;
    function z(ee) {
      return S.enter('lineEnding'), S.consume(ee), S.exit('lineEnding'), U;
    }
    function U(ee) {
      return (
        S.enter('codeFencedFence'),
        ge(ee)
          ? Se(
              S,
              B,
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4,
            )(ee)
          : B(ee)
      );
    }
    function B(ee) {
      return ee === l ? (S.enter('codeFencedFenceSequence'), X(ee)) : L(ee);
    }
    function X(ee) {
      return ee === l
        ? (M++, S.consume(ee), X)
        : M >= a
          ? (S.exit('codeFencedFenceSequence'),
            ge(ee) ? Se(S, se, 'whitespace')(ee) : se(ee))
          : L(ee);
    }
    function se(ee) {
      return ee === null || G(ee) ? (S.exit('codeFencedFence'), x(ee)) : L(ee);
    }
  }
}
function AP(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null
      ? n(a)
      : (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const gu = { name: 'codeIndented', tokenize: zP },
  IP = { tokenize: DP, partial: !0 };
function zP(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter('codeIndented'), Se(e, o, 'linePrefix', 5)(u);
  }
  function o(u) {
    const c = r.events[r.events.length - 1];
    return c &&
      c[1].type === 'linePrefix' &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? a(u)
      : n(u);
  }
  function a(u) {
    return u === null
      ? s(u)
      : G(u)
        ? e.attempt(IP, a, s)(u)
        : (e.enter('codeFlowValue'), l(u));
  }
  function l(u) {
    return u === null || G(u)
      ? (e.exit('codeFlowValue'), a(u))
      : (e.consume(u), l);
  }
  function s(u) {
    return e.exit('codeIndented'), t(u);
  }
}
function DP(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line]
      ? n(a)
      : G(a)
        ? (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), i)
        : Se(e, o, 'linePrefix', 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l &&
      l[1].type === 'linePrefix' &&
      l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(a)
      : G(a)
        ? i(a)
        : n(a);
  }
}
const MP = { name: 'codeText', tokenize: UP, resolve: FP, previous: jP };
function FP(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space') &&
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space')
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === 'codeTextData') {
        (e[n][1].type = 'codeTextPadding'),
          (e[t][1].type = 'codeTextPadding'),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== 'lineEnding' && (i = r)
      : (r === t || e[r][1].type === 'lineEnding') &&
        ((e[i][1].type = 'codeTextData'),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function jP(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  );
}
function UP(e, t, n) {
  let r = 0,
    i,
    o;
  return a;
  function a(f) {
    return e.enter('codeText'), e.enter('codeTextSequence'), l(f);
  }
  function l(f) {
    return f === 96
      ? (e.consume(f), r++, l)
      : (e.exit('codeTextSequence'), s(f));
  }
  function s(f) {
    return f === null
      ? n(f)
      : f === 32
        ? (e.enter('space'), e.consume(f), e.exit('space'), s)
        : f === 96
          ? ((o = e.enter('codeTextSequence')), (i = 0), c(f))
          : G(f)
            ? (e.enter('lineEnding'), e.consume(f), e.exit('lineEnding'), s)
            : (e.enter('codeTextData'), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || G(f)
      ? (e.exit('codeTextData'), s(f))
      : (e.consume(f), u);
  }
  function c(f) {
    return f === 96
      ? (e.consume(f), i++, c)
      : i === r
        ? (e.exit('codeTextSequence'), e.exit('codeText'), t(f))
        : ((o.type = 'codeTextData'), u(f));
  }
}
class BP {
  constructor(t) {
    (this.left = t ? [...t] : []), (this.right = []);
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          t +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(t, r)
      : t > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - t + this.left.length,
            )
            .reverse()
        : this.left
            .slice(t)
            .concat(
              this.right
                .slice(this.right.length - r + this.left.length)
                .reverse(),
            );
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(
      this.right.length - i,
      Number.POSITIVE_INFINITY,
    );
    return r && io(this.left, r), o.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), io(this.left, t);
  }
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  unshiftMany(t) {
    this.setCursor(0), io(this.right, t.reverse());
  }
  setCursor(t) {
    if (
      !(
        t === this.left.length ||
        (t > this.left.length && this.right.length === 0) ||
        (t < 0 && this.left.length === 0)
      )
    )
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        io(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY,
        );
        io(this.left, n.reverse());
      }
  }
}
function io(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
}
function U1(e) {
  const t = {};
  let n = -1,
    r,
    i,
    o,
    a,
    l,
    s,
    u;
  const c = new BP(e);
  for (; ++n < c.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = c.get(n)),
      n &&
        r[1].type === 'chunkFlow' &&
        c.get(n - 1)[1].type === 'listItemPrefix' &&
        ((s = r[1]._tokenizer.events),
        (o = 0),
        o < s.length && s[o][1].type === 'lineEndingBlank' && (o += 2),
        o < s.length && s[o][1].type === 'content'))
    )
      for (; ++o < s.length && s[o][1].type !== 'content'; )
        s[o][1].type === 'chunkText' &&
          ((s[o][1]._isInFirstContentOfListItem = !0), o++);
    if (r[0] === 'enter')
      r[1].contentType && (Object.assign(t, HP(c, n)), (n = t[n]), (u = !0));
    else if (r[1]._container) {
      for (
        o = n, i = void 0;
        o-- &&
        ((a = c.get(o)),
        a[1].type === 'lineEnding' || a[1].type === 'lineEndingBlank');
      )
        a[0] === 'enter' &&
          (i && (c.get(i)[1].type = 'lineEndingBlank'),
          (a[1].type = 'lineEnding'),
          (i = o));
      i &&
        ((r[1].end = Object.assign({}, c.get(i)[1].start)),
        (l = c.slice(i, n)),
        l.unshift(r),
        c.splice(i, n - i + 1, l));
    }
  }
  return An(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function HP(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let i = t - 1;
  const o = [],
    a = n._tokenizer || r.parser[n.contentType](n.start),
    l = a.events,
    s = [],
    u = {};
  let c,
    f,
    d = -1,
    p = n,
    g = 0,
    v = 0;
  const b = [v];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    o.push(i),
      p._tokenizer ||
        ((c = r.sliceStream(p)),
        p.next || c.push(null),
        f && a.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(c),
        p._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = void 0)),
      (f = p),
      (p = p.next);
  }
  for (p = n; ++d < l.length; )
    l[d][0] === 'exit' &&
      l[d - 1][0] === 'enter' &&
      l[d][1].type === l[d - 1][1].type &&
      l[d][1].start.line !== l[d][1].end.line &&
      ((v = d + 1),
      b.push(v),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next));
  for (
    a.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : b.pop(),
      d = b.length;
    d--;
  ) {
    const h = l.slice(b[d], b[d + 1]),
      m = o.pop();
    s.push([m, m + h.length - 1]), e.splice(m, 2, h);
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    (u[g + s[d][0]] = g + s[d][1]), (g += s[d][1] - s[d][0] - 1);
  return u;
}
const $P = { tokenize: YP, resolve: WP },
  VP = { tokenize: qP, partial: !0 };
function WP(e) {
  return U1(e), e;
}
function YP(e, t) {
  let n;
  return r;
  function r(l) {
    return (
      e.enter('content'),
      (n = e.enter('chunkContent', { contentType: 'content' })),
      i(l)
    );
  }
  function i(l) {
    return l === null ? o(l) : G(l) ? e.check(VP, a, o)(l) : (e.consume(l), i);
  }
  function o(l) {
    return e.exit('chunkContent'), e.exit('content'), t(l);
  }
  function a(l) {
    return (
      e.consume(l),
      e.exit('chunkContent'),
      (n.next = e.enter('chunkContent', {
        contentType: 'content',
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function qP(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(a),
      e.exit('lineEnding'),
      Se(e, o, 'linePrefix')
    );
  }
  function o(a) {
    if (a === null || G(a)) return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes('codeIndented') &&
      l &&
      l[1].type === 'linePrefix' &&
      l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(a)
      : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function B1(e, t, n, r, i, o, a, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(h) {
    return h === 60
      ? (e.enter(r), e.enter(i), e.enter(o), e.consume(h), e.exit(o), d)
      : h === null || h === 32 || h === 41 || Yc(h)
        ? n(h)
        : (e.enter(r),
          e.enter(a),
          e.enter(l),
          e.enter('chunkString', { contentType: 'string' }),
          v(h));
  }
  function d(h) {
    return h === 62
      ? (e.enter(o), e.consume(h), e.exit(o), e.exit(i), e.exit(r), t)
      : (e.enter(l), e.enter('chunkString', { contentType: 'string' }), p(h));
  }
  function p(h) {
    return h === 62
      ? (e.exit('chunkString'), e.exit(l), d(h))
      : h === null || h === 60 || G(h)
        ? n(h)
        : (e.consume(h), h === 92 ? g : p);
  }
  function g(h) {
    return h === 60 || h === 62 || h === 92 ? (e.consume(h), p) : p(h);
  }
  function v(h) {
    return !c && (h === null || h === 41 || bt(h))
      ? (e.exit('chunkString'), e.exit(l), e.exit(a), e.exit(r), t(h))
      : c < u && h === 40
        ? (e.consume(h), c++, v)
        : h === 41
          ? (e.consume(h), c--, v)
          : h === null || h === 32 || h === 40 || Yc(h)
            ? n(h)
            : (e.consume(h), h === 92 ? b : v);
  }
  function b(h) {
    return h === 40 || h === 41 || h === 92 ? (e.consume(h), v) : v(h);
  }
}
function H1(e, t, n, r, i, o) {
  const a = this;
  let l = 0,
    s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return l > 999 ||
      p === null ||
      p === 91 ||
      (p === 93 && !s) ||
      (p === 94 && !l && '_hiddenFootnoteSupport' in a.parser.constructs)
      ? n(p)
      : p === 93
        ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t)
        : G(p)
          ? (e.enter('lineEnding'), e.consume(p), e.exit('lineEnding'), c)
          : (e.enter('chunkString', { contentType: 'string' }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || G(p) || l++ > 999
      ? (e.exit('chunkString'), c(p))
      : (e.consume(p), s || (s = !ge(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, f) : f(p);
  }
}
function $1(e, t, n, r, i, o) {
  let a;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(d),
        e.exit(i),
        (a = d === 40 ? 41 : d),
        s)
      : n(d);
  }
  function s(d) {
    return d === a
      ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
      : (e.enter(o), u(d));
  }
  function u(d) {
    return d === a
      ? (e.exit(o), s(a))
      : d === null
        ? n(d)
        : G(d)
          ? (e.enter('lineEnding'),
            e.consume(d),
            e.exit('lineEnding'),
            Se(e, u, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), c(d));
  }
  function c(d) {
    return d === a || d === null || G(d)
      ? (e.exit('chunkString'), u(d))
      : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === a || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function Co(e, t) {
  let n;
  return r;
  function r(i) {
    return G(i)
      ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), (n = !0), r)
      : ge(i)
        ? Se(e, r, n ? 'linePrefix' : 'lineSuffix')(i)
        : t(i);
  }
}
const KP = { name: 'definition', tokenize: XP },
  QP = { tokenize: GP, partial: !0 };
function XP(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter('definition'), a(p);
  }
  function a(p) {
    return H1.call(
      r,
      e,
      l,
      n,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(p);
  }
  function l(p) {
    return (
      (i = bi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      p === 58
        ? (e.enter('definitionMarker'),
          e.consume(p),
          e.exit('definitionMarker'),
          s)
        : n(p)
    );
  }
  function s(p) {
    return bt(p) ? Co(e, u)(p) : u(p);
  }
  function u(p) {
    return B1(
      e,
      c,
      n,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(p);
  }
  function c(p) {
    return e.attempt(QP, f, f)(p);
  }
  function f(p) {
    return ge(p) ? Se(e, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || G(p)
      ? (e.exit('definition'), r.parser.defined.push(i), t(p))
      : n(p);
  }
}
function GP(e, t, n) {
  return r;
  function r(l) {
    return bt(l) ? Co(e, i)(l) : n(l);
  }
  function i(l) {
    return $1(
      e,
      o,
      n,
      'definitionTitle',
      'definitionTitleMarker',
      'definitionTitleString',
    )(l);
  }
  function o(l) {
    return ge(l) ? Se(e, a, 'whitespace')(l) : a(l);
  }
  function a(l) {
    return l === null || G(l) ? t(l) : n(l);
  }
}
const JP = { name: 'hardBreakEscape', tokenize: ZP };
function ZP(e, t, n) {
  return r;
  function r(o) {
    return e.enter('hardBreakEscape'), e.consume(o), i;
  }
  function i(o) {
    return G(o) ? (e.exit('hardBreakEscape'), t(o)) : n(o);
  }
}
const eT = { name: 'headingAtx', tokenize: nT, resolve: tT };
function tT(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    o;
  return (
    e[r][1].type === 'whitespace' && (r += 2),
    n - 2 > r && e[n][1].type === 'whitespace' && (n -= 2),
    e[n][1].type === 'atxHeadingSequence' &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === 'whitespace')) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: 'atxHeadingText', start: e[r][1].start, end: e[n][1].end }),
      (o = {
        type: 'chunkText',
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: 'text',
      }),
      An(e, r, n - r + 1, [
        ['enter', i, t],
        ['enter', o, t],
        ['exit', o, t],
        ['exit', i, t],
      ])),
    e
  );
}
function nT(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter('atxHeading'), o(c);
  }
  function o(c) {
    return e.enter('atxHeadingSequence'), a(c);
  }
  function a(c) {
    return c === 35 && r++ < 6
      ? (e.consume(c), a)
      : c === null || bt(c)
        ? (e.exit('atxHeadingSequence'), l(c))
        : n(c);
  }
  function l(c) {
    return c === 35
      ? (e.enter('atxHeadingSequence'), s(c))
      : c === null || G(c)
        ? (e.exit('atxHeading'), t(c))
        : ge(c)
          ? Se(e, l, 'whitespace')(c)
          : (e.enter('atxHeadingText'), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit('atxHeadingSequence'), l(c));
  }
  function u(c) {
    return c === null || c === 35 || bt(c)
      ? (e.exit('atxHeadingText'), l(c))
      : (e.consume(c), u);
  }
}
const rT = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  vm = ['pre', 'script', 'style', 'textarea'],
  iT = { name: 'htmlFlow', tokenize: sT, resolveTo: lT, concrete: !0 },
  oT = { tokenize: cT, partial: !0 },
  aT = { tokenize: uT, partial: !0 };
function lT(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === 'enter' && e[t][1].type === 'htmlFlow'); );
  return (
    t > 1 &&
      e[t - 2][1].type === 'linePrefix' &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function sT(e, t, n) {
  const r = this;
  let i, o, a, l, s;
  return u;
  function u(k) {
    return c(k);
  }
  function c(k) {
    return e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(k), f;
  }
  function f(k) {
    return k === 33
      ? (e.consume(k), d)
      : k === 47
        ? (e.consume(k), (o = !0), v)
        : k === 63
          ? (e.consume(k), (i = 3), r.interrupt ? t : w)
          : gn(k)
            ? (e.consume(k), (a = String.fromCharCode(k)), b)
            : n(k);
  }
  function d(k) {
    return k === 45
      ? (e.consume(k), (i = 2), p)
      : k === 91
        ? (e.consume(k), (i = 5), (l = 0), g)
        : gn(k)
          ? (e.consume(k), (i = 4), r.interrupt ? t : w)
          : n(k);
  }
  function p(k) {
    return k === 45 ? (e.consume(k), r.interrupt ? t : w) : n(k);
  }
  function g(k) {
    const be = 'CDATA[';
    return k === be.charCodeAt(l++)
      ? (e.consume(k), l === be.length ? (r.interrupt ? t : B) : g)
      : n(k);
  }
  function v(k) {
    return gn(k) ? (e.consume(k), (a = String.fromCharCode(k)), b) : n(k);
  }
  function b(k) {
    if (k === null || k === 47 || k === 62 || bt(k)) {
      const be = k === 47,
        Fe = a.toLowerCase();
      return !be && !o && vm.includes(Fe)
        ? ((i = 1), r.interrupt ? t(k) : B(k))
        : rT.includes(a.toLowerCase())
          ? ((i = 6), be ? (e.consume(k), h) : r.interrupt ? t(k) : B(k))
          : ((i = 7),
            r.interrupt && !r.parser.lazy[r.now().line]
              ? n(k)
              : o
                ? m(k)
                : y(k));
    }
    return k === 45 || Rt(k)
      ? (e.consume(k), (a += String.fromCharCode(k)), b)
      : n(k);
  }
  function h(k) {
    return k === 62 ? (e.consume(k), r.interrupt ? t : B) : n(k);
  }
  function m(k) {
    return ge(k) ? (e.consume(k), m) : z(k);
  }
  function y(k) {
    return k === 47
      ? (e.consume(k), z)
      : k === 58 || k === 95 || gn(k)
        ? (e.consume(k), C)
        : ge(k)
          ? (e.consume(k), y)
          : z(k);
  }
  function C(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || Rt(k)
      ? (e.consume(k), C)
      : T(k);
  }
  function T(k) {
    return k === 61 ? (e.consume(k), S) : ge(k) ? (e.consume(k), T) : y(k);
  }
  function S(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96
      ? n(k)
      : k === 34 || k === 39
        ? (e.consume(k), (s = k), x)
        : ge(k)
          ? (e.consume(k), S)
          : L(k);
  }
  function x(k) {
    return k === s
      ? (e.consume(k), (s = null), M)
      : k === null || G(k)
        ? n(k)
        : (e.consume(k), x);
  }
  function L(k) {
    return k === null ||
      k === 34 ||
      k === 39 ||
      k === 47 ||
      k === 60 ||
      k === 61 ||
      k === 62 ||
      k === 96 ||
      bt(k)
      ? T(k)
      : (e.consume(k), L);
  }
  function M(k) {
    return k === 47 || k === 62 || ge(k) ? y(k) : n(k);
  }
  function z(k) {
    return k === 62 ? (e.consume(k), U) : n(k);
  }
  function U(k) {
    return k === null || G(k) ? B(k) : ge(k) ? (e.consume(k), U) : n(k);
  }
  function B(k) {
    return k === 45 && i === 2
      ? (e.consume(k), Ee)
      : k === 60 && i === 1
        ? (e.consume(k), we)
        : k === 62 && i === 4
          ? (e.consume(k), ae)
          : k === 63 && i === 3
            ? (e.consume(k), w)
            : k === 93 && i === 5
              ? (e.consume(k), K)
              : G(k) && (i === 6 || i === 7)
                ? (e.exit('htmlFlowData'), e.check(oT, ue, X)(k))
                : k === null || G(k)
                  ? (e.exit('htmlFlowData'), X(k))
                  : (e.consume(k), B);
  }
  function X(k) {
    return e.check(aT, se, ue)(k);
  }
  function se(k) {
    return e.enter('lineEnding'), e.consume(k), e.exit('lineEnding'), ee;
  }
  function ee(k) {
    return k === null || G(k) ? X(k) : (e.enter('htmlFlowData'), B(k));
  }
  function Ee(k) {
    return k === 45 ? (e.consume(k), w) : B(k);
  }
  function we(k) {
    return k === 47 ? (e.consume(k), (a = ''), N) : B(k);
  }
  function N(k) {
    if (k === 62) {
      const be = a.toLowerCase();
      return vm.includes(be) ? (e.consume(k), ae) : B(k);
    }
    return gn(k) && a.length < 8
      ? (e.consume(k), (a += String.fromCharCode(k)), N)
      : B(k);
  }
  function K(k) {
    return k === 93 ? (e.consume(k), w) : B(k);
  }
  function w(k) {
    return k === 62
      ? (e.consume(k), ae)
      : k === 45 && i === 2
        ? (e.consume(k), w)
        : B(k);
  }
  function ae(k) {
    return k === null || G(k)
      ? (e.exit('htmlFlowData'), ue(k))
      : (e.consume(k), ae);
  }
  function ue(k) {
    return e.exit('htmlFlow'), t(k);
  }
}
function uT(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return G(a)
      ? (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), o)
      : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function cT(e, t, n) {
  return r;
  function r(i) {
    return (
      e.enter('lineEnding'),
      e.consume(i),
      e.exit('lineEnding'),
      e.attempt(Es, t, n)
    );
  }
}
const fT = { name: 'htmlText', tokenize: dT };
function dT(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(w) {
    return e.enter('htmlText'), e.enter('htmlTextData'), e.consume(w), s;
  }
  function s(w) {
    return w === 33
      ? (e.consume(w), u)
      : w === 47
        ? (e.consume(w), T)
        : w === 63
          ? (e.consume(w), y)
          : gn(w)
            ? (e.consume(w), L)
            : n(w);
  }
  function u(w) {
    return w === 45
      ? (e.consume(w), c)
      : w === 91
        ? (e.consume(w), (o = 0), g)
        : gn(w)
          ? (e.consume(w), m)
          : n(w);
  }
  function c(w) {
    return w === 45 ? (e.consume(w), p) : n(w);
  }
  function f(w) {
    return w === null
      ? n(w)
      : w === 45
        ? (e.consume(w), d)
        : G(w)
          ? ((a = f), we(w))
          : (e.consume(w), f);
  }
  function d(w) {
    return w === 45 ? (e.consume(w), p) : f(w);
  }
  function p(w) {
    return w === 62 ? Ee(w) : w === 45 ? d(w) : f(w);
  }
  function g(w) {
    const ae = 'CDATA[';
    return w === ae.charCodeAt(o++)
      ? (e.consume(w), o === ae.length ? v : g)
      : n(w);
  }
  function v(w) {
    return w === null
      ? n(w)
      : w === 93
        ? (e.consume(w), b)
        : G(w)
          ? ((a = v), we(w))
          : (e.consume(w), v);
  }
  function b(w) {
    return w === 93 ? (e.consume(w), h) : v(w);
  }
  function h(w) {
    return w === 62 ? Ee(w) : w === 93 ? (e.consume(w), h) : v(w);
  }
  function m(w) {
    return w === null || w === 62
      ? Ee(w)
      : G(w)
        ? ((a = m), we(w))
        : (e.consume(w), m);
  }
  function y(w) {
    return w === null
      ? n(w)
      : w === 63
        ? (e.consume(w), C)
        : G(w)
          ? ((a = y), we(w))
          : (e.consume(w), y);
  }
  function C(w) {
    return w === 62 ? Ee(w) : y(w);
  }
  function T(w) {
    return gn(w) ? (e.consume(w), S) : n(w);
  }
  function S(w) {
    return w === 45 || Rt(w) ? (e.consume(w), S) : x(w);
  }
  function x(w) {
    return G(w) ? ((a = x), we(w)) : ge(w) ? (e.consume(w), x) : Ee(w);
  }
  function L(w) {
    return w === 45 || Rt(w)
      ? (e.consume(w), L)
      : w === 47 || w === 62 || bt(w)
        ? M(w)
        : n(w);
  }
  function M(w) {
    return w === 47
      ? (e.consume(w), Ee)
      : w === 58 || w === 95 || gn(w)
        ? (e.consume(w), z)
        : G(w)
          ? ((a = M), we(w))
          : ge(w)
            ? (e.consume(w), M)
            : Ee(w);
  }
  function z(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || Rt(w)
      ? (e.consume(w), z)
      : U(w);
  }
  function U(w) {
    return w === 61
      ? (e.consume(w), B)
      : G(w)
        ? ((a = U), we(w))
        : ge(w)
          ? (e.consume(w), U)
          : M(w);
  }
  function B(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96
      ? n(w)
      : w === 34 || w === 39
        ? (e.consume(w), (i = w), X)
        : G(w)
          ? ((a = B), we(w))
          : ge(w)
            ? (e.consume(w), B)
            : (e.consume(w), se);
  }
  function X(w) {
    return w === i
      ? (e.consume(w), (i = void 0), ee)
      : w === null
        ? n(w)
        : G(w)
          ? ((a = X), we(w))
          : (e.consume(w), X);
  }
  function se(w) {
    return w === null ||
      w === 34 ||
      w === 39 ||
      w === 60 ||
      w === 61 ||
      w === 96
      ? n(w)
      : w === 47 || w === 62 || bt(w)
        ? M(w)
        : (e.consume(w), se);
  }
  function ee(w) {
    return w === 47 || w === 62 || bt(w) ? M(w) : n(w);
  }
  function Ee(w) {
    return w === 62
      ? (e.consume(w), e.exit('htmlTextData'), e.exit('htmlText'), t)
      : n(w);
  }
  function we(w) {
    return (
      e.exit('htmlTextData'),
      e.enter('lineEnding'),
      e.consume(w),
      e.exit('lineEnding'),
      N
    );
  }
  function N(w) {
    return ge(w)
      ? Se(
          e,
          K,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(w)
      : K(w);
  }
  function K(w) {
    return e.enter('htmlTextData'), a(w);
  }
}
const Td = { name: 'labelEnd', tokenize: vT, resolveTo: yT, resolveAll: gT },
  pT = { tokenize: wT },
  hT = { tokenize: xT },
  mT = { tokenize: kT };
function gT(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === 'labelImage' ||
      n.type === 'labelLink' ||
      n.type === 'labelEnd') &&
      (e.splice(t + 1, n.type === 'labelImage' ? 4 : 2),
      (n.type = 'data'),
      t++);
  }
  return e;
}
function yT(e, t) {
  let n = e.length,
    r = 0,
    i,
    o,
    a,
    l;
  for (; n--; )
    if (((i = e[n][1]), o)) {
      if (i.type === 'link' || (i.type === 'labelLink' && i._inactive)) break;
      e[n][0] === 'enter' && i.type === 'labelLink' && (i._inactive = !0);
    } else if (a) {
      if (
        e[n][0] === 'enter' &&
        (i.type === 'labelImage' || i.type === 'labelLink') &&
        !i._balanced &&
        ((o = n), i.type !== 'labelLink')
      ) {
        r = 2;
        break;
      }
    } else i.type === 'labelEnd' && (a = n);
  const s = {
      type: e[o][1].type === 'labelLink' ? 'link' : 'image',
      start: Object.assign({}, e[o][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    u = {
      type: 'label',
      start: Object.assign({}, e[o][1].start),
      end: Object.assign({}, e[a][1].end),
    },
    c = {
      type: 'labelText',
      start: Object.assign({}, e[o + r + 2][1].end),
      end: Object.assign({}, e[a - 2][1].start),
    };
  return (
    (l = [
      ['enter', s, t],
      ['enter', u, t],
    ]),
    (l = Ht(l, e.slice(o + 1, o + r + 3))),
    (l = Ht(l, [['enter', c, t]])),
    (l = Ht(
      l,
      Pd(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t),
    )),
    (l = Ht(l, [['exit', c, t], e[a - 2], e[a - 1], ['exit', u, t]])),
    (l = Ht(l, e.slice(a + 1))),
    (l = Ht(l, [['exit', s, t]])),
    An(e, o, e.length, l),
    e
  );
}
function vT(e, t, n) {
  const r = this;
  let i = r.events.length,
    o,
    a;
  for (; i--; )
    if (
      (r.events[i][1].type === 'labelImage' ||
        r.events[i][1].type === 'labelLink') &&
      !r.events[i][1]._balanced
    ) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return o
      ? o._inactive
        ? f(d)
        : ((a = r.parser.defined.includes(
            bi(r.sliceSerialize({ start: o.end, end: r.now() })),
          )),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(d),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          s)
      : n(d);
  }
  function s(d) {
    return d === 40
      ? e.attempt(pT, c, a ? c : f)(d)
      : d === 91
        ? e.attempt(hT, c, a ? u : f)(d)
        : a
          ? c(d)
          : f(d);
  }
  function u(d) {
    return e.attempt(mT, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return (o._balanced = !0), n(d);
  }
}
function wT(e, t, n) {
  return r;
  function r(f) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(f),
      e.exit('resourceMarker'),
      i
    );
  }
  function i(f) {
    return bt(f) ? Co(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41
      ? c(f)
      : B1(
          e,
          a,
          l,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32,
        )(f);
  }
  function a(f) {
    return bt(f) ? Co(e, s)(f) : c(f);
  }
  function l(f) {
    return n(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40
      ? $1(
          e,
          u,
          n,
          'resourceTitle',
          'resourceTitleMarker',
          'resourceTitleString',
        )(f)
      : c(f);
  }
  function u(f) {
    return bt(f) ? Co(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41
      ? (e.enter('resourceMarker'),
        e.consume(f),
        e.exit('resourceMarker'),
        e.exit('resource'),
        t)
      : n(f);
  }
}
function xT(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return H1.call(
      r,
      e,
      o,
      a,
      'reference',
      'referenceMarker',
      'referenceString',
    )(l);
  }
  function o(l) {
    return r.parser.defined.includes(
      bi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(l)
      : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function kT(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(o),
      e.exit('referenceMarker'),
      i
    );
  }
  function i(o) {
    return o === 93
      ? (e.enter('referenceMarker'),
        e.consume(o),
        e.exit('referenceMarker'),
        e.exit('reference'),
        t)
      : n(o);
  }
}
const ST = { name: 'labelStartImage', tokenize: ET, resolveAll: Td.resolveAll };
function ET(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(l),
      e.exit('labelImageMarker'),
      o
    );
  }
  function o(l) {
    return l === 91
      ? (e.enter('labelMarker'),
        e.consume(l),
        e.exit('labelMarker'),
        e.exit('labelImage'),
        a)
      : n(l);
  }
  function a(l) {
    return l === 94 && '_hiddenFootnoteSupport' in r.parser.constructs
      ? n(l)
      : t(l);
  }
}
const bT = { name: 'labelStartLink', tokenize: CT, resolveAll: Td.resolveAll };
function CT(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(a),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      o
    );
  }
  function o(a) {
    return a === 94 && '_hiddenFootnoteSupport' in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const yu = { name: 'lineEnding', tokenize: PT };
function PT(e, t) {
  return n;
  function n(r) {
    return (
      e.enter('lineEnding'),
      e.consume(r),
      e.exit('lineEnding'),
      Se(e, t, 'linePrefix')
    );
  }
}
const dl = { name: 'thematicBreak', tokenize: TT };
function TT(e, t, n) {
  let r = 0,
    i;
  return o;
  function o(u) {
    return e.enter('thematicBreak'), a(u);
  }
  function a(u) {
    return (i = u), l(u);
  }
  function l(u) {
    return u === i
      ? (e.enter('thematicBreakSequence'), s(u))
      : r >= 3 && (u === null || G(u))
        ? (e.exit('thematicBreak'), t(u))
        : n(u);
  }
  function s(u) {
    return u === i
      ? (e.consume(u), r++, s)
      : (e.exit('thematicBreakSequence'),
        ge(u) ? Se(e, l, 'whitespace')(u) : l(u));
  }
}
const yt = {
    name: 'list',
    tokenize: _T,
    continuation: { tokenize: LT },
    exit: AT,
  },
  RT = { tokenize: IT, partial: !0 },
  OT = { tokenize: NT, partial: !0 };
function _T(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let o =
      i && i[1].type === 'linePrefix'
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    a = 0;
  return l;
  function l(p) {
    const g =
      r.containerState.type ||
      (p === 42 || p === 43 || p === 45 ? 'listUnordered' : 'listOrdered');
    if (
      g === 'listUnordered'
        ? !r.containerState.marker || p === r.containerState.marker
        : qc(p)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = g), e.enter(g, { _container: !0 })),
        g === 'listUnordered')
      )
        return (
          e.enter('listItemPrefix'),
          p === 42 || p === 45 ? e.check(dl, n, u)(p) : u(p)
        );
      if (!r.interrupt || p === 49)
        return e.enter('listItemPrefix'), e.enter('listItemValue'), s(p);
    }
    return n(p);
  }
  function s(p) {
    return qc(p) && ++a < 10
      ? (e.consume(p), s)
      : (!r.interrupt || a < 2) &&
          (r.containerState.marker
            ? p === r.containerState.marker
            : p === 41 || p === 46)
        ? (e.exit('listItemValue'), u(p))
        : n(p);
  }
  function u(p) {
    return (
      e.enter('listItemMarker'),
      e.consume(p),
      e.exit('listItemMarker'),
      (r.containerState.marker = r.containerState.marker || p),
      e.check(Es, r.interrupt ? n : c, e.attempt(RT, d, f))
    );
  }
  function c(p) {
    return (r.containerState.initialBlankLine = !0), o++, d(p);
  }
  function f(p) {
    return ge(p)
      ? (e.enter('listItemPrefixWhitespace'),
        e.consume(p),
        e.exit('listItemPrefixWhitespace'),
        d)
      : n(p);
  }
  function d(p) {
    return (
      (r.containerState.size =
        o + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      t(p)
    );
  }
}
function LT(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(Es, i, o);
  function i(l) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      Se(e, t, 'listItemIndent', r.containerState.size + 1)(l)
    );
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !ge(l)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        a(l))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(OT, t, a)(l));
  }
  function a(l) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      Se(
        e,
        e.attempt(yt, t, n),
        'linePrefix',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(l)
    );
  }
}
function NT(e, t, n) {
  const r = this;
  return Se(e, i, 'listItemIndent', r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === 'listItemIndent' &&
      a[2].sliceSerialize(a[1], !0).length === r.containerState.size
      ? t(o)
      : n(o);
  }
}
function AT(e) {
  e.exit(this.containerState.type);
}
function IT(e, t, n) {
  const r = this;
  return Se(
    e,
    i,
    'listItemPrefixWhitespace',
    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !ge(o) && a && a[1].type === 'listItemPrefixWhitespace'
      ? t(o)
      : n(o);
  }
}
const wm = { name: 'setextUnderline', tokenize: DT, resolveTo: zT };
function zT(e, t) {
  let n = e.length,
    r,
    i,
    o;
  for (; n--; )
    if (e[n][0] === 'enter') {
      if (e[n][1].type === 'content') {
        r = n;
        break;
      }
      e[n][1].type === 'paragraph' && (i = n);
    } else
      e[n][1].type === 'content' && e.splice(n, 1),
        !o && e[n][1].type === 'definition' && (o = n);
  const a = {
    type: 'setextHeading',
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  return (
    (e[i][1].type = 'setextHeadingText'),
    o
      ? (e.splice(i, 0, ['enter', a, t]),
        e.splice(o + 1, 0, ['exit', e[r][1], t]),
        (e[r][1].end = Object.assign({}, e[o][1].end)))
      : (e[r][1] = a),
    e.push(['exit', a, t]),
    e
  );
}
function DT(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let c = r.events.length,
      f;
    for (; c--; )
      if (
        r.events[c][1].type !== 'lineEnding' &&
        r.events[c][1].type !== 'linePrefix' &&
        r.events[c][1].type !== 'content'
      ) {
        f = r.events[c][1].type === 'paragraph';
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f)
      ? (e.enter('setextHeadingLine'), (i = u), a(u))
      : n(u);
  }
  function a(u) {
    return e.enter('setextHeadingLineSequence'), l(u);
  }
  function l(u) {
    return u === i
      ? (e.consume(u), l)
      : (e.exit('setextHeadingLineSequence'),
        ge(u) ? Se(e, s, 'lineSuffix')(u) : s(u));
  }
  function s(u) {
    return u === null || G(u) ? (e.exit('setextHeadingLine'), t(u)) : n(u);
  }
}
const MT = { tokenize: FT };
function FT(e) {
  const t = this,
    n = e.attempt(
      Es,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        Se(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt($P, i)),
          'linePrefix',
        ),
      ),
    );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(o),
      e.exit('lineEndingBlank'),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(o),
      e.exit('lineEnding'),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const jT = { resolveAll: W1() },
  UT = V1('string'),
  BT = V1('text');
function V1(e) {
  return { tokenize: t, resolveAll: W1(e === 'text' ? HT : void 0) };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      o = n.attempt(i, a, l);
    return a;
    function a(c) {
      return u(c) ? o(c) : l(c);
    }
    function l(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter('data'), n.consume(c), s;
    }
    function s(c) {
      return u(c) ? (n.exit('data'), o(c)) : (n.consume(c), s);
    }
    function u(c) {
      if (c === null) return !0;
      const f = i[c];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function W1(e) {
  return t;
  function t(n, r) {
    let i = -1,
      o;
    for (; ++i <= n.length; )
      o === void 0
        ? n[i] && n[i][1].type === 'data' && ((o = i), i++)
        : (!n[i] || n[i][1].type !== 'data') &&
          (i !== o + 2 &&
            ((n[o][1].end = n[i - 1][1].end),
            n.splice(o + 2, i - o - 2),
            (i = o + 2)),
          (o = void 0));
    return e ? e(n, r) : n;
  }
}
function HT(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === 'lineEnding') &&
      e[n - 1][1].type === 'data'
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let o = i.length,
        a = -1,
        l = 0,
        s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == 'string') {
          for (a = u.length; u.charCodeAt(a - 1) === 32; ) l++, a--;
          if (a) break;
          a = -1;
        } else if (u === -2) (s = !0), l++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (l) {
        const u = {
          type:
            n === e.length || s || l < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
            _index: r.start._index + o,
            _bufferIndex: o ? a : r.start._bufferIndex + a,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, u.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, u)
            : (e.splice(n, 0, ['enter', u, t], ['exit', u, t]), (n += 2));
      }
      n++;
    }
  return e;
}
function $T(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 },
  );
  const i = {},
    o = [];
  let a = [],
    l = [];
  const s = {
      consume: m,
      enter: y,
      exit: C,
      attempt: x(T),
      check: x(S),
      interrupt: x(S, { interrupt: !0 }),
    },
    u = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: p,
      sliceSerialize: d,
      now: g,
      defineSkip: v,
      write: f,
    };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && o.push(t), u;
  function f(U) {
    return (
      (a = Ht(a, U)),
      b(),
      a[a.length - 1] !== null
        ? []
        : (L(t, 0), (u.events = Pd(o, u.events, u)), u.events)
    );
  }
  function d(U, B) {
    return WT(p(U), B);
  }
  function p(U) {
    return VT(a, U);
  }
  function g() {
    const { line: U, column: B, offset: X, _index: se, _bufferIndex: ee } = r;
    return { line: U, column: B, offset: X, _index: se, _bufferIndex: ee };
  }
  function v(U) {
    (i[U.line] = U.column), z();
  }
  function b() {
    let U;
    for (; r._index < a.length; ) {
      const B = a[r._index];
      if (typeof B == 'string')
        for (
          U = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === U && r._bufferIndex < B.length;
        )
          h(B.charCodeAt(r._bufferIndex));
      else h(B);
    }
  }
  function h(U) {
    c = c(U);
  }
  function m(U) {
    G(U)
      ? (r.line++, (r.column = 1), (r.offset += U === -3 ? 2 : 1), z())
      : U !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === a[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (u.previous = U);
  }
  function y(U, B) {
    const X = B || {};
    return (
      (X.type = U),
      (X.start = g()),
      u.events.push(['enter', X, u]),
      l.push(X),
      X
    );
  }
  function C(U) {
    const B = l.pop();
    return (B.end = g()), u.events.push(['exit', B, u]), B;
  }
  function T(U, B) {
    L(U, B.from);
  }
  function S(U, B) {
    B.restore();
  }
  function x(U, B) {
    return X;
    function X(se, ee, Ee) {
      let we, N, K, w;
      return Array.isArray(se) ? ue(se) : 'tokenize' in se ? ue([se]) : ae(se);
      function ae(he) {
        return Ke;
        function Ke(It) {
          const Dn = It !== null && he[It],
            Mn = It !== null && he.null,
            qr = [
              ...(Array.isArray(Dn) ? Dn : Dn ? [Dn] : []),
              ...(Array.isArray(Mn) ? Mn : Mn ? [Mn] : []),
            ];
          return ue(qr)(It);
        }
      }
      function ue(he) {
        return (we = he), (N = 0), he.length === 0 ? Ee : k(he[N]);
      }
      function k(he) {
        return Ke;
        function Ke(It) {
          return (
            (w = M()),
            (K = he),
            he.partial || (u.currentConstruct = he),
            he.name && u.parser.constructs.disable.null.includes(he.name)
              ? Fe()
              : he.tokenize.call(
                  B ? Object.assign(Object.create(u), B) : u,
                  s,
                  be,
                  Fe,
                )(It)
          );
        }
      }
      function be(he) {
        return U(K, w), ee;
      }
      function Fe(he) {
        return w.restore(), ++N < we.length ? k(we[N]) : Ee;
      }
    }
  }
  function L(U, B) {
    U.resolveAll && !o.includes(U) && o.push(U),
      U.resolve &&
        An(u.events, B, u.events.length - B, U.resolve(u.events.slice(B), u)),
      U.resolveTo && (u.events = U.resolveTo(u.events, u));
  }
  function M() {
    const U = g(),
      B = u.previous,
      X = u.currentConstruct,
      se = u.events.length,
      ee = Array.from(l);
    return { restore: Ee, from: se };
    function Ee() {
      (r = U),
        (u.previous = B),
        (u.currentConstruct = X),
        (u.events.length = se),
        (l = ee),
        z();
    }
  }
  function z() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function VT(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    o = t.end._bufferIndex;
  let a;
  if (n === i) a = [e[n].slice(r, o)];
  else {
    if (((a = e.slice(n, i)), r > -1)) {
      const l = a[0];
      typeof l == 'string' ? (a[0] = l.slice(r)) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function WT(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == 'string') a = o;
    else
      switch (o) {
        case -5: {
          a = '\r';
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? ' ' : '	';
          break;
        }
        case -1: {
          if (!t && i) continue;
          a = ' ';
          break;
        }
        default:
          a = String.fromCharCode(o);
      }
    (i = o === -2), r.push(a);
  }
  return r.join('');
}
const YT = {
    42: yt,
    43: yt,
    45: yt,
    48: yt,
    49: yt,
    50: yt,
    51: yt,
    52: yt,
    53: yt,
    54: yt,
    55: yt,
    56: yt,
    57: yt,
    62: M1,
  },
  qT = { 91: KP },
  KT = { [-2]: gu, [-1]: gu, 32: gu },
  QT = {
    35: eT,
    42: dl,
    45: [wm, dl],
    60: iT,
    61: wm,
    95: dl,
    96: ym,
    126: ym,
  },
  XT = { 38: j1, 92: F1 },
  GT = {
    [-5]: yu,
    [-4]: yu,
    [-3]: yu,
    33: ST,
    38: j1,
    42: Kc,
    60: [bP, fT],
    91: bT,
    92: [JP, F1],
    93: Td,
    95: Kc,
    96: MP,
  },
  JT = { null: [Kc, jT] },
  ZT = { null: [42, 95] },
  e4 = { null: [] },
  t4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: ZT,
        contentInitial: qT,
        disable: e4,
        document: YT,
        flow: QT,
        flowInitial: KT,
        insideSpan: JT,
        string: XT,
        text: GT,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function n4(e) {
  const n = uP([t4, ...((e || {}).extensions || [])]),
    r = {
      defined: [],
      lazy: {},
      constructs: n,
      content: i(yP),
      document: i(wP),
      flow: i(MT),
      string: i(UT),
      text: i(BT),
    };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return $T(r, o, l);
    }
  }
}
function r4(e) {
  for (; !U1(e); );
  return e;
}
const xm = /[\0\t\n\r]/g;
function i4() {
  let e = 1,
    t = '',
    n = !0,
    r;
  return i;
  function i(o, a, l) {
    const s = [];
    let u, c, f, d, p;
    for (
      o =
        t +
        (typeof o == 'string'
          ? o.toString()
          : new TextDecoder(a || void 0).decode(o)),
        f = 0,
        t = '',
        n && (o.charCodeAt(0) === 65279 && f++, (n = void 0));
      f < o.length;
    ) {
      if (
        ((xm.lastIndex = f),
        (u = xm.exec(o)),
        (d = u && u.index !== void 0 ? u.index : o.length),
        (p = o.charCodeAt(d)),
        !u)
      ) {
        t = o.slice(f);
        break;
      }
      if (p === 10 && f === d && r) s.push(-3), (r = void 0);
      else
        switch (
          (r && (s.push(-5), (r = void 0)),
          f < d && (s.push(o.slice(f, d)), (e += d - f)),
          p)
        ) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      f = d + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const o4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function a4(e) {
  return e.replace(o4, l4);
}
function l4(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      o = i === 120 || i === 88;
    return D1(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Cd(n) || e;
}
const Y1 = {}.hasOwnProperty;
function s4(e, t, n) {
  return (
    typeof t != 'string' && ((n = t), (t = void 0)),
    u4(n)(
      r4(
        n4(n)
          .document()
          .write(i4()(e, t, !0)),
      ),
    )
  );
}
function u4(e) {
  const t = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: o(ma),
      autolinkProtocol: M,
      autolinkEmail: M,
      atxHeading: o(pa),
      blockQuote: o(Mn),
      characterEscape: M,
      characterReference: M,
      codeFenced: o(qr),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(qr, a),
      codeText: o(ft, a),
      codeTextData: M,
      data: M,
      codeFlowValue: M,
      definition: o(gr),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(da),
      hardBreakEscape: o(sn),
      hardBreakTrailing: o(sn),
      htmlFlow: o(ha, a),
      htmlFlowData: M,
      htmlText: o(ha, a),
      htmlTextData: M,
      image: o(Ps),
      label: a,
      link: o(ma),
      listItem: o(Ts),
      listItemValue: d,
      listOrdered: o(ga, f),
      listUnordered: o(ga),
      paragraph: o(yr),
      reference: k,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(pa),
      strong: o(vr),
      thematicBreak: o($i),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: T,
      autolink: s(),
      autolinkEmail: Dn,
      autolinkProtocol: It,
      blockQuote: s(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: Fe,
      characterReferenceMarkerNumeric: Fe,
      characterReferenceValue: he,
      characterReference: Ke,
      codeFenced: s(b),
      codeFencedFence: v,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: g,
      codeFlowValue: z,
      codeIndented: s(h),
      codeText: s(ee),
      codeTextData: z,
      data: z,
      definition: s(),
      definitionDestinationString: C,
      definitionLabelString: m,
      definitionTitleString: y,
      emphasis: s(),
      hardBreakEscape: s(B),
      hardBreakTrailing: s(B),
      htmlFlow: s(X),
      htmlFlowData: z,
      htmlText: s(se),
      htmlTextData: z,
      image: s(we),
      label: K,
      labelText: N,
      lineEnding: U,
      link: s(Ee),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: be,
      resourceDestinationString: w,
      resourceTitleString: ae,
      resource: ue,
      setextHeading: s(L),
      setextHeadingLineSequence: x,
      setextHeadingText: S,
      strong: s(),
      thematicBreak: s(),
    },
  };
  q1(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(O) {
    let j = { type: 'root', children: [] };
    const J = {
        stack: [j],
        tokenStack: [],
        config: t,
        enter: l,
        exit: u,
        buffer: a,
        resume: c,
        data: n,
      },
      le = [];
    let ye = -1;
    for (; ++ye < O.length; )
      if (O[ye][1].type === 'listOrdered' || O[ye][1].type === 'listUnordered')
        if (O[ye][0] === 'enter') le.push(ye);
        else {
          const Be = le.pop();
          ye = i(O, Be, ye);
        }
    for (ye = -1; ++ye < O.length; ) {
      const Be = t[O[ye][0]];
      Y1.call(Be, O[ye][1].type) &&
        Be[O[ye][1].type].call(
          Object.assign({ sliceSerialize: O[ye][2].sliceSerialize }, J),
          O[ye][1],
        );
    }
    if (J.tokenStack.length > 0) {
      const Be = J.tokenStack[J.tokenStack.length - 1];
      (Be[1] || km).call(J, void 0, Be[0]);
    }
    for (
      j.position = {
        start: $n(
          O.length > 0 ? O[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: $n(
          O.length > 0
            ? O[O.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        ye = -1;
      ++ye < t.transforms.length;
    )
      j = t.transforms[ye](j) || j;
    return j;
  }
  function i(O, j, J) {
    let le = j - 1,
      ye = -1,
      Be = !1,
      un,
      zt,
      Fn,
      wr;
    for (; ++le <= J; ) {
      const it = O[le];
      switch (it[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          it[0] === 'enter' ? ye++ : ye--, (wr = void 0);
          break;
        }
        case 'lineEndingBlank': {
          it[0] === 'enter' &&
            (un && !wr && !ye && !Fn && (Fn = le), (wr = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          wr = void 0;
      }
      if (
        (!ye && it[0] === 'enter' && it[1].type === 'listItemPrefix') ||
        (ye === -1 &&
          it[0] === 'exit' &&
          (it[1].type === 'listUnordered' || it[1].type === 'listOrdered'))
      ) {
        if (un) {
          let Qt = le;
          for (zt = void 0; Qt--; ) {
            const Dt = O[Qt];
            if (
              Dt[1].type === 'lineEnding' ||
              Dt[1].type === 'lineEndingBlank'
            ) {
              if (Dt[0] === 'exit') continue;
              zt && ((O[zt][1].type = 'lineEndingBlank'), (Be = !0)),
                (Dt[1].type = 'lineEnding'),
                (zt = Qt);
            } else if (
              !(
                Dt[1].type === 'linePrefix' ||
                Dt[1].type === 'blockQuotePrefix' ||
                Dt[1].type === 'blockQuotePrefixWhitespace' ||
                Dt[1].type === 'blockQuoteMarker' ||
                Dt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          Fn && (!zt || Fn < zt) && (un._spread = !0),
            (un.end = Object.assign({}, zt ? O[zt][1].start : it[1].end)),
            O.splice(zt || le, 0, ['exit', un, it[2]]),
            le++,
            J++;
        }
        if (it[1].type === 'listItemPrefix') {
          const Qt = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, it[1].start),
            end: void 0,
          };
          (un = Qt),
            O.splice(le, 0, ['enter', Qt, it[2]]),
            le++,
            J++,
            (Fn = void 0),
            (wr = !0);
        }
      }
    }
    return (O[j][1]._spread = Be), J;
  }
  function o(O, j) {
    return J;
    function J(le) {
      l.call(this, O(le), le), j && j.call(this, le);
    }
  }
  function a() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function l(O, j, J) {
    this.stack[this.stack.length - 1].children.push(O),
      this.stack.push(O),
      this.tokenStack.push([j, J]),
      (O.position = { start: $n(j.start), end: void 0 });
  }
  function s(O) {
    return j;
    function j(J) {
      O && O.call(this, J), u.call(this, J);
    }
  }
  function u(O, j) {
    const J = this.stack.pop(),
      le = this.tokenStack.pop();
    if (le)
      le[0].type !== O.type &&
        (j ? j.call(this, O, le[0]) : (le[1] || km).call(this, O, le[0]));
    else
      throw new Error(
        'Cannot close `' +
          O.type +
          '` (' +
          bo({ start: O.start, end: O.end }) +
          '): it’s not open',
      );
    J.position.end = $n(O.end);
  }
  function c() {
    return lP(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(O) {
    if (this.data.expectingFirstListItemValue) {
      const j = this.stack[this.stack.length - 2];
      (j.start = Number.parseInt(this.sliceSerialize(O), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function p() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.lang = O;
  }
  function g() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.meta = O;
  }
  function v() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function b() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    (j.value = O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')),
      (this.data.flowCodeInside = void 0);
  }
  function h() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = O.replace(/(\r?\n|\r)$/g, '');
  }
  function m(O) {
    const j = this.resume(),
      J = this.stack[this.stack.length - 1];
    (J.label = j), (J.identifier = bi(this.sliceSerialize(O)).toLowerCase());
  }
  function y() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.title = O;
  }
  function C() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.url = O;
  }
  function T(O) {
    const j = this.stack[this.stack.length - 1];
    if (!j.depth) {
      const J = this.sliceSerialize(O).length;
      j.depth = J;
    }
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function x(O) {
    const j = this.stack[this.stack.length - 1];
    j.depth = this.sliceSerialize(O).codePointAt(0) === 61 ? 1 : 2;
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function M(O) {
    const J = this.stack[this.stack.length - 1].children;
    let le = J[J.length - 1];
    (!le || le.type !== 'text') &&
      ((le = ya()),
      (le.position = { start: $n(O.start), end: void 0 }),
      J.push(le)),
      this.stack.push(le);
  }
  function z(O) {
    const j = this.stack.pop();
    (j.value += this.sliceSerialize(O)), (j.position.end = $n(O.end));
  }
  function U(O) {
    const j = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const J = j.children[j.children.length - 1];
      (J.position.end = $n(O.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(j.type) &&
      (M.call(this, O), z.call(this, O));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function X() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = O;
  }
  function se() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = O;
  }
  function ee() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = O;
  }
  function Ee() {
    const O = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || 'shortcut';
      (O.type += 'Reference'),
        (O.referenceType = j),
        delete O.url,
        delete O.title;
    } else delete O.identifier, delete O.label;
    this.data.referenceType = void 0;
  }
  function we() {
    const O = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || 'shortcut';
      (O.type += 'Reference'),
        (O.referenceType = j),
        delete O.url,
        delete O.title;
    } else delete O.identifier, delete O.label;
    this.data.referenceType = void 0;
  }
  function N(O) {
    const j = this.sliceSerialize(O),
      J = this.stack[this.stack.length - 2];
    (J.label = a4(j)), (J.identifier = bi(j).toLowerCase());
  }
  function K() {
    const O = this.stack[this.stack.length - 1],
      j = this.resume(),
      J = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), J.type === 'link')) {
      const le = O.children;
      J.children = le;
    } else J.alt = j;
  }
  function w() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.url = O;
  }
  function ae() {
    const O = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.title = O;
  }
  function ue() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = 'collapsed';
  }
  function be(O) {
    const j = this.resume(),
      J = this.stack[this.stack.length - 1];
    (J.label = j),
      (J.identifier = bi(this.sliceSerialize(O)).toLowerCase()),
      (this.data.referenceType = 'full');
  }
  function Fe(O) {
    this.data.characterReferenceType = O.type;
  }
  function he(O) {
    const j = this.sliceSerialize(O),
      J = this.data.characterReferenceType;
    let le;
    J
      ? ((le = D1(j, J === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (le = Cd(j));
    const ye = this.stack[this.stack.length - 1];
    ye.value += le;
  }
  function Ke(O) {
    const j = this.stack.pop();
    j.position.end = $n(O.end);
  }
  function It(O) {
    z.call(this, O);
    const j = this.stack[this.stack.length - 1];
    j.url = this.sliceSerialize(O);
  }
  function Dn(O) {
    z.call(this, O);
    const j = this.stack[this.stack.length - 1];
    j.url = 'mailto:' + this.sliceSerialize(O);
  }
  function Mn() {
    return { type: 'blockquote', children: [] };
  }
  function qr() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function ft() {
    return { type: 'inlineCode', value: '' };
  }
  function gr() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: '',
    };
  }
  function da() {
    return { type: 'emphasis', children: [] };
  }
  function pa() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function sn() {
    return { type: 'break' };
  }
  function ha() {
    return { type: 'html', value: '' };
  }
  function Ps() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function ma() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function ga(O) {
    return {
      type: 'list',
      ordered: O.type === 'listOrdered',
      start: null,
      spread: O._spread,
      children: [],
    };
  }
  function Ts(O) {
    return { type: 'listItem', spread: O._spread, checked: null, children: [] };
  }
  function yr() {
    return { type: 'paragraph', children: [] };
  }
  function vr() {
    return { type: 'strong', children: [] };
  }
  function ya() {
    return { type: 'text', value: '' };
  }
  function $i() {
    return { type: 'thematicBreak' };
  }
}
function $n(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function q1(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? q1(e, r) : c4(e, r);
  }
}
function c4(e, t) {
  let n;
  for (n in t)
    if (Y1.call(t, n))
      switch (n) {
        case 'canContainEols': {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case 'transforms': {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case 'enter':
        case 'exit': {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function km(e, t) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          bo({ start: e.start, end: e.end }) +
          '): a different token (`' +
          t.type +
          '`, ' +
          bo({ start: t.start, end: t.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          t.type +
          '`, ' +
          bo({ start: t.start, end: t.end }) +
          ') is still open',
      );
}
function f4(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return s4(r, {
      ...t.data('settings'),
      ...e,
      extensions: t.data('micromarkExtensions') || [],
      mdastExtensions: t.data('fromMarkdownExtensions') || [],
    });
  }
}
function d4(e, t) {
  const n = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function p4(e, t) {
  const n = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function h4(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : '',
    r = {};
  t.lang && (r.className = ['language-' + t.lang]);
  let i = {
    type: 'element',
    tagName: 'code',
    properties: r,
    children: [{ type: 'text', value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: 'element', tagName: 'pre', properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function m4(e, t) {
  const n = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function g4(e, t) {
  const n = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function y4(e, t) {
  const n =
      typeof e.options.clobberPrefix == 'string'
        ? e.options.clobberPrefix
        : 'user-content-',
    r = String(t.identifier).toUpperCase(),
    i = Hi(r.toLowerCase()),
    o = e.footnoteOrder.indexOf(r);
  let a,
    l = e.footnoteCounts.get(r);
  l === void 0
    ? ((l = 0), e.footnoteOrder.push(r), (a = e.footnoteOrder.length))
    : (a = o + 1),
    (l += 1),
    e.footnoteCounts.set(r, l);
  const s = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + n + 'fn-' + i,
      id: n + 'fnref-' + i + (l > 1 ? '-' + l : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(a) }],
  };
  e.patch(t, s);
  const u = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
  return e.patch(t, u), e.applyData(t, u);
}
function v4(e, t) {
  const n = {
    type: 'element',
    tagName: 'h' + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function w4(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: 'raw', value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function K1(e, t) {
  const n = t.referenceType;
  let r = ']';
  if (
    (n === 'collapsed'
      ? (r += '[]')
      : n === 'full' && (r += '[' + (t.label || t.identifier) + ']'),
    t.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + t.alt + r }];
  const i = e.all(t),
    o = i[0];
  o && o.type === 'text'
    ? (o.value = '[' + o.value)
    : i.unshift({ type: 'text', value: '[' });
  const a = i[i.length - 1];
  return (
    a && a.type === 'text'
      ? (a.value += r)
      : i.push({ type: 'text', value: r }),
    i
  );
}
function x4(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return K1(e, t);
  const i = { src: Hi(r.url || ''), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: 'element', tagName: 'img', properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function k4(e, t) {
  const n = { src: Hi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: 'element', tagName: 'img', properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function S4(e, t) {
  const n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
  e.patch(t, n);
  const r = { type: 'element', tagName: 'code', properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function E4(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return K1(e, t);
  const i = { href: Hi(r.url || '') };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: 'element',
    tagName: 'a',
    properties: i,
    children: e.all(t),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function b4(e, t) {
  const n = { href: Hi(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: 'element',
    tagName: 'a',
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function C4(e, t, n) {
  const r = e.all(t),
    i = n ? P4(n) : Q1(t),
    o = {},
    a = [];
  if (typeof t.checked == 'boolean') {
    const c = r[0];
    let f;
    c && c.type === 'element' && c.tagName === 'p'
      ? (f = c)
      : ((f = { type: 'element', tagName: 'p', properties: {}, children: [] }),
        r.unshift(f)),
      f.children.length > 0 && f.children.unshift({ type: 'text', value: ' ' }),
      f.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: t.checked, disabled: !0 },
        children: [],
      }),
      (o.className = ['task-list-item']);
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const c = r[l];
    (i || l !== 0 || c.type !== 'element' || c.tagName !== 'p') &&
      a.push({
        type: 'text',
        value: `
`,
      }),
      c.type === 'element' && c.tagName === 'p' && !i
        ? a.push(...c.children)
        : a.push(c);
  }
  const s = r[r.length - 1];
  s &&
    (i || s.type !== 'element' || s.tagName !== 'p') &&
    a.push({
      type: 'text',
      value: `
`,
    });
  const u = { type: 'element', tagName: 'li', properties: o, children: a };
  return e.patch(t, u), e.applyData(t, u);
}
function P4(e) {
  let t = !1;
  if (e.type === 'list') {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = Q1(n[r]);
  }
  return t;
}
function Q1(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function T4(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == 'number' && t.start !== 1 && (n.start = t.start);
    ++i < r.length;
  ) {
    const a = r[i];
    if (
      a.type === 'element' &&
      a.tagName === 'li' &&
      a.properties &&
      Array.isArray(a.properties.className) &&
      a.properties.className.includes('task-list-item')
    ) {
      n.className = ['contains-task-list'];
      break;
    }
  }
  const o = {
    type: 'element',
    tagName: t.ordered ? 'ol' : 'ul',
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function R4(e, t) {
  const n = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function O4(e, t) {
  const n = { type: 'root', children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function _4(e, t) {
  const n = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function L4(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const a = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
        type: 'element',
        tagName: 'tbody',
        properties: {},
        children: e.wrap(n, !0),
      },
      l = kd(t.children[1]),
      s = O1(t.children[t.children.length - 1]);
    l && s && (a.position = { start: l, end: s }), i.push(a);
  }
  const o = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function N4(e, t, n) {
  const r = n ? n.children : void 0,
    o = (r ? r.indexOf(t) : 1) === 0 ? 'th' : 'td',
    a = n && n.type === 'table' ? n.align : void 0,
    l = a ? a.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const f = t.children[s],
      d = {},
      p = a ? a[s] : void 0;
    p && (d.align = p);
    let g = { type: 'element', tagName: o, properties: d, children: [] };
    f && ((g.children = e.all(f)), e.patch(f, g), (g = e.applyData(f, g))),
      u.push(g);
  }
  const c = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: e.wrap(u, !0),
  };
  return e.patch(t, c), e.applyData(t, c);
}
function A4(e, t) {
  const n = {
    type: 'element',
    tagName: 'td',
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Sm = 9,
  Em = 32;
function I4(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const o = [];
  for (; r; )
    o.push(bm(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return o.push(bm(t.slice(i), i > 0, !1)), o.join('');
}
function bm(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Sm || o === Em; ) r++, (o = e.codePointAt(r));
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Sm || o === Em; ) i--, (o = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : '';
}
function z4(e, t) {
  const n = { type: 'text', value: I4(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function D4(e, t) {
  const n = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const M4 = {
  blockquote: d4,
  break: p4,
  code: h4,
  delete: m4,
  emphasis: g4,
  footnoteReference: y4,
  heading: v4,
  html: w4,
  imageReference: x4,
  image: k4,
  inlineCode: S4,
  linkReference: E4,
  link: b4,
  listItem: C4,
  list: T4,
  paragraph: R4,
  root: O4,
  strong: _4,
  table: L4,
  tableCell: A4,
  tableRow: N4,
  text: z4,
  thematicBreak: D4,
  toml: qa,
  yaml: qa,
  definition: qa,
  footnoteDefinition: qa,
};
function qa() {}
const X1 = -1,
  bs = 0,
  Yl = 1,
  ql = 2,
  Rd = 3,
  Od = 4,
  _d = 5,
  Ld = 6,
  G1 = 7,
  J1 = 8,
  Cm = typeof self == 'object' ? self : globalThis,
  F4 = (e, t) => {
    const n = (i, o) => (e.set(o, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [o, a] = t[i];
        switch (o) {
          case bs:
          case X1:
            return n(a, i);
          case Yl: {
            const l = n([], i);
            for (const s of a) l.push(r(s));
            return l;
          }
          case ql: {
            const l = n({}, i);
            for (const [s, u] of a) l[r(s)] = r(u);
            return l;
          }
          case Rd:
            return n(new Date(a), i);
          case Od: {
            const { source: l, flags: s } = a;
            return n(new RegExp(l, s), i);
          }
          case _d: {
            const l = n(new Map(), i);
            for (const [s, u] of a) l.set(r(s), r(u));
            return l;
          }
          case Ld: {
            const l = n(new Set(), i);
            for (const s of a) l.add(r(s));
            return l;
          }
          case G1: {
            const { name: l, message: s } = a;
            return n(new Cm[l](s), i);
          }
          case J1:
            return n(BigInt(a), i);
          case 'BigInt':
            return n(Object(BigInt(a)), i);
        }
        return n(new Cm[o](a), i);
      };
    return r;
  },
  Pm = (e) => F4(new Map(), e)(0),
  Zr = '',
  { toString: j4 } = {},
  { keys: U4 } = Object,
  oo = (e) => {
    const t = typeof e;
    if (t !== 'object' || !e) return [bs, t];
    const n = j4.call(e).slice(8, -1);
    switch (n) {
      case 'Array':
        return [Yl, Zr];
      case 'Object':
        return [ql, Zr];
      case 'Date':
        return [Rd, Zr];
      case 'RegExp':
        return [Od, Zr];
      case 'Map':
        return [_d, Zr];
      case 'Set':
        return [Ld, Zr];
    }
    return n.includes('Array')
      ? [Yl, n]
      : n.includes('Error')
        ? [G1, n]
        : [ql, n];
  },
  Ka = ([e, t]) => e === bs && (t === 'function' || t === 'symbol'),
  B4 = (e, t, n, r) => {
    const i = (a, l) => {
        const s = r.push(a) - 1;
        return n.set(l, s), s;
      },
      o = (a) => {
        if (n.has(a)) return n.get(a);
        let [l, s] = oo(a);
        switch (l) {
          case bs: {
            let c = a;
            switch (s) {
              case 'bigint':
                (l = J1), (c = a.toString());
                break;
              case 'function':
              case 'symbol':
                if (e) throw new TypeError('unable to serialize ' + s);
                c = null;
                break;
              case 'undefined':
                return i([X1], a);
            }
            return i([l, c], a);
          }
          case Yl: {
            if (s) return i([s, [...a]], a);
            const c = [],
              f = i([l, c], a);
            for (const d of a) c.push(o(d));
            return f;
          }
          case ql: {
            if (s)
              switch (s) {
                case 'BigInt':
                  return i([s, a.toString()], a);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return i([s, a.valueOf()], a);
              }
            if (t && 'toJSON' in a) return o(a.toJSON());
            const c = [],
              f = i([l, c], a);
            for (const d of U4(a))
              (e || !Ka(oo(a[d]))) && c.push([o(d), o(a[d])]);
            return f;
          }
          case Rd:
            return i([l, a.toISOString()], a);
          case Od: {
            const { source: c, flags: f } = a;
            return i([l, { source: c, flags: f }], a);
          }
          case _d: {
            const c = [],
              f = i([l, c], a);
            for (const [d, p] of a)
              (e || !(Ka(oo(d)) || Ka(oo(p)))) && c.push([o(d), o(p)]);
            return f;
          }
          case Ld: {
            const c = [],
              f = i([l, c], a);
            for (const d of a) (e || !Ka(oo(d))) && c.push(o(d));
            return f;
          }
        }
        const { message: u } = a;
        return i([l, { name: s, message: u }], a);
      };
    return o;
  },
  Tm = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return B4(!(t || n), !!t, new Map(), r)(e), r;
  },
  Kl =
    typeof structuredClone == 'function'
      ? (e, t) =>
          t && ('json' in t || 'lossy' in t) ? Pm(Tm(e, t)) : structuredClone(e)
      : (e, t) => Pm(Tm(e, t));
function H4(e, t) {
  const n = [{ type: 'text', value: '↩' }];
  return (
    t > 1 &&
      n.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(t) }],
      }),
    n
  );
}
function $4(e, t) {
  return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
}
function V4(e) {
  const t =
      typeof e.options.clobberPrefix == 'string'
        ? e.options.clobberPrefix
        : 'user-content-',
    n = e.options.footnoteBackContent || H4,
    r = e.options.footnoteBackLabel || $4,
    i = e.options.footnoteLabel || 'Footnotes',
    o = e.options.footnoteLabelTagName || 'h2',
    a = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(e.footnoteOrder[s]);
    if (!u) continue;
    const c = e.all(u),
      f = String(u.identifier).toUpperCase(),
      d = Hi(f.toLowerCase());
    let p = 0;
    const g = [],
      v = e.footnoteCounts.get(f);
    for (; v !== void 0 && ++p <= v; ) {
      g.length > 0 && g.push({ type: 'text', value: ' ' });
      let m = typeof n == 'string' ? n : n(s, p);
      typeof m == 'string' && (m = { type: 'text', value: m }),
        g.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + t + 'fnref-' + d + (p > 1 ? '-' + p : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof r == 'string' ? r : r(s, p),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(m) ? m : [m],
        });
    }
    const b = c[c.length - 1];
    if (b && b.type === 'element' && b.tagName === 'p') {
      const m = b.children[b.children.length - 1];
      m && m.type === 'text'
        ? (m.value += ' ')
        : b.children.push({ type: 'text', value: ' ' }),
        b.children.push(...g);
    } else c.push(...g);
    const h = {
      type: 'element',
      tagName: 'li',
      properties: { id: t + 'fn-' + d },
      children: e.wrap(c, !0),
    };
    e.patch(u, h), l.push(h);
  }
  if (l.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: o,
          properties: { ...Kl(a), id: 'footnote-label' },
          children: [{ type: 'text', value: i }],
        },
        {
          type: 'text',
          value: `
`,
        },
        {
          type: 'element',
          tagName: 'ol',
          properties: {},
          children: e.wrap(l, !0),
        },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const Z1 = function (e) {
  if (e == null) return K4;
  if (typeof e == 'function') return Cs(e);
  if (typeof e == 'object') return Array.isArray(e) ? W4(e) : Y4(e);
  if (typeof e == 'string') return q4(e);
  throw new Error('Expected function, string, or object as test');
};
function W4(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = Z1(e[n]);
  return Cs(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; ) if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Y4(e) {
  const t = e;
  return Cs(n);
  function n(r) {
    const i = r;
    let o;
    for (o in e) if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function q4(e) {
  return Cs(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Cs(e) {
  return t;
  function t(n, r, i) {
    return !!(
      Q4(n) && e.call(this, n, typeof r == 'number' ? r : void 0, i || void 0)
    );
  }
}
function K4() {
  return !0;
}
function Q4(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
const e0 = [],
  X4 = !0,
  Rm = !1,
  G4 = 'skip';
function J4(e, t, n, r) {
  let i;
  typeof t == 'function' && typeof n != 'function'
    ? ((r = n), (n = t))
    : (i = t);
  const o = Z1(i),
    a = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, c) {
    const f = s && typeof s == 'object' ? s : {};
    if (typeof f.type == 'string') {
      const p =
        typeof f.tagName == 'string'
          ? f.tagName
          : typeof f.name == 'string'
            ? f.name
            : void 0;
      Object.defineProperty(d, 'name', {
        value: 'node (' + (s.type + (p ? '<' + p + '>' : '')) + ')',
      });
    }
    return d;
    function d() {
      let p = e0,
        g,
        v,
        b;
      if (
        (!t || o(s, u, c[c.length - 1] || void 0)) &&
        ((p = Z4(n(s, c))), p[0] === Rm)
      )
        return p;
      if ('children' in s && s.children) {
        const h = s;
        if (h.children && p[0] !== G4)
          for (
            v = (r ? h.children.length : -1) + a, b = c.concat(h);
            v > -1 && v < h.children.length;
          ) {
            const m = h.children[v];
            if (((g = l(m, v, b)()), g[0] === Rm)) return g;
            v = typeof g[1] == 'number' ? g[1] : v + a;
          }
      }
      return p;
    }
  }
}
function Z4(e) {
  return Array.isArray(e)
    ? e
    : typeof e == 'number'
      ? [X4, e]
      : e == null
        ? e0
        : [e];
}
function t0(e, t, n, r) {
  let i, o, a;
  typeof t == 'function' && typeof n != 'function'
    ? ((o = void 0), (a = t), (i = n))
    : ((o = t), (a = n), (i = r)),
    J4(e, o, l, i);
  function l(s, u) {
    const c = u[u.length - 1],
      f = c ? c.children.indexOf(s) : void 0;
    return a(s, f, c);
  }
}
const Qc = {}.hasOwnProperty,
  e3 = {};
function t3(e, t) {
  const n = t || e3,
    r = new Map(),
    i = new Map(),
    o = new Map(),
    a = { ...M4, ...n.handlers },
    l = {
      all: u,
      applyData: r3,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: a,
      one: s,
      options: n,
      patch: n3,
      wrap: o3,
    };
  return (
    t0(e, function (c) {
      if (c.type === 'definition' || c.type === 'footnoteDefinition') {
        const f = c.type === 'definition' ? r : i,
          d = String(c.identifier).toUpperCase();
        f.has(d) || f.set(d, c);
      }
    }),
    l
  );
  function s(c, f) {
    const d = c.type,
      p = l.handlers[d];
    if (Qc.call(l.handlers, d) && p) return p(l, c, f);
    if (l.options.passThrough && l.options.passThrough.includes(d)) {
      if ('children' in c) {
        const { children: v, ...b } = c,
          h = Kl(b);
        return (h.children = l.all(c)), h;
      }
      return Kl(c);
    }
    return (l.options.unknownHandler || i3)(l, c, f);
  }
  function u(c) {
    const f = [];
    if ('children' in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const g = l.one(d[p], c);
        if (g) {
          if (
            p &&
            d[p - 1].type === 'break' &&
            (!Array.isArray(g) && g.type === 'text' && (g.value = Om(g.value)),
            !Array.isArray(g) && g.type === 'element')
          ) {
            const v = g.children[0];
            v && v.type === 'text' && (v.value = Om(v.value));
          }
          Array.isArray(g) ? f.push(...g) : f.push(g);
        }
      }
    }
    return f;
  }
}
function n3(e, t) {
  e.position && (t.position = MC(e));
}
function r3(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      o = e.data.hProperties;
    if (typeof r == 'string')
      if (n.type === 'element') n.tagName = r;
      else {
        const a = 'children' in n ? n.children : [n];
        n = { type: 'element', tagName: r, properties: {}, children: a };
      }
    n.type === 'element' && o && Object.assign(n.properties, Kl(o)),
      'children' in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function i3(e, t) {
  const n = t.data || {},
    r =
      'value' in t && !(Qc.call(n, 'hProperties') || Qc.call(n, 'hChildren'))
        ? { type: 'text', value: t.value }
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function o3(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: 'text',
      value: `
`,
    });
    ++r < e.length;
  )
    r &&
      n.push({
        type: 'text',
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: 'text',
        value: `
`,
      }),
    n
  );
}
function Om(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function _m(e, t) {
  const n = t3(e, t),
    r = n.one(e, void 0),
    i = V4(n),
    o = Array.isArray(r)
      ? { type: 'root', children: r }
      : r || { type: 'root', children: [] };
  return (
    i &&
      o.children.push(
        {
          type: 'text',
          value: `
`,
        },
        i,
      ),
    o
  );
}
function a3(e, t) {
  return e && 'run' in e
    ? async function (n, r) {
        const i = _m(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return _m(n, { file: r, ...(t || e) });
      };
}
function Lm(e) {
  if (e) throw e;
}
var pl = Object.prototype.hasOwnProperty,
  n0 = Object.prototype.toString,
  Nm = Object.defineProperty,
  Am = Object.getOwnPropertyDescriptor,
  Im = function (t) {
    return typeof Array.isArray == 'function'
      ? Array.isArray(t)
      : n0.call(t) === '[object Array]';
  },
  zm = function (t) {
    if (!t || n0.call(t) !== '[object Object]') return !1;
    var n = pl.call(t, 'constructor'),
      r =
        t.constructor &&
        t.constructor.prototype &&
        pl.call(t.constructor.prototype, 'isPrototypeOf');
    if (t.constructor && !n && !r) return !1;
    var i;
    for (i in t);
    return typeof i > 'u' || pl.call(t, i);
  },
  Dm = function (t, n) {
    Nm && n.name === '__proto__'
      ? Nm(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  Mm = function (t, n) {
    if (n === '__proto__')
      if (pl.call(t, n)) {
        if (Am) return Am(t, n).value;
      } else return;
    return t[n];
  },
  l3 = function e() {
    var t,
      n,
      r,
      i,
      o,
      a,
      l = arguments[0],
      s = 1,
      u = arguments.length,
      c = !1;
    for (
      typeof l == 'boolean' && ((c = l), (l = arguments[1] || {}), (s = 2)),
        (l == null || (typeof l != 'object' && typeof l != 'function')) &&
          (l = {});
      s < u;
      ++s
    )
      if (((t = arguments[s]), t != null))
        for (n in t)
          (r = Mm(l, n)),
            (i = Mm(t, n)),
            l !== i &&
              (c && i && (zm(i) || (o = Im(i)))
                ? (o
                    ? ((o = !1), (a = r && Im(r) ? r : []))
                    : (a = r && zm(r) ? r : {}),
                  Dm(l, { name: n, newValue: e(c, a, i) }))
                : typeof i < 'u' && Dm(l, { name: n, newValue: i }));
    return l;
  };
const vu = Ql(l3);
function Xc(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function s3() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != 'function')
      throw new TypeError('Expected function as last argument, not ' + a);
    l(null, ...i);
    function l(s, ...u) {
      const c = e[++o];
      let f = -1;
      if (s) {
        a(s);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      (i = u), c ? u3(c, l)(...u) : a(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + i);
    return e.push(i), t;
  }
}
function u3(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let s;
    l && a.push(i);
    try {
      s = e.apply(this, a);
    } catch (u) {
      const c = u;
      if (l && n) throw c;
      return i(c);
    }
    l ||
      (s && s.then && typeof s.then == 'function'
        ? s.then(o, i)
        : s instanceof Error
          ? i(s)
          : o(s));
  }
  function i(a, ...l) {
    n || ((n = !0), t(a, ...l));
  }
  function o(a) {
    i(null, a);
  }
}
const pn = { basename: c3, dirname: f3, extname: d3, join: p3, sep: '/' };
function c3(e, t) {
  if (t !== void 0 && typeof t != 'string')
    throw new TypeError('"ext" argument must be a string');
  fa(e);
  let n = 0,
    r = -1,
    i = e.length,
    o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((o = !0), (r = i + 1));
    return r < 0 ? '' : e.slice(n, r);
  }
  if (t === e) return '';
  let a = -1,
    l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && ((o = !0), (a = i + 1)),
        l > -1 &&
          (e.codePointAt(i) === t.codePointAt(l--)
            ? l < 0 && (r = i)
            : ((l = -1), (r = a)));
  return n === r ? (r = a) : r < 0 && (r = e.length), e.slice(n, r);
}
function f3(e) {
  if ((fa(e), e.length === 0)) return '.';
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : t === 1 && e.codePointAt(0) === 47
      ? '//'
      : e.slice(0, t);
}
function d3(e) {
  fa(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    o = 0,
    a;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((a = !0), (n = t + 1)),
      l === 46 ? (i < 0 ? (i = t) : o !== 1 && (o = 1)) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || o === 0 || (o === 1 && i === n - 1 && i === r + 1)
    ? ''
    : e.slice(i, n);
}
function p3(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    fa(e[t]), e[t] && (n = n === void 0 ? e[t] : n + '/' + e[t]);
  return n === void 0 ? '.' : h3(n);
}
function h3(e) {
  fa(e);
  const t = e.codePointAt(0) === 47;
  let n = m3(e, !t);
  return (
    n.length === 0 && !t && (n = '.'),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += '/'),
    t ? '/' + n : n
  );
}
function m3(e, t) {
  let n = '',
    r = 0,
    i = -1,
    o = 0,
    a = -1,
    l,
    s;
  for (; ++a <= e.length; ) {
    if (a < e.length) l = e.codePointAt(a);
    else {
      if (l === 47) break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === a - 1 || o === 1))
        if (i !== a - 1 && o === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((s = n.lastIndexOf('/')), s !== n.length - 1)) {
                s < 0
                  ? ((n = ''), (r = 0))
                  : ((n = n.slice(0, s)),
                    (r = n.length - 1 - n.lastIndexOf('/'))),
                  (i = a),
                  (o = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ''), (r = 0), (i = a), (o = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + '/..' : '..'), (r = 2));
        } else
          n.length > 0
            ? (n += '/' + e.slice(i + 1, a))
            : (n = e.slice(i + 1, a)),
            (r = a - i - 1);
      (i = a), (o = 0);
    } else l === 46 && o > -1 ? o++ : (o = -1);
  }
  return n;
}
function fa(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
const g3 = { cwd: y3 };
function y3() {
  return '/';
}
function Gc(e) {
  return !!(
    e !== null &&
    typeof e == 'object' &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function v3(e) {
  if (typeof e == 'string') e = new URL(e);
  else if (!Gc(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        '`',
    );
    throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
  }
  if (e.protocol !== 'file:') {
    const t = new TypeError('The URL must be of scheme file');
    throw ((t.code = 'ERR_INVALID_URL_SCHEME'), t);
  }
  return w3(e);
}
function w3(e) {
  if (e.hostname !== '') {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((r.code = 'ERR_INVALID_FILE_URL_HOST'), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          'File URL path must not include encoded / characters',
        );
        throw ((i.code = 'ERR_INVALID_FILE_URL_PATH'), i);
      }
    }
  return decodeURIComponent(t);
}
const wu = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class r0 {
  constructor(t) {
    let n;
    t
      ? Gc(t)
        ? (n = { path: t })
        : typeof t == 'string' || x3(t)
          ? (n = { value: t })
          : (n = t)
      : (n = {}),
      (this.cwd = g3.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < wu.length; ) {
      const o = wu[r];
      o in n &&
        n[o] !== void 0 &&
        n[o] !== null &&
        (this[o] = o === 'history' ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n) wu.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == 'string' ? pn.basename(this.path) : void 0;
  }
  set basename(t) {
    ku(t, 'basename'),
      xu(t, 'basename'),
      (this.path = pn.join(this.dirname || '', t));
  }
  get dirname() {
    return typeof this.path == 'string' ? pn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Fm(this.basename, 'dirname'), (this.path = pn.join(t || '', this.basename));
  }
  get extname() {
    return typeof this.path == 'string' ? pn.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((xu(t, 'extname'), Fm(this.dirname, 'extname'), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error('`extname` must start with `.`');
      if (t.includes('.', 1))
        throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = pn.join(this.dirname, this.stem + (t || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    Gc(t) && (t = v3(t)),
      ku(t, 'path'),
      this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == 'string'
      ? pn.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    ku(t, 'stem'),
      xu(t, 'stem'),
      (this.path = pn.join(this.dirname || '', t + (this.extname || '')));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = void 0), i;
  }
  message(t, n, r) {
    const i = new ct(t, n, r);
    return (
      this.path && ((i.name = this.path + ':' + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function xu(e, t) {
  if (e && e.includes(pn.sep))
    throw new Error(
      '`' + t + '` cannot be a path: did not expect `' + pn.sep + '`',
    );
}
function ku(e, t) {
  if (!e) throw new Error('`' + t + '` cannot be empty');
}
function Fm(e, t) {
  if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too');
}
function x3(e) {
  return !!(
    e &&
    typeof e == 'object' &&
    'byteLength' in e &&
    'byteOffset' in e
  );
}
const k3 = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      o = function () {
        return i.apply(o, arguments);
      };
    Object.setPrototypeOf(o, r);
    const a = Object.getOwnPropertyNames(i);
    for (const l of a) {
      const s = Object.getOwnPropertyDescriptor(i, l);
      s && Object.defineProperty(o, l, s);
    }
    return o;
  },
  S3 = {}.hasOwnProperty;
class Nd extends k3 {
  constructor() {
    super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = s3());
  }
  copy() {
    const t = new Nd();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(vu(!0, {}, this.namespace)), t;
  }
  data(t, n) {
    return typeof t == 'string'
      ? arguments.length === 2
        ? (bu('data', this.frozen), (this.namespace[t] = n), this)
        : (S3.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
        ? (bu('data', this.frozen), (this.namespace = t), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == 'function' && this.transformers.use(i);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(t) {
    this.freeze();
    const n = Qa(t),
      r = this.parser || this.Parser;
    return Su('parse', r), r(String(n), n);
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      Su('process', this.parser || this.Parser),
      Eu('process', this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(o, a) {
      const l = Qa(t),
        s = r.parse(l);
      r.run(s, l, function (c, f, d) {
        if (c || !f || !d) return u(c);
        const p = f,
          g = r.stringify(p, d);
        C3(g) ? (d.value = g) : (d.result = g), u(c, d);
      });
      function u(c, f) {
        c || !f ? a(c) : o ? o(f) : n(void 0, f);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      Su('processSync', this.parser || this.Parser),
      Eu('processSync', this.compiler || this.Compiler),
      this.process(t, i),
      Um('processSync', 'process', n),
      r
    );
    function i(o, a) {
      (n = !0), Lm(o), (r = a);
    }
  }
  run(t, n, r) {
    jm(t), this.freeze();
    const i = this.transformers;
    return (
      !r && typeof n == 'function' && ((r = n), (n = void 0)),
      r ? o(void 0, r) : new Promise(o)
    );
    function o(a, l) {
      const s = Qa(n);
      i.run(t, s, u);
      function u(c, f, d) {
        const p = f || t;
        c ? l(c) : a ? a(p) : r(void 0, p, d);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return this.run(t, n, o), Um('runSync', 'run', r), i;
    function o(a, l) {
      Lm(a), (i = l), (r = !0);
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = Qa(n),
      i = this.compiler || this.Compiler;
    return Eu('stringify', i), jm(t), i(t, r);
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((bu('use', this.frozen), t != null))
      if (typeof t == 'function') s(t, n);
      else if (typeof t == 'object') Array.isArray(t) ? l(t) : a(t);
      else throw new TypeError('Expected usable value, not `' + t + '`');
    return this;
    function o(u) {
      if (typeof u == 'function') s(u, []);
      else if (typeof u == 'object')
        if (Array.isArray(u)) {
          const [c, ...f] = u;
          s(c, f);
        } else a(u);
      else throw new TypeError('Expected usable value, not `' + u + '`');
    }
    function a(u) {
      if (!('plugins' in u) && !('settings' in u))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
        );
      l(u.plugins), u.settings && (i.settings = vu(!0, i.settings, u.settings));
    }
    function l(u) {
      let c = -1;
      if (u != null)
        if (Array.isArray(u))
          for (; ++c < u.length; ) {
            const f = u[c];
            o(f);
          }
        else throw new TypeError('Expected a list of plugins, not `' + u + '`');
    }
    function s(u, c) {
      let f = -1,
        d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          d = f;
          break;
        }
      if (d === -1) r.push([u, ...c]);
      else if (c.length > 0) {
        let [p, ...g] = c;
        const v = r[d][1];
        Xc(v) && Xc(p) && (p = vu(!0, v, p)), (r[d] = [u, p, ...g]);
      }
    }
  }
}
const E3 = new Nd().freeze();
function Su(e, t) {
  if (typeof t != 'function')
    throw new TypeError('Cannot `' + e + '` without `parser`');
}
function Eu(e, t) {
  if (typeof t != 'function')
    throw new TypeError('Cannot `' + e + '` without `compiler`');
}
function bu(e, t) {
  if (t)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function jm(e) {
  if (!Xc(e) || typeof e.type != 'string')
    throw new TypeError('Expected node, got `' + e + '`');
}
function Um(e, t, n) {
  if (!n)
    throw new Error('`' + e + '` finished async. Use `' + t + '` instead');
}
function Qa(e) {
  return b3(e) ? e : new r0(e);
}
function b3(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e);
}
function C3(e) {
  return typeof e == 'string' || P3(e);
}
function P3(e) {
  return !!(
    e &&
    typeof e == 'object' &&
    'byteLength' in e &&
    'byteOffset' in e
  );
}
const T3 = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Bm = [],
  Hm = { allowDangerousHtml: !0 },
  R3 = /^(https?|ircs?|mailto|xmpp)$/i,
  O3 = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    {
      from: 'includeNodeIndex',
      id: 'change-includenodeindex-to-includeelementindex',
    },
    { from: 'linkTarget', id: 'remove-linktarget' },
    {
      from: 'plugins',
      id: 'change-plugins-to-remarkplugins',
      to: 'remarkPlugins',
    },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    {
      from: 'renderers',
      id: 'change-renderers-to-components',
      to: 'components',
    },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function _3(e) {
  const t = e.allowedElements,
    n = e.allowElement,
    r = e.children || '',
    i = e.className,
    o = e.components,
    a = e.disallowedElements,
    l = e.rehypePlugins || Bm,
    s = e.remarkPlugins || Bm,
    u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Hm } : Hm,
    c = e.skipHtml,
    f = e.unwrapDisallowed,
    d = e.urlTransform || L3,
    p = E3().use(f4).use(s).use(a3, u).use(l),
    g = new r0();
  typeof r == 'string' && (g.value = r);
  for (const m of O3)
    Object.hasOwn(e, m.from) &&
      ('' +
        m.from +
        (m.to ? 'use `' + m.to + '` instead' : 'remove it') +
        T3 +
        m.id,
      void 0);
  const v = p.parse(g);
  let b = p.runSync(v, g);
  return (
    i &&
      (b = {
        type: 'element',
        tagName: 'div',
        properties: { className: i },
        children: b.type === 'root' ? b.children : [b],
      }),
    t0(b, h),
    $C(b, {
      Fragment: Y.Fragment,
      components: o,
      ignoreInvalidStyle: !0,
      jsx: Y.jsx,
      jsxs: Y.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function h(m, y, C) {
    if (m.type === 'raw' && C && typeof y == 'number')
      return (
        c
          ? C.children.splice(y, 1)
          : (C.children[y] = { type: 'text', value: m.value }),
        y
      );
    if (m.type === 'element') {
      let T;
      for (T in mu)
        if (Object.hasOwn(mu, T) && Object.hasOwn(m.properties, T)) {
          const S = m.properties[T],
            x = mu[T];
          (x === null || x.includes(m.tagName)) &&
            (m.properties[T] = d(String(S || ''), T, m));
        }
    }
    if (m.type === 'element') {
      let T = t ? !t.includes(m.tagName) : a ? a.includes(m.tagName) : !1;
      if (
        (!T && n && typeof y == 'number' && (T = !n(m, y, C)),
        T && C && typeof y == 'number')
      )
        return (
          f && m.children
            ? C.children.splice(y, 1, ...m.children)
            : C.children.splice(y, 1),
          y
        );
    }
  }
}
function L3(e) {
  const t = e.indexOf(':'),
    n = e.indexOf('?'),
    r = e.indexOf('#'),
    i = e.indexOf('/');
  return t < 0 ||
    (i > -1 && t > i) ||
    (n > -1 && t > n) ||
    (r > -1 && t > r) ||
    R3.test(e.slice(0, t))
    ? e
    : '';
}
function N3({ issue: e }) {
  return Y.jsx('div', {
    className: 'post-content-wrapper',
    children: Y.jsx(_3, { children: e == null ? void 0 : e.body }),
  });
}
var A3 = {
    prefix: 'fas',
    iconName: 'up-right-from-square',
    icon: [
      512,
      512,
      ['external-link-alt'],
      'f35d',
      'M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z',
    ],
  },
  I3 = {
    prefix: 'fas',
    iconName: 'angle-left',
    icon: [
      320,
      512,
      [8249],
      'f104',
      'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    ],
  };
function z3({ issue: e }) {
  const t = '#AFC2D4';
  return e
    ? Y.jsxs('header', {
        className: 'header-wrapper',
        children: [
          Y.jsxs('nav', {
            className: 'top-nav',
            children: [
              Y.jsx('a', {
                className: 'nav-back',
                href: '/',
                children: Y.jsxs('span', {
                  children: [
                    Y.jsx(Nr, { size: 'xl', icon: I3, style: { color: t } }),
                    Y.jsx('p', { children: 'Back' }),
                  ],
                }),
              }),
              Y.jsx('a', {
                className: 'nav-go-to-github',
                href: '/',
                children: Y.jsxs('span', {
                  children: [
                    Y.jsx('p', { children: 'Open on Github' }),
                    Y.jsx(Nr, { size: 'lg', icon: A3, style: { color: t } }),
                  ],
                }),
              }),
            ],
          }),
          Y.jsx('h1', { children: e.title }),
        ],
      })
    : Y.jsx('h1', { children: 'Error fetching issue details.' });
}
function D3() {
  const e = ia();
  console.log(e.state);
  const t = e.state;
  return Y.jsxs('div', {
    className: 'post-wrapper',
    children: [
      Y.jsx(z3, { issue: t }),
      t.body ? Y.jsx(N3, { issue: t }) : null,
    ],
  });
}
const M3 = iS([
  {
    path: '/',
    element: Y.jsx(wS, {}),
    children: [
      { path: '/', element: Y.jsx(rC, {}) },
      { path: '/post/:issueNumber', element: Y.jsx(D3, {}) },
    ],
  },
]);
Cu.createRoot(document.getElementById('root')).render(
  Y.jsxs(Gl.StrictMode, {
    children: [Y.jsx(kS, {}), Y.jsx(pS, { router: M3 })],
  }),
);
