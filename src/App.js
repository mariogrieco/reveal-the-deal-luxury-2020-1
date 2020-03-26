// @flow
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Store } from 'Store'
import { fetchCampaign } from 'Actions'

import Landing from 'pages/Landing'
import Step1 from 'pages/Step1'
import Step2 from 'pages/Step2'
import Step3 from 'pages/Step3'
import Success from 'pages/Success'
import Welcome from 'pages/Welcome'
import Shopping from 'pages/Shopping'
import PromoService from './components/PromoService'
import PromoHouse from './components/PromoHouse'
import Footer from 'components/Footer'
import TopBar from 'components/TopBar'
import ThemeWrapper from 'components/ThemeWrapper'
import OnRouterChange from 'components/OnRouterChange'
import CampaignNotFound from 'components/CampaignNotFound'
import Checkout from 'pages/Checkout'

const IS_CAMPAIGN_URL = /^\/.+$/.test(window.location.pathname)

const AppRoute = ({ component: Component, layout: Layout = MainLayout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <OnRouterChange />
            <Component {...props} />
        </Layout>
    )}/>
)

const MainLayout = props => {
    const { state } = React.useContext(Store)

    return (
        <ThemeWrapper>
            <TopBar locale={state.locale} date={state.campaign.expiryDate}/>
            {props.children}
            <Footer/>
        </ThemeWrapper>
    )
}

const NoLayout = (props) => (<>{props.children}</>)

export default function App () {
    const { state, dispatch } = React.useContext(Store)

    React.useEffect(() => {
        if (IS_CAMPAIGN_URL && state.campaign === null && state.errors.campaignNotFound !== true) {
            fetchCampaign(dispatch)
        }

        if (state.campaign) {
            document.title = `${state.campaign.client.name} Upgrade Sale`
        }
    })

    if (state.errors.campaignNotFound) {
        return <CampaignNotFound/>
    }

    if (IS_CAMPAIGN_URL && state.campaign === null) {
        return <h1>Loading</h1>
    }

    return (
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <AppRoute exact path='/' component={Welcome} layout={NoLayout}/>
                    <AppRoute exact path='/:url' component={Landing}/>
                    <AppRoute exact path='/:url/step-1' component={Step1}/>
                    <AppRoute exact path='/:url/step-2' component={Step2}/>
                    <AppRoute exact path='/:url/step-3' component={Step3}/>
                    <AppRoute exact path='/:url/success' component={Success}/>
                    <AppRoute exact path='/:url/shopping' layout={NoLayout} component={Shopping} />
                    <AppRoute exact path='/:url/checkout' layout={NoLayout} component={Checkout} />
                    <AppRoute exact path="/:url/promo-voucher/service" layout={NoLayout} component={PromoService}/>
                    <AppRoute exact path="/:url/promo-voucher/house" layout={NoLayout} component={PromoHouse}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}
