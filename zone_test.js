const axios = require('axios');

const getUsers = async () =>{
  const url = 'http://localhost:9242/users'
  return await axios.get(url)
}

const getzoneCode = async () => {
  const url = 'http://localhost:9242/commoncode'
  return await axios.get(url)
}

const run = async () => {
  const zone_result = await getzoneCode()
  const user_result = await getUsers()
  var zone = zone_result.data
  var user = user_result.data

  var zone_1 = []
  var zone_2 = []
  var zone_3 = []
  var zone_4 = []
  
  zone.map(d => {
    if(d.code_id == "user_zone1")
    {
      zone_1.push(d)
    }
    else if(d.code_id == "user_zone2")
    {
      zone_2.push(d)
    }
    else if(d.code_id == "user_zone3")
    {
      zone_3.push(d)
    }
    else if(d.code_id == "user_zone4")
    {
      zone_4.push(d)
    }
  })
  console.log("zone_1 : ",zone_1);
  console.log("zone_2 : ",zone_2);
  console.log("zone_3 : ",zone_3);
  console.log("zone_4 : ",zone_4);
  var userdata = user.map(d =>  {
    zone_1.map(x => {
      if(d.user_zone1 == x.code_value)
      d.user_zone1 = x.code_name
    })
    zone_2.map(x => {
      if(d.user_zone2 == x.code_value)
      d.user_zone2 = x.code_name
    })
    zone_3.map(x => {
      if(d.user_zone3 == x.code_value)
      d.user_zone3 =  x.code_name
    })
    zone_4.map(x => {
      if(d.user_zone4 == x.code_value)
      d.user_zone4 = x.code_name
    })
    return d
  })
  console.log("userdata : ",userdata)
  // console.log("zone : ",zone)
  // console.log("user : ",user)
  // console.log()
  // console.log()
}

run()