import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ContactComponent} from './contact.component';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';

const appRoutes: Routes = [
    { path: '', component: AlbumsComponent }
    ,{ path: 'albums', component: AlbumsComponent }
    ,{ path: 'album/:id', component: AlbumComponent }
    ,{ path: 'contact',component: ContactComponent }
    , { path : '**', redirectTo: 'albums'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);