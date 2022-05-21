import React from "react";
import { Category } from "../types/category";
interface IPost {
    id : number,
    title : string,
    contents : string,
    date : Date,
    category : Category,
}

class Post implements IPost { 
    constructor(readonly id:number, readonly title: string, readonly contents: string, readonly date : Date, readonly category: Category){}
}

export default Post