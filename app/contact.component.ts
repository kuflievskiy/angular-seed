import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import { Router }   from '@angular/router';

@Component({
    templateUrl: '/app/contact.component.html'
})

export class ContactComponent {

    form: FormGroup;

    constructor(
        private fb: FormBuilder
        , private _router:Router
    ){
        this.form = this.fb.group({
            name: ['', [
                Validators.required
                ]
            ],
            comment: ['', [
                Validators.required
            ]]
        });


    }
    onSubmit(form){
        console.log(form);


        (<any>this._router).navigate('albums')
    }
}