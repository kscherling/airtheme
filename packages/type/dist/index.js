'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@airtheme/core');
var fp = require('fp');

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Unit factor type
 */
var Factor = {
  __schemaname: 'Unit',
  __typename: 'Factor',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit hex type
   */

};
var Hex = {
  __schemaname: 'Unit',
  __typename: 'Hex',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit hexa type
   */

};
var Hexa = {
  __schemaname: 'Unit',
  __typename: 'Hexa',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit px type
   */

};
var Px = {
  __schemaname: 'Unit',
  __typename: 'Px',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit reference type
   */

};
var Reference = {
  __schemaname: 'Unit',
  __typename: 'Reference',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit rem type
   */

};
var Rem = {
  __schemaname: 'Unit',
  __typename: 'Rem',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit rgb type
   */

};
var Rgb = {
  __schemaname: 'Unit',
  __typename: 'Rgb',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit rgba type
   */

};
var Rgba = {
  __schemaname: 'Unit',
  __typename: 'Rgba',
  name: '',
  ordinal: 0,
  value: ''
  /**
   * Unit string type
   */

};
var Str = {
  __schemaname: 'Unit',
  __typename: 'String',
  name: '',
  ordinal: 0,
  value: ''
};

/**
 * Unit schema type
 */
var Unit = {
  __schemaname: 'Unit',
  __typename: '',
  name: '',
  ordinal: 0,
  value: ''
};

/**
 * @name factoryForUnit
 * Unit factory for
 */
var factoryForUnit = function factoryForUnit(schema) {
  return function (options) {
    return _objectSpread({}, schema, options);
  };
};

var Factor$1 = Factor,
    Hex$1 = Hex,
    Hexa$1 = Hexa,
    Px$1 = Px,
    Reference$1 = Reference,
    Rem$1 = Rem,
    Rgb$1 = Rgb,
    Rgba$1 = Rgba,
    Str$1 = Str;
var unit = {
  factor: factoryForUnit(Factor$1, Unit),
  hex: factoryForUnit(Hex$1, Unit),
  hexa: factoryForUnit(Hexa$1, Unit),
  px: factoryForUnit(Px$1, Unit),
  reference: factoryForUnit(Reference$1, Unit),
  rem: factoryForUnit(Rem$1, Unit),
  rgb: factoryForUnit(Rgb$1, Unit),
  rgba: factoryForUnit(Rgba$1, Unit),
  string: factoryForUnit(Str$1, Unit)
};

var _BaseFontSize, _BaseLineHeight, _BaseSpacing;

/**
 * Base font size object
 */
var BaseFontSize = (_BaseFontSize = {
  __schemaname: 'Attribute'
}, _defineProperty(_BaseFontSize, "__schemaname", 'Attribute'), _defineProperty(_BaseFontSize, "__typename", 'BaseFontSize'), _defineProperty(_BaseFontSize, "content", unit.px()), _defineProperty(_BaseFontSize, "reference", null), _defineProperty(_BaseFontSize, "unit", 'Px'), _defineProperty(_BaseFontSize, "view", 'Px'), _defineProperty(_BaseFontSize, "viewable", ['Px']), _BaseFontSize);
/**
 * Base line height object
 */

var BaseLineHeight = (_BaseLineHeight = {
  __schemaname: 'Attribute'
}, _defineProperty(_BaseLineHeight, "__schemaname", 'Attribute'), _defineProperty(_BaseLineHeight, "__typename", 'BaseLineHeight'), _defineProperty(_BaseLineHeight, "content", unit.factor()), _defineProperty(_BaseLineHeight, "reference", 'base.baseFontSize'), _defineProperty(_BaseLineHeight, "unit", 'Factor'), _defineProperty(_BaseLineHeight, "view", 'Factor'), _defineProperty(_BaseLineHeight, "viewable", ['Factor', 'Px']), _BaseLineHeight);
/**
 * Base spacing object
 */

var BaseSpacing = (_BaseSpacing = {
  __schemaname: 'Attribute'
}, _defineProperty(_BaseSpacing, "__schemaname", 'Attribute'), _defineProperty(_BaseSpacing, "__typename", 'BaseSpacing'), _defineProperty(_BaseSpacing, "content", unit.px()), _defineProperty(_BaseSpacing, "reference", null), _defineProperty(_BaseSpacing, "unit", 'Px'), _defineProperty(_BaseSpacing, "view", 'Px'), _defineProperty(_BaseSpacing, "viewable", ['Px']), _BaseSpacing);
/**
 * Color object
 */

var Color = {
  __schemaname: 'Attribute',
  __typename: 'Color',
  content: [],
  reference: 'swatch',
  unit: 'Reference',
  view: 'Reference',
  viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
  /**
   * Font face object
   */

};
var FontFace = {
  __schemaname: 'Attribute',
  __typename: 'FontFace',
  content: [],
  reference: null,
  unit: 'String',
  view: 'String',
  viewable: ['String']
  /**
   * Font family object
   */

};
var FontFamily = {
  __schemaname: 'Attribute',
  __typename: 'FontFamily',
  content: [],
  reference: 'fontFace',
  unit: 'Reference',
  view: 'Reference',
  viewable: ['Reference']
  /**
   * Font size object
   */

};
var FontSize = {
  __schemaname: 'Attribute',
  __typename: 'FontSize',
  content: [],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor',
  viewable: ['Factor', 'Px', 'Rem']
  /**
   * Font weight object
   */

};
var FontWeight = {
  __schemaname: 'Attribute',
  __typename: 'FontWeight',
  content: [],
  reference: null,
  unit: 'String',
  view: 'String',
  viewable: ['String']
  /**
   * Line height object
   */

};
var LineHeight = {
  __schemaname: 'Attribute',
  __typename: 'LineHeight',
  content: [],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor',
  viewable: ['Factor', 'Px']
  /**
   * Spacing object
   */

};
var Spacing = {
  __schemaname: 'Attribute',
  __typename: 'Spacing',
  content: [],
  reference: 'base.baseSpacing',
  unit: 'Factor',
  view: 'Factor',
  viewable: ['Factor', 'Px']
  /**
   * Swatch object
   */

};
var Swatch = {
  __schemaname: 'Attribute',
  __typename: 'Swatch',
  content: [],
  reference: null,
  unit: 'Hexa',
  view: 'Hexa',
  viewable: ['Hex', 'Hexa', 'Rgb', 'Rgba']
};

/**
 * Attribute schema object.
 */
var Attribute = {
  __schemaname: 'Attribute',
  __typename: '',
  content: [],
  reference: '',
  unit: '',
  view: '',
  viewable: []
};

/**
 * @name factoryForAttribute
 * Attribute factory for
 */
var factoryForAttribute = function factoryForAttribute(schema) {
  return function (options) {
    return _objectSpread({}, schema, options);
  };
};

var _attribute;
var Color$1 = Color,
    FontFamily$1 = FontFamily,
    FontSize$1 = FontSize,
    FontFace$1 = FontFace,
    FontWeight$1 = FontWeight,
    LineHeight$1 = LineHeight,
    Spacing$1 = Spacing,
    Swatch$1 = Swatch,
    BaseSpacing$1 = BaseSpacing,
    BaseLineHeight$1 = BaseLineHeight,
    BaseFontSize$1 = BaseFontSize;
var attribute = (_attribute = {
  baseFontSize: factoryForAttribute(BaseFontSize$1, Attribute),
  baseSpacing: factoryForAttribute(BaseSpacing$1, Attribute),
  baseLineHeight: factoryForAttribute(BaseLineHeight$1, Attribute),
  color: factoryForAttribute(Color$1, Attribute),
  fontFamily: factoryForAttribute(FontFamily$1, Attribute),
  fontSize: factoryForAttribute(FontSize$1, Attribute),
  fontWeight: factoryForAttribute(FontWeight$1, Attribute),
  lineHeight: factoryForAttribute(LineHeight$1, Attribute),
  fontFace: factoryForAttribute(FontFace$1, Attribute)
}, _defineProperty(_attribute, "fontFamily", factoryForAttribute(FontFamily$1, Attribute)), _defineProperty(_attribute, "spacing", factoryForAttribute(Spacing$1, Attribute)), _defineProperty(_attribute, "swatch", factoryForAttribute(Swatch$1, Attribute)), _attribute);

/**
 * @description Setting schema object.
 */
var SettingSchema = {
  __schemaname: 'Setting',
  __typename: 'Base',
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
};

/**
 * @description Setting base (default) type
 */
var Base = {
  __schemaname: 'Setting',
  __typename: 'Base',
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
};

/**
 * @name factoryForSetting
 * Setting factory for
 */
var factoryForSetting = function factoryForSetting(schema) {
  return function (options) {
    return _objectSpread({}, schema, options);
  };
};

var Base$1 = Base;
var setting = {
  base: factoryForSetting(Base$1, SettingSchema)
};

/**
 * @description Base base (default) type
 */
var Base$2 = {
  __schemaname: 'Base',
  __typename: 'Base',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
};

/**
 * @name factoryForBase
 * Base factory for
 */
var factoryForBase = function factoryForBase(schema) {
  return function (options) {
    return _objectSpread({}, schema, options);
  };
};

var Base$3 = Base$2;
var root = {
  base: factoryForBase(Base$3)
};

/**
 * @description Theme base (default) type
 */
var Base$4 = {
  __schemaname: 'Theme',
  __typename: 'Base',
  base: root.base(),
  fontFace: attribute.fontFace(),
  id: '',
  name: '',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: core.VERSION
};

/**
 * @name factoryForTheme
 * Theme factory for
 */
var factoryForTheme = function factoryForTheme(schema) {
  return function (options) {
    return _objectSpread({}, schema, options);
  };
};

var Base$5 = Base$4;
var theme = {
  base: factoryForTheme(Base$5)
};

/**
 *  @description Theme schema type
 */
// Included Base typename for ease.  Technically we are mixing types and interfaces
// Theme shouldn't necessarally be an interface and can be more of a type.

var Theme = {
  __schemaname: 'Theme',
  __typename: 'Base',
  base: root.base(),
  fontFace: attribute.fontFace(),
  id: '',
  name: '',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: core.VERSION
};

/**
 * @description Base schema object.
 */
var Base$6 = {
  __schemaname: 'Base',
  __typename: 'Base',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
};

var getReferencedAttribute = function getReferencedAttribute(_ref, theme) {
  var reference = _ref.reference;
  return fp.dig(reference, theme);
};

var downcase = function downcase(str) {
  return str && str.toLowerCase();
};

var deserializeFactor = function deserializeFactor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitVal = _ref.value,
      unitName = _ref.name;

  var attribute = arguments.length > 1 ? arguments[1] : undefined;
  var theme = arguments.length > 2 ? arguments[2] : undefined;

  // TODO: Does not account for arrays of units (base only)
  var _getReferencedAttribu = getReferencedAttribute(attribute, theme),
      _getReferencedAttribu2 = _getReferencedAttribu.content;

  _getReferencedAttribu2 = _getReferencedAttribu2 === void 0 ? {} : _getReferencedAttribu2;
  var refValue = _getReferencedAttribu2.value,
      __typename = _getReferencedAttribu2.__typename;
  return _defineProperty({}, unitName, "".concat(refValue * unitVal).concat(downcase(__typename)));
};

var downcase$1 = function downcase(str) {
  return str && str.toLowerCase();
};

var deserializePx = function deserializePx() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitVal = _ref.value,
      unitName = _ref.name,
      __typename = _ref.__typename;

  return _defineProperty({}, unitName, "".concat(unitVal).concat(downcase$1(__typename)));
};

var deserializeString = function deserializeString() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitVal = _ref.value,
      unitName = _ref.name;

  return _defineProperty({}, unitName, "".concat(unitVal));
};

var deserializeReference = function deserializeReference() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitVal = _ref.value,
      unitName = _ref.name;

  var attribute = arguments.length > 1 ? arguments[1] : undefined;
  var theme = arguments.length > 2 ? arguments[2] : undefined;
  var referencedAttribute = getReferencedAttribute(attribute, theme);

  if (!referencedAttribute) {
    console.warn("Attempting to deserialize an unknown reference: ".concat(attribute.reference));
    return;
  }

  if (referencedAttribute.unit === 'reference') {
    console.warn('Attempting to deserialize a circular reference. \
      An attribute reference cannot point to another reference');
    return;
  }

  var refUnitVal = fp.dig(unitVal, deserialize$1(referencedAttribute, theme));
  return _defineProperty({}, unitName, "".concat(refUnitVal));
};

var tinycolor = require('tinycolor2');

var toCssColorString = function toCssColorString(hexa) {
  var opaque = /^#\S{6}ff$/i;
  var isOpaque = opaque.test(hexa);
  return isOpaque ? tinycolor(hexa).toHexString() : tinycolor(hexa).toRgbString();
};

var deserializeHexa = function deserializeHexa() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitValue = _ref.value,
      unitName = _ref.name;

  return _defineProperty({}, unitName, "".concat(toCssColorString(unitValue)));
};



var deserializers = /*#__PURE__*/Object.freeze({
  Factor: deserializeFactor,
  Px: deserializePx,
  String: deserializeString,
  Reference: deserializeReference,
  Hexa: deserializeHexa
});

var deserialize = function deserialize(unit, attribute, theme) {
  if (!deserializers[unit.__typename]) {
    console.warn("Attempting to deserialize an unknown unit type: ".concat(unit.__typename));
    return;
  }

  return deserializers[unit.__typename](unit, attribute, theme);
};

/*
Accepts an attribute __typename and theme __typename
Returns __typename of deserialzied values
must pass attribute and theme __typename for reference

fontSize: {
  view: "factor",
  viewable: [ "factor", "px", "rem" ],
  reference: "baseFontSize",
  __typename: "fontSize",
  unit: "factor"
  content: [
    { name: "xs", ordinal: 1, __typename: "factor", value: "0.8" },
    { name: "sm", ordinal: 2, __typename: "factor", value: "0.9" },
    { name: "md", ordinal: 3, __typename: "factor", value: "1" },
    { name: "lg", ordinal: 4, __typename: "factor", value: "1.1" },
    { name: "xl", ordinal: 5, __typename: "factor", value: "1.2" },
    { name: "xxl", ordinal: 6, __typename: "factor", value: "1.3" }
  ],
},

{
  xs: '0.8rem',
  sm: '0.9rem',
  md: '1rem',
  ...
}
*/

var isEmpty = function isEmpty(_ref) {
  var content = _ref.content;
  return Array.isArray(content) ? !Boolean(content.length) : !Boolean(content);
};

var validTypes = function validTypes() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      content = _ref2.content,
      unit = _ref2.unit;

  return Array.isArray(content) ? content.length && unit === content[0].__typename : content && unit === content.__typename;
};

var deserialize$1 = function deserialize$$1(attribute, theme) {
  console.log('attribute', attribute);
  console.log('theme', theme);

  if (isEmpty(attribute)) {
    console.warn('Content is empty');
    return;
  }

  if (!validTypes(attribute)) {
    console.warn('Attempting to deserialize a type mismatch');
    return;
  }

  if (Array.isArray(attribute.content)) {
    return attribute.content.reduce(function (acc, unit) {
      return _objectSpread({}, acc, deserialize(unit, attribute, theme));
    }, {});
  }

  return deserialize(attribute.content, attribute, theme);
};

exports.theme = theme;
exports.themeSchema = Theme;
exports.factoryForTheme = factoryForTheme;
exports.base = root;
exports.baseSchema = Base$6;
exports.factoryForBase = factoryForBase;
exports.setting = setting;
exports.settingSchema = SettingSchema;
exports.factoryForSetting = factoryForSetting;
exports.attribute = attribute;
exports.attributeSchema = Attribute;
exports.factoryForAttribute = factoryForAttribute;
exports.deserializeAttribute = deserialize$1;
exports.unit = unit;
exports.unitSchema = Unit;
exports.factoryForUnit = factoryForUnit;
//# sourceMappingURL=index.js.map
