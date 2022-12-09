const deptInfo = require('./deptInfo');

function dept_test(text, status) {
  switch (status) {
    case 2:
      if (text === `${deptInfo['Mechanical Engineering']}`) {
        console.log('---Mechanical Engineering 과사무실 테스트 통과');
      } else {
        console.log('★★★★★★ Mechanical Engineering 과사무실 테스트 실패');
      }
      break;
    case 4:
      if (text === `${deptInfo['Mechanical Engineering']}`) {
        console.log('---Mechanical Engineering 과사무실 테스트 통과');
      } else {
        console.log('★★★★★★ Mechanical Engineering 과사무실 테스트 실패');
      }
      break;
    default:
      console.log('★★★★★★ 학과사무실안내 테스트 상태값 오류');
  }
}

module.exports = dept_test;
