import * as mongoose  from "mongoose";
var schema = mongoose.Schema ;
// Define Schemes
const OrderSchema = new schema({
  _id: { type: Number, required: true , unique : true  },
  status: { type: String, required: true } ,
  distance: { type: Number, required: true }

},
{
  timestamps: true
});

// Create Model & Export
// let OrderModel = mongoose.model("orderinfo", OrderSchema);
export const OrderModel = mongoose.model("orderinfo", OrderSchema);

