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
  console.log('-테스트 루틴 시작');
  status++;

  await rtm.sendMessage('hi', test_channel);
});

const greeting_test = require('./test/greeting_T');
const square_test = require('./test/square_T');
const schedule_test = require('./test/schedule_T');
const dept_test = require('./test/dept_T');

let hello = 0;
let bonj = 0;
let nihao = 0;
let greeting_E = false;
let greetingState = 1;
let squareState = 0;
let scheduleState = 0;
let deptState = 0;

rtm.on('message', (message) => {
  const { text } = message;
  console.log('받은 메시지 : ', text);

  if (greetingState < 11) {
    console.log(`${greetingState} - 받은 메시지 : `, text);
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
    greetingState++;
    // 10번째 대답까지 받음
    if (greetingState === 11) {
      greeting_test(greeting_E, hello, bonj, nihao);
      // 인사 테스트 종료
      greetingState++;

      rtm.sendMessage('4', test_channel);
      console.log('-제곱 테스트 시작');
      squareState = 1;
    }
  } else if (squareState === 1) { // 제곱 테스트
    square_test(text);
    squareState = 0; // 제곱 테스트 종료

    rtm.sendMessage('학사일정', test_channel);
    console.log('-학사안내 테스트 시작');
    scheduleState++;
  } else if (scheduleState === 1) {
    rtm.sendMessage('8/4', test_channel);
    scheduleState++;
  } else if (scheduleState === 2) {
    schedule_test(text, status);

    rtm.sendMessage('학사일정', test_channel);
    scheduleState++;
  } else if (scheduleState === 3) {
    rtm.sendMessage('10/15', test_channel);
    scheduleState++;
  } else if (scheduleState === 4) {
    schedule_test(text, status);
    scheduleState++; // 학사일정 텍스트 종료

    rtm.sendMessage('학과사무실안내', test_channel);
    deptState++;
  } else if (deptState === 1) {
    rtm.sendMessage('Mechanical Engineering', test_channel);
    deptState++;
  } else if (deptState === 2) {
    dept_test(text, status);

    rtm.sendMessage('학과사무실안내', test_channel);
    deptState++;
  } else if (deptState === 3) {
    rtm.sendMessage('mechanicalengineering', test_channel);
    deptState++;
  } else if (deptState === 4) {
    dept_test(text, status);
    deptState++; // 학과사무실 테스트 종료
    // 마지막, 통합 테스트 완료
    console.log('테스트 봇 종료');
    process.exit(1);
  }
});
