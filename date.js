let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초
let milliseconds = today.getMilliseconds(); // 밀리초
let time = today.getTime();
let today_seconds =Math.floor(Date.now()/ 1000);
//let testday = new Date(today_seconds * 1000);
let testday = new Date(1639064839 * 1000 + 3600*9);

console.log("today new Date() : \t\t\t",today);
console.log("year .getFullYear() : \t\t\t",year);
console.log("month .getMonth() : \t\t\t",month);
console.log("date .getDate() : \t\t\t",date);
console.log("day .getDay() : \t\t\t",day);
console.log("hours .getHours() : \t\t\t",hours);
console.log("minutes .getMinutes() : \t\t",minutes);
console.log("seconds .getSeconds() : \t\t",seconds);
console.log("milliseconds .getMilliseconds() : \t",milliseconds);

let today_kr = today.getTime() + 3600000 * 9;
console.log("-------------------------------------------------------------------");
//console.log("time : ",today.getTime() + 3600 );
console.log("time : ",today_kr);
console.log("time : ",new Date(today_kr));

let day_ = new Date(new Date().getTime()+3600000*9);
let day_getTime = day_.getTime();
let day_today= day_.getFullYear()+"-"+(day_.getMonth()+1)+"-"+day_.getDate();

const getDate = (day) =>{
  return day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()
}

const DateLabel = (ReferenceDate, len) =>{
  var dateTable = []  
  for(i=0; i<len; i++){
    dateTable.push(getDate(new Date(ReferenceDate - 3600000*24*i)))
  }
  console.log("dateTable : ",dateTable);
}
DateLabel(new Date(1639158380000),30);

//console.log("Day : ",day_.getFullYear(),"-",day_.getMonth(),"-",day_.getDay())
console.log("Day : ",day_.getFullYear(),'')
console.log("today-0 : ",day_today)
console.log("today-1 : ",new Date(day_getTime-3600000*24))
console.log("today-2 : ",getDate(new Date()))
console.log("today-3 : ")
console.log("today-4 : ")
console.log("today-5 : ")
console.log("test1 : ",new Date(1639075176000))
console.log("test2 : ",new Date(1639158380000))
console.log("test2 : ",new Date("2021-12-24").getTime())
// console.log("time .getTime() : \t\t\t",time + 3600*9);
// console.log("time .getTime() : \t\t\t",new Date(time + 3600*9).getHours());
// console.log("today .now() : \t\t\t\t",Math.floor(Date.now()/ 1000));
// console.log("testday : \t\t\t\t",testday);



// let time
// function getTimeNow(){
//   time = today.getTime();
// }
// console.log("1st : ",getTimeNow())

// setTimeout(()=> console.log("2nd : ",getTimeNow()),3000)

// let time=today.getTime();
// let timeToDay=new Date(time)
// console.log('time : ', time)
// console.log('timeToDay : ', timeToDay)

// let strTime = time / 1000 

// console.log('strTime : ',Math.floor(time/1000))

// console.log('시간 : ',new Date(111170000))
// var test = Math.floor(new Date().getTime() / 1000)
// console.log('test : ',test)

//console.log('time : ', time)

// console.log("today : ",today);
// let cTime = year + '/' + month + '/' + date +" "+ hours + ':' + minutes + ':' + seconds;
// console.log(cTime);
// console.log(hours + ':' + minutes + ':' + seconds + ':' + milliseconds);

