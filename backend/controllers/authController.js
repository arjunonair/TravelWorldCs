
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


//user registration
export const register = async(req, res) =>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo:req.body.photo
        })

        await newUser.save();

        res.status(200).json({ success: true , message: 'Successfully created new user'})
    }catch (err){
        res.status(404).json({ success: false , message: 'Failed to create new user'})
    }
}
//user login
export const login = async(req, res)=>{
    const email = req.body.email;

    try {
        const user = await User.findOne({ email })
        if(!user){
            res.status(404).json({ success: false , message: 'No account found'});
        }
        const checkPassword = await bcrypt.compare(req.body.password,user.password)
        if(!checkPassword){
            res.status(404).json({
                success:false,
                message:'Wrong password',
            })
        }

        const { password, role, ...rest } = user._doc;//taking pass and role only from user to text formatting by ._doc

        const token = jwt.sign(
            { id:user._id, role:user.role },
            process.env.JWT_SECRET_KEY,
            {expiresIn :'15d'},
        )
            //token in browser cookie and sending response
        res.cookie('accessToken' , token ,{
            httpOnly:true,
            expires: new Date(Date.now() + 15 *24 *60 *60* 1000)
            // expires:token.expiresIn
        }).status(200).json({
            token,
            data:  {...rest},
            role,
        })
    }
    catch (err){
        console.log(err)
        //res.status(403).json({ success: false , message: 'failed to login'})
    }
}