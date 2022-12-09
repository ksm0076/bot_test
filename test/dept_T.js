const deptInfo = require('./deptInfo');

function dept_test(text, status) {
  switch (status) {
    case 17:
      if (text === `${deptInfo['Mechanical Engineering']}`) {
        console.log('--Mechanical Engineering 과사무실 테스트 통과');
      } else {
        console.log('--Mechanical Engineering 과사무실 테스트 실패');
      }
      break;
    // case 16:
    //   if (text === `${deptInfo['11/4']}`) {
    //     console.log('--11/4 학사안내 테스트 통과');
    //   } else {
    //     console.log('--11/4 학사안내 테스트 실패');
    //   }
    //   break;
    default:
      console.log('---학사안내 테스트 오류');
  }
}

module.exports = dept_test;
