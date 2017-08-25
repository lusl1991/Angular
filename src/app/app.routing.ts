/**
 * 导入我们的路由模块RouterModule以获取路由的支持
 * 然后导入了Routes,这是一个路由的配置数组，我们需要使用它来配置我们的路由
 */
import {RouterModule,Routes} from "@angular/router";

/**
 * 导入NgModule装饰器
 */
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

/**
 * 接下来我们将我们的组件都导入了进来，使用一个Routes类型的变量去配置路由
 * 方式就如下所写，其中我们看到{ path: 'articledetail:id',component: ArticledetailComponent}中的id，
 * 这种路由的访问链接就是http://****.com/articledetail/id
 */
const routes:Routes=[
{ path: 'article',component: ArticleComponent},
{ path: 'form',component: FormComponent},
{ path: '',redirectTo:"/article",pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}