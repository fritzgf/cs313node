const express = require('express')
const path = require('path')
const url = require('url')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/getRate', function(req, res) {calcRate(req, res);})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calcRate(req, res) {
    var requestUrl = url.parse(req.url, true);

    var category = requestUrl.query.category;
    var weight = Number(requestUrl.query.weight);

    var cost = 0;

    switch(category) {
        case "letStamp":
            if (weight < 3.5) {
                cost = 0.50 + ((weight - 1) * 0.21);
            }
            else {
                cost = 1.13;
            }
            category = "Letter (Stamped)";
            break;
        case "letMet":
            if (weight < 3.5) {
                cost = 0.47 + ((weight - 1) * 0.21);
            }
            else {
                cost = 1.10;
            }
            category = "Letter (Metered)";
            break;
        case "letEnv":
            if (weight < 13) {
                cost = 1.00 + ((weight - 1) * 0.21);
            }
            else {
                cost = 3.52;
            }
            category = "Large Envelope";
            break;
        case "package":
            if (weight <= 13) {
                if(weight < 5)
                    cost = 3.5;
                else if(weight >= 5 || weight < 9)
                    cost = 3.75;
                else {
                    cost = 4.10 + ((weight - 9) * 0.35);
                }
            }
            else {
                cost = 5.50;
            }
            category = "First-Class Package Service - Retail";
            break;
    }

    var params = {category: category, weight: weight, cost: cost};

    res.render('pages/result', params);
}