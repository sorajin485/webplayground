const axios = require('axios');


//DB get table
const get_company_code = async () =>{
  const url = 'http://localhost:9242/company_code'
  return await axios.get(url)
}

const run = async () => {
  const company_code_result = await get_company_code()
  
  var company_code = company_code_result.data
  //각 부서 초기화
  var location = []
  var department = []
  var team = []
  
  company_code.map(d => {
    if(d.code_id == "location")
    {
      location.push(d)
    }
    else if(d.code_id == "department")
    {
      department.push(d)
    }
    else if(d.code_id == "team")
    {
      team.push(d)
    }
    
  })
  console.log("location : ",location);
  console.log("department : ",department);
  console.log("team : ",team);

  var state_location = "A01"
  drop_department = []
  department.map(d => {
    if(d.code_option == state_location){
      drop_department.push(d)
    }
  })  
  console.log("drop_department : ", drop_department);

  var state_department = "A0101"
  drop_team = []
  team.map(d => {
    if(d.code_option == state_department)
    {
      drop_team.push(d)
    }
  })
  console.log("drop_team : ", drop_team)
}


run()