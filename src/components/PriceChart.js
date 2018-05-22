import React from 'react';
import { Text, View } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';

class PriceChart extends React.Component {
  constructor( props ) {
    super( props );
    this.fetchHistoricalData = this.fetchHistoricalData.bind( this );
  }
  fetchHistoricalData() {
    fetch( 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=29' )
      .then( response => response.json() )
      .then( ( historicalData ) => {
        const pointsArray = historicalData.Data.map( data => data.close );
        const timeStampArray = historicalData.Data.map( data => moment.unix( data.time ).format( 'MM/DD/YYYY' ) );
        this.setChartData( pointsArray, timeStampArray );
        return pointsArray;
      } ).then( ( pointsArray ) => {
        fetch( 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD' )
          .then( response => response.json() )
          .then( ( price ) => {
            this.setState( {
              currentPrice: price.USD,
              priceChange: HistoricalChart.roundNumber( price.USD - pointsArray[0], 2 ),
              percentChange: HistoricalChart.roundNumber( ( price.USD - pointsArray[0] ) / pointsArray[0] / 0.01, 2 ),
              timeOfPrice: moment(),
            } );
          } );
      } )
      .catch( ( error ) => {
        console.error( error );
      } );
  }
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

    return (
      <View>
        <Text>30 day price chart</Text>
        <LineChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
    );
  }
}

export default PriceChart;

