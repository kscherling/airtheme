'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var make = require('@airtheme/make');
var reactRedux = require('react-redux');
var ui = require('@airtheme/ui');
var mod = require('@airtheme/mod');
var core = require('@airtheme/core');
var type = require('@airtheme/type');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
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
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: line-through;\n  color: #999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Strike = styled__default.span(_templateObject());

var printUnrenderable = function printUnrenderable(val) {
  if (val === null) {
    return React__default.createElement(Strike, null, "null");
  }

  if (typeof val === 'undefined') {
    return React__default.createElement(Strike, null, "undefined");
  }

  if (Array.isArray(val)) {
    return "[array/".concat(val.length, "]");
  }

  if (_typeof(val) === 'object') {
    return '{object}';
  }

  return val;
};

var Node = function Node(_ref) {
  var name = _ref.name,
      val = _ref.val;
  return React__default.createElement(React.Fragment, null, React__default.createElement("strong", null, name), React__default.createElement("span", null, printUnrenderable(val)));
};
var Unit = function Unit(_ref2) {
  var unit = _ref2.unit;
  return React__default.createElement(React.Fragment, null, React__default.createElement("span", null, printUnrenderable(unit.name)), React__default.createElement("span", null, printUnrenderable(unit.value)), React__default.createElement("span", null, printUnrenderable(unit.ordinal)), React__default.createElement("span", null, printUnrenderable(unit.object)));
};
var Attribute = function Attribute(_ref3) {
  var attribute = _ref3.attribute;
  return React__default.createElement(make.SimpleList.TwoColumns, null, Object.entries(attribute).map(function (_ref4, idx) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        val = _ref5[1];

    return React__default.createElement(Node, {
      key: idx,
      name: key,
      val: val
    });
  }));
};
var AttributeContent = function AttributeContent(_ref6) {
  var _ref6$content = _ref6.content,
      content = _ref6$content === void 0 ? [] : _ref6$content;
  return React__default.createElement(make.SimpleList.FourColumns, null, React__default.createElement(make.THead, {
    colNames: ['name', 'value', 'ordinal', 'unit']
  }), Array.isArray(content) ? content.length ? content.map(function (unit, idx) {
    return React__default.createElement(Unit, {
      key: idx,
      unit: unit
    });
  }) : React__default.createElement(Strike, null, "empty") : React__default.createElement(Unit, {
    unit: content
  }));
};

var Id = reactRedux.connect(make.mapId)(function (_ref) {
  var id = _ref.id;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "id",
    val: id
  }));
});
var Name = reactRedux.connect(make.mapName)(function (_ref2) {
  var name = _ref2.name;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "name",
    val: name
  }));
});
var Version = reactRedux.connect(make.mapVersion)(function (_ref3) {
  var version = _ref3.version;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "version",
    val: version
  }));
});

var Globals = function Globals() {
  return React__default.createElement(make.SimpleList, null, React__default.createElement(Id, null), React__default.createElement(Name, null), React__default.createElement(Version, null));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  grid-row-gap: 2rem;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var AttributeGroup = styled__default(make.SimpleList.OneColumn)(_templateObject$1());

var SwatchAttribute = reactRedux.connect(make.mapSwatch)(function (_ref) {
  var swatch = _ref.swatch;
  return React__default.createElement(Attribute, {
    attribute: swatch
  });
});
var SwatchContent = reactRedux.connect(make.mapSwatchContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var Swatch = function Swatch() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(SwatchAttribute, null), React__default.createElement(SwatchContent, null));
};

var FontFaceAttribute = reactRedux.connect(make.mapFontFace)(function (_ref) {
  var fontFace = _ref.fontFace;
  return React__default.createElement(Attribute, {
    attribute: fontFace
  });
});
var FontFaceContent = reactRedux.connect(make.mapFontFaceContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var FontFace = function FontFace() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(FontFaceAttribute, null), React__default.createElement(FontFaceContent, null));
};

var FontFamilyAttribute = reactRedux.connect(make.mapFontFamily)(function (_ref) {
  var fontFamily = _ref.fontFamily;
  return React__default.createElement(Attribute, {
    attribute: fontFamily
  });
});
var FontFamilyContent = reactRedux.connect(make.mapFontFamilyContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var FontFamily = function FontFamily() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(FontFamilyAttribute, null), React__default.createElement(FontFamilyContent, null));
};

var FontSizeAttribute = reactRedux.connect(make.mapFontSize)(function (_ref) {
  var fontSize = _ref.fontSize;
  return React__default.createElement(Attribute, {
    attribute: fontSize
  });
});
var FontSizeContent = reactRedux.connect(make.mapFontSizeContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var FontSize = function FontSize() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(FontSizeAttribute, null), React__default.createElement(FontSizeContent, null));
};

var FontWeightAttribute = reactRedux.connect(make.mapFontWeight)(function (_ref) {
  var fontWeight = _ref.fontWeight;
  return React__default.createElement(Attribute, {
    attribute: fontWeight
  });
});
var FontWeightContent = reactRedux.connect(make.mapFontWeightContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var FontWeight = function FontWeight() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(FontWeightAttribute, null), React__default.createElement(FontWeightContent, null));
};

var ColorAttribute = reactRedux.connect(make.mapColor)(function (_ref) {
  var color = _ref.color;
  return React__default.createElement(Attribute, {
    attribute: color
  });
});
var ColorContent = reactRedux.connect(make.mapColorContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var Color = function Color() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(ColorAttribute, null), React__default.createElement(ColorContent, null));
};

var SpacingAttribute = reactRedux.connect(make.mapSpacing)(function (_ref) {
  var spacing = _ref.spacing;
  return React__default.createElement(Attribute, {
    attribute: spacing
  });
});
var SpacingContent = reactRedux.connect(make.mapSpacingContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var Spacing = function Spacing() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(SpacingAttribute, null), React__default.createElement(SpacingContent, null));
};

var BaseFontSizeAttribute = reactRedux.connect(make.mapBaseFontSize)(function (_ref) {
  var baseFontSize = _ref.baseFontSize;
  return React__default.createElement(Attribute, {
    attribute: baseFontSize
  });
});
var BaseFontSizeContent = reactRedux.connect(make.mapBaseFontSizeContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var BaseFontSize = function BaseFontSize() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(BaseFontSizeAttribute, null), React__default.createElement(BaseFontSizeContent, null));
};

var BaseLineHeightAttribute = reactRedux.connect(make.mapBaseLineHeight)(function (_ref) {
  var baseLineHeight = _ref.baseLineHeight;
  return React__default.createElement(Attribute, {
    attribute: baseLineHeight
  });
});
var BaseLineHeightContent = reactRedux.connect(make.mapBaseLineHeightContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var BaseLineHeight = function BaseLineHeight() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(BaseLineHeightAttribute, null), React__default.createElement(BaseLineHeightContent, null));
};

var BaseSpacingAttribute = reactRedux.connect(make.mapBaseSpacing)(function (_ref) {
  var baseSpacing = _ref.baseSpacing;
  return React__default.createElement(Attribute, {
    attribute: baseSpacing
  });
});
var BaseSpacingContent = reactRedux.connect(make.mapBaseSpacingContent)(function (_ref2) {
  var content = _ref2.content;
  return React__default.createElement(AttributeContent, {
    content: content
  });
});

var BaseSpacing = function BaseSpacing() {
  return React__default.createElement(AttributeGroup, null, React__default.createElement(BaseSpacingAttribute, null), React__default.createElement(BaseSpacingContent, null));
};

var mapSwatch = function mapSwatch(_ref) {
  var swatch = _ref.swatch;
  return {
    swatch: swatch
  };
};
var mapBaseFontSize = function mapBaseFontSize(_ref2) {
  var baseFontSize = _ref2.baseFontSize;
  return {
    baseFontSize: baseFontSize
  };
};
var mapBaseLineHeight = function mapBaseLineHeight(_ref3) {
  var baseLineHeight = _ref3.baseLineHeight;
  return {
    baseLineHeight: baseLineHeight
  };
};

var _require = require('recompose'),
    compose = _require.compose;

var connectTheme = function connectTheme(mapThemeToProps) {
  return compose(styled.withTheme, function (Component) {
    return function (_ref) {
      var theme = _ref.theme,
          props = _objectWithoutProperties(_ref, ["theme"]);

      return React__default.createElement(Component, Object.assign({}, props, mapThemeToProps(theme)));
    };
  });
};

var AttributeEntries = function AttributeEntries(_ref) {
  var attribute = _ref.attribute,
      Component = _ref.component,
      _ref$renderLoading = _ref.renderLoading,
      renderLoading = _ref$renderLoading === void 0 ? function () {
    return 'Loading';
  } : _ref$renderLoading;
  return attribute ? Object.entries(attribute).map(function (_ref2, idx) {
    var _ref3 = _slicedToArray(_ref2, 2),
        k = _ref3[0],
        v = _ref3[1];

    return React__default.createElement(Component, {
      key: idx,
      name: k,
      value: v
    });
  }) : renderLoading();
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: #00000070;\n    border: 1px solid #00000015;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 5rem;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  color: #ffffff90;\n\n  ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Chip = ui.withShade(styled__default.div(_templateObject$2(), function (_ref) {
  var color = _ref.color;
  return color;
}, ui.isLight(styled.css(_templateObject2()))));

var Swatch$1 = function Swatch(_ref2) {
  var swatch = _ref2.swatch;
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(AttributeEntries, {
    attribute: swatch,
    component: function component(_ref3) {
      var name = _ref3.name,
          value = _ref3.value;
      return React__default.createElement(Chip, {
        color: value
      }, React__default.createElement("span", null, name), React__default.createElement("span", null, value));
    }
  }));
};

var Swatch$2 = connectTheme(mapSwatch)(Swatch$1);

var Increment = mod.withBaseFontSizeContent(function (_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? {} : _ref$content,
      updateBaseFontSize = _ref.updateBaseFontSize;
  return React__default.createElement(ui.IncrementUnit, {
    update: updateBaseFontSize,
    unit: content,
    options: {
      step: 1
    },
    castValueTo: core.castNumber
  });
});
var Input = mod.withBaseFontSizeContent(function (_ref2) {
  var _ref2$content = _ref2.content,
      content = _ref2$content === void 0 ? {} : _ref2$content,
      updateBaseFontSize = _ref2.updateBaseFontSize;
  return React__default.createElement(ui.InputUnit, {
    update: updateBaseFontSize,
    unit: content,
    castValueTo: core.castNumber
  });
});

var BaseFontSize$1 = function BaseFontSize() {
  return React__default.createElement(ui.EditBaseUnitGroup, null, React__default.createElement(Input, null), React__default.createElement(Increment, null));
};

var Increment$1 = mod.withBaseLineHeightContent(function (_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? {} : _ref$content,
      updateBaseLineHeight = _ref.updateBaseLineHeight;
  return React__default.createElement(ui.IncrementUnit, {
    update: updateBaseLineHeight,
    unit: content,
    options: {
      step: 0.05
    },
    castValueTo: core.castNumber
  });
});
var Input$1 = mod.withBaseLineHeightContent(function (_ref2) {
  var _ref2$content = _ref2.content,
      content = _ref2$content === void 0 ? {} : _ref2$content,
      updateBaseLineHeight = _ref2.updateBaseLineHeight;
  return React__default.createElement(ui.InputUnit, {
    update: updateBaseLineHeight,
    unit: content,
    castValueTo: core.castNumber
  });
});

var BaseLineHeight$1 = function BaseLineHeight() {
  return React__default.createElement(ui.EditBaseUnitGroup, null, React__default.createElement(Input$1, null), React__default.createElement(Increment$1, null));
};

// deserialize
// return
// attribute - { unit, object, content, view}
// deserialized - { baseLineHeight: 16px }


var isEmpty = function isEmpty(obj) {
  return Boolean(Object.keys(obj).length);
};

var BaseAttributeEntry = function BaseAttributeEntry(_ref) {
  var _ref$attribute = _ref.attribute,
      attribute = _ref$attribute === void 0 ? {} : _ref$attribute,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? function () {
    return null;
  } : _ref$render,
      _ref$renderLoading = _ref.renderLoading,
      renderLoading = _ref$renderLoading === void 0 ? function () {
    return null;
  } : _ref$renderLoading;
  var deserialized = type.deserializeAttribute(attribute, theme);
  return isEmpty(attribute) ? render(_objectSpread({}, attribute, {
    deserialized: deserialized
  })) : renderLoading();
}; // TODO: Hmmm, this may be perf issue...


var BaseAttributeEntry$1 = reactRedux.connect(make.mapTheme)(BaseAttributeEntry);

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  color: #000000;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var _require$1 = require('recompose'),
    compose$1 = _require$1.compose;

var Chip$1 = styled__default.div(_templateObject$3());

var BaseSpacing$1 = function BaseSpacing(_ref) {
  var baseSpacing = _ref.baseSpacing;
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(BaseAttributeEntry$1, {
    attribute: baseSpacing,
    render: function render() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$content = _ref2.content;

      _ref2$content = _ref2$content === void 0 ? {} : _ref2$content;
      var value = _ref2$content.value,
          _ref2$deserialized = _ref2.deserialized;
      _ref2$deserialized = _ref2$deserialized === void 0 ? {} : _ref2$deserialized;
      var baseSpacing = _ref2$deserialized.baseSpacing;
      return React__default.createElement(Chip$1, null, React__default.createElement("span", null, value));
    }
  }));
};

var BaseSpacing$2 = reactRedux.connect(make.mapBaseSpacing)(BaseSpacing$1);

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upCase = function upCase(string) {
  return string.toUpperCase();
};
var uppercase = alpha.map(upCase).join();
var allcase = alpha.reduce(function (acc, char) {
  return _toConsumableArray(acc).concat([upCase(char), char]);
}, []).join('');
var numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].join('');
var puncuation = ['.', ':', ',', ';', '()', '{}', '[]', '!', '@', '#', '$', '%', '^', '&', '*'].join('');
var typeset = allcase.concat(numerals, puncuation);

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  line-height: ", ";\n  font-size: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var baseTypography = function baseTypography(_ref) {
  var theme = _ref.theme;
  return styled.css(_templateObject$4(), theme.baseLineHeight, theme.baseFontSize);
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  transform: font-size 0.2s linear;\n  word-break: break-all;\n  ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Typeset = styled__default.div.attrs({
  children: typeset
})(_templateObject$5(), baseTypography);

function symbolObservablePonyfill(root) {
  var result;
  var _Symbol = root.Symbol;

  if (typeof _Symbol === 'function') {
    if (_Symbol.observable) {
      result = _Symbol.observable;
    } else {
      result = _Symbol('observable');
      _Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
};
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose$2() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 1rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 75%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 75%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  &:nth-child(even) {\n    font-weight: bold;\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 0.25rem;\n  color: #666666;\n  font-size: 75%;\n  width: fit-content;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var DetailGroup = styled__default.div(_templateObject$6());
var DetailItem = styled__default.div(_templateObject2$1());
var Detail = compose$2(connectTheme(mapBaseFontSize), connectTheme(mapBaseLineHeight))(function (_ref) {
  var baseFontSize = _ref.baseFontSize,
      baseLineHeight = _ref.baseLineHeight;
  return React__default.createElement(DetailGroup, null, React__default.createElement(DetailItem, null, "Font Size"), React__default.createElement(DetailItem, null, baseFontSize), React__default.createElement(DetailItem, null, "Line Height"), React__default.createElement(DetailItem, null, baseLineHeight));
});
var Group = styled__default.div(_templateObject3());
var Handle = styled__default.div(_templateObject4());
var HandleTitle = styled__default.div(_templateObject5());
var HandleControls = styled__default.div(_templateObject6());
var Visualizer = styled__default.div(_templateObject7());
var Meta = styled__default.div(_templateObject8());
var Pad = styled__default.div(_templateObject9());

var BaseFont = function BaseFont() {
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(Group, null, React__default.createElement(Handle, null, React__default.createElement(HandleTitle, null, "Base Font"), React__default.createElement(HandleControls, null, React__default.createElement(ui.Popover, {
    renderTrigger: function renderTrigger(_ref2) {
      var ref = _ref2.ref,
          show = _ref2.show,
          active = _ref2.active;
      return React__default.createElement(ui.UtilityButton, {
        innerRef: ref,
        active: active,
        onClick: show
      }, React__default.createElement(ui.IconAdjust, null));
    },
    renderContent: function renderContent() {
      return React__default.createElement(Pad, null, React__default.createElement(BaseFontSize$1, null), React__default.createElement(BaseLineHeight$1, null));
    }
  }))), React__default.createElement(Visualizer, null, React__default.createElement(Typeset, null)), React__default.createElement(Meta, null, React__default.createElement(Detail, null))));
};

exports.GlobalsInfo = Globals;
exports.SwatchInfo = Swatch;
exports.FontFaceInfo = FontFace;
exports.FontFamilyInfo = FontFamily;
exports.FontSizeInfo = FontSize;
exports.FontWeightInfo = FontWeight;
exports.ColorInfo = Color;
exports.SpacingInfo = Spacing;
exports.BaseFontSizeInfo = BaseFontSize;
exports.BaseLineHeightInfo = BaseLineHeight;
exports.BaseSpacingInfo = BaseSpacing;
exports.SwatchSheet = Swatch$2;
exports.BaseFontSizeSheet = BaseFontSize$1;
exports.BaseLineHeightSheet = BaseLineHeight$1;
exports.BaseSpacingSheet = BaseSpacing$2;
exports.BaseFont = BaseFont;
//# sourceMappingURL=index.js.map
