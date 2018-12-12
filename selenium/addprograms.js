var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build()


driver.get('localhost:8082/add');
driver.findElement(By.name('add')).sendKeys('Biotechnology');
driver.findElement(By.name('submit')).click();


