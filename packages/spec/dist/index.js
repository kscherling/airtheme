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
    return '[array]';
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
var printObject = function printObject(name, obj) {
  return React__default.createElement(Container, null, React__default.createElement(Name, null, name), Object.entries(obj).map(function (_ref2, idx) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];

    return React__default.createElement(Container, {
      key: idx
    }, React__default.createElement("label", null, key), React__default.createElement("span", null, printUnrenderable(val)));
  }));
};
var printNode = function printNode(key, val) {
  return React__default.createElement(make.Grid.TwoColumns, null, React__default.createElement("label", null, key), React__default.createElement("span", null, val));
};
var printUnit = function printUnit(unit, idx) {
  return React__default.createElement(Container, {
    key: idx
  }, Object.entries(unit).map(function (_ref4, idx) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        val = _ref5[1];

    return React__default.createElement(Container, {
      key: idx
    }, React__default.createElement("label", null, key), React__default.createElement("span", null, printUnrenderable(val)));
  }));
};
var printAttributeContent = function printAttributeContent(name) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return content.length ? React__default.createElement(Container, {
    shade: true
  }, React__default.createElement(Name, null, name), content.map(function (unit, idx) {
    return printUnit(unit, idx);
  })) : React__default.createElement(Container, {
    shade: true
  }, React__default.createElement(Empty, null, name));
};

var Id = reactRedux.connect(make.mapId)(function (_ref) {
  var id = _ref.id;
  return printNode('id', id);
});
var Name$1 = reactRedux.connect(make.mapName)(function (_ref2) {
  var name = _ref2.name;
  return printNode('name', name);
});
var Version = reactRedux.connect(make.mapVersion)(function (_ref3) {
  var version = _ref3.version;
  return printNode('version', version);
});
var BaseFontSize = reactRedux.connect(make.mapBaseFontSize)(function (_ref4) {
  var baseFontSize = _ref4.baseFontSize;
  return printNode('baseFontSize', baseFontSize);
});
var BaseLineHeight = reactRedux.connect(make.mapBaseLineHeight)(function (_ref5) {
  var baseLineHeight = _ref5.baseLineHeight;
  return printNode('baseLineHeight', baseLineHeight);
});
var BaseSpacing = reactRedux.connect(make.mapBaseSpacing)(function (_ref6) {
  var baseSpacing = _ref6.baseSpacing;
  return printNode('baseSpacing', baseSpacing);
});

var Globals = function Globals() {
  return React__default.createElement(make.Grid.OneColumn, null, React__default.createElement(Id, null), React__default.createElement(Name$1, null), React__default.createElement(Version, null), React__default.createElement(BaseFontSize, null), React__default.createElement(BaseLineHeight, null), React__default.createElement(BaseSpacing, null));
};

var Swatch = function Swatch(_ref) {
  var swatch = _ref.swatch;
  return printObject('Swatch', swatch);
};

var Swatch$1 = reactRedux.connect(make.mapSwatch)(Swatch);

var FontFace = function FontFace(_ref) {
  var fontFace = _ref.fontFace;
  return printObject('Font Face', fontFace);
};

var FontFace$1 = reactRedux.connect(make.mapFontFace)(FontFace);

var Color = function Color(_ref) {
  var color = _ref.color;
  return printObject('Color', color);
};

var Color$1 = reactRedux.connect(make.mapColor)(Color);

var FontSize = function FontSize(_ref) {
  var fontSize = _ref.fontSize;
  return printObject('FontSize', fontSize);
};

var FontSize$1 = reactRedux.connect(make.mapFontSize)(FontSize);

var FontWeight = function FontWeight(_ref) {
  var fontWeight = _ref.fontWeight;
  return printObject('FontWeight', fontWeight);
};

var FontWeight$1 = reactRedux.connect(make.mapFontWeight)(FontWeight);

var Spacing = function Spacing(_ref) {
  var spacing = _ref.spacing;
  return printObject('Spacing', spacing);
};

var Spacing$1 = reactRedux.connect(make.mapSpacing)(Spacing);

var ColorContent = function ColorContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Face Content', content);
};

var ColorContent$1 = reactRedux.connect(make.mapColorContent)(ColorContent);

var SwatchContent = function SwatchContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Swatch Content', content);
};

var SwatchContent$1 = reactRedux.connect(make.mapSwatchContent)(SwatchContent);

var FontFaceContent = function FontFaceContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Face Content', content);
};

var FontFaceContent$1 = reactRedux.connect(make.mapFontFaceContent)(FontFaceContent);

var FontSizeContent = function FontSizeContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Size Content', content);
};

var FontSizeContent$1 = reactRedux.connect(make.mapFontSizeContent)(FontSizeContent);

var FontWeightContent = function FontWeightContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Weight Content', content);
};

var FontWeightContent$1 = reactRedux.connect(make.mapFontWeightContent)(FontWeightContent);

var SpacingContent = function SpacingContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('SpacingContent Content', content);
};

var SpacingContent$1 = reactRedux.connect(make.mapSpacingContent)(SpacingContent);

var Spec = function Spec() {
  return React__default.createElement(make.Grid.OneColumn, null, React__default.createElement(Globals, null), React__default.createElement(Swatch$1, null), React__default.createElement(SwatchContent$1, null), React__default.createElement(FontFace$1, null), React__default.createElement(FontFaceContent$1, null), React__default.createElement(Color$1, null), React__default.createElement(ColorContent$1, null), React__default.createElement(FontSize$1, null), React__default.createElement(FontSizeContent$1, null), React__default.createElement(FontWeight$1, null), React__default.createElement(FontWeightContent$1, null), React__default.createElement(Spacing$1, null), React__default.createElement(SpacingContent$1, null));
};

module.exports = Spec;
