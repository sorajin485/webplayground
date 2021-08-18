process.env.NODE_TLS_REJECT_UNAUTHORIZED ="0"
const axios = require('axios');

var server_uri = "https://192.168.0.100:749/redfish/v1/Systems/1"
var uname = 'Administrator';
var pass = 'hpinvent';
const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

const run = () =>{
  axios.get(server_uri,
    { headers : { 'Authorization': `Basic ${token}` }})
  .then((response) => {
    //console.log("response : ",response)
    console.log("response.data.Power : ",response.data.Power)
  })
  .catch(e => {
    console.log("error : ",e)
  })
}

run()