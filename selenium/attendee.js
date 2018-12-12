var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

driver.get('localhost:8082/attendee');
driver.findElement(By.name('fname')).sendKeys('Darshan');
driver.findElement(By.name('lname')).sendKeys('Chilakala');
driver.findElement(By.name('email')).sendKeys('darshanreddy.7@gmail.com');
driver.findElement(By.name('contact')).sendKeys('660-853-8036');
driver.findElement(By.name('institution')).sendKeys('Northwest Missouri State University');
driver.findElement(By.name('institutionc')).sendKeys('Maryville');
driver.findElement(By.name('institutions')).sendKeys('Missouri');
driver.findElement(By.name('zipcode')).sendKeys('64468');
driver.findElement(By.name('country')).sendKeys('United States');
driver.findElement(By.name('program')).sendKeys('React Js');
driver.findElement(By.name('submit')).click();




var  MongoClient  =  require('mongodb').MongoClient;
const  db  =  module.exports  =  {
    url:  "mongodb://localhost:27017/conference"
};

MongoClient.connect('mongodb://localhost:27017/conference', function (err, db) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected to db");
        const  collection =  db.collection("attendees");
        var  cursor  =  collection.find({});
        cursor.each(function (err,  doc) {

            console.log(doc);
        });
        console.log("Success");
        db.close();
    }
});











