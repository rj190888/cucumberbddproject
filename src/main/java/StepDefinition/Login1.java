package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Login1 {
	
	public ChromeDriver driver;
	
@Given("User Lauch the browser")
public void launchBrowser()
{
	WebDriverManager.chromedriver().setup();
    driver = new ChromeDriver();
    driver.get("http://admin-demo.nopcommerce.com/login");
	driver.manage().window().maximize();
}

@When("User enters Email")

public void enterEmail() throws InterruptedException
{
	Thread.sleep(2000);
	driver.findElement(By.xpath("//input[@id='Email']")).clear();
	driver.findElement(By.xpath("//input[@id='Email']")).sendKeys("admin@yourstore.com");
}
@When("User enters Password")

public void enterPassword() throws InterruptedException
{
	Thread.sleep(2000);
	driver.findElement(By.xpath("//input[@id='Password']")).clear();
	driver.findElement(By.xpath("//input[@id='Password']")).sendKeys("admin");
}
@When("Click on Login")
	public void login() throws InterruptedException
	{
	Thread.sleep(2000);
	driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

@Then("Page Title should be")
public void verifyhome()
{
	System.out.println(driver.getTitle());
}
@When("User Click on Logout")
public void logout() throws InterruptedException
{
Thread.sleep(2000);
driver.findElement(By.xpath("//a[normalize-space()='Logout']")).click();
}
@Then("Page Title Should be")
public void verifyhome1()
{
	System.out.println(driver.getTitle());
}
@And("Close browser")
public void teardown()
{
	driver.quit();
}
}
