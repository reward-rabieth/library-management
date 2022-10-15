
import fastify from "fastify"
import swagger from "@fastify/swagger"
import { booksRoute } from "../modules/library/books.routes"

// import {version} from "../../package.json"




export function createServer(){

const app=fastify()

app.register(swagger, {
  routePrefix: '/docs',
  swagger: {
    tags: [
      {
        name: 'todo',
      },
    ],
    info: {
      title: 'Todo',
      description: 'A simple todo app',
      version,
    },
  },
  staticCSP: true,
  exposeRoute: true,
});


app.register(booksRoute,{prefix:'/api/books'})
return app

}   
