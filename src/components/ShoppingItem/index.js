// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'
import * as Form from 'components/Form'
import transDomain from './translations/index.translations'

function ShoppingItem (props) {
    const { theme, image, src, t, height, width } = props
    // const { state } = React.useContext(Store)
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: theme.background, borderColor: theme.borderColor }}>
            <div className={styles.imageContainer}>
                <img src={image} alt={src} width={width} height={height} />
            </div>
            <Form.Field label={''}>
                <Form.Dropdown
                    placeholder={t('placeholder')}
                    options={[120, 250, 300]}
                    // optionFormat={'field.currentVehicleCondition.options.%name%'}
                    // defaultValue={props.values.currentVehicleCondition}
                    trans={t}
                    onChange={value => ({})}
                />
            </Form.Field>
            <span className={styles.button} style={{
                '--primary-color': theme.button.background
            }}>
                  Add To Cart
            </span>
        </div>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(ShoppingItem))
