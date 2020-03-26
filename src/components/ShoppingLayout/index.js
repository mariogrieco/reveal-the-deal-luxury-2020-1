// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'

import supportedThemes from './themes/__supportedThemes.js'

// import styles from './styles.module.scss'

function ShoppingLayout ({ theme, children }) {
    return (
        <div style={{ backgroundColor: theme.background }}>
            {children}
        </div>
    )
}

export default withTheme(supportedThemes)(ShoppingLayout)
