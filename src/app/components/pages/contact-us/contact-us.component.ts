import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    contactForm:FormGroup;
    constructor(private contact : ContactService, private fb: FormBuilder) { }
    result: string = '';
    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.compose([Validators.required, Validators.email])]],
            mobile: ['', Validators.required],
            message: ['', Validators.required]
        })
    }

    bgImage = [
        {
            img: 'assets/img/register-shape.jpg'
        }
    ]


    sendContact(){
        this.contact.PostMessage(this.contactForm.value)
          .subscribe(response => {
             console.log(response)
        })
        //console.log(this.contactForm.value);
    }

}