import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/userService/user.services';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'login-register',
  templateUrl:`./loginRegister.html`,
  providers: [UserService]
})

export class LoginRegisterComponent  { 
  
  newUser:any;
  loginObj:any;
  logInObj: FormGroup;
  registerObj:FormGroup;
  constructor(private formBuilderx:FormBuilder, private userService: UserService) {


    this.logInObj = this.formBuilderx.group({

      usname: ['', [Validators.required]],
      psword: ['', [Validators.required]]

    });

    this.registerObj = this.formBuilderx.group({

      fnamex: ['', [Validators.required]],
      lnamex: ['', [Validators.required]],
      unamex: ['', [Validators.required]],
      pwordx: ['', [Validators.required]],
      cpwordx: ['', [Validators.required]],
      emailx: ['', [Validators.required]],
      phonex: ['', [Validators.required]]

    });
  }
    

    tryRegister(fname:any,lname:any,uname:any,pword:any,confirmpword:any,email:any,phone:any){
        if(pword==confirmpword) 
        { 
            this.newUser={ "firstName":fname, "lastName":lname, "userName":uname, "password":pword, "email":email, "phone":phone};
            console.log(this.newUser);
            this.userService.registerUser(this.newUser);
             alert("Registration Successful!");
        }
        else{
            alert("Password Mismatch!");
        }
    }

    tryLogin(uname:any,pword:any){
 
        this.loginObj={"userName":uname, "password":pword};
        console.log(this.loginObj);
        this.userService.loginUser(this.loginObj);

    }
}

 