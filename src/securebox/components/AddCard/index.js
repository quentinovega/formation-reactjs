import React, { Component } from 'react';
import { connect } from 'react-redux'

import { bindActionCreators } from "redux"
import {
    addCard
} from "../../actions/Card"

class AddCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            billingPrice : 0
        }

        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFormChange(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault()

        this.props.addCard({
            billing : {
                price: this.state.billingPrice
            }
        })

    }

    render(){
      

        return (
            <div className="form__card">
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="number"
                        name="billingPrice"
                        onChange={this.handleFormChange}
                        value={this.state.billingPrice}
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
