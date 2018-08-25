# Airtheme

## @airtheme/type

Contains Airtheme types and constants shared across packages.

### theme

##### types

- basic // !!! base

##### schema

- id
- name
- baseSpacing
- baseFontSize
- baseLineHeight
- types
- version
- swatch
- fontFace
- setting

### setting

##### types

- none // !!! base

##### schema

- color
- fontFamily
- fontSize
- fontWeight
- spacing

### attribute

##### types

- color
- fontFace
- fontFamily
- fontSize
- fontWeight
- lineHeight
- spacing
- swatch

##### schema

- content
- display // view
- displays // viewable
- reference // path to attribute if reference
- type
- unit // stored as unit

### unit

##### types

- factor
- hex
- hexa
- px
- reference
- rem
- rgb
- rgba
- string

##### schema

- key // !!! reference - reference matches attribute reference for convenience
- ordinal // for stack order
- type
- value // the payload - decorated by type

## @airtheme/core

Contains common Airtheme utilities.

## @airtheme/make

Redux store and actions for working with an Airtheme object.

## @airtheme/css-in-js

Serializes Airtheme object in css-in-js consumable obj. Build script for generating dynamically, outputing to project.
