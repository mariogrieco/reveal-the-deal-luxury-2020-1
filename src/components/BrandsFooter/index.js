// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes.js'
import Brands from 'components/Brands'
import CashbackAndRates from 'components/CashbackAndRates'

import styles from './styles.module.scss'

const BrandsFooter = ({ theme }) => {
    return (
        <div className={styles.summaryFooter}
            style={{
                '--border-color': theme.borderColor,
                '--plus-icon-background-color': theme.plusIconBackgroundColor,
                '--plus-icon-color': theme.plusIconColor,
                backgroundColor: theme.backgroundColor
            }}>
            <Brands />
            <CashbackAndRates className={styles.cashbackAndRates} />
        </div>
    )
}

export default withTheme(supportedThemes)(BrandsFooter)
