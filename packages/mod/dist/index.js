'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var make = require('@airtheme/make');
var reactRedux = require('react-redux');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  ", " + ", " {\n    margin-left: 1rem;\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      text-decoration: none;\n      color: inherit;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: line-through;\n  color: #999;\n\n  ", ";\n\n  &:hover {\n    cursor: pointer;\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Tab = styled__default.a(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active && styled.css(_templateObject2());
});
var SimpleTabs = styled__default.div(_templateObject3(), Tab, Tab);
SimpleTabs.Tab = Tab;

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: line-through;\n  color: #999;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Strike = styled__default.span(_templateObject$1());
var Node = function Node(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return React__default.createElement(React.Fragment, null, React__default.createElement("strong", null, label), React__default.createElement("input", {
    type: "text",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }));
};
var Unit = function Unit(_ref2) {
  var unit = _ref2.unit,
      remove = _ref2.remove,
      update = _ref2.update;
  return React__default.createElement(make.SimpleList.FourColumns, null, React__default.createElement("input", {
    placeholder: "name",
    type: "text",
    value: unit.name,
    onChange: function onChange(e) {
      return update(unit, {
        name: e.target.value
      });
    }
  }), React__default.createElement("input", {
    placeholder: "value",
    type: "text",
    value: unit.value,
    onChange: function onChange(e) {
      return update(unit, {
        value: e.target.value
      });
    }
  }), React__default.createElement("input", {
    placeholder: "ordinal",
    type: "text",
    value: unit.ordinal,
    onChange: function onChange(e) {
      return update(unit, {
        ordinal: e.target.value
      });
    }
  }), React__default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return remove(unit);
    }
  }, "remove"));
};
var AddUnit =
/*#__PURE__*/
function (_Component) {
  _inherits(AddUnit, _Component);

  function AddUnit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddUnit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddUnit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      value: '',
      ordinal: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      var _this$state = _this.state,
          name = _this$state.name,
          value = _this$state.value,
          ordinal = _this$state.ordinal;
      var _this$props = _this.props,
          add = _this$props.add,
          nextOrdinal = _this$props.nextOrdinal;
      add(value, name, nextOrdinal);

      _this.setState({
        name: '',
        value: '',
        ordinal: ''
      });
    });

    return _this;
  }

  _createClass(AddUnit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          name = _this$state2.name,
          value = _this$state2.value,
          ordinal = _this$state2.ordinal;
      return React__default.createElement(make.SimpleList.FourColumns, null, React__default.createElement("input", {
        type: "text",
        placeholder: "name",
        value: name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        }
      }), React__default.createElement("input", {
        type: "text",
        placeholder: "value",
        value: value,
        onChange: function onChange(e) {
          return _this2.setState({
            value: e.target.value
          });
        }
      }), React__default.createElement("input", {
        disabled: true,
        type: "text",
        placeholder: "ordinal",
        value: ordinal,
        onChange: function onChange(e) {
          return _this2.setState({
            ordinal: e.target.value
          });
        }
      }), React__default.createElement("button", {
        type: "button",
        onClick: this.handleSubmit
      }, "add"));
    }
  }]);

  return AddUnit;
}(React.Component);
var Attribute = function Attribute(_ref3) {
  var view = _ref3.view,
      viewable = _ref3.viewable,
      updateView = _ref3.updateView;
  return React__default.createElement(make.SimpleList.OneColumn, {
    padding: "1rem 0"
  }, React__default.createElement(make.SimpleList.Subheader, null, "View"), React__default.createElement(SimpleTabs, null, viewable.map(function (unit, idx) {
    return React__default.createElement(SimpleTabs.Tab, {
      key: idx,
      active: view === unit,
      onClick: function onClick() {
        return updateView(unit);
      }
    }, unit);
  })));
};
var AttributeContent = function AttributeContent(_ref4) {
  var _ref4$content = _ref4.content,
      content = _ref4$content === void 0 ? [] : _ref4$content,
      update = _ref4.update,
      remove = _ref4.remove;
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Subheader, null, "Content"), content.length ? content.map(function (unit, idx) {
    return React__default.createElement(Unit, {
      key: idx,
      unit: unit,
      update: update,
      remove: remove
    });
  }) : React__default.createElement(make.SimpleList, null, React__default.createElement(Strike, null, "empty")));
};

var Name = reactRedux.connect(make.mapName, {
  updateThemeName: make.updateThemeName
})(function (_ref) {
  var name = _ref.name,
      updateThemeName = _ref.updateThemeName;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    label: "name",
    value: name,
    onChange: updateThemeName
  }));
});
var Id = reactRedux.connect(make.mapId, {
  updateThemeId: make.updateThemeId
})(function (_ref2) {
  var id = _ref2.id,
      updateThemeId = _ref2.updateThemeId;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    disabled: true,
    label: "id",
    value: id,
    onChange: updateThemeId
  }));
});
var Version = reactRedux.connect(make.mapVersion, {
  updateThemeVersion: make.updateThemeVersion
})(function (_ref3) {
  var version = _ref3.version,
      updateThemeVersion = _ref3.updateThemeVersion;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    label: "version",
    value: version,
    onChange: updateThemeVersion
  }));
});
var BaseFontSize = reactRedux.connect(make.mapBaseFontSize, {
  updateBaseFontSize: make.updateBaseFontSize
})(function (_ref4) {
  var baseFontSize = _ref4.baseFontSize,
      updateBaseFontSize = _ref4.updateBaseFontSize;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    label: "baseFontSize",
    value: baseFontSize,
    onChange: updateBaseFontSize
  }));
});
var BaseLineHeight = reactRedux.connect(make.mapBaseLineHeight, {
  updateBaseLineHeight: make.updateBaseLineHeight
})(function (_ref5) {
  var baseLineHeight = _ref5.baseLineHeight,
      updateBaseLineHeight = _ref5.updateBaseLineHeight;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    label: "baseLineHeight",
    value: baseLineHeight,
    onChange: updateBaseLineHeight
  }));
});
var BaseSpacing = reactRedux.connect(make.mapBaseSpacing, {
  updateBaseSpacing: make.updateBaseSpacing
})(function (_ref6) {
  var baseSpacing = _ref6.baseSpacing,
      updateBaseSpacing = _ref6.updateBaseSpacing;
  return React__default.createElement(make.SimpleList.TwoColumns, null, React__default.createElement(Node, {
    label: "baseLineHeight",
    value: baseSpacing,
    onChange: updateBaseSpacing
  }));
});

var Globals = function Globals() {
  return React__default.createElement(make.SimpleList, null, React__default.createElement(make.SimpleList.Header, null, "Global"), React__default.createElement(Id, null), React__default.createElement(Name, null), React__default.createElement(Version, null), React__default.createElement(BaseFontSize, null), React__default.createElement(BaseLineHeight, null), React__default.createElement(BaseSpacing, null));
};

var SwatchAttribute = reactRedux.connect(make.mapSwatch, {
  updateSwatchView: make.updateSwatchView
})(function (_ref) {
  var _ref$swatch = _ref.swatch,
      view = _ref$swatch.view,
      viewable = _ref$swatch.viewable,
      updateSwatchView = _ref.updateSwatchView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateSwatchView
  });
});
var SwatchContent = reactRedux.connect(make.mapSwatchContent, {
  addSwatch: make.addSwatch,
  removeSwatch: make.removeSwatch,
  updateSwatch: make.updateSwatch
})(function (_ref2) {
  var content = _ref2.content,
      addSwatch = _ref2.addSwatch,
      removeSwatch = _ref2.removeSwatch,
      updateSwatch = _ref2.updateSwatch;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeSwatch,
    update: updateSwatch
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addSwatch
  }));
});
var Swatch = function Swatch() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Header, null, "Swatch"), React__default.createElement(SwatchAttribute, null), React__default.createElement(SwatchContent, null));
};

var Mod = function Mod() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Title, null, "Mod"), React__default.createElement(Globals, null), React__default.createElement(Swatch, null));
};

module.exports = Mod;
