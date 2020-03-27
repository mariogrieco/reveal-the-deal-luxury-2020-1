// @flow
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'
import Button, { ButtonGroup } from 'components/Button'
import supportedThemes from './themes/__supportedThemes'

import transDomain from './translations/index.translations'

import { Store } from 'Store'
import * as Form from 'components/Form'
import withForm, { WithFormProps } from 'components/Form/Helpers/FormHOC'
import Steps from 'components/Steps'

import styles from './styles.module.scss'

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
        hotButtons: ?string,
        salesperson: ?string,
        timeline: ?string,
    }
}

function Step3 (props: Props) {
    const { theme } = props
    const { t } = useTranslation(transDomain)
    const { state } = React.useContext(Store)

    const makes = state.campaign.models.map(model => model.make).filter((value, index, self) => self.indexOf(value) === index)

    if (makes.length === 1 && props.values.newVehicleMake !== makes[0]) {
        props.handleFieldChange('newVehicleMake', makes[0])
    }

    const models = React.useMemo(() => (
        state.campaign.models.filter(model => model.make === props.values.newVehicleMake).map(model => ({ value: model.name, label: model.name, segment: model.segment, voucherValue: model.voucherValue }))
    ), [props.values.newVehicleMake, state.campaign.models])

    if (state.campaign.locations.length === 1 && !props.values.storeLocationId) {
        props.handleFieldChange('storeLocationId', state.campaign.locations[0].id)
    }

    const salesReps = React.useMemo((): { [string]: string } => {
        const selectedStoreLocation = state.campaign.locations.find(location => location.id === props.values.storeLocationId)
        if (!selectedStoreLocation) return {}

        return {
            ...selectedStoreLocation.salesReps.reduce((salesReps, rep) => ({ [rep.name]: rep.name, ...salesReps }), {}),
            'none': t('field.salesperson.options.none.label')
        }
    }, [props.values.storeLocationId, state.campaign.locations, t])

    const handleBtnOnclick = value => {
        const values = props.values.hotButtons || []
        props.handleFieldChange('hotButtons', values.indexOf(value) !== -1 ? values.filter(item => item !== value) : [...values, value])
    }

    return (
        <>
            <Steps step={3} title={t('field.newVehicleMake.label')} description={t('description')} />

            <h3>{t('newVehicle.heading')}</h3>

            <Form.Row>
                <Form.Field
                    label={t('field.newVehicleModel.label')}
                    asPlaceHolder
                >
                    <Form.ModelPickerDropdown
                        // error={props.errors.newVehicleModel || null}
                        placeholder={t('field.newVehicleModel.placeholder')}
                        options={models}
                        onChange={value => props.handleFieldChange('newVehicleModel', value)}
                        defaultValue={props.values.newVehicleModel}
                    />
                </Form.Field>
            </Form.Row>

            <ButtonGroup className={styles.buttonGroup}>
                <Form.Row>
                    <Form.Field noBorder label={t('field.hotButtons.label')}>
                        <Form.RowColumns>
                            {['safety', 'performance', 'dependability', 'appearance', 'comfort', 'economy'].map(choise => (
                                <Form.RowColumn className={styles.rowWrapper} size={0.3} padding={'1em 0.5em 0.1em 0.5em'}>
                                    <Button
                                        onClick={() => handleBtnOnclick(choise)}
                                        customStyle={(props.values.hotButtons || []).indexOf(choise) !== -1 ? theme.selectedButton : theme.button}>
                                        {t(`field.hotButtons.choice.${choise}`)}
                                    </Button>
                                </Form.RowColumn>
                            ))}
                        </Form.RowColumns>
                    </Form.Field>
                </Form.Row>
            </ButtonGroup>

            <Form.Row>
                <Form.RowColumns>
                    <Form.RowColumn>
                        <Form.Field label={t('field.timeline.label')}>
                            <Form.Dropdown
                                // error={props.errors.timeline || null}
                                placeholder={t('field.timeline.placeholder')}
                                options={['immediately', 'lessThanAWeek', 'aFewWeeks', 'aFewMonths']}
                                optionFormat={'field.timeline.options.%name%'}
                                trans={t}
                                onChange={value => props.handleFieldChange('timeline', value)}
                                defaultValue={props.values.timeline}
                            />
                        </Form.Field>
                    </Form.RowColumn>

                    <Form.RowColumn>
                        <Form.Field label={t('field.salesperson.label')}>
                            <Form.Dropdown
                                // error={props.errors.salesperson || null}
                                placeholder={t('field.salesperson.placeholder')}
                                options={salesReps}
                                onChange={value => props.handleFieldChange('salesperson', value)}
                                defaultValue={props.values.salesperson}
                            />
                        </Form.Field>
                    </Form.RowColumn>
                </Form.RowColumns>
            </Form.Row>

            <Form.Row>
                <span className={styles.submit}>
                    <Form.Submit
                        isLoading={props.isLoading}
                        label={t('submit.label')}
                        style={{ background: theme.background, color: theme.color, marginTop: '1.62em' }}
                />
                </span>
            </Form.Row>
        </>
    )
}

export default withForm()(withTheme(supportedThemes)(Step3))
