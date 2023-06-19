import Booking from "../models/Booking.js";

export const newBook = async(req,res)=>
{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({ success: true , message: 'Booking success',data:savedBooking})

    } catch (err) {
         res.status(500).json({ success: false , message: 'server error'})
    }
}

export const getBooking = async(req, res)=>
{
    try{
    const userId = new RegExp(req.query.userId)
    const book = await Booking.find({"userId": userId});
    res.status(200).json({ success: true , message: 'Booking data',data:book})
    }
    catch(err)
    {
        res.status(404).json(
                {
                    message:'not found', success:false
                }
            )
    }
}
export const getAllBooking = async(req, res)=>
{
    try{
    const books = await Booking.find();
    res.status(200).json({ success: true , message: 'Booking data',data:books})
    }
    catch(err)
    {
        res.status(500).json(
                {
                    message:'internal server error', success:false
                }
            )
    }
}
