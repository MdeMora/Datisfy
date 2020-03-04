import { ResponsiveRadar } from '@nivo/radar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import React from 'react'

const Radar = props => {

return(
    <ResponsiveRadar
        data={data} //aqui los props
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        maxValue={100}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="cardinalClosed"
        borderWidth={3}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={45}
        enableDots={true}
        dotSize={10}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={0}
        dotBorderColor={{ from: 'color', modifiers: [] }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-10}
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
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)}


export default Radar