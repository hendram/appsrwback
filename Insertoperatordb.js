const MongoClient = require('mongodb').MongoClient;
 const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function insertoperatordb(operatorname, invitecode) {
  
try{
    await client.connect();
       const dbo = client.db("greenbay");
      const operatortablename = {operatorname: operatorname, password: "", invitecode: invitecode};
      const insoperatortable = await dbo.collection("operator").insertOne(operatortablename);
                if(insoperatortable === null) {
             return "failed to insert operator";
             }
           else if(insoperatortable) {
             return "1inserted";
            }
}
finally{
   await client.close();
}

}

module.exports = {insertoperatordb}
