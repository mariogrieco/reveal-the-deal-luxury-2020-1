// @flow
import base from './base'

export default function (globalTheme) {
    return {
        ...base(globalTheme),
        primary: globalTheme.colors.secondary
    }
}
