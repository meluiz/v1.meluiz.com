import styled from 'styled-components'

export const LinkBio = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 0;
  margin: 12px 0;
  color: ${props => props.theme.colors.text.link};
  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family.sans};
  font-weight: 600;

  &:hover svg {
    filter: brightness(.7);
  }
  
  svg {
    margin-right: 8px;
    color: ${props => props.theme.colors.text.link};
    filter: brightness(.5);
  }
`