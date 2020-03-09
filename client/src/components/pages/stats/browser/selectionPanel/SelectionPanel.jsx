import React, { Component } from 'react';

import SelectionCard from './selectedCard/SelectionCard';


class SelectionPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectionItems:this.props.selectionItems
        }
        
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
        return this.state.selectionItems.map(elm => <SelectionCard {...elm} setSelected={this.props.setSelected} key={elm.id} selectedIds={this.props.selectedIds} removeSelected={this.props.removeSelected} />)
    }
    
}

export default SelectionPanel

//refactor stateless