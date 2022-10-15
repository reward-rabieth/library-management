
import { Type } from "@sinclair/typebox"


const book=Type.Object({
    name:Type.String(),
    address:Type.String(),
    phone:Type.String(),
    email:Type.String(),
    shortId:Type.String(),
    updatedAt:Type.String(),
    createdAt:Type.String(),
    _id:Type.String(),
   

})

export const createBookSchema={


   tags:['Books'],
  
    description:'Create a new book',
  body:Type.Object({
     name:Type.String({
        default:"default name"
     }),
    }),
    response:{
201:book,

    }
}