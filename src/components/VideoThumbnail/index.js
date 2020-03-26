// @flow
import * as React from 'react'
import cn from 'classnames'

import { withTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import { Store } from 'Store'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import Modal from 'components/Modal'
import PlayButton from 'components/PlayButton'
import VideoPlayer from 'components/VideoPlayer'

import transDomain from './translations/index.translations'

function VideoThumbnail (props) {
    const { state } = React.useContext(Store)
    const { t, theme, hiddeTitle } = props
    const videoPlayer = React.useRef()
    const [ isModalOpen, setIsModalOpen ] = React.useState(false)

    const playVideo = () => {
        videoPlayer.current.play()
    }

    return (
        <>
            <div
                onClick={() => setIsModalOpen(true)}
                className={cn(styles.thumbnail, (props.className || null))}
                style={{ backgroundImage: `url(${theme.background[props.background || 0]})`, ...(props.style || {}) }}
            >
                <div className={styles.playButton}>
                    <PlayButton fill={theme.playButtonBackground} />
                </div>
            </div>

            {!hiddeTitle && <div className={styles.title} style={{ color: theme.color }}>{t('title')}</div>}

            <Modal afterOpen={playVideo} isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)}>
                <VideoPlayer src={state.campaign.videos.sidebar} ref={videoPlayer}/>
            </Modal>
        </>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(VideoThumbnail))
