// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'
import transDomain from './translations/index.translations'
import * as Form from 'components/Form'

import Icon from './Icon'

function OrderSummary (props) {
    const { theme, t, onClick } = props
    // const { state } = React.useContext(Store)
    return (
        <div className={styles.container}>
            <div className={styles.leftIcon}></div>
            <div className={styles.rightSide}>
                <span className={styles.price} style={{
                    color: theme.valueColor
                }}>
                    $250
                </span>
                <div className={styles.formFieldContainer}>
                    <Form.Field label={''}>
                        <Form.Dropdown
                            placeholder={t('placeholder')}
                            options={[1, 2, 3]}
                        // optionFormat={'field.currentVehicleCondition.options.%name%'}
                        // defaultValue={props.values.currentVehicleCondition}
                            trans={t}
                            onChange={value => ({})}
                    />
                    </Form.Field>
                </div>
                <Icon onClick={onClick} backgroundColor='red' />
            </div>
        </div>
    )
}

OrderSummary.defaultProps = {
    onClick: () => (console.log('alert'))
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(OrderSummary))
