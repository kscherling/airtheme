import styled, { css } from 'styled-components'

const lightCss = ({ active }) => css`
  color: rgba(0, 0, 0, 0.6);

  ${active &&
    css`
      color: rgba(0, 0, 0, 1);
      background: rgba(0, 0, 0, 0.05);
    `};

  &.active {
    color: rgba(0, 0, 0, 1);
    background: rgba(0, 0, 0, 0.05);
  }

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`

const darkCss = ({ dark, active }) =>
  dark &&
  css`
    color: rgba(255, 255, 255, 0.35);

    ${active &&
      css`
        color: rgba(255, 255, 255, 0.7);
        background: rgba(0, 0, 0, 0.35);
      `};

    &.active {
      color: rgba(255, 255, 255, 0.7);
      background: rgba(0, 0, 0, 0.35);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  `

const Tab = styled.span`
  text-decoration: none;
  display: grid;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 80%;
  font-weight: bold;
  background: transparent;

  ${lightCss};
  ${darkCss};

  &:hover {
    cursor: pointer;
  }
`

const SimpleTabs = styled.div`
  display: flex;
  flex-direction: row;
`

SimpleTabs.Tab = Tab

export default SimpleTabs
