import React, { Component } from 'react';

class AddPayment extends Component {
    constructor(props){
        super(props)

        this.formCard = {
            price : 0,
            type: ""
        }

        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
    
        this.props.handleFormChange("payment", name, value)
    }

    render(){
      

        return (
            <div className="form__card__payment">
                <div className="form__item">
                    <label htmlFor="type">
                        Type : 
                    </label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        onChange={this.handleFormChange}
                        value={this.props.type}
                    />
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
                        value={this.props.price}
                    />
                </div>
            </div>
        )
    }
   
}


export default AddPayment;
