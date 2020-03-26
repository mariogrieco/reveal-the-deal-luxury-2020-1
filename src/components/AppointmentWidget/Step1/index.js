// @flow
import * as React from 'react'
import cn from 'classnames'
import styleParent from '../CalendarMessage/styles.module.scss'
import styles from './styles.module.scss'
import { Store } from 'Store.js'
import { useTranslation } from 'react-i18next'
import transDomain from '../translations/index.translations'
import DatePicker from 'pikaday-react-wrapper'

import 'pikaday/scss/pikaday.scss'
import './picker.scss'

type Props = {
    active: boolean
}

function Step1 (props: Props) {
    const { dispatch } = React.useContext(Store)
    const { t } = useTranslation(transDomain)
    let maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 1)

    return (
        <div className={cn(
            styleParent.container__picker__panel,
            props.active ? styleParent.isActive : false
        )}>
            <div className={styleParent.container__picker__panel__header}>
                <div className={styleParent.container__picker__panel__title}>
                    {t('appointment.date')}
                </div>
            </div>
            <div className={styles.container__picker__panel__wrapper}>
                <DatePicker
                    placeholder="Select Date"
                    format="YYYY/MM/DD"
                    maxDate={maxDate}
                    minDate={new Date()}
                    value={new Date()}
                    bound={false}
                    showDaysInNextAndPreviousMonths={true}
                    theme={'theme-container'}
                    onChange={(value) => {
                        dispatch({
                            type: 'CHAT_BOT_SET_STEP',
                            payload: 'step2'
                        })
                        dispatch({
                            type: 'CHAT_BOT_SET_APPOINTMENT_DATE',
                            payload: value
                        })
                    }}
                    disableDayFn={(day) => {
                        return day.getDay() === 0
                    }}
                />
            </div>
        </div>
    )
}

export default Step1
