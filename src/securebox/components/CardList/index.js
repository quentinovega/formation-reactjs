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
        

        if(_.isEmpty(cards)){
            return false
        }

        return (
            <div className="card__list">
                {this.props.children}
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
    cards : PropTypes.array.isRequired,
    filter : PropTypes.string
}

function mapStateToProps(state, ownProps){

    if(_.isUndefined(ownProps.filter)){
        return {
            cards : _.orderBy(state.Card.cards, "order", "asc")
        }
    }

    return {
        cards: _.chain(state.Card.cards)
                .filter((card) => {
                    if(ownProps.filter === "all"){
                        return true
                    }

                    return card.billing.type.key === ownProps.filter
                })
                .orderBy("order", "asc")
                .value()
    }
}

export default connect(mapStateToProps)(CardList);
