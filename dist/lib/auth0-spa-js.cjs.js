'use strict';

require('fast-text-encoding');
var Lock = require('browser-tabs-lock');
var fetch = require('unfetch');
var Cookies = require('es-cookie');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                }
              }
        );
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var Lock__default = /*#__PURE__*/ _interopDefaultLegacy(Lock);
var fetch__default = /*#__PURE__*/ _interopDefaultLegacy(fetch);
var Cookies__namespace = /*#__PURE__*/ _interopNamespace(Cookies);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== 'function' && b !== null)
    throw new TypeError(
      'Class extends value ' + String(b) + ' is not a constructor or null'
    );
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __read(o, n) {
  var m = typeof Symbol === 'function' && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error: error };
  } finally {
    try {
      if (r && !r.done && (m = i['return'])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || from);
}

var commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {};

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () {
    return this;
  })() ||
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return (
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7
  );
});

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG =
  getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$6 = NASHORN_BUG
  ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor$2(this, V);
      return !!descriptor && descriptor.enumerable;
    }
  : $propertyIsEnumerable$1;

var objectPropertyIsEnumerable = {
  f: f$6
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$1 = {}.toString;

var classofRaw = function (it) {
  return toString$1.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
})
  ? function (it) {
      return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    }
  : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2
    ? aFunction$1(global_1[namespace])
    : global_1[namespace] && global_1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var Deno = global_1.Deno;
var versions = (process && process.versions) || (Deno && Deno.version);
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.');
  version$1 = match[0] < 4 ? 1 : match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = match[1];
  }
}

var engineV8Version = version$1 && +version$1;

/* eslint-disable es/no-symbol -- required for testing */

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol$1 =
  !!Object.getOwnPropertySymbols &&
  !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return (
      !String(symbol) ||
      !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      (!Symbol.sham && engineV8Version && engineV8Version < 41)
    );
  });

/* eslint-disable es/no-symbol -- required for testing */

var useSymbolAsUid =
  nativeSymbol$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var isSymbol = useSymbolAsUid
  ? function (it) {
      return typeof it == 'symbol';
    }
  : function (it) {
      var $Symbol = getBuiltIn('Symbol');
      return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
    };

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (
    pref === 'string' &&
    typeof (fn = input.toString) == 'function' &&
    !isObject((val = fn.call(input)))
  )
    return val;
  if (
    typeof (fn = input.valueOf) == 'function' &&
    !isObject((val = fn.call(input)))
  )
    return val;
  if (
    pref !== 'string' &&
    typeof (fn = input.toString) == 'function' &&
    !isObject((val = fn.call(input)))
  )
    return val;
  throw TypeError("Can't convert object to primitive value");
};

var setGlobal = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global_1, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global_1[key] = value;
  }
  return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return (
      sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {})
    );
  })('versions', []).push({
    version: '3.17.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
});

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var hasOwnProperty = {}.hasOwnProperty;

var has$1 =
  Object.hasOwn ||
  function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return (
    'Symbol(' +
    String(key === undefined ? '' : key) +
    ')_' +
    (++id + postfix).toString(36)
  );
};

var WellKnownSymbolsStore$1 = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid
  ? Symbol$1
  : (Symbol$1 && Symbol$1.withoutSetter) || uid;

var wellKnownSymbol = function (name) {
  if (
    !has$1(WellKnownSymbolsStore$1, name) ||
    !(nativeSymbol$1 || typeof WellKnownSymbolsStore$1[name] == 'string')
  ) {
    if (nativeSymbol$1 && has$1(Symbol$1, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }
  return WellKnownSymbolsStore$1[name];
};

var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE$1];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine =
  !descriptors &&
  !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return (
      Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () {
          return 7;
        }
      }).a != 7
    );
  });

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$5 = descriptors
  ? $getOwnPropertyDescriptor$1
  : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (ie8DomDefine)
        try {
          return $getOwnPropertyDescriptor$1(O, P);
        } catch (error) {
          /* empty */
        }
      if (has$1(O, P))
        return createPropertyDescriptor(
          !objectPropertyIsEnumerable.f.call(O, P),
          O[P]
        );
    };

var objectGetOwnPropertyDescriptor = {
  f: f$5
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }
  return it;
};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$4 = descriptors
  ? $defineProperty$1
  : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (ie8DomDefine)
        try {
          return $defineProperty$1(O, P, Attributes);
        } catch (error) {
          /* empty */
        }
      if ('get' in Attributes || 'set' in Attributes)
        throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

var objectDefineProperty = {
  f: f$4
};

var createNonEnumerableProperty = descriptors
  ? function (object, key, value) {
      return objectDefineProperty.f(
        object,
        key,
        createPropertyDescriptor(1, value)
      );
    }
  : function (object, key, value) {
      object[key] = value;
      return object;
    };

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var nativeWeakMap =
  typeof WeakMap$1 === 'function' &&
  /native code/.test(inspectSource(WeakMap$1));

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global_1.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }
    return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has$1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return has$1(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$1(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return (
      (typeof this == 'function' && getInternalState(this).source) ||
      inspectSource(this)
    );
  });
});

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN((argument = +argument))
    ? 0
    : (argument > 0 ? floor : ceil)(argument);
};

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min$2(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var indexOf = arrayIncludes.indexOf;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i)
    if (has$1(O, (key = names[i++]))) {
      ~indexOf(result, key) || result.push(key);
    }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$3 =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

var objectGetOwnPropertyNames = {
  f: f$3
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$2 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
  f: f$2
};

// all object keys, includes non-enumerable and symbols
var ownKeys =
  getBuiltIn('Reflect', 'ownKeys') ||
  function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols
      ? keys.concat(getOwnPropertySymbols(it))
      : keys;
  };

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1(target, key))
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL
    ? true
    : value == NATIVE
    ? false
    : typeof detection == 'function'
    ? fails(detection)
    : !!detection;
};

var normalize = (isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
});

var data = (isForced.data = {});
var NATIVE = (isForced.NATIVE = 'N');
var POLYFILL = (isForced.POLYFILL = 'P');

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(
        GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
        options.forced
      );
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
};

var toString_1 = function (argument) {
  if (isSymbol(argument))
    throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

var MATCH$1 = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return (
    isObject(it) &&
    ((isRegExp = it[MATCH$1]) !== undefined
      ? !!isRegExp
      : classofRaw(it) == 'RegExp')
  );
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return it;
};

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }
  return false;
};

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG =
  !CORRECT_IS_REGEXP_LOGIC &&
  !!(function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  })();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
_export(
  {
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  },
  {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var index = toLength(
        min(arguments.length > 1 ? arguments[1] : undefined, that.length)
      );
      var search = toString_1(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  }
);

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }
  return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var call = Function.call;

var entryUnbind = function (CONSTRUCTOR, METHOD, length) {
  return functionBindContext(
    call,
    global_1[CONSTRUCTOR].prototype[METHOD],
    length
  );
};

entryUnbind('String', 'startsWith');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 =
  Array.isArray ||
  function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

var createProperty = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object)
    objectDefineProperty.f(
      object,
      propertyKey,
      createPropertyDescriptor(0, value)
    );
  else object[propertyKey] = value;
};

var SPECIES$3 = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor = function (originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$1(C.prototype)))
      C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(
    length === 0 ? 0 : length
  );
};

var SPECIES$2 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return (
    engineV8Version >= 51 ||
    !fails(function () {
      var array = [];
      var constructor = (array.constructor = {});
      constructor[SPECIES$2] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    })
  );
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1fffffffffffff;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT =
  engineV8Version >= 51 ||
  !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export(
  { target: 'Array', proto: true, forced: FORCED$1 },
  {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER)
            throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER)
            throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  }
);

var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS =
  classofRaw(
    (function () {
      return arguments;
    })()
  ) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport
  ? classofRaw
  : function (it) {
      var O, tag, result;
      return it === undefined
        ? 'Undefined'
        : it === null
        ? 'Null'
        : // @@toStringTag case
        typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG$2)) == 'string'
        ? tag
        : // builtinTag case
        CORRECT_ARGUMENTS
        ? classofRaw(O)
        : // ES3 arguments fallback
        (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function'
        ? 'Arguments'
        : result;
    };

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport
  ? {}.toString
  : function toString() {
      return '[object ' + classof(this) + ']';
    };

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys =
  Object.keys ||
  function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = descriptors
  ? Object.defineProperties
  : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index)
        objectDefineProperty.f(O, (key = keys[index++]), Properties[key]);
      return O;
    };

var html = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }
  NullProtoObject =
    typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate =
  Object.create ||
  function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined
      ? result
      : objectDefineProperties(result, Properties);
  };

/* eslint-disable es/no-object-getownpropertynames -- safe */

var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

var toString = {}.toString;

var windowNames =
  typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$1 = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
  f: f$1
};

var f = wellKnownSymbol;

var wellKnownSymbolWrapped = {
  f: f
};

var path = global_1;

var defineProperty$4 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has$1(Symbol, NAME))
    defineProperty$4(Symbol, NAME, {
      value: wellKnownSymbolWrapped.f(NAME)
    });
};

var defineProperty$3 = objectDefineProperty.f;

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has$1((it = STATIC ? it : it.prototype), TO_STRING_TAG$1)) {
    defineProperty$3(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP
      ? create($this, length)
      : IS_FILTER || IS_FILTER_REJECT
      ? create($this, 0)
      : undefined;
    var value, result;
    for (; length > index; index++)
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result;
          // map
          else if (result)
            switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return value; // find
              case 6:
                return index; // findIndex
              case 2:
                push.call(target, value); // filter
            }
          else
            switch (TYPE) {
              case 4:
                return false; // every
              case 7:
                push.call(target, value); // filterReject
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState$3 = internalState.set;
var getInternalState$2 = internalState.getterFor(SYMBOL);
var ObjectPrototype$2 = Object[PROTOTYPE];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty = objectDefineProperty.f;
var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER =
  !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor =
  descriptors &&
  fails(function () {
    return (
      objectCreate(
        nativeDefineProperty({}, 'a', {
          get: function () {
            return nativeDefineProperty(this, 'a', { value: 7 }).a;
          }
        })
      ).a != 7
    );
  })
    ? function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(
          ObjectPrototype$2,
          P
        );
        if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
        nativeDefineProperty(O, P, Attributes);
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
          nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
        }
      }
    : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = (AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE]));
  setInternalState$3(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$2)
    $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (has$1(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has$1(O, HIDDEN))
        nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has$1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }
    return setSymbolDescriptor(O, key, Attributes);
  }
  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key))
      $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined
    ? objectCreate(O)
    : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (
    this === ObjectPrototype$2 &&
    has$1(AllSymbols, P) &&
    !has$1(ObjectPrototypeSymbols, P)
  )
    return false;
  return enumerable ||
    !has$1(this, P) ||
    !has$1(AllSymbols, P) ||
    (has$1(this, HIDDEN) && this[HIDDEN][P])
    ? enumerable
    : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (
    it === ObjectPrototype$2 &&
    has$1(AllSymbols, key) &&
    !has$1(ObjectPrototypeSymbols, key)
  )
    return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (
    descriptor &&
    has$1(AllSymbols, key) &&
    !(has$1(it, HIDDEN) && it[HIDDEN][key])
  ) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has$1(AllSymbols, key) && !has$1(hiddenKeys$1, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
  var names = nativeGetOwnPropertyNames(
    IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O)
  );
  var result = [];
  $forEach(names, function (key) {
    if (
      has$1(AllSymbols, key) &&
      (!IS_OBJECT_PROTOTYPE || has$1(ObjectPrototype$2, key))
    ) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!nativeSymbol$1) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description =
      !arguments.length || arguments[0] === undefined
        ? undefined
        : toString_1(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype$2)
        setter.call(ObjectPrototypeSymbols, value);
      if (has$1(this, HIDDEN) && has$1(this[HIDDEN], tag))
        this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (descriptors && USE_SETTER)
      setSymbolDescriptor(ObjectPrototype$2, tag, {
        configurable: true,
        set: setter
      });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState$2(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f =
    $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
    {
      redefine(
        ObjectPrototype$2,
        'propertyIsEnumerable',
        $propertyIsEnumerable,
        { unsafe: true }
      );
    }
  }
}

_export(
  { global: true, wrap: true, forced: !nativeSymbol$1, sham: !nativeSymbol$1 },
  {
    Symbol: $Symbol
  }
);

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

_export(
  { target: SYMBOL, stat: true, forced: !nativeSymbol$1 },
  {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    for: function (key) {
      var string = toString_1(key);
      if (has$1(StringToSymbolRegistry, string))
        return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has$1(SymbolToStringRegistry, sym))
        return SymbolToStringRegistry[sym];
    },
    useSetter: function () {
      USE_SETTER = true;
    },
    useSimple: function () {
      USE_SETTER = false;
    }
  }
);

_export(
  { target: 'Object', stat: true, forced: !nativeSymbol$1, sham: !descriptors },
  {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  }
);

_export(
  { target: 'Object', stat: true, forced: !nativeSymbol$1 },
  {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }
);

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export(
  {
    target: 'Object',
    stat: true,
    forced: fails(function () {
      objectGetOwnPropertySymbols.f(1);
    })
  },
  {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols.f(toObject(it));
    }
  }
);

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY =
    !nativeSymbol$1 ||
    fails(function () {
      var symbol = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      return (
        $stringify([symbol]) != '[null]' ||
        // WebKit converts symbol values to JSON as null
        $stringify({ a: symbol }) != '{}' ||
        // V8 throws on boxed symbols
        $stringify(Object(symbol)) != '{}'
      );
    });

  _export(
    { target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY },
    {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;
        while (arguments.length > index) args.push(arguments[index++]);
        $replacer = replacer;
        if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray$1(replacer))
          replacer = function (key, value) {
            if (typeof $replacer == 'function')
              value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    }
  );
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty(
    $Symbol[PROTOTYPE],
    TO_PRIMITIVE,
    $Symbol[PROTOTYPE].valueOf
  );
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys$1[HIDDEN] = true;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

var defineProperty$2 = objectDefineProperty.f;

var NativeSymbol = global_1.Symbol;

if (
  descriptors &&
  typeof NativeSymbol == 'function' &&
  (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined)
) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : String(arguments[0]);
    var result =
      this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        : // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        description === undefined
        ? NativeSymbol()
        : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = (SymbolWrapper.prototype = NativeSymbol.prototype);
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$2(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has$1(EmptyStringDescriptionStore, symbol)) return '';
      var desc = nativeSymbol
        ? string.slice(7, -1)
        : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  _export(
    { global: true, forced: true },
    {
      Symbol: SymbolWrapper
    }
  );
}

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global_1.JSON, 'JSON', true);

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);

_export({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global_1.Reflect, 'Reflect', true);

path.Symbol;

// `String.prototype.codePointAt` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString_1(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size)
      return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xd800 ||
      first > 0xdbff ||
      position + 1 === size ||
      (second = S.charCodeAt(position + 1)) < 0xdc00 ||
      second > 0xdfff
      ? CONVERT_TO_STRING
        ? S.charAt(position)
        : first
      : CONVERT_TO_STRING
      ? S.slice(position, position + 2)
      : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = correctPrototypeGetter
  ? Object.getPrototypeOf
  : function (O) {
      O = toObject(O);
      if (has$1(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectPrototype$1 : null;
    };

var ITERATOR$4 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

var returnThis$2 = function () {
  return this;
};

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(
      objectGetPrototypeOf(arrayIterator)
    );
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE =
  IteratorPrototype$2 == undefined ||
  fails(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
  });

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!has$1(IteratorPrototype$2, ITERATOR$4)) {
  createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$4, returnThis$2);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var iterators = {};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }
  return it;
};

/* eslint-disable no-proto -- safe */

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf =
  Object.setPrototypeOf ||
  ('__proto__' in {}
    ? (function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          setter = Object.getOwnPropertyDescriptor(
            Object.prototype,
            '__proto__'
          ).set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
          /* empty */
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      })()
    : undefined);

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator = function (
  Iterable,
  NAME,
  IteratorConstructor,
  next,
  DEFAULT,
  IS_SET,
  FORCED
) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator =
    IterablePrototype[ITERATOR$3] ||
    IterablePrototype['@@iterator'] ||
    (DEFAULT && IterablePrototype[DEFAULT]);
  var defaultIterator =
    (!BUGGY_SAFARI_ITERATORS && nativeIterator) || getIterationMethod(DEFAULT);
  var anyNativeIterator =
    NAME == 'Array'
      ? IterablePrototype.entries || nativeIterator
      : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(
      anyNativeIterator.call(new Iterable())
    );
    if (
      IteratorPrototype !== Object.prototype &&
      CurrentIteratorPrototype.next
    ) {
      if (
        objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype
      ) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$3] != 'function') {
          createNonEnumerableProperty(
            CurrentIteratorPrototype,
            ITERATOR$3,
            returnThis
          );
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  }

  // define iterator
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$3, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED)
      for (KEY in methods) {
        if (
          BUGGY_SAFARI_ITERATORS ||
          INCORRECT_VALUES_NAME ||
          !(KEY in IterablePrototype)
        ) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      _export(
        {
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        },
        methods
      );
  }

  return methods;
};

var charAt = stringMultibyte.charAt;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = internalState.set;
var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(
  String,
  'String',
  function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: toString_1(iterated),
      index: 0
    });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  },
  function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  }
);

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = iterator['return'];
    if (innerResult === undefined) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return (
    it !== undefined &&
    (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it)
  );
};

var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined)
    return it[ITERATOR$1] || it['@@iterator'] || iterators[classof(it)];
};

var getIterator = function (it, usingIterator) {
  var iteratorMethod =
    arguments.length < 2 ? getIteratorMethod(it) : usingIterator;
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  }
  return anObject(iteratorMethod.call(it));
};

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(
  arrayLike /* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping)
    mapfn = functionBindContext(
      mapfn,
      argumentsLength > 2 ? arguments[2] : undefined,
      2
    );
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (
    iteratorMethod != undefined &&
    !(C == Array && isArrayIteratorMethod(iteratorMethod))
  ) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = new C();
    for (; !(step = next.call(iterator)).done; index++) {
      value = mapping
        ? callWithSafeIterationClosing(
            iterator,
            mapfn,
            [step.value, index],
            true
          )
        : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    return: function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: (ITERATION_SUPPORT = true) };
        }
      };
    };
    exec(object);
  } catch (error) {
    /* empty */
  }
  return ITERATION_SUPPORT;
};

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
_export(
  { target: 'Array', stat: true, forced: INCORRECT_ITERATION },
  {
    from: arrayFrom
  }
);

path.Array.from;

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferNative =
  typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

var defineProperty$1 = objectDefineProperty.f;

var Int8Array$1 = global_1.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var Uint8ClampedArray = global_1.Uint8ClampedArray;
var Uint8ClampedArrayPrototype =
  Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
var TypedArrayPrototype =
  Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR$1 = uid('TYPED_ARRAY_CONSTRUCTOR');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS =
  arrayBufferNative &&
  !!objectSetPrototypeOf &&
  classof(global_1.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return (
    klass === 'DataView' ||
    has$1(TypedArrayConstructorsList, klass) ||
    has$1(BigIntArrayConstructorsList, klass)
  );
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return (
    has$1(TypedArrayConstructorsList, klass) ||
    has$1(BigIntArrayConstructorsList, klass)
  );
};

var aTypedArray$1 = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor$1 = function (C) {
  if (objectSetPrototypeOf && !isPrototypeOf.call(TypedArray, C)) {
    throw TypeError('Target is not a typed array constructor');
  }
  return C;
};

var exportTypedArrayMethod$1 = function (KEY, property, forced) {
  if (!descriptors) return;
  if (forced)
    for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && has$1(TypedArrayConstructor.prototype, KEY))
        try {
          delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
          /* empty */
        }
    }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(
      TypedArrayPrototype,
      KEY,
      forced
        ? property
        : (NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY]) || property
    );
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!descriptors) return;
  if (objectSetPrototypeOf) {
    if (forced)
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has$1(TypedArrayConstructor, KEY))
          try {
            delete TypedArrayConstructor[KEY];
          } catch (error) {
            /* empty */
          }
      }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(
          TypedArray,
          KEY,
          forced
            ? property
            : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY]) || property
        );
      } catch (error) {
        /* empty */
      }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global_1[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global_1[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype)
    createNonEnumerableProperty(
      Prototype,
      TYPED_ARRAY_CONSTRUCTOR$1,
      Constructor
    );
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global_1[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype)
    createNonEnumerableProperty(
      Prototype,
      TYPED_ARRAY_CONSTRUCTOR$1,
      Constructor
    );
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (
  !NATIVE_ARRAY_BUFFER_VIEWS ||
  typeof TypedArray != 'function' ||
  TypedArray === Function.prototype
) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS)
    for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
    }
}

if (
  !NATIVE_ARRAY_BUFFER_VIEWS ||
  !TypedArrayPrototype ||
  TypedArrayPrototype === ObjectPrototype
) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS)
    for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME])
        objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
    }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (
  NATIVE_ARRAY_BUFFER_VIEWS &&
  objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype
) {
  objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (descriptors && !has$1(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty$1(TypedArrayPrototype, TO_STRING_TAG, {
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList)
    if (global_1[NAME]) {
      createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
    }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$1,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray$1,
  aTypedArrayConstructor: aTypedArrayConstructor$1,
  exportTypedArrayMethod: exportTypedArrayMethod$1,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

var SPECIES$1 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined
    ? defaultConstructor
    : aFunction(S);
};

var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
var typedArraySpeciesConstructor = function (originalArray) {
  return aTypedArrayConstructor(
    speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR])
  );
};

var aTypedArray = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod(
  'slice',
  function slice(start, end) {
    var list = $slice.call(aTypedArray(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index) result[index] = list[index++];
    return result;
  },
  FORCED
);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
_export(
  { target: 'Array', proto: true },
  {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(
        this,
        el,
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  }
);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

entryUnbind('Array', 'includes');

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
_export(
  { target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') },
  {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~toString_1(requireObjectCoercible(this)).indexOf(
        toString_1(notARegexp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  }
);

entryUnbind('String', 'includes');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = internalState.set;
var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator(
  Array,
  'Array',
  function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0, // next index
      kind: kind // kind
    });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  },
  function () {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  },
  'values'
);

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var freezing = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
  var defineProperty = objectDefineProperty.f;

  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible =
    Object.isExtensible ||
    function () {
      return true;
    };

  var setMetadata = function (it) {
    defineProperty(it, METADATA, {
      value: {
        objectID: 'O' + id++, // object ID
        weakData: {} // weak collections IDs
      }
    });
  };

  var fastKey = function (it, create) {
    // return a primitive with prefix
    if (!isObject(it))
      return typeof it == 'symbol'
        ? it
        : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has$1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
      // return object ID
    }
    return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!has$1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
      // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (freezing && REQUIRED && isExtensible(it) && !has$1(it, METADATA))
      setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () {
      /* empty */
    };
    REQUIRED = true;
    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var splice = [].splice;
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      objectGetOwnPropertyNames.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice.call(result, i, 1);
            break;
          }
        }
        return result;
      };

      _export(
        { target: 'Object', stat: true, forced: true },
        {
          getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
        }
      );
    }
  };

  var meta = (module.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  });

  hiddenKeys$1[METADATA] = true;
});
internalMetadata.enable;
internalMetadata.fastKey;
internalMetadata.getWeakData;
internalMetadata.onFreeze;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(
    unboundFunction,
    that,
    1 + AS_ENTRIES + INTERRUPTED
  );
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED
        ? fn(value[0], value[1], stop)
        : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (
        index = 0, length = toLength(iterable.length);
        length > index;
        index++
      ) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result)
      return result;
  }
  return new Result(false);
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }
  return it;
};

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject((NewTargetPrototype = NewTarget.prototype)) &&
    NewTargetPrototype !== Wrapper.prototype
  )
    objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(
      NativePrototype,
      KEY,
      KEY == 'add'
        ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          }
        : KEY == 'delete'
        ? function (key) {
            return IS_WEAK && !isObject(key)
              ? false
              : nativeMethod.call(this, key === 0 ? 0 : key);
          }
        : KEY == 'get'
        ? function get(key) {
            return IS_WEAK && !isObject(key)
              ? undefined
              : nativeMethod.call(this, key === 0 ? 0 : key);
          }
        : KEY == 'has'
        ? function has(key) {
            return IS_WEAK && !isObject(key)
              ? false
              : nativeMethod.call(this, key === 0 ? 0 : key);
          }
        : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          }
    );
  };

  var REPLACE = isForced_1(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' ||
      !(
        IS_WEAK ||
        (NativePrototype.forEach &&
          !fails(function () {
            new NativeConstructor().entries().next();
          }))
      )
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(
      wrapper,
      CONSTRUCTOR_NAME,
      IS_MAP,
      ADDER
    );
    internalMetadata.enable();
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
      new NativeConstructor(iterable);
    });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO =
      !IS_WEAK &&
      fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(
          new NativeConstructor(),
          dummy,
          Constructor
        );
        if (iterable != undefined)
          iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var SPECIES = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var defineProperty = objectDefineProperty.f;

var fastKey = internalMetadata.fastKey;

var setInternalState = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined)
        iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
        // create new entry
      } else {
        state.last = entry = {
          index: (index = fastKey(key, true)),
          key: key,
          value: value,
          previous: (previous = state.last),
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      }
      return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(
          callbackfn,
          arguments.length > 1 ? arguments[1] : undefined,
          3
        );
        var entry;
        while ((entry = entry ? entry.next : state.first)) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(
      C.prototype,
      IS_MAP
        ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
              return define(this, key === 0 ? 0 : key, value);
            }
          }
        : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
              return define(this, (value = value === 0 ? 0 : value), value);
            }
          }
    );
    if (descriptors)
      defineProperty(C.prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(
      C,
      CONSTRUCTOR_NAME,
      function (iterated, kind) {
        setInternalState(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      },
      function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (
          !state.target ||
          !(state.last = entry = entry ? entry.next : state.state.first)
        ) {
          // or finish the iteration
          state.target = undefined;
          return { value: undefined, done: true };
        }
        // return step by kind
        if (kind == 'keys') return { value: entry.key, done: false };
        if (kind == 'values') return { value: entry.value, done: false };
        return { value: [entry.key, entry.value], done: false };
      },
      IS_MAP ? 'entries' : 'values',
      !IS_MAP,
      true
    );

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};
collectionStrong.getConstructor;
collectionStrong.setStrong;

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection(
  'Set',
  function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  },
  collectionStrong
);

path.Set;

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function (value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    },
    function (reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

function allSettled(arr) {
  var P = this;
  return new P(function (resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function (val) {
              res(i, val);
            },
            function (e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise$1(fn) {
  if (!(this instanceof Promise$1))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise$1._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise$1) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise$1._immediateFn(function () {
      if (!self._handled) {
        Promise$1._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise$1.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise$1.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise$1.prototype['finally'] = finallyConstructor;

Promise$1.all = function (arr) {
  return new Promise$1(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function (val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise$1.allSettled = allSettled;

Promise$1.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise$1) {
    return value;
  }

  return new Promise$1(function (resolve) {
    resolve(value);
  });
};

Promise$1.reject = function (value) {
  return new Promise$1(function (resolve, reject) {
    reject(value);
  });
};

Promise$1.race = function (arr) {
  return new Promise$1(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise$1.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise$1._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function (fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function (fn) {
    setTimeoutFunc(fn, 0);
  };

Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/** @suppress {undefinedVars} */
var globalNS = (function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = Promise$1;
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = finallyConstructor;
} else if (!globalNS.Promise.allSettled) {
  globalNS.Promise.allSettled = allSettled;
}

(function (factory) {
  factory();
})(function () {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Emitter = /*#__PURE__*/ (function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      Object.defineProperty(this, 'listeners', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    _createClass(Emitter, [
      {
        key: 'addEventListener',
        value: function addEventListener(type, callback, options) {
          if (!(type in this.listeners)) {
            this.listeners[type] = [];
          }

          this.listeners[type].push({
            callback: callback,
            options: options
          });
        }
      },
      {
        key: 'removeEventListener',
        value: function removeEventListener(type, callback) {
          if (!(type in this.listeners)) {
            return;
          }

          var stack = this.listeners[type];

          for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i].callback === callback) {
              stack.splice(i, 1);
              return;
            }
          }
        }
      },
      {
        key: 'dispatchEvent',
        value: function dispatchEvent(event) {
          if (!(event.type in this.listeners)) {
            return;
          }

          var stack = this.listeners[event.type];
          var stackToCall = stack.slice();

          for (var i = 0, l = stackToCall.length; i < l; i++) {
            var listener = stackToCall[i];

            try {
              listener.callback.call(this, event);
            } catch (e) {
              Promise.resolve().then(function () {
                throw e;
              });
            }

            if (listener.options && listener.options.once) {
              this.removeEventListener(event.type, listener.callback);
            }
          }

          return !event.defaultPrevented;
        }
      }
    ]);

    return Emitter;
  })();

  var AbortSignal = /*#__PURE__*/ (function (_Emitter) {
    _inherits(AbortSignal, _Emitter);

    var _super = _createSuper(AbortSignal);

    function AbortSignal() {
      var _this;

      _classCallCheck(this, AbortSignal);

      _this = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
      // the parent constructor directly instead as a workaround. For general details, see babel bug:
      // https://github.com/babel/babel/issues/3041
      // This hack was added as a fix for the issue described here:
      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

      if (!_this.listeners) {
        Emitter.call(_assertThisInitialized(_this));
      } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl

      Object.defineProperty(_assertThisInitialized(_this), 'aborted', {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this), 'onabort', {
        value: null,
        writable: true,
        configurable: true
      });
      return _this;
    }

    _createClass(AbortSignal, [
      {
        key: 'toString',
        value: function toString() {
          return '[object AbortSignal]';
        }
      },
      {
        key: 'dispatchEvent',
        value: function dispatchEvent(event) {
          if (event.type === 'abort') {
            this.aborted = true;

            if (typeof this.onabort === 'function') {
              this.onabort.call(this, event);
            }
          }

          _get(
            _getPrototypeOf(AbortSignal.prototype),
            'dispatchEvent',
            this
          ).call(this, event);
        }
      }
    ]);

    return AbortSignal;
  })(Emitter);
  var AbortController = /*#__PURE__*/ (function () {
    function AbortController() {
      _classCallCheck(this, AbortController);

      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
      Object.defineProperty(this, 'signal', {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }

    _createClass(AbortController, [
      {
        key: 'abort',
        value: function abort() {
          var event;

          try {
            event = new Event('abort');
          } catch (e) {
            if (typeof document !== 'undefined') {
              if (!document.createEvent) {
                // For Internet Explorer 8:
                event = document.createEventObject();
                event.type = 'abort';
              } else {
                // For Internet Explorer 11:
                event = document.createEvent('Event');
                event.initEvent('abort', false, false);
              }
            } else {
              // Fallback where document isn't available:
              event = {
                type: 'abort',
                bubbles: false,
                cancelable: false
              };
            }
          }

          this.signal.dispatchEvent(event);
        }
      },
      {
        key: 'toString',
        value: function toString() {
          return '[object AbortController]';
        }
      }
    ]);

    return AbortController;
  })();

  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
  }

  function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log(
        '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
      );
      return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2

    return (
      (typeof self.Request === 'function' &&
        !self.Request.prototype.hasOwnProperty('signal')) ||
      !self.AbortController
    );
  }

  (function (self) {
    if (!polyfillNeeded(self)) {
      return;
    }

    self.AbortController = AbortController;
    self.AbortSignal = AbortSignal;
  })(typeof self !== 'undefined' ? self : commonjsGlobal);
});

var version = '1.18.0';

/**
 * @ignore
 */
var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
/**
 * @ignore
 */
var DEFAULT_POPUP_CONFIG_OPTIONS = {
  timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
};
/**
 * @ignore
 */
var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
/**
 * @ignore
 */
var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
/**
 * @ignore
 */
var DEFAULT_FETCH_TIMEOUT_MS = 10000;
var CACHE_LOCATION_MEMORY = 'memory';
/**
 * @ignore
 */
var MISSING_REFRESH_TOKEN_ERROR_MESSAGE =
  'The web worker is missing the refresh token';
/**
 * @ignore
 */
var INVALID_REFRESH_TOKEN_ERROR_MESSAGE = 'invalid refresh token';
/**
 * @ignore
 */
var DEFAULT_SCOPE = 'openid profile email';
/**
 * A list of errors that can be issued by the authorization server which the
 * user can recover from by signing in interactively.
 * https://openid.net/specs/openid-connect-core-1_0.html#AuthError
 * @ignore
 */
var RECOVERABLE_ERRORS = [
  'login_required',
  'consent_required',
  'interaction_required',
  'account_selection_required',
  // Strictly speaking the user can't recover from `access_denied` - but they
  // can get more information about their access being denied by logging in
  // interactively.
  'access_denied'
];
/**
 * @ignore
 */
var DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;
/**
 * @ignore
 */
var DEFAULT_AUTH0_CLIENT = {
  name: 'auth0-spa-js',
  version: version
};

/**
 * Thrown when network requests to the Auth server fail.
 */
var GenericError = /** @class */ (function (_super) {
  __extends(GenericError, _super);
  function GenericError(error, error_description) {
    var _this =
      _super.call(this, error_description) /* istanbul ignore next */ || this;
    _this.error = error;
    _this.error_description = error_description;
    Object.setPrototypeOf(_this, GenericError.prototype);
    return _this;
  }
  GenericError.fromPayload = function (_a) {
    var error = _a.error,
      error_description = _a.error_description;
    return new GenericError(error, error_description);
  };
  return GenericError;
})(Error);
/**
 * Thrown when handling the redirect callback fails, will be one of Auth0's
 * Authentication API's Standard Error Responses: https://auth0.com/docs/api/authentication?javascript#standard-error-responses
 */
var AuthenticationError = /** @class */ (function (_super) {
  __extends(AuthenticationError, _super);
  function AuthenticationError(error, error_description, state, appState) {
    if (appState === void 0) {
      appState = null;
    }
    var _this =
      _super.call(this, error, error_description) /* istanbul ignore next */ ||
      this;
    _this.state = state;
    _this.appState = appState;
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, AuthenticationError.prototype);
    return _this;
  }
  return AuthenticationError;
})(GenericError);
/**
 * Thrown when silent auth times out (usually due to a configuration issue) or
 * when network requests to the Auth server timeout.
 */
var TimeoutError = /** @class */ (function (_super) {
  __extends(TimeoutError, _super);
  function TimeoutError() {
    var _this =
      _super.call(this, 'timeout', 'Timeout') /* istanbul ignore next */ ||
      this;
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, TimeoutError.prototype);
    return _this;
  }
  return TimeoutError;
})(GenericError);
/**
 * Error thrown when the login popup times out (if the user does not complete auth)
 */
var PopupTimeoutError = /** @class */ (function (_super) {
  __extends(PopupTimeoutError, _super);
  function PopupTimeoutError(popup) {
    var _this = _super.call(this) /* istanbul ignore next */ || this;
    _this.popup = popup;
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
    return _this;
  }
  return PopupTimeoutError;
})(TimeoutError);
var PopupCancelledError = /** @class */ (function (_super) {
  __extends(PopupCancelledError, _super);
  function PopupCancelledError(popup) {
    var _this =
      _super.call(
        this,
        'cancelled',
        'Popup closed'
      ) /* istanbul ignore next */ || this;
    _this.popup = popup;
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, PopupCancelledError.prototype);
    return _this;
  }
  return PopupCancelledError;
})(GenericError);
/**
 * Error thrown when the token exchange results in a `mfa_required` error
 */
var MfaRequiredError = /** @class */ (function (_super) {
  __extends(MfaRequiredError, _super);
  function MfaRequiredError(error, error_description, mfa_token) {
    var _this =
      _super.call(this, error, error_description) /* istanbul ignore next */ ||
      this;
    _this.mfa_token = mfa_token;
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, MfaRequiredError.prototype);
    return _this;
  }
  return MfaRequiredError;
})(GenericError);

var parseQueryResult = function (queryString) {
  if (queryString.indexOf('#') > -1) {
    queryString = queryString.substr(0, queryString.indexOf('#'));
  }
  var queryParams = queryString.split('&');
  var parsedQuery = {};
  queryParams.forEach(function (qp) {
    var _a = __read(qp.split('='), 2),
      key = _a[0],
      val = _a[1];
    parsedQuery[key] = decodeURIComponent(val);
  });
  if (parsedQuery.expires_in) {
    parsedQuery.expires_in = parseInt(parsedQuery.expires_in);
  }
  return parsedQuery;
};
var runIframe = function (authorizeUrl, eventOrigin, timeoutInSeconds) {
  if (timeoutInSeconds === void 0) {
    timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS;
  }
  return new Promise(function (res, rej) {
    var iframe = window.document.createElement('iframe');
    iframe.setAttribute('width', '0');
    iframe.setAttribute('height', '0');
    iframe.style.display = 'none';
    var removeIframe = function () {
      if (window.document.body.contains(iframe)) {
        window.document.body.removeChild(iframe);
        window.removeEventListener('message', iframeEventHandler, false);
      }
    };
    var iframeEventHandler;
    var timeoutSetTimeoutId = setTimeout(function () {
      rej(new TimeoutError());
      removeIframe();
    }, timeoutInSeconds * 1000);
    iframeEventHandler = function (e) {
      if (e.origin != eventOrigin) return;
      if (!e.data || e.data.type !== 'authorization_response') return;
      var eventSource = e.source;
      if (eventSource) {
        eventSource.close();
      }
      e.data.response.error
        ? rej(GenericError.fromPayload(e.data.response))
        : res(e.data.response);
      clearTimeout(timeoutSetTimeoutId);
      window.removeEventListener('message', iframeEventHandler, false);
      // Delay the removal of the iframe to prevent hanging loading status
      // in Chrome: https://github.com/auth0/auth0-spa-js/issues/240
      setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1000);
    };
    window.addEventListener('message', iframeEventHandler, false);
    window.document.body.appendChild(iframe);
    iframe.setAttribute('src', authorizeUrl);
  });
};
var openPopup = function (url) {
  var width = 400;
  var height = 600;
  var left = window.screenX + (window.innerWidth - width) / 2;
  var top = window.screenY + (window.innerHeight - height) / 2;
  return window.open(
    url,
    'auth0:authorize:popup',
    'left=' +
      left +
      ',top=' +
      top +
      ',width=' +
      width +
      ',height=' +
      height +
      ',resizable,scrollbars=yes,status=1'
  );
};
var runPopup = function (config) {
  return new Promise(function (resolve, reject) {
    var popupEventListener;
    // Check each second if the popup is closed triggering a PopupCancelledError
    var popupTimer = setInterval(function () {
      if (config.popup && config.popup.closed) {
        clearInterval(popupTimer);
        clearTimeout(timeoutId);
        window.removeEventListener('message', popupEventListener, false);
        reject(new PopupCancelledError(config.popup));
      }
    }, 1000);
    var timeoutId = setTimeout(function () {
      clearInterval(popupTimer);
      reject(new PopupTimeoutError(config.popup));
      window.removeEventListener('message', popupEventListener, false);
    }, (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) *
      1000);
    popupEventListener = function (e) {
      if (!e.data || e.data.type !== 'authorization_response') {
        return;
      }
      clearTimeout(timeoutId);
      clearInterval(popupTimer);
      window.removeEventListener('message', popupEventListener, false);
      config.popup.close();
      if (e.data.response.error) {
        return reject(GenericError.fromPayload(e.data.response));
      }
      resolve(e.data.response);
    };
    window.addEventListener('message', popupEventListener);
  });
};
var getCrypto = function () {
  //ie 11.x uses msCrypto
  return window.crypto || window.msCrypto;
};
var getCryptoSubtle = function () {
  var crypto = getCrypto();
  //safari 10.x uses webkitSubtle
  return crypto.subtle || crypto.webkitSubtle;
};
var createRandomString = function () {
  var charset =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.';
  var random = '';
  var randomValues = Array.from(
    getCrypto().getRandomValues(new Uint8Array(43))
  );
  randomValues.forEach(function (v) {
    return (random += charset[v % charset.length]);
  });
  return random;
};
var encode = function (value) {
  return btoa(value);
};
var createQueryParams = function (params) {
  return Object.keys(params)
    .filter(function (k) {
      return typeof params[k] !== 'undefined';
    })
    .map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    })
    .join('&');
};
var sha256 = function (s) {
  return __awaiter(void 0, void 0, void 0, function () {
    var digestOp;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          digestOp = getCryptoSubtle().digest(
            { name: 'SHA-256' },
            new TextEncoder().encode(s)
          );
          // msCrypto (IE11) uses the old spec, which is not Promise based
          // https://msdn.microsoft.com/en-us/expression/dn904640(v=vs.71)
          // Instead of returning a promise, it returns a CryptoOperation
          // with a result property in it.
          // As a result, the various events need to be handled in the event that we're
          // working in IE11 (hence the msCrypto check). These events just call resolve
          // or reject depending on their intention.
          if (window.msCrypto) {
            return [
              2 /*return*/,
              new Promise(function (res, rej) {
                digestOp.oncomplete = function (e) {
                  res(e.target.result);
                };
                digestOp.onerror = function (e) {
                  rej(e.error);
                };
                digestOp.onabort = function () {
                  rej('The digest operation was aborted');
                };
              })
            ];
          }
          return [4 /*yield*/, digestOp];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
};
var urlEncodeB64 = function (input) {
  var b64Chars = { '+': '-', '/': '_', '=': '' };
  return input.replace(/[+/=]/g, function (m) {
    return b64Chars[m];
  });
};
// https://stackoverflow.com/questions/30106476/
var decodeB64 = function (input) {
  return decodeURIComponent(
    atob(input)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
};
var urlDecodeB64 = function (input) {
  return decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
};
var bufferToBase64UrlEncoded = function (input) {
  var ie11SafeInput = new Uint8Array(input);
  return urlEncodeB64(
    window.btoa(
      String.fromCharCode.apply(
        String,
        __spreadArray([], __read(Array.from(ie11SafeInput)))
      )
    )
  );
};
var validateCrypto = function () {
  if (!getCrypto()) {
    throw new Error(
      'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
    );
  }
  if (typeof getCryptoSubtle() === 'undefined') {
    throw new Error(
      '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
    );
  }
};

/**
 * Sends the specified message to the web worker
 * @param message The message to send
 * @param to The worker to send the message to
 */
var sendMessage = function (message, to) {
  return new Promise(function (resolve, reject) {
    var messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = function (event) {
      // Only for fetch errors, as these get retried
      if (event.data.error) {
        reject(new Error(event.data.error));
      } else {
        resolve(event.data);
      }
    };
    to.postMessage(message, [messageChannel.port2]);
  });
};

var createAbortController = function () {
  return new AbortController();
};
var dofetch = function (fetchUrl, fetchOptions) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [
            4 /*yield*/,
            fetch__default['default'](fetchUrl, fetchOptions)
          ];
        case 1:
          response = _b.sent();
          _a = {
            ok: response.ok
          };
          return [4 /*yield*/, response.json()];
        case 2:
          return [2 /*return*/, ((_a.json = _b.sent()), _a)];
      }
    });
  });
};
var fetchWithoutWorker = function (fetchUrl, fetchOptions, timeout) {
  return __awaiter(void 0, void 0, void 0, function () {
    var controller, timeoutId;
    return __generator(this, function (_a) {
      controller = createAbortController();
      fetchOptions.signal = controller.signal;
      // The promise will resolve with one of these two promises (the fetch or the timeout), whichever completes first.
      return [
        2 /*return*/,
        Promise.race([
          dofetch(fetchUrl, fetchOptions),
          new Promise(function (_, reject) {
            timeoutId = setTimeout(function () {
              controller.abort();
              reject(new Error("Timeout when executing 'fetch'"));
            }, timeout);
          })
        ]).finally(function () {
          clearTimeout(timeoutId);
        })
      ];
    });
  });
};
var fetchWithWorker = function (
  fetchUrl,
  audience,
  scope,
  fetchOptions,
  timeout,
  worker,
  useFormData
) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [
        2 /*return*/,
        sendMessage(
          {
            auth: {
              audience: audience,
              scope: scope
            },
            timeout: timeout,
            fetchUrl: fetchUrl,
            fetchOptions: fetchOptions,
            useFormData: useFormData
          },
          worker
        )
      ];
    });
  });
};
var switchFetch = function (
  fetchUrl,
  audience,
  scope,
  fetchOptions,
  worker,
  useFormData,
  timeout
) {
  if (timeout === void 0) {
    timeout = DEFAULT_FETCH_TIMEOUT_MS;
  }
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      if (worker) {
        return [
          2 /*return*/,
          fetchWithWorker(
            fetchUrl,
            audience,
            scope,
            fetchOptions,
            timeout,
            worker,
            useFormData
          )
        ];
      } else {
        return [
          2 /*return*/,
          fetchWithoutWorker(fetchUrl, fetchOptions, timeout)
        ];
      }
    });
  });
};
function getJSON(url, timeout, audience, scope, options, worker, useFormData) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchError,
      response,
      i,
      e_1,
      _a,
      error,
      error_description,
      data,
      ok,
      errorMessage;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          fetchError = null;
          i = 0;
          _b.label = 1;
        case 1:
          if (!(i < DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [3 /*break*/, 6];
          _b.label = 2;
        case 2:
          _b.trys.push([2, 4, , 5]);
          return [
            4 /*yield*/,
            switchFetch(
              url,
              audience,
              scope,
              options,
              worker,
              useFormData,
              timeout
            )
          ];
        case 3:
          response = _b.sent();
          fetchError = null;
          return [3 /*break*/, 6];
        case 4:
          e_1 = _b.sent();
          // Fetch only fails in the case of a network issue, so should be
          // retried here. Failure status (4xx, 5xx, etc) return a resolved Promise
          // with the failure in the body.
          // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
          fetchError = e_1;
          return [3 /*break*/, 5];
        case 5:
          i++;
          return [3 /*break*/, 1];
        case 6:
          if (fetchError) {
            // unfetch uses XMLHttpRequest under the hood which throws
            // ProgressEvents on error, which don't have message properties
            fetchError.message = fetchError.message || 'Failed to fetch';
            throw fetchError;
          }
          (_a = response.json),
            (error = _a.error),
            (error_description = _a.error_description),
            (data = __rest(_a, ['error', 'error_description'])),
            (ok = response.ok);
          if (!ok) {
            errorMessage =
              error_description || 'HTTP error. Unable to fetch ' + url;
            if (error === 'mfa_required') {
              throw new MfaRequiredError(error, errorMessage, data.mfa_token);
            }
            throw new GenericError(error || 'request_error', errorMessage);
          }
          return [2 /*return*/, data];
      }
    });
  });
}

function oauthToken(_a, worker) {
  var baseUrl = _a.baseUrl,
    timeout = _a.timeout,
    audience = _a.audience,
    scope = _a.scope,
    auth0Client = _a.auth0Client,
    useFormData = _a.useFormData,
    options = __rest(_a, [
      'baseUrl',
      'timeout',
      'audience',
      'scope',
      'auth0Client',
      'useFormData'
    ]);
  return __awaiter(this, void 0, void 0, function () {
    var body;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          body = useFormData
            ? createQueryParams(options)
            : JSON.stringify(options);
          return [
            4 /*yield*/,
            getJSON(
              baseUrl + '/oauth/token',
              timeout,
              audience || 'default',
              scope,
              {
                method: 'POST',
                body: body,
                headers: {
                  'Content-Type': useFormData
                    ? 'application/x-www-form-urlencoded'
                    : 'application/json',
                  'Auth0-Client': btoa(
                    JSON.stringify(auth0Client || DEFAULT_AUTH0_CLIENT)
                  )
                }
              },
              worker,
              useFormData
            )
          ];
        case 1:
          return [2 /*return*/, _b.sent()];
      }
    });
  });
}

/**
 * @ignore
 */
var dedupe = function (arr) {
  return Array.from(new Set(arr));
};
/**
 * @ignore
 */
var getUniqueScopes = function () {
  var scopes = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    scopes[_i] = arguments[_i];
  }
  return dedupe(scopes.join(' ').trim().split(/\s+/)).join(' ');
};

var CACHE_KEY_PREFIX = '@@auth0spajs@@';
var CacheKey = /** @class */ (function () {
  function CacheKey(data, prefix) {
    if (prefix === void 0) {
      prefix = CACHE_KEY_PREFIX;
    }
    this.prefix = prefix;
    this.client_id = data.client_id;
    this.scope = data.scope;
    this.audience = data.audience;
  }
  /**
   * Converts this `CacheKey` instance into a string for use in a cache
   * @returns A string representation of the key
   */
  CacheKey.prototype.toKey = function () {
    return (
      this.prefix +
      '::' +
      this.client_id +
      '::' +
      this.audience +
      '::' +
      this.scope
    );
  };
  /**
   * Converts a cache key string into a `CacheKey` instance.
   * @param key The key to convert
   * @returns An instance of `CacheKey`
   */
  CacheKey.fromKey = function (key) {
    var _a = __read(key.split('::'), 4),
      prefix = _a[0],
      client_id = _a[1],
      audience = _a[2],
      scope = _a[3];
    return new CacheKey(
      { client_id: client_id, scope: scope, audience: audience },
      prefix
    );
  };
  /**
   * Utility function to build a `CacheKey` instance from a cache entry
   * @param entry The entry
   * @returns An instance of `CacheKey`
   */
  CacheKey.fromCacheEntry = function (entry) {
    var scope = entry.scope,
      audience = entry.audience,
      client_id = entry.client_id;
    return new CacheKey({
      scope: scope,
      audience: audience,
      client_id: client_id
    });
  };
  return CacheKey;
})();

var LocalStorageCache = /** @class */ (function () {
  function LocalStorageCache() {}
  LocalStorageCache.prototype.set = function (key, entry) {
    localStorage.setItem(key, JSON.stringify(entry));
  };
  LocalStorageCache.prototype.get = function (key) {
    var json = window.localStorage.getItem(key);
    if (!json) return;
    try {
      var payload = JSON.parse(json);
      return payload;
    } catch (e) {
      /* istanbul ignore next */
      return;
    }
  };
  LocalStorageCache.prototype.remove = function (key) {
    localStorage.removeItem(key);
  };
  LocalStorageCache.prototype.allKeys = function () {
    return Object.keys(window.localStorage).filter(function (key) {
      return key.startsWith(CACHE_KEY_PREFIX);
    });
  };
  return LocalStorageCache;
})();

var InMemoryCache = /** @class */ (function () {
  function InMemoryCache() {
    this.enclosedCache = (function () {
      var cache = {};
      return {
        set: function (key, entry) {
          cache[key] = entry;
        },
        get: function (key) {
          var cacheEntry = cache[key];
          if (!cacheEntry) {
            return;
          }
          return cacheEntry;
        },
        remove: function (key) {
          delete cache[key];
        },
        allKeys: function () {
          return Object.keys(cache);
        }
      };
    })();
  }
  return InMemoryCache;
})();

var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
var CacheManager = /** @class */ (function () {
  function CacheManager(cache, keyManifest) {
    this.cache = cache;
    this.keyManifest = keyManifest;
  }
  CacheManager.prototype.get = function (cacheKey, expiryAdjustmentSeconds) {
    var _a;
    if (expiryAdjustmentSeconds === void 0) {
      expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS;
    }
    return __awaiter(this, void 0, void 0, function () {
      var wrappedEntry, keys, matchedKey, nowSeconds;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, this.cache.get(cacheKey.toKey())];
          case 1:
            wrappedEntry = _b.sent();
            if (!!wrappedEntry) return [3 /*break*/, 4];
            return [4 /*yield*/, this.getCacheKeys()];
          case 2:
            keys = _b.sent();
            if (!keys) return [2 /*return*/];
            matchedKey = this.matchExistingCacheKey(cacheKey, keys);
            return [4 /*yield*/, this.cache.get(matchedKey)];
          case 3:
            wrappedEntry = _b.sent();
            _b.label = 4;
          case 4:
            // If we still don't have an entry, exit.
            if (!wrappedEntry) {
              return [2 /*return*/];
            }
            nowSeconds = Math.floor(Date.now() / 1000);
            if (
              !(wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds)
            )
              return [3 /*break*/, 9];
            if (!wrappedEntry.body.refresh_token) return [3 /*break*/, 6];
            wrappedEntry.body = {
              refresh_token: wrappedEntry.body.refresh_token
            };
            return [
              4 /*yield*/,
              this.cache.set(cacheKey.toKey(), wrappedEntry)
            ];
          case 5:
            _b.sent();
            return [2 /*return*/, wrappedEntry.body];
          case 6:
            return [4 /*yield*/, this.cache.remove(cacheKey.toKey())];
          case 7:
            _b.sent();
            return [
              4 /*yield*/,
              (_a = this.keyManifest) === null || _a === void 0
                ? void 0
                : _a.remove(cacheKey.toKey())
            ];
          case 8:
            _b.sent();
            return [2 /*return*/];
          case 9:
            return [2 /*return*/, wrappedEntry.body];
        }
      });
    });
  };
  CacheManager.prototype.set = function (entry) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var cacheKey, wrappedEntry;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            cacheKey = new CacheKey({
              client_id: entry.client_id,
              scope: entry.scope,
              audience: entry.audience
            });
            wrappedEntry = this.wrapCacheEntry(entry);
            return [
              4 /*yield*/,
              this.cache.set(cacheKey.toKey(), wrappedEntry)
            ];
          case 1:
            _b.sent();
            return [
              4 /*yield*/,
              (_a = this.keyManifest) === null || _a === void 0
                ? void 0
                : _a.add(cacheKey.toKey())
            ];
          case 2:
            _b.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  CacheManager.prototype.clear = function (clientId) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var keys;
      var _this = this;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, this.getCacheKeys()];
          case 1:
            keys = _b.sent();
            /* istanbul ignore next */
            if (!keys) return [2 /*return*/];
            return [
              4 /*yield*/,
              keys
                .filter(function (key) {
                  return clientId ? key.includes(clientId) : true;
                })
                .reduce(function (memo, key) {
                  return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          return [4 /*yield*/, memo];
                        case 1:
                          _a.sent();
                          return [4 /*yield*/, this.cache.remove(key)];
                        case 2:
                          _a.sent();
                          return [2 /*return*/];
                      }
                    });
                  });
                }, Promise.resolve())
            ];
          case 2:
            _b.sent();
            return [
              4 /*yield*/,
              (_a = this.keyManifest) === null || _a === void 0
                ? void 0
                : _a.clear()
            ];
          case 3:
            _b.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Note: only call this if you're sure one of our internal (synchronous) caches are being used.
   */
  CacheManager.prototype.clearSync = function (clientId) {
    var _this = this;
    var keys = this.cache.allKeys();
    /* istanbul ignore next */
    if (!keys) return;
    keys
      .filter(function (key) {
        return clientId ? key.includes(clientId) : true;
      })
      .forEach(function (key) {
        _this.cache.remove(key);
      });
  };
  CacheManager.prototype.wrapCacheEntry = function (entry) {
    var expiresInTime = Math.floor(Date.now() / 1000) + entry.expires_in;
    var expirySeconds = Math.min(expiresInTime, entry.decodedToken.claims.exp);
    return {
      body: entry,
      expiresAt: expirySeconds
    };
  };
  CacheManager.prototype.getCacheKeys = function () {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!this.keyManifest) return [3 /*break*/, 2];
            return [4 /*yield*/, this.keyManifest.get()];
          case 1:
            _b = (_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys;
            return [3 /*break*/, 4];
          case 2:
            return [4 /*yield*/, this.cache.allKeys()];
          case 3:
            _b = _c.sent();
            _c.label = 4;
          case 4:
            return [2 /*return*/, _b];
        }
      });
    });
  };
  /**
   * Finds the corresponding key in the cache based on the provided cache key.
   * The keys inside the cache are in the format {prefix}::{client_id}::{audience}::{scope}.
   * The first key in the cache that satisfies the following conditions is returned
   *  - `prefix` is strict equal to Auth0's internally configured `keyPrefix`
   *  - `client_id` is strict equal to the `cacheKey.client_id`
   *  - `audience` is strict equal to the `cacheKey.audience`
   *  - `scope` contains at least all the `cacheKey.scope` values
   *  *
   * @param keyToMatch The provided cache key
   * @param allKeys A list of existing cache keys
   */
  CacheManager.prototype.matchExistingCacheKey = function (
    keyToMatch,
    allKeys
  ) {
    return allKeys.filter(function (key) {
      var cacheKey = CacheKey.fromKey(key);
      var scopeSet = new Set(cacheKey.scope && cacheKey.scope.split(' '));
      var scopesToMatch = keyToMatch.scope.split(' ');
      var hasAllScopes =
        cacheKey.scope &&
        scopesToMatch.reduce(function (acc, current) {
          return acc && scopeSet.has(current);
        }, true);
      return (
        cacheKey.prefix === CACHE_KEY_PREFIX &&
        cacheKey.client_id === keyToMatch.client_id &&
        cacheKey.audience === keyToMatch.audience &&
        hasAllScopes
      );
    })[0];
  };
  return CacheManager;
})();

var TRANSACTION_STORAGE_KEY_PREFIX = 'a0.spajs.txs';
var TransactionManager = /** @class */ (function () {
  function TransactionManager(storage, clientId) {
    this.storage = storage;
    this.clientId = clientId;
    this.storageKey = TRANSACTION_STORAGE_KEY_PREFIX + '.' + clientId;
    this.transaction = this.storage.get(this.storageKey);
  }
  TransactionManager.prototype.create = function (transaction) {
    this.transaction = transaction;
    this.storage.save(this.storageKey, transaction, {
      daysUntilExpire: 1
    });
  };
  TransactionManager.prototype.get = function () {
    return this.transaction;
  };
  TransactionManager.prototype.remove = function () {
    delete this.transaction;
    this.storage.remove(this.storageKey);
  };
  return TransactionManager;
})();

var isNumber = function (n) {
  return typeof n === 'number';
};
var idTokendecoded = [
  'iss',
  'aud',
  'exp',
  'nbf',
  'iat',
  'jti',
  'azp',
  'nonce',
  'auth_time',
  'at_hash',
  'c_hash',
  'acr',
  'amr',
  'sub_jwk',
  'cnf',
  'sip_from_tag',
  'sip_date',
  'sip_callid',
  'sip_cseq_num',
  'sip_via_branch',
  'orig',
  'dest',
  'mky',
  'events',
  'toe',
  'txn',
  'rph',
  'sid',
  'vot',
  'vtm'
];
var decode = function (token) {
  var parts = token.split('.');
  var _a = __read(parts, 3),
    header = _a[0],
    payload = _a[1],
    signature = _a[2];
  if (parts.length !== 3 || !header || !payload || !signature) {
    throw new Error('ID token could not be decoded');
  }
  var payloadJSON = JSON.parse(urlDecodeB64(payload));
  var claims = { __raw: token };
  var user = {};
  Object.keys(payloadJSON).forEach(function (k) {
    claims[k] = payloadJSON[k];
    if (!idTokendecoded.includes(k)) {
      user[k] = payloadJSON[k];
    }
  });
  return {
    encoded: { header: header, payload: payload, signature: signature },
    header: JSON.parse(urlDecodeB64(header)),
    claims: claims,
    user: user
  };
};
var verify = function (options) {
  if (!options.id_token) {
    throw new Error('ID token is required but missing');
  }
  var decoded = decode(options.id_token);
  if (!decoded.claims.iss) {
    throw new Error(
      'Issuer (iss) claim must be a string present in the ID token'
    );
  }
  if (decoded.claims.iss !== options.iss) {
    throw new Error(
      'Issuer (iss) claim mismatch in the ID token; expected "' +
        options.iss +
        '", found "' +
        decoded.claims.iss +
        '"'
    );
  }
  if (!decoded.user.sub) {
    throw new Error(
      'Subject (sub) claim must be a string present in the ID token'
    );
  }
  if (decoded.header.alg !== 'RS256') {
    throw new Error(
      'Signature algorithm of "' +
        decoded.header.alg +
        '" is not supported. Expected the ID token to be signed with "RS256".'
    );
  }
  if (
    !decoded.claims.aud ||
    !(
      typeof decoded.claims.aud === 'string' ||
      Array.isArray(decoded.claims.aud)
    )
  ) {
    throw new Error(
      'Audience (aud) claim must be a string or array of strings present in the ID token'
    );
  }
  if (Array.isArray(decoded.claims.aud)) {
    if (!decoded.claims.aud.includes(options.aud)) {
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          options.aud +
          '" but was not one of "' +
          decoded.claims.aud.join(', ') +
          '"'
      );
    }
    if (decoded.claims.aud.length > 1) {
      if (!decoded.claims.azp) {
        throw new Error(
          'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
        );
      }
      if (decoded.claims.azp !== options.aud) {
        throw new Error(
          'Authorized Party (azp) claim mismatch in the ID token; expected "' +
            options.aud +
            '", found "' +
            decoded.claims.azp +
            '"'
        );
      }
    }
  } else if (decoded.claims.aud !== options.aud) {
    throw new Error(
      'Audience (aud) claim mismatch in the ID token; expected "' +
        options.aud +
        '" but found "' +
        decoded.claims.aud +
        '"'
    );
  }
  if (options.nonce) {
    if (!decoded.claims.nonce) {
      throw new Error(
        'Nonce (nonce) claim must be a string present in the ID token'
      );
    }
    if (decoded.claims.nonce !== options.nonce) {
      throw new Error(
        'Nonce (nonce) claim mismatch in the ID token; expected "' +
          options.nonce +
          '", found "' +
          decoded.claims.nonce +
          '"'
      );
    }
  }
  if (options.max_age && !isNumber(decoded.claims.auth_time)) {
    throw new Error(
      'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
    );
  }
  /* istanbul ignore next */
  if (!isNumber(decoded.claims.exp)) {
    throw new Error(
      'Expiration Time (exp) claim must be a number present in the ID token'
    );
  }
  if (!isNumber(decoded.claims.iat)) {
    throw new Error(
      'Issued At (iat) claim must be a number present in the ID token'
    );
  }
  var leeway = options.leeway || 60;
  var now = new Date(Date.now());
  var expDate = new Date(0);
  var nbfDate = new Date(0);
  var authTimeDate = new Date(0);
  authTimeDate.setUTCSeconds(
    parseInt(decoded.claims.auth_time) + options.max_age + leeway
  );
  expDate.setUTCSeconds(decoded.claims.exp + leeway);
  nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
  if (now > expDate) {
    throw new Error(
      'Expiration Time (exp) claim error in the ID token; current time (' +
        now +
        ') is after expiration time (' +
        expDate +
        ')'
    );
  }
  if (isNumber(decoded.claims.nbf) && now < nbfDate) {
    throw new Error(
      "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
        now +
        ') is before ' +
        nbfDate
    );
  }
  if (isNumber(decoded.claims.auth_time) && now > authTimeDate) {
    throw new Error(
      'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
        now +
        ') is after last auth at ' +
        authTimeDate
    );
  }
  if (options.organizationId) {
    if (!decoded.claims.org_id) {
      throw new Error(
        'Organization ID (org_id) claim must be a string present in the ID token'
      );
    } else if (options.organizationId !== decoded.claims.org_id) {
      throw new Error(
        'Organization ID (org_id) claim mismatch in the ID token; expected "' +
          options.organizationId +
          '", found "' +
          decoded.claims.org_id +
          '"'
      );
    }
  }
  return decoded;
};

/**
 * A storage protocol for marshalling data to/from cookies
 */
var CookieStorage = {
  get: function (key) {
    var value = Cookies__namespace.get(key);
    if (typeof value === 'undefined') {
      return;
    }
    return JSON.parse(value);
  },
  save: function (key, value, options) {
    var cookieAttributes = {};
    if ('https:' === window.location.protocol) {
      cookieAttributes = {
        secure: true,
        sameSite: 'none'
      };
    }
    if (
      options === null || options === void 0 ? void 0 : options.daysUntilExpire
    ) {
      cookieAttributes.expires = options.daysUntilExpire;
    }
    Cookies__namespace.set(key, JSON.stringify(value), cookieAttributes);
  },
  remove: function (key) {
    Cookies__namespace.remove(key);
  }
};
/**
 * @ignore
 */
var LEGACY_PREFIX = '_legacy_';
/**
 * Cookie storage that creates a cookie for modern and legacy browsers.
 * See: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 */
var CookieStorageWithLegacySameSite = {
  get: function (key) {
    var value = CookieStorage.get(key);
    if (value) {
      return value;
    }
    return CookieStorage.get('' + LEGACY_PREFIX + key);
  },
  save: function (key, value, options) {
    var cookieAttributes = {};
    if ('https:' === window.location.protocol) {
      cookieAttributes = { secure: true };
    }
    if (
      options === null || options === void 0 ? void 0 : options.daysUntilExpire
    ) {
      cookieAttributes.expires = options.daysUntilExpire;
    }
    Cookies__namespace.set(
      '' + LEGACY_PREFIX + key,
      JSON.stringify(value),
      cookieAttributes
    );
    CookieStorage.save(key, value, options);
  },
  remove: function (key) {
    CookieStorage.remove(key);
    CookieStorage.remove('' + LEGACY_PREFIX + key);
  }
};
/**
 * A storage protocol for marshalling data to/from session storage
 */
var SessionStorage = {
  get: function (key) {
    /* istanbul ignore next */
    if (typeof sessionStorage === 'undefined') {
      return;
    }
    var value = sessionStorage.getItem(key);
    if (typeof value === 'undefined') {
      return;
    }
    return JSON.parse(value);
  },
  save: function (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove: function (key) {
    sessionStorage.removeItem(key);
  }
};

function decodeBase64(base64, enableUnicode) {
  var binaryString = atob(base64);
  if (enableUnicode) {
    var binaryView = new Uint8Array(binaryString.length);
    for (var i = 0, n = binaryString.length; i < n; ++i) {
      binaryView[i] = binaryString.charCodeAt(i);
    }
    return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
  }
  return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
  var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
  var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
  var source = decodeBase64(base64, enableUnicode);
  var start = source.indexOf('\n', 10) + 1;
  var body =
    source.substring(start) +
    (sourcemap ? '//# sourceMappingURL=' + sourcemap : '');
  var blob = new Blob([body], { type: 'application/javascript' });
  return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
  var url;
  return function WorkerFactory(options) {
    url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
    return new Worker(url, options);
  };
}

var WorkerFactory = createBase64WorkerFactory(
  'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7DQogICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7DQogICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHsNCiAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldOw0KICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07DQogICAgICAgICAgICB9DQogICAgICAgICAgICByZXR1cm4gdDsNCiAgICAgICAgfTsNCiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7DQogICAgfTsNCg0KICAgIGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHsNCiAgICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9DQogICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgew0KICAgICAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQ0KICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbInRocm93Il0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQ0KICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH0NCiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTsNCiAgICAgICAgfSk7DQogICAgfQ0KDQogICAgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkgew0KICAgICAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnOw0KICAgICAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgInRocm93IjogdmVyYigxKSwgInJldHVybiI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZzsNCiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9DQogICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHsNCiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7DQogICAgICAgICAgICB3aGlsZSAoXykgdHJ5IHsNCiAgICAgICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5WyJyZXR1cm4iXSA6IG9wWzBdID8geVsidGhyb3ciXSB8fCAoKHQgPSB5WyJyZXR1cm4iXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7DQogICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdOw0KICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlOw0KICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Og0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7DQogICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTsNCiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH0NCiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9Ow0KICAgICAgICB9DQogICAgfQ0KDQogICAgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHsNCiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIG9bU3ltYm9sLml0ZXJhdG9yXTsNCiAgICAgICAgaWYgKCFtKSByZXR1cm4gbzsNCiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7DQogICAgICAgIHRyeSB7DQogICAgICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTsNCiAgICAgICAgfQ0KICAgICAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH0NCiAgICAgICAgZmluYWxseSB7DQogICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpWyJyZXR1cm4iXSkpIG0uY2FsbChpKTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfQ0KICAgICAgICB9DQogICAgICAgIHJldHVybiBhcjsNCiAgICB9CgogICAgLyoqDQogICAgICogQGlnbm9yZQ0KICAgICAqLw0KICAgIHZhciBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSA9ICdUaGUgd2ViIHdvcmtlciBpcyBtaXNzaW5nIHRoZSByZWZyZXNoIHRva2VuJzsKCiAgICB2YXIgcmVmcmVzaFRva2VucyA9IHt9Ow0KICAgIHZhciBjYWNoZUtleSA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsgcmV0dXJuIGF1ZGllbmNlICsgInwiICsgc2NvcGU7IH07DQogICAgdmFyIGdldFJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsNCiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07DQogICAgfTsNCiAgICB2YXIgc2V0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24gKHJlZnJlc2hUb2tlbiwgYXVkaWVuY2UsIHNjb3BlKSB7IHJldHVybiAocmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXSA9IHJlZnJlc2hUb2tlbik7IH07DQogICAgdmFyIGRlbGV0ZVJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsNCiAgICAgICAgcmV0dXJuIGRlbGV0ZSByZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldOw0KICAgIH07DQogICAgdmFyIHdhaXQgPSBmdW5jdGlvbiAodGltZSkgew0KICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7IH0pOw0KICAgIH07DQogICAgdmFyIGZvcm1EYXRhVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybURhdGEpIHsNCiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSk7DQogICAgICAgIHZhciBwYXJzZWRRdWVyeSA9IHt9Ow0KICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGtleSkgew0KICAgICAgICAgICAgcGFyc2VkUXVlcnlba2V5XSA9IHZhbDsNCiAgICAgICAgfSk7DQogICAgICAgIHJldHVybiBwYXJzZWRRdWVyeTsNCiAgICB9Ow0KICAgIHZhciBtZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChfYSkgew0KICAgICAgICB2YXIgX2IgPSBfYS5kYXRhLCB0aW1lb3V0ID0gX2IudGltZW91dCwgYXV0aCA9IF9iLmF1dGgsIGZldGNoVXJsID0gX2IuZmV0Y2hVcmwsIGZldGNoT3B0aW9ucyA9IF9iLmZldGNoT3B0aW9ucywgdXNlRm9ybURhdGEgPSBfYi51c2VGb3JtRGF0YSwgX2MgPSBfX3JlYWQoX2EucG9ydHMsIDEpLCBwb3J0ID0gX2NbMF07DQogICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgew0KICAgICAgICAgICAgdmFyIGpzb24sIF9kLCBhdWRpZW5jZSwgc2NvcGUsIGJvZHksIHJlZnJlc2hUb2tlbiwgYWJvcnRDb250cm9sbGVyLCByZXNwb25zZSwgZXJyb3JfMSwgZXJyb3JfMjsNCiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHsNCiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7DQogICAgICAgICAgICAgICAgICAgIGNhc2UgMDoNCiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gYXV0aCB8fCB7fSwgYXVkaWVuY2UgPSBfZC5hdWRpZW5jZSwgc2NvcGUgPSBfZC5zY29wZTsNCiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOg0KICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsxLCA3LCAsIDhdKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSB1c2VGb3JtRGF0YQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybURhdGFUb09iamVjdChmZXRjaE9wdGlvbnMuYm9keSkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEpTT04ucGFyc2UoZmV0Y2hPcHRpb25zLmJvZHkpOw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZnJlc2hfdG9rZW4gJiYgYm9keS5ncmFudF90eXBlID09PSAncmVmcmVzaF90b2tlbicpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IHVzZUZvcm1EYXRhDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IFVSTFNlYXJjaFBhcmFtcyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYm9keSksIHsgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuIH0pKS50b1N0cmluZygpDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoX19hc3NpZ24oX19hc3NpZ24oe30sIGJvZHkpLCB7IHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbiB9KSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIgPSB2b2lkIDA7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gJ2Z1bmN0aW9uJykgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdm9pZCAwOw0KICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDI6DQogICAgICAgICAgICAgICAgICAgICAgICBfZS50cnlzLnB1c2goWzIsIDQsICwgNV0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yYWNlKFsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCh0aW1lb3V0KSwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goZmV0Y2hVcmwsIF9fYXNzaWduKHt9LCBmZXRjaE9wdGlvbnMpKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOg0KICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfZS5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA0Og0KICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9lLnNlbnQoKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5Lg0KICAgICAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEubWVzc2FnZQ0KICAgICAgICAgICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNToNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsIGFib3J0IGl0IGFuZCBsZXQgYHN3aXRjaEZldGNoYCByYWlzZSB0aGUgZXJyb3IuDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFib3J0Q29udHJvbGxlcikNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNjoNCiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfZS5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVmcmVzaFRva2VuKGpzb24ucmVmcmVzaF90b2tlbiwgYXVkaWVuY2UsIHNjb3BlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUganNvbi5yZWZyZXNoX3Rva2VuOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvazogcmVzcG9uc2Uub2ssDQogICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjoganNvbg0KICAgICAgICAgICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA3Og0KICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9lLnNlbnQoKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rOiBmYWxzZSwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uOiB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvcl8yLm1lc3NhZ2UNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMiAvKnJldHVybiovXTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICB9KTsNCiAgICAgICAgfSk7DQogICAgfTsNCiAgICAvLyBEb24ndCBydW4gYGFkZEV2ZW50TGlzdGVuZXJgIGluIG91ciB0ZXN0cyAodGhpcyBpcyByZXBsYWNlZCBpbiByb2xsdXApDQogICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovDQogICAgew0KICAgICAgICAvLyBAdHMtaWdub3JlDQogICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7DQogICAgfQoKfSgpKTsKCg==',
  null,
  false
);
/* eslint-enable */

var isIE11 = function () {
  return /Trident.*rv:11\.0/.test(navigator.userAgent);
};

var singlePromiseMap = {};
var singlePromise = function (cb, key) {
  var promise = singlePromiseMap[key];
  if (!promise) {
    promise = cb().finally(function () {
      delete singlePromiseMap[key];
      promise = null;
    });
    singlePromiseMap[key] = promise;
  }
  return promise;
};
var retryPromise = function (cb, maxNumberOfRetries) {
  if (maxNumberOfRetries === void 0) {
    maxNumberOfRetries = 3;
  }
  return __awaiter(void 0, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          i = 0;
          _a.label = 1;
        case 1:
          if (!(i < maxNumberOfRetries)) return [3 /*break*/, 4];
          return [4 /*yield*/, cb()];
        case 2:
          if (_a.sent()) {
            return [2 /*return*/, true];
          }
          _a.label = 3;
        case 3:
          i++;
          return [3 /*break*/, 1];
        case 4:
          return [2 /*return*/, false];
      }
    });
  });
};

var CacheKeyManifest = /** @class */ (function () {
  function CacheKeyManifest(cache, clientId) {
    this.cache = cache;
    this.clientId = clientId;
    this.manifestKey = this.createManifestKeyFrom(this.clientId);
  }
  CacheKeyManifest.prototype.add = function (key) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var keys, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _b = Set.bind;
            return [4 /*yield*/, this.cache.get(this.manifestKey)];
          case 1:
            keys = new (_b.apply(Set, [
              void 0,
              ((_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys) ||
                []
            ]))();
            keys.add(key);
            return [
              4 /*yield*/,
              this.cache.set(this.manifestKey, {
                keys: __spreadArray([], __read(keys))
              })
            ];
          case 2:
            _c.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  CacheKeyManifest.prototype.remove = function (key) {
    return __awaiter(this, void 0, void 0, function () {
      var entry, keys;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.cache.get(this.manifestKey)];
          case 1:
            entry = _a.sent();
            if (!entry) return [3 /*break*/, 5];
            keys = new Set(entry.keys);
            keys.delete(key);
            if (!(keys.size > 0)) return [3 /*break*/, 3];
            return [
              4 /*yield*/,
              this.cache.set(this.manifestKey, {
                keys: __spreadArray([], __read(keys))
              })
            ];
          case 2:
            return [2 /*return*/, _a.sent()];
          case 3:
            return [4 /*yield*/, this.cache.remove(this.manifestKey)];
          case 4:
            return [2 /*return*/, _a.sent()];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  CacheKeyManifest.prototype.get = function () {
    return this.cache.get(this.manifestKey);
  };
  CacheKeyManifest.prototype.clear = function () {
    return this.cache.remove(this.manifestKey);
  };
  CacheKeyManifest.prototype.createManifestKeyFrom = function (clientId) {
    return CACHE_KEY_PREFIX + '::' + clientId;
  };
  return CacheKeyManifest;
})();

/**
 * @ignore
 */
var lock = new Lock__default['default']();
/**
 * @ignore
 */
var GET_TOKEN_SILENTLY_LOCK_KEY = 'auth0.lock.getTokenSilently';
/**
 * @ignore
 */
var buildOrganizationHintCookieName = function (clientId) {
  return 'auth0.' + clientId + '.organization_hint';
};
/**
 * @ignore
 */
var OLD_IS_AUTHENTICATED_COOKIE_NAME = 'auth0.is.authenticated';
/**
 * @ignore
 */
var buildIsAuthenticatedCookieName = function (clientId) {
  return 'auth0.' + clientId + '.is.authenticated';
};
/**
 * @ignore
 */
var cacheLocationBuilders = {
  memory: function () {
    return new InMemoryCache().enclosedCache;
  },
  localstorage: function () {
    return new LocalStorageCache();
  }
};
/**
 * @ignore
 */
var cacheFactory = function (location) {
  return cacheLocationBuilders[location];
};
/**
 * @ignore
 */
var supportWebWorker = function () {
  return !isIE11();
};
/**
 * @ignore
 */
var getTokenIssuer = function (issuer, domainUrl) {
  if (issuer) {
    return issuer.startsWith('https://') ? issuer : 'https://' + issuer + '/';
  }
  return domainUrl + '/';
};
/**
 * @ignore
 */
var getDomain = function (domainUrl) {
  if (!/^https?:\/\//.test(domainUrl)) {
    return 'https://' + domainUrl;
  }
  return domainUrl;
};
/**
 * @ignore
 */
var getCustomInitialOptions = function (options) {
  options.advancedOptions;
  options.audience;
  options.auth0Client;
  options.authorizeTimeoutInSeconds;
  options.cacheLocation;
  options.client_id;
  options.domain;
  options.issuer;
  options.leeway;
  options.max_age;
  options.redirect_uri;
  options.scope;
  options.useRefreshTokens;
  options.useCookiesForTransactions;
  options.useFormData;
  var customParams = __rest(options, [
    'advancedOptions',
    'audience',
    'auth0Client',
    'authorizeTimeoutInSeconds',
    'cacheLocation',
    'client_id',
    'domain',
    'issuer',
    'leeway',
    'max_age',
    'redirect_uri',
    'scope',
    'useRefreshTokens',
    'useCookiesForTransactions',
    'useFormData'
  ]);
  return customParams;
};
/**
 * Auth0 SDK for Single Page Applications using [Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce).
 */
var Auth0Client = /** @class */ (function () {
  function Auth0Client(options) {
    var _a, _b;
    this.options = options;
    typeof window !== 'undefined' && validateCrypto();
    if (options.cache && options.cacheLocation) {
      console.warn(
        'Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.'
      );
    }
    var cache;
    if (options.cache) {
      cache = options.cache;
    } else {
      this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
      if (!cacheFactory(this.cacheLocation)) {
        throw new Error('Invalid cache location "' + this.cacheLocation + '"');
      }
      cache = cacheFactory(this.cacheLocation)();
    }
    this.cookieStorage =
      options.legacySameSiteCookie === false
        ? CookieStorage
        : CookieStorageWithLegacySameSite;
    this.orgHintCookieName = buildOrganizationHintCookieName(
      this.options.client_id
    );
    this.isAuthenticatedCookieName = buildIsAuthenticatedCookieName(
      this.options.client_id
    );
    this.sessionCheckExpiryDays =
      options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
    var transactionStorage = options.useCookiesForTransactions
      ? this.cookieStorage
      : SessionStorage;
    this.scope = this.options.scope;
    this.transactionManager = new TransactionManager(
      transactionStorage,
      this.options.client_id
    );
    this.cacheManager = new CacheManager(
      cache,
      !cache.allKeys
        ? new CacheKeyManifest(cache, this.options.client_id)
        : null
    );
    this.domainUrl = getDomain(this.options.domain);
    this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
    this.defaultScope = getUniqueScopes(
      'openid',
      ((_b =
        (_a = this.options) === null || _a === void 0
          ? void 0
          : _a.advancedOptions) === null || _b === void 0
        ? void 0
        : _b.defaultScope) !== undefined
        ? this.options.advancedOptions.defaultScope
        : DEFAULT_SCOPE
    );
    // If using refresh tokens, automatically specify the `offline_access` scope.
    // Note we cannot add this to 'defaultScope' above as the scopes are used in the
    // cache keys - changing the order could invalidate the keys
    if (this.options.useRefreshTokens) {
      this.scope = getUniqueScopes(this.scope, 'offline_access');
    }
    // Don't use web workers unless using refresh tokens in memory and not IE11
    if (
      typeof window !== 'undefined' &&
      window.Worker &&
      this.options.useRefreshTokens &&
      this.cacheLocation === CACHE_LOCATION_MEMORY &&
      supportWebWorker()
    ) {
      this.worker = new WorkerFactory();
    }
    this.customOptions = getCustomInitialOptions(options);
  }
  Auth0Client.prototype._url = function (path) {
    var auth0Client = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || DEFAULT_AUTH0_CLIENT))
    );
    return '' + this.domainUrl + path + '&auth0Client=' + auth0Client;
  };
  Auth0Client.prototype._getParams = function (
    authorizeOptions,
    state,
    nonce,
    code_challenge,
    redirect_uri
  ) {
    var _a = this.options;
    _a.domain;
    _a.leeway;
    _a.useRefreshTokens;
    _a.useCookiesForTransactions;
    _a.useFormData;
    _a.auth0Client;
    _a.cacheLocation;
    _a.advancedOptions;
    var withoutClientOptions = __rest(_a, [
      'domain',
      'leeway',
      'useRefreshTokens',
      'useCookiesForTransactions',
      'useFormData',
      'auth0Client',
      'cacheLocation',
      'advancedOptions'
    ]);
    return __assign(
      __assign(__assign({}, withoutClientOptions), authorizeOptions),
      {
        scope: getUniqueScopes(
          this.defaultScope,
          this.scope,
          authorizeOptions.scope
        ),
        response_type: 'code',
        response_mode: 'query',
        state: state,
        nonce: nonce,
        redirect_uri: redirect_uri || this.options.redirect_uri,
        code_challenge: code_challenge,
        code_challenge_method: 'S256'
      }
    );
  };
  Auth0Client.prototype._authorizeUrl = function (authorizeOptions) {
    return this._url('/authorize?' + createQueryParams(authorizeOptions));
  };
  Auth0Client.prototype._verifyIdToken = function (
    id_token,
    nonce,
    organizationId
  ) {
    return verify({
      iss: this.tokenIssuer,
      aud: this.options.client_id,
      id_token: id_token,
      nonce: nonce,
      organizationId: organizationId,
      leeway: this.options.leeway,
      max_age: this._parseNumber(this.options.max_age)
    });
  };
  Auth0Client.prototype._parseNumber = function (value) {
    if (typeof value !== 'string') {
      return value;
    }
    return parseInt(value, 10) || undefined;
  };
  Auth0Client.prototype._processOrgIdHint = function (organizationId) {
    if (organizationId) {
      this.cookieStorage.save(this.orgHintCookieName, organizationId);
    } else {
      this.cookieStorage.remove(this.orgHintCookieName);
    }
  };
  /**
   * ```js
   * await auth0.buildAuthorizeUrl(options);
   * ```
   *
   * Builds an `/authorize` URL for loginWithRedirect using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated.
   *
   * @param options
   */
  Auth0Client.prototype.buildAuthorizeUrl = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var redirect_uri,
        appState,
        authorizeOptions,
        stateIn,
        nonceIn,
        code_verifier,
        code_challengeBuffer,
        code_challenge,
        fragment,
        params,
        url,
        organizationId;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            (redirect_uri = options.redirect_uri),
              (appState = options.appState),
              (authorizeOptions = __rest(options, [
                'redirect_uri',
                'appState'
              ]));
            stateIn = encode(createRandomString());
            nonceIn = options.nonce
              ? options.nonce
              : encode(createRandomString());
            code_verifier = createRandomString();
            return [4 /*yield*/, sha256(code_verifier)];
          case 1:
            code_challengeBuffer = _a.sent();
            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
            fragment = options.fragment ? '#' + options.fragment : '';
            params = this._getParams(
              authorizeOptions,
              stateIn,
              nonceIn,
              code_challenge,
              redirect_uri
            );
            url = this._authorizeUrl(params);
            organizationId = options.organization || this.options.organization;
            this.transactionManager.create(
              __assign(
                {
                  nonce: nonceIn,
                  code_verifier: code_verifier,
                  appState: appState,
                  scope: params.scope,
                  audience: params.audience || 'default',
                  redirect_uri: params.redirect_uri
                },
                organizationId && { organizationId: organizationId }
              )
            );
            return [2 /*return*/, url + fragment];
        }
      });
    });
  };
  /**
   * ```js
   * try {
   *  await auth0.loginWithPopup(options);
   * } catch(e) {
   *  if (e instanceof PopupCancelledError) {
   *    // Popup was closed before login completed
   *  }
   * }
   * ```
   *
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   *
   * IMPORTANT: This method has to be called from an event handler
   * that was started by the user like a button click, for example,
   * otherwise the popup will be blocked in most browsers.
   *
   * @param options
   * @param config
   */
  Auth0Client.prototype.loginWithPopup = function (options, config) {
    return __awaiter(this, void 0, void 0, function () {
      var authorizeOptions,
        stateIn,
        nonceIn,
        code_verifier,
        code_challengeBuffer,
        code_challenge,
        params,
        url,
        codeResult,
        authResult,
        organizationId,
        decodedToken,
        cacheEntry;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            options = options || {};
            config = config || {};
            if (!config.popup) {
              config.popup = openPopup('');
            }
            authorizeOptions = __rest(options, []);
            stateIn = encode(createRandomString());
            nonceIn = options.nonce
              ? options.nonce
              : encode(createRandomString());
            code_verifier = createRandomString();
            return [4 /*yield*/, sha256(code_verifier)];
          case 1:
            code_challengeBuffer = _a.sent();
            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
            params = this._getParams(
              authorizeOptions,
              stateIn,
              nonceIn,
              code_challenge,
              this.options.redirect_uri || window.location.origin
            );
            url = this._authorizeUrl(
              __assign(__assign({}, params), { response_mode: 'web_message' })
            );
            config.popup.location.href = url;
            return [
              4 /*yield*/,
              runPopup(
                __assign(__assign({}, config), {
                  timeoutInSeconds:
                    config.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds ||
                    DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
                })
              )
            ];
          case 2:
            codeResult = _a.sent();
            if (stateIn !== codeResult.state) {
              throw new Error('Invalid state');
            }
            return [
              4 /*yield*/,
              oauthToken(
                {
                  audience: params.audience,
                  scope: params.scope,
                  baseUrl: this.domainUrl,
                  client_id: this.options.client_id,
                  code_verifier: code_verifier,
                  code: codeResult.code,
                  grant_type: 'authorization_code',
                  redirect_uri: params.redirect_uri,
                  auth0Client: this.options.auth0Client,
                  useFormData: this.options.useFormData
                },
                this.worker
              )
            ];
          case 3:
            authResult = _a.sent();
            organizationId = options.organization || this.options.organization;
            decodedToken = this._verifyIdToken(
              authResult.id_token,
              nonceIn,
              organizationId
            );
            cacheEntry = __assign(__assign({}, authResult), {
              decodedToken: decodedToken,
              scope: params.scope,
              audience: params.audience || 'default',
              client_id: this.options.client_id
            });
            return [4 /*yield*/, this.cacheManager.set(cacheEntry)];
          case 4:
            _a.sent();
            this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
              daysUntilExpire: this.sessionCheckExpiryDays
            });
            this._processOrgIdHint(decodedToken.claims.org_id);
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * ```js
   * const user = await auth0.getUser();
   * ```
   *
   * Returns the user information if available (decoded
   * from the `id_token`).
   *
   * If you provide an audience or scope, they should match an existing Access Token
   * (the SDK stores a corresponding ID Token with every Access Token, and uses the
   * scope and audience to look up the ID Token)
   *
   * @typeparam TUser The type to return, has to extend {@link User}.
   * @param options
   */
  Auth0Client.prototype.getUser = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var audience, scope, cache;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            audience = options.audience || this.options.audience || 'default';
            scope = getUniqueScopes(
              this.defaultScope,
              this.scope,
              options.scope
            );
            return [
              4 /*yield*/,
              this.cacheManager.get(
                new CacheKey({
                  client_id: this.options.client_id,
                  audience: audience,
                  scope: scope
                })
              )
            ];
          case 1:
            cache = _a.sent();
            return [
              2 /*return*/,
              cache && cache.decodedToken && cache.decodedToken.user
            ];
        }
      });
    });
  };
  /**
   * ```js
   * const claims = await auth0.getIdTokenClaims();
   * ```
   *
   * Returns all claims from the id_token if available.
   *
   * If you provide an audience or scope, they should match an existing Access Token
   * (the SDK stores a corresponding ID Token with every Access Token, and uses the
   * scope and audience to look up the ID Token)
   *
   * @param options
   */
  Auth0Client.prototype.getIdTokenClaims = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var audience, scope, cache;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            audience = options.audience || this.options.audience || 'default';
            scope = getUniqueScopes(
              this.defaultScope,
              this.scope,
              options.scope
            );
            return [
              4 /*yield*/,
              this.cacheManager.get(
                new CacheKey({
                  client_id: this.options.client_id,
                  audience: audience,
                  scope: scope
                })
              )
            ];
          case 1:
            cache = _a.sent();
            return [
              2 /*return*/,
              cache && cache.decodedToken && cache.decodedToken.claims
            ];
        }
      });
    });
  };
  /**
   * ```js
   * await auth0.loginWithRedirect(options);
   * ```
   *
   * Performs a redirect to `/authorize` using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated.
   *
   * @param options
   */
  Auth0Client.prototype.loginWithRedirect = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var redirectMethod, urlOptions, url;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            (redirectMethod = options.redirectMethod),
              (urlOptions = __rest(options, ['redirectMethod']));
            return [4 /*yield*/, this.buildAuthorizeUrl(urlOptions)];
          case 1:
            url = _a.sent();
            window.location[redirectMethod || 'assign'](url);
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * After the browser redirects back to the callback page,
   * call `handleRedirectCallback` to handle success and error
   * responses from Auth0. If the response is successful, results
   * will be valid according to their expiration times.
   */
  Auth0Client.prototype.handleRedirectCallback = function (url) {
    if (url === void 0) {
      url = window.location.href;
    }
    return __awaiter(this, void 0, void 0, function () {
      var queryStringFragments,
        _a,
        state,
        code,
        error,
        error_description,
        transaction,
        tokenOptions,
        authResult,
        decodedToken,
        cacheEntry;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            queryStringFragments = url.split('?').slice(1);
            if (queryStringFragments.length === 0) {
              throw new Error(
                'There are no query params available for parsing.'
              );
            }
            (_a = parseQueryResult(queryStringFragments.join(''))),
              (state = _a.state),
              (code = _a.code),
              (error = _a.error),
              (error_description = _a.error_description);
            transaction = this.transactionManager.get();
            // Transaction should have a `code_verifier` to do PKCE for CSRF protection
            if (!transaction || !transaction.code_verifier) {
              throw new Error('Invalid state');
            }
            this.transactionManager.remove();
            if (error) {
              throw new AuthenticationError(
                error,
                error_description,
                state,
                transaction.appState
              );
            }
            tokenOptions = {
              audience: transaction.audience,
              scope: transaction.scope,
              baseUrl: this.domainUrl,
              client_id: this.options.client_id,
              code_verifier: transaction.code_verifier,
              grant_type: 'authorization_code',
              code: code,
              auth0Client: this.options.auth0Client,
              useFormData: this.options.useFormData
            };
            // some old versions of the SDK might not have added redirect_uri to the
            // transaction, we dont want the key to be set to undefined.
            if (undefined !== transaction.redirect_uri) {
              tokenOptions.redirect_uri = transaction.redirect_uri;
            }
            return [4 /*yield*/, oauthToken(tokenOptions, this.worker)];
          case 1:
            authResult = _b.sent();
            decodedToken = this._verifyIdToken(
              authResult.id_token,
              transaction.nonce,
              transaction.organizationId
            );
            cacheEntry = __assign(__assign({}, authResult), {
              decodedToken: decodedToken,
              audience: transaction.audience,
              scope: transaction.scope,
              client_id: this.options.client_id
            });
            return [4 /*yield*/, this.cacheManager.set(cacheEntry)];
          case 2:
            _b.sent();
            this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
              daysUntilExpire: this.sessionCheckExpiryDays
            });
            this._processOrgIdHint(decodedToken.claims.org_id);
            return [
              2 /*return*/,
              {
                appState: transaction.appState
              }
            ];
        }
      });
    });
  };
  /**
   * ```js
   * await auth0.checkSession();
   * ```
   *
   * Check if the user is logged in using `getTokenSilently`. The difference
   * with `getTokenSilently` is that this doesn't return a token, but it will
   * pre-fill the token cache.
   *
   * This method also heeds the `auth0.{clientId}.is.authenticated` cookie, as an optimization
   *  to prevent calling Auth0 unnecessarily. If the cookie is not present because
   * there was no previous login (or it has expired) then tokens will not be refreshed.
   *
   * It should be used for silently logging in the user when you instantiate the
   * `Auth0Client` constructor. You should not need this if you are using the
   * `createAuth0Client` factory.
   *
   * @param options
   */
  Auth0Client.prototype.checkSession = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
              if (!this.cookieStorage.get(OLD_IS_AUTHENTICATED_COOKIE_NAME)) {
                return [2 /*return*/];
              } else {
                // Migrate the existing cookie to the new name scoped by client ID
                this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                  daysUntilExpire: this.sessionCheckExpiryDays
                });
                this.cookieStorage.remove(OLD_IS_AUTHENTICATED_COOKIE_NAME);
              }
            }
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4 /*yield*/, this.getTokenSilently(options)];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            error_1 = _a.sent();
            if (!RECOVERABLE_ERRORS.includes(error_1.error)) {
              throw error_1;
            }
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * ```js
   * const token = await auth0.getTokenSilently(options);
   * ```
   *
   * If there's a valid token stored, return it. Otherwise, opens an
   * iframe with the `/authorize` URL using the parameters provided
   * as arguments. Random and secure `state` and `nonce` parameters
   * will be auto-generated. If the response is successful, results
   * will be valid according to their expiration times.
   *
   * If refresh tokens are used, the token endpoint is called directly with the
   * 'refresh_token' grant. If no refresh token is available to make this call,
   * the SDK falls back to using an iframe to the '/authorize' URL.
   *
   * This method may use a web worker to perform the token call if the in-memory
   * cache is used.
   *
   * If an `audience` value is given to this function, the SDK always falls
   * back to using an iframe to make the token exchange.
   *
   * Note that in all cases, falling back to an iframe requires access to
   * the `auth0` cookie.
   *
   * @param options
   */
  Auth0Client.prototype.getTokenSilently = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var _a, ignoreCache, getTokenOptions;
      var _this = this;
      return __generator(this, function (_b) {
        (_a = __assign(
          __assign(
            { audience: this.options.audience, ignoreCache: false },
            options
          ),
          {
            scope: getUniqueScopes(this.defaultScope, this.scope, options.scope)
          }
        )),
          (ignoreCache = _a.ignoreCache),
          (getTokenOptions = __rest(_a, ['ignoreCache']));
        return [
          2 /*return*/,
          singlePromise(function () {
            return _this._getTokenSilently(
              __assign({ ignoreCache: ignoreCache }, getTokenOptions)
            );
          }, this.options.client_id +
            '::' +
            getTokenOptions.audience +
            '::' +
            getTokenOptions.scope)
        ];
      });
    });
  };
  Auth0Client.prototype._getTokenSilently = function (options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var ignoreCache,
        getTokenOptions,
        getAccessTokenFromCache,
        accessToken,
        accessToken,
        authResult,
        _a;
      var _this = this;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (ignoreCache = options.ignoreCache),
              (getTokenOptions = __rest(options, ['ignoreCache']));
            getAccessTokenFromCache = function () {
              return __awaiter(_this, void 0, void 0, function () {
                var cache;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [
                        4 /*yield*/,
                        this.cacheManager.get(
                          new CacheKey({
                            scope: getTokenOptions.scope,
                            audience: getTokenOptions.audience || 'default',
                            client_id: this.options.client_id
                          }),
                          60 // get a new token if within 60 seconds of expiring
                        )
                      ];
                    case 1:
                      cache = _a.sent();
                      return [2 /*return*/, cache && cache.access_token];
                  }
                });
              });
            };
            if (!!ignoreCache) return [3 /*break*/, 2];
            return [4 /*yield*/, getAccessTokenFromCache()];
          case 1:
            accessToken = _b.sent();
            if (accessToken) {
              return [2 /*return*/, accessToken];
            }
            _b.label = 2;
          case 2:
            return [
              4 /*yield*/,
              retryPromise(function () {
                return lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5000);
              }, 10)
            ];
          case 3:
            if (!_b.sent()) return [3 /*break*/, 15];
            _b.label = 4;
          case 4:
            _b.trys.push([4, , 12, 14]);
            if (!!ignoreCache) return [3 /*break*/, 6];
            return [4 /*yield*/, getAccessTokenFromCache()];
          case 5:
            accessToken = _b.sent();
            if (accessToken) {
              return [2 /*return*/, accessToken];
            }
            _b.label = 6;
          case 6:
            if (!this.options.useRefreshTokens) return [3 /*break*/, 8];
            return [
              4 /*yield*/,
              this._getTokenUsingRefreshToken(getTokenOptions)
            ];
          case 7:
            _a = _b.sent();
            return [3 /*break*/, 10];
          case 8:
            return [4 /*yield*/, this._getTokenFromIFrame(getTokenOptions)];
          case 9:
            _a = _b.sent();
            _b.label = 10;
          case 10:
            authResult = _a;
            return [
              4 /*yield*/,
              this.cacheManager.set(
                __assign({ client_id: this.options.client_id }, authResult)
              )
            ];
          case 11:
            _b.sent();
            this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
              daysUntilExpire: this.sessionCheckExpiryDays
            });
            return [2 /*return*/, authResult.access_token];
          case 12:
            return [4 /*yield*/, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY)];
          case 13:
            _b.sent();
            return [7 /*endfinally*/];
          case 14:
            return [3 /*break*/, 16];
          case 15:
            throw new TimeoutError();
          case 16:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * ```js
   * const token = await auth0.getTokenWithPopup(options);
   * ```
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   *
   * @param options
   * @param config
   */
  Auth0Client.prototype.getTokenWithPopup = function (options, config) {
    if (options === void 0) {
      options = {};
    }
    if (config === void 0) {
      config = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var cache;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            options.audience = options.audience || this.options.audience;
            options.scope = getUniqueScopes(
              this.defaultScope,
              this.scope,
              options.scope
            );
            config = __assign(
              __assign({}, DEFAULT_POPUP_CONFIG_OPTIONS),
              config
            );
            return [4 /*yield*/, this.loginWithPopup(options, config)];
          case 1:
            _a.sent();
            return [
              4 /*yield*/,
              this.cacheManager.get(
                new CacheKey({
                  scope: options.scope,
                  audience: options.audience || 'default',
                  client_id: this.options.client_id
                })
              )
            ];
          case 2:
            cache = _a.sent();
            return [2 /*return*/, cache.access_token];
        }
      });
    });
  };
  /**
   * ```js
   * const isAuthenticated = await auth0.isAuthenticated();
   * ```
   *
   * Returns `true` if there's valid information stored,
   * otherwise returns `false`.
   *
   */
  Auth0Client.prototype.isAuthenticated = function () {
    return __awaiter(this, void 0, void 0, function () {
      var user;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.getUser()];
          case 1:
            user = _a.sent();
            return [2 /*return*/, !!user];
        }
      });
    });
  };
  /**
   * ```js
   * await auth0.buildLogoutUrl(options);
   * ```
   *
   * Builds a URL to the logout endpoint using the parameters provided as arguments.
   * @param options
   */
  Auth0Client.prototype.buildLogoutUrl = function (options) {
    if (options === void 0) {
      options = {};
    }
    if (options.client_id !== null) {
      options.client_id = options.client_id || this.options.client_id;
    } else {
      delete options.client_id;
    }
    var federated = options.federated,
      logoutOptions = __rest(options, ['federated']);
    var federatedQuery = federated ? '&federated' : '';
    var url = this._url('/v2/logout?' + createQueryParams(logoutOptions));
    return url + federatedQuery;
  };
  /**
   * ```js
   * auth0.logout();
   * ```
   *
   * Clears the application session and performs a redirect to `/v2/logout`, using
   * the parameters provided as arguments, to clear the Auth0 session.
   *
   * **Note:** If you are using a custom cache, and specifying `localOnly: true`, and you want to perform actions or read state from the SDK immediately after logout, you should `await` the result of calling `logout`.
   *
   * If the `federated` option is specified it also clears the Identity Provider session.
   * If the `localOnly` option is specified, it only clears the application session.
   * It is invalid to set both the `federated` and `localOnly` options to `true`,
   * and an error will be thrown if you do.
   * [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
   *
   * @param options
   */
  Auth0Client.prototype.logout = function (options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    var localOnly = options.localOnly,
      logoutOptions = __rest(options, ['localOnly']);
    if (localOnly && logoutOptions.federated) {
      throw new Error(
        'It is invalid to set both the `federated` and `localOnly` options to `true`'
      );
    }
    var postCacheClear = function () {
      _this.cookieStorage.remove(_this.orgHintCookieName);
      _this.cookieStorage.remove(_this.isAuthenticatedCookieName);
      if (localOnly) {
        return;
      }
      var url = _this.buildLogoutUrl(logoutOptions);
      window.location.assign(url);
    };
    if (this.options.cache) {
      return this.cacheManager.clear().then(function () {
        return postCacheClear();
      });
    } else {
      this.cacheManager.clearSync();
      postCacheClear();
    }
  };
  Auth0Client.prototype._getTokenFromIFrame = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      var stateIn,
        nonceIn,
        code_verifier,
        code_challengeBuffer,
        code_challenge,
        params,
        orgIdHint,
        url,
        timeout,
        codeResult,
        scope,
        audience,
        customOptions,
        tokenResult,
        decodedToken,
        e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            stateIn = encode(createRandomString());
            nonceIn = options.nonce
              ? options.nonce
              : encode(createRandomString());
            code_verifier = createRandomString();
            return [4 /*yield*/, sha256(code_verifier)];
          case 1:
            code_challengeBuffer = _a.sent();
            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
            params = this._getParams(
              options,
              stateIn,
              nonceIn,
              code_challenge,
              options.redirect_uri ||
                this.options.redirect_uri ||
                window.location.origin
            );
            orgIdHint = this.cookieStorage.get(this.orgHintCookieName);
            if (orgIdHint && !params.organization) {
              params.organization = orgIdHint;
            }
            url = this._authorizeUrl(
              __assign(__assign({}, params), {
                prompt: 'none',
                response_mode: 'web_message'
              })
            );
            timeout =
              options.timeoutInSeconds ||
              this.options.authorizeTimeoutInSeconds;
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5, , 6]);
            // When a browser is running in a Cross-Origin Isolated context, using iframes is not possible.
            // It doesn't throw an error but times out instead, so we should exit early and inform the user about the reason.
            // https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated
            if (window.crossOriginIsolated) {
              throw new GenericError(
                'login_required',
                'The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.'
              );
            }
            return [4 /*yield*/, runIframe(url, this.domainUrl, timeout)];
          case 3:
            codeResult = _a.sent();
            if (stateIn !== codeResult.state) {
              throw new Error('Invalid state');
            }
            (scope = options.scope),
              (audience = options.audience),
              (customOptions = __rest(options, [
                'scope',
                'audience',
                'redirect_uri',
                'ignoreCache',
                'timeoutInSeconds'
              ]));
            return [
              4 /*yield*/,
              oauthToken(
                __assign(
                  __assign(__assign({}, this.customOptions), customOptions),
                  {
                    scope: scope,
                    audience: audience,
                    baseUrl: this.domainUrl,
                    client_id: this.options.client_id,
                    code_verifier: code_verifier,
                    code: codeResult.code,
                    grant_type: 'authorization_code',
                    redirect_uri: params.redirect_uri,
                    auth0Client: this.options.auth0Client,
                    useFormData: this.options.useFormData
                  }
                ),
                this.worker
              )
            ];
          case 4:
            tokenResult = _a.sent();
            decodedToken = this._verifyIdToken(tokenResult.id_token, nonceIn);
            this._processOrgIdHint(decodedToken.claims.org_id);
            return [
              2 /*return*/,
              __assign(__assign({}, tokenResult), {
                decodedToken: decodedToken,
                scope: params.scope,
                audience: params.audience || 'default'
              })
            ];
          case 5:
            e_1 = _a.sent();
            if (e_1.error === 'login_required') {
              this.logout({
                localOnly: true
              });
            }
            throw e_1;
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  Auth0Client.prototype._getTokenUsingRefreshToken = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      var cache,
        redirect_uri,
        tokenResult,
        scope,
        audience,
        customOptions,
        timeout,
        e_2,
        decodedToken;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            options.scope = getUniqueScopes(
              this.defaultScope,
              this.options.scope,
              options.scope
            );
            return [
              4 /*yield*/,
              this.cacheManager.get(
                new CacheKey({
                  scope: options.scope,
                  audience: options.audience || 'default',
                  client_id: this.options.client_id
                })
              )
            ];
          case 1:
            cache = _a.sent();
            if (!((!cache || !cache.refresh_token) && !this.worker))
              return [3 /*break*/, 3];
            return [4 /*yield*/, this._getTokenFromIFrame(options)];
          case 2:
            return [2 /*return*/, _a.sent()];
          case 3:
            redirect_uri =
              options.redirect_uri ||
              this.options.redirect_uri ||
              window.location.origin;
            (scope = options.scope),
              (audience = options.audience),
              (customOptions = __rest(options, [
                'scope',
                'audience',
                'ignoreCache',
                'timeoutInSeconds'
              ]));
            timeout =
              typeof options.timeoutInSeconds === 'number'
                ? options.timeoutInSeconds * 1000
                : null;
            _a.label = 4;
          case 4:
            _a.trys.push([4, 6, , 9]);
            return [
              4 /*yield*/,
              oauthToken(
                __assign(
                  __assign(
                    __assign(
                      __assign(__assign({}, this.customOptions), customOptions),
                      {
                        audience: audience,
                        scope: scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        grant_type: 'refresh_token',
                        refresh_token: cache && cache.refresh_token,
                        redirect_uri: redirect_uri
                      }
                    ),
                    timeout && { timeout: timeout }
                  ),
                  {
                    auth0Client: this.options.auth0Client,
                    useFormData: this.options.useFormData
                  }
                ),
                this.worker
              )
            ];
          case 5:
            tokenResult = _a.sent();
            return [3 /*break*/, 9];
          case 6:
            e_2 = _a.sent();
            if (
              !(
                // The web worker didn't have a refresh token in memory so
                // fallback to an iframe.
                (
                  e_2.message === MISSING_REFRESH_TOKEN_ERROR_MESSAGE ||
                  // A refresh token was found, but is it no longer valid.
                  // Fallback to an iframe.
                  (e_2.message &&
                    e_2.message.indexOf(INVALID_REFRESH_TOKEN_ERROR_MESSAGE) >
                      -1)
                )
              )
            )
              // The web worker didn't have a refresh token in memory so
              // fallback to an iframe.
              return [3 /*break*/, 8];
            return [4 /*yield*/, this._getTokenFromIFrame(options)];
          case 7:
            return [2 /*return*/, _a.sent()];
          case 8:
            throw e_2;
          case 9:
            decodedToken = this._verifyIdToken(tokenResult.id_token);
            return [
              2 /*return*/,
              __assign(__assign({}, tokenResult), {
                decodedToken: decodedToken,
                scope: options.scope,
                audience: options.audience || 'default'
              })
            ];
        }
      });
    });
  };
  return Auth0Client;
})();

function createAuth0Client(options) {
  return __awaiter(this, void 0, void 0, function () {
    var auth0;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          auth0 = new Auth0Client(options);
          return [4 /*yield*/, auth0.checkSession()];
        case 1:
          _a.sent();
          return [2 /*return*/, auth0];
      }
    });
  });
}

/**
 * @ignore
 */
var wrapper = createAuth0Client;
wrapper.Auth0Client = Auth0Client;
wrapper.createAuth0Client = createAuth0Client;
wrapper.GenericError = GenericError;
wrapper.AuthenticationError = AuthenticationError;
wrapper.TimeoutError = TimeoutError;
wrapper.PopupTimeoutError = PopupTimeoutError;
wrapper.MfaRequiredError = MfaRequiredError;

module.exports = wrapper;
//# sourceMappingURL=auth0-spa-js.cjs.js.map
