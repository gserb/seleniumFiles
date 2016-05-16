var fs = require('fs');
var path = require('path');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    
    stream.write(new Buffer(data, 'base64'));
    stream.end();
};

var LionAccountHomepage = function() {
    var firstNameInput = element(by.id('legalFirstName'));
    var lastNameInput = element(by.id('legalLastName'));
    var emailinput = element(by.id('preferredEmailAddress'));
    var submitBtn = element(by.id('btn_submit'));
    
    this.submitBtn = submitBtn;
    
    this.get = function() {
        
     };
    this.setFirstName =  function(name) {
        firstNameInput.sendKeys(name);
    };
    this.setLastName = function(name) {
        lastNameInput.sendKeys(name)
    };
    this.setEmail = function(email) {
        emailinput.sendKeys(email);
    };
     
};
var LionAccountPersonalDetails = function() {
    var titleDdl = element(by.id('legalTitle'));
    var confirmEmailInput = element(by.id('confirmEmail'));
    var postalCodeInput = element(by.id('postalCode'));
    var cityDdl = element(by.id('location'));
    var streetDdl = element(by.id('street'));
    var numberInput = element(by.id('houseNumber'));
    var mobileInput = element(by.id('mobilePhone'));
    var phonePrefixDdl = element(by.id('phonePrefix'));
    var dateOfBirthInput = element(by.id('birthdate_desktop'));
    var placeOfBirthInput = element(by.id('birthplace'));
    var nationalRegisterNumberInput = element(by.id('nationalNumber'));
    var civilStatusDdl = element(by.id('maritalStatus'));
    var occupationCategoryDdl = element(by.id('occupationCategory'));
    var occupationDdl = element(by.id('occupation'));
    var taxResidencyChk = element(by.id('taxForeignCountryNo'));
    var submitBtn = element(by.id('btn_valid'));
    this.submitBtn = submitBtn;
    
    this.setTitle           = function(name) {     titleDdl.$('[value="'+ name + '"]').click();     };
    this.setConfirmEmail    = function(name) {     confirmEmailInput.sendKeys(name);    };
    this.setPostalCode      = function(name) {     postalCodeInput.sendKeys(name);    };
    this.setCity            = function(name) {     
                                                   cityDdl.click();
                                                   browser.waitForAngular();
                                                   cityDdl.$('[value="'+ name + '"]').click();    
                                              };
    this.setStreet          = function(name) {     streetDdl.$('[value="'+ name + '"]').click();    };
    this.setNumber          = function(name) {     numberInput.sendKeys(name);    };
    this.setMobile          = function(name) {     mobileInput.sendKeys(name);    };
    this.setphonePrefix     = function(name) {     phonePrefixDdl.$('[value="'+ name + '"]').click();    };
    this.setDateOfBirth     = function(name) {     dateOfBirthInput.sendKeys(name);    };
    this.setPlaceOfBirth    = function(name) {     placeOfBirthInput.sendKeys(name);    };
    this.setNationalRegisterNumber = function(name) {    nationalRegisterNumberInput.sendKeys(name);    };
    this.setCivilStatus     = function(name) {     civilStatusDdl.$('[value="'+ name + '"]').click();    };
    this.setOccupationCategory = function(name) {  occupationCategoryDdl.$('[value="'+ name + '"]').click();    };
    this.setOccupation      = function(name) {     occupationDdl.$('[value="'+ name + '"]').click();    };
    this.setTaxResidency    = function()     {     taxResidencyChk.click();    };  
};

var LionAccountOptions = function() {
    var branchSearchInput = element(by.id('branchSearch'));
    var searchBtn = element(by.id('btn_searchBranch'));
    var firstBranchElement =  element.all(by.repeater('branch in ctrl.branches')).first();
    
    this.searchBtn = searchBtn;
    this.firstBranchElement = firstBranchElement;
    this.setBranchSearch     = function(name) {     branchSearchInput.sendKeys(name);    };
 };

describe('LionAccount homepage', function() {
  it('should complete the initial form', function() {
    var lionHomepage = new LionAccountHomepage();
    lionHomepage.get();
    
    
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'LionAccount-Homepage.png');
    });
    
    lionHomepage.submitBtn.click();
    browser.waitForAngular(); // wait to finish the navigation to next page
    
   
    
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'LionAccount-Homepage.png');
    });

browser.pause();

    lionPersonalDetails.submitBtn.click();
    browser.waitForAngular(); // wait to finish the navigation to next page
      
    var lionAccountOptions = new LionAccountOptions();
    
    lionAccountOptions.setBranchSearch(1000);
    lionAccountOptions.searchBtn.click();
    browser.waitForAngular();
    lionAccountOptions.firstBranchElement.click();
   
  });
});
