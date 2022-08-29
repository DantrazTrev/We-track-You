const express = require("express");
const app = express(); // create express app
const UAParser = require('ua-parser-js');

app.use(express.json());


app.get("/", (req, res) => {
    res.send("This one's for you");
});

app.post("/track", (req, res) => {
    let userAgent = req.headers['user-agent'];
    let parser = new UAParser()
    let mobile = /mobile/i.test(userAgent)
    let browserName = parser.setUA(userAgent).getBrowser().name;
    let trackingdata = { ...req.body, ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress, lang: req.headers["accept-language"], browserName, mobile }

    //Do something with the tracking data here 

    res.json(trackingdata);
});
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});