import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ContactComponent} from './contact.component';

import {AlbumsComponent} from './albums.component';

const appRoutes: Routes = [
    { path: '', component: AlbumsComponent }
    ,{ path: 'albums', component: AlbumsComponent }
    ,{ path: 'contact',component: ContactComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);