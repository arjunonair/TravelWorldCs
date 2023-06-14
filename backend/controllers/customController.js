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
        res.status(200).json({ success: false , message: 'Creation failed'});
    }
};