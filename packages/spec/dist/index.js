'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');

var Name = function Name(_ref) {
  var name = _ref.name;
  return name;
};

var Name$1 = reactRedux.connect(function (_ref2) {
  var name = _ref2.theme.name;
  return {
    name: name
  };
})(Name);

var Version = function Version(_ref) {
  var version = _ref.version;
  return version;
};

var Version$1 = reactRedux.connect(function (_ref2) {
  var version = _ref2.theme.version;
  return {
    version: version
  };
})(Version);

var Type = function Type(_ref) {
  var type = _ref.type;
  return type;
};

var Type$1 = reactRedux.connect(function (_ref2) {
  var type = _ref2.theme.type;
  return {
    type: type
  };
})(Type);

var BaseFontSize = function BaseFontSize(_ref) {
  var baseFontSize = _ref.baseFontSize;
  return baseFontSize;
};

var BaseFontSize$1 = reactRedux.connect(function (_ref2) {
  var baseFontSize = _ref2.theme.baseFontSize;
  return {
    baseFontSize: baseFontSize
  };
})(BaseFontSize);

var BaseLineHeight = function BaseLineHeight(_ref) {
  var baseLineHeight = _ref.baseLineHeight;
  return baseLineHeight;
};

var BaseLineHeight$1 = reactRedux.connect(function (_ref2) {
  var baseLineHeight = _ref2.theme.baseLineHeight;
  return {
    baseLineHeight: baseLineHeight
  };
})(BaseLineHeight);

var BaseSpacing = function BaseSpacing(_ref) {
  var baseSpacing = _ref.baseSpacing;
  return baseSpacing;
};

var BaseSpacing$1 = reactRedux.connect(function (_ref2) {
  var baseSpacing = _ref2.theme.baseSpacing;
  return {
    baseSpacing: baseSpacing
  };
})(BaseSpacing);

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
