import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as _ from "lodash"
import { bindActionCreators } from "redux"
import {
    addCard
} from "../../actions/Card"

import AddBilling from "./AddBilling"
import AddPayment from "./AddPayment"
import "./index.css"

class AddCard extends Component {
    constructor(props){
        super(props)

        this.formCard = {
            billing : {
                price : 0,
                type: "",
                customer: ""
            },
            payment:{
                price: 0,
                type: ""
            }
        }

        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit     = this.handleSubmit.bind(this)
    }

    handleFormChange(type, name, value){
        this.formCard = _.extend(this.formCard, {
            [type]: _.extend(this.formCard[type], {
                [name] : value
            })
        });
    }

    handleSubmit(e){
        e.preventDefault()

        this.props.addCard(this.formCard)

    }

    render(){
      
        return (
            <div className="form__card">
                <form onSubmit={this.handleSubmit}>

                    <AddBilling 
                        handleFormChange={this.handleFormChange}
                    />
                    <AddPayment 
                        handleFormChange={this.handleFormChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>  
            </div>
        )
    }
   
}

function mapDispatchToProps(dispatch){
    return {
        addCard: bindActionCreators(addCard, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddCard);
