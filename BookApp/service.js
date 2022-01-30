
const User= require('./model')

const addUser = async (userInput) =>{
    const user=new User(userInput)
    await user.save()
    return user
}

const getUsers = async () =>{
    const users= User.find({})
    return users
}

const setUserPayment = async (userId) =>{
    const update={isPaymentMade: true}
    const updatedUserInfo=await User.findOneAndUpdate({_id:userId}, update, {
        new: true
    })
    
    return updatedUserInfo
    

}
const incrReferralPay = async (userReferralId) =>{
    
    const update={$inc: {totalEarnings: 10}}
    
    const increasePay=await User.findOneAndUpdate({_id:userReferralId}, update, {
        new: true
    })
    return increasePay        
    
}
module.exports= {addUser, getUsers, setUserPayment, incrReferralPay}