import React, { Component } from 'react';

import SelectionCard from './selectedCard/SelectionCard';


class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected:[],
            selectionItems:this.props.selectionItems
        }
        this.setSelected=this.props.setSelected
    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.selectionItems !== prevProps.selectionItems) { 
          this.setState({
            selectionItems:this.props.selectionItems
            });
        }
    }

    render() {

        return this.state.selectionItems.map(elm => <SelectionCard {...elm} setSelected={this.setSelected} />)
         
    }
}

export default ProductTable