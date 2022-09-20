import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "./product.model";
@Injectable({
  //essa classe pode ser injetada em outras classes

  providedIn: "root",
})
export class ProductsService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar,
     private http: HttpClient) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
  create(product:Product) : Observable<Product> {
   return this.http.post<Product>(this.baseUrl, product);
  }
  readProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
}
