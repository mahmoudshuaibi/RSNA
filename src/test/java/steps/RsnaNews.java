package steps;

import Pages.Rsna;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import utilities.Driver;

public class RsnaNews {

    WebDriver driver = Driver.getDriver();
    Rsna rsna = new Rsna();


    @Given("User on RSNA HomePage")
    public void user_on_RSNA_HomePage() {

     driver.get("https://www.rsna.org");
    }

    @When("User Click on News Button")
    public void user_Click_on_News_Button() {

        rsna.newsPage.click();
    }

    @Then("User sees {string} In title")
    public void user_sees_In_title(String string) {
        String actualResults = "RSNA Newss";
        Assert.assertTrue(string.equalsIgnoreCase(actualResults));

        driver.quit();

    }




}



