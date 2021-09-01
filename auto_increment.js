const axios = require('axios');


//DB get table
const get_company_code = async () =>{
  const url = 'http://localhost:9242/company_code'
  return await axios.get(url)
}

const run2 = async () =>{
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

  //array = ["A01","A02","A09","A08","A05","A06","A07","A10","A11","A13","A12"]
  array = ["A01","A02","A03","A04","A08","A05","A06"]
  console.log("array : ",array)
  console.log("array sort : ",array.sort())
  arsort = array.sort()
  tmp = arsort[0]
  str = tmp.substring(0,1)
  console.log("str : ",str)
  str2 = parseInt(tmp.substring(1))
  console.log("str2 : ",str2)
  //console.log("tmp : ",tmp)

  ary=array.sort().map(d=>{
    return parseInt(d.substring(1))
  })
  console.log(ary)
  
  tmp = 0
  var intval = 0
  var strval = "A"
  for(var i=0; i<ary.length;i++){
    if(i+1===ary[i]){
      console.log("true")
    }
    else{
      intval = i+1
      console.log("false")
      break
    }
  }
  if(intval===0)
  {
    intval=ary.length + 1
    console.log(intval)
  }else{
    console.log(intval+1)
  }
  if(intval < 10)
  {
    strval = strval + "0" + intval
  }
  else{
    strval = strval + intval
  }
  console.log("strval : ",strval)
  // location.map(d => {
  //   console.log("location value : ",d.code_value)
  //   console.log("location value bool : ",d.code_value>tmp)
  // })
  
}
run2()