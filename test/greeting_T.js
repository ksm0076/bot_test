const reply = ['Hello!', 'Bonjur!', 'Nihao!']; // 이 중에 하나로 대답

// eslint-disable-next-line camelcase
function greeting_test(text) {
  if (reply.includes(text) === true) {
    console.log('인사 테스트 통과');
  } else {
    console.log('인사 테스트 실패');
  }
}

module.exports = greeting_test;
