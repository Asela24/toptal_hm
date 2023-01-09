import styled, { ThemeProvider } from 'styled-components';
const ButtonStyled =  styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main}
`

ButtonStyled.defaultProps = {
    theme: {
        main: 'green'
    }
}

const theme = {
    main: 'pink'
}

export const ThemedButton = () => {
    return (
        <div>
        <ButtonStyled>Normal button</ButtonStyled>
        <ThemeProvider theme={theme}>
        <ButtonStyled> 
        something
        </ButtonStyled>
        </ThemeProvider>
        </div>
    )
}