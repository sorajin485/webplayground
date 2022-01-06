
let day_ = new Date(173000);
console.log("day : ",day_);
let hours = day_.getHours(); // 시
let minutes = day_.getMinutes();  // 분
let seconds = day_.getSeconds();  // 초
let time = hours -9 + ":" + minutes + ":" + seconds;
let time2 = day_.getHours()-9  + ":" + day_.getMinutes() + ":" + day_.getSeconds();
console.log("time : ",time)
console.log("time2 : ",time2)

console.log("hours : ",hours)

