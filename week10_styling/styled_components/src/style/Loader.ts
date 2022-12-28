import styled, { keyframes } from "styled-components";
import { CommonProps } from "../types";
import { getAnimationSpeed, getBackgroundColor, getLoaderSize } from "./styled-system";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } 
    
    to {
        transform: rotate(360deg);
    }

`

interface LoaderType extends CommonProps {
    size?: 'large' | 'medium' | 'small' 
    speed?: 'slow' | 'medium' | 'fast'
}

export const Loader = styled.div<LoaderType>`
    ${getLoaderSize}
    border: 10px solid;
    border-color : ${getBackgroundColor};
    border-top: 10px solid rgba(255,255,255, 0);
    border-radius: 50%;
    animation: ${rotate} ${getAnimationSpeed} linear infinite;
`

