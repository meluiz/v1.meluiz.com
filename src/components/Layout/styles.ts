import styled, { css } from 'styled-components'

interface AreaProps {
  fluid?: boolean;
  size?: string;
}

interface GridLayoutProps {
  column?: boolean;
  responsive?:boolean;
  align?: 'left' | 'center' | 'right';
  justify?: 'left' | 'center' | 'right' | 'between';
}

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 18px;
  background: ${props => props.theme.colors.background.main};

  &::after {
    content: '';
    width: 104%;
    height: 100%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    user-select: none;
    box-shadow: ${props => props.theme.colors.shadow};
  }
`

export const Area = styled.div<AreaProps>`
  width: 100%;
  max-width: ${(props) => props.size ? props.theme.screens[props.size] : props.theme.screens.lg};
  ${props => props.fluid && 'height: 100%;'}
  display: block;
  padding: 0 24px;
  margin: 0 auto;
  position: relative;
`

export const GridLayout = styled.div<GridLayoutProps>`
  display: flex;
  flex-direction: ${props => props.responsive ?
    props.column ? 'row' : 'column'
  : props.column ? 'column' : 'row'};
  align-items: ${ (props) => {
    switch (props.align) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }};
  justify-content:  ${ (props) => {
    switch (props.justify) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      case 'between':
        return 'space-between'
      default:
        return 'flex-start'
    }
  }};
  gap: var(--gap);

  @media (min-width: ${props => props.theme.screens.lg}) {
    flex-direction: ${props => props.responsive ?
      props.column ? 'column' : 'row'
    : props.column ? 'column' : 'row'};
  }
`

export const ColumnLayout = styled.div`
  max-width: 100%;
  flex: var(--flex);
  position: relative;
`

export const DribbbleLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 24px; right: 32px;
  justify-content: center;
  color: white;
  background: rgb(234,76,137);
  box-shadow: 0 3px 4px rgba(0,0,0,.3);
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`