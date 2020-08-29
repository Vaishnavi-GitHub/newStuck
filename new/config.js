/**
 * 
 */
var Jasmine2HtmlReporter=  require('protractor-jasmine2-html-reporter');
//exports.config = {
////  seleniumAddress: 'http://localhost:4444/wd/hub',
//
//		specs: ['spec.js']
//};
exports.config = {
		directconnect: true,
		specs: [  
			
//			     'spec.js',
			     'loginSpecFile.js'			
			
			
		],
		onPrepare: function(){
			
			browser.driver.manage().window().maximize();
//Places screenshots under screens and html reports are generated		      
			jasmine.getEnv().addReporter(
		    	        new Jasmine2HtmlReporter({
		    	          savePath: './screens'
		    	        })
		    	      );				
			
//Getting Specs in Detail
		      const SpecReporter = require('./protractor/node_modules/jasmine-spec-reporter').SpecReporter;
		      jasmine.getEnv().addReporter(new SpecReporter({
		      spec: {
		        displayStacktrace: 'pretty'
		      }
		    }));


		    
		},
jasmineNodeOpts: {
    showColors: true,
},

		}