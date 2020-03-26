// @flow
import * as React from 'react'

import { Currency, Percent } from 'i18n/NumberFormatter'
import { useTranslation } from 'react-i18next'
import withTheme from 'hoc/withTheme'
import supportedThemes from './themes/__supportedThemes'

import transDomain from './translations/index.translations'
import { Store } from 'Store'

import AbsoluteTime from 'components/AbsoluteTime'
import EventLogo from 'components/MainLogo/EventLogo'

type Props = {
    width: string, // eg. "541px"
    locale: string,
    lead: { [string]: mixed },
    campaign: { [string]: mixed },
}

const Voucher = React.forwardRef((props: Props, ref: React.Ref) => {
    const { t } = useTranslation(transDomain)
    const { state } = React.useContext(Store)
    const { lead, campaign, locale, currency } = state
    const { theme } = props
    const currencyFormatter = Currency(currency, locale)

    return (
        <svg ref={ref} width={props.width} viewBox="0 0 541 216" version="1.1">
            <defs>
                <linearGradient x1="50%" y1="20.5741808%" x2="50%" y2="100%" id="linearGradient-1">
                    <stop stopColor={theme.leftGradient.top} offset="0%"></stop>
                    <stop stopColor={theme.leftGradient.bottom} offset="100%"></stop>
                </linearGradient>
                <rect id="path-2" x="0" y="0" width="531" height="206" rx="4"></rect>
            </defs>
            <g>
                <rect id="Rectangle" fill={theme.secondary} x="0" y="0" width="541" height="216" rx="8"></rect>
                <g id="Rectangle" transform="translate(5.000000, 5.000000)">
                    <mask id="mask-3" fill="white">
                        <use xlinkHref="#path-2"></use>
                    </mask>
                    <use id="Mask" fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                    <rect fill="#FFFFFF" mask="url(#mask-3)" x="310" y="-3" width="226" height="214"></rect>
                    <rect fill="#FFFFFF" mask="url(#mask-3)" x="-5" y="174" width="541" height="37"></rect>
                </g>
            </g>
            <g transform="translate(0.000000, 159.000000)">
                <g fill={theme.secondary}>
                    <rect x="0" y="0" width="541" height="23"></rect>
                </g>
                <g transform="translate(5.000000, 0.000000)" fontWeight="normal" letterSpacing="-0.100000001">
                    <text x="264" y="15" textAnchor="middle" fontSize="10" fill="#FFFFFF">
                        {t('redeemable', { dealershipName: campaign.client.name })} &nbsp;
                        <AbsoluteTime noContainer dateFormat='long' date={campaign.expiryDate} />
                    </text>
                    <text fontSize="5" fill={theme.textColor}>
                        <tspan x="15.0524904" y="34">{t('terms.1')} </tspan>
                        <tspan x="34.9370119" y="42">{t('terms.2')}</tspan>
                    </text>
                </g>
                <g transform="translate(493.000000, 31.000000)">
                    <image x={theme.manufacturerLogoStyle.x} y={theme.manufacturerLogoStyle.y} width={theme.manufacturerLogoStyle.width} xlinkHref={theme.manufacturerLogo}></image>
                </g>
            </g>
            <g transform="translate(315.000000, 82.000000)" fontWeight="normal">
                <g transform="translate(0.000000, 32.000000)">
                    <text fontSize="7" fill={theme.textColor}>
                        <tspan x="26.4260254" y="8">{t('cash_back')}</tspan>
                    </text>
                    <text fontSize={campaign.incentives.manufacturer.areCombinable ? '18' : '11'} fill={theme.textColor}>
                        <tspan textAnchor="middle" x="112" y="26">{campaign.incentives.manufacturer.areCombinable ? '+' : 'OR'}</tspan>
                    </text>
                    <text fontSize="21" letterSpacing="-0.699999988" fill={theme.ternary} fontFamily="Roboto Slab" fontWeight="bold">
                        <tspan textAnchor="middle" x="56" y="30" fontSize="23">{`${currencyFormatter.format(campaign.incentives.manufacturer.cashBack)}`}</tspan>
                    </text>
                </g>
                <g transform="translate(111.000000, 32.000000)">
                    <text id="0.99%" fontSize="23" letterSpacing="-0.699999988" fill={theme.ternary} fontFamily="Roboto Slab" fontWeight="bold">
                        <tspan textAnchor="middle" x="56" y="30">{Percent.format((Number.parseFloat(campaign.incentives.manufacturer.interestRate).toPrecision(3) / 100) || 0)}</tspan>
                    </text>
                    <text id="Rates-as-low-as" fontSize="7" fill={theme.textColor}>
                        <tspan x="31.2949219" y="8">{t('rates')}</tspan>
                    </text>
                </g>
                <g fill={theme.textColor} fontSize="10">
                    <text>
                        <tspan textAnchor="middle" x="112" y="10">{t('combine.1')}</tspan>
                        <tspan textAnchor="middle" x="112" y="23">{t('combine.2')}</tspan>
                    </text>
                </g>
            </g>
            <g transform="translate(20.000000, 28.000000)" fontWeight="normal">
                <text fontSize="65" letterSpacing="-0.699999988" fill={theme.primary}>
                    <tspan textAnchor="middle" x="140" y="76" fontSize="80" letterSpacing="-2" fontFamily="Roboto Slab" fontWeight="bold">
                        {currencyFormatter.format(lead.incentives.voucher.value)}
                    </tspan>
                </text>
                <text fontSize="11" fill={theme.textColor}>
                    <tspan textAnchor="middle" x="140" y="6.66259766">{t('voucher.prefix', { name: lead.fields.firstName })}</tspan>
                </text>
                <text fontSize="11" fill={theme.textColor}>
                    <tspan textAnchor="middle" x="140" y="102.662598">{t('voucher.name', { name: campaign.incentives.voucher.name })}</tspan>
                </text>
                <text fontSize="11" fill={theme.textColor}>
                    <tspan textAnchor="middle" x="140" y="118.662598">{t('voucher.suffix', { vehicle: `${state.lead.fields.newVehicleMake} ${state.lead.fields.newVehicleModel}` })}</tspan>
                </text>
            </g>
            <g transform="translate(342.000000, 18.000000)">
                <EventLogo eventColor={theme.primary} x="40" y="-75" width="90" />
            </g>
        </svg>
    )
})

Voucher.defaultProps = {
    width: 90
}

export default withTheme(supportedThemes)(Voucher)
