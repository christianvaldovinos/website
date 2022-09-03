import React, { Component } from 'react'
import Header from './components/header'
import MiddleSection from './components/middleSection'

export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <MiddleSection />
            </>
        )
    }
}

