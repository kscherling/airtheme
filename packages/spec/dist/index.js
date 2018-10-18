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

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  line-height: ", ";\n  font-size: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var baseTypography = function baseTypography(_ref) {
  var theme = _ref.theme;
  return styled.css(_templateObject$2(), theme.baseLineHeight, theme.baseFontSize);
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  transform: font-size 0.2s linear;\n  word-break: break-all;\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var TypesetContainer = styled__default.div(_templateObject$3(), baseTypography);

var BaseFontSpecimen = function BaseFontSpecimen() {
  return React__default.createElement(TypesetContainer, null, React__default.createElement("div", null, uppercase), React__default.createElement("div", null, lowercase), React__default.createElement("div", null, numerals), React__default.createElement("div", null, puncuation));
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

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  padding: 1rem 0;\n  grid-gap: 1rem;\n  grid-template-areas:\n    \"meta specimen actions\";\n\n  > div {\n    display: flex;\n    align-items: flex-start;\n  }\n}\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Unit$1 = styled__default.div(_templateObject$4());
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

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 1rem;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Spec = styled__default.div(_templateObject$5());
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

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n      min-height: 72px;\n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n      min-height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 1rem;\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.';
var MICRO_TEXT = 'Aa';
var Styles = styled__default.div(_templateObject$6(), function (_ref) {
  var fontWeight = _ref.fontWeight;
  return fontWeight;
}, function (_ref2) {
  var pad = _ref2.pad;
  return pad && styled.css(_templateObject2$2());
}, function (_ref3) {
  var micro = _ref3.micro;
  return micro && styled.css(_templateObject3$2());
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */


var NODE_ENV = process.env.NODE_ENV;
var BACKGROUND_COLOR = 'background-color';
var BACKGROUND = 'background';
var BORDER_BOTTOM_COLOR = 'border-bottom-color';
var BORDER_BOTTOM_LEFT_RADIUS = 'border-bottom-left-radius';
var BORDER_BOTTOM_RIGHT_RADIUS = 'border-bottom-right-radius';
var BORDER_COLOR = 'border-color';
var BORDER_LEFT_COLOR = 'border-left-color';
var BORDER_RADIUS = 'border-radius';
var BORDER_RIGHT_COLOR = 'border-right-color';
var BORDER_TOP_COLOR = 'border-top-color';
var BORDER_TOP_LEFT_RADIUS = 'border-top-left-radius';
var BORDER_TOP_RIGHT_RADIUS = 'border-top-right-radius';
var BOTTOM = 'bottom';
var BOX_SHADOW = 'box-shadow';
var CARET_COLOR = 'caret-color';
var COLOR = 'color';
var FONT_FAMILY = 'font-family';
var FONT_SIZE = 'font-size';
var FONT_WEIGHT = 'font-weight';
var GRID_GAP = 'grid-gap';
var GRID_COLUMN_GAP = 'grid-column-gap';
var GRID_ROW_GAP = 'grid-row-gap';
var HEIGHT = 'height';
var LEFT = 'left';
var LINE_HEIGHT = 'line-height';
var MARGIN_BOTTOM = 'margin-bottom';
var MARGIN_LEFT = 'margin-left';
var MARGIN_RIGHT = 'margin-right';
var MARGIN_TOP = 'margin-top';
var MARGIN = 'margin';
var MAX_HEIGHT = 'max-height';
var MAX_WIDTH = 'max-width';
var MIN_HEIGHT = 'min-height';
var MIN_WIDTH = 'min-width';
var OPACITY = 'opacity';
var OUTLINE_COLOR = 'outline-color';
var PADDING_BOTTOM = 'padding-bottom';
var PADDING_LEFT = 'padding-left';
var PADDING_RIGHT = 'padding-right';
var PADDING_TOP = 'padding-top';
var PADDING = 'padding';
var RIGHT = 'right';
var TOP = 'top';
var WIDTH = 'width';
var ZINDEX = 'z-index';
/**
 * @param {props}
 * @returns {unitContext}
 */

var mapBaseFontSize = function mapBaseFontSize(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;
  return theme;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapBaseLineHeight = function mapBaseLineHeight(_ref2) {
  var _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? {} : _ref2$theme;
  return theme;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapBaseSpacing = function mapBaseSpacing(_ref3) {
  var _ref3$theme = _ref3.theme,
      theme = _ref3$theme === void 0 ? {} : _ref3$theme;
  return theme;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapColor = function mapColor(_ref4) {
  var _ref4$theme$setting$c = _ref4.theme.setting.color,
      color = _ref4$theme$setting$c === void 0 ? {} : _ref4$theme$setting$c;
  return color;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapFontFace = function mapFontFace(_ref5) {
  var _ref5$theme$fontFace = _ref5.theme.fontFace,
      fontFace = _ref5$theme$fontFace === void 0 ? {} : _ref5$theme$fontFace;
  return fontFace;
};
/**
 * @param {props}
 * @returns {unitContext}
 */


var mapFontFamily = function mapFontFamily(_ref6) {
  var _ref6$theme$setting$f = _ref6.theme.setting.fontFamily,
      fontFamily = _ref6$theme$setting$f === void 0 ? {} : _ref6$theme$setting$f;
  return fontFamily;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapFontSize = function mapFontSize(_ref7) {
  var _ref7$theme$setting$f = _ref7.theme.setting.fontSize,
      fontSize = _ref7$theme$setting$f === void 0 ? {} : _ref7$theme$setting$f;
  return fontSize;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapFontWeight = function mapFontWeight(_ref8) {
  var _ref8$theme$setting$f = _ref8.theme.setting.fontWeight,
      fontWeight = _ref8$theme$setting$f === void 0 ? {} : _ref8$theme$setting$f;
  return fontWeight;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapSpacing = function mapSpacing(_ref9) {
  var _ref9$theme$setting$s = _ref9.theme.setting.spacing,
      spacing = _ref9$theme$setting$s === void 0 ? {} : _ref9$theme$setting$s;
  return spacing;
}; // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */


var mapSwatch = function mapSwatch(_ref10) {
  var _ref10$theme$swatch = _ref10.theme.swatch,
      swatch = _ref10$theme$swatch === void 0 ? {} : _ref10$theme$swatch;
  return swatch;
};

var _BACKGROUND_COLOR$BAC;

var noimp = function noimp() {
  return null;
};

var cssAttrMap = (_BACKGROUND_COLOR$BAC = {}, _defineProperty(_BACKGROUND_COLOR$BAC, BACKGROUND_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BACKGROUND, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_BOTTOM_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_BOTTOM_LEFT_RADIUS, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_BOTTOM_RIGHT_RADIUS, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_LEFT_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_RADIUS, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_RIGHT_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_TOP_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_TOP_LEFT_RADIUS, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, BORDER_TOP_RIGHT_RADIUS, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, BOTTOM, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, BOX_SHADOW, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, CARET_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, FONT_FAMILY, mapFontFamily), _defineProperty(_BACKGROUND_COLOR$BAC, FONT_SIZE, mapFontSize), _defineProperty(_BACKGROUND_COLOR$BAC, FONT_WEIGHT, mapFontWeight), _defineProperty(_BACKGROUND_COLOR$BAC, GRID_GAP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, GRID_COLUMN_GAP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, GRID_ROW_GAP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, HEIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, LEFT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, LINE_HEIGHT, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, MARGIN_BOTTOM, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MARGIN_LEFT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MARGIN_RIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MARGIN_TOP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MARGIN, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MAX_HEIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MAX_WIDTH, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MIN_HEIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, MIN_WIDTH, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, OPACITY, noimp), _defineProperty(_BACKGROUND_COLOR$BAC, OUTLINE_COLOR, mapColor), _defineProperty(_BACKGROUND_COLOR$BAC, PADDING_BOTTOM, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, PADDING_LEFT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, PADDING_RIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, PADDING_TOP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, PADDING, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, RIGHT, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, TOP, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, WIDTH, mapSpacing), _defineProperty(_BACKGROUND_COLOR$BAC, ZINDEX, noimp), _BACKGROUND_COLOR$BAC);

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
}; // prettier-ignore

/**
 * Curried get `unitValue` for given `mapContextFn`, `unitKey`, and `props`
 * @param {mapContextFn}
 * @param {unitKey}
 * @param {props}
 */


var getWithContext = curry(function (mapContextFn, unitKey, props) {
  return get(unitKey)(connectContext(mapContextFn)(props));
});
/**
 * Curried get `unitContext` for given `mapContextFn` and `props`.
 * @param {mapContextFn}
 * @param {props}
 * @returns {unitContext}
 */

var connectContext = function connectContext(mapContextFn) {
  return function (props) {
    return mapContextFn(props);
  };
};
/**
 * Curried get `unitValue` for given `unitKey` and `unitContext`.
 * @param {unitKey}
 * @param {unitContext}
 * @returns {unitValue}
 */


var get = function get(unitKey) {
  return function (unitContext) {
    return unitContext[unitKey];
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", ": ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Constructs a styled-components `cssRule`.
 * @param {cssAttr}
 * @param {unitKey}
 * @param {props}
 * @returns {cssRule}
 */


var cssRuleFor = curry(function (cssAttr, unitKey, props) {
  return styled__default.css(_templateObject(), cssAttr, getWithContext(cssAttrMap[cssAttr])(unitKey, props));
});
/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var backgroundColor = cssRuleFor(BACKGROUND_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var background = cssRuleFor(BACKGROUND); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderBottomColor = cssRuleFor(BORDER_BOTTOM_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderBottomLeftRadius = cssRuleFor(BORDER_BOTTOM_LEFT_RADIUS); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderBottomRightRadius = cssRuleFor(BORDER_BOTTOM_RIGHT_RADIUS); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderColor = cssRuleFor(BORDER_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderLeftColor = cssRuleFor(BORDER_LEFT_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderRadius = cssRuleFor(BORDER_RADIUS); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderRightColor = cssRuleFor(BORDER_RIGHT_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderTopColor = cssRuleFor(BORDER_TOP_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderTopLeftRadius = cssRuleFor(BORDER_TOP_LEFT_RADIUS); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var borderTopRightRadius = cssRuleFor(BORDER_TOP_RIGHT_RADIUS); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var bottom = cssRuleFor(BOTTOM); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var boxShadow = cssRuleFor(BOX_SHADOW); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var caretColor = cssRuleFor(CARET_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var color = cssRuleFor(COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontFamily = cssRuleFor(FONT_FAMILY); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontSize = cssRuleFor(FONT_SIZE); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontWeight = cssRuleFor(FONT_WEIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var gridGap = cssRuleFor(GRID_GAP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var gridColumnGap = cssRuleFor(GRID_COLUMN_GAP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var gridRowGap = cssRuleFor(GRID_ROW_GAP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var height = cssRuleFor(HEIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var left = cssRuleFor(LEFT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var lineHeight = cssRuleFor(LINE_HEIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var marginBottom = cssRuleFor(MARGIN_BOTTOM); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var marginLeft = cssRuleFor(MARGIN_LEFT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var marginRight = cssRuleFor(MARGIN_RIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var marginTop = cssRuleFor(MARGIN_TOP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var margin = cssRuleFor(MARGIN); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var maxHeight = cssRuleFor(MAX_HEIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var maxWidth = cssRuleFor(MAX_WIDTH); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var minHeight = cssRuleFor(MIN_HEIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var minWidth = cssRuleFor(MIN_WIDTH); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var opacity = cssRuleFor(OPACITY); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var outlineColor = cssRuleFor(OUTLINE_COLOR); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var paddingBottom = cssRuleFor(PADDING_BOTTOM); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var paddingLeft = cssRuleFor(PADDING_LEFT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var paddingRight = cssRuleFor(PADDING_RIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var paddingTop = cssRuleFor(PADDING_TOP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var padding = cssRuleFor(PADDING); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var right = cssRuleFor(RIGHT); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var top = cssRuleFor(TOP); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var width = cssRuleFor(WIDTH); //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var zIndex = cssRuleFor(ZINDEX); //prettier-ignore

var cssFor =
/*#__PURE__*/
Object.freeze({
  backgroundColor: backgroundColor,
  background: background,
  borderBottomColor: borderBottomColor,
  borderBottomLeftRadius: borderBottomLeftRadius,
  borderBottomRightRadius: borderBottomRightRadius,
  borderColor: borderColor,
  borderLeftColor: borderLeftColor,
  borderRadius: borderRadius,
  borderRightColor: borderRightColor,
  borderTopColor: borderTopColor,
  borderTopLeftRadius: borderTopLeftRadius,
  borderTopRightRadius: borderTopRightRadius,
  bottom: bottom,
  boxShadow: boxShadow,
  caretColor: caretColor,
  color: color,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontWeight: fontWeight,
  gridGap: gridGap,
  gridColumnGap: gridColumnGap,
  gridRowGap: gridRowGap,
  height: height,
  left: left,
  lineHeight: lineHeight,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  marginRight: marginRight,
  marginTop: marginTop,
  margin: margin,
  maxHeight: maxHeight,
  maxWidth: maxWidth,
  minHeight: minHeight,
  minWidth: minWidth,
  opacity: opacity,
  outlineColor: outlineColor,
  paddingBottom: paddingBottom,
  paddingLeft: paddingLeft,
  paddingRight: paddingRight,
  paddingTop: paddingTop,
  padding: padding,
  right: right,
  top: top,
  width: width,
  zIndex: zIndex
});
/**
 * @param {props}
 * @returns {unitValue}
 */

var baseFontSize = getWithContext(mapBaseFontSize)('baseFontSize'); // prettier-ignore

/**
 * @param {props}
 * @returns {unitValue}
 */

var baseLineHeight = getWithContext(mapBaseLineHeight)('baseLineHeight'); // prettier-ignore

/**
 * @param {props}
 * @returns {unitValue}
 */

var baseSpacing = getWithContext(mapBaseSpacing)('baseSpacing'); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var color$1 = getWithContext(mapColor); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontFace = getWithContext(mapFontFace); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontFamily$1 = getWithContext(mapFontFamily); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontSize$1 = getWithContext(mapFontSize); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var fontWeight$1 = getWithContext(mapFontWeight); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var spacing = getWithContext(mapSpacing); // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

var swatch = getWithContext(mapSwatch); // prettier-ignore

var get$1 =
/*#__PURE__*/
Object.freeze({
  baseFontSize: baseFontSize,
  baseLineHeight: baseLineHeight,
  baseSpacing: baseSpacing,
  color: color$1,
  fontFace: fontFace,
  fontFamily: fontFamily$1,
  fontSize: fontSize$1,
  fontWeight: fontWeight$1,
  spacing: spacing,
  swatch: swatch
});
/**
 * @param {unitKey}
 * @param {props}
 * @returns {cssRule}
 */

var ifRuleFor = curry(function (cssAttrKey, unitKey, props) {
  return props[cssAttrKey] && cssFor[cssAttrKey](unitKey, props);
});
var ifBackgroundColor = ifRuleFor('backgroundColor');
var ifBackground = ifRuleFor('background');
var ifBorderBottomColor = ifRuleFor('borderBottomColor');
var ifBorderBottomLeftRadius = ifRuleFor('borderBottomLeftRadius');
var ifBorderBottomRightRadius = ifRuleFor('borderBottomRightRadius');
var ifBorderColor = ifRuleFor('borderColor');
var ifBorderLeftColor = ifRuleFor('borderLeftColor');
var ifBorderRadius = ifRuleFor('borderRadius');
var ifBorderRightColor = ifRuleFor('borderRightColor');
var ifBorderTopColor = ifRuleFor('borderTopColor');
var ifBorderTopLeftRadius = ifRuleFor('borderTopLeftRadius');
var ifBorderTopRightRadius = ifRuleFor('borderTopRightRadius');
var ifBottom = ifRuleFor('bottom');
var ifCaretColor = ifRuleFor('caretColor');
var ifColor = ifRuleFor('color');
var ifFontFamily = ifRuleFor('fontFamily');
var ifFontSize = ifRuleFor('fontSize');
var ifFontWeight = ifRuleFor('fontWeight');
var ifGridGap = ifRuleFor('gridGap');
var ifGridColumnGap = ifRuleFor('gridColumnGap');
var ifGridRowGap = ifRuleFor('gridRowGap');
var ifHeight = ifRuleFor('height');
var ifLeft = ifRuleFor('left');
var ifLineHeight = ifRuleFor('lineHeight');
var ifMarginBottom = ifRuleFor('marginBottom');
var ifMarginLeft = ifRuleFor('marginLeft');
var ifMarginRight = ifRuleFor('marginRight');
var ifMarginTop = ifRuleFor('marginTop');
var ifMargin = ifRuleFor('margin');
var ifMaxHeight = ifRuleFor('maxHeight');
var ifMaxWidth = ifRuleFor('maxWidth');
var ifMinHeight = ifRuleFor('minHeight');
var ifMinWidth = ifRuleFor('minWidth');
var ifOpacity = ifRuleFor('opacity');
var ifOutlineColor = ifRuleFor('outlineColor');
var ifPaddingBottom = ifRuleFor('paddingBottom');
var ifPaddingLeft = ifRuleFor('paddingLeft');
var ifPaddingRight = ifRuleFor('paddingRight');
var ifPaddingTop = ifRuleFor('paddingTop');
var ifPadding = ifRuleFor('padding');
var ifRight = ifRuleFor('right');
var ifTop = ifRuleFor('top');
var ifWidth = ifRuleFor('width');
var ifZIndex = ifRuleFor('zIndex');
var ifCss =
/*#__PURE__*/
Object.freeze({
  ifBackgroundColor: ifBackgroundColor,
  ifBackground: ifBackground,
  ifBorderBottomColor: ifBorderBottomColor,
  ifBorderBottomLeftRadius: ifBorderBottomLeftRadius,
  ifBorderBottomRightRadius: ifBorderBottomRightRadius,
  ifBorderColor: ifBorderColor,
  ifBorderLeftColor: ifBorderLeftColor,
  ifBorderRadius: ifBorderRadius,
  ifBorderRightColor: ifBorderRightColor,
  ifBorderTopColor: ifBorderTopColor,
  ifBorderTopLeftRadius: ifBorderTopLeftRadius,
  ifBorderTopRightRadius: ifBorderTopRightRadius,
  ifBottom: ifBottom,
  ifCaretColor: ifCaretColor,
  ifColor: ifColor,
  ifFontFamily: ifFontFamily,
  ifFontSize: ifFontSize,
  ifFontWeight: ifFontWeight,
  ifGridGap: ifGridGap,
  ifGridColumnGap: ifGridColumnGap,
  ifGridRowGap: ifGridRowGap,
  ifHeight: ifHeight,
  ifLeft: ifLeft,
  ifLineHeight: ifLineHeight,
  ifMarginBottom: ifMarginBottom,
  ifMarginLeft: ifMarginLeft,
  ifMarginRight: ifMarginRight,
  ifMarginTop: ifMarginTop,
  ifMargin: ifMargin,
  ifMaxHeight: ifMaxHeight,
  ifMaxWidth: ifMaxWidth,
  ifMinHeight: ifMinHeight,
  ifMinWidth: ifMinWidth,
  ifOpacity: ifOpacity,
  ifOutlineColor: ifOutlineColor,
  ifPaddingBottom: ifPaddingBottom,
  ifPaddingLeft: ifPaddingLeft,
  ifPaddingRight: ifPaddingRight,
  ifPaddingTop: ifPaddingTop,
  ifPadding: ifPadding,
  ifRight: ifRight,
  ifTop: ifTop,
  ifWidth: ifWidth,
  ifZIndex: ifZIndex
});
exports.cssFor = cssFor;
exports.get = get$1;
exports.ifCss = ifCss;
});

unwrapExports(dist);
var dist_1 = dist.cssFor;
var dist_2 = dist.get;
var dist_3 = dist.ifCss;

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  line-height: ", ";\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n      min-height: 72px;\n    "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n      min-height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 1rem;\n    "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_TEXT$1 = 'The quick brown fox jumped over the lazy dog.';
var MICRO_TEXT$1 = 'Aa';
var Styles$1 = styled__default.div(_templateObject$7(), function (_ref) {
  var fontWeight = _ref.fontWeight;
  return fontWeight;
}, function (_ref2) {
  var pad = _ref2.pad;
  return pad && styled.css(_templateObject2$3());
}, function (_ref3) {
  var micro = _ref3.micro;
  return micro && styled.css(_templateObject3$3());
});
var Global = styled__default.div(_templateObject4$2(), dist_2.baseFontSize, dist_2.baseLineHeight);

var FontWeightSpecimen$1 = function FontWeightSpecimen(_ref4) {
  var attribute = _ref4.attribute,
      unit = _ref4.unit,
      _ref4$micro = _ref4.micro,
      micro = _ref4$micro === void 0 ? false : _ref4$micro,
      _ref4$pad = _ref4.pad,
      pad = _ref4$pad === void 0 ? false : _ref4$pad;
  return React__default.createElement(Global, null, React__default.createElement(Styles$1, {
    micro: micro,
    pad: pad
  }, micro ? MICRO_TEXT$1 : DEFAULT_TEXT$1));
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
exports.SpecimenBaseFont = BaseFontSpecimen;
exports.SpecimenFontWeight = FontWeightSpecimen;
exports.Typography = FontWeightSpecimen$1;
//# sourceMappingURL=index.js.map
