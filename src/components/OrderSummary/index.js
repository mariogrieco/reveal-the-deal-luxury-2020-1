// @flow
import * as React from 'react'

import withTheme from 'hoc/withTheme'
import { withTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import supportedThemes from './themes/__supportedThemes.js'
import transDomain from './translations/index.translations'
import OrderItem from 'components/OrderItem'
import { Scrollbars } from 'react-custom-scrollbars'
import Icon from './Icon'
import CloseIcon from './CloseIcon'

import cn from 'classnames'

export const HeadingMenu = withTranslation(transDomain)(withTheme(supportedThemes)(({
    confirm,
    theme,
    items = 3,
    t,
    className,
    onClickClose
}) => {
    return (
        <div className={cn(styles.headingMenu, className)}>
            <CloseIcon onClick={onClickClose} />
            <h3 style={{ color: theme.color }}>Your Cart</h3>
            <div className={styles.textAreaMenu}>
                <strong>$875</strong>  <span>Remaining</span>
            </div>
        </div>
    )
}))

export const Heading = withTranslation(transDomain)(withTheme(supportedThemes)(({
    confirm,
    theme,
    items = 3,
    t,
    className,
    onClickIcon,
    handleConfirm
}) => {
    return (
        <div className={cn(styles.heading, className)}
            style={{
                backgroundColor: theme.backgroundColor
            }}>
            <div className={styles.textArea}>
                <strong>$875</strong>  <span>Remaining</span>
            </div>
            <div className={styles.confirmBtn}>
                <Confirm text='Confirm item' onClick={handleConfirm} />
            </div>
            <div className={styles.iconContainer} onClick={onClickIcon}>
                <Icon />
                {items > 0 &&
                <span className={styles.bubble} style={{
                    '--border-color': theme.borderColor
                }}>
                    {items}
                </span>
                }
            </div>
        </div>
    )
}))

export const Confirm = withTranslation(transDomain)(withTheme(supportedThemes)(({ text, theme, t, className, onClick }) => {
    return (
        <div className={cn(styles.confirm, className)} onClick={onClick} style={{ backgroundColor: theme.color }}>
            {text}
        </div>
    )
}))

export const OrderSummaryLayout = withTranslation(transDomain)(withTheme(supportedThemes)(({
    theme,
    t,
    heading,
    footer,
    children,
    className,
    bodyClassName,
    footerClassName
}) => {
    return (
        <div
            className={cn(styles.container, className)}
            style={{ backgroundColor: theme.sidebar.backgroundColor }}>
            {heading}
            <div className={cn(styles.body, bodyClassName)}>
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMax={'100vh'}
                    thumbMinSize={30}>
                    {children}
                </Scrollbars>
            </div>
            <div className={cn(styles.footer, footerClassName)}>
                {footer}
            </div>
        </div>
    )
}))

function OrderSummary ({ theme, t, heading, footer, className }) {
    // const { state } = React.useContext(Store)
    return (
        <OrderSummaryLayout heading={heading} footer={footer} className={className}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </OrderSummaryLayout>
    )
}

export default withTranslation(transDomain)(withTheme(supportedThemes)(OrderSummary))
