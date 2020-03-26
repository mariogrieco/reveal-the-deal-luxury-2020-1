// @flow

export default function (globalTheme) {
    return {
        ...globalTheme,
        showLogo: false,
        primaryColor: '#FFFFFF',
        backgroundColor: globalTheme.colors.ternary
    }
}
