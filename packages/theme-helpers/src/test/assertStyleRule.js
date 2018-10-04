import React from 'react'
import styled from 'styled-components'
import 'jest-styled-components'
import renderWithTheme from './renderWithTheme'

const assertStyleRule = (cssForFn, key, expectedCssAttr, expectedCssVal) =>
  test(expectedCssAttr, () => {
    const Component = styled.div`
      ${cssForFn(key)};
    `

    const { getByTestId } = renderWithTheme(<Component data-testid="element" />)

    expect(getByTestId('element')).toHaveStyleRule(
      expectedCssAttr,
      expectedCssVal
    )
  })

export default assertStyleRule
