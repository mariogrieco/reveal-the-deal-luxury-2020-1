// @flow
import * as React from 'react'
import cn from 'classnames'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'

function ExtraIncentive (props) {
    const { theme } = props

    return (
        <div className={cn(styles.bgWrapper, props.className)}>
            <span className={styles.car} style={{ '--background-car-image': `url(${theme.car})` }}></span>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(ExtraIncentive))
