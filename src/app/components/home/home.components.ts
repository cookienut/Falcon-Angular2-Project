import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-home',
  templateUrl:`./home.html`,
})

export class HomeComponent  { 
  
    constructor(private router:Router){}

    
 }