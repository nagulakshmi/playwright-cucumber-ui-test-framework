# UI Test framework (Cucumber + Playwright)

### How to run the testsuite?

* Refer the `.nvmrc` to know the version
* Refer the `.npmrc` to set the npm registry
* install node dependencies using `npm install` command
* execute the command `npm test` to run the testsuite in local
* if the yarn package manager unavailable, yarn can be used with the same commands

###Features
* Test suite captures screenshot under the screenshots folder
* HTML test report generated which helps users to read information easily, it also helps to understand the time consumed between the steps
* Test suite runs in both Firefox and Chromium browsers.
* Uses all latest node version & npm modules
* dev.json, sit.json used to adjust each environment, 
* set_env.sh used to adjust headless mode.
* info & error logs added into a file for the user reference
* Captures screenshot on failure (One negative scenario added to capture the report)

By default, the test suite runs using Chromium browser. The browser product can be updated in the properties.json, current code base supports both firefox and chrome
The below instruction helps users to switch between the browsers.

#### Cucumber Default timeout
* Cucumber default time out setting not working, when it is called from the hooks.
* Refer the issue here: https://github.com/cucumber/cucumber-js/issues/1610
