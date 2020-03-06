import { ResponsiveRadar } from '@nivo/radar'

import React from 'react'

const Radar = props => {

    let dirtyData = props.data, cleanData = [{feature:"danceability",song0:"0",song1:"0",song2:"0",song3:"0",song4:"0"},
                                            {feature:"energy",song0:"0",song1:"0",song2:"0",song3:"0",song4:"0"},
                                            {feature:"valence",song0:"0",song1:"0",song2:"0",song3:"0",song4:"0"}]
    dirtyData.forEach((element,idx) => {
        for(let i = 0;i<5;i++){
            switch (i) {
                case 0:
                    console.log(element.body)
                    cleanData[i]["song"+idx]=Math.trunc(element.body.danceability*100)
                    break;
                case 1:
                    cleanData[i]["song"+idx]=Math.trunc(element.body.energy*100)
                    break;
                case 2:
                    cleanData[i]["song"+idx]=Math.trunc(element.body.valence*100)
                    break;
                // case 3:
                //     cleanData[i]["song"+idx]=Math.trunc(element.body.instrumentalness*100)
                //     break;
                // case 4:
                //     cleanData[i]["song"+idx]=Math.trunc(element.body.speechiness*100)
                //     break;
            
                default:
                    break;
            }
            
        }
    });
    
    console.log("-------------------------")
    console.log(cleanData)
    
    
return(
    
    <ResponsiveRadar
        data={cleanData} //aqui los props
        keys={[ 'song0', 'song1', 'song2','song3','song4' ]}
        indexBy="feature"
        maxValue={100}
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        curve="cardinalClosed"
        borderWidth={3}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={16}
        enableDots={true}
        dotSize={20}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={0}
        dotBorderColor={{ from: 'color', modifiers: [] }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={4}
        theme={{dots: {text: {fill: 'rgb(0,0,0)'}} ,legends:{text:{fill:'rgb(0,0,0)'}}}}
        colors={{ scheme: 'accent' }}
        fillOpacity={0.15}
        blendMode="normal"
        animate={true}
        motionStiffness={70}
        motionDamping={7}
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 70,
                itemHeight: 20,
                itemTextColor: '#ffffff',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#1db954'
                        }
                    }
                ]
            }
        ]}
    />
)}


export default Radar