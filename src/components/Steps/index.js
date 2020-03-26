// @flow
import React, { Component } from 'react'
import cn from 'classnames'
import { withTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'

import transDomain from './translations/index.translations'

type Props = {
    step: number,
    description?: string,
};

type StepProps = {
    t: Function,
    theme: { [string]: mixed },
    step: number,
    currentStep: number,
}

const Step = ({ theme, step, currentStep }: StepProps) => {
    const completed = currentStep > step
    const current = currentStep === step
    const classes = cn({ [styles.current]: current, [styles.completed]: completed })
    const isActive = current ? { backgroundColor: theme.activeColor } : {}
    return (
        <div className={styles.stepLabel}>
            <span className={classes} style={{ backgroundColor: theme.inactiveColor, ...isActive }}>
            </span>
        </div>
    )
}

class Steps extends Component<Props> {
    static defaultProps = {
        step: 1
    }

    render () {
        const { t, theme, step, description, title } = this.props
        return (
            <div className={cn(styles.container, this.props.className)}>
                <span className={styles.title} style={{
                    color: theme.titleColor
                }}>{title}</span>
                {
                    description &&
                        <p className={styles.description} style={{
                            color: theme.descriptionColor
                        }}>
                            {description}
                        </p>
                }
                <div className={styles.stepsContainer}>
                    {[1, 2, 3].map(item => <Step t={t} key={item} step={item} currentStep={step} theme={theme} />)}
                </div>
            </div>
        )
    }
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(Steps))
