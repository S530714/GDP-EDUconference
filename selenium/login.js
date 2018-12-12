var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build()

driver.get('localhost:8082/users/login');
driver.findElement(By.name('username')).sendKeys('Darshan');
driver.findElement(By.name('password')).sendKeys('123');
driver.findElement(By.name('submit')).click();


driver.get('localhost:8082/foodcount');
