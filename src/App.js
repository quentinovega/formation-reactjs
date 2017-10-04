import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './securebox/components/CardList'
import * as _ from "lodash"
import moment from "moment"

class App extends Component {
 
    constructor(props){
        super(props)

        this.handleChangeCard = this.handleChangeCard.bind(this)

        this.state = {
            cards : [
                {
                    billingPrice : _.random(1,100),
                    billingType : "Tiers payant",
                    billingDate : moment().format("MMM Do YY"),
                    billingCustomer: "Tony Stark",
                    paymentPrice : _.random(1,100),
                    paymentDate : moment().format("MMM Do YY"),
                    paymentType: "CB",
                    validPayment: true,
                },
                {
                    billingPrice : _.random(1,100),
                    billingType : "Ordonnance",
                    billingDate : moment().format("MMM Do YY"),
                    billingCustomer: "Hulk",
                    paymentPrice : _.random(1,100),
                    paymentDate : moment().format("MMM Do YY"),
                    paymentType: "Espece",
                    validPayment: true,
                },
                {
                    billingPrice : _.random(1,100),
                    billingType : "Tiers payant",
                    billingDate : moment().format("MMM Do YY"),
                    billingCustomer: "Thor",
                    paymentPrice : _.random(1,100),
                    paymentDate : moment().format("MMM Do YY"),
                    paymentType: "Cheque",
                    validPayment: true,
                },
                {
                    billingPrice : _.random(1,100),
                    billingType : "Ordonnance",
                    billingDate : moment().format("MMM Do YY"),
                    billingCustomer: "Captain America",
                    paymentPrice : null,
                    paymentDate : moment().format("MMM Do YY"),
                    paymentType: "CB",
                    validPayment: false,
                }
            ]
        }
    }   

    handleChangeCard(index, key, value){
        let _state = this.state
        _state.cards[index][key] = value
        this.setState(_state)
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br />
                </p>
                <CardList
                    handleChangeCard={this.handleChangeCard}
                    cards={this.state.cards}
                />
            </div>
        );
    }
    
}

export default App;
