const config=require('./config/config')
const express=require('express')
const connectDB=require('./config/db')
const { getUsers, addUser, setUserPayment, incrReferralPay } = require('./service')

connectDB()
const app= express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use('/', authRoute)

app.get('/api/users/', async(req,res)=>{
    // res.send('hello')
    try {
        const getAllUsers= await getUsers()
        res.json(getAllUsers)        
    } catch (error) {
        console.log(error)
        res.json('Something went wrong')
    }
})
app.post('/api/user/add/', async(req,res)=>{
    // res.send('hello')
    const {body}= req
    try {
        const newUser= await addUser(body)
        res.json(newUser)        
    } catch (error) {
        console.log(error)
        res.json('Something went wrong')
    }
})
app.put('/api/pay/', async(req,res)=>{
    // res.json('')
    try {
        const {userId}= req.body
        const updateUserPayment= await setUserPayment(userId)
        const increaseRefPay= await incrReferralPay(updateUserPayment.referredUser)
        res.json(increaseRefPay)
    } catch (error) {
        console.log(error)
        res.json('Something went wrong')
    }
    
    // const updateUserPayment= ;
})
  
app.listen(config.port,()=>{
    console.log(`Server running in ${config.nodeEnv} on port ${config.port} on db- ${config.mongoUrl}`);
})