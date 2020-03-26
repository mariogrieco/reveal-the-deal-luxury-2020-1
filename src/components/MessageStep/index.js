import * as React from 'react'
import { withTranslation } from 'react-i18next'
import transDomain from './translations/index.translations'
import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes.js'

import styles from './styles.module.scss'

function MessageStep ({ theme, t, title, message }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} style={{
                color: theme.titleColor
            }}>
                {title}
            </h1>
            <p className={styles.message}>
                {message}
            </p>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(MessageStep))
