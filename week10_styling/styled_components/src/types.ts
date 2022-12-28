export type colorsType = {
    primary: string,
    secondary: string,
    error: string,
    danger: string,
    white: string,
    black: string
} 


export interface BaseTheme {
    variants: colorsType,
    sizes: {
        [key: string]: {
            width: string,
            height: string,
        }
    },
    fontSize: {
        [key: string]: string,
    },
    loaderSizes: {
        [key: string]: {
            width: string,
            height: string,
        }
    },
    animationSpeed: {
       [key: string]: string,
    }
    
}

export interface CommonProps {
    variant?: 'primary' | 'secondary' | 'error' | 'danger' | 'white' | 'black';
}
