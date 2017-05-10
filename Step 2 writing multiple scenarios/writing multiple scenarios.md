# Step 2 writing multiple scenarios

테스트 시작전 동일하게 수행할 작업은 beforeEach를 이용

테스트 케이스를 여러개 작성해 실행

## 대상 파일
### conf.js
이전 테스트와 동일

### spec.js
모든 테스트 시작전에 beforeEach()가 동작한다.

beforeEach()에는 계산기페이지로 이동하도록 코딩한다.



#### 테스트목록

1. 타이틀 확인
2. 1+2 계산결과가 3인지 확인
3. 4+6의 계산결과가 10인지 확인

```
// spec.js
// 컨트롤 및 바인딩 설정
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  // 모든 테스트 시작전 동작
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();
    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
	
	goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });
  
});
```