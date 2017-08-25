import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentComponent }   from './comment/comment.component';
import { ArticleDetailsComponent }   from './article-details/article-details.component';

const articleDetailsRoutes: Routes = [
  {
    path: 'article-details/:id',
    component: ArticleDetailsComponent,
    //路由子节点
    children: [
      {
        path: 'comment',
        component: CommentComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(articleDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleDetailsRoutingModule { }
