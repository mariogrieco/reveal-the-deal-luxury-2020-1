import React from 'react'
import ReactDOM from 'react-dom'
import supportedThemes from './themes/__supportedThemes'

import withTheme from 'hoc/withTheme'

import { useTransition, animated } from 'react-spring'

import styles from './styles.module.scss'

export const ModalBody = withTheme(supportedThemes)(function ({ children, show, theme }) {
    const transitions = useTransition(show, null, theme.modalBody)
    return transitions.map(({ item, key, props }) => item && <animated.div key={key} style={props} className={styles.modalBody}>{children}</animated.div>)
})

export const ModalOverlay = withTheme(supportedThemes)(({ onClickOverlay, show, theme }) => {
    const transitions = useTransition(show, null, theme.modalOverlay)
    return transitions.map(({ item, key, props }) => item && <animated.div key={key} style={props} onClick={onClickOverlay} className={styles.modalOverlay} />)
})

export default function ModalContainer ({ children, show, onClickOverlay }) {
    React.useEffect(() => {

        if (show) {
            window.document.body.style.overflow = 'hidden'
        } else {
            window.document.body.style.overflow = null
        }

        return () => {
            window.document.body.style.overflow = null
        }

    }, [show])
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClickOverlay={onClickOverlay} show={show} />
            <ModalBody show={show}>
                {children}
            </ModalBody>
        </>,
        document.getElementById('modal-root')
    )
}
