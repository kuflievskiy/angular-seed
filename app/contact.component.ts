import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {

    form: FormGroup;

    constructor(private fb: FormBuilder){
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
    }
}