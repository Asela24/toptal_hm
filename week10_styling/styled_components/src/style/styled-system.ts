import { colorsType } from '../types';
import { defaultTheme } from './colorTheme';

export const getBackgroundColor = ({ variant = 'primary' }: { variant?: keyof colorsType }) => defaultTheme.variants[variant];

export const getSize = ({ size = 'medium' } : { size?: string} )  => (
    {
        width: defaultTheme.sizes[size].width,
        height: defaultTheme.sizes[size].height
    })

export const getFontSize = ({ fontSize = 'medium' }: { fontSize?: string }) =>`font-size: ${defaultTheme.fontSize[fontSize]}`;

export const getActiveShadow = (active?: string, variant: keyof colorsType = 'primary') => active ? 'none' : `1px 1px 10px ${defaultTheme.variants[variant]}`; 

export const getLoaderSize = ({ size = 'medium' }: { size? : string }) => (
    {
        width: defaultTheme.loaderSizes[size].width,
        height: defaultTheme.loaderSizes[size].height
    }
)

export const getAnimationSpeed = ({ speed = 'medium' } : { speed?: string }) => defaultTheme.animationSpeed[speed]

