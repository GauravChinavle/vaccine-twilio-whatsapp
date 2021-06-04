var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const moment = require("moment");
const send = require("../services/sendWhatsapp");
const schemas = require("../models/userSchema");
const middleware = require("../middleware/inputValidation");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/subscribe", middleware(schemas.userSchema), async function(req,res) {
  try {
    const pin = req.body.pin;
    const mobile = req.body.mobile;
    const date = moment().format("DD-MM-YYYY");
    const urlPin = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`;
    const resp = await fetch(urlPin, {
      headers: {
        "Content-Type": "application/json",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36"
      }
    });
    const resJSON = await resp.json();
    const sessions = resJSON.sessions;
    let message = [];
    sessions.forEach(row => {
      if (row.available_capacity) {
        message.push(row);
      }
    });

    if (message.length != 0) {
      console.log(message);
      send(message, pin, mobile);
      res.json({ message: "request accepted" });
    }
    else{res.json({
        message: "No Data Available"
      })
      .catch(e => console.log(e.message));
  }} catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
