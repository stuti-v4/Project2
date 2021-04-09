import { Component, VERSION } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular ' + VERSION.major;
  constructor(public router: Router) {
  }
  imports: [
        FormsModule,
        ReactiveFormsModule
  ]
}
