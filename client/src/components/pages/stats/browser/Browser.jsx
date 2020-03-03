import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

import SearchBar from "./searchBar/SearchBar";
import BrowserBtn from "./browserBtn/BrowserBtn";
import SelectionPanel from "./selectionPanel/SelectionPanel";

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
  }

  click = input => {
    this.setState({ selectedTerm: input });
  };

  filterItems = input => {

    console.log("Estoy enganchado y este es el input",input)

    switch (this.state.selectedTerm) {
      case "track":
          this.services.track({searchInput:input})
              .then(result =>{
                  console.log(result.tracks.items)
                  this.setState({selectionItems:result.tracks.items})
              })
          break;
  
      default:
          console.log("default switch case")
          break;
    }

    // let selectionItemsCopy = [...this.state.selectionItems];

    // selectionItemsCopy.data.filter(elm => elm.name.toLowerCase().includes(input))

    // this.setState({
    //   selectionItems: selectionItemsCopy
    // });

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
              <div className="row">
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="track" click={this.click} />
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="album" click={this.click} />
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="artist" click={this.click} />
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="tracks" click={this.click} />
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="albums" click={this.click} />
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={() => this.setState({ hide: true })}>
                    <BrowserBtn name="artists" click={this.click} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <SelectionPanel selectionItems={this.state.selectionItems}/>
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
