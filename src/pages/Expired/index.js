// @flow
import * as React from 'react'

import ExpiredIcon from 'components/ExpiredIcon'
import styles from './styles.module.scss'

type Props = {
    location: Location
}

export default (props: Props) => (
    <>
        <div className={styles.container}>
            <div className={styles.containerBox}>
                <div className={styles.boxIcon}>
                    <ExpiredIcon />
                </div>
                <div className={styles.boxMessage}>
                    This event has expired
                </div>
            </div>
        </div>
    </>
)
