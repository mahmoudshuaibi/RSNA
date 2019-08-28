package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Rsna2019Stage {

    public  Rsna2019Stage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//*[@id=\"_setLoginFocus\"]")
    public WebElement login;

    @FindBy(id = "loginUN")
    public WebElement userNameInput;

    @FindBy(id = "loginPWD")
    public WebElement passwordInput;

    @FindBy(id = "_loginBTN")
    public WebElement loginButton;


}
