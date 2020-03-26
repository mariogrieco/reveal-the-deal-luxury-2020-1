// @flow
import * as React from 'react'
import cn from 'classnames'

import { Store } from 'Store.js'
import { withTranslation, Trans } from 'react-i18next'
import { Currency, Percent } from 'i18n/NumberFormatter'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'

function CashbackAndRates (props) {
    const { theme } = props
    const { state } = React.useContext(Store)
    const currencyFormatter = Currency(state.currency, state.locale)
    const incentives = state.campaign.incentives.manufacturer
    const titleColor = theme.titleColor
    const valueColor = theme.valueColor
    return (
        <div className={cn(styles.container, props.className, {
            [styles.areCombinable]: incentives.areCombinable
        })} style={{ backgroundColor: theme.backgroundColor, '--plus-icon-bg': theme.plusIconBg, '--mask-url': `url(${theme.mask})` }}>
            <div className={styles.cashBack}>
                <span className={styles.cashBackTitle} style={{ color: titleColor }}>
                    <Trans i18nKey="cash_back">
                        Combine with <br /><strong>Cash Incentives</strong> up to
                    </Trans>
                </span>
                <span className={cn(styles.cashBackValue, { [styles.smallValues]: props.small })} style={{ color: valueColor }}>{currencyFormatter.format(incentives.cashBack)}</span>
            </div>

            <div className={styles.rates}>
                <span className={styles.ratesTitle} style={{ color: titleColor }}>
                    <Trans i18nKey="rates">
                        Don't forget about<br />our <strong>Rates</strong> as low as
                    </Trans>
                </span>
                <span className={cn(styles.ratesValue, { [styles.smallValues]: props.small })} style={{ color: valueColor }}>{Percent.format((Number.parseFloat(incentives.interestRate).toPrecision(3) / 100) || 0)}</span>
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(CashbackAndRates))
