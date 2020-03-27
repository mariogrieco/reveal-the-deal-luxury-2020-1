// @flow
import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { Store } from 'Store'
import { updateLead } from 'Actions'

import Header from 'components/Header'
import VoucherValue from 'components/VoucherValue'
import CashbackAndRates from 'components/CashbackAndRates'
import Sidebar from 'components/Sidebar'
import LeadGenForm from 'components/LeadGenForm/Step3'
import StepsLayout from 'components/StepsLayout'
import MainLogo from 'components/MainLogo'
import MessageIncentive from 'components/MessageIncentive'

import styles from './styles.module.scss'

type Props = {
    location: Location
}

export default (props: Props) => {
    const { state, dispatch } = React.useContext(Store)
    const [submitted, setSubmitted] = React.useState(false)
    const name = state.campaign.contactInfo.name

    if (!state.lead) {
        return <Redirect to={`${props.location.pathname.replace('/step-3', '')}${props.location.search}`} push />
    }

    if (submitted) {
        return <Redirect to={`${props.location.pathname.replace('step-3', 'shopping')}${props.location.search}`} push />
    }

    return (
        <StepsLayout step={3} header={<Header/>} sidebar={
            <Sidebar backgroundImageName={'bg3'} className={styles.sidebarContainer} title={<MainLogo />}>
                <MessageIncentive
                    message={`${name}, we are excited to share this unique trade-in opportunity with you.`}
                    />
                <VoucherValue />
                <CashbackAndRates small className={styles.cashbackAndRates} />
            </Sidebar>
        }>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <LeadGenForm
                        onSubmit={async (data, done) => {
                            try {
                                let lead = {
                                    fields: data,
                                    isComplete: true
                                }
                                await updateLead(dispatch, state.code, lead)
                                setSubmitted(true)
                                // window.scrollTo(0, 0)
                            } catch (err) {
                                alert('Oops something went wrong')
                                console.error(err)
                                done(err)
                            }
                        }}
                        initialValues={state.lead && state.lead.fields ? state.lead.fields : {}}
                    />
                </div>
            </div>
        </StepsLayout>
    )
}
