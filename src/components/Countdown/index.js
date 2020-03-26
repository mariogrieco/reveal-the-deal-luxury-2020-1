// @flow
import * as React from 'react'
import styles from './styles.module.scss'

import { withTranslation } from 'react-i18next'

import transDomain from './translations/index.translations'

type Difference = {
    seconds: string,
    minutes: string,
    hours: string,
    days: string
}

function formatDifference(difference: number): Difference {
    let seconds = Math.max(0, Math.floor((difference / 1000) % 60))
    let minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60))
    let hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24))
    let days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))

    return {
        days: ('0' + days).slice(-2),
        hours: ('0' + hours).slice(-2),
        minutes: ('0' + minutes).slice(-2),
        seconds: ('0' + seconds).slice(-2)
    }
}

export default withTranslation(transDomain)(function Countdown(props) {
    const { t, primaryColor } = props
    const [formattedDate, setFormattedDate] = React.useState(formatDifference(props.date.getTime() - (new Date()).getTime()))

    React.useEffect(() => {
        let interval = setInterval(() => {
            const difference = props.date.getTime() - (new Date()).getTime()

            if (difference <= 0) { clearInterval(interval); return }

            setFormattedDate(formatDifference(difference))
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [props.date])

    return (
        <span className={styles.countdown} style={{ '--primary-color': primaryColor }}>
            <span>{formattedDate.days} {t('days')}</span>
            <span>{formattedDate.hours} {t('hours')}</span>
            <span>{formattedDate.minutes} {t('minutes')}</span>
            <span>{formattedDate.seconds} {t('seconds')}</span>
        </span>
    )
})
