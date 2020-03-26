// @flow
import * as React from 'react'
import { Redirect } from 'react-router-dom'

import MessageIncentive from 'components/MessageIncentive'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BrandsFooter from 'components/BrandsFooter'
import StepsLayout from 'components/StepsLayout'
import LeadGenForm from 'components/LeadGenForm/Step1/Step1'
import styles from './styles.module.scss'
import MainLogo from 'components/MainLogo'

import { Store } from 'Store'
import { updateLead } from 'Actions'

type Props = {
    location: Location
}

export default (props: Props) => {
    const { state, dispatch } = React.useContext(Store)
    const [submitted, setSubmitted] = React.useState(false)

    if (!state.lead) {
        return <Redirect to={`${props.location.pathname.replace('/step-1', '')}${props.location.search}`} push />
    }

    if (submitted) {
        return <Redirect to={`${props.location.pathname.replace('step-1', 'step-2')}${props.location.search}`} push />
    }

    return (
        <StepsLayout step={1} header={<Header/>} sidebar={
            <Sidebar backgroundImageName={'bg1'} className={styles.sidebarContainer} title={<MainLogo />}>
                <MessageIncentive
                    message={'We received special approval to run this event this season and look forward to rewarding you for participating! It is a great time for an upgrade right now because many makes and models are in high demand and we are in need of more pre-owned inventory. This offer is a significant opportunity and we would be pleased if you took advantage of it.'}
                />
            </Sidebar>
        }>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <LeadGenForm
                        onSubmit={async (data, done) => {
                            try {
                                let lead = {
                                    fields: data,
                                    isComplete: false
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

                    <div className={styles.brandsContainer}>
                        <BrandsFooter />
                    </div>
                </div>
            </div>
        </StepsLayout>
    )
}
