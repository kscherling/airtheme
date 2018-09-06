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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  var data = _taggedTemplateLiteral(["\n      color: #00000070;\n      border: 1px solid #00000015;\n    "]);

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
}, function (_ref2) {
  var isLight = _ref2.isLight;
  return isLight && styled.css(_templateObject2());
}));

var Swatch$1 = function Swatch(_ref3) {
  var swatch = _ref3.swatch;
  return React__default.createElement(ui.Card, {
    pad: true,
    border: true
  }, React__default.createElement(AttributeEntries, {
    attribute: swatch,
    component: function component(_ref4) {
      var name = _ref4.name,
          value = _ref4.value;
      return React__default.createElement(Chip, {
        color: value
      }, React__default.createElement("span", null, name), React__default.createElement("span", null, value));
    }
  }));
};

var Swatch$2 = connectTheme(mapSwatch)(Swatch$1);

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
//# sourceMappingURL=index.js.map
