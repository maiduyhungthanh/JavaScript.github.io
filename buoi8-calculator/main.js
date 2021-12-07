// Khai báo biến
let time = document.querySelector('.time')
let score = document.querySelector('.score')
let numberOne = document.getElementById('primary-number')
let numberTwo = document.getElementById('secondary-number')
let operator = document.getElementById('operator')
let result = document.getElementById('result')
let count = 0;
let warning = document.createElement("p")


// Ramdom calculator
let operatorList = ['+','-','*']
numberOne.innerHTML = Math.floor(Math.random() * 10)+1
numberTwo.innerHTML = Math.floor(Math.random() * 10)+1
operator.innerHTML = operatorList[Math.floor(Math.random() * operatorList.length)]

// Tính điểm & Phép tính
warning.innerHTML = "kết quả sai"
result.insertAdjacentElement("afterend", warning)
warning.style.display = 'none'
result.addEventListener('keydown' ,function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        calculating()
       }
})
function calculating(){
  let total = eval(`${numberOne.innerHTML} ${operator.innerHTML} ${numberTwo.innerHTML}`)
   if(result.value == total){
      count++
      numberOne.innerHTML = Math.floor(Math.random() * 10)+1
      numberTwo.innerHTML = Math.floor(Math.random() * 10)+1
      operator.innerHTML = operatorList[Math.floor(Math.random() * operatorList.length)]
      score.innerHTML = count
      result.value = ""
      warning.style.display = 'none'
    }else if(result.value == ""){
      alert("Kết Quả Không Được Để Trống")
      warning.style.display = 'none'
    }else {
      result.value = ""
      warning.style.display = ''
    }
}

// Đếm ngược
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < -2) {
          timer = duration;
      }else if(timer == -2){
      alert("Điểm của bạn là : " + count  );
      count = 0
      score.innerHTML=0
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 30,
      
     time = document.querySelector('.time');
  startTimer(fiveMinutes, time);
};


