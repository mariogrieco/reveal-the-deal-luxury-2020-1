// @flow
import type { Theme } from './__supportedThemes'

import lightLoader from '../images/three_dots_loader_light.svg'

export default function (globalTheme): Theme {
    return {
        input: {
            color: '#1B69D4',
            backgroundColor: '#0b0b0b',
            borderColor: '#878787',
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        button: {
            background: 'transparent',
            color: '#1B69D4',
            borderColor: '#1B69D4',
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        loader: lightLoader,
        titleColor: '#BDBFC3'
    }
}
