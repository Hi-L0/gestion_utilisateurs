import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{
  @Output() selectedLanguage =new EventEmitter<string>()
  languageSelected!:string;
  languages:{}[]=[
    {
      flag:'../../../assets/icons/flags/icons8-great-britain-48.png',
      name:'en'
    },
    {
      flag:'../../../assets/icons/flags/icons8-france-48.png',
      name:'fr'
    }
  ]

  ngOnInit(): void {
    this.languageSelected='en'
    // console.log(this.languageSelected)
  }

  onSelect=(event:any)=>{
    // console.log(this.languageSelected)
    this.selectedLanguage.emit(this.languageSelected);
  }
  

  ngOnDestroy(): void {
  }
}
