/* This demo includes below Locators
		1:	binding
 		2:	model
 		3:	buttonText
 		4:	partialButtonText
 		5:	repeater
 		6:	options
 		7:	deepCss
	Below locators from webdriverJS
		8:	className
		9:	css
		10:	id
		11:	linkText
 		12:	js
 		13:	name
 		14:	partialLinkText
		15:	tagName
		16:	xpath
		17: $
		18: $$
*/
describe('Using different locators on the web page',function(){
	beforeEach(function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	});
	/*
	-------------------------tagName Locator Demo ------------------------------------
	*/
	it('H3 Tag Element should be Identified using using tagName locator and it should contain correct text',function(){
	
	//Priting the value of element by resolving javascript promise
		element(by.tagName('H3')).getText().then(function(value_text)
		{
			console.log('(Using tagName Locator) Value inside H3 Tag is : ' + value_text );
		});
		expect(element(by.tagName('H3')).getText()).toContain('Angular');
	});
	/*
	-------------------------xpath Locator Demo ------------------------------------
	Note: In order to identify the xpath value of an element you can use xpath extension 
	*/
	it('Element should be identified using xpath locator',function(){
		//Priting the value of element by resolving javascript promise
		element(by.xpath("//h2[@class='ng-binding']")).getText().then(function(value_text)
		{
			console.log('(Using xPath Locator) Value inside the element is : ' + value_text );
		});
		expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).toContain('0');
	});
	/*
	-------------------------id Locator Demo ------------------------------------
	*/
	it('Element should be identified using id locator and it should contain correct value',function(){
		//Printing the value of element by resolving Javascript promise
		element(by.id('gobutton')).getText().then(function(value_text)
		{
			console.log('(Using id Locator) Value inside the element is : ' + value_text);
		});	
		expect(element(by.id('gobutton')).getText()).toBe('Go!');
	});
	/*
	-------------------------css Locator Demo ------------------------------------
	Note: In order to identify the xpath value of an element you can use css extension 
	*/
	it('Element must be identified using the css Locator ',function(){
		//Printing the value of element by resolving Javascript promise
		element(by.css('body:nth-child(2) div.container.ng-scope:nth-child(3) > h4:nth-child(2)')).getText().then(function(value_text)
		{
			console.log('(Using css Locator) Value inside the element is : '+ value_text);
		});
		expect(element(by.css('body:nth-child(2) div.container.ng-scope:nth-child(3) > h4:nth-child(2)')).getText()).toBe('History');
	});
});