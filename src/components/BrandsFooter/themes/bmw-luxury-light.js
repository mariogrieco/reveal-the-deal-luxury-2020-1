// @flow

export default function (globalTheme) {
    return {
        ...globalTheme,
        borderColor: globalTheme.colors.ternary,
        plusIconColor: '#878787',
        plusIconBackgroundColor: '#F2F2F2',
        backgroundColor: globalTheme.colors.ternary
    }
}
