import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductServiceService } from '../../services/Services/product-service.service';
import { CategoryService } from '../../services/category.service';


declare function Swiper():any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  products: any[] = [];
  couponCategories: any[] = [];
  isFavorite: boolean = false;
  selectedProductIndex: number = -1;
  // selectedProductIndex: number | null = null;
  
  
  pageSize: number = 10; // Number of items per page
  currentPage: number = 1;
  
  isOpen: boolean = false;
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

  }

  // This is sort section

  


  selectProduct(index: number): void {
    this.selectedProductIndex = index;
  }
  
  // toggleFavorite(): void {
  //   this.isFavorite = !this.isFavorite;
  // }

  toggleFavorite(index: number): void {
    if (this.selectedProductIndex === index) {
      this.selectedProductIndex = -1; // Deselect the product if already selected
    } else {
      this.selectedProductIndex = index; // Otherwise, select the product
    }
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      data => {
        if (data && data.data) {
          this.products = data.data;
          console.log("data",data.data.length)
          console.log(data.data)
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


openPopup() {
  this.isOpen = true;
}

closePopup() {
  this.isOpen = false;
}



}
