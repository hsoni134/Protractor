/*
	@Author: Harsh Soni
*/
describe('Testing Login Application', function() {
  it('Should able to login by username, password ' , function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    element(by.id('username')).sendKeys('angular');
	element(by.id('password')).sendKeys('password');
	element(by.id('formly_1_input_username_0')).sendKeys('HarshSoni');
	element(by.className('btn btn-danger')).click();
	
	expect(element(by.tagName('p')).getText()).toBe('You\'re logged in!!');
	});
  
});
