import axios from "axios";

export const handleCreateProduct = async ({
  title, 
  rate, 
  uploadedImages, 
  price, 
  previousPrice
}
    :{
  title:string, 
  rate:number, 
  uploadedImages:string, 
  price:number, 
  previousPrice:number
}
) => {

    const response = await axios.post('/api/createCard', {
      title,
      rate,
      imageUrls: uploadedImages,
      price,
      previousPrice,
    });

    return response
  };