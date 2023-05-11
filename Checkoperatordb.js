const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkoperatordb(operatorname, invite) {
try {
    await client.connect()
    const database = client.db('greenbay');
    const operatortablename = database.collection('operator');
    // Query for a movie that has the title 'Back to the Future'
    const query = { invitecode: invite, operatorname: operatorname };
  
    const exist = await operatortablename.findOne(query, {invitecode: 1, operatorname: 1, _id: 1});
    if(exist === null ){
      return "notfind";
    }       
    else {
            return exist;
}
}
finally {
   await client.close();
}

}


module.exports = {checkoperatordb};

