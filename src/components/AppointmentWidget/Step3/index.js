// @flow
import * as React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import styleParent from '../CalendarMessage/styles.module.scss'
import { Store } from 'Store.js'
import { useTranslation } from 'react-i18next'
import transDomain from '../translations/index.translations'
import { sendAppointmentDate } from 'Actions'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

type Props = {
    active: boolean,
    timezone: string,
    clientName: string
}

function Step3 (props: Props) {
    const { state, dispatch } = React.useContext(Store)
    const { t } = useTranslation(transDomain)

    let test = state.chatBot.appointmentDate && format(utcToZonedTime(state.chatBot.appointmentDate, props.timezone), 'PPpp')

    return (
        <div className={cn(
            styleParent.container__picker__panel,
            props.active ? styleParent.isActive : false
        )}>
            <div className={styles.container__picker__confirm}>
                <div className={styles.container__picker__confirm__message}>
                    Just to confirm…<br/>You will be coming in to<br/><strong>{props.clientName}</strong><br/><strong>{test}</strong>.<br/>Would
                    you like to keep this time?
                </div>
                <button type="button"
                    className={styleParent.container__picker__button}
                    onClick={() => {
                        dispatch({
                            type: 'CHAT_BOT_SET_STEP',
                            payload: 'step1'
                        })
                    }}
                >
                    {t('appointment.reject')}
                </button>
                <button type="button"
                    className={cn(styleParent.container__picker__button, styles['container__picker__button--primary'])}
                    onClick={() => {
                        sendAppointmentDate(dispatch, state.chatBot.appointmentDate)
                        dispatch({
                            type: 'CHAT_BOT_SET_STEP',
                            payload: 'step4'
                        })
                    }}
                >{t('appointment.confirm')}</button>
            </div>
        </div>
    )
}

export default Step3
