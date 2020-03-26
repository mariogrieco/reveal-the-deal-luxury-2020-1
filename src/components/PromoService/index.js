// @flow
import * as React from 'react'
import cn from 'classnames'

import { withTranslation, Trans } from 'react-i18next'
import { Store } from 'Store'
import { Currency } from 'i18n/NumberFormatter'
import { formatDateTime } from 'i18n/DateFormat'

import MainLogo from 'components/MainLogo'
import PromoVoucher from 'components/PromoVoucher'
import usePromoCode from 'util/hooks/usePromoCode'

import styles from './styles.module.scss'
import withTheme from 'hoc/withTheme'
import themes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'

function PromoService (props) {
    const promoCode = usePromoCode()
    const { state } = React.useContext(Store)
    const { t, theme } = props
    const currencyFormatter = Currency(state.currency, state.locale)

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <MainLogo logoColor={theme.colors.primary} titleColor={theme.colors.ternary} className={styles.logo} logoClassName={styles.logoSvg} title={state.campaign.client.name} />

                <PromoVoucher width="100%" promoCode={promoCode} />

                <div className={styles.bubble} style={{ background: theme.bubbleBorder }}>
                    <div className={styles.bubbleBg} style={{ background: theme.bubbleBg }} />

                    <span className={styles.bubbleText}>
                        <div className={styles.bubbleTitle}>{t('bubble.title')}</div>
                        <div className={styles.bubbleDescription}>
                            {t('bubble.description', {
                                expiryDate: formatDateTime(state.campaign.expiryDate, 'long')
                            })}
                        </div>
                    </span>
                </div>
            </div>

            <div className={styles.cars}>
                <img src={theme.cars} alt=""/>
            </div>

            <div className={styles.bottomContainer}>
                <h1 className={styles.title} style={{ color: theme.colors.primary }}>
                    <Trans i18Key="title">
                        <strong>ON NOW!</strong> FOR SELECT CLIENTS
                    </Trans>
                </h1>

                <p className={styles.description} style={{ color: theme.colors.ternary }}>
                    {t('description', {
                        expiry: formatDateTime(state.campaign.expiryDate, 'long'),
                        voucherName: state.campaign.incentives.voucher.name,
                        voucherValue: currencyFormatter.format(state.campaign.incentives.voucher.value),
                        voucherType: state.campaign.incentives.voucher.type
                    })}
                </p>

                <div className={styles.bottomRibbon} style={{ background: theme.colors.ternary }}>
                    <div className={styles.bottomRibbonLabel}>{t('visit')}</div>
                    <div className={styles.bottomRibbonValue} style={{ color: theme.colors.primary }}>{window.location.host}/{window.location.pathname.split('/')[1]}</div>
                    <div className={styles.bottomRibbonLabel}>{t('promo_code')}</div>
                    <div className={cn(styles.bottomRibbonValue, styles.bottomRibbonPromoCode)} style={{ color: theme.colors.primary }}>{promoCode}</div>
                </div>

                <div className={styles.footerContainer}>
                    <div className={styles.footerDisclaimer} style={{ color: theme.colors.ternary }}>
                        {t('disclaimer')}
                    </div>

                    <div className={cn(styles.footerLogo, { [styles.bigLogo]: theme.bigLogo })}>
                        <img src={theme.manufacturerLogo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(themes)(PromoService))
