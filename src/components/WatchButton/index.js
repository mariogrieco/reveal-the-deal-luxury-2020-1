// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'
import PlayIcon from './PlayIcon'

function WatchButton (props) {
    const { t, theme } = props
    return (
        <>
            <div style={{ backgroundColor: theme.borderColor }} className={styles.container}>
                <span style={{ color: theme.color, background: theme.background }}>
                    <strong>{t('title')}</strong>
                    <span className={styles.play}><PlayIcon /></span>
                </span>
            </div>
            <div className={styles.containerTablet} style={{ backgroundColor: theme.borderColor }}>
                <span className={styles.play} style={{ backgroundColor: theme.background }}>
                    <PlayIcon backgroundColor='#FFFFFF' />
                </span>
            </div>
        </>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(WatchButton))
