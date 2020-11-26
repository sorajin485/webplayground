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

console.log("today : ",today);

console.log(year + '/' + month + '/' + date);

console.log(day);

console.log(hours + ':' + minutes + ':' + seconds + ':' + milliseconds);

console.log("time : ",time);