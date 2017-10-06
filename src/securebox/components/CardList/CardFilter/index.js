import React, { Component } from 'react';
import PropTypes  from "prop-types"
import { connect } from 'react-redux'
import {
    LIST_TYPE
} from "../../../constants/Card/type"
import "./index.css"
import classNames from "classnames"
import * as _ from "lodash"

class CardFilter extends Component {
    
    constructor(props){
        super(props)
        this.handleChangeFilter = this.handleChangeFilter.bind(this)
    }

    handleChangeFilter(e){

        this.props.handleChangeFilter(e.target.getAttribute("data-filter"))
    }

    render(){

        const _classAll = classNames({
            "filter--active": this.props.filter === "all",
        }, "filter")

        return (
            <div className="card__list__filter">
                <div 
                    className={_classAll} 
                    onClick={this.handleChangeFilter}
                    data-filter="all"
                >
                    Tous
                </div>
                {LIST_TYPE.map((type, k) => {
                    const _classFilter = classNames({
                        "filter--active": this.props.filter === type.key
                    }, "filter")

                    return (
                        <div 
                            className={_classFilter} 
                            key={k}
                            onClick={this.handleChangeFilter}
                            data-filter={type.key}
                        >
                            {type.label}
                        </div>
                    )
                })}
            </div>
        )
    }
   
}

CardFilter.propTypes = {
    handleChangeFilter : PropTypes.func.isRequired
}

export default CardFilter;
