import { Component } from '@angular/core';
import { Blog } from '../data/blog';
import { BlogService } from '../data/blog.service';
import { MyHttpService } from '../data/MyHttp.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  blogList:Blog[];
  selectedBlog:Promise<Blog>;

  constructor(
    private bService:BlogService,
    private myhttpService:MyHttpService
  ) { 
    bService.getBlogs().then(blogs => {
      this.blogList = blogs;
    });
  }

  selectBlog(id:number){
    this.selectedBlog=this.bService.getSelectedBlog(id);
  }

}
