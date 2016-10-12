import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule }    from '@angular/http';

import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';
import {PhotoService} from './shared/services/photo.service';


import {FormsModule, Form, ReactiveFormsModule} from "@angular/forms";

import { AlbumModule } from './album/album.module';

@NgModule({
  imports:      [ 
	BrowserModule 
	,routing
	, HttpModule
	
	,FormsModule
	//, Form
	, ReactiveFormsModule
	
	// custom modules
	,AlbumModule
  ]
  ,declarations: [ 
	AppComponent
	
	,AlbumsComponent
	, ContactComponent
  ]
  ,bootstrap:    [ AppComponent ]
  ,providers:[
	appRoutingProviders
	,  {provide: LocationStrategy, useClass: HashLocationStrategy}
	, PhotoService
  ]
})
export class AppModule { }