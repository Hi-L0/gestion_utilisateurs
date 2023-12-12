import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgIconsModule } from '@ng-icons/core';
// import { heroUsers } from '@ng-icons/heroicons'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { MenuComponent } from './elements/menu/menu.component';
import { HomeComponent } from './elements/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UsersModule } from './elements/pages/users/users.module';

export function HttpLoadFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // NgIconsModule.withIcons({ heroUsers }),
    AppRoutingModule,
    NgSelectModule,
    UsersModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoadFactory,
        deps:[HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
