# zwift-assessment
The JavaScript assessment supports Firefox.

Comments
- I clear the Zwift website Cookies Statement (truste-consent-button), at no extra charge!
- The js scripts were intended to work with Chrome or Firefox BUT **only Firefox is currently supported** due to differences between the browsers (and a lack of time to resolve).

Installation
1. If needed (recommended), create a new directory for this test.
2. Unzip the github distribution files (https://github.com/tpgriffin/zwift-assessment) to your directory.
2. Download the node installer appropriate to your OS and save it to your directory: https://nodejs.org/ (The Win 10 x64 installer is included for convenience).
3. Start the node installer (use defaults but select "Automatically install the necessary tools" on the 3rd screen).
4. Tools for node.js will install next, use defaults. This install takes a while, get coffee, etc (Visual Studio errors are acceptable).
5. Open a cmd terminal in your directory
6. Install Selenium with: npm install selenium-webdriver
7. Download the appropriate Firefox/gecko driver that matches your browser version (https://github.com/mozilla/geckodriver/releases). Firefox/gecko driver v0.30.0 is included for convenience.

Syntax
- node homePage
- node eventsPage 
- Note: For the 1st execution, allow network access if necessary.

Improvements
- The js code should be tighter by using local functions.
- I stopped defining Consts in js to have more time for the C++ assessment.
