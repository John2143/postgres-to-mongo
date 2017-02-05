const config = require("./config.js");

const pg = require("pg");
const mongodb = require("mongodb");

const mongoclient = new mongodb.MongoClient();
let pgclient = new pg.Client(config.pg);

const schema = config.schema;
mongoclient.connect(config.mongo).then(db => {
    pgclient.connect();
    let completed = 0;
    for(let x of Object.keys(schema)){
        let coll = db.collection(x);
        coll.remove({});
        let curSchema = schema[x];

        pgclient.query("SELECT * FROM " + x).on("row", row => {
            let newObj = {};
            for(let index of Object.keys(curSchema)){
                //Apply the schema function to the row item
                //Then add it to the object
                newObj[index] = curSchema[index](row[index]);
            }
            coll.insertOne(newObj);
        }).on("end", result => {
            console.log(`Finished porting ${x}. ${result.rowCount}`);
            if(++completed === Object.keys(schema).length){
                db.close();
                pgclient.end();
            }
        });
    }
});
