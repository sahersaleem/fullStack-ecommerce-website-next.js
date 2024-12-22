import mongoose, { model, models } from "mongoose";

const categorySchema = new mongoose.Schema({
  name:{
    type:String
  },
  parent:{
    type:mongoose.Types.ObjectId,
    ref:"Category"
  }
  
})

export const Category = models.Category|| model('Category', categorySchema)