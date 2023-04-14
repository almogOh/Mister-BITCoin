import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({ title, data, description, color }) {

    return (
        <div className="chart">
            <div className="chart-name">{title}</div>
            <Sparklines data={data} >
                <SparklinesLine color={color} />
            </Sparklines>
            <div className="chart-desc">{description}</div>
        </div>
    )
}