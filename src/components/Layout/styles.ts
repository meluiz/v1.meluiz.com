import styled, { css } from 'styled-components'

interface AreaProps {
  fluid?: boolean;
  size?: string;
}

interface GridLayoutProps {
  direction?: 'row' | 'column';
}

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  background: ${props => props.theme.colors.background};
`

export const Area = styled.div<AreaProps>`
  width: 100%;
  ${props => {
    switch (props.size) {
      case 'sm':
        return css`
          max-width: 640px;
        `
      case 'md':
        return css`
          max-width: 768px;
        `
      case 'lg':
        return css`
          max-width: 1024px;
        `
      case 'xl':
        return css`
          max-width: 1280px;
        `
      case '2xl':
        return css`
          max-width: 1536px;
        `
      default:
        return css`
          max-width: 1024px;
        `
    }
  }};
  ${props => props.fluid && 'height: 100%;'}
  margin: 0 auto;
  display: block;
  position: relative;
  overflow: hidden;
`

export const GridLayout = styled.div<GridLayoutProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap);
`

export const ColumnLayout = styled.div`
  flex: var(--flex);
`