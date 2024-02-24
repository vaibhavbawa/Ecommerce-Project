import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/Services/product-service.service';
import { CategoryService } from '../../services/category.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];
  couponCategories: any[] = [];

  //   {
  //     id: 1,
  //     categoryId: 1,
  //     imageUrl: "https://th.bing.com/th/id/OIP._YTjRLOU0vLqDfxzEFNEugHaLH?rs=1&pid=ImgDetMain",
  //     imgLogo: "assets/home-material/card1.png",
  //     // imageUrl: "assets/category-material/menu.png",
  //     name: "Men's Casual Shirt",
  //     description: "A stylish and comfortable casual shirt for men.",
  //     price: 39.99,
  //     disc_price: 29.99,
  //   },
  //   {
  //     id: 2,
  //     categoryId: 1,
  //     imageUrl: "https://www.pngmart.com/files/4/Floral-Dress-PNG-Transparent-Image.png",
  //     imgLogo: "assets/home-material/card2.png",
  //     name: "Women's Floral Dress",
  //     description: "A beautiful floral dress for women, perfect for summer outings.",
  //     price: 49.99,
  //     disc_price: 39.99,
  //   },
  //   {
  //     id: 3,
  //     categoryId: 1,
  //     imageUrl: "https://th.bing.com/th/id/OIP.nijap8YdLsF3bDQtmuot4AAAAA?rs=1&pid=ImgDetMain",
  //     imgLogo: "assets/home-material/card3.png",
  //     name: "Men's Formal Suit",
  //     description: "A classic formal suit for men, ideal for business meetings or special occasions.",
  //     price: 149.99,
  //     disc_price: 100.99,
  //   },
  //   {
  //     id: 4,
  //     categoryId: 1,
  //     imageUrl: "https://th.bing.com/th/id/OIP.OxbOCxTOZVJCkdnkwbccTQHaK5?rs=1&pid=ImgDetMain",
  //     imgLogo: "assets/home-material/card4.png",
  //     name: "Women's Denim Jacket",
  //     description: "A trendy denim jacket for women, great for layering in any season.",
  //     price: 69.99,
  //     disc_price: 49.99,
  //   },
  //   {
  //     id: 5,
  //     categoryId: 1,
  //     imageUrl: "https://th.bing.com/th/id/OIP.FnU3WVVJE1PNBzB1KP-KmgHaH8?rs=1&pid=ImgDetMain",
  //     imgLogo: "assets/home-material/card1.png",
  //     name: "Unisex Hoodie",
  //     description: "A cozy hoodie suitable for both men and women, perfect for chilly days.",
  //     price: 54.99,
  //     disc_price: 30.99,
  //   },
  //   {
  //     id: 6,
  //     categoryId: 2,
  //     imageUrl: "path/to/image1.jpg",
  //     name: "Men's Casual Sneakers",
  //     description: "Comfortable and stylish sneakers for everyday wear.",
  //     price: 59.99,
  //   },
  //   {
  //     id: 7,
  //     categoryId: 2,
  //     imageUrl: "path/to/image2.jpg",
  //     name: "Women's High Heels",
  //     description: "Elegant high heels for formal occasions.",
  //     price: 79.99,
  //   },
  //   {
  //     id: 8,
  //     categoryId: 2,
  //     imageUrl: "path/to/image3.jpg",
  //     name: "Unisex Sports Shoes",
  //     description: "Versatile sports shoes suitable for various activities.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 9,
  //     categoryId: 2,
  //     imageUrl: "path/to/image4.jpg",
  //     name: "Kids' Light-Up Sneakers",
  //     description: "Fun and colorful sneakers with LED lights for kids.",
  //     price: 39.99,
  //   },
  //   {
  //     id: 10,
  //     categoryId: 2,
  //     imageUrl: "path/to/image5.jpg",
  //     name: "Men's Leather Boots",
  //     description: "Stylish leather boots suitable for casual or formal wear.",
  //     price: 89.99,
  //   },
  // ] 
  images: string[] = [
    'assets/home-material/shose-img.png',
    'assets/home-material/bag-img.png',
    'assets/home-material/bottle-img.png'
  ];

  pageSize: number = 5; // Number of items per page
  currentPage: number = 1;

  currentImage: string | undefined;
  currentIndex = 0;
  interval: any;


  constructor(private productService: ProductServiceService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchProducts();
     this.categoryService.getCategory().subscribe(response => {
      if (response && response.data && Array.isArray(response.data)) {
        this.couponCategories = response.data;
      } else {
        console.error("Categories data format is unexpected:", response);
      }
    });

    this.currentImage = this.images[this.currentIndex];
    // this.startImageSlider();
  }

  // startImageSlider() {
  //   this.interval = setInterval(() => {
  //     this.nextImage();
  //   }, 3000); // Change image every 3 seconds
  // }
  

  // nextImage() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //   this.currentImage = this.images[this.currentIndex];
  // }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      data => {
        if (data && data.data) {
          this.products = data.data;
        } else {
          console.error('Failed to fetch products');
        }
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );

}

getCurrentPageProducts(): any[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = Math.min(startIndex + this.pageSize, this.products.length);
  return this.products.slice(startIndex, endIndex);
}

onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
}

getPages(): number[] {
  const pageCount = Math.ceil(this.products.length / this.pageSize);
  return Array(pageCount).fill(0).map((x, i) => i + 1);
}


  // bestDeals(){
  //   console.log("Best Deals fun call");
  // }
  // other(){
  //   console.log("Other fun call");
  // }
  // kitchen(){
  //   console.log("Kitchen fun call");
  // }
  // homeApplinces(){
  //   console.log("Home Applinces fun call");
  // }
  // homeKitchen(){
  //   console.log("Home Kitchen fun call");
  // }
  // babyKids(){
  //   console.log("Baby and Kids fun call");
  // }
  // watches(){
  //   console.log("Watches fun call");
  // }

  // ------------------------------------------------------------
  
  // clothing(){
  //   console.log("Call a function Clothing");
  // }
  
  // shoes(){
  //   console.log("call a function shoes");
  // }

  // giftAndFlowers(){
  //   console.log("call a function Gift and Function");
  // }

  // healthAndBeauty(){
  //   console.log("call a function Health and Beauty");
  // }

  // accessoriesAndBags(){
  //   console.log("call a function Accessories and Bags");
  // }

  // homeWare(){
  //   console.log("call a function Homeware");
  // }

  // babyAndKids(){
  //   console.log()
  // }
 
}
