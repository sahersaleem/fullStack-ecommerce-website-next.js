import mongoose, { model, models } from "mongoose";

const productsSchema = new mongoose.Schema({
  name:{
    type:String
  },
  title:{
    type:String
  },
  category:{
    type:String
  },
  description:{
    type:String
  },
  price:{
    type:String
  }}
)

export const Product = models.Product || model('Product', productsSchema)