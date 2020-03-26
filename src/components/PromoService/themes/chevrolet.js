// @flow
import cars from '../images/cars/chevrolet.png'
import manufacturerLogo from '../images/manufacturer_logo/chevrolet.png'

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
        bubbleBorder: '#F29494'
    }
}
