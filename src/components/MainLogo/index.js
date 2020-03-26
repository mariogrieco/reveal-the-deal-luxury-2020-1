// @flow
import * as React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

import withTheme from 'hoc/withTheme'
import themes from './themes/__supportedThemes.js'

import LuxuryLogo from './LuxuryLogo'

function MainLogo (props) {
    return (
        <div className={cn(styles.container, styles.logo, props.className)} style={props.style}>
            <LuxuryLogo eventColor={props.theme.eventColor} />
        </div>
    )
}

export default withTheme(themes)(MainLogo)
