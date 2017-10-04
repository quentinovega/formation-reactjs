import React, { Component } from 'react';


class CardValidPayment extends Component {

    changeValidPayment(e){
        this.props.handleChangeCard(this.props.index,"validPayment",e.target.checked)
    }

    render(){
        console.log(this.props)
        return (
            <div className="card_valid">
                <input 
                    type="checkbox" 
                    onChange={this.changeValidPayment.bind(this)}
                    checked={this.props.validPayment}
                />
            </div>
        )
    }
   
}

export default CardValidPayment;

