import { Route } from '@angular/router';
import { AlbumComponent, AlbumMainComponent } from './index';

export const AlbumRoutes: Route[] = [
	{ path: 'album', component: AlbumMainComponent 
		,children : [
				{ path : ':id', component: AlbumComponent }
		]
	}
];