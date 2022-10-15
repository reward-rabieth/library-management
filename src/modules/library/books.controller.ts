import { FastifyRequest,FastifyReply } from "fastify";
import { logger } from "../../utils/logger";
import { createBook } from "./books.service";

export async  function  booksHandler(
    request:FastifyRequest,
    reply:FastifyReply
){

    try{

const library=await createBook(request.body)
return reply.status(201).send(library)
    }

    catch(e){

        logger.info(e,'book hanlder: error in creating book')
        return reply.code(400).send({message:'error in creating book'})


    }
}