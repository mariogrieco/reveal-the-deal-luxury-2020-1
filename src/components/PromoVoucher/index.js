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
    campaign: { [string]: mixed },
}

PromoVoucher.defaultProps = {
    width: '541px'
}

function PromoVoucher (props: Props) {
    const { t } = useTranslation(transDomain)
    const { state } = React.useContext(Store)
    const { campaign, locale, currency } = state
    const { theme } = props
    const currencyFormatter = Currency(currency, locale)

    return (
        <svg width={props.width} viewBox="0 0 541 216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                    <text x="40" y="15" textAnchor="middle" fontSize="10" fill="#FFFFFF">
                        {t('visit')}
                    </text>
                    <rect fill="#EFF9FC" x="80" y="3" width="263" height="17" rx="2"></rect>
                    <text fontFamily="Oxygen" fontSize="8.5" fontWeight="normal" letterSpacing="-0.100000001" fill={theme.primary}>
                        <tspan textAnchor="middle" x="211.408472" y="14">{window.location.host}/{window.location.pathname.split('/')[1]}</tspan>
                    </text>
                    <text x="397" y="15" textAnchor="middle" fontSize="10" fill="#FFFFFF">
                        {t('promo_code')}
                    </text>
                    <rect fill="#EFF9FC" x="450" y="3" width="74" height="17" rx="2"></rect>
                    <text fontFamily="Oxygen" fontSize="8.5" fontWeight="normal" letterSpacing="-0.100000001" fill={theme.primary}>
                        <tspan textAnchor="middle" x="488" y="14">{ props.promoCode }</tspan>
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
                        <tspan x="22.4260254" y="8">{t('cash_back')}</tspan>
                    </text>
                    <text fontSize={campaign.incentives.manufacturer.areCombinable ? '18' : '11'} fill={theme.textColor}>
                        <tspan textAnchor="middle" x="112" y="26">{campaign.incentives.manufacturer.areCombinable ? '+' : 'OR'}</tspan>
                    </text>
                    <text fontSize="21" letterSpacing="-0.699999988" fill={theme.primary} fontFamily="Oxygen" fontWeight="bold">
                        <tspan textAnchor="middle" x="56" y="30" fontSize="23">{`${currencyFormatter.format(campaign.incentives.manufacturer.cashBack)}`}</tspan>
                    </text>
                </g>
                <g transform="translate(111.000000, 32.000000)">
                    <text id="0.99%" fontSize="23" letterSpacing="-0.699999988" fill={theme.primary} fontFamily="Oxygen" fontWeight="bold">
                        <tspan textAnchor="middle" x="56" y="30">{Percent.format((Number.parseFloat(campaign.incentives.manufacturer.interestRate).toPrecision(3) / 100) || 0)}</tspan>
                    </text>
                    <text id="Rates-as-low-as" fontSize="7" fill={theme.textColor}>
                        <tspan x="30.2949219" y="8">{t('rates')}</tspan>
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
                    <tspan textAnchor="middle" x="140" y="88" fontSize="80" letterSpacing="-2" fontFamily="Oxygen" fontWeight="bold">
                        {currencyFormatter.format(campaign.incentives.voucher.value)}
                    </tspan>
                </text>
                <text fontSize="11" fill={theme.textColor}>
                    <tspan textAnchor="middle" x="140" y="0.66259766">
                        {t('voucher.prefix.1')}
                        <AbsoluteTime noContainer dateFormat='long' date={campaign.expiryDate}/>
                    </tspan>
                    <tspan textAnchor="middle" x="140" y="14.66259766">{t('voucher.prefix.2', {
                        voucher: state.campaign.incentives.voucher.name,
                        type: state.campaign.incentives.voucher.type
                    })}</tspan>
                </text>
                <text fontSize="9" fill={theme.textColor}>
                    <tspan textAnchor="middle" x="140" y="112.662598">{t('voucher.suffix')}</tspan>
                </text>
            </g>
            <g transform="translate(342.000000, 18.000000)">
                <EventLogo eventColor={theme.primary} x="43" y="-79" width="90" height={208} />
            </g>
        </svg>
    )
}

export default withTheme(supportedThemes)(PromoVoucher)
