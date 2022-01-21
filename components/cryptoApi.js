import axios from 'axios';
import moment from 'moment';

//Used to display price charts for 7 days!
const formatSparkline = (numbers) => {
  const days = moment().subtract(7, 'days').unix();
  let formatedSparkline = numbers.map((item, index) => {
    return {
      //increment each x value by one hour
      x: days + (index + 1) * 3600,
      y: item,
    }
  })
  return formatedSparkline;
}


const formatMarketData = (data) => {
  let formattedData = [];
  data.forEach(item => {
    const formatedSparkline = formatSparkline(item.sparkline_in_7d.price)
    const formattedItem = {
      ...item,
      sparkline_in_7d:{
        price: formatedSparkline
      }
    }
  formattedData.push(formattedItem);

  });
  return formattedData;
}

//Code stops and waits for response before going further (async, await)
export const getMarketData = async () => {
  try {
    //Api call
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d');
    const data = resp.data;
    const formattedResponse = formatMarketData(data);
    return formattedResponse;

  }
  catch (error){
    console.log(error.message);
  }
}