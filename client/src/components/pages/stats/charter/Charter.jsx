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
            arrID:[],
            selectedTerm:this.props.selectedTerm,
            selectedChart:"",
            hide: false
        }
        this.services = new SearchServices()
    }

    componentDidMount(){
        
    }

    componentDidUpdate(prevProps, prevState) {
        // Uso tipico (no olvides de comparar los props):
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

        let selectedObjsCopy = [...this.state.selectedObjs],arrIdCopy=[]
        
        selectedObjsCopy.forEach((elm)=>arrIdCopy.push(elm.id))
        
        if(prevState.selectedObjs.length!==arrIdCopy.length){
            this.setState({
                arrID:arrIdCopy
            },async ()=> {
                let audioFeaturesAsync = await this.services.audioFeatures(this.state.arrID)
                this.setState({audioFeatures:audioFeaturesAsync})
            })
        }

        // Preguntar a german sobre async y await
        
    }


    click = input => {
        
        this.setState({ selectedChart: input });
    
    };

    reset = () =>{
        this.setState({ hide: false,selectedChart:""})
    }


    render() {



        return (
            <article>
                <div className="d-flex flex-column">
                {this.state.selectedTerm === "" ? (
                        
                    
                    <div class="spinner-box">

                        <div class="blue-orbit leo"></div>
                        <div class="green-orbit leo"></div>
                        <div class="red-orbit leo"></div>
                        <div class="white-orbit w1 leo"></div>
                        <div class="white-orbit w2 leo"></div>
                        <div class="white-orbit w3 leo"></div>

                    </div>
                ):(
                    <ChartSelectionModal selectedTerm={this.state.selectedTerm} audioFeatures={this.state.audioFeatures}/>
                )}
                    
                </div>
            </article>
        )
    }
}

export default Charter