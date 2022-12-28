import styled from "styled-components";
import { getFontSize, getWidthSize } from "../style/styled-system";


interface InputProps {
    color?: 'primary' | 'secondary' | 'error' | 'danger' | 'white' | 'black';
    width?: 'full' | 'small' | 'medium' | 'large'
    fontSize?: 'small' | 'medium' | 'large'
}

export const TextInput = styled.input<InputProps>`
    ${getWidthSize};
    ${getFontSize};
    height: 30px;
`   
