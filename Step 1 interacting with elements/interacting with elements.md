# Step 1 interacting with elements

elements를 찾고 상호 작용하기

## 대상 파일
### conf.js
이전 테스트와 동일

### spec.js
테스트 케이스 작성
1. by.model 입력칸을 찾아 첫번째 입력칸에 10, 두번째 입력칸에 13 입력
2. by.id로 계산버튼 찾아 클릭
3. binding된 latest 변수에서 결과값 확인

        // spec.js
        describe('Protractor Demo App', function() {
          it('should add one and two', function() {
            browser.get('http://juliemr.github.io/protractor-demo/');
            element(by.model('first')).sendKeys(10);
            element(by.model('second')).sendKeys(13);
        
            element(by.id('gobutton')).click();
        
            expect(element(by.binding('latest')).getText()).
                toEqual('23');
          });
        });

### 참고 URL
element 찾는 방법 관련  
http://www.protractortest.org/#/locators
