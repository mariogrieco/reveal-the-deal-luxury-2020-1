/* eslint-disable no-sparse-arrays */
/* eslint-disable no-const-assign */
// @flow

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import Header from 'components/Header'
import ShoppingItem from 'components/ShoppingItem'
import {
    Heading,
    Confirm as Continue,
    OrderSummaryLayout,
    HeadingMenu
} from 'components/OrderSummary'
import ModalContainer from 'components/ModalContainer'
import MessageStep from 'components/MessageStep'
import MenuRight from 'components/MenuRight'
import OrderItem from 'components/OrderItem'
import { useMediaQuery } from 'beautiful-react-hooks'
import { Scrollbars } from 'react-custom-scrollbars'
import Footer from 'components/Footer'
import TopBar from 'components/TopBar'

import { Store } from 'Store'

import cn from 'classnames'

import { useTransition, animated } from 'react-spring'

import styles from './styles.module.scss'

type Props = {
    location: Location
}

const AIRCANADA = require('./images/aircanada.png')
const APPLE = require('./images/apple.png')
const BEST_BUY = require('./images/bestbuy.png')
const CREATE_BARREL = require('./images/create&barrel.png')
const HubsonSbay = require('./images/hd.png')
const TJX = require('./images/tjx.png')
const VISA = require('./images/visa.png')
const ROOTS = require('./images/roots.png')
const CINEPLEX = require('./images/cineplex.png')
const BASSPROSHOPS = require('./images/bps.png')
const BP = require('./images/bp.png')
const AMAZON = require('./images/amazon.png')
const STARBUCKS = require('./images/k.png')
const GAP = require('./images/gap.png')
const JA = require('./images/ja.png')
const ESSO = require('./images/esso.png')
const TIM_HORTONS = require('./images/th.png')
const WALMART = require('./images/walmart.png')

const pages = [
    ({ style }) =>
        <animated.div style={{ ...style }}>
            <MessageStep
                message={'Your vehicle choices have been sent to your our sales representative, and they will be in touch with you soon. In the meantime, enjoy your personal shopping spree!'}
                title={'Congratulations Jonathan! You have received $1,000 to spend on a personal shopping spree'}
            />
        </animated.div>,
    ({ style }) => <animated.div style={{ ...style }}>
        <MessageStep
            message={`
                Browse our collection of gift cards and select the gift card amount you would like to receive. Once selected, add it to your cart.

                You can select multiple gift cards of the same brand by repeating the same process.
            `}
            title={'How to Shop'}
    />
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style }}>
        <MessageStep
            message={`
            To view and modify your cart, click the icon in the top right corner of the screen.


            Once you are happy with your items, click the “Confirm Gifts” button at the bottom of the screen to submit your items.
        `}
            title={'Your Items'}
        />
    </animated.div>
]

export default withRouter((props: Props) => {
    const isTabletOrMobile = useMediaQuery('(max-width: 1274px)') // 1024 + 250 (sidebar)
    const [show, toggleModal] = React.useState(true)
    const [showMenu, toggleMenu] = React.useState(false)
    const [index, set] = React.useState(0)
    const { state } = React.useContext(Store)

    const onClick = React.useCallback(() => {
        set(state => {
            const nextState = state + 1
            if (nextState === 3) {
                toggleModal(false)
            }
            return nextState % 3
        })
    }, [])

    const toggleRightMenu = () => toggleMenu(state => !state)
    const onClickBubble = React.useCallback((number) => set(() => number % 3), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' }
    })

    const toCheckout = () => props.history.push(`${props.location.pathname.replace('shopping', 'checkout')}${props.location.search}`)

    return (
        <>
            <TopBar locale={state.locale} date={state.campaign.expiryDate}/>
            <ModalContainer
                show={false}
                onClickOverlay={() => toggleModal(!show)}
            >
                <div className={styles.messageSlider}>
                    {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props} />
                    })}
                    <div className={styles.bubbleArea}>
                        {pages.map((item, _index) => <div key={_index} className={cn({
                            [styles.bubble]: true,
                            [styles.bubbleActive]: index === _index
                        })} onClick={() => onClickBubble(_index)}>
                        </div>)}
                    </div>
                    <div className={styles.continue} onClick={onClick}>
                        <Continue text='Next' />
                    </div>
                </div>
            </ModalContainer>

            {isTabletOrMobile &&
                <div className={styles.fixedHeading}>
                    <Heading onClickIcon={toggleRightMenu} handleConfirm={toCheckout} />
                </div>
            }

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.leftArea}>
                        <Header />
                        <Scrollbars
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            autoHeight
                            autoHeightMax={'100vh'}
                            thumbMinSize={30}>
                            <div className={styles.shoppingItemList}>
                                <ShoppingItem image={AIRCANADA} src='Air Canada' width={114} height={90} />
                                <ShoppingItem image={APPLE} src='Apple' width={66} height={82} />
                                <ShoppingItem image={BEST_BUY} src='Best Buy' width={113} height={77} />
                                <ShoppingItem image={CREATE_BARREL} src='Create & Barrel' width={154} height={23} />

                                <ShoppingItem image={HubsonSbay} src={'Hubson´s bay'} width={133} height={86} />
                                <ShoppingItem image={TJX} src='TJX' width={119} height={63} />
                                <ShoppingItem image={VISA} src='Visa' width={120} height={38} />

                                <ShoppingItem image={ROOTS} src='Roots' width={119} height={63} />
                                <ShoppingItem image={CINEPLEX} src='Cineplex' width={138} height={39} />
                                <ShoppingItem image={BP} src='bp' width={92} height={91} />

                                <ShoppingItem image={BASSPROSHOPS} src='Bass Pro Shops' width={121} height={77} />
                                <ShoppingItem image={AMAZON} src='Amazon' width={141} height={42} />
                                <ShoppingItem image={STARBUCKS} src='Starbucks' width={90} height={90} />

                                <ShoppingItem image={GAP} src='Gap' width={88} height={88} />
                                <ShoppingItem image={JA} src='Jack Astor´s' width={117} height={87} />
                                <ShoppingItem image={ESSO} src='ESSO' width={122} height={86} />

                                <ShoppingItem image={TIM_HORTONS} src='Tim Hortons' width={133} height={77} />
                                <ShoppingItem image={WALMART} src='Walmart' width={153} height={37} />
                            </div>
                        </Scrollbars>
                    </div>
                    <MenuRight
                        show={showMenu}
                        onClickOverlay={toggleRightMenu}
                        disabled={!isTabletOrMobile} className={styles.MenuRight}>
                        <OrderSummaryLayout
                            className={styles.orderSummary}
                            footerClassName={styles.orderFooter}
                            bodyClassName={styles.orderBody}
                            heading={isTabletOrMobile ? <HeadingMenu onClickClose={toggleRightMenu} /> : <Heading handleConfirm={toCheckout} />}
                            footer={isTabletOrMobile ? null : <Continue text='Confirm Items' onClick={toCheckout} />}
                        >
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </OrderSummaryLayout>
                    </MenuRight>
                </div>
            </div>

            <div className={styles.continueTablet} >
                <Continue text='Confirm Items' onClick={toCheckout} />
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </>
    )
})
