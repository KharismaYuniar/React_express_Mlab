const express = require ('express');
const app = express();
const cors    = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://kharis:yuniar17@ds235239.mlab.com:35239/toko';

MongoClient.connect(url, function (err, db){
    console.log("Terhubung Ke MongoDB!")
});



app.get('/data',(req, res)=>{
MongoClient.connect(url,(err, db)=>{
var collection = db.collection('karyawan');
collection.find({}).toArray((err,docs)=>{
console.log(docs);
res.send(docs);

}); }); });


app.post('/data', (req, res)=>{
MongoClient.connect(url, (err, db)=>{
var data = {nama:req.body.nama, usia:req.body.usia, kota:req.body.kota};
var collection = db.collection('karyawan');
collection.insert(data, (err, result)=>{
console.log(result);
res.send(result);

}); }); });

app.listen(3100,()=>{
    console.log('server @port 3100')
})