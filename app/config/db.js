const mongoose = require('mongoose');

const dbConnecton = async () => {
    try {
      const connection = await mongoose.connect(
        "mongodb+srv://souravdas91:C8zCvBRpy3ZU7sor@crud.hbuvcvm.mongodb.net/crud_app"
      );
      if (connection) {
        console.log("Connected to mongodb");
      }
    } catch (err) {
      console.log(`error in mongodb conneciton ${err}`);
    }
}
module.exports = dbConnecton;