// @flow
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes'
import Button, { ButtonGroup } from 'components/Button'

import transDomain from './translations/index.translations'

import { Store } from 'Store'
import * as Form from 'components/Form'
import withForm, { WithFormProps } from 'components/Form/Helpers/FormHOC'
import Steps from 'components/Steps'

import styles from './styles.module.scss'

const DEFAULT_MILEAGE_OPTIONS = [5000, 15000, 30000, 50000, 70000, 90000, 100000]

type Props = WithFormProps | {
    values: {
        currentVehicleMileage: ?number,
        currentVehicleCondition: ?string,
        currentVehicleFinanceMethod: ?string,
        currentVehicleLeasePayment: ?string,
        currentVehicleLeasePaymentsLeft: ?string,
        currentVehicleFinancePayment: ?string,
        currentVehicleFinanceAmountOwing: ?string,
        storeLocationId: ?string,
        newVehicleMake: ?string,
        newVehicleModel: ?string,
        salesperson: ?string,
        timeline: ?string,
    }
}

function Step2 (props: Props) {
    const { theme } = props
    const { t } = useTranslation(transDomain)
    const { state } = React.useContext(Store)

    const makes = state.campaign.models.map(model => model.make).filter((value, index, self) => self.indexOf(value) === index)

    if (makes.length === 1 && props.values.newVehicleMake !== makes[0]) {
        props.handleFieldChange('newVehicleMake', makes[0])
    }

    const defaultMileageOption = React.useMemo(() => {
        return props.values.currentVehicleMileage
            ? DEFAULT_MILEAGE_OPTIONS.reduce(function (prev, curr) {
                return (Math.abs(curr - props.values.currentVehicleMileage) < Math.abs(prev - props.values.currentVehicleMileage) ? curr : prev)
            })
            : ''
    }, [props.values.currentVehicleMileage])

    return (
        <>
            <Steps step={2} title={t('section.currentVehicleInfo')} description={t('description')} />

            <Form.Row>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleYear || null}
                            defaultValue={props.values.currentVehicleYear || null}
                            onChange={value =>
                                props.handleFieldChange('currentVehicleYear', parseInt(value, 10))
                            }
                            type='text'
                            label={t('label.vehicleYear')}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleMake || null}
                            defaultValue={props.values.currentVehicleMake || null}
                            onChange={value =>
                                props.handleFieldChange('currentVehicleMake', value)
                            }
                            type='text'
                            label={t('label.vehicleMake')}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Row>

            <Form.Row>
                <Form.Field
                    // error={props.errors.currentVehicleModel || null}
                    defaultValue={props.values.currentVehicleModel || null}
                    onChange={value =>
                        props.handleFieldChange('currentVehicleModel', value)
                    }
                    type='text'
                    label={t('label.vehicleModel')}
                    asPlaceHolder
                />
            </Form.Row>

            <Form.Row>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field label={''}>
                            <Form.Dropdown
                                // error={props.errors.currentVehicleCondition || null}
                                placeholder={t('field.currentVehicleCondition.label')}
                                options={['extraClean', 'clear', 'average', 'rough', 'extraRough']}
                                optionFormat={'field.currentVehicleCondition.options.%name%'}
                                trans={t}
                                onChange={value => props.handleFieldChange('currentVehicleCondition', value)}
                                defaultValue={props.values.currentVehicleCondition}
                            />
                        </Form.Field>
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field label={''}>
                            <Form.Dropdown
                                placeholder={t('field.currentVehicleMileage.label')}
                                options={DEFAULT_MILEAGE_OPTIONS}
                                optionFormat={'field.currentVehicleMileage.options.%name%'}
                                trans={t}
                                onChange={value => props.handleFieldChange('currentVehicleMileage', value ? parseInt(value, 10) : '')}
                                defaultValue={defaultMileageOption.toString()}
                            />
                        </Form.Field>
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Row>

            <ButtonGroup className={styles.buttonGroup}>
                <Form.Row>
                    <Form.Field noBorder label={t('field.currentVehicleFinanceMethod.label')}>
                        <Form.RowColumns>
                            {['lased', 'financed', 'cash'].map(choise => (
                                <Form.RowColumn className={styles.rowWrapper}>
                                    <Button
                                        onClick={() => props.handleFieldChange('currentVehicleFinanceMethod', props.values.currentVehicleFinanceMethod === choise ? null : choise)}
                                        customStyle={props.values.currentVehicleFinanceMethod === choise ? theme.selectedButton : theme.button}>
                                        {choise.toUpperCase()}
                                    </Button>
                                </Form.RowColumn>
                            ))}
                        </Form.RowColumns>
                    </Form.Field>
                </Form.Row>
            </ButtonGroup>

            <Form.Panel hidden={props.values.currentVehicleFinanceMethod !== 'leased'}>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleLeasePayment || null}
                            defaultValue={props.values.currentVehicleLeasePayment || null}
                            onChange={value => props.handleFieldChange('currentVehicleLeasePayment', value)}
                            type='currency'
                            locale={state.locale}
                            currency={state.currency}
                            label={t('field.currentVehicleLeasePayment.label')}
                            required={props.values.currentVehicleFinanceMethod === 'leased'}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleLeasePaymentsLeft || null}
                            defaultValue={props.values.currentVehicleLeasePaymentsLeft || null}
                            onChange={value =>
                                props.handleFieldChange('currentVehicleLeasePaymentsLeft', value)
                            }
                            type='number'
                            label={t('field.currentVehicleLeasePaymentsLeft.label')}
                            required={props.values.currentVehicleFinanceMethod === 'leased'}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Panel>

            <Form.Panel hidden={props.values.currentVehicleFinanceMethod !== 'financed'}>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleFinancePayment || null}
                            defaultValue={props.values.currentVehicleFinancePayment || null}
                            onChange={value =>
                                props.handleFieldChange('currentVehicleFinancePayment', value)
                            }
                            type='currency'
                            locale={state.locale}
                            currency={state.currency}
                            label={t('field.currentVehicleFinancePayment.label')}
                            required={props.values.currentVehicleFinanceMethod === 'financed'}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                    <Form.RowColumn>
                        <Form.Field
                            // error={props.errors.currentVehicleFinanceAmountOwing || null}
                            defaultValue={props.values.currentVehicleFinanceAmountOwing || null}
                            onChange={value =>
                                props.handleFieldChange('currentVehicleFinanceAmountOwing', value)
                            }
                            type='currency'
                            locale={state.locale}
                            currency={state.currency}
                            label={t('field.currentVehicleFinanceAmountOwing.label')}
                            required={props.values.currentVehicleFinanceMethod === 'financed'}
                            asPlaceHolder
                        />
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Panel>
            <Form.Row>
                <span className={styles.submit}>
                    <Form.Submit
                        isLoading={props.isLoading}
                        label={t('label.continueToStep3')}
                        style={{ background: theme.background, color: theme.color, marginTop: '1.62em' }}
                />
                </span>
            </Form.Row>
        </>
    )
}

export default withForm()(withTheme(supportedThemes)(Step2))
