import axios from "axios";

const heroku = 'https://radiant-stream-91922.herokuapp.com/'

// const heroku = 'https://backend-boardwalk.herokuapp.com/'

export default {

  // ======== USER AUTHENTICATION ======== 
//   signup: function (email, password) {
//     return axios.post(heroku + "/api/users", { email: email, password: password});
// },
// login: function (email, password) {
//     return axios.post(heroku + "/auth/login", { email: email, password: password});
// }
// };

signup: function (body) {
  return axios({
    method: 'post',
    headers: { 'content-type': 'application/json' },
    url: heroku + "/api/users", 
    data:body
  });
},
login: function (body) {
  return axios({
    method: 'post',
    headers:{ 'content-type': 'application/json' },
    url: heroku + "/auth/login",
    data: body
  });
}
};