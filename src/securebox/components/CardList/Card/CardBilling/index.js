import React, { Component } from 'react';
import "./index.css"
import * as _ from "lodash"
import {
    LIST_TYPE
} from "../../../../constants/Card/type"

class CardBilling extends Component {

    render(){
        return (
            <div className="billing">
                <h2>Montant de la facture : {this.props.price}</h2>
                <p>Client : {this.props.customer}</p>
                <p>Type : {_.find(LIST_TYPE, {key : this.props.type}).label}</p>
                <p>Date : {this.props.date}</p>
            </div>
        )
    }
   
}

export default CardBilling;

