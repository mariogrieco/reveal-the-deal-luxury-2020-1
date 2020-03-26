// @flow
import heroMask from '../images/base/left_cover.png'
import heroMaskTablet from '../images/base/maskTablet.png'
import background from '../images/base/background.png'
import backgroundTablet from '../images/base/backgroundTablet.png'

export default function (globalTheme) {
    return {
        borderColor: globalTheme.colors.primary,
        heroMask,
        heroMaskTablet,
        background,
        backgroundTablet,
        backgroundColor: globalTheme.colors.ternary,
        showWatchButton: true,
        showLogo: false,
        luxuryBackground: false
    }
}
