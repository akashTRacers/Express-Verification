var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');
console.log("schema file");
// var validateLocalStrategyProperty = function(property) {
//     return ((this.provider !== 'local' && !this.updated) || property.length);
// };
let studentSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
        },
   email:{
    type: String,
    validate: function(email) {
        return /^[a-z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
      } 
   },
   mobile: {
    type: String,
    required:true,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    }
  },
     
   
   password:{
    type: Number,
   }
  
});

module.exports=mongoose.model('students',studentSchema);

