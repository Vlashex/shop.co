import { ICard } from "./types";

const TSHIRT_IMAGES = [
    "/products/1.png",
    "/products/2.png",
    "/products/3.png"
  ];
  
  const SHORTS_IMAGES = [
    "/products/4.png",
    "/products/5.png",
    "/products/6.png"
  ];
  
  const SHIRT_IMAGES = [
    "/products/7.png",
    "/products/8.png",
    "/products/9.png"
  ];
  
  const HOODIE_IMAGES = [
    "/products/10.png",
    "/products/11.png",
    "/products/12.png"
  ];
  
  const JEANS_IMAGES = [
    "/products/13.png",
    "/products/14.png",
    "/products/15.png"
  ];

export  const products: ICard[] = [
    {
      id: 1,
      title: "Basic Black T-Shirt",
      price: 29.9,
      previousPrice: 39.9,
      rate: 4.7,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["black"]
    },
    {
      id: 2,
      title: "White Cotton T-Shirt",
      price: 25.5,
      previousPrice: 34.9,
      rate: 4.5,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["X-Small", "Small", "Medium"],
      styles: ["casual"],
      colors: ["white"]
    },
    {
      id: 3,
      title: "Blue Oversize T-Shirt",
      price: 31.9,
      previousPrice: 44.9,
      rate: 4.8,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["blue"]
    },
    {
      id: 4,
      title: "Grey Sport T-Shirt",
      price: 27.0,
      previousPrice: 36.0,
      rate: 4.4,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["grey"]
    },
  
    {
      id: 5,
      title: "Casual Summer Shorts",
      price: 35.0,
      previousPrice: 42.0,
      rate: 4.6,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["beige"]
    },
    {
      id: 6,
      title: "Black Fitness Shorts",
      price: 33.5,
      previousPrice: 39.0,
      rate: 4.3,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["black"]
    },
    {
      id: 7,
      title: "Navy Casual Shorts",
      price: 38.0,
      previousPrice: 45.9,
      rate: 4.7,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["blue"]
    },
    {
      id: 8,
      title: "Urban Grey Shorts",
      price: 29.0,
      previousPrice: 35.0,
      rate: 4.2,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["grey"]
    },
  
    {
      id: 9,
      title: "Classic White Shirt",
      price: 49.9,
      previousPrice: 59.9,
      rate: 4.8,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["white"]
    },
    {
      id: 10,
      title: "Blue Formal Shirt",
      price: 52.5,
      previousPrice: 65.0,
      rate: 4.7,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["blue"]
    },
    {
      id: 11,
      title: "Grey Linen Shirt",
      price: 44.9,
      previousPrice: 55.0,
      rate: 4.6,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Small", "Medium"],
      styles: ["casual"],
      colors: ["grey"]
    },
    {
      id: 12,
      title: "Black Relaxed Shirt",
      price: 47.9,
      previousPrice: 62.0,
      rate: 4.5,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["black"]
    },
  
    {
      id: 13,
      title: "Black Heavy Hoodie",
      price: 69.9,
      previousPrice: 89.9,
      rate: 4.9,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["black"]
    },
    {
      id: 14,
      title: "Grey Soft Hoodie",
      price: 62.0,
      previousPrice: 79.9,
      rate: 4.7,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["grey"]
    },
    {
      id: 15,
      title: "Beige Oversize Hoodie",
      price: 64.5,
      previousPrice: 84.0,
      rate: 4.8,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["beige"]
    },
    {
      id: 16,
      title: "Blue Sport Hoodie",
      price: 59.9,
      previousPrice: 75.0,
      rate: 4.6,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["blue"]
    },
  
    {
      id: 17,
      title: "Classic Blue Jeans",
      price: 79.0,
      previousPrice: 99.0,
      rate: 4.8,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["blue"]
    },
    {
      id: 18,
      title: "Black Slim Jeans",
      price: 82.0,
      previousPrice: 109.0,
      rate: 4.7,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["black"]
    },
    {
      id: 19,
      title: "Grey Comfort Jeans",
      price: 74.5,
      previousPrice: 95.0,
      rate: 4.5,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Medium", "Large", "X-Large"],
      styles: ["casual"],
      colors: ["grey"]
    },
    {
      id: 20,
      title: "Light Denim Jeans",
      price: 77.0,
      previousPrice: 98.0,
      rate: 4.6,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Small", "Medium"],
      styles: ["casual"],
      colors: ["blue"]
    },
  
    {
      id: 21,
      title: "Cringe Pink Hoodie",
      price: 66.0,
      previousPrice: 88.0,
      rate: 4.1,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Small", "Medium"],
      styles: ["cringe"],
      colors: ["pink"]
    },
    {
      id: 22,
      title: "Cringe Yellow Shorts",
      price: 41.0,
      previousPrice: 55.0,
      rate: 4.0,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Medium", "Large"],
      styles: ["cringe"],
      colors: ["yellow"]
    },
    {
      id: 23,
      title: "Cringe Pattern Shirt",
      price: 53.0,
      previousPrice: 69.0,
      rate: 4.2,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Small", "Medium", "Large"],
      styles: ["cringe"],
      colors: ["white"]
    },
    {
      id: 24,
      title: "Cringe Wide Jeans",
      price: 89.0,
      previousPrice: 110.0,
      rate: 4.3,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Large", "X-Large"],
      styles: ["cringe"],
      colors: ["blue"]
    },
    {
      id: 25,
      title: "Cringe Oversize T-Shirt",
      price: 39.0,
      previousPrice: 49.0,
      rate: 4.1,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["Medium", "Large"],
      styles: ["cringe"],
      colors: ["green"]
    },
  
    {
      id: 26,
      title: "Casual Green T-Shirt",
      price: 28.0,
      previousPrice: 36.0,
      rate: 4.6,
      images: TSHIRT_IMAGES,
      category: "t-shirt",
      sizes: ["Small", "Medium"],
      styles: ["casual"],
      colors: ["green"]
    },
    {
      id: 27,
      title: "Relaxed Light Shorts",
      price: 31.0,
      previousPrice: 38.0,
      rate: 4.4,
      images: SHORTS_IMAGES,
      category: "shorts",
      sizes: ["Small", "Medium", "Large"],
      styles: ["casual"],
      colors: ["beige"]
    },
    {
      id: 28,
      title: "Beige Casual Shirt",
      price: 46.0,
      previousPrice: 58.0,
      rate: 4.5,
      images: SHIRT_IMAGES,
      category: "shirts",
      sizes: ["Small", "Medium"],
      styles: ["casual"],
      colors: ["beige"]
    },
    {
      id: 29,
      title: "Soft Brown Hoodie",
      price: 63.0,
      previousPrice: 79.0,
      rate: 4.7,
      images: HOODIE_IMAGES,
      category: "hoodie",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["brown"]
    },
    {
      id: 30,
      title: "Black Loose Jeans",
      price: 83.0,
      previousPrice: 105.0,
      rate: 4.6,
      images: JEANS_IMAGES,
      category: "jeans",
      sizes: ["Medium", "Large"],
      styles: ["casual"],
      colors: ["black"]
    }
  ];
  