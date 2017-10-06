import * as _ from "lodash"
import moment from "moment"

export default {
    cards : [
        {
            id:  0,
            order: 0,
            billing : {
                price : _.random(1,100),
                type : "Tiers payant",
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
                type : "Tiers payant",
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