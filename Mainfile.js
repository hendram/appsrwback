const https = require("https");
const http = require("http");
const express = require("express");
const app = express();
const happ = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const Checkpenghunidb = require('./Checkpenghunidb');
const Insertpenghunidb = require('./Insertpenghunidb');
const Updatepenghunidb = require('./Updatepenghunidb');
const Deletepenghunidb = require('./Deletepenghunidb'); 
const Checkoperatordb = require('./Checkoperatordb'); 
const Checkoperatorsignindb = require('./Checkoperatorsignindb');
const Insertoperatordb = require('./Insertoperatordb');
const Updateoperatordb = require('./Updateoperatordb');


let adminpass = "no";
let newresult = [];


app.use('/', express.static('/home/pinew/appsrw/build'));

app.use(bodyParser.json());

app.use('/user', async function(req, res) {

if(req.body.operatorname && req.body.password && req.body.invite) {
     let resultnya = await Checkoperatordb.checkoperatordb(req.body.operatorname,
           req.body.invite);
                if(resultnya === "find"){
   let resultnya2 = await Updateoperatordb.updateoperatordb(req.body.operatorname, req.body.password,
req.body.invite);
     if(resultnya2 === "1updated"){
         res.send({answer: "ok"});
}
}
}

else {
     if(req.body.operatorname === "adminrwgb" && req.body.password === "123456"){
        res.send({answer: "usethis"});
         }
      else {
     let resultnya = await Checkoperatorsignindb.checkoperatorsignindb(req.body.operatorname,
           req.body.password);
                if(resultnya === "find"){
	   res.send({answer: "ok"});
}
}
}
});

app.use('/operator', async function(req, res) {

if(req.body.operatorname && req.body.invite){
              let resultnya = await Checkoperatordb.checkoperatordb(req.body.operatorname,
           req.body.invite);
            console.log("sampai di checkoperator operator");
                if(resultnya === "notfind"){
                   let resultnya2 = await Insertoperatordb.insertoperatordb(req.body.operatorname,
req.body.invite);
          console.log("sampai notfindnya");
              if(resultnya2 === "1inserted"){
                       res.send({answer: "ok"});
    }
                          }
else {
   res.send({answer:""});
}
}


});


app.use('/isidata', async function(req, res) {
        if(req.body.name && req.body.tempatlahir && req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikunit) {
      let resultnya = await Checkpenghunidb.checkpenghunidb(req.body.name && req.body.tempatlahir 
&& req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikuni);
         if(resultnya === "notfind"){
            let resultnya2 = await Insertpenghunidb.insertpenghunidb(req.body.name &&
 req.body.tempatlahir  && req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikuni);
             if(resultnya2 === "1inserted"){
                 res.send({answer: "ok"});
           }
       }
  }
});


happ.use('*', function(req, res) {
    res.redirect('https://localhost');
});

const options = {
    key: fs.readFileSync("./key.pem", 'utf8'),
    cert: fs.readFileSync("./server.crt", 'utf8'),
};

var server = https.createServer(options, app);
server.listen(443, '', function(req, res) {
           console.log("server started at port 443");
});

const httpServer = http.createServer(happ);
httpServer.listen(80);


