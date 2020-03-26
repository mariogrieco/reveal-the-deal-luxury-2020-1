// @flow

export default function (globalTheme) {
    return {
        colors: {
            ...globalTheme.colors,
            secondary: globalTheme.colors.primary,
            primary: globalTheme.colors.primary,
        }
    }
}
