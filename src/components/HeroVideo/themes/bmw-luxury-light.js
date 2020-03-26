// @flow
import heroMask from '../images/bmw-luxury-light/left_cover.png'
import heroMaskTablet from '../images/bmw-luxury-light/maskTablet.png'
import background from '../images/bmw-luxury-light/background.png'
import backgroundTablet from '../images/bmw-luxury-light/backgroundTablet.png'

export default function (globalTheme) {
    return {
        borderColor: globalTheme.colors.primary,
        heroMask,
        heroMaskTablet,
        background,
        backgroundTablet,
        backgroundColor: '#FFFFFF',
        showWatchButton: false,
        showLogo: true,
        luxuryBackground: true,
        eventColor: '#2a2a2a'
    }
}
