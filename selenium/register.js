var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build()

driver.get('localhost:8082/users/register');
driver.findElement(By.name('name')).sendKeys('Swaroop');
driver.findElement(By.name('username')).sendKeys('swaroop');
driver.findElement(By.name('email')).sendKeys('swaroop@gmail.com');
driver.findElement(By.name('password')).sendKeys('123456');
driver.findElement(By.name('password2')).sendKeys('123456');
driver.findElement(By.name('submit')).click();



