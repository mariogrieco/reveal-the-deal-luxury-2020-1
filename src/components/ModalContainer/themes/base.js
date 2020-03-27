// @flow

import { config } from 'react-spring'

export default function (globalTheme) {
    return {
        modalOverlay: {
            from: { opacity: 0.25, backgroundColor: 'rgba(29, 29, 29, 0.15)' },
            enter: { opacity: 1, backgroundColor: 'rgba(29, 29, 29, 0.4)' },
            leave: { opacity: 0.5, backgroundColor: 'rgba(29, 29, 29, 0.4)' },
            unique: true,
            trail: 500
        },
        modalBody: {
            from: {
                left: '50%',
                top: '0%',
                transform: 'translate(-0%, -50%)'
            },
            enter: {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            },
            leave: {
                left: '150%',
                top: '50%',
                transform: 'translate(-50%, 50%)'
            },
            config: config.stiff,
            unique: true,
            trail: 0
        }
    }
}
