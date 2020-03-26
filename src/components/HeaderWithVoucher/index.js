// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import Voucher from 'components/Voucher'
import Header from 'components/Header'

import { Store } from 'Store'
import useInterval from 'hook/useInterval'
import { svgToImage } from 'helpers'
import { sendAutoresponder } from 'Actions'
import AppointmentWidget from '../AppointmentWidget'
import useTimeout from 'hook/useTimeout'

function HeaderWithVoucher (props) {
    const { theme } = props
    const { state, dispatch } = React.useContext(Store)

    const voucherRef = React.useRef(null)
    const [appointmentWidget, setAppointmentWidget] = React.useState(false)

    useInterval(() => {
        if (voucherRef.current && state.autoresponderShouldBeSent) {
            svgToImage(voucherRef.current, async blob => {
                await sendAutoresponder(dispatch, `${state.campaign.incentives.voucher.name}.png`, blob)
            })
        }
    }, state.autoresponderShouldBeSent ? 1000 : null)

    useTimeout(() => {
        if (state.campaign.hasOwnProperty('incentives') && state.campaign.incentives.hasOwnProperty('onlineBooking')) {
            let localTimezone
            try {
                localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {
                localTimezone = state.campaign.timezone
            }
            setAppointmentWidget(
                <AppointmentWidget
                    onlineBooking={state.campaign.incentives.onlineBooking}
                    timezone={localTimezone}
                    lead={state.lead}
                    clientName={state.campaign.client.name}
                />
            )
        }
    }, 5000)

    return (
        <>
            { appointmentWidget }
            <div className={styles.bgWrapper} style={{ backgroundImage: `url(${theme.background})` }}>
                <Header />
            </div>

            <div className={styles.voucher}>
                <Voucher width="100%" ref={voucherRef}/>
            </div>
        </>
    )
}

export default withTheme(supportedThemes)(HeaderWithVoucher)
