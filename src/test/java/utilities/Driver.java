package utilities;

import io.github.bonigarcia.wdm.EdgeDriverManager;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import java.util.concurrent.TimeUnit;

public class Driver {

    private Driver(){

    }

    private static WebDriver driver;

    public static WebDriver getDriver(){

        if(driver == null) {
            String browser = Config.getProperty("browser");


            if ("chrome".equals(browser)) {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            } else if ("firefox".equals(browser)) {
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
            }else if("Edge".equals(browser)){
              // WebDriverManager.edgedriver().setup();
                System.setProperty("webdriver.edge.driver","C:\\Users\\malshuaibi\\Documents\\QA Edge and IE Drivers\\MicrosoftWebDriver.exe");
                driver = new EdgeDriver();
                
            }else if("ie11".equals(browser)) {
                WebDriverManager.iedriver().setup();
            }//else
               // WebDriverManager.chromedriver().setup();
               // driver = new ChromeDriver();


            driver.manage().timeouts().implicitlyWait(2000, TimeUnit.SECONDS);
            driver.manage().window().maximize();




        }
        return driver;
    }

    public static void quitDriver(){
        if(driver != null){
            driver.quit();
            driver = null;
        }
    }
}