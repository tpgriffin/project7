// Test params
siteToTest 		= "https://zwift.com"
chatEl 			= "solvvy-chat-icon"		// The Chat Icon appears to display last
cookiesEl 		= "truste-consent-button"	// Cookies statement
hamburgerEl 	= "PrimaryNav-module__hamburger--1y_LN"
eventsEl 		= "Events"
filterEventsEl 	= "filter-toggle"

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
		console.log('Passed,',cookiesEl,',clicked')
	} catch (ex) {
		console.log('FAILED,',cookiesEl,',not found-continuing')
	}

	// wait for the Chat Element
	// Give the whole page time to load
	try {
		await driver.findElement(By.id(chatEl))
	} catch (ex) {
		console.log('FAILED,',chatEl,',not found')
		return 0
	}

	// Enter Hamburger menu
	driver.findElement(By.className(hamburgerEl)).click()
	console.log('Passed,',hamburgerEl,',clicked')

	// wait for the Events Navigation element
	try {
		await driver.findElement(By.xpath("//*[text()='"+eventsEl+"']"))
	} catch (ex) {
		console.log('FAILED,',eventsEl,',not found')
		return 0
	}
	// Enter Events menu
	driver.findElement(By.xpath("//*[text()='"+eventsEl+"']")).click()
	console.log('Passed,',eventsEl,',clicked')

	// Give the whole page time to load
	// wait for the Chat Element
	try {
		await driver.findElement(By.id(chatEl))
	} catch (ex) {
		console.log('FAILED,',chatEl,',not found')
		return 0
	}

	// Get original event text and Number of events
	console.log('Parsing events...')
	await (origPageText = driver.findElement(By.className('events-column')).getText())
	origNumEvents = (await driver.findElements(By.className('tab-listing'))).length
	console.log('Passed,',origNumEvents,',orig events found')

	// wait for Filter Events
	try {
		await driver.findElement(By.className(filterEventsEl))
	} catch (ex) {
		console.log('FAILED,',filterEventsEl,',not found')
		return 0
	}
	// Enter Filter Events
	driver.findElement(By.className(filterEventsEl)).click()
	console.log('Passed,',filterEventsEl,',clicked')

	// Give the whole page time to load
	// wait for the Chat Element
	try {
		await driver.findElement(By.id(chatEl))
	} catch (ex) {
		console.log('FAILED,',chatEl,',not found')
		return 0
	}

	// Select Filters
	driver.findElement(By.xpath("//*[text()='Cycling']")).click()
	console.log('Passed, Cycling, clicked')
	driver.findElement(By.xpath("//*[text()='E (Open)']")).click()
	console.log('Passed, E (Open), clicked')
	driver.findElement(By.xpath("//*[text()='Morning']")).click()
	console.log('Passed, Morning, clicked')

	// Apply Filters
	driver.findElement(By.className('apply-button')).click()
	console.log('Passed,','apply-button',',clicked')

	// Give the whole page time to load
	// wait for the Chat Element
	try {
		await driver.findElement(By.id(chatEl))
	} catch (ex) {
		console.log('FAILED,',chatEl,',not found')
		return 0
	}

	// Get New event text and Number of events
	console.log('Parsing events...')
	await (newPageText = driver.findElement(By.className('events-column')).getText())
	newNumEvents = (await driver.findElements(By.className('tab-listing'))).length
	console.log('Passed,',newNumEvents,',filtered events found')
	if ((newPageText != origPageText) || (newNumEvents != origNumEvents)) {
		console.log('Passed ,Events ,changed')
	} else {
		console.log('FAILED, Events, not changed')
	}

	// Clean up, close browser
	console.log('Closing browser. Ride On!')
	await driver.quit()
	// Note: Browser is left open for inspection after an error
}
main()

return 1