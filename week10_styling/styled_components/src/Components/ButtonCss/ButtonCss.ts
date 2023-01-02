import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export const ButtonStyledCss = styled.button<ButtonPropsCss>`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: ${props => props.color}

`

export interface ButtonPropsCss extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string
}