const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkoperatorsignindb(operatorname, password) {
try {
    await client.connect()
    const database = client.db('greenbay');
    const operatortablename = database.collection('operator');
    // Query for a movie that has the title 'Back to the Future'
    const query = { operatorname: operatorname, password: password };
  
    const exist = await operatortablename.findOne(query, {operatorname: 1, password: 1, _id: 0});
    if(exist === null ){
      return "notfind";
    }       
    else {
            return "find";
}
}
finally {
   await client.close();
}

}


module.exports = {checkoperatorsignindb};

