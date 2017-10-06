import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './securebox/components/CardList'
import AddCard from './securebox/components/AddCard'

import * as _ from "lodash"
import moment from "moment"

class App extends Component {
 
     
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
                <AddCard />
                <CardList />

            </div>
        );
    }
    
}

export default App;
