const scheduleInfo = require('./scheduleInfo');

function schedule_test(text, status) {
  switch (status) {
    case 2:
      if (text === `${scheduleInfo['8/4']}`) {
        console.log('---8/4 학사안내 테스트 통과');
      } else {
        console.log('★★★★★★ 8/4 학사안내 테스트 실패');
      }
      break;
    case 4:
      if (text === '일정이 없거나 잘못된 입력입니다.') {
        console.log('---3/4 학사안내 테스트 통과');
      } else {
        console.log('★★★★★★ 3/4 학사안내 테스트 실패');
      }
      break;
    default:
      console.log('★★★★★★ 학사안내 테스트 상태값 오류');
  }
}

module.exports = schedule_test;
