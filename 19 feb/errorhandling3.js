const promise=require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connenct(url).then(function(err,db){
    db.collection("customers").updateOne({
        "Name":"John"
    },{
        $set:{
            "Name":"John Doe"
        }

    });
})
.catch(error => alert(error.message));