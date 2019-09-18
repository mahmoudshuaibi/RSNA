package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(



        plugin = {"html:target/reports", "json:target/report.json"},
        features = "C:\\Users\\malshuaibi\\IdeaProjects\\RSNA\\src\\test\\resources\\features",
        glue = "steps",
        tags = "@RSNA",
        dryRun = false


)



public class Runner {
}
