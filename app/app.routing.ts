import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ContactComponent} from './contact.component';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';


///
import {Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate }   from '@angular/router';

@Injectable()
class CanDeactivateContactComponent implements CanDeactivate<ContactComponent> {
    constructor() {}
    canDeactivate(
        component: ContactComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return confirm('Are you sure?');
    }
}
////

const appRoutes: Routes = [
    { path: '', component: AlbumsComponent }
    ,{ path: 'albums', component: AlbumsComponent }
    ,{ path: 'album/:id', component: AlbumComponent }
    ,{ path: 'contact',component: ContactComponent,  canDeactivate: [CanDeactivateContactComponent] }
    , { path : '**', redirectTo: 'albums'}
];

export const appRoutingProviders: any[] = [
    CanDeactivateContactComponent
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);