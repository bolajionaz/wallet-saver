import axios from "axios";

const aliExpressURL = "https://aliexpress-datahub.p.rapidapi.com/item_search" //"https://api.giphy.com/v1/gifs/search?q=";
const rapidAPIKEY = `${process.env.REACT_APP_API_KEY}`;; //"&api_key=SFEQg68V0VQioMoZ8JyMRKq6Sg9nsPtt&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    const aliExpressOptions = {
      method: 'GET',
      url: aliExpressURL,
      params: {q: query, page: '1'},
      headers: {
        'X-RapidAPI-Key': rapidAPIKEY,
        'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
      }
    };

    return axios.request(aliExpressOptions)
  }
};
