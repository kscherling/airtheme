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

Constants and global utilities.

##### themeAttributes

- `_ROOT_ATTRIBUTE_`
- `COLOR`
- `FONT_SIZE`
- `FONT_WEIGHT`
- `LINE_HEIGHT`
- `FONT_FACE`
- `FONT_FAMILY`
- `SPACING`
- `SWATCH`

##### themeKeys

- `BASE_FONT_SIZE_KEY`
- `BASE_LINE_HEIGHT_KEY`
- `BASE_SPACING_KEY`
- `COLOR_KEY`
- `FONT_FAMILY_KEY`
- `FONT_SIZE_KEY`
- `FONT_WEIGHT_KEY`
- `SETTING_KEY`
- `SPACING_KEY`
- `SWATCH_KEY`
- `UTILITY_KEY`

##### themePaths

- `BASE_FONT_SIZE_PATH`
- `BASE_LINE_HEIGHT_PATH`
- `BASE_SPACING_PATH`
- `COLOR_PATH`
- `FONT_FAMILY_PATH`
- `FONT_SIZE_PATH`
- `FONT_WEIGHT_PATH`
- `SETTING_PATH`
- `SPACING_PATH`
- `SWATCH_PATH`
- `UTILITY_PATH`

##### themeThemes

- `_ROOT_THEME_`
- `BASIC`

##### themeUnits

- `_ROOT_UNIT_`
- `FACTOR`
- `HEX`
- `HEXA`
- `PX`
- `REFERENCE`
- `REM`
- `RGB`
- `RGBA`
- `STRING`

##### version

- `VERSION`

## @airtheme/make

Redux store and actions for working with an Airtheme object.

---

#### `Store`

- `makeStore( initialState : {} )`

##### Usage

```
import { makeStore } from '@airtheme/make'

const store = makeStore()

store.getState() // returns current theme object

store.dispatch( actionCreator( args : {} )) // update state
```

---

#### `Action Creators`

##### Usage

```
import { updateTheme } from '@airtheme/make'

...

store.dispatch(updateTheme({ theme }))
```

##### root

- `updateTheme`

##### theme

- `updateThemeName`
- `updateThemeId`
- `updateBaseFontSize`
- `updateBaseLineHeight`
- `updateBaseSpacing`

##### theme/swatch

- `addSwatch`
- `removeSwatch`
- `updateSwatch`

##### theme/setting/color

- `addColor`
- `removeColor`
- `updateColor`

##### theme/setting/fontFamily

- `addFontFamily`
- `removeFontFamily`
- `updateFontFamily`

##### theme/setting/fontSize

- `addFontSize`
- `removeFontSize`
- `updateFontSize`

##### theme/setting/fontWeight

- `addFontWeight`
- `removeFontWeight`
- `updateFontWeight`

##### theme/setting/spacing

- `addSpacing`
- `removeSpacing`
- `updateSpacing`

## @airtheme/assembly

Serializes Airtheme object in css-in-js consumable obj. Build script for generating dynamically, outputing to project.

## @airtheme/transform

Transform theme types between compatable
