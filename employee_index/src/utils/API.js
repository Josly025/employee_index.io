import axios from "axios";

export default {
  searchTerms: function (query) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
