const MongoClient = require('mongodb').MongoClient;
 const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function insertpenghunidb(nama, tempatlahir, tgllahir, nohp, tower, unit, status, periodsewa,
agen, emergencyhp, pemilikunit) {
  
try{
    await client.connect();
       const dbo = client.db("greenbay");
      const penghunitablename = {nama: nama, tempatlahir: tempatlahir, tgllahir: tgllahir, 
nohp: nohp, tower: tower, unit: unit, status: status, periodsewa: periodsewa, agen:agen, 
emergencyhp: emergencyhp, pemilikunit: pemilikunit};
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
