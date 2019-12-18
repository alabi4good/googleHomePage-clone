import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loginAnimation', [

      state('hide', style({
        opacity: 0,
      })),

      state('show', style({
        opacity: 1,
      })),
      transition('hide <=> show', animate('400ms ease-in')),
    ])
  ]
})
export class AppComponent {
  nav = ['Gmail', 'Images'];
  googleUrl = 'https://www.google.com';
  googleImg = 'assets/img/google.png';
  item1 = ['Advertising', 'Business', 'About'];
  item2 = ['Privacy', 'Terms', 'Settings'];
  form;
  errorAlert = 'This field is required';
  state = 'hide';

    constructor() {
      this.form = new FormGroup({
        email: new FormControl('', [
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
    ngOnInit() {
  
    }
    

    submitForm(user) {
      console.log(user);
    }

    popUp() {
      this.state = this.state === 'hide' ? this.state = 'show' : this.state = 'hide';
    }

    //hide the log in pop up when you click outside of it
    onClickOutside(e: Event) {
      //this is how to explicitly tell angular to get the target elements
      if((<HTMLElement>e.target).id !== "singIn"){
        return this.state = 'hide';
      }

    }
}
