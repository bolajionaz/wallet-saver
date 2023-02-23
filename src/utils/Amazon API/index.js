import axios from "axios";

const amazonURL = 'https://real-time-amazon-data.p.rapidapi.com/search'
const rapidAPIKEY = `${process.env.REACT_APP_API_KEY}`; //"&api_key=SFEQg68V0VQioMoZ8JyMRKq6Sg9nsPtt&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {

    const amazonOptions = {
      method: 'GET',
      url: amazonURL,
      params: {query: query, country: 'US', category_id: 'aps', page: '1'},
      headers: {
        'X-RapidAPI-Key': rapidAPIKEY,
        'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    return axios.request(amazonOptions)
  }
};
