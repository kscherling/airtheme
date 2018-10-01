'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ui = require('@airtheme/ui');
var reactRedux = require('react-redux');
var make = require('@airtheme/make');
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
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
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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
  return React__default.createElement(ui.SimpleList.TwoColumns, null, Object.entries(attribute).map(function (_ref4, idx) {
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
  return React__default.createElement(ui.SimpleList.FourColumns, null, React__default.createElement(ui.THead, {
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
  return React__default.createElement(ui.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "id",
    val: id
  }));
});
var Name = reactRedux.connect(make.mapName)(function (_ref2) {
  var name = _ref2.name;
  return React__default.createElement(ui.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "name",
    val: name
  }));
});
var Version = reactRedux.connect(make.mapVersion)(function (_ref3) {
  var version = _ref3.version;
  return React__default.createElement(ui.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "version",
    val: version
  }));
});

var Globals = function Globals() {
  return React__default.createElement(ui.SimpleList, null, React__default.createElement(Id, null), React__default.createElement(Name, null), React__default.createElement(Version, null));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  grid-row-gap: 2rem;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var AttributeGroup = styled__default(ui.SimpleList.OneColumn)(_templateObject$1());

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  grid-area: actions;\n  display: grid;\n  grid-auto-flow: column;\n  grid-column-gap: 0.5rem;\n  align-items: flex-start;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  grid-area: meta;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  grid-area: specimen;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  padding: 1rem 0;\n  grid-gap: 1rem;\n  grid-template-areas:\n    \"meta specimen actions\";\n\n  > div {\n    display: flex;\n    align-items: flex-start;\n  }\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Unit$1 = styled__default.div(_templateObject$2());
var Specimen = styled__default.div(_templateObject2());
var Meta = styled__default.div(_templateObject3());
var Actions = styled__default.div(_templateObject4());
Unit$1.Specimen = Specimen;
Unit$1.Meta = Meta;
Unit$1.Actions = Actions;

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 70%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 1rem;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Spec = styled__default.div(_templateObject$3());
var Header = styled__default.div(_templateObject2$1());
var Content = styled__default.div(_templateObject3$1());
var Footer = styled__default.div(_templateObject4$1());
var HeaderTitle = styled__default.div(_templateObject5());
var HeaderActions = styled__default.div(_templateObject6());
Spec.Header = Header;
Spec.Header.Title = HeaderTitle;
Spec.Header.Actions = HeaderActions;
Spec.Content = Content;
Spec.Footer = Footer;
Spec.Unit = Unit$1;

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upCase = function upCase(string) {
  return string.toUpperCase();
};

var lowercase = alpha.join('');
var uppercase = alpha.map(upCase).join('');
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
var TypesetContainer = styled__default.div(_templateObject$5(), baseTypography);

var Specimen$1 = function Specimen() {
  return React__default.createElement(TypesetContainer, null, React__default.createElement("div", null, uppercase), React__default.createElement("div", null, lowercase), React__default.createElement("div", null, numerals), React__default.createElement("div", null, puncuation));
};

var AdjustButton = function AdjustButton(props) {
  return React__default.createElement(ui.UtilityButton, props, React__default.createElement(ui.IconAdjust, null));
};

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


function compose() {
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

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-items: flex-end;\n  padding: 1rem;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n\n  > div {\n    padding: 0.5rem;\n  }\n\n  & + & {\n    ", ";\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  padding: 1rem;\n\n  > strong {\n    font-size: 70%;\n  }\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr 1fr auto;\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid #eee;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #eee;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var dividerBottom = styled.css(_templateObject$6());
var dividerTop = styled.css(_templateObject2$2());

var incrementGroup = function incrementGroup(_ref) {
  var incrementGroup = _ref.incrementGroup;
  return incrementGroup && styled.css(_templateObject3$2());
};

var combinedGroup = function combinedGroup(_ref2) {
  var combinedGroup = _ref2.combinedGroup;
  return combinedGroup && styled.css(_templateObject4$2());
};

var EditForm = styled__default.div(_templateObject5$1());
var Header$1 = styled__default.div(_templateObject6$1());
var Name$1 = styled__default.div(_templateObject7(), dividerBottom);
var Units = styled__default.div(_templateObject8());
var Unit$2 = styled__default.div(_templateObject9(), incrementGroup, combinedGroup, dividerTop);
var Specimen$2 = styled__default.div(_templateObject10(), dividerBottom);
var Footer$1 = styled__default.div(_templateObject11());
EditForm.Header = Header$1;
EditForm.Name = Name$1;
EditForm.Units = Units;
EditForm.Units.Unit = Unit$2;
EditForm.Specimen = Specimen$2;
EditForm.Footer = Footer$1;

var Increment = function Increment(_ref) {
  var unit = _ref.unit,
      update = _ref.update;
  return React__default.createElement(ui.IncrementUnit, {
    update: update,
    unit: unit,
    options: {
      step: 0.05
    },
    castValueTo: core.castNumber
  });
};

var Input = function Input(_ref2) {
  var unit = _ref2.unit,
      update = _ref2.update;
  return React__default.createElement(ui.InputUnitValue, {
    update: update,
    unit: unit,
    castValueTo: core.castNumber
  });
};

var BaseLineHeight$1 = function BaseLineHeight(_ref3) {
  var _ref3$content = _ref3.content,
      content = _ref3$content === void 0 ? {} : _ref3$content,
      updateBaseLineHeight = _ref3.updateBaseLineHeight;
  return React__default.createElement(React.Fragment, null, React__default.createElement(Input, {
    update: updateBaseLineHeight,
    unit: content
  }), React__default.createElement(Increment, {
    update: updateBaseLineHeight,
    unit: content
  }));
};

var EditBaseLineHeight = make.withBaseLineHeightContent(BaseLineHeight$1);

var Increment$1 = function Increment(_ref) {
  var unit = _ref.unit,
      update = _ref.update;
  return React__default.createElement(ui.IncrementUnit, {
    update: update,
    unit: unit,
    options: {
      step: 1
    },
    castValueTo: core.castNumber
  });
};

var Input$1 = function Input(_ref2) {
  var unit = _ref2.unit,
      update = _ref2.update;
  return React__default.createElement(ui.InputUnitValue, {
    update: update,
    unit: unit,
    castValueTo: core.castNumber
  });
};

var BaseFontSize$1 = function BaseFontSize(_ref3) {
  var _ref3$content = _ref3.content,
      content = _ref3$content === void 0 ? {} : _ref3$content,
      updateBaseFontSize = _ref3.updateBaseFontSize;
  return React__default.createElement(React.Fragment, null, React__default.createElement(Input$1, {
    update: updateBaseFontSize,
    unit: content
  }), React__default.createElement(Increment$1, {
    update: updateBaseFontSize,
    unit: content
  }));
};

var EditBaseFontSize = make.withBaseFontSizeContent(BaseFontSize$1);

var BaseFontSizeInput = make.withBaseFontSizeContent(function (_ref) {
  var updateBaseFontSize = _ref.updateBaseFontSize,
      content = _ref.content;
  return React__default.createElement(ui.InputUnitName, {
    disabled: true,
    update: updateBaseFontSize,
    unit: content
  });
});
var BaseLineHeightInput = make.withBaseLineHeightContent(function (_ref2) {
  var updateBaseLineHeight = _ref2.updateBaseLineHeight,
      content = _ref2.content;
  return React__default.createElement(ui.InputUnitName, {
    disabled: true,
    update: updateBaseLineHeight,
    unit: content
  });
});

var Edit = function Edit() {
  return React__default.createElement(EditForm, null, React__default.createElement(EditForm.Header, null, React__default.createElement("strong", null, "Base Font")), React__default.createElement(EditForm.Units, null, React__default.createElement(EditForm.Units.Unit, {
    combinedGroup: true
  }, React__default.createElement(BaseFontSizeInput, null), React__default.createElement(EditBaseFontSize, null)), React__default.createElement(EditForm.Units.Unit, {
    combinedGroup: true
  }, React__default.createElement(BaseLineHeightInput, null), React__default.createElement(EditBaseLineHeight, null))));
};

var EditPopover = function EditPopover() {
  return React__default.createElement(ui.Popover, {
    renderTrigger: function renderTrigger(_ref) {
      var ref = _ref.ref,
          show = _ref.show,
          active = _ref.active;
      return React__default.createElement(AdjustButton, {
        innerRef: ref,
        active: active,
        onClick: show
      });
    },
    renderContent: function renderContent() {
      return React__default.createElement(Edit, null);
    }
  });
};

var _require = require('recompose'),
    compose$1 = _require.compose;

var connectTheme = function connectTheme(mapThemeToProps) {
  return compose$1(styled.withTheme, function (Component) {
    return function (_ref) {
      var theme = _ref.theme,
          props = _objectWithoutProperties(_ref, ["theme"]);

      return React__default.createElement(Component, Object.assign({}, props, mapThemeToProps(theme)));
    };
  });
};

// NOTE: This should likely be an aspect of core or make or type?
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
var mapFontWeight = function mapFontWeight(_ref4) {
  var fontWeight = _ref4.setting.fontWeight;
  return {
    fontWeight: fontWeight
  };
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  &:first-child {\n    color: #999;\n    font-weight: 300;\n    font-size: 1rem;\n  }\n\n  &:nth-child(even) {\n    color: #999;\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-auto-flow: row;\n  grid-gap: 0.5rem;\n  font-size: 70%;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var MetaGroup = styled__default.div(_templateObject$7());
var Item = styled__default.div(_templateObject2$3());
MetaGroup.Item = Item;

var Meta$1 = compose(connectTheme(mapBaseFontSize), connectTheme(mapBaseLineHeight))(function (_ref) {
  var baseFontSize = _ref.baseFontSize,
      baseLineHeight = _ref.baseLineHeight;
  return React__default.createElement(React.Fragment, null, React__default.createElement(MetaGroup, null, React__default.createElement(MetaGroup.Item, null, "baseFont"), React__default.createElement(MetaGroup.Item, null, baseFontSize, " / ", baseLineHeight)));
});

var Unit$3 = function Unit(_ref) {
  var unit = _ref.unit;
  return React__default.createElement(Spec.Unit, null, React__default.createElement(Spec.Unit.Specimen, null, React__default.createElement(Specimen$1, null)), React__default.createElement(Spec.Unit.Meta, null, React__default.createElement(Meta$1, null)), React__default.createElement(Spec.Unit.Actions, null, React__default.createElement(EditPopover, null)));
};

var Content$1 = function Content() {
  return React__default.createElement(Unit$3, null);
};

var BaseFont = function BaseFont() {
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(Spec, null, React__default.createElement(Spec.Header, null, React__default.createElement(Spec.Header.Title, null, "Base Font"), React__default.createElement(Spec.Header.Actions, null)), React__default.createElement(Spec.Content, null, React__default.createElement(Content$1, null)), React__default.createElement(Spec.Footer, null)));
};

var Deserialize = function Deserialize(_ref) {
  var attribute = _ref.attribute,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? {} : _ref$unit,
      render = _ref.render,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;
  return render({
    deserialized: Boolean(attribute) ? type.deserializeAttribute(_objectSpread({}, attribute, {
      content: [unit]
    }), theme) : {}
  });
};

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n      min-height: 72px;\n    "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n      min-height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 1rem;\n    "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.';
var MICRO_TEXT = 'Aa';
var Styles = styled__default.div(_templateObject$8(), function (_ref) {
  var fontWeight = _ref.fontWeight;
  return fontWeight;
}, function (_ref2) {
  var pad = _ref2.pad;
  return pad && styled.css(_templateObject2$4());
}, function (_ref3) {
  var micro = _ref3.micro;
  return micro && styled.css(_templateObject3$3());
});

var FontWeightSpecimen = function FontWeightSpecimen(_ref4) {
  var attribute = _ref4.attribute,
      unit = _ref4.unit,
      _ref4$micro = _ref4.micro,
      micro = _ref4$micro === void 0 ? false : _ref4$micro,
      _ref4$pad = _ref4.pad,
      pad = _ref4$pad === void 0 ? false : _ref4$pad;
  return React__default.createElement(Deserialize, {
    attribute: attribute,
    unit: unit,
    render: function render(_ref5) {
      var deserialized = _ref5.deserialized;
      return React__default.createElement(Styles, {
        fontWeight: Object.values(deserialized)[0],
        micro: micro,
        pad: pad
      }, micro ? MICRO_TEXT : DEFAULT_TEXT);
    }
  });
};

var Meta$2 = connectTheme(mapFontWeight)(function (_ref) {
  var fontWeight = _ref.fontWeight,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? {} : _ref$unit;
  return React__default.createElement(MetaGroup, null, React__default.createElement(MetaGroup.Item, null, unit.name), React__default.createElement(MetaGroup.Item, null, fontWeight[unit.name]));
});

var Edit$1 = function Edit(_ref) {
  var updateFontWeight = _ref.updateFontWeight,
      unit = _ref.unit,
      attribute = _ref.attribute;
  return React__default.createElement(EditForm, null, React__default.createElement(EditForm.Units, null, React__default.createElement(EditForm.Header, null, React__default.createElement("strong", null, "FontWeight")), React__default.createElement(EditForm.Specimen, null, React__default.createElement(FontWeightSpecimen, {
    pad: true,
    micro: true,
    unit: unit,
    attribute: attribute
  })), React__default.createElement(EditForm.Units.Unit, {
    combinedGroup: true
  }, React__default.createElement(ui.InputUnitName, {
    update: updateFontWeight,
    unit: unit
  }), React__default.createElement(ui.InputUnitValue, {
    update: updateFontWeight,
    unit: unit,
    castValueTo: core.castNumber
  }), React__default.createElement(ui.IncrementUnit, {
    update: updateFontWeight,
    unit: unit,
    options: {
      step: 100
    },
    castValueFrom: core.castNumber,
    castValueTo: core.castNumber
  }))));
};

var Edit$2 = make.withFontWeightContent(Edit$1);

var EditPopover$1 = function EditPopover(_ref) {
  var unit = _ref.unit,
      attribute = _ref.attribute;
  return React__default.createElement(ui.Popover, {
    renderTrigger: function renderTrigger(_ref2) {
      var ref = _ref2.ref,
          show = _ref2.show,
          active = _ref2.active;
      return React__default.createElement(AdjustButton, {
        innerRef: ref,
        active: active,
        onClick: show
      });
    },
    renderContent: function renderContent() {
      return React__default.createElement(Edit$2, {
        unit: unit,
        attribute: attribute
      });
    }
  });
};

var Delete = make.withFontWeightContent(function (_ref) {
  var removeFontWeight = _ref.removeFontWeight,
      unit = _ref.unit;
  return React__default.createElement(ui.UtilityButton, {
    onClick: function onClick() {
      return removeFontWeight(unit);
    }
  }, React__default.createElement(ui.IconTrash, null));
});

var Unit$4 = function Unit(_ref) {
  var unit = _ref.unit,
      attribute = _ref.attribute;
  return React__default.createElement(Spec.Unit, null, React__default.createElement(Spec.Unit.Specimen, null, React__default.createElement(FontWeightSpecimen, {
    unit: unit,
    attribute: attribute
  })), React__default.createElement(Spec.Unit.Meta, null, React__default.createElement(Meta$2, {
    unit: unit
  })), React__default.createElement(Spec.Unit.Actions, null, React__default.createElement(Delete, {
    unit: unit
  }), React__default.createElement(EditPopover$1, {
    unit: unit,
    attribute: attribute
  })));
};

var noop = function noop() {
  return null;
};

var isEmpty = function isEmpty(arr) {
  return !Boolean(arr.length);
};

var isArray = function isArray(arr) {
  return Array.isArray(arr);
};

var AttributeContent$1 = function AttributeContent(_ref) {
  var _ref$renderUnit = _ref.renderUnit,
      renderUnit = _ref$renderUnit === void 0 ? noop : _ref$renderUnit,
      _ref$renderEmpty = _ref.renderEmpty,
      renderEmpty = _ref$renderEmpty === void 0 ? noop : _ref$renderEmpty,
      content = _ref.content;

  // Handle most setting cases where content is array
  if (isArray(content)) {
    return isEmpty(content) ? renderEmpty() : content.map(function (unit, idx) {
      return renderUnit({
        unit: unit,
        idx: idx
      });
    });
  } // Handle base unit where content is object


  return renderUnit({
    unit: content
  });
};

var Content$2 = function Content(_ref) {
  var fontWeight = _ref.fontWeight;
  return React__default.createElement(AttributeContent$1, {
    content: fontWeight.content,
    renderUnit: function renderUnit(_ref2) {
      var unit = _ref2.unit,
          idx = _ref2.idx;
      return React__default.createElement(Unit$4, {
        attribute: fontWeight,
        unit: unit,
        key: idx
      });
    }
  });
};

var Content$3 = make.withFontWeightAttribute(Content$2);

var NewUnit =
/*#__PURE__*/
function (_Component) {
  _inherits(NewUnit, _Component);

  function NewUnit(props) {
    var _this;

    _classCallCheck(this, NewUnit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewUnit).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateName", function (name) {
      return _this.setState({
        name: name
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value) {
      return _this.setState({
        value: value
      });
    });

    _this.state = props.unit(props.unitDefaults);
    return _this;
  }

  _createClass(NewUnit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          render = _this$props.render,
          attribute = _this$props.attribute;
      var unit = this.state,
          updateName = this.updateName,
          updateValue = this.updateValue;
      return render({
        attribute: attribute({
          content: [unit]
        }),
        unit: unit,
        updateName: updateName,
        updateValue: updateValue
      });
    }
  }]);

  return NewUnit;
}(React.Component);

_defineProperty(NewUnit, "defaultProps", {
  unit: core.noop,
  attribute: core.noop,
  unitDefaults: {},
  nextOrdinal: null,
  render: core.noop
});

var ESC = 27;
var ENTER = 13;

var KeyboardEvents =
/*#__PURE__*/
function (_Component) {
  _inherits(KeyboardEvents, _Component);

  function KeyboardEvents() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, KeyboardEvents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KeyboardEvents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeydown", function (e) {
      var eventHandler = _this.props.eventMap[e.keyCode];
      eventHandler && eventHandler(e);
    });

    return _this;
  }

  _createClass(KeyboardEvents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Boolean(children) ? children : null;
    }
  }]);

  return KeyboardEvents;
}(React.Component);

_defineProperty(KeyboardEvents, "defaultProps", {
  eventMap: {}
});

var Add = make.withFontWeightContent(function (_ref) {
  var addFontWeight = _ref.addFontWeight,
      content = _ref.content,
      hide = _ref.hide;
  return React__default.createElement(NewUnit, {
    unitDefaults: {
      value: 100
    },
    unit: type.unit.string,
    attribute: type.attribute.fontWeight,
    nextOrdinal: content.length + 1,
    render: function render(_ref2) {
      var _ref3;

      var attribute = _ref2.attribute,
          unit = _ref2.unit,
          updateName = _ref2.updateName,
          updateValue = _ref2.updateValue;
      return React__default.createElement(React.Fragment, null, React__default.createElement(KeyboardEvents, {
        eventMap: (_ref3 = {}, _defineProperty(_ref3, ESC, hide), _defineProperty(_ref3, ENTER, function () {
          addFontWeight(unit.value, unit.name, unit.ordinal);
          hide();
        }), _ref3)
      }), React__default.createElement(EditForm, null, React__default.createElement(EditForm.Header, null, React__default.createElement("strong", null, "Add Font Weight"), React__default.createElement(ui.QuickKey, null, React__default.createElement("em", null, "esc"), " cancel")), React__default.createElement(EditForm.Specimen, null, React__default.createElement(FontWeightSpecimen, {
        pad: true,
        unit: unit,
        attribute: attribute
      })), React__default.createElement(EditForm.Units, null, React__default.createElement(EditForm.Units.Unit, {
        combinedGroup: true
      }, React__default.createElement(ui.InvisibleInput, {
        placeholder: "Theme key",
        onChange: function onChange(e) {
          return updateName(e.target.value);
        },
        value: unit.name
      }), React__default.createElement(ui.InvisibleInput, {
        placeholder: "Value",
        onChange: function onChange(e) {
          return updateValue(core.castNumber(e.target.value));
        },
        value: unit.value
      }), React__default.createElement(ui.IncrementUnit, {
        update: function update(_, _ref4) {
          var value = _ref4.value;
          return updateValue(value);
        },
        unit: unit,
        options: {
          step: 100
        },
        castValueFrom: core.castNumber,
        castValueTo: core.castNumber
      }))), React__default.createElement(EditForm.Footer, null, React__default.createElement(ui.QuickKey, null, React__default.createElement("em", null, "enter"), " submit"))));
    }
  });
});

var AddModal = function AddModal() {
  return React__default.createElement(ui.Modal, {
    renderTrigger: function renderTrigger(_ref) {
      var show = _ref.show,
          active = _ref.active;
      return React__default.createElement(ui.UtilityButton, {
        onClick: show,
        active: active
      }, React__default.createElement(ui.IconPlus, null));
    },
    renderContent: function renderContent(_ref2) {
      var hide = _ref2.hide;
      return React__default.createElement(Add, {
        hide: hide
      });
    }
  });
};

var FontWeight$1 = function FontWeight() {
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(Spec, null, React__default.createElement(Spec.Header, null, React__default.createElement(Spec.Header.Title, null, "Font Weight"), React__default.createElement(Spec.Header.Actions, null, React__default.createElement(AddModal, null))), React__default.createElement(Spec.Content, null, React__default.createElement(Content$3, null)), React__default.createElement(Spec.Footer, null)));
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  transform: font-size 0.2s linear;\n  word-break: break-all;\n  ", ";\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var TypesetContainer$1 = styled__default.div(_templateObject$9(), baseTypography);

var BaseFontSpecimen = function BaseFontSpecimen() {
  return React__default.createElement(TypesetContainer$1, null, React__default.createElement("div", null, uppercase), React__default.createElement("div", null, lowercase), React__default.createElement("div", null, numerals), React__default.createElement("div", null, puncuation));
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
exports.BaseFontSheet = BaseFont;
exports.FontWeightSheet = FontWeight$1;
exports.SpecimenBaseFont = BaseFontSpecimen;
exports.SpecimenFontWeight = FontWeightSpecimen;
//# sourceMappingURL=index.js.map
