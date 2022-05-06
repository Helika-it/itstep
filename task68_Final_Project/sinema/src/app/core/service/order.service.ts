import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  data: Array<Order> = [
    
  ]

  constructor(private http: HttpClient) { }

  currentOrderSubject = new BehaviorSubject<Order>({} as Order);//хранилище
  currentFilm = this.currentOrderSubject.asObservable();//подписчик

  get():Observable<any>{
    return this.http​.get("/api/orders")
  }

  getById(id: number):Observable<any>{
    return this.http.get("/api/orders/"+id);
  };

  // получение билетов по userId???
  getByUserId(userId: number):Observable<any>{
    return this.http.get("/api/orders/"+userId);
  };


  //! добавление
  create(order: any): Observable<any>{
    return this.http.post(
      "/api/orders",
      JSON.stringify(order),
      {'headers':{'content-type': 'application/json'}  
    });
  }

  //! удаление
  remove(id: number): Observable<any>{
    return this.http.delete("/api/orders/"+id);
  }

}
