const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

let bucket;
mongoose.connection.on("connected", () => {
  const db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
  console.log(bucket);
});

db.on('error', (err)=> console.error(err));
db.once('open', ()=> console.log("Mongodb connected successfully"))