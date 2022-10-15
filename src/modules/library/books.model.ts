import {getModelForClass, prop} from "@typegoose/typegoose";

export class Books{
    @prop({
        type:String,
     required:true,
        
    })
    name:string;
    @prop({
        type:String,
        default:false,
    })
    address:String
    @prop({
        type:String,
       default:false,
    })
    phone:String
    @prop({
        type:String,
       default:false,
    })
    email:String
    
    @prop({
        type:String,
        required:true,
    })
    shortId:String
   

   

}

export const LibraryModel = getModelForClass(Books,{
    schemaOptions:{
        timestamps:true,
        
    }
});


