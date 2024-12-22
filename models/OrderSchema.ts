
import mongoose from "mongoose"
import { model , models } from "mongoose"
const Order = new mongoose.Schema({

   items:{type:Object},
   name:String,
   email:String,
   city:String,
   postalAddress:String,
   country:String,
   street:String,
   paid:Boolean


})

export const OrderSchema = models.OrderSchema ||model('OrderSchema',Order) 