import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { AlbumComponent, AlbumMainComponent } from './index';

const appRoutes: Routes = [ 
	{ path: 'album', component: AlbumMainComponent 
		,children : [
				{ path : ':id', component: AlbumComponent }
		]
	}
];

export const moduleRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);