// @flow

import * as React from 'react'
import cn from 'classnames'
import { Redirect } from 'react-router'
import { Trans, withTranslation } from 'react-i18next'
import queryString from 'query-string'

import { Store } from 'Store'
import { fetchLead } from 'Actions'

import withTheme from 'hoc/withTheme'
import type { Theme } from './themes/__supportedThemes'
import supportedThemes from './themes/__supportedThemes'
import transDomain from './translations/index.translations'

import styles from './styles.module.scss'

type Props = {
    theme: Theme
}

function RegistrationForm (props: Props) {
    const { t, theme } = props

    const loader = { '--color-loader': `url(${theme.loader})` }

    const [code, setCode] = React.useState(queryString.parse(window.location.hash)['code'] || '')
    const [isLoading, setIsLoading] = React.useState(false)
    const [invalidCode, setInvalidCode] = React.useState(false)

    const { state, dispatch } = React.useContext(Store)

    if (state.lead) {
        return <Redirect to={`${window.location.pathname}/step-1${window.location.search}`} push />
    }

    return (<form onSubmit={async e => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await fetchLead(dispatch, code)
            // window.scrollTo(0, 0)
        } catch (err) {
            console.error(err)
            setInvalidCode(true)
            setIsLoading(false)
        }
    }}>
        <div className={styles.container}>
            <input
                type="text"
                placeholder={t('placeholder')}
                name="code"
                required
                style={theme.input}
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <button
                type="submit"
                style={{ ...theme.button, ...loader }}
                className={cn(styles.submit, { [styles.isLoading]: isLoading })}
                disabled={isLoading}
            >
                <span>{t('login')}</span>
            </button>
        </div>
        {
            invalidCode &&
            <div className={styles.invalidLabel}>
                <Trans i18nKey='wrongCode'>You have entered an invalid code</Trans>
            </div>
        }
    </form>)
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(RegistrationForm))
