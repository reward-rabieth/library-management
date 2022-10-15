import { nanoid } from "nanoid"

import {describe,it,vi,expect} from "vitest"
import { createServer } from "../../../utils/createServer"

import * as bookService from "../books.service"


describe('/POST "api/books/ route',()=>{
    it('it should call the createBook service',async()=>{

const books={

name:"mock name",
address:"mock address",
phone:"mock phone",
email:"mock email",
shortId:nanoid(),
_id:'mock id',

updatedAt:new Date().toISOString(),
createdAt:new Date().toISOString(),
}


const createBookSpy=vi.spyOn(bookService,'createBook')
expect (createBookSpy.getMockName()).toEqual('createBook')

createBookSpy.mockResolvedValue(books)



        const server=await createServer()
        await server.ready()


        const payload={
            name:"test",


        }



       

        const response=await server.inject({
            
            method:'POST',
            url:'/api/books',
            payload,
        })

        expect(response.json()).toEqual(books);
       
        expect(createBookSpy).toHaveBeenCalledWith(payload)
      
    })
})