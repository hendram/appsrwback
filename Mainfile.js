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
const Deleteoperatordb = require('./Deleteoperatordb');
const Checkoperatorid = require('./Checkoperatorid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
let adminpass = "no";
let newresult = [];

const admin = [{
id: 1,
username: "Sekretariat_Rw10",
password: "greenbaypluit"
}];

app.use('/', express.static('/home/pinew/appsrw/build'));

app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))

app.use(bodyParser.json());

app.use('/user', async function(req, res) {
        const {operatorname, password, invite} = req.body;

if(operatorname && password && invite) {
     let resultnya = await Checkoperatordb.checkoperatordb(operatorname,
           invite);
                if(resultnya){
   let resultnya2 = await Updateoperatordb.updateoperatordb(operatorname, password,
invite);
     if(resultnya2 === "1updated"){
       const tokenu = jwt.sign({id: resultnya._id}, process.env.JWT_SECRET);
         res.json({tokenu});
}
       else {
          res.send({kosong: ""});
       }
}
}

else {
        const user = admin.find(a => a.username === operatorname && a.password === password);
        const token = jwt.sign ({ id: admin.id}, process.env.JWT_SECRET);
   if(user){      
  res.json({token});
       console.log(user);
}
    else {
     let resultnya = await Checkoperatorsignindb.checkoperatorsignindb(operatorname,
          password);
                if(resultnya){
       const tokenu = jwt.sign({id: resultnya._id}, process.env.JWT_SECRET);
	   res.json({tokenu});
}
       else {
          console.log("masuk ke kosong");
          res.send({kosong: ""});
       }
}
}
});

app.use('/operator', async function(req, res) {

const { operatorname, invite } = req.body;
const token = req.headers.authorization;
  if(!token) {
   return res.status(401).json({message: 'No token provided' });
 }
else {
 try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Find the user by ID
     if(admin.id == userId){
         if(operatorname && invite){
              let resultnya = await Checkoperatordb.checkoperatordb(operatorname,
           invite);
            console.log("sampai di checkoperator operator");
                if(resultnya === "notfind"){
                   let resultnya2 = await Insertoperatordb.insertoperatordb(operatorname, invite);
          console.log("sampai notfindnya");
              if(resultnya2 === "1inserted"){
                       res.send({answer: "ok"});
    }
   else {
     res.send({answer: "notok"});
   }      
}                    // closing if resultnya
     else {
     res.send({answer: "notok"});
   } 
}    // closing if reqbodyoperator and reqbodyinvite
else if(operatorname){
     let resultnya = await Deleteoperatordb.deleteoperatordb(operatorname);
            if(resultnya === "1deleted"){
          console.log("dah didelete ini operatornya");
             res.send({answer: "ok"});
    }
}
else {
   res.send({kosong: ""});
}
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
});


app.use('/isidata', async function(req, res) {
  const { nama, tempatlahir, tgllahir, noktp, nohp, tower, unit, status, periodsewa, agen, emergencyhp,
pemilikunit } = req.body;

const tokenu = req.headers.authorization;
 console.log(tokenu);
  if(!tokenu) {
   return res.status(401).json({message: 'No token provided' });
 }

else {
 try {
    const decoded = jwt.verify(tokenu, process.env.JWT_SECRET);
   const userId = decoded.id;
   console.log(userId); 

    let resultusercheck = await Checkoperatorid.checkoperatorid(userId);
        console.log(resultusercheck);
        if(resultusercheck){

        if(nama && tempatlahir && tgllahir && noktp && nohp &&
tower && unit && status && periodsewa && agen &&
emergencyhp && pemilikunit) {
      let resultnya = await Checkpenghunidb.checkpenghunidb(nama, tempatlahir 
, tgllahir , noktp, nohp ,
tower , unit , status , periodsewa , agen ,
emergencyhp , pemilikunit);
            console.log("dalam isidata");
         if(resultnya === "notfind"){
            let resultnya2 = await Insertpenghunidb.insertpenghunidb(nama ,
 tempatlahir  , tgllahir , noktp, nohp ,
tower , unit , status , periodsewa , agen ,
emergencyhp , pemilikunit);
             if(resultnya2 === "1inserted"){
                 res.send({answer: "ok"});
           }
       else {
          res.send({kosong: ""});
       }
       }
  }
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
});

app.use('/caridatanama', async function(req, res) {
 const { nama, lowlimit, highlimit } = req.body;

const tokenu = req.headers.authorization;
  if(!tokenu) {
   return res.status(401).json({message: 'No token provided' });
 }
else {
 try {
    const decoded = jwt.verify(tokenu, process.env.JWT_SECRET);
    const userId = decoded.id;
    let resultusercheck = await Checkoperatorid.checkoperatorid(userId);
        if(resultusercheck){

  if(nama && lowlimit && highlimit){
        let resultnya = await Fetchallpenghuninamadb.fetchallpenghuninamadb(nama, Number(lowlimit), Number(highlimit));
          console.log(resultnya);
        if(resultnya){
      res.send({answer: resultnya});    
 }
       else {
          res.send({kosong: ""});
       }
}  
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
});


app.use('/caridataunit', async function(req, res) {
const { tower, unit, lowlimit, highlimit } = req.body;

const tokenu = req.headers.authorization;
  if(!tokenu) {
   return res.status(401).json({message: 'No token provided' });
 }
else {
 try {
    const decoded = jwt.verify(tokenu, process.env.JWT_SECRET);
    const userId = decoded.id;
    let resultusercheck = await Checkoperatorid.checkoperatorid(userId);
        if(resultusercheck){

  if(tower && unit && lowlimit && highlimit){
        let resultnya = await Fetchallpenghuniunitdb.fetchallpenghuniunitdb(tower, unit, Number(lowlimit),
Number(highlimit));
          console.log(resultnya);
        if(resultnya){
      res.send({answer: resultnya});    
 }
       else {
          res.send({kosong: ""});
       }
}  
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
});

app.use('/action', async function(req, res) {
const {nama, tempatlahir, tgllahir, noktp, nohp, tower, unit, status, periodsewa, agen, emergencyhp,
pemilikunit } = req.body;      

const tokenu = req.headers.authorization;
  if(!tokenu) {
   return res.status(401).json({message: 'No token provided' });
 }
else {
 try {
    const decoded = jwt.verify(tokenu, process.env.JWT_SECRET);
    const userId = decoded.id;
    let resultusercheck = await Checkoperatorid.checkoperatorid(userId);
        if(resultusercheck){

 if(nama && tempatlahir && tgllahir && noktp && nohp &&
tower && unit && status && periodsewa && agen &&
emergencyhp && pemilikunit) {
      let resultnya = await Deletepenghunidb.deletepenghunidb(nama, tempatlahir 
, tgllahir , noktp, nohp ,
tower , unit , status , periodsewa , agen ,
emergencyhp , pemilikunit);
         if(resultnya === "1deleted"){
           res.send({answer: "ok"});
}
       else {
          res.send({kosong: ""});
       }
}
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
});

app.use('/updatedata', async function(req, res) {

const { oldnama, oldtempatlahir, oldtgllahir, oldnoktp, oldnohp, oldtower, oldunit, oldstatus, oldperiodsewa,
oldagen, oldemergencyhp, oldpemilikunit, nama, tempatlahir, tgllahir, noktp, nohp, tower, unit, status, 
periodsewa, agen,
emergencyhp, pemilikunit } = req.body;

const tokenu = req.headers.authorization;
  if(!tokenu) {
   return res.status(401).json({message: 'No token provided' });
 }
else {
 try {
    const decoded = jwt.verify(tokenu, process.env.JWT_SECRET);
    const userId = decoded.id;
    let resultusercheck = await Checkoperatorid.checkoperatorid(userId);
        if(resultusercheck){


        if(oldnama && oldtempatlahir && oldtgllahir && oldnoktp && 
oldnohp && oldtower && oldunit && oldstatus && oldperiodsewa && oldagen &&
oldemergencyhp && oldpemilikunit && nama && tempatlahir && tgllahir && noktp && nohp &&
tower && unit && status && periodsewa && agen &&
emergencyhp && pemilikunit) {
      let resultnya = await Updatepenghunidb.updatepenghunidb(oldnama, oldtempatlahir 
, oldtgllahir , oldnoktp, oldnohp ,
oldtower , oldunit , oldstatus , oldperiodsewa , oldagen ,
oldemergencyhp , oldpemilikunit, nama, tempatlahir 
, tgllahir , noktp, nohp ,
tower , unit , status , periodsewa , agen ,
emergencyhp , pemilikunit);
  if(resultnya === "1updated"){
           res.send({answer: "ok"});
     console.log(resultnya);
}       
       else {
          res.send({kosong: ""});
       } 
}
}
}
catch (err) {
    res.status(401).json({ message: 'Invalid token' });
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
 
  if(code === 0){


  res.set('Content-Type', 'application/zip');
  res.download('/home/pinew/backup/greenbay.zip', err => {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      // Delete the zip file after it has been sent
     fs.unlinkSync('/home/pinew/backup/greenbay.zip');
 const spawnvar = spawn('./Removegreenbay.sh', 
['']);
    }
  });
}

});

}


});


app.use('/restoredb', async function(req, res) {

  // Create a writable stream to the desired file location
  const fileStream = fs.createWriteStream('/home/pinew/backup/greenbay.zip');

  // Write the file data to the writable stream
  req.on('data',  function(chunk) {
  fileStream.write(chunk);
  });

  // Close the writable stream
  req.on('end', function() {
  fileStream.end()
   });

  // Send a response to the client

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
 const spawnvar = spawn('./Removeallgreenbay.sh', 
['']);
         res.send({answer: "ok"});
});


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
