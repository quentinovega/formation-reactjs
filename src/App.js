import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './securebox/components/CardList'
import AddCard from './securebox/components/AddCard'
import CardFilter from "./securebox/components/CardList/CardFilter"

import * as _ from "lodash"
import moment from "moment"

class App extends Component {
    
    constructor(props){
        super(props)

        this.handleChangeFilter = this.handleChangeFilter.bind(this)

        this.state = {
            filter : "all"
        }
    }
     
    handleChangeFilter(filter){
        this.setState({
            filter : filter
        })
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
                <AddCard />

                <CardList
                    filter={this.state.filter}
                >
                    <CardFilter 
                        filter={this.state.filter}
                        handleChangeFilter={this.handleChangeFilter}
                    />
                </CardList>

            </div>
        );
    }
    
}

export default App;
