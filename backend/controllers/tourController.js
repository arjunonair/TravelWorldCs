
import Tour from '../models/Tour.js'
import tours from '../routing/tours.js'

export const createTour = async (req,res) =>
{
    const newTour = new Tour(req.body);
    try
    {
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
        res.status(400).json(
            {
                message:'Delete failed', success:false
            }
        )
    }
}
//singleTour
export const singleTour = async(req,res)=>{
    const id = req.params.id
    try {
        const singleTour = await Tour.findById(id).populate("reviews");
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

export const getAllTour = async(req,res)=>{
    //pagination
    const page = parseInt(req.query.page);
    console.log(page);

    try{
        const getTours = await Tour.find({}).populate("reviews").skip(page*8).limit(8);
        res.status(200).json({
            message: 'success', count: getTours.length, success:true,data:getTours
        })
    } 
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
        const tours = await Tour.find({title,distance : {$gte:distance}, maxGroupSize: {$gte: maxGroupSize}}).populate
        ("reviews");
        res.status(200).json({
            message: 'success', success:true, data:tours,
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

export const getFeaturedTour = async(req,res)=>{
    try {
        const getFeaturedTours = await Tour.find({featured:true}).populate("reviews").limit(8);
        res.status(200).json(
        {
            message: 'success',
            count: getFeaturedTours.length, 
            success:true,
            data:getFeaturedTours,
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

export const getTourCount = async(req,res)=>{
    try {
        const TourCount  = await Tour.estimatedDocumentCount({});
        res.status(200).json({
            success: true,
            message: "Count obtained",
            data: TourCount,
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "Count failed",
        })
    }
}