import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_FAMILY,
  REMOVE_FONT_FAMILY,
  UPDATE_FONT_FAMILY,
  UPDATE_FONT_FAMILY_VIEW
} from '../../../constant/fontFamily'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const fontFamily = (state = attribute.fontFamily(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily
    case UPDATE_FONT_FAMILY_VIEW:
      return { ...state, view: action.view }
    case ADD_FONT_FAMILY:
      return addUnit(state, action)
    case REMOVE_FONT_FAMILY:
      return removeUnit(state, action)
    case UPDATE_FONT_FAMILY:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default fontFamily

const a = {
  theme: {
    setting: {
      __schemaname: 'Setting',
      __typename: 'Base',
      color: {
        __schemaname: 'Attribute',
        __typename: 'Color',
        content: [],
        reference: 'swatch',
        unit: 'Reference',
        view: 'Reference',
        viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
      },
      fontFamily: {
        __schemaname: 'Attribute',
        __typename: 'FontFamily',
        content: [
          {
            __schemaname: 'Unit',
            __typename: 'Reference',
            name: 'fontFace',
            ordinal: 1,
            value: 'Roboto'
          }
        ],
        reference: 'fontFace',
        unit: 'Reference',
        view: 'Reference',
        viewable: ['Reference']
      },
      fontSize: {
        __schemaname: 'Attribute',
        __typename: 'FontSize',
        content: [],
        reference: 'base.baseFontSize',
        unit: 'Factor',
        view: 'Factor',
        viewable: ['Factor', 'Px', 'Rem']
      },
      fontWeight: {
        __schemaname: 'Attribute',
        __typename: 'FontWeight',
        content: [],
        reference: null,
        unit: 'String',
        view: 'String',
        viewable: ['String']
      },
      spacing: {
        __schemaname: 'Attribute',
        __typename: 'Spacing',
        content: [],
        reference: 'base.baseSpacing',
        unit: 'Factor',
        view: 'Factor',
        viewable: ['Factor', 'Px']
      }
    }
  }
}
