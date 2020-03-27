// @flow
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'

import transDomain from './translations/index.translations'

import * as Form from 'components/Form'
import withForm, { WithFormProps } from 'components/Form/Helpers/FormHOC'
import Steps from 'components/Steps'

import styles from './styles.module.scss'

import supportedThemes from './themes/__supportedThemes'

type Props = WithFormProps | {
    values: {
        firstName: ?string,
        lastName: ?string,
        email: ?string,
        dayPhone: ?string,
        eveningPhone: ?string,
    }
}

function Step1 (props: Props) {
    const { theme } = props
    const { t } = useTranslation(transDomain)
    return (
        <>
            <Steps step={1} description={t('description')} title={t('section.contactInformation')} />
            <Form.Row>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.firstName || null}
                            defaultValue={props.values.firstName || null}
                            onChange={value => props.handleFieldChange('firstName', value)}
                            type='text'
                            label={t('label.firstName')}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.lastName || null}
                            defaultValue={props.values.lastName || null}
                            onChange={value => props.handleFieldChange('lastName', value)}
                            type='text'
                            label={t('label.lastName')}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Row>

            <Form.Row>
                <Form.Field
                    // error={props.errors.email || null}
                    defaultValue={props.values.email || null}
                    onChange={value =>
                        props.handleFieldChange('email', value)
                    }
                    type='email'
                    label={t('label.emailAddress')}
                    asPlaceHolder
                />
            </Form.Row>

            <Form.Row>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.dayPhone || null}
                            defaultValue={props.values.dayPhone || null}
                            onChange={value =>
                                props.handleFieldChange('dayPhone', value)
                            }
                            type='phone'
                            required={true}
                            label={t('label.daytimePhone')}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.eveningPhone || null}
                            defaultValue={props.values.eveningPhone || null}
                            onChange={value =>
                                props.handleFieldChange('eveningPhone', value)
                            }
                            type='phone'
                            label={t('label.eveningPhone')}
                            required={false}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Row>

            <Form.Row>
                <span className={styles.submit}>
                    <Form.Submit
                        isLoading={props.isLoading}
                        label={t('label.continueToStep2')}
                        style={theme.submit}
                />
                </span>
            </Form.Row>
        </>
    )
}

export default withForm()(withTheme(supportedThemes)(Step1))
