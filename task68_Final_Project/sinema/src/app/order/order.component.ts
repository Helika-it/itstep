import { Component, Injectable, OnInit } from '@angular/core';
import { Order, OrderService } from '../core';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.get().subscribe(
      ((data) => this.orders = data)
    );
  }

}
