// Test params
siteToTest 		= "https://zwift.com"
chatEl 			= "solvvy-chat-icon"		// The Chat Icon appears to display last
cookiesEl 		= "truste-consent-button"	// Cookies statement


// Browsers
const chrome = 'chrome'
const chromedriver = 'chromedriver'
const firefox = 'firefox'
const firefoxdriver = 'geckodriver'

// get command line args
var myArgs = process.argv.slice(2)

// Setup default browser
var defBrowser = ""
var browserDriver = ''
switch (myArgs[0]) {
    case chrome:
        defBrowser = chrome
		browserDriver = chromedriver
        break;
    case firefox:
        defBrowser = firefox
		browserDriver = firefoxdriver
        break;
    default:
        //console.log('\nBrowser not supported ("'+myArgs[0]+'").\nDefaulting to Firefox.\n\nSyntax:\nnode index.js chrome|firefox\n')
        defBrowser = firefox
		browserDriver = firefoxdriver
    }
console.log('Browser:',defBrowser)

// Check for selenium-webdriver
try {
	var {Builder, By, Key, util} = require("selenium-webdriver")
} catch {
	console.log('FAIL,selenium-webdriver,driver not found,')
	return 0
}

async function main() {
	// check for browser and driver
	try {
		var driver = await new Builder().forBrowser(defBrowser).build()
	} catch (ex) {
		console.log('FAILED,',defBrowser+' or '+browserDriver,',not found')
		return 0
	}
	
	// check for website
	try {
		await driver.get(siteToTest)
	} catch (ex) {
		console.log('FAILED,',siteToTest,',not found')
		return 0
	}
	console.log('Passed,',siteToTest,',loaded')
	
	// wait for Cookie Statement
	try {
		await driver.findElement(By.id(cookiesEl))
		// click/clear cookie statement
		driver.findElement(By.id(cookiesEl)).click()
		console.log('Passed, Cookie Statement, present and cleared')
	} catch (ex) {
		console.log('FAILED,',cookiesEl,',not found-continuing')
	}

	// wait for the Chat Element
	// Give the whole page time to load
	try {
		await driver.findElement(By.id(chatEl))
		console.log('Passed, Chat, present')
	} catch (ex) {
		console.log('FAILED,',chatEl,',not found')
		return 0
	}

	// Clean up, close browser
	console.log('Closing browser. Ride On!')
	await driver.quit()
	// Note: Browser is left open for inspection after an error
}
main()

return 1