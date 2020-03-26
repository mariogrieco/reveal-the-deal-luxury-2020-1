// @flow
import * as React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import styleParent from '../CalendarMessage/styles.module.scss'
import { Store } from 'Store.js'
import { useTranslation } from 'react-i18next'
import transDomain from '../translations/index.translations'
import { setHours } from 'date-fns'

type Props = {
    active: boolean
}

function Step2 (props: Props) {
    const { state, dispatch } = React.useContext(Store)
    const { t } = useTranslation(transDomain)

    return (
        <div className={cn(
            styleParent.container__picker__panel,
            props.active ? styleParent.isActive : false
        )}>
            <div className={styleParent.container__picker__panel__header}>
                <div className={styleParent.container__picker__panel__back}
                    onClick={() => {
                        dispatch({
                            type: 'CHAT_BOT_SET_STEP',
                            payload: 'step1'
                        })
                    }}
                >
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve" height="32" width="32">
                        <path fill="#fff" d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/>
                        <path d="M0-.5h48v48h-48z" fill="none"/>
                    </svg>
                </div>
                <div className={styleParent.container__picker__panel__title}>
                    {t('appointment.time')}
                </div>
            </div>

            <div className={styles.container__picker__time}>
                {props.hoursOpened.map((hour, index) => (
                    <div key={index} className={styles.container__picker__time__hour}
                        onClick={() => {
                            dispatch({
                                type: 'CHAT_BOT_SET_APPOINTMENT_DATE',
                                payload: setHours(state.chatBot.appointmentDate, hour)
                            })
                            dispatch({
                                type: 'CHAT_BOT_SET_STEP',
                                payload: 'step3'
                            })
                        }}
                    >
                        {hour < 13 ? hour : (hour - 12)} {hour < 12 ? 'AM' : 'PM'}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Step2
