// @flow

import firstBg from '../images/background/base/0.jpg'
import secondBg from '../images/background/base/1.jpg'

export default function (globalTheme) {
    return {
        background: [
            firstBg,
            secondBg
        ],
        playButtonBackground: globalTheme.colors.primary
    }
}
