import * as _ from "lodash"

import {
    CHANGE_CARD,
    ADD_CARD
} from "../../constants/Card"
import initialState from "./initialState"

function card(
    state = initialState,
    action
) {    
    switch (action.type) {
        case CHANGE_CARD:
            return _.extend({}, state, {
                cards : _.map(state.cards, (card) => { 
                    if(card.id !== action.payload.id){
                        return card
                    }
                    return _.extend({}, card)
                })
            })
        case ADD_CARD:
            let card = _.extend({}, action.payload, {
                id: state.cards.length,
                order: state.cards.length
            })
            return _.extend({}, state ,{
                cards : _.flatten([state.cards,action.payload])
            })
        default:
            return state
    }
}

export default card