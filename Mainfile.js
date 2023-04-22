const https = require("https");
const http = require("http");
const express = require("express");
const app = express();
const happ = express();
const { spawn } = require('child_process');
const fs = require("fs");
const bodyParser = require("body-parser");
const Checkpenghunidb = require('./Checkpenghunidb');
const Insertpenghunidb = require('./Insertpenghunidb');
const Updatepenghunidb = require('./Updatepenghunidb'); 
const Deletepenghunidb = require('./Deletepenghunidb');  
const Fetchallpenghuninamadb = require('./Fetchallpenghuninamadb');
const Fetchallpenghuniunitdb = require('./Fetchallpenghuniunitdb');
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
       else {
          res.send({kosong: ""});
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
       else {
          res.send({kosong: ""});
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
   res.send({kosong: ""});
}
}


});


app.use('/isidata', async function(req, res) {
        if(req.body.nama && req.body.tempatlahir && req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikunit) {
      let resultnya = await Checkpenghunidb.checkpenghunidb(req.body.nama, req.body.tempatlahir 
, req.body.tgllahir , req.body.nohp ,
req.body.tower , req.body.unit , req.body.status , req.body.periodsewa , req.body.agen ,
req.body.emergencyhp , req.body.pemilikunit);
            console.log("dalam isidata");
         if(resultnya === "notfind"){
            let resultnya2 = await Insertpenghunidb.insertpenghunidb(req.body.nama ,
 req.body.tempatlahir  , req.body.tgllahir , req.body.nohp ,
req.body.tower , req.body.unit , req.body.status , req.body.periodsewa , req.body.agen ,
req.body.emergencyhp , req.body.pemilikunit);
             if(resultnya2 === "1inserted"){
                 res.send({answer: "ok"});
           }
       else {
          res.send({kosong: ""});
       }
       }
  }
});

app.use('/caridatanama', async function(req, res) {
  if(req.body.nama && req.body.lowlimit && req.body.highlimit){
             console.log(req.body.lowlimit);
        let resultnya = await Fetchallpenghuninamadb.fetchallpenghuninamadb(req.body.nama, Number(req.body.lowlimit), Number(req.body.highlimit));
          console.log(resultnya);
        if(resultnya){
      res.send({answer: resultnya});    
 }
       else {
          res.send({kosong: ""});
       }
}  
});


app.use('/caridataunit', async function(req, res) {
  if(req.body.tower && req.body.unit && req.body.lowlimit && req.body.highlimit){
        let resultnya = await Fetchallpenghuniunitdb.fetchallpenghuniunitdb(req.body.tower, req.body.unit, Number(req.body.lowlimit),
Number(req.body.highlimit));
          console.log(resultnya);
        if(resultnya){
      res.send({answer: resultnya});    
 }
       else {
          res.send({kosong: ""});
       }
}  
});

app.use('/action', async function(req, res) {
        if(req.body.nama && req.body.tempatlahir && req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikunit) {
      let resultnya = await Deletepenghunidb.deletepenghunidb(req.body.nama, req.body.tempatlahir 
, req.body.tgllahir , req.body.nohp ,
req.body.tower , req.body.unit , req.body.status , req.body.periodsewa , req.body.agen ,
req.body.emergencyhp , req.body.pemilikunit);
         if(resultnya === "1deleted"){
           res.send({answer: "ok"});
}
       else {
          res.send({kosong: ""});
       }
}
});

app.use('/updatedata', async function(req, res) {
        if(req.body.oldnama && req.body.oldtempatlahir && req.body.oldtgllahir && req.body.oldnohp &&
req.body.oldtower && req.body.oldunit && req.body.oldstatus && req.body.oldperiodsewa && req.body.oldagen &&
req.body.oldemergencyhp && req.body.oldpemilikunit && req.body.nama && req.body.tempatlahir && req.body.tgllahir && req.body.nohp &&
req.body.tower && req.body.unit && req.body.status && req.body.periodsewa && req.body.agen &&
req.body.emergencyhp && req.body.pemilikunit) {
      let resultnya = await Updatepenghunidb.updatepenghunidb(req.body.oldnama, req.body.oldtempatlahir 
, req.body.oldtgllahir , req.body.oldnohp ,
req.body.oldtower , req.body.oldunit , req.body.oldstatus , req.body.oldperiodsewa , req.body.oldagen ,
req.body.oldemergencyhp , req.body.oldpemilikunit, req.body.nama, req.body.tempatlahir 
, req.body.tgllahir , req.body.nohp ,
req.body.tower , req.body.unit , req.body.status , req.body.periodsewa , req.body.agen ,
req.body.emergencyhp , req.body.pemilikunit);
  if(resultnya === "1updated"){
           res.send({answer: "ok"});
     console.log(resultnya);
}       
       else {
          res.send({kosong: ""});
       } 
}
});

app.use('/backupdb', async function(req, res) {
      if(req.body.backup === "ok") {
    const spawnvar = spawn('./Backupscript.sh', 
['']);

spawnvar.on('error', (error) => {
  console.error(`Failed to start child process: ${error}`);
});

spawnvar.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
     spawnvar.on('close', (code) => {
         console.log(`child process exited with code ${code}`);
});
}

});


app.use('/restoredb', async function(req, res) {
      if(req.body.restore === "ok") {
    const spawnvar = spawn('./Restorescript.sh', 
['']);

spawnvar.on('error', (error) => {
  console.error(`Failed to start child process: ${error}`);
});

spawnvar.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
     spawnvar.on('close', (code) => {
         console.log(`child process exited with code ${code}`);
});
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
