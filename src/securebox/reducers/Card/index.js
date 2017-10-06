import * as _ from "lodash"
import moment from "moment"
import {
    CHANGE_CARD,
    ADD_CARD
} from "../../constants/Card"

import initialState from "./initialState"

function card(
    state = initialState,
    { payload, type }
) {    
    switch (type) {
        case CHANGE_CARD:
            return {
                ...state,
                cards : _.map(state.cards, card => card.id !== payload.id ? card : payload)
            }

        case ADD_CARD:
            let card = _.extend({}, payload, {
                id: state.cards.length,
                order: state.cards.length,
                billing: _.extend({}, payload.billing, {
                    date : moment().format("d-m-Y ")
                }),
                payment: _.extend({}, payload.payment, {
                    date : moment().format("d-m-Y ")
                })
            })

            return {
                ...state,
                cards : _.flatten([state.cards,card])
            }

        default:
            return state
    }
}

export default card