import {Component, OnInit} from '@angular/core';
//import {PhotoService} from './photo.service';

import {PhotoService} from './shared/services/photo.service';
import {Http} from '@angular/http';

@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="let album of albums">
                <a routerLink="/album/{{album.id}}">
                {{ album.title }}
                </a>
                
            </li> 
        </ul>
		

    `
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}