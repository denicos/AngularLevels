import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {


  @ViewChild('Form') addPropertyForm : NgForm;
  @ViewChild('formTabs') formTabs : TabsetComponent;

  propertyTypes : Array<string>  = ['House', 'Apartment', 'Duplex'];
  furnishTypes : Array<string>  = ['Fully', 'Semi', 'Unfurnished'];
  directions : Array<string> = ['East', 'West', 'South', 'North'];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("congrats form submited");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
