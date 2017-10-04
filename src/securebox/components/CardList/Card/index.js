import React, { Component } from 'react';

import "./index.css"
import * as _ from "lodash"

class Card extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.validPayment !== this.props.validPayment
    }

    render(){
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
   
}

export default Card;

