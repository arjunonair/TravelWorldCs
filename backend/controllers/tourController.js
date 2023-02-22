
import Tour from '../models/Tour.js'

export const createTour = async (req ,res) =>
{
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();
        res.status(200).json({ success: true , message: 'Create Sucessfully', data: savedTour});
    }
    catch (error){
        res.status(200).json({ success: false , message: 'Creation failed'});
    }
}