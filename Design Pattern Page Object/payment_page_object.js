var payment_page = function(){

    this.getEnteredValues = function(){
        var text_input = element(by.className('ng-binding')).getText();
        return text_input;
    };
};

module.exports = new payment_page();