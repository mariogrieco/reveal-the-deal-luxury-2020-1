// @flow

const bg1 = require('../images/bmw-luxury-dark/1.png')
const bg2 = require('../images/bmw-luxury-dark/2.png')
const bg3 = require('../images/bmw-luxury-dark/3.jpg')

export default function (globalTheme) {
    return {
        stepsBg: [bg1, bg2, bg3],
        backgroundColor: globalTheme.colors.ternary
    }
}
