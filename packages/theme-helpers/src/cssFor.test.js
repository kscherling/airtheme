import { background } from './cssFor'
import theme from './test/theme'
import renderWithTheme from './test/renderWithTheme'
import styled from 'styled-components'
import 'jest-styled-components'

test('#background', () => {
  const Component = styled.div`
    ${background('primary')};
  `

  const { getByTestId } = renderWithTheme(
    <StyledElement data-testid="element" />
  )

  expect(false).toBe(true)
})
