import * as _ from "lodash"
import moment from "moment"

import {
    LIST_TYPE,
    TYPE_TIER,
    TYPE_ORDO
} from "../../constants/Card/type"

export default {
    cards : [
        {
            id:  0,
            order: 0,
            billing : {
                price : _.random(1,100),
                type : _.first(_.filter(LIST_TYPE, {key : TYPE_TIER})),
                date : moment().format("MMM Do YY"),
                customer: "Tony Stark",
            },
            payment : {
                price : _.random(1,100),
                date : moment().format("MMM Do YY"),
                type: "CB",
            },
            validPayment: true,
        },
        {
            id: 1,
            order: 1,
            billing : {
                price : _.random(1,100),
                type : _.first(_.filter(LIST_TYPE, {key : TYPE_ORDO})),
                date : moment().format("MMM Do YY"),
                customer: "Tony Stark",
            },
            payment : {
                price : _.random(1,100),
                date : moment().format("MMM Do YY"),
                type: "CB",
            },
            validPayment: true,
        }
    ]
}