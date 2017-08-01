import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/advertisement/advertisement.services';
import { Router } from "@angular/router";

@Component({
  selector: 'user-component',
  templateUrl: `./userProfile.html`,
  providers: [ProductService]
})

export class UserComponent {

  adTable:Array<any>=[];
  SpecificAd:Array<any>=[];
  constructor(private router:Router, private productService: ProductService) {}


  onSubmit() {
    console.log("Submit pressed in User Component");
  }

  getMyPosts(){

    this.adTable=[];
    this.productService.getMyPostedAds().subscribe((data)=> { 
        this.adTable=data.data.mypostList;
    });
  }

  getThisPost(obj:any){

    let index=this.adTable.indexOf(obj,0);
    let id=this.adTable[index].id;
    console.log("Retrieved Ad Id:",id);
    this.SpecificAd=[];

    this.productService.getSpecificAd(id).subscribe((data)=> { 
        this.SpecificAd.push(data.data.mypost);
        console.log("Retrieved Ad:",this.SpecificAd);
    });

  }

   editPost(){

  }

  deletePost(obj:any){

    let index=this.adTable.indexOf(obj,0);
    let id=this.adTable[index].id;
    console.log("Deleted Ad Id:",id);

    this.productService.deleteSpecificAd(id).subscribe((data)=> {
        console.log(data);
    });

    this.getMyPosts();
  }

  getMyProfile(){

  }

  newAdd(){

        this.router.navigate(['postAdd']);
    }



}

  

