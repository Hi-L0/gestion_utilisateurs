import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType, UsersListType } from '../types/users.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  perPage=6;
  constructor(private httpClient:HttpClient) { }
  getUsers=(pageNumber:number):Observable <UsersListType>=>{
    return this.httpClient.get<UsersListType>(`${environment.apiLink}/users?page=${pageNumber}&per_page=${this.perPage}`);
  }

  deleteUser=(user:UserType):Observable<UsersListType>=>{
    return this.httpClient.delete<UsersListType>(`${environment.apiLink}/users/${user.id}`); //prolly this is how it deletes it
  }
}
