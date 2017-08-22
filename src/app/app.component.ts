import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav = ['Gmail', 'Images'];
  googleUrl = 'https://www.google.com';
  googleImg = '../assets/img/google.png';
  item1 = ['Advertising', 'Business', 'About'];
  item2 = ['Privacy', 'Terms', 'Settings'];
  form;
  errorAlert = 'This field is required';
  visible = true;

    constructor() {
      this.form = new FormGroup({
        email: new FormControl('' , [
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*')
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ])

      });
    }


    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {}


    submitForm(user) {
      console.log(user);
    }

    popUp() {
      this.visible = !this.visible;
    }
}
