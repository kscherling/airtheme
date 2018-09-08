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

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

var uuid = function uuid() {
  return '12345';
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

exports.uuid = uuid;
exports.castNumber = castNumber;
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
});

unwrapExports(dist);
var dist_1 = dist.uuid;
var dist_2 = dist.castNumber;
var dist_3 = dist._ROOT_ATTRIBUTE_;
var dist_4 = dist.COLOR;
var dist_5 = dist.FONT_SIZE;
var dist_6 = dist.FONT_WEIGHT;
var dist_7 = dist.LINE_HEIGHT;
var dist_8 = dist.FONT_FACE;
var dist_9 = dist.FONT_FAMILY;
var dist_10 = dist.SPACING;
var dist_11 = dist.SWATCH;
var dist_12 = dist.BASE_FONT_SIZE;
var dist_13 = dist.BASE_SPACING;
var dist_14 = dist.BASE_LINE_HEIGHT;
var dist_15 = dist.BASE_FONT_SIZE_KEY;
var dist_16 = dist.BASE_LINE_HEIGHT_KEY;
var dist_17 = dist.BASE_SPACING_KEY;
var dist_18 = dist.COLOR_KEY;
var dist_19 = dist.FONT_FACE_KEY;
var dist_20 = dist.FONT_FAMILY_KEY;
var dist_21 = dist.FONT_SIZE_KEY;
var dist_22 = dist.FONT_WEIGHT_KEY;
var dist_23 = dist.SETTING_KEY;
var dist_24 = dist.BASE_KEY;
var dist_25 = dist.SPACING_KEY;
var dist_26 = dist.SWATCH_KEY;
var dist_27 = dist.UTILITY_KEY;
var dist_28 = dist.ID_KEY;
var dist_29 = dist.NAME_KEY;
var dist_30 = dist.VERSION_KEY;
var dist_31 = dist.BASE_FONT_SIZE_PATH;
var dist_32 = dist.BASE_LINE_HEIGHT_PATH;
var dist_33 = dist.BASE_SPACING_PATH;
var dist_34 = dist.COLOR_PATH;
var dist_35 = dist.FONT_FAMILY_PATH;
var dist_36 = dist.FONT_SIZE_PATH;
var dist_37 = dist.FONT_WEIGHT_PATH;
var dist_38 = dist.SETTING_PATH;
var dist_39 = dist.SPACING_PATH;
var dist_40 = dist.SWATCH_PATH;
var dist_41 = dist.UTILITY_PATH;
var dist_42 = dist._ROOT_THEME_;
var dist_43 = dist.BASIC;
var dist_44 = dist._THEME_SETTING_;
var dist_45 = dist._THEME_BASE_;
var dist_46 = dist._ROOT_UNIT_;
var dist_47 = dist.STRING;
var dist_48 = dist.FACTOR;
var dist_49 = dist.HEX;
var dist_50 = dist.HEXA;
var dist_51 = dist.PX;
var dist_52 = dist.REFERENCE;
var dist_53 = dist.REM;
var dist_54 = dist.RGB;
var dist_55 = dist.RGBA;
var dist_56 = dist.VERSION;

var _require$1 = require('recompose'),
    compose$1 = _require$1.compose;
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
    castValueTo: dist_2
  });
});
var Input = mod.withBaseFontSizeContent(function (_ref2) {
  var _ref2$content = _ref2.content,
      content = _ref2$content === void 0 ? {} : _ref2$content,
      updateBaseFontSize = _ref2.updateBaseFontSize;
  return React__default.createElement(ui.InputUnit, {
    update: updateBaseFontSize,
    unit: content,
    castValueTo: dist_2
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
    castValueTo: dist_2
  });
});
var Input$1 = mod.withBaseLineHeightContent(function (_ref2) {
  var _ref2$content = _ref2.content,
      content = _ref2$content === void 0 ? {} : _ref2$content,
      updateBaseLineHeight = _ref2.updateBaseLineHeight;
  return React__default.createElement(ui.InputUnit, {
    update: updateBaseLineHeight,
    unit: content,
    castValueTo: dist_2
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

var _require$2 = require('recompose'),
    compose$2 = _require$2.compose;

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

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Chip$2 = styled__default.div(_templateObject$6());

var BaseFont = function BaseFont() {
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(Chip$2, null, React__default.createElement(Typeset, null)));
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
