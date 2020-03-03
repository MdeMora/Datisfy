import React, { Component } from 'react';
import SelectionCard from './selectedCard/SelectionCard';


class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected:""
            
        }
    }
    componentDidUpdate(){
        // console.log(this.props, this.state.filteredProducts)
    }
    render() {
        
        return(
            
            <div>Un panel</div>
        )
    }
}

export default ProductTable