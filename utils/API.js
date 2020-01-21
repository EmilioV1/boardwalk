import axios from "axios";

const heroku = 'https://backend-boardwalk.herokuapp.com';

export default {

  // ======== USER AUTHENTICATION ======== 
  signup: function (body) {
    return axios({
      method: 'post',
      url: heroku + "/api/users",
      data: body // grabing the object body from api
    });
  },
  login: function (body) {
    return axios({
      method: 'post',
      url: heroku + "/auth/login",
      data: body
    });
  },
  saveDebt: function(body){
    return axios({
      method: 'post',
      url: heroku + "/api/debts",
      data:body
    });
  },
  getDebt: function(body){
    return axios({
      method: 'get',
      url: heroku + "/api/debt/" + id,
      data: body
    })
  }
};