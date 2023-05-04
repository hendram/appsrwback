const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchallpenghuniunitdb(tower, unit, lowlimit, highlimit) {
try {
    await client.connect()
    const database = client.db('greenbay');
    const penghunitablename = database.collection('penghuni');

    const exists = await penghunitablename.find({ $and: [{tower: tower}, {unit: unit}]}).project({nama: 1, 
tempatlahir: 1, tgllahir: 1, noktp: 1, nohp: 1, tower: 1, unit: 1, status: 1, periodsewa: 1,
agen: 1, emergencyhp: 1, pemilikunit: 1}).skip(lowlimit).limit(highlimit).toArray();
if (exists.length > 0) {
      console.log(`Found ${exists.length} documents for unit=${unit}`);
      return exists;
    } else {
      console.log(`No documents found for unit=${unit}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching documents: ${error.message}`);
    throw error;
  }

finally {
   await client.close();
}

}


module.exports = {fetchallpenghuniunitdb};

