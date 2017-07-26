import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/advertisement/advertisement.services';

@Component({
  selector: 'user-component',
  templateUrl: `./userProfile.html`,
  providers: [ProductService]
})

export class UserComponent {

  adTable:Array<any>=[];
  constructor(private productService: ProductService) {}


  onSubmit() {
    console.log("Submit pressed in User Component");
  }

  getMyPosts(){

    this.productService.getMyPostedAds().subscribe((data)=> { 
        this.adTable=data.data.mypostList;
    });
  }
   getAllPosts(){

  }

   editPost(){

  }

  deletePosts(){

  }

  getMyProfile(){

  }


}

  

