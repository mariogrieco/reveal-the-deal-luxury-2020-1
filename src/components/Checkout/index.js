// @flow
import React from 'react'

import MainLogo from 'components/MainLogo'
import Footer from 'components/Footer'
import { Confirm } from 'components/OrderSummary'
import OrderItem from 'components/OrderItem'

import styles from './styles.module.scss'
import withTheme from 'hoc/withTheme'

import supportedThemes from './themes/__supportedThemes'

function Checkout ({ theme }) {
    return (
        <>
            <div className={styles.container} style={{
                '--background-color': theme.backgroundColor,
                '--title-color': theme.titleColor,
                '--body-background-color': theme.body.backgroundColor
            }}>
                <div className={styles.mainLogo}>
                    <MainLogo />
                </div>
                <div className={styles.info}>
                    <h1>Excellent Choices Jonathan</h1>
                    <p>We will send you your gift cards once we firm up the purchase of your new vehicle! A receipt of your selections has been emailed to you.</p>
                </div>
                <div className={styles.body}>
                    <h2>Thank you for choosing HomeTown Dealership!</h2>
                    <div className={styles.itemsArea}>
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <Confirm text={'Logout'} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default withTheme(supportedThemes)(Checkout)
