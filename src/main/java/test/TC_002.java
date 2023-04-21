package test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions (features = "src/main/java/feature/login.feature",
glue= {"StepDefinition"},monochrome=true)
//plugin= {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})

public class TC_002 extends AbstractTestNGCucumberTests{

}



