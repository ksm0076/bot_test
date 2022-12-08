const scheduleInfo = require("./haksa");

function schedule_test(text, status){
    switch(status){
        case 13:
            if(text === `8/4는 ${scheduleInfo['8/4']}입니다.`){
                console.log("--8/4 학사안내 테스트 통과");
            }else{
                console.log("--8/4 학사안내 테스트 실패");
            }
            break;
        default:
            console.log("---학사안내 테스트 오류");
    }
}

module.exports = schedule_test;