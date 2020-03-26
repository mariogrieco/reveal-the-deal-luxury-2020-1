// @flow

import cars from '../images/background/base.png'

export default function (globalTheme) {
    return {
        cars,
        carsMobile: cars,
        mask: globalTheme.images.headerMask,
        colors: globalTheme.colors,
        background: cars,
        brandLogoInverted: globalTheme.images.brandLogoInverted,
        primaryColor: globalTheme.colors.primary,
        inputColor: globalTheme.colors.ternary,
        buttonBg: globalTheme.colors.secondary,
        buttonColor: '#fff'
    }
}
