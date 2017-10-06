import React, { Component } from 'react';
import "./index.css"

class CardBilling extends Component {

    render(){
        return (
            <div className="billing">
                <h2>Montant de la facture : {this.props.price}</h2>
                <p>Client : {this.props.customer}</p>
                <p>Type : {this.props.type}</p>
                <p>Date : {this.props.date}</p>
            </div>
        )
    }
   
}

export default CardBilling;

