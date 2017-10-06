import React, { Component } from 'react';

class CardPayment extends Component {

    render(){
        return (
            <div className="card__payment">
                <h2>Montant du paiement : {this.props.price}</h2>
                <p>Type : {this.props.type.label}</p>
                <p>Date : {this.props.date}</p>
            </div>
        )
    }
   
}

export default CardPayment;

