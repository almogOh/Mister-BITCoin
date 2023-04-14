import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { logDOM } from '@testing-library/react'
import { ContactPage } from './ContactPage'
import { StatisticPage } from './StatisticPage'

import bitcoin from '../assets/imgs/mainBitcoin.png'

export class Home extends Component {

    state = {
        user: this.getUser,
        rate: null,
        active: 'home'
    }

    componentDidMount() {
        this.loadRate()
        this.onChangeToHome()
    }

    get getUser() {
        return userService.getUser()
    }

    /*loadUser = async () => {
        try {
            const user = await userService.getUser()
            this.setState({ user })
        } catch (err) {
            console.log('err:', err)
        }
    }*/

    loadRate = async () => {
        try {
            const rate = await bitcoinService.getRate(this.state.user.coins)
            this.setState({ rate })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeToContacts = () => {
        const active = 'contactPage'
        this.setState({ active })
    }

    onChangeToHome = () => {
        const active = 'home'
        this.setState({ active })
    }

    onChangeToStatistics = () => {
        const active = 'statistics'
        this.setState({ active })
    }

    render() {
        const { user, rate, active } = this.state
        if (!user) return <div>Loading...</div>

        return (
            <section>
                {active === 'home' ? (
                <section className='home'>
                    <div className="header-container">
                        <div className="wrapper">
                            <div className="home-body">
                                <div className="hero-content">
                                    <h1>Hi, {user.name}</h1>
                                    <p>
                                        Welcome to Mister-BITCoin,<br></br> 
                                        your digital wallet to make trades.
                                    </p>
                                    <p>Coins: {user.coins}<br></br>Rate: {rate}</p>
                                    <button onClick={this.onChangeToContacts}>Contacts</button>
                                    <button onClick={this.onChangeToStatistics}>Statistics</button>
                                </div>

                                <div className="hero-image">
                                    <img src={bitcoin} alt="" />
                                    <div className="photo-bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                ) : active === 'contactPage' ? (
                    <ContactPage />
                ) : active === 'statistics' ? (
                    <StatisticPage />
                ) : null}
            </section>
        )
    }
}