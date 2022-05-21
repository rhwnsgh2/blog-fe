import { AxiosInstance } from "axios";
import Post from "../interfaces/post";

interface IPostApi{

}

class PostApi implements IPostApi{
    constructor(readonly axios: AxiosInstance){
        
    }

    async getPost(id : number): Promise<Post>{
        const result = await this.axios.get<Post>(`api/post/${id}`);
        return result.data;
    }

    async getAllPosts() : Promise<Post[]>{
        const result = await this.axios.get<Post[]>('api/posts');
        return result.data;
    }
}

export default PostApi;