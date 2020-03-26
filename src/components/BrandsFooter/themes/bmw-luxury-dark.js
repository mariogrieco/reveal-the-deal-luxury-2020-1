// @flow

export default function (globalTheme) {
    return {
        ...globalTheme,
        borderColor: globalTheme.colors.primary,
        plusIconColor: '#878787',
        plusIconBackgroundColor: globalTheme.colors.primary,
        backgroundColor: globalTheme.colors.primary
    }
}
