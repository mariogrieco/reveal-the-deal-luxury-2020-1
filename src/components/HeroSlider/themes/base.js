// @flow
import heroMask from '../images/mask.png'
import slide0 from '../images/slides/base/0.png'
import slide1 from '../images/slides/base/1.png'
import slide2 from '../images/slides/base/2.png'

export default function (globalTheme) {
    return {
        borderColor: globalTheme.colors.primary,
        slides: [slide0, slide1, slide2],
        heroMask
    }
}
