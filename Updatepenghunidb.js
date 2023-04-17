const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatepenghunidb(oldnama, oldtempatlahir, oldtgllahir, oldnohp, oldtower, oldunit, oldstatus, oldperiodsewa,
oldagen, oldemergencyhp, oldpemilikunit, nama, tempatlahir, tgllahir, nohp, tower, unit, status, periodsewa,
agen, emergencyhp, pemilikunit) {
try {
    await client.connect()
    const database = client.db('greenbay');
    const penghunidata = database.collection('penghuni');
    // Query for a movie that has the title 'Back to the Future'
    const query = {nama: oldnama, tempatlahir: oldtempatlahir, tgllahir: oldtgllahir, 
nohp: oldnohp, tower: oldtower, unit: oldunit, status: oldstatus, periodsewa: oldperiodsewa, agen:oldagen, 
emergencyhp: oldemergencyhp, pemilikunit: oldpemilikunit };
    const updated = {$set: { nama: nama, tempatlahir: tempatlahir, tgllahir: tgllahir, 
nohp: nohp, tower: tower, unit: unit, status: status, periodsewa: periodsewa, agen:agen, 
emergencyhp: emergencyhp, pemilikunit: pemilikunit }};
    const exist = await penghunidata.updateOne(query, updated);
    if(exist  === null ){
      return "failedupdate";
    }       
    else if(exist !== null) {
            return "1updated";
}
}
finally{
await client.close();
}

}


module.exports = {updatepenghunidb};
