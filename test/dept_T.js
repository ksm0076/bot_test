const deptInfo = require('./deptInfo');

function dept_test(text, status) {
  switch (status) {
    case 13:
      if (text === `${scheduleInfo['8/4']}`) {
        console.log('--8/4 학사안내 테스트 통과');
      } else {
        console.log('--8/4 학사안내 테스트 실패');
      }
      break;
    case 14:
      if (text === `${scheduleInfo['11/4']}`) {
        console.log('--11/4 학사안내 테스트 통과');
      } else {
        console.log('--11/4 학사안내 테스트 실패');
      }
      break;
    default:
      console.log('---학사안내 테스트 오류');
  }
}

module.exports = dept_test;
