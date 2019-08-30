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
  "duration": 53283072000,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.the_tile_of_the_page_is_as_expected()"
});
formatter.result({
  "duration": 36004500,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.user_clicks_on_the_Autocomplete_button()"
});
formatter.result({
  "duration": 6571079300,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteFunctValidation.user_gets_navigated_to_the_Autocomplete_form_page()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
});