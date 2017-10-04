import React, { Component } from 'react';

class CardPayment extends Component {

    render(){
        return (
            <div className="payment">
                <h2>Montant du paiement : {this.props.paymentPrice}</h2>
                <p>Type : {this.props.paymentType}</p>
                <p>Date : {this.props.paymentDate}</p>
            </div>
        )
    }
   
}

export default CardPayment;

