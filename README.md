# zwift-assessment
Installation
1. If needed (recommended), create a new directory for this test.
2. Copy the distribution files to your new directory.
2. Download the node installer appropriate to your OS and save it to your  directory: https://nodejs.org/ (The Win 10 x64 installer is included for convenience).
3. Start the node installer (use defaults but select "Automatially install the necessary tools" on the 3rd screen).
4. Tools for node.js will install next, use defaults. This install takes a while, get coffee, etc (Visual Studio errors are acceptable).
5. Open a cmd terminal in your directory
6. Install Selenium with: npm install selenium-webdriver
7. Download the appropriate Chrome driver (http://chromedriver.storage.googleapis.com/index.html) and/or Firefox/gecko driver (https://github.com/mozilla/geckodriver/releases) that match your browser version(s). Chrome driver 94.0.4606.61 and gecko driver v0.30.0 are included for convenience.

Syntax
- node index.js chrome|firefox 
- Note: For 1st execution, allow network access.

Examples
- node index.js chrome
- node index.js firefox
- node index.js (defaults to chrome)
- Note: Errors AFTER a Chrome test are expected
