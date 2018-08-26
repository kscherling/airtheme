'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
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
 // prettier-ignore

var Name = function Name(_ref) {
  var name = _ref.name;
  return name;
};

var Name$1 = reactRedux.connect(mapName)(Name);

var Version = function Version(_ref) {
  var version = _ref.version;
  return version;
};

var Version$1 = reactRedux.connect(mapVersion)(Version);

var Type = function Type(_ref) {
  var type = _ref.type;
  return type;
};

var Type$1 = reactRedux.connect(mapType)(Type);

var BaseFontSize = function BaseFontSize(_ref) {
  var baseFontSize = _ref.baseFontSize;
  return baseFontSize;
};

var BaseFontSize$1 = reactRedux.connect(mapBaseFontSize)(BaseFontSize);

var BaseLineHeight = function BaseLineHeight(_ref) {
  var baseLineHeight = _ref.baseLineHeight;
  return baseLineHeight;
};

var BaseLineHeight$1 = reactRedux.connect(mapBaseLineHeight)(BaseLineHeight);

var BaseSpacing = function BaseSpacing(_ref) {
  var baseSpacing = _ref.baseSpacing;
  return baseSpacing;
};

var BaseSpacing$1 = reactRedux.connect(mapBaseSpacing)(BaseSpacing);

var Swatch = function Swatch(_ref) {
  var _ref$swatch = _ref.swatch,
      view = _ref$swatch.view,
      viewable = _ref$swatch.viewable,
      type = _ref$swatch.type,
      unit = _ref$swatch.unit;
  return React__default.createElement(
    'div',
    null,
    React__default.createElement(
      'strong',
      null,
      'Swatch'
    ),
    React__default.createElement('br', null),
    view,
    React__default.createElement('br', null),
    viewable,
    React__default.createElement('br', null),
    type,
    React__default.createElement('br', null),
    unit
  );
};

var Swatch$1 = reactRedux.connect(mapSwatch)(Swatch);

var FontFace = function FontFace(_ref) {
  var _ref$fontFace = _ref.fontFace,
      view = _ref$fontFace.view,
      viewable = _ref$fontFace.viewable,
      type = _ref$fontFace.type,
      unit = _ref$fontFace.unit;
  return React__default.createElement(
    'div',
    null,
    React__default.createElement(
      'strong',
      null,
      'Font Face'
    ),
    React__default.createElement('br', null),
    view,
    React__default.createElement('br', null),
    viewable,
    React__default.createElement('br', null),
    type,
    React__default.createElement('br', null),
    unit
  );
};

var FontFace$1 = reactRedux.connect(mapFontFace)(FontFace);

var Spec = function Spec() {
  return React__default.createElement(
    React.Fragment,
    null,
    React__default.createElement(Name$1, null),
    React__default.createElement('br', null),
    React__default.createElement(Version$1, null),
    React__default.createElement('br', null),
    React__default.createElement(Type$1, null),
    React__default.createElement('br', null),
    React__default.createElement(BaseFontSize$1, null),
    React__default.createElement('br', null),
    React__default.createElement(BaseLineHeight$1, null),
    React__default.createElement('br', null),
    React__default.createElement(BaseSpacing$1, null),
    React__default.createElement('br', null),
    React__default.createElement(Swatch$1, null),
    React__default.createElement(FontFace$1, null)
  );
};

module.exports = Spec;
