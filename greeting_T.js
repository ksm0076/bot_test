// eslint-disable-next-line camelcase
function greeting_test(text) {
  if (text == 'Hello!') {
    console.log('인사 테스트 통과');
  } else {
    console.log('인사 테스트 실패');
  }
  rtm.sendMessage('4', test_channel);
}

module.exports = greeting_test;
