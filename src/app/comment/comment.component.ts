import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../data/comment';
import { CommentService } from '../data/comment.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'article-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  BlogTitle:string;
  private comments:Comment[];
  private comment:Comment = new Comment();
  private blogId:number;
  constructor(
    private cService:CommentService,
    private aRoute:ActivatedRoute,
    private router:Router,
    private location:Location
  ) { }

  ngOnInit() {
    let id = this.aRoute.params
    .subscribe(params => {
      this.comments = this.cService.getBlogComments(+params["id"]);
      this.blogId = +params["id"];
      this.BlogTitle = params["title"];
    })
  }

  //提交评论
  sumComment(){
    if(this.comment.userName && this.comment.content){
      this.comment.blogId = this.blogId;
      this.cService.addComment(this.comment);
      this.comments = this.cService.getBlogComments(this.blogId);
      console.log(this.comments);
      this.comment = new Comment;
    }
  }

}
