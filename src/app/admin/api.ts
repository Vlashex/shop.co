import axios from "axios";

export const uploadImages = async (images: any) => {
    const uploadedUrls:string[] = [];
    for (const image of images) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(image);
      reader.onloadend = async () => {
        const base64Image = btoa(
          new Uint8Array(reader.result).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );

        const response = await axios.post('/api/upload', {
          imagePath: `product-images/${image.name}`,
          imageContent: base64Image,
        });

        uploadedUrls.push(response.data.uploadUrl);
        if (uploadedUrls.length === images.length) {
          return uploadedUrls
        }
      };
    }
  };

export const handleCreateProduct = async (
    {title, rate, uploadedImages, price, previousPrice}
    :{title:string, rate:number, uploadedImages:string, price:number, previousPrice:number}
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