import { Comment } from './comment';
export let comments:Comment[] = [];

export class CommentService {

    //添加评论
    public addComment(comment:Comment){
        comment.id = this.getMaxId();
        comments.push(comment);
    }

    //获取评论
    public getBlogComments(blogId:number){
        return comments.filter(x => x.blogId == blogId);
    }

    //获取最大id
    private getMaxId():number{
        var maxId = 1;
        comments.forEach(x => {
            if(x.id >= maxId){
                maxId = x.id + 1;
            }
        })
        return maxId;
    }

}