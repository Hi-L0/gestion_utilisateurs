import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersListType } from '../types/users.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  getUsers=(pageNumber:number):Observable <UsersListType>=>{
    return this.httpClient.get<UsersListType>(`https://reqres.in/api/users?page=${pageNumber}&per_page=6`);
  }
}
