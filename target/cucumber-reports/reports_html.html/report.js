$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/feature/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sucessful Login With Valid Credentails",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Lauch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login1.launchBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email",
  "keyword": "When "
});
formatter.match({
  "location": "Login1.enterEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Password",
  "keyword": "When "
});
formatter.match({
  "location": "Login1.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "Login1.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be",
  "keyword": "Then "
});
formatter.match({
  "location": "Login1.verifyhome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on Logout",
  "keyword": "When "
});
formatter.match({
  "location": "Login1.logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title Should be",
  "keyword": "Then "
});
formatter.match({
  "location": "Login1.verifyhome1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login1.teardown()"
});
formatter.result({
  "status": "passed"
});
});