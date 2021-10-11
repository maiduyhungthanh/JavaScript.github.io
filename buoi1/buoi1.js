console.log("bài 1: Nhập số bất kỳ 1-100"); 
console.log("Cú pháp: console.log(point(...))"); 

function point(number) {
    if (number >100 || point <1) return "nhập sai";
    else if (number>= 85 ) return "A";
    else if (number >= 70) return "B";
    else if (number >= 40) return "C";
    else if (number >=1) return "D";
};

console.log("bài 2: Nhập số bất kỳ 0-6"); 
console.log("Cú pháp: console.log(day(...))");
function day(number) {
    switch (number){
        case 0: number = "Sunday";
        break;
        case 1 : number = "Monday";
        break;
        case 2 : number = "Tuesday";
        break;
        case 3 : number = "Wednesday";
        break;
        case 4 : number = "Thursday";
        break;
        case 5 : number = "Friday";
        break;
        case 6 : number = "Saturday";
        break;
    }
    return number;
}
console.log("bài 3: Ramdom 1 số từ max->min"); 
console.log("Cú pháp: console.log(ramdom(min,max))");
function ramdom(min,max){
    return Math.floor(Math.random()*(max-min) + min); 
}
console.log("bài 4: Tổng số lẻ từ 1->100");
console.log(sumle());
function sumle(){
   let sum = 0;
   for (let i= 1; i <=100; i++) {
        if(i % 2 != 0){
          sum += i;
        }
     }
     return sum;
   }
   console.log("bài 5: Tổng số 0->100 chia hết 3 & 5");
   console.log(sumbavanam());
function sumbavanam(){
    let sum = 0;
    for(let i = 0 ; i <= 100 ;i++){
      if(i % 3 == 0 && i % 5 == 0){
        sum += i;
      }
   }
   return sum;
}
