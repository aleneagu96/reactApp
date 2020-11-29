import axios from "axios";

export function getContacts(query = "") {
    // Use axios.get to trigger a get request
    let url = "http://localhost:3001/results?q=" + query;
    return axios.get(url).then(function (response) {
        return response.data
      }).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
    // parse response to get the data and return it
    // handle errors
}