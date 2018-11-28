const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;


function calculateRate(mail, pieces, weight) {
  var cost = 0;
  switch (mail) {
    case "lettersStamp":
      if (weight == 1) {
        cost = .5;
      } else if (weight == 2) {
        cost = .71;
      } else if (weight == 3) {
        cost = .92;
      } else if (weight > 3.5) {
        cost = 1.13;
      }
      console.log("cost  = " + cost + " weight  = " + weight);
      var price = pieces * cost;
      break;
    case "lettersMetered":
      if (weight == 1) {
        cost = .47;
      } else if (weight == 2) {
        cost = .68;
      } else if (weight == 3) {
        cost = .89;
      } else if (weight > 3.5) {
        cost = 1.10;
      }
      console.log("cost  = " + cost + " weight  = " + weight);
      var price = pieces * cost;
      console.log("price = " + price);
      break;
    case "largeEnvelopsFlats":
      switch (weight) {
        case 1:
          cost = 1;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 2:
          cost = 1.21;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 3:
          cost = 1.42
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 4:
          cost = 1.63;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 5:
          cost = 1.84;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 6:
          cost = 2.05;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 7:
          cost = 2.26;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 8:
          cost = 2.47;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 9:
          cost = 2.68;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 10:
          cost = 2.89;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 11:
          cost = 3.10;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 12:
          cost = 3.31;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        default:
          cost = 3.52;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
      }
    case "firstClassPackageService":
      switch (weight) {
        case 1:
          cost = 3.5;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 2:
          cost = 3.50;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 3:
          cost = 3.5;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 4:
          cost = 3.5;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 5:
          cost = 3.75;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 6:
          cost = 3.75;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 7:
          cost = 3.75;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 8:
          cost = 3.75;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 9:
          cost = 4.10;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 10:
          cost = 4.45;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 11:
          cost = 4.80;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        case 12:
          cost = 5.15;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
        default:
          cost = 5.50;
          console.log("cost  = " + cost + " weight  = " + weight);
          var price = pieces * cost;
          console.log("price = " + price);
          return price;
      }
  }
  return price;
};

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/result", function (req, res) {
    var mail = req.query.mail;
    var weight = req.query.weight;
    var pieces = req.query.pieces;

    var price = calculateRate(mail, pieces, weight);
    res.render("pages/prove09/result", {
      mail: mail,
      weight: weight,
      pieces: pieces,
      price: price
    })

    console.log("price = " + price);
    console.log("listening to port" + PORT);
  })
  .get("/getRate", (req, res) => res.send("pages/postal"))
  .get("/cool", (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/getRate', function(req, res) {calcRate(req, res);})
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//   function calcRate(req, res) {
//     var requestUrl = url.parse(req.url, true);

//     var category = requestUrl.query.category;
//     var weight = Number(requestUrl.query.weight);

//     var cost = 0;

//     switch(category) {
//         case "letStamp":
//             if (weight < 3.5) {
//                 cost = 0.50 + ((weight - 1) * 0.21);
//             }
//             else {
//                 cost = 1.13;
//             }
//             category = "Letter (Stamped)";
//             break;
//         case "letMet":
//             if (weight < 3.5) {
//                 cost = 0.47 + ((weight - 1) * 0.21);
//             }
//             else {
//                 cost = 1.10;
//             }
//             category = "Letter (Metered)";
//             break;
//         case "letEnv":
//             if (weight < 13) {
//                 cost = 1.00 + ((weight - 1) * 0.21);
//             }
//             else {
//                 cost = 3.52;
//             }
//             category = "Large Envelope";
//             break;
//         case "package":
//             if (weight <= 13) {
//                 if(weight < 5)
//                     cost = 3.5;
//                 else if(weight >= 5 || weight < 9)
//                     cost = 3.75;
//                 else {
//                     cost = 4.10 + ((weight - 9) * 0.35);
//                 }
//             }
//             else {
//                 cost = 5.50;
//             }
//             category = "First-Class Package Service - Retail";
//             break;
//     }

//     var params = {category: category, weight: weight, cost: cost};

//     res.render('pages/result', params);
// }


// var express = require("express");
// var app = express();

// var controllerq = require("./controllers/interviewqController.js");
// var controllerReg = require("./controllers/registerController.js");
// var controllerLog = require("./controllers/loginController.js");
// var controllerquest = require("./controllers/askquestionController.js");

// app.set("port", process.env.PORT || 5000)
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"))
// app.get("/interviewq", controllerq.handleInterviewRequest)
// app.post("/interviewq", controllerquest.handleInterviewqRequest)
// app.post("/register", controllerReg.handleUserRequest)
// app.post("/login", controllerLog.handleUserLogRequest)
   
//     .listen(app.get("port"), function () {
//         console.log("Listening on port", app.get("port"));
//     })



