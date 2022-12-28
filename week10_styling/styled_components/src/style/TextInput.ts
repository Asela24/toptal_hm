import styled from "styled-components";
import { defaultTheme } from "./colorTheme";


interface InputProps {
    color?: 'primary' | 'secondary' | 'error' | 'danger' | 'white' | 'black';
    width: 'full' | 'small' | 'full'
    fontSize?: 'small' | 'medium' | 'large'
    size?: 'large' | 'medium' | 'small' | 'full'
}

/* export const TextInput = styled.input<InputProps>`
    font-size: ${({fontSize}) => fontSize ? defaultTheme.fontSize[fontSize] : '16px'};
    width: ${({width}) => width ? defaultTheme.width[width] : defaultTheme.width.small};  */
   
