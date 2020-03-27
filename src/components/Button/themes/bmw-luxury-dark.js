// @flow
import lightLoader from '../images/three_dots_loader_light.svg'

export default function (globalTheme) {
    return {
        loader: lightLoader,
        button: {
            backgroundColor: 'transparent',
            borderColor: '#1b69d4',
            borderWidth: '1px',
            borderStyle: 'solid',
            color: '#1b69d4'
        }
    }
}
