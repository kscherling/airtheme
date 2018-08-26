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
    React__default.createElement('br', null)
  );
};

module.exports = Spec;
