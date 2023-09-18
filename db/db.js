const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
 //const MONGO_URI = 'mongodb://127.0.0.1:27017/portal-api';

//console.log(MONGO_URI)
const connectToDB = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('Connected to database!');
    }
    catch (error) {
        console.log(error.message)

        process.exit(1)
    }
}

module.exports = connectToDB;
