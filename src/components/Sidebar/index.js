// @flow
import * as React from 'react'
import cn from 'classnames'

import withTheme from 'hoc/withTheme'

import supportedThemes from './themes/__supportedThemes.js'
import styles from './styles.module.scss'

function Sidebar (props) {
    const { theme, title, backgroundImageName } = props
    const bgImage = theme[backgroundImageName]
    return (
        <div className={cn(styles.container, props.className)} style={{
            backgroundColor: theme.bgColor,
            '--background-img': `url(${bgImage})`
        }}>
            {title && <div className={styles.sidebarTtitle}>{title}</div>}
            {props.children}
        </div>
    )
}

export default withTheme(supportedThemes)(Sidebar)
