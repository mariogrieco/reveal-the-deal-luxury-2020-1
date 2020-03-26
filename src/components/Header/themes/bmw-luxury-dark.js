// @flow

import cars from '../images/background/bmw-luxury-dark.png'

export default function (globalTheme) {
    return {
        cars,
        carsMobile: cars,
        mask: globalTheme.images.headerMask,
        colors: globalTheme.colors,
        background: null,
        brandLogoInverted: globalTheme.images.brandLogoInverted,
        primaryColor: globalTheme.colors.primary,
        inputColor: globalTheme.colors.ternary,
        buttonBg: globalTheme.colors.secondary,
        buttonColor: '#fff'
    }
}
