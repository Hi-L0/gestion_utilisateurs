import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'TP4_projet';

  constructor(private translate:TranslateService){
      translate.addLangs(['en','fr']);
      // translate.setDefaultLang('en');
  }

  ngOnInit(): void {
      // const initialLanguage = 'en'; // Set your initial language here
      // this.translate.use(initialLanguage);
  }

  onLanguageSelect=(language:string)=>{
    this.translate.use(language);
  }

  ngOnDestroy(): void {
    
  }

}
