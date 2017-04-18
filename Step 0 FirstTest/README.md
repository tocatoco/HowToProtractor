# Step 0 FirstTest
테스트 파일 작성 후 첫 실행까지  
아래 파일들이 있어야 Protractor를 실행할 수 있다.

## 대상 파일
### conf.js
테스트 환경 설정 파일  
테스트 프레임워크나 셀레니움 서버 URL등을 변경할수 있다.

    // conf.js
    exports.config = {
      framework: 'jasmine',
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['spec.js']
    }


### spec.js
테스트 케이스를 작성하는 파일  

    // spec.js
    describe('ngularJS API Page', function() {
      it('title 확인', function() {
    	browser.get('https://docs.angularjs.org/api');
    	expect(browser.getTitle()).toEqual('AngularJS: API: API Reference');
    //  browser.get('http://www.ticketmonster.co.kr/promotion/tmonpay');
    //  expect(browser.getTitle()).toEqual('티몬페이 프로모션 - 티몬 :: 쇼핑을 뚝딱! 티몬!');
      });
    })
    
## 테스트 실행
해당 파일들이 위치한 곳에서 실행  
`protractor conf.js`  
아래와 같은 결과를 볼 수 있다.  
`1 tests, 1 assertion, 0 failures'