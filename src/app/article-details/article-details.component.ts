import { Component, OnInit, Input,HostBinding,
        trigger, transition, animate,
        style, state } from '@angular/core';

/**
 * 获取路由参数
 */
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../data/blog';
import { BlogService } from '../data/blog.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})

export class ArticleDetailsComponent implements OnInit {

  @Input() blog:Blog;

  constructor(
    private bService : BlogService,
    private aRoute : ActivatedRoute,
    private router : Router,
    private location : Location
  ){};

  ngOnInit() {
    let id = this.aRoute.params
    .switchMap((params : Params) => params['id'])
    .subscribe(x => {
      this.bService.getSelectedBlog(+x).then(blog => {
        this.blog = blog;
      })
    })
  }

  back(){
    this.location.back();
  }

  doComment()
  {
    //[]中"comment"表示要导航到的路由，{}里面的内容是我们传递的参数；relativeTo表示相对与aRoute的路径
     this.router.navigate(["comment",{id:this.blog.id,title:this.blog.title}],{relativeTo:this.aRoute});
  }

}
