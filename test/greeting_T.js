function greeting_test(greeting_E, hello, bonj, nihao) {
  if (greeting_E) {
    console.log('---인사 테스트 실패 - 비정상 출력 있음');
  } else if (hello > 0 && bonj > 0 && nihao > 0) {
    console.log('---인사 테스트 성공');
  } else {
    console.log('---인사 테스트 실패 - 랜덤한 인삿말이 나오지 않음');
  } // 인사 테스트 종료
}

module.exports = greeting_test;
