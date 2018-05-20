//This demo includes below example
//  How to declare multple describe block
//  How beforeEach works
//  How to use toContains in the expect block

describe('Verifying multple web pages',function(){
	it('It should accept name, email and then same should be displayed in page',function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
		element(by.model('formData.name')).sendKeys('Harsh Soni');
		element(by.model('formData.email')).sendKeys('abcdefghi@yahoo.com');
		
		//toContain checks for the substring inside the main element
		expect(element(by.className('ng-binding')).getText()).toContain('{\"name\":\"Harsh Soni\",\"email\":\"abcdefghi@yahoo.com\"}');
	  });
describe('User is able to select the choice of console from radio button and same should be populated in bottom',function(){
	

	//below beforeEach expression will execute before every it block
	beforeEach(function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
		element(by.className('btn btn-block btn-info')).click();
	});
	it('User should able to select xbox',function(){
		//first beforeEach will be triggered then below code will execute
		element(by.name('009')).click();
		expect(element(by.className('ng-binding')).getText()).toContain('{\"type\":\"xbox\"}');
	});
	it('User should able to select play station', function(){
		//first beforeEach will be triggered then below code will execute
		element(by.name('00A')).click();
		expect(element(by.className('ng-binding')).getText()).toContain('{\"type\":\"ps\"}');
		});
	});

});