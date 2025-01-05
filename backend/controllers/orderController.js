import orderModel from "../models/orderModel.js"
import userMOdel from "../models/userModel.js"
// placing order using COD
const placeOrder=async(req,res)=>{
try {
    const {userId,items,amount,address}=req.body
    const orderData={
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }
    const newOrder=new orderModel(orderData)
    await newOrder.save()
    await userMOdel.findByIdAndUpdate(userId,{cartData:{}})

    res.json({success:true,message:"Order placed"})
} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
}
}
// placing order using stripe
const placeOrderStripe=async(req,res)=>{
    
}
// placing order using razorpay
const placeOrderRazorpay=async(req,res)=>{
    
}
// All orders data for admin panel
const allOrders=async(req,res)=>{
try {
    const orders=await orderModel.find({});
    res.json({success:true,orders})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}
// user order data for frontend
const userOrders=async(req,res)=>{
   try {
    const {userId}=req.body;
    const orders=await orderModel.find({userId});
    res.json({success:true,orders})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   } 
}

// update order status from admin panel
const updateStatus=async(req,res)=>{
   try {
    const {orderId,status}=req.body;
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:"Status updated"})
    
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   } 
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}