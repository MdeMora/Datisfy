import React, { Component } from 'react'

// import Container from 'react-bootstrap/Container'

import SearchBar from './searchBar/SearchBar';
import BrowserBtn from './browserBtn/BrowserBtn';
import SelectionPanel from './selectionPanel/SelectionPanel';

import './Browser.css'



import ChartServices from '../../../../services/chart.services'

class Browser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectionItems : [],
            selectedTerm:"",
            hide:false
            
        }
        this.services = new ChartServices()
        
    }

    click = (input) =>{
        this.setState({selectedTerm:input})
        console.log("Selected Term changed to:",input)
    }
    filterItems = (input) =>{

        let selectionItemsCopy = [...this.state.selectionItems]
        
        // selectionItemsCopy.data.filter(elm => elm.name.toLowerCase().includes(input))
       
        this.setState({
            selectionItems:selectionItemsCopy
        })
    }

    

    render() {

        return (
            <article>
                <div className="d-flex flex-column">
                
                    <SearchBar selectedTerm={this.state.selectedTerm} selectionItems={this.state.selectionItems}/>

                    {/* <button onClick={()=> this.setState({hide:true})}>HOli</button>
                    {!this.state.hide ? <h1>HOLA!</h1> :  <p>HOli</p>} */}

                    {!this.state.hide?(

                        <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <BrowserBtn name="track" click={this.click} onClick={()=> this.setState({hide:true})}/>
                            </div>
                            <div className="col-4">
                                <BrowserBtn name="album" click={this.click}/>
                            </div>
                            <div className="col-4">
                                <BrowserBtn name="artist" click={this.click}/>
                            </div>
                            <div className="col-4">
                                <BrowserBtn name="tracks" click={this.click}/>
                            </div>
                            <div className="col-4">
                                <BrowserBtn name="albums" click={this.click}/>
                            </div>
                            <div className="col-4">
                                <BrowserBtn name="artists" click={this.click}/>
                            </div>
                        </div>
                    </div>
                    ):(
                        <SelectionPanel/>
                    )
                    
                    }
                    
            </div>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>
            </article>
        )
    }
}

export default Browser