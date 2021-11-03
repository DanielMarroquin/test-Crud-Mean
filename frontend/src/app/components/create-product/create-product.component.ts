import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;


  constructor(private cp: FormBuilder,
              private router: Router,
              private toastr: ToastrService){
    
    
    this.productForm = this.cp.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addProduct() {
    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('price')?.value,
      price: this.productForm.get('price')?.value
    }
    console.log(PRODUCT);
    this.toastr.success('Ha registrado nuevo producto con éxito', '¡¡ FELICIDADES !!')
    this.router.navigate(['/']);
  }

}
