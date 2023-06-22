
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRouter from './routing/tours.js'
import userRouter from './routing/users.js'
import authRouter from './routing/auth.js'
import reviewRouter from './routing/review.js'
import bookingRouter from './routing/booking.js'
import customRouter from './routing/customs.js'
import mailRouter from './routing/mail.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOption = {
    origin: true,
    credentials: true,
}

//test
// app.get('/',(req,res)=> {
//     res.send("api is working");
// })

//Db
mongoose.set("strictQuery",false);
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });

        console.log('Mongo is connected');
    } catch (error) {

        console.log('Mongo is not connected');
    }
}

//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/tours",tourRouter);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/review",reviewRouter);
app.use("/api/v1/booking",bookingRouter);
app.use("/api/v1/custom",customRouter);
app.use("/api/v1/email",mailRouter);

app.listen(port, ()=>
{
    connect();
    console.log('server listening on port',port);
})