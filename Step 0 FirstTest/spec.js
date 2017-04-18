// spec.js
describe('ngularJS API Page', function() {
  it('title 확인', function() {
	browser.get('https://docs.angularjs.org/api');
	expect(browser.getTitle()).toEqual('AngularJS: API: API Reference');
//  browser.get('http://www.ticketmonster.co.kr/promotion/tmonpay');
//  expect(browser.getTitle()).toEqual('티몬페이 프로모션 - 티몬 :: 쇼핑을 뚝딱! 티몬!');
  });
})