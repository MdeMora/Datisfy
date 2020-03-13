import React, { Component } from 'react'

import SearchServices from "../../../../services/search.services";
import ChartSelectionModal from './chartSelectionModal/ChartSelectionModal'

import './cssAnimation.css'



class Charter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedObjs: this.props.selectedObjs,
            audioFeatures : [],
            arrId: this.props.arrId,
            selectedTerm:this.props.selectedTerm,
            selectedChart:"",
            hIde: false
        }
        this.searchServices = new SearchServices()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (this.props.selectedObjs !== prevProps.selectedObjs) { 
          this.setState({
            selectedObjs:this.props.selectedObjs
            });
        }

        if (this.props.selectedTerm !== prevProps.selectedTerm) { 
            this.setState({
                selectedTerm:this.props.selectedTerm
              });
        }

        if (this.props.arrId !== prevProps.arrId) { 
            this.setState({
                arrId:this.props.arrId
              },async ()=> {
                let audioFeaturesAsync = await this.searchServices.audioFeatures(this.state.arrId)
                this.setState({audioFeatures:audioFeaturesAsync})
            });
        }        
    }


    click = input => {
        
        this.setState({ selectedChart: input });
    
    };

    reset = () =>{
        this.setState({ hIde: false,selectedChart:""})
    }


    render() {



        return (
            <article>
                <div className="d-flex flex-column">
                {this.state.selectedTerm === "" ? (
                    <div className="d-flex justify-content-center align-content-center">
                    <div className="spinner-box">

                    <div className="blue-orbit leo"></div>
                    <div className="green-orbit leo"></div>
                    <div className="red-orbit leo"></div>
                    <div className="white-orbit w1 leo"></div>
                    <div className="white-orbit w2 leo"></div>
                    <div className="white-orbit w3 leo"></div>

                    </div>
                    </div>
                    

                ):(
                    <ChartSelectionModal selectedTerm={this.state.selectedTerm} audioFeatures={this.state.audioFeatures} selectedObjs={this.props.selectedObjs}/>
                )}
                    
                </div>
            </article>
        )
    }
}

export default Charter