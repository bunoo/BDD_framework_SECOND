$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abha Kumari/eclipse-workspace/BDD_framework_SECOND/src/main/java/features/autocompleteForm.feature");
formatter.feature({
  "line": 1,
  "name": "Autocomplete Form feature of the Formy app",
  "description": "",
  "id": "autocomplete-form-feature-of-the-formy-app",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Validation of the correct navigation to the Autocomplete form page",
  "description": "",
  "id": "autocomplete-form-feature-of-the-formy-app;validation-of-the-correct-navigation-to-the-autocomplete-form-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the home page of the Formy app",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the tile of the page is as expected",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the Autocomplete button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user gets navigated to the Autocomplete form page",
  "keyword": "And "
});
formatter.match({
  "location": "AutocompleteFunctValidation.the_user_is_on_the_home_page_of_the_Formy_app()"
});
formatter.result({
  "duration": 20497116668,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.the_tile_of_the_page_is_as_expected()"
});
formatter.result({
  "duration": 97157720,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.user_clicks_on_the_Autocomplete_button()"
});
formatter.result({
  "duration": 248660645,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.user_gets_navigated_to_the_Autocomplete_form_page()"
});
formatter.result({
  "duration": 167839457,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@type \u003d \u0027text\u0027 and @class\u003d \u0027form-control\u0027 and @id\u003d \u0027postal_code\u0027 and @placeholder\u003d\u0027Zip code\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8SKO70U\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\ABHAKU~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61521}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: f630977b0005f6ab140a7dfe5d688005\n*** Element info: {Using\u003dxpath, value\u003d//*[@type \u003d \u0027text\u0027 and @class\u003d \u0027form-control\u0027 and @id\u003d \u0027postal_code\u0027 and @placeholder\u003d\u0027Zip code\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.AutocompleteFunctValidation.user_gets_navigated_to_the_Autocomplete_form_page(AutocompleteFunctValidation.java:55)\r\n\tat ✽.And user gets navigated to the Autocomplete form page(C:/Users/Abha Kumari/eclipse-workspace/BDD_framework_SECOND/src/main/java/features/autocompleteForm.feature:7)\r\n",
  "status": "failed"
});
});