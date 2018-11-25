'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _ROOT_ATTRIBUTE_ = 'attribute';
var COLOR = 'color';
var FONT_SIZE = 'fontSize';
var FONT_WEIGHT = 'fontWeight';
var LINE_HEIGHT = 'lineHeight';
var FONT_FACE = 'fontFace';
var FONT_FAMILY = 'fontFamily';
var SPACING = 'spacing';
var SWATCH = 'swatch';
var BASE_FONT_SIZE = 'baseFontSize';
var BASE_SPACING = 'baseSpacing';
var BASE_LINE_HEIGHT = 'baseLineHeight';

var BASE_FONT_SIZE_KEY = 'baseFontSize';
var BASE_LINE_HEIGHT_KEY = 'baseLineHeight';
var BASE_SPACING_KEY = 'baseSpacing';
var COLOR_KEY = 'color';
var FONT_FACE_KEY = 'fontFace';
var FONT_FAMILY_KEY = 'fontFamily';
var FONT_SIZE_KEY = 'fontSize';
var FONT_WEIGHT_KEY = 'fontWeight';
var SETTING_KEY = 'setting';
var BASE_KEY = 'base';
var SPACING_KEY = 'spacing';
var SWATCH_KEY = 'swatch';
var UTILITY_KEY = 'utility';
var ID_KEY = 'id';
var NAME_KEY = 'name';
var VERSION_KEY = 'version';

var BASE_FONT_SIZE_PATH = "".concat(BASE_KEY, ".").concat(BASE_FONT_SIZE_KEY);
var BASE_LINE_HEIGHT_PATH = "".concat(BASE_KEY, ".").concat(BASE_LINE_HEIGHT_KEY);
var BASE_SPACING_PATH = "".concat(BASE_KEY, ".").concat(BASE_SPACING_KEY);
var COLOR_PATH = "".concat(SETTING_KEY, ".").concat(COLOR_KEY);
var FONT_FAMILY_PATH = "".concat(SETTING_KEY, ".").concat(FONT_FAMILY_KEY);
var FONT_SIZE_PATH = "".concat(SETTING_KEY, ".").concat(FONT_SIZE_KEY);
var FONT_WEIGHT_PATH = "".concat(SETTING_KEY, ".").concat(FONT_WEIGHT_KEY);
var SETTING_PATH = SETTING_KEY;
var SPACING_PATH = "".concat(SETTING_KEY, ".").concat(SPACING_KEY);
var SWATCH_PATH = SWATCH_KEY;
var UTILITY_PATH = UTILITY_KEY;

var _ROOT_THEME_ = 'theme';
var BASIC = 'airthemeBasic';

var _THEME_SETTING_ = 'setting';

var _THEME_BASE_ = 'base';

var _ROOT_UNIT_ = 'unit';
var STRING = 'string';
var FACTOR = 'factor';
var HEX = 'hex';
var HEXA = 'hexa';
var PX = 'px';
var REFERENCE = 'reference';
var REM = 'rem';
var RGB = 'rgb';
var RGBA = 'rgba';

var VERSION = '0.1.0';

var ESC = 27;
var ENTER = 13;

var uuid = function uuid() {
  return '12345';
};

var noop = function noop() {
  return null;
};

// prettier-ignore
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var curry = function curry(fn) {
  var curried = function curried() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= fn.length) {
      return fn.apply(void 0, args);
    }

    return function () {
      for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args2[_key2] = arguments[_key2];
      }

      return curried.apply(void 0, _toConsumableArray(args.concat(args2)));
    };
  };

  return curried;
};

var isFloat = function isFloat(n) {
  return n % 1 !== 0;
};

var castFloat = function castFloat(number) {
  return parseFloat(number.toFixed(2));
};

var castNumber = function castNumber(string) {
  var n = Number(string);
  return isFloat(n) ? castFloat(n) : n;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var titlize = function titlize(str) {
  return str.split(' ').reduce(function (acc, word) {
    return _toConsumableArray(acc).concat([word.replace(word[0], word[0].toUpperCase())]);
  }, []).join(' ');
};

var castWords = function castWords(camelizedKey) {
  return humps.decamelize(camelizedKey, {
    separator: ' '
  });
};
var castTitle = compose(titlize, castWords);

exports._ROOT_ATTRIBUTE_ = _ROOT_ATTRIBUTE_;
exports.COLOR = COLOR;
exports.FONT_SIZE = FONT_SIZE;
exports.FONT_WEIGHT = FONT_WEIGHT;
exports.LINE_HEIGHT = LINE_HEIGHT;
exports.FONT_FACE = FONT_FACE;
exports.FONT_FAMILY = FONT_FAMILY;
exports.SPACING = SPACING;
exports.SWATCH = SWATCH;
exports.BASE_FONT_SIZE = BASE_FONT_SIZE;
exports.BASE_SPACING = BASE_SPACING;
exports.BASE_LINE_HEIGHT = BASE_LINE_HEIGHT;
exports.BASE_FONT_SIZE_KEY = BASE_FONT_SIZE_KEY;
exports.BASE_LINE_HEIGHT_KEY = BASE_LINE_HEIGHT_KEY;
exports.BASE_SPACING_KEY = BASE_SPACING_KEY;
exports.COLOR_KEY = COLOR_KEY;
exports.FONT_FACE_KEY = FONT_FACE_KEY;
exports.FONT_FAMILY_KEY = FONT_FAMILY_KEY;
exports.FONT_SIZE_KEY = FONT_SIZE_KEY;
exports.FONT_WEIGHT_KEY = FONT_WEIGHT_KEY;
exports.SETTING_KEY = SETTING_KEY;
exports.BASE_KEY = BASE_KEY;
exports.SPACING_KEY = SPACING_KEY;
exports.SWATCH_KEY = SWATCH_KEY;
exports.UTILITY_KEY = UTILITY_KEY;
exports.ID_KEY = ID_KEY;
exports.NAME_KEY = NAME_KEY;
exports.VERSION_KEY = VERSION_KEY;
exports.BASE_FONT_SIZE_PATH = BASE_FONT_SIZE_PATH;
exports.BASE_LINE_HEIGHT_PATH = BASE_LINE_HEIGHT_PATH;
exports.BASE_SPACING_PATH = BASE_SPACING_PATH;
exports.COLOR_PATH = COLOR_PATH;
exports.FONT_FAMILY_PATH = FONT_FAMILY_PATH;
exports.FONT_SIZE_PATH = FONT_SIZE_PATH;
exports.FONT_WEIGHT_PATH = FONT_WEIGHT_PATH;
exports.SETTING_PATH = SETTING_PATH;
exports.SPACING_PATH = SPACING_PATH;
exports.SWATCH_PATH = SWATCH_PATH;
exports.UTILITY_PATH = UTILITY_PATH;
exports._ROOT_THEME_ = _ROOT_THEME_;
exports.BASIC = BASIC;
exports._THEME_SETTING_ = _THEME_SETTING_;
exports._THEME_BASE_ = _THEME_BASE_;
exports._ROOT_UNIT_ = _ROOT_UNIT_;
exports.STRING = STRING;
exports.FACTOR = FACTOR;
exports.HEX = HEX;
exports.HEXA = HEXA;
exports.PX = PX;
exports.REFERENCE = REFERENCE;
exports.REM = REM;
exports.RGB = RGB;
exports.RGBA = RGBA;
exports.VERSION = VERSION;
exports.ESC = ESC;
exports.ENTER = ENTER;
exports.uuid = uuid;
exports.noop = noop;
exports.compose = compose;
exports.curry = curry;
exports.castNumber = castNumber;
exports.castWords = castWords;
exports.castTitle = castTitle;
//# sourceMappingURL=index.js.map
