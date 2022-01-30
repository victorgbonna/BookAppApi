// const mongoose = require("mongoose");

// const JobSchema = new mongoose.Schema({
//   image: {
//     type: Object,
//   },
//   enabled: {
//     type: Boolean,
//     default: false,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   category: {
//     type: String,
//   },
//   url: {
//     type: String,
//   },
//   ratings: {
//     type: [Object],
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   for_: {
//     type: String,
//     enum: ["seller", "buyer"],
//     default: "buyer",
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   imageURL: {
//     type: String,
//     required: true,
//   },
// });

// const populateUser = function (next) {
//   this.populate(
//     "referredUser",
//     "_id name email referredUser isPaymentMade totalEarnings"
//   );
//   next();
// };

// JobSchema.pre("find", populateUser)
//   .pre("findOne", populateUser)
//   .pre("findOneAndUpdate", populateUser);

// const Job = mongoose.model("Job", JobSchema);

// module.exports = Job;
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