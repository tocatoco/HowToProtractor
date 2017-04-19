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