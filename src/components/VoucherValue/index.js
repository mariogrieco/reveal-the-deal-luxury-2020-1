// @flow
import * as React from 'react'

import { Store } from 'Store.js'
import { withTranslation } from 'react-i18next'
import { Currency } from 'i18n/NumberFormatter'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'

function VoucherValue (props) {
    const { t, theme } = props
    const { state } = React.useContext(Store)
    const currencyFormatter = Currency(state.currency, state.locale)
    const voucher = state.campaign.incentives.voucher

    return (
        <div className={styles.container} style={{ color: theme.color, backgroundColor: theme.background }}>
            <span className={styles.title} style={{ color: theme.titleColor }}>{t('title', {
                voucher: state.campaign.incentives.voucher.name,
                type: state.campaign.incentives.voucher.type,
            })}</span>
            <span className={styles.value} style={{ color: theme.valueColor }}>{currencyFormatter.format(voucher.value)}</span>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(VoucherValue))
