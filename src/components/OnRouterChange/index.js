import React from 'react'
import * as Scroll from 'react-scroll'
import {
    withRouter
} from 'react-router-dom'

class OnRouterChange extends React.PureComponent {
    componentDidMount () {
        this.unlisten = this.props.history.listen((location, action) => {
            this.onRouteChange()
        })
    }

    componentWillUnmount () {
        this.unlisten()
    }

    onRouteChange () {
        Scroll.animateScroll.scrollToTop({
            duration: 250,
            delay: 0,
            smooth: 'easeInOutQuint'
        })
    }

    render () {
        return null
    }
}

export default withRouter(OnRouterChange)
