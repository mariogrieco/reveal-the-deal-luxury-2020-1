// @flow
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import cn from 'classnames'

import { Store } from 'Store'

import Hero from 'components/Hero'
import HeroVideo from 'components/HeroVideo'

import styles from './styles.module.scss'
import BrandsFooter from 'components/BrandsFooter'

type Props = {
    location: Location
}

export default withRouter((props: Props) => {
    const { dispatch } = React.useContext(Store)
    React.useMemo(() => props.history.listen(() => {
        if (window.location.pathname.split('/').length === 2) {
            dispatch({
                type: 'SET_LEAD',
                payload: null
            })
        }
    }), [props.history, dispatch])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <HeroVideo />
                </div>
                <div className={cn(styles.registerForm, styles.rightSide)}>
                    <Hero />
                </div>
            </div>
            <BrandsFooter />
        </>
    )
})
