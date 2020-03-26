// @flow
import React from 'react'
import { withTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes.js'
import transDomain from './translations/index.translations'
import Countdown from 'components/Countdown'
import { Store } from 'Store'

const TopBar = ({ t, theme, date }) => {
    const { state } = React.useContext(Store)
    const name = state.campaign.contactInfo.name
    return (
        <>
            <div className={styles.container} style={{ backgroundColor: theme.background }}>
                {theme.showLogo &&
                    <div className={styles.logo} style={{
                        '--logo-container-size': theme.logoContainerSize,
                        backgroundColor: theme.alternateBackground,
                        ...theme.logoStyles || {}
                    }}>
                        <img src={theme.logo} alt="" style={{ ...theme.logoImgStyles || {} }} />
                    </div>
                }

                <div className={styles.expiryText} style={{ color: theme.color }}>
                    <span className={styles.eventMessage}>
                        {t('event_expiry')} &nbsp; <Countdown primaryColor={theme.primaryColor} date={date} />
                    </span>
                    <div className={styles.expiryTextRight} >
                        Welcome <span>{name}</span>
                    </div>
                </div>
            </div>

            <div className={styles.spacer} />
        </>
    )
}

TopBar.defaultProps = {
    date: new Date()
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(TopBar))
