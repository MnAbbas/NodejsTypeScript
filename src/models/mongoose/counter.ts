import * as mongoose from "mongoose";
import {Promise} from 'es6-promise'

var schema = mongoose.Schema ;
// Define Schemes
const CounterSchema = new schema({
  _id: { type: String, required: true , unique : true  } ,
  seq :{ type: Number, required: true , unique : true  }
},
{
  timestamps: true
});

// Create Model & Export

var CounterModel = mongoose.model("counters", CounterSchema);
function nextone (name : String) : Promise<Number> {
    // var ret = CounterModel.findOneAndUpdate(
    //          { _id: name },
    //          { $inc: { seq: 1 } } ,
    //          {"new": true, upsert: true }         
    // );
    // console.log('Commel',ret.find())
    // return ret.find();

    return new Promise((resolve, reject) => {
        CounterModel.findOneAndUpdate( { _id: name },
            { $inc: { seq: 1 } } ,
            {"new": true, upsert: true } , function(err , update){
                console.log(update.toJSON().seq)
                resolve(parseInt(update.toJSON().seq))
            })    
    });
    
 }


//  export default CounterModel
 export   {nextone}
