require('dotenv').config()

module.exports={
    port:parseInt(process.env.PORT),
    nodeEnv:process.env.NODE_ENV ,
    mongoUrl:process.env.MONGODB_BOOKAPP
}