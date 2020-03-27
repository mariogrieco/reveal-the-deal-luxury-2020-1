import React from 'react'
import { ModalOverlay } from 'components/ModalContainer'

import { useTransition, animated } from 'react-spring'

export function MenuBody ({ children, show }) {
    const transitions = useTransition(show, null, {
        from: {
            position: 'fixed',
            zIndex: 102,
            right: 0,
            top: 0,
            bottom: 0,
            transform: 'translate3d(80%, 0, 0)'

        },
        enter: {
            position: 'fixed',
            zIndex: 102,
            right: 0,
            top: 0,
            bottom: 0,
            transform: 'translate3d(0%, 0, 0)'
        },
        leave: {
            position: 'fixed',
            zIndex: 102,
            right: 0,
            top: 0,
            bottom: 0,
            transform: 'translate3d(100%, 0, 0)'
        },
        unique: true
    })
    return transitions.map(({ item, key, props }) => item && <animated.div key={key} style={props}>{children}</animated.div>)
}

export default function ModalContainer ({ children, show, onClickOverlay, disabled }) {
    if (disabled) {
        return children
    }
    return (
        <>
            <ModalOverlay show={show} onClickOverlay={onClickOverlay} />
            <MenuBody show={show}>
                {children}
            </MenuBody>
        </>
    )
}
