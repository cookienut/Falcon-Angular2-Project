import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Router } from "@angular/router";


@Injectable()
export class UserService {
    authToken:any;
    constructor(private my_http: Http, private router: Router) { }         //constructor


    registerUser(newUser: any) {

        let url = "http://192.168.3.144:9000/register";
        let jsonReq = newUser;
        
        let obj = this.my_http.post(url, jsonReq).
            map((response: Response) => response.json());
        obj.subscribe((data) => console.log("Registered User is:", data));

    }

    loginUser(loginObj:any){

        
        let url = "http://192.168.3.144:9000/login";
        let jsonReq = loginObj;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });


        let obj = this.my_http.post(url,jsonReq,options).
            map((response: Response) => response.json());
            
        obj.subscribe((data) =>{this.authToken=data.data["auth-token"];

            if(this.authToken===null)
            {
                alert("Invalid Login credentials!");
            }
            else
            {
                this.router.navigate(['userProfile']);
            }
        });
          
    }


}
