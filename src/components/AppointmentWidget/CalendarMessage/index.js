// @flow
import * as React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Store } from 'Store.js'
import Step1 from '../Step1/index'
import Step2 from '../Step2/index'
import Step3 from '../Step3/index'
import Step4 from '../Step4/index'

type Props = {
    hoursOpened: Array<*>,
    timezone: string,
    clientName: string
}

function CalendarMessage (props: Props) {
    const { state } = React.useContext(Store)

    return (
        <div className={cn(styles.container__picker)}>
            <Step1 active={state.chatBot.currentStep === 'step1'}/>
            <Step2 active={state.chatBot.currentStep === 'step2'} hoursOpened={props.hoursOpened}/>
            <Step3 active={state.chatBot.currentStep === 'step3'} clientName={props.clientName} timezone={props.timezone}/>
            <Step4 active={state.chatBot.currentStep === 'step4'} clientName={props.clientName}/>
        </div>
    )
}

export default CalendarMessage
