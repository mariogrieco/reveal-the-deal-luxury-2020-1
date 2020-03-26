// @flow
import * as React from 'react'
import cn from 'classnames'
import { Store } from 'Store.js'
import { useTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'
import useTimeout from 'hook/useTimeout'

import Message from './Message/index'
import CalendarMessage from './CalendarMessage/index'

import transDomain from './translations/index.translations'

import { sendClientMessage } from 'Actions'

function getSalutationFromHours () {
    let hours = (new Date()).getHours()

    if (hours === null) {
        return 'generic'
    }

    if (hours < 4 || hours > 18) {
        return 'evening'
    }

    if (hours < 12) {
        return 'morning'
    }

    return 'afternoon'
}

type Props = {
    onlineBooking: Object,
    timezone: string,
    lead: Object,
    clientName: string
}

function AppointmentWidget (props: Props) {
    const { theme } = props
    const { dispatch } = React.useContext(Store)
    const { t } = useTranslation(transDomain)

    const textareaRef = React.useRef(null)
    const transcriptWrapper = React.useRef(null)

    const [typing, setTyping] = React.useState(false)
    const [minimize, setMinimize] = React.useState(false)
    const [messages, setMessages] = React.useState([])

    let timer = 2000
    useTimeout(() => {
        setTyping(true)
    }, timer)
    useTimeout(() => {
        setMessages([...messages, <Message
            text={t('conversation.greet', {
                salutation: t('salutations.' + getSalutationFromHours()),
                name: props.lead ? props.lead.fields.firstName : 'Anonymous'
            })}
            type={'bot'}
            name={props.onlineBooking.rep.name}
        />])
    }, timer += 3000)

    useTimeout(() => {
        setMessages([...messages, <Message
            text={t('conversation.one')}
            type={'bot'}
            name={props.onlineBooking.rep.name}
        />])
    }, timer += 2000)

    useTimeout(() => {
        setMessages([...messages, <Message
            text={t('conversation.two', { value: props.onlineBooking.value, incentive: props.onlineBooking.incentive })}
            type={'bot'}
            name={props.onlineBooking.rep.name}
        />])
    }, timer += 20500)

    useTimeout(() => {
        setMessages([...messages, <Message
            text={t('conversation.three', { client: props.clientName })}
            type={'bot'}
            name={props.onlineBooking.rep.name}
        />])
        setTyping(false)
    }, timer += 20500)

    useTimeout(() => {
        dispatch({
            type: 'CHAT_BOT_SET_STEP',
            payload: 'step1'
        })
        setMessages([...messages, <CalendarMessage hoursOpened={props.onlineBooking.hoursOpened} clientName={props.clientName} timezone={props.timezone}/>])
        setTyping(false)
    }, timer += 2000)

    React.useEffect(() => {
        transcriptWrapper.current.scrollTop = transcriptWrapper.current.scrollHeight
    }, [messages])

    return (
        <div
            style={{
                '--primaryColor': theme.colors.primary,
                '--secondaryColor': theme.colors.secondary
            }}
        >
            <div className={cn(styles.container, minimize ? styles['is-minimized'] : '')}>
                <div className={styles.container__inner}>
                    <div
                        className={styles.container__close}
                        onClick={() => setMinimize(true)}
                    />

                    <div className={styles.container__heading}>
                        <img src={props.onlineBooking.rep.image} className={styles.container__logo} alt='logo'/>
                        <strong>ONTIME</strong> EVENT CONCIERGE
                    </div>

                    <div className={styles['container__offer-wrapper']}>
                        <p>Receive a
                            Bonus <strong>${props.onlineBooking.value} {props.onlineBooking.incentive}</strong> when you
                            book your appointment online!</p>
                    </div>

                    <div ref={transcriptWrapper} className={styles.container__transcript__wrapper}>
                        {messages.map((message, index) => React.cloneElement(message, { key: index }))}
                    </div>

                    <div className={styles.container__footer}>
                        <div className={cn(
                            styles.container__activity,
                            typing ? styles['is-active'] : false
                        )}>{t('typing', { name: props.onlineBooking.rep.name })}</div>
                        <textarea
                            ref={textareaRef}
                            name="message"
                            rows="2"
                            defaultValue={''}
                            className={styles['container__user-input']}
                            placeholder="Type Your Message"
                            onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    event.preventDefault()
                                    setMessages([...messages, <Message
                                        text={textareaRef.current.value}
                                        type={'user'}
                                        name={props.lead ? props.lead.fields.firstName : 'Anonymous'}
                                    />])
                                    sendClientMessage(dispatch, textareaRef.current.value)
                                    textareaRef.current.value = ''
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={cn(styles.container__tab, minimize ? styles['is-visible'] : '')} onClick={() => setMinimize(false)}
            >
                {t('bookButton')}
            </div>
        </div>
    )
}

export default withTheme(supportedThemes)(AppointmentWidget)
