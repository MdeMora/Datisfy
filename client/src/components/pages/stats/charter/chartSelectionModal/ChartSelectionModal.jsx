import React, { Component } from 'react';
import BrowserBtn from "../../browser/browserBtn/BrowserBtn"
import ChartDrawer from './chartDrawer/ChartDrawer'

class ChartSelectionModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedChart:"",
            selectedTerm:this.props.selectedTerm,
            hide:false
        }
        this.setSelected=this.props.setSelected
    }

    componentDidUpdate(prevProps,prevState) {
        
        this.props.selectedTerm !== prevProps.selectedTerm && this.setState({selectedTerm:this.props.selectedTerm})
        prevState.selectedChart !== this.state.selectedChart && this.setState({selectedChart:this.state.selectedChart});
          
    }

    click = input => {
        this.setState({ selectedChart: input })
    };

    reset = () =>{
        this.setState({ hide: false,selectedChart:""})
    }

    render() {
        return (
            !this.state.hide ? (

                this.state.selectedTerm==="track"?(

                    <div className="container">
                        
                        <div onClick={() => this.setState({ hide: true })}  >
                            <BrowserBtn name="Radar" click={this.click}/>
                        </div>
                        
                        <div onClick={() => this.setState({ hide: true, })} >
                            <BrowserBtn name="Popularity" click={this.click}/>
                        </div>
                    
                    </div>

                   ):(

                    <div className="container">
                        
                        <div onClick={() => this.setState({ hide: true })} >
                            <BrowserBtn name="Followers" click={this.click} />
                        </div>
                        
                        <div onClick={() => this.setState({ hide: true, })} >
                            <BrowserBtn name="Popularity" click={this.click}/>
                        </div>
                    
                    </div>
                   )
            ) : (
                <ChartDrawer selectedChart={this.state.selectedChart} audioFeatures={this.props.audioFeatures} reset={this.reset} selectedObjs={this.props.selectedObjs}/>
            )

            
        )         
    }
}

export default ChartSelectionModal
