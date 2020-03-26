import React from 'react'

const ExpiredIcon = ({
    width,
    height
}) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
>
        <defs>
            <path id="a" d="M0 81L83 81 83 0 0 0z"></path>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-313 -376)">
                <g transform="translate(313 376)">
                    <circle cx="93" cy="93" r="93" fill="#F8F8F8"></circle>
                    <g transform="translate(52 53)">
                        <path
                            fill="#7F7F7F"
                            d="M25 13L22 13 22 15.7272727 15 15.7272727 15 13 12 13 12 19 25 19z"></path>
                        <path
                            fill="#7F7F7F"
                            d="M71 13L68 13 68 15.7272727 61 15.7272727 61 13 58 13 58 19 71 19z"></path>
                        <g>
                            <path
                                fill="#7F7F7F"
                                d="M77.5 78h-72A2.503 2.503 0 013 75.5V27h77v48.5c0 1.378-1.122 2.5-2.5 2.5m-72-67H15V3.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5V11h39V3.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5V11h9.5c1.378 0 2.5 1.122 2.5 2.5V24H3V13.5C3 12.122 4.122 11 5.5 11m72-3H71V3.5C71 1.57 69.43 0 67.5 0h-6C59.57 0 58 1.57 58 3.5V8H25V3.5C25 1.57 23.43 0 21.5 0h-6C13.57 0 12 1.57 12 3.5V8H5.5A5.505 5.505 0 000 13.5v62C0 78.534 2.466 81 5.5 81h72c3.034 0 5.5-2.466 5.5-5.5v-62c0-3.034-2.466-5.5-5.5-5.5"></path>
                            <mask id="b" fill="#fff">
                                <use xlinkHref="#a"></use>
                            </mask>
                            <path
                                fill="#7F7F7F"
                                d="M29.5 43L37.5 43 37.5 40 29.5 40z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M45.5 43L53.5 43 53.5 40 45.5 40z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M61.5 43L69.5 43 69.5 40 61.5 40z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M13.5 53L21.5 53 21.5 50 13.5 50z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M29.5 53L37.5 53 37.5 50 29.5 50z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M45.5 53L53.5 53 53.5 50 45.5 50z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M61.5 53L69.5 53 69.5 50 61.5 50z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M13.5 63L21.5 63 21.5 60 13.5 60z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M29.5 63L37.5 63 37.5 60 29.5 60z"
                                mask="url(#b)"></path>
                            <path
                                fill="#7F7F7F"
                                d="M45.5 63L53.5 63 53.5 60 45.5 60z"
                                mask="url(#b)"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

export default ExpiredIcon

ExpiredIcon.defaultProps = {
    width: 186,
    height: 186
}
