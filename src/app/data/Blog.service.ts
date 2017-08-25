import { Injectable } from '@angular/core';
import { Blog } from './blog';
import 'rxjs/Rx';

import { MyHttpService } from '../data/MyHttp.service';

@Injectable()
export class BlogService {
  constructor(
    private myhttpService : MyHttpService
  ){}

  getBlogs():Promise<Blog[]>{
    return this.myhttpService.get();
  }

  getSelectedBlog(id:number):Promise<Blog>{
    return this.getBlogs().then(blogs => blogs.find(x => x.id == id));
  }
}

