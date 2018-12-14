;require('../runtime.js');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[2],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

;__webpack_require__(14)

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinajs_tina__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _tinajs_tina__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tinajs_tina__WEBPACK_IMPORTED_MODULE_0__);

_tinajs_tina__WEBPACK_IMPORTED_MODULE_0__["Page"].define({
  data: {
    count: wx.getStorageSync('count') || 0
  },
  onLoad: function onLoad() {},
  methods: {
    update: function update(count) {
      this.setData({
        count: count
      }, function () {
        return wx.setStorageSync('count', count);
      });
    },
    add: function add() {
      this.update(this.data.count + 1);
    },
    reset: function reset() {
      this.update(0);
    }
  }
});

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var toString = Object.prototype.toString;

var isPlainObj = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};

var justMapObject = map;

/*
  // returns a new object with the predicate applied to each value
  // like just-map-value, but (key, value) are passed to the predicate
  map({a: 3, b: 5, c: 9}, (key, value) => value + 1); // {a: 4, b: 6, c: 10}
  map({a: 3, b: 5, c: 9}, (key, value) => key); // {a: 'a', b: 'b', c: 'c'}
  map({a: 3, b: 5, c: 9}, (key, value) => key + value); // {a: 'a3', b: 'b5', c: 'c9'}
*/

function map(obj, predicate) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    result[key] = predicate(key, obj[key]);
  }
  return result;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

function pick(object) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var picked = {};
  keys.forEach(function (key) {
    if (key in object) {
      picked[key] = object[key];
    }
  });
  return picked;
}

function without(input) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return input.filter(function (x) {
    return exclude.indexOf(x) === -1;
  });
}

function values(object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
}

function fromPairs() {
  var pairs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var object = {};
  pairs.forEach(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return object[key] = value;
  });
  return object;
}

var globals = {
  App: App,
  Page: Page,
  Component: Component,
  wx: wx
};

var strategies = {
  merge: function merge(source, extra) {
    if (Array.isArray(source)) {
      return source.concat(extra);
    }
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
      return _extends({}, source, extra);
    }
    return extra;
  }
};

var Basic = function () {
  function Basic() {
    classCallCheck(this, Basic);
  }

  createClass(Basic, [{
    key: 'setData',
    value: function setData(newer) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var _adapters$data = this.adapters.data,
          isData = _adapters$data.isData,
          fromPlainObject = _adapters$data.fromPlainObject,
          merge = _adapters$data.merge,
          diff = _adapters$data.diff,
          toPlainObject = _adapters$data.toPlainObject;


      newer = isData(newer) ? newer : fromPlainObject(newer);

      var next = merge(this.data, newer);
      if (typeof this.compute === 'function') {
        var computed = this.compute(next);
        computed = isData(computed) ? computed : fromPlainObject(computed);
        next = merge(next, computed);
      }

      var patch = toPlainObject(diff(next, this.data));
      if (!isPlainObj(patch)) {
        console.warn('[Tina] - The data which is passed to MINA should be a plain object, please check your DataAdaptor-class.');
      }
      this.constructor.log('setData', patch);

      this.data = next;

      if (isEmpty(patch)) {
        return callback();
      }
      this.$source.setData(patch, callback);
    }
  }], [{
    key: 'mixin',
    value: function mixin(_mixin) {
      this._mixins.push(_mixin);
    }

    // utilty function for mixin

  }, {
    key: 'mix',
    value: function mix(options, mixins) {
      var _this = this;

      if (Array.isArray(mixins)) {
        return mixins.reduce(function (memory, mixin) {
          return _this.mix(memory, mixin);
        }, options);
      }
      if (typeof mixins === 'function') {
        return this.mix(options, mixins(options, this));
      }

      var mixin = mixins;
      return _extends({}, options, justMapObject(mixin, function (key, extra) {
        return strategies.merge(options[key], extra);
      }));
    }
  }, {
    key: 'log',
    value: function log(behavior, data) {
      if (this.debug) {
        console.log('[Tina.' + this.name + '] - ' + behavior + (data ? ': ' : ''), data);
      }
    }
  }]);
  return Basic;
}();

Basic.debug = false;
Basic._mixins = [];

var justFilterObject = filter;

/*
  var obj = {a: 3, b: 5, c: 9};
  filter(obj, function(key, value) {
    return value < 6;
  }); // {a: 3, b: 5}

  var obj = {a1: 3, b1: 5, a2: 9};
  filter(obj, function(key, value) {
    return key[0] == 'a';
  }); // {a1: 3, a2: 9}

  var obj = {a: 3, b: 5, c: null};
  filter(obj, function(key, value) {
    return value;
  }); // {a: 3, b: 5}
*/

function filter(obj, predicate) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    if (predicate(key, obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

function addHooks(context, handlers) {
  var isPrepend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var result = {};

  var _loop = function _loop(name) {
    result[name] = function handler() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (isPrepend) {
        handlers[name].apply(this, args);
      }
      if (typeof context[name] === 'function') {
        context[name].apply(this, args);
      }
      if (!isPrepend) {
        handlers[name].apply(this, args);
      }
    };
  };

  for (var name in handlers) {
    _loop(name);
  }
  return _extends({}, context, result);
}


var prependHooks = function prependHooks(context, handlers) {
  return addHooks(context, handlers, true);
};

function linkProperties(_ref) {
  var TargetClass = _ref.TargetClass,
      getSourceInstance = _ref.getSourceInstance,
      properties = _ref.properties;

  properties.forEach(function (name) {
    Object.defineProperty(TargetClass.prototype, name, {
      set: function set$$1(value) {
        var context = getSourceInstance(this);
        context[name] = value;
      },
      get: function get$$1() {
        var context = getSourceInstance(this);
        var member = context[name];
        if (typeof member === 'function') {
          return member.bind(context);
        }
        return member;
      }
    });
  });
  return TargetClass;
}

function initializeData(adapter, data, properties) {
  var isData = adapter.isData,
      fromPlainObject = adapter.fromPlainObject,
      merge = adapter.merge;

  data = isData(data) ? data : fromPlainObject(data);
  if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object') {
    var defaults$$1 = fromPlainObject(justMapObject(justFilterObject(properties, function (name, property) {
      return (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && typeof property.value !== 'undefined';
    }), function (name, property) {
      return property.value;
    }));
    data = merge(data, defaults$$1);
  }
  return data;
}

// builtin initial mixin for Tina-Page
function initial() {
  // init data (just for triggering ``compute`` in this moment)
  this.setData();
  this.$log('Initial Mixin', 'Ready');
}
var $initial = {
  attached: initial,
  onLoad: initial

  // builtin log mixin for Tina-Page
};function log() {
  this.$log = this.constructor.log.bind(this.constructor);
  this.$log('Log Mixin', 'Ready');
}
var $log = {
  created: log,
  beforeLoad: log
};

// generate methods for wx-Component
function methods(object) {
  return justMapObject(object || {}, function (name, method) {
    return function handler() {
      var context = this.__tina_instance__;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return context[name].apply(context, args);
    };
  });
}

// generate lifecycles for wx-Component
function lifecycles(hooks, getBeforeHookName) {
  return fromPairs(hooks.map(function (origin) {
    var before = getBeforeHookName(origin);
    return [origin, function handler() {
      var context = this.__tina_instance__;
      if (before && context[before]) {
        context[before].apply(context, arguments);
      }
      if (context[origin]) {
        return context[origin].apply(context, arguments);
      }
    }];
  }));
}

// generate properties for wx-Component
function properties(object) {
  function wrap(key, handler) {
    return function observer() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var newer = args[0];
      var context = this.__tina_instance__;
      var fromPlainObject = this.__tina_instance__.adapters.data.fromPlainObject;

      context.setData(fromPlainObject(defineProperty({}, key, newer)));
      if (typeof handler === 'string') {
        return context[handler].apply(context, args);
      }
      if (typeof handler === 'function') {
        return handler.apply(context, args);
      }
    };
  }

  return justMapObject(object || {}, function (key, rule) {
    if (typeof rule === 'function' || rule === null) {
      return {
        type: rule,
        observer: wrap(key)
      };
    }
    if ((typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object') {
      return _extends({}, rule, {
        observer: wrap(key, rule.observer)
      });
    }
  });
}

var sigmund_1 = sigmund;
function sigmund (subject, maxSessions) {
    maxSessions = maxSessions || 10;
    var notes = [];
    var analysis = '';
    var RE = RegExp;

    function psychoAnalyze (subject, session) {
        if (session > maxSessions) return;

        if (typeof subject === 'function' ||
            typeof subject === 'undefined') {
            return;
        }

        if (typeof subject !== 'object' || !subject ||
            (subject instanceof RE)) {
            analysis += subject;
            return;
        }

        if (notes.indexOf(subject) !== -1 || session === maxSessions) return;

        notes.push(subject);
        analysis += '{';
        Object.keys(subject).forEach(function (issue, _, __) {
            // pseudo-private values.  skip those.
            if (issue.charAt(0) === '_') return;
            var to = typeof subject[issue];
            if (to === 'function' || to === 'undefined') return;
            analysis += issue;
            psychoAnalyze(subject[issue], session + 1);
        });
    }
    psychoAnalyze(subject, 0);
    return analysis;
}

/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var forIn = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};

var hasOwn = Object.prototype.hasOwnProperty;

var forOwn = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};

function shouleBeOverrided(name, args, result) {
  throw new Error('[Tina] - The method "' + name + '" of DataAdaptor should be overrided by a function, which receives arguments <(' + args.join(', ') + ')> and return <' + result + '>.');
}

var BasicDataAdapter = function () {
  function BasicDataAdapter() {
    classCallCheck(this, BasicDataAdapter);
  }

  createClass(BasicDataAdapter, null, [{
    key: 'isData',
    value: function isData(data) {
      shouleBeOverrided('isData', ['data'], 'Boolean()');
    }
  }, {
    key: 'fromPlainObject',
    value: function fromPlainObject(plain) {
      shouleBeOverrided('fromPlainObject', ['plain'], 'data');
    }
  }, {
    key: 'merge',
    value: function merge(original, extra) {
      shouleBeOverrided('merge', ['original', 'extra'], 'data');
    }
  }, {
    key: 'diff',
    value: function diff(original, extra) {
      shouleBeOverrided('diff', ['original', 'extra'], 'data');
    }
  }, {
    key: 'toPlainObject',
    value: function toPlainObject(data) {
      shouleBeOverrided('diff', ['data'], 'plain');
    }
  }]);
  return BasicDataAdapter;
}();

var SigmundData = function () {
  function SigmundData(plain) {
    var _this = this;

    classCallCheck(this, SigmundData);

    forOwn(plain, function (value, key) {
      _this[key] = value;
    });

    Object.defineProperty(this, '__signatures', {
      enumerable: false,
      writable: true
    });

    this.sign();
  }

  createClass(SigmundData, [{
    key: 'sign',
    value: function sign() {
      this.__signatures = justMapObject(this, function (key, value) {
        return sigmund_1(value);
      });
    }
  }, {
    key: 'signature',
    value: function signature(key) {
      return this.__signatures[key];
    }
  }, {
    key: 'isDirty',
    value: function isDirty(key) {
      var _this2 = this;

      if (!key) {
        return Object.keys(this).some(function (key) {
          return _this2.isDirty(key);
        });
      }
      if (!this[key] && !this.__signatures[key]) {
        return false;
      }
      return this.__signatures[key] !== sigmund_1(this[key]);
    }
  }]);
  return SigmundData;
}();

var SigmundDataAdaptr = function (_BasicDataAdapter) {
  inherits(SigmundDataAdaptr, _BasicDataAdapter);

  function SigmundDataAdaptr() {
    classCallCheck(this, SigmundDataAdaptr);
    return possibleConstructorReturn(this, (SigmundDataAdaptr.__proto__ || Object.getPrototypeOf(SigmundDataAdaptr)).apply(this, arguments));
  }

  createClass(SigmundDataAdaptr, null, [{
    key: 'isData',
    value: function isData(data) {
      return data instanceof SigmundData;
    }
  }, {
    key: 'fromPlainObject',
    value: function fromPlainObject(plain) {
      return new SigmundData(plain);
    }
  }, {
    key: 'merge',
    value: function merge(original, extra) {
      // let extra = original.isData(extra) ? extra : new SigmundData(extra)
      // return new SigmundData({ ...original, ...extra })
      return new SigmundData(_extends({}, original, extra));
    }
  }, {
    key: 'diff',
    value: function diff(original, extra) {
      return new SigmundData(justFilterObject(original, function (key, value) {
        return value !== extra[key] || original.signature(key) !== extra.signature(key);
      }));
    }
  }, {
    key: 'toPlainObject',
    value: function toPlainObject(data) {
      return justMapObject(data, function (key, value) {
        return value;
      });
    }
  }]);
  return SigmundDataAdaptr;
}(BasicDataAdapter);

var MINA_PAGE_OPTIONS = ['data', 'onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];
var MINA_PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];
var MINA_PAGE_METHODS = ['setData'];
var MINA_PAGE_ATTRIBUTES = ['data', 'route'];

var ADDON_BEFORE_HOOKS = {
  'onLoad': 'beforeLoad'
};
var OVERWRITED_OPTIONS = ['data'].concat(MINA_PAGE_HOOKS);
var OVERWRITED_METHODS = ['setData'];
var OVERWRITED_ATTRIBUTES = ['data'];

var PAGE_HOOKS = [].concat(MINA_PAGE_HOOKS, toConsumableArray(values(ADDON_BEFORE_HOOKS)));

var PAGE_INITIAL_OPTIONS = _extends({
  mixins: [],
  data: {},
  compute: function compute() {}
}, fromPairs(PAGE_HOOKS.map(function (name) {
  return [name, []];
})), {
  methods: {},
  adapters: {
    data: SigmundDataAdaptr
  }
});

var BUILTIN_MIXINS = [$log, $initial];

var Page$1 = function (_Unit) {
  inherits(Page, _Unit);
  createClass(Page, null, [{
    key: 'define',
    value: function define() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // use mixins
      options = this.mix(PAGE_INITIAL_OPTIONS, [].concat(BUILTIN_MIXINS, toConsumableArray(this._mixins), toConsumableArray(options.mixins || []), [options]));

      // initilize data
      options.data = initializeData(options.adapters.data, options.data);

      // create wx-Page options
      var page = _extends({
        data: options.adapters.data.toPlainObject(options.data)
      }, methods(options.methods), lifecycles(MINA_PAGE_HOOKS.filter(function (name) {
        return options[name].length > 0;
      }), function (name) {
        return ADDON_BEFORE_HOOKS[name];
      }));

      // creating Tina-Page on **wx-Page** loaded.
      // !important: this hook is added to wx-Page directly, but not Tina-Page
      page = prependHooks(page, {
        onLoad: function onLoad() {
          var instance = new Page({ options: options, $source: this });
          // create bi-direction links
          this.__tina_instance__ = instance;
          instance.$source = this;
        }
      });

      // apply wx-Page options
      new globals.Page(_extends({}, pick(options, without(MINA_PAGE_OPTIONS, OVERWRITED_OPTIONS)), page));
    }
  }]);

  function Page(_ref) {
    var _ret;

    var _ref$options = _ref.options,
        options = _ref$options === undefined ? {} : _ref$options,
        $source = _ref.$source;
    classCallCheck(this, Page);

    // creating Tina-Page members
    var _this = possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    var members = _extends({
      data: options.data,
      compute: options.compute || function () {
        return {};
      }
    }, options.methods, justMapObject(pick(options, PAGE_HOOKS), function (name, handlers) {
      return function () {
        var _this2 = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return handlers.reduce(function (memory, handler) {
          return handler.apply(_this2, args.concat(memory));
        }, void 0);
      };
    }), {
      adapters: options.adapters
      // apply members into instance
    });for (var name in members) {
      _this[name] = members[name];
    }

    return _ret = _this, possibleConstructorReturn(_this, _ret);
  }

  return Page;
}(Basic);

// link the rest of wx-Component attributes and methods to Tina-Component


Page$1._mixins = [];
linkProperties({
  TargetClass: Page$1,
  getSourceInstance: function getSourceInstance(context) {
    return context.$source;
  },

  properties: [].concat(toConsumableArray(without(MINA_PAGE_ATTRIBUTES, OVERWRITED_ATTRIBUTES)), toConsumableArray(without(MINA_PAGE_METHODS, OVERWRITED_METHODS)))
});

var MINA_COMPONENT_OPTIONS = ['properties', 'data', 'methods', 'behaviors', 'created', 'attached', 'ready', 'moved', 'detached', 'relations', 'externalClasses', 'options'];
var MINA_COMPONENT_HOOKS = ['created', 'attached', 'ready', 'moved', 'detached'];
var MINA_COMPONENT_METHODS = ['setData', 'hasBehavior', 'triggerEvent', 'createSelectorQuery', 'selectComponent', 'selectAllComponents', 'getRelationNodes', 'createIntersectionObserver'];
var MINA_COMPONENT_ATTRIBUTES = ['is', 'id', 'dataset', 'data'];

var ADDON_BEFORE_HOOKS$1 = {};
var OVERWRITED_OPTIONS$1 = ['properties', 'data', 'methods'].concat(MINA_COMPONENT_HOOKS);
var OVERWRITED_METHODS$1 = ['setData'];
var OVERWRITED_ATTRIBUTES$1 = ['data'];

var COMPONENT_HOOKS = [].concat(MINA_COMPONENT_HOOKS, toConsumableArray(values(ADDON_BEFORE_HOOKS$1)));

var COMPONENT_INITIAL_OPTIONS = _extends({
  mixins: [],
  behaviors: [],
  properties: {},
  data: {},
  compute: function compute() {}
}, fromPairs(COMPONENT_HOOKS.map(function (name) {
  return [name, []];
})), {
  methods: {},
  relations: {},
  options: {},
  adapters: {
    data: SigmundDataAdaptr
  }
});

var BUILTIN_MIXINS$1 = [$log, $initial];

var Component$1 = function (_Unit) {
  inherits(Component, _Unit);
  createClass(Component, null, [{
    key: 'define',
    value: function define() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // use mixins
      options = this.mix(COMPONENT_INITIAL_OPTIONS, [].concat(BUILTIN_MIXINS$1, toConsumableArray(this._mixins), toConsumableArray(options.mixins || []), [options]));

      // initilize data
      options.data = initializeData(options.adapters.data, options.data, options.properties);

      // create wx-Component options
      var component = _extends({
        data: options.adapters.data.toPlainObject(options.data),
        properties: properties(options.properties),
        methods: methods(options.methods)
      }, lifecycles(MINA_COMPONENT_HOOKS.filter(function (name) {
        return options[name].length > 0;
      }), function (name) {
        return ADDON_BEFORE_HOOKS$1[name];
      }));

      // creating Tina-Component on **wx-Component** created.
      // !important: this hook is added to wx-Component directly, but not Tina-Component
      component = prependHooks(component, {
        created: function created() {
          var instance = new Component({ options: options, $source: this });
          // create bi-direction links
          this.__tina_instance__ = instance;
          instance.$source = this;
        }
      });

      // apply wx-Component options
      new globals.Component(_extends({}, pick(options, without(MINA_COMPONENT_OPTIONS, OVERWRITED_OPTIONS$1)), component));
    }
  }]);

  function Component(_ref) {
    var _ret;

    var _ref$options = _ref.options,
        options = _ref$options === undefined ? {} : _ref$options,
        $source = _ref.$source;
    classCallCheck(this, Component);

    // creating Tina-Component members
    var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

    var members = _extends({
      data: options.data,
      compute: options.compute || function () {
        return {};
      }
    }, options.methods, justMapObject(pick(options, COMPONENT_HOOKS), function (name, handlers) {
      return function () {
        var _this2 = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return handlers.reduce(function (memory, handler) {
          return handler.apply(_this2, args.concat(memory));
        }, void 0);
      };
    }), {
      adapters: options.adapters
      // apply members into instance
    });for (var name in members) {
      _this[name] = members[name];
    }

    return _ret = _this, possibleConstructorReturn(_this, _ret);
  }

  return Component;
}(Basic);

// link the rest of wx-Component attributes and methods to Tina-Component


Component$1._mixins = [];
linkProperties({
  TargetClass: Component$1,
  getSourceInstance: function getSourceInstance(context) {
    return context.$source;
  },

  properties: [].concat(toConsumableArray(without(MINA_COMPONENT_ATTRIBUTES, OVERWRITED_ATTRIBUTES$1)), toConsumableArray(without(MINA_COMPONENT_METHODS, OVERWRITED_METHODS$1)))
});

var PlainDataAdapter = function (_BasicDataAdapter) {
  inherits(PlainDataAdapter, _BasicDataAdapter);

  function PlainDataAdapter() {
    classCallCheck(this, PlainDataAdapter);
    return possibleConstructorReturn(this, (PlainDataAdapter.__proto__ || Object.getPrototypeOf(PlainDataAdapter)).apply(this, arguments));
  }

  createClass(PlainDataAdapter, null, [{
    key: 'isData',
    value: function isData(data) {
      return isPlainObj(data);
    }
  }, {
    key: 'fromPlainObject',
    value: function fromPlainObject(plain) {
      return plain;
    }
  }, {
    key: 'merge',
    value: function merge(original, extra) {
      return _extends({}, original, extra);
    }

    /**
     * shallow diff
     */

  }, {
    key: 'diff',
    value: function diff(original, extra) {
      return justFilterObject(original, function (key, value) {
        return value !== extra[key];
      });
    }
  }, {
    key: 'toPlainObject',
    value: function toPlainObject(data) {
      return data;
    }
  }]);
  return PlainDataAdapter;
}(BasicDataAdapter);

var Tina = function () {
  function Tina() {
    classCallCheck(this, Tina);
  }

  createClass(Tina, null, [{
    key: 'use',
    value: function use(plugin) {
      if (~this._plugins.indexOf(plugin)) {
        return this;
      }

      if (typeof plugin.install === 'function') {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        plugin.install.apply(plugin, [this].concat(args));
      }
      this._plugins.push(plugin);
      return this;
    }
  }]);
  return Tina;
}();

Tina.Unit = Basic;
Tina.Page = Page$1;
Tina.Component = Component$1;
Tina.BasicDataAdapter = BasicDataAdapter;
Tina.PlainDataAdapter = PlainDataAdapter;
Tina.SigmundDataAdapter = SigmundDataAdaptr;
Tina.globals = globals;
Tina._plugins = [];

return Tina;

})));


/***/ })

},[[13,0]]]);