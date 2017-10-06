import React, { Component } from 'react';
import * as _ from "lodash"
import {
    LIST_TYPE,
    TYPE_ORDO
} from "../../../constants/Card/type"
import "./index.css"

class AddBilling extends Component {
    constructor(props){
        super(props)

        this.state  = {
            price : 0,
            type: TYPE_ORDO,
            customer: ""
        }

        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.props.handleFormChange("billing", name, value)
    }

    render(){
      
        return (
            <div className="form__card__billing">
                <div className="form__item">
                    <label htmlFor="customer">
                        Customer : 
                    </label>
                    <input
                        type="text"
                        id="customer"
                        name="customer"
                        onChange={this.handleFormChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="type">
                        Type : 
                    </label>
                    <select
                        onChange={this.handleFormChange}
                        name="type"
                    >
                        {LIST_TYPE.map((type, k) => {
                            return (
                                <option
                                    key={k} 
                                    value={type.key}
                                >
                                    {type.label}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="customer">
                        Price : 
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={this.handleFormChange}
                    />
                </div>
            </div>
        )
    }
   
}


export default AddBilling;
