$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with positive credentials",
  "description": "    Given: Lauch the browser\n    When: Enter the Username\n    When: Enter the Password\n    When: Click the button\n    Then: Lead to Homepage",
  "keyword": "Scenario"
});
});