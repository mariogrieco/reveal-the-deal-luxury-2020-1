// @flow
import * as React from 'react'
import { Redirect } from 'react-router'

import { Store } from 'Store'
import { deleteLead } from 'Actions'

import { useTranslation } from 'react-i18next'
import transDomain from './translations/index.translations'

import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes'

import Button from 'components/Button'
import HeaderWithVoucher from 'components/HeaderWithVoucher'

import styles from './styles.module.scss'
import UpdateEmailForm from 'components/UpdateEmailForm'

function SuccessInfo (props) {
    const { theme } = props
    const { state, dispatch } = React.useContext(Store)
    const [ isDone, setIsDone ] = React.useState(false)
    const { t } = useTranslation(transDomain)

    if (isDone) { // Redirect back to registration page
        return <Redirect to={`${window.location.pathname.replace('/success', '')}${window.location.search}`} push />
    }

    return (
        <div className={styles.container}>
            <HeaderWithVoucher />

            <div className={styles.inner}>
                <div className={styles.congratsContainer}>
                    <p className={styles.congratsTitle} style={{ color: theme.congratsColor }}>
                        {t('congrats', {
                            firstName: state.lead.fields.firstName,
                            voucherValue: state.lead.incentives.voucher.value,
                            voucherName: state.lead.incentives.voucher.name,
                            carMake: state.lead.fields.newVehicleMake,
                            carModel: state.lead.fields.newVehicleModel
                        })}
                    </p>

                    <p className={styles.congratsSubtitle}>{t('final_details', { vehicle: `${state.lead.fields.newVehicleMake} ${state.lead.fields.newVehicleModel}` })}</p>
                </div>

                <div className={styles.finalDetails}>
                    <UpdateEmailForm/>

                    <Button
                        onClick={() => { deleteLead(dispatch); setIsDone(true) }}
                        style={{ color: '#fff', backgroundColor: theme.primary }}
                    >END YOUR SESSION</Button>
                </div>
            </div>
        </div>
    )
}

export default withTheme(supportedThemes)(SuccessInfo)
