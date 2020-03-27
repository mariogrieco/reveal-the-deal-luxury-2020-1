import React from 'react'

export default function Icon ({
    width,
    height,
    backgroundColor,
    color,
    onClick
}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} onClick={onClick}>
            <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                <circle stroke="#E72644" cx={14} cy={14} r={14} />
                <path
                    stroke="#E42543"
                    strokeLinecap="round"
                    d="M9.167 9.167l9.666 9.666M18.833 9.167l-9.666 9.666"
                />
            </g>
        </svg>
    )
}

Icon.defaultProps = {
    width: 30,
    height: 30,
    backgroundColor: '#E72644',
    color: '#FFFFFF'
}
