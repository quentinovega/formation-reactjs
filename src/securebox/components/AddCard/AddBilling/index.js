import React, { Component } from 'react';

class AddBilling extends Component {
    constructor(props){
        super(props)

        this.state  = {
            price : 0,
            type: "",
            customer: ""
        }

        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
        
        this.setState({
            [name] : value
        })

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
                        value={this.state.customer}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="type">
                        Type : 
                    </label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        onChange={this.handleFormChange}
                        value={this.state.type}
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
                        value={this.state.price}
                    />
                </div>
            </div>
        )
    }
   
}


export default AddBilling;
