var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var db = mongoose.connection;

router.get('/', function (request, response) {
  db.collection('feedetails').find().toArray(function (err, result) {
    db.collection('names').find().toArray(function (err, result1) {
    if (err) throw err;
    response.render('homepage.ejs', { list: result, list1: result1});
    })
  })
});

router.get('/homepage', function (request, response) {
  db.collection('feedetails').find().toArray(function (err, result) {
    db.collection('names').find().toArray(function (err, result1) {
    if (err) throw err;
    response.render('homepage.ejs', { list: result, list1: result1});
    })
  })
});

router.get('/attendee', function (request, response) {
  db.collection('addprograms').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    response.render('attendee.ejs', { list: result });
  })
});
 

router.get("/presenter", function (request, response) {
  db.collection('addprograms').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    response.render('presenter.ejs', { list: result });
  })
});
 
router.get("/Graduatestudent", function (request, response) {
  db.collection('addprograms').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    response.render('Graduatestudent.ejs', { list: result });
  })
});
 
router.get("/faculty", function (request, response) {
  db.collection('addprograms').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    response.render('faculty.ejs', { list: result });
  })
});
router.get("/vendor", function (request, response) {
  response.render('vendor.ejs');
});

router.get("/cart", function (request, response) {
  response.render('cart.ejs');
});

router.get("/travel", function (request, response) {
  response.render('travel.ejs');
});

router.get("/schedule", function (request, response) {
  response.render('schedule.ejs');
});

router.get("/program", function (request, response) {
  response.render('program.ejs');
});

router.get("/deadlines", function (request, response) {
  response.render('deadlines.ejs');
});
router.get("/contact", function (request, response) {
  response.render('contact.ejs');
});



router.get("/Conference", function (request, response) {
  db.collection('deadlines').find().toArray(function (err, result) {
    if (err) throw err;
    db.collection('programdetails').find().toArray(function (err, result1) {
      if (err) throw err;
      response.render('ConferenceInformation.ejs', { list: result, list1: result1 });

    })
  });
});

router.get("/couponcode", function (request, response) {
  response.render('couponcode.ejs');
});

router.get("/Paymentthroughcheck/:id", function (request, response) {
  var email = String(request.params.id)
  var quantity = request.body.quantity  
  var amount = request.body.quantity
  console.log("Amount"+amount);
//var email1 = db.collection('ca').find({'email':request.body.email})
  db.collection('attendees').find({'email':email}).toArray(function (err, result) {
    //console.log(result)
    if (err) throw err;    
    response.render('Paymentthroughcheck.ejs', { list: result });
  })
});
router.get("/PayThroughCards", function (request, response) {
  response.render('PayThroughCards.ejs');
});
router.get("/edupay", function (request, response) {
  response.render('edupay.ejs');
});
router.get("/presenterconf", function (request, response) {
  response.render('presenterconf');
});

router.get('/forgotE', function (req, res) {
  res.render('forgotE');
});

router.get("/travel", function (request, response) {
  response.render('travel.ejs');
});

router.get('/admin', ensureAuthenticated, function (req, res) {
  res.redirect('/users/login');
});

router.get("/adminhomepage", function (request, response) {
  response.render('adminhomepage.ejs');
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
  res.redirect('/users/login');
  }

}

  router.get("/adminhomepage", function (request, response) {
    response.render('adminhomepage.ejs');
  });


  router.get("/FeeDetails", function (request, response) {
    db.collection('feedetails').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('UpdateFeeDetails.ejs', { list: result });
    })
  });

  router.get("/ProgramDetails", function (request, response) {
    db.collection('programdetails').find().toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      response.render('UpdateProgramDetails.ejs', { list: result });
    })
  });

  router.get("/Deadline", function (request, response) {

    db.collection('deadlines').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('UpdateDeadlines.ejs', { list: result });
    })
  });

  router.get('/adminattendee', function (request, response) {
    db.collection('attendees').find().toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      response.render('adminattendee.ejs', { list: result });
    })
  });

  router.get('/adminvendor', (request, response, next) => {
    db.collection('vendors').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('adminvendor.ejs', { list: result });
    })
  })
  router.get('/admincontact', (request, response, next) => {
    db.collection('contacts').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('admincontact.ejs', { list: result });
    })
  })
  router.get("/Add", function (request, response) {
    db.collection('addprograms').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('add drop programs.ejs', { list: result });
    })
  });

  router.get("/AdminPresenter", function (request, response) {
    db.collection('presenters').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('AdminPresenter.ejs', { list: result });

    });
  });

  router.get("/conferencename", function (request, response) {
    db.collection('names').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('conferencename.ejs', { list: result });

    });
  });

  //Update Prices
  router.get("/amount", function (request, response) {
    db.collection('amounts').find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      response.render('amount.ejs', { list: result });
    })
  });



//Participants Food count

router.get("/foodcount", function(request, response) {
  var regular = db.collection('attendees').find({'food':'Regular'}).count()
  var veg = db.collection('attendees').find({'food':'Vegetarian'}).count()
  var gluten = db.collection('attendees').find({'food':'Gluten Free'}).count()
  var regularp = db.collection('presenters').find({'food':'Regular'}).count()
  var vegp = db.collection('presenters').find({'food':'Vegetarian'}).count()
  var glutenp = db.collection('presenters').find({'food':'Gluten Free'}).count()
  regular.then(function(result){
    veg.then(function(result1){
      gluten.then(function(result2){
        regularp.then(function(resultp){
          vegp.then(function(result1p){
            glutenp.then(function(result2p){
              response.render('foodcount.ejs',{regular: result, veg: result1, gluten: result2, regularp: resultp, vegp: result1p, glutenp: result2p })
            })
          })
         })
      })
    })
   })
 
});

//Delete Database

router.get("/deletedatabase", function (request, response) {
response.render('deletedatabase.ejs')
});

router.post('/cleardb', function (request, response) {
  mongoose.connect('mongodb://S530669:Darshan6@ds129454.mlab.com:29454/conference');
  
  mongoose.connection.db.dropDatabase(function (err) {
    console.log('db dropped');
    response.redirect('/users/login');
  });

})

module.exports = router;