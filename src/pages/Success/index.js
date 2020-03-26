// @flow
import * as React from 'react'
import { Redirect } from 'react-router'

import { Store } from 'Store'
import SuccessInfo from 'components/SuccessInfo'

import styles from './styles.module.scss'

import RegisterGroup from 'components/RegisterGroup'

type Props = {
    location: Location
}

export default (props: Props) => {
    const { state } = React.useContext(Store)

    if (!state.lead) {
        return <Redirect to={`${props.location.pathname.replace('/success', '')}${props.location.search}`} push />
    }

    return (
        <div className={styles.container}>
            <SuccessInfo />
            <RegisterGroup />
        </div>
    )
}
