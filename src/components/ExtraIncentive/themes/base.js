// @flow

import car from '../images/cars/base.png'

export default function (globalTheme) {
    return {
        car,
        mask: globalTheme.images.headerMask,
        colors: globalTheme.colors,
        background: globalTheme.images.headerBg,
        brandLogoInverted: globalTheme.images.brandLogoInverted,
        primaryColor: globalTheme.colors.primary,
        inputColor: globalTheme.colors.ternary,
        buttonBg: globalTheme.colors.secondary,
        buttonColor: '#fff'
    }
}
