// @flow
import mask from '../images/mask.png'

export default function (globalTheme) {
    return {
        ...globalTheme,
        titleColor: '#97A4AA',
        valueColor: '#ffffff',
        plusIconBg: 'transparent',
        backgroundColor: 'transparent',
        mask
    }
}
