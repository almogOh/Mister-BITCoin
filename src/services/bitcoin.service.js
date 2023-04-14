import axios from 'axios'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

function getRate(coins) {
    var url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    return axios.get(url)
        .then(res => res.data)
}

async function getMarketPrice() {
    var url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    const res = await axios.get(url).then(res => res.data)
    return {
        title: res.name,
        data: res.values.map(point => point.y),
        description: res.description
    }
}

async function getConfirmedTransactions() {
    var url = 'https://api.blockchain.info/charts/n-transactions?format=json&cors=true'
    const res = await axios.get(url).then(res => res.data)
    return {
        title: res.name,
        data: res.values.map(point => point.y),
        description: res.description
    }
}