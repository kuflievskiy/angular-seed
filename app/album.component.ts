import {Component, OnInit} from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import {PhotoService} from './photo.service';
import { Router, ActivatedRoute }   from '@angular/router';


@Component({
    template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `
})
export class AlbumComponent implements OnInit {
    isLoading = true;
    photos;

    id:number;
    constructor(private _photoService: PhotoService,
                private route: ActivatedRoute,
                private router: Router

    ){
        console.log('album');
        //console.log(this.route);
        //console.log(this.router);


    }
    
    ngOnInit(){

        console.log('fetched value');
        console.log(this.route.params.getValue('id').id);

        this.id = this.route.params.getValue('id').id;
        /*
        if((<any>this.route.params).value.id){
            this.id=(<any>this.route.params).value.id;
            console.log('ID = '+ this.id);
        }
        */

        this._photoService.getPhotos(this.id)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}