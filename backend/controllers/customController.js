import Custom from '../models/Custom.js'
import customs from '../routing/customs.js'

export const createCustom = async (req,res) =>
{
    const newCustom = new Custom(req.body);
    try
    {
        const savedCustom = await newCustom.save();
        res.status(200).json({ success: true , message: 'Create Successfully', data: savedCustom});
    }
    catch (error){
        res.status(404).json({ success: false , message: 'Creation failed'});
    }
};

export const updateCustom = async (req, res) =>{
    const id = req.params.id;
    try {
        const updatedCustom = await Custom.findByIdAndUpdate(id,{
            $set : req.body
        },{new : true});
        res.status(200).json({ success: true , message: 'Updated Successfully', data: updatedCustom});
    } catch (error) {
        res.status(404).json({ success: false , message: 'Update Failed'});
    }
}

export const getCustom = async (req,res ) =>{
    try{
        const customGet = await Custom.find({})
        res.status(200).json({ success: true , message: 'Successfully fetched', data: customGet})
    }
    catch(err)
    {
        res.status(404).json({ success: false , message: 'Error get'})
    }
}