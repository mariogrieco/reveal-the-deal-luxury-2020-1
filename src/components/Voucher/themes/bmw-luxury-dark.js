// @flow
import manufacturerLogo from '../images/manufacturer_logo/base.png'

export default function (globalTheme) {
    return {
        manufacturerLogo,
        textColor: '#9297A1',
        primary: globalTheme.colors.primary,
        secondary: '#9297A1',
        ternary: globalTheme.colors.primary,
        leftGradient: {
            top: '#FBFBFB',
            bottom: '#FFFFFF'
        },
        manufacturerLogoStyle: {
            x: -5,
            y: -5,
            width: 30
        }
    }
}
