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
let cTime = year + '/' + month + '/' + date +" "+ hours + ':' + minutes + ':' + seconds;
console.log(cTime);
console.log(hours + ':' + minutes + ':' + seconds + ':' + milliseconds);

