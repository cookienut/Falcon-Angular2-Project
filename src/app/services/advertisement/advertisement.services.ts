import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

    constructor(private my_http: Http) { }         //constructor


    postNewAdvertisement(newAdv: any) {

        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976eb651c0edf75e32798e4');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        let jsonReq = { "title": newAdv.title, "name": newAdv.name, "category": newAdv.category, "description": newAdv.description };
        
        let obj = this.my_http.post(url, jsonReq, options).map((response: Response) => response.json());
        obj.subscribe((data) => console.log("object is:", data));


    }

    getAdvertisementCategories(){

        let url = "http://192.168.3.144:9000/categories";
        return this.my_http.get(url).
            map((response: Response) => response.json());

    }

    getAdvertisementActions(){

        let url = "http://192.168.3.144:9000/actions";
        return this.my_http.get(url).
            map((response: Response) => response.json());

    }

    getMyPostedAds(){

        let url = "http://192.168.3.144:9000/posts";
        let headers = new Headers();
        headers.append('auth-token', '5976eb651c0edf75e32798e4');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.my_http.get(url, options).
            map((response: Response) => response.json());

    }

    getSpecificAd(id:string){
        let url = "http://192.168.3.144:9000/post?postId="+id;
        let headers = new Headers();
        headers.append('auth-token', '5976eb651c0edf75e32798e4');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.my_http.get(url, options).
            map((response: Response) => response.json());
    }

    deleteSpecificAd(id:string){
        let url = "http://192.168.3.144:9000/post?postId=";
        
        return this.my_http.delete(url+id).
            map((response: Response) => response.json());
    }


}
