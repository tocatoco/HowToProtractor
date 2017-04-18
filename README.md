# HowToProtractor
AngularJS Protractor 시작하기  

## AngularJS Protractor
AngularJS Angular로 작성한 페이지만 테스트 가능  
Protractor는 Angular와 AngularJS와 응용 프로그램을위한 end-to-end test framework  
사용자 입장에서 실제 입력/출력/클릭등의 동작을 실제 브라우저에서 테스트를 자동화  
Selenium local server 활용, Jasmine framework의 문법사용

## 목표
아래 사이트 참고하면서 작성해보고 익숙해지면 응용해 보려한다  
http://www.protractortest.org/#/  

## Protractor 필요 프로그램
아래 프로그램들이 설치되어 있어야 합니다
[Nodejs](https://nodejs.org/en/)  
[JAVA SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)  

## Protractor 설치 및 테스트 준비
protractor 설치  
`npm install -g protractor`  
webdriver-manager 설치  
`webdriver-manager update`  
webdriver-manager 서버시작  
`webdriver-manager start`  
webdriver-manager 서버상태확인  
[Sever status](http://localhost:4444/wd/hub)  
