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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  grid-column: span 2;\n  padding: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  grid-column: span 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: #f2f2f2;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: row;\n  grid-gap: 0.75rem;\n\n  ", ";\n\n  margin-bottom: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
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

var Container = styled__default.div(_templateObject2(), function (_ref) {
  var shade = _ref.shade;
  return shade && styled.css(_templateObject3());
});
var Name = styled__default.strong(_templateObject4());
var Empty = styled__default.div(_templateObject5());
var Node = function Node(_ref2) {
  var name = _ref2.name,
      val = _ref2.val;
  return React__default.createElement(React.Fragment, null, React__default.createElement("strong", null, name), React__default.createElement("span", null, printUnrenderable(val)));
};
var Unit = function Unit(_ref3) {
  var unit = _ref3.unit;
  return React__default.createElement(make.SimpleList.FourColumns, null, React__default.createElement("span", null, printUnrenderable(unit.name)), React__default.createElement("span", null, printUnrenderable(unit.value)), React__default.createElement("span", null, printUnrenderable(unit.ordinal)), React__default.createElement("span", null, printUnrenderable(unit.type)));
};
var Attribute = function Attribute(_ref4) {
  var attribute = _ref4.attribute;
  return React__default.createElement(make.SimpleList.TwoColumns, null, Object.entries(attribute).map(function (_ref5, idx) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    return React__default.createElement(Node, {
      key: idx,
      name: key,
      val: val
    });
  }));
};
var AttributeContent = function AttributeContent(_ref7) {
  var _ref7$content = _ref7.content,
      content = _ref7$content === void 0 ? [] : _ref7$content;
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Subheader, null, "Content"), content.length ? content.map(function (unit, idx) {
    return React__default.createElement(Unit, {
      key: idx,
      unit: unit
    });
  }) : React__default.createElement(make.SimpleList, null, React__default.createElement(Strike, null, "empty")));
}; // ___________________ destroy

var printObject = function printObject(name, obj) {
  return React__default.createElement(Container, null, React__default.createElement(Name, null, name), Object.entries(obj).map(function (_ref8, idx) {
    var _ref9 = _slicedToArray(_ref8, 2),
        key = _ref9[0],
        val = _ref9[1];

    return React__default.createElement(Container, {
      key: idx
    }, React__default.createElement("label", null, key), React__default.createElement("span", null, printUnrenderable(val)));
  }));
};

var Id = reactRedux.connect(make.mapId)(function (_ref) {
  var id = _ref.id;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "id",
    val: id
  }));
});
var Name$1 = reactRedux.connect(make.mapName)(function (_ref2) {
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
var BaseFontSize = reactRedux.connect(make.mapBaseFontSize)(function (_ref4) {
  var baseFontSize = _ref4.baseFontSize;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "baseFontSize",
    val: baseFontSize
  }));
});
var BaseLineHeight = reactRedux.connect(make.mapBaseLineHeight)(function (_ref5) {
  var baseLineHeight = _ref5.baseLineHeight;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "baseLineHeight",
    val: baseLineHeight
  }));
});
var BaseSpacing = reactRedux.connect(make.mapBaseSpacing)(function (_ref6) {
  var baseSpacing = _ref6.baseSpacing;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    name: "baseSpacing",
    val: baseSpacing
  }));
});

var Globals = function Globals() {
  return React__default.createElement(make.SimpleList, null, React__default.createElement(make.SimpleList.Header, null, "Global"), React__default.createElement(Id, null), React__default.createElement(Name$1, null), React__default.createElement(Version, null), React__default.createElement(BaseFontSize, null), React__default.createElement(BaseLineHeight, null), React__default.createElement(BaseSpacing, null));
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

var Spacing = function Spacing(_ref) {
  var spacing = _ref.spacing;
  return printObject('Spacing', spacing);
};

var Spacing$1 = reactRedux.connect(make.mapSpacing)(Spacing);

var Spec = function Spec() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(Globals, null), React__default.createElement(Swatch, null), React__default.createElement(FontFace, null), React__default.createElement(Color, null), React__default.createElement(FontSize, null), React__default.createElement(FontWeight, null), React__default.createElement(Spacing$1, null));
};

module.exports = Spec;
