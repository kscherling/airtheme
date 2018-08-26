'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
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
var mapFontFaceContent = function mapFontFaceContent(_ref9) {
  var content = _ref9.theme.fontFace.content;
  return { content: content };
}; //prettier-ignore
var mapSwatch = function mapSwatch(_ref10) {
  var swatch = _ref10.theme.swatch;
  return { swatch: swatch };
};
var mapSwatchContent = function mapSwatchContent(_ref11) {
  var content = _ref11.theme.swatch.content;
  return { content: content };
}; // prettier-ignore

var mapColor = function mapColor(_ref12) {
  var color = _ref12.theme.setting.color;
  return { color: color };
}; // prettier-ignore
var mapColorContent = function mapColorContent(_ref13) {
  var content = _ref13.theme.setting.color.content;
  return { content: content };
}; // prettier-ignore
var mapFontSize = function mapFontSize(_ref16) {
  var fontSize = _ref16.theme.setting.fontSize;
  return { fontSize: fontSize };
}; // prettier-ignore
var mapFontSizeContent = function mapFontSizeContent(_ref17) {
  var content = _ref17.theme.setting.fontSize.content;
  return { content: content };
}; // prettier-ignore
var mapFontWeight = function mapFontWeight(_ref18) {
  var fontWeight = _ref18.theme.setting.fontWeight;
  return { fontWeight: fontWeight };
}; // prettier-ignore
var mapFontWeightContent = function mapFontWeightContent(_ref19) {
  var content = _ref19.theme.setting.fontWeight.content;
  return { content: content };
}; // prettier-ignore
var mapSpacing = function mapSpacing(_ref20) {
  var spacing = _ref20.theme.setting.spacing;
  return { spacing: spacing };
}; // prettier-ignore
var mapSpacingContent = function mapSpacingContent(_ref21) {
  var content = _ref21.theme.setting.spacing.content;
  return { content: content };
}; // prettier-ignore

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: 160px auto;\n  grid-auto-flow: row;\n  grid-gap: 0.75rem;\n\n  ', ';\n\n  margin-bottom: 1rem;\n'], ['\n  display: grid;\n  grid-template-columns: 160px auto;\n  grid-auto-flow: row;\n  grid-gap: 0.75rem;\n\n  ', ';\n\n  margin-bottom: 1rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background: #f2f2f2;\n    '], ['\n      background: #f2f2f2;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  grid-column: span 2;\n'], ['\n  grid-column: span 2;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  grid-column: span 2;\n  padding: 1rem;\n'], ['\n  grid-column: span 2;\n  padding: 1rem;\n']);

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

var Container = styled__default.div(_templateObject, function (_ref) {
  var shade = _ref.shade;
  return shade && styled.css(_templateObject2);
});

var Name = styled__default.strong(_templateObject3);

var Empty = styled__default.div(_templateObject4);

var printObject = function printObject(name, obj) {
  return React__default.createElement(
    Container,
    null,
    React__default.createElement(
      Name,
      null,
      name
    ),
    Object.entries(obj).map(function (_ref2, idx) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

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

var printUnit = function printUnit(unit) {
  return React__default.createElement(
    Container,
    null,
    React__default.createElement(
      Name,
      null,
      unit.name
    ),
    Object.entries(obj).map(function (_ref4, idx) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          val = _ref5[1];

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

var printAttributeContent = function printAttributeContent(name) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return content.length ? React__default.createElement(
    Container,
    { shade: true },
    React__default.createElement(
      Name,
      null,
      name
    ),
    content.map(function (unit, idx) {
      return printUnit(unit);
    })
  ) : React__default.createElement(
    Container,
    { shade: true },
    React__default.createElement(
      Empty,
      null,
      name
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

var ColorContent = function ColorContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Face Content', content);
};

var ColorContent$1 = reactRedux.connect(mapColorContent)(ColorContent);

var SwatchContent = function SwatchContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Swatch Content', content);
};

var SwatchContent$1 = reactRedux.connect(mapSwatchContent)(SwatchContent);

var FontFaceContent = function FontFaceContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Face Content', content);
};

var FontFaceContent$1 = reactRedux.connect(mapFontFaceContent)(FontFaceContent);

var FontSizeContent = function FontSizeContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Size Content', content);
};

var FontSizeContent$1 = reactRedux.connect(mapFontSizeContent)(FontSizeContent);

var FontWeightContent = function FontWeightContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('Font Weight Content', content);
};

var FontWeightContent$1 = reactRedux.connect(mapFontWeightContent)(FontWeightContent);

var SpacingContent = function SpacingContent(_ref) {
  var content = _ref.content;
  return printAttributeContent('SpacingContent Content', content);
};

var SpacingContent$1 = reactRedux.connect(mapSpacingContent)(SpacingContent);

var Spec = function Spec() {
  return React__default.createElement(
    'div',
    null,
    React__default.createElement(Name$2, null),
    React__default.createElement(Version$1, null),
    React__default.createElement(Type$1, null),
    React__default.createElement(BaseFontSize$1, null),
    React__default.createElement(BaseLineHeight$1, null),
    React__default.createElement(BaseSpacing$1, null),
    React__default.createElement(Swatch$1, null),
    React__default.createElement(SwatchContent$1, null),
    React__default.createElement(FontFace$1, null),
    React__default.createElement(FontFaceContent$1, null),
    React__default.createElement(Color$1, null),
    React__default.createElement(ColorContent$1, null),
    React__default.createElement(FontSize$1, null),
    React__default.createElement(FontSizeContent$1, null),
    React__default.createElement(FontWeight$1, null),
    React__default.createElement(FontWeightContent$1, null),
    React__default.createElement(Spacing$1, null),
    React__default.createElement(SpacingContent$1, null)
  );
};

module.exports = Spec;
