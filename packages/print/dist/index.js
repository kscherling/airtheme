'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactRedux = require('react-redux');
var make = require('@airtheme/make');

var pretty = require('js-object-pretty-print').pretty;

var Pretty = function Pretty(_ref) {
  var data = _ref.data,
      _ref$indentSize = _ref.indentSize,
      indentSize = _ref$indentSize === void 0 ? 1 : _ref$indentSize,
      _ref$outputTo = _ref.outputTo,
      outputTo = _ref$outputTo === void 0 ? 'PRINT' : _ref$outputTo,
      _ref$fullFunction = _ref.fullFunction,
      fullFunction = _ref$fullFunction === void 0 ? false : _ref$fullFunction;
  return React.createElement("pre", null, React.createElement("code", null, pretty(data, indentSize, outputTo, fullFunction)));
};

var Print = function Print(_ref) {
  var theme = _ref.theme;
  return React.createElement(Pretty, {
    data: theme
  });
};

var Print$1 = reactRedux.connect(make.mapTheme)(Print);

module.exports = Print$1;
//# sourceMappingURL=index.js.map
