// @flow
import React from 'react'
import cn from 'classnames'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

const StepsLayout = ({
    theme,
    header,
    sidebar,
    children,
    className,
    step
}) => {
    return (
        <div className={cn(styles.container, className)} style={{ backgroundColor: theme.backgroundColor }}>
            <div className={styles.header} style={{ backgroundImage: `url(${theme.stepsBg[step - 1]})` }}></div>
            <div className={styles.children}>{children}</div>
            <div className={styles.sidebar}>{sidebar}</div>
        </div>
    )
}

StepsLayout.defaultProps = {
    className: ''
}

export default withTheme(supportedThemes)(StepsLayout)
