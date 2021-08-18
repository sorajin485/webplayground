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

  var state_location = "A0101"
  var drop_department = []
  department.map(d => {
    var department_splitdata = JSON.stringify(d.code_option).replace(/\"/gi,"").split(":")
    console.log("department_splitdata : ",department_splitdata)
    department_splitdata.map(x => {
      if(x == state_location)
      {
        console.log("x : ",x)
        console.log("d : ",d)
      }
    })
  })

  var state_department = "A0201"
  team.map(d => {
    var team_splitdata = JSON.stringify(d.code_option).replace(/\"/gi,"").split(":")
    console.log("team_splitdata : ",team_splitdata)
    team_splitdata.map(x =>{
      if(x == state_department)
      {
        console.log("x : ",x)
        console.log("d : ",d)
      }
    })
  })

}

run()