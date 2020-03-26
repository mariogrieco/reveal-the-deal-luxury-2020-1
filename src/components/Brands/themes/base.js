// @flow

import thehomedepot from '../images/base/thehomedepot.png'
import starbukcs from '../images/base/starbukcs.png'
import cineplex from '../images/base/cineplex.png'
import bassproshops from '../images/base/bassproshops.png'
import visa from '../images/base/visa.png'
import apple from '../images/base/apple.png'
import amazon from '../images/base/amazon.png'
import bp from '../images/base/bp.png'

export default function (globalTheme) {
    return {
        brands: [
            thehomedepot,
            starbukcs,
            cineplex,
            bassproshops,
            visa,
            apple,
            amazon,
            bp
        ],
        backgroundColor: globalTheme.colors.ternary
    }
}
