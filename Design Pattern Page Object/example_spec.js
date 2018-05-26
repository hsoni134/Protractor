/*
@Author: Harsh Soni
*/

describe('Verifying end to end test with 3 different web pages using Page Objects',function(){
		
	beforeEach(function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
	});

	
	
	it('It should perform end to end test',function(){
		//importing profile page 
		var profile_page =  require('./profile_page_object.js');
		
		//Now using profile page objects to use page elements
		profile_page.enterName('Harsh Soni');
		profile_page.enter_email('abcdefghi@yahoo.com');

		//Now next page is interest_page and its object will be returned by clickOnNextSection method
		var interest_page = profile_page.clickOnNextSection();
		interest_page.clickOnXbox();
		
		//Now next page is interest_page and its object will be returned by clickOnNextSection method
		var payment_page = interest_page.clickOnNextSection();
		
		var allValues=payment_page.getEnteredValues();

		expect(allValues).toContain('{\"name\":\"Harsh Soni\",\"email\":\"abcdefghi@yahoo.com\",\"type\":\"xbox\"}');

		
	});

});