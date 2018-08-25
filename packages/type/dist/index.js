'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

const _ROOT_ATTRIBUTE_ = 'attribute';
const COLOR = 'color';
const FONT_SIZE = 'fontSize';
const FONT_WEIGHT = 'fontWeight';
const LINE_HEIGHT = 'lineHeight';
const FONT_FACE = 'fontFace';
const FONT_FAMILY = 'fontFamily';
const SPACING = 'spacing';
const SWATCH = 'swatch';

const BASE_FONT_SIZE_KEY = 'baseFontSize';
const BASE_LINE_HEIGHT_KEY = 'baseLineHeight';
const BASE_SPACING_KEY = 'baseSpacing';
const COLOR_KEY = 'color';
const FONT_FAMILY_KEY = 'fontFamily';
const FONT_SIZE_KEY = 'fontSize';
const FONT_WEIGHT_KEY = 'fontWeight';
const SETTING_KEY = 'setting';
const SPACING_KEY = 'spacing';
const SWATCH_KEY = 'swatch';
const UTILITY_KEY = 'utility';

const BASE_FONT_SIZE_PATH = BASE_FONT_SIZE_KEY;
const BASE_LINE_HEIGHT_PATH = BASE_LINE_HEIGHT_KEY;
const BASE_SPACING_PATH = BASE_SPACING_KEY;
const COLOR_PATH = `${SETTING_KEY}.${COLOR_KEY}`;
const FONT_FAMILY_PATH = `${SETTING_KEY}.${FONT_FAMILY_KEY}`;
const FONT_SIZE_PATH = `${SETTING_KEY}.${FONT_SIZE_KEY}`;
const FONT_WEIGHT_PATH = `${SETTING_KEY}.${FONT_WEIGHT_KEY}`;
const SETTING_PATH = SETTING_KEY;
const SPACING_PATH = `${SETTING_KEY}.${SPACING_KEY}`;
const SWATCH_PATH = SWATCH_KEY;
const UTILITY_PATH = UTILITY_KEY;

const _ROOT_THEME_ = 'airtheme';
const BASIC = 'airthemeBasic';

const _ROOT_UNIT_ = 'unit';
const STRING = 'string';
const FACTOR = 'factor';
const HEX = 'hex';
const HEXA = 'hexa';
const PX = 'px';
const REFERENCE = 'reference';
const REM = 'rem';
const RGB = 'rgb';
const RGBA = 'rgba';

const VERSION = '0.1.0';

exports._ROOT_ATTRIBUTE_ = _ROOT_ATTRIBUTE_;
exports.COLOR = COLOR;
exports.FONT_SIZE = FONT_SIZE;
exports.FONT_WEIGHT = FONT_WEIGHT;
exports.LINE_HEIGHT = LINE_HEIGHT;
exports.FONT_FACE = FONT_FACE;
exports.FONT_FAMILY = FONT_FAMILY;
exports.SPACING = SPACING;
exports.SWATCH = SWATCH;
exports.BASE_FONT_SIZE_KEY = BASE_FONT_SIZE_KEY;
exports.BASE_LINE_HEIGHT_KEY = BASE_LINE_HEIGHT_KEY;
exports.BASE_SPACING_KEY = BASE_SPACING_KEY;
exports.COLOR_KEY = COLOR_KEY;
exports.FONT_FAMILY_KEY = FONT_FAMILY_KEY;
exports.FONT_SIZE_KEY = FONT_SIZE_KEY;
exports.FONT_WEIGHT_KEY = FONT_WEIGHT_KEY;
exports.SETTING_KEY = SETTING_KEY;
exports.SPACING_KEY = SPACING_KEY;
exports.SWATCH_KEY = SWATCH_KEY;
exports.UTILITY_KEY = UTILITY_KEY;
exports.BASE_FONT_SIZE_PATH = BASE_FONT_SIZE_PATH;
exports.BASE_LINE_HEIGHT_PATH = BASE_LINE_HEIGHT_PATH;
exports.BASE_SPACING_PATH = BASE_SPACING_PATH;
exports.COLOR_PATH = COLOR_PATH;
exports.FONT_FAMILY_PATH = FONT_FAMILY_PATH;
exports.FONT_SIZE_PATH = FONT_SIZE_PATH;
exports.FONT_WEIGHT_PATH = FONT_WEIGHT_PATH;
exports.SETTING_PATH = SETTING_PATH;
exports.SPACING_PATH = SPACING_PATH;
exports.SWATCH_PATH = SWATCH_PATH;
exports.UTILITY_PATH = UTILITY_PATH;
exports._ROOT_THEME_ = _ROOT_THEME_;
exports.BASIC = BASIC;
exports._ROOT_UNIT_ = _ROOT_UNIT_;
exports.STRING = STRING;
exports.FACTOR = FACTOR;
exports.HEX = HEX;
exports.HEXA = HEXA;
exports.PX = PX;
exports.REFERENCE = REFERENCE;
exports.REM = REM;
exports.RGB = RGB;
exports.RGBA = RGBA;
exports.VERSION = VERSION;
});

unwrapExports(dist);
var dist_1 = dist._ROOT_ATTRIBUTE_;
var dist_2 = dist.COLOR;
var dist_3 = dist.FONT_SIZE;
var dist_4 = dist.FONT_WEIGHT;
var dist_5 = dist.LINE_HEIGHT;
var dist_6 = dist.FONT_FACE;
var dist_7 = dist.FONT_FAMILY;
var dist_8 = dist.SPACING;
var dist_9 = dist.SWATCH;
var dist_10 = dist.BASE_FONT_SIZE_KEY;
var dist_11 = dist.BASE_LINE_HEIGHT_KEY;
var dist_12 = dist.BASE_SPACING_KEY;
var dist_13 = dist.COLOR_KEY;
var dist_14 = dist.FONT_FAMILY_KEY;
var dist_15 = dist.FONT_SIZE_KEY;
var dist_16 = dist.FONT_WEIGHT_KEY;
var dist_17 = dist.SETTING_KEY;
var dist_18 = dist.SPACING_KEY;
var dist_19 = dist.SWATCH_KEY;
var dist_20 = dist.UTILITY_KEY;
var dist_21 = dist.BASE_FONT_SIZE_PATH;
var dist_22 = dist.BASE_LINE_HEIGHT_PATH;
var dist_23 = dist.BASE_SPACING_PATH;
var dist_24 = dist.COLOR_PATH;
var dist_25 = dist.FONT_FAMILY_PATH;
var dist_26 = dist.FONT_SIZE_PATH;
var dist_27 = dist.FONT_WEIGHT_PATH;
var dist_28 = dist.SETTING_PATH;
var dist_29 = dist.SPACING_PATH;
var dist_30 = dist.SWATCH_PATH;
var dist_31 = dist.UTILITY_PATH;
var dist_32 = dist._ROOT_THEME_;
var dist_33 = dist.BASIC;
var dist_34 = dist._ROOT_UNIT_;
var dist_35 = dist.STRING;
var dist_36 = dist.FACTOR;
var dist_37 = dist.HEX;
var dist_38 = dist.HEXA;
var dist_39 = dist.PX;
var dist_40 = dist.REFERENCE;
var dist_41 = dist.REM;
var dist_42 = dist.RGB;
var dist_43 = dist.RGBA;
var dist_44 = dist.VERSION;

// Attribute
// type for a theme attribute, has many units

var schema = {
  // content
  // Object : key/val store for settings. User selected.

  content: [],

  // display
  // The unit the content items are displayed. User selected.

  display: null,

  // displays
  // Array : Units this type can serialize to.

  displays: [],

  // reference
  // A string namespace global reference

  reference: null,

  // type
  // The name of the type. The same as the 'class'

  type: dist_1,

  // unit
  // The unit the content items are stored. Static.

  unit: null
};

// prettier-ignore
const factoryFor = ({
  type,
  display,
  unit,
  displays,
  reference,
  content
} = {}, schema = {}) => ({
  display: factoryDisplay,
  content: factoryContent
} = {}) => Object.assign({}, schema, {
  type: type || schema.type,
  display: factoryDisplay || display || schema.display,
  unit: unit || schema.unit,
  displays: displays || schema.displays,
  reference: reference || schema.reference,
  content: factoryContent || content || schema.content
});

var color = {
  display: dist_40,
  displays: [dist_40, dist_37, dist_38, dist_42, dist_43],
  reference: dist_9,
  type: dist_2,
  unit: dist_40
};

var fontFamily = {
  display: dist_40,
  displays: [dist_40],
  reference: null,
  type: dist_7,
  unit: dist_40
};

var fontSize = {
  display: dist_36,
  displays: [dist_36, dist_39, dist_41],
  reference: dist_10,
  type: dist_3,
  unit: dist_36
};

var fontFace = {
  display: dist_35,
  displays: [dist_35],
  reference: null,
  type: dist_6,
  unit: dist_35
};

var fontWeight = {
  display: dist_35,
  displays: [dist_35],
  reference: null,
  type: dist_4,
  unit: dist_35
};

var lineHeight = {
  display: dist_36,
  displays: [dist_36, dist_39],
  reference: dist_10,
  type: dist_5,
  unit: dist_36
};

var spacing = {
  display: dist_36,
  displays: [dist_36, dist_39],
  reference: dist_12,
  type: dist_8,
  unit: dist_36
};

var swatch = {
  display: dist_38,
  displays: [dist_37, dist_38, dist_42, dist_43],
  reference: null,
  type: dist_9,
  unit: dist_38,
  content: []
};

const attribute = {
  color: factoryFor(color, schema),
  fontFamily: factoryFor(fontFamily, schema),
  fontSize: factoryFor(fontSize, schema),
  fontWeight: factoryFor(fontWeight, schema),
  lineHeight: factoryFor(lineHeight, schema),
  fontFace: factoryFor(fontFace, schema),
  fontFamily: factoryFor(fontFamily, schema),
  spacing: factoryFor(spacing, schema),
  swatch: factoryFor(swatch, schema)
};

// setting
// Settings hash

var schema$1 = {
  [dist_13]: attribute.color(),
  [dist_14]: attribute.fontFamily(),
  [dist_15]: attribute.fontSize(),
  [dist_16]: attribute.fontWeight(),
  [dist_18]: attribute.spacing()
};

// prettier-ignore
const factoryFor$1 = (schema = {}) => ({
  color = schema.color,
  fontFamily = schema.fontFamily,
  fontSize = schema.fontSize,
  fontWeight = schema.fontWeight,
  spacing = schema.spacing
} = {}) => Object.assign({}, {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
});

const setting = factoryFor$1(schema$1);

// theme
// The container object

var schema$2 = {
  // name
  // Friendly name of the theme

  name: null,

  // id
  // you know, the id

  id: null,

  // baseFontSize
  // string : the key of the unit

  baseFontSize: 16,

  // baseLineHeight
  // string : the key of the unit

  baseLineHeight: 1.15,

  // baseSpacing
  // string : the key of the unit

  baseSpacing: 16,

  // type
  // string : The name of the unit.

  type: dist_32,

  // version
  // string : the version of the airthemek

  version: dist_44,

  // swatch
  // Swatch : Swatch attribute type
  swatch: attribute.swatch(),

  // fontFace
  // FontFace : fontFace attribute type
  fontFace: attribute.fontFace(),

  // setting
  // Setting : Keyed object of attribute types

  setting: setting()
};

// theme
// The container object

var base = {
  name: 'Basic Airtheme',
  type: dist_33,
  baseFontSize: 16,
  baseLineHeight: 1.15,
  baseSpacing: 16,
  version: dist_44
};

const factoryFor$2 = ({
  name,
  id,
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  fontFace,
  swatch,
  setting
} = {}, schema) => ({
  name: instanceName,
  id: instanceId,
  baseFontSize: instanceBaseFontSize,
  baseLineHeight: instanceBaseLineHeight,
  baseSpacing: instanceBaseSpacing,
  fontFace: instanceFontFace,
  swatch: instanceSwatch,
  setting: instanceSetting
} = {}) => Object.assign({}, schema, {
  name: instanceName || name || schema.name,
  id: instanceId || id || schema.id,
  baseFontSize: instanceBaseFontSize || baseFontSize || schema.baseFontSize,
  baseLineHeight: instanceBaseLineHeight || baseLineHeight || schema.baseLineHeight,
  baseSpacing: instanceBaseSpacing || baseSpacing || schema.baseSpacing,
  fontFace: instanceFontFace || fontFace || schema.fontFace,
  swatch: instanceSwatch || swatch || schema.swatch,
  setting: instanceSetting || setting || schema.setting
});

const theme = {
  base: factoryFor$2(base, schema$2)
};

// unit
// A typed unit for communicating css units

var schema$3 = {
  // key
  // string : the key of the unit

  key: null,

  // ordinal
  // int : the stack order index

  ordinal: null,

  // type
  // string : The name of the unit.

  type: dist_34,

  // value
  // Any : The value of the unit

  value: null
};

// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances

// prettier-ignore
const factoryFor$3 = ({ type } = {}, schema) => ({ value, key, ordinal } = {}) => Object.assign({}, schema, { type }, {
  value: value || schema.value,
  key: key || schema.key,
  ordinal: ordinal || schema.ordinal
});

// factor (string)
// a relative unit multiplied by a reference

var factor = { type: dist_36 };

// hex (string)
// a hexidecimal color value

var hex = { type: dist_37 };

// hexa (string)
// A hex value follow by an alpha valu '#000000,0.5'
// NOTE: Units are serialized to the smallest css var that expresses

var hexa = { type: dist_38 };

// px (int)
// a px unit

var px = { type: dist_39 };

// reference (string)
// a string path of a theme global

var reference = { type: dist_40 };

// rem (int)
// a css rem unit

var rem = { type: dist_41 };

// rgb (string)
// a rgb color value: '0,0,0'

var rgb = { type: dist_42 };

// rgba (string)
// a rgba color value '0,0,0,0'

var rgba = { type: dist_43 };

// string (string)
// a non transformable value

var string = { type: dist_35 };

const unit = {
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

exports.attribute = attribute;
exports.theme = theme;
exports.unit = unit;
