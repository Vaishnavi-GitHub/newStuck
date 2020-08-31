/**
 * This Page Object file records all the objects of News Feed Page of NewsTuck Application
 */
var dataFile = require("./data.js");
function newsFeed() {

	this.unReadNews = element.all(by.css("div [class='each-feed-container'] a"));
	this.headTitle = element(by.css("div a.logo"));
	this.readNews = element(by.css("div [class*='-container-readOnly']"));
	this.selectTags = element(by.css("div.cuppa-dropdown"));
	this.articleDimension = element(by.css("ul.articleDimension"));
	this.hamIcon = element(by.css("i.fa.fa-bars.hamburgerIcon"));
	this.totalUnReadInIcon = element.all(by.css("div.count-num")).get(1);
	this.disabledIrrelevant = element.all(by.css("li.disabledClass"));
	this.enabledIrrelevant = element.all(by.css("li.enabledclass"));

	this.getCountOfNews = function() {
		var self = this;
		const day = new Date().getDay();
		return this.unReadNews.count().then(function(text) {
			return text;
		})
	};

	this.readTheNewsFeed = function() {
		var self = this;
		const day = new Date().getDay();
		this.isMarkAsIrrelevantOptionDisabled();
		browser.executeScript("arguments[0].click()",this.unReadNews.get(day));
//		this.unReadNews.get(day).click();
		browser.sleep(8000);
		var winHandles = browser.getAllWindowHandles();
		winHandles.then(function(handles) {
			var homePage = handles[0];
			var newsWindow = handles[1];
			browser.switchTo().window(newsWindow);
			browser.switchTo().window(homePage);
		})
		this.isMarkAsIrrelevantOptionEnabled();
		browser.executeScript("arguments[0].click()",this.readNews);
//		this.readNews.click();

	};
	this.isSelectTagOptionPresent = function() {
		this.selectTags.isPresent().then(function(bool) {
			if (!bool) {
				console.error("Select Tags Option is not present");
			}

		})
	};
	this.isMarkAsIrrelevantOptionDisabled = function() {
		const day = new Date().getDay();
		this.disabledIrrelevant.get(day).isPresent().then(function(bool) {
			if (!bool) {
				console.error("The Irrelevant Option should not be enabled");
			}

		})
	};
	this.isMarkAsIrrelevantOptionEnabled = function() {
		this.enabledIrrelevant.get(0).isPresent().then(function(bool) {
			if (!bool) {
				console.error("The Irrelevant Option should not be disabled");
			}

		})
	};

	this.isRankingOptionPresent = function() {
		this.articleDimension.isPresent().then(function(bool) {
			if (!bool) {
				console.error("Ranking Option is not present");
			}

		})
	};

};
module.exports = new newsFeed();