var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');
console.log("schema file");
var validateLocalStrategyProperty = function(property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
};
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
    validate: {
      isAsync: true,
      validator: function(v, cb) {
        setTimeout(function() {
          var phoneRegex = /\d{3}-\d{3}-\d{4}/;
          var msg = v + ' is not a valid phone number!';
          cb(phoneRegex.test(v), msg);
        }, 5);
      },
    message: 'Default error message'
    },
    required: [true, 'User phone number required']
  },
     
   
   password:{
    type: Number,
   }
  
});

module.exports=mongoose.model('students',studentSchema);

