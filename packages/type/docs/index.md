<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [AttributeSchema][1]
-   [BaseFontSize][2]
-   [BaseLineHeight][3]
-   [Color][4]
-   [Color][5]
-   [FontFamily][6]
-   [FontSize][7]
-   [FontWeight][8]
-   [LineHeight][9]
-   [Spacing][10]
-   [Swatch][11]
-   [BaseSchema][12]
-   [Base][13]
-   [Base][14]
-   [AttributeST][15]
    -   [Properties][16]
-   [AttributeBaseFontSizeT][17]
    -   [Properties][18]
-   [AttributeBaseLineHeightT][19]
    -   [Properties][20]
-   [AttributeBaseSpacingT][21]
    -   [Properties][22]
-   [AttributeColorT][23]
    -   [Properties][24]
-   [AttributeFontFaceT][25]
    -   [Properties][26]
-   [AttributeFontFamilyT][27]
    -   [Properties][28]
-   [AttributeFontSizeT][29]
    -   [Properties][30]
-   [AttributeFontWeightT][31]
    -   [Properties][32]
-   [AttributeLineHeightT][33]
    -   [Properties][34]
-   [AttributeSpacingT][35]
    -   [Properties][36]
-   [AttributeSwatchT][37]
    -   [Properties][38]
-   [BaseST][39]
    -   [Properties][40]
-   [BaseBaseT][41]
    -   [Properties][42]
-   [SettingST][43]
    -   [Properties][44]
-   [SettingBaseT][45]
    -   [Properties][46]
-   [ThemeST][47]
    -   [Properties][48]
-   [ThemeBaseT][49]
    -   [Properties][50]
-   [UnitST][51]
    -   [Properties][52]
-   [UnitFactorT][53]
    -   [Properties][54]
-   [UnitHexT][55]
    -   [Properties][56]
-   [UnitHexaT][57]
    -   [Properties][58]
-   [UnitPxT][59]
    -   [Properties][60]
-   [UnitReferenceT][61]
    -   [Properties][62]
-   [UnitRemT][63]
    -   [Properties][64]
-   [UnitRgbT][65]
    -   [Properties][66]
-   [UnitRgbaT][67]
    -   [Properties][68]
-   [UnitStringT][69]
    -   [Properties][70]
-   [SettingSchema][71]
-   [SettingBase][72]
-   [Theme][73]
-   [ThemeBase][74]
-   [Unit][75]
-   [Factor][76]

## AttributeSchema

Attribute schema object.

Type: [AttributeST][77]

## BaseFontSize

Base font size object

Type: [AttributeBaseFontSizeT][78]

## BaseLineHeight

Base line height object

Type: [AttributeBaseLineHeightT][79]

## Color

Base font size object

Type: [AttributeColorT][80]

## Color

Base font face object

Type: [AttributeFontFaceT][81]

## FontFamily

Base font face object

Type: [AttributeFontFamilyT][82]

## FontSize

Base font face object

Type: [AttributeFontSizeT][83]

## FontWeight

Base font face object

Type: [AttributeFontWeightT][84]

## LineHeight

Base line height object

Type: [AttributeLineHeightT][85]

## Spacing

Base font face object

Type: [AttributeSpacingT][86]

## Swatch

Base font face object

Type: [AttributeSwatchT][87]

## BaseSchema

Base schema object.

Type: [BaseST][88]

## Base

Base base (default) type

Type: [BaseBaseT][89]

## Base

Theme base (default) type

Type: [ThemeBaseT][90]

## AttributeST

Attribute schema type

Type: {\_\_schemaname: `"Attribute"`, \_\_typename: [string][91], content: (\[] | {}), reference: ([string][91] | null), unit: [string][91], view: [string][91], viewable: \[]}

### Properties

-   `__schemaname` **`"Attribute"`** 
-   `__typename` **[string][91]** 
-   `content` **(\[] | {})** 
-   `reference` **([string][91] | null)** 
-   `unit` **[string][91]** 
-   `view` **[string][91]** 
-   `viewable` **\[]** 

## AttributeBaseFontSizeT

Base font size type

Type: {\_\_typename: `"BaseFontSize"`, content: {}, reference: null, unit: `"px"`, view: `"px"`, viewable: \[`"px"`]}

### Properties

-   `__typename` **`"BaseFontSize"`** 
-   `content` **{}** 
-   `reference` **null** 
-   `unit` **`"px"`** 
-   `view` **`"px"`** 
-   `viewable` **\[`"px"`]** 

## AttributeBaseLineHeightT

Base line height type

Type: {\_\_typename: `"BaseLineHeight"`, content: {}, reference: `"base.baseFontSize"`, unit: `"factor"`, view: (`"factor"` \| `"px"`), viewable: \[`"factor"`, `"px"`]}

### Properties

-   `__typename` **`"BaseLineHeight"`** 
-   `content` **{}** 
-   `reference` **`"base.baseFontSize"`** 
-   `unit` **`"factor"`** 
-   `view` **(`"factor"` \| `"px"`)** 
-   `viewable` **\[`"factor"`, `"px"`]** 

## AttributeBaseSpacingT

Base spacing type

Type: {\_\_typename: `"BaseSpacing"`, content: {}, reference: null, unit: `"px"`, view: `"px"`, viewable: \[`"px"`]}

### Properties

-   `__typename` **`"BaseSpacing"`** 
-   `content` **{}** 
-   `reference` **null** 
-   `unit` **`"px"`** 
-   `view` **`"px"`** 
-   `viewable` **\[`"px"`]** 

## AttributeColorT

Color type

Type: {\_\_typename: `"Color"`, view: (`"reference"` \| `"hex"` \| `"hexa"` \| `"rgb"` \| `"rgba"`), viewable: \[`"reference"`, `"hex"`, `"hexa"`, `"rgb"`, `"rgba"`], reference: `"swatch"`, unit: `"reference"`, content: \[]}

### Properties

-   `__typename` **`"Color"`** 
-   `view` **(`"reference"` \| `"hex"` \| `"hexa"` \| `"rgb"` \| `"rgba"`)** 
-   `viewable` **\[`"reference"`, `"hex"`, `"hexa"`, `"rgb"`, `"rgba"`]** 
-   `reference` **`"swatch"`** 
-   `unit` **`"reference"`** 
-   `content` **\[]** 

## AttributeFontFaceT

Font face type

Type: {\_\_typename: `"FontFace"`, content: \[], reference: null, unit: `"string"`, view: `"string"`, viewable: \[`"string"`]}

### Properties

-   `__typename` **`"FontFace"`** 
-   `content` **\[]** 
-   `reference` **null** 
-   `unit` **`"string"`** 
-   `view` **`"string"`** 
-   `viewable` **\[`"string"`]** 

## AttributeFontFamilyT

Font family type

Type: {\_\_typename: `"FontFamily"`, content: \[], reference: `"fontFace"`, unit: `"reference"`, view: `"reference"`, viewable: \[`"reference"`]}

### Properties

-   `__typename` **`"FontFamily"`** 
-   `content` **\[]** 
-   `reference` **`"fontFace"`** 
-   `unit` **`"reference"`** 
-   `view` **`"reference"`** 
-   `viewable` **\[`"reference"`]** 

## AttributeFontSizeT

Font size type

Type: {\_\_typename: `"FontSize"`, content: \[], reference: `"base.baseFontSize"`, unit: `"factor"`, view: (`"factor"` \| `"px"` \| `"rem"`), viewable: \[`"factor"`, `"px"`, `"rem"`]}

### Properties

-   `__typename` **`"FontSize"`** 
-   `content` **\[]** 
-   `reference` **`"base.baseFontSize"`** 
-   `unit` **`"factor"`** 
-   `view` **(`"factor"` \| `"px"` \| `"rem"`)** 
-   `viewable` **\[`"factor"`, `"px"`, `"rem"`]** 

## AttributeFontWeightT

Font weight type

Type: {\_\_typename: `"FontWeight"`, content: \[], reference: null, unit: `"string"`, view: `"string"`, viewable: \[`"string"`]}

### Properties

-   `__typename` **`"FontWeight"`** 
-   `content` **\[]** 
-   `reference` **null** 
-   `unit` **`"string"`** 
-   `view` **`"string"`** 
-   `viewable` **\[`"string"`]** 

## AttributeLineHeightT

Line height type

Type: {\_\_typename: `"LineHeight"`, content: \[], reference: `"base.baseFontSize"`, unit: `"factor"`, view: (`"factor"` \| `"px"`), viewable: \[`"factor"`, `"px"`]}

### Properties

-   `__typename` **`"LineHeight"`** 
-   `content` **\[]** 
-   `reference` **`"base.baseFontSize"`** 
-   `unit` **`"factor"`** 
-   `view` **(`"factor"` \| `"px"`)** 
-   `viewable` **\[`"factor"`, `"px"`]** 

## AttributeSpacingT

Spacing type

Type: {\_\_typename: `"Spacing"`, content: \[], reference: `"base.baseSpacing"`, unit: `"factor"`, view: (`"factor"` \| `"px"`), viewable: \[`"factor"`, `"px"`]}

### Properties

-   `__typename` **`"Spacing"`** 
-   `content` **\[]** 
-   `reference` **`"base.baseSpacing"`** 
-   `unit` **`"factor"`** 
-   `view` **(`"factor"` \| `"px"`)** 
-   `viewable` **\[`"factor"`, `"px"`]** 

## AttributeSwatchT

Swatch type

Type: {\_\_typename: `"Swatch"`, content: \[], reference: null, unit: `"hexa"`, view: (`"hexa"` \| `"hexa"` \| `"rgb"` \| `"rgba"`), viewable: \[`"hex"`, `"hexa"`, `"rgb"`, `"rgba"`]}

### Properties

-   `__typename` **`"Swatch"`** 
-   `content` **\[]** 
-   `reference` **null** 
-   `unit` **`"hexa"`** 
-   `view` **(`"hexa"` \| `"hexa"` \| `"rgb"` \| `"rgba"`)** 
-   `viewable` **\[`"hex"`, `"hexa"`, `"rgb"`, `"rgba"`]** 

## BaseST

Base Schema Type

Type: {\_\_schemaname: `"Base"`, \_\_typename: Typename?, baseFontSize: any, baseLineHeight: any, baseLineHeight: any}

### Properties

-   `__schemaname` **`"Base"`** 
-   `__typename` **Typename?** 
-   `baseFontSize` **any** 
-   `baseLineHeight` **any** 
-   `baseLineHeight` **any** 

## BaseBaseT

Base base (default) type

Type: {\_\_typename: `"BaseBase"`, baseFontSize: [string][91], baseLineHeight: [string][91], baseLineHeight: [string][91]}

### Properties

-   `__typename` **`"BaseBase"`** 
-   `baseFontSize` **[string][91]** 
-   `baseLineHeight` **[string][91]** 
-   `baseLineHeight` **[string][91]** 

## SettingST

Setting schema type

Type: {\_\_schemaname: `"Setting"`, \_\_typename: Typename, color: [AttributeColorT][80], fontFamily: [AttributeFontFamilyT][82], fontSize: [AttributeFontSizeT][83], fontWeight: [AttributeFontFamilyT][82], spacing: [AttributeSpacingT][86]}

### Properties

-   `__schemaname` **`"Setting"`** 
-   `__typename` **Typename** 
-   `color` **[AttributeColorT][80]** 
-   `fontFamily` **[AttributeFontFamilyT][82]** 
-   `fontSize` **[AttributeFontSizeT][83]** 
-   `fontWeight` **[AttributeFontFamilyT][82]** 
-   `spacing` **[AttributeSpacingT][86]** 

## SettingBaseT

Setting base (default) type

Type: {\_\_schemaname: `"Setting"`, \_\_typename: `"SettingBase"`, color: [AttributeColorT][80], fontFamily: [AttributeFontFamilyT][82], fontSize: [AttributeFontSizeT][83], fontWeight: [AttributeFontFamilyT][82], spacing: [AttributeSpacingT][86]}

### Properties

-   `__schemaname` **`"Setting"`** 
-   `__typename` **`"SettingBase"`** 
-   `color` **[AttributeColorT][80]** 
-   `fontFamily` **[AttributeFontFamilyT][82]** 
-   `fontSize` **[AttributeFontSizeT][83]** 
-   `fontWeight` **[AttributeFontFamilyT][82]** 
-   `spacing` **[AttributeSpacingT][86]** 

## ThemeST

Theme schema type

Type: {\_\_schemaname: `"Theme"`, \_\_typename: Typename, base: [BaseBaseT][89], fontFace: [AttributeFontFaceT][81], id: Id, name: [Name][92], setting: [SettingBaseT][93], swatch: [AttributeSwatchT][87], version: Version}

### Properties

-   `__schemaname` **`"Theme"`** 
-   `__typename` **Typename** 
-   `base` **[BaseBaseT][89]** 
-   `fontFace` **[AttributeFontFaceT][81]** 
-   `id` **Id** 
-   `name` **[Name][92]** 
-   `setting` **[SettingBaseT][93]** 
-   `swatch` **[AttributeSwatchT][87]** 
-   `version` **Version** 

## ThemeBaseT

Theme base type

Type: {\_\_schemaname: `"Theme"`, \_\_typename: `"Base"`, base: [BaseBaseT][89], fontFace: [AttributeFontFaceT][81], id: Id, name: [Name][92], setting: [SettingBaseT][93], swatch: [AttributeSwatchT][87], version: Version}

### Properties

-   `__schemaname` **`"Theme"`** 
-   `__typename` **`"Base"`** 
-   `base` **[BaseBaseT][89]** 
-   `fontFace` **[AttributeFontFaceT][81]** 
-   `id` **Id** 
-   `name` **[Name][92]** 
-   `setting` **[SettingBaseT][93]** 
-   `swatch` **[AttributeSwatchT][87]** 
-   `version` **Version** 

## UnitST

Unit schema type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: Typename, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **Typename** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitFactorT

Unit factor type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Factor"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Factor"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitHexT

Unit hex type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Hex"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Hex"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitHexaT

Unit hexa type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Hexa"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Hexa"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitPxT

Unit px type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Px"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Px"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitReferenceT

Unit reference type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Reference"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Reference"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitRemT

Unit rem type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Rem"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Rem"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitRgbT

Unit rgb type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Rgb"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Rgb"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitRgbaT

Unit rgba type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"Rgba"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"Rgba"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## UnitStringT

Unit rgba type

Type: {\_\_schemaname: `"Unit"`, \_\_typename: `"String"`, name: [Name][92], ordinal: Ordinal, value: Value}

### Properties

-   `__schemaname` **`"Unit"`** 
-   `__typename` **`"String"`** 
-   `name` **[Name][92]** 
-   `ordinal` **Ordinal** 
-   `value` **Value** 

## SettingSchema

Setting schema object.

Type: [SettingST][94]

## SettingBase

Setting base (default) type

Type: [SettingBaseT][93]

## Theme

Theme schema type

Type: [ThemeST][95]

## ThemeBase

Theme base (default) type

Type: [ThemeBaseT][90]

## Unit

Unit schema type

Type: [UnitST][96]

## 

Unit hex type

## Factor

Unit factor type

Type: [UnitFactorT][97]

## 

Unit hexa type

## 

Unit px type

## 

Unit reference type

## 

Unit rem type

## 

Unit rgb type

## 

Unit rgba type

## 

Unit string type

[1]: #attributeschema

[2]: #basefontsize

[3]: #baselineheight

[4]: #color

[5]: #color-1

[6]: #fontfamily

[7]: #fontsize

[8]: #fontweight

[9]: #lineheight

[10]: #spacing

[11]: #swatch

[12]: #baseschema

[13]: #base

[14]: #base-1

[15]: #attributest

[16]: #properties

[17]: #attributebasefontsizet

[18]: #properties-1

[19]: #attributebaselineheightt

[20]: #properties-2

[21]: #attributebasespacingt

[22]: #properties-3

[23]: #attributecolort

[24]: #properties-4

[25]: #attributefontfacet

[26]: #properties-5

[27]: #attributefontfamilyt

[28]: #properties-6

[29]: #attributefontsizet

[30]: #properties-7

[31]: #attributefontweightt

[32]: #properties-8

[33]: #attributelineheightt

[34]: #properties-9

[35]: #attributespacingt

[36]: #properties-10

[37]: #attributeswatcht

[38]: #properties-11

[39]: #basest

[40]: #properties-12

[41]: #basebaset

[42]: #properties-13

[43]: #settingst

[44]: #properties-14

[45]: #settingbaset

[46]: #properties-15

[47]: #themest

[48]: #properties-16

[49]: #themebaset

[50]: #properties-17

[51]: #unitst

[52]: #properties-18

[53]: #unitfactort

[54]: #properties-19

[55]: #unithext

[56]: #properties-20

[57]: #unithexat

[58]: #properties-21

[59]: #unitpxt

[60]: #properties-22

[61]: #unitreferencet

[62]: #properties-23

[63]: #unitremt

[64]: #properties-24

[65]: #unitrgbt

[66]: #properties-25

[67]: #unitrgbat

[68]: #properties-26

[69]: #unitstringt

[70]: #properties-27

[71]: #settingschema

[72]: #settingbase

[73]: #theme

[74]: #themebase

[75]: #unit

[76]: #factor

[77]: #attributest

[78]: #attributebasefontsizet

[79]: #attributebaselineheightt

[80]: #attributecolort

[81]: #attributefontfacet

[82]: #attributefontfamilyt

[83]: #attributefontsizet

[84]: #attributefontweightt

[85]: #attributelineheightt

[86]: #attributespacingt

[87]: #attributeswatcht

[88]: #basest

[89]: #basebaset

[90]: #themebaset

[91]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[92]: https://developer.mozilla.org/

[93]: #settingbaset

[94]: #settingst

[95]: #themest

[96]: #unitst

[97]: #unitfactort