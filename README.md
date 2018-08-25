# Airtheme

## @airtheme/type

Contains Airtheme types and constants shared across packages.

#### Classes

---

#### `theme`

- `theme`
- `themeSchema`
- `factoryForTheme`

##### sub-classes

- `base`

##### schema

- `id`
- `name`
- `baseSpacing`
- `baseFontSize`
- `baseLineHeight`
- `types`
- `version`
- `swatch`
- `fontFace`
- `setting`

---

#### `setting`

- `setting`
- `settingSchema`
- `factoryForSetting`

##### sub-classes

- `base`

##### schema

- `color`
- `fontFamily`
- `fontSize`
- `fontWeight`
- `spacing`

---

#### `attribute`

- `attribute`
- `attributeSchema`
- `factoryForAttribute`

##### sub-classes

- `color`
- `fontFace`
- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `spacing`
- `swatch`

##### schema

- `content`
- `view`
- `viewable`
- `reference`
- `type`
- `unit`

---

#### `unit`

- `unit`
- `unitSchema`
- `factoryForUnit`

##### sub-classes

- `factor`
- `hex`
- `hexa`
- `px`
- `reference`
- `rem`
- `rgb`
- `rgba`
- `string`

##### schema

- `reference`
- `ordinal`
- `type`
- `value`

## @airtheme/core

Contains common Airtheme utilities.

## @airtheme/make

Redux store and actions for working with an Airtheme object.

## @airtheme/assembly

Serializes Airtheme object in css-in-js consumable obj. Build script for generating dynamically, outputing to project.

## @airtheme/transform

Transform theme types between compatable
