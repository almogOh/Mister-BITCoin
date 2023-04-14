import React, { Component } from 'react';
import { bitcoinService } from '../services/bitcoin.service';
import { Chart } from '../components/Chart';
import '../assets/scss/pages/StatisticPage.scss';

export class StatisticPage extends Component {
    state = {
        chartDetails: []
    }

    async componentDidMount() {
        const chartDetails = await Promise.all([
            bitcoinService.getMarketPrice(),
            bitcoinService.getConfirmedTransactions()
        ])

        this.setState({ chartDetails })
    }

    renderChart(chart, color) {
        const { title, data, description } = chart

        return (
            <Chart title={title}
                data={data}
                description={description}
                color={color} />
        )
    }

    onRefreshPage() {
        window.location.reload(false)
    }

    render() {
        const colors = ['red', 'green']
        return (
            <div className="statistic text-center">
                <ul>
                    {
                        this.state.chartDetails.map((chart, idx) =>
                            <li className="statistic-chart" key={idx}>{this.renderChart(chart, colors[idx])}</li>
                        )
                    }
                </ul>
                <button onClick={this.onRefreshPage}>Back</button>
            </div>
        )
    }
}