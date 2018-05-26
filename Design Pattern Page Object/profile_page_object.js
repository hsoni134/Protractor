var profile_page =  function(){

    // Entering name on profile page, value of name text will be supplied from where the function is called
    this.enterName = function(text_value)
    {
         element(by.model('formData.name')).sendKeys(text_value);
    };

    // Entering email address on profile page, value of email text will be supplied from where the function is called
    this.enter_email = function(value){	element(by.model('formData.email')).sendKeys(value);};
    
    // Clicking on the button
    this.clickOnNextSection = function()
    {
         element(by.className('btn btn-block btn-info')).click();
         return require('./interest_page_object.js');
    };

};

// to use this page objects in some other javascript file then we need to export it
module.exports = new profile_page();