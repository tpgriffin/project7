# zwift-assessment

**Notes**
- **The JavaScript assessment supports Firefox.**
- In the **js scripts** I clear the Zwift Cookies Statement (truste-consent-button), at no extra charge!
- The **js scripts** were intended to work with Firefox and Chrome BUT **only Firefox is currently supported** due to differences between the browsers (and a lack of time to resolve).
- The **cpp code** was not compiled or tested so I expect the functions need to be debugged and tested.

**JavaScript Installation**
1. If needed (recommended), create a new directory for this test.
2. Unzip the github distribution files (https://github.com/tpgriffin/project7) to your directory.
2. Download the node installer appropriate to your OS and save it to your directory: https://nodejs.org/. **The Win 10 x64 nodejs installer is included for convenience.**
3. Start the node installer (use defaults but select "Automatically install the necessary tools" on the 3rd screen).
4. Tools for node.js will install next, use defaults. This install takes a while, get coffee, etc (Visual Studio errors are acceptable).
5. Open a cmd terminal in your directory
6. Install Selenium with: npm install selenium-webdriver
7. Download the appropriate Firefox/gecko driver that matches your browser version (https://github.com/mozilla/geckodriver/releases). **Firefox/gecko driver v0.30.0 is included for convenience.**

**Running JavaScript**
- node 1a-scenario-homePage
- node 1b-scenario-eventsPage 
- Note: For the 1st execution, allow network access if necessary.

**JavaScript Improvements**
- The js code should be tighter, common tasks should use shared functions.
- I stopped defining Consts in the js code to have more time for the C++ assessment.
