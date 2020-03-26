import * as React from 'react'

import WatchButton from 'components/WatchButton'
import MainLogo from 'components/MainLogo'

import cn from 'classnames'

import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes.js'

import styles from './styles.module.scss'

export const HeroVideo = ({ theme }) => {
    return (
        <div className={cn(styles.container, {
            [styles.luxuryBackground]: theme.luxuryBackground
        })}
            style={{
                '--hero-mask': `url(${theme.heroMask})`,
                '--hero-mask-tablet': `url(${theme.heroMaskTablet})`,
                backgroundColor: theme.backgroundColor
            }}>
            {theme.showLogo && <div className={styles.mainLogo}><MainLogo /></div>}
            <div className={styles.slide}
                style={{
                    '--background-image': `url(${theme.background})`,
                    '--background-image-tablet': `url(${theme.backgroundTablet})`
                }}></div>
            <div className={styles.watchButtonContainer}>
                {theme.showWatchButton && <WatchButton />}
            </div>
        </div>
    )
}

export default withTheme(supportedThemes)(HeroVideo)
