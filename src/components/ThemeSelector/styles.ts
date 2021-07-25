import styled from 'styled-components'

export const Base = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 24px;

  div {
    margin-right: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.colors.text.tone.four};

  &:active {
    transform: scale(.95);
  }

  &:hover {
    color: ${props => props.theme.colors.text.tone.one};
  }
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: ${props => props.theme.colors.text.tone.three};

  &:hover {
    filter: ${props => props.theme.title === 'dark' ? 'brightness(1.3)' : 'brightness(0.8)'};
  }
`