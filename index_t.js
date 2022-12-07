require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let status = 0;

let token;

try {
  token = fs.readFileSync('./token_t').toString('utf-8');
} catch (err) {
  console.error(err);
}

token = token.trim();
const test_channel = 'C04BKTRD9V0';
// const test_ID = 'U0472FJCEDV';

const rtm = new RTMClient(token);

rtm.start();

rtm.on('ready', async () => {
//  const rdy1 = await rtm.sendMessage("테스트 시작", test_channel);
  console.log('테스트 루틴 시작');
  status++;

  await rtm.sendMessage('hi', test_channel);
});

rtm.on('message', (message) => {
  const { text } = message;

  console.log('받은 메시지 : ', text);

  if (status === 1) {
    if (text === 'Hello!') {
      console.log('인사 테스트 통과');
    } else {
      console.log('인사 테스트 실패');
    }
    rtm.sendMessage('4', test_channel);
    status++;
    console.log('제곱 테스트 시작');
  } else if (status === 2) {
    if (text === 'The result is 16') {
      console.log('제곱 테스트 통과');
    } else {
      console.log('제곱 테스트 실패');
    }
  }
});
