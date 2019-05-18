import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formy';
 // public firstName = new FormControl('');
 //  public userData = new FormGroup({
 //    firstName: new FormControl(''),
 //    lastName: new FormControl(''),
 //    address: new FormGroup({
 //      city: new FormControl(''),
 //      street: new FormControl(''),
 //    })
 //  });
public userData = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    city: [''],
    street: [''],
  })
})
  constructor(private fb: FormBuilder) {
    //this.firstName.valueChanges.subscribe(value => console.log(value));
  }

  setName() {
    this.userData.patchValue({
      firstName: "Jas",
      lastName: "Malgosia",
    })

   // this.firstName.setValue('jakaswartosc');
  }
  onSubmit() {
  console.table(this.userData.value);
  }


}
