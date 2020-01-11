import axios from "axios";

const heroku = 'https://backend-boardwalk.herokuapp.com/'

export default {

  // ======== USER AUTHENTICATION ======== 
  logIn: function(body) {
    return axios({
      method: 'post',
      headers: { 'content-type': 'application/json' },
      url: heroku + '/api/auth/login',
      data: body
    });
  }, 

  // Signup
  signUp: function(body) {
    return axios({
      method: 'post',
      headers: { 'content-type': 'application/json' },
      url: heroku + '/api/auth/signup',
      data: body
    });
  }, 

  //Logout
  logOut: function() {
    return axios.get(heroku + "/api/auth/logout");
  },

  //Update Profile
  update: function(body) {
    return axios({
      method: 'put',
      headers: { 'content-type': 'application/json' },
      url: heroku + '/api/users/find/currentUser',
      data: body
    });
  }
};