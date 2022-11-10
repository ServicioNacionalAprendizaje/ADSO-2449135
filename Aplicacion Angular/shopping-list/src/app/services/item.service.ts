import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = 'http://localhost:30001/items';
  httpOptions = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  items: Item[]= [
    {
      id: 0,
      title: 'manzana',
      precio: 1500,
      cantidad: 3,
      completado: false
    },
    {
      id: 1,
      title: 'pan',
      precio: 300,
      cantidad: 4,
      completado: true
    },
    {
      id: 2,
      title: 'DeToditos',
      precio: 2700,
      cantidad: 4,
      completado: false
    }
  ];

  constructor(private http:HttpClient) { }
  
  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
  toggleItem(item: Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item: Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }

}