import User from '../models/User.js'

export const createUser = async (req,res) =>
{
    const newUser= new User(req.body);

    try{
        const savedUser= await newUser.save();
       res.status(200).json({ success: true , message: 'Create Successfully', data: savedUser});
    }
    catch (error){
        res.status(400).json({ success: false , message: 'Creation failed'});
    }
};

//update
export const updateUser = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedUser= await User.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true});
        res.status(200).json(
            {
                message:'Updated Successfully', success:true, data: updatedUser,
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                message:'Update failed', success:false
            }
        )
    }
}
//delete
export const deleteUser = async(req,res)=>{
    const id = req.params.id
    try {
        const deletedUser= await User.findByIdAndDelete(id);
        res.status(200).json(
            {
                message:'Deleted Successfully', success:true
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                message:'Delete failed', success:false
            }
        )
    }
}
//singleUser
export const singleUser = async(req,res)=>{
    const id = req.params.id
    try {
        const singleUser= await User.findById(id);
        res.status(200).json(
            {
                message:'Fetched Successfully', success:true,data:singleUser
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message:'Fetch failed', success:false
            }
        )
    }
}
//allUser
export const getUsers = async(req,res)=>{
    try {
        const getUsers = await User.find({});
        res.status(200).json(
            {
            message: 'success', count: getUsers.length, success:true,data:getUsers
            }
        )    } 
        catch (err) {
            res.status(404).json(
                {
                    message:'Fetch failed', success:false
                }
            )
    }
}

export const getSearch = async(req,res)=>{

    const title = new RegExp(req.query.title);
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const users = await User.find({title,distance : {$gte:distance}, maxGroupSize: {$lte: maxGroupSize}});
        res.status(200).json({
            message: 'success', success:true, data:users,
        });
    }
        catch (err) {
            res.status(404).json(
                {
                    message:'Fetch failed', success:false
                }
            ) 
    }
}

export const getFeaturedUser = async(req,res)=>{
    try {
        const getFeaturedUsers = await User.find({featured:true}).limit(8);
        res.status(200).json(
        {
            message: 'success',
            count: getFeaturedUsers.length, 
            success:true,
            data:getFeaturedUsers,
        }
        );
    }
    catch (err) {
            res.status(404).json(
                {
                    message:'Fetch failed',
                     success:false,
                }
            )
    }
}

export const getUserCount = async(req,res)=>{
    try {
        const UserCount  = await User.estimatedDocumentCount({});
        res.status(200).json({
            success: true,
            message: "Count obtained",
            data: UserCount,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Count failed",
        })
    }
}

export const getAllUser = async(req,res)=>{
    try {
        const getUsers = await User.find({role:"admin"});
        res.status(200).json(
            {
            message: 'success', count: getUsers.length, success:true,data:getUsers
            }
        )    } 
        catch (err) {
            res.status(404).json(
                {
                    message:'Fetch failed', success:false
                }
            )
    }
}