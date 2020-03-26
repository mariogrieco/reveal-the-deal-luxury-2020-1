// @flow

import thehomedepot from '../images/bmw-luxury-dark/thehomedepot.png'
import starbukcs from '../images/bmw-luxury-dark/starbukcs.png'
import cineplex from '../images/bmw-luxury-dark/cineplex.png'
import visa from '../images/bmw-luxury-dark/visa.png'
import apple from '../images/bmw-luxury-dark/apple.png'
import amazon from '../images/bmw-luxury-dark/amazon.png'
import bp from '../images/bmw-luxury-dark/bp.png'

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
        backgroundColor: globalTheme.colors.primary
    }
}
