'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
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

var noop = function noop() {};

var Strike = styled.span(_templateObject());
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
var BaseUnit = function BaseUnit(_ref3) {
  var unit = _ref3.unit,
      update = _ref3.update;
  return React__default.createElement(make.SimpleList.ThreeColumns, null, React__default.createElement("input", {
    disabled: true,
    placeholder: "name",
    type: "text",
    value: unit.name,
    onChange: function onChange(e) {
      return update({
        name: e.target.value
      });
    }
  }), React__default.createElement("input", {
    placeholder: "value",
    type: "text",
    value: unit.value,
    onChange: function onChange(e) {
      return update({
        value: e.target.value
      });
    }
  }), React__default.createElement("input", {
    placeholder: "ordinal",
    type: "text",
    value: unit.ordinal,
    onChange: function onChange(e) {
      return update({
        ordinal: e.target.value
      });
    }
  }));
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
var Attribute = function Attribute(_ref4) {
  var view = _ref4.view,
      viewable = _ref4.viewable,
      _ref4$updateView = _ref4.updateView,
      updateView = _ref4$updateView === void 0 ? noop : _ref4$updateView;
  return React__default.createElement(make.SimpleList.OneColumn, {
    padding: "1rem 0"
  }, React__default.createElement(make.SimpleTabs, null, viewable.map(function (unit, idx) {
    return React__default.createElement(make.SimpleTabs.Tab, {
      key: idx,
      active: view === unit,
      onClick: function onClick() {
        return updateView(unit);
      }
    }, unit);
  })));
};
var AttributeContent = function AttributeContent(_ref5) {
  var _ref5$content = _ref5.content,
      content = _ref5$content === void 0 ? [] : _ref5$content,
      update = _ref5.update,
      remove = _ref5.remove;
  return React__default.createElement(make.SimpleList.OneColumn, null, content.length ? content.map(function (unit, idx) {
    return React__default.createElement(Unit, {
      key: idx,
      unit: unit,
      update: update,
      remove: remove
    });
  }) : React__default.createElement(make.SimpleList, null, React__default.createElement(Strike, null, "empty")));
};
var AttributeBaseContent = function AttributeBaseContent(_ref6) {
  var _ref6$content = _ref6.content,
      content = _ref6$content === void 0 ? {} : _ref6$content,
      update = _ref6.update;
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(BaseUnit, {
    unit: content,
    update: update
  }));
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

var Globals = function Globals() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(Id, null), React__default.createElement(Name, null), React__default.createElement(Version, null));
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
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(SwatchAttribute, null), React__default.createElement(SwatchContent, null));
};

var FontFaceAttribute = reactRedux.connect(make.mapFontFace)(function (_ref) {
  var _ref$fontFace = _ref.fontFace,
      view = _ref$fontFace.view,
      viewable = _ref$fontFace.viewable;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable
  });
});
var FontFaceContent = reactRedux.connect(make.mapFontFaceContent, {
  addFontFace: make.addFontFace,
  removeFontFace: make.removeFontFace,
  updateFontFace: make.updateFontFace
})(function (_ref2) {
  var content = _ref2.content,
      addFontFace = _ref2.addFontFace,
      removeFontFace = _ref2.removeFontFace,
      updateFontFace = _ref2.updateFontFace;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeFontFace,
    update: updateFontFace
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addFontFace
  }));
});

var FontFace = function FontFace() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(FontFaceAttribute, null), React__default.createElement(FontFaceContent, null));
};

var FontFamilyAttribute = reactRedux.connect(make.mapFontFamily, {
  updateFontFamilyView: make.updateFontFamilyView
})(function (_ref) {
  var _ref$fontFamily = _ref.fontFamily,
      view = _ref$fontFamily.view,
      viewable = _ref$fontFamily.viewable,
      updateFontFamilyView = _ref.updateFontFamilyView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateFontFamilyView
  });
});
var FontFamilyContent = reactRedux.connect(make.mapFontFamilyContent, {
  addFontFamily: make.addFontFamily,
  removeFontFamily: make.removeFontFamily,
  updateFontFamily: make.updateFontFamily
})(function (_ref2) {
  var content = _ref2.content,
      addFontFamily = _ref2.addFontFamily,
      removeFontFamily = _ref2.removeFontFamily,
      updateFontFamily = _ref2.updateFontFamily;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeFontFamily,
    update: updateFontFamily
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addFontFamily
  }));
});

var FontFamily = function FontFamily() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(FontFamilyAttribute, null), React__default.createElement(FontFamilyContent, null));
};

var FontSizeAttribute = reactRedux.connect(make.mapFontSize, {
  updateFontSizeView: make.updateFontSizeView
})(function (_ref) {
  var _ref$fontSize = _ref.fontSize,
      view = _ref$fontSize.view,
      viewable = _ref$fontSize.viewable,
      updateFontSizeView = _ref.updateFontSizeView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateFontSizeView
  });
});
var FontSizeContent = reactRedux.connect(make.mapFontSizeContent, {
  addFontSize: make.addFontSize,
  removeFontSize: make.removeFontSize,
  updateFontSize: make.updateFontSize
})(function (_ref2) {
  var content = _ref2.content,
      addFontSize = _ref2.addFontSize,
      removeFontSize = _ref2.removeFontSize,
      updateFontSize = _ref2.updateFontSize;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeFontSize,
    update: updateFontSize
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addFontSize
  }));
});

var FontSize = function FontSize() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(FontSizeAttribute, null), React__default.createElement(FontSizeContent, null));
};

var FontWeightAttribute = reactRedux.connect(make.mapFontWeight)(function (_ref) {
  var _ref$fontWeight = _ref.fontWeight,
      view = _ref$fontWeight.view,
      viewable = _ref$fontWeight.viewable;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable
  });
});
var FontWeightContent = reactRedux.connect(make.mapFontWeightContent, {
  addFontWeight: make.addFontWeight,
  removeFontWeight: make.removeFontWeight,
  updateFontWeight: make.updateFontWeight
})(function (_ref2) {
  var content = _ref2.content,
      addFontWeight = _ref2.addFontWeight,
      removeFontWeight = _ref2.removeFontWeight,
      updateFontWeight = _ref2.updateFontWeight;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeFontWeight,
    update: updateFontWeight
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addFontWeight
  }));
});

var FontWeight = function FontWeight() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(FontWeightAttribute, null), React__default.createElement(FontWeightContent, null));
};

var ColorAttribute = reactRedux.connect(make.mapColor, {
  updateColorView: make.updateColorView
})(function (_ref) {
  var _ref$color = _ref.color,
      view = _ref$color.view,
      viewable = _ref$color.viewable,
      updateColorView = _ref.updateColorView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateColorView
  });
});
var ColorContent = reactRedux.connect(make.mapColorContent, {
  addColor: make.addColor,
  removeColor: make.removeColor,
  updateColor: make.updateColor
})(function (_ref2) {
  var content = _ref2.content,
      addColor = _ref2.addColor,
      removeColor = _ref2.removeColor,
      updateColor = _ref2.updateColor;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeColor,
    update: updateColor
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addColor
  }));
});

var Color = function Color() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(ColorAttribute, null), React__default.createElement(ColorContent, null));
};

var SpacingAttribute = reactRedux.connect(make.mapSpacing, {
  updateSpacingView: make.updateSpacingView
})(function (_ref) {
  var _ref$spacing = _ref.spacing,
      view = _ref$spacing.view,
      viewable = _ref$spacing.viewable,
      updateSpacingView = _ref.updateSpacingView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateSpacingView
  });
});
var SpacingContent = reactRedux.connect(make.mapSpacingContent, {
  addSpacing: make.addSpacing,
  removeSpacing: make.removeSpacing,
  updateSpacing: make.updateSpacing
})(function (_ref2) {
  var content = _ref2.content,
      addSpacing = _ref2.addSpacing,
      removeSpacing = _ref2.removeSpacing,
      updateSpacing = _ref2.updateSpacing;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeContent, {
    content: content,
    remove: removeSpacing,
    update: updateSpacing
  }), React__default.createElement(AddUnit, {
    nextOrdinal: content.length + 1,
    add: addSpacing
  }));
});

var Spacing = function Spacing() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(SpacingAttribute, null), React__default.createElement(SpacingContent, null));
};

var BaseFontSizeAttribute = reactRedux.connect(make.mapBaseFontSize)(function (_ref) {
  var _ref$baseFontSize = _ref.baseFontSize,
      view = _ref$baseFontSize.view,
      viewable = _ref$baseFontSize.viewable;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable
  });
});
var BaseFontSizeContent = reactRedux.connect(make.mapBaseFontSizeContent, {
  updateBaseFontSize: make.updateBaseFontSize
})(function (_ref2) {
  var content = _ref2.content,
      updateBaseFontSize = _ref2.updateBaseFontSize;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeBaseContent, {
    content: content,
    update: updateBaseFontSize
  }));
});

var BaseFontSize = function BaseFontSize() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(BaseFontSizeAttribute, null), React__default.createElement(BaseFontSizeContent, null));
};

var BaseLineHeightAttribute = reactRedux.connect(make.mapBaseLineHeight, {
  updateBaseLineHeightView: make.updateBaseLineHeightView
})(function (_ref) {
  var _ref$baseLineHeight = _ref.baseLineHeight,
      view = _ref$baseLineHeight.view,
      viewable = _ref$baseLineHeight.viewable,
      updateBaseLineHeightView = _ref.updateBaseLineHeightView;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable,
    updateView: updateBaseLineHeightView
  });
});
var BaseLineHeightContent = reactRedux.connect(make.mapBaseLineHeightContent, {
  updateBaseLineHeight: make.updateBaseLineHeight
})(function (_ref2) {
  var content = _ref2.content,
      updateBaseLineHeight = _ref2.updateBaseLineHeight;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeBaseContent, {
    content: content,
    update: updateBaseLineHeight
  }));
});

var BaseLineHeight = function BaseLineHeight() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(BaseLineHeightAttribute, null), React__default.createElement(BaseLineHeightContent, null));
};

var BaseSpacingAttribute = reactRedux.connect(make.mapBaseSpacing)(function (_ref) {
  var _ref$baseSpacing = _ref.baseSpacing,
      view = _ref$baseSpacing.view,
      viewable = _ref$baseSpacing.viewable;
  return React__default.createElement(Attribute, {
    view: view,
    viewable: viewable
  });
});
var BaseSpacingContent = reactRedux.connect(make.mapBaseSpacingContent, {
  updateBaseSpacing: make.updateBaseSpacing
})(function (_ref2) {
  var content = _ref2.content,
      updateBaseSpacing = _ref2.updateBaseSpacing;
  return React__default.createElement(React.Fragment, null, React__default.createElement(AttributeBaseContent, {
    content: content,
    update: updateBaseSpacing
  }));
});

var BaseSpacing = function BaseSpacing() {
  return React__default.createElement(make.SimpleList.OneColumn, null, React__default.createElement(BaseSpacingAttribute, null), React__default.createElement(BaseSpacingContent, null));
};

exports.Globals = Globals;
exports.Swatch = Swatch;
exports.FontFace = FontFace;
exports.FontFamily = FontFamily;
exports.FontSize = FontSize;
exports.FontWeight = FontWeight;
exports.Color = Color;
exports.Spacing = Spacing;
exports.BaseFontSize = BaseFontSize;
exports.BaseLineHeight = BaseLineHeight;
exports.BaseSpacing = BaseSpacing;
//# sourceMappingURL=index.js.map
