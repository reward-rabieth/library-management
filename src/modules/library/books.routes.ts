import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { booksHandler } from "./books.controller";
import {createBookSchema} from "./books.schema"


//library routes
export function booksRoute(
    app:FastifyInstance,
    options:FastifyPluginOptions,
    done:()=>void
){

   app.post('/',{
    schema:createBookSchema,
   },booksHandler)
   done();

   
}