// @flow
import mask from '../images/mask.png'

export default function (globalTheme) {
    return {
        titleColor: '#97A4AA',
        valueColor: globalTheme.colors.primary,
        background: '#FFFFFF',
        plusIconBg: '#97A4AA',
        backgroundColor: globalTheme.colors.ternary,
        mask
    }
}
