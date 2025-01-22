import { Key } from "readline";


export interface Product {
    _id:string,
    title:string,
    _type:"product";
    image : {
        _type : 'image';
        asset : {
            _ref : string;
            _type : 'reference';
        };
    }[];
    featured: boolean;
    colors?: any, index: Key | null | undefined;
    price: number;
    summary?:string;
    slug : {
        _type : "string"
        current : string
    }
}