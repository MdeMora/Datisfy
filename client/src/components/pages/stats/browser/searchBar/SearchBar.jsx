import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'

import SearchServices from "../../../../../services/search.services";


import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:"",
            selectedTerm:this.props.selectedTerm,
            selectionItems:[]
        }
        console.log('Props the Search Bar',this.props)
        this.filterItems=this.props.filterItems
        this.services=new SearchServices()
    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.selectedTerm !== prevProps.selectedTerm) { 
          this.setState({
              selectedTerm:this.props.selectedTerm
            });
        }
      }

    handleChange = e => {
        let {value} = e.target
        
        this.setState({
            input: value
        },() => this.filterItems(this.state.input))
    }


    render() {
        
        return (

            <Form>
                <Form.Group >
                    <Form.Control 
                    type="text" 
                    name="input" 
                    placeholder={`Search for ${this.state.selectedTerm}`}
                    value={this.state.input} 
                    onChange={this.handleChange}
                    />
                </Form.Group>
            </Form>

        )
    }
}

export default SearchBar;