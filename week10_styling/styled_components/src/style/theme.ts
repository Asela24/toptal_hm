import { BaseTheme } from "../types";

export const defaultTheme: BaseTheme = {
    variants: {
        primary: '#73599E',
        secondary: '#599E5C',
        error: '#E81515',
        danger: '#9E5959',
        white: '#FFFFFF',
        black: '#060606' 
     },
     sizes: {
        full: {
            width: '100%',
            height: '50px'
        },
        large: {
            width: '200px',
            height: '150px',
        },
        medium: {
            width: '150px',
            height: '100px',
        },
        small: {
            width: '100px',
            height: '50px'
        }        
    },
    fontSize: {
        small: '10px',
        medium: '16px',
        large: '25px'
    },
    loaderSizes: {
        small: {
            width: '25px',
            height: '25px',
        },
        medium: {
            width: '50px',
            height: '50px'
        },
        large: {
            width: '75px',
            height: '75px',
        }
    },
    animationSpeed: {
        slow: '2.3s',
        medium: '1.5s',
        fast: '1s'
    }
}


