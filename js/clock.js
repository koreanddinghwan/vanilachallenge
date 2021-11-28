const clock = document.querySelector("h2.clock") //html에 태그 생성하고, 객체로 불러오기


function GetClock() {
    const date = new Date() //date 변수에 Date() 객체를 저장한다.
    const hour = date.getHours().toString().padStart(2,"0") //시간, 분, 초 별로 date의 메서드로 시각을 불러오고, 문자열로 변환해 padStart로 2자리수로 고정한다.
    const minute = date.getMinutes().toString().padStart(2,"0")
    const second = date.getSeconds().toString().padStart(2,"0")

    // if (hour.toString().length==1) hour = "0" + hour;

	// if (minute.toString().length==1) minute = "0" + minute;

	// if (second.toString().length==1) second = "0" + second;



    clock.innerText = `${hour}:${minute}:${second}` //html파일에 표현
}


GetClock() //맨 처음에 바로 실행한다.
setInterval(GetClock, 1000)





