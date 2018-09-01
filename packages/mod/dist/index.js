'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: line-through;\n  color: #999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Strike = styled__default.span(_templateObject());
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

var AttributeContent = function AttributeContent(_ref3) {
  var _ref3$content = _ref3.content,
      content = _ref3$content === void 0 ? [] : _ref3$content,
      update = _ref3.update,
      remove = _ref3.remove;
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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  ", " + ", " {\n    margin-left: 1rem;\n  }\n  \n"]);

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

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: line-through;\n  color: #999;\n\n  ", ";\n\n  &:hover {\n    cursor: pointer;\n    color: inherit;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Tab = styled__default.a(_templateObject$1(), function (_ref) {
  var active = _ref.active;
  return active && styled.css(_templateObject2());
});
var ViewTabs = styled__default.div(_templateObject3(), Tab, Tab);
ViewTabs.Tab = Tab;

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n      background: #f2f2f2;\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-flow: row;\n  grid-gap: 0.75rem;\n\n  ", ";\n\n  margin-bottom: 1rem;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject$2(), function (_ref) {
  var shade = _ref.shade;
  return shade && css(_templateObject2$1());
});

var AddForm =
/*#__PURE__*/
function (_Component) {
  _inherits(AddForm, _Component);

  function AddForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      value: '',
      ordinal: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNameChange", function (_ref2) {
      var value = _ref2.target.value;

      _this.setState({
        name: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleValueChange", function (_ref3) {
      var value = _ref3.target.value;

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOrdinalChange", function (_ref4) {
      var value = _ref4.target.value;

      _this.setState({
        ordinal: value
      });
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

  _createClass(AddForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          value = _this$state2.value,
          ordinal = _this$state2.ordinal;
      return React__default.createElement(Container, null, React__default.createElement("input", {
        type: "text",
        placeholder: "name",
        value: name,
        onChange: this.handleNameChange
      }), React__default.createElement("input", {
        type: "text",
        placeholder: "value",
        value: value,
        onChange: this.handleValueChange
      }), React__default.createElement("input", {
        type: "text",
        placeholder: "ordinal",
        value: ordinal,
        onChange: this.handleOrdinalChange
      }), React__default.createElement("button", {
        type: "button",
        onClick: this.handleSubmit
      }, "add"));
    }
  }]);

  return AddForm;
}(React.Component);

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n      background: #f2f2f2;\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-flow: row;\n  grid-gap: 0.75rem;\n\n  ", ";\n\n  margin-bottom: 1rem;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled__default.div(_templateObject$3(), function (_ref) {
  var shade = _ref.shade;
  return shade && css(_templateObject2$2());
});

var AddFormUnit =
/*#__PURE__*/
function (_Component) {
  _inherits(AddFormUnit, _Component);

  function AddFormUnit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddFormUnit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddFormUnit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      value: '',
      ordinal: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNameChange", function (_ref2) {
      var value = _ref2.target.value;

      _this.props.update(_this.props.unit, {
        name: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleValueChange", function (_ref3) {
      var value = _ref3.target.value;

      _this.props.update(_this.props.unit, {
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOrdinalChange", function (_ref4) {
      var value = _ref4.target.value;

      _this.props.update(_this.props.unit, {
        ordinal: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRemove", function () {
      _this.props.remove(_this.props.unit);
    });

    return _this;
  }

  _createClass(AddFormUnit, [{
    key: "render",
    value: function render() {
      var _this$props$unit = this.props.unit,
          name = _this$props$unit.name,
          value = _this$props$unit.value,
          ordinal = _this$props$unit.ordinal;
      return React__default.createElement(Container$1, null, React__default.createElement("input", {
        type: "text",
        value: name,
        onChange: this.handleNameChange
      }), React__default.createElement("input", {
        type: "text",
        value: value,
        onChange: this.handleValueChange
      }), React__default.createElement("input", {
        type: "text",
        value: ordinal,
        onChange: this.handleOrdinalChange
      }), React__default.createElement("button", {
        type: "button",
        onClick: this.handleRemove
      }, "remove"));
    }
  }]);

  return AddFormUnit;
}(React.Component);

var SwatchContent = reactRedux.connect(make.mapSwatchContent, {
  addSwatch: make.addSwatch,
  removeSwatch: make.removeSwatch,
  updateSwatch: make.updateSwatch
})(function (_ref) {
  var content = _ref.content,
      addSwatch = _ref.addSwatch,
      removeSwatch = _ref.removeSwatch,
      updateSwatch = _ref.updateSwatch;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeSwatch,
    update: updateSwatch
  }), React__default.createElement(AddForm, {
    nextOrdinal: content.length + 1,
    add: addSwatch
  }));
});
var Swatch = reactRedux.connect(make.mapSwatch, {
  updateSwatchView: make.updateSwatchView
})(function (_ref2) {
  var _ref2$swatch = _ref2.swatch,
      view = _ref2$swatch.view,
      viewable = _ref2$swatch.viewable,
      updateSwatchView = _ref2.updateSwatchView;
  return React__default.createElement(React.Fragment, null, React__default.createElement(ViewTabs, null, viewable.map(function (unit, idx) {
    return React__default.createElement(ViewTabs.Tab, {
      key: idx,
      active: view === unit,
      onClick: function onClick() {
        return updateSwatchView(unit);
      }
    }, unit);
  })), React__default.createElement(SwatchContent, null));
});

var Mod = function Mod() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(make.SimpleList.Title, null, "Mod"), React__default.createElement(Globals, null), React__default.createElement(Swatch, null));
};

module.exports = Mod;
