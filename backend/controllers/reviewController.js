import Tour from "../models/Tour"
import Review from "../models/Review.js"


export const createReview = async(req,res)=> {
    const tourId = req.params.tourId
    const newReview = new Review({ ...req.body})
    
    try {
        const savedReview = await newReview.save()

        //updating review array
        await Tour.findById(tourId, {
            $push: {reviews : savedReview._id}
        })
        res.status(200).json({ success: true , message: 'Review submitted', data: savedReview});

    } catch (err) {
        res.status(200).json({ success: false , message: 'Review failed to submitted'});
    }
}