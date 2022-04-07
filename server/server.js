var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var mongodb = require('mongodb');
const Json2csvParser = require("json2csv").Parser;
const fs=require('fs');

var client = mongodb.MongoClient;


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/end', function (req, res) {
    client.connect('mongodb://localhost:27017', function(err, db){
        if(err) throw err;
        const my_db = db.db('Questionnaire');
        my_db.collection('responses').insertOne(req.body, function(err, res){
            if(err) throw err;
            console.log("Document inserted");
            db.close();
        });
        
    });
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/download', function (req, res) {
    client.connect('mongodb://localhost:27017', {useNewUrlParser:true,useUnifiedTopology:true},
     (err, db)=>{
        if(err) throw err;
        const my_db = db.db('Questionaire');
        my_db.collection('responses').find({}).toArray(function (err, result){
            if(err) throw err;
            console.log(result);
            const json2csvParser = new Json2csvParser({header:true});
            const csvData = json2csvParser.parse(result);
            fs.writeFile("../client/src/components/list.csv",csvData,function(error){
                if(error) throw error;
                console.log("Write successful");
            })
            db.close();
        })
    }) 
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server started");
});
