package runnerConfig;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\Abha Kumari\\eclipse-workspace\\BDD_framework_SECOND\\src\\main\\java\\features\\autocompleteForm.feature"
 ,glue={"stepDefinitions"}
 )

public class TestRunner {

}
