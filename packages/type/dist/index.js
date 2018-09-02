'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@airtheme/core');

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

// type for a theme attribute, has many units

var schema = {
  // content
  // Object : reference/val store for settings. User selected.
  content: [],
  // view
  // The unit the content items are displayed. User selected.
  view: null,
  // viewable
  // Array : Units this type can serialize to.
  viewable: [],
  // reference
  // A string namespace global reference
  reference: null,
  // type
  // The name of the type. The same as the 'class'
  type: core._ROOT_ATTRIBUTE_,
  // unit
  // The unit the content items are stored. Static.
  unit: null
};

// prettier-ignore
var factoryFor = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      type = _ref.type,
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
      type: type || schema.type,
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
  type: core.COLOR,
  unit: core.REFERENCE
};

var fontFamily = {
  view: core.REFERENCE,
  viewable: [core.REFERENCE, core.STRING],
  reference: core.FONT_FACE,
  type: core.FONT_FAMILY,
  unit: core.REFERENCE
};

var fontSize = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX, core.REM],
  reference: core.BASE_FONT_SIZE_KEY,
  type: core.FONT_SIZE,
  unit: core.FACTOR
};

var fontFace = {
  view: core.STRING,
  viewable: [core.STRING],
  reference: null,
  type: core.FONT_FACE,
  unit: core.STRING
};

var fontWeight = {
  view: core.STRING,
  viewable: [core.STRING],
  reference: null,
  type: core.FONT_WEIGHT,
  unit: core.STRING
};

var lineHeight = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX],
  reference: core.BASE_FONT_SIZE_KEY,
  type: core.LINE_HEIGHT,
  unit: core.FACTOR
};

var spacing = {
  view: core.FACTOR,
  viewable: [core.FACTOR, core.PX],
  reference: core.BASE_SPACING_KEY,
  type: core.SPACING,
  unit: core.FACTOR
};

var swatch = {
  view: core.HEXA,
  viewable: [core.HEX, core.HEXA, core.RGB, core.RGBA],
  reference: null,
  type: core.SWATCH,
  unit: core.HEXA,
  content: []
};

var _attribute;
var attribute = (_attribute = {
  color: factoryFor(color, schema),
  fontFamily: factoryFor(fontFamily, schema),
  fontSize: factoryFor(fontSize, schema),
  fontWeight: factoryFor(fontWeight, schema),
  lineHeight: factoryFor(lineHeight, schema),
  fontFace: factoryFor(fontFace, schema)
}, _defineProperty(_attribute, "fontFamily", factoryFor(fontFamily, schema)), _defineProperty(_attribute, "spacing", factoryFor(spacing, schema)), _defineProperty(_attribute, "swatch", factoryFor(swatch, schema)), _attribute);

var _COLOR_KEY$FONT_FAMIL;
// Settings hash

var schema$1 = (_COLOR_KEY$FONT_FAMIL = {}, _defineProperty(_COLOR_KEY$FONT_FAMIL, core.COLOR_KEY, {}), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_FAMILY_KEY, {}), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_SIZE_KEY, {}), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.FONT_WEIGHT_KEY, {}), _defineProperty(_COLOR_KEY$FONT_FAMIL, core.SPACING_KEY, {}), _COLOR_KEY$FONT_FAMIL);

var _COLOR_KEY$FONT_FAMIL$1;
// The base setting object

var base = (_COLOR_KEY$FONT_FAMIL$1 = {}, _defineProperty(_COLOR_KEY$FONT_FAMIL$1, core.COLOR_KEY, attribute.color()), _defineProperty(_COLOR_KEY$FONT_FAMIL$1, core.FONT_FAMILY_KEY, attribute.fontFamily()), _defineProperty(_COLOR_KEY$FONT_FAMIL$1, core.FONT_SIZE_KEY, attribute.fontSize()), _defineProperty(_COLOR_KEY$FONT_FAMIL$1, core.FONT_WEIGHT_KEY, attribute.fontWeight()), _defineProperty(_COLOR_KEY$FONT_FAMIL$1, core.SPACING_KEY, attribute.spacing()), _COLOR_KEY$FONT_FAMIL$1);

// prettier-ignore
var factoryFor$1 = function factoryFor() {
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

    return Object.assign({}, {
      color: instanceColor || color || schema.color,
      fontFamily: instanceFontFamily || fontFamily || schema.fontFamily,
      fontSize: instanceFontSize || fontSize || schema.fontSize,
      fontWeight: instanceFontWeight || fontWeight || schema.fontWeight,
      spacing: instanceSpacing || spacing || schema.spacing
    });
  };
};

var setting = {
  base: factoryFor$1(base, schema$1)
};

// The container object

var schema$2 = {
  // name
  // Friendly name of the theme
  name: null,
  // id
  // you know, the id
  id: '',
  // baseFontSize
  // string : the reference of the unit
  baseFontSize: 16,
  // baseLineHeight
  // string : the reference of the unit
  baseLineHeight: 1.15,
  // baseSpacing
  // string : the reference of the unit
  baseSpacing: 16,
  // type
  // string : The name of the unit.
  type: core._ROOT_THEME_,
  // version
  // string : the version of the airthemek
  version: core.VERSION,
  // swatch
  // Swatch : Swatch attribute type
  swatch: attribute.swatch(),
  // fontFace
  // FontFace : fontFace attribute type
  fontFace: attribute.fontFace(),
  // setting
  // Setting : Keyed object of attribute types
  setting: setting.base()
};

// The container object

var base$1 = {
  name: 'Basic Airtheme',
  type: core.BASIC,
  baseFontSize: 16,
  baseLineHeight: 16,
  baseSpacing: 16,
  version: core.VERSION
};

var factoryFor$2 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      id = _ref.id,
      baseFontSize = _ref.baseFontSize,
      baseLineHeight = _ref.baseLineHeight,
      baseSpacing = _ref.baseSpacing,
      fontFace = _ref.fontFace,
      swatch = _ref.swatch,
      setting = _ref.setting;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        instanceName = _ref2.name,
        instanceId = _ref2.id,
        instanceBaseFontSize = _ref2.baseFontSize,
        instanceBaseLineHeight = _ref2.baseLineHeight,
        instanceBaseSpacing = _ref2.baseSpacing,
        instanceFontFace = _ref2.fontFace,
        instanceSwatch = _ref2.swatch,
        instanceSetting = _ref2.setting;

    return Object.assign({}, schema, {
      name: instanceName || name || schema.name,
      id: instanceId || id || schema.id,
      baseFontSize: instanceBaseFontSize || baseFontSize || schema.baseFontSize,
      baseLineHeight: instanceBaseLineHeight || baseLineHeight || schema.baseLineHeight,
      baseSpacing: instanceBaseSpacing || baseSpacing || schema.baseSpacing,
      fontFace: instanceFontFace || fontFace || schema.fontFace,
      swatch: instanceSwatch || swatch || schema.swatch,
      setting: instanceSetting || setting || schema.setting
    });
  };
};

var theme = {
  base: factoryFor$2(base$1, schema$2)
};

// A typed unit for communicating css units

var schema$3 = {
  // name
  // string : the friendly name
  name: null,
  // ordinal
  // int : the stack order index
  ordinal: null,
  // type
  // string : The name of the unit.
  type: core._ROOT_UNIT_,
  // value
  // Any : The value of the unit
  value: null
};

// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances
// prettier-ignore
var factoryFor$3 = function factoryFor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      type = _ref.type;

  var schema = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        value = _ref2.value,
        name = _ref2.name,
        ordinal = _ref2.ordinal;

    return Object.assign({}, schema, {
      type: type
    }, {
      value: value || schema.value,
      name: name || schema.name,
      ordinal: ordinal || schema.ordinal
    });
  };
};

// a relative unit multiplied by a reference

var factor = {
  type: core.FACTOR
};

// a hexidecimal color value

var hex = {
  type: core.HEX
};

// A hex value follow by an alpha valu '#000000,0.5'
// NOTE: Units are serialized to the smallest css var that expresses

var hexa = {
  type: core.HEXA
};

// a px unit

var px = {
  type: core.PX
};

// a string path of a theme global

var reference = {
  type: core.REFERENCE
};

// a css rem unit

var rem = {
  type: core.REM
};

// a rgb color value: '0,0,0'

var rgb = {
  type: core.RGB
};

// a rgba color value '0,0,0,0'

var rgba = {
  type: core.RGBA
};

// a non transformable value

var string = {
  type: core.STRING
};

var unit = {
  factor: factoryFor$3(factor, schema$3),
  hex: factoryFor$3(hex, schema$3),
  hexa: factoryFor$3(hexa, schema$3),
  px: factoryFor$3(px, schema$3),
  reference: factoryFor$3(reference, schema$3),
  rem: factoryFor$3(rem, schema$3),
  rgb: factoryFor$3(rgb, schema$3),
  rgba: factoryFor$3(rgba, schema$3),
  string: factoryFor$3(string, schema$3)
};

exports.theme = theme;
exports.themeSchema = schema$2;
exports.factoryForTheme = factoryFor$2;
exports.setting = setting;
exports.settingSchema = schema$1;
exports.factoryForSetting = factoryFor$1;
exports.attribute = attribute;
exports.attributeSchema = schema;
exports.factoryForAttribute = factoryFor;
exports.unit = unit;
exports.unitSchema = schema$3;
exports.factoryForUnit = factoryFor$3;
//# sourceMappingURL=index.js.map
