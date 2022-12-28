const express = require("express");
const app = express();
const hbs = require("hbs")
const body_parser = require("body-parser");
const unirest = require("unirest");

app.use(body_parser.urlencoded({extends:true}));
app.set('view engine', 'hbs');

var req1 = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

app.get("/insert",(req,res)=>{
    let{mobile,text}=req.query;
    console.log(mobile,text);
    req1.query({
        "authorization": "YCKFRaoShxrTdA7pmJNgn4ZWGjQVIyMOEfk5w1eD6P2c0bX3vtv60He7xgmWEbB8F9KsGLXzCYthuayp",
        "message": text,
        "language": "english",
        "route": "q",
        "numbers": mobile
    });
    req1.headers({
        "cache-control": "no-cache"
      });

      req1.end(function (res1) {
        if (res1.error) throw new Error(res1.error);
        console.log(res.body);
      });
    res.render("index");      
});

app.listen(2222,()=>{
    console.log("server stattdecvb")
})
