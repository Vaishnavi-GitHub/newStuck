/**
 * This is the Spec File of SubEditor Roles
 */

describe("NewsFeed Page Suite", function(){
	
var loginObj=  require("./loginPage.js");
var dataFile=  require("./data.js");
var newsFeedFile=  require("./feedPage.js");
var Jasmine2HtmlReporter=  require('protractor-jasmine2-html-reporter');

describe("TC_08 SubEditor should be able to click a news feed at a time, for which a separate new tab should be opened with the new link", function(){
	
	it("Step 1- subEditor Logs in ", function(){
		 loginObj.getURL();
		 loginObj.headerTitle.getText().then(function(text) {
			  expect(text.toLowerCase()).toEqual(dataFile.titles.loginHeader);
			});
	 expect(loginObj.loginContainer.isDisplayed()).toBe(true);
	 loginObj.userNameInput.sendKeys(dataFile.dataDrive.Curator.UserName);
	 loginObj.passWordInput.sendKeys(dataFile.dataDrive.Curator.Password);
	 loginObj.loginButton.click();
});
	
	it("Step 2- subEditor selects and reads the unRead News Feed", function(){
	 newsFeedFile.headTitle.getText().then(function(text) {
		  expect(text.toLowerCase()).toEqual(dataFile.titles.loginHeader);
		});
     let countUnReadNewsbefore =newsFeedFile.getCountOfNews();
     newsFeedFile.readTheNewsFeed();
     newsFeedFile.isSelectTagOptionPresent();
     newsFeedFile.isRankingOptionPresent();
     let countUnReadNewsafter =newsFeedFile.getCountOfNews();
     expect(countUnReadNewsbefore).not.toEqual(countUnReadNewsafter);
});
		
});

	
afterEach(function() {
	console.log("Test Completed")
 });

});