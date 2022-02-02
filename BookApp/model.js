const mongoose= require('mongoose')
// Name: string,
// ○ Email: String
// ○ ReferredUser: User ( current model)
// ○ isPaymentMade: Boolean
// ○ TotalEarnings: Number
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    referredUser:{
        // type: this,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    isPaymentMade:{
        type:Boolean,
        default:false
    },
    totalEarnings:{
        type:Number,
        default:0
    }
})
const populateUser = function (next) {
    this.populate(
      "referredUser",
      "_id name email referredUser isPaymentMade totalEarnings"
    );
    next();
  };
  
userSchema.pre("find", populateUser)
.pre("findOne", populateUser)
.pre("findOneAndUpdate", populateUser);
  
module.exports=mongoose.model('User',userSchema)