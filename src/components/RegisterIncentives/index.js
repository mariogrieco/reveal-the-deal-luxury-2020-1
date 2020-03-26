// @flow
import * as React from 'react'

import { withTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import supportedThemes from './themes/__supportedThemes.js'
import styles from './styles.module.scss'

import transDomain from './translations/index.translations'

import RegisterGroupLight from 'components/RegisterGroupLight'

function RegisterIncentives (props) {
    return (
        <div className={styles.inner} style={{ '--border-color': props.theme.borderColor }}>

            <div className={styles.incentivesWrapper}>
                <RegisterGroupLight />
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(RegisterIncentives))
