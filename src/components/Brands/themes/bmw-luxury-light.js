// @flow

import thehomedepot from '../images/bmw-luxury-light/thehomedepot.png'
import starbukcs from '../images/bmw-luxury-light/starbukcs.png'
import cineplex from '../images/bmw-luxury-light/cineplex.png'
import visa from '../images/bmw-luxury-light/visa.png'
import apple from '../images/bmw-luxury-light/apple.png'
import amazon from '../images/bmw-luxury-light/amazon.png'
import bp from '../images/bmw-luxury-light/bp.png'

export default function (globalTheme) {
    return {
        ...globalTheme,
        brands: [
            thehomedepot,
            starbukcs,
            cineplex,
            visa,
            apple,
            amazon,
            bp
        ],
        backgroundColor: globalTheme.colors.ternary
    }
}
