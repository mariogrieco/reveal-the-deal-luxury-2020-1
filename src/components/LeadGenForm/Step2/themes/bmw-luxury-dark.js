// @flow

export default function (globalTheme) {
    return {
        selectedButton: {
            background: '#1B69D4',
            color: '#FFFFFF',
            borderWidth: '1px',
            borderColor: '#1B69D4',
            borderStyle: 'solid'
        },
        button: {
            background: 'transparent',
            color: '#878787',
            borderWidth: '1px',
            borderColor: '#878787',
            borderStyle: 'solid'
        },
        submit: { background: globalTheme.colors.primary, color: '#FFFFFF', marginTop: '1.62em', marginLeft: 0, marginRight: 'auto' }
    }
}
