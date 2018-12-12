var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build()

driver.get('localhost:8082/faculty');
driver.findElement(By.name('fname')).sendKeys('Anusha');
driver.findElement(By.name('lname')).sendKeys('Kollu');
driver.findElement(By.name('email')).sendKeys('anusha12@gmail.com');
driver.findElement(By.name('contact')).sendKeys('6605280506');
driver.findElement(By.name('program')).sendKeys('It');
driver.findElement(By.name('submit')).click();

