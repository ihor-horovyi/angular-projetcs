import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GithubService} from './service/github.service';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
