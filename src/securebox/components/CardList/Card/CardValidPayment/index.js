import React, { Component } from 'react';
import { connect } from "react-redux"
import {
    changeCard
} from "../../../../actions/Card"
import { bindActionCreators } from "redux"

class CardValidPayment extends Component {

    render(){

        return (
            <div className="card_valid">
                <input 
                    type="checkbox" 
                    onChange={(event) => {
                        let { card } = this.props
                        card.validPayment = event.target.checked
                        this.props.changeCard(card) 
                    }}
                    checked={this.props.validPayment}
                />
            </div>
        )
    }
   
}

function mapDispatchToProps(dispatch){
    return {
        changeCard : bindActionCreators(changeCard, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CardValidPayment);

