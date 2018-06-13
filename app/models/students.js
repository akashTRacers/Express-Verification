let mongoose= require('mongoose');
console.log("schema file");
let studentSchema= mongoose.Schema({
 
   email:{
       type:String,
       required: true
   },
   mobile:{
       type:Number,
       required: true
   }, 
   password:{
       type:String,
       required: true
   }

});

module.exports=mongoose.model('students',studentSchema);

