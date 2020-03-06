import { ResponsiveLine } from '@nivo/line'


import React from 'react'

const TrackLine = props => {

    let dirtyData = props.data, cleanData = [{
                                                "id": "Popularity",
                                                "color": "#1db954",
                                                "data": [
                                                {"x": "A","y": 0},
                                                {"x": "B","y": 0},
                                                {"x": "C","y": 0},
                                                {"x": "D","y": 0},
                                                {"x": "E","y": 0}]
                                            }]
    dirtyData.forEach( (elm,idx) => {
        cleanData[0].data[idx].x=elm.name
        cleanData[0].data[idx].y=elm.popularity

    })
    
    
    console.log("-------------------------")
    console.log(cleanData)
    
    
return(
    
    <ResponsiveLine
        data={cleanData}
        margin={{ top: 50, right: 20, bottom: 60, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: '0', max: '100', stacked: true, reverse: false }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisLeft={{
            orient: 'left',
            tickSize: 14,
            tickPadding: 6,
            tickRotation: 18,
            legend: 'Popularity',
            legendOffset: -52,
            legendPosition: 'middle'
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 13,
            tickRotation: 0,
            legend: 'Song Names',
            legendOffset: 48,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        lineWidth={4}
        pointSize={20}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={true}
        pointLabel="y"
        pointLabelYOffset={4}
        enableArea={true}
        areaOpacity={0.25}
        crosshairType="top"
        useMesh={true}
        motionStiffness={30}
        motionDamping={7}
    />
)}


export default TrackLine

// TODO Poner color verde