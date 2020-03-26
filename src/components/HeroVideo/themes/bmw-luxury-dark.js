// @flow
import heroMask from '../images/bmw-luxury-dark/left_cover.png'
import heroMaskTablet from '../images/bmw-luxury-dark/maskTablet.png'
import background from '../images/bmw-luxury-dark/background.png'
import backgroundTablet from '../images/bmw-luxury-dark/backgroundTablet.png'

export default function (globalTheme) {
    return {
        borderColor: globalTheme.colors.primary,
        heroMask,
        heroMaskTablet,
        background,
        backgroundTablet,
        backgroundColor: globalTheme.colors.ternary,
        showWatchButton: false,
        showLogo: true,
        luxuryBackground: true,
        eventColor: '#FFFFFF'
    }
}
