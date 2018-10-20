'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@airtheme/core');
var fp = require('fp');

/**
 *  @description Theme schema object.
 */
var ThemeSchema = {
  __schemaname: 'Theme',
  __typename: null,
  base: null,
  fontFace: null,
  id: null,
  name: null,
  setting: null,
  swatch: null,
  version: null
};

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
 * @description Attribute schema object.
 */
var AttributeSchema = {
  __schemaname: 'Attribute',
  __typename: null,
  content: [],
  object: null,
  reference: null,
  unit: null,
  view: null,
  viewable: null
};

// prettier-ignore
var factoryFor = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      object = _ref.object,
      view = _ref.view,
      unit = _ref.unit,
      viewable = _ref.viewable,
      reference = _ref.reference,
      content = _ref.content;

  var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        factoryDisplay = _ref2.view,
        factoryContent = _ref2.content;

    return Object.assign({}, schema, {
      object: object || schema.object,
      view: factoryDisplay || view || schema.view,
      unit: unit || schema.unit,
      viewable: viewable || schema.viewable,
      reference: reference || schema.reference,
      content: factoryContent || content || schema.content
    });
  };
};

var color = {
  view: core.REFERENCE,
  viewable: [core.REFERENCE, core.HEX, core.HEXA, core.RGB, core.RGBA],
  reference: core.SWATCH,
  object: core.COLOR,
  unit: core.REFERENCE
};

var fontFamily = {
  view: core.REFERENCE,
  viewable: [core.REFERENCE, core.STRING],
  reference: core.FONT_FACE,
  object: core.FONT_FAMILY,
  unit: core.REFERENCE
};

var fontSize = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX, core.REM],
  reference: core.BASE_FONT_SIZE_PATH,
  object: core.FONT_SIZE,
  unit: core.FACTOR
};

var fontFace = {
  view: core.STRING,
  viewable: [core.STRING],
  reference: null,
  object: core.FONT_FACE,
  unit: core.STRING
};

var fontWeight = {
  view: core.STRING,
  viewable: [core.STRING],
  reference: null,
  object: core.FONT_WEIGHT,
  unit: core.STRING
};

var lineHeight = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX],
  reference: core.BASE_FONT_SIZE_PATH,
  object: core.LINE_HEIGHT,
  unit: core.FACTOR
};

var spacing = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX],
  reference: core.BASE_SPACING_PATH,
  object: core.SPACING,
  unit: core.FACTOR
};

var swatch = {
  view: core.HEXA,
  viewable: [core.HEX, core.HEXA, core.RGB, core.RGBA],
  reference: null,
  object: core.SWATCH,
  unit: core.HEXA,
  content: []
};

/**
 *  @description Unit schema object.
 */
var UnitSchema = {
  __schemaname: 'Unit',
  __typename: null,
  name: null,
  ordinal: null,
  value: null
};

// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances
// prettier-ignore
var factoryFor$1 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      object = _ref.object;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        value = _ref2.value,
        name = _ref2.name,
        ordinal = _ref2.ordinal;

    return Object.assign({}, schema, {
      object: object
    }, {
      value: value || schema.value,
      name: name || schema.name,
      ordinal: ordinal || schema.ordinal
    });
  };
};

// a relative unit multiplied by a reference

var factor = {
  object: core.FACTOR
};

// a hexidecimal color value

var hex = {
  object: core.HEX
};

// A hex value follow by an alpha valu '#000000,0.5'
// NOTE: Units are serialized to the smallest css var that expresses

var hexa = {
  object: core.HEXA
};

// a px unit

var px = {
  object: core.PX
};

// a string path of a theme global

var reference = {
  object: core.REFERENCE
};

// a css rem unit

var rem = {
  object: core.REM
};

// a rgb color value: '0,0,0'

var rgb = {
  object: core.RGB
};

// a rgba color value '0,0,0,0'

var rgba = {
  object: core.RGBA
};

// a non transformable value

var string = {
  object: core.STRING
};

var unit = {
  factor: factoryFor$1(factor, UnitSchema),
  hex: factoryFor$1(hex, UnitSchema),
  hexa: factoryFor$1(hexa, UnitSchema),
  px: factoryFor$1(px, UnitSchema),
  reference: factoryFor$1(reference, UnitSchema),
  rem: factoryFor$1(rem, UnitSchema),
  rgb: factoryFor$1(rgb, UnitSchema),
  rgba: factoryFor$1(rgba, UnitSchema),
  string: factoryFor$1(string, UnitSchema)
};

var baseSpacing = {
  view: core.PX,
  viewable: [core.PX],
  reference: null,
  object: core.BASE_SPACING,
  unit: core.PX,
  content: unit.px({
    name: 'baseSpacing',
    value: 16
  })
};

var baseLineHeight = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX],
  reference: core.BASE_FONT_SIZE_PATH,
  object: core.BASE_LINE_HEIGHT,
  unit: core.FACTOR,
  content: unit.factor({
    name: 'baseLineHeight',
    value: 1.15
  })
};

var baseFontSize = {
  view: core.PX,
  viewable: [core.PX],
  reference: null,
  object: core.BASE_FONT_SIZE,
  unit: core.PX,
  content: unit.px({
    name: 'baseFontSize',
    value: 16
  })
};

var _attribute;
var attribute = (_attribute = {
  baseFontSize: factoryFor(baseFontSize, AttributeSchema),
  baseSpacing: factoryFor(baseSpacing, AttributeSchema),
  baseLineHeight: factoryFor(baseLineHeight, AttributeSchema),
  color: factoryFor(color, AttributeSchema),
  fontFamily: factoryFor(fontFamily, AttributeSchema),
  fontSize: factoryFor(fontSize, AttributeSchema),
  fontWeight: factoryFor(fontWeight, AttributeSchema),
  lineHeight: factoryFor(lineHeight, AttributeSchema),
  fontFace: factoryFor(fontFace, AttributeSchema)
}, _defineProperty(_attribute, "fontFamily", factoryFor(fontFamily, AttributeSchema)), _defineProperty(_attribute, "spacing", factoryFor(spacing, AttributeSchema)), _defineProperty(_attribute, "swatch", factoryFor(swatch, AttributeSchema)), _attribute);

/**
 * @description Setting schema object.
 */
var SettingSchema = {
  __schemaname: 'Setting',
  __typename: null,
  color: {},
  fontFamily: {},
  fontSize: {},
  fontWeight: {},
  spacing: {}
};

var _COLOR_KEY$FONT_FAMIL;
// The base setting object

var base = (_COLOR_KEY$FONT_FAMIL = {}, _defineProperty(_COLOR_KEY$FONT_FAMIL, core.COLOR_KEY, attribute.color()), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_FAMILY_KEY, attribute.fontFamily()), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_SIZE_KEY, attribute.fontSize()), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_WEIGHT_KEY, attribute.fontWeight()), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.SPACING_KEY, attribute.spacing()), _COLOR_KEY$FONT_FAMIL);

// prettier-ignore
var factoryFor$2 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      spacing = _ref.spacing;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        instanceColor = _ref2.color,
        instanceFontFamily = _ref2.fontFamily,
        instanceFontSize = _ref2.fontSize,
        instanceFontWeight = _ref2.fontWeight,
        instanceSpacing = _ref2.spacing;

    return Object.assign({}, schema, {
      color: instanceColor || color || schema.color,
      fontFamily: instanceFontFamily || fontFamily || schema.fontFamily,
      fontSize: instanceFontSize || fontSize || schema.fontSize,
      fontWeight: instanceFontWeight || fontWeight || schema.fontWeight,
      spacing: instanceSpacing || spacing || schema.spacing
    });
  };
};

var setting = {
  base: factoryFor$2(base, SettingSchema)
};

/**
 * @description Base schema object.
 */
var BaseSchema = {
  __schemaname: 'Base',
  __typename: null,
  baseFontSize: {},
  baseLineHeight: {},
  baseSpacing: {}
};

var _BASE_FONT_SIZE_KEY$B;
// Root hash

var base$1 = (_BASE_FONT_SIZE_KEY$B = {}, _defineProperty(_BASE_FONT_SIZE_KEY$B, core.BASE_FONT_SIZE_KEY, attribute.baseFontSize()), _defineProperty(_BASE_FONT_SIZE_KEY$B, core.BASE_LINE_HEIGHT_KEY, attribute.baseLineHeight()), _defineProperty(_BASE_FONT_SIZE_KEY$B, core.BASE_SPACING_KEY, attribute.baseSpacing()), _BASE_FONT_SIZE_KEY$B);

var factoryFor$3 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      baseFontSize = _ref.baseFontSize,
      baseSpacing = _ref.baseSpacing,
      baseLineHeight = _ref.baseLineHeight;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        instanceBaseFontSize = _ref2.baseFontSize,
        instanceBaseSpacing = _ref2.baseSpacing,
        instanceBaseLineHeight = _ref2.baseLineHeight;

    return Object.assign({}, schema, {
      baseFontSize: instanceBaseFontSize || baseFontSize || schema.baseFontSize,
      baseSpacing: instanceBaseSpacing || baseSpacing || schema.baseSpacing,
      baseLineHeight: instanceBaseLineHeight || baseLineHeight || schema.baseLineHeight
    });
  };
};

var root = {
  base: factoryFor$3(base$1, BaseSchema)
};

var BaseType = {
  __typename: 'base',
  base: root.base(),
  fontFace: attribute.fontFace(),
  id: core.uuid(),
  name: 'Basic Airtheme',
  object: 'base',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: core.VERSION
};

var factoryFor$4 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      id = _ref.id,
      fontFace = _ref.fontFace,
      swatch = _ref.swatch,
      setting = _ref.setting,
      base = _ref.base;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        instanceName = _ref2.name,
        instanceId = _ref2.id,
        instanceFontFace = _ref2.fontFace,
        instanceSwatch = _ref2.swatch,
        instanceSetting = _ref2.setting,
        instanceBase = _ref2.base;

    return Object.assign({}, schema, {
      name: instanceName || name || schema.name,
      id: instanceId || id || schema.id,
      fontFace: instanceFontFace || fontFace || schema.fontFace,
      swatch: instanceSwatch || swatch || schema.swatch,
      setting: instanceSetting || setting || schema.setting,
      base: instanceBase || base || schema.base
    });
  };
};

var theme = {
  base: factoryFor$4(BaseType, ThemeSchema)
};

var getReferencedAttribute = function getReferencedAttribute(_ref, theme) {
  var reference = _ref.reference;
  return fp.dig(reference, theme);
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
      object = _getReferencedAttribu2.object;
  return _defineProperty({}, unitName, "".concat(refValue * unitVal).concat(object));
};

var deserializePx = function deserializePx() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      unitVal = _ref.value,
      unitName = _ref.name,
      unitObject = _ref.object;

  return _defineProperty({}, unitName, "".concat(unitVal).concat(unitObject));
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
  factor: deserializeFactor,
  px: deserializePx,
  string: deserializeString,
  reference: deserializeReference,
  hexa: deserializeHexa
});

var deserialize = function deserialize(unit, attribute, theme) {
  if (!deserializers[unit.object]) {
    console.warn("Attempting to deserialize an unknown unit type: ".concat(unit.object));
    return;
  }

  return deserializers[unit.object](unit, attribute, theme);
};

/*
Accepts an attribute object and theme object
Returns object of deserialzied values
must pass attribute and theme object for reference

fontSize: {
  view: "factor",
  viewable: [ "factor", "px", "rem" ],
  reference: "baseFontSize",
  object: "fontSize",
  unit: "factor"
  content: [
    { name: "xs", ordinal: 1, object: "factor", value: "0.8" },
    { name: "sm", ordinal: 2, object: "factor", value: "0.9" },
    { name: "md", ordinal: 3, object: "factor", value: "1" },
    { name: "lg", ordinal: 4, object: "factor", value: "1.1" },
    { name: "xl", ordinal: 5, object: "factor", value: "1.2" },
    { name: "xxl", ordinal: 6, object: "factor", value: "1.3" }
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

  return Array.isArray(content) ? content.length && unit === content[0].object : content && unit === content.object;
};

var deserialize$1 = function deserialize$$1(attribute, theme) {
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
exports.themeSchema = ThemeSchema;
exports.factoryForTheme = factoryFor$4;
exports.base = root;
exports.baseSchema = BaseSchema;
exports.factoryForBase = factoryFor$3;
exports.setting = setting;
exports.settingSchema = SettingSchema;
exports.factoryForSetting = factoryFor$2;
exports.attribute = attribute;
exports.attributeSchema = AttributeSchema;
exports.factoryForAttribute = factoryFor;
exports.deserializeAttribute = deserialize$1;
exports.unit = unit;
exports.unitSchema = UnitSchema;
exports.factoryForUnit = factoryFor$1;
//# sourceMappingURL=index.js.map
