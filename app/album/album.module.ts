import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import {PhotoService} from './../shared/services/photo.service.ts';

import { AlbumComponent, AlbumMainComponent
	,routing
	,moduleRoutingProviders
	
	, PhotoService
 } from './index';

@NgModule({
    imports: [
		CommonModule
		,routing
	],
    declarations: [	
		AlbumMainComponent
		,AlbumComponent
	],
	providers : [
		moduleRoutingProviders
		, PhotoService
	]
})

export class AlbumModule { }