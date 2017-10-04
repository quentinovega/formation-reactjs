import React, { Component } from 'react';

import Card from "./Card"
import CardPayment from "./Card/CardPayment"
import CardBilling from "./Card/CardBilling"
import CardValidPayment from "./Card/CardValidPayment"
import * as _ from "lodash"

class CardList extends Component {

    render(){
        console.log(this.props)
        return (
            <div className="card__list">
                {this.props.cards.map((card, k) => {
                    return (
                        <Card
                            key={k}
                            {...card}
                        >
                            {
                                !_.isNull(card.paymentPrice) &&
                                <CardPayment 
                                    {...card}
                                />
                            }
                            
                            <CardBilling 
                                {...card} 
                            />
                            <CardValidPayment
                                index={k}
                                handleChangeCard={this.props.handleChangeCard}
                                {...card}
                            />
                        </Card>
                    )
                })}     
            </div>
        )
    }
   
}

export default CardList;

