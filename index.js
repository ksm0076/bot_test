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
  console.log('테스트 루틴 시작');
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
    if (status === 11) {
      if (greeting_E) {
        console.log('비정상 작동');
      } else if (hello > 0 && bonj > 0 && nihao > 0) {
        console.log('인사 테스트 성공');
      } else {
        console.log('인사 테스트 실패');
      }
    }
  }
  if (status === 1) {
    // greeting_test(text);
    // rtm.sendMessage('4', test_channel);
    // status++;
    // console.log('제곱 테스트 시작');
  } else if (status === 11) {
    square_test(text);
    // status 마지막 숫자 -> 통합 테스트 완료
    console.log('서버 종료');
    process.exit(1);
  }
});
