import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Blog } from '../data/blog';
import { Meta } from '../data/meta';

@Injectable()
export class MyHttpService {

    private http : Http ;
    private headers = new Headers({'Content-Type': 'application/json'});
    private meta : Meta;
  
    constructor(http : Http) { 
        this.http = http;
    }
  
    get():Promise<Blog[]>{
        return this.http.get('http://localhost:18080/blogApi/findAllBlogInfo.do')
                .toPromise().then(r => r.json().result as Blog[]);
    }
  
    // post():Promise<Blog[]>{
    //     return this.http.post(
    //         'http://localhost:8080/elogistics/api/company/selectdictionary',
    //         {
    //             'dictValue':24,
    //             'headers':this.headers
    //         }).toPromise().then(r => r.json().data as Blog[]);
    // }

}