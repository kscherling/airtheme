'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var make = require('@airtheme/make');
var reactRedux = require('react-redux');

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
  return React__default.createElement(make.SimpleList.FourColumns, null, React__default.createElement("span", null, printUnrenderable(unit.name)), React__default.createElement("span", null, printUnrenderable(unit.value)), React__default.createElement("span", null, printUnrenderable(unit.ordinal)), React__default.createElement("span", null, printUnrenderable(unit.object)));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Subheader, null, "Content"), content.length ? content.map(function (unit, idx) {
    return React__default.createElement(Unit, {
      key: idx,
      unit: unit
    });
  }) : React__default.createElement(make.SimpleList, null, React__default.createElement(Strike, null, "empty")));
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
  return React__default.createElement(make.SimpleList, null, React__default.createElement(make.SimpleList.Header, null, "Global"), React__default.createElement(Id, null), React__default.createElement(Name, null), React__default.createElement(Version, null));
};

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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Swatch"), React__default.createElement(SwatchAttribute, null), React__default.createElement(SwatchContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "FontFace"), React__default.createElement(FontFaceAttribute, null), React__default.createElement(FontFaceContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Font Family"), React__default.createElement(FontFamilyAttribute, null), React__default.createElement(FontFamilyContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Font Size"), React__default.createElement(FontSizeAttribute, null), React__default.createElement(FontSizeContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Font Weight"), React__default.createElement(FontWeightAttribute, null), React__default.createElement(FontWeightContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Color"), React__default.createElement(ColorAttribute, null), React__default.createElement(ColorContent, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Spacing"), React__default.createElement(SpacingAttribute, null), React__default.createElement(SpacingContent, null));
};

var Spec = function Spec() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Title, null, "Spec"), React__default.createElement(Globals, null), React__default.createElement(FontFace, null), React__default.createElement(Swatch, null), React__default.createElement(FontFamily, null), React__default.createElement(FontSize, null), React__default.createElement(FontWeight, null), React__default.createElement(Color, null), React__default.createElement(Spacing, null));
};

module.exports = Spec;
//# sourceMappingURL=index.js.map
