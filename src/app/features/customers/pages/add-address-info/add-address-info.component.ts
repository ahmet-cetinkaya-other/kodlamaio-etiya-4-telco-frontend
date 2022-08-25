import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address-info',
  templateUrl: './add-address-info.component.html',
  styleUrls: ['./add-address-info.component.css']
})
export class AddAddressInfoComponent implements OnInit {
  addressForm = new FormGroup({
    houseFlatNumber: new FormControl('', Validators.required),
    street: new FormControl('',Validators.required),
    addressDescription: new FormControl('', Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
