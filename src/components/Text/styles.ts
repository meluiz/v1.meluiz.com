import styled from 'styled-components'

export const Heading1 = styled.h1`
  color: ${(props) => props.theme.colors.text.title };
  font-size: 64px;
  font-family: ${(props) => props.theme.font.family.sans };
  font-weight: bold;
`
export const Heading2 = styled.h2`
  color: ${(props) => props.theme.colors.text.title };
  font-size: 32px;
  font-family: ${(props) => props.theme.font.family.sans };
  font-weight: bold;
`

export const Paragraph = styled.p`
  margin-top: 32px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.text.paragraph };
  font-size: ${(props) => props.theme.font.size.md};
  font-family: ${(props) => props.theme.font.family.sans };
  font-weight: normal;

  a {
    color: ${(props) => props.theme.colors.text.link };
  }

  strong {
    color: ${(props) => props.theme.colors.text.tone.three };
    font-weight: bold;
  }
`