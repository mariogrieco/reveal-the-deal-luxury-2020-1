import * as React from 'react'

function PlayIcon ({
    backgroundColor,
    width,
    height
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 20">
            <title>{'Triangle'}</title>
            <path
                d="M14.643 10.848L1.53 19.044A1 1 0 010 18.196V1.804A1 1 0 011.53.956l13.113 8.196a1 1 0 010 1.696z"
                fill={backgroundColor}
                fillRule="evenodd"
      />
        </svg>
    )
}

PlayIcon.defaultProps = {
    backgroundColor: '#123574',
    width: 16,
    height: 20
}

export default PlayIcon
