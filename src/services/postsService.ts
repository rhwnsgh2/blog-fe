import PostApi from "../api/postApi";
import Post from "../interfaces/post";

interface IPostService {
    getPost : (id:number) => Promise<Post>,
    getAllPosts : () => Promise<Post[]>,

}

export class PostsService implements IPostService {
    constructor(readonly postApi: PostApi){}
    async getPost(id:number): Promise<Post>{
        const post = await this.postApi.getPost(id);
        return post;
    }
    async getAllPosts(): Promise<Post[]>{
        const posts = await this.postApi.getAllPosts();
        return posts;
    }
}