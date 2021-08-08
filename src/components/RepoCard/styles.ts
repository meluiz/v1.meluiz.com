import styled from "styled-components";

export const CardBase = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 2px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  background-color: ${props => props.theme.colors.background.card};
  margin-bottom: 12px;
  &:hover {
    & > div > div {
      background-position: 0 -957px;
    }
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const CardLangTag = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.text.tone.four};
  text-transform: uppercase;
  letter-spacing: .1em;
  font-size: ${props => props.theme.font.size.xs};
  font-weight: 700;
  font-family: ${props => props.theme.font.family.mono};
`

export const CardLangImage = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-image: url('/assets/icons/lang-icons.svg');
  background-position: 0 -927px;
  transition: all 300ms ease;
  transform: scale(.93);
`

export const CardMain = styled.div`
  min-height: 0;
  position: relative;
`

export const CardTitle = styled.h2`
  color: ${props => props.theme.colors.text.title};
  font-size: ${props => props.theme.font.size.xxl};
  font-weight: 700;
  font-family: ${props => props.theme.font.family.mono};
`

export const CardDescription = styled.p`
  min-height: 0;
  position: relative;
  margin: 12px 0;
  color: ${props => props.theme.colors.text.tone.four};
  font-size: ${props => props.theme.font.size.sm};
  font-family: ${props => props.theme.font.family.mono};
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.tone.four};
  font-size: ${props => props.theme.font.size.xs};
  font-family: ${props => props.theme.font.family.mono};
`

export const CardStarIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${props => props.theme.colors.text.tone.five};
`