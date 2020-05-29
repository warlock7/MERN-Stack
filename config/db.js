const mongoose = require('mongoose')
const keys = require('./keys')

const connectDB = async () => {
    try{
        const con = await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true, useUnifiedTopology: true
        })

        console.log("MongoDB Connected")
    }
    catch(err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB