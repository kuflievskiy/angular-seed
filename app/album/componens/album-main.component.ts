import {Component, OnInit, OnDestroy} from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import {PhotoService} from './../../photo.service';
import { Router, ActivatedRoute }   from '@angular/router';


@Component({
    template: `
        <h1>Album Main</h1>
		<router-outlet></router-outlet>
    `
})
export class AlbumMainComponent implements OnInit, OnDestroy {
    constructor(
		private _photoService: PhotoService,
                private route: ActivatedRoute,
                private router: Router

    ){
        console.log('album sub');

    }
    
    ngOnInit(){

    }

    ngOnDestroy() {
    }
}