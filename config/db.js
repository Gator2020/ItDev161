import mongoose from 'mongoose';
import config   from 'config';
import { error } from 'console';
//Retrieves connection string
const db = config.get('mongoURI');

//conencts to Mongo
const connectDatabase = async() => 
{
    try
    {
        await mongoose.connect(db, {useUnifiedTopology:true, useCreateIndex:true,useNewUrlParser: true,
            useFindAndModify: false,
           });
        console.log('connected to mongo DB');
    }
   

    catch(error)
    {
        console.log(error.message + "error unable to connect");
        process.exit(1);
    }
    //zdz
   //export default connectDatabase;
}
;
   export default connectDatabase;

//runpls