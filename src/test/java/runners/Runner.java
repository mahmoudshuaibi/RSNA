package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(



        plugin = {"html:target/reports",  "json:target/cucumber-reports/Cucumber.json", "junit:target/cucumber-reports/Cucumber.xml"},
        features = "C:\\Users\\malshuaibi\\IdeaProjects\\RSNA\\src\\test\\resources\\features",
        glue = "steps",
        tags = "@RSNA",
        dryRun = false


)



public class Runner {
}
