import styled from "styled-components";
import { CommonProps } from "../types";
import { getSize, getBackgroundColor, getFontSize, getActiveShadow } from "./styled-system";

export interface ButtonProps extends CommonProps {
    size?: 'large' | 'medium' | 'small' | 'full'
    fontSize?: 'small' | 'medium' | 'large'
    active?: 'none'
}

export const Button = styled.button<ButtonProps>`
    background-color: ${getBackgroundColor};
    ${getSize};
    ${getFontSize};
    border: none;
    border-radius: 5px;
    
    &:active {
        box-shadow: ${({active, variant}) => getActiveShadow(active, variant)};
    }
`

