// @flow
import * as React from 'react'

import { Store } from 'Store.js'

import supportedThemes from './themes/__supportedThemes.js'
import { Currency, Percent } from 'i18n/NumberFormatter'
import { withTranslation, Trans } from 'react-i18next'
import transDomain from './translations/index.translations'

import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'

function RegisterGroup(props) {
    const { t, theme } = props
    const { state } = React.useContext(Store)
    const incentives = state.campaign.incentives.manufacturer
    const currencyFormatter = Currency(state.currency, state.locale)
    const voucher = state.campaign.incentives.voucher
    return (
        <div className={styles.container}>
            <div>
                <h3 style={{
                    color: theme.textColor
                }}>
                    {t('title', {
                        province: state.campaign.client.address.province,
                        voucher: state.campaign.incentives.voucher.name,
                        type: state.campaign.incentives.voucher.type
                    })}
                </h3>
                <span style={{
                    color: 'white'
                }}>{currencyFormatter.format(voucher.value)}</span>
            </div>
            <div>
                <h3 style={{
                    color: theme.textColor
                }}>
                    <Trans i18nKey="cash_back">
                        Combine with <br /><strong>Cash Incentives</strong> up to
                    </Trans>
                </h3>
                <span style={{
                    color: 'white'
                }}>{currencyFormatter.format(incentives.cashBack)}</span>
            </div>
            <div>
                <h3 style={{
                    color: theme.textColor
                }}>
                    <Trans i18nKey="rates">
                        Don't forget about<br />our <strong>Rates</strong> as low as
                    </Trans>
                </h3>
                <span style={{
                    color: 'white'
                }}>{Percent.format((Number.parseFloat(incentives.interestRate).toPrecision(3) / 100) || 0)}</span>
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(RegisterGroup))
