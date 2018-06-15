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
    validate: {
        validator: function(email) {
          return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        },
        message: '{VALUE} is not a valid email!'
      }
   },
   mobile: {
    type: String,
    required:true,
    validate: {
      validator: function(v) {
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v)
      },
      minlength: 10,
      maxlength: 10,
      message: '{VALUE} is not a valid phone number!'
    }
  },
     
   
   password:{
    type: Number,
   }
  
});

module.exports=mongoose.model('students',studentSchema);

