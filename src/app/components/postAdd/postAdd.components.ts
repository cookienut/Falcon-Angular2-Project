import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/advertisement/advertisement.services';
import { Router } from "@angular/router";

@Component({
  selector: 'my-post-add',
  templateUrl: `./postAdd.html`,
  providers: [ProductService]
})

export class PostAddComponent {

  postAddObj: FormGroup;
  categories:Array<any>=[];

  advertisementActions:Array<any>=[];


  constructor(private router:Router, private formBuilderx: FormBuilder, private productService: ProductService) {
    
    productService.getAdvertisementCategories().subscribe((data)=> { 
      this.categories=data.data.itemList;

    });

    productService.getAdvertisementActions().subscribe((data)=> { 
              this.advertisementActions=data.data.actionList;  
              console.log("Allowed Actions on Posts:",this.advertisementActions);
    });

    this.postAddObj = this.formBuilderx.group({

      title: ['Product name', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      name: ['Your name', [Validators.required, Validators.minLength(3)]],
      category: [],
      description:['Description and Amount', [Validators.required, Validators.minLength(10)]]

    });
  }

  

  onSubmit() {
    console.log(this.postAddObj.value);
    alert("Post Successful!");
    this.gohome();
  }

  postNewAdv(){
    
      let newObj={"title":this.postAddObj.value.name,"name":this.postAddObj.value.title,"category":this.postAddObj.value.category,"description":this.postAddObj.value.description}
      this.productService.postNewAdvertisement(newObj);
  }

  allowedActions(){

      let actions=this.productService.getAdvertisementActions();
      console.log(actions);
  }

  gohome()
  {
    this.router.navigate(['userProfile']);
  }

  getPostActions()
  {
    return this.advertisementActions;
  }

}