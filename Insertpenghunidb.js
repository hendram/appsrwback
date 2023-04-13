const MongoClient = require('mongodb').MongoClient;
 const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function insertpenghunidb(nama, tempatlahir, tgllahir, nomorhp, towernum, unitnum, statusnya,
periodsewa, agennya, noemergency, pemilikunit) {
  
try{
    await client.connect();
       const dbo = client.db("greenbay");
      const penghunitablename = {no: autogen, name: nama, birthplace: tempatlahir, birthday: tgllahir,
 npno: nomorhp, tower: towernum, unit: unitnum, status: statusnya, rentperiod: periodsewa, 
 agency: agennya, emergencyno: noemergency, unitowner: pemilikunit};
      const inspenghunitable = await dbo.collection("penghuni").insertOne(penghunitablename);
                if(inspenghunitable === null) {
             return "failed to insert penghuni";
             }
           else if(inspenghunitable) {
             return "1inserted";
            }
}
finally{
   await client.close();
}

}

module.exports = {insertpenghunidb}
