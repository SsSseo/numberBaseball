// 각 자리수의 숫자가 다른 3자리 난수 만들기
function getRandomNum() {
    let number = ""
    while(number.length < 3) {
        const ranNum = Math.floor(Math.random() * 10);
        if (!number.includes(ranNum)) {
            number = number + ranNum
        }
    }
    return number;
}

function baseball() {
    let count = 0
    const answer = getRandomNum(); //랜덤수
    alert("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")
    console.log(answer)
    let isCorrect = true;
    while (isCorrect) {
        let countB = 0
        let countS = 0
        const line = prompt("3자리 정수를 입력해주세요", "3자리 정수 입력");
        
        if(line.length !== 3 || isNaN(line)) { //&& -> 양쪽 모두 true  || -> or 둘 중 하나만 true
            alert("3자리 정수를 입력해야합니다.")
            continue;
        }  

        count++
        alert(`${count}번째 시도 : ${line}`)

        for(let i = 0; i < line.length; i++) { // 123  156
            if (line[i] === answer[i]) {
                countS++;
                continue;
            }

            if (answer.includes(line[i])) {
                countB++;
            }
        }

        if (countS === 3) {
            alert(`축하합니다!! 정답은 ${answer}이고, ${count}번 만에 맞추셨어요!`);
            isCorrect = false
            return;
        } 

        alert(`스크라이크: ${countS}번, 볼: ${countB}번`)

    }
    
}
