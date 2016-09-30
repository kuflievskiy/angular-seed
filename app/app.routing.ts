import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";


import {AlbumsComponent} from './albums.component';

const appRoutes: Routes = [
    { path: '', component: AlbumsComponent }
   
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);