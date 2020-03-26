import * as React from 'react'

function CloseIcon (props) {
    return (
        <svg width={25} height={25} viewBox="0 0 25 25" {...props}>
            <title>{'CLOSE ICON'}</title>
            <g
                stroke="#233971"
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
      >
                <path d="M2.35 2.35l20.3 20.3M22.65 2.35l-20.3 20.3" />
            </g>
        </svg>
    )
}

export default CloseIcon
