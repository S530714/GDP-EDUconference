var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build()

// driver.get('localhost:8082/users/login');
// driver.findElement(By.name('username')).sendKeys('Darshan');
// driver.findElement(By.name('password')).sendKeys('123');
// driver.findElement(By.name('submit')).click();
driver.get('localhost:8082/ProgramDetails');
driver.findElement(By.name('Time')).sendKeys('7:30am');
driver.findElement(By.name('Activity')).sendKeys('Shuttle');
driver.findElement(By.name('Location')).sendKeys('Colden Hall');
driver.findElement(By.name('Program')).sendKeys('It');
driver.findElement(By.name('Description')).sendKeys('This is more about Information Technologies');
driver.findElement(By.name('ADD')).click();


