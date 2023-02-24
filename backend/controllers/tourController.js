
import Tour from '../models/Tour.js'
import tours from '../routing/tours.js'
export const createTour = async (req,res) =>
{
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();
        res.status(200).json({ success: true , message: 'Create Successfully', data: savedTour});
    }
    catch (error){
        res.status(200).json({ success: false , message: 'Creation failed'});
    }
};

//update
export const updateTour = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true});
        res.status(200).json(
            {
                message:'Updated Successfully', success:true, data: updatedTour
            }
        )
        
    } catch (error) {
        res.status(200).json(
            {
                message:'Updation failed', success:false
            }
        )
    }
}
//delete
export const deleteTour = async(req,res)=>{
    const id = req.params.id
    try {
        const deletedTour = await Tour.findByIdAndDelete(id);
        res.status(200).json(
            {
                message:'Deleted Successfully', success:true
            }
        )
        
    } catch (error) {
        res.status(200).json(
            {
                message:'Delete failed', success:false
            }
        )
    }
}
//singletour
export const singleTour = async(req,res)=>{
    const id = req.params.id
    try {
        const singleTour = await Tour.findById(id);
        res.status(200).json(
            {
                message:'Fetched Successfully', success:true,data:singleTour
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
//allTour
export const getTour = async(req,res)=>{
    try {
        const getTours = await Tour.find({})
        res.status(200).json({
            message: 'success', success:true,data:getTours
        })    } 
        catch (err) {
            res.status(404).json(
                {
                    message:'Fetch failed', success:false
                }
            )
    }
}