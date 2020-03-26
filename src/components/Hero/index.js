// @flow
import * as React from 'react'
import { withTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'
import RegistrationForm from 'components/RegistrationForm'
import cn from 'classnames'
import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'
import { Currency } from 'i18n/NumberFormatter'

import type { Theme } from './themes/__supportedThemes'

import { Store } from 'Store.js'
import MainLogo from 'components/MainLogo'

type Props = {
    theme: Theme
}

function Hero (props: Props) {
    const { theme, t } = props
    const { state } = React.useContext(Store)
    const currencyFormatter = Currency(state.currency, state.locale)
    const voucher = state.campaign.incentives.voucher
    // const bgOverlay = Color(theme.colors.primary).mix(Color('#000'), 0.6).fade(0.8)
    return (
        <div className={styles.mainContainer} style={{ backgroundColor: theme.backgroundColor }}>

            <div className={styles.bgWrapper} style={{ backgroundImage: null }}>

                <div className={styles.container}>
                    <div className={cn(styles.registerForm, styles.rightSide)}>
                        <div className={styles.formContainer}>
                            {theme.showLogo && <MainLogo />}
                            <span className={styles.voucherMessage} style={{ color: theme.primaryColor }}>
                                {t('title', {
                                    name: voucher.name
                                })}
                                {' '}
                                <strong>{t('title_strong', {
                                    value: currencyFormatter.format(voucher.value)
                                })}</strong>
                                {' '}
                                {t('title_end')}
                            </span>
                            <RegistrationForm />
                            <div className={styles.promoMessage}>Enter your <strong>promo code</strong> to claim your gifts</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(Hero))
