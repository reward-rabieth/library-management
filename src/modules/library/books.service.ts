import { nanoid } from "nanoid";
import { Books, LibraryModel } from "./books.model";

export async function createBook(input:any):Promise<Books>{
const shortId=`books_${nanoid()}`
return LibraryModel.create({
    shortId,
    ...input,})


}