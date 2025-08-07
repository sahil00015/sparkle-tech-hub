import laptopImage from "@/assets/laptop-1.jpg";
import phoneImage from "@/assets/phone-1.jpg";
import tabletImage from "@/assets/tablet-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  description?: string;
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "laptop-1",
    name: "MacBook Pro 16-inch",
    price: 2399,
    originalPrice: 2599,
    image: laptopImage,
    rating: 5,
    reviews: 128,
    category: "laptops",
    inStock: true,
    description: "The most powerful MacBook Pro ever with M2 Pro chip",
    specs: {
      "Processor": "Apple M2 Pro",
      "Memory": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "16-inch Liquid Retina XDR"
    }
  },
  {
    id: "laptop-2",
    name: "Dell XPS 13 Plus",
    price: 1299,
    originalPrice: 1499,
    image: laptopImage,
    rating: 4,
    reviews: 89,
    category: "laptops",
    inStock: true,
    description: "Ultra-portable laptop with stunning InfinityEdge display",
    specs: {
      "Processor": "Intel Core i7-1260P",
      "Memory": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "13.4-inch 3.5K OLED"
    }
  },
  {
    id: "phone-1",
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    image: phoneImage,
    rating: 5,
    reviews: 256,
    category: "smartphones",
    inStock: true,
    description: "The ultimate iPhone with titanium design and Action button",
    specs: {
      "Chip": "A17 Pro",
      "Storage": "128GB",
      "Display": "6.1-inch Super Retina XDR",
      "Camera": "48MP Main"
    }
  },
  {
    id: "phone-2",
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    image: phoneImage,
    rating: 5,
    reviews: 198,
    category: "smartphones",
    inStock: true,
    description: "The most advanced Galaxy smartphone with S Pen",
    specs: {
      "Processor": "Snapdragon 8 Gen 3",
      "Storage": "256GB",
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Camera": "200MP Main"
    }
  },
  {
    id: "tablet-1",
    name: "iPad Pro 12.9-inch",
    price: 1099,
    originalPrice: 1199,
    image: tabletImage,
    rating: 5,
    reviews: 167,
    category: "tablets",
    inStock: true,
    description: "The ultimate iPad experience with M2 chip",
    specs: {
      "Chip": "Apple M2",
      "Storage": "128GB",
      "Display": "12.9-inch Liquid Retina XDR",
      "Connectivity": "Wi-Fi + Cellular"
    }
  },
  {
    id: "tablet-2",
    name: "Microsoft Surface Pro 9",
    price: 899,
    image: tabletImage,
    rating: 4,
    reviews: 94,
    category: "tablets",
    inStock: false,
    description: "The laptop-class performance of Surface Pro",
    specs: {
      "Processor": "Intel Core i5",
      "Memory": "8GB RAM",
      "Storage": "256GB SSD",
      "Display": "13-inch PixelSense"
    }
  }
];

export const categories = [
  {
    name: "Laptops",
    path: "/laptops",
    image: laptopImage,
    description: "High-performance laptops for work and gaming",
    productCount: 24
  },
  {
    name: "Smartphones",
    path: "/smartphones", 
    image: phoneImage,
    description: "Latest smartphones with cutting-edge technology",
    productCount: 18
  },
  {
    name: "Tablets",
    path: "/tablets",
    image: tabletImage,
    description: "Versatile tablets for productivity and entertainment",
    productCount: 12
  },
  {
    name: "Accessories",
    path: "/accessories",
    image: phoneImage,
    description: "Essential accessories for your devices",
    productCount: 36
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};