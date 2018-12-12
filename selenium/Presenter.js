// var webdriver = require('selenium-webdriver');

// By = webdriver.By;
// until = webdriver.until;

// var driver = new webdriver.Builder()
// .forBrowser('chrome')
// .build()
var test = require('selenium-webdriver/testing');
test.describe( 'Test Suite' , function(){
    test.before(function(){
driver.get('localhost:8082/Presenter');
driver.findElement(By.name('fname')).sendKeys('Anusha');
driver.findElement(By.name('lname')).sendKeys('Kollu');
driver.findElement(By.name('email')).sendKeys('anusha@gmail.com');
driver.findElement(By.name('contact')).sendKeys('6605280506');
driver.findElement(By.name('target')).sendKeys('High School');
driver.findElement(By.name('topic')).sendKeys('It');
driver.findElement(By.name('subject')).sendKeys('This is more about Information technologies');
driver.findElement(By.name('submit')).click();
});
test.after(function(){
    driver.quit();
});
test.it( 'Test 1' , function(){
    
            driver.getTitle().then(function(title){
                expect(title).equals(Presenter);
                console.log(title);
            })
    
            driver.sleep();
        });
        test.it( 'Test 2' , function(){
            
                    driver.getTitle().then(function(title){
                        expect(title).equals(attendee);
                        console.log(title);
                    })
            
                    driver.sleep();
                });
    });





// var  MongoClient  =  require('mongodb').MongoClient;
// const  db  =  module.exports  =  {
//     url:  "mongodb://localhost:27017/conference"
// };

// MongoClient.connect('mongodb://localhost:27017/conference', function (err, db) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Connected to db");
//         const  collection =  db.collection("presenters");
//         var  cursor  =  collection.find({});
//         cursor.each(function (err,  doc) {

//             console.log(doc);
//         });
//         console.log("Success");
//         db.close();
//     }
// });