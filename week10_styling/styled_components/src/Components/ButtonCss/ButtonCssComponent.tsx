import * as S from './ButtonCss';


export const CssButton =({
    color,
    ...props
} : S.ButtonPropsCss) => {
    return (
        <S.ButtonStyledCss  {...props} color={color}/>
    )
} 
