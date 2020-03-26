// @flow
import * as React from 'react'

import { withTranslation } from 'react-i18next'
import { Store } from 'Store'

import styles from './styles.module.scss'

import transDomain from './translations/index.translations'

function MessageIncentive (props) {
    const { state } = React.useContext(Store)
    return (
        <div className={styles.message}>
            <p className={styles.messageParagraph}>{props.message}</p>
            <div className={styles.messageFooter}>
                <strong>{state.campaign.contactInfo.name}</strong>
                {state.campaign.contactInfo.position}, {state.campaign.client.name}
            </div>
        </div>
    )
}

export default withTranslation(transDomain)(MessageIncentive)
