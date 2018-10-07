import React from 'react'
import styled from 'styled-components'
import { cleanup } from 'react-testing-library'
import 'jest-styled-components'
import renderWithTheme from './renderWithTheme'

const assertStyleRuleIf = (
  ifCssFn,
  ifKey,
  key,
  expectedCssAttr,
  expectedCssVal,
  noimp = false
) => {
  if (noimp) {
    test.skip(expectedCssAttr, () => null)
  } else {
    test(`#applies ${expectedCssAttr}`, () => {
      const Component = styled.div.attrs({ [ifKey]: true })`
        ${ifCssFn(key)};
      `

      const { getByTestId } = renderWithTheme(
        <Component data-testid="element" />
      )

      expect(getByTestId('element')).toHaveStyleRule(
        expectedCssAttr,
        expectedCssVal
      )
    })

    test(`#does not apply ${expectedCssAttr}`, () => {
      const Component = styled.div.attrs({ [ifKey]: false })`
        ${ifCssFn(key)};
      `

      const { getByTestId } = renderWithTheme(
        <Component data-testid="element" />
      )

      expect(getByTestId('element')).not.toHaveStyleRule(
        expectedCssAttr,
        expectedCssVal
      )
    })
  }
}

export default assertStyleRuleIf
