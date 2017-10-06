import {
    CHANGE_CARD,
    ADD_CARD
} from "../../constants/Card"

export function changeCard(card){
    return {
        type: CHANGE_CARD,
        payload: card
    }
}

export function addCard(card){
    return {
        type: ADD_CARD,
        payload: card
    }
}