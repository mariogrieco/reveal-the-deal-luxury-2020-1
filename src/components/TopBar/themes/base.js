import logo from '../images/brand_logo/base.svg'

export default function (globalTheme) {
    return {
        background: '#FFFFFF',
        color: '#8b8b8b',
        alternateBackground: '#FFFFFF',
        showLogo: true,
        logo,
        logoContainerSize: '85px',
        primaryColor: globalTheme.colors.primary
    }
}
