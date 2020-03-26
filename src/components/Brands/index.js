import * as React from 'react'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'

import supportedThemes from './themes/__supportedThemes.js'
import transDomain from './translations/index.translations'

import styles from './styles.module.scss'

function BrandContainer ({ src, width = 41, height = 41 }) {
    return <div className={styles.brand} style={{ backgroundImage: `url(${src})`, width, height }}></div>
}

export const Brands = ({ theme, t }) => {
    return (
        <div className={styles.container} style={{ backgroundColor: theme.backgroundColor }}>
            <span className={styles.info}>{t('info')}</span>
            <div className={styles.brandsArea}>
                {theme.brands.map((uri, i) => <BrandContainer src={uri} key={i} />)}
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(Brands))
