import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

import SearchBar from "./searchBar/SearchBar";
import BrowserBtn from "./browserBtn/BrowserBtn";
import SelectionPanel from "./selectionPanel/SelectionPanel";
import { Link } from 'react-router-dom'

import "./Browser.css"; 

import SearchServices from "../../../../services/search.services";

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionItems: [],
      selectedTerm: "",
      hide: false
    };
    this.services = new SearchServices();
    this.setSelected = this.props.setSelected
  }

  click = input => {
    this.props.setIndexTerm(input)
    this.setState({ selectedTerm: input });

  };

  reset = () =>{
    this.props.setIndexTerm("")
    this.setSelected({},true) // El true activa el reset
    this.setState({ hide: false,selectedTerm:"",selectionItems:[]})
  }

  resetSelection = () =>{
    this.setSelected({},true) // El true activa el reset
  }

  filterItems = input => {

    switch (this.state.selectedTerm) {
      case "track":
          this.services.track({searchInput:input})
              .then(result =>this.setState({selectionItems:result.tracks.items}))
          break;
      case "artist":
        this.services.artist({searchInput:input})
                  .then(result => this.setState({selectionItems:result.artists.items}))
        break;
  
      default:
          console.log("default switch case")
          break;
    }
  };

  render() {
    return (
      <article>
        <div className="d-flex flex-column">
          <SearchBar
            selectedTerm={this.state.selectedTerm}
            selectionItems={this.state.selectionItems}
            filterItems={this.filterItems}
          />

          {/* <button onClick={()=> this.setState({hide:true})}>HOli</button>
                    {!this.state.hide ? <h1>HOLA!</h1> :  <p>HOli</p>} */}

          {!this.state.hide ? (
            <div className="container">
              
                
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="track" click={this.click} />
                  </div>
                
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="artist" click={this.click} />
                  </div>
              
            </div>
          ) : (
              <>
              <SelectionPanel selectionItems={this.state.selectionItems} setSelected={this.setSelected}/>
              <Link className="backBtn" to="/charts" onClick={this.reset}>Go Back</Link>
              <Link className="backBtn" to="/charts" onClick={this.resetSelection}>Reset</Link>
              
              </>
            )}
        </div>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      </article>
    );
  }
}

export default Browser;
