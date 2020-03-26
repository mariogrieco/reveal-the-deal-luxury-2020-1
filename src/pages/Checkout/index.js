// @flow
import * as React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Confirm } from 'components/OrderSummary'
import OrderItem from 'components/OrderItem'
import styles from './styles.module.scss'

type Props = {
    location: Location
}

export default (props: Props) => (
    <>
        <div className={styles.container}>
            <Header />
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
