'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var reactRedux = require('react-redux');

var mapName = function mapName(_ref) {
  var name = _ref.theme.name;
  return { name: name };
};
var mapVersion = function mapVersion(_ref2) {
  var version = _ref2.theme.version;
  return { version: version };
};
var mapType = function mapType(_ref3) {
  var type = _ref3.theme.type;
  return { type: type };
};

var mapBaseFontSize = function mapBaseFontSize(_ref5) {
  var baseFontSize = _ref5.theme.baseFontSize;
  return { baseFontSize: baseFontSize };
}; // prettier-ignore
var mapBaseSpacing = function mapBaseSpacing(_ref6) {
  var baseSpacing = _ref6.theme.baseSpacing;
  return { baseSpacing: baseSpacing };
};
var mapBaseLineHeight = function mapBaseLineHeight(_ref7) {
  var baseLineHeight = _ref7.theme.baseLineHeight;
  return { baseLineHeight: baseLineHeight };
}; // prettier-ignore
var mapFontFace = function mapFontFace(_ref8) {
  var fontFace = _ref8.theme.fontFace;
  return { fontFace: fontFace };
};
var mapSwatch = function mapSwatch(_ref9) {
  var swatch = _ref9.theme.swatch;
  return { swatch: swatch };
};

var mapColor = function mapColor(_ref10) {
  var color = _ref10.theme.setting.color;
  return { color: color };
}; // prettier-ignore
var mapFontSize = function mapFontSize(_ref12) {
  var fontSize = _ref12.theme.setting.fontSize;
  return { fontSize: fontSize };
}; // prettier-ignore
var mapFontWeight = function mapFontWeight(_ref13) {
  var fontWeight = _ref13.theme.setting.fontWeight;
  return { fontWeight: fontWeight };
}; // prettier-ignore
var mapSpacing = function mapSpacing(_ref14) {
  var spacing = _ref14.theme.setting.spacing;
  return { spacing: spacing };
}; // prettier-ignore

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: 120px auto;\n  grid-auto-flow: row;\n'], ['\n  display: grid;\n  grid-template-columns: 120px auto;\n  grid-auto-flow: row;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  grid-column: span 2;\n'], ['\n  grid-column: span 2;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var printUnrenderable = function printUnrenderable(val) {
  if (val === null) {
    return 'null';
  }

  if (typeof val === 'undefined') {
    return 'undefined';
  }

  if (Array.isArray(val)) {
    return '[array]';
  }

  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    return '{object}';
  }

  return val;
};

var Container = styled.div(_templateObject);

var Name = styled.strong(_templateObject2);

var printObject = function printObject(name, obj) {
  return React__default.createElement(
    Container,
    null,
    React__default.createElement(
      Name,
      null,
      name
    ),
    Object.entries(obj).map(function (_ref, idx) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return React__default.createElement(
        React.Fragment,
        { key: idx },
        React__default.createElement(
          'label',
          null,
          key
        ),
        React__default.createElement(
          'span',
          null,
          printUnrenderable(val)
        )
      );
    })
  );
};

var printNode = function printNode(key, val) {
  return React__default.createElement(
    Container,
    null,
    React__default.createElement(
      React.Fragment,
      null,
      React__default.createElement(
        'label',
        null,
        key
      ),
      React__default.createElement(
        'span',
        null,
        val
      )
    )
  );
};

var Name$1 = function Name(_ref) {
  var name = _ref.name;
  return printNode('name', name);
};

var Name$2 = reactRedux.connect(mapName)(Name$1);

var Version = function Version(_ref) {
  var version = _ref.version;
  return printNode('version', version);
};

var Version$1 = reactRedux.connect(mapVersion)(Version);

var Type = function Type(_ref) {
  var type = _ref.type;
  return printNode('type', type);
};

var Type$1 = reactRedux.connect(mapType)(Type);

var BaseFontSize = function BaseFontSize(_ref) {
  var baseFontSize = _ref.baseFontSize;
  return printNode('baseFontSize', baseFontSize);
};

var BaseFontSize$1 = reactRedux.connect(mapBaseFontSize)(BaseFontSize);

var BaseLineHeight = function BaseLineHeight(_ref) {
  var baseLineHeight = _ref.baseLineHeight;
  return printNode('baseLineHeight', baseLineHeight);
};

var BaseLineHeight$1 = reactRedux.connect(mapBaseLineHeight)(BaseLineHeight);

var BaseSpacing = function BaseSpacing(_ref) {
  var baseSpacing = _ref.baseSpacing;
  return printNode('baseSpacing', baseSpacing);
};

var BaseSpacing$1 = reactRedux.connect(mapBaseSpacing)(BaseSpacing);

var Swatch = function Swatch(_ref) {
  var swatch = _ref.swatch;
  return printObject('Swatch', swatch);
};

var Swatch$1 = reactRedux.connect(mapSwatch)(Swatch);

var FontFace = function FontFace(_ref) {
  var fontFace = _ref.fontFace;
  return printObject('Font Face', fontFace);
};

var FontFace$1 = reactRedux.connect(mapFontFace)(FontFace);

var Color = function Color(_ref) {
  var color = _ref.color;
  return printObject('Color', color);
};

var Color$1 = reactRedux.connect(mapColor)(Color);

var FontSize = function FontSize(_ref) {
  var fontSize = _ref.fontSize;
  return printObject('FontSize', fontSize);
};

var FontSize$1 = reactRedux.connect(mapFontSize)(FontSize);

var FontWeight = function FontWeight(_ref) {
  var fontWeight = _ref.fontWeight;
  return printObject('FontWeight', fontWeight);
};

var FontWeight$1 = reactRedux.connect(mapFontWeight)(FontWeight);

var Spacing = function Spacing(_ref) {
  var spacing = _ref.spacing;
  return printObject('Spacing', spacing);
};

var Spacing$1 = reactRedux.connect(mapSpacing)(Spacing);

var Spec = function Spec() {
  return React__default.createElement(
    React.Fragment,
    null,
    React__default.createElement(Name$2, null),
    React__default.createElement(Version$1, null),
    React__default.createElement(Type$1, null),
    React__default.createElement(BaseFontSize$1, null),
    React__default.createElement(BaseLineHeight$1, null),
    React__default.createElement(BaseSpacing$1, null),
    React__default.createElement(Swatch$1, null),
    React__default.createElement(FontFace$1, null),
    React__default.createElement(Color$1, null),
    React__default.createElement(FontSize$1, null),
    React__default.createElement(FontWeight$1, null),
    React__default.createElement(Spacing$1, null)
  );
};

module.exports = Spec;
