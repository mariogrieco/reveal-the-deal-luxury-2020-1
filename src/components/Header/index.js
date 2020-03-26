// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import MainLogo from '../MainLogo'
import { Store } from 'Store'

function Header (props) {
    const { theme } = props
    const { state } = React.useContext(Store)
    return (
        <>
            <div className={styles.bgWrapper} style={{ backgroundImage: `url(${theme.background})` }}>
                <div className={styles.logoContainer}>
                    <MainLogo title={state.campaign.client.name} />
                </div>
                <div className={styles.cars}>
                    <div alt={'cars'} style={{
                        '--cars': `url(${theme.cars})`,
                        '--cars-mobile': `url(${theme.carsMobile})`
                    }} />
                </div>
            </div>
        </>
    )
}

export default withTheme(supportedThemes)(Header)
