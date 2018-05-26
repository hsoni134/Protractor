var interest_page = function(){

    this.clickOnXbox = function()
    {
        
        //Clicking on Xbox
        element(by.name('009')).click();
    };

    this.clickOnNextSection = function()
    {
        //Clicking on next button
        element(by.className('btn btn-block btn-info')).click();
        
        //returning the next page object
        return require('./payment_page_object.js');

    };
};

module.exports = new interest_page();