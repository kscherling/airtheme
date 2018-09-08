import { css } from 'styled-components'

export const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  outline: none;

  &:hover {
    cursor: pointer;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`
