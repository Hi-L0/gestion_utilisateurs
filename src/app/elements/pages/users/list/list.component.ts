import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserType, UsersListType } from 'src/app/types/users.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy{

  userSub!:Subscription;
  apiResponse!:UsersListType;
  data!:UserType[];
  currentPage:number=1;
  totalpages!:number;
  pagination:number[]=[];
  loading:boolean=true;
  constructor(private userService:UsersService ){}
  
  ngOnInit(): void {
    this.loadData()
   
  }
  loadData(){
    this.userSub=this.userService.getUsers(this.currentPage).subscribe(res=>{
      this.apiResponse=res;
      this.totalpages=res.total_pages;
      this.data=res.data;
      this.loading=false;
    },(error) => {
      console.error('Error fetching data:', error);
      this.loading = false; // Set loading to false if an error occurs
    })
  }
  allPagesNumber=():number[]=>{
    return Array.from({ length: this.totalpages }, (_, index) => index + 1);
  }
  navigateTo(page:number){
    if(page!==this.currentPage){
      this.currentPage=page;
      this.loadData();
    }

  }

  loadPreviousPage=():void=>{
    if(this.currentPage>1){
      this.currentPage--;
      this.loadData();
    }
  }


  loadNextPage(): void {
    if (this.apiResponse && this.currentPage < this.apiResponse.total_pages) {
      this.currentPage++;
      this.loadData();
    }
  }
  deleteUser=(user:UserType)=>{
    alert(
      `you sure wanna delete this user!! well it's still in the making but here is your user's name ${user.first_name}`
    );
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
