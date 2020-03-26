// @flow
import * as React from 'react'

import PromoVoucher from 'components/PromoVoucher'
import usePromoCode from 'util/hooks/usePromoCode'

import styles from './styles.module.scss'

function PromoHouse (props) {
    const promoCode = usePromoCode()

    return (
        <div className={styles.container}>
            <div className={styles.voucher}>
                <PromoVoucher width="100%" promoCode={promoCode} />
            </div>

            <div className={styles.voucher}>
                <PromoVoucher width="100%" promoCode={promoCode} />
            </div>

            <div className={styles.voucher}>
                <PromoVoucher width="100%" promoCode={promoCode} />
            </div>
        </div>
    )
}

export default PromoHouse
