// @flow
import cars from '../images/cars/gmc.png'
import manufacturerLogo from '../images/manufacturer_logo/gmc.png'
import Color from 'color'

export default function (globalTheme) {
    return {
        cars,
        manufacturerLogo,
        bigLogo: false,
        colors: {
            ...globalTheme.colors,
            ternary: '#000000'
        },
        bubbleBg: globalTheme.colors.primary,
        bubbleBorder: Color(globalTheme.colors.primary).fade(0.4)
    }
}
