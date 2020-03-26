// @flow
import * as React from 'react'

import { withTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'
import cn from 'classnames'

import { Store } from 'Store'

type ImagePath = string;

type Props = {
    theme: {
        background: string,
        color: string,
        logo: ImagePath,
    }
}

const Footer = (props: Props) => {
    const { state } = React.useContext(Store)
    const { t, theme } = props

    return (
        <div className={cn(styles.container)} style={{ background: theme.background, color: theme.color, '--border-color': theme.borderColor }}>
            <div className={styles.innerContainer}>
                <p className={styles.dealershipInfo} style={{ '--dealership-color': theme.dealershipColor }}>
                    {state.campaign.client.name}

                    {
                        state.campaign.client.address &&
                        `| ${Object.values(state.campaign.client.address).filter(_ => _).join(', ')}`
                    }

                    {
                        state.campaign.contactInfo.phoneNumber &&
                        `| ${state.campaign.contactInfo.phoneNumber}`
                    }
                </p>

                <p className={styles.disclaimer}>{t('disclaimer')}</p>

                <img className={styles.logo} src={theme.logo} alt='' />
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(Footer))
