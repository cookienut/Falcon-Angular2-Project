import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-home',
  templateUrl:`./home.html`,
})

export class HomeComponent  { 
  
    constructor(private router:Router){}

    newAdd(){

        this.router.navigate(['postAdd']);
    }

    viewProfile(){
        this.router.navigate(['userProfile']);
    }

 }