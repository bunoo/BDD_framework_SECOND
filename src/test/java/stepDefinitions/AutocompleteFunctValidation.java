package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AutocompleteFunctValidation {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given("^the user is on the home page of the Formy app$")
	public void the_user_is_on_the_home_page_of_the_Formy_app() {
	
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Abha Kumari\\Documents\\INTERVIEW\\SELENIUM\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS); //Dynamic wait
		driver.get("http://formy-project.herokuapp.com/");
	}
	
	@When("^the tile of the page is as expected$")
	public void the_tile_of_the_page_is_as_expected() {
		
		  String title_act = driver.getTitle();
		  System.out.println(title_act);
		  String title_exp = "Formy";
		  //Assert.assertEquals(title_act, title_exp, "YOU ARE AT WRONG PAGE");
		  Assert.assertEquals(title_act, title_exp);
		  
	}
	
	@Then("^user clicks on the Autocomplete button$")
	public void user_clicks_on_the_Autocomplete_button() {
	    
	    WebElement btnAutocomplete = driver.findElement(By.xpath("//a[@class='btn btn-lg' and @href='/autocomplete']"));
	    btnAutocomplete.click();
	}
	
	@Then("^user gets navigated to the Autocomplete form page$")
	public void user_gets_navigated_to_the_Autocomplete_form_page() {
	    
		/* Go for dynamic wait. */
/*		
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		WebElement btnZipcode = driver.findElement(By.xpath("//*[@type = 'text' and @class= 'form-control' and @id= 'postal_code' and @placeholder='Zip code']"));
		boolean b = btnZipcode.isDisplayed();
		if (b == true) {
			System.out.println("You have been navigated correctly");
		}
		else if (b == false) {
			System.out.println("You have been navigated to a wrong page");
		}*/
	}
}
