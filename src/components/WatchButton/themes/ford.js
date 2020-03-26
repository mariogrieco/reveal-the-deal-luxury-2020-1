// @flow
import Color from 'color'

export default function (globalTheme) {
    return {
        borderColor: Color(globalTheme.colors.primary).fade(0.5),
        background: '#123574',
        color: '#FFFFFF'
    }
}
