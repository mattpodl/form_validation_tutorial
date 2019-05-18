import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formy';
 // public firstName = new FormControl('');
  public userData = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {
    //this.firstName.valueChanges.subscribe(value => console.log(value));
  }

  setName() {
    this.userData.patchValue({
      firstName: "Jas",
      lastName: "Malgosia",
    })

   // this.firstName.setValue('jakaswartosc');
  }


}
