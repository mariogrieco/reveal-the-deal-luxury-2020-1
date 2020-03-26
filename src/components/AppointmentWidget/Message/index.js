// @flow
import * as React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

type Props = {
    key: Number,
    type: string,
    name: string,
    text: string
}

function Message (props: Props) {
    return (
        <div key={props.key} className={cn(
            styles.container__reply,
            styles.container__transcript_item,
            props.type === 'bot' ? styles.senderRep : styles.senderUser
        )}>
            <div className={styles.container__reply__name}>{props.name}</div>
            <p className={styles.container__reply__message}>{props.text}</p>
        </div>
    )
}

export default Message
