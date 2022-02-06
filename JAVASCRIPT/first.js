import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key': 'b0789a4f9emsh7817228d63f64d3p125465jsnf503a94eaee9'
    }
  };
  
  axios.request(options).then( (response) => {
      console.log(response.data);
  }).catch( (error) => {
      console.error(error);
  });