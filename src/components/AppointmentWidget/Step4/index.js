/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import * as React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import styleParent from '../CalendarMessage/styles.module.scss'
import { useTranslation } from 'react-i18next'
import transDomain from '../translations/index.translations'
import { Store } from 'Store'
import { format } from 'date-fns'

function downloadIcs (downloadLinkRef, currentDate, startDate, eventName) {
    let icsMSG = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:Dealer.Appointments\nX-PUBLISHED-TTL:P1W\nBEGIN:VEVENT\nUID:ddc5617c0d8c\nDTSTART:' + startDate + '\nSEQUENCE:0\nTRANSP:OPAQUE\nDURATION:P0DT0H45M0S\nCLASS:PUBLIC\nSUMMARY:' + eventName + '\nDTSTAMP:' + currentDate + '\nEND:VEVENT\nEND:VCALENDAR'
    let blob = new Blob([icsMSG], { type: 'data:text/calendar;charset=utf8' })

    downloadLinkRef.current.href = window.URL.createObjectURL(blob)
    downloadLinkRef.current.setAttribute('download', 'appointment.ics')
    downloadLinkRef.current.click()
    window.URL.revokeObjectURL(downloadLinkRef.current.href)
}

type Props = {
    clientName: string,
    active: boolean
}

function Step4 (props: Props) {
    const downloadLinkRef = React.useRef(null)
    const { state } = React.useContext(Store)
    const { t } = useTranslation(transDomain)

    return (
        <div className={cn(
            styleParent.container__picker__panel,
            props.active ? styleParent.isActive : false
        )}>
            <div className={styles.container__picker__success}>
                <div className={styles.container__picker__success__icon}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" height="48" width="48">
                        <path
                            className={cn(styles.iconIsActive, styles.checkmark)}
                            fill="none"
                            strokeWidth="8"
                            strokeMiterlimit="10"
                            d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/>
                    </svg>
                </div>

                <div className={styles.container__picker__success__message}>
                    {t('appointment.success')}
                </div>

                <a href={''} ref={downloadLinkRef} style={ { display: 'none' } }>Download</a>
                <button
                    className={cn(styleParent.container__picker__button, styles['container__picker__button--primary'])}
                    onClick={(event) => {
                        downloadIcs(
                            downloadLinkRef,
                            format((new Date()), 'yyyyMMdd') + 'T' + format((new Date()), 'HHmmss') + 'Z',
                            state.chatBot.appointmentDate && format(state.chatBot.appointmentDate, 'yyyyMMdd') + 'T' + format(state.chatBot.appointmentDate, 'HHmmss') + '',
                            props.clientName
                        )
                        event.preventDefault()
                    }}
                >
                    {t('appointment.addToCalendar')}
                </button>
            </div>
        </div>
    )
}

export default Step4
