import React, { Component } from 'react';
import "./index.css"

class CardBilling extends Component {

    render(){
        return (
            <div className="billing">
                <h2>Montant de la facture : {this.props.billingPrice}</h2>
                <p>Client : {this.props.billingCustomer}</p>
                <p>Type : {this.props.billingType}</p>
                <p>Date : {this.props.billingDate}</p>
            </div>
        )
    }
   
}

export default CardBilling;

