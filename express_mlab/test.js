var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://agan:12345@localhost:27017/toko';

MongoClient.connect(url, function(err, db) {
    console.log("Terhubung ke MongoDB!");
    findData(db, function() {
    db.close();
    });});
    var findData = function(db, callback) {
    var collection = db.collection('karyawan');
    collection.find({}).toArray(function(err, docs) {
    console.log("Berikut data yang tersimpan:");
    console.log(docs)
    callback(docs);
    });
    }