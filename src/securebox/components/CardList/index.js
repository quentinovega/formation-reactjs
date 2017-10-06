import React, { Component } from 'react';
import PropTypes  from "prop-types"
import { connect } from 'react-redux'

import Card from "./Card"
import CardPayment from "./Card/CardPayment"
import CardBilling from "./Card/CardBilling"
import CardValidPayment from "./Card/CardValidPayment"
import * as _ from "lodash"

class CardList extends Component {

    render(){
        const { cards } = this.props
        
        console.log("Cards du render", cards)

        if(_.isEmpty(cards)){
            return false
        }

        return (
            <div className="card__list">
                {this.props.cards.map((card, k) => {
                    return (
                        <Card key={k}>
                            <CardPayment 
                                {...card.payment}
                            />
                            
                            <CardBilling 
                                {...card.billing}
                            />
                            <CardValidPayment
                                card={card}
                            />
                        </Card>
                    )
                })}     
            </div>
        )
    }
   
}

CardList.propTypes = {
    cards : PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        cards: _.orderBy(state.Card.cards, "order", "asc")
    }
}

export default connect(mapStateToProps)(CardList);
