require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let status = 0;

let token;

try {
  token = fs.readFileSync('./token').toString('utf-8');
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
  console.log('-테스트 루틴 시작');
  status++;

  await rtm.sendMessage('hi', test_channel);
});

const greeting_test = require('./test/greeting_T');
const square_test = require('./test/square_T');

let hello = 0;
let bonj = 0;
let nihao = 0;
let greeting_E = false;

rtm.on('message', (message) => {
  const { text } = message;
  console.log(`${status} - 받은 메시지 : `, text);

  if (status < 11) {
    switch (text) {
      case 'Hello!':
        hello++;
        break;
      case 'Bonjur!':
        bonj++;
        break;
      case 'Nihao!':
        nihao++;
        break;
      default:
        greeting_E = true;
        console.log('비정상 입력');
    }
    status++;
    // 10번째 대답까지 받음
    if (status === 11) {
      greeting_test(greeting_E, hello, bonj, nihao);

      rtm.sendMessage('4', test_channel);
      console.log('-제곱 테스트 시작');
    }
  } else if (status++ === 11) { // 제곱 테스트
    square_test(text);

    rtm.sendMessage('학사일정', test_channel);
    console.log('-학사안내 테스트 시작');
  } else if (status++ === 12) {
    rtm.sendMessage('8/4', test_channel);
  } else if (status === 13) {
    // status 마지막 숫자 -> 통합 테스트 완료
    console.log('테스트 봇 종료');
    process.exit(1);
  }
});
