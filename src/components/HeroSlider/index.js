import * as React from 'react'

import withTheme from 'hoc/withTheme'

import supportedThemes from './themes/__supportedThemes.js'

import SwiperContainer from 'components/SwiperContainer'

import styles from './styles.module.scss'


export const HeroSlider = ({ theme }) => {
    return (
        <div className={styles.container} style={{ '--hero-mask': `url(${theme.heroMask})` }}>
            <SwiperContainer containerClassNmae={styles.swiperCustomContainer}>
                {theme.slides.map((img, index) => <div key={index} className={styles.slide} style={{ 'background-image': `url(${img})` }}></div>)}
            </SwiperContainer>
        </div>
    )
}

export default withTheme(supportedThemes)(HeroSlider)
