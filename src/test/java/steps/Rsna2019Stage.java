package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utilities.Driver;

public class Rsna2019Stage {

    WebDriver driver = Driver.getDriver();
    Pages.Rsna2019Stage rsna2019Stage = new Pages.Rsna2019Stage();

    @When("User on RSNA Stage application")
    public void user_on_RSNA_Stage_application() {

        driver.get("https://rsna2019stage.rsna.org/");
    }

    @Then("User clock on login button")
    public void user_clock_on_login_button() {
        WebElement login = rsna2019Stage.login;
        login.click();

    }

    @Then("User input user name and password")
    public void user_input_user_name_and_password() {
        rsna2019Stage.userNameInput.sendKeys("00785121");
        rsna2019Stage.passwordInput.sendKeys("garza");
    }

    @Then("User click on login button to submit")
    public void user_click_on_login_button_to_submit() {
        rsna2019Stage.loginButton.click();

    }

     @Then("User sees Welcome to meeting central in page")
     public void user_sees_Welcome_to_meeting_central_in_page() {

         String actualResults = "Welcome to Meeting Central";
         String expectedResults =  "Welcome to Meeting Central";

         Assert.assertTrue(actualResults.equals(expectedResults));
         System.out.println(driver.getCurrentUrl());


  }
}
