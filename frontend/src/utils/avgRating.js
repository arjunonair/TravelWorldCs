

const calculateAvgRating = reviews=> {

    const totalRating =  reviews?.reduce((acc, item)=>  
    acc+item.rating, 0);

     //just basic conditional rating
    const avgRating = totalRating === 0 ? "" :
    totalRating === 1 ? 
    totalRating : 
    (totalRating / reviews?.length).toFixed(1); // to fixed means to round up to one decimal point

    return{
        totalRating,
        avgRating
    }
}

export default calculateAvgRating;